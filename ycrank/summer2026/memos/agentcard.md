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
| Emails | founders@agentcard.sh, support@agentcard.sh |

## The Idea

- **Problem:** AI-product developers must either return users to manual checkout, expose reusable payment credentials to agents, or build issuing and compliance infrastructure themselves when an agent needs to complete a purchase ([Y Combinator](https://www.ycombinator.com/companies/agentcard), Aug 2026).
- **Approach:** Agentcard provides OAuth, MCP, CLI, and API surfaces through which agents receive amount- and merchant-restricted virtual Visa credentials, including single-use cards that close after one charge, while underlying user-card details remain in Agentcard’s vault ([Agentcard website](https://www.agentcard.sh/), Aug 2026).
- **Differentiation:** Agentcard emphasizes existing-card connections, issued Visa cards, and a merchant Purchase API; Skyfire centers on identity-linked payment tokens, Crossmint adds fiat and stablecoin wallets, and Alchemy AgentCard bundles a Visa token with an email address, phone number, and crypto wallet ([Agentcard](https://www.agentcard.sh/), [Skyfire](https://skyfire.xyz/product/), [Crossmint](https://www.crossmint.com/solutions/agentic-payments), [Alchemy](https://www.prnewswire.com/news-releases/alchemy-introduces-agentcard-a-payments-and-identity-platform-for-ai-agents-built-on-visa-intelligent-commerce-302803786.html), 2026).
- **Business Model:** The company plan is a flat $5,000 monthly subscription with no per-user, per-card, or covered-order fees, while personal plans are Free, $15 per month, and $100 per month with monthly card limits ([Agentcard pricing](https://www.agentcard.sh/), [Agentcard agent reference](https://agentcard.sh/agent.txt), Aug 2026).
- **TAM/SAM:** The broader agentic-commerce market was estimated at $5.71 billion in 2025 and projected to reach $65.47 billion in 2033, a 35.7% CAGR, but this includes applications beyond payment cards ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/agentic-commerce-market-report), 2026).
- **GTM / Distribution:** Distribution combines self-service CLI/MCP integration, a no-sales-call company signup, YC exposure, three Product Hunt launches, and direct outreach to products operating messaging assistants and agent browsers ([Agentcard](https://www.agentcard.sh/), [Product Hunt](https://www.producthunt.com/products/agent-card), Aug 2026).

## Defensibility

- **Moat today:** Agentcard operates through Third National’s issuing program, hosts card credentials, and handles KYC, fraud, disputes, and chargebacks, creating regulatory and operational integration work, although SOC 2 and PCI DSS remain pending ([Agentcard terms](https://www.agentcard.sh/terms), [Agentcard website](https://www.agentcard.sh/), Aug 2026).
- **Future moat:** [Inferred]: Merchant integrations, authorization outcomes, and transaction histories could support risk policies and switching costs, but no public transaction scale or proprietary model evidence establishes this yet.
- **Market structure:** No structural barrier is identified because Stripe, Crossmint, and Alchemy already expose overlapping agent-specific tokens, wallets, cards, and checkout APIs ([Stripe](https://stripe.com/blog/giving-agents-the-ability-to-pay), [Crossmint](https://www.crossmint.com/solutions/agentic-payments), [Alchemy](https://agentcard.ai/about), 2026).
- **Commoditization risk:** Payment networks, issuing processors, wallet providers, and developer-infrastructure companies can combine existing tokenization, KYC, card-issuing, and API components into comparable products, as demonstrated by Alchemy AgentCard and Stripe Issuing for agents ([Alchemy](https://www.prnewswire.com/news-releases/alchemy-introduces-agentcard-a-payments-and-identity-platform-for-ai-agents-built-on-visa-intelligent-commerce-302803786.html), [Stripe](https://stripe.com/blog/giving-agents-the-ability-to-pay), 2026).

## Market & Traction

- **Traction signals:**
  - Product Hunt lists 560 followers and three launches: Agentcard with 128 votes on April 16, Buy by Agentcard with 180 votes on June 24, and Agentcard for companies with 205 votes and a #5 daily ranking on July 14, 2026 ([Product Hunt](https://www.producthunt.com/products/agent-card), Aug 2026).
  - The website displays Iris, Show, Bido, Pally, Orgo, Metonymous, Papaya, Rose Labs, Axra, and Pluto under “Trusted by” ([Agentcard website](https://www.agentcard.sh/), Aug 2026).
  - Agentcard says an unnamed platform serving 1.5 million users began integrating after a July 2026 evaluation ([Agentcard website](https://www.agentcard.sh/), Aug 2026).
  - YC lists zero active jobs ([Y Combinator](https://www.ycombinator.com/companies/agentcard), Aug 2026).
- **Competitors (minimum 3, up to 5):**
  - Crossmint ($23.6M raised, revenue unknown): provides agent cards plus fiat/stablecoin wallets, x402, checkout APIs, and verifiable credentials ([Crossmint funding announcement](https://www.crossmint.com/announcement/crossmint-raises-23-6m-led-by-ribbit-capital), [Crossmint product](https://www.crossmint.com/solutions/agentic-payments), 2025–2026).
  - Skyfire ($8.5M raised, revenue unknown): uses agent identity and wallet-backed payment tokens for APIs, data, services, and agent-to-agent settlement rather than focusing on Visa checkout credentials ([TechCrunch](https://techcrunch.com/2024/08/21/skyfire-lets-ai-agents-spend-your-money/), [Skyfire](https://skyfire.xyz/product/), 2024–2026).
  - Alchemy AgentCard ($545.5M raised by parent Alchemy, revenue unknown): offers an identically named virtual-card product with Visa Intelligent Commerce, identity, email, phone, and crypto-wallet infrastructure ([TechCrunch](https://techcrunch.com/2022/02/08/alchemy-which-aims-to-be-the-de-facto-platform-for-developers-to-build-on-web3-raises-another-200m-and-is-now-valued-at-10-2b/), [Alchemy launch](https://www.prnewswire.com/news-releases/alchemy-introduces-agentcard-a-payments-and-identity-platform-for-ai-agents-built-on-visa-intelligent-commerce-302803786.html), 2022–2026).
- **Why now:** Visa opened its network and spending-control APIs to AI developers in April 2025, followed by Stripe’s April 2026 launch of one-time cards and shared payment tokens for agents ([Visa](https://investor.visa.com/news/news-details/2025/Find-and-Buy-with-AI-Visa-Unveils-New-Era-of-Commerce/default.aspx), [Stripe](https://stripe.com/blog/giving-agents-the-ability-to-pay)).

## Founders & Team

- **Karen Serfaty (CEO & Co-Founder):**
  - Background: Universidad de San Andrés graduate; previously co-founded Nilus and Palabra, founded the global-expense-card company Atlas, completed its acquisition by Remote in January 2026, and subsequently served as GM, Cards at Remote ([Y Combinator](https://www.ycombinator.com/companies/agentcard), [Remote acquisition announcement](https://www.prnewswire.com/news-releases/remote-acquires-atlas-to-simplify-how-global-teams-spend-and-scale-302665591.html), 2026).
  - Twitter/X: [@keyserfaty](https://x.com/keyserfaty), count not retrievable.
  - LinkedIn: “Agentcard,” with 11,805 followers ([LinkedIn](https://www.linkedin.com/posts/keyserfaty_very-happy-to-share-that-agentcard-yc-s26-activity-7469812102795522048-Q8UD), Jul 2026).
  - GitHub: [@keyserfaty](https://github.com/keyserfaty), with `pricy` at 11 stars and 127 profile followers ([GitHub](https://github.com/keyserfaty), Aug 2026).
- **Felipe Abello (CTO & Co-Founder):**
  - Background: Universidad de Los Andes business-administration graduate and NUCB exchange student; formerly Rappi’s first employee and Head of Business Operations, then founder/CEO of HelloGuru and Nara and co-founder of Infactory ([Y Combinator](https://www.ycombinator.com/companies/agentcard), [Stackforce profile](https://www.stackforce.co/talent/felipe-abello-co-founder-69c8ad7a122fe84675da4790), 2026).
  - Twitter/X: [@PipeAbellos](https://x.com/PipeAbellos), count not retrievable.
  - LinkedIn: “Agentcard,” with approximately 7,000 followers ([LinkedIn](https://www.linkedin.com/in/pipeabello), Aug 2026).
  - GitHub: [@pipeabellos](https://github.com/PipeAbellos), with `thetoolforthat` at 11 stars and 6 profile followers ([GitHub](https://github.com/PipeAbellos), Aug 2026).
- **Co-founder relationship:** The supplied Team Size field says 0, but LinkedIn lists both founders as employees, and Serfaty publicly described Abello as her “good friend”; no shared prior employer or university was found ([Agentcard LinkedIn](https://www.linkedin.com/company/agentcard), [Serfaty announcement](https://www.linkedin.com/posts/keyserfaty_very-happy-to-share-that-agentcard-yc-s26-activity-7469812102795522048-Q8UD), Jul–Aug 2026).
- **Founder-market fit:** Serfaty previously built and sold a card-and-expense company, while Abello has consumer-operations and startup-building experience; disclosed angels include executives or former personnel from Shopify, HubSpot, WorkOS, Vercel, OpenAI, Rappi, Stripe, and dLocal ([Y Combinator](https://www.ycombinator.com/companies/agentcard), [Agentcard About](https://www.agentcard.sh/about), Aug 2026).

## Key Risks

- **Product-description inconsistency:** YC and marketing materials call the product a debit card, while Agentcard’s terms state that each issued card is a fully collateralized credit account and “not a prepaid or debit card,” creating disclosure and customer-understanding risk ([Y Combinator](https://www.ycombinator.com/companies/agentcard), [Agentcard terms](https://www.agentcard.sh/terms), Aug 2026).
- **Name collision and substitution:** Alchemy launched a separate product named AgentCard in June 2026 with virtual Visa cards and overlapping agent-payment functionality, creating search, package-name, and buyer-confusion risk ([Alchemy](https://www.prnewswire.com/news-releases/alchemy-introduces-agentcard-a-payments-and-identity-platform-for-ai-agents-built-on-visa-intelligent-commerce-302803786.html), Jun 2026).
- **Third-party dependency:** Funding, identity verification, issuing, subscriptions, and card-network access depend on MoonPay, Crossmint, Coinbase legacy flows, Third National, Sumsub, Stripe, and Visa, so partner policy or service changes can interrupt core flows ([Agentcard terms](https://www.agentcard.sh/terms), Jul 2026).
- **Security and compliance:** Agentcard handles transaction histories and encrypted PAN/CVV data that authenticated MCP tools can decrypt, while its SOC 2 and PCI DSS statuses are pending ([Agentcard privacy policy](https://www.agentcard.sh/privacy), [Agentcard website](https://www.agentcard.sh/), Aug 2026).
- **Coverage limitations:** Terms restrict wallet funding to the United States, the website limits connected Visa cards to US-issued cards, and the agent reference excludes merchants requiring interactive 3DS or SMS verification ([Agentcard terms](https://www.agentcard.sh/terms), [Agentcard website](https://www.agentcard.sh/), [agent reference](https://agentcard.sh/agent.txt), Aug 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $5.71B agentic-commerce market in 2025, projected to $65.47B by 2033 at 35.7% CAGR (Grand View Research, 2026) |
| SAM | No public data found |
| Traction | 560 Product Hunt followers; July company launch ranked #5 with 205 votes; website lists 10 “Trusted by” organizations; unnamed 1.5M-user platform reportedly integrating ([Product Hunt](https://www.producthunt.com/products/agent-card), [Agentcard](https://www.agentcard.sh/), Jul–Aug 2026) |
| Revenue Signal | $5,000/month company plan; personal Free, $15/month, and $100/month plans ([Agentcard pricing](https://www.agentcard.sh/), [agent reference](https://agentcard.sh/agent.txt), Aug 2026) |
| Founders | Karen Serfaty (CEO): Atlas founder and Remote acquisition, former GM Cards; Felipe Abello (CTO): Rappi first employee, Nara/HelloGuru/Infactory founder ([Y Combinator](https://www.ycombinator.com/companies/agentcard), Aug 2026) |
| Competitors | Crossmint ($23.6M raised, revenue unknown, cards plus fiat/stablecoin stack); Skyfire ($8.5M raised, revenue unknown, identity-linked payment network); Alchemy AgentCard ($545.5M parent funding, revenue unknown, Visa token plus agent identity) ([Crossmint](https://www.crossmint.com/announcement/crossmint-raises-23-6m-led-by-ribbit-capital), [TechCrunch—Skyfire](https://techcrunch.com/2024/08/21/skyfire-lets-ai-agents-spend-your-money/), [TechCrunch—Alchemy](https://techcrunch.com/2022/02/08/alchemy-which-aims-to-be-the-de-facto-platform-for-developers-to-build-on-web3-raises-another-200m-and-is-now-valued-at-10-2b/)) |
| Moat Signals | Third National issuing program, card vault, single-use and merchant-restricted credentials, hosted KYC/fraud/dispute handling ([Agentcard terms](https://www.agentcard.sh/terms), [Agentcard](https://www.agentcard.sh/), Aug 2026) |
| Risk Factors | Debit-versus-credit description inconsistency; Alchemy AgentCard name collision; third-party issuing, KYC, and funding dependencies ([Agentcard terms](https://www.agentcard.sh/terms), [Alchemy](https://agentcard.ai/about), Aug 2026) |
| Founder Reach | Serfaty: X count not retrievable, LinkedIn 11,805, top GitHub repo 11 stars; Abello: X count not retrievable, LinkedIn ~7K, top GitHub repo 11 stars ([LinkedIn](https://www.linkedin.com/posts/keyserfaty_very-happy-to-share-that-agentcard-yc-s26-activity-7469812102795522048-Q8UD), [GitHub—Serfaty](https://github.com/keyserfaty), [LinkedIn—Abello](https://www.linkedin.com/in/pipeabello), [GitHub—Abello](https://github.com/PipeAbellos), Aug 2026) |
| Distribution Signals | Product Hunt: 560 followers, three 2026 launches, July company launch #5 with 205 votes ([Product Hunt](https://www.producthunt.com/products/agent-card), Aug 2026) |
| Emails | founders@agentcard.sh ([Y Combinator](https://www.ycombinator.com/companies/agentcard), Aug 2026); support@agentcard.sh ([Agentcard privacy policy](https://www.agentcard.sh/privacy), Jul 2026) |
