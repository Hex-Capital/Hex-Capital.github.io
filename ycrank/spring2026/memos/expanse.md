# Expanse

> Unlock wasted GPU capacity.

| Field | Value |
|-------|-------|
| Website | https://expanse.sh |
| YC Page | https://www.ycombinator.com/companies/expanse |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Developer Tools, Enterprise Software, Infrastructure |
| YC Partner | David Lieb |
| Emails | founders@expanse.org.uk, contact@expanse.org.uk (expanse.sh, May 2026) |

## The Idea

- **Problem:** Organizations running HPC/GPU training clusters over-provision because researchers cannot accurately predict job resource needs or failures, leading to idle compute (expanse.sh, May 2026; YC company page, May 2026).
- **Approach:** Intelligence layer that ingests passive cluster telemetry and applies multimodal ML to predict resource fit, surface code/config optimization suggestions, and predict job failure pre-submission (expanse.sh, May 2026).
- **Differentiation:** Versus Run:ai/NVIDIA Run:ai (workload scheduler/GPU virtualization for K8s, run.ai) — Expanse predicts at submission rather than reschedules; versus WoolyAI (GPU sharing for ML dev/test, woolyai.com) — Expanse targets HPC research clusters with on-prem deep learning models for data sovereignty (Ismaeel Bashir LinkedIn via search snippet); versus Rafay (PaaS lifecycle orchestration, rafay.co) — Expanse focuses on prediction/optimization rather than orchestration.
- **Business Model:** No public pricing page found on expanse.sh (May 2026); [Inferred]: Enterprise/per-cluster license given on-prem deployment model and HPC/national-lab customer profile described in YC blurb.
- **TAM/SAM:** AI GPU Orchestration Platforms market projected to grow by $6.59B from 2026–2030 at 25.9% CAGR (Technavio, 2026); broader AI infrastructure market $142.8B in 2026 (Evolvance Market Research, 2026).
- **GTM / Distribution:** [Inferred]: Direct sales to HPC centers and quant funds given founders' prior employers (national supercomputing centres, quant funds — YC description); booking link https://book.getexpanse.io found on YC page indicates outbound demo motion.

## Defensibility

- **Moat today:** Proprietary multimodal HPC resource predictor originally built by Ismaeel Bashir at EPCC, described in YC blurb as beating every published baseline (YC company page, May 2026).
- **Future moat:** [Inferred]: Data network effect — each deployed cluster's telemetry could improve prediction models across customers, unproven now because customer count is undisclosed.
- **Market structure:** [Inferred]: Cloud-hyperscaler GPU optimization products (AWS, Azure, NVIDIA Run:ai) have channel conflict incentivizing more GPU consumption, not less, leaving on-prem HPC waste reduction underserved.
- **Commoditization risk:** Academic GPU scheduling research is active (MARBLE, Gavel, Sia referenced in 2025–2026 surveys; arxiv.org 2512.10271, 2512.10980), and large GPU orchestration vendors (Run:ai, Rafay) could extend into prediction.

## Market & Traction

- **Traction signals:**
  - Example case shown on landing page: 32-GPU research cluster operating at 37% utilization (expanse.sh, May 2026).
  - YC backing, Spring 2026 batch (YC company page, May 2026).
  - Adjacent free tool offered: OS Wastage Scanner at wastage.expanse.sh (expanse.sh, May 2026).
  - Twitter @ExpanseCompute exists per YC listing; follower count not retrievable (YC company page, May 2026).
  - LinkedIn page expanse-compute exists per YC listing; follower count not retrievable (YC company page, May 2026).
  - GitHub org expanse-labs listed (YC company page, May 2026); repo star counts not retrievable in search.
  - Open positions: 0 (YC company page, May 2026).
  - No public revenue, paying-customer count, press coverage, or Product Hunt launch found.
- **Competitors:**
  - NVIDIA Run:ai (acquired by NVIDIA 2024; revenue unknown post-acquisition, run.ai): Kubernetes GPU scheduler/virtualization for AI workloads, not a pre-submission predictor (run.ai).
  - Rafay Systems (raised $89M+ across rounds per public disclosures; revenue unknown, rafay.co): Full lifecycle GPU PaaS and orchestration, broader scope than Expanse (rafay.co via search snippet).
  - WoolyAI (funding/ARR unknown, woolyai.com): GPU sharing for ML dev/test claiming 3× capacity, targets ML notebooks rather than HPC schedulers (woolyai.com).
  - Slurm (open source, no funding): Default HPC scheduler Expanse sits on top of, not a direct substitute (search snippet, devopsschool.com).
  - Gavel/Sia (academic schedulers; no commercial entity): DL-focused predictive scheduling research projects (search snippet, devopsschool.com).
- **Why now:** [Inferred]: Hyperscaler AI capex of >$320B in FY2025 (search snippet, evolvancemarketresearch.com) is forcing enterprises and labs to extract utilization from existing GPU fleets rather than buying more, per Dell'Oro's "from scale to optimization" framing of GTC 2026 (delloro.com, 2026).

## Founders & Team

- **Ismaeel Bashir (CEO):**
  - Background: Built first multimodal HPC resource predictor as research at EPCC, Edinburgh's Parallel Computing Centre (YC company page, May 2026); LinkedIn confirms Expanse affiliation (uk.linkedin.com/in/ismaeel-bashir).
  - Twitter/X: No public account found in search.
  - LinkedIn: "Expanse" — full headline not retrievable, profile at uk.linkedin.com/in/ismaeel-bashir.
  - GitHub: No public account confirmed via search.
- **Nikodem Bieniek (CTO):**
  - Background: Listed as CTO on YC company page (May 2026); no further public bio surfaced in search.
  - Twitter/X: No public account found.
  - LinkedIn: No public profile found via search (results returned unrelated names).
  - GitHub: No public account confirmed.
- **Yafet Melake (COO):**
  - Background: Software Engineer at G-Research (uk.linkedin.com/in/yafet-melake via search snippet), matching YC description of team running workloads at "largest quant funds" (YC company page).
  - Twitter/X: No public account found.
  - LinkedIn: "Software Engineer - G-Research" (uk.linkedin.com/in/yafet-melake via search snippet).
  - GitHub: No public account confirmed.
- **Eren Mendi (CPO):** Educated at Imperial College London, San Francisco Bay Area, focused on next-generation HPC infrastructure at Expanse (linkedin.com/in/eren-mendi-929b55138 via search snippet); Kaggle profile at kaggle.com/erenmendi; UK Companies House officer record under name "Eren Ziya MENDI" (find-and-update.company-information.service.gov.uk via search snippet).
- **Co-founder relationship:** [Inferred]: Edinburgh nexus — Bashir at EPCC and Mendi linked to Edinburgh University Trading and Investment Club (rocketreach.co via search snippet) suggest University of Edinburgh as a shared prior environment; not confirmed for all four.
- **Founder-market fit:** Team's stated prior roles at national supercomputing centres and quant funds (YC company page, May 2026) plus Bashir's EPCC research on HPC resource prediction (YC company page) align with the on-prem HPC GPU customer profile.

## Key Risks

- **Incumbent substitution:** NVIDIA Run:ai is bundled with NVIDIA's GPU stack post-acquisition (run.ai) and could add prediction features, eroding Expanse's wedge; no mitigation publicly disclosed.
- **Customer concentration in slow-procurement segment:** National supercomputing centres and quant funds (YC company page, May 2026) have long procurement cycles and limited buyer counts, capping early ARR velocity; no mitigation disclosed.
- **Technical feasibility at production scale:** EPCC research predictor "beat every published baseline" (YC company page) on benchmarks, but generalization across heterogeneous GPU fleets and Slurm/Kubernetes variants is unproven publicly.
- **Name collision / brand confusion:** "Expanse" is also the name of SDSC's supercomputer at UC San Diego (today.ucsd.edu, sdsc.edu), an Anthropic-era YC startup elsewhere, and a Palo Alto Networks product (formerly Expanse Inc., palo alto acquisition) — risks SEO and enterprise sales clarity; partially mitigated by .sh domain and "Expanse Compute Inc." legal name (expanse.sh, May 2026).
- **Distribution sparse public footprint:** No Product Hunt launch, no press coverage, and no disclosed customer logos found as of May 2026 (search across producthunt.com, May 2026); social handles exist but follower counts not retrievable.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI GPU Orchestration Platforms: +$6.59B 2026–2030 at 25.9% CAGR (Technavio, 2026); AI Infrastructure: $142.8B in 2026 (Evolvance Market Research, 2026) |
| SAM | No public data found |
| Traction | 32-GPU customer example at 37% utilization shown on site (expanse.sh, May 2026); YC Spring 2026 batch (YC company page, May 2026); 0 open jobs (YC company page, May 2026) |
| Revenue Signal | No public pricing or revenue disclosed (expanse.sh, May 2026) |
| Founders | Ismaeel Bashir (CEO): EPCC HPC predictor research. Nikodem Bieniek (CTO): role per YC page. Yafet Melake (COO): software engineer at G-Research. Eren Mendi (CPO): Imperial College London, Expanse |
| Competitors | NVIDIA Run:ai (acquired by NVIDIA, revenue unknown, K8s GPU scheduler); Rafay Systems ($89M+ raised per public sources, revenue unknown, GPU PaaS); WoolyAI (funding unknown, revenue unknown, GPU sharing for ML dev); Slurm (open source, default HPC scheduler) |
| Moat Signals | EPCC-origin multimodal HPC resource predictor "beat every published baseline" (YC company page, May 2026) |
| Risk Factors | NVIDIA Run:ai substitution, slow HPC procurement, "Expanse" name collision |
| Founder Reach | Bashir: Twitter not found, LinkedIn count not retrievable, GitHub not found. Bieniek: not found. Melake: LinkedIn count not retrievable, others not found. Mendi: LinkedIn count not retrievable, Kaggle profile present |
| Distribution Signals | Booking link book.getexpanse.io (YC company page, May 2026); free OS Wastage Scanner at wastage.expanse.sh (expanse.sh, May 2026); no Product Hunt launch found |
| Emails | founders@expanse.org.uk, contact@expanse.org.uk (expanse.sh, May 2026) |
