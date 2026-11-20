# ObsessionDB -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

The strongest AGI path is a scarce complement: fresh analytical queries with predictable latency when agents, ingestion, and dashboards compete for compute. ObsessionDB documents separate compute groups over shared storage and a distributed cache. If agent traffic is bursty and buyers need to preserve query latency and data freshness during those bursts, that design could become more valuable as agent usage grows. The published benchmark covers warm-cache runs, so the advantage under mixed production loads remains unproven. (The Idea, Key Risks)

Osmosis reports migrating its existing API from Tinybird and serving 13 million requests in 30 days. ObsessionDB reports paying production customers and a separate 50 TB deployment. These are meaningful seed-stage demand signals. The memo leaves open whether buyers chose ObsessionDB specifically for agent workload isolation. It also leaves the New Economies path unsupported because it documents neither lower labor per successful outcome nor a buyer or use newly viable at that cost. The founders’ prior work operating real-time APIs at Numia and their delivery of a managed database and customer-cloud deployment support execution. (Market & Traction, Founders & Team, The Idea)

The scale unit is a production workload that can add compute groups as traffic grows. At the memo’s example configuration of $4,090 per month, contribution depends on compute, storage, cache, and attributable migration and support costs. The memo documents separate compute and storage billing. It leaves actual utilization and delivery costs open. (The Idea, Key Facts)

### Countercase

ClickHouse Cloud already offers isolated compute over shared storage and a managed agent service. Altinity also offers a shared-storage extension. ObsessionDB controls its cache and routing, but the memo gives no evidence that buyers stay or pay a premium when competing services meet the same requirements. Cache misses also add latency, which could erode the advantage on bursty workloads. The overlap makes substitution credible, while production parity and easy switching remain unproven. Watch applies. (Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 13/25 |
| Durable value capture | 9/25 |
| Customer demand | 14/20 |
| Team and execution | 10/15 |
| Scale economics | 7/15 |

**Total Score: 53/100** (Neutral)

### Decisive diligence question

Would an independent buyer with substantial agent traffic renew at a price that yields positive contribution because ObsessionDB materially outperforms ClickHouse Cloud? Compare the same production workload at matched ingestion and freshness targets, including burst traffic and cold-cache periods. A material cost or tail-latency advantage that drives a profitable renewal would move the action to Reach out. Parity followed by ready switching would move it to Pass on the current evidence.
