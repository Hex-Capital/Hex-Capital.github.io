# OpenRelay

> Distributed, hardware-agnostic AI inference

| Field | Value |
|-------|-------|
| Website | https://www.openrelay.inc |
| YC Page | https://www.ycombinator.com/companies/openrelay |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | Seattle, WA, USA |
| Tags | AI |
| YC Partner | Brad Flora |
| Emails | hello@openrelay.inc, sales@openrelay.inc |

## The Idea

- **Problem:** AI developers, researchers, and inference teams face scarce GPU capacity, long-term hyperscaler commitments, and fragmented idle hardware that cannot independently provide reliable production service ([OpenRelay YC announcement, Jun 2026](https://openrelay.inc/blog/openrelay-backed-by-y-combinator)).
- **Approach:** OpenRelay aggregates third-party GPU nodes through secure tunnels and coordinates them with health checks, scheduling, load balancing, tenant-isolated QEMU virtual machines, and automatic routing around failed inference backends ([OpenRelay provider documentation, Jul 2026](https://openrelay.inc/providers)).
- **Differentiation:** OpenRelay offers consumer and data-center GPUs with per-second billing and included failover, versus RunPod’s broader GPU selection, Lambda’s data-center-focused AI cloud, Vast.ai’s marketplace model, and AWS’s hyperscaler infrastructure ([OpenRelay comparison, Feb 2026](https://openrelay.inc/blog/runpod-vs-lambda-vs-vectorlay)).
- **Business Model:** Dedicated GPU VMs are usage-priced from $0.18 per hour, including RTX 4090 at $0.29, A100 40GB at $0.80, and H100 at $2.60, while hosted inference is metered by input and output tokens ([OpenRelay website, Jul 2026](https://openrelay.inc/)).
- **TAM/SAM:** The global GPU-as-a-service market was estimated at $4.37 billion in 2025 and projected to reach $14.46 billion by 2033 at a 16.0% CAGR, while North America represented 32.6% of 2025 revenue ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/gpu-as-a-service-gpuaas-market-report)).
- **GTM / Distribution:** [Inferred]: OpenRelay is pursuing developers through self-service APIs, documentation, free credits, pricing-comparison content, and provider recruitment, while its contact page and founder outreach indicate direct sales to enterprises and data centers.

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: A larger two-sided network could improve regional capacity, hardware choice, utilization, and failover options, but no public node, provider, customer, or utilization counts establish that effect today.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** RunPod, Vast.ai, Lambda, hyperscalers, data-center operators, and other infrastructure teams can offer GPU rental, hosted inference, OpenAI-compatible endpoints, or capacity aggregation, although multi-provider scheduling, isolation, and failure handling require distributed-systems engineering ([OpenRelay product documentation, Jul 2026](https://openrelay.inc/)).

## Market & Traction

- **Traction signals:**
  - Production marketing site, dashboard, control-plane API, and live Stripe billing launched June 8, 2026 ([OpenRelay product updates, Jun 2026](https://openrelay.inc/updates)).
  - Public API documentation covered 89 customer-facing operations across 16 sections as of June 10, 2026 ([OpenRelay product updates, Jun 2026](https://openrelay.inc/updates)).
  - OpenRelay entered Y Combinator’s Summer 2026 batch ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/openrelay)).
  - Zero active jobs were listed on the YC company page as of July 2026 ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/openrelay)).
- **Competitors (minimum 3, up to 5):**
  - RunPod ($120 million raised, $120 million annual revenue run rate): operates a developer-oriented GPU cloud across 31 regions with serverless hosting and a broader public customer base ([RunPod, Jul 2026](https://www.runpod.io/blog/one-million-developers); [TechCrunch, Jan 2026](https://techcrunch.com/2026/01/16/ai-cloud-startup-runpod-hits-120m-in-arr-and-it-started-with-a-reddit-post/)).
  - Lambda (more than $2.0 billion disclosed across identified rounds, revenue unknown): builds data-center-scale AI factories and superclusters rather than primarily aggregating distributed third-party GPUs ([Lambda, Nov 2025](https://lambda.ai/blog/lambda-raises-over-1.5b-from-twg-global-usit-to-build-superintelligence-cloud-infrastructure)).
  - Vast.ai (funding undisclosed, revenue unknown): provides a marketplace where users select offers from independent GPU hosts, compared with OpenRelay’s emphasis on a unified network and included failover ([OpenRelay comparison page, Jul 2026](https://openrelay.inc/compare/vast-ai)).
- **Why now:** [Inferred]: The catalyst is the 2025–2026 increase in production inference demand alongside constrained data-center capacity, motivating reuse of idle GPUs and support for inference across consumer and non-NVIDIA hardware ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/gpu-as-a-service-gpuaas-market-report)).

## Founders & Team

- **Prashant Patel (Founder and CTO):**
  - Background: Patel earned an MS in computer science from NYU, productionized AI/ML workloads at IBM, helped build Amazon Bedrock and Custom Model Import at AWS, and later worked on managed inference and orchestration for clusters exceeding 10,000 GPUs at Voltage Park ([AWS author biography, Mar 2025](https://aws.amazon.com/es/blogs/machine-learning/benchmarking-customized-models-on-amazon-bedrock-using-llmperf-and-litellm/); [Y Combinator, Jul 2026](https://www.ycombinator.com/companies/openrelay)).
  - Twitter/X: No public account found.
  - LinkedIn: “Founder and CTO at OpenRelay.inc,” with approximately 1,000 followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/prashant182)).
  - GitHub: No public repos found.
- **Jaden Wang (Founder):**
  - Background: Wang attended the University of Washington, worked in HPC engineering at Voltage Park and TensorDock, and founded Heaviside Compute ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/openrelay)).
  - Twitter/X: No public account found.
  - LinkedIn: OpenRelay founder profile with 270 followers and 232 connections ([LinkedIn, Jul 2026](https://www.linkedin.com/in/jaden-wang-b99327177)).
  - GitHub: No public repos found.
- **Co-founder relationship:** Both founders previously worked at Voltage Park ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/openrelay)).
- **Founder-market fit:** Patel’s AWS Bedrock and 10,000-plus-GPU Voltage Park work and Wang’s Voltage Park, TensorDock, and Heaviside Compute experience document prior work in inference orchestration, HPC, and GPU infrastructure ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/openrelay)).

## Key Risks

- **Supply reliability:** OpenRelay depends on independently operated capacity, and its own FAQ states that failed VM capacity is not automatically migrated and must be restarted or replaced ([OpenRelay website, Jul 2026](https://openrelay.inc/)).
- **Cross-hardware compatibility:** Supporting NVIDIA, AMD, Intel, CPUs, and other accelerators exposes workloads to differing drivers, runtimes, numerical behavior, and model compatibility; OpenRelay mitigates tenant isolation through QEMU, VFIO passthrough, and IOMMU ([OpenRelay provider documentation, Jul 2026](https://openrelay.inc/providers)).
- **Capacity-market competition:** RunPod serves 500,000 developers across 31 regions and reported a $120 million annual revenue run rate, while Lambda raised more than $1.5 billion in its November 2025 Series E ([TechCrunch, Jan 2026](https://techcrunch.com/2026/01/16/ai-cloud-startup-runpod-hits-120m-in-arr-and-it-started-with-a-reddit-post/); [Lambda, Nov 2025](https://lambda.ai/blog/lambda-raises-over-1.5b-from-twg-global-usit-to-build-superintelligence-cloud-infrastructure)).
- **Security boundary:** Third-party machines execute customer workloads, making hypervisor isolation, image handling, credential protection, and data deletion core requirements; OpenRelay states that workloads run in QEMU VMs with VFIO/IOMMU isolation and that VM data is wiped at termination ([OpenRelay provider documentation, Jul 2026](https://openrelay.inc/providers)).
- **Name disambiguation:** A separate blockchain-infrastructure company formerly called OpenRelay now operates as Rivet.cloud, which can contaminate company, funding, and social-search results ([Rivet.cloud LinkedIn, Jul 2026](https://www.linkedin.com/company/open-relay)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $4.37B global GPU-as-a-service market in 2025, projected to $14.46B by 2033 at 16.0% CAGR (Grand View Research, 2026) |
| SAM | North America represented 32.6% of global GPU-as-a-service revenue in 2025 (Grand View Research, 2026) |
| Traction | Production dashboard, API, and Stripe billing live June 8, 2026; 89 documented customer-facing API operations by June 10, 2026 (OpenRelay product updates, Jun 2026) |
| Revenue Signal | Dedicated GPUs from $0.18/hour; RTX 4090 $0.29/hour, A100 40GB $0.80/hour, H100 $2.60/hour; hosted inference metered by tokens (OpenRelay website, Jul 2026) |
| Founders | Prashant Patel (Founder/CTO): NYU MS CS, AWS Bedrock founding member, Voltage Park staff engineer; Jaden Wang (Founder): Voltage Park HPC, TensorDock, Heaviside Compute (Y Combinator, Jul 2026) |
| Competitors | RunPod ($120M raised, $120M annual revenue run rate, developer GPU cloud); Lambda (more than $2.0B disclosed funding, revenue unknown, AI factories); Vast.ai (funding and revenue unknown, host marketplace) (RunPod, Jul 2026; TechCrunch, Jan 2026; Lambda, Nov 2025; OpenRelay comparison, Jul 2026) |
| Moat Signals | No public data found |
| Risk Factors | Third-party capacity reliability, cross-hardware compatibility, security on provider-operated nodes (OpenRelay website and provider documentation, Jul 2026) |
| Founder Reach | Prashant Patel: LinkedIn approximately 1K, Twitter and GitHub not found; Jaden Wang: LinkedIn 270, Twitter and GitHub not found (LinkedIn, Jul 2026) |
| Distribution Signals | Self-service web application, public documentation, pricing calculator, community forum, and zero YC-listed jobs (OpenRelay website; Y Combinator, Jul 2026) |
| Emails | hello@openrelay.inc, sales@openrelay.inc (OpenRelay contact page, Jul 2026) |
