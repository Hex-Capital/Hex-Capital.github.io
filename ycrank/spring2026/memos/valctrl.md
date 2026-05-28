# ValCtrl

> ValCtrl is the world model for Prediction Finance, and Kassandre?

| Field | Value |
|-------|-------|
| Website | https://valctrl.com |
| YC Page | https://www.ycombinator.com/companies/valctrl |
| Batch | Spring 2026 |
| Industry | Fintech / Fintech -> Banking and Exchange |
| Team Size | 2 |
| Location | New York, NY, USA |
| Tags | Artificial Intelligence, Fintech, Finance, Analytics, Data Engineering |
| YC Partner | Nicolas Dessaigne |
| Emails | No public data found |

Note on pivot: The valctrl.com homepage currently markets "Analyst Copilot — AI-Native Operating System for High Finance," an Excel-native IDAE integrated with Bloomberg/PitchBook/Capital IQ (valctrl.com home page text, May 2026), while the YC page describes the current product as "Kassandre Search" for Prediction Finance (YC company page, May 2026). Metrics below relate to the current Kassandre/Prediction Finance product unless prior-product context is labeled.

## The Idea

- **Problem:** Prediction-market prices are "fragmented across venues, titles, rules, and proxy contracts" so users who "think in beliefs" cannot map a belief to the right contract (YC company description, May 2026); combined Polymarket+Kalshi liquidity rose from ~$5B/month (Sep 2025) to ~$24B/month (Apr 2026) (Pew Research, May 2026), expanding the surface area of fragmented contracts.
- **Approach:** Kassandre Search takes a natural-language belief and maps it to relevant prediction-market contracts with backtrace and quality labels, with a stated roadmap of "search -> composed exposures -> native quotes -> gated bet/trade placement" (YC company description, May 2026).
- **Differentiation:** vs. Dome (unified API for prediction markets, acquired by Polymarket; The Block, 2026) ValCtrl targets end-user belief search rather than developer infrastructure; vs. Valence (one-orderbook trading superapp; YC launch page, 2026) ValCtrl indexes/labels markets rather than offering unified execution; vs. Matchr (aggregator across 1,500+ markets with smart routing; matchr.xyz) ValCtrl emphasizes natural-language belief-to-market mapping rather than price routing; vs. "Attena" (Show HN: natural-language search across Kalshi and Polymarket using Claude; Hacker News item 47088680) the concept overlaps closely.
- **Business Model:** [Inferred]: Free belief search to build a forecaster/investor user base, with monetization later via "gated bet/trade placement" take-rates or order-flow agreements, given the stated roadmap to "native quotes" and "bet/trade placement" (YC company description, May 2026); no pricing page is publicly visible.
- **TAM/SAM:** Combined Kalshi+Polymarket monthly volume ~$24B in April 2026, with the two venues holding 97.5% of prediction-market share (Pew Research, May 2026; KuCoin, 2025); Polymarket+Kalshi cumulative volume reached $150B (Yahoo Finance, 2026). No public TAM/SAM data found specific to belief-to-market search.
- **GTM / Distribution:** Company is explicitly soliciting "hard belief-to-market queries from forecasters, investors, operators, and YC founders" (YC company description, May 2026), indicating a direct-outreach motion through the YC network; [Inferred]: Twitter/X-driven distribution via founder accounts @gargsarthak678 and @qavrav (YC page links).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond a stated data-normalization layer ("backtrace and quality labels") across heterogeneous venues (YC company description, May 2026).
- **Future moat:** [Inferred]: A proprietary belief→contract mapping dataset (queries, mappings, user-labeled quality) could compound if usage scales, but this is unproven given the 2-person team and absence of public usage metrics.
- **Market structure:** [Inferred]: No structural barrier identified at this stage — Polymarket already acquired Dome to internalize the aggregation/API layer (The Block, 2026), suggesting venue incumbents are willing and able to absorb search/aggregation surface area.
- **Commoditization risk:** A Hacker News "Show HN" post (item 47088680, ~Feb 2026) already demonstrated a Claude-wrapper natural-language query layer over Kalshi+Polymarket built by a solo developer, indicating low technical barrier to a baseline version.

## Market & Traction

- **Traction signals:**
  - No public user, revenue, waitlist, Discord, or press metrics found for the Kassandre Search product.
  - Founder Twitter/X: @gargsarthak678 (Sarthak Garg) and @qavrav (Gaurav Paliwal) — follower counts not retrievable (x.com fetch returned 402).
  - Prior-product surface: valctrl.com still presents "Analyst Copilot" (Excel IDAE) as of May 2026 — no metrics published (valctrl.com).
  - No active job postings found on ycombinator.com/companies/valctrl/jobs (consistent with company_data "Hiring: False").
- **Competitors:**
  - Dome (raised $500K YC + $4.7M seed; revenue undisclosed; acquired by Polymarket in 2026 — The Block, 2026): developer-API layer rather than belief-search front end.
  - Valence (YC W26; standard $500K YC investment; revenue unknown; $200M+ monthly volume, 1B+ contracts traded — YC Launch page; Wellfound): unified trading execution across venues vs. ValCtrl's belief mapping.
  - Totalis (YC; $500K USDC seed in April 2026 — Crowdfund Insider, Apr 2026; revenue unknown): derivatives/accumulator layer on prediction markets, not search.
  - Matchr (funding not disclosed publicly; revenue unknown; matchr.xyz): aggregator across 1,500+ markets with smart routing — overlaps on cross-venue indexing.
  - "Attena" (Show HN, Hacker News item 47088680, ~Feb 2026; no funding data; revenue unknown): direct concept overlap — natural-language search over Kalshi+Polymarket.
- **Why now:** Combined Kalshi+Polymarket monthly volume rose from <$5B (Sep 2025) to ~$24B (Apr 2026) following the 2024 U.S. election cycle and CFTC-related regulatory clarifications (Pew Research, May 2026; Yahoo Finance, 2026), creating new fragmentation across venues, titles, and proxy contracts.

## Founders & Team

- **Sarthak Garg (Co-founder):**
  - Background: Columbia University (Bachelor of Arts, expected 2023–2027), John Jay Scholar; prior roles at Societe Generale Corporate and Investment Banking (SGCIB), Grata, Fulcrum Venture Group, and Columbia Corporate Law and Business Association (LinkedIn profile linkedin.com/in/sarkgarg via search snippet, May 2026; RocketReach profile).
  - Twitter/X: @gargsarthak678 — count not retrievable (x.com fetch returned 402).
  - LinkedIn: "Co-Founder at ValCtrl" (linkedin.com/in/sarkgarg via search snippet, May 2026).
  - GitHub: No public repos found tied to this founder.
- **Gaurav Paliwal (Co-founder):**
  - Background: Per search snippets, a "Gaurav Paliwal" with 11+ years in Big Data, ML, predictive modeling and listed as Data Engineering Manager at Meta appears tied to the ValCtrl name (RocketReach; LinkedIn linkedin.com/in/gauravpaliwal19 via search snippet); identity match to the YC-listed founder not independently confirmed via primary source.
  - Twitter/X: @qavrav — count not retrievable (x.com fetch returned 402).
  - LinkedIn: "Data Engineering Manager at Meta" per search snippet (linkedin.com/in/gauravpaliwal19, May 2026) — identity match unconfirmed.
  - GitHub: No public repos found tied to this founder.
- **Co-founder relationship:** No public data on co-founder history (no shared prior employer or university surfaced in searches).
- **Founder-market fit:** [Inferred]: Sarthak Garg's documented IB exposure at SocGen and data-platform exposure at Grata maps to financial data normalization; the Meta data-engineering background associated with the Gaurav Paliwal name maps to large-scale data pipelines, but the identity match to the YC-listed co-founder is not independently confirmed (search snippets, May 2026). No public advisors or investors beyond YC found.

## Key Risks

- **Product/positioning ambiguity from pivot:** The live valctrl.com homepage markets "Analyst Copilot" (Excel IDAE for high finance integrating Bloomberg/PitchBook/Capital IQ) (valctrl.com, May 2026), while the YC page markets "Kassandre Search" for prediction finance (YC page, May 2026); concurrent public surface in two unrelated verticals risks customer confusion and dilutes team focus at a 2-person stage.
- **Acquirer-substitution by venues:** Polymarket acquired Dome (unified prediction-market API) in 2026 (The Block, 2026), establishing that venue incumbents will internalize aggregation/search layers; this caps standalone equity outcomes for adjacent aggregators.
- **Direct concept competition / commoditization:** A solo Show HN project ("Attena," Hacker News item 47088680) already demonstrated natural-language search across Kalshi+Polymarket using an LLM wrapper, indicating the baseline build is reproducible at low cost.
- **Technical feasibility of "world model" claim:** The stated long-term path from "search -> composed exposures -> native quotes -> gated bet/trade placement" requires legal/compliance gates at each step (YC company description, May 2026); CFTC scrutiny of prediction-market ETFs and contracts is ongoing (Yahoo Finance, 2026), and no public evidence of secured regulatory partnerships found.
- **Founder identity verification gap:** Public records for "Gaurav Paliwal" surface multiple individuals (Meta, Oracle, others) (LinkedIn search snippets, May 2026); no primary-source bio links the YC-listed co-founder to a specific prior employer, creating diligence risk on founder-market fit claims.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Combined Polymarket+Kalshi ~$24B monthly volume in April 2026, up from <$5B in September 2025 (Pew Research, May 2026); cumulative $150B (Yahoo Finance, 2026) |
| SAM | No public data found |
| Traction | No public data found for Kassandre Search users, revenue, or press |
| Revenue Signal | No public data found (no visible pricing page on valctrl.com) |
| Founders | Sarthak Garg (Co-founder): Columbia BA, John Jay Scholar, prior SocGen IB, Grata, Fulcrum Venture Group. Gaurav Paliwal (Co-founder): per search snippets, Meta Data Engineering Manager background (identity match unconfirmed) |
| Competitors | Dome ($500K YC + $4.7M seed, revenue undisclosed, acquired by Polymarket — developer API vs. belief search); Valence ($500K YC, revenue unknown, $200M+ monthly platform volume — unified execution vs. belief mapping); Totalis ($500K USDC YC, revenue unknown — derivatives layer vs. search); Matchr (funding unknown, revenue unknown — routing aggregator); Attena (no funding data, Show HN, ~Feb 2026 — direct concept overlap) |
| Moat Signals | No public data found |
| Risk Factors | Pivot/positioning ambiguity between Analyst Copilot and Kassandre; venue-incumbent substitution (Polymarket+Dome precedent); concept commoditization (Attena Show HN) |
| Founder Reach | Sarthak Garg: Twitter @gargsarthak678 (count not retrievable), LinkedIn linkedin.com/in/sarkgarg (count not retrievable), GitHub none found. Gaurav Paliwal: Twitter @qavrav (count not retrievable), LinkedIn linkedin.com/in/gauravpaliwal19 per snippet (identity unconfirmed), GitHub none found |
| Distribution Signals | No public Product Hunt, Chrome Web Store, app store, Discord, or press signals found for Kassandre Search |
| Emails | No public data found |

Sources:
- [ValCtrl YC Company Page](https://www.ycombinator.com/companies/valctrl)
- [ValCtrl Website](https://www.valctrl.com/)
- [Pew Research — Prediction market trading volume](https://www.pewresearch.org/short-reads/2026/05/27/trading-volume-on-prediction-markets-has-soared-in-recent-months/)
- [Polymarket acquires Dome — The Block](https://www.theblock.co/post/390546/polymarket-buys-fresh-prediction-market-api-startup-dome-marking-second-official-acquisition)
- [Valence YC Launch](https://www.ycombinator.com/launches/PcS-valence-unified-prediction-markets-trading-platform)
- [Totalis $500K USDC seed — Crowdfund Insider](https://www.crowdfundinsider.com/2026/04/273245-y-combinator-completes-stablecoin-investment-in-prediction-markets-startup-totalis/)
- [Show HN: Natural-language search Kalshi/Polymarket](https://news.ycombinator.com/item?id=47088680)
- [Matchr](https://www.matchr.xyz/)
- [Polymarket/Kalshi $150B volume — Yahoo Finance](https://finance.yahoo.com/markets/crypto/articles/polymarket-kalshi-volumes-hit-150b-145540046.html)
- [Sarthak Garg LinkedIn](https://www.linkedin.com/in/sarkgarg/)
- [Gaurav Paliwal LinkedIn (identity unconfirmed)](https://www.linkedin.com/in/gauravpaliwal19/)
