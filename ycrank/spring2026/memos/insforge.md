# InsForge

> The backend AI agents can actually use

| Field | Value |
|-------|-------|
| Website | https://insforge.dev/ |
| YC Page | https://www.ycombinator.com/companies/insforge |
| Batch | Spring 2026 (P26) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 6 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Open Source, Infrastructure |
| YC Partner | Andrew Miklas |
| Emails | info@insforge.dev (LinkedIn search snippet) |

## The Idea

**Problem:** AI coding agents (Cursor, Claude Code, GitHub Copilot, Windsurf, etc.) can generate frontend code effectively but struggle with backend operations—setting up databases, wiring authentication, configuring storage, and deploying serverless functions. Traditional BaaS platforms (Supabase, Firebase) were designed for human developers navigating GUIs and reading documentation, not for LLM agents consuming APIs programmatically (insforge.dev). Teams using AI agents hit a "backend bottleneck" where agents cannot autonomously provision and operate backend infrastructure (YC page).

**Approach:** InsForge exposes backend primitives (Postgres database, authentication, cloud storage, edge functions, realtime subscriptions, vector search via pgvector, and an AI model gateway) through a "semantic layer"—a context-optimized interface that agents can understand, reason about, and operate end-to-end (insforge.dev). The platform uses MCP (Model Context Protocol) integration and provides a `skill.md` canonical workflow reference for agents (insforge.dev). Self-reported benchmarks vs. Supabase: 1.6x faster task completion (150s vs. 239s), 30% fewer tokens consumed (8.2M vs. 11.6M), and 1.7x higher accuracy (47.6% vs. 28.6%) (insforge.dev, MCPMark benchmark).

**Differentiation:** vs. **Supabase** ($500M+ raised, $5B valuation; TechCrunch, Oct 2025): Supabase exposes a human-oriented dashboard and docs; InsForge's semantic layer is purpose-built for agent consumption, reducing token overhead and improving agent accuracy (insforge.dev). vs. **Firebase** (Google): Proprietary, mobile-first, no agent-oriented interface. vs. **Appwrite** ($37M raised; Tracxn): Self-hosted open-source BaaS but human-developer-oriented. vs. **Nhost** ($3M seed; nhost.io): GraphQL-native Hasura-based backend, no agent optimization layer.

**Business Model:** Three tiers (insforge.dev/pricing):
- **Free:** $0/mo — 50K MAU, 500MB DB, 5GB bandwidth, 1GB storage, $1 AI model credits. Projects go inactive after 1 week of non-use.
- **Pro:** $25/mo — 100K MAU, 8GB DB, 250GB bandwidth, 100GB storage, $10 AI model credits. Overage rates: $0.00325/MAU, $0.125/GB DB, $0.09/GB bandwidth, $0.021/GB storage.
- **Enterprise:** Custom pricing — SOC2, optional HIPAA, SSO, unlimited projects, dedicated support.

Revenue was ~$300/mo at time of 5th YC application rejection, per YC partner Jon Xu's feedback (insforge.dev/blog/getting-into-yc-after-6-tries). No current revenue figure publicly disclosed.

**TAM/SAM:**
- AI Code Assistants market: $8.14B in 2025, projected $127.05B by 2032, 48.1% CAGR (MarketsandMarkets, 2025 via search snippet).
- BaaS market: $4.7–31B in 2025 (varying by report scope), projected $37–114B by 2035, CAGR 13–26% (various reports via search snippets).
- [Inferred]: InsForge's SAM is the intersection—developers using AI coding agents who need managed backend infrastructure. No public SAM estimate found for this specific segment.

**GTM / Distribution:**
- X (Twitter) identified as primary acquisition channel; founders pursued a "building in public" strategy that doubled database count from 2,300 to 4,000+ between November 2025 and January 2026 (insforge.dev/blog/getting-into-yc-after-6-tries).
- Launch Week (March 9, 2026) generated 1.5M+ impressions on X and #1 GitHub Trending (insforge.dev/blog).
- Open-source repo (Apache 2.0) serves as developer funnel (GitHub).
- [Inferred]: Bottom-up PLG motion converting free-tier open-source users to Pro/Enterprise.

## Defensibility

- **Open-source community:** 7,700 GitHub stars, 615 forks, 3,546 commits, 32 releases (GitHub, Apr 2026). Apache 2.0 license enables adoption but does not prevent forking.
- **Agent-specific optimization:** The semantic layer and context engineering for AI agents represent a novel interface design not present in incumbent BaaS platforms (insforge.dev). Self-reported benchmark data (MCPMark) provides a quantitative differentiation claim.
- **Switching costs:** [Inferred]: Once teams deploy production databases and auth on InsForge, migration carries data and integration switching costs similar to any BaaS platform.

**Market structure:** Supabase and Firebase are optimized for human developer workflows. [Inferred]: Rebuilding their interfaces for agent-native consumption would require significant architectural changes and could cannibalize their existing human-developer UX and documentation strategy. However, Supabase has announced MCP support (Supabase MCP, public), which narrows this structural gap.

**Commoditization risk:** The semantic/context layer is a software abstraction over standard backend primitives (Postgres, S3, OAuth). [Inferred]: Any BaaS provider could build an agent-optimized interface; the barrier is execution speed and community adoption rather than deep technical moat. Supabase's $500M+ in funding gives it resources to move into this space rapidly.

## Market & Traction

**Traction signals:**
- 7,700 GitHub stars, 615 forks (GitHub, Apr 2026)
- 4,000+ databases hosted (Jan 2026, insforge.dev/blog)
- 2,000+ developers adopted (X/Twitter posts, 2026)
- Product Hunt (Mar 11, 2026): #1 Product of the Day, #3 Product of the Week, 127 upvotes, 639 comments (Product Hunt)
- Product Hunt (Nov 18, 2025): Alpha launch, 50 upvotes, 186 comments (Product Hunt)
- Launch Week: 1.5M+ X impressions, #1 GitHub Trending, 3K+ stars gained in one week (insforge.dev/blog)
- Discord community: 1,059 members (Discord invite page via search snippet)
- Twitter/X: @InsForge_dev (follower count not retrievable)
- LinkedIn: linkedin.com/company/insforge (follower count not retrievable)
- Funding: $2M raised; investors include YC, 1984 Ventures, MindWorks Ventures (PitchBook via search snippet). Note: one source cites $1.5M (search snippet from Hang Huang background search); exact amount unconfirmed.

**Competitive landscape:**

| Competitor | Funding | Differentiator vs. InsForge |
|---|---|---|
| **Supabase** | $500M+, $5B valuation (TechCrunch, Oct 2025) | Market leader in open-source BaaS; human-developer-oriented dashboard/docs; has begun MCP support |
| **Firebase** (Google) | Google-backed (no independent funding) | Proprietary, mobile-first, deep Google Cloud integration; no agent-native interface |
| **Appwrite** | $37M, Series A (Tracxn, Apr 2022) | Self-hosted open-source BaaS; strong on privacy/compliance; human-developer UX |
| **Nhost** | $3M seed (nhost.io, Apr 2021); $660K revenue with 6-person team (GetLatka, 2025) | GraphQL-native via Hasura; smaller but comparable scale |
| **PocketBase** | No funding (personal OSS project) | Single-binary SQLite backend; solo developer/hobbyist oriented; no cloud offering |

**Why now:**
- AI coding agent adoption has accelerated: 51% of professional developers use AI tools daily, 76% use or plan to adopt AI coding tools (MarketsandMarkets, 2025 via search snippet).
- [Inferred]: The emergence of MCP (Model Context Protocol) by Anthropic in late 2024 created a standardized interface for AI agents to interact with tools, enabling InsForge's semantic layer architecture. The rapid growth of agent-native development tools (Cursor, Windsurf, Claude Code) created demand for backend infrastructure these agents can operate autonomously.

## Founders & Team

**Hang Huang** — Co-Founder & CEO
- MBA, Yale School of Management (2021–2024) (MindWorks VC)
- BSBA Finance & Data Science, Northeastern University, Magna Cum Laude (MindWorks VC)
- Prior experience at Amazon and Riot Games (League of Legends) (search snippet from background search)
- Applied to YC 6 times before acceptance (insforge.dev/blog)
- Twitter/X: @hanghuang_ — 453 followers (search snippet)
- LinkedIn: linkedin.com/in/hang-huang-oliver/
- GitHub: No public repos found under personal account

**Tony (Yaowen) Chang** — Co-Founder & CTO
- BS Computer Science, UIUC '24 (GitHub profile)
- Software Engineer at Databricks, Networking Infrastructure (LinkedIn via search snippet)
- Intern at Meta, Ads ML Infrastructure (LinkedIn via search snippet)
- Intern at Amazon, Backend Infrastructure (LinkedIn via search snippet)
- 10 hackathon wins, 9 judging appearances (LinkedIn via search snippet)
- Twitter/X: @tonychang430 (follower count not retrievable)
- LinkedIn: linkedin.com/in/tony-chang-0430/
- GitHub: tonychang04 — 95 followers, 43 repos, notable pinned repos in Rust and Python (GitHub)

**Co-founder relationship:** Both founders interned at Amazon, providing a shared employer overlap (Phase 3 findings). Both were based in Seattle prior to relocating to San Francisco for YC (insforge.dev/blog).

**Founder-market fit:** Hang Huang brings product leadership and business development experience from Amazon and an MBA from Yale. Tony Chang brings systems engineering depth from Databricks (database infrastructure) and Meta, directly relevant to building backend infrastructure. Tony's hackathon track record (10 wins) aligns with rapid prototyping culture. The team relocated from Seattle to SF for YC batch P26 starting March 30, 2026 (insforge.dev/blog). MindWorks Ventures is a listed investor and features Hang Huang on their entrepreneur page (mindworks.vc).

## Key Risks

**Supabase convergence risk:** Supabase has begun adding MCP support for AI agent interaction. With $500M+ in funding and an established open-source community (80K+ GitHub stars), Supabase could build an agent-optimized layer that matches InsForge's core differentiation, leveraging its existing user base and brand (TechCrunch, Oct 2025; Supabase MCP announcements).

**Benchmark credibility:** InsForge's performance claims (1.6x faster, 1.7x higher accuracy vs. Supabase) are self-reported via their own MCPMark benchmark (insforge.dev). No independent third-party validation of these benchmarks has been found. Agent benchmarking methodologies are nascent and lack industry-standard frameworks.

**Revenue maturity:** Revenue was $300/mo at last publicly cited data point (insforge.dev/blog, timing ~late 2025). Current revenue is undisclosed. The $25/mo Pro tier with generous free-tier limits creates a long conversion path from open-source users to paying customers.

**Platform dependency on agent ecosystem:** The product's value proposition is tightly coupled to the continued growth and adoption of AI coding agents. A slowdown in agent adoption or a shift in how agents interact with backends (e.g., agents that provision their own infra) would undermine the core thesis.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI Code Assistants: $8.14B (2025) → $127.05B by 2032, 48.1% CAGR (MarketsandMarkets, 2025 via search snippet); BaaS: $4.7–31B (2025), 13–26% CAGR (various via search snippets) |
| SAM | No public data found |
| Traction | 7,700 GitHub stars (GitHub, Apr 2026); 4,000+ databases (insforge.dev/blog, Jan 2026); 2,000+ developers (X posts, 2026); #1 Product of Day (Product Hunt, Mar 2026); 1,059 Discord members (Discord, Apr 2026) |
| Revenue Signal | $300/mo at time of 5th YC rejection (~late 2025, insforge.dev/blog); Pro tier at $25/mo (insforge.dev/pricing); current revenue undisclosed |
| Founders | Hang Huang (CEO): Yale MBA, Northeastern BSBA, Amazon, Riot Games. Tony Chang (CTO): UIUC CS '24, Databricks, Meta, Amazon, 10 hackathon wins. |
| Competitors | Supabase ($500M+ raised, $5B valuation, revenue unknown, human-developer BaaS); Firebase (Google-backed, proprietary, mobile-first); Appwrite ($37M raised, revenue unknown, self-hosted BaaS); Nhost ($3M raised, $660K revenue per GetLatka 2025, GraphQL-native) |
| Moat Signals | 7,700 GitHub stars and open-source community (GitHub, Apr 2026); agent-specific semantic layer with self-reported benchmark advantage (insforge.dev, MCPMark) |
| Risk Factors | Supabase convergence via MCP support, self-reported benchmarks lacking third-party validation, platform dependency on AI agent ecosystem growth |
| Founder Reach | Hang Huang: Twitter 453 followers, LinkedIn linkedin.com/in/hang-huang-oliver/. Tony Chang: Twitter @tonychang430 (count not retrievable), LinkedIn linkedin.com/in/tony-chang-0430/, GitHub 95 followers (GitHub) |
| Distribution Signals | #1 Product of Day, #3 Product of Week (Product Hunt, Mar 2026); #1 GitHub Trending during launch week (insforge.dev/blog, Mar 2026); 1.5M+ X impressions during launch week (insforge.dev/blog, Mar 2026) |
| Emails | info@insforge.dev (LinkedIn search snippet) |
