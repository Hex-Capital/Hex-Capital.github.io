# Runtime

> Sandboxed coding agents for everyone on your team.

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

- **Problem:** Engineering leaders rolling out coding agents lack visibility, boundaries, and a safe way to let non-engineers use them — companies hit "AI slop in PRs, the one 'agent expert' whose setup nobody can reuse, compliance blocking Claude Code, and teams building their own internal orchestrator" (Product Hunt launch copy, 2026).
- **Approach:** Runtime provides sandboxed environments, session-level observability, configurable guardrails (system instructions, domain allowlists, encrypted secrets, spend caps), and multi-agent adapters so agents can be invoked from Slack, Linear, Jira, GitHub, CLI, API, or browser ([runtm.com](https://www.runtm.com/), 2026).
- **Differentiation:** vs. E2B/Daytona/Runloop (developer-facing sandbox APIs for AI agent builders), Runtime targets end-user teams within a company with packaged "agents anyone can use" and governance ([Runtime PH](https://www.producthunt.com/products/runtime), 2026); vs. Claude Code/Cursor/Codex direct use, Runtime adds enterprise control plane and connects to those CLIs as adapters (runtm.com features list).
- **Business Model:** [Inferred]: Per-seat or consumption-based SaaS — Product Hunt launch references "500 credits for everyone to use" and the website dashboard shows "$2,184 total cost across 35 team members" suggesting consumption + seat pricing (Runtime PH launch, runtm.com dashboard preview, 2026); no public pricing page found.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; adjacent AI agent sandbox category supports companies like E2B claiming 88% of Fortune 100 signed up ([VentureBeat](https://venturebeat.com/ai/how-e2b-became-essential-to-88-of-fortune-100-companies-and-raised-21-million), Jul 2025).
- **GTM / Distribution:** Founder-led inbound — "used in 40+ countries with zero ad spend" and "live with fast-growing YC scaleups" ([Launch HN](https://news.ycombinator.com/item?id=48225040), 2026); active "Founding Engineer" job listing on YC at $150K–$220K + 1–3% equity ([YC jobs](https://www.ycombinator.com/companies/runtime/jobs/0VjVZdp-founding-engineer)).

## Defensibility

- **Moat today:** Open-source repo (`runtm-ai/runtm`, 119 GitHub stars per search snippet, 2026) plus multi-agent adapter breadth (Claude Code, Cursor, Codex, Copilot, Gemini CLI, Devin, OpenCode listed on runtm.com); no customer-lock-in or network-effect signals found in public sources.
- **Future moat:** [Inferred]: Workflow + governance data accumulates per customer (audit logs, skills, integrations, spend policies) creating switching costs once anchored as the control plane for a company's coding-agent rollout.
- **Market structure:** [Inferred]: Coding-agent vendors (Anthropic, OpenAI, Cursor) have channel conflict incentive against multi-vendor neutrality, and sandbox infra players (E2B, Daytona) sell to agent builders not to end-user enterprise teams — leaving a wedge for a vendor-neutral team control plane (positioning per [runtm.com](https://www.runtm.com/), 2026).
- **Commoditization risk:** Components are reproducible — sandboxing (Firecracker/Docker), guardrails, and audit logging exist across E2B, Daytona, Runloop ([Northflank comparison](https://northflank.com/blog/daytona-vs-e2b-ai-code-execution-sandboxes), 2026); differentiation rests on the team-collaboration UX layer over those primitives.

## Market & Traction

- **Traction signals:**
  - Used in 40+ countries with zero ad spend ([Launch HN, Spring 2026](https://news.ycombinator.com/item?id=48225040)).
  - Live with "fast-growing YC scaleups" — specific customer names not disclosed publicly (runtm.com, 2026).
  - GitHub: `runtm-ai/runtm` — 119 stars (search snippet, 2026).
  - Product Hunt launch as "Sandboxed coding agents for everyone on your team" ([producthunt.com/products/runtime](https://www.producthunt.com/products/runtime), 2026); rank not retrievable.
  - YouTube launch video published ([youtube.com/watch?v=m3H8yUbdIHY](https://www.youtube.com/watch?v=m3H8yUbdIHY), 2026); view count not retrieved.
  - Active job posting: Founding Engineer, $150K–$220K, 1–3% equity (YC, 2026).
  - LinkedIn company page exists at `linkedin.com/company/runtm` — follower count not retrievable.
- **Competitors:**
  - E2B ($21M Series A led by Insight Partners, Jul 2025; revenue unknown but "88% of Fortune 100 signed up"; [PRNewswire](https://www.prnewswire.com/news-releases/e2b-raises-a-21m-series-a-to-offer-cloud-for-ai-agents-to-fortune-100-302514540.html)): sells sandbox API to agent builders, not a team-facing control plane.
  - Daytona ($24M Series A led by FirstMark, Feb 2026, $31M total; "$1M revenue run rate in under 3 months, doubled six weeks later" per [Daytona blog](https://www.daytona.io/dotfiles/daytona-raises-24m-series-a-to-give-every-agent-a-computer)): sub-90ms sandboxes for agents, infrastructure layer rather than team workflow layer.
  - Runloop ($7M seed led by The General Partnership, 2025; revenue unknown; [VentureBeat](https://venturebeat.com/infrastructure/runloop-lands-7m-to-power-ai-coding-agents-with-cloud-based-devboxes)): enterprise devboxes for AI coding agents, developer-API positioning.
  - Modal / Northflank / CodeSandbox SDK (revenue unknown publicly; [Better Stack 2026 comparison](https://betterstack.com/community/comparisons/best-sandbox-runners/)): general-purpose code execution platforms, not specifically a team-governance plane for coding agents.
  - Direct in-house orchestrators built by enterprises themselves — Runtime explicitly cites this as the alternative ([Product Hunt copy](https://www.producthunt.com/products/runtime), 2026).
- **Why now:** [Inferred]: Coding agents (Claude Code, Cursor, Codex, Gemini CLI, Devin) reached usability threshold in 2024–2026 such that non-engineers can ship code, while enterprise security/compliance teams began blocking ad-hoc CLI agent use — catalyst referenced in Runtime's own launch ("compliance blocking Claude Code", [PH launch](https://www.producthunt.com/products/runtime), 2026).

## Founders & Team

- **Gus Trigos (Co-Founder & CEO):**
  - Background: Finance degree and Master's in Applied Statistics from Hult; self-taught coder since high school C++; quant analyst at BlackRock; data scientist at AI startup and fintech; founded Mentum (YC S21, AI agents for procurement/supply chain) acquired by Nuvocargo in 2025 ([Nuvocargo press release](https://www.nuvocargo.com/blog-posts/nuvocargo-acquires-mentum-ai-agent-logistics); [No Cap profile](https://nocap.blog/founder/gus-trigos/)).
  - Twitter/X: [@gustrigos](https://x.com/gustrigos) — count not retrievable.
  - LinkedIn: "Co-Founder & CEO at Runtime (runtm.com)" ([linkedin.com/in/gustavoatrigos](https://www.linkedin.com/in/gustavoatrigos/)).
  - GitHub: No public handle confirmed in search results.
- **Carlos Volante (Co-Founder & CTO):**
  - Background: Software Engineer at Modern Treasury — scaled payments platform to $350B annual volume at 99.995% automation; previously at Finix (took merchant underwriting from $0 to six-figure revenue and $1B+ transaction volume); rebuilt billing infrastructure for live PPV events at Hulu (35M+ subscribers) (search snippets via [YC founding engineer JD](https://www.ycombinator.com/companies/runtime/jobs/0VjVZdp-founding-engineer); [LinkedIn](https://www.linkedin.com/in/carlos-volante-49bb86145/)).
  - Twitter/X: No public account found in search results.
  - LinkedIn: "Software Engineer - Modern Treasury" ([linkedin.com/in/carlos-volante-49bb86145](https://www.linkedin.com/in/carlos-volante-49bb86145/)).
  - GitHub: No public repos found in search.
- **Third team member:** YC page lists team size of 3 but only two founders (Gus Trigos, Carlos Volante) are named ([YC company page](https://www.ycombinator.com/companies/runtime), 2026); third person not identified in public sources.
- **Co-founder relationship:** No public data on co-founder history — search did not surface a shared prior employer or university between Trigos (BlackRock/Mentum/Nuvocargo) and Volante (Modern Treasury/Finix/Hulu).
- **Founder-market fit:** Trigos shipped 4 full-stack products at Nuvocargo post-acquisition then enabled non-engineers on the team to do the same, which he cites as the origin of Runtime ([@gustrigos post via search snippet](https://x.com/gustrigos/status/2034665819800834268)); Volante's background scaling regulated payments infrastructure aligns with the governance/audit-log requirement Runtime sells against (LinkedIn, 2026).

## Key Risks

- **Platform dependency on third-party agents:** Runtime's value proposition rests on adapters to Claude Code, Cursor, Codex, Copilot, Gemini CLI, Devin, OpenCode (runtm.com); any of those vendors shipping native team-management features (Anthropic and OpenAI both have enterprise SKUs as of 2026) creates substitution risk with no mitigation found in public materials.
- **Well-funded direct adjacent competitors:** E2B ($21M Series A, Insight Partners, Jul 2025) and Daytona ($24M Series A, FirstMark, Feb 2026, with a stated $1M→$2M ARR ramp) are scaling enterprise GTM into the same buyer ([PRNewswire](https://www.prnewswire.com/news-releases/e2b-raises-a-21m-series-a-to-offer-cloud-for-ai-agents-to-fortune-100-302514540.html); [Daytona blog](https://www.daytona.io/dotfiles/daytona-raises-24m-series-a-to-give-every-agent-a-computer)); Runtime would need to defend the "team workflow plane" framing against capital-advantaged infra players moving up-stack.
- **Open-source licensing fragmentation:** Repo split across MIT (templates), Apache 2.0 (CLI/shared libs), AGPL v3 (API & worker) (runtm.com) — AGPL on the API layer is intended to deter forks but can also block enterprise self-hosting adoption, an explicit feature Runtime markets ("optional self-hosting in VPC", [PH launch](https://www.producthunt.com/products/runtime)).
- **Undisclosed customer concentration:** "Live with fast-growing YC scaleups" with no named logos or revenue figures publicly (runtm.com, Launch HN, 2026); cohort exposure to YC-batch customer base could compress if YC-adjacent traction does not extend to traditional enterprise buyers.
- **Name disambiguation:** "Runtime" is a generic technical term — several search results for "Runtime" referred to unrelated runtime concepts/projects; this complicates SEO and brand discovery (observed across Phase 2 searches, 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Used in 40+ countries with zero ad spend (Launch HN, Spring 2026); live with YC scaleups (runtm.com, 2026); GitHub `runtm-ai/runtm` 119 stars (search snippet, 2026); Product Hunt launch live (producthunt.com/products/runtime, 2026); YouTube launch video published (youtube.com/watch?v=m3H8yUbdIHY, 2026) |
| Revenue Signal | No public data found (no pricing page; Product Hunt launch offered "500 credits" giveaway, PH, 2026) |
| Founders | Gus Trigos (CEO): Mentum YC S21 founder acquired by Nuvocargo 2025, ex-BlackRock quant. Carlos Volante (CTO): ex-Modern Treasury ($350B payments volume), ex-Finix, ex-Hulu. |
| Competitors | E2B ($21M Series A Insight Partners Jul 2025, revenue unknown, sells sandbox API to agent builders); Daytona ($24M Series A FirstMark Feb 2026, $31M total, "$1M→$2M ARR in 6 weeks", AI agent sandbox infra); Runloop ($7M seed The General Partnership 2025, revenue unknown, enterprise devboxes for AI coding agents); Modal/Northflank/CodeSandbox SDK (revenue unknown, general code execution platforms) |
| Moat Signals | Open-source repo `runtm-ai/runtm` 119 GitHub stars (search snippet, 2026); multi-agent adapter breadth (7+ agents listed on runtm.com); AGPL v3 on API/Worker layer (runtm.com) |
| Risk Factors | Third-party agent vendor platform dependency, well-funded adjacent competitors (E2B, Daytona), AGPL license adoption friction |
| Founder Reach | Gus Trigos: Twitter @gustrigos count not retrievable, LinkedIn profile public, GitHub not found. Carlos Volante: Twitter not found, LinkedIn profile public, GitHub not found. |
| Distribution Signals | Product Hunt launch (PH, 2026); Hacker News Launch HN thread id 48225040 (news.ycombinator.com, 2026); YouTube launch video (2026); LinkedIn company page linkedin.com/company/runtm (2026); active YC job listing for Founding Engineer (YC, 2026) |
| Emails | No public data found |

Sources:
- [Runtime — Y Combinator](https://www.ycombinator.com/companies/runtime)
- [Runtime website](https://www.runtm.com/)
- [Launch HN: Runtime (YC P26)](https://news.ycombinator.com/item?id=48225040)
- [Runtime on Product Hunt](https://www.producthunt.com/products/runtime)
- [Runtime Founding Engineer job](https://www.ycombinator.com/companies/runtime/jobs/0VjVZdp-founding-engineer)
- [runtm-ai/runtm on GitHub](https://github.com/runtm-ai/runtm)
- [Nuvocargo acquires Mentum](https://www.nuvocargo.com/blog-posts/nuvocargo-acquires-mentum-ai-agent-logistics)
- [Gus Trigos — No Cap profile](https://nocap.blog/founder/gus-trigos/)
- [Gus Trigos LinkedIn](https://www.linkedin.com/in/gustavoatrigos/)
- [Carlos Volante LinkedIn](https://www.linkedin.com/in/carlos-volante-49bb86145/)
- [E2B $21M Series A — PRNewswire](https://www.prnewswire.com/news-releases/e2b-raises-a-21m-series-a-to-offer-cloud-for-ai-agents-to-fortune-100-302514540.html)
- [E2B essential to 88% Fortune 100 — VentureBeat](https://venturebeat.com/ai/how-e2b-became-essential-to-88-of-fortune-100-companies-and-raised-21-million)
- [Daytona $24M Series A](https://www.daytona.io/dotfiles/daytona-raises-24m-series-a-to-give-every-agent-a-computer)
- [Runloop $7M seed — VentureBeat](https://venturebeat.com/infrastructure/runloop-lands-7m-to-power-ai-coding-agents-with-cloud-based-devboxes)
- [Daytona vs E2B — Northflank](https://northflank.com/blog/daytona-vs-e2b-ai-code-execution-sandboxes)
