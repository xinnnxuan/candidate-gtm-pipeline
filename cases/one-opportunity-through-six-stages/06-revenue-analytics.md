# Stage 06 · Revenue Analytics — the loss, triaged

> Part of [the six-stage case](README.md). Fictional inputs, production rules — the contract behind every move here is [Decision Learning](../../skills/06-revenue-analytics/decision-learning/SKILL.md).

| | |
|---|---|
| **Decision** | **Nothing writes back this round** — the loss is recorded as evidence, not promoted to a rule |
| **Specialist** | [Decision Learning](../../skills/06-revenue-analytics/decision-learning/SKILL.md) |
| **Human authority** | Promotion into a standing rule is the operator's call — not exercised here, because nothing earned it |
| **Write-back** | The loss category on the closed record; no rule, skill, or targeting change |
| **Next** | The loop: [stage 01](01-market-research.md) starts its next cycle from unchanged — and therefore uncorrupted — rules |

## The record

The campaign closed as a rejection with no interview. Two candidate learnings enter the triage:

**Candidate № 1 — "lifecycle roles need cohort proof led more strongly."** The four questions kill it, on the first and third: one loss does not establish recurrence, and the cause of this loss is not established at all — the rejection carried no reason, and inventing one would poison the next cycle's targeting with a superstition. It stays what it is: one dated loss, in one lane, with its category recorded. If the pattern repeats across comparable pursuits, the *pattern* — with its denominator — comes back through this gate.

**Candidate № 2 — "the parser truncated a field; add a phone-format check."** Closer. But question two catches it: the release-QA contract already checks every fixed fact against the facts source — that is how the truncation was caught. Writing the rule a second time just teaches the system to say everything twice. Rejected as *already covered*.

The verdict — *nothing should be written back this round* — is a successful output, not an empty one. A system that changes a rule after every loss isn't learning; it's sedimenting. The write-backs that did earn their way through this gate, with the failures that produced them, are in [the changelog](../../CHANGELOG.md) and [the failure log](../../examples/failure-guardrail-log.md).

## The loop closes

What stages 01–03 inherit from this cycle is precisely *no change* — a qualification bar, a routing discipline, and a claim ceiling that one ambiguous loss was not allowed to bend. That refusal is the learning system working.
