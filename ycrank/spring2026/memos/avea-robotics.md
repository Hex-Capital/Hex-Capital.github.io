# Avea Robotics

> Control your robots from anywhere in the world.

| Field | Value |
|-------|-------|
| Website | https://www.avearobotics.com |
| YC Page | https://www.ycombinator.com/companies/avea-robotics |
| Batch | Spring 2026 (YC P26) |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Hard Tech, Robotics, Infrastructure |
| YC Partner | Harj Taggar |
| Emails | No public data found |

## The Idea

- **Problem:** Robotics companies need to scale Physical AI data collection and deploy robots in the field, but lack low-latency remote control tools that approximate in-person operation (Avea website, May 2026).
- **Approach:** Sentinel, a VR teleoperation application delivering ~10ms latency, true depth perception, haptic feedback, and up to 6 HD video streams across 6-DoF, 7-DoF, industrial arm, and humanoid platforms (Avea website, May 2026).
- **Differentiation:** Versus SVRC (Stanford VR Center) which operates a fleet/services model from physical facilities, Avea sells a software platform customers deploy on their own robots (Roboticscenter.ai, 2026); versus 1X's internal "Expert Mode" teleop tied to NEO and Redwood AI, Avea is robot-agnostic third-party software (Labellerr, 2026).
- **Business Model:** Subscription (monthly or annual) granting access to teleoperation platform, new robot connectors, and customization (Preqin profile, 2026); no public pricing page on company website (Avea website, May 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Direct sales to industrial automation, logistics, and research institution customers in North America and Europe, with stated 2027 expansion into Japan and South Korea (Preqin profile, 2026).

## Defensibility

- **Moat today:** 10ms end-to-end latency claim positioned as "fastest teleoperation software on the market" (Avea website, May 2026; LinkedIn launch post by Ary Indarapu, Activity 7428140193615974400); no patents, network effects, or proprietary datasets disclosed publicly.
- **Future moat:** [Inferred]: Teleoperation sessions could generate proprietary Physical AI training data (the company explicitly references Physical AI data collection on Avea website, May 2026), but no public data ownership terms or dataset size disclosed.
- **Market structure:** [Inferred]: Robot-agnostic, third-party positioning may be hard for vertically integrated humanoid OEMs (1X, Figure) to replicate without channel conflict, since their teleop is bundled with their hardware (Labellerr, 2026).
- **Commoditization risk:** Multiple humanoid OEMs (1X, Reflex Robotics) already operate proprietary teleop stacks internally (Labellerr, 2026), and VR teleop research code is widely available in academia (SVRC operates with off-the-shelf Meta Quest 3 hardware per Roboticscenter.ai, 2026).

## Market & Traction

- **Traction signals:**
  - Funding: $1.01M total raised; investors include Afore Capital, LeapYear, Third Kind Venture Capital, Polsky Center, and Pioneer Fund (Seed March 2026) (PitchBook profile 1320080-68, 2026).
  - Customers: "Onboarded 3 more customers" after Sentinel public launch across logistics, manufacturing, and home use cases (search snippet referencing Avea launch coverage, 2026).
  - Prior award (pre-pivot): 6th place + $15,000 at University of Illinois College New Venture Challenge Finals 2025 for prior floor-cleaning robot product (tec.illinois.edu, 2025).
  - Founder LinkedIn launch post: Activity 7428140193615974400 announcing Sentinel (LinkedIn, 2026); engagement count not retrievable via search.
  - Company Twitter/X: @AveaRobotics exists; follower count not retrievable.
  - Company LinkedIn: "Avea Robotics (YC P26)" page exists; follower count not retrievable.
- **Competitors (3-5):**
  - 1X Technologies (raised >$125M; revenue unknown; vertically integrated humanoid OEM with internal "Expert Mode" teleop feeding Redwood AI foundation model — Labellerr 2026).
  - Reflex Robotics (raised funding undisclosed publicly in cited sources; revenue unknown; affordable general-purpose humanoid with teleop used for data collection — CB Insights and Labellerr, 2026).
  - SVRC / Stanford VR Center (funding unknown; revenue unknown; service-model VR teleop fleet using Meta Quest 3 in Mountain View and Allston facilities — Roboticscenter.ai, 2026).
  - Physical Intelligence (Pi) (raised >$400M reported in press; revenue unknown; building robot foundation models with heavy teleop data investment — Labellerr, 2026).
  - [Inferred]: The direct head-to-head competitive set for standalone robot-agnostic VR teleop SaaS is small; most named players are either OEMs bundling teleop or services-model data collectors.
- **Why now:** [Inferred]: Humanoid and general-purpose robot deployments scaled in 2025-2026 (NEO began US shipments in 2026 per Labellerr, 2026), creating demand for remote-operator handoff and Physical AI data collection at low latency.

## Founders & Team

- **Ary Indarapu (Co-Founder, CEO):**
  - Background: BS Computer Engineering, University of Illinois Urbana-Champaign, 2021-2024 (LinkedIn aryanindarapu); prior roles at Aechelon Technology and DENSEC ID (LinkedIn aryanindarapu); led prior Avea floor-cleaning robotics team that won $15K at UIUC CNVC 2025 (tec.illinois.edu, 2025).
  - Twitter/X: @aryind_ (x.com/aryind_); follower count not retrievable.
  - LinkedIn: "Co-Founder @ Avea Robotics (YC P26)" (linkedin.com/in/aryanindarapu).
  - GitHub: @aryanindarapu (github.com/aryanindarapu); top repo and star counts not retrievable in search results.
- **Vikram Vadrevu (Co-Founder):**
  - Background: Aerospace Engineering, University of Illinois Urbana-Champaign (tec.illinois.edu, 2025); wrote flight software for NASA and DoD satellites (search snippet from YC/PitchBook profile, 2026).
  - Twitter/X: @vikramvadrevu (per YC page); follower count not retrievable.
  - LinkedIn: vikramvadrevu (per YC page); headline not retrievable.
  - GitHub: No public account found in cited search results.
- **Co-founder relationship:** Both attended University of Illinois Urbana-Champaign and co-led the prior Avea Robotics floor-cleaning project together with Ethan Winnike (tec.illinois.edu, 2025).
- **Founder-market fit:** Indarapu brings computer/graphics-adjacent experience (Aechelon Technology builds visual simulation systems — LinkedIn aryanindarapu) and Vadrevu brings aerospace embedded/flight software for NASA and DoD satellites (search snippet, 2026), aligning with VR rendering and low-latency control software requirements.

## Key Risks

- **Product pivot recency:** Company pivoted from autonomous commercial floor-cleaning robots (the entity that won $15K at UIUC CNVC 2025 per tec.illinois.edu) to VR teleoperation software in 2026; prior product traction does not transfer, and Sentinel has only 3 disclosed post-launch customers (search snippet, 2026).
- **Incumbent bundling / channel risk:** Major humanoid OEMs (1X, Reflex) operate proprietary teleop internally and may not adopt third-party software (Labellerr, 2026); 1X's Expert Mode is explicitly tied to feeding their Redwood AI foundation model (Labellerr, 2026).
- **Technical feasibility — sustained 10ms latency:** Claim of "as low as 10ms" latency (Avea website, May 2026) depends on customer network conditions across "thousands of miles" (LinkedIn launch post, 2026); no independent benchmark published.
- **Founder operating experience:** Both founders are 2024-era university graduates with no prior exits found in public sources (LinkedIn aryanindarapu; tec.illinois.edu, 2025), and prior CNVC project finished 6th rather than winning.
- **Name disambiguation:** "Ava Robotics" (avarobotics.com, Crunchbase) is a separate, unrelated telepresence company; some search snippets conflate the two.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | $1.01M raised (PitchBook, 2026); 3 customers post-launch in logistics/manufacturing/home (search snippet, 2026); prior product won $15K at UIUC CNVC (tec.illinois.edu, 2025) |
| Revenue Signal | Subscription pricing (monthly/annual) per Preqin profile (2026); no pricing page on company website (Avea website, May 2026) |
| Founders | Ary Indarapu (CEO): BS CompE UIUC 2024, ex-Aechelon Technology, ex-DENSEC ID. Vikram Vadrevu (Co-Founder): Aerospace UIUC, NASA/DoD flight software. |
| Competitors | 1X Technologies (>$125M raised, revenue unknown, vertically integrated humanoid OEM with internal teleop); Reflex Robotics (funding undisclosed in cited sources, revenue unknown, affordable humanoid w/ internal teleop); SVRC (funding unknown, revenue unknown, services-model VR teleop fleet); Physical Intelligence (>$400M raised reported, revenue unknown, foundation-model focus) |
| Moat Signals | "10ms latency" / "fastest teleoperation software on the market" positioning (Avea website, May 2026; LinkedIn Activity 7428140193615974400) |
| Risk Factors | Recent product pivot, OEM bundling/channel risk, unproven sustained low-latency at long distance |
| Founder Reach | Ary Indarapu: Twitter @aryind_ (count not retrievable), LinkedIn aryanindarapu (count not retrievable), GitHub @aryanindarapu (stars not retrievable). Vikram Vadrevu: Twitter @vikramvadrevu (count not retrievable), LinkedIn vikramvadrevu (count not retrievable), GitHub not found. |
| Distribution Signals | Avea Substack blog avearobotics.substack.com (Avea website, May 2026); docs.avearobotics.com (Avea website, May 2026); company Twitter @AveaRobotics (x.com); no Product Hunt listing found |
| Emails | No public data found |

Sources:
- [Avea Robotics website](https://www.avearobotics.com/)
- [Avea Robotics YC page](https://www.ycombinator.com/companies/avea-robotics)
- [PitchBook profile](https://pitchbook.com/profiles/company/1320080-68)
- [Preqin asset profile](https://www.preqin.com/data/profile/asset/avea-robotics--inc-/798354)
- [Avea Robotics LinkedIn](https://www.linkedin.com/company/avea-robotics)
- [Ary Indarapu LinkedIn](https://www.linkedin.com/in/aryanindarapu/)
- [Ary Indarapu X](https://x.com/aryind_)
- [Ary Indarapu GitHub](https://github.com/aryanindarapu)
- [UIUC TEC College New Venture Challenge 2025](https://tec.illinois.edu/news/74074)
- [Sentinel launch LinkedIn post](https://www.linkedin.com/posts/aryanindarapu_we-built-sentinel-a-teleoperation-application-activity-7428140193615974400-y4ss)
- [Labellerr — top teleoperation companies 2026](https://www.labellerr.com/blog/top-teleoperation-companies-humanoid-robotics/)
- [SVRC — VR teleoperation companies 2026](https://www.roboticscenter.ai/blog/vr-teleoperation-companies-comparison)
- [Reflex Robotics — CB Insights](https://www.cbinsights.com/company/reflex-robotics)
