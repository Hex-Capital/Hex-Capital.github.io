# Hopper

> The Inference cloud for voice 

| Field | Value |
|-------|-------|
| Website | https://withhopper.com/code |
| YC Page | https://www.ycombinator.com/companies/hopper |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/hopper)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Infrastructure, AI |
| YC Partner | Charlie Warren ([Y Combinator](https://www.ycombinator.com/companies/hopper)) |
| Emails | founders@withhopper.com, shared inbox for general, privacy and security inquiries ([Hopper](https://withhopper.com/), [Privacy Policy](https://withhopper.com/privacy), [Trust Center](https://withhopper.com/trust)) |

## The Idea

- **Problem:** Voice-agent developers face delays across transcription, language-model generation and speech synthesis, and use interim transcripts, cached audio and filler greetings to reduce the wait callers perceive ([Launch YC](https://www.ycombinator.com/launches/WUF-hopper-fast-open-source-inference-for-real-time-agents)).
- **Approach:** Hopper deploys optimized open-weight speech and language models, builds evaluations with customers and tunes models on authorized production calls before testing them against live traffic ([Launch YC](https://www.ycombinator.com/launches/WUF-hopper-fast-open-source-inference-for-real-time-agents), [Hopper Privacy Policy](https://withhopper.com/privacy)).
- **Differentiation:** Hopper offers customer-specific tuning across the voice pipeline, including Qwen speech synthesis as an alternative to ElevenLabs’ models, Nemotron transcription as an alternative to Deepgram’s Nova and Gemma as an alternative to OpenAI’s GPT-4.1 ([Launch YC](https://www.ycombinator.com/launches/WUF-hopper-fast-open-source-inference-for-real-time-agents)).
- **Business Model:** Voice API usage draws on prepaid credits, with Gemma input at $0.30 per million tokens and Qwen speech synthesis at $0.30 per generated hour, while Hopper Code offers DeepSeek access in $20, $50 and $200 monthly tiers ([Hopper model catalog, Nov 2026](https://docs.withhopper.com/models), [Hopper Code, Nov 2026](https://withhopper.com/code)).
- **TAM/SAM:** Meticulous Research estimates the broader enterprise voice AI market at $12–17 billion in 2026 with 24% projected CAGR through 2033, including applications and implementation services, and no public TAM/SAM data was found for managed open-weight voice inference specifically ([Meticulous Research, 2026](https://www.meticulousresearch.com/meticulous-next/voice-ai-outlook-2026-2033)).
- **GTM / Distribution:** Hopper expanded from voice serving into customer-specific post-training by September, launched its voice offering publicly on October 26 and was selling Hopper Code through integrations with OpenCode, Hermes Agent and Pi by November ([Neon, Sep 2026](https://neon.fund/blog/why-neon-invested-in-hopper/), [Katta’s launch post, Oct 2026, X mirror](https://nitter.gq/PavanKatta1998), [Hopper Code, Nov 2026](https://withhopper.com/code)).

## Defensibility

- **Moat today:** Hopper documents custom inference kernels and a cache-aware request router it built after its initial serving stack yielded lower cache hit rates ([Hopper engineering](https://withhopper.com/blog/gemma-tpu-megakernel), [Pedapudi, Nov 2026, X mirror](https://nitter.gq/jashwanth_p/article/2120485592308101335)).
- **Future moat:** [Inferred]: Customer-specific evaluations and tuned models could raise switching costs if customers must reproduce that work elsewhere, with retention and migration costs still unverified ([Neon](https://neon.fund/blog/why-neon-invested-in-hopper/)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Daily documents how developers can self-host its open-weight voice-agent model, and Baseten offers managed deployment of open speech models with regional co-location ([Daily](https://www.daily.co/blog/announcing-pipecat-phonellm-alpha-1/), [Baseten](https://www.baseten.co/blog/introducing-the-baseten-voice-agent-stack/)).

## Market & Traction

- **Traction signals:**
  - More than 10 billion tokens per day within four weeks across Hopper’s inference platform, including one signed customer that moved its traffic into production ([Pedapudi, Nov 11, 2026, X mirror](https://nitter.gq/jashwanth_p/article/2120485592308101335)).
  - Hopper Code used by developers in 44 countries ([Hopper Code, Nov 2026](https://withhopper.com/code)).
  - One unnamed gaming customer requested speech-synthesis tuning for character accents and emotion ([Hopper Audio Perception-1 announcement, Oct 2026](https://withhopper.com/blog/audio-perception-1)).
  - PhoneLLM hosting from its first day of availability, according to Hopper ([Hopper LinkedIn, Sep 2026](https://www.linkedin.com/company/hopper-inference/)).
  - 338 LinkedIn followers and 149 X followers ([Hopper LinkedIn, Nov 2026](https://www.linkedin.com/company/hopper-inference/), [Hopper X mirror, Nov 2026](https://www.xitter.gq/hopper_research)).
  - Voice launch coverage in Reveneau and zero open roles on YC’s job board ([Reveneau, Oct 2026](https://reveneau.com/ainews/hopper-yc-fall-2026-voice-agent-inference-production-traces), [YC Jobs, Nov 2026](https://www.ycombinator.com/companies/hopper/jobs)).
- **Competitors:**
  - **ElevenLabs** ($781M raised as of February 2026, over $500M ARR by April 2026): develops its own speech models and deploys agents through ElevenAgents, with a $500M Series D led by Sequoia in February and a third close announced in May ([ElevenLabs Series D](https://elevenlabs.io/blog/series-d), [ElevenLabs ARR update](https://elevenlabs.io/blog/500m-arr-and-new-investors)).
  - **Deepgram** (over $215M raised, estimated $100M annualized revenue in August 2026): sells its own speech APIs and agent stack, with a $130M January 2026 Series C led by AVP and an August extension from EDBI of undisclosed size ([Sacra](https://sacra.com/c/deepgram/), [Deepgram Series C](https://deepgram.com/blog/press-release-deepgram-raises-series-c), [Deepgram EDBI announcement](https://deepgram.com/blog/voice-ai-infrastructure-leader-deepgram-to-establish-apac-headquarters-in-singapore-following-strategic-investment-from-edbi)).
  - **Cartesia** ($191M raised, revenue unknown): builds Sonic speech synthesis, Ink transcription and an agent platform, with a $100M round in October 2025 led by Kleiner Perkins ([Cartesia](https://www.cartesia.ai/), [Karan Goel](https://www.linkedin.com/posts/krandiash_weve-raised-100m-from-kleiner-perkins-activity-7388968595499728896-0UJn), [Contrary Research](https://research.contrary.com/company/cartesia)).
  - **Baseten** (approximately $2.085B raised, estimated $600M annualized revenue in March 2026): hosts models across workloads and offers a co-located voice-agent stack, with a $1.5B June 2026 Series F led by Altimeter, Conviction and Spark, with Sands and Wellington as co-leads ([Sacra](https://sacra.com/c/baseten/), [Baseten Series F](https://www.baseten.co/blog/announcing-our-series-f/), [Baseten Voice Agent Stack](https://www.baseten.co/blog/introducing-the-baseten-voice-agent-stack/)).
- **Why now:** [Inferred]: Daily’s August 2026 release of open-weight PhoneLLM made a model tuned for phone-agent workloads available for independent hosting and customization ([Daily, Aug 2026](https://www.daily.co/blog/announcing-pipecat-phonellm-alpha-1/)).

## Founders & Team

- **Pavan Katta (Founder/CEO):**
  - **Background:** Studied electrical engineering at IIT Madras, built Bing search infrastructure, was the first hire at Dashworks before its acquisition by HubSpot, and worked on voice inference and post-training at Salient (direct business email: No public data found) ([YC founder profile](https://www.ycombinator.com/founders/pavan-katta), [Neon](https://neon.fund/blog/why-neon-invested-in-hopper/), [HubSpot Form 10-K](https://ir.hubspot.com/static-files/efb8d22a-4fcd-4c15-b154-7cf59069c05c)).
  - **Twitter/X:** @PavanKatta1998, 588 followers ([X mirror, Nov 2026](https://nitter.gq/PavanKatta1998)).
  - **LinkedIn:** Hopper affiliation and 3K followers visible, headline unavailable ([LinkedIn, via search snippet](https://www.linkedin.com/in/pavankatta1998)).
  - **GitHub:** @pavanyellow, `alphasae` (0 stars) ([GitHub, Nov 2026](https://github.com/pavanyellow/alphasae)).
- **Jashwanth Pedapudi (Founder/CTO):**
  - **Background:** Studied electrical engineering at IIT Madras, built payments and real-time data infrastructure at Uber, wrote Quest 3 inference kernels at Meta Reality Labs, and co-founded speech-serving project Monosemantic (direct business email: No public data found) ([YC founder profile](https://www.ycombinator.com/founders/jashwanth-pedapudi), [Pedapudi’s website](https://jashwanthpedapudi.com/), [Hopper](https://withhopper.com/)).
  - **Twitter/X:** @jashwanth_p, 95 followers ([X mirror, Nov 2026](https://nitter.gq/jashwanth_p)).
  - **LinkedIn:** Hopper affiliation and 3K followers visible, headline unavailable ([LinkedIn, Nov 2026](https://www.linkedin.com/in/jashwanth12)).
  - **GitHub:** @jashwanth-12, `hopper-client` (0 stars) ([GitHub, Nov 2026](https://github.com/jashwanth-12/hopper-client)).
- **Co-founder relationship:** Katta and Pedapudi met in high school and studied together at IIT Madras ([Hopper](https://withhopper.com/)).
- **Founder-market fit:** Katta’s production voice-inference work and Pedapudi’s kernel engineering match Hopper’s serving and tuning work, with backing from Y Combinator, Neon and Turing CTO Vijay Krishnan ([Hopper](https://withhopper.com/), [Neon investment announcement, Sep 2026](https://neon.fund/blog/why-neon-invested-in-hopper/)).

## Key Risks

- **Latency under load:** Pedapudi reports that p95 latency on one deployment rose from about 11 to 42 seconds under higher load, with spare GPUs and customer-side overflow routing used to absorb bursts ([Pedapudi, Nov 2026, X mirror](https://nitter.gq/jashwanth_p/article/2120485592308101335)).
- **Training-data access:** Tuning on production calls depends on prior written customer consent and agreed retention terms, while standard serving defaults to zero content retention ([Hopper Privacy Policy](https://withhopper.com/privacy)).
- **Bundled substitutes:** Deepgram’s announced acquisition of Daily combines speech APIs with communications infrastructure and the Pipecat framework, giving developers a route to source more of the voice stack from one vendor ([Deepgram, Oct 2026](https://deepgram.com/blog/daily-pipecat-deepgram)).
- **Name overlap:** Hopper shares its name with the travel-booking company, making unqualified search results and press mentions ambiguous ([YC company listing](https://www.ycombinator.com/companies/hopper), [Hopper travel company](https://hopper.com/about)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader enterprise voice AI: $12–17B in 2026, 24% projected CAGR through 2033 ([Meticulous Research](https://www.meticulousresearch.com/meticulous-next/voice-ai-outlook-2026-2033)). |
| SAM | No public data found |
| Traction | Over 10B tokens/day platform-wide, one signed production customer ([Pedapudi, Nov 2026, X mirror](https://nitter.gq/jashwanth_p/article/2120485592308101335)); Hopper Code used across 44 countries ([Hopper Code, Nov 2026](https://withhopper.com/code)). |
| Revenue Signal | Initial users spent under $1 as reported by the CTO ([Pedapudi, Nov 2026, X mirror](https://nitter.gq/jashwanth_p/article/2120485592308101335)); prepaid voice API, Gemma input $0.30/million tokens ([Hopper model catalog](https://docs.withhopper.com/models)); Hopper Code $20/$50/$200 monthly ([Hopper Code](https://withhopper.com/code)). |
| Founders | Pavan Katta, CEO: IIT Madras, Salient voice inference, Dashworks ([YC](https://www.ycombinator.com/founders/pavan-katta)); Jashwanth Pedapudi, CTO: IIT Madras, Meta inference kernels, Uber infrastructure ([YC](https://www.ycombinator.com/founders/jashwanth-pedapudi)). |
| Competitors | ElevenLabs ($781M raised as of Feb 2026, over $500M ARR, proprietary speech and agents) ([ElevenLabs funding](https://elevenlabs.io/blog/series-d), [ARR](https://elevenlabs.io/blog/500m-arr-and-new-investors)); Deepgram (over $215M raised, estimated $100M annualized revenue, speech and agent APIs) ([Sacra](https://sacra.com/c/deepgram/)); Cartesia ($191M raised, revenue unknown, Sonic/Ink/Line) ([Sacra](https://sacra.com/c/cartesia/)); Baseten (about $2.085B raised, estimated $600M annualized revenue, multi-workload inference) ([Sacra](https://sacra.com/c/baseten/)). |
| Moat Signals | Custom inference kernels and cache-aware routing ([Hopper engineering](https://withhopper.com/blog/gemma-tpu-megakernel), [Pedapudi, Nov 2026, X mirror](https://nitter.gq/jashwanth_p/article/2120485592308101335)). |
| Risk Factors | Latency during bursts ([Pedapudi](https://nitter.gq/jashwanth_p/article/2120485592308101335)), written consent for training data ([Hopper Privacy Policy](https://withhopper.com/privacy)), competing voice-stack bundles ([Deepgram](https://deepgram.com/blog/daily-pipecat-deepgram)). |
| Founder Reach | Katta: X 588 ([X mirror](https://nitter.gq/PavanKatta1998)), LinkedIn 3K ([LinkedIn, via search snippet](https://www.linkedin.com/in/pavankatta1998)), `alphasae` 0 stars ([GitHub](https://github.com/pavanyellow/alphasae)); Pedapudi: X 95 ([X mirror](https://nitter.gq/jashwanth_p)), LinkedIn 3K ([LinkedIn](https://www.linkedin.com/in/jashwanth12)), `hopper-client` 0 stars ([GitHub](https://github.com/jashwanth-12/hopper-client)). |
| Distribution Signals | Launch YC, Oct 2026 ([Launch YC](https://www.ycombinator.com/launches/WUF-hopper-fast-open-source-inference-for-real-time-agents)); Pipecat integration ([GitHub](https://github.com/hopper-inc/pipecat-hopper)); OpenCode, Hermes Agent and Pi integrations ([Hopper Code](https://withhopper.com/code)); 338 LinkedIn and 149 X followers ([LinkedIn](https://www.linkedin.com/company/hopper-inference/), [X mirror](https://www.xitter.gq/hopper_research), Nov 2026). |
| Emails | founders@withhopper.com, shared inbox ([Hopper](https://withhopper.com/), [Privacy Policy](https://withhopper.com/privacy), [Trust Center](https://withhopper.com/trust)). |
