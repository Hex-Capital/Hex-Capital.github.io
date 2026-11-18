# Nodus Compute -- Exit Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

The strongest path is a strategic acquisition by a GPU cloud or fleet operator. Nodus documents owner-first scheduling that lets operators sell spare GPU time while preserving priority for their own jobs. Nodus reports a 7.65× cold-start speedup in a verifier run on one A100. The pooling benchmark used synthetic tenants and replayed traffic on a single node. The founders report that more than 200 teams joined after launch, while paid usage and production savings remain unverified. (The Idea, Defensibility, Market & Traction, Key Risks)

A fleet operator could pay to control the scheduler if owning it let the operator sell more idle capacity, preserve service for existing customers, and earn enough incremental margin over what it could achieve by building or licensing the capability. That ownership advantage is an inference. A paid fleet deployment could test it by measuring incremental margin and job completion under actual host reclaims. The launch and the founders’ infrastructure experience make that test plausible at seed. The memo leaves the pilot budget, runway, and funding unresolved. It also leaves IP ownership and the transferability of fleet agreements unverified. Published hourly rates are customer prices and supply no acquisition valuation evidence. The memo supports no independent fallback that could pay this holder. (The Idea, Market & Traction, Founders & Team, Key Risks, Key Facts)

**Proceeds bridge.** The memo supplies no terms for the check being evaluated, so the scenarios use the thesis’s illustrative $500,000 check at a $10 million post-money valuation. Initial ownership of 5% falls to 3% after 40% relative dilution, with no follow-on checks. The eight-year 5× objective is $2.5 million in gross cash. At 3% ownership, it requires $83.3 million in distributable equity proceeds, versus $125 million at 2% or $62.5 million at 4%.

The sale scenarios are illustrative price points. Both assume zero net debt and no price adjustments, so enterprise value equals equity consideration. The assumed waterfall is simple pro rata, with no preference deductions. All consideration is cash at close. Stock, escrow, earnouts, rollover, and compensation are each assumed to be zero.

| Scenario | Timing | Gross cash to holder | Gross multiple |
|---|---|---:|---:|
| Modest sale at $40 million enterprise value | Year 5 | $1.2 million | 2.4× |
| Strong sale at $100 million enterprise value | Year 7 | $3.0 million | 6.0× |
| Prolonged private ownership with growth plateauing, buyers staying away, public scale out of reach, and cash reinvested | Through year 8 | $0, with shares retained | 0× |

The strong sale clears the hurdle at 3% ownership and falls short at 2%, where it pays $2 million. The memo supplies no buyer economics or transaction evidence to establish that the strong price is attainable.

### Countercase

A buyer could license the scheduler or combine existing pooling and GPU scheduling tools. Host reclaims limit which jobs can use spare capacity reliably, and confidentiality requirements can keep workloads in private pools. Those constraints could shrink the financial benefit enough to make acquisition uneconomic. The memo shows that substitutes cover parts of the product while leaving their production equivalence and any acquisition price ceiling unresolved. That gap supports Watch. The evidence does not establish a structural Pass or make the prolonged-private scenario the probable outcome. (The Idea, Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Counterparty rationale or source of cash | 13/30 |
| Plausible investor proceeds | 8/30 |
| Milestones and capital needed | 9/20 |
| Transaction feasibility | 5/10 |
| Independent alternatives | 2/10 |

**Total Score: 37/100** (Pass)

### Decisive diligence question

Can a paid production deployment at a GPU fleet operator show enough incremental margin under real host reclaims to justify paying at least $83.3 million for ownership over the operator’s best build or license option? Operator-validated economics supporting that threshold under the 3% ownership and clean-sale assumptions would move the action to Reach out. A demonstrated equivalent at a cost that caps the acquisition price materially below the hurdle would move it to Pass.
