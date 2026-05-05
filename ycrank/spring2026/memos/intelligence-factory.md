# Intelligence Factory

> Human Intelligence for Robots

| Field | Value |
|-------|-------|
| Website | https://intelligence-factory.com |
| YC Page | https://www.ycombinator.com/companies/intelligence-factory |
| Batch | Spring 2026 (YC company page) |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 5 |
| Location | San Francisco, CA, USA |
| Tags | Robotics, AI |
| YC Partner | Pete Koomen (YC company page) |
| Emails | yash@intelligence-factory.com (company website) |

## The Idea

**Problem:** Per the company's YC description, hardware in robotics is converging while "intelligence is the biggest bottleneck" — robots cannot generalize human-style reasoning and physical skill into a world built for humans (YC page). The customer segment is not specified on either the website or YC page. [Inferred]: Likely buyers are robot OEMs and operators of manipulators in warehousing, manufacturing, and services who today rely on task-specific scripted policies or in-house ML teams.

**Approach:** Build "general intelligence that works on any robot" trained the way humans learn — "by seeing, doing, and feeling" (YC page). The website headline narrows the current focus to "Generalized Robotics Manipulation" (intelligence-factory.com). [Inferred]: This points to a Vision-Language-Action (VLA) style policy approach combining demonstration data, teleoperation, and tactile/proprioceptive feedback — consistent with the broader VLA wave noted in the State of Robotics 2026 report (roboticscenter.ai, 2026 via search snippet).

**Differentiation:** Hardware-agnostic ("works on any robot") generalist model, vs. vertically integrated humanoid stacks (Figure, Tesla Optimus). [Inferred]: Differentiation vs. Physical Intelligence and Skild AI is unclear from public materials — all three claim cross-embodiment generalist policies; Intelligence Factory's stated wedge is manipulation specifically.

**Business Model:** No pricing page, no published model. The single open role lists "$80K–$200K salary + 0.10%–5.00% equity" (YC jobs). [Inferred]: Most likely monetization is per-robot or per-deployment licensing of the policy/model to robot OEMs and integrators, plus paid pilots with end customers — the prevailing pattern among foundation-model robotics peers (Skild reportedly sells the "Skild Brain" commercially per pittsburghstartupnews.substack.com via search snippet).

**TAM/SAM:** Global robotics market reached "$38B in 2026, a 34% year-over-year increase" (State of Robotics 2026, roboticscenter.ai via search snippet). Humanoid robot market estimated at "USD 4.32 billion in 2025… CAGR of 48.8% reaching USD 69.74 billion by 2032" (Grand View / Coherent Market Insights via search snippet). Long-run TAM cited at "~$5 trillion in annual revenue at maturity" (InvestorPlace, Nov 2025 via search snippet). No SAM data found specific to general-purpose manipulation policies.

**GTM / Distribution:** No public GTM data found. [Inferred]: Direct enterprise sales / paid pilots with robot OEMs and large industrial operators in the Bay Area, leveraging the YC network and Pete Koomen's portfolio access; San Francisco location supports proximity to NVIDIA, robotics labs, and humanoid OEMs.

## Defensibility

No defensibility signals found in public sources. [Inferred]: A potential moat could develop via (a) proprietary multimodal demonstration/teleoperation datasets that include tactile + force feedback ("feeling" per the YC page), (b) cross-embodiment transfer that creates positive data flywheels as more robots adopt the model, and (c) integration depth/switching costs once a robot fleet is trained on their policy. None of these are proven at this stage.

**Market structure:** No structural barrier identified at this stage. Well-resourced incumbents (NVIDIA Isaac GR00T, Google DeepMind RT-2, Tesla, Figure) and well-funded peers (Skild ~$14B valuation, Physical Intelligence raised $1B+) operate the same playbook with vastly larger compute and data budgets (TechCrunch, robotreport.com via search snippets).

**Commoditization risk:** [Inferred]: High. The technical recipe (teleoperation data + VLA architecture + sim2real) is widely published; "by Q1 2026, at least eleven commercial deployments are using VLA models as the primary policy backbone" (State of Robotics 2026 via search snippet). NVIDIA released "Isaac GR00T N1… open and fully customizable foundation model for general-purpose humanoid reasoning" (NVIDIA newsroom via search snippet), directly compressing differentiation for closed-source generalist policy startups.

## Market & Traction

**Traction signals:**
- Team size 5 (YC page)
- 1 active job posting: Founding Engineer, Manipulation, SF (YC jobs)
- LinkedIn company page: linkedin.com/company/intelligence-factory (YC page); follower count not retrievable
- No public Twitter/X account found for the company
- No Discord, Slack, Product Hunt, app store, or web traffic data found
- No revenue, customer, pilot, press, or funding announcement found beyond YC participation
- Website is a minimal landing page with the headline "Generalized Robotics Manipulation" and a single contact email (intelligence-factory.com)

**Competitive landscape:**
- **Physical Intelligence** — $70M seed at ~$400M (Mar 2024, TechCrunch via search snippet); subsequently "$600M" round (The Robot Report via search snippet) and reportedly "$1 billion" cumulative (TechCrunch, Jan 2026 via search snippet); revenue not disclosed. Differentiator vs. Intelligence Factory: substantially more capital, demonstrated π₀ generalist policy (laundry, box assembly, warehouse induction).
- **Skild AI** — "$1.4 billion at a $14 billion valuation" Jan 2026 (PitchBook / Pittsburgh Startup News via search snippet); "$30 million in revenue in just a few months last year" across security, warehouses, manufacturing (pittsburghstartupnews.substack.com via search snippet). Differentiator: commercially deployed "Skild Brain" with revenue; CMU-professor founders.
- **Figure AI** — ">$1 billion committed Series C at $39 billion post-money" (Sep 2025, State of Robotics 2026 via search snippet); BMW Spartanburg deployment "90,000+ parts, 1,250+ hours, 30,000+ X3 vehicles" (State of Robotics 2026 via search snippet). Differentiator: vertically integrated humanoid OEM with production deployments.
- **Tacta Systems** — "$75 million in funding" for dexterous robot intelligence (RoboticsTomorrow, Jun 2025 via search snippet). Differentiator: focused on dexterous manipulation specifically, similar wedge as Intelligence Factory.
- **NVIDIA Isaac GR00T (incumbent platform)** — open foundation model for humanoid reasoning (NVIDIA newsroom via search snippet). Differentiator: free/open distribution bundled with NVIDIA hardware; sets a commoditization floor.

**Why now:** [Inferred]: (a) VLA architectures crossed a threshold of usability — "by Q2 2025, three major robotics software companies had shipped VLA-based products" and quantized VLAs now "run at 10–25Hz on consumer-grade GPUs" (State of Robotics 2026 via search snippet); (b) humanoid hardware costs and availability have improved, enabling cross-embodiment training data collection; (c) enterprise pilots are now live (BMW–Figure, Amazon–Digit per State of Robotics 2026 via search snippet), validating buyer demand.

## Founders & Team

The YC page lists two founders: **Jalaj Shukla** and **Yash Sinha**. Neither founder is linked from the YC page to a specific personal LinkedIn/Twitter, and public search returned multiple individuals sharing each name; the following are best-match candidates pending direct confirmation.

**Jalaj Shukla** — Co-founder
- Best-match LinkedIn: linkedin.com/in/jalaj-shukla-635005167 — "Robotics | Computer Vision | Mechatronics," Research Assistant at Figueroa Lab / GRASP Lab, University of Pennsylvania (LinkedIn via search snippet)
- Education: MS, University of Pennsylvania; BE, Savitribai Phule Pune University (LinkedIn via search snippet)
- Prior roles (per LinkedIn snippet): R&D Software Engineer at Ansys; Computer Vision Research Engineer at Applied Materials; multiple roles at Aero2Astro
- Domain work: "modular robotic arm manipulator for…3D lattice structures, 73% faster and 18% cheaper"; real-time tracking with YOLO/R-CNN/OpticalFlow; UGV+UAV trajectory planning (LinkedIn via search snippet)
- Twitter/X: No public account found
- GitHub: No public repos found tied to this individual
- Identity match unconfirmed against the YC company page.

**Yash Sinha** — Co-founder
- Listed company contact email: yash@intelligence-factory.com (company website)
- Multiple individuals named Yash Sinha appear on LinkedIn (Kaio Labs CTO; Convai ML Lead ex-Amazon ex-Goldman Sachs; others). None can be definitively matched to Intelligence Factory from public search results.
- Twitter/X: candidate handle @y_yash15sinha appeared in search results but is not confirmed as this founder
- LinkedIn: No public profile confirmed for the Intelligence Factory founder
- GitHub: No public repos confirmed

**Co-founder relationship:** No public data on co-founder history. Phase 3 evidence does not show a confirmed shared employer or university between the candidate Jalaj Shukla (UPenn / Ansys / Applied Materials) and any of the candidate Yash Sinha profiles.

**Founder-market fit:** [Inferred]: If the GRASP-Lab Jalaj Shukla is the correct individual, the founding team includes documented robotic-manipulation research (modular arm manipulator, computer vision for manufacturing) directly aligned with the company's "Generalized Robotics Manipulation" focus. No advisors, board members, or investors beyond YC have been disclosed publicly.

## Key Risks

**Capital asymmetry vs. direct peers:** Skild AI raised "$1.4 billion at $14 billion valuation" Jan 2026 and Physical Intelligence "$1 billion" cumulative (PitchBook / TechCrunch via search snippets), while Intelligence Factory's only disclosed funding signal is YC participation. Generalist robotics policies are compute- and data-intensive; competitors can train on orders-of-magnitude more demonstration data and GPU hours.

**Open-source platform commoditization:** NVIDIA Isaac GR00T N1 is positioned as an "open and fully customizable foundation model for general-purpose humanoid reasoning" (NVIDIA newsroom via search snippet), compressing willingness to pay for closed third-party generalist policies bundled with NVIDIA-powered robots.

**Undifferentiated public positioning:** Website is a one-line landing page with no demos, benchmarks, customers, or technical claims (intelligence-factory.com). Competitors publish demo videos (Physical Intelligence π₀), commercial deployments (Skild, Figure), and benchmark results — making buyer due diligence harder for Intelligence Factory.

**Founder verification gap:** Public information identifying both founders is thin; the YC page lists names but no linked profiles, and search produced multiple identity candidates. This impedes diligence on founder-market fit.

**Hyperscaler/incumbent absorption:** Meta acquired Assured Robot Intelligence to bolster humanoid AI in May 2026 (TechCrunch / Bloomberg via search snippets), evidencing that incumbents are buying robotics-AI startups directly — both an exit channel and a competitive risk if hyperscalers prefer to acqui-hire larger peers.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global robotics market $38B in 2026, +34% YoY (State of Robotics 2026, roboticscenter.ai via search snippet); humanoid market $4.32B in 2025 → $69.74B by 2032 at 48.8% CAGR (Coherent Market Insights via search snippet); long-run ~$5T at maturity (InvestorPlace, Nov 2025 via search snippet) |
| SAM | No public data found |
| Traction | Team size 5 (YC page); 1 open role: Founding Engineer Manipulation, SF (YC jobs); LinkedIn company page exists, follower count not retrievable (YC page); no revenue, users, customers, press, or funding announced beyond YC participation |
| Revenue Signal | No public data found (no pricing page on intelligence-factory.com) |
| Founders | Jalaj Shukla (Co-founder): candidate match — UPenn GRASP Lab researcher, prior Ansys/Applied Materials (LinkedIn via search snippet, unconfirmed). Yash Sinha (Co-founder): contact email yash@intelligence-factory.com (company website); LinkedIn identity unconfirmed |
| Competitors | Physical Intelligence (~$1B raised cumulative, revenue undisclosed, TechCrunch/RobotReport via search snippet — better-capitalized generalist policy with public π₀ demos); Skild AI ($1.4B raised at $14B val, $30M revenue cited, PitchBook/Pittsburgh Startup News via search snippet — commercially deployed "Skild Brain"); Figure AI ($1B+ Series C at $39B post, revenue undisclosed, State of Robotics 2026 via search snippet — vertically integrated humanoid with BMW deployment); Tacta Systems ($75M raised, revenue unknown, RoboticsTomorrow Jun 2025 via search snippet — dexterous manipulation focus); NVIDIA Isaac GR00T (open foundation model, NVIDIA newsroom via search snippet — commoditization floor) |
| Moat Signals | No public data found |
| Risk Factors | Capital asymmetry vs. Skild/Physical Intelligence/Figure, open-source commoditization (NVIDIA GR00T), undifferentiated public positioning |
| Founder Reach | Jalaj Shukla: Twitter not found, LinkedIn candidate jalaj-shukla-635005167 (count not retrievable), GitHub not found. Yash Sinha: Twitter candidate @y_yash15sinha unconfirmed, LinkedIn unconfirmed, GitHub not found |
| Distribution Signals | No public data found (no Product Hunt, Chrome Web Store, app store, or press coverage located) |
| Emails | yash@intelligence-factory.com (company website) |

Sources:
- [Intelligence Factory — YC company page](https://www.ycombinator.com/companies/intelligence-factory)
- [Intelligence Factory website](https://intelligence-factory.com)
- [Jalaj Shukla — LinkedIn (candidate)](https://www.linkedin.com/in/jalaj-shukla-635005167/)
- [Physical Intelligence — TechCrunch profile](https://techcrunch.com/2026/01/30/physical-intelligence-stripe-veteran-lachy-grooms-latest-bet-is-building-silicon-valleys-buzziest-robot-brains/)
- [Physical Intelligence raises $600M — The Robot Report](https://www.therobotreport.com/physical-intelligence-raises-600m-advance-robot-foundation-models/)
- [Skild AI — Contrary Research](https://research.contrary.com/company/skild-ai)
- [Skild AI Foundation Model — Pittsburgh Startup News](https://pittsburghstartupnews.substack.com/p/skild-ai-launches-foundation-model)
- [Skild AI — PitchBook profile](https://pitchbook.com/profiles/company/608340-52)
- [State of Robotics 2026 — Silicon Valley Robotics Center](https://www.roboticscenter.ai/state-of-robotics-2026)
- [Humanoid Robot Market — Coherent Market Insights](https://www.coherentmarketinsights.com/industry-reports/humanoid-robot-market)
- [NVIDIA Isaac GR00T — NVIDIA Newsroom](https://nvidianews.nvidia.com/news/nvidia-and-global-robotics-leaders-take-physical-ai-to-the-real-world)
- [Tacta Systems funding — RoboticsTomorrow](https://www.roboticstomorrow.com/news/2025/06/26/tacta-systems-announces-75-million-in-funding-to-bring-dextrous-intelligence-to-robots/24988)
- [Meta acquires Assured Robot Intelligence — TechCrunch](https://techcrunch.com/2026/05/01/meta-buys-robotics-startup-to-bolster-its-humanoid-ai-ambitions/)
