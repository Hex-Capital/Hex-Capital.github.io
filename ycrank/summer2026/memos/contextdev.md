# Context.dev

> We give AI agents realtime web context.

| Field | Value |
|-------|-------|
| Website | https://context.dev |
| YC Page | https://www.ycombinator.com/companies/contextdev |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 1 |
| Location | New York City, NY, USA |
| Tags | B2B, APIs |
| YC Partner | Jon Xu |
| Emails | No public data found |

## The Idea

- **Problem:** Developers building AI agents and software products need fresh, structured web data (markdown, brand assets, sitemaps, transaction descriptors) and currently stitch together "multiple vendors to fill data gaps" or maintain internal crawling infrastructure (context.dev website, 2026).
- **Approach:** A single API layer offering scrape-to-markdown/HTML, schema-based structured extraction, sitemap crawling, brand intelligence (logo/colors/fonts), and transaction-descriptor resolution, with TypeScript/Python/Ruby SDKs and an MCP server (context.dev, Product Hunt Mar 2026).
- **Differentiation:** Versus Firecrawl — Context.dev claims stronger out-of-the-box anti-bot handling; Firecrawl has larger LangChain/LlamaIndex integration footprint (context.dev blog "Top 10 Web Scraping APIs for AI"). Versus Browserbase — Browserbase sells managed headless browser infrastructure rather than a structured-data API (Contrary Research). Versus ScrapeGraphAI — output-first RAG-oriented JSON/Markdown only (scrapegraphai.com). Context.dev bundles brand data natively, which competitors require a separate service for (context.dev blog).
- **Business Model:** Usage-credit SaaS — Free (250–500 credits), Starter $49/mo, Pro $149/mo, Growth $299/mo, Scale 1M $499/mo, Scale 2.5M $949/mo; web endpoints = 1 credit/call, Brand API = 10 credits/call (context.dev pricing page, 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** [Inferred]: Developer-led / PLG via free tier, Product Hunt, YC brand, SDK and MCP server distribution; founder posted "350 signups yesterday 200 today" attributing to YC brand (Yahia Bakour, X, 2026).

## Defensibility

- **Moat today:** Brand-data corpus (logos, colors, fonts, socials) served via global CDN at ~20ms is a data/asset layer competitors do not natively offer (context.dev website, 2026).
- **Future moat:** [Inferred]: Switching costs as customers embed Context.dev SDKs and MCP server into agent stacks; growing proprietary brand/company dataset compounds with usage — unproven because customer concentration and retention data are not public.
- **Market structure:** [Inferred]: No structural barrier identified at this stage; Firecrawl ($14.5M Series A, TechCrunch Aug 2025) and Browserbase ($40M Series B, Upstarts 2025) operate with materially more capital and engineering scale.
- **Commoditization risk:** Scraping/markdown extraction is offered by Firecrawl, Apify, Bright Data, ScrapeGraphAI, Olostep, ZenRows, and open-source Crawl4AI (Tracxn; scrapegraphai.com), so core endpoints are substitutable.

## Market & Traction

- **Traction signals:**
  - 250+ companies powered including Mintlify, Super, Vizzy, Klarna (YC page, 2026); "5,000+ businesses" including Mintlify, Daily.dev, Ferndesk.com (Product Hunt, Mar 2026).
  - Product Hunt: Launch of the Day, #4 day rank, 258 upvotes on March 22, 2026 (Product Hunt awards page).
  - YC-backing announced May 31, 2026 (context.dev blog "We're now backed by YCombinator").
  - Rebrand from Brand.dev to Context.dev announced March 21, 2026 (context.dev blog).
  - Founder X account @getcontextdev exists (X, 2026); follower count not retrievable.
  - Founder post: "350 signups yesterday 200 today" post-YC announcement (Yahia Bakour, X, 2026).
- **Competitors:**
  - Firecrawl ($16.2M total raised, $14.5M Series A Aug 2025 led by Nexus Venture Partners, revenue unknown; deeper LangChain/LlamaIndex ecosystem) (TechCrunch, Tracxn).
  - Browserbase ($6.5M seed + $21M Series A Oct 2024 + $40M Series B 2025; $4.4M ARR per Latka; managed headless browser infra rather than structured data API) (Upstarts Media, Latka, Crunchbase).
  - ScrapeGraphAI (funding unknown publicly, revenue unknown; output-first RAG markdown/JSON) (scrapegraphai.com).
  - Apify (publicly listed competitor, revenue unknown; actor marketplace model) (Tracxn).
  - Bright Data (private, revenue unknown; enterprise proxy/scraping infrastructure) (Tracxn).
- **Why now:** [Inferred]: 2024–2026 explosion of AI agent frameworks (LangChain, MCP standard, agentic products) created demand for an API abstraction over web data; MCP server availability cited as a Context.dev feature (Product Hunt, Mar 2026).

## Founders & Team

- **Yahia Bakour (Founder, solo):**
  - Background: Boston University graduate, Magna Cum Laude 2020 (LinkedIn). Co-founder StockAlarm.io 2019–2023 (bootstrapped, 170K–225K+ users, acquired by Center Mark Capital) (Starter Story; podcast on Spotify Creators). Co-founder of Essense (acquired by Optic via acqui-hire as Staff Engineer) (yahiabakour.com). Principal Software Engineer/Manager at Sunrun; prior Amazon SDE2 tech lead on tier-1 retail checkout (LinkedIn).
  - Twitter/X: @mynameisyahia — 4,721 followers (X, 2026).
  - LinkedIn: "Context.dev" (linkedin.com/in/yahia-bakour).
  - GitHub: @YahiaBakour, 22 repositories; no notable repo star count surfaced in search results.
- **Co-founder relationship:** Solo founder — no co-founder (YC page, 2026).
- **Founder-market fit:** Prior bootstrapped acquisition (StockAlarm) and acqui-hire (Essense), plus tier-1 platform engineering at Amazon and Sunrun, document API/scale experience relevant to running a high-throughput web data API (Starter Story; yahiabakour.com). No public advisor or investor list beyond YC backing (context.dev blog May 31, 2026).

## Key Risks

- **Commoditization and well-funded incumbents:** Firecrawl ($14.5M Series A; TechCrunch Aug 2025) and Browserbase ($40M Series B; Upstarts 2025) already address overlapping AI-agent web data needs with greater capital and integration mindshare, while open-source Crawl4AI is free (scrapegraphai.com).
- **Solo founder execution capacity:** Team size of 1 (YC page, 2026) must build, sell, and support an API platform competing with multi-engineer scaleups; no mitigation found (no hiring per company data).
- **Customer concentration disclosure gap:** Marquee logos (Klarna, Sunrun, Super, Mintlify) are listed (context.dev, YC page) but neither revenue nor whether they are paid vs. free-tier users is disclosed.
- **Anti-bot/legal exposure:** Web scraping APIs face ToS and anti-bot countermeasures; Context.dev markets "anti-bot bypass" (Product Hunt, Mar 2026), which can attract takedown or litigation risk (no public incidents found).
- **Brand confusion / pivot risk:** Product rebranded from Brand.dev to Context.dev on March 21, 2026 (context.dev blog); prior Brand.dev metrics may not map cleanly to current Context.dev product.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 250+ companies powered including Mintlify, Super, Vizzy, Klarna (YC page, 2026); "5,000+ businesses" trust the platform (Product Hunt, Mar 2026); Product Hunt #4 of the day, 258 upvotes (Mar 22, 2026); YC backing announced May 31, 2026 (context.dev blog) |
| Revenue Signal | Pricing tiers $49 / $149 / $299 / $499 / $949 per month; free tier 250–500 credits (context.dev pricing page, 2026); no ARR disclosed |
| Founders | Yahia Bakour (Founder, solo): BU 2020 Magna Cum Laude; ex-Amazon SDE2 tier-1 checkout tech lead; ex-Principal SWE/Manager Sunrun; co-founder StockAlarm (acquired by Center Mark Capital) and Essense (acquired by Optic) |
| Competitors | Firecrawl ($16.2M raised incl. $14.5M Series A Aug 2025, revenue unknown, deeper LangChain ecosystem); Browserbase ($67.5M+ raised across seed/A/B, $4.4M ARR per Latka, managed headless browser infra); ScrapeGraphAI (funding unknown, output-first RAG markdown/JSON); Apify (revenue unknown, actor marketplace); Bright Data (private, enterprise scraping infrastructure) |
| Moat Signals | Native brand-data API (logos/colors/fonts/socials) served via global CDN ~20ms (context.dev, 2026); MCP server + TS/Python/Ruby SDKs (Product Hunt, Mar 2026) |
| Risk Factors | Well-funded competitors (Firecrawl, Browserbase), solo-founder execution capacity, commoditization via OSS (Crawl4AI) |
| Founder Reach | Yahia Bakour: Twitter 4.7K (@mynameisyahia, X 2026), LinkedIn profile present (count not retrievable), GitHub @YahiaBakour 22 repos (star count not retrievable) |
| Distribution Signals | Product Hunt #4 day rank, 258 upvotes (Mar 22, 2026); YC-backing post May 31, 2026 (context.dev blog); founder cites "350 signups yesterday 200 today" attributed to YC brand (X, 2026) |
| Emails | No public data found |

Sources:
- [Context.dev](https://context.dev)
- [YC company page](https://www.ycombinator.com/companies/contextdev)
- [Brand.dev is now Context.dev (blog)](https://www.context.dev/blog/brand-dev-is-now-context-dev)
- [We're now backed by YCombinator (blog)](https://www.context.dev/blog/were-now-backed-by-ycombinator)
- [Top 10 Web Scraping APIs for AI (blog)](https://www.context.dev/blog/top-10-web-scraping-apis-for-ai)
- [Context.dev on Product Hunt](https://www.producthunt.com/products/context-dev)
- [Context.dev Product Hunt Awards](https://www.producthunt.com/products/context-dev/awards)
- [Yahia Bakour LinkedIn](https://www.linkedin.com/in/yahia-bakour/)
- [Yahia Bakour personal site](https://yahiabakour.com/)
- [Yahia Bakour GitHub](https://github.com/YahiaBakour)
- [@mynameisyahia on X](https://x.com/mynameisyahia)
- [StockAlarm breakdown - Starter Story](https://www.starterstory.com/stockalarm-breakdown)
- [Firecrawl Series A - TechCrunch](https://techcrunch.com/2025/08/19/ai-crawler-firecrawl-raises-14-5m-is-still-looking-to-hire-agents-as-employees/)
- [Firecrawl Tracxn profile](https://tracxn.com/d/companies/firecrawl/__AUIyUTgBhP2fuJfSidYDmsLSkPNv7XqK1ZuBMuVi3yw)
- [Browserbase Series B - Upstarts Media](https://www.upstartsmedia.com/p/browserbase-raises-40m-and-launches-director)
- [Browserbase Series A - Pulse 2.0](https://pulse2.com/browserbase-web-browser-automation-company-raises-21-million-series-a/)
- [Browserbase Latka revenue](https://getlatka.com/companies/browserbase.com)
- [Firecrawl alternatives - ScrapeGraphAI](https://scrapegraphai.com/blog/firecrawl-alternatives)
