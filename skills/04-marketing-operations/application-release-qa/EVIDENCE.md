# Evidence — Application Release QA

An index, not a copy: each row points to the artifact where the claim can be checked.

| What to check | Where |
|---|---|
| The judgment applied to one release | [Case · stage 04](../../../cases/one-opportunity-through-six-stages/04-marketing-operations.md) |
| The independent gate and its minimum bar | [5-check release grader](graders.md) |
| All three verdicts produced from public-safe inputs | [Release-QA evaluation](../../../examples/application-release-qa-evaluation.md) — ready, fix-first, and unresolved-intent fixtures |
| The human boundary this skill answers to | [Decision rights · Tier 3 — never automated](../../../docs/decision-rights.md) |
| Where the release sits in the runtime | [The staffed pipeline · stage 8](../../../docs/pipeline.md) |
| The state write-back that follows a confirmed submission | [Inbox-to-Pipeline Sync](../../05-lifecycle-operations/inbox-to-pipeline-sync/SKILL.md) |

**Privacy boundary:** no public receipt of a live release run is published — release artifacts contain exactly the personal data this repo excludes. The grader therefore runs on fictional-by-construction fixtures while preserving the production verdict and human-submit boundaries. Coverage is indexed in [the evaluation registry](../../../evals/README.md).
