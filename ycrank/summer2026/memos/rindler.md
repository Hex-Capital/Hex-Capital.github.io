# Rindler

> The translation layer between AI agents and the web

| Field | Value |
|-------|-------|
| Website | https://rindler.ai |
| YC Page | https://www.ycombinator.com/companies/rindler |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | Boston, MA, USA |
| Tags | B2B, Workflow Automation, Infrastructure, APIs |
| YC Partner | Ankit Gupta |
| Emails | founders@rindler.ai, team@rindler.ai |

## The Idea

- **Problem:** Agent builders and operations teams rely on manual portal work, browser agents that reinterpret each page on every run, or selector-based scripts that can fail when sites add login gates, pop-ups, bot defenses, dynamic controls, or layout changes ([Launch YC](https://www.ycombinator.com/launches/RHN-rindler-turn-any-website-into-an-api-for-ai-agents), Jul 2026).
- **Approach:** Rindler maps each website into typed screens, actions, and outputs, verifies the mapping against the live site, and exposes it through a hosted MCP endpoint that manages authentication, navigation, retries, and structured records ([Rindler technical description](https://rindler.ai/llms.txt), Jul 2026).
- **Differentiation:** Rindler says Browser Use and Playwright drive or parse pages during each run and Firecrawl focuses on extraction, whereas Rindler uses pre-mapped, verifier-gated configurations supporting authenticated reads and actions with a stable response shape ([Rindler FAQ](https://rindler.ai/faq), Jul 2026).
- **Business Model:** Free costs $0, Starter costs $100 monthly for 100 successful-session credits, Teams costs $1,000 monthly for 1,000 credits, and Enterprise uses custom pricing, with each successful session charged as one $1 credit regardless of its number of steps ([Rindler pricing](https://rindler.ai/pricing), Jul 2026).
- **TAM/SAM:** The broader AI-agents market was estimated at $8.29 billion in 2025 and forecast at $12.06 billion in 2026, a 45.5% increase, but no public estimate was found for authenticated website-agent infrastructure specifically ([Research and Markets](https://www.researchandmarkets.com/reports/6103459/ai-agents-market-report), 2026).
- **GTM / Distribution:** Rindler distributes through a free chat application and hosted MCP server, converts users into Starter or Teams subscriptions, and directs enterprise buyers to a sales call ([Rindler pricing](https://rindler.ai/pricing), Jul 2026).

## Defensibility

- **Moat today:** Company-reported technical complexity includes per-site typed mappings, automated verification, self-healing configurations, authenticated sessions encrypted with AES-256-GCM, and server-side retry and recovery logic ([Rindler technical description](https://rindler.ai/llms.txt), Jul 2026).
- **Future moat:** [Inferred]: A larger library of verified site mappings and accumulated failure-resolution data could reduce deployment time, but Rindler publishes no mapping count, customer count, or independent reliability history.
- **Market structure:** [Inferred]: No structural barrier is identified at this stage because cloud-browser, scraping, and browser-agent vendors can add typed outputs, MCP endpoints, verification, and session management.
- **Commoditization risk:** Browserbase has raised $67.5 million, Browser Use $17 million, Kernel $22 million, and Firecrawl $16.2 million to build overlapping browser, agent, or web-data infrastructure ([Sacra](https://sacra.com/research/browserbase), [Browser Use](https://browser-use.com/posts/seed-round), [Kernel](https://www.kernel.sh/blog/series-a-announcement/), [Firecrawl](https://www.globenewswire.com/news-release/2025/08/19/3135573/0/en/firecrawl-announces-14-5-million-in-series-a-funding-to-put-web-data-on-tap-for-ai-agents.html), 2025).

## Market & Traction

- **Traction signals:**
  - LinkedIn company page: 306 followers ([LinkedIn](https://www.linkedin.com/company/rindler), Jul 2026).
  - Production availability: multi-tenant ATS workflows, major-bank read/export workflows, and state business-registry lookups are described as running in production ([Rindler technical description](https://rindler.ai/llms.txt), Jul 2026).
  - Company benchmark: approximately 3x fewer failed tasks, 4x faster completion, and 6x cheaper execution than tested open-source agents, with no independent validation disclosed ([Rindler website](https://rindler.ai/), Jul 2026).
  - YC Jobs: 0 active postings ([Y Combinator](https://www.ycombinator.com/companies/rindler), Jul 2026).
- **Competitors (minimum 3, up to 5):**
  - Browserbase ($67.5M raised, revenue unknown): supplies programmable cloud browsers and automation primitives, while Rindler supplies pre-mapped typed site actions ([Sacra](https://sacra.com/research/browserbase), Jun 2025).
  - Browser Use ($17M raised, revenue unknown): provides an open-source browser-agent framework that interprets pages during execution, versus Rindler’s verified site configurations ([Browser Use](https://browser-use.com/posts/seed-round), Mar 2025).
  - Kernel ($22M raised, revenue unknown): provides managed browser infrastructure and is also a Rindler sub-processor, while Rindler adds mappings, records, authentication flows, and MCP tools ([Kernel](https://www.kernel.sh/blog/series-a-announcement/), [Rindler privacy policy](https://rindler.ai/privacy), 2025–2026).
  - Firecrawl ($16.2M raised, revenue unknown): converts public web content into AI-ready data, while Rindler targets authenticated workflows and state-changing actions ([Firecrawl](https://www.globenewswire.com/news-release/2025/08/19/3135573/0/en/firecrawl-announces-14-5-million-in-series-a-funding-to-put-web-data-on-tap-for-ai-agents.html), Aug 2025).
- **Why now:** [Inferred]: MCP’s November 2024 release and subsequent adoption by ChatGPT, Cursor, Gemini, Microsoft Copilot, and more than 10,000 public MCP servers created a common distribution interface for an agent-agnostic web-action service ([Anthropic](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation), Dec 2025).

## Founders & Team

- **Michael Serrano (Founder and CEO):**
  - Background: MIT SB and MEng in Physics and Computer Science, former Roblox machine-learning engineer, and former MIT CSAIL LLM researcher ([Y Combinator](https://www.ycombinator.com/companies/rindler), Jul 2026).
  - Twitter/X: No public account found.
  - LinkedIn: “Rindler (YC S26),” with 2,175 followers ([LinkedIn](https://www.linkedin.com/in/michael-y-serrano), Jul 2026).
  - GitHub: @michaelyserrano; `cold-pocket` has 2 stars ([GitHub](https://github.com/michaelyserrano), Jul 2026).
- **Arthur De Los Santos (Founder):**
  - Background: MIT ’26 in Computer Science/AI/ML and an MIT CSAIL Super UROP researcher ([Y Combinator](https://www.ycombinator.com/companies/rindler), [MIT CSAIL](https://www.csail.mit.edu/person/arthur-de-los-santos), Apr–Jul 2026).
  - Twitter/X: No public account found.
  - LinkedIn: “Rindler (YC S26),” with 617 followers ([LinkedIn](https://www.linkedin.com/in/arthurdelossantos), Jul 2026).
  - GitHub: @arthurdls; `robust-vision-language-navigation` has 1 star ([GitHub](https://github.com/arthurdls), Jul 2026).
- **Co-founder relationship:** Serrano and De Los Santos met at MIT in 2022 and both conducted research at MIT CSAIL ([Rindler technical description](https://rindler.ai/llms.txt), Jul 2026).
- **Founder-market fit:** Their documented work spans machine learning, LLM research, computer vision, vision-language navigation, and production software engineering, which aligns with mapping websites for AI-agent execution ([Y Combinator](https://www.ycombinator.com/companies/rindler), [MIT CSAIL](https://www.csail.mit.edu/person/arthur-de-los-santos), 2026).

## Key Risks

- **Mapping scalability:** Sites are mapped individually, and procurement, healthcare, court, permitting, and several commerce workflows were only mapped on request rather than running in production as of July 2026 ([Rindler technical description](https://rindler.ai/llms.txt), Jul 2026).
- **Technical coverage:** Rindler states that some sites require deeper mappings and that bot-defended or authenticated sites may require credential or cookie capture ([Launch YC](https://www.ycombinator.com/launches/RHN-rindler-turn-any-website-into-an-api-for-ai-agents), Jul 2026).
- **Security and certification:** Rindler stores encrypted session cookies and persists chat and tool-call content but was not SOC 2, HIPAA, or PCI certified as of July 2026 ([Rindler privacy policy](https://rindler.ai/privacy), Jul 2026).
- **Third-party-site restrictions:** Customers are responsible for complying with the terms of websites accessed through Rindler, and some sessions use proxies, browser-profile rotation, or CAPTCHA-solving infrastructure ([Rindler FAQ](https://rindler.ai/faq), Jul 2026).
- **Infrastructure dependence:** Rindler names Kernel as its managed-browser provider and Browserbase as its fallback, placing core execution partly on suppliers that also sell adjacent browser infrastructure ([Rindler privacy policy](https://rindler.ai/privacy), Jul 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader AI-agents market: $8.29B in 2025 and $12.06B forecast for 2026, 45.5% increase ([Research and Markets](https://www.researchandmarkets.com/reports/6103459/ai-agents-market-report), 2026) |
| SAM | No public data found |
| Traction | 306 LinkedIn followers; ATS, major-bank read/export, and state-registry workflows described as in production; company benchmark reports 3x fewer failures, 4x faster completion, and 6x lower execution cost ([LinkedIn](https://www.linkedin.com/company/rindler), [Rindler technical description](https://rindler.ai/llms.txt), Jul 2026) |
| Revenue Signal | $0 Free, $100/month Starter with 100 credits, $1,000/month Teams with 1,000 credits, and custom Enterprise pricing; one credit equals one successful $1 session ([Rindler pricing](https://rindler.ai/pricing), Jul 2026) |
| Founders | Michael Serrano (Founder/CEO): MIT SB/MEng, Roblox ML engineer, MIT CSAIL LLM research; Arthur De Los Santos (Founder): MIT CS/AI/ML ’26, MIT CSAIL Super UROP ([Y Combinator](https://www.ycombinator.com/companies/rindler), [MIT CSAIL](https://www.csail.mit.edu/person/arthur-de-los-santos), 2026) |
| Competitors | Browserbase ($67.5M raised, revenue unknown, cloud browsers); Browser Use ($17M, revenue unknown, live browser-agent framework); Kernel ($22M, revenue unknown, managed browsers); Firecrawl ($16.2M, revenue unknown, public-web extraction) ([Sacra](https://sacra.com/research/browserbase), [Browser Use](https://browser-use.com/posts/seed-round), [Kernel](https://www.kernel.sh/blog/series-a-announcement/), [Firecrawl](https://www.globenewswire.com/news-release/2025/08/19/3135573/0/en/firecrawl-announces-14-5-million-in-series-a-funding-to-put-web-data-on-tap-for-ai-agents.html), 2025) |
| Moat Signals | Per-site typed mappings, automated verification, self-healing configurations, encrypted reusable sessions, and production workflows across ATS, banking, and registries ([Rindler technical description](https://rindler.ai/llms.txt), Jul 2026) |
| Risk Factors | Per-site mapping scalability, incomplete workflow coverage, absent SOC 2/HIPAA/PCI certifications, and managed-browser supplier dependence ([Rindler technical description](https://rindler.ai/llms.txt), [Rindler privacy policy](https://rindler.ai/privacy), Jul 2026) |
| Founder Reach | Michael Serrano: LinkedIn 2,175, GitHub top repo 2 stars; Arthur De Los Santos: LinkedIn 617, GitHub top repo 1 star ([Michael LinkedIn](https://www.linkedin.com/in/michael-y-serrano), [Michael GitHub](https://github.com/michaelyserrano), [Arthur LinkedIn](https://www.linkedin.com/in/arthurdelossantos), [Arthur GitHub](https://github.com/arthurdls), Jul 2026) |
| Distribution Signals | LinkedIn company page: 306 followers; X: @RindlerAI, count not retrievable; Launch YC listing published in July 2026 ([LinkedIn](https://www.linkedin.com/company/rindler), [Rindler technical description](https://rindler.ai/llms.txt), [Launch YC](https://www.ycombinator.com/launches/RHN-rindler-turn-any-website-into-an-api-for-ai-agents), Jul 2026) |
| Emails | founders@rindler.ai, team@rindler.ai ([Rindler technical description](https://rindler.ai/llms.txt), [Rindler GitHub](https://github.com/rindler-ai), Jul 2026) |
