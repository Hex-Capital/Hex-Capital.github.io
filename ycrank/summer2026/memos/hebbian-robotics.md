# Hebbian Robotics

> APIs for searching and analyzing Physical AI data at scale

| Field | Value |
|-------|-------|
| Website | https://hebbianrobotics.com/ |
| YC Page | https://www.ycombinator.com/companies/hebbian-robotics |
| Batch | Spring 2026 |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Robotics, Data Science, Data Engineering, Databases |
| YC Partner | Diana Hu |
| Emails | No public data found |

## The Idea

- **Problem:** Robotics teams collect demonstrations that may be discarded because quality assessment and curation are manual, inconsistently defined, and dependent on hand-crafted heuristics ([Hebbian Robotics, Aug 2026](https://hebbianrobotics.com/)).
- **Approach:** Pareto indexes synchronized LeRobot episodes, computes consistency metrics and behavioral clusters, detects anomalies and duplicates, supports frame-level semantic search, and exports selected episodes as training-ready datasets ([Pareto GitHub, Aug 2026](https://github.com/Hebbian-Robotics/pareto)).
- **Differentiation:** Pareto is LeRobot-episode-specific and self-hostable, whereas Encord spans annotation and multimodal physical-AI data services, Voxel51 targets general visual-AI datasets and models, and Roboflow covers end-to-end computer-vision training and deployment ([Pareto](https://github.com/Hebbian-Robotics/pareto), [Encord](https://encord.com/), [Voxel51](https://voxel51.com/blog/voxel51-raises-30m-series-b-funding-to-make-visual-ai-a-reality), [Roboflow](https://roboflow.com/)).
- **Business Model:** [Inferred]: The likely model is open-core, with a free Apache-2.0 community edition feeding managed hosting, production support, enterprise integrations, and multi-tenant deployments, but no prices are published ([Pareto GitHub, Aug 2026](https://github.com/Hebbian-Robotics/pareto)).
- **TAM/SAM:** The broader global AI-training-dataset market was valued at $3.59 billion in 2025 and projected to grow at 22.9% CAGR through 2034, while no robotics-data-curation SAM was published ([Fortune Business Insights, Jul 2026](https://www.fortunebusinessinsights.com/ai-training-dataset-market-109241)).
- **GTM / Distribution:** Distribution combines an open-source community edition, hosted Pareto, founder-led outreach, and live dataset-curation demonstrations at robotics events ([Pareto GitHub, Aug 2026](https://github.com/Hebbian-Robotics/pareto), [LinkedIn, Aug 2026](https://sg.linkedin.com/in/ramana-r)).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Managed deployments could accumulate mappings between episode-quality signals and downstream robot performance, but no proprietary dataset, customer count, or validated prediction advantage is publicly reported.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Encord already supports synchronized physical-AI sensor data and model-in-the-loop curation, while Voxel51 and Roboflow offer adjacent open-source or API-based visual-data tooling ([Encord](https://encord.com/), [Voxel51](https://voxel51.com/blog/voxel51-raises-30m-series-b-funding-to-make-visual-ai-a-reality), [Roboflow](https://roboflow.com/)).

## Market & Traction

- **Traction signals:**
  - Y Combinator S26 participation and backing from angels affiliated with Oracle, Google DeepMind, and OpenAI ([company website, Aug 2026](https://hebbianrobotics.com/)).
  - Openpi-flash reduced one user’s inference round trip from approximately 4,000 milliseconds to 200 milliseconds ([GitHub, Aug 2026](https://github.com/Hebbian-Robotics/openpi-flash)).
  - Openpi-flash had 42 GitHub stars and Pareto had 3 stars ([GitHub, Aug 10, 2026](https://github.com/Hebbian-Robotics)).
  - The company GitHub organization exposed 18 repositories and had 11 followers ([GitHub, Aug 10, 2026](https://github.com/Hebbian-Robotics)).
- **Competitors (minimum 3, up to 5):**
  - Encord ($110M raised, $60M Series C led by Wellington Management in February 2026, revenue unknown): provides a broader physical-AI data layer spanning collection, annotation, curation, evaluation, and deployment feedback ([Encord, Feb 2026](https://encord.com/blog/encord-announces-60-million-series-c/)).
  - Voxel51 ($44.5M in disclosed equity rounds, $30M Series B led by Bessemer in May 2024, revenue unknown): FiftyOne manages and evaluates general visual-AI datasets and models rather than centering its data model on synchronized LeRobot episodes ([Voxel51 funding posts](https://voxel51.com/blog/tag/funding), [Voxel51 seed round](https://voxel51.com/blog/voxel51-raises-2-million-to-advance-video-understanding)).
  - Roboflow ($63.4M raised as of 2024, $40M Series B led by GV in November 2024, revenue unknown): supplies computer-vision data management, training, workflows, and cloud or edge inference rather than robotics trajectory curation ([Roboflow funding](https://en.wikipedia.org/wiki/Roboflow), [Roboflow Series B](https://blog.roboflow.com/series-b/)).
- **Why now:** [Inferred]: Physical-AI data infrastructure demand is increasing as Encord reported its managed data volume growing from 1 petabyte to more than 5 petabytes and physical-AI revenue increasing 10-fold before February 2026 ([Encord, Feb 2026](https://encord.com/blog/encord-announces-60-million-series-c/)).

## Founders & Team

- **Brandon Ong (Co-founder):**
  - Background: Ong is on leave from a joint Columbia University–Nanyang Technological University robotics PhD, led SEA-LION model research, and previously co-founded Sequoia- and Pear-backed Gigit AI ([personal site](https://www.ob1.info/)).
  - Twitter/X: @bdono_; count not retrievable ([LinkedIn](https://www.linkedin.com/in/ongjjbrandon)).
  - LinkedIn: “Hebbian Robotics (YC S26),” with 1K followers and 500+ connections ([LinkedIn, Jul 2026](https://www.linkedin.com/in/ongjjbrandon)).
  - GitHub: @theogbrand; top pinned repository Hebbian-Robotics/openpi-flash had 42 stars ([GitHub, Aug 2026](https://github.com/theogbrand)).
- **Kingston Kuan (Co-founder/CTO):**
  - Background: Kuan studied Computer Engineering at the National University of Singapore and previously developed software at Jane Street and Verkada ([NUS](https://www.comp.nus.edu.sg/news/2019-bug-bounty/), [personal site](https://kingstonkuan.com/)).
  - Twitter/X: @kstonekuan with 676 followers ([TwStalker via search snippet, Jul 2026](https://ngntipkolamrenang.twstalker.com/kabilankb2003)).
  - LinkedIn: “Hebbian Robotics (YC S26),” with 1K followers and 500+ connections ([LinkedIn, Jul 2026](https://sg.linkedin.com/in/kingston-kuan)).
  - GitHub: @kstonekuan; top repository Tambourine Voice had 374 stars ([GitHub, Aug 2026](https://github.com/kstonekuan)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** [Inferred]: Ong’s robotics and multimodal-model research and Kuan’s infrastructure engineering at Jane Street and Verkada map to robot-learning data analysis and distributed processing ([Ong](https://www.ob1.info/), [Kuan](https://kingstonkuan.com/)).

## Key Risks

- **Product-scope ambiguity:** Public materials concurrently describe Pareto robotics-data infrastructure, a data-center robot prototype, and a mission to build human-like robots for remote and hazardous infrastructure without explaining whether these are separate products or a transition ([Pareto post, Jul 2026](https://hebbianrobotics.com/blog/youtube-system-design-for-robotics-data-infrastructure), [robotics post, Jun 2026](https://www.hebbianrobotics.com/blog/human-robot-collaboration-data-centers)).
- **Data-isolation maturity:** Pareto’s public beta remains the default data scope, and its documentation recommends separate deployments for mutually untrusted browser users until a WorkOS authentication adapter is installed ([Pareto GitHub, Aug 2026](https://github.com/Hebbian-Robotics/pareto)).
- **Outcome-validation risk:** Pareto proposes consistency and behavioral-quality proxies, but its task-velocity debiasing feature currently produces recommendations rather than an implemented correction pipeline ([Pareto GitHub, Aug 2026](https://github.com/Hebbian-Robotics/pareto)).
- **Competitive overlap:** Encord has raised $110 million and already supports robotics data across RGB, depth, LiDAR, force/torque, synchronization, annotation, and curation ([Encord, Feb 2026](https://encord.com/blog/encord-announces-60-million-series-c/)).
- **Name disambiguation:** Search results also return an unrelated Swiss education company named Hebbian, HEBI Robotics, and document-analysis company Hebbia, creating attribution risk unless the domain and founders are cross-checked ([Hebbian Switzerland](https://hebbian.ch/about/), [HEBI Robotics](https://www.hebirobotics.com/), [Hebbia](https://www.hebbia.com/about)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3.59B global AI-training-dataset market in 2025; 22.9% CAGR through 2034 (Fortune Business Insights, Jul 2026) |
| SAM | No public data found |
| Traction | YC S26 participation and angels affiliated with Oracle, Google DeepMind, and OpenAI (company website, Aug 2026); one openpi-flash user’s inference latency reduced from ~4,000ms to ~200ms (GitHub, Aug 2026) |
| Revenue Signal | No public data found |
| Founders | Brandon Ong (Co-founder): joint Columbia–NTU robotics PhD on leave, SEA-LION research lead, Gigit AI co-founder (personal site, Aug 2026); Kingston Kuan (Co-founder/CTO): NUS Computer Engineering, former Jane Street and Verkada developer (personal site, Aug 2026) |
| Competitors | Encord ($110M raised, revenue unknown, broader physical-AI data lifecycle; Encord, Feb 2026); Voxel51 ($44.5M disclosed equity rounds, revenue unknown, general visual-AI tooling; Voxel51, May 2024); Roboflow ($63.4M raised, revenue unknown, end-to-end computer vision; Roboflow, Nov 2024) |
| Moat Signals | No public data found |
| Risk Factors | Dual public product scope (company blog, Jul 2026), incomplete multi-tenant browser isolation (Pareto GitHub, Aug 2026), Encord product overlap (Encord, Feb 2026) |
| Founder Reach | Brandon Ong: X count not retrievable, LinkedIn 1K followers, GitHub top pinned repo 42 stars (LinkedIn/GitHub, Aug 2026); Kingston Kuan: X 676 followers, LinkedIn 1K followers, GitHub top repo 374 stars (TwStalker/LinkedIn/GitHub, Jul–Aug 2026) |
| Distribution Signals | Openpi-flash 42 GitHub stars, Pareto 3 stars, company organization 18 public repositories and 11 followers (GitHub, Aug 10, 2026) |
| Emails | No public data found |
