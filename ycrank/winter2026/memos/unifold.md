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
| YC Partner | Brad Flora |
| Emails | hello@unifold.io |

## The Idea

**Problem:** On-chain applications — prediction markets, perpetual exchanges, DeFi protocols, and fintech platforms — lose users at the deposit step. Existing deposit flows are fragmented across chains and tokens, requiring users to manage gas tokens, navigate bridging, and handle multi-step processes. The YC Launch page states that "even great on-chain products lose users at the funding step because existing deposits are still fragmented and painful" (YC Launch page, Feb 2026). Current alternatives include building custom deposit flows in-house (expensive, slow) or relying on fiat-to-crypto on-ramps like MoonPay, Transak, or Ramp Network, which focus on fiat conversion rather than on-chain-to-on-chain deposit orchestration.

**Approach:** Unifold provides a developer-first API and SDK that allows any application to accept on-chain deposits across any chain and token with fewer than 10 lines of code (unifold.io). The platform handles the full deposit flow including: cross-chain routing, gas abstraction (users don't need gas tokens), built-in compliance checks integrated with centralized exchanges (Coinbase, Gemini), automatic per-user deposit address provisioning, and settlement. SDKs are available for React/NextJS, React Native (Expo), iOS (Swift), and Android (Kotlin) with both headless and customizable UI options (YC Launch page, Feb 2026).

**Differentiation:** Unlike fiat-to-crypto on-ramps (MoonPay, Transak, Ramp Network) that focus on converting fiat currency into crypto, Unifold focuses specifically on on-chain deposit orchestration — routing crypto that users already hold across different chains and tokens into an application. The company describes itself as "Stripe for crypto deposits" (TechFlow). Key differentiators include: multi-chain routing with gas sponsorship, compliance integration with centralized exchanges, and minimal integration effort (under 10 lines of code). Competitors in the on-ramp space primarily solve fiat-to-crypto conversion rather than on-chain deposit fragmentation.

**Business Model:** The website lists a free tier at $0 USD and a private beta enrollment via waitlist (unifold.io). No paid pricing tiers are publicly listed. [Inferred]: Most likely monetization path is per-transaction fees on deposit volume processed through the platform, consistent with infrastructure-as-a-service models in crypto payments (e.g., MoonPay charges up to 4.5% per card transaction, Transak charges a flat 1%).

**TAM/SAM:** The global decentralized finance market was estimated at $26.94 billion in 2025 and is projected to reach $1,417.65 billion by 2033, growing at a CAGR of 68.2% from 2026 to 2033 (Grand View Research, via search snippet). In 2024, total stablecoin transaction value saw roughly $24 trillion linked to crypto trading and on/off-ramping (Everstake, via search snippet). USDT alone routinely processed approximately $703 billion per month between June 2024 and June 2025, peaking at $1.01 trillion in June 2025 (Everstake, via search snippet). Unifold's SAM would be the subset of on-chain deposit transaction volume flowing into consumer-facing applications (prediction markets, exchanges, DeFi protocols). No specific SAM estimate for on-chain deposit infrastructure was found in public sources.

**GTM / Distribution:** Unifold's YC Launch page names early adopters Alpha Arcade (a prediction market on Algorand) and Lofty.ai (YC S19), with ecosystem partnerships including Algorand, MegaETH, and Thru (YC Launch page, Feb 2026). The company's origin story involves a prediction market (described as "currently top 3 in weekly transactions behind Kalshi and Polymarket" as of Feb 2026) reaching out to use their deposit flow (YC Launch page). [Inferred]: GTM appears to be developer-led, targeting crypto-native applications building on specific ecosystems, leveraging YC network and ecosystem partnerships as initial distribution channels.

## Defensibility

The founding team previously built wallet-as-a-service infrastructure (Streambird) that was acquired by MoonPay and helped onboard 30M+ users across platforms including Phantom and Polymarket (YC Launch page, Feb 2026). This prior experience constitutes domain expertise in deposit and wallet infrastructure.

Multi-chain deposit routing that handles compliance, gas abstraction, and settlement across diverse chains involves meaningful integration complexity. Each chain and token integration requires specific engineering work. As Unifold accumulates more chain integrations and processes more volume, the breadth of supported chains becomes a switching cost for integrated customers.

**Market structure:** Existing crypto on-ramp incumbents (MoonPay, Transak, Ramp Network) are built around fiat-to-crypto conversion flows with associated licensing, compliance infrastructure, and pricing models. [Inferred]: These incumbents have business models optimized for fiat conversion margins, and pivoting to on-chain deposit orchestration would require building a different technical stack while potentially cannibalizing their existing fiat on-ramp revenue. However, MoonPay specifically acquired Streambird (the founders' prior company) and thus has wallet infrastructure that could be extended toward this use case.

**Commoditization risk:** The core concept of abstracting multi-chain deposits into a single API is replicable. MoonPay, Transak, and other crypto infrastructure providers have the engineering resources and existing customer relationships to build competing products. Smart contract wallet providers (e.g., Privy, acquired by Stripe in 2025) could extend into deposit orchestration. The 10-line integration promise lowers switching costs for customers moving between providers.

## Market & Traction

**Traction signals:**
- YC Launch page received 134 upvotes (YC Launch page, ~Feb 17, 2026)
- Named early adopters: Alpha Arcade (prediction market on Algorand), Lofty.ai (YC S19) (YC Launch page, Feb 2026)
- Ecosystem partners: Algorand, MegaETH, Thru (YC Launch page, Feb 2026)
- An unnamed prediction market described as "top 3 in weekly transactions behind Kalshi and Polymarket" reached out to use their deposit flow (YC Launch page, Feb 2026)
- Y Combinator posted about Unifold on X/Twitter (x.com/ycombinator, Feb 2026)
- Twitter/X: @unifold_io (follower count not retrievable due to JavaScript rendering)
- LinkedIn: listed as "unifoldio" (YC page); no specific follower count found
- Contact: hello@unifold.io
- No Discord or Slack community data found
- No app store listings found
- No public revenue figures found
- Product is in private beta with waitlist enrollment (unifold.io)

**Competitive landscape:**

1. **MoonPay** (~$757M raised, ~$3.4B–$5B valuation; CoinLaw, Yahoo Finance, via search snippets): Primarily a fiat-to-crypto on-ramp serving 160+ countries and supporting 170+ cryptocurrencies. Card transaction fees up to 4.5%. Differentiator vs. Unifold: MoonPay focuses on fiat conversion; Unifold focuses on on-chain deposit orchestration. MoonPay acquired Streambird (the Unifold founders' prior company).

2. **Transak** (~$37M–$47M raised, $16M Series B in Aug 2025 led by Tether and IDG Capital; CoinDesk, Aug 2025): Embedded fiat-to-crypto infrastructure for decentralized apps, supporting 136+ cryptocurrencies across 125+ countries with a flat 1% fee. Processed $2B+ in transactions with ~30% from stablecoin flows (CoinDesk, via search snippet). Differentiator vs. Unifold: Transak focuses on fiat on-ramp with customizable SDKs; Unifold targets on-chain-to-on-chain deposits.

3. **Ramp Network** (~$135M raised, $70M Series B in 2022; CoinDesk, Nov 2022 via search snippet): Non-custodial fiat-to-crypto on-ramp across 150+ countries with 100+ digital assets. Differentiator vs. Unifold: Ramp focuses on non-custodial fiat conversion; Unifold handles cross-chain deposit routing for users who already hold crypto.

4. **Onramper** (~$6M–$6.76M Seed in Jan 2022 led by EQT Ventures; FFNews, via search snippet): Aggregator of 30+ on-ramp providers across 175+ payment methods with intelligent routing. Differentiator vs. Unifold: Onramper aggregates fiat on-ramp providers; Unifold provides direct on-chain deposit infrastructure.

**Why now:** [Inferred]: Several catalysts have converged: (1) The growth of prediction markets (Polymarket, Kalshi) and on-chain consumer apps has created a new category of applications that need seamless on-chain deposits at scale. (2) Stablecoin transaction volumes have grown substantially — USDT processed up to $1.01 trillion/month in June 2025 (Everstake, via search snippet) — indicating more value flowing on-chain. (3) Multi-chain fragmentation has increased as more L1s and L2s launch, making cross-chain deposit orchestration more complex and valuable. (4) Y Combinator announced it would let founders receive funds in stablecoins (Fortune, Feb 2026), signaling broader institutional acceptance of on-chain finance.

## Founders & Team

**Timothy Chung** — Co-founder
- Education: Computer Science at Cambridge and Columbia (YC Launch page)
- Previous: Co-founded Streambird, a wallet-as-a-service platform acquired by MoonPay (became MoonPay Wallets) (TechFlow; YC Launch page). Previously worked at Polymarket and Instabase (TechFlow). The team's prior wallet infrastructure helped onboard 30M+ users to platforms including Phantom and Polymarket (YC Launch page).
- Twitter/X: @timothyhchung (count not retrievable)
- LinkedIn: linkedin.com/in/timchunght — listed as "Stealth Startup" (LinkedIn via search snippet)
- GitHub: github.com/timchunght — 231 repositories (GitHub via search snippet)

**Quang Huynh** — Co-founder
- 6+ years of experience building consumer-facing crypto and fintech products (YC Launch page)
- Previous: Co-founded Streambird with Timothy Chung (YC Launch page context). 4th engineer at Instabase. Previously worked at Polymarket (YC Launch page context). Crafted authentication flows, consumer mobile apps, and UI/UX experiences that onboarded 30M+ users (YC Launch page).
- Twitter/X: No public account found
- LinkedIn: No specific profile identified via search
- GitHub: github.com/quang-huynh — 32 repositories (GitHub via search snippet)

**Hau Chu** — Co-founder / Chief Engineer
- Education: Dual MS/MA from Cornell Tech (ZoomInfo, LinkedIn via search snippet)
- Previous: Senior Blockchain Engineer at MoonPay; previously at Solana Labs, Virtual Labs, Legitifed, Bave Blockchain Technology, National Taiwan University, Academia Sinica, Taiwan Stock Exchange Corporation (ZoomInfo, LinkedIn via search snippets). Building blockchain infrastructure since 2023 (YC Launch page).
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/hauchu1998 — "Senior Full Stack Engineer | Blockchain" (LinkedIn via search snippet)
- GitHub: No public repos found via search

**Co-founder relationship:** Timothy Chung and Quang Huynh co-founded Streambird together and both previously worked at Polymarket and Instabase, indicating a multi-year working relationship (YC Launch page; TechFlow). Hau Chu worked at MoonPay (which acquired Streambird), providing a connection point, though the exact timing of when the three began working together is not publicly documented.

**Founder-market fit:** The team has direct, demonstrated experience building the exact type of infrastructure Unifold offers. They built wallet-as-a-service (Streambird) that was acquired by MoonPay, worked at MoonPay post-acquisition, and helped onboard 30M+ users across major crypto platforms including Phantom and Polymarket. Their experience spans wallet infrastructure, crypto payments, authentication flows, and blockchain engineering across multiple chains (Solana, Ethereum). Hau Chu brings deep blockchain protocol experience from Solana Labs and Cornell Tech.

## Key Risks

**MoonPay competitive overlap:** The founders' prior company (Streambird) was acquired by MoonPay. MoonPay ($757M raised, ~$3.4B–$5B valuation) now owns the wallet infrastructure the founders originally built and has resources to extend into on-chain deposit orchestration. MoonPay's existing relationships with exchanges and applications could accelerate a competing offering. There may also be non-compete or IP considerations from the acquisition, though no public data on such terms was found.

**Name collision with unrelated entities:** "Unifold" is shared with Unifold Holdings Pty (Australian acoustic wall manufacturer, LinkedIn presence) and Uni-Fold (protein folding research project). This creates brand disambiguation challenges in search and could complicate trademark protection in certain jurisdictions.

**Dependency on prediction market vertical:** Early traction is concentrated in prediction markets (Alpha Arcade, the unnamed "top 3" prediction market). If the prediction market sector faces regulatory headwinds — Polymarket's CEO was subject to an FBI visit in November 2024 (Fortune, Nov 2024 via search snippet) — Unifold's initial customer base could contract.

**Fiat on-ramp incumbents extending into on-chain deposits:** MoonPay, Transak, and Ramp Network already have developer relationships, compliance infrastructure, and brand recognition. Adding on-chain deposit orchestration to their existing fiat on-ramp products would be a natural product extension. Stripe's acquisition of Privy (wallet infrastructure) in 2025 (Blockhead, Jun 2025 via search snippet) signals major payment incumbents entering adjacent crypto infrastructure.

**Private beta / pre-revenue stage:** The product is in private beta with a free tier and no publicly listed paid pricing. Revenue generation model is unvalidated in market.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global DeFi market: $26.94B in 2025, projected $1,417.65B by 2033 at 68.2% CAGR (Grand View Research, via search snippet). Stablecoin transaction volume: ~$24T in 2024 (Everstake, via search snippet). |
| SAM | No public data found for on-chain deposit infrastructure specifically. |
| Traction | 134 upvotes on YC Launch page (~Feb 17, 2026); early adopters Alpha Arcade and Lofty.ai (YC S19); ecosystem partners Algorand, MegaETH, Thru (YC Launch page, Feb 2026). Product in private beta. |
| Revenue Signal | Free tier at $0; no paid pricing tiers publicly listed (unifold.io). No public revenue data found. |
| Founders | Timothy Chung: CS at Cambridge & Columbia, co-founded Streambird (acquired by MoonPay), ex-Polymarket, ex-Instabase. Quang Huynh: 6+ yrs crypto/fintech, co-founded Streambird, 4th engineer at Instabase, ex-Polymarket. Hau Chu: Dual MS/MA Cornell Tech, ex-MoonPay Sr. Blockchain Engineer, ex-Solana Labs. |
| Competitors | MoonPay (~$757M raised, ~$3.4B–$5B valuation, revenue unknown, fiat-to-crypto focus vs. Unifold's on-chain deposit focus); Transak (~$37–47M raised, revenue unknown, embedded fiat on-ramp vs. on-chain orchestration); Ramp Network (~$135M raised, revenue unknown, non-custodial fiat on-ramp vs. cross-chain deposit routing); Onramper (~$6.76M raised, revenue unknown, aggregator model vs. direct infrastructure) |
| Moat Signals | Prior team built wallet infra acquired by MoonPay; 30M+ users onboarded via prior products; multi-chain integration complexity as accumulating switching cost |
| Risk Factors | MoonPay competitive overlap (owns founders' prior IP), prediction market vertical concentration, fiat on-ramp incumbents extending into on-chain deposits |
| Founder Reach | Timothy Chung: Twitter @timothyhchung (count not retrievable), LinkedIn linkedin.com/in/timchunght, GitHub 231 repos. Quang Huynh: GitHub 32 repos, LinkedIn/Twitter not found. Hau Chu: LinkedIn linkedin.com/in/hauchu1998, GitHub/Twitter not found. |
| Distribution Signals | YC Launch page 134 upvotes (Feb 2026); YC Twitter promotion (x.com/ycombinator); ecosystem partnerships with Algorand, MegaETH, Thru |
| Emails | hello@unifold.io |
