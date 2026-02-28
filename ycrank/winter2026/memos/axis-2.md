# Axis

> Models for Monitoring Commodities Markets

| Field | Value |
|-------|-------|
| Website | https://axisanalysis.com |
| YC Page | https://www.ycombinator.com/companies/axis-2 |
| Batch | Winter 2026 |
| Industry | Fintech / Fintech |
| Team Size | 2 |
| Location | No public data found |
| Tags | Fintech |

## The Idea

**Problem:** Physical commodities traders — those who decide the movement and storage of metals, agricultural products, and energy (crude, refined products, natural gas, petroleum) across the globe — must monitor a wide array of data sources to inform their strategies: prices and derivatives, refinery data, storage inventory, import/export flows, and geopolitical events (YC company page). These data sources are fragmented and voluminous. Commodities make up roughly a third of global goods exports (YC company page). Existing solutions in this space tend to be either traditional data terminals (Argus Media, S&P Global Platts) providing price assessments and market news, or analytics platforms (Kpler, Vortexa) focused on specific verticals like energy flows and maritime tracking. Traders currently stitch together insights from multiple subscriptions and internal spreadsheets.

**Approach:** Axis is building an AI research platform that allows a trader or analyst to deploy custom AI models for monitoring information relevant to their specific strategy (YC company page). Per the company's LinkedIn description, "Axis builds custom AI models to monitor realtime commodities prices, flows, and market structure" (LinkedIn company page). This positions the product as a model-deployment layer rather than a static data feed — the user configures models to watch for signals across structured and unstructured data sources relevant to their particular trading book.

**Differentiation:** Unlike incumbent data providers (Argus Media, S&P Global Platts) that offer standardized price assessments and reports, Axis's stated approach is customizable model deployment — each trader configures monitoring for their own strategy rather than consuming a one-size-fits-all data product. Compared to analytics platforms like Kpler (which focuses on global commodity flows via vessel tracking) and Vortexa (which tracks waterborne energy movements), Axis appears oriented toward providing an analytical layer that spans multiple data types rather than specializing in a single data modality. CommodityAI (also YC W26) focuses on automating operational workflows (trade confirmations, data entry into CTRMs) rather than market monitoring and research (YC company page for CommodityAI).

**Business Model:** No public pricing page or revenue data found. The company website returned only a title ("Axis | Commodities AI") with no visible content at the time of research. [Inferred]: The most likely monetization path is SaaS subscription pricing, potentially tiered by number of models deployed, data sources accessed, or seats, consistent with standard practice among commodities analytics platforms like Kpler and Vortexa.

**TAM/SAM:** The global AI trading platform market was estimated at $11.23 billion in 2024 and is projected to reach $33.45 billion by 2030 at a 20.0% CAGR (Grand View Research, 2024 via search snippet). A narrower estimate for CTRM software specifically places the market at approximately $112–156 million in 2024, growing at roughly 6.4–6.9% CAGR (Verified Market Research / Credence Research, 2024 via search snippet). The broader commodity trading services market was estimated at $2 trillion in 2025 (Archive Market Research, 2025 via search snippet). Axis's addressable segment — AI-powered analytics for commodities specifically — sits between these figures, but no public SAM estimate specific to this niche was found.

**GTM / Distribution:** No public GTM data found. [Inferred]: Most likely distribution path is direct sales to commodities trading desks at physical trading houses, banks with commodity desks, and hedge funds, given the specialized and high-value nature of the target customer. The YC network and the founders' trading backgrounds may facilitate early warm introductions.

## Defensibility

No defensibility signals found in public sources at this stage. [Inferred]: Potential moat could develop via proprietary data integrations (the more commodity-specific data sources Axis connects, the harder it is to replicate), model customization workflows that create switching costs as traders build their monitoring configurations on the platform, and accumulated domain-specific training data over time. These are unproven at this stage.

**Market structure:** Incumbent data providers like Argus Media and S&P Global Platts are built around editorial price assessment processes and benchmark methodologies that regulatory frameworks (e.g., IOSCO Principles for Oil Price Reporting Agencies) depend on. Their business model is selling standardized data and benchmarks, not customizable AI model deployment. [Inferred]: A structural barrier may exist in that incumbents' core revenue comes from benchmark price reporting — pivoting to a model-deployment platform would cannibalize their existing subscription products and require a fundamentally different technology stack. However, well-funded analytics platforms like Kpler ($441M raised) could expand into model customization if they chose to.

**Commoditization risk:** The core concept — applying AI models to monitor commodities market data — does not require proprietary technology that is difficult to replicate. Kpler, Vortexa, and Kayrros all have significant data pipelines and AI/ML capabilities. Large language model providers and general-purpose AI platforms could also enable custom monitoring workflows. The defensibility will likely depend on depth of commodity-domain-specific data integrations and the quality of pre-built model templates rather than a fundamental technical barrier.

## Market & Traction

**Traction signals:**
- Company LinkedIn page: https://www.linkedin.com/company/axiscommodities — lists 3 employees (LinkedIn company page). Follower count not retrievable.
- Company website (axisanalysis.com): Returned only a page title ("Axis | Commodities AI") with no accessible content at time of research.
- No Product Hunt listing found.
- No Twitter/X account found for the company.
- No Discord or Slack community found.
- No app store presence found.
- No press coverage in named publications found.
- No public revenue, user, or customer data found.
- No job postings listed on YC page (0 open positions).

**Competitive landscape:**

1. **Kpler** ($441M raised; $100M ARR as of January 2024 per company announcement): Subscription-based data and analytics platform providing real-time proprietary data on global commodity flows. Key differentiator vs. Axis: Kpler is a mature, vertically integrated platform with proprietary vessel-tracking and flow data, while Axis is positioning as a model-deployment layer. Kpler acquired ChartDesk (2024), Spire Maritime (2025), and Bridgeton Research Group (December 2025) (Kpler blog / Tracxn via search snippets).

2. **Vortexa** ($64M raised, including $34M Series C in January 2024 led by Morgan Stanley Expansion Capital, and $24.88M debt from CIBC Innovation Banking in October 2024; near profitability per company statements): Real-time analytics for energy and freight markets, tracking over $3 trillion of waterborne energy trades per year (Vortexa press / London TechWatch via search snippets). Key differentiator vs. Axis: Vortexa specializes in waterborne energy cargo tracking; Axis aims to span multiple commodity types and data modalities.

3. **Kayrros** ($83.9M raised, $44.1M Series C in March 2022; $20.2M revenue in 2024 up from $10.6M in 2023 per Getlatka via search snippet): Uses AI to process satellite imagery for energy market intelligence and emissions monitoring. Key differentiator vs. Axis: Kayrros focuses on satellite-derived environmental and asset intelligence; Axis positions as a broader model-deployment platform for traders.

4. **CommodityAI** (YC W26; $1.5M raised from Gurtin Ventures, Rebel Fund, and YC per PitchBook via search snippet; 5 employees): Builds automation agents for physical commodity traders focused on operational workflows — extracting data from trade confirmations, contracts, and vessel updates. Key differentiator vs. Axis: CommodityAI automates back-office operations; Axis targets front-office research and market monitoring.

5. **Argus Media** ($2.93B raised from HgCapital and General Atlantic; revenue not publicly disclosed): Established in 1970, provides commodity price assessments, market news, analytics, and forecasting (Wikipedia / Tracxn via search snippet). Key differentiator vs. Axis: Argus is a legacy benchmark and editorial-driven data provider; Axis offers AI model deployment for custom monitoring.

**Why now:** [Inferred]: The convergence of large language models capable of processing unstructured text (geopolitical news, regulatory filings, vessel reports) with structured quantitative data (prices, inventory levels) at lower cost and higher quality than previously possible may enable a new category of customizable analytical tools for commodity traders. The rapid decline in inference costs for frontier AI models in 2024–2025 lowers the barrier to building real-time monitoring systems. Additionally, the increasing volatility in global commodity markets driven by geopolitical disruptions (e.g., energy supply chain shifts, trade policy changes) may be increasing demand for more sophisticated, customizable monitoring tools beyond what static data feeds provide.

## Founders & Team

**Ian Wang** — Co-founder
- Yale University, Class of 2025 (YC company page)
- Described as "interested in trading" on the YC profile (YC company page)
- Co-founders have known each other since pre-school (YC company page)
- Twitter/X: No public account found
- LinkedIn: https://www.linkedin.com/in/ian-wang-m1n1/ — listed as being at Dexter Expert Network with Yale education (LinkedIn search result via search snippet). Profile details not fully retrievable.
- GitHub: No public repos found

**Eric Zhu** — Co-founder
- University of Chicago, Math (YC company page)
- Previous quantitative trading intern at TransMarket Group (LinkedIn profile title via search snippet)
- Twitter/X: No public account found specifically for this Eric Zhu. Note: a different Eric Zhu (@ericzhu105) is the founder of Aviato — this is a separate individual.
- LinkedIn: https://www.linkedin.com/in/eric-zhu-774a4918b/ — listed as at Axis, Math @ UChicago, located in San Francisco Bay Area (LinkedIn search result via search snippet). Profile details not fully retrievable.
- GitHub: No public repos found linked to this individual

**Additional team member:** Shawn Olstein is listed as an employee on the Axis LinkedIn company page. A LinkedIn profile for Shawn Olstein shows Harvard University education and prior experience at the Ministry of Foreign Affairs, Taiwan (R.O.C.), located in New York City Metropolitan Area (LinkedIn search result via search snippet). Role at Axis not specified.

**Co-founder relationship:** Ian Wang and Eric Zhu have known each other since pre-school, per the YC company page. This is a long-standing personal relationship predating their professional careers.

**Founder-market fit:** Eric Zhu has direct quantitative trading experience through his internship at TransMarket Group, a derivatives and commodities trading firm, combined with a mathematics background from UChicago. Ian Wang's Yale education and stated interest in trading provide complementary background. Their shared thesis that "models would enable a new paradigm for how we interact with markets" (YC company page) reflects a quantitative, model-first orientation suited to building analytical tools for traders. No advisors, board members, or notable investors beyond the standard YC partnership (YC partner: Ankit Gupta) were found in public sources.

## Key Risks

**Brand disambiguation in a crowded namespace:** "Axis" is an extremely common company name. Search results returned Axis Capital (insurance), Axis Communications (surveillance), Axis Direct (Indian brokerage), Axis Commodities (Indian MCX trading), axiscommodities.com (a separate entity), and multiple other companies. This creates SEO and brand recognition challenges. The domain axisanalysis.com is differentiated but not intuitive. The LinkedIn handle "axiscommodities" overlaps with an existing Indian commodities firm at axiscommodity.com.

**Well-funded incumbent analytics providers:** Kpler ($441M raised, $100M ARR), Vortexa ($64M raised), and Kayrros ($83.9M raised) all operate in overlapping segments of commodity analytics with established data pipelines, customer relationships, and significantly more resources. Kpler's active acquisition strategy (three acquisitions in 2024–2025) demonstrates willingness to buy rather than build in adjacent capabilities.

**Narrow customer segment with long sales cycles:** Physical commodities trading desks at major trading houses (Vitol, Trafigura, Glencore) and banks are a small, concentrated customer base. Enterprise sales to these institutions typically involve lengthy procurement processes, compliance reviews, and integration requirements. No evidence of existing customer relationships or LOIs was found in public sources.

**Data sourcing dependency:** The value proposition depends on integrating diverse, real-time commodity data sources (prices, derivatives, refinery data, storage inventory, import/exports, geopolitical events). Many of these data sources are proprietary, expensive, and controlled by incumbents like Argus Media and S&P Global Platts. Securing reliable, cost-effective access to these data feeds is a non-trivial challenge for a pre-seed company.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $11.23B AI trading platform market (Grand View Research, 2024 via search snippet, 20.0% CAGR); $112–156M CTRM software market (Verified Market Research / Credence Research, 2024 via search snippet, ~6.5% CAGR) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Ian Wang (Co-founder): Yale '25, interested in trading. Eric Zhu (Co-founder): Math @ UChicago, ex-TransMarket Group quantitative trading intern |
| Competitors | Kpler ($441M raised, $100M ARR, comprehensive commodity flow tracking); Vortexa ($64M raised, revenue unknown, waterborne energy analytics); Kayrros ($83.9M raised, $20.2M revenue, satellite-based commodity intelligence); CommodityAI ($1.5M raised, revenue unknown, operations automation for traders); Argus Media ($2.93B raised, revenue unknown, legacy benchmark data provider) |
| Moat Signals | No public data found |
| Risk Factors | Brand disambiguation in crowded "Axis" namespace, well-funded incumbent analytics providers (Kpler at $100M ARR), data sourcing dependency on proprietary commodity feeds |
| Founder Reach | Ian Wang: Twitter not found, LinkedIn linkedin.com/in/ian-wang-m1n1 (count not retrievable), GitHub not found. Eric Zhu: Twitter not found, LinkedIn linkedin.com/in/eric-zhu-774a4918b (count not retrievable), GitHub not found |
| Distribution Signals | No public data found |
