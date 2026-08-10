# The public skill roster — the verification matrix

Every contract here is a **re-authored public edition** of a module from the running production system: one recurring judgment, written down with its decision rules, its handoff, and the line where it must stop and wait for the operator. Each file discloses its adaptation in its header; none is a sanitized copy.

The roster is organized by the pipeline's six stages — each stage has a landing page explaining its value, inputs, decision, and handoff, and each skill folder holds the full contract plus an evidence index:

```text
01 Market Research → 02 Audience Strategy → 03 Positioning & Messaging
→ 04 Marketing Operations → 05 Lifecycle Operations → 06 Revenue Analytics ↺ 01–03
```

## The matrix

| Stage | Skill | The judgment it owns | Write authority | Case | Evaluation | Maturity |
|---|---|---|---|---|---|---|
| [01](01-market-research/README.md) | **[Opportunity Qualification](01-market-research/opportunity-qualification/SKILL.md)** *(lead)* | Full-text qualification of live openings; recommendation is never admission | Proposes only; admission requires the operator's explicit pick | [01](../cases/one-opportunity-through-six-stages/01-market-research.md) | — | contract + case + [evidence](01-market-research/opportunity-qualification/EVIDENCE.md) |
| [02](02-audience-strategy/README.md) | **[Audience & Routing](02-audience-strategy/audience-routing/SKILL.md)** *(lead)* | Correct pool, must-prove, claim ceiling — written blind, before the resume is opened | Writes its routing milestone same turn; never touches candidate evidence | [02](../cases/one-opportunity-through-six-stages/02-audience-strategy.md) | via downstream gate | contract + [sample run](../examples/routing-brief-sample.md) + [evidence](02-audience-strategy/audience-routing/EVIDENCE.md) |
| [03](03-positioning-messaging/README.md) | **[Buyer-Ready Proof](03-positioning-messaging/buyer-ready-proof/SKILL.md)** *(lead)* | Translating real evidence into one reader's language without borrowing what can't be defended | Drafts and grades; release approval is the operator's | [03](../cases/one-opportunity-through-six-stages/03-positioning-messaging.md) | **[7-check grader](03-positioning-messaging/buyer-ready-proof/graders.md)** | deepest-verified: grader + [fail-and-fix run](../examples/resume-draft-fail-and-fix.md) + [evidence](03-positioning-messaging/buyer-ready-proof/EVIDENCE.md) |
| [03](03-positioning-messaging/README.md) | [Marketing Reframe](03-positioning-messaging/marketing-reframe/SKILL.md) | Which bounded Marketing / GTM capability a true mechanism can honestly claim | Proposes with evidence levels; surface owners decide what publishes | — | own gate, in run | contract + [worked run](../examples/marketing-reframe-run.md) + [evidence](03-positioning-messaging/marketing-reframe/EVIDENCE.md) |
| [04](04-marketing-operations/README.md) | **[Application Release QA](04-marketing-operations/application-release-qa/SKILL.md)** *(lead)* | Release QA against one fixed facts source; a three-verdict release call | Verifies only; the Submit click is human, always | [04](../cases/one-opportunity-through-six-stages/04-marketing-operations.md) | — | contract + case + [evidence](04-marketing-operations/application-release-qa/EVIDENCE.md) |
| [05](05-lifecycle-operations/README.md) | **[Relationship Follow-Through](05-lifecycle-operations/relationship-follow-through/SKILL.md)** *(lead)* | What each real relationship deserves now — reply, open, wait, or close | Drafts for human review; nothing is ever sent by the system | [05](../cases/one-opportunity-through-six-stages/05-lifecycle-operations.md) | — | contract + [run receipt](../examples/one-brief-controlled-run.md) + [evidence](05-lifecycle-operations/relationship-follow-through/EVIDENCE.md) |
| [05](05-lifecycle-operations/README.md) | [Inbox-to-Pipeline Sync](05-lifecycle-operations/inbox-to-pipeline-sync/SKILL.md) | Inbox signals to governed lifecycle state — bad news may close itself, good news always waits | Auto-writes only high-confidence, uniquely matched closing states, with read-back | [05](../cases/one-opportunity-through-six-stages/05-lifecycle-operations.md) | — | contract + [two run receipts](../examples/annotated-session.md) + [evidence](05-lifecycle-operations/inbox-to-pipeline-sync/EVIDENCE.md) |
| [05](05-lifecycle-operations/README.md) | [Relationship Ledger Sync](05-lifecycle-operations/relationship-ledger-sync/SKILL.md) | Relationship state as a ledger, not a memory — coverage gaps reported, never smoothed | Writes evidence-backed status transitions only; never writes messages | [05](../cases/one-opportunity-through-six-stages/05-lifecycle-operations.md) | — | contract + [run receipt](../examples/one-brief-controlled-run.md) + [evidence](05-lifecycle-operations/relationship-ledger-sync/EVIDENCE.md) |
| [06](06-revenue-analytics/README.md) | **[Decision Learning](06-revenue-analytics/decision-learning/SKILL.md)** *(lead)* | Which lessons earn their way into long-term rules — the default answer is *don't* | Proposes; promotion into a standing rule is the operator's call | [06](../cases/one-opportunity-through-six-stages/06-revenue-analytics.md) | four-question framework, [scored](../examples/write-back-triage.md) | contract + scored run + [command](06-revenue-analytics/decision-learning/retrospective.command.md) + [evidence](06-revenue-analytics/decision-learning/EVIDENCE.md) |

A `—` in the Evaluation column means **no dedicated grader yet** — coverage there comes from repo-level gates and cold reads, and [the evaluation registry](../evals/README.md) tracks exactly this. For what each module may write on its own authority versus what always stops at the operator: [decision rights](../docs/decision-rights.md).

## What's here, and what isn't

This roster lists every contract published so far — not every module in the production system. The [staffed pipeline](../docs/pipeline.md#the-pipeline-staffed) names the wider inventory; exact dated counts live in [the evidence ledger](../docs/evidence-ledger.md). A module publishes here only when it passes the same gate every current contract passed:

1. A stranger can understand the judgment it owns, when it runs, what it delivers, and where the operator keeps the final call — without the private system or a verbal walkthrough.
2. It is a re-authored public edition: no personal data, no internal paths, no credentials or sensitive operational surfaces ([the sanitation boundary](../docs/how-this-repo-was-sanitized.md)).
3. It matches the production source it was adapted from — nothing legacy or superseded is published to pad the count.
4. Its claims hold inside the repo's [stated boundaries](../README.md#what-this-proves--and-doesnt) and would survive an interview.
5. It carries a verification strip, an evidence index, and a stable path a public page can deep-link.

Maturity decides the count. More contracts publish when they clear the gate — not before, and not to hit a number.

### Moved paths

Several contracts were first published under earlier names or flat paths; every skill URL that was ever live carries a moved-stub, not a 404: [`jd-loop-routing`](jd-loop-routing/SKILL.md) → Audience & Routing · [`resume-tailor`](resume-tailor/EXCERPT.md) (+ [its grader](resume-tailor/graders.md)) → Buyer-Ready Proof · [`systemize-learnings`](systemize-learnings/SKILL.md) (+ [its command](systemize-learnings/retrospective.command.md)) → Decision Learning · [`marketing-reframe`](marketing-reframe/SKILL.md) → stage 03.
