# Axis

> An AI System for Institutional Trading Desks

| Field | Value |
|-------|-------|
| Website | https://axisanalysis.com |
| YC Page | https://www.ycombinator.com/companies/axis-2 |
| Batch | Winter 2026 |
| Industry | Fintech / Fintech |
| Team Size | 2 |
| Location | No public data found |
| Tags | Fintech, Analytics, Market Research, Trading, AI |
| YC Partner | Ankit Gupta |
| Emails | No public data found |

## The Idea

**Problem:** Physical commodities traders — those responsible for the movement and storage of metals, agricultural products, and energy globally — operate in highly complex informational environments. They must synthesize derivatives positioning, refinery data, storage inventory, import/export flows, geopolitical events, broker commentary, news, and macro narratives to make trading decisions across both public markets and bilateral OTC agreements (YC company page). Commodities make up approximately one-third of global goods exports (YC company page). Existing tools are primarily data feeds and legacy CTRM (Commodity Trading and Risk Management) platforms that require traders to manually aggregate and interpret disparate data sources.

**Approach:** Axis allows traders to deploy AI models that continuously monitor and analyze markets and strategies relevant to their positions. The system parses unstructured market information — including news, broker data, and macro narratives — and provides an AI-driven analytical layer for commodities markets (YC company page). The company describes this as a paradigm shift from passive data feeds to systems that "thoughtfully monitor and analyze markets 24/7" (YC company page).

**Differentiation:** Unlike legacy CTRM platforms (e.g., Molecule, Eka/Quoreka, Enverus) that focus on trade execution, risk management, and operational workflows, Axis targets the upstream analytical and research layer — the process of understanding what is happening across markets before a trade is placed. Unlike commodity data providers such as Vortexa and Kpler, which deliver structured cargo-tracking and flow data, Axis focuses on deploying AI models that synthesize unstructured information into trading-relevant insights. Unlike CommodityAI (YC W24), which automates commodity operations and shipment management, Axis targets the trading desk's analytical function.

**Business Model:** No pricing page was found on the website (website returned only a page title, "Axis | Commodities AI," with no visible content at time of research). [Inferred]: Most likely monetization path is a SaaS subscription model (per-seat or per-desk) sold to institutional commodity trading desks, given the enterprise B2B nature of the product and standard pricing models for trading analytics tools.

**TAM/SAM:** The CTRM software market was valued at approximately $112 million in 2024 and is projected to reach $162.3 million by 2030, growing at a CAGR of 6.4% (Verified Market Research via search snippet). A separate estimate sizes the broader CTRM market at $13.8 billion by 2031 at 8.8% CAGR (Valuates Reports via search snippet) — the discrepancy likely reflects different scope definitions. The broader AI trading technology market is projected to reach $75.5 billion by 2034 at 20.7% CAGR (Pragmatic Coders via search snippet). [Inferred]: Axis's serviceable market is a subset of institutional commodities trading desk spend on analytics and research tools, which sits between the narrow CTRM software market and the broader AI trading market.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct enterprise sales to institutional physical commodities trading desks, starting with firms where the founders have existing relationships from their quantitative trading backgrounds. Commodities trading is a relationship-driven market with a concentrated buyer base (major trading houses, commodity merchants, energy companies), making direct sales the standard approach.

## Defensibility

No defensibility signals found in public sources at this stage. [Inferred]: Potential moat could develop via (1) proprietary data pipelines and model training on commodities-specific unstructured data, which accumulates over time and is difficult for competitors to replicate; (2) workflow lock-in as traders build and customize models within the platform; and (3) domain-specific model performance improvements from feedback loops with institutional users. These are unproven at this stage.

**Market structure:** Legacy CTRM vendors (FIS, Enverus, Eka) are built around transactional workflows — trade capture, risk management, settlement — and their architectures are not designed to serve as real-time AI analytical layers. Building an AI research product on top of legacy infrastructure would require significant re-architecture. Data providers (Kpler, Vortexa, S&P Global Platts) sell structured datasets and would face business model cannibalization risk in offering AI-driven analysis that could reduce demand for their raw data feeds. [Inferred]: These structural barriers provide a window but are not insurmountable; well-resourced incumbents could build or acquire their way into this space.

**Commoditization risk:** General-purpose LLM providers (OpenAI, Anthropic, Google) could enable commodity trading firms to build in-house analytical tools. QuantConnect and similar open-source algo trading platforms could extend into commodities analytics. The barrier to entry lies in commodities-specific data integration, domain expertise in physical trading workflows, and the effort required to build reliable models for niche commodity markets.

## Market & Traction

1. **Traction signals:** No public data found. The company website returned only a page title with no visible content at time of research. No press coverage, Product Hunt launch, Hacker News post, app store listing, or social media presence was confirmed as belonging to this specific company. Twitter handles @Axis_AI and @trading_axis appeared in search results but could not be verified as belonging to this Axis entity. No LinkedIn company page was identified. No Product Hunt listing found. No job postings found beyond the 2-person team.

2. **Competitive landscape:**
   - **Kpler** ($200M raised from Insight Partners; acquired Spire Maritime for $233.5M in May 2025 (CB Insights via search snippet)): Subscription-based commodity data and analytics platform covering trade flows, maritime operations, and energy transition. Differentiator vs. Axis: Kpler is a structured data provider focused on cargo tracking and trade flow visualization, not an AI model deployment platform for trading desk research.
   - **Vortexa** (~$34M+ total raised including $34M from Morgan Stanley Expansion Capital; ~$500M enterprise value (Asymmetrix Intelligence via search snippet)): Satellite-based energy cargo tracking and analytics, mapping $3.4T in annual waterborne energy trades (Vortexa website via search snippet). Differentiator vs. Axis: Vortexa provides satellite-derived structured data for energy markets specifically; Axis targets unstructured information synthesis across broader commodity types.
   - **CommodityAI** (YC W24; $500K pre-seed, March 2024 (YC page via search snippet)): AI automation for commodity operations — shipment management, document processing, vessel tracking. Differentiator vs. Axis: CommodityAI focuses on post-trade operations and logistics automation, while Axis targets pre-trade market analysis and research.
   - **Molecule Software** ($14.4M total raised; $5.3M revenue in 2024, up from $3.8M in 2023 (Getlatka via search snippet)): Cloud-based CTRM/ETRM platform for trade capture and risk management. Differentiator vs. Axis: Molecule is a trade execution and risk management platform, not an AI analytical layer.
   - **Enverus** (acquired by Blackstone in August 2025; estimated $854.1M annual revenue (Growjo via search snippet)): Enterprise energy data analytics and CTRM suite. Differentiator vs. Axis: Enverus is a broad energy data and analytics incumbent with CTRM capabilities; Axis is a focused AI research tool for trading desks.

3. **Why now:** [Inferred]: The specific catalyst appears to be the maturation of large language models capable of parsing and synthesizing unstructured text (news, broker reports, macro commentary) at scale and speed — a capability that crossed a practical performance threshold in 2023-2024 with GPT-4-class models. Physical commodity trading generates enormous volumes of unstructured information that was previously intractable for automated systems. Simultaneously, commodity market volatility driven by geopolitical disruptions (Russia-Ukraine conflict, Red Sea shipping disruptions, energy transition dynamics) has increased the analytical burden on trading desks, creating stronger demand for tools that can process information faster than human analysts.

## Founders & Team

**Ian Wang** — Co-founder
- Education: Yale, Class of 2025 (YC company page)
- Background described as "interested in trading" (YC company page)
- Twitter/X: No verified public account found (handle @iantwang appeared in search results but could not be confirmed as belonging to this individual)
- LinkedIn: linkedin.com/in/ian-wang-m1n1 — headline: "Axis - Commodities" (LinkedIn via search snippet)
- GitHub: No public repos found

**Eric Zhu** — Co-founder
- Education: Math at University of Chicago (YC company page)
- Background: Previous quantitative trader (YC company page). Search results indicate a "Quantitative Trading Intern at TransMarket Group" with Applied Math from UChicago, which is consistent with this profile (LinkedIn search snippet), though the match could not be definitively confirmed.
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/eric-zhu-774a4918b — headline: "Axis" (LinkedIn via search snippet)
- GitHub: No public repos found

Note: Multiple individuals named "Eric Zhu" appear in search results, including the founder of Aviato (a different company). The Eric Zhu at Axis is distinct from the teenage founder of Aviato who raised $2.3M (TechCrunch, July 2024).

**Co-founder relationship:** Both founders appear to have quantitative and trading-related backgrounds. No shared prior employer or university was identified — Wang attended Yale and Zhu attended UChicago. No public data on co-founder history.

**Founder-market fit:** The team combines quantitative trading experience (Zhu as a previous quantitative trader, per YC page) with what appears to be a finance-oriented Yale background (Wang). Both are recent graduates building in a domain they have direct experience with. The 2-person team is consistent with pre-seed stage.

## Key Risks

**Name disambiguation / brand confusion:** "Axis" is an extremely common company name across multiple industries — Axis Bank/Axis Direct (Indian brokerage), Axis Technologies Trading LLC, Axis Holding Corporation (commodities trading platform), and numerous other entities. This creates SEO challenges, potential customer confusion, and trademark risk, particularly in the financial services sector where Axis Direct already operates a trading platform.

**Narrow initial market segment:** Physical commodity trading desks represent a concentrated buyer base. The number of institutional physical commodity trading firms globally is limited (major trading houses like Vitol, Trafigura, Glencore, plus energy majors and agricultural merchants). A slow enterprise sales cycle combined with a small addressable set of initial customers could constrain growth velocity.

**Well-funded incumbent adjacency:** Kpler ($200M raised, Insight Partners backing), Vortexa ($500M EV, Morgan Stanley backing), and Enverus (Blackstone-acquired, $854M estimated revenue) all have resources, existing customer relationships, and data assets that could be extended into AI-driven analytics for trading desks. S&P Global Platts, as the dominant commodity price reporting agency, represents an additional potential entrant with deep market data assets.

**LLM dependency and hallucination risk:** An AI analytical tool for institutional trading decisions carries high-stakes accuracy requirements. Model hallucinations or unreliable outputs in a trading context could result in significant financial losses for customers and reputational damage for the product. The underlying LLM technology is controlled by third-party providers, creating supply chain and cost structure risks.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | CTRM software market: $112M in 2024, projected $162.3M by 2030 at 6.4% CAGR (Verified Market Research via search snippet). Broader AI trading market: $75.5B by 2034 at 20.7% CAGR (Pragmatic Coders via search snippet). |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Ian Wang (Co-founder): Yale '25, trading interest. Eric Zhu (Co-founder): Math @ UChicago, previous quantitative trader. |
| Competitors | Kpler ($200M raised, revenue unknown, structured commodity data/cargo tracking vs. Axis's AI analytical layer); Vortexa ($34M+ raised, ~$500M EV, satellite-based energy cargo analytics vs. Axis's unstructured info synthesis); CommodityAI ($500K pre-seed YC W24, revenue unknown, operations automation vs. Axis's trading desk research); Molecule ($14.4M raised, $5.3M ARR, CTRM trade execution vs. Axis's AI analysis); Enverus (Blackstone-acquired, ~$854M revenue, enterprise energy data vs. Axis's focused AI tool) |
| Moat Signals | No public data found |
| Risk Factors | Brand name disambiguation in crowded "Axis" namespace, narrow initial buyer base of institutional commodity trading desks, well-funded incumbent adjacency (Kpler, Vortexa, Enverus) |
| Founder Reach | Ian Wang: LinkedIn linkedin.com/in/ian-wang-m1n1 (count not retrievable), Twitter not verified. Eric Zhu: LinkedIn linkedin.com/in/eric-zhu-774a4918b (count not retrievable), Twitter not found. |
| Distribution Signals | No public data found |
| Emails | No public data found |
