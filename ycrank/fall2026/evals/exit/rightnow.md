# RightNow -- Exit Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

RightNow’s strongest exit path in Fall 2026 is a strategic sale to a hosted inference provider. A dedicated-serving provider such as DeepInfra could acquire RightNow’s kernel-tuning team and serving stack if integrating them reduced GPU cost per request at comparable latency and quality faster than building the capability in-house. The memo documents a published kernel-optimization workflow and a live hosted API. RightNow reports kernel-tool use at NVIDIA, AMD, and Modal, but the memo gives no measured savings for a prospective acquirer. (The Idea, Defensibility, Market & Traction)

RightNow already offers to benchmark customer workloads. A realistic seed-stage milestone is to turn those benchmarks into paid production deployments that show repeatable GPU savings across workloads. Rented GPUs give the team a way to run those tests. The capacity and funding needed to sustain production traffic remain uncertain. The RunInfra migration preserved API keys and customer balances, providing some evidence that the service can be moved operationally. Acquisition would still require diligence on IP ownership, customer consents, and GPU contract terms. The memo gives no evidence of an independent liquidity route. (The Idea, Market & Traction, Key Risks)

Using the rubric benchmark, a $500,000 check at a $10 million post-money valuation starts at 5% ownership and dilutes to 3% with no follow-ons. The 5× objective requires $2.5 million in gross cash within eight years, or about $83.3 million in distributable equity if the holder sells the full stake. The sale scenarios assume $5 million in combined debt and deal deductions, no further senior claims, and an eligible holder receiving cash pro rata at closing within eight years. The prices are illustrative. The memo supplies no buyer economics or comparable sale prices to support them. (Market & Traction, Key Facts)

| Scenario | Enterprise value to distributable equity | Gross cash to holder |
|---|---|---|
| Modest sale | $45 million less $5 million = $40 million | $1.2 million (2.4×) |
| Strong sale | $100 million less $5 million = $95 million | $2.85 million (5.7×). If the holder can sell only 80% of the stake, cash falls to $2.28 million (4.56×). |
| Prolonged private | Cash is reinvested through year eight, with no distribution or eligible share sale | $0 realized |

### Countercase

Together already has an inference compiler aimed at similar efficiency gains, and competing hosts can use RightNow’s Apache 2.0 AutoKernel implementation. If the remaining serving stack offers little incremental savings on a buyer’s workloads, that buyer has little reason to pay a price that clears the holder’s hurdle. Workload-dependent performance makes that a credible risk. The memo establishes a substitute for part of the workflow and leaves acquisition value unresolved. That supports Watch. The Pass gate would require evidence of a structural block or materially inadequate proceeds on the strongest credible route. (Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Counterparty rationale or source of cash | 13/30 |
| Plausible investor proceeds | 8/30 |
| Milestones and capital needed | 11/20 |
| Transaction feasibility | 6/10 |
| Independent alternatives | 2/10 |

**Total Score: 40/100** (Pass)

### Decisive diligence question

Would RightNow’s paid production results give a strategic buyer an economic reason to pay enough to clear the holder’s proceeds hurdle? A prospective buyer’s benchmark on representative workloads, paired with a quantified buy-versus-build analysis, would answer it. Economics that support at least $83.3 million in distributable equity within eight years under the assumed holder terms would move the action from Watch to Reach out.
