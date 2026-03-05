# Zatanna

> Request Based Scraping Infrastructure

| Field | Value |
|-------|-------|
| Website | https://www.zatanna.ai/ |
| YC Page | https://www.ycombinator.com/companies/zatanna |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Web Development |
| YC Partner | Jared Friedman |
| Emails | No public data found |

**Note — Legal entity:** The company operates under the legal name NoPoll Inc. (company website footer, 2026).

**Note — Possible pivots:** The YC company page title cached by search engines reads "Adaptive Healthcare Admin Agents" (Google search snippet, March 2026 via search snippet), and a separate search snippet describes Zatanna as "a lawtech company focused on jury trials" (RocketReach snippet via search snippet). The live YC page and the company website both currently describe the product as "Request Based Scraping Infrastructure" (YC page, fetched March 2026; zatanna.ai, fetched March 2026). This suggests the company pivoted at least once — and possibly twice — before settling on its current product. All traction and product details below pertain to the current scraping infrastructure product unless otherwise noted.

## The Idea

**Problem:** Developers and businesses that need to extract data from websites at scale currently rely on browser-based scraping tools (headless Chrome/Puppeteer) that are slow (3–10 seconds per request), memory-intensive (~200 MB per browser instance), and frequently blocked by anti-bot protections (zatanna.ai). Existing scraping APIs abstract this complexity but still use browser rendering under the hood, inheriting these performance and cost limitations.

**Approach:** Zatanna reverse-engineers target sites at the HTTP protocol level — replicating headers, cookie management, TLS fingerprints, authentication flows, and request signing — to send optimized HTTP requests that mimic browser traffic without launching a browser. The company claims sub-500ms request completion and <1 MB memory per request (zatanna.ai). Each integration is custom-built per target source, handling hidden API endpoints, dynamic content, and proprietary APIs.

**Differentiation:** Browser-based scraping platforms (Firecrawl, Apify, Bright Data's Web Scraper API) spin up headless browsers to render JavaScript-heavy pages. Zatanna's protocol-level approach bypasses the browser entirely, trading generality for speed and resource efficiency. This is closer to the approach used internally by large data brokers but packaged as developer infrastructure. The trade-off is that each target likely requires bespoke reverse-engineering, which limits breadth versus general-purpose scrapers.

**Business Model:** No pricing page or tier information is publicly available on the website (zatanna.ai, fetched March 2026). The site offers only a "Request demo" CTA linking to a Calendly booking page (zatanna.cal.com/tarun/30min), suggesting a sales-led or custom-pricing model. [Inferred]: Given the custom-integration nature of the product, pricing is likely consumption-based or per-integration, possibly with an enterprise contract model.

**TAM/SAM:** The global web scraping market was valued at approximately $1.03 billion in 2025 and is projected to reach $1.17 billion in 2026, growing at a CAGR of 18.5% (market.us, 2025 via search snippet). Mordor Intelligence estimates the web scraper software market at $718.86 million in 2024 growing to $814.4 million in 2025 (Mordor Intelligence, 2025 via search snippet). Estimates vary by source and definition. No SAM estimate specific to HTTP-request-based (non-browser) scraping infrastructure was found.

**GTM / Distribution:** The website uses a demo-request flow rather than self-serve sign-up (zatanna.ai). The LinkedIn company page is at linkedin.com/company/usezatanna/ (zatanna.ai). [Inferred]: The most likely distribution path is direct outbound sales to developer teams and data-intensive businesses that need high-performance scraping for specific targets, supplemented by YC network introductions.

## Defensibility

Each integration requires protocol-level reverse-engineering of a target site's authentication, TLS configuration, and API behavior. This accumulated library of reverse-engineered integrations represents a compounding asset — each new integration adds value to the platform and is non-trivial to replicate. Alex Blackwell's prior experience at Pikkit on anti-bot bypass technology (YC page) is relevant domain expertise.

**Market structure:** Browser-based scraping incumbents (Bright Data, Apify, Firecrawl) have built their infrastructure around headless browser rendering. Shifting to a protocol-level approach would require rearchitecting their core product, retraining engineering teams, and potentially cannibalizing existing product lines that charge premium prices for browser-based rendering at scale. However, these companies also offer proxy networks and API products that partially overlap. No structural barrier identified at this stage beyond the switching cost of rearchitecting browser-based products.

**Commoditization risk:** Protocol-level HTTP scraping is a known technique used by sophisticated in-house teams and some boutique scraping services. The core technical approach is not proprietary, though building and maintaining integrations at scale requires sustained engineering effort. Any well-funded competitor with experienced reverse-engineering talent could replicate individual integrations, though the aggregate library and speed of coverage would take time to match.

## Market & Traction

**Traction signals:**
- No public revenue, user count, or growth metrics found on the company website or in press coverage.
- No Product Hunt launch found.
- No app store or Chrome Web Store presence found.
- Company LinkedIn page: linkedin.com/company/usezatanna/ (zatanna.ai). Follower count not retrievable.
- Tarun Vedula Twitter/X: @TarunVedula (YC page). Follower count not retrievable.
- Rithvik Vanga Twitter/X: No public account confirmed.
- No Discord or Slack community found.
- No job postings listed on YC page (YC page, fetched March 2026).
- No press coverage in named publications found.

**Competitive landscape:**

1. **Firecrawl** — YC-backed (S24). $16.2M total funding including $14.5M Series A (TechCrunch, August 2025). $1.5M revenue as of June 2024 (Latka, 2024 via search snippet). 81.3K+ GitHub stars (Firecrawl blog via search snippet). Open-source, browser-based scraping API optimized for AI/LLM data ingestion. Differentiator vs. Zatanna: general-purpose browser rendering with broad site coverage; Zatanna offers faster, leaner protocol-level scraping for specific targets.

2. **Bright Data** — Bootstrapped, $300M ARR, ~$960M estimated valuation, 20K+ customers (ARR Club, Latka, 2025 via search snippet). Enterprise-grade data platform with 150M+ residential proxy IPs across 195 countries. Differentiator vs. Zatanna: massive proxy network and dataset marketplace; Zatanna focuses on protocol-level request optimization rather than proxy rotation.

3. **Apify** — ~$3M total funding (J&T Ventures-led seed, April 2024). $13.3M revenue in 2024 (Latka, 2024 via search snippet). Cloud platform with 4,000+ community-built scraping "Actors." Differentiator vs. Zatanna: marketplace/ecosystem model with broad community-contributed scrapers; Zatanna builds custom protocol-level integrations in-house.

4. **ScraperAPI** — Acquired by SaaS.group; ~$400K/month (~$4.8M annualized) revenue (Failory via search snippet). Proxy-based API handling captchas and browser emulation. Differentiator vs. Zatanna: simpler proxy-rotation API for general scraping; Zatanna reverse-engineers specific targets at the protocol level.

**Why now:** [Inferred]: Several converging factors may explain timing: (1) the rise of AI agents and LLM applications has dramatically increased demand for structured web data extraction (Firecrawl's rapid growth and $14.5M raise in 2025 reflects this); (2) websites are increasingly restricting API access and deploying sophisticated anti-bot protections, making browser-based scraping less reliable and more expensive; (3) AI agent frameworks (MCP, tool-use patterns) create new integration surfaces for scraping infrastructure.

## Founders & Team

**Rithvik Vanga** — Co-founder & CEO
- BS in Engineering, Computer Science, University of Michigan (2022–2025) (LinkedIn via search snippet)
- Previous roles at Coinbase, Series, Hamming AI, and John Deere (LinkedIn via search snippet)
- Co-authored research on identifying race and gender bias in Stable Diffusion AI image generation, published at ICAIC 2024 (dblp, IEEE Xplore via search snippet)
- Twitter/X: No public account confirmed
- LinkedIn: linkedin.com/in/rithvik-vanga-0824a5225/ (search result)
- GitHub: No public repos found under confirmed handle

**Alex Blackwell** — Co-founder & CTO
- BSc Computer Science, Simon Fraser University (GitHub profile)
- Previously worked at Pikkit on anti-bot bypass technology (YC page)
- Previously backend software engineer at Demonware working on marketplace systems for Activision/Call of Duty titles (GitHub profile, LinkedIn)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/alex-blackwell/ (search result)
- GitHub: github.com/Alex0Blackwell — 47 repositories; notable repo: **bias-monitor** (Chrome extension for diverse news reading, 100 stars) (GitHub, fetched March 2026)

**Tarun Vedula** — Co-founder
- BS Data Science, University of Wisconsin-Madison (graduating 2026) (LinkedIn via search snippet)
- Previous roles at Amazon, Odyssey, HandsOn, and AT&T (LinkedIn via search snippet)
- Twitter/X: @TarunVedula (YC page). Follower count not retrievable.
- LinkedIn: linkedin.com/in/tarunvedula/ (search result)
- Substack: tarunvedula.substack.com (search result)
- GitHub: No confirmed public repos found

**Co-founder relationship:** Rithvik Vanga attended the University of Michigan (Ann Arbor), Alex Blackwell attended Simon Fraser University (Vancouver), and Tarun Vedula attended the University of Wisconsin-Madison. No shared educational institution identified. No shared prior employer identified from available data. No public data on co-founder history.

**Founder-market fit:** Alex Blackwell's experience at Pikkit specifically working on anti-bot bypass technology is directly relevant to building protocol-level scraping infrastructure that evades anti-bot protections. His backend engineering at Demonware (Activision) provides large-scale systems experience. Rithvik Vanga brings experience from Coinbase and Hamming AI. Tarun Vedula's Amazon experience adds large-tech-company context. The team's combined background spans anti-bot technology, backend infrastructure, and data engineering.

## Key Risks

**Brand confusion with DC Comics character:** "Zatanna" is a well-known DC Comics superhero with an active 2025–2026 comic series (dc.com). Web searches for "Zatanna" overwhelmingly return DC Comics results, creating SEO and brand discoverability challenges. The company may face trademark friction. The LinkedIn handle "usezatanna" suggests awareness of this issue.

**Custom integration scalability:** The protocol-level reverse-engineering approach requires bespoke work per target site. Each time a target site updates its authentication, TLS configuration, or API structure, the integration may break and require re-engineering. This creates ongoing maintenance burden that scales linearly with the number of supported targets, unlike browser-based approaches that are target-agnostic.

**Multiple apparent pivots:** Search engine caches reference at least two prior product descriptions — "lawtech company focused on jury trials" and "Adaptive Healthcare Admin Agents" — before the current scraping infrastructure product (Google search snippets via search snippet). Multiple pivots during or before a YC batch may indicate product-market fit has not yet been established.

**Legal and ToS risk:** HTTP-request-based scraping that bypasses anti-bot protections may conflict with target sites' Terms of Service and could face legal challenges under the Computer Fraud and Abuse Act (CFAA) or similar statutes. The hiQ v. LinkedIn precedent offers some protection for public data, but authenticated-endpoint scraping (a stated capability) occupies a grayer legal area.

**Incumbent response:** Firecrawl raised $14.5M in August 2025 (TechCrunch) and could invest in protocol-level capabilities. Bright Data ($300M ARR) has resources to build or acquire similar technology. The technical approach, while specialized, is not patent-protected based on available information.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | ~$1.03B in 2025, growing at 18.5% CAGR (market.us, 2025 via search snippet) |
| SAM | No public data found for HTTP-request-based scraping segment specifically |
| Traction | No public data found |
| Revenue Signal | No public data found; no pricing page; demo-request-only model (zatanna.ai) |
| Founders | Rithvik Vanga (CEO): UMich CS, Coinbase, Hamming AI. Alex Blackwell (CTO): SFU CS, Pikkit anti-bot, Demonware/Activision. Tarun Vedula (Founder): UW-Madison Data Science, Amazon, AT&T. |
| Competitors | Firecrawl ($16.2M raised, $1.5M revenue Jun 2024, open-source browser-based). Bright Data (bootstrapped, $300M ARR, proxy network + browser scraping). Apify (~$3M raised, $13.3M revenue 2024, marketplace model). ScraperAPI (acquired by SaaS.group, ~$4.8M annualized, proxy-based API). |
| Moat Signals | Accumulating library of reverse-engineered protocol-level integrations; CTO's anti-bot bypass domain expertise from Pikkit |
| Risk Factors | Brand confusion with DC Comics character, custom integration scalability, multiple pre-batch pivots, legal/ToS risk, incumbent funding advantage |
| Founder Reach | Rithvik Vanga: Twitter not confirmed, LinkedIn profile found. Alex Blackwell: Twitter not found, LinkedIn profile found, GitHub 100 stars (bias-monitor repo). Tarun Vedula: Twitter @TarunVedula (count not retrievable), LinkedIn profile found. |
| Distribution Signals | No public data found |
| Emails | No public data found |
