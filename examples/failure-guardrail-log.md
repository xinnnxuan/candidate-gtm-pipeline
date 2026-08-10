# Failure → guardrail log

> **Checkable artifact.** Three real misses from the production system and the rules they became. Details are generalized (no companies, no people), but each failure genuinely happened, cost something, and permanently changed a market, audience, message, or measurement decision. This is the Tighten step of [the Candidate GTM learning loop](../docs/the-loop.md), shown with receipts — because a system that only exhibits its successes is exhibiting nothing.

---

## 1 · The market that looked cold

**The failure.** The market-sweep stage runs batches of search queries against live job boards and summarizes the haul. One week the summary came back thin — and read exactly like a cold market. It wasn't: several queries had *failed* upstream (a source had become unavailable), returned zero rows, and the summary rendered those zeros as facts. Strategy discussion started from "the lane is drying up" before anyone checked the plumbing.

**What it cost.** Hours of mis-aimed prioritization — and near-miss damage to a lane decision that would have deprioritized a healthy market.

**The rule now.** Every sweep summary must display its own failure statistics — queries attempted, failed, degraded — *next to* the results, so silent degradation is structurally impossible. A thin haul now arrives with its own "and here's whether you can trust this thinness" line. The rule lives in the sweep skill's output contract, not in anyone's memory.

**The analytics parallel.** This is the tracking-break failure every analytics team knows: the dashboard doesn't crash, the numbers still render — just wrong. The guardrail is the same in both worlds: **instrument the pipeline's health where its consumers read the output, or absence of data will be read as data.**

---

## 2 · The fluent adjacent profile

**The failure.** During stakeholder research for a sales-adjacent role, the calibration misfiled an **account executive** as a *peer truth source* — someone whose day-to-day would reveal what the target role actually does. The AE's profile was fluent, senior, adjacent, and confident, so the role calibration absorbed it. But an AE is the *internal customer* of that role's output, not its peer: the read drifted toward what the customer wishes the role were, and the must-prove list bent accordingly.

**What it cost.** A recalibration round — and it surfaced a class of error, not an instance: the most dangerous wrong source is the one that's articulate and *nearly* right.

**The rule now.** The stakeholder-research skill classifies every profile into six explicit buckets — peer / likely manager / routing owner / secondary signal / noise / unknown — with membership tests, plus the named guardrail born from this miss: *adjacent seniority is not peer truth; the consumer of the role's output is not the role.* Recruiters are routing owners only, never lane evidence.

**The analytics parallel.** Stakeholder-interview bias in requirements gathering: the loudest, most fluent stakeholder defines the metric, and the metric ends up measuring their wish. The fix is the same: **classify sources by relationship to the ground truth before weighting what they say.**

---

## 3 · The sentence that interviewed better than it defended

**The failure.** A tailored draft rendered a platform noun from the JD as if the candidate had operated that platform — not fabricated, just *borrowed*: the noun was real in the role's world, the candidate's experience was adjacent, and the sentence read beautifully. It was also the exact sentence an interviewer would probe first, and it would not have survived the probe.

**What it cost.** Caught before send — by review, i.e. by luck. Luck is not a control.

**The rule now.** Two structural changes, both visible in this repository. The routing contract gained two mandatory fields — `cannot_borrow` (the claim ceiling: what may not be claimed without direct evidence) and `high_risk_nouns` (real nouns in the role that must not become ownership claims) — so the ceiling is written down *before* drafting starts, per role, by a stage that has never seen the candidate's evidence. And the exit gate ([graders.md](../skills/03-positioning-messaging/buyer-ready-proof/graders.md), check 3) tests every prominent claim against that ceiling, with a named fail signal: *the most JD-like sentence is also the least defensible one.*

**The analytics parallel.** Overclaiming a metric: the chart implies causality the data doesn't carry, and it presents wonderfully right up until someone asks how it was measured. Same discipline both ways: **every claim ships with its own boundary, recorded at the same time as the claim — not patched after the challenge.**

---

### The common shape

Each entry is one full pass of the loop: a miss (Evaluate) became a written rule (Codify) placed where it fires automatically (Tighten) — a skill's output contract, a classification table, an exit gate. None of them depends on anyone remembering the incident. That is the difference this system is claiming: **not that the operator stopped making mistakes — that a confirmed miss leaves a control where the same failure would recur.**
