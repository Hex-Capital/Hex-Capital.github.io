# Agentcard

> debit cards for AI agents.

| Field | Value |
|-------|-------|
| Website | https://agentcard.sh |
| YC Page | https://www.ycombinator.com/companies/agentcard |
| Batch | Summer 2026 |
| Industry | Fintech / Fintech |
| Team Size | 0 |
| Location | San Francisco, CA, USA |
| Tags | Fintech |
| YC Partner | Tyler Bosmeny |
| Emails | founders@agentcard.sh |

## The Idea

- **Problem:** AI agents executing online purchases lack a payment method scoped per-transaction, so developers either share full card credentials (full blast radius on compromise) or block agent commerce entirely (agentcard.sh, Jun 2026).
- **Approach:** Issue single-use virtual Visa debit cards via CLI, MCP server, REST API, or Chrome extension, each capped to a specific amount, human-approved at issuance, and auto-closing after one charge or 7 days (agentcard.sh, Jun 2026).
- **Differentiation:** vs. Lithic — Lithic sells card-issuing infrastructure to fintechs while Agentcard ships an agent-facing MCP/CLI product with x402 protocol support (lithic.com/blog/agentic-payments, 2026); vs. Skyfire — Skyfire uses a stablecoin/crypto-rails payment network, Agentcard rides Visa rails for "anywhere Visa is accepted" merchant coverage (agentcard.sh; businesswire.com, 2024); vs. Catena Labs — Catena is filing for a national trust bank charter and targets full bank-stack, Agentcard is a thin issuance layer on Stripe + Visa (fortune.com, May 2026).
- **Business Model:** Free tier up to 5 cards/month with $50 per-card cap; Basic tier with $500 per-card cap; pay-as-you-go, no subscription (agentcard.sh pricing, Jun 2026).
- **TAM/SAM:** Agentic commerce market estimated at $7.71B in 2026 growing at 35.7% CAGR to $65.47B by 2033 (Grand View Research, 2026); eMarketer projects direct AI-platform checkout reaches $144B by 2029.
- **GTM / Distribution:** Distribution via MCP-compatible runtimes (Claude Code, Claude Desktop, Cursor) and direct merchant integrations starting with DoorDash through a "Buy by Agentcard" launch (agentcard.sh; Product Hunt, Jun 2026).

## Defensibility

- **Moat today:** Stripe payment processing + Visa card-issuance integration plus AES-256-GCM card-detail encryption and human-in-the-loop Stripe Checkout approval flow (agentcard.sh, Jun 2026).
- **Future moat:** [Inferred]: Merchant integration network (DoorDash first, "additional merchant partners" planned) could create a two-sided marketplace where agents default to Agentcard for merchants with deep links; unproven because only one merchant integration is live (agentcard.sh, Jun 2026).
- **Market structure:** [Inferred]: No structural barrier — Lithic, Stripe Issuing, and Mastercard's Agent Pay for Machines (launched June 2026 with Catena, Skyfire, Basis Theory, Stripe as initial participants) operate the same Visa/Mastercard rails and could ship comparable agent-facing SKUs (mastercard.com, Jun 2026).
- **Commoditization risk:** Any team with a Stripe Issuing or Lithic account can wrap virtual card APIs in an MCP server; Mastercard and Visa both shipped agent-payment products in 2024–2026 (mastercard.com, Jun 2026; LinkedIn, 2024 via search snippet).

## Market & Traction

- **Traction signals:**
  - Product Hunt: 176 upvotes, #7 Day Rank, 357 followers, 1 review (5.0 rating) on "Buy by Agentcard" launch; prior launch April 16, 2026 (producthunt.com/products/agent-card, Jun 2026).
  - DoorDash integration live, enabling purchases from inside Claude (agentcard.sh updates, 2026).
  - npm package published as `agent-cards` (agentcard.sh, Jun 2026).
  - Demoed at WorkOS MCP Night 4 (workos.com/blog/mcp-night-4-agentcard-demo-recap, 2026).
  - Compatible runtimes: Claude Code, Claude Desktop, Cursor, MCP-compatible runtimes (agentcard.sh).
  - No public funding announcement, ARR, user count, or social-follower data found.
- **Competitors:**
  - Skyfire ($9.5M raised across two seed rounds from a16z crypto, Coinbase, Neuberger Berman, Brevan Howard; revenue unknown): crypto/stablecoin payment network for agents rather than Visa-rail virtual cards (Tracxn; businesswire.com, 2024).
  - Catena Labs ($48M total: $18M seed 2025 + $30M Series A May 2026 co-led by a16z crypto and Acrew; revenue unknown): building AI-native bank with national trust charter filing, broader than card issuance (fortune.com, May 2026).
  - Lithic (Series C led by Bessemer; total raised obfuscated on Crunchbase; revenue unknown): card-issuing API for fintechs, sells to platforms not agent developers (lithic.com; crunchbase.com).
  - Mastercard Agent Pay for Machines (incumbent program, not a startup; launched June 2026 with Catena, Skyfire, Basis Theory, Stripe): network-level agent payments product on Mastercard rails (mastercard.com, Jun 2026).
  - Visa Intelligent Commerce / "AI-generated debit card for agents" (incumbent; LinkedIn post, 2024 via search snippet).
- **Why now:** Anthropic's MCP standard and the x402 machine-to-machine payment protocol crossed adoption thresholds across major coding agents in 2025–2026, enabling agents to call payment APIs natively (agentcard.sh; mastercard.com, Jun 2026).

## Founders & Team

- **Karen Serfaty (CEO & Co-founder):**
  - Background: Founder/CEO of Atlas (expense card for global teams, acquired by Remote.com per prnewswire.com); later GM of Cards at Remote; co-founder/CEO at Palabra and co-founder/CTO at Nilus; studied at Universidad de San Andrés and Harvard Business School "Economics for Managers" 2022 (LinkedIn linkedin.com/in/keyserfaty; crunchbase.com/person/karen-serfaty).
  - Twitter/X: No public account found in search results.
  - LinkedIn: "Agentcard" (linkedin.com/in/keyserfaty).
  - GitHub: No public repos found.
- **Felipe Abello (CTO & Co-founder):**
  - Background: Second-time YC founder — founder/CEO at Nara (HelloGuru, YC W22); previously co-founded infactory.ai; first employee at Rappi (YC W16) shipping consumer products at scale (ycombinator.com/companies/nara; f.inc/founders/felipe-abello; search snippet).
  - Twitter/X: No public account found in search results.
  - LinkedIn: profile referenced via beamstart.com; headline not retrievable.
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on prior shared employer or university between Serfaty and Abello.
- **Founder-market fit:** Serfaty previously built and exited a card-issuance product (Atlas, acquired by Remote) and ran the Cards business unit at Remote, directly mapping to virtual-card issuance for Agentcard (prnewswire.com); Abello brings YC-network and consumer-scale shipping experience from Rappi and HelloGuru (W22) (ycombinator.com/companies/nara).

## Key Risks

- **Network-incumbent substitution:** Mastercard launched Agent Pay for Machines in June 2026 with Catena, Skyfire, Basis Theory, and Stripe as initial participants, and Visa publicly shipped an agent-targeted debit card product (mastercard.com, Jun 2026; LinkedIn search snippet, 2024). Mitigation: Agentcard is Visa-network-based and runs on Stripe, so it can ride the same rails.
- **Stripe/Visa platform dependency:** Card issuance, processing, and human approval all flow through Stripe Checkout and Visa (agentcard.sh, Jun 2026); policy changes from either partner on agent-initiated transactions could halt issuance. No mitigation disclosed.
- **Well-capitalized competitor encirclement:** Catena Labs raised $48M including a $30M Series A in May 2026 and is filing for a national trust bank charter; Skyfire raised $9.5M (fortune.com, May 2026; Tracxn). Agentcard has no public funding disclosure.
- **Single-merchant traction concentration:** DoorDash is the only named merchant integration; product depth in agentic commerce depends on broadening merchant deep-links that have not yet been announced (agentcard.sh, Jun 2026).
- **Technical/regulatory risk on autonomous spending:** Single-use, capped, 7-day expiry cards limit blast radius, but no public statement on KYC/KYA framework for issued cards while Skyfire publishes a "Know Your Agent" framework (stellagent.ai, 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Agentic commerce $7.71B in 2026, $65.47B by 2033 at 35.7% CAGR (Grand View Research, 2026); $144B AI-platform checkout by 2029 (eMarketer, 2026) |
| SAM | No public data found |
| Traction | Product Hunt 176 upvotes / #7 Day Rank / 357 followers / 1 review 5.0 (Product Hunt, Jun 2026); DoorDash integration live (agentcard.sh, Jun 2026); demo at WorkOS MCP Night 4 (workos.com, 2026); npm package `agent-cards` (agentcard.sh, 2026) |
| Revenue Signal | Free tier up to 5 cards/month, $50/card cap; Basic tier $500/card cap; pay-as-you-go, no subscription (agentcard.sh pricing, Jun 2026) |
| Founders | Karen Serfaty (CEO): ex-CEO Atlas (acquired by Remote), GM Cards at Remote, ex-Nilus CTO. Felipe Abello (CTO): YC alum (HelloGuru/Nara W22), first employee Rappi (YC W16), ex-infactory.ai. |
| Competitors | Skyfire ($9.5M raised, revenue unknown, crypto/stablecoin payment network for agents); Catena Labs ($48M raised, revenue unknown, AI-native bank with trust-charter filing); Lithic (Series C Bessemer, total obfuscated, revenue unknown, card-issuing API for fintechs); Mastercard Agent Pay for Machines (incumbent program, not startup); Visa Intelligent Commerce (incumbent) |
| Moat Signals | Stripe + Visa issuance integration with AES-256-GCM card encryption and human-in-the-loop Stripe Checkout approval (agentcard.sh, Jun 2026); DoorDash merchant integration (agentcard.sh, Jun 2026) |
| Risk Factors | Mastercard/Visa incumbent substitution, Stripe/Visa platform dependency, well-capitalized competitor encirclement (Catena $48M) |
| Founder Reach | Karen Serfaty: Twitter not found, LinkedIn linkedin.com/in/keyserfaty (count not retrievable), GitHub not found. Felipe Abello: Twitter not found, LinkedIn referenced via beamstart.com (count not retrievable), GitHub not found. |
| Distribution Signals | Product Hunt #7 Day Rank with 176 upvotes and 357 followers (Product Hunt, Jun 2026); npm `agent-cards` (agentcard.sh, 2026); WorkOS MCP Night 4 demo (workos.com, 2026); MCP runtime compatibility with Claude Code, Claude Desktop, Cursor (agentcard.sh, Jun 2026) |
| Emails | founders@agentcard.sh |

Sources:
- [Agentcard YC page](https://www.ycombinator.com/companies/agentcard)
- [Agentcard website](https://agentcard.sh)
- [Agentcard Product Hunt](https://www.producthunt.com/products/agent-card)
- [Karen Serfaty LinkedIn](https://www.linkedin.com/in/keyserfaty/)
- [Karen Serfaty Crunchbase](https://www.crunchbase.com/person/karen-serfaty)
- [Remote acquires Atlas](https://www.prnewswire.com/news-releases/remote-acquires-atlas-to-simplify-how-global-teams-spend-and-scale-302665591.html)
- [Felipe Abello f.inc profile](https://f.inc/founders/felipe-abello/)
- [Nara YC page](https://www.ycombinator.com/companies/nara)
- [WorkOS MCP Night 4 recap](https://workos.com/blog/mcp-night-4-agentcard-demo-recap)
- [Skyfire Crunchbase](https://www.crunchbase.com/organization/skyfire-systems)
- [Skyfire Tracxn](https://tracxn.com/d/companies/skyfire/__-gSNwLdAbLR2EH3jQO5ja24BZ2dqjmKWC_BS3-4pf1s)
- [Catena Labs $30M Series A — Fortune](https://fortune.com/2026/05/20/catena-labs-series-a-sean-neville-ai-native-bank/)
- [Catena Labs $18M seed — PYMNTS](https://www.pymnts.com/news/investment-tracker/2025/catena-labs-raises-18-million-to-build-ai-native-financial-institution-for-agents/)
- [Lithic agentic payments](https://www.lithic.com/blog/agentic-payments)
- [Mastercard Agent Pay for Machines](https://www.mastercard.com/us/en/news-and-trends/press/2026/june/mastercard-launches-agent-pay-for-machines.html)
- [Grand View Research agentic commerce](https://www.grandviewresearch.com/industry-analysis/agentic-commerce-market-report)
- [Skyfire KYA framework — Stellagent](https://stellagent.ai/insights/skyfire-kyapay-know-your-agent)
