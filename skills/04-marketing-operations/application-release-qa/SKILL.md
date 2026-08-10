---
name: application-release-qa
description: >
  The release QA gate for one application: verifies every form field against a
  single fixed source of truth, reads eligibility questions for what they
  actually ask, and returns one of three verdicts — ready, fix-first, or
  don't submit until the question's intent is clear. Submit itself stays human.
---

# Application Release QA

> **Public edition.** Adapted from a production system. Re-authored in English with paths generalized; the source-of-truth rule, the three-way classification, and the verdict contract are the production ones.

| Verification | |
|---|---|
| **Status** | Production — this judgment runs in the live system today |
| **Decision owned** | Is this application accurate, complete, and ready to submit? |
| **Reads** | Live form state (fields, parse output, or the actual page) · one canonical facts source |
| **Produces** | A must-fix / suggest / keep readout and exactly one of three verdicts |
| **Write authority** | Verifies only; the Submit click is human, always |
| **See it run** | [Case · stage 04](../../../cases/one-opportunity-through-six-stages/04-marketing-operations.md) |
| **Evaluation** | Repo-level gates and cold reads ([registry](../../../evals/README.md)); no dedicated grader yet |
| **Change receipts** | [CHANGELOG](../../../CHANGELOG.md) |

## The judgment, in one screen

**What this skill prevents:** a campaign that survived qualification, routing, positioning, and cold-read QA failing at the last mile — on a mis-parsed field, a stale record, or an eligibility answer that answered a different question than the form asked. The release moment is where small errors become official records.

**The calls it hardcodes** — each written down because improvising it went wrong:

- **One fixed source of truth beats every parse.** Platforms auto-fill forms from resume parsing, and parsers import old data, truncate fields, and guess. Every fixed personal fact is checked against a single canonical facts file; when the form, the resume, and the parse disagree, the facts file wins — always.
- **Answer the question that was asked.** Eligibility and compliance questions change meaning with one word: *now* versus *in the future* versus *now or in the future*. The check reads the question's intent before answering, and it never answers wrong to get past an automated screen. When the same topic gets a different answer on two forms, that is a question-intent difference, not an inconsistency — and the check says so explicitly.
- **Report only what must change.** Correct fields are not recited back. The operator's review attention is a budget; burying two real problems under thirty confirmations is how the two real problems ship. One exception, deliberately inverted —
- **High-risk answers are shown even when they're right.** Eligibility questions always appear in the readout with the answer *and* a short reason. The operator should see that a sensitive answer is right for a stated reason, not right by instinct.
- **Constrained fields resolve by a fixed ladder.** When a form allows only one value (one degree field, one category from a platform's taxonomy), the order is: candidate truth first, then the closest taxonomy category that can honestly cover it, then correct-pool routing signal. Never a popular category the real record can't support — a field that helps routing but fails verification is a liability, not an optimization.
- **Optional attachments never become gates.** Only an attachment the platform marks *required* can block release. An optional slot is left empty by rule, not treated as an invitation to add one more document.

**One call, worked:** a form allows exactly one field of study, and the platform's dropdown has no exact match for the candidate's actual degree. The bright-but-wrong move is the easy adjacent default. The check instead walks the ladder: is there a broader category that truthfully covers the real degree *and* keeps this application in the right reader pool? Only if no credible covering category exists does it fall back — and the readout states which rung of the ladder the answer came from.

## Purpose

This is the final verification between "the materials are ready" and "the record is official." It takes the live form state — pasted fields, parse output, or the actual page — and checks it against the canonical facts source, then answers exactly one question: *can this be submitted as-is?*

```text
form state (fields, parse output, live page)
  -> normalize to field -> current value
  -> compare against the canonical facts source
  -> classify: must-fix / suggest / keep
  -> verdict: ready | fix the listed items first | don't submit yet
```

## The three-way classification

1. **Must-fix** — a direct conflict with the facts source, an eligibility answer that misreads the question, or anything that corrupts the official record.
2. **Suggest** — formatting that could be more robust, an incomplete parse that isn't wrong, an open field where one sentence would lower reader friction.
3. **Keep** — matches the source, or differs in wording but not in meaning.

Only the first category blocks release. The readout lists items in the form's own order — the operator fixes top-to-bottom on the actual page, so re-sorting would add work, not clarity.

## The verdict contract

Exactly one of three outcomes, stated first:

- **Ready to submit.**
- **Fix the listed items first, then submit.**
- **Don't submit — a question's intent is unresolved.** Used only when the wording genuinely changes the answer; high-confidence readings are decided, not escalated.

## The release boundary

This skill verifies; it never releases. Browser-assisted form work upstream always stops before Submit, and the Submit click is the operator's — by contract, not by mood. After a confirmed submission, the state write-back runs through the tracker's formal path in the same turn ([pipeline, stages 8–9](../../../docs/pipeline.md)).

## What this skill never does

- Never submits, or treats its own "ready" verdict as permission to.
- Never trusts a platform's parse as truth, and never lets a resume override the fixed facts source.
- Never shades an answer to pass an automated screen.
- Never opens a cover-letter workstream because an optional slot exists.
- Never lectures generic form-filling advice without a concrete form in front of it.
