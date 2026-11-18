# isoquant

> Self-optimizing inference cloud for 4x faster open models

| Field | Value |
|-------|-------|
| Website | https://isoquant.ai/ |
| YC Page | https://www.ycombinator.com/companies/isoquant |
| Batch | Fall 2026 ([YC directory](https://www.ycombinator.com/companies/isoquant)) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Cloud Computing, AI |
| YC Partner | Brad Flora ([YC directory](https://www.ycombinator.com/companies/isoquant)) |
| Emails | founders@isoquant.ai, shared sales and privacy contact ([Isoquant contact](https://isoquant.ai/contact), [privacy policy](https://isoquant.ai/privacy)); founders@agentfm.ai, shared inbox for prior product Agent FM ([Agent FM](https://www.agentfm.ai/)) |

## The Idea

- **Problem:** Teams serving latency-sensitive open models through shared APIs or self-hosted stacks face higher latency and token costs when serving configurations are poorly matched to their workloads, with Isoquant estimating that untuned inference can leave 50–80% of performance unused ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Xcn-isoquant-self-optimizing-inference-cloud-for-4x-faster-open-models)).
- **Approach:** Customers supply workloads and performance targets, and Isoquant’s agents test changes to GPU kernels, memory, decoding, caching, and scheduling against those targets on the relevant hardware ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Xcn-isoquant-self-optimizing-inference-cloud-for-4x-faster-open-models)).
- **Differentiation:** In Isoquant’s own GLM‑5.3‑Flash benchmark, its median time to first token was 452 ms versus 890 ms for Together AI, 1,320 ms for Baseten, and 1,550 ms for Fireworks AI ([Isoquant benchmark, Nov 2026 snapshot](https://isoquant.ai/#models)).
- **Business Model:** Prepaid credits cover per-token usage, with GLM‑5.3‑Flash priced at $0.07 input, $0.025 cached input, and $0.15 output per million tokens ([Isoquant pricing, Nov 2026 snapshot](https://isoquant.ai/#models), [terms](https://isoquant.ai/terms)).
- **TAM/SAM:** Grand View Research projects $21.1B for the broader AI inference software market in 2026 and 21.1% CAGR through 2033, with no public TAM/SAM data found for hosted open-model inference specifically ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/ai-inference-software-market-report)).
- **GTM / Distribution:** Developers can create an API key and change the base URL in an existing integration, while teams seeking workload-specific optimization can book a consultation ([Isoquant API docs](https://isoquant.ai/docs), [contact page](https://isoquant.ai/contact)).

## Defensibility

- **Moat today:** Isoquant reports 158.9 median output tokens per second on GLM‑5.3‑Flash versus 54 for Together AI, 51 for Fireworks AI, and 41 for Baseten in its published comparison ([Isoquant benchmark, Nov 2026 snapshot](https://isoquant.ai/#models)).
- **Future moat:** [Inferred]: Results from repeated tuning runs could give Isoquant a head start on similar workloads and hardware, though reuse across customers remains unverified and the privacy policy requires written consent to train on customer content ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Xcn-isoquant-self-optimizing-inference-cloud-for-4x-faster-open-models), [Isoquant privacy policy](https://isoquant.ai/privacy)).
- **Market structure:** No structural barrier identified at this stage ([Together AI Polymorphic Inference](https://www.together.ai/polymorphic-inference)).
- **Commoditization risk:** Together AI already offers agent-driven tuning for dedicated inference customers, and NVIDIA Dynamo supplies open-source scheduling and cache management for teams building their own serving stacks ([Together AI](https://www.together.ai/polymorphic-inference), [NVIDIA, Mar 2026](https://developer.nvidia.com/blog/nvidia-dynamo-1-production-ready/)).

## Market & Traction

- **Traction signals:**
  - Inference cloud announced September 24, 2026, with 18B tokens served in its first 24 hours, per the CEO ([Aniket Deshpande’s X posts via Teapawt, Sep 2026](https://www.teapaw.org/isoquantai)).
  - 1.2T tokens in the first month, per the company’s October update ([Isoquant on X via Teapawt, Oct 26, 2026](https://www.teapaw.org/isoquantai)).
  - 1.5T+ tokens served, 1,000+ customers, and 40% week-over-week growth with the growth metric unspecified, per the company’s YC launch ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Xcn-isoquant-self-optimizing-inference-cloud-for-4x-faster-open-models)).
  - Workload migrations from other providers and self-hosted infrastructure across North America, Europe, and Asia-Pacific, per the company ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Xcn-isoquant-self-optimizing-inference-cloud-for-4x-faster-open-models)).
  - Company-run banking evaluation recorded 91.8% intent accuracy versus 74.7% for its baseline and 91.7% lower inference cost ([Isoquant banking case study, Nov 2026 snapshot](https://isoquant.ai/case-studies/banking-intent-classification)).
  - Prior product Agent FM reported 410 engineers using its coding-agent desktop app, including 60+ paying, at its August 2026 YC launch before the September inference-cloud launch ([Agent FM Launch YC](https://www.ycombinator.com/launches/SQ0-agent-fm-one-group-chat-to-hear-and-steer-your-coding-agents), [September launch announcement via Teapawt](https://www.teapaw.org/isoquantai)).
  - YC backing, with Caplight recording a $500K July 2026 accelerator round and Dealroom listing a $125K September 2026 seed entry ([YC directory](https://www.ycombinator.com/companies/isoquant), [Caplight](https://www.caplight.com/company/isoquant), [Dealroom](https://app.dealroom.co/companies/isoquant)).
  - Launch coverage in Menlo Times and Reveneau ([Menlo Times, Nov 2026](https://www.menlotimes.com/post/y-combinator-launches-of-the-week-216), [Reveneau, Nov 2026](https://reveneau.com/ainews/isoquant-yc-launch-self-optimizing-inference-1500-billion-tokens-1000-customers)).
  - 1,172 LinkedIn followers and 514 X followers on the website-linked @isoquant_labs account ([LinkedIn](https://www.linkedin.com/company/isoquant-ai), [Teapawt X mirror](https://teapawt.org/isoquant_labs?cursor=DAAHCgABHXH2Twv___YLAAIAAAATMjEwNDA5MjEzNjg1NzY0MTEzOQgAAwAAAAIAAA), Nov 17, 2026 snapshots).
  - 0 open YC jobs ([YC Jobs, Nov 17, 2026](https://www.ycombinator.com/companies/isoquant/jobs)).
- **Competitors:**
  - **Together AI** (~$1.33B raised, ~$1B estimated annualized revenue in Feb 2026) offers GPU clusters and agent-tuned dedicated inference, with an $800M Series C led by Aramco Ventures in July 2026 ([Sacra](https://sacra.com/c/together-ai/), [Together AI Series C](https://www.together.ai/blog/announcing-our-series-c), [product](https://www.together.ai/polymorphic-inference)).
  - **Fireworks AI** (>$1.8B raised, >$1B company-reported annualized revenue in July 2026) offers self-serve fine-tuning, with a $1.505B Series D led by Atreides Management, Index Ventures, and TCV that month ([Sacra](https://sacra.com/c/fireworks-ai/), [Fireworks Series D](https://fireworks.ai/blog/fireworks-series-d-funding), [training docs](https://docs.fireworks.ai/fine-tuning/finetuning-intro)).
  - **Baseten** ($2.085B raised, ~$600M reported annualized revenue at the end of Q1 2026) offers custom model packaging through Truss, with a $1.5B June 2026 Series F led by Altimeter, Conviction, and Spark, with Sands and Wellington as co-leads ([Revenue Memo](https://www.revenuememo.com/p/baseten-funding), [The Information](https://www.theinformation.com/articles/ai-inference-provider-baseten-talks-raise-1-billion-11-billion-valuation), [Baseten Series F](https://www.baseten.co/blog/announcing-our-series-f/), [product](https://www.baseten.co/platform/model-management/)).
- **Why now:** [Inferred]: NVIDIA’s March 2025 release of Dynamo made separate scheduling for prompt processing and token generation available in open source, giving inference providers components they could tune for specific workloads ([NVIDIA, Mar 2025](https://developer.nvidia.com/blog/introducing-nvidia-dynamo-a-low-latency-distributed-inference-framework-for-scaling-reasoning-ai-models/)).

## Founders & Team

- **Aniket Deshpande (Co-founder and CEO):**
  - **Background:** Worked on inference and post-training at Meta Superintelligence Labs and Instagram, with earlier roles at Adobe, SAP, and Oracle and degrees listed at Savitribai Phule Pune University and San José State University ([YC founder profile](https://www.ycombinator.com/founders/aniket-deshpande), [Launch YC](https://www.ycombinator.com/launches/Xcn-isoquant-self-optimizing-inference-cloud-for-4x-faster-open-models), [ContactOut](https://contactout.com/Aniket-Deshpande-38645508)). Direct business email and prior exit — No public data found.
  - **Twitter/X:** @anideshp, 395 followers ([YC founder profile](https://www.ycombinator.com/founders/aniket-deshpande), [Teapawt X mirror, Nov 17, 2026](https://www.teapaw.org/anideshp)).
  - **LinkedIn:** “Isoquant (YC F26)” in the public profile title, 21K followers ([LinkedIn, Nov 17, 2026](https://www.linkedin.com/in/anideshp)).
  - **GitHub:** @AniketDeshpandeGit contributed to prior product `agentfm-ai/agent-fm`, listed with 42 stars ([GitHub Explorer](https://ghe.derekchia.com/repo/agentfm-ai/agent-fm), [VibeIndex, Nov 2026 snapshot](https://vibeindex.dev/tools/agent-fm/)).
- **Mugdhaa Patankar (Co-founder and CTO):**
  - **Background:** Studied computer science at UC Irvine, led AI developer productivity work at Snowflake, built live-video playback systems at Twitch, and previously worked at AWS ([YC founder profile](https://www.ycombinator.com/founders/mugdhaa-patankar), [Launch YC](https://www.ycombinator.com/launches/Xcn-isoquant-self-optimizing-inference-cloud-for-4x-faster-open-models), [Fundraising Fox](https://fundraisingfox.com/people/mugdhaa-patankar)). Direct business email and prior exit — No public data found.
  - **Twitter/X:** No public account found.
  - **LinkedIn:** “Isoquant (YC F26)” in the public profile title, 2K followers ([LinkedIn, Nov 17, 2026](https://www.linkedin.com/in/mugdhaa-patankar)).
  - **GitHub:** No public repos found.
- **Co-founder relationship:** The founders report nearly a decade of friendship before co-founding the company in 2026 ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Xcn-isoquant-self-optimizing-inference-cloud-for-4x-faster-open-models)).
- **Founder-market fit:** Deshpande’s Meta inference work and Patankar’s Snowflake model evaluation and Twitch serving work cover the optimization and production-serving functions of Isoquant’s product, and YC lists Brad Flora as primary partner ([Launch YC](https://www.ycombinator.com/launches/Xcn-isoquant-self-optimizing-inference-cloud-for-4x-faster-open-models), [YC directory](https://www.ycombinator.com/companies/isoquant)).

## Key Risks

- **Performance across workloads:** [Inferred]: Latency and throughput gains can vary with model, traffic, and hardware, so Isoquant takes customer workloads and performance targets for tuning and makes serving performance conditional on workload and infrastructure in its terms ([Launch YC](https://www.ycombinator.com/launches/Xcn-isoquant-self-optimizing-inference-cloud-for-4x-faster-open-models), [Isoquant terms](https://isoquant.ai/terms)).
- **Provider switching:** [Inferred]: OpenAI-compatible endpoints reduce migration work, making it easier for customers to move the same workload when another host offers better pricing or latency ([Isoquant API docs](https://isoquant.ai/docs), [Baseten Model APIs](https://www.baseten.co/products/model-apis/)).
- **Data-retention requirements:** Isoquant’s policy permits prompt and output retention outside qualifying requests and provides a header that rejects requests when zero retention cannot be honored ([Isoquant privacy policy, Nov 2026](https://isoquant.ai/privacy)).
- **Name collision:** A separate 2026 paper uses “IsoQuant” for a KV-cache compression method, and Dealroom’s profile attributes that method to the startup ([Zhongping Ji, arXiv, Mar 2026](https://arxiv.org/abs/2603.28430), [Dealroom](https://app.dealroom.co/companies/isoquant)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader AI inference software market forecast of $21.1B in 2026, with 21.1% CAGR through 2033 ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/ai-inference-software-market-report)) |
| SAM | No public data found |
| Traction | Inference cloud: 18B tokens in the first 24 hours ([CEO on X via Teapawt, Sep 2026](https://www.teapaw.org/isoquantai)), 1.5T+ tokens, 1,000+ customers, 40% reported weekly growth ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Xcn-isoquant-self-optimizing-inference-cloud-for-4x-faster-open-models)). Prior product Agent FM: 410 engineers, 60+ paying ([Agent FM Launch YC, Aug 2026](https://www.ycombinator.com/launches/SQ0-agent-fm-one-group-chat-to-hear-and-steer-your-coding-agents)) |
| Revenue Signal | Per million tokens, input / cached input / output: GLM‑5.3‑Flash $0.07 / $0.025 / $0.15 and DeepSeek V4.1 Flash 1017 Fast $0.035 / $0.005 / $0.37 ([Isoquant pricing, Nov 2026 snapshot](https://isoquant.ai/#models)) |
| Founders | Aniket Deshpande (CEO), Meta inference and Instagram. Mugdhaa Patankar (CTO), Snowflake AI tooling and Twitch video infrastructure ([YC directory](https://www.ycombinator.com/companies/isoquant)) |
| Competitors | Together AI (~$1.33B raised, ~$1B estimated annualized revenue, agent-tuned dedicated inference) ([Sacra](https://sacra.com/c/together-ai/), [Together AI](https://www.together.ai/polymorphic-inference)); Fireworks AI (>$1.8B raised, >$1B annualized revenue, self-serve fine-tuning) ([Sacra](https://sacra.com/c/fireworks-ai/), [Fireworks](https://fireworks.ai/blog/fireworks-series-d-funding)); Baseten ($2.085B raised, ~$600M reported annualized revenue, Truss model packaging) ([Revenue Memo](https://www.revenuememo.com/p/baseten-funding), [Baseten](https://www.baseten.co/platform/model-management/)) |
| Moat Signals | 452 ms median time to first token and 158.9 median output tokens per second on GLM‑5.3‑Flash ([Isoquant benchmark, Nov 2026 snapshot](https://isoquant.ai/#models)) |
| Risk Factors | Workload-dependent performance ([Isoquant terms](https://isoquant.ai/terms)), direct overlap in agent-tuned serving ([Together AI](https://www.together.ai/polymorphic-inference)), route-specific zero retention ([Isoquant privacy policy](https://isoquant.ai/privacy)) |
| Founder Reach | Aniket Deshpande: X 395, LinkedIn 21K, prior-product repo 42 stars ([Teapawt](https://www.teapaw.org/anideshp), [LinkedIn](https://www.linkedin.com/in/anideshp), [VibeIndex](https://vibeindex.dev/tools/agent-fm/), Nov 2026 snapshots). Mugdhaa Patankar: LinkedIn 2K ([LinkedIn, Nov 2026](https://www.linkedin.com/in/mugdhaa-patankar)) |
| Distribution Signals | Self-serve API signup ([Isoquant docs](https://isoquant.ai/docs)), 1,172 LinkedIn followers and 514 X followers ([LinkedIn](https://www.linkedin.com/company/isoquant-ai), [Teapawt X mirror](https://teapawt.org/isoquant_labs?cursor=DAAHCgABHXH2Twv___YLAAIAAAATMjEwNDA5MjEzNjg1NzY0MTEzOQgAAwAAAAIAAA), Nov 17, 2026 snapshots) |
| Emails | founders@isoquant.ai, shared sales and privacy contact ([Isoquant contact](https://isoquant.ai/contact), [privacy policy](https://isoquant.ai/privacy)); founders@agentfm.ai, shared inbox for prior product Agent FM ([Agent FM](https://www.agentfm.ai/)) |
