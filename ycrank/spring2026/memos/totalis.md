# Totalis

> derivative layer for prediction markets

| Field | Value |
|-------|-------|
| Website | https://www.totalis.trade |
| YC Page | https://www.ycombinator.com/companies/totalis |
| Batch | Spring 2026 |
| Industry | Fintech / Fintech -> Consumer Finance |
| Team Size | 0 |
| Location | No public data found |
| Tags | DeFi, APIs |
| YC Partner | Andrew Miklas |
| Emails | pravesh@totalis.trade |

## The Idea

**Problem:** Prediction markets have reached $20B+ in monthly trading volume as of January 2026 (TRM Labs, 2026), but traders are limited to binary yes/no contracts on single events. There is no native mechanism to combine multiple prediction market positions into multi-leg derivative instruments (parlays) across categories—sports, politics, economics—within the prediction market framework. Kalshi pioneered Requests for Quotes (RFQs) as a parlay mechanism in late 2025 (Sportico, 2025), but the infrastructure remains fragmented and exchange-specific.

**Approach:** Totalis is building a "derivative layer for prediction markets," with its first product being custom parlays across categories (company website). Users can combine multiple prediction market positions to create multi-leg bets ("stack up conviction and win bigger payouts"). The product is currently in private beta with waitlist signups (company website, March 2026). [Inferred]: The "derivative layer" framing suggests Totalis aims to be infrastructure that sits atop existing prediction market exchanges rather than operating its own exchange, enabling cross-platform and cross-category parlay construction.

**Differentiation:**
- Kalshi offers parlays natively but only on its own exchange, using its proprietary RFQ system where market makers anonymously bid on the other side of multi-leg wagers (Yahoo Finance, 2025). Parlays account for >20% of Kalshi's weekly sports volume, up from <1% at launch (Legal Sports Report, 2026).
- Robinhood launched "Custom Combos" for prediction markets using Kalshi's RFQ technology, limited to NFL outcomes with up to 10 legs (CNBC, Dec 2025).
- Valence (YC W26) aggregates contracts across Kalshi, Polymarket, and Crypto.com into a unified trading terminal but focuses on execution routing, not derivatives construction (YC page).
- [Inferred]: Totalis's differentiation appears to be building a cross-platform, cross-category parlay engine as standalone infrastructure—decoupled from any single exchange—while incumbents offer parlays only within their own walled gardens.

**Business Model:** No pricing page or revenue model is publicly disclosed (company website). [Inferred]: Most likely monetization paths include transaction fees on parlay execution, spread markup on RFQ-style pricing, or API licensing to prediction market platforms.

**TAM/SAM:** Total notional prediction market volume reached $44B in 2025 (TRM Labs, 2026). Monthly volume grew from $1.2B in early 2025 to $20B+ in January 2026, with 800,000+ unique wallets participating monthly (TRM Labs, 2026). Citizens Financial Group projects prediction market firm revenues will reach $10B by 2030, up from ~$2B currently (Motley Fool, Feb 2026 via search snippet). Parlays account for >20% of Kalshi's weekly sports trading volume (Legal Sports Report, 2026). The global derivatives market is valued at $12.4 trillion and projected to reach $59.4 trillion by 2035, growing at 17% CAGR (Global Growth Insights, 2026 via search snippet). [Inferred]: SAM is the prediction market derivatives/parlay segment specifically, which at >20% of Kalshi's sports volume alone suggests hundreds of millions in near-term addressable volume.

**GTM / Distribution:** [Inferred]: Most likely distribution path is API-first integration with existing prediction market platforms, given the "APIs" tag on the YC page and the "derivative layer" positioning. The company may also pursue a direct-to-trader web app (the private beta suggests this path is active) before expanding to B2B platform partnerships.

## Defensibility

- **Data advantage:** [Inferred]: Cross-platform parlay pricing requires aggregating real-time odds across multiple exchanges; a functioning pricing engine would accumulate proprietary data on multi-leg correlation and market maker behavior over time.
- **Technical complexity:** RFQ-based parlay pricing is non-trivial—Kalshi was the first to solve it within prediction markets (Sportico, 2025). Building a cross-exchange version compounds the complexity with varying liquidity pools, settlement mechanisms, and API formats.
- **Network effects:** [Inferred]: If Totalis aggregates market maker liquidity for parlay pricing, more market makers improve pricing, which attracts more traders, creating a two-sided network effect—but this is unproven at this stage.

**Market structure:** Kalshi and Polymarket operate as exchanges competing for direct trader relationships. Building cross-platform derivatives infrastructure requires neutrality across exchanges—a position that exchanges themselves cannot credibly occupy due to competitive conflicts. [Inferred]: Exchanges are structurally incentivized to keep parlay infrastructure proprietary (Kalshi's RFQ system is closed), creating an opening for a neutral third-party layer.

**Commoditization risk:** The parlay pricing mechanism (RFQ) is already implemented by Kalshi and licensed to Robinhood (Sportico, 2025). Any well-funded trading technology firm could build a cross-exchange aggregation layer. Valence (YC W26) already aggregates across exchanges for execution and could extend into derivatives. Exchanges could open their parlay APIs to third parties—Kalshi has introduced Builder Codes for external teams to build on its liquidity (search snippet).

## Market & Traction

**Traction signals:**
- Product status: private beta, waitlist open (company website, March 2026)
- No public user counts, revenue, or download metrics found
- Twitter/X: @totalistrading (count not retrievable due to platform restrictions)
- LinkedIn: linkedin.com/company/totalistrading (follower count not retrievable)
- Product Hunt: no listing found
- Discord/Slack: no public community found
- Job postings: 0 open positions (YC page)
- App store/Chrome Web Store: no listings found

**Competitive landscape:**

| Competitor | Key Differentiator vs. Totalis | Funding | Revenue |
|---|---|---|---|
| **Kalshi** | CFTC-regulated exchange with proprietary RFQ parlay system; operates its own marketplace | $1B+ at $22B valuation (Bloomberg, Mar 2026) | ~$1.5B annualized run rate (Sacra, Mar 2026); $260M in 2025 (Sacra) |
| **Polymarket** | Crypto-native exchange; largest by volume in 2025 ($21.5B of $44B total); no native parlay product | $2.3B total raised at $9B valuation (Coindesk, Oct 2025); targeting $20B (PYMNTS, Mar 2026) | Revenue not publicly disclosed |
| **Robinhood (prediction markets)** | Integrated prediction markets into existing brokerage with 24M+ accounts; "Custom Combos" parlays via Kalshi RFQ | Public company (HOOD) | Prediction market revenue not broken out |
| **Valence (YC W26)** | Unified trading terminal aggregating Kalshi, Polymarket, Crypto.com; smart routing, not derivatives | YC-backed (pre-seed) | 1B+ contracts traded through platform (YC page) |

**Why now:**
- Prediction market monthly volume grew ~17x from early 2025 to January 2026 (TRM Labs, 2026).
- Kalshi launched sports parlays via RFQ in late 2025; Robinhood followed in December 2025 (CNBC, Dec 2025)—validating trader demand for multi-leg instruments.
- CFTC issued an ANPRM on March 12, 2026, to formalize prediction market regulation; DCM registration applications have more than doubled over the past year (CFTC, Mar 2026; Morgan Lewis, Mar 2026).
- [Inferred]: The confluence of regulatory clarity, mainstream adoption (Robinhood), and explosive volume growth creates a window for derivatives infrastructure before exchanges lock in proprietary standards.

## Founders & Team

**Eric Liu** — Co-founder
- 4th year Math/BBA dual degree, University of Waterloo & Wilfrid Laurier University (LinkedIn)
- ML Software Engineer at RBC Borealis, Fall 2025 (search snippet via LinkedIn)
- Organized hackathon for Midwest Blockchain Conference 2025 (search snippet via LinkedIn)
- Member, University of Waterloo Blockchain Club; participated in ETHDenver 2025 (UWaterloo CS, 2025)
- Co-built Goddid.Money at ETHGlobal Buenos Aires with Pravesh Mansharamani—won $7,600 across three prizes including Flare Network 1st place (UWaterloo CS, 2025)
- Twitter/X: No public personal account found
- LinkedIn: linkedin.com/in/ericliujt
- GitHub: github.com/ericliujt — 7 public repos, 3 followers; bio: "Building Totalis - Parlay engine for prediction markets"; pinned repos include goddid-polymarket (4 forks) and PolkaSub (1 star)

**Pravesh Mansharamani** — Co-founder
- On leave from University of Waterloo, Mathematics (personal website)
- Engineering at EigenLabs (AI Agents for Eigen Cloud, Sep–Dec 2025), SquidRouter (cross-chain DeFi, May–Aug 2025), EasyLabs (PoS stablecoin payments, Jan–Apr 2025), Nethermind (Ethereum client, May–Aug 2024), Rivvi (B2B payroll, May–Aug 2023) (praveshm.com)
- VP and Director of Events, Waterloo Blockchain (praveshm.com)
- Built EigenBets, prediction market using AMM and AVS Oracle (GitHub)
- Won 11+ hackathons totaling ~$55K+ (GitHub profile)
- Twitter/X: @ImTheBigP (count not retrievable)
- LinkedIn: linkedin.com/in/pravesh-mansharamani
- GitHub: github.com/Pravesh-mansharamani — 51 public repos, 32 followers; pinned repos include EigenBets (3 stars, 4 forks) and goddid-polymarket

**Co-founder relationship:** Both are University of Waterloo students and members of the Waterloo Blockchain Club (UWaterloo CS, 2025). They co-built Goddid.Money (a Polymarket credit scoring app) at ETHGlobal Buenos Aires, winning $7,600 (UWaterloo CS, 2025). Both participated in ETHDenver 2025 as part of the Waterloo delegation (UWaterloo Math, 2025).

**Founder-market fit:** Both founders have deep blockchain and DeFi engineering experience across multiple co-op terms and hackathons. Pravesh Mansharamani built EigenBets (a prediction market platform) prior to Totalis (GitHub). Both have direct experience with Polymarket infrastructure through Goddid.Money. Their combined hackathon record (11+ wins, $55K+) demonstrates rapid prototyping ability in Web3. No advisors, board members, or notable investors beyond YC have been publicly identified.

## Key Risks

**Exchange dependency and API access:** Totalis's cross-platform derivative layer depends on API access to exchanges like Kalshi and Polymarket. Kalshi's Builder Codes program signals openness to third-party builders (search snippet), but exchanges could restrict API access or build competing parlay features at any time. Robinhood already licenses Kalshi's RFQ system directly (Sportico, 2025).

**Regulatory classification uncertainty:** The CFTC's March 2026 ANPRM is actively seeking to define the regulatory framework for event contracts and prediction market derivatives (Morgan Lewis, Mar 2026). A derivative layer on top of prediction markets could face its own registration requirements as a DCM or swap execution facility. Washington state's AG has already sued Kalshi alleging illegal gambling (Seattle Times, 2026), signaling state-level risk.

**Incumbent replication:** Kalshi has already implemented RFQ-based parlays and is expanding to cross-category derivatives. With $22B valuation and $1B+ in recent funding (Bloomberg, Mar 2026), Kalshi has resources to build any cross-category parlay functionality internally. Polymarket acquired derivatives platform QCX (search snippet), signaling similar intent.

**Market maker liquidity bootstrapping:** Cross-platform parlay pricing requires market makers willing to take the other side of multi-leg bets. [Inferred]: Attracting initial market maker liquidity as a pre-seed startup competing for the same market makers that Kalshi and Robinhood use is a cold-start challenge.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $44B total prediction market notional volume in 2025; $20B+ monthly volume as of Jan 2026 (TRM Labs, 2026). Prediction market firm revenues projected to reach $10B by 2030 (Citizens Financial Group via Motley Fool, Feb 2026) |
| SAM | No public data found |
| Traction | Private beta with waitlist (company website, Mar 2026). No public user or volume metrics found |
| Revenue Signal | No public data found |
| Founders | Eric Liu (Co-founder): Math/BBA at UWaterloo/Laurier, ML Engineer at RBC Borealis, Waterloo Blockchain Club. Pravesh Mansharamani (Co-founder): Math at UWaterloo (on leave), engineering at EigenLabs/SquidRouter/Nethermind, built EigenBets, 11+ hackathon wins |
| Competitors | Kalshi ($22B valuation, ~$1.5B annualized revenue run rate, proprietary RFQ parlays on own exchange — Sacra/Bloomberg, Mar 2026); Polymarket ($9B valuation, revenue unknown, no native parlay product — Coindesk, Oct 2025); Robinhood (public company, Custom Combos via Kalshi RFQ — CNBC, Dec 2025); Valence (YC W26, pre-seed, 1B+ contracts traded, unified trading terminal not derivatives — YC page) |
| Moat Signals | No public data found |
| Risk Factors | Exchange API dependency, regulatory classification uncertainty, incumbent replication by well-funded exchanges |
| Founder Reach | Eric Liu: LinkedIn linkedin.com/in/ericliujt, GitHub 3 followers. Pravesh Mansharamani: Twitter @ImTheBigP (count not retrievable), LinkedIn linkedin.com/in/pravesh-mansharamani, GitHub 32 followers |
| Distribution Signals | No public data found |
| Emails | pravesh@totalis.trade (company website) |
