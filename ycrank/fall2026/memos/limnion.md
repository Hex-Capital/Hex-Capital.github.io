# Limnion

> Telemetry storage for the agentic era.

| Field | Value |
|-------|-------|
| Website | https://limnion.ai |
| YC Page | https://www.ycombinator.com/companies/limnion |
| Batch | Fall 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 3 |
| Location | Seattle, WA, USA; Remote |
| Tags | Open Source, Infrastructure, Databases |
| YC Partner | Andrew Miklas ([Y Combinator company profile](https://www.ycombinator.com/companies/limnion)) |
| Emails | todd@limnion.ai, Todd Persen, founder and CEO ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/WhD-limnion-telemetry-storage-built-for-the-agentic-era)) |

## The Idea

- **Problem:** Limnion says site reliability and platform teams using tools such as Splunk face rising costs at high telemetry volumes and need a way to give incident-investigation agents direct access to logs and traces ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/WhD-limnion-telemetry-storage-built-for-the-agentic-era), [Array Ventures](https://www.array.vc/portfolio/limnion)).
- **Approach:** Siglake ingests logs and traces over OpenTelemetry, writes Parquet files into Iceberg tables in the customer’s object store, and exposes them to agents through DataFusion SQL and a read-only MCP server ([Siglake GitHub](https://github.com/siglake/siglake)).
- **Differentiation:** Siglake provides a self-hosted DataFusion backend on customer-owned Iceberg tables, while Snowflake’s Observe offers managed Iceberg tables, ClickStack uses the ClickHouse database with a HyperDX interface, and OpenObserve bundles S3-native storage with dashboards, alerts, and incident management ([Siglake](https://siglake.dev/), [Snowflake, Jul 2026](https://www.snowflake.com/en/blog/observe-apache-iceberg-open-observability/), [ClickStack](https://clickhouse.com/clickstack), [OpenObserve, Apr 2026](https://openobserve.ai/blog/series-a-announcement/)).
- **Business Model:** Self-hosted Siglake has no per-gigabyte software license fee, and Limnion lists managed deployment in the customer’s cloud account as in development ([Siglake](https://siglake.dev/), [Limnion](https://limnion.ai/)).
- **TAM/SAM:** MarketsandMarkets estimates the broader observability tools and platforms market at $11.91B in 2026 and $22.99B in 2031, a 14.1% CAGR, with no public SAM estimate found for agent-facing telemetry storage ([MarketsandMarkets, 2026](https://www.marketsandmarkets.com/Market-Reports/observability-tools-and-platforms-market-69804486.html)).
- **GTM / Distribution:** Limnion distributes Siglake through GitHub and publishes Docker and Helm setup guides, while its YC launch invites prospective users to contact the founder directly ([Siglake GitHub](https://github.com/siglake/siglake), [Launch YC, Nov 2026](https://www.ycombinator.com/launches/WhD-limnion-telemetry-storage-built-for-the-agentic-era)).

## Defensibility

- **Moat today:** Siglake’s documented engineering includes independently scalable ingestion, compaction, and query services, with company-run AWS tests covering 1 TB and 2.02 billion rows ([Siglake GitHub](https://github.com/siglake/siglake), [Siglake documentation](https://docs.siglake.dev/about/)).
- **Future moat:** [Inferred]: Integrations built against Siglake’s streaming interface could make its deployment harder to replace, but production adoption of that interface has no public data ([Siglake GitHub](https://github.com/siglake/siglake)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Snowflake already offers OpenTelemetry ingestion and Iceberg storage in a customer-owned bucket through Observe, and Siglake’s Apache-2.0 license permits competitors to reuse its code ([Snowflake, Jul 2026](https://www.snowflake.com/en/blog/observe-apache-iceberg-open-observability/), [Siglake GitHub](https://github.com/siglake/siglake)).

## Market & Traction

- **Traction signals:**
  - Siglake repository reached 854 stars and 11 forks ([GitHub, Nov 17, 2026](https://github.com/siglake/siglake)).
  - Limnion launched publicly on YC on Nov 5, 2026 ([Launch YC](https://www.ycombinator.com/launches/WhD-limnion-telemetry-storage-built-for-the-agentic-era), [Raised, Nov 13, 2026](https://raisednews.com/article/limnion-agent-first-telemetry/)).
  - Siglake v0.4.1 shipped on Nov 9, 2026 ([GitHub Releases](https://github.com/siglake/siglake/releases)).
  - Raised covered the Siglake launch ([Raised, Nov 13, 2026](https://raisednews.com/article/limnion-agent-first-telemetry/)).
  - CB Insights reports a $500K convertible note dated Nov 1, 2026 ([CB Insights financials, via search snippet](https://www.cbinsights.com/company/limnion/financials)).
  - YC lists zero open roles ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/limnion/jobs)).
- **Competitors:**
  - **Observe, now part of Snowflake** (nearly $500M raised as reported by Axios, revenue unknown): Offers Snowflake-managed Iceberg on customer-owned storage and last announced a $156M Series C led by Sutter Hill Ventures in July 2025 before Snowflake closed the acquisition in February 2026 ([Axios, Jan 2026](https://www.axios.com/newsletters/axios-pro-rata-74d0f5-4b6f-4e76-85ee-6ba6bca8538f), [Observe, Jul 2025, via search snippet](https://www.observeinc.com/news-pr/observe-closes-156-million-series-c-as-enterprises-shift-to-ai-powered-observability-at-scale), [Snowflake SEC filing](https://www.sec.gov/Archives/edgar/data/1640147/000164014726000008/snow-20260131.htm), [Snowflake product announcement](https://www.snowflake.com/en/blog/observe-apache-iceberg-open-observability/)).
  - **ClickHouse / ClickStack** (over $1.05B raised, over $350M in companywide annualized revenue): Pairs the ClickHouse database with HyperDX and raised a $400M Series D led by Dragoneer in January 2026 ([ClickHouse Series C](https://clickhouse.com/blog/clickhouse-raises-350-million-series-c-to-power-analytics-for-ai-era), [Series D](https://clickhouse.com/blog/clickhouse-raises-400-million-series-d-acquires-langfuse-launches-postgres), [ClickHouse, Sep 2026](https://clickhouse.com/blog/clickhouse-appoints-mike-scarpelli-to-board-of-directors), [ClickStack](https://clickhouse.com/clickstack)).
  - **OpenObserve** ($13.6M raised per aVenture, revenue unknown): Bundles S3-native telemetry storage with dashboards, alerting, and an incident-response agent, and raised a $10M Series A co-led by Nexus Venture Partners and Dell Technologies Capital in April 2026 ([aVenture, Oct 2026](https://aventure.vc/companies/openobserve-san-francisco-ca-us/fundraising), [OpenObserve, Apr 2026](https://openobserve.ai/blog/series-a-announcement/)).
  - **Dash0** ($155M raised, revenue unknown): Bundles an OpenTelemetry backend with Agent0 for incident diagnosis and remediation, and raised a $110M Series B led by Balderton Capital in March 2026 ([Dash0, Mar 2026](https://www.dash0.com/blog/dash0-raises-usd110m-series-b)).
- **Why now:** [Inferred]: OpenTelemetry’s CNCF graduation in May 2026 reduces integration friction for Siglake because teams with existing collectors can redirect them to its native ingestion endpoints ([CNCF, May 2026](https://www.cncf.io/announcements/2026/05/21/cloud-native-computing-foundation-announces-opentelemetrys-graduation-solidifying-status-as-the-de-facto-observability-standard/), [Siglake GitHub](https://github.com/siglake/siglake)).

## Founders & Team

- **Todd Persen (Founder and CEO):**
  - Background: Persen holds bachelor’s and master’s degrees in electrical engineering from the University of Central Florida and an MBA from the University of Florida, co-founded InfluxData and Era Software, led observability at Pivotal, served as Hydrolix CTO, and publishes todd@limnion.ai for Limnion inquiries ([Hydrolix, Jan 2025](https://www.prnewswire.com/news-releases/todd-persen-joins-hydrolix-as-cto-hasan-alayli-assumes-new-role-302351817.html), [Launch YC, Nov 2026](https://www.ycombinator.com/launches/WhD-limnion-telemetry-storage-built-for-the-agentic-era)).
  - Twitter/X: @toddpersen, 648 followers ([public X mirror, Nov 2026](https://www.nitter.cf/toddpersen)).
  - LinkedIn: No public data found for the headline, and the indexed profile lists Hydrolix with 2,477 followers shown on a separate post snapshot ([LinkedIn profile and post, via search snippets](https://www.linkedin.com/posts/toddpersen_observability-friends-im-excited-to-announce-activity-7285328836274069505-NITL)).
  - GitHub: @toddboom, with 17 stars on `tsx.rs`, a Rust library for time-series compression ([GitHub](https://github.com/toddboom)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Persen helped build InfluxDB and co-founded log-management company Era Software, which ServiceNow acquired in October 2022, and Limnion lists Array Ventures, Foundation Capital, and Y Combinator as backers ([ServiceNow, Oct 2022](https://s205.q4cdn.com/537566246/files/doc_news/ServiceNow-to-Acquire-Observability-Innovator-Era-Software-Helping-Businesses-Turn-Data-Driven-Insights-into-Action-10-05-2022-12-00-AM-2022.pdf), [Limnion](https://limnion.ai/)).

## Key Risks

- **Incumbent overlap:** Snowflake’s Observe on Iceberg preview already combines OpenTelemetry ingestion with customer-owned storage readable by other Iceberg engines ([Snowflake, Jul 2026](https://www.snowflake.com/en/blog/observe-apache-iceberg-open-observability/)).
- **Migration work:** Siglake accepts Elasticsearch bulk writes, but existing Kibana and Elasticsearch search clients require replacement with SQL or another supported interface ([Siglake limitations](https://docs.siglake.dev/about/limitations/#elasticsearch-bulk-api-support-is-write-only)).
- **Production validation:** The v0.4.1 release passed bounded single-node smoke tests, while its notes record a failed 72-hour endurance test and pending qualification for multi-replica failover and tenant isolation ([GitHub Releases, Nov 2026](https://github.com/siglake/siglake/releases)).
- **Name collision:** Swiss water research institute Eawag also uses Limnion for a research building, so name-only searches can surface unrelated records ([Eawag](https://www.eawag.ch/fileadmin/Domain1/Infoportal/publ/wasserwandel/Eawag_ChangesinWater_web.pdf)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader observability tools and platforms market of $11.91B in 2026, projected to reach $22.99B in 2031 at 14.1% CAGR ([MarketsandMarkets, 2026](https://www.marketsandmarkets.com/Market-Reports/observability-tools-and-platforms-market-69804486.html)) |
| SAM | No public data found |
| Traction | 854 stars and 11 forks ([GitHub, Nov 17, 2026](https://github.com/siglake/siglake)), launch coverage ([Raised, Nov 13, 2026](https://raisednews.com/article/limnion-agent-first-telemetry/)), zero YC job postings ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/limnion/jobs)) |
| Revenue Signal | Self-hosted Siglake carries no per-GB license fee ([Siglake product page, Nov 2026](https://siglake.dev/)) |
| Founders | Todd Persen (Founder and CEO): InfluxData co-founder, Era Software co-founder, former Hydrolix CTO ([Array Ventures](https://www.array.vc/portfolio/limnion)) |
| Competitors | Observe (nearly $500M raised, revenue unknown, Snowflake-managed Iceberg) ([Axios, Jan 2026](https://www.axios.com/newsletters/axios-pro-rata-74d0f5-4b6f-4e76-85ee-6ba6bca8538f), [Snowflake, Jul 2026](https://www.snowflake.com/en/blog/observe-apache-iceberg-open-observability/)), ClickHouse (over $1.05B raised, over $350M annualized revenue, ClickHouse and HyperDX stack) ([Series C](https://clickhouse.com/blog/clickhouse-raises-350-million-series-c-to-power-analytics-for-ai-era), [Series D](https://clickhouse.com/blog/clickhouse-raises-400-million-series-d-acquires-langfuse-launches-postgres), [ClickHouse, Sep 2026](https://clickhouse.com/blog/clickhouse-appoints-mike-scarpelli-to-board-of-directors), [ClickStack](https://clickhouse.com/clickstack)), OpenObserve ($13.6M raised, revenue unknown, bundled incident management) ([aVenture](https://aventure.vc/companies/openobserve-san-francisco-ca-us/fundraising), [OpenObserve](https://openobserve.ai/blog/series-a-announcement/)), Dash0 ($155M raised, revenue unknown, Agent0 incident remediation) ([Dash0](https://www.dash0.com/blog/dash0-raises-usd110m-series-b)) |
| Moat Signals | Independently scalable storage engine components, company-run AWS validation at 1 TB and 2.02B rows ([Siglake GitHub](https://github.com/siglake/siglake), [Siglake documentation](https://docs.siglake.dev/about/)) |
| Risk Factors | Observe’s overlapping Iceberg offering ([Snowflake](https://www.snowflake.com/en/blog/observe-apache-iceberg-open-observability/)), Elasticsearch query migration ([Siglake limitations](https://docs.siglake.dev/about/limitations/#elasticsearch-bulk-api-support-is-write-only)), incomplete failover qualification ([GitHub Releases](https://github.com/siglake/siglake/releases)) |
| Founder Reach | Todd Persen: 648 X followers ([public X mirror, Nov 2026](https://www.nitter.cf/toddpersen)), 2,477 LinkedIn followers ([LinkedIn, via search snippet](https://www.linkedin.com/posts/toddpersen_observability-friends-im-excited-to-announce-activity-7285328836274069505-NITL)), 17 GitHub stars on `tsx.rs` ([GitHub](https://github.com/toddboom)) |
| Distribution Signals | Public Launch YC post (Nov 5, 2026) ([Launch YC](https://www.ycombinator.com/launches/WhD-limnion-telemetry-storage-built-for-the-agentic-era), [Raised](https://raisednews.com/article/limnion-agent-first-telemetry/)), public Siglake releases with Docker images and Helm instructions ([GitHub Releases, Nov 2026](https://github.com/siglake/siglake/releases)) |
| Emails | todd@limnion.ai, Todd Persen, founder and CEO ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/WhD-limnion-telemetry-storage-built-for-the-agentic-era)) |
