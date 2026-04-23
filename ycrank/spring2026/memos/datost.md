# Datost

> AI data analyst in Slack. Democratize data.

| Field | Value |
|-------|-------|
| Website | https://www.datost.com |
| YC Page | https://www.ycombinator.com/companies/datost |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Analytics |
| Team Size | 2 |
| Location | New York, NY (YC page, LinkedIn) |
| Tags | B2B, Analytics, AI Assistant |
| YC Partner | David Lieb (YC page) |
| Emails | maceo@datost.com, jason@datost.com (YC page) |

## The Idea

**Problem:** Non-technical teams (product, operations, finance) at data-rich companies cannot get timely answers from their data without filing requests to data analysts or navigating complex dashboards. The co-founders experienced this firsthand at Traba, a staffing marketplace where "there was a lot of data and not enough analysts" (LinkedIn post, Maceo Cardinale Kwik). Current solutions require either dedicated analyst headcount, self-serve BI tools that demand SQL fluency, or general-purpose LLMs that lack business context and produce unreliable SQL.

**Approach:** Datost is an AI data analyst that teams @mention directly in Slack. It maintains a proprietary semantic layer of business definitions — metric names, entity relationships, terminology — so it understands what a question means before generating SQL (datost.com). It connects to 20+ data sources including Snowflake, BigQuery, Databricks, Salesforce, HubSpot, PostgreSQL, MySQL, Datadog, Sentry, and Coda (datost.com). Beyond ad hoc queries, it generates PDFs with executive summaries and charts, Excel spreadsheets, and PowerPoint decks; builds live dashboards with KPIs pinnable to Slack channels; and monitors metrics with auto-investigation and root-cause analysis when thresholds break (datost.com). Average time to first answer: 42 seconds (datost.com).

**Differentiation:** Datost claims 75.2% accuracy on the BIRD-Interact benchmark (a 600-question, 22-database text-to-SQL test with deliberately ambiguous queries), versus 33% for Claude Opus 4.6 running alone — a 2.3x differential (datost.com; YC page). It also reports 91% accuracy on analytical questions (YC page). Dot (getdot.ai), the closest comparable, also operates in Slack/Teams with a semantic layer (DotML) but is further along in market traction. Zenlytic provides a dedicated BI interface rather than a chat-native form factor. DataGPT offers a conversational AI analyst but does not embed in Slack as a primary surface. [Inferred]: Datost's differentiator is combining the Slack-native form factor with the semantic layer and multi-source connectivity (databases, observability, docs, codebase) in one agent, whereas competitors tend to specialize in either the chat interface or the BI tool layer.

**Business Model:** No pricing page is publicly available on datost.com. Enterprise security features (SSO, SCIM, audit logs, RBAC) suggest a tiered SaaS model (datost.com). [Inferred]: Most likely monetization is per-seat or per-workspace SaaS pricing with an enterprise tier given the security feature set.

**TAM/SAM:**
- Global BI & analytics market: $84.6B by 2026, 14.7% CAGR (Verified Market Research via search snippet).
- BI managed services segment: $17.58B in 2025 growing to $19.82B in 2026 at 12.7% CAGR (Research and Markets via search snippet).
- [Inferred]: The SAM for AI-native conversational BI tools embedded in workplace messaging is a subset of the broader BI market; no public third-party estimate exists for this specific niche.

**GTM / Distribution:** The product is Slack-native, meaning adoption starts when one team member installs the Slack app and invites @datost to a channel. Answers are visible to the whole channel, creating organic exposure (datost.com). [Inferred]: Most likely distribution is product-led growth within Slack workspaces — one user installs, colleagues see answers, usage spreads virally within the org. The calendly booking link (datost.cal.com/founders/30-min) suggests a founder-led sales motion for initial customers (YC page).

## Defensibility

- **Semantic layer as switching cost:** Each deployment requires building a semantic layer mapping an organization's specific metric definitions, entity relationships, and business terminology. Once configured, this layer represents accumulated institutional knowledge that is costly to recreate with a competitor (datost.com).
- **Benchmark performance:** The 75.2% BIRD-Interact score vs. 33% for frontier LLMs alone suggests proprietary query-planning and disambiguation logic beyond simple prompt engineering (datost.com; YC page).
- [Inferred]: Network effects within a Slack workspace (more users asking questions → richer query history → better semantic layer tuning) could develop over time but are unproven at this stage.

**Market structure:** [Inferred]: Traditional BI vendors (Tableau/Salesforce, Looker/Google, Power BI/Microsoft) derive revenue from dashboard-building seats and visualization licenses. A chat-native AI analyst that eliminates the need for dashboards cannibalizes their core product; this creates a business-model conflict that slows incumbent adoption of this form factor. Microsoft could embed similar capabilities in Teams + Power BI but faces internal coordination costs across two product groups.

**Commoditization risk:** The semantic layer + text-to-SQL pipeline can be replicated by well-resourced AI startups (Dot, Zenlytic) and potentially by LLM providers (OpenAI, Anthropic) adding data connectors. The 75.2% benchmark score is a current advantage but not a permanent moat. Dot already has a comparable product with greater traction.

## Market & Traction

**Traction signals:**
- 18,402 queries answered "this week" (datost.com live counter, accessed April 2026)
- BIRD-Interact benchmark: 75.2% accuracy (datost.com; YC page)
- LinkedIn announcement post: 175 reactions, 15 comments (LinkedIn, Maceo Cardinale Kwik)
- Twitter/X: @MaceoCk — handle confirmed; follower count not retrievable (X.com)
- GitHub: github.com/DatostApp — organization listed on YC page; no public repos indexed (GitHub search)
- GitHub (personal): github.com/maceoCK — 46 public repos, 8 followers (GitHub)
- No Product Hunt launch found.
- No press coverage in named publications found.
- No app store / Chrome extension listings found.
- No Discord or Slack community found.
- Company LinkedIn page: not found in search results.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Datost |
|-----------|---------|-------------|-------------------------------|
| **Dot** (getdot.ai) | YC-backed; total undisclosed (Crunchbase) | $770K revenue Jun 2025; $5.8M trailing 12-month revenue Dec 2025 (Latka) | Multi-platform (Slack, Teams, web app); named enterprise customers (Duolingo, Airbyte, Flix) (getdot.ai) |
| **Zenlytic** | $9M Series A, Sep 2024, led by M13 (Zenlytic blog; TechCrunch) | Revenue unknown | Dedicated BI interface with AI agent "Zoë"; deeper visualization layer rather than chat-native (zenlytic.com) |
| **DataGPT** | $11.9M total; $4M seed Oct 2022 (Crunchbase via search snippet) | Revenue unknown | First-mover positioning as "conversational AI analyst"; standalone web interface, not Slack-embedded (DataGPT) |
| **Supersimple** | €2.2M pre-seed, Apr 2024 (EU-Startups; SiliconANGLE) | Revenue unknown | No-code, natural language interface; Tallinn-based; explainable AI focus (SiliconCanals) |
| **Seek AI** | $7.5M raised; acquired by IBM Jun 2025 (seek.ai blog; PitchBook) | Revenue unknown | Now part of IBM; validates demand but removes an independent competitor |

**Why now:**
- [Inferred]: LLM capabilities crossed a threshold in 2024–2025 where text-to-SQL accuracy became commercially viable for ambiguous, multi-table business questions — Datost's own benchmark data (75.2% on BIRD-Interact) would not have been achievable with pre-2024 models at the 33% baseline.
- [Inferred]: Slack's mid-2025 pricing restructuring to ~$15/user/month (search result, Capterra) creates budget pressure on organizations to extract more value from their Slack workspace, making in-Slack tooling more attractive.
- IBM's acquisition of Seek AI in June 2025 (PitchBook) signals incumbent validation of the AI-analyst category.

## Founders & Team

**Maceo Cardinale Kwik** — Co-founder & CEO
- B.S. Computer Science, Virginia Tech, Summa Cum Laude, 4.0 GPA (personal website; GitHub bio)
- Age 21 (YC page)
- Previously: Full Stack Software Engineer at Traba (staffing marketplace) (ZoomInfo; LinkedIn)
- Co-founder of Lighthouse Startups (non-profit) (search snippet)
- Top 10 in US (top 0.1%) in IMC Prosperity Trading Challenge (GitHub bio)
- Tech stack: TypeScript, Python, Go, Rust, React, Next.js, PostgreSQL, AWS, Docker, Kubernetes (maceock.me)
- Twitter/X: @MaceoCk — count not retrievable (X.com)
- LinkedIn: linkedin.com/in/maceo-cardinale-kwik — 500+ connections (LinkedIn)
- GitHub: github.com/maceoCK — 46 public repos, 8 followers, no Datost-specific repos public (GitHub)

**Jason Wang** — Co-founder
- University of Toronto (LinkedIn via search snippet)
- Previously at Traba (LinkedIn via search snippet)
- Based in New York (LinkedIn via search snippet)
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/jasonhy-wang (LinkedIn search result)
- GitHub: No confirmed public profile found.

**Co-founder relationship:** Both founders previously worked at Traba, the staffing marketplace (LinkedIn profiles for both cite Traba). This is the confirmed point of overlap. No shared university found (Virginia Tech vs. University of Toronto).

**Founder-market fit:** Both founders experienced the data-access problem firsthand at Traba, where the company "had a lot of data and not enough analysts" (LinkedIn post). Maceo's full-stack engineering background (TypeScript, Python, Go, Rust, PostgreSQL) and strong quantitative aptitude (top 0.1% in IMC trading challenge) map to the technical demands of building a text-to-SQL engine with a semantic layer. Both founders are first-time startup founders with no prior exits. No advisors, board members, or notable angel investors identified from public sources.

## Key Risks

**Dot (getdot.ai) lead:** The most direct competitor, Dot, is also YC-backed and has reached $5.8M trailing 12-month revenue with named enterprise customers including Duolingo and Airbyte (Latka, Dec 2025). Datost must differentiate on accuracy, breadth of integrations, or price to close this gap.

**Slack platform dependency:** The product's primary interface is Slack. Changes to Slack's API, pricing, or app ecosystem policies could disrupt Datost's distribution. Slack's parent Salesforce could also build or acquire competing in-Slack analytics capabilities (e.g., integrating Tableau queries into Slack natively).

**LLM provider commoditization:** If frontier model providers (OpenAI, Anthropic, Google) ship native data-connector + semantic-layer features, the accuracy advantage Datost holds today (75.2% vs. 33% baseline) could erode. The benchmark gap reflects current model limitations that will narrow over time.

**Name collision risk:** The Twitter handle @datost belongs to an unrelated individual (Dan Tore Stensland) (X.com search), and the term may create search-engine noise, complicating brand discovery and SEO.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $84.6B global BI & analytics market by 2026, 14.7% CAGR (Verified Market Research via search snippet) |
| SAM | No public data found |
| Traction | 18,402 queries answered in one week (datost.com, Apr 2026); 75.2% BIRD-Interact benchmark (datost.com); LinkedIn post 175 reactions (LinkedIn) |
| Revenue Signal | No public data found |
| Founders | Maceo Cardinale Kwik (CEO): Virginia Tech CS, Summa Cum Laude, ex-Traba SWE. Jason Wang (Co-founder): U of Toronto, ex-Traba. |
| Competitors | Dot ($undisclosed raised, $5.8M TTM revenue Dec 2025 per Latka, Slack/Teams-native with enterprise customers); Zenlytic ($9M Series A, revenue unknown, dedicated BI with AI agent); DataGPT ($11.9M raised, revenue unknown, standalone conversational analyst); Supersimple (€2.2M pre-seed, revenue unknown, no-code NL analytics) |
| Moat Signals | 75.2% BIRD-Interact score vs. 33% frontier-model baseline (datost.com); per-org semantic layer creates switching cost |
| Risk Factors | Dot's revenue and customer lead, Slack platform dependency, LLM commoditization |
| Founder Reach | Maceo: @MaceoCk on X (count not retrievable), LinkedIn 500+, GitHub 8 followers. Jason: LinkedIn (linkedin.com/in/jasonhy-wang), no X or GitHub found. |
| Distribution Signals | No public data found |
| Emails | maceo@datost.com, jason@datost.com (YC page) |
