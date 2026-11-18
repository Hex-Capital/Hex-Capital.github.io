# DeepMark

> A live watermark inside AI voice that survives phone calls

| Field | Value |
|-------|-------|
| Website | https://www.deepmark.me |
| YC Page | https://www.ycombinator.com/companies/deepmark |
| Batch | Fall 2026 |
| Industry | B2B / B2B -> Security |
| Team Size | 5 |
| Location | San Francisco, CA, USA |
| Tags | B2B, Cybersecurity |
| YC Partner | Max Kolysh ([YC company profile](https://www.ycombinator.com/companies/deepmark)) |
| Emails | slavko@deepmark.me, Slavko Kovačević, CEO ([Launch YC](https://www.ycombinator.com/launches/UEj-deepmark-reinventing-trust-in-voice)) |

## The Idea

- **Problem:** Voice clones can impersonate banks and contact centers on ordinary calls, where receiving systems use tools such as Pindrop Pulse to flag synthetic speech and infer whether a caller is human or automated ([Launch YC](https://www.ycombinator.com/launches/UEj-deepmark-reinventing-trust-in-voice), [Pindrop BotStopper](https://www.pindrop.com/company-news/pindrop-launches-pindrop-botstopper-technology-to-detect-ai-voice-agents-for-the-enterprise)).
- **Approach:** DeepMark embeds a machine-readable ID into the waveform as an AI agent speaks, and a receiver extracts it after phone-network transmission to look up the issuer and the agent’s authorization ([Launch YC](https://www.ycombinator.com/launches/UEj-deepmark-reinventing-trust-in-voice)).
- **Differentiation:** DeepMark issues credentials for agents integrated by voice providers, Pindrop recognizes known voices from a receiving-side registry, and ElevenLabs’ provenance API looks up generation records for audio made on its platform ([Launch YC](https://www.ycombinator.com/launches/UEj-deepmark-reinventing-trust-in-voice), [Pindrop BotStopper](https://www.pindrop.com/company-news/pindrop-launches-pindrop-botstopper-technology-to-detect-ai-voice-agents-for-the-enterprise), [ElevenLabs API docs](https://elevenlabs.io/docs/eleven-api/concepts/content-provenance)).
- **Business Model:** DeepMark offers commercial platform licensing and free evaluation access by demo request, with pricing and license terms undisclosed ([DeepMark website](https://www.deepmark.me/), [Launch YC](https://www.ycombinator.com/launches/UEj-deepmark-reinventing-trust-in-voice)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** DeepMark solicits demos and introductions from voice-model providers and offers SDK and API integrations with customer-cloud or on-premises deployment ([Launch YC](https://www.ycombinator.com/launches/UEj-deepmark-reinventing-trust-in-voice), [DeepMark website](https://www.deepmark.me/)).

## Defensibility

- **Moat today:** Both founders co-authored the peer-reviewed DeepMark Benchmark, and DeepMark registered Vigil as a C2PA soft-binding algorithm for linking audio to provenance records ([IEEE Access paper, Apr 2026](https://www.researchgate.net/publication/404019151_DeepMark_Benchmark_Redefining_Audio_Watermarking_Robustness), [DeepMark C2PA announcement](https://www.deepmark.me/blog/deepmarks-vigil-watermark-joins-the-c2pa-ecosystem)).
- **Future moat:** [Inferred]: A credential registry could gain value as more voice platforms issue credentials and more call recipients verify them, but public sources provide no adoption counts for either side ([Launch YC](https://www.ycombinator.com/launches/UEj-deepmark-reinventing-trust-in-voice)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Meta’s MIT-licensed AudioSeal gives developers a starting point for speech watermarking, and Resemble AI markets its own phone-compatible watermark with real-time verification ([Meta AudioSeal](https://github.com/facebookresearch/audioseal), [Resemble AI voice-agent security](https://www.resemble.ai/solutions/voice-agents)).

## Market & Traction

- **Traction signals:**
  - First voice-AI platform license signed before YC and reported in production, with the licensee and deployment scope undisclosed ([Launch YC, Sep 2026](https://www.ycombinator.com/launches/UEj-deepmark-reinventing-trust-in-voice)).
  - Live voice authentication launched September 22, 2026 ([Kovačević’s X launch post, mirrored by Nitter](https://nitter.gq/slavzilla)).
  - Customer testimonial: Confident Security’s CEO reported low-latency audio watermarking in production ([DeepMark website, accessed Nov 2026](https://www.deepmark.me/)).
  - Customer testimonial: Pencil’s product manager reported deploying invisible content watermarking in Pencil’s own environment ([DeepMark website, accessed Nov 2026](https://www.deepmark.me/)).
  - Media provenance partnership with Ortana to integrate audio and video watermarking into Cubix ([Ortana, Apr 2026](https://www.ortana.tv/news-02042026)).
  - €1.2M raised in 2025, with Lighthouse Ventures, angels and grants cited in the report ([ITLogs, Jul 2026](https://www.itlogs.com/p/the-montenegrin-startup-going-after-google-and-elevenlabs)).
  - €33,392.30 received for the original watermarking project in 2023 and €200,000 approved for PatchMark in 2025 ([Innovation Fund of Montenegro, Sep 2026](https://fondzainovacije.me/en/news/deepmark-selected-for-y-combinator/)).
  - Founder interviews and launch coverage ([ITLogs, Jul 2026](https://www.itlogs.com/p/the-montenegrin-startup-going-after-google-and-elevenlabs), [Vijesti, Oct 2026](https://www.vijesti.me/vijesti/drustvo/829783/necujnim-zigovima-protiv-laznih-glasova-kolasinski-startap-stigao-do-silicijumske-doline)).
  - 1,115 LinkedIn followers and 26 X followers for @deepmark_me ([LinkedIn, Nov 2026](https://www.linkedin.com/company/deepmark-me/), [X profile mirrored by Nitter, Nov 2026](https://nitter.gq/deepmark_me)).
  - 5,400 estimated website visits in September 2026, from a small traffic panel ([Mindspent](https://mindspent.com/c/deepmark)).
  - Zero open YC job listings ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/deepmark/jobs)).
- **Competitors:**
  - **Resemble AI** ($25M raised as of its $13M December 2025 strategic round, revenue unknown) bundles PerTh watermarking with speaker verification and deepfake detection, and announced a Telnyx deployment and a March 2026 investment of undisclosed size from Wa’ed Ventures ([Resemble AI funding](https://www.resemble.ai/resources/resemble-ai-secures-13m-to-combat-rising-ai-generated-threats), [Resemble AI product](https://www.resemble.ai/solutions/voice-agents), [Wa’ed Ventures release](https://www.zawya.com/en/press-release/companies-news/waed-ventures-invests-in-resemble-ai-following-the-companys-13mln-strategic-round-356557)).
  - **Pindrop** ($318.3M in tracked financing including a $100M Hercules Capital debt facility announced in July 2024, revenue unknown) detects bots and recognizes known voices at the receiving contact center ([aVenture](https://aventure.vc/companies/pindrop-atlanta-ga-us/fundraising), [Pindrop financing, via search snippet](https://www.pindrop.com/press-release/pindrop-secures-one-hundred-million/), [Pindrop BotStopper](https://www.pindrop.com/company-news/pindrop-launches-pindrop-botstopper-technology-to-detect-ai-voice-agents-for-the-enterprise)).
  - **ElevenLabs** ($781M raised through its February 2026 $500M Sequoia-led Series D announcement, over $500M ARR by April 2026) verifies audio generated on its platform and subsequently disclosed an investment of undisclosed size from Poland via Vinci in June 2026 ([ElevenLabs Series D](https://elevenlabs.io/blog/series-d), [ElevenLabs ARR update](https://elevenlabs.io/blog/500m-arr-and-new-investors), [Vinci investment](https://elevenlabs.io/blog/poland-invests-in-elevenlabs), [provenance API](https://elevenlabs.io/docs/eleven-api/concepts/content-provenance)).
  - **Trufo** (funding undisclosed, revenue unknown) sells PawPrint audio watermarking to recover C2PA provenance records through its API and SDK ([Trufo product page](https://trufo.ai/products/watermarks)).
- **Why now:** EU AI Act transparency rules began applying on August 2, 2026, with a December 2, 2026 deadline for covered synthetic-content systems already on the market before August 2 ([European Commission](https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act)).

## Founders & Team

- **Slavko Kovačević (Founder/CEO):**
  - Background: University of Montenegro computer science master’s and PhD candidate, former Fleka Android developer and Omnitech MNE machine-learning researcher, and co-author of the DeepMark Benchmark ([university résumé](https://www.ucg.ac.me/skladiste/blog_615903/objava_1/fajlovi/SK_Resume2024.pdf), [YC](https://www.ycombinator.com/companies/deepmark), [IEEE Access paper](https://www.researchgate.net/publication/404019151_DeepMark_Benchmark_Redefining_Audio_Watermarking_Robustness)).
  - Twitter/X: @slavzilla, 243 followers ([X profile mirrored by Nitter, Nov 2026](https://nitter.gq/slavzilla)).
  - LinkedIn: Co-Founder & CEO of DeepMark in profile bio, with approximately 4,000 followers ([LinkedIn, Nov 2026, via search snippet](https://me.linkedin.com/in/slavkokovacevic)).
  - GitHub: @slavzilla, pinned `deepmark/deepmarkpy-benchmark` with 6 stars ([GitHub, Nov 2026](https://github.com/slavzilla)).
  - Email: slavko@deepmark.me ([Launch YC](https://www.ycombinator.com/launches/UEj-deepmark-reinventing-trust-in-voice)).
- **Kosta Pavlović (Founder/CSO):**
  - Background: University of Montenegro computer science PhD on neural audio watermarking, university teaching and research assistant, and former Datum Solutions consultant ([Pavlović CV](https://tehnopolis.me/wp-content/uploads/vfb/2024/03/Kosta-Pavlovic-CV.pdf), [YC](https://www.ycombinator.com/companies/deepmark)).
  - Twitter/X: No public account found.
  - LinkedIn: Profile found, headline unavailable, approximately 2,000 followers ([LinkedIn, Nov 2026, via search snippet](https://me.linkedin.com/in/kosta-pavlovic)).
  - GitHub: @kosta-pmf, `dnn-audio-watermarking` with 58 stars ([GitHub, Nov 2026](https://github.com/kosta-pmf/dnn-audio-watermarking)).
  - Email: No public data found.
- **Co-founder relationship:** The founders report six years of collaboration starting as researchers at the University of Montenegro ([Launch YC, Sep 2026](https://www.ycombinator.com/launches/UEj-deepmark-reinventing-trust-in-voice)).
- **Founder-market fit:** Both founders published neural speech-watermarking research before the YC launch, DeepMark lists co-author Igor Đurović as senior research advisor, and Lighthouse Ventures identifies DeepMark as a portfolio company ([university publication record](https://www.ucg.ac.me/skladiste/blog_1019/objava_177255/fajlovi/D2_Kosta%20Pavlovi%C4%87_PMF.pdf), [DeepMark About](https://www.deepmark.me/company), [Lighthouse Ventures](https://lhv.vc/news/deepmark-joins-y-combinator/)).

## Key Risks

- **Telephony reliability:** Transcoding, compression and noisy channels can impair watermark recovery, and DeepMark publishes a robustness benchmark and offers prospective customers tests on their own audio ([IEEE Access paper](https://www.researchgate.net/publication/404019151_DeepMark_Benchmark_Redefining_Audio_Watermarking_Robustness), [Launch YC](https://www.ycombinator.com/launches/UEj-deepmark-reinventing-trust-in-voice)).
- **Integration dependency:** [Inferred]: A call can be authenticated through DeepMark only where the voice provider embeds a credential and the receiving side can read it, with API and on-premises verification available for receivers ([DeepMark website](https://www.deepmark.me/)).
- **Regulatory scope:** EU guidance allows a conditional exemption for some unrecorded, ephemeral real-time content when marking is technically infeasible and users receive disclosure, which can limit compliance-driven demand for some live uses ([European Commission implementation guidelines](https://publications.europa.eu/resource/cellar/caabe0cd-de39-11f1-ba80-01aa75ed71a1.0006.01/DOC_1)).
- **Name collision:** [Inferred]: Search and press attribution can be confused with DeepMark Labs Ltd., a UK education assessment vendor using the same product name ([DeepMark Labs](https://getdeepmark.com/), [YC company profile](https://www.ycombinator.com/companies/deepmark)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | First voice-AI platform license in production ([Launch YC, Sep 2026](https://www.ycombinator.com/launches/UEj-deepmark-reinventing-trust-in-voice)), customer testimonials from Confident Security and Pencil ([DeepMark, Nov 2026](https://www.deepmark.me/)), Cubix integration partnership ([Ortana, Apr 2026](https://www.ortana.tv/news-02042026)) |
| Revenue Signal | Commercial platform licensing and free evaluation access, with contract value and revenue undisclosed ([Launch YC, Sep 2026](https://www.ycombinator.com/launches/UEj-deepmark-reinventing-trust-in-voice), [DeepMark, Nov 2026](https://www.deepmark.me/)) |
| Founders | Slavko Kovačević (CEO), computer science PhD candidate and watermarking researcher, and Kosta Pavlović (CSO), computer science PhD and watermarking researcher ([YC](https://www.ycombinator.com/companies/deepmark), [IEEE Access](https://www.researchgate.net/publication/404019151_DeepMark_Benchmark_Redefining_Audio_Watermarking_Robustness)) |
| Competitors | Resemble AI ($25M announced, revenue unknown, watermarking plus biometric verification, [Resemble AI funding](https://www.resemble.ai/resources/resemble-ai-secures-13m-to-combat-rising-ai-generated-threats), [product](https://www.resemble.ai/solutions/voice-agents)); Pindrop ($318.3M tracked including debt, revenue unknown, receiving-side detection, [aVenture](https://aventure.vc/companies/pindrop-atlanta-ga-us/fundraising), [Pindrop](https://www.pindrop.com/company-news/pindrop-launches-pindrop-botstopper-technology-to-detect-ai-voice-agents-for-the-enterprise)); ElevenLabs ($781M as of Feb 2026, over $500M ARR by Apr 2026, verifies its own output, [Series D](https://elevenlabs.io/blog/series-d), [ARR update](https://elevenlabs.io/blog/500m-arr-and-new-investors), [API docs](https://elevenlabs.io/docs/eleven-api/concepts/content-provenance)); Trufo (funding undisclosed, revenue unknown, watermark-based C2PA provenance recovery, [Trufo](https://trufo.ai/products/watermarks)) |
| Moat Signals | Published robustness benchmark and C2PA soft-binding registration for Vigil ([IEEE Access, Apr 2026](https://www.researchgate.net/publication/404019151_DeepMark_Benchmark_Redefining_Audio_Watermarking_Robustness), [DeepMark C2PA announcement](https://www.deepmark.me/blog/deepmarks-vigil-watermark-joins-the-c2pa-ecosystem)) |
| Risk Factors | Watermark recovery after channel degradation ([IEEE Access](https://www.researchgate.net/publication/404019151_DeepMark_Benchmark_Redefining_Audio_Watermarking_Robustness)), integration at generation and verification ([DeepMark](https://www.deepmark.me/)), conditional regulatory exemptions ([European Commission](https://publications.europa.eu/resource/cellar/caabe0cd-de39-11f1-ba80-01aa75ed71a1.0006.01/DOC_1)) |
| Founder Reach | Slavko Kovačević: X 243 ([Nitter mirror, Nov 2026](https://nitter.gq/slavzilla)), LinkedIn ~4,000 ([LinkedIn, via search snippet](https://me.linkedin.com/in/slavkokovacevic)); Kosta Pavlović: LinkedIn ~2,000 ([LinkedIn, via search snippet](https://me.linkedin.com/in/kosta-pavlovic)), 58 repository stars ([GitHub, Nov 2026](https://github.com/kosta-pmf/dnn-audio-watermarking)) |
| Distribution Signals | 1,115 LinkedIn followers and 26 X followers ([LinkedIn, Nov 2026](https://www.linkedin.com/company/deepmark-me/), [Nitter mirror, Nov 2026](https://nitter.gq/deepmark_me)), 5,400 estimated September visits ([Mindspent, Sep 2026](https://mindspent.com/c/deepmark)) |
| Emails | slavko@deepmark.me, Slavko Kovačević, CEO ([Launch YC, Sep 2026](https://www.ycombinator.com/launches/UEj-deepmark-reinventing-trust-in-voice)) |
