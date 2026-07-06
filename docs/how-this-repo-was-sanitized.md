# How this repo was sanitized

> **Meta exhibit.** This repository is a public case study curated out of a private, running system. The curation process itself was run like everything else here — defined criteria, adversarial review, machine-enforced gates — so it doubles as a worked example of the method. This page documents the process honestly, including what you are *not* seeing.

## Threat model

The private system contains exactly what a job-search system must contain: personal identifiers, application history, employer and contact names, calibration notes about real people, and credentials for the runtime. None of that belongs in public. The risks worth engineering against:

1. **Direct leakage** — a private detail copied verbatim.
2. **Filename leakage** — a path or filename that itself names a company or person (real precedent: a seed-data file whose *name* contained a partner company's name — content review alone would have missed it).
3. **Metadata leakage** — EXIF/XMP payloads inside images.
4. **Mosaic leakage** — individually harmless fragments that, combined, identify an application target or a person.

## The five controls

**1 — Allowlist, not blocklist, for inclusion.** Nothing was bulk-copied. Every file in this repository was individually chosen; the default for everything else was *stays private*. A recursive copy with post-hoc cleanup was rejected outright — subtractive sanitization always loses to one forgotten file.

**2 — Exhibits are re-authored, not redacted.** The skills here are *public editions*: rewritten in English against the production originals, with identifiers generalized and runtime paths abstracted. Redaction (blacking out lines in copies) was rejected because it fails the mosaic test and reads terribly. Each exhibit declares this adaptation in its header. What's preserved is what the exhibits exist to show: field contracts, decision orders, guardrails, and gates.

**3 — Images re-encoded, then eyeballed.** Every image was re-encoded pixels-only (fresh bitmap, saved as new PNG), which drops EXIF/XMP and ancillary text chunks; the absence of metadata chunks was then verified by scan, and each image was reviewed at high zoom for embedded text. Two visuals from the same private collection were excluded outright — one because it contained the candidate's short name, one because its base layer came from a stock photo without clean redistribution rights.

**4 — A denylist gate, run over content *and* filenames.** A scanner checks every staged file — body and path — against a denylist of personal identifiers, contact details, employer and partner-company names, location and institution markers, private-system path fragments, and precise internal metrics that public copy deliberately rounds. The repo ships with a pre-commit hook (`tools/`) that enforces generic patterns (emails, phone-number shapes) plus a **local, git-ignored denylist file** for the sensitive terms themselves — because a hook that hard-coded the private names would *be* the leak. The full-term scan runs in the private staging environment before anything moves here.

**5 — Adversarial cold read before publish.** A clean AI agent — no session context, no access to the private system — was pointed at this repository with one brief: *extract the candidate's personal details, application targets, and employer names.* Publish is blocked until the answer is empty. The same red-team pass earlier caught, in draft exhibits: the candidate's short name (~8 occurrences), a real full name inside a sample filename, and an org-calibration artifact that needed renaming — which is why re-authoring (control 2) became the rule.

## Honesty boundaries

- The private originals are richer than these exhibits; adaptation is disclosed per-file rather than pretended away. The production system runs in Traditional Chinese — what you read here is a translated adaptation, not a transcript.
- Sample artifacts in `examples/` marked *fictional* are reconstructions against invented job posts. They demonstrate real field contracts and real judgment shapes; they reference no real application.
- Metrics quoted publicly are deliberately rounded (e.g. "20K+"), and each ships with its own boundary sentence stating what it does and doesn't mean.

## Why this page exists

Because the discipline it documents is the same one the system applies to resumes and reports: **every claim ships with its own boundary, and anything irreversible gets a machine gate, not a good intention.** Publishing is an irreversible, outward-facing action — so it got the full treatment.
