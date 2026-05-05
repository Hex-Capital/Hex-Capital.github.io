# Oddpool

> Institutional data broker for prediction markets

| Field | Value |
|-------|-------|
| Website | https://www.oddpool.com |
| YC Page | https://www.ycombinator.com/companies/oddpool |
| Batch | Spring 2026 (P26) (YC page) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Fintech, Finance, Analytics |
| YC Partner | David Lieb (YC page) |
| Emails | avi@oddpool.com (oddpool.com support listing) |

## The Idea

**Problem:** Quant traders, macro desks, and algorithmic traders accessing US prediction markets must integrate separately with Kalshi (REST + FIX, RSA key auth) and Polymarket (CLOB, Polygon wallet) to compare odds, find arbitrage, or backtest, because each venue has distinct APIs and data formats (oddpool.com; sportsgameodds.com via search snippet). The largest US prediction venues processed $44B+ in 2025 trading volume with monthly notional above $13B (Gambling Insider, 2026 via search snippet), and Kalshi is now ~40% institutional flow (trade-ideas.com, Apr 2026 via search snippet).

**Approach:** Oddpool ingests Kalshi and Polymarket feeds and exposes a unified API plus dashboards covering 700K+ contracts and 750+ live event dashboards across politics, sports, economics, crypto, and culture (oddpool.com). Features include cross-venue search, fee-adjusted arbitrage detection, whale-trade alerts (>$500), 1-5 minute granularity historical orderbook data back to March 2026, WebSocket feeds, S3 dumps for enterprise, and paper trading (oddpool.com).

**Differentiation:**
- vs. **Dome** (YC F25, unified Kalshi/Polymarket API): Polymarket acquired Dome in early 2026, removing the prior leading neutral aggregator from market; Dome's YC page lists status "Inactive" (ycombinator.com/companies/dome; predictionhunt.com via search snippet).
- vs. **Prediction Hunt v2 API**: covers five venues (Kalshi, Polymarket, PredictIt, ProphetX, Opinion) with free no-card tier (predictionhunt.com via search snippet); Oddpool currently covers two venues but adds whale tracking and arb scanner UI.
- vs. **FinFeedAPI** (CoinAPI team): normalized REST across Polymarket, Kalshi, Myriad, Manifold (newyorkcityservers.com via search snippet); Oddpool's positioning emphasizes institutional dashboards and arbitrage workflow rather than raw feeds.
- vs. **pmxt** (open-source SDK, local sidecar) (newyorkcityservers.com via search snippet): Oddpool is hosted SaaS with managed historical data.

**Business Model:** Tiered SaaS published on pricing page (oddpool.com/pricing): Free $0 (1K req/mo), Pro $30/mo (1M req/mo + whale tracking + WebSocket), Premium $100/mo (5M req/mo + arbitrage API), Enterprise custom (unlimited + S3 dumps + dedicated support).

**TAM/SAM:** US prediction markets processed $44B+ trading volume in 2025; monthly notional above $13B end-2025 (Gambling Insider, 2026 via search snippet). Kalshi: $1B+ annual volume, ~40% institutional (trade-ideas.com, Apr 2026 via search snippet). Polymarket: $2B+ annual volume (trade-ideas.com via search snippet). No public TAM/SAM data found for the prediction-market data-API segment specifically.

**GTM / Distribution:** [Inferred]: Bottoms-up developer-led acquisition via free tier (1K req/mo, no card), Twitter content marketing through @oddpool_alerts posting live arb opportunities, plus YC network introductions to quant funds and prop shops; enterprise S3-dump tier suggests outbound to institutional desks. Founders also publish a curated GitHub list "Awesome-Prediction-Market-Tools" (352 stars, github.com/aarora4) which functions as inbound SEO/community channel.

## Defensibility

- **Historical data archive:** Orderbook history back to March 2026 with 1-5 min granularity (oddpool.com). [Inferred]: Time-stamped dataset compounds — replication requires forward-only collection, so a later entrant cannot rebuild prior history. Used as backtesting input via PredictionMarketBench (github.com/Oddpool/PredictionMarketBench, 15 stars).
- **Neutrality post-Dome:** Dome's acquisition by Polymarket in early 2026 (predictionhunt.com via search snippet) removed the only direct YC-backed cross-venue API competitor; Oddpool occupies the resulting gap.
- **Domain content moat:** Awesome-Prediction-Market-Tools repo with 352 stars (github.com/aarora4) directs developer attention to founder-curated list.

**Market structure:** Native venue APIs (Kalshi, Polymarket) cannot become neutral cross-venue aggregators without channel conflict — Polymarket's acquisition of Dome demonstrated the venue-side preference is to consolidate rather than aggregate (predictionhunt.com via search snippet). [Inferred]: This creates a structural opening for an independent broker because each venue is incentivized to keep traders on its own platform, not to expose competing pricing.

**Commoditization risk:** Prediction Hunt v2, FinFeedAPI, and open-source pmxt already exist (newyorkcityservers.com via search snippet); the underlying APIs are public, so technical replication of feed normalization is low-barrier. [Inferred]: Defensibility depends on accumulated history, dashboards/UX, and brand within trader communities, not raw data access.

## Market & Traction

**Traction signals:**
- 700K+ contracts indexed; 750+ live event dashboards (oddpool.com).
- Platform usage claim: "Pro users spotted 762 arb opportunities last week" and "151 whale trades totaling $185K in 24 hours on a single event" (oddpool.com).
- Twitter/X: @oddpool_alerts active (e.g., post 2026-02-04 on California Governor 2026 arbitrage) (x.com/oddpool_alerts); follower count not retrievable.
- GitHub @Oddpool/PredictionMarketBench: 15 stars (github.com/Oddpool/PredictionMarketBench).
- Founder GitHub @aarora4 Awesome-Prediction-Market-Tools: 352 stars (github.com/aarora4).
- Coverage in pm.wiki listing positions Oddpool as "The Bloomberg for prediction markets"; rating 2.0/5 from 1 review (pm.wiki/projects/oddpool).
- Listed in third-party comparisons of prediction market APIs (newyorkcityservers.com via search snippet).
- Published research paper "PredictionMarketBench: A SWE-bench-Style Framework for Backtesting Trading Agents on Prediction Markets" (ResearchGate via search snippet).
- No Product Hunt launch found. No revenue or paying-customer count disclosed publicly.
- YC page lists status Active, Hiring False (ycombinator.com/companies/oddpool).

**Competitive landscape:**
- **Dome** (YC F25, ex-Alchemy founders Kurush Dubash & Kunal Roy): unified Kalshi/Polymarket API; "50+ developers building on Dome" at launch (ycombinator.com/companies/dome). Acquired by Polymarket in early 2026 (predictionhunt.com via search snippet). YC status Inactive. Funding undisclosed.
- **Prediction Hunt v2 API**: covers Kalshi, Polymarket, PredictIt, ProphetX, Opinion; free tier no card (predictionhunt.com via search snippet). Funding/ARR: No public data found.
- **FinFeedAPI** (CoinAPI team): normalized REST across Polymarket, Kalshi, Myriad, Manifold (newyorkcityservers.com via search snippet). CoinAPI is parent; Oddpool-specific funding/ARR not disclosed. No public data found on standalone funding.
- **pmxt**: open-source Python/TypeScript SDK with local sidecar across Polymarket, Kalshi, Limitless (newyorkcityservers.com via search snippet). Funding: open-source, none.
- **Polymarket / Kalshi native APIs**: each venue's first-party feeds (predictionhunt.com via search snippet). Polymarket processes $2B+/yr; Kalshi $1B+/yr (trade-ideas.com via search snippet).

**Why now:**
- Kalshi gained CFTC clearance to list event contracts and now sees ~40% institutional volume (trade-ideas.com, Apr 2026 via search snippet) — [Inferred]: institutional entrants need professional data tooling absent from native venue UIs.
- Polymarket acquired Dome in early 2026 (predictionhunt.com via search snippet), removing the leading neutral cross-venue aggregator and creating a vendor gap.
- Prediction-market notional volume crossed $44B in 2025, with monthly notional >$13B end-2025 (Gambling Insider, 2026 via search snippet) — [Inferred]: scale now justifies institutional-grade data infrastructure.

## Founders & Team

**Avi Arora** — Co-founder
- Education: Georgia Tech, BS (2018-2022); Georgia Tech ML Specialization (2022-2023) (LinkedIn).
- Prior: Machine Learning Engineer II at Microsoft, worked on Microsoft Prompt Shields handling 20B+ classifications/year (zoominfo.com via search snippet; rocketreach.co via search snippet).
- LinkedIn: linkedin.com/in/avi-arora — headline "Building the institutional data layer for prediction markets"; 2,000 followers, 500+ connections, listed location New York, NY (LinkedIn).
- GitHub: github.com/aarora4 — 36 repos, 18 followers; pinned: Awesome-Prediction-Market-Tools (352 stars), PredictionMarketBench (15 stars), Graph-NAS-Materials (GitHub).
- Twitter/X: company account @oddpool_alerts (x.com); personal handle not found.
- Other: HackGT 2019 2nd place overall; 1st place GT iOS Club Demo Day 2019 (LinkedIn); blog at analyticsarora.com.

**Ritesh Malpani** — Co-founder
- Education: BS and MS, Georgia Tech (search snippet).
- Prior: Software Engineer at Bloomberg and Amazon; "architected systems processing 100K+ TPS across trading infrastructure" (search snippet of LinkedIn).
- LinkedIn: linkedin.com/in/ritesh-malpani — headline lists "Co-founder @Benchspan (YC P26)" (LinkedIn search snippet).
- Crunchbase profile: crunchbase.com/person/ritesh-malpani-2360.
- Twitter/X: No public account found.
- GitHub: No public repos found tied to Oddpool.

**Co-founder relationship:** Both founders attended Georgia Tech (Avi BS 2018-2022; Ritesh BS+MS) — overlap likely indicates prior acquaintance. Both list Benchspan (YC P26, AI prompt-injection detection) as a prior co-founded company on LinkedIn (LinkedIn search snippets), and Benchspan's YC page lists both as founders (ycombinator.com/companies/benchspan via search snippet). [Inferred]: Oddpool appears to be a pivot from Benchspan within the same P26 batch; prior-product traction (Benchspan) should not be conflated with current product.

**Founder-market fit:** Ritesh's Bloomberg engineering and 100K+ TPS trading infrastructure background (LinkedIn snippet) maps to building exchange-grade orderbook ingestion; Avi's Microsoft Prompt Shields work (20B+ classifications/yr) demonstrates large-scale ML/data systems experience (zoominfo.com via search snippet). Avi's curated 352-star GitHub list and published PredictionMarketBench paper (ResearchGate) indicate domain immersion. No advisors, board, or notable angels disclosed publicly.

## Key Risks

**Pivot recency:** LinkedIn headlines for both founders still reference "Co-founder @ Benchspan (YC P26)" (LinkedIn snippets), and a Benchspan YC page exists (ycombinator.com/companies/benchspan via search snippet) — [Inferred]: Oddpool appears to be a recent pivot inside the same batch, so accumulated traction is < ~6 months at the current product.

**Venue acquisition precedent:** Polymarket acquired Dome in early 2026 (predictionhunt.com via search snippet). [Inferred]: A venue-side acquirer could similarly absorb Oddpool, or worse, restrict third-party API access to favor in-house tooling — counterparty/platform risk is concrete, not theoretical.

**API/ToS dependency:** Product depends entirely on Kalshi and Polymarket public APIs (oddpool.com); either venue could rate-limit, alter ToS, or revoke commercial redistribution rights. No mitigation disclosed.

**Two-venue coverage gap:** Competitor Prediction Hunt covers five venues vs. Oddpool's two (predictionhunt.com via search snippet). [Inferred]: Buyers needing PredictIt/ProphetX/Opinion coverage will not select Oddpool until coverage expands.

**Regulatory exposure to US prediction markets:** [Inferred]: Kalshi's CFTC standing and Polymarket's ongoing US legal posture mean any venue-level enforcement action would directly compress Oddpool's data inputs and customer base; Oddpool itself does not hold a license per pm.wiki listing as "unregulated" (pm.wiki/projects/oddpool).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | US prediction-market trading volume $44B+ in 2025; monthly notional >$13B end-2025 (Gambling Insider, 2026 via search snippet); $5B+ industry positioning (Gambling Insider, 2026 via search snippet) |
| SAM | Kalshi $1B+/yr, Polymarket $2B+/yr; Kalshi ~40% institutional (trade-ideas.com, Apr 2026 via search snippet); No public data found for data-API segment specifically |
| Traction | 700K+ contracts, 750+ event dashboards (oddpool.com); "762 arb opportunities last week," "151 whale trades $185K/24h" (oddpool.com); PredictionMarketBench paper published (ResearchGate via search snippet); No public data found on paying customers or revenue |
| Revenue Signal | Free $0; Pro $30/mo; Premium $100/mo; Enterprise custom (oddpool.com/pricing) |
| Founders | Avi Arora (Co-founder): Microsoft ML Eng II on Prompt Shields, Georgia Tech BS+ML; Ritesh Malpani (Co-founder): Bloomberg + Amazon SWE, Georgia Tech BS+MS, 100K+ TPS trading systems |
| Competitors | Dome (YC F25, ex-Alchemy founders, status Inactive — acquired by Polymarket early 2026, funding/ARR unknown, prior direct YC competitor on unified Kalshi/Polymarket API); Prediction Hunt v2 (revenue/funding unknown, broader 5-venue coverage); FinFeedAPI / CoinAPI (revenue unknown, normalized REST across 4 venues); pmxt (open-source, no funding, local sidecar SDK) |
| Moat Signals | Historical orderbook archive from March 2026, 1-5 min granularity (oddpool.com); 352-star Awesome-Prediction-Market-Tools repo (github.com/aarora4); incumbent neutral aggregator (Dome) acquired out of market (predictionhunt.com via search snippet) |
| Risk Factors | Recent pivot from Benchspan, venue-acquisition precedent (Dome→Polymarket), API/ToS dependency on two venues |
| Founder Reach | Avi Arora: Twitter not found, LinkedIn 2,000 followers + 500+ connections, GitHub aarora4 — Awesome-Prediction-Market-Tools 352 stars + PredictionMarketBench 15 stars; Ritesh Malpani: Twitter not found, LinkedIn count not retrievable, GitHub no public repos found |
| Distribution Signals | Twitter @oddpool_alerts active Feb 2026 (x.com, count not retrievable); Awesome-Prediction-Market-Tools 352 stars (github.com/aarora4); PredictionMarketBench 15 stars (github.com/Oddpool); listed in 3rd-party API comparison roundups (newyorkcityservers.com, predictionhunt.com via search snippets); No Product Hunt launch found |
| Emails | avi@oddpool.com (oddpool.com) |

Sources:
- [Oddpool YC page](https://www.ycombinator.com/companies/oddpool)
- [Oddpool website](https://www.oddpool.com)
- [Oddpool pricing](https://www.oddpool.com/pricing)
- [Dome YC page](https://www.ycombinator.com/companies/dome)
- [Avi Arora LinkedIn](https://www.linkedin.com/in/avi-arora/)
- [Avi Arora GitHub](https://github.com/aarora4)
- [Awesome-Prediction-Market-Tools](https://github.com/aarora4/Awesome-Prediction-Market-Tools)
- [PredictionMarketBench](https://github.com/Oddpool/PredictionMarketBench)
- [Oddpool pm.wiki](https://pm.wiki/projects/oddpool)
- [Oddpool @oddpool_alerts on X](https://x.com/oddpool_alerts)
- [Best API for Prediction Markets 2026 — Prediction Hunt](https://www.predictionhunt.com/blog/best-api-for-prediction-markets)
- [Prediction Markets Statistics 2026 — Gambling Insider](https://www.gamblinginsider.com/in-depth/110180/prediction-market-statistics)
- [Kalshi vs Polymarket — Trade Ideas](https://www.trade-ideas.com/2026/04/29/prediction-markets-kalshi-polymarket/)
- [Best Prediction Market APIs — newyorkcityservers](https://newyorkcityservers.com/blog/best-prediction-market-apis)
- [Ritesh Malpani LinkedIn](https://www.linkedin.com/in/ritesh-malpani/)
- [PredictionMarketBench paper — ResearchGate](https://www.researchgate.net/publication/400370920_PredictionMarketBench_A_SWE-bench-Style_Framework_for_Backtesting_Trading_Agents_on_Prediction_Markets)
