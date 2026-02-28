# Sequence Markets

> Smarter and faster trade execution for digital assets

| Field | Value |
|-------|-------|
| Website | https://sequencemkts.com/ |
| YC Page | https://www.ycombinator.com/companies/sequence-markets |
| Batch | Winter 2026 |
| Industry | Fintech / Fintech |
| Team Size | 5 |
| Location | New York, NY, USA |
| Tags | Fintech, AI, Cryptocurrency |

## The Idea

**Problem:** Institutional and active investors trading digital assets face fragmented liquidity across dozens of exchanges, leading to poor execution quality — higher slippage, suboptimal pricing, and unreliable fills. Currently, many firms either route manually across venues or use one of a small number of expensive incumbent platforms (Talos, FalconX, CoinRoutes) built for the largest institutions. The company website describes the problem as achieving "best execution for tokenized assets and the world of tokenization" (sequencemkts.com).

**Approach:** Sequence Markets builds a non-custodial execution layer that aggregates liquidity from multiple exchanges and uses AI-powered smart order routing to find optimal execution paths. The platform claims access to "$15B+ liquidity" across connected venues (sequencemkts.com). Key technical features include sub-millisecond latency execution, real-time market data, transaction cost analysis (TCA), and best execution reporting. The non-custodial architecture means the company never takes custody of client assets and instead integrates with existing brokers, exchanges, and custodial platforms as a technology layer (YC company page).

**Differentiation:** Compared to incumbents like Talos ($1.5B valuation, full-stack institutional infrastructure) and FalconX ($8B valuation, prime brokerage bundled with execution), Sequence Markets positions itself as a focused, venue-neutral execution technology provider rather than a full prime brokerage or custodial platform. Relative to CoinRoutes (which holds a patent on smart order routing technology — CoinDesk, Mar 2023), Sequence Markets emphasizes AI-powered routing decisions and tokenized asset coverage. The non-custodial, broker-agnostic integration model differentiates from vertically integrated platforms that bundle custody, credit, and execution.

**Business Model:** No public pricing page was found on the company website. [Inferred]: The most likely monetization path is per-trade execution fees (basis points on notional volume) or a SaaS subscription for platform access, consistent with how CoinRoutes and Talos charge institutional clients.

**TAM/SAM:** The Digital Asset Trading Platform Market was valued at $25.01B in 2024 and is projected to reach $155.85B by 2032 at approximately 26% CAGR (Market.us via search snippet). A separate estimate values the Crypto Trading Platform Market at $33.48B in 2025, projected to reach $58.36B by 2029 at 14.9% CAGR (Coherent Market Insights via search snippet). The serviceable segment — institutional and active-investor execution infrastructure specifically — would be a subset of these broader figures. No public SAM estimate specific to execution-layer technology was found.

**GTM / Distribution:** [Inferred]: The most likely distribution path is direct sales to institutional clients (hedge funds, trading firms, asset managers) and integration partnerships with existing brokers and custodial platforms. The company description explicitly mentions integration with "existing brokers, exchanges and custodial platforms" as a go-to-market wedge, suggesting a B2B2B model alongside direct institutional sales.

## Defensibility

The company's website claims sub-millisecond latency and AI-powered routing, suggesting proprietary execution algorithms and infrastructure as potential technical moats. Access to $15B+ aggregated liquidity across venues represents an integration network that grows more valuable with each connected venue. Transaction cost analysis data accumulated over time could create a data advantage for improving routing decisions.

No patents, published research, or open-source repositories were found associated with the company.

**Market structure:** Incumbents like FalconX and Talos have expanded into full prime brokerage (custody, credit, clearing) — a vertical integration that may create business model conflict with offering a lightweight, non-custodial execution-only layer. Banks and exchanges entering digital assets are building proprietary execution stacks (e.g., TMX's own digital asset initiatives) but may prefer to license neutral third-party routing technology to avoid conflicts of interest with their own order flow. [Inferred]: The structural barrier for incumbents copying this approach is that full-service prime brokers (FalconX, Talos) face cannibalization risk if they unbundle execution-only technology at lower price points, as it would undermine their higher-margin bundled offerings.

**Commoditization risk:** Smart order routing and liquidity aggregation are well-understood concepts in traditional equities (e.g., Virtu, Citadel Securities) and several crypto-specific competitors already exist (CoinRoutes holds a patent on SOR — CoinDesk, Mar 2023). The AI differentiation claim is difficult to evaluate without public benchmarks. New entrants with sufficient engineering talent could build comparable routing technology, though latency optimization and venue integrations require non-trivial infrastructure investment.

## Market & Traction

**Traction signals:**
- LinkedIn company page: 368 followers (as of Dec 4, 2025 — LinkedIn post)
- LinkedIn YC W26 announcement post: 87 likes, 13 comments (Dec 4, 2025 — LinkedIn)
- Twitter/X: @SequenceMarkets handle identified on company website; follower count not retrievable due to JavaScript rendering
- Telegram: sequencemarkets channel listed on company website; member count not publicly available
- Website claims "$15B+ liquidity" accessible through the platform (sequencemkts.com)
- No Product Hunt listing found
- No press coverage in named publications found
- No public revenue or user count data found
- No app store listings or Chrome extension found
- 0 job openings listed on YC profile (YC company page)

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Sequence Markets |
|---|---|---|
| **Talos** | ~$150M raised, $1.5B valuation (Robinhood investment, Jan 2026 — CoinDesk) | Full institutional infrastructure including OMS/EMS, settlement, and recently acquired Coin Metrics for market data; broader scope beyond execution |
| **FalconX** | ~$430–477M raised, $8B valuation (Series D, Jun 2022 — Crunchbase via search snippet) | Full prime brokerage with credit, custody, and derivatives; recently acquired 21Shares (SiliconAngle, Oct 2025) |
| **CoinRoutes** | ~$35M raised (Series B $16M, Mar 2022 — GlobeNewsWire) | Patented smart order routing technology (CoinDesk, Mar 2023); algorithmic trading focus; integrated by Wintermute (CoinDesk, Apr 2023) |
| **Wyden** | ~$28.4M raised (Series B CHF 14.5M, Nov 2024 — Crypto Valley Journal) | European institutional focus; sell-side infrastructure for banks and brokers; plans to onboard 20+ banks/brokers in 2025 |
| **sFOX** | ~$22.8M raised (Series A — sFOX blog) | $600B+ transaction volume processed (Morningstar/PRNewswire, Oct 2025); sFOX Connect API platform for embedding crypto trading |

**Why now:** Several specific catalysts have converged: (1) The EU's MiCA regulation became fully operational across member states in mid-2024, imposing best execution obligations on crypto-asset service providers analogous to MiFID II requirements for traditional securities (Chainalysis, 2025 via search snippet); (2) Tokenization of real-world assets is accelerating, with BCG estimating $16 trillion in tokenized illiquid assets by 2030 (BCG, 2024 via search snippet), creating demand for execution infrastructure that spans both native crypto and tokenized traditional assets; (3) Institutional adoption is accelerating — Robinhood's investment in Talos at $1.5B valuation in January 2026 and Y Combinator's announcement that it would accept stablecoin payments for its funding starting Spring 2026 (Fortune, Feb 2026) both signal deepening institutional commitment. [Inferred]: The convergence of regulatory best-execution mandates and asset tokenization creates a structural need for specialized execution technology that can route orders across both crypto-native and tokenized-asset venues.

## Founders & Team

**Muhammad Awan** — Co-founder
- Located in Mississauga, Ontario, Canada (LinkedIn via search snippet)
- Connected to University of Waterloo (Waterloo Quant Club — executive recruitment role) (LinkedIn via search snippet)
- Software development background; incoming Software Engineering Intern at Databricks, Mountain View (LinkedIn via search snippet)
- Twitter/X: No public account confirmed for the correct individual
- LinkedIn: linkedin.com/in/muhammad-awan0 — 500+ connections (LinkedIn via search snippet)
- GitHub: No public repos found associated with Sequence Markets

**Peter Bai** — Co-founder
- Education: Western University — Ivey HBA (Honours Business Administration), preceded by BMOS (Management and Organizational Studies) degree (Ivey HBA blog, Nov 2025)
- Professional experience: TMX Group (Toronto Stock Exchange); University Pension Plan Ontario — private investments and macro trading for a fund managing over $12.8B (Ivey HBA blog, Nov 2025)
- Leadership: Co-President of Western AI (Western University's largest tech club); launched DataQuest Hackathon (36-hour ML competition); organized AI Career Fair; presented research at CUCAI (Canada's top undergraduate AI conference) (Ivey HBA blog, Nov 2025)
- Focus areas: Quantitative finance, market microstructure, execution quality (Ivey HBA blog, Nov 2025)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/peter-bai — 500+ connections, Greater Toronto Area (LinkedIn via search snippet)
- GitHub: No public repos found

**Co-founder relationship:** Both founders are based in the Greater Toronto Area (Mississauga and GTA respectively). Peter Bai attended Western University and Muhammad Awan is connected to the University of Waterloo; no shared employer or university overlap was identified from available sources. No public data on co-founder history beyond this.

**Founder-market fit:** Peter Bai has direct experience at TMX Group (Canada's primary stock exchange operator) and managed investments at a $12.8B pension fund, providing domain expertise in market microstructure and execution quality — the core problem Sequence Markets addresses. His academic work through Western AI and CUCAI connects to the AI-powered routing component. Muhammad Awan brings software engineering capabilities, with a background connected to quantitative finance through the Waterloo Quant Club and an incoming role at Databricks (a data infrastructure company). No advisors, board members, or notable angel investors were identified in public sources beyond YC partner Brad Flora (YC company page).

## Key Risks

**Patent risk from CoinRoutes:** CoinRoutes holds a granted patent for smart order routing in crypto markets (CoinDesk, Mar 2023). Depending on the patent's claims scope, Sequence Markets' routing technology could face IP challenges or require design-arounds. Mitigation: the specific claims of the patent are not publicly analyzed, and Sequence Markets' AI-powered approach may differ sufficiently.

**Incumbent platform expansion:** Talos raised $45M at a $1.5B valuation in January 2026 with Robinhood as a strategic investor (CoinDesk, Jan 2026), and has been acquiring data companies (Coin Metrics for $100M+). FalconX acquired 21Shares in October 2025 (SiliconAngle). These incumbents are rapidly expanding their capabilities, potentially compressing the market opportunity for standalone execution layers.

**Brand disambiguation:** Multiple companies use "Sequence" in the crypto/web3 space, including 0xSequence (a well-established web3 wallet/marketplace infrastructure company with significant GitHub presence and social following). This creates potential brand confusion in the target market. The company uses the domain sequencemkts.com rather than a primary "sequence" domain.

**Regulatory uncertainty in target market:** The company targets institutions requiring best execution, but crypto best-execution standards are still evolving in the US (SEC guidance on digital asset trading remains in flux — SEC written submission, Dec 2025). A shift toward mandating internalization or specific execution venues could undermine the value of independent smart order routing.

**Founder experience relative to infrastructure complexity:** Building sub-millisecond latency execution infrastructure for institutional clients is technically demanding. Both founders appear to be early-career (undergraduate/recent graduate stage based on available data). The team of 5 is building against competitors with hundreds of engineers. Mitigation: YC W26 acceptance provides mentorship and network access; Peter Bai's TMX Group and pension fund experience provides relevant domain grounding.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $25.01B digital asset trading platform market in 2024, projected $155.85B by 2032 at ~26% CAGR (Market.us via search snippet) |
| SAM | No public data found for execution-layer-specific segment |
| Traction | 368 LinkedIn followers (Dec 2025, LinkedIn post); $15B+ liquidity claim on website (sequencemkts.com); no public user or revenue metrics |
| Revenue Signal | No public data found |
| Founders | Muhammad Awan (Co-founder): University of Waterloo-affiliated, software engineering, incoming Databricks intern. Peter Bai (Co-founder): Ivey HBA, ex-TMX Group, ex-University Pension Plan Ontario ($12.8B AUM), quantitative finance/market microstructure |
| Competitors | Talos (~$150M raised, $1.5B valuation, revenue unknown, full institutional infra vs. execution-only); FalconX (~$430M+ raised, $8B valuation, revenue unknown, prime brokerage bundle vs. non-custodial); CoinRoutes (~$35M raised, revenue unknown, patented SOR vs. AI-powered routing); Wyden (~$28.4M raised, revenue unknown, European bank/broker focus vs. US/global); sFOX (~$22.8M raised, $600B+ volume processed, API platform vs. execution layer) |
| Moat Signals | AI-powered routing algorithms (claimed, not benchmarked); $15B+ aggregated liquidity network (website claim); non-custodial architecture as differentiation |
| Risk Factors | CoinRoutes SOR patent exposure, rapid incumbent expansion (Talos/FalconX acquisitions), brand confusion with 0xSequence |
| Founder Reach | Muhammad Awan: Twitter not confirmed, LinkedIn 500+, GitHub not found. Peter Bai: Twitter not found, LinkedIn 500+, GitHub not found |
| Distribution Signals | No public data found (no Product Hunt listing, no app store presence, no press coverage identified) |
