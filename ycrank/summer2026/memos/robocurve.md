# Robocurve

> Evaluating robots in the real world.

| Field | Value |
|-------|-------|
| Website | https://robocurve.org |
| YC Page | https://www.ycombinator.com/companies/robocurve |
| Batch | Summer 2026 |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Hard Tech, Hardware, Robotics, Open Source, AI |
| YC Partner | Ankit Gupta |
| Emails | No public data found |

## The Idea

- **Problem:** Frontier robotics labs rely on internal evaluations, simulation, and demonstration videos, leaving model developers and prospective users without standardized independent measurements of real-world capability ([YC, Aug 2026](https://www.ycombinator.com/companies/robocurve)).
- **Approach:** Robocurve runs interchangeable AI policies against real or simulated robot embodiments using Inspect Robots, producing grader scores, configuration records, transcripts, trace logs, and visualizations ([Inspect Robots, Aug 2026](https://github.com/robocurve/inspect-robots)).
- **Differentiation:** Positronic’s PhAIL initially benchmarks models on a Franka bin-picking rig and Instance automates rollout judging and resets, while Robocurve provides a cross-embodiment framework plus multiple job-domain benchmarks ([Positronic, Mar 2026](https://positronic.ro/press/phail-launch); [Instance, Aug 2026](https://www.ycombinator.com/companies/instance); [Robocurve](https://robocurve.org/)).
- **Business Model:** [Inferred]: Free MIT-licensed tools are intended to attract robotics teams that can be converted into paid evaluation engagements or benchmark-operation partnerships, based on the company’s invitation to submit models or robots for evaluation ([YC, Aug 2026](https://www.ycombinator.com/companies/robocurve)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** [Inferred]: Distribution begins through open-source adoption, PyPI packages, community-contributed benchmarks, and direct outreach to AI and robotics laboratories, followed by independently operated evaluations ([Robocurve](https://robocurve.org/); [PyPI, Jul 2026](https://pypi.org/project/inspect-robots/0.12.0/)).

## Defensibility

- **Moat today:** Inspect Robots has 134 GitHub stars, 19 forks, and approximately 400 commits, while Robocurve maintains 13 public repositories covering frameworks, benchmarks, and hardware adapters ([GitHub, Aug 2026](https://github.com/robocurve)).
- **Future moat:** [Inferred]: Repeated evaluations could create a cross-model, cross-robot dataset and reference history that becomes harder to reproduce, but only one pilot is publicly disclosed today ([YC, Aug 2026](https://www.ycombinator.com/companies/robocurve)).
- **Market structure:** No structural barrier identified at this stage because Positronic and Instance independently launched overlapping real-hardware benchmarking and automated robot-policy evaluation products in 2026 ([Positronic, Mar 2026](https://positronic.ro/press/phail-launch); [Instance, Aug 2026](https://www.ycombinator.com/companies/instance)).
- **Commoditization risk:** Robotics laboratories, simulation vendors, and competitors such as Positronic, Instance, and ReSim can build evaluation pipelines, while Robocurve’s MIT license permits reuse of its software ([GitHub](https://github.com/robocurve/inspect-robots); [ReSim](https://docs.resim.ai/)).

## Market & Traction

- **Traction signals:**
  - Inspect Robots reached 134 GitHub stars and 19 forks ([GitHub, Aug 2026](https://github.com/robocurve)).
  - Robocurve completed its first pilot scoring a frontier model on a real robot ([YC, Aug 2026](https://www.ycombinator.com/companies/robocurve)).
  - The Inspect Robots package reached version 0.21.1 after public releases began in July 2026 ([PyPI, Jul 2026](https://pypi.org/project/inspect-robots/0.9.2/)).
  - Robocurve’s GitHub organization has 33 followers ([GitHub, Aug 2026](https://github.com/robocurve)).
  - Robocurve lists zero active YC job postings ([YC, Aug 2026](https://www.ycombinator.com/companies/robocurve)).
- **Competitors (minimum 3, up to 5):**
  - Positronic Robotics (funding not publicly disclosed, revenue unknown): PhAIL evaluates VLA models on physical commercial tasks using throughput, reliability, and failure metrics ([Positronic, Mar 2026](https://positronic.ro/press/phail-launch)).
  - Instance (funding not publicly disclosed, revenue unknown): automates success detection and ultimately scene resets, rather than publishing a multi-domain independent benchmark catalog ([YC, Aug 2026](https://www.ycombinator.com/companies/instance)).
  - ReSim ($10.3M disclosed seed, revenue unknown): orchestrates evaluation across simulation, recorded data, and physical hardware, versus Robocurve’s real-world-first public benchmarks ([Dealroom, Sep 2024](https://app.dealroom.co/companies/resim); [ReSim](https://www.resim.ai/)).
- **Why now:** [Inferred]: The 2026 launch of real-hardware leaderboards such as PhAIL, alongside robotics laboratories’ stated general-purpose-robot targets for 2028, has compressed the timeline for independent physical-AI measurement ([Positronic, Mar 2026](https://positronic.ro/press/phail-launch); [YC, Aug 2026](https://www.ycombinator.com/companies/robocurve)).

## Founders & Team

- **Jay Chooi (CEO):**
  - Background: Harvard BA in Computer Science and Mathematics and concurrent MA in Statistics; former MATS research fellow and UK AI Security Institute contributor to Inspect Evals, with publications at ACM EC, ICML, ACL, and EMNLP ([Jay Chooi](https://chojeq.com/); [YC](https://www.ycombinator.com/companies/robocurve)).
  - Twitter/X: @chooi_jeq; count not retrievable ([Hugging Face](https://huggingface.co/jeqcho)).
  - LinkedIn: Profile located; headline not retrievable ([Jay Chooi](https://chojeq.com/)).
  - GitHub: @jeqcho; `myharvard_qguide_scraper` has 9 stars ([GitHub, Aug 2026](https://github.com/jeqcho)).
- **Aris Zhu (CTO):**
  - Background: Studied computer science and physics at Harvard; worked at Amazon Robotics, Amazon AGI Labs, and Yondu Robotics and co-authored an IEEE Robotics and Automation Letters paper ([YC](https://www.ycombinator.com/companies/robocurve)).
  - Twitter/X: No public account found.
  - LinkedIn: “Robocurve,” with 410 followers and 405 connections ([LinkedIn, Jul 2026](https://www.linkedin.com/in/aris-zhu)).
  - GitHub: No public repos found.
- **Co-founder relationship:** Both founders attended Harvard, where Zhu worked in the Computational Robotics Lab and Chooi studied computer science, mathematics, and statistics ([YC](https://www.ycombinator.com/companies/robocurve)).
- **Founder-market fit:** [Inferred]: Chooi’s AI-evaluation work and Zhu’s production robotics, robot-navigation, and embodied-AI research cover the evaluation and physical-system components required by the product ([YC](https://www.ycombinator.com/companies/robocurve)).

## Key Risks

- **Competitive convergence:** Positronic already operates a real-hardware VLA leaderboard and Instance is automating robot-policy evaluation; Robocurve’s mitigation is its open cross-embodiment framework and multi-domain benchmark catalog ([Positronic](https://positronic.ro/press/phail-launch); [Instance](https://www.ycombinator.com/companies/instance); [Robocurve](https://robocurve.org/)).
- **Benchmark validity:** Only one pilot is publicly disclosed, its full results were still pending on the YC launch page, and Inspect Robots describes its API as being in early development ([YC](https://www.ycombinator.com/companies/robocurve); [GitHub](https://github.com/robocurve/inspect-robots)).
- **Physical execution burden:** Reproducible benchmarks require maintained hardware, controlled setups, domain experts, and repeated resets; simulation support and multiple hardware adapters reduce but do not remove this requirement ([YC](https://www.ycombinator.com/companies/robocurve); [Inspect Robots](https://inspectrobots.org/)).
- **Open-source value capture:** The MIT license allows competitors and laboratories to reuse the framework without licensing fees, leaving operated evaluations and benchmark stewardship as the differentiated service layer ([GitHub](https://github.com/robocurve/inspect-robots); [Robocurve](https://robocurve.org/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | First real-robot frontier-model pilot completed ([YC, Aug 2026](https://www.ycombinator.com/companies/robocurve)); Inspect Robots has 134 stars and 19 forks ([GitHub, Aug 2026](https://github.com/robocurve)) |
| Revenue Signal | No public data found |
| Founders | Jay Chooi (CEO): Harvard CS/math and statistics, MATS and UK AISI evals experience; Aris Zhu (CTO): Harvard CS/physics, Amazon Robotics, Amazon AGI Labs, and Yondu Robotics ([YC](https://www.ycombinator.com/companies/robocurve)) |
| Competitors | Positronic Robotics (funding and revenue unknown, real-hardware leaderboard) ([Positronic](https://positronic.ro/press/phail-launch)); Instance (funding and revenue unknown, automated rollout verification) ([YC](https://www.ycombinator.com/companies/instance)); ReSim ($10.3M disclosed seed, revenue unknown, simulation and test orchestration) ([Dealroom](https://app.dealroom.co/companies/resim)) |
| Moat Signals | Inspect Robots has 134 stars, 19 forks, and approximately 400 commits; Robocurve maintains 13 public repositories ([GitHub, Aug 2026](https://github.com/robocurve)) |
| Risk Factors | Competitive overlap with Positronic and Instance ([company sources, 2026](https://positronic.ro/press/phail-launch)); hardware-intensive reproducibility ([YC, Aug 2026](https://www.ycombinator.com/companies/robocurve)); MIT-license value capture ([GitHub, Aug 2026](https://github.com/robocurve/inspect-robots)) |
| Founder Reach | Jay Chooi: X count unavailable, GitHub top repo 9 stars ([GitHub, Aug 2026](https://github.com/jeqcho)); Aris Zhu: LinkedIn 410 followers, GitHub repos not found ([LinkedIn, Jul 2026](https://www.linkedin.com/in/aris-zhu)) |
| Distribution Signals | Inspect Robots 134 GitHub stars and 19 forks; Robocurve GitHub organization 33 followers ([GitHub, Aug 2026](https://github.com/robocurve)); public PyPI releases began in July 2026 ([PyPI](https://pypi.org/project/inspect-robots/0.9.2/)) |
| Emails | No public data found |
