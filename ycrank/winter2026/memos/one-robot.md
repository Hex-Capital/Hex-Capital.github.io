# One Robot

> World models for VLA evals and training.

| Field | Value |
|-------|-------|
| Website | https://www.onerobot.io/ |
| YC Page | https://www.ycombinator.com/companies/one-robot |
| Batch | Winter 2026 |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Hard Tech, Machine Learning, Robotics, AI |
| YC Partner | Jon Xu |
| Emails | founders@onerobot.io |

## The Idea

**Problem:** Robotics teams building Vision-Language-Action (VLA) models must iterate through a slow, expensive loop: setting up physical scenes, running robot trials, resetting, and repeating. This bottleneck limits how fast teams can evaluate and improve action policies. The founders report that as their models improved at Industrial Next, "evaluating a new policy started taking longer than training it" (YC LinkedIn post, Feb 2026). Contact-rich manipulation tasks (textiles, box folding, precision assembly) require far more training and evaluation data than teams can practically collect in the real world. Current simulation alternatives lack either visual realism or interaction realism, making them insufficient for VLA policy development (company website).

**Approach:** One Robot trains task-specific world models on actual robot data (e.g., wrist camera video conditioned on controller actions) to produce simulation environments that are both visually and physically realistic. These environments generate 60-second autoregressive rollouts from a single wrist camera input, enabling teams to discover policy failures via simulation rollouts, then generate synthetic training trajectories to address identified weaknesses — all without requiring a physical robot (company website).

**Differentiation:** Traditional physics-based simulators (e.g., NVIDIA Isaac Sim, MuJoCo) require hand-engineering environments and often fail to capture realistic visual appearance or deformable-object dynamics. One Robot's approach uses learned world models rather than hand-crafted physics engines, trained on real robot data for specific tasks. This contrasts with general-purpose world foundation models like NVIDIA Cosmos (which targets broad physical AI) and World Labs' Marble (which focuses on 3D spatial understanding). Qualia, a European startup, provides a GPU cloud for training and fine-tuning VLA models but does not build simulation environments. One Robot's task-specific focus on contact-rich manipulation (textiles, deformables, sub-millimeter assembly) is a narrower wedge than these broader platforms.

**Business Model:** No pricing page is visible on the company website. The YC LinkedIn post (Feb 2026) states the company is "already doing pilots with multiple robotics companies," suggesting a B2B model. [Inferred]: Most likely monetization path is a SaaS or per-simulation-environment licensing model for robotics teams, potentially with custom world-model-building engagements for specific manipulation tasks.

**TAM/SAM:** The global virtual robot simulator market was valued at $1.64 billion in 2025 and is projected to reach $2.55 billion by 2034 at a 6.6% CAGR (Intel Market Research, 2025 via search snippet). A broader robotics simulation market estimate projects growth from $34.83 billion in 2025 to $274.97 billion by 2035 at 22.95% CAGR (Market Research Future via search snippet), though this includes hardware simulators and adjacent categories. The robot software market is estimated at $29.64 billion in 2026, reaching $78.81 billion by 2031 at 21.6% CAGR (Mordor Intelligence via search snippet). No public SAM estimate exists for the specific segment of world-model-based simulation for VLA training.

**GTM / Distribution:** The company states it is "already doing pilots with multiple robotics companies" targeting "material handling, logistics, and manufacturing sectors" (YC LinkedIn post, Feb 2026). [Inferred]: Most likely distribution path is direct sales to robotics teams developing VLA-based manipulation systems, starting with teams working on material handling and manufacturing assembly — segments where the founders have direct domain experience from Industrial Next and Tesla.

## Defensibility

One Robot's defensibility at this stage rests on: (1) task-specific world model training data and know-how accumulated through building simulation environments for contact-rich manipulation tasks; (2) deep domain expertise in robotics manipulation from the founders' combined backgrounds at Tesla, Google, NASA JPL, and Industrial Next; (3) potential data flywheel — each customer engagement produces task-specific robot data that could improve the quality and diversity of world models over time.

**Market structure:** General-purpose simulation incumbents (NVIDIA Isaac Sim/Omniverse, MathWorks/Simulink) are optimized for physics-engine-based simulation, not learned world models. NVIDIA's Cosmos targets a broad platform play and has released open-source foundation models (3M+ downloads as of 2026, NVIDIA Newsroom), but building task-specific world models for narrow manipulation domains (textiles, deformables) requires specialized data collection and fine-tuning that may not align with NVIDIA's platform-level business model. [Inferred]: The structural barrier for incumbents is that building task-specific world models requires tight integration with individual customers' robot data and manipulation workflows, which conflicts with the scale-driven, horizontal platform approach of companies like NVIDIA.

**Commoditization risk:** Open-source frameworks like RoboCasa (UT Austin) and MimicGen provide simulation and synthetic data generation for robotics training. NVIDIA Cosmos world foundation models are freely downloadable. As world model architectures mature and become standardized, the differentiation may shift from model architecture to task-specific data and integration depth. Well-funded competitors like World Labs ($1.23B total raised, Bloomberg, Feb 2026) and Saturn could expand into manipulation-specific simulation.

## Market & Traction

1. **Traction signals:**
   - YC W26 batch participant (YC company page)
   - "Already doing pilots with multiple robotics companies" (YC LinkedIn post, Feb 2026) — number and names of pilot customers not disclosed
   - Company LinkedIn page: linkedin.com/company/one-robot-io (LinkedIn search result via search snippet)
   - YC LinkedIn launch post: 674 likes, 76 comments (LinkedIn, Feb 26, 2026)
   - YouTube demo video published: https://youtu.be/ihIiViSv2kI (YC page)
   - Twitter/X: @eltonbear6996 listed for co-founder Elton Shon on YC page; no confirmed company account found
   - No Product Hunt launch found
   - No app store presence (B2B product)
   - No public revenue figures disclosed
   - Not currently hiring (YC page)

2. **Competitive landscape:**
   - **NVIDIA Cosmos/Isaac Sim** (NVIDIA, public company; Cosmos models downloaded 3M+ times as of 2026): Open-source world foundation models and physics-based simulation platform. Broad horizontal platform; not task-specific for manipulation. Key differentiator vs. One Robot: general-purpose platform vs. task-specific world models.
   - **World Labs** ($1.23B total raised including $1B round in Feb 2026, Bloomberg): Fei-Fei Li-founded startup building spatial intelligence AI and 3D world models. Launched Marble commercial product in Nov 2025. Key differentiator vs. One Robot: focuses on 3D spatial understanding and content creation, not robotics manipulation simulation specifically.
   - **Qualia** ($2.12M pre-seed from Wave Ventures and Florent Venture Partners, Nordic 9 via search snippet): European startup providing GPU cloud platform for training and deploying VLA models (Pi 0.5, SmolVLA, Gr00t 1.5). Key differentiator vs. One Robot: Qualia provides compute infrastructure for VLA training, not task-specific simulation environments.
   - **Saturn** (funding amount not publicly disclosed): Building "the first world model as a virtual simulator" with a physics-aware generative engine. Key differentiator vs. One Robot: Saturn targets a broader autonomous systems market; One Robot focuses on manipulation tasks.
   - **RoboCasa/MimicGen** (open-source, UT Austin / NVIDIA): Academic simulation frameworks for household robotics training with 100K+ synthetic demonstrations. Key differentiator vs. One Robot: open-source research frameworks, not commercial products; focused on household rather than industrial manipulation.

3. **Why now:** Several converging factors opened this opportunity. VLA models (e.g., Pi 0.5 from Physical Intelligence, NVIDIA Gr00t) reached sufficient capability in 2024-2025 that evaluation and training data became the primary bottleneck rather than model architecture. Video generation / world model architectures (diffusion transformers, autoregressive video models) matured to the point where learned simulation can produce physically plausible rollouts. NVIDIA launched Cosmos in January 2025, validating the "world foundation model" category. [Inferred]: The shift from physics-engine simulation to learned world models was enabled by advances in video generation quality and compute availability, creating a window for startups to build task-specific applications on top of these capabilities before incumbents consolidate the market.

## Founders & Team

**Hemanth Sarabu** — Co-founder
- B.Eng. Mechanical Engineering, University of Manchester (2016, First Class Honours, ranked 3rd in class) (personal website)
- M.S. Mechanical Engineering, Georgia Institute of Technology (2018, 4.0 GPA) (personal website)
- M.S. Computational Science & Engineering, Georgia Institute of Technology (ML focus, 4.0 GPA) (personal website)
- NASA JPL Robotics AI Research Intern and Remote Affiliate (2019+) (personal website)
- Recipient of NASA Early Career Achievement Medal (LinkedIn via search snippet)
- NASA JPL Graduate Fellowship recipient (personal website)
- Software Engineer at Google (LinkedIn via search snippet)
- ML/robotics engineer at Symbio Robotics, Industrial Next (YC W22) (YC page)
- Founded Crescer Engineering/Crescer AI (Dec 2015 – Aug 2018), bootstrapped to profitability (YC page)
- Previously built vehicle simulations at McLaren Automotive (2014-2015) (personal website)
- Publications in IEEE/ASME and ASABE on cooperative robot path planning and deep learning for robotics (personal website)
- National Balashree Honour from President of India; Presidential Recognition for hydrogen fuel system innovation (personal website)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/hemanth-sarabu/ — 500+ connections (LinkedIn via search snippet)
- GitHub: hemanthsarabu.github.io (personal portfolio site); no public repos with star counts found
- Google Scholar profile: scholar.google.com/citations?user=Mlj1S_4AAAAJ (search result via search snippet)

**Elton Shon** — Co-founder
- Spent 5 years at Tesla building robotics and large-scale AI infrastructure during the Model 3 production ramp and on the Dojo supercomputer team (YC page)
- Head of Software at Industrial Next (YC W22), building robot learning and control systems (YC page)
- Twitter/X: @eltonbear6996 listed on YC page; account not findable via search — possibly private or inactive
- LinkedIn: linkedin.com/in/elton-shon/ (LinkedIn via search snippet)
- GitHub: No public repos found
- Education: Not publicly listed

**Co-founder relationship:** Both Hemanth Sarabu and Elton Shon worked together at Industrial Next (YC W22), where Hemanth built ML systems and Elton served as Head of Software. They have been "training robots since 2020" per the YC LinkedIn post (Feb 2026).

**Founder-market fit:** Both founders have extensive hands-on experience with the exact problem they are solving. At Industrial Next, they trained robots for precision manufacturing assembly tasks and directly encountered the evaluation bottleneck that One Robot addresses. Hemanth brings ML research depth (Georgia Tech, NASA JPL, Google, published robotics research) and prior entrepreneurial experience (bootstrapped Crescer AI to profitability). Elton brings large-scale AI infrastructure experience from Tesla's Dojo team and production robotics experience from the Model 3 ramp. Together they combine ML/perception expertise with production systems engineering — both critical for building realistic learned simulators for industrial manipulation.

## Key Risks

**Sim-to-real transfer gap:** World model-based simulation must produce rollouts that are sufficiently realistic that policies trained or evaluated in simulation transfer reliably to real-world manipulation. If the world model's predictions diverge from real physics in subtle ways (especially for contact-rich tasks like textile handling), customers may not trust simulation results, limiting adoption. Mitigation: the company's task-specific approach (training on real robot data for each task) may reduce this gap compared to general-purpose simulators, but no public validation data has been shared.

**Well-funded incumbent convergence:** NVIDIA Cosmos (3M+ downloads, open-source) provides free world foundation models, and NVIDIA is actively integrating world models into Isaac Sim. World Labs raised $1.23B (Bloomberg, Feb 2026) to build spatial AI. If these players add task-specific manipulation capabilities, One Robot's differentiation could erode. One Robot's two-person team would need to outrun these organizations on domain-specific quality.

**Narrow initial market:** The company targets teams building VLA-based manipulation systems — a segment that is itself early-stage. The number of robotics teams actively training VLAs for industrial manipulation is small today. Growth depends on the broader VLA ecosystem maturing and more teams adopting learned action policies for manufacturing/logistics tasks.

**Customer concentration risk:** With "multiple pilots" at pre-seed stage and a two-person team, revenue is likely concentrated among a very small number of early customers. Loss of a single pilot customer could meaningfully impact the company's trajectory.

**Brand disambiguation:** "One Robot" shares naming similarity with several other entities: ONE Robotics Company (onerobotics.com, FANUC robot programming), Plus One Robotics (plusonerobotics.com, material handling automation), and One Robot (onerobot.net, unrelated). The @oneRobot Twitter handle belongs to a music project. This may create confusion in market positioning and SEO.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Virtual robot simulator market: $1.64B in 2025, projected $2.55B by 2034 at 6.6% CAGR (Intel Market Research via search snippet). Broader robotic simulator market: $34.83B in 2025, projected $274.97B by 2035 at 22.95% CAGR (Market Research Future via search snippet) |
| SAM | No public data found for the specific world-model-based VLA simulation segment |
| Traction | YC W26 batch; "already doing pilots with multiple robotics companies" (YC LinkedIn post, Feb 2026); YC LinkedIn launch post: 674 likes, 76 comments (Feb 26, 2026) |
| Revenue Signal | No public data found |
| Founders | Hemanth Sarabu (Co-founder): Georgia Tech MS x2, NASA JPL, Google, Industrial Next, bootstrapped Crescer AI to profitability. Elton Shon (Co-founder): 5 yrs Tesla (Dojo, Model 3 ramp), Head of Software at Industrial Next |
| Competitors | NVIDIA Cosmos/Isaac Sim (public co, 3M+ model downloads, general-purpose platform); World Labs ($1.23B raised, spatial AI/3D worlds); Qualia ($2.12M pre-seed, VLA training cloud); Saturn (funding undisclosed, general world model simulator); RoboCasa/MimicGen (open-source, academic) |
| Moat Signals | Task-specific world model expertise; founders' combined domain experience at Tesla, Google, NASA JPL, Industrial Next; potential data flywheel from customer engagements |
| Risk Factors | Sim-to-real transfer gap for contact-rich tasks, well-funded incumbent convergence (NVIDIA/World Labs), narrow initial VLA market size |
| Founder Reach | Hemanth Sarabu: LinkedIn 500+ connections, no Twitter found. Elton Shon: LinkedIn linkedin.com/in/elton-shon/, Twitter @eltonbear6996 (listed on YC page, not findable via search) |
| Distribution Signals | YC W26 participation; YC LinkedIn launch post (674 likes, 76 comments, Feb 2026); no Product Hunt launch found |
| Emails | founders@onerobot.io |
