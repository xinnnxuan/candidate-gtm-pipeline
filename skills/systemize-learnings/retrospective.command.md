# /retrospective — the close-out entry point

> **Public edition.** Adapted from a production system. Shown here as exhibit **2b**: the governed entry point to the Candidate GTM learning loop. The command owns *routing*; the skill (`SKILL.md` beside this file) owns the decision framework that separates recurring signal from one-case noise. The command deliberately never restates it — one authority, one place.

The single system-learning entry at conversation close: judge what this round's corrections deserve to become, optionally adding a full version retrospective and an upstream/downstream consistency pass. The judgment framework, landing-spot table, output format, and write-back discipline are authoritatively defined in the skill — this command adds routing plus two extra steps for full-review mode, nothing more.

## Entry decision tree

```text
Closing out — where should this round's learnings go?
├─ Quick check: "what here is worth writing back?" (the default)
│    → this command, quick-triage mode
├─ The deliverable went through heavy iteration (v5+ drafts, a major
│  revision), or the operator asks for a full review
│    → this command, full-review mode
├─ The problem isn't "what did we learn" but that a skill/command itself
│  has drifted — over-ruled, boundaries tangled with heuristics
│    → the skill-health-check entry, not this command
├─ The operator already asked for a specific source fix
│    → just fix it; no triage theater first
└─ One single converged design decision needs recording
     → the direct write-back entry
```

## Quick-triage mode (default)

Read the skill and follow it: the four-question framework, landing spots, absorptive-rewrite output, and post-write-back sync discipline are all defined there.

## Full-review mode

Full review does exactly two things more than quick triage — one before, one after:

1. **Version-iteration review** (before): list the deliverable's major versions (v1 → v2 → …), mark each version's key change, and tag every extracted learning with its source transition (e.g. `v3→v4`) so the evidence stays traceable.
2. **Upstream/downstream consistency** (after landing): check that the changed source's neighbors still tell the same story — the material library vs. the writing rules, a skill vs. the conventions it depends on, project-level rules vs. global ones. A rule lives in one place; everywhere else points to it. When the same rule appears twice, decide orthogonal-vs-conflicting, then converge.

Then hand the learnings to quick-triage mode for evaluation, confirmation, and landing.

## Output and confirmation

Use the skill's output template. Give the overall recommendation **once** — "write back N items / write back nothing" plus reasons — so the operator can answer with a single yes or no. Never interrogate item by item.
