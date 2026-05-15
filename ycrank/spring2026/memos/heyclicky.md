# HeyClicky

> An AI buddy that lives on your Mac.

| Field | Value |
|-------|-------|
| Website | https://heyclicky.com/ |
| YC Page | https://www.ycombinator.com/companies/heyclicky |
| Batch | Spring 2026 |
| Industry | Consumer / Consumer |
| Team Size | 0 (per YC page) |
| Location | San Francisco, CA, USA |
| Tags | Education |
| YC Partner | Aaron Epstein |
| Emails | No public data found |

## The Idea

**Problem:** Users working in complex Mac applications (Figma, DaVinci Resolve, code editors) need step-by-step guidance and lack a contextual tutor that can see their screen and answer voice questions in real time (heyclicky.com).

**Approach:** Clicky is a macOS menu-bar app that sits next to the cursor as an overlay, streams audio over a WebSocket to AssemblyAI for transcription, sends transcript + screenshot to Claude via streaming SSE, and plays the response through ElevenLabs TTS (GitHub README, farzaa/clicky). Two NSPanel windows render a control panel and a full-screen transparent cursor overlay. Users say "Clicky Agent" to trigger autonomous background tasks (heyclicky.com).

**Differentiation:** Unlike Cluely (positioned as an "undetectable" overlay for meetings/interviews) and Granola (post-meeting notetaker pivoting to enterprise AI; TechCrunch, Mar 2026), Clicky targets in-app tutoring and creative-tool walkthroughs with a visible buddy character and "point at stuff" UX (FarzaTV X posts; xda-developers review). Against OpenAI ChatGPT desktop and Claude desktop "computer use," Clicky leads with a voice-first, character-driven overlay rather than a chat window (dottie.ai roundup, 2026).

**Business Model:** No pricing page is published; the app is free and open-source (heyclicky.com; github.com/farzaa/clicky). [Inferred]: Most likely monetization is a consumer subscription (BYO-API or hosted credits) given hosted-LLM/TTS costs per session, with potential education vertical pricing matching Farza's prior buildspace audience.

**TAM/SAM:** No public TAM/SAM data found specific to screen-aware consumer Mac AI assistants. Adjacent reference: Granola valued at $1.5B on $125M Series C (TechCrunch, Mar 2026); Cluely valued post-Series A on $20.3M raised (TechCrunch, Jun 2025).

**GTM / Distribution:** Public signals indicate founder-led social distribution: a launch demo on X drew ~15,000 likes and ~3,000,000 views (Product Hunt write-up via search snippet); Product Hunt listing live (producthunt.com/products/clicky-2); GitHub open-sourced April 2026 (x.com/FarzaTV/status/2041691382008705321). [Inferred]: GTM relies on Farza's 89.3K X following and open-source community to seed top-of-funnel before any paid tier.

## Defensibility

- **Brand/persona:** Clicky's character-driven UX and Farza's personal brand (89.3K X followers; FarzaTV) create distribution leverage absent in API-wrapper competitors.
- **Open-source community:** farzaa/clicky has ~5.8k GitHub stars and active community ports (e.g., emreyilmaz46/clicky_windows; jasonkneen/openclicky) creating ecosystem gravity (GitHub, 2026).
- **Switching costs / data:** None identifiable today; the app is free, stateless, and uses third-party model APIs (Claude, AssemblyAI, ElevenLabs) per README.

**Market structure:** No structural barrier identified at this stage. OpenAI's "Work with Apps" and Anthropic's "computer use" already ship screen-aware Mac functionality (dottie.ai, 2026). [Inferred]: A potential structural angle is consumer-character brand + education content, which incumbents avoid because it cannibalizes their general-purpose chat positioning.

**Commoditization risk:** High at the code level — the architecture (screenshot + transcript → LLM → TTS) is documented in the public README, and Windows clones already exist (github.com/emreyilmaz46/clicky_windows; github.com/jasonkneen/openclicky).

## Market & Traction

**Traction signals:**
- GitHub: ~5.8k stars on farzaa/clicky (GitHub search snippet, 2026).
- X demo: ~15,000 likes, ~2,900,000 views on launch post (Product Hunt aggregator via search snippet).
- Product Hunt: 4.9 rating across 23 reviews (Product Hunt page; search snippet). Top-5 placement not confirmed in available snippets.
- Company X account @heyclicky: 5,034 followers, joined Feb 2026, following 1 (x.com/heyclicky).
- Founder X account @FarzaTV: 89.3K followers (X profile, 2026).
- Instagram @heyclicky exists (instagram.com/heyclicky); follower count not retrievable.
- Windows version: waitlist via Tally form on heyclicky.com; count not disclosed.
- Press: featured in XDA Developers ("the most useful thing I've tried in months," xda-developers.com, 2026).
- Open-sourced April 2026 (x.com/FarzaTV/status/2041691382008705321).
- Customer testimonial: "Expect to see so many YC companies building on top of this" (x.com/JoelFickson/status/2042901509101256818).

**Competitive landscape:**
- **Cluely** — $20.3M total raised ($5.3M seed Apr 2025; $15M Series A from a16z Jun 2025; TechCrunch). ARR reported as $7M, later disclosed by founder as $5.2M (TechCrunch, 2025; founder admission via search snippet, 2026). Differentiator vs. Clicky: meeting/interview overlay positioning; Clicky is creative-tool/education tutor.
- **Granola** — $125M Series C at $1.5B valuation Mar 2026 (TechCrunch); $43M Series B May 2025 (search snippet); $20M Series A (granola.ai/blog/series-a). Differentiator: meeting notetaker pivoting to enterprise AI context; Clicky is consumer/creator.
- **OpenAI ChatGPT desktop (Mac)** — ships "Work with Apps" screen awareness and Agent Mode natively (dottie.ai, 2026). Funding/ARR not directly comparable.
- **Anthropic Claude desktop** — 200K context, "computer use" feature controls Mac directly (dottie.ai, 2026).
- **Pluely** — open-source Cluely alternative, Tauri-based 10MB binary (github.com/iamsrikanthnani/pluely). Revenue unknown.

**Why now:** [Inferred]: Three enabling changes in the last 12-24 months: (1) real-time streaming LLM APIs (Claude SSE) crossed the latency threshold for voice tutoring; (2) low-latency hosted TTS (ElevenLabs) became affordable per session; (3) Cluely's viral 2025 launch (TechCrunch, Jun 2025) validated consumer willingness to grant screen access to AI overlays.

## Founders & Team

**Farza Majeed** — Solo Founder (per YC page; heyclicky.com lists "Farza" as founder)
- Education: BS Computer Science, University of Central Florida (search snippet from opps.ai / interview summaries).
- Prior: Founder/CEO of buildspace (2019-2024); raised $10M Series A led by Andreessen Horowitz Nov 2022 at $100M valuation; investors included a16z, Founders Inc, Y Combinator (Tracxn; South Florida Tech Hub article; YC company page). Buildspace shut down August 2024 (eightception.com case study, search snippet).
- Background: Started a company at 13; worked on self-driving cars and deep learning in academia prior to buildspace (BuilderTalks podcast summary via search snippet).
- This is Farza's second YC company (x.com/FarzaTV/status/2039836974467666015).
- Twitter/X: @FarzaTV — 89.3K followers, joined July 2011 (X profile).
- LinkedIn: linkedin.com/in/farza-majeed-76685612a (headline lists buildspace).
- GitHub: github.com/farzaa — farzaa/clicky repo ~5.8k stars (GitHub, 2026).
- Instagram: @farzatv (instagram.com/farzatv).
- Medium: medium.com/@farzatv.

**Co-founder relationship:** Solo founder; not applicable.

**Founder-market fit:** Farza ran buildspace, an education-focused community for builders that reached scale on Andreessen Horowitz backing (Tracxn). Clicky is explicitly positioned by him as "the future of education and the future of AI interfaces" (x.com/FarzaTV/status/2041691382008705321), aligning his prior audience (developers/learners) and brand (89.3K X followers) with the product's tutor-overlay positioning. No advisors, board members, or HeyClicky-specific investors disclosed beyond Y Combinator's standard participation (YC company page).

## Key Risks

**Solo founder + prior-company wind-down:** Farza's last company shut down in August 2024 after raising $10M from a16z (eightception.com via search snippet). Execution capacity at zero-headcount on a consumer infrastructure product is a single-point-of-failure risk; no co-founder or hires listed on YC page.

**Open-source commoditization:** Architecture is publicly documented in the README and forkable Windows/cross-platform clones already exist (emreyilmaz46/clicky_windows; jasonkneen/openclicky). A paid tier must out-deliver the free open-source build the founder himself released.

**Incumbent feature overlap:** OpenAI's "Work with Apps" and Anthropic's Claude "computer use" ship native, OS-level screen-aware functionality on Mac (dottie.ai, 2026). Distribution via OS-native chat windows can substitute for an overlay buddy.

**API stack concentration / unit economics:** Per-session cost stack of Claude + AssemblyAI + ElevenLabs (README, GitHub) creates COGS sensitivity. No pricing has been announced; sustaining a free consumer product at viral scale (3M-view demo) without a monetization tier is unproven.

**Category positioning blowback:** The closest commercial analog Cluely faced enterprise bans at Amazon and Anthropic over its "cheat" framing (search snippet, 2025). Screen-recording AI overlays face an unsettled trust environment that any consumer entrant inherits.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | ~5.8k GitHub stars on farzaa/clicky (GitHub, 2026 via search snippet); Product Hunt 4.9 rating across 23 reviews (Product Hunt, 2026 via search snippet); ~15K likes / ~2.9M views on founder launch demo on X (search snippet); @heyclicky 5,034 X followers (x.com/heyclicky, 2026); XDA Developers feature (xda-developers.com, 2026) |
| Revenue Signal | No public data found (no pricing page; product is free and open-source per heyclicky.com and GitHub README) |
| Founders | Farza Majeed (Solo Founder): Founder/CEO of buildspace (2019-2024), raised $10M Series A from a16z; BS CS, University of Central Florida; second-time YC founder |
| Competitors | Cluely ($20.3M raised, ~$5.2M ARR per founder disclosure, meeting/interview overlay; TechCrunch 2025); Granola ($125M Series C, $1.5B valuation, ARR not disclosed, meeting notetaker → enterprise AI; TechCrunch Mar 2026); OpenAI ChatGPT desktop (revenue not segmentable, native Mac "Work with Apps"; dottie.ai 2026); Anthropic Claude desktop (revenue not segmentable, native "computer use"; dottie.ai 2026); Pluely (open-source Cluely alternative, revenue unknown; github.com/iamsrikanthnani/pluely) |
| Moat Signals | ~5.8k GitHub stars (GitHub, 2026 via search snippet); founder personal brand 89.3K X followers (x.com/FarzaTV, 2026) |
| Risk Factors | Solo founder with prior company wind-down (buildspace shut down Aug 2024, eightception.com); open-source commoditization (clone repos exist on GitHub); incumbent OS-level overlap (OpenAI/Anthropic Mac apps, dottie.ai 2026) |
| Founder Reach | Farza Majeed: X (@FarzaTV) 89.3K followers (X profile, 2026), LinkedIn linkedin.com/in/farza-majeed-76685612a (count not retrievable), GitHub farzaa — farzaa/clicky ~5.8k stars (GitHub, 2026) |
| Distribution Signals | Product Hunt 4.9/23 reviews (producthunt.com/products/clicky-2, 2026 via search snippet); GitHub open-sourced April 2026 (x.com/FarzaTV/status/2041691382008705321); XDA Developers feature (xda-developers.com, 2026); Windows waitlist via Tally on heyclicky.com (count not disclosed) |
| Emails | No public data found |

Sources:
- [HeyClicky YC page](https://www.ycombinator.com/companies/heyclicky)
- [heyclicky.com](https://heyclicky.com/)
- [farzaa/clicky GitHub](https://github.com/farzaa/clicky)
- [Farza X open-source post](https://x.com/FarzaTV/status/2041691382008705321)
- [Farza X second YC post](https://x.com/FarzaTV/status/2039836974467666015)
- [@heyclicky X](https://x.com/heyclicky)
- [@FarzaTV X](https://x.com/FarzaTV)
- [Product Hunt - Clicky](https://www.producthunt.com/products/clicky-2)
- [XDA Developers review](https://www.xda-developers.com/someone-built-tiny-ai-that-lives-next-to-your-cursor-the-most-useful-thing-ive-tried-this-year/)
- [Buildspace YC page](https://www.ycombinator.com/companies/buildspace)
- [South Florida Tech Hub - Farza $10M](https://techhubsouthflorida.org/former-south-floridian-farza-majeed-raised-10m-backed-by-andreesseen-horowitz-now-helping-others-ideas-come-to-life/)
- [Cluely Series A - TechCrunch](https://techcrunch.com/2025/06/20/cluely-a-startup-that-helps-cheat-on-everything-raises-15m-from-a16z/)
- [Cluely ARR - TechCrunch](https://techcrunch.com/2025/07/03/cluelys-arr-doubled-in-a-week-to-7m-founder-roy-lee-says-but-rivals-are-coming/)
- [Granola $125M - TechCrunch](https://techcrunch.com/2026/03/25/granola-raises-125m-hits-1-5b-valuation-as-it-expands-from-meeting-notetaker-to-enterprise-ai-app/)
- [Best Mac AI Assistants 2026](https://www.dottie.ai/blog/best-ai-assistants-mac/)
- [openclicky fork](https://github.com/jasonkneen/openclicky)
- [clicky_windows fork](https://github.com/emreyilmaz46/clicky_windows)
- [Buildspace case study](https://eightception.com/buildspace-edtech-startup-case-study/)
