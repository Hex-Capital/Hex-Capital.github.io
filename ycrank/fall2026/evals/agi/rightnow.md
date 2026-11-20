# RightNow -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements.** If frontier-quality open models become cheap and widely available while production traffic grows, RightNow could make rented GPU capacity more valuable by serving more requests per GPU-hour at the same output quality and latency. The memo documents a workflow that profiles bottlenecks and benchmarks replacement kernels. RightNow says its hosted API tunes kernels alongside precision, batching, and caching. The founders shipped the API and migrated existing keys and balances from RunInfra. That establishes delivery progress at seed. The memo provides no representative customer comparison that establishes a sustained throughput advantage. (The Idea, Defensibility, Market & Traction, Key Risks)

The hosted launch drew 119 Product Hunt votes, and RightNow reports kernel-tool adoption at several large companies. These are indirect demand signals for hosted inference. The memo gives no paid repeat usage. The scale assumption is that higher throughput and half-price batch jobs on otherwise idle GPUs can bring in more revenue per rented GPU-hour than the added work costs to serve. The memo gives list prices and describes batch processing but leaves realized utilization and contribution unknown. (Market & Traction, The Idea, Key Risks, Key Facts)

### Countercase

Together already uses agents to tune inference, RightNow publishes AutoKernel under Apache 2.0, and RightNow rents its GPUs. A rival could reproduce enough of the serving gains to meet the same customer requirements at comparable cost. Compatible endpoints give buyers a plausible route to switch. Actual substitution on a representative workload remains untested, so the Path A gate stays open. The memo gives no evidence of a newly viable buyer or use that would support Path B. (The Idea, Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 11/25 |
| Durable value capture | 8/25 |
| Customer demand | 6/20 |
| Team and execution | 10/15 |
| Scale economics | 6/15 |

**Total Score: 41/100** (Pass)

### Decisive diligence question

Will an independent buyer renew at a price that leaves positive contribution after a production trial against a tuned alternative serving the same model at matched output quality and peak-load latency? Reach out if the buyer renews because RightNow sustains a meaningful advantage in successful requests per GPU-hour. Pass if the alternative delivers the same outcome at comparable cost and the buyer can switch.
