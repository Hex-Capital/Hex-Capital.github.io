# Valence

> Unified prediction markets trading platform

| Field | Value |
|-------|-------|
| Website | https://valence.trade |
| YC Page | https://www.ycombinator.com/companies/valence |
| Batch | Winter 2026 |
| Industry | Fintech / Consumer Finance |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Finance, Consumer Finance, Cryptocurrency |
| YC Partner | Diana Hu |
| Emails | contact@valence.trade, careers@valence.trade |

## The Idea

**Problem:** Prediction markets are fragmented across multiple exchanges — primarily Kalshi (CFTC-regulated) and Polymarket (crypto-native on Polygon) — each with separate order books, accounts, interfaces, and execution infrastructure. Traders who want to capture arbitrage between platforms, optimize execution price, or run systematic strategies must manually manage multiple accounts and build their own tooling. Professional and semi-professional traders lack a unified execution layer with colocated infrastructure, smart order routing, backtesting, and API access across venues.

**Approach:** Valence provides a unified trading terminal that aggregates order books and executes contracts across Kalshi, Polymarket, and other prediction market platforms from a single interface. The platform offers smart order routing (automatically distributing orders across liquidity sources for optimal execution), colocated servers at exchange data centers for low-latency execution, real-time order book data, position monitoring with cross-account P&L tracking, trade analytics, and paper trading simulation (valence.trade). For systematic traders, Valence provides full API access and infrastructure for automated strategies.

**Differentiation:** Valence differs from the underlying exchanges (Kalshi, Polymarket) by operating as a cross-venue execution and aggregation layer rather than a standalone exchange. Kalshi and Polymarket are primary venues that generate their own liquidity; Valence sits on top, routing orders to whichever venue offers the best price. Compared to using Kalshi or Polymarket directly, Valence provides cross-platform smart order routing, a single interface for position management across venues, and co-location infrastructure. Robinhood Predictions and DraftKings Predictions operate their own proprietary exchanges within integrated consumer apps — they are walled gardens that do not aggregate external venues. Valence targets professional and systematic traders specifically, whereas Robinhood and DraftKings target mainstream retail consumers.

**Business Model:** Valence operates a volume-based fee model with three tiers (valence.trade):
- **Pro** (everyday traders): Volume-based fees, no minimums. Full platform access including real-time order book, manual tools, position monitoring, and trade analytics.
- **Premiere** (advanced retail): Custom pricing tailored to volume. Adds priority execution, advanced risk controls, dedicated support, and custom integrations.
- **Automated** (professional): Enterprise volume-based partnership. Adds full API access, automated strategies, co-location options, and SLA guarantees.

Specific fee percentages are not listed publicly.

**TAM/SAM:** Total notional trading volume in prediction markets reached over $44 billion in 2025, with monthly active users growing from approximately 4,000 in 2024 to over 600,000 by late 2025 (Gambling Insider, 2026 via search snippet). Citizens Financial Group projects prediction market firm revenues will reach $10 billion by 2030 from approximately $2 billion annually at present (FinOps, 2026 via search snippet). Kalshi generated an estimated $260M in revenue in 2025, up 994% year-over-year (Sacra via search snippet). The SAM — the portion addressable by an aggregation/execution layer rather than a primary exchange — is a subset of total market revenue; [Inferred]: Valence's SAM comprises the execution fees on cross-platform volume from professional and systematic traders, which is a fraction of total market volume.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct outreach to quantitative and systematic traders already active on Kalshi and Polymarket, leveraging the @ValenceTrade Twitter account (331 followers as of early 2026, X.com via search snippet) and a Discord community (discord.gg/YNAw6fyG). The intake form on the website (Google Forms) suggests a gated onboarding process targeting qualified traders. The testimonial on the website references a quantitative trading firm trading "$150M+ monthly" through the platform, indicating an enterprise/institutional sales motion alongside self-serve.

## Defensibility

Valence's current defensibility signals include: (1) Co-location infrastructure at exchange data centers providing latency advantages that are capital-intensive to replicate (valence.trade); (2) Cross-exchange smart order routing and aggregation, which requires maintaining integrations with multiple exchanges' APIs and order book formats; (3) Volume network effects — the website claims 1B+ contracts traded all-time and $200M+ monthly volume across all users (valence.trade), which, if accurate, creates a data and execution quality flywheel; (4) Switching costs for systematic traders who build automated strategies on Valence's API.

**Market structure:** Kalshi and Polymarket, as primary exchanges, have limited incentive to build cross-venue aggregation tools that route orders away from their own order books — doing so would cannibalize their own liquidity and fee revenue. Robinhood and DraftKings similarly operate walled-garden prediction products within their own ecosystems and are structurally incentivized to keep volume on their own platforms. This business model conflict creates structural space for an independent aggregator. However, no regulatory or IP barrier prevents exchanges from building better execution tools within their own platforms.

**Commoditization risk:** Building exchange API integrations and smart order routing is technically feasible for well-resourced fintech firms or trading infrastructure companies. The core technology (order routing, aggregation, co-location) is established in traditional financial markets. Crypto-native DEX aggregators (e.g., 1inch) employ similar aggregation patterns in other asset classes. A new entrant with exchange-level co-location and API integrations could replicate core functionality, though achieving the claimed volume levels would take time.

## Market & Traction

**Traction signals:**
- 1B+ contracts traded all-time (valence.trade)
- $200M+ monthly volume across all users (valence.trade)
- 99.9% uptime since launch (valence.trade)
- 50% peak market share on individual events (valence.trade)
- 100% event coverage for major sporting events (valence.trade)
- Customer testimonial: A quantitative trading firm reports "$150M+ Traded Monthly" through Valence, trading "dozens of instruments simultaneously" (valence.trade)
- Twitter/X: @ValenceTrade — approximately 331 followers, account created December 2025 (X.com via search snippet)
- Discord: discord.gg/YNAw6fyG — member count not retrievable
- Product Hunt: No listing found
- LinkedIn company page: No public data found
- App store / Chrome extension: No public data found (web-based platform)

**Competitive landscape:**

1. **Kalshi** ($1.7B total funding including $1B Series E at $11B valuation, December 2025; estimated $260M revenue in 2025 — TechCrunch, Sacra via search snippet): CFTC-regulated primary exchange. Differentiator vs. Valence: Kalshi is a primary venue that generates its own liquidity and regulatory infrastructure; Valence aggregates across Kalshi and other venues but depends on Kalshi's API access.

2. **Polymarket** ($2.3B total funding, $9B valuation as of February 2026; $17.9M cumulative revenue over 6 years — Sacra, getlatka.com via search snippet): Crypto-native prediction market on Polygon. Differentiator vs. Valence: Polymarket is a decentralized primary venue with global access and token incentives; Valence aggregates Polymarket alongside other venues.

3. **Robinhood Predictions** (publicly traded, HOOD; 12B+ prediction market contracts traded in 2025 — Robinhood newsroom via search snippet): Integrated prediction markets within the Robinhood consumer brokerage app, leveraging 24M+ existing brokerage customers. Differentiator vs. Valence: massive consumer distribution and a single-app experience for stocks, crypto, and predictions; does not offer cross-venue aggregation or API access for systematic traders.

4. **DraftKings Predictions** (publicly traded, DKNG; $6.5-$6.9B total projected 2026 revenue across all products; planning to spend ~$400M on prediction markets in 2026 — Motley Fool, sportsbettingdime via search snippet): Acquired Railbird Exchange DCM; integrating prediction markets into a "Super App" with sportsbook and iGaming. Differentiator vs. Valence: large existing DFS/sportsbook user base and state-level regulatory access; walled-garden approach, not a cross-venue aggregator.

5. **FanDuel Predicts** (subsidiary of Flutter Entertainment, publicly traded FLUT): Consumer-facing prediction market app launched in 2026. Differentiator vs. Valence: leverages FanDuel's sportsbook customer base for distribution; consumer-oriented, not a professional trading tool.

**Why now:** Several specific catalysts have opened this market window: (1) Kalshi won its CFTC lawsuit in 2023-2024, unlocking regulated event contracts in the U.S., and prediction market volume grew from approximately $4,000 monthly active users in 2024 to 600,000+ by late 2025 (Gambling Insider via search snippet); (2) Polymarket's breakout during the 2024 U.S. presidential election demonstrated mainstream demand and created a new cohort of prediction market traders; (3) Multiple major platforms (Robinhood, DraftKings, FanDuel, Crypto.com) launched prediction products in 2025-2026, fragmenting liquidity across more venues and increasing the value of a cross-venue aggregator; (4) [Inferred]: The rapid expansion of event categories (sports accounted for 89% of Kalshi's 2025 fee revenue per Sacra) and new exchange entrants create increasing fragmentation that makes aggregation tools more valuable.

## Founders & Team

**Daniel Kasabov-Nouvion** — Co-founder
- BS Electrical and Computer Engineering, University of Texas at Austin (danielkasabov.com, LinkedIn via search snippet)
- Previously: Software/Hardware Engineer at Optiver; Software Engineering Intern at IMC Trading (FPGA projects); Software Engineering at Citadel; Systems Research Intern at Arm (HPC memory latency research); DevOps Engineer at RStudio PBC (danielkasabov.com, LinkedIn via search snippet)
- Director of Texas Undergraduate Computational Finance (Texas UCF) since January 2023 (LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/daniel-kasabov-nouvion-a717931a8 — headline references Optiver (via search snippet)
- GitHub: github.com/dkasabovn — 12 public repos, 7 followers. Pinned repos include "ucf-ob" (an order book written in Rust for texasucf.org) and "polx" (TAMU hack 2022) (GitHub)

**Neo Wang** — Co-founder
- CS and Mathematics, University of Texas at Austin (Turing Scholars program) (nwatx.me)
- Previously: Software Engineering Intern at DRW (latency-sensitive strategy research); Intern at Cubist Systematic Strategies; Intern at Citadel Securities; Intern at Roblox (Search and Discovery) (nwatx.me)
- Co-creator of USACO Guide, a competitive programming resource with 70K+ registered users, 17M+ pageviews, and 1,800+ GitHub stars (nwatx.me, GitHub)
- Built "FTX Markets," an event-contract exchange and interface (nwatx.me)
- Problem writer for UT Programming Contest; financial modeling and development with Texas UCF (nwatx.me)
- Twitter/X: No public account found under personal name
- LinkedIn: linkedin.com/in/nwatx (YC page)
- GitHub: github.com/nwatx — 44 public repos, 49 followers. Pinned: usaco-guide (1.8k stars) (GitHub)

**Arthur Zhou** — Co-founder
- Incoming Turing Scholar, Computer Science, University of Texas at Austin (search results via UT Austin listings)
- Lynbrook High School Valedictorian; ACT perfect scorer; USAMO qualifier; 5x AIME qualifier; USAPhO qualifier; USACO Platinum (search results via UT Austin listings)
- Top 100 in weekly LeetCode competitions; advanced to second round of Google Code Jam (search results via UT Austin listings)
- Head CS Instructor; tutored students in math and CS through summer camps (search results via UT Austin listings)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/arthurzhou (YC page) — profile not publicly accessible
- GitHub: No confirmed public profile found linked to this Arthur Zhou

**Co-founder relationship:** All three founders attended the University of Texas at Austin. Daniel Kasabov-Nouvion and Neo Wang were both involved with Texas UCF (Texas Undergraduate Computational Finance), where Daniel served as Director. Neo Wang and Arthur Zhou are both in the Turing Scholars CS program at UT Austin. Daniel and Neo both interned at Citadel (Daniel at Citadel, Neo at Citadel Securities), indicating overlapping professional networks in quantitative trading.

**Founder-market fit:** The founding team combines hardware-level trading infrastructure experience (Daniel's work at Optiver and IMC Trading on FPGA/hardware systems), low-latency software engineering for trading firms (Neo's work at DRW on latency-sensitive strategy research and Cubist Systematic Strategies), and competitive programming depth (Neo's USACO Guide, Arthur's USAMO/USACO Platinum credentials). Daniel built an order book in Rust for the UT computational finance club. Neo previously built "FTX Markets," an event-contract exchange prototype. The team's collective experience spans the specific technical stack required for prediction market infrastructure: exchange connectivity, low-latency order execution, and order book engineering.

## Key Risks

**Exchange API dependency:** Valence's core product depends on maintained API access to Kalshi, Polymarket, and other exchanges. Exchanges could restrict or revoke API access to third-party aggregators, particularly if they perceive Valence as routing volume away from their native interfaces. Kalshi has invested heavily in its own trading interface and could view third-party execution layers as competitive. Mitigation: providing volume to exchanges that they might not otherwise capture (e.g., cross-venue arbitrage volume).

**Regulatory classification risk:** As prediction markets attract regulatory attention, a cross-venue aggregation layer could face its own regulatory requirements. If the CFTC or state regulators classify Valence as an intermediary requiring registration (e.g., as a futures commission merchant or introducing broker), compliance costs could be substantial for a 3-person team. The regulatory landscape for prediction market intermediaries is untested.

**Incumbent aggregation by consumer platforms:** Robinhood, DraftKings, and FanDuel are each building comprehensive prediction market products with massive existing user bases. DraftKings announced a "Super App" merging sports betting, iGaming, and predictions (sportsbettingdime via search snippet). If consumer platforms aggregate multiple prediction market venues into their own interfaces, they could commoditize the aggregation layer for retail traders. Valence's focus on professional/systematic traders partially mitigates this.

**Brand disambiguation:** Multiple companies operate under the name "Valence," including a Series B-funded AI coaching platform ($50M raise, Bessemer-led) and Valence Labs (AI/drug discovery). This creates potential confusion in search results, press coverage, and investor diligence. The company's domain (valence.trade) and handle (@ValenceTrade) partially mitigate this.

**Metric verifiability:** The traction metrics on valence.trade (1B+ contracts traded, $200M+ monthly volume, 50% peak market share) are self-reported with no independent verification. Given the company's Winter 2026 YC batch timing and 3-person team, these figures, if accurate, would represent a substantial share of total prediction market volume — which warrants further diligence.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | ~$44B notional trading volume in 2025; prediction market firm revenues projected to reach $10B by 2030 from ~$2B currently (Gambling Insider, 2026; Citizens Financial Group via FinOps, 2026 — both via search snippet) |
| SAM | No public data found for aggregator-layer-specific addressable market |
| Traction | 1B+ contracts traded all-time, $200M+ monthly volume, 99.9% uptime, 50% peak market share on individual events (all self-reported, valence.trade); @ValenceTrade ~331 followers on X (X.com via search snippet, early 2026) |
| Revenue Signal | Volume-based fees across Pro/Premiere/Automated tiers; no minimums on Pro tier; specific fee rates not published (valence.trade) |
| Founders | Daniel Kasabov-Nouvion (Co-founder): Optiver, IMC Trading, Citadel, Arm; ECE at UT Austin. Neo Wang (Co-founder): DRW, Cubist, Citadel Securities; Turing Scholars CS/Math at UT Austin; USACO Guide co-creator. Arthur Zhou (Co-founder): Turing Scholars CS at UT Austin; USAMO qualifier, USACO Platinum. |
| Competitors | Kalshi ($1.7B raised, $11B valuation, ~$260M est. 2025 revenue; CFTC-regulated primary exchange), Polymarket ($2.3B raised, $9B valuation, $17.9M cumulative revenue; crypto-native primary exchange), Robinhood Predictions (public, 12B+ contracts in 2025; consumer brokerage integration), DraftKings Predictions (public, $400M 2026 spend planned; sports-betting Super App) |
| Moat Signals | Co-located servers at exchange data centers (valence.trade); cross-venue smart order routing; claimed 1B+ contracts and $200M+ monthly volume (valence.trade, self-reported) |
| Risk Factors | Exchange API dependency and potential access revocation, regulatory classification as intermediary, brand disambiguation with other "Valence" companies |
| Founder Reach | Daniel Kasabov-Nouvion: Twitter not found, LinkedIn linkedin.com/in/daniel-kasabov-nouvion-a717931a8, GitHub 7 followers. Neo Wang: Twitter not found, LinkedIn linkedin.com/in/nwatx, GitHub 49 followers + 1.8k stars (USACO Guide). Arthur Zhou: Twitter not found, LinkedIn linkedin.com/in/arthurzhou, GitHub not confirmed. |
| Distribution Signals | No Product Hunt listing found; no app store presence; Twitter @ValenceTrade ~331 followers (X.com via search snippet); Discord community (member count not retrievable); gated intake form onboarding (valence.trade) |
| Emails | contact@valence.trade, careers@valence.trade |
