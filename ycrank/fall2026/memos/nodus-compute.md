# Nodus Compute

> Maximize the AI you get from your Infrastructure

| Field | Value |
|-------|-------|
| Website | https://www.nodus-compute.ai/ |
| YC Page | https://www.ycombinator.com/companies/nodus-compute |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/nodus-compute)) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags |  |
| YC Partner | Andrew Miklas ([Y Combinator](https://www.ycombinator.com/companies/nodus-compute)) |
| Emails | pranav@nodus-compute.ai (Pranav Varshney, [Nodus Careers](https://careers.nodus-compute.ai/)), admin@nodus-compute.ai (organization contact, [Nodus GitHub](https://github.com/nodus-compute/)) |

## The Idea

- **Problem:** AI teams and fleet operators reserve GPUs that sit idle between workloads, with Cast AI measuring 5% average GPU utilization across its sampled Kubernetes clusters ([Launch YC](https://www.ycombinator.com/launches/Wr8-nodus-compute-get-more-ai-from-the-gpus-that-already-exist), [Cast AI, 2026](https://cast.ai/reports/kubernetes-optimization-report/)).
- **Approach:** Nodus routes training, reinforcement learning, inference, and agent jobs to compatible hardware, prioritizes customers’ own machines, and makes eligible idle capacity available to other teams while supporting checkpoint recovery for compatible workloads ([Launch YC](https://www.ycombinator.com/launches/Wr8-nodus-compute-get-more-ai-from-the-gpus-that-already-exist), [Nodus Liquid Capacity docs](https://www.nodus-compute.ai/docs/guides/pools/liquid-capacity/)).
- **Differentiation:** Modal packages execution as hosted functions and sandboxes, Runpod offers self-serve GPU infrastructure and serverless execution, and SkyPilot pools an organization’s own infrastructure across clouds, while Nodus combines owner-first routing with lending idle hosts to other customers ([Modal](https://frontend.modal.com/blog/1-billion-annualized-run-rate-series-d), [Runpod](https://www.runpod.io/press/runpod-raises-100m-summit-partners), [SkyPilot](https://skypilot.ai/blog/skypilot-the-company), [Nodus Liquid Capacity docs](https://www.nodus-compute.ai/docs/guides/pools/liquid-capacity/)).
- **Business Model:** Published usage rates include $2.60/hour for an H100 SXM and $0.29/hour for an RTX 4090, and dedicated reservations are available by inquiry ([Nodus Pricing, Nov 2026](https://www.nodus-compute.ai/pricing/), [Nodus website](https://www.nodus-compute.ai/)).
- **TAM/SAM:** The broader global GPU-as-a-service market is projected at $5.1B in 2026 with 16.0% CAGR through 2033 ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/gpu-as-a-service-gpuaas-market-report)).
- **GTM / Distribution:** Developers can sign up through the console, install the CLI and Python SDK, or connect through Claude Code, Codex, or Cursor, while operators can book a founder call for fleet and reservation discussions ([Nodus website](https://www.nodus-compute.ai/), [Nodus Install docs](https://www.nodus-compute.ai/docs/getting-started/install/), [Launch YC](https://www.ycombinator.com/launches/Wr8-nodus-compute-get-more-ai-from-the-gpus-that-already-exist)).

## Defensibility

- **Moat today:** Nodus reports that restoring a warmed inference engine from a snapshot cut cold start time to 7.158 seconds on one A100, 7.66× faster than its best stock boot, with a verifier reproducing a 7.65× speedup ([Nodus Research, Nov 2026](https://research.nodus-compute.ai/snapshot-cold-start)).
- **Future moat:** [Inferred]: A larger pool could improve placement and give Nodus more workload data for optimization, with production savings from that feedback loop still unverified in the cited launch and research ([Launch YC](https://www.ycombinator.com/launches/Wr8-nodus-compute-get-more-ai-from-the-gpus-that-already-exist), [Nodus Research](https://research.nodus-compute.ai/elastic-gpu-pool)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** [Inferred]: Rivals already ship parts of the stack, including SkyPilot’s cross-cloud pooling and Cast AI’s GPU scheduling, which narrows the work required to replicate placement and utilization features ([SkyPilot](https://skypilot.ai/blog/skypilot-the-company), [Cast AI](https://cast.ai/blog/kubernetes-gpu-scheduling-bin-packing/)).

## Market & Traction

- **Traction signals:**
  - More than 200 teams joined following the October 2026 product launch, according to the founders’ November announcement ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wr8-nodus-compute-get-more-ai-from-the-gpus-that-already-exist)).
  - UC Berkeley, VoiceStudio, GrayPass, Axiomat, ByteAsk, Reason Machines, and tasksmind are listed as users ([Nodus website, Nov 2026](https://www.nodus-compute.ai/)).
  - Launch coverage in Reveneau on Nov 9 and Fondo on Nov 10 ([Reveneau, Nov 2026](https://reveneau.com/ainews/nodus-compute-yc-fall-2026-gpu-utilization-shared-pools), [Fondo, Nov 2026](https://fondo.com/blog/nodus-compute-existing-gpu-capacity)).
  - 285 LinkedIn followers, 46 X followers at @nodus_compute, and 2 stars for the public Python SDK ([LinkedIn](https://www.linkedin.com/company/nodus-compute), [X profile via Teapawt](https://www.xitter.gq/nodus_compute), [GitHub](https://github.com/nodus-compute/Nodus-sdk-python), Nov 2026).
  - One research internship listed on Nodus Careers and zero openings on the YC listing ([Nodus Careers](https://careers.nodus-compute.ai/), [Y Combinator](https://www.ycombinator.com/companies/nodus-compute), Nov 2026).
  - CB Insights lists $500K from YC in September 2026, while Dealroom displays a $125K seed entry, and a company-confirmed total was unavailable ([CB Insights, via search snippet](https://www.cbinsights.com/company/nodus-compute/financials), [Dealroom](https://app.dealroom.co/companies/nodus_2)).
- **Competitors:**
  - **Modal** ($1.215B raised, over $1B annualized run rate): Hosted functions and sandboxes, with a $750M Series D led by Accel in October 2026 ([CB Insights, via search snippet](https://www.cbinsights.com/company/modal-3/financials), [Modal](https://frontend.modal.com/blog/1-billion-annualized-run-rate-series-d)).
  - **Runpod** ($120.25M raised, over $325M ARR): Self-serve GPU infrastructure and serverless execution, with a $100M Series A led by Summit Partners in June 2026 ([CB Insights, via search snippet](https://www.cbinsights.com/company/runpod/financials), [Runpod funding](https://www.runpod.io/blog/one-million-developers), [Runpod ARR, Oct 2026](https://www.runpod.io/press/runpod-325m-arr-new-cfo)).
  - **SkyPilot** (over $20M raised, revenue unknown): Open-source orchestration across a customer’s own infrastructure, with a July 2026 funding announcement naming Lux Capital as lead ([SkyPilot](https://skypilot.ai/blog/skypilot-the-company)).
- **Why now:** [Inferred]: Cast AI observed lower-end GPU spot capacity becoming more available in early 2026, giving checkpointable jobs more opportunities to trade uninterrupted execution for lower compute prices ([Cast AI, 2026](https://cast.ai/reports/kubernetes-optimization-report/)).

## Founders & Team

- **Pranav Varshney (Co-founder and CEO):**
  - **Background:** Computer science at the University of Michigan, infrastructure experience at Google, Uber, AWS, and Scale AI, and research fellowships at Cortical Labs and Maxel Lab (business email `pranav@nodus-compute.ai`, [personal site](https://pvarshh.me/), [Launch YC](https://www.ycombinator.com/launches/Wr8-nodus-compute-get-more-ai-from-the-gpus-that-already-exist), [Nodus Careers](https://careers.nodus-compute.ai/)).
  - **Twitter/X:** @pvarshh, 142 followers, with CEO listed in the bio ([X profile via Teapawt, Nov 2026](https://www.teapawt.org/pvarshh)).
  - **LinkedIn:** Profile indexed with Google and 5K followers, headline unavailable ([LinkedIn, via search snippet](https://www.linkedin.com/in/pvarshh)).
  - **GitHub:** @pvarshh, pinned `pvarshh.me` repository with 0 stars ([GitHub, Nov 2026](https://github.com/pvarshh/pvarshh.me)).
- **Viswa Kotra (Co-founder):**
  - **Background:** Computer science at UT Dallas, software engineering internships at Citadel Securities and Snowflake, and a generative AI internship at Scale AI ([personal site](https://www.viswaretas-kotra.me/)); direct business email — No public data found.
  - **Twitter/X:** @viswa_kotra, 116 followers ([X profile via Teapawt, Nov 2026](https://www.teapaw.org/viswa_kotra)).
  - **LinkedIn:** Profile indexed with Nodus Compute and 4K followers, headline unavailable ([LinkedIn, via search snippet](https://www.linkedin.com/in/viswa-kotra)).
  - **GitHub:** @vk1815918, contributor to `Blockchain-Based-Federated-Learning-Optimization`, with 15 repository stars ([GitHub profile](https://github.com/vk1815918), [GitHub repository, Nov 2026](https://github.com/ACM-Research/Blockchain-Based-Federated-Learning-Optimization)).
- **Co-founder relationship:** Varshney and Kotra met at Scale AI ([Launch YC](https://www.ycombinator.com/launches/Wr8-nodus-compute-get-more-ai-from-the-gpus-that-already-exist)).
- **Founder-market fit:** Varshney built infrastructure at AWS, Google, and Uber, Kotra worked at Snowflake and Scale AI, and both co-authored Nodus’s GPU systems research ([Launch YC](https://www.ycombinator.com/launches/Wr8-nodus-compute-get-more-ai-from-the-gpus-that-already-exist), [Nodus Research, Nov 2026](https://research.nodus-compute.ai/elastic-gpu-pool)).

## Key Risks

- **Capacity interruption:** Owners can reclaim lent hosts, leaving borrowers waiting if replacement capacity is unavailable, and Nodus limits eligible jobs to workloads that support checkpoint recovery or safe retries ([Nodus Liquid Capacity docs](https://www.nodus-compute.ai/docs/guides/pools/liquid-capacity/)).
- **Production performance:** Nodus’s elastic GPU pooling benchmark used synthetic tenants and replayed traffic on a single node, and the company identifies the tested configuration as a research prototype ([Nodus Research, Nov 2026](https://research.nodus-compute.ai/elastic-gpu-pool)).
- **Workload confidentiality:** Community hosts can inspect job data, so Nodus provides explicit private-pool placement for workloads that must stay on the customer’s infrastructure ([Nodus Liquid Capacity docs](https://www.nodus-compute.ai/docs/guides/pools/liquid-capacity/)).
- **Name confusion:** Adaptive Computing markets a similarly named NODUS Cloud OS in cloud and HPC orchestration ([Adaptive Computing](https://adaptivecomputing.com/wp-content/uploads/2020/05/NODUS_Cloud_OS_GENERIC_datasheet.pdf), [Y Combinator](https://www.ycombinator.com/companies/nodus-compute)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $5.1B global GPU-as-a-service market in 2026, 16.0% CAGR through 2033 ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/gpu-as-a-service-gpuaas-market-report)) |
| SAM | No public data found |
| Traction | Over 200 teams joined since October ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wr8-nodus-compute-get-more-ai-from-the-gpus-that-already-exist)), named users include UC Berkeley and VoiceStudio ([Nodus website, Nov 2026](https://www.nodus-compute.ai/)) |
| Revenue Signal | Published supply pricing of $2.60/hour for H100 SXM, $0.29/hour for RTX 4090, and $0.0075/hour for 1 vCPU with 1 GiB RAM ([Nodus Pricing, Nov 2026](https://www.nodus-compute.ai/pricing/)) |
| Founders | Pranav Varshney (Co-founder and CEO), University of Michigan CS and Google infrastructure ([personal site](https://pvarshh.me/), [X profile via Teapawt](https://www.teapawt.org/pvarshh)); Viswa Kotra (Co-founder), UT Dallas CS, Snowflake, and Scale AI ([personal site](https://www.viswaretas-kotra.me/)) |
| Competitors | Modal ($1.215B raised, over $1B annualized run rate, hosted functions and sandboxes) ([CB Insights, via search snippet](https://www.cbinsights.com/company/modal-3/financials), [Modal](https://frontend.modal.com/blog/1-billion-annualized-run-rate-series-d)); Runpod ($120.25M raised, over $325M ARR, self-serve GPU cloud) ([CB Insights, via search snippet](https://www.cbinsights.com/company/runpod/financials), [Runpod](https://www.runpod.io/press/runpod-325m-arr-new-cfo)); SkyPilot (over $20M raised, revenue unknown, open-source cross-cloud orchestration) ([SkyPilot](https://skypilot.ai/blog/skypilot-the-company)) |
| Moat Signals | Snapshot restoration reproduced at a 7.65× cold-start speedup in the verifier run reported by Nodus ([Nodus Research, Nov 2026](https://research.nodus-compute.ai/snapshot-cold-start)) |
| Risk Factors | Host reclaim and workload confidentiality ([Nodus Liquid Capacity docs](https://www.nodus-compute.ai/docs/guides/pools/liquid-capacity/)), production performance of GPU pooling ([Nodus Research](https://research.nodus-compute.ai/elastic-gpu-pool)) |
| Founder Reach | Pranav Varshney — 142 X followers, 5K LinkedIn followers, 0 stars on pinned repository ([Teapawt](https://www.teapawt.org/pvarshh), [LinkedIn, via search snippet](https://www.linkedin.com/in/pvarshh), [GitHub](https://github.com/pvarshh/pvarshh.me)); Viswa Kotra — 116 X followers, 4K LinkedIn followers, 15 stars on project repository ([Teapawt](https://www.teapaw.org/viswa_kotra), [LinkedIn, via search snippet](https://www.linkedin.com/in/viswa-kotra), [GitHub](https://github.com/ACM-Research/Blockchain-Based-Federated-Learning-Optimization)) |
| Distribution Signals | 285 LinkedIn followers, 46 X followers, and 2 Python SDK stars ([LinkedIn](https://www.linkedin.com/company/nodus-compute), [Teapawt](https://www.xitter.gq/nodus_compute), [GitHub](https://github.com/nodus-compute/Nodus-sdk-python), Nov 2026) |
| Emails | pranav@nodus-compute.ai (Pranav Varshney, [Nodus Careers](https://careers.nodus-compute.ai/)), admin@nodus-compute.ai (organization contact, [Nodus GitHub](https://github.com/nodus-compute/)) |
