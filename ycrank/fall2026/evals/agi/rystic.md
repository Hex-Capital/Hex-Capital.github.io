# Rystic -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

**Path A — Scarce complements.** If cheap frontier models increase the volume of agent-written changes, engineering teams could hit a testing bottleneck. Shared sandboxes can limit parallel runs, and teams bear the cost in CI delays and test setup. Rystic ships local, deterministic simulators that preserve state across API calls. In its own Stripe benchmark, Rystic reports running 50 jobs in 19 seconds versus more than 40 minutes on shared sandboxes. That supports a throughput advantage for the tested workload. Comparable fidelity and scarcity across representative workflows remain open. (*The Idea*, *Market & Traction*)

Tilo’s CTO reports using Rystic in migration-assistant CI without provisioning real service accounts. HJBL’s CEO reports using custom exchange simulators Rystic built. These are concrete uses, with payment and repeat purchasing unverified. The founders’ infrastructure and integration experience, the launch of 17 simulators, and daily live-API checks show progress on building and maintaining the product. The verification pipeline could make reliable coverage costly to reproduce, though buyer switching costs remain an inference. The scale case assumes each maintained simulator can serve many customers. Published seat and usage prices give Rystic a way to charge for that reuse, while maintenance, custom work, and support costs remain unmeasured. (*Market & Traction*, *Founders & Team*, *Defensibility*, *Key Risks*, *The Idea*)

### Countercase

LocalStack already offers overlapping local GitHub and Stripe emulators, and WireMock offers stateful local simulation. Rystic reports 95.0% agreement across 884 Slack checks and 92.4% across 645 GitHub Pulls checks. If those gaps affect release-critical behavior, customers may still need live tests, reducing the value of faster simulation. The memo establishes credible substitutes but offers no buyer comparison showing they meet the same requirements. Durable scarcity remains unproven, which keeps the action at Watch. (*Defensibility*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 15/25 |
| Durable value capture | 9/25 |
| Customer demand | 11/20 |
| Team and execution | 10/15 |
| Scale economics | 6/15 |

**Total Score: 51/100** (Neutral)

### Decisive diligence question

Will an independent engineering team pay to keep Rystic in recurring CI after running the same release-critical, stateful workflow against the best overlapping substitute? Reach out if the team pays after showing that Rystic alone clears its required fidelity and throughput thresholds at acceptable operating cost. Pass if the substitute meets those requirements on comparable terms and eliminates the buyer’s reason to pay Rystic.
