# Superset

> The IDE for the AI Agents Era

| Field | Value |
|-------|-------|
| Website | https://www.superset.sh/ |
| YC Page | https://www.ycombinator.com/companies/superset |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags |  |
| YC Partner | Nicolas Dessaigne |
| Emails | hello@superset.sh |

## The Idea

- **Problem:** Engineers using CLI coding agents (Claude Code, Codex, OpenCode) waste idle time waiting on long-running agent runs and struggle to manage parallel sessions across terminal tabs (Launch HN, news.ycombinator.com, Dec 2025).
- **Approach:** Terminal-first IDE that spawns each agent in an isolated git worktree, provides a unified diff/PR review surface, persistent terminal sessions, and routes the issue→agent→diff→PR→review pipeline (Launch HN; superset.sh).
- **Differentiation:** Conductor (Melty Labs) is macOS-only and focused on Claude Code + Codex; Superset is local-first across many CLI agents with chat/browser/MCP surfaces on top (morphllm.com comparison, 2026); Cursor is a chat-centric editor rather than a multi-agent orchestrator (superset.sh/compare).
- **Business Model:** Free tier for individuals; Pro at $20/seat/month; Team at $15/user/month; custom Enterprise — Superset does not mark up model usage (superset.sh/pricing; Launch HN, Dec 2025).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; comparable Cursor reported $2B ARR with $50B-valuation talks (TechFundingNews, Apr 2026).
- **GTM / Distribution:** Open-source GitHub distribution (11.4k stars, github.com/superset-sh/superset) plus Product Hunt launch funneling to paid team tiers (producthunt.com, Mar 1, 2026).

## Defensibility

- **Moat today:** 11.4k GitHub stars and 952 forks on the open-source repo under Elastic License 2.0 (github.com/superset-sh/superset) plus reported usage by engineers at OpenAI, Google, Vercel, and OSS projects including Homebrew, Mastra, browser-use (search snippet via Tracxn/YC, May 2026).
- **Future moat:** [Inferred]: Switching costs once teams adopt Superset as their orchestration layer across multiple agent CLIs and integrate Linear/Slack (Launch HN, Dec 2025); unproven because product launched ~5 months ago per YC page.
- **Market structure:** [Inferred]: Cursor/Anysphere's revenue depends on its own first-party chat editor and proprietary models; building an agent-agnostic orchestrator that routes to Claude Code/Codex/Copilot would cannibalize Cursor's primary surface (TechFundingNews, Apr 2026).
- **Commoditization risk:** Multiple open-source/closed alternatives already exist (Conductor, Crystal, Emdash, cmux, Vibe Kanban, Agentastic, FleetCode, Sculptor) all using git worktrees + agent CLIs (rywalker.com research, 2026).

## Market & Traction

- **Traction signals:**
  - GitHub: 11.4k stars, 952 forks (github.com/superset-sh/superset, May 2026).
  - Product Hunt: 512 upvotes, #1 Product of the Day (producthunt.com / launchllama.co / airudra.com, Mar 1, 2026).
  - Customer logos displayed: Microsoft, OpenAI, Runway, Wordware, Salesforce, Wix, Datadog, Intercom, ByteDance, Toss, Google, Vercel, Cloudflare, Amazon (superset.sh, May 2026).
  - Customer testimonial: Vlad Arbatov (Founding Engineer, Loyal) — "superset became my default tools" (superset.sh).
  - Customer testimonial: Leo (Co-founder/CTO, Outlit) — "hasn't been a day i haven't used superset" (superset.sh).
  - User report: "40-50 agent sessions over several repos simultaneously" (Launch HN comment, news.ycombinator.com, Dec 2025).
  - Job posting: Former Founder (Technical), $175K–$225K + 1–2% equity (ycombinator.com/companies/superset/jobs).
  - Vercel engineering blog feature on Superset architecture (vercel.com/blog, 2026).
- **Competitors:**
  - Conductor / Melty Labs ($24.5M raised per PitchBook; revenue unknown): macOS-only, narrower to Claude Code + Codex (pitchbook.com; madewithlove.com, 2026).
  - Cursor / Anysphere ($2.3B Series D Nov 2025 at $29.3B; $2B ARR; talks at $50B val, Apr 2026): chat-centric proprietary editor rather than multi-agent CLI orchestrator (TechFundingNews; thenextweb.com, 2026).
  - Crystal, Emdash, cmux, Vibe Kanban, Agentastic, FleetCode, Sculptor (funding/revenue unknown): GUI wrappers around git worktrees + agent CLIs (rywalker.com research, 2026).
  - Container Use (cloud, revenue unknown): cloud-isolated containers running agents 24/7 vs. Superset's local-first model (search snippet, 2026).
- **Why now:** [Inferred]: Mainstream CLI coding agents (Claude Code, Codex, OpenCode) reached usable autonomy in 2025, enabling parallel orchestration to overtake single-session chat as the bottleneck (Launch HN, Dec 2025; O'Reilly "Conductors to Orchestrators," 2026).

## Founders & Team

- **Kiet Ho (Co-founder):**
  - Background: Ex-CTO at Onlook (YC W25); prior SWE at Amazon and ServiceNow; co-founded Voy consulting in Minneapolis (superset.sh/team/kiet; LinkedIn).
  - Twitter/X: Handle not found in search; count not retrievable.
  - LinkedIn: "Superset" (linkedin.com/in/kiet-ho/, May 2026).
  - GitHub: No public personal repos found in search results.
- **Satya Patel (Co-founder):**
  - Background: Ex-CTO at Untether Labs (YC W23); prior roles at Scribe, Google, Amazon, Facebook (superset.sh/team; YC page).
  - Twitter/X: No public account found in search.
  - LinkedIn: Not retrieved in search.
  - GitHub: No public repos found in search.
- **Avi Peltz (Co-founder):**
  - Background: Ex-CTO at Adam (YC W25, AI-powered CAD); co-founder of BioGlyph (multispecific antibody visualization; Dotmatics investment); Cal Poly San Luis Obispo (crunchbase.com/person/avi-peltz; dotmatics.com).
  - Twitter/X: @avimakesrobots (x.com/avimakesrobots); count not retrievable.
  - LinkedIn: "Superset" (linkedin.com/in/avipeltz/).
  - GitHub: No public repo with star data found in search.
- **Co-founder relationship:** All three are ex-CTOs of YC-backed companies (Onlook W25, Untether Labs W23, Adam W25) (superset.sh/team; YC company page).
- **Founder-market fit:** Three former YC CTOs who shipped agent/developer tooling at Onlook, Adam, and Untether Labs, building the orchestration tool for the agent stacks they previously used as operators (superset.sh/team; YC page).

## Key Risks

- **Crowded competitive set with funded incumbent:** Conductor (Melty Labs) has reportedly raised $24.5M and ships a similar git-worktree-based parallel agent runner (pitchbook.com profile 641785-69); Superset must out-execute on multi-agent breadth before Conductor expands beyond macOS.
- **Platform/dependency risk on agent CLIs:** Product value depends on Claude Code, Codex, Copilot, Gemini remaining accessible CLI surfaces; any provider moving to closed proprietary IDEs (as Cursor does) could foreclose distribution (Launch HN; TechFundingNews Apr 2026 on Cursor's $2B ARR).
- **Monetization unproven:** Free tier covers core orchestration; paid features are Linear ($20/mo), Slack, remote workspaces, and team seats ($15–$20/seat/mo) (Launch HN; superset.sh/pricing) — conversion from 11.4k OSS stars to paid teams is not publicly disclosed.
- **Name collision risk:** Multiple unrelated entities use "Superset" (Apache Superset BI tool; super{set} startup studio at superset.com; Superset Partners) (search results, Tracxn/Crunchbase, 2026), creating SEO/brand confusion in search results.
- **Open-source commoditization:** Eight-plus comparable GUI worktree+agent tools (Crystal, Emdash, cmux, Vibe Kanban, Agentastic, FleetCode, Sculptor, Conductor) already exist (rywalker.com, 2026), so the wrapper layer alone is not a durable moat.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 11.4k GitHub stars, 952 forks (github.com/superset-sh, May 2026); Product Hunt #1 Product of the Day with 512 upvotes (producthunt.com, Mar 1, 2026); Launch HN Dec 2025; customer logos including Microsoft, OpenAI, Google, Vercel, Salesforce, Datadog displayed (superset.sh) |
| Revenue Signal | Free for individuals; Pro $20/seat/month; Team $15/user/month; custom Enterprise (superset.sh/pricing); Linear integration $20/mo (Launch HN, Dec 2025) |
| Founders | Kiet Ho (Co-founder): ex-CTO Onlook YC W25, ex-Amazon, ex-ServiceNow. Satya Patel (Co-founder): ex-CTO Untether Labs YC W23, ex-Google, ex-Amazon, ex-Facebook. Avi Peltz (Co-founder): ex-CTO Adam YC W25, co-founder BioGlyph. |
| Competitors | Conductor/Melty Labs ($24.5M raised per PitchBook, revenue unknown; macOS-only, Claude Code/Codex focus); Cursor/Anysphere ($2.3B Series D Nov 2025, $2B ARR; chat-centric proprietary editor); Crystal, Emdash, cmux, Vibe Kanban, Agentastic, FleetCode, Sculptor (funding/revenue unknown; GUI worktree wrappers); Container Use (cloud-isolated container approach) |
| Moat Signals | 11.4k GitHub stars under Elastic License 2.0 (github.com/superset-sh/superset); reported usage by engineers at OpenAI/Google/Vercel and OSS projects Homebrew, Mastra, browser-use (search snippet, May 2026) |
| Risk Factors | Crowded competitor set with funded Conductor, platform dependency on third-party agent CLIs, name collision with Apache Superset and super{set} studio |
| Founder Reach | Kiet Ho: Twitter not found, LinkedIn present (linkedin.com/in/kiet-ho/), GitHub not retrieved. Satya Patel: No public data found. Avi Peltz: Twitter @avimakesrobots (count not retrievable), LinkedIn present (linkedin.com/in/avipeltz/), GitHub not retrieved. |
| Distribution Signals | Product Hunt #1 Product of the Day, 512 upvotes (producthunt.com, Mar 1, 2026); Launch HN (news.ycombinator.com/item?id=48236770, Dec 2025); Vercel engineering blog feature (vercel.com/blog, 2026); active "Former Founder (Technical)" job listing $175K–$225K + 1–2% equity (ycombinator.com/companies/superset/jobs) |
| Emails | hello@superset.sh (ycombinator.com/companies/superset) |

Sources:
- [Superset YC page](https://www.ycombinator.com/companies/superset)
- [Superset website](https://www.superset.sh/)
- [Superset GitHub](https://github.com/superset-sh/superset)
- [Launch HN: Superset](https://news.ycombinator.com/item?id=48236770)
- [Superset on Product Hunt](https://www.producthunt.com/products/superset-5)
- [Superset pricing](https://superset.sh/pricing)
- [Superset team page](https://superset.sh/team)
- [Kiet Ho LinkedIn](https://www.linkedin.com/in/kiet-ho/)
- [Avi Peltz Crunchbase](https://www.crunchbase.com/person/avi-peltz)
- [Avi Peltz X](https://x.com/avimakesrobots)
- [Conductor PitchBook](https://pitchbook.com/profiles/company/641785-69)
- [Cursor $2B/$50B talks](https://thenextweb.com/news/cursor-anysphere-2-billion-funding-50-billion-valuation-ai-coding)
- [Superset vs Conductor vs Emdash](https://www.morphllm.com/comparisons/superset-vs-conductor-vs-emdash)
- [Vercel blog: How Superset built on Vercel](https://vercel.com/blog/how-superset-built-the-ide-for-ai-agents-on-vercel)
- [Superset jobs](https://www.ycombinator.com/companies/superset/jobs)
- [Ry Walker Mac coding agent research](https://rywalker.com/research/mac-coding-agent-apps)
