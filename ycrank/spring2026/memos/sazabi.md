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

**Problem:** Engineering teams spend disproportionate time configuring and maintaining observability tooling—setting up monitors, writing queries, triaging alert noise—rather than debugging production issues. Existing platforms (Datadog, New Relic, Splunk) require users to instrument three separate telemetry types (logs, metrics, traces), creating cognitive overhead and complex UIs. The manifesto states: "Modern observability is bloated" (Sazabi Manifesto, Mar 2026). Target customers are early-stage and growth-stage technology companies that lack specialized observability expertise (SiliconANGLE, Apr 2026).

**Approach:** Sazabi ingests only logs and derives metrics and traces on the backend using AI. Per Callaway: "Fundamentally, logs are just events, metrics are aggregated events and traces are basically correlated events" (SiliconANGLE, Apr 2026). The platform uses LLMs to summarize log data into smaller packages, creates materialized views, and provides a conversational natural-language interface for querying production systems. Autonomous alerts analyze log streams continuously and only escalate when necessary, requiring no manual setup (sazabi.com). The platform integrates with coding agents including Claude Code, Codex, and Cursor for automated incident response (sazabi.com).

**Differentiation:** Versus incumbents (Datadog, Dynatrace, New Relic): Sazabi eliminates the three-pillars paradigm (logs + metrics + traces) in favor of logs-only ingestion, reducing instrumentation burden. Versus Dash0: Dash0 is OpenTelemetry-native and still accepts all three signal types; Sazabi rejects this framework entirely. Versus open-source alternatives (SigNoz, OpenObserve): Sazabi is closed-source and emphasizes autonomous alerting over self-hosted flexibility. The Zypsy investment blog notes Sazabi "captures agent decisions, output deviations, and anomalies" for AI-generated code, positioning it as observability purpose-built for AI-agent workflows (Zypsy blog).

**Business Model:** No pricing page is publicly available (sazabi.com). A pilot program with waitlist enrollment is active (sazabi.com). [Inferred]: Most likely monetization path is usage-based SaaS pricing (per GB of log ingestion or per seat), consistent with observability industry norms.

**TAM/SAM:** The observability tools and platforms market was estimated at $2.9B in 2025 (Mordor Intelligence via search snippet) to $28.5B in 2025 (Research Nester via search snippet), with variation reflecting differing market scope definitions. Growth rates range from 11–20% CAGR across forecasts. No public SAM estimate specific to AI-native or startup-focused observability segments was found.

**GTM / Distribution:** [Inferred]: Most likely distribution path is bottom-up product-led growth targeting startup engineering teams, leveraging angel investors and backers from Vercel, Graphite, LangChain, Replit, and Browserbase as distribution channels into their respective developer communities.

## Defensibility

- **Data advantage:** As Sazabi ingests production logs, it accumulates historical incident data and traffic patterns per customer ("Perfect Memory" feature on sazabi.com). [Inferred]: This creates increasing switching costs as the AI's contextual knowledge of a customer's system deepens over time.
- **Security certifications:** SOC 2 Type II, SOC 1, ISO 27017, ISO 27001, GDPR compliance (sazabi.com). These certifications are expensive and time-consuming to obtain, creating a barrier for newer entrants.
- No patents or open-source community moat identified.

**Market structure:** Callaway argues incumbents will struggle to "completely retool their products" (SiliconANGLE, Apr 2026) because their architectures are built around the three-pillars paradigm. [Inferred]: Datadog and Dynatrace have revenue models tied to per-signal pricing (metrics, traces, logs billed separately); collapsing to logs-only would cannibalize existing revenue streams.

**Commoditization risk:** The logs-only-plus-AI approach is architecturally reproducible. Dash0 already ships AI agents (Agent0) for observability (dash0.com). Datadog has announced AI-powered features. Any team with LLM infrastructure expertise could attempt a similar product. The moat depends on execution speed and data accumulation, not structural barriers.

## Market & Traction

**Traction signals:**
- Pilot program with waitlist active; no user or customer counts disclosed (sazabi.com)
- Platform full launch scheduled for end of 2026 (SiliconANGLE, Apr 2026)
- Emerging from stealth as of April 2026 (SiliconANGLE, Apr 2026)
- Press: SiliconANGLE coverage (Apr 8, 2026); Zypsy investment blog post
- Investors: Village Global, Agent Fund (Zypsy blog); Hawk Hill Ventures (parsers.vc, Feb 2026); Zypsy; backing from leaders at Anthropic, Vercel, Brex, Replit, Homebrew (sazabi.com)
- Twitter/X company account: @sazabi; founder @shcallaway has ~3,619 followers (X.com)
- LinkedIn company page exists (linkedin.com/company/sazabi); follower count not retrievable
- YouTube channel exists: @sazabiai (YouTube)
- No Product Hunt launch found
- No app store or Chrome extension presence found
- No GitHub open-source repos found

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Sazabi |
|---|---|---|---|
| **Datadog** | Public (DDOG) | ~$2.7B ARR (public filings) | Full-stack observability with 47K+ customers; three-pillars model Sazabi rejects |
| **Dash0** | $155M total, $1B valuation (dash0.com, Mar 2026) | Revenue unknown; 600+ customers (dash0.com) | OpenTelemetry-native with AI agents; accepts all signal types unlike Sazabi's logs-only |
| **Cribl** | $600M total, $3.5B valuation (Crunchbase) | $300M+ ARR (Fortune, Feb 2026) | Data pipeline/routing layer; complements rather than replaces observability backends |
| **SigNoz** | $6.5M (SignalFire) | Revenue unknown | Open-source, OpenTelemetry-native; self-hosted option Sazabi lacks |
| **Observe** | $393M total; acquired by Snowflake Jan 2026 (observeinc.com) | 180% NRR, tripled revenue YoY (observeinc.com, Jul 2025) | Enterprise-focused, Snowflake-native architecture |

**Why now:**
- [Inferred]: LLM capabilities crossed a threshold in 2024–2025 enabling reliable log summarization and conversational querying at production scale, making the logs-only approach technically viable.
- [Inferred]: The proliferation of AI coding agents (Claude Code, Cursor, Codex) creates a new class of AI-generated code in production that existing observability tools were not designed to monitor—Sazabi's agent-aware observability addresses this gap.
- Cisco's $28B acquisition of Splunk (Mar 2024) and Snowflake's acquisition of Observe (Jan 2026) validate market appetite for observability consolidation (public announcements via search snippets).

## Founders & Team

**Sherwood Callaway** — Founder & CEO
- B.A. History, Davidson College (2012–2016); Dev Bootcamp (2014) (personal blog)
- Frontend Engineer in Test at Crunchbase (2017) (personal blog)
- Software Engineer at Brex (~employee #70, 2019–2021); started Infrastructure, Observability, and Bill Pay teams (personal blog)
- Co-founded Opkit (YC S21, 2021–2024): healthcare voice AI; raised "a few million in VC funding"; acquired by 11x in September 2024 (personal blog; Crunchbase)
- Tech Lead at 11x (~8 months post-acquisition); rebuilt AI sales agent "Alice" using agentic patterns (personal blog)
- a16z scout (YC page)
- Age: 31 (personal blog)
- Twitter/X: @shcallaway — ~3,619 followers (X.com); also @realshcallaway — ~3,040 followers (X.com)
- LinkedIn: linkedin.com/in/sherwoodcallaway
- GitHub: github.com/shcallaway (X.com search result); public repo details not retrieved
- Product Hunt: producthunt.com/@sherwoodcallaway (search result)

**Justin Ko** — Engineer (role at Sazabi per LinkedIn)
- Software Engineer at Crunchbase, Brex, and 11x (LinkedIn search snippet)
- Co-founded Opkit with Sherwood Callaway (described as roommates at the time) (Fierce Healthcare; personal blog reference to "my co-founder Justin")
- LinkedIn: linkedin.com/in/justinmko
- Twitter/X: No public account found
- GitHub: No public repos found
- Note: Not listed as co-founder on the Sazabi YC page; only Sherwood Callaway is listed as founder.

**Co-founder relationship:** Sherwood Callaway and Justin Ko were roommates who co-founded Opkit together (personal blog). They both worked at Crunchbase and Brex before co-founding Opkit, and both joined 11x after the Opkit acquisition (LinkedIn search snippets).

**Founder-market fit:** Callaway started Brex's Infrastructure and Observability teams and experienced the pain of production debugging firsthand at a hyper-growth fintech (personal blog). His subsequent experience building one of the first LLM-based voice agents at Opkit and rebuilding an agentic AI system at 11x provides direct domain expertise in both observability infrastructure and AI-agent architectures. The company lists backing from leaders at Vercel, Graphite, Daytona, Browserbase, LangChain, Mastra, and Replit (sazabi.com; YC page).

## Key Risks

**Name collision:** "Sazabi" is a well-known mobile suit from the Gundam anime franchise (MSN-04 Sazabi). Multiple unrelated Twitter accounts, merchandise listings, and a Japanese company (株式会社サザビー) share the name, creating SEO competition and potential brand confusion. The company previously used sazabi.ai as a domain (parsers.vc) and now uses sazabi.com.

**Pre-product stage with well-funded competitors:** Full platform launch is scheduled for end of 2026 (SiliconANGLE, Apr 2026). Dash0 raised $110M at a $1B valuation in March 2026 (dash0.com) and already has 600+ customers. Datadog ships AI features on an existing base of 47K+ customers. Sazabi must achieve product-market fit while competitors iterate on established platforms.

**Logs-only thesis risk:** The core architectural bet—that logs alone can replace metrics and traces—is contrarian to the OpenTelemetry standard adopted by Dash0, SigNoz, and the broader CNCF ecosystem. If the industry standardizes on OpenTelemetry, Sazabi's approach may face adoption friction from teams already instrumented with OTel SDKs.

**Single-founder listing:** Only Sherwood Callaway is listed as founder on the YC page despite Justin Ko's deep involvement since Opkit. The organizational structure and equity distribution are unclear from public sources.

**Narrow initial market segment:** Sazabi explicitly targets early-stage and growth-stage tech companies (SiliconANGLE, Apr 2026), which have smaller budgets and higher churn rates. Expanding upmarket to enterprise (where observability spend concentrates) would require sales motion and compliance capabilities beyond the current positioning.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.9B–$28.5B in 2025 depending on scope definition; 11–20% CAGR (Mordor Intelligence, Research Nester via search snippets) |
| SAM | No public data found |
| Traction | Pilot program with waitlist active (sazabi.com); platform launch scheduled end of 2026 (SiliconANGLE, Apr 2026); SiliconANGLE press coverage (Apr 8, 2026) |
| Revenue Signal | No public data found |
| Founders | Sherwood Callaway (Founder & CEO): 2x YC founder, started Brex Infra/Observability teams, Opkit acquired by 11x Sep 2024, a16z scout |
| Competitors | Datadog (public, ~$2.7B ARR, full-stack three-pillars); Dash0 ($155M raised, $1B val, 600+ customers, OTel-native AI agents); Cribl ($600M raised, $3.5B val, $300M+ ARR, data pipeline); SigNoz ($6.5M raised, revenue unknown, open-source OTel-native); Observe ($393M raised, acquired by Snowflake Jan 2026, enterprise-focused) |
| Moat Signals | SOC 2 Type II, SOC 1, ISO 27017, ISO 27001 certifications (sazabi.com); customer-specific log history accumulation (sazabi.com) |
| Risk Factors | Pre-product with well-funded competitors, logs-only contrarian bet vs. OpenTelemetry standard, name collision with Gundam franchise |
| Founder Reach | Sherwood Callaway: Twitter ~3.6K followers (X.com), LinkedIn profile active, GitHub github.com/shcallaway |
| Distribution Signals | Angel backing from leaders at Vercel, Graphite, LangChain, Replit, Browserbase, Mastra, Daytona (sazabi.com); institutional investors: Village Global, Agent Fund, Hawk Hill Ventures, Zypsy (Zypsy blog, parsers.vc) |
| Emails | No public data found |
