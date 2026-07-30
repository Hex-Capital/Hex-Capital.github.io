# Grip

> Physical AI for waste management

| Field | Value |
|-------|-------|
| Website | https://www.griprobotics.ai |
| YC Page | https://www.ycombinator.com/companies/grip |
| Batch | Summer 2026 |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 4 |
| Location | Z?rich, ZH, Switzerland |
| Tags | Robotic Process Automation, Sustainability |
| YC Partner | Jared Friedman |
| Emails | No public data found |

## The Idea

- **Problem:** Waste, composting, recycling, and biogas facilities must remove plastic from wet organic waste before it reaches compost, digesters, and soil, while robotic sorting has historically focused on dry construction debris and packaging ([Jonas Gruetter, LinkedIn, Jul 2026](https://www.linkedin.com/posts/jonasgrutter_we-saw-plastic-in-the-soil-growing-our-food-activity-7477159706688606208-QYjZ)).
- **Approach:** Grip combines learning-based manipulation with custom hardware to identify and pick objects from changing waste streams, using successful and failed grasps as operating data ([YC company page, Jul 2026](https://www.ycombinator.com/companies/grip)).
- **Differentiation:** [Inferred]: Unlike ZenRobotics, Recycleye, and EverestLabs systems documented for dry construction, household, commercial, or packaging streams, Grip is initially targeting plastic contamination in wet organic waste ([Grip launch post, Jul 2026](https://www.linkedin.com/posts/jonasgrutter_we-saw-plastic-in-the-soil-growing-our-food-activity-7477159706688606208-QYjZ); [Recycleye, Feb 2023](https://recycleye.com/raises-17m-in-series-a/); [EverestLabs product page, accessed Jul 2026](https://www.everestlabs.ai/recycling-robots)).
- **Business Model:** [Inferred]: Hardware sales or leases plus recurring monitoring, maintenance, or software fees to waste operators are possible monetization paths, but Grip has not published pricing.
- **TAM/SAM:** The global waste-sorting-equipment market was estimated at $962.3 million in 2024 and forecast to reach $1.43 billion in 2030 at a 7.0% CAGR ([Grand View Research, 2025](https://www.grandviewresearch.com/industry-analysis/waste-sorting-equipment-market-report)).
- **GTM / Distribution:** Grip publicly solicits conversations with waste, composting, recycling, and biogas facility operators, indicating founder-led direct outreach ([Jonas Gruetter, LinkedIn, Jul 2026](https://www.linkedin.com/posts/jonasgrutter_we-saw-plastic-in-the-soil-growing-our-food-activity-7477159706688606208-QYjZ)).

## Defensibility

- **Moat today:** Grip states that its system learns from every successful and failed grasp, creating a potential proprietary operating dataset, but it reports no dataset size, patents, or deployed fleet ([YC company page, Jul 2026](https://www.ycombinator.com/companies/grip)).
- **Future moat:** [Inferred]: Facility-specific wet-waste grasp data and custom end-effector designs could improve performance over time, but no deployment or performance evidence yet establishes this advantage.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** ZenRobotics, Recycleye, EverestLabs, and other robotic-sorting vendors already combine machine vision, robotic arms, end effectors, and operating data, although their published products emphasize mostly dry streams ([Terex, Aug 2022](https://www.terex.com/recycling/en/about/news/zenrobotics); [Recycleye, Feb 2023](https://recycleye.com/raises-17m-in-series-a/); [EverestLabs product page, accessed Jul 2026](https://www.everestlabs.ai/recycling-robots)).

## Market & Traction

- **Traction signals:**
  - Summer 2026 YC batch, founded in 2026, with four team members ([YC company page, Jul 2026](https://www.ycombinator.com/companies/grip)).
  - Zero active YC job postings ([YC company page, Jul 2026](https://www.ycombinator.com/companies/grip)).
  - Two employees publicly associated with the company on LinkedIn ([LinkedIn company page, Jul 2026](https://www.linkedin.com/company/griprobotics)).
  - One follower on the company GitHub organization and no publicly visible repositories ([GitHub organization, Jul 2026](https://github.com/Grip-Robotics/)).
  - Website not accessible at time of research ([griprobotics.ai, Jul 2026](https://www.griprobotics.ai)).
- **Competitors (minimum 3, up to 5):**
  - Recycleye ($24.6M raised including government funding, revenue unknown): targets dry mixed household and commercial recycling and retrofits robots into existing facilities ([Recycleye, Feb 2023](https://recycleye.com/raises-17m-in-series-a/)).
  - EverestLabs ($16.1M Series A disclosed, revenue unknown): supplies multi-arm cells, vision software, and remote monitoring for plastics, metals, fiber, and residue lines ([EverestLabs, Sep 2022](https://www.everestlabs.ai/news-announcements/everestlabs-raises-161-million-in-funding-to-support-further-ai-enabled-operating-system-deployments); [product page](https://www.everestlabs.ai/recycling-robots)).
  - ZenRobotics ($18.58M raised, revenue unknown): Terex-owned sorting systems address construction, demolition, commercial, industrial, and packaging waste ([CB Insights, accessed Jul 2026](https://www.cbinsights.com/company/zenrobotics/financials); [Terex, Aug 2022](https://www.terex.com/recycling/en/about/news/zenrobotics)).
- **Why now:** [Inferred]: The EU’s Packaging and Packaging Waste Regulation entered into force in 2025 and calls for revised compostability standards addressing contamination and microplastic release, increasing attention to plastics entering bio-waste facilities ([EUR-Lex, 2025](https://eur-lex.europa.eu/eli/reg/2025/40/oj)).

## Founders & Team

- **Jonas Gruetter (Founder):**
  - Background: Attended ETH Zürich from 2021–2024, previously worked at Gravis Robotics, ETH’s Robotic Systems Lab, and Ursa Mining, and co-authored research on reinforcement-learning control of a 12-ton excavator that achieved 70% boulder-removal success in field tests ([LinkedIn, Jul 2026](https://ch.linkedin.com/in/jonasgrutter); [YC company page](https://www.ycombinator.com/companies/grip); [arXiv, Sep 2025](https://arxiv.org/abs/2509.17683)).
  - Twitter/X: No public account found.
  - LinkedIn: “Grip (YC S26)” with 1,110 followers ([LinkedIn, Jul 2026](https://ch.linkedin.com/in/jonasgrutter)).
  - GitHub: No public personal repos found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Jonas Gruetter’s documented work spans reinforcement learning, sparse-LiDAR perception, manipulation of irregular objects, and field testing on heavy machinery, while Grip applies learning-based manipulation to irregular waste ([arXiv, Sep 2025](https://arxiv.org/abs/2509.17683); [YC company page, Jul 2026](https://www.ycombinator.com/companies/grip)).

## Key Risks

- **Wet-waste manipulation feasibility:** A 2026 food-waste-robotics benchmark describes cross-category grasping as requiring multimodal grippers, while Grip has disclosed no throughput, accuracy, uptime, or contamination-tolerance results ([GRAB benchmark, Feb 2026](https://arxiv.org/abs/2602.18835)).
- **Established robotic-sorting suppliers:** Terex-owned ZenRobotics has operated in robotic waste sorting since 2007, while Recycleye and EverestLabs report commercial installations and monitoring capabilities; Grip has disclosed no customer deployments ([Terex, Aug 2022](https://www.terex.com/recycling/en/about/news/zenrobotics); [Recycleye, Feb 2023](https://recycleye.com/raises-17m-in-series-a/); [EverestLabs product page](https://www.everestlabs.ai/recycling-robots)).
- **Limited public product validation:** The website was inaccessible during research, the GitHub organization showed no public repositories, and the YC page reported zero jobs ([Grip website, Jul 2026](https://www.griprobotics.ai); [GitHub](https://github.com/Grip-Robotics/); [YC company page](https://www.ycombinator.com/companies/grip)).
- **Feedstock-policy substitution:** EU policy prioritizes reducing, reusing, and recycling plastics before relying on compostable plastics, so upstream packaging changes could alter the quantity and composition of contaminants Grip is designed to remove ([European Commission, accessed Jul 2026](https://environment.ec.europa.eu/topics/plastics/biobased-biodegradable-and-compostable-plastics_en)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $962.3M global waste-sorting-equipment market in 2024, reaching $1.43B by 2030 at 7.0% CAGR (Grand View Research, 2025) |
| SAM | No public data found |
| Traction | Summer 2026 YC company; founded in 2026; team size four; zero YC jobs (YC company page, Jul 2026) |
| Revenue Signal | No public data found |
| Founders | Jonas Gruetter (Founder): ETH Zürich, ex-Gravis Robotics and Robotic Systems Lab, ICRA-published robotics researcher (YC company page, Jul 2026) |
| Competitors | Recycleye ($24.6M including grants, revenue unknown, dry mixed recycling retrofits) (Recycleye, Feb 2023); EverestLabs ($16.1M Series A disclosed, revenue unknown, multi-arm monitored sorting cells) (EverestLabs, Sep 2022); ZenRobotics ($18.58M raised, revenue unknown, Terex-owned multi-stream sorting systems) (CB Insights, Jul 2026) |
| Moat Signals | Learning dataset incorporating successful and failed grasps; dataset size not disclosed (YC company page, Jul 2026) |
| Risk Factors | Wet-waste grasping performance undisclosed (YC company page, Jul 2026); established commercial competitors (Terex, Aug 2022); no public customer deployments found (company research, Jul 2026) |
| Founder Reach | Jonas Gruetter: LinkedIn 1,110 followers; Twitter and personal GitHub not found (LinkedIn, Jul 2026) |
| Distribution Signals | Founder outreach to waste, composting, recycling, and biogas operators; zero YC job postings (LinkedIn and YC company page, Jul 2026) |
| Emails | No public data found |
