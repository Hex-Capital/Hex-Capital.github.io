# Mochatrade

> US stock perps for global traders

| Field | Value |
|-------|-------|
| Website | https://www.mochatrade.com |
| YC Page | https://www.ycombinator.com/companies/mochatrade |
| Batch | Spring 2026 |
| Industry | Fintech / Consumer Finance |
| Team Size | 3 |
| Location | New York, NY, USA |
| Tags | Fintech, Crypto / Web3, Consumer Finance |
| YC Partner | Harj Taggar |
| Emails | No public data found |

## The Idea

**Problem:** Retail traders outside the US — starting with India's 200M+ demat account holders (Outlook Business, 2025) — lack direct access to leveraged trading on US equities. Existing paths require a US brokerage account, are capped by India's LRS limit of $250K/year (CashlessTime, Apr 2026), and offer no perpetual futures instrument on individual US stocks. Current alternatives are traditional brokerages (limited instruments, no leverage on US stocks for non-US persons) or offshore crypto exchanges (focused on crypto, not equities). SEBI data indicates 91% of retail F&O traders in India lose money (CFA Institute, 2025), yet 62% of NSE F&O volume is retail-driven (CFA Institute, Apr 2025), signaling strong demand for leveraged products.

**Approach:** Mochatrade offers perpetual futures contracts on 50+ US stocks (e.g., TSLA, NVDA, AAPL) with up to 20x leverage (YC page). The platform is fully self-custodial — no US brokerage account required. Traders on-ramp in local currencies. The product runs on crypto rails, settling in stablecoins rather than through traditional clearing infrastructure.

**Differentiation:** Unlike Ostium, which focuses on indices, commodities, and FX with some equities, Mochatrade emphasizes individual US stock perps specifically for emerging-market retail traders. Unlike Morpher, which uses a synthetic virtual futures model on Ethereum, Mochatrade targets self-custodial perpetuals with local-currency on-ramps. Unlike Hyperliquid's HIP-3 ecosystem (which relies on third-party builders to deploy perps), Mochatrade builds the full consumer-facing product. [Inferred]: The India-first distribution and local-currency on-ramp strategy distinguishes Mochatrade from Western-centric competitors.

**Business Model:** No pricing page was accessible at time of research. [Inferred]: Most likely monetization is via trading fees (spread or per-trade commission) and funding rate differentials on perpetual contracts, consistent with standard perps exchange economics.

**TAM/SAM:**
- Global crypto perpetual futures volume: $86.2T in 2025, up 47% YoY (crypto.com Research, Jan 2026).
- On-chain RWA-based perpetuals (stocks, indices, FX, commodities): $31B in January 2026 alone, up 162% from December 2025 (crypto.com Research, Jan 2026).
- India has 200M+ demat accounts as of June 2025 (CFA Institute, 2025); NSE launched an international platform for US stock access via GIFT City (CashlessTime, Apr 2026).
- [Inferred]: SAM is the subset of India's ~200M demat holders seeking leveraged US equity exposure outside traditional channels — no public estimate found for this segment.

**GTM / Distribution:** Starting with India (140M+ demat account holders per company description; 200M+ per more recent data), then expanding to other markets (YC page). [Inferred]: Likely distribution via crypto-native channels (Twitter/X, Telegram, referral programs) given the self-custodial, stablecoin-based product structure and the team's crypto background from Martian Wallet.

## Defensibility

- **Prior crypto distribution know-how:** CEO Utkarsh Sinha scaled Martian Wallet to 2M+ installs (Pontem acquisition announcement, May 2025), providing team experience in crypto user acquisition in emerging markets.
- **Self-custodial architecture:** Non-custodial design reduces counterparty risk relative to centralized offshore exchanges and may simplify regulatory positioning.
- **Local-currency on-ramp focus:** [Inferred]: Building fiat on-ramp integrations for specific markets (starting India) creates a localization moat that global platforms typically deprioritize.

No defensibility signals from patents, proprietary datasets, or network effects were found in public sources at this stage.

**Market structure:** Incumbent US brokerages (Schwab, Fidelity, Interactive Brokers) cannot offer perpetual futures on stocks — they are not recognized instruments under current US securities regulation. Offering perps to non-US users on crypto rails would cannibalize their regulated brokerage business and expose them to regulatory risk. Offshore crypto exchanges (Binance, Bybit) focus on crypto-native assets; adding individual US stock perps requires equity price oracle infrastructure and a different user base. [Inferred]: The structural gap is that regulated incumbents cannot offer the product, and crypto incumbents have not prioritized emerging-market equity retail traders.

**Commoditization risk:** Hyperliquid's HIP-3 framework already enables third-party builders to deploy stock perps — Trade[XYZ] has exceeded $100B cumulative volume since October 2025 (Buildix, 2026). Ostium has processed $25B in cumulative volume (BusinessWire, Dec 2025). Building a perps exchange on existing infrastructure (Hyperliquid, Arbitrum, etc.) is technically feasible for well-funded teams. The barrier is distribution and local-market integration, not core technology.

## Market & Traction

**Traction signals:**
- Website not accessible at time of research (returned minimal content).
- No Product Hunt launch found.
- Twitter/X: @Mochatradeapp — handle confirmed (X.com); follower count not retrievable.
- LinkedIn: company page exists as "mochatrade" (YC page); follower count not retrievable.
- No app store listings found for "Mochatrade" on Google Play or Apple App Store.
- No press coverage found in named publications.
- 0 job postings listed on YC page.
- No Discord/Slack community found.
- No public revenue, user count, or volume metrics found.

**Competitive landscape:**

| Competitor | Funding | Differentiator vs. Mochatrade |
|---|---|---|
| **Ostium** | $24M total ($20M Series A led by General Catalyst & Jump Crypto, Dec 2025; $3.5M seed) (Fortune, Dec 2025; The Block, 2025) | Focuses on broad RWA perps (FX, commodities, indices, stocks); $25B cumulative volume; targets global institutional/retail, not India-specific |
| **Hyperliquid / Trade[XYZ]** | Self-funded; ~$55M/month platform revenue (Artemis Analytics, 2025) | Infrastructure layer (HIP-3) enabling third parties to deploy perps; $100B+ cumulative volume on RWA perps since Oct 2025; not a consumer product targeting specific geographies |
| **Morpher** | $8.4M total ($6M Series A led by Draper Associates, Oct 2021) (StreetInsider, 2021) | Zero-fee synthetic trading on Ethereum; Vienna-based; broader asset coverage but virtual futures model rather than on-chain perps |
| **dYdX** | $87M total ($65M Series C led by Paradigm, May 2021) (Blockworks, 2021) | Crypto-native perps DEX; primarily crypto assets, not equities; decentralized governance via DYDX token |
| **Kwenta** | Funded by Mona Venture Capital; acquired by Synthetix (Nov 2024) (Tracxn) | Synthetix-powered perps on Optimism/Base; $50B+ cumulative volume; expanding to Arbitrum; broader crypto + some equity perps |

**Why now:**
- CFTC Chair Selig directed staff to explore rulemaking to permit perpetual contracts onshore, signaling regulatory legitimacy for the instrument class (CoinDesk, Mar 2026).
- SEC and CFTC launched joint "Project Crypto" initiative (Jan 2026) to create a comprehensive framework for digital asset markets (Morrison Foerster, Jan 2026).
- On-chain RWA perps volume surged 162% month-over-month in January 2026 (crypto.com Research).
- India's demat accounts crossed 200M in 2025 (CFA Institute, 2025), and NSE launched an international platform for US stock access (CashlessTime, Apr 2026), reflecting growing demand.
- [Inferred]: The convergence of regulatory clarity in the US, infrastructure maturity (Hyperliquid HIP-3 launched Oct 2025), and surging Indian retail interest in US equities creates a window for a focused consumer product.

## Founders & Team

**Utkarsh Sinha** — Co-Founder & CEO
- MS in Computer Science, Columbia University; B.Tech EECS, IIT Kharagpur (YC page, LinkedIn)
- Co-founded Martian Wallet (Aptos blockchain wallet): 2M+ installs, $3M pre-seed raised (led by Race Capital, with Jump Capital, FTX Ventures, Superscrypt, Aptos), processed billions in transaction volume, acquired by Pontem Technologies (Lightspeed-backed) in May 2025 (GlobeNewswire, Oct 2022; Pontem, May 2025)
- Martian co-founded with Siddharth Jain; started at first Aptos Hackathon while at Columbia (TechFundingNews, 2022)
- Twitter/X: not identified from YC page (no handle listed for Utkarsh); count not retrievable
- LinkedIn: linkedin.com/in/utksn15 — "CEO at Mochatrade | Columbia CS"
- GitHub: No confirmed public account found (multiple "Utkarsh Sinha" profiles; none verified as this individual)

**Parth Maheshwari** — Co-Founder & CTO
- MS in Computer Science, Columbia University; B.Tech EECS, IIT Kharagpur (LinkedIn, YC page context)
- Built Martian Wallet alongside Utkarsh Sinha at Columbia (LinkedIn post, YC page)
- Twitter/X: @_ParthVader_ (YC page); follower count not retrievable
- LinkedIn: linkedin.com/in/parthm1801 — "Mochatrade (YC P26)"
- GitHub: No confirmed public account found

**Chetan Manda** — Co-Founder & CPO
- Bachelor of Design, IIT Guwahati (2016–2020) (ResearchGate, Behance)
- Director of Product Management at Sprinklr (Aug 2020 onward), worked on critical innovation tracks alongside CEO Ragy Thomas (The Org, LinkedIn)
- Product design background; published on UX design (UX Planet, Medium)
- Twitter/X: @theblackmanda (YC page); follower count not retrievable
- LinkedIn: linkedin.com/in/chetanmanda — "Director of Product at Sprinklr | IIT"
- GitHub: No public repos found

**Co-founder relationship:** Utkarsh Sinha and Parth Maheshwari both attended IIT Kharagpur (EECS) and Columbia University (MS CS), and built Martian Wallet together at Columbia. Chetan Manda attended a different institution (IIT Guwahati) and worked at Sprinklr. No public data on how Chetan connected with Utkarsh and Parth.

**Founder-market fit:** Utkarsh has a prior exit in the crypto wallet space (Martian Wallet, acquired), with direct experience scaling a self-custodial crypto product to 2M+ users globally. Parth co-built the same product at the technical level. Chetan brings product management experience from Sprinklr (a publicly traded enterprise SaaS company). The team's stated motivation is personal — they were traders from India who wanted access to global markets with leverage (LinkedIn post). The combination of crypto infrastructure experience (Utkarsh, Parth) and product design (Chetan) maps to the challenge of building a consumer-facing, self-custodial trading product for emerging markets.

## Key Risks

**Regulatory risk across jurisdictions:** Perpetual futures on stocks occupy an ambiguous regulatory zone globally. India's SEBI has cracked down on retail derivatives trading — 91% of retail F&O traders lose money per SEBI data (CFA Institute, 2025). Offering leveraged US stock perps to Indian retail traders via crypto rails could draw enforcement attention from SEBI, RBI (for forex/crypto restrictions), or US regulators (SEC/CFTC jurisdiction over tokenized equity derivatives). The CFTC is currently drafting rules to bring perps onshore (CoinDesk, Mar 2026), which could change the competitive landscape.

**Hyperliquid ecosystem commoditization:** Hyperliquid's HIP-3 framework allows any builder to deploy equity perps — Trade[XYZ] already has $100B+ cumulative volume and an official S&P 500 license (CoinMarketCap, 2026). Mochatrade's value-add must come from the consumer layer and local-market distribution rather than the perps infrastructure itself, which is increasingly commoditized.

**Fiat on-ramp dependency:** The product requires local-currency on-ramps for Indian users to convert INR to stablecoins. India imposes a 30% tax on crypto gains and 1% TDS on crypto transactions (effective 2022). On-ramp partners face their own regulatory constraints; any disruption to this channel directly impacts user acquisition.

**Competitor capitalization:** Ostium ($24M raised), dYdX ($87M raised), and Hyperliquid (~$55M/month revenue) are substantially better capitalized. If any of these platforms prioritize India-specific distribution, Mochatrade's geographic niche could be challenged. Ostium specifically offers stock perps and is backed by General Catalyst and Jump Crypto.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Crypto perps: $86.2T volume in 2025 (crypto.com Research, Jan 2026); on-chain RWA perps: $31B in Jan 2026 (crypto.com Research, Jan 2026) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Utkarsh Sinha (CEO): MS CS Columbia, IIT KGP, founded Martian Wallet (2M+ installs, acquired by Pontem May 2025). Parth Maheshwari (CTO): MS CS Columbia, IIT KGP, co-built Martian Wallet. Chetan Manda (CPO): B.Des IIT Guwahati, Director of Product at Sprinklr. |
| Competitors | Ostium ($24M raised, revenue unknown, broad RWA perps with $25B cumulative volume); Hyperliquid (self-funded, ~$55M/mo revenue, infrastructure layer enabling third-party perps); Morpher ($8.4M raised, revenue unknown, zero-fee synthetic trading); dYdX ($87M raised, revenue unknown, crypto-native perps DEX) |
| Moat Signals | No public data found |
| Risk Factors | Multi-jurisdiction regulatory exposure (SEBI, RBI, SEC/CFTC), Hyperliquid HIP-3 commoditization of equity perps infrastructure, fiat on-ramp dependency under India's crypto tax regime |
| Founder Reach | Utkarsh Sinha: Twitter not identified, LinkedIn linkedin.com/in/utksn15. Parth Maheshwari: Twitter @_ParthVader_ (count not retrievable), LinkedIn linkedin.com/in/parthm1801. Chetan Manda: Twitter @theblackmanda (count not retrievable), LinkedIn linkedin.com/in/chetanmanda. |
| Distribution Signals | No public data found |
| Emails | No public data found |
