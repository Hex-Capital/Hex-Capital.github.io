# Superset

> IDE for the AI Agents Era

| Field | Value |
|-------|-------|
| Website | https://www.superset.sh/ |
| YC Page | https://www.ycombinator.com/companies/superset |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 3 |
| Location | San Francisco, CA, US (YC page) |
| Tags | AI |
| YC Partner | Nicolas Dessaigne |
| Emails | No public data found |

## The Idea

**Problem:** Developers increasingly use CLI-based AI coding agents (Claude Code, Codex, Gemini, OpenCode) but are limited to running one agent at a time in a single terminal session. Running multiple agents concurrently risks Git merge conflicts, context switching overhead, and lack of visibility into parallel work. Current workarounds involve manually managing tmux sessions and Git branches (superset.sh).

**Approach:** Superset is a desktop application (Electron/TypeScript/React) that orchestrates multiple CLI-based AI coding agents in parallel. Each agent runs in its own isolated Git worktree, preventing merge conflicts. The product provides centralized monitoring, notifications when agents need attention, a built-in diff viewer for reviewing changes, and deep-linking to external editors including VS Code, Cursor, JetBrains, Xcode, and Sublime Text. It also supports port forwarding and MCP (Model Context Protocol) server integration. Users supply their own API keys directly — Superset does not proxy API calls (superset.sh).

**Differentiation:** Superset is agent-agnostic, supporting any CLI-based coding agent, whereas Conductor (YC S24) is closed-source and Mac-only (Grokipedia). Claude Squad is open-source but operates as a lightweight tmux-based terminal manager without IDE-level features like a built-in diff viewer, editor integration, or port forwarding (GitHub, smtg-ai/claude-squad). Cursor and Windsurf are full AI IDEs with their own built-in agents, not orchestration layers for third-party agents (superset.sh). Superset's source code is available under Elastic License 2.0 for inspection and self-hosting (GitHub, superset-sh/superset).

**Business Model:** A free tier is available (superset.sh). An enterprise offering is referenced on the website but no pricing tiers are publicly listed (superset.sh). [Inferred]: Most likely monetization path is a freemium model with paid tiers for enterprise features (team collaboration, admin controls, priority support), similar to developer tool SaaS pricing.

**TAM/SAM:** The AI code tools market is estimated at $10.12B in 2026, projected to reach $91.09B by 2035 at 27.65% CAGR (Precedence Research via OpenPR). MarketsandMarkets estimates the AI code assistants segment at $8.14B in 2025, growing to $127B by 2032 at 48.1% CAGR (via search snippet). [Inferred]: The SAM for multi-agent orchestration tooling is a subset of the broader AI coding tools market — limited to developers who use CLI-based agents and need parallel execution — likely single-digit billions within the forecast period.

**GTM / Distribution:** Product Hunt launch on February 27, 2026 achieved #1 daily rank and #4 weekly rank with 559 upvotes (Product Hunt). Open-source GitHub distribution with 8,000+ stars (GitHub). Discord community for support (superset.sh). [Inferred]: Primary distribution is developer-led, bottom-up adoption via GitHub, Product Hunt, and Twitter/X, with enterprise upsell as a secondary motion.

## Defensibility

- **Open-source community moat:** 8,000+ GitHub stars and 595 forks create a contributor ecosystem and switching costs as users build workflows around the tool (GitHub, superset-sh/superset).
- **Agent-agnostic positioning:** By supporting all CLI-based agents rather than building a proprietary agent, Superset avoids competing directly with well-funded AI IDE companies and instead benefits from the proliferation of agents (superset.sh).
- [Inferred]: Potential moat could develop via workflow lock-in (saved configurations, team workflows, enterprise integrations) and data advantages from observing multi-agent usage patterns, but these are unproven at this stage.

**Market structure:** Cursor ($29.3B valuation, CNBC Nov 2025) and Windsurf (acquired by Cognition AI, DevOps.com Dec 2025) build proprietary AI agents tightly coupled to their IDEs. Building an agent-agnostic orchestration layer would cannibalize their proprietary agent moat. [Inferred]: This creates a structural incentive misalignment — incumbents are unlikely to build a tool that commoditizes their own core differentiator.

**Commoditization risk:** Claude Squad (6.6k GitHub stars, AGPL-3.0) already provides basic multi-agent terminal management (GitHub). Anthropic itself has released native multi-agent orchestration features for Claude Code (claude.com/docs). Any CLI tool developer or IDE vendor could add parallel agent management. The barrier is UX polish and ecosystem integration, not deep technical complexity.

## Market & Traction

**Traction signals:**
- GitHub: 8,000+ stars, 595 forks, 226 open issues; repo created October 21, 2025 (GitHub, superset-sh/superset)
- Product Hunt: #1 daily, #4 weekly, 559 upvotes, 67 comments, 802 followers; launched February 27, 2026 (Product Hunt)
- Discord: 496 members (Discord invite page)
- Twitter/X: @superset_sh, account created November 2025 (X.com); follower count not retrievable
- LinkedIn: linkedin.com/company/superset-sh; follower count not retrievable
- User testimonials from builders at Microsoft, Netflix, OpenAI, DoorDash, Google, and Vercel (superset.sh)
- Job posting: "Former Founder" role in San Francisco, $175K–$225K salary + 1.00%–2.00% equity, 3+ years experience required (YC page)
- Press: Featured review on LaunchLlama (launchllama.co), YUV.AI blog, and byteiota.com (via search snippets)
- Revenue: No public data found

**Competitive landscape:**

| Competitor | Differentiator vs. Superset | Funding / Valuation | Revenue |
|---|---|---|---|
| **Cursor** | Full proprietary AI IDE with built-in agent; not an orchestration layer | $2.3B Series D at $29.3B valuation (CNBC, Nov 2025) | ~$1.2B ARR (Sacra, 2025) |
| **Conductor** (conductor.build) | Mac-only, closed-source multi-agent orchestration app | YC S24; funding amount not disclosed (Grokipedia) | No public data found |
| **Claude Squad** | Open-source, terminal-only (tmux-based), no IDE features | Not venture-backed; open-source project | N/A |
| **Windsurf** (ex-Codeium) | Full AI IDE with proprietary agent; acquired by Cognition AI | ~$250M acquisition by Cognition (Dec 2025); prior $243M total funding (Crunchbase) | ~$82M ARR (Sacra, Jul 2025) |

**Why now:** [Inferred]: The emergence of high-quality CLI-based AI coding agents (Claude Code launched 2025, OpenAI Codex CLI 2025) created a new category of developer tools that operate outside traditional IDEs. As developers adopt multiple agents for different tasks, the pain of managing parallel sessions in isolated environments became acute. Anthropic's release of native multi-agent orchestration features for Claude Code (claude.com/docs) validates the workflow pattern that Superset productizes.

## Founders & Team

All three co-founders are described as "3 ex YC CTOs" (superset.sh/team).

**Kiet Ho** — Co-Founder
- Previously co-founded Onlook (YC W25), an open-source visual React editor described as "Cursor for Designers"; Onlook's GitHub repo reached 25,000+ stars (GitHub, Kitenite). Previously SWE at Amazon and ServiceNow (YC page). Co-founded Voy, a software consulting company in Minneapolis (Crunchbase). BS in Computer Science, MIS, and Operations Management from University of Minnesota, Crookston, 2016–2021 (LinkedIn via search snippet).
- Twitter/X: @FlyaKiet (YC page); handle also listed as @kietho_ (superset.sh/team); follower count not retrievable
- LinkedIn: linkedin.com/in/kiet-ho
- GitHub: github.com/Kitenite — 479 followers, 67 public repos; onlook repo has 25k stars (GitHub)

**Satya Patel** — Co-Founder
- Previously CTO at Untether Labs (YC W23), a workforce management platform for health systems (YC page; RocketReach). Previously at Scribe, Google, Amazon, and Facebook (superset.sh/team).
- Twitter/X: @saddle_paddle; follower count not retrievable
- LinkedIn: linkedin.com/in/saddlepaddle
- GitHub: github.com/saddlepaddle — 39 followers, 6 public repos (GitHub)

**Avi Peltz** — Co-Founder
- Previously Co-Founder/CTO at Adam (YC W25), an AI-powered CAD tool for mechanical design (RocketReach; YC). Co-founded BioGlyph, a biotech software startup for visualizing and modeling multispecific antibodies; BioGlyph received investment from Dotmatics (PRNewswire, Sep 2024). Computer vision research background (superset.sh/team). Won Cal Poly CIE Innovation Quest competition (Cal Poly UCM).
- Twitter/X: @avimakesrobots; follower count not retrievable
- LinkedIn: linkedin.com/in/avipeltz
- GitHub: github.com/avipeltz — 47 followers, 62 public repos (GitHub)

**Co-founder relationship:** All three were CTOs at separate YC companies — Kiet at Onlook (W25), Avi at Adam (W25), Satya at Untether Labs (W23). Kiet and Avi overlapped in the W25 batch. No shared prior employer or university identified from available data.

**Founder-market fit:** All three founders have direct experience building developer tools at YC-backed startups, holding CTO roles that required hands-on coding and developer workflow optimization. Kiet Ho built Onlook (25k GitHub stars), demonstrating ability to ship open-source developer tools with strong community adoption. Satya Patel has engineering experience across four major tech companies (Google, Amazon, Facebook, Scribe), providing breadth of exposure to enterprise engineering workflows. Avi Peltz brings cross-domain technical depth from biotech software and CAD tooling.

## Key Risks

**Name collision:** "Superset" is shared by Apache Superset (open-source data visualization, 63k+ GitHub stars), super{set} (a $90M startup studio in San Francisco — TechCrunch, Mar 2024), SupersetFinance (stablecoin company that raised $4M — Bitget News, Feb 2026), and Superset (Indian campus hiring platform with 53,800 LinkedIn followers). This creates SEO competition, brand confusion, and investor due diligence friction. The $4M seed round widely reported in search results belongs to SupersetFinance, not this company.

**Platform dependency on upstream agents:** Superset's value proposition depends entirely on the continued availability and CLI accessibility of third-party AI agents (Claude Code, Codex, etc.). If Anthropic, OpenAI, or others deprecate CLI interfaces, restrict API access, or bundle native orchestration into their own products, Superset's utility diminishes. Anthropic has already shipped native multi-agent orchestration for Claude Code (claude.com/docs).

**Elastic License 2.0 constraints:** ELv2 is source-available but not OSI-approved open-source. This may limit contributions from developers at companies with strict open-source-only policies and could constrain community growth relative to permissively licensed alternatives like Claude Squad (AGPL-3.0) (GitHub).

**Commoditization from IDE vendors:** Cursor, VS Code (via GitHub Copilot), and JetBrains could add multi-agent orchestration natively, leveraging their existing installed base of millions of developers. The orchestration layer is a feature, not inherently a standalone product category.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $10.12B in 2026, projected $91.09B by 2035 at 27.65% CAGR (Precedence Research via OpenPR) |
| SAM | No public data found |
| Traction | 8,000+ GitHub stars (GitHub, Mar 2026); #1 daily on Product Hunt with 559 upvotes (Product Hunt, Feb 27 2026); 496 Discord members (Discord); user testimonials from builders at Microsoft, Netflix, OpenAI, Google, Vercel (superset.sh) |
| Revenue Signal | No public data found |
| Founders | Kiet Ho (Co-Founder): ex-CTO Onlook (YC W25, 25k GH stars), ex-Amazon/ServiceNow. Satya Patel (Co-Founder): ex-CTO Untether Labs (YC W23), ex-Google/Amazon/Facebook. Avi Peltz (Co-Founder): ex-CTO Adam (YC W25), co-founded BioGlyph. |
| Competitors | Cursor ($2.3B Series D, $29.3B valuation, ~$1.2B ARR — CNBC/Sacra, 2025; full AI IDE, not orchestration layer). Conductor (YC S24, funding undisclosed, revenue unknown; closed-source Mac-only multi-agent app). Claude Squad (not venture-backed, 6.6k GH stars; open-source tmux-based terminal manager). Windsurf/Cognition (~$250M acquisition — DevOps.com, Dec 2025; ~$82M ARR — Sacra, Jul 2025; full AI IDE). |
| Moat Signals | 8,000+ GitHub stars and 595 forks (GitHub, Mar 2026); agent-agnostic design avoids direct competition with proprietary AI IDE vendors |
| Risk Factors | Name collision with 4+ other "Superset" entities, platform dependency on third-party AI agent CLI interfaces, commoditization risk from IDE vendors adding native orchestration |
| Founder Reach | Kiet Ho: Twitter @FlyaKiet (count not retrievable), GitHub 479 followers (GitHub). Satya Patel: Twitter @saddle_paddle (count not retrievable), GitHub 39 followers (GitHub). Avi Peltz: Twitter @avimakesrobots (count not retrievable), GitHub 47 followers (GitHub). |
| Distribution Signals | Product Hunt #1 daily / #4 weekly with 559 upvotes (Product Hunt, Feb 27 2026); 8,000+ GitHub stars (GitHub); Discord 496 members (Discord); press coverage on LaunchLlama, YUV.AI, byteiota (via search snippets) |
| Emails | No public data found |
