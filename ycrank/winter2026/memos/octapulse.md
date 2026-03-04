# OctaPulse

> Robotics and computer vision to automate fish farming from hatchery?

| Field | Value |
|-------|-------|
| Website | https://www.tryoctapulse.com/ |
| YC Page | https://www.ycombinator.com/companies/octapulse |
| Batch | Winter 2026 |
| Industry | Industrials / Industrials -> Climate |
| Team Size | 2 |
| Location | Pittsburgh, PA (LinkedIn via search snippet) / Remote |
| Tags | Robotics, Computer Vision, Food Tech, Maritime |
| YC Partner | Jon Xu |
| Emails | No public data found (ZoomInfo and RocketReach list @octapulse.com domain but redact specific addresses) |

## The Idea

**Problem:** Two critical quality-assurance steps in finfish hatcheries — broodstock phenotyping and juvenile deformity inspection — are still performed manually. Inspections take approximately 5 minutes per fish and are error-prone; farms spend over $200K/year on trained technicians and geneticists to perform these tasks (YC company description). Aquaculture has surpassed wild-catch fishing in seafood production volume, yet early-stage production QA/QC remains unautomated. Today, technicians visually assess each fish by hand, creating bottlenecks in throughput, inconsistency in grading, and high labor costs.

**Approach:** OctaPulse deploys an AI vision platform using off-the-shelf Luxonis OAK cameras (depth + RGB with onboard Myriad X VPU) and Nvidia Jetson edge compute (Orin Nano / Orin NX) to automate phenotyping and deformity detection (HN Launch post, Mar 2026). The system drops into existing hatchery workflows, captures images of individual fish, and runs YOLO-based detection models, custom segmentation heads for body outlines, and keypoint models for anatomical landmarks. Inference is local using TensorRT with INT8 quantization. Starlink is used for connectivity in remote farm locations. A delta robot with compliant soft-robotics grippers handles fish safely for automated sorting. The platform reduces inspection time from ~5 minutes to under 30 seconds per fish with >90% accuracy (YC page; HN Launch post).

**Differentiation:** Existing aquaculture AI solutions — Aquabyte, Umitron, Observe Technologies (acquired by AKVA Group in 2024), GoSmart — focus primarily on in-water monitoring: sea lice detection, feeding optimization, and biomass estimation in ocean pens. OctaPulse targets the hatchery stage specifically, combining computer vision with physical robotics (delta robots + grippers) for automated handling and sorting of individual fish. This robotics-plus-vision integration at the hatchery layer is distinct from camera-only in-water monitoring systems. The company also builds a proprietary multi-species labeled dataset with each deployment, designed to improve cross-species generalization over time (YC description).

**Business Model:** OctaPulse has a six-figure annual contract with its first customer, Riverence (YC page; El Ecosistema Startup article). No public pricing page or tiered pricing structure was found. [Inferred]: Most likely monetization path is per-facility annual SaaS + hardware licensing, given the combination of on-site hardware (cameras, edge compute, delta robots) and cloud-based model management.

**TAM/SAM:** The global aquaculture market was estimated at USD 310.6B in 2024, projected to reach USD 417.8B by 2030 at a 5.1% CAGR (Grand View Research, 2024 via search snippet). The precision aquaculture technology market was estimated at USD 788.7M in 2024, projected to reach USD 1,434.5M by 2030 at an 11.1% CAGR (MarketsandMarkets, 2025 via search snippet). The company cites a $300B–$350B global aquaculture industry as its addressable universe (YC description; HN Launch post).

**GTM / Distribution:** OctaPulse is starting with vertically integrated finfish farms in North America. The first customer is Riverence, described as the largest trout producer in North America (YC page). Two additional farm deployments are planned for early 2026 (YC description). The company is seeking introductions to finfish farms in Chile, Norway, Scotland, and the Mediterranean for international expansion (YC page "asks" section). [Inferred]: GTM is direct sales to large vertically integrated hatcheries, land-and-expand from hatchery QA into feeding, health monitoring, and processing.

## Defensibility

**Data moat (developing):** Each deployment adds labeled images to a proprietary multi-species dataset that improves cross-species generalization (YC description; HN Launch post). This creates compounding accuracy advantages with scale, but the dataset is early-stage with one production deployment.

**Technical complexity:** The system integrates computer vision, edge ML inference, and physical robotics (delta robots with custom compliant grippers) in a harsh environment with corrosion, water turbidity, fish movement unpredictability, and food-safety requirements (HN Launch post). This combination of software and hardware in a demanding operational environment raises the barrier to replication.

**Switching costs:** Once integrated into a farm's hatchery workflow and generating historical phenotypic data for selective breeding programs, switching costs increase as the accumulated data becomes valuable for the farm's genetics program.

**Market structure:** Incumbent aquaculture technology companies (AKVA Group, Innovasea, Pentair) focus on cage-level and pen-level infrastructure — feeding systems, environmental monitoring, net pens. Their business models are built around large-scale ocean farming hardware. Entering the hatchery-stage robotics niche would require building competencies in small-scale manipulator robotics, edge ML, and species-specific phenotyping models — a distinct technical stack from their current product lines. Additionally, Aquabyte (the closest AI competitor) was acquired by Vitruvian Partners in December 2025 (Tracxn via search snippet), potentially shifting its strategic focus.

**Commoditization risk:** The core computer vision models (YOLO variants, segmentation, keypoint detection) use well-known architectures. A well-funded competitor with aquaculture domain expertise and labeled data could replicate the vision pipeline. The robotics integration (delta robots, compliant grippers, environmental hardening) adds complexity but uses commercially available components. The primary barrier is the specialized labeled dataset and domain-specific deployment know-how accumulated through production environments.

## Market & Traction

**Traction signals:**
- Six-figure annual contract with Riverence, the largest trout producer in North America (YC page; El Ecosistema Startup)
- Two additional farm deployments planned for early 2026 (YC description)
- >90% model accuracy on phenotyping and deformity detection (YC page)
- Inspection time reduced from ~5 min to <30 sec per fish (YC page)
- Ocean Exchange 2025 Collegiate Award winner (Ocean Exchange, Oct 2025 via search snippet; citybiz)
- Launch HN post: 108 points, 49 comments (Hacker News, Mar 2026)
- MVPro Media "Vision Start Ups to Watch in 2026" mention (MVPro Media, 2026 via search snippet)
- El Ecosistema Startup coverage in Spanish-language startup media (ecosistemastartup.com)
- Y Combinator LinkedIn post featuring OctaPulse (LinkedIn, 2026)
- Twitter/X: @tryoctapulse (follower count not retrievable)
- LinkedIn: https://www.linkedin.com/company/106495616 (follower count not retrievable)
- YouTube: one video posted (https://youtu.be/yuIUlyIgi4E)
- GitHub: octapulse-dev organization — 1 public repo, 1 star (GitHub)
- Founded 2025 (YC page)
- Launched February 4, 2026 (YC page)
- Paul Grech recognized as Future Leader by National Fisheries Institute and Coalition for Sustainable Aquaculture (El Ecosistema Startup; not independently verified via NFI sources)

**Competitive landscape:**

1. **Aquabyte** ($48.4M raised across seed, Series A, Series B; acquired by Vitruvian Partners Dec 2025; revenue unknown) — Underwater camera-based monitoring for salmon farms: sea lice detection, biomass estimation, welfare tracking. Focuses on in-water pen monitoring, not hatchery-stage robotics/inspection. (PRNewswire, 2019; The Fish Site; Tracxn via search snippet)

2. **XpertSea** ($28M+ raised through Series B in 2021; revenue unknown) — Data-driven marketplace and computer vision for shrimp aquaculture inventory management. Focuses on shrimp rather than finfish, and on marketplace/financial services layer rather than hatchery QA automation. (BetaKit; GlobalSeafood.org; BusinessWire, 2021)

3. **Umitron** (~$40M+ raised across multiple rounds; revenue unknown) — Solar-powered IoT devices and AI for automated feeding in ocean fish farms, using computer vision to detect fish hunger patterns. Focuses on feeding optimization in open-water environments, not hatchery inspection/sorting. (AgFunderNews; The Bridge, 2022)

4. **Observe Technologies** ($2.4M raised; acquired by AKVA Group Jul 2024 at $26–40M valuation; revenue unknown) — AI feeding management platform for large-scale fish farms. Focused on feeding optimization rather than hatchery QA. Now part of AKVA Group's product suite. (Crunchbase; SeafoodSource, 2024)

5. **GoSmart** (funding amount not found) — Israel-based, autonomous AI systems for fish farming using NVIDIA Jetson platform. Monitors weight, population distribution, temperature, and oxygen. Focuses on in-cage monitoring, not hatchery-stage phenotyping. (NVIDIA Blog)

**Why now:**
- Aquaculture surpassed wild-catch fishing as the primary source of seafood production globally, creating pressure to industrialize and automate production (FAO data, referenced in YC description).
- Edge AI hardware (Nvidia Jetson Orin family, Luxonis OAK cameras with onboard VPUs) reached a performance-per-watt threshold enabling real-time inference in remote, power-constrained farm environments (HN Launch post technical details).
- [Inferred]: The maturation of compact vision-language and detection models (YOLO variants, TensorRT INT8 quantization) now enables production-grade accuracy on low-power edge devices, which was not feasible 3–4 years ago when earlier aquaculture AI startups required cloud-based processing.
- [Inferred]: Growing regulatory and buyer pressure on traceability and sustainability in seafood supply chains increases demand for automated, standardized QA records at every production stage.

## Founders & Team

**Paul L. Grech** — Co-Founder & CEO
- MBA, Carnegie Mellon University Tepper School of Business (Class of 2025) (Poets&Quants, Oct 2023)
- BS in Business Administration (Finance) and Spanish, Marist College (Poets&Quants, Oct 2023)
- Previously: UX Project Manager and Portfolio & Risk Analytics Relationship Manager at Bloomberg LP (Poets&Quants; LinkedIn via search snippet)
- Carnegie Mellon University Robotics Institute Pathways Fellow (LinkedIn via search snippet)
- Special Projects Fellow, Miami-Dade Innovation Authority (LinkedIn via search snippet)
- 99 Tartans angel syndicate member at CMU (Poets&Quants, Oct 2023)
- Recognized as Future Leader by National Fisheries Institute and Coalition for Sustainable Aquaculture (El Ecosistema Startup; not independently confirmed)
- Ocean Exchange 2025 Collegiate Award winner representing OctaPulse (Ocean Exchange, Oct 2025 via search snippet)
- Originally from Beacon, NY; heritage ties to Malta and Puerto Rico (Poets&Quants; HN Launch post)
- Twitter/X: @tryoctapulse (company account); personal account not found
- LinkedIn: linkedin.com/in/paul-l-grech-b4359591
- GitHub: No personal public repos found

**Rohan Singh** — Co-Founder
- Currently pursuing graduate studies at Carnegie Mellon University in AI, robotics, and control systems (personal website rohxnsxngh.com)
- BS in Mechanical Engineering with minors in Applied Mathematics and Statistics, Texas A&M University (personal website)
- Previously: engineering roles at ASML, Nvidia, Tesla, and Toyota (HN Launch post; personal website)
- Founder of Quaternion Studios (hardware startup) (personal website)
- Former Division 1 walk-on tennis player at Texas A&M (personal website)
- Originally from Goa, India (HN Launch post)
- Twitter/X: No personal account found
- LinkedIn: linkedin.com/in/rohxnsxngh
- GitHub: No personal public repos confirmed as belonging to this Rohan Singh (multiple profiles with similar names exist)

**Co-founder relationship:** Paul Grech and Rohan Singh both attended Carnegie Mellon University — Grech for his MBA at Tepper and Singh for graduate studies in AI/robotics. They met at an entrepreneurship happy hour at CMU to discuss ocean technology (HN Launch post).

**Founder-market fit:** Grech brings commercial and go-to-market experience from Bloomberg, supplemented by a Robotics Institute fellowship at CMU and recognition from the National Fisheries Institute. Singh brings deep hardware and robotics engineering experience from four major industrial/tech companies (ASML, Nvidia, Tesla, Toyota) plus CMU robotics training. Together, the team combines commercial acumen with hands-on robotics and ML engineering in a domain (aquaculture) where both founders have expressed personal motivation rooted in growing up in coastal communities. No advisors, board members, or notable investors beyond YC were found in public sources.

## Key Risks

**Single-customer concentration:** The company's only disclosed production customer is Riverence. Loss of this relationship or a negative pilot outcome could materially impact credibility and near-term revenue. Mitigation: two additional farm deployments planned for early 2026 (YC description).

**Hardware deployment complexity in harsh environments:** Fish farm hatcheries present corrosion, humidity, water turbidity, and food-safety compliance requirements (HN Launch post). Delta robot reliability, gripper durability, and camera calibration in these conditions create operational risk that scales with each new deployment site. Each farm may require significant on-site customization.

**Species generalization uncertainty:** Current models are trained and validated primarily on trout (via the Riverence deployment). Cross-species generalization to salmon, sea bass, sea bream, and other commercial finfish is stated as a goal but not yet demonstrated in production (YC description states "improves cross-species generalization" as aspirational). Model accuracy may degrade significantly for new species without substantial retraining data.

**Regulatory and biosecurity barriers in international expansion:** The company seeks expansion into Chile, Norway, Scotland, and the Mediterranean (YC page). Each jurisdiction has distinct aquaculture regulations, biosecurity protocols, and equipment certification requirements that could slow international deployment and increase compliance costs.

**Acqui-hire / consolidation risk from incumbents:** Aquabyte was acquired by Vitruvian Partners (Dec 2025) and Observe Technologies by AKVA Group (Jul 2024), indicating active M&A in the aquaculture tech space. While this validates the market, it also means well-capitalized incumbents may build or buy competing hatchery automation solutions.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global aquaculture market: $310.6B in 2024, projected $417.8B by 2030 at 5.1% CAGR (Grand View Research, 2024 via search snippet). Precision aquaculture technology: $788.7M in 2024, projected $1,434.5M by 2030 at 11.1% CAGR (MarketsandMarkets, 2025 via search snippet) |
| SAM | No public data found for hatchery-specific QA automation segment |
| Traction | 6-figure annual contract with Riverence (YC page); 2 additional deployments planned early 2026 (YC description); >90% model accuracy (YC page); Ocean Exchange 2025 Collegiate Award (Ocean Exchange, Oct 2025); 108 points on HN Launch (Mar 2026) |
| Revenue Signal | Six-figure annual contract with Riverence (YC page). No pricing page or ARR figure disclosed |
| Founders | Paul Grech (CEO): MBA CMU Tepper, Bloomberg, Robotics Institute Pathways Fellow. Rohan Singh (Co-Founder): ME Texas A&M, CMU AI/robotics grad studies, ASML/Nvidia/Tesla/Toyota |
| Competitors | Aquabyte ($48.4M raised, acquired by Vitruvian Partners Dec 2025, revenue unknown; in-water pen monitoring vs. hatchery robotics), XpertSea ($28M+ raised, revenue unknown; shrimp marketplace vs. finfish hatchery QA), Umitron (~$40M+ raised, revenue unknown; IoT feeding optimization vs. hatchery inspection), Observe Technologies ($2.4M raised, acquired by AKVA Jul 2024, revenue unknown; AI feeding vs. hatchery QA) |
| Moat Signals | Proprietary multi-species labeled dataset growing with each deployment (YC description); robotics + vision integration complexity; farm-specific deployment know-how |
| Risk Factors | Single-customer concentration, species generalization uncertainty, hardware deployment complexity in harsh environments |
| Founder Reach | Paul Grech: Twitter not found, LinkedIn linkedin.com/in/paul-l-grech-b4359591 (count not retrievable). Rohan Singh: Twitter not found, LinkedIn linkedin.com/in/rohxnsxngh (count not retrievable). Company: @tryoctapulse on X (count not retrievable) |
| Distribution Signals | HN Launch 108 points/49 comments (Mar 2026); Ocean Exchange 2025 award; MVPro Media "Vision Start Ups to Watch in 2026" mention; El Ecosistema Startup coverage; YC LinkedIn feature post |
| Emails | No public data found |
