# ObsessionDB -- Peter Thiel Evaluation

ObsessionDB’s strongest candidate for a secret is that replacing ClickHouse’s storage architecture can make continuous, high-volume queries substantially cheaper while preserving its useful engine. That proposition is testable. Numia’s reported reduction from approximately $8,000 to $2,000 per month on 200 TB provides an initial result. But the comparison is against BigQuery, whose scanned-byte pricing differs fundamentally. It does not establish that ObsessionDB knows something the upstream ClickHouse team rejects. The experiment that matters compares the competing storage architectures under the same workload, latency, and reliability requirements.

The founders are the strongest reason to investigate. All three previously worked at Numia; Höffl and Leuthardt also share Frens history. They are productizing infrastructure developed inside an operating business, rather than assembling a team around an attractive market forecast. This fits my less public preference for companies formed through established operator relationships. Their shared work earns substantial founding-structure credit. Ownership, full-time status, and economic exposure remain unverified; the dossier supplies no affirmative evidence of the part-time or convenience-matching red flags.

Can this team own the market it understands? SharedMergeTree and the distributed NVMe cache are actual proprietary components. They deserve more credit than a new interface on an unchanged database. Yet the initial segment—customers needing economical real-time analytics and APIs—is already served by ClickHouse, Tinybird, and others. No dominant subsegment, exclusive resource, or measured technical advantage establishes a monopoly mechanism. ClickHouse controls the upstream engine and already sells managed infrastructure. ObsessionDB must explain why its engineering advantage persists after that supplier recognizes the opportunity.

The strongest objection to my caution is that customers have already entrusted substantial workloads to this architecture. The launch describes a customer serving APIs over 50 TB and ingesting hundreds of thousands of events per minute; the CEO reports paying production customers and monthly petabyte processing. That is meaningful validation at pre-seed. My known exceptions permit customer behavior or a genuine technical breakthrough to override an apparent competitive weakness. Here, production use establishes usefulness, but neither the reported usage nor the affiliated Numia testimonial establishes durable superiority over the closest substitute. The exception does not yet remove the monopoly risk.

ObsessionDB has one coherent revenue engine: managed database capacity, with BYOC licensing extending the same product. The indicative $4,090 monthly configuration implies roughly $49,000 annually; 2,000 comparable customers would produce approximately $98 million in annual revenue before infrastructure costs. That makes a substantial business conceivable, although this configuration is not demonstrated average revenue and gross margins are undisclosed. Free workload audits, migration assistance, founder calls, and a $3,000 conversion incentive identify a concrete acquisition route. They do not yet establish repeatable sales economics. Inconsistent encryption disclosures and unsupported native backup operations could also increase migration and procurement work.

I would investigate ObsessionDB, but I would not write a check from this dossier. Its founders have earned credibility through shared production work; its market position has not earned comparable confidence. My single verifiable flip condition is a customer-verified comparison against ClickHouse Cloud demonstrating at least a tenfold improvement in cost per query at matched latency, durability, and recovery requirements. That would turn the proprietary storage layer into evidence of a potentially ownable technical position.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier States a Falsifiable Secret Named Peers Reject | 12/30 |
| Narrow Beachhead Already Exhibits One Monopoly Mechanism | 10/24 |
| All Core Founders Are Full-Time, Long-Aligned, and Economically Exposed | 14/18 |
| One Revenue Engine Can Plausibly Return the Fund | 8/16 |
| Named Distribution Route Fits Customer Economics | 6/12 |
| **Total** | **50/100** |

**Total Score: 50/100** (Neutral)
