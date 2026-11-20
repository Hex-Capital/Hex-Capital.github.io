# Limnion -- Exit Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

A strategic acquisition by an observability or IT operations platform is Limnion’s strongest exit path. Siglake gives incident-investigation agents read-only access to logs and traces stored in customer-owned Iceberg tables. Snowflake’s acquisition of Observe and ServiceNow’s acquisition of Persen’s prior company, Era Software, show that platform buyers have acquired adjacent products. A buyer could pay for a production-proven, self-hosted telemetry stack if owning it brought customer deployments or shortened the time to offer agent-facing investigations. Limnion claims that high telemetry costs create demand for this architecture. The memo documents a shipped release and reports company-run tests at 1 TB and 2.02 billion rows, but gives no production customer savings, buyer interest, or acquisition prices. (The Idea, Defensibility, Market & Traction, Founders & Team)

The relevant milestone is a paid managed deployment that passes endurance, multi-replica failover, and tenant-isolation tests and measures the cost of real incident investigations. The release gives Limnion a starting point, and the reported $500,000 convertible note is an early funding signal. The memo gives no pilot budget, runway, or committed production customer, so the capital and time needed remain uncertain. (The Idea, Market & Traction, Key Risks)

**Proceeds bridge.** The benchmark assumes a $500,000 check at a $10 million post-money valuation, diluted from 5% to 3% with no follow-ons. A 5× gross return requires $2.5 million in cash within eight years, or about $83.3 million in distributable equity value at 3%. The sale scenarios assume $5 million in deductions for net debt and deal adjustments, no senior preference reducing the holder’s share, and an eligible holder selling all shares for cash at closing within eight years. The figures are illustrative. The memo gives no basis for a buyer price range or the actual waterfall, and the reported note’s repayment or conversion terms are unknown. (Market & Traction)

| Scenario | Enterprise value | Distributable equity | Cash to holder |
|----------|-----------------|----------------------|----------------|
| Modest sale | $40M | $35M | $1.05M (2.1×) |
| Strong sale | $100M | $95M | $2.85M (5.7×) |
| Prolonged private | — | No payout assumed | $0 realized |

At 2.5% ownership, even the strong sale yields about $2.38 million, below the objective. The memo identifies no eligible secondary or funded payout. A company sale is plausible in structure, with buyer access to customer deployments and the necessary consents still unverified given that customers own the underlying data. (The Idea, Market & Traction)

### Countercase

Snowflake already offers overlapping OpenTelemetry and customer-owned Iceberg functionality through Observe, and Siglake’s Apache-2.0 license lets competitors reuse its code. A buyer could integrate what it needs without buying Limnion, especially while Siglake has a failed 72-hour endurance test and pending failover and tenant-isolation qualification. That weakens the case for paying a meaningful acquisition price. It does not trigger Pass because the evidence establishes neither a structural block across plausible buyers nor a supported price ceiling below the holder’s hurdle. (Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Counterparty rationale or source of cash | 14/30 |
| Plausible investor proceeds | 8/30 |
| Milestones and capital needed | 9/20 |
| Transaction feasibility | 6/10 |
| Independent alternatives | 2/10 |

**Total Score: 39/100** (Pass)

### Decisive diligence question

What would make an observability platform pay roughly $88 million or more in enterprise value to acquire Siglake instead of building or reusing the capability? A paid production deployment with measured savings and a credible buyer-side estimate of the value of acquiring it would move the action to Reach out if the implied price clears the holder’s hurdle under realistic dilution and deal deductions.
