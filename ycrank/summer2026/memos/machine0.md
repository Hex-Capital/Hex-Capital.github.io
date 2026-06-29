# machine0

> Persistent & powerful cloud VMs from your CLI

| Field | Value |
|-------|-------|
| Website | https://machine0.io |
| YC Page | https://www.ycombinator.com/companies/machine0 |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Cloud Computing |
| YC Partner | Brad Flora |
| Emails | No public data found |

## The Idea

- **Problem:** AI coding agents (Claude Code, Codex) and autonomous agents (OpenClaw, Hermes) increasingly run 4–8 hour or 24/7 sessions, exceeding the lifespan of ephemeral sandboxes commonly used today (YC company page, machine0.io).
- **Approach:** A CLI (`machine0 new my-vm`) provisions persistent NixOS/Ubuntu KVM/QEMU VMs with dedicated CPU/RAM, optional GPUs (H100, H200, L40S, MI300X), static IPs, HTTPS endpoints, suspend/resume, snapshotting, and a remote MCP server, with agent runtimes pre-installed (machine0.io).
- **Differentiation:** vs. E2B / Daytona / Vercel Sandbox / Cloudflare Sandbox SDK — those are ephemeral microVM sandboxes for code execution; machine0 markets persistent VMs that survive between sessions with static IPs and 99.99% SLA (machine0.io; Blaxel blog, 2026). vs. Fly.io Sprites — Sprites launched Jan 2026 as persistent agent VMs (~1–2s creation, 300ms checkpoint) and overlap directly with machine0's pitch (Blaxel blog, 2026).
- **Business Model:** Per-minute consumption pricing from $0.013/hr (small: 1 vCPU/1GB/25GB) to $3.714/hr (6xl: 60 vCPU/240GB), suspended-VM storage at $0.078/GB/mo, $5 minimum top-up (machine0.io pricing page).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; the broader AI agent sandbox category lists 19+ named providers in 2026 (Better Stack, 2026; AgentMarketCap, Apr 2026).
- **GTM / Distribution:** [Inferred]: Developer-led bottom-up via CLI, Show HN launch (Hacker News item 48543245), and Twitter — consistent with the solo founder, CLI-first product, and lack of sales hires.

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond the YC brand ("Backed by Y Combinator," machine0.io).
- **Future moat:** [Inferred]: Switching costs from persistent VM state (long-lived filesystems, snapshots, static IPs) could create stickiness once agents are deployed continuously; unproven because the product is at launch with a solo founder and no published customer count.
- **Market structure:** No structural barrier identified at this stage — Fly.io (Sprites), Cloudflare, Vercel, AWS AgentCore, and Google Agent Sandbox have all shipped overlapping persistent or sandbox VM products in 2026 (AgentMarketCap, Apr 2026).
- **Commoditization risk:** [Inferred]: Any infrastructure provider with a KVM/Firecracker fleet can add persistence + a CLI; the category already has 19+ named entrants including hyperscalers (Better Stack, 2026).

## Market & Traction

- **Traction signals:**
  - Show HN post live on Hacker News (item 48543245, Hacker News, 2026) — exact points/comments not retrievable due to fetch failure.
  - Backed by Y Combinator S26 (YC company page).
  - 99.99% uptime SLA claim across 4 regions: US, UK, EU, Asia (machine0.io).
  - Company Twitter/X: @machine__0 — follower count not retrievable.
  - Company LinkedIn page present at linkedin.com/company/machine0 — follower count not retrievable.
  - No public revenue, paying customer count, Product Hunt launch, or press coverage found.
- **Competitors:**
  - **E2B** ($35M raised total, $21M Series A Jul 2025 led by Insight Partners; revenue unknown, claims 88% of Fortune 100 signed up — E2B blog, Jul 2025; Crunchbase): Ephemeral Firecracker microVM sandboxes for code execution, not persistent VMs.
  - **Modal Labs** ($466M raised, $355M Series C at $4.65B valuation May 2026 led by General Catalyst/Redpoint; revenue unknown — TechCrunch, Feb 2026; Modal blog): Containerized execution for ML/inference workloads at scale, not CLI-driven persistent VMs.
  - **Daytona** ($24M Series A Feb 2026; revenue unknown — Blaxel blog, 2026): Sub-90ms sandbox creation for AI agents after pivoting from dev environments early 2025.
  - **Fly.io (Sprites)** (Fly.io total funding ~$95M historic; revenue unknown — AgentMarketCap, Apr 2026): Persistent Linux VMs created in 1–2s, 300ms checkpoint/restore, 100GB NVMe filesystem — closest direct overlap with machine0's persistent-VM positioning.
  - **Vercel Sandbox / Cloudflare Sandbox SDK / AWS AgentCore / Google Agent Sandbox** (hyperscaler-backed, revenue unknown — AgentMarketCap, Apr 2026): Bundled into platforms developers already pay for.
- **Why now:** [Inferred]: Persistent agent workloads (Claude Code multi-hour sessions, 24/7 autonomous agents) crossed practical thresholds in late 2025–2026, prompting Fly.io to ship Sprites in Jan 2026 and Daytona to pivot to agent infrastructure (Blaxel blog, 2026; AgentMarketCap, Apr 2026).

## Founders & Team

- **Barnaby Malet (Founder, solo):**
  - Background: MEng in Artificial Intelligence (First Class Honours) and PhD in Cloud Computing from Imperial College London; co-founder & CTPO of Upflow (YC W20) 2018–2025, B2B cash collection raising $22.9M total / $15M Series A Jun 2021 with customers Lattice, Front, Adikteev (Crunchbase; Upflow blog, Jun 2021; Hexa/Medium, 2021); prior engineering at Apple and Morgan Stanley, Senior PM at Hike Messenger, co-founder of Mechio (LinkedIn; getprog.ai profile).
  - Twitter/X: @barnabymalet (also @machine__0 for company) — count not retrievable.
  - LinkedIn: "machine0" (linkedin.com/in/barnabymalet/) — count not retrievable.
  - GitHub: @barnaby (github.com/barnaby) — top repo / star count not retrievable from search snippets.
- **Co-founder relationship:** Solo founder; no co-founders on YC page.
- **Founder-market fit:** Founder holds a PhD in Cloud Computing and an AI MEng from Imperial College London and is a 2x YC founder (W20 Upflow, S26 machine0), giving documented background in both the technical domain (cloud infrastructure) and the YC operating model (Crunchbase; YC company page).

## Key Risks

- **Direct hyperscaler and incumbent overlap:** Fly.io Sprites (Jan 2026), Vercel Sandbox, Cloudflare Sandbox SDK, AWS AgentCore, Google Agent Sandbox, E2B ($35M, Fortune 100 traction), Modal ($466M, $4.65B valuation), and Daytona ($24M Series A Feb 2026) all target persistent or sandbox VMs for AI agents (AgentMarketCap, Apr 2026; E2B blog, Jul 2025; TechCrunch, Feb 2026). No mitigation surfaced in public sources.
- **Solo founder execution against well-funded category:** Team size is 1 per YC page versus competitors with $24M–$466M raised, creating capacity asymmetry on shipping regions, GPU supply, and enterprise sales. [Inferred]: Mitigation may come from YC funding not yet announced publicly.
- **Technical/operational feasibility of 99.99% SLA at solo-founder scale:** machine0.io advertises 99.99% uptime across four regions (US, UK, EU, Asia); sustaining four-region 99.99% (≈52 min downtime/year) typically requires 24/7 on-call coverage not feasible for a one-person team. No mitigation found.
- **No public revenue, customer logos, or community signals:** No press, Product Hunt rank, Discord/Slack community, or named customers were found beyond the Show HN post (Hacker News item 48543245).
- **Name disambiguation / brand discoverability:** "machine0" is a low-entropy string; Twitter handle is the double-underscore "@machine__0," and the corporate entity is "Fundamental Software" (machine0.io footer), which fragments brand surface area.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Show HN launched (Hacker News item 48543245, 2026); YC S26 backing (YC page); 99.99% SLA across 4 regions claimed (machine0.io); Twitter @machine__0 and LinkedIn /company/machine0 active, counts not retrievable |
| Revenue Signal | Per-minute pricing $0.013/hr (small) to $3.714/hr (6xl), $0.078/GB/mo suspended storage, $5 minimum top-up (machine0.io pricing page) |
| Founders | Barnaby Malet (Founder): MEng AI + PhD Cloud Computing Imperial College London; co-founder/CTPO Upflow YC W20 ($22.9M raised); ex-Apple, ex-Morgan Stanley (Crunchbase; LinkedIn) |
| Competitors | E2B ($35M raised, revenue unknown, ephemeral Firecracker sandbox vs. persistent VM); Modal Labs ($466M raised, revenue unknown, ML/inference scale-out vs. persistent CLI VM); Daytona ($24M Series A Feb 2026, revenue unknown, sub-90ms sandbox vs. persistent VM); Fly.io Sprites (Fly.io ~$95M historic, revenue unknown, closest direct overlap on persistence) |
| Moat Signals | No public data found |
| Risk Factors | Direct hyperscaler/incumbent overlap, solo-founder capacity vs. funded competitors, 99.99% four-region SLA feasibility |
| Founder Reach | Barnaby Malet: Twitter @barnabymalet count not retrievable, LinkedIn /in/barnabymalet count not retrievable, GitHub @barnaby stars not retrievable |
| Distribution Signals | Show HN post (Hacker News item 48543245, 2026); YC S26 directory listing (ycombinator.com/companies/machine0) |
| Emails | No public data found |

Sources:
- [machine0 on Y Combinator](https://www.ycombinator.com/companies/machine0)
- [machine0.io](https://machine0.io)
- [Show HN: machine0 – Persistent NixOS VMs You Control from the CLI](https://news.ycombinator.com/item?id=48543245)
- [E2B Series A blog](https://e2b.dev/blog/series-a)
- [E2B Crunchbase profile](https://www.crunchbase.com/organization/e2b-1c91)
- [Modal Labs Series B announcement](https://modal.com/blog/announcing-our-series-b)
- [TechCrunch — Modal Labs $2.5B talks (Feb 2026)](https://techcrunch.com/2026/02/11/ai-inference-startup-modal-labs-in-talks-to-raise-at-2-5b-valuation-sources-say/)
- [AI Agent Sandbox Infrastructure 2026 — AgentMarketCap](https://agentmarketcap.ai/blog/2026/04/07/ai-agent-sandbox-infrastructure-e2b-modal-daytona-fly-machines-secure-code-execution)
- [11 Best Sandbox Runners in 2026 — Better Stack](https://betterstack.com/community/comparisons/best-sandbox-runners/)
- [E2B Alternatives — Blaxel Blog](https://blaxel.ai/blog/e2b-alternatives-sandbox-environments)
- [Upflow $15M Series A — Upflow blog](https://upflow.io/blog/inside-upflow/upflow-raises-15-million)
- [Barnaby Malet Crunchbase profile](https://www.crunchbase.com/person/barnaby-malet)
- [Barnaby Malet personal site](https://barna.by/)
- [Barnaby Malet GitHub](https://github.com/barnaby)
- [Barnaby Malet LinkedIn](https://www.linkedin.com/in/barnabymalet/)
