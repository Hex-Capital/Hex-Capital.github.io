# Outworld Labs

> Robotics simulation indistinguishable from reality

| Field | Value |
|-------|-------|
| Website | https://outworldlabs.com |
| YC Page | https://www.ycombinator.com/companies/outworld-labs |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/outworld-labs)) |
| Industry | B2B / B2B |
| Team Size |  |
| Location | San Francisco, CA, USA |
| Tags | Robotics |
| YC Partner | Pete Koomen ([Y Combinator](https://www.ycombinator.com/companies/outworld-labs)) |
| Emails | matei.gardea@berkeley.edu, Matei Gardea’s published academic contact ([UC Berkeley CS 188 staff directory, Fall 2024](https://inst.eecs.berkeley.edu/~cs188/archive/fa24/staff/)); dgrant@berkeley.edu, Daniel Grant’s published contact ([Daniel Grant’s website](https://danielgrant.io/)) |

## The Idea

- **Problem:** Robot foundation-model teams collect training data and test policies on physical robots, which require operators and repeated resets, while inaccurate simulated physics can prevent policies from transferring to hardware ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/XSo-outworld-labs-simulation-for-training-and-evaluating-robot-foundation-models)).
- **Approach:** Horizon combines a physics engine designed for dexterous manipulation with tools to reconstruct environments and augment real-world data, and Outworld describes fitting the simulator to measured robot behavior and reporting the agreement ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/XSo-outworld-labs-simulation-for-training-and-evaluating-robot-foundation-models), [Outworld Labs website](https://outworldlabs.com/)).
- **Differentiation:** Horizon combines measured hardware agreement with scene reconstruction and model evaluation, NVIDIA Isaac Sim integrates GPU-accelerated physics with OpenUSD scene workflows, and MuJoCo Playground offers an open-source toolchain that fits simulated joint dynamics to logged hardware trajectories ([Outworld Labs website](https://outworldlabs.com/), [Launch YC](https://www.ycombinator.com/launches/XSo-outworld-labs-simulation-for-training-and-evaluating-robot-foundation-models), [NVIDIA](https://developer.nvidia.com/blog/newton-adds-contact-rich-manipulation-and-locomotion-capabilities-for-industrial-robotics/), [Google DeepMind](https://playground.mujoco.org/)).
- **Business Model:** No public data found.
- **TAM/SAM:** Meticulous Research estimates the broader robot simulation market at $2.5–3.5 billion in 2026 and forecasts 21% CAGR through 2035, including digital twins, synthetic data, compute, and services ([Meticulous Research, 2026–2035 outlook](https://www.meticulousresearch.com/meticulous-next/robot-simulation-outlook-2026-2035)).
- **GTM / Distribution:** The founders used Launch YC to share a demo and invite teams working on robot training and evaluation to discuss their workflows ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/XSo-outworld-labs-simulation-for-training-and-evaluating-robot-foundation-models)).

## Defensibility

- **Moat today:** Outworld describes a purpose-built manipulation engine and a workflow that fits simulated behavior to hardware measurements and reports agreement ([Outworld Labs website](https://outworldlabs.com/), [Launch YC](https://www.ycombinator.com/launches/XSo-outworld-labs-simulation-for-training-and-evaluating-robot-foundation-models)).
- **Future moat:** [Inferred]: A reusable library of hardware measurements and calibrated robot models could reduce setup time for later deployments, with reuse across robot platforms still unverified ([Outworld Labs website](https://outworldlabs.com/)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Google DeepMind already publishes hardware-trajectory fitting in MuJoCo Playground, and Meta publishes SuperDex’s tactile contact engine under an open-source license, giving other teams components for overlapping workflows ([Google DeepMind](https://playground.mujoco.org/), [Meta SuperDex](https://github.com/facebookresearch/project_superdex/blob/stable/README.md)).

## Market & Traction

- **Traction signals:**
  - Horizon publicly introduced on Nov 12, 2026, with a demo linked from the YC launch post ([Launch YC](https://www.ycombinator.com/launches/XSo-outworld-labs-simulation-for-training-and-evaluating-robot-foundation-models), [Nicheloom launch index](https://www.nicheloom.com/launches/92099/)).
  - Tied for first in Group 1 of the YC Product Showcase, per Daniel Grant ([Grant’s X post, Sep 28, 2026, via search snippet](https://www.xitter.gq/danieljgrant)).
  - Coverage in Azerbusiness and notacompany ([Azerbusiness, Nov 15, 2026](https://azerbusiness.az/layiheler/outworld-labs/), [notacompany, Nov 17, 2026](https://www.notacompany.com/archive/2026-11-17-the-engine-room-for-ai-made-video-and-audio)).
  - 24 followers on X, @outworldlabs ([X profile mirror, Nov 2026, via search snippet](https://www.xitter.gq/outworldlabs)).
  - 0 open roles on YC’s jobs board ([Y Combinator Jobs, Nov 2026](https://www.ycombinator.com/companies/outworld-labs/jobs)).
- **Competitors:**
  - **NVIDIA Isaac Sim / Newton** (standalone funding unavailable, revenue unknown) offers GPU-accelerated physics and OpenUSD integration with Isaac Lab for robot training and evaluation ([NVIDIA, Mar 2026](https://developer.nvidia.com/blog/newton-adds-contact-rich-manipulation-and-locomotion-capabilities-for-industrial-robotics/)).
  - **Google DeepMind MuJoCo Playground** (standalone funding unavailable, revenue unknown) offers open-source robot-learning environments and calibration from logged joint trajectories ([Google DeepMind](https://playground.mujoco.org/)).
  - **Meta Project SuperDex** (standalone funding unavailable, revenue unknown) publishes a contact-first engine for tactile sensing, robot authoring tools, and a reinforcement-learning interface ([Meta SuperDex](https://github.com/facebookresearch/project_superdex/blob/stable/README.md)).
  - **Genesis AI / Genesis World** ($605 million across disclosed rounds, revenue unknown) pairs an open-source simulator with its own robot, data-collection hardware, and foundation model, and raised a $500 million Series A in Nov 2026 co-led by Premji Invest, Khosla Ventures, and Eclipse ([Genesis AI seed disclosure](https://www.genesis.ai/news/press-release-gene-265), [Series A announcement](https://www.prnewswire.com/news-releases/genesis-ai-raises-500m-series-a-at-3-5b-valuation-to-master-human-level-dexterity-in-general-purpose-robots-and-deploy-at-scale-302941249.html), [Genesis World GitHub](https://github.com/Genesis-Embodied-AI/genesis-world)).
  - **DexForce / DexVerse** ($161 million raised per Tracxn as cited by GenesisIQ, RMB 100 million in first-half 2026 company revenue per Gasgoo) pairs simulation with fleet data collection and CAD-based deployment, and announced an RMB 1 billion Series B in Jun 2026 with participants including Shenzhen Capital Group and Qianhai Mother Fund ([GenesisIQ, Oct 2026](https://startup.genisisiq.com/dexforce-104aab/), [Gasgoo, Jul 2026](https://autonews.gasgoo.com/articles/news/seeds-dexforce-closes-1-billion-yuan-series-b-financing-round-valuation-exceeds-10-billion-yuan-2072327242154561537), [DexForce financing announcement](https://www.dexforce.com/en/news/crxdv3oam3ggjmj8rughfqnq), [DexVerse](https://www.dexforce.com/en/products/DexVerse)).
- **Why now:** [Inferred]: Newton’s March 2026 release added GPU-accelerated contact-rich manipulation to the Isaac ecosystem, widening access to parallel simulation for training dexterous robot policies ([NVIDIA, Mar 2026](https://developer.nvidia.com/blog/newton-adds-contact-rich-manipulation-and-locomotion-capabilities-for-industrial-robotics/)).

## Founders & Team

- **Matei Gardea (Founder/CEO)**
  - **Background:** UC Berkeley BA and MEng in EECS, Berkeley AI Research robotics researcher, former Royal Bank of Canada banking employee, and UC Berkeley AI head teaching assistant, with academic contact matei.gardea@berkeley.edu ([YC founder profile](https://www.ycombinator.com/founders/matei-gardea), [UC Berkeley CS 188](https://inst.eecs.berkeley.edu/~cs188/archive/fa24/staff/)).
  - **Twitter/X:** @mateigardea, 50 followers ([X profile mirror, Nov 2026, via search snippet](https://www.xitter.gq/mateigardea)).
  - **LinkedIn:** “Berkeley Artificial Intelligence Research” in the indexed profile title, with 20 followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/matei-gardea)).
  - **GitHub:** @mateig, `beagle`, 0 stars ([GitHub, Nov 2026](https://github.com/mateig/beagle)).
- **Daniel Grant (Founder/CTO)**
  - **Background:** UC Berkeley EECS MEng, Bowdoin degrees in mathematics and computer science, Oxford visiting scholar, and prior research at Berkeley AI Research, Google DeepMind, Oxford Robotics Institute, and NASA Ames, with published contact dgrant@berkeley.edu ([YC founder profile](https://www.ycombinator.com/founders/daniel-grant), [Daniel Grant’s website](https://danielgrant.io/)).
  - **Twitter/X:** @danieljgrant, 21 followers ([X profile mirror, Nov 2026, via search snippet](https://www.xitter.gq/danieljgrant)).
  - **LinkedIn:** “Berkeley Artificial Intelligence Research” in the indexed profile title, with 698 followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/daniel-grant-a85683221)).
  - **GitHub:** @DJRGVC, `Exploring-Computational-Geometry`, 3 stars ([GitHub, Nov 2026](https://github.com/DJRGVC/Exploring-Computational-Geometry)).
- **Co-founder relationship:** Gardea and Grant met during their EECS master’s studies at UC Berkeley, and LinkedIn lists both on the company page ([Launch YC](https://www.ycombinator.com/launches/XSo-outworld-labs-simulation-for-training-and-evaluating-robot-foundation-models), [Outworld Labs on LinkedIn](https://www.linkedin.com/company/outworld-labs/)).
- **Founder-market fit:** Both founders conducted robotics research at Berkeley AI Research, including Grant’s work on continual learning for legged robots, and YC lists Pete Koomen as primary partner ([Y Combinator](https://www.ycombinator.com/companies/outworld-labs), [Daniel Grant’s website](https://danielgrant.io/)).

## Key Risks

- **Sim-to-real fidelity:** Inaccurate contact dynamics can cause policies that succeed in simulation to fail on hardware, and Outworld’s stated mitigation is to fit models to physical measurements and report agreement ([Launch YC](https://www.ycombinator.com/launches/XSo-outworld-labs-simulation-for-training-and-evaluating-robot-foundation-models), [Outworld Labs website](https://outworldlabs.com/)).
- **Calibration effort:** [Inferred]: If calibration must be repeated for each robot or task setup, collecting physical measurements could reduce the time Horizon saves on data collection ([Outworld Labs website](https://outworldlabs.com/), [DEXTERA research paper](https://arxiv.org/abs/2609.21045)).
- **Open-source substitution:** [Inferred]: Teams can combine freely available tactile contact simulation and hardware calibration tools, which could narrow demand for a separate platform ([Meta SuperDex](https://github.com/facebookresearch/project_superdex/blob/stable/README.md), [Google DeepMind MuJoCo Playground](https://playground.mujoco.org/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader robot simulation market: $2.5–3.5 billion in 2026, 21% forecast CAGR through 2035 ([Meticulous Research](https://www.meticulousresearch.com/meticulous-next/robot-simulation-outlook-2026-2035)) |
| SAM | No public data found |
| Traction | Nov 12, 2026 public launch ([Launch YC](https://www.ycombinator.com/launches/XSo-outworld-labs-simulation-for-training-and-evaluating-robot-foundation-models), [Nicheloom](https://www.nicheloom.com/launches/92099/)); first-place tie in YC Showcase Group 1 ([Daniel Grant, Sep 2026, via search snippet](https://www.xitter.gq/danieljgrant)); 0 YC job postings ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/outworld-labs/jobs)) |
| Revenue Signal | No public data found |
| Founders | Matei Gardea (CEO), Berkeley EECS and BAIR robotics; Daniel Grant (CTO), Berkeley EECS and research at BAIR, DeepMind, and NASA ([Y Combinator](https://www.ycombinator.com/companies/outworld-labs)) |
| Competitors | Isaac Sim / Newton, GPU physics and OpenUSD ([NVIDIA](https://developer.nvidia.com/blog/newton-adds-contact-rich-manipulation-and-locomotion-capabilities-for-industrial-robotics/)); MuJoCo Playground, hardware calibration ([Google DeepMind](https://playground.mujoco.org/)); SuperDex, open tactile physics ([Meta](https://github.com/facebookresearch/project_superdex/blob/stable/README.md)); Genesis AI, $605M raised, revenue unknown, simulator plus own robot ([Genesis AI seed disclosure](https://www.genesis.ai/news/press-release-gene-265), [Series A announcement](https://www.prnewswire.com/news-releases/genesis-ai-raises-500m-series-a-at-3-5b-valuation-to-master-human-level-dexterity-in-general-purpose-robots-and-deploy-at-scale-302941249.html)); DexForce, $161M raised per Tracxn, RMB 100M in first-half 2026 company revenue, simulation plus fleet data collection ([GenesisIQ](https://startup.genisisiq.com/dexforce-104aab/), [Gasgoo](https://autonews.gasgoo.com/articles/news/seeds-dexforce-closes-1-billion-yuan-series-b-financing-round-valuation-exceeds-10-billion-yuan-2072327242154561537), [DexForce](https://www.dexforce.com/en/products/DexVerse)) |
| Moat Signals | Purpose-built dexterous-manipulation engine and hardware-measurement fitting ([Launch YC](https://www.ycombinator.com/launches/XSo-outworld-labs-simulation-for-training-and-evaluating-robot-foundation-models), [Outworld Labs website](https://outworldlabs.com/)) |
| Risk Factors | Sim-to-real fidelity and physical calibration effort ([Outworld Labs website](https://outworldlabs.com/), [DEXTERA](https://arxiv.org/abs/2609.21045)); open-source substitution ([Meta](https://github.com/facebookresearch/project_superdex/blob/stable/README.md), [Google DeepMind](https://playground.mujoco.org/)) |
| Founder Reach | Gardea: X 50 ([X mirror, via search snippet](https://www.xitter.gq/mateigardea)), LinkedIn 20 ([LinkedIn, via search snippet](https://www.linkedin.com/in/matei-gardea)), `beagle` 0 stars ([GitHub](https://github.com/mateig/beagle)); Grant: X 21 ([X mirror, via search snippet](https://www.xitter.gq/danieljgrant)), LinkedIn 698 ([LinkedIn, via search snippet](https://www.linkedin.com/in/daniel-grant-a85683221)), `Exploring-Computational-Geometry` 3 stars ([GitHub](https://github.com/DJRGVC/Exploring-Computational-Geometry)) |
| Distribution Signals | Launch post and demo ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/XSo-outworld-labs-simulation-for-training-and-evaluating-robot-foundation-models)); 24 company X followers ([X mirror, Nov 2026, via search snippet](https://www.xitter.gq/outworldlabs)); coverage in [Azerbusiness, Nov 15, 2026](https://azerbusiness.az/layiheler/outworld-labs/) and [notacompany, Nov 17, 2026](https://www.notacompany.com/archive/2026-11-17-the-engine-room-for-ai-made-video-and-audio) |
| Emails | matei.gardea@berkeley.edu ([UC Berkeley CS 188, academic contact](https://inst.eecs.berkeley.edu/~cs188/archive/fa24/staff/)), dgrant@berkeley.edu ([Daniel Grant’s website, published contact](https://danielgrant.io/)) |
