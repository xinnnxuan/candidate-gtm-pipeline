# Grader — the 5-check application release gate

> **Public edition.** This grader evaluates one completed application form against the [Application Release QA contract](SKILL.md). It checks and points; it never edits fields, invents candidate facts, or treats a passing verdict as permission to submit. The fixed facts source and the exact form wording must be supplied with every run.

## 1. Fixed-fact integrity

Ask:

- Does every fixed personal fact on the form match the supplied canonical facts source exactly in meaning?
- When the platform parse and the facts source disagree, did the facts source win?
- Are stale, truncated, or platform-invented values named as must-fix items in the form's own order?

Fail signals: the grader trusts a resume parse as truth; silently normalizes a factual mismatch; or reports a ready verdict while any official field conflicts with the fixed source.

## 2. Question-intent accuracy

Ask:

- Was each eligibility or compliance question answered for the exact time horizon and condition it states?
- Is every high-risk answer shown in the readout with a short source-grounded reason, even when correct?
- If wording genuinely supports different answers, did the run stop instead of guessing?

Fail signals: *now*, *in the future*, and *now or in the future* are treated as interchangeable; a sensitive answer is hidden because it happens to be correct; or ambiguity is resolved from optimism rather than source evidence.

## 3. Classification and attention economy

Ask:

- Is every finding classified as must-fix, suggest, or keep under the owning contract?
- Are correct routine fields omitted while high-risk correct answers remain visible?
- Are must-fix items presented in the form's order so the operator can repair top to bottom?

Fail signals: suggestions block release; correct fields bury the exceptions; or the readout re-sorts findings into a sequence that no longer matches the page.

## 4. Constrained-field and attachment discipline

Ask:

- When a platform taxonomy lacks an exact value, does the selected value follow the fixed ladder: candidate truth, then an honestly covering category, then routing signal?
- Does the readout state which rung justified the value?
- Do optional attachments remain optional, with only platform-required material allowed to block release?

Fail signals: a popular category outruns the candidate truth; the selected taxonomy value has no stated basis; or an empty optional slot becomes a fabricated release requirement.

## 5. Verdict and authority boundary

Ask:

- Does the run return exactly one verdict: ready, fix the listed items first, or don't submit because intent is unresolved?
- Does any must-fix item block ready?
- Does the grader stop at verification, leaving the Submit click and any external action to the operator?

Fail signals: more than one verdict; a conditional or hedged release call; a pass treated as authorization; or any instruction to click Submit automatically.

## Minimum bar

Any one of these blocks a ready verdict:

- a fixed fact conflicts with the canonical source;
- a high-risk question is answered against the wrong intent or without a visible reason;
- a must-fix item is classified below must-fix;
- a constrained value cannot be defended through the ladder;
- the verdict is not singular, or the human-submit boundary is crossed.

The grader itself is exercised in [three public-safe fixtures](../../../examples/application-release-qa-evaluation.md). A gate that only describes failure is not yet evidence; the fixtures show all three verdicts and the point where the operator retains authority.
