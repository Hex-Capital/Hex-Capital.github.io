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
| Tags | Hardware, Consumer, AI |

## The Idea

**Problem:** Interacting with AI assistants currently requires pulling out a phone, unlocking it, opening an app, and typing or holding a button on-screen. This friction makes AI inaccessible in many everyday contexts — while walking, cooking, working with hands, or in brief moments where pulling out a phone is socially awkward or impractical. Current wearable AI attempts (e.g., Humane AI Pin at $499 + $24/mo, now defunct) have been too expensive, too complex, or unreliable.

**Approach:** Button Computer is a small, clip-on hardware device worn on a shirt. The user presses it to speak to an AI, which responds aloud via a built-in speaker. It connects via Bluetooth to an iPhone (Android planned). It does not continuously listen — the user initiates each interaction by pressing the button. Wi-Fi connectivity is planned for future updates (buttoncomputer.com).

**Differentiation:** Button differentiates from prior AI wearables on simplicity and price. At $179 retail ($79 pre-order), it is substantially cheaper than the defunct Humane AI Pin ($499 + $24/mo subscription) and more focused than the Rabbit R1 ($199), which attempted a broader "universal app controller" approach. Compared to Limitless ($99, acquired by Meta in December 2025) and Omi ($89), which focus on passive conversation recording and summarization, Button is designed for active, on-demand AI interaction — the user presses to talk and receives a spoken response. Compared to Friend ($99–$129), which positions as an emotional AI companion, Button targets utility-oriented AI queries.

**Business Model:** Button uses a hardware-plus-subscription model. Hardware pricing: $179 retail, $79 during pre-order period beginning March 3, 2026 (buttoncomputer.com). Optional subscription: Button AI Pro at $7.99/month; users can alternatively bring their own API key at no subscription cost (buttoncomputer.com). $1 fully-refundable deposit secures a reservation currently. First devices ship to U.S. customers at end of 2026 (buttoncomputer.com).

**TAM/SAM:** The global wearable AI market was estimated at $48.82 billion in 2025 with a 24.7% CAGR (Fortune Business Insights, 2025 via search snippet). Alternative estimates include $32.2 billion (Fact.mr, 2025 via search snippet) and $47.7 billion (Market.us, 2025 via search snippet); variation reflects differing market definitions (some include smartwatches and fitness trackers). No public SAM estimate specific to voice-first AI wearable pendants/buttons was found.

**GTM / Distribution:** The company is currently accepting $1 refundable deposits via its Shopify-powered storefront (buttoncomputer.com), with pre-orders opening March 3, 2026. [Inferred]: The initial distribution path is direct-to-consumer via the company's own website, likely supplemented by a YC Demo Day audience and tech-enthusiast early adopters. The iPhone-first strategy suggests targeting the Apple ecosystem user base.

## Defensibility

No strong defensibility signals found in public sources at this stage. The product is pre-launch with no shipping hardware, so no user data moat or network effects exist yet.

[Inferred]: Potential moat could develop via (1) proprietary voice AI tuning based on accumulated user interaction data over time, (2) hardware design iteration cycles that create a lead over software-only entrants, and (3) brand positioning as the simplest/cheapest voice AI wearable. However, none of these are proven at this stage.

**Market structure:** The wearable AI space has seen well-funded incumbents fail: Humane raised $240M and sold assets to HP for $116M in February 2025 (TechCrunch, Feb 2025 via search snippet); Limitless was acquired by Meta in December 2025 (TechBuzz.ai via search snippet). [Inferred]: Large incumbents (Apple, Google, Meta) have the ability to integrate AI voice interaction into existing devices (AirPods, earbuds, smartwatches), which could subsume the standalone wearable AI category entirely. The structural barrier for a startup is speed of iteration and willingness to ship a single-purpose device at a low price point — something large hardware companies may deprioritize due to the small initial market size and cannibalization of their existing product lines.

**Commoditization risk:** The core technology (voice capture → LLM API call → text-to-speech response) is technically reproducible. Bluetooth-connected microphone/speaker hardware is commodity. Multiple competitors already exist at similar or lower price points (Omi at $89, Friend at $99–$129). Open-source alternatives like Omi (GitHub: BasedHardware/omi) lower the barrier further. Apple and OpenAI are both reportedly developing AI wearable devices (Scientific American, 2026 via search snippet).

## Market & Traction

**Traction signals:**
- Pre-orders open March 3, 2026; shipping end of 2026. No units have shipped yet (buttoncomputer.com).
- $1 refundable deposits are being collected; no public count of deposits or reservations found.
- No Product Hunt launch found.
- No press coverage in named publications found.
- Company Twitter/X: No dedicated company account found. Chris Nolet's personal account @chrisnolet: ~85 followers (X.com search snippet, Feb 2026).
- Ryan Burgoyne's X account: @ryanburgoyne (count not retrievable due to JavaScript rendering).
- LinkedIn company page: No dedicated Button Computer LinkedIn page found.
- No Discord, Slack, or community channels found.
- No app store listings found (product not yet shipped).

**Competitive landscape:**

| Competitor | Key Differentiator vs. Button | Funding | Revenue/ARR |
|---|---|---|---|
| **Humane AI Pin** (defunct) | Was a broader AI computing platform with projector, camera, cellular connectivity at $499 + $24/mo. Shut down Feb 2025; assets sold to HP for $116M (TechCrunch, Feb 2025). | $240M raised (TechStartups.com via search snippet) | Shut down |
| **Rabbit R1** | $199 "universal app controller" with screen, camera, scroll wheel; broader product vision beyond voice queries. | $30M (Khosla Ventures) (TIME via search snippet) | Revenue unknown |
| **Limitless** (acquired by Meta) | $99 pendant focused on passive meeting recording/transcription rather than active AI Q&A. Acquired by Meta Dec 2025 (TechBuzz.ai via search snippet). | $15M at $350M valuation pre-acquisition (Sacra via search snippet) | Revenue unknown |
| **Omi** | $89 open-source AI wearable pendant; passive recording + AI assistant; developer-friendly with open-source codebase. | $2M from Tim Draper + others (omi.me, Jan 2025) | Revenue unknown |
| **Friend** | $99–$129 emotional AI companion pendant; always-on passive listening and proactive messaging. Different use case (companionship vs. utility). | ~$7–8.5M (TechCrunch, Fortune via search snippets) | Revenue unknown |

**Why now:**
[Inferred]: Several converging factors: (1) LLM inference costs have dropped dramatically through 2024–2025, making always-available AI economically viable at consumer price points; (2) text-to-speech and speech-to-text quality crossed a usability threshold with models like Whisper, GPT-4o voice, and Claude voice; (3) the high-profile failure of Humane ($240M raised, shut down) and acquisition of Limitless by Meta cleared the market of two competitors while validating consumer interest in the category; (4) Apple and OpenAI announcing AI wearable plans (Scientific American, 2026) signals category validation.

## Founders & Team

**Chris Nolet** — Co-founder & CEO
- B.Eng. Mechanical Engineering, RMIT University (2006–2008) (Crunchbase via search snippet)
- Staff Software Engineer at Apple, working on Vision Pro / AR/VR (YC page, Crunchbase via search snippet)
- Co-founder of App.io (500 Startups Spring 2013 batch), a browser-based iOS app emulation platform; raised $1.07M (Crunchbase via search snippet, 500 Startups podcast)
- Venture Partner at 500 Global (2015–2016) (search snippet)
- Previously worked at Coinbase and Visby (Crunchbase via search snippet)
- Founder of Vibe Code Go (YC S25), a mobile vibe-coding app (LinkedIn via search snippet, YC launches page)
- Twitter/X: @chrisnolet — ~85 followers (search snippet, Feb 2026)
- LinkedIn: linkedin.com/in/chrisnolet — headline references "Vibe Code Go (YC S25)" (search snippet)
- GitHub: github.com/chrisnolet — 35 followers; QuickOutline repo (Unity outline tool for VR) has 630 stars and 65 forks (GitHub, Feb 2026)

**Ryan Burgoyne** — Co-founder & CTO
- 6 years at Apple as Senior Engineer; worked on Reality Composer (AR development tool) and the Vision Pro project (YC page, ryanburgoyne.com)
- Founded Skyglass, a mobile virtual production startup (YC page)
- Creator of "Distance," an original AI-generated sci-fi series (ryanburgoyne.com)
- Personal website: ryanburgoyne.com
- Twitter/X: @ryanburgoyne — count not retrievable (JavaScript rendering required)
- LinkedIn: linkedin.com/in/ryansburgoyne — headline references "Button Computer" (search snippet)
- GitHub: github.com/burgoyne — 4 repositories; no star count data retrieved

**Co-founder relationship:** Both Chris Nolet and Ryan Burgoyne worked at Apple on AR/VR technology, including the Vision Pro project. This shared Apple tenure is the apparent basis of their working relationship.

**Founder-market fit:** Both founders have direct experience building AR/VR and spatial computing hardware at Apple, giving them relevant hardware engineering and voice/spatial interaction domain knowledge. Chris Nolet's prior startup experience (App.io, Vibe Code Go) and venture partner role at 500 Global provide fundraising and go-to-market experience. Ryan Burgoyne's experience with Reality Composer (a tool for building AR experiences) and his own creative AI startup (Skyglass) align with building consumer-facing AI hardware. Chris Nolet is a repeat YC founder (Vibe Code Go in S25, Button Computer in W26). YC partner: Tyler Bosmeny (YC page).

## Key Risks

**AI wearable category validation risk:** The highest-funded entrant in this category, Humane, raised $240M and shut down in February 2025 after selling assets to HP for $116M (TechCrunch, Feb 2025 via search snippet). Limitless was acquired by Meta rather than continuing independently. This pattern raises questions about whether standalone AI wearable hardware is a viable independent business or whether it gets absorbed into larger platform ecosystems. Mitigation: Button's dramatically lower price point ($179 vs. $499) and simpler design may address a different segment than Humane targeted.

**Platform dependency on smartphone and third-party LLMs:** Button connects via Bluetooth to an iPhone and routes queries to AI models. If Apple restricts Bluetooth audio device interactions, integrates competing voice AI features into AirPods, or if LLM API pricing increases substantially, Button's cost structure and functionality could be disrupted. Apple is reportedly developing its own AI wearable (Scientific American, 2026 via search snippet).

**Founder attention split / repeat YC entry:** Chris Nolet founded Vibe Code Go (YC S25) and now Button Computer (YC W26) — two different companies in consecutive YC batches (LinkedIn via search snippet, YC launches page). The status of Vibe Code Go and whether it is still an active concern is unclear from public sources. This pattern may raise questions about long-term commitment to Button Computer.

**Pre-revenue hardware execution risk:** No units have shipped. First shipments are scheduled for end of 2026, approximately 10 months from now. Hardware manufacturing, supply chain management, and quality control at scale are distinct challenges from software. The 2-person team will need to manage hardware production alongside software/AI development.

**Crowded and consolidating competitive landscape:** At least five direct competitors exist (Omi, Friend, Rabbit R1, Plaud, and various open-source projects), and major technology companies (Apple, OpenAI/Jony Ive collaboration, Meta post-Limitless acquisition) are entering the category (Scientific American, 2026 via search snippet). The open-source Omi project (GitHub: BasedHardware/omi) further lowers barriers to entry.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $48.82B wearable AI market (Fortune Business Insights, 2025 via search snippet, 24.7% CAGR) |
| SAM | No public data found for voice-first AI wearable sub-segment |
| Traction | No public data found (product pre-launch; $1 deposits being collected, count unknown) |
| Revenue Signal | Hardware: $179 retail / $79 pre-order; Subscription: $7.99/mo optional (buttoncomputer.com). No revenue yet — first shipments end of 2026 |
| Founders | Chris Nolet (CEO): ex-Apple Staff SWE (Vision Pro), co-founder App.io (500 Startups), founder Vibe Code Go (YC S25), Venture Partner 500 Global. Ryan Burgoyne (CTO): 6yr Apple Senior Engineer (Vision Pro, Reality Composer), founder Skyglass |
| Competitors | Humane ($240M raised, shut down Feb 2025, assets sold to HP for $116M); Rabbit R1 ($30M raised, revenue unknown, broader universal controller); Limitless ($15M raised at $350M val, acquired by Meta Dec 2025, passive recording focus); Omi ($2M raised, open-source, $89 price point); Friend (~$7–8.5M raised, emotional companion focus, $99–$129) |
| Moat Signals | No public data found |
| Risk Factors | AI wearable category validation (Humane failure precedent), Apple/big-tech platform competition, founder attention split (two YC companies in consecutive batches), pre-revenue hardware execution |
| Founder Reach | Chris Nolet: Twitter ~85, LinkedIn not retrievable, GitHub 630 stars (QuickOutline). Ryan Burgoyne: Twitter not retrievable, LinkedIn not retrievable, GitHub 4 repos (stats not retrieved) |
| Distribution Signals | No public data found (no Product Hunt launch, no press coverage, no app store listing; Shopify deposit page live at buttoncomputer.com) |
