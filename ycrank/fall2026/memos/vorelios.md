# Vorelios

> AI that can engineer anything

| Field | Value |
|-------|-------|
| Website | https://vorelios.com |
| YC Page | https://www.ycombinator.com/companies/vorelios |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/vorelios)) |
| Industry | Industrials / Industrials |
| Team Size | 2 ([Y Combinator](https://www.ycombinator.com/companies/vorelios)) |
| Location | San Francisco, CA, USA |
| Tags | Hard Tech, AI |
| YC Partner | Aaron Epstein ([Y Combinator](https://www.ycombinator.com/companies/vorelios)) |
| Emails | founders@vorelios.com, shared founder inbox ([Vorelios Contact](https://vorelios.com/#contact), [Launch YC](https://www.ycombinator.com/launches/Whd-vorelios-ai-that-can-engineer-anything)) |

## The Idea

- **Problem:** Hardware engineering teams use numerical simulation to evaluate candidate designs, and Vorelios says a single run can take hours or days, limiting the designs teams can test ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Whd-vorelios-ai-that-can-engineer-anything)).
- **Approach:** Vorelios trains a model on simulation data to predict fluid flow, heat transfer, and structural behavior from clean CAD geometry and operating conditions, then uses those predictions to search and refine designs from a written specification ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Whd-vorelios-ai-that-can-engineer-anything)).
- **Differentiation:** Vorelios demonstrated a single model guiding autonomous design search across interacting physical effects, while PhysicsX’s public Ai.rplane application lets users design aircraft, Luminary’s announced workflow gives engineers final approval, and Neural Concept embeds physics-aware copilots in CAD workflows ([Launch YC](https://www.ycombinator.com/launches/Whd-vorelios-ai-that-can-engineer-anything), [PhysicsX](https://www.physicsx.ai/resources/welcome-to-airplane), [Luminary](https://luminary.ai/resources/whats_new_Luminary_Platform_fall_2026/), [Neural Concept](https://www.neuralconcept.com/press-release/neural-concept-closes-100m-funding-round)).
- **Business Model:** No public data found.
- **TAM/SAM:** Next Move Strategy Consulting estimates the broader physics-informed AI market at $1.18B in 2026 with 31.9% CAGR through 2035, and sizes its engineering simulation and design segment at $350M in 2025 ([Next Move Strategy Consulting, 2026](https://www.nextmsc.com/report/physics-informed-ai-market-ic6056)).
- **GTM / Distribution:** Vorelios identified aerospace aerodynamics as its initial focus in October and presented a broader research program through Launch YC and the CEO’s X account in November ([Vorelios on X, Oct 2026, mirrored by Teapawt](https://xitter.gq/vorelios), [Launch YC](https://www.ycombinator.com/launches/Whd-vorelios-ai-that-can-engineer-anything), [Doomers AI, Nov 2026](https://doomers.ai/launches/vorelios)).

## Defensibility

- **Moat today:** Vorelios reports building its own pipeline to generate geometries and run simulations for model training ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Whd-vorelios-ai-that-can-engineer-anything)).
- **Future moat:** [Inferred]: A dataset spanning interacting physical effects could improve predictions on unfamiliar designs, with the size of the dataset and its effect on held-out accuracy still undisclosed ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Whd-vorelios-ai-that-can-engineer-anything)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** NVIDIA’s open-source PhysicsNeMo supplies reusable model architectures, GPU mesh processing, and simulation-data tools for engineering teams building their own surrogates ([NVIDIA PhysicsNeMo, Aug 2026](https://docs.nvidia.com/physicsnemo/26.08/release-notes/index.html)).

## Market & Traction

- **Traction signals:**
  - Subsecond physical-field predictions from clean CAD in company-reported tests on full-scale designs ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Whd-vorelios-ai-that-can-engineer-anything)).
  - Thousands of candidates searched in initial autonomous design runs, with model predictions within a few percent of an independent solver in those runs, according to Vorelios ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Whd-vorelios-ai-that-can-engineer-anything)).
  - Fall 2026 YC participation confirmed by YC, with $125K raised reported separately by Dealroom ([Y Combinator](https://www.ycombinator.com/companies/vorelios), [Dealroom, accessed Nov 2026](https://dealroom.co/just-founded/vorelios/)).
  - 12,531 views as of Nov 13 on the CEO’s Nov 3 launch post ([Doomers AI, Nov 2026](https://doomers.ai/launches/vorelios)).
  - 96 followers on the company’s X account ([Teapawt snapshot, Nov 2026](https://nitter.gq/vorelios)).
  - Coverage in Eight Capital’s Fall 2026 seed spotlight and The Launch Video Company’s launch directory ([Eight Capital, Fall 2026](https://www.eightcapital.com/spotlight/seed-spotlight-y-combinator-f26-week-1), [The Launch Video Company, Nov 2026](https://www.launchvideo.com/directory/vorelios)).
  - Zero open YC job listings, alongside a launch request for introductions to AI researchers and numerical-solver or CFD specialists ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/vorelios/jobs), [Launch YC, Nov 2026](https://www.ycombinator.com/launches/Whd-vorelios-ai-that-can-engineer-anything)).
- **Competitors:**
  - **PhysicsX** (about $487M raised, $50M in reported 2026 revenue): Sells an industrial physics-AI platform and developed LGM-Aero using Siemens simulation data, with a $300M Series C led by Temasek in June 2026 ([DClaw funding history](https://www.dclawai.com/en/reports/physicsx-physics-ai-2026/), [CB Insights, via search snippet](https://www.cbinsights.com/company/physicsx/financials), [PhysicsX Series C](https://www.physicsx.ai/resources/physicsx-announces-300m-series-c-to-accelerate-physics-ai-for-industrial-engineering), [Siemens and PhysicsX](https://www.physicsx.ai/resources/siemens-physicsx-collaborate-to-build-ai-based-deep-physics-simulation)).
  - **Luminary** ($187M across announced financings, revenue unknown): Offers cloud simulation and pretrained SHIFT models and announced agents that retrain models where uncertainty is high, following a $72M Series B led by N47 in September 2025 ([Luminary launch release](https://www.prnewswire.com/news-releases/luminary-cloud-emerges-from-stealth-empowering-rd-with-realtime-engineering-302087593.html), [Luminary Series B](https://luminary.ai/resources/luminary-cloud-secures-72m-series-b-to-lead-the-physics-ai-era/), [Luminary Fall 2026 release](https://luminary.ai/resources/whats_new_Luminary_Platform_fall_2026/)).
  - **Neural Concept** ($138.1M in reported funding, revenue unknown): Deploys physics-aware design copilots inside enterprise CAD workflows and raised a $100M Series C led by Goldman Sachs Alternatives’ Growth Equity team in December 2025 ([DClaw funding history](https://www.dclawai.com/en/reports/neural-concept-physics-ai-2026/), [Neural Concept Series C](https://www.neuralconcept.com/press-release/neural-concept-closes-100m-funding-round)).
  - **Vinci** ($296M across announced financings, revenue unknown): Commercialized thermal, thermomechanical, and fluid simulation beginning with semiconductors and raised a $250M Series B co-led by Advent, Temasek, and Xora in October 2026 ([Vinci launch release](https://www.getvinci.ai/news/vinci-emerges-from-stealth-to-transform-semiconductor-design-and-simulation/), [Advent International](https://www.adventinternational.com/news/vinci-raises-250m-series-b-at-1-5b-valuation-to-build-the-intelligence-infrastructure-for-a-new-era-of-hardware-engineering/)).
- **Why now:** [Inferred]: NVIDIA’s July 2026 addition of PhysicsNeMo and accelerated solvers to its Agent Toolkit simplified access to simulation tools from engineering-agent workflows ([NVIDIA, Jul 2026](https://nvidianews.nvidia.com/news/nvidia-expands-nvidia-agent-toolkit-with-nvidia-physicsnemo-and-cuda-x-libraries-to-transform-how-the-world-engineers-designs-and-builds)).

## Founders & Team

- **Daniel McNeil (Founder/CEO):** Direct business email — No public data found.
  - Background: Studied physics at the University of Florida and leads Vorelios’s work on AI models for engineering ([YC founder profile](https://www.ycombinator.com/founders/daniel-mcneil)).
  - Twitter/X: @danielmcneil_, 231 followers ([Teapawt snapshot, Nov 2026](https://www.teapawt.org/danielmcneil_)).
  - LinkedIn: 413 followers, headline unavailable in the indexed profile ([LinkedIn, via search snippet](https://www.linkedin.com/in/daniel-t-mcneil)).
  - GitHub: No public repos found.
- **Krish Kapadia (Founder/CTO):** Direct business email — No public data found.
  - Background: Studied computer science at the University of Florida, researched AI and cyber-physical systems at its Trustworthy Engineered Autonomy Lab, and was on the team that won the $10K Most Innovative Solution award at the AWS and Vanderbilt Mission Autonomy Hackathon ([YC founder profile](https://www.ycombinator.com/founders/krish-kapadia), [UF TEA Lab team](https://tea.ece.ufl.edu/team/), [UF TEA Lab news](https://tea.ece.ufl.edu/news/)).
  - Twitter/X: @krish_k07, 75 followers ([Teapawt snapshot, Nov 2026](https://nitter.gq/krish_k07)).
  - LinkedIn: 268 followers, headline unavailable in the indexed profile ([LinkedIn, via search snippet](https://www.linkedin.com/in/krish-r-kapadia)).
  - GitHub: No public repos found.
- **Co-founder relationship:** Both attended the University of Florida ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Whd-vorelios-ai-that-can-engineer-anything)).
- **Founder-market fit:** McNeil’s physics studies and Kapadia’s research in AI and cyber-physical systems align with the work of modeling physical behavior, and YC lists Aaron Epstein as the company’s partner ([Y Combinator](https://www.ycombinator.com/companies/vorelios), [UF TEA Lab](https://tea.ece.ufl.edu/team/)).

## Key Risks

- **Generalization to new designs:** Vorelios says its previous architecture failed on design families outside its training set, and its current research focuses on closing the remaining accuracy gap ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Whd-vorelios-ai-that-can-engineer-anything)).
- **CAD preparation:** [Inferred]: The prototype’s requirement for clean geometry and operating conditions can leave preprocessing work in the design loop ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Whd-vorelios-ai-that-can-engineer-anything)).
- **Qualification for aerospace use:** [Inferred]: Moving from design exploration to flight qualification can require project-specific validation and accreditation under NASA procedures, while Vorelios reports checking initial designs against an independent solver ([NASA Software Engineering Handbook](https://swehb.nasa.gov/spaces/SWEHBVC/pages/50888929/SWE-070%2B-%2BModels%2BSimulations%2BTools), [Launch YC](https://www.ycombinator.com/launches/Whd-vorelios-ai-that-can-engineer-anything)).
- **Entity identification:** Florida records show a similarly named Vorelios, LLC filing for voluntary dissolution in August 2026, while the company website identifies the YC startup as Vorelios, Inc. ([Florida Division of Corporations](https://search.sunbiz.org/Inquiry/corporationsearch/SearchResultDetail?aggregateId=flal-l26000071587-9f05b2a3-548e-49fe-9846-cb6cf9d91369), [Vorelios website](https://vorelios.com/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.18B global physics-informed AI market estimate for 2026, 31.9% CAGR through 2035 ([Next Move Strategy Consulting, 2026](https://www.nextmsc.com/report/physics-informed-ai-market-ic6056)) |
| SAM | $350M global engineering simulation and design segment in 2025, as a segment proxy ([Next Move Strategy Consulting, 2026](https://www.nextmsc.com/report/physics-informed-ai-market-ic6056)) |
| Traction | Company-reported subsecond CAD predictions and thousands of candidates searched in initial autonomous runs ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Whd-vorelios-ai-that-can-engineer-anything)) |
| Revenue Signal | No public data found |
| Founders | Daniel McNeil (CEO), University of Florida physics ([YC founder profile](https://www.ycombinator.com/founders/daniel-mcneil)). Krish Kapadia (CTO), University of Florida computer science and TEA Lab research ([UF TEA Lab](https://tea.ece.ufl.edu/team/)). |
| Competitors | PhysicsX (~$487M raised, $50M reported 2026 revenue, Siemens-trained aerodynamics model) ([DClaw](https://www.dclawai.com/en/reports/physicsx-physics-ai-2026/), [CB Insights, via search snippet](https://www.cbinsights.com/company/physicsx/financials), [PhysicsX](https://www.physicsx.ai/resources/siemens-physicsx-collaborate-to-build-ai-based-deep-physics-simulation)). Luminary ($187M raised, revenue unknown, cloud solvers and SHIFT models) ([Luminary launch](https://www.prnewswire.com/news-releases/luminary-cloud-emerges-from-stealth-empowering-rd-with-realtime-engineering-302087593.html), [Luminary Series B](https://luminary.ai/resources/luminary-cloud-secures-72m-series-b-to-lead-the-physics-ai-era/)). Neural Concept ($138.1M raised, revenue unknown, CAD copilots) ([DClaw](https://www.dclawai.com/en/reports/neural-concept-physics-ai-2026/), [Neural Concept](https://www.neuralconcept.com/press-release/neural-concept-closes-100m-funding-round)). Vinci ($296M raised, revenue unknown, semiconductor-first simulation) ([Vinci](https://www.getvinci.ai/news/vinci-emerges-from-stealth-to-transform-semiconductor-design-and-simulation/), [Advent](https://www.adventinternational.com/news/vinci-raises-250m-series-b-at-1-5b-valuation-to-build-the-intelligence-infrastructure-for-a-new-era-of-hardware-engineering/)). |
| Moat Signals | In-house geometry-generation and simulation pipeline under development ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Whd-vorelios-ai-that-can-engineer-anything)) |
| Risk Factors | Generalization to unfamiliar design families, clean CAD requirement ([Launch YC](https://www.ycombinator.com/launches/Whd-vorelios-ai-that-can-engineer-anything)), aerospace validation and accreditation ([NASA Software Engineering Handbook](https://swehb.nasa.gov/spaces/SWEHBVC/pages/50888929/SWE-070%2B-%2BModels%2BSimulations%2BTools)) |
| Founder Reach | McNeil — X 231, LinkedIn 413 ([Teapawt](https://www.teapawt.org/danielmcneil_), [LinkedIn, via search snippet](https://www.linkedin.com/in/daniel-t-mcneil)). Kapadia — X 75, LinkedIn 268 ([Teapawt](https://nitter.gq/krish_k07), [LinkedIn, via search snippet](https://www.linkedin.com/in/krish-r-kapadia)). |
| Distribution Signals | 12,531 launch-post views as of Nov 13 ([Doomers AI, Nov 2026](https://doomers.ai/launches/vorelios)), 96 company X followers ([Teapawt, Nov 2026](https://nitter.gq/vorelios)), Launch YC listing ([Y Combinator](https://www.ycombinator.com/launches/Whd-vorelios-ai-that-can-engineer-anything)) |
| Emails | founders@vorelios.com, shared founder inbox ([Vorelios Contact](https://vorelios.com/#contact), [Launch YC](https://www.ycombinator.com/launches/Whd-vorelios-ai-that-can-engineer-anything)) |
