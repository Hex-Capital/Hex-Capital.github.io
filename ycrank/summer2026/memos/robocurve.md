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

- **Problem:** Robotics labs primarily evaluate their own systems, leaving robot developers, customers, researchers, and policymakers without continuously operated, standardized, independent measurements of real-world task performance ([Y Combinator](https://www.ycombinator.com/companies/robocurve), Jul 2026).
- **Approach:** Robocurve operates physical robot evaluations and publishes MIT-licensed tooling and reproducible benchmarks through Inspect Robots, World Evals, KitchenBench, and DataCenterBench ([Robocurve](https://robocurve.org/), Jul 2026).
- **Differentiation:** Unlike laboratory-run demonstrations and simulation-only tests, Robocurve emphasizes independent physical evaluations with trace logs, reproducible setups, and optional digital-twin simulation ([Robocurve](https://robocurve.org/), Jul 2026).
- **Business Model:** [Inferred]: Inspect Robots and the benchmark implementations are free and MIT-licensed, while the website’s evaluation inquiry path could support paid evaluation engagements, but no pricing is published.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Robocurve distributes its tooling through GitHub and documentation, invites labs to request evaluations, and solicits open-source benchmark contributions ([Robocurve](https://robocurve.org/), Jul 2026).

## Defensibility

- **Moat today:** Inspect Robots integrates real and simulated testing, ROS, Isaac Lab, Robolab, Cap-X, XPolicyLab’s 40-plus VLAs, and more than 260 language models, while its public repository had 96 stars and 13 forks ([YC launch](https://www.ycombinator.com/companies/robocurve), Jul 2026; [GitHub](https://github.com/robocurve/inspect-robots), Jul 2026).
- **Future moat:** [Inferred]: Repeated operation of standardized physical tasks could create longitudinal performance data, benchmark recognition, and laboratory relationships, but the public evidence does not yet establish adoption or switching costs.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Robotics laboratories, model vendors, standards organizations, and AI-evaluation nonprofits could publish overlapping benchmark software, while the MIT license permits third parties to copy and modify Robocurve’s public framework ([GitHub](https://github.com/robocurve/inspect-robots), Jul 2026).

## Market & Traction

- **Traction signals:**
  - Inspect Robots v1 shipped, and Robocurve completed one pilot evaluating a frontier model on a physical robot ([Y Combinator](https://www.ycombinator.com/companies/robocurve), Jul 2026).
  - Inspect Robots supported 40 VLAs and more than 260 language models at launch ([YC launch](https://www.ycombinator.com/companies/robocurve), Jul 2026).
  - Inspect Robots had 96 GitHub stars and 13 forks ([GitHub](https://github.com/robocurve/inspect-robots), Jul 2026).
  - The company had zero YC job postings ([Y Combinator](https://www.ycombinator.com/companies/robocurve), Jul 2026).
- **Competitors (minimum 3, up to 5):**
  - METR (funding and revenue unknown): independently evaluates frontier AI systems but focuses on software-agent capabilities and risks rather than physical robot jobs ([METR](https://metr.org/research/), 2026).
  - Epoch AI (donor funding disclosed without a total; revenue unknown): maintains AI benchmarking and capabilities research while operating as a nonprofit rather than a real-world robotics evaluator ([Epoch AI](https://epoch.ai/about/transparency), 2026).
  - Artificial Analysis (funding and revenue unknown): provides comparative AI-model intelligence rather than operating reproducible physical robot environments ([YC launch](https://www.ycombinator.com/companies/robocurve), Jul 2026).
  - The direct competitive set is small because Robocurve identifies METR, Epoch AI, and Artificial Analysis as reference models from language-model evaluation while stating that no independent group continuously benchmarks physical robots ([YC launch](https://www.ycombinator.com/companies/robocurve), Jul 2026).
- **Why now:** Robocurve says frontier laboratories are targeting general-purpose robotics by 2028, while its launch framework already connects to 40-plus VLAs and more than 260 language models, increasing the number of systems that can be evaluated through a common interface ([Y Combinator](https://www.ycombinator.com/companies/robocurve), Jul 2026).

## Founders & Team

- **Jay Chooi (Founder and CEO):**
  - Background: Harvard BA in Computer Science and Mathematics and concurrent MA in Statistics; former MATS research fellow, UK AI Security Institute researcher, Inspect Evals contributor, and author of work published at ACM EC, ICML, ACL, and EMNLP ([Jay Chooi](https://chojeq.com/), Jul 2026; [Y Combinator](https://www.ycombinator.com/companies/robocurve), Jul 2026).
  - Twitter/X: @chooi_jeq; count not retrievable ([X](https://x.com/chooi_jeq), Jul 2026).
  - LinkedIn: Public profile at `linkedin.com/in/jeqcho`; headline not retrievable ([Jay Chooi](https://chojeq.com/), Jul 2026).
  - GitHub: @jeqcho; `myharvard_qguide_scraper` had 9 stars ([GitHub](https://github.com/jeqcho), Jul 2026).
- **Aris Zhu (Founder and CTO):**
  - Background: Studied computer science and physics at Harvard; worked at Amazon Robotics, Amazon AGI Labs, and Yondu Robotics, built robot navigation and fleet-management systems, and co-authored an IEEE Robotics and Automation Letters paper ([Y Combinator](https://www.ycombinator.com/companies/robocurve), Jul 2026).
  - Twitter/X: No public account found.
  - LinkedIn: “Robocurve,” with 410 followers ([LinkedIn](https://www.linkedin.com/in/aris-zhu), Jul 2026).
  - GitHub: No public repos found.
- **Co-founder relationship:** Both founders studied at Harvard, where Zhu worked in the Computational Robotics Lab and Chooi studied computer science, mathematics, and statistics ([Y Combinator](https://www.ycombinator.com/companies/robocurve), Jul 2026).
- **Founder-market fit:** Chooi’s documented AI-evaluation work and Zhu’s robotics deployment, navigation, and agent research cover the evaluation-software and physical-robot components required by the product ([Y Combinator](https://www.ycombinator.com/companies/robocurve), Jul 2026).

## Key Risks

- **Evaluator independence:** Robocurve requests evaluation, funding, and collaboration inquiries while presenting itself as an independent evaluator, creating a potential conflict if evaluated vendors become customers; no published conflict-management policy was found ([Robocurve](https://robocurve.org/), Jul 2026).
- **Benchmark representativeness:** The published catalog ranges from kitchen tasks to data-center construction, so benchmark validity depends on specifying task distributions and maintaining reproducible physical setups across different robot form factors ([Robocurve](https://robocurve.org/), Jul 2026).
- **Vendor-run substitution:** Frontier laboratories currently conduct evaluations internally and possess their own hardware, models, and telemetry, enabling them to publish competing results without relying on an external evaluator ([Y Combinator](https://www.ycombinator.com/companies/robocurve), Jul 2026).
- **Open-source replication:** Inspect Robots is MIT-licensed, allowing commercial and nonprofit organizations to reuse or fork the framework; the repository had 13 forks at the research date ([GitHub](https://github.com/robocurve/inspect-robots), Jul 2026).
- **Evidence availability:** Robocurve reported one completed physical-robot pilot but said full comparative results would be published later, limiting public verification of the evaluation findings at the research date ([YC launch](https://www.ycombinator.com/companies/robocurve), Jul 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Inspect Robots v1 shipped and one physical-robot pilot completed (Y Combinator, Jul 2026); 96 GitHub stars and 13 forks (GitHub, Jul 2026) |
| Revenue Signal | No public data found |
| Founders | Jay Chooi (CEO): Harvard CS/math and statistics graduate, former MATS and UK AI Security Institute researcher (Y Combinator, Jul 2026); Aris Zhu (CTO): Harvard CS/physics, Amazon Robotics, Amazon AGI Labs, and Yondu Robotics experience (Y Combinator, Jul 2026) |
| Competitors | METR (funding and revenue unknown, software-agent evaluation rather than physical robotics) (METR, 2026); Epoch AI (total funding and revenue unknown, nonprofit AI research and benchmarking) (Epoch AI, 2026); Artificial Analysis (funding and revenue unknown, comparative AI-model analysis rather than physical evaluation) (Y Combinator launch, Jul 2026) |
| Moat Signals | Integration with 40-plus VLAs and more than 260 language models; real-world-first framework with simulation support; 96 GitHub stars (Y Combinator and GitHub, Jul 2026) |
| Risk Factors | Open-source replication (GitHub, Jul 2026), vendor-run substitution (Y Combinator, Jul 2026), unpublished full pilot results (Y Combinator launch, Jul 2026) |
| Founder Reach | Jay Chooi: X count not retrievable, GitHub top repository 9 stars (X and GitHub, Jul 2026); Aris Zhu: LinkedIn 410 followers, no public GitHub repos found (LinkedIn, Jul 2026) |
| Distribution Signals | Inspect Robots GitHub repository: 96 stars and 13 forks (GitHub, Jul 2026); zero YC job postings (Y Combinator, Jul 2026) |
| Emails | No public data found |
