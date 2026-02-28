# Unifold

> Multi-chain deposit and payment infrastructure

| Field | Value |
|-------|-------|
| Website | https://unifold.io |
| YC Page | https://www.ycombinator.com/companies/unifold |
| Batch | Winter 2026 |
| Industry | Fintech / Fintech -> Payments |
| Team Size | 3 |
| Location | New York, NY, USA |
| Tags | Fintech, Crypto / Web3, Payments, Cryptocurrency |

## The Idea

**Problem:** Applications building on-chain products (prediction markets, perpetual exchanges, DeFi protocols, fintech apps) must independently integrate deposits across multiple blockchains — Ethereum, Solana, Bitcoin, and various EVM-compatible chains. Each chain has its own addressing, gas logic, bridging, compliance requirements, and settlement flows. Teams currently piece together these integrations manually, resulting in slow development cycles, fragmented user experiences, and engineering overhead. The company describes the current state as deposit flows that don't "actually work" for end users (unifold.io).

**Approach:** Unifold provides a developer-first API and SDK (`@unifold/connect-react`) that abstracts the full deposit flow into a single integration. The product generates per-user deposit addresses automatically, handles cross-chain routing based on policy/liquidity/fees, sponsors gas so users don't need gas tokens, and includes on-chain compliance with centralized exchange integrations (Coinbase, Gemini). The company claims integration in under 10 lines of code and a 9-minute setup time (unifold.io). The SDK supports Web, React Native, iOS, and Android (YC page). The product is described as handling crypto and fiat deposits (YC page).

**Differentiation:** Compared to fiat-to-crypto on-ramps like MoonPay and Transak, Unifold focuses specifically on on-chain deposit orchestration rather than fiat conversion — routing existing crypto across chains into application wallets. Compared to Glide (YC S23, $15M Series A), the closest direct competitor, Unifold emphasizes compliance integrations with centralized exchanges and gas sponsorship as built-in features. Compared to Fireblocks ($1B+ raised), which offers broad custody and treasury infrastructure for institutions, Unifold targets a narrower developer-tool use case — deposit acceptance — with a lighter-weight SDK integration. A TechFlow article characterizes Unifold as a "classic developer-tool business" where end users remain unaware the underlying technology is crypto-based (TechFlowPost, 2026).

**Business Model:** The website lists the product at "$0 USD" and currently accepts private beta applicants (unifold.io). No public pricing tiers, per-transaction fees, or revenue data were found. [Inferred]: The most likely monetization path is per-transaction or per-deposit fees charged to integrating applications, consistent with payment infrastructure business models (analogous to Stripe's percentage-based fees). The "free" listing likely reflects beta/launch pricing to acquire early customers.

**TAM/SAM:** The global crypto payment gateways market was valued at $1,684.7 million in 2025 with a projected CAGR of ~18.9% reaching $6,030 million by 2035 (Future Market Insights, 2025 via search snippet). The crypto APIs market was valued at $1,074 million in 2025 with projections of $7,975.7 million by 2035 (Future Market Insights, 2025 via search snippet). Stablecoin payment flows reached $2.9 trillion in 2025 and could hit $56 trillion by 2030 (Bloomberg Intelligence via search snippet). SAM: No public data specific to the on-chain deposit orchestration sub-segment was found.

**GTM / Distribution:** The company's YC page mentions working with ecosystems including Algorand, MegaETH, and Thru, and names Alpha Arcade (an Algorand prediction market) as an early integration that achieved deployment in 30 minutes (YC page). The product targets "consumer-facing on-chain products" seeking multi-chain deposit support (YC page). [Inferred]: The most likely distribution path is direct developer outreach to on-chain application teams (prediction markets, DeFi protocols, exchanges), leveraging YC network and ecosystem partnerships. The emphasis on "less than 10 lines of code" and documentation suggests a product-led growth strategy within the developer community.

## Defensibility

No public patents, proprietary datasets, or strong network effects are identifiable at this stage from public sources.

Potential switching costs exist once applications integrate the SDK and route deposits through Unifold's infrastructure — migrating deposit flows affects end-user experience and requires re-engineering. As the platform processes more deposits across more chains, operational data on routing efficiency, fee optimization, and compliance patterns could compound into a data advantage. However, these are prospective rather than demonstrated.

**Market structure:** [Inferred]: Incumbent crypto infrastructure providers (Fireblocks, MoonPay) have broader product suites — custody, fiat on-ramps, NFT commerce — making a narrowly focused deposit-orchestration API potentially unattractive to build and support internally. Their existing revenue models center on different transaction types (fiat conversion fees, custody fees), and unbundling to offer a lightweight developer SDK at the deposit layer could cannibalize higher-value product offerings. No structural barrier is confirmed from public evidence.

**Commoditization risk:** The core technical components — multi-chain address generation, transaction routing, gas abstraction — are implementable by well-resourced teams. Glide (YC S23) already offers substantially overlapping functionality with a $15M Series A (Crunchbase, May 2025 via search snippet). New entrants could replicate the technical approach; the defensible advantage likely depends on execution speed, reliability at scale, and depth of chain/token coverage rather than proprietary technology.

## Market & Traction

**Traction signals:**
- Currently in private beta accepting applicants (unifold.io, accessed Feb 2026)
- Named ecosystem partnerships: Algorand, MegaETH, and Thru (YC page)
- Alpha Arcade (Algorand prediction market) cited as an integration that was completed in 30 minutes (YC page)
- Twitter/X: @unifold_io (handle confirmed on unifold.io; follower count not retrievable due to JavaScript rendering)
- LinkedIn: company page listed as "unifoldio" (YC page; follower count not retrievable)
- GitHub (timchunght, Timothy Chung): 233 public repos, 25 followers (GitHub)
- No Product Hunt launch found
- No app store listings found
- No Discord/Slack community found
- No public revenue, user count, or transaction volume data found

**Competitive landscape:**

1. **Glide** (YC S23) — $15M raised (Series A, May 2025; Crunchbase via search snippet). Revenue unknown. Closest direct competitor: offers crypto deposits and wallet funding from any chain, wallet, or exchange with pre-built flows. CEO previously a tech lead at Robinhood Crypto building the Robinhood Wallet (CBInsights via search snippet). Glide has a head start of roughly 2.5 years and significantly more funding.

2. **Fireblocks** — $1.039B total raised at $8B valuation (Series E, Jan 2022; Fireblocks press release via search snippet). Revenue unknown publicly. Offers broader custody and digital asset infrastructure for institutions, including a network for stablecoin payments processing over $200B/month in stablecoin volume (Fireblocks blog via search snippet). Differentiation vs. Unifold: enterprise-grade custody/treasury platform vs. lightweight developer deposit SDK.

3. **Transak** — $37M total raised across 3 rounds (Tracxn via search snippet). Processed over $2B in transaction volume (Transak blog via search snippet). Integrated into 450+ applications across 75+ countries. Focuses on fiat-to-crypto on-ramp/off-ramp rather than on-chain-to-on-chain deposit routing. Differentiation vs. Unifold: fiat conversion focus vs. crypto-native deposit orchestration.

4. **MoonPay** — Has raised over $600M and was valued at $3.4B (Wikipedia via search snippet). Revenue unknown publicly. Made 6 acquisitions including Streambird (wallet-as-a-service, founded by Unifold co-founder's former co-founder Gilad Penn) and Helio ($175M, Architect Partners via search snippet). Broad crypto payments platform covering fiat on-ramps, NFT commerce, and enterprise stablecoin suite. Differentiation vs. Unifold: full-stack crypto commerce vs. focused deposit orchestration API.

**Why now:** [Inferred]: Several converging catalysts in 2024-2025 have opened this opportunity. Stablecoin transaction volume grew 72% year-over-year in 2025, reaching $33 trillion, now rivaling the throughput of major card networks (search snippet from multiple sources). The stablecoin market cap grew from $28 billion in 2020 to $282 billion in 2025 (Visual Capitalist via search snippet). Y Combinator announced it would allow founders to receive funding in stablecoins in February 2026 (Fortune, Feb 2026 via search snippet). Crypto infrastructure captured $2.5 billion in VC funding in Q1 2026 alone (CCN via search snippet). The proliferation of new L1/L2 chains has increased the integration burden for applications needing to accept deposits from users across fragmented ecosystems.

## Founders & Team

**Timothy Chung** — Co-founder
- CS degree from Cambridge and Columbia (YC page)
- Early involvement at Polymarket (YC page); previously worked at Instabase (TechFlowPost, 2026)
- Co-founded Streambird, a wallet-as-a-service company that was acquired by MoonPay and rebranded as MoonPay Wallets (YC page; TechFlowPost, 2026; giladpenn.com)
- Twitter/X: @timothyhchung (handle found via search; follower count not retrievable)
- LinkedIn: linkedin.com/in/timchunght — headline: "Stealth Startup" (LinkedIn via search snippet)
- GitHub: github.com/timchunght — 233 public repos, 25 followers; no repos with significant star counts; notable badges include Arctic Code Vault Contributor (GitHub)

**Quang Huynh** — Co-founder
- 15+ years fintech/crypto experience (YC page)
- 2.5 years at MoonPay (YC page)
- Previous startup acquisition (YC page; no further details found publicly)
- Twitter/X: No public account found
- LinkedIn: No specific profile confirmed (search returned multiple individuals with similar names)
- GitHub: No public repos found

**Hau Chu** — Co-founder / Chief Engineer
- Cornell Tech graduate, dual MS/MA degree (YC page; LinkedIn via search snippet)
- Previously worked at Solana Labs (YC page)
- Senior Blockchain Engineer at MoonPay (ZoomInfo via search snippet)
- Blockchain infrastructure experience since 2023 (YC page)
- Previously at Legitified, Virtual Labs, Bave Blockchain Technology, National Taiwan University, and Academia Sinica (ZoomInfo via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/hauchu1998 — "Senior Full Stack Engineer | Blockchain" (LinkedIn via search snippet)
- GitHub: No public repos found

**Co-founder relationship:** Timothy Chung co-founded Streambird, which was acquired by MoonPay. Quang Huynh spent 2.5 years at MoonPay, and Hau Chu was a Senior Blockchain Engineer at MoonPay (ZoomInfo). All three founders share MoonPay as a common employer/acquirer, indicating they likely met or worked together during the Streambird acquisition integration at MoonPay.

**Founder-market fit:** The team has direct experience building the exact infrastructure they are now productizing. Timothy Chung built and exited a wallet-as-a-service product to MoonPay, giving him firsthand understanding of crypto wallet provisioning and deposit flows. Quang Huynh brings 15+ years of fintech/crypto operational experience, including 2.5 years at one of the largest crypto payment companies. Hau Chu brings blockchain engineering depth from Solana Labs and MoonPay, with formal training from Cornell Tech. The team has collectively built wallet infrastructure, worked across major chains (Solana, Ethereum), and operated inside a scaled crypto payments company.

## Key Risks

**Direct competitor with significant funding lead:** Glide (YC S23) offers substantially overlapping functionality — crypto deposits from any chain, wallet, or exchange — and has raised $15M in Series A funding (Crunchbase, May 2025 via search snippet) with a ~2.5-year head start. Glide's CEO built the Robinhood Wallet, providing strong credibility with developer and exchange customers. Unifold must demonstrate differentiation beyond feature parity.

**Private beta with no public traction metrics:** No public user counts, transaction volumes, revenue figures, or growth metrics are available. The product is in private beta with access-restricted documentation (docs.unifold.io, accessed Feb 2026). The named partnerships (Algorand, MegaETH, Thru) and Alpha Arcade integration are described on the YC page but lack independently verifiable traction data.

**Brand disambiguation:** "Unifold" is shared with Unifold Holdings (Australian operable walls manufacturer with LinkedIn presence), Uni-Fold (protein folding open-source platform with significant GitHub presence), and other entities. This could create confusion in search discovery and developer mindshare.

**Platform dependency on chain ecosystems:** The product's value proposition depends on continued multi-chain fragmentation. If the industry consolidates around fewer chains or cross-chain bridging becomes natively seamless (e.g., through chain abstraction protocols), the demand for a separate deposit orchestration layer could diminish.

**Free pricing without clear monetization path:** The product is currently listed at "$0 USD" with no public pricing tiers or fee structure. While common during beta, the absence of visible monetization creates uncertainty about unit economics viability, particularly given that the primary competitor (Glide) has raised significantly more capital to compete on the same pricing dynamics.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1,684.7M crypto payment gateways market (Future Market Insights, 2025, ~18.9% CAGR to $6,030M by 2035 via search snippet); $1,074M crypto APIs market (Future Market Insights, 2025 via search snippet) |
| SAM | No public data found for on-chain deposit orchestration sub-segment |
| Traction | Private beta (unifold.io, Feb 2026); named ecosystem partnerships with Algorand, MegaETH, Thru (YC page); Alpha Arcade integration in 30 min (YC page) |
| Revenue Signal | No public data found; product listed at "$0 USD" during private beta (unifold.io) |
| Founders | Timothy Chung (Co-founder): Cambridge & Columbia CS, co-founded Streambird (acquired by MoonPay), ex-Polymarket, ex-Instabase. Quang Huynh (Co-founder): 15+ yr fintech/crypto, 2.5 yr MoonPay, prior exit. Hau Chu (Chief Engineer): Cornell Tech MS, ex-Solana Labs, ex-MoonPay. |
| Competitors | Glide ($15M raised, revenue unknown, closest overlap — crypto deposits from any chain/wallet/exchange); Fireblocks ($1.039B raised, revenue unknown, broader custody/infra vs. lightweight SDK); Transak ($37M raised, $2B+ processed volume, fiat-to-crypto focus vs. on-chain deposit orchestration); MoonPay ($600M+ raised, revenue unknown, full-stack crypto commerce vs. focused deposit API) |
| Moat Signals | No public data found. Potential switching costs from SDK integration and operational data accumulation are prospective, not demonstrated. |
| Risk Factors | Well-funded direct competitor (Glide, $15M, 2.5-yr head start), no public traction metrics (private beta), brand disambiguation challenges |
| Founder Reach | Timothy Chung: Twitter @timothyhchung (count not retrievable), LinkedIn "Stealth Startup," GitHub 25 followers/233 repos. Quang Huynh: no public social accounts found. Hau Chu: LinkedIn 500+ connections, no Twitter/GitHub found. |
| Distribution Signals | No Product Hunt launch found; no app store listings; no Chrome extension; no Discord/Slack community found; Twitter @unifold_io (count not retrievable) |
