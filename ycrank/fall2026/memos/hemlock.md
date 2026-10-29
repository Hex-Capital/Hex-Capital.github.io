# Hemlock

> Force + contact dynamics collected at scale for training physical AI.

| Field | Value |
|-------|-------|
| Website | https://hemlock.inc |
| YC Page | https://www.ycombinator.com/companies/hemlock |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/hemlock)) |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Hard Tech, Hardware |
| YC Partner | Nicolas Dessaigne ([YC](https://www.ycombinator.com/companies/hemlock)) |
| Emails | julian@hemlock.inc ([Hemlock’s YC launch](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data)) |

## The Idea

- **Problem:** Robotics labs training dexterous manipulation need force/contact information that video demonstrations omit, while alternatives include tactile gloves and instrumented environments, which Hemlock says introduce hand occlusion and collection constraints ([Hemlock’s YC launch](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data), accessed Oct 2026).
- **Approach:** Hemlock pairs its proprietary wrist-worn EMG Bracelet with egocentric video, using workers’ muscular signals to annotate demonstrations with finger-force and contact information ([Hemlock](https://hemlock.inc), accessed Oct 2026).
- **Differentiation:** Hemlock captures muscular signals from the wrist, whereas [MANUS](https://www.manus-meta.com/robotics) and [StretchSense](https://www.stretchsense.com/robotics) advertise glove-based hand-motion capture, and [Contactile](https://contactile.com/) supplies tactile sensors for robots ([Hemlock](https://hemlock.inc), accessed Oct 2026).
- **Business Model:** [Inferred]: Dataset licensing or commissioned collection for robotics teams follows the company’s data-foundry positioning and data inquiry form; public pricing is unavailable ([Hemlock](https://hemlock.inc), [contact page](https://hemlock.inc/contact?interest=data), accessed Oct 2026).
- **TAM/SAM:** The broader robot-training-data market was estimated at $1.05B in 2025, with 24.5% CAGR for 2026–2035, including simulation and internal collection valued at cost; this is not a Hemlock-specific TAM/SAM estimate ([Emergen Research](https://www.emergenresearch.com/industry-report/robot-training-data-market), Oct 2026).
- **GTM / Distribution:** Hemlock solicits introductions to physical-AI labs, robotics data-operations teams, and manipulation researchers through its YC launch, founder email, and website inquiry form ([YC launch](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data), [Hemlock contact](https://hemlock.inc/contact?interest=data), accessed Oct 2026).

## Defensibility

- **Moat today:** Hemlock describes the Bracelet as proprietary, and its founder claims four wearable-technology patents, although the launch post provides no patent identifiers or evidence of Hemlock ownership ([Hemlock’s YC launch](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data), accessed Oct 2026).
- **Future moat:** [Inferred]: A proprietary corpus spanning workers, tools, and force-sensitive tasks could create a data advantage, but public dataset size, exclusivity, and collection agreements are unavailable ([Hemlock](https://hemlock.inc), accessed Oct 2026).
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given existing commercial demonstration-capture hardware and academic force-supervised training research ([MANUS](https://www.manus-meta.com/robotics); [FACT researchers](https://arxiv.org/abs/2610.19155), Oct 2026).
- **Commoditization risk:** [Inferred]: Capture-hardware suppliers and robotics labs could develop competing force-data pipelines, although implementation effort is unquantified; FACT already introduces the EgoForce human tactile dataset and force-aware robot pretraining ([FACT](https://arxiv.org/abs/2610.19155), Oct 2026).

## Market & Traction

- **Traction signals:**
  - Company-reported 10× improvement in π0.5 egg pick-and-place success and 2.7× improvement in a lightbulb-installation task using what Hemlock calls Gemini 4 Argon, comparing demonstrations with and without Bracelet data ([Hemlock’s YC launch](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data), accessed Oct 27, 2026).
  - Product-launch film and founder interview produced by WERZ, which identifies Hemlock as its client ([WERZ](https://werz.ai/work/hemlock-launch-film), 2026).
  - Zero jobs posted on YC ([YC Jobs](https://www.ycombinator.com/companies/hemlock/jobs), accessed Oct 27, 2026).
- **Competitors:**
  - **MANUS** (at least €2M disclosed funding; revenue unknown): glove-based hand-pose capture and robot teleoperation rather than Hemlock’s wrist EMG, with a €2M Series A from Eindhoven Venture Capital Fund II announced in November 2019 ([Bits&Chips](https://bits-chips.com/article/manus-vr-gloves-grab-2-million-in-investment/), Nov 2019; [MANUS](https://www.manus-meta.com/robotics), accessed Oct 2026).
  - **StretchSense** (almost $20M raised; revenue unknown): glove-based finger and spatial-motion datasets, with its latest announced $2.3M round led by PXN Ventures and supported by Scottish Enterprise ([company release via Business Wire/StreetInsider](https://www.streetinsider.com/Business%2BWire/StretchSense%2BRaises%2B%242.3M%2Bto%2BDrive%2BGlobal%2BExpansion%2Bof%2BXR%2BTraining%2BGloves/25762035.html), Dec 19, 2025; [robotics product](https://www.stretchsense.com/robotics)).
  - **Contactile** ($2.5M disclosed seed funding plus an A$268,712 commercialization grant; revenue unknown): robot-mounted tactile feedback rather than worker-worn EMG, with the seed led by True Ventures in May 2022 and the federal grant announced in June 2025 ([seed announcement](https://contactile.com/contactile-raises-seed-funding/); [grant announcement](https://contactile.com/startupdaily-contactile-grabs-268712-dollar-federal-commmercialisation-grant/)).
  - [Inferred]: These are adjacent capture/sensing alternatives; public research did not establish three commercial suppliers using Hemlock’s specific wrist-EMG-plus-video approach.
- **Why now:** [Inferred]: Generalist robot policies create a new destination for force-annotated demonstrations, following π0.5’s April 2025 publication and October 2026 research explicitly incorporating human force supervision ([Physical Intelligence](https://www.pi.website/blog/pi05), Apr 2025; [FACT](https://arxiv.org/abs/2610.19155), Oct 2026).

## Founders & Team

- **Julian Olschwang (Founder/CEO):**
  - **Background:** CMU electrical and computer engineering dropout who previously built GANs for military robotics data at UCLA’s Biomechatronics Lab, and developed the separate Talk To The Hand sign-language glove project, receiving a $25,000 Davidson Fellowship in 2024 ([YC founder profile](https://www.ycombinator.com/founders/julian-olschwang); [Davidson Institute](https://www.davidsongifted.org/gifted-programs/fellows-scholarship/fellows/current-and-past-fellows/2024-fellows/2024-davidson-fellow-julian-olschwang/)).
  - **Twitter/X:** @j_olschwang; count not retrievable ([YC-linked account](https://www.ycombinator.com/founders/julian-olschwang), accessed Oct 2026).
  - **LinkedIn:** Headline not retrievable; About excerpt reads “Founder of Hemlock, focused on innovating data collection technologies,” with 781 followers displayed in the indexed profile ([LinkedIn](https://www.linkedin.com/in/julian-olschwang), retrieved Oct 2026 via search snippet).
  - **GitHub:** No public repos found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Olschwang’s documented work combines wearable hand sensing, AI, and robotic training-data generation, while YC lists Nicolas Dessaigne as Hemlock’s primary partner ([Davidson Institute](https://www.davidsongifted.org/gifted-programs/fellows-scholarship/fellows/current-and-past-fellows/2024-fellows/2024-davidson-fellow-julian-olschwang/); [YC](https://www.ycombinator.com/companies/hemlock)).

## Key Risks

- **Technical generalization:** [Inferred]: Gains on egg handling and bulb installation may not transfer across workers, objects, and workplaces; the published launch reports task-specific demonstrations without aggregate field-validation statistics ([Hemlock’s YC launch](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data), accessed Oct 2026).
- **Alternative data pipelines:** [Inferred]: Glove capture and independently developed tactile datasets could substitute for portions of Hemlock’s offering, as demonstrated by MANUS’s collection platform and FACT’s EgoForce dataset ([MANUS](https://www.manus-meta.com/robotics); [FACT](https://arxiv.org/abs/2610.19155), Oct 2026).
- **IP scope:** [Inferred]: The founder’s patent count alone cannot establish protection over Hemlock’s collection method because the launch does not identify the patents or their scope ([YC launch](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data)).
- **Name ambiguity:** An unrelated Dubai design company also uses Hemlock, so company metrics require domain matching against hemlock.inc rather than hemlock.ae ([unrelated company’s LinkedIn](https://at.linkedin.com/company/hemlock); [Hemlock YC profile](https://www.ycombinator.com/companies/hemlock)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader robot-training-data market: $1.05B in 2025; 24.5% CAGR, 2026–2035; includes internal collection and simulation ([Emergen Research](https://www.emergenresearch.com/industry-report/robot-training-data-market), Oct 2026). |
| SAM | No public data found |
| Traction | Company-reported task-success improvements: 10× egg handling and 2.7× bulb installation ([Hemlock’s YC launch](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data), accessed Oct 2026). |
| Revenue Signal | No public data found |
| Founders | Julian Olschwang, Founder/CEO: CMU ECE dropout; UCLA Biomechatronics GAN work ([YC](https://www.ycombinator.com/founders/julian-olschwang)). |
| Competitors | MANUS: ≥€2M disclosed, revenue unknown, pose-capture gloves ([Bits&Chips](https://bits-chips.com/article/manus-vr-gloves-grab-2-million-in-investment/); [MANUS](https://www.manus-meta.com/robotics)); StretchSense: almost $20M, revenue unknown, motion-capture gloves ([company release](https://www.streetinsider.com/Business%2BWire/StretchSense%2BRaises%2B%242.3M%2Bto%2BDrive%2BGlobal%2BExpansion%2Bof%2BXR%2BTraining%2BGloves/25762035.html)); Contactile: $2.5M seed, revenue unknown, robotic tactile sensors ([Contactile](https://contactile.com/contactile-raises-seed-funding/)). |
| Moat Signals | Proprietary Bracelet; founder claims four wearable-tech patents, without identifiers ([Hemlock’s YC launch](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data)). |
| Risk Factors | Task-specific published validation ([Hemlock launch](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data)), competing tactile-data research ([FACT](https://arxiv.org/abs/2610.19155)), shared company name ([LinkedIn](https://at.linkedin.com/company/hemlock)). |
| Founder Reach | Julian Olschwang: X @j_olschwang, count not retrievable ([YC](https://www.ycombinator.com/founders/julian-olschwang)); LinkedIn 781 followers ([LinkedIn](https://www.linkedin.com/in/julian-olschwang), Oct 2026 via search snippet). |
| Distribution Signals | Public YC launch and WERZ-produced launch film ([YC](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data); [WERZ](https://werz.ai/work/hemlock-launch-film), 2026). |
| Emails | julian@hemlock.inc ([Hemlock’s YC launch](https://www.ycombinator.com/launches/WVM-hemlock-the-missing-force-signal-in-robotic-training-data)). |
