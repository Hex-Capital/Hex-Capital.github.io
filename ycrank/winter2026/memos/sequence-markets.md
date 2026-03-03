# Sequence Markets

> Execution layer for fragmented digital-asset markets.

| Field | Value |
|-------|-------|
| Website | https://sequencemkts.com/ |
| YC Page | https://www.ycombinator.com/companies/sequence-markets |
| Batch | Winter 2026 |
| Industry | Fintech / Fintech |
| Team Size | 5 |
| Location | New York, NY, USA |
| Tags | Fintech, AI, Cryptocurrency |
| YC Partner | Brad Flora |
| Emails | team@sequencemkts.com |

## The Idea

**Problem:** Digital-asset liquidity is fragmented across centralized exchanges (e.g., Coinbase, Binance, Kraken) and decentralized venues (Uniswap, dYdX, etc.). Active traders—both institutional and retail—face inconsistent execution outcomes (price slippage, partial fills) and operational complexity when attempting to access liquidity across multiple venues simultaneously. Today, traders either manually manage accounts on multiple exchanges, use incumbent institutional platforms like Talos or FalconX (which require enterprise-scale commitments), or accept suboptimal execution on a single venue.

**Approach:** Sequence Markets provides smart order routing and liquidity aggregation infrastructure that routes trades across multiple centralized and decentralized venues to achieve best execution. The platform claims access to $15B+ in aggregated liquidity, sub-millisecond execution latency, and AI-powered routing decisions (company website). The architecture is non-custodial—Sequence does not hold client assets—and integrates with existing brokers, exchanges, and custodial platforms (YC company page). The company's LinkedIn announcement describes it as "the fastest and smartest trade execution infrastructure for digital asset markets" (LinkedIn company post, Dec 2025).

**Differentiation:** Compared to Talos ($196M raised, $1.5B valuation), which serves large institutions with full trading lifecycle coverage, Sequence Markets targets a broader audience including both retail and institutional traders with a "controlled rollouts, quality over quantity" approach (YC company page). Compared to CoinRoutes ($19–35M raised), which provides client-deployed SOR as SaaS, Sequence appears to offer a hosted execution layer. Compared to 1inch (~$190M raised), which aggregates only decentralized venues, Sequence routes across both centralized and decentralized markets. Compared to FalconX ($430M raised, $8B valuation), which bundles prime brokerage and credit services, Sequence focuses specifically on the execution layer.

**Business Model:** No pricing page or pricing details are publicly available. [Inferred]: The most likely monetization path is either per-trade execution fees (basis points on routed volume), a SaaS subscription for API access, or a hybrid of both—consistent with how CoinRoutes and Talos monetize.

**TAM/SAM:** The global cryptocurrency exchange market was valued at $41.41B in 2025 and is projected to reach $211.57B by 2033 at a 22.6% CAGR (SNS Insider, 2025 via search snippet). A separate estimate sizes the global cryptocurrency exchanges market at $48.41B in 2025, growing to $122.63B by 2032 (Coherent Market Insights via search snippet). No public TAM/SAM data found specific to the "execution infrastructure" sub-segment. [Inferred]: The serviceable market is a fraction of total exchange revenue—specifically, the execution/routing technology spend by active traders and institutions, which would be materially smaller than the overall exchange market.

**GTM / Distribution:** The company states a "controlled rollouts, quality over quantity" approach and is "open to retail and institutional traders" (YC company page). [Inferred]: The most likely initial distribution path is direct onboarding of crypto-native trading firms and active individual traders, possibly via API integrations, expanding to institutional accounts as the product matures. The non-custodial, integration-friendly architecture suggests a B2B infrastructure play rather than a consumer-facing product.

## Defensibility

The company claims sub-millisecond execution latency and AI-powered routing optimization (company website), which implies proprietary routing algorithms. Non-custodial architecture and multi-venue integration require maintaining live connectivity to numerous exchanges and DEXs, which creates incremental engineering complexity as the venue count grows.

[Inferred]: Potential moat could develop via (1) proprietary execution data that improves routing quality over time (data flywheel), (2) the operational complexity of maintaining integrations across a growing number of venues, and (3) switching costs once traders integrate Sequence into their trading workflows. However, none of these are proven at this stage.

**Market structure:** Incumbent institutional platforms (Talos, FalconX) serve large institutions with full-stack offerings (prime brokerage, credit, custody integration). [Inferred]: These incumbents may face difficulty serving smaller active traders and retail users due to high minimum account sizes and enterprise sales cycles, creating a gap that Sequence could exploit from below. However, no structural barrier prevents these incumbents from moving downmarket.

**Commoditization risk:** Smart order routing is a well-understood concept from traditional equities markets. Talos, CoinRoutes, FalconX, and 1inch all offer forms of multi-venue routing. The barrier to building basic SOR is moderate—the differentiation lies in routing quality, latency, venue coverage, and reliability under stress. A well-funded competitor or exchange could build comparable infrastructure.

## Market & Traction

**Traction signals:**
- Y Combinator Winter 2026 batch member (YC company page)
- Company LinkedIn page: 451 followers (LinkedIn company post, Dec 2025)
- Peter Bai's LinkedIn announcement of YC acceptance: 240 likes, 22 comments (LinkedIn post, Jan 7, 2026)
- Company LinkedIn YC announcement: 87 likes, 13 comments (LinkedIn company post, Dec 2025)
- Peter Bai LinkedIn followers: 3,067 (LinkedIn post, Jan 2026)
- Twitter/X handle: @sequencemarkets (follower count not retrievable due to JavaScript rendering)
- LinkedIn company page: linkedin.com/company/sequence-markets
- No Product Hunt launch found
- No Discord/Slack community found
- No public revenue or user count data found
- No app store presence found
- Website claims $15B+ aggregated liquidity access (company website)
- Not currently hiring (YC company page)

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Sequence |
|---|---|---|---|
| **Talos** | $196M raised, $1.5B valuation (CoinDesk, Jan 2026) | Revenue unknown; serves clients representing ~$21T AUM (Talos website via search snippet) | Full trading lifecycle platform (pre-trade, execution, settlement) for large institutions; won Best Quantitative Trading Technology Provider 2025 (Hedgeweek) |
| **CoinRoutes** | $19–35M raised, Series B (GlobeNewsWire, Mar 2022) | Revenue unknown | Client-deployed SOR; SaaS model; operational since 2017; used by Wintermute (CoinDesk, Apr 2023) |
| **FalconX** | $430M raised, $8B valuation (FalconX newsroom) | Revenue unknown; reported 30x YoY revenue growth at Series C (FalconX newsroom, Aug 2021) | Full prime brokerage + credit services bundled with execution; institutional-only focus |
| **1inch** | ~$190M raised (Binance Labs, Pantera Capital) | Revenue unknown | DeFi-only DEX aggregator; decentralized protocol with governance token; no centralized venue routing |
| **Wintermute** | $56.8M raised, Series C (Tracxn) | $1.05B revenue in 2021 (CB Insights via search snippet); $5B+ daily trading volume (Tracxn via search snippet) | Market maker, not execution infrastructure; provides liquidity rather than routing |

**Why now:** [Inferred]: Several catalysts have converged: (1) the proliferation of both centralized and decentralized trading venues has accelerated fragmentation, making multi-venue routing increasingly valuable; (2) institutional adoption of digital assets has grown, with Talos's recent $1.5B valuation and Robinhood's investment signaling mainstream institutional demand for execution infrastructure (CoinDesk, Jan 2026); (3) regulatory clarity in the U.S. has progressed, with stablecoins shifting from a crypto trading tool to operational settlement rails (Crypto.com 2025 Year Review via search snippet); (4) the rise of tokenized real-world assets creates new execution needs beyond traditional crypto tokens.

## Founders & Team

**Peter Bai** — Co-founder
- Education: Western University, BMOS (Management and Organizational Studies); Ivey Business School HBA (Honours Business Administration) (Ivey HBA blog, Nov 2025)
- Previously: TMX Group (Toronto Stock Exchange) — worked on private investments and macro trading; University Pension Plan Ontario — macro trading for a fund managing over $12.8B (Ivey HBA blog, Nov 2025)
- Co-President of Western AI (largest tech club on campus) — led teams that built AI projects, published research, presented at CUCAI (Canada's top undergraduate AI conference); launched DataQuest Hackathon and Career Fair (Ivey HBA blog, Nov 2025)
- Focus: quantitative finance, market microstructure, and execution quality (Ivey HBA blog, Nov 2025)
- Twitter/X: No public account confirmed for Sequence Markets context
- LinkedIn: linkedin.com/in/peter-bai/ — 3,067 followers (LinkedIn post, Jan 2026)
- GitHub: No public repos found

**Muhammad Awan** — Co-founder
- Located in Mississauga, Ontario, Canada (LinkedIn search result)
- LinkedIn: linkedin.com/in/muhammad-awan0/ — 500+ connections (LinkedIn search result)
- YC profile tagline: "I like building cool projects" (YC company page)
- Education: No public data found
- Prior companies: No public data found
- Twitter/X: No public account found
- GitHub: No public repos confirmed (multiple "Muhammad Awan" accounts exist on GitHub; none confirmed as this founder)

**Co-founder relationship:** Both founders appear to be based in the Ontario, Canada area (Peter Bai at Western University/Ivey in London, ON; Muhammad Awan in Mississauga, ON). Peter Bai's involvement with Western AI and Muhammad Awan's proximity to the Greater Toronto Area suggest potential overlap through Ontario's tech or university ecosystem, but no specific shared employer or institution is confirmed from public data.

**Founder-market fit:** Peter Bai has direct experience in market microstructure and execution quality from roles at TMX Group and University Pension Plan Ontario (managing $12.8B), which maps directly to the problem Sequence Markets is solving. His AI leadership at Western AI aligns with the company's AI-powered routing approach. Muhammad Awan's specific technical background is not publicly documented. No advisors, board members, or notable investors beyond YC have been publicly identified.

## Key Risks

**Well-funded incumbent competition:** Talos ($196M raised, $1.5B valuation), FalconX ($430M raised, $8B valuation), and CoinRoutes (operational since 2017) all provide multi-venue execution infrastructure for digital assets. These companies have established exchange partnerships, regulatory relationships, and institutional client bases that Sequence would need to compete against or differentiate from.

**Regulatory and licensing uncertainty:** Operating execution infrastructure that routes orders across multiple exchanges may trigger broker-dealer, ATS, or money transmission licensing requirements depending on the jurisdiction and how the service handles order flow. The non-custodial architecture mitigates some risk, but regulatory classification of execution-layer services remains evolving.

**Location discrepancy:** The YC page lists New York, NY as the company location, while the company website lists Toronto, Ontario, Canada, and both founders appear to be based in Ontario. This may reflect a recent relocation for YC or a dual presence, but the inconsistency warrants clarification.

**Venue integration dependency:** The platform's value depends on maintaining live, reliable connections to numerous centralized and decentralized venues. Exchange API changes, rate limits, downtime, or access revocations could degrade execution quality. Each venue integration represents ongoing maintenance overhead.

**Brand disambiguation:** The name "Sequence" is shared by multiple companies across fintech and tech (Sequence HQ, Sequence Commerce, Sequence Bio, etc.), which could create SEO and brand confusion challenges.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Cryptocurrency exchange market: $41.41B in 2025, projected $211.57B by 2033 at 22.6% CAGR (SNS Insider via search snippet); alternative estimate: $48.41B in 2025, $122.63B by 2032 (Coherent Market Insights via search snippet) |
| SAM | No public data found for the execution infrastructure sub-segment specifically |
| Traction | YC W26 batch member; LinkedIn company page: 451 followers (Dec 2025); website claims $15B+ aggregated liquidity access; no public user count or revenue data found |
| Revenue Signal | No public data found |
| Founders | Peter Bai (Co-founder): Ivey HBA, TMX Group, University Pension Plan Ontario ($12.8B AUM), Western AI Co-President. Muhammad Awan (Co-founder): limited public background data |
| Competitors | Talos ($196M raised, $1.5B valuation, revenue unknown, full-lifecycle institutional platform); CoinRoutes ($19–35M raised, revenue unknown, client-deployed SOR SaaS since 2017); FalconX ($430M raised, $8B valuation, revenue unknown, prime brokerage + execution); 1inch (~$190M raised, revenue unknown, DeFi-only DEX aggregator); Wintermute ($56.8M raised, $1.05B revenue 2021, market maker not SOR) |
| Moat Signals | Proprietary AI-powered routing algorithms claimed; non-custodial multi-venue integration complexity; potential data flywheel from execution data (unproven) |
| Risk Factors | Well-funded incumbent competition, regulatory/licensing uncertainty, venue integration dependency |
| Founder Reach | Peter Bai: LinkedIn 3,067 followers; Muhammad Awan: LinkedIn 500+ connections; Company Twitter @sequencemarkets (count not retrievable) |
| Distribution Signals | No Product Hunt launch found; no app store presence; no Discord/Slack community found; LinkedIn company page with 451 followers (Dec 2025) |
| Emails | team@sequencemkts.com |
