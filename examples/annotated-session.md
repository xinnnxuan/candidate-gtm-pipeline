# An annotated session — the method in motion

> **Checkable artifact.** Re-authored from a real lifecycle close-out in the production system (which runs in Traditional Chinese): translated, compressed, and generalized — companies and message text are stand-ins; the module name, tier rules, and every decision beat are the production ones. The module shown, [`inbox-to-pipeline-sync`](../skills/05-lifecycle-operations/inbox-to-pipeline-sync/SKILL.md), is runtime stage 9 in [the Candidate GTM pipeline](../docs/pipeline.md#the-pipeline-staffed) and has a published contract. The other artifacts show decisions and outputs; this one shows CRM state and measurement honesty in motion: a gate prevents a false conversion-state write, a human separates *rejected* from *role closed*, and verified state lands in the same turn.

---

## Beat 1 — invocation

> **Operator:** sync the inbox.
>
> **System:** Running `inbox-to-pipeline-sync`. Contract loaded — the mailbox is read-only (no deleting, no marking read, no replies, ever); every status signal is classified into **AUTO / REVIEW / unmatched**; nothing writes to the tracker until you've seen the dry-run. Reading messages since the last sync…

**What to notice:** the invocation costs one line because the judgment was paid for earlier. Everything the system just announced — the read-only boundary, the tiers, the dry-run-first rule — is written in the skill, versioned, and loaded on invocation; the operator doesn't re-negotiate it per session, and can't silently lose it either. This is the Reuse step of [the loop](../docs/the-loop.md) as it feels in practice: the run starts from the tightened rule, not from a fresh prompt.

## Beat 2 — the dry-run (the gate)

> **System:** Four status signals. Dry-run — no writes yet:
>
> | # | Message (paraphrased) | Reads as | Tracker match | Tier | Proposed |
> |---|---|---|---|---|---|
> | 1 | "…decided to move forward with other candidates." | rejection — strong closing language | one open application; exact role match | **AUTO** | mark rejected, outcome dated from the message |
> | 2 | "We've received your application and will be in touch." | receipt confirmation — no decision | one open application | — | **no action** — a confirmation is not a rejection |
> | 3 | "…we've closed this search; the role won't be filled this quarter." | closure — but of what kind? | company has **two** open applications | **REVIEW** | held for a human ruling |
> | 4 | agency outreach about a role that isn't in the tracker | n/a | none | unmatched | listed only — unmatched never writes |
>
> One item needs you: **#3.**

**What to notice:** the gate is the tier system, and it earns its keep on #2 and #3. Message 2 is the classic false positive — it contains "application," a polite cadence, and no commitment; a keyword-level reader files it as a loss. The rule requires strong rejection language precisely so a receipt can never close an application. Message 3 is the opposite trap: something really did end, but the system can only prove *which company*, not *which of two applications* — and partial certainty is treated as a queue item, not a coin flip. Ambiguity produces a review row; it never produces a guess.

## Beat 3 — the human ruling

> **Operator:** #3 is the earlier of my two applications there — the message quotes the req ID from that confirmation thread. And log it as the role closing, **not** as a rejection: they didn't evaluate me; the search itself was pulled.
>
> **System:** Ruled. Closing the earlier application as **role-closed** (not rejected), outcome date taken from the message's own date. Your second application at that company stays open, untouched.

**What to notice:** the ruling is a judgment, not a rubber stamp — two judgments, in fact. *Identity*: which of two applications this message ends — the human had thread context no matching score could reach. *Meaning*: rejected versus role-closed — a distinction that looks like bookkeeping and is actually funnel measurement honesty. A pulled search says nothing about candidate-market fit; filing it as a rejection would corrupt the loss denominator and teach the next cycle a lesson the market never taught. The gate's job was to shrink the session's decisions down to the one that needed exactly this: a human with context, ruling once, on a well-shaped question with the evidence attached.

## Beat 4 — write-back, same turn

> **System:** Applied and verified:
>
> - **#1** rejected, **#3** role-closed — tracker status and outcome timestamps written, then read back and confirmed. The untouched application stays `applied`.
> - All four messages marked processed in the tracker's intake ledger — the mailbox itself untouched — each carrying its ruling and its matched application, so no future session re-judges them, on any machine.
> - Projection synced: the record-level changes flowed to your live CRM view — your own portal — with read-back; the one gated record class landed as a **proposal**, not a write.
>
> Close-out: two applications closed with dated outcomes, one confirmation ignored *on the record*, one unmatched item listed for you. Downstream queues are current.
>
> **Operator:** anything from this session worth writing into the rules?
>
> **System:** No. #2 and #3 are existing guardrails doing their job, not new failure modes — nothing here earns a rule change. Default is don't write.

**What to notice:** *done* happened inside the turn — artifact, canonical state, downstream continuity, together — which is [the constitution's definition of done](../constitution/CONSTITUTION.md) at work: state is a field written now, not a memory to reconcile later. The read-back makes "written" mean *verified written*; the processed-marks make the work idempotent across machines; the gated proposal is a write that was allowed to ask but not to act. And the last exchange is [the write-back triage](../skills/06-revenue-analytics/decision-learning/SKILL.md) returning its most common and least celebrated verdict: **no** — a system that adds a rule after every session isn't learning, it's sedimenting.

---

## Why this artifact is here

Most of the session followed rules established before the run. The one genuinely ambiguous message stopped for review instead of being guessed through, and the resulting state landed in the same turn. That is the claim this repository keeps making: explicit criteria, visible exceptions, and consistent state at working speed.

And the ladder this session walked — raw message → classified candidate → human ruling → promoted tracker state — is the same ladder [from one operator to a team](../docs/from-one-operator-to-a-team.md) proposes making structural: for a team, per write, at the CRM's front door, instead of practiced per skill.
