# Datost

> AI data analyst in Slack. Democratize data.

| Field | Value |
|-------|-------|
| Website | https://www.datost.com |
| YC Page | https://www.ycombinator.com/companies/datost |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Analytics |
| Team Size | 2 |
| Location | New York City (YC page, founder profile) |
| Tags | B2B, Analytics, AI Assistant |
| YC Partner | David Lieb |
| Emails | No public data found |

## The Idea

**Problem:** Non-technical team members in data-driven organizations cannot self-serve on data questions. They depend on data analysts or engineers to write SQL, pull reports, and interpret results. This creates bottlenecks—questions queue up and analysts spend time on ad-hoc requests rather than strategic work. Current solutions require users to leave their workflow (e.g., switch to a BI dashboard or spreadsheet tool). The company's tagline frames this as: "Query databases, analyze data, and get answers right where your team works" (datost.com).

**Approach:** Datost is an AI agent that operates as a virtual data analyst embedded in Slack. It connects to docs, Slack messages, databases, data lakes, and codebases, and can be queried conversationally. The YC description emphasizes it is "the first AI data analyst that has its own computer"—meaning the agent has its own execution environment to run queries and code rather than merely generating SQL text (YC page). [Inferred]: This "own computer" framing suggests a sandboxed compute layer where the agent writes and executes code autonomously, differentiating it from prompt-to-SQL tools that require manual execution.

**Differentiation:** Unlike standalone BI tools (Tableau, Looker) or spreadsheet replacements (Equals), Datost meets users in Slack—the tool teams already inhabit. Unlike prompt-to-SQL tools (Defog.ai), Datost claims an autonomous execution environment. Unlike Julius AI (consumer-oriented, upload-based), Datost integrates directly with enterprise data infrastructure (databases, data lakes, codebase). [Inferred]: The Slack-native distribution is the key wedge—reducing adoption friction by eliminating context-switching.

**Business Model:** No pricing page is publicly visible on datost.com. [Inferred]: Most likely monetization path is a per-seat or per-workspace SaaS subscription, consistent with B2B Slack-integrated tools (e.g., similar to how Statsbot or other Slack analytics bots have priced).

**TAM/SAM:**
- Global BI & analytics market: $34.04B in 2024, projected $65.14B by 2032, CAGR 8.45% (Verified Market Research, 2024 via search snippet).
- AI in data analytics market: $31.22B in 2025, projected $310.97B by 2034, CAGR 29.10% (Precedence Research, 2025 via search snippet).
- [Inferred]: SAM is the subset of organizations using Slack (estimated 750K+ paying customers per Salesforce disclosures) that have structured data infrastructure—likely a low single-digit billions segment.

**GTM / Distribution:** [Inferred]: Primary distribution path is Slack App Directory listing plus bottom-up adoption within engineering and data teams. The Slack-native form factor enables viral spread within organizations—one user asks a question in a channel, others see the value immediately. YC batch network provides initial customer introductions.

## Defensibility

- **Data context accumulation:** As Datost ingests an organization's docs, Slack history, databases, and codebase, it builds a proprietary understanding of that organization's data schema, terminology, and context. [Inferred]: This creates switching costs—a replacement tool would need to re-learn the organization's data landscape.
- **Workflow embedding:** Slack-native delivery means Datost becomes part of daily communication patterns. [Inferred]: Switching costs increase as teams build habits around querying data in Slack.
- No patents, regulatory moats, or network effects identified in public sources.

**Market structure:** Incumbent BI vendors (Tableau/Salesforce, Looker/Google, Power BI/Microsoft) have invested in AI features (Tableau Pulse, Looker AI). However, these are additive features within dashboard-centric products. [Inferred]: The structural barrier is business model cannibalization—incumbents monetize seat-based dashboard licenses and cannot easily shift to a chat-first paradigm that eliminates the need for dashboards. Salesforce owns both Slack and Tableau but has not unified them into a single AI analyst product as of this writing.

**Commoditization risk:** The core capability (LLM + SQL generation + execution) is reproducible. OpenAI, Anthropic, and open-source models can all generate SQL from natural language. Any Slack bot developer could build a basic version. [Inferred]: The defensibility must come from the depth of multi-source integration (docs + Slack + databases + code), execution reliability, and enterprise trust features (permissions, audit trails) rather than the base AI capability.

## Market & Traction

**Traction signals:**
- No public revenue data found.
- No public user counts found.
- No Product Hunt launch found.
- No press coverage in named publications found.
- Company Twitter/X: @datosthq (datost.com); follower count not retrievable.
- Founder Twitter/X: @maceock (YC page); follower count not retrievable.
- Company LinkedIn: linkedin.com/company/datost (YC page); follower count not retrieved.
- GitHub org: github.com/DatostApp — 1 public repo ("datost-demo," TypeScript, 0 stars, 1 fork, last updated March 11, 2026) (GitHub).
- No job postings listed on YC page (YC page).
- No app store, Chrome Web Store, or download data found.

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Datost |
|---|---|---|
| **Julius AI** (YC W22) | $10M seed led by Bessemer (TechCrunch, Jul 2025); 2M+ users, 10M+ visualizations | Consumer/prosumer-oriented; users upload CSVs/files. Datost targets enterprise teams in Slack with direct DB/data lake connections. |
| **Defog.ai** (YC W23) | $2.7M total, $2.2M seed led by Script Capital (Defog blog, 2023) | Open-source LLMs for text-to-SQL; enterprise-focused. Deploys as API/SDK, not Slack-native. Datost differentiates via Slack-first UX and multi-source context. |
| **Narrative BI** | $1.44M total pre-seed (Founders.ai, 2020; Elysium VC, 2021); $1.1M revenue reported (Latka, 2025 via search snippet) | Automated narrative generation from marketing/growth data (Google Analytics, Facebook Ads). Datost targets general-purpose data analysis across databases and code, not marketing-specific. |
| **Equals** | $23M total, $16M Series A led by a16z (TechCrunch, Nov 2022) | Next-gen spreadsheet with built-in DB connections. Datost is chat-first in Slack vs. spreadsheet-first; different interaction paradigm. |

**Why now:**
- [Inferred]: The enabling catalyst is the step-function improvement in LLM code generation and reasoning (GPT-4, Claude 3.5, open-source models) in 2023-2025, which crossed the reliability threshold needed for autonomous SQL generation and execution against production databases.
- [Inferred]: Slack's dominance as the enterprise communication layer (acquired by Salesforce for $27.7B in 2021) creates a large, standardized distribution surface that didn't exist at this scale five years ago.

## Founders & Team

**Maceo Cardinale Kwik** — Co-founder & CEO
- Age 21, based in NYC (YC page).
- Previously: Software Engineer at Traba (ZoomInfo); Software Engineer at SimonComputing; Software Engineer Intern at Performant Software (LinkedIn via search snippet).
- Co-Founder of Lighthouse Startups, a non-profit (LinkedIn via search snippet).
- Outreach Coordinator at AsianPassion Program (LinkedIn via search snippet).
- Education: Not found in public sources.
- Twitter/X: @maceock (YC page) — follower count not retrievable.
- LinkedIn: linkedin.com/in/maceo-cardinale-kwik — headline: "Software Engineer Intern" (LinkedIn via search snippet).
- GitHub: No personal public repos found.

**Jason Wang** — Co-founder
- Age 21, based in NYC (YC page via search snippet).
- Previously: Software Engineer at Traba (ZoomInfo).
- Education: University of Toronto, BASc Computer Engineering (LinkedIn via search snippet).
- Personal website: jasonhywang.com (search snippet).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/jasonhy-wang (YC page).
- GitHub: github.com/jason98wang referenced in search results but returned 404 at time of research.

**Co-founder relationship:** Both Maceo Cardinale Kwik and Jason Wang worked at Traba as Software Engineers (ZoomInfo). This shared employer is the identifiable point of prior acquaintance.

**Founder-market fit:** Both founders are software engineers with experience building production applications. Their shared tenure at Traba, a staffing technology company, provided exposure to data-intensive operations. [Inferred]: As young technical founders (both 21), they bring engineering capability but limited domain experience in enterprise data analytics or sales to data teams. The YC partnership with David Lieb (Google Photos co-founder) provides mentorship but no publicly known advisors specific to the BI/analytics domain were found.

## Key Risks

**1. LLM commoditization and incumbent response:** The core text-to-SQL and code-execution capability is available to any developer using frontier LLMs. Microsoft (Copilot in Power BI), Salesforce (Einstein in Tableau), and Google (Looker AI) are all shipping AI analytics features within their existing platforms, which already have enterprise distribution and data connections (TechCrunch, multiple 2024-2025 reports on AI BI features). Datost must build differentiated value beyond the base LLM capability before incumbents close the UX gap.

**2. Slack platform dependency:** Distribution is coupled to Slack's platform and App Directory policies. Salesforce (Slack's parent) could build or acquire a competing native data analyst feature, or change API terms. Salesforce's ownership of both Slack and Tableau creates a natural incentive to build this capability in-house.

**3. Enterprise data trust barrier:** Connecting an AI agent to production databases, data lakes, and codebases requires deep trust from security and IT teams. [Inferred]: Enterprise procurement cycles for tools with database access are typically long, involving security reviews, SOC 2 compliance, and data governance approvals—a challenge for a 2-person pre-seed team without established enterprise credibility.

**4. Name confusion risk:** "Datost" has phonetic similarity to "datos" (Spanish for "data") and other data-related company names, which could create SEO and brand differentiation challenges in a crowded analytics keyword space.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | BI & analytics: $34.04B in 2024, projected $65.14B by 2032, CAGR 8.45% (Verified Market Research, 2024 via search snippet); AI in data analytics: $31.22B in 2025, projected $310.97B by 2034, CAGR 29.10% (Precedence Research, 2025 via search snippet) |
| SAM | No public data found |
| Traction | 1 public GitHub repo with 0 stars (GitHub, Mar 2026). No other public traction signals found. |
| Revenue Signal | No public data found |
| Founders | Maceo Cardinale Kwik (CEO): SWE at Traba, SimonComputing, Performant Software. Jason Wang (Co-founder): SWE at Traba, BASc Computer Engineering from University of Toronto. |
| Competitors | Julius AI ($10M seed, 2M+ users, consumer AI data analyst); Defog.ai ($2.7M total, open-source text-to-SQL); Narrative BI ($1.44M raised, $1.1M revenue per Latka, automated marketing narratives); Equals ($23M total, next-gen spreadsheet with DB connections) |
| Moat Signals | No public data found |
| Risk Factors | LLM commoditization and incumbent AI analytics features, Slack platform dependency (Salesforce ownership), enterprise data trust and compliance barrier for 2-person team |
| Founder Reach | Maceo Cardinale Kwik: Twitter @maceock (count not retrievable), LinkedIn linkedin.com/in/maceo-cardinale-kwik. Jason Wang: Twitter not found, LinkedIn linkedin.com/in/jasonhy-wang. |
| Distribution Signals | No public data found |
| Emails | No public data found |
