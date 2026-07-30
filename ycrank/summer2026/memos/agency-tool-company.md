# Agency Tool Company

> Reliable infrastructure to build, deploy and manage real-world robots.

| Field | Value |
|-------|-------|
| Website | https://agencytool.com |
| YC Page | https://www.ycombinator.com/companies/agency-tool-company |
| Batch | Summer 2026 |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 3 |
| Location | Denver, CO, USA |
| Tags | Developer Tools, Robotics, Automation, Infrastructure, Self-Driving Vehicles |
| YC Partner | Harshita Arora |
| Emails | mailbox@agencytool.com |

## The Idea

- **Problem:** Robotics engineering and operations teams rely on SSH, Docker pulls, scripts, and spreadsheets to update intermittently connected robots, causing failed transfers, manual coordination, and delayed releases ([Agency Tool Company](https://agencytool.com/)).
- **Approach:** ATC Deploy transfers only changed bytes using delta updates and compression, resumes interrupted downloads, supports selective fleet targeting and rollback, and delivers Linux artifacts including containers, models, configurations, and operating-system images ([Agency Tool Company](https://agencytool.com/)).
- **Differentiation:** Unlike Docker pulls and SCP, ATC Deploy claims updates up to 20 times faster and resumable, byte-level transfers; unlike Formant and InOrbit’s broader fleet-observability and orchestration products, ATC emphasizes software delivery and target-hardware CI ([YC](https://www.ycombinator.com/companies/agency-tool-company), [Formant](https://www.formant.ai/), [InOrbit](https://www.inorbit.ai/product)).
- **Business Model:** [Inferred]: Likely B2B software sold to robotics developers and fleet operators using fleet size, data transferred, or embedded-compute usage because Deploy targets fleets from one to thousands of robots while Build supplies hosted hardware runners; no public pricing was found.
- **TAM/SAM:** Robot fleet-management software was valued at $703.46 million in 2025 and forecast to reach $1.91 billion by 2032 at a 15.29% CAGR ([Research and Markets](https://www.researchandmarkets.com/reports/6160176/robot-fleet-management-software-market-global)).
- **GTM / Distribution:** Initial distribution uses founder relationships with robotics operators, three design/launch partners, a waitlist, YC Launch, and the ROS developer community ([YC](https://www.ycombinator.com/companies/agency-tool-company), [Open Robotics Discourse, Jul 2026](https://discourse.openrobotics.org/t/agency-tool-company-atc-deploy-launch/57019)).

## Defensibility

- **Moat today:** Deploy is operating with Burro, Tempo Works, and Gather AI, providing implementation experience across agriculture, construction, and logistics robotics, but no patents or proprietary-data scale have been disclosed ([YC](https://www.ycombinator.com/companies/agency-tool-company)).
- **Future moat:** [Inferred]: Deployment histories, integrations, device configurations, and accumulated failure handling could produce switching costs, but the company has disclosed only three launch partners.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Formant and InOrbit already provide robot fleet software and OTA configuration or software updates, while Balena and internal platform teams can supply adjacent Linux-device deployment infrastructure ([Formant](https://www.formant.ai/), [InOrbit](https://www.inorbit.ai/product), [Balena](https://blog.balena.io/balena-secures-14-4m-to-grow-team-bring-edge-computing-to-every-developer/)).

## Market & Traction

- **Traction signals:**
  - Three launch partners across agriculture, construction, and logistics robotics ([YC](https://www.ycombinator.com/companies/agency-tool-company), Jul 2026).
  - ATC Deploy is used by Burro, Tempo Works, and Gather AI ([YC](https://www.ycombinator.com/companies/agency-tool-company), Jul 2026).
  - Burro’s partner fleet exceeds 750 deployed machines, although this is Burro’s fleet rather than Agency Tool Company’s own deployment count ([YC](https://www.ycombinator.com/companies/agency-tool-company), Jul 2026).
  - Zero jobs listed ([YC](https://www.ycombinator.com/companies/agency-tool-company), Jul 2026).
  - Product launch received one Open Robotics Discourse like ([Open Robotics Discourse](https://discourse.openrobotics.org/t/agency-tool-company-atc-deploy-launch/57019), Jul 2026).
- **Competitors (minimum 3, up to 5):**
  - Formant ($45.25M raised, revenue unknown): broader fleet observability, teleoperation, tasking, and operations platform versus ATC’s deployment and embedded-CI focus ([CB Insights](https://www.cbinsights.com/company/formant-1)).
  - InOrbit ($10M latest Series A, revenue unknown): robot orchestration, monitoring, and OTA configuration across heterogeneous fleets versus ATC’s byte-delta software delivery and hardware-backed CI ([CB Insights](https://www.cbinsights.com/company/inorbit/financials), [InOrbit](https://www.inorbit.ai/product)).
  - Roboto AI ($4.8M raised, revenue unknown): robotics-log ingestion and failure analysis rather than fleet software delivery or embedded-compute CI ([Roboto](https://www.roboto.ai/blog/roboto-raises-seed-funding-4-8m/)).
  - Balena ($31.4M raised, revenue unknown): general Linux/IoT device deployment and fleet management rather than robotics-specific rollout workflows ([UK Research Excellence Framework](https://results2021.ref.ac.uk/impact/636a842b-5213-4249-96e8-12053a8732a8/pdf)).
- **Why now:** [Inferred]: Physical-AI investment and rising production deployments are increasing the number of field robots whose large software images, hardware accelerators, and intermittent connectivity require deployment tooling, while the founders launched after operating Scythe robots in more than 30 states ([Davis Foster LinkedIn](https://www.linkedin.com/in/davisfoster), 2026).

## Founders & Team

- **Jack Morrison (Founder and CEO):**
  - Background: BA in Computer Science from Bowdoin; previously co-founded Replica Labs, worked on computer vision at Occipital, and led Scythe Robotics from 2018 until its 2026 acquisition by ASI ([YC](https://www.ycombinator.com/companies/agency-tool-company)).
  - Twitter/X: No public account found.
  - LinkedIn: “Founder and CEO at Agency Tool Company”; approximately 6,799 followers ([LinkedIn](https://www.linkedin.com/posts/morrisonjack_after-seven-unforgettable-years-im-sharing-activity-7334247421146800128-nxrd), 2026).
  - GitHub: No public repos found.
- **Davis Foster (Founder):**
  - Background: Rochester Institute of Technology dropout, 2019 Thiel Fellow, and Scythe Robotics co-founder and engineering leader whose team shipped hundreds of robots before ASI’s 2026 acquisition ([Forbes](https://www.forbes.com/profile/davis-foster/), [YC](https://www.ycombinator.com/companies/agency-tool-company)).
  - Twitter/X: @davistfoster; count not retrievable ([R14](https://r14now.com/t/robotics%2Bfounder)).
  - LinkedIn: “Founder at Agency Tool Company”; approximately 2,000 followers ([LinkedIn](https://www.linkedin.com/in/davisfoster), 2026).
  - GitHub: No public repos found.
- **Co-founder relationship:** Morrison and Foster worked together for eight years at Scythe Robotics before its acquisition by ASI ([Scythe Robotics](https://scytherobotics.com/blog-posts/then-now-next), Mar 2026).
- **Founder-market fit:** Morrison and Foster built and deployed hundreds of autonomous machines at Scythe and describe ATC as the deployment platform they lacked during that work ([YC](https://www.ycombinator.com/companies/agency-tool-company)).

## Key Risks

- **Platform overlap:** Formant and InOrbit already offer robot fleet management, with InOrbit explicitly supporting remote software and configuration updates, creating feature-level substitution risk ([InOrbit](https://www.inorbit.ai/product), [Formant](https://www.formant.ai/)).
- **Internal-tool substitution:** Prospective customers currently use SSH, Docker, scripts, and spreadsheets, and may continue maintaining these systems instead of adopting another runtime-adjacent vendor ([Agency Tool Company](https://agencytool.com/)).
- **Deployment safety:** ATC manages operating-system images, models, configuration, activation, and rollback on physical robots, so delivery or targeting errors can affect operating fleets; the company describes histories and approval chains as controls but publishes no reliability statistics ([Agency Tool Company](https://agencytool.com/)).
- **Product readiness split:** Deploy is in beta and Build is labeled “coming soon,” leaving the two-product platform at different readiness levels ([Agency Tool Company](https://agencytool.com/)).
- **Customer concentration:** The company discloses three launch partners, so partner loss or delayed conversion could reduce current-product validation; no additional customers or revenue were publicly reported ([YC](https://www.ycombinator.com/companies/agency-tool-company)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $703.46M robot fleet-management software market in 2025, forecast to $1.91B by 2032 at 15.29% CAGR (Research and Markets, 2026) |
| SAM | No public data found |
| Traction | Three launch partners; Deploy used by Burro, Tempo Works, and Gather AI (YC, Jul 2026) |
| Revenue Signal | No public data found |
| Founders | Jack Morrison (CEO): Scythe Robotics exit, Replica Labs co-founder, Bowdoin CS graduate; Davis Foster (Founder): Scythe Robotics exit, Thiel Fellow, hundreds of robots shipped (YC, Jul 2026) |
| Competitors | Formant ($45.25M raised, revenue unknown, broader robot operations platform) (CB Insights, 2026); InOrbit ($10M latest Series A, revenue unknown, orchestration and OTA configuration) (CB Insights, 2025); Roboto AI ($4.8M raised, revenue unknown, robotics-data analysis) (Roboto, 2023); Balena ($31.4M raised, revenue unknown, general IoT fleet tooling) (UK REF, 2021) |
| Moat Signals | Three cross-industry launch partners and production use at Burro, Tempo Works, and Gather AI (YC, Jul 2026) |
| Risk Factors | Platform overlap with Formant and InOrbit (Formant and InOrbit, 2026), Build not yet launched (Agency Tool Company, Jul 2026), three-partner concentration (YC, Jul 2026) |
| Founder Reach | Jack Morrison: LinkedIn 6,799, Twitter and GitHub not found (LinkedIn, 2026); Davis Foster: LinkedIn 2K, Twitter @davistfoster count unavailable, GitHub not found (LinkedIn and R14, 2026) |
| Distribution Signals | YC Launch post and ROS-community launch post with one like (YC and Open Robotics Discourse, Jul 2026); zero YC jobs (YC, Jul 2026) |
| Emails | mailbox@agencytool.com (YC, Jul 2026) |
