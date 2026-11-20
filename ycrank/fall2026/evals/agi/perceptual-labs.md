# Perceptual Labs -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

New Economies is the strongest path. Perceptual Labs proposes using natural-language instructions to make targeted weight edits and record them for audit. The company describes gradient-based post-training as slow, costly, and imprecise. The investment hypothesis is that a team with editable weights could routinely fix narrow model behaviors it currently leaves unaddressed because a post-training run takes too much engineering time and compute. The memo gives no baseline cost or measured savings per successful fix. A small-model experiment improved math performance through direct edits, supporting technical plausibility in a narrow setting. (The Idea, Market & Traction)

The current launch shows an early-access waitlist. The founders reported enterprise training work through Bryel Foundry, and their backgrounds cover interpretability, post-training, and model product development. That supports seed-stage execution credit, while demand for weight editing remains unverified. A successful production edit is the unit to measure. Any savings must survive the cost of diagnosis, regression testing, retries, and rollback. An audit trail could give buyers a reason to pay under model parity if it measurably reduces their validation burden. The memo provides no buyer preference or deployment economics to establish that advantage. (Market & Traction, Founders & Team, The Idea, Key Risks)

### Countercase

Weight editing could become an incremental improvement to existing post-training workflows. WeightBench found that frontier agents failed its patching tasks under the benchmark’s constraints, and production edits must preserve unrelated capabilities across architectures. Teams with editable weights have public methods for overlapping capabilities, while teams without weight access are outside the direct-editing market. The memo establishes no company-controlled scarce complement. These findings leave reliability, market opening, and value capture under model parity unproven. They do not establish ready substitution or rule out a production use that clears the New Economies gates. (Key Risks, Defensibility)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 11/25 |
| Durable value capture | 6/25 |
| Customer demand | 5/20 |
| Team and execution | 9/15 |
| Scale economics | 4/15 |

**Total Score: 35/100** (Pass)

### Decisive diligence question

Can an independent buyer with editable weights complete a paid production pilot and renew for a recurring class of fixes it previously skipped because gradient-based post-training was too costly? Move to Reach out if the pilot demonstrates materially lower all-in cost per fix at equivalent regression standards and the buyer renews after comparing Perceptual with a credible alternative that can achieve the same edit quality. Stay on Watch if either condition remains unresolved. If the pilot directly shows that the cost reduction opens no new use or that buyers readily substitute at parity, close this path and move to Pass absent an independently supported alternative.
