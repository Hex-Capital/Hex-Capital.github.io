# Allowance

> Scoped payment credentials for AI agents

| Field | Value |
|-------|-------|
| Website | https://useallowance.com/ |
| YC Page | https://www.ycombinator.com/companies/allowance |
| Batch | Spring 2026 |
| Industry | Fintech / Fintech -> Payments |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Fintech, Generative AI, Payments |
| YC Partner | Harj Taggar |
| Emails | hello@useallowance.com, dasmersingh@gmail.com (founder personal, dasmer.com) |

## The Idea

- **Problem:** Users who delegate purchases (shopping, food, tickets, reservations) to AI agents currently must expose real card numbers, creating fraud and over-charge risk (useallowance.com).
- **Approach:** iPhone app issues per-task one-time virtual card credentials with merchant lock, spending cap, and expiration set at approval time, with real card details never shared with the agent (useallowance.com).
- **Differentiation:** Crossmint targets developers with agent-wallet APIs and stablecoin rails (crossmint.com); Skyfire focuses on agent identity/KYA + Visa Intelligent Commerce settlement (ccn.com, Dec 2025); Privacy.com/Lithic offers virtual cards but is consumer-merchant focused without agent-specific approval UX (privacy.com); Allowance is positioned as a consumer iPhone wallet specifically for agent purchases (useallowance.com).
- **Business Model:** No pricing disclosed; product "live in early public beta" (useallowance.com). [Inferred]: Likely interchange share on issued cards plus potential subscription, consistent with virtual-card issuers like Privacy.com (privacy.com pricing model).
- **TAM/SAM:** No public TAM/SAM data found for the specific agent-payments segment; "hundreds of real-world agent-initiated transactions" completed via pilots with Ramp, Skyfire and others as of 2026 (crossmint.com, Mar 2026).
- **GTM / Distribution:** [Inferred]: Direct-to-consumer via Apple App Store distribution and integration with consumer AI tools (Claude, Codex named on useallowance.com).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond first-mover positioning as a consumer iPhone wallet for agent payments (useallowance.com).
- **Future moat:** [Inferred]: Card-issuing/BIN-sponsor relationships, fraud-model data from agent transactions, and per-merchant approval-rule libraries could become switching costs as transaction volume accumulates; unproven at team size 1 (ycombinator.com).
- **Market structure:** [Inferred]: No structural barrier identified at this stage — Stripe, Visa, Mastercard, Ramp, Coinbase, and Crossmint are already shipping agent-payment products (crossmint.com/learn).
- **Commoditization risk:** Lithic/Privacy.com, Ramp, Stripe, Visa Intelligent Commerce, and Crossmint all offer adjacent virtual-card-for-agents capability (crossmint.com, privacy.com, ccn.com); a consumer-iPhone-approval layer is replicable on top of any issuer-processor.

## Market & Traction

- **Traction signals:**
  - iPhone app live in "early public beta" on Apple App Store (useallowance.com); no install/rating counts found.
  - Hiring 1 founding engineer (useallowance.com).
  - No revenue, user counts, Product Hunt rank, press coverage, or social follower counts found for the company entity.
  - YC Spring 2026 backing (ycombinator.com).
- **Competitors:**
  - Crossmint ($23.6M Series A led by Ribbit Capital, Mar 2025; revenue unknown): developer API for agent wallets/cards with stablecoin rails vs. Allowance's consumer iPhone approval flow (fortune.com, coindesk.com).
  - Skyfire ($9.5M seed from a16z CSX, Coinbase Ventures; revenue unknown): KYA agent identity + Visa Intelligent Commerce settlement, B2B vs. Allowance's consumer focus (cbinsights.com, ccn.com Dec 2025).
  - Lithic/Privacy.com ($61M total, $43M Series B led by Bessemer 2021; revenue unknown): general virtual-card issuing with consumer brand, lacks agent-specific approval UX (techcrunch.com, May 2021).
  - Stripe (public-track, revenue >$1B): "Stripe for Agents" payment primitives shipping (odaily.news, 2026).
  - Ramp (last known $13B valuation; revenue unknown for agents segment): running agent-payment pilots (crossmint.com, Mar 2026).
- **Why now:** Agent-initiated commerce crossed a production threshold in late 2025/early 2026 — Visa Intelligent Commerce + Skyfire KYAPay went live in Dec 2025 (ccn.com), and Amazon Bedrock AgentCore enabled agents to "execute purchases across more than a billion items on Amazon and Shopify" by Mar 2026 (ccn.com, Mar 2026).

## Founders & Team

- **Dasmer Singh (Founder):**
  - Background: Head of Product for Cash App Families building teen/parent financial products; prior Sr PM at Uber (Uber Eats promos, Google Maps & Marriott Bonvoy partnerships), Sr PM at Petal Card, PM at Venmo (launched Venmo Debit Card), earlier iOS Engineer at Venmo (Emoji Autocomplete) (apollo.io, zoominfo.com, medium.com/petal, player.fm/wizardest).
  - Twitter/X: @dasmersingh (dasmer.com); follower count not retrievable.
  - LinkedIn: "Cash App" — linkedin.com/in/dasmer, 500+ connections (linkedin.com).
  - GitHub: @dasmer, 112 followers; repos include EmojiKit, Paste-Emoji, piatto, DAZABTest, RelativeFit (github.com/dasmer); no repo with >100 stars surfaced in search.
- **Co-founder relationship:** Solo founder; team size 1 (ycombinator.com).
- **Founder-market fit:** Decade-plus building consumer payment products at Venmo, Petal, Cash App Families aligns directly with issuing scoped consumer card credentials (medium.com/petal, apollo.io); no advisors or investors beyond YC disclosed publicly.

## Key Risks

- **Incumbent and well-funded entrant competition:** Stripe, Visa, Ramp, Crossmint ($23.6M Series A, fortune.com 2025) and Skyfire ($9.5M seed, cbinsights.com) are already shipping agent-payment products in the same 12-month window; no mitigation found beyond consumer-iPhone form factor (useallowance.com).
- **Solo-founder execution against multi-stakeholder fintech stack:** Team size 1 (ycombinator.com) building a product spanning iOS, card issuing, AI-agent integration, and fraud — actively hiring founding engineer (useallowance.com) which is unfilled at time of research.
- **Issuer/BIN dependency:** Issuing scoped virtual cards requires a sponsor bank or processor (e.g., Lithic, Marqeta); no partner disclosed publicly (useallowance.com), creating concentration and economics risk.
- **Standards risk:** Agentic payment protocols (MPP, ACP, AP2, x402) are converging (crossmint.com/learn); a winning protocol controlled by Visa, Mastercard, or Stripe could bypass third-party wallets.
- **Distribution channel control:** Consumer reach depends on AI agent platforms (Claude, Codex named on useallowance.com) which could ship native payment primitives.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | iPhone app in "early public beta" (useallowance.com); YC Spring 2026 backed (ycombinator.com); hiring 1 founding engineer (useallowance.com) |
| Revenue Signal | No public data found (no pricing page; "early public beta" per useallowance.com) |
| Founders | Dasmer Singh (Founder): Ex-Head of Product Cash App Families; PM Venmo (launched Venmo Debit Card); Sr PM Uber Eats; Sr PM Petal Card (apollo.io, medium.com/petal). |
| Competitors | Crossmint ($23.6M Series A led by Ribbit, Mar 2025, revenue unknown, developer API + stablecoins); Skyfire ($9.5M seed a16z/Coinbase Ventures, revenue unknown, KYA + Visa rails); Lithic/Privacy.com ($61M total raised, revenue unknown, general virtual cards); Stripe (public-track, agent payments primitives); Ramp (last $13B valuation, revenue unknown, pilot agent payments) |
| Moat Signals | No public data found |
| Risk Factors | Well-funded incumbents (Stripe, Visa, Crossmint, Skyfire); solo founder; issuer/BIN dependency undisclosed |
| Founder Reach | Dasmer Singh: Twitter @dasmersingh (count not retrievable), LinkedIn 500+ connections, GitHub 112 followers (no repos >100 stars surfaced) |
| Distribution Signals | Apple App Store listing (useallowance.com); no Product Hunt launch found; no press coverage found |
| Emails | hello@useallowance.com (useallowance.com); dasmersingh@gmail.com (dasmer.com personal site) |

Sources:
- [Allowance company website](https://useallowance.com/)
- [Allowance YC page](https://www.ycombinator.com/companies/allowance)
- [Dasmer Singh personal site](https://dasmer.com/)
- [Dasmer Singh GitHub](https://github.com/dasmer)
- [Dasmer Singh LinkedIn](https://www.linkedin.com/in/dasmer/)
- [Dasmer Singh Apollo profile](https://www.apollo.io/people/Dasmer/Singh/57d56149a6da9853f548a1d3)
- [Petal — Introducing Insights (Dasmer Singh)](https://medium.com/petal/introducing-insights-to-further-increase-transparency-81f4308273d1)
- [Wizardest E1 — Dasmer Singh PM at Venmo](https://player.fm/series/wizardest/episode-1-dasmer-singh-product-manager-at-venmo)
- [Crossmint raises $23.6M led by Ribbit](https://blog.crossmint.com/crossmint-raises-23-6m-led-by-ribbit-capital/)
- [Fortune — Crossmint $24M](https://fortune.com/crypto/2025/03/18/crossmint-24-million-ribbit-capital-franklin-templeton-developer-platform-fundraise/)
- [Skyfire Tracxn profile](https://tracxn.com/d/companies/skyfire/__-gSNwLdAbLR2EH3jQO5ja24BZ2dqjmKWC_BS3-4pf1s)
- [Skyfire CB Insights](https://www.cbinsights.com/company/skyfire)
- [Privacy.com rebrands to Lithic, $43M Series B](https://techcrunch.com/2021/05/20/privacy-com-rebrands-to-lithic-raises-43m-for-virtual-payment-cards/)
- [Crossmint — Agent card payments compared](https://www.crossmint.com/learn/agent-card-payments-compared)
- [CCN — AI agents pay digital wallets via Bedrock AgentCore](https://www.ccn.com/education/crypto/ai-agents-pay-digital-wallets-amazon-bedrock-agentcore-autonomous-commerce/)
- [Odaily — Stripe for Agents investment map](https://www.odaily.news/en/post/5208194)
