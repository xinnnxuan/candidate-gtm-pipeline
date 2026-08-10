---
name: audience-routing
description: >
  Reads the job the way its hiring manager will — which pool this role gets
  filed under, what any candidate must prove, and what may never be claimed —
  and writes that down as a binding brief before the resume is ever opened.
---

# Audience & Routing

> **Public edition.** Adapted from a production system. Re-authored in English with paths generalized; the field contract, the evidence-blinding rule, and the claim-ceiling design are the production ones.

| Verification | |
|---|---|
| **Status** | Production — this judgment runs in the live system today |
| **Decision owned** | Correct pool, must-prove, and claim ceiling — written blind, before the resume is ever opened |
| **Reads** | Job description · network brief · stakeholder calibration notes — never candidate evidence |
| **Produces** | The role-only routing brief (the field contract below) |
| **Write authority** | Writes its routing milestone to the tracker in the same turn; never touches candidate evidence |
| **See it run** | [Case · stage 02](../../../cases/one-opportunity-through-six-stages/02-audience-strategy.md) · [the sample brief](../../../examples/routing-brief-sample.md) |
| **Evaluation** | Its ceiling is enforced downstream by [the 7-check exit gate](../../03-positioning-messaging/buyer-ready-proof/graders.md) ([registry](../../../evals/README.md)) |
| **Change receipts** | [Failures № 2–3 → source classes + claim ceiling](../../../examples/failure-guardrail-log.md) · [CHANGELOG](../../../CHANGELOG.md) |

## The judgment, in one screen

**What this skill prevents:** spending positioning effort on the wrong market read — then asking the wrong buyer to value the wrong proof. Before the resume is ever opened, it qualifies the role, identifies the decision audience and candidate segment, and writes down what may not be claimed.

**The calls it hardcodes** — each written down because improvising it went wrong:

- **Market and audience come before message.** The router never sees the resume. An AI that has already seen the candidate's highlights bends demand toward supply — finding seats for the evidence instead of reading the market. Blinding keeps "who are they hiring" and "what can I claim" two separate, honest questions.
- **The claim ceiling is set before drafting exists.** `cannot_borrow` is written while no one is tempted — a property of the role, not a critique of the candidate. Downstream, the exit gate enforces it before a single bullet is written.
- **A recruiter never decides the lane.** Recruiters are routing owners: their title cluster tells you who moves the application, not what the job is. Role truth comes from the people who do or consume the work.
- **An adjacent org corroborates — it never becomes a peer.** Finding the company's analytics org proves the lane exists, not how this team works. The missing peer is recorded under `known_unknowns`, not bluffed over.
- **"The JD doesn't mention AI" never becomes "AI is irrelevant."** Silence routes AI evidence to the support tier — bound to work quality, neither hidden nor headlined.

**One call, worked** (from [the sample run](../../../examples/routing-brief-sample.md) — a fictional JD put through the production rules): a lifecycle-marketing-analyst post asks for SQL, Looker, and "comfort with AI tools." The bright-but-wrong read is tool-led — *generic data analyst / data-engineer-lite*. The router files that under `wrong_pool` with the reason attached: this team is buying **campaign-decision support, not dashboard throughput**, and the tool-led read costs the interview because the HM can't picture the candidate in the monthly readout. That one call redirects the entire resume's first cut — and `attribution`, `churn model`, `campaign ownership` go into the ceiling before any bullet is tempted to borrow them.

*Everything below is the working contract an AI session actually loads, field by field. To audit it instead of reading it: [the sample brief](../../../examples/routing-brief-sample.md) is this contract, filled.*

## Purpose

This skill is the **role-contract generator** that runs before resume tailoring. It answers one question first: *what is this job actually hiring for* — before anything downstream is allowed to look at the candidate's resume.

It answers role-side questions only:

```text
Which line of work is this JD inside this company?
At first glance, who is this role looking for, supporting which team, improving which business outcome?
Which pool will the hiring manager file this role under at first read?
Where should the resume's first cut land — which role-native work object / action / output?
Which adjacent pools are traps?
What must ANY candidate prove to get the interview?
Which transferable capabilities does the role run on, and what do they touch in THIS job?
Which real nouns in the JD cannot be claimed as prior ownership without direct evidence?
Is AI / automation / analytics a front door, a support method, background noise, or a risk for this role?
```

**Evidence blinding is the core design.** This skill must not read the resume, the master resume sources, experience anchors, projects, or any prior tailoring analysis. Candidate-evidence mapping belongs to the tailoring skill, downstream. The reason: an AI that has already seen the candidate's highlights will unconsciously bend the role reading toward them — finding a seat for the evidence instead of reading what the job wants. Blinding the router is how the system keeps "who are they hiring" and "what can I claim" as two separate, honest questions.

## Boundary — the three-skill chain

- **Stakeholder research** (upstream) contributes live org signals, title clusters, and peer truth sources, recorded as a network brief plus stakeholder calibration notes (manual research).
- **audience-routing** (this skill) compresses `job description + network brief + calibration notes` into a thin, role-only routing brief.
- **Resume tailoring** (downstream) reads the routing brief *and only then* the resume — deciding current pool, pool gap, usable evidence, and section translation.

If the tailoring stage cold-reads the draft and concludes the role contract itself is wrong, it does not quietly patch its own copy — it comes back here and the routing brief is fixed at the source. One contract, one owner.

## Calibration gate

If this role needs stakeholder-calibrated routing:

- Calibration complete and routing-ready → produce the formal role contract.
- Calibration flagged for review → judge whether the pool call needs human correction first; do not auto-overwrite an existing brief.
- Blocked / incomplete / failed → never label the output a calibrated contract. Only on explicit request produce a best-available fallback from the JD alone, marked as such.
  - A common `incomplete` case: research surfaced an **adjacent org** (the company's analytics org, leadership, talent team) but no exact-lane peer. The fallback is neither bluffing nor giving up: if the JD is self-contained, treat the JD as the primary role truth and use the adjacent org **as corroboration only** — evidence the lane is real — never upgraded to peer truth or a confirmed reporting line. Record the missing peer under `known_unknowns`.
  - Conversely, if research found nothing and the JD is thin, stop at the blocker. The test is "is there enough role truth to support the first cut," not "did a file get produced."

## The role-contract fields

The routing brief must stay a **thin, role-only contract**. Every field records a decision, not an essay. The language must let downstream see, at a glance: the correct pool, the daily line of work, the resume's first cut, the transferable-capability map, and the claim ceiling.

### `role_read`

One human sentence preserving the JD's front-door ask: who this role wants at first glance, supporting which team, improving which outcome. This is the hiring manager's entry filter before reading any resume — it is *not* a resume summary. Never describe the candidate here.

### `role_loop`

The loop this job runs every day. Describe the workstream before abstracting it:

```text
input / object -> judgment or action -> stakeholder -> output / handoff / decision -> failure risk
```

### `bottom_layer_capabilities`

The JD's demands unpacked into a capability map that tailoring can match against. Each entry has two layers: first a **portable capability primitive** — named so it survives outside this JD (e.g. `ambiguous problem framing`, `structured signal interpretation`, `assumption and validation discipline`, `reviewable handoff synthesis`) — then the mapping into this JD's concrete work objects, frictions, stakeholders, and outputs:

```text
{portable capability primitive}: this JD's inputs -> judgment -> stakeholder -> output -> claim boundary
```

Do not name primitives after the JD's own domain ("transportation analysis", "proposal operations") — that binding belongs in the mapping half. And do not collapse them into generic soft skills ("communication", "problem solving"). The question this field answers: *which kinds of transferable judgment does this work repeatedly need, and what do they touch here?* Downstream uses it to ask "which true story has handled the same judgment shape?" — not to paste JD keywords into bullets.

3–6 capabilities, still with zero candidate content.

### `correct_pool`

Which role pool this job belongs in at first read — named concretely enough that tailoring knows which direction the frontstage language translates toward.

### `resume_frontstage_direction`

2–4 short bullets making the role-only landing explicit, so the next stage doesn't reverse-engineer the first cut from scattered fields. Must answer: what role-native person should the hiring manager read *any* qualified candidate as; which work object / action / output should lead the page; and which bright-but-wrong direction must not lead. The best form is *"land on X first, not Y"* — where X traces back to `role_loop` and Y traces to `wrong_pool` or `high_risk_nouns`. Never generic resume advice.

### `wrong_pool`

Pools that look adjacent but would misread the candidate — named specifically, with why the misread hurts.

### `must_prove`

The 2–4 things any candidate must prove to get the interview. Each traces back to the daily work in `role_loop` — not abstract skills, and not mapped to anyone's experience.

### `cannot_borrow`

The domain, platform, ownership, seniority, regulated-responsibility, quota, product, or technical depth that **cannot be claimed without direct evidence**. This is the claim ceiling — a property of the role, not a critique of any candidate. It is written down *before* anyone is tempted.

### `front_door_nouns`

The role vocabulary visible in the JD and org research. This is the role's front-door language — explicitly *not* a candidate-safe claim list.

### `high_risk_nouns`

Nouns that genuinely exist in the role but must never be written as prior ownership without direct evidence. Tailoring may use them carefully in JD context or in downgraded translation — never auto-upgraded into a candidate claim.

### `people_title_cluster`

Nearby titles seen in org research: likely manager, peers, routing owners. Recruiters count as routing owners only — never used to judge the role lane.

### `known_unknowns`

Unconfirmed points that would change the role read: the actual hiring manager, team placement, work mix, tool stack.

### `role_ai_relevance`

From the JD and company surface only: how will this role read AI / automation / analytics? Do not translate "the JD doesn't mention AI" into "AI is irrelevant" — the current baseline is that AI literacy is a working method across analyst and ops roles, just not always a front-door requirement.

The field separates four things:

- **Front-door appetite** — does the JD explicitly buy AI adoption, workflow design, AI-assisted analysis, enablement, or ops tooling?
- **Baseline work-method appetite** — even without AI mentions, does the work need source grounding, success criteria, validation checks, review boundaries, exception handling, handoff clarity, documentation?
- **Wrong-pool / overclaim risk** — which AI nouns would misread the candidate as an AI product owner, automation architect, or production AI engineer?
- **Translation target** — if AI can only appear as a method, which role-native work quality does it translate into (reporting quality, record hygiene, research relevance, handoff reliability, source-grounded decision support)?

Output in plain language: `foreground`, `baseline/support`, `tool-name bounded`, `backstage only`, or `avoid` — where `avoid` is legal only when AI wording would genuinely damage routing or misstate ownership, never merely because the JD is silent.

## Working order

1. Extract `role_read` — preserve the front-door ask in one human sentence.
2. Extract `role_loop` — is this an operations line, a case flow, a customer journey, or an analysis/control loop? Where does it start, transform, output, fail?
3. Unpack `bottom_layer_capabilities` — primitive first, JD mapping second.
4. Set `correct_pool` / `wrong_pool` — who should catch this role, and which adjacent reads would hurt.
5. Write `resume_frontstage_direction` — compress the first cut into explicit role-only direction.
6. Write `must_prove` / `cannot_borrow` — must-prove traces to daily work; cannot-borrow sets the ceiling.
7. Separate `front_door_nouns` / `high_risk_nouns` — vocabulary vs. ownership risk.
8. Fill `people_title_cluster` / `known_unknowns` / `role_ai_relevance` — org research calibrates the lane; a stray AI-flavored title never overrides the main pool.

On completion, write the routing milestone back to the application tracker in the same turn — a routing brief that exists only as a file, with no tracker state, counts as not done.

## What this skill never does

- Never reads or edits the resume.
- Never reads candidate evidence.
- Never assigns lead proof / support proof.
- Never decides summary wording, section labels, or bullets.
- Never substitutes for the tailoring stage's own audits.
