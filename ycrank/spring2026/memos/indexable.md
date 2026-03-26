# Indexable

> sandbox infrastructure for AI agents

| Field | Value |
|-------|-------|
| Website | https://ix.dev |
| YC Page | https://www.ycombinator.com/companies/indexable |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence |
| YC Partner | Pete Koomen |
| Emails | andrew@ix.dev (GitHub bio) |

## The Idea

**Problem:** AI agents that write code, modify databases, or run shell commands need isolated environments to operate safely. Without sandboxing, agents risk corrupting production state. Current solutions either use ephemeral containers with slow cold starts (~150ms+) or lack the ability to fork stateful environments—including running processes, memory, and databases—as a single atomic unit. Teams building agent platforms must choose between speed, state fidelity, and isolation.

**Approach:** Indexable built a custom virtual machine monitor (VMM) on top of KVM that can fork an entire running sandbox—files, processes, memory, and databases—in 26 milliseconds (ix.dev). Idle branches reclaim memory automatically, and storage is deduplicated across forks via a content-addressable storage engine with tiered caching (YC job posting). The system supports autoscaling up to 3 TB RAM, 384 vCPUs, and 1 PB storage (ix.dev). The transport layer runs over libfabric, enabling migration from TCP to RDMA without application rewrites (YC job posting). The stack also includes a custom Linux 6.19 kernel with upstream-unsupported patches and a Rust-based Nix reimplementation ("snix") for reproducible builds (YC job posting).

**Differentiation:** E2B ($32–43.8M raised) uses Firecracker microVMs with ~150ms cold starts and ephemeral sessions capped at 24 hours—no database-level forking (E2B blog, Jul 2025). Daytona ($31M raised) offers sub-90ms cold starts with Docker isolation and fork/snapshot primitives, but uses containers rather than a custom VMM (Daytona PR, Feb 2026). Blaxel ($7.3M seed) claims <25ms resume with memory state preservation but does not emphasize database-level forking (VentureBeat). Modal ($111M raised, ~$50M ARR) is a serverless Python compute platform where sandbox is a feature, not the core product (SiliconANGLE, Sep 2025). Cloudflare Dynamic Workers (Mar 2026) use V8 isolates—extremely fast for stateless execution but fundamentally different from stateful fork/snapshot (Cloudflare blog). Indexable's claimed combination of 26ms full-environment forking including databases, custom KVM-based VMM, and content-addressable deduplication is not matched by any single competitor at that scope and speed.

**Business Model:** No pricing page found on ix.dev (site returned HTTP 403 at time of research). [Inferred]: Most likely monetization path is usage-based pricing (per sandbox-hour, per fork, or per compute resource) given the infrastructure nature of the product and the consumption-based models used by E2B, Daytona, and Modal.

**TAM/SAM:** The agentic AI market is estimated at $6.96B in 2025, growing at 43.84% CAGR to $199.05B by 2034 (Precedence Research). MarketsandMarkets estimates the same market reaching $24.5B by 2030 at 46.2% CAGR (MarketsandMarkets). The AI infrastructure market is estimated at $90–101B in 2026 (Coherent Market Insights; Business Research Company). No analyst firm has published a standalone "AI agent sandbox infrastructure" TAM. [Inferred]: The sandbox/runtime infrastructure sub-segment is likely in the $500M–2B range in 2026, growing with the broader agentic AI market CAGR.

**GTM / Distribution:** The company has one active job posting for a Founding Engineer (AI-first) on the YC jobs board, requiring C, Rust, and Unix skills at $150K–$175K salary and 0.75%–1.50% equity (YC job posting). Andrew Gazelka's X bio states "early access DM" (X/@andrewgazelka). [Inferred]: Current distribution is founder-led sales and early-access onboarding via direct outreach to AI agent platform builders, leveraging the YC network.

## Defensibility

- **Technical complexity:** The custom VMM on KVM, custom Linux 6.19 kernel, RDMA-capable transport, and content-addressable storage engine represent substantial systems engineering (YC job posting). Reproducing this stack requires deep kernel and hypervisor expertise.
- **Switching costs:** [Inferred]: Once agent platforms integrate fork/snapshot APIs into their workflows, switching to a competitor would require re-architecting state management logic, creating moderate switching costs.
- **No network effects today.** [Inferred]: Potential data-driven moat could develop via cross-tenant storage deduplication (more tenants = better deduplication ratios = lower costs), but this is unproven at this stage.

**Market structure:** E2B, Daytona, and other sandbox providers use off-the-shelf virtualization (Firecracker, Docker). Building a custom VMM with database-level state forking requires kernel-level engineering that is structurally difficult for higher-level platform companies (Vercel, Cloudflare) to prioritize, as their sandbox offerings are features within larger product suites rather than core products. [Inferred]: The structural barrier is that incumbents' sandbox features serve their existing ecosystems (Vercel/Next.js, Cloudflare/Workers) and lack incentive to build general-purpose stateful fork infrastructure for third-party agent platforms.

**Commoditization risk:** Zeroboot (open-source) demonstrates sub-millisecond VM forking via copy-on-write Firecracker snapshots with 47 GitHub stars (GitHub/zeroboot). E2B is open-source with broad enterprise adoption (88% of Fortune 100 signed up per E2B blog). The core VM-forking primitive is reproducible; Indexable's differentiation depends on the full-stack integration (databases, processes, memory, storage deduplication) remaining ahead of competitors' roadmaps.

## Market & Traction

**Traction signals:**
- No public revenue, user counts, or growth metrics found.
- No Product Hunt launch or listing found.
- No press coverage in named publications found.
- No third-party reviews or inclusion in sandbox comparison articles (checked: Northflank, Better Stack, Ry Walker roundups—Indexable absent from all).
- Company Twitter/X: @indexablehq — follower count not retrievable (X returned HTTP 402).
- Founder Twitter/X: @andrewgazelka — ~86 followers (search engine metadata).
- GitHub org (indexable-inc): 5 followers, 0 public repositories (GitHub).
- Founder GitHub: 186 followers, 217 repos, Starstruck x3 achievement (GitHub/andrewgazelka).
- No LinkedIn company page found for the AI startup (the /company/indexable slug belongs to an unrelated NYC analytics firm).
- No Discord or Slack community found.
- 1 active job posting: Founding Engineer (YC job board).
- Website (ix.dev) returned HTTP 403 at time of research.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs Indexable |
|------------|---------|-------------|-------------------------------|
| E2B | $32–43.8M total, Series A (Jul 2025, Insight Partners) | $1.5M (Jun 2025, Getlatka) | Open-source SDK ecosystem, 88% Fortune 100 signed up; ephemeral sessions only, ~150ms startup, no DB forking |
| Daytona | $31M total, Series A (Feb 2026, FirstMark) | $1M+ ARR within ~2 months of relaunch (Daytona blog) | Closest positioning (composable fork/snapshot); Docker isolation vs custom VMM; sub-90ms vs 26ms |
| Modal | $111M total, Series B (Sep 2025); ~$1.1B valuation, in talks at ~$2.5B (TechCrunch, Feb 2026) | ~$50M ARR (Contrary Research) | Serverless Python compute platform; sandbox is a feature, not core; GPU infrastructure advantage |
| Blaxel (YC S25) | $7.3M seed (First Round) | Not disclosed; millions of agent requests daily (VentureBeat) | <25ms resume, perpetual sandboxes, co-located APIs; no database-level forking emphasis |
| Morph Labs | $5.75M seed (Sep 2024, Khosla) | Not disclosed | "Infinibranch" environment branching + higher-level coding agent tools |

**Why now:** [Inferred]: The catalyst is the rapid scaling of autonomous AI coding agents (Claude Code, Codex, Devin, Cursor) in 2024–2025, which created demand for sandboxes that can handle stateful operations—not just code execution but database writes, process management, and file mutations. Cloud-native developers grew 28% in six months to 19.9M in Q1 2026 (SlashData). Every major cloud provider (Cloudflare Dynamic Workers Mar 2026, Vercel Sandbox, Fly.io Sprites Jan 2026) launched sandbox products in this period, validating the category. The agentic AI market's 43–46% CAGR (Precedence Research; MarketsandMarkets) creates a rapidly expanding customer base of agent platform builders who need this infrastructure.

## Founders & Team

**Andrew Gazelka** — Founder
- Former Member of Technical Staff at xAI (YC page; LinkedIn snippet).
- Former employee at Speechify (X bio).
- Co-founded BountyBot, which was acquired; acquirer and date undisclosed (X bio).
- Education: University of Minnesota, Computer Science and Engineering (ResearchGate).
- Created Hyperion, a Minecraft game engine in Rust targeting 10,000+ concurrent players in one world, with ~1,000 GitHub stars and 32 forks (GitHub/hyperion-mc/hyperion). Hyperion HN post received 99 points and 33 comments (HN item #45270861).
- Contributor to Nushell (38.9k stars, though not author) (GitHub).
- Created SwarmBot, an autonomous Minecraft bot launcher in Rust, 98 stars (GitHub, archived).
- Blog post: "The Dawn of 100,000-Player Minecraft PvP" (Jul 2024) and "GPT4 as a Hardware Abstraction Layer" (Apr 2023) (andrewgazelka.github.io).
- GitHub bio: "do less, deeply; #1 r/rust for 24 hours" (GitHub/andrewgazelka).
- Twitter/X: @andrewgazelka — ~86 followers (search metadata). Joined Oct 2025.
- LinkedIn: linkedin.com/in/andrewgazelka — headline "Andrew Gazelka - xAI" (search snippet).
- GitHub: github.com/andrewgazelka — 186 followers, 217 repos, 2.5k starred, Starstruck x3.

No other founders or team members are publicly named. The YC page lists only Andrew Gazelka as founder despite a team size of 3. The GitHub org (indexable-inc) shows only one visible member (@andrewgazelka). The company is actively hiring a Founding Engineer, suggesting the team may still be assembling.

**Co-founder relationship:** Only one founder is listed. No public data on co-founder history.

**Founder-market fit:** Gazelka's background combines high-performance systems engineering (xAI), deep Rust expertise (Hyperion with 1k stars, Nushell contributions, multiple Rust crates), and demonstrated ability to build custom game engines handling massive concurrent state—a direct analog to the VM forking and state management challenges in sandbox infrastructure. His prior exit (BountyBot acquired) and xAI tenure indicate experience shipping in high-stakes technical environments.

## Key Risks

**1. Competitive density with funded incumbents:** At least six funded startups (E2B $32M+, Daytona $31M, Blaxel $7.3M, Morph $5.75M, RunLoop $7M) plus features from Cloudflare, Vercel, and Fly.io are competing in the AI agent sandbox space. E2B has 88% of Fortune 100 signed up (E2B blog). Daytona crossed $1M ARR within two months of relaunch (Daytona blog). Indexable enters with YC-level funding against competitors with 5–20x more capital and established customer bases.

**2. Custom VMM maintenance burden:** Indexable maintains a custom VMM on KVM, a custom Linux 6.19 kernel with non-upstream patches, and a Rust-based Nix fork (YC job posting). With a 3-person team, the surface area of custom low-level infrastructure creates engineering concentration risk. Competitors using Firecracker (AWS-maintained, battle-tested) carry lower infrastructure maintenance overhead.

**3. Single-founder key-person risk:** Andrew Gazelka is the only named founder. No other team members are publicly identified. The technical stack (custom VMM, custom kernel, RDMA transport) requires deep kernel-level expertise that is difficult to replace.

**4. Pre-product-market-fit visibility:** The website returned HTTP 403. No Product Hunt launch, no press coverage, no inclusion in any sandbox comparison article (Northflank, Better Stack, Ry Walker roundups all omit Indexable). The "early access DM" model limits discoverability relative to competitors with open-source repos (E2B) or public documentation.

**5. Name disambiguation:** "Indexable" is a common English word used in SEO and database contexts. An unrelated company, Indexable LLC (NYC web analytics), occupies the LinkedIn /company/indexable slug. This creates search and brand confusion.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Agentic AI market: $6.96B in 2025, 43.84% CAGR to $199.05B by 2034 (Precedence Research). AI infrastructure: $90–101B in 2026 (Coherent Market Insights; Business Research Company). |
| SAM | No public data found |
| Traction | 1 active job posting on YC board (YC, Mar 2026). GitHub org: 5 followers, 0 public repos (GitHub). No public user/revenue metrics found. |
| Revenue Signal | No public data found |
| Founders | Andrew Gazelka (Founder): ex-xAI MTS, ex-Speechify, co-founded BountyBot (acquired), UMN CS, Hyperion creator (1k GitHub stars). |
| Competitors | E2B ($32–43.8M raised, $1.5M revenue Jun 2025, open-source SDK/Fortune 100 adoption), Daytona ($31M raised, $1M+ ARR mid-2025, closest fork/snapshot positioning), Modal ($111M raised, ~$50M ARR, serverless Python compute), Blaxel ($7.3M raised, revenue unknown, <25ms perpetual sandboxes), Morph ($5.75M raised, revenue unknown, environment branching + coding tools) |
| Moat Signals | Custom VMM on KVM with 26ms full-environment forking including databases (ix.dev; YC job posting). Content-addressable storage with cross-tenant deduplication (YC job posting). |
| Risk Factors | Competitive density with well-funded incumbents, custom VMM maintenance burden on 3-person team, single-founder key-person risk |
| Founder Reach | Andrew Gazelka: Twitter ~86 (search metadata), GitHub 186 followers / 2.5k stars received (GitHub), LinkedIn not retrievable |
| Distribution Signals | No public data found |
| Emails | andrew@ix.dev (GitHub bio) |
