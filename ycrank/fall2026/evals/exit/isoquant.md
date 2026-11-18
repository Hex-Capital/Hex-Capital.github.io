# isoquant -- Exit Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

Strategic acquisition is the strongest path. A hosted inference provider could buy Isoquant’s tuning software to lower GPU serving costs or improve latency across its own fleet. Ownership could make sense if the buyer can reuse the tuning across workloads and keep the resulting cost advantage. The memo documents a self-serve API and posted usage prices. Isoquant reports 452 ms median time to first token on one model, versus 890–1,550 ms for three competitors, and 91.7% lower inference cost in a company-run banking evaluation that also reported higher accuracy. Those results give a buyer a reason to test the software. The economics on the buyer’s fleet remain unverified. (The Idea; Market & Traction)

The operating milestone is repeatable savings at matched quality and latency across several paid production workloads. Isoquant reports serving more than 1.5 trillion tokens, and the memo records early financing. That supports a path to testing at production volume, while paid usage, test cost, and runway remain unclear. IP ownership and transfer rights are unverified. The privacy policy requires written consent to train on customer content, so the acquisition case depends on what the tuning software can deliver with data the buyer is entitled to use. The memo gives no separate evidence of a fallback that would pay this holder. (Market & Traction; Key Facts; Defensibility; Key Risks)

**Proceeds bridge.** The memo gives no usable acquisition valuation or terms for the check, so the scenarios use the illustrative $500,000 seed check at a $10 million post-money valuation, diluted from 5% to 3%, with no follow-on checks. A 5× cash return within eight years requires $2.5 million to the holder, or $83.3 million in distributable equity proceeds at 3%. The hurdle is $125 million at 2% and $62.5 million at 4%. The sale scenarios assume an all-cash closing, zero net debt or deal fees, and a pro rata waterfall with no preference adjustment. Enterprise value therefore equals distributable equity proceeds. Stock, escrow, earnouts, rollover, and deal-related compensation are each assumed to be zero. Sale prices and timing are scenario assumptions.

| Scenario | Timing and equity proceeds | Holder cash | Gross multiple |
|---|---|---:|---:|
| Modest sale | Year 5, $50 million | $1.5 million | 3× |
| Strong sale | Year 7, $100 million | $3 million | 6× |
| Prolonged private | Through year 8, growth plateaus, buyers stay away, public scale remains out of reach, and cash is reinvested | $0, shares retained | 0× realized |

The strong scenario clears the objective at 3% ownership. It yields $2 million, or 4×, at 2%. The memo supplies no buyer economics or comparable purchase price to support either modeled sale value. (Market & Traction; Key Facts)

### Countercase

Together AI already offers agent-driven tuning, and NVIDIA Dynamo supplies open-source scheduling and cache management. Isoquant’s gains vary by workload, and its compatible API makes switching easier. A buyer could capture enough of the benefit by building on those components or buying inference as a service. That could cap the acquisition price below the hurdle. The memo establishes credible substitutes but leaves their relative performance and cost unresolved, so it supports Watch without triggering the structural Pass override. (Defensibility; Key Risks; The Idea)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Counterparty rationale or source of cash | 15/30 |
| Plausible investor proceeds | 8/30 |
| Milestones and capital needed | 11/20 |
| Transaction feasibility | 5/10 |
| Independent alternatives | 2/10 |

**Total Score: 41/100** (Pass)

### Decisive diligence question

Can a buyer-validated production test show that owning Isoquant’s tuning software would generate enough incremental savings to justify a deal yielding at least $83.3 million in distributable equity proceeds? A paid test across several representative workloads, benchmarked at matched quality and latency against the buyer’s best build or license option, would move the action to Reach out if the measured savings and the buyer’s deployment volumes support that price. Evidence that an available substitute captures essentially the same savings and caps the price below the hurdle would move it to Pass.
