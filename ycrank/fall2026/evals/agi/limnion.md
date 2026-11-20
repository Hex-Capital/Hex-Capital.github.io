# Limnion -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

The strongest path is **scarce complements**. If incident-investigation agents materially increase queries against logs and traces, reliable, affordable access to that telemetry becomes more valuable. Limnion says high telemetry volumes are already raising costs for platform teams. Siglake gives agents read-only query access to telemetry in the customer’s object store, and company-run AWS tests covered 1 TB and 2.02 billion rows. Those tests support technical feasibility at that volume. The cost and reliability of production agent workloads remain unmeasured in the memo. (*The Idea*, *Defensibility*)

Siglake’s independently scalable ingestion, compaction, and query services give Limnion a plausible operating advantage. Its ability to turn that design into a paid service remains untested. The expansion unit would be one managed deployment in a customer’s cloud account, with economics driven by storage and compute at the customer’s ingest and query volumes, plus Limnion’s deployment and support labor. Managed deployment is still in development, and the memo gives no pricing or operating costs. The repository’s 854 stars show developer interest, while paid pilots, production commitments, and repeat use are undocumented. (*The Idea*, *Defensibility*, *Market & Traction*)

Todd Persen’s experience building InfluxDB and co-founding Era Software, together with the shipped Siglake release, supports execution at this stage. The failed 72-hour endurance test and pending failover and tenant-isolation qualification leave a specific production-readiness gap. (*Founders & Team*, *Market & Traction*, *Key Risks*)

### Countercase

Agent-facing telemetry access may be a feature that incumbents can bundle. Observe’s preview already combines OpenTelemetry ingestion with Iceberg storage in the customer’s account, and Siglake’s Apache-2.0 license permits code reuse. That overlap weakens the scarcity case. Whether Observe or another alternative can match Siglake on cost and reliability for the same production workload is still testable, so the decision gate supports Watch. The New Economies path lacks independent support: the memo identifies no previously excluded buyer or use made viable by lower labor cost per successful investigation, and no reason that buyer would keep paying Limnion under model parity. (*The Idea*, *Defensibility*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 11/25 |
| Durable value capture | 7/25 |
| Customer demand | 5/20 |
| Team and execution | 10/15 |
| Scale economics | 4/15 |

**Total Score: 37/100** (Pass)

### Decisive diligence question

Will an independent platform team choose and pay for managed Siglake after a production comparison with Observe or another credible alternative using the same telemetry and incident-agent workload? Move to Reach out if the team documents a sustained, material cost advantage at comparable reliability and signs at a price that covers Limnion’s deployment and support costs. Move to Pass if the comparison shows ready substitution and the buyer sees no reason to pay Limnion.
