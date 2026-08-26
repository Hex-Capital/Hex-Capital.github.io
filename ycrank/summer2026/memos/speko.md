# Speko

> OpenRouter for voice AI

| Field | Value |
|-------|-------|
| Website | https://speko.ai/?utm_source=ycombinator&utm_medium=profile |
| YC Page | https://www.ycombinator.com/companies/speko |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Developer Tools, Conversational AI |
| YC Partner | Tyler Bosmeny |
| Emails | team@speko.ai, founders@speko.ai |

## The Idea

- **Problem:** Voice-agent developers manually compare separate speech-to-text, LLM, and text-to-speech vendors, while frequent model releases can leave deployed stacks tied to a selection made under an earlier bake-off ([Launch YC](https://www.ycombinator.com/launches/SAF-speko-openrouter-for-voice), Jul 2026).
- **Approach:** Speko benchmarks models by language, accuracy, latency, and cost, then routes each request through one API to the highest-ranked eligible provider with pre-response failover to the next candidate ([Speko](https://speko.ai/), Aug 2026).
- **Differentiation:** Speko centers public, language-specific benchmark routing across STT, LLM, and TTS, while Vapi emphasizes agent deployment and telephony, LiveKit supplies a real-time agent runtime and network, and Retell targets no-code contact-center automation ([Speko](https://speko.ai/), [Vapi](https://www.globenewswire.com/news-release/2026/05/12/3292882/0/en/Vapi-raises-50M-Series-B-as-it-reaches-1-billion-calls-powering-the-next-generation-of-enterprise-voice-AI.html), [LiveKit](https://livekit.com/blog/livekit-series-c), [Retell AI](https://rss.globenewswire.com/news-release/2026/01/29/3228780/0/en/upgraded-retell-ai-voice-platform-enables-corporate-call-centers-to-deploy-infinite-ai-sales-and-support-agents-across-voice-chat-email-and-sms-company-revenue-now-exceeds-40m-arr.html), 2026).
- **Business Model:** Router usage costs the provider’s published rate plus 5%, Speko-managed infrastructure costs $0.09 per minute, enterprise pricing is custom with a monthly commitment, and each account receives $100 in signup credit ([Speko pricing](https://speko.ai/pricing/), Aug 2026).
- **TAM/SAM:** The broader global AI voice-agents market was $2.5 billion in 2025 and is forecast to reach $35.2 billion in 2033 at a 39.0% 2026–2033 CAGR ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/ai-voice-agents-market-report), Jun 2026).
- **GTM / Distribution:** Speko uses self-service API signup, signup credits, public benchmark content, open SDKs, LiveKit and Pipecat adapters, and a hosted MCP server to reach developers ([Speko pricing](https://speko.ai/pricing/), [Speko GitHub](https://github.com/spekoai), [Speko docs](https://docs.speko.dev/quickstart), Aug 2026).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Workload-specific routing outcomes could improve provider selection and create switching costs, but Speko says customer audio and transcripts are not used to train models and publishes its benchmark data openly ([Speko](https://speko.ai/), [Speko Benchmarks](https://benchmarks.speko.ai/), Aug 2026).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** LiveKit already routes inference among providers, OpenRouter supports speech and transcription with quality-aware routing, and Vapi permits model and provider swapping ([LiveKit](https://livekit.com/blog/livekit-series-c), [OpenRouter](https://openrouter.ai/blog/announcements/series-b/), [Vapi](https://www.globenewswire.com/news-release/2026/05/12/3292882/0/en/Vapi-raises-50M-Series-B-as-it-reaches-1-billion-calls-powering-the-next-generation-of-enterprise-voice-AI.html), 2026).

## Market & Traction

- **Traction signals:**
  - First partners among voice-agent companies and one commercial pilot ([DigitalBusiness](https://digitalbusiness.kz/2026-06-20/uzbekistanets-proshel-v-y-combinator/), Jun 2026).
  - $1.1 million pre-YC funding and $1.6 million including YC were reported by a regional technology executive ([LinkedIn post](https://www.linkedin.com/posts/farkhodjon-israilov-66b363151_uzbekistan-ai-artificialintelligence-activity-7470941150841937920-xsDp), Jul 2026, via search snippet).
  - 250 LinkedIn followers and four listed employees ([LinkedIn](https://www.linkedin.com/company/speko-ai/), Aug 2026).
  - 12 Launch YC votes ([Launch YC](https://www.ycombinator.com/launches/SAF-speko-openrouter-for-voice), Aug 2026).
  - 17 public GitHub repositories, with two stars each on the TypeScript and Python SDKs ([GitHub](https://github.com/spekoai), Aug 2026).
  - Company X account is @speko_ai; follower count not retrievable ([X](https://x.com/speko_ai), Aug 2026).
  - Zero YC job postings ([YC](https://www.ycombinator.com/companies/speko), Aug 2026).
  - Company and founder coverage in DigitalBusiness ([DigitalBusiness](https://digitalbusiness.kz/2026-06-20/uzbekistanets-proshel-v-y-combinator/), Jun 2026).
- **Competitors (minimum 3, up to 5):**
  - Vapi ($72 million raised, revenue unknown): provides configurable enterprise voice agents, telephony, and deployment management rather than centering public language-specific benchmarks ([Vapi](https://www.globenewswire.com/news-release/2026/05/12/3292882/0/en/Vapi-raises-50M-Series-B-as-it-reaches-1-billion-calls-powering-the-next-generation-of-enterprise-voice-AI.html), May 2026).
  - LiveKit ($182.5 million raised, revenue unknown): supplies an open-source agent runtime, global real-time network, observability, and provider routing ([CB Insights](https://www.cbinsights.com/company/livekit), Jul 2026, via search snippet; [LiveKit](https://livekit.com/blog/livekit-series-c), Jan 2026).
  - Retell AI ($4.6 million raised, over $40 million ARR): focuses on no-code corporate call-center agents across voice, chat, email, and SMS ([Retell AI](https://rss.globenewswire.com/news-release/2026/01/29/3228780/0/en/upgraded-retell-ai-voice-platform-enables-corporate-call-centers-to-deploy-infinite-ai-sales-and-support-agents-across-voice-chat-email-and-sms-company-revenue-now-exceeds-40m-arr.html), Jan 2026).
  - OpenRouter ($153 million disclosed across Series A and B, revenue unknown): offers routing across 400-plus multimodal models, including speech and transcription, rather than a dedicated three-stage voice stack ([OpenRouter](https://openrouter.ai/blog/announcements/series-b/), [TechCrunch](https://techcrunch.com/2026/05/26/openrouter-more-than-doubles-valuation-to-1-3b-in-a-year/), May 2026).
- **Why now:** [Inferred]: Speko tracks 23 STT models with four different winners across nine languages, while LiveKit reports that voice AI expanded to thousands of applications during 2025, increasing the frequency of cross-provider selection decisions ([Speko](https://speko.ai/), [LiveKit](https://livekit.com/blog/livekit-series-c), 2026).

## Founders & Team

- **Beknazar Abdikamalov (Founder/CEO):**
  - Background: Abdikamalov holds MS and BS computer-science degrees from UNIST, worked as an Amazon software engineer, co-founded Hupo as CTO, and has worked on voice technology since 2019; YC lists a four-person Speko team ([YC](https://www.ycombinator.com/companies/speko), [DigitalBusiness](https://digitalbusiness.kz/2026-06-20/uzbekistanets-proshel-v-y-combinator/), 2026).
  - Twitter/X: @beknabdik; count not retrievable ([X](https://x.com/beknabdik), Aug 2026).
  - LinkedIn: “Founder at Speko (YC S26)” ([YC](https://www.ycombinator.com/companies/speko), Aug 2026).
  - GitHub: No public personal repos found.
- **Co-founder relationship:** Not applicable because YC lists one active founder and DigitalBusiness identifies Abdikamalov as a solo founder ([YC](https://www.ycombinator.com/companies/speko), [DigitalBusiness](https://digitalbusiness.kz/2026-06-20/uzbekistanets-proshel-v-y-combinator/), 2026).
- **Founder-market fit:** Abdikamalov’s voice-technology work since 2019 and four years manually comparing voice providers at prior products directly preceded Speko’s routing product ([DigitalBusiness](https://digitalbusiness.kz/2026-06-20/uzbekistanets-proshel-v-y-combinator/), [Launch YC](https://www.ycombinator.com/launches/SAF-speko-openrouter-for-voice), 2026).

## Key Risks

- **Benchmark generalization:** Speko’s terms state that results vary with datasets, provider availability, model versions, methods, and network conditions and instruct customers to validate their own workloads ([Speko terms](https://speko.ai/terms-of-service), May 2026).
- **Provider and data dependency:** Requests may send audio, transcripts, and prompts to routed third-party providers governed by separate privacy, retention, and compliance terms ([Speko privacy policy](https://speko.ai/privacy-policy), May 2026).
- **Production-service terms:** Both self-service products remain in public preview with no SLA, while only enterprise contracts specify an SLA ([Speko pricing](https://speko.ai/pricing/), Aug 2026).
- **Competitive overlap:** LiveKit and OpenRouter have already added cross-provider inference routing, while Vapi and Retell bundle routing with agent deployment and enterprise workflows ([LiveKit](https://livekit.com/blog/livekit-series-c), [OpenRouter](https://openrouter.ai/blog/announcements/series-b/), [Vapi](https://www.globenewswire.com/news-release/2026/05/12/3292882/0/en/Vapi-raises-50M-Series-B-as-it-reaches-1-billion-calls-powering-the-next-generation-of-enterprise-voice-AI.html), [Retell AI](https://rss.globenewswire.com/news-release/2026/01/29/3228780/0/en/upgraded-retell-ai-voice-platform-enables-corporate-call-centers-to-deploy-infinite-ai-sales-and-support-agents-across-voice-chat-email-and-sms-company-revenue-now-exceeds-40m-arr.html), 2026).
- **Name collision:** Search results also surface an unrelated Speeko speech coach and a separate Speko Windows-dictation product, creating company-disambiguation risk ([Product Hunt](https://www.producthunt.com/products/speeko), [speko.app](https://speko.app/), Aug 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.5B global AI voice-agents market in 2025, forecast to $35.2B by 2033 at 39.0% CAGR ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/ai-voice-agents-market-report), Jun 2026) |
| SAM | No public data found |
| Traction | First partners and one commercial pilot ([DigitalBusiness](https://digitalbusiness.kz/2026-06-20/uzbekistanets-proshel-v-y-combinator/), Jun 2026); 250 LinkedIn followers ([LinkedIn](https://www.linkedin.com/company/speko-ai/), Aug 2026); 12 YC launch votes ([Launch YC](https://www.ycombinator.com/launches/SAF-speko-openrouter-for-voice), Aug 2026) |
| Revenue Signal | $100 signup credit, provider rate plus 5% router fee, $0.09/minute managed infrastructure, and custom enterprise pricing ([Speko pricing](https://speko.ai/pricing/), Aug 2026) |
| Founders | Beknazar Abdikamalov (Founder/CEO): former Hupo co-founder/CTO, Amazon engineer, UNIST MS and BS in computer science ([YC](https://www.ycombinator.com/companies/speko), Aug 2026) |
| Competitors | Vapi ($72M raised, revenue unknown, enterprise agent deployment); LiveKit ($182.5M raised, revenue unknown, real-time runtime/network); Retell AI ($4.6M raised, over $40M ARR, contact-center automation); OpenRouter ($153M disclosed Series A/B, revenue unknown, multimodal routing) ([Vapi](https://www.globenewswire.com/news-release/2026/05/12/3292882/0/en/Vapi-raises-50M-Series-B-as-it-reaches-1-billion-calls-powering-the-next-generation-of-enterprise-voice-AI.html), [LiveKit](https://livekit.com/blog/livekit-series-c), [Retell AI](https://rss.globenewswire.com/news-release/2026/01/29/3228780/0/en/upgraded-retell-ai-voice-platform-enables-corporate-call-centers-to-deploy-infinite-ai-sales-and-support-agents-across-voice-chat-email-and-sms-company-revenue-now-exceeds-40m-arr.html), [OpenRouter](https://openrouter.ai/blog/announcements/series-b/), 2026) |
| Moat Signals | No public data found |
| Risk Factors | Public preview without SLA ([Speko pricing](https://speko.ai/pricing/), Aug 2026); third-party provider and data dependency ([Speko privacy policy](https://speko.ai/privacy-policy), May 2026); overlapping routing products ([LiveKit](https://livekit.com/blog/livekit-series-c), [OpenRouter](https://openrouter.ai/blog/announcements/series-b/), 2026) |
| Founder Reach | No public data found |
| Distribution Signals | 250 LinkedIn followers ([LinkedIn](https://www.linkedin.com/company/speko-ai/), Aug 2026); 17 GitHub repositories and two stars on each principal SDK ([GitHub](https://github.com/spekoai), Aug 2026); 12 YC launch votes ([Launch YC](https://www.ycombinator.com/launches/SAF-speko-openrouter-for-voice), Aug 2026) |
| Emails | team@speko.ai ([Speko pricing](https://speko.ai/pricing/), Aug 2026); founders@speko.ai ([Speko](https://speko.ai/), Aug 2026) |
