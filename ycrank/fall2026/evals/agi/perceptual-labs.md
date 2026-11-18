# Perceptual Labs -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements.** The potential bottleneck is making a targeted, auditable change to a production model while preserving its unrelated capabilities. Perceptual Labs proposes tracing behavior to model circuits and editing the relevant weights. The investment case is that AI labs and enterprises with editable weights would pay for reliable edits if cheaper intelligence made it easier to propose changes while verifying and deploying them remained difficult. The memo reports an external proof of concept that improved math performance on a small model through direct weight edits. Perceptual’s own performance on representative customer workloads remains unverified. (The Idea, Market & Traction, Key Risks)

At seed, Miao’s interpretability and post-training work and Li’s model-training and product experience support the team’s ability to test the mechanism. The current product’s waitlist establishes launch activity, with buyer commitment still unknown. The founders’ reported Bryel Foundry engagements concern custom training, a separate workflow. (Founders & Team, Market & Traction, Key Risks)

The scale scenario assumes customers can grant weight access and need recurring edits. Revenue would depend on eligible deployments, paid edits per deployment, and price. Contribution would depend on compute, human review, regression testing, retries, and rollback per accepted edit. The memo provides a broader interpretability market estimate and leaves these inputs unknown. Path B remains unproven because the memo identifies neither a previously uneconomic transaction opened by lower delivery labor nor a reason buyers would keep paying Perceptual under model parity. (The Idea, Key Facts, Key Risks)

### Countercase

WeightBench found that frontier agents failed its language-model patching tasks under the benchmark’s constraints. If that difficulty carries over to customer workloads, regression testing and retries could erase the savings over post-training. Even if the edits work, Goodfire’s published methods give well-funded labs and competitors with weight access a starting point for building overlapping capabilities. An edit and regression library could become defensible, but the memo offers it as a hypothesis. The evidence leaves production feasibility and control unresolved. That keeps Path A below the outreach gate while leaving a feasible seed-stage test. (Key Risks, Defensibility)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 9/25 |
| Durable value capture | 5/25 |
| Customer demand | 5/20 |
| Team and execution | 8/15 |
| Scale economics | 4/15 |

**Total Score: 31/100** (Pass)

### Decisive diligence question

Will an independent buyer with editable production weights commit to a paid deployment after a head-to-head trial shows Perceptual can repeatedly deliver auditable edits at lower total cost per accepted change than the buyer’s post-training workflow and its best alternative using comparably capable models, while meeting agreed regression limits? A clear win and paid commitment would support Reach out if the updated score and confidence clear the outreach gate. A representative trial showing unacceptable regressions or an equivalent readily available substitute would support Pass. (The Idea, Defensibility, Key Risks)
