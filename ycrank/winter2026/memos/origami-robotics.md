# Origami Robotics

> Manipulate Anything Robot

| Field | Value |
|-------|-------|
| Website | https://www.origami-robotics.com |
| YC Page | https://www.ycombinator.com/companies/origami-robotics |
| Batch | Winter 2026 |
| Industry | Industrials / Industrials |
| Team Size | 5 |
| Location | Millbrae, CA, USA |
| Tags | Artificial Intelligence, Robotics, Automation |
| YC Partner | Ankit Gupta |
| Emails | No public data found |

## The Idea

**Problem:** Industrial manufacturing and logistics operations require dexterous manipulation of diverse objects — tasks that current robotic systems handle poorly. Existing robotic arms and grippers are designed for repetitive, narrow tasks and cannot generalize across the variety of objects encountered in high-mix, low-volume production environments. The core technical bottleneck is the "embodiment gap": data collected via teleoperation or simulation does not transfer cleanly to robotic hardware due to mismatches between the data-collection interface and the deployment hardware. Today, manufacturers rely on human labor for complex manipulation tasks or invest in expensive, task-specific automation that cannot adapt to new objects without re-engineering.

**Approach:** Origami Robotics is building a matched hardware system consisting of (1) a hand-based data-collection device worn by human operators and (2) a high degree-of-freedom (DOF), direct-drive robotic hand that is kinematically identical to the data-collection device. Because the two devices match exactly, human demonstration data collected via the glove can be directly deployed on the robot without the embodiment gap that plagues competing approaches. The company plans to deploy data-collection devices in real-world environments (manufacturing factories, logistics centers) to accumulate large-scale manipulation data — analogous to Tesla's fleet-learning approach for autonomous driving — and use this data to train a general-purpose "manipulate anything" model (YC company page). The company's blog post "The Dexterity Deadlock" (February 2026) addresses the technical limitations of high-ratio gearboxes and their negative impact on sim-to-real transfer and force transparency (company website).

**Differentiation:** Origami Robotics differentiates from competitors along three axes. First, unlike Mimic Robotics (which uses glove-based and VR teleoperation interfaces paired with a tendon-driven hand), Origami Robotics uses a direct-drive robotic hand that is an exact kinematic match to the data-collection device, eliminating the need for retargeting or domain adaptation. Second, unlike hardware-only players such as Linkerbot and Shadow Robot Company, Origami Robotics couples hardware with a vertically integrated data-collection pipeline and learned manipulation model, positioning as a full-stack automation provider rather than a component supplier. Third, the company emphasizes "in the wild" data collection at customer sites, aiming to build a proprietary dataset flywheel.

**Business Model:** No pricing page or revenue details are publicly available. [Inferred]: The most likely monetization path is a hardware-plus-software model: selling or leasing robotic hand systems along with the learned manipulation models as an automation-as-a-service offering to manufacturing and logistics customers.

**TAM/SAM:** The global Robot Multi-fingered Dexterous Hand Market was valued at $524.08 million in 2024 and grew to an estimated $623.55 million in 2025 (360iResearch, 2025 via search snippet). A higher estimate valued the dexterous hands market at $815 million in 2024, projected to reach $10.3 billion by 2031 at a 40.4% CAGR (Valuates Reports, 2025 via search snippet). The broader humanoid robot dexterous hand market is projected to grow from $1.2 billion in 2026 to $3.8 billion by 2036 at a 12.2% CAGR (WiseGuy Reports via search snippet). No SAM estimate specific to Origami Robotics' target segment was found.

**GTM / Distribution:** [Inferred]: The company's stated strategy of deploying data-collection devices in manufacturing factories and logistics centers suggests a direct enterprise sales model, with initial deployments likely serving as both data-collection partnerships and early customer relationships. The CMU Lab to Market event (February 2026) is one of the company's investor and customer outreach channels; co-founder Quanting Xie stated he used it to "talk to a lot of investors and schedule calls and meet potential customers" (CMU Swartz Center, February 2026).

## Defensibility

The primary defensibility signal is the data flywheel: as Origami Robotics deploys data-collection devices at customer sites, it accumulates proprietary real-world manipulation data that feeds model training, which in turn improves automation performance and attracts more deployments. This flywheel does not yet exist — it is contingent on achieving production deployments at scale.

The matched hardware approach (identical kinematics between data-collection device and robotic hand) represents a technical design choice that is reproducible but requires significant mechanical engineering effort to replicate. The company's academic ties to CMU's Robotics Institute provide access to frontier research on embodied AI, dexterous manipulation, and PCB motor design.

No patents or IP filings were found in public sources.

**Market structure:** [Inferred]: Large industrial robotics incumbents (Fanuc, ABB, KUKA) are optimized for rigid, high-precision automation with business models built on selling arms and grippers for repetitive tasks. A general-purpose dexterous manipulation system would require these incumbents to invest in fundamentally different hardware architectures (anthropomorphic hands vs. parallel grippers), retrain sales teams on a new value proposition, and build out data-infrastructure competencies — a degree of organizational retooling that creates friction against fast competitive response. Additionally, incumbent margins depend on high-volume, standardized automation; serving the high-mix, low-volume segment that Origami targets would cannibalize their existing GTM model.

**Commoditization risk:** Multiple well-funded startups are pursuing overlapping territory. Mimic Robotics ($16M raised) has a similar teleoperation-to-deployment pipeline. Linkerbot ($150M raised) mass-produces dexterous hands at scale. Open-source teleoperation systems (e.g., DEXOP, ExoStart) published in academic literature lower the barrier for new entrants. The underlying technical approach — imitation learning from human demonstrations — is well-known in the robotics research community.

## Market & Traction

**Traction signals:**
- Y Combinator Winter 2026 batch member (YC company page)
- Product waitlist active on company website via Tally form (company website, February 2026)
- Blog post published: "The Dexterity Deadlock" (company website, February 2026)
- Presented at CMU Swartz Center Lab to Market investor summit in San Francisco (CMU Swartz Center, February 11, 2026)
- Team relocated from Pittsburgh to San Francisco to access startup resources and VC (CMU Swartz Center, February 2026)
- Company LinkedIn page exists at linkedin.com/company/origami-robotics-inc (follower count not retrievable)
- Daniel Xie Twitter/X: @DanielXieee (follower count not retrievable)
- Ryan Xie Twitter/X: @QuanliangX (follower count not retrievable)
- No revenue, user counts, Product Hunt launch, app store presence, GitHub repos (for the company), or press coverage in named publications were found
- No job postings listed on YC page (YC company page)

**Competitive landscape:**

1. **Mimic Robotics** (Zurich, Switzerland): ETH Zurich spinout, $16M raised in Series B led by Elaia with Speedinvest participation (The Engineer, 2025 via search snippet). Builds a 16-DOF tendon-driven humanoid hand paired with teleoperation pipeline using glove and VR interfaces. Key differentiator vs. Origami: Mimic pairs its hands with off-the-shelf robot arms (e.g., Franka Emika Panda), while Origami is building vertically integrated matched hardware. Revenue unknown.

2. **Linkerbot** (China): $150M raised across four rounds since April 2025 (PR Newswire, December 2025). Shipped 10,000+ dexterous hands with monthly output exceeding 4,000 units. Commands >80% global market share in high-DOF dexterous hands (PR Newswire, December 2025). Key differentiator vs. Origami: Linkerbot is a pure hardware/component supplier at mass-production scale; Origami positions as a full-stack data-plus-model-plus-hardware provider. Revenue not publicly disclosed.

3. **Shadow Robot Company** (London, UK): Established 1997. Received £11M from ARIA (UK Advanced Research and Invention Agency) in 2025 (search snippet). Builds the Shadow Dexterous Hand with 24 joints driven by 20 motors (Wikipedia). Key differentiator vs. Origami: Shadow is the legacy leader in research-grade dexterous hands, primarily serving academic and R&D customers rather than production automation. Revenue unknown.

4. **Proception AI** (Palo Alto, CA): Founded 2024, $500K raised in seed round (Tracxn, 2025 via search snippet). Develops dexterous robotic hands for humanoid robotics companies. Key differentiator vs. Origami: Proception focuses on selling hand hardware to humanoid robot OEMs, while Origami targets direct industrial automation deployments. Revenue unknown.

5. **Sanctuary AI** (Vancouver, Canada): $140M+ raised (search snippet). Builds full humanoid robots (Phoenix) with dexterous manipulation for general-purpose work. Key differentiator vs. Origami: Sanctuary builds complete humanoid platforms; Origami focuses specifically on hand-level manipulation with a data-first approach. Revenue unknown.

**Why now:** [Inferred]: Several converging factors opened this opportunity in 2024–2026. First, imitation learning and diffusion-based policy models reached performance thresholds enabling real-world robotic deployment, as demonstrated by academic results from CMU, Stanford, and others. Second, advances in PCB axial flux motor design (a research area of co-founder Quanting Xie) have made high-torque, compact direct-drive actuators feasible for dexterous hands at reasonable cost — Origami's blog explicitly discusses the limitations of high-ratio gearboxes as a now-solvable bottleneck. Third, global humanoid robot shipments exceeded 15,000 units in 2025, a nearly sevenfold increase from 2024 (Gasgoo via search snippet), creating downstream demand for dexterous manipulation components and systems.

## Founders & Team

**Ryan Xie** — Co-founder
- Dual degree in Electrical and Computer Systems Engineering from Rensselaer Polytechnic Institute (RPI); Master's in Robotics from University of Michigan (CEO Weekly; LinkedIn)
- Previously: Co-Founder & CEO of Ground Robotics, an autonomous golf course maintenance robot startup (CEO Weekly). Ground Robotics closed an angel funding round and was accepted into StartX S25 accelerator (Stanford affiliate) (CEO Weekly; TechBullion)
- Previously: Robotics Software Engineer at Canvas Construction (CEO Weekly)
- Competitive robotics background: FIRST Tech Challenge, team placed second in New Jersey State Championship (CEO Weekly)
- Twitter/X: @QuanliangX — count not retrievable
- LinkedIn: linkedin.com/in/quanliang-ryan-xie/ — "Co-Founder @ Ground Robotics | StartX S25"
- GitHub: No public repos found

**Quanting (Daniel) Xie** — Co-founder
- B.Sc. in Mechanical Engineering from Rensselaer Polytechnic Institute (2021); M.Sc. in Mechanical Engineering (Research) from Carnegie Mellon University (2023); PhD student at CMU Robotics Institute, CLAW Lab (2024–present), advised by Prof. Yonatan Bisk (personal website)
- Research focus: robot manipulation, novel hardware to reduce embodiment gap and sim-to-real gaps in dexterous manipulation (CMU Robotics Institute page)
- Publications: Paper accepted to RA-L (December 2025); Paper accepted to WACV with oral presentation, top 2% (October 2025); PCB axial flux motor paper for IEEE Energy Conversion Congress (personal website)
- Previously: Apple Manufacturing Design Engineering Intern (2022) (personal website)
- Reviewer for CoRL, ICRA, RA-L, and IROS conferences (personal website)
- Twitter/X: @DanielXieee — count not retrievable
- LinkedIn: linkedin.com/in/quanting-xie-4197a814a/ — "PhD student studying Foundation Model for Robotics @ CMU_RI @CLAW Lab"
- GitHub: github.com/quantingxie — 21 followers, 8 repositories; ReasonedExplorer (19 stars), vibe (3 stars) (GitHub)

**Co-founder relationship:** Both Ryan Xie and Quanting (Daniel) Xie attended Rensselaer Polytechnic Institute (RPI) for their undergraduate degrees. They also share the surname Xie. Both have robotics-focused graduate degrees (Ryan at University of Michigan; Quanting at CMU).

**Founder-market fit:** The founding team combines hardware entrepreneurship experience (Ryan's prior company Ground Robotics, which built autonomous maintenance robots and went through StartX) with deep academic research in exactly the domain the company is addressing (Quanting's PhD research on dexterous manipulation, embodiment gap reduction, and PCB motor design at CMU's Robotics Institute under leading robotics faculty). Quanting's published work on reducing sim-to-real gaps in dexterous manipulation directly underpins the company's core technical approach. The team's CMU pedigree is relevant given the institution's status as one of the top robotics research programs globally.

## Key Risks

**Brand name disambiguation:** A separate, unrelated entity called "Origami Robotics LLC" exists in Berkeley, CA, which created the Romibo robot for children with autism and has a GitHub organization (github.com/OrigamiRobotics) with 13 repositories and a CMU research history. The Crunchbase listing for "origami-robotics" also maps to this older entity. This creates potential confusion in investor research, press coverage, and online presence.

**Well-funded direct competitors with similar approaches:** Mimic Robotics ($16M raised) pursues a nearly identical strategy — teleoperation-based data collection from factory workers, paired with a proprietary dexterous hand, using imitation learning for deployment. Mimic has published a model recipe ("mimic-one") and has established partnerships with industrial customers. Origami must demonstrate a meaningful technical or go-to-market edge over this funded competitor.

**Founder availability risk:** Co-founder Quanting Xie is currently listed as a PhD student at CMU's Robotics Institute (2024–present). It is unclear whether he has left the PhD program to work on Origami Robotics full-time or is pursuing both simultaneously. Divided attention between academic research and a hardware startup could constrain execution speed during a critical company-building period.

**Hardware scaling challenges:** Transitioning from research prototypes to manufacturing reliable, cost-effective direct-drive robotic hands at volume is a capital- and time-intensive process. Linkerbot's ability to mass-produce 4,000+ dexterous hands per month with $150M in funding illustrates the capital requirements. Origami Robotics, as a pre-seed company with a 5-person team, faces a significant scale gap.

**Data flywheel cold-start problem:** The company's strategy depends on deploying data-collection devices at customer sites to build a proprietary dataset, but customers have limited incentive to participate in data collection unless the system already delivers value — creating a chicken-and-egg challenge around early deployments.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $524M–$815M (2024), projected $3.8B–$10.3B by 2031–2036 at 12–40% CAGR depending on market definition (360iResearch 2025; Valuates Reports 2025; WiseGuy Reports — all via search snippet) |
| SAM | No public data found |
| Traction | YC W26 batch; product waitlist active (company website, Feb 2026); presented at CMU Lab to Market investor summit (CMU Swartz Center, Feb 2026) |
| Revenue Signal | No public data found |
| Founders | Ryan Xie (Co-founder): RPI + UMich Robotics, ex-Ground Robotics founder (StartX S25), ex-Canvas Construction. Quanting (Daniel) Xie (Co-founder): RPI + CMU Robotics Institute PhD, Apple intern, published in RA-L/WACV/IEEE |
| Competitors | Mimic Robotics ($16M raised, revenue unknown, similar teleoperation-to-deployment pipeline); Linkerbot ($150M raised, revenue unknown, mass-production hardware leader); Shadow Robot (£11M ARIA grant, revenue unknown, legacy research-grade hand); Proception AI ($500K raised, revenue unknown, hand OEM supplier); Sanctuary AI ($140M+ raised, revenue unknown, full humanoid platform) |
| Moat Signals | Matched-kinematics hardware design (data-collection device = robotic hand); potential data flywheel from "in the wild" deployments; CMU Robotics Institute research ties |
| Risk Factors | Brand confusion with unrelated Origami Robotics LLC (Berkeley), well-funded direct competitor in Mimic Robotics, founder PhD program status unclear, hardware scaling capital requirements |
| Founder Reach | Ryan Xie: Twitter @QuanliangX (count not retrievable), LinkedIn linkedin.com/in/quanliang-ryan-xie/. Quanting Xie: Twitter @DanielXieee (count not retrievable), LinkedIn linkedin.com/in/quanting-xie-4197a814a/, GitHub 19 stars (ReasonedExplorer) |
| Distribution Signals | No public data found (no Product Hunt launch, no app store presence, no GitHub repos under company name) |
| Emails | No public data found |
