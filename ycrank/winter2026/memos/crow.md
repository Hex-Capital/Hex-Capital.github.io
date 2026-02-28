# Crow

> Let users control your app through chat

| Field | Value |
|-------|-------|
| Website | https://www.usecrow.ai/ |
| YC Page | https://www.ycombinator.com/companies/crow |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Generative AI, Chatbot, Enterprise, AI Assistant |
| YC Partner | Jared Friedman |
| Emails | aryan@usecrow.ai (YC company page) |

## The Idea

**Problem:** Software companies with complex, menu-heavy applications face user experience friction — users must learn UI navigation to accomplish tasks. The target segment is software companies with 5,000–200,000 daily active users (YC company page). Current solutions include traditional chatbots (which answer questions but do not execute actions), digital adoption platforms like WalkMe and Whatfix (which overlay guidance on UIs), and custom-built AI copilots (which require significant engineering investment).

**Approach:** Crow provides an embeddable AI agent that connects to a product's APIs (via OpenAPI specs or MCP servers) and data sources, enabling end-users to type natural language commands instead of navigating menus. The agent executes real actions within the host application — not just answering questions but performing workflows. The company claims deployment in under a week with no product rebuilding required. The platform includes conversation tracking, observability, guardrails, and workflow definition capabilities (YC company page). Crow states it does not store customer data; everything runs through a managed proxy that handles authentication, rate limiting, schema validation, and request logging, with the option to route to the customer's own LLM provider (Product Hunt discussion, Nov 30, 2025).

**Differentiation:** Unlike traditional chatbots that only answer questions, Crow executes real product actions. Compared to digital adoption platforms (WalkMe, Whatfix), which overlay step-by-step walkthroughs on existing UIs, Crow replaces navigation entirely with conversational control. Compared to Command AI (acquired by Amplitude in Oct 2024), which provided in-app user assistance including a copilot, Crow positions itself as enabling full action execution via chat rather than search-and-guidance. Compared to CopilotKit (open-source framework), Crow is a managed service requiring no framework integration — it connects to existing APIs rather than requiring developers to build copilot logic. Compared to Intercom's Fin AI agent, which focuses on customer support resolution, Crow targets in-product task execution for end-users rather than support ticket deflection.

**Business Model:** The pricing page exists at usecrow.ai/pricing but rendered content was not retrievable at time of research. Search snippets indicate developers with side projects can try Crow for free (usecrow.ai/pricing via search snippet). [Inferred]: Most likely monetization path is a tiered SaaS model with usage-based pricing (per conversation or per active user), given the target customer segment of 5K–200K DAU software companies and the presence of a free tier for small projects.

**TAM/SAM:** The global conversational AI market was estimated at $11.58 billion in 2024, projected to reach $41.39 billion by 2030 at 23.7% CAGR (Grand View Research, 2025 via search snippet). The enterprise AI agents and copilots market was estimated at $5 billion+ and projected to reach $13 billion by end of 2025 at 150%+ YoY growth (CB Insights via search snippet). No public SAM data found specific to the in-app AI copilot sub-segment.

**GTM / Distribution:** [Inferred]: Most likely distribution path is developer-led bottom-up adoption, given the free tier for side projects, the technical integration via OpenAPI specs/MCP servers, the "deploy in under a week" positioning, and the target of software companies with existing APIs. The app portal at app.usecrow.ai suggests a self-serve onboarding flow.

## Defensibility

No defensibility signals found in public sources at this stage. [Inferred]: Potential moat could develop via accumulated conversation data and workflow patterns across customer deployments, which could improve agent accuracy and action execution over time. Switching costs may build as customers define guardrails, workflows, and integrations specific to Crow's platform. However, these are unproven at this stage.

**Market structure:** No structural barrier identified at this stage. Large incumbents like Intercom (which built Fin AI) and Amplitude (which acquired Command AI) have demonstrated willingness to build or acquire in-app AI agent capabilities. [Inferred]: The potential structural gap is that incumbent SaaS companies would need to build generic, cross-product AI agent infrastructure rather than focusing on their core product domains. A pure-play embeddable agent may iterate faster on the API-connected action execution layer than a support platform (Intercom) or analytics platform (Amplitude) adding it as a secondary feature.

**Commoditization risk:** The core capability — connecting an LLM to APIs via OpenAPI specs and executing actions — is technically reproducible. CopilotKit offers an open-source framework for building in-app copilots with 10,000+ GitHub stars (DEV Community, Oct 2024). Major LLM providers (OpenAI, Anthropic) offer function-calling capabilities that lower the barrier to building similar agents. The managed-service wrapper (proxy, auth, rate limiting, observability) adds value but is not deeply novel.

## Market & Traction

**Traction signals:**
- Product Hunt: Listed as "Crow: Make your product AI-native via AI Copilot," launched November 30, 2025 (Product Hunt). Upvote count not retrievable.
- Twitter/X: @usecrow_ai (X.com). Follower count not retrievable (JavaScript rendering).
- LinkedIn: Company page "Crow (YC W26)" (linkedin.com/company/use-crow-ai). Follower count not retrievable.
- Funding: No public funding data found beyond the standard YC deal (Extruct AI).
- No public revenue, user count, or customer data found.

**Competitive landscape:**

1. **Command AI (fka CommandBar)** — YC S20. Raised $23.8M total (TechCrunch, Apr 2022). Hit $3.3M revenue in 2024 with a 39-person team (Latka). Acquired by Amplitude for north of $45M (TechCrunch, Oct 2024). Key differentiator vs. Crow: Command AI focused on in-app search, nudges, and user onboarding in addition to copilot; now integrated into Amplitude's analytics platform. No longer available as a standalone product.

2. **CopilotKit** — Open-source framework (MIT license) for building in-app AI copilots. Raised $570K; SignalFire is a lead investor (Tracxn via search snippet). 10,000+ GitHub stars (DEV Community, Oct 2024). Key differentiator vs. Crow: CopilotKit is a developer framework requiring code-level integration (React/Angular), while Crow is a managed service connecting to existing APIs. CopilotKit is self-hostable; Crow is a hosted platform.

3. **Intercom (Fin AI Agent)** — Raised $240.8M total (Sacra via search snippet). $343M revenue in 2024, up 25% YoY (Sacra). Fin AI agent reached $100M ARR with outcome-based pricing at $0.99/resolved ticket (Sacra; Growth Unhinged). Key differentiator vs. Crow: Intercom's Fin is focused on customer support resolution; Crow targets in-product task execution for end-users across the full UI.

4. **Whatfix** — Raised $328M total including $125M Series E led by Warburg Pincus (Whatfix press release, Sep 2024). $138.8M revenue in 2024 (Latka via search snippet); targeting $150M ARR by mid-2025 (Inc42). Key differentiator vs. Crow: Whatfix is a digital adoption platform with walkthroughs, tooltips, and training overlays; Crow replaces UI navigation with conversational action execution.

5. **WalkMe** — Raised $307.5M total. Acquired by SAP for $1.5B (TechCrunch, Jun 2024; completed Sep 2024). Q1 2024 revenue of $68.6M (WalkMe IR). Key differentiator vs. Crow: WalkMe focuses on digital adoption via step-by-step guidance overlays; now part of SAP's enterprise suite. Crow takes a chat-first action execution approach rather than guided walkthroughs.

**Why now:** [Inferred]: The enabling change is the maturation of LLM function-calling capabilities (OpenAI function calling launched Jun 2023; subsequent improvements in reliability and latency through 2024–2025) and the emergence of standardized API description formats (OpenAPI, MCP servers) that allow an AI agent to reliably interpret and execute actions against arbitrary product backends. Prior chatbot generations could answer questions but could not reliably execute multi-step workflows against APIs. The availability of sub-second LLM inference and improved tool-use accuracy crossed a threshold making real-time, action-executing copilots viable for production use.

## Founders & Team

**Aryan Vij** — Co-founder & CEO
- UC Berkeley, EECS (LinkedIn)
- Ex-military officer, Singapore Armed Forces — Artillery Instructor mentoring Officer Cadets (LinkedIn via search snippet)
- Previously: Engineer at Qualcomm; engineer at Shasta Health (YC S23, hybrid physical therapy platform); engineer at Frontdesk (PearVC-backed) (LinkedIn via search snippet)
- Twitter/X: @aryanvij02 — follower count not retrievable
- LinkedIn: linkedin.com/in/aryanvij — "Co-Founder @ Crow (YC W26) | Berkeley EECS"
- GitHub: No public repos found under confirmed handle
- Personal website: aryanvij.com

**Jai Bhatia** — Co-founder & CTO
- UC Berkeley, Computer Science — Regents' and Chancellor's Scholar (LinkedIn)
- Previously: Intern at TikTok (AI, data science, product strategy); SDE Intern at Amazon Ads (Demand-Side Platform); Cloud and Data Engineer Intern at PwC; Software Engineering Intern at Tesla; Software Engineer at Base; incoming Backend SWE at Percipient.ai (LinkedIn via search snippet; ContactOut via search snippet)
- Twitter/X: No confirmed personal handle found
- LinkedIn: linkedin.com/in/jai-bhatia- — "Co-Founder @ Crow (YC W26) | CS @ Berkeley"
- GitHub: github.com/jaixbhatia — 15 repos, 4 followers. Notable repos: VoxDeck (Google Slides vibe-coding tool, Python), StreetCred (credit scoring via RA-TLS in TEE, TypeScript, 1 star) (GitHub)

**Co-founder relationship:** Both founders attended UC Berkeley (Aryan in EECS, Jai in CS). Per the YC company page: "Aryan and Jai met on the first day of college at UC Berkeley, bonding over college football" before beginning to code together. Both have worked at AI startups building conversational interface infrastructure (YC company page description).

**Founder-market fit:** Both founders have direct experience building at AI-focused companies — Aryan at Shasta Health (YC S23) and Qualcomm, Jai across TikTok, Amazon, Tesla, and PwC — giving them exposure to production AI systems, enterprise data infrastructure, and API integration patterns. Their Berkeley EECS/CS training and internship breadth across major tech companies provide technical grounding for building an AI agent that must reliably connect to diverse product APIs. No advisors, board members, or notable angel investors found beyond YC Partner Jared Friedman.

## Key Risks

**Name collision / brand disambiguation:** "Crow" is a common English word shared by multiple companies across domains: Crow Holdings (real estate, 28K+ LinkedIn followers), Black Crow AI (e-commerce AI), Crow.app (Stripe pricing tool on Product Hunt), usecrow.com (API monitoring — a different company), and CrowAI (enterprise CRO). This creates SEO competition and brand confusion risk, particularly in AI-adjacent categories.

**Commoditization via LLM providers and open-source:** CopilotKit offers an MIT-licensed open-source framework for in-app AI copilots with 10,000+ GitHub stars (DEV Community, Oct 2024). OpenAI, Anthropic, and Google all provide function-calling APIs that enable developers to build similar action-executing agents. The managed-service value (proxy, auth, observability) may not constitute sufficient differentiation if LLM providers add turnkey integration tooling.

**Incumbent consolidation in the space:** Command AI was acquired by Amplitude (Oct 2024, TechCrunch), WalkMe was acquired by SAP for $1.5B (Sep 2024, TechCrunch), and Intercom built Fin AI to $100M ARR internally (Sacra). This indicates well-resourced incumbents are actively acquiring or building in-app AI agent capabilities, compressing the window for an independent startup to establish market position.

**API reliability and action safety:** Executing real actions (not just answering questions) via an AI agent against production APIs introduces risk of unintended actions, data mutation, or workflow errors. Guardrails and schema validation mitigate this, but a single high-profile incident at a customer could damage trust in the category. This is a technical feasibility risk at scale rather than at the demo level.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $11.58B conversational AI market (Grand View Research, 2024, 23.7% CAGR to $41.39B by 2030 via search snippet); $5B+ enterprise AI agents & copilots market (CB Insights, 2024 via search snippet) |
| SAM | No public data found |
| Traction | Product Hunt launch Nov 30, 2025 (Product Hunt); upvote count not retrievable. No public user, revenue, or customer data found. |
| Revenue Signal | Free tier for developers with side projects (usecrow.ai/pricing via search snippet). No pricing tiers or revenue data publicly available. |
| Founders | Aryan Vij (CEO): UC Berkeley EECS, ex-Qualcomm, ex-Shasta Health (YC S23), ex-Singapore Armed Forces. Jai Bhatia (CTO): UC Berkeley CS (Regents' Scholar), ex-TikTok, ex-Amazon Ads, ex-Tesla, ex-PwC. |
| Competitors | Command AI ($23.8M raised, $3.3M revenue 2024, acquired by Amplitude for ~$45M+; in-app search + nudges + copilot). CopilotKit ($570K raised, revenue unknown; open-source framework vs. managed service). Intercom ($240.8M raised, $343M revenue 2024; support-focused Fin AI vs. Crow's in-product task execution). Whatfix ($328M raised, $138.8M revenue 2024; digital adoption walkthroughs vs. conversational action). WalkMe ($307.5M raised, acquired by SAP for $1.5B; guided overlays vs. chat-first execution). |
| Moat Signals | No public data found |
| Risk Factors | Name collision with multiple "Crow"-branded companies, commoditization via open-source (CopilotKit) and LLM function-calling APIs, incumbent consolidation (Command AI acquired, WalkMe acquired, Intercom Fin at $100M ARR) |
| Founder Reach | Aryan Vij: Twitter @aryanvij02 (count not retrievable), LinkedIn 500+ (estimated). Jai Bhatia: Twitter not found, LinkedIn (count not retrievable), GitHub 4 followers / 15 repos. |
| Distribution Signals | Product Hunt launch Nov 30, 2025 (upvote count not retrievable). Self-serve app portal at app.usecrow.ai. |
| Emails | aryan@usecrow.ai (YC company page) |
