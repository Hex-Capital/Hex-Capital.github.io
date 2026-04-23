# OpenWork

> The open source alternative to Claude Cowork

| Field | Value |
|-------|-------|
| Website | https://openworklabs.com |
| YC Page | https://www.ycombinator.com/companies/openwork |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Productivity |
| Team Size | 4 |
| Location | San Francisco, CA, US / Remote |
| Tags | |
| YC Partner | Aaron Epstein |
| Emails | ben@openworklabs.com |

## The Idea

**Problem:** Anthropic's Claude Cowork is a proprietary desktop AI agent requiring a $100–$200/month Claude subscription (UC Strategies, Jan 2026). Users are locked into a single model provider, cannot run models locally, and have limited ability to share agent workflows across teams. Non-technical team members cannot easily adopt agentic AI workflows without terminal expertise.

**Approach:** OpenWork is a free, MIT-licensed desktop application built on the OpenCode engine and Tauri (TypeScript 83.6%, Rust 4.5%) that wraps terminal-based AI agents in a GUI with a permission system, execution plan visualization, and workflow template saving (GitHub README). It supports 50+ model providers including local models via Ollama, operates local-first with optional cloud mode, and enables one-click sharing of agent setups via shareable links (openworklabs.com). Features include browser automation, document processing ("Digital Twin"), sales inbound lead qualification, and team sharing (AI for Automation, Mar 2026).

**Differentiation:** vs. Claude Cowork: model-agnostic (supports Claude, GPT, Gemini, Llama, Mistral), free/open-source, BYOK, and team-shareable workflows (openworklabs.com). vs. Eigent: OpenWork uses a single-agent architecture with OpenCode engine rather than Eigent's CAMEL-AI multi-agent parallel framework (eigent.ai). vs. Kuse: OpenWork is TypeScript/Tauri-based vs. Kuse's Rust-native approach; OpenWork has broader community traction (14.1k vs. Kuse's smaller GitHub presence) (GitHub). vs. Devin: OpenWork targets general desktop productivity and non-developer workflows, while Devin focuses on software engineering tasks (cognition.ai).

**Business Model:** The core product is free and open-source under MIT license (GitHub). An enterprise tier exists with a sales contact via cal.com/team/openwork/enterprise (openworklabs.com). A job posting for "Founding Member" lists $150K–$200K salary and 3–5% equity (YC page). [Inferred]: Most likely monetization path is open-core — free OSS desktop app with paid enterprise features (team management, hosted cloud, priority support), consistent with the enterprise sales link and job posting budget implying external funding.

**TAM/SAM:** The AI Code Tools market is projected at $8.14B in 2025 growing to $127.05B by 2032 at 48.1% CAGR (MarketsandMarkets via search snippet). An alternative estimate sizes AI code tools at $4.3B in 2023 growing to $12.6B by 2028 at 24.0% CAGR (MarketsandMarkets via search snippet). [Inferred]: OpenWork's SAM is narrower — the desktop AI agent/cowork segment for non-developer productivity users, a subset of the broader AI coding tools market. No public SAM estimate specific to this segment was found.

**GTM / Distribution:** GitHub open-source distribution is the primary channel, with 14.1k stars and 1.3k forks (GitHub, Apr 2026). Press coverage across GIGAZINE (Apr 2026), UC Strategies (Jan 2026), and Julian Goldie (Jan 2026) drives awareness. The shareable setup links create a viral team adoption mechanism (openworklabs.com). Enterprise sales via direct contact (cal.com). [Inferred]: Bottom-up open-source adoption within developer teams, expanding to enterprise deals as teams scale.

## Defensibility

- **Open-source community moat:** 14.1k GitHub stars and 1.3k forks create contributor lock-in and distribution (GitHub, Apr 2026). The skills/workflow sharing system creates a nascent ecosystem of reusable agent templates.
- **Multi-model flexibility:** Supporting 50+ providers including local models via Ollama creates switching cost for users who build workflows across multiple models (openworklabs.com).
- [Inferred]: Potential network effects could develop via the shared skills/workflow marketplace as more teams publish and consume agent setups, but this is unproven at this stage.

**Market structure:** Claude Cowork is tied to Anthropic's proprietary Claude models, creating a business model conflict — Anthropic cannot offer a model-agnostic open-source competitor without undermining their API revenue. Similarly, Devin's $10.2B valuation (TechCrunch, Sep 2025) is predicated on a proprietary SaaS model incompatible with open-source distribution. [Inferred]: Incumbents face revenue cannibalization risk in offering a free, model-agnostic alternative.

**Commoditization risk:** The barrier to building a comparable open-source desktop AI agent wrapper is moderate. Eigent and Kuse already exist as direct competitors. The core OpenCode engine dependency means any improvements to OpenCode benefit all downstream projects. [Inferred]: Differentiation likely depends on execution speed, community size, and enterprise feature depth rather than technical barriers.

## Market & Traction

**Traction signals:**
- 14.1k GitHub stars, 1.3k forks, 67 watchers (GitHub, Apr 2026)
- 12,200 stars and 1,800+ commits as of Mar 22, 2026 (AI for Automation)
- 1,062 total releases; latest v0.11.212 on Apr 21, 2026 (GitHub)
- Company X/Twitter: @getopenwork (follower count not retrievable)
- LinkedIn: linkedin.com/company/different-ai (follower count not retrievable)
- Press: GIGAZINE review (Apr 2026), UC Strategies review (Jan 2026), Julian Goldie review (Jan 2026), DEV Community "Open Source Project of the Day" feature
- 1 active job posting: Founding Member, $150K–$200K, 3–5% equity (YC page)
- No Product Hunt listing found
- No Discord/Slack community member counts found
- No public revenue or user count data found

**Prior product context:** The different-ai GitHub organization previously shipped Embedbase (LLM API tool, 522 stars), Note Companion / File Organizer 2000 (Obsidian AI plugin, 831 stars), and Inbox (modern email, 1.7k stars) (GitHub/benjaminshafii). Ben Shafii states he raised $3M+ through YC in a prior venture (LinkedIn). OpenWork's current traction metrics (14.1k stars) should be understood as specific to the current product, launched in early 2026.

**Competitive landscape:**

| Competitor | Key Differentiator vs. OpenWork | Funding | Revenue |
|---|---|---|---|
| **Claude Cowork** (Anthropic) | Proprietary, deeply integrated with Claude models, polished UX, single-vendor lock-in | Anthropic: $30B+ raised (Crunchbase via search snippet) | Revenue unknown (bundled in Claude subscription) |
| **Devin** (Cognition Labs) | Full SDLC automation focused on software engineering, not general productivity | $400M at $10.2B valuation (TechCrunch, Sep 2025) | ~$150M ARR combined with Windsurf (Cognition blog) |
| **Eigent** | Multi-agent parallel execution via CAMEL-AI framework; multiple specialized agents vs. OpenWork's single-agent approach | No public funding data found | No public data found |
| **Kuse** | Rust-native architecture for performance; lightweight agent framework | No public funding data found | No public data found |
| **OpenHands** | Code-focused autonomous software engineering; 65k GitHub stars; 50%+ SWE-bench score | Seed round raised, amount undisclosed (search snippet) | No public data found |

**Why now:** Anthropic launched Claude Cowork in early 2026, establishing the "AI coworker desktop" category (AI for Automation, Mar 2026). OpenWork launched three days after Claude Cowork (AI for Automation, Mar 2026). [Inferred]: The catalyst is Anthropic's category creation plus the maturation of open-source LLM infrastructure (Ollama, OpenCode, MCP protocol) enabling a credible open-source alternative. The $100–$200/month Claude pricing creates price-sensitive demand for free alternatives among individual developers and small teams.

## Founders & Team

**Ben Shafii** — Founder & CEO
- Associate's degree in Computer Science, SUPINFO (2013–2016) (RocketReach via search snippet)
- Previously: Orange DAO (VC, reviewed 8,000+ startup applications), Embedbase, prologe.io, Request (LinkedIn)
- Built prior YC-backed startup(s), raised $3M+ (LinkedIn)
- Rejected by YC 10 times before acceptance into Spring 2026 batch (LinkedIn post)
- Twitter/X: @hotkartoffel1 — bio: "ben shafii | oss + fintech" (follower count not retrievable)
- LinkedIn: linkedin.com/in/ben-shafii-450039107/ — 500+ connections
- GitHub: github.com/benjaminshafii — 77 repos, 205 followers; pinned repos include openwork (14.1k stars), inbox (1.7k stars), note-companion (831 stars), obsidian-ava (661 stars), embedbase (522 stars), agent-bank (220 stars)

**Alexandre Shafii** — appears as Product Engineer associated with different-ai and Note Companion (LinkedIn). Listed as TypeScript freelancer based in Berlin (LinkedIn). Not listed as a co-founder on the YC page.

**Co-founder relationship:** Only one founder (Ben Shafii) is listed on the YC page. Alexandre Shafii shares the surname and is associated with the different-ai organization, suggesting a family connection, but no co-founder relationship is formally documented.

**Founder-market fit:** Ben Shafii has a track record of building open-source developer tools — six pinned GitHub repos collectively totaling ~18k stars. His prior experience at Orange DAO reviewing 8,000+ startup applications and raising $3M+ through YC provides fundraising and ecosystem familiarity. His history of building Obsidian plugins (Note Companion, obsidian-ava) and developer APIs (Embedbase) demonstrates iterative product development in adjacent AI tooling categories.

## Key Risks

**Name collision:** "OpenWork" is shared with OpenWork Inc., a major Japanese job review platform, and OpenWork Partnership (UK staffing firm). This creates SEO competition and brand confusion, potentially limiting organic discoverability and complicating trademark protection. The company uses "openworklabs.com" as its domain rather than "openwork.com."

**Platform dependency on OpenCode engine:** OpenWork is "powered by OpenCode" (GitHub README). Changes to the OpenCode project's direction, licensing, or maintenance could directly impact OpenWork's core functionality. The team does not appear to control the upstream engine.

**Single listed founder with broad product surface:** The YC page lists one founder with a team of four, while the product spans desktop app, browser automation, document processing, sales automation, and enterprise features. The prior product history (Embedbase → Note Companion → Inbox → OpenWork) shows multiple pivots across different-ai, raising questions about sustained focus on the current product direction.

**Incumbent fast-follow risk:** Claude Cowork's category lead, Anthropic's resources ($30B+ raised), and the relative ease of building model-agnostic wrappers mean Anthropic could add multi-model support or open-source components. Other well-resourced competitors (OpenHands at 65k stars, Devin at $10.2B valuation) could expand into general desktop productivity.

**Monetization uncertainty:** The core product is free and MIT-licensed. No pricing page exists. Enterprise sales are the only visible revenue path. Converting open-source users to paying enterprise customers is a well-documented challenge in open-core models, and no revenue signals are publicly available.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $8.14B in 2025 → $127.05B by 2032 at 48.1% CAGR for AI code tools (MarketsandMarkets via search snippet) |
| SAM | No public data found |
| Traction | 14.1k GitHub stars, 1.3k forks (GitHub, Apr 2026); 12.2k stars and 1,800+ commits (AI for Automation, Mar 2026); press in GIGAZINE (Apr 2026), UC Strategies (Jan 2026), Julian Goldie (Jan 2026) |
| Revenue Signal | No public data found |
| Founders | Ben Shafii (Founder): prior $3M+ YC raise, Orange DAO VC (8k+ apps reviewed), 6 open-source projects totaling ~18k GitHub stars (LinkedIn, GitHub) |
| Competitors | Devin ($400M raised, ~$150M ARR, full SDLC automation) (TechCrunch, Sep 2025); Eigent (funding unknown, revenue unknown, multi-agent CAMEL-AI framework); Kuse (funding unknown, revenue unknown, Rust-native agent); OpenHands (seed raised, revenue unknown, 65k GitHub stars, code-focused) |
| Moat Signals | 14.1k GitHub stars / 1.3k forks community (GitHub, Apr 2026); shareable workflow/skills system (openworklabs.com) |
| Risk Factors | Name collision with Japanese OpenWork Inc., OpenCode engine dependency, monetization uncertainty |
| Founder Reach | Ben Shafii: Twitter @hotkartoffel1 (count not retrievable), LinkedIn 500+ connections, GitHub 205 followers / 77 repos (GitHub, LinkedIn) |
| Distribution Signals | 14.1k GitHub stars (GitHub, Apr 2026); press coverage in 3+ publications (GIGAZINE, UC Strategies, Julian Goldie); DEV Community feature; no Product Hunt listing found |
| Emails | ben@openworklabs.com |
