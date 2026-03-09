# Agentic Fabriq

> Okta for Agents.

| Field | Value |
|-------|-------|
| Website | https://www.agenticfabriq.com |
| YC Page | https://www.ycombinator.com/companies/agentic-fabriq |
| Batch | Winter 2026 (also referenced as "F25" on LinkedIn) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | Sunnyvale, CA, USA |
| Tags | AIOps, DevSecOps, SaaS, API, Infrastructure |
| YC Partner | Harj Taggar |
| Emails | founders@agenticfabriq.com |

## The Idea

**Problem:** As enterprises deploy AI agents that take actions on behalf of employees — querying databases, calling APIs, reading internal documents — there is no unified system to enforce per-user, least-privilege access for those agents across multiple tools and data sources. Without such a layer, agents can access data and perform actions beyond what the employee they represent is authorized to do. 90% of AI agents are over-permissioned relative to their required access (Obsidian Security, 2025 via search snippet). Today, organizations cobble together per-tool OAuth flows, custom RBAC middleware, and manual auditing, creating security and compliance gaps.

**Approach:** Agentic Fabriq provides a single control plane that sits between agentic applications and the tools/data sources they connect to. The platform manages both agent identity and user identity simultaneously, handling token exchange, authentication, and least-privilege enforcement. Specific capabilities include: per-user connections (individual account integrations to approved tools without credential sharing), organization-wide controls (defining which agents/apps can access which tools and which employees can use them), scoped and revocable access with centralized policy management, audit logging of all agent actions, and prebuilt connectors for accelerated integration (YC Launch page).

**Differentiation:** Unlike general-purpose agent tooling platforms like Composio (which focuses on broad agent integration and authentication across 500+ tools) or Nango (which provides user-delegated OAuth flows), Agentic Fabriq is positioned specifically as an organizational governance layer — the "Okta for Agents" analogy emphasizes centralized admin control over what data and tools each employee can access through AI, rather than developer-facing auth plumbing. Compared to Arcade.dev (founded by a former Okta executive, focusing on action-level authorization and execution guardrails), Agentic Fabriq emphasizes the admin/IT perspective of controlling agent access organization-wide rather than securing individual agent actions. Against enterprise incumbents like SailPoint (which added Agent Identity Security as a feature to an existing IAM suite), Agentic Fabriq is a purpose-built agent-native product rather than an extension of traditional IAM.

**Business Model:** No pricing page or revenue data is publicly available. The website requires JavaScript to render and did not expose pricing information. [Inferred]: Most likely monetization path is SaaS subscription (per-seat or per-agent pricing), given the "Okta for Agents" positioning and the B2B SaaS tag. Enterprise-tier pricing with seat-based or consumption-based billing is the standard model in the IAM/identity governance category.

**TAM/SAM:** The global IAM market is estimated at USD 22–26 billion in 2025, depending on source (MarketsandMarkets, Fortune Business Insights, Precedence Research via search snippets). The NHI (Non-Human Identity) access management sub-market is projected to grow from USD 9.45 billion in 2024 to USD 18.71 billion by 2030 at a CAGR of 11.9% (MarketsandMarkets via search snippet). The broader agentic AI market is valued at USD 7.55 billion in 2025, projected to reach USD 199.05 billion by 2034 at a CAGR of 43.84% (Precedence Research via search snippet). No company-specific SAM estimate is publicly available.

**GTM / Distribution:** The YC Launch page includes a call-to-action for early adopters via email (founders@agenticfabriq.com) and a Calendly link for scheduled meetings (YC Launch page). [Inferred]: Most likely initial distribution path is direct outreach to mid-market and enterprise IT/security teams deploying AI agents, leveraging the YC network and founder-led sales. The product can serve both internal enterprise use (employees using agents) and external use (customers using agents), suggesting a potential platform/API-first distribution model.

## Defensibility

At this stage, no publicly documented moat signals (patents, proprietary data assets, or network effects) were found. The product is early and the defensibility would need to develop over time.

[Inferred]: Potential moat could develop via (1) integration network effects — as more enterprise tools are connected through Fabriq, the switching cost for organizations increases; (2) audit log data accumulation — centralized logging of agent actions across an organization creates a compliance asset that is costly to replicate; (3) policy complexity — once organizations codify their agent access policies in Fabriq, migrating those policies to an alternative becomes operationally burdensome. These are unproven at this stage.

**Market structure:** Traditional IAM incumbents (Okta, SailPoint, CyberArk) are adding AI agent identity features to existing platforms. Okta is described as "enterprise-trusted but not optimized for fast-moving AI agent use cases" (DEV Community article, 2026 via search snippet). [Inferred]: The structural barrier for incumbents is architectural — legacy IAM systems are built around human identity lifecycles (provisioning, role assignment, periodic access reviews) and assume human-speed interaction patterns. Agent identity requires real-time, granular, per-action authorization at machine speed with dynamic scoping — retrofitting this into existing IAM architectures may require fundamental re-architecture that incumbent organizations are slow to undertake due to existing customer commitments and backwards-compatibility requirements. No structural barrier is definitively identified from evidence at this stage.

**Commoditization risk:** Multiple well-funded startups are building in the adjacent space: Arcade.dev ($12M seed), Composio ($29M total), OASIS Security ($75M total), and Opti ($20M seed). The underlying technical components (OAuth flows, RBAC, token management) are well-understood. The differentiation lies in the specific product abstraction (admin-facing control plane vs. developer-facing auth SDK vs. security monitoring). The space is early enough that multiple approaches may coexist, but the barrier to building a functionally similar product is moderate.

## Market & Traction

**Traction signals:**
- YC Launch page: 18 upvotes (YC Launch page)
- Twitter/X: @agenticfabriq — ~47 followers, account created October 2025 (X.com via search snippet)
- LinkedIn: Company page exists at linkedin.com/company/agentic-fabriq (LinkedIn via search snippet); follower count not retrievable
- YouTube: Launch video (https://youtu.be/6_iIijfy0Mg) and demo video (https://youtu.be/ayiZ_7d7jCY) available (YC page)
- Funding: $500K (YC standard deal) (search snippet)
- No Product Hunt launch found
- No public GitHub repos found
- No Discord or Slack community found
- No app store presence found
- No press coverage in named publications found
- No public revenue, user count, or customer data found
- Website not fully accessible at time of research (JavaScript-rendered SPA)

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Agentic Fabriq |
|-----------|---------|-------------|---------------------------------------|
| Arcade.dev | $12M seed (March 2025, TechCrunch) | Revenue unknown | Founded by former Okta exec; focuses on action-level agent authorization and execution guardrails rather than organization-wide admin control plane |
| Composio | $29M total ($4M seed + $25M Series A led by Lightspeed, July 2025, SiliconANGLE) | Revenue unknown | Broader agent development platform with 500+ integrations; auth is one feature among many rather than the core product |
| OASIS Security | $75M total ($40M + $35M Series A extension; Accel, Sequoia, Cyberstarts; Jan–May 2024, TechCrunch/SecurityWeek) | Revenue unknown | Focuses on non-human identity management (service accounts, secrets, keys, tokens) across cloud infrastructure; security-first rather than agent-governance-first |
| Opti | $20M seed (Nov 2025, led by YL Ventures/Mayfield, PRNewswire) | Revenue unknown | AI-native IAM platform using GenAI/domain-specific LLMs for identity security; broader enterprise IAM focus rather than agent-specific |
| SailPoint | Public company (NYSE: SAIL) | Public company financials available | Legacy IAM incumbent that added Agent Identity Security as a product extension; breadth of existing IAM suite vs. agent-native startup |

**Why now:** [Inferred]: The rapid enterprise adoption of AI agents in 2024–2025 — driven by the maturation of large language models and frameworks like LangChain, CrewAI, and OpenAI's Agents SDK — created a new class of non-human actors that require identity, authorization, and governance. The specific catalyst is the shift from AI as a "chat interface" (where the human controls all actions) to AI as an "agent" (where the AI autonomously calls APIs and accesses data on behalf of users). This creates a new security surface that did not exist before: enforcing that an agent acting on behalf of Employee A cannot access Employee B's data. Research indicates NHIs grew 44% from 2024 to 2025 (CyberSecurity Tribe, 2025 via search snippet), and 90% of agents are over-permissioned (Obsidian Security, 2025 via search snippet), indicating the problem is acute and growing.

## Founders & Team

**Paulina Xu** — Co-founder
- CS + Physics at MIT (dropped out before second year) (YC page, paulinaxu.com)
- CS/ML research at MIT Kavli Institute, MIT Haystack Observatory, and INAF Padua (YC page, search results)
- Twitter/X: No personal public account found
- LinkedIn: linkedin.com/in/paulina-xu-5bba0821b — "Agentic Fabriq (YC F25)" (LinkedIn via search snippet)
- GitHub: No public repos found
- Scheduling link: calendly.com/paulinaxu/agentic-fabriq-meeting (YC page)

**Matthew Xu** — Co-founder
- AI + Math at MIT (dropped out before second year, age 19) (YC page, LinkedIn via search snippet)
- Research at MIT FutureTech Lab and CSAIL (YC Launch page)
- Twitter/X: No personal public account found
- LinkedIn: linkedin.com/in/matthew-xu-b32a36271 — based in Snellville, GA; profile headline references AI and Math at MIT (LinkedIn via search snippet)
- GitHub: No public repos found

**Co-founder relationship:** Paulina and Matthew met at MIT admit weekend and have been friends since. They were both MIT students (Paulina in CS + Physics, Matthew in AI + Math) who dropped out before their second year to work on Agentic Fabriq together (YC page).

**Founder-market fit:** Both founders have MIT AI research backgrounds — Paulina in CS/ML research across multiple MIT labs and an international observatory (INAF Padua), Matthew in MIT's FutureTech Lab and CSAIL. Their technical training in AI systems positions them to understand the agent infrastructure layer they are building. No prior startup exits, no advisors or board members found beyond YC Partner Harj Taggar. No notable investors beyond Y Combinator found.

## Key Risks

**Heavily funded direct competitors:** Arcade.dev ($12M, founded by former Okta exec), Composio ($29M), OASIS Security ($75M), and Opti ($20M) are all operating in the agent identity/auth space with significantly more capital. Arcade.dev's founder Alex Salazar brings direct Okta domain expertise that maps closely to Agentic Fabriq's "Okta for Agents" positioning (TechCrunch, March 2025). Mitigation: Agentic Fabriq's differentiated admin-facing control plane approach and YC backing may allow it to compete on product vision, but the funding gap is substantial.

**Incumbent entry:** SailPoint has already launched Agent Identity Security (SailPoint website). Okta, Microsoft Entra, and CyberArk have the customer relationships, distribution, and technical resources to add agent identity features to existing IAM platforms. MarketsandMarkets names Microsoft and Ping Identity as leading players in the NHI access management market (MarketsandMarkets via search snippet). An add-on feature from an incumbent that enterprises already use could undercut a standalone product.

**First-time founders with no prior exits:** Both founders dropped out of MIT before their second year. While their AI research backgrounds are relevant, neither has documented prior company-building, go-to-market, or enterprise sales experience. The target customer (enterprise IT/security) typically requires credibility signals and longer sales cycles that favor experienced teams.

**Brand confusion:** Multiple unrelated companies use "Fabriq" in their names — Fabriq Labs (LinkedIn), Fabriq AI (fabriqai.com), Fabriq Media Group, fabriq_tech — which could create confusion in search results and market awareness. The "fabriq" GitHub org (github.com/fabriq) is an unrelated open-source project.

**Dependency on agent adoption pace:** The product's value proposition assumes widespread enterprise adoption of autonomous AI agents. If enterprise agent deployment stalls or remains limited to narrow use cases, the urgency for a dedicated agent governance layer diminishes. The market could remain a feature of existing IAM platforms rather than supporting a standalone product.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | IAM market: ~$22–26B in 2025 (MarketsandMarkets, Fortune Business Insights, Precedence Research via search snippets); NHI market: $9.45B in 2024, projected $18.71B by 2030 at 11.9% CAGR (MarketsandMarkets via search snippet); Agentic AI market: $7.55B in 2025, projected $199B by 2034 at 43.8% CAGR (Precedence Research via search snippet) |
| SAM | No public data found |
| Traction | 18 upvotes (YC Launch page); ~47 Twitter followers (X.com, Oct 2025); launch + demo videos on YouTube |
| Revenue Signal | No public data found |
| Founders | Paulina Xu (Co-founder): MIT CS+Physics, ML research at MIT Kavli/Haystack/INAF Padua. Matthew Xu (Co-founder): MIT AI+Math, research at MIT FutureTech/CSAIL. Both MIT dropouts. |
| Competitors | Arcade.dev ($12M seed, revenue unknown, action-level agent auth by ex-Okta exec), Composio ($29M total, revenue unknown, broad agent platform with 500+ integrations), OASIS Security ($75M total, revenue unknown, NHI management for cloud infra), Opti ($20M seed, revenue unknown, AI-native enterprise IAM), SailPoint (public, agent identity as feature extension of IAM suite) |
| Moat Signals | No public data found. Potential integration lock-in and policy complexity switching costs could develop. |
| Risk Factors | Well-funded direct competitors (Arcade $12M, Composio $29M, OASIS $75M, Opti $20M), incumbent entry (SailPoint, Okta, Microsoft), first-time founders, brand confusion with multiple "Fabriq" entities |
| Founder Reach | Paulina Xu: no personal Twitter found, LinkedIn profile exists; Matthew Xu: no personal Twitter found, LinkedIn profile exists; Company Twitter @agenticfabriq: ~47 followers |
| Distribution Signals | No public data found beyond YC Launch page (18 upvotes) and company Twitter (~47 followers) |
| Emails | founders@agenticfabriq.com |
