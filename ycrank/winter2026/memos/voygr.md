# VOYGR

> Real-world place intelligence for AI apps and agents

| Field | Value |
|-------|-------|
| Website | https://voygr.tech |
| YC Page | https://www.ycombinator.com/companies/voygr |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | No public data found |
| Location | No public data found |
| Tags | Developer Tools, Geographic Information System, API, Search, AI |
| YC Partner | Tyler Bosmeny |
| Emails | founders@voygr.tech (YC company page) |

## The Idea

**Problem:** AI applications and agents that need to interact with the physical world — making restaurant reservations, recommending places, routing deliveries — depend on accurate, up-to-date place data. Current mapping APIs provide static snapshots: a restaurant recommendation can fail because the place has closed, menus are not searchable, or delivery is routed to the wrong entrance (YC company description). The company claims that 10M+ apps/websites use maps, up to 40% of search queries need local context, and 20% of LLM prompts need local context (YC company description). As AI agents are expected to handle semantic prompts like "specialty coffee shops in SF with Wi-Fi and YC founders," static POI data is insufficient.

**Approach:** VOYGR provides an API that combines validated place data with continuously refreshed web context — news, articles, and events — to deliver what it calls "place ground truth." The product includes place validation (confirming a location is open and operating), operating-status confirmation, and data enrichment from web and authoritative sources (YC company page). The website describes the product as "Location & POI Data Validation and Enrichment" (voygr.tech).

**Differentiation:** Unlike static mapping APIs (e.g., Google Maps Places API), VOYGR layers continuously updated web context onto place records. Traditional POI data providers such as Foursquare or SafeGraph offer large databases but focus on foot traffic analytics or static directory data rather than real-time web-enriched validation specifically designed for AI agent consumption. The company states it "outperforms on accuracy and coverage" versus alternatives, with "several customers already running VOYGR to continuously validate places data accuracy at scale" (YC company description).

**Business Model:** No pricing page is publicly visible on voygr.tech; the website shows a waitlist signup mechanism (voygr.tech). [Inferred]: Most likely monetization path is a usage-based API pricing model (per-query or tiered subscription), consistent with comparable developer-tool APIs in the location data space (e.g., Google Maps Platform, Radar.io, Foursquare).

**TAM/SAM:** The global location intelligence market was estimated at $21.21 billion in 2024, growing at a CAGR of 16.8% from 2025 to 2030 (Grand View Research, via search snippet). The broader market is projected to reach $74.81 billion by 2035 at 11.39% CAGR (Precedence Research, via search snippet). No public SAM estimate specific to the AI-agent place-data sub-segment was found.

**GTM / Distribution:** The YC company description mentions "several customers already run VOYGR to continuously validate places data accuracy at scale," suggesting an early B2B direct sales motion. [Inferred]: Most likely distribution path is developer-facing API distribution — documentation, self-serve signup, and usage-based billing — targeting AI application builders, with potential enterprise sales for large-scale place-data validation customers.

## Defensibility

The company's stated advantage is the combination of structured POI data with continuously crawled web context. Several customers are already using the product for at-scale place validation (YC company description), which could generate a data quality feedback loop over time as more queries improve validation accuracy.

**Market structure:** Google Maps Places API is the dominant incumbent but has moved to deprecate its legacy Places API in favor of a newer version with different pricing (Google for Developers, March 2025). Google's business model centers on advertising and consumer-facing products; its API pricing changes (removing the $200 monthly credit as of March 2025) may push cost-sensitive developers to alternatives (Google for Developers). However, Google could build similar web-enrichment features into its Places API. [Inferred]: The structural barrier is that Google optimizes its Places API for its own ad-driven ecosystem rather than for third-party AI agent use cases, creating a misalignment between Google's incentives and AI-agent developers' needs.

**Commoditization risk:** POI data aggregation is a crowded space with well-funded competitors (Foursquare, SafeGraph, Placer.ai, Radar.io) and the Google Maps Platform itself. The web-enrichment layer is technically replicable — any company with web crawling capabilities could layer web context onto place data. The differentiation depends on execution quality (accuracy, freshness, coverage) and the specific framing for AI agent use cases, neither of which constitutes a structural moat at this stage.

## Market & Traction

**Traction signals:**
- The YC company description states "several customers already run VOYGR to continuously validate places data accuracy at scale" (YC company page). No specific customer count, names, or revenue figures are disclosed.
- The voygr.tech website features a waitlist signup mechanism via Supaframe integration (voygr.tech). No waitlist count is publicly disclosed.
- LinkedIn company page exists at linkedin.com/company/voygr (LinkedIn search result). Follower count not retrievable.
- No Product Hunt listing found.
- No press coverage found in named publications.
- No app store presence found.
- No Discord or Slack community found.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. VOYGR |
|-----------|---------|-------------|------------------------------|
| **Foursquare** | ~$448M total raised (Tracxn, via search snippet) | $57.9M revenue (Getlatka, July 2025 via search snippet) | Broad location intelligence platform with 100M+ POIs across 200+ countries; focuses on foot traffic analytics and consumer-facing products rather than AI-agent-specific data enrichment |
| **SafeGraph** | $61M total raised (Tracxn, via search snippet) | Revenue unknown | Specializes in curated geospatial POI data for analytics; emphasizes physical places data at scale; lacks the web-context enrichment layer |
| **Placer.ai** | $277.9M total raised; $1.5B valuation (TechCrunch, Aug 2024) | $100M ARR (Placer.ai blog, Feb 2024) | Focuses on foot traffic analytics for retail and CRE rather than API-first place validation for AI agents |
| **Radar.io** | $85.5M total raised (Tracxn, via search snippet) | Revenue unknown | Developer-focused location infrastructure (geocoding, geofencing, search); positions as cost-effective Google Maps alternative; competes on similar API-first model |
| **Google Maps Platform** | N/A (Google subsidiary) | N/A | Dominant incumbent with the broadest POI coverage; recently deprecated legacy Places API and changed pricing model (March 2025); not specifically optimized for AI agent use cases |

**Why now:** [Inferred]: Two converging catalysts: (1) The rapid adoption of LLM-based AI agents that need to take real-world actions (book reservations, place orders, navigate) creates demand for continuously validated, semantically rich place data that goes beyond static POI databases. (2) Google's March 2025 pricing restructuring — removing the universal $200 monthly credit and designating the legacy Places API as deprecated (Google for Developers, March 2025) — creates friction for developers who relied on free-tier Google Maps access, opening a window for alternatives.

## Founders & Team

**Vlad Baskakov** — Co-founder & CEO
- Harvard MBA, 2016–2018 (ContactOut, via search snippet); Master's in Business and Computer Science from Higher School of Economics (ContactOut, via search snippet)
- 15+ years in growth/GM roles (YC company page)
- Google Maps: Product Strategy Principal — led API product strategy and GTM, bootstrapped new API products, shaped Maps–Gemini data sharing (RocketReach/ZoomInfo, via search snippets)
- Previously: McKinsey; Lyft; OYO USA; Gett (ContactOut/RocketReach, via search snippets)
- Twitter/X: @vladbaskakov95 — account appears suspended; follower count not retrievable (X.com search result)
- LinkedIn: linkedin.com/in/vladbaskakov/ — "VOYGR (YC W26)" (LinkedIn search result)
- GitHub: No confirmed public repos found

**Yarik Markov** — Co-founder & CTO
- MS Computer Science, SUNY Stony Brook, 2011–2013 (RocketReach, via search snippet)
- ~20 years engineering experience (YC company page)
- Apple: Engineering AIML (most recent role) (LinkedIn/RocketReach, via search snippets)
- Previously: Facebook/Meta, Google — led ML/search teams at all three (YC company page; RocketReach, via search snippet)
- Has academic publications indexed on Google Scholar under "Yaroslav Markov" (scholar.google.com/citations?user=3PBju5IAAAAJ)
- Twitter/X: No confirmed public account found
- LinkedIn: linkedin.com/in/yarik-markov-b40b8341/ (LinkedIn search result)
- GitHub: No public repos found

**Co-founder relationship:** Both founders are based in the San Francisco Bay Area. No shared prior employer was identified from the available data — Vlad's career spans McKinsey, Lyft, OYO, Gett, and Google Maps GTM; Yarik's spans Google engineering, Facebook/Meta, and Apple AIML. Both worked at Google at overlapping timeframes, which may indicate prior acquaintance, though specific team overlap is not confirmed.

**Founder-market fit:** Vlad led product strategy and GTM for the Google Maps API, giving him direct experience with the product category VOYGR is building in, as well as the sales motion required to sell location APIs to developers and enterprises. His prior roles at Lyft, Gett, and OYO provide firsthand experience as a consumer of mapping/place data in ridesharing and travel — core use cases for VOYGR's product. Yarik's decade-plus leading ML and search teams at Apple, Google, and Meta provides the technical foundation for building the ML-driven data enrichment and validation pipeline that differentiates VOYGR from static POI providers.

## Key Risks

**Google Maps Platform competition:** Google directly operates the dominant Places API and has the resources to add web-context enrichment to its own offering. Google's recent Maps–Gemini data sharing initiative (referenced in Vlad's Google role description, RocketReach via search snippet) suggests Google is already integrating AI capabilities into its Maps data layer, which could subsume VOYGR's differentiation.

**Data sourcing and freshness dependency:** VOYGR's value proposition depends on continuously crawling and integrating web context (news, articles, events) with place data. This requires ongoing web crawling infrastructure and may face challenges with data licensing, web scraping legal constraints, and the cost of maintaining freshness at scale across millions of POIs.

**Well-funded competitive field:** The POI data and location intelligence space includes Foursquare ($448M raised), Placer.ai ($277.9M raised, $1.5B valuation), Radar.io ($85.5M raised), and SafeGraph ($61M raised). These competitors have established data assets, customer relationships, and distribution channels. VOYGR must carve out the AI-agent niche before incumbents pivot to serve it.

**Brand disambiguation:** The name "VOYGR" is phonetically similar to "Voyager," which is used by multiple companies including NuScale Power's VOYGR reactor design, Voyager Therapeutics (NASDAQ: VYGR), and the defunct crypto platform Voyager Digital. This creates potential SEO and brand confusion challenges.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $21.21B location intelligence market in 2024, 16.8% CAGR to 2030 (Grand View Research, via search snippet) |
| SAM | No public data found for AI-agent-specific place data sub-segment |
| Traction | "Several customers" running at-scale place data validation (YC company page); waitlist signup on website (voygr.tech); no quantified metrics disclosed |
| Revenue Signal | No public data found |
| Founders | Vlad Baskakov (CEO): Harvard MBA, ex-Google Maps Product Strategy Principal, ex-McKinsey/Lyft/OYO/Gett. Yarik Markov (CTO): MS CS SUNY Stony Brook, ~20yr engineering, ex-Apple AIML/Google/Meta ML & search lead |
| Competitors | Foursquare (~$448M raised, $57.9M revenue, broad location intelligence vs. VOYGR's AI-agent focus); SafeGraph ($61M raised, revenue unknown, static POI analytics vs. web-enriched validation); Placer.ai ($277.9M raised, $100M ARR, foot traffic analytics vs. API-first agent data); Radar.io ($85.5M raised, revenue unknown, developer location infrastructure vs. place enrichment); Google Maps Platform (incumbent, broadest coverage, not agent-optimized) |
| Moat Signals | No public data found. [Inferred]: Potential moat could develop via data quality feedback loop from customer usage at scale, but unproven at this stage |
| Risk Factors | Google Maps Platform direct competition with AI integration (Maps–Gemini), well-funded incumbent competitors ($61M–$448M raised), brand disambiguation with "Voyager" entities |
| Founder Reach | Vlad Baskakov: Twitter @vladbaskakov95 (suspended, count not retrievable), LinkedIn listed. Yarik Markov: Twitter not found, LinkedIn listed. GitHub: no confirmed repos for either founder |
| Distribution Signals | No public data found |
| Emails | founders@voygr.tech (YC company page) |
