# Baud

> AI chips for ultra-fast model training and inference

| Field | Value |
|-------|-------|
| Website | https://baudlabs.ai |
| YC Page | https://www.ycombinator.com/companies/baud |
| Batch | Summer 2026 |
| Industry | Industrials / Industrials |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Hard Tech, Semiconductors, AI |
| YC Partner | Diana Hu |
| Emails | No public data found |

## The Idea

- **Problem:** Frontier-model developers face GPU-cluster costs and power requirements exemplified by a reported Nemotron training run using 6,144 H100 GPUs for approximately three months and 4.3 MW, with distributed GPU infrastructure as the current alternative ([YC Launch](https://www.ycombinator.com/launches/RCj-baud-ai-chips-for-accelerated-training-and-inference), Jul 2026).
- **Approach:** Baud co-designs a multiplier-free neural-network representation and ASIC, replacing multipliers with additions, compressing weights by more than 10×, and compiling PyTorch-exportable models into that representation ([Baud website](https://baudlabs.ai/), Jul 2026; [YC Launch](https://www.ycombinator.com/launches/RCj-baud-ai-chips-for-accelerated-training-and-inference), Jul 2026).
- **Differentiation:** Baud says NVIDIA tensor cores, Google TPU processing elements, Cerebras, Groq, Etched, and d-Matrix retain conventional model arithmetic or existing weights, while Baud changes both forward and backward passes and therefore requires models trained in its representation ([YC Launch](https://www.ycombinator.com/launches/RCj-baud-ai-chips-for-accelerated-training-and-inference), Jul 2026).
- **Business Model:** [Inferred]: Monetization would likely use reserved-capacity or consumption pricing for training, fine-tuning, post-training, and inference on Baud-operated clusters because the company is accepting early-access applications and capacity reservations, but no prices are published.
- **TAM/SAM:** The data-center accelerator market was $17.67B in 2024 and is forecast to reach $63.22B in 2030 at a 24.7% CAGR from 2025–2030 ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/data-center-accelerator-market-report), accessed Jul 2026).
- **GTM / Distribution:** Baud recruits design partners and early-access users who test its FPGA-emulated service in exchange for reserved capacity on its first production cluster ([YC Launch](https://www.ycombinator.com/launches/RCj-baud-ai-chips-for-accelerated-training-and-inference), Jul 2026).

## Defensibility

- **Moat today:** Baud has an integrated arithmetic representation, ASIC architecture, PyTorch compiler, and distributed training stack, with the design validated for GlobalFoundries’ 12 nm process and FPGA emulation operating before tape-out ([YC Launch](https://www.ycombinator.com/launches/RCj-baud-ai-chips-for-accelerated-training-and-inference), Jul 2026).
- **Future moat:** [Inferred]: Production tape-outs, compiler coverage, model-format adoption, and workload data from design partners could create technical know-how and switching costs, but these remain unproven before production deployments.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Cerebras, Groq, Etched, d-Matrix, NVIDIA, and hyperscalers can develop alternative ASIC and model–hardware co-designs, with the four startup competitors having raised approximately $450M–$3.9B each ([d-Matrix](https://www.d-matrix.ai/announcements/d-matrix-raises-275-million-to-power-the-age-of-ai-inference/), Nov 2025; [Owler](https://www.owler.com/company/groq/funding), Jun 2026).

## Market & Traction

- **Traction signals:**
  - Current product: An FPGA-emulated cluster supports pretraining, fine-tuning, RL post-training, and inference, with an unnumbered design-partner program open ([Baud website](https://baudlabs.ai/), Jul 2026).
  - Current product: A 50M-parameter proof-of-concept trained on 5M tokens runs at 1,000+ tokens per second on one U200 FPGA clocked at 125 MHz ([Baud demo](https://baudlabs.ai/demo), Jul 2026).
  - Current product: The first ASIC design is validated for GlobalFoundries’ 12 nm process and scheduled for tape-out by year-end 2026 ([YC Launch](https://www.ycombinator.com/launches/RCj-baud-ai-chips-for-accelerated-training-and-inference), Jul 2026).
  - Current product: 94 votes on its YC launch page ([YC Launch](https://www.ycombinator.com/launches/RCj-baud-ai-chips-for-accelerated-training-and-inference), Jul 2026).
  - Current product: One LinkedIn ASIC role recorded 74 applicants, while YC currently lists zero jobs ([LinkedIn](https://www.linkedin.com/jobs/view/founding-asic-architect-rtl-fpga-lead-at-baud-4383296449), Apr 2026; [YC profile](https://www.ycombinator.com/companies/baud), Jul 2026).
  - Prior product, SuperCraft—not Baud: 20K+ users and 300K+ designs under the same Cerelyze legal entity ([SuperCraft](https://supercraft.ai/), 2025).
- **Competitors (minimum 3, up to 5):**
  - Cerebras ($2.91B raised, $510M 2025 revenue): wafer-scale processors support conventional-model training and inference, versus Baud’s multiplier-free representation and ASIC ([Sacra](https://sacra-pdfs.s3.us-east-2.amazonaws.com/cerebras-systems.pdf), May 2026).
  - Groq ($3.9B raised, $500M 2025 revenue): operates an inference-only LPU cloud, versus Baud’s planned training-and-inference platform ([Owler](https://www.owler.com/company/groq/funding), Jun 2026; [CB Insights](https://www.cbinsights.com/company/groq/financials), 2026).
  - Etched ($1.1B raised, revenue unknown): builds inference systems using separate prefill and cluster-scale-memory technologies, versus Baud’s multiplier-free forward and backward passes ([Etched announcement](https://www.globenewswire.com/news-release/2026/06/30/3319922/0/en/Etched-Emerges-From-Stealth-With-Working-Chip-800M-Raised-and-Over-1B-in-Customer-Contracts.html), Jun 2026; [TechCrunch](https://techcrunch.com/2026/07/23/ai-chip-startup-etched-defies-skeptics-hits-10-3b-valuation-from-big-name-investors/), Jul 2026).
  - d-Matrix ($450M raised, revenue unknown): uses digital in-memory compute for inference, versus Baud’s combined training-and-inference architecture ([d-Matrix](https://www.d-matrix.ai/announcements/d-matrix-raises-275-million-to-power-the-age-of-ai-inference/), Nov 2025).
- **Why now:** [Inferred]: Frontier training has crossed into multi-thousand-GPU, multi-megawatt deployments, creating a cost-and-power threshold for arithmetic and hardware co-design rather than incremental GPU scaling ([YC Launch](https://www.ycombinator.com/launches/RCj-baud-ai-chips-for-accelerated-training-and-inference), Jul 2026).

## Founders & Team

- **Sarang Zambare (Founder & CEO):**
  - Background: IIT Bombay engineering-physics graduate and UC Berkeley MEng who led ML for Peloton Guide through 100,000+ shipped devices, was Caper’s founding ML engineer before its Instacart acquisition, and holds four patents ([YC profile](https://www.ycombinator.com/companies/baud), Jul 2026; [Startup Intros](https://startupintros.com/people/sarang-zambare), Jul 2026).
  - Twitter/X: @sarangz11, 156 followers ([TwStalker](https://www6.twstalker.com/sarangz11), Jul 2026).
  - LinkedIn: “Baud,” with 3K followers ([LinkedIn](https://www.linkedin.com/in/sarang-zambare), Jul 2026).
  - GitHub: No public repos found.
- **Eric Taylor (Founder & Chief Hardware Architect):**
  - Background: Rose-Hulman and UT Austin computer-architecture education with more than a decade in ASIC design, four tape-outs, two patents, and roles at NVIDIA, Freescale/NXP, Arteris, and Enfabrica ([YC profile](https://www.ycombinator.com/companies/baud), Jul 2026; [LinkedIn](https://www.linkedin.com/in/eric-taylor-995b923b), Jul 2026).
  - Twitter/X: No public account found.
  - LinkedIn: “Baud,” with 837 followers ([LinkedIn](https://www.linkedin.com/in/eric-taylor-995b923b), Jul 2026).
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Zambare’s edge-ML deployment and patent history covers model representation and compilation, while Taylor’s four tape-outs and ASIC roles cover silicon implementation ([YC profile](https://www.ycombinator.com/companies/baud), Jul 2026).

## Key Risks

- **Scale-validation risk:** Public evidence covers a 50M-parameter, 5M-token FPGA proof of concept, while the production ASIC has not yet taped out, so frontier-scale performance and fabrication yield remain unverified ([Baud demo](https://baudlabs.ai/demo), Jul 2026; [YC Launch](https://www.ycombinator.com/launches/RCj-baud-ai-chips-for-accelerated-training-and-inference), Jul 2026).
- **Model-compatibility risk:** Existing weights cannot run directly because models must be trained in Baud’s representation, and the compiler reports bit-exact conversion only “in most cases”; PyTorch export support is the disclosed mitigation ([YC Launch](https://www.ycombinator.com/launches/RCj-baud-ai-chips-for-accelerated-training-and-inference), Jul 2026).
- **Competitive-capital risk:** Cerebras, Groq, Etched, and d-Matrix have production or customer-testing systems and have raised $450M–$3.9B each, while Baud’s disclosed current hardware remains FPGA-emulated ([d-Matrix](https://www.d-matrix.ai/announcements/d-matrix-raises-275-million-to-power-the-age-of-ai-inference/), Nov 2025; [Owler](https://www.owler.com/company/groq/funding), Jun 2026).
- **Product-history and name-disambiguation risk:** Cerelyze operated the SuperCraft design product in 2025 and now identifies Baud as its 2026 product, while third-party databases still conflate SuperCraft’s S23 profile and metrics with baudlabs.ai; the current YC S26 page and company website provide the controlling identification ([SuperCraft](https://supercraft.ai/), 2025; [Baud website](https://baudlabs.ai/), Jul 2026; [YC profile](https://www.ycombinator.com/companies/baud), Jul 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $17.67B in 2024, forecast to $63.22B by 2030 at 24.7% CAGR ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/data-center-accelerator-market-report), 2025–2030 forecast) |
| SAM | No public data found |
| Traction | FPGA cluster live; 1,000+ tokens/second on a 50M-parameter proof of concept; ASIC scheduled for 2026 tape-out ([Baud website](https://baudlabs.ai/), Jul 2026; [Baud demo](https://baudlabs.ai/demo), Jul 2026) |
| Revenue Signal | No public data found |
| Founders | Sarang Zambare (CEO): Peloton ML lead, Caper founding ML engineer, four patents; Eric Taylor (Chief Hardware Architect): four tape-outs, two patents, NVIDIA/Enfabrica experience ([YC profile](https://www.ycombinator.com/companies/baud), Jul 2026) |
| Competitors | Cerebras ($2.91B raised, $510M 2025 revenue, wafer-scale); Groq ($3.9B raised, $500M 2025 revenue, inference cloud); Etched ($1.1B raised, revenue unknown, inference systems); d-Matrix ($450M raised, revenue unknown, digital in-memory inference) ([Sacra](https://sacra-pdfs.s3.us-east-2.amazonaws.com/cerebras-systems.pdf), May 2026; [Owler](https://www.owler.com/company/groq/funding), Jun 2026; [TechCrunch](https://techcrunch.com/2026/07/23/ai-chip-startup-etched-defies-skeptics-hits-10-3b-valuation-from-big-name-investors/), Jul 2026; [d-Matrix](https://www.d-matrix.ai/announcements/d-matrix-raises-275-million-to-power-the-age-of-ai-inference/), Nov 2025) |
| Moat Signals | Multiplier-free representation, ASIC architecture, PyTorch compiler, distributed training stack, and GlobalFoundries 12 nm design validation ([YC Launch](https://www.ycombinator.com/launches/RCj-baud-ai-chips-for-accelerated-training-and-inference), Jul 2026) |
| Risk Factors | Production silicon not taped out, existing weights require retraining, compiler not universally bit-exact, funded accelerator competition ([YC Launch](https://www.ycombinator.com/launches/RCj-baud-ai-chips-for-accelerated-training-and-inference), Jul 2026) |
| Founder Reach | Zambare: X 156, LinkedIn 3K, no public GitHub repos; Taylor: no public X account, LinkedIn 837, no public GitHub repos ([TwStalker](https://www6.twstalker.com/sarangz11), Jul 2026; [Zambare LinkedIn](https://www.linkedin.com/in/sarang-zambare), Jul 2026; [Taylor LinkedIn](https://www.linkedin.com/in/eric-taylor-995b923b), Jul 2026) |
| Distribution Signals | 94 YC Launch votes; unnumbered early-access and design-partner program; prior product SuperCraft—not Baud—reported 20K+ users and 300K+ designs ([YC Launch](https://www.ycombinator.com/launches/RCj-baud-ai-chips-for-accelerated-training-and-inference), Jul 2026; [SuperCraft](https://supercraft.ai/), 2025) |
| Emails | No public data found |
