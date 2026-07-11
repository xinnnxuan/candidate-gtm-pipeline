---
name: systemize-learnings
description: >
  The close-out triage that decides whether a session's lessons deserve to
  become system rules. Its defining bias: the default answer is DON'T write —
  most lessons are single-case noise, and a system that absorbs every
  session's opinions stops being trustworthy.
---

# Systemize Learnings

> **Public edition.** Adapted from a production system. This is the authority definition of the write-back triage framework; the retrospective command (see `retrospective.command.md` beside this file) routes into it but never restates it.

## The judgment, in one screen

**What this skill prevents:** a feedback loop that overfits every response. A system that writes a new targeting, message, or process rule after every case gets longer, more contradictory, and less trusted — until noise is mistaken for learning.

**The calls it hardcodes:**

- **The default verdict is DON'T write.** One reply, silence, or rejection is an observation — not automatically a pattern. "Nothing should be written back this round" is a successful output, not an empty one.
- **Four questions gate every candidate.** Does it recur? Is it already covered? What does re-hitting it cost? Does the minimal edit make the system *shorter or stabler* — or just longer? High-confidence pass on all four, or the market observation stays evidence rather than becoming a rule.
- **Zero-exception constraints become machines, not prose.** If a rule must never be missed, it belongs in a hook or validator — prose promises drift; validators don't.
- **Write-backs absorb, they don't append.** Every edit is presented as before → after, and if After is merely longer than Before, it goes back for another pass.
- **An execution miss is not a source gap.** If the rule already exists and the session simply failed to follow it, writing it a second time just teaches the system to say everything twice.

**One run, scored** ([the sample triage](../../examples/write-back-triage.md)): four candidate learnings enter — a missing fallback rule, a caching idea, a mid-session slip, a 12-keyword lookup table. **One survives** — the fallback rule, because it passes all four questions: it recurs, it is not yet covered, re-hitting it silently costs an interview, and it lands as an absorptive rewrite *inside* an existing gate rather than a new rule bolted on. The cache parks as a plan; the slip is rejected because the rule already exists; the lookup table is rejected because it would pull qualification back toward title-matching. One-in-four is closed-loop learning refusing to overfit.

*The contract below is the authority definition; the [retrospective command](retrospective.command.md) routes into it and restates none of it.*

## Intent

At the end of a working session, sort the corrections, rework, stumbles, and insights into three piles:

- **worth writing back** — a repeatable quality standard the system should own,
- **not worth writing back** — single-case detail, ordinary judgment, or a passing preference,
- **not ready** — a real observation that should rest as a plan, log, or follow-up until it matures.

The goal: the *next* session does the right thing naturally, instead of depending on this conversation's memory.

## The default is DON'T write

This is the skill's defining bias. A system that absorbs every session's opinions becomes long, contradictory, and untrustworthy — rule sediment is a failure mode, not diligence. A candidate learning must *earn* its way into a long-term source. If nothing qualifies, the correct output is: **"nothing should be written back this round"** — with the main reason — and no manufactured change for the sake of having output.

## Starting point

Read only the sources, diffs, artifacts, and command outputs this session actually touched. Do not sweep the repository for this triage; open a source only when a candidate write-back might land there.

## The four-question framework

For every candidate learning, ask:

1. Is this a quality standard, process gap, or source gap that will **recur across tasks**?
2. Is it **already covered** by an existing source — and this session simply failed to follow it?
3. If it is *not* written back, will another session **probably re-hit it, at a visible cost**?
4. Would the minimal edit make the system **shorter, more stable, or better routed** — or just add one more prose rule?

Only a high-confidence pass earns a write-back proposal. When the constraint is zero-exception, easy to miss, or needs a deterministic guarantee, prefer a script, hook, or validator over stronger prose.

If the triage reveals that the real problem isn't "what did this round teach" but that a source itself has drifted — over-ruled, hard boundaries tangled with heuristics — recommend a dedicated health check on that source instead of patching it in-line.

## Landing spots

| Layer | What lands there |
|---|---|
| Constitution | Cross-task, long-term stable, should apply on every run |
| A skill | One workflow's execution skeleton, decision points, defaults, or failure-specific guardrails |
| A command | An entry point's routing, parameters, order, or handoff |
| Conventions | Stable definitions: field semantics, formats, layer boundaries |
| Plans | Cross-file decisions that will be continued or handed off, but aren't mature enough to change source yet |
| Scripts / hooks / validators | Zero-exception, easy-to-miss, deterministic-guarantee constraints — wired into the doctor script and pre-commit so the check runs itself |

## Output

Propose first; touch nothing long-term unless the operator has already made this round's task a workflow fix.

If the landing spot is an existing source, read the current passage first, then propose an **absorptive rewrite** — not "append to section X", and not a new rule stacked on the pile. Present it as before → after:

```md
Verdict: don't write back / park as plan / write back to source

Worth writing back:
| learning | evidence | landing spot | minimal edit | acceptance check |
|---|---|---|---|---|

Absorptive rewrite draft (when editing an existing source):
- Before: {the current passage}
- After: {the integrated rewrite}
- Check: {what of Before survives, what new insight was absorbed, why After reads clearer and drifts less}

Not worth writing back:
| learning | reason |
|---|---|

Needs operator confirmation:
- I recommend changing ... because ...
- On "yes", I will touch only: ...
```

## After the write-back

Land only after confirmation. Then re-run the before/after self-check: *After* should keep *Before*'s living intent, delete duplicated or obsolete guardrail fragments, absorb the new insight — and not merge two orthogonal rules into a conflict. If *After* is merely longer, go back and rewrite before closing.

If authored skill or command sources changed, run the mirror sync and commit source plus mirror together, narrowly scoped to this round's paths.
