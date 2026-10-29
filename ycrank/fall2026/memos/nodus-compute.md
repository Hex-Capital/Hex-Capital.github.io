# Nodus Compute

> Intelligent Cloud for AI workloads

| Field | Value |
|-------|-------|
| Website | https://www.nodus-compute.ai/ |
| YC Page | https://www.ycombinator.com/companies/nodus-compute |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/nodus-compute)) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags |  |
| YC Partner | Andrew Miklas ([YC](https://www.ycombinator.com/companies/nodus-compute)) |
| Emails | pranav@nodus-compute.ai ([Careers](https://careers.nodus-compute.ai/)); admin@nodus-compute.ai ([Official GitHub](https://github.com/nodus-compute/)) |

## The Idea

- **Problem:** [Inferred]: AI teams with prepaid GPU commitments can pay for unused capacity while separately managing provider selection and interrupted jobs, the problems described in Nodus’s positioning ([YC](https://www.ycombinator.com/companies/nodus-compute)).
- **Approach:** Nodus matches container and resource requirements to available compute, executes jobs, and restores saved files on replacement machines so customer code can reload checkpoints ([Nodus](https://www.nodus-compute.ai/)).
- **Differentiation:** Nodus emphasizes cost-to-completion routing and recovery, versus Modal’s composable serverless infrastructure and SF Compute’s capacity resale order book ([Nodus Terms](https://www.nodus-compute.ai/terms/), [Modal](https://modal.com/blog/1-billion-annualized-run-rate-series-d), [SF Compute](https://sfcompute.com/news/abel-ledger)).
- **Business Model:** Usage-based billing is recorded through a ledger, with published hourly supply prices including H100 SXM at $2.600 and RTX 4090 at $0.290; the homepage describes supply pricing as before Nodus fees ([Terms](https://www.nodus-compute.ai/terms/), [Pricing](https://www.nodus-compute.ai/pricing/), [Nodus](https://nodus-compute.ai/)).
- **TAM/SAM:** The adjacent GPU orchestration platform market is estimated at $3.96B in 2026, reaching $12.01B in 2030 at 32% CAGR, but no Nodus-specific SAM was found ([Research and Markets, 2026](https://www.researchandmarkets.com/reports/6231681/graphics-processing-unit-gpu-orchestration)).
- **GTM / Distribution:** Public acquisition paths include console signup, meeting booking, coding-agent integrations, and LinkedIn outreach to holders of idle reserved GPUs ([Nodus](https://www.nodus-compute.ai/), [LinkedIn](https://www.linkedin.com/company/nodus-compute)).

## Defensibility

- **Moat today:** Published implementation signals include checkpoint integrity checks and generation fencing, but these document controls rather than demonstrated exclusivity ([Nodus Security](https://www.nodus-compute.ai/security/)).
- **Future moat:** [Inferred]: Workload observations could improve placement and optimization research, but the proposed workload-to-research feedback loop lacks publicly demonstrated cross-customer results ([YC](https://www.ycombinator.com/companies/nodus-compute), [Research](https://www.nodus-compute.ai/research/)).
- **Market structure:** [Inferred]: No structural barrier identified at this stage, since Modal already pools capacity across clouds and SF Compute supports resale of committed capacity ([Modal, October 2026](https://modal.com/blog/1-billion-annualized-run-rate-series-d), [SF Compute](https://sfcompute.com/news/abel-ledger)).
- **Commoditization risk:** [Inferred]: GPU clouds and orchestration vendors could assemble overlapping scheduling and execution capabilities, although comparable reliability would require systems engineering, as illustrated by Modal’s custom runtime, scheduler, filesystem, and networking ([Modal](https://modal.com/blog/1-billion-annualized-run-rate-series-d)).

## Market & Traction

- **Traction signals:**
  - Founder-reported pilots with 10 startups and compute-cost reductions above 30%; payment status and measurement methodology unspecified (Viswa Kotra’s X post, mirrored by [TwStalker, October 2026, via search snippet](https://workingww.twstalker.com/viswa_kotra)).
  - 127 company LinkedIn followers ([LinkedIn, retrieved October 27, 2026](https://www.linkedin.com/company/nodus-compute)).
  - Six research and engineering openings on the company careers site, despite zero jobs on YC ([Careers](https://careers.nodus-compute.ai/), [YC](https://www.ycombinator.com/companies/nodus-compute), October 27, 2026).
  - Two stars on the public Python SDK repository ([Official GitHub, October 27, 2026](https://github.com/nodus-compute/)).
  - Founder interview published by Retrograde ([October 6, 2026](https://retrogradenews.com/2026/10/06/cs-students-frontier-ai-startup-tell-all/)).
  - $500K funding reported by a secondary database, attributed to YC ([CB Insights, retrieved October 27, 2026](https://www.cbinsights.com/company/nodus-compute/financials)).
- **Competitors:**
  - **Modal ($1.215B raised; above $1B annualized revenue run rate):** Offers serverless functions, sandboxes, and multi-node training; its latest $750M Series D was led by Accel in October 2026 ([aVenture](https://aventure.vc/companies/modal-labs-new-york-city-ny-us/fundraising), [Modal](https://modal.com/blog/1-billion-annualized-run-rate-series-d)).
  - **Runpod (at least $120M disclosed funding; above $325M ARR):** Offers developer-selected GPU infrastructure and a full AI development platform; its latest $100M growth investment was led by Summit Partners in June 2026 ([Funding](https://stockanalysis.com/private/runpod/), [Round announcement](https://www.runpod.io/press/runpod-raises-100m-summit-partners), [October 2026 ARR announcement](https://www.runpod.io/press/runpod-325m-arr-new-cfo)).
  - **SF Compute ($52M raised; revenue unknown):** Operates GPU clusters and a capacity resale market; its latest identified $40M Series A was co-led by DCVC and Wing in November 2025 ([CB Insights](https://www.cbinsights.com/company/san-francisco-compute-company), [DCVC](https://www.dcvc.com/companies/the-san-francisco-compute-company/), [Round details](https://www.datacenterdynamics.com/en/news/sf-compute-raises-40m-for-ai-compute-marketplace-offering/)).
- **Why now:** [Inferred]: Production-ready open-weight models and maturing vLLM/SGLang inference engines expanded the practical scope for teams to own and operate models, creating demand for execution infrastructure ([Modal’s assessment, May 2026](https://modal.com/blog/modal-series-c)).

## Founders & Team

- **Viswa Kotra (Co-founder):**
  - Background: Studied computer science at UT Dallas and held internships at Citadel Securities, Snowflake, Scale AI, Capital One, and Cadence; no public exit data found ([Personal site](https://www.viswaretas-kotra.me/)).
  - Twitter/X: @viswa_kotra, 42 followers ([TwStalker, October 2026, via search snippet](https://workingww.twstalker.com/viswa_kotra)).
  - LinkedIn: Profile lists Nodus Compute and 4K followers; headline not retrievable ([LinkedIn, October 2026, via search snippet](https://www.linkedin.com/in/viswa-kotra)).
  - GitHub: @vk1815918; pinned C++ Orderbook repository has 1 star ([GitHub, October 27, 2026](https://github.com/vk1815918)).
- **Pranav Varshney (Co-founder):**
  - Background: Studied computer science at Michigan, interned at Google, Uber, AWS, and Scale AI, and lists research fellowships at Cortical Labs and Maxel Lab; no public exit data found ([Personal site](https://pvarshh.me/)).
  - Twitter/X: @pvarshh, count not retrievable ([GitHub-linked account](https://github.com/pvarshh)).
  - LinkedIn: Indexed profile lists Google and 5K followers; headline not retrievable ([LinkedIn, October 2026, via search snippet](https://www.linkedin.com/in/pvarshh)).
  - GitHub: @pvarshh; pinned personal-site repository has 0 stars ([GitHub, October 27, 2026](https://github.com/pvarshh/pvarshh.me)).
- **Co-founder relationship:** Met during an internship at Scale AI in San Francisco and continued discussing GPU-market problems afterward ([Retrograde, October 6, 2026](https://retrogradenews.com/2026/10/06/cs-students-frontier-ai-startup-tell-all/)).
- **Founder-market fit:** [Inferred]: Their documented infrastructure and AI internships relate to workload execution, including Varshney’s Google cost-optimization work; YC is the confirmed institutional backer ([Kotra](https://www.viswaretas-kotra.me/), [Varshney résumé](https://pvarshh.me/src/pdf/resume.pdf), [YC](https://www.ycombinator.com/companies/nodus-compute)).

## Key Risks

- **Recovery limitations:** Recovery depends on declared continuity mode, and ephemeral workloads are not resumed; pilot service has no SLA unless separately signed ([Nodus Terms](https://www.nodus-compute.ai/terms/)).
- **Enterprise security requirements:** [Inferred]: Procurement may be constrained by disclosed absence of SOC 2, ISO certification, external security assessment, private networking, and customer-managed encryption keys, despite documented tenant isolation and integrity controls ([Security](https://www.nodus-compute.ai/security/)).
- **Optimization feasibility:** [Inferred]: The proposed research feedback loop requires reproducible savings without degrading quality or latency, while Nodus describes its program as a research agenda with results to be published ([Research](https://www.nodus-compute.ai/research/)).
- **Competitive substitution:** [Inferred]: Modal’s multi-cloud execution platform and SF Compute’s resale market overlap with Nodus’s execution and liquidity propositions, potentially reducing differentiation ([Modal](https://modal.com/blog/1-billion-annualized-run-rate-series-d), [SF Compute](https://sfcompute.com/news/abel-ledger)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Adjacent GPU orchestration: $3.96B in 2026; 32% forecast CAGR through 2030 ([Research and Markets, 2026](https://www.researchandmarkets.com/reports/6231681/graphics-processing-unit-gpu-orchestration)) |
| SAM | No public data found |
| Traction | Founder claims 10 startup pilots and >30% compute savings ([TwStalker, October 2026, via search snippet](https://workingww.twstalker.com/viswa_kotra)) |
| Revenue Signal | H100 SXM supply $2.600/hour; RTX 4090 $0.290/hour, before Nodus fees; realized revenue undisclosed ([Pricing](https://www.nodus-compute.ai/pricing/), [Homepage](https://nodus-compute.ai/), October 2026) |
| Founders | Viswa Kotra: UT Dallas CS; Citadel/Snowflake internships ([Profile](https://www.viswaretas-kotra.me/)); Pranav Varshney: Michigan CS; Google/Uber internships ([Profile](https://pvarshh.me/)) |
| Competitors | Modal: $1.215B raised, >$1B annualized run rate, serverless platform ([Funding](https://aventure.vc/companies/modal-labs-new-york-city-ny-us/fundraising), [Modal](https://modal.com/blog/1-billion-annualized-run-rate-series-d)); Runpod: ≥$120M raised, >$325M ARR, GPU developer cloud ([Funding](https://stockanalysis.com/private/runpod/), [Runpod](https://www.runpod.io/press/runpod-325m-arr-new-cfo)); SF Compute: $52M raised, revenue unknown, capacity resale ([Funding](https://www.cbinsights.com/company/san-francisco-compute-company), [Product](https://sfcompute.com/news/abel-ledger)) |
| Moat Signals | Documented checkpoint integrity and generation fencing ([Nodus Security](https://www.nodus-compute.ai/security/)) |
| Risk Factors | Conditional recovery and pilot SLA limitations ([Terms](https://www.nodus-compute.ai/terms/)); absent external security assessment ([Security](https://www.nodus-compute.ai/security/)) |
| Founder Reach | Kotra: LinkedIn 4K; Varshney: LinkedIn 5K ([Kotra](https://www.linkedin.com/in/viswa-kotra), [Varshney](https://www.linkedin.com/in/pvarshh), October 2026, via search snippets) |
| Distribution Signals | LinkedIn 127 followers ([LinkedIn, October 2026](https://www.linkedin.com/company/nodus-compute)); public Python SDK, 2 stars ([GitHub, October 2026](https://github.com/nodus-compute/)) |
| Emails | pranav@nodus-compute.ai ([Careers](https://careers.nodus-compute.ai/)); admin@nodus-compute.ai ([Official GitHub](https://github.com/nodus-compute/)) |
