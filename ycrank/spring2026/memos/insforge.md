# InsForge

> The agent-native cloud infrastructure platform

| Field | Value |
|-------|-------|
| Website | https://insforge.dev/ |
| YC Page | https://www.ycombinator.com/companies/insforge |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 6 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Open Source, Infrastructure |
| YC Partner | Andrew Miklas |
| Emails | founders@insforge.dev (YC page) |

## The Idea

- **Problem:** AI coding agents (Claude Code, Cursor) cannot autonomously provision/operate backend services because existing BaaS tools (Supabase, Firebase) are configured through human-facing dashboards and require manual stitching of separate services (InsForge Launch YC; Hacker News Show HN #48181342).
- **Approach:** Exposes a unified backend (Postgres + pgvector, auth, S3-compatible storage, edge functions, model gateway, realtime) through an MCP server and CLI/skills layer so agents access schemas, policies, logs, and provisioning as structured context (insforge.dev; GitHub README, May 2026).
- **Differentiation:** vs. Supabase — agent-native MCP/CLI interface and self-reported benchmark of 1.6x faster, 30% fewer tokens (8.2M vs 11.6M), 1.7x higher accuracy (47.6% vs 28.6%) on 127 backend tasks (insforge.dev/alternatives/insforge-vs-supabase); vs. Convex — Apache-2.0 open source and self-hostable on Hugging Face/Replicate (Hacker News #48181342); vs. Firebase — open source and Postgres-based (GitHub README).
- **Business Model:** [Inferred]: Usage/tier-based managed hosting alongside free self-host (Apache 2.0 license on GitHub, May 2026); pricing page exists but specific tiers not captured in WebFetch (insforge.dev/pricing).
- **TAM/SAM:** No public TAM/SAM data found for the agent-native BaaS segment; reference comp Supabase reached $70M ARR Aug 2025, up 250% YoY (Sacra, 2025).
- **GTM / Distribution:** Open-source GitHub repo + Hacker News Show HN posts (4 documented launches, IDs 44772898, 45291644, 45449787, 48181342) + Product Hunt + Discord community (1,036 members, Discord listing).

## Defensibility

- **Moat today:** 10.7k GitHub stars, 919 forks, 4,147 commits, Apache 2.0 (GitHub, May 28, 2026) — open-source community + agent-skill integrations (Agent Directory feature on insforge.dev).
- **Future moat:** [Inferred]: Switching costs from agent skill libraries and MCP integrations specific to InsForge's schema/policy semantics; unproven because the agent-tooling ecosystem (MCP) is itself <18 months old.
- **Market structure:** [Inferred]: Supabase's human-UI workflows and dashboard-driven config create channel/UX inertia that complicates a clean pivot to agent-first primitives; not a hard structural barrier given Supabase added MCP server tooling (Supabase blog references).
- **Commoditization risk:** Supabase, Convex, Appwrite, and Firebase can each add MCP layers; Supabase already ships an MCP server (sealos.io comparison, 2026), so InsForge's interface advantage may compress.

## Market & Traction

- **Traction signals:**
  - GitHub: 10.7k stars, 919 forks, 44 releases, v2.1.9 latest (GitHub, May 28, 2026).
  - Product Hunt: 198 upvotes, 45 comments on launch (hunted.space; Product Hunt launch page).
  - Hacker News: 4 Show HN posts (HN item IDs 44772898, 45291644, 45449787, 48181342).
  - Discord: 1,036 members (Discord server listing via search snippet).
  - Self-reported usage: "more than 2000 databases hosted" and "5 enterprise teams" during launch (Product Hunt launch description via search snippet).
  - Funding: "$4M raised" cited in one search snippet (mindworks.vc snippet) — not confirmed via primary source.
  - Customer testimonials on landing page: Davidson, Dexter, Prakhar Singh, Gurnoor Singh, Wahed Sikder, Versun, Nicles Nirosh, Abhinav Ranish (insforge.dev).
- **Competitors:**
  - Supabase ($544M raised across 6 rounds, $70M ARR Aug 2025, $5B valuation Oct 2025; Tracxn, Sacra, TechCrunch): incumbent open-source Postgres BaaS now adding agent/MCP tooling.
  - Convex (~$26.1M Series A April 2022 led by a16z, revenue unknown; openalternative.co, search snippet): reactive backend with agent component ecosystem (Firecrawl integration).
  - Appwrite (total raised not captured in this research, revenue unknown; appwrite.io blog 2026): BSD-3 open-source self-hostable BaaS positioning for AI apps.
  - Firebase (Google subsidiary, revenue not broken out): hosted-only, not self-hostable (Makers' Den, 2026).
  - Sealos / self-host platforms (sealos.io blog): cited as comparison venue but not direct head-to-head feature parity for agent-native primitives.
- **Why now:** [Inferred]: MCP protocol release (late 2024) and the rise of autonomous CLI coding agents (Claude Code, Cursor) in 2025 created the specific interface gap InsForge addresses (Hacker News #48181342 founder commentary).

## Founders & Team

- **Hang Huang (Co-founder & CEO):**
  - Background: Yale MBA; ex-Amazon PM; former professional League of Legends player (YC page; search snippets, x.com/hanghuang_).
  - Twitter/X: @hanghuang_ — count not retrievable.
  - LinkedIn: "InsForge | Co-Founder and CEO" (linkedin.com/in/hang-huang-oliver).
  - GitHub: No public repos found tied to this handle in research.
- **Tony (Yaowen) Chang (Co-founder & CTO):**
  - Background: ex-Databricks Software Engineer on Networking Connectivity and Monitoring; prior internships at Meta (Ads ML Infra) and Amazon (Backend Infra); "5x Hackathon Winner" (ContactOut, LinkedIn).
  - Twitter/X: @tonychang430 — count not retrievable.
  - LinkedIn: "Co-founder @ InsForge(YC P26)" (linkedin.com/in/tony-chang-0430).
  - GitHub: @tonychang04 — top repo star count not retrievable from search snippets.
- **Co-founder relationship:** No public data on co-founder history (no shared employer or school surfaced across LinkedIn snippets).
- **Founder-market fit:** Tony's Databricks networking-infra background and Hang's Amazon PM + Yale MBA pair backend systems engineering with product/operator experience (LinkedIn, YC page); a small engineering team with prior tenure at Amazon, Databricks, Meta, and TikTok is referenced in the Product Hunt launch description (search snippet).

## Key Risks

- **Incumbent feature replication:** Supabase ($70M ARR, $5B valuation Oct 2025; TechCrunch) has the distribution and capital to ship its own MCP/agent layer (sealos.io 2026 references Supabase MCP), directly compressing InsForge's interface differentiation; mitigation = open-source community + benchmark lead (insforge.dev).
- **Benchmark credibility:** The 1.6x/30%/1.7x performance claims are self-published on insforge.dev/alternatives/insforge-vs-supabase with no third-party reproduction found; buyers may discount until independently verified.
- **Production maturity concern:** Product Hunt commentary flagged "there is a maturity that only comes with time" (Product Hunt launch reviews via search snippet), and v2.1.9 with 34 open issues / 39 PRs (GitHub, May 2026) suggests early product surface — enterprise adoption likely gated by stability.
- **Monetization unproven:** No published pricing tiers or paying-customer count surfaced in research; the cited "5 enterprise teams" (Product Hunt launch description) are described as ship/launch partners, not revenue customers.
- **Ecosystem dependency on MCP/agent runtimes:** Value proposition hinges on continued adoption of MCP and CLI coding agents (Claude Code, Cursor); a shift in agent tooling standards could obsolete the interface layer ([Inferred] from Hacker News thread #48181342 framing).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 10.7k GitHub stars, 919 forks (GitHub, May 28 2026); 198 Product Hunt upvotes, 45 comments (Product Hunt launch); 1,036 Discord members (Discord listing); 2,000+ databases hosted and 5 enterprise teams self-reported (Product Hunt launch description); 4 Show HN posts (Hacker News) |
| Revenue Signal | No public data found; pricing page exists at insforge.dev/pricing but tiers not captured |
| Founders | Hang Huang (CEO): Yale MBA, ex-Amazon PM, former pro League of Legends player. Tony (Yaowen) Chang (CTO): ex-Databricks networking-infra SWE, prior Meta and Amazon internships. |
| Competitors | Supabase ($544M raised, $70M ARR Aug 2025, human-centric BaaS adding MCP); Convex (~$26.1M Series A 2022, revenue unknown, reactive backend); Appwrite (raised unknown, revenue unknown, BSD-3 self-host BaaS); Firebase (Google, revenue not broken out, hosted-only). |
| Moat Signals | 10.7k GitHub stars and 919 forks, Apache 2.0 license, 4,147 commits, 44 releases (GitHub, May 2026); self-reported benchmark vs Supabase (insforge.dev/alternatives) |
| Risk Factors | Supabase/Convex replicating MCP layer, self-published benchmarks lack third-party validation, monetization not yet evidenced |
| Founder Reach | Hang Huang: Twitter @hanghuang_ count not retrievable, LinkedIn hang-huang-oliver, GitHub not found. Tony Chang: Twitter @tonychang430 count not retrievable, LinkedIn tony-chang-0430, GitHub @tonychang04 stars not retrievable. |
| Distribution Signals | Hacker News Show HN x4 (item IDs 44772898, 45291644, 45449787, 48181342); Product Hunt 198 upvotes (Product Hunt, 2025); Discord 1,036 members; GitHub 10.7k stars (May 2026) |
| Emails | founders@insforge.dev (YC page) |

Sources:
- [InsForge YC page](https://www.ycombinator.com/companies/insforge)
- [InsForge website](https://insforge.dev/)
- [InsForge GitHub](https://github.com/InsForge/InsForge)
- [Launch YC: InsForge](https://www.ycombinator.com/launches/QP6-insforge-the-backend-platform-for-ai-native-developers)
- [InsForge Product Hunt](https://www.producthunt.com/products/insforge-alpha)
- [Show HN: InsForge – Open-source Heroku for coding agents](https://news.ycombinator.com/item?id=48181342)
- [InsForge vs Supabase](https://insforge.dev/alternatives/insforge-vs-supabase)
- [Sealos comparison](https://sealos.io/blog/insforge-vs-supabase/)
- [Hang Huang LinkedIn](https://www.linkedin.com/in/hang-huang-oliver/)
- [Tony Chang LinkedIn](https://www.linkedin.com/in/tony-chang-0430/)
- [Supabase $5B valuation – TechCrunch](https://techcrunch.com/2025/10/03/supabase-nabs-5b-valuation-four-months-after-hitting-2b/)
- [Supabase ARR – Sacra](https://sacra.com/research/supabase-at-70m-arr-growing-250-yoy/)
