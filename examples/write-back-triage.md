# Sample write-back triage — a close-out, reconstructed

> **Checkable artifact.** A worked run of `skills/systemize-learnings/SKILL.md` at the close of a reconstructed, generalized market-calibration session. Four candidate learnings enter the four-question framework; one recurring signal earns a write-back, one parks as a plan, and two are rejected as premature or harmful. This is the closed-loop discipline behind the public claim that results change the next cycle — without turning every observation into a targeting rule.
>
> Note the scoreboard: **one of four survived.** That ratio is the skill working, not failing — the default is DON'T write.

---

## Session context

A batch routing session: stakeholder calibration and routing briefs for several roles. Recurring friction — at two companies, research found *adjacent* org signal (an analytics org, leadership profiles) but no exact-lane peer, and the session had to reason out a fallback from first principles, twice, inconsistently.

## Candidate learnings

- **A.** When calibration finds adjacent-org signal but no exact-lane peer, there is no written fallback — each session re-derives one.
- **B.** Researching several roles at the *same company* re-does org research; a shared per-company cache might help batch sessions.
- **C.** The session briefly opened the resume mid-routing "to check something" before self-correcting.
- **D.** A list of ~12 title keywords that seemed to predict pool membership this session; proposal to add it to the routing skill as a lookup table.

## The four questions, applied

| # | Recurs across tasks? | Already covered? | Costly if not written? | Minimal edit makes system better? | Verdict |
|---|---|---|---|---|---|
| A | Yes — third occurrence across sessions | No — the gate defines *blocked/incomplete*, not what to do with partial signal | Yes — inconsistent fallbacks corrupt contract quality silently | Yes — one paragraph inside the existing gate; replaces improvisation | **Write back** |
| B | Probably — but only two data points | No | Moderate — rework, not corruption | Unclear — cache invalidation, staleness, cross-role bleed all undesigned | **Park as plan** |
| C | It *could* recur — | **Yes** — the skill already forbids exactly this | — | A second "really don't" line makes the system longer, not safer | **Reject** (execution miss, not a source gap; noted in session log) |
| D | The *keywords* won't — they overfit this session's lanes | Partly — pool tests already exist at the work-object level | No — the AI reads pools from work objects naturally | **No** — a lookup table invites title-matching, the exact failure the skill exists to prevent | **Reject** |

## Output (per the skill's template)

**Verdict: write back 1 item (A); park 1 (B); reject 2 (C, D).**

### Worth writing back

| learning | evidence | landing spot | minimal edit | acceptance check |
|---|---|---|---|---|
| Adjacent-org-without-peer needs a written fallback | 3 sessions re-derived it; 2 produced different answers | routing skill → Calibration gate | absorb into the existing `incomplete` bullet — not a new section | next batch session handles the case without re-deriving; contract marks corroboration vs. peer truth explicitly |

### Absorptive rewrite draft

- **Before:** "Blocked / incomplete / failed → never label the output a calibrated contract. Only on explicit request produce a best-available fallback from the JD alone, marked as such."
- **After:** the same rule, plus: "A common `incomplete` case: research surfaced an **adjacent org** … treat the JD as the primary role truth and use the adjacent org **as corroboration only** — never upgraded to peer truth or a confirmed reporting line. Record the missing peer under `known_unknowns`. … The test is 'is there enough role truth to support the first cut,' not 'did a file get produced.'"
- **Check:** Before's intent (no fake calibration labels) survives untouched; the new text absorbs the fallback judgment the sessions kept re-inventing; it *replaces* improvisation rather than stacking a rule — and it's placed inside the gate that fires at exactly the right moment.

### Not worth writing back

| learning | reason |
|---|---|
| C — resume opened mid-routing | Already covered by the skill's hardest rule; the failure was execution. Writing it again would train the system to say everything twice. |
| D — title-keyword lookup table | Overfit, and structurally counterproductive: it would pull routing back toward title matching. The work-object tests already own this judgment. |

### Needs operator confirmation

- I recommend the single edit to the routing skill's Calibration gate, as drafted above.
- On "yes", I will touch only: the routing skill file (then mirror-sync, then a narrowly-scoped commit).

*(B goes to the plans directory with its two data points and open design questions — it re-enters triage when it matures or recurs.)*
