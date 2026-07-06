#!/usr/bin/env node
/**
 * Denylist gate — scans repository content AND filenames before commit.
 *
 * Design note (see docs/how-this-repo-was-sanitized.md): the sensitive terms
 * themselves are NOT hard-coded here — a committed hook that listed the private
 * names would itself be the leak. This script enforces generic patterns
 * (emails, phone shapes, private-system path fragments) and additionally loads
 * a local, git-ignored file `.denylist.local` (one regex per line, `#` for
 * comments) carrying the specific terms. Run with the local file present;
 * CI or a clone without it still gets the generic protection.
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

// Generic patterns — safe to publish, catch classes of leak rather than names.
const GENERIC = [
  { name: "email address", re: /[a-zA-Z0-9._%+-]+@(?!(example|users\.noreply\.github)\.)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/ },
  { name: "US phone shape", re: /(?<!\d)(\+1[\s.-]?)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}(?!\d)/ },
  { name: "secret-looking token", re: /(api[_-]?key|token|secret)\s*[:=]\s*['"][A-Za-z0-9_\-]{16,}/i },
  // Private-system path fragments and named terms live in .denylist.local —
  // hard-coding them here would disclose the very structure being screened.
];

const SKIP_DIRS = new Set([".git", "node_modules"]);
const BINARY_EXT = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".ico", ".pdf"]);

function loadLocal() {
  const p = join(ROOT, ".denylist.local");
  if (!existsSync(p)) return [];
  return readFileSync(p, "utf8")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith("#"))
    .map((l) =>
      l.startsWith("cs:")
        ? { name: "local denylist (case-sensitive)", re: new RegExp(l.slice(3)) }
        : { name: "local denylist", re: new RegExp(l, "i") }
    );
}

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* walk(full);
    else yield full;
  }
}

const rules = [...GENERIC, ...loadLocal()];
const hits = [];
let pendingTodos = 0;

for (const file of walk(ROOT)) {
  const rel = relative(ROOT, file).replaceAll("\\", "/");
  if (rel === "tools/check-denylist.mjs" || rel === ".denylist.local") continue; // don't scan the gate or its git-ignored term list

  // Filenames are scanned with every rule — paths leak too.
  for (const { name, re } of rules) {
    if (re.test(rel)) hits.push({ file: rel, rule: name, where: "filename" });
  }
  const ext = rel.slice(rel.lastIndexOf(".")).toLowerCase();
  if (BINARY_EXT.has(ext)) continue;
  const text = readFileSync(file, "utf8");
  for (const { name, re } of rules) {
    const m = text.match(re);
    if (m) hits.push({ file: rel, rule: name, where: `content: "${m[0].slice(0, 60)}"` });
  }
  pendingTodos += (text.match(/PUBLISH-TODO/g) || []).length;
}

if (!existsSync(join(ROOT, ".denylist.local"))) {
  console.warn("⚠ .denylist.local not found — running with generic patterns only.");
}
if (pendingTodos) {
  console.warn(`⚠ ${pendingTodos} PUBLISH-TODO marker(s) still unresolved.`);
}
if (hits.length) {
  console.error(`✖ denylist gate: ${hits.length} hit(s)\n`);
  for (const h of hits) console.error(`  ${h.file} [${h.rule}] ${h.where}`);
  process.exit(1);
}
console.log(`✓ denylist gate clean (${rules.length} rules, filenames + content).`);
