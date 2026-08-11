# Changelog — which failure changed which public method

This log records one thing: a failure or a hostile read, and the method change it forced. It is not a commit history, and it deliberately excludes routine edits — every entry here passed [the write-back triage](skills/06-revenue-analytics/decision-learning/SKILL.md), where the default answer is *don't*.

## 2026-08-11 — a release gate had rules, but no independent public test

**The failure.** Application Release QA claimed a three-verdict gate, but a public reader could inspect only a narrated fictional case. There was no independent rubric showing which factual, semantic, or authority failure blocks release — and no public-safe run proving all three verdicts stay distinct.

**The change.** Stage 04 now publishes a [5-check release grader](skills/04-marketing-operations/application-release-qa/graders.md) and [three fictional-by-construction fixtures](examples/application-release-qa-evaluation.md): ready, fix-first, and unresolved intent. The grader points without editing, and every run ends before Submit, so stronger verification does not widen automation authority.

## 2026-08-10 — the roster was legible, the verification wasn't

**The failure.** A reader who trusted a skill's description had no path to check it: contracts carried no pointer to a case, an evaluation, or the rule changes behind them, and three contracts still wore private-system codenames. Understanding was one click away; verification wasn't.

**The change.** The public layer was rebuilt station-first: every contract now opens with a verification strip (status, decision, authority, case / eval / change links), every skill ships an evidence index, [a six-stage case](cases/one-opportunity-through-six-stages/README.md) traces one opportunity end to end, and [an evaluation registry](evals/README.md) states coverage honestly — including where there is none. The remaining private codenames were retired from public slugs; the `resume-tailor` excerpt grew into the full [Buyer-Ready Proof](skills/03-positioning-messaging/buyer-ready-proof/SKILL.md) contract. Three original 2026-07 skill URLs carry moved-stubs instead of 404s.

## 2026-08-04 — the identity read failed, and a tense drifted

**The failure.** A blind hiring-manager read of the first screen came back with the one misread this repository exists to prevent: it wasn't immediately clear *whose* live case this is and what is actually being claimed — the skill inventory read as the sales pitch. Separately, an adversarial pass caught the phrase *being proven on live data* describing team-transfer work that is designed and staged, not running.

**The change.** The first screen was rewritten to lead with the live case being the candidate's own job search, and inventory counts left the selling position for [the dated ledger](docs/evidence-ledger.md). Every *staged* claim was tightened to *staged for proof* — scope narrowed, nowhere widened. The same wave published the two stage-9 sync contracts after their misread class (a receipt template misfiled as a rejection) had become a semantic-triage rule with its own receipt.

## 2026-07-22 — the metric didn't survive its own audit

**The failure.** Preparing a public funnel number, an internal audit found records whose state disagreed with their timestamps and notes — a submission figure that would not have survived a hard question.

**The change.** The canonical *submitted* definition was repaired at the source, regression-tested, and the public conversion rate was **withheld** rather than published on a defective denominator. The repository was also renamed (`governed-ai-workflow` → `candidate-gtm-pipeline`) after blind readers filed it in the wrong pool — the old name sold the method layer, not the marketing case. The evergreen-floors-plus-dated-ledger policy dates from this repair.

## 2026-07-12 — the repo broke its own rule, and a stranger caught it

**The failure.** A blind read found *converts better* written without a denominator — inside a repository whose own contracts forbid exactly that — plus a demand-side claim stretched past its evidence. A second finding: the strategy was invisible; readers could see governance discipline but had to infer the market read behind it.

**The change.** Both claims were corrected to what the evidence carries. [Reading the buyer](docs/reading-the-buyer.md) was added so the demand-side read is inspectable instead of implied, and the six lifecycle gates were named in [the pipeline](docs/pipeline.md#the-six-gates).

## 2026-07-11 — the judgment existed but couldn't be seen

**The failure.** The owner's own cold read of the skill exhibits failed: the judgment each skill owns was real but buried — written as execution specs, with the decisions invisible to a reader who wouldn't cross-reference three files.

**The change.** Every contract gained a first screen — *the judgment, in one screen*: what the skill prevents, the calls it hardcodes with their reasons, and one worked call. New contracts are born in that shape.

## 2026-07 · first publish — three production failures became the founding controls

**The failures.** A silent collection failure read as a cold market; a fluent adjacent profile absorbed as peer truth; a borrowed platform noun that interviewed better than it defended. Each genuinely happened and cost something — [the receipts](examples/failure-guardrail-log.md).

**The changes.** Collection health became first-class readout content; stakeholder sources are classified before they shape positioning; claim ceilings are written before drafting exists and enforced by [an exit gate](skills/03-positioning-messaging/buyer-ready-proof/graders.md). The publish process itself inherited the discipline: a red-team pass on early drafts found name and path leaks in sanitized copies, so [re-authoring replaced redaction](docs/how-this-repo-was-sanitized.md) as the rule.
