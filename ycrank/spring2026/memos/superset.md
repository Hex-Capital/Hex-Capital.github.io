# Superset

> IDE for the AI Agents Era

| Field | Value |
|-------|-------|
| Website | https://www.superset.sh/ |
| YC Page | https://www.ycombinator.com/companies/superset |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 3 |
| Location | San Francisco, CA, US (YC company page) |
| Tags | AI |
| YC Partner | Nicolas Dessaigne |
| Emails | founders@superset.sh (GitHub README) |

## The Idea

**Problem:** Software developers using AI coding agents (Claude Code, OpenAI Codex, Gemini CLI, etc.) are limited to running one agent at a time in their terminal, creating a serial bottleneck. As of February 2026, every major AI coding tool shipped multi-agent capabilities in the same two-week window—Cursor (cloud agents), Claude Code (Agent Teams), Codex CLI, Windsurf, Grok Build—indicating that parallel agent execution is now a core developer workflow need (Latent.Space, Morphllm comparison, Feb 2026 via search snippet). Developers currently manage this ad hoc with multiple terminal windows, risking merge conflicts and losing context across sessions.

**Approach:** Superset is a desktop application (Electron/React/TypeScript) that orchestrates multiple CLI-based coding agents in parallel. Each agent task runs in an isolated Git worktree, preventing merge conflicts. The app provides real-time monitoring of all agent sessions, a built-in diff viewer, one-click opening in editors (VS Code, Cursor, JetBrains, Xcode), and port forwarding across parallel workspaces (superset.sh). It is agent-agnostic, supporting any CLI-based agent including Claude Code, OpenAI Codex, Cursor Agent, Gemini, GitHub Copilot, and OpenCode.

**Differentiation:** Unlike Cursor's cloud agents (which run on Cursor's remote VMs and are tied to the Cursor IDE), Superset runs locally on the developer's machine with any agent and any editor. Unlike Devin (a fully autonomous cloud agent at $500/month), Superset is a human-in-the-loop orchestration layer—free, open-source (Apache 2.0), with zero telemetry and no API proxying (superset.sh). Unlike agent-specific orchestrators (e.g., Multiclaude, Gas Town), Superset is agent-agnostic. Unlike OpenHands (cloud-based autonomous coding platform), Superset focuses on local desktop orchestration with IDE integration.

**Business Model:** The product is currently free and open-source with no visible pricing page or revenue model (superset.sh). The job posting lists equity at 1–2% for senior hires (YC company page), consistent with a venture-backed startup. [Inferred]: Most likely monetization path is a freemium model with a paid tier for teams/enterprises (e.g., collaboration features, cloud sync, usage analytics), following the pattern established by Cursor and similar developer tools.

**TAM/SAM:** The AI code tools market was valued at $7.37 billion in 2025 and is forecast to reach $23.97 billion by 2030 at a 26.6% CAGR (MarketsandMarkets, 2025 via search snippet). An alternative estimate sizes the market at $4.86 billion in 2023, projected to reach $26.03 billion by 2030 at 27.1% CAGR (Grand View Research via search snippet). [Inferred]: The SAM for agent orchestration tooling specifically (as opposed to the broader AI coding market) is a subset; no standalone estimate for this segment was found.

**GTM / Distribution:** The primary distribution channel is organic developer adoption via open-source GitHub distribution. The GitHub repository has 6,500+ stars and 424 forks (GitHub, Mar 2026). The product was featured on the Product Hunt weekly leaderboard for the week of February 23, 2026 (Product Hunt). A Hacker News thread shows organic developer discussion (Hacker News, item 47171418). The company claims users from Amazon, Google, DoorDash, Intercom, Vercel, Cloudflare, Webflow, Oracle, Atlassian, ServiceNow, Wix, and Y Combinator companies (superset.sh). The job posting for a "Former Founder" role suggests a community-driven, founder-led growth strategy (YC company page).

## Defensibility

**Current moat signals:** The product is open-source with 6,500+ GitHub stars (GitHub, Mar 2026), which creates community lock-in through contributor investment, issue tracking, and ecosystem plugins. The agent-agnostic design positions Superset as a neutral orchestration layer rather than being tied to any single AI provider. The Git worktree isolation approach is a technical design choice that enables reliable parallel execution.

**Potential future defensibility:** [Inferred]: If Superset becomes the default orchestration layer developers use daily, switching costs could develop through workflow configuration, saved sessions, and team adoption. Data advantages could emerge from understanding how developers orchestrate agents at scale.

**Market structure:** Cursor's cloud agents are tied to the Cursor IDE and monetized through Cursor subscriptions ($20–$40+/user/month) (Cursor docs). Building a free, open-source agent orchestrator that works with any IDE and any agent would require Cursor to cannibalize its own subscription revenue model. Similarly, Cognition/Devin charges $500/month for its autonomous agent (Contrary Research via search snippet)—offering free local orchestration of competing agents would undermine its value proposition. However, Claude Code's native Agent Teams feature (shipped February 2026) provides built-in multi-agent orchestration without a separate tool, posing a direct substitution risk from the agent provider itself.

**Commoditization risk:** The core concept of running multiple terminal sessions in isolated Git worktrees is technically reproducible. Any IDE or terminal emulator could add similar functionality. Claude Code's Agent Teams and Cursor's cloud agents represent incumbent efforts to absorb this capability natively. The barrier to replication is moderate—the orchestration UX, monitoring dashboard, and multi-editor integration add complexity but are not fundamentally proprietary.

## Market & Traction

**Traction signals:**
- 6,500+ GitHub stars, 424 forks, 1,864 commits, 153 open issues (GitHub, Mar 10, 2026)
- Latest release: desktop-v1.1.4 (GitHub, Mar 10, 2026)
- Twitter/X @superset_sh: 1,804 followers (X.com via search snippet)
- Discord community: ~722 members (Discord via search snippet)
- LinkedIn: linkedin.com/company/superset-sh (YC company page; follower count not retrieved)
- Featured on Product Hunt weekly leaderboard, week of February 23, 2026 (Product Hunt leaderboard)
- Mentioned on Hacker News (item 47171418)
- Press coverage: byteiota.com article "Superset IDE: Run 10+ Parallel AI Coding Agents (2026)" (byteiota.com); podcast appearance "Running 100 AI Agents in Parallel: Superset Cofounder Kiet Ho" on Mastra AI Agents Hour (mastra.ai)
- Claims users from Amazon, Google, DoorDash, Intercom, Vercel, Cloudflare, Webflow, Oracle, Atlassian, ServiceNow, Wix, and YC companies (superset.sh)
- 1 active job posting: "Former Founder" role at $175K–$225K + 1–2% equity (YC company page)
- No public revenue data found (product is free and open-source)

**Competitive landscape:**

| Competitor | Differentiator vs. Superset | Funding | Revenue |
|---|---|---|---|
| **Cursor** (Anysphere) | Cloud-based parallel agents tied to Cursor IDE; full AI-native IDE, not just orchestration | $3.3B total, $29.3B valuation (CNBC, Nov 2025) | $2B+ annualized revenue (TechCrunch, Mar 2026) |
| **Devin** (Cognition) | Fully autonomous AI software engineer; cloud-hosted, not local orchestration | ~$400M at $10.2B valuation (TechCrunch, Sep 2025) | ~$150M combined ARR with Windsurf (Contrary Research via search snippet) |
| **OpenHands** | Open-source cloud coding agent platform; focuses on autonomous task completion rather than human-in-the-loop orchestration | $18.8M Series A (BusinessWire, Nov 2025) | Revenue not publicly disclosed; 60K+ GitHub stars (BusinessWire) |
| **Claude Code Agent Teams** (Anthropic) | Native multi-agent feature built into Claude Code itself; no separate tool needed | Anthropic: $7.5B+ total funding | N/A (feature within Claude product) |
| **GitHub Copilot Workspace** (Microsoft) | Integrated into GitHub ecosystem; cloud-based agent workflows | Microsoft-backed | Part of GitHub's $2B+ ARR (Microsoft earnings) |

**Why now:** In February 2026, every major AI coding tool shipped multi-agent capabilities within a two-week window (Morphllm comparison, 2026 via search snippet). The specific catalysts: (1) Claude Code launched Agent Teams alongside Opus 4.6 in February 2026, enabling agents that communicate directly with each other (Latent.Space via search snippet); (2) Cursor launched cloud agents on February 24, 2026, running on isolated VMs (NxCode via search snippet); (3) OpenAI shipped Codex CLI with Agents SDK. [Inferred]: This simultaneous industry move signals that AI coding agents have reached sufficient reliability (HumanEval accuracy >90%, per MarketsandMarkets via search snippet) for parallel orchestration to be practical, creating demand for a tool that works across all of them rather than being locked into one vendor's ecosystem.

## Founders & Team

**Kiet Ho** — Co-founder
- Ex-CTO at Onlook (YC W25), which achieved #1 trending repo on GitHub and 23.4k+ GitHub stars (Onlook X.com post; YC company page). Previously SWE at Amazon and ServiceNow (YC company page).
- Twitter/X: @kietho_ (handle from superset.sh/team; follower count not retrieved)
- LinkedIn: linkedin.com/in/kiet-ho
- GitHub: github.com/Kitenite — 331 followers; notable repos include onlook-dev/onlook (23.4k stars) and superset-sh/superset (6.5k stars) (GitHub via search snippet)

**Satya Patel** — Co-founder
- Ex-CTO at Untether Labs (YC W23). Previously at Scribe, Google, Amazon, and Facebook/Meta (superset.sh/team; YC company page).
- Twitter/X: @saddle_paddle (superset.sh/team; follower count not retrieved)
- LinkedIn: linkedin.com/in/saddlepaddle
- GitHub: github.com/saddlepaddle (superset.sh/team; public repos/stars not retrieved)

**Avi Peltz** — Co-founder
- Ex-CTO at Adam (YC W25). Co-founder of BioGlyph (computer vision / biotech). Cal Poly (California Polytechnic State University, San Luis Obispo) graduate in liberal arts and engineering (Cal Poly CIE article via search snippet). Built TensorMaker, an ML accessibility project that was among 14 finalists at Cal Poly's Innovation Quest 2023 (Cal Poly CIE article via search snippet).
- Twitter/X: @avimakesrobots (X.com; follower count not retrieved)
- LinkedIn: linkedin.com/in/avipeltz
- GitHub: github.com/AviPeltz — 55 public repositories (GitHub via search snippet)

**Co-founder relationship:** All three founders are described as "ex-YC CTOs" (superset.sh/team). Kiet Ho (Onlook, W25) and Avi Peltz (Adam, W25) were both CTOs of YC W25 companies, suggesting they likely met through the YC W25 batch network. Satya Patel was CTO of Untether Labs (W23), one batch earlier. No shared employer or university overlap is visible from Phase 3 findings.

**Founder-market fit:** All three founders have direct experience building developer tools as YC-backed CTOs. Kiet Ho's prior startup Onlook (23.4k GitHub stars, #1 trending on GitHub) demonstrates an ability to build and distribute open-source developer tools with strong community adoption. Satya Patel brings experience from major tech companies (Google, Amazon, Meta) and the YC ecosystem. Avi Peltz has a background in computer vision/ML and prior YC CTO experience. The team's collective experience shipping developer-facing products, combined with their demonstrated open-source distribution track record, is directly relevant to building an agent orchestration IDE.

## Key Risks

**Name collision / brand disambiguation:** At least three other entities share or overlap with the "Superset" name: Apache Superset (a widely-used open-source data visualization platform with its own large community), super{set} (a $90M+ startup studio in San Francisco focused on data/AI companies; TechCrunch, Mar 2024), and a separate Superset crypto startup that raised $4M in seed funding in February 2026 (Fundup AI via search snippet). This creates SEO competition, developer confusion, and potential trademark issues.

**Platform dependency on upstream agents:** Superset's value is entirely derived from the AI coding agents it orchestrates (Claude Code, Codex, Cursor Agent, etc.). If these agent providers build sufficiently good native multi-agent orchestration—as Claude Code already did with Agent Teams in February 2026—the need for a separate orchestration tool diminishes. The product is one native feature release away from partial disintermediation by any major agent provider.

**No revenue model:** The product is free, open-source, with no visible monetization. While this supports adoption velocity, it means no revenue validation of willingness-to-pay exists. The competitive landscape includes well-funded incumbents (Cursor at $2B+ ARR, Devin/Cognition at ~$150M ARR) that can offer multi-agent features bundled into existing paid products, potentially eliminating the market for a standalone free tool before Superset monetizes.

**Cursor cloud agents as direct substitute:** Cursor shipped cloud agents on February 24, 2026 (NxCode), allowing 10–20 parallel agents on isolated VMs directly within Cursor's IDE. Given Cursor's $2B+ ARR and 29.3B valuation, Cursor can aggressively bundle and iterate on this feature. Developers already paying for Cursor may not adopt a separate tool for agent orchestration.

**Founder retention risk from prior commitments:** Two of three co-founders (Kiet Ho, Avi Peltz) left YC W25 companies (Onlook, Adam) to start Superset. Onlook in particular appears to still be active with 23.4k GitHub stars. The speed of pivot (W25 → Spring 2026) is rapid even by YC standards.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.37B (2025) → $23.97B by 2030 at 26.6% CAGR (MarketsandMarkets via search snippet); alt. $4.86B (2023) → $26.03B by 2030 at 27.1% CAGR (Grand View Research via search snippet) |
| SAM | No public data found for agent orchestration sub-segment specifically |
| Traction | 6,500+ GitHub stars, 424 forks (GitHub, Mar 2026); 1,804 Twitter followers (X.com via search snippet); ~722 Discord members (Discord via search snippet); Product Hunt weekly leaderboard week of Feb 23, 2026 (Product Hunt) |
| Revenue Signal | No public data found (product is free and open-source) |
| Founders | Kiet Ho (Co-founder): Ex-CTO Onlook (YC W25, 23.4k GitHub stars), SWE at Amazon & ServiceNow. Satya Patel (Co-founder): Ex-CTO Untether Labs (YC W23), prev. Google, Amazon, Meta. Avi Peltz (Co-founder): Ex-CTO Adam (YC W25), Cal Poly grad, BioGlyph founder. |
| Competitors | Cursor ($3.3B raised, $29.3B valuation, $2B+ ARR, cloud agents in own IDE); Devin/Cognition (~$400M raised, $10.2B valuation, ~$150M ARR, fully autonomous agent); OpenHands ($18.8M Series A, 60K+ GitHub stars, open-source cloud agents) |
| Moat Signals | Agent-agnostic design; open-source community (6.5k stars); neutral orchestration layer not tied to any single AI provider |
| Risk Factors | Name collision with Apache Superset / super{set} studio / crypto Superset; platform dependency on upstream agents building native multi-agent; no revenue model |
| Founder Reach | Kiet Ho: Twitter @kietho_, GitHub 331 followers (6.5k stars on Superset, 23.4k on Onlook). Satya Patel: Twitter @saddle_paddle, LinkedIn saddlepaddle. Avi Peltz: Twitter @avimakesrobots, GitHub 55 repos. Company: Twitter @superset_sh 1,804 followers. |
| Distribution Signals | 6,500+ GitHub stars (Mar 2026); Product Hunt weekly leaderboard (Feb 23, 2026); Hacker News discussion (item 47171418); podcast on Mastra AI Agents Hour; byteiota.com coverage |
| Emails | founders@superset.sh (GitHub README) |
