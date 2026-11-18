# RightNow

> The kernel lab behind instant AI

| Field | Value |
|-------|-------|
| Website | https://www.rightnowai.co |
| YC Page | https://www.ycombinator.com/companies/rightnow |
| Batch | Fall 2026 ([YC directory](https://www.ycombinator.com/companies/rightnow)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Generative AI, Machine Learning, Infrastructure, AI |
| YC Partner | Nicolas Dessaigne ([YC directory](https://www.ycombinator.com/companies/rightnow)) |
| Emails | jaber@rightnowai.co (Jaber Jaber, [RightNow contact](https://www.rightnowai.co/contact)), jaber@runinfra.ai (Jaber Jaber, security and audit requests, [RightNow security](https://www.rightnowai.co/open-models/security)), osama@rightnowai.co (Osama Jaber, privacy and legal inquiries, [RightNow privacy policy](https://www.rightnowai.co/open-models/privacy-policy)) |

## The Idea

- **Problem:** Engineering teams serving open-weight models face GPU costs, latency, and tuning work when they self-host on rented GPUs, while closed-model APIs set their own prices and serving speeds ([Launch YC](https://www.ycombinator.com/launches/XcZ-rightnow-own-your-ai-at-full-speed)).
- **Approach:** RightNow tunes model precision, decoding, batching, caching, and GPU kernels for the serving hardware, exposes open weights through OpenAI- and Anthropic-compatible endpoints, and offers its own multimodal decision model ([RightNow serving stack](https://www.rightnowai.co/), [RightNow product reference](https://www.rightnowai.co/ai-info)).
- **Differentiation:** RightNow sells kernel-level optimization of customer models, while Fireworks also trains and fine-tunes models, Together rents GPU clusters and builds its own inference compiler, and DeepInfra already offers dedicated serving ([Launch YC](https://www.ycombinator.com/launches/XcZ-rightnow-own-your-ai-at-full-speed), [Fireworks](https://fireworks.ai/news/fireworks-raises-1-5-billion-series-d), [Together AI](https://www.together.ai/blog/announcing-our-series-c), [Together Compiler](https://www.together.ai/blog/together-compiler-continual-compilation-for-ai-inference), [DeepInfra](https://deepinfra.com/pricing)).
- **Business Model:** Shared inference is pay-as-you-go with no seat fees, prepaid top-ups start at $5, Nemotron 3.5 Lightning costs $0.05 input and $0.15 output per million tokens, batch costs half of list price, and reserved capacity and dedicated deployments are listed as forthcoming ([RightNow pricing](https://www.rightnowai.co/pricing), [API release notes](https://www.rightnowai.co/docs/open-models/release-notes), Nov 2026).
- **TAM/SAM:** Meticulous Research estimates the broader open-weight models market, including hosting, tooling, fine-tuning, and support, at $7–10B in 2026 with 26% CAGR through 2033 ([Meticulous Research](https://www.meticulousresearch.com/meticulous-next/open-weight-ai-models-outlook-2026-2033)); no public TAM/SAM data found for hosted open-weight inference alone.
- **GTM / Distribution:** RightNow offers self-serve API keys, up to $2,600 in startup credits, and a workload migration and benchmark offer for teams spending over $1,000 a month on inference ([Launch YC](https://www.ycombinator.com/launches/XcZ-rightnow-own-your-ai-at-full-speed)).

## Defensibility

- **Moat today:** RightNow has documented a workflow that profiles PyTorch bottlenecks and iteratively benchmarks replacement Triton or CUDA kernels, and its hosted stack tunes kernels and serving settings together ([AutoKernel preprint](https://arxiv.org/abs/2603.21331), [RightNow serving stack](https://www.rightnowai.co/)).
- **Future moat:** [Inferred]: A growing library of validated kernels across model and GPU pairs could reduce the time to support new workloads, but the durability of that advantage is unproven ([AutoKernel preprint](https://arxiv.org/abs/2603.21331), [Together Compiler](https://www.together.ai/blog/together-compiler-continual-compilation-for-ai-inference)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Together AI already uses agents to tune inference performance, and RightNow publishes the AutoKernel implementation under Apache 2.0, giving other serving providers access to part of its optimization workflow ([Together Compiler](https://www.together.ai/blog/together-compiler-continual-compilation-for-ai-inference), [AutoKernel GitHub](https://github.com/RightNow-AI/autokernel)).

## Market & Traction

- **Traction signals:**
  - Hosted inference debuted as RunInfra on Product Hunt in July 2026, received 119 votes for its October hosted-model launch, and moved under RightNow in November with existing keys and balances carried over ([Product Hunt](https://www.producthunt.com/products/runinfra), [RightNow migration docs](https://www.rightnowai.co/docs/open-models/moving-from-runinfra)).
  - Hosted API press coverage by Founderland ([Founderland](https://www.founderland.ai/articles/rightnow-ai-launches-runinfra-to-cut-ai-agent-costs-at-the-g-mvyg5jwa), Nov 2026).
  - Kernel-tool adoption reported by RightNow at NVIDIA, Hugging Face, Samsung, AMD, Modal, and Reddit ([RightNow homepage](https://www.rightnowai.co/), Nov 2026).
  - Research and open-source projects: AutoKernel 1.6K stars, OpenFang 18.3K stars, and picoLM 2.2K stars ([AutoKernel](https://github.com/RightNow-AI/autokernel), [OpenFang](https://github.com/RightNow-AI/openfang), [picoLM](https://github.com/RightNow-AI/picolm), Nov 2026).
  - AutoKernel press coverage by MarkTechPost ([MarkTechPost](https://www.marktechpost.com/2026/04/06/rightnow-ai-releases-autokernel-an-open-source-framework-that-applies-an-autonomous-agent-loop-to-gpu-kernel-optimization-for-arbitrary-pytorch-models/), Apr 2026).
  - Prior CUDA editor ranked #5 of the day ([Product Hunt](https://www.producthunt.com/products/rightnow-ai?launch=rightnow-ai-2), Dec 8, 2025).
  - Company reach: 2,521 LinkedIn followers, approximately 10K X followers at `@rightnow_co`, and 1,053 Discord members ([LinkedIn](https://www.linkedin.com/company/rightnowai/), [TwStalker X snapshot](https://ww1.twstalker.com/rightnow_co), [GroupFinds Discord snapshot](https://www.groupfinds.com/discord/rightnow), Nov 2026).
  - Estimated 354 monthly visits to `rightnowai.co` during the earlier coding-agent period ([INITE Atlas](https://inite.ai/en/atlas/rightnowai.co), Sep 2026).
  - YC backing with no publicly disclosed company-specific amount, and zero active YC job listings ([YC directory](https://www.ycombinator.com/companies/rightnow), [Founderland](https://www.founderland.ai/articles/rightnow-ai-launches-runinfra-to-cut-ai-agent-costs-at-the-g-mvyg5jwa), [YC Jobs](https://www.ycombinator.com/companies/rightnow/jobs), Nov 2026).
- **Competitors:**
  - Fireworks AI (over $1.8B raised, over $1B annualized revenue in July 2026): trains and serves custom models, and its July 2026 $1.505B Series D was led by Atreides Management, Index Ventures, and TCV ([Fireworks](https://fireworks.ai/news/fireworks-raises-1-5-billion-series-d), [Sacra](https://sacra.com/c/fireworks-ai/)).
  - Together AI (approximately $1.33B raised, estimated $1B annualized revenue in February 2026): combines hosted inference with GPU clusters and training, and its July 2026 $800M Series C was led by Aramco Ventures ([Together AI](https://www.together.ai/blog/announcing-our-series-c), [Sacra](https://sacra.com/c/together-ai/)).
  - DeepInfra (at least $125M across announced rounds, over $100M ARR in September 2026): offers dedicated serving and third-party gateway distribution, and its May 2026 $107M Series B was co-led by 500 Global and Georges Harik ([Series A](https://deepinfra.com/blog/18m-milestone), [Series B](https://deepinfra.com/series-b), [ARR announcement](https://www.globenewswire.com/news-release/2026/09/29/3370896/0/en/deepinfra-surpasses-100m-arr-triples-token-volume.html), [Opper partnership](https://deepinfra.com/blog/deepinfra-opper-partnership)).
- **Why now:** [Inferred]: Open-weight models crossed a usage threshold on Vercel AI Gateway in August 2026, when they first accounted for a majority of tokens, indicating more production traffic for specialized hosts to serve ([Vercel AI Gateway Production Index](https://vercel.com/blog/ai-gateway-production-index-october-2026), Oct 2026).

## Founders & Team

- **Jaber Jaber (Technical Co-founder):**
  - Background: YC lists Al Hussein Technical University and Stanford University under education and Microsoft and Nujoom AI under prior experience, and Jaber co-authored AutoKernel ([YC founder profile](https://www.ycombinator.com/founders/jaber-jaber), [AutoKernel preprint](https://arxiv.org/abs/2603.21331)). Business emails are `jaber@rightnowai.co` and `jaber@runinfra.ai` ([RightNow contact](https://www.rightnowai.co/contact), [RightNow security](https://www.rightnowai.co/open-models/security)).
  - Twitter/X: `@Akashi203`, approximately 7K followers ([YC founder profile](https://www.ycombinator.com/founders/jaber-jaber), [TwStalker](https://ww1.twstalker.com/Akashi203), Nov 2026).
  - LinkedIn: RightNow (YC F26) affiliation, approximately 10K followers, with no separate public headline displayed ([LinkedIn](https://jo.linkedin.com/in/jaber-j-b65246234), Nov 2026).
  - GitHub: `@jaberjaber23`, with company repository OpenFang pinned at 18.3K stars ([GitHub profile](https://github.com/jaberjaber23), [OpenFang](https://github.com/RightNow-AI/openfang), Nov 2026).
- **Osama Jaber (Commercial Co-founder / CMO):**
  - Background: Osama earned a pharmacy degree at the University of Petra, founded chest X-ray AI startup Antilab, which Founderland reports was acquired in 2025, and co-authored AutoKernel ([YC founder profile](https://www.ycombinator.com/founders/osama-jaber), [Founderland](https://www.founderland.ai/founder/osama-jaber), [AutoKernel preprint](https://arxiv.org/abs/2603.21331)). His business email is `osama@rightnowai.co` ([RightNow privacy policy](https://www.rightnowai.co/open-models/privacy-policy)).
  - Twitter/X: `@OsamaKakashi`, 178 followers ([YC founder profile](https://www.ycombinator.com/founders/osama-jaber), [TwStalker](https://ww1.twstalker.com/OsamaKakashi), Nov 2026).
  - LinkedIn: RightNow (YC F26) affiliation, approximately 6K followers, with no separate public headline displayed ([LinkedIn](https://www.linkedin.com/in/osama-jaber-osama2001), 2026).
  - GitHub: No public repos found under a verified personal handle, and RightNow’s StreamIndex repository credits Osama as a co-author ([StreamIndex](https://github.com/RightNow-AI/StreamIndex/blob/main/pyproject.toml)).
- **Co-founder relationship:** Jaber and Osama are brothers ([Founderland](https://www.founderland.ai/founder/osama-jaber)).
- **Founder-market fit:** Both founders co-authored GPU-kernel optimization research, Osama previously built a healthcare AI product, and YC lists Nicolas Dessaigne as their primary partner ([AutoKernel preprint](https://arxiv.org/abs/2603.21331), [Founderland](https://www.founderland.ai/founder/osama-jaber), [YC directory](https://www.ycombinator.com/companies/rightnow)).

## Key Risks

- **GPU capacity:** [Inferred]: Traffic spikes could strain shared capacity because RightNow rents GPUs and lists reserved and dedicated options as forthcoming, though its November release added batch processing on idle capacity ([RunInfra privacy policy](https://runinfra.ai/privacy-policy), [RightNow pricing](https://www.rightnowai.co/pricing), [API release notes](https://www.rightnowai.co/docs/open-models/release-notes)).
- **Performance portability:** [Inferred]: Customers with different prompts, cache reuse, or concurrency may see different cost and latency from RightNow’s published measurements, and RightNow offers to benchmark a prospect’s own workload ([RightNow homepage](https://www.rightnowai.co/), [Launch YC](https://www.ycombinator.com/launches/XcZ-rightnow-own-your-ai-at-full-speed), [Hosted API measurement study](https://arxiv.org/abs/2605.02821)).
- **Competitive overlap:** [Inferred]: Together’s inference compiler targets the same serving-efficiency gains, which could reduce the performance difference buyers see between providers ([Together Compiler](https://www.together.ai/blog/together-compiler-continual-compilation-for-ai-inference), [RightNow serving stack](https://www.rightnowai.co/)).
- **Name collision:** [Inferred]: Buyers searching for RightNow may encounter Oracle’s RightNow customer-service product, while the YC profile identifies the GPU company by its `rightnowai.co` domain ([Oracle](https://www.oracle.com/anz/applications/rightnow/), [YC directory](https://www.ycombinator.com/companies/rightnow)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7–10B in 2026, 26% CAGR through 2033 for the broader open-weight model ecosystem ([Meticulous Research](https://www.meticulousresearch.com/meticulous-next/open-weight-ai-models-outlook-2026-2033)) |
| SAM | No public data found |
| Traction | Kernel-tool use reported at NVIDIA, Hugging Face, Samsung, AMD, Modal, and Reddit ([RightNow](https://www.rightnowai.co/), Nov 2026). Hosted API coverage ([Founderland](https://www.founderland.ai/articles/rightnow-ai-launches-runinfra-to-cut-ai-agent-costs-at-the-g-mvyg5jwa), Nov 2026). AutoKernel coverage ([MarkTechPost](https://www.marktechpost.com/2026/04/06/rightnow-ai-releases-autokernel-an-open-source-framework-that-applies-an-autonomous-agent-loop-to-gpu-kernel-optimization-for-arbitrary-pytorch-models/), Apr 2026). |
| Revenue Signal | API input from $0.05 per million tokens, $5 minimum top-up, and half-price batch ([RightNow pricing](https://www.rightnowai.co/pricing), [API release notes](https://www.rightnowai.co/docs/open-models/release-notes), Nov 2026). Realized revenue — No public data found. |
| Founders | Jaber Jaber (Technical Co-founder), formerly Microsoft and Nujoom AI, AutoKernel co-author ([YC](https://www.ycombinator.com/founders/jaber-jaber), [AutoKernel](https://arxiv.org/abs/2603.21331)). Osama Jaber (CMO), University of Petra pharmacy graduate and Antilab founder ([YC](https://www.ycombinator.com/founders/osama-jaber), [Founderland](https://www.founderland.ai/founder/osama-jaber)). |
| Competitors | Fireworks AI (over $1.8B raised, over $1B annualized revenue, model training and serving) ([Fireworks](https://fireworks.ai/news/fireworks-raises-1-5-billion-series-d), [Sacra](https://sacra.com/c/fireworks-ai/)). Together AI (approximately $1.33B raised, estimated $1B annualized revenue, GPU clusters and training) ([Sacra](https://sacra.com/c/together-ai/)). DeepInfra (at least $125M announced, over $100M ARR, dedicated serving) ([DeepInfra Series A](https://deepinfra.com/blog/18m-milestone), [Series B](https://deepinfra.com/series-b), [ARR announcement](https://www.globenewswire.com/news-release/2026/09/29/3370896/0/en/deepinfra-surpasses-100m-arr-triples-token-volume.html)). |
| Moat Signals | Published profiling and kernel-search workflow plus model-specific serving configuration ([AutoKernel](https://arxiv.org/abs/2603.21331), [RightNow](https://www.rightnowai.co/)). |
| Risk Factors | Rented GPU capacity ([RunInfra privacy policy](https://runinfra.ai/privacy-policy)), workload-dependent cache performance ([RightNow](https://www.rightnowai.co/)), competing inference compiler ([Together AI](https://www.together.ai/blog/together-compiler-continual-compilation-for-ai-inference)). |
| Founder Reach | Jaber Jaber, X ~7K and LinkedIn ~10K ([TwStalker](https://ww1.twstalker.com/Akashi203), [LinkedIn](https://jo.linkedin.com/in/jaber-j-b65246234)). Osama Jaber, X 178 and LinkedIn ~6K ([TwStalker](https://ww1.twstalker.com/OsamaKakashi), [LinkedIn](https://www.linkedin.com/in/osama-jaber-osama2001)). |
| Distribution Signals | RunInfra 119 Product Hunt votes (Oct 2026) and prior CUDA editor #5 of the day (Dec 2025) ([RunInfra](https://www.producthunt.com/products/runinfra), [CUDA editor](https://www.producthunt.com/products/rightnow-ai?launch=rightnow-ai-2)). Company LinkedIn 2,521, X ~10K, and Discord 1,053 (Nov 2026) ([LinkedIn](https://www.linkedin.com/company/rightnowai/), [TwStalker](https://ww1.twstalker.com/rightnow_co), [GroupFinds](https://www.groupfinds.com/discord/rightnow)). |
| Emails | jaber@rightnowai.co (Jaber Jaber, [RightNow contact](https://www.rightnowai.co/contact)), jaber@runinfra.ai (Jaber Jaber, security and audit requests, [RightNow security](https://www.rightnowai.co/open-models/security)), osama@rightnowai.co (Osama Jaber, privacy and legal inquiries, [RightNow privacy policy](https://www.rightnowai.co/open-models/privacy-policy)). |
