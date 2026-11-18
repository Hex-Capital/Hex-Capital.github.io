# Maritime -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A, product-led adoption,** is Maritime’s strongest path. The initial buyer is the engineering team at a startup that runs a separate AI agent for each customer. Maritime gives each agent an isolated VM that preserves state while idle, wakes when work arrives, and can be monitored and debugged individually. The proposed growth loop is self-serve trial, paid activation, then more hosted agents as the buyer adds customers. Larger fleets could increase revenue once their usage exceeds the credits included in their existing plans. (The Idea)

Keiki documents running its background agent harness on Maritime microVMs, a concrete sign that one team invested engineering time in an integration. Its acquisition route, payment status, and sustained usage are unknown. Maritime separately reported 1,107 agents and 29 awake at one instant. That snapshot leaves customer count, retention, and typical compute usage unknown. The same workflow could plausibly serve engineering teams abroad if existing infrastructure meets their latency and data residency needs. The memo gives no second-market buyer evidence. (Market & Traction, Key Facts, Key Risks)

### Countercase

Maritime could win trials for an increasingly common runtime feature while struggling to convert them into profitable recurring workloads. Fly.io and Google Cloud offer overlapping capabilities. Maritime’s scheduler can reduce idle compute, but each additional agent still adds state storage and awake compute. Concurrent wakeups can force capacity upgrades, and migration and support may add labor per account. If fleets spend more time awake, compute costs could rise under flat agent-box pricing. The memo gives no measured cost curve or evidence of a structural ceiling, so the Pass gate is open and the decision is Watch. (The Idea, Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 9/25 |
| Repeatable acquisition and onboarding | 9/25 |
| Retention and customer expansion | 7/20 |
| Contribution as volume grows | 7/20 |
| Evidence of fit in the first buyer segment | 5/10 |

**Total Score: 37/100** (Pass)

### Decisive diligence question

Can a cohort of independent agent startups outside the US activate through the standard self-serve trial, pay, and add billable workloads through renewal while generating positive incremental contribution? Billing and usage records, together with compute, storage, migration, and support costs, would answer it. A successful cohort using the same deployment workflow without bespoke regional work would move the action to Reach out.
