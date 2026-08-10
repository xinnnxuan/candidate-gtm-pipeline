# Decision rights — what AI may write, and what always stops at the operator

> **The one-page governance read.** "Uses AI" is not a claim worth evaluating. The evaluable claim is this: for every judgment in the pipeline, it is written down in advance whether the outcome may land automatically, must wait for the operator, or may never be automated at all — and every one of those rules exists because something once went wrong without it. This page reads the whole repository through that single lens; every row links to the contract or receipt where you can check it.

## The principle: authority scales with blast radius

The quiet failure mode of AI-assisted work isn't a dramatic wrong answer — it's an unattributable state change: a record that says something, and nobody can say which session wrote it, under which rule, checked by whom. So write authority here is not a mood or a model setting; it is tiered by how much damage a wrong write does and how hard it is to undo. Preparation is cheap and unlimited. Internal state is narrow and verified. Anything a real person would see is never automated.

## The four tiers

### Tier 0 — Prepare and propose: everything

Any module may read, analyze, compare, rank, and draft. This tier is deliberately unlimited — the whole point of the system is making the operator's next judgment cheap. What Tier 0 may never do is treat its own confidence as evidence: a proposal carries its sources and its uncertainty, or it isn't a proposal, it's an opinion.

### Tier 1 — Pre-authorized write-backs: narrow, deterministic, verified

A small set of internal state changes may land without a per-case human decision — and only because the authorization was decided in advance, per state class, in a versioned contract. Every Tier 1 write must clear all of:

- **A written contract names that exact state class as auto-writable.** Nothing is auto-writable by analogy.
- **Identity is decided deterministically, never by the model.** The classifier says what a signal *means*; matching logic decides which record it *belongs to*. A judgment arriving with identity or state fields it doesn't own is rejected wholesale ([the email contract](../skills/05-lifecycle-operations/inbox-to-pipeline-sync/SKILL.md)).
- **High confidence and a unique match** — ambiguity of any kind demotes the write to Tier 2.
- **The write goes through the one formal path and is read back** — "written" means *verified written*, not *requested*.

What actually lives here: confirmed negative outcomes (a rejection closing its one matched record), evidence-backed relationship-status transitions ([the ledger contract](../skills/05-lifecycle-operations/relationship-ledger-sync/SKILL.md)), and same-turn milestone state that contracts require when an artifact lands ([pipeline](pipeline.md#milestones-are-fields-not-memories)). The asymmetry is deliberate: **bad news may close itself; good news always waits.** A rejection ends a record. An interview creates obligations toward a real person — and that class of state never lands on classifier confidence ([seen live](../examples/one-brief-controlled-run.md): thirteen signals in, one auto-write out, the best news in the batch held).

### Tier 2 — Held for the operator: judgment states

Everything that commits attention, interprets meaning, or touches a person's standing waits for a human ruling, no matter how confident the preparation:

- **Admission** — which opportunity becomes a tracked pursuit. The slate pick is never delegated ([qualification](../skills/01-market-research/opportunity-qualification/SKILL.md)).
- **Positive signals** — interviews, assessments, offers, human replies: routed to the operator every time.
- **State rulings with interpretive weight** — *rejected* is not *role-closed*; the difference changes what the loss teaches.
- **Release approval** — a tailored page ships only after the operator approves it against its grader ([the exit gate](../skills/03-positioning-messaging/buyer-ready-proof/graders.md)).

A human ruling, once made, is final against automation: no re-triage, model upgrade, or rule change silently overwrites it.

### Tier 3 — Never automated: external actions

Nothing that leaves the system is ever sent by the system. No message goes out un-reviewed; browser-assisted form work stops before Submit; the release click is the operator's by contract ([apply check](../skills/04-marketing-operations/application-release-qa/SKILL.md), [relationship follow-through](../skills/05-lifecycle-operations/relationship-follow-through/SKILL.md)). This is not a temporary caution to be relaxed as trust grows — it is the design. The machine's job is to make the operator's next judgment cheap, not to act on her behalf.

## Rule changes have their own gate

One tier sits above state: changing the rules themselves. A single run changes no rules — however striking its result. Evidence earns its way into a standing rule only through [the write-back triage](../skills/06-revenue-analytics/decision-learning/SKILL.md), where the default answer is *don't*, and only repeated or high-cost patterns pass. A system that adds a rule after every session isn't learning; it's sedimenting.

## How failures become controls

The tiers are not a philosophy — most of them are scar tissue, and the scars are documented:

| What went wrong | The control it became | Where it lives now |
|---|---|---|
| A failed collection query read as a cold market | Collection health is first-class readout content; a gap you can't see is a wrong conclusion | [failure log](../examples/failure-guardrail-log.md) · [ledger contract](../skills/05-lifecycle-operations/relationship-ledger-sync/SKILL.md) |
| An adjacent stakeholder read as peer truth | Sources are classified before they shape positioning | [failure log](../examples/failure-guardrail-log.md) · [routing contract](../skills/02-audience-strategy/audience-routing/SKILL.md) |
| A fluent platform noun outran the evidence | Claim ceilings are written before message development exists | [failure log](../examples/failure-guardrail-log.md) · [routing contract](../skills/02-audience-strategy/audience-routing/SKILL.md) |
| Receipt templates misread as rejections | Semantic reading over full content; near-miss states separated; the write gate re-verifies live state | [email contract](../skills/05-lifecycle-operations/inbox-to-pipeline-sync/SKILL.md) |

Same loop every time: the miss becomes a named rule at the point that caused it, and the next cycle inherits the control ([the loop](the-loop.md)). Conflicts follow the same spirit — when a source disagrees with the system's current state, the write freezes into review; there is no last-write-wins.

## Why this page is the trust argument

A candidate saying "I use AI heavily" tells a hiring manager nothing — the market is full of that sentence. What this page offers instead is checkable: authority tiered by impact, every automatic write narrow and verified, every human gate named in a versioned contract, and every guardrail traceable to the failure that created it. The same tiering is what [transfer to a team](from-one-operator-to-a-team.md) would make structural — one gateway, field-level authority, conflicts that freeze instead of overwrite — designed, and staged for proof on live data; not deployed.
