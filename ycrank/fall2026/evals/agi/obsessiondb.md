# ObsessionDB -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

**Path A — Scarce complements.** If cheap frontier intelligence drives more bursts of concurrent agent queries, data teams may need more capacity to keep live results fresh without disrupting ingestion or API serving. ObsessionDB’s separate compute groups, shared object storage, and distributed cache could relieve that constraint. The company reports that its largest customer serves APIs over 50 TB while ingesting hundreds of thousands of events per minute. That supports the system’s ability to handle a substantial live workload. Whether agent traffic makes this capacity scarce is still a scenario assumption. (The Idea; Market & Traction)

Osmosis reported moving its existing data API from Tinybird, cutting annual operating cost from about $60,000 to $30,000, and serving 13 million requests in 30 days. That is evidence of an independent production buyer acting on cost and serving needs. The CEO also reports paying production customers, though the memo gives no realized contract prices or renewal history. The founders previously operated petabyte-scale APIs at Numia and have shipped managed and customer-cloud deployments. (Market & Traction; Founders & Team; The Idea)

The expansion unit is a managed cluster or a customer-cloud deployment. Separate compute and storage billing gives customers a way to add query capacity as traffic grows. The published $4,090 monthly cluster example is a list-price reference. Contribution at scale depends on compute utilization, cache efficiency, and migration and support labor, which the memo leaves unmeasured. (The Idea; Key Facts; Key Risks)

### Countercase

ClickHouse Cloud already offers isolated compute over shared storage and its own agent service. Altinity offers a shared-object-storage extension. ObsessionDB controls its own storage engine and cache, but its published comparison uses hot runs, and the company documents added latency on cache misses. The Osmosis migration shows a cost advantage over Tinybird for one workload. A credible substitute could still meet the same cost, freshness, and latency requirements on agent-heavy workloads. That leaves the Path A substitution gate unresolved and supports Watch. Path B lacks evidence that lower delivery labor costs opened a previously uneconomic use. (Defensibility; Market & Traction; Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 13/25 |
| Durable value capture | 8/25 |
| Customer demand | 12/20 |
| Team and execution | 10/15 |
| Scale economics | 7/15 |

**Total Score: 50/100** (Neutral)

### Decisive diligence question

Can ObsessionDB meet an independent buyer’s freshness and tail-latency targets at materially lower all-in cost than ClickHouse Cloud on the buyer’s production agent workload, including cold-cache bursts during live ingestion? A sustained advantage attributable to ObsessionDB’s storage and cache, followed by a paid expansion at a viable price, would move the action to Reach out. Incumbent parity on those requirements would close this Path A case and move the action to Pass.
