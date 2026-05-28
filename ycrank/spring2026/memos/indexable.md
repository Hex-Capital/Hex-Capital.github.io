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
| YC Partner | Pete Koomen (YC company page) |
| Emails | andrew@ix.dev (GitHub bio pattern "{first}@ix.dev", github.com/andrewgazelka) |

## The Idea

- **Problem:** AI coding agents need isolated execution environments where they can run code, mutate files/processes/memory/databases, and roll back failed attempts, but existing container-based sandboxes either lose state on reset or take seconds to spin up (YC company page).
- **Approach:** Custom KVM-based hypervisor that forks a running sandbox in milliseconds, paired with a content-addressable storage engine using tiered caching and cross-tenant deduplication for full-environment snapshots across files, processes, memory, and databases (search snippet, e2b.dev/blog/yc-companies-ai-agents).
- **Differentiation:** vs. E2B (Firecracker microVM, no in-memory fork primitive per E2B docs) and Daytona (Docker-container based, sub-90ms create per Northflank comparison Apr 2026) — Indexable forks running state including process memory and DB state, not just filesystem (YC description + competitor sources).
- **Business Model:** [Inferred]: Usage-based per-sandbox-second pricing analogous to E2B's ~$0.05/hr per vCPU and Daytona's ~$0.067/hr (Modal blog 2026); no public pricing page found at ix.dev.
- **TAM/SAM:** No public TAM/SAM data found for the AI-agent sandbox segment; adjacent reference point — E2B serves "roughly half of the Fortune 500" per VentureBeat coverage of its Jul 2025 $21M Series A.
- **GTM / Distribution:** [Inferred]: Bottom-up developer adoption via SDK + public docs (indexable-inc/docs repo on GitHub) and founder distribution on X (@andrewgazelka) and r/rust (founder bio cites "#1 r/rust for 24 hours", github.com/andrewgazelka).

## Defensibility

- **Moat today:** Technical complexity — custom KVM-fork hypervisor and content-addressable storage with cross-tenant dedup require systems/virtualization expertise (search snippet, e2b.dev/blog/yc-companies-ai-agents); founder is ex-xAI with Rust/high-performance-systems background (YC company page).
- **Future moat:** [Inferred]: Switching costs from agent runtimes binding to Indexable's fork/snapshot API surface; unproven now because there is no public customer count or SDK adoption metric.
- **Market structure:** [Inferred]: No structural barrier preventing incumbents — Modal ($466M raised total, Tech Startups May 2026), E2B ($32M total, VentureBeat), and Daytona ($24M Series A Feb 2026, Northflank) all operate in the same sandbox-for-agents category and could add in-memory fork primitives.
- **Commoditization risk:** Multiple well-funded sandbox vendors already exist (E2B, Modal, Daytona, CodeSandbox SDK via Together AI, Northflank, Runloop, Vercel Sandbox per Modal Blog 2026); KVM-based hypervisor forking is technically reproducible by teams with virtualization expertise.

## Market & Traction

- **Traction signals:**
  - GitHub org indexable-inc: `index` repo 11 stars, `docs` repo 11 stars (github.com/andrewgazelka, May 2026).
  - Founder GitHub: 202 followers (github.com/andrewgazelka, May 2026).
  - Hyperion Minecraft engine (founder personal repo, pre-Indexable): 1k stars (github.com/andrewgazelka).
  - Active hiring: Founding Engineer (AI-first), SF, $150K–$175K, 0.75%–1.50% equity (YC jobs page).
  - Crunchbase profile exists ("Ix" / indexable-3d17) but no funding round disclosed (crunchbase.com).
  - No public revenue, customer logos, press coverage, Product Hunt rank, Discord size, or LinkedIn follower count found.
- **Competitors:**
  - E2B ($32M total raised including $21M Series A Jul 2025 led by Insight Partners, revenue unknown; Firecracker microVM, used by ~half of Fortune 500 per VentureBeat) — broader incumbent without in-memory fork primitive.
  - Modal ($466M total raised, $355M Series C at $4.65B valuation May 2026 led by General Catalyst/Redpoint per Tech Startups, revenue unknown publicly) — only platform with GPU-attached sandboxes per Modal blog.
  - Daytona ($24M Series A Feb 2026 per superagent.sh/blog, revenue unknown) — Docker-container sandboxes with sub-90ms create, pivoted from dev environments to agents in early 2025.
  - CodeSandbox SDK (acquired by Together AI, funding/revenue not separately disclosed per Modal blog 2026) — snapshot-backed hibernation and fast resume.
  - Runloop / Northflank / Vercel Sandbox (funding varies, revenue unknown; Modal Blog 2026) — adjacent code-execution sandboxes.
- **Why now:** [Inferred]: Coding-agent runtimes (Claude Code, Codex, Devin) reached production usage in 2024–2025, driving demand for agent-specific sandbox primitives — same catalyst cited by E2B in Jul 2025 Series A coverage (VentureBeat) and Daytona's pivot to agent infra in early 2025 (Northflank Apr 2026).

## Founders & Team

- **Andrew Gazelka (Founder):**
  - Background: Former engineer at xAI specializing in high-performance systems and Rust (YC company page); University of Minnesota Department of Computer Science and Engineering (ResearchGate profile); search snippet states he previously cofounded BountyBot, which was acquired (per ""Andrew Gazelka" BountyBot acquired" search results via search snippet — acquisition details not independently verified).
  - Twitter/X: @andrewgazelka (x.com/andrewgazelka); follower count not retrievable (WebFetch returned 402).
  - LinkedIn: "Andrew Gazelka - xAI" (linkedin.com/in/andrewgazelka).
  - GitHub: @andrewgazelka, 202 followers; contributor to nushell/nushell (39.6k stars, not owner); top owned repo hyperion-mc/hyperion (1k stars, Minecraft engine) (github.com/andrewgazelka).
- **Other team:** YC lists team size 3, but only Andrew Gazelka is named on the YC company page; the other two members are not publicly identified on YC, GitHub indexable-inc org, or website (per Phase 1 fetches and Phase 2 searches).
- **Co-founder relationship:** No public data on co-founder history (other founders unnamed).
- **Founder-market fit:** Sandbox infrastructure requires hypervisor/Rust/systems expertise; founder's xAI tenure and Rust profile (#1 r/rust for 24 hours per founder GitHub bio) plus prior Minecraft game-engine work (hyperion, 1k stars) align with the low-level virtualization stack Indexable is building (YC company page + github.com/andrewgazelka).

## Key Risks

- **Capital/scale gap vs. funded incumbents:** Modal ($466M total raised, Tech Startups May 2026), E2B ($32M total, VentureBeat Jul 2025), and Daytona ($24M Feb 2026, superagent.sh) are already operating with paying enterprise customers; Indexable has no disclosed funding beyond YC standard deal and no public customer count. No mitigation found.
- **Technical feasibility of in-memory fork at production latency:** Forking a running VM including process memory and DB state in milliseconds across multi-tenant infra is the core technical claim (e2b.dev/blog/yc-companies-ai-agents); no public benchmark, customer reference, or third-party validation exists yet.
- **Single named founder:** Only Andrew Gazelka is publicly named despite a 3-person team (YC company page); other technical co-founders unverified, making domain-expertise coverage hard to assess externally.
- **Commoditization by adjacent platforms:** Modal raised $355M in May 2026 partly to expand agent infrastructure (Tech Startups); E2B already powers Hugging Face, Perplexity, Groq, Manus (VentureBeat) — these platforms can add fork/snapshot primitives.
- **Name disambiguation risk:** "Indexable", "ix", and "Index" surface multiple unrelated companies (Index.dev engineering marketplace, Index.app per Crunchbase) which complicates search-based discovery and SEO/GTM.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | indexable-inc/index 11 GitHub stars, indexable-inc/docs 11 stars (github.com/andrewgazelka, May 2026); founder GitHub 202 followers (github.com/andrewgazelka, May 2026); 1 active job posting Founding Engineer $150–175K / 0.75–1.50% equity (YC jobs page) |
| Revenue Signal | No public data found (no pricing page accessible at ix.dev; WebFetch returned only "ix") |
| Founders | Andrew Gazelka (Founder): ex-xAI engineer, Rust/high-performance systems, University of Minnesota CS, prior BountyBot cofounder per search snippet (YC company page, ResearchGate). Two additional team members unnamed publicly. |
| Competitors | E2B ($32M total raised, revenue unknown, Firecracker microVM without in-memory fork — VentureBeat Jul 2025); Modal ($466M total raised, revenue unknown, GPU-attached sandboxes — Tech Startups May 2026); Daytona ($24M Series A Feb 2026, revenue unknown, Docker-container sub-90ms — superagent.sh); CodeSandbox SDK (acquired by Together AI, funding undisclosed, snapshot hibernation — Modal Blog 2026); Runloop/Northflank/Vercel Sandbox (funding varies, revenue unknown — Modal Blog 2026) |
| Moat Signals | Custom KVM-based hypervisor with millisecond running-sandbox fork + content-addressable storage with cross-tenant dedup (e2b.dev/blog/yc-companies-ai-agents search snippet) |
| Risk Factors | Capital gap vs. funded incumbents, unverified production-scale fork latency, single publicly-named founder, commoditization by Modal/E2B/Daytona |
| Founder Reach | Andrew Gazelka: Twitter @andrewgazelka count not retrievable, LinkedIn headline "Andrew Gazelka - xAI", GitHub 202 followers / top owned repo hyperion 1k stars (github.com/andrewgazelka) |
| Distribution Signals | No public data found (no Product Hunt listing, no Chrome extension, no app store presence identified) |
| Emails | andrew@ix.dev (inferred from GitHub bio pattern "{first}@ix.dev", github.com/andrewgazelka) |
