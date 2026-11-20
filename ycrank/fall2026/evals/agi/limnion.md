# Limnion -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements.** Limnion’s strongest case is that cheap, capable incident-investigation agents could make reliable access to high-volume logs and traces more valuable. Limnion says telemetry costs rise at high volumes. Siglake’s documented design ingests OpenTelemetry into Iceberg tables in the customer’s object store and gives agents read-only query access. If frequent agent queries make cost or reliability a binding constraint, Limnion could charge to operate a deployment that customers and rivals would take meaningful time to reproduce. The memo establishes the architecture. The bottleneck and Limnion’s ability to control it remain hypotheses. (The Idea, Defensibility)

The public release and Persen’s prior database and log-management work support seed-stage execution. The release notes record bounded smoke-test passes, a failed 72-hour endurance test, and pending failover and tenant-isolation qualification. The company-reported AWS tests at 1 TB and 2.02 billion rows give an early sizing reference for the expansion unit, a deployment in each customer’s cloud. Managed deployment is still in development, and the cost of operating and supporting it at a viable price remains unmeasured. Repository stars and forks show developer interest. Evidence of independent buyer commitments is absent, so customer demand receives the default score. (Founders & Team, Key Risks, Defensibility, The Idea, Market & Traction)

### Countercase

Snowflake’s Observe preview already offers OpenTelemetry ingestion into customer-owned Iceberg storage that other engines can query. Customers control their data, and Siglake’s license permits rivals to reuse its code. The proposed switching costs from streaming integrations remain speculative. This overlap leaves durable control unproven. The memo has no buyer comparison showing that Observe or another substitute meets the same workload requirements, so the substitution gate remains open. Path B lacks evidence that Siglake lowers full labor cost enough to make a previously uneconomic use viable. (Defensibility, Key Risks, The Idea)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 10/25 |
| Durable value capture | 7/25 |
| Customer demand | 5/20 |
| Team and execution | 9/15 |
| Scale economics | 6/15 |

**Total Score: 37/100** (Pass)

### Decisive diligence question

Will an independent platform team commit budget for a managed deployment after a production trial shows Siglake meets agreed cost, query, and reliability targets on a sustained agent workload that its best available alternative cannot match? A paid commitment at a price that covers delivery, backed by an operating advantage the buyer cannot readily reproduce or source elsewhere, would move the action to Reach out. Equivalent performance and economics from an accessible substitute would close Path A and move the action to Pass.
