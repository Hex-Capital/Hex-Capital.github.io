# hiloop

> Infrastructure for recursive self-improvement

| Field | Value |
|-------|-------|
| Website | https://hiloop.ai |
| YC Page | https://www.ycombinator.com/companies/hiloop |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Developer Tools, Machine Learning, Reinforcement Learning, Infrastructure |
| YC Partner | Ankit Gupta |
| Emails | founders@hiloop.ai |

## The Idea

- **Problem:** Teams training models or agents must provision compute and preserve reproducibility and observability across thousands of experiments, while current alternatives include homegrown evaluation scripts and off-the-shelf RL loops ([hiloop website](https://hiloop.ai/), Aug 2026).
- **Approach:** hiloop gives agents API-controlled, snapshottable compute whose runs can be forked or restored, records model calls, tool activity, output, tokens, and estimated cost in one queryable trace, and runs campaigns across data, training, prompts, tools, harnesses, and systems ([hiloop website](https://hiloop.ai/), Aug 2026; [YC](https://www.ycombinator.com/companies/hiloop), Aug 2026).
- **Differentiation:** hiloop emphasizes harness-agnostic experiment lineage and forkable compute across research domains, while Prime Intellect Lab supplies an environment-centered train-evaluate-deploy stack, OpenPipe centers on SFT and agent reinforcement learning, and Runloop centers on coding-agent devboxes and benchmarks ([hiloop](https://hiloop.ai/); [Prime Intellect](https://www.primeintellect.ai/blog/lab-is-open); [OpenPipe](https://openpipe.ai/); [Runloop](https://runloop.ai/), Aug 2026).
- **Business Model:** [Inferred]: Monetization could combine managed research campaigns, hosted-compute usage, and enterprise deployments in customers’ clouds because hiloop offers hosted and customer-cloud operation plus founder-run campaigns but publishes no pricing ([YC launch](https://www.ycombinator.com/launches/SBN-hiloop-we-run-thousands-of-experiments-to-improve-your-models), Jul 2026).
- **TAM/SAM:** The global MLOps market was estimated at $2.19 billion in 2024 and projected to reach $16.61 billion by 2030 at a 40.5% CAGR ([Grand View Research](https://www.grandviewresearch.com/press-release/global-mlops-market), 2025).
- **GTM / Distribution:** The founders solicit teams with measurable post-training, continual-learning, inference-optimization, or classical-ML objectives through direct outreach and offer to run initial campaigns personally ([YC launch](https://www.ycombinator.com/launches/SBN-hiloop-we-run-thousands-of-experiments-to-improve-your-models), Jul 2026).

## Defensibility

- **Moat today:** The public technical-complexity signal is an experiment system that ran 4,188 agent-directed trials on 50 B200 GPUs over two days and confirmed its result through 25 paired runs with interleaved controls ([hiloop research](https://hiloop.ai/blog/search-is-enough/), Jul 2026).
- **Future moat:** [Inferred]: Retained experiment lineage, failed paths, verified outcomes, and researcher decisions could become proprietary training data and create workflow switching costs, but only one public campaign and no retention evidence are available.
- **Market structure:** No structural barrier identified at this stage, as Prime Intellect and Runloop already offer overlapping training, evaluation, sandbox, and orchestration functions ([Prime Intellect](https://www.primeintellect.ai/blog/lab-is-open); [Runloop](https://runloop.ai/), Aug 2026).
- **Commoditization risk:** Prime Intellect, OpenPipe/CoreWeave, Runloop, model vendors, and internal ML-platform teams can combine sandboxes, evaluation harnesses, orchestration, and post-training methods into overlapping systems ([Prime Intellect](https://www.primeintellect.ai/blog/lab-is-open); [OpenPipe](https://openpipe.ai/blog/openpipe-coreweave); [Runloop](https://runloop.ai/), Aug 2026).

## Market & Traction

- **Traction signals:**
  - 4,188 experiments completed in two days using two stock coding agents and 50 B200 GPUs ([hiloop research](https://hiloop.ai/blog/search-is-enough/), Jul 2026).
  - 0.9016 median validation bits per byte across 25 confirmation runs versus the cited previous B200 result of 0.9109, with a best single run of 0.8999 ([hiloop research](https://hiloop.ai/blog/search-is-enough/), Jul 2026).
  - NanoGPT implementation recorded 12.54% lower runtime than upstream ([YC launch](https://www.ycombinator.com/launches/SBN-hiloop-we-run-thousands-of-experiments-to-improve-your-models), Jul 2026).
  - Erdos Miller is displayed under “Trusted by,” without published engagement details ([hiloop website](https://hiloop.ai/), Aug 2026).
  - 0 open jobs are listed on the YC company page ([YC](https://www.ycombinator.com/companies/hiloop), Aug 2026).
- **Competitors (minimum 3, up to 5):**
  - Prime Intellect (more than $150 million raised, revenue unknown): its Lab integrates hosted RL training, evaluations, inference, adapters, and environments, while hiloop emphasizes campaign-wide experiment lineage and forkable execution; its latest round was a $130 million Series A led by Radical Ventures in July 2026 ([Prime Intellect](https://www.intelcapital.com/prime-intellect-raises-130m-series-a-to-build-the-open-superintelligence-stack/), Jul 2026).
  - OpenPipe/CoreWeave ($6.7 million raised before acquisition, revenue unknown): ART and managed products focus on SFT and reinforcement learning for agents, while hiloop also searches prompts, tools, harnesses, data, and systems; OpenPipe’s $6.7 million seed was led by Costanoa Ventures in March 2024 ([funding announcement](https://www.globenewswire.com/news-release/2024/03/26/2852286/0/en/llm-fine-tuning-startup-openpipe-raises-6-7-million.html), Mar 2024; [OpenPipe](https://openpipe.ai/blog/openpipe-coreweave), Sep 2025).
  - Runloop ($7 million raised, revenue unknown): it provides coding-agent devboxes, benchmarks, and RFT/SFT infrastructure, while hiloop targets measurable autoresearch across multiple domains; its $7 million seed was led by The General Partnership in July 2025 ([Runloop](https://runloop.ai/media/runloop-raises-7m-seed-round-to-bring-enterprise-grade-infrastructure-to-ai-coding-agents), Jul 2025).
- **Why now:** [Inferred]: Karpathy’s March 2026 autoresearch release supplied a reproducible autonomous-experiment benchmark that reached 93,600 GitHub stars by August 2026, creating a public substrate for systems that scale agent-run research ([GitHub](https://github.com/karpathy/autoresearch), Aug 2026).

## Founders & Team

- **Karan Brar (Founder/CEO):**
  - Background: Studied at the University of Toronto with an AI focus, worked in ML at Reducto, and previously led ML infrastructure at DynamoAI ([LinkedIn](https://www.linkedin.com/in/brarkaran); [YC](https://www.ycombinator.com/companies/hiloop), Aug 2026).
  - Twitter/X: @deepmatmul, 194 followers ([profile mirror](https://instalker.org/deepmatmul), Jul 2026).
  - LinkedIn: “hiloop (YC S26)” ([LinkedIn](https://www.linkedin.com/in/brarkaran), Aug 2026).
  - GitHub: @deepmatmul; ccwc, 0 stars ([GitHub](https://github.com/deepmatmul/ccwc), Aug 2026).
- **Thomas Boser (Founder/CTO):**
  - Background: Holds B.S. degrees in computer science and bioinformatics from UC Santa Cruz and previously worked at Reducto, Crosswise, Discord, Sentropy, and SoFi in engineering or ML roles ([LinkedIn](https://www.linkedin.com/in/tboser); [YC](https://www.ycombinator.com/companies/hiloop), Aug 2026).
  - Twitter/X: @thomasboser; count not retrievable ([YC repost via search](https://site.twstalker.com/ycombinator), Aug 2026).
  - LinkedIn: “hiloop” ([LinkedIn](https://www.linkedin.com/in/tboser), Aug 2026).
  - GitHub: @tboser; NIPS2017-demo, 7 stars ([GitHub](https://github.com/tboser/NIPS2017-demo), Aug 2026).
- **Co-founder relationship:** Brar and Boser met at Reducto, where they worked on its ML, post-training, and platform systems ([YC launch](https://www.ycombinator.com/launches/SBN-hiloop-we-run-thousands-of-experiments-to-improve-your-models), Jul 2026).
- **Founder-market fit:** Brar’s ML-infrastructure work at DynamoAI and Reducto and Boser’s ML and platform engineering across Reducto, Discord, Sentropy, and SoFi document experience in the systems hiloop is building ([YC](https://www.ycombinator.com/companies/hiloop), Aug 2026).

## Key Risks

- **Benchmark generalization:** Public performance evidence is concentrated in autoresearch and NanoGPT model-training benchmarks, while the product targets any measurable “propose, run, verify” domain; customer-cloud deployment and user-supplied evaluations provide a path for domain-specific testing ([hiloop research](https://hiloop.ai/blog/search-is-enough/), Jul 2026).
- **Platform convergence:** Prime Intellect Lab already combines environments, evaluation, training, inspection, adapters, inference, and sandboxes and reported more than 10,000 beta training jobs ([Prime Intellect](https://www.primeintellect.ai/blog/lab-is-open), May 2026).
- **Security implementation:** hiloop states that secrets are encrypted at rest but that proof-bound, request-time delivery has not yet shipped, leaving part of the intended sandbox secret-delivery design pending ([hiloop website](https://hiloop.ai/), Aug 2026).
- **Third-party compute and model dependency:** The published campaign used Claude Fable 5, GPT-5.5, GPT-5.5 Pro, and 50 B200 GPUs, so replication depends partly on external model access and accelerator capacity; hiloop mitigates model lock-in by supporting user-provided harnesses and hosted or customer-cloud execution ([hiloop research](https://hiloop.ai/blog/search-is-enough/), Jul 2026).
- **Name and profile ambiguity:** A separate or stale LinkedIn page using the same domain describes HiLoop as a human-in-the-loop workforce platform, while YC describes the current company as automated-research infrastructure ([LinkedIn](https://www.linkedin.com/company/hiloop); [YC](https://www.ycombinator.com/companies/hiloop), Aug 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.19 billion global MLOps market in 2024, projected to reach $16.61 billion by 2030 at 40.5% CAGR ([Grand View Research](https://www.grandviewresearch.com/press-release/global-mlops-market), 2025) |
| SAM | No public data found |
| Traction | 4,188 experiments in two days; 0.9016 median val_bpb across 25 confirmation runs; 12.54% lower NanoGPT runtime than upstream; Erdos Miller displayed under “Trusted by” ([hiloop research](https://hiloop.ai/blog/search-is-enough/), Jul 2026; [YC launch](https://www.ycombinator.com/launches/SBN-hiloop-we-run-thousands-of-experiments-to-improve-your-models), Jul 2026; [hiloop website](https://hiloop.ai/), Aug 2026) |
| Revenue Signal | No public data found |
| Founders | Karan Brar (CEO): University of Toronto, Reducto ML, former DynamoAI ML-infrastructure lead; Thomas Boser (CTO): UC Santa Cruz CS and bioinformatics, Reducto, Crosswise, Discord, Sentropy, and SoFi ([YC](https://www.ycombinator.com/companies/hiloop); [LinkedIn](https://www.linkedin.com/in/tboser), Aug 2026) |
| Competitors | Prime Intellect (more than $150 million raised, revenue unknown, integrated train-evaluate-deploy stack) ([Intel Capital](https://www.intelcapital.com/prime-intellect-raises-130m-series-a-to-build-the-open-superintelligence-stack/), Jul 2026); OpenPipe/CoreWeave ($6.7 million raised, revenue unknown, agent SFT/RL) ([funding announcement](https://www.globenewswire.com/news-release/2024/03/26/2852286/0/en/llm-fine-tuning-startup-openpipe-raises-6-7-million.html), Mar 2024); Runloop ($7 million raised, revenue unknown, coding-agent devboxes and benchmarks) ([Runloop](https://runloop.ai/media/runloop-raises-7m-seed-round-to-bring-enterprise-grade-infrastructure-to-ai-coding-agents), Jul 2025) |
| Moat Signals | Forkable compute, full experiment traces, and 4,188 recorded trials with 25 paired confirmation runs ([hiloop research](https://hiloop.ai/blog/search-is-enough/), Jul 2026) |
| Risk Factors | Benchmark generalization ([hiloop research](https://hiloop.ai/blog/search-is-enough/), Jul 2026), overlapping funded platforms ([Prime Intellect](https://www.primeintellect.ai/blog/lab-is-open), May 2026), incomplete request-time secret delivery ([hiloop website](https://hiloop.ai/), Aug 2026) |
| Founder Reach | Karan Brar: Twitter 194, LinkedIn 1,000, GitHub top original repo 0 stars ([X profile mirror](https://instalker.org/deepmatmul); [LinkedIn](https://www.linkedin.com/in/brarkaran); [GitHub](https://github.com/deepmatmul/ccwc), Jul–Aug 2026); Thomas Boser: Twitter count not retrievable, LinkedIn 483, GitHub top repo 7 stars ([LinkedIn](https://www.linkedin.com/in/tboser); [GitHub](https://github.com/tboser/NIPS2017-demo), Aug 2026) |
| Distribution Signals | YC Launch post with 7 votes and 0 YC-listed jobs ([YC launch](https://www.ycombinator.com/launches/SBN-hiloop-we-run-thousands-of-experiments-to-improve-your-models); [YC](https://www.ycombinator.com/companies/hiloop), Aug 2026) |
| Emails | founders@hiloop.ai ([hiloop website](https://hiloop.ai/), Aug 2026) |
