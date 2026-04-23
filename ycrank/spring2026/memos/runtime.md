# Runtime

> Let all your team ship safely with coding agents

| Field | Value |
|-------|-------|
| Website | https://www.runtm.com/ |
| YC Page | https://www.ycombinator.com/companies/runtime |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Developer Tools |
| YC Partner | Aaron Epstein |
| Emails | No public data found |

## The Idea

**Problem:** Engineering leaders rolling out coding agents (Claude Code, Codex, Gemini CLI, Copilot) across their organizations lack centralized visibility into what agents are doing, cannot set boundaries or spend limits, and cannot safely extend agent access to non-engineers such as PMs, designers, and marketers (YC page). Today's coding agents run locally or in ad-hoc setups with no session-level audit trail, role-based access control, or cost tracking at the team level.

**Approach:** Runtime provides a control plane layer that sits above coding agents, offering three core capabilities (runtm.com):
- Sandboxed environments with pre-configured templates for monorepos and microservices, auto-provisioned per session
- Session-level observability dashboards tracking tool calls, chain of thought, and costs per user/session/day
- Configurable guardrails: spend limits, file protections, per-user rules, and system instructions

- The platform is agent-agnostic, supporting Claude Code, Codex, OpenCode, Gemini CLI, and GitHub Copilot (runtm.com). Sessions can be triggered from Slack, Linear, GitHub, Jira, Asana, or Teams (YC page). Non-engineers can prompt and ship with one-click PRs and deploys without Git knowledge (runtm.com).

**Differentiation:** Unlike sandbox infrastructure providers (E2B, Daytona, Runloop) that provide raw compute sandboxes for AI code execution, Runtime focuses on the team management layer: role-based access, observability dashboards, and guardrail policies across multiple agent types. Unlike individual coding agents (Cursor, Copilot), Runtime does not provide the AI model itself but instead wraps existing agents with organizational controls. [Inferred]: The closest competitive framing is "Datadog for coding agents" crossed with team access management.

**Business Model:** The website offers a "Start Building Free" tier but no public pricing page with tiers or per-seat costs was found (runtm.com). The product is self-hostable under a multi-license model: AGPLv3 (server), Apache 2.0 (CLI/sandbox/shared), MIT (templates) (GitHub). [Inferred]: Most likely monetization path is a hosted SaaS with usage-based or per-seat pricing and an enterprise tier for self-hosted deployments with premium support, given the open-core licensing structure.

**TAM/SAM:**
- AI Code Assistants Market: $8.14B in 2025, projected to $127.05B by 2032, 48.1% CAGR (MarketsandMarkets, 2025 via search snippet)
- AI Code Tools Market: $7.37B in 2025, projected to $23.97B by 2030, 26.60% CAGR (Mordor Intelligence, 2025 via search snippet)
- [Inferred]: Runtime's SAM is a subset focused on enterprise management/observability tooling for coding agents rather than the agents themselves. No public SAM estimate found for this specific segment.

**GTM / Distribution:**
- The company states it is "live with fast-growing YC scaleups" (YC page).
- Open-source GitHub repository serves as a developer adoption funnel (GitHub, 105 stars).
- Demo booking via Cal.com link on website (runtm.com).
- [Inferred]: Primary distribution is bottom-up through the YC network and open-source adoption, converting to paid hosted/enterprise plans.

## Defensibility

- **Open-source community:** The GitHub repo (runtm-ai/runtm) has 105 stars and 10 forks (GitHub), providing early community traction. [Inferred]: If adopted as a standard control plane, switching costs would increase as teams build workflows around Runtime's guardrail configurations, templates, and integrations.
- **Agent-agnostic positioning:** Supporting multiple coding agents (Claude Code, Codex, Gemini CLI, Copilot, OpenCode) means Runtime is not dependent on any single agent vendor (runtm.com).
- **Session data accumulation:** [Inferred]: Over time, accumulated observability data on agent behavior, cost patterns, and team usage could create a data advantage for benchmarking and policy recommendations, but this is unproven.

**Market structure:** [Inferred]: Coding agent vendors (Anthropic, OpenAI, Google) are unlikely to build comprehensive multi-agent management tools because each has incentive to promote their own agent exclusively. A neutral control plane benefits from being agent-agnostic. However, no structural barrier prevents a platform like GitHub or Atlassian from building similar integrations into their existing developer toolchains.

**Commoditization risk:** The core functionality — sandboxing, observability dashboards, and RBAC — is technically reproducible. E2B, Daytona, and Runloop already provide sandboxing infrastructure. A well-resourced DevOps platform (e.g., GitLab, Atlassian) could add agent observability and guardrails as a feature. The multi-agent compatibility and policy-layer focus provide some differentiation, but the technical barrier is moderate.

## Market & Traction

**Traction signals:**
- GitHub: 105 stars, 10 forks on runtm-ai/runtm (GitHub)
- Show HN post ("Show HN: Runtm — open-source runtime and control plane for agent-built software"): 4 points, 1 comment (Hacker News, ~Jan 2026)
- Discord community exists (runtm.com); member count not publicly available
- Twitter/X company account: @gustrigos (founder's personal account); no separate company account found
- LinkedIn company page: not retrieved
- Product Hunt launch: no launch found
- No public revenue figures, user counts, or named customers disclosed
- YC page states "live with fast-growing YC scaleups" but no specific names (YC page)

**Competitive landscape:**

| Competitor | Funding | Differentiator vs. Runtime |
|---|---|---|
| **E2B** | $21M Series A (SiliconANGLE, Jul 2025) | Pure sandbox infrastructure provider; 88% of Fortune 100 signed up (VentureBeat, 2025); focuses on raw compute sandboxes rather than team management/guardrails |
| **Daytona** | $24M Series A, $31M total (PRNewswire, Feb 2026) | Agent sandbox with sub-90ms cold starts; crossed $1M ARR within two months of relaunch (AlleyWatch, Feb 2026); infrastructure layer, not a control plane |
| **Runloop** | $7M Seed (PRNewswire, Jul 2025) | Enterprise devboxes for AI coding agents with VPC deployment; founded by Scale AI, Google, Stripe veterans; focused on long-lived agent workflows |
| **Cosine** | $3M total (EU-Startups, Aug 2024) | Full coding agent (competitor to Claude Code/Codex itself), not a management layer; offers its own sandboxed enterprise deployment |

[Inferred]: Runtime occupies a different layer than E2B/Daytona/Runloop (management + observability vs. raw compute infrastructure) but could face competitive pressure if those platforms add management features upstream, or if coding agent vendors build native team management.

**Why now:**
- Coding agents crossed mainstream adoption in 2024-2025: GitHub Copilot, Claude Code, and Cursor each surpassed $1B ARR, creating a ~$4B market (Seven Olives, 2026 via search snippet).
- Enterprise teams now deploy multiple competing coding agents simultaneously (runtm.com lists five supported agents).
- [Inferred]: The catalyst is the shift from individual developer use of coding agents to organization-wide rollout, which creates the management, cost control, and compliance gap Runtime addresses.

## Founders & Team

**Gus Trigos** — Founder
- BS Finance and MS Applied Statistics, Hult (gustrigos.com)
- Quantitative analyst at BlackRock (LinkedIn, gustrigos.com)
- Co-founded Mentum (YC S21): AI-powered supply chain/procurement automation. Raised $4.2M seed led by Google's Gradient Ventures with participation from Global Founders Capital, Soma Capital, and YC (TechCrunch, May 2022). Mentum was acquired by Nuvocargo in 2025 (Nuvocargo press release, 2025).
- At Nuvocargo post-acquisition: shipped 4 full-stack products in 3 months and enabled non-engineers to do the same — the direct origin story for Runtime (X/Twitter, @gustrigos)
- Twitter/X: @gustrigos — follower count not retrievable
- LinkedIn: linkedin.com/in/gustavoatrigos
- GitHub: github.com/Gustrigos — 13 public repos; star counts not retrieved
- Mentum co-founders Simon Avila and Daniel Osvath are not listed as Runtime co-founders (YC page)

The YC page lists only Gus Trigos as founder. The team size is listed as 3 (YC page), but the other two team members are not publicly named.

**Co-founder relationship:** Only one founder is listed. No co-founder relationship data applicable.

**Founder-market fit:** Trigos's direct experience enabling non-engineers to ship with coding agents at Nuvocargo post-acquisition is the stated origin of Runtime (X/Twitter). His prior YC batch (S21), successful exit via Mentum's acquisition by Nuvocargo, and fundraising track record ($4.2M seed from Gradient Ventures) demonstrate repeat founder capability. His quantitative finance background (BlackRock, Hult MS Applied Statistics) is adjacent but not core to developer tooling. No advisors or board members were found in public sources.

## Key Risks

**Name collision:** "Runtime" is an extremely common software term. Searching for the company yields results about programming language runtimes, Runtime Ventures (a VC fund), Runtime Revolution (a consulting firm), and others. This creates SEO/discoverability challenges and potential trademark complications.

**Single-founder dependency with unnamed team:** Only Gus Trigos is publicly listed as founder. The other 2 of 3 team members are unnamed in public sources (YC page). The entire public narrative, sales process (Cal.com demo booking), and community engagement run through one person.

**Platform-layer squeeze:** Runtime sits between coding agent vendors (Anthropic, OpenAI, Google) and sandbox infrastructure providers (E2B, Daytona). Either layer could expand into Runtime's management/observability space. Anthropic's Claude Code already ships with built-in cost tracking and permission controls. E2B has announced plans for "orchestration tools for managing fleets of AI agents" (PRNewswire, Jul 2025).

**Open-source monetization risk:** The core product is available under permissive licenses (Apache 2.0, MIT) for CLI/sandbox/templates, with only the server under AGPLv3 (GitHub). Enterprise users may self-host without paying, requiring Runtime to build sufficient proprietary value in a hosted or premium tier.

**Rapidly evolving agent ecosystem:** The coding agent landscape is consolidating quickly — three players hold 70%+ market share (Seven Olives, 2026 via search snippet). If the market standardizes on one or two agents, the value proposition of agent-agnostic management diminishes.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI Code Assistants Market: $8.14B (2025), projected $127.05B by 2032, 48.1% CAGR (MarketsandMarkets, 2025 via search snippet) |
| SAM | No public data found |
| Traction | 105 GitHub stars, 10 forks (GitHub); Show HN: 4 points (Hacker News, ~Jan 2026); "live with fast-growing YC scaleups" (YC page) |
| Revenue Signal | No public data found |
| Founders | Gus Trigos (Founder): BlackRock quant analyst, Mentum co-founder (YC S21, acquired by Nuvocargo 2025), $4.2M raised at Mentum via Gradient Ventures (TechCrunch, May 2022) |
| Competitors | E2B ($21M raised, revenue unknown, pure sandbox infra vs. Runtime's management layer); Daytona ($31M raised, $1M+ ARR, agent sandbox infra); Runloop ($7M raised, revenue unknown, enterprise devboxes) |
| Moat Signals | No public data found |
| Risk Factors | Name collision/SEO, platform-layer squeeze from agent vendors and infra providers, open-source monetization challenge |
| Founder Reach | Gus Trigos: Twitter @gustrigos (count not retrievable), LinkedIn linkedin.com/in/gustavoatrigos, GitHub 13 repos (star count not retrieved) |
| Distribution Signals | Open-source repo with 105 stars (GitHub); Show HN post (Hacker News, ~Jan 2026); YC S26 batch network |
| Emails | No public data found |
