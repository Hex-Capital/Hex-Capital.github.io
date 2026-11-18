# Superserve

> Virtual machines for long-running agents

| Field | Value |
|-------|-------|
| Website | https://superserve.ai |
| YC Page | https://www.ycombinator.com/companies/superserve |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/superserve)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Cloud Computing, Infrastructure, AI |
| YC Partner | Max Kolysh ([Y Combinator](https://www.ycombinator.com/companies/superserve)) |
| Emails | founders@superserve.ai for integration inquiries ([Launch YC](https://www.ycombinator.com/launches/WhF-superserve-virtual-machines-for-long-running-agents)), engineering@superserve.ai for technical inquiries ([GitHub](https://github.com/superserve-ai)), support@superserve.ai for startup-credit inquiries ([older Superserve pricing page](https://www.superserve.ai/pricing/), via search snippet), jobs@superserve.ai for recruiting ([Careers](https://www.superserve.ai/careers/)), privacy@superserve.ai for privacy inquiries ([Privacy Policy](https://www.superserve.ai/privacy/)) |

## The Idea

- **Problem:** Coding-agent teams that build sandboxes on EC2 or similar infrastructure must provision isolated environments, preserve files and processes between turns, and manage the cost of idle machines ([Launch YC](https://www.ycombinator.com/launches/WhF-superserve-virtual-machines-for-long-running-agents), Nov 2026).
- **Approach:** Each session runs in a Firecracker microVM that can pause, resume, or fork with its memory and disk state intact, while network policies and managed credentials are enforced outside the guest ([Superserve](https://www.superserve.ai/), Nov 2026).
- **Differentiation:** AI Sandbox Bench measured median snapshot starts of 0.56 seconds for Superserve, 0.75 for E2B, 0.98 for Modal, and 2.6 for Daytona ([AI Sandbox Bench](https://aisandboxbench.com/), Oct–Nov 2026).
- **Business Model:** Superserve offers a free trial, $20/month Developer and $250/month Pro plans with matching usage credits, and custom Enterprise pricing, with per-second active compute and memory billing plus retained-storage charges ([Superserve pricing](https://www.superserve.ai/pricing/), Nov 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Superserve offers self-serve onboarding through its console, SDKs, and CLI, plus workload benchmarking and integration calls for teams, and Anthropic lists it as a Claude Managed Agents sandbox provider ([Superserve](https://www.superserve.ai/), [Launch YC](https://www.ycombinator.com/launches/WhF-superserve-virtual-machines-for-long-running-agents), [Anthropic docs](https://platform.claude.com/docs/en/managed-agents/self-hosted-sandboxes), Nov 2026).

## Defensibility

- **Moat today:** Superserve’s Firecracker fork uses a copy-on-write storage engine so sandboxes share a base template while retaining separate changes, and paused sandboxes accrue storage charges while compute billing stops ([Launch YC](https://www.ycombinator.com/launches/WhF-superserve-virtual-machines-for-long-running-agents), [Superserve pricing](https://www.superserve.ai/pricing/), Nov 2026).
- **Future moat:** [Inferred]: Customer-specific templates, saved VM state, and network policies could increase migration effort, with no public data on migrations or retention ([Superserve snapshot docs](https://docs.superserve.ai/sandbox/snapshots), [network docs](https://docs.superserve.ai/sandbox/networking), Nov 2026).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** AWS already offers suspendable Firecracker microVMs, and Anthropic documents several interchangeable providers for external sandbox execution ([AWS](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-lambda-microvms/), Jun 2026, [Anthropic docs](https://platform.claude.com/docs/en/managed-agents/self-hosted-sandboxes), Nov 2026).

## Market & Traction

- **Traction signals:**
  - 100K+ machines per week, including workloads from Lindy and YC (company-reported, [Launch YC](https://www.ycombinator.com/launches/WhF-superserve-virtual-machines-for-long-running-agents), Nov 2026).
  - 48 million customer sandbox-minutes over 12 weeks (company-reported, [Pavitra Bhalla on X, mirrored by Teapawt](https://nitter.gq/pavitrabhalla/status/2118232559775834328), Nov 5, 2026).
  - Lindy, YC, and 50+ other teams using the platform ([Max Kolysh on X, mirrored by Teapawt](https://nitter.gq/maxkolysh/status/2117283479583170623), Nov 2, 2026).
  - Customer testimonial: Lindy launched its AI teammates in under a month with Superserve’s help ([Flo Crivello on Superserve’s website](https://www.superserve.ai/), accessed Nov 2026).
  - Customer testimonial: Phaser launched its Game Agent in under a month without building or maintaining new infrastructure ([Superserve’s Phaser case study](https://www.superserve.ai/blog/phaser/), Jul 2026).
  - Claude Managed Agents integration ([Superserve](https://www.superserve.ai/blog/claude-managed-agents-on-superserve/), Jun 2026), and Cursor Cloud Agents integration ([Superserve](https://www.superserve.ai/blog/cursor-cloud-agents-on-superserve/), Oct 2026).
  - 513 stars for the open-source SDK and CLI repository ([GitHub](https://github.com/superserve-ai/superserve), Nov 2026).
  - 469 LinkedIn followers and 360 X followers ([LinkedIn](https://www.linkedin.com/company/super-serve-ai), [X profile mirrored by Teapawt](https://xitter.gq/superserve_ai), Nov 2026).
  - Nov 2 VM launch post with approximately 53.7K views by Nov 17 ([Pavitra Bhalla on X, mirrored by Teapawt](https://nitter.gq/pavitrabhalla/status/2117258952413266292), Nov 2026).
  - Product coverage in Founderland ([Founderland](https://www.founderland.ai/articles/superserve-launches-vms-for-ai-agents-now-at-100k-weekly-run-mvshtedg), Oct 2026).
  - Zero current openings on YC and Greenhouse, with a senior/staff platform role still advertised on the company careers page ([YC Jobs](https://www.ycombinator.com/companies/superserve/jobs), [Greenhouse](https://job-boards.greenhouse.io/superserve?error=true), [Superserve Careers](https://www.superserve.ai/careers/), Nov 2026).
  - Prior product, RayAI: Open Core Ventures announced the Ray-based agent orchestration platform in Nov 2025, Bhalla disclosed pre-seed backing without a round amount, and Superserve was publicly offering the Firecracker sandbox product by Jun 2026 ([Open Core Ventures](https://opencoreventures.com/insights/rayai-extends-ray-oss-to-orchestrate-multi-agent-systems/), [Bhalla’s funding announcement](https://www.linkedin.com/posts/pavitrabhalla_rayai-agentic-ai-infrastructure-activity-7384310361862131712-pf4c), [Superserve](https://www.superserve.ai/blog/claude-managed-agents-on-superserve/)).
- **Competitors:**
  - E2B ($32M raised, $120M+ annualized run rate): Firecracker sandboxes with a 24-hour Pro session limit versus Superserve’s unlimited paid-plan runtime ([E2B Series A, $21M led by Insight Partners, Jul 2025](https://e2b.dev/resources/series-a), [E2B revenue release, Nov 2026](https://www.businesswire.com/news/home/20261105034133/en/E2B-Which-Gives-AI-Agents-Their-Own-Cloud-Computers-Passes-$120-Million-in-Annualized-Run-Rate-With-100-Inbound), [E2B pricing](https://e2b.dev/pricing), [Superserve pricing](https://www.superserve.ai/pricing/)).
  - Daytona ($91M raised, $100M run rate): Offers GPU-backed sandboxes, while Superserve’s founder says its sandboxes currently lack GPU support ([Daytona Series B, $60M led by FirstMark Growth, Oct 2026](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [Daytona run rate, Nov 2026](https://www.daytona.io/dotfiles/1m-to-100m-run-rate-in-4-quarters), [Daytona GPU docs](https://www.daytona.io/docs/en/gpu-sandboxes/), [Superserve LinkedIn](https://www.linkedin.com/company/super-serve-ai)).
  - Modal (approximately $1.22B raised, $1B+ company-wide annualized run rate): Combines sandboxes with GPU inference and training on the same platform ([Sacra](https://sacra.com/c/modal-labs/), [Modal Series D, $750M led by Accel, Oct 2026](https://modal.com/blog/1-billion-annualized-run-rate-series-d)).
  - Blaxel (at least $7.3M raised, revenue unknown): Joined Baseten in Sep 2026 to pair persistent sandboxes with model inference ([Blaxel seed, $7.3M led by First Round, Dec 2025](https://blaxel.ai/blog/Blaxel-Raises-7-3M-Seed-Round-led-by-First-Round-to-Build-Cloud-Infrastructure-for-the-AI-Agent-Eco-23247e47b1ea8067b923d998364e3ced), [Baseten](https://www.baseten.co/blog/blaxel-is-joining-baseten-to-build-the-future-of-agentic-cloud/)).
- **Why now:** [Inferred]: The shift toward agents that execute code increased demand for isolated runtimes, with code-sandbox adoption among surveyed AI builders rising from 11% in 2025 to 40% in 2026 ([Menlo Ventures](https://menlovc.com/perspective/2026-the-state-of-enterprise-ai/), Nov 2026).

## Founders & Team

- **Pavitra Bhalla (Founder/CEO):**
  - **Background:** Attended Santa Clara University, built code-reasoning agents as a staff engineer at Dosu, and was a founding engineer and later director of engineering at Long-Term Stock Exchange ([LinkedIn](https://www.linkedin.com/in/pavitrabhalla), via search snippet, [YC](https://www.ycombinator.com/companies/superserve)); prior exit and direct business email: No public data found.
  - **Twitter/X:** @pavitrabhalla, 606 followers ([X profile mirrored by Teapawt](https://nitter.gq/pavitrabhalla), Nov 2026).
  - **LinkedIn:** Public profile lists Superserve and 2K followers ([LinkedIn](https://www.linkedin.com/in/pavitrabhalla), via search snippet); headline: No public data found.
  - **GitHub:** @pavitrabhalla pins the company SDK repository, which had 513 stars ([Bhalla’s GitHub](https://github.com/pavitrabhalla), [Superserve repository](https://github.com/superserve-ai/superserve), Nov 2026).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Bhalla identifies provisioning secure execution environments at Dosu as the problem that led him to start Superserve, with former Oracle Kubernetes platform lead Alejandro Wille and Firecracker storage-engine contributor Amit Patil on the engineering team and backing from Open Core Ventures and YC ([Launch YC](https://www.ycombinator.com/launches/WhF-superserve-virtual-machines-for-long-running-agents), [Open Core Ventures](https://opencoreventures.com/insights/rayai-extends-ray-oss-to-orchestrate-multi-agent-systems/)).

## Key Risks

- **Cloud substitution:** AWS customers can provision Firecracker sandboxes through Lambda, while Superserve differentiates on indefinite paused-state retention and offers deployment into customers’ own cloud accounts to early partners ([AWS](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-lambda-microvms/), [Superserve](https://www.superserve.ai/)).
- **Startup latency:** The company advertises VM starts under 50 ms, while an external benchmark measured 0.53 seconds from create request to first command, versus Modal’s 0.38 seconds on that end-to-end measure ([YC](https://www.ycombinator.com/companies/superserve), [AI Sandbox Bench](https://aisandboxbench.com/), Oct–Nov 2026).
- **Default outbound access:** Sandboxes can reach public IP addresses by default, so restricting an agent’s external destinations requires configuring the platform’s network allowlist ([Superserve network docs](https://docs.superserve.ai/sandbox/networking), Nov 2026).
- **Name collision:** An unrelated inference-serving research system uses the SuperServe name, creating ambiguity in searches without the company domain or YC listing ([USENIX](https://www.usenix.org/system/files/nsdi25-khare.pdf), 2025, [YC](https://www.ycombinator.com/companies/superserve), 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 100K+ machines weekly ([Launch YC](https://www.ycombinator.com/launches/WhF-superserve-virtual-machines-for-long-running-agents), Nov 2026), 48M sandbox-minutes over 12 weeks ([Bhalla on X](https://nitter.gq/pavitrabhalla/status/2118232559775834328), Nov 2026), Lindy, YC, and 50+ other teams ([Kolysh on X](https://nitter.gq/maxkolysh/status/2117283479583170623), Nov 2026) |
| Revenue Signal | $20/month Developer, $250/month Pro, custom Enterprise, usage-based compute, memory, and retained storage ([Superserve pricing](https://www.superserve.ai/pricing/), Nov 2026). Realized revenue: No public data found. |
| Founders | Pavitra Bhalla (Founder/CEO), staff engineer at Dosu and founding engineer and director of engineering at LTSE ([YC](https://www.ycombinator.com/companies/superserve)) |
| Competitors | E2B ($32M raised, $120M+ run rate, capped Pro sessions) ([E2B funding](https://e2b.dev/resources/series-a), [revenue](https://www.businesswire.com/news/home/20261105034133/en/E2B-Which-Gives-AI-Agents-Their-Own-Cloud-Computers-Passes-$120-Million-in-Annualized-Run-Rate-With-100-Inbound), [pricing](https://e2b.dev/pricing)) <br> Daytona ($91M raised, $100M run rate, GPU sandboxes) ([Daytona funding](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [revenue](https://www.daytona.io/dotfiles/1m-to-100m-run-rate-in-4-quarters), [GPU docs](https://www.daytona.io/docs/en/gpu-sandboxes/)) <br> Modal (~$1.22B raised, $1B+ run rate, integrated GPU inference and training) ([Sacra](https://sacra.com/c/modal-labs/), [Modal](https://modal.com/blog/1-billion-annualized-run-rate-series-d)) <br> Blaxel ($7.3M+ raised, revenue unknown, Baseten inference integration) ([Blaxel](https://blaxel.ai/company/about), [Baseten](https://www.baseten.co/blog/blaxel-is-joining-baseten-to-build-the-future-of-agentic-cloud/)) |
| Moat Signals | Copy-on-write Firecracker storage, full-state snapshots and forks ([Launch YC](https://www.ycombinator.com/launches/WhF-superserve-virtual-machines-for-long-running-agents), Nov 2026) |
| Risk Factors | AWS substitution ([AWS](https://aws.amazon.com/about-aws/whats-new/2026/06/aws-lambda-microvms/)), end-to-end startup latency ([AI Sandbox Bench](https://aisandboxbench.com/)), default public outbound access ([Superserve docs](https://docs.superserve.ai/sandbox/networking)) |
| Founder Reach | Pavitra Bhalla: 606 X followers, 2K LinkedIn followers, 513 stars on the pinned company repository ([X mirror](https://nitter.gq/pavitrabhalla), [LinkedIn](https://www.linkedin.com/in/pavitrabhalla) via search snippet, [GitHub](https://github.com/superserve-ai/superserve)) |
| Distribution Signals | Claude Managed Agents integration ([Anthropic docs](https://platform.claude.com/docs/en/managed-agents/self-hosted-sandboxes)), Cursor integration ([Superserve](https://www.superserve.ai/blog/cursor-cloud-agents-on-superserve/), Oct 2026), 513 SDK/CLI repository stars ([GitHub](https://github.com/superserve-ai/superserve), Nov 2026) |
| Emails | founders@superserve.ai ([Launch YC](https://www.ycombinator.com/launches/WhF-superserve-virtual-machines-for-long-running-agents)), engineering@superserve.ai ([GitHub](https://github.com/superserve-ai)), support@superserve.ai ([older Superserve pricing page](https://www.superserve.ai/pricing/), via search snippet), jobs@superserve.ai ([Careers](https://www.superserve.ai/careers/)), privacy@superserve.ai ([Privacy Policy](https://www.superserve.ai/privacy/)) |
