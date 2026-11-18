# Kiwi

> Kiwi is your GTM agent's favorite data engineer.

| Field | Value |
|-------|-------|
| Website | https://withkiwi.ai/ |
| YC Page | https://www.ycombinator.com/companies/kiwi |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/kiwi)) |
| Industry | B2B / B2B -> Operations |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Collaboration, AI |
| YC Partner | Charlie Warren ([Y Combinator](https://www.ycombinator.com/companies/kiwi)) |
| Emails | melanie@withkiwi.ai (CEO, [Kiwi About](https://withkiwi.ai/about)), hello@withkiwi.ai (general and privacy inquiries, [Kiwi Privacy](https://withkiwi.ai/privacy)) |

## The Idea

- **Problem:** Revenue operations and post-sales teams manually review agent output and maintain copies of workflow instructions as source data and processes change, with Chen reporting 20 hours spent reviewing and fixing agent work in one week at her prior employer ([Launch YC](https://www.ycombinator.com/launches/WGR-kiwi-your-gtm-agent-s-data-engineer), Oct 2026).
- **Approach:** Kiwi syncs CRM, email, calendar and call data into versioned records, exposes the SQL and snapshot behind agent data steps, and uses human approvals and corrections as test cases for workflow changes ([Launch YC](https://www.ycombinator.com/launches/WGR-kiwi-your-gtm-agent-s-data-engineer), Oct 2026).
- **Differentiation:** Kiwi emphasizes replayable SQL and data snapshots for internal GTM workflows, Default combines a revenue data warehouse with routing and scheduling, Clay combines prospect enrichment with campaign workflows, and Relevance AI provides a visual builder for teams of agents ([Kiwi](https://withkiwi.ai/), [Default](https://www.default.com/post/agent-launch), [Clay](https://www.clay.com/blog/series-d), [Relevance AI](https://relevanceai.com/blog/the-ai-workforce-revolution-24m-series-b-to-accelerate-our-mission)).
- **Business Model:** Kiwi documents Starter and Pro tiers and hosted or customer-cloud enterprise deployments, with paid use and pilots priced through order forms and no public rates found ([Kiwi Architecture](https://docs.withkiwi.ai/architecture), [Kiwi Terms](https://withkiwi.ai/terms), Oct 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment, within a broader global RevOps software and services market estimated at $5.6B in 2026 with a 16.6% CAGR for 2025–2033 ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/revenue-operations-revops-market-report)).
- **GTM / Distribution:** Kiwi offers demos with Chen, asks for GTM-team introductions through its YC launch, and lets customers use Kiwi agents from existing AI clients via the Model Context Protocol (MCP) ([Kiwi About](https://withkiwi.ai/about), [Launch YC](https://www.ycombinator.com/launches/WGR-kiwi-your-gtm-agent-s-data-engineer), [Kiwi Quickstart](https://docs.withkiwi.ai/quickstart)).

## Defensibility

- **Moat today:** Kiwi stores per-team run history, reviewer decisions and versioned records that teams can replay when testing workflow changes ([Launch YC](https://www.ycombinator.com/launches/WGR-kiwi-your-gtm-agent-s-data-engineer), Oct 2026).
- **Future moat:** [Inferred]: Customer-specific review history could raise switching costs if teams rely on it to validate workflow changes, with no public data on retention or migration costs.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** HubSpot’s Agent Builder already connects to tools such as Gong and Notion via MCP to generate account-planning summaries, overlapping with Kiwi’s cross-tool account workflows ([HubSpot](https://knowledge.hubspot.com/integrations/customize-breeze-agents-with-hubspot-mcp-client?referral=LP), Sep 2026, [Kiwi](https://withkiwi.ai/)).

## Market & Traction

- **Traction signals:**
  - More than 100 companies consulted during customer discovery, per Chen ([Launch YC](https://www.ycombinator.com/launches/WGR-kiwi-your-gtm-agent-s-data-engineer), Oct 2026).
  - Public product announcement on October 22, 2026 ([Chen’s X post, mirrored by teapawt](https://teapawt.net/__melchen__/status/2113255576109297792)).
  - Product coverage in Fondo on October 23 and Company Launch Tracker on November 3, 2026 ([Fondo](https://fondo.com/blog/kiwi-shows-the-queries-behind-an-ai-sales-agents-work), [Company Launch Tracker](https://companylaunchtracker.substack.com/p/company-launch-tracker-121)).
  - 74 followers on company X account `@with_kiwi_ai` ([teapawt X snapshot](https://teapawt.net/with_kiwi_ai), Nov 2026).
  - 0 active YC job postings ([YC Jobs](https://www.ycombinator.com/companies/kiwi/jobs), Nov 2026).
- **Competitors:**
  - **Default** ($20M raised, revenue unknown): Its revenue data layer comes with native lead routing, scheduling and enrichment, and its $9.4M Series A was announced in May 2026 with 8VC as lead ([Default](https://www.default.com/post/agent-launch), [Dealroom](https://app.dealroom.co/news/note/default-raises-9-4m-series-a-and-launches-agentic-gtm-platform), [launch record](https://www.launchvideo.com/directory/default)).
  - **Clay** ($317M in disclosed primary rounds, $100M ARR in Dec 2025): Its agents combine internal GTM data with external prospect signals and campaign execution, and Wellington led its $115M Series D in September 2026 ([Clay funding history](https://www.clay.com/dossier/clay-funding), [ARR disclosure](https://www.clay.com/blog/tender-offer-2026), [Series D announcement](https://www.clay.com/blog/series-d)).
  - **Relevance AI** ($37M raised, revenue unknown): Its no-code canvas coordinates specialized agents across functions, and Bessemer led its $24M Series B in May 2025 ([CB Insights](https://www.cbinsights.com/company/relevance-ai/financials), [Relevance AI](https://relevanceai.com/blog/the-ai-workforce-revolution-24m-series-b-to-accelerate-our-mission)).
- **Why now:** [Inferred]: The addition of remote MCP support to OpenAI’s Responses API in May 2025 helped standardize how AI clients call external tools, the same interface Kiwi uses to expose its workflows to existing clients ([OpenAI](https://openai.com/index/new-tools-and-features-in-the-responses-api/), [Kiwi Quickstart](https://docs.withkiwi.ai/quickstart)).

## Founders & Team

- **Melanie Chen (Founder/CEO):**
  - Background: MIT computer science bachelor’s, data infrastructure at Plaid, founding engineering roles at Pika Earth and Anzenna, and founding forward-deployed engineer and later Head of Post Sales at Chalk AI ([Chen’s website](https://www.melaniechen.me/), [YC founder profile](https://www.ycombinator.com/founders/melanie-chen), [Company Launch Tracker](https://companylaunchtracker.substack.com/p/company-launch-tracker-121)). Business email is melanie@withkiwi.ai ([Kiwi About](https://withkiwi.ai/about)).
  - Twitter/X: `@__melchen__`, 663 followers ([teapawt X snapshot](https://teapawt.net/__melchen__), early Nov 2026).
  - LinkedIn: YC links to her profile, with headline and follower count unavailable ([YC founder profile](https://www.ycombinator.com/founders/melanie-chen)).
  - GitHub: `@melrchen`, `rnapp` image-caption recording project, 0 stars ([GitHub](https://github.com/melrchen/rnapp), Nov 2026).
- **Bill Qin (Founder/CTO):**
  - Background: Studied computer science and AI at Carnegie Mellon, worked at Jane Street, and led development of Chalk’s federated SQL query engine ([YC founder profile](https://www.ycombinator.com/founders/bill-qin), [Chalk engineering blog](https://chalk.ai/blog/partiql)). Direct business email — No public data found.
  - Twitter/X: `@__bzq`, count not retrievable ([YC founder profile](https://www.ycombinator.com/founders/bill-qin)).
  - LinkedIn: Public search listing reads “Bill Qin - Chalk” and shows 725 followers ([LinkedIn, 2026 snapshot via search snippet](https://www.linkedin.com/in/bzqin)).
  - GitHub: `@bqin01`, `randomized-algorithms`, 6 stars ([GitHub](https://github.com/bqin01/randomized-algorithms), Nov 2026).
- **Co-founder relationship:** Both worked at Chalk AI before Kiwi ([YC founder profiles for Chen](https://www.ycombinator.com/founders/melanie-chen) and [Qin](https://www.ycombinator.com/founders/bill-qin)).
- **Founder-market fit:** Chen managed post-sales agent workflows and built data infrastructure, while Qin led a federated SQL engine, experience that maps to Kiwi’s workflow and data-layer work, with Y Combinator backing the company ([YC company and founder bios](https://www.ycombinator.com/companies/kiwi), [Kiwi](https://withkiwi.ai/)).

## Key Risks

- **Upstream data availability:** [Inferred]: A delayed connector sync can block a scheduled workflow when required data exceeds Kiwi’s freshness threshold, with the product designed to stop the run and identify the stale source ([Kiwi](https://withkiwi.ai/)).
- **Technical feasibility:** [Inferred]: A replayable query can reproduce an incorrect answer if it uses the wrong join or business definition, with Kiwi documenting source traces, historical tests and human checkpoints as controls ([Kiwi engineering blog](https://withkiwi.ai/blog/why-text-to-sql-fails-on-gtm-data), [Launch YC](https://www.ycombinator.com/launches/WGR-kiwi-your-gtm-agent-s-data-engineer)).
- **Data access and procurement:** [Inferred]: Copying CRM, calendar and meeting data into Kiwi can trigger customer security review, with Kiwi documenting encryption, isolated enterprise deployments and deployment into customer cloud environments ([Kiwi Privacy](https://withkiwi.ai/privacy), [Kiwi Architecture](https://docs.withkiwi.ai/architecture)).
- **CRM substitution:** [Inferred]: HubSpot can serve CRM-centered use cases from its existing interface, while Kiwi offers versioned SQL traces across connected tools ([HubSpot Agent Builder](https://knowledge.hubspot.com/integrations/customize-breeze-agents-with-hubspot-mcp-client?referral=LP), [Kiwi](https://withkiwi.ai/)).
- **Name collision:** [Inferred]: A separate enterprise AI startup uses the Kiwi name at meetkiwi.ai, creating potential confusion in searches and attribution ([MeetKiwi About](https://www.meetkiwi.ai/about), [Kiwi About](https://withkiwi.ai/about)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | More than 100 companies consulted in discovery ([Launch YC](https://www.ycombinator.com/launches/WGR-kiwi-your-gtm-agent-s-data-engineer), Oct 2026), coverage by [Fondo](https://fondo.com/blog/kiwi-shows-the-queries-behind-an-ai-sales-agents-work) (Oct 2026) and [Company Launch Tracker](https://companylaunchtracker.substack.com/p/company-launch-tracker-121) (Nov 2026) |
| Revenue Signal | Starter and Pro tiers, enterprise deployment options, and order-form pricing for paid use and pilots, with no public rates or revenue figures found ([Kiwi Architecture](https://docs.withkiwi.ai/architecture), [Kiwi Terms](https://withkiwi.ai/terms)) |
| Founders | Melanie Chen (Founder/CEO), MIT CS, Plaid data infrastructure, Chalk post-sales ([YC](https://www.ycombinator.com/founders/melanie-chen)). Bill Qin (Founder/CTO), Carnegie Mellon CS/AI, Jane Street, Chalk SQL ([YC](https://www.ycombinator.com/founders/bill-qin)). |
| Competitors | Default ($20M raised, revenue unknown, native routing and scheduling, [Default](https://www.default.com/post/agent-launch)). Clay ($317M primary funding, $100M ARR in Dec 2025, enrichment and campaigns, [Clay funding](https://www.clay.com/dossier/clay-funding), [Clay ARR](https://www.clay.com/blog/tender-offer-2026)). Relevance AI ($37M raised, revenue unknown, visual multi-agent builder, [CB Insights](https://www.cbinsights.com/company/relevance-ai/financials), [Relevance AI](https://relevanceai.com/blog/the-ai-workforce-revolution-24m-series-b-to-accelerate-our-mission)). |
| Moat Signals | Versioned source records and customer-specific review history for replay and regression testing ([Launch YC](https://www.ycombinator.com/launches/WGR-kiwi-your-gtm-agent-s-data-engineer), Oct 2026) |
| Risk Factors | Source freshness and query correctness ([Kiwi](https://withkiwi.ai/), [Kiwi engineering blog](https://withkiwi.ai/blog/why-text-to-sql-fails-on-gtm-data)), customer data handling ([Kiwi Privacy](https://withkiwi.ai/privacy)), native CRM agents ([HubSpot](https://knowledge.hubspot.com/integrations/customize-breeze-agents-with-hubspot-mcp-client?referral=LP)) |
| Founder Reach | Chen: 663 X followers ([teapawt X snapshot](https://teapawt.net/__melchen__), Nov 2026), 0 `rnapp` stars ([GitHub](https://github.com/melrchen/rnapp)). Qin: 725 LinkedIn followers ([LinkedIn via search snippet](https://www.linkedin.com/in/bzqin), 2026), 6 `randomized-algorithms` stars ([GitHub](https://github.com/bqin01/randomized-algorithms)). |
| Distribution Signals | October 22 public launch ([Chen’s X post, mirrored by teapawt](https://teapawt.net/__melchen__/status/2113255576109297792), 2026), 74 company X followers ([teapawt X snapshot](https://teapawt.net/with_kiwi_ai), Nov 2026), founder demos ([Kiwi About](https://withkiwi.ai/about)) |
| Emails | melanie@withkiwi.ai (CEO, [Kiwi About](https://withkiwi.ai/about)), hello@withkiwi.ai (general and privacy inquiries, [Kiwi Privacy](https://withkiwi.ai/privacy)) |
