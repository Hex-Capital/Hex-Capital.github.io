# Ontora

> We help managers regain control of their organisations

| Field | Value |
|-------|-------|
| Website | https://ontora.com |
| YC Page | https://www.ycombinator.com/companies/ontora |
| Batch | Spring 2026 |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Robotic Process Automation, Feedback, AI |
| YC Partner | Tom Blomfield |
| Emails | No public data found |

## The Idea

**Problem:** Mid-to-large enterprises rely on management consulting firms for organizational diagnostics — mapping processes, interviewing stakeholders, identifying bottlenecks, and recommending improvements. This is slow (months of engagement), expensive (traditional consulting market valued at ~$1.06 trillion in 2025 (Research and Markets, 2025 via search snippet)), and incomplete (consultants typically interview a sample of employees, not all). Current alternatives include manual internal audits, employee surveys, and process mining tools like Celonis that require structured event-log data from enterprise systems.

**Approach:** Ontora deploys autonomous AI agents that conduct stakeholder interviews at scale — "hundreds of conversations with employees — all within hours" and reaching "100% of employees" (ontora.com). The platform includes four core capabilities: (1) a Unified Context Layer integrating CRM, email, documents, and organizational tools into a single knowledge base; (2) an API & MCP Server for programmatic access; (3) a Process Discovery Agent that crawls company processes across tools, documents, and meeting transcripts to map dependencies and pinpoint root causes; (4) a Meeting Agent that conducts interviews autonomously or guides real-time meetings with suggested questions (ontora.com). Outputs include problem identification reports and solution roadmaps.

**Differentiation:** Unlike Celonis and traditional process mining tools that rely on structured system event logs, Ontora extracts operational knowledge from unstructured sources — conversations, documents, meeting transcripts (ontora.com). Unlike management consulting firms, the platform operates autonomously without billable human consultants. Unlike employee survey tools, it conducts open-ended conversational interviews rather than structured questionnaires.

**Business Model:** No pricing page is publicly visible. The product is currently in waitlist/demo mode (ontora.com). [Inferred]: Most likely monetization path is SaaS subscription (per-seat or per-organization), given the enterprise B2B positioning and the "fraction of the cost" framing relative to consulting engagements.

**TAM/SAM:** The global management consulting market was valued at ~$1.06 trillion in 2025 (Research and Markets, 2025 via search snippet). The process mining software market was estimated at $1.4 billion in 2024, projected to reach $21.92 billion by 2030 at 59.4% CAGR (Grand View Research, 2024 via search snippet). The AI consulting services market is projected at $11.07 billion in 2026, growing to $90.99 billion by 2035 at 26.2% CAGR (Future Market Insights, 2026 via search snippet). [Inferred]: Ontora's SAM is the subset of consulting spend addressable by AI-driven diagnostics — likely the organizational/operational assessment segment rather than full strategy advisory.

**GTM / Distribution:** The website offers a waitlist and "book demo" option, indicating a sales-led or demo-led motion (ontora.com). A testimonial from Julien Kang, Strategy Manager at Vertiv (a public company), appears on the website (ontora.com). [Inferred]: Initial distribution is likely direct outreach to operations and strategy teams at mid-to-large enterprises, leveraging the Vertiv reference case.

## Defensibility

- **Data moat potential:** Each deployment ingests an organization's operational knowledge across CRM, email, documents, and transcripts (ontora.com). [Inferred]: Over time, aggregated cross-company process benchmarks could create a proprietary data asset, but this is unproven at this stage.
- **Switching costs:** [Inferred]: Once an organization's processes are mapped and integrated into Ontora's knowledge base, migration would require re-ingestion and re-mapping, creating moderate switching friction.
- **No patents or IP filings found in public sources.**

**Market structure:** Traditional consulting firms (McKinsey, BCG, Bain) face business model cannibalization risk — their revenue model depends on billable human hours, making it structurally difficult to offer an autonomous AI substitute without cannibalizing core revenue. Gartner estimates 40% of consulting tasks are automatable (Gartner via search snippet), but incumbents face incentive misalignment in pursuing that automation. Process mining incumbents like Celonis are optimized for structured event-log data from ERP/IT systems, and pivoting to unstructured conversational data represents a different technical stack and sales motion.

**Commoditization risk:** The underlying technology (LLM-based interviewing, RAG over enterprise documents) uses broadly available foundation models. [Inferred]: Barriers to replication are moderate — the differentiation would need to come from domain-specific prompt engineering, integration depth, and accumulated organizational process data rather than proprietary model technology.

## Market & Traction

**Traction signals:**
- Waitlist/demo phase; no public user counts, revenue, or growth metrics disclosed (ontora.com)
- Customer testimonial: "What used to take our operating team months of interviews and analysis, Ontora delivered in a single afternoon." — Julien Kang, Strategy Manager at Vertiv (ontora.com)
- Julien Kang confirmed as Vertiv-affiliated professional with Ivey Business School / HEC Paris background (LinkedIn via search snippet)
- Company Twitter/X: @ontoraofficial (x.com); follower count not retrievable
- Maximilian Arnold Twitter/X: @maxonary, ~281 followers (x.com via search snippet)
- Leon Iwanowitsch Twitter/X: @LeonIwanowitsch (per YC page); account not confirmed in search results
- GitHub: github.com/ontora-main listed on YC page; no public repositories found in search
- No Product Hunt listing found
- No app store presence found
- 0 open job postings (YC page)

**Competitive landscape:**

| Competitor | Differentiator vs. Ontora | Funding | Revenue |
|---|---|---|---|
| **Celonis** | Structured event-log process mining from ERP/IT systems; does not conduct stakeholder interviews or analyze unstructured conversational data | $1.77B raised, $13B valuation (2022) (Crunchbase via search snippet) | ~$771M (2023) (Getlatka via search snippet) |
| **Worktrace AI** | Observes employee work patterns for workflow automation; founded by ex-OpenAI PM; focuses on AI adoption layer rather than organizational diagnostics | $9.3M seed (Upstarts Media, 2025) | Revenue unknown |
| **Leena AI** | Autonomous conversational AI for employee HR/IT queries and experience; does not focus on process mining or organizational diagnostics | $40M total (CB Insights via search snippet) | Revenue unknown |
| **Polsia** | Autonomous AI for running entire company operations (coding, marketing, inbox); targets solo founders, not enterprise organizational diagnostics | Fundraising in progress (Product Hunt, 2026) | Claims $450K+ ARR, 500+ companies (Product Hunt, 2026) |

**Why now:**
- [Inferred]: LLM capabilities crossed a quality threshold in 2024-2025 for conducting open-ended, contextually aware interviews at scale — previously impractical with rule-based or earlier NLP systems.
- AI agents, automation, and process mining are starting to converge (Constellation Research, 2026 via search snippet).
- Gartner estimates 40% of consulting tasks are automatable (Gartner via search snippet), and hybrid consulting teams combining humans with AI deliver projects 35% faster (search snippet from consulting market analysis).

## Founders & Team

**Maximilian Arnold** — Founder
- Education: CODE University of Applied Sciences (Berlin), Stanford University, ETH Zürich (maximilianarnold.com)
- Previously: AI Product Engineer at Porsche AG (2022–2024), where he led creation of CoAnalyst, an agentic RAG assistant for SAP procurement data projected to save millions across VW Group (maximilianarnold.com)
- Awards: ETH InCube x Roche Challenge winner (2025, AI for early Parkinson's detection); T-Challenge XR 2022 winner (maximilianarnold.com)
- Twitter/X: @maxonary — ~281 followers; bio: "Building in Stealth" (x.com)
- LinkedIn: de.linkedin.com/in/arnold-max — 500+ connections (LinkedIn via search snippet)
- GitHub: No public repos found under his name

**Leon Iwanowitsch** — Co-Founder
- Education: Universität St. Gallen (HSG), Switzerland (LinkedIn via search snippet)
- Involved with START Global; organized AI Hackathon at Switzerland Innovation Park Central (LinkedIn via search snippet)
- Twitter/X: @LeonIwanowitsch (per YC page); account not confirmed in search results
- LinkedIn: linkedin.com/in/leon-j-iwanowitsch — 500+ connections (LinkedIn via search snippet)
- GitHub: No public repos found

**David Korn** — Founder
- Listed as co-founder on YC page (ycombinator.com/companies/ontora)
- No LinkedIn profile confirmed for this individual in connection with Ontora
- Twitter/X: No public account found
- LinkedIn: Not identified with confidence; name shared by many professionals
- GitHub: No public repos found

**Co-founder relationship:** Maximilian Arnold studied at CODE University Berlin, Stanford, and ETH Zürich; Leon Iwanowitsch studied at Universität St. Gallen (HSG). No shared employer or university overlap is visible from Phase 3 findings. No public data on co-founder history with David Korn.

**Founder-market fit:** Maximilian Arnold built CoAnalyst at Porsche — an agentic RAG system for enterprise procurement data (maximilianarnold.com) — which is technically analogous to Ontora's approach of applying AI agents to enterprise operational data. Leon Iwanowitsch's background at HSG (a leading European business school) and involvement with START Global provides business/consulting domain context. No advisors, board members, or notable investors beyond YC and Tom Blomfield (YC Group Partner) were found in public sources.

## Key Risks

**Name ambiguity and discoverability:** "Ontora" returns results for unrelated entities (e.g., Nusrat Jahan Ontora, a Bangladeshi public figure). GitHub organization "ontora-main" listed on YC page has no visible public repositories. This could impede organic discovery and SEO.

**Dependence on LLM quality for high-stakes outputs:** The core product relies on AI-conducted interviews generating organizational diagnostics. Errors in process mapping or stakeholder sentiment analysis at enterprise scale could erode trust. No information on validation methodology or accuracy benchmarks was found in public sources.

**Enterprise sales cycle with no visible GTM team:** The 3-person team has 0 open job postings (YC page) and no visible sales or go-to-market hires. Enterprise organizational diagnostics typically involves procurement, security review, and executive buy-in cycles. [Inferred]: The team may rely on the Vertiv reference case and YC network for initial pipeline, but scaling enterprise sales without dedicated GTM resources is a constraint.

**Well-funded adjacent competition:** Celonis ($1.77B raised, $771M revenue) is expanding from structured process mining toward AI-powered process intelligence (Constellation Research, 2026 via search snippet). Worktrace AI ($9.3M seed, OpenAI-backed) targets adjacent workflow automation. These players have distribution, data, and capital advantages.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Process mining: $1.4B in 2024 growing to $21.92B by 2030 at 59.4% CAGR (Grand View Research, 2024 via search snippet); Management consulting: ~$1.06T in 2025 (Research and Markets, 2025 via search snippet) |
| SAM | No public data found |
| Traction | Waitlist/demo phase; 1 named customer testimonial from Vertiv (ontora.com); 0 job postings (YC page) |
| Revenue Signal | No public data found |
| Founders | Maximilian Arnold (Founder): Porsche AI (CoAnalyst), CODE/Stanford/ETH Zürich. Leon Iwanowitsch (Co-Founder): HSG, START Global. David Korn (Founder): no confirmed public background. |
| Competitors | Celonis ($1.77B raised, ~$771M revenue 2023, structured event-log process mining) (Crunchbase/Getlatka via search snippet); Worktrace AI ($9.3M seed, revenue unknown, workflow observation) (Upstarts Media, 2025); Leena AI ($40M raised, revenue unknown, employee AI assistant) (CB Insights via search snippet); Polsia (fundraising, claims $450K+ ARR, autonomous company operations) (Product Hunt, 2026) |
| Moat Signals | No public data found |
| Risk Factors | Name ambiguity/discoverability, LLM reliability for enterprise diagnostics, enterprise sales cycle without GTM team, well-funded adjacent competitors |
| Founder Reach | Maximilian Arnold: Twitter ~281 followers, LinkedIn 500+ (x.com, LinkedIn via search snippet); Leon Iwanowitsch: Twitter handle unconfirmed, LinkedIn 500+ (LinkedIn via search snippet); David Korn: No public data found |
| Distribution Signals | No public data found |
| Emails | No public data found |
