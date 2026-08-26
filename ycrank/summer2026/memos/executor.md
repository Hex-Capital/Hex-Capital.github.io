# Executor

> The open source integration management layer for AI.

| Field | Value |
|-------|-------|
| Website | https://executor.sh |
| YC Page | https://www.ycombinator.com/companies/executor |
| Batch | Summer 2026 ([YC](https://www.ycombinator.com/companies/executor), Aug 2026) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Artificial Intelligence, SaaS |
| YC Partner | Jared Friedman ([YC](https://www.ycombinator.com/companies/executor), Aug 2026) |
| Emails | rhys@executor.sh ([YC launch](https://www.ycombinator.com/companies/executor), Aug 2026) |

## The Idea

- **Problem:** Teams using multiple AI agents must repeatedly configure OAuth credentials and connectors, often face one-account-per-service limits, and lack consistent controls over destructive actions ([YC launch](https://www.ycombinator.com/companies/executor), Aug 2026).
- **Approach:** Executor converts MCP servers, OpenAPI specifications, GraphQL APIs, and custom integrations into one searchable execution interface, loads schemas on demand, applies per-tool policies, and runs calls in a sandbox ([Executor](https://executor.sh/), Aug 2026).
- **Differentiation:** Executor combines arbitrary-protocol ingestion with an MIT-licensed local CLI, desktop app, self-hosting, and cloud service, while Composio emphasizes 1,000+ packaged toolkits, Arcade emphasizes user-scoped authorization and IdP integration, and Nango combines managed authentication with syncs, triggers, and webhooks ([Executor GitHub](https://github.com/UsefulSoftwareCo/executor), [MCP platform comparison](https://rywalker.com/research/mcp-integration-platforms), Jun–Aug 2026).
- **Business Model:** Cloud pricing is $0 for three members and 10,000 monthly executions, $150 per organization monthly with 250,000 executions, $0.20 per additional 1,000 executions on both tiers, and custom Enterprise pricing ([Executor pricing](https://executor.sh/), Aug 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** [Inferred]: Executor uses its MIT-licensed GitHub repository, npm CLI, desktop downloads, and free cloud tier for adoption before converting organizations to Team or Enterprise plans ([Executor](https://executor.sh/), [GitHub](https://github.com/UsefulSoftwareCo/executor), Aug 2026).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Centralized credentials, organization-specific tool policies, and shared connections across multiple agent clients could create switching costs, but no retention or migration data is public.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Microsoft publishes an MIT-licensed MCP gateway, Zapier exposes more than 9,000 applications and 30,000 actions through MCP, and multiple funded startups offer managed authentication and tool catalogs ([Microsoft GitHub](https://github.com/microsoft/mcp-gateway), [Zapier](https://zapier.com/blog/multi-agent-systems-mcp/), May–Aug 2026).

## Market & Traction

- **Traction signals:**
  - 3.0K GitHub stars and 230 forks ([GitHub](https://github.com/UsefulSoftwareCo/executor), Aug 2026).
  - Approximately 14,000 npm downloads per week ([YC launch](https://www.ycombinator.com/companies/executor), Aug 2026).
  - Approximately 3,000 local-version users ([YC launch](https://www.ycombinator.com/companies/executor), Aug 2026).
  - 2,580 repository commits ([GitHub](https://github.com/UsefulSoftwareCo/executor), Aug 2026).
  - Zero active YC job postings ([YC](https://www.ycombinator.com/companies/executor), Aug 2026).
- **Competitors (minimum 3, up to 5):**
  - Arcade.dev ($72M raised, revenue unknown): provides an auth-first MCP runtime with user-scoped authorization, IdP integration, and an 8,000-tool catalog ([Arcade](https://www.arcade.dev/blog/arcade-series-a/), Jun 2026).
  - Composio ($29M raised, revenue unknown): supplies 1,000+ packaged toolkits, managed OAuth, and shared tool-learning infrastructure rather than Executor’s arbitrary-schema local gateway model ([Composio](https://composio.dev/blog/series-a), Jul 2025).
  - Nango ($7.5M seed, several million dollars ARR): covers authentication, tool calls, two-way syncs, triggers, webhooks, MCP, and batch operations across 900+ APIs ([Nango](https://nango.dev/blog/nango-raises-7-5m-led-by-gradient), Apr 2026).
- **Why now:** [Inferred]: MCP progressed from its November 2024 launch to more than 10,000 public servers and adoption by ChatGPT, Cursor, Gemini, Microsoft Copilot, and Visual Studio Code by December 2025, creating demand for shared authentication and governance infrastructure ([Anthropic](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation), Dec 2025).

## Founders & Team

- **Rhys Sullivan (Founder):**
  - Background: Attended Champlain College from 2019 to 2023, worked as a software engineer at Vercel, Microsoft, Raven Software, and Epic Games, and built bootstrapped Answer Overflow to 1.5M monthly users ([LinkedIn](https://www.linkedin.com/in/rhyssullivan), [YC](https://www.ycombinator.com/companies/executor), Aug 2026).
  - Twitter/X: @RhysSullivan, 57,245 followers ([Lightbrd profile mirror](https://lightbrd.com/RhysSullivan), Aug 2026).
  - LinkedIn: “Founder at Executor,” with approximately 2K followers ([LinkedIn](https://www.linkedin.com/in/rhyssullivan), Aug 2026).
  - GitHub: @RhysSullivan; Executor is the top attributable repository with 3.0K stars, followed by Answer Overflow with approximately 2K stars ([GitHub](https://github.com/RhysSullivan), Aug 2026).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Sullivan’s software-engineering work at Vercel and development of the integration-oriented Answer Overflow project document experience with developer infrastructure, APIs, and open-source distribution ([YC](https://www.ycombinator.com/companies/executor), [GitHub](https://github.com/RhysSullivan), Aug 2026).

## Key Risks

- **Incumbent distribution:** Zapier already exposes more than 9,000 applications and 30,000 actions through MCP, while Microsoft offers an open-source gateway, giving established vendors overlapping integration and governance surfaces ([Zapier](https://zapier.com/blog/multi-agent-systems-mcp/), [Microsoft GitHub](https://github.com/microsoft/mcp-gateway), 2026).
- **Protocol churn:** Microsoft’s MCP migration guidance describes the 2026-07-28 specification change as removing protocol-level sessions and requiring dual-stack compatibility with the 2025-11-25 lifecycle, creating ongoing compatibility work ([Microsoft MCP guidance](https://github.com/microsoft/mcp-for-beginners/blob/main/01-CoreConcepts/mcp-2026-07-28-release-candidate.md), 2026).
- **Credential concentration:** [Inferred]: Centralizing access to multiple production services increases the impact of a gateway compromise; Executor mitigates this by resolving credentials host-side, excluding raw tokens from the sandbox and model, and applying allow, approval, or block policies ([Executor](https://executor.sh/), Aug 2026).
- **Free self-hosting substitution:** The MIT-licensed CLI, desktop application, and self-hosted server expose the same core functionality as cloud packaging, which may reduce paid-cloud conversion; paid plans add hosted operation, unlimited members, SSO, SCIM, audit logs, and deployment support ([Executor pricing](https://executor.sh/), Aug 2026).
- **Name disambiguation:** “Executor” also identifies an unrelated Windows application launcher at executor.dk, creating potential search and brand-result confusion ([Executor.dk](https://executor.dk/), Aug 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 3.0K GitHub stars; ~14K npm downloads/week; ~3,000 local users ([GitHub](https://github.com/UsefulSoftwareCo/executor), [YC](https://www.ycombinator.com/companies/executor), Aug 2026) |
| Revenue Signal | Free tier: three members and 10,000 executions/month; Team: $150/org/month and 250,000 executions; overage: $0.20 per 1,000 executions ([Executor pricing](https://executor.sh/), Aug 2026) |
| Founders | Rhys Sullivan (Founder): Vercel, Microsoft, Raven Software, Epic Games; built Answer Overflow to 1.5M monthly users ([YC](https://www.ycombinator.com/companies/executor), Aug 2026) |
| Competitors | Arcade.dev ($72M raised, revenue unknown, user-scoped auth); Composio ($29M raised, revenue unknown, packaged tool catalog); Nango ($7.5M seed, several million dollars ARR, auth plus sync infrastructure) ([Arcade](https://www.arcade.dev/blog/arcade-series-a/), [Composio](https://composio.dev/blog/series-a), [Nango](https://nango.dev/blog/nango-raises-7-5m-led-by-gradient), 2025–2026) |
| Moat Signals | No public data found |
| Risk Factors | Incumbent MCP platforms, protocol-version churn, centralized credential exposure ([Zapier](https://zapier.com/blog/multi-agent-systems-mcp/), [Microsoft MCP guidance](https://github.com/microsoft/mcp-for-beginners/blob/main/01-CoreConcepts/mcp-2026-07-28-release-candidate.md), [Executor](https://executor.sh/), 2026) |
| Founder Reach | Rhys Sullivan: Twitter/X 57,245, LinkedIn ~2K, top GitHub repo 3.0K stars ([Lightbrd](https://lightbrd.com/RhysSullivan), [LinkedIn](https://www.linkedin.com/in/rhyssullivan), [GitHub](https://github.com/RhysSullivan), Aug 2026) |
| Distribution Signals | 3.0K GitHub stars, 230 forks, ~14K npm downloads/week, and MIT-licensed desktop/CLI/self-hosted distribution ([GitHub](https://github.com/UsefulSoftwareCo/executor), [YC](https://www.ycombinator.com/companies/executor), Aug 2026) |
| Emails | rhys@executor.sh ([YC launch](https://www.ycombinator.com/companies/executor), Aug 2026) |
