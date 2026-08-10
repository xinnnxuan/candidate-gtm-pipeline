# Candidate GTM Pipeline

> **By Johanna Fan** · Marketing / GTM / Customer Signal Analytics<br>
> **v4 · Last updated August 10, 2026**

My live Marketing / GTM case, for hiring managers: my own job search, run as a go-to-market motion — six stages of written judgment that turn noisy market signals into qualified opportunities, defensible positioning, clean releases, and better next-cycle decisions. This repository is the **verification layer**: every stage's judgment is a public contract you can open, trace through a case, and check against the failures that shaped it.

The system has screened **21K+ market signals**, and about **2%** cleared the qualification bar into tracked pursuits ([exact dated figures](docs/evidence-ledger.md)). Those figures prove a qualification discipline running at volume — not campaign ownership or hiring conversion.

## Start here

Three doors, by how much time you have:

1. **See it work** — follow [one opportunity through all six stages](cases/one-opportunity-through-six-stages/README.md): decision, handoff, human authority, and write-back at every step. *~5 minutes.*
2. **Open one contract** — [Buyer-Ready Proof](skills/03-positioning-messaging/buyer-ready-proof/SKILL.md) is the deepest-verified: the contract, [its 7-check exit gate](skills/03-positioning-messaging/buyer-ready-proof/graders.md), and [a line that failed the gate, with the fix](examples/resume-draft-fail-and-fix.md). *~3 minutes.*
3. **Check one failure-to-control** — [the changelog](CHANGELOG.md) records which failure changed which public method; [the failure log](examples/failure-guardrail-log.md) holds the founding receipts. *~2 minutes.*

Want the candidate story first? [Meet Johanna](https://johannafan.com/?src=governed-ai-workflow).

## See one opportunity move

[The six-stage case](cases/one-opportunity-through-six-stages/README.md) moves one fictional-by-construction opportunity through the production rules, end to end — the same fictional posting behind [the sample routing brief](examples/routing-brief-sample.md) and [the fail-and-fix run](examples/resume-draft-fail-and-fix.md), so the artifacts interlock and the handoffs can be audited instead of asserted. For the real thing running, two re-authored receipts: [one module, beat by beat](examples/annotated-session.md) and [one brief routing two workflows at once](examples/one-brief-controlled-run.md).

## The operating loop

Six stages, each named for the marketing function it runs on. Each guards a different decision, hands a concrete artifact to the next, and the last one writes back into the first three:

| Stage | The decision it owns | Lead contract | Hands off |
|---|---|---|---|
| [01 · Market Research](skills/01-market-research/README.md) | Which opportunity deserves the next hour? | [Opportunity Qualification](skills/01-market-research/opportunity-qualification/SKILL.md) | Qualified opportunity slate |
| [02 · Audience Strategy](skills/02-audience-strategy/README.md) | Who actually reads, decides, or influences this hire? | [Audience & Routing](skills/02-audience-strategy/audience-routing/SKILL.md) | Role-only routing brief + claim ceiling |
| [03 · Positioning & Messaging](skills/03-positioning-messaging/README.md) | Which true evidence reduces this buyer's hiring risk? | [Buyer-Ready Proof](skills/03-positioning-messaging/buyer-ready-proof/SKILL.md) | Buyer-ready evidence + explicit gaps |
| [04 · Marketing Operations](skills/04-marketing-operations/README.md) | Is this application accurate, complete, and ready to submit? | [Application Release QA](skills/04-marketing-operations/application-release-qa/SKILL.md) | Verified application record |
| [05 · Lifecycle Operations](skills/05-lifecycle-operations/README.md) | What changed, stalled, or needs action now? | [Relationship Follow-Through](skills/05-lifecycle-operations/relationship-follow-through/SKILL.md) | Current relationship state + next action |
| [06 · Revenue Analytics](skills/06-revenue-analytics/README.md) | Which result should change the next rule or allocation? | [Decision Learning](skills/06-revenue-analytics/decision-learning/SKILL.md) | Decision readout ↺ writes back into 01–03 |

I write the brief, decide what enters the pipeline, review the handoffs, and stop a release when the evidence cannot carry the claim. AI prepares every decision and executes the narrow write-backs those decisions pre-authorize; the decisions stay mine. The six stages compress [nine finer runtime stages](docs/pipeline.md) and answer to [six human gates](docs/pipeline.md#the-six-gates) — a different six on purpose: stages group judgment, gates mark lifecycle decisions.

## The public Skills

Nine contracts are published — six stage leads (above) plus three related contracts:

- [Marketing Reframe](skills/03-positioning-messaging/marketing-reframe/SKILL.md) — how a true mechanism earns Marketing language, at which evidence level *(stage 03)*
- [Inbox-to-Pipeline Sync](skills/05-lifecycle-operations/inbox-to-pipeline-sync/SKILL.md) — inbox signals to governed lifecycle state; bad news may close itself, good news always waits *(stage 05)*
- [Relationship Ledger Sync](skills/05-lifecycle-operations/relationship-ledger-sync/SKILL.md) — relationship state as a ledger, not a memory *(stage 05)*

Every contract is a **re-authored public edition** of a module running in production, opens with a verification strip (status, decision, write authority, case / eval / change links), and ships an evidence index beside it. The full verification matrix — judgment, authority, case, evaluation, and maturity per skill: **[the skill roster](skills/README.md)**.

<a id="why-trust-it"></a>

## Why trust it

Four structural reasons, each with an open door:

**Authority is tiered, in writing.** For every judgment it is decided in advance whether the outcome may land automatically, must wait for me, or may never be automated — bad news may close itself; good news always waits; nothing external is ever sent by the system. The one-page map: **[decision rights](docs/decision-rights.md)**.

**Judgments are evaluated, and coverage is stated honestly.** A published grader with a published failing run, receipts of real runs, adversarial cold reads before every publish wave, and machine gates on every commit — with the skills that have *no* dedicated evaluation named as such: **[the evaluation registry](evals/README.md)**.

**Numbers carry dates and boundaries.** Evergreen copy uses floors; exact counts live dated in **[the evidence ledger](docs/evidence-ledger.md)**, where drift is visible instead of silent. Day to day, the loop runs from [two connected workbenches](docs/two-workbench-operating-view.md).

**Rules trace to the failures that created them.** Every method change on this surface names the miss that forced it: **[the changelog](CHANGELOG.md)** — backed by [the failure log](examples/failure-guardrail-log.md) and [the learning loop](docs/the-loop.md). The publishing boundary itself is documented in [how this repo was sanitized](docs/how-this-repo-was-sanitized.md): the production system runs in Traditional Chinese, and public exhibits are translated, re-authored adaptations — not copies of private records.

<details>
<summary>Reading with an AI? A copy-paste audit prompt</summary>

```text
Read this repository as a Marketing / GTM hiring manager.
1. Trace one important claim to its source artifact and measurement boundary.
2. Separate Johanna's decisions from machine-assisted preparation and governed write-backs.
3. Draft three interview questions that test her market qualification, positioning, and learning-loop judgment without granting ownership the evidence does not show.
Flag any contradiction or unsupported leap before you summarize the strengths.
```

</details>

<a id="what-this-proves--and-doesnt"></a>

## What this proves — and doesn't

Three failures changed the method: failed collection queries once looked like a cold market, an adjacent stakeholder once looked like peer truth, and a fluent platform noun once outran the evidence — each is now a standing control ([receipts](examples/failure-guardrail-log.md)). **Not claimed:** that mistakes disappeared. **Claimed:** a confirmed, repeatable miss leaves a control where it would recur.

- This is a personal operating system written mostly in natural language, not a software-engineering portfolio.
- It does not send outreach or submit applications on its own; external actions remain human-reviewed.
- It does not prove ownership of a production CRM, campaign, attribution model, lifecycle program, revenue target, or another team's stack.
- Its proof is scoped row by row: candidate positioning and message QA, personal-scale tracker discipline, and workflow optimization have direct artifacts; commercial market sensing, segmentation, loss analysis, and team transfer remain analogous — [what transfer to a team could look like](docs/from-one-operator-to-a-team.md), held to the same claim discipline.
- One public case proves the workflow's shape; the dated ledger carries the scale. The two claims stay separate on purpose.
- It is not a framework to install, and not proof of interview conversion. It is an open method, a running market test, and a record of what the evidence changed.

## Where next

**[Send me the JD you're hiring for](https://www.linkedin.com/in/xxu09) — I'll send back how I'd read it.**

- **Meet the candidate:** [johannafan.com](https://johannafan.com/?src=governed-ai-workflow)
- **Read the system:** you are here
- **See it run:** [the live pipeline](https://johannafan.com/?src=governed-ai-workflow#overview)

---

**Johanna Fan** · Marketing / GTM / Customer Signal Analytics<br>
[LinkedIn](https://www.linkedin.com/in/xxu09) · [GitHub](https://github.com/xinnnxuan)<br>
License: [CC BY-NC 4.0](LICENSE.md)
