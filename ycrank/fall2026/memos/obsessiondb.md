# ObsessionDB

> Real-time data warehouse for agents

| Field | Value |
|-------|-------|
| Website | https://obsessiondb.com |
| YC Page | https://www.ycombinator.com/companies/obsessiondb |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/obsessiondb)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 5 |
| Location | San Francisco, CA, USA |
| Tags | Analytics, Big Data, Databases |
| YC Partner | Christopher Golda ([Y Combinator](https://www.ycombinator.com/companies/obsessiondb)) |
| Emails | founders@obsessiondb.com, shared founder inbox ([Launch YC](https://www.ycombinator.com/launches/VpG-obsessiondb-a-real-time-data-warehouse-built-for-agents)); additional addresses on the [security page](https://obsessiondb.com/security) and [privacy policy](https://obsessiondb.com/privacy) were masked in the retrieved pages. |

## The Idea

- **Problem:** Data teams serving live APIs or analyzing agent traces can face costly warehouse scans and stale results when they use BigQuery for transformations and copy the output into Postgres for serving ([Launch YC](https://www.ycombinator.com/launches/VpG-obsessiondb-a-real-time-data-warehouse-built-for-agents), [Numia case study, Jun 2026](https://obsessiondb.com/blog/how-numia-cut-costs-75-percent-bigquery)).
- **Approach:** ObsessionDB replaces ClickHouse’s storage layer with shared object storage, stateless compute, and a distributed NVMe cache, with separate compute groups for ingestion, dashboards, and agents ([ObsessionDB Docs](https://obsessiondb.com/docs), [BYOC announcement, Oct 2026](https://obsessiondb.com/blog/byoc-clickhouse-in-your-cloud-account)).
- **Differentiation:** ObsessionDB uses its own cache and storage engine where ClickHouse Cloud uses SharedMergeTree, serves queries through native ClickHouse interfaces where Tinybird packages SQL as hosted API endpoints, and uses object storage for durable table data where Aiven describes tiering colder data to object storage ([ObsessionDB Docs](https://obsessiondb.com/docs), [ClickHouse Docs](https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/cloud/reference/02_architecture.md), [Tinybird](https://www.tinybird.co/product/query), [Aiven](https://aiven.io/clickhouse)).
- **Business Model:** Managed clusters bill separately for compute and compressed storage, the free developer tier includes up to 4 vCPU and 8 GB RAM, and bring-your-own-cloud deployment carries an annual license, operations, and support fee ([ObsessionDB Pricing, Nov 2026](https://obsessiondb.com/pricing)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** The company offers self-serve clusters, founder sales calls, free ClickHouse cost audits, and hands-on migrations for production workloads ([ObsessionDB](https://obsessiondb.com/), [Launch YC](https://www.ycombinator.com/launches/VpG-obsessiondb-a-real-time-data-warehouse-built-for-agents)).

## Defensibility

- **Moat today:** The proprietary storage layer combines a shared table engine, distributed cache, and locality-aware routing behind the ClickHouse SQL and client interfaces ([ObsessionDB Docs](https://obsessiondb.com/docs)).
- **Future moat:** [Inferred]: Cross-company datashares could create recurring dependencies on shared tables, with adoption unverified while the feature is documented as beta ([ObsessionDB Changelog, Jul 2026](https://obsessiondb.com/changelog/datashares)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** ClickHouse Cloud already separates compute from storage and offers customer-cloud deployment, while Altinity has released a shared-object-storage extension for MergeTree tables ([ClickHouse deployment docs](https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/cloud/features/05_infrastructure/deployment-options.md), [Altinity, Oct 2026](https://altinity.com/blog/introducing-cas-drop-in-compute-storage-separation-for-clickhouse-mergetree-tables)).

## Market & Traction

- **Traction signals**
  - Paying production customers and petabytes processed monthly, reported by CEO Rafael Aviles ([company LinkedIn, Oct 2026](https://www.linkedin.com/company/obsession-db)).
  - Millions of real-time API requests reported, with the largest customer migrating from Elasticsearch and serving APIs over 50 TB while ingesting hundreds of thousands of events per minute ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/VpG-obsessiondb-a-real-time-data-warehouse-built-for-agents)).
  - Customer testimonial: Osmosis moved its data API from Tinybird in September and reduced annual operating cost from about $60,000 to $30,000, with 13 million API requests in the 30 days through October 28 ([ObsessionDB Osmosis case study, Oct 2026](https://obsessiondb.com/blog/migrate-from-tinybird-to-obsessiondb-osmosis)).
  - Customer testimonial: Numia, the founders’ prior company, reported a 75% cost reduction after moving a 200 TB workload from BigQuery ([ObsessionDB Numia case study, Jun 2026](https://obsessiondb.com/blog/how-numia-cut-costs-75-percent-bigquery)).
  - dYdX, Range, Blockworks, Dune, ZIGChain, Artemis, and Binary Builders listed as production users ([ObsessionDB homepage, Nov 2026](https://obsessiondb.com/)).
  - Managed ClickHouse product announced in January and agent warehouse positioning launched October 20 ([ObsessionDB announcement, Jan 2026](https://obsessiondb.com/blog/announcement), [company X via Teapawt, Oct 2026](https://www.teapawt.net/obsessiondb)).
  - YC Fall 2026 participation, with no public financing amount found ([Y Combinator](https://www.ycombinator.com/companies/obsessiondb)).
  - Product review published by Anchor Terminal ([Anchor Terminal, Oct 2026](https://www.anchorterminal.com/tools/obsessiondb)).
  - 610 LinkedIn followers, 209 X followers, 46 stars for CHKit, and zero open YC jobs ([company LinkedIn](https://www.linkedin.com/company/obsession-db), [X via Teapawt](https://www.teapawt.net/obsessiondb), [GitHub](https://github.com/obsessiondb/chkit), [YC Jobs](https://www.ycombinator.com/companies/obsessiondb/jobs), Nov 2026).
  - Separate side project Rudel, later Opaline, recorded a #5 daily finish for its Usage Trading Cards launch and 310 stars on the successor CLI repository ([Product Hunt, May 2026](https://www.producthunt.com/products/rudel?launch=claude-code-codex-usage-trading-cards-by-rudel), [GitHub, Nov 2026](https://github.com/opalinehq/cli)).
- **Competitors**
  - **ClickHouse** (about $1.05B disclosed, over $350M annualized revenue in September 2026): upstream vendor with SharedMergeTree and its own agent service, backed by a $400M Dragoneer-led Series D in January 2026 and a subsequent extension of undisclosed size ([ClickHouse funding history](https://clickhouse.com/company/our-story), [September disclosure](https://clickhouse.com/blog/clickhouse-appoints-mike-scarpelli-to-board-of-directors), [ClickHouse Agents](https://clickhouse.com/blog/clickhouse-tops-250m-arr-and-4000-customers)).
  - **Tinybird** ($70M raised, revenue unknown): packages SQL as hosted APIs, with a $30M Balderton-led Series B announced in June 2024 ([CB Insights](https://www.cbinsights.com/company/tinybird-1/financials), [Balderton](https://www.balderton.com/news/tinybird-secures-30-million-series-b-to-expand-real-time-data-analytics-platform/), [Tinybird Docs](https://www.tinybird.co/docs/forward/guides/share-endpoint-documentation)).
  - **Aiven** ($420M raised, over $100M companywide ARR in July 2025): offers managed ClickHouse alongside Kafka and Postgres, with a $210M Eurazeo-led Series D in May 2022 ([Aiven funding total](https://aiven.io/press/aiven-acquires-eversql), [Series D](https://aiven.io/press/Aiven-raises-210M-to-invest-in-sustainable-open-source-cloud), [ARR](https://aiven.io/blog/aiven-surpasses-100m-arr), [product](https://aiven.io/clickhouse)).
  - **Altinity** ($4M disclosed, revenue unknown): offers Kubernetes-based ClickHouse operations and a shared-storage extension, raised an Accel seed in October 2020, and was acquired by EnterpriseDB in November 2026 ([Altinity financing](https://altinity.com/press-releases/altinity-introduces-altinity-cloud-and-secures-4m-in-funding-from-accel), [Altinity storage](https://altinity.com/blog/introducing-cas-drop-in-compute-storage-separation-for-clickhouse-mergetree-tables), [EnterpriseDB](https://www.enterprisedb.com/press-releases/edb-acquires-altinity-bring-together-two-leading-open-source-databases-advancing-its)).
- **Why now:** [Inferred]: Agent-driven query volume creates demand for isolated compute, with MotherDuck reporting that MCP-agent queries outnumbered human UI queries by 29× in its latest monthly comparison ([MotherDuck, Sep 2026](https://motherduck.com/blog/agents-dont-query-like-humans-do/)).

## Founders & Team

- **Rafael Aviles (Co-founder and CEO):**
  - Background: Attended Humboldt University and TU Berlin, worked at Localytics and Tapglue, and reported reaching $1.5M ARR and 5B monthly API requests at prior company Numia ([YC founder profile](https://www.ycombinator.com/founders/rafael-aviles), [Numia](https://www.linkedin.com/company/numiadata)); direct email: No public data found.
  - Twitter/X: @avilesrafa, 370 followers ([X via Teapawt, Nov 2026](https://www.xitter.cf/avilesrafa)).
  - LinkedIn: “ObsessionDB (YC F26)” affiliation, 2K followers ([LinkedIn, Oct 2026](https://www.linkedin.com/in/avilesco)).
  - GitHub: @avilesrafa, `Pixel-Verse` with 0 stars ([GitHub, Nov 2026](https://github.com/avilesrafa/Pixel-Verse)).
- **Marc Höffl (Co-founder and CTO):**
  - Background: Earned master’s degrees at KTH and TU Berlin, led engineering at Localytics and Numia, and previously founded Laserfocus and Frens, which Swyke acquired ([YC founder profile](https://www.ycombinator.com/founders/marc-hoffl), [CTO bio via Teapawt](https://teapawt.net/marchoeffl)); direct email: No public data found.
  - Twitter/X: @marchoeffl, 413 followers ([X via Teapawt, Nov 2026](https://teapawt.net/marchoeffl)).
  - LinkedIn: “ObsessionDB (YC F26)” affiliation, 3,416 followers ([LinkedIn, Oct 2026](https://de.linkedin.com/in/marchoeffl)).
  - GitHub: @KeKs0r, `mqtt-react` with 48 stars ([GitHub, Nov 2026](https://github.com/KeKs0r/mqtt-react)).
- **Marc Leuthardt (Co-founder):**
  - Background: Studied chemistry and economics at Kiel University and co-founded Numia, Lokalportal, and Frens, which Swyke acquired ([YC founder profile](https://www.ycombinator.com/founders/marc-leuthardt)); direct email: No public data found.
  - Twitter/X: @marcmacmac, 54 followers ([X via Teapawt, Nov 2026](https://www.xitter.cf/marcmacmac)).
  - LinkedIn: “ObsessionDB” affiliation, 71 followers ([LinkedIn, Oct 2026](https://www.linkedin.com/in/marc-leuthardt)).
  - GitHub: @marcmacmac, `cachenator` star count not retrievable, with a public ObsessionDB benchmark submission ([GitHub Explorer](https://ghe.derekchia.com/related/marcmacmac/cachenator), [ClickBench](https://github.com/ClickHouse/ClickBench/pull/2083)).
- **Co-founder relationship:** All three worked at Numia, and Aviles and Höffl also list Localytics and TU Berlin ([YC founder profiles for Aviles](https://www.ycombinator.com/founders/rafael-aviles), [Höffl](https://www.ycombinator.com/founders/marc-hoffl), and [Leuthardt](https://www.ycombinator.com/founders/marc-leuthardt)).
- **Founder-market fit:** The founders built the storage architecture while operating petabyte-scale real-time blockchain APIs at their prior company, and YC lists Christopher Golda as primary partner ([Launch YC](https://www.ycombinator.com/launches/VpG-obsessiondb-a-real-time-data-warehouse-built-for-agents), [YC directory](https://www.ycombinator.com/companies/obsessiondb)).

## Key Risks

- **Performance across workloads:** The published ClickHouse comparison uses hot runs, while the architecture write-up documents added latency on cache misses and describes prewarming to reduce cold starts ([ObsessionDB benchmark](https://obsessiondb.com/blog/obsessiondb-vs-clickhouse-cloud-10b-benchmark), [architecture](https://obsessiondb.com/blog/announcement), [changelog](https://obsessiondb.com/changelog)).
- **Enterprise procurement:** Buyers requiring SOC 2 or ISO 27001 certification may face a procurement blocker under the company’s published security posture, while customer-cloud deployment provides customer-controlled encryption keys and private networking ([Security & Trust, Jun 2026](https://obsessiondb.com/security), [BYOC, Oct 2026](https://obsessiondb.com/blog/byoc-clickhouse-in-your-cloud-account)).
- **Migration compatibility:** Existing workloads that rely on storage snapshots or specific centrally coordinated operations need changes, with the company documenting replacement workflows ([ObsessionDB migration docs](https://obsessiondb.com/docs/migration-changes)).
- **Incumbent substitution:** ClickHouse Cloud offers isolated compute over shared storage and its own managed agent service, overlapping the architecture and agent use case sold by ObsessionDB ([ClickHouse architecture](https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/cloud/reference/02_architecture.md), [ClickHouse Agents](https://clickhouse.com/blog/clickhouse-tops-250m-arr-and-4000-customers), [ObsessionDB BYOC](https://obsessiondb.com/blog/byoc-clickhouse-in-your-cloud-account)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Paying production customers and petabytes processed monthly ([company LinkedIn, Oct 2026](https://www.linkedin.com/company/obsession-db)); millions of real-time API requests and a 50 TB customer deployment ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/VpG-obsessiondb-a-real-time-data-warehouse-built-for-agents)). |
| Revenue Signal | Paying customers reported ([company LinkedIn, Oct 2026](https://www.linkedin.com/company/obsession-db)); $4,090/month example for three 64 GB nodes and 10 TB storage, plus annual BYOC fee ([ObsessionDB Pricing, Nov 2026](https://obsessiondb.com/pricing)). |
| Founders | Rafael Aviles (CEO), Numia and Tapglue ([YC](https://www.ycombinator.com/founders/rafael-aviles)); Marc Höffl (CTO), Numia engineering and Frens exit ([YC](https://www.ycombinator.com/founders/marc-hoffl), [X via Teapawt](https://teapawt.net/marchoeffl)); Marc Leuthardt (co-founder), Numia and Frens exit ([YC](https://www.ycombinator.com/founders/marc-leuthardt)). |
| Competitors | ClickHouse (about $1.05B disclosed, over $350M annualized revenue, upstream SharedMergeTree and agent service) ([ClickHouse](https://clickhouse.com/company/our-story), [revenue](https://clickhouse.com/blog/clickhouse-appoints-mike-scarpelli-to-board-of-directors)); Tinybird ($70M, revenue unknown, hosted SQL APIs) ([CB Insights](https://www.cbinsights.com/company/tinybird-1/financials), [Tinybird](https://www.tinybird.co/product/query)); Aiven ($420M, over $100M companywide ARR, managed Kafka/Postgres integration) ([Aiven funding](https://aiven.io/press/aiven-acquires-eversql), [ARR](https://aiven.io/blog/aiven-surpasses-100m-arr), [product](https://aiven.io/clickhouse)); Altinity ($4M disclosed, revenue unknown, Kubernetes-managed ClickHouse) ([Altinity financing](https://altinity.com/press-releases/altinity-introduces-altinity-cloud-and-secures-4m-in-funding-from-accel), [Altinity Docs](https://docs.altinity.com/altinitycloud/)). |
| Moat Signals | Proprietary shared table engine, distributed cache, and locality-aware routing ([ObsessionDB Docs](https://obsessiondb.com/docs)). |
| Risk Factors | Workload-specific benchmark results, enterprise certification requirements, incumbent product overlap ([ObsessionDB benchmark](https://obsessiondb.com/blog/obsessiondb-vs-clickhouse-cloud-10b-benchmark), [Security & Trust](https://obsessiondb.com/security), [ClickHouse Agents](https://clickhouse.com/blog/clickhouse-tops-250m-arr-and-4000-customers)). |
| Founder Reach | Aviles: 370 X, 2K LinkedIn ([Teapawt](https://www.xitter.cf/avilesrafa), [LinkedIn](https://www.linkedin.com/in/avilesco)); Höffl: 413 X, 3,416 LinkedIn, 48 `mqtt-react` stars ([Teapawt](https://teapawt.net/marchoeffl), [LinkedIn](https://de.linkedin.com/in/marchoeffl), [GitHub](https://github.com/KeKs0r/mqtt-react)); Leuthardt: 54 X, 71 LinkedIn ([Teapawt](https://www.xitter.cf/marcmacmac), [LinkedIn](https://www.linkedin.com/in/marc-leuthardt)). |
| Distribution Signals | 610 LinkedIn followers, 209 X followers, 46 CHKit stars ([LinkedIn](https://www.linkedin.com/company/obsession-db), [Teapawt](https://www.teapawt.net/obsessiondb), [GitHub](https://github.com/obsessiondb/chkit), Nov 2026); separate Rudel side project #5 daily launch ([Product Hunt, May 2026](https://www.producthunt.com/products/rudel?launch=claude-code-codex-usage-trading-cards-by-rudel)). |
| Emails | founders@obsessiondb.com, shared founder inbox ([Launch YC](https://www.ycombinator.com/launches/VpG-obsessiondb-a-real-time-data-warehouse-built-for-agents)). |
