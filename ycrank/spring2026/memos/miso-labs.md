# Miso Labs

> The most emotive foundation models for voice

| Field | Value |
|-------|-------|
| Website | https://misolabs.ai |
| YC Page | https://www.ycombinator.com/companies/miso-labs |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | AI |
| YC Partner | Harj Taggar (YC company page) |
| Emails | cassidy@misolabs.ai (misolabs.ai) |

## The Idea

- **Problem:** Developers building voice agents rely on TTS systems with 300-700ms latency and limited emotional expressiveness, falling short of human reaction time of ~160ms (misolabs.ai latency comparison chart).
- **Approach:** Miso One is an 8-billion-parameter TTS foundation model conditioning on text plus audio context, using residual vector quantization (32 codebooks × 2048-way) to scale vocabulary without adding parameters, delivering 110ms latency (YC Launch page; MarkTechPost, Jun 4 2026).
- **Differentiation:** vs. ElevenLabs (~700ms cited), Sesame (~300ms cited) — Miso claims 110ms with open weights shipped on day one, contrasting with closed APIs of incumbents (misolabs.ai; Kingy AI, Jun 2026).
- **Business Model:** [Inferred]: Open-source weights with hosted API tier "coming soon" per launch post (YC Launch, Jun 3 2026); no pricing page published as of research date.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; reference point: ElevenLabs raised $500M Series D at $11B valuation in Feb 2026 with enterprise >51% of revenue (ElevenLabs blog, 2026).
- **GTM / Distribution:** [Inferred]: Developer-led adoption via open-source release on GitHub and Hugging Face, then upsell to hosted API; founder Aoden Teo's launch tweet drove 312K+ views by morning of launch day (Kingy AI, Jun 2026).

## Defensibility

- **Moat today:** Technical claim of 110ms latency at 8B parameters with open weights and RVQ architecture (MarkTechPost, Jun 4 2026); GitHub repo MisoLabsAI/MisoTTS has 66 stars (Trendshift, Jun 2026).
- **Future moat:** [Inferred]: Voice/expressiveness data flywheel from API usage could improve emotive control; unproven now because hosted API has not launched and no usage data exists.
- **Market structure:** [Inferred]: No structural barrier identified at this stage — incumbents (ElevenLabs, Cartesia) have larger capital bases and can ship open-weight or low-latency alternatives; Cartesia's Sonic Turbo already hits sub-40ms TTFA (Cartesia/Impekable, 2026).
- **Commoditization risk:** Open-source release means weights are reproducible/forkable; mlx-community has already published an MisoTTS-8bit quantization (Hugging Face).

## Market & Traction

- **Traction signals:**
  - GitHub MisoLabsAI/MisoTTS: 66 stars (Trendshift, Jun 2026).
  - Hugging Face model card MisoLabs/MisoTTS published; download tracking disabled (Hugging Face).
  - Aoden Teo launch tweet >312,000 views on Jun 3 2026 (Kingy AI, Jun 2026).
  - Press: MarkTechPost (Jun 4 2026), Kingy AI (Jun 2026), Medium/EncycloTech (Jun 2026), Digg AI coverage of launch.
  - Community port: mlx-community/MisoTTS-8bit quantization (Hugging Face).
  - No public Product Hunt rank, no app store data, no Discord/Slack member count, no revenue figures, no enterprise customers disclosed.
- **Competitors:**
  - ElevenLabs ($500M Series D Feb 2026 at $11B valuation, revenue undisclosed but enterprise >51% mix; ElevenLabs blog): Closed-API leader with v3 expressive model and 70+ languages.
  - Cartesia (~$100M raised Oct 2025, ARR undisclosed; Impekable/futureagi 2026): Stanford spinout with SSM architecture, Sonic-3 ~90ms, Sonic Turbo sub-40ms TTFA — faster on latency than Miso's claim.
  - Hume AI (funding/ARR not retrieved in this research): Emotionally expressive voice positioning overlaps directly with Miso's emotive thesis (SurePrompts, 2026).
  - Fish Audio (funding/ARR not retrieved): Ranked #1 on TTS-Arena blind tests, open-source friendly (Deepgram comparison, 2026).
  - PlayHT and Deepgram Aura cited as enterprise-oriented TTS alternatives (Deepgram, 2026).
- **Why now:** [Inferred]: ElevenLabs Feb 2026 $11B Series D and Cartesia Oct 2025 $100M round validate voice-AI capital inflow; sub-200ms latency thresholds crossed in 2025-26 (Cartesia Sonic, Eleven v3 GA Feb 2026) make real-time voice agents viable.

## Founders & Team

- **Cassidy Dalva (Co-founder):**
  - Background: Stanford Economics major; Research Fellow at Stanford King Center on Global Development (R-based data analysis on Bangladesh health outcomes); News Managing Editor at The Stanford Daily; journalism featured in Washington Post, LA Times, Good Morning America; selected to teach Stanford intermediate macroeconomics core (cdalva.people.stanford.edu; LinkedIn /in/cassidydalva).
  - Twitter/X: No public account found in search.
  - LinkedIn: "Research Assistant (Department of History) - Stanford University Department of History" (linkedin.com/in/cassidydalva).
  - GitHub: No public repos found in search.
- **Aoden Teo (Co-founder):**
  - Background: Stanford mathematics major with combinatorics publications (ResearchGate profile); World Cube Association competitor (2019TOSH02); per YC page, Stanford alum building voice AI (YC company page).
  - Twitter/X: @AodenTeoMT (handle confirmed via launch tweet); follower count not retrievable.
  - LinkedIn: "Stanford Online" listed (linkedin.com/in/aodenteo).
  - GitHub: No personal handle confirmed; org GitHub is MisoLabsAI (66 stars on MisoTTS, Trendshift).
- **Co-founder relationship:** Both are Stanford alumni (YC company page; respective Stanford profiles); no public data found on prior shared employer.
- **Founder-market fit:** [Inferred]: Teo's mathematics/combinatorics background maps to ML/quantization research underpinning Miso One's RVQ architecture (MarkTechPost, Jun 2026); Dalva's economics/journalism background does not map directly to voice ML — no notable advisors, board members, or investors beyond YC disclosed in public sources.

## Key Risks

- **Latency claim vs. competitor benchmarks:** Miso claims 110ms while Cartesia Sonic Turbo reports sub-40ms TTFA and Sonic-3 ~90ms (Impekable/futureagi, 2026), undercutting Miso's headline differentiator; mitigation not disclosed.
- **Commoditization via open weights:** Shipping 8B weights openly on Hugging Face removes model-weight moat; third parties already redistributing (mlx-community/MisoTTS-8bit on Hugging Face).
- **No monetization mechanism live:** API access listed as "coming soon" at launch (YC Launch QfW, Jun 3 2026); revenue path unproven.
- **Quality reception mixed:** Public reactions include criticism of preview audio quality and latency concerns (Kingy AI launch tracker, Jun 2026).
- **Capital asymmetry against incumbents:** ElevenLabs ($500M Series D Feb 2026, $11B valuation; ElevenLabs blog) and Cartesia ($100M Oct 2025) outweigh a 2-person pre-seed team's R&D budget.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | GitHub MisoTTS 66 stars (Trendshift, Jun 2026); launch tweet 312K+ views (Kingy AI, Jun 3 2026); coverage in MarkTechPost (Jun 4 2026), Kingy AI, Medium/EncycloTech, Digg (Jun 2026); Hugging Face model card live (Hugging Face) |
| Revenue Signal | No public data found (API "coming soon" per YC Launch, Jun 3 2026) |
| Founders | Cassidy Dalva (Co-founder): Stanford Economics, Stanford Daily News Managing Editor, King Center research fellow. Aoden Teo (Co-founder): Stanford mathematics, combinatorics publications. |
| Competitors | ElevenLabs ($500M Series D Feb 2026 at $11B, revenue unknown, closed-API leader with Eleven v3); Cartesia ($100M Oct 2025, revenue unknown, SSM-based, sub-40ms TTFA); Hume AI (funding unknown, emotive-voice positioning); Fish Audio (funding unknown, #1 TTS-Arena); Deepgram Aura (enterprise reliability) |
| Moat Signals | Open-source 8B model with RVQ 32×2048 architecture (MarkTechPost, Jun 4 2026); GitHub 66 stars (Trendshift, Jun 2026) |
| Risk Factors | Competitor latency lead (Cartesia sub-40ms), open-weight commoditization, no live monetization |
| Founder Reach | Cassidy Dalva: Twitter not found, LinkedIn /in/cassidydalva (count not retrievable), GitHub not found. Aoden Teo: Twitter @AodenTeoMT (count not retrievable), LinkedIn /in/aodenteo (count not retrievable), GitHub via org MisoLabsAI (66 stars on MisoTTS) |
| Distribution Signals | YC Launch page QfW (Jun 3 2026); Hugging Face model card MisoLabs/MisoTTS; GitHub MisoLabsAI/MisoTTS (66 stars, Trendshift); launch tweet 312K+ views (Kingy AI, Jun 3 2026) |
| Emails | cassidy@misolabs.ai (misolabs.ai) |

Sources:
- [Miso Labs YC company page](https://www.ycombinator.com/companies/miso-labs)
- [YC Launch: Miso Labs - emotive voice models](https://www.ycombinator.com/launches/QfW-miso-labs-emotive-voice-models)
- [Miso Labs website](https://misolabs.ai)
- [MarkTechPost: Miso Labs Releases MisoTTS](https://www.marktechpost.com/2026/06/04/miso-labs-releases-misotts-an-8b-emotive-text-to-speech-model-with-open-weights/)
- [Kingy AI launch tracker](https://kingy.ai/news/ai-launch-tracker-miso-one-the-8b-open-source-voice-model-that-wants-to-out-emote-humans/)
- [GitHub MisoLabsAI/MisoTTS](https://github.com/MisoLabsAI/MisoTTS)
- [Trendshift MisoTTS stats](https://trendshift.io/repositories/45552)
- [Hugging Face MisoLabs/MisoTTS](https://huggingface.co/MisoLabs/MisoTTS)
- [Hugging Face mlx-community/MisoTTS-8bit](https://huggingface.co/mlx-community/MisoTTS-8bit)
- [Aoden Teo launch tweet](https://x.com/AodenTeoMT/status/2062204362102100295)
- [Cassidy Dalva Stanford profile](https://cdalva.people.stanford.edu/)
- [Cassidy Dalva LinkedIn](https://www.linkedin.com/in/cassidydalva/)
- [Aoden Teo LinkedIn](https://www.linkedin.com/in/aodenteo/)
- [ElevenLabs vs Cartesia (2026)](https://elevenlabs.io/blog/elevenlabs-vs-cartesia)
- [ElevenLabs vs Cartesia - Impekable](https://www.impekable.com/blog/elevenlabs-vs-cartesia)
- [Medium: Miso Labs and the Race to Make AI Voice Feel Human](https://medium.com/@Encyclotech.com/miso-labs-and-the-race-to-make-ai-voice-feel-human-e92632b6df3d)
