---
name: relationship-ledger-sync
description: >
  Keeps relationship state as a ledger instead of a memory: reconciles sent,
  pending, accepted, and replied against observed evidence, reports coverage
  gaps instead of smoothing them over, and hands the operator a ranked list of
  which relationships need a human now. It writes state; it never writes messages.
---

# Relationship Ledger Sync

> **Public edition.** Adapted from a production system. Re-authored in English with collection mechanics abstracted; the evidence rules, the coverage honesty contract, and the denominator discipline are the production ones. Seen running in [the controlled-run receipt](../../../examples/one-brief-controlled-run.md).

| Verification | |
|---|---|
| **Status** | Production — this judgment runs in the live system today |
| **Decision owned** | Which relationships need a human right now — and how much this round's picture can be trusted |
| **Reads** | Own-account activity surfaces · the relationship ledger |
| **Produces** | Evidence-backed status transitions · ranked human actions · a coverage statement |
| **Write authority** | Writes evidence-backed status transitions only; never writes messages |
| **See it run** | [Case · stage 05](../../../cases/one-opportunity-through-six-stages/05-lifecycle-operations.md) · [the controlled-run receipt](../../../examples/one-brief-controlled-run.md) |
| **Evaluation** | Repo-level gates and cold reads ([registry](../../../evals/README.md)); no dedicated grader yet |
| **Change receipts** | [Failure № 1 → coverage honesty](../../../examples/failure-guardrail-log.md) · [CHANGELOG](../../../CHANGELOG.md) |

## The judgment, in one screen

**What this skill prevents:** networking state living in one person's memory — where "I think they accepted," "didn't I already follow up?", and "nobody ever replies" quietly replace facts. Memory-based relationship management fails in both directions at once: real people wait on answers that were never owed, and owed answers never come.

**The calls it hardcodes** — each written down because improvising it went wrong:

- **A status changes only on explicit evidence.** Acceptance is not a reply. A thread where every message is outbound is not "replied," no matter how long it is. A reaction is not a response. When identity can't be matched beyond doubt — a name without a profile link, two people with the same name — the row goes to review; it is never guessed into a bucket.
- **Partial coverage is a first-class result.** When a collection pass finishes some surfaces and not others, the readout says *partial*, names what wasn't read, and states the consequence out loud: *the action queue may be incomplete.* "Not read" reported as "no one replied" is exactly the failure this system's [failure log](../../../examples/failure-guardrail-log.md) exists to prevent — and the [controlled run](../../../examples/one-brief-controlled-run.md) shows the rule live, sizing a capture gap instead of presenting a complete-looking picture.
- **Freshness gates collection.** If the ledger is recent and trusted, a readout request reads the ledger — it does not re-observe the world to answer a question the record already answers. An explicit "sync now" always observes. The point is spending collection where it changes a decision, and labeling every stale answer with *data current through*.
- **Unknown stays unknown.** Context that wasn't observed — someone's location, the angle of an old message — is recorded as unknown, never guessed. A guessed field poisons every later readout that trusts it.
- **Rates need clean denominators.** Acceptance and reply rates are computed only over dated, comparable cohorts with the *n* visible; below a minimum sample the readout collects and explicitly declines to conclude. No message-wording verdicts before enough comparable cases exist — small-n "learnings" are how a system teaches itself superstitions.
- **A closed thread reopens itself on new inbound.** Closing a conversation means "handled through here," not "ignore this person forever." If they write again, the thread returns to the attention queue automatically, and the reopen is auditable.

**One call, worked:** a long-quiet thread is marked closed; weeks later the person replies. In a memory-run system that reply lands in an unwatched corner and the relationship dies of accidental rudeness. Here the inbound reopens the thread, flags it for attention with its reason attached — and the ledger shows both the close and the reopen, so the attention change itself has a receipt.

## Purpose

This skill owns the answer to one question the operator would otherwise pay for daily with re-reading and doubt: *who is sent, pending, accepted, or replied — and which relationship needs a human right now?*

```text
observed evidence (own-account activity surfaces)
  -> reconcile against the relationship ledger
  -> status transitions only where evidence is explicit
  -> gaps -> repair queue (never conclusions)
  -> readout: ranked human actions + coverage honesty + dated numbers
```

The readout leads with the decision, not the data: the next human actions ranked (scheduled commitments first, owed replies, relationships worth opening, deliberate waits), then repair items, then the numbers with their denominators, then a coverage statement of how much to trust this round. Repair work — data gaps, duplicates, mismatches — is queued for the system and never occupies the operator's people-time.

## The handoff

This skill ends where a message begins. What to say to a specific person — and whether to say anything — belongs to [Relationship Follow-Through](../relationship-follow-through/SKILL.md), which reads the same ledger. The split is deliberate: the module that keeps score never drafts, so bookkeeping pressure ("we haven't touched this one in a while") can never masquerade as a reason to message a human being.

## What this skill never does

- Never sends, drafts, or schedules a message.
- Never stores unmatched private conversations — only threads tied to a tracked pursuit are kept.
- Never upgrades a status on inference: no evidence, no transition.
- Never presents a partial read as a complete one, or a stale ledger as live.
- Never turns one round's numbers into a strategy conclusion without a denominator and repetition.
