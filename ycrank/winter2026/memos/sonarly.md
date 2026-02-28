# Sonarly

> AI engineer to triage and fix your production alerts

| Field | Value |
|-------|-------|
| Website | https://sonarly.com |
| YC Page | https://www.ycombinator.com/companies/sonarly |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Generative AI |

## The Idea

**Problem:** Software engineering teams are overwhelmed by production alert noise. Monitoring tools like Sentry and Datadog generate high volumes of alerts — the founders report experiencing up to 50 alerts per day at their prior startup (Launch HN post, Feb 2026). Teams cannot trust their alerting systems, leading them to rely on delayed user feedback or slow manual investigation. Existing workflows involve manually filtering duplicates, reading logs, and triaging root causes — tasks that consume engineering time and increase mean time to repair (MTTR). Current solutions are the monitoring platforms themselves (Sentry, Datadog, PagerDuty) combined with manual on-call processes.

**Approach:** Sonarly connects to existing observability tools (Sentry, Datadog) and communication platforms (Slack), then runs a multi-step AI triage process: (1) deduplication of alerts, (2) root cause analysis gathering, and (3) RCA-based regrouping. The system maintains an "internal map of the production system" to help the underlying LLM (Claude) understand multi-service architectures (Launch HN post, Feb 2026). The founders claim this process can reduce, for example, 180 daily alerts down to approximately 5 actionable ones (Launch HN post, Feb 2026). Sonarly then automatically investigates production bugs and generates fixes. As new code deploys, Sonarly keeps alerts and investigations updated automatically (YC company page).

**Differentiation:** Unlike standalone monitoring platforms (Sentry, Datadog) which generate alerts but leave triage to humans, Sonarly sits on top of these tools as an AI-powered triage and remediation layer. Unlike general-purpose coding agents that operate at build time, Sonarly focuses specifically on the run-time/production phase. Compared to AIOps incumbents like BigPanda or PagerDuty's AIOps features, Sonarly targets developer teams directly rather than IT operations centers, and focuses on generating code fixes rather than just correlating and routing alerts. Compared to Keep (open-source AIOps), Sonarly emphasizes AI-generated fix PRs rather than workflow automation and alert correlation.

**Business Model:** The website shows a free tier ($0 USD) (sonarly.com). No paid pricing tiers are publicly visible. [Inferred]: Most likely monetization path is a usage-based or tiered SaaS model charging per alert volume, per seat, or per integration, common in the developer tooling and observability space.

**TAM/SAM:** The global AIOps market was valued at USD 5.3 billion in 2024, estimated to register a CAGR of 22.4% through 2034 (GM Insights, 2025 via search snippet). Alternative estimates place the market at USD 16.42 billion in 2025, forecasted to reach USD 36.60 billion by 2030 at a 17.39% CAGR (Fortune Business Insights via search snippet). These figures cover the broader AIOps market; Sonarly's serviceable segment — AI-powered alert triage and auto-remediation for software engineering teams — is a subset. No public SAM data found specific to this sub-segment.

**GTM / Distribution:** The Launch HN post (Feb 2026) serves as an initial distribution channel targeting developer communities. The company's Twitter handle @SonarlyDev was promoted by Y Combinator's official account (YC tweet, Feb 2026). [Inferred]: Most likely distribution path is bottom-up developer adoption via integrations with existing monitoring stacks (Sentry, Datadog, Slack), with YC network and Hacker News as initial awareness channels.

## Defensibility

Sonarly's stated "internal map of the production system" (Launch HN, Feb 2026) represents a data asset that could deepen with usage — as more alerts are triaged, the system's understanding of each customer's architecture and failure patterns may improve. The deduplication and RCA regrouping logic represents accumulated domain-specific engineering around alert semantics.

No defensibility signals found in public sources beyond the above. [Inferred]: Potential moat could develop via proprietary alert-to-fix data loops — each resolved alert trains better triage models for that specific customer's system — but this is unproven at this stage.

**Market structure:** PagerDuty ($494M ARR as of Jan 2025; PagerDuty fiscal 2025 earnings) and Datadog sell AIOps and alerting as premium add-ons to their monitoring platforms. Adding an AI layer that auto-generates code fixes could cannibalize their professional services and consulting revenue streams. Additionally, auto-fix functionality requires deep integration with code repositories and CI/CD pipelines, which is outside the traditional operational focus of monitoring incumbents. Atlassian's April 2025 announcement to sunset OpsGenie (shutdown scheduled April 2027) (search snippet) has created migration urgency among engineering teams, potentially opening a window for new entrants.

**Commoditization risk:** The core concept — connecting an LLM to monitoring tools and generating fix PRs — is technically reproducible. Any team with LLM access and API integrations to Sentry/Datadog could build a basic version. As noted in the Launch HN discussion, at least one commenter described a similar workflow using GitHub Actions with Claude, though they reported only 30% of auto-generated PRs were mergeable (HN comments, Feb 2026). The differentiation lies in the triage quality (deduplication, context assembly, false positive filtering) rather than the fix generation itself.

## Market & Traction

**Traction signals:**
- Launch HN post received 29 points and 16 comments (Hacker News, ~Feb 17, 2026)
- Y Combinator official Twitter account promoted Sonarly (x.com/ycombinator, Feb 2026)
- LinkedIn company page exists at linkedin.com/company/sonarly-dev (LinkedIn)
- Twitter/X handle: @SonarlyDev (YC company page)
- GitHub organization: github.com/sonarly-dev — no public repositories (GitHub, checked Feb 2026)
- No Product Hunt listing found
- No app store presence found
- No public revenue or user count data found
- 0 open job postings (YC company page)
- Prior venture (Meoria): The founders' previous app reached 100,000+ users and 40,000 downloads within seven months of launch (France Bleu; Apple App Store listing via search snippet)

**Competitive landscape:**

1. **PagerDuty** (public, NYSE: PD; $494M ARR as of Jan 2025, PagerDuty fiscal 2025 earnings): Full incident management platform with SRE Agent for AI-assisted triage. Broad enterprise install base. vs. Sonarly: PagerDuty is an end-to-end incident management platform targeting IT operations broadly; Sonarly focuses specifically on AI-driven alert triage and auto-fix for software engineering teams, sitting on top of existing monitoring tools rather than replacing them.

2. **incident.io** ($62M raised at $400M valuation, Apr 2025, TechCrunch; $9M revenue, Latka via search snippet): Slack-native incident response with AI SRE that automates up to 80% of incident response tasks. Customers include Netflix, Linear, Ramp, Etsy. vs. Sonarly: incident.io focuses on incident coordination and response workflows; Sonarly focuses on pre-incident alert triage and automated code fixes.

3. **BigPanda** ($340M+ raised, $1.2B valuation, BigPanda press release 2022; $80.4M revenue, Latka 2024 via search snippet): Enterprise AIOps platform reducing alert volume by 95%+ via correlation. vs. Sonarly: BigPanda targets large IT operations teams with broad correlation across infrastructure; Sonarly targets developer teams with code-level root cause analysis and fix generation.

4. **Keep** ($2.7M pre-seed raised, Oct 2024, TechCrunch; Runa Capital led): Open-source AIOps platform for alert correlation and workflow automation. vs. Sonarly: Keep is open-source and focuses on alert correlation and workflow orchestration; Sonarly is closed-source and emphasizes AI-generated code fixes.

**Why now:** [Inferred]: Several converging factors: (1) LLM capabilities (particularly Claude and GPT-4 class models) have reached a threshold where they can understand codebases and generate plausible fixes, making automated code remediation feasible for the first time. (2) Coding agents have proven the build-time use case (Cursor, Devin, etc.), creating a natural extension to run-time/production use cases. (3) Atlassian's announcement to sunset OpsGenie (April 2025, shutdown by April 2027) is displacing thousands of engineering teams from their existing alerting workflow, creating a switching moment. (4) Alert fatigue has intensified as microservices architectures generate exponentially more alerts than monolithic systems.

## Founders & Team

**Dimittri Choudhury** — Co-founder
- Student at CY Tech (CY Cergy Paris University), engineering school — dropped out to pursue Sonarly (YC company page)
- Co-founded Meoria, a career guidance app for French high school students navigating Parcoursup, reaching 100,000+ users (France Bleu; YC company page)
- Based in San Francisco
- Twitter/X: No individual public account found (company account: @SonarlyDev)
- LinkedIn: linkedin.com/in/dimittrichoudhury — 500+ connections (LinkedIn via search snippet)
- GitHub: No public repos found
- Email: dimittri@sonarly.dev (YC company page)

**Alexandre Klobb** — Co-founder
- Student at CY Tech (CY Cergy Paris University) (CY Cergy Paris University press release via search snippet)
- Background in web scraping, full-stack development, and AI engineering (YC company page)
- Co-founded Meoria alongside Dimittri Choudhury and Samuel Chomat (France Bleu; CY Cergy Paris University press release via search snippet)
- Twitter/X: No public account found
- LinkedIn: fr.linkedin.com/in/alexandre-klobb-09bb40225 — 500+ connections (LinkedIn via search snippet)
- GitHub: No public repos found

**Co-founder relationship:** Dimittri Choudhury and Alexandre Klobb were both students at CY Tech (CY Cergy Paris University) and co-founded Meoria together prior to Sonarly (CY Cergy Paris University press release via search snippet). They share an educational background and a prior co-founding experience.

**Founder-market fit:** Both founders experienced the production alert problem firsthand while running Meoria at scale (100,000+ users), where they report receiving up to 50 alerts per day (Launch HN, Feb 2026). Their prior experience building and operating a consumer product that scaled to 100,000+ users gives them direct exposure to the pain of production monitoring noise. Alexandre Klobb's background in web scraping and AI engineering aligns with the technical requirements of building integrations with monitoring tools and LLM-powered triage. The YC primary partner assigned is Jared Friedman (YC company page).

## Key Risks

**Brand confusion with Sonarly.io:** A separate, unrelated company operates at sonarly.io as a "signal-based outreach engine" for LinkedIn/email sales automation (sonarly.io). This creates potential confusion in search results, brand recognition, and domain authority. The YC company uses sonarly.com and sonarly.dev (which redirects to sonarly.com).

**LLM accuracy ceiling for auto-fix:** In the Hacker News discussion, a commenter described a similar workflow (GitHub Actions + Claude) achieving only a 30% mergeable PR rate (HN comments, Feb 2026). If Sonarly's auto-generated fixes have a similarly low acceptance rate, users may lose trust in the system. The founders addressed this by emphasizing that deduplication prevents unnecessary PRs, but the core fix quality remains an open question.

**Monitoring platform dependency:** Sonarly's value depends entirely on integration with third-party monitoring tools (Sentry, Datadog, Slack). Changes to these platforms' APIs, pricing, or competitive positioning (e.g., if Sentry or Datadog build native AI triage features) could directly undermine Sonarly's access layer. Sentry and Datadog both have active AI/LLM initiatives.

**First-time founders without enterprise sales experience:** Both founders are university-age, dropped out of CY Tech to build Sonarly, and their prior startup (Meoria) was a free consumer app serving French high school students. Selling B2B developer tools to engineering teams requires a different GTM motion, including enterprise procurement, security reviews, and technical integration support.

**Crowded AI-for-DevOps space:** Multiple well-funded competitors and incumbents are converging on the AI alert triage space simultaneously — PagerDuty (SRE Agent), incident.io (AI SRE), BigPanda ($340M+ raised), Keep ($2.7M pre-seed), and monitoring platforms building native AI features. Differentiation at the triage layer may be difficult to sustain.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $5.3B AIOps market in 2024, 22.4% CAGR to 2034 (GM Insights via search snippet); alt. estimate $16.42B in 2025, 17.39% CAGR to 2030 (Fortune Business Insights via search snippet) |
| SAM | No public data found for the specific AI alert triage + auto-fix sub-segment |
| Traction | 29 points on Launch HN (~Feb 17, 2026, Hacker News); YC official Twitter promotion (Feb 2026); Prior venture Meoria: 100K+ users (France Bleu, Apple App Store via search snippet) |
| Revenue Signal | Free tier ($0) on website (sonarly.com). No paid tiers or revenue data publicly available |
| Founders | Dimittri Choudhury (Co-founder): CY Tech, co-founded Meoria (100K+ users). Alexandre Klobb (Co-founder): CY Tech, web scraping/AI eng background, co-founded Meoria |
| Competitors | PagerDuty (public, $494M ARR, broad incident mgmt vs. Sonarly's dev-focused alert triage + auto-fix); incident.io ($62M raised, $400M val, $9M rev, incident coordination vs. alert triage); BigPanda ($340M+ raised, $1.2B val, $80.4M rev, enterprise IT correlation vs. dev-focused auto-fix); Keep ($2.7M pre-seed, open-source AIOps correlation vs. closed-source auto-fix) |
| Moat Signals | "Internal map of the production system" as a potential data asset (Launch HN, Feb 2026); no proven moat at this stage |
| Risk Factors | LLM fix accuracy ceiling, monitoring platform API dependency, brand confusion with sonarly.io, crowded AI-for-DevOps market |
| Founder Reach | Dimittri Choudhury: Twitter not found, LinkedIn 500+, GitHub not found. Alexandre Klobb: Twitter not found, LinkedIn 500+, GitHub not found. Company: @SonarlyDev on Twitter (count not retrievable) |
| Distribution Signals | Launch HN with 29 points (Feb 2026, Hacker News); YC W26 batch; YC official Twitter promotion (Feb 2026); no Product Hunt listing found |
