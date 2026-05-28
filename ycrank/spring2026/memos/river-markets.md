# River Markets

> Prime brokerage for prediction markets

| Field | Value |
|-------|-------|
| Website | https://www.rivermarkets.com |
| YC Page | https://www.ycombinator.com/companies/river-markets |
| Batch | Spring 2026 |
| Industry | Fintech / Fintech |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Trading |
| YC Partner | Harj Taggar |
| Emails | contact@rivermarkets.com, oscar@rivermarkets.com |

## The Idea

- **Problem:** Professional prediction-market traders must maintain separate accounts, balances, and integrations across fragmented event-contract venues (Kalshi, Polymarket, etc.), with combined Kalshi+Polymarket volume rising from <$5B/mo in Sep 2025 to ~$24B/mo in Apr 2026 (TRM Labs, Apr 2026).
- **Approach:** Aggregates major venues into a single account with unified OMS, server-side execution algos (Icebergs, Pegs, TP/SL), smart routing claimed to deliver "~2¢ average price improvement," standardized river_ids across contracts, and a Python SDK with Ed25519-signed API calls (rivermarkets.com).
- **Differentiation:** Dome (YC F25, acquired by Polymarket Feb 2026, news.bitcoin.com) provided unified data/API but was absorbed by a venue; Valence (YC W26, valence.trade) offers a unified trading superapp/API for the same venues; River pitches a "prime brokerage" model (execution + OMS + cross-venue account) rather than a pure data API (rivermarkets.com).
- **Business Model:** No pricing page disclosed on rivermarkets.com; [Inferred]: B2B brokerage economics — commissions/spreads on routed flow and/or per-seat platform fees for professional desks, given the "prime brokerage for desks" positioning and named institutional clients.
- **TAM/SAM:** Combined Kalshi+Polymarket monthly volume reached ~$24B in Apr 2026, with ~40% of Kalshi volume from institutions (TRM Labs / DLNews, Apr 2026); no public TAM/SAM data found for the prime-brokerage segment specifically.
- **GTM / Distribution:** Direct sales to professional/institutional desks, evidenced by named live clients Chimera Capital Management, Game Point Capital, Cleat Street, and Skywalk on the homepage (rivermarkets.com).

## Defensibility

- **Moat today:** Multi-venue integrations live (Kalshi, Polymarket) with three more "coming soon" (Polymarket US, Novig, Rothera), plus four named institutional clients on launch site (rivermarkets.com); no other public defensibility signals found.
- **Future moat:** [Inferred]: Switching costs from OMS/SDK lock-in (river_ids, server-side algo state, Ed25519 key management) and order-flow data could compound, but unproven given pre-seed stage and 2-person team.
- **Market structure:** [Inferred]: Venues themselves face channel conflict aggregating competitors — Polymarket's Feb 2026 acquisition of Dome removed the leading neutral aggregator (theblock.co, Feb 2026), creating space for an independent broker; venue-owned alternatives risk antitrust/neutrality concerns for institutional buy-side.
- **Commoditization risk:** Multiple aggregators already exist — Valence (YC W26), PolyRouter, pmxt (open source), FinFeedAPI, Prediction Hunt — all wrapping the same public venue APIs (sportsgameodds.com, predictionhunt.com, 2026).

## Market & Traction

- **Traction signals:**
  - Named live clients: Chimera Capital Management, Game Point Capital, Cleat Street, Skywalk (rivermarkets.com).
  - Live venue integrations: Kalshi, Polymarket; pipeline: Polymarket US, Novig, Rothera (rivermarkets.com).
  - Web app live at app.rivermarkets.com (search result, May 2026).
  - Python SDK published as `rivermarkets` package (rivermarkets.com).
  - Company Twitter/X handle @river_markets exists (YC page); follower count not retrievable.
  - Company LinkedIn: linkedin.com/company/rivermarkets (YC page); follower count not retrievable.
  - No public revenue, user count, press coverage, Product Hunt, or Discord/Slack data found.
- **Competitors (direct prediction-market aggregator/API/trading layer):**
  - Valence (YC W26, valence.trade): $500K YC standard deal disclosed (theblock.co, 2026); 1B+ contracts traded, $200M+ monthly volume, 50% peak market share on individual events (YC launch post, 2026); positions as "trading superapp" with one orderbook/one API.
  - Dome (YC F25): Raised $5.2M (YC + seed); acquired by Polymarket Feb 2026, est. $10–20M (theblock.co; Gabriel Jarrosson on X, Feb 2026); was unified data/API rather than execution broker.
  - PolyRouter: Revenue unknown, total raised not disclosed; normalized data API across Kalshi, Polymarket, Limitless (sportsgameodds.com, 2026).
  - pmxt: Open-source Python/TS SDK, no funding (sportsgameodds.com, 2026); free alternative to paid SDKs.
  - FinFeedAPI: Revenue unknown, funding not disclosed; unified API across Polymarket, Kalshi, Myriad, Manifold (sportsgameodds.com, 2026).
  - Adjacent: Clear Street (traditional prime broker) struck partnership with Kalshi for event-contract access (financemagnates.com, 2026), encroaching from the incumbent side.
- **Why now:** Kalshi+Polymarket monthly volume grew from <$5B to ~$24B between Sep 2025 and Apr 2026 with ~40% Kalshi institutional share, and the Feb 2026 Polymarket acquisition of Dome removed the leading neutral aggregator (TRM Labs; theblock.co, Feb 2026).

## Founders & Team

- **Antonin Parrot (Co-founder):**
  - Background: UC Berkeley; prior Junior Quantitative Researcher at Valkyrie Trading (Chicago); presented research at Kalshi research conference, co-authored with Nicole Kagan of LinqAlpha (LinkedIn; valkyrietrading.com; search snippet, 2026).
  - Twitter/X: @antonin_parrot (YC page); follower count not retrievable.
  - LinkedIn: "River Markets" (linkedin.com/in/antonin-parrot-a16625196/).
  - GitHub: No public repos found.
- **Oscar Levy (Co-founder):**
  - Background: No public data found (email oscar@rivermarkets.com confirms role; no biographical details surfaced in search).
  - Twitter/X: No public account found.
  - LinkedIn: No public profile found.
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** [Inferred]: Parrot's quant-research role at Valkyrie Trading and presented research at the Kalshi conference indicate direct prediction-market and proprietary-trading domain exposure (valkyrietrading.com; search snippet, 2026); fit data on Levy not available.

## Key Risks

- **Venue disintermediation:** Polymarket's Feb 2026 acquisition of Dome (theblock.co) demonstrates that venues will buy/build the aggregation layer themselves; River's value erodes if Kalshi/Polymarket integrate native cross-venue execution or restrict API access for third-party brokers.
- **Crowded aggregator field:** At least five named alternatives (Valence, PolyRouter, pmxt, FinFeedAPI, Prediction Hunt) wrap the same public venue APIs (sportsgameodds.com, 2026), with Valence already citing 1B+ contracts traded and $200M+ monthly volume (YC launch, 2026).
- **Regulatory exposure:** Kalshi is CFTC-regulated while Polymarket operates crypto-native (predictionhunt.com, 2026); a unified "prime broker" routing across both faces dual-regime compliance, and no public data found on River holding broker-dealer, FCM, or money-transmitter licenses.
- **Incumbent prime brokers entering:** Clear Street partnered with Kalshi to clear event contracts and plans broader rollout in 2026 (financemagnates.com, beincrypto.com, 2026), bringing established balance sheet, credit lines, and institutional sales channels.
- **Co-founder data opacity:** No public background, LinkedIn, or social presence found for Oscar Levy despite confirmed email and YC listing, limiting diligence on half the team.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Combined Kalshi+Polymarket ~$24B monthly trading volume in April 2026, up from <$5B in September 2025 (TRM Labs, Apr 2026; DLNews, 2026) |
| SAM | ~40% of Kalshi volume institutional; Kalshi processes >$1B annual volume (search snippet, 2026); no public segment-specific data found |
| Traction | Named live clients Chimera Capital Management, Game Point Capital, Cleat Street, Skywalk (rivermarkets.com); live integrations Kalshi + Polymarket, pipeline Polymarket US/Novig/Rothera (rivermarkets.com); Python SDK and web app live (rivermarkets.com; app.rivermarkets.com) |
| Revenue Signal | No public data found (no pricing page disclosed on rivermarkets.com) |
| Founders | Antonin Parrot (Co-founder): UC Berkeley, ex-Valkyrie Trading Quant Researcher, Kalshi conference presenter. Oscar Levy (Co-founder): No public data found. |
| Competitors | Valence ($500K YC, revenue unknown, 1B+ contracts/$200M+ monthly volume, trading-superapp positioning); Dome (raised $5.2M, acquired by Polymarket Feb 2026 est. $10–20M, was data API); PolyRouter (funding unknown, revenue unknown, data API); pmxt (open source, no funding, free SDK); FinFeedAPI (funding unknown, revenue unknown, unified data API) |
| Moat Signals | 4 named institutional clients live, 2 venues integrated + 3 in pipeline, proprietary execution algos and river_ids (rivermarkets.com) |
| Risk Factors | Venue disintermediation (Polymarket/Dome precedent), crowded aggregator field, dual CFTC/crypto regulatory exposure |
| Founder Reach | Antonin Parrot: Twitter @antonin_parrot (count not retrievable), LinkedIn linkedin.com/in/antonin-parrot-a16625196 (count not retrievable), GitHub none found. Oscar Levy: No public data found. |
| Distribution Signals | Company Twitter @river_markets (count not retrievable), company LinkedIn linkedin.com/company/rivermarkets (count not retrievable); no Product Hunt, Discord, or press coverage found |
| Emails | contact@rivermarkets.com, oscar@rivermarkets.com (rivermarkets.com; search snippet) |

Sources:
- [River Markets](https://www.rivermarkets.com/)
- [YC company page](https://www.ycombinator.com/companies/river-markets)
- [Valence (YC W26)](https://www.ycombinator.com/companies/valence)
- [Polymarket acquires Dome — The Block](https://www.theblock.co/post/390546/polymarket-buys-fresh-prediction-market-api-startup-dome-marking-second-official-acquisition)
- [Dome acquisition — news.bitcoin.com](https://news.bitcoin.com/prediction-marketplace-giant-polymarket-acquires-yc-backed-startup-dome/)
- [TRM Labs: prediction markets at $21B monthly](https://www.trmlabs.com/resources/blog/how-prediction-markets-scaled-to-usd-21b-in-monthly-volume-in-2026)
- [Aggregator API landscape — sportsgameodds.com](https://sportsgameodds.com/blog/aggregator-apis-advanced-developer-guide)
- [Hedge funds via prime brokers — Finance Magnates](https://www.financemagnates.com/institutional-forex/hedge-funds-move-into-prediction-markets-via-prime-brokers/)
- [Antonin Parrot LinkedIn](https://www.linkedin.com/in/antonin-parrot-a16625196/)
- [Valkyrie Trading careers](https://www.valkyrietrading.com/careers/)
