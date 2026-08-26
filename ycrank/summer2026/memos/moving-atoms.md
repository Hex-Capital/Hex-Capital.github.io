# Moving Atoms

> World Model Lab for Evaluating and Training Robots.

| Field | Value |
|-------|-------|
| Website | https://movingatoms.ai/ |
| YC Page | https://www.ycombinator.com/companies/moving-atoms |
| Batch | Summer 2026 |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Hard Tech, Robotics, Virtual Reality, AI |
| YC Partner | Brad Flora |
| Emails | founders@movingatoms.ai |

## The Idea

- **Problem:** Robot-policy developers depend on physical robot testing, human evaluation, and manually constructed simulators, which the company says can delay checkpoint results by days ([YC launch, Aug 2026](https://www.ycombinator.com/launches/Sk3-moving-atoms-world-models-for-robots)).
- **Approach:** Atom 1 consumes robot-camera observations and control actions, predicts subsequent frames, runs checkpoints across generated conditions, and returns automatically graded failure modes ([company website, Aug 2026](https://movingatoms.ai/)).
- **Differentiation:** Compared with NVIDIA Isaac Sim and MuJoCo, Atom 1 generates conditions from footage and prompts, while the company places Atom 1, Cosmos 3, and classical simulators inside one graded evaluation harness ([company website, Aug 2026](https://movingatoms.ai/)).
- **Business Model:** [Inferred]: The current design-partner cohort suggests paid custom integration and compute-based evaluation engagements, but no current customer pricing is published ([company website, Aug 2026](https://movingatoms.ai/)).
- **TAM/SAM:** Physical AI was estimated at $81.64B in 2025 with a 36.1% CAGR through 2033, while robotics simulation was estimated at $6.88B in 2025 with a 10.56% CAGR through 2032 ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/physical-ai-market-report); [Research and Markets, 2026](https://www.researchandmarkets.com/reports/6118228/robotics-simulation-market-global-forecast)).
- **GTM / Distribution:** Moving Atoms is onboarding a limited design-partner cohort through founder-led outreach and asks customers to provide a policy checkpoint or inference endpoint plus example episodes ([company website, Aug 2026](https://movingatoms.ai/)).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Paired camera, action, rollout, and failure-label data from customer evaluations could become proprietary training data, but no customer dataset or retention evidence is public.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** NVIDIA Cosmos, Google’s robotics models, and venture-backed robot-foundation-model companies can build overlapping world-model, simulation, and control capabilities ([NVIDIA Cosmos paper, Nov 2025](https://arxiv.org/abs/2511.00062); [Gemini Robotics report, Mar 2025](https://arxiv.org/abs/2503.20020)).

## Market & Traction

- **Traction signals:**
  - Atom Harness scored 56.6 on Physics-IQ Verified across 198 cases, ranking second overall and first among listed single-sample entries, with its leaderboard pull request still open ([GitHub PR, Aug 20, 2026](https://github.com/google-deepmind/physics-IQ-benchmark/pull/71)).
  - Company X account @MovingAtomsLab had 189 followers ([TwStalker, Aug 2026](https://site.twstalker.com/AreslabsAI)).
  - Company LinkedIn page had 186 followers ([LinkedIn, Aug 2026](https://www.linkedin.com/company/movingatoms/)).
  - The launch post recorded 41K views and 68 likes on X ([TwStalker, Aug 2026](https://site.twstalker.com/Wickey_WW)).
  - Dealroom published launch coverage summarizing the company’s product and performance claims ([Dealroom, Aug 2026](https://app.dealroom.co/news/note/moving-atoms-wants-to-be-the-internet-scale-data-unlock-for-robots)).
  - YC listed zero active company jobs ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/moving-atoms)).
- **Competitors:**
  - Skild AI (more than $2B raised, approximately $30M 2025 revenue; ARR unknown): develops a general-purpose controller across robot embodiments rather than a checkpoint-evaluation world model ([TechCrunch, Jan 2026](https://techcrunch.com/2026/01/14/robotic-software-maker-skild-ai-hits-14b-valuation/); [company funding release, Jan 2026](https://www.morningstar.com/news/business-wire/20260114335623/skild-ai-raises-14b-now-valued-over-14b)).
  - Physical Intelligence (approximately $1.07B raised, revenue unknown): trains general-purpose robot-control models using real-world robot data rather than positioning evaluation as the initial product ([TechCrunch, Mar 2026](https://techcrunch.com/2026/03/27/physical-intelligence-is-reportedly-in-talks-to-raise-1-billion-again/)).
  - Genesis AI ($105M raised, revenue unknown): combines a universal robotics foundation model with a full-stack robotics platform and simulation system ([Genesis AI release, Jul 2025](https://www.prnewswire.com/news-releases/genesis-ai-emerges-from-stealth-with-105m-to-build-universal-robotics-foundation-model-and-horizontal-platform-for-general-purpose-physical-ai-302495016.html)).
  - World Labs (at least $1.23B raised, revenue unknown): generates persistent 3D worlds for creative, scientific, and robotics uses rather than action-conditioned policy evaluation ([World Labs, Feb 2026](https://www.worldlabs.ai/blog/funding-2026); [TechCrunch, Sep 2024](https://techcrunch.com/2024/09/13/fei-fei-lis-world-labs-comes-out-of-stealth-with-230m-in-funding/)).
- **Why now:** [Inferred]: The 2025 releases of action-oriented robotics models and video world models, including Gemini Robotics and Cosmos-Predict2.5, supplied model capabilities that can be adapted into robot-training and evaluation environments ([Gemini Robotics, Mar 2025](https://arxiv.org/abs/2503.20020); [Cosmos-Predict2.5, Nov 2025](https://arxiv.org/abs/2511.00062)).

## Founders & Team

- **Shehryar Saroya (Founder/CEO):**
  - Background: Studied mathematics and computer science at Oxford and economics at LSE, designed video-recommendation models at TikTok, and previously built Silicon Soul, an AI video-game project ([personal site, Aug 2026](https://www.saroya.info/); [YC, Aug 2026](https://www.ycombinator.com/companies/moving-atoms)).
  - Twitter/X: @SaroyaShehryar, 85 followers ([TwStalker, Aug 2026](https://mobile.twstalker.com/PolyPredict_AI)).
  - LinkedIn: “Founder at Moving Atoms (YC S26); previously AI at TikTok; Maths at Oxford” ([YC-linked profile summary, Aug 2026](https://www.ycombinator.com/companies/moving-atoms)).
  - GitHub: @shehryarsaroya; agenttransfer had 47 stars ([GitHub, Aug 2026](https://github.com/shehryarsaroya)).
- **Ahmad Saroya (Founder):**
  - Background: Studied mathematics at Oxford, ranked first in his college, and left during his second year to work on the startup ([YC launch, Aug 2026](https://www.ycombinator.com/launches/Sk3-moving-atoms-world-models-for-robots)).
  - Twitter/X: @AhmadSaroya00, 34 followers ([TwStalker, Aug 2026](https://mobile.twstalker.com/PolyPredict_AI)).
  - LinkedIn: “Founder @ Moving Atoms; Studied Mathematics @ Oxford” ([YC-linked profile summary, Aug 2026](https://www.ycombinator.com/companies/moving-atoms)).
  - GitHub: No public repos found.
- **Co-founder relationship:** Shehryar and Ahmad are brothers who both studied mathematics at Oxford ([YC launch, Aug 2026](https://www.ycombinator.com/launches/Sk3-moving-atoms-world-models-for-robots)).
- **Founder-market fit:** [Inferred]: Shehryar’s work on large-scale video-recommendation models and both founders’ mathematics training relate to video-model development and quantitative evaluation ([YC, Aug 2026](https://www.ycombinator.com/companies/moving-atoms)).

## Key Risks

- **Benchmark interpretation:** The company describes Atom 1 as topping Physics-IQ, but its open submission ranks second overall at 56.6, states that it is not claiming overall SOTA, and prompted a maintainer question about whether the entry is a model or a composite harness ([GitHub PR, Aug 2026](https://github.com/google-deepmind/physics-IQ-benchmark/pull/71)).
- **Robot-validity gap:** Physics-IQ measures generated-video prediction rather than deployed robot-policy success, and the submitted system had one run plus disclosed errors on rotation and reflection cases ([GitHub PR, Aug 2026](https://github.com/google-deepmind/physics-IQ-benchmark/pull/71)).
- **Model-vendor dependency:** The benchmark system uses BytePlus Seedance 2.5 for video generation and Claude Opus 5 for motion classification and timing, exposing performance and cost to external model providers ([GitHub PR, Aug 2026](https://github.com/google-deepmind/physics-IQ-benchmark/pull/71)).
- **Capitalized competition:** Skild AI has raised more than $2B and Physical Intelligence more than $1B to develop overlapping robot-model capabilities ([TechCrunch, Jan 2026](https://techcrunch.com/2026/01/14/robotic-software-maker-skild-ai-hits-14b-valuation/); [TechCrunch, Jul 2026](https://techcrunch.com/2026/07/21/the-anthropic-physical-intelligence-rumor-roiling-ai-twitter/)).
- **Product-definition changes:** An indexed prior product offered hosted MolmoAct2 access with 10M free tokens per day, while the current product markets Atom 1 evaluation and World Action Models without a published transition statement ([prior indexed page, Aug 2026](https://movingatoms.ai/index.html); [current website, Aug 2026](https://movingatoms.ai/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $81.64B physical-AI market in 2025, 36.1% CAGR through 2033 (Grand View Research, 2026) |
| SAM | $6.88B robotics-simulation market in 2025, 10.56% CAGR through 2032 (Research and Markets, 2026) |
| Traction | Physics-IQ Verified score 56.6 across 198 cases (GitHub, Aug 2026); 189 X followers (TwStalker, Aug 2026); 186 LinkedIn followers (LinkedIn, Aug 2026) |
| Revenue Signal | No public data found |
| Founders | Shehryar Saroya (Founder/CEO): Oxford mathematics/computer science, LSE economics, TikTok video recommendation AI (YC and personal site, Aug 2026); Ahmad Saroya (Founder): Oxford mathematics, ranked first in college, left in second year (YC, Aug 2026) |
| Competitors | Skild AI (more than $2B raised, approximately $30M 2025 revenue, general-purpose robot brain; TechCrunch, Jan 2026); Physical Intelligence (approximately $1.07B raised, revenue unknown, robot-control foundation models; TechCrunch, Mar 2026); Genesis AI ($105M raised, revenue unknown, full-stack robotics platform; company release, Jul 2025); World Labs (at least $1.23B raised, revenue unknown, generated 3D worlds; World Labs and TechCrunch, Feb 2026) |
| Moat Signals | No public data found |
| Risk Factors | Open and disputed benchmark interpretation (GitHub, Aug 2026), Seedance and Claude component dependency (GitHub, Aug 2026), prior MolmoAct2 positioning replaced by Atom 1 positioning (Moving Atoms indexed pages, Aug 2026) |
| Founder Reach | Shehryar Saroya: X 85 (TwStalker, Aug 2026), LinkedIn 783 (LinkedIn, Jul 2026), GitHub top repo 47 stars (GitHub, Aug 2026); Ahmad Saroya: X 34 (TwStalker, Aug 2026), LinkedIn 314 (LinkedIn, Jun 2026), GitHub no public repos found |
| Distribution Signals | X account 189 followers and launch post 41K views/68 likes (TwStalker, Aug 2026); LinkedIn 186 followers (LinkedIn, Aug 2026); Dealroom launch coverage (Dealroom, Aug 2026) |
| Emails | founders@movingatoms.ai (Moving Atoms website and YC, Aug 2026) |
