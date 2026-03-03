# 21st.dev

> Orchestration layer for coding agents

| Field | Value |
|-------|-------|
| Website | https://21st.dev |
| YC Page | https://www.ycombinator.com/companies/21stdev |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, B2B, Design Tools |
| YC Partner | Ankit Gupta |
| Emails | No public data found |

**Note on product pivot:** The company originally built 21st.dev, a UI component registry/marketplace for shadcn/ui-based React components. It subsequently built Magic MCP (an AI agent for generating UI components) and then pivoted its primary focus to **1Code**, an orchestration layer for AI coding agents. The YC listing is under "1code (21st.dev)" (YC company page). Prior-product metrics (21st.dev component registry) are labeled separately from current-product metrics (1Code) throughout this memo.

## The Idea

**Problem:** Software engineering teams increasingly use AI coding agents (Claude Code, OpenAI Codex) but lack tooling to manage multiple agents running in parallel, coordinate their outputs across git branches, and automate agent-driven workflows like PR reviews, CI/CD fixes, and task management. Today, developers run agents one-at-a-time in terminal sessions without orchestration, live previews, or background execution. The customer segment is engineering teams that ship frequently and want to scale their use of AI coding agents.

**Approach:** 1Code provides a desktop app (Mac) and web app that serves as a control panel for AI coding agents. Each agent chat runs in its own isolated git worktree. The platform supports parallel execution of multiple Claude Code or Codex agents, background cloud sandboxes that continue running when the developer's laptop is closed, live browser previews, and an integrated git client with diff previews. Automations allow teams to tag @1code in GitHub, Linear, or Slack to trigger agent tasks — including automated PR reviews, Linear ticket-to-PR workflows, and CI/CD failure fixes. A programmatic API enables spinning up Claude Code in a remote sandbox with a single POST call (YC company page; GitHub README).

**Differentiation:** Unlike Cursor (an AI-enhanced IDE), 1Code is agent-orchestration middleware that wraps existing coding agents rather than replacing the IDE. Unlike Devin (a fully autonomous agent accessed via Slack), 1Code gives developers a visual control panel with real-time diff previews and git isolation while maintaining local-first operation. Unlike Cline (an open-source VS Code extension), 1Code offers background cloud sandboxes, multi-agent parallel execution, and workflow automations triggered from project management tools. The open-source codebase (Apache 2.0 license) differentiates from Devin's closed-source approach (GitHub, 21st-dev/1code).

**Business Model:** Freemium SaaS with two tiers: $20/month for the desktop UI and web app, and $100/month for automations, API access, and the full feature suite (YC company page). A free tier with limited functionality is also available (AlternativeTo via search snippet).

**TAM/SAM:** The global AI assistant market is projected at $3.35 billion in 2025, growing to $21.11 billion by 2030 at a CAGR of 44.5% (MarketsandMarkets via search snippet). The broader AI agent market crossed $7.6 billion in 2025, projected to exceed $50 billion by 2030 (Index.dev via search snippet). No public SAM estimate specific to coding agent orchestration tools was found.

**GTM / Distribution:** The company has leveraged its prior 21st.dev component registry user base (1M+ users across products, per YC page) as a distribution channel, cross-promoting 1Code to an existing developer audience. Product Hunt launches have been a primary acquisition channel (three launches with 1,600+ cumulative upvotes). The open-source GitHub repo (5.1K stars) serves as a developer discovery funnel. [Inferred]: The $20/$100 per-seat pricing suggests a bottom-up PLG motion targeting individual developers and small teams, with the API and automations tier aimed at team-level adoption.

## Defensibility

The company's prior 21st.dev component registry (1M+ users, 5K GitHub stars) and Magic MCP (4.2K stars) create a distribution advantage: an existing developer community that can be funneled into the 1Code product. The open-source repo (5.1K stars, 536 forks, 22 contributors) builds community lock-in and contribution flywheel. Workflow automations integrated with GitHub, Linear, and Slack create switching costs once teams embed 1Code into their CI/CD and project management pipelines.

**Market structure:** Large incumbents (GitHub/Microsoft with Copilot, JetBrains) are building AI features into their existing IDEs, which creates a bundling advantage but also constrains them to their IDE-centric paradigm. 1Code's agent-agnostic orchestration approach (wrapping Claude Code, Codex, and potentially future agents) is structurally different from IDE vendors who are incentivized to keep users inside their specific editor. [Inferred]: IDE vendors face a business model conflict in building agent-agnostic orchestration that could direct users to competing AI models or agents.

**Commoditization risk:** The orchestration layer concept is reproducible. Cursor already introduced Cloud Agents with parallel subagent support in v2.5 (Feb 2026) (DigitalOcean via search snippet). Cline added native subagents (v3.58) and CLI 2.0 with headless CI/CD mode in Feb 2026 (Cline blog via search snippet). GitHub Copilot CLI went GA in Feb 2026 with agentic capabilities (search snippet). The core technical functionality — wrapping CLI-based agents in a visual UI with git worktree isolation — does not require deep proprietary technology. Rapid feature convergence among competitors is underway.

## Market & Traction

### Traction Signals

**Prior product (21st.dev component registry):**
- 1M+ total users across 9 products (YC company page)
- 15K total GitHub stars across all products (YC company page)
- serafimcloud/21st GitHub repo: 5K stars, 265 forks (GitHub)
- Product Hunt launch (Jan 11, 2025): 713 upvotes, 119 comments, Product of the Day (hunted.space)
- Product Hunt 2.0 launch (Jul 8, 2025): 482 upvotes, 57 comments (hunted.space)

**Prior product (Magic MCP):**
- 21st-dev/magic-mcp GitHub repo: 4.2K stars, 246 forks (GitHub)

**Current product (1Code):**
- 21st-dev/1code GitHub repo: 5.1K stars, 536 forks, 22 contributors (GitHub, as of Mar 2026)
- Product Hunt launch (Jan 16, 2026): 493 upvotes, #1 Day Rank, Launch of the Day and Launch of the Week (Product Hunt)
- Latest release: v0.0.83 (Mar 3, 2026) (GitHub)
- Open source under Apache 2.0 license

**Social and community:**
- Company Twitter/X: @21st_dev (joined Oct 2025; follower count not retrievable)
- Serafim Korablev Twitter: @serafimcloud, ~8.3K followers (X.com via search snippet)
- Sergey Bunas Twitter: @sergeybunas, ~1.4K followers (X.com via search snippet)
- LinkedIn company page: linkedin.com/company/21st-dev (follower count not verified)
- Discord community exists (discord.gg/Qx4rFunHfm); member count not publicly available
- GitHub org: github.com/21st-dev

### Competitive Landscape

| Competitor | Key Differentiator vs. 1Code | Funding | Revenue/ARR |
|---|---|---|---|
| **Cursor (Anysphere)** | Full AI IDE with native editor, code completion, and Cloud Agents with parallel subagents; competes as IDE replacement vs. 1Code's agent-agnostic orchestration wrapper | $3.3B total raised, $29.3B valuation (CNBC, Nov 2025) | $1.2B ARR (TechCrunch, Jun 2025 via search snippet) |
| **Devin (Cognition Labs)** | Fully autonomous agent with Slack interface; operates as delegated worker vs. 1Code's developer control panel with real-time visibility | ~$696M total raised, $10.2B valuation (TechCrunch, Sep 2025) | ~$150M combined ARR incl. Windsurf acquisition (Sacra via search snippet) |
| **Cline** | Open-source VS Code extension with 5M+ installs; IDE-integrated vs. 1Code's standalone app; added native subagents and CLI 2.0 in Feb 2026 | $32M Seed + Series A (Cline blog, Jul 2025) | Revenue unknown |
| **GitHub Copilot CLI** | Backed by Microsoft/GitHub; deep GitHub integration; went GA Feb 2026 with agentic capabilities | Microsoft-backed (corporate) | Revenue unknown (bundled with Copilot) |

### Why Now

Claude Code launched as Anthropic's CLI coding agent in 2025, and OpenAI released Codex as an open-source CLI agent shortly after. These powerful terminal-based agents lack built-in GUI orchestration, creating a tooling gap. Gartner reported a 1,445% surge in multi-agent system inquiries from Q1 2024 to Q2 2025 (Deloitte via search snippet). [Inferred]: The specific catalyst is the proliferation of CLI-based coding agents from major AI labs (Anthropic, OpenAI) without corresponding orchestration UIs — 1Code fills the gap between powerful headless agents and the developer's need for visual control, parallel execution, and workflow integration.

## Founders & Team

**Serafim Korablev** — Co-founder & CEO
- Education: Moscow State Academy of Physical Culture (Peerlist)
- Previously: CEO at Via Exchange; co-founded Via crypto protocol ($1.5B GTV) (YC company page); co-founded Gaspump.tg (acquired) and Cutly.app (acquired) (Peerlist/Bento); founded Leto stablecoin crypto wallet (shut down Apr 2023) (Bento). Described as "one of the first full-time vibe-coders since October 2023" (YC company page)
- Twitter/X: @serafimcloud — ~8.3K followers (X.com via search snippet)
- LinkedIn: linkedin.com/in/serafimkorablev
- GitHub: github.com/serafimcloud — 253 followers; 21st repo (5K stars) (GitHub)

**Sergey Bunas** — Co-founder & CTO
- Previously: Senior Full-Stack Engineer at Deel ($12B valuation), leading tax features and integrating Sorted acquisition (TechBullion); Entrepreneur First accelerator (London) (TechBullion)
- Built: Stage (UI/UX tool, 10K+ users, 13K+ projects) (sbunas.com); Suggesty Chrome extension (#1 Product of the Day on Product Hunt, 3K users in first week, featured in Google's internal newsletter) (sbunas.com); Replai (AI response tool, $1K MRR in first month) (sbunas.com); GPT-3 Chrome extension that earned $1,143 in 2 weeks (DEV Community/Indie Hackers)
- Twitter/X: @sergeybunas — ~1.4K followers (X.com via search snippet)
- LinkedIn: linkedin.com/in/s-bunas
- GitHub: github.com/bunasQ — 75 followers (GitHub)

**Eyas Kelani** — Co-founder
- Education: MIT; HEC Paris (LinkedIn via search snippet)
- Previously: Product Manager at Aircall; Senior Product Manager at Shares; ex-Google (ContactOut via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/eyaskelani
- GitHub: github.com/eyask (GitHub)

**Co-founder relationship:** No shared prior employer or university was found between the three founders from the data gathered. Sergey Bunas participated in Entrepreneur First in London (TechBullion); Serafim Korablev's prior ventures were in the crypto space. Crunchbase lists all three as co-founders of 21st.dev, but no public data indicates how or when they connected.

**Founder-market fit:** Serafim's experience as a self-described early "vibe-coder" and builder of 9 shipped products in 10 months demonstrates high-velocity product development in the AI-native developer tools space. Sergey's full-stack engineering background at Deel (enterprise SaaS at scale) and track record of rapidly building and monetizing developer tools (Suggesty, Replai) provides relevant technical and GTM experience. Eyas's MIT education, Google experience, and product management background at Aircall add enterprise product discipline. Together, the team has direct experience building the type of developer community (1M+ users on 21st.dev) that could serve as a distribution moat for 1Code.

## Key Risks

**Rapid competitive convergence:** Cursor added Cloud Agents with parallel subagents in Feb 2026; Cline shipped native subagents and headless CLI in Feb 2026; GitHub Copilot CLI went GA in Feb 2026 with agentic features (DigitalOcean, Cline blog via search snippets). The core 1Code value proposition — parallel agent orchestration with visual UI — is being replicated by larger, better-funded competitors within months of launch.

**Platform dependency on Anthropic/OpenAI:** 1Code wraps Claude Code and Codex as its primary supported agents. Changes to these agents' APIs, licensing, pricing, or capabilities could directly impact 1Code's functionality and value proposition. Anthropic or OpenAI could build competing orchestration UIs natively (Anthropic already offers Claude Code with built-in features like worktrees and parallel tool use).

**Prior-product metric conflation:** The 1M+ users and 15K GitHub stars cited on the YC page are cumulative across 9 products, predominantly driven by the prior 21st.dev component registry. Current-product (1Code) traction — 5.1K GitHub stars and one Product Hunt launch — represents early-stage adoption that has not yet been independently validated with revenue or active user metrics.

**Pivot risk / focus dilution:** The team has launched 9 products in 10 months, spanning UI component marketplaces, MCP servers, and agent orchestration. Maintaining multiple products (21st.dev registry, Magic MCP, 1Code) with a 3-person team could dilute engineering focus on the core 1Code product at a critical growth stage.

**Pricing pressure from well-funded open-source alternatives:** Cline ($32M raised) is free and open-source with 5M+ installs. GitHub Copilot CLI is bundled into existing GitHub/Copilot subscriptions. 1Code's $20-$100/month pricing faces pressure from free or bundled alternatives with larger install bases.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI assistant market: $3.35B (2025) → $21.11B (2030), CAGR 44.5% (MarketsandMarkets via search snippet); AI agent market: $7.6B (2025), projected $50B by 2030 (Index.dev via search snippet) |
| SAM | No public data found for coding agent orchestration segment specifically |
| Traction | **Prior products:** 1M+ users across 9 products (YC page); 21st.dev PH launch: 713 upvotes, #1 Day (Jan 2025, hunted.space); 21st.dev 2.0 PH: 482 upvotes (Jul 2025, hunted.space). **Current product (1Code):** 5.1K GitHub stars (GitHub, Mar 2026); PH launch: 493 upvotes, #1 Day + Week (Jan 2026, Product Hunt); magic-mcp: 4.2K stars (GitHub) |
| Revenue Signal | Pricing: $20/mo (desktop + web app), $100/mo (automations + API) (YC company page). No public ARR or revenue figures disclosed. |
| Founders | Serafim Korablev (CEO): Serial founder, 2 prior acquisitions (Gaspump.tg, Cutly), Via protocol ($1.5B GTV). Sergey Bunas (CTO): Ex-Deel Sr. Engineer, Entrepreneur First, built Replai ($1K MRR month 1). Eyas Kelani: MIT, ex-Google, PM at Aircall. |
| Competitors | Cursor ($3.3B raised, $1.2B ARR, full AI IDE); Devin/Cognition ($696M raised, ~$150M ARR, autonomous agent); Cline ($32M raised, revenue unknown, open-source 5M+ installs); GitHub Copilot CLI (Microsoft-backed, bundled) |
| Moat Signals | 1M+ user base from prior product (21st.dev); 15K cumulative GitHub stars; open-source community (22 contributors on 1Code); workflow integrations (GitHub/Linear/Slack) create switching costs |
| Risk Factors | Rapid competitive convergence from well-funded incumbents, platform dependency on Anthropic/OpenAI agents, pricing pressure from free alternatives |
| Founder Reach | Serafim: Twitter ~8.3K, LinkedIn (profile found), GitHub 253 followers + 5K-star repo. Sergey: Twitter ~1.4K, LinkedIn (profile found), GitHub 75 followers. Eyas: Twitter not found, LinkedIn (profile found), GitHub (profile found). |
| Distribution Signals | Product Hunt #1 Day three times (Jan 2025, Jul 2025, Jan 2026) (hunted.space, Product Hunt); 5.1K GitHub stars on 1Code (GitHub); open-source Apache 2.0; Discord community (member count unknown) |
| Emails | No public data found |
