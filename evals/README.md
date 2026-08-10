# Evaluation registry — how this repo's judgments get checked

"Trust the method" is not an evaluable claim. This page names every way the published judgments are actually tested, what each test covers, and — honestly — which skills have no dedicated evaluation yet. When a test catches something, the change it forces is recorded in [the changelog](../CHANGELOG.md).

## The four evaluation layers

**1 · Exit-gate graders.** A written rubric that checks a specific artifact class before release, points to the owning rule on failure, and never re-edits. One is published: [the 7-check resume exit gate](../skills/03-positioning-messaging/buyer-ready-proof/graders.md), with [a published failing-and-passing run](../examples/resume-draft-fail-and-fix.md).

**2 · Published run receipts.** Real runs, re-authored or fictional-by-construction, that let a reader check a contract against its own behavior: [the annotated session](../examples/annotated-session.md), [the controlled-run receipt](../examples/one-brief-controlled-run.md), [the scored write-back triage](../examples/write-back-triage.md), [the sample routing brief](../examples/routing-brief-sample.md), and [the six-stage case](../cases/one-opportunity-through-six-stages/README.md).

**3 · Adversarial cold reads.** Before each publish wave, clean agents with no session context read the repository with hostile briefs — extract private data, find unsupported ownership claims, misread the candidate's role — and publish is blocked until the answers come back empty. What these reads caught, and what changed because of them, is in [the changelog](../CHANGELOG.md); the standing process is documented in [how this repo was sanitized](../docs/how-this-repo-was-sanitized.md).

**4 · Machine gates.** Deterministic checks that run on every commit, locally and in CI: [the denylist gate](../tools/check-denylist.mjs) over content and filenames, and [the structure gate](../tools/check-structure.mjs) over required paths, relative links, anchors, and the legacy-stub targets. Prose promises drift; validators don't.

## Coverage, per skill

| Skill | Dedicated evaluation | Run receipt |
|---|---|---|
| [Opportunity Qualification](../skills/01-market-research/opportunity-qualification/SKILL.md) | — none yet | [Case · 01](../cases/one-opportunity-through-six-stages/01-market-research.md) |
| [Audience & Routing](../skills/02-audience-strategy/audience-routing/SKILL.md) | Errors surface at the downstream exit gate | [Sample brief](../examples/routing-brief-sample.md) · [Case · 02](../cases/one-opportunity-through-six-stages/02-audience-strategy.md) |
| [Buyer-Ready Proof](../skills/03-positioning-messaging/buyer-ready-proof/SKILL.md) | **[7-check grader](../skills/03-positioning-messaging/buyer-ready-proof/graders.md)** | [Fail-and-fix](../examples/resume-draft-fail-and-fix.md) · [Case · 03](../cases/one-opportunity-through-six-stages/03-positioning-messaging.md) |
| [Marketing Reframe](../skills/03-positioning-messaging/marketing-reframe/SKILL.md) | Own quality gate, applied in its run | [Worked run](../examples/marketing-reframe-run.md) |
| [Application Release QA](../skills/04-marketing-operations/application-release-qa/SKILL.md) | — none yet | [Case · 04](../cases/one-opportunity-through-six-stages/04-marketing-operations.md) |
| [Relationship Follow-Through](../skills/05-lifecycle-operations/relationship-follow-through/SKILL.md) | — none yet | [Controlled run](../examples/one-brief-controlled-run.md) · [Case · 05](../cases/one-opportunity-through-six-stages/05-lifecycle-operations.md) |
| [Inbox-to-Pipeline Sync](../skills/05-lifecycle-operations/inbox-to-pipeline-sync/SKILL.md) | — none yet | [Annotated session](../examples/annotated-session.md) · [Controlled run](../examples/one-brief-controlled-run.md) |
| [Relationship Ledger Sync](../skills/05-lifecycle-operations/relationship-ledger-sync/SKILL.md) | — none yet | [Controlled run](../examples/one-brief-controlled-run.md) |
| [Decision Learning](../skills/06-revenue-analytics/decision-learning/SKILL.md) | Four-question framework, scored in its run | [Scored triage](../examples/write-back-triage.md) · [Case · 06](../cases/one-opportunity-through-six-stages/06-revenue-analytics.md) |

"None yet" is a statement of maturity, not an apology: a grader is added when a skill's failure mode is frequent or costly enough to earn one — the same [gate principle](../docs/pipeline.md#the-gate-principle) the pipeline itself runs on. The private system also runs cold-read regression exams on protected sources before and after edits; those exams reference private material and are summarized here only through the changelog entries they produce.
