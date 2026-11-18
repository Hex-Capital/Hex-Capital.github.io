# ObsessionDB -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

**Path A, scarce complements, is the strongest fit.** If cheaper intelligence drives more concurrent, bursty queries, the bottleneck for data teams could be serving fresh data at predictable latency while ingestion continues. ObsessionDB documents a storage engine and distributed cache that let ingestion, dashboards, and agents use separate compute over shared data. Numia, the founders’ prior company, reported a 75% cost reduction after moving a 200 TB workload from BigQuery. That supports the potential to relieve a costly data-serving constraint at seed. The performance advantage on representative agent workloads remains unproven. (The Idea, Market & Traction)

Osmosis reported switching its data API from Tinybird and serving 13 million requests in 30 days. That is concrete buyer adoption. The company also reports paying production customers, with renewal and expansion still unknown. The founders’ experience operating real-time APIs together at Numia and shipping a managed database supports execution at seed. (Market & Traction, Founders & Team)

A production cluster is a plausible unit of expansion. **Scenario assumption:** If a customer pays the illustrated $4,090 monthly price, positive contribution requires the incremental cost of compute, object storage, NVMe cache, and support to stay below that price. Separate compute groups let customers add capacity to the workload that needs it. The memo gives a price point, while utilization and marginal delivery costs remain unknown. The San Francisco base and Fall 2026 YC participation support a seed-stage mandate fit. (ObsessionDB, The Idea, Key Facts, Market & Traction)

### Countercase

With abundant capital and equally capable models, buyers could still get isolated compute over shared storage from ClickHouse Cloud, which also offers a managed agent service. Altinity has released a shared-storage extension. ObsessionDB controls its implementation, but its published comparison uses hot runs, and its own documentation identifies added latency on cache misses. The decisive question is whether that implementation retains a production advantage once caches churn and workloads compete. Feature overlap makes substitution credible. Equivalent production performance and cost remain unproven, leaving Path A open for qualification. Path B has weaker support because the migrations show existing workloads moving to a different vendor, while a newly viable transaction and a reason to pay under model parity remain unproven. (Defensibility, Key Risks, Market & Traction)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 13/25 |
| Durable value capture | 8/25 |
| Customer demand | 13/20 |
| Team and execution | 10/15 |
| Scale economics | 6/15 |

**Total Score: 50/100** (Neutral)

### Decisive diligence question

Will an independent buyer commit to paid production use after comparing ObsessionDB with ClickHouse Cloud on the same live agent workload? Have the buyer verify freshness, tail latency, and all-in cost through concurrent ingestion, query bursts, and cold-cache periods. A sustained advantage attributable to ObsessionDB’s storage layer, backed by a paid commitment and evidence the advantage can persist, would support Reach out if it lifts the score to 65 or above. Comparable results at comparable cost would move the case to Pass.
