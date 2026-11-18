# Axonnic

> Creating human skill at robot scale

| Field | Value |
|-------|-------|
| Website | https://www.axonnic.com |
| YC Page | https://www.ycombinator.com/companies/axonnic |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/axonnic)) |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 2 |
| Location | San Francisco, CA, USA; Remote |
| Tags | Neurotechnology, Robotics, Data Labeling |
| YC Partner | Aaron Epstein ([Y Combinator](https://www.ycombinator.com/companies/axonnic)) |
| Emails | arsh@axonnic.com (Arsh Patankar’s [Hacker News profile](https://news.ycombinator.com/user?id=arshpatankar)), info@axonnic.com (shared contact for pilots, orders, partnerships, press and investors, [Axonnic](https://www.axonnic.com/#contact)) |

## The Idea

- **Problem:** Manufacturers seeking to automate force-sensitive tasks such as sewing and delicate assembly can record skilled workers with cameras, but video loses sight of occluded fingers and does not measure the muscle effort used to maintain grip or adjust fabric tension ([Axonnic, Launch HN, Nov 2026](https://news.ycombinator.com/item?id=50522776)).
- **Approach:** A 64-channel forearm sleeve uses surface electromyography (EMG) to decode finger angles and estimate fingertip force, and Axonnic aligns those signals with video and hand pose to train policies that run on the robot’s own sensors ([Axonnic, Launch HN, Nov 2026](https://news.ycombinator.com/item?id=50522776), [Axonnic workflow](https://www.axonnic.com/#how-it-works)).
- **Differentiation:** Axonnic uses a full-forearm sleeve and offers factory-specific policy training, OYMotion ForcePose uses armbands and offers capture kits and model fine-tuning, and Preload combines EMG with tactile gloves and first-person video ([Axonnic](https://www.axonnic.com/), [OYMotion ForcePose](https://forcepose.com/), [Preload, Y Combinator](https://www.ycombinator.com/companies/preload)).
- **Business Model:** Gen 2 preorders cost $12,000 for one sleeve, $10,000 per sleeve for one to four pairs and $8,000 per sleeve for five to 99 pairs, with a 20% deposit refundable until shipment and the SDK included ([Axonnic preorder and terms, Nov 2026](https://www.axonnic.com/preorder)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment (for industry context, Grand View Research estimates the global industrial robotics market at $41.9 billion in 2026 and projects 9.5% annual growth through 2033, [Grand View Research, Jul 2026](https://www.grandviewresearch.com/industry-analysis/industrial-robotics-market)).
- **GTM / Distribution:** Axonnic recruits manufacturers for on-site pilots, offers synchronized datasets to robotics and AI labs, and takes direct Gen 2 preorders for US delivery ([Axonnic](https://www.axonnic.com/), [Axonnic preorder terms, Nov 2026](https://www.axonnic.com/preorder/terms)).

## Defensibility

- **Moat today:** Axonnic reports lower hand-pose error than Meta’s baseline for all 20 held-out participants on Meta’s emg2pose benchmark using Meta’s dataset ([Axonnic Benchmarks, Nov 2026](https://www.axonnic.com/benchmarks)).
- **Future moat:** [Inferred]: Factory recordings could build a reusable dataset of muscle activity, grip and contact across tasks if customers grant reuse rights, which Axonnic negotiates per engagement ([Axonnic data ownership FAQ](https://www.axonnic.com/)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** OYMotion already sells an EMG capture kit and offers early access to a model that estimates finger angles and fingertip force from its armband after calibration ([OYMotion ForcePose](https://forcepose.com/)).

## Market & Traction

- **Traction signals:**
  - Paid pilots underway with initial design partners and sleeves shipping ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/WfE-axonnic-muscle-sensing-sleeves-for-robot-training)).
  - Signed LOI with an unnamed Italian manufacturer for robotic implementation of force-sensitive sewing, plus construction recordings with electricians, plumbers and demolition workers ([Axonnic](https://www.axonnic.com/#pilots), [Launch HN, Nov 2026](https://news.ycombinator.com/item?id=50522776)).
  - Live EMG control demonstrated with a Proception robotic hand ([Proception News](https://www.proception.ai/news), [Launch HN, Nov 2026](https://news.ycombinator.com/item?id=50522776)).
  - Gen 1 at full capacity, with Gen 2 shipments estimated for February 2027 ([Axonnic](https://www.axonnic.com/), [Axonnic preorder terms, Nov 2026](https://www.axonnic.com/preorder/terms)).
  - Launch coverage in [Founderland, Oct 2026](https://founderland.ai/articles/axonnic-launches-emg-sleeve-to-give-robots-human-muscle-data-mvsoach5) and industry coverage in [36Kr, Nov 2026](https://eu.36kr.com/en/p/4067487054484612).
  - Product Hunt daily rank #16 on October 30 and 57 followers in November ([Product Hunt leaderboard, Oct 2026](https://www.producthunt.com/leaderboard/daily/2026/10/30), [Product Hunt profile, Nov 2026](https://www.producthunt.com/products/axonnic)).
  - Launch HN on November 16, with 55 points and 27 comments in the November 17 snapshot ([Hacker News, Nov 2026](https://news.ycombinator.com/item?id=50522776)).
  - 39 followers for @Axonnic_ ([Sotwe X snapshot, Nov 2026](https://www.sotwe.com/Axonnic_)).
  - Zero open YC job postings ([Y Combinator Jobs, Nov 2026](https://www.ycombinator.com/companies/axonnic/jobs)).
- **Competitors:**
  - **Hemlock** (YC-backed, amount undisclosed, revenue unknown): equips workers with EMG wristbands and supplies force- and contact-annotated first-person video datasets ([Hemlock, Y Combinator](https://www.ycombinator.com/companies/hemlock)).
  - **Preload** (YC-backed, amount undisclosed, revenue unknown): adds tactile gloves to EMG and first-person video capture ([Preload, Y Combinator](https://www.ycombinator.com/companies/preload)).
  - **OYMotion** (RMB 150M Series C1 led by CICC Capital Brain Science Fund, Mar 2026, cumulative funding and revenue unknown): sells armband-based EMG capture kits with optional gloves and fingertip sensors ([OYMotion financing announcement](https://www.oymotion.com/en/news37/441), [ForcePose](https://forcepose.com/)).
  - **Proception** ($11M seed led by First Round Capital, Jun 2026, cumulative funding and revenue unknown): sells a dexterous robot hand and offers a glove for collecting human demonstrations ([Gunderson Dettmer, Jun 2026](https://www.gunder.com/en/news-insights/client-news/proception-raises-dollar11-million-seed-financing), [Proception News](https://www.proception.ai/news)).
- **Why now:** [Inferred]: Meta’s 2025 demonstration of a wrist-worn EMG interface that decoded gestures across users without individual calibration established a technical precedent for applying learned EMG decoders to new users ([Meta Reality Labs, Nature, 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12443603/)).

## Founders & Team

- **Maxim Williams (CEO and co-founder):**
  - **Background:** Oxford MBiol in Biology and high-density surface EMG research, internal tools at Skyscanner, and PCB development, supply chain and fundraising work at Voxblock ([Y Combinator founder profile](https://www.ycombinator.com/founders/maxim-williams)).
  - **Twitter/X:** @maximSwilliams, 32 followers ([Y Combinator](https://www.ycombinator.com/founders/maxim-williams), [Sotwe X snapshot, Nov 2026](https://www.sotwe.com/maximSwilliams)).
  - **LinkedIn:** Public listing shows “Axonnic” and approximately 1,000 followers ([LinkedIn, via search snippet](https://uk.linkedin.com/in/maxim-williams)).
  - **GitHub:** No public repos found.
  - **Business email:** No public data found.
- **Arsh Patankar (CTO and co-founder):**
  - **Background:** Studied medicine at Oxford, researched machine learning for cancer and stroke imaging, wrote OxRAM quadruped control software and helped build Medical Advice GPT, a prior project that recorded more than 10,000 user interactions ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/WfE-axonnic-muscle-sensing-sleeves-for-robot-training)).
  - **Twitter/X:** @PatankarArsh, 18 followers ([Sotwe X snapshot, Nov 2026](https://www.sotwe.com/PatankarArsh)).
  - **LinkedIn:** Public listing shows “Axonnic” and approximately 1,000 followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/arshpatankar)).
  - **GitHub:** No public repos found.
  - **Business email:** arsh@axonnic.com ([Hacker News profile](https://news.ycombinator.com/user?id=arshpatankar)).
- **Co-founder relationship:** Both studied at the University of Oxford ([Launch YC](https://www.ycombinator.com/launches/WfE-axonnic-muscle-sensing-sleeves-for-robot-training)).
- **Founder-market fit:** Williams’s EMG calibration and hardware work and Patankar’s imaging ML and robot-control work cover the sleeve and decoding system, while Axonnic lists Dan Houser as an advisor and YC, Boost VC, Sterling Road and Oxford Seed Fund as backers ([Launch YC](https://www.ycombinator.com/launches/WfE-axonnic-muscle-sensing-sleeves-for-robot-training), [Axonnic](https://www.axonnic.com/)).

## Key Risks

- **Decoder repeatability:** Electrode placement shifts when the sleeve is put back on, and Axonnic reports 6.9° mean joint-angle error in one 215-second comparison four days after training without recalibration ([Axonnic Benchmarks, Nov 2026](https://www.axonnic.com/benchmarks), [Launch HN, Nov 2026](https://news.ycombinator.com/item?id=50522776)).
- **Factory recording reliability:** Wireless interference and off-the-shelf hardware problems forced repeat data collections, prompting Axonnic to develop wired electronics for signal timing and interference ([Launch HN, Nov 2026](https://news.ycombinator.com/item?id=50522776)).
- **Deployment conversion:** [Inferred]: The sewing LOI still requires a robotic implementation, and Axonnic’s workflow requires retargeting human demonstrations to the robot’s action space before deployment ([Axonnic pilots and workflow](https://www.axonnic.com/)).
- **Dataset reuse rights:** [Inferred]: Engagement-specific terms can limit reuse across customers because Axonnic negotiates how each factory’s recordings may contribute to broader models ([Axonnic data ownership FAQ](https://www.axonnic.com/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Initial paid pilots and sleeve shipments ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/WfE-axonnic-muscle-sensing-sleeves-for-robot-training)), signed sewing LOI and construction recordings ([Launch HN, Nov 2026](https://news.ycombinator.com/item?id=50522776)), Proception hand integration ([Proception News](https://www.proception.ai/news)) |
| Revenue Signal | Paid pilots, amount undisclosed ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/WfE-axonnic-muscle-sensing-sleeves-for-robot-training)), $8,000–$12,000 per Gen 2 sleeve with 20% refundable deposit ([Axonnic preorder terms, Nov 2026](https://www.axonnic.com/preorder/terms)) |
| Founders | Maxim Williams (CEO), Oxford MBiol, EMG research, Voxblock hardware ([Y Combinator](https://www.ycombinator.com/founders/maxim-williams)); Arsh Patankar (CTO), Oxford medicine, imaging ML, OxRAM control software ([Launch YC](https://www.ycombinator.com/launches/WfE-axonnic-muscle-sensing-sleeves-for-robot-training)) |
| Competitors | Hemlock (funding amount undisclosed, revenue unknown, EMG wristband datasets, [YC](https://www.ycombinator.com/companies/hemlock)); Preload (funding amount undisclosed, revenue unknown, EMG plus tactile gloves, [YC](https://www.ycombinator.com/companies/preload)); OYMotion (RMB 150M Series C1, revenue unknown, EMG armband kits, [OYMotion](https://www.oymotion.com/en/news37/441), [ForcePose](https://forcepose.com/)); Proception ($11M seed, revenue unknown, robot hand and capture glove, [Gunderson Dettmer](https://www.gunder.com/en/news-insights/client-news/proception-raises-dollar11-million-seed-financing), [Proception News](https://www.proception.ai/news)) |
| Moat Signals | Lower emg2pose error than Meta’s baseline across all 20 held-out participants, company-reported ([Axonnic Benchmarks, Nov 2026](https://www.axonnic.com/benchmarks)) |
| Risk Factors | Electrode placement shifts and factory recording interference ([Launch HN, Nov 2026](https://news.ycombinator.com/item?id=50522776)), engagement-specific data reuse rights ([Axonnic FAQ](https://www.axonnic.com/)) |
| Founder Reach | Williams: X 32 ([Sotwe](https://www.sotwe.com/maximSwilliams)), LinkedIn approximately 1,000 ([LinkedIn, via search snippet](https://uk.linkedin.com/in/maxim-williams)); Patankar: X 18 ([Sotwe](https://www.sotwe.com/PatankarArsh)), LinkedIn approximately 1,000 ([LinkedIn, via search snippet](https://www.linkedin.com/in/arshpatankar)) |
| Distribution Signals | Product Hunt #16 on October 30 ([Product Hunt, Oct 2026](https://www.producthunt.com/leaderboard/daily/2026/10/30)), Launch HN 55 points and 27 comments ([Hacker News, Nov 2026](https://news.ycombinator.com/item?id=50522776)), company X 39 followers ([Sotwe, Nov 2026](https://www.sotwe.com/Axonnic_)) |
| Emails | arsh@axonnic.com (Arsh Patankar’s [Hacker News profile](https://news.ycombinator.com/user?id=arshpatankar)), info@axonnic.com (shared company inbox, [Axonnic](https://www.axonnic.com/#contact)) |
