# RightNow -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

The strongest path is **scarce complements**. RightNow could make rented GPU capacity more productive by serving a given open-weight model with less GPU time while meeting the same quality and latency targets. The memo reports that open-weight models crossed half of Vercel AI Gateway’s token traffic, a demand signal from one gateway. RightNow documents a workflow for profiling bottlenecks and benchmarking replacement kernels, and says its hosted stack tunes kernels, batching, and caching together. That supports a specific mechanism. Its performance edge on representative customer workloads and its control over that edge remain unproven. (The Idea; Defensibility; Market & Traction; Key Risks)

Both founders co-authored AutoKernel, and the two-person team shipped hosted inference, migrated the service with key and balance continuity, and added batch processing. That shows relevant seed-stage execution. RightNow reports kernel-tool use at several prominent companies. Paid hosted usage, repeat orders, and realized revenue remain unverified. (Founders & Team; Market & Traction; Key Risks; Key Facts)

The expansion unit is a workload served repeatedly on shared GPUs. As an illustrative scenario, one million input tokens and one million output tokens on Nemotron 3.5 Lightning yield $0.20 at list price or $0.10 at the stated batch rate. Contribution depends on GPU rental cost per completed request at actual utilization, including peak headroom, plus operating and support costs. Filling idle capacity with batch work could improve utilization. The memo leaves contribution and repeat workload volume open. (The Idea; Key Risks; Key Facts)

### Countercase

Together already uses automated inference tuning, DeepInfra offers dedicated serving, and RightNow has open-sourced part of its optimization workflow while relying on rented GPUs. A buyer may be able to get comparable performance and pricing from another host. The memo establishes competitive overlap, while workload-level parity and easy switching remain untested. The scarce-complement path stays open on Watch. The New Economies path also lacks evidence of a previously excluded use becoming viable through lower labor cost per successful outcome, or of buyer preference under model parity. (The Idea; Defensibility; Market & Traction; Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 11/25 |
| Durable value capture | 8/25 |
| Customer demand | 5/20 |
| Team and execution | 10/15 |
| Scale economics | 6/15 |

**Total Score: 40/100** (Pass)

### Decisive diligence question

Do independent buyers repeatedly pay RightNow for production workloads because it delivers a cost or latency advantage that comparable hosts cannot match? Move to Reach out if matched tests on the same model and traffic show a repeatable edge at equivalent quality and peak-load reliability, buyers renew at unsubsidized prices, and measured serving costs show positive contribution from an optimization capability RightNow controls. Move to Pass if alternatives match the economics and performance and buyers switch readily.
