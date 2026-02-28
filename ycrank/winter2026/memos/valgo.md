# Valgo

> Algorithmic safety validation tools for autonomy.

| Field | Value |
|-------|-------|
| Website | https://valgo.dev |
| YC Page | https://www.ycombinator.com/companies/valgo |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Mateo, CA, USA |
| Tags | Robotics, B2B, Aerospace, Trust & Safety, Self-Driving Vehicles |

## The Idea

**Problem:** Companies building autonomous systems for safety-critical domains (aviation, autonomous vehicles, robotics, space, defense) must validate that their systems do not fail in rare but dangerous edge cases before real-world deployment. Current approaches rely heavily on brute-force Monte Carlo simulation, which is computationally expensive and may miss low-probability failure modes. As autonomy expands into regulated domains like aviation, companies must demonstrate safety to regulators (e.g., FAA certification), requiring extensive validation that currently consumes significant in-house engineering effort. Existing tools are often domain-specific (primarily automotive) and tightly coupled to particular simulators or models.

**Approach:** Valgo provides a platform for algorithmic safety validation that efficiently discovers rare and realistic failure events in simulation at a fraction of the compute cost of brute-force methods. The tools use black-box techniques -- meaning they are agnostic to the underlying models and simulators -- allowing application across industries. The technical foundation draws from Bayesian safety validation, surrogate models, and optimization under uncertainty, as developed in the founders' academic research. Rather than exhaustively sampling the simulation space, Valgo's algorithms intelligently search for failure-inducing conditions, reducing the number of simulation runs needed to find critical edge cases.

**Differentiation:** Valgo's approach differs from competitors in two key ways. First, it is model-agnostic and simulator-agnostic (black-box), whereas most competitors (Applied Intuition, Cognata, MORAI) provide integrated simulation environments tightly coupled to specific domains (primarily automotive). Valgo's tools can wrap around any existing simulator the customer already uses. Second, Valgo's algorithmic approach to finding failures is grounded in peer-reviewed academic research (the co-founders co-authored the MIT Press textbook "Algorithms for Validation" and teach Stanford's course on the subject), whereas competitors generally focus on scenario libraries, digital twins, and high-fidelity simulation environments rather than on the mathematical optimization of the search for failures.

**Business Model:** No pricing page or revenue signals are visible on the website or in public sources. The company is incorporated as a Public Benefit Corporation (Valgorithmic, Inc.). [Inferred]: Most likely monetization path is enterprise SaaS with per-seat or consumption-based pricing (compute hours or simulation runs), given the B2B nature of the product and the compute-intensive nature of safety validation workloads. Defense and aviation customers typically procure via multi-year contracts.

**TAM/SAM:** The global autonomous vehicle simulation solutions market was valued at approximately $1 billion in 2024 with an estimated CAGR of 10.6% through 2034 (GM Insights, 2025 via search snippet). Other estimates range from $1.4B to $1.7B for 2025 depending on scope definition (GlobeNewswire/Global Growth Insights, 2025 via search snippet). However, this figure covers only automotive simulation. Valgo targets a broader set of industries (aviation, robotics, space, defense, energy, finance), for which no single consolidated TAM estimate was found. The broader automotive simulation software market was estimated at $2.4B in 2024 growing to $4.1B by 2030 (Mordor Intelligence, 2025 via search snippet). No public SAM data found for Valgo's specific cross-industry algorithmic validation niche.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct enterprise sales to engineering teams at autonomous systems companies, defense contractors, and aviation OEMs, leveraging the founders' existing industry relationships from MIT Lincoln Laboratory, Xwing/Joby Aviation, Reliable Robotics, NASA, and Johns Hopkins APL. The academic pedigree (Stanford textbook and course) provides a channel to reach the research-to-production pipeline at companies hiring from these programs.

## Defensibility

The founders co-authored the MIT Press textbook "Algorithms for Validation" (Kochenderfer, Katz, Corso, Moss) and created and taught Stanford's course on validation of safety-critical systems (CS238V/AA228V), establishing them as defining voices in the field. The underlying research spans Bayesian safety validation, neural network verification, surrogate models, and optimization under uncertainty, published across peer-reviewed venues (IJCAI, JAIS, and others). Both founders were on the core team at MIT Lincoln Laboratory that designed and validated ACAS X, the next-generation aircraft collision avoidance system that became an international standard in 2018 (FAA/MIT Lincoln Laboratory).

**Market structure:** Large incumbents like Ansys and Siemens provide general-purpose simulation tools but are not focused on the specific algorithmic search problem of efficiently finding rare failures. Their business model depends on selling comprehensive simulation suites, creating channel conflict if they were to offer a lightweight, pluggable validation layer that works with competitors' simulators. Applied Intuition ($15B valuation) builds full-stack autonomy simulation environments, making it structurally difficult to offer a model-agnostic, black-box tool that integrates with third-party simulators. Defense and aviation customers also face regulatory barriers that favor vendors with demonstrated domain expertise and academic credibility in safety validation.

**Commoditization risk:** The academic research underlying the approach is published and open (the textbook is publicly available in preview form). However, translating published algorithms into production-grade tooling for regulated industries requires deep domain expertise in certification processes, simulator integration, and scaling validation to production workloads. The broader AV simulation space has at least five funded competitors. A well-resourced competitor with both simulation infrastructure and algorithmic research talent (e.g., Applied Intuition hiring from the same academic community) could potentially build comparable algorithmic validation capabilities as an add-on to their existing platform.

## Market & Traction

**Traction signals:** No public revenue, user counts, or customer announcements found. The company website (valgo.dev) is a minimalist landing page with mission statement only -- no product screenshots, pricing, or feature details. The Valgorithmic GitHub organization has no public repositories and 4 followers (GitHub, Feb 2026). The company Twitter/X account is @valgorithmicinc (count not retrievable). The LinkedIn company page is linkedin.com/company/valgorithmic. No Product Hunt launch found. No press coverage found beyond YC directory listings and startup aggregator indexing. No job postings found. The Stanford course "Validation of Safety-Critical Systems" has a YouTube playlist (youtube.com, undated). The "Algorithms for Validation" textbook GitHub repo has 6 stars (GitHub, Feb 2026).

**Competitive landscape:**

1. **Applied Intuition** ($1.2B raised, $15B valuation after $600M Series F in Jun 2025; revenue unknown) (TechCrunch, Jun 2025): Full-stack autonomous vehicle simulation, validation, and Vehicle OS platform. Differentiator vs. Valgo: integrated end-to-end simulation environment vs. Valgo's pluggable algorithmic validation layer. Primarily automotive-focused with expanding defense business.

2. **Foretellix** ($135M raised, Series C closed at $85M in Dec 2023; revenue unknown) (TechCrunch, Dec 2023): Verification and validation platform for ADAS/autonomous driving using scenario generation. Differentiator vs. Valgo: scenario-library and coverage-driven approach vs. Valgo's algorithmic search for rare failures. Focused on automotive domain.

3. **Cognata** ($23.5M raised, Series B $18.5M in Oct 2018; revenue unknown) (TechCrunch, Oct 2018): Deep learning-based autonomous driving simulator with synthetic city environments. Differentiator vs. Valgo: high-fidelity simulation environment generation vs. Valgo's simulator-agnostic validation tooling. Israel-based, automotive-focused.

4. **MORAI** ($24.9M raised, Series B $20.8M in Feb 2022; revenue unknown) (TechCrunch, Feb 2022): Digital twin simulation platform for autonomous vehicle testing with 100+ corporate clients including Hyundai. Differentiator vs. Valgo: digital twin/sensor simulation platform vs. Valgo's black-box algorithmic approach. Korea-based.

5. **Ansys** (public company, ~$2B+ annual revenue): Incumbent multi-physics simulation software provider. AVxcelerate Sensors integrated into NVIDIA DRIVE Sim (Jan 2024). Differentiator vs. Valgo: comprehensive simulation suite for automotive OEMs vs. Valgo's focused algorithmic validation tools. Part of a broader group (Ansys, Siemens, Altair, Hexagon, Dassault) holding >31% of AV simulation market share in 2024 (GM Insights, 2025 via search snippet).

**Why now:** ACAS Xa, the system both founders helped build, was published as an international standard in 2018 (MIT Lincoln Laboratory), demonstrating that algorithmic validation of safety-critical autonomous systems is technically viable and regulatorily accepted. [Inferred]: Several converging trends create urgency: (1) the expansion of autonomous systems beyond automotive into aviation (FAA Part 135 autonomous cargo, eVTOL/AAM certification), defense (autonomous drones, DoD autonomy mandates), and robotics (warehouse, surgical) -- all regulated domains requiring formal safety validation; (2) the cost of high-fidelity simulation at scale is becoming a bottleneck as autonomous systems grow more complex, creating demand for computationally efficient validation approaches; (3) Applied Intuition's $15B valuation (Jun 2025) signals market acceptance of simulation/validation tooling as a standalone software category.

## Founders & Team

**Robert Moss** -- Co-Founder & CEO
- PhD in Computer Science, Stanford University (2025), advised by Mykel Kochenderfer. Dissertation: "Safe planning under uncertainty using surrogate models." Recipient of the Christofer Stephenson Memorial Award for best CS master's thesis and the Centennial TA Award (robert-moss.com).
- MS in Computer Science, Stanford University
- BS in Computer Science (minor in Physics), Wentworth Institute of Technology
- Research Staff Member, MIT Lincoln Laboratory: core team that developed, optimized, and validated ACAS Xa, Xu, and sXu (next-generation aircraft collision avoidance system, FAA-certified) (robert-moss.com)
- Research Engineer, NASA Ames Research Center: developed decision support tools for the VIPER autonomous Lunar rover mission (robert-moss.com)
- Head TA for Stanford CS238/AA228 (Decision Making Under Uncertainty) and CS238V/AA228V (Validation of Safety-Critical Systems) (Stanford Profiles)
- Co-author: "Algorithms for Validation" textbook (MIT Press, forthcoming) (algorithmsbook.com)
- Twitter/X: @mossr_jl -- count not retrievable
- LinkedIn: linkedin.com/in/robert-j-moss
- GitHub: github.com/mossr -- 104 repos, 279 followers; BeautifulAlgorithms.jl (1.4k stars), julia-tufte-beamer (140 stars), Tetris.jl (56 stars) (GitHub)

**Sydney Katz** -- Co-Founder & CTO
- PhD in Aeronautics and Astronautics, Stanford University (2023), advised by Mykel Kochenderfer. Thesis: "Safe Machine Learning-Based Perception" (Stanford Profiles)
- MS in Aeronautics and Astronautics, Stanford University (2020)
- BS and BSAS in Electrical and Systems Engineering, Washington University in St. Louis (2018) -- Valedictorian (sydneymkatz.com)
- Postdoctoral Researcher, Stanford Intelligent Systems Laboratory (SISL) (LinkedIn)
- MIT Lincoln Laboratory: core team that designed and validated ACAS X collision avoidance system (sydneymkatz.com)
- Reliable Robotics (autonomous aircraft startup, now part of Joby Aviation) (YC page)
- Johns Hopkins Applied Physics Laboratory (sydneymkatz.com)
- NASA Glenn Research Center (sydneymkatz.com)
- Teaches Stanford's "Validation of Safety-Critical Systems" course (winter quarter) (sydneymkatz.com)
- Co-author: "Algorithms for Validation" textbook (MIT Press, forthcoming) (algorithmsbook.com)
- Twitter/X: @Sydney_Katz -- count not retrievable
- LinkedIn: linkedin.com/in/smkatz
- GitHub: Code at github.com/sisl/VisionBasedAircraftDAA (Stanford search results)

**Co-founder relationship:** Both founders were research staff at MIT Lincoln Laboratory on the ACAS X collision avoidance system team. Both subsequently pursued PhDs at Stanford under the same advisor (Mykel Kochenderfer) in the Stanford Intelligent Systems Laboratory. They co-authored the "Algorithms for Validation" textbook together (robert-moss.com, sydneymkatz.com).

**Founder-market fit:** Moss and Katz are among the most credentialed founders possible for this specific problem. They literally wrote the textbook on algorithmic safety validation, teach the Stanford course on the subject, and both worked on the highest-profile real-world deployment of algorithmic safety validation (ACAS X) at MIT Lincoln Laboratory. Katz's additional experience at Reliable Robotics (autonomous aircraft, now Joby Aviation) and Johns Hopkins APL provides industry exposure to aviation and defense customers. Moss's NASA experience adds a space/government channel. Their advisor, Mykel Kochenderfer, is a leading researcher in decision-making under uncertainty and has co-authored multiple MIT Press textbooks in the field.

## Key Risks

**Entrenched full-stack competitors:** Applied Intuition ($1.2B raised, $15B valuation) offers an integrated simulation-validation-autonomy stack. Customers already using Applied Intuition's simulator may prefer to add validation features within the same platform rather than integrating a separate tool. Applied Intuition's 2025 expansion into defense (TechCrunch, Jun 2025) directly overlaps with Valgo's target domain.

**Academic-to-product translation gap:** The underlying algorithms are published in peer-reviewed venues and previewed in a freely available textbook. While productization requires significant engineering effort, the research is accessible to competitors. Applied Intuition, Foretellix, or a well-funded new entrant could recruit from the same Stanford/MIT research community to build comparable algorithmic capabilities. The Valgorithmic GitHub organization currently has no public repositories.

**Regulatory certification timeline dependency:** Valgo's value proposition is strongest in regulated industries (aviation, defense) where formal safety validation is mandatory. However, regulatory frameworks for autonomous system certification (e.g., FAA Part 135 for autonomous cargo aircraft) are still evolving. Delays in regulatory clarity could slow customer urgency to adopt specialized validation tools.

**Two-person team in a multi-domain sales environment:** Valgo targets aviation, automotive, robotics, space, defense, energy, and finance -- each with distinct technical requirements, regulatory environments, and procurement processes. Simultaneously pursuing all verticals with a two-person team requires extreme focus to avoid spreading thin across too many domains before establishing a beachhead.

**Platform dependency on customer simulators:** As a black-box tool that wraps around customers' existing simulators, Valgo depends on integration compatibility with a variety of third-party simulation environments. Each new simulator requires integration work, and simulator vendors could restrict API access or build competing validation features.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | ~$1B autonomous vehicle simulation solutions market in 2024, 10.6% CAGR to 2034 (GM Insights, 2025 via search snippet). Broader cross-industry safety validation TAM not quantified. |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Robert Moss (CEO): Stanford CS PhD '25, MIT Lincoln Lab (ACAS X), NASA Ames, best CS thesis award. Sydney Katz (CTO): Stanford Aero/Astro PhD '23, MIT Lincoln Lab (ACAS X), Reliable Robotics, JHU APL, valedictorian WashU. |
| Competitors | Applied Intuition ($1.2B raised, $15B valuation, revenue unknown, full-stack AV simulation); Foretellix ($135M raised, revenue unknown, scenario-based V&V for ADAS); Cognata ($23.5M raised, revenue unknown, deep learning AV simulator); MORAI ($24.9M raised, revenue unknown, digital twin simulation, 100+ clients); Ansys (public, ~$2B+ revenue, incumbent multi-physics simulation) |
| Moat Signals | Co-authored MIT Press textbook "Algorithms for Validation"; teach Stanford's safety validation course; core team on FAA-certified ACAS X system; Public Benefit Corporation structure |
| Risk Factors | Entrenched full-stack competitors (Applied Intuition at $15B), published research accessible to competitors, regulatory timeline dependency, multi-domain sales with two-person team |
| Founder Reach | Robert Moss: Twitter @mossr_jl (count not retrievable), LinkedIn robert-j-moss, GitHub 1.4k stars (BeautifulAlgorithms.jl). Sydney Katz: Twitter @Sydney_Katz (count not retrievable), LinkedIn smkatz, GitHub code at sisl/VisionBasedAircraftDAA |
| Distribution Signals | No public data found |
