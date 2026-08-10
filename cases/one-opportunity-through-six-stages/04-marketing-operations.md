# Stage 04 · Marketing Operations — the release QA

> Part of [the six-stage case](README.md). Fictional inputs, production rules — the contract behind every move here is [Application Release QA](../../skills/04-marketing-operations/application-release-qa/SKILL.md).

| | |
|---|---|
| **Decision** | *Fix the listed items first, then submit* — two must-fixes, then a clean re-check |
| **Specialist** | [Application Release QA](../../skills/04-marketing-operations/application-release-qa/SKILL.md) |
| **Human authority** | The Submit click — browser-assisted form work stops before it by contract |
| **Write-back** | After the human submission is confirmed: the applied state, dated, through the tracker's formal path, same turn |
| **Next** | [Stage 05 · Lifecycle Operations](05-lifecycle-operations.md) |

## The record

The platform parsed the approved resume into its form — and the check runs the whole page against the canonical facts source, not against the resume the parse came from.

**Must-fix № 1 — a parse error.** The parser truncated the phone field. Trivial to fix, expensive to miss: a wrong contact field turns a successful campaign into silence. The facts source wins over the parse — always.

**Must-fix № 2 — an eligibility question read as asked.** The form asks about work authorization *now or in the future* — a different question from the *now*-only phrasing on another platform's form. The check reads the intent before answering, and the readout shows the answer **with its reason even though it is right**: high-risk answers are the one class that gets displayed when correct, because the operator should see *why* it's right, not trust instinct.

**One constrained field, resolved by the ladder.** The dropdown offers no exact match for the candidate's field of study. The check walks the fixed order — candidate truth, then the closest taxonomy category that honestly covers it, then routing signal — and the readout states which rung the answer came from.

**What the readout omits.** The thirty-odd fields that matched are not recited. Two real problems buried under thirty confirmations is how two real problems ship.

## The handoff

Verdict: *fix the listed items first, then submit.* After the fixes, re-check → **ready**. The operator clicks Submit — and the confirmed submission writes the applied state through the formal path in the same turn. From here the campaign is live, and stage 05 owns what the market says back.
