# ObsessionDB -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

**Usage-based expansion** is the strongest path. The first buyer is a data team running a high-volume live API. Once its first workload is in production, additional workloads can use separate compute groups over shared storage. On managed clusters, that expansion can increase the compute and compressed storage billed to the customer. Native ClickHouse interfaces and a customer-cloud option make the same job plausible across markets, although buyer geography is unreported and certification requirements can exclude some buyers. (*The Idea*, *Key Risks*)

Osmosis reports moving its production API from Tinybird, cutting annual operating costs from about $60,000 to $30,000, and serving 13 million requests in a 30-day period. That testimonial supports initial fit and repeat use at the API’s operating cadence. ObsessionDB separately reports paying production customers and petabytes processed monthly. The memo gives no account-level evidence that customers added billed capacity or workloads after going live. Numia’s reported migration savings support the cost proposition, with limited weight as evidence of independent buyer fit because Numia was the founders’ prior company. (*Market & Traction*, *Founders & Team*)

### Countercase

The first link likely to break after fit is converting higher usage into profitable billed expansion. API requests can rise within already provisioned capacity, and separate compute groups may add infrastructure and support costs when customers expand. The published comparison uses hot runs, and documented cache-miss latency adds uncertainty about the resources needed for new workloads. Osmosis’s savings measure the buyer’s costs, leaving ObsessionDB’s marginal contribution unmeasured. The company also offers self-serve clusters, cost audits, and hands-on migrations, but the memo traces no repeatable route from discovery to paid production or measures migration effort. These gaps warrant Watch. The evidence does not establish the structural downside gate. (*The Idea*, *Market & Traction*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 17/25 |
| Repeatable acquisition and onboarding | 9/25 |
| Retention and customer expansion | 10/20 |
| Contribution as volume grows | 7/20 |
| Evidence of fit in the first buyer segment | 7/10 |

**Total Score: 50/100** (Neutral)

### Decisive diligence question

Can an independent managed customer add a second recurring production API workload at positive incremental contribution? A before-and-after record showing sustained use, higher realized compute or storage charges, and incremental infrastructure, integration, and support costs below that added revenue would move the action to Reach out.
