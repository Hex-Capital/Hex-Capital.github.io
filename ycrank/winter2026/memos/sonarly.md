# Sonarly

> The AI that fixes production

| Field | Value |
|-------|-------|
| Website | https://sonarly.com |
| YC Page | https://www.ycombinator.com/companies/sonarly |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Generative AI |
| YC Partner | Jared Friedman |
| Emails | dimittri@sonarly.dev |

## The Idea

**Problem:** Engineering teams are overwhelmed by production alert noise from monitoring tools like Sentry, Datadog, and Grafana. The founders experienced this firsthand: while running their prior B2C edtech app (MEORIA) with a 2-person team, they received up to 50 daily alerts (Launch HN post, Feb 2026). Teams either rely on user-reported bugs (too late) or manually dig through logs and traces (too slow). Existing monitoring tools generate alerts but leave investigation and resolution to engineers.

**Approach:** Sonarly connects to a team's existing monitoring stack via OAuth — Sentry, Datadog, Grafana — and triages every alert. It groups duplicate alerts, filters false positives, and performs root cause analysis across logs, traces, metrics, and code. It builds a dynamically updated internal map of the production system (stored as a .md file) that gives AI agents architectural context. Once root cause is identified, Sonarly triggers Claude Code via Model Context Protocol (MCP) integrations to generate ready-to-merge fix PRs, or recommends alerting rule updates to eliminate recurring noise (Launch HN post, Feb 2026).

**Differentiation:** Unlike Sentry's Autofix — which operates within Sentry's own error data — Sonarly aggregates across multiple monitoring tools and adds a deduplication/triage layer before invoking code fixes. Compared to Datadog's Bits AI Dev Agent, which requires full Datadog stack commitment, Sonarly is monitoring-tool-agnostic and designed as a lightweight integration layer. Compared to incident management platforms like incident.io or Rootly, which focus on incident workflow orchestration (on-call routing, postmortems, status pages), Sonarly focuses specifically on automated code-level remediation.

**Business Model:** Currently free ($0) per the company website. No public pricing tiers found. [Inferred]: Most likely monetization path is a usage-based or tiered SaaS model gated on alert volume, number of integrations, or number of auto-generated PRs, consistent with developer-tool pricing patterns in this space.

**TAM/SAM:** The global AIOps platform market was valued at USD 24.24 billion in 2025 (Global Growth Insights, 2025 via search snippet). The observability tools and platforms market was valued at USD 28.5 billion in 2025 and is projected to reach USD 172.1 billion by 2035, at a CAGR of 19.7% (Research Nester, 2025 via search snippet). No public SAM estimate specific to automated production remediation was found.

**GTM / Distribution:** The Launch HN post (Feb 2026, 30 upvotes, 17 comments) serves as an initial distribution channel. Self-serve signup completes in approximately 2 minutes with OAuth-based connection to existing monitoring tools (Launch HN post, Feb 2026). [Inferred]: Most likely distribution path is bottom-up developer adoption via integrations with existing monitoring stacks, leveraging the low friction of OAuth-based onboarding.

## Defensibility

No defensibility signals found in public sources at this stage. [Inferred]: Potential moat could develop via the "living map" of production systems — as Sonarly processes more alerts and builds richer architectural context for each customer's system, the accuracy of root cause analysis and fix quality should improve, creating data-driven switching costs. However, this is unproven at this stage.

**Market structure:** Sentry and Datadog are both building AI-powered autofix features (Sentry Autofix, Datadog Bits AI Dev Agent). However, each incumbent's AI remediation is tightly coupled to its own telemetry data. Building a cross-platform aggregation layer would require incumbents to integrate with competitors' data, which conflicts with their platform lock-in business models. [Inferred]: This business model cannibalization dynamic — where incumbents benefit from keeping users within their ecosystem — creates a structural opening for a monitoring-agnostic third party.

**Commoditization risk:** The core technology stack (LLM-driven code analysis + monitoring API integrations + MCP) uses generally available components. Sentry's Autofix already reports finding correct root cause ~95% of the time and fixing issues ~54% of the time (Sentry blog, 2025). Any team with LLM access and monitoring API integrations could build a similar pipeline. The barrier is in execution quality: accurate deduplication, cross-tool correlation, and architectural context building across diverse production environments.

## Market & Traction

1. **Traction signals:**
   - Launch HN post: 30 upvotes, 17 comments (Hacker News, ~Feb 2026)
   - One user case study shared in Launch HN comments: reduction from ~180 daily alerts to 50 (via deduplication), then to 5 actionable issues after severity-based prioritization (Hacker News, Feb 2026)
   - YC featured Sonarly on X/Twitter (@ycombinator post, link: x.com/ycombinator/status/2022007796686803223)
   - Company Twitter/X: @SonarlyDev (follower count not retrievable)
   - Company LinkedIn: linkedin.com/company/sonarly-dev (follower count not retrievable)
   - Company GitHub: github.com/sonarly-dev (no public repos found in search)
   - No Product Hunt launch found
   - No app store listings found
   - No Discord/Slack community found

2. **Competitive landscape:**

   | Competitor | Funding | Key Differentiator vs. Sonarly |
   |-----------|---------|-------------------------------|
   | **Sentry (Autofix/Seer)** | Public company (NYSE: SENTRY) | Built into Sentry's own error tracking platform; ~95% root cause accuracy, ~54% fix rate (Sentry blog, 2025); limited to Sentry-captured errors only |
   | **Datadog (Bits AI Dev Agent)** | Public company (NASDAQ: DDOG) | Integrated across Datadog's full observability stack; requires Datadog commitment; tested across 2,000+ customer environments (Datadog blog, 2025) |
   | **incident.io** | $96.2M total raised, $62M Series B (incident.io blog, Apr 2025) | Focused on incident management workflow (on-call, postmortems, status pages) with AI agents for resolution; broader incident lifecycle vs. Sonarly's code-fix focus |
   | **Rootly** | $15.2M total raised, $12M Series A (TechCrunch, Aug 2023) | AI-native incident management with Slack-first UX; YC-backed; focuses on MTTR reduction through workflow automation rather than automated code fixes |
   | **FireHydrant** | ~$32.5M total raised (Tracxn via search snippet); acquired by Freshworks in Dec 2025 (Enterprise Times, Dec 2025) | Incident management with pattern recognition AI; now part of Freshworks' broader IT service management suite |

3. **Why now:** [Inferred]: Two enabling changes converged in 2024-2025: (a) LLMs reached sufficient code-generation quality to produce mergeable PRs from production context (evidenced by Sentry's Autofix launch in March 2024 and Datadog's Bits AI Dev Agent in 2025), and (b) the Model Context Protocol (MCP) standard emerged, enabling standardized tool-use integration between AI agents and external systems like monitoring platforms, reducing the integration engineering required to build cross-tool orchestration.

## Founders & Team

**Dimittri Choudhury** — Co-founder
- Education: CY Tech (engineering school, CY Cergy Paris Université) (CY Cergy Paris Université website; LinkedIn via search snippet)
- Previously co-founded MEORIA, a B2C edtech app helping French high school students with university orientation; described as "a ChatGPT of orientation" (Clubic; AirZen Radio; CY Cergy Paris Université website)
- Self-taught in AI through tutorials and freelance projects (CY Cergy Paris Université website)
- Twitter/X: No personal public account found; company account @SonarlyDev
- LinkedIn: linkedin.com/in/dimittrichoudhury (headline: Sonarly)
- GitHub: No public personal repos found

**Alexandre Klobb** — Co-founder
- Education: CY Tech (engineering school, CY Cergy Paris Université) (LinkedIn via search snippet)
- Previously co-founded MEORIA with Choudhury (Clubic; LinkedIn via search snippet)
- LinkedIn headline listed as "Co founder MEORIA | building something New," later updated to "Currently in SF | building something New" (LinkedIn via search snippet)
- Has written about venture capital on Substack, including a post on European junior VC career paths and French startup mafias (alexandre.substack.com via search snippet)
- Twitter/X: No personal public account found
- LinkedIn: linkedin.com/in/alexandre-klobb-09bb40225
- GitHub: No public personal repos found

**Co-founder relationship:** Both founders attended CY Tech together and co-founded MEORIA prior to Sonarly, indicating a multi-year working relationship predating Sonarly.

**Founder-market fit:** Both founders experienced production alert overload firsthand while running MEORIA with a 2-person team receiving up to 50 daily alerts (Launch HN, Feb 2026). This direct pain point motivated building Sonarly. Their self-taught AI background and prior experience building an AI-powered consumer product (MEORIA's orientation chatbot) provides relevant technical context, though neither founder has documented prior experience at established infrastructure or developer-tools companies.

## Key Risks

**Brand confusion with sonarly.io:** A separate, unrelated company operates at sonarly.io as "the world's first signal-based outreach engine" for LinkedIn lead generation. Both companies use the "Sonarly" name in B2B software contexts, creating potential confusion in search results, marketing, and customer discovery.

**Incumbent feature absorption:** Sentry launched Autofix in March 2024 with ~95% root cause accuracy and ~54% fix rate (Sentry blog, 2025). Datadog launched Bits AI Dev Agent in 2025, tested across 2,000+ customer environments (Datadog blog, 2025). Both incumbents are shipping AI-powered remediation as features of their existing platforms, which could reduce the addressable market for a standalone cross-platform solution.

**Cross-platform integration maintenance burden:** Sonarly's value proposition depends on maintaining reliable integrations with multiple third-party monitoring platforms (Sentry, Datadog, Grafana, and potentially others). Each platform's API changes, authentication model updates, and data format evolution creates ongoing maintenance overhead for a 2-person team.

**LLM fix quality and trust threshold:** A Hacker News commenter reported that "30% of the PRs I can merge, the remainder the LLM has applied a bandaid fix" without addressing root causes (Launch HN comments, Feb 2026). Achieving sufficient fix quality for engineers to trust and merge automated PRs in production systems is a core technical challenge that directly determines product value.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AIOps platform market: USD 24.24B in 2025 (Global Growth Insights, 2025 via search snippet); Observability market: USD 28.5B in 2025, CAGR 19.7% to USD 172.1B by 2035 (Research Nester, 2025 via search snippet) |
| SAM | No public data found for automated production remediation sub-segment |
| Traction | Launch HN: 30 upvotes, 17 comments (~Feb 2026); YC feature tweet on X (via @ycombinator); one user case study: 180 alerts reduced to 5 actionable (HN comments, Feb 2026) |
| Revenue Signal | Currently free ($0) (sonarly.com). No public revenue data found |
| Founders | Dimittri Choudhury (Co-founder): CY Tech, co-founded MEORIA edtech app. Alexandre Klobb (Co-founder): CY Tech, co-founded MEORIA edtech app |
| Competitors | Sentry Autofix (public co, revenue unknown for Autofix specifically, built-in to Sentry platform); Datadog Bits AI (public co, built-in to Datadog platform); incident.io ($96.2M raised, revenue unknown, incident workflow focus); Rootly ($15.2M raised, revenue unknown, Slack-first incident management); FireHydrant (~$32.5M raised, acquired by Freshworks Dec 2025) |
| Moat Signals | No public data found. Potential data moat via per-customer production system maps (unproven) |
| Risk Factors | Incumbent feature absorption (Sentry Autofix, Datadog Bits AI), brand confusion with sonarly.io, LLM fix quality trust threshold |
| Founder Reach | Dimittri Choudhury: LinkedIn (count not retrievable), Twitter not found, GitHub not found. Alexandre Klobb: LinkedIn (500+ connections via search snippet), Twitter not found, GitHub not found. Company: @SonarlyDev on X (count not retrievable) |
| Distribution Signals | Launch HN post (~Feb 2026, 30 upvotes); YC Twitter/X feature post; free self-serve signup with ~2 min onboarding. No Product Hunt launch found |
| Emails | dimittri@sonarly.dev |
