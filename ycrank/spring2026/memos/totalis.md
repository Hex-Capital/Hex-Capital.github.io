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

**Problem:** Existing prediction market platforms (Polymarket, Kalshi) restrict users to single-outcome bets, suffer from fragmented liquidity across venues, and tie up capital inefficiently (Crowdfund Insider, April 2026). Traders who want to express multi-variable views — e.g., combining a geopolitical outcome with a crypto price movement — cannot do so within a single position on current platforms.

**Approach:** Totalis is an onchain derivatives layer built on Solana that enables parlay-style (multi-leg) portfolios combining prediction market positions across categories including geopolitics, crypto, and sports into a single unified trade (YC company page; Crowdfund Insider, April 2026). The platform introduces financial primitives for capital efficiency, liquidity aggregation, and structured products for bundling positions and hedging (Crowdfund Insider, April 2026). Treasury operations use USDC via Ramp, with no fiat conversion required (Crowdfund Insider, April 2026).

**Differentiation:** Polymarket and Kalshi are primary venues — they originate binary outcome markets. Totalis positions itself as a derivatives layer on top of these venues, not a competing exchange. Fanatics Markets launched "Combos" (a parlay feature) for sports prediction markets (USI Gaming Hub, April 2026), but Totalis targets cross-category, cross-venue parlays. Polymarket launched perpetual futures contracts on April 22, 2026 (CNBC, April 2026), moving into derivatives but focused on leverage on single markets rather than multi-leg cross-category combinations.

**Business Model:** No pricing page found on the website. [Inferred]: Most likely monetization path is transaction fees on parlay trades and/or spread on derivative positions, consistent with DeFi protocol economics.

**TAM/SAM:** Prediction market trading volume reached $44 billion in 2025, with monthly volume exceeding $20 billion by January 2026 (TRM Labs, 2026). Bernstein projects prediction market trading volume reaching $1 trillion annually by 2030 at ~80% CAGR (CNBC, April 2026). Citizens Financial Group projects prediction market firm revenues exceeding $10 billion by 2030, up from ~$2 billion currently (CNBC, April 2026 via search snippet). No public SAM estimate specific to the derivatives/parlay sub-segment found.

**GTM / Distribution:** The company is currently opening early access for select users before broader rollout (Crowdfund Insider, April 2026). [Inferred]: Most likely distribution path is crypto-native trader communities, given the Solana-based architecture and DeFi positioning, with potential API-based distribution to aggregators given the "APIs" tag.

## Defensibility

No defensibility signals found in public sources at this stage. [Inferred]: Potential moat could develop via liquidity network effects (more traders → tighter spreads → more traders) and cross-venue aggregation complexity, but is unproven at pre-launch.

**Market structure:** Polymarket and Kalshi are primary venue operators; building a derivatives layer on top of their markets is structurally different from competing for order flow. Both platforms simultaneously launched perpetual futures (April 2026), indicating they are moving toward derivatives themselves (CNBC, April 2026; Yahoo Finance, April 2026). [Inferred]: The structural barrier is limited — primary venues can vertically integrate derivatives, as Polymarket's perps launch demonstrates.

**Commoditization risk:** Cross-venue parlay aggregation requires integrations with multiple prediction market platforms and real-time pricing. Polymarket and Kalshi are both building their own derivatives products (CNBC, April 2026; PANews, April 2026). DraftKings acquired Railbird (a CFTC-licensed derivatives exchange) in December 2025 (search snippet). [Inferred]: Technical barriers to building parlays are moderate; the primary challenge is liquidity and venue integration agreements.

## Market & Traction

**Traction signals:**
- Funding: $500,000 in USDC from Y Combinator, settled on Solana in three transactions ($1 test, $124,999, $375,000) — the first all-stablecoin investment by YC (The Block, April 2026; Crowdfund Insider, April 2026)
- Product status: Early access opening for select users; no public launch yet (Crowdfund Insider, April 2026)
- Twitter/X: @totalistrading — follower count not retrievable
- LinkedIn: linkedin.com/company/totalistrading — follower count not retrievable
- GitHub: github.com/totalistrading — 2 public repos (landing-new: 1 star; docs: 0 stars), 2 org followers (GitHub, April 2026)
- Product Hunt: No launch found
- App/extension: No public data found
- Job postings: 0 open positions (YC company page)
- Pravesh Mansharamani's personal site states "Currently hiring at Totalis" (praveshm.com)

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Totalis |
|---|---|---|
| **Polymarket** | ~$2.3B total; seeking $400M at $15B valuation (Bloomberg, April 2026) | Primary venue operator; launched perps April 2026; crypto-native, permissionless |
| **Kalshi** | ~$2.9B total; $22B valuation (Crowdfund Insider, March 2026) | CFTC-regulated centralized exchange; launched perps April 2026 |
| **Fanatics Markets** | Not disclosed (subsidiary of Fanatics) | Launched "Combos" parlay feature for sports; massive existing sports bettor user base (USI Gaming Hub, 2026) |
| **DraftKings (via Railbird)** | Public company; acquired Railbird Dec 2025 | CFTC-licensed derivatives exchange; existing sportsbook distribution |
| **SX Bet / Azuro / Overtime** | Funding not confirmed | Decentralized prediction/sports betting protocols; varied chain deployments |

**Why now:**
- Prediction market trading volume scaled from $1.2B/month in early 2025 to $20B+/month by January 2026 (TRM Labs, 2026). This volume surge creates sufficient underlying liquidity to support a derivatives layer.
- Polymarket and Kalshi both announced perpetual futures products on April 21–22, 2026 (CNBC, April 2026), validating market demand for prediction market derivatives.
- CFTC regulatory clarity: Kalshi's legal victory and subsequent regulatory acceptance expanded the addressable market for US-facing prediction market products (search snippets from multiple sources).
- [Inferred]: The entry of traditional finance firms (Robinhood, DraftKings, ICE/NYSE) into prediction markets in 2025–2026 signals mainstream acceptance and expands the potential user base for derivative products.

## Founders & Team

**Eric Liu** — Co-founder
- Education: Math and Business, University of Waterloo & Wilfrid Laurier University (UWaterloo CS News, 2025)
- Member of Waterloo Blockchain club (UWaterloo Math News, 2025)
- ETHDenver 2025: Built "Cyspace" (blockchain social platform with AI), won $8,500 in prizes (UWaterloo CS News, 2025)
- ETHGlobal Buenos Aires: Built "goddid.money" (converts Polymarket trading history into on-chain credit scores) with Pravesh Mansharamani, won $7,600 in prizes (UWaterloo CS News, 2025)
- Twitter/X: No confirmed public account found
- LinkedIn: linkedin.com/in/ericliujt — "Math @ University of Waterloo"
- GitHub: github.com/ericliujt — 7 followers; bio: "Building Totalis - Parlay engine for prediction markets"; notable repos include goddid-polymarket (3 forks) and PolkaSub (1 star) (GitHub)

**Pravesh Mansharamani** — Co-founder
- Education: Math, University of Waterloo (on leave) (praveshm.com)
- Vice-President, Waterloo Blockchain (search snippet)
- Won 11+ hackathons, earning ~$55,000 in prizes (GitHub bio)
- ETHDenver 2025: Built "EigenBets" (prediction market with AI-agent oracle verification), won $16,000 in prizes including EigenLayer AI track first place (UWaterloo CS News, 2025)
- Prior engineering experience: EigenLabs (AI agents for cloud infra, Sep–Dec 2025), SquidRouter (cross-chain DeFi, May–Aug 2025), EasyLabs (stablecoin payments, Jan–Apr 2025), Nethermind (Ethereum client, May–Aug 2024), Rivvi (B2B payroll, May–Aug 2023) (praveshm.com)
- Twitter/X: @ImTheBigP — follower count not retrievable
- LinkedIn: linkedin.com/in/pravesh-mansharamani/
- GitHub: github.com/Pravesh-mansharamani — 33 followers, 51 repos, 46 stars; pinned repos include EigenBets (3 stars, 5 forks), goddid-polymarket, momentum-trading (GitHub)

**Co-founder relationship:** Both founders studied math at University of Waterloo and were members of Waterloo Blockchain. They collaborated on "goddid.money" at ETHGlobal Buenos Aires 2025, a Polymarket-related project (UWaterloo CS News, 2025). Pravesh's ETHDenver 2025 project "EigenBets" was a prediction market platform, directly presaging Totalis.

**Founder-market fit:** Both founders have direct, documented experience building prediction market products. Pravesh built EigenBets (a prediction market with automated market making) and worked at EigenLabs and SquidRouter (DeFi infrastructure). Eric and Pravesh together built goddid.money, which converted Polymarket trading history into credit scores. Their quantitative math backgrounds at Waterloo and extensive hackathon track record in DeFi/prediction markets demonstrate domain-specific technical capability.

## Key Risks

**Primary venue dependency:** Totalis's value proposition depends on integrating with prediction market venues (Polymarket, Kalshi). These venues can restrict API access, change terms, or build competing derivatives products. Polymarket launched its own perpetual futures on April 22, 2026 (CNBC, April 2026), and Kalshi announced perps simultaneously (Yahoo Finance, April 2026), demonstrating willingness to vertically integrate into derivatives.

**Regulatory ambiguity for derivatives on prediction markets:** Prediction market derivatives may face regulatory scrutiny distinct from the underlying markets. Kalshi operates under CFTC regulation; layering derivatives on top of CFTC-regulated products or unregulated crypto markets creates unclear jurisdictional exposure. No public data found on Totalis's regulatory strategy or legal structure.

**Pre-product timing vs. well-funded incumbents:** Totalis is pre-launch with early access only (Crowdfund Insider, April 2026), while Polymarket ($15B valuation, Bloomberg April 2026) and Kalshi ($22B valuation, Crowdfund Insider March 2026) are simultaneously entering derivatives with billions in capital and existing user bases. Fanatics and DraftKings also offer parlay features with massive sports bettor distribution.

**Name collision risk:** "Totalis" shares its name with multiple unrelated entities (insurance companies, ERP software), which could complicate brand building and SEO.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $44B annual prediction market trading volume in 2025; projected $1T by 2030 at ~80% CAGR (Bernstein via CNBC, April 2026) |
| SAM | No public data found |
| Traction | Early access opening for select users (Crowdfund Insider, April 2026); 2 public GitHub repos with 1 star total (GitHub, April 2026) |
| Revenue Signal | No public data found |
| Founders | Eric Liu (Co-founder): Math & Business, UWaterloo/Laurier; hackathon winner. Pravesh Mansharamani (Co-founder): Math, UWaterloo; VP Waterloo Blockchain; 5 engineering internships in DeFi/crypto; 11+ hackathon wins |
| Competitors | Polymarket (~$2.3B raised, revenue unknown, primary venue + perps launched); Kalshi (~$2.9B raised, revenue unknown, CFTC-regulated + perps); Fanatics Markets (funding undisclosed, parlay "Combos" feature); DraftKings (public, acquired Railbird derivatives exchange) |
| Moat Signals | No public data found |
| Risk Factors | Primary venue dependency and vertical integration threat, regulatory ambiguity for prediction market derivatives, pre-launch timing against well-capitalized incumbents |
| Founder Reach | Eric Liu: Twitter not confirmed, LinkedIn linkedin.com/in/ericliujt, GitHub 7 followers. Pravesh Mansharamani: Twitter @ImTheBigP (count not retrievable), LinkedIn linkedin.com/in/pravesh-mansharamani, GitHub 33 followers / 46 stars (GitHub, April 2026) |
| Distribution Signals | No public data found |
| Emails | pravesh@totalis.trade (praveshm.com) |
