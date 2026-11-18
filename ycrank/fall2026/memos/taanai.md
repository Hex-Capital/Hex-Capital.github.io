# Taan.ai

> the most precise & controllable foundation music models 

| Field | Value |
|-------|-------|
| Website | https://taan.ai/ |
| YC Page | https://www.ycombinator.com/companies/taanai |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/taanai)) |
| Industry | B2B / B2B |
| Team Size | 0 |
| Location | San Francisco, CA, USA |
| Tags | Generative AI |
| YC Partner | Aaron Epstein ([Y Combinator](https://www.ycombinator.com/companies/taanai)) |
| Emails | ad1thya.rohith@gmail.com (CEO business inquiries, [Rohith’s site](https://ad1thya.com/)), devanshgupta2810@gmail.com (company GitHub contact, [Taan GitHub](https://github.com/aalap-mvp)), founders@taan.ai (partnership inquiries, [Launch YC](https://www.ycombinator.com/launches/WlG-taan-ai-the-most-controllable-foundation-music-model)), team@taan.ai (developer inquiries) and support@taan.ai (bug reports, [Taan developer docs](https://github.com/aalap-mvp/mcp-user-docs)) |

## The Idea

- **Problem:** Video editors who need music to change at a specific cut may have to regenerate tracks repeatedly when prompt-based music generators miss instrument cues or pauses ([Taan’s Launch YC post](https://www.ycombinator.com/launches/WlG-taan-ai-the-most-controllable-foundation-music-model)).
- **Approach:** Taan detects cuts and mood in uploaded video, generates a score aligned to those cues, and accepts revisions to individual instruments or timings ([Taan product page](https://taan.ai/)).
- **Differentiation:** Taan’s August TimingBench reports 91.3% of timed events within ±500 ms for Taan, 12.8% for ElevenLabs v2, 8.6% for Google Lyria and 6.8% for Suno ([Taan TimingBench, Aug 2026](https://taan.ai/research/control-benchmarks/)).
- **Business Model:** Creator costs $15/month for 25 minutes of music, Agency costs $45/month for 60 minutes, and Enterprise has custom volume pricing ([Taan pricing, Nov 2026](https://taan.ai/#pricing)).
- **TAM/SAM:** Grand View Research estimates the broader global AI music generator market at $1.03B in 2026, with 21.1% CAGR through 2033 ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/ai-music-generator-market-report)).
- **GTM / Distribution:** Taan offers self-serve Studio, API and MCP access and solicits integrations from video agents, ad tools, micro-drama apps and games ([Taan developer docs](https://taan.ai/docs/), [Launch YC](https://www.ycombinator.com/launches/WlG-taan-ai-the-most-controllable-foundation-music-model)).

## Defensibility

- **Moat today:** Rohith lists two published music-generation patent applications, and Taan says its training music is licensed ([Rohith’s site](https://ad1thya.com/), [Taan product page](https://taan.ai/)).
- **Future moat:** [Inferred]: If customers embed Taan’s API and save music versions for refinement, switching providers could require rebuilding those workflows, with public evidence currently limited to the documented capabilities ([Taan API docs](https://taan.ai/docs/api/)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** ElevenLabs and Sonilo already offer video-to-music APIs, giving developers multiple suppliers for soundtrack generation from uploaded footage ([ElevenLabs API docs](https://elevenlabs.io/docs/api-reference/music/video-to-music), [Sonilo](https://sonilo.com/about)).

## Market & Traction

- **Traction signals:**
  - $1M raised, per CEO Adithya Rohith’s launch post (LinkedIn, Nov 2026, via search snippet). CB Insights separately lists $500K from YC dated Nov 1, 2026 (via search snippet). ([Rohith post excerpt](https://sv.linkedin.com/school/y-combinator/), [CB Insights](https://www.cbinsights.com/company/taanai/financials))
  - Taan v1-preview launched on YC and on X, where the founder’s launch post logged approximately 326K views ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/WlG-taan-ai-the-most-controllable-foundation-music-model), [X launch post mirror, Nov 2026](https://xitter.cf/mp3addi/status/2120925450243551498)).
  - Video scoring supplied to Music for Video AI, which identifies Taan as its scoring provider ([Music for Video AI, Aug 2026](https://www.music-for-video.ai/blog/best-ai-music-for-video)).
  - 290 company LinkedIn followers and 124 followers on X at @taan_ai ([Taan LinkedIn](https://www.linkedin.com/company/taan-ai/), [X profile mirror](https://www.teapawt.net/taan_ai), Nov 2026).
  - Launch coverage in Reveneau and The Reel Stack ([Reveneau, Nov 2026](https://reveneau.com/ainews/taan-ai-yc-fall-2026-music-model-23-votes-250-timing-prompts), [The Reel Stack, Nov 2026](https://thereelstack.com/lab/taan-v1-preview-video-scoring-riverside-tonality-word-edit-hyperframes-0-9-40)).
  - 0 active YC job listings ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/taanai/jobs)).
- **Competitors:**
  - **Sonilo** ($11M disclosed, revenue unknown) generates music and sound effects from footage, with audio ducking in its API ($11M round led by B Capital, Oct 2026). ([Sonilo announcement](https://www.prnewswire.com/news-releases/sonilo-raises-11m-to-build-the-ai-native-audio-stack-for-video-302908461.html), [Sonilo API overview](https://sonilo.com/about))
  - **ElevenLabs** ($781M raised as of Feb 2026, $600M companywide ARR per CEO in Sep 2026) generates video soundtracks plus separate sound-effect layers ($500M Series D led by Sequoia in Feb, with a third close in May). ([Series D](https://elevenlabs.io/blog/series-d), [May close](https://elevenlabs.io/blog/500m-arr-and-new-investors), [CEO interview](https://techcrunch.com/2026/09/24/twenty-minutes-with-the-ceo-of-elevenlabs-now-reportedly-valued-at-22-billion/), [ElevenCreative](https://elevenlabs.io/blog/introducing-instant-soundtracks))
  - **Suno** (over $775M raised, $300M ARR as of Feb 2026) focuses on song creation with vocals and lyrics editing (over $400M Series D led by Bond Capital, Jun 2026). ([Suno funding](https://suno.com/about), [Series D](https://suno.com/blog/series-d-announcement), [CEO disclosure](https://www.linkedin.com/feed/update/urn:li:activity:7432540569316364289/), [Suno v6](https://suno.com/blog/introducing-v6))
  - **Google Lyria** (standalone funding and revenue unknown) offers Gemini API music generation and demonstrated a workflow that converts uploaded video into a soundtrack prompt ([Google, Mar 2026](https://blog.google/innovation-and-ai/technology/developers-tools/lyria-3-developers/)).
  - **Adobe Firefly** (standalone funding and revenue unknown) generates music directly inside a selected Premiere timeline range ([Adobe, Aug 2026](https://community.adobe.com/announcements-732/now-in-beta-generate-music-in-premiere-1637080)).
- **Why now:** [Inferred]: Google’s March 2026 music API preview and Adobe’s August 2026 Premiere beta brought score generation into developer and editing workflows that can use video as input. ([Google developer announcement](https://blog.google/innovation-and-ai/technology/developers-tools/lyria-3-developers/), [Adobe Premiere beta](https://community.adobe.com/announcements-732/now-in-beta-generate-music-in-premiere-1637080))

## Founders & Team

- **Adithya Rohith (CEO):**
  - Background: PES University computer science B.Tech, touring metal guitarist and former Aalap AI CEO, who reports $1K MRR for Aalap AI during Dec 2024–Nov 2025 and dates Taan to Jan 2026. Business email ad1thya.rohith@gmail.com ([Rohith’s site](https://ad1thya.com/)).
  - Twitter/X: @mp3addi, approximately 1.5K followers ([YC founder profile](https://www.ycombinator.com/founders/adithya-rohith), [X profile mirror, Nov 2026](https://teapaw.org/mp3addi)).
  - LinkedIn: Taan.ai affiliation visible, headline not retrievable ([LinkedIn, via search snippet](https://in.linkedin.com/in/adithya-ai-music)).
  - GitHub: No public repos found.
- **Devansh Gupta (CTO):**
  - Background: Studied data science and researched signal processing at IIT Kanpur, then interned in ML at American Express. Taan’s GitHub organization publishes devanshgupta2810@gmail.com as its contact ([YC founder profile](https://www.ycombinator.com/founders/devansh-gupta), [Launch YC](https://www.ycombinator.com/launches/WlG-taan-ai-the-most-controllable-foundation-music-model), [Taan GitHub](https://github.com/aalap-mvp)).
  - Twitter/X: @Devvgupta44, count not retrievable ([YC founder profile](https://www.ycombinator.com/founders/devansh-gupta)).
  - LinkedIn: Taan AI affiliation visible, headline not retrievable ([LinkedIn, via search snippet](https://in.linkedin.com/in/devansh-gupta-158809252)).
  - GitHub: No public repos found.
- **Co-founder relationship:** The founders co-authored TimingBench, and YC lists both as active founders ([Taan Research, Aug 2026](https://taan.ai/research/), [YC company profile](https://www.ycombinator.com/companies/taanai)).
- **Founder-market fit:** Rohith combines performance and music-generation research, Gupta brings signal-processing and applied ML experience, and YC lists Aaron Epstein as primary partner ([Y Combinator](https://www.ycombinator.com/companies/taanai), [Taan Research](https://taan.ai/research/)).

## Key Risks

- **Benchmark comparability:** Taan’s research page reports 96.1% instruction success and 91.3% on-time events, while its YC launch reports 80.1% and 73.2%, respectively. The research methodology also uses Taan reference stems for events affected by source separation ([Taan TimingBench](https://taan.ai/research/control-benchmarks/), [Launch YC](https://www.ycombinator.com/launches/WlG-taan-ai-the-most-controllable-foundation-music-model)).
- **Technical scope:** [Inferred]: Performance on longer edits or outside cinematic and orchestral music remains uncertain because TimingBench uses 30-second instrumental requests and v1-preview is tuned to those genres ([Taan Research](https://taan.ai/research/), [Launch YC](https://www.ycombinator.com/launches/WlG-taan-ai-the-most-controllable-foundation-music-model)).
- **Editor substitution:** [Inferred]: Premiere users can generate music from the existing timeline, reducing the need to export footage to a separate scoring tool ([Adobe Premiere beta](https://community.adobe.com/announcements-732/now-in-beta-generate-music-in-premiere-1637080)).
- **Name ambiguity:** [Inferred]: App-store searches for Taan can surface a separate product, Taan – Audio Wellness ([Apple App Store](https://apps.apple.com/rs/app/taan-audio-wellness/id6757662580)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.03B global AI music generator market in 2026, 21.1% CAGR through 2033 ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/ai-music-generator-market-report)) |
| SAM | No public data found |
| Traction | $1M raised (Rohith, Nov 2026, [LinkedIn via search snippet](https://sv.linkedin.com/school/y-combinator/)), scoring integration ([Music for Video AI, Aug 2026](https://www.music-for-video.ai/blog/best-ai-music-for-video)) |
| Revenue Signal | $15/month Creator, $45/month Agency, custom Enterprise ([Taan pricing, Nov 2026](https://taan.ai/#pricing)) |
| Founders | Adithya Rohith (CEO), PES University, Aalap AI, music ML ([Rohith’s site](https://ad1thya.com/)). Devansh Gupta (CTO), IIT Kanpur, signal processing, American Express ML ([Y Combinator](https://www.ycombinator.com/companies/taanai)) |
| Competitors | Sonilo ($11M raised, revenue unknown, footage-to-music and sound effects, [Sonilo](https://www.prnewswire.com/news-releases/sonilo-raises-11m-to-build-the-ai-native-audio-stack-for-video-302908461.html)). ElevenLabs ($781M raised as of Feb 2026, $600M ARR as of Sep 2026, layered audio, [ElevenLabs](https://elevenlabs.io/blog/series-d), [TechCrunch](https://techcrunch.com/2026/09/24/twenty-minutes-with-the-ceo-of-elevenlabs-now-reportedly-valued-at-22-billion/)). Suno (over $775M raised, $300M ARR as of Feb 2026, vocal song creation, [Suno](https://suno.com/about), [CEO disclosure](https://www.linkedin.com/feed/update/urn:li:activity:7432540569316364289/)). Google Lyria (standalone funding and revenue unknown, Gemini API, [Google](https://blog.google/innovation-and-ai/technology/developers-tools/lyria-3-developers/)). Adobe Firefly (standalone funding and revenue unknown, Premiere timeline scoring, [Adobe](https://community.adobe.com/announcements-732/now-in-beta-generate-music-in-premiere-1637080)) |
| Moat Signals | Two published music-generation patent applications ([Rohith’s site](https://ad1thya.com/)), licensed training music ([Taan product page](https://taan.ai/)) |
| Risk Factors | Benchmark comparability and scope ([Taan Research](https://taan.ai/research/), [Launch YC](https://www.ycombinator.com/launches/WlG-taan-ai-the-most-controllable-foundation-music-model)), competing scoring inside Premiere ([Adobe](https://community.adobe.com/announcements-732/now-in-beta-generate-music-in-premiere-1637080)) |
| Founder Reach | Rohith: X approximately 1.5K ([X profile mirror](https://teapaw.org/mp3addi)), LinkedIn 1K ([LinkedIn via search snippet](https://in.linkedin.com/in/adithya-ai-music)). Gupta: LinkedIn 614 ([LinkedIn via search snippet](https://in.linkedin.com/in/devansh-gupta-158809252)) |
| Distribution Signals | 290 company LinkedIn followers, 124 company X followers, approximately 326K X launch-post views ([Taan LinkedIn](https://www.linkedin.com/company/taan-ai/), [X profile mirror](https://www.teapawt.net/taan_ai), [X launch post mirror](https://xitter.cf/mp3addi/status/2120925450243551498), Nov 2026) |
| Emails | ad1thya.rohith@gmail.com (CEO, [Rohith’s site](https://ad1thya.com/)), devanshgupta2810@gmail.com (company GitHub contact, [Taan GitHub](https://github.com/aalap-mvp)), founders@taan.ai (partnerships, [Launch YC](https://www.ycombinator.com/launches/WlG-taan-ai-the-most-controllable-foundation-music-model)), team@taan.ai (developer inquiries) and support@taan.ai (bug reports, [Taan developer docs](https://github.com/aalap-mvp/mcp-user-docs)) |
