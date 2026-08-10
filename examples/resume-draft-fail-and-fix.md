# Sample exit-gate run — a resume line that fails, and the fix

> **Checkable artifact.** A worked conversion-QA run ([`skills/03-positioning-messaging/buyer-ready-proof/graders.md`](../skills/03-positioning-messaging/buyer-ready-proof/graders.md)) against a draft resume line. Everything here is **fictional** — the candidate evidence is invented and the target role is the same fictional job post as [`routing-brief-sample.md`](routing-brief-sample.md), so the artifacts interlock: market / audience routing sets the claim ceiling, message development violates it, and release QA catches it. The failure is common and expensive — **the strongest hook becomes the least defensible promise.**

---

## Setup

Target role: *Marketing Analyst — Lifecycle & Retention* (the fictional post in `routing-brief-sample.md`). The routing brief has already set the ceiling for this role:

- `cannot_borrow`: attribution ownership · **campaign P&L or strategy ownership** · platform administration · churn-model ownership · seniority ("led/owned the retention strategy")
- `high_risk_nouns`: attribution, experimentation platform, churn model, CDP, **campaign ownership**

Fictional candidate evidence on file (what the body of the resume can actually prove):

- During an internship, **supported** weekly performance readouts for two email campaigns — pulled the numbers, drafted the summary slide, a manager presented it.
- Built a cohort view from messy signup data for one retention question; the team used it twice.
- Used AI tools to speed up data cleanup and first-draft summaries, with every output checked against source records before it went out.

## The draft line

The tailoring session produced this Experience bullet — fluent, JD-shaped, and exactly what the hiring manager wants to hear:

> *"Led lifecycle campaign analytics and AI-assisted performance reporting, driving retention optimization across email channels."*

Every noun in it appears in the JD. That is precisely why it goes to the gate.

## The gate run

**Check 3 — Translation and claim defensibility: FAIL.**

- *"Led lifecycle campaign analytics"* — the body proves **supported** readouts for two campaigns under a manager who owned the analysis. "Led" borrows scope; `cannot_borrow` lists campaign/strategy ownership for this exact role. First probe in an interview ("walk me through a campaign decision you led") collapses it.
- *"driving retention optimization"* — the body proves one cohort view used twice. "Driving optimization" claims an outcome loop the evidence doesn't carry; *optimization* is a `use carefully` term with no supporting proof here.
- *"AI-assisted performance reporting"* — the only defensible fragment, but as written it hangs on a leading verb ("Led") that inflates it by association. It also fails the three-question AI test as phrased: the work object and output are real, but the defensibility mechanism (validation against source records) — the strongest part of the true story — is invisible.

And the draft trips Check 3's named fail signal verbatim — *the most JD-like sentence is also the least defensible one.* This line would be the first thing a hiring manager probes and the first thing that breaks.

**Verdict: blocked at the minimum bar (claim defensibility). Route back to the translation rules — the gate does not rewrite.**

## The fix

Back in the tailoring stage, the same true story re-translated *under* the ceiling:

> *"Supported weekly campaign readouts for two email programs — built the cohort views behind one retention question, and used AI to speed data cleanup and first-draft summaries, checking every output against source records before it shipped."*

**Re-run — Check 3: PASS.**

- Verbs match the evidence: *supported*, *built*, *used*, *checked* — nothing borrowed, nothing seniorized.
- The strongest defensible fact is now the visible one: the **validation habit** (every output checked against source) — which is exactly what this JD's `role_ai_relevance` said this hiring manager buys: *AI acceleration with human review, as a work-quality claim, never an identity claim*.
- Every phrase survives its interview probe: "walk me through the cohort view" now lands on real work instead of exposing a borrowed title.

## The point

The failing line and the passing line describe **the same work**. The difference is not honesty of intent — the draft wasn't a lie, it was fluent drift toward the JD's vocabulary, which is the default failure mode of every tailoring session (human or AI). The gate exists because this drift is invisible from inside the session that produced it: the sentence *reads* better the wronger it gets. A written ceiling, set upstream by a stage that never saw the candidate's evidence, plus a gate that checks against it at the door — that's what makes the mistake structural to catch instead of lucky to catch.
