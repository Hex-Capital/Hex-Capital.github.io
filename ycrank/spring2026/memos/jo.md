# jo

> A new personal AI that actually knows you.

| Field | Value |
|-------|-------|
| Website | https://askjo.ai |
| YC Page | https://www.ycombinator.com/companies/jo |
| Batch | Spring 2026 (YC page); founder LinkedIn references "jo (YC W24)" (LinkedIn, May 2026) |
| Industry | Consumer / Consumer |
| Team Size | 2 |
| Location | Menlo Park, CA, USA; Remote |
| Tags | Artificial Intelligence, Consumer, AI, AI Assistant |
| YC Partner | Garry Tan (YC company page) |
| Emails | hello@askjo.ai, privacy@askjo.ai (askjo.ai website) |

## The Idea

**Problem:** Mainstream chatbots (ChatGPT, Claude, Gemini) lack persistent personal context and require users to upload data to shared multi-tenant clouds (askjo.ai). The product targets Mac-using consumers who want an assistant with memory across files, browser history, photos, calendar, and messages without giving that data to OpenAI/Anthropic infrastructure (askjo.ai).

**Approach:** Hybrid architecture: a local Mac client handles voice transcription, echo cancellation, and OS/app integrations (Safari, Chrome, Notes, Slack, Messages, Photos, Reminders, Finder, Google Calendar, Gmail, Google Drive); a per-user "private cloud machine" hosted by jo runs the longer-running automation and memory layer (askjo.ai). Users interact via Mac, Telegram, and WhatsApp with unified memory across channels (askjo.ai). Model layer is pluggable across OpenAI, Anthropic, Grok, Kimi, and local models (askjo.ai).

**Differentiation:**
- vs. ChatGPT/Claude/Gemini: dedicated per-user cloud machine and deep macOS/app indexing rather than a multi-tenant chat UI (askjo.ai).
- vs. Limitless (formerly Rewind AI, acquired by Meta Dec 2025, raised $33M+ from a16z, First Round, NEA — TechCrunch, Apr 2024; Crunchbase): no wearable/screen-recording capture; jo indexes existing files, photos, browser, and messaging apps (askjo.ai).
- vs. Apple Intelligence / Siri: third-party model choice and Telegram/WhatsApp surfaces (askjo.ai).

**Business Model:** Beta is free, no credit card, no public pricing tier (askjo.ai). [Inferred]: Most likely monetization is a consumer subscription covering the per-user cloud machine cost, given the company hosts dedicated compute per customer.

**TAM/SAM:** No public TAM/SAM data found for the personal-AI-on-Mac segment specifically.

**GTM / Distribution:** Beta waitlist hosted at askjo.fillout.com/beta-waitlist (askjo.ai). Twitter @askjoai, LinkedIn /company/askjoai, GitHub /jo-inc (YC company page). [Inferred]: Direct-to-consumer via founder social reach and YC launch, with Telegram/WhatsApp distribution lowering install friction relative to a Mac-only client.

## Defensibility

- **Per-user data graph:** Indexed personal context (e.g., "4,000+ notes indexed across 8 years," "47,000 photos" — askjo.ai testimonials) creates switching cost once memory is built up.
- **Privacy positioning:** Dedicated cloud machine and "never shares your data" stance (askjo.ai) is a differentiator vs. multi-tenant chatbots.
- No patents, open-source repos, or proprietary models disclosed in public sources.

**Market structure:** No structural barrier identified at this stage. [Inferred]: Apple, OpenAI, and Google can ship deep OS-integrated personal AI; Apple Intelligence already overlaps the macOS-indexing thesis. The structural reason an incumbent might *not* copy is business-model conflict — Apple does not host per-user cloud machines for non-Apple-Silicon compute, and OpenAI/Anthropic monetize multi-tenant inference rather than dedicated per-user infrastructure.

**Commoditization risk:** [Inferred]: High. Components (LLM API, Mac filesystem indexer, Telegram/WhatsApp bot, vector store, browser automation) are off-the-shelf. The integration work is the moat, not any single technology.

## Market & Traction

**1. Traction signals (current product — jo):**
- Backed by Y Combinator (askjo.ai, YC page).
- Free beta, waitlist gated (askjo.ai).
- Customer testimonials on site: "Found it in 3 seconds. 47,000 photos"; "4,000+ notes indexed across 8 years" (askjo.ai). These are user-reported indexing volumes, not company revenue.
- Press: AmericanBazaar covered "AI voice-first digital personality 'jo' launched for Apple users" dated Dec 24, 2024 (americanbazaaronline.com, Dec 2024).
- LinkedIn post by Kevin Li referencing YC acceptance (LinkedIn activity 7184774329883078656).
- Twitter @askjoai — count not retrievable; LinkedIn /company/askjoai — count not retrievable; GitHub /jo-inc — public repo/star data not retrievable in this search.
- PitchBook profile exists (pitchbook.com/profiles/company/756939-43) but funding amount not public.
- No Product Hunt launch result, no app store ratings, no Chrome Web Store data found.
- Active hiring: company_data flag = False; no jobs found on YC jobs board.

**2. Competitive landscape:**
- **Limitless (formerly Rewind AI):** $33M+ raised from a16z, First Round, NEA (TechCrunch, Apr 2024; Crunchbase); acquired by Meta Dec 2025 (Crunchbase); revenue/ARR not public. Differentiator: wearable pendant + screen recording capture vs. jo's app/file indexing (Crunchbase, TechCrunch).
- **Personal.ai:** Funding details not found in search. Differentiator: focus on personal language model trained on user's own writing vs. jo's retrieval/agentic approach (search snippet).
- **Khoj:** Funding not disclosed in results. Open-source AI personal assistant focused on knowledge management/research (CB Insights via search snippet). Differentiator: open-source self-host vs. jo's hosted dedicated cloud.
- **ChatGPT (OpenAI) / Claude (Anthropic) / Apple Intelligence:** Adjacent incumbents. Differentiator: multi-tenant chat (OpenAI/Anthropic) or OS-bundled (Apple) vs. jo's per-user dedicated cloud + cross-app memory.
- **Screenpipe:** Open-source Rewind alternative (screenpi.pe via search snippet); funding not found.

**3. Why now:**
- [Inferred]: LLM context windows and tool-use/agent reliability crossed a usable threshold in 2024–2025, enabling multi-app retrieval and browser automation at consumer-grade quality.
- [Inferred]: Telegram and WhatsApp bot APIs plus mature Mac accessibility/local-transcription stacks made cross-channel personal assistants buildable by 2-person teams.
- [Inferred]: Limitless's pivot to a wearable (TechCrunch, Apr 2024) and Meta's acquisition of Limitless (Dec 2025) signal incumbent attention to the personal-memory category.

## Founders & Team

**Pradeep Elankumaran** — Co-founder & CEO
- Education: University of Maryland, College Park (about.me/pradeep.elankumaran).
- Prior: Co-founder Kicksend (YC S11, mobile photo-sharing); Yahoo (led mobile video monetization and Livetext); Lyft (driver growth product team); Co-founder & CEO Farmstead (YC S16, online grocery — Crunchbase, Sacra). Farmstead raised $14.9M over 5 rounds and consolidated to SF only after pulling out of 4 markets (Grocery Dive, Tracxn); company is "no longer active" per Tracxn search snippet.
- 3x YC founder (Kicksend S11, Farmstead S16, jo) — Crunchbase / LinkedIn.
- Twitter/X: @pradeep24 (x.com/pradeep24); follower count not retrievable.
- LinkedIn: linkedin.com/in/pradeepelankumaran — headline "Co-founder, jo" (LinkedIn).
- GitHub: github.com/skyfallsin (search result); notable repos / star count not retrievable in this search.

**Kevin Li** — Co-founder & CMO
- Prior: Yahoo; Kabam (note: search clarifies Kabam was founded by Kevin Chou et al., not Kevin Li — Kevin Li's role at Kabam appears to be employee/intern, not founder, per search disambiguation); Co-founder Farmstead with Pradeep (Tracxn).
- Twitter/X: @liveink (x.com/liveink); follower count not retrievable.
- LinkedIn: linkedin.com/in/liveink — headline "District" / Co-founder jo (LinkedIn).
- Wellfound: wellfound.com/p/liveink.
- GitHub: not found in this search.

**Co-founder relationship:** Pradeep and Kevin previously co-founded Farmstead together (Tracxn) and overlap at Yahoo per founder bios on askjo.ai. Site states they have been "cofounders for a decade" and consumer builders since the mid-2000s (askjo.ai).

**Founder-market fit:** Both founders have shipped consumer products together for ~10 years across Yahoo, Kabam, Kicksend, and Farmstead (askjo.ai, Crunchbase, Tracxn). Pradeep has 3 prior YC-backed startups, including a venture-backed company (Farmstead, $14.9M raised) that ultimately wound down operations (Grocery Dive, Tracxn). [Inferred]: Repeat-founder pair with consumer mobile and product-growth experience maps directly to jo's consumer-AI distribution problem; the prior Farmstead outcome is relevant context on capital efficiency lessons.

No advisors, board members, or named angel investors found in public sources beyond YC backing.

## Key Risks

**Incumbent substitution by Apple Intelligence:** jo's core value (Mac-resident assistant with access to Photos, Notes, Mail, Calendar, Safari, Files) overlaps directly with Apple Intelligence, which ships at OS level on every Mac. No structural barrier prevents Apple from indexing the same surfaces (askjo.ai feature list vs. Apple Intelligence scope).

**Per-user cloud machine unit economics:** Hosting a dedicated cloud machine per beta user (askjo.ai) implies fixed compute cost per user that scales linearly. With free beta and no public pricing (askjo.ai), the path from free to a price point that covers dedicated compute is unproven.

**Privacy claim verification:** Marketing emphasizes "never shares your data" (askjo.ai), but model layer is pluggable across OpenAI, Anthropic, Grok, Kimi (askjo.ai), meaning prompts can be routed to third-party model providers. Public materials do not disclose how data is gated when third-party models are used.

**Prior-co-founder-pair outcome:** Last venture by the same two co-founders (Farmstead) raised $14.9M, retreated from 4 of 5 markets, and is no longer active per Tracxn (Grocery Dive 2022; Tracxn). This is a factual data point about the co-founder pair's prior outcome.

**Batch / launch-timeline ambiguity:** YC company page lists Spring 2026; founder LinkedIn references "jo (YC W24)"; AmericanBazaar reported a public launch Dec 24, 2024. No public source reconciles whether jo went through W24 and re-batched, or whether the W24 reference is a different company stage.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Free beta with waitlist (askjo.ai); customer-reported indexing of "47,000 photos" and "4,000+ notes" (askjo.ai testimonials); press mention in AmericanBazaar (Dec 24, 2024); PitchBook profile exists (pitchbook.com); no Product Hunt / app store / extension data found |
| Revenue Signal | Free beta, no credit card required, no public pricing (askjo.ai) |
| Founders | Pradeep Elankumaran (CEO): 3x YC founder — Kicksend (S11), Farmstead (S16), jo; Yahoo, Lyft (Crunchbase, LinkedIn). Kevin Li (CMO): Yahoo, Kabam, Co-founder Farmstead with Pradeep (Tracxn, LinkedIn) |
| Competitors | Limitless/Rewind ($33M+ raised, acquired by Meta Dec 2025, revenue unknown — TechCrunch/Crunchbase; differentiator: wearable + screen recording); Personal.ai (funding not found, revenue unknown; personal LM trained on user writing — search snippet); Khoj (funding not found, revenue unknown; open-source self-host — CB Insights via search snippet); ChatGPT/Apple Intelligence (incumbent multi-tenant or OS-bundled chat) |
| Moat Signals | Per-user indexed personal data graph (askjo.ai testimonials); dedicated cloud machine architecture (askjo.ai); no patents, OSS stars, or proprietary models disclosed |
| Risk Factors | Apple Intelligence substitution, per-user dedicated-compute unit economics, prior co-founder venture (Farmstead) wound down |
| Founder Reach | Pradeep Elankumaran: Twitter @pradeep24 (count not retrievable), LinkedIn /in/pradeepelankumaran (count not retrievable), GitHub /skyfallsin (stars not retrievable). Kevin Li: Twitter @liveink (count not retrievable), LinkedIn /in/liveink (count not retrievable), GitHub not found |
| Distribution Signals | YC backing (YC company page); waitlist at askjo.fillout.com/beta-waitlist (askjo.ai); press in AmericanBazaar (Dec 24, 2024); Twitter @askjoai, LinkedIn /company/askjoai, GitHub /jo-inc (YC page) |
| Emails | hello@askjo.ai, privacy@askjo.ai (askjo.ai) |

Sources:
- [askjo.ai](https://askjo.ai)
- [YC company page — jo](https://www.ycombinator.com/companies/jo)
- [Pradeep Elankumaran LinkedIn](https://www.linkedin.com/in/pradeepelankumaran/)
- [Kevin Li LinkedIn](https://www.linkedin.com/in/liveink/)
- [Pradeep Crunchbase](https://www.crunchbase.com/person/pradeep-elankumaran)
- [Limitless / Rewind AI Crunchbase](https://www.crunchbase.com/organization/rewind-53b3)
- [TechCrunch — Rewind pivots to pendant (Apr 2024)](https://techcrunch.com/2024/04/17/a16z-backed-rewind-pivots-to-build-ai-powered-pendant-to-record-your-conversations/)
- [Grocery Dive — Farmstead exits 4 markets](https://www.grocerydive.com/news/farmstead-stop-operations-4-markets/629073/)
- [Tracxn — Farmstead profile](https://tracxn.com/d/companies/farmstead/__A9fcsIkLZWs0efp4eOgFnRQqRwy937c9d0qOHZqbFIM)
- [AmericanBazaar — jo launch (Dec 2024)](https://americanbazaaronline.com/2024/12/24/ai-voice-first-digital-personality-jo-launched-for-apple-users457920/)
- [PitchBook — jo profile](https://pitchbook.com/profiles/company/756939-43)
- [Pradeep X profile](https://x.com/pradeep24)
- [Kevin Li X profile](https://x.com/liveink)
