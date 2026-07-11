# The Loop — how market response changes the next decision

> **Public edition.** This is the Candidate GTM system's learning engine. Every skill in `skills/` is an output of this loop; every guardrail in `examples/failure-guardrail-log.md` is one iteration of market or operating feedback becoming a better next decision.

```text
        ┌──────────────────────────────────────────────────────┐
        │                                                      │
   DEFINE ──────► EVALUATE ──────► CODIFY ──────► TIGHTEN ─────┘
        │                                            │
        └────────────────── REUSE ◄──────────────────┘
```

**Define.** Notice a market judgment that keeps recurring — "is this opportunity worth the attention?", "who actually makes this decision?", "which proof gives this reader a reason to continue?" — and write down what it reads, what it decides, and what *done* means. An undefined judgment cannot be measured or improved; it can only be re-improvised.

**Evaluate.** Run the judgment on real cases, with the human making or reviewing every call. This is where criteria stop being hypothetical: live opportunities, stakeholder signals, replies, silence, and rejection expose which inputs matter, which shortcuts lie, and where the boundary between "AI assists" and "human decides" actually sits.

**Codify.** Write the stabilized judgment into a skill, in natural language: source order, decision criteria, evidence boundaries, review checkpoints, and the write-back path. That turns an implicit targeting, positioning, QA, or learning call into something another session can run and a human can inspect.

**Tighten.** When a run produces a miss, fix the decision rule, not just the output. A false market zero becomes source-health reporting; a wrong stakeholder becomes a source-classification rule; an overclaim becomes a release gate. The feedback changes the next cycle at the point that caused it.

**Reuse.** The next opportunity starts from the tightened rule — a higher baseline, not a fresh prompt. This is closed-loop learning without pretending every individual outcome has a known cause.

In Marketing / GTM language, the loop is simple:

```text
signal -> decision -> release -> observed response
  -> fact separated from hypothesis
  -> smallest justified change
  -> next signal cycle
```

## One pass through the loop, concretely

A real iteration, generalized:

1. **Define** — during stakeholder research, one recurring audience question: *which nearby titles carry first-hand role truth, and which are customers of the role's output?*
2. **Evaluate** — a run misfiled an account executive as a peer. The profile was fluent and adjacent, so the audience read and must-prove list drifted — plausibly, silently.
3. **Codify** — the stakeholder-research skill gained six source classes (peer / likely manager / routing owner / secondary / noise / unknown) and explicit membership tests.
4. **Tighten** — the miss became a named guardrail: *the consumer of a role's output is not the role* — so fluency no longer determines source weight.
5. **Reuse** — every later targeting and positioning decision inherits the source rule. One market-reading error becomes a durable audience-intelligence control.

## Why natural language

The skills are written in prose, not code, on purpose. The volatile part of this system is *judgment* — criteria, boundaries, exceptions — and judgment iterates fastest in the language the operator actually thinks in. Code guards the parts with zero tolerance for drift (sync between runtimes, state validation, format checks — see the constitution's mirror-sync rule); prose carries the parts that must stay readable, reviewable, and cheap to amend. Getting that split right *is* the method:

> deterministic guarantees in hooks and validators; intent and success criteria in prose.
