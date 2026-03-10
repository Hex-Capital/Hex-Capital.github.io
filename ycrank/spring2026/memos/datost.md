# Datost

> AI data analyst in Slack. Democratize data.

| Field | Value |
|-------|-------|
| Website | https://www.datost.com |
| YC Page | https://www.ycombinator.com/companies/datost |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Analytics |
| Team Size | 2 |
| Location | San Francisco, United States (Tracxn via search snippet) |
| Tags | B2B, Analytics, AI Assistant |
| YC Partner | David Lieb |
| Emails | No public data found |

## The Idea

**Problem:** Non-technical team members in product, operations, and finance need to query databases and analyze data but lack SQL skills or direct access to data infrastructure. Today they rely on data teams for ad-hoc queries, creating bottlenecks and delays. The workflow friction is compounded when insights are needed mid-conversation — analysts must context-switch out of Slack into separate BI tools, write queries, and relay results back.

**Approach:** Datost deploys an AI data analyst agent that lives inside Slack. It connects to databases, data warehouses, documents, codebases, and collaboration tools, then answers analytical questions posed in natural language directly within chat workflows. Per the company description, the agent "has its own computer" — meaning it can autonomously execute queries, generate visualizations, and build reports without the user writing SQL or leaving their workspace (YC page; Tracxn via search snippet).

**Differentiation:** Unlike standalone BI tools (Looker, Metabase, Tableau) that require users to leave their workflow, Datost is embedded natively in Slack. Compared to Julius AI (web-based conversational data analyst with 2M+ users), Datost's differentiation is the Slack-native form factor and its ability to connect to internal codebases and docs — not just databases. Compared to Scoop Analytics (also Slack-native, $3.5M seed), Datost emphasizes broader connectivity including codebases and data lakes. Compared to Zenlytic (AI analytics agent "Zoe"), Datost targets the chat workflow rather than a dedicated analytics interface.

**Business Model:** No pricing page is publicly visible on datost.com. [Inferred]: Most likely monetization path is a per-seat or per-workspace SaaS subscription, consistent with Slack-native B2B analytics tools (e.g., Scoop Analytics).

**TAM/SAM:** The broader conversational AI market was valued at USD 14.79 billion in 2025, projected to reach USD 82.46 billion by 2034 at a CAGR of 21.00% (Fortune Business Insights, 2025 via search snippet). An alternative estimate sizes the market at USD 11.58 billion in 2024, projected to reach USD 41.39 billion by 2030 at a CAGR of 23.7% (Grand View Research, 2024 via search snippet). No specific sub-segment TAM data was found for "conversational analytics AI in Slack" specifically. [Inferred]: The serviceable market is the subset of data-driven teams using Slack as their primary collaboration tool — likely a fraction of the overall business intelligence and analytics market.

**GTM / Distribution:** [Inferred]: Most likely distribution path is bottom-up product-led growth via Slack's app marketplace and direct team adoption. The Slack-native form factor enables viral spread within organizations as non-technical users share the bot's outputs in channels, creating organic visibility.

## Defensibility

No defensibility signals found in public sources at this stage. [Inferred]: Potential moat could develop via accumulated context — as the agent indexes a company's docs, codebase, databases, and Slack history, it builds an organization-specific knowledge graph that deepens over time, increasing switching costs. Network effects within a workspace (more users asking questions → better understanding of team terminology and data schemas) could also contribute. However, these are unproven at this stage.

**Market structure:** [Inferred]: Traditional BI incumbents (Tableau/Salesforce, Looker/Google, Power BI/Microsoft) are built around dashboard-centric workflows with large professional services and training ecosystems. Embedding an AI analyst natively in Slack would cannibalize their dashboard consumption model. Microsoft is the exception — as owner of both Power BI and Teams (a Slack competitor), Microsoft could build a comparable Teams-native experience, but their incentive is to drive Teams adoption rather than invest in Slack integrations. Slack itself (Salesforce) could build this natively, creating a direct platform risk.

**Commoditization risk:** The core capability — LLM-powered natural language to SQL with Slack integration — is technically reproducible. Open-source text-to-SQL projects exist (e.g., DIN-SQL, DAIL-SQL). Any team with LLM API access and Slack API knowledge could build a basic version. The barrier is in reliability at scale across diverse schemas, multi-step reasoning, and deep integration with heterogeneous data sources (warehouses, docs, codebases simultaneously).

## Market & Traction

**Traction signals:**
- No revenue, user counts, or growth metrics found in public sources.
- No Product Hunt listing found.
- No press coverage in named publications found.
- No app store listings or Chrome extension found.
- GitHub organization (github.com/DatostApp): 1 public repo (`datost-demo`, TypeScript/Remotion project), 0 stars, 0 forks, last updated March 9, 2026 (GitHub via search snippet).
- Company Twitter/X: @datosthq (x.com/datosthq) — follower count not retrievable.
- Company LinkedIn: linkedin.com/company/datost — follower count not retrievable.
- No job postings found on YC Work at a Startup or other boards.
- No Discord or Slack community found.
- Tracxn profile exists, noting "Datost has not raised any funding yet" beyond YC standard deal (Tracxn via search snippet).

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Datost |
|-----------|---------|-------------|-------------------------------|
| **Julius AI** | ~$11M total; $10M seed led by Bessemer Venture Partners (TechCrunch, Jul 2025) | Revenue unknown; 2M+ users, 10M+ visualizations (julius.ai) | Web-based conversational data analyst; broader consumer/prosumer audience vs. Datost's Slack-native enterprise focus |
| **Zenlytic** | $15.4M total; $9M Series A led by M13 (Zenlytic blog, 2024) | Revenue unknown | Dedicated analytics interface with AI agent "Zoe"; targets BI replacement vs. Datost's embedded-in-chat approach |
| **Scoop Analytics** | $3.5M seed led by Ridge Ventures (Scoop blog, Jun 2024) | Revenue unknown | Also Slack-native AI analyst; closest direct competitor. Datost differentiates via broader connectivity (codebases, data lakes, docs) |
| **Chata.ai** | ~$20M total; $10M Series A (Calgary.Tech, Jan 2026) | $6.3M revenue in 2024 with 48 employees (GetLatka via search snippet) | Conversational analytics focused on finance vertical; longer track record (founded 2016) vs. Datost's horizontal approach |
| **Narrator** | $13.7M total; $6.2M Series A led by Initialized Capital (TechCrunch, Sep 2020) | $3M in 2024, 22 employees (GetLatka via search snippet) | Data modeling platform replacing star schema; more infrastructure-level vs. Datost's end-user query layer |

**Why now:** [Inferred]: The convergence of two factors in 2024-2025 opened this opportunity: (1) LLM reasoning capabilities crossed a reliability threshold for complex multi-step SQL generation and data interpretation, making natural-language-to-insight workflows viable for production use rather than demos; (2) the "agentic AI" paradigm shift — models that can autonomously use tools, browse files, and execute code — enabled the "AI analyst with its own computer" framing, where the agent doesn't just translate a question to SQL but can iteratively debug, explore schemas, and synthesize across heterogeneous sources.

## Founders & Team

**Maceo Cardinale Kwik** — Co-founder & CEO
- Age 21 (YC page).
- Education: Beacon School (NYC); certificate from Baruch College in fundamental business principles (ZoomInfo via search snippet).
- Previously: Software Engineer at Traba (labor marketplace startup) (ZoomInfo via search snippet); Software Engineer at SimonComputing (application engineering and system design) (search snippet); Software Engineer & Intern at Performant Software (web application development) (search snippet); Co-Founder of Lighthouse Startups (non-profit) (search snippet).
- Twitter/X: @maceock (x.com/maceock) — follower count not retrievable.
- LinkedIn: linkedin.com/in/maceo-cardinale-kwik — headline listed as "Software Engineer Intern" (likely outdated) (LinkedIn via search snippet).
- GitHub: No confirmed personal account. Company org: github.com/DatostApp.

**Jason Wang (Jason Hy Wang)** — Co-founder
- Education: Bachelor's degree in Computer Engineering, University of Toronto (personal website via search snippet).
- Previously: Software Engineer at Traba (ZoomInfo via search snippet); Software Engineer at Confluent (Data Governance Team, data-in-motion platform) (search snippet); Contributor to Red Hat's Eclipse IDE & JDT Language Server Team (enterprise open source) (search snippet).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/jasonhy-wang/ — listed in search results as "Jason Wang - Traba" (LinkedIn via search snippet).
- GitHub: Personal site references github.com/jason98wang but URL returned 404. No confirmed active account.

**Co-founder relationship:** Both Maceo Cardinale Kwik and Jason Wang previously worked at Traba as software engineers (ZoomInfo via search snippet for both), indicating a prior professional relationship at the same company.

**Founder-market fit:** Both founders have software engineering backgrounds with experience at data infrastructure companies — Jason Wang's tenure on Confluent's Data Governance Team provides direct domain expertise in data streaming and governance. Their shared experience at Traba, a labor marketplace, would have exposed them to operational analytics needs. Maceo's non-profit founding (Lighthouse Startups) suggests entrepreneurial initiative. Neither founder has a documented prior exit or deep analytics/BI-specific product background. No advisors, board members, or notable investors beyond YC and David Lieb (YC Group Partner) were found.

## Key Risks

**Slack platform dependency:** Datost's core value proposition is embedded in Slack's ecosystem. Slack (owned by Salesforce) could build or acquire native AI analytics capabilities, restrict API access, or change marketplace terms. Salesforce already offers Einstein AI across its product suite, and a Slack-native analytics feature would be a natural extension. This creates both competitive and distribution risk.

**Direct competitor overlap with Scoop Analytics:** Scoop Analytics ($3.5M seed, Ridge Ventures, Jun 2024) occupies the same "AI analyst in Slack" positioning. Scoop has a funding head start and is already in market. Differentiation on "broader connectivity" (codebases, data lakes) must translate into tangible user value to avoid commoditized positioning.

**Data security and enterprise trust barrier:** An AI agent that connects to databases, data lakes, codebases, and internal documents simultaneously requires broad access permissions. Enterprise security teams may resist granting a pre-seed startup's Slack bot read access to production databases and proprietary code. SOC 2, GDPR compliance, and enterprise SSO are table-stakes requirements that are resource-intensive for a 2-person team.

**LLM accuracy in production analytics:** Natural-language-to-SQL systems are known to produce incorrect queries on complex schemas without user awareness. For analytics use cases — where outputs inform business decisions — silent errors carry high consequence. Ensuring reliability across diverse, undocumented database schemas is an unsolved technical challenge at scale.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Conversational AI market: USD 14.79B in 2025, projected USD 82.46B by 2034, CAGR 21.0% (Fortune Business Insights, 2025 via search snippet) |
| SAM | No public data found for Slack-native analytics sub-segment |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Maceo Cardinale Kwik (CEO): SWE at Traba, SimonComputing, Performant Software; Baruch College. Jason Wang (Co-founder): SWE at Confluent (Data Governance), Traba; BEng Computer Engineering, U of Toronto. |
| Competitors | Julius AI (~$11M raised, revenue unknown, web-based vs. Slack-native); Zenlytic ($15.4M raised, revenue unknown, dedicated analytics UI); Scoop Analytics ($3.5M raised, revenue unknown, closest Slack-native competitor); Chata.ai (~$20M raised, $6.3M revenue 2024, finance-vertical focus); Narrator ($13.7M raised, $3M revenue 2024, data modeling layer) |
| Moat Signals | No public data found |
| Risk Factors | Slack platform dependency, direct competitor overlap (Scoop Analytics), enterprise data security trust barrier, LLM accuracy in production analytics |
| Founder Reach | Maceo: Twitter @maceock (count not retrievable), LinkedIn linkedin.com/in/maceo-cardinale-kwik. Jason: Twitter not found, LinkedIn linkedin.com/in/jasonhy-wang/. GitHub org: github.com/DatostApp (0 stars). |
| Distribution Signals | No public data found |
| Emails | No public data found |
