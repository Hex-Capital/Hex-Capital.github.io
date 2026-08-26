# Experiential Labs

> Turn your AI spend into a cheaper + better model you own

| Field | Value |
|-------|-------|
| Website | https://experientiallabs.ai |
| YC Page | https://www.ycombinator.com/companies/experiential-labs |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Infrastructure |
| YC Partner | Diana Hu |
| Emails | founders@xplabs.ai |

## The Idea

- **Problem:** Companies operating high-volume AI agents repeatedly pay GPT or Claude API prices without owning the underlying model, prompts, traces, or accumulated task experience ([YC launch, Aug 2026](https://www.ycombinator.com/launches/STQ-experiential-labs-turn-your-ai-spend-into-a-cheaper-better-model-you-own)).
- **Approach:** Experiential Labs ingests production traces, constructs a simulation of tasks and failures, trains a smaller customer-owned model against that simulation, and routes requests between the specialized model and frontier fallbacks ([company website, Aug 2026](https://experientiallabs.ai/)).
- **Differentiation:** Unlike rented GPT and Claude endpoints, customers own the resulting weights, while relative to Together AI and Predibase fine-tuning the product adds trace-built simulations, continuous retraining, and quality-gated per-request routing ([YC launch, Aug 2026](https://www.ycombinator.com/launches/STQ-experiential-labs-turn-your-ai-spend-into-a-cheaper-better-model-you-own); [Together AI fine-tuning](https://www.together.ai/fine-tuning); [Predibase acquisition coverage](https://techcrunch.com/2025/06/25/rubrik-acquires-predibase-to-accelerate-adoption-of-ai-agents/)).
- **Business Model:** [Inferred]: Enterprise contracts for managed training and inference are the likely monetization path because the company offers an SLA-backed cost guarantee and directs companies with significant frontier-model traffic to schedule a sales call ([YC launch, Aug 2026](https://www.ycombinator.com/launches/STQ-experiential-labs-turn-your-ai-spend-into-a-cheaper-better-model-you-own)).
- **TAM/SAM:** Global ModelOps spending was estimated at $7.73 billion in 2025 and forecast to reach $43.60 billion by 2030 at a 41.3% CAGR, while the small-language-model market was estimated at $906.7 million in 2025 and forecast to reach $5.4 billion by 2032 at a 29.2% CAGR ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/modelops-market-report); [Global Industry Analysts](https://www.marketresearch.com/Market-Glass-Inc-v1039/Small-Language-Model-SLM-44877661/)).
- **GTM / Distribution:** The company targets founders and AI leaders with growing inference bills through direct introductions, scheduled calls, YC exposure, and its open-source World Model Optimizer repository ([YC launch, Aug 2026](https://www.ycombinator.com/launches/STQ-experiential-labs-turn-your-ai-spend-into-a-cheaper-better-model-you-own); [GitHub, Aug 2026](https://github.com/experientiallabs)).

## Defensibility

- **Moat today:** The public data signal is customer-specific integration because production traces become simulations and owned weights whose learned behavior can be transferred when base models change ([YC launch, Aug 2026](https://www.ycombinator.com/launches/STQ-experiential-labs-turn-your-ai-spend-into-a-cheaper-better-model-you-own)).
- **Future moat:** [Inferred]: Repeated evaluations, routing outcomes, and training histories could create customer-level switching costs, but public retention, deployment-count, and longitudinal-performance data are unavailable.
- **Market structure:** No structural barrier is identified because Together AI already supports continued training, downloadable checkpoints, and production inference, while Predibase offered managed open-model fine-tuning before its acquisition ([Together AI, Apr 2025](https://www.together.ai/blog/introducing-fine-tuning-platform); [TechCrunch, Jun 2025](https://techcrunch.com/2025/06/25/rubrik-acquires-predibase-to-accelerate-adoption-of-ai-agents/)).
- **Commoditization risk:** Model providers and internal ML teams can combine open models, fine-tuning, routing, and evaluation infrastructure, and Experiential Labs itself publishes key workflow components in a 337-star repository ([GitHub, Aug 2026](https://github.com/experientiallabs)).

## Market & Traction

- **Traction signals:**
  - Company-reported customer case study: an unnamed macOS computer-use customer moved to a trained 9B model that was 7× faster than Opus 4.8, 97% cheaper, and completed 50% more simulated tasks than its untrained baseline ([Experiential Labs, Jul 2026](https://www.experientiallabs.ai/case-studies/computer-use)).
  - World Model Optimizer had 337 GitHub stars, OpenCLaaS had 59 stars, and the company organization had 24 followers ([GitHub, Aug 2026](https://github.com/experientiallabs)).
  - Funding amount was undisclosed, with backing identified as YC and angels affiliated with Meta, Google DeepMind, Nvidia, and Waabi ([Silen Naihin profile, Aug 2026](https://www.silennai.com/)).
  - AI Pricing Guru published a technical review of World Model Optimizer on July 27, 2026 ([AI Pricing Guru, Jul 2026](https://www.aipricing.guru/news/world-model-optimizer-pricing-cost-savings-2026/)).
  - YC listed zero active jobs ([YC company page, Aug 2026](https://www.ycombinator.com/companies/experiential-labs)).
- **Competitors (minimum 3, up to 5):**
  - Predibase (more than $28 million raised, revenue unknown): managed open-model fine-tuning and deployment, versus Experiential Labs’ simulation-driven continual training and routing ([TechCrunch, Jun 2025](https://techcrunch.com/2025/06/25/rubrik-acquires-predibase-to-accelerate-adoption-of-ai-agents/)).
  - Arcee AI (at least $29.5 million raised, revenue unknown): develops and deploys small and open-weight models using model merging and its own foundation models rather than customer-agent simulations ([Arcee AI, Jul 2024](https://www.arcee.ai/blog/arcee-ai-secures-24m-series-a-to-transform-the-landscape-of-small-language-models)).
  - Together AI (at least $1.21 billion in disclosed Series A–C funding, revenue unknown): provides a broader open-model cloud spanning fine-tuning, training, inference, and GPU infrastructure rather than a trace-to-specialized-endpoint service ([Together AI Series A](https://www.together.ai/blog/series-a); [Series B](https://www.together.ai/blog/together-ai-announcing-305m-series-b); [Series C](https://www.together.ai/blog/announcing-our-series-c)).
- **Why now:** [Inferred]: Increasingly capable small models created a cost threshold for specialization, with Stanford reporting that GPT-3.5-level inference cost fell from $20 to $0.07 per million tokens between November 2022 and October 2024 ([Stanford AI Index 2025](https://hai.stanford.edu/news/ai-index-2025-state-of-ai-in-10-charts)).

## Founders & Team

- **Kion Fallah (Founder / CEO):**
  - Background: PhD in machine learning from Georgia Tech, BS in electrical and computer engineering from Ohio State, and former Waabi staff researcher who led mixed-reality simulation for autonomous-vehicle testing ([YC company page](https://www.ycombinator.com/companies/experiential-labs)).
  - Twitter/X: @OKfallah, 225 followers ([TwStalker, Jul 2026](https://w.twstalker.com/OKfallah)).
  - LinkedIn: “Experiential Labs,” with approximately 2,000 followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/kfallah)).
  - GitHub: @kfallah, with World Model Optimizer at 337 stars ([GitHub, Aug 2026](https://github.com/kfallah)).
- **Silen Naihin (Founder):**
  - Background: Former Stackwise co-founder, DOE AI-for-science contributor, Minerva CS dropout, and AutoGPT and agent-benchmark contributor working on continual learning, evaluations, and interpretability ([personal profile](https://www.silennai.com/); [YC company page](https://www.ycombinator.com/companies/experiential-labs)).
  - Twitter/X: @silennai, approximately 2,000 followers ([X profile snapshot, Jul 2026](https://x.com/silennai/with_replies)).
  - LinkedIn: “Experiential Labs,” with approximately 6,000 followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/silen-naihin)).
  - GitHub: @SilenNaihin, with the pinned AutoGPT repository at 186,000 stars ([GitHub, Aug 2026](https://github.com/SilenNaihin)).
- **Co-founder relationship:** Silen Naihin reported conducting six months of research with Kion Fallah before starting Experiential Labs ([LinkedIn founder announcement, Jul 2026](https://www.linkedin.com/posts/silen-naihin_if-youre-curious-what-ive-been-up-to-i-activity-7483675091902418944-AU42)).
- **Founder-market fit:** [Inferred]: Fallah’s simulation and efficient-ML research and Naihin’s agent, continual-learning, evaluation, and AutoGPT work directly overlap the company’s simulation-based model-training mechanism ([company research page](https://www.experientiallabs.ai/research); [YC company page](https://www.ycombinator.com/companies/experiential-labs)).

## Key Risks

- **Simulation validity:** The customer case study used 1,000 generated tasks, an LLM judge, and an LLM-based simulated environment rather than reported production success rates, so measured quality may not transfer to live workflows ([Experiential Labs, Jul 2026](https://www.experientiallabs.ai/case-studies/computer-use)).
- **Frontier-equivalence gap:** An independent review reported that the trained Qwen model solved 27.5% of trials versus 49.0% for its teacher and that maximum routing savings reduced measured quality by 0.54 points ([AI Pricing Guru, Jul 2026](https://www.aipricing.guru/news/world-model-optimizer-pricing-cost-savings-2026/)).
- **Production-data governance:** The product connects to telemetry systems and databases to ingest production traces, while the reviewed public product materials do not identify compliance certifications or data-retention controls ([company website, Aug 2026](https://experientiallabs.ai/)).
- **Positioning change:** LinkedIn described the initial use case as automated agent-evaluation creation, while the current website markets owned models and inference routing, and no public transition timeline was found ([LinkedIn company page](https://www.linkedin.com/company/experiential-labs); [company website](https://experientiallabs.ai/)).
- **Name ambiguity:** Search results also surface an unrelated Singapore education company named “the Experiential labs,” which uses a different domain and industry classification ([LinkedIn](https://sg.linkedin.com/company/the-experiential-labs)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.73B global ModelOps market in 2025, forecast to $43.60B by 2030 at 41.3% CAGR ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/modelops-market-report)) |
| SAM | $906.7M global small-language-model market in 2025, forecast to $5.4B by 2032 at 29.2% CAGR ([Global Industry Analysts](https://www.marketresearch.com/Market-Glass-Inc-v1039/Small-Language-Model-SLM-44877661/)) |
| Traction | One unnamed customer deployment reported 7× speed, 97% lower cost, and 50% more simulated-task completions; World Model Optimizer had 337 GitHub stars ([Experiential Labs, Jul 2026](https://www.experientiallabs.ai/case-studies/computer-use); [GitHub, Aug 2026](https://github.com/experientiallabs)) |
| Revenue Signal | No public data found |
| Founders | Kion Fallah (CEO): Georgia Tech ML PhD and former Waabi simulation lead; Silen Naihin (Founder): Stackwise co-founder and AutoGPT, DOE, and continual-learning contributor ([YC](https://www.ycombinator.com/companies/experiential-labs); [Naihin profile](https://www.silennai.com/)) |
| Competitors | Predibase (more than $28M raised, revenue unknown, managed fine-tuning); Arcee AI (at least $29.5M raised, revenue unknown, small/open-weight models); Together AI (at least $1.21B disclosed funding, revenue unknown, full-stack open-model cloud) ([TechCrunch](https://techcrunch.com/2025/06/25/rubrik-acquires-predibase-to-accelerate-adoption-of-ai-agents/); [Arcee AI](https://www.arcee.ai/blog/arcee-ai-secures-24m-series-a-to-transform-the-landscape-of-small-language-models); [Together AI](https://www.together.ai/blog/announcing-our-series-c)) |
| Moat Signals | Customer-specific production traces converted into simulations and owned weights, plus a 337-star open-source repository ([YC launch](https://www.ycombinator.com/launches/STQ-experiential-labs-turn-your-ai-spend-into-a-cheaper-better-model-you-own); [GitHub](https://github.com/experientiallabs)) |
| Risk Factors | Simulation-only public validation, teacher-performance gap, production-trace governance, and competing continued-training platforms ([case study](https://www.experientiallabs.ai/case-studies/computer-use); [AI Pricing Guru](https://www.aipricing.guru/news/world-model-optimizer-pricing-cost-savings-2026/); [Together AI](https://www.together.ai/blog/introducing-fine-tuning-platform)) |
| Founder Reach | Kion Fallah: Twitter 225, LinkedIn ~2K, GitHub repo 337 stars; Silen Naihin: Twitter ~2K, LinkedIn ~6K, pinned AutoGPT repo 186K stars ([Kion X](https://w.twstalker.com/OKfallah); [Kion LinkedIn](https://www.linkedin.com/in/kfallah); [Silen X](https://x.com/silennai/with_replies); [Silen LinkedIn](https://www.linkedin.com/in/silen-naihin); [GitHub](https://github.com/SilenNaihin)) |
| Distribution Signals | World Model Optimizer 337 GitHub stars, OpenCLaaS 59 stars, and company GitHub organization 24 followers ([GitHub, Aug 2026](https://github.com/experientiallabs)) |
| Emails | founders@xplabs.ai ([YC launch, Aug 2026](https://www.ycombinator.com/launches/STQ-experiential-labs-turn-your-ai-spend-into-a-cheaper-better-model-you-own)) |
