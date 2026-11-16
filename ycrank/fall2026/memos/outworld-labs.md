# Outworld Labs

> Robotics simulation indistinguishable from reality

| Field | Value |
|-------|-------|
| Website | https://outworldlabs.com |
| YC Page | https://www.ycombinator.com/companies/outworld-labs |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/outworld-labs)) |
| Industry | B2B / B2B |
| Team Size |  |
| Location | San Francisco, CA, USA |
| Tags | Robotics |
| YC Partner | Pete Koomen ([YC](https://www.ycombinator.com/companies/outworld-labs)) |
| Emails | Matei Gardea: matei.gardea@berkeley.edu—archived teaching contact ([Berkeley staff directory, Fall 2024](https://inst.eecs.berkeley.edu/~cs188/archive/fa24/staff/)); Daniel Grant: dgrant@berkeley.edu—published institutional contact ([founder website](https://danielgrant.io/)); company-domain addresses: No public data found |

## The Idea

- **Problem:** Robot-learning teams collect training and evaluation data using physical robots, human operators, and repeated task resets, while inaccurate simulated physics can prevent learned behavior transferring to hardware ([YC launch](https://www.ycombinator.com/launches/XSo-outworld-labs-simulation-for-training-and-evaluating-robot-foundation-models)).
- **Approach:** Horizon combines a new physics engine for dexterous manipulation with environment creation, real-world data reconstruction and augmentation, and simulation-based training and evaluation ([YC launch](https://www.ycombinator.com/launches/XSo-outworld-labs-simulation-for-training-and-evaluating-robot-foundation-models)).
- **Differentiation:** Outworld emphasizes fitting simulation to measured robot behavior, versus Vsim’s on-demand robot learning, Isaac Sim’s rendering/sensor platform, and MuJoCo’s extensible physics library; comparative performance: No public data found ([Outworld](https://outworldlabs.com), [Vsim](https://www.vsimrobotics.ai/), [NVIDIA](https://docs.isaacsim.omniverse.nvidia.com/latest/index.html), [DeepMind](https://deepmind.google/blog/open-sourcing-mujoco/)).
- **Business Model:** [Inferred]: Commercial simulator access is a possible monetization path because the website describes selling a calibrated model of reality; pricing structure: No public data found ([company website](https://outworldlabs.com)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** The founders use their YC launch to invite robot foundation-model and evaluation teams to discuss workflows and potential collaboration ([YC launch](https://www.ycombinator.com/launches/XSo-outworld-labs-simulation-for-training-and-evaluating-robot-foundation-models)).

## Defensibility

- **Moat today:** Company-described technical assets include a dexterous-manipulation physics engine and a process that measures hardware behavior, fits a model, and reports agreement with reality ([YC](https://www.ycombinator.com/companies/outworld-labs), [company website](https://outworldlabs.com)).
- **Future moat:** [Inferred]: Accumulated hardware-validation datasets could improve calibration across robot configurations, but exclusive datasets or customer deployment evidence: No public data found ([company website](https://outworldlabs.com)).
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given existing corporate-backed simulation development by NVIDIA, Google DeepMind, and Disney Research ([Newton documentation](https://docs.isaacsim.omniverse.nvidia.com/latest/physics/newton_physics.html)).
- **Commoditization risk:** [Inferred]: Open-source Newton and MuJoCo provide reusable physics infrastructure that could reduce the development work required for competing tools ([NVIDIA](https://docs.isaacsim.omniverse.nvidia.com/latest/physics/newton_physics.html), [DeepMind](https://deepmind.google/blog/open-sourcing-mujoco/)).

## Market & Traction

- **Traction signals:**
  - Founder-reported tie for first place at YC’s F26 Product Showcase, Group 1 ([Daniel Grant’s X post, September 28, 2026, reproduced by teapawt](https://xitter.gq/danieljgrant)).
  - Company X account @outworldlabs: 23 followers ([teapawt mirror, accessed November 15, 2026](https://xitter.gq/outworldlabs)).
  - Zero listed YC job openings ([YC Jobs, accessed November 15, 2026](https://www.ycombinator.com/companies/outworld-labs/jobs)).
- **Competitors:**
  - **Vsim ($24M disclosed funding; revenue unknown):** latest disclosed round found was $21.5M in September 2024, led by EQT Ventures; its current positioning extends to on-demand robot learning and adaptation using internal physics models ([IQ Capital, September 2024](https://www.iqcapital.vc/news/vsim-founded-by-nvidia-alums-raises-24m-for-robotics-simulation-tech), [Vsim](https://www.vsimrobotics.ai/)).
  - **NVIDIA Isaac Sim (standalone funding: No public data found; product revenue unknown):** corporate-backed, open-source simulator integrating RTX rendering, sensors, synthetic data, and PhysX/Newton backends, compared with Outworld’s measured-hardware calibration emphasis ([NVIDIA documentation](https://docs.isaacsim.omniverse.nvidia.com/latest/index.html), [Outworld](https://outworldlabs.com)).
  - **Google DeepMind MuJoCo (standalone funding: No public data found; revenue unknown):** acquired by DeepMind in 2021 and fully open-sourced in 2022, offering an extensible physics library rather than Outworld’s proposed integrated workflow ([DeepMind, May 2022](https://deepmind.google/blog/open-sourcing-mujoco/), [YC](https://www.ycombinator.com/companies/outworld-labs)).
- **Why now:** [Inferred]: NVIDIA’s October 2025 release of Newton within Isaac Lab alongside GR00T N1.6 expanded available infrastructure for simulation-based robot learning, creating a catalyst for competing validation tools ([NVIDIA, October 2025](https://investor.nvidia.com/news/press-release-details/2025/NVIDIA-Accelerates-Robotics-Research-and-Development-With-New-Open-Models-and-Simulation-Libraries/default.aspx)).

## Founders & Team

- **Matei Gardea (Co-founder/CEO):**
  - Background: Berkeley BA/MEng EECS, robotics research at BAIR, Royal Bank of Canada experience, and Head TA work; published institutional email: matei.gardea@berkeley.edu ([YC founder profile](https://www.ycombinator.com/founders/matei-gardea), [Berkeley staff archive](https://inst.eecs.berkeley.edu/~cs188/archive/fa24/staff/)).
  - Twitter/X: @mateigardea, 46 followers ([teapawt mirror, accessed November 15, 2026](https://xitter.gq/mateigardea)).
  - LinkedIn: indexed profile title associates him with Berkeley Artificial Intelligence Research; headline not retrievable; indexed snapshot shows 20 followers ([LinkedIn, via search snippet, retrieved November 2026](https://www.linkedin.com/in/matei-gardea)).
  - GitHub: @mateig; profile-listed repository `beagle`, a local browsing-history search tool, has 0 stars ([GitHub, accessed November 15, 2026](https://github.com/mateig/beagle)).
- **Daniel Grant (Co-founder/CTO):**
  - Background: Berkeley MEng EECS, Bowdoin mathematics/computer science degrees, Oxford visiting study, and research with BAIR, Google DeepMind, NASA, and Oxford Robotics Institute; published email: dgrant@berkeley.edu ([YC founder profile](https://www.ycombinator.com/founders/daniel-grant), [founder website](https://danielgrant.io/)).
  - Twitter/X: @danieljgrant, 19 followers ([teapawt mirror, accessed November 15, 2026](https://xitter.gq/danieljgrant)).
  - LinkedIn: indexed profile title associates him with Berkeley Artificial Intelligence Research; headline not retrievable; indexed snapshot shows 698 followers ([LinkedIn, via search snippet, retrieved November 2026](https://www.linkedin.com/in/daniel-grant-a85683221)).
  - GitHub: @DJRGVC; pinned `Exploring-Computational-Geometry` repository has 3 stars ([GitHub, accessed November 15, 2026](https://github.com/DJRGVC/Exploring-Computational-Geometry)).
- **Co-founder relationship:** The founders met during their Berkeley EECS master’s studies; LinkedIn lists two associated employees ([YC launch](https://www.ycombinator.com/launches/XSo-outworld-labs-simulation-for-training-and-evaluating-robot-foundation-models), [company LinkedIn, November 2026](https://www.linkedin.com/company/outworld-labs/)).
- **Founder-market fit:** [Inferred]: Their BAIR robotics research and Grant’s work on legged-robot control and computational fluid dynamics relate to simulation and robot-learning development ([Gardea’s YC profile](https://www.ycombinator.com/founders/matei-gardea), [Grant’s website](https://danielgrant.io/)).

## Key Risks

- **Technical transfer:** [Inferred]: Incorrect contact dynamics could produce policies that fail on hardware; Outworld proposes measuring actual behavior and reporting model agreement, but numerical validation results: No public data found ([company website](https://outworldlabs.com)).
- **Free substitution:** [Inferred]: Free MuJoCo and open-source Isaac Sim could constrain willingness to pay unless Outworld demonstrates additional workflow or accuracy benefits ([DeepMind](https://deepmind.google/blog/open-sourcing-mujoco/), [NVIDIA](https://docs.isaacsim.omniverse.nvidia.com/latest/index.html)).
- **Calibration scalability:** [Inferred]: Fitting models to measured robot behavior could require additional data collection as hardware and environments change; calibration time and cross-configuration transfer results: No public data found ([company website](https://outworldlabs.com)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Founder-reported joint first, YC F26 Group 1 Showcase (September 2026); company X: 23 followers ([X posts/accounts via teapawt, November 2026](https://xitter.gq/outworldlabs), [founder announcement](https://xitter.gq/danieljgrant)) |
| Revenue Signal | No public data found |
| Founders | Matei Gardea, CEO: Berkeley BA/MEng, BAIR, RBC ([YC](https://www.ycombinator.com/founders/matei-gardea)); Daniel Grant, CTO: Berkeley/Bowdoin, BAIR, DeepMind, NASA ([YC](https://www.ycombinator.com/founders/daniel-grant)) |
| Competitors | Vsim: $24M disclosed, revenue unknown, on-demand learning ([IQ Capital](https://www.iqcapital.vc/news/vsim-founded-by-nvidia-alums-raises-24m-for-robotics-simulation-tech), [Vsim](https://www.vsimrobotics.ai/)); Isaac Sim: funding undisclosed, revenue unknown, rendering/sensor platform ([NVIDIA](https://docs.isaacsim.omniverse.nvidia.com/latest/index.html)); MuJoCo: funding undisclosed, revenue unknown, open-source physics library ([DeepMind](https://deepmind.google/blog/open-sourcing-mujoco/)) |
| Moat Signals | Company-described custom physics engine and measured-behavior model fitting ([YC](https://www.ycombinator.com/companies/outworld-labs), [Outworld](https://outworldlabs.com)) |
| Risk Factors | Simulation-to-hardware mismatch ([Outworld](https://outworldlabs.com)); free simulator alternatives ([DeepMind](https://deepmind.google/blog/open-sourcing-mujoco/)) |
| Founder Reach | Gardea: X 46; Grant: X 19 ([teapawt, November 2026](https://xitter.gq/mateigardea), [Grant](https://xitter.gq/danieljgrant)); LinkedIn indexed snapshots: 20 and 698 respectively ([LinkedIn via search snippets](https://www.linkedin.com/in/matei-gardea), [Grant](https://www.linkedin.com/in/daniel-grant-a85683221)) |
| Distribution Signals | YC launch and invitation to robotics teams ([YC launch, November 2026](https://www.ycombinator.com/launches/XSo-outworld-labs-simulation-for-training-and-evaluating-robot-foundation-models)) |
| Emails | Matei: matei.gardea@berkeley.edu, archived teaching contact ([Berkeley, Fall 2024](https://inst.eecs.berkeley.edu/~cs188/archive/fa24/staff/)); Daniel: dgrant@berkeley.edu, published institutional contact ([founder website](https://danielgrant.io/)) |
