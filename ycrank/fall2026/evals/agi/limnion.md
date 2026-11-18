# Limnion -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements.** Limnion’s best case is that affordable, reliable access to high-volume logs and traces becomes a bottleneck for site reliability and platform teams as they run more agent-led investigations. That demand increase is a scenario assumption. Limnion says telemetry costs already rise at high volumes. Siglake gives agents read-only query access to telemetry stored in the customer’s own object store, and Limnion reports AWS tests at 1 TB and 2.02 billion rows. Those tests support technical plausibility. Production relief remains unverified after a failed 72-hour endurance test, with failover and tenant isolation still awaiting qualification. (The Idea, Defensibility, Key Risks)

A production deployment is the unit of expansion. Independent scaling of ingestion, compaction, and queries gives Siglake a way to add capacity where needed. Buyer savings depend on storage, compute, migration, and operator time at equivalent reliability. Limnion’s margin would depend on whether the proposed managed service can command a price above its provisioning, support, and operating costs. Managed deployment is still in development, so both sides of that cost bridge remain unmeasured. (The Idea, Defensibility, Key Risks)

The Seattle-based launch-stage company is a plausible seed fit. Persen’s experience building observability products and the team’s shipment of v0.4.1 support execution. Repository stars and forks show developer interest, while buyer usage, qualification commitments, and willingness to pay remain unknown. (Founders & Team, Market & Traction, Key Facts)

### Countercase

With abundant capital, competitors can build on the same open formats and reuse Siglake’s permissively licensed code. Observe already overlaps on OpenTelemetry ingestion and customer-owned Iceberg storage. Customers retain control of the data, and switching costs from Siglake-specific streaming integrations remain hypothetical. Cheap frontier models could make investigations more frequent while leaving buyers free to use another telemetry backend. Path B remains unproven because the memo gives no evidence of a previously uneconomic investigation becoming viable through lower delivery labor, or of buyers preferring Limnion under model parity. The overlap weighs against durable capture and keeps Limnion below the outreach gate. Equivalent production performance and easy substitution remain untested, so a buyer trial can still change the action. (The Idea, Defensibility, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 11/25 |
| Durable value capture | 5/25 |
| Customer demand | 5/20 |
| Team and execution | 9/15 |
| Scale economics | 5/15 |

**Total Score: 35/100** (Pass)

### Decisive diligence question

Will an independent platform team commit to paying for managed Siglake after a side-by-side production trial against its best available alternative? The trial should show lower all-in cost for the same investigation workload at the buyer’s required reliability, followed by a paid commitment at a price that covers Limnion’s delivery costs. A positive result would justify rescoring for Reach out if it clears the outreach threshold. A credible alternative matching the result with easy switching, and the buyer declining to pay a viable price, would move the action to Pass.
