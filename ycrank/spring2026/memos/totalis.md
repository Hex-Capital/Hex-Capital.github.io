# Totalis

> derivative layer for prediction markets

| Field | Value |
|-------|-------|
| Website | https://www.totalis.trade |
| YC Page | https://www.ycombinator.com/companies/totalis |
| Batch | Spring 2026 |
| Industry | Fintech / Fintech -> Consumer Finance |
| Team Size | 0 |
| Location | San Francisco, CA, USA |
| Tags | DeFi, APIs |
| YC Partner | Andrew Miklas |
| Emails | No public data found |

## The Idea

- **Problem:** Prediction-market traders on Kalshi and Polymarket can only trade single events at a time, capping capital efficiency for multi-leg theses (Crypto Briefing, May 2026); existing alternatives are manual rollover trades (covers.com, 2026).
- **Approach:** Request-for-quote derivatives layer where market makers compete to price 2–5-leg parlays spanning politics, sports, crypto, stocks, weather, and macro events, with onchain settlement via Solana vaults (docs.totalis.trade; KuCoin, May 2026).
- **Differentiation:** Kalshi launched a native combo feature inside its order book in 2026 (si.com, 2026), Polymarket has no native combo (covers.com, 2026); Totalis is multi-venue (Kalshi live, Polymarket planned) and pays 3.1% yield on locked capital (Crypto Briefing, May 2026).
- **Business Model:** [Inferred]: RFQ spread / market-maker rebate model — no pricing page disclosed in docs (docs.totalis.trade); fee schedule not published.
- **TAM/SAM:** Combined Kalshi + Polymarket monthly volume rose from <$5B (Sep 2025) to ~$24B (Apr 2026) (TRM Labs, 2026); 2025 industry notional volume exceeded $63B (TRM Labs, 2026).
- **GTM / Distribution:** Product is available outside the US for regulatory reasons (YC page, 2026); [Inferred]: crypto-native distribution via Solana ecosystem and X/Crypto Twitter, given USDC-funded raise and Solana settlement.

## Defensibility

- **Moat today:** Two-sided RFQ network — market makers quoting against retail parlay flow — but liquidity depth is unverified in public sources (docs.totalis.trade).
- **Future moat:** [Inferred]: Cross-venue aggregation (Kalshi + Polymarket + others) could become a structural data + routing moat if Totalis becomes the canonical multi-venue parlay book; unproven because only Kalshi is currently integrated (Crypto Briefing, May 2026).
- **Market structure:** [Inferred]: Kalshi's CFTC DCM status (si.com, 2026) constrains it from offering crypto-settled or offshore products, creating a regulatory wedge Totalis exploits by operating outside the US on Solana (YC page; KuCoin, 2026).
- **Commoditization risk:** Kalshi already ships native combos inside its order book (si.com, 2026); any offshore prediction venue (Polymarket, OG.com, Novig) could add an RFQ parlay layer with comparable engineering effort.

## Market & Traction

- **Traction signals:**
  - $500K seed raised from Y Combinator, paid entirely in USDC on Solana, custodied via Ramp (Crowdfund Insider, Apr 2026; PANews, Apr 2026).
  - First YC investment ever disbursed entirely in stablecoins (Tekedia, Apr 2026; Bitcoin Foundation, 2026).
  - Press coverage in Crypto Briefing, KuCoin, Crowdfund Insider, Tekedia, PANews, WEEX, RWA Times (Apr–May 2026).
  - Parlay product went live on May 25, 2026, ~6 weeks after funding announcement (~Apr 13, 2026) (Crypto Briefing, May 2026).
  - 3.1% yield on locked capital advertised (Crypto Briefing, May 2026).
  - Eric Liu LinkedIn post announcing the USDC-funding milestone (LinkedIn, Jan 2026 — date per URL slug `7454977035527004179`).
  - Trading volume, user counts, Twitter/Discord follower counts: count not retrievable from public search.
- **Competitors:**
  - Kalshi (funding undisclosed in retrieved results; revenue unknown; $5.42B April 2026 taker volume per Bitcoin.com, 2026): incumbent CFTC-regulated exchange that ships native combo contracts inside its order book (si.com, 2026).
  - Polymarket (revenue unknown; $1.99B April 2026 taker volume per Bitcoin.com, 2026): largest offshore venue, no native combo builder (covers.com, 2026); Totalis depends on it as a planned upstream venue.
  - Novig (funding/revenue unknown per retrieved results): peer-to-peer prediction/sports exchange listed among Polymarket alternatives (covers.com, 2026).
  - OG.com (funding/revenue unknown per retrieved results): launched Feb 2026, still building liquidity (si.com, 2026).
  - Sporttrade, FanDuel Predicts, DraftKings Predictions, Fanatics Markets (funding/revenue unknown per retrieved results): adjacent sportsbook-style prediction venues (si.com, 2026).
- **Why now:** Combined Kalshi + Polymarket monthly volume scaled ~5x from <$5B (Sep 2025) to ~$24B (Apr 2026) (TRM Labs, 2026), and Kalshi's CFTC DCM status plus Polymarket US beta (late 2025) brought regulated prediction-market liquidity to scale (si.com, 2026).

## Founders & Team

- **Eric Liu (Co-founder):**
  - Background: University of Waterloo mathematics; prior roles at Coinbase (data), Faire (ML engineering), and Notion (search snippet, 2026; LinkedIn profile `erictliu`).
  - Twitter/X: @ericliujt (per YC page); follower count not retrievable.
  - LinkedIn: "Notion" headline per search snippet (linkedin.com/in/erictliu, 2026).
  - GitHub: No public handle surfaced in retrieved results.
- **Pravesh Mansharamani (Co-founder):**
  - Background: University of Waterloo mathematics (search snippet, 2026); prior crypto/blockchain hackathon and development work (search snippet, 2026); personal site praveshm.com.
  - Twitter/X: @ImTheBigP (per YC page); follower count not retrievable.
  - LinkedIn: "founder @ totalis (yc p26)" (linkedin.com/in/pravesh-mansharamani, 2026).
  - GitHub: @Pravesh-mansharamani (github.com); top repo and star count not retrievable from search snippet.
- **Co-founder relationship:** Both studied mathematics at the University of Waterloo (search snippets, 2026).
- **Founder-market fit:** Liu's Coinbase data and Faire ML background spans crypto-native data infra and quantitative pricing (LinkedIn, 2026), matching an RFQ derivatives venue settled in USDC on Solana; no advisors, board members, or outside investors beyond Y Combinator surfaced in public sources.

## Key Risks

- **Incumbent product substitution:** Kalshi already ships native combo contracts inside its CFTC-regulated order book (si.com, 2026), giving US users a one-click parlay without leaving the venue and removing the need for an external derivatives layer; no mitigation documented.
- **US regulatory exclusion:** Totalis is "currently available outside the US for regulatory reasons" (YC page, 2026), excluding the bulk of Kalshi's ~$5.42B April 2026 taker volume (Bitcoin.com, 2026); no mitigation documented.
- **Upstream venue dependency:** Liquidity depends on Kalshi (live) and Polymarket (planned) APIs and pricing (docs.totalis.trade); either venue could rate-limit, block, or replicate the integration, as Kalshi has already done internally with combos (si.com, 2026).
- **Market-maker concentration:** RFQ model requires competing market makers to price multi-leg payouts (docs.totalis.trade); no public data on number or identity of liquidity providers, creating concentration / liquidity-dry-up risk.
- **Onchain custody risk:** Settlement via Solana onchain vaults (docs.totalis.trade) plus Ramp-custodied USDC treasury (PANews, Apr 2026) expose users to smart-contract and stablecoin de-peg failure modes not present on Kalshi's fiat rails.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Combined Kalshi + Polymarket monthly volume ~$24B in April 2026, up from <$5B in Sep 2025 (TRM Labs, 2026); 2025 industry notional >$63B (TRM Labs, 2026) |
| SAM | No public data found |
| Traction | $500K seed in USDC (Crowdfund Insider, Apr 2026); parlay product launched May 25, 2026 (Crypto Briefing, May 2026); 3.1% yield on locked capital (Crypto Briefing, May 2026); first-ever YC stablecoin investment (Tekedia, Apr 2026); press in KuCoin, PANews, WEEX, RWA Times (Apr–May 2026) |
| Revenue Signal | No public data found |
| Founders | Eric Liu (Co-founder): Waterloo math; ex-Coinbase, Faire, Notion. Pravesh Mansharamani (Co-founder): Waterloo math; crypto/blockchain hackathon background |
| Competitors | Kalshi (funding undisclosed, revenue unknown, $5.42B Apr 2026 taker volume — native combos in order book); Polymarket (revenue unknown, $1.99B Apr 2026 taker volume — no native combo); Novig (funding/revenue unknown — P2P sports exchange); OG.com (funding/revenue unknown — Feb 2026 launch); Sporttrade/FanDuel Predicts/DraftKings Predictions (funding/revenue unknown — adjacent sportsbook predictions) |
| Moat Signals | Two-sided RFQ network with competing market makers; multi-venue aggregation (Kalshi live, Polymarket planned) (docs.totalis.trade) |
| Risk Factors | Kalshi native combos substitute the product; US regulatory exclusion; upstream venue dependency on Kalshi/Polymarket |
| Founder Reach | Eric Liu: Twitter @ericliujt (count not retrievable), LinkedIn "Notion" (count not retrievable), GitHub not found. Pravesh Mansharamani: Twitter @ImTheBigP (count not retrievable), LinkedIn "founder @ totalis (yc p26)" (count not retrievable), GitHub @Pravesh-mansharamani (stars not retrievable) |
| Distribution Signals | YC Spring 2026 batch launch (YC page); press coverage in Crypto Briefing, KuCoin, Crowdfund Insider, Tekedia, PANews, WEEX, Bitcoin Foundation (Apr–May 2026); product gated outside US (YC page, 2026) |
| Emails | No public data found |

Sources:
- [Totalis YC Page](https://www.ycombinator.com/companies/totalis)
- [Totalis Docs](https://docs.totalis.trade/)
- [Crypto Briefing — Totalis launches prediction market parlays on Solana](https://cryptobriefing.com/totalis-prediction-market-parlays-solana/)
- [KuCoin — Totalis launches parlay feature on Solana](https://www.kucoin.com/news/flash/totalis-launches-parlay-feature-on-solana-prediction-market-platform)
- [Crowdfund Insider — YC stablecoin investment in Totalis](https://www.crowdfundinsider.com/2026/04/273245-y-combinator-completes-stablecoin-investment-in-prediction-markets-startup-totalis/)
- [Tekedia — YC first stablecoin investment $500K](https://www.tekedia.com/y-combinator-completes-first-ever-investment-paid-entirely-in-stablecoins-disbursing-500k-to-totalis/)
- [PANews — Totalis $500K USDC seed](https://www.panewslab.com/en/articles/019d89bd-beb3-7268-8572-b71123b79f51)
- [TRM Labs — Prediction markets to $21B monthly volume](https://www.trmlabs.com/resources/blog/how-prediction-markets-scaled-to-usd-21b-in-monthly-volume-in-2026)
- [Bitcoin.com — April 2026 prediction market volume $8.6B, Kalshi leads](https://news.bitcoin.com/prediction-market-traders-push-april-2026-volume-to-8-6b-kalshi-takes-the-lead/)
- [SI.com — Kalshi vs Polymarket 2026](https://www.si.com/betting/prediction-market/prediction-markets-101/the-difference-between-kalshi-vs-polymarket-what-us-traders-actually-need-to-know-in-2026)
- [Covers.com — Prediction market combos explained](https://www.covers.com/betting/prediction-sites/guides/prediction-market-combos-explained)
- [Pravesh Mansharamani LinkedIn](https://www.linkedin.com/in/pravesh-mansharamani/)
- [Eric Liu LinkedIn (Notion)](https://www.linkedin.com/in/erictliu/)
- [Pravesh Mansharamani GitHub](https://github.com/Pravesh-mansharamani)
