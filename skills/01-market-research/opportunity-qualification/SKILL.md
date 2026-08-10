---
name: opportunity-qualification
description: >
  Decides which live market openings deserve the next hour of real campaign
  investment — reading every full job post before anything is cut, holding one
  shared bar for company quality, and stopping at a human slate decision
  before any opportunity is admitted into the pipeline.
---

# Opportunity Qualification

> **Public edition.** Adapted from the production demand-capture and qualification skill. Re-authored in English with paths generalized; the sweep presets this judgment runs on keep their internal codenames off-stage ([roster](../../../docs/pipeline.md#the-pipeline-staffed)). The qualification order, the stop-point, and the cost ladder are the production ones.

| Verification | |
|---|---|
| **Status** | Production — this judgment runs in the live system today |
| **Decision owned** | Which opportunity deserves the next hour; a recommendation is never an admission |
| **Reads** | Captured openings in full text · collection health · one shared market thesis |
| **Produces** | A slate: recommended / declined, each with its reason and denominators |
| **Write authority** | Proposes only; admission to the tracker requires the operator's explicit pick |
| **See it run** | [Case · stage 01](../../../cases/one-opportunity-through-six-stages/01-market-research.md) |
| **Evaluation** | Repo-level gates and cold reads ([registry](../../../evals/README.md)); no dedicated grader yet |
| **Change receipts** | [Failure № 1 → collection-health rule](../../../examples/failure-guardrail-log.md) · [CHANGELOG](../../../CHANGELOG.md) |

## The judgment, in one screen

**What this skill prevents:** two opposite failures with the same root — spending scarce campaign attention on openings that were never worth it, and quietly dropping openings that were, because a cheap filter cut them before anyone read the actual job. Success is not volume: a round that admits zero opportunities and says why is a better outcome than a round that lowers the bar to produce one.

**The calls it hardcodes** — each written down because improvising it went wrong:

- **A failed collection is not a cold market.** Before any market conclusion, the round checks its own coverage: blocked queries, partial sources, and parameter errors all *look* like "nothing out there." This rule has a receipt — a silent collection failure once read as market silence, which is why readouts now carry collection health as first-class content ([failure log](../../../examples/failure-guardrail-log.md)).
- **Nothing is cut before the full text is read.** No title-pattern cuts, no seniority-label cuts, no applicant-count cuts, no arbitrary top-N. The honest way to narrow a wide pool is cheap full-text judgment, not early list surgery — the openings a pattern-cut removes are exactly the ones nobody ever finds out about.
- **Verification cost follows the funnel.** Wide pool: cheap parallel full-text reads under a written rubric. Shortlist: fit checked against the candidate's real evidence base. Survivors only: expensive live verification. And the handful that will actually be recommended get a personal, word-by-word read — because a one-line summary flattens exactly the hard constraints that change the decision: an application quota, a real seniority bar, an eligibility clause buried in paragraph six.
- **"Is this a good company" is answered once, in one place.** Company-quality judgment reads a single shared, versioned market thesis. Every run consulting its own instinct is how the same company gets three different verdicts in one week.
- **Who is actually hiring changes the path, not the verdict.** Every recommendation classifies the hiring relationship — direct employer, staffing firm with a named client, staffing with an unnamed client, aggregator. Not a blacklist: a routing fact. A staffing post can still be pursued, but downstream outreach must not treat the agency as the employer's own team.

**One call, worked:** a fresh posting from a well-known company clears every cheap gate — right lane, right level, right location. The full-text personal read finds one sentence a summary had flattened: a hard experience floor stated in years, above what any honest telling of the candidate's record supports. The opening is declined with the reason attached, and the round's readout says so — because a slate that hides its rejections isn't a judgment record, it's a highlight reel.

## Purpose

This skill owns the pipeline's first and most consequential allocation decision: *which parts of live market demand deserve real attention this cycle.* It converts a noisy capture of openings into a small, reasoned slate — and it treats admission as spending, because every admitted opportunity commits the full downstream cost: stakeholder research, routing, tailoring, release QA, and follow-through.

```text
market demand signals
  -> capture (reproducible receipts, coverage checked)
  -> full-text qualification (every surviving post read whole)
  -> slate: recommended / declined, each with its reason and denominators
  -> [STOP] the operator picks what enters the pipeline
  -> only confirmed picks become tracker records
```

## The qualification order

1. **Check the capture before judging the market.** Coverage, source failures, and parameter validity first. Zero results triggers a collection audit, never a market conclusion.
2. **Deduplicate, then read everything that remains — whole.** Judgment applies to the full posting text, not to titles, labels, or summaries.
3. **Work object before label.** What does this role actually process daily — which decisions, which frictions, for which stakeholders? Only after that does a lane label apply. Company signals adjust how much the opportunity is worth, never which pool it belongs to.
4. **Escalate verification cost only for survivors.** Live checks (is it still open, what seniority does the team really mean) are spent on keepers, not on the wide pool.
5. **Read the recommendations personally.** Anything that will be put in front of the operator gets a full human-grade read plus an external check of the claims that would change the decision.

## The slate contract

Every round ends in a decision record, not a link dump:

- Each recommended opening carries the call, the evidence, and the remaining risk — plus its source snapshot, so the decision can be audited later against exactly what was read.
- Each declined opening carries its primary reason: wrong pool, undefendable fit, weak path to a win, staleness, or a hard constraint found in the full text.
- The round carries its denominators: how many signals came in, how many survived each gate, and why the funnel narrowed where it did.
- The readout is a *finished* judgment. When it reaches the operator, the reading, evidence checks, and external verification are already done; the only thing left is the investment decision.

## The stop-point

**A recommendation is never an admission.** The slate pick — which opportunities become tracked pursuits — is the operator's call and is never delegated, because it is the moment attention gets spent. Only explicitly confirmed picks are written into the tracker, each carrying its qualification lineage. An empty slate is a legal, sometimes correct, outcome: a wrong pursuit wastes more attention than no pursuit.

## What this skill never does

- Never bulk-imports a raw capture into the tracker.
- Never confirms its own recommendations, creates applications, or submits anything.
- Never cuts the pool on titles, buzzwords, brand names, or applicant counts before the full text is read.
- Never treats a well-known company, a fashionable keyword, or a language requirement as an admission reason by itself.
- Never lowers the qualification bar to avoid reporting an empty round.
