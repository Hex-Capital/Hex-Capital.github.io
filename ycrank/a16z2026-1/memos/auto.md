# Auto

> Personal apps for anything you point your camera at.

| Field | Value |
|-------|-------|
| Website | https://auto.inc |
| YC Page | https://speedrun.a16z.com/companies/auto |
| Batch | a16z Speedrun SR006 (Jan–Apr 2026). Note: the provided "YC Page" URL points to the a16z Speedrun portal, not Y Combinator. No YC batch affiliation confirmed. |
| Industry | AI |
| Team Size | 3 |
| Location | Los Angeles, California, United States of America |
| Tags | AI |
| YC Partner | Not listed (company is part of a16z Speedrun, not YC) |
| Emails | dave@auto.inc, sam@auto.inc |

## The Idea

**Problem:** Consumers use their phone cameras billions of times daily but the output is a static photo with no actionable intelligence attached. Extracting value — calorie counts from a meal photo, plant identification, outfit feedback, bill splitting — requires opening separate single-purpose apps, each with its own subscription. One App Store reviewer stated the app "made three existing app subscriptions unnecessary" (App Store user review, Apr 2026). The incumbents are Google Lens (search-oriented, returns links) and Apple Visual Intelligence (OS-level, limited to iPhone 16+, returns facts without ongoing workflows).

**Approach:** Auto is an iOS camera app that converts each photo into a "Frame" — a mini-application that provides contextual, ongoing assistance specific to what was photographed (auto.inc). The system auto-suggests the relevant Frame based on photo content. Advertised use cases include meal tracking with calorie estimation, plant/animal identification, outfit rating, bill splitting, travel logging, and skincare assistance (auto.inc). Users can also build custom Frames and share them privately or publicly, creating a user-generated ecosystem of visual mini-apps (auto.inc).

**Differentiation:** Google Lens returns web search results; Apple Visual Intelligence returns static facts; ChatGPT Vision requires a conversational interface. Auto's Frame abstraction turns each photo into a persistent, task-specific mini-app rather than a one-shot answer. The user-created Frame system adds a platform/extensibility layer that neither Google Lens nor Apple Visual Intelligence offers. Chance AI (chance.vision) is the closest analog as a dedicated visual search app, but it focuses on search results rather than ongoing task workflows.

**Business Model:** Freemium with a premium tier. Auto Plus Monthly: $9.99/month; Auto Plus Annual: $99.99/year (App Store, Apr 2026). No public data on free-tier limits or conversion rates.

**TAM/SAM:** The global AI camera market was valued at $13.93B in 2024, projected to reach $47.02B by 2030 at 21.6% CAGR (Grand View Research, 2024 via search snippet). However, these estimates cover primarily hardware (surveillance, automotive). No public TAM/SAM data found for the consumer AI camera app sub-segment specifically. Google Lens processes 12B+ visual searches per month as of 2025, a 250% increase from 2023 (Google, via Ovrdoz 2025), indicating large consumer demand for visual AI.

**GTM / Distribution:** iOS App Store distribution (App Store ID 6751656088). [Inferred]: Initial distribution likely leverages a16z Speedrun network, founder Twitter followings, and App Store optimization. The user-generated Frame sharing mechanic could drive organic viral loops if adoption reaches critical mass.

## Defensibility

- **Data flywheel:** Each user-created Frame and photo interaction generates training signal for the AI's contextual suggestions. [Inferred]: This could compound over time but is unproven at current scale.
- **User-generated Frame ecosystem:** If a library of community Frames grows, it creates a switching cost — users lose access to their custom and community Frames if they leave. No public data on Frame creation volume.
- **Founder expertise:** Two founders with exits to Snap and deep camera/AR/CV backgrounds represent difficult-to-replicate domain knowledge.

**Market structure:** Google Lens is search-oriented and monetized via ad-linked results; pivoting to a subscription mini-app model would conflict with Google's ad business model. Apple Visual Intelligence is locked to iPhone 16+ hardware and functions as an OS feature, not a standalone app platform. [Inferred]: Neither incumbent has incentive to build an open user-generated Frame ecosystem, as Google optimizes for search ads and Apple optimizes for hardware attachment.

**Commoditization risk:** The underlying multimodal AI models (GPT-4V, Gemini, Claude) are available via API to any developer. Building a "photo → structured action" pipeline is achievable by well-funded competitors. The moat depends on execution speed, Frame ecosystem network effects, and UX quality rather than proprietary model technology.

## Market & Traction

**Traction signals:**
- App Store rating: 5.0 / 5 stars from 5 ratings (App Store, Apr 2026)
- Version 1.0 released March 17, 2026; version 1.2.6 released ~April 6, 2026 (App Store)
- iOS only; no Android app found
- Twitter/X: @autoaicam (count not retrievable due to JS rendering)
- LinkedIn: linkedin.com/company/automatic-platforms (follower count not retrievable)
- No Product Hunt launch found
- No press coverage found in named publications
- No public download count, user count, or revenue figures disclosed
- PitchBook lists Automatic Platforms as "operating in Stealth Mode" (PitchBook, 2026)

**Competitive landscape:**
- **Google Lens** (Alphabet): 1.5B monthly users, 12B+ visual searches/month (Google/Ovrdoz, 2025). Free. Search-result oriented, not task-workflow oriented. Parent company revenue $350B+ (2024).
- **Apple Visual Intelligence** (Apple): Bundled free in iOS 18.2+ on iPhone 16 models; expanded to iPhone 15 Pro in iOS 18.4 (Apple Support, 2025). Integrates Siri, Maps, ChatGPT. Not a standalone app; no subscription.
- **ChatGPT Vision** (OpenAI): Available in ChatGPT Plus ($20/mo). General-purpose multimodal chat, not camera-first UX. OpenAI valued at $157B (2024).
- **Chance AI** (chance.vision): Dedicated visual search app, launched iOS Feb 2025, Android available. Founded by Dr. Xi Zeng and Bradon Harwood. No public funding data found.
- **CamFind**: Early visual search app, $4.8M seed raised Feb 2015 (Crunchbase via search snippet). Largely inactive in recent years.

**Why now:** [Inferred]: Three catalysts opened this window: (1) Multimodal vision-language models (GPT-4V launched Oct 2023, Gemini Dec 2023) crossed the accuracy threshold needed for reliable real-time photo understanding. (2) Apple's launch of Visual Intelligence in iOS 18.2 (Dec 2024) validated consumer demand for camera-as-AI-interface. (3) Google Lens usage grew 250% from 2023 to 2025 (Google, via Ovrdoz 2025), proving consumer behavior shift toward visual queries.

## Founders & Team

**Dave Evans** — Co-founder & CEO
- Education: Oxford University (PlayCanvas blog)
- Career: ~7 years at Sony London (AI/gameplay → tools programming); Rebellion in Oxford (GBA/PS2 titles); co-founded PlayCanvas in 2011 with Will Eastcott (Crunchbase). PlayCanvas became profitable and was acquired by Snap in May 2017 (Game Developer). At Snap: Director of Engineering for Mini-Programs, Games, Bitmoji, SnapKit, Virtual Currencies (a16z Speedrun portal).
- Prior exit: PlayCanvas → Snap (2017, undisclosed terms)
- Twitter/X: @daredevildave — ~1,011 followers (search snippet)
- LinkedIn: linkedin.com/in/davewevans
- GitHub: daredevildave — core contributor to playcanvas/engine (14.7k stars, 1.8k forks) (GitHub)

**Sam Hare** — Co-founder & CTO
- Education: PhD in computer vision, specializing in real-time applications for gaming (TechCrunch, 2016). Affiliated with Oxford Brookes University (University of Birmingham research page via search snippet).
- Career: Co-founded Seene (Obvious Engineering), which pioneered mobile 3D reconstruction. Seene acquired by Snap in June 2016 (TechCrunch, Jun 2016). At Snap: led the Lens Experience engineering team, responsible for all AR product surfaces in the Snapchat app (a16z Speedrun portal).
- Prior exit: Seene → Snap (2016, undisclosed terms)
- Twitter/X: @Sam_Hare — follower count not retrievable; 656 posts
- LinkedIn: linkedin.com/in/samhare — headline "Working on something new" (search snippet)
- GitHub: samhare — 3 public repos; "struck" (Structured Output Tracking with Kernels paper code, C++, 96 stars) (GitHub)
- Google Scholar: Published researcher in computer vision (scholar.google.com)

**Co-founder relationship:** Both founders joined Snap via acquisitions in 2016–2017 and worked there concurrently on camera, AR, and interactive content products. Their overlapping tenure at Snap is the confirmed connection point.

**Founder-market fit:** Both founders built and sold camera/visual-computing startups to Snap, then spent years leading Snap's camera product engineering (AR Lenses, Games, Mini-Programs). Dave Evans built the 3D engine that powers Snap Games; Sam Hare built the AR lens experience. This combination of computer vision PhD research, consumer camera product leadership, and dual successful exits directly maps to building an AI-powered camera platform.

## Key Risks

**Platform dependency on Apple iOS:** Currently iOS-only with no Android app. Apple Visual Intelligence is a built-in competitor with zero distribution cost. Apple could restrict API access, change App Store policies, or expand Visual Intelligence features that directly overlap with Auto's Frame functionality. No mitigation evident.

**Incumbent replication of Frame concept:** Google, Apple, or OpenAI could add persistent task-workflows to their existing visual AI products. Google Lens already has 1.5B monthly users (Google/Ovrdoz, 2025). The Frame abstraction is a UX pattern, not a patented technology. Speed of ecosystem growth is the primary defense.

**Name collision and discoverability:** "Auto" is an extremely generic term. App Store search for "Auto camera" returns dozens of unrelated results (App Store search, Apr 2026). This creates organic discovery challenges and SEO/ASO headwinds.

**Accelerator program ambiguity:** The provided "YC Page" URL (speedrun.a16z.com/companies/auto) returned a 404 error at time of research. The company appears affiliated with a16z Speedrun SR006, not Y Combinator. SR006 Demo Day is April 14, 2026 (a16z Speedrun). Confirmation of the specific program affiliation and investment terms was not publicly available.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $13.93B in 2024, projected $47.02B by 2030 at 21.6% CAGR for broader AI camera market (Grand View Research, 2024 via search snippet). Consumer AI camera app sub-segment: No public data found |
| SAM | No public data found |
| Traction | 5.0/5 stars from 5 ratings (App Store, Apr 2026); v1.0 launched March 17, 2026 (App Store) |
| Revenue Signal | Auto Plus Monthly $9.99/mo, Auto Plus Annual $99.99/yr (App Store, Apr 2026). No public revenue figures found |
| Founders | Dave Evans (CEO): Oxford, co-founded PlayCanvas (acq. by Snap 2017), Dir. of Engineering at Snap. Sam Hare (CTO): PhD Computer Vision, co-founded Seene (acq. by Snap 2016), led Snap Lens engineering |
| Competitors | Google Lens (Alphabet, revenue $350B+, 1.5B MAU, free, search-oriented); Apple Visual Intelligence (Apple, bundled free in iOS 18+, OS-integrated); ChatGPT Vision (OpenAI, $157B valuation, $20/mo via Plus, general-purpose); Chance AI (funding unknown, dedicated visual search app) |
| Moat Signals | No public data found. Two founder exits to Snap; user-generated Frame ecosystem potential (unproven) |
| Risk Factors | iOS platform dependency with Apple as built-in competitor, incumbent replication of Frame UX pattern, generic name discoverability |
| Founder Reach | Dave Evans: Twitter ~1,011 (search snippet), LinkedIn 500+, GitHub 14.7k stars on playcanvas/engine (GitHub). Sam Hare: Twitter @Sam_Hare count not retrievable, LinkedIn present, GitHub 96 stars on "struck" repo (GitHub) |
| Distribution Signals | iOS App Store only (App Store, Apr 2026). No Product Hunt launch, no press coverage found |
| Emails | dave@auto.inc, sam@auto.inc (a16z Speedrun portal) |
