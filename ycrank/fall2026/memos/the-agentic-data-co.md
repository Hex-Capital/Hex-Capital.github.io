# The Agentic Data Co.

> Training data for speech models

| Field | Value |
|-------|-------|
| Website | https://theagenticdatacompany.com |
| YC Page | https://www.ycombinator.com/companies/the-agentic-data-co |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/the-agentic-data-co)) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | AI, Conversational AI, ML |
| YC Partner | Christopher Golda ([Y Combinator](https://www.ycombinator.com/companies/the-agentic-data-co)) |
| Emails | christian@theagenticdatacompany.com, product and research ([Open Yap dataset card](https://huggingface.co/datasets/TheAgenticDataCompany/open-yap-1k), [company contact page](https://theagenticdatacompany.com/contact)); matias@theagenticdatacompany.com, data requests and partnerships, and founders@theagenticdatacompany.com, shared founder inbox ([Launch YC](https://www.ycombinator.com/launches/XN4-the-agentic-data-company-real-world-speech-data-and-rl-environments-for-speech-models)); legal@theagenticdatacompany.com, website privacy ([company privacy notice](https://theagenticdatacompany.com/privacy)); hello@yap-room.com, app support ([YapRoom](https://yap-room.com/)); privacy@yap-room.com, participant privacy ([YapRoom privacy policy](https://yap-room.com/privacy)); safety@yap-room.com, app safety ([YapRoom community guidelines](https://yap-room.com/community-guidelines)) |

## The Idea

- **Problem:** Speech-model teams use audiobooks, scraped video, synthetic dialogue, and gig-worker recordings that the company says underrepresent interruptions, overlapping speech, and how people coordinate conversations with real tasks ([company overview](https://theagenticdatacompany.com/), [Center for Data Innovation, Oct 2026](https://datainnovation.org/2026/10/5-qs-with-christian-vestergaard-co-founder-of-the-agentic-data-company/)).
- **Approach:** YapRoom pays people to record calls with people they know on synchronized, separate audio tracks, and the company builds reinforcement-learning environments for speech models to practice dialogue and tool use ([Open Yap dataset card](https://huggingface.co/datasets/TheAgenticDataCompany/open-yap-1k), [Launch YC, Nov 2026](https://www.ycombinator.com/launches/XN4-the-agentic-data-company-real-world-speech-data-and-rl-environments-for-speech-models)).
- **Differentiation:** The company combines self-paired calls and audio-native simulations, while Besimple offers expert transcription and speaker labeling and Liva collects both voice and video for expressive models ([Launch YC](https://www.ycombinator.com/launches/XN4-the-agentic-data-company-real-world-speech-data-and-rl-environments-for-speech-models), [Besimple](https://besimple.ai/), [Liva YC launch](https://www.ycombinator.com/companies/liva-ai)).
- **Business Model:** Open Yap 1K is free for research and commercial use under a data-use agreement, and teams can inquire about licensing the full corpus or private datasets ([Hugging Face dataset card](https://huggingface.co/datasets/TheAgenticDataCompany/open-yap-1k), [private catalog](https://theagenticdatacompany.com/)).
- **TAM/SAM:** Emerging Business Insights estimates the broader global speech and audio data market at $3.5B in 2024 and $12.8B in 2033, with 15.8% projected CAGR from 2026 to 2033 ([Speech and Audio Data Market](https://www.emergingbusinessinsights.com/product/speech-and-audio-data-market/)).
- **GTM / Distribution:** The company distributes Open Yap through Hugging Face and GitHub, directs lab inquiries to the founders, and recruits recording participants through YapRoom ([Hugging Face](https://huggingface.co/datasets/TheAgenticDataCompany/open-yap-1k), [Launch YC](https://www.ycombinator.com/launches/XN4-the-agentic-data-company-real-world-speech-data-and-rl-environments-for-speech-models), [YapRoom](https://yap-room.com/)).

## Defensibility

- **Moat today:** Its own recording app produced 1,602 conversations from 239 speakers for Open Yap 1K, with speaker-level consent, synchronized tracks, and transcript screening ([Open Yap methodology](https://theagenticdatacompany.com/open-yap-1k)).
- **Future moat:** [Inferred]: A recurring pool of callers could make specialized recordings easier to collect if participants return and the company secures exclusive rights for some datasets ([Open Yap methodology](https://theagenticdatacompany.com/open-yap-1k)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** oto already licenses consented full-duplex audio and publishes an entry price of $10 per audio hour, giving buyers another source for paired conversational recordings ([oto catalog, Nov 2026](https://www.oto.earth/datasets)).

## Market & Traction

- **Traction signals:**
  - November 11 launch post drew 8,073 views by November 12 ([Doomers AI, Nov 2026](https://doomers.ai/launches/the-agentic-data-company)).
  - 8,204 downloads in the preceding month and 211 likes for Open Yap 1K ([Hugging Face, Nov 2026](https://huggingface.co/datasets/TheAgenticDataCompany/open-yap-1k)).
  - OpenYap Turn ranked #1 for end-of-turn detection and #2 for interruption detection in the company’s October snapshot. Sesame’s November leaderboard lists it at #2 for end-of-turn detection ([company research, Oct 17, 2026](https://theagenticdatacompany.com/research/turn-taking), [Sesame TurnBench, Nov 2026](https://turnbench.sesame.com/)).
  - 21 stars for the Open Yap 1K repository ([GitHub, Nov 2026](https://github.com/The-Agentic-Data-Co/open-yap-1k)).
  - 283 LinkedIn followers and 93 X followers for @agenticdataco ([LinkedIn, Nov 2026](https://www.linkedin.com/company/theagenticdataco/), [Teapawt X mirror, Nov 2026](https://xitter.gq/agenticdataco)).
  - Founder interview published October 23 ([Center for Data Innovation, Oct 2026](https://datainnovation.org/2026/10/5-qs-with-christian-vestergaard-co-founder-of-the-agentic-data-company/)).
  - 0 open positions on YC’s jobs board ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/the-agentic-data-co/jobs)).
  - YC backing confirmed by the founder. CB Insights lists $500K and Dealroom lists $125K for September 2026, while YC publishes a $500K standard commitment across two SAFEs ([founder announcement](https://www.linkedin.com/posts/chrisvestergaard_feels-unreal-to-say-were-backed-by-y-combinator-activity-7503453300294406144-Xs_t), [CB Insights](https://www.cbinsights.com/company/the-agentic-data-company/financials), [Dealroom](https://app.dealroom.co/companies/the_agentic_data_co), [YC standard deal](https://www.ycombinator.com/deal)).
- **Competitors:**
  - **David AI** ($80M across announced rounds, revenue unknown) designs custom audio datasets and model evaluations, with a $50M Series B led by Meritech in October 2025 ([David AI announcements](https://www.withdavid.ai/news)).
  - **Besimple AI** ($3M announced, revenue unknown) pairs multilingual conversational audio with expert transcription and speaker labeling, with a November 2025 seed round Dealroom reports was led by YC ([Besimple](https://besimple.ai/blogs), [Dealroom](https://app.dealroom.co/news/feed/ex-meta-engineers-raise-3m-for-besimple-ai-an-audio-data-labelling-platform-for-ai-training)).
  - **Liva AI** ($125K August 2025 YC seed entry in Dealroom, revenue unknown) collects consented voice and video for expressive and socially aware models ([Dealroom](https://app.dealroom.co/companies/liva_ai), [Liva YC launch](https://www.ycombinator.com/companies/liva-ai)).
  - **oto** (funding and revenue unknown) licenses full-duplex conversations with options for egocentric video and multi-speaker recordings ([oto catalog](https://www.oto.earth/datasets)).
- **Why now:** [Inferred]: OpenAI’s September 2026 release of GPT‑Live‑1 brought simultaneous listening and speaking with delegated tool calls to its API, making turn-taking and task execution testable in deployed voice agents ([OpenAI, Sep 2026](https://openai.com/index/introducing-gpt-live-1-in-the-api/)).

## Founders & Team

- **Christian Vestergaard (Co-Founder)**
  - Background: Studied at Copenhagen Business School, worked at Resights and Nova Founders Capital, and founded and sold direct-mail software company Postbuddy ([Dealroom](https://dealroom.co/just-founded/the-agentic-data-co/), [YC founder profile](https://www.ycombinator.com/founders/christian-vestergaard), [Launch YC](https://www.ycombinator.com/launches/XN4-the-agentic-data-company-real-world-speech-data-and-rl-environments-for-speech-models)).
  - Twitter/X: @CVestergaard_, count not retrievable ([YC founder profile](https://www.ycombinator.com/founders/christian-vestergaard)).
  - LinkedIn: “The Agentic Data Company (YC F26),” 6K followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/chrisvestergaard)).
  - GitHub: @vestergaardn, `moshi-tuning` has 0 stars ([GitHub, Nov 2026](https://github.com/vestergaardn/moshi-tuning)).
  - Email: christian@theagenticdatacompany.com, product and research ([Open Yap dataset card](https://huggingface.co/datasets/TheAgenticDataCompany/open-yap-1k), [company contact page](https://theagenticdatacompany.com/contact)).
- **Matias Voldby Drejer (Co-founder)**
  - Background: Studied at Copenhagen Business School and led growth and operations at Female Invest, where he built its data-science and growth functions ([YC founder profile](https://www.ycombinator.com/founders/matias-voldby-drejer), [Launch YC](https://www.ycombinator.com/launches/XN4-the-agentic-data-company-real-world-speech-data-and-rl-environments-for-speech-models)).
  - Twitter/X: @matiasdrejer, 312 followers ([Teapawt X mirror, Nov 2026](https://www.xitter.gq/matiasdrejer)).
  - LinkedIn: “The Agentic Data Company,” 8K followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/matiasdrejer)).
  - GitHub: @MatiasVoldbyDrejer, `linkedin-attio-sync` has 2 stars ([GitHub, Nov 2026](https://github.com/MatiasVoldbyDrejer/linkedin-attio-sync)).
  - Email: matias@theagenticdatacompany.com, data requests and partnerships ([Launch YC](https://www.ycombinator.com/launches/XN4-the-agentic-data-company-real-world-speech-data-and-rl-environments-for-speech-models), [company contact page](https://theagenticdatacompany.com/contact)).
- **Co-founder relationship:** They met while working in London, and both YC profiles list Nova Founders Capital among their prior employers ([Launch YC](https://www.ycombinator.com/launches/XN4-the-agentic-data-company-real-world-speech-data-and-rl-environments-for-speech-models), [Vestergaard YC profile](https://www.ycombinator.com/founders/christian-vestergaard), [Drejer YC profile](https://www.ycombinator.com/founders/matias-voldby-drejer)).
- **Founder-market fit:** Vestergaard’s software product experience and Drejer’s growth and data-science work map to building the collection app and recruiting speakers, with Christopher Golda assigned as YC partner. The company’s privacy notice identifies Copenhagen as an operating location ([Launch YC](https://www.ycombinator.com/launches/XN4-the-agentic-data-company-real-world-speech-data-and-rl-environments-for-speech-models), [YC directory](https://www.ycombinator.com/companies/the-agentic-data-co), [privacy notice](https://theagenticdatacompany.com/privacy)).

## Key Risks

- **Recording rights and privacy:** [Inferred]: Unscripted calls can contain identifying information or third-party voices, so YapRoom requires consent, prohibits recording nonconsenting third parties, and screens transcripts before release ([YapRoom terms](https://yap-room.com/terms), [Open Yap methodology](https://theagenticdatacompany.com/open-yap-1k)).
- **Collection economics:** [Inferred]: YapRoom’s $10 payment per speaker per clear hour makes participant payouts $20 for a usable two-person hour before review costs, and the corpus applies human linguistic review and automated screening ([YapRoom](https://yap-room.com/), [Open Yap methodology](https://theagenticdatacompany.com/open-yap-1k)).
- **Benchmark coverage:** [Inferred]: TurnBench’s English conversational timing tasks leave multilingual transfer and tool-based task completion unverified by that benchmark ([Sesame methodology](https://www.sesame.com/journal/turnbench), [Launch YC](https://www.ycombinator.com/launches/XN4-the-agentic-data-company-real-world-speech-data-and-rl-environments-for-speech-models)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader speech and audio data market of $3.5B in 2024, projected 15.8% CAGR in 2026–2033 ([Emerging Business Insights](https://www.emergingbusinessinsights.com/product/speech-and-audio-data-market/)) |
| SAM | No public data found |
| Traction | 8,204 monthly downloads and 211 likes for Open Yap 1K ([Hugging Face, Nov 2026](https://huggingface.co/datasets/TheAgenticDataCompany/open-yap-1k)), #2 end-of-turn detection ([Sesame TurnBench, Nov 2026](https://turnbench.sesame.com/)) |
| Revenue Signal | Company says unnamed AI labs buy its data ([YapRoom FAQ](https://yap-room.com/#faq)), and Open Yap 1K is free under a data-use agreement ([Hugging Face](https://huggingface.co/datasets/TheAgenticDataCompany/open-yap-1k)) |
| Founders | Christian Vestergaard (Co-Founder), founded and sold Postbuddy, previously at Resights ([Launch YC](https://www.ycombinator.com/launches/XN4-the-agentic-data-company-real-world-speech-data-and-rl-environments-for-speech-models), [YC founder profile](https://www.ycombinator.com/founders/christian-vestergaard)). Matias Voldby Drejer (Co-founder), former Female Invest growth and operations lead, Copenhagen Business School ([YC founder profile](https://www.ycombinator.com/founders/matias-voldby-drejer)) |
| Competitors | David AI ($80M announced, revenue unknown, custom data and evals, [David AI](https://www.withdavid.ai/news)), Besimple ($3M announced, revenue unknown, expert labeling, [Besimple](https://besimple.ai/blogs)), Liva ($125K seed entry, revenue unknown, voice and video, [Dealroom](https://app.dealroom.co/companies/liva_ai), [YC](https://www.ycombinator.com/companies/liva-ai)), oto (funding and revenue unknown, full-duplex audio and video, [oto](https://www.oto.earth/datasets)) |
| Moat Signals | Company-operated recording app, consented corpus, separate synchronized speaker tracks ([Open Yap methodology](https://theagenticdatacompany.com/open-yap-1k)) |
| Risk Factors | Unscripted recording consent ([YapRoom terms](https://yap-room.com/terms)), paid speaker acquisition ([YapRoom](https://yap-room.com/)), English-only benchmark coverage ([Sesame](https://www.sesame.com/journal/turnbench)) |
| Founder Reach | Vestergaard, 6K LinkedIn ([LinkedIn, via search snippet](https://www.linkedin.com/in/chrisvestergaard)). Drejer, 312 X and 8K LinkedIn ([Teapawt X mirror](https://www.xitter.gq/matiasdrejer), [LinkedIn, via search snippet](https://www.linkedin.com/in/matiasdrejer)) |
| Distribution Signals | Free YapRoom iOS listing ([U.S. App Store, Nov 2026](https://apps.apple.com/us/app/yaproom/id6768834584)), 21 repository stars ([GitHub, Nov 2026](https://github.com/The-Agentic-Data-Co/open-yap-1k)), 283 LinkedIn followers ([LinkedIn, Nov 2026](https://www.linkedin.com/company/theagenticdataco/)) |
| Emails | christian@theagenticdatacompany.com ([Open Yap dataset card](https://huggingface.co/datasets/TheAgenticDataCompany/open-yap-1k)), matias@theagenticdatacompany.com and founders@theagenticdatacompany.com ([Launch YC](https://www.ycombinator.com/launches/XN4-the-agentic-data-company-real-world-speech-data-and-rl-environments-for-speech-models)), legal@theagenticdatacompany.com ([company privacy notice](https://theagenticdatacompany.com/privacy)), hello@yap-room.com ([YapRoom](https://yap-room.com/)), privacy@yap-room.com ([YapRoom privacy policy](https://yap-room.com/privacy)), safety@yap-room.com ([YapRoom community guidelines](https://yap-room.com/community-guidelines)) |
