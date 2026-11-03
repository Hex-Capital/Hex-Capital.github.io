# Limnion -- Paul Graham Evaluation

The most useful fact about Limnion is that its 72-hour soak test failed. Here is an actual obstacle. What did the founders do next? The dossier does not say. Publishing the limitation is encouraging engineering practice, but it does not establish resourcefulness. I want the sequence: what broke, what Todd Persen changed, and how soon the system survived the same test. His previous companies cannot supply that missing sequence.

Persen has unusually relevant experience: co-founding InfluxData and Era Software, then serving as Hydrolix CTO. Era was acquired by ServiceNow in 2022. The strongest argument for investing is that someone who has repeatedly built in this field has now produced another substantial artifact. Siglake ingests OpenTelemetry data, stores Parquet in customer-controlled Iceberg tables, and exposes SQL through Rust and DataFusion. Its completed smoke tests earn technical credit. Its documented WAL, compaction, and indexing architecture make the project worth examining. But an unsuccessful soak and outstanding failover and tenant-isolation qualification limit what the artifact proves ([technical documentation](https://docs.siglake.dev/), [limitations](https://docs.siglake.dev/about/limitations/)). I can see software. I cannot yet see a dependable production system.

The interesting mechanism is that Limnion lets customers keep their telemetry independently readable. A customer could stop buying the service without having to liberate its data first. That fits my unstated preference for programmable infrastructure on which technical users can build. The difficult part is discovering who needs this badly enough to tolerate the unfinished product. There were 577 GitHub stars and three forks on November 3, 2026. Those establish attention, not repeated use. No named team is shown returning to Siglake, paying for it, or forcing the founders to support an unexpected workflow. Backing from Array Ventures, Foundation Capital, and YC does not answer that question either.

The bull case stings because Persen may already know precisely which customers to recruit. His background could let Limnion turn production qualification into a valuable managed service, with operational work becoming the business. Yet that remains a hypothesis. The BYOC offering is still in development; groundcover already sells customer-cloud observability, and SigNoz supplies a broader integrated product. Limnion must learn whether independent storage is a sufficiently urgent purchase to justify assembling dashboards and alerting around it. Persen’s history establishes domain context, but the dossier never connects a particular frustration he experienced to this product’s origin. Nor does it document a rejected hypothesis and subsequent route change. Those dimensions stay at their missing-evidence defaults.

I would pass on the current evidence. I see no demonstrated dependence on a big partner, premature delegation, or refusal to confront contrary results. The problem is that my principal founder test remains unanswered. I also checked the exceptions: a working prototype can outweigh some uncertainties, but Siglake’s current proof and unmeasured user pull do not replace evidence of action under resistance. My flip condition is one documented customer deployment in which a named engineering team’s production blocker leads the founders to ship a fix within weeks, followed by that team’s continued weekly use. That would connect the software, the founders, and a real need in one observable sequence.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 8/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 14/23 |
| A Named User Niche Pulls the Crude Product Back | 5/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 4/12 |
| **Total** | **37/100** |

**Total Score: 37/100** (Pass)
