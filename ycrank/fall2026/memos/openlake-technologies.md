# OpenLake Technologies

> OpenLake lets companies deploy models that improve in real time

| Field | Value |
|-------|-------|
| Website | https://openlakehq.com |
| YC Page | https://www.ycombinator.com/companies/openlake-technologies |
| Batch | Fall 2026 ([YC company directory](https://www.ycombinator.com/companies/openlake-technologies)) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Generative AI, SaaS, Big Data, Infrastructure |
| YC Partner | Pete Koomen ([YC company directory](https://www.ycombinator.com/companies/openlake-technologies)) |
| Emails | arnav@openlakehq.com — Arnav Balyan, founder and CEO ([Launch YC](https://www.ycombinator.com/launches/Wsz-openlake-fast-inference-for-self-improving-models)) |

## The Idea

- **Problem:** Teams running language models in production must repeatedly prepare data, train, evaluate, and redeploy models to incorporate new customer conversations, work OpenLake says they otherwise handle with in-house infrastructure and staff ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wsz-openlake-fast-inference-for-self-improving-models)).
- **Approach:** Customers deploy an open-weight model, connect datasets, reinforcement-learning environments and live data feeds, and use OpenLake to post-train the model as data arrives, serve updates on the existing deployment, and A/B test versions ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wsz-openlake-fast-inference-for-self-improving-models)).
- **Differentiation:** OpenLake describes automatic updates driven by incoming data, while Together AI lets customers define the training loop, Fireworks runs customer-initiated managed training jobs, and Baseten offers post-training with embedded researchers and engineers ([Launch YC](https://www.ycombinator.com/launches/Wsz-openlake-fast-inference-for-self-improving-models), [Together AI post-training](https://www.together.ai/blog/together-post-training), [Fireworks Training](https://fireworks.ai/product/training), [Baseten Series F](https://www.baseten.co/blog/announcing-our-series-f/)).
- **Business Model:** OpenLake published usage-based pricing for its October Ultra R1 routing model at $0.033 per million input tokens with free output tokens ([OpenLake, Oct 2026](https://openlakehq.com/blog/introducing-lake-ultra-r1)).
- **TAM/SAM:** The broader AI inference platforms market was estimated at $24.5B in 2025 with projected 36% CAGR from 2026 to 2032 ([MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/ai-inference-platforms-market-161272776.html)); no public TAM/SAM data found for continuous post-training specifically.
- **GTM / Distribution:** OpenLake’s YC launch directs teams running models in production to book a call or email Balyan, and its company blog links developers to GitHub and Discord ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wsz-openlake-fast-inference-for-self-improving-models), [OpenLake, Oct 2026](https://openlakehq.com/blog/introducing-lake-ultra-r1)).

## Defensibility

- **Moat today:** OpenLake built a distributed storage engine for sharing inference caches and storing training checkpoints, and MLCommons lists OpenLake among its MLPerf Storage v3.0 submitters ([OpenLake storage release](https://openlakehq.com/blog/introducing-openlake), [MLCommons, Sep 2026](https://mlcommons.org/2026/09/mlperf-storage-v3-0-results/)).
- **Future moat:** [Inferred]: Customer-specific data integrations and evaluation histories could make a deployment harder to replace over time, with no public data on retention attributable to those integrations ([Launch YC](https://www.ycombinator.com/launches/Wsz-openlake-fast-inference-for-self-improving-models)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Together AI and Fireworks already offer managed post-training and inference, giving them the components to assemble a competing update workflow ([Together AI post-training](https://www.together.ai/blog/together-post-training), [Fireworks Training](https://fireworks.ai/product/training)).

## Market & Traction

- **Traction signals:**
  - More than 100B tokens served per day, company-reported across OpenLake, with no product-level breakdown ([YC company directory, Nov 2026](https://www.ycombinator.com/companies/openlake-technologies)).
  - Continuous post-training platform launched on Launch YC, with the company reporting that its models cut serving costs in half on average ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wsz-openlake-fast-inference-for-self-improving-models)).
  - Customer testimonial: An unnamed team used OpenLake to train and evaluate its Security-One classification model for production ([OpenLake homepage, Nov 2026, via search snippet](https://openlakehq.com/)).
  - GMI Cloud endorsed OpenLake’s distributed inference-cache architecture in a company-published testimonial ([OpenLake homepage, Nov 2026, via search snippet](https://openlakehq.com/)).
  - October Ultra R1 routing model recorded 91.3% task-classification accuracy and a 68.6% lower per-request cost in a separate routing benchmark against cached GPT 6 Astra, both company-reported ([OpenLake, Oct 2026](https://openlakehq.com/blog/introducing-lake-ultra-r1)).
  - Open-source storage engine introduced in July had 3.1K GitHub stars in November and participated in MLPerf Storage v3.0 in September ([GitHub, Nov 2026](https://github.com/openlake-project/openlake), [MLCommons, Sep 2026](https://mlcommons.org/2026/09/mlperf-storage-v3-0-results/)).
  - Launch coverage in Raised and Reveneau ([Raised, Nov 2026](https://raisednews.com/article/openlake-fast-inference-self-improving-models-yc/), [Reveneau, Nov 2026](https://reveneau.com/ainews/openlake-yc-fall-2026-post-training-inference-49-votes)).
  - 86 company LinkedIn followers ([OpenLake on LinkedIn, Nov 2026](https://www.linkedin.com/company/openlake-technologies)).
  - 0 open YC job postings ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/openlake-technologies/jobs)).
  - Dealroom lists a $125K YC seed entry dated September 2026, with the amount unconfirmed by a company announcement ([Dealroom](https://app.dealroom.co/companies/openlake_technologies)).
- **Competitors:**
  - **Together AI** (~$1.33B raised, ~$1B annualized revenue in Feb 2026 per Sacra): Customer-defined post-training loops and dedicated inference, with an $800M Series C led by Aramco Ventures in July 2026 ([Sacra](https://sacra.com/c/together-ai/), [Aramco Ventures](https://aramcoventures.com/news/together-ai-raises-800-million-at-8-3-billion-valuation-to-make-frontier-ai-accessible-to-all/), [Together AI post-training](https://www.together.ai/blog/together-post-training)).
  - **Fireworks AI** (over $1.8B raised, over $1B annualized revenue in July 2026): Managed supervised, preference and reinforcement fine-tuning with deployment on the same platform, with a $1.5B Series D led by Atreides Management, Index Ventures and TCV in July 2026 ([Sacra](https://sacra.com/c/fireworks-ai/), [Fireworks Series D](https://fireworks.ai/news/fireworks-raises-1-5-billion-series-d), [Fireworks Training](https://fireworks.ai/product/training)).
  - **Baseten** (over $2B raised, ~$600M annualized revenue in Mar 2026 per Sacra): Dedicated inference and post-training with embedded researchers, with a $1.5B Series F led by Altimeter Capital, Conviction Partners and Spark Capital, with Sands Capital and Wellington Management as co-leads, in June 2026 ([Baseten funding and inference](https://www.baseten.co/blog/blaxel-is-joining-baseten-to-build-the-future-of-agentic-cloud/), [Sacra](https://sacra.com/c/baseten/), [Baseten Series F](https://www.baseten.co/blog/announcing-our-series-f/)).
  - **Adaption Labs** ($50M raised, revenue unknown): AutoScientist selects training recipes and runs experiments on customer-supplied tasks, with its February 2026 seed round led by Emergence Capital ([Wilson Sonsini](https://www.wsgr.com/print/v2/content/49063812/Wilson-Sonsini-Advises-Adaption-Labs-on-%2450-Million-Seed-Funding.pdf), [Adaption documentation](https://docs.adaptionlabs.ai/autoscientist/overview)).
- **Why now:** [Inferred]: The release of open weights for Llama 4 in April 2025 and DeepSeek V4 in April 2026 expanded the set of models companies can host and post-train, with V4 among the models OpenLake listed at launch ([Meta](https://about.fb.com/ltam/news/2025/04/la-coleccion-de-modelos-llama-4-el-inicio-de-una-nueva-era-de-innovacion-multimodal-nativa-para-inteligencia-artificial/), [DeepSeek](https://api-docs.deepseek.com/news/news260424/), [Launch YC](https://www.ycombinator.com/launches/Wsz-openlake-fast-inference-for-self-improving-models)).

## Founders & Team

- **Arnav Balyan (Founder/CEO)** — arnav@openlakehq.com ([Launch YC](https://www.ycombinator.com/launches/Wsz-openlake-fast-inference-for-self-improving-models)).
  - **Background:** YC lists MIT and the University of Delhi as his alma maters, autoregressive-model research at MIT and Harvard, prior work at Decodr Technologies and Uber, and committer roles on Apache Livy, Gluten and Paimon ([YC founder profile](https://www.ycombinator.com/founders/arnav-balyan), [Uber Engineering](https://www.uber.com/in/en/blog/datacentral-ubers-observability-and-chargeback-platform/)); prior exits: No public data found.
  - **Twitter/X:** @arnavbalyan, count not retrievable ([YC repost via Lurkbird](https://lurkbird.com/ycombinator)).
  - **LinkedIn:** YC links his profile; headline: No public data found ([YC founder profile](https://www.ycombinator.com/founders/arnav-balyan)).
  - **GitHub:** @ArnavBalyan, contributor to `openlake-project/openlake`, 3.1K repository stars ([GitHub releases](https://github.com/openlake-project/openlake/releases), [GitHub repository, Nov 2026](https://github.com/openlake-project/openlake)).
- **Co-founder relationship:** No public data on co-founder history ([YC founder listing](https://www.ycombinator.com/companies/openlake-technologies)).
- **Founder-market fit:** Balyan’s work on Uber’s data infrastructure and the OpenLake storage engine covers distributed systems used in model serving, and YC lists Pete Koomen as the company’s primary partner ([Uber Engineering](https://www.uber.com/in/en/blog/datacentral-ubers-observability-and-chargeback-platform/), [GitHub releases](https://github.com/openlake-project/openlake/releases), [YC company directory](https://www.ycombinator.com/companies/openlake-technologies)).

## Key Risks

- **Training data governance:** [Inferred]: Training on live customer conversations can bring sensitive content into model updates ([YC company directory](https://www.ycombinator.com/companies/openlake-technologies)). Website not accessible at time of research.
- **Model regressions:** [Inferred]: Automatic updates can improve performance on recent examples while degrading older tasks, and OpenLake offers A/B tests against prior versions ([Launch YC](https://www.ycombinator.com/launches/Wsz-openlake-fast-inference-for-self-improving-models)).
- **Competitive substitution:** [Inferred]: Customers can source fine-tuning and serving from Fireworks or Together AI, while OpenLake’s exportable checkpoints make it possible to move a trained model elsewhere ([Fireworks Training](https://fireworks.ai/product/training), [Together AI post-training](https://www.together.ai/blog/together-post-training), [Launch YC](https://www.ycombinator.com/launches/Wsz-openlake-fast-inference-for-self-improving-models)).
- **Name ambiguity:** [Inferred]: Search and brand attribution can be split among OpenLake Technologies, the separate lakehouse at `openlake.co`, and Alibaba Cloud OpenLake ([YC company directory](https://www.ycombinator.com/companies/openlake-technologies), [OpenLake lakehouse](https://openlake.co/), [Alibaba Cloud documentation](https://www.alibabacloud.com/help/en/openlake/what-is-openlake)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader AI inference platforms market: $24.5B in 2025, 36% projected CAGR from 2026 to 2032 ([MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/ai-inference-platforms-market-161272776.html)) |
| SAM | No public data found |
| Traction | Over 100B tokens/day, company-reported ([YC, Nov 2026](https://www.ycombinator.com/companies/openlake-technologies)); customer testimonial: unnamed team trained Security-One on OpenLake ([OpenLake homepage, Nov 2026, via search snippet](https://openlakehq.com/)); earlier storage engine: 3.1K GitHub stars ([GitHub, Nov 2026](https://github.com/openlake-project/openlake)) |
| Revenue Signal | Ultra R1 routing model: $0.033 per million input tokens, with free output tokens ([OpenLake, Oct 2026](https://openlakehq.com/blog/introducing-lake-ultra-r1)). Company revenue and continuous post-training pricing: No public data found |
| Founders | Arnav Balyan (Founder/CEO), former Uber senior software engineer, autoregressive-model researcher, Apache committer ([YC founder profile](https://www.ycombinator.com/founders/arnav-balyan)) |
| Competitors | Together AI (~$1.33B raised, ~$1B annualized revenue, customer-defined training loops; [Sacra](https://sacra.com/c/together-ai/), [Together AI](https://www.together.ai/blog/together-post-training)); Fireworks AI (over $1.8B raised, over $1B annualized revenue, managed fine-tuning jobs; [Sacra](https://sacra.com/c/fireworks-ai/), [Fireworks](https://fireworks.ai/product/training)); Baseten (over $2B raised, ~$600M annualized revenue, embedded researchers; [Baseten funding](https://www.baseten.co/blog/blaxel-is-joining-baseten-to-build-the-future-of-agentic-cloud/), [Sacra](https://sacra.com/c/baseten/), [Baseten Series F](https://www.baseten.co/blog/announcing-our-series-f/)); Adaption Labs ($50M raised, revenue unknown, automated training experiments; [Wilson Sonsini](https://www.wsgr.com/print/v2/content/49063812/Wilson-Sonsini-Advises-Adaption-Labs-on-%2450-Million-Seed-Funding.pdf), [Adaption](https://docs.adaptionlabs.ai/autoscientist/overview)) |
| Moat Signals | Distributed inference-cache and checkpoint storage engine ([OpenLake storage release](https://openlakehq.com/blog/introducing-openlake)), MLPerf Storage v3.0 submission ([MLCommons, Sep 2026](https://mlcommons.org/2026/09/mlperf-storage-v3-0-results/)) |
| Risk Factors | Live-conversation training ([YC](https://www.ycombinator.com/companies/openlake-technologies)), overlapping managed fine-tuning offerings ([Fireworks](https://fireworks.ai/product/training), [Together AI](https://www.together.ai/blog/together-post-training)), shared OpenLake name ([OpenLake lakehouse](https://openlake.co/), [Alibaba Cloud](https://www.alibabacloud.com/help/en/openlake/what-is-openlake)) |
| Founder Reach | Arnav Balyan: @arnavbalyan, X follower count not retrievable ([YC repost via Lurkbird](https://lurkbird.com/ycombinator)); contributor to the OpenLake storage repository with 3.1K stars ([GitHub releases](https://github.com/openlake-project/openlake/releases), [GitHub repository, Nov 2026](https://github.com/openlake-project/openlake)) |
| Distribution Signals | Launch YC and direct demo booking ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wsz-openlake-fast-inference-for-self-improving-models)); 86 company LinkedIn followers ([LinkedIn, Nov 2026](https://www.linkedin.com/company/openlake-technologies)); official Discord, member count not retrievable ([OpenLake, Oct 2026](https://openlakehq.com/blog/introducing-lake-ultra-r1)) |
| Emails | arnav@openlakehq.com — Arnav Balyan, founder and CEO ([Launch YC](https://www.ycombinator.com/launches/Wsz-openlake-fast-inference-for-self-improving-models)) |
