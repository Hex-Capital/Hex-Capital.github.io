# General Instinct

> Deploy AI into any edge device, fully offline, maximum performance.

| Field | Value |
|-------|-------|
| Website | https://general-instinct.com/ |
| YC Page | https://www.ycombinator.com/companies/general-instinct |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Robotics, Drones, Manufacturing |
| YC Partner | Nicolas Dessaigne |
| Emails | founders@general-instinct.com |

## The Idea

- **Problem:** Physical AI teams (robotics, drones, manufacturing) struggle to deploy frontier models reliably on-device when cloud connectivity is unavailable or latency-prohibitive (YC company page, 2026).
- **Approach:** Instinct Edge takes a model + target device + latency budget as inputs and outputs an offline runtime via distillation and quantization for Jetson, mobile NPUs, ARM CPUs, Apple Neural Engine, and Snapdragons (YC company page, 2026).
- **Differentiation:** Versus Edge Impulse (Qualcomm-acquired no-code TinyML platform) and Modular (cross-chip compiler/runtime for Apple/Google chips), General Instinct positions on frontier-model-class compression specifically into latency budgets ("any frontier model, any edge device") (general-instinct.com tagline; Edge Impulse blog; Modular blog).
- **Business Model:** No public pricing page found; [Inferred]: B2B per-deployment or per-device licensing of the Instinct Edge runtime, given the "model + device + budget → runtime" delivery model described on the YC page.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** [Inferred]: Direct sales to physical-AI teams (robotics, drone, manufacturing customers) given the named verticals on the YC page and the Jetson Orin NX production reference; no public GTM data found.

## Defensibility

- **Moat today:** No defensibility signals (patents, locked customers, proprietary data) found in public sources; production reference cites "111 ms cold start, 100% of decisions inside a 150 ms budget, zero cloud calls" on Jetson Orin NX as a technical capability claim (YC company page, 2026).
- **Future moat:** [Inferred]: Accumulated device/model compression profiles could yield a data moat over time; unproven now given 2-person team and Spring 2026 batch timing.
- **Market structure:** [Inferred]: Hardware-agnostic compression runtime conflicts with chipmaker SDKs (NVIDIA TensorRT, Qualcomm AI Engine) that monetize their own silicon, creating sales-channel conflict for incumbents — but no structural barrier proven at this stage.
- **Commoditization risk:** Quantization/distillation tooling is widely available open-source (llama.cpp, ONNX Runtime, TensorRT-LLM), and Qualcomm now owns Edge Impulse for the same workflow (Edge Impulse acquisition, Mar 10 2025, per Tracxn / CB Insights).

## Market & Traction

- **Traction signals:**
  - Production demo: multimodal classifier on Jetson Orin NX achieving 111 ms cold start, 100% within 150 ms budget, zero cloud calls (YC company page, 2026).
  - Funding: $500K from Y Combinator (PitchBook profile, 2026); a separate StartupHub.ai listing cites "$5M Raised" (StartupHub.ai, 2026) — figures conflict, $500K aligns with YC standard deal.
  - LinkedIn company page exists as "General Instinct (YC P26)" (linkedin.com/company/general-instinct); follower count not retrievable.
  - Co-founder social: Guanming Wang has ~30k Rednote followers (search snippet via LinkedIn references, 2026).
  - No Product Hunt launch, press coverage, Discord, Twitter, or paying-customer data found in public sources.
- **Competitors:**
  - Edge Impulse ($52.8M total raised, revenue unknown, acquired by Qualcomm Mar 2025; no-code TinyML platform — broader sensor/MCU focus vs. General Instinct's frontier-model focus) (Tracxn; CB Insights).
  - Modular ($380M total raised across 3 rounds, $1.6B valuation, revenue unknown; cross-hardware AI compute layer / MAX platform — datacenter+edge breadth vs. General Instinct's edge-only physical-AI focus) (Yahoo Finance / SDxCentral, 2025).
  - NimbleEdge ($3.32M raised, last round Dec 17 2021 from Neotribe, revenue unknown; on-device ML for mobile apps — consumer-app deployment focus vs. General Instinct's robotics/drone focus) (Tracxn; PitchBook).
  - NVIDIA TensorRT / Qualcomm AI Engine ([Inferred]: not standalone-funded; chipmaker-native SDKs lock to single silicon vendor vs. General Instinct's cross-device promise).
- **Why now:** [Inferred]: Frontier model sizes (multimodal VLMs, robotics foundation models) crossed feasibility threshold for on-device compression in 2024–2025, and Jetson Orin / Apple Neural Engine / Snapdragon NPUs now expose enough TOPS to run them with sub-150ms budgets (Jetson AGX Orin: 275 TOPS, per NVIDIA / Promwad 2025).

## Founders & Team

- **Bill Jiao (Co-founder):**
  - Background: Worked on Siemens' first multimodal foundation model; filed 2 patents on tardigrade proteins as a junior in high school; international student in ML vision research (LinkedIn search snippet, 2026; YC page).
  - Twitter/X: No public account found.
  - LinkedIn: "co-founder of General Instinct (YC P26)" at linkedin.com/in/zhandong-jiao/ (LinkedIn, 2026); follower count not retrievable (LinkedIn blocked WebFetch).
  - GitHub: No public repos found.
- **Guanming Wang (Co-founder):**
  - Background: Ex-DeepMind; MPhil Advanced Computer Science, University of Cambridge; Google DeepMind AI Masters Scholarship recipient; Agno Global Agent Hackathon 2025 winner ($5,000 cash); tech-influencer audience of ~30k followers on Rednote (LinkedIn search snippet, 2026; Agno hackathon results, 2025).
  - Twitter/X: No public account found.
  - LinkedIn: "General Instinct (YC P26)" at uk.linkedin.com/in/guanming-wang (LinkedIn, 2026); follower count not retrievable (LinkedIn blocked WebFetch).
  - GitHub: No public repos found.
- **Co-founder relationship:** Both founders described as "international students deep into ML vision research who dreamed of building startups since high school" (LinkedIn post search snippet, 2026); no shared prior employer or university confirmed in public sources.
- **Founder-market fit:** Jiao's Siemens multimodal foundation model work and Wang's DeepMind ML research provide direct frontier-model expertise relevant to the model-compression-to-edge thesis (YC page; LinkedIn snippets, 2026); no advisors or board members listed publicly.

## Key Risks

- **Incumbent substitution from Qualcomm/Edge Impulse:** Qualcomm acquired Edge Impulse on Mar 10, 2025 (Tracxn / CB Insights) and bundles a no-code edge-AI workflow with its Snapdragon NPUs — one of General Instinct's listed target devices — creating direct overlap on the Snapdragon target.
- **Commoditization by open-source tooling:** Distillation and quantization are available via llama.cpp, ONNX Runtime, and TensorRT-LLM (Promwad, 2025; NVIDIA developer blog), so the runtime's value depends on performance gains not yet independently verified beyond the single Jetson Orin NX reference (YC company page, 2026).
- **Hardware-vendor channel conflict:** NVIDIA (TensorRT), Apple (Core ML), Qualcomm (AI Engine) ship first-party compilers for their own silicon (NVIDIA developer blog, 2025), and a third-party cross-device runtime risks losing certification or co-marketing access on each platform.
- **Technical feasibility at promised generality:** The "any frontier model, any edge device, within any latency budget" claim (general-instinct.com tagline) is currently supported by one cited production result (Jetson Orin NX multimodal classifier, per YC page); coverage of mobile NPUs, ARM CPUs, Apple Neural Engine, Snapdragons at frontier-model scale not publicly demonstrated.
- **Funding figure ambiguity:** PitchBook lists $500K (PitchBook 2026 profile) while StartupHub.ai lists "$5M Raised" (StartupHub.ai, 2026) — figures conflict; treat unverified.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Jetson Orin NX production demo: 111 ms cold start, 100% decisions within 150 ms budget, zero cloud calls (YC page, 2026); LinkedIn company page live (LinkedIn, 2026); Guanming Wang 30k Rednote followers (LinkedIn snippet, 2026) |
| Revenue Signal | No public data found |
| Founders | Bill Jiao (Co-founder): Siemens multimodal foundation model, 2 high-school patents on tardigrade proteins. Guanming Wang (Co-founder): ex-DeepMind, Cambridge MPhil ACS, Google DeepMind AI Masters Scholarship, Agno Hackathon 2025 winner ($5K). |
| Competitors | Edge Impulse ($52.8M raised, revenue unknown, Qualcomm-acquired Mar 2025, no-code TinyML); Modular ($380M raised, revenue unknown, cross-hardware AI compute layer); NimbleEdge ($3.32M raised, revenue unknown, on-device mobile-app ML) |
| Moat Signals | No public data found |
| Risk Factors | Qualcomm/Edge Impulse substitution on Snapdragon target, commoditization by open-source quantization tooling, hardware-vendor channel conflict, single-reference technical proof |
| Founder Reach | Bill Jiao: Twitter not found, LinkedIn count not retrievable, GitHub not found. Guanming Wang: Twitter not found, LinkedIn count not retrievable, GitHub not found, Rednote 30k followers (LinkedIn snippet, 2026) |
| Distribution Signals | No public data found |
| Emails | founders@general-instinct.com (YC company page, 2026) |

Sources:
- [General Instinct YC company page](https://www.ycombinator.com/companies/general-instinct)
- [General Instinct website](https://general-instinct.com/)
- [Bill Jiao LinkedIn](https://www.linkedin.com/in/zhandong-jiao/)
- [Guanming Wang LinkedIn](https://uk.linkedin.com/in/guanming-wang)
- [General Instinct PitchBook profile](https://pitchbook.com/profiles/company/1377808-66)
- [General Instinct StartupHub.ai listing](https://www.startuphub.ai/startups/general-instinct)
- [Edge Impulse Tracxn](https://tracxn.com/d/companies/edge-impulse/__s6_c98wLfkcHG-rGQtTFNjy4q5RMOvLCUJOG16i-R48/funding-and-investors)
- [Modular $250M raise (Yahoo/Reuters)](https://finance.yahoo.com/news/ai-startup-modular-raises-250-160943605.html)
- [NimbleEdge Tracxn](https://tracxn.com/d/companies/nimbleedge/__pQHlf2vOg6Ajt4H9Tt4IP8ixxqlTXNGi_vZaCEZBR-s/funding-and-investors)
- [Edge AI platform comparison (Promwad)](https://promwad.com/news/choose-edge-ai-platform-jetson-kria-coral-2025)
- [NVIDIA Jetson edge AI developer blog](https://developer.nvidia.com/blog/getting-started-with-edge-ai-on-nvidia-jetson-llms-vlms-and-foundation-models-for-robotics/)
