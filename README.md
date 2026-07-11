# Candidate Go-to-Market — governed from signal to learning

> ### Read the market. Qualify the opportunity. Position the proof. Learn from the response.

**Johanna Fan · Marketing / GTM / Customer Signal Analytics**

**I turned my own job search into a live Candidate Go-to-Market system: reading market signals, qualifying opportunities, mapping the people behind the decision, positioning defensible value, tracking conversion states, and learning from non-conversion.**

AI runs the volume and supports research, drafting, and QA. I own the criteria, claims, release decisions, and write-back. The result is not an AI job-search bot; it is a running Candidate Go-to-Market case whose operating method can be inspected field by field.

**Don't take the Marketing framing on faith — trace it.** Start with [the public Marketing-reframe run](examples/marketing-reframe-run.md), which maps each live mechanism to a Marketing / GTM capability and its evidence boundary. Then audit [a routing brief produced from a fictional job post](examples/routing-brief-sample.md) against the [skill contract that generated it](skills/jd-loop-routing/SKILL.md).

![Market Release Workflow — each application runs like a candidate market release, every gate a human judgment call](assets/market-release-workflow.png)

*The operating picture: each application treated as a market release — qualified, positioned, packaged, routed, released, refined through market response. (This visual shows an earlier seven-card layout; the current system runs six gates — outreach and follow-up merged into one.)*

*The production system runs in Traditional Chinese; the exhibits here are translated adaptations, disclosed per file.*

---

## §1 · The Candidate GTM loop

The customer journey here is my own hiring journey:

```text
market signals -> qualification -> stakeholder / reader diagnosis
  -> positioning and proof -> release across application / outreach touchpoints
  -> response, silence, rejection -> next-cycle targeting, message, proof, rule
```

The mechanism that makes that journey learn is:

**Define → Evaluate → Codify → Tighten → Reuse.**

Notice a recurring market judgment; run it on real cases with a human making the calls; write the stabilized judgment into a natural-language skill; when a response exposes a miss, fix the *rule*, not just the output; start the next run from the tightened rule. This is the system's test-and-learn layer: outcomes change the next targeting, positioning, proof, or gate instead of disappearing into a dashboard.

![The system learns by writing decisions back](assets/write-back-loop.png)

Full walk-through with a real iteration: [docs/the-loop.md](docs/the-loop.md)

---

## §2 · What this is — and is not

**This is:**

- a live **Candidate Go-to-Market case**: the job market is the market, hiring teams are the decision audience, resumes and outreach are touchpoints, interviews are the next conversion event, and every response can change the next cycle;
- a demonstration of Marketing / GTM analytics judgment applied to an unusual but real dataset — market sensing, qualification, stakeholder intelligence, positioning, conversion QA, CRM state discipline, and loss learning;
- a governed AI operating method underneath that motion — dozens of versioned judgment skills, a constitution, field contracts, review gates, and machine-enforced consistency;
- checkable: the exhibits are re-authored public editions of working documents, and the [examples](examples/) let you audit each Marketing claim against an artifact.

**This is not:**

- proof that I have owned a production campaign, enterprise attribution model, revenue target, lifecycle program, or someone else's CRM — the public claim is the transferable judgment, with its ownership boundary attached;
- a framework or template to install — the skills encode *my* judgment; the transferable part is the method for encoding yours ([what that transfer looks like on a team](docs/from-one-operator-to-a-team.md));
- a prompt library — the value is in field contracts, boundaries, and gates, not incantations;
- an autonomous job-applying bot — nothing is sent or claimed without a human decision, and write-backs run only as deterministic, pre-authorized operations under review gates (the exact split of calls: [§6](#6--what-im-not-claiming)).

**"Isn't this over-engineered for a job search?"** The search is the live market case. It has scarce attention, noisy demand signals, multiple decision-makers, competing positioning, measurable next events, and losses that can teach the wrong lesson if the data is dirty. Those are the same conditions that make Marketing / GTM analytics worth governing.

---

## §3 · Architecture — GTM motion first, AI method underneath

```text
MARKET       job / company / team signals
QUALIFY      worth the attention, correct segment, correct reader
POSITION     true experience -> buyer-relevant value and proof
RELEASE      application, profile, outreach, interview touchpoints
LEARN        state, response, silence, rejection -> next-cycle decision
```

The governed-AI layer makes that motion repeatable without outsourcing the calls:

```text
constitution/          one governance file, loaded into every session
   └─ skills/          natural-language judgment modules (the volatile part)
        └─ commands/   thin entry points that route into skills — one authority, one place
             └─ write-back
                       every artifact lands with tracker state, same turn
```

Four design decisions carry the system:

1. **Market before message.** Opportunity qualification and reader diagnosis happen before the resume opens, so positioning starts from demand instead of forcing every bright story into every market.
2. **One truth across touchpoints.** Application, outreach, response, and next-action states live in a canonical tracker; the resume, LinkedIn surface, and follow-up queue do not get to invent separate realities.
3. **Every claim carries its measurement boundary.** Role nouns, AI claims, counts, and inferred loss reasons state what the evidence supports and what it cannot prove — the same discipline that keeps an analytics readout from implying causality it does not own.
4. **Outcomes write back.** Commands route, skills own judgment, and response signals return to the rule or source that should change. The loop optimizes the next decision, not the appearance of activity.

Underneath those business decisions, judgment lives in prose and zero-exception guarantees live in hooks and validators. Skill sources are authored once, runtime mirrors are generated, and a pre-commit hook blocks drift. The system survives its AI vendor because the operating judgment is the asset.

![Context, Knowledge, Tools — clear context in, reusable judgment applied, governed action out](assets/context-knowledge-tools.png)

---

## §4 · The exhibits

Six working documents, re-authored as public editions, chosen because each makes one Marketing / GTM judgment auditable:

| # | Exhibit | The Marketing / GTM judgment it makes checkable |
|---|---|---|
| 1 | [`skills/jd-loop-routing/SKILL.md`](skills/jd-loop-routing/SKILL.md) | **Qualification before positioning.** Read the work, decision audience, correct segment, must-prove, and claim ceiling before candidate evidence can bias the market read. |
| 2a | [`skills/systemize-learnings/SKILL.md`](skills/systemize-learnings/SKILL.md) | **Closed-loop learning without overfitting.** A four-question triage separates repeatable signal from one-case noise before an outcome changes the operating rule. |
| 2b | [`skills/systemize-learnings/retrospective.command.md`](skills/systemize-learnings/retrospective.command.md) | **A governed learning entry point.** The command routes the result; the skill owns the decision framework, so the feedback loop has one definition. |
| 3a | [`skills/resume-tailor/EXCERPT.md`](skills/resume-tailor/EXCERPT.md) | **Positioning and value translation.** True evidence is translated into the reader's work objects and next-step reason without borrowing ownership. |
| 3b | [`skills/resume-tailor/graders.md`](skills/resume-tailor/graders.md) | **Conversion QA.** A 7-check release gate asks whether the right reader sees relevant, defensible value — and points back to the owning rule when they do not. |
| 4 | [`skills/marketing-reframe/SKILL.md`](skills/marketing-reframe/SKILL.md) | **Capability translation with evidence levels.** A true mechanism earns Marketing language only after buyer, judgment, next action, and claim boundary are explicit. |

Supporting docs: [the pipeline](docs/pipeline.md) · [the loop](docs/the-loop.md) · [from one operator to a team](docs/from-one-operator-to-a-team.md) (the reader's next question — *so what would you do on my team?* — answered in the repo's own claim register) · [evidence ledger](docs/evidence-ledger.md) (dated snapshots, so numbers can't drift silently) · [how this repo was sanitized](docs/how-this-repo-was-sanitized.md) (a meta-exhibit: the publishing process run under the same governance).

Checkable artifacts: [Candidate GTM → Marketing capability map](examples/marketing-reframe-run.md) · [routing brief on a fictional JD](examples/routing-brief-sample.md) · [a resume line failing the exit gate, and the fix](examples/resume-draft-fail-and-fix.md) · [failure → guardrail log](examples/failure-guardrail-log.md) · [write-back triage run](examples/write-back-triage.md) · [an annotated lifecycle session](examples/annotated-session.md).

The six exhibits are a curated sample, not the whole team. The full working roster — real module names, stage by stage, each tied to the judgment it owns — is mapped in [the pipeline, staffed](docs/pipeline.md#the-pipeline-staffed).

---

## §5 · Market feedback that became guardrails

The system makes repeatable errors harder to repeat silently by converting confirmed misses into constraints. Three receipts, in full in the [failure → guardrail log](examples/failure-guardrail-log.md):

- **The market that looked cold** — failed source queries rendered as real zeros; now every market readout carries its own collection-health statistics. That is tracking integrity before segmentation or budget decisions.
- **The fluent adjacent profile** — an internal customer was misfiled as peer truth; now stakeholder sources are classified before their words influence audience or positioning decisions.
- **The sentence that interviewed better than it defended** — a borrowed platform noun passed as fluent positioning; now claim ceilings are written before message development and enforced at release QA.

Not claimed: that the operator stopped making mistakes. Claimed: **a confirmed miss leaves a control where the same failure would recur.**

---

## §6 · What I'm NOT claiming

- **Not a software-engineering portfolio.** The skills are written in natural language. The engineering here is *decision* engineering; the code parts (hooks, validators, sync) are deliberately boring.
- **Not automation of outreach.** Outreach is manual and research-assisted; the system governs *whether* and *what* — it never sends. No message leaves without a human writing the final call.
- **Not autonomous claiming.** Three calls stay human: what I claim, what I send, and what counts as true state. AI does execute deterministic, pre-authorized write-backs under review gates — but write authority, conflict handling, and every outbound move remain the operator's.
- **Not platform ownership.** Exposure to CRM and marketing tooling in this system is workflow-level; I claim no production administration of anyone's stack.
- **Not enterprise Marketing ownership.** This case proves upstream market judgment, qualification, positioning, measurement discipline, and learning-loop design. It does not claim campaign ownership, formal attribution, revenue ownership, or production lifecycle administration.
- **Not a finished victory lap.** The system's own market test is running now. What's exhibited is the method's discipline, not a triumphant outcome — and that honesty is itself the discipline on display.

---

## §7 · Results, with boundaries

| Figure | What it means | Its boundary |
|---|---|---|
| **20K+** | market signals screened through qualification rules | AI did the volume under a rubric I defined and reviewed. I did not read twenty thousand job descriptions, and a screened signal is not buyer intent. |
| **6** | repeatable Candidate GTM gates from qualification to learning write-back | Gates are human judgment calls the system *routes*, not funnel stages it automates away. |
| **1** | closed loop connecting market response, positioning, proof, and next-cycle learning | The loop is the product; applications and outreach are its live market runs. |
| **dozens, deliberately pruned** | versioned judgment skills + command entry points under governance | Exact dated counts live in the [evidence ledger](docs/evidence-ledger.md) — they move by design: skills get retired when a sharper one absorbs them, and more isn't better. |
| **months of daily iteration** | how the guardrails accumulated | Deliberately not a commit count: volume of iteration isn't quality of iteration. The quality mechanism is the [guardrail log](examples/failure-guardrail-log.md). |

![Quality over quantity — every application runs as a signal cycle](assets/quality-over-quantity-roadmap.png)

---

## §8 · Three surfaces

| Surface | What it's for | Where |
|---|---|---|
| **Meet the candidate** | positioning, proof strip, the working narrative | [johannafan.com](https://johannafan.com/) |
| **Read the system** | this repository — the method, opened up | you are here |
| **See it run** | the live pipeline this repo describes | [johannafan.com/#overview](https://johannafan.com/#overview) |

---

**Johanna Fan** · Marketing / GTM / Customer Signal Analytics
[LinkedIn](https://www.linkedin.com/in/xxu09) · [GitHub](https://github.com/xinnnxuan)

License: [CC BY-NC 4.0](LICENSE.md) — read, cite, adapt with attribution; not for commercial use.
