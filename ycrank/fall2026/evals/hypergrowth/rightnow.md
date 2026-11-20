# RightNow -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

Usage-based expansion is RightNow’s strongest path. Engineering teams already serving open-weight models could move one recurring inference workload to RightNow’s hosted API, then route more production traffic or add workloads if it lowers serving costs or latency. OpenAI- and Anthropic-compatible endpoints, self-serve keys, and per-token billing make that first move plausible across markets for teams that can use shared hosting. Buyer geography and market-specific deployment requirements remain unverified. (The Idea, Key Risks)

The memo documents a hosted API launch and a migration that carried existing keys and balances forward. RightNow also reports kernel-tool use at several named companies. Hosted buyer commitment, conversion from startup credits to paid production use, and expansion at the workload’s normal cadence remain unverified. Even assuming strong fit with the first buyer segment, the first link at risk is whether independent teams can move a production workload onto the standard service and keep paying for it with limited hands-on help. (Market & Traction, The Idea, Key Facts)

### Countercase

The workloads most likely to benefit from RightNow’s tuning may also be the hardest to onboard profitably. The company offers workload-specific benchmarking and migration, and the memo flags that prompt mix, cache reuse, and concurrency can change cost and latency. Batch processing on idle capacity offers a plausible efficiency gain, but the memo gives no marginal GPU or support costs at higher utilization. The structural downside gate remains untriggered because proportional delivery costs are a plausible risk with no observed deployment pattern establishing them. (The Idea, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 16/25 |
| Repeatable acquisition and onboarding | 9/25 |
| Retention and customer expansion | 7/20 |
| Contribution as volume grows | 7/20 |
| Evidence of fit in the first buyer segment | 4/10 |

**Total Score: 43/100** (Pass)

### Decisive diligence question

Can several independent engineering teams move an existing production workload through the standard API and sustain or grow paid token use after any credits expire, while generating positive incremental contribution? Move to Reach out if workload records show that pattern at the teams’ normal usage cadence, with paid revenue covering incremental GPU, onboarding, and support costs. Move to Pass if repeated deployments show that serving more traffic requires bespoke work or GPU spending that absorbs the added revenue, with no demonstrated way to reduce those costs.
