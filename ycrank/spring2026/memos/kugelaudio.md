# KugelAudio

> Kugel is an on-prem enterprise TTS supporting 25+ languages 

| Field | Value |
|-------|-------|
| Website | https://kugelaudio.com/en |
| YC Page | https://www.ycombinator.com/companies/kugelaudio |
| Batch | Spring 2026 (YC P26) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 4 |
| Location | Berlin, Berlin, Germany |
| Tags | Generative AI, API, Conversational AI |
| YC Partner | Andrew Miklas |
| Emails | No public data found |

## The Idea

- **Problem:** Enterprise voice AI users in Europe need TTS that pronounces domain-specific tokens (street names, postal codes, phone numbers, emails, brand names) correctly while keeping data within EU jurisdiction; current alternatives are cloud APIs like ElevenLabs (kugelaudio.com/en).
- **Approach:** A foundational TTS model deployable on-prem in Kubernetes with IPA notation support, voice cloning, and "edge case" training data for customer-support utterances, achieving 39ms time-to-first-audio (kugelaudio.com/en).
- **Differentiation:** Versus ElevenLabs — on-prem/EU-hosted GDPR-compliant deployment rather than US cloud API; versus Cartesia — broader European-language coverage (40+ on site, 25+ per YC page) vs. Cartesia's 15 languages (murf.ai/blog/cartesia-vs-elevenlabs).
- **Business Model:** Usage-based with €0/month free tier and per-minute "agent minutes" billing, with custom pricing above 3,000 minutes (docs.kugelaudio.com/pricing/overview).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Direct enterprise sales with on-prem/Kubernetes deployments and "shared Slack channel" support, plus developer-led integration via Pipecat and LiveKit in "2 lines of code" (kugelaudio.com/en); workshop with sipgate cited as channel activity (LinkedIn company page).

## Defensibility

- **Moat today:** Open-source release (`kugelaudio-open`, 258 stars, 39 forks, github.com/Kugelaudio/kugelaudio-open) plus 100k+ monthly Hugging Face downloads of V1 (LinkedIn company page) create a developer-distribution wedge; training corpus of ~200,000 hours from YODAS2 on 8x H100 funded by the German Federal Ministry of Research (GitHub README).
- **Future moat:** [Inferred]: Fine-tuned per-customer voice/lexicon models (e.g., the cited Swiss postal-code customization for "Thomas") could create switching costs, but no customer-count data is public.
- **Market structure:** [Inferred]: GDPR/data-sovereignty requirements and on-prem Kubernetes delivery create a structural barrier to US cloud incumbents (ElevenLabs, Cartesia) whose unit economics and architecture are cloud-API native.
- **Commoditization risk:** Mistral released open-weight Voxtral TTS in March 2026 positioned against ElevenLabs (venturebeat.com), and Cartesia already offers on-prem deployment (cartesia.ai/vs/cartesia-vs-elevenlabs), indicating the on-prem/open-weight European-TTS space has multiple well-funded entrants.

## Market & Traction

- **Traction signals:**
  - 100k+ monthly downloads of V1 model on Hugging Face (KugelAudio LinkedIn company page).
  - 258 GitHub stars, 39 forks on `kugelaudio-open` (github.com/Kugelaudio/kugelaudio-open).
  - 78% human-preference win rate over ElevenLabs across 339 evaluations using OpenSkill ranking (GitHub README; sonusahani.com/blogs/kugelaudio).
  - LinkedIn company page: 214 followers (LinkedIn, fetched May 2026).
  - 4 employees including Alexander Netz as founding engineer (LinkedIn company page).
  - Launch event at CCW Berlin comparing V1 to ElevenLabs (LinkedIn company page).
  - Workshop collaboration with sipgate on European voice AI (LinkedIn company page).
  - Customer testimonial: "Thomas" cited Swiss postal-code fine-tuning (kugelaudio.com/en).
- **Competitors (3-5):**
  - ElevenLabs ($781M raised total, $500M Series D Feb 2026 at $11B valuation, $330M+ ARR end-2025; techcrunch.com, elevenlabs.io/blog/series-d): cloud-API leader, 70+ languages; KugelAudio differentiates on on-prem/EU hosting.
  - Cartesia ($191M raised across seed/A/B through Oct 2025, $100M Series B Oct 2025, 50K+ customers as of March 2026; fortune.com, thesaasnews.com): supports on-prem but only 15 languages vs. KugelAudio's 25-40+.
  - Mistral Voxtral (parent raised ~$1B+, revenue unknown; venturebeat.com, March 2026): open-weight TTS from European foundation-model leader; direct overlap on EU-sovereign positioning.
  - Inworld AI (revenue unknown, listed as TTS platform; inworld.ai/resources): voice agent platform with built-in TTS, US-based, lacks EU on-prem focus.
- **Why now:** [Inferred]: EU AI Act enforcement and GDPR sensitivity around US cloud voice APIs in 2025–2026, combined with the open-weight TTS cost-curve crossing (Mistral Voxtral release March 2026, venturebeat.com), create demand for EU-hosted on-prem TTS.

## Founders & Team

- **Kajo Kratzenstein (Co-founder):**
  - Background: MA and BSc Computer Science, Hasso Plattner Institute; prior CTO at Sagemode (in-game AI coach scaled to 1,000+ users); built production aneurysm detection model at Floy GmbH (YC company page via search snippet; LinkedIn post linkedin.com/posts/kratzenstein).
  - Twitter/X: No public account found.
  - LinkedIn: Linked at linkedin.com/in/kratzenstein (Founder, KugelAudio YC P26); follower count not retrievable.
  - GitHub: @kajode (github.com/kajode); top repo star count not retrievable from search snippet.
- **Viktor Presber (Co-founder):**
  - Background: Co-founded full-house.io, scaled to $300K ARR in six months with enterprise clients Siemens Energy, Hitachi Rail, Barilla; prior roles at SageMode, charles & charlotte, DIE KOLONIE; studied advertising at University of Texas (rocketreach.co/viktor-presber, happenstance.ai/u/e8a634b3, LinkedIn).
  - Twitter/X: No public account found.
  - LinkedIn: de.linkedin.com/in/viktor-presber/en ("KugelAudio (YC P26)"); follower count not retrievable.
  - GitHub: No public repos found.
- **Co-founder relationship:** [Inferred]: Both based in Berlin and joined YC together; conflicting source attributions (some search snippets conflate Sagemode/HPI credentials across both founders) suggest possible overlap at Sagemode, but no public data confirms shared prior employer or university.
- **Founder-market fit:** Presber brings enterprise-sales track record (Siemens Energy, Hitachi Rail, Barilla via full-house.io; rocketreach.co/viktor-presber); Kratzenstein brings applied-ML model-deployment experience (Floy GmbH aneurysm detection, Sagemode AI coach; LinkedIn).

## Key Risks

- **Well-funded incumbents:** ElevenLabs ($781M raised, $11B valuation, $330M+ ARR; techcrunch.com Feb 2026) and Cartesia ($191M raised, 50K+ customers, on-prem capable; fortune.com, thesaasnews.com) outscale KugelAudio's pre-seed funding by orders of magnitude and both target enterprise voice.
- **Open-weight commoditization:** Mistral released open-weight Voxtral TTS positioned against ElevenLabs in March 2026 (venturebeat.com); a French EU-sovereign foundation-model lab releasing free weights directly threatens KugelAudio's EU-sovereign-TTS positioning.
- **Open-source self-cannibalization:** KugelAudio's own `kugelaudio-open` (258 GitHub stars, 100k+ monthly HF downloads; github.com/Kugelaudio, LinkedIn) may erode willingness to pay for the hosted enterprise tier; no public mitigation found.
- **Founder-team credential ambiguity:** Public sources conflict on which co-founder holds the Hasso Plattner Institute / Sagemode / Floy GmbH credentials (compare two WebSearch summaries above), creating uncertainty about technical-leadership attribution for diligence.
- **Concentration in EU regulatory thesis:** Product positioning ("100% European infrastructure," "GDPR compliant," kugelaudio.com/en) depends on European buyers prioritizing data-sovereignty; no public customer-count or revenue data validates this demand yet.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 100k+ monthly Hugging Face downloads of V1 (LinkedIn, 2026); 258 GitHub stars / 39 forks (github.com/Kugelaudio, May 2026); 78% win rate vs. ElevenLabs across 339 evaluations (GitHub README); 214 LinkedIn followers (LinkedIn, May 2026); CCW Berlin launch and sipgate workshop (LinkedIn) |
| Revenue Signal | €0/month free tier; usage-based "agent minutes"; custom pricing above 3,000 minutes (docs.kugelaudio.com/pricing/overview) |
| Founders | Kajo Kratzenstein (Co-founder): HPI CS MA/BSc, ex-CTO Sagemode, ex-Floy GmbH ML. Viktor Presber (Co-founder): ex-full-house.io ($300K ARR, Siemens Energy/Hitachi Rail/Barilla), ex-Sagemode, studied advertising at UT. |
| Competitors | ElevenLabs ($781M raised, $330M+ ARR, cloud API leader 70+ languages); Cartesia ($191M raised, 50K+ customers, on-prem but 15 languages); Mistral Voxtral (parent ~$1B+ raised, revenue unknown, open-weight EU TTS); Inworld AI (revenue unknown, voice-agent platform with built-in TTS) |
| Moat Signals | German Federal Ministry of Research training grant (GitHub README); 8x H100 / 200k-hour YODAS2 training corpus (GitHub README); 100k+ HF monthly downloads (LinkedIn); Pipecat + LiveKit 2-line integration (kugelaudio.com/en) |
| Risk Factors | Well-funded incumbents (ElevenLabs, Cartesia); open-weight commoditization (Mistral Voxtral); open-source self-cannibalization |
| Founder Reach | Kajo Kratzenstein: Twitter not found, LinkedIn count not retrievable, GitHub @kajode (stars not retrievable). Viktor Presber: Twitter not found, LinkedIn count not retrievable, GitHub not found. |
| Distribution Signals | 100k+ monthly Hugging Face downloads (LinkedIn, 2026); 258 GitHub stars (github.com/Kugelaudio, May 2026); CCW Berlin launch (LinkedIn); sipgate workshop (LinkedIn) |
| Emails | No public data found |

Sources:
- [KugelAudio YC page](https://www.ycombinator.com/companies/kugelaudio)
- [KugelAudio website](https://kugelaudio.com/en)
- [KugelAudio Pricing](https://docs.kugelaudio.com/pricing/overview)
- [kugelaudio-open GitHub](https://github.com/Kugelaudio/kugelaudio-open)
- [KugelAudio LinkedIn company page](https://www.linkedin.com/company/kugelaudio)
- [Viktor Presber LinkedIn](https://de.linkedin.com/in/viktor-presber/en)
- [Kajo Kratzenstein LinkedIn post](https://www.linkedin.com/posts/kratzenstein_super-excited-be-a-part-of-the-current-yc-activity-7452242224043696128-O4CG)
- [RocketReach — Viktor Presber](https://rocketreach.co/viktor-presber-email_728336072)
- [Cartesia Series A — Fortune](https://fortune.com/2025/03/11/exclusive-cartesia-voice-ai-startup-raises-64-million-series-a/)
- [Cartesia Series B — The SaaS News](https://www.thesaasnews.com/news/cartesia-raises-64-million-in-series-a)
- [ElevenLabs Series D — TechCrunch](https://techcrunch.com/2026/02/04/elevenlabs-raises-500m-from-sequioia-at-a-11-billion-valuation/)
- [ElevenLabs Series D — elevenlabs.io](https://elevenlabs.io/blog/series-d)
- [Mistral Voxtral — VentureBeat](https://venturebeat.com/orchestration/mistral-ai-just-released-a-text-to-speech-model-it-says-beats-elevenlabs-and)
- [Cartesia vs ElevenLabs — Murf](https://murf.ai/blog/cartesia-vs-elevenlabs)
- [KugelAudio Open review — sonusahani.com](https://sonusahani.com/blogs/kugelaudio)
