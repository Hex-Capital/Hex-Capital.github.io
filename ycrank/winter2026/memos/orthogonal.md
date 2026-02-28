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

## The Idea

**Problem:** AI agents are becoming major consumers of APIs but lack a unified way to discover, authenticate with, and pay for them. Currently, each API requires its own account, API key, billing setup, and authentication flow. An agent needing access to 30+ tools faces fragmented key management, billing across dozens of services, and many APIs lacking MCP (Model Context Protocol) integrations entirely (YC company page). Developers building agent workflows must manually stitch together authentication and payments across each provider.

**Approach:** Orthogonal provides a unified marketplace and payment layer for AI agent-consumed APIs. Developers and agents access hundreds of APIs through a single MCP server (`mcp.orth.sh`) or SDK, authenticated via one Orthogonal API key (docs.orthogonal.com). The platform packages APIs as "Skills" — pre-built integrations that bundle authentication, parameters, workflows, and error handling — installable via CLI (`orth skills add`). API providers list once and become discoverable by all agents and developers on the platform. Current API categories include search, scraping, datasets, AI models, lead enrichment, email verification, and LinkedIn tools (docs.orthogonal.com). The platform supports Claude Code, Cursor, Codex, and other MCP-compatible agent frameworks (orthogonal.com).

**Differentiation:** Unlike protocol-level standards (x402, ACP, AP2) that define how payments flow but don't aggregate APIs, Orthogonal combines API discovery, authentication abstraction, and pay-per-call billing into a single platform. Compared to Skyfire ($9.5M raised) and Nevermined ($7M raised), which focus on agent-to-agent payment rails and settlement infrastructure, Orthogonal focuses on the developer-facing API marketplace layer — packaging existing third-party APIs for agent consumption rather than building payment protocol infrastructure. Compared to the x402 protocol (Coinbase/Cloudflare), which enables HTTP-native stablecoin micropayments, Orthogonal abstracts away the payment mechanism itself and focuses on API aggregation and discovery.

**Business Model:** Pay-per-call pricing with no monthly fees or minimums — users pay only for executed API calls (docs.orthogonal.com). New signups receive $10 in API usage credits (YC company page via search snippet). [Inferred]: Revenue likely derives from a margin on each API call, taking a spread between what the developer pays and what the underlying API provider receives.

**TAM/SAM:** The global API management market was valued at approximately $6.89B in 2025 and projected to reach $32.77B by 2032 at 25.0% CAGR (Fortune Business Insights, 2025 via search snippet). The API marketplace segment specifically was estimated at $20.84B in 2025, projected to reach $49.45B by 2030 at 18.9% CAGR (Grand View Research, 2025 via search snippet). The broader agentic commerce TAM is estimated at $136B in 2025, with McKinsey projecting $3–5T globally by 2030 (McKinsey, 2025 via search snippet). The SAM — the slice of API marketplace spend mediated specifically through agent-facing aggregation platforms — has no standalone public estimate.

**GTM / Distribution:** The product is accessible via MCP server integration (compatible with Claude Code, Cursor, Codex) and direct SDK/API, reducing adoption friction for developers already using these agent frameworks (orthogonal.com, docs.orthogonal.com). The company offers $10 in free credits to new users (YC company page via search snippet). [Inferred]: Primary distribution likely relies on developer word-of-mouth, MCP ecosystem integrations, and API provider partnerships to build supply-side liquidity, with YC network as an initial amplifier.

## Defensibility

**Marketplace network effects:** Orthogonal is a two-sided marketplace (API providers and agent developers). As more APIs are listed, the platform becomes more useful to developers; as more developers use it, API providers have more incentive to list. The platform has 14+ documented integration providers at launch (orthogonal.com). This network effect is nascent and unproven at current scale.

**Single-key abstraction as switching cost:** Developers who build agent workflows around Orthogonal's unified key and skill system would face migration cost in reconfiguring authentication and billing for each individual API if switching away. However, this switching cost is modest at pre-seed volumes.

**Market structure:** The structural barrier for incumbents: existing API gateway providers (Kong, Apigee, MuleSoft) are built for human developer workflows with subscription-based billing. Retooling for per-call agent-native consumption with MCP integration would require rearchitecting their billing and discovery layers. Payment networks (Visa, Mastercard) have launched agent payment protocols but focus on consumer commerce transactions, not developer API-to-API micropayments. Coinbase/Cloudflare's x402 provides payment rails but not the aggregation/discovery layer. [Inferred]: The closest structural barrier is that API gateway incumbents' subscription-based revenue models create cannibalization risk if they move to pay-per-call for agents.

**Commoditization risk:** The technical complexity of building an API aggregation and payment layer is moderate. Any well-funded competitor with marketplace-building experience could replicate the core functionality. The defensibility depends on achieving supply-side density (number and quality of APIs) before competitors do.

## Market & Traction

**Traction signals:**
- 14+ API integration providers listed at launch (orthogonal.com, Feb 2025)
- $10 in free credits offered to new signups (YC company page via search snippet)
- Bera Sogut LinkedIn post announcing YC backing received 326 likes and 97 comments (LinkedIn, ~Nov 26, 2025)
- Bera Sogut LinkedIn follower count: 3,073 (LinkedIn, ~Nov 2025)
- Christian Pickett Twitter/X: @chrisspickett — handle confirmed; follower count not retrievable (X.com)
- Company Twitter/X: @orthogonal_sh listed on YC page; handle not found in search results. Multiple unrelated "Orthogonal" accounts exist on X.
- Company Discord: linked from orthogonal.com; member count not publicly available
- No Product Hunt listing found
- No Hacker News Launch HN post found for this company (a "Show HN: Orthogonal — An AI Workspace for your files" post exists but refers to an unrelated product)
- No app store listings found
- No public revenue or user count data found
- Early advisor: Nemil Dalal (Bera Sogut LinkedIn post, ~Nov 2025)

**Competitive landscape:**

1. **Skyfire** ($9.5M total seed funding; Coinbase Ventures, a16z CSX — The Block, Oct 2024): Payment identity and rails for AI agents to make autonomous transactions. Founded by ex-Ripple executives. Key differentiator vs. Orthogonal: Skyfire focuses on agent payment identity and settlement infrastructure, not API aggregation/discovery. Revenue unknown.

2. **Nevermined** ($7M total funding; Generative Ventures led $4M round — PYMNTS, Jan 2025): Decentralized AI-to-AI payment protocol enabling agents to discover, negotiate, and compensate each other. Based in Switzerland. Key differentiator vs. Orthogonal: Nevermined focuses on decentralized agent-to-agent payment settlement, not a curated API marketplace with unified authentication. Revenue unknown.

3. **x402 Protocol** (Coinbase/Cloudflare; open-source foundation launched May 2025 — Cloudflare blog): HTTP-native stablecoin micropayment standard using the 402 status code. 156,000 weekly transactions reported (Fintech Brain Food via search snippet). Key differentiator vs. Orthogonal: x402 is a protocol/standard, not a marketplace — it provides payment rails that platforms like Orthogonal could theoretically build on, but does not offer API discovery or aggregation.

4. **Prava** (Seed round Dec 2025, amount undisclosed; backed by WTFund — Tracxn via search snippet): Payment infrastructure for AI applications with tokenized card-based agentic payments. Based in San Francisco. Key differentiator vs. Orthogonal: Prava focuses on merchant-side checkout and card-based payments for AI apps, not developer API marketplace aggregation. Revenue unknown.

5. **Masumi Network** (funding unknown): Focuses on monetization of MCP servers specifically. Key differentiator vs. Orthogonal: Masumi targets MCP server providers as customers for monetization tooling, whereas Orthogonal aggregates APIs and presents them to agent developers. Revenue unknown.

**Why now:** The MCP standard (released by Anthropic in late 2024) created a common interface for AI agents to call tools, but also fragmented the ecosystem — some APIs have MCP integrations, many don't. Simultaneously, AI agent frameworks (Claude Code, Cursor, Codex) reached production usage levels in 2024–2025, generating real demand for agents to autonomously consume APIs. Major payment networks launched agent payment protocols in 2025: Stripe/OpenAI launched ACP (Sep 2025), Google launched AP2, Visa announced Intelligent Commerce, and Mastercard launched Agent Pay (Fintech Brain Food; various sources via search snippet). [Inferred]: The convergence of standardized tool-calling (MCP), production-ready agent frameworks, and payment protocol launches created a specific window for an aggregation layer that sits above the protocols and below the agents.

## Founders & Team

**Christian Pickett** — Co-founder & CEO
- Education: McGill University (LinkedIn, ZoomInfo via search snippet)
- Prior roles: Payments at Coinbase; billing/financial infrastructure at Vercel (YC company page; LinkedIn)
- Earlier career: Applications Software Development Student at BlackBerry; Full Stack Developer & Watson Digital Advisor at IBM (search snippet via ZoomInfo)
- Twitter/X: @chrisspickett — bio reads "building at Orthogonal, previously worked in finfra at Vercel and payments at Coinbase" (X.com); follower count not retrievable
- LinkedIn: linkedin.com/in/christian-pickett-145788b4 — listed as Vercel (LinkedIn)
- GitHub: No public repos found

**Bera Sogut** (full name: Salih Bera Sogut) — Co-founder
- Education: McGill University (Competitive Programming Hall of Fame profile, cphof.org)
- Prior roles: Google (worked on reCAPTCHA and Maps APIs); Amazon Robotics (YC company page)
- Competitive programming: 2x ACM ICPC World Finalist — ranked 24th at ICPC 2020 World Finals Invitational (Sep 2021) and 65th at ICPC 2021 World Finals Dhaka (Nov 2022), competing on McGill's "Bees" team (cphof.org)
- Listed in Competitive Programming Hall of Fame under Codeforces handle "Bera" (cphof.org)
- Twitter/X: Not confirmed; @bernasogut appears in search results but not verified as belonging to this person
- LinkedIn: linkedin.com/in/berasogut — 3,073 followers (~Nov 2025, LinkedIn post)
- GitHub: github.com/sogutbera — 4 public repos (all forks of Eclipse OpenJ9), 1 follower, Arctic Code Vault Contributor badge (GitHub)

**Co-founder relationship:** Both founders attended McGill University. Christian Pickett stated they met at McGill and have been close friends since (search snippet via ZoomInfo/YC sources).

**Founder-market fit:** Christian Pickett's payments experience at Coinbase and billing infrastructure work at Vercel directly maps to building payment and billing systems for API consumption. Bera Sogut's experience building APIs at Google (reCAPTCHA, Maps) and engineering at Amazon Robotics provides the API infrastructure perspective. The combination covers both sides of the product: payments/billing and API development/integration. Early advisor Nemil Dalal was noted in Bera Sogut's YC announcement post (LinkedIn, ~Nov 2025).

## Key Risks

**Brand disambiguation:** Multiple unrelated companies use the "Orthogonal" name, including Orthogonal Inc. (OLED display technology, publicly traded ticker OLED association), Orthogonal.io (medical device software consultancy in Chicago/SF), and Orthogonal Research Lab. The company's Twitter/X handle listed on YC (@orthogonal_sh) was not findable in search results, and the current website domain is orthogonal.com (previously orthogonal.sh based on LinkedIn post). This creates SEO and brand discovery challenges.

**Protocol-layer competition from well-funded incumbents:** Coinbase/Cloudflare (x402), Stripe/OpenAI (ACP), Google (AP2/UCP), Visa (VIC), and Mastercard (MAP) are all building agent payment protocols with significant resources. If any of these protocols becomes dominant and includes built-in API discovery, Orthogonal's aggregation layer could be disintermediated. Mitigation: Orthogonal operates above the protocol layer and could theoretically integrate with whichever protocol wins.

**Supply-side liquidity chicken-and-egg:** The platform's value depends on having a comprehensive, high-quality API catalog. With 14+ providers at launch, the catalog is nascent. If API providers don't see sufficient developer demand, they may not prioritize Orthogonal listings. Conversely, developers won't adopt if the API selection is thin.

**MCP ecosystem dependency:** The product's primary distribution mechanism relies on MCP adoption across agent frameworks. If MCP is superseded by a competing standard (e.g., Google's UCP becomes dominant with an incompatible interface), Orthogonal would need to re-integrate. MCP is currently backed by Anthropic but is not yet an industry-wide standard.

**Crypto/Web3 positioning ambiguity:** The company is tagged with "Crypto / Web3" on its YC profile, but the current product description and documentation focus on conventional API marketplace functionality. If the long-term plan involves crypto payment rails (consistent with Christian Pickett's Coinbase background and the x402 ecosystem), the pivot to or integration of crypto payments could create regulatory complexity or narrow the addressable customer base.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $20.84B API marketplace market in 2025, projected $49.45B by 2030 at 18.9% CAGR (Grand View Research, 2025 via search snippet). Broader agentic commerce: $136B in 2025, $3–5T by 2030 (McKinsey, 2025 via search snippet) |
| SAM | No public data found |
| Traction | 14+ API integration providers at launch (orthogonal.com); $10 free credits for new signups (YC page via search snippet); no public user count or revenue data found |
| Revenue Signal | Pay-per-call pricing, no monthly fees or minimums (docs.orthogonal.com). No public revenue figures found |
| Founders | Christian Pickett (CEO): McGill, ex-Coinbase payments, ex-Vercel billing. Bera Sogut (Co-founder): McGill, ex-Google (reCAPTCHA/Maps APIs), ex-Amazon Robotics, 2x ICPC World Finalist |
| Competitors | Skyfire ($9.5M raised, revenue unknown, agent payment identity/rails vs. Orthogonal's API aggregation); Nevermined ($7M raised, revenue unknown, decentralized agent-to-agent payments vs. curated marketplace); x402/Coinbase ($0 — open protocol, payment rails only vs. full marketplace); Prava (undisclosed seed, revenue unknown, card-based merchant checkout vs. developer API marketplace) |
| Moat Signals | Two-sided marketplace network effects (nascent — 14+ providers); single-key switching cost (modest at current scale) |
| Risk Factors | Protocol-layer competition from Coinbase/Stripe/Google/Visa/Mastercard, supply-side liquidity chicken-and-egg, MCP ecosystem dependency |
| Founder Reach | Christian Pickett: Twitter @chrisspickett (count not retrievable), LinkedIn (listed at Vercel). Bera Sogut: LinkedIn 3,073 followers, GitHub 1 follower/4 repos |
| Distribution Signals | MCP server integration for Claude Code/Cursor/Codex (orthogonal.com); YC W26 batch; no Product Hunt listing found; no Hacker News Launch HN found |
