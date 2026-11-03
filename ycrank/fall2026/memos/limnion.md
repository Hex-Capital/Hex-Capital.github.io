# Limnion

> Telemetry storage for the agentic era.

| Field | Value |
|-------|-------|
| Website | https://limnion.ai |
| YC Page | https://www.ycombinator.com/companies/limnion |
| Batch | Fall 2026 ([YC directory](https://www.ycombinator.com/companies/industry/infrastructure), Nov 2026) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 3 |
| Location | Seattle, WA, USA; Remote |
| Tags | Open Source, Infrastructure, Databases |
| YC Partner | Not listed; individual YC profile text was not retrievable |
| Emails | No public data found |

## The Idea

- **Problem:** Engineering teams managing logs and traces at scale face proprietary telemetry storage and vendor lock-in, with Limnion’s investor positioning the product as a replacement for systems such as Splunk ([Array Ventures](https://www.array.vc/portfolio/limnion), accessed Nov 2026).
- **Approach:** Siglake ingests OpenTelemetry logs and traces, writes Parquet files into Iceberg tables on customer-controlled object storage, and queries them through a Rust/DataFusion SQL layer ([Siglake documentation](https://docs.siglake.dev/)).
- **Differentiation:** Siglake provides externally readable Iceberg storage, while SigNoz uses ClickHouse for its integrated observability backend and groundcover combines BYOC storage with eBPF collection and application monitoring ([Siglake](https://docs.siglake.dev/), [SigNoz](https://signoz.io/), [groundcover](https://www.groundcover.com/news/groundcover-raises-100-million-series-c)).
- **Business Model:** [Inferred]: Commercialization could center on managing Siglake within customers’ cloud accounts, because the company advertises an open-source core and a BYOC platform in development; published prices: No public data found ([Limnion](https://limnion.ai/)).
- **TAM/SAM:** The broader observability tools and platforms market is estimated at $11.91B in 2026, reaching $22.99B by 2031 at 14.1% CAGR; telemetry-storage-specific TAM/SAM: No public data found ([MarketsandMarkets, Jul 2026](https://www.marketsandmarkets.com/blog/ICT/observability-tools-and-platforms-market)).
- **GTM / Distribution:** [Inferred]: Developer adoption through the public repository and self-hosted installation could feed demand for the planned managed offering ([GitHub](https://github.com/siglake/siglake), [Limnion](https://limnion.ai/)).

## Defensibility

- **Moat today:** Technical implementation includes distributed SQL, WAL-based ingestion, compaction, and search indexes embedded in Parquet files and sidecars; these are documented engineering assets ([Siglake documentation](https://docs.siglake.dev/)).
- **Future moat:** [Inferred]: Operational expertise running customer-cloud deployments could accumulate through managed service delivery, but that offering remains in development ([Limnion](https://limnion.ai/)).
- **Market structure:** [Inferred]: No structural barrier identified at this stage, because the implementation is Apache-2.0 licensed and its storage formats support external readers ([Siglake documentation](https://docs.siglake.dev/)).
- **Commoditization risk:** [Inferred]: Other observability vendors or cloud operators could reuse the permissively licensed implementation, while SigNoz already offers agent access to telemetry through MCP ([Siglake repository](https://github.com/siglake/siglake), [SigNoz](https://signoz.io/)).

## Market & Traction

- **Traction signals:**
  - Siglake repository: 577 stars and 3 forks ([GitHub](https://github.com/siglake/siglake), observed Nov 3, 2026).
  - Backers displayed: Array Ventures, Foundation Capital, and Y Combinator; investment amounts: No public data found ([Limnion](https://limnion.ai/), accessed Nov 2026).
- **Competitors:**
  - **SigNoz ($6.5M raised, revenue unknown):** Latest disclosed financing comprised a $5.4M round led by SignalFire in September 2023; its ClickHouse-backed platform includes metrics, logs, traces, dashboards, and alerts, versus Siglake’s storage-and-query scope ([funding announcement](https://signoz.io/blog/signoz-funding/), [round date](https://www.cbinsights.com/company/signoz/financials), [product](https://signoz.io/)).
  - **Hydrolix (at least $148M disclosed financing, revenue unknown):** Its $80M Series C, announced April 3, 2025, was led by QED Investors, following $68M previously disclosed; it sells a streaming data platform with CDN analytics and security offerings, versus Siglake’s open-source telemetry storage core ([Series B](https://hydrolix.io/press/hydrolix-closes-35m-series-b-amid-10x-growth-for-streaming-data-lake-offering/), [Series C](https://hydrolix.io/press/hydrolix-closes-80-million-series-c-to-control-ballooning-log-data-storage-cost-and-boost-analytics-performance-in-the-ai-age-2/), [platform](https://hydrolix.io/platform/)).
  - **groundcover ($160M raised, revenue unknown):** Its $100M Series C, announced July 29, 2026, was led by One Peak; its BYOC platform includes eBPF instrumentation and full-stack observability, overlapping Limnion’s planned customer-cloud deployment model ([groundcover announcement](https://www.groundcover.com/news/groundcover-raises-100-million-series-c)).
- **Why now:** [Inferred]: Agent-driven incident investigation creates demand for machine-accessible telemetry, illustrated by groundcover’s October 2026 launch enabling external coding agents to query production data or delegate investigations ([groundcover news](https://www.groundcover.com/news)).

## Founders & Team

- **Todd Persen (Founder):**
  - Background: Holds bachelor’s and master’s degrees in electrical engineering from the University of Central Florida and an MBA from the University of Florida, co-founded InfluxData and Era Software, and subsequently served as Hydrolix CTO; ServiceNow acquired Era Software in 2022 for an undisclosed amount ([author biography, via search snippet](https://thenewstack.io/author/todd-persen/), [Array Ventures](https://www.array.vc/portfolio/limnion), [GeekWire, Jan 2025](https://www.geekwire.com/2025/tech-moves-microsoft-chip-vp-goes-to-google-wtia-gets-exec-chair-era-software-founder-departs/)).
  - Twitter/X: @toddpersen, linked from his GitHub profile; count not retrievable ([GitHub profile](https://github.com/toddboom)).
  - LinkedIn: Profile found at `/in/toddpersen`, with Hydrolix listed as employer and 2K followers; headline not retrievable ([LinkedIn, via search snippet](https://www.linkedin.com/in/toddpersen)).
  - GitHub: @toddboom; featured repository `tsx.rs`, a Rust time-series compression implementation, has 35 stars ([GitHub profile](https://github.com/toddboom), observed Nov 3, 2026).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Persen’s documented work spans time-series databases, log management, and streaming analytics through InfluxData, Era Software, and Hydrolix, while Limnion identifies Array Ventures, Foundation Capital, and YC as backers ([Array Ventures](https://www.array.vc/portfolio/limnion), [Limnion](https://limnion.ai/)).

## Key Risks

- **Production qualification gaps:** Siglake’s current limitations document an unsuccessful 72-hour soak attempt and missing live Kubernetes/operator, tenant-isolation, and multi-replica failover qualification, while distinguishing completed smoke tests from those outstanding checks ([Siglake limitations](https://docs.siglake.dev/about/limitations/)).
- **Integration burden:** [Inferred]: Customers seeking a complete observability replacement must integrate additional systems because Siglake delegates dashboards and trace exploration to Grafana/Jaeger and alert evaluation and notifications to external tools ([Siglake product scope](https://docs.siglake.dev/)).
- **Competitive replication:** [Inferred]: Apache-2.0 licensing permits competing implementations or managed services, and existing vendors already provide overlapping customer-cloud deployment and agent-facing telemetry interfaces ([Siglake repository](https://github.com/siglake/siglake), [groundcover](https://www.groundcover.com/news/groundcover-raises-100-million-series-c), [SigNoz](https://signoz.io/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader observability market proxy: $11.91B in 2026, $22.99B by 2031, 14.1% CAGR ([MarketsandMarkets, Jul 2026](https://www.marketsandmarkets.com/blog/ICT/observability-tools-and-platforms-market)) |
| SAM | No public data found |
| Traction | Siglake: 577 GitHub stars, 3 forks ([GitHub, Nov 3, 2026](https://github.com/siglake/siglake)); Array Ventures, Foundation Capital, YC backing displayed ([Limnion, Nov 2026](https://limnion.ai/)) |
| Revenue Signal | No public data found |
| Founders | Todd Persen (Founder): InfluxData co-founder/CTO, Era Software co-founder/CEO, former Hydrolix CTO ([Array Ventures](https://www.array.vc/portfolio/limnion)) |
| Competitors | SigNoz ($6.5M raised, revenue unknown, integrated ClickHouse observability; [SigNoz funding](https://signoz.io/blog/signoz-funding/), [product](https://signoz.io/)); Hydrolix (at least $148M disclosed financing, revenue unknown, streaming/CDN analytics; [Series B](https://hydrolix.io/press/hydrolix-closes-35m-series-b-amid-10x-growth-for-streaming-data-lake-offering/), [Series C](https://hydrolix.io/blog/series-c/), [platform](https://hydrolix.io/platform/)); groundcover ($160M raised, revenue unknown, eBPF/BYOC full-stack observability; [company announcement, Jul 2026](https://www.groundcover.com/news/groundcover-raises-100-million-series-c)) |
| Moat Signals | Distributed SQL, WAL ingestion, compaction, embedded search indexes ([Siglake documentation](https://docs.siglake.dev/)) |
| Risk Factors | Incomplete production qualification ([Siglake limitations](https://docs.siglake.dev/about/limitations/)), external dashboard/alerting dependencies ([Siglake scope](https://docs.siglake.dev/)), permissive licensing ([GitHub](https://github.com/siglake/siglake)) |
| Founder Reach | Todd Persen: LinkedIn 2K followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/toddpersen)); GitHub `tsx.rs` 35 stars ([GitHub, Nov 3, 2026](https://github.com/toddboom)) |
| Distribution Signals | Public open-source repository with 577 stars ([GitHub, Nov 3, 2026](https://github.com/siglake/siglake)) |
| Emails | No public data found |
