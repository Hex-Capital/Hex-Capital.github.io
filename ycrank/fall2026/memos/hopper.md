# Hopper

> Inference and post-training for realtime agents

| Field | Value |
|-------|-------|
| Website | https://withhopper.com |
| YC Page | https://www.ycombinator.com/companies/hopper |
| Batch | Fall 2026 ([YC profile](https://www.ycombinator.com/companies/hopper)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Infrastructure, AI |
| YC Partner | Charlie Warren ([YC profile](https://www.ycombinator.com/companies/hopper)) |
| Emails | founders@withhopper.com ([Hopper website](https://withhopper.com)) |

## The Idea

- **Problem:** Voice-agent developers face response delays and inference costs when combining speech recognition, language models, and speech synthesis, currently using proprietary APIs, transcript streaming, caching, and filler greetings to reduce perceived latency ([Hopper’s YC launch, Oct 2026](https://www.ycombinator.com/launches/WUF-hopper-fast-open-source-inference-for-real-time-agents)).
- **Approach:** Hopper deploys open-weight speech and language models, builds evaluations with customers, and post-trains models on authorized production calls before serving them against live traffic ([YC launch](https://www.ycombinator.com/launches/WUF-hopper-fast-open-source-inference-for-real-time-agents)).
- **Differentiation:** Hopper claims Gemma 4 inference at 80ms time to first token, Qwen 3 TTS at 150ms time to first audio, and lower costs than GPT-4.1, ElevenLabs, and Deepgram respectively; these are company-reported comparisons ([YC launch](https://www.ycombinator.com/launches/WUF-hopper-fast-open-source-inference-for-real-time-agents)).
- **Business Model:** Consumption billing uses prepaid credits, optional automatic top-ups, and introductory credits, while the homepage advertises Gemma 4 31B input pricing of $0.30 per million tokens ([Terms, Oct 2026](https://withhopper.com/terms); [Hopper website, accessed Oct 27, 2026](https://withhopper.com)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Distribution includes founder engineering consultations, developer documentation, and a merged integration making Hopper selectable within Dograh ([Hopper consultation page](https://withhopper.com/talk-to-us); [Documentation](https://docs.withhopper.com); [Dograh integration, Oct 1, 2026](https://github.com/dograh-hq/dograh/pull/831)).

## Defensibility

- **Moat today:** Public technical artifacts include a voice-specific client that maintains reusable HTTP/2 connections to reduce connection overhead, but no exclusive technology rights are established by that disclosure ([Hopper engineering article, June 2026](https://withhopper.com/blog/llm-client-voice-agents)).
- **Future moat:** [Inferred]: Customer-specific evaluations and model tuning could create integration and retraining costs, although training requires separately negotiated consent and therefore does not establish an automatic shared-data advantage ([Privacy policy, Oct 26, 2026](https://withhopper.com/privacy)).
- **Market structure:** [Inferred]: Speech vendors selling complete agents may compete with their infrastructure customers, but this channel conflict does not prevent copying Hopper’s offering ([Cartesia products](https://www.cartesia.ai/)).
- **Commoditization risk:** Fireworks already offers customer-data specialization and inference, while Hopper exposes an OpenAI-compatible API, providing overlapping capabilities and a standardized integration interface ([Fireworks, July 2026](https://fireworks.ai/blog/fireworks-series-d-funding); [Hopper documentation](https://docs.withhopper.com)).

## Market & Traction

- **Traction signals:**
  - 215 company LinkedIn followers (public page accessed Oct 27, 2026; [LinkedIn](https://www.linkedin.com/company/hopper-inference/)).
  - 54 company X followers in an indexed snapshot, rather than a verified live count ([TwStalker, Oct 2026, via search snippet](https://free-wifi-password-recovery.twstalker.com/hopper_research)).
  - Hopper provider integration merged into Dograh on October 1, 2026 ([GitHub](https://github.com/dograh-hq/dograh/pull/831)).
  - Company included in “Y Combinator Launches of the Week” ([Menlo Times, Oct 27, 2026](https://www.menlotimes.com/post/y-combinator-launches-of-the-week-190)).
  - Backing identified from YC and Vijay Krishnan, Turing’s CTO, with additional unnamed backers affiliated with xAI, Stripe, and Rubrik ([Hopper website, Oct 2026](https://withhopper.com)).
  - Zero active YC job postings ([YC jobs, accessed Oct 27, 2026](https://www.ycombinator.com/companies/hopper/jobs)).
- **Competitors:**
  - **Deepgram** (>$215M raised; $100M annualized revenue estimated by Sacra for August 2026): offers its own speech models and complete Voice Agent API, versus Hopper’s open-weight optimization; its announced $130M Series C was led by AVP in January 2026 ([Sacra](https://sacra.com/c/deepgram/); [Deepgram announcement](https://deepgram.com/learn/press-release-deepgram-raises-series-c)).
  - **Cartesia** ($191M reported raised; revenue unknown): develops Sonic and Ink speech models plus managed agents, versus Hopper’s serving and post-training approach; its latest reported $100M round in October 2025 was led by Kleiner Perkins ([Sacra](https://sacra.com/c/cartesia/); [Contrary Research](https://research.contrary.com/company/cartesia); [Cartesia products](https://www.cartesia.ai/)).
  - **Fireworks** (>$1.8B announced financing, including secondary transactions; >$1B annualized revenue run rate): specializes models across enterprise workloads rather than focusing exclusively on realtime agents; its $1.505B Series D in July 2026 was led by Atreides Management, Index Ventures, and TCV ([Series C announcement](https://fireworks.ai/blog/series-c); [Series D announcement](https://fireworks.ai/blog/fireworks-series-d-funding)).
- **Why now:** [Inferred]: The availability of open speech models such as Nemotron and Qwen during 2026 creates demand for production streaming infrastructure that model releases alone do not supply ([Pedapudi’s engineering account, April 2026](https://jashwanthpedapudi.com/writing/voice-agent-journey)).

## Founders & Team

- **Pavan Katta (Founder/CEO):**
  - Background: Electrical engineering at IIT Madras and prior post-training leadership at Salient ([YC profile](https://www.ycombinator.com/companies/hopper)).
  - Twitter/X: @PavanKatta1998; direct follower count not retrievable, with an indexed snapshot reporting 128 followers ([TwStalker, Oct 2026, via search snippet](https://es.twstalker.com/_yhshin)).
  - LinkedIn: Profile identified with Hopper; headline not retrievable; indexed profile reports 3K followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/pavankatta1998)).
  - GitHub: @pavanyellow; `feature-steering`, an LLM activation-steering project, has 1 star ([GitHub, Oct 27, 2026](https://github.com/pavanyellow/feature-steering)).
- **Jashwanth Pedapudi (Founder/CTO):**
  - Background: Electrical engineering at IIT Madras, inference-kernel work at Meta Reality Labs, and earlier Uber payments and streaming-infrastructure work ([YC profile](https://www.ycombinator.com/companies/hopper); [Personal website](https://jashwanthpedapudi.com/)).
  - Twitter/X: @jashwanth_p; direct follower count not retrievable, with an indexed snapshot reporting 61 followers ([TwStalker, Oct 2026, via search snippet](https://www30.twstalker.com/jashwanth_p)).
  - LinkedIn: Company-linked profile at `/in/jashwanth12`; headline and follower count not retrievable ([Hopper team links](https://withhopper.com)).
  - GitHub: @jashwanth-12; `hopper-client`, a voice-agent client package, has 0 stars ([GitHub, Oct 27, 2026](https://github.com/jashwanth-12/hopper-client)).
- **Co-founder relationship:** The founders say they met in high school more than 13 years ago and subsequently studied together at IIT Madras ([Hopper website](https://withhopper.com)).
- **Founder-market fit:** Katta’s production voice-inference experience and Pedapudi’s inference-kernel work correspond to Hopper’s serving workload, with Vijay Krishnan named as an investor ([Hopper team description](https://withhopper.com)).

## Key Risks

- **Technical performance transfer:** [Inferred]: Advertised model latency may vary with geography, connection reuse, and concurrency; Hopper’s own engineering article documents workload-dependent latency and provides a reusable-connection client as mitigation ([Engineering article, June 2026](https://withhopper.com/blog/llm-client-voice-agents)).
- **Overlapping specialization platforms:** [Inferred]: Fireworks’ existing customer-data training and serving capabilities create substitution risk for Hopper’s post-training offering ([Fireworks, July 2026](https://fireworks.ai/blog/fireworks-series-d-funding)).
- **Training-data permissions:** [Inferred]: Production-trace customization depends on customers granting training rights; Hopper requires prior written consent and separates logging permission from training authorization ([Privacy policy](https://withhopper.com/privacy)).
- **Enterprise procurement:** [Inferred]: Customers requiring completed security audits may defer adoption while SOC 2 Type 1 and Type 2 remain in progress, with Oneleet identified as the compliance provider ([Trust center](https://withhopper.com/trust)).
- **Name ambiguity:** Hopper shares its name with a separate travel company, requiring domain and founder checks when attributing funding or usage figures ([Hopper Inference](https://withhopper.com); [Travel Hopper newsroom](https://media.hopper.com/news)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 215 LinkedIn followers ([LinkedIn, Oct 2026](https://www.linkedin.com/company/hopper-inference/)); Dograh integration merged October 1, 2026 ([GitHub](https://github.com/dograh-hq/dograh/pull/831)) |
| Revenue Signal | $0.30 per million Gemma 4 31B input tokens ([Hopper website, Oct 2026](https://withhopper.com)); prepaid usage credits ([Terms](https://withhopper.com/terms)) |
| Founders | Pavan Katta, CEO: IIT Madras, Salient post-training; Jashwanth Pedapudi, CTO: IIT Madras, Meta inference kernels ([YC](https://www.ycombinator.com/companies/hopper)) |
| Competitors | Deepgram (>$215M raised, $100M estimated annualized revenue, speech models; [Sacra](https://sacra.com/c/deepgram/)); Cartesia ($191M reported raised, revenue unknown, proprietary speech stack; [Sacra](https://sacra.com/c/cartesia/)); Fireworks (>$1.8B announced financing including secondary, >$1B annualized revenue, broader specialization platform; [Series C](https://fireworks.ai/blog/series-c), [Series D](https://fireworks.ai/blog/fireworks-series-d-funding)) |
| Moat Signals | Voice-specific HTTP/2 connection optimization ([Hopper engineering](https://withhopper.com/blog/llm-client-voice-agents)) |
| Risk Factors | Overlapping training/serving capabilities ([Fireworks](https://fireworks.ai/blog/fireworks-series-d-funding)); SOC 2 audits in progress ([Hopper Trust](https://withhopper.com/trust)) |
| Founder Reach | Katta: LinkedIn 3K followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/pavankatta1998)), feature-steering 1 star ([GitHub](https://github.com/pavanyellow/feature-steering)); Pedapudi: hopper-client 0 stars ([GitHub](https://github.com/jashwanth-12/hopper-client)) |
| Distribution Signals | Dograh integration ([GitHub, Oct 2026](https://github.com/dograh-hq/dograh/pull/831)); launch-roundup coverage ([Menlo Times, Oct 2026](https://www.menlotimes.com/post/y-combinator-launches-of-the-week-190)) |
| Emails | founders@withhopper.com ([Hopper website](https://withhopper.com)) |
