# Limnion -- Cyan Banister Evaluation

In 2032, I can imagine an engineering agent investigating an outage by querying telemetry the company owns, without asking an observability vendor for permission or accepting its retention economics. Limnion belongs somewhere underneath that behavior. Groundcover’s October 2026 launch of external-agent access is a small leak from this future. But machine access must become dependable investigation, and dependable investigation must earn permission to act. The dossier establishes the first transition; it does not establish the rest. “Agentic era” is a destination sign, not yet a map.

Why should changing the software that reads your logs require negotiating with the company that stores them? Siglake attacks that dependency directly: OpenTelemetry enters, and externally readable Parquet and Iceberg remain in customer-controlled object storage. The proprietary storage vendor loses some leverage; the engineering team gains the ability to change readers without migrating its history. That is a concrete transfer of control. There is no measured storage bill, migration delay, or customer saving here, so I cannot tell how expensive this particular cage is. Still, the mechanism earns more attention than a generic promise of cheaper observability.

Todd Persen is the strongest reason I would keep looking. Co-founding InfluxData and Era Software, selling Era to ServiceNow in 2022, and serving as Hydrolix CTO constitute repeated contact with the machinery Limnion must operate. His separate Rust compression implementation adds a tangible technical artifact beyond the résumé. This is substantial evidence of sustained commitment and commercial experience, although the dossier does not show how he recruited this team or which specific operating wound dictated Siglake’s design. Limnion fits my pattern of backing unglamorous repair beneath a visible technology wave: distributed SQL, WAL ingestion, compaction, and embedded search indexes are real implementation work. Apache-2.0 licensing spreads that work freely, however; it does not establish that Limnion controls a scarce dependency.

The objection to waiting is uncomfortable: an experienced database founder may be building exactly the enabling layer that deserves funding before customers arrive. Missing revenue does not disqualify that bet. But my pre-revenue exception requires other evidence to carry the conviction, and 577 stars with three forks, observed November 3, do not show someone repeatedly entrusting production operations to Siglake. The unsuccessful 72-hour soak attempt and outstanding failover, Kubernetes, and tenant-isolation qualification identify the distance still to travel. Documenting those limitations argues against the red flag of casually dismissing operating complexity. It does not make the system dependable. Customer-controlled storage is directionally attractive for data custody, while unqualified isolation remains a concrete concern; the dossier supplies no affirmative evidence of deceptive leadership or broken founder governance.

I would keep my money uncommitted today. SigNoz already provides agent access, and groundcover already combines customer-cloud deployment with a broader observability product. Limnion must turn its open storage architecture into something customers will pay this team to operate despite those alternatives. My one verifiable flip condition is a documented cohort of two independent customers renewing paid production deployments after at least 90 days, with isolation and failover qualification completed. That would connect Persen’s considerable operating history to costly customer behavior. Today, I see a credible builder and a useful freedom-restoring architecture, with insufficient evidence that users need this particular company to deliver it.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Maps a Six-Year Future to One Present-Day Leak | 14/31 |
| Founder Biography Shows Pre-Company Obsession and First-Believer Proof | 20/24 |
| Dossier Names a Broken Rule, Its Rent, and the Agency Returned | 12/19 |
| Working Artifact Elicits Costly or Weird User Behavior | 4/15 |
| Product Sits Beneath Today?s Hype as an Enabling Layer | 8/11 |
| **Total** | **58/100** |

**Total Score: 58/100** (Neutral)
