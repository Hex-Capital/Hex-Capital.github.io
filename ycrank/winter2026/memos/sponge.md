# Sponge

> Financial infrastructure for the agent economy

| Field | Value |
|-------|-------|
| Website | https://paysponge.com/ |
| YC Page | https://www.ycombinator.com/companies/sponge |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | No public data found |
| Tags | Artificial Intelligence, Fintech, SaaS, Crypto / Web3, Payments |
| YC Partner | Brad Flora |
| Emails | team@paysponge.com |

## The Idea

**Problem:** AI agents can execute complex multi-step workflows autonomously, but their autonomy breaks down when payments are involved — transactions still require manual human authorization and payment detail entry (YC launch page). Agents currently cannot sign up for services, pay for API access, or transact with other agents without a human entering credit card details or provisioning API keys. On the business side, companies have no standardized way to onboard AI agents as customers or accept payments from them without human interaction.

**Approach:** Sponge provides two core products. **Sponge Wallet** allows agents to hold fiat currency and cryptocurrency and transact autonomously with other agents and businesses via bank accounts, cards, and crypto (paysponge.com). Users fund the wallet once, and agents independently use those funds as needed. **Sponge Gateway** enables businesses to sell directly to agents by uploading their API specifications; agents can then onboard and pay for usage autonomously without requiring human credit card entry (YC launch page). A third component, **Sponge Catalog**, is a marketplace of pay-per-use API services available to agent wallets (catalog.paysponge.com). The platform provides a TypeScript SDK and MCP (Model Context Protocol) integration for Claude, with multi-chain support across Ethereum, Base, Solana, and Tempo (paysponge.com/docs). Security controls include API keys scoped per agent, spending limits, domain whitelisting, and audit logging (paysponge.com/docs).

**Differentiation:** Compared to **Skyfire** ($9.5M raised), which focuses on an enterprise payment network for AI agents using its KYAPay protocol (TechCrunch, Aug 2024), Sponge emphasizes a two-sided marketplace approach — both agent wallets and a business-facing gateway — and offers a no-code integration path for businesses to start selling to agents via API spec upload. Compared to **Natural** ($9.8M seed, Oct 2025; BusinessWire), which is building embedded B2B payment rails for the agent economy, Sponge's crypto-native architecture (multi-chain support, stablecoin-based transactions) and MCP integration for Claude represent a different technical approach. **Payman AI** ($13.8M total; Tracxn) focuses on letting AI agents pay humans through fiat rails like ACH and wires with compliance controls for regulated institutions, while Sponge's scope extends to agent-to-agent transactions and crypto-native payments. **Nevermined** ($7.02M raised; PYMNTS, Jan 2025) offers decentralized AI-to-AI agent commerce with usage-based billing; Sponge differentiates by supporting both fiat and crypto rails and by providing the business-side Gateway product.

**Business Model:** Sponge Catalog describes its API services as "pay-per-use" (catalog.paysponge.com). No public pricing page with specific rates was found. [Inferred]: Most likely monetization path is transaction fees on payments processed through the Wallet and Gateway products, and/or a take rate on the Catalog marketplace, based on the payments infrastructure model and the founders' Stripe background.

**TAM/SAM:** The AI agents market is projected to grow from $7.84 billion in 2025 to $52.62 billion by 2030, at a CAGR of 46.3% (MarketsandMarkets, 2025 via search snippet). The broader agentic AI market is projected at $7.06 billion in 2025 to $93.20 billion by 2032, at a CAGR of 44.6% (MarketsandMarkets, 2025 via search snippet). The TAM for agentic commerce — consumer-to-business transactions initiated by AI agents — is estimated at approximately $136 billion by 2025 (Edgar, Dunn & Company via search snippet). No public SAM data specific to the agent payments infrastructure sub-segment was found.

**GTM / Distribution:** Sponge's YC launch page describes a self-serve model: businesses upload API specs to gateway.paysponge.com and agents add the wallet skill to begin transacting (YC launch page). Live implementations include AgentMail (YC S25), Steel (browser automation), and an Amazon beta pilot (web3researchglobal.com). The Sponge Catalog functions as a discovery layer for services. [Inferred]: The initial distribution path is developer-led adoption through the TypeScript SDK and Claude MCP integration, combined with listing services on the Catalog to build a two-sided marketplace flywheel.

## Defensibility

Sponge's potential defensibility lies in a two-sided network effect: more services listed on the Gateway and Catalog make the Wallet more useful for agents, and more agents with funded wallets make the Gateway more attractive for businesses. The Amazon beta pilot (web3researchglobal.com) and integrations with AgentMail and Steel represent early supply-side traction. The multi-chain architecture (Ethereum, Base, Solana, Tempo) and MCP protocol integration create some switching costs for developers who build against the SDK.

No defensibility signals are confirmed at scale from public sources. [Inferred]: Defensibility could develop via marketplace network effects and data advantages from transaction flow, but is unproven at this stage.

**Market structure:** Stripe has launched x402 integration for USDC agent payments on Base (The Block, Feb 2026), and Mastercard, Visa, PayPal, and Coinbase all announced agent payment toolkits in April-May 2025. However, these incumbent offerings are protocol-level or payment-rail additions, not purpose-built two-sided agent marketplaces. [Inferred]: Incumbents like Stripe are building enabling primitives (x402 payments processing), which may actually benefit Sponge as infrastructure Sponge can integrate with, rather than directly competing with Sponge's Wallet + Gateway + Catalog marketplace model. The structural barrier is that incumbents are optimizing for their existing human-merchant payment flows and may not prioritize building the full-stack agent-specific product suite (wallet management, spending controls, agent onboarding, service catalog).

**Commoditization risk:** The agent payments infrastructure space already has multiple funded competitors (Skyfire, Natural, Payman, Nevermined). Stripe's x402 support and Coinbase's agent wallet tooling lower the barrier for new entrants building on these primitives. The TypeScript SDK and MCP integration are replicable. The primary differentiation risk is that the Wallet + Gateway + Catalog combination could be unbundled by competitors focusing on individual components.

## Market & Traction

**Traction signals:**
- YC Launch page upvotes: 19 (YC launches page)
- Live implementations: AgentMail (YC S25), Steel, Amazon beta pilot (web3researchglobal.com)
- "Multiple teams have already begun using Sponge for agent onboarding and payment acceptance" (web3researchglobal.com)
- Twitter/X: @sponge_wallet — handle confirmed (x.com); follower count not retrievable due to JavaScript rendering
- Mentioned/promoted by @ycombinator, @buildonbase, @privy_io on X
- LinkedIn: https://www.linkedin.com/company/paysponge (no follower count retrievable)
- No Product Hunt launch found
- No app store or Chrome extension presence found
- No active job postings (YC page: 0 open positions)
- No public revenue or user count data found

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Sponge |
|-----------|---------|-------------------------------|
| **Skyfire** | $9.5M total (Seed + strategic; Coinbase Ventures, a16z CSX, Ripple, Circle) (The Block, 2024) | Enterprise-ready payment network with KYAPay protocol; exited beta Mar 2025; partnerships with Apify, BuildShip, Forter. Focused on enterprise payment network rather than two-sided marketplace. Revenue unknown. |
| **Natural** | $9.8M seed (Oct 2025; Abstract, Human Capital co-led) (BusinessWire, Oct 2025) | Embedded B2B use cases starting with logistics, property management, procurement, healthcare; fiat-first with bank and payout partners. Revenue unknown. |
| **Payman AI** | $13.8M total over 3 rounds (Visa, Coinbase Ventures, Boost VC) (Tracxn via search snippet) | Focuses on AI agents paying humans via fiat rails (ACH, wires); compliance-focused for regulated institutions; bridges agents into human economy. Revenue unknown. |
| **Nevermined** | $7.02M total (Generative Ventures, Polymorphic Capital, NEAR) (PYMNTS, Jan 2025) | Decentralized AI-to-AI agent commerce; usage-based billing and instant settlement; crypto-native with on-chain settlement. Revenue unknown. |

**Why now:** In April-May 2025, Mastercard unveiled Agent Pay, Visa introduced Intelligent Commerce, and PayPal, Stripe, and Coinbase each launched toolkits for AI agent transactions (search snippet from fintechwrapup.com). Stripe launched x402 USDC agent payments support on Base in February 2026 (The Block, Feb 2026). [Inferred]: The convergence of major payment incumbents building agent payment primitives validates the market category and creates the infrastructure layer (stablecoin rails, x402 protocol) that Sponge can build upon. The rapid growth of agentic AI capabilities — from single-task assistants to long-running autonomous agents executing multi-step workflows — has created a genuine need for autonomous financial infrastructure that did not exist 18-24 months prior.

## Founders & Team

**Jae Choi** — Co-founder
- B.S. Computer Science, University of Waterloo (2019) (web3researchglobal.com)
- At Stripe: worked on developing core payment systems and contributed to launching the company's first cryptocurrency product (web3researchglobal.com)
- Prior experience: Flexport, Sumo Logic, IBM, BlackBerry, Irdeto, Imagine Communications (Weekday.works via search snippet)
- Twitter/X: No public personal account found
- LinkedIn: linkedin.com/in/jaekyongchoi/ — 226 connections (search snippet)
- GitHub: No public repos found

**Rishab Luthra** — Co-founder
- B.S. Computer Science, University of Toronto (2022) (web3researchglobal.com)
- Interned at Facebook (2021) and Google (2020) (web3researchglobal.com)
- At Stripe: software engineer in the cryptocurrency division (web3researchglobal.com)
- Twitter/X: No public personal account found
- LinkedIn: linkedin.com/in/rishabluthra/ — 500+ connections (search snippet)
- GitHub: github.com/rishabluthra — profile found; no public repo star counts available

**Eric Zhang** — Co-founder
- Led development of financial accounts and payment systems using stablecoins within Stripe's crypto team (web3researchglobal.com)
- LinkedIn: linkedin.com/in/eric-zhang-73699099/ — headline: "Co-founder (YC W26) / ex-Stripe Crypto" (search snippet)
- Twitter/X: No public personal account found
- GitHub: No public repos found

**Co-founder relationship:** All three co-founders previously worked at Stripe in the crypto division, indicating a shared employer and likely direct working relationship at Stripe Crypto prior to founding Sponge.

**Founder-market fit:** All three founders built Stripe's stablecoin financial accounts, stablecoin payments, and core money movement systems (YC launch page). This represents direct domain expertise in the exact infrastructure they are now building for agents — payments processing, wallet management, multi-currency support, and compliance. Their collective experience at Stripe Crypto, combined with Rishab Luthra's internships at Facebook and Google and Jae Choi's background across multiple enterprise software companies, provides the team with both deep payments infrastructure knowledge and broader engineering experience.

## Key Risks

**Incumbent platform risk:** Stripe launched x402 agent payments support in February 2026 (The Block), and Coinbase has introduced agent wallet tools. If Stripe, which the founders previously worked at, decides to build a full-stack agent payments product (wallet + gateway + catalog), it could leverage its existing merchant network of millions of businesses to capture this market. The founders' former employer is both a potential partner (via x402) and a potential competitor.

**Competitive density:** At least four funded competitors (Skyfire $9.5M, Natural $9.8M, Payman $13.8M, Nevermined $7.02M) are targeting the same agent payments infrastructure category, all with more capital raised than YC's standard pre-seed investment. Winning requires establishing the two-sided marketplace network effect before better-funded competitors or incumbents do.

**Agent economy timing risk:** Autonomous agent spending depends on enterprises trusting AI agents to transact without human approval. Security incidents, fraud, or regulatory action around autonomous agent transactions could slow adoption of the entire category. No established regulatory framework exists for agent-initiated financial transactions.

**Brand disambiguation:** "Sponge" is a common English word shared by multiple unrelated entities, including Sponge tokens in the crypto space (e.g., $SPONGE memecoin) and the SpongePowered Minecraft project on GitHub. This creates potential SEO and brand confusion challenges.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI agents market: $7.84B (2025) → $52.62B (2030), CAGR 46.3% (MarketsandMarkets, 2025 via search snippet); Agentic commerce TAM: ~$136B (Edgar, Dunn & Company via search snippet) |
| SAM | No public data found for agent payments infrastructure sub-segment |
| Traction | 19 upvotes (YC launch page); live implementations with AgentMail (YC S25), Steel, Amazon beta pilot (web3researchglobal.com); "multiple teams" using the platform (web3researchglobal.com) |
| Revenue Signal | No public data found. Catalog described as "pay-per-use" (catalog.paysponge.com) |
| Founders | Jae Choi (Co-founder): ex-Stripe Crypto, CS UWaterloo. Rishab Luthra (Co-founder): ex-Stripe Crypto, ex-Facebook, ex-Google, CS UofT. Eric Zhang (Co-founder): ex-Stripe Crypto, led stablecoin financial accounts dev. |
| Competitors | Skyfire ($9.5M raised, revenue unknown, enterprise KYAPay payment network); Natural ($9.8M raised, revenue unknown, embedded B2B fiat-first rails); Payman AI ($13.8M raised, revenue unknown, fiat agent-to-human payments for regulated institutions); Nevermined ($7.02M raised, revenue unknown, decentralized AI-to-AI commerce) |
| Moat Signals | Two-sided marketplace potential (Wallet + Gateway + Catalog); multi-chain architecture; MCP/Claude integration; early supply-side partnerships (AgentMail, Steel, Amazon beta) |
| Risk Factors | Stripe/incumbent platform risk, competitive density with better-funded rivals, agent economy adoption timing uncertainty |
| Founder Reach | Jae Choi: LinkedIn 226 connections, no public Twitter/GitHub. Rishab Luthra: LinkedIn 500+, GitHub github.com/rishabluthra. Eric Zhang: LinkedIn (ex-Stripe Crypto headline), no public Twitter/GitHub. Company: @sponge_wallet on X (count not retrievable) |
| Distribution Signals | YC Launch (19 upvotes); @ycombinator, @buildonbase, @privy_io mentions on X; no Product Hunt launch found |
| Emails | team@paysponge.com |
