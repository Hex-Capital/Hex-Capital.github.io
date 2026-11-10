# Metalcraft

> Advancing biological models

| Field | Value |
|-------|-------|
| Website | https://metalcraft.ai |
| YC Page | https://www.ycombinator.com/companies/metalcraft |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/metalcraft)) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA; Remote |
| Tags | Reinforcement Learning, Data Labeling, AI |
| YC Partner | Garry Tan ([YC](https://www.ycombinator.com/companies/metalcraft)) |
| Emails | founders@metalcraft.ai — general contact and safety reporting ([Metalcraft](https://metalcraft.ai/)) |

## The Idea

- **Problem:** AI developers lack evaluations that capture practical scientific reasoning beyond isolated questions, including interpreting incomplete evidence and choosing experiments, with existing benchmarks often testing narrower capabilities ([OpenAI, June 2026](https://openai.com/index/introducing-life-sci-bench/)).
- **Approach:** Metalcraft provides runnable biological tasks and graders in which models select experiments within budgets, diagnose faults in metabolic models, and predict unobserved measurements ([Metabolic Models](https://metalcraft.ai/tasksets/metabolic-models/); [Auto-research: Bio](https://metalcraft.ai/tasksets/auto_research_bio/)).
- **Differentiation:** Metalcraft publishes metabolic-model repair and experiment-selection tasks, while Tacit evaluates linked drug-development decisions and LatchBio publishes omics and therapeutic-development benchmarks ([Metalcraft](https://metalcraft.ai/tasksets/); [Tacit](https://tacitlabs.co/introducing-tacit-labs); [LatchBio](https://latch.bio/)).
- **Business Model:** [Inferred]: Taskset licensing or commissioned evaluation work is a possible monetization path because access routes through “Request taskset,” but public prices and contract terms were not found ([Metalcraft](https://metalcraft.ai/tasksets/)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Public samples and model leaderboards lead visitors to a calendar booking link for taskset access ([Metalcraft](https://metalcraft.ai/tasksets/)).

## Defensibility

- **Moat today:** Metalcraft publishes runnable tasks, graders, and organism-specific model-curation workflows, but exclusive data rights, patents, and customer switching costs have no public documentation ([Metalcraft](https://metalcraft.ai/tasksets/metabolic-models/)).
- **Future moat:** [Inferred]: Customer-specific failure traces could support differentiated task generation, but public sources do not establish customer integrations or rights to reuse those traces.
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given overlapping biological evaluation work from Tacit and LatchBio ([Tacit](https://tacitlabs.co/introducing-tacit-labs); [LatchBio](https://latch.bio/)).
- **Commoditization risk:** [Inferred]: AI laboratories can build internal evaluations or use public alternatives such as LABBench2’s dataset and evaluation harness, potentially substituting for purchased tasksets ([LABBench2 paper, 2026](https://arxiv.org/abs/2604.09554)).

## Market & Traction

- **Traction signals:**
  - Published product inventory: Metabolic Models contains 1,724 variant cases across four variants, with 424 cases tested per model ([Metalcraft, accessed November 9, 2026](https://metalcraft.ai/tasksets/metabolic-models/)).
  - Published product inventory: Metabolic Capability lists 308 cases, Cell Marker Selection 4,504 cases, and Strain Identification 4,400 cases ([Metalcraft, accessed November 9, 2026](https://metalcraft.ai/tasksets/)).
  - Auto-research: Bio lists 36 tasks, with access upon request and results not yet public ([Metalcraft, accessed November 9, 2026](https://metalcraft.ai/tasksets/auto_research_bio/)).
  - Zero active job postings on YC ([YC Jobs, accessed November 9, 2026](https://www.ycombinator.com/companies/metalcraft/jobs)).
- **Competitors:**
  - **Tacit Labs** (funding amount: No public data found; revenue unknown): develops long-horizon evaluations across drug discovery and development using biological models and experimental readouts, with Zetta publicly identifying it as a portfolio company ([Tacit](https://tacitlabs.co/introducing-tacit-labs); [Zetta, 2026](https://www.linkedin.com/posts/zetta-venture-partners_lifescibench-activity-7473158823373910017-MWuU)).
  - **LatchBio** (at least $33M announced by June 2022; revenue unknown): publishes omics, biosecurity, and therapeutic-development benchmarks; its verified company announcement disclosed a $28M Series A led by Coatue and Lux Capital after a $5M seed ([LatchBio funding announcement, June 2022](https://blog.latch.bio/p/announcing-our-series-a-building); [current research](https://latch.bio/)).
  - **Edison Scientific** ($70M seed announced December 2025; revenue unknown): an adjacent alternative providing autonomous research agents and public biological benchmarks, with funding led by Triatomic, Spark, and an unnamed institutional biotech investor ([SiliconANGLE, December 2025](https://siliconangle.com/2025/12/18/edison-scientific-raises-70m-build-autonomous-ai-scientists-research/); [LABBench2](https://arxiv.org/abs/2604.09554)).
- **Why now:** [Inferred]: The move toward agentic scientific workflows creates demand for evaluations of multistep experimental judgment, illustrated by OpenAI’s June 2026 LifeSciBench release addressing gaps in existing life-science benchmarks ([OpenAI](https://openai.com/index/introducing-life-sci-bench/)).

## Founders & Team

- **Marshall Kiely (Founder):**
  - Background: His YC biography reports a Princeton computational-biology PhD, first-author Nature and Science papers in systems biology and metabolomics, previous finance leadership at Perplexity, quantitative finance, founding AI engineering at Notable Health, and ML work at Mixpanel; direct founder business email: No public data found ([YC founder profile](https://www.ycombinator.com/founders/marshall-kiely)).
  - Twitter/X: @flyingobjectai, linked by YC; count not retrievable ([YC founder profile](https://www.ycombinator.com/founders/marshall-kiely)).
  - LinkedIn: YC links [/in/marshall-ai](https://www.linkedin.com/in/marshall-ai/); headline and follower count: No public data found ([YC founder profile](https://www.ycombinator.com/founders/marshall-kiely)).
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Kiely’s documented computational-biology and ML background overlaps with the product’s biological reasoning tasks, and Metalcraft identifies YC backing on its website ([YC founder profile](https://www.ycombinator.com/founders/marshall-kiely); [Metalcraft](https://metalcraft.ai/)).

## Key Risks

- **Technical generalization:** [Inferred]: Success on bounded biological tasks may fail to predict performance in live research, where experiments and hypotheses evolve over time; OpenAI explicitly identifies this benchmark-to-deployment gap in its own life-science evaluation work ([OpenAI, June 2026](https://openai.com/index/introducing-life-sci-bench/)).
- **Grading validity:** [Inferred]: Some Metalcraft dimensions use a trial judge’s estimates rather than direct measurements, creating sensitivity to judge behavior; its published descriptions distinguish measured calibration and efficiency from estimated assessments ([Metalcraft](https://metalcraft.ai/tasksets/metabolic-models/)).
- **Public benchmark substitution:** [Inferred]: Public biological datasets and evaluation harnesses can reduce demand for generic paid evaluations, while differentiated private tasksets would require capabilities or coverage beyond those alternatives ([LABBench2](https://arxiv.org/abs/2604.09554)).
- **Identity and product-history ambiguity:** October reporting connected Marshall Kiely and the legal name Metalcraft Inc. to UFO.ai’s agent platform, while the current official site presents biological evaluations; the exact pivot date is not publicly documented ([Founderland, October 2, 2026](https://www.founderland.ai/articles/ufoai-launches-agent-os-from-copilot-perplexity-creators-muqzsidi); [Metalcraft, accessed November 9, 2026](https://metalcraft.ai/)). Searches also return an unrelated RFID supplier using the Metalcraft name ([Metalcraft Inc. LinkedIn](https://www.linkedin.com/company/metalcraft-inc)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Published tasksets: 1,724 metabolic-model cases, 308 metabolic-capability cases, 4,504 cell-marker cases, 4,400 strain-identification cases, and 36 Auto-research tasks ([Metalcraft tasksets, November 2026](https://metalcraft.ai/tasksets/)) |
| Revenue Signal | No public data found |
| Founders | Marshall Kiely (Founder): Princeton computational-biology PhD; former Perplexity finance lead; founding AI engineer at Notable Health ([YC founder profile](https://www.ycombinator.com/founders/marshall-kiely)) |
| Competitors | Tacit Labs (funding undisclosed, revenue unknown; drug-development evaluations) ([Tacit](https://tacitlabs.co/introducing-tacit-labs)); LatchBio (≥$33M announced by June 2022, revenue unknown; omics benchmarks) ([funding](https://blog.latch.bio/p/announcing-our-series-a-building), [research](https://latch.bio/)); Edison Scientific ($70M seed, revenue unknown; autonomous research agents) ([SiliconANGLE, December 2025](https://siliconangle.com/2025/12/18/edison-scientific-raises-70m-build-autonomous-ai-scientists-research/)) |
| Moat Signals | Runnable biological tasks and graders; organism-specific model-curation workflows ([Metalcraft](https://metalcraft.ai/tasksets/metabolic-models/)) |
| Risk Factors | Judge-estimated scoring dimensions, public benchmark alternatives, historical UFO.ai association ([Metalcraft](https://metalcraft.ai/tasksets/metabolic-models/); [LABBench2](https://arxiv.org/abs/2604.09554); [Founderland, October 2026](https://www.founderland.ai/articles/ufoai-launches-agent-os-from-copilot-perplexity-creators-muqzsidi)) |
| Founder Reach | Marshall Kiely: X @flyingobjectai, count not retrievable; LinkedIn profile linked, reach unavailable ([YC founder profile](https://www.ycombinator.com/founders/marshall-kiely)) |
| Distribution Signals | Public task samples, model leaderboards, and calendar-based taskset requests ([Metalcraft, November 2026](https://metalcraft.ai/tasksets/)) |
| Emails | founders@metalcraft.ai — general contact and safety reporting ([Metalcraft](https://metalcraft.ai/)) |
