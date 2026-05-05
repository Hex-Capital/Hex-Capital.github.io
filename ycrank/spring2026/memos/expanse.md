# Expanse

> Unlock wasted GPU capacity.

| Field | Value |
|-------|-------|
| Website | https://expanse.sh |
| YC Page | https://www.ycombinator.com/companies/expanse |
| Batch | Spring 2026 (YC page) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Developer Tools, Enterprise Software, Infrastructure |
| YC Partner | David Lieb (YC page) |
| Emails | founders@expanse.sh (YC page), founders@expanse.org.uk, contact@expanse.org.uk (expanse.sh) |

## The Idea

**Problem:** Expanse positions GPU/HPC over-provisioning as the target waste. The site states "30% of cloud spend is lost to over-allocation" and that researchers over-provision compute 2-3x to avoid failures (expanse.sh). The site's example is "a 32-GPU research cluster operating at 37% utilization" (expanse.sh). Customer segment named on site: HPC and GPU-cluster operators (expanse.sh). [Inferred]: target buyers are research universities, national supercomputing centres, and enterprise/quant ML training teams running Slurm or similar batch schedulers, based on the founders' stated background at "the largest quant funds and national supercomputing centres" (YC description).

**Approach:** Three capabilities per the YC page and site: (1) resource prediction (right-sizing job submissions before scheduler), (2) optimisation suggestions (code/config changes), (3) failure prediction (catching jobs that will fail before consuming GPU hours) (YC page; expanse.sh). Site claims "passive telemetry collection (no user-side changes required)" and "one-click deployment" (expanse.sh). Onboarding offer: "Two-week evaluation period with no commitment" (expanse.sh).

**Differentiation:** CEO Ismaeel Bashir's MSc dissertation at EPCC was titled "Multi-modal HPC Resource and Failure Prediction" (Bashir LinkedIn). YC description claims his predictor "beat every published baseline" (YC description) — no peer-reviewed citation found. [Inferred]: vs. built-in Slurm/PBS scheduler heuristics and academic prediction frameworks (e.g., the two-stage Slurm-feature framework on arXiv), Expanse packages prediction as deployable on-cluster software. Vs. NVIDIA Run:ai (Kubernetes-native GPU orchestration in cloud AI clusters, acquired by NVIDIA for $700M, closed Dec 2024 — VentureBeat, NVIDIA Blog), Expanse targets HPC/Slurm batch environments rather than Kubernetes.

**Business Model:** No pricing page found on expanse.sh (expanse.sh). [Inferred]: most likely monetization is per-cluster or per-GPU-hour SaaS subscription with a "two-week eval, no commitment" land-and-expand motion, based on the trial language on the homepage.

**TAM/SAM:** GPU-as-a-Service market estimates for 2025: USD 4.96B (Precedence Research), USD 8.21B (MarketsandMarkets), USD 4.37B (Grand View Research, all via search snippet). Mordor Intelligence projects USD 26.09B by 2031 at 28.73% CAGR (via search snippet). No public SAM figure found for HPC GPU-utilization optimization software specifically.

**GTM / Distribution:** Public booking link `book.getexpanse.io` on YC page implies direct-sales meetings (YC page). [Inferred]: founder-led outbound to HPC centres and quant funds, leveraging EPCC and G-Research alumni networks; consistent with no current job postings found.

## Defensibility

- Founder-built research IP: Bashir's master's thesis "Multi-modal HPC Resource and Failure Prediction" at EPCC (LinkedIn). Earlier dissertation "Training Machine Learning Models on Edge Devices" published to MobiUK '25 (LinkedIn).
- Data flywheel claim: site references "deep learning models … deployed on your cluster" (LinkedIn snippet of company page). [Inferred]: per-cluster telemetry could yield a data advantage if Expanse aggregates patterns across many sites, but no evidence yet of multi-cluster deployment.

**Market structure:** [Inferred]: NVIDIA now owns Run:ai (Dec 2024 close, VentureBeat) and is open-sourcing it, which is a structural pull toward Kubernetes/cloud GPU orchestration. Slurm-based national HPC and quant batch environments are an underserved adjacent segment because hyperscaler-aligned tooling does not natively address them — Expanse's HPC-first positioning is the structural barrier. Hyperscalers have weaker incentive to optimize away their own GPU billable hours.

**Commoditization risk:** Academic literature on Slurm resource prediction is publicly available (arXiv 2604.02158, PMC8974354 via search snippet). Slurm itself is open-source and any HPC team or vendor (e.g., SchedMD, NVIDIA Run:ai post-open-source) could build similar prediction layers.

## Market & Traction

1. **Traction signals:**
   - YC Spring 2026 batch (YC page).
   - Company LinkedIn page exists (linkedin.com/company/expanse) — follower count not retrievable via search snippet.
   - Twitter/X: no company account found in searches.
   - Product Hunt / Hacker News launch: none found.
   - Press coverage: none found.
   - Hiring: YC profile lists hiring=False; no active job postings found.
   - Founder Ismaeel Bashir LinkedIn: 2,000 followers, 500+ connections (LinkedIn).
   - Customer logos on website: none displayed (expanse.sh).
   - Revenue / paying customers: No public data found.
   - Crunchbase shows an "Expanse Inc." profile but appears to refer to the Palo Alto Networks-acquired cybersecurity company, not this YC startup (Crunchbase via search snippet) — unconfirmed.

2. **Competitive landscape:**
   - **NVIDIA Run:ai** — Kubernetes-based GPU orchestration; acquired by NVIDIA for $700M, closed Dec 2024 (VentureBeat, NVIDIA Blog); being open-sourced. Differentiator vs. Expanse: cloud/Kubernetes-native, not HPC/Slurm-focused.
   - **WoolyAI** — hardware-agnostic GPU hypervisor providing fractional/elastic GPU sharing across mixed clusters with no code changes (woolyai.com via search snippet). Funding: not disclosed in available sources. Differentiator: virtualization/hypervisor layer rather than predictive scheduling.
   - **hosted.ai** — GPUaaS optimization claiming "5x more profit per GPU" for cloud providers (hosted.ai via search snippet). Funding/ARR: No public data found. Differentiator: targets GPU cloud operators' margin, not researcher workloads.
   - **SchedMD / Slurm built-in heuristics + academic predictors** (arXiv 2604.02158; PMC8974354 via search snippet) — open-source and free; differentiator vs. Expanse: not productized, requires in-house ML ops.
   - **Anyscale, CoreWeave, Lambda Labs, RunPod** (DigitalOcean, Northflank via search snippet) — GPUaaS / orchestration providers; adjacent rather than direct, since they sell or orchestrate GPUs rather than optimizing existing on-prem HPC clusters.

3. **Why now:** [Inferred]: GPU scarcity and price (H100/B200 cycles) makes the cost of 30% over-allocation materially larger in absolute dollars than during the pre-LLM era; the NVIDIA Run:ai acquisition (Dec 2024, VentureBeat) consolidated cloud-GPU orchestration but left HPC/Slurm cluster optimization fragmented; ML-based job-resource prediction crossed published-baseline performance thresholds (Bashir's EPCC research, LinkedIn).

## Founders & Team

**Ismaeel Bashir** — Co-founder & CEO
- University of Edinburgh, 2021-2026, Undergraduate Masters; bachelor's grade 86% (First class) (LinkedIn). Bachelor's dissertation: "Training Machine Learning Models on Edge Devices," published to MobiUK '25, 84% (LinkedIn). Master's dissertation: "Multi-modal HPC Resource and Failure Prediction" at EPCC (LinkedIn; YC description).
- Twitter/X: No public account found.
- LinkedIn: uk.linkedin.com/in/ismaeel-bashir — 2,000 followers, 500+ connections (LinkedIn).
- GitHub: linked from LinkedIn (LinkedIn); handle and stars not retrieved.

**Nikodem Bieniek** — Co-founder & CTO
- Background: No public data found in searches; YC description states the four founders ran HPC and GPU training workloads "at the largest quant funds and national supercomputing centres" (YC page).
- Twitter/X: No public account found.
- LinkedIn: No specific profile match found in searches.
- GitHub: No public data found.

**Yafet Melake** — Co-founder & COO
- University of Edinburgh, final-year Artificial Intelligence and Computer Science (LinkedIn via search snippet).
- Prior roles per LinkedIn (via search snippet): SWE Intern at G-Research; previously at Bloomberg, Amazon, Goldman Sachs.
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/yafet-melake (search snippet).
- GitHub: No public data found.

**Eren Mendi** — Co-founder & CPO
- G-Research (LinkedIn via search snippet).
- Won Marshall Wace's "Most scalable system" prize at HackTheBurgh X for a hedge-fund real-time data pipeline build (LinkedIn post via search snippet) — implies University of Edinburgh ties.
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/eren-mendi-929b55138 (search snippet).
- GitHub: No public data found.

**Co-founder relationship:** Bashir, Melake, and Mendi all have University of Edinburgh ties (Bashir LinkedIn; Melake LinkedIn snippet; Mendi HackTheBurgh X via LinkedIn snippet). Melake and Mendi both list G-Research (LinkedIn snippets). No public data on Bieniek's overlap.

**Founder-market fit:** Bashir's MSc thesis directly built the multimodal HPC prediction model that is the company's core capability (LinkedIn; YC description). Melake and Mendi at G-Research provide quant-fund HPC user perspective (LinkedIn snippets), matching the YC description claim that founders "ran HPC and GPU training workloads at the largest quant funds and national supercomputing centres." No advisors or investors named publicly beyond YC.

## Key Risks

**Incumbent open-sourcing of overlapping software:** NVIDIA is open-sourcing Run:ai post-acquisition (VentureBeat, Dec 2024). If Run:ai's open-source release extends to Slurm/HPC, Expanse's productization advantage compresses. Mitigation: Run:ai is Kubernetes-native, not Slurm-native (NVIDIA Blog).

**Sales cycle to national supercomputing centres:** [Inferred]: national HPC centres procure on multi-quarter government cycles, mismatched with pre-seed runway; quant funds buy faster but are a smaller logo set.

**Single-author research IP:** The "beat every published baseline" claim (YC description) rests on Bashir's master's dissertation; no peer-reviewed publication of the multimodal HPC predictor was located in searches, so external validation is unverified.

**Domain inconsistency:** Site uses expanse.sh; contact emails on the site are @expanse.org.uk; YC contact email is @expanse.sh; booking is on getexpanse.io (expanse.sh; YC page). [Inferred]: brand/domain fragmentation could indicate unresolved naming/trademark issues, particularly given the prior Palo Alto Networks-acquired Expanse Inc. (Crunchbase via search snippet) and the SDSC "Expanse" supercomputer (expanse.sdsc.edu).

**Co-founder public footprint asymmetry:** No public profile for CTO Nikodem Bieniek located in searches, limiting external validation of the technical co-founder.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | GPUaaS USD 4.96B in 2025 (Precedence Research, via search snippet); USD 26.09B by 2031 at 28.73% CAGR (Mordor Intelligence, via search snippet) |
| SAM | No public data found |
| Traction | YC Spring 2026 batch (YC page); company LinkedIn page exists (LinkedIn search); no Product Hunt / press / customer logos found |
| Revenue Signal | No public data found (no pricing on expanse.sh) |
| Founders | Ismaeel Bashir (CEO): MSc Edinburgh/EPCC, multimodal HPC predictor thesis. Nikodem Bieniek (CTO): No public data found. Yafet Melake (COO): G-Research SWE Intern, ex-Bloomberg/Amazon/Goldman Sachs (LinkedIn snippet). Eren Mendi (CPO): G-Research, HackTheBurgh X Marshall Wace prize (LinkedIn snippet). |
| Competitors | NVIDIA Run:ai ($700M acquisition closed Dec 2024, revenue undisclosed; Kubernetes GPU orchestration — VentureBeat). WoolyAI (funding undisclosed; GPU hypervisor — woolyai.com via snippet). hosted.ai (funding undisclosed; GPUaaS margin optimization — hosted.ai via snippet). SchedMD/Slurm + academic predictors (open-source, free — arXiv via snippet). |
| Moat Signals | Founder research IP: Bashir EPCC MSc thesis on multimodal HPC resource/failure prediction (LinkedIn) |
| Risk Factors | Run:ai open-sourcing overlap, slow HPC procurement cycles, unverified "beat every baseline" claim |
| Founder Reach | Ismaeel Bashir: Twitter not found, LinkedIn 2,000 followers / 500+ connections, GitHub stars not retrieved (LinkedIn). Nikodem Bieniek: No public data found. Yafet Melake: Twitter not found, LinkedIn profile exists (search snippet), GitHub not found. Eren Mendi: Twitter not found, LinkedIn profile exists (search snippet), GitHub not found. |
| Distribution Signals | YC Spring 2026 listing (YC page); booking link book.getexpanse.io (YC page); no Product Hunt / Hacker News / press launches found |
| Emails | founders@expanse.sh (YC page), founders@expanse.org.uk, contact@expanse.org.uk (expanse.sh) |
