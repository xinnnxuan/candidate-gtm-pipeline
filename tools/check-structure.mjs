#!/usr/bin/env node
/**
 * Structure gate — verifies the repository's promised shape before commit.
 *
 * Checks, with zero dependencies:
 *   1. Required paths exist (stations, contracts, evidence indexes, case, evals,
 *      changelog, legacy moved-stubs).
 *   2. Every relative Markdown link resolves to a real file.
 *   3. Every anchor (`file.md#heading` or `#heading`) resolves to a real heading
 *      or explicit `<a id="...">` in the target file.
 *
 * Run beside tools/check-denylist.mjs in the pre-commit hook and in CI — the
 * same script in both places, so local and remote cannot drift.
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, relative, resolve } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

const REQUIRED = [
  "README.md",
  "LICENSE.md",
  "CHANGELOG.md",
  "evals/README.md",
  "cases/one-opportunity-through-six-stages/README.md",
  "cases/one-opportunity-through-six-stages/01-market-research.md",
  "cases/one-opportunity-through-six-stages/02-audience-strategy.md",
  "cases/one-opportunity-through-six-stages/03-positioning-messaging.md",
  "cases/one-opportunity-through-six-stages/04-marketing-operations.md",
  "cases/one-opportunity-through-six-stages/05-lifecycle-operations.md",
  "cases/one-opportunity-through-six-stages/06-revenue-analytics.md",
  "skills/README.md",
  "skills/01-market-research/README.md",
  "skills/01-market-research/opportunity-qualification/SKILL.md",
  "skills/01-market-research/opportunity-qualification/EVIDENCE.md",
  "skills/02-audience-strategy/README.md",
  "skills/02-audience-strategy/audience-routing/SKILL.md",
  "skills/02-audience-strategy/audience-routing/EVIDENCE.md",
  "skills/03-positioning-messaging/README.md",
  "skills/03-positioning-messaging/buyer-ready-proof/SKILL.md",
  "skills/03-positioning-messaging/buyer-ready-proof/EVIDENCE.md",
  "skills/03-positioning-messaging/buyer-ready-proof/graders.md",
  "skills/03-positioning-messaging/marketing-reframe/SKILL.md",
  "skills/03-positioning-messaging/marketing-reframe/EVIDENCE.md",
  "skills/04-marketing-operations/README.md",
  "skills/04-marketing-operations/application-release-qa/SKILL.md",
  "skills/04-marketing-operations/application-release-qa/EVIDENCE.md",
  "skills/04-marketing-operations/application-release-qa/graders.md",
  "examples/application-release-qa-evaluation.md",
  "skills/05-lifecycle-operations/README.md",
  "skills/05-lifecycle-operations/relationship-follow-through/SKILL.md",
  "skills/05-lifecycle-operations/relationship-follow-through/EVIDENCE.md",
  "skills/05-lifecycle-operations/inbox-to-pipeline-sync/SKILL.md",
  "skills/05-lifecycle-operations/inbox-to-pipeline-sync/EVIDENCE.md",
  "skills/05-lifecycle-operations/relationship-ledger-sync/SKILL.md",
  "skills/05-lifecycle-operations/relationship-ledger-sync/EVIDENCE.md",
  "skills/06-revenue-analytics/README.md",
  "skills/06-revenue-analytics/decision-learning/SKILL.md",
  "skills/06-revenue-analytics/decision-learning/EVIDENCE.md",
  "skills/06-revenue-analytics/decision-learning/retrospective.command.md",
  // Legacy moved-stubs — every skill URL published in July 2026 must never 404.
  "skills/jd-loop-routing/SKILL.md",
  "skills/resume-tailor/EXCERPT.md",
  "skills/resume-tailor/graders.md",
  "skills/systemize-learnings/SKILL.md",
  "skills/systemize-learnings/retrospective.command.md",
  "skills/marketing-reframe/SKILL.md",
];

const SKIP_DIRS = new Set([".git", "node_modules"]);

function* walk(dir) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) yield* walk(full);
    else yield full;
  }
}

// GitHub-style heading slugs (ASCII approximation; this repo's anchors are ASCII).
function slugify(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^\w\- ]/g, "")
    .replace(/ /g, "-");
}

function anchorsOf(file) {
  const text = readFileSync(file, "utf8");
  const anchors = new Set();
  const seen = new Map();
  let inFence = false;
  for (const line of text.split(/\r?\n/)) {
    if (/^\s*```/.test(line)) { inFence = !inFence; continue; }
    if (inFence) continue;
    const m = line.match(/^#{1,6}\s+(.*)$/);
    if (m) {
      let slug = slugify(m[1]);
      const n = seen.get(slug) ?? 0;
      seen.set(slug, n + 1);
      if (n > 0) slug = `${slug}-${n}`;
      anchors.add(slug);
    }
    for (const id of line.matchAll(/<a id="([^"]+)"/g)) anchors.add(id[1]);
  }
  return anchors;
}

const problems = [];

for (const req of REQUIRED) {
  if (!existsSync(join(ROOT, req))) problems.push(`missing required path: ${req}`);
}

const anchorCache = new Map();
const cachedAnchors = (file) => {
  if (!anchorCache.has(file)) anchorCache.set(file, anchorsOf(file));
  return anchorCache.get(file);
};

for (const file of walk(ROOT)) {
  if (!file.endsWith(".md")) continue;
  const rel = relative(ROOT, file).replaceAll("\\", "/");
  const text = readFileSync(file, "utf8");
  // Strip fenced code blocks before link extraction.
  const stripped = text.replace(/```[\s\S]*?```/g, "");
  for (const m of stripped.matchAll(/\]\(([^)\s]+)\)/g)) {
    const target = m[1];
    if (/^(https?:|mailto:)/.test(target)) continue;
    const [pathPart, anchor] = target.split("#");
    const targetFile = pathPart === "" ? file : resolve(dirname(file), decodeURIComponent(pathPart));
    if (!existsSync(targetFile)) {
      problems.push(`${rel}: broken link -> ${target}`);
      continue;
    }
    if (anchor && targetFile.endsWith(".md") && !cachedAnchors(targetFile).has(anchor)) {
      problems.push(`${rel}: broken anchor -> ${target}`);
    }
  }
}

if (problems.length) {
  console.error(`✖ structure gate: ${problems.length} problem(s)\n`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}
console.log(`✓ structure gate clean (${REQUIRED.length} required paths, links + anchors resolved).`);
