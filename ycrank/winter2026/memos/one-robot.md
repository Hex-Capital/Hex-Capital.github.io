# One Robot

> World models for VLA evals and training.

| Field | Value |
|-------|-------|
| Website | https://www.onerobot.io/ |
| YC Page | https://www.ycombinator.com/companies/one-robot |
| Batch | Winter 2026 |
| Industry | Industrials / Manufacturing and Robotics |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Hard Tech, Machine Learning, Robotics, AI |

## The Idea

**Problem:** Robotics teams building Vision-Language-Action (VLA) models are bottlenecked by physical robot availability. Improving a VLA today requires extensive real-world hours: setting up scenes, running trials, resetting, and repeating. This loop is slow, expensive, and hard to scale (company website). Contact-rich manipulation tasks—textiles, box folding, manufacturing assembly—require far more training and evaluation data than teams can feasibly collect in the real world (YC company page). Current alternatives include general-purpose physics simulators (e.g., NVIDIA Isaac Sim, MuJoCo) that require significant manual environment authoring and often lack visual realism or accurate contact dynamics for deformable objects.

**Approach:** One Robot builds task-specific world models trained on actual robot experience data. These world models learn both physics and visuals from the data, generating simulation environments that are "realistic to see and realistic to interact with" (company website). The pipeline works in three stages: (1) train a world model on task-specific robot data, (2) use the simulation to identify failure modes in robot policies, and (3) generate targeted synthetic training trajectories to address discovered failures (company website). The company specifically targets contact-rich manipulation tasks involving deformable objects and precise assembly.

**Differentiation:** Unlike general-purpose simulators (NVIDIA Isaac Sim, MuJoCo) that require hand-authored environments and struggle with deformable object physics, One Robot's world models are learned from robot experience data, producing task-specific environments without manual scene construction. Compared to broader world model platforms like Runway GWM-1 Robotics (which targets general robotics use cases) or 1X's world model (which is proprietary to 1X's NEO humanoid), One Robot focuses on hard manipulation tasks—specifically contact-rich, deformable-object scenarios that are poorly served by traditional rigid-body simulators. Compared to VLA training platforms like Qualia (which provides infrastructure for training/fine-tuning existing VLA models), One Robot operates upstream by generating the simulation environments and synthetic data that feed into policy training.

**Business Model:** No pricing page is visible on the company website. [Inferred]: Most likely monetization path is a SaaS or usage-based model selling simulation environments and synthetic data generation to robotics teams, potentially with per-task-environment pricing or compute-based consumption fees, given the task-specific nature of the product.

**TAM/SAM:** The robotics simulation market was valued at $1.5B in 2024 and is estimated to reach $4.2B by 2033 at a 12.3% CAGR (Verified Market Reports, via search snippet). The broader robot software market is estimated at $29.64B in 2026, projected to reach $78.81B by 2031 at 21.6% CAGR (Mordor Intelligence, via search snippet). [Inferred]: One Robot's serviceable market is a subset focused on VLA/policy training simulation for manipulation tasks, which would be a fraction of the broader robotics simulation TAM.

**GTM / Distribution:** No public GTM data found. [Inferred]: Most likely distribution path is direct sales to robotics teams at companies building VLA-based manipulation systems, starting with teams working on material handling and manufacturing assembly. The YC network and the founders' connections from Industrial Next, Tesla, and Google provide initial customer pipeline access.

## Defensibility

One Robot's task-specific world models trained on proprietary robot experience data create a potential data flywheel: as more customers use the platform for specific manipulation tasks, the company accumulates task-specific training data that improves model fidelity, which in turn attracts more users. The focus on contact-rich deformable object manipulation (textiles, flexible materials) represents a technically challenging niche where general-purpose simulators perform poorly.

**Market structure:** Large incumbents like NVIDIA offer free general-purpose simulation tools (Isaac Sim is open-source under Apache 2.0). However, NVIDIA's simulation stack is designed as horizontal infrastructure rather than task-specific world models for VLA evaluation. Building task-specific learned simulators for niche manipulation domains (deformable objects, textiles) requires domain-specific robot data and specialized model architectures that do not fit NVIDIA's platform-layer business model. Runway's GWM Robotics is a general world model targeting broad robotics use cases rather than specialized manipulation sim-to-real transfer.

**Commoditization risk:** Multiple well-funded players are entering the world model space. NVIDIA Cosmos is available as an open platform with massive data backing (20 million hours of training data) (NVIDIA Newsroom, Jan 2025). Runway ($315M Series E at $5.3B valuation, Feb 2026; TechCrunch) has launched GWM Robotics. 1X ($100M Series B; 1x.tech) has released its own world model for humanoid training. Large robotics labs at Google DeepMind and Meta are developing similar capabilities internally. The barrier to entry depends on how much task-specific data and domain expertise in deformable-object manipulation creates defensibility versus general-purpose world model improvements.

## Market & Traction

**Traction signals:** One Robot is a YC W26 company. No public user counts, revenue figures, customer announcements, partnerships, press coverage, Product Hunt launches, app store listings, or community channels were found. No company Twitter/X or LinkedIn page was identified. The company website shows a video demonstration of a 60-second autoregressive world model rollout (company website). No public data found for web traffic estimates, job postings, or download counts.

**Competitive landscape:**

- **NVIDIA Isaac Sim / Cosmos**: Free, open-source robotics simulation platform backed by NVIDIA's resources. Cosmos world foundation models trained on 20 million hours of data (NVIDIA Newsroom, Jan 2025). Offers general-purpose simulation rather than task-specific learned world models. NVIDIA is a public company ($3T+ market cap); Isaac Sim is a strategic product, not a standalone revenue line.
- **Runway (GWM-1 Robotics)**: $860M total raised, $5.3B valuation (TechCrunch, Feb 2026). GWM Robotics variant generates synthetic training data for robot policy development. Broader focus across worlds, avatars, and robotics rather than specialized manipulation tasks. Revenue unknown for robotics-specific segment.
- **1X Technologies**: ~$137M total raised including $100M Series B (1x.tech). Built a proprietary world model for its NEO humanoid robot (TechCrunch, Jan 2026). World model is primarily internal-use for 1X's own hardware rather than sold as a platform to third parties.
- **Saturn Dynamics**: Early-stage European startup building a world foundation model for physically accurate simulation, starting from robotics (FOV Ventures, 2026 via search snippet). Funding amount not publicly disclosed.
- **Qualia**: ~$1.8–2.1M raised (Nordic 9, via search snippet). Platform for training and deploying VLA models. Focuses on model training infrastructure rather than world model simulation generation. Positioned as complementary to (rather than directly competing with) simulation providers.

**Why now:** [Inferred]: Several converging developments created this opportunity in 2025–2026. VLA models emerged as the dominant paradigm for robot manipulation policy learning, with models like Pi 0.5, SmolVLA, and Gr00t 1.5 creating demand for large-scale training and evaluation data. Simultaneously, world model architectures advanced rapidly—NVIDIA Cosmos launched in January 2025, Runway released GWM-1 in December 2025, and 1X published its world model in January 2026—validating the technical feasibility of learned simulation. The gap between the data requirements of modern VLA models and the throughput of physical robot data collection has widened, making simulation-based training a necessity rather than a luxury for robotics teams targeting manipulation tasks.

## Founders & Team

**Hemanth Sarabu** — Co-founder
- B.Eng. Mechanical Engineering, University of Manchester (First Class Honours, ranked 3rd in class, 2016) (personal website)
- M.S. Mechanical Engineering, Georgia Institute of Technology (Controls, Modelling and Simulation, 4.0 GPA, 2018) (personal website)
- M.S. Computational Science & Engineering, Georgia Institute of Technology (Machine Learning, 4.0 GPA) (personal website)
- NASA Jet Propulsion Laboratory: AI Research Intern and Graduate Fellow, received NASA Early Career Achievement Medal (LinkedIn, via search snippet)
- Google: Software Engineer (LinkedIn, via search snippet)
- McLaren Automotive: Passive Safety Engineer (personal website)
- Industrial Next (YC W22): role not specified (YC company page)
- Crescer AI: Co-founder; bootstrapped geospatial AI company to profitability (YC company page)
- Crescer Engineering: Founder (personal website)
- National Balashree Honour from Indian President (selected 11 of 200,000 nationwide) (personal website)
- Publications in robotics (cooperative robot path planning, deep learning for agriculture) (personal website)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/hemanth-sarabu/ — headline lists Crescer AI (LinkedIn)
- GitHub: hemanthsarabu.github.io (personal website); no public repos with significant star counts found

**Elton Shon** — Co-founder
- Tesla: 5 years building factory automation systems and Dojo infrastructure (YC company page)
- Industrial Next (YC W22): Head of Software (YC company page)
- Background in robotics and software/firmware (YC company page)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/elton-shon/ — headline references Industrial Next (YC W22) (LinkedIn)
- GitHub: No public repos found

**Co-founder relationship:** Both Hemanth Sarabu and Elton Shon worked together at Industrial Next (YC W22), a robotics manufacturing startup. This is a confirmed prior working relationship at a YC-backed robotics company.

**Founder-market fit:** Both founders come from robotics and manufacturing automation backgrounds. Hemanth brings ML research depth (Georgia Tech ML, NASA JPL robotics, Google) combined with hands-on robotics experience and a prior bootstrapped-to-profitability startup (Crescer AI). Elton brings 5 years of factory automation and ML infrastructure experience at Tesla (including Dojo, Tesla's ML training platform) plus robotics software leadership at Industrial Next. Their shared experience at Industrial Next—a company focused on autonomous manufacturing—gives them direct exposure to the real-world robot data bottleneck their product addresses. YC primary partner: Jon Xu (YC company page).

## Key Risks

**Platform risk from NVIDIA:** NVIDIA's Isaac Sim is free and open-source, and Cosmos world foundation models are available with massive data backing. If NVIDIA extends Cosmos to support task-specific world model generation for manipulation tasks, One Robot's value proposition could be subsumed into NVIDIA's free ecosystem. Mitigation: One Robot's specialization in deformable-object manipulation and task-specific data may remain outside NVIDIA's horizontal platform scope.

**Well-funded world model competitors:** Runway ($860M raised), 1X ($137M raised), and Google DeepMind are all building world models with robotics applications. These organizations have orders-of-magnitude more capital and data. One Robot's defensibility depends on the degree to which task-specific manipulation simulation is a distinct problem from general world modeling.

**Sim-to-real transfer gap:** The fundamental technical risk is whether world model-based simulations transfer effectively to real-world robot performance for contact-rich manipulation tasks. Deformable objects (textiles, flexible materials) are among the most challenging domains for sim-to-real transfer. No public data was found on One Robot's sim-to-real transfer success rates or customer validation.

**Narrow initial market:** The focus on "hard manipulation tasks" (textiles, box folding, manufacturing assembly) targets a specific subset of the robotics market. If VLA training shifts toward other modalities (e.g., foundation model pre-training on internet video rather than simulation), demand for task-specific simulation environments could be limited.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.5B robotics simulation market in 2024, projected $4.2B by 2033 at 12.3% CAGR (Verified Market Reports, via search snippet) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Hemanth Sarabu (Co-founder): 2x MS Georgia Tech (ML + Controls, 4.0 GPA), ex-Google, NASA JPL (Early Career Medal), McLaren, Crescer AI (bootstrapped to profitability). Elton Shon (Co-founder): 5 yrs Tesla (factory automation, Dojo), Head of Software at Industrial Next (YC W22). |
| Competitors | NVIDIA Isaac Sim/Cosmos (public company, free open-source general-purpose simulation vs. One Robot's task-specific learned world models); Runway ($860M raised, $5.3B valuation, GWM Robotics is one variant of broader world model platform vs. manipulation-focused); 1X Technologies (~$137M raised, proprietary internal world model for NEO humanoid vs. third-party platform); Saturn Dynamics (early-stage, funding unknown, general world foundation model vs. task-specific); Qualia (~$2M raised, VLA training platform vs. simulation generation) |
| Moat Signals | Task-specific world model data from robot experience; specialization in deformable-object manipulation; both founders share prior robotics manufacturing experience at Industrial Next (YC W22) |
| Risk Factors | NVIDIA platform risk (free open-source simulation stack), well-funded world model competitors (Runway $860M, 1X $137M), sim-to-real transfer gap for deformable objects |
| Founder Reach | Hemanth Sarabu: Twitter not found, LinkedIn linkedin.com/in/hemanth-sarabu/, GitHub hemanthsarabu.github.io (no significant star counts). Elton Shon: Twitter not found, LinkedIn linkedin.com/in/elton-shon/, GitHub not found |
| Distribution Signals | No public data found |
| Emails | founders@onerobot.io (company website) |
