# isoquant

> Self-optimizing inference cloud for faster, cheaper AI

| Field | Value |
|-------|-------|
| Website | https://isoquant.ai/ |
| YC Page | https://www.ycombinator.com/companies/isoquant |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/isoquant)) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | AI |
| YC Partner | Brad Flora ([YC](https://www.ycombinator.com/companies/isoquant)) |
| Emails | founders@isoquant.ai ([website](https://isoquant.ai/contact)); founders@agentfm.ai, prior product ([YC launch](https://www.ycombinator.com/launches/SQ0-agent-fm-one-group-chat-to-hear-and-steer-your-coding-agents)) |

## The Idea

- **Problem:** Production AI developers face inference costs and latency, using proprietary model APIs or operating open-model infrastructure themselves ([Together AI, July 2026](https://www.together.ai/blog/announcing-our-series-c)).
- **Approach:** Isoquant combines model-specific execution tuning, GPU kernel and memory optimization, speculative decoding, caching, and workload orchestration with continuous model training and evaluation ([Isoquant website, accessed October 2026](https://isoquant.ai/)).
- **Differentiation:** Isoquant reports GLM-5.3-Flash median time to first token of 452 ms versus Together’s 890 ms, Fireworks’ 1,550 ms, and Baseten’s 1,320 ms in its own comparison ([Isoquant website, October 2026](https://isoquant.ai/)).
- **Business Model:** Prepaid consumption billing lists GLM-5.3-Flash at $0.07 input, $0.025 cached input, and $0.15 output per million tokens, with negotiated agreements also supported ([website](https://isoquant.ai/), [terms](https://isoquant.ai/terms), October 2026).
- **TAM/SAM:** Grand View Research estimates the broader AI inference software market at $21.1B in 2026, growing at 21.1% CAGR through 2033; Isoquant-specific SAM: No public data found ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/ai-inference-software-market-report)).
- **GTM / Distribution:** Self-service API onboarding and workload consultation accompany developer-compatible integrations, while the privacy policy documents Reddit and X advertising measurement for signups and credit purchases ([API documentation](https://isoquant.ai/docs), [contact](https://isoquant.ai/contact), [privacy policy, October 2026](https://isoquant.ai/privacy)).

## Defensibility

- **Moat today:** A company-published banking experiment reports a trained Qwen3-8B specialist achieving 91.8% accuracy versus 74.7% for GPT-5.4 mini, with estimated inference cost reduced 91.7%, demonstrating workload-specific optimization rather than exclusive IP ([Isoquant case study](https://isoquant.ai/case-studies/banking-intent-classification)).
- **Future moat:** [Inferred]: Accumulated workload evaluations and optimization configurations could improve specialization, but access to customer inputs for training requires written consent under the published policy ([Isoquant privacy policy, October 2026](https://isoquant.ai/privacy)).
- **Market structure:** [Inferred]: No structural barrier identified at this stage because competing platforms already combine open-model serving, customization, and inference optimization ([Together AI](https://www.together.ai/blog/announcing-our-series-c), [Fireworks](https://fireworks.ai/news/fireworks-raises-1-5-billion-series-d)).
- **Commoditization risk:** [Inferred]: Existing inference providers could reproduce overlapping capabilities, and API compatibility reduces integration barriers to switching, although performance engineering still requires implementation work ([Isoquant documentation](https://isoquant.ai/docs), [Together AI](https://www.together.ai/blog/announcing-our-series-c)).

## Market & Traction

- **Traction signals:**
  - Current product: CEO-reported 18B tokens served within 24 hours of launch ([Aniket Deshpande, LinkedIn, September 2026](https://www.linkedin.com/posts/anideshp_from-0-to-18-billion-tokens-served-within-activity-7509745806061727744-fByJ)).
  - Current product: CEO-reported 1.2T tokens in one month and 1,000+ customers, without a paying-customer breakdown ([YC LinkedIn repost, retrieved October 2026, via search snippet](https://in.linkedin.com/school/y-combinator/)).
  - Company LinkedIn: 754 followers ([LinkedIn, accessed October 2026](https://www.linkedin.com/company/isoquant-ai)).
  - Customer testimonial: Sho Kaneko reports approximately twice-as-fast agent inference after switching to Isoquant ([company LinkedIn repost, accessed October 2026](https://www.linkedin.com/company/isoquant-ai)).
  - Prior product—Agent FM: 410 engineers, 60+ paying users, 120,000+ audio updates, and 1.2 hours daily average usage; these belong to the agent-monitoring application ([YC launch, accessed October 2026](https://www.ycombinator.com/launches/SQ0-agent-fm-one-group-chat-to-hear-and-steer-your-coding-agents)).
  - Product transition: September inference-launch messaging describes commercializing optimizations developed for Agent FM, while Isoquant remains operated by Agent FM Inc. ([company LinkedIn](https://www.linkedin.com/company/isoquant-ai), [terms, September 2026](https://isoquant.ai/terms)).
  - Press coverage: RuntimeWire covered the inference launch on September 24, 2026 ([RuntimeWire](https://runtimewire.com/article/isoquant-launches-inference-cloud-glm-53-flash-pricing)).
  - Hiring: Zero current YC job postings ([YC jobs, October 2026](https://www.ycombinator.com/companies/isoquant/jobs)).
- **Competitors:**
  - **Together AI** (~$1,330M raised; estimated $1,000M annualized revenue, February 2026): combines inference with GPU rentals and training; latest $800M Series C in July 2026 led by Aramco Ventures ([Sacra](https://sacra.com/c/together-ai/), [company announcement](https://www.together.ai/blog/announcing-our-series-c)).
  - **Fireworks** (~$1,800M raised; over $1,000M annualized revenue, July 2026): offers enterprise model customization and serving; latest $1,505M Series D on July 16, 2026 led by Atreides, Index, and TCV ([Contrary](https://research2.contrary.com/company/fireworks-ai), [company announcement](https://fireworks.ai/news/fireworks-raises-1-5-billion-series-d)).
  - **Baseten** (~$2,085M raised; estimated $600M annualized revenue, March 2026): combines inference with embedded customer engineering and post-training; latest $1,500M Series F on June 22, 2026 led by Altimeter, Conviction, and Spark ([Sacra](https://sacra.com/c/baseten/), [company announcement](https://www.baseten.co/blog/announcing-our-series-f/)).
- **Why now:** Baseten identifies the recent DeepSeek, Qwen, and GPT-OSS open-model releases and reinforcement learning customization as catalysts for specialized production inference ([Baseten, January 2026](https://www.baseten.co/blog/announcing-baseten-s-300m-series-e/)).

## Founders & Team

- **Aniket Deshpande (Co-founder/CEO):**
  - Background: Previously Meta Superintelligence Labs, Instagram, Adobe, SAP, and Oracle; worked on agent orchestration, reinforcement learning infrastructure, fine-tuning, and Llama training data; ContactOut lists an MS from San José State and BS from Savitribai Phule Pune University ([YC profile](https://www.ycombinator.com/founders/aniket-deshpande), [YC launch](https://www.ycombinator.com/launches/SQ0-agent-fm-one-group-chat-to-hear-and-steer-your-coding-agents), [ContactOut](https://contactout.com/Aniket-Deshpande-38645508)).
  - Twitter/X: @anideshp; count not retrievable ([YC profile](https://www.ycombinator.com/founders/aniket-deshpande)).
  - LinkedIn: Profile found; headline not retrievable; 14,447 followers displayed on his public post ([LinkedIn, October 2026](https://www.linkedin.com/posts/anideshp_from-0-to-18-billion-tokens-served-within-activity-7509745806061727744-fByJ)).
  - GitHub: No public repos found.
- **Mugdhaa Patankar (Co-founder/CTO):**
  - Background: UC Irvine alumna; previously Snowflake, Twitch, and AWS; led AI developer productivity at Snowflake and worked on live-video playback and distribution at Twitch ([YC profile](https://www.ycombinator.com/founders/mugdhaa-patankar), [YC launch](https://www.ycombinator.com/launches/SQ0-agent-fm-one-group-chat-to-hear-and-steer-your-coding-agents)).
  - Twitter/X: No public account found.
  - LinkedIn: Profile found; headline not retrievable; approximately 2K followers ([LinkedIn, retrieved October 2026, via search snippet](https://www.linkedin.com/in/mugdhaa-patankar)).
  - GitHub: No public repos found.
- **Co-founder relationship:** The founders report knowing each other for almost ten years before co-founding Agent FM in 2026 ([YC launch](https://www.ycombinator.com/launches/SQ0-agent-fm-one-group-chat-to-hear-and-steer-your-coding-agents)).
- **Founder-market fit:** [Inferred]: Their documented model infrastructure, evaluation, and distributed serving work relates to inference optimization; YC backing is confirmed, with Brad Flora assigned as partner ([YC](https://www.ycombinator.com/companies/isoquant)).

## Key Risks

- **Customer switching:** [Inferred]: Endpoint-compatible integration facilitates customer migration to competing providers as economics change ([Isoquant documentation](https://isoquant.ai/docs)).
- **Performance transfer:** [Inferred]: Banking results on 3,079 requests may not transfer across workloads; published terms explicitly make performance workload-dependent and promise no particular response speed ([case study](https://isoquant.ai/case-studies/banking-intent-classification), [terms](https://isoquant.ai/terms)).
- **Enterprise procurement:** [Inferred]: Buyers requiring completed assurance reviews may delay adoption while SOC 2 remains “in progress”; model-specific zero-retention controls provide a documented data-handling measure ([contact page](https://isoquant.ai/contact), [privacy policy](https://isoquant.ai/privacy)).
- **Name ambiguity:** An unrelated RNA-analysis project also uses IsoQuant, creating attribution risk for repository and download metrics ([project-maintained SourceForge page](https://sourceforge.net/projects/isoquant/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader inference software: $21.1B, 2026; 21.1% CAGR through 2033 ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/ai-inference-software-market-report)) |
| SAM | No public data found |
| Traction | Current: 1,000+ customers, 1.2T tokens/month, company-reported ([YC LinkedIn repost, October 2026, via search snippet](https://in.linkedin.com/school/y-combinator/)); prior Agent FM: 410 users, 60+ paying ([YC launch](https://www.ycombinator.com/launches/SQ0-agent-fm-one-group-chat-to-hear-and-steer-your-coding-agents)) |
| Revenue Signal | GLM-5.3-Flash: $0.07 input/$0.025 cached input/$0.15 output per million tokens ([Isoquant website, October 2026](https://isoquant.ai/)) |
| Founders | Aniket Deshpande, CEO: Meta AI infrastructure; Mugdhaa Patankar, CTO: Snowflake AI tooling, Twitch serving ([YC](https://www.ycombinator.com/companies/isoquant)) |
| Competitors | Together: ~$1,330M raised, estimated $1,000M annualized revenue, training/GPU rentals ([Sacra](https://sacra.com/c/together-ai/)); Fireworks: ~$1,800M raised, >$1,000M annualized revenue, enterprise customization ([Contrary](https://research2.contrary.com/company/fireworks-ai)); Baseten: ~$2,085M raised, estimated $600M annualized revenue, post-training services ([Sacra](https://sacra.com/c/baseten/)) |
| Moat Signals | Banking specialist: 91.8% accuracy versus 74.7% baseline ([Isoquant case study](https://isoquant.ai/case-studies/banking-intent-classification)) |
| Risk Factors | Workload-dependent performance, third-party infrastructure dependence ([terms](https://isoquant.ai/terms)); SOC 2 in progress ([website](https://isoquant.ai/contact)) |
| Founder Reach | Aniket: LinkedIn 14,447 ([LinkedIn, October 2026](https://www.linkedin.com/posts/anideshp_from-0-to-18-billion-tokens-served-within-activity-7509745806061727744-fByJ)); Mugdhaa: LinkedIn ~2K ([LinkedIn, via search snippet](https://www.linkedin.com/in/mugdhaa-patankar)) |
| Distribution Signals | LinkedIn 754 followers ([company LinkedIn, October 2026](https://www.linkedin.com/company/isoquant-ai)); Reddit/X advertising measurement ([privacy policy](https://isoquant.ai/privacy)) |
| Emails | founders@isoquant.ai ([contact](https://isoquant.ai/contact)); prior product: founders@agentfm.ai ([YC launch](https://www.ycombinator.com/launches/SQ0-agent-fm-one-group-chat-to-hear-and-steer-your-coding-agents)) |
