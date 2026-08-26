# OpenRelay

> Distributed, hardware-agnostic AI inference

| Field | Value |
|-------|-------|
| Website | https://www.openrelay.inc |
| YC Page | https://www.ycombinator.com/companies/openrelay |
| Batch | [Summer 2026](https://www.ycombinator.com/companies/openrelay) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | Seattle, WA, USA |
| Tags | AI |
| YC Partner | [Brad Flora](https://www.ycombinator.com/companies/openrelay) |
| Emails | founders@openrelay.inc, hello@openrelay.inc, sales@openrelay.inc, security@openrelay.inc ([YC Launch](https://www.ycombinator.com/launches/SUY-openrelay-the-inference-delivery-network); [company contact page](https://openrelay.inc/contact); [security page](https://openrelay.inc/security)) |

## The Idea

- **Problem:** AI teams face accelerator capacity fragmented across clouds, vendors, quotas, drivers, contracts, and consoles, leaving them to overpay for reserved GPUs or assemble multi-provider infrastructure themselves ([YC Launch](https://www.ycombinator.com/launches/SUY-openrelay-the-inference-delivery-network), Aug 2026).
- **Approach:** OpenRelay accepts a container or model, continuously benchmarks capacity, selects an accelerator meeting cost, latency, and throughput requirements, and exposes it through one OpenAI-compatible endpoint with routing, scaling, metering, and failover ([YC Launch](https://www.ycombinator.com/launches/SUY-openrelay-the-inference-delivery-network); [OpenRelay homepage](https://openrelay.inc/)).
- **Differentiation:** OpenRelay presents RunPod’s serverless scale-to-zero and Vast.ai’s host marketplace as alternatives, while positioning its own managed multi-provider network around automatic routing and failover rather than user-selected infrastructure ([RunPod comparison](https://openrelay.inc/compare/runpod); [Vast.ai comparison](https://openrelay.inc/compare/vast-ai)).
- **Business Model:** Hosted inference is prepaid and metered per million input, cached-input, and output tokens, dedicated GPUs are metered per minute at displayed hourly rates, and participating hardware providers receive a share of served usage ([inference pricing](https://openrelay.inc/inference-pricing); [provider page](https://openrelay.inc/providers)).
- **TAM/SAM:** The global GPU-as-a-Service market was estimated at $8.21 billion in 2025 and projected to reach $26.62 billion by 2030 at a 26.5% CAGR, while no public SAM data was found for OpenRelay’s specific distributed-inference segment ([MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/gpu-as-a-service-market-153834402.html)).
- **GTM / Distribution:** The company combines self-service API access and a one-time $5 deposit match with direct enterprise demos and recruitment of data centers, accelerator fleets, and other compute providers ([OpenRelay homepage](https://openrelay.inc/); [YC Launch](https://www.ycombinator.com/launches/SUY-openrelay-the-inference-delivery-network)).

## Defensibility

- **Moat today:** The network processes 100 billion-plus tokens weekly across 22 physical locations on four continents and 11 accelerator SKUs, supplying operating scale and cross-hardware routing data ([OpenRelay homepage](https://openrelay.inc/); [LinkedIn](https://www.linkedin.com/company/openrelayinc/), Aug 2026).
- **Future moat:** [Inferred]: Additional provider density and accumulated cost, latency, failure, and model-performance benchmarks could improve routing decisions, but public provider counts, retention, and proprietary-data details are unavailable.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** [Inferred]: RunPod, Vast.ai, Together AI, and hyperscalers already operate GPU or inference platforms and could add cross-provider routing or failover, while OpenRelay’s OpenAI-compatible interface lowers customer integration costs but also reduces switching friction ([RunPod](https://www.runpod.io/blog/one-million-developers); [Vast.ai](https://vast.ai/about); [Together AI](https://www.together.ai/blog/announcing-our-series-c)).

## Market & Traction

- **Traction signals:**
  - 100 billion-plus tokens processed weekly ([OpenRelay homepage](https://openrelay.inc/), Aug 2026).
  - Production operation across 22 physical locations, four continents, and 11 accelerator SKUs ([LinkedIn](https://www.linkedin.com/company/openrelayinc/), Aug 2026).
  - Customer testimonial: A production-inference B300 cluster reduced infrastructure costs by more than 25% versus reserved-cloud pricing ([LinkedIn](https://www.linkedin.com/company/openrelayinc/), Aug 2026).
  - 241 company LinkedIn followers ([LinkedIn](https://www.linkedin.com/company/openrelayinc/), Aug 2026).
  - 0 active YC job postings ([YC company page](https://www.ycombinator.com/companies/openrelay), Aug 2026).
- **Competitors (minimum 3, up to 5):**
  - RunPod ($120 million raised, $120 million ARR): offers development pods, serverless inference, and multi-node clusters rather than primarily cross-chip routing ([funding](https://www.runpod.io/blog/one-million-developers); [ARR](https://techcrunch.com/2026/01/16/ai-cloud-startup-runpod-hits-120m-in-arr-and-it-started-with-a-reddit-post/)).
  - Together AI (at least $1.21 billion disclosed across Series A–C, estimated $1 billion annualized revenue): combines open-model inference with training, model shaping, and kernel research ([Series C](https://www.together.ai/blog/announcing-our-series-c); [financing history](https://techcrunch.com/2026/07/01/neocloud-together-ai-raises-800m-leaps-to-8-3b-valuation/); [revenue estimate](https://sacra.com/c/together-ai/)).
  - Lambda ($2.3 billion raised, $520 million 2025 revenue): develops dedicated GPU cloud capacity and gigawatt-scale AI factories rather than an operator-neutral accelerator-routing layer ([funding](https://lambda.ai/blog/lambda-raises-over-1.5b-from-twg-global-usit-to-build-superintelligence-cloud-infrastructure); [revenue](https://www.cbinsights.com/company/lambda-labs/financials)).
  - Vast.ai (funding and revenue unknown): exposes a marketplace where users select machines and prices, while OpenRelay manages routing, pricing, isolation, and failover across providers ([Vast.ai](https://vast.ai/about); [comparison](https://openrelay.inc/compare/vast-ai)).
- **Why now:** [Inferred]: The 2025–2026 proliferation of accelerator choices—including AMD MI300X, Google TPU v6e, and NVIDIA B300—has increased the value of routing one inference workload across dissimilar hardware ([OpenRelay homepage](https://openrelay.inc/), Aug 2026).

## Founders & Team

- **Prashant Patel (Founder/CTO):**
  - Background: MS in Computer Science from NYU; former Voltage Park staff engineer for managed inference and orchestration supporting 10,000-plus-GPU clusters and 10 million-plus monthly serverless executions; founding Amazon Bedrock member who led Custom Model Import to multi-million-dollar ARR ([YC company page](https://www.ycombinator.com/companies/openrelay)).
  - Twitter/X: No public account found.
  - LinkedIn: “Founder and CTO at OpenRelay.inc,” with 1K followers and 500-plus connections ([LinkedIn](https://www.linkedin.com/in/prashant182), Jul 2026).
  - GitHub: No public repos found.
- **Jaden Wang (Founder):**
  - Background: University of Washington dropout; former TensorDock and Voltage Park HPC engineer; founder of Heaviside Compute; built a half-megawatt data center at age 20 and later worked on Voltage Park virtualization and HPC deployment ([YC company page](https://www.ycombinator.com/companies/openrelay); [YC Launch](https://www.ycombinator.com/launches/SUY-openrelay-the-inference-delivery-network)).
  - Twitter/X: No public account found.
  - LinkedIn: “OpenRelay (YC S26),” with 268 followers and 236 connections ([LinkedIn](https://www.linkedin.com/in/jaden-wang-b99327177), Jul 2026).
  - GitHub: No confirmed public repos found.
- **Co-founder relationship:** Both founders worked at Voltage Park before founding OpenRelay ([YC company page](https://www.ycombinator.com/companies/openrelay)).
- **Founder-market fit:** Patel’s accelerator-inference work at AWS and Voltage Park and Wang’s data-center, virtualization, TensorDock, and Voltage Park experience directly cover the software and capacity-provider sides of OpenRelay’s marketplace ([YC company page](https://www.ycombinator.com/companies/openrelay); [YC Launch](https://www.ycombinator.com/launches/SUY-openrelay-the-inference-delivery-network)).

## Key Risks

- **Failover scope:** OpenRelay’s security page says workloads migrate automatically, but its current FAQ says dedicated VMs are not automatically migrated and failed capacity must be restarted or replaced, limiting failover to hosted inference ([security page](https://openrelay.inc/security); [homepage FAQ](https://openrelay.inc/)).
- **Third-party hardware security:** Customer workloads run on distributed provider hardware, while the company’s mitigations are separate-kernel VMs, VFIO/IOMMU isolation, TLS 1.3, WireGuard, encrypted storage, and GPU resets; SOC 2 Type II remains in progress ([security page](https://openrelay.inc/security)).
- **Capacity liquidity:** Routing depends on available accelerator supply matching workload region, latency, throughput, and model requirements; the disclosed mitigation is operation across 22 locations and 11 accelerator SKUs plus owned capacity ([YC Launch](https://www.ycombinator.com/launches/SUY-openrelay-the-inference-delivery-network); [LinkedIn](https://www.linkedin.com/company/openrelayinc/)).
- **Funded competition:** RunPod has raised $120 million and reports $120 million ARR, while Together AI has disclosed at least $1.21 billion across Series A–C, creating pricing and product-overlap risk ([RunPod](https://www.runpod.io/blog/one-million-developers); [Together AI](https://www.together.ai/blog/announcing-our-series-c)).
- **Identity and location ambiguity:** An unrelated 2018 Kansas blockchain business formerly used the OpenRelay name, while the YC page lists Seattle and the company contact page lists San Francisco, increasing the risk of conflated search and database records ([Rivet.cloud LinkedIn](https://www.linkedin.com/company/open-relay); [YC page](https://www.ycombinator.com/companies/openrelay); [contact page](https://openrelay.inc/contact)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $8.21B global GPUaaS market in 2025, projected to $26.62B by 2030 at 26.5% CAGR ([MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/gpu-as-a-service-market-153834402.html), 2025) |
| SAM | No public data found |
| Traction | 100B+ tokens weekly; 22 locations, four continents, 11 accelerator SKUs ([OpenRelay](https://openrelay.inc/); [LinkedIn](https://www.linkedin.com/company/openrelayinc/), Aug 2026) |
| Revenue Signal | GPU VMs from $0.18/hour; GPT-OSS 20B at $0.05 input and $0.20 output per 1M tokens; batch inference at 50% of interactive rates ([OpenRelay pricing](https://openrelay.inc/inference-pricing), Aug 2026) |
| Founders | Prashant Patel (Founder/CTO): NYU MSCS, Amazon Bedrock founding member, Voltage Park staff engineer; Jaden Wang (Founder): Voltage Park and TensorDock HPC, Heaviside Compute founder, UW dropout ([YC](https://www.ycombinator.com/companies/openrelay)) |
| Competitors | RunPod ($120M raised, $120M ARR, lifecycle cloud); Together AI (≥$1.21B disclosed, estimated $1B annualized revenue, open-model stack); Lambda ($2.3B raised, $520M 2025 revenue, dedicated AI cloud); Vast.ai (funding and revenue unknown, machine marketplace) ([RunPod](https://www.runpod.io/blog/one-million-developers); [Together AI](https://www.together.ai/blog/announcing-our-series-c); [Lambda](https://lambda.ai/blog/lambda-raises-over-1.5b-from-twg-global-usit-to-build-superintelligence-cloud-infrastructure); [Vast.ai](https://vast.ai/about)) |
| Moat Signals | 100B+ weekly tokens across 22 locations and 11 accelerator SKUs, continuous hardware benchmarking, automatic hosted-inference routing ([YC Launch](https://www.ycombinator.com/launches/SUY-openrelay-the-inference-delivery-network); [LinkedIn](https://www.linkedin.com/company/openrelayinc/), Aug 2026) |
| Risk Factors | Dedicated VMs lack automatic migration ([OpenRelay FAQ](https://openrelay.inc/)); SOC 2 Type II in progress ([security page](https://openrelay.inc/security)); funded inference-cloud competitors ([RunPod](https://www.runpod.io/blog/one-million-developers)) |
| Founder Reach | Prashant Patel: 1K LinkedIn followers; Jaden Wang: 268 LinkedIn followers ([LinkedIn](https://www.linkedin.com/in/prashant182); [LinkedIn](https://www.linkedin.com/in/jaden-wang-b99327177), Jul 2026) |
| Distribution Signals | 241 LinkedIn followers and 0 active YC jobs ([LinkedIn](https://www.linkedin.com/company/openrelayinc/); [YC](https://www.ycombinator.com/companies/openrelay), Aug 2026) |
| Emails | founders@openrelay.inc, hello@openrelay.inc, sales@openrelay.inc, security@openrelay.inc ([YC Launch](https://www.ycombinator.com/launches/SUY-openrelay-the-inference-delivery-network); [contact page](https://openrelay.inc/contact); [security page](https://openrelay.inc/security)) |
