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
| Emails | andrew@ix.dev |

## The Idea

**Problem:** AI agents that operate autonomously — writing code, running processes, querying databases — need isolated compute environments (sandboxes) where they can execute safely. Current sandbox solutions are either too slow to fork/snapshot (Fly.io Sprites: ~300ms checkpoint/restore; E2B: ~200ms cold start), lack full state preservation (most solutions snapshot filesystem only, not running processes or in-memory database state), or impose session time limits (E2B: 24-hour max). Teams building agentic applications need the ability to rapidly branch execution mid-stream so agents can explore parallel paths, backtrack, and diff against prior states — capabilities absent from general-purpose cloud compute.

**Approach:** Indexable (product name: "ix") provides a custom virtual machine monitor (VMM) built on KVM that can fork a running sandbox — including files, processes, memory, and databases — in 26 milliseconds (ix.dev). Every mutation creates a version-control-style commit; branches point to the tip and advance as work proceeds, and users can diff against any prior state (ix.dev). Idle branches cost nearly nothing because memory is reclaimed when inactive and storage is deduplicated across forks (ix.dev). The system autoscales up to 3 TB RAM, 384 vCPUs, and 1 PB storage on EPYC Zen 5 CPUs with DDR5 ECC memory, NVMe PCIe5 (12 GB/s), and 25 Gbps networking (ix.dev). SDKs are available for Python, TypeScript, Rust, Swift, and shell (ix.dev). The underlying stack includes a content-addressable storage engine with tiered caching and cross-tenant deduplication, a libfabric transport layer, guest filesystems backed by content-addressable storage, a custom Nix fork ("snix") written in Rust for reproducible builds, and a customized Linux 6.19 kernel (YC job posting).

**Differentiation:** Versus **E2B** (market leader, $43.8M raised): E2B uses Firecracker microVMs optimized for ephemeral execution with ~200ms cold starts and no mid-execution forking/snapshotting of full state (E2B pricing page; SiliconANGLE, Jul 2025 via search snippet). Versus **Daytona** ($31M raised): Daytona offers fork-and-snapshot capabilities but uses Docker/OCI containers (~90ms cold start) rather than a custom VMM, providing a weaker isolation model and ~3x slower forking (PR Newswire, Feb 2026 via search snippet). Versus **Blaxel** ($7.3M seed, YC Spring 2025): Blaxel claims <25ms resume from standby but emphasizes resume-from-standby rather than arbitrary mid-execution forking (Blaxel blog via search snippet). Indexable's combination of sub-30ms forking across the full state surface (files + processes + memory + databases) with version-control semantics appears unique in the current landscape.

**Business Model:** The ix.dev website states "pay for what you use" but does not list specific dollar amounts (ix.dev). No pricing tiers or per-unit rates are publicly visible. [Inferred]: Most likely monetization path is consumption-based pricing (per vCPU-hour + memory + storage), consistent with the competitive landscape where E2B charges ~$0.05/hr per vCPU and Daytona charges $0.067/hr per vCPU.

**TAM/SAM:** The global agentic AI market was valued at $7.55B in 2025 with a 44.3% CAGR to $199B by 2034 (Precedence Research, 2025 via search snippet). The AI agents market was estimated at $7.84B in 2025, projected to reach $52.6B by 2030 at a 46.3% CAGR (MarketsandMarkets, 2025 via search snippet). The general sandboxing market was $3.5B in 2024 with a 13.2% CAGR to $12.1B by 2034 (MarketsandMarkets, 2024 via search snippet). 62% of agentic AI deployments are cloud-based (Precedence Research, 2024 via search snippet). [Inferred]: If sandbox infrastructure represents 5-10% of the broader agentic AI infrastructure spend, the serviceable market is approximately $375M-$750M in 2025, growing to $5-10B by 2030.

**GTM / Distribution:** The ix.dev website offers a "schedule a call" link (via Fantastical: fantastical.app/andrewgazelka/hi) and a "notify me" signup, suggesting a waitlist/early-access go-to-market motion (ix.dev). The site is available in English, Japanese, Chinese, and Korean, indicating international ambitions (ix.dev). A Discord community exists (discord.gg/2BuDX9WkJs, linked from ix.dev). The company is hiring a Founding Engineer with AI-agent tool familiarity (Claude Code, Codex, GPT-3 mentioned in the job posting) (YC jobs page). [Inferred]: Most likely distribution path is developer-led bottom-up adoption through SDK integrations and documentation, converting to enterprise contracts — consistent with the E2B and Daytona playbooks.

## Defensibility

**Technical complexity:** The custom VMM built on KVM with sub-30ms full-state forking, a content-addressable storage engine, libfabric transport layer, custom Nix fork ("snix"), and a customized Linux 6.19 kernel represent deep systems engineering work (YC job posting). This is not trivially replicable — it requires expertise at the intersection of virtualization, operating systems, storage systems, and networking.

**Switching costs:** Once developers integrate Indexable's SDKs and build workflows around fork/snapshot/diff semantics, migrating to a competitor would require re-architecting agent orchestration logic. Version-control-style commits on environment state create data gravity.

**No network effects or data advantages are evident at this stage from public sources.**

**Market structure:** E2B, the incumbent leader, is built on Firecracker microVMs — a fundamentally different architecture from Indexable's custom VMM. Adding sub-30ms full-state forking to a Firecracker-based system would likely require E2B to rebuild core infrastructure rather than add an incremental feature. Daytona's container-based architecture faces similar constraints in matching VM-level isolation with fork speed. Platform players (Vercel, Modal, Fly.io) treat sandboxing as a feature within broader platforms, creating business model misalignment with building a best-in-class standalone sandbox product. However, these structural barriers are based on current architectural choices and could erode if competitors invest in custom VMM technology.

**Commoditization risk:** Google's open-source Agent Sandbox (Kubernetes-native, launched at KubeCon NA, November 2025) could commoditize basic sandbox functionality for self-hosted K8s deployments (Google Cloud Blog via search snippet). The agent-infra/sandbox open-source project provides a free all-in-one Docker-based sandbox (GitHub). However, neither offers the performance characteristics (sub-30ms forking) or full-state preservation that Indexable targets. The core risk is that E2B or Daytona, with significantly more funding and customers, invest in closing the performance gap.

## Market & Traction

**Traction signals:**
- No public revenue, user counts, or growth metrics found.
- Company Twitter/X: @indexablehq (YC page). Follower count not retrievable.
- Founder Twitter/X: @andrewgazelka — ~86 followers (search snippet, may be outdated).
- GitHub organization: github.com/indexable-inc — no public repositories (GitHub).
- Discord community: exists, linked from ix.dev (discord.gg/2BuDX9WkJs). Member count not retrievable.
- LinkedIn: linkedin.com/company/indexable — minimal public-facing content (LinkedIn via search snippet).
- Job posting: 1 open role — Founding Engineer (AI-first), $150K-$175K + 0.75%-1.50% equity, San Francisco (YC jobs page).
- No Product Hunt listing found.
- No press coverage found.
- Website available in 4 languages: English, Japanese, Chinese, Korean (ix.dev).

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Indexable |
|-----------|---------|-------------|----------------------------------|
| **E2B** | $43.8M total ($21M Series A, Jul 2025, Insight Partners) (SiliconANGLE via search snippet) | >$12M ARR implied by "seven-figure monthly revenue"; 500M+ sandbox sessions (VentureBeat via search snippet) | Market leader with 88% Fortune 100 adoption; ephemeral Firecracker microVMs; ~200ms cold start; no mid-execution forking |
| **Daytona** | $31M total ($24M Series A, Feb 2026, FirstMark Capital) (PR Newswire via search snippet) | ~$2M+ ARR trajectory (AlleyWatch via search snippet) | Most direct competitor with fork/snapshot capabilities; container-based (~90ms); weaker isolation model |
| **Blaxel** | $7.3M seed (First Round Capital, YC S25) (Blaxel blog via search snippet) | No public data found | <25ms resume from perpetual standby; co-located agent APIs; no arbitrary mid-execution forking |
| **Modal Labs** | $87M Series B at $1.1B valuation (Sep 2025); in talks at $2.5B (Feb 2026) (TechCrunch via search snippet) | No public data found | Broad serverless compute platform; sub-second cold starts; 50,000+ concurrent scale; not sandbox-specific |
| **Fly.io Sprites** | ~$120M+ total (various rounds) (SDxCentral via search snippet) | No public data found | Persistent VMs for coding agents; ~300ms checkpoint/restore; persistent 100GB NVMe; not optimized for rapid forking |

**Why now:** [Inferred]: The enabling catalyst is the rapid proliferation of autonomous AI agents in production environments throughout 2025-2026. E2B crossing 500M+ sandbox sessions and reaching 88% of the Fortune 100 (VentureBeat via search snippet) demonstrates that sandbox infrastructure has become a required primitive, not an optional add-on. The shift from single-turn LLM calls to multi-step agentic workflows that run code, manage state, and explore parallel execution paths creates demand for forking and snapshotting capabilities that ephemeral sandbox solutions were not designed for. Additionally, the maturation of AI coding assistants (Claude Code, Codex) has created a specific use case for persistent, forkable development environments.

## Founders & Team

**Andrew Gazelka** — Founder
- University of Minnesota, Department of Computer Science and Engineering (ResearchGate profile).
- Previously: Engineer at xAI; contributor/engineer at Speechify; co-founder of BountyBot (acquired — acquirer and date not publicly documented) (X bio via search snippet).
- Created **Hyperion** (github.com/hyperion-mc/hyperion), a Minecraft game engine targeting 10,000-170,000+ concurrent players in a single world, with the goal of breaking the Guinness World Record for largest multiplayer PvP battle. Hyperion processes 1,000 players in 455.53 microseconds on 12 cores (GitHub README). Covered by PC Games N ("Groundbreaking Minecraft mod lets 100,000 players join...") (PC Games N via search snippet).
- Technical expertise: high-performance systems, Rust, ECS architectures, virtualization (KVM/VMM), networking, content-addressable storage.
- Blog posts include "The Dawn of 100,000-Player Minecraft PvP" (Jul 2024) and "GPT4 as a Hardware Abstraction Layer" (Apr 2023) (andrewgazelka.github.io).
- Twitter/X: @andrewgazelka — ~86 followers (search snippet, may be outdated). Joined October 2025. Bio references ix.dev, ex-xAI, ex-Speechify, BountyBot co-founder (acquired).
- LinkedIn: No public profile found.
- GitHub: github.com/andrewgazelka — 176 followers, 217 public repos, ~2.5k total stars received (GitHub). Pinned repos: Hyperion (1k stars), SwarmBot (98 stars, archived), smart-cache (17 stars). Contributor to nushell (38.7k stars). Arctic Code Vault Contributor, Starstruck x3 (GitHub).

The YC page lists only Andrew Gazelka as founder. Team size is 3, suggesting two additional team members whose identities are not publicly documented.

**Co-founder relationship:** Only one founder is listed. No co-founder relationship data applicable.

**Founder-market fit:** Andrew Gazelka's background demonstrates deep expertise in exactly the technical domains required: high-performance systems programming in Rust, building infrastructure that handles massive concurrent state (Hyperion's 170,000-player target), and low-level systems work (custom VMMs, KVM, Linux kernel). His experience at xAI provides exposure to production AI agent infrastructure needs. The Hyperion project specifically required solving problems of state management, snapshotting, and performance optimization at scale — directly transferable to sandbox infrastructure for AI agents.

## Key Risks

**E2B incumbency and ecosystem lock-in:** E2B has 88% of Fortune 100 as customers, >$12M ARR, 500M+ sandbox sessions, and 2M+ monthly SDK downloads (VentureBeat, Jul 2025 via search snippet). Developers building on E2B's SDK face switching costs. If E2B adds forking/snapshotting features (even at slower speeds), many customers may accept the performance tradeoff to avoid migration. Mitigation: Indexable's custom VMM architecture may offer performance characteristics that are architecturally infeasible on Firecracker.

**Daytona's direct feature overlap and funding advantage:** Daytona offers fork-and-snapshot capabilities — the same core value proposition — with $31M in funding and $2M+ ARR trajectory (PR Newswire, Feb 2026; AlleyWatch via search snippets). While Indexable claims faster forking (26ms vs. ~90ms), Daytona has a 12+ month head start in market development and enterprise relationships. Mitigation: Indexable's VM-level isolation (vs. Daytona's containers) may be required for security-sensitive enterprise use cases.

**Solo founder with deep technical but limited commercial background:** Andrew Gazelka's public profile is heavily technical (systems engineering, Rust, game engines) with no visible experience in enterprise sales, go-to-market, or business development. For an infrastructure product targeting enterprise buyers, commercial leadership is typically critical. The team of 3 with one open engineering hire suggests the near-term focus is purely technical. Mitigation: YC network and Pete Koomen as group partner provide commercial mentorship; commercial hires may follow.

**Platform subsumption risk:** Modal Labs ($1.1B+ valuation, in talks at $2.5B), Vercel ($3.5B valuation), and Fly.io (~$120M+ raised) all offer sandbox capabilities as features within broader platforms (TechCrunch, Feb 2026; SDxCentral via search snippets). If any of these platforms adds fast forking/snapshotting as a feature, Indexable would need to compete against bundled offerings with established developer bases. Google's open-source Agent Sandbox for Kubernetes further commoditizes the base layer (Google Cloud Blog via search snippet).

**Brand disambiguation:** "Indexable" is a common English word in software engineering (database indexing, SEO). Index.dev is a separate tech recruitment platform with its own Product Hunt presence. This creates search-engine and brand confusion that could impede organic discovery and content marketing.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Agentic AI: $7.55B in 2025, 44.3% CAGR to $199B by 2034 (Precedence Research, 2025 via search snippet); AI Agents: $7.84B in 2025, 46.3% CAGR to $52.6B by 2030 (MarketsandMarkets, 2025 via search snippet); General Sandboxing: $3.5B in 2024, 13.2% CAGR (MarketsandMarkets, 2024 via search snippet) |
| SAM | [Inferred]: $375M-$750M in 2025 if sandbox infrastructure is 5-10% of agentic AI spend |
| Traction | No public user counts, revenue, or growth metrics found. 1 open job posting (YC jobs page). Discord community exists (ix.dev). Website in 4 languages (ix.dev). |
| Revenue Signal | "Pay for what you use" model stated; no specific pricing published (ix.dev) |
| Founders | Andrew Gazelka (Founder): ex-xAI, ex-Speechify, BountyBot co-founder (acquired), UMN CS&E, Hyperion creator (1k GitHub stars) |
| Competitors | E2B ($43.8M raised, >$12M ARR implied, market leader with 88% Fortune 100); Daytona ($31M raised, ~$2M+ ARR trajectory, direct fork/snapshot competitor); Blaxel ($7.3M raised, revenue unknown, <25ms resume from standby); Modal Labs ($87M+ raised at $1.1B+, revenue unknown, broad serverless platform); Fly.io Sprites (~$120M+ raised, revenue unknown, persistent VMs for coding agents) |
| Moat Signals | Custom VMM on KVM with sub-30ms full-state forking; content-addressable storage engine; customized Linux 6.19 kernel; deep systems engineering complexity |
| Risk Factors | E2B incumbency and ecosystem lock-in; Daytona direct feature overlap with $31M funding; platform subsumption by Modal/Vercel/Fly.io; brand disambiguation with common word |
| Founder Reach | Andrew Gazelka: Twitter/X ~86 followers (search snippet), LinkedIn not found, GitHub 176 followers / ~2.5k total stars (GitHub) |
| Distribution Signals | No Product Hunt listing found. No press coverage found. Discord community (member count unknown). Website in 4 languages. |
| Emails | andrew@ix.dev |
