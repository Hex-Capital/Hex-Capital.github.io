# Runtime.si

> Evaluation Infrastructure for Robotics (YC F26)

| Field | Value |
|-------|-------|
| Website | https://runtime.si/ |
| YC Page | https://www.ycombinator.com/companies/runtimesi |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/runtimesi)) |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 5 |
| Location | San Francisco, CA, USA |
| Tags | Robotics, Infrastructure, AI |
| YC Partner | Aaron Epstein ([Y Combinator](https://www.ycombinator.com/companies/runtimesi)) |
| Emails | lemonzhong001@163.com ([CTO’s website](https://nz-liam-zhong.github.io/), Oct 2026) |

## The Idea

- **Problem:** [Inferred]: Robotics developers need to identify policy failures before deployment, while physical testing and individually constructed simulation tests constrain the situations they can examine.
- **Approach:** Runtime’s Nomad harness sends camera observations and robot state to models, checks proposed actions against robot limits, executes them in simulation, and records outcomes against native task-success predicates ([Runtime research, Oct 15, 2026](https://runtime.si/research/skills-for-agentic-robotic-manipulation/)).
- **Differentiation:** Runtime emphasizes simulated task coverage through its announced SimInfinity benchmark, while SignalFlag orchestrates hardware, replay, and simulation evaluations, and Duality’s Falcon supplies digital-twin environments and synthetic data ([Runtime](https://runtime.si/); [SignalFlag](https://signalflag.ai/product); [Duality](https://www.duality.ai/), retrieved Oct 27, 2026).
- **Business Model:** [Inferred]: Hosted evaluation subscriptions or compute-based charges are possible monetization paths for this infrastructure, but published pricing and company revenue: No public data found.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; the broader robot-simulation software market is forecast at $2.25 billion in 2026 and $4.11 billion in 2030, with 16.3% forecast CAGR ([The Business Research Company, Sep 2026](https://www.thebusinessresearchcompany.com/report/robot-simulation-software-market-report)).
- **GTM / Distribution:** The website collects waitlist registrations, publishes research, and directs visitors to its company X account ([Runtime, retrieved Oct 27, 2026](https://runtime.si/)).

## Defensibility

- **Moat today:** Runtime documents an evaluation harness with action validation, execution traces, and task predicates, but proprietary data rights, patents, or demonstrated switching costs: No public data found ([Runtime research, Oct 2026](https://runtime.si/research/skills-for-agentic-robotic-manipulation/)).
- **Future moat:** [Inferred]: A growing collection of failure cases linked to physical deployment outcomes could improve test selection, but public evidence of that feedback loop: No public data found.
- **Market structure:** [Inferred]: No structural barrier identified at this stage, because existing simulation and evaluation suppliers already serve overlapping workflows.
- **Commoditization risk:** [Inferred]: Robotics teams could assemble overlapping capabilities using NVIDIA’s open robotics frameworks, which include simulation, policy learning, and evaluation workflows ([NVIDIA, Oct 21, 2026](https://nvidianews.nvidia.com/news/nvidia-advances-isaac-platform-for-general-purpose-robotics-with-new-reference-humanoid-frameworks-simulation-pipelines-and-data/)).

## Market & Traction

- **Traction signals:**
  - SimInfinity announced as a forthcoming collection of 10,000 open-source simulations, rather than a completed release ([Runtime website, Oct 17, 2026](https://runtime.si/)).
  - Published research reports 152/525 successes without skills versus 283/525 for selected skill cohorts across matched tasks, explicitly describing the comparison as retrospective and in-sample ([Runtime research, Oct 15, 2026](https://runtime.si/research/skills-for-agentic-robotic-manipulation/)).
  - Four YC-listed openings cover mechatronics, electrical engineering, robotics software infrastructure, and GTM, although their descriptions reference Lambda Robotics ([YC, retrieved Oct 27, 2026](https://www.ycombinator.com/companies/runtimesi)).
  - YC and Pareto Holdings backing, plus NVIDIA Inception participation, are reported by the CTO ([CTO’s website, Oct 2026](https://nz-liam-zhong.github.io/)).
  - Company accounts include X @runtimesi and LinkedIn “Runtime (YC F26),” with follower counts not retrievable ([Runtime](https://runtime.si/); [LinkedIn](https://www.linkedin.com/company/runtime-yc-f26), retrieved Oct 27, 2026).
- **Competitors:**
  - **SignalFlag, formerly ReSim ($10M disclosed seed funding, revenue unknown):** Supports hardware, field-data, replay, and simulation evaluations; its located seed announcement names Lightspeed and Shield Capital as leads ([company funding announcement, 2024](https://www.linkedin.com/posts/erikep_very-proud-to-announce-and-show-off-some-activity-7217198081291784192-kF09); [product](https://signalflag.ai/product); [rename, Sep 21, 2026](https://docs.resim.ai/rename/)).
  - **Duality AI (funding: No public data found; revenue unknown):** Falcon provides Unreal Engine-based digital twins, synthetic data, and closed-loop autonomy validation, overlapping Runtime’s simulation offering ([Duality, retrieved Oct 27, 2026](https://www.duality.ai/)).
  - **Foretellix ($135M raised, revenue unknown):** An adjacent vehicle-focused alternative combining real-world and simulated verification; its latest located financing announcement reports an $85M Series C led by 83North ([Foretellix, Dec 5, 2023](https://www.foretellix.com/foretellix-raises-85-million-in-series-c-closing/)).
- **Why now:** [Inferred]: NVIDIA’s October 2026 release of open robotics learning and evaluation workflows expands the available tooling for testing general-purpose robot policies ([NVIDIA, Oct 21, 2026](https://nvidianews.nvidia.com/news/nvidia-advances-isaac-platform-for-general-purpose-robotics-with-new-reference-humanoid-frameworks-simulation-pipelines-and-data/)).

## Founders & Team

- **Chen Peng (Co-founder/CEO):**
  - Background: Penn physics BA, GRASP/Penn Engineering researcher, and former BlackRock investment analyst; prior exits: No public data found ([YC founder profile](https://www.ycombinator.com/founders/chen-peng)).
  - Twitter/X: @chennpeng; count not retrievable ([YC founder profile](https://www.ycombinator.com/founders/chen-peng)).
  - LinkedIn: Profile indexed as “Penn Engineering,” with 2K followers; headline not retrievable ([LinkedIn, retrieved Oct 27, 2026, via search snippet](https://www.linkedin.com/in/chen-peng-6737681bb)).
  - GitHub: No public repos found.
- **Yim Ying (Co-founder):**
  - Background: Penn mechanical-engineering background and robotics productization, manipulation, and manufacturing experience; prior employers or exits: No public data found ([YC founder profile](https://www.ycombinator.com/founders/qingyun-ying)).
  - Twitter/X: No public account found.
  - LinkedIn: YC-linked profile resolves to the indexed Yim Ying profile, showing 93 followers; headline not retrievable ([YC](https://www.ycombinator.com/founders/qingyun-ying); [LinkedIn, retrieved Oct 27, 2026, via search snippet](https://www.linkedin.com/in/yim-ying-46558235b)).
  - GitHub: No public repos found.
- **Liam Zhong (Co-founder/CTO; also Ningze Zhong):**
  - Background: Sun Yat-sen B.Eng. and Penn robotics master’s studies at GRASP, with research interests in control, reinforcement learning, and computer vision; prior exits: No public data found ([personal website, Oct 2026](https://nz-liam-zhong.github.io/); [YC](https://www.ycombinator.com/founders/ningze-zhong)).
  - Twitter/X: No public account found.
  - LinkedIn: Profile linked by YC; headline and follower count not retrievable ([YC founder profile](https://www.ycombinator.com/founders/ningze-zhong)).
  - GitHub: @NZ-Liam-Zhong; Awesome_AI_for_Robotics_Learning_Notes has 29 stars ([GitHub, retrieved Oct 27, 2026](https://github.com/NZ-Liam-Zhong/Awesome_AI_for_Robotics_Learning_Notes)).
- **Co-founder relationship:** All founders have Penn affiliations, including GRASP connections for Peng and Zhong; how they met: No public data found ([YC](https://www.ycombinator.com/companies/runtimesi)).
- **Founder-market fit:** [Inferred]: Their documented robotics research, control, and manipulation backgrounds align with evaluation infrastructure; the CTO identifies YC and Pareto Holdings as backers ([YC](https://www.ycombinator.com/companies/runtimesi); [CTO website](https://nz-liam-zhong.github.io/)).

## Key Risks

- **Physical transfer:** [Inferred]: Simulated manipulation results may miss physical deployment failures; the published experiments do not establish held-out generalization ([Runtime research, Oct 2026](https://runtime.si/research/skills-for-agentic-robotic-manipulation/)).
- **Benchmark comparability:** The research selects cohorts after observing outcomes, mixes evaluation budgets and platforms, and says artifact verification remains pending, limiting causal interpretation ([Runtime research, Oct 2026](https://runtime.si/research/skills-for-agentic-robotic-manipulation/)).
- **Existing substitutes:** [Inferred]: SignalFlag’s combined hardware, replay, and simulation workflow could reduce demand for a separate evaluation product ([SignalFlag product](https://signalflag.ai/product)).
- **Product-history ambiguity:** YC job copy describes Lambda Robotics’ data-center robots and early pilots, while Runtime’s October announcement describes simulation infrastructure; no dated pivot explanation was found, so those pilots cannot establish current-product traction ([YC GTM posting](https://www.ycombinator.com/companies/runtimesi/jobs/UFzIOBo-founding-gtm); [Runtime](https://runtime.si/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader robot-simulation software: $2.25B forecast for 2026, 16.3% forecast CAGR through 2030; company-specific TAM unavailable ([The Business Research Company, Sep 2026](https://www.thebusinessresearchcompany.com/report/robot-simulation-software-market-report)) |
| SAM | No public data found |
| Traction | Planned 10,000-simulation benchmark ([Runtime, Oct 2026](https://runtime.si/)); four advertised openings ([YC, Oct 2026](https://www.ycombinator.com/companies/runtimesi)) |
| Revenue Signal | No public data found |
| Founders | Chen Peng, CEO: Penn physics, GRASP, BlackRock; Yim Ying, founder: Penn mechanical engineering, manipulation; Liam Zhong, CTO: Penn robotics, control and RL ([YC founder profiles](https://www.ycombinator.com/companies/runtimesi)) |
| Competitors | SignalFlag ($10M disclosed seed, revenue unknown, multimodal evaluation) ([company announcement](https://www.linkedin.com/posts/erikep_very-proud-to-announce-and-show-off-some-activity-7217198081291784192-kF09)); Duality (funding unavailable, revenue unknown, digital twins) ([Duality](https://www.duality.ai/)); Foretellix ($135M raised, revenue unknown, vehicle verification) ([Foretellix](https://www.foretellix.com/foretellix-raises-85-million-in-series-c-closing/)) |
| Moat Signals | No public data found |
| Risk Factors | In-sample comparisons and pending artifact verification ([Runtime research](https://runtime.si/research/skills-for-agentic-robotic-manipulation/)); conflicting product descriptions ([YC job posting](https://www.ycombinator.com/companies/runtimesi/jobs/UFzIOBo-founding-gtm)) |
| Founder Reach | Peng: LinkedIn 2K followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/chen-peng-6737681bb)); Ying: LinkedIn 93 followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/yim-ying-46558235b)); Zhong: robotics-notes repository, 29 stars ([GitHub](https://github.com/NZ-Liam-Zhong/Awesome_AI_for_Robotics_Learning_Notes)); retrieved Oct 27, 2026 |
| Distribution Signals | Waitlist, research publication, and company X account ([Runtime, Oct 2026](https://runtime.si/)) |
| Emails | lemonzhong001@163.com ([CTO website, Oct 2026](https://nz-liam-zhong.github.io/)) |
