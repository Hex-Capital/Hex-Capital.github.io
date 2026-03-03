# Pocket

> Take Notes in the Real World

| Field | Value |
|-------|-------|
| Website | https://heypocket.com/now |
| YC Page | https://www.ycombinator.com/companies/pocket |
| Batch | Winter 2026 |
| Industry | Consumer / Consumer |
| Team Size | 6 |
| Location | San Francisco, CA (YC page lists no location; SF confirmed via founder LinkedIn profiles) |
| Tags | |
| YC Partner | Tyler Bosmeny |
| Emails | akshay@heypocket.com (YC company page, enterprise/teams inquiries) |

## The Idea

**Problem:** Professionals, salespeople, and others who spend significant time in in-person meetings, phone calls, and on-the-go conversations have no reliable way to capture notes without breaking the flow of conversation. Existing solutions are software-only meeting recorders (Otter.ai, Fireflies.ai) that work exclusively for virtual meetings, leaving in-person interactions unrecorded. Manual note-taking is incomplete and distracting; memory alone is unreliable.

**Approach:** Pocket is a small physical device with three microphones and one button. The user presses the button to start recording a conversation. The device captures audio, syncs it via Bluetooth to a companion mobile app (iOS and Android), and uses AI to generate full transcripts, summaries, and automatically extracted action items and to-dos. A contact microphone allows recording phone calls without speakerphone mode. The product includes a desktop app (beta) and a web interface (Pocket Web, in beta) (feedback.heypocket.com, v0.5.21 changelog, Dec 15, 2025).

**Differentiation:** Pocket uses a three-microphone array versus two microphones in competing devices like the Plaud NotePin (plaud.ai comparison article). The device is HIPAA-compliant, targeting healthcare and other regulated sectors (heypocket.com product page). At a $99 base price, it undercuts the Plaud NotePin S ($179) and the Soundcore Work by Anker ($159.99). Two of the most direct competitors — Limitless (acquired by Meta, Dec 2025) and Bee (acquired by Amazon, Jul 2025) — are no longer available as independent products, reducing the field of standalone competitors (SF Standard, Dec 14, 2025).

**Business Model:** The device sells direct-to-consumer through a Shopify storefront at heypocket.com. The base device is priced at $99 (YC company page). The website A/B tests price points of $129, $149, and $169 across different traffic sources (heypocket.com source code). The companion app offers subscription tiers: Pocket Monthly Pro at $19.99/month and Pocket Yearly Pro at $199/year (Apple App Store listing). The site references a ~30% profit margin target in internal test configurations (heypocket.com source code).

**TAM/SAM:** The global AI note-taking market was estimated at $623.5 million in 2025, projected to reach $3.48 billion by 2035 at an 18.75% CAGR (Precedence Research, via search snippet). A separate estimate projects $821 million in incremental growth between 2025–2029 at a 21.3% CAGR (Technavio, via search snippet). The broader wearable AI market was estimated at $32.2 billion in 2025, projected to reach $368.4 billion by 2035 at 27.6% CAGR (Fact.MR, via search snippet). [Inferred]: The serviceable addressable market for dedicated AI wearable recording devices is a subset of the AI note-taking TAM — likely in the low single-digit billions — given that much of the broader market includes software-only solutions.

**GTM / Distribution:** Pocket sells direct-to-consumer through its Shopify storefront. The site employs conversion rate optimization with A/B testing across Google Ads, Facebook, Instagram, and TikTok traffic sources (heypocket.com source code). The company uses Klaviyo for email marketing (heypocket.com source code). An enterprise/teams sales channel exists, with a dedicated contact email (akshay@heypocket.com) listed on the YC page. [Inferred]: The HIPAA compliance positioning suggests a healthcare vertical sales motion as a secondary GTM channel.

## Defensibility

**Hardware + software integration:** Pocket combines custom hardware (3-mic array, contact microphone, Bluetooth connectivity) with proprietary AI processing software. This vertical integration creates a higher barrier to entry than software-only solutions. The founders' prior open-source project, Omi (BasedHardware/omi on GitHub, ~7,800 stars, ~1,400 forks) (GitHub), represents a community and knowledge base that contributed to Pocket's development.

**HIPAA compliance:** Regulatory compliance for healthcare conversations is a meaningful differentiator that requires ongoing investment and cannot be trivially replicated by consumer-focused competitors.

**Data accumulation:** As users record more conversations, the value of the searchable archive grows, creating switching costs. The "Ask Pocket" AI search feature (community.heypocket.com) increases utility as the dataset of personal conversations expands.

**Market structure:** The primary structural barrier for well-resourced incumbents: Apple and Google could build competing hardware, but always-on conversation recording conflicts with their privacy-centric brand positioning. Meta and Amazon have acquired competing startups (Limitless and Bee, respectively) rather than building internally, suggesting the category requires specialized focus. Plaud, the market leader, is China-based and bootstrapped; a US-based, VC-backed competitor may appeal to privacy-conscious enterprise and healthcare buyers who prefer US data residency.

**Commoditization risk:** The hardware form factor (small device, microphones, button, Bluetooth) is not technically complex to replicate. Anker's Soundcore Work division has already entered at $159.99 with distribution advantages. Chinese manufacturers could produce lower-cost alternatives. The AI transcription and summarization stack relies on increasingly commoditized LLM capabilities. Differentiation will likely depend on software quality, integrations, and brand trust rather than hardware IP alone.

## Market & Traction

### Traction Signals

| Signal | Data | Source |
|--------|------|--------|
| Annualized revenue run rate | $27M, growing 50% month-over-month | YC launch post |
| Units delivered | 30,000+ in 5 months | YC launch post |
| iOS App Store rating | 4.8/5 (747 ratings) | Apple App Store |
| Google Play rating | 4.6/5 (253 reviews) | Google Play Store |
| Google Play downloads | ~4,500 total; ~2,100 in last 30 days | AppBrain |
| Trustpilot rating | 3.1/5 (14 reviews) | Trustpilot |
| Community forum | Welcome post: 58 replies, 4,880 views; active discussions as of Mar 2026 | community.heypocket.com |
| Company Twitter/X | @Heypocket (follower count not retrievable) | X.com |
| CEO Twitter/X | @AkshayNarisetti (~36,700 followers) | X.com |
| Active job posting | Tauri Developer (remote, $2K–$5K) | YC Jobs |
| Acquisition interest | CEO publicly declined acquisition offers | SF Standard, Dec 14, 2025 |
| Press coverage | SF Standard (Dec 14, 2025); DNA India; Economic Times; Startuppedia (coverage of founder) | Various |
| Prior project GitHub | BasedHardware/omi: ~7,800 stars, ~1,400 forks (open-source predecessor) | GitHub |

**Note on prior product:** The founders previously built Omi, an open-source AI wearable (BasedHardware/omi on GitHub). Omi metrics (GitHub stars, community) are for the predecessor project, not Pocket. The $27M ARR and 30,000 units figures are reported on the Pocket YC launch post and refer to the Pocket commercial product.

### Competitive Landscape

| Competitor | Key Differentiator vs. Pocket | Funding | Revenue/ARR |
|------------|-------------------------------|---------|-------------|
| **Plaud** (plaud.ai) | Market leader; 1M+ devices sold; bootstrapped and profitable; dual-mic NotePin S at $179; highlight button for key moments | $0 VC; ~$6M via Kickstarter (2023) | ~$250M annualized revenue trajectory (Forbes via Techmeme, 2025 via search snippet) |
| **Limitless** (limitless.ai) | Acquired by Meta (Dec 2025); previously $99 pendant with desktop screen-capture integration; no longer available independently | $33M+ (a16z, First Round, NEA, Sam Altman) | ~$2.2M ARR at time of acquisition (Sacra) |
| **Otter.ai** | Software-only; joins virtual meetings as a bot; $100M ARR scale; no hardware for in-person capture | ~$70M total; $50M Series B (2021) | $100M ARR (Otter.ai blog, Mar 2025) |
| **Soundcore Work** (Anker) | Backed by Anker's brand and distribution; coin-sized device; MFi-certified; GPT-4.1 transcription; $159.99 + $15.99/mo | N/A (Anker subsidiary, publicly traded) | Not disclosed separately |
| **Bee** (bee.computer) | Acquired by Amazon (Jul 2025); ultra-low $49.99 price; wrist-worn form factor; 160-hour battery; no longer available independently | $7M (Exor, Greycroft) | Not disclosed |

### Why Now

Two catalysts opened this opportunity in 2024–2025:

1. **LLM cost and quality thresholds crossed:** On-device and cloud-based transcription and summarization quality improved materially with the release of models like Whisper, GPT-4, and successors, making real-time AI processing of conversations commercially viable at consumer price points. [Inferred]: The cost of running inference on audio has fallen enough to support a $99 device with a $19.99/month subscription.

2. **Competitor consolidation cleared the field:** Limitless was acquired by Meta (Dec 2025) and Bee by Amazon (Jul 2025), removing two of the three leading independent AI wearable note-takers from the market (TechCrunch, Dec 5, 2025; TechCrunch, Jul 22, 2025). This created a gap for independent alternatives, particularly for users wary of Big Tech data practices. The SF Standard reported that "big tech [is] scooping AI wearable startups" and quoted Pocket's CEO as having declined acquisition offers (SF Standard, Dec 14, 2025).

## Founders & Team

**Akshay Narisetti** — Co-founder & CEO
- B.Tech in Computer Science, SRM University (Chennai, India), 2023; M.S. in Computer Science, Georgia Institute of Technology, 2024 (Peerlist resume)
- Age 23 (born March 28, 2002)
- Previously built Omi (BasedHardware/omi), an open-source AI wearable with ~7,800 GitHub stars (GitHub)
- Google Summer of Code 2022 participant (JdeRobot/RoboticsAcademy) (GSoC)
- Selected for Harvard/MIT Augmentation Lab 2024 residency (1 of 16 globally) (augmentationlab.org)
- Created a viral Arduino hack of Chrome's Dino Game (19.9M views), which led to a Google interview offer he declined (DNA India; Economic Times; Startuppedia)
- On Deck Founder Fellowship (ODF) member (joinodf.com)
- Prior roles: Software Engineer at Questbook; SDE at BharatX; Chief Education Officer at IVARA (Peerlist resume)
- Twitter/X: [@AkshayNarisetti](https://x.com/AkshayNarisetti) — ~36,700 followers (X.com)
- LinkedIn: [linkedin.com/in/akshaynarisetti](https://www.linkedin.com/in/akshaynarisetti/) — 500+ connections, headline: "Pocket (YC W26)" (LinkedIn)
- GitHub: [github.com/akshaynarisetti](https://github.com/akshaynarisetti) — ~1,900 followers; contributor to BasedHardware/omi (~7,800 stars); personal repos include E-Ink (OCR scanner in Kotlin), RubiksCube_Solver (GitHub)

**Gabriel Dymowski** — Co-founder
- B.A. in European Business, University of Gdansk (Poland), 2015–2018 (LinkedIn)
- Co-founder & former CEO of DoxyChain, a blockchain document management platform for enterprises and public sector; raised EUR 2.2 million seed round (2022) led by Level2 Ventures with CV VC, Satus Starter, and Muller Medien; total funding $4.66M (EU-Startups, Sep 2022; Crunchbase)
- Worked at Warsaw Stock Exchange on asset tokenization project (Jan–Nov 2019) (LinkedIn)
- Management consulting at Accenture Poland (Jul–Sep 2018) (LinkedIn)
- Member of Poland's Ministry of Digitalization DLT/Blockchain Special Task Force (LinkedIn)
- Forbes Poland 25 Under 25 winner, New Technologies category (Forbes Poland)
- European Commission "33 Under 33" selection (EU Commission, May 2023)
- World Economic Forum Global Shapers Community member (WEF)
- Twitter/X: [@gabrieldymowski](https://x.com/gabrieldymowski) — ~428 followers (X.com)
- LinkedIn: [linkedin.com/in/gabrieldymowski](https://www.linkedin.com/in/gabrieldymowski/) — 500+ connections, headline: "Pocket (YC W26)" (LinkedIn)
- GitHub: [github.com/dymowski](https://github.com/dymowski) — limited public activity; repos include arkanoid_game_physics (GitHub)

**Co-founder relationship:** Akshay and Gabriel co-built Omi (Based Hardware) together prior to founding Pocket. They likely met or formalized their partnership through the On Deck Founder Fellowship (ODF); the ODF outcomes page features the quote "Meeting [my co-founder] Akshay was literally a gift from god" attributed in context to this partnership (joinodf.com). No shared university. Both are now based in San Francisco.

**Founder-market fit:** Akshay brings direct, documented experience building AI wearable hardware — the Omi open-source project (~7,800 GitHub stars) demonstrates the ability to design, manufacture, and ship a hardware+AI product to a community of thousands of users. His robotics, embedded systems, and ML background (Georgia Tech CS, GSoC, Arduino projects) is directly relevant to the hardware-AI integration challenge. Gabriel brings startup leadership experience (CEO of DoxyChain, raised EUR 2.2M), enterprise sales and partnership skills (Oracle, Warsaw Stock Exchange), and regulatory/government sector familiarity — relevant to Pocket's HIPAA-compliant enterprise positioning. Together, the pair covers hardware engineering, AI/ML, and business operations.

## Key Risks

**Plaud market dominance:** Plaud is bootstrapped, profitable, and on a trajectory toward $250M annualized revenue with 1M+ devices sold (Forbes via Techmeme, 2025 via search snippet). Plaud can outspend on R&D, marketing, and distribution without VC dilution. Its NotePin S (CES 2026) directly competes at a similar form factor. Pocket must differentiate on software quality, specific verticals (healthcare/HIPAA), or the US-market trust advantage to avoid being outscaled.

**Big Tech platform risk:** Meta acquired Limitless (Dec 2025) and Amazon acquired Bee (Jul 2025), absorbing their technology into Ray-Ban smart glasses and Alexa ecosystems, respectively (TechCrunch). These integrations could deliver AI conversation capture to hundreds of millions of existing device owners, potentially commoditizing the standalone wearable category. Pocket's CEO has publicly acknowledged this dynamic and declined acquisition offers (SF Standard, Dec 14, 2025).

**Brand name confusion:** "Pocket" shares its name with Mozilla's widely known read-it-later app (Pocket by Mozilla/Firefox), which has tens of millions of users and a prominent web presence. Search results, app store listings, and social media discovery are all affected. The company's use of "heypocket" as a domain partially mitigates this but does not resolve discoverability challenges.

**Hardware quality and fulfillment:** Trustpilot reviews show a 3.1/5 rating (14 reviews) with 43% one-star reviews citing undelivered orders, refund issues, and a data privacy incident where one user received another user's transcripts (Trustpilot). Google Play reviews mention device-app sync failures "requiring restarts ~50% of the time" and speaker detection described as "barely working" (Google Play Store). These signals suggest hardware reliability and fulfillment remain operational challenges at the current scale.

**Privacy and regulatory exposure:** An always-listening wearable device faces heightened regulatory scrutiny under two-party consent laws (applicable in ~12 US states), GDPR, and sector-specific regulations. One Trustpilot reviewer reported a conversation "automatically translated into Korean" and appearing in their account, suggesting a data routing or privacy control issue (Trustpilot). Regulatory action or high-profile privacy incidents could materially impact adoption.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI note-taking market: $623.5M (2025), growing to $3.48B by 2035 at 18.75% CAGR (Precedence Research, via search snippet). Broader wearable AI: $32.2B in 2025 at 27.6% CAGR (Fact.MR, via search snippet) |
| SAM | No public data found. [Inferred]: Dedicated AI wearable recording device segment is a subset of the AI note-taking TAM, likely low single-digit billions |
| Traction | $27M annualized revenue, 50% MoM growth (YC launch post); 30,000+ units in 5 months (YC launch post); iOS 4.8/5 stars, 747 ratings (App Store); Google Play 4.6/5, 253 reviews, ~4,500 downloads (Google Play/AppBrain); Trustpilot 3.1/5, 14 reviews (Trustpilot); community forum 4,880 views on welcome post (community.heypocket.com) |
| Revenue Signal | Device priced at $99 (YC page); A/B tested at $129/$149/$169 (heypocket.com); subscriptions at $19.99/mo or $199/yr (App Store); self-reported $27M ARR (YC launch post) |
| Founders | Akshay Narisetti (CEO): M.S. CS Georgia Tech, built Omi (7.8K GitHub stars), Harvard/MIT Augmentation Lab 2024. Gabriel Dymowski (Co-founder): CEO of DoxyChain (raised EUR 2.2M), Forbes Poland 25 Under 25, EU Commission 33 Under 33 |
| Competitors | Plaud ($0 VC / $6M Kickstarter, ~$250M ARR trajectory, bootstrapped market leader); Limitless ($33M+ raised, ~$2.2M ARR, acquired by Meta Dec 2025); Otter.ai ($70M raised, $100M ARR, software-only); Soundcore Work (Anker subsidiary, revenue unknown, brand + distribution advantage); Bee ($7M raised, revenue unknown, acquired by Amazon Jul 2025) |
| Moat Signals | Custom 3-mic hardware + AI software integration; HIPAA compliance; open-source predecessor community (Omi, 7.8K GitHub stars); growing personal conversation archive creates switching costs |
| Risk Factors | Plaud market dominance ($250M revenue trajectory), Big Tech platform risk (Meta/Amazon acquired competitors), brand name confusion with Mozilla Pocket, hardware quality/fulfillment issues (Trustpilot 3.1/5), privacy/regulatory exposure |
| Founder Reach | Akshay Narisetti: Twitter ~36.7K, LinkedIn 500+, GitHub ~1.9K followers. Gabriel Dymowski: Twitter ~428, LinkedIn 500+, GitHub limited activity. Company @Heypocket: count not retrievable |
| Distribution Signals | Shopify DTC storefront with multi-channel paid acquisition (Google, Facebook, Instagram, TikTok); Klaviyo email marketing; YC Jobs listing (Tauri Developer); SF Standard press coverage (Dec 2025); No Product Hunt launch confirmed for Pocket (heypocket.com) |
| Emails | akshay@heypocket.com (YC company page) |
