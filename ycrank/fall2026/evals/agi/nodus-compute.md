# Nodus Compute -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements.** Nodus could turn idle GPU time into usable capacity for AI teams running checkpointable jobs. Its owner-first routing lets fleet operators lend eligible GPUs while preserving priority for their own workloads. The memo records 5% average GPU utilization in a sample of Kubernetes clusters, which suggests room to recover capacity. Nodus’s pooling benchmark used synthetic tenants and replayed traffic on one node, leaving the amount of usable capacity it can add in production uncertain. (The Idea, Key Risks)

The clearest technical result is a 7.65× cold-start speedup in a verifier run reported by Nodus for snapshot restoration on one A100. Faster starts could make short jobs easier to place. Durable value capture would depend on reliable access to compatible hosts and a pool that improves placement as it grows. Both remain unproven. Under broad access to cheap frontier intelligence, the reason to pay Nodus would be dependable GPU job completion. The memo leaves open which buyers or jobs become newly viable, so Path B has insufficient support. (Defensibility, The Idea)

The founders’ infrastructure experience and their work shipping the October launch and co-authoring GPU systems research support seed-stage execution. The founders say more than 200 teams joined, and the company lists named users. Repeat paid use and fleet operators’ capacity commitments remain unknown. As a scale scenario, if incremental H100 hours sell at the listed $2.60 rate, each added host’s contribution depends on billable utilization after owner reclaims and the cost of supplier payouts, retries, and support. The memo supplies a price and leaves those operating inputs open. The San Francisco location and recent launch fit the seed-led mandate. Production evidence of bottleneck relief and credible control is still needed for outreach. (Founders & Team, Market & Traction, Key Facts, Key Risks)

### Countercase

With abundant capital, rivals could add capacity or combine scheduling and pooling features they already offer. Nodus’s pool could then amount to intermittent supply that owners can reclaim when they need it. Community hosts can also inspect job data, which limits the shared pool’s usefulness for confidential workloads. The memo describes improving availability of lower-end spot GPUs, a credible substitute for some checkpointable jobs. Together, these facts leave open whether Nodus controls any capacity buyers would struggle to replace. They block Reach out today. Watch is warranted because a live trial can test whether Nodus can secure dependable supply and turn it into an advantage buyers pay for. (Defensibility, Key Risks, Market & Traction)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 15/25 |
| Durable value capture | 8/25 |
| Customer demand | 8/20 |
| Team and execution | 10/15 |
| Scale economics | 5/15 |

**Total Score: 46/100** (Neutral)

### Decisive diligence question

Can Nodus use capacity committed by independent fleet operators to complete repeat paid jobs at a lower cost per successful job than buyers’ existing spot option? A production trial across multiple operators should measure completion times and costs under actual host reclaims and show positive contribution after supplier payouts, retries, and support. A positive result would support Reach out if the updated score clears 65 with at least Medium confidence. If spot matches the result and operators supply equivalent capacity through competing platforms, Pass. (The Idea, Market & Traction, Key Risks)
