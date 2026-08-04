# The two-workbench operating view

Day to day, the pipeline is operated from two connected views — a portfolio workbench and a campaign workbench. This page is the re-authored walkthrough: what each view shows, what each block reads from, and which decision it serves. The live views run behind authentication in the private system; every figure here comes from the [dated ledger](evidence-ledger.md), and the campaign example below is a **fictional pursuit** in a representative shape, per [the sanitation boundary](how-this-repo-was-sanitized.md).

| View | The one question it answers | Pattern it borrows |
|---|---|---|
| Portfolio workbench | Where should attention go now? | Task queue + pipeline board + funnel report |
| Campaign workbench | What does this one opportunity need next? | Record page + conversation thread |

## Portfolio workbench — where should attention go?

```text
[PORTFOLIO]                                      data as of: dated ledger
── ATTENTION QUEUE ─ 3 campaigns need focus ──────────────
▸ interview-stage pursuit — reply with second-round slots   [open campaign →]
▸ interview-stage pursuit — resolve scheduling conflict     [open campaign →]
▸ interview-stage pursuit — scheduled; prep underway        [open campaign →]
── FUNNEL ─ denominators always visible ──────────────────
21,106 screened → 490 pursuits (2.3%) → 367 submitted → 3 interviews → 0 offers
── THIS WEEK'S CADENCE ─ quiet when normal ───────────────
── RECENT INTAKE ─ 7-day window; interview rows never drop ─
── LEARNING ─ the rule change currently in force ──────────
rejection pattern → new targeting sweep → all 3 interviews from the shifted pool
```

Block lineage — what each block reads, and the decision it serves:

| Block | Reads from | Decision served |
|---|---|---|
| Attention queue | application lifecycle states | which campaign gets the next hour |
| Funnel | screening + application records | is the qualification gate doing its job |
| Cadence | activity timestamps | did the routine break (silence is the alert) |
| Recent intake | qualification results | is anything worth opening a campaign |
| Learning | promoted rule changes | what changed since last cycle, and why |

## Campaign workbench — what does this one need next?

```text
[CAMPAIGN — Meridian Analytics · Revenue Operations Analyst]   (fictional)
← back to portfolio                              stage: interview
── WHAT THIS ONE NEEDS NOW ───────────────────────────────
bottleneck: second-round slots not yet sent
next move:  reply with three available slots        ▶ play: email reply
── MATERIAL SIGNALS ──────────────────────────────────────
d+19  second-round invitation (← waiting on me, day 0)
d+17  recruiter phone screen completed
d+0   application submitted
── ROLE LENS ─ must prove · transferable proof · claim boundary ─
── PEOPLE ─ stakeholders and reply states ─────────────────
── EVIDENCE ─ each claim traced to its source ─────────────
```

The desk does not do the work. It holds one trusted state, names the bottleneck, routes the single next move to the right play — a reply, an outreach, interview prep — and takes the result back. Submission sits in the **middle** of that timeline on purpose: it is the point where the market starts answering, so tracking continues through replies, silence, and interviews.

## The four design rules

1. **Qualification before campaign.** No pursuit record, no work: about 2% of screened signals become campaigns ([exact figures, dated](evidence-ledger.md)). Attention is the scarcest resource in the pipeline.
2. **Submission is the midpoint, not the end.** The record keeps collecting signals after the send.
3. **One bottleneck, one next move.** Every campaign view resolves to a single highest-value action with a named play — never a task list.
4. **A pattern needs a denominator to change a rule.** One outcome is a data point; only repeating, comparable patterns get promoted into targeting or follow-up rules.

## The plays the desks route to

The workbenches decide; versioned skills execute. Each skill packages one recurring decision — the same idea as a team playbook entry. Four are published in this repo as re-authored exhibits:

| Skill | The decision it packages | Fires when |
|---|---|---|
| [jd-loop-routing](../skills/jd-loop-routing/SKILL.md) | which reader pool a job post actually buys from, before any resume work | a new pursuit needs its strategy brief |
| [resume-tailor](../skills/resume-tailor/EXCERPT.md) | how true evidence is re-ordered for one hiring manager's 30-second read | a campaign reaches the positioning stage |
| [marketing-reframe](../skills/marketing-reframe/SKILL.md) | which bounded marketing capability a real workflow can honestly claim | evidence needs translation before a public surface |
| [systemize-learnings](../skills/systemize-learnings/SKILL.md) | which of this cycle's corrections deserve to become standing rules | a campaign closes or a pattern repeats |

**Boundary.** Personal-scale, read-only readouts over one person's live search — not an enterprise CRM, not autonomous agents, and not a claim of production campaign ownership. When a figure here disagrees with the ledger, [the ledger wins](evidence-ledger.md).
