# Zenbu

> The extensible IDE for coding agents

| Field | Value |
|-------|-------|
| Website | https://www.zenbu.dev/ |
| YC Page | https://www.ycombinator.com/companies/zenbu-2 |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 1 |
| Location | San Francisco, CA, USA; Remote |
| Tags | Artificial Intelligence, Developer Tools, Open Source |
| YC Partner | Pete Koomen |
| Emails | rob@zenbu.dev |

## The Idea

- **Problem:** Developers running multiple coding agents in parallel face complexity in "reviewing changes nobody wrote by hand [and] verifying their work" using existing IDEs that were not built for agent orchestration (YC page, founder quote).
- **Approach:** Provides a Pi-native IDE where every plugin is editable TypeScript/ZenbuJS, with built-in git worktrees enabling parallel agent execution, split panes/tabs, hot reload, and integrated terminal (zenbu.dev, Jun 2026).
- **Differentiation:** vs. Cursor/Windsurf (closed, single-agent-flow editors) — Zenbu is "hackable" and plugin-editable post-install (zenbu.dev); vs. Cline/Aider (open-source agents without IDE shell) — Zenbu wraps the Pi agent in a customizable IDE (GitHub zenbu-labs); vs. Superset (YC P26, also IDE-for-agents per Hacker News Launch) — Zenbu emphasizes the Pi agent specifically (Founderland, 2026).
- **Business Model:** No pricing page disclosed (zenbu.dev, Jun 2026). [Inferred]: Likely a freemium/per-seat SaaS model given open-source framework (zenbu.js) plus commercial IDE distribution pattern common to Cursor/Windsurf.
- **TAM/SAM:** AI Code Tools Market valued at $9.46B in 2026, projected to $22.2B by 2030 at 23.8% CAGR (Research and Markets, 2026). No public SAM data found for the "extensible IDE for coding agents" sub-segment.
- **GTM / Distribution:** [Inferred]: Developer-led, open-source bottom-up distribution via the zenbu.js framework (222 GitHub stars) and Discord community, plus founder's existing audience from React Scan (22k stars, 800k weekly installs per YC page).

## Defensibility

- **Moat today:** Founder distribution from React Scan co-authorship — 22k GitHub stars, 800k weekly installs (YC page, 2026); zenbu.js framework has 222 stars (GitHub zenbu-labs, Jun 2026).
- **Future moat:** [Inferred]: A plugin ecosystem (ZenbuJS) creates switching costs if third-party plugins accumulate; unproven now given solo-founder stage and 222-star framework repo.
- **Market structure:** [Inferred]: No structural barrier identified — Cursor ($2B ARR, Feb 2026, TechCrunch) and OpenAI-owned Windsurf ($3B acquisition, late 2025, search snippet) could ship plugin/hackability features; the "hackable" thesis is a product choice, not a structural moat.
- **Commoditization risk:** Any well-resourced IDE vendor (Cursor, Windsurf/OpenAI, GitHub Copilot which added agent mode in March 2026 per search snippet) or open-source project (Cline, Aider) could add plugin-editability; the underlying Pi agent itself is third-party open source (github.com/badlogic/pi-mono).

## Market & Traction

- **Traction signals:**
  - GitHub: zenbu.js framework — 222 stars (GitHub zenbu-labs, Jun 2026).
  - Founder prior work: React Scan — 22k stars, 800k weekly installs (YC page, 2026); react-scan repo independently shows 15.8k stars (GitHub aidenybai/react-scan, Jun 2026).
  - Company Twitter: @zenbu_labs exists (zenbu.dev); follower count not retrievable.
  - Founder Twitter: @RobKnight__ — 4,431 followers (X.com, search snippet).
  - LinkedIn company page exists (linkedin.com/company/116834103); follower count not retrievable.
  - Discord community exists (zenbu.dev); member count not retrievable.
  - Documentation site: zenbulabs.mintlify.app (zenbu.dev).
  - No revenue, paying customers, press coverage, or Product Hunt launch found.
- **Competitors:**
  - Cursor / Anysphere ($2.3B Series D Nov 2025 at $29.3B post; in talks for $2B at $50B pre, Apr 2026, TechCrunch; $2B ARR Feb 2026): closed, dominant incumbent AI IDE with 40M users (search snippet).
  - Windsurf ($3B acquired by OpenAI late 2025, search snippet; revenue undisclosed post-acquisition): Cascade agent IDE now operated by Cognition (search snippet).
  - Cline ($32M Seed+Series A, Jul 2025, led by Emergence and Pace Capital, GlobeNewswire; revenue unknown; 5M installs per search snippet): open-source coding agent, no IDE shell.
  - Superset (YC P26, funding unknown, revenue unknown; Hacker News Launch May 2026): also an "IDE for the agents era" orchestrating 100+ coding agents — direct YC-batch competitor (Founderland, 2026).
  - Aider (open-source, no disclosed funding, revenue unknown): terminal-based BYOM coding agent (search snippet).
- **Why now:** [Inferred]: Multi-agent coding workflows became viable in 2025–2026 as Claude Code, Cursor, and open-source agents (Cline, Pi) crossed usability thresholds (Cursor hit $1B ARR late 2025, $2B Feb 2026, TechCrunch), creating new orchestration/review burdens that single-agent IDEs were not designed for.

## Founders & Team

- **Rob Pruzan (Founder):**
  - Background: University at Buffalo alumnus (search snippet); previously at Vercel on the Next.js core team (YC page); co-author of React Scan with 22k GitHub stars and 800k weekly installs (YC page); built Zenbu.js framework as precursor (X.com @RobKnight__).
  - Twitter/X: @RobKnight__ — 4,431 followers (search snippet).
  - LinkedIn: "Founder at Zenbu Labs (YC P26)" (linkedin.com/in/robert-pruzan/).
  - GitHub: @RobPruzan — 89 followers; top personal repo react-scratch with 126 stars (GitHub, Jun 2026); also major contributor to aidenybai/react-scan (15.8k stars).
- **Co-founder relationship:** Solo founder per YC page; not applicable.
- **Founder-market fit:** Built and shipped developer tooling reaching 800k weekly installs (React Scan, YC page) and is direct end-user of coding agents, matching the hackable-IDE-for-agents problem; YC Group Partner is Pete Koomen (YC page).

## Key Risks

- **Incumbent feature absorption:** Cursor ($2B ARR Feb 2026, TechCrunch) and OpenAI-owned Windsurf ($3B acquisition late 2025, search snippet) have the resources to add plugin/hackability or multi-agent orchestration; no structural barrier prevents replication. No mitigation found in public sources.
- **Direct YC-batch competition:** Superset (YC P26) launched an "IDE to orchestrate 100+ AI coding agents" in the same batch (Founderland; Hacker News Launch HN May 2026), creating overlapping positioning. No public mitigation/differentiation statement found.
- **Third-party agent dependency:** Zenbu is positioned as "Pi-native" (zenbu.dev) and Pi is an open-source project maintained by an external author (github.com/badlogic/pi-mono); upstream changes, slowdowns, or commercialization of Pi could disrupt Zenbu's core integration. No mitigation found.
- **Solo-founder execution risk against funded competitors:** Cline raised $32M (Jul 2025, GlobeNewswire) and Anysphere is in talks for $2B at $50B (Apr 2026, TechCrunch) while Zenbu lists team size of 1 (YC page); shipping/support velocity asymmetry is large. Not hiring per company_data ("Hiring: False").
- **Name disambiguation:** "Zenbu" is also a genomics visualization system (github.com/jessica-severin/ZENBU) and an unrelated Linux project (github.com/vinszent/Zenbu), which may dilute search/SEO discoverability. No mitigation found.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI Code Tools Market $9.46B in 2026, $22.2B by 2030, 23.8% CAGR (Research and Markets, 2026) |
| SAM | No public data found |
| Traction | zenbu.js framework 222 GitHub stars (GitHub zenbu-labs, Jun 2026); founder's React Scan 22k stars / 800k weekly installs (YC page, 2026); founder Twitter @RobKnight__ 4,431 followers (search snippet); active Discord and LinkedIn company page (zenbu.dev) |
| Revenue Signal | No public data found |
| Founders | Rob Pruzan (Founder): ex-Vercel Next.js core team; co-author React Scan (22k stars, 800k weekly installs); University at Buffalo alumnus |
| Competitors | Cursor/Anysphere ($2.3B Series D Nov 2025 + $2B at $50B Apr 2026 talks, $2B ARR Feb 2026, dominant closed IDE); Windsurf ($3B acquired by OpenAI late 2025, revenue undisclosed, Cascade agent IDE); Cline ($32M Seed+A Jul 2025, revenue unknown, 5M installs open-source agent); Superset (YC P26, funding/revenue unknown, direct same-batch IDE-for-agents competitor); Aider (no funding disclosed, revenue unknown, open-source terminal agent) |
| Moat Signals | Founder distribution from React Scan (22k stars, 800k weekly installs, YC page); zenbu.js open-source framework (222 stars, GitHub zenbu-labs) |
| Risk Factors | Incumbent feature absorption (Cursor, OpenAI/Windsurf), same-batch competition from Superset, third-party Pi agent dependency |
| Founder Reach | Rob Pruzan: Twitter 4,431, LinkedIn count not retrievable, GitHub 89 followers / top repo react-scratch 126 stars (also co-author of react-scan 15.8k stars) |
| Distribution Signals | GitHub zenbu-labs org / zenbu.js 222 stars (Jun 2026); Discord community link (zenbu.dev); docs at zenbulabs.mintlify.app; no Product Hunt launch found |
| Emails | rob@zenbu.dev (YC page) |

Sources:
- [Zenbu - Y Combinator](https://www.ycombinator.com/companies/zenbu-2)
- [Zenbu - A Hackable Interface for Pi](https://www.zenbu.dev/)
- [Rob Pruzan - LinkedIn](https://www.linkedin.com/in/robert-pruzan/)
- [Rob Pruzan (@RobKnight__) / X](https://x.com/robknight__)
- [RobPruzan · GitHub](https://github.com/RobPruzan)
- [zenbu-labs · GitHub](https://github.com/zenbu-labs)
- [zenbu.js framework · GitHub](https://github.com/zenbu-labs/zenbu.js)
- [aidenybai/react-scan · GitHub](https://github.com/aidenybai/react-scan)
- [Cursor's Anysphere valuation / ARR · TechCrunch](https://techcrunch.com/2026/04/17/sources-cursor-in-talks-to-raise-2b-at-50b-valuation-as-enterprise-growth-surges/)
- [Cline raises $32M · GlobeNewswire](https://www.globenewswire.com/news-release/2025/07/31/3125274/0/en/Cline-Raises-32M-in-Seed-and-Series-A-Funding-to-Bring-Agentic-AI-Coding-to-Enterprise-Software-Teams.html)
- [YC's Superset Launches IDE · Founderland](https://www.founderland.ai/articles/ycs-superset-launches-ide-to-orchestrate-100-ai-coding-agent-mosdckpb)
- [Launch HN: Superset (YC P26) · Hacker News](https://news.ycombinator.com/item?id=48236770)
- [Pi coding agent · GitHub](https://github.com/badlogic/pi-mono)
- [AI Code Tools Market Report · Research and Markets](https://www.researchandmarkets.com/reports/6225896/ai-code-tools-market-report)
