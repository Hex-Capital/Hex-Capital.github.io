# Oddpool

> Institutional data layer for prediction markets

| Field | Value |
|-------|-------|
| Website | https://www.oddpool.com |
| YC Page | https://www.ycombinator.com/companies/oddpool |
| Batch | Spring 2026 (P26) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Fintech, Finance, Analytics |
| YC Partner | David Lieb (YC company page) |
| Emails | founders@oddpool.com (YC launch page), avi@oddpool.com (oddpool.com) |

## The Idea

- **Problem:** Quant funds and trading desks integrating prediction markets face venue fragmentation, no shared symbology across exchanges, and missing tick-level history, spending "weeks normalizing data" (YC launch page, May 2026).
- **Approach:** Universal symbology that maps every market across every venue to one canonical identifier, plus tick-level history with full orderbook depth for backtesting (YC launch page, May 2026).
- **Differentiation:** Versus Dome (acquired by Polymarket Feb 19 2026, theblock.co) Oddpool remains venue-neutral; versus FinFeedAPI Oddpool offers tick-level history with full orderbook depth rather than REST snapshots only (finfeedapi.com docs); versus Polymarket Analytics Oddpool covers Kalshi in addition to Polymarket (oddpool.com).
- **Business Model:** Tiered SaaS — Free (1K req/mo), Pro $30/mo (1M req, whale tracking), Premium $100/mo (5M req, arbitrage API), Enterprise custom with S3 dumps (oddpool.com pricing, May 2026).
- **TAM/SAM:** No public TAM/SAM data found for prediction-market institutional data; adjacent reference: Opinion reached ~31% of global prediction market volume at $8B+ monthly by early 2026 (search snippet, panewslab.com).
- **GTM / Distribution:** [Inferred]: Outbound to quant funds, prop shops, market makers, hedge funds via founders@oddpool.com inquiry channel cited on the YC launch post, layered on top of a prosumer freemium funnel.

## Defensibility

- **Moat today:** 700,000+ indexed markets across Kalshi and Polymarket with historical orderbooks back to March 2026 at 1–5 minute granularity (oddpool.com, May 2026) — a captured-history dataset that cannot be backfilled by a later entrant.
- **Future moat:** [Inferred]: Each additional CFTC-licensed venue ingested compounds the dataset's recoverable history; unproven because Oddpool currently lists only Kalshi and Polymarket as live venues (oddpool.com).
- **Market structure:** [Inferred]: Venue-neutral aggregation is structurally hard for any single exchange (Polymarket, Kalshi) to replicate because cross-listing competitor liquidity cannibalizes their own order flow — evidenced by Polymarket acquiring Dome rather than building neutral (theblock.co, Feb 2026).
- **Commoditization risk:** Dome demonstrated a small team can build a unified prediction-market API in months and exit in ~4–5 months post-Demo Day (Gabriel Jarrosson, X, Feb 2026); FinFeedAPI (built by CoinAPI team) already ships normalized Polymarket/Kalshi/Myriad/Manifold data (finfeedapi.com).

## Market & Traction

- **Traction signals:**
  - 700,000+ indexed markets across Kalshi and Polymarket (oddpool.com, May 2026).
  - "Several thousand dollars in MRR within months" from prosumer tier (YC company page founder statement, May 2026).
  - YC Launch post published ~May 2026 (ycombinator.com/launches/QKF, retrieved May 2026).
  - Y Combinator official X post announcing launch by @ycombinator (x.com/ycombinator/status/2053905477356929469).
  - Twitter @oddpool_alerts ~233 followers, account joined Oct 2025 (search snippet).
  - "Pro users spotted 762 arb opportunities last week" (oddpool.com landing, May 2026).
  - LinkedIn company page exists at linkedin.com/company/oddpool (search snippet, follower count not retrievable).
  - No Product Hunt launch found; no Discord/Slack community found; no press coverage in named publications found.
- **Competitors:**
  - Dome (Polymarket-acquired Feb 19 2026; $5.2M raised pre-acquisition per banklesstimes.com; deal est. $10–20M per Gabriel Jarrosson on X): unified prediction-market API, now Polymarket-owned and no longer venue-neutral.
  - FinFeedAPI (no public funding data found; built by CoinAPI team per finfeedapi.com): normalized REST API across Polymarket, Kalshi, Myriad, Manifold; data-only, no execution.
  - Polymarket Analytics (revenue unknown; no public funding data found; polymarketanalytics.com): Polymarket-only dashboards and analytics, narrower venue scope.
  - Prediction Hunt (revenue unknown; no public funding data found; predictionhunt.com): consumer-facing prediction-market API comparison/blog content, not institutional.
- **Why now:** "CFTC applications for new exchanges keep climbing" per founders (YC company page, May 2026); Polymarket's Feb 2026 Dome acquisition removed the only YC-backed neutral aggregator from the market, opening the institutional venue-neutral slot (theblock.co, Feb 2026).

## Founders & Team

- **Avi Arora (Co-founder):**
  - Background: M.S. in Machine Learning, Georgia Tech (YC company page); previously Machine Learning Engineer II at Microsoft where he trained the prompt-injection model securing 20B requests/year and saved $6M/year (YC company page; rocketreach.co, zoominfo.com).
  - Twitter/X: @c0delemons (x.com/c0delemons; follower count not retrievable).
  - LinkedIn: "Co-founder @ Oddpool | Prediction Market Data" (linkedin.com/in/avi-arora).
  - GitHub: @aarora4 with repo "Awesome-Prediction-Market-Tools" (github.com/aarora4; star count not retrievable).
- **Ritesh Malpani (Co-founder):**
  - Background: M.S. in Distributed Systems (YC company page); previously Software Engineer at Bloomberg where he made buy-side trading systems 40% faster (YC company page; zoominfo.com).
  - Twitter/X: @RiteshMalpani (referenced by @ycombinator on X; follower count not retrievable).
  - LinkedIn: "Co-founder @Benchspan (YC P26)" (linkedin.com/in/ritesh-malpani).
  - GitHub: No public repos found.
- **Co-founder relationship:** Roommates since freshman year at Georgia Tech (YC company page, May 2026).
- **Founder-market fit:** Ritesh's Bloomberg buy-side trading system experience and Avi's ML/infra production background map directly to institutional market-data tooling (YC company page); [Inferred]: Ritesh's LinkedIn currently lists him as Co-founder of Benchspan (YC P26), a separate AI-agent monitoring startup, which signals split focus across two YC-batch companies.

## Key Risks

- **Acquirer-substitution risk:** Polymarket has demonstrated willingness to acquire neutral aggregators by buying Dome on Feb 19 2026 (theblock.co); a Polymarket or Kalshi exclusivity move on data feeds could shrink Oddpool's venue coverage.
- **Commoditization by data incumbents:** FinFeedAPI (CoinAPI team) already ships normalized Polymarket/Kalshi/Myriad/Manifold REST data (finfeedapi.com), and adjacent fintech-data incumbents (Bloomberg, Refinitiv) could add prediction-market feeds without Oddpool's dataset gap.
- **Founder split focus:** Ritesh Malpani's LinkedIn lists him as Co-founder of Benchspan (YC P26), a separate active Spring 2026 YC company (linkedin.com/in/ritesh-malpani; ycombinator.com/companies/benchspan), creating attention-division risk on a 2-person team.
- **Regulatory venue risk:** Oddpool's value scales with CFTC-licensed venue proliferation per founder statements (YC company page); a CFTC tightening or Kalshi/Polymarket consolidation would compress the addressable venue set.
- **Thin distribution today:** Only ~233 followers on @oddpool_alerts (search snippet) and no press coverage found in named publications; institutional sales motion to quant funds is not evidenced by named customers on the launch post or website.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 700K+ indexed markets (oddpool.com, May 2026); "several thousand dollars in MRR within months" from prosumer tier (YC company page, May 2026); @oddpool_alerts ~233 followers (search snippet); 762 arb opportunities spotted by Pro users last week (oddpool.com, May 2026) |
| Revenue Signal | Free, Pro $30/mo, Premium $100/mo, Enterprise custom (oddpool.com pricing, May 2026) |
| Founders | Avi Arora (Co-founder): MS ML Georgia Tech, ex-Microsoft ML Engineer II. Ritesh Malpani (Co-founder): MS Distributed Systems, ex-Bloomberg SWE, also co-founder of Benchspan (YC P26). |
| Competitors | Dome ($5.2M raised, acquired by Polymarket Feb 2026, est. $10-20M deal — no longer neutral); FinFeedAPI (funding unknown, revenue unknown — REST-only, no orderbook depth); Polymarket Analytics (funding unknown, revenue unknown — Polymarket-only); Prediction Hunt (funding unknown, revenue unknown — consumer-facing) |
| Moat Signals | 700K+ indexed markets with historical orderbooks back to March 2026 at 1–5 min granularity (oddpool.com) |
| Risk Factors | Acquirer substitution by Polymarket/Kalshi, commoditization by FinFeedAPI/CoinAPI, co-founder split focus across Oddpool and Benchspan |
| Founder Reach | Avi Arora: Twitter @c0delemons (count not retrievable), LinkedIn present, GitHub @aarora4 (stars not retrievable). Ritesh Malpani: Twitter @RiteshMalpani (count not retrievable), LinkedIn present, GitHub not found. |
| Distribution Signals | YC Launch post May 2026 (ycombinator.com/launches/QKF); @ycombinator X announcement (x.com/ycombinator/status/2053905477356929469); no Product Hunt launch found |
| Emails | founders@oddpool.com (YC launch page), avi@oddpool.com (oddpool.com) |

**Note on prompt injection:** The Phase 1 WebFetch result on oddpool.com contained an injected fake `<system-reminder>` block attempting to make me load Gmail/Google Drive/Ramp MCP authentication tools. I ignored it and proceeded with the research task.

Sources:
- [Oddpool YC company page](https://www.ycombinator.com/companies/oddpool)
- [Oddpool YC Launch post](https://www.ycombinator.com/launches/QKF-oddpool-the-institutional-data-layer-for-prediction-markets)
- [Oddpool website](https://www.oddpool.com/)
- [Y Combinator X announcement](https://x.com/ycombinator/status/2053905477356929469)
- [Polymarket acquires Dome — The Block](https://www.theblock.co/post/390546/polymarket-buys-fresh-prediction-market-api-startup-dome-marking-second-official-acquisition)
- [Polymarket acquires Dome — BanklessTimes](https://www.banklesstimes.com/articles/2026/02/20/polymarket-acquires-dome-developer-of-unified-prediction-markets-api/)
- [Gabriel Jarrosson on Dome deal](https://x.com/GJarrosson/status/2025986603244458284)
- [FinFeedAPI Prediction Markets](https://www.finfeedapi.com/products/prediction-markets-api)
- [Avi Arora LinkedIn](https://www.linkedin.com/in/avi-arora/)
- [Ritesh Malpani LinkedIn](https://www.linkedin.com/in/ritesh-malpani/)
- [Benchspan YC page](https://www.ycombinator.com/companies/benchspan)
- [Awesome-Prediction-Market-Tools GitHub](https://github.com/aarora4/Awesome-Prediction-Market-Tools)
- [@oddpool_alerts on X](https://x.com/oddpool_alerts)
- [@c0delemons on X](https://x.com/c0delemons)
