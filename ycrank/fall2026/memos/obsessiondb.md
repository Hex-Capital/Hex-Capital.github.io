# ObsessionDB

> Real-time data warehouse for agents

| Field | Value |
|-------|-------|
| Website | https://obsessiondb.com |
| YC Page | https://www.ycombinator.com/companies/obsessiondb |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/obsessiondb)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 5 |
| Location | San Francisco, CA, USA |
| Tags | Analytics, Big Data, Databases |
| YC Partner | Christopher Golda ([YC](https://www.ycombinator.com/companies/obsessiondb)) |
| Emails | founders@obsessiondb.com ([YC](https://www.ycombinator.com/companies/obsessiondb)); marc@obsessiondb.com ([GitHub](https://github.com/obsessiondb)) |

## The Idea

- **Problem:** Data teams serving agent workloads and customer APIs face query costs and latency constraints on existing warehouses, with Numia previously using BigQuery, dbt, and Postgres together ([ObsessionDB case study, June 2026](https://obsessiondb.com/blog/how-numia-cut-costs-75-percent-bigquery)).
- **Approach:** ObsessionDB retains ClickHouse’s query engine and replaces its storage layer with shared object storage, stateless compute, and a distributed NVMe cache with locality-aware routing ([documentation](https://obsessiondb.com/docs)).
- **Differentiation:** Against BigQuery, ObsessionDB charges provisioned capacity rather than scanned bytes; against ClickHouse Cloud, it markets a different shared-cache implementation and lower configuration-specific prices ([case study](https://obsessiondb.com/blog/how-numia-cut-costs-75-percent-bigquery), [pricing](https://obsessiondb.com/pricing)).
- **Business Model:** Managed service pricing combines monthly compute and storage, with an indicative $4,090/month configuration, a free developer tier, and separately quoted annual BYOC licensing, operations, and support fees ([pricing, accessed October 2026](https://obsessiondb.com/pricing)).
- **TAM/SAM:** Grand View Research estimates the broader DWaaS market at $14.1B in 2026 with 22.4% CAGR through 2033; this is a parent-market estimate, with no public agent-warehouse SAM found ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/data-warehouse-as-a-service-market-report)).
- **GTM / Distribution:** Distribution includes self-service signup, founder calls, migration assistance, and free workload audits offering $3,000 off the first paid month upon conversion ([website](https://obsessiondb.com), [cost-audit offer](https://obsessiondb.com/cost-audit)).

## Defensibility

- **Moat today:** The documented proprietary components are the SharedMergeTree table engine and cache/locality layer, while the underlying ClickHouse engine remains upstream software ([feature-status documentation](https://obsessiondb.com/docs/feature-status)).
- **Future moat:** [Inferred]: Operating experience across customer workloads could improve cache placement and migration tooling, although public evidence does not establish an exclusive dataset or network effect.
- **Market structure:** [Inferred]: No structural barrier identified at this stage, since ClickHouse already offers managed infrastructure and agent-facing features ([ClickHouse, October 2025](https://clickhouse.com/blog/clickhouse-extends-series-c-financing-expands-leadership-team)).
- **Commoditization risk:** [Inferred]: ClickHouse and other managed-service operators can build overlapping offerings on the shared engine, although reproducing ObsessionDB’s proprietary storage/cache behavior would require additional engineering ([ObsessionDB documentation](https://obsessiondb.com/docs/feature-status)).

## Market & Traction

- **Traction signals:**
  - Paying production customers and petabytes processed monthly, according to the CEO; customer count and revenue amount undisclosed ([company LinkedIn, accessed October 27, 2026](https://www.linkedin.com/company/obsession-db)).
  - Millions of real-time customer API requests, with the largest customer serving APIs over 50 TB after migrating from Elasticsearch and ingesting hundreds of thousands of events per minute ([YC launch, October 2026](https://www.ycombinator.com/launches/VpG-obsessiondb-a-real-time-data-warehouse-built-for-agents)).
  - Customer testimonial: Numia reported 75% lower costs after moving 200 TB from BigQuery, with monthly workload costs falling from approximately $8,000 to $2,000 ([ObsessionDB case study, June 5, 2026](https://obsessiondb.com/blog/how-numia-cut-costs-75-percent-bigquery)).
  - Company LinkedIn: 551 followers and seven associated employee profiles, which differs from YC’s supplied team count ([LinkedIn, accessed October 27, 2026](https://www.linkedin.com/company/obsession-db)).
  - Open-source `chkit`: 42 stars ([GitHub, accessed October 27, 2026](https://github.com/obsessiondb)).
  - Separate side project: Rudel’s usage trading cards placed #5 for the day on May 4, 2026; its successor Opaline describes originating inside ObsessionDB ([Product Hunt](https://www.producthunt.com/products/rudel?launch=opaline-2)).
  - Zero active YC job listings ([YC, accessed October 27, 2026](https://www.ycombinator.com/companies/obsessiondb)).
- **Competitors:**
  - **ClickHouse** ($1,050M minimum across disclosed rounds; $250M annualized revenue): upstream managed ClickHouse supplier competing with ObsessionDB’s replacement storage/cache layer; latest announced financing was $400M Series D led by Dragoneer on January 16, 2026 ([funding history](https://clickhouse.com/company/our-story), [round announcement](https://clickhouse.com/blog/clickhouse-raises-400-million-series-d-acquires-langfuse-launches-postgres), [TechCrunch, May 2026](https://techcrunch.com/2026/05/27/clickhouse-triples-annualized-revenue-to-250m-charting-a-path-toward-an-ipo/)).
  - **Tinybird** ($70M raised, revenue unknown): packages real-time ingestion, SQL, and application APIs; latest verified round was $30M Series B led by Balderton on June 17, 2024 ([CB Insights](https://www.cbinsights.com/company/tinybird-1/financials), [Balderton](https://www.balderton.com/news/tinybird-secures-30-million-series-b-to-expand-real-time-data-analytics-platform/)).
  - **StarTree** ($75M raised, revenue unknown): managed real-time analytics built on Apache Pinot rather than ClickHouse; latest verified round was $47M Series B led by GGV on August 29, 2022 ([StarTree announcement](https://www.globenewswire.com/news-release/2022/08/29/2505968/0/en/startree-lands-47-million-in-series-b-funding-to-accelerate-adoption-of-real-time-user-facing-analytics.html)).
- **Why now:** [Inferred]: Agent-generated query volume creates demand for different warehouse economics, illustrated by MotherDuck reporting 29 times more MCP queries than human UI queries in its recent measurement ([MotherDuck, September 2, 2026](https://motherduck.com/blog/agents-dont-query-like-humans-do/)).

## Founders & Team

- **Rafael Aviles (Co-founder/CEO):**
  - Background: Humboldt University and TU Berlin alumnus; previously at Numia, Demand Sage, Localytics, and Tapglue, acquired by Localytics; reports his previous company reached $1.5M ARR and five billion monthly API requests, separate from ObsessionDB traction ([YC founder profile](https://www.ycombinator.com/founders/rafael-aviles)).
  - Twitter/X: @avilesrafa; count not retrievable ([YC profile](https://www.ycombinator.com/founders/rafael-aviles)).
  - LinkedIn: Profile found; headline unavailable, with approximately 2K followers ([LinkedIn, October 2026, via search snippet](https://www.linkedin.com/in/avilesco)).
  - GitHub: No public repos found.
- **Marc Höffl (Co-founder; YC lists “Founder”):**
  - Background: Former Numia CTO and Localytics engineering manager; founded Laserfocus, YC Winter 2020, and Frens, acquired by Swyke; holds master’s degrees in data science from KTH and cloud computing from TU Berlin ([YC founder profile](https://www.ycombinator.com/founders/marc-hoffl)).
  - Twitter/X: @marchoeffl; count not retrievable ([GitHub profile](https://github.com/KeKs0r)).
  - LinkedIn: Profile found; headline unavailable, with 3,416 followers ([LinkedIn, October 2026, via search snippet](https://de.linkedin.com/in/marchoeffl)).
  - GitHub: @KeKs0r; most-starred displayed repository `mqtt-react`, 48 stars ([GitHub, October 27, 2026](https://github.com/KeKs0r)).
- **Marc Leuthardt (Co-founder; YC lists “Founder”):**
  - Background: Numia co-founder; previously co-founder/CTO at Frens, acquired by Swyke, and Lokalportal; chemistry and economics degree and Kiel University affiliation ([YC founder profile](https://www.ycombinator.com/founders/marc-leuthardt)).
  - Twitter/X: @marcmacmac; count not retrievable ([YC profile](https://www.ycombinator.com/founders/marc-leuthardt)).
  - LinkedIn: Profile found; headline unavailable, with 71 followers ([LinkedIn, October 2026, via search snippet](https://www.linkedin.com/in/marc-leuthardt)).
  - GitHub: No confirmed public profile found.
- **Co-founder relationship:** All founders previously worked at Numia ([YC founder profiles](https://www.ycombinator.com/companies/obsessiondb)).
- **Founder-market fit:** Their documented Numia work involved production blockchain infrastructure and petabyte-scale workloads, and ObsessionDB’s launch describes productizing infrastructure developed there ([YC launch](https://www.ycombinator.com/launches/VpG-obsessiondb-a-real-time-data-warehouse-built-for-agents)).

## Key Risks

- **Security disclosure inconsistency:** The homepage advertises encryption at rest, while the June 10 security page describes encryption and staff-access audit logging as being introduced and states no SOC 2 or ISO 27001 certification; that page documents tenant isolation and TLS as existing controls ([homepage](https://obsessiondb.com), [security page](https://obsessiondb.com/security)).
- **Compatibility limits:** Native `BACKUP`/`RESTORE` are unimplemented and filesystem-dependent operations are permanently unsupported, requiring operational changes despite ClickHouse compatibility; time travel is the documented recovery alternative ([feature status](https://obsessiondb.com/docs/feature-status)).
- **Provisioning capacity:** Höffl reported launch users encountered cloud quota limits and said quotas were subsequently raised ([LinkedIn, October 2026, via search snippet](https://de.linkedin.com/in/marchoeffl)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader DWaaS: $14.1B in 2026; 22.4% CAGR through 2033 ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/data-warehouse-as-a-service-market-report)) |
| SAM | No public data found |
| Traction | Paying customers, monthly petabyte processing ([LinkedIn, October 2026](https://www.linkedin.com/company/obsession-db)); largest customer: 50 TB ([YC, October 2026](https://www.ycombinator.com/companies/obsessiondb)) |
| Revenue Signal | Paying customers; amount undisclosed ([LinkedIn](https://www.linkedin.com/company/obsession-db)); indicative $4,090/month configuration, free developer tier, annual BYOC fee ([pricing, October 2026](https://obsessiondb.com/pricing)) |
| Founders | Rafael Aviles, CEO: Numia, Tapglue; Marc Höffl: former Numia CTO, Laserfocus, KTH; Marc Leuthardt: Numia, Frens/Lokalportal CTO ([YC](https://www.ycombinator.com/companies/obsessiondb)) |
| Competitors | ClickHouse: $1,050M minimum disclosed funding, upstream engine ([ClickHouse](https://clickhouse.com/company/our-story)); Tinybird: $70M, revenue unknown, SQL APIs ([CB Insights](https://www.cbinsights.com/company/tinybird-1/financials)); StarTree: $75M, revenue unknown, Pinot ([StarTree](https://www.globenewswire.com/news-release/2022/08/29/2505968/0/en/startree-lands-47-million-in-series-b-funding-to-accelerate-adoption-of-real-time-user-facing-analytics.html)) |
| Moat Signals | Proprietary SharedMergeTree and cache/locality implementation ([documentation](https://obsessiondb.com/docs/feature-status)) |
| Risk Factors | Inconsistent security disclosures ([security](https://obsessiondb.com/security)); unsupported ClickHouse operations ([documentation](https://obsessiondb.com/docs/feature-status)) |
| Founder Reach | LinkedIn: Aviles approximately 2K; Höffl 3,416; Leuthardt 71 ([Aviles](https://www.linkedin.com/in/avilesco), [Höffl](https://de.linkedin.com/in/marchoeffl), [Leuthardt](https://www.linkedin.com/in/marc-leuthardt), October 2026, via search snippets) |
| Distribution Signals | Company LinkedIn: 551 followers ([LinkedIn, October 27, 2026](https://www.linkedin.com/company/obsession-db)); chkit: 42 stars ([GitHub, October 27, 2026](https://github.com/obsessiondb)) |
| Emails | founders@obsessiondb.com ([YC](https://www.ycombinator.com/companies/obsessiondb)); marc@obsessiondb.com ([GitHub](https://github.com/obsessiondb)) |
