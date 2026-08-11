# Application Release QA — three verdicts under one gate

> **Checkable artifact.** Three fictional-by-construction forms exercise the [5-check release grader](../skills/04-marketing-operations/application-release-qa/graders.md) against the same fictional facts source. No field belongs to a real person or application. The point is not the example answers; it is whether the gate produces the right verdict without crossing the human-submit boundary.

## Fixed facts supplied to every run

- Candidate name: **Alex Example**
- Degree: **B.S. in Applied Mathematics**
- Graduation year: **2025**
- Vendor relationship: **worked for Example Vendor in 2024; no current affiliation**
- Cover letter: **optional unless the platform marks it required**

## Fixture A — ready

The form matches the fixed facts. Its conflict question asks, *Are you currently employed by a vendor?* and the selected answer is **No**, with the ended 2024 relationship shown as the reason. The field-of-study dropdown lacks Applied Mathematics; **Mathematics** is selected and identified as the honestly covering taxonomy category. The optional cover-letter slot is empty.

**Gate read**

| Check | Result |
|---|---|
| Fixed-fact integrity | Pass — degree and graduation year match the source |
| Question intent | Pass — *currently* is answered from current state; the answer and reason are visible |
| Classification | Pass — no must-fix item; routine correct fields are omitted |
| Constrained fields | Pass — Mathematics is ladder rung 2, an honest covering category |
| Verdict / authority | Pass — one verdict, no submission action |

**Verdict: Ready to submit.** The operator still owns the Submit click.

## Fixture B — fix the listed items first

The parser changed the degree to **B.A. in Mathematics**. A separate conflict question asks *Have you ever been employed by a vendor?*, but the form says **No**. The graduation year, constrained field-of-study category, and optional attachment remain correct.

**Gate read**

| Check | Result |
|---|---|
| Fixed-fact integrity | Fail — the degree type conflicts with the source |
| Question intent | Fail — *ever* includes the ended 2024 relationship, making **No** incorrect |
| Classification | Pass — both findings are must-fix, in page order |
| Constrained fields | Pass |
| Verdict / authority | Pass — one blocking verdict, no submission action |

**Verdict: Fix the listed items first, then submit.** Re-run the gate after repair; a proposed correction is not a pass.

## Fixture C — don't submit until intent is clear

All fixed fields match. The platform asks only, *Are you affiliated with a vendor?* It gives no time horizon, help text, or definition, while the fixed facts differ between past and present. The answer therefore changes with the missing intent.

**Gate read**

| Check | Result |
|---|---|
| Fixed-fact integrity | Pass |
| Question intent | Fail safely — the missing time horizon changes the truthful answer |
| Classification | Pass — unresolved intent is not guessed into must-fix or keep |
| Constrained fields | Pass |
| Verdict / authority | Pass — one stop verdict, no submission action |

**Verdict: Don't submit — the question's intent is unresolved.** The next action is to obtain authoritative platform clarification, not to pick the answer more likely to pass screening.

## What this evaluation establishes

The same gate separates three states without inventing candidate truth: factual conflict produces fix-first, semantic ambiguity produces stop, and a fully sourced form produces ready. In every case the grader ends before external release. That is the Marketing Systems QA value: prevent avoidable conversion leakage while keeping the official action human-owned.
