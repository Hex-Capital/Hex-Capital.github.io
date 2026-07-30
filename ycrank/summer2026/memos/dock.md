# Dock

> Multiplayer agent workspace that grows your company without growing?

| Field | Value |
|-------|-------|
| Website | https://trydock.ai |
| YC Page | https://www.ycombinator.com/companies/dock |
| Batch | Summer 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | B2B, AI |
| YC Partner | Brad Flora |
| Emails | hello@trydock.ai, security@trydock.ai |

## The Idea

- **Problem:** Dock targets operators managing multiple AI agents whose work and state are fragmented across separate chat sessions, requiring the operator to coordinate handoffs manually ([YC](https://www.ycombinator.com/companies/dock), Jul 2026).
- **Approach:** Humans and agents jointly edit tables, documents, HTML surfaces, and files in real time, while each agent receives its own identity, API keys, permissions, and attributed activity history ([Dock AI Workspaces](https://trydock.ai/ai-workspaces), Jul 2026).
- **Differentiation:** Unlike CrewAI and Relevance AI, which emphasize building or orchestrating agent teams, Dock supplies the persistent workspace in which independently sourced agents and humans share state through MCP, REST, and webhooks ([Dock GitHub](https://github.com/try-dock-ai); [CrewAI](https://www.globenewswire.com/news-release/2024/10/22/2966872/0/en/CrewAI-Launches-Multi-Agentic-Platform-to-Deliver-on-the-Promise-of-Generative-AI-for-Enterprise.html); [Relevance AI](https://relevanceai.com/blog/the-ai-workforce-revolution-24m-series-b-to-accelerate-our-mission)).
- **Business Model:** Dock offers a free tier, Pro at $19 per organization per month, and Scale at $49 per organization per month, with limits based on actions, agents, webhooks, workspaces, and rows rather than seats or minutes ([Dock Pricing](https://trydock.ai/pricing), Jul 2026).
- **TAM/SAM:** The global AI-agents market was $7.63 billion in 2025 and is forecast to reach $182.97 billion by 2033 at a 49.6% CAGR ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/ai-agents-market-report), 2026); no public SAM estimate was found for shared human-agent workspaces.
- **GTM / Distribution:** Dock distributes through a free web tier, a Mac application, an npm CLI, an MCP server compatible with multiple AI clients, public templates, and a ChatGPT integration ([Dock](https://trydock.ai/); [Dock GitHub](https://github.com/try-dock-ai); [Dock ChatGPT integration](https://trydock.ai/blog/dock-in-chatgpt), May 2026).

## Defensibility

- **Moat today:** Dock exposes an agent-specific identity and authorization model with separate API keys, actor attribution, role checks, event history, MCP, REST, and signed webhooks, but no adoption-based network effect or proprietary-data advantage is publicly documented ([Dock GitHub](https://github.com/try-dock-ai); [Dock Security](https://trydock.ai/security), May 2026).
- **Future moat:** [Inferred]: Historical workspace state, agent permissions, integrations, and audit records could create switching costs, but no retention or workspace-volume evidence verifies this mechanism.
- **Market structure:** No structural barrier prevents workspace vendors, agent orchestration platforms, or model providers from adding shared state, permissions, and audit trails.
- **Commoditization risk:** Dust already markets multiplayer human-agent collaboration, while Relevance AI and CrewAI support multi-agent teams, demonstrating that funded vendors can build overlapping collaboration and orchestration layers ([Dust](https://www.globenewswire.com/news-release/2026/05/18/3296726/0/en/dust-raises-40m-to-make-ai-multiplayer-inside-the-enterprise.html), May 2026; [TechCrunch](https://techcrunch.com/2025/05/06/relevance-ai-raises-24m-series-b-to-help-anyone-build-teams-of-ai-agents/), May 2025).

## Market & Traction

- **Traction signals:**
  - Six public GitHub repositories, with the most-starred repository showing one star ([Dock GitHub](https://github.com/try-dock-ai), Jul 2026).
  - Zero jobs listed ([YC](https://www.ycombinator.com/companies/dock), Jul 2026).
  - Commercial-beta status ([Dock Security](https://trydock.ai/security), May 2026).
  - Mike Molinet had 16,511 LinkedIn followers ([LinkedIn](https://www.linkedin.com/posts/mikemolinet_here-is-something-i-did-not-expect-when-talking-activity-7472658651007176706-AQH-), Jul 2026).
  - Govind Kavaturi had 10,000 LinkedIn followers ([LinkedIn](https://www.linkedin.com/in/govindkavaturi), Jul 2026).
- **Competitors (minimum 3, up to 5):**
  - Dust (more than $60M raised, revenue unknown): enterprise multiplayer AI with deployed agents and organizational-data integrations, versus Dock’s general shared tables, documents, files, and open MCP workspace ([Dust](https://www.globenewswire.com/news-release/2026/05/18/3296726/0/en/dust-raises-40m-to-make-ai-multiplayer-inside-the-enterprise.html), May 2026).
  - Relevance AI ($34M raised, revenue unknown): no-code construction and orchestration of agent workforces, versus Dock’s workspace for agents sourced from multiple clients and frameworks ([Tracxn](https://cdn.tracxn.com/marketing-campaigns/Australia_s_Artificial_Intelligence_Report_-_2025_C7iNdvO9CjZV1IVmHqEvl.pdf), 2026; [TechCrunch](https://techcrunch.com/2025/05/06/relevance-ai-raises-24m-series-b-to-help-anyone-build-teams-of-ai-agents/), May 2025).
  - CrewAI ($18M raised, revenue unknown): developer framework and platform for orchestrating crews and flows, versus Dock’s persistent human-agent collaboration surface ([CrewAI](https://www.globenewswire.com/news-release/2024/10/22/2966872/0/en/CrewAI-Launches-Multi-Agentic-Platform-to-Deliver-on-the-Promise-of-Generative-AI-for-Enterprise.html), Oct 2024).
- **Why now:** [Inferred]: Adoption of MCP across Claude, ChatGPT, Cursor, and other clients now gives one workspace a common connection mechanism for agents from multiple vendors ([Dock](https://trydock.ai/agents), Jul 2026).

## Founders & Team

- **Mike Molinet (Co-founder):**
  - Background: Bucknell engineering graduate and Stanford MBA who co-founded Branch and Thena; YC states Branch scaled past $100 million and LinkedIn reports 500 employees and $100 million ARR ([YC](https://www.ycombinator.com/companies/dock); [LinkedIn](https://www.linkedin.com/in/mikemolinet), Jul 2026).
  - Twitter/X: @mikemolinet; count not retrievable.
  - LinkedIn: “Built Branch to 500 employees and $100M ARR. Now running an entire company alongside…” ([LinkedIn](https://www.linkedin.com/in/mikemolinet), Jul 2026).
  - GitHub: No public personal repos found.
- **Govind Kavaturi (Co-founder):**
  - Background: Former Branch international operator who says he grew revenue from zero to $100 million ARR across multiple continents and co-founded Thena, which raised $8 million ([Govind Kavaturi](https://govindkavaturi.com/about), 2026).
  - Twitter/X: @Govikavaturi, 650 followers ([TwStalker](https://mobile.twstalker.com/rev_ai_42), via search snippet, 2026).
  - LinkedIn: “Something new,” with Dock and YC described in the profile’s About section ([LinkedIn](https://www.linkedin.com/in/govindkavaturi), Jul 2026).
  - GitHub: No public personal repos found.
- **Co-founder relationship:** Molinet hired Kavaturi as Branch’s first international employee, and they worked together there for six years ([LinkedIn](https://www.linkedin.com/in/govindkavaturi), Jul 2026).
- **Founder-market fit:** Molinet and Kavaturi previously built go-to-market and international operations at Branch and later co-founded Thena, providing documented experience operating B2B software companies and collaborating across multiple functions ([YC](https://www.ycombinator.com/companies/dock); [Govind Kavaturi](https://govindkavaturi.com/about), 2026).

## Key Risks

- **Competitive overlap:** Dust, Relevance AI, and CrewAI have raised more than $112 million collectively and offer overlapping multiplayer or multi-agent capabilities ([Dust](https://www.globenewswire.com/news-release/2026/05/18/3296726/0/en/dust-raises-40m-to-make-ai-multiplayer-inside-the-enterprise.html); [Tracxn](https://cdn.tracxn.com/marketing-campaigns/Australia_s_Artificial_Intelligence_Report_-_2025_C7iNdvO9CjZV1IVmHqEvl.pdf); [CrewAI](https://www.globenewswire.com/news-release/2024/10/22/2966872/0/en/CrewAI-Launches-Multi-Agentic-Platform-to-Deliver-on-the-Promise-of-Generative-AI-for-Enterprise.html)).
- **Enterprise-security readiness:** Dock identifies itself as a commercial beta and says native WebAuthn remains on its roadmap, while buyers needing it must contact the company ([Dock Security](https://trydock.ai/security), May 2026).
- **Third-party agent dependency:** Dock does not govern connected third-party agents or applications, so their behavior and security remain subject to external providers and customer-granted permissions ([Dock Security](https://trydock.ai/security), May 2026).
- **Identity ambiguity:** “Dock” is shared by unrelated software products, and the YC page duplicates Mike Molinet’s founder entry while omitting Govind Kavaturi, increasing the risk of search-result and directory-data conflation ([YC](https://www.ycombinator.com/companies/dock), Jul 2026; [Dock Editorial Standards](https://trydock.ai/blog/editorial), 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.63B global AI-agents market in 2025; $182.97B forecast for 2033 at 49.6% CAGR (Grand View Research, 2026) |
| SAM | No public data found |
| Traction | Commercial beta (Dock Security, May 2026); six public GitHub repositories and one star on the leading repository (Dock GitHub, Jul 2026); zero jobs (YC, Jul 2026) |
| Revenue Signal | Free $0 tier, Pro $19/month, Scale $49/month, priced per organization with usage caps (Dock Pricing, Jul 2026) |
| Founders | Mike Molinet (Co-founder): Branch and Thena co-founder, Stanford MBA, Bucknell engineering graduate (YC, Jul 2026); Govind Kavaturi (Co-founder): former Branch international operator and Thena co-founder (Govind Kavaturi, 2026) |
| Competitors | Dust (more than $60M raised, revenue unknown, enterprise multiplayer AI) (Dust, May 2026); Relevance AI ($34M raised, revenue unknown, no-code agent workforces) (Tracxn, 2026); CrewAI ($18M raised, revenue unknown, developer-focused orchestration) (CrewAI, Oct 2024) |
| Moat Signals | Agent-specific identities, API keys, permissions, actor attribution, MCP, REST, and signed webhooks (Dock GitHub; Dock Security, 2026) |
| Risk Factors | Competitive overlap (Dust, Relevance AI, CrewAI, 2024–2026), commercial-beta security posture (Dock Security, May 2026), third-party agent dependency (Dock Security, May 2026) |
| Founder Reach | Mike Molinet: LinkedIn 16,511, Twitter count not retrievable, GitHub no public data found (LinkedIn, Jul 2026); Govind Kavaturi: Twitter 650, LinkedIn 10K, GitHub no public data found (TwStalker via search snippet; LinkedIn, 2026) |
| Distribution Signals | Free web tier, Mac app, npm CLI, MCP server, templates, and ChatGPT integration (Dock; Dock GitHub; Dock blog, 2026) |
| Emails | hello@trydock.ai (Dock GitHub, Jul 2026); security@trydock.ai (Dock Security, May 2026) |
