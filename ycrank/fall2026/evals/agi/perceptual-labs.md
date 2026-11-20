# Perceptual Labs -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path B — New Economies.** Perceptual Labs says its software will trace a model behavior to the circuits that produced it, edit the corresponding weights from a natural-language instruction, and log the change for audit. The investment hypothesis is that teams with editable weights could routinely fix narrow behaviors they currently leave alone because gradient-based post-training is too labor-intensive. The memo describes a third-party demonstration that improved a small model’s math performance through direct weight edits. That supports technical plausibility at seed. Whether Perceptual can make a previously skipped fix economical depends on total labor and cost per successful edit, including diagnosis, review, regression testing, retries, and rollback. (The Idea, Market & Traction, Key Risks)

Under the scenario of cheap, widely available frontier models, buyers might still pay for a validated editing and regression workflow that reliably preserves unrelated capabilities on their own models. The memo identifies a possible library of validated edits and tests, with no deployment evidence or buyer preference under parity. The current product’s observed launch signal is an early-access waitlist with no documented buyer commitment. The founders’ reported Bryel training engagements concern a separate offering. Miao’s interpretability and post-training experience and Li’s model training and product work support the team’s ability to run a trial. The memo gives no current-product pricing or delivery data for estimating contribution per accepted edit. (Defensibility, Market & Traction, Founders & Team, Key Facts)

### Countercase

Perceptual could make existing post-training work faster while leaving previously skipped fixes uneconomic. WeightBench found that frontier agents failed its model-patching tasks under the tested constraints, raising the possibility that retries and regression review consume the labor savings. Public techniques for mapping and editing internal representations also give teams with weight access a starting point for building a substitute. These findings leave both Path B gates unresolved because they establish neither Perceptual’s delivered cost nor buyer behavior against an equivalent workflow. The memo offers no independent evidence that Perceptual controls a scarce input or qualified capacity for Path A. (The Idea, Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 9/25 |
| Durable value capture | 6/25 |
| Customer demand | 5/20 |
| Team and execution | 7/15 |
| Scale economics | 4/15 |

**Total Score: 31/100** (Pass)

### Decisive diligence question

Will an independent buyer pay for a repeat batch of representative fixes it previously skipped, at a price that covers Perceptual’s full delivery cost, after comparing it with a credible alternative using equivalent models and weight access? Move to **Reach out** if the trial shows lower labor and full cost per accepted fix than gradient-based post-training, meets agreed regression limits, and earns the repeat order because Perceptual’s workflow delivers a measurable benefit the alternative cannot match. Move to **Pass** if a representative trial shows that full delivery costs still make the fixes uneconomic or that the buyer can switch under parity and retain the outcome.
