# Limnion -- Vinod Khosla Evaluation

Limnion could make proprietary telemetry storage unnecessary. That is a meaningful architectural change: ingest OpenTelemetry, store Parquet in customer-controlled Iceberg tables, and let external engines read the data. But what becomes ten times cheaper or newly possible? The dossier supplies an $11.91 billion observability market estimate for 2026, not the spending Limnion can eliminate or the additional telemetry customers could afford to retain. I can see the mechanism for escaping lock-in. I cannot yet calculate the consequence of success.

Siglake contains substantial engineering: WAL-based ingestion, distributed SQL, compaction, and search indexes embedded in Parquet files and sidecars. This earns more attention than an agent interface attached to an existing database. Against Splunk’s proprietary storage model, externally readable tables offer a concrete capability difference. The missing evidence is whether that architecture preserves useful query performance while collapsing total cost. SigNoz already offers ClickHouse-backed observability, and groundcover combines BYOC deployment with a broader monitoring product. Open formats establish portability; they do not establish a 5–10x technical advantage.

Todd Persen is the strongest reason to challenge a pass. He co-founded InfluxData and Era Software, sold Era to ServiceNow in 2022, and served as Hydrolix CTO. He has encountered this problem through several architectures and businesses. My actual investing patterns allow execution-heavy infrastructure and small open-source teams to become consequential platforms. Limnion’s three-person team and 577 GitHub stars make that possibility credible enough to investigate. But three forks do not establish a committed technical community, and the biography documents neither a material belief revised after evidence nor complementary recruits brought in to remove specific risks. The exceptions for an exceptional instigator addressing a giant value pool remain possible; this dossier does not establish the outsized consequence needed to invoke them.

The unsuccessful 72-hour soak attempt is more useful than another feature announcement. It puts production reliability under an actual test, and distinguishing completed smoke tests from outstanding qualification shows engineering discipline. Failure at pre-seed is acceptable. What matters is what the next dollar resolves. Kubernetes operation, tenant isolation, and multi-replica failover remain unqualified; the dossier supplies no costed sequence or stop conditions for closing those gaps. Meanwhile, permissive licensing lets competitors reuse the implementation, so dependable operation could become the commercial advantage. Limnion must first demonstrate that capability before treating managed deployment as its business.

I would pass with my own money today. There is no evidence of the advertising, exit-first, or generic AI-wrapper red flags; the concern is insufficient demonstrated leverage. Published pricing and a bottom-up cost model are absent, and external dashboard and alerting dependencies belong in the customer’s total bill. My one verifiable flip condition is an independently reproducible production benchmark showing at least 10x lower all-in cost than Splunk on the same representative workload, at matched query latency and durability, sustained for 30 days with labor and integration costs included. That would connect the architecture to an economic discontinuity. Until then, Limnion has a credible builder and a serious implementation, but the option’s extraordinary payoff remains unproven.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Quantifies a 100x Societal Consequence from a 10%-Likely Breakthrough | 7/31 |
| Product Benchmarks a 5?10x Technical Discontinuity Against a Named Incumbent | 9/24 |
| Milestones Spend Dollars Against the Largest Named Kill Risk First | 6/18 |
| Founder Record Shows Fast Belief Revision and Risk-Tuned Magnet Recruiting | 5/15 |
| Scale Model Reaches Unsubsidized Chindia-Price Parity | 3/12 |
| **Total** | **30/100** |

**Total Score: 30/100** (Pass)
