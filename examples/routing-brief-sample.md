# Sample routing brief — a real run on a fictional JD

> **Checkable artifact.** The job post below is **fictional** (it implicates no real company). The routing brief that follows is a genuine run of `skills/jd-loop-routing/SKILL.md` against it — every field from the contract, produced under the skill's rules, including the one that matters most: *no candidate evidence was read to produce this.* You can audit the skill by checking each field back against the post.

---

## The fictional job post

> **Marketing Analyst — Lifecycle & Retention**
> Mid-market B2B workflow-software company (~500 employees, product-led growth plus a sales-assisted motion). Remote-friendly, hybrid preferred. *(Fictional posting.)*
>
> The Lifecycle Marketing team owns how trial users become paying teams and how paying teams stay. We're hiring an analyst to help us see that journey clearly. You will: build and maintain funnel and cohort reporting for activation, conversion, and churn; partner with lifecycle marketers to size, target, and measure campaigns; translate findings into recommendations the team can act on next sprint; keep our campaign taxonomy and tracking definitions clean so numbers mean the same thing in every meeting; and present monthly retention readouts to marketing and product leads.
>
> You have: 1–3 years in an analytics, marketing, or operations role (internships count); working SQL; experience with a BI tool (we use Looker); clear written communication. Nice to have: lifecycle or CRM campaign exposure; comfort using AI tools in your analysis workflow.

---

## Routing brief

> Mode: role-only routing · Stakeholder calibration: fictional-run, JD-as-primary-truth · Candidate evidence: **not read**

### role_read

At first glance this role wants a trainable early-career analyst who makes the trial-to-paid-to-retained journey *measurable and explainable* for the lifecycle marketing team, so campaign decisions stop running on anecdote.

### role_loop

```text
activation / conversion / churn signals (product events, campaign results, CRM records)
  -> define & maintain cohort and funnel views; keep tracking definitions honest
  -> lifecycle marketers, marketing lead, product lead
  -> readouts, campaign sizing/measurement, next-sprint recommendations
  -> failure risk: numbers that don't reconcile between meetings; reporting that
     describes the funnel but never changes a campaign decision
```

### bottom_layer_capabilities

- **Structured signal interpretation**: messy product/campaign/CRM signals → separate real movement from noise and definition drift → for lifecycle marketers → cohort and funnel views they trust → *boundary: interpreting signals, not owning attribution modeling.*
- **Definition and taxonomy discipline**: campaign taxonomy, tracking definitions → keep one meaning per metric across teams → for every meeting that quotes a number → reconciled reporting → *boundary: stewardship of definitions, not data-platform ownership.*
- **Analysis-to-recommendation synthesis**: cohort findings → judge what is actionable *next sprint* vs. merely interesting → for marketing and product leads → readouts with a recommended action → *boundary: recommending, not deciding roadmap.*
- **Measurement scoping with partners**: a campaign idea → agree up front what success means and how it will be measured → with lifecycle marketers → sized targets and post-campaign measurement → *boundary: partnering on measurement, not owning campaign strategy.*
- **Assumption and validation discipline**: any surprising number → check the tracking before trusting the trend → for the whole reporting surface → numbers that survive being questioned in a readout.

### correct_pool

**Lifecycle / retention marketing analytics** — a marketing-analytics seat judged by whether reporting changes campaign decisions. Frontstage language should translate toward *funnel, cohort, campaign measurement, readout, recommendation*.

### resume_frontstage_direction

- Land first on **turning messy behavioral/campaign signals into reporting a team acts on** — object: funnel/cohort views; output: readouts with recommendations.
- Second: **definition hygiene** — evidence of keeping metrics meaning the same thing across stakeholders.
- Do **not** lead with data-engineering surface (pipelines, warehouses, modeling) — bright, but routes to the wrong pool (see below).
- Do **not** lead with AI tooling; it enters as a support method under analysis quality (see `role_ai_relevance`).

### wrong_pool

- **Generic data analyst / BI developer** — reads as tool operator; this team is buying campaign-decision support, not dashboard throughput.
- **Data engineer-lite** — SQL + tooling emphasis without the "so what for the campaign" layer; the misread costs the interview because the HM can't picture the candidate in the monthly readout.
- **Campaign manager** — owning campaign strategy is not this seat; overclaiming it collides with the actual lifecycle marketers.

### must_prove

- Has turned messy multi-source signals into a reporting view a team actually used — traceable to `role_loop`'s cohort/funnel work.
- Can write the sentence *after* the chart: a recommendation someone could act on next sprint.
- Has kept definitions honest under pressure (a metric contested, a tracking break found, a number reconciled).
- Working SQL + one BI tool at "can be productive under supervision" depth — no more is asked; claiming more invites the wrong interview.

### cannot_borrow

- Attribution-model ownership; marketing-mix or incrementality expertise.
- Production ownership of the CRM or marketing-automation platform.
- Churn-prediction / ML modeling ownership.
- Campaign P&L or strategy ownership.
- Seniority: this is an analyst-I seat; "led/owned the retention strategy" phrasing breaks the ceiling.

### front_door_nouns

lifecycle, retention, activation, churn cohorts, funnel reporting, campaign measurement, campaign taxonomy, tracking definitions, readout, Looker, SQL, product-led growth.

### high_risk_nouns

**attribution**, **experimentation program / A-B testing platform**, **churn model**, **CDP / data pipeline**, **campaign ownership** — all real in this role's world; none may be written as prior ownership without direct evidence. Safe usage is JD-context or downgraded translation ("supported measurement of…", "reported against…").

### people_title_cluster

(Fictional-run illustration.) Expected peers: Lifecycle Marketing Manager, Marketing Operations Manager, Senior Marketing Analyst; likely manager: Director of Lifecycle or Head of Growth Marketing; routing owner: talent partner. A senior *product* analyst nearby would corroborate the analytics org but is **not** an exact-lane peer — corroboration only, per the calibration-gate rule.

### known_unknowns

- Whether reporting sits in Looker only, or also in the CRM's native reporting — changes the tool story's weight.
- Ratio of maintenance reporting vs. new analysis — changes how much "build" language the page can carry.
- Who actually consumes the monthly readout (marketing only, or product jointly) — changes the beneficiary named in the summary.
- Actual hiring manager unconfirmed.

### role_ai_relevance

**Baseline/support.** Front door: one "nice to have" line — comfort with AI tools in the analysis workflow — an appetite signal, not a requirement. Baseline: the work is repeated interpretation of messy signals under definition discipline; AI-assisted analysis with source grounding and validation checks fits naturally *as method*. Wrong-pool risk: "built AI agents / automation" phrasing would route toward the data-engineering misread — the exact wrong pool above. Translation target: AI shows up as **steadier campaign reporting and faster, source-grounded analysis with human review before anything ships** — a work-quality claim, never an identity claim.
