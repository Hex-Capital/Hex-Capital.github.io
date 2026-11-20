# Perceptual Labs -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

Perceptual has weak support for a building-blocks path in post-training for labs and enterprises with editable model weights. The company proposes tracing a specific unwanted behavior to the circuits that produce it, editing the relevant weights, and logging the change for audit. It describes gradient-based post-training as slow, costly, and imprecise. The memo reports that an independent experiment improved a small model’s math performance through direct edits. That establishes narrow technical plausibility. The seed-stage assumption is that more model deployments will create more demand for targeted patches, and that making those patches without regressions will remain difficult. The memo provides no buyer evidence that patching delays constrain deployment or that existing methods cannot absorb demand. (The Idea, Market & Traction, Key Risks)

The industry-enabled path earns zero. Lowering the cost of a patch could improve the existing post-training workflow. The memo identifies no buyer, use, or patching cadence that was previously uneconomic and would become viable with the proposed product. (The Idea, Market & Traction)

The early-access waitlist establishes a launch, with buyer trials and commitments still unverified. The founders’ reported Bryel training engagements and relevant research and product experience support execution credit for adjacent work. A library of validated edits and regression tests could support value capture, but the memo records no deployment evidence for it and describes public methods with overlapping capabilities. The memo also provides no pricing or delivery-cost data to assess contribution per successful patch. (Market & Traction, Founders & Team, Defensibility, Key Facts)

### Countercase

Regression testing could erase the savings from skipping gradient training. The memo reports that frontier agents failed WeightBench’s language-model patching tasks under its test constraints. A buyer may still need substantial engineering time to verify that each edit preserves unrelated capabilities. Weight access further narrows the eligible workload. This leaves the scarce-input mechanism plausible at seed, with enough uncertainty about reliable delivery to warrant Watch. (Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 4/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 5/20 |
| Customer demand | 4/15 |
| Team and execution | 6/10 |
| Scale economics | 2/5 |

**Total Score: 21/150** (Pass)

### Decisive diligence question

Can Perceptual clear a buyer’s documented post-training bottleneck on a representative model the buyer can edit? A side-by-side pilot against the buyer’s current workflow would move the action to Reach out if Perceptual fixed the target behavior, passed the buyer’s regression suite, and materially reduced time and fully loaded cost per successful patch, including validation and failed attempts. A representative pilot showing no meaningful advantage would move the action to Pass. (The Idea, Key Risks)
