# Robocurve

> We measure how well robots can do real-world jobs.

| Field | Value |
|-------|-------|
| Website | https://robocurve.org |
| YC Page | https://www.ycombinator.com/companies/robocurve |
| Batch | Summer 2026 (YC company page) |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Hard Tech, Hardware, Robotics, Open Source, AI |
| YC Partner | Ankit Gupta (YC company page) |
| Emails | No public data found |

## The Idea

- **Problem:** Frontier robotics labs (Physical Intelligence, Skild, 1X, Figure) evaluate in-house with unverified demo videos, and buyers/investors have no independent measure of real-world capability (YC company page; Robocurve description).
- **Approach:** Operate physical hardware and real-world task setups to score frontier robot models on reproducible benchmarks via an open-source framework, "Inspect Robots," plus a benchmark catalog "WorldEvals" (YC page; worldevals PyPI listing).
- **Differentiation:** vs. RobotPerf (open-source consortium measuring robotics *computing* performance, not model task capability — accelerationrobotics.com); vs. ManipulationNet (academic hardware-kit infrastructure hosted across universities — manipulation-net.org); vs. RoboEval (academic *simulation* benchmark for bimanual manipulation, arXiv 2507.00435); Robocurve differentiates as an independent, continuously operated real-hardware benchmarking service (YC page).
- **Business Model:** [Inferred]: Benchmarking-as-a-service to frontier labs and their investors, given YC description emphasizes "continuous benchmarking as a service"; no pricing page published (robocurve.org).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** [Inferred]: Direct sales/pilots to frontier robotics labs, seeded by open-sourcing Inspect Robots to build developer mindshare (framework already shipped v1 per YC page); first pilot scored a frontier model on a real robot (YC page).

## Defensibility

- **Moat today:** Open-source framework "Inspect Robots" (v1 shipped) built as the robotics analogue of UK AISI's Inspect Evals — Jay Chooi is a top-7% contributor to Inspect Evals (search snippet re: jeqcho GitHub, UKGovernmentBEIS/inspect_evals), giving privileged framework fluency.
- **Future moat:** [Inferred]: If Robocurve's scores become the reference cited by labs and investors, network effects accrue as more labs submit models to be scored and more benchmark authors publish on the platform — unproven because only one pilot has been run (YC page).
- **Market structure:** [Inferred]: Frontier labs cannot credibly self-score for third parties (conflict of interest), and academic consortia (RobotPerf, ManipulationNet) lack a continuously operated commercial service — creating room for an independent operator; not yet demonstrated with paying customers.
- **Commoditization risk:** Academic groups already publish real-world benchmarks (ManipulationNet spans Rice, NIST, MIT, Berkeley, CMU — manipulation-net.org), and any well-resourced lab could stand up an independent evals org given hardware access.

## Market & Traction

- **Traction signals:**
  - v1 of Inspect Robots open-source framework shipped (YC page).
  - First pilot: scored a frontier model on a real robot (YC page).
  - WorldEvals package published on PyPI (pypi.org/project/worldevals).
  - Jay Chooi ranked top-7% contributor on UKGovernmentBEIS/inspect_evals (search snippet, GitHub).
  - No public data found for revenue, paying customers, GitHub star counts on Robocurve repos, Product Hunt launch, press coverage, or company social follower counts.
- **Competitors:**
  - RobotPerf (revenue unknown, no disclosed funding — accelerationrobotics.com): open-source computing benchmarks, not model capability benchmarks.
  - ManipulationNet (academic consortium, no disclosed funding — manipulation-net.org): distributed hardware kits across universities rather than a single operated service.
  - RoboEval (academic, no disclosed funding — arXiv 2507.00435): simulation-based bimanual manipulation benchmark.
  - Frontier lab in-house evals at Physical Intelligence, Skild, 1X (cbinsights.com, skild.ai): compete for "trusted score" mindshare but are self-reported.
- **Why now:** Per YC page, frontier labs are targeting general-purpose robotics by 2028 with rising foundation-model investment (Physical Intelligence, Skild, 1X, Figure raising at multi-billion valuations per cbinsights.com), yet no independent third-party evals infrastructure exists to verify claims.

## Founders & Team

- **Jay Chooi (Founder and CEO):**
  - Background: Harvard BA in Computer Science and Mathematics with concurrent MA in Statistics; thesis "Computational Perspectives on Democracy in the Age of AI" (Highest Honors); Rhodes Scholar Class of 2026 (rhodeshouse.ox.ac.uk); MATS Research Fellow under Prof. Shi Feng on AI safety (chojeq.com); top-7% contributor to UKGovernmentBEIS/inspect_evals (search snippet re: jeqcho GitHub); Gold medalist, 2021 International Olympiad in Astronomy and Astrophysics (chojeq.com).
  - Twitter/X: No public account found in search results.
  - LinkedIn: "AI Safety and Preparedness | Harvard, Rhodes" at linkedin.com/in/jeqcho (search snippet); follower count not retrievable.
  - GitHub: @jeqcho, 104 repositories (search snippet); no notable repo star count surfaced.
- **Aris Zhu (Founder and CTO):**
  - Background: Harvard SEAS undergraduate mentee of Prof. Heng Yang (hankyang.seas.harvard.edu); co-author of "Strengthening Generative Robot Policies through Predictive World Modeling" (GPC), published IEEE Robotics and Automation Letters 2025 (computationalrobotics.seas.harvard.edu/GPC/); LinkedIn lists prior "Software Engineer, Amazon" (linkedin.com/in/aris-zhu snippet).
  - Twitter/X: No public account confirmed.
  - LinkedIn: linkedin.com/in/aris-zhu, headline "Software Engineer - Amazon" (search snippet, likely pre-Robocurve).
  - GitHub: No public repos confirmed under this identity.
- **Co-founder relationship:** [Inferred]: Both are affiliated with Harvard (Chooi undergrad/masters CS+Stats; Zhu SEAS robotics undergrad research), suggesting a Harvard connection; not explicitly confirmed in public sources.
- **Founder-market fit:** Chooi has direct AI-evals credentials via the Inspect ecosystem (Inspect Evals contributions) and AI-safety research (MATS), while Zhu brings peer-reviewed robotics policy-learning research (GPC in IEEE RAL 2025) — a documented pairing of evals engineering with hands-on robotics as required by the YC thesis; no external advisors or investors beyond YC disclosed.

## Key Risks

- **Buyer willingness to pay:** Frontier robotics labs may prefer to self-report scores rather than pay for independent third-party evaluation, and no customer/pilot revenue has been disclosed (YC page shows only a "pilot," not paid); mitigation is open-source framework adoption creating pull demand.
- **Academic and non-profit substitution:** ManipulationNet (Rice/NIST/MIT/Berkeley/CMU — manipulation-net.org) and RobotPerf (consortium — accelerationrobotics.com) already publish reproducible robotics benchmarks for free, capping pricing power; no differentiated commercial offering has been published.
- **Hardware operating cost & scaling:** YC description acknowledges "operating and maintaining physical hardware and real-world setups" as the crux, meaning gross margins depend on capex/labor per benchmark run; no data on unit cost per evaluation has been disclosed.
- **Technical feasibility of "trusted score":** Reproducibility across labs' proprietary robot hardware is unresolved in the field (per RoboEval and ManipulationNet papers noting hardware-standardization difficulty — arXiv 2507.00435; 2603.04363); Robocurve has run only one pilot.
- **Name/PBC structure signaling:** Robocurve is registered as a Public Benefit Corporation (robocurve.org footer) with mission framing "Forecasting Physical Automation for Societal Preparedness," which may limit venture-scale return expectations; no dual-class or capped-profit structure disclosed.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Inspect Robots v1 shipped (YC page, 2026); first frontier-model pilot on real robot (YC page, 2026); worldevals package on PyPI (pypi.org) |
| Revenue Signal | No public data found |
| Founders | Jay Chooi (CEO): Harvard BA CS+Math / MA Stats, Rhodes Scholar 2026, MATS Research Fellow, top-7% contributor to Inspect Evals. Aris Zhu (CTO): Harvard SEAS robotics research, co-author GPC paper IEEE RAL 2025, prior Amazon SWE. |
| Competitors | RobotPerf (funding unknown, revenue unknown, computing-perf benchmarks not model capability — accelerationrobotics.com); ManipulationNet (academic consortium, no funding disclosed, distributed hardware kits — manipulation-net.org); RoboEval (academic, no funding disclosed, simulation-based — arXiv 2507.00435); in-house evals at Physical Intelligence / Skild / 1X (self-reported, not independent — cbinsights.com) |
| Moat Signals | Inspect Robots open-source framework v1 (YC page); founder is top-7% contributor to UK AISI Inspect Evals (jeqcho GitHub search snippet) |
| Risk Factors | Buyer willingness to pay for third-party evals, free academic substitutes (ManipulationNet, RobotPerf), hardware operating cost per benchmark |
| Founder Reach | Jay Chooi: Twitter not found, LinkedIn linkedin.com/in/jeqcho (count not retrievable), GitHub @jeqcho 104 repos (star count not surfaced). Aris Zhu: Twitter not found, LinkedIn linkedin.com/in/aris-zhu (count not retrievable), GitHub not found. |
| Distribution Signals | No public data found (no Product Hunt launch, press coverage, or Chrome/app store presence surfaced) |
| Emails | No public data found |

Sources:
- [Robocurve on Y Combinator](https://www.ycombinator.com/companies/robocurve)
- [Robocurve homepage](https://robocurve.org)
- [Jay Chooi personal site](https://chojeq.com/)
- [Jay Chooi — Rhodes Trust](https://www.rhodeshouse.ox.ac.uk/scholar-community/rhodes-scholar-bios/rhodes-scholars-class-of-2026/jay-chooi/)
- [jeqcho on GitHub](https://github.com/jeqcho)
- [UK AISI Inspect Evals repo](https://github.com/UKGovernmentBEIS/inspect_evals)
- [worldevals on PyPI](https://pypi.org/project/worldevals/)
- [GPC: Strengthening Generative Robot Policies (Harvard)](https://computationalrobotics.seas.harvard.edu/GPC/)
- [Aris Zhu LinkedIn](https://www.linkedin.com/in/aris-zhu/)
- [RobotPerf](https://accelerationrobotics.com/robotperf.php)
- [ManipulationNet](https://manipulation-net.org/)
- [RoboEval arXiv 2507.00435](https://arxiv.org/abs/2507.00435)
- [Physical Intelligence (CB Insights)](https://www.cbinsights.com/company/physical-intelligence)
- [Skild AI](https://www.skild.ai/)
