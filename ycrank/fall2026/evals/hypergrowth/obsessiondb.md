# ObsessionDB -- Hypergrowth Evaluation

**Action:** Reach out  
**Evidence confidence:** Medium

### Company case

Assuming strong product-market fit with data teams serving live APIs and querying agent traces, ObsessionDB has a credible path to global demand. Its documented ClickHouse SQL and client interfaces let teams in different markets use the same warehouse for the same recurring job. Certification requirements can block some enterprise buyers, and certain ClickHouse workflows need migration changes. Those constraints narrow the reachable segment. (The Idea, Defensibility, Key Risks)

Self-serve clusters and a free developer tier give teams a way to start independently using familiar clients. The company also offers founder sales calls, cost audits, and hands-on production migrations. The evidence supports independent evaluation, while the path an ordinary buyer takes from trial to paid production remains uncertain. (The Idea, Key Risks)

Retention could compound as customers retain more data or add compute for ingestion, dashboards, and agents. Managed pricing meters compute and compressed storage separately, so growing workloads can raise recurring bills. That gives expansion room to offset churn, though customers can also scale compute down and the memo provides no observed same-account revenue trajectory. (The Idea)

The company reported paying production customers and petabytes processed monthly in October. Osmosis reported 13 million API requests in the 30 days through October 28 after its September migration, corroborating production use. That is meaningful early uptake for a company listed at five people. The January managed-product announcement and October repositioning give context, while the date of first paid availability and the pace of revenue or paying-customer growth remain unclear. (ObsessionDB, Market & Traction)

In an illustrative managed-cloud scenario, the published $4,090 monthly configuration provides the revenue side of the contribution calculation. The costs to subtract include compute, NVMe cache, object storage and requests, network traffic, support, and the attributable cost of winning and migrating the account. Shared storage and independently sized compute groups could improve contribution if the resource savings exceed any reduction in billed usage. Cache misses and prewarming make the result workload-sensitive, and the memo gives no provider-side costs to establish positive contribution. The concrete product and billing mechanisms support outreach, with Medium confidence given the uncertainty around production onboarding and contribution. (The Idea, Key Facts, Key Risks)

### Countercase

The strongest countercase is that developers can start a cluster independently, but reaching paid production routinely requires founder-led migrations and ongoing tuning. Documented compatibility changes and cache-miss latency make that plausible, while ClickHouse Cloud’s overlapping architecture and agent offering give buyers an alternative. The structural downside gate stays open because the memo shows a reusable path to first use and leaves the frequency and cost of production assistance unresolved. (The Idea, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 21/25 |
| Repeatable acquisition and onboarding | 16/25 |
| Retention economics | 17/20 |
| Initial traction | 11/20 |
| Cost economics | 6/10 |

**Total Score: 71/100** (Invest)

### Decisive diligence question

Can a typical managed-cloud buyer go from self-serve trial to a paid production workload with only routine support? Review a recent group of trial accounts, including those that stalled, for billing activation, time to production, and staff hours spent on migration. If paid production routinely requires hands-on migration, move to Watch until a repeatable customer-led path is demonstrated.
