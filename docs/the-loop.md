# The Loop — how judgment becomes system

> **Public edition.** This is the mechanism the whole repository exists to demonstrate. Every skill in `skills/` is an output of this loop; every guardrail in `examples/failure-guardrail-log.md` is one iteration of it.

```text
        ┌──────────────────────────────────────────────────────┐
        │                                                      │
   DEFINE ──────► EVALUATE ──────► CODIFY ──────► TIGHTEN ─────┘
        │                                            │
        └────────────────── REUSE ◄──────────────────┘
```

**Define.** Notice a judgment that keeps recurring — "is this role worth deep work?", "who will actually read this page?" — and write down what it reads, what it decides, and what *done* means. Most AI workflows skip this step and pay for it forever: an undefined judgment can't be delegated, only re-improvised.

**Evaluate.** Run the judgment on real cases, with the human making or reviewing every call. This is where the criteria stop being hypothetical: real cases surface which inputs matter, which shortcuts lie, and where the boundary between "AI decides" and "human decides" actually sits.

**Codify.** Write the stabilized judgment into a skill, in natural language: source order (what it may read, in what order), decision criteria, claim boundaries, review checkpoints, and the write-back path. None of the skills in this repository were programmed — they were *written*, the way you'd brief a careful new teammate, then versioned like code.

**Tighten.** When a run produces a miss, fix the rule, not just the output. The miss becomes a named guardrail inside the skill — permanently. This is the step that separates a governed workflow from prompt-and-pray: the system's error rate falls monotonically because errors convert into constraints.

**Reuse.** The next run starts from the tightened rule — a higher baseline, not a fresh prompt. Judgment written this way compounds; judgment kept in one's head just repeats.

## One pass through the loop, concretely

A real iteration, generalized:

1. **Define** — during stakeholder research for sales-adjacent roles, one recurring judgment: *which nearby titles count as peer truth about the role?*
2. **Evaluate** — a run misfiled an account executive as a peer. The AE profile was fluent and adjacent, so the pool calibration drifted — plausibly, silently.
3. **Codify** — the stakeholder-research skill gained a classification rule with six buckets (peer / likely manager / routing owner / secondary / noise / unknown) and explicit membership tests.
4. **Tighten** — the miss became a named guardrail in the skill: *an account executive is a consumer of this role's output, not a peer* — so the same fluent-but-wrong read can never recur quietly.
5. **Reuse** — every later calibration inherits the rule. The judgment was paid for once.

## Why natural language

The skills are written in prose, not code, on purpose. The volatile part of this system is *judgment* — criteria, boundaries, exceptions — and judgment iterates fastest in the language the operator actually thinks in. Code guards the parts with zero tolerance for drift (sync between runtimes, state validation, format checks — see the constitution's mirror-sync rule); prose carries the parts that must stay readable, reviewable, and cheap to amend. Getting that split right *is* the method:

> deterministic guarantees in hooks and validators; intent and success criteria in prose.
