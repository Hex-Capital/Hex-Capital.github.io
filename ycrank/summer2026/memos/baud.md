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

- **Problem:** Frontier-model developers face compute requirements exemplified by NVIDIA’s Nemotron recipe using 6,144 H100 GPUs for about three months and drawing 4.3 MW, with Baud estimating $44M of rentals or $245M of capex ([YC, Aug 2026](https://www.ycombinator.com/companies/baud)).
- **Approach:** Baud represents neural networks without multiplications in forward or backward passes, pairs that representation with a multiplier-free ASIC, and compiles PyTorch-exportable models into its format ([Baud, Aug 2026](https://baudlabs.ai/)).
- **Differentiation:** Baud says its arithmetic representation changes the model-math layer, whereas named alternatives Cerebras, Groq, Etched and d-Matrix primarily differentiate through accelerator architecture and systems ([YC, Aug 2026](https://www.ycombinator.com/companies/baud)).
- **Business Model:** [Inferred]: The early-access cluster and reserved-capacity program indicate consumption- or capacity-based training and inference services, with no public prices yet ([Baud, Aug 2026](https://baudlabs.ai/)).
- **TAM/SAM:** The global AI-accelerator market was $25.6B in 2024 and is forecast to reach $256.8B in 2033 at a 29.3% CAGR from 2025–2033 ([Grand View Research, Jul 2026](https://www.grandviewresearch.com/industry-analysis/ai-accelerator-market-report)).
- **GTM / Distribution:** Baud is recruiting design partners to test FPGA-emulated systems in exchange for reserved capacity on its first cluster ([YC, Aug 2026](https://www.ycombinator.com/companies/baud)).

## Defensibility

- **Moat today:** Baud reports a multiplier-free representation, purpose-built ASIC architecture, PyTorch compiler, distributed-training stack and GlobalFoundries 12nm process validation, creating technical implementation complexity ([YC, Aug 2026](https://www.ycombinator.com/companies/baud)).
- **Future moat:** [Inferred]: Model-conversion tooling, training recipes and workload feedback from design partners could create toolchain switching costs, but usage and retention data are not public.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Cerebras, Groq, Etched and d-Matrix already fund alternative wafer-scale, LPU, low-voltage and in-memory accelerator stacks with disclosed financing from $450M to several billion dollars ([competitor disclosures](https://www.d-matrix.ai/announcements/d-matrix-raises-275-million-to-power-the-age-of-ai-inference/)).

## Market & Traction

- **Traction signals:**
  - 1,000+ tokens per second for small-model inference on one FPGA emulating Baud’s ASIC ([Baud, Aug 2026](https://baudlabs.ai/)).
  - Training and inference service live on an FPGA-emulation cluster, with current design-partner engagement but no disclosed partner count ([YC, Aug 2026](https://www.ycombinator.com/companies/baud)).
  - First chip validated for GlobalFoundries’ 12nm process and scheduled for tape-out by year-end 2026 ([YC, Aug 2026](https://www.ycombinator.com/companies/baud)).
  - 419 LinkedIn followers following its July 2026 stealth exit ([LinkedIn, Aug 2026](https://www.linkedin.com/company/baud-labs-ai)).
  - 0 jobs posted on YC’s job platform ([YC Jobs, Aug 2026](https://www.ycombinator.com/companies/baud/jobs)).
  - [Inferred]: Prior product, not Baud traction—Cerelyze Inc.’s SuperCraft reported 20K+ users and 300K+ designs in 2025, while the current Baud site carries the same Cerelyze copyright but no public transition date ([SuperCraft, 2025](https://supercraft.ai/), [Baud, 2026](https://baudlabs.ai/)).
- **Competitors (minimum 3, up to 5):**
  - Cerebras ($2.91B private funding before a $5.5B May 2026 IPO, $510M 2025 revenue): wafer-scale processors support conventional-model training and inference rather than Baud’s multiplier-free representation ([Sacra, May 2026](https://sacra-pdfs.s3.us-east-2.amazonaws.com/cerebras-systems.pdf), [TechCrunch, May 2026](https://techcrunch.com/2026/05/14/cerebras-raises-5-5b-kicking-off-2026s-ipo-season-with-a-bang/)).
  - Groq ($3.253B raised, $500M 2025 revenue): operates an LPU-based inference cloud, while Baud targets both training and inference ([CB Insights, Aug 2026](https://www.cbinsights.com/company/groq), [Groq, Jun 2026](https://groq.com/newsroom/groq-raises-usd650m-to-scale-its-ai-inference-cloud-business)).
  - Etched (at least $1.1B raised, revenue unknown): builds transformer-focused inference clusters, while Baud also targets backward-pass training ([Etched, Jun–Jul 2026](https://www.globenewswire.com/news-release/2026/07/23/3332366/0/en/etched-raises-300m-at-a-10-3b-valuation-to-scale-production-of-frontier-scale-inference-hardware.html)).
  - d-Matrix ($450M raised, revenue unknown): uses digital in-memory compute for inference, versus Baud’s multiplier elimination across training and inference ([d-Matrix, Nov 2025](https://www.d-matrix.ai/announcements/d-matrix-raises-275-million-to-power-the-age-of-ai-inference/)).
- **Why now:** [Inferred]: Frontier training has reached thousands of GPUs and multi-megawatt power draw while Baud’s 2026 FPGA compiler and emulation stack make its alternative arithmetic testable before silicon tape-out ([YC, Aug 2026](https://www.ycombinator.com/companies/baud)).

## Founders & Team

- **Sarang Zambare (Founder & CEO):**
  - Background: Engineering-physics degrees from IIT Bombay and an MEng from UC Berkeley; ML lead for Peloton Guide through 100,000+ devices shipped, founding ML engineer at Caper before its Instacart acquisition, and named inventor on four patents ([YC, Aug 2026](https://www.ycombinator.com/companies/baud), [Startup Intros, Jul 2026](https://startupintros.com/people/sarang-zambare)).
  - Twitter/X: @sarangz11, 156 followers ([TwStalker, Jul 2026](https://www6.twstalker.com/sarangz11)).
  - LinkedIn: “Baud,” with 3K followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/sarang-zambare)).
  - GitHub: @sarangzambare; `hey-siri` has 17 stars ([GitHub, Aug 2026](https://github.com/sarangzambare)).
- **Eric Taylor (Founder & Chief Hardware Architect):**
  - Background: University of Texas at Austin; more than a decade in ASIC work, four tape-outs, two patents and prior roles at NVIDIA, Freescale/NXP, Arteris IP and Enfabrica ([LinkedIn, Jul 2026](https://www.linkedin.com/in/eric-taylor-995b923b), [YC, Aug 2026](https://www.ycombinator.com/companies/baud)).
  - Twitter/X: No public account found.
  - LinkedIn: “Baud,” with 837 followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/eric-taylor-995b923b)).
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Zambare’s edge-ML deployment and model-training history covers the software/model layer, while Taylor’s four tape-outs and prior semiconductor roles cover ASIC architecture ([YC, Aug 2026](https://www.ycombinator.com/companies/baud)).

## Key Risks

- **Physical-silicon validation:** Public performance is from FPGA emulation rather than a fabricated Baud ASIC; mitigation disclosed is 12nm process validation and a 1,000+ tokens-per-second FPGA demo ([Baud, Aug 2026](https://baudlabs.ai/)).
- **Model migration:** Baud says models must be trained in its representation or use a compatible base model, while its compiler produces bit-exact conversions only “in most cases” ([YC, Aug 2026](https://www.ycombinator.com/companies/baud)).
- **Tape-out execution:** The first chip remained scheduled, rather than completed, for year-end 2026; FPGA-based service provides an interim testing environment ([YC, Aug 2026](https://www.ycombinator.com/companies/baud)).
- **Competitive deployment:** Etched reports working silicon and over $1B in signed contracts, while Groq serves more than five million developers and d-Matrix reports deployment partners ([Etched, Jun 2026](https://www.globenewswire.com/news-release/2026/06/30/3319922/0/en/Etched-Emerges-From-Stealth-With-Working-Chip-800M-Raised-and-Over-1B-in-Customer-Contracts.html), [Groq, Jun 2026](https://groq.com/newsroom/groq-raises-usd650m-to-scale-its-ai-inference-cloud-business)).
- **Identity continuity and name ambiguity:** Cerelyze previously operated SuperCraft, the current Baud site retains the Cerelyze copyright, and unrelated BAUD technology and branding firms share the name; the `baudlabs.ai` domain and current YC profile provide disambiguation ([SuperCraft](https://supercraft.ai/), [unrelated BAUD](https://uk.linkedin.com/company/baud-tech)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $25.6B global AI-accelerator market in 2024, forecast to $256.8B by 2033 at 29.3% CAGR (Grand View Research, Jul 2026) |
| SAM | No public data found |
| Traction | 1,000+ tokens/second on one FPGA; FPGA training/inference cluster live; 12nm process validation; design partners active but count undisclosed (Baud website and YC, Aug 2026) |
| Revenue Signal | No public data found |
| Founders | Sarang Zambare (CEO): IIT Bombay/UC Berkeley, Peloton Guide ML lead, founding Caper ML engineer; Eric Taylor (Hardware Architect): UT Austin, four tape-outs, NVIDIA/Enfabrica/Arteris experience (YC, Aug 2026) |
| Competitors | Cerebras ($2.91B private funding, $510M 2025 revenue); Groq ($3.253B raised, $500M 2025 revenue); Etched (at least $1.1B raised, revenue unknown); d-Matrix ($450M raised, revenue unknown) (Sacra, CB Insights, Etched and d-Matrix, 2025–2026) |
| Moat Signals | Multiplier-free representation and ASIC architecture, PyTorch compiler, distributed-training stack and GlobalFoundries 12nm validation (Baud website and YC, Aug 2026) |
| Risk Factors | FPGA-only public validation, model-representation migration, pre-tape-out manufacturing status, funded accelerator competitors (Baud, YC and competitor disclosures, 2025–2026) |
| Founder Reach | Sarang: X 156, LinkedIn 3K, GitHub top repo 17 stars; Eric: LinkedIn 837, no public X or GitHub data found (TwStalker, LinkedIn and GitHub, Jul–Aug 2026) |
| Distribution Signals | 419 LinkedIn followers, July 2026 stealth exit, design-partner early access, 0 YC job postings (LinkedIn and YC, Aug 2026) |
| Emails | No public data found |
