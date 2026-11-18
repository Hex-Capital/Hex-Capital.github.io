# Terse -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A, product-led adoption.** The first buyer is an engineering team building a collaborative AI app whose agents need to update shared state without duplicating work. Terse offers an open-source runtime and a CLI quickstart. GitHub’s 366 stars show developer attention, and Doop’s creator reported a migration in progress, the clearest signal that a prospective buyer is committing engineering time. Terse reported 1.4 million requests in one day and attributed 32,752 coordinated VM launches to a Munito demo. Customer count, acquisition channel, paid usage, and repeat production use remain unknown. (The Idea, Market & Traction)

If the quickstart can get teams to a working shared-state prototype without founder help, GitHub can keep bringing in developers and Terse Cloud can capture more spending as teams add production workloads. The same runtime could serve teams abroad. That scenario assumes the hosted service can meet their latency and data-residency needs without a custom deployment. Cloud bills by requested CPU and memory time, and dormant actors can retain state. Whether added workloads improve contribution depends on the cost of compute, persistent storage, network traffic, and integration support. The memo gives pricing but leaves those costs unmeasured. (The Idea, Key Facts, Key Risks)

### Countercase

The teams that value deployment control most may self-host, while teams that want a managed service can choose Cloudflare’s bundled offering or Rivet. Doop’s migration could therefore validate the runtime while leaving demand for Terse Cloud unresolved. Per-actor queueing and application-level reconciliation could also turn production onboarding into customer-specific engineering. Those risks fall short of the structural Pass gate because the memo leaves both paid conversion and the delivery effort per customer unresolved. (Defensibility, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 9/25 |
| Repeatable acquisition and onboarding | 9/25 |
| Retention and customer expansion | 7/20 |
| Contribution as volume grows | 7/20 |
| Evidence of fit in the first buyer segment | 6/10 |

**Total Score: 38/100** (Pass)

### Decisive diligence question

Can an independent team outside the US discover Terse through GitHub, use the public quickstart to put a recurring workload into production on Terse Cloud without bespoke founder help, and keep paying into a second billing cycle? A documented activation path, recurring production usage, and two paid invoices would move the action to Reach out. A demo, self-hosted migration, or founder-led deployment would keep it at Watch.
