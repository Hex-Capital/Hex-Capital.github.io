# Taan.ai

> the most precise & controllable foundation music models 

| Field | Value |
|-------|-------|
| Website | https://taan.ai/ |
| YC Page | https://www.ycombinator.com/companies/taanai |
| Batch | Fall 2026 ([YC directory](https://www.ycombinator.com/companies/industry/generative-ai/san-francisco), Nov 2026) |
| Industry | B2B / B2B |
| Team Size | 0 |
| Location | San Francisco, CA, USA |
| Tags | Generative AI |
| YC Partner | Not listed |
| Emails | team@taan.ai ([Taan documentation](https://github.com/aalap-mvp/mcp-user-docs)); ad1thya.rohith@gmail.com ([founder website](https://ad1thya.com/)) |

## The Idea

- **Problem:** Video creators need musical events aligned to scene changes, while tested text-to-music alternatives frequently miss requested timestamps, requiring subsequent adjustment ([Taan benchmark](https://taan.ai/research/control-benchmarks/), Aug 2026).
- **Approach:** Taan analyzes uploaded video, scripts, or reference audio, composes music around scene timing and mood, and supports targeted instrument and timing edits ([company website](https://taan.ai/), accessed Nov 2026).
- **Differentiation:** Taan reports instruction success of 96.1%, versus ElevenLabs v2’s 28.9%, Google Lyria’s 23.9%, and Suno’s 22.0%, on its own timing benchmark rather than independent testing ([Taan benchmark](https://taan.ai/research/control-benchmarks/), Aug 2026).
- **Business Model:** Creator costs $15/month for 25 music minutes and 15,000 credits; Agency costs $45/month for 60 minutes and 36,000 credits; Enterprise offers custom volume pricing, with API/MCP access included ([pricing](https://taan.ai/), accessed Nov 2026).
- **TAM/SAM:** The broader AI music generator market is estimated at $1,026.7 million in 2026, growing at 21.1% CAGR through 2033; no video-scoring-specific SAM was found ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/ai-music-generator-market-report), 2026).
- **GTM / Distribution:** Public REST API and MCP documentation support integration into developer applications and agent workflows ([API documentation](https://taan.ai/docs/api/); [MCP documentation](https://taan.ai/docs/mcp/)).

## Defensibility

- **Moat today:** Adithya reports published music-generation patent applications 202541117742 and 202541010312, while Taan reports training exclusively on licensed music; company ownership and exclusive licensing terms were not verified ([founder website](https://ad1thya.com/); [company website](https://taan.ai/)).
- **Future moat:** [Inferred]: Embedded scoring and revision workflows could create switching costs, but public documentation establishes integration capabilities rather than customer dependence.
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given ElevenLabs’ existing video-to-music endpoint and Google’s video-soundtracking demonstration ([ElevenLabs documentation](https://elevenlabs.io/docs/api-reference/music/video-to-music); [Google](https://blog.google/innovation-and-ai/technology/developers-tools/lyria-3-developers/), Mar 2026).
- **Commoditization risk:** [Inferred]: Existing audio-model providers can offer overlapping video-scoring workflows, although reproducing Taan’s claimed timestamp accuracy remains unverified ([ElevenLabs documentation](https://elevenlabs.io/docs/api-reference/music/video-to-music); [Taan benchmark](https://taan.ai/research/control-benchmarks/)).

## Market & Traction

- **Traction signals:**
  - Founder-reported $1 million raised, with round terms and participating investors undisclosed in the post ([Adithya’s X post, mirrored by teapawt](https://teapaw.org/mp3addi/status/2117303469556355309), Nov 2, 2026).
  - Public beta launch announcement dated June 11, 2026 ([founder website reproducing announcement](https://ad1thya.com/)).
  - Coverage of the video-scoring beta on Digg ([Digg](https://digg.com/ai/ahtucmtu), Oct 2026).
- **Competitors:**
  - **Suno** ($775 million raised per CB Insights; $300 million annual run rate per company careers page): broader song creation versus Taan’s scene-timed scoring focus, with its latest disclosed primary round exceeding $400 million, led by Bond Capital in June 2026 ([CB Insights](https://www.cbinsights.com/company/suno/financials); [Suno careers, via search snippet](https://about.suno.com/careers); [round announcement](https://suno.com/blog/series-d-announcement)).
  - **ElevenLabs** ($781 million total funding disclosed February 2026; over $500 million company-wide ARR by April 2026): provides video-to-music generation within a broader audio platform, with a $500 million Series D led by Sequoia and a subsequent $300 million employee tender led by Wellington and T. Rowe Price ([Series D](https://elevenlabs.io/blog/series-d); [ARR](https://elevenlabs.io/blog/500m-arr-and-new-investors); [September tender](https://elevenlabs.io/blog/tender-22bn); [product documentation](https://elevenlabs.io/docs/api-reference/music/video-to-music)).
  - **Google Lyria** (standalone funding: No public data found; product revenue unknown): Google distributes music models through developer APIs and demonstrates video analysis feeding soundtrack generation, overlapping Taan’s workflow ([Google](https://blog.google/innovation-and-ai/technology/developers-tools/lyria-3-developers/), Mar 2026).
- **Why now:** [Inferred]: Google’s March 2026 release of music-generation APIs and a video-soundtracking demonstration makes automated scoring accessible within application workflows ([Google](https://blog.google/innovation-and-ai/technology/developers-tools/lyria-3-developers/)).

## Founders & Team

- **Adithya Rohith (Co-founder/CEO):**
  - Background: Lists a PES University B.Tech in Computer Science, AI/ML, for 2022–2026, professional metal performance, and prior venture Aalap AI during December 2024–November 2025 with self-reported $1,000 MRR, which is prior-venture revenue rather than Taan revenue ([founder website](https://ad1thya.com/)).
  - Twitter/X: @mp3addi, approximately 1.1K followers ([teapawt mirror](https://teapaw.org/mp3addi), retrieved Nov 3, 2026).
  - LinkedIn: Headline not retrievable; profile lists Taan.ai and 1K followers ([LinkedIn, via search snippet](https://in.linkedin.com/in/adithya-ai-music), retrieved Nov 2026).
  - GitHub: No public repos found.
- **Devansh Gupta (Co-founder/CTO):**
  - Background: IIT Kanpur student with signal-processing research experience and prior ML engineering work at American Express ([LinkedIn, via search snippet](https://in.linkedin.com/in/devansh-gupta-158809252); [YC directory](https://www.ycombinator.com/companies/industry/generative-ai/san-francisco)).
  - Twitter/X: @Devvgupta44; count not retrievable ([linked founder account](https://www.gpagent.ai/yc/company/taanai)).
  - LinkedIn: Headline not retrievable; profile lists Taan AI and 614 followers ([LinkedIn, via search snippet](https://in.linkedin.com/in/devansh-gupta-158809252), retrieved Nov 2026).
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Adithya’s music performance and generation research complement Devansh’s signal-processing and ML background, and both co-authored TimingBench; YC lists Taan among its funded companies ([founder website](https://ad1thya.com/); [TimingBench](https://taan.ai/research/rushing-or-dragging/); [YC directory](https://www.ycombinator.com/companies/industry/generative-ai/san-francisco)).

## Key Risks

- **Audio fidelity:** Taan reports Fréchet Audio Distance of 4.8 versus competitors’ 2.6–3.5, where lower is better, documenting a fidelity tradeoff alongside its timing results ([Taan benchmark](https://taan.ai/research/control-benchmarks/), Aug 2026).
- **Benchmark validation:** The timing evaluator uses author-labelled validation data, and the paper says independent human annotation remains in progress, limiting external confirmation of the reported advantage ([TimingBench](https://taan.ai/research/rushing-or-dragging/), Aug 2026).
- **Product convergence:** ElevenLabs already accepts video inputs for music generation, while Google demonstrates a similar workflow, creating direct substitution options ([ElevenLabs documentation](https://elevenlabs.io/docs/api-reference/music/video-to-music); [Google](https://blog.google/innovation-and-ai/technology/developers-tools/lyria-3-developers/)).
- **Workflow constraints:** Documented music duration is 10–240 seconds, and MCP video exports omit the original audio, requiring additional handling for longer videos or dialogue-preserving delivery ([API documentation](https://taan.ai/docs/api/); [MCP guide](https://taan.ai/docs/mcp/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader AI music generation: $1,026.7M in 2026; 21.1% CAGR, 2026–2033 ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/ai-music-generator-market-report), 2026). |
| SAM | No public data found |
| Traction | Founder-reported $1M raised ([X post via teapawt](https://teapaw.org/mp3addi/status/2117303469556355309), Nov 2, 2026); beta announced June 11, 2026 ([founder website](https://ad1thya.com/)). |
| Revenue Signal | Creator $15/month; Agency $45/month; Enterprise custom pricing ([company pricing](https://taan.ai/), Nov 2026). |
| Founders | Adithya Rohith, CEO: PES AI/ML, musician, Aalap AI founder ([founder website](https://ad1thya.com/)); Devansh Gupta, CTO: IIT Kanpur, American Express ML ([YC directory](https://www.ycombinator.com/companies/industry/generative-ai/san-francisco)). |
| Competitors | Suno: $775M raised, $300M annual run rate, song creation ([CB Insights](https://www.cbinsights.com/company/suno/financials); [Suno careers, via search snippet](https://about.suno.com/careers)); ElevenLabs: $781M raised, >$500M company-wide ARR, broader audio platform ([funding](https://elevenlabs.io/blog/series-d); [ARR](https://elevenlabs.io/blog/500m-arr-and-new-investors)); Google Lyria: standalone funding and revenue unknown, developer music APIs ([Google](https://blog.google/innovation-and-ai/technology/developers-tools/lyria-3-developers/)). |
| Moat Signals | Founder-reported music-generation patent applications ([founder website](https://ad1thya.com/)); company-reported timing benchmark advantage ([Taan research](https://taan.ai/research/control-benchmarks/), Aug 2026). |
| Risk Factors | Audio fidelity gap, incomplete independent benchmark validation, competing video-to-music APIs ([Taan benchmark](https://taan.ai/research/control-benchmarks/); [TimingBench](https://taan.ai/research/rushing-or-dragging/); [ElevenLabs](https://elevenlabs.io/docs/api-reference/music/video-to-music)). |
| Founder Reach | Adithya: X approximately 1.1K ([teapawt](https://teapaw.org/mp3addi), Nov 3, 2026), LinkedIn 1K; Devansh: LinkedIn 614 ([Adithya LinkedIn](https://in.linkedin.com/in/adithya-ai-music), [Devansh LinkedIn](https://in.linkedin.com/in/devansh-gupta-158809252), via search snippets, Nov 2026). |
| Distribution Signals | Public MCP integration documentation ([Taan GitHub](https://github.com/aalap-mvp/mcp-user-docs)); Digg coverage ([Digg](https://digg.com/ai/ahtucmtu), Oct 2026). |
| Emails | team@taan.ai ([Taan documentation](https://github.com/aalap-mvp/mcp-user-docs)); ad1thya.rohith@gmail.com ([founder website](https://ad1thya.com/)). |
