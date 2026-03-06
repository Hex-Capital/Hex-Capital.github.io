# Button Computer

> Button is the wearable AI that can talk.

| Field | Value |
|-------|-------|
| Website | https://buttoncomputer.com |
| YC Page | https://www.ycombinator.com/companies/button-computer |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Hardware, Consumer |
| YC Partner | Tyler Bosmeny |
| Emails | No public data found |

## The Idea

**Problem:** Current AI assistants require pulling out a phone or speaking to a smart speaker. Existing wearable AI devices (Humane AI Pin, Limitless Pendant, Omi) have been criticized for always-listening behavior, poor battery life, high cost, or lack of a built-in speaker—requiring earbuds or a phone screen to receive responses. Users who want quick, hands-free access to AI in daily life lack a simple, privacy-respecting form factor that provides instant spoken answers.

**Approach:** Button is a small hardware device that clips to a shirt via clip or magnet. Users press a physical button to activate the device, speak a question, and receive an instant audio response through a built-in speaker. The device uses a dual-mic array for input and connects via Bluetooth to the user's phone for internet access (Wi-Fi support planned). It runs all day on a single charge. The press-to-activate design means it does not passively listen or record (company website).

**Differentiation:** Unlike Humane AI Pin ($699 at launch, no phone required but poor reviews and now defunct), Button is priced at $179 with a $7.99/month optional subscription (company website). Unlike Omi ($89, open-source, focused on transcription/note-taking), Button emphasizes two-way voice conversation with a built-in speaker rather than passive recording. Unlike Limitless (acquired by Meta, Dec 2025) and Bee (acquired by Amazon), Button remains an independent product. The company describes it as "an iPod Shuffle for AI" (YC page), emphasizing simplicity over feature density. Users can also bring their own API key to avoid the subscription (company website).

**Business Model:** Hardware sales at $179 per unit plus an optional recurring subscription (Button AI Pro) at $7.99/month, with three months included free with purchase. Users may alternatively bring their own API key (company website). Pre-orders opened March 3, 2026 (Ryan Burgoyne LinkedIn post). First U.S. shipments targeted for end of 2026. Fully refundable pre-orders (company website).

**TAM/SAM:** The global wearable AI market was valued at USD $48.82 billion in 2025 and is projected to grow to USD $61.51 billion in 2026, with a CAGR of 24.70% through 2034 (Fortune Business Insights via search snippet). MarketsandMarkets estimates the wearable AI market at USD $71.89 billion in 2025, growing to USD $138.50 billion by 2029 (MarketsandMarkets via search snippet). The SAM—consumer voice-AI wearable devices specifically—is a narrower segment within these broad estimates. No public SAM data found for the specific conversational-AI-wearable sub-segment.

**GTM / Distribution:** Pre-orders are sold direct-to-consumer through a Shopify storefront at buttoncomputer.com. YC Demo Day scheduled for March 24, 2026 (Ryan Burgoyne LinkedIn post). [Inferred]: Initial distribution is DTC e-commerce, leveraging YC Demo Day visibility and founder social media reach. The iPhone-first launch targets the iOS ecosystem; Android support planned for later.

## Defensibility

No strong defensibility signals found in public sources at this stage. The company has one public GitHub repo (swift-uuid-literal, 1 star, GitHub). No patents filed by the company were found in public searches, though co-founder Ryan Burgoyne holds 3 patents from his Apple Vision Pro work (techwilder.net/resume).

[Inferred]: Potential moat could develop via (1) proprietary firmware/hardware optimization creating a superior voice-AI interaction experience, (2) brand loyalty if Button achieves early consumer adoption, or (3) data from user interactions improving response quality over time. None of these are proven at this stage.

**Market structure:** The wearable AI hardware space has seen significant incumbents enter: Apple is reportedly developing an AI wearable (TechCrunch, Jan 2026 via search snippet), and Meta acquired Limitless (Dec 2025). However, large incumbents have struggled with this form factor—Humane raised $230M and was acquired by HP for $116M after product failure (TechCrunch, Feb 2025 via search snippet). [Inferred]: The structural barrier for incumbents may be business model—phone manufacturers risk cannibalizing their core device by shipping a low-cost accessory that replaces phone-based AI interactions. Button's $179 + subscription model is incompatible with how Apple or Google monetize their AI through integrated device ecosystems.

**Commoditization risk:** The hardware (dual-mic, speaker, Bluetooth, button) uses commodity components. The software layer (voice-to-AI-to-speech pipeline) relies on existing LLM APIs. [Inferred]: Multiple startups and hardware manufacturers could build a similar device. Differentiation will depend on industrial design quality, firmware latency optimization, and brand positioning rather than deep technical moats.

## Market & Traction

**Traction signals:**
- Pre-orders opened March 3, 2026 (Ryan Burgoyne LinkedIn post). No public pre-order count found.
- Hardware priced at $179; subscription at $7.99/month (company website).
- Ryan Burgoyne's LinkedIn announcement received 141 likes and 34 comments (LinkedIn post).
- YC Demo Day scheduled for March 24, 2026 (LinkedIn post).
- Aluminum prototypes already developed (LinkedIn post).
- Twitter/X: @buttoncomputer — follower count not retrievable (JavaScript-rendered page).
- Instagram: @buttoncomputer — follower count not found.
- YouTube: @button_computer — subscriber count not found.
- LinkedIn: linkedin.com/company/buttoncomputer — follower count not found.
- GitHub: github.com/buttoncomputer — 1 public repo, 1 star (GitHub).
- Product Hunt: No listing found.
- Discord/Slack community: No public community found.
- No press coverage in named publications found.
- No app store listings found (product has not shipped).
- 0 job postings listed on YC page (YC page).

**Competitive landscape:**

1. **Plaud NotePin / NotePin S** — 1M+ units sold, profitable, on track for $250M annualized revenue in 2025 (Techmeme/Forbes via search snippet). Priced at $159–$179. Focused on note-taking and transcription rather than two-way voice conversation. Key differentiator vs. Button: Plaud is a passive recorder/transcriber; Button is an active conversational device with a built-in speaker.

2. **Omi** (formerly Friend by Nik Shevchenko) — Raised $2M from Tim Draper and others (omi.me blog, Jan 2025). Priced at ~$89. Open-source hardware with developer kit. Focused on transcription, memory, and productivity rather than real-time voice conversation. Key differentiator vs. Button: Omi is open-source and cheaper but lacks a built-in speaker for two-way interaction.

3. **Humane AI Pin** (defunct) — Raised $230M, sold assets to HP for $116M in Feb 2025 (TechCrunch, Feb 2025 via search snippet). Was priced at $699 + $24/month. Attempted to be a standalone phone-replacement device. Key differentiator vs. Button: Humane targeted a phone-replacement form factor at a much higher price point; Button is a phone companion at $179.

4. **Bee** (acquired by Amazon) — Wearable AI focused on life logging and conversation capture. Acquired by Amazon in late 2025 (LinkedIn/AboutAmazon via search snippet). No longer independent. Key differentiator vs. Button: Bee was a passive recorder integrated into Amazon's ecosystem; Button is independent and conversation-first.

5. **Apple AI Wearable** (reportedly in development) — Apple is reportedly developing its own AI wearable (TechCrunch, Jan 2026 via search snippet). No product details or timeline confirmed. Key differentiator vs. Button: Not yet a product; if launched, would have Apple ecosystem integration advantages.

**Why now:** Several specific catalysts have converged: (1) LLM voice-to-voice latency has dropped dramatically—models like GPT-4o and Claude support real-time voice interaction as of 2024–2025, making a conversational wearable technically feasible for the first time. (2) The first generation of AI wearables (Humane, Rabbit R1) failed publicly in 2024, creating a "lessons learned" opening for a simpler, cheaper approach. (3) Major acqui-hires (Meta acquiring Limitless Dec 2025, Amazon acquiring Bee late 2025) removed independent competitors and validated the category while leaving the independent consumer market underserved. (4) Consumer AI adoption has broadened, with ChatGPT reaching widespread awareness and usage. [Inferred]: The combination of improved LLM voice capabilities and cleared competitive landscape creates a window for a focused, low-cost entrant.

## Founders & Team

**Chris Nolet** — Founder & CEO
- Education: RMIT University (Crunchbase via search snippet)
- Career: Staff Software Engineer at Apple, worked on Vision Pro (Crunchbase, LinkedIn via search snippet). Co-founder & CTO/COO of App.io (2012–2014), a mobile app streaming startup that raised $1.07M through 500 Startups' Spring 2013 batch; company is no longer active (Crunchbase via search snippet, 500 Startups podcast). Venture Partner (ContactOut via search snippet). Also associated with "Vibe Code Go" (YC S25) per FounderTrace listing, and a project called "Pocket" (ContactOut).
- Domain expertise: AR/VR software engineering, hardware product design, prior startup founding experience
- Twitter/X: @chrisnolet — follower count not retrievable (JavaScript-rendered page)
- LinkedIn: linkedin.com/in/chrisnolet — 500+ connections (search snippet)
- GitHub: github.com/chrisnolet — 7 repositories including QuickOutline (Unity asset), Balance (iOS app) (GitHub via search snippet)

**Ryan Burgoyne** — Co-founder & CTO
- Education: B.S. Computer Science, Arizona State University (Dec 2013), summa cum laude, 3.9 GPA (techwilder.net/resume)
- Career: Software Development Engineer at Apple (May 2015–Oct 2021) for 6 years; one of the first engineers on the Vision Pro project; co-invented the visionOS gaze-and-tap user interface; filed 3 patents (techwilder.net/resume, X post). Previously Research Engineer at Metaio (Jan 2014–May 2015), integrating depth-camera tracking into AR SDK used by 100K+ developers (techwilder.net/resume). Founder of Skyglass (Nov 2021–present), a virtual production app on iPhone; secured $700K in funding, graduated Techstars NYC 2024, scaled to 95K downloads and $6K MRR with a team of 3 (techwilder.net/resume, LinkedIn via search snippet).
- Domain expertise: AR/VR/XR engineering, hardware interaction design, iOS development, prior startup founding with revenue traction
- Twitter/X: @spacecrafter3d — follower count not retrievable (JavaScript-rendered page)
- LinkedIn: linkedin.com/in/ryansburgoyne (LinkedIn)
- GitHub: github.com/burgoyne — profile found (GitHub via search snippet); github.com/ryansburgoyne listed on Button Computer's GitHub org

**Co-founder relationship:** Both founders worked together at Apple on the Vision Pro project (Ryan Burgoyne LinkedIn post). After Burgoyne left Apple and relocated to Colorado, they maintained close contact before launching Button Computer together. Burgoyne's LinkedIn post describes Nolet as "my best friend" (LinkedIn post).

**Founder-market fit:** Both founders have direct experience building AR/VR hardware interaction paradigms at Apple, including co-inventing the gaze-and-tap UI for visionOS. This gives them specific expertise in designing novel hardware input/output modalities—directly relevant to building a voice-AI wearable. Nolet brings prior startup founding experience (App.io, 500 Startups) and Burgoyne brings prior startup experience with hardware-adjacent consumer products (Skyglass, Techstars NYC, 95K downloads). Both have shipped production software on Apple platforms.

## Key Risks

**Hardware execution risk:** Button has not yet shipped a physical product. Aluminum prototypes exist (LinkedIn post, Mar 2026), but the gap between prototype and mass manufacturing at $179 price point involves supply chain, manufacturing QA, FCC certification, and logistics challenges. First shipments are targeted for end of 2026, creating a long pre-order-to-delivery window. Prior AI wearable startups (Humane, Rabbit) experienced significant manufacturing delays and quality issues.

**Platform dependency on LLM providers:** Button's core value proposition depends on fast, high-quality voice AI responses from third-party LLM APIs. Pricing changes, rate limits, or degradation by upstream providers (OpenAI, Anthropic, etc.) directly affect product quality and unit economics. The $7.99/month subscription must cover API costs per user, and heavy users could make this unprofitable. The BYOK (bring-your-own-key) option signals awareness of this risk but shifts cost burden to users.

**Category headwinds from first-generation failures:** Humane AI Pin's high-profile failure ($230M raised, sold to HP for $116M) and Rabbit R1's poor reviews have created consumer skepticism about AI hardware devices. Potential customers may hesitate to pre-order another AI wearable. Button's lower price point and simpler design mitigate this to some degree.

**Big tech encroachment:** Apple is reportedly developing an AI wearable (TechCrunch, Jan 2026 via search snippet). Meta acquired Limitless, and Amazon acquired Bee. If Apple ships a wearable AI accessory integrated with its ecosystem, Button's iPhone-first DTC approach faces a direct substitution threat from the platform owner.

**iPhone-only at launch:** Button supports only iPhone at launch, with Android planned later (company website). This limits the addressable market to roughly 55% of U.S. smartphone users and excludes international markets where Android dominates.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $48.82B (2025) growing to $61.51B (2026), CAGR 24.70% through 2034 (Fortune Business Insights via search snippet); $71.89B (2025) per MarketsandMarkets via search snippet |
| SAM | No public data found for conversational-AI-wearable sub-segment |
| Traction | Pre-orders opened Mar 3, 2026 (LinkedIn post); aluminum prototypes developed; YC Demo Day Mar 24, 2026; no public pre-order count, user count, or revenue data found |
| Revenue Signal | Hardware at $179 + optional $7.99/month subscription (company website). Product has not shipped; no revenue yet. |
| Founders | Chris Nolet (CEO): Ex-Apple Vision Pro Staff SWE, Co-founder App.io (500 Startups), RMIT University. Ryan Burgoyne (CTO): Ex-Apple Vision Pro (6 yrs, 3 patents), Founder Skyglass (Techstars NYC '24, $700K raised, 95K downloads), BS CS Arizona State summa cum laude. |
| Competitors | Plaud ($250M annualized revenue 2025, 1M+ units sold, profitable, passive recording/transcription focus). Omi ($2M raised from Tim Draper, ~$89 price, open-source, transcription focus). Humane AI Pin ($230M raised, defunct, sold to HP for $116M). Bee (acquired by Amazon, passive life-logging). Apple AI wearable (reportedly in development). |
| Moat Signals | No public data found. Both founders hold Apple Vision Pro interaction-design experience. |
| Risk Factors | Hardware manufacturing execution, LLM API cost/dependency, big tech encroachment (Apple AI wearable), iPhone-only at launch |
| Founder Reach | Chris Nolet: Twitter @chrisnolet (count not retrievable), LinkedIn 500+ connections, GitHub 7 repos. Ryan Burgoyne: Twitter @spacecrafter3d (count not retrievable), LinkedIn linkedin.com/in/ryansburgoyne, GitHub github.com/burgoyne. |
| Distribution Signals | DTC via Shopify storefront; YC Demo Day Mar 24, 2026; no Product Hunt listing found; no app store listings (product not shipped) |
| Emails | No public data found |
