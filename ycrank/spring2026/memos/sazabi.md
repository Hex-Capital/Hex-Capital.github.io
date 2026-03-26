# Sazabi

> The AI-native observability platform for fast-moving engineering teams

| Field | Value |
|-------|-------|
| Website | https://www.sazabi.com/ |
| YC Page | https://www.ycombinator.com/companies/sazabi |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 10 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools |
| YC Partner | Aaron Epstein |
| Emails | No public data found |

## The Idea

**Problem:** As AI coding agents (Claude Code, Codex, Cursor) generate increasing amounts of production code, engineering teams lack visibility into what those agents decided, why, and what broke (Sazabi manifesto, Mar 2026). Traditional observability platforms (Datadog, New Relic) were designed around human-authored code and the "three pillars" (logs, metrics, traces), which the company argues create cognitive overload without answering the basic questions: "Why is production down? Who is affected? What changed?" (sazabi.com/manifesto).

**Approach:** Sazabi treats AI behavior as a new class of telemetry — capturing agent decisions, output deviations, and anomalies (Zypsy blog). Core features include: Autonomous Alerts (AI continuously monitors production, no manual threshold setup), Conversational Debugging (plain-language querying of telemetry), Coding Agent Integration (native support for major AI coding tools), Code Search (pinpoints files/commits causing issues), Dynamic Visualizations, and Perfect Memory (learns from past incidents) (sazabi.com). The company's manifesto argues "logs are all you need" — that metrics and traces can be reconstructed from logs via AI, providing "three pillars for the price of one" (sazabi.com/manifesto).

**Differentiation:** vs. Datadog/New Relic: Sazabi is purpose-built for AI-generated code observability with a conversational UI rather than dashboard-first design (sazabi.com). vs. LangSmith/Langfuse: those platforms focus on LLM application tracing (prompt-response pairs, token costs); Sazabi targets the broader production observability stack including infrastructure, with AI agent decisions as a first-class telemetry type (Zypsy blog). vs. Laminar: both target AI agent observability, but Laminar is open-source and tracing-focused; Sazabi emphasizes autonomous alerting and conversational debugging as differentiators (sazabi.com).

**Business Model:** No pricing page found; the platform operates via waitlist access (sazabi.com). [Inferred]: Most likely monetization path is consumption-based SaaS (per GB of log ingestion or per-seat), consistent with observability industry norms.

**TAM/SAM:** The observability tools and platforms market was estimated at $2.9B–$28.5B in 2025 depending on scope definition, growing at 10.7–19.7% CAGR (Grand View Research, 2025 via search snippet; Mordor Intelligence, 2025 via search snippet). No public SAM estimate specific to AI-native observability was found.

**GTM / Distribution:** The company lists backers from Vercel, Graphite, Daytona, Browserbase, LangChain, Mastra, and Replit (ycombinator.com/companies/sazabi). [Inferred]: Initial distribution likely via founder's network in the AI tooling ecosystem, targeting engineering teams at AI-forward startups already using these backers' products, with a product-led waitlist funnel.

## Defensibility

- **Data moat potential:** The "Perfect Memory" feature learns from past incidents and traffic patterns (sazabi.com). [Inferred]: Over time, accumulated incident data and organizational context could create switching costs, but this is unproven at current stage.
- **Compliance certifications:** SOC 2 Type I & II, ISO 27017, ISO 27001, GDPR compliant (sazabi.com). These represent meaningful upfront investment for a 10-person team and raise the bar for competing startups entering enterprise sales.
- **Agent telemetry schema:** [Inferred]: If Sazabi defines how agent decisions are logged and gains adoption, this schema could become a de facto standard, creating lock-in. Unproven at this stage.

**Market structure:** Traditional observability vendors (Datadog, New Relic) derive revenue from metrics/traces/APM pricing models tied to infrastructure volume. [Inferred]: Cannibalizing their own per-host or per-trace pricing to offer a logs-first, AI-native model would require restructuring core billing and may conflict with existing customer contracts, creating a business model barrier to fast incumbency response.

**Commoditization risk:** The conversational debugging interface and autonomous alerting could be replicated by well-funded incumbents (Datadog had $2.1B revenue in FY2024). LangSmith/Langfuse already cover LLM observability. Open-source alternatives (Laminar, Langfuse) lower barriers. [Inferred]: Execution speed and depth of agent-specific telemetry are the primary near-term differentiators, not structural moats.

## Market & Traction

**Traction signals:**
- No public revenue, user counts, or growth metrics found.
- Product operates on waitlist (sazabi.com).
- Company Twitter/X: @sazabi (x.com/sazabi); follower count not retrievable.
- Founder Twitter/X: @realshcallaway (x.com/realshcallaway); follower count not retrievable.
- LinkedIn: company page exists (YC profile); follower count not retrievable.
- No Product Hunt launch found.
- No Discord/Slack community found.
- 0 open job postings (ycombinator.com/companies/sazabi).
- Investors: Village Global, Agent Fund, Commit Capital, Zypsy, plus angels from Anthropic (Lance Martin), Vercel (Matthew Lenhard, Andrew Qu), Brex (Sonny Gupta, Mark Hillick), Replit, Homebrew (sazabi.com; Zypsy blog; f4.fund).

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Sazabi |
|---|---|---|
| **Arize AI** | $70M Series C (Feb 2025, Arize blog) | Focused on ML model monitoring and LLM evaluation; broader enterprise customer base (PepsiCo, Uber); less focused on coding-agent telemetry |
| **LangSmith (LangChain)** | $125M Series B at $1.25B valuation (Oct 2025, Fortune); ARR >$12–16M (TechCrunch, Jul 2025) | Deep LangChain ecosystem integration; focuses on LLM prompt tracing, not full-stack observability |
| **Langfuse** | $4.5M total raised; acquired by ClickHouse in Jan 2026 (Orrick); 20K+ GitHub stars, 26M+ SDK installs/month, 2K+ paying customers (Langfuse blog) | Open-source, self-hostable; LLM-specific tracing; now part of ClickHouse's data infrastructure |
| **Laminar** | $3M seed (Mar 2026, Tech.eu); YC S24 | Open-source, OpenTelemetry-native; purpose-built for AI agent debugging; customers include Browser Use, OpenHands |
| **Datadog** | Public company; $2.1B FY2024 revenue | Full-stack incumbent; AI observability features added to existing platform; breadth vs. Sazabi's depth |

**Why now:** [Inferred]: The catalyst is the rapid adoption of AI coding agents (Cursor, Claude Code, GitHub Copilot) in 2024–2025, which crossed a threshold where a material percentage of production code is AI-generated. This creates a new category of failure modes — agent decision errors, hallucinated code paths, unintended side effects — that traditional APM tools were not designed to surface. The ClickHouse acquisition of Langfuse (Jan 2026) and Arize's $70M raise (Feb 2025) validate market demand for AI-specific observability.

## Founders & Team

**Sherwood Callaway** — Founder & CEO
- Education: Davidson College (LinkedIn); Dev Bootcamp, 2014 (Sessionize)
- Career: Early engineer at Crunchbase, then Brex where he helped build the Infrastructure and Observability teams (ycombinator.com/companies/sazabi). Co-founded Opkit (YC-backed), one of the first AI phone calling solutions for healthcare, acquired by 11x in September 2024 (Zypsy blog; blog.sherwoodcallaway.com). Post-acquisition, served as first engineering manager at 11x leading development on Alice (AI SDR), described as "one of the largest agentic systems in production" (Zypsy blog). a16z Infrastructure Scout (x.com/realshcallaway).
- Twitter/X: @realshcallaway — follower count not retrievable
- LinkedIn: linkedin.com/in/sherwoodcallaway — 500+ connections (LinkedIn)
- GitHub: github.com/shcallaway — repos include gmail-mcp-server, semantic-cache-chatbot; star counts not retrieved

No other founders are listed on the YC page. The team is 10 people (ycombinator.com/companies/sazabi); F4 fund lists team size as 1–10 (f4.fund).

**Co-founder relationship:** Only one founder is listed. No public data on co-founder history.

**Founder-market fit:** Callaway built observability infrastructure at Brex, giving direct experience with the problem space (YC profile). His exit with Opkit (AI phone calling) and subsequent work on Alice at 11x (large-scale AI agent system) provide firsthand experience with AI agent reliability challenges — the exact problem Sazabi targets. The a16z scout role provides investor network access. Announced angel backers include leaders at Anthropic, Vercel, Brex, LangChain, and Replit (sazabi.com), suggesting strong endorsement from the AI developer tooling ecosystem.

## Key Risks

**Name collision:** "Sazabi" is a well-known mecha from the Gundam franchise, generating substantial noise in search results (observed across X.com, Google). This complicates organic discoverability and SEO.

**Single listed founder with a 10-person team:** While the YC profile lists only Sherwood Callaway as founder, the company has 10 employees (YC profile). No co-founder or technical leadership is publicly identified, creating key-person risk if Callaway is the sole decision-maker across product, engineering, and go-to-market.

**Crowded and fast-consolidating market:** Langfuse was acquired by ClickHouse within ~2 years of founding (Orrick, Jan 2026). Arize AI raised $70M (Feb 2025). LangChain/LangSmith reached $1.25B valuation (Fortune, Oct 2025). Datadog, a $50B+ public company, is adding AI observability features to its existing platform. Sazabi enters against well-capitalized incumbents and recently consolidated competitors.

**Pre-product risk:** The platform is waitlist-only with no public customers, pricing, or usage metrics (sazabi.com). The "logs are all you need" thesis — that AI can reconstruct metrics and traces from logs alone at production scale — is technically ambitious and unvalidated publicly.

**Dependency on AI coding agent adoption curve:** The value proposition is strongest when a material share of production code is AI-generated. If enterprise AI coding agent adoption slows or concentrates in a few platforms that build their own observability (e.g., Cursor, Replit), the addressable market narrows.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.9B–$28.5B (2025, Grand View Research / Mordor Intelligence via search snippet); 10.7–19.7% CAGR |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Sherwood Callaway (Founder & CEO): Brex infra engineer, Opkit founder (acquired by 11x, Sep 2024), a16z scout, Davidson College |
| Competitors | Arize AI ($70M Series C, revenue unknown, ML/LLM evaluation focus); LangSmith/LangChain ($125M Series B at $1.25B, ARR >$12–16M, LLM prompt tracing); Langfuse ($4.5M raised, acquired by ClickHouse Jan 2026, open-source LLM observability); Laminar ($3M seed, revenue unknown, open-source AI agent debugging); Datadog (public, $2.1B FY2024 revenue, full-stack incumbent) |
| Moat Signals | SOC 2 Type I & II, ISO 27017, ISO 27001, GDPR certifications (sazabi.com) |
| Risk Factors | Pre-product/waitlist-only status, crowded and consolidating competitor landscape, Gundam name collision affecting SEO |
| Founder Reach | Sherwood Callaway: Twitter @realshcallaway (count not retrievable), LinkedIn 500+ connections (LinkedIn), GitHub github.com/shcallaway (star counts not retrieved) |
| Distribution Signals | No public data found |
| Emails | No public data found |
