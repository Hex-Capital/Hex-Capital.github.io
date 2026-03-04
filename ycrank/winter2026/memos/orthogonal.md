# Orthogonal

> Agentic Payments for APIs

| Field | Value |
|-------|-------|
| Website | https://orthogonal.com |
| YC Page | https://www.ycombinator.com/companies/orthogonal |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Crypto / Web3, Payments, API |
| YC Partner | Tyler Bosmeny |
| Emails | founders@orthogonal.com |

## The Idea

**Problem:** APIs were not designed for AI agent consumption. Developers building agentic applications face fragmented onboarding across each API provider—separate API key management, separate billing accounts, and separate authentication flows. As the number of APIs an agent needs to call grows, the operational overhead of managing keys, billing, and discovery across dozens of providers becomes a bottleneck. Today, developers manually integrate each API, set up billing, and manage credentials individually.

**Approach:** Orthogonal provides a unified access layer where developers and agents connect to hundreds of APIs through a single MCP server, SDK, or CLI. The platform handles authentication, billing, and discovery in one place. API providers list once on Orthogonal and become instantly discoverable by agents. The platform supports integration with Claude Code, Cursor, Codex, and OpenClaw (company website). As of research date, the platform lists 16+ partner API integrations including People Data Labs, Tomba, ScrapeGraph, Fiber AI, Brand.dev, Notte, and others (company website). The website references a skill-based setup model (`orthogonal.com/skill.md`) for agent configuration.

**Differentiation:** Unlike Stripe's x402 protocol, which requires on-chain USDC settlement and is tied to the Base blockchain (Stripe documentation; The Block), Orthogonal abstracts away the payment mechanism and focuses on the developer experience of API discovery and access. Unlike Nightmarket, which operates as a permissionless on-chain marketplace for API calls settled in USDC (Hacker News), Orthogonal positions itself as a curated, trust-oriented platform with vetted API partners—many of which are themselves YC companies (YC page). Compared to Nevermined's decentralized payment protocol for agent-to-agent transactions (PYMNTS, Jan 2025), Orthogonal targets the developer-to-API access use case rather than agent-to-agent commerce.

**Business Model:** The company describes a "pay as you go" model (YC page, company website). No public pricing page with specific tiers or per-call rates was found at the time of research. [Inferred]: The most likely monetization path is a margin on API calls routed through the platform (take rate on transactions) or a usage-based fee, given the pay-as-you-go positioning and the two-sided marketplace structure.

**TAM/SAM:** The global agentic AI market is valued at $7.55 billion in 2025 and projected to reach $199.05 billion by 2034 at a 43.84% CAGR (Precedence Research, 2025 via search snippet). McKinsey projects global agentic commerce will reach $3–5 trillion by 2030 (McKinsey via Nevermined blog). The global AI agent market is projected to reach $52.62 billion by 2030 at a 46.3% CAGR (CB Insights via search snippet). No public SAM estimate specific to API payment infrastructure for agents was found.

**GTM / Distribution:** The platform integrates with popular AI coding tools (Claude Code, Cursor, Codex) as an MCP server or SDK (company website). Multiple YC-backed API providers are listed as partners—Precip (YC W24), Riveter (YC F24), Andi (YC W22), Shofo (YC W26), Fiber AI (YC S23), Sixtyfour (YC X25) (YC page). [Inferred]: The distribution strategy leverages the YC network for initial supply-side onboarding and targets developers already using MCP-compatible AI coding assistants for demand-side adoption.

## Defensibility

The platform exhibits early-stage two-sided marketplace dynamics: as more API providers list on Orthogonal, the platform becomes more useful to developers and agents, and vice versa. 16+ API integrations are currently listed (company website). The curated, YC-network-embedded partner list may create a supply-side advantage relative to permissionless marketplaces.

No patents, regulatory barriers, or proprietary data advantages were found in public sources.

**Market structure:** Stripe has launched its own x402 protocol and Agentic Commerce Protocol (ACP) in partnership with Coinbase, directly addressing agent-to-API payments (Stripe documentation; The Block). Stripe's approach, however, is blockchain-native (USDC on Base) and requires on-chain settlement, which adds complexity for developers who prefer fiat-denominated, off-chain billing. [Inferred]: A structural barrier may exist in that Stripe's approach is optimized for on-chain settlement rather than a unified, provider-agnostic API access layer—but this barrier is weak given Stripe could extend ACP to cover off-chain billing.

**Commoditization risk:** The core product—API aggregation, unified billing, and key management—is technically replicable. Multiple startups (Nightmarket, Nevermined, Prava) and incumbents (Stripe) are building in adjacent or overlapping spaces. The MCP server integration pattern is open-source and standardized. Differentiation at this stage rests on the quality and breadth of the curated API catalog and developer experience, rather than on technology that is difficult to replicate.

## Market & Traction

**Traction signals:**
- LinkedIn company page: 1,235 followers (LinkedIn, as of research date)
- Twitter/X company account: @orthogonal_sh — follower count not retrievable via search
- GitHub organization (github.com/orthogonal-sh): 3 public repos — `orthogonal-typescript` (5 stars), `skills` (4 stars), `cli` (1 star) (GitHub)
- 16+ API partner integrations listed on website (company website)
- Partnership announcement with Nyne posted on X (Feb 20, 2026) (@orthogonal_sh on X)
- No public revenue, user count, waitlist, Product Hunt launch, or app store data found
- No job postings found (is_hiring: false per YC page)

**Competitive landscape:**

1. **Stripe (x402 / ACP)** — Publicly traded incumbent. Launched x402 protocol for USDC-based agent payments on Base blockchain, and the Agentic Commerce Protocol co-developed with OpenAI. ~50 million x402 transactions processed (Finextra via search snippet). Differentiator vs. Orthogonal: Stripe requires on-chain USDC settlement; Orthogonal offers an abstracted, provider-agnostic access layer without blockchain dependency.

2. **Nevermined** ($7M total funding, $4M raised Jan 2025; PYMNTS, Jan 2025) — Decentralized AI payment protocol enabling agent-to-agent transactions with usage-based billing and instant settlement. Revenue unknown. Differentiator vs. Orthogonal: Nevermined focuses on agent-to-agent commerce and decentralized settlement; Orthogonal focuses on developer-to-API access with a curated marketplace.

3. **Nightmarket** (funding unknown) — Permissionless API marketplace where agents pay per call in USDC settled on Base. Revenue unknown. Differentiator vs. Orthogonal: Nightmarket is permissionless (any provider can list); Orthogonal curates its provider list.

4. **Prava** (Seed round Dec 2025 from WTFund, amount undisclosed; Tracxn) — Payment infrastructure for AI agents with PCI-compliant card and wallet access. Revenue unknown. Differentiator vs. Orthogonal: Prava focuses on enabling agents to make purchases with existing payment methods (cards, wallets); Orthogonal focuses on API access and billing aggregation.

**Why now:** [Inferred]: Several catalysts in the past 12–24 months opened this opportunity. The MCP (Model Context Protocol) standard was released by Anthropic in late 2024, creating a standardized interface for AI agents to interact with external tools and APIs. AI coding assistants (Claude Code, Cursor, Codex) gained mainstream developer adoption through 2025, creating a large base of agent-powered workflows needing API access. Stripe and Coinbase's launch of the x402 protocol and Mastercard's Agent Pay (April 2025; Mastercard press release) validated the agentic payments category. The volume of AI agents in production reached a threshold where manual API key management became a pain point—23% of organizations are scaling agentic AI systems in 2025 (Integrate.io via search snippet).

## Founders & Team

**Christian Pickett** — Co-founder & CEO
- B.Sc., McGill University; M.Sc./M.A., Vrije Universiteit Amsterdam (ZoomInfo via search snippet)
- Previously: Software Engineer at Vercel (billing); Coinbase (payments); also worked at BlackBerry and IBM (ZoomInfo via search snippet; YC page)
- Twitter/X: No personal public account found; company account @orthogonal_sh
- LinkedIn: linkedin.com/in/christian-pickett-145788b4 — "Co-founder @ Orthogonal (YC W26)"
- GitHub: No personal public repos found; company org at github.com/orthogonal-sh

**Bera Sogut (Salih Bera Sogut)** — Co-founder
- B.Sc., McGill University (Competitive Programming Hall of Fame; Devpost)
- Previously: Google (reCAPTCHA, Maps APIs); Amazon Robotics (YC page; search results)
- 2x ACM ICPC World Finalist: 24th place at ICPC 2020 World Finals (Sep 2021); 65th place at ICPC 2021 World Finals Dhaka (Nov 2022), competing for McGill University team "Bees" (Competitive Programming Hall of Fame)
- Codeforces handle: "Bera" (Codeforces)
- Twitter/X: No personal public account found
- LinkedIn: Not found separately from company page
- GitHub: No personal public repos found; Devpost profile shows 4 hackathon projects (Devpost)

**Co-founder relationship:** Both founders attended McGill University. The YC page states they "met at McGill and have been close friends ever since" (YC page).

**Founder-market fit:** Christian Pickett brings direct experience in payments infrastructure (Coinbase) and developer billing systems (Vercel), both of which are core to Orthogonal's product. Bera Sogut brings experience building and scaling APIs at Google (reCAPTCHA, Maps) and systems engineering at Amazon Robotics. Their combined backgrounds span the two sides of the product: payment processing and API infrastructure. No advisors, board members, or notable angel investors were identified in public sources beyond YC Partner Tyler Bosmeny.

## Key Risks

**Stripe platform competition:** Stripe launched its x402 protocol and Agentic Commerce Protocol (ACP) in partnership with OpenAI and Coinbase, directly targeting the same use case of enabling agents to pay for API calls (Stripe blog; The Block). Stripe's distribution advantage (millions of existing merchants and developers) and brand trust in payments create a direct competitive threat. The x402 protocol has already processed approximately 50 million transactions (Finextra via search snippet). Mitigation: Orthogonal's approach abstracts away blockchain settlement and focuses on curated API discovery, which is a different product surface than Stripe's protocol-level offering.

**Two-sided marketplace cold start:** Orthogonal requires both API providers (supply) and agent developers (demand) to adopt simultaneously. With 16+ integrations currently listed (company website), the catalog is nascent. If developers find insufficient APIs on the platform, or if API providers see insufficient usage volume, the marketplace may fail to reach critical mass. Mitigation: Leveraging YC network for initial supply-side partnerships (multiple YC companies listed as partners).

**Brand disambiguation:** Multiple established companies share the "Orthogonal" name, including Orthogonal Inc. (medical device software, Chicago/SF, @Orthogonal_io on X, 2,933 LinkedIn followers), Orthogonal Trading (crypto), and Orthogonal Asset Management (LinkedIn search results). This creates SEO competition, potential customer confusion, and brand-building friction. The company appears to also use the domain orthogonal.sh alongside orthogonal.com (GitHub org page).

**Regulatory uncertainty around crypto-adjacent payments:** The company is tagged "Crypto / Web3" on YC and operates in a space where competitors use on-chain USDC settlement. If Orthogonal incorporates crypto payment rails, it may face evolving regulatory requirements around money transmission, stablecoin settlement, and KYC/AML compliance in the US and internationally.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Agentic AI market: $7.55B in 2025, projected $199.05B by 2034 at 43.84% CAGR (Precedence Research, 2025 via search snippet); agentic commerce: $3–5T by 2030 (McKinsey via Nevermined blog) |
| SAM | No public data found for the specific API payment aggregation segment |
| Traction | 16+ API partner integrations (company website); 1,235 LinkedIn followers (LinkedIn); 3 GitHub repos with 10 total stars (GitHub); no public user count, revenue, or waitlist data found |
| Revenue Signal | "Pay as you go" model described (YC page, company website); no specific pricing or revenue figures found |
| Founders | Christian Pickett (Co-founder & CEO): Coinbase payments, Vercel billing, McGill + VU Amsterdam. Bera Sogut (Co-founder): Google (reCAPTCHA, Maps APIs), Amazon Robotics, 2x ICPC World Finalist, McGill. |
| Competitors | Stripe x402/ACP (public, revenue $25.5B+, on-chain agent payments protocol); Nevermined ($7M raised, revenue unknown, decentralized agent-to-agent payments); Nightmarket (funding unknown, revenue unknown, permissionless API marketplace); Prava (Seed from WTFund, undisclosed amount, revenue unknown, card/wallet payments for agents) |
| Moat Signals | Early two-sided marketplace with 16+ curated API partners, many YC-backed; no patents or proprietary data advantages found |
| Risk Factors | Stripe direct competition via x402/ACP, two-sided marketplace cold start, brand name disambiguation across multiple "Orthogonal" companies |
| Founder Reach | Company: @orthogonal_sh on X (count not retrievable), LinkedIn 1,235 followers, GitHub 10 total stars. Individual founders: no personal public social accounts found |
| Distribution Signals | MCP server integration with Claude Code, Cursor, Codex (company website); YC-network API provider partnerships (YC page); no Product Hunt launch, app store, or Chrome extension data found |
| Emails | founders@orthogonal.com |
