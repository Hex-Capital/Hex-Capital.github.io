# DeepMark

> A live watermark inside AI voice that survives phone calls

| Field | Value |
|-------|-------|
| Website | https://www.deepmark.me |
| YC Page | https://www.ycombinator.com/companies/deepmark |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/deepmark)) |
| Industry | B2B / B2B -> Security |
| Team Size | 5 |
| Location | San Francisco, CA, USA |
| Tags | B2B, Cybersecurity |
| YC Partner | Max Kolysh ([YC](https://www.ycombinator.com/companies/deepmark)) |
| Emails | slavko@deepmark.me, hello@deepmark.me ([YC](https://www.ycombinator.com/companies/deepmark), [official GitHub profile](https://github.com/deepmark)) |

## The Idea

- **Problem:** Banks and contact centers face cloned-voice impersonation, while file metadata and synthetic-audio detection do not establish whether a speaking agent is authorized ([YC launch](https://www.ycombinator.com/launches/UEj-deepmark-reinventing-trust-in-voice)).
- **Approach:** DeepMark embeds an identifier into generated speech, then detects it downstream and resolves it to an identity or authorization record through its embedding-and-verification workflow ([DeepMark](https://www.deepmark.me)).
- **Differentiation:** DeepMark emphasizes authorized-agent identity through telephone channels, whereas Google SynthID identifies supported AI-generated content and Meta AudioSeal provides an open-source watermarking primitive with optional identifiers ([DeepMark](https://www.deepmark.me), [Google](https://deepmind.google/models/synthid/), [Meta](https://github.com/facebookresearch/audioseal)).
- **Business Model:** Commercial platform licensing is documented, and evaluation access follows a demo request; public prices and billing units: No public data found ([YC](https://www.ycombinator.com/companies/deepmark), [DeepMark](https://www.deepmark.me)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; broader digital watermarking was estimated at $1.45 billion in 2024, with 11.4% CAGR during 2025–2033, covering applications beyond voice authentication ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/digital-watermarking-market-report)).
- **GTM / Distribution:** The company solicits voice-model providers for demonstrations using their audio and distributes through SDK/API integrations and partners including Ortana’s Cubix media-workflow platform ([YC launch](https://www.ycombinator.com/launches/UEj-deepmark-reinventing-trust-in-voice), [Ortana](https://www.ortana.tv/news-02042026)).

## Defensibility

- **Moat today:** Public technical assets include the AWARE audio-watermarking research implementation and benchmark tooling, while the commercial Vigil model remains proprietary ([AWARE](https://github.com/deepmark/aware), [DeepMark technical comparison](https://www.deepmark.me/blog/deepmark-vigil-vs-meta-audioseal)).
- **Future moat:** [Inferred]: Integrations with generators and receivers could create switching costs around deployed identifiers and verification workflows, but customer retention and replacement costs are not publicly documented.
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given Google’s deployed watermarking system and Meta’s commercially usable open-source models ([Google](https://deepmind.google/models/synthid/), [Meta license](https://github.com/facebookresearch/audioseal/blob/main/LICENSE)).
- **Commoditization risk:** Meta AudioSeal offers streaming watermarking under MIT licensing, and Resemble offers both open-source PerTh and enterprise multimodal watermarking, giving developers alternatives to licensing DeepMark ([Meta](https://github.com/facebookresearch/audioseal), [Resemble](https://www.resemble.ai/products/watermarker)).

## Market & Traction

- **Traction signals:**
  - First platform license signed before YC and operating in production, according to the founders; customer identity and contract value undisclosed ([YC launch](https://www.ycombinator.com/launches/UEj-deepmark-reinventing-trust-in-voice), accessed October 27, 2026).
  - Customer testimonials identify Confident Security and Pencil, with Confident Security describing production use; no financial outcomes disclosed ([DeepMark](https://www.deepmark.me), accessed October 27, 2026).
  - Media-provenance partnership integrates watermarking into Ortana Cubix, separate from disclosed voice-agent licensing ([Ortana](https://www.ortana.tv/news-02042026), April 2026).
  - Company LinkedIn displays 1,088 followers ([LinkedIn](https://www.linkedin.com/company/deepmark-me/), accessed October 27, 2026).
  - Coverage in Vijesti on October 4, 2026 ([Vijesti](https://www.vijesti.me/vijesti/drustvo/829783/necujnim-zigovima-protiv-laznih-glasova-kolasinski-startap-stigao-do-silicijumske-doline)).
  - Public support comprised €33,392.30 received in 2023 and €200,000 approved for PatchMark development in 2025 ([Innovation Fund](https://fondzainovacije.me/en/news/deepmark-selected-for-y-combinator/), September 2026).
  - A $1.2 million fundraising target had $360,000 remaining open in June 2025; this announcement does not establish a completed round ([DeepMark funding update](https://www.deepmark.me/blog/funding-update-deepmarks-12-m-pre-seed-round-enters-final-stretch)).
  - YC lists zero job openings ([YC](https://www.ycombinator.com/companies/deepmark), accessed October 27, 2026).
- **Competitors:**
  - **Resemble AI** ($25 million cumulative funding reported December 2025; revenue unknown): offers open-source audio watermarking and enterprise multimodal provenance, overlapping beyond DeepMark’s telephone-identity focus ([funding announcement](https://www.resemble.ai/resources/resemble-ai-secures-13m-to-combat-rising-ai-generated-threats), [product](https://www.resemble.ai/products/watermarker)); its $13 million strategic round named Google’s AI Future Fund and Okta Ventures among participants, without identifying a lead.
  - **Google SynthID** (standalone funding: No public data found; revenue unknown): adjacent alternative for recognizing content generated through participating models, rather than DeepMark’s advertised agent-authorization record ([Google](https://deepmind.google/models/synthid/)).
  - **Meta AudioSeal** (standalone funding: No public data found; revenue unknown): open-source streaming watermarking with an optional 16-bit message, requiring developers to supply their surrounding identity workflow ([Meta](https://github.com/facebookresearch/audioseal)).
- **Why now:** EU Article 50 transparency rules began applying on August 2, 2026, requiring machine-readable marking and detectability of covered synthetic content, with exceptions and transitional provisions ([European Commission](https://digital-strategy.ec.europa.eu/en/factpages/quick-facts-transparency-rules-ai-systems)).

## Founders & Team

- **Slavko Kovačević (Founder/CEO):**
  - Background: University of Montenegro computer-science master’s graduate and PhD candidate, formerly a university teaching/research assistant, Fleka Android developer, and Omnitech machine-learning researcher ([university-hosted résumé](https://www.ucg.ac.me/skladiste/blog_615903/objava_1/fajlovi/SK_Resume2024.pdf)).
  - Twitter/X: @realslavko; count not retrievable from X ([X profile](https://x.com/realslavko)).
  - LinkedIn: Headline not retrievable; indexed profile identifies him as DeepMark co-founder/CEO and displays 4K followers ([LinkedIn](https://me.linkedin.com/in/slavkokovacevic), October 2026, via search snippet).
  - GitHub: @slavzilla; pinned company repository deepmarkpy-benchmark has 6 stars ([GitHub](https://github.com/slavzilla), accessed October 27, 2026).
- **Kosta Pavlović (Founder/CSO):**
  - Background: University of Montenegro computer-science PhD with audio-watermarking research, prior Datum Solutions consulting, and university teaching experience ([YC](https://www.ycombinator.com/companies/deepmark), [résumé](https://tehnopolis.me/wp-content/uploads/vfb/2024/03/Kosta-Pavlovic-CV.pdf)).
  - Twitter/X: No public account found.
  - LinkedIn: Headline not retrievable; indexed profile lists DeepMark and displays 1K followers ([LinkedIn](https://me.linkedin.com/in/kosta-pavlovic), October 2026, via search snippet).
  - GitHub: @kosta-pmf; dnn-audio-watermarking has 58 stars ([GitHub](https://github.com/kosta-pmf), accessed October 27, 2026).
- **Co-founder relationship:** The founders report six years working together, beginning as University of Montenegro researchers ([YC launch](https://www.ycombinator.com/launches/UEj-deepmark-reinventing-trust-in-voice)).
- **Founder-market fit:** Both founders researched audio watermarking before commercialization, and the company lists Igor Đurović as senior research advisor and Lighthouse Ventures identifies DeepMark as a portfolio company ([DeepMark team](https://www.deepmark.me/company), [Lighthouse Ventures](https://lhv.vc/news/deepmark-joins-y-combinator/)).

## Key Risks

- **Telephone-channel reliability:** DeepMark’s published comparison uses simulated telephone paths and says actual customer routes require evaluation; its AudioSeal speed comparison excludes AudioSeal’s streaming checkpoint ([DeepMark technical comparison](https://www.deepmark.me/blog/deepmark-vigil-vs-meta-audioseal)).
- **Adversarial removal:** DeepMark acknowledges no watermark is impossible to remove and describes resilience to transformations rather than an absolute guarantee ([DeepMark FAQ](https://www.deepmark.me)).
- **Receiver adoption:** [Inferred]: Verification requires downstream detection and identity resolution, so generator integration alone does not ensure recipients can authenticate calls ([DeepMark workflow](https://www.deepmark.me)).
- **Substitution:** Open-source AudioSeal and PerTh allow customers to implement watermarking internally, although surrounding integration and authorization infrastructure still require engineering ([Meta](https://github.com/facebookresearch/audioseal), [Resemble](https://www.resemble.ai/products/watermarker)).
- **Name ambiguity:** An unrelated Deepmark bookmarking product uses usedeepmark.com, so its subscriptions, installs, and Product Hunt metrics cannot be attributed here ([Product Hunt](https://www.producthunt.com/products/deepmark)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader digital watermarking: $1.45B in 2024; 11.4% CAGR, 2025–2033; not a voice-authentication TAM ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/digital-watermarking-market-report)). |
| SAM | No public data found |
| Traction | Production platform license ([YC](https://www.ycombinator.com/companies/deepmark), October 2026); 1,088 company followers ([LinkedIn](https://www.linkedin.com/company/deepmark-me/), October 27, 2026). |
| Revenue Signal | Commercial platform license in production; amount undisclosed ([YC](https://www.ycombinator.com/companies/deepmark), October 2026). |
| Founders | Slavko Kovačević, CEO: CS master’s, PhD candidate; Kosta Pavlović, CSO: CS PhD, watermarking researcher ([résumé](https://www.ucg.ac.me/skladiste/blog_615903/objava_1/fajlovi/SK_Resume2024.pdf), [YC](https://www.ycombinator.com/companies/deepmark)). |
| Competitors | Resemble AI ($25M reported funding, revenue unknown, multimodal provenance; [company](https://www.resemble.ai/resources/resemble-ai-secures-13m-to-combat-rising-ai-generated-threats)); SynthID (funding undisclosed, revenue unknown, generator attribution; [Google](https://deepmind.google/models/synthid/)); AudioSeal (funding undisclosed, revenue unknown, open-source primitive; [Meta](https://github.com/facebookresearch/audioseal)). |
| Moat Signals | Published AWARE implementation and proprietary Vigil model ([GitHub](https://github.com/deepmark/aware), [DeepMark](https://www.deepmark.me/blog/deepmark-vigil-vs-meta-audioseal)). |
| Risk Factors | Telephone-route validation, watermark removal, open-source substitution ([DeepMark](https://www.deepmark.me/blog/deepmark-vigil-vs-meta-audioseal), [FAQ](https://www.deepmark.me), [Meta](https://github.com/facebookresearch/audioseal)). |
| Founder Reach | Slavko: LinkedIn 4K; Kosta: LinkedIn 1K ([Slavko](https://me.linkedin.com/in/slavkokovacevic), [Kosta](https://me.linkedin.com/in/kosta-pavlovic), October 2026, via search snippets). |
| Distribution Signals | Ortana Cubix integration ([Ortana](https://www.ortana.tv/news-02042026), April 2026). |
| Emails | slavko@deepmark.me, hello@deepmark.me ([YC](https://www.ycombinator.com/companies/deepmark), [official GitHub](https://github.com/deepmark)). |
