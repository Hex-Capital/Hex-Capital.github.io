# 1code (21st.dev)

> Orchestration layer for coding agents

| Field | Value |
|-------|-------|
| Website | https://21st.dev/agents |
| YC Page | https://www.ycombinator.com/companies/1code-21stdev |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, B2B, Design Tools |

## The Idea

**Problem:** Engineering teams using AI coding agents (Claude Code, OpenAI Codex) face friction managing multiple agent sessions, reviewing their outputs, and integrating them into development workflows. Individual agents run serially in terminal sessions without visual interfaces, git isolation, or coordination. Teams that want to run multiple agents in parallel on different features lack tooling to orchestrate, track, and review agent work across repositories and project management tools like Linear.

**Approach:** 1code provides an open-source desktop and web application that wraps AI coding agents (currently Claude Code and OpenAI Codex) in a visual interface. Key mechanisms include: (1) parallel agent sessions with independent git worktree isolation to prevent merge conflicts; (2) background agent execution in cloud sandboxes that persist when the laptop is closed; (3) built-in automation for PR reviews, Linear ticket-to-PR conversion, and CI/CD failure resolution; (4) live browser previews of dev branches; and (5) an API for programmatic agent deployment (1code.dev product page).

**Differentiation:** Unlike Cursor and Windsurf, which are full IDEs with built-in AI assistants, 1code is an orchestration layer that sits on top of existing agents (Claude Code, Codex) rather than replacing them. Unlike OpenHands, which provides its own autonomous coding agent, 1code is agent-agnostic and focused on the control plane. Unlike the raw Claude Code CLI or Codex CLI, 1code adds a visual UI, parallel session management, git worktree isolation, and workflow automation. The open-source approach (Apache-2.0 license) differentiates from proprietary alternatives.

**Business Model:** Three-tier pricing visible on the product page (1code.dev): Free open-source desktop client; Pro at $20/month (web/mobile access, background agents, live previews); Max at $100/month (automations, API access, personal support). A search snippet from the 1code Product Hunt page references "$200k in revenue" (Product Hunt listing via search snippet), but this figure could not be independently verified and may refer to combined revenue across the team's multiple products.

**TAM/SAM:** The AI code assistant market was valued at $5.5 billion in 2024 and is projected to reach $47.3 billion by 2034 at a 24% CAGR (market.us, 2024 via search snippet). The AI orchestration market was valued at $10.82 billion in 2025 and is projected to reach $36.09 billion by 2033 at a 16.25% CAGR (Data Bridge Market Research, 2025 via search snippet). [Inferred]: The serviceable market for coding agent orchestration specifically is a subset of both markets, likely in the low single-digit billions, as it targets only developer teams actively using AI coding agents.

**GTM / Distribution:** The open-source GitHub repository (5,000 stars, 517 forks as of Feb 2026; github.com/21st-dev/1code) serves as the primary distribution channel, with a freemium upgrade path to Pro and Max tiers. The team has prior Product Hunt launch experience across multiple products. The Discord community (discord.gg/8ektTZGnj4) provides a community channel. [Inferred]: The open-source-to-paid conversion funnel is the likely primary GTM motion, supplemented by social media presence and developer community engagement.

## Defensibility

The 1code GitHub repository has accumulated 5,000 stars and 517 forks with 21 contributors (github.com/21st-dev/1code, Feb 2026), suggesting early community adoption. The open-source approach creates potential switching costs if users build workflows around 1code's automation features and API. The team's rapid shipping velocity (9 products in 10 months per 21st.dev/our-story) creates an execution-speed advantage.

No strong network effects are evident at this stage. Data advantages could develop if usage telemetry informs product decisions, but no evidence of this exists publicly.

**Market structure:** Cursor and Windsurf/Cognition are full IDE replacements and compete on the "agent-inside-the-IDE" model. Building an orchestration layer on top of agents is a different architectural bet — it assumes developers will use standalone agents (like Claude Code CLI) rather than IDE-embedded ones. No structural barrier prevents Anthropic from building its own Claude Code UI or Cursor from adding multi-agent orchestration, beyond the organizational cost of splitting product focus.

**Commoditization risk:** The visual wrapper around CLI coding agents is technically reproducible. OpenAI launched its own Codex app with multi-agent orchestration features in February 2026 (serenitiesai.com via search snippet). Claude Code itself could add native multi-session management. Other open-source projects like claude-flow (github.com/ruvnet/claude-flow) target similar orchestration use cases. The automations layer (PR review, Linear integration, CI/CD fixes) provides more differentiation but is also replicable.

## Market & Traction

**Traction signals:**
- 5,000 GitHub stars and 517 forks for the 1code repository (github.com/21st-dev/1code, Feb 2026)
- 21 contributors to the open-source project (github.com/21st-dev/1code, Feb 2026)
- 1 million+ total users across all 9 products built by the team in the prior 10 months (21st.dev/our-story) — this is a cross-product aggregate, not 1code-specific
- 10,000+ total GitHub stars across all team projects (21st.dev/our-story)
- "$200k in revenue and 10k GitHub stars" referenced on the 1code Product Hunt listing (Product Hunt via search snippet) — unclear if revenue is 1code-specific or cross-product
- 21st.dev component marketplace: 3,000+ waitlist users within 3 days of launch (sbunas.com)
- Twitter/X @21st_dev: ~1,900 followers (X.com via search snippet)
- Serafim Korablev @serafimcloud: ~7,400–8,300 followers (X.com via search snippet)
- Sergey Bunas @sergeybunas: ~1,377 followers (X.com via search snippet)
- Discord community exists (discord.gg/8ektTZGnj4); member count not retrievable
- LinkedIn company page exists (linkedin.com/company/21st-dev); follower count not retrievable
- Product Hunt page exists for 1code (producthunt.com/products/1code-cursor-like-ui-for-claude-code); specific upvote count not retrievable due to 403 error

**Prior product context (pivot history):** The team's first product was 21st.dev, a marketplace for shadcn/ui-based React UI components. They also built Magic MCP, an AI agent for generating components in Cursor. 1code is the most recent product and the focus of their YC W26 application. The 1 million user figure and $200K revenue figure (if accurate) likely include contributions from these prior products.

**Competitive landscape:**

1. **Cursor** ($3.3B total raised, $29.3B valuation, $1B+ ARR as of late 2025; CNBC, Nov 2025; Fortune, Dec 2025): Full AI-powered IDE with integrated coding assistant. Differentiator vs. 1code: complete IDE replacement rather than orchestration layer; deep model integration; massive user base and enterprise adoption.

2. **OpenHands** ($18.8M Series A; BusinessWire, Nov 2025): Open-source platform for autonomous coding agents with 60,000+ GitHub stars. Differentiator vs. 1code: provides its own autonomous coding agent rather than orchestrating third-party agents; enterprise-focused with cloud deployment.

3. **Windsurf/Cognition** ($243M raised by Windsurf pre-acquisition; acquired by Cognition Jul 2025; Cognition valued at $10.2B; CNBC, Sep 2025): AI coding IDE acquired by Cognition (makers of Devin). Differentiator vs. 1code: autonomous multi-step task execution across repositories; enterprise-grade autonomous agent.

4. **OpenAI Codex App** (launched Feb 2026; free for ChatGPT users; serenitiesai.com): Native multi-agent orchestration UI from OpenAI. Differentiator vs. 1code: integrated with OpenAI's models; free tier backed by OpenAI's resources; directly competes on the multi-agent orchestration UX.

**Why now:** [Inferred]: Several concurrent catalysts opened this opportunity: (1) Anthropic launched Claude Code as a CLI tool in 2025, creating a powerful but UI-less coding agent that benefits from a visual wrapper; (2) OpenAI launched Codex CLI shortly after, establishing multi-agent coding as a category; (3) Cursor's rapid growth to $1B ARR validated massive demand for AI-assisted coding tools; (4) the shift from single-turn code completion (Copilot-era) to agentic multi-step coding created a new need for orchestration tooling that did not exist when agents were simpler.

## Founders & Team

**Serafim Korablev** — Co-founder & CEO
- Education: Moscow State Academy of Physical Culture (Peerlist resume)
- Serial entrepreneur: co-founded Via Protocol (cross-chain crypto bridge; raised $1.2M at $20M valuation in Jun 2022; shut down Apr 2023) (TAdviser); co-founded gaspump.tg (acquired) and cutly.app (acquired) (bento.me/serafim); co-founded Rork AI (Nov 2024–present) (Peerlist resume)
- Described as having "built 3 projects and sold 2 of them" in the past year (bento.me/serafim via search snippet)
- Twitter/X: @serafimcloud — ~7,400–8,300 followers (count varies by source; X.com via search snippet)
- LinkedIn: linkedin.com/in/serafimkorablev — "founder 21st.dev (YC W26)"
- GitHub: github.com/serafimcloud — 21st repo with 5,000 stars, 253 followers (GitHub via search snippet)

**Sergey Bunas** — Co-founder & CTO
- 8 years software engineering experience; specializes in TypeScript/full-stack (sbunas.com)
- Previously accepted to YC as a 19-year-old solo founder — first from Tajikistan (sbunas.com)
- Senior full-stack engineer at Deel (YC W19, $12B valuation) — led tax automation features (sbunas.com)
- First engineer at Monolith (AI cold outreach) — built tech from scratch, $2M raised, $120K ARR in 4 months (sbunas.com)
- Founded Replai (AI response generator) — $1K MRR in first month, #3 on Product Hunt (sbunas.com)
- Founded Suggesty (GPT-3 Chrome extension) — 3K users in week one, #1 on Product Hunt (sbunas.com)
- Co-founded Stage (no-code UI/UX tool) — 10,000+ users, 13K+ projects (sbunas.com)
- Won 1st place at Cambridge University AI hackathon (solo); selected to Entrepreneur First London (top 0.7% of 10,000+ applicants); featured in Google's internal newsletter (sbunas.com)
- Twitter/X: @sergeybunas — ~1,377 followers (X.com via search snippet)
- LinkedIn: linkedin.com/in/s-bunas — "Co-Founder @ 21st.dev (YC W26)"
- GitHub: github.com/bunasQ — 75 followers (GitHub via search snippet)

**Co-founder relationship:** No shared prior employer or university identified from available data. Both are based in San Francisco for YC. Serafim's background is in Russia (product/design/crypto) while Sergey's is from Tajikistan (engineering/fintech). No public data on how they met or the duration of their working relationship.

**Founder-market fit:** Both founders have demonstrated rapid product shipping (9 products in 10 months) and experience building developer tools. Sergey's engineering depth (Deel, Monolith, multiple shipped products with paying users) and prior YC experience provide technical and startup credibility. Serafim's design engineering background and serial entrepreneurship (multiple acquired products) complement with product/growth skills. Both have direct experience building AI-powered developer tools (Magic MCP, Suggesty, Replai), making them familiar with the developer workflow pain points 1code targets.

## Key Risks

**Platform dependency on Anthropic and OpenAI:** 1code's core value is wrapping Claude Code and OpenAI Codex in an orchestration layer. Either vendor could build native multi-agent orchestration features — OpenAI already launched its Codex app with multi-agent UI in February 2026 (serenitiesai.com via search snippet). Anthropic could add a visual client to Claude Code. Mitigation: open-source approach and agent-agnostic design allow adding new agents as they emerge.

**Prior-product metric conflation:** The headline traction figures (1M users, 10K GitHub stars, potential $200K revenue) appear to aggregate across 9 different products, including the 21st.dev component marketplace and Magic MCP. 1code-specific traction is limited to the GitHub repository (5,000 stars) and an unknown portion of overall metrics. The company pivoted to 1code recently, and current-product retention and revenue are unclear.

**Commoditization from multiple directions:** The "visual UI for CLI coding agents" concept is being built by multiple teams — OpenAI's Codex app (free), claude-flow (open-source), and potentially Cursor/Windsurf adding multi-agent features. The technical barrier to building a comparable wrapper is low, making sustained differentiation dependent on automation features and community ecosystem rather than core product.

**Rapid market shifts in AI coding tools:** The AI coding tools landscape is evolving quickly — Cursor went from launch to $1B ARR in ~24 months (SaaStr via search snippet), Windsurf was acquired by Cognition, and model capabilities change quarterly. 1code's architecture assumes developers will use standalone CLI agents rather than IDE-embedded ones; if the market consolidates around full-IDE solutions, the orchestration-layer thesis weakens.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $5.5B AI code assistant market in 2024, projected $47.3B by 2034 at 24% CAGR (market.us, 2024 via search snippet); $10.82B AI orchestration market in 2025, projected $36.09B by 2033 at 16.25% CAGR (Data Bridge Market Research, 2025 via search snippet) |
| SAM | No public data found for the coding agent orchestration sub-segment specifically |
| Traction | 5,000 GitHub stars, 517 forks, 21 contributors on 1code repo (github.com/21st-dev/1code, Feb 2026); 1M+ total users across all 9 team products (21st.dev/our-story); ~1,900 Twitter followers @21st_dev (X.com via search snippet) |
| Revenue Signal | $20/mo Pro tier, $100/mo Max tier (1code.dev product page); "$200k in revenue" referenced on Product Hunt listing (Product Hunt via search snippet) — unclear if 1code-specific or cross-product aggregate |
| Founders | Serafim Korablev (CEO): serial entrepreneur, 2 prior exits (acquired), ex-Via Protocol. Sergey Bunas (CTO): 8yr engineer, ex-Deel, prior YC founder, multiple shipped products with paying users |
| Competitors | Cursor ($3.3B raised, $1B+ ARR, full AI IDE); OpenHands ($18.8M Series A, 60K+ GitHub stars, autonomous agent platform); Windsurf/Cognition ($243M raised pre-acquisition, $10.2B post-acquisition valuation, $100M revenue); OpenAI Codex App (free, native multi-agent UI) |
| Moat Signals | 5,000 GitHub stars with open-source community (Apache-2.0); rapid shipping velocity (9 products in 10 months) |
| Risk Factors | Platform dependency on Anthropic/OpenAI agent APIs, metric conflation across prior products, commoditization from vendor-native UIs (OpenAI Codex app) |
| Founder Reach | Serafim Korablev: Twitter ~7.4K, LinkedIn present, GitHub 5K stars (21st repo). Sergey Bunas: Twitter ~1.4K, LinkedIn present, GitHub 75 followers |
| Distribution Signals | 5,000 GitHub stars (github.com/21st-dev/1code, Feb 2026); Product Hunt listing active (producthunt.com); Discord community exists (member count not retrievable); prior products achieved #1 and #3 Product Hunt finishes (sbunas.com) |
