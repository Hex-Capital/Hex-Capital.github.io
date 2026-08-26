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
| YC Partner | Harshita Arora ([YC, Aug 2026](https://www.ycombinator.com/companies/agency-tool-company)) |
| Emails | mailbox@agencytool.company ([company website, Aug 2026](https://agencytool.com/)) |

## The Idea

- **Problem:** Robotics teams operating field fleets rely on Docker pulls, SSH, scripts, and cloud or IoT tooling that assumes identical, continuously connected devices, causing interrupted transfers and manual update work ([company website, Aug 2026](https://agencytool.com/); [company LinkedIn, Aug 2026](https://www.linkedin.com/company/agency-tool-company)).
- **Approach:** ATC Deploy transfers byte-level deltas, compresses updates, resumes interrupted downloads, deploys software and device-specific artifacts together, and provides fleet targeting, rollback, and deployment history ([company website, Aug 2026](https://agencytool.com/)).
- **Differentiation:** ATC combines robot-specific delta/resumable delivery and hosted embedded-hardware CI, versus Balena’s general IoT container fleet management, Mender’s connected-device OTA lifecycle, Formant’s robot operations layer, and Foxglove’s robotics data and observability platform ([ATC](https://agencytool.com/), [Balena](https://www.balena.io/), [Mender](https://mender.io/), [Formant](https://www.formant.ai/), [Foxglove](https://foxglove.dev/)).
- **Business Model:** [Inferred]: Deploy could use per-device or fleet SaaS pricing while Build could charge for hosted embedded-compute usage, but no pricing is publicly displayed and both products currently direct prospects to a waitlist ([company website, Aug 2026](https://agencytool.com/)).
- **TAM/SAM:** Robot fleet-management software was valued at $613.79 million in 2024 and forecast to reach $1.91 billion by 2032 at a 15.29% CAGR, while no public estimate isolates ATC’s serviceable field-robot deployment segment ([Research and Markets, 2025](https://www.researchandmarkets.com/reports/6160176/robot-fleet-management-software-market-global)).
- **GTM / Distribution:** The company is using a private beta with Burro, Tempo Works, and Gather AI, a public waitlist, and launch distribution through LinkedIn and the ROS/Open Robotics community ([LinkedIn, Aug 2026](https://www.linkedin.com/company/agency-tool-company); [Open Robotics Discourse, Jul 2026](https://discourse.openrobotics.org/t/agency-tool-company-atc-deploy-launch/57019)).

## Defensibility

- **Moat today:** The disclosed technical implementation includes byte-level delta transfers, resumability, heterogeneous artifact releases, robot-level targeting, rollback, and deployment auditing, but no public patent or proprietary-data evidence was found ([company website, Aug 2026](https://agencytool.com/)).
- **Future moat:** [Inferred]: Accumulated deployment histories, hardware integrations, configuration workflows, and operational approvals could create switching costs, but this remains unproven with three disclosed launch partners.
- **Market structure:** No structural barrier is identified because ATC supports standard OCI containers and arbitrary file bundles and advertises migration from Mender or Balena, reducing technical lock-in ([company website, Aug 2026](https://agencytool.com/)).
- **Commoditization risk:** [Inferred]: Balena, Mender, Formant, Foxglove, and Memfault already possess adjacent OTA, fleet-management, observability, or device-reliability products that could add robot-specific delivery features ([Balena](https://www.balena.io/), [Mender](https://mender.io/), [Formant](https://www.formant.ai/), [Foxglove](https://foxglove.dev/product/fleet), [Memfault](https://memfault.com/)).

## Market & Traction

- **Traction signals:**
  - Three private-beta launch partners—Burro, Tempo Works, and Gather AI—across agriculture, construction, and logistics ([LinkedIn, Aug 2026](https://www.linkedin.com/company/agency-tool-company)).
  - Company-reported updates up to 20x faster than Docker pull or SCP using delta transfers and resumability ([company website, Aug 2026](https://agencytool.com/)).
  - 388 LinkedIn followers and three listed employees ([LinkedIn, Aug 2026](https://www.linkedin.com/company/agency-tool-company)).
  - Zero active YC job postings ([YC, Aug 2026](https://www.ycombinator.com/companies/agency-tool-company)).
  - Launch coverage published by AI2Day on July 28, 2026 ([AI2Day, Jul 2026](https://ai2day.live/es/story/updating-robot-software-is-still-a-nightmare-this-startup-wants-to-fix-that)).
- **Competitors (minimum 3, up to 5):**
  - Formant (at least $45 million raised; revenue unknown; latest $21 million round led by BMW i Ventures in October 2023): broader robot operations, telemetry, and teleoperation versus ATC’s OTA and embedded CI focus ([Formant release](https://www.prnewswire.com/news-releases/formants-explosive-enterprise-growth-attracts-new-investment-led-by-bmw-i-ventures-joined-by-intel-capital-and-gs-futures-301952771.html)).
  - Balena ($31.4 million raised; revenue unknown; latest disclosed $14.4 million Series B led by OpenView in 2019): container-based IoT device management rather than robotics-specific delivery and hardware CI ([Balena](https://blog.balena.io/balena-secures-14-4m-to-grow-team-and-bring-edge-computing-to-every-developer/); [REF case study](https://results2021.ref.ac.uk/impact/submissions/6fe4db7b-089a-4e8d-ae8d-8677cfd3d0cf/impact)).
  - Foxglove ($58.7 million raised; revenue unknown; latest $40 million Series B led by Bessemer in November 2025): robotics data, visualization, and observability with fleet connectivity rather than deployment transport ([Foxglove funding](https://foxglove.dev/about)).
  - Memfault (more than $35 million raised; revenue unknown; latest $24 million Series B led by Stripes in January 2023): embedded-device diagnostics and reliability across IoT rather than robotics-native fleet deployment and hosted target hardware ([Memfault](https://memfault.com/news/memfault-raises-24-million-in-series-b-funding-supercharge-iot-reliability-platform/); [TechCrunch](https://techcrunch.com/2023/01/24/memfault-raises-24m-to-help-companies-manage-their-growing-iot-devices/)).
- **Why now:** [Inferred]: NVIDIA’s August 2025 release of Jetson Thor delivered 7.5x the AI compute of Jetson Orin while worldwide professional-service-robot sales grew 9% in 2024, increasing both robot software payloads and deployed fleet counts ([NVIDIA, Aug 2025](https://nvidianews.nvidia.com/news/nvidia-blackwell-powered-jetson-thor-now-available-accelerating-the-age-of-general-robotics); [IFR, 2025](https://ifr.org/img/worldrobotics/Executive_Summary_WR_2025_Service_Robots.pdf)).

## Founders & Team

- **Jack Morrison (Founder and CEO):**
  - Background: Bowdoin computer-science graduate, former Occipital computer-vision engineer, Replica Labs co-founder, and Scythe Robotics founder/CEO through its 2026 acquisition by ASI ([YC](https://www.ycombinator.com/companies/agency-tool-company); [Scythe](https://scytherobotics.com/blog-posts/then-now-next)).
  - Twitter/X: @jackmorrison, 438 followers ([X profile via search, Aug 2026](https://mobile.twitter.com/jackmorrison/with_replies)).
  - LinkedIn: Public headline not retrievable; profile lists 7K followers ([LinkedIn, Aug 2026](https://www.linkedin.com/in/morrisonjack)).
  - GitHub: @Chachi; cuda-mode is the top repository with 27 stars ([GitHub, Aug 2026](https://github.com/Chachi)).
- **Davis Foster (Founder):**
  - Background: RIT attendee and dropout, former Occipital electrical engineer, 2019 Thiel Fellow, and Scythe co-founder/chief engineer through its 2026 acquisition ([Forbes](https://www.forbes.com/profile/davis-foster/); [LinkedIn](https://www.linkedin.com/in/davisfoster); [Scythe](https://scytherobotics.com/blog-posts/then-now-next)).
  - Twitter/X: @davistfoster; count not retrievable ([GitHub-linked profile, Aug 2026](https://github.com/davisfoster)).
  - LinkedIn: “Scythe Robotics (Acq’d by ASI),” with 2K followers ([LinkedIn, Aug 2026](https://www.linkedin.com/in/davisfoster)).
  - GitHub: @DavisFoster; OpticalRanging is the top repository with one star ([GitHub, Aug 2026](https://github.com/davisfoster)).
- **Co-founder relationship:** Morrison and Foster worked together at Occipital before co-founding Scythe in 2018 and Agency Tool Company in 2026 ([Scythe, Jun 2021](https://scytherobotics.com/blog-posts/meet-scythe-robotics); [YC, Aug 2026](https://www.ycombinator.com/companies/agency-tool-company)).
- **Founder-market fit:** Morrison and Foster previously built and deployed hundreds of autonomous mowers, managed Scythe from 2018 through its ASI acquisition, and state that ATC addresses deployment infrastructure they lacked during that work ([YC, Aug 2026](https://www.ycombinator.com/companies/agency-tool-company)).

## Key Risks

- **Beta concentration:** ATC Deploy remains in private beta with three disclosed launch partners, although those partners span agriculture, construction, and logistics ([LinkedIn, Aug 2026](https://www.linkedin.com/company/agency-tool-company)).
- **Performance validation:** The up-to-20x delivery claim is a company-published benchmark, and no independent customer benchmark was found ([company website, Aug 2026](https://agencytool.com/)).
- **Competitive overlap:** Balena, Mender, Formant, Foxglove, and Memfault already cover portions of OTA delivery, fleet operations, observability, and embedded-device management ([competitor product pages](https://www.balena.io/)).
- **Platform scope:** ATC Deploy publicly supports Linux-based targets, while the company offers no disclosed support for non-Linux or real-time operating systems; OCI and arbitrary-file support mitigate some stack fragmentation ([company website, Aug 2026](https://agencytool.com/)).
- **Name and domain ambiguity:** The generic company name overlaps unrelated “Agency” and “agency tool” businesses, while YC lists agencytool.company and the product site uses agencytool.com, creating a search and domain-discovery risk ([YC](https://www.ycombinator.com/companies/agency-tool-company); [company website](https://agencytool.com/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $613.79M in 2024, projected to $1.91B by 2032 at 15.29% CAGR (Research and Markets, 2025) |
| SAM | No public data found |
| Traction | Three private-beta launch partners across agriculture, construction, and logistics; 388 LinkedIn followers (company LinkedIn, Aug 2026) |
| Revenue Signal | No public data found |
| Founders | Jack Morrison (CEO): Bowdoin CS, Replica Labs and Scythe co-founder; Davis Foster (Founder): Thiel Fellow, former Occipital engineer and Scythe co-founder (YC, Aug 2026; Forbes, 2019) |
| Competitors | Formant ($45M+, revenue unknown, robot operations); Balena ($31.4M, revenue unknown, IoT fleet OTA); Foxglove ($58.7M, revenue unknown, robotics observability); Memfault ($35M+, revenue unknown, embedded reliability) (company funding announcements, 2019–2025) |
| Moat Signals | Byte-level delta delivery, interrupted-transfer resumption, heterogeneous release targeting, rollback, and per-device deployment history (company website, Aug 2026) |
| Risk Factors | Three-partner beta concentration, company-controlled performance benchmark, funded adjacent competitors (company LinkedIn and website, Aug 2026; competitor funding announcements, 2019–2025) |
| Founder Reach | Jack Morrison: Twitter 438, LinkedIn 7K, GitHub top repo 27 stars; Davis Foster: Twitter count not retrievable, LinkedIn 2K, GitHub top repo one star (X, LinkedIn, and GitHub profiles, Aug 2026) |
| Distribution Signals | 388 LinkedIn followers, ROS community launch post, public waitlist (LinkedIn and Open Robotics Discourse, Jul–Aug 2026) |
| Emails | mailbox@agencytool.company (company website, Aug 2026) |
