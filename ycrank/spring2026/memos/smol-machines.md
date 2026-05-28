# smol machines

> Ship software faster with portable, self contained virtual machines.

| Field | Value |
|-------|-------|
| Website | https://smolmachines.com/ |
| YC Page | https://www.ycombinator.com/companies/smol-machines |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Cloud Computing, Infrastructure |
| YC Partner | Pete Koomen |
| Emails | No public data found |

## The Idea

- **Problem:** Developers face "works on my machine" deployment inconsistency and need to sandbox untrusted code (including AI agent workloads) without the overhead of full VMs or the weak isolation of containers (smolmachines.com, 2026).
- **Approach:** A CLI tool (`smolvm`) that boots hardware-isolated Linux microVMs in under 200ms via Hypervisor.framework (macOS) and KVM (Linux) using libkrun, and packs stateful VMs into single portable `.smolmachine` files declared by a TOML "Smolfile" (smolmachines.com; GitHub smol-machines/smolvm, 2026).
- **Differentiation:** Versus Docker — provides hardware-isolated VM-per-workload without a daemon, while still accepting OCI images (GitHub README, 2026); versus Firecracker/Cloud Hypervisor — adds container-style packaging and single-file portability rather than orchestration primitives ("VM ergonomics with container packaging," Hacker News thread, Apr 2026); versus E2B/Daytona — local-first CLI rather than hosted sandbox cloud (particula.tech, Apr 2026).
- **Business Model:** [Inferred]: Currently open-source under Apache-2.0 with no pricing page (smolmachines.com, 2026); likely future monetization via a hosted/orchestration tier or enterprise support, by analogy to Docker and HashiCorp OSS-to-commercial paths.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Open-source developer-led distribution evidenced by Show HN launch (499 points, 152 comments, news.ycombinator.com/item?id=47808268, Apr 2026) and GitHub repo growth to 3.4k stars (GitHub, May 2026); [Inferred]: AI-agent sandboxing positioning targets agent frameworks needing per-invocation isolation (particula.tech, Apr 2026).

## Defensibility

- **Moat today:** Technical complexity of building a cross-platform microVM runtime with sub-200ms cold starts on libkrun/Hypervisor.framework/KVM, and a single-file `.smolmachine` packaging format (GitHub smol-machines/smolvm v0.8.0, May 26 2026).
- **Future moat:** [Inferred]: Ecosystem lock-in via the `.smolmachine` file format and Smolfile DSL becoming a de facto standard for portable VM artifacts, contingent on adoption beyond current 3.4k GitHub stars (GitHub, May 2026).
- **Market structure:** [Inferred]: No structural barrier identified at this stage; Apache-2.0 licensing (smolmachines.com, 2026) means incumbents (Docker, AWS Firecracker, Intel/LF Cloud Hypervisor) can fork or absorb concepts without legal constraint.
- **Commoditization risk:** libkrun, Firecracker, and Cloud Hypervisor are open-source primitives any competent systems team can wrap; SmolVM itself is Apache-2.0 (GitHub, 2026), making the core mechanism reproducible.

## Market & Traction

- **Traction signals:**
  - GitHub stars: 3.4k on smol-machines/smolvm, 160 forks (GitHub, May 2026)
  - Latest release: v0.8.0 (GitHub releases, May 26 2026)
  - Show HN: 499 points, 152 comments (news.ycombinator.com/item?id=47808268, ~Apr 2026)
  - Public launch coverage: Founderland, AItoolly, PithWire, particula.tech (April 2026)
  - Launch date: April 17, 2026 (particula.tech, Apr 2026)
  - GitHub org followers: 76 (github.com/smol-machines, May 2026)
  - Revenue/paying customers: No public data found
- **Competitors:**
  - Docker (private, revenue unknown publicly, ~$50M+ ARR historically reported): daemon-based containers without hardware isolation; SmolVM offers per-workload kernel isolation without a daemon (GitHub README, 2026).
  - AWS Firecracker (open-source, no separate funding): serverless microVM VMM lacking single-file packaging or local CLI ergonomics (Northflank, 2026).
  - Cloud Hypervisor (Linux Foundation project, no separate funding): general-purpose lightweight VMM without container-style packaging (Northflank, 2026).
  - E2B ($21M Series A, Insight Partners, revenue unknown): hosted AI-agent sandbox cloud rather than local CLI (e2b.dev/blog/series-a).
  - Daytona ($24M Series A, FirstMark Capital, Feb 2026, revenue unknown): hosted Docker-container-based agent sandboxes with ~90ms creation (PRNewswire, Feb 2026).
- **Why now:** Surge in AI-agent code-execution workloads requires per-invocation hardware isolation that containers do not provide and full VMs are too slow for; competing raises (E2B $21M, Daytona $24M in early 2026) demonstrate the catalyst (e2b.dev, prnewswire.com, 2026).

## Founders & Team

- **BinBin He (Founder / Solo):**
  - Background: B.S. Aerospace Engineering, Illinois Institute of Technology; led "Retrograde maneuver" team building spacecraft trajectory tooling for NASA satellites, reportedly improving mission-planning runtimes up to 10x via Node.js concurrency; prior Software Engineer at Ekta Flow (software consultancy, Chicago); self-describes as a "software engineer working on serverless compute" (binbinsbin.com resume; LinkedIn).
  - Twitter/X: @binsquares (count not retrievable via search)
  - LinkedIn: "Stealth Startup" (linkedin.com/in/binsquare)
  - GitHub: @BinSquare / org @smol-machines; top repo smol-machines/smolvm at 3.4k stars (GitHub, May 2026)
- **Co-founder relationship:** Solo founder per YC page (ycombinator.com/companies/smol-machines, 2026); no co-founder.
- **Founder-market fit:** [Inferred]: Prior serverless-compute and NASA backend systems work (binbinsbin.com resume) aligns with low-level VM/hypervisor systems engineering; no notable advisors, board members, or investors beyond Y Combinator disclosed publicly.

## Key Risks

- **Solo-founder execution risk on systems software:** Team Size is 1 per YC page (ycombinator.com/companies/smol-machines, 2026) while the product is a multi-platform hypervisor-layer runtime competing with teams of dozens at Docker, AWS Firecracker, and Cloud Hypervisor; no co-founder mitigation found.
- **Open-source commoditization / monetization gap:** Apache-2.0 licensed code (smolmachines.com, 2026) with no pricing page or hosted offering disclosed; well-funded hosted competitors E2B ($21M, e2b.dev) and Daytona ($24M, prnewswire.com Feb 2026) already monetize the AI-sandbox workload that SmolVM is positioned for.
- **Platform dependency on libkrun and Hypervisor.framework:** Product relies on libkrun and macOS Hypervisor.framework / Linux KVM (GitHub README, 2026); Windows support is absent, with the founder stating on HN "It's feasible, but I haven't used Windows in a decade" (news.ycombinator.com/item?id=47808268, Apr 2026), constraining the addressable developer base.
- **Security model maturity:** HN commenters raised concerns about libkrun's security boundaries; the team acknowledged gaps and committed to future improvements (news.ycombinator.com/item?id=47808268, Apr 2026), creating risk for enterprise/untrusted-code use cases that are the stated wedge.
- **Docker/Kubernetes interoperability incomplete:** Docker-in-VM support was "being actively worked on" at launch (Hacker News thread, Apr 2026), limiting immediate substitution for Docker-centric workflows.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | GitHub 3.4k stars, 160 forks (GitHub, May 2026); Show HN 499 points / 152 comments (news.ycombinator.com/item?id=47808268, Apr 2026); v0.8.0 released May 26 2026 (GitHub releases); launched Apr 17 2026 (particula.tech); GitHub org 76 followers (github.com/smol-machines) |
| Revenue Signal | No public data found (no pricing page; Apache-2.0 OSS per smolmachines.com, 2026) |
| Founders | BinBin He (Founder): B.S. Aerospace Engineering, Illinois Institute of Technology; NASA satellite trajectory tooling lead; prior SWE at Ekta Flow consultancy. |
| Competitors | Docker (private, revenue unknown, daemon-based containers without hardware-isolation); AWS Firecracker (OSS, no separate funding, microVM VMM lacking packaging); Cloud Hypervisor (Linux Foundation OSS, general-purpose VMM); E2B ($21M Series A Insight Partners, revenue unknown, hosted AI-agent sandbox cloud); Daytona ($24M Series A FirstMark Feb 2026, revenue unknown, hosted Docker-container sandboxes). |
| Moat Signals | Sub-200ms cold-start cross-platform microVM runtime and `.smolmachine` single-file portable artifact format (GitHub smol-machines/smolvm, 2026); Apache-2.0 license limits legal moat (smolmachines.com, 2026). |
| Risk Factors | Solo founder vs. well-funded incumbents; OSS monetization undefined; libkrun security maturity and no Windows support. |
| Founder Reach | BinBin He: Twitter @binsquares (count not retrievable), LinkedIn linkedin.com/in/binsquare "Stealth Startup", GitHub @BinSquare with smol-machines/smolvm 3.4k stars (GitHub, May 2026). |
| Distribution Signals | Show HN 499 points / 152 comments (news.ycombinator.com/item?id=47808268, Apr 2026); Founderland, AItoolly, PithWire, particula.tech launch coverage (Apr 2026); GitHub 3.4k stars (May 2026). |
| Emails | No public data found |

Sources:
- [smol machines on Y Combinator](https://www.ycombinator.com/companies/smol-machines)
- [smolmachines.com](https://smolmachines.com/)
- [GitHub smol-machines/smolvm](https://github.com/smol-machines/smolvm)
- [Show HN: Smol machines (Hacker News)](https://news.ycombinator.com/item?id=47808268)
- [Founderland coverage](https://www.founderland.ai/articles/yc-backed-smol-machines-launches-sub-200ms-virtual-machines-mo5h7byr)
- [AItoolly coverage](https://aitoolly.com/ai-news/article/2026-04-18-smol-machines-launches-portable-virtual-machines-featuring-sub-second-cold-starts-and-cross-platform)
- [particula.tech SmolVM vs Firecracker vs Docker](https://particula.tech/blog/smolvm-vs-firecracker-sandbox-ai-generated-code)
- [BinBin He LinkedIn](https://www.linkedin.com/in/binsquare/)
- [BinSquare GitHub](https://github.com/BinSquare)
- [BinBin's Bin resume](https://www.binbinsbin.com/Resume/2021_resume/)
- [Daytona $24M Series A (PRNewswire)](https://www.prnewswire.com/news-releases/daytona-raises-24m-series-a-to-give-every-agent-a-computer-302680740.html)
- [E2B $21M Series A](https://e2b.dev/blog/series-a)
