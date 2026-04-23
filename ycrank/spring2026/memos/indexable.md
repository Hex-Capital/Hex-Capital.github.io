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

**Problem:** AI agents need isolated execution environments to run code, interact with filesystems, databases, and processes safely. Current cloud infrastructure was designed for human-driven workflows and lacks the ability to fork, snapshot, and roll back full environments at millisecond speed — capabilities essential for agentic loops that branch, explore, and backtrack. Existing sandbox solutions (E2B, Daytona, Modal) offer container or microVM isolation but vary in cold-start latency (90ms–12s) and do not uniformly support full-environment forking across all state (files, processes, memory, databases) (DEV Community, 2026 via search snippet).

**Approach:** Indexable builds a custom hypervisor (VMM) on top of KVM that can fork a running sandbox in milliseconds, preserving the full state of the guest OS — files, processes, memory, and databases. The stack includes a content-addressable storage engine with tiered caching and cross-tenant deduplication, a libfabric-based storage fabric enabling TCP-to-RDMA migration, guest-visible local filesystems backed by content-addressable storage, a modified Linux 6.19 kernel with upstream-unsupported patches, and a customized Nix build system reimplemented in Rust (YC job posting). This is a ground-up systems approach rather than a wrapper around existing container runtimes or Firecracker.

**Differentiation:** Unlike E2B and Blaxel, which use Firecracker microVMs, Indexable builds its own VMM with native fork semantics — the ability to clone an entire running environment (not just restart from a checkpoint). Unlike Daytona, which offers ~90ms cold starts on standard sandboxes, Indexable targets millisecond forking of already-running VMs including full memory state. Unlike Modal, which focuses on serverless GPU compute, Indexable is purpose-built for stateful sandbox branching. The custom kernel and storage stack are a deeper infrastructure bet than API wrappers over existing runtimes.

**Business Model:** No public pricing page found (website returned 403 at time of research). [Inferred]: Most likely monetization path is usage-based pricing (per vCPU-hour or per-sandbox-minute) consistent with market norms — E2B charges ~$0.083/vCPU-hour, Daytona ~$0.0504/vCPU-hour (DEV Community, 2026).

**TAM/SAM:**
- Global AI agents market: $7.63B in 2025, projected to $199.05B by 2034 at ~45.5% CAGR (Grand View Research, 2025; Precedence Research, 2025 via search snippets).
- [Inferred]: The serviceable segment — AI agent sandbox/execution infrastructure — is a subset of this broader market. No standalone TAM estimate for sandbox infrastructure specifically was found.

**GTM / Distribution:**
- Active job posting for Founding Engineer (AI-first) listing required skills: C, Rust, Unix (YC job posting).
- [Inferred]: Most likely distribution path is developer-first SDK adoption (Python/TypeScript SDKs targeting AI agent framework builders), consistent with the approach taken by E2B, Daytona, and Blaxel in this category.

## Defensibility

- **Technical complexity as barrier:** The stack involves a custom VMM, modified Linux kernel (6.19 with upstream-unsupported patches), content-addressable storage with cross-tenant deduplication, and a Nix-in-Rust build system (YC job posting). [Inferred]: This represents substantial systems engineering that would take a competing team 12-18+ months to replicate from scratch.
- **No network effects or data moats today.** [Inferred]: Potential moat could develop via content-addressable deduplication — as more tenants share common base images and dependencies, storage and fork costs decrease, creating a multi-tenant efficiency advantage.

**Market structure:** E2B, Daytona, and Blaxel use Firecracker or existing VM runtimes. [Inferred]: Major cloud providers (AWS, GCP, Azure) could build similar capabilities but face business model conflict — sandbox infrastructure for AI agents commoditizes compute, which conflicts with their core margin structure of selling VMs at markup. However, AWS Lambda and Firecracker already exist as foundations, so the structural barrier is moderate.

**Commoditization risk:** E2B ($21M Series A), Daytona ($24M Series A), Blaxel ($7.3M Seed), and Modal ($87M Series B) are all well-funded and competing in overlapping space (various sources, 2025–2026). Open-source alternatives like Daytona's self-hosted option and Alibaba's OpenSandbox further increase commoditization pressure. Indexable's custom VMM approach is differentiated but must prove performance advantages translate to customer switching.

## Market & Traction

**1. Traction signals:**
- Website (ix.dev) returned HTTP 403 at time of research. No product demo, documentation, or pricing publicly accessible.
- GitHub organization (indexable-inc): 1 public repo ("docs"), 0 stars, 11 followers, 2 visible members (GitHub, Apr 2026).
- X/Twitter company handle: @indexablehq (YC page). Follower count not retrievable.
- Founder X/Twitter: @andrewgazelka. Follower count not retrievable.
- Founder GitHub: andrewgazelka, 195 followers (GitHub, Apr 2026).
- Job posting: Founding Engineer (AI-first), $150K–$175K, 0.75%–1.50% equity (YC job posting).
- No Product Hunt launch found.
- No press coverage found in named publications.
- No public revenue, user count, or customer data found.

**2. Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Indexable |
|---|---|---|
| E2B | $21M Series A (Insight Partners, Jul 2025) | Firecracker microVMs, ~150ms cold start, 88% Fortune 100 adoption, $1.5M revenue (Jun 2025) (VentureBeat, Jul 2025; Latka, 2025) |
| Daytona | $24M Series A (FirstMark, Feb 2026) | Open-source/self-hosted, ~90ms cold start, Docker-in-Docker, GPU support, $1M forward revenue run rate in <3 months (PRNewswire, Feb 2026) |
| Modal | $87M Series B (Lux Capital, Sep 2025), $1.1B valuation | Serverless GPU compute, gVisor isolation, 20K concurrent containers; broader than sandbox-only (TechCrunch, Feb 2026; SiliconANGLE, Sep 2025) |
| Blaxel | $7.3M Seed (First Round, Dec 2025) | ~25ms cold start, persistent sandboxes, YC S25, millions of daily agent requests (VentureBeat, Dec 2025) |
| Fly.io Sprites | Fly.io parent company funding | Persistent 100GB NVMe, checkpoint/restore (~300ms), idle billing (DEV Community, 2026) |

**3. Why now:**
- [Inferred]: The catalyst is the rapid adoption of AI coding agents (Claude Code, Codex, Cursor, Devin) in 2024–2025, which created demand for sandboxed execution environments that can fork, branch, and roll back at the speed of agent decision-making. E2B processed "hundreds of millions" of sandbox sessions since Oct 2024 (VentureBeat, Jul 2025), validating infrastructure-layer demand. The shift from single-turn code generation to multi-step agentic workflows requires stateful, forkable environments rather than stateless containers.

## Founders & Team

**Andrew Gazelka** — Founder
- Former Member of Technical Staff at xAI (LinkedIn listing via search snippet).
- Co-founded BountyBot (acquired) (X profile via search snippet).
- Affiliated with University of Minnesota, Department of Computer Science and Engineering (ResearchGate).
- Created Hyperion, a Minecraft game engine supporting 10,000+ concurrent players in one world — 1,000+ GitHub stars (GitHub). This project demonstrates expertise in high-performance networked systems, low-latency state synchronization, and Rust systems programming at scale.
- Blog post: "The Dawn of 100,000-Player Minecraft PvP" (Jul 2024) (andrewgazelka.github.io).
- #1 on r/rust for 24 hours (GitHub bio).
- Twitter/X: @andrewgazelka — follower count not retrievable.
- LinkedIn: linkedin.com/in/andrewgazelka — headline lists "xAI." Connection count not retrievable.
- GitHub: github.com/andrewgazelka — 221 repos, 195 followers, Hyperion (1k stars), SwarmBot (98 stars), contributor to nushell (39.1k stars) (GitHub, Apr 2026).

The YC page lists only Andrew Gazelka as founder despite a team size of 3. No other team members' names were found in public sources. The two additional team members are likely engineers given the active Founding Engineer job posting.

**Co-founder relationship:** Only one founder listed. Not applicable.

**Founder-market fit:** Gazelka's background combines high-performance Rust systems programming (Hyperion handling 10K+ concurrent players), infrastructure work at xAI, and a prior acquisition (BountyBot). The technical depth in VM-level systems, networking, and concurrency aligns directly with building a custom hypervisor and storage engine for sandbox infrastructure. His modified Linux kernel and libfabric work indicate kernel-level systems competence uncommon among startup founders in this space.

## Key Risks

**1. Capitalization gap vs. funded competitors:** E2B ($21M), Daytona ($24M), Modal ($87M), and Blaxel ($7.3M) have raised substantially more than YC's standard ~$500K deal (various sources, 2025–2026). Indexable must either raise quickly or demonstrate a performance advantage large enough to win customers despite fewer resources. Mitigation: lean team and no large infrastructure cost until customer traction arrives.

**2. Custom VMM maintenance burden:** Building and maintaining a custom hypervisor, modified Linux 6.19 kernel, and reimplemented Nix in Rust requires ongoing engineering effort disproportionate to a 3-person team (YC job posting). Kernel patches diverging from upstream create long-term maintenance risk as Linux advances. Mitigation: Rust's safety guarantees reduce certain bug classes; but kernel-level divergence is inherently costly.

**3. Market timing and consolidation:** Five well-funded competitors are already selling into the same buyer persona (AI agent framework developers). E2B reports 88% Fortune 100 adoption (VentureBeat, Jul 2025). [Inferred]: If enterprise buyers standardize on an incumbent before Indexable reaches market, switching costs (SDK integration, workflow dependencies) could make customer acquisition significantly harder. Indexable's custom VMM fork semantics must demonstrate a capability gap that existing solutions cannot replicate incrementally.

**4. Solo-founder operational risk:** Only one founder is listed on the YC page despite a team of 3 (YC page). [Inferred]: A single-founder structure concentrates decision-making and key-person risk, which is heightened given the deeply technical nature of the product requiring sustained kernel-level engineering.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI agents market $7.63B in 2025, projected $199.05B by 2034 at ~45.5% CAGR (Grand View Research, 2025; Precedence Research, 2025 via search snippets) |
| SAM | No public data found |
| Traction | GitHub org: 11 followers, 0 stars (GitHub, Apr 2026); 1 active job posting for Founding Engineer (YC job posting) |
| Revenue Signal | No public data found |
| Founders | Andrew Gazelka (Founder): former xAI MTS, co-founded BountyBot (acquired), UMN CS&E, Hyperion (1k GitHub stars) |
| Competitors | E2B ($21M raised, $1.5M revenue Jun 2025, Firecracker microVMs); Daytona ($24M raised, $1M forward ARR, open-source/self-hosted); Modal ($87M raised, $1.1B valuation, serverless GPU compute); Blaxel ($7.3M raised, revenue unknown, 25ms cold start); Fly.io Sprites (parent-funded, persistent NVMe checkpoint/restore) |
| Moat Signals | Custom VMM on KVM, modified Linux 6.19 kernel, content-addressable storage with cross-tenant dedup (YC job posting) |
| Risk Factors | Capitalization gap vs. funded competitors, custom kernel maintenance burden at 3-person scale, market consolidation with E2B at 88% Fortune 100 adoption |
| Founder Reach | Andrew Gazelka: Twitter @andrewgazelka (count not retrievable), LinkedIn in/andrewgazelka (count not retrievable), GitHub 195 followers + 1k stars on Hyperion (GitHub, Apr 2026) |
| Distribution Signals | No public data found |
| Emails | andrew@ix.dev (GitHub bio) |
