# Salem Robotics Inc

> Deploying robots for inspections in hazardous spaces, like nuclear.

| Field | Value |
|-------|-------|
| Website | https://salemroboticsinc.com |
| YC Page | https://www.ycombinator.com/companies/salem-robotics-inc |
| Batch | Summer 2026 |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 2 |
| Location | Austin, TX, USA |
| Tags | Hard Tech, Robotics, Energy, Defense, Industrial |
| YC Partner | Jon Xu |
| Emails | Engage@salemroboticsinc.com, Calebjhoran@gmail.com, Janak.panthi3@gmail.com, Jpanthi@utexas.edu |

## The Idea

- **Problem:** Nuclear radiation-protection technicians walk prescribed routes with handheld instruments, annotate maps, and transcribe results afterward, exposing personnel to hazardous areas while creating staffing and regulatory-record burdens ([Salem website, Aug 2026](https://www.salemroboticsinc.com/)).
- **Approach:** An operator configures a mission in a dashboard, after which Salem’s software navigates the robot, handles instruments and obstacles such as doors or valves, captures spatially linked measurements, and produces reviewable compliance records ([Launch YC, Aug 2026](https://www.ycombinator.com/launches/SLg-salem-robotics-autonomous-robots-for-hazardous-spaces)).
- **Differentiation:** Energy Robotics manages mixed robot-and-drone fleets, ANYbotics supplies its own ANYmal inspection robot, and Gecko combines climbing robots with infrastructure software, while Salem focuses on nuclear-first deterministic manipulation and reporting deployed on existing or turnkey robots ([Energy Robotics, Oct 2025](https://www.prnewswire.co.uk/news-releases/energy-robotics-secures-13-5-million-series-a-to-scale-critical-infrastructure-inspections-with-ai--robotics-302576307.html); [ANYbotics, Dec 2024](https://www.anybotics.com/news/anybotics-raises-additional-60-million-to-drive-u-s-expansion/); [Gecko Robotics](https://www.geckorobotics.com/about-us); [Salem website](https://www.salemroboticsinc.com/)).
- **Business Model:** [Inferred]: Salem could charge for one-to-two-week validation engagements followed by software licensing or turnkey robot deployments because it offers both installation on customer-owned robots and complete Salem systems ([Salem website, Aug 2026](https://www.salemroboticsinc.com/)).
- **TAM/SAM:** The global inspection-robot market was estimated at $5.62B in 2025 and projected to reach $29.82B by 2034 at a 20.38% CAGR, while the nuclear-inspection subset was estimated at $525.84M in 2025 and $1.01B by 2032 at a 9.85% CAGR ([Fortune Business Insights, Jul 2026](https://www.fortunebusinessinsights.com/inspection-robots-market-105440); [Research and Markets, 2026](https://www.researchandmarkets.com/reports/6126738/nuclear-inspection-robots-market-global)).
- **GTM / Distribution:** Salem solicits direct introductions to nuclear, oil-and-gas, chemical, biological, and space operations leaders and offers scoped validation engagements for prospective facilities ([Launch YC, Aug 2026](https://www.ycombinator.com/launches/SLg-salem-robotics-autonomous-robots-for-hazardous-spaces); [Salem website, Aug 2026](https://www.salemroboticsinc.com/)).

## Defensibility

- **Moat today:** The technical-complexity signal is a 2025 hardware-agnostic closed-chain manipulation planner that Janak Panthi reports was validated on Spot and UR5 across 10 tasks and ran four times faster than the compared method ([Janak Panthi, 2025](https://www.linkedin.com/posts/janak-panthi_a-closed-chain-approach-to-generating-affordance-activity-7351639734714093569-Rxry)).
- **Future moat:** [Inferred]: Repeated deployments could create proprietary facility maps, inspection histories, validated instrument integrations, and compliance-workflow switching costs, but Salem has not publicly identified completed customer deployments.
- **Market structure:** No structural barrier is identified at this stage because funded vendors already sell cross-platform autonomy software, complete legged robots, climbing robots, and confined-space drones into overlapping industrial customers ([Energy Robotics, Oct 2025](https://www.prnewswire.co.uk/news-releases/energy-robotics-secures-13-5-million-series-a-to-scale-critical-infrastructure-inspections-with-ai--robotics-302576307.html); [ANYbotics, Dec 2024](https://www.anybotics.com/news/anybotics-raises-additional-60-million-to-drive-u-s-expansion/); [Gecko Robotics](https://www.geckorobotics.com/about-us)).
- **Commoditization risk:** The published planner is available under a BSD-3-Clause license in a 14-star repository, allowing other robotics suppliers to study and reuse that research implementation ([GitHub, Aug 2026](https://github.com/UTNuclearRoboticsPublic/closed-chain-affordance)).

## Market & Traction

- **Traction signals:**
  - Active contract-scoping conversations across nuclear and oil and gas ([Launch YC, Aug 2026](https://www.ycombinator.com/launches/SLg-salem-robotics-autonomous-robots-for-hazardous-spaces)).
  - $25,000 Non Sibi Ventures RAVA Accelerator investment prize ([Rice Business Plan Competition, Apr 2026](https://rbpc.rice.edu/2026/results)).
  - 124 company LinkedIn followers ([LinkedIn, Jul 2026](https://www.linkedin.com/company/salem-robotics)).
  - 28 Launch YC votes ([Launch YC, Aug 2026](https://www.ycombinator.com/launches/SLg-salem-robotics-autonomous-robots-for-hazardous-spaces)).
  - Zero jobs listed on the YC company page ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/salem-robotics-inc)).
- **Competitors (minimum 3, up to 5):**
  - Energy Robotics ($17.9M raised, revenue unknown): hardware-agnostic fleet software for robots and drones across industrial sectors rather than Salem’s nuclear-first manipulation workflow ([Robotics.press, May 2026](https://robotics.press/news/energy-robotics-company-profile/)).
  - ANYbotics (over $130M raised, revenue unknown): supplies the ANYmal legged inspection robot and its data stack rather than primarily adding autonomy to customer-selected hardware ([ANYbotics, Dec 2024](https://www.anybotics.com/news/anybotics-raises-additional-60-million-to-drive-u-s-expansion/)).
  - Gecko Robotics ($347M raised, revenue unknown): uses climbing inspection robots and Cantilever software for asset-condition data across defense, energy, and manufacturing rather than autonomous routine radiation surveys ([Sacra, Jun 2025](https://sacra.com/c/gecko-robotics/); [Gecko Robotics](https://www.geckorobotics.com/about-us)).
- **Why now:** [Inferred]: The 2025 publication of a real-time, hardware-agnostic manipulation planner validated across 10 Spot and UR5 tasks created a technical basis for Salem’s door, valve, and instrument-handling workflows ([IEEE Transactions on Robotics/Janak Panthi, 2025](https://www.linkedin.com/posts/janak-panthi_a-closed-chain-approach-to-generating-affordance-activity-7351639734714093569-Rxry)).

## Founders & Team

- **Caleb Horan (Co-founder & CEO)** ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/salem-robotics-inc)):
  - Background: Horan earned a BS in mechanical engineering from Colorado State University and an MS in robotics from UT Austin, held an NRC fellowship, and worked on autonomous radiation-survey systems during an extended Los Alamos National Laboratory appointment ([UT Austin Nuclear Robotics Group](https://robotics.me.utexas.edu/people/15-graduate-students/18-graduate-students/164-caleb-horan); [Y Combinator](https://www.ycombinator.com/companies/salem-robotics-inc)).
  - Twitter/X: No public account found.
  - LinkedIn: “Co-founder and CEO of Salem Robotics” with 293 followers ([LinkedIn, Aug 2026](https://www.linkedin.com/posts/caleb-horan_robotics-ai-industrialautomation-activity-7477935003184578560-tFKV)).
  - GitHub: No public personal repos found.
- **Janak (Crasun) Panthi (Co-founder & CTO)** ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/salem-robotics-inc)):
  - Background: Panthi is a UT Austin robotics PhD researcher with six years of product and quadruped-deployment experience, Los Alamos work, U.S. Army service, and a 2025 first-author IEEE Transactions on Robotics paper ([Y Combinator](https://www.ycombinator.com/companies/salem-robotics-inc); [DBLP](https://dblp.org/pid/371/2853.html)).
  - Twitter/X: No public account found.
  - LinkedIn: “Salem Robotics Inc.” with 606 followers ([LinkedIn, Aug 2026](https://www.linkedin.com/posts/janak-panthi_robotics-ai-industrialautomation-activity-7477935057026834432-fK20)).
  - GitHub: No public personal handle found; Panthi authored `@UTNuclearRoboticsPublic/closed-chain-affordance`, which has 14 stars ([GitHub, Aug 2026](https://github.com/UTNuclearRoboticsPublic/closed-chain-affordance)).
- **Co-founder relationship:** Both founders worked in UT Austin’s Nuclear and Applied Robotics Laboratory and coauthored research on collaborative mobile-robot radiation surveys ([arXiv, 2024](https://arxiv.org/abs/2402.15008)).
- **Founder-market fit:** The founders’ nuclear-robotics research and Los Alamos deployment work align with the initial workflow, supplemented by scientific advisor Mitchell Pryor’s 20-plus years in hazardous-environment robotics ([Y Combinator](https://www.ycombinator.com/companies/salem-robotics-inc); [Salem website](https://www.salemroboticsinc.com/)).

## Key Risks

- **Commercial validation:** Public materials describe contract-scoping discussions and one-to-two-week validation engagements but identify no completed customer deployment, so conversion depends on site-level demonstrations ([Launch YC, Aug 2026](https://www.ycombinator.com/launches/SLg-salem-robotics-autonomous-robots-for-hazardous-spaces); [Salem website](https://www.salemroboticsinc.com/)).
- **Safety-case verification:** Salem states that its stack has theoretical safety guarantees, but its public materials do not identify an operator or regulator that has accepted those guarantees for production use ([Launch YC, Aug 2026](https://www.ycombinator.com/launches/SLg-salem-robotics-autonomous-robots-for-hazardous-spaces)).
- **Research exclusivity:** The founder’s referenced planning framework is published and BSD-licensed, allowing competitors to reuse the research code while Salem must differentiate through its remaining software and deployment workflow ([GitHub, Aug 2026](https://github.com/UTNuclearRoboticsPublic/closed-chain-affordance)).
- **Platform integration:** Salem markets hardware-agnostic deployment, while the related public ROS implementation lists ready-made packages only for Spot and a Kinova Gen3 arm, requiring additional validation for other robots and instruments ([GitHub, Aug 2026](https://github.com/UTNuclearRoboticsPublic/closed-chain-affordance-ros)).
- **Competitive overlap:** Energy Robotics, ANYbotics, and Gecko have raised $17.9M, over $130M, and $347M respectively for overlapping industrial inspection products ([Robotics.press, May 2026](https://robotics.press/news/energy-robotics-company-profile/); [ANYbotics, Dec 2024](https://www.anybotics.com/news/anybotics-raises-additional-60-million-to-drive-u-s-expansion/); [Sacra, Jun 2025](https://sacra.com/c/gecko-robotics/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $5.62B global inspection-robot market in 2025, projected to reach $29.82B by 2034 at a 20.38% CAGR ([Fortune Business Insights, Jul 2026](https://www.fortunebusinessinsights.com/inspection-robots-market-105440)) |
| SAM | $525.84M nuclear-inspection-robot market in 2025, projected to reach $1.01B by 2032 at a 9.85% CAGR ([Research and Markets, 2026](https://www.researchandmarkets.com/reports/6126738/nuclear-inspection-robots-market-global)) |
| Traction | Active nuclear and oil-and-gas contract scoping ([Launch YC, Aug 2026](https://www.ycombinator.com/launches/SLg-salem-robotics-autonomous-robots-for-hazardous-spaces)); $25,000 accelerator investment prize ([Rice RBPC, Apr 2026](https://rbpc.rice.edu/2026/results)); 124 LinkedIn followers ([LinkedIn, Jul 2026](https://www.linkedin.com/company/salem-robotics)) |
| Revenue Signal | No public data found |
| Founders | Caleb Horan (CEO): CSU mechanical-engineering BS, UT Austin robotics MS, Los Alamos robotics work ([YC/UT Austin](https://www.ycombinator.com/companies/salem-robotics-inc)); Janak Panthi (CTO): UT Austin robotics PhD researcher, Los Alamos deployment experience, U.S. Army ([Y Combinator](https://www.ycombinator.com/companies/salem-robotics-inc)) |
| Competitors | Energy Robotics ($17.9M raised, revenue unknown, mixed robot-and-drone fleet software) ([Robotics.press, May 2026](https://robotics.press/news/energy-robotics-company-profile/)); ANYbotics (over $130M raised, revenue unknown, integrated ANYmal hardware) ([ANYbotics, Dec 2024](https://www.anybotics.com/news/anybotics-raises-additional-60-million-to-drive-u-s-expansion/)); Gecko Robotics ($347M raised, revenue unknown, climbing robots and asset software) ([Sacra, Jun 2025](https://sacra.com/c/gecko-robotics/)) |
| Moat Signals | 2025 closed-chain planner reported four-times-faster planning across 10 validated tasks, with a 14-star public implementation ([Janak Panthi/GitHub, Aug 2026](https://github.com/UTNuclearRoboticsPublic/closed-chain-affordance)) |
| Risk Factors | No publicly named completed deployments, safety guarantees not publicly tied to regulator acceptance, BSD-licensed core research, funded overlapping vendors ([Launch YC/GitHub, Aug 2026](https://www.ycombinator.com/launches/SLg-salem-robotics-autonomous-robots-for-hazardous-spaces)) |
| Founder Reach | Caleb Horan: LinkedIn 293, no public X or GitHub found ([LinkedIn, Aug 2026](https://www.linkedin.com/posts/caleb-horan_robotics-ai-industrialautomation-activity-7477935003184578560-tFKV)); Janak Panthi: LinkedIn 606, no public X found, authored 14-star organization repo ([LinkedIn/GitHub, Aug 2026](https://github.com/UTNuclearRoboticsPublic/closed-chain-affordance)) |
| Distribution Signals | 28 Launch YC votes ([Launch YC, Aug 2026](https://www.ycombinator.com/launches/SLg-salem-robotics-autonomous-robots-for-hazardous-spaces)); 124 LinkedIn followers ([LinkedIn, Jul 2026](https://www.linkedin.com/company/salem-robotics)); zero YC-listed jobs ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/salem-robotics-inc)) |
| Emails | Engage@salemroboticsinc.com ([Salem website, Aug 2026](https://www.salemroboticsinc.com/)); Calebjhoran@gmail.com and Janak.panthi3@gmail.com ([Rice RBPC, Apr 2026](https://rbpc.rice.edu/sites/rbpc/files/2026-04/RBPC-2026-Competition-Company-Database.pdf)); Jpanthi@utexas.edu ([Rice Alliance, Mar 2026](https://alliance.rice.edu/sites/alliance/files/2026-03/260211%20HETI%20CERA%20Program%20-%20FINAL.pdf)) |
