# Pomerado

> Turn any website into an MCP for your agents, in minutes

| Field | Value |
|-------|-------|
| Website | https://www.pomerado.ai |
| YC Page | https://www.ycombinator.com/companies/pomerado |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/pomerado)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, B2B, Workflow Automation, API, AI |
| YC Partner | Aaron Epstein ([YC](https://www.ycombinator.com/companies/pomerado)) |
| Emails | founders@pomerado.ai, akshay@pomerado.ai ([Launch YC](https://www.ycombinator.com/launches/WSd-pomerado-the-faster-cheaper-and-more-reliable-alternative-to-browser-use)) |

## The Idea

- **Problem:** Teams deploying agents into insurance, healthcare, logistics, and internal systems encounter websites without APIs, requiring browser agents or manually built integrations that the founders describe as delaying deployments ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/WSd-pomerado-the-faster-cheaper-and-more-reliable-alternative-to-browser-use)).
- **Approach:** A model explores a website using Chromium and Playwright, writes and tests reusable operations, and submits them to a separate review model before a runtime executes the saved integration without further model requests ([Pomerado architecture, retrieved Oct 27, 2026](https://github.com/Pomerado/pomerado/blob/main/docs/how-it-works.md)).
- **Differentiation:** Pomerado packages hosted API/MCP generation, authentication, and maintenance, while Browserbase offers browser infrastructure and generated Stagehand scripts and Browser Use offers hosted agents plus reusable scripts, meaning script reuse is shared functionality ([Pomerado](https://pomerado.ai/), [Browserbase](https://www.browserbase.com/blog/series-b-and-beyond), [Browser Use](https://browser-use.com/developers)).
- **Business Model:** Freemium subscriptions include Free at $0/month with 100 calls/day and 10 new integrations/month, Premium at $50/month with 1,000 calls/day and 100 integrations/month, and custom-priced Business plans ([Pomerado pricing, retrieved Oct 27, 2026](https://pomerado.ai/)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Public acquisition channels include a free signup, open-source repository, Product Hunt launch, Discord community, enterprise demos, and requests for introductions to agent-building teams ([Launch YC](https://www.ycombinator.com/launches/WSd-pomerado-the-faster-cheaper-and-more-reliable-alternative-to-browser-use), [Product Hunt](https://www.producthunt.com/products/pomerado/awards), Oct 2026).

## Defensibility

- **Moat today:** Public technical assets include integration generation, live-site testing, and a separate model reviewing browser actions and generated code, although these assets are published rather than exclusive ([Pomerado architecture](https://github.com/Pomerado/pomerado/blob/main/docs/how-it-works.md), [MIT-licensed repository](https://github.com/Pomerado/pomerado)).
- **Future moat:** [Inferred]: A maintained integration library embedded in customer workflows could increase migration work, but public reuse, retention, and switching-cost data were not found.
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given the available core source and competitors’ existing script-generation capabilities ([Pomerado GitHub](https://github.com/Pomerado/pomerado), [Browser Use changelog](https://browser-use.com/changelog)).
- **Commoditization risk:** [Inferred]: Developers can adapt the MIT-licensed core, while Skyvern already describes compiling successful browser paths into Playwright scripts and repairing them after website changes, reducing exclusivity of that mechanism ([Pomerado GitHub](https://github.com/Pomerado/pomerado), [Skyvern, Dec 2025](https://www.skyvern.com/blog/skyvern-we-raised-2-7m-to-fix-browser-automation-open-source/)).

## Market & Traction

- **Traction signals:**
  - Repository displays 1.1k stars and 100 forks ([GitHub, retrieved Oct 27, 2026](https://github.com/Pomerado/pomerado)).
  - Product Hunt daily rank #5 on October 16, 2026, with 181 points and 234 product followers displayed at research ([Product Hunt, retrieved Oct 27, 2026](https://www.producthunt.com/products/pomerado/awards)).
  - Launch YC announcement published October 25, 2026 ([Launch YC](https://www.ycombinator.com/launches/WSd-pomerado-the-faster-cheaper-and-more-reliable-alternative-to-browser-use); [AI Tamer, Oct 26, 2026, via search snippet](https://aitamer.news/posts/pomerado-yc-open-source-websites-to-mcp-integrations/)).
- **Competitors:**
  - **Browserbase** ($67.5M raised; ARR unknown): Browser infrastructure, Stagehand, and Director script generation overlap with Pomerado’s integration tooling; its latest identified round was a $40M Series B announced June 18, 2025, led by Notable Capital ([Sacra](https://sacra.com/research/browserbase/), [Browserbase](https://www.browserbase.com/blog/series-b-and-beyond)).
  - **Browser Use** ($17M disclosed funding; revenue unknown): Offers hosted browser agents, infrastructure, and replayable scripts; its $17M seed announced March 22, 2025, was led by Felicis ([funding announcement](https://browser-use.com/posts/seed-round), [developer documentation](https://browser-use.com/developers)).
  - **Skyvern** ($2.7M disclosed seed; total funding: No public data found; revenue unknown): Browser workflow automation includes route compilation and repair, overlapping Pomerado’s mechanism; its December 18, 2025 announcement does not identify a lead investor ([Skyvern](https://www.skyvern.com/blog/skyvern-we-raised-2-7m-to-fix-browser-automation-open-source/)).
- **Why now:** [Inferred]: MCP’s introduction on November 25, 2024, created a common interface for connecting assistants to tools, providing a distribution format for website integrations ([Anthropic](https://www.anthropic.com/news/model-context-protocol)).

## Founders & Team

- **Akshay Manglik (Co-founder, CEO):**
  - Background: Columbia BA in Computer Science and Economics, mathematics minor, graduating in 2025; previously a Scale AI applied engineer building enterprise agents, including Mayo Clinic deployments, and researching agent-trace diagnostics ([personal website](https://akshaymanglik.com/), [YC founder profile](https://www.ycombinator.com/founders/akshay-manglik)).
  - Twitter/X: @akshay_manglik; count not retrievable ([YC-linked account](https://www.ycombinator.com/founders/akshay-manglik)).
  - LinkedIn: Profile found; headline: No public data found; indexed count of 1K followers ([LinkedIn, retrieved Oct 27, 2026, via search snippet](https://www.linkedin.com/in/akshay-manglik)).
  - GitHub: @AkshayM21; highlighted contributed project aakritil/SafeSip has 3 stars ([profile](https://github.com/AkshayM21), [repository, retrieved Oct 27, 2026](https://github.com/aakritil/SafeSip)).
- **Alan Ma (Co-founder, CTO):**
  - Background: Studied Mathematics and Computer Science at Columbia; previously a McKinsey business analyst working on enterprise data and AI strategy, with RBC Capital Markets and Kargo also listed in his history ([YC founder profile](https://www.ycombinator.com/founders/alan-ma), [company role](https://pomerado.ai/about)).
  - Twitter/X: No public account found.
  - LinkedIn: Profile found; headline: No public data found; indexed count of 827 followers ([LinkedIn, retrieved Oct 27, 2026, via search snippet](https://www.linkedin.com/in/ajma867)).
  - GitHub: No public repos found.
- **Co-founder relationship:** Both attended Columbia and previously collaborated on SafeSip, a separate alcohol-safety application listed by Columbia’s healthcare venture competition ([Columbia University](https://www.publichealth.columbia.edu/fast-pitch-competition)).
- **Founder-market fit:** Their documented experience combines enterprise agent engineering at Scale AI with enterprise data/AI strategy at McKinsey; YC identifies Aaron Epstein as the assigned partner ([company background](https://pomerado.ai/about), [YC](https://www.ycombinator.com/companies/pomerado)).

## Key Risks

- **Technical compatibility:** Pomerado’s terms acknowledge that website, authentication, and access-policy changes can interrupt integrations and provide no universal restoration deadline, while committing to commercially reasonable repair efforts ([Terms, Oct 4, 2026](https://pomerado.ai/terms-of-service)).
- **Performance verification:** Reported speed, cost, and reliability improvements are company claims; AI Tamer explicitly states that it created no integrations and did not verify those gains ([AI Tamer, Oct 26, 2026, via search snippet](https://aitamer.news/posts/pomerado-yc-open-source-websites-to-mcp-integrations/)).
- **Sensitive workflows:** Pomerado supports authenticated actions and optional credential storage, while its terms require separate agreements before processing HIPAA-regulated information ([website FAQ](https://pomerado.ai/), [Terms](https://pomerado.ai/terms-of-service)).
- **Automation permissions:** Having login credentials does not establish permission for every automated activity, and customers must discontinue affected activities when authorization expires or is revoked ([Terms](https://pomerado.ai/terms-of-service)).
- **Name disambiguation:** Dealroom’s Pomerado entry includes a narrative about Pomo and different founders, so its financing narrative is excluded from this dossier ([Dealroom](https://app.dealroom.co/companies/pomerado), [verified YC identity](https://www.ycombinator.com/companies/pomerado)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 1.1k stars, 100 forks ([GitHub, Oct 27, 2026](https://github.com/Pomerado/pomerado)); Product Hunt #5 daily, Oct 16, 2026 ([Product Hunt](https://www.producthunt.com/products/pomerado/awards)) |
| Revenue Signal | Free $0/month; Premium $50/month; Business custom pricing ([Pomerado pricing, Oct 27, 2026](https://pomerado.ai/)) |
| Founders | Akshay Manglik, CEO: Columbia, Scale AI; Alan Ma, CTO: Columbia, McKinsey ([YC](https://www.ycombinator.com/companies/pomerado), [company](https://pomerado.ai/about)) |
| Competitors | Browserbase: $67.5M raised, revenue unknown, browser infrastructure ([Sacra](https://sacra.com/research/browserbase/)); Browser Use: $17M disclosed, revenue unknown, hosted agents ([company](https://browser-use.com/posts/seed-round)); Skyvern: $2.7M disclosed seed, revenue unknown, compiled workflows ([company](https://www.skyvern.com/blog/skyvern-we-raised-2-7m-to-fix-browser-automation-open-source/)) |
| Moat Signals | No public data found |
| Risk Factors | Third-party compatibility changes, automation permissions, regulated-data restrictions ([Pomerado Terms](https://pomerado.ai/terms-of-service)) |
| Founder Reach | Manglik: LinkedIn 1K; Ma: LinkedIn 827 followers ([Manglik](https://www.linkedin.com/in/akshay-manglik), [Ma](https://www.linkedin.com/in/ajma867), retrieved Oct 27, 2026, via search snippets) |
| Distribution Signals | Product Hunt #5 daily, 234 followers displayed ([Product Hunt, Oct 27, 2026](https://www.producthunt.com/products/pomerado/awards)); open-source distribution ([GitHub](https://github.com/Pomerado/pomerado)) |
| Emails | founders@pomerado.ai, akshay@pomerado.ai ([Launch YC](https://www.ycombinator.com/launches/WSd-pomerado-the-faster-cheaper-and-more-reliable-alternative-to-browser-use)) |
