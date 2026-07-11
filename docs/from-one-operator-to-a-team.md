# From one operator to a team

> **Public edition.** The solo system described in present tense here is the one running today — the same system the rest of this repository exhibits and audits. The team-scale design is adapted from a private architecture plan (2026-07-10) and carries exactly that status: **designed, and being proven on live data now — not deployed.** Every claim below keeps that register. One misread to rule out up front: nothing on this page says I have led or enabled a team with this method. That claim would be the wrong kind of proof anyway — what transfers is a method you can audit, not a war story you'd have to take on faith.

Everything else in this repository shows the method working for one operator. A fair reader finishes it with one question left: **so what would you actually do inside my team?**

The compressed answer:

> I've already run this pattern solo: a governed pipeline where AI reads one shared context before it touches anything. Walking into your team, the same move is a shared method your team's AI reads before it talks to your HubSpot — I've designed that gateway, and I'm proving it on live data now.

(HubSpot is the concrete case because that's where my own live proving ground runs; the discipline is CRM-agnostic. And *proving* is a precise word here — the status paragraph below says exactly what runs today and what doesn't.)

The rest of this page unpacks that sentence — what lands on day one, what gets written in the first weeks, and what stands between AI and the CRM — under the same claim boundaries as the rest of the repo.

## What changes at team scale — and what doesn't

Solo, three governance jobs are easy to miss because one person quietly holds all of them: the operator *is* the shared context, *is* the review gate, *is* the write authority. A team can't inherit those by osmosis. Either they become explicit, or they stop existing — and "AI adoption" decays into ten people running ten private prompts against the same CRM, each session quietly re-deciding definitions the team thought were settled.

So the transfer is not "install my system." It is making three moves explicit — the same three this repository demonstrates end to end:

1. **One shared context, read before anything.** The constitution move.
2. **Judgment written where it can be reviewed, versioned, and tightened.** The skills move.
3. **One gate between AI and the system of record.** The gateway move.

What does *not* transfer: my skills. [§2 of the README](../README.md#2--what-this-is--and-is-not) draws this boundary, and this page is built around it, not over it — the skills here encode *my* judgment about *my* pipeline; installing them in your team would just be a framework with extra steps. What transfers is the method for encoding **your team's** judgment, plus the governance shapes that make it safe to act on once encoded.

## Day one — one shared context

Before any AI session touches team work, it reads one governance file. Mine is [exhibited here](../constitution/CONSTITUTION.md); a team's version answers the same four questions in the team's own vocabulary:

- what this team is doing, and the order in which judgments get made;
- what words mean — the definitions that must not drift: what counts as qualified, what "closed-lost" may be used to say, which fields are someone's word and which are computed;
- what **done** means: artifact landed *and* state written back *and* the next person can continue — in the same turn;
- what may never be claimed or written without a named human.

This is not a prompt library and not a wiki. It is the smallest set of rules that otherwise live in everyone's head and diverge quietly — kept small the same way this repo keeps its own rules small: every line has to earn its place, and new lessons earn their way in through triage ([the default answer is don't](../skills/systemize-learnings/SKILL.md)).

Day one's deliverable is deliberately modest: that file, drafted from listening, small enough to actually be loaded into every session — because a shared context nobody loads is a poster.

## The first weeks — writing the team's judgment into skills

[The loop](the-loop.md) does not change at team scale; only whose judgment it captures does. Define → Evaluate → Codify → Tighten → Reuse, run on the team's recurring calls instead of mine:

- **Find the re-improvised judgment.** Every team has a few: which inbound leads route where; what makes a signal qualified; how the campaign taxonomy keeps one meaning per term; what a weekly readout must contain before it ships. The tell is the question the team answers slightly differently every week — not carelessness, just judgment that was never written down.
- **Run it on real cases, with its owner making every call.** The skill gets written *from* their decisions, not from a meeting about their decisions.
- **Codify it in the team's language.** Plain prose the owner can read, veto, and amend — versioned like code, with a named owner and explicit boundaries: what it may read, what it may claim, when it must stop and ask.
- **Tighten on misses.** When a run gets it wrong, the fix lands in the rule, not just the output — misses become named guardrails, the way [this system's real misses did](../examples/failure-guardrail-log.md).

The success test is not "the team uses AI now." It is that the judgment survives its owner's vacation, the new hire's first week reads like the old hand's, and when the judgment turns out wrong, there is exactly one written place to fix it.

## Before AI touches the CRM — one gateway

The system of record is where governance stops being philosophy. A CRM that ten well-meaning sessions write into directly becomes unauditable — not because anyone lied, but because no one can say which value came from whom, under which rule, reviewed by which human.

The design I've committed to — and the one being proven on my own live data now: **no AI write reaches the CRM except through one gateway.** For every proposed write, the gateway must know:

- **identity** — which agent, running which skill at which version, from which evidence;
- **authority** — a field-level allowlist: which properties this agent may even *propose*; fields a human has confirmed stay writable by humans only;
- **lifecycle** — everything arrives as a *candidate*; only review promotes it (next section);
- **conflict behavior** — if the CRM's current value disagrees with what the agent read, the write freezes into a review queue; there is no last-write-wins;
- **hygiene** — shared rate limits, idempotency (the same event replayed lands zero duplicates), and a read-back after every apply, so "written" means *verified written*.

No agent gets an unrestricted token. Not because agents are untrustworthy in some dramatic sense — because ungoverned writes are unattributable, and unattributable state is how a team stops trusting its own CRM.

Status, precisely: my solo pipeline already projects into **my own** live HubSpot portal under review discipline — privacy-screened summaries only, read-back after every write, drift audits, and gated record classes landing as proposals rather than writes ([seen running in the annotated session](../examples/annotated-session.md)). The full gateway is one stage earlier: the design is committed, and its proof is staged against that same live portal — shadow mode first, in which the gateway may only emit auditable write *intents* (same identity, authority, and conflict checks; zero writes), with its control cases written into the acceptance bar before any apply is allowed: an unauthorized write, a duplicate replay, a rate-limit burst, a source conflict. **Designed, being proven on live data; not deployed.** When that sentence changes, it will change because the evidence did — the same [ledger policy](evidence-ledger.md) the rest of this repo runs on.

## What gets to be true — raw → review → promoted

A CRM a team trusts is not the one with the most data in it. It is the one where every field can answer *"says who?"* The design splits truth into layers and makes promotion — not insertion — the only way up:

```text
raw evidence        full messages, logs, AI reasoning — never CRM fields;
    │               lives in its own store, referenced by pointer and hash
    ▼
candidate           a named agent's computed judgment — a classification, a
    │               score, a status proposal — carrying its skill version
    │               and source reference
    ▼  human review
promoted view       the operational truth the team actually reads: current
                    state, owners, next actions — every field with a named
                    owner and write authority
```

Three rules make the ladder hold. **Raw never skips to promoted** — a full email body or an AI's chain of reasoning is evidence, not state, and it stays out of the CRM entirely. **Conflicts freeze rather than overwrite** — a disagreement between source and system is a finding, and it goes to a human as one. And **the judgment itself lives in version control, not in the CRM** — the CRM holds what is currently true; the repo holds *why the system believes it*.

If the ladder looks abstract, it isn't — it already runs, solo, at skill level, today. [The annotated session](../examples/annotated-session.md) shows one pass end to end: inbox evidence in, classified candidates out, one human ruling on the one message that deserved a human, promoted tracker state written in the same turn. The gateway is that same ladder made structural — enforced for every write, instead of practiced per skill.

## What this page is NOT claiming

- **Not team history.** I have not run this method with a team. This page is a design with a live proving ground, written inside a repo whose whole discipline is that claims carry their own boundaries — which is exactly why I can say that plainly and expect the rest to stand.
- **Not your stack's administrator.** Same boundary as [§6 of the README](../README.md#6--what-im-not-claiming): my CRM and marketing-tooling exposure is workflow-level, on my own live portal. No one's production instance is being claimed here.
- **Not a rollout script.** Inside a real team this starts smaller than this page — reading how the team actually works before writing anything down. The sequence above is the method's order (context → judgment → gateway), not a week-by-week promise made from outside the building.

The reason to believe any of this is not this page. It is the rest of the repository — the same method, running, auditable: [start with an artifact](../examples/routing-brief-sample.md), or [watch a session run](../examples/annotated-session.md).
