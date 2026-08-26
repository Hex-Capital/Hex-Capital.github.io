# Enact

> The post-training layer for robotics.

| Field | Value |
|-------|-------|
| Website | https://enact.company |
| YC Page | https://www.ycombinator.com/companies/enact |
| Batch | Summer 2026 |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Reinforcement Learning, Robotics |
| YC Partner | Not listed |
| Emails | No public data found |

## The Idea

- **Problem:** Robot-model developers must identify and correct real-world policy failures, while existing evaluation can require people to observe rollouts, judge success, and reset tasks manually ([Enact website, Aug 2026](https://enact.company); [Instance/YC, 2026](https://www.ycombinator.com/companies/instance)).
- **Approach:** Enact rolls out policies, identifies failure states, generates targeted demonstration and recovery datasets, trains models, and evaluates whether the new data addresses the failures ([Enact website, Aug 2026](https://enact.company)).
- **Differentiation:** Instance begins with automated success detection, Axis combines distributed pre-training data with human-gated post-training, and Enact describes an integrated failure-identification, targeted-data, training, and evaluation loop ([Instance/YC, 2026](https://www.ycombinator.com/companies/instance); [Axis announcement, Jul 2026](https://yellow.com/press-releases/axis-robotics-12m-seed-round-physical-ai); [Enact website, Aug 2026](https://enact.company)).
- **Business Model:** [Inferred]: The “Request data” call to action and task-specific data workflow indicate project-based or enterprise-contract monetization rather than self-service pricing, but no pricing has been published.
- **TAM/SAM:** Physical-AI training platforms were estimated at $3.2B in 2025 with a 41.35% CAGR through 2035, while the narrower robotic-datasets market was estimated at $1.008B in 2025 with a 38.2% CAGR through 2032 ([Kaiso Research, 2026](https://www.marketresearch.com/Kaiso-Research-and-Consulting-v4350/Global-Physical-AI-Training-Platforms-45605048/); [LP Information, 2026](https://pdf.marketpublishers.com/lpinfo/global-robotic-datasets-market-lp.pdf)).
- **GTM / Distribution:** [Inferred]: The website’s “Request data” workflow indicates direct outreach to robotics-model developers seeking task- and deployment-specific datasets ([Enact website, Aug 2026](https://enact.company)).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Repeated deployments could accumulate proprietary mappings between failure states, recovery demonstrations, and policy outcomes, but Enact has not disclosed dataset scale, exclusivity, or customers.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Instance, Axis, micro1, Runway, and NVIDIA already provide overlapping evaluation, data-generation, annotation, or simulation capabilities ([Instance/YC, 2026](https://www.ycombinator.com/companies/instance); [Axis announcement, Jul 2026](https://yellow.com/press-releases/axis-robotics-12m-seed-round-physical-ai); [micro1, 2026](https://www.linkedin.com/company/micro1); [Runway, Feb 2026](https://runwayml.com/research/accelerating-robot-policy-evaluation); [NVIDIA, Mar 2025](https://nvidianews.nvidia.com/news/nvidia-announces-major-release-of-cosmos-world-foundation-models-and-physical-ai-data-tools)).

## Market & Traction

- **Traction signals:**
  - Publicly added to YC’s directory on August 9, 2026, as a Summer 2026 company ([YC directory data, Aug 2026](https://github.com/yc-oss/api/blob/main/batches/summer-2026/enact.json)).
  - Enact’s website is live with a “Request data” call to action ([Enact website, Aug 2026](https://enact.company)).
  - YC’s directory records Enact as not currently hiring ([YC directory data, Aug 2026](https://github.com/yc-oss/api/blob/main/batches/summer-2026/enact.json)).
- **Competitors (minimum 3, up to 5):**
  - Instance (funding undisclosed, revenue unknown): automates robot-policy evaluation, beginning with a success detector tested on 10,000+ held-out episodes across seven robot platforms, versus Enact’s broader improvement loop ([Instance/YC, 2026](https://www.ycombinator.com/companies/instance)).
  - Axis Robotics ($12M seed, revenue unknown): combines distributed pre-training collection with human-gated Dataset Aggregation post-training, versus Enact’s failure-targeted demonstration and recovery datasets ([Axis announcement, Jul 2026](https://yellow.com/press-releases/axis-robotics-12m-seed-round-physical-ai)).
  - micro1 ($35M Series A disclosed, $100M ARR): supplies human-contractor data labeling and training infrastructure across AI domains, while Enact focuses on policy failures in robotics deployments ([TechCrunch, Sep 2025](https://techcrunch.com/2025/09/12/micro1-a-competitor-to-scale-ai-raises-funds-at-500m-valuation/); [TechCrunch, Dec 2025](https://techcrunch.com/2025/12/04/micro1-a-scale-ai-competitor-touts-crossing-100m-arr/)).
  - Dyna Robotics ($143.5M raised, revenue unknown): develops its own robotic foundation models and commercial robotic systems, while Enact presents itself as a data-improvement layer for robotics models ([Sacra, 2026](https://sacra.com/c/dyna-robotics/)).
- **Why now:** [Inferred]: The 2025 releases of Gemini Robotics and NVIDIA Cosmos made general-purpose spatial reasoning and physical-AI world models available, increasing demand for deployment-specific evaluation and post-training data ([Google DeepMind, Mar 2025](https://deepmind.google/blog/gemini-robotics-brings-ai-into-the-physical-world/); [NVIDIA, Mar 2025](https://nvidianews.nvidia.com/news/nvidia-announces-major-release-of-cosmos-world-foundation-models-and-physical-ai-data-tools)).

## Founders & Team

- **Founder 1 (Role not listed):**
  - Background: No public data found.
  - Twitter/X: No public account found.
  - LinkedIn: No public profile found.
  - GitHub: No public repos found.
- **Founder 2 (Role not listed):**
  - Background: No public data found.
  - Twitter/X: No public account found.
  - LinkedIn: No public profile found.
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** No public data found.

## Key Risks

- **Performance verification:** Enact publishes its workflow but no policy-success improvement, evaluation-accuracy, dataset-size, or cross-embodiment results ([Enact website, Aug 2026](https://enact.company)).
- **Competitive overlap:** Instance addresses policy evaluation, Axis addresses post-training data, and micro1 operates robotics-data pipelines, creating substitution across individual parts of Enact’s loop ([Instance/YC, 2026](https://www.ycombinator.com/companies/instance); [Axis announcement, Jul 2026](https://yellow.com/press-releases/axis-robotics-12m-seed-round-physical-ai); [micro1, 2026](https://www.linkedin.com/company/micro1)).
- **Platform substitution:** NVIDIA Cosmos supplies world models and physical-AI data tools, while Runway is testing world-model-based robot-policy evaluation, allowing platform vendors to incorporate overlapping capabilities ([NVIDIA, Mar 2025](https://nvidianews.nvidia.com/news/nvidia-announces-major-release-of-cosmos-world-foundation-models-and-physical-ai-data-tools); [Runway, Feb 2026](https://runwayml.com/research/accelerating-robot-policy-evaluation)).
- **Data specificity and collection cost:** Enact depends on real-world, task-targeted data, while physical-AI reporting identifies real-world collection as time-consuming and expensive and notes that recovery data must reflect deployment conditions ([AP, Mar 2025](https://apnews.com/article/457e9260aa2a34c1bbcc07c98b7a0555); [Forbes, Jun 2026](https://www.forbes.com/sites/josipamajic/2026/06/29/physical-ai-hits-a-data-labeling-wall-that-only-cash-can-fix/)).
- **Name ambiguity:** “Enact” also identifies an unrelated staffing company and an ICLR 2026 embodied-cognition benchmark, creating search-result disambiguation requirements ([LinkedIn](https://www.linkedin.com/company/enact); [ICLR 2026 paper](https://arxiv.org/abs/2511.20937)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3.2B physical-AI training-platform market in 2025; 41.35% CAGR through 2035 (Kaiso Research, 2026) |
| SAM | $1.008B robotic-datasets market in 2025; 38.2% CAGR through 2032 (LP Information, 2026) |
| Traction | YC Summer 2026 company; public directory launch dated Aug. 9, 2026 (YC directory data, Aug 2026) |
| Revenue Signal | No public data found |
| Founders | No public data found |
| Competitors | Instance (funding undisclosed, revenue unknown, automated evaluation; YC, 2026); Axis Robotics ($12M seed, revenue unknown, distributed and DAgger data; Axis announcement, Jul 2026); micro1 ($35M Series A disclosed, $100M ARR, broad human-data platform; TechCrunch, Dec 2025); Dyna Robotics ($143.5M raised, revenue unknown, develops models and robots; Sacra, 2026) |
| Moat Signals | No public data found |
| Risk Factors | No published performance benchmarks (Enact website, Aug 2026), overlapping evaluation and data providers (YC and Axis, 2026), platform substitution from Cosmos and Runway (NVIDIA, Mar 2025; Runway, Feb 2026) |
| Founder Reach | No public data found |
| Distribution Signals | YC Summer 2026 directory listing and website “Request data” call to action (YC directory data, Aug 2026; Enact website, Aug 2026) |
| Emails | No public data found |
