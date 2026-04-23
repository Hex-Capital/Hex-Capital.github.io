# Superset

> IDE for the AI Agents Era

| Field | Value |
|-------|-------|
| Website | https://www.superset.sh/ |
| YC Page | https://www.ycombinator.com/companies/superset |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 3 |
| Location | San Francisco, CA, US |
| Tags | AI |
| YC Partner | Nicolas Dessaigne |
| Emails | No public data found |

## The Idea

**Problem:** Developers using AI coding agents (Claude Code, Codex, Gemini CLI, etc.) run them sequentially, waiting for each to complete before starting the next. With agents becoming standard infrastructure for engineering teams, this serial workflow creates significant idle time. Existing IDEs (VS Code, Cursor) were designed for single-agent or single-developer use and lack native support for orchestrating many agents in parallel with proper isolation.

**Approach:** Superset is a desktop code editor that orchestrates 100+ CLI-based coding agents in parallel (superset.sh). Each agent operates in an isolated Git worktree, preventing merge conflicts (superset.sh). The product provides centralized monitoring, a built-in diff viewer, PR review capabilities, and single-click worktree opening in VS Code, Cursor, Xcode, JetBrains IDEs, or Terminal (superset.sh). It is agent-agnostic, supporting Claude Code, Codex, Cursor Agent, Gemini CLI, GitHub Copilot, OpenCode, and others (superset.sh).

**Differentiation:** Unlike Conductor (closed-source Mac app focused on Claude Code), Superset is open-source under Elastic License 2.0 (GitHub) and supports any CLI-based agent. Unlike Cmux (a Ghostty-based terminal with split panes, not an orchestrator), Superset provides full IDE functionality with workspace management, not just terminal multiplexing (x.com/melvynxdev). Unlike Composio's Agent Orchestrator (a CLI tool focused on autonomous task decomposition), Superset provides a GUI-based editor experience with visual monitoring and IDE integrations (GitHub ComposioHQ discussion #526).

**Business Model:** Free tier ($0, 1 user, local workspaces only), Pro tier ($15/user/month billed yearly), Enterprise tier (custom pricing with SSO, audit logs, SLA) (superset.sh/pricing). All plans include unlimited workspaces and projects; Pro adds remote workspaces, unlimited users, and Linear integration (superset.sh/pricing). The job posting for a "Former Founder" role at $175K–$225K + 1–2% equity suggests active hiring and early-stage compensation benchmarks (YC page).

**TAM/SAM:** The global AI orchestration market was valued at $11.65B in 2025 and is projected to reach $60.34B by 2034 at 20.05% CAGR (Fortune Business Insights, 2026 via search snippet). [Inferred]: The SAM for developer-facing multi-agent IDE tooling is a subset of this broader market; no public SAM estimate exists specific to this segment.

**GTM / Distribution:** Open-source distribution via GitHub (9.9k stars) drives developer adoption (GitHub). Product Hunt launch achieved #1 Day Rank with 552 upvotes (Product Hunt, Feb 27, 2026). The website lists logos of Microsoft, OpenAI, Netflix, Google, Salesforce, Vercel, Cloudflare, Amazon, ByteDance, Ramp, Datadog, and others as trusted users (superset.sh). [Inferred]: Primary GTM is bottom-up developer adoption through open-source, converting teams to paid Pro/Enterprise tiers for remote workspaces and collaboration features.

## Defensibility

- **Open-source community**: 9.9k GitHub stars and 817 forks create a contributor ecosystem and switching costs through integrations and workflows (GitHub).
- **Agent-agnostic architecture**: Supporting any CLI-based agent positions Superset as a neutral orchestration layer, increasing lock-in as developers configure agent-specific workflows (superset.sh).
- [Inferred]: Data advantages could develop as teams accumulate workflow configurations, agent performance data, and workspace templates, but no evidence of this moat existing today.

**Market structure:** Cursor (the closest well-resourced incumbent at $1B+ ARR per Faros.ai, 2026 via search snippet) is optimized around its own integrated AI model and single-agent workflow. [Inferred]: Adding multi-agent orchestration with third-party CLI agents would cannibalize Cursor's own AI model revenue and fundamentally change its product architecture.

**Commoditization risk:** Multiple competitors have emerged rapidly: Conductor, Cmux, Composio AO, and T3Code all launched in early 2026. The core concept of Git worktree isolation for parallel agents is technically reproducible. Elastic License 2.0 permits forks for internal use but restricts competing hosted services (GitHub).

## Market & Traction

**Traction signals:**
- 9.9k GitHub stars, 817 forks (GitHub, as of Apr 2026)
- Product Hunt: 552 upvotes, #1 Day Rank (Product Hunt, Feb 27, 2026)
- Garry Tan listed as a maker on the Product Hunt launch (Product Hunt)
- Latest release: desktop-v1.5.8 (GitHub, Apr 21, 2026) — active development cadence
- 387 open issues (GitHub, Apr 2026) — indicates active user engagement
- Company logos on website: Microsoft, OpenAI, Netflix, Google, Salesforce, Vercel, Cloudflare, Amazon, ByteDance, Ramp, Datadog, Intercom, Perplexity, Wix (superset.sh)
- 10+ user testimonials from founders/engineers at named companies (superset.sh)
- Twitter/X: @superset_sh (x.com; follower count not retrievable)
- LinkedIn: company page exists (linkedin.com/company/superset-sh; follower count not retrievable)
- Hiring: 1 open role — "Former Founder," SF, $175K–$225K, 1–2% equity (YC page)
- Kiet Ho's prior project Onlook has 25.6k GitHub stars (GitHub/Kitenite), indicating proven open-source distribution ability

**Competitive landscape:**

| Competitor | Differentiator vs. Superset | Funding |
|---|---|---|
| **Conductor** | Closed-source Mac app; deep Claude Code integration; Linear integration built-in | $22M Series A from Spark and Matrix (search snippet via morphllm.com) |
| **Cmux (Manaflow)** | Native macOS terminal (Swift/Ghostty), not an IDE; GPU-accelerated; 9.5k GitHub stars in 2 weeks | YC S24; funding amount not found |
| **Composio AO** | CLI-based autonomous orchestrator; handles CI fixes and merge conflicts autonomously; task decomposition | $29M total ($4M seed + $25M Series A from Lightspeed) (PR Newswire, 2026) |
| **T3Code** | Requires Node + OpenAI key; backed by Theo/Ping | No public data found |

**Why now:** [Inferred]: The convergence of several factors in 2025–2026 created this opportunity: (1) Claude Code, Codex, and Gemini CLI all launched as production-grade CLI coding agents, creating a multi-agent ecosystem for the first time; (2) Cursor crossed $1B ARR (Faros.ai, 2026 via search snippet), validating AI-native IDE spending; (3) AI agent adoption reached 85% of organizations in at least one workflow (search snippet via index.dev); (4) Git worktree support matured as a standard isolation primitive.

## Founders & Team

**Kiet Ho** — Co-founder
- Ex-CTO at Onlook (YC W25), prev software engineer at Amazon and ServiceNow (YC page, superset.sh/team)
- Onlook ("The Cursor for Designers") reached 25.6k GitHub stars (GitHub/Kitenite)
- Twitter/X: @kietho_ (superset.sh/team) / @FlyaKiet (YC page); follower count not retrievable
- LinkedIn: linkedin.com/in/kiet-ho
- GitHub: github.com/Kitenite — 502 followers, 66 public repos; notable: Superset (9.9k stars), Onlook (25.6k stars) (GitHub)

**Satya Patel** — Co-founder
- Ex-CTO at Untether Labs (YC W23), prev engineer at Google, Amazon, Facebook, and Scribe (YC page, superset.sh/team)
- Twitter/X: @saddle_paddle; follower count not retrievable
- LinkedIn: linkedin.com/in/saddlepaddle
- GitHub: github.com/saddlepaddle — 49 followers, 6 public repos (GitHub)

**Avi Peltz** — Co-founder
- Ex-CTO at Adam (YC W25, AI-powered CAD), co-founded BioGlyph (biotech software, received investment from Dotmatics) (YC page, Crunchbase, PR Newswire)
- Education: California Polytechnic State University, San Luis Obispo (Cal Poly Innovation Quest, via search snippet)
- Twitter/X: @avimakesrobots; follower count not retrievable
- LinkedIn: linkedin.com/in/avipeltz
- GitHub: github.com/avipeltz — 57 followers, 63 public repos (GitHub)

**Co-founder relationship:** All three are described as "ex-YC CTOs" (superset.sh/team). Kiet Ho (Onlook, W25) and Avi Peltz (Adam, W25) were in the same YC batch and likely connected through the YC network. All three are based in San Francisco (GitHub profiles).

**Founder-market fit:** All three founders have direct experience building developer tools as YC-backed CTOs. Kiet Ho demonstrated open-source distribution expertise with Onlook (25.6k stars). Satya Patel brings large-company engineering experience from Google, Amazon, and Facebook. Avi Peltz brings CAD/robotics technical depth and prior startup founding experience (BioGlyph, Adam). Garry Tan (YC CEO) was listed as a maker on the Product Hunt launch (Product Hunt).

## Key Risks

**Name confusion and discoverability:** "Superset" conflicts with Apache Superset (popular open-source data visualization, ~62k GitHub stars), super{set} (SF startup studio, $90M fund per TechCrunch Mar 2024), and Superset Finance (stablecoin company). This creates SEO competition, brand confusion in searches, and potential investor confusion with funding data attributed to the wrong entity.

**Rapidly crowding competitive space:** Conductor ($22M Series A), Cmux (9.5k GitHub stars in 2 weeks), and Composio AO ($29M total funding) all launched in the same window (early 2026). The core abstraction (Git worktree isolation + parallel agent sessions) is technically straightforward to replicate.

**Platform dependency on upstream agents:** Superset's value is derived entirely from the quality and availability of third-party coding agents (Claude Code, Codex, Gemini CLI). Changes to agent pricing, API access, or capabilities are outside Superset's control. If a dominant agent provider (e.g., Anthropic, OpenAI) builds native parallelism into their own product, the orchestration layer becomes redundant.

**Elastic License limitations:** ELv2 permits internal use and forking but restricts competing hosted services (GitHub). This hybrid license may deter some enterprise adopters who require permissive OSS licenses (Apache 2.0, MIT) and may limit community contributions compared to fully open-source competitors like Cmux (GPL).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $11.65B in 2025, projected $60.34B by 2034 at 20.05% CAGR (Fortune Business Insights, 2026 via search snippet) |
| SAM | No public data found |
| Traction | 9.9k GitHub stars, 817 forks (GitHub, Apr 2026); 552 upvotes #1 Day Rank (Product Hunt, Feb 27, 2026); logos from Microsoft, OpenAI, Netflix, Google, etc. on website (superset.sh) |
| Revenue Signal | Free / $15 per user/month Pro / Custom Enterprise (superset.sh/pricing) |
| Founders | Kiet Ho: ex-CTO Onlook (W25), Amazon, ServiceNow. Satya Patel: ex-CTO Untether Labs (W23), Google, Amazon, Facebook. Avi Peltz: ex-CTO Adam (W25), BioGlyph, Cal Poly SLO. |
| Competitors | Conductor ($22M Series A via search snippet, revenue unknown, closed-source Claude Code focus); Composio AO ($29M total per PR Newswire, revenue unknown, autonomous CLI orchestrator); Cmux/Manaflow (YC S24, funding unknown, native macOS terminal) |
| Moat Signals | 9.9k GitHub stars + 817 forks community (GitHub); agent-agnostic architecture (superset.sh) |
| Risk Factors | Name collision with Apache Superset/super{set}/Superset Finance; rapidly crowding competitor space; platform dependency on third-party AI agents |
| Founder Reach | Kiet Ho: Twitter @kietho_, GitHub 502 followers. Satya Patel: Twitter @saddle_paddle, GitHub 49 followers. Avi Peltz: Twitter @avimakesrobots, GitHub 57 followers. (GitHub; Twitter counts not retrievable) |
| Distribution Signals | Product Hunt #1 Day Rank, 552 upvotes (Product Hunt, Feb 27, 2026); 9.9k GitHub stars (GitHub); Garry Tan listed as maker (Product Hunt) |
| Emails | No public data found |
