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

## The Idea

**Problem:** Long-running AI agents are beginning to handle complex tasks autonomously, but their autonomy ends the moment a payment is involved — transactions still require a human to manually enter payment details and authorize the charge (YC Launch page). On the business side, companies that want to sell digital services (email, browser access, premium data feeds) to AI agents have no streamlined way to onboard non-human buyers or accept payments from them without code changes. Today, agent-enabled payments require custom integrations or manual human intermediation.

**Approach:** Sponge offers two core products. **Sponge Wallet** lets agents hold funds and transact autonomously with other agents and businesses using bank accounts, cards, and crypto; a user funds the wallet once and agents spend from it without further human approval. **Sponge Gateway** lets businesses sell directly to agents — a business uploads its API specification, and agents can onboard and pay for usage autonomously without a human providing a credit card or API key (YC Launch page, paysponge.com). The platform provides a TypeScript SDK and MCP (Model Context Protocol) support for integration with agent frameworks including OpenClaw, Claude Code, and OpenAI Codex. Spending controls include daily budgets, per-transaction limits, and domain restrictions. Multi-chain support spans Base, Solana, and Tempo (paysponge.com).

**Differentiation:** Unlike Coinbase AgentKit, which is crypto-only (onchain wallets, USDC, x402 protocol), Sponge supports both fiat and crypto rails — bank accounts, cards, and crypto — providing a broader payment surface for agents. Unlike Skyfire, which also focuses on crypto-native agent payments, Sponge adds the Gateway product that lets businesses sell to agents with no code changes by uploading an API spec. Compared to Natural, which focuses on embedded B2B use cases (logistics, property management, procurement), Sponge targets the developer and agent-framework ecosystem directly with SDK and MCP integration. Catena Labs ($18M raised) is pursuing a regulated financial institution model; Sponge appears more focused on developer-first infrastructure and rapid integration. Stripe's own Agentic Commerce Suite represents an adjacent offering from the founders' former employer, but it targets large merchants and consumer-facing commerce rather than the developer-to-agent infrastructure layer.

**Business Model:** No pricing page or public pricing tiers were found on paysponge.com at time of research. [Inferred]: Most likely monetization path is transaction-based fees (percentage or flat per-transaction) on agent payments processed through Sponge Wallet and/or Sponge Gateway, consistent with payments infrastructure business models.

**TAM/SAM:** The global agentic AI market was valued at USD 7.55 billion in 2025 and is projected to reach approximately USD 199.05 billion by 2034, at a CAGR of 43.84% (Precedence Research, 2025). The AI agents market was estimated at USD 7.63 billion in 2025 and projected to reach USD 182.97 billion by 2033, at a CAGR of 49.6% (Grand View Research, 2025 via search snippet). The TAM for agentic commerce (consumer-to-business transactions initiated by AI agents) was estimated at approximately $136 billion by 2025 (Edgar Dunn, 2025 via search snippet). No SAM estimate specific to agent payment infrastructure was found.

**GTM / Distribution:** Sponge's website highlights integration with agent frameworks (OpenClaw, Claude Code, OpenAI Codex) via TypeScript SDK and MCP, suggesting a developer-first distribution strategy (paysponge.com). The YC Launch page directs users to paysponge.com to "give your agent an account" or "sell to agents," indicating a self-serve onboarding model (YC Launch page). [Inferred]: Most likely distribution path is bottom-up developer adoption through agent framework integrations and SDK, with the Gateway product serving as a wedge into business-side adoption.

## Defensibility

**Network effects:** [Inferred]: Potential two-sided network effect could develop if Sponge accumulates a critical mass of both agents (Wallet users) and businesses (Gateway users), making the platform more valuable as more participants join. This is unproven at this stage.

**Switching costs:** [Inferred]: Once businesses integrate their API specs into Sponge Gateway and agents are provisioned with Sponge Wallets with spending rules, migration to an alternative would require re-integration and re-provisioning, creating moderate switching costs.

**Data advantage:** [Inferred]: Sponge could accumulate agent transaction data and spending patterns over time, creating a data moat useful for fraud detection, credit scoring, and pricing optimization. Unproven at this stage.

**Technical complexity:** The team's experience building Stripe's stablecoin financial accounts, stablecoin payments, and core money movement systems (YC page) represents domain expertise in payments infrastructure. The combination of fiat and crypto rails with agent-specific features (spending controls, autonomous onboarding) adds integration complexity.

No patents or regulatory barriers identified from public sources.

**Market structure:** Stripe, the founders' former employer, launched its own Agentic Commerce Suite and x402 integration (Stripe blog, Feb 2026), indicating willingness to compete directly. However, Stripe's Agentic Commerce Suite is oriented toward large merchants and consumer-facing checkout (URBN, Etsy, Ashley Furniture as launch partners per Stripe newsroom), not the developer-to-agent infrastructure layer. [Inferred]: Stripe's focus on enterprise merchant commerce may create a structural gap at the developer/SMB layer that Sponge can occupy, though Stripe could expand downmarket.

**Commoditization risk:** Multiple well-funded startups (Catena Labs at $18M, Natural at $9.8M, Skyfire at $9.5M, Payman AI at $13.8M) and large incumbents (Coinbase AgentKit, Stripe Agentic Commerce, Visa Intelligent Commerce, Mastercard Agent Pay) are building in the agent payments space. The core concept of giving agents wallets and enabling agent-to-business payments is being pursued by several players simultaneously, creating meaningful commoditization risk.

## Market & Traction

**Traction signals:**
- YC Launch page: 17 upvotes (YC Launches, ~Feb 18, 2026)
- YC partner assigned: Brad Flora (YC page)
- Twitter/X: @sponge_wallet (X.com); follower count not retrievable due to JavaScript rendering
- YC promoted on Twitter: Y Combinator posted about Sponge via @ycombinator (x.com/ycombinator/status/2024197228173185041)
- Live product: wallet.paysponge.com/dashboard accessible (search results)
- No Product Hunt listing found
- No LinkedIn company page found matching this company
- No Discord or Slack community found
- No app store or Chrome Web Store listings found
- No public revenue, user counts, or customer announcements found
- Job postings: 0 active listings (YC page)

**Competitive landscape:**

1. **Catena Labs** ($18M raised, led by a16z crypto; revenue unknown): Founded by Circle co-founder Sean Neville, building a regulated AI-native financial institution. Uses stablecoin-based payment rails. Open-sourced Agent Commerce Kit for agent identity, payments, and receipts. Key differentiator vs. Sponge: regulated financial institution approach with compliance focus, vs. Sponge's developer-first infrastructure play. (PYMNTS.com, May 2025; BusinessWire, May 2025)

2. **Skyfire** ($9.5M total raised from Neuberger Berman, Coinbase Ventures, a16z CSX, and others; revenue unknown): Founded by ex-Ripple executives (Amir Sarhangi, Craig DeWitt). Assigns agents digital wallets with spending limits. CEO previously sold startup Jibe to Google. Key differentiator vs. Sponge: crypto-native only (vs. Sponge's fiat + crypto), with KYA (Know Your Agent) identity layer. (SiliconANGLE, Aug 2024; The Block, Oct 2024)

3. **Natural** ($9.8M seed, led by Abstract and Human Capital; revenue unknown): Building agentic payments for B2B use cases. Five employees. Early design partners in logistics, property management, procurement, healthcare, and construction. Key differentiator vs. Sponge: embedded B2B use-case focus and industry-specific partnerships, vs. Sponge's horizontal developer/agent-framework approach. (BusinessWire, Oct 2025)

4. **Payman AI** ($13.8M total across 3 rounds, investors include Visa, Boost VC; revenue unknown): Banking transaction automation platform enabling payments, transfers, and account analysis via voice or text. Key differentiator vs. Sponge: broader banking automation scope, whereas Sponge is specifically focused on autonomous agent wallets and business-to-agent commerce. (Tracxn, Crunchbase via search snippet)

5. **Coinbase AgentKit** (Coinbase corporate product; no standalone funding): Open-source toolkit for giving AI agents crypto wallets and onchain interactions. Over 50M transactions on x402 protocol. Non-custodial wallets in TEEs. Key differentiator vs. Sponge: crypto-only, deep onchain integration, and backed by Coinbase infrastructure, vs. Sponge's fiat + crypto hybrid. (Coinbase blog; GitHub)

**Why now:**

- Autonomous AI agents reached a capability threshold in 2024-2025 where they can handle complex, multi-step tasks end-to-end, creating demand for financial autonomy (YC Launch page context).
- Stripe launched stablecoin payment infrastructure and the x402 protocol was introduced in early 2026, creating new payment rails designed for machine-to-machine transactions (Stripe blog, Feb 2026; The Block).
- [Inferred]: The proliferation of agent frameworks (Claude Code, OpenAI Codex, open-source agent toolkits) in 2024-2025 created an ecosystem of developers building agents that now need financial primitives to operate autonomously.
- Visa (Intelligent Commerce), Mastercard (Agent Pay), and Stripe (Agentic Commerce Suite) all released agent-payment products in late 2025 / early 2026, validating the market category.

## Founders & Team

**Jae Choi** — Co-founder
- Education: University of Waterloo (Weekday.works profile via search snippet)
- Previously: Stripe Crypto (YC page). Prior roles at Flexport, Sumo Logic, IBM, BlackBerry, Irdeto, Imagine Communications (Weekday.works profile via search snippet)
- Twitter/X: No confirmed public account found (search returned ambiguous results for common name)
- LinkedIn: linkedin.com/in/jaekyongchoi (LinkedIn via search snippet)
- GitHub: github.com/jaekyongchoi (GitHub via search snippet); repo details not retrievable

**Rishab Luthra** — Co-founder
- Education: Computer Science, University of Toronto (LinkedIn via search snippet)
- Previously: Stripe — described as ex-Stripe Crypto (YC page). Search snippets reference "Head of Crypto" role at Stripe but this could not be fully verified against the separate appointment of John Egan as Stripe's Head of Crypto who later joined Polygon Labs as CPO (FFNews, Sep 2025)
- Twitter/X: No confirmed public account found
- LinkedIn: linkedin.com/in/rishabluthra (LinkedIn via search snippet)
- GitHub: github.com/rishabluthra — includes an Image-Classifier project (TensorFlow + Flask + Vue) (GitHub via search snippet); star counts not retrievable

**Eric Zhang** — Co-founder
- Education: University of California San Diego (LinkedIn via search snippet — not fully verified due to common name)
- Previously: Stripe Crypto (YC page; LinkedIn headline: "Co-founder (YC W26) / ex-Stripe Crypto")
- Twitter/X: No confirmed public account found (common name produced ambiguous results; @ekzhang1 is a different Eric Zhang)
- LinkedIn: linkedin.com/in/eric-zhang-73699099 (LinkedIn via search snippet)
- GitHub: No confirmed public repos found attributable to this Eric Zhang

**Co-founder relationship:** All three founders worked at Stripe Crypto, indicating shared prior employment and likely professional acquaintance before founding Sponge. Jae Choi attended University of Waterloo, Rishab Luthra attended University of Toronto, and Eric Zhang attended UCSD — no shared university overlap identified.

**Founder-market fit:** The founding team is described as "ex-Stripe tech leads that built Stripe's stablecoin financial accounts, stablecoin payments, and core money movement systems" (YC Launch page; Y Combinator Twitter post). This directly maps to Sponge's product: building financial accounts and payment systems, but for AI agents instead of humans. Their combined experience spans the intersection of crypto payments, fiat money movement, and financial infrastructure at one of the world's leading payments companies. No advisors, board members, or notable investors beyond YC were identified from public sources.

## Key Risks

**Direct competition from former employer (Stripe):** Stripe launched its Agentic Commerce Suite and x402 integration in February 2026 (Stripe blog), directly addressing agent-to-business payments. Stripe has massive distribution, existing merchant relationships, and the financial infrastructure Sponge's founders helped build. Mitigation: Sponge targets a different layer (developer/agent-framework SDK vs. enterprise merchant checkout), but Stripe could expand.

**Crowded competitive landscape with better-funded rivals:** At least four funded startups (Catena Labs $18M, Payman AI $13.8M, Skyfire $9.5M, Natural $9.8M) and three major incumbents (Coinbase, Visa, Mastercard) have shipped or announced agent payment products. Sponge's YC-stage funding (~$500K standard deal) is significantly less than peers. Mitigation: Sponge's fiat + crypto hybrid approach and no-code Gateway product may differentiate from crypto-only competitors.

**Market timing dependency:** The agentic payments market depends on AI agents reaching sufficient autonomy and adoption to generate meaningful transaction volume. If agent adoption plateaus or enterprises resist giving agents financial autonomy due to trust/compliance concerns, the market may develop slower than projected. No public data exists on current agent payment transaction volumes across the industry.

**Brand disambiguation:** "Sponge" is a common English word. Search results surfaced unrelated entities including $SPONGE (a memecoin/token), SpongePowered (Minecraft server software), and multiple companies named "Sponge" on LinkedIn. This may create confusion for potential customers and SEO challenges.

**Regulatory uncertainty for autonomous agent transactions:** Giving AI agents the ability to hold and spend money autonomously raises regulatory questions around KYC/AML compliance, liability for unauthorized transactions, and money transmitter licensing. Catena Labs has explicitly positioned itself as pursuing a "regulated" approach (BusinessWire, May 2025), suggesting this is a recognized challenge. Sponge's regulatory strategy is not publicly disclosed.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $199.05B agentic AI market by 2034, 43.84% CAGR (Precedence Research, 2025); $136B agentic commerce TAM by 2025 (Edgar Dunn, 2025 via search snippet) |
| SAM | No public data found |
| Traction | 17 upvotes on YC Launch page (~Feb 18, 2026); live product at wallet.paysponge.com |
| Revenue Signal | No public data found |
| Founders | Jae Choi (Co-founder): UWaterloo, ex-Stripe Crypto, ex-Flexport. Rishab Luthra (Co-founder): UofT CS, ex-Stripe Crypto. Eric Zhang (Co-founder): UCSD, ex-Stripe Crypto |
| Competitors | Catena Labs ($18M raised, revenue unknown, regulated AI-native financial institution vs. Sponge's dev-first infra); Skyfire ($9.5M raised, revenue unknown, crypto-only + KYA identity vs. Sponge's fiat+crypto); Natural ($9.8M raised, revenue unknown, B2B vertical focus vs. Sponge's horizontal agent-framework approach); Payman AI ($13.8M raised, revenue unknown, broader banking automation vs. Sponge's agent wallet focus); Coinbase AgentKit (corporate, crypto-only, 50M+ x402 txns) |
| Moat Signals | All three founders built stablecoin payments at Stripe; fiat + crypto hybrid approach is uncommon among competitors |
| Risk Factors | Direct competition from Stripe (former employer), crowded market with better-funded rivals, regulatory uncertainty for autonomous agent transactions |
| Founder Reach | Jae Choi: Twitter not confirmed, LinkedIn linkedin.com/in/jaekyongchoi, GitHub github.com/jaekyongchoi. Rishab Luthra: Twitter not confirmed, LinkedIn linkedin.com/in/rishabluthra, GitHub github.com/rishabluthra. Eric Zhang: Twitter not confirmed, LinkedIn linkedin.com/in/eric-zhang-73699099, GitHub not confirmed |
| Distribution Signals | YC Launch 17 upvotes (~Feb 18, 2026); YC Twitter promotion via @ycombinator; TypeScript SDK + MCP integration with agent frameworks (paysponge.com) |
