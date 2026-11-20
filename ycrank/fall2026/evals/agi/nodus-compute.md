# Nodus Compute -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements.** If cheaper frontier intelligence drives more GPU workloads, Nodus could turn idle hours on compatible GPUs into usable capacity. Fleet owners would earn revenue from hours they already pay for, while borrowers could get checkpointable jobs done when comparable capacity is hard to secure. The memo reports 5% average GPU utilization in sampled Kubernetes clusters. That measures idle time in those clusters. Whether those hours match borrowers’ hardware, timing, and reliability requirements remains open. Nodus’s owner-first routing and lending design addresses that mismatch, with pooling tested on a single node using synthetic tenants and replayed traffic. That supports a seed-stage production trial. Confidence stays Low because the evidence on dependable supply and buyer commitments is indirect. (The Idea, Key Risks, Market & Traction)

The rollout unit is a fleet pool that can serve recurring borrower jobs. Nodus lists H100 SXM capacity at $2.60 per hour. In a scenario where borrowers pay that rate, contribution depends on billable hours collected per successful job after supplier payouts and the costs of retries, replacement capacity, and support. The memo gives no realized inputs for that calculation. (The Idea, Key Risks)

### Countercase

Nodus could end up selling interchangeable orchestration over capacity that fleet owners control. Owners can reclaim lent hosts, borrowers can wait when replacements are unavailable, and host access to job data rules out some workloads. SkyPilot and Cast AI already offer parts of the orchestration stack, and the memo reports improving availability of lower-end spot GPUs. These are concrete limits on which jobs Nodus can serve and how much control it can exercise. Comparable alternatives for the same hardware, completion reliability, and price remain untested, so Path A stays open at Watch. (Defensibility, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 12/25 |
| Durable value capture | 7/25 |
| Customer demand | 7/20 |
| Team and execution | 9/15 |
| Scale economics | 5/15 |

**Total Score: 40/100** (Pass)

The company-reported 200-plus signups and named users show early interest, with buyer spending and repeat use still unknown. The founders’ infrastructure experience and the reported reproduction of a 7.65× cold-start speedup on one A100 support execution credit. That benchmark tested snapshot restoration, a narrower task than delivering jobs through host reclaims. (Market & Traction, Founders & Team, Defensibility, Key Risks)

### Decisive diligence question

Can Nodus reliably complete recurring paid jobs for an independent buyer whose best available alternative falls short? A repeat paid production deployment would move the action to Reach out if fleet partners commit enough compatible replacement capacity to meet the buyer’s completion requirements through actual reclaims, at positive contribution per completed job. A credible substitute that meets the same requirements at comparable cost would close the evidenced path and move the action to Pass.
