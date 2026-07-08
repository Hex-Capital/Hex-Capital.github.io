# Ekpa

> Building Autonomous Research Agents for Trading

| Field | Value |
|-------|-------|
| Website | https://goekpa.com/ |
| YC Page | https://www.ycombinator.com/companies/ekpa |
| Batch | Summer 2026 (YC page) |
| Industry | Fintech / Fintech -> Asset Management |
| Team Size | 2 |
| Location | Boston, MA, USA |
| Tags | Consumer Finance |
| YC Partner | Ankit Gupta (YC page) |
| Emails | No public data found |

## The Idea

- **Problem:** Retail investors juggle brokerage holdings, news, analyst research, and SEC filings across disconnected surfaces, with no unified read-only aggregation tied to what they actually own (goekpa.com product page).
- **Approach:** Portfolio dashboard that connects via read-only brokerage access, aggregates positions, and layers holding-specific news, share-count recommendations sourced from analyst ratings, SEC filings, and economic data, plus alerts at 3/5/10% move thresholds (goekpa.com).
- **Differentiation:** [Inferred]: Distinct from Composer (drag-and-drop rule-based automation) and Numerai (crowdsourced hedge fund models) by targeting individual retail portfolio holders with LLM-generated per-position research rather than strategy authoring or professional quant workflows (CBInsights, Craft.co competitor lists).
- **Business Model:** Pricing and launch date listed as "forthcoming" on the FAQ; product is in pre-launch read-only mode (goekpa.com FAQ). [Inferred]: Likely consumer subscription given retail-facing dashboard framing and "Consumer Finance" YC tag.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; adjacent AI-financial-research player AlphaSense raised at $7.5B valuation, July 2026 (Crescendo AI funding tracker).
- **GTM / Distribution:** [Inferred]: Direct-to-consumer signup via waitlist on goekpa.com (search snippet references waitlist phase); no paid, partnership, or influencer distribution disclosed.

## Defensibility

- **Moat today:** No defensibility signals found in public sources; product is pre-launch (goekpa.com FAQ).
- **Future moat:** [Inferred]: Proprietary agent workflows that ingest 10-K/10-Q filings and produce position-specific share-count recommendations could create data/workflow lock-in; unproven because no shipped product, no user base, no accuracy benchmarks are public.
- **Market structure:** [Inferred]: No structural barrier identified at this stage; brokerages (Fidelity, Schwab), Public.com, and Robinhood already run in-app research and AI features, and read-only aggregation itself (Plaid/SnapTrade) is a commodity API layer.
- **Commoditization risk:** LLM-based per-position research summaries can be reproduced by any team with brokerage-aggregation API access and a foundation-model contract; incumbents Composer, Numerai, and AlphaSense already occupy adjacent AI-trading niches (CBInsights, Craft.co).

## Market & Traction

- **Traction signals:**
  - Product status: pre-launch, read-only mode, waitlist open (goekpa.com FAQ, July 2026).
  - No revenue, user counts, press coverage, app store presence, Product Hunt launch, Discord/Slack, or company social accounts found in searches (WebSearch, July 2026).
- **Competitors:**
  - Composer (funding not disclosed in results, revenue unknown): no-code drag-and-drop strategy builder for retail; Ekpa targets research/recommendation rather than strategy authoring (ment.tech Top AI Trading list).
  - Numerai ($21.5M raised per Crunchbase, revenue unknown): crowdsourced encrypted-data ML tournament for hedge-fund signals; institutional focus vs. Ekpa's retail portfolio use case (Crunchbase; CBInsights).
  - AlphaSense ($350M round at $7.5B valuation, July 2026, led by Vitruvian Partners; revenue undisclosed): enterprise AI search over filings/transcripts for institutions; Ekpa serves retail account holders (Crescendo AI funding tracker).
  - LinqAlpha ($22M Series A, July 2, 2026, led by AVP; 70+ financial-institution customers): AI agents processing filings/transcripts/news for hedge funds and asset managers; institutional vs. Ekpa retail (Crescendo AI funding tracker).
  - QuantConnect (funding undisclosed in results, revenue unknown): open-source algorithmic trading and backtesting platform; developer/quant persona vs. Ekpa retail holder (CBInsights Numerai competitor set).
- **Why now:** [Inferred]: LLM cost/quality thresholds crossed in 2024-2025 enabled per-holding filing summarization at consumer price points, and broker-aggregation APIs (Plaid Investments, SnapTrade) matured over the same window.

## Founders & Team

- **Yuga Patel (Co-founder):**
  - Background: CS/AI + Economics at MIT (LinkedIn headline "Building Ekpa | CS/AI + Econ @ MIT"); no prior exits found in public sources (LinkedIn search result).
  - Twitter/X: No public account found in searches.
  - LinkedIn: "Building Ekpa | CS/AI + Econ @ MIT" (linkedin.com/in/yugapatel26).
  - GitHub: No public repos found in searches.
- **Anant Asthana (Co-founder):**
  - Background: Listed as MIT student on LinkedIn (linkedin.com/in/anant-asthana-mit); authored a blog post "Autonomous AI Agents and Financial Trading: What's Real Today vs What's Hype" at anant.us (WebSearch); name collides with multiple other Anant Asthanas (Databricks, Anthology, MIT CSAIL "Anantshri Asthana") — those are separate individuals.
  - Twitter/X: No public account confirmed in searches.
  - LinkedIn: "Student - Massachusetts Institute of Technology" (linkedin.com/in/anant-asthana-mit).
  - GitHub: No public repos found in searches.
- **Co-founder relationship:** Both list MIT affiliation in LinkedIn headlines, suggesting shared university (LinkedIn results).
- **Founder-market fit:** [Inferred]: Patel's stated CS/AI + Economics coursework at MIT and Asthana's published writing on autonomous AI trading agents align with the product's LLM-agent-for-trading premise; no prior finance-industry roles, hedge-fund experience, or named advisors/investors beyond the standard YC deal found in public sources.

## Key Risks

- **Regulatory (investment adviser) risk:** Product delivers "share count recommendations" tied to user holdings; goekpa.com carries a disclaimer that Ekpa is "not a broker-dealer or investment adviser" (goekpa.com), but SEC/FINRA scrutiny of AI-generated personalized recommendations increased in 2024-2025 and could force registration or feature limits; no mitigation disclosed beyond the disclaimer.
- **Technical feasibility of accurate LLM-driven recommendations:** Core value proposition depends on agents synthesizing SEC filings, analyst ratings, and economic data into share-count guidance with accuracy sufficient for retail trust; no benchmarks, backtests, or accuracy data disclosed on the site (goekpa.com), and hallucination in financial LLM outputs is a documented open problem (Wundertrading agentic-trading review).
- **Distribution / CAC risk:** No public GTM channel, waitlist size, social presence, or press coverage found (WebSearch, July 2026); consumer fintech CAC in retail brokerage-adjacent products is set by incumbents Robinhood, Public, and Fidelity.
- **Commoditization by incumbents:** Public.com, Robinhood, and brokerage platforms have launched in-app AI research features in 2024-2026; Ekpa's read-only aggregation layer does not prevent them from offering the same features natively (adjacent competitor context from ment.tech Top AI Trading list).
- **Product-scope ambiguity:** Website content observed in this research includes both a portfolio-aggregation dashboard framing (goekpa.com direct fetch) and a "hold S&P 500 above long-term trend, cash below" trend-following framing (search snippet from goekpa.com), suggesting the offering is not yet fixed.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Pre-launch waitlist mode (goekpa.com FAQ, July 2026); no revenue, users, press, or Product Hunt data found |
| Revenue Signal | Pricing "forthcoming" (goekpa.com FAQ, July 2026) |
| Founders | Yuga Patel (Co-founder): MIT CS/AI + Economics. Anant Asthana (Co-founder): MIT student; authored blog on autonomous AI trading agents at anant.us. |
| Competitors | Composer (funding undisclosed, revenue unknown, no-code strategy builder for retail); Numerai ($21.5M raised per Crunchbase, revenue unknown, crowdsourced hedge fund ML); AlphaSense ($350M round at $7.5B valuation Jul 2026, enterprise AI research); LinqAlpha ($22M Series A Jul 2026, 70+ institutional customers, hedge fund AI agents); QuantConnect (funding undisclosed, algo trading platform) |
| Moat Signals | No public data found |
| Risk Factors | Investment-adviser regulatory exposure, LLM recommendation-accuracy feasibility, incumbent brokerage AI features |
| Founder Reach | Yuga Patel: Twitter not found, LinkedIn public profile confirmed (count not retrievable), GitHub not found. Anant Asthana: Twitter not found, LinkedIn public profile confirmed (count not retrievable), GitHub not found. |
| Distribution Signals | Waitlist on goekpa.com (search snippet, Jul 2026); no Product Hunt, Chrome, or app store presence found |
| Emails | No public data found |

Sources:
- [Ekpa website](https://goekpa.com/)
- [Ekpa YC company page](https://www.ycombinator.com/companies/ekpa)
- [Yuga Patel LinkedIn](https://www.linkedin.com/in/yugapatel26/)
- [Anant Asthana LinkedIn](https://www.linkedin.com/in/anant-asthana-mit/)
- [Anant Asthana blog: Autonomous AI Agents and Financial Trading](https://anant.us/blog/autonomous-ai-agents-and-financial-trading-whats-real-today-vs-whats-hype/)
- [Numerai — Crunchbase](https://www.crunchbase.com/organization/numerai)
- [Top Numerai Alternatives — CBInsights](https://www.cbinsights.com/company/numerai/alternatives-competitors)
- [Top Numerai Competitors — Craft.co](https://craft.co/numerai/competitors)
- [Top AI Trading Companies — Ment Tech](https://www.ment.tech/top-ai-trading-companies/)
- [Latest AI Startup Funding — Crescendo AI](https://www.crescendo.ai/news/latest-vc-investment-deals-in-ai-startups)
- [Agentic Trading Explained — Wundertrading](https://wundertrading.com/journal/en/agentic-trading)
