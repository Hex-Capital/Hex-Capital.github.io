# ObsessionDB -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

**Building blocks of superintelligence.** The supported mechanism is a potential bottleneck in serving fresh analytical queries over agent traces while ingestion and dashboards compete for compute. MotherDuck reported 29× as many MCP-agent queries as human UI queries in one monthly comparison. The memo also describes a BigQuery-to-Postgres workflow that incurs scan costs and can serve stale results after copying data. ObsessionDB’s design lets agents query shared tables through a separate compute group backed by a distributed cache. The seed-stage assumption is that bursty agent traffic makes it costly to preserve freshness and tail latency by adding compute or copying data. The volume comparison supports demand growth for this workload, while the cost and latency advantage under mixed traffic and cold-cache conditions remains unmeasured. That gap warrants Watch. (The Idea, Market & Traction, Key Risks)

**Industry enabled by superintelligence.** This path scores zero. The memo describes a database for existing analytics and API-serving workflows. Its cost-saving mechanism comes from database architecture. Evidence that AI reduces labor cost enough to open a previously uneconomic use or buyer segment is missing. (The Idea, Market & Traction)

The proprietary storage engine, distributed cache, and locality-aware routing give ObsessionDB a differentiated implementation. Datashares are in beta, and durable pricing power remains unproven. Osmosis reported migrating a live API from Tinybird, halving annual operating cost to about $30,000, and serving 13 million requests in 30 days. That customer account supports demand for the warehouse. Paying production customers and petabytes processed monthly are company-reported, and demand specifically from agent workloads is unverified. The founders’ prior work on real-time APIs at Numia and ObsessionDB’s shipped warehouse support execution credit. Published pricing establishes how the company bills, while incremental cloud and support costs needed to assess contribution margin are missing. (Defensibility, Market & Traction, Founders & Team, Key Facts)

### Countercase

ClickHouse Cloud already offers isolated compute over shared storage and a managed agent service. Altinity also offers a shared-object-storage extension. ObsessionDB’s published comparison uses hot runs, and its own documentation identifies added latency on cache misses. If a readily available substitute meets the same agent workload’s freshness and latency requirements at comparable cost, the building-blocks path falls to zero and the two-zero Pass gate applies. The memo establishes feature overlap, while equivalent performance on that workload remains open. (Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 10/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 8/20 |
| Customer demand | 9/15 |
| Team and execution | 7/10 |
| Scale economics | 2/5 |

**Total Score: 36/150** (Pass)

### Decisive diligence question

Can ObsessionDB meet a production buyer’s freshness, p99 latency, and cost targets for bursty agent-trace queries where ClickHouse Cloud cannot? A buyer-run comparison using the same data and traffic, with concurrent ingestion and both warm and cold caches, would answer it. Move to Reach out if ObsessionDB alone meets the buyer’s targets, or to Pass if both meet them at comparable cost.
