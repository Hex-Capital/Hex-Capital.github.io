# shortkit

> We make enterprise-scale short-form video really simple.

| Field | Value |
|-------|-------|
| Website | https://www.shortkit.dev |
| YC Page | https://www.ycombinator.com/companies/shortkit |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | No public data found |
| Tags | Developer Tools, Video, Infrastructure |
| YC Partner | Brad Flora |
| Emails | contact@shortkit.dev |

## The Idea

**Problem:** Consumer app teams and digital publishers that want to embed short-form vertical video feeds (comparable to TikTok or YouTube Shorts) face a build-or-buy decision weighted heavily toward build. Constructing a performant short-form video stack requires specialized expertise in codec optimization, adaptive bitrate transcoding, CDN delivery, ML-driven buffering, and feed mechanics. The YC company page states the alternative is building "internal video engineering teams" — a multi-headcount commitment for a capability that is adjacent to most companies' core product (YC company page). Existing general-purpose video APIs (e.g., Mux) handle streaming and encoding broadly but are not purpose-built for the swipe-feed UX pattern that dominates short-form engagement.

**Approach:** ShortKit provides a managed SDK (iOS 16+, Android, React Native, Web) plus backend video infrastructure optimized specifically for short-form vertical video. The SDK includes feed-aware player mechanics (smooth swiping), next-generation codec selection that reduces bytes by 2–3× via device-aware transcoding, ML-driven buffer management that pre-fetches based on watch history, and chunked transfer encoding for faster first-frame delivery (shortkit.dev). The backend handles adaptive bitrate HLS laddering through a global CDN with 300+ PoPs, serverless auto-scaling infrastructure that scales to zero when idle, AI captioning in 50+ languages, content moderation, ad integration, engagement analytics (plays, swipes, completions, rebuffer rates), and REST APIs for CMS integration (shortkit.dev).

**Differentiation:** Versus **Mux** (general-purpose video API): ShortKit is purpose-built for the short-form vertical feed pattern, including swipe mechanics, ML pre-fetching tuned to short-form watch behavior, and feed curation tools — features Mux does not natively offer. Versus **Firework** (shoppable video commerce): Firework targets e-commerce brands with livestream shopping and shoppable video overlays; ShortKit targets product engineering teams wanting to embed a TikTok-style feed into any app. Versus **BytePlus** (ByteDance subsidiary): BytePlus offers effects/filters SDKs and broad video infrastructure inherited from TikTok/CapCut, but operates as a large enterprise vendor; ShortKit positions as a developer-first SDK with lighter integration. Versus **IMG.LY** (video editing SDK): IMG.LY focuses on in-app video editing, not playback feed infrastructure.

**Business Model:** ShortKit uses usage-based pricing across two tiers: a **Basic** plan (committed monthly allotment of minutes, storage, and AI credits; standard SLA; email & Slack support) and a **Scale** plan (custom committed minutes with burst capacity, dedicated infrastructure, 99.99% uptime SLA, white-glove onboarding with named CSM, advanced security/audit/compliance) (shortkit.dev/pricing). No specific dollar amounts are publicly listed; the pricing page states: "Talk to us about your anticipated delivery volume. We'll map you to the right tier" (shortkit.dev/pricing). No free tier or trial is mentioned.

**TAM/SAM:** The global short video platform market was valued at USD 40.58 billion in 2024 and estimated at USD 48.27 billion in 2025 (Grand View Research, via search snippet). The video processing platform market is projected at USD 7.50 billion in 2025, growing to USD 12.40 billion by 2030 at a 10.6% CAGR (MarketsandMarkets, via search snippet). ShortKit's serviceable market is the narrower B2B video infrastructure segment — specifically companies embedding short-form feeds rather than building or streaming long-form content. No public SAM estimate specific to "embeddable short-form video SDK" was found.

**GTM / Distribution:** The company offers a demo booking link via cal.com/shortkit-neil/intro, a developer portal at portal.shortkit.dev, and documentation at shortkit.dev/docs — suggesting a developer-led, sales-assisted motion (shortkit.dev). A blog post targeted at publishers (shortkit.dev/blog/shortkit-for-publishers) indicates publishers as an early target segment. [Inferred]: Most likely distribution path is direct outreach to product/engineering leads at consumer apps and digital publishers, supplemented by developer content marketing and YC network referrals.

## Defensibility

ShortKit's primary defensibility signal is **technical specialization**: the SDK embeds multiple ML-driven optimizations (buffer management, codec selection) that are tuned specifically for short-form vertical video engagement patterns, as described on their website (shortkit.dev). The 6-year YouTube Shorts infrastructure background of co-founder Michael Seleman (YC company page) represents domain-specific engineering knowledge that is scarce in the market. Over time, switching costs could develop as customers integrate the SDK deeply into their apps and rely on ShortKit's transcoding pipeline, analytics, and ad infrastructure.

No patents, network effects, or regulatory barriers were identified in public sources.

**Market structure:** General-purpose video infrastructure incumbents (Mux, Cloudflare Stream, AWS MediaConvert) optimize for breadth across streaming use cases. [Inferred]: Building a specialized short-form SDK with feed mechanics, swipe-optimized pre-fetching, and vertical-native transcoding would require these incumbents to create and maintain a separate product line for a niche segment — a prioritization challenge when their core business serves the broader video market. BytePlus is the closest structural threat, as it already possesses TikTok's internal video stack and has commercialized it, though BytePlus targets large enterprises and carries geopolitical risk that may limit adoption by some Western customers.

**Commoditization risk:** The core components (HLS transcoding, CDN delivery, adaptive bitrate) are individually commoditized. The differentiated value lies in the integration layer — combining feed UX, ML buffering, codec optimization, and analytics into a single SDK purpose-built for short-form. Any well-funded video infrastructure company (Mux, Cloudflare) or a focused startup could build competing short-form SDKs given sufficient investment and specialized talent.

## Market & Traction

**Traction signals:**
- Backed by Y Combinator (W26 batch) (ycombinator.com/companies/shortkit)
- Y Combinator tweeted about ShortKit's launch: "ShortKit lets every app roll their own TikTok-quality feed. Built by a former YT infra engineer" (@ycombinator on X)
- No Product Hunt listing found
- No public user counts, revenue figures, or named customers found
- No app store listings found (SDK product, not consumer app)
- Company Twitter/X handle: not identified (YC tweet links to company but no dedicated @shortkit handle found)
- Neil Bhammar Twitter/X: @nbhammar (follower count not retrievable)
- Michael Seleman Twitter/X: @MichaelSeleman (follower count not retrievable)
- LinkedIn company page: not found via search
- GitHub: An unrelated repository "adamsoutar/shortkit" exists (React keyboard shortcuts toolkit); no ShortKit company GitHub org found
- No Discord/Slack community found
- No job postings listed (YC page shows 0 open positions)

**Competitive landscape:**

| Competitor | Differentiator vs. ShortKit | Funding | Revenue |
|---|---|---|---|
| **Mux** | General-purpose video API covering live, on-demand, and real-time video; not specialized for short-form feed UX | $173.9M total (Crunchbase, via search snippet) | $46.1M in 2024, 4,900 customers (Getlatka, via search snippet) |
| **Firework** | Focused on shoppable video commerce and livestream shopping for retail/e-commerce brands, not embeddable developer SDK | ~$260M total; $750M valuation at Series B (TechCrunch, May 2022) | Revenue not publicly disclosed |
| **BytePlus** | ByteDance subsidiary offering video infrastructure, effects SDKs, and recommendation engines; large-enterprise focus with TikTok-derived technology | Subsidiary of ByteDance (no separate funding) | Revenue not publicly disclosed |
| **IMG.LY** | Video and photo editing SDKs for in-app creative tools; focused on editing, not playback/feed infrastructure | Bootstrapped (Indie Hackers) | ~$5.2M estimated annual revenue, 1,000+ customers (Growjo; Indie Hackers AMA stated $2M ARR at time of post) |

**Why now:** [Inferred]: Several converging factors open this opportunity: (1) Short-form vertical video has become the dominant content format across consumer platforms — TikTok surpassed 1 billion MAU, YouTube Shorts and Instagram Reels have been widely adopted — creating demand from non-social apps (news publishers, e-commerce, fitness, education) to offer similar experiences. (2) Codec advances (AV1, HEVC hardware decoding becoming standard on mobile devices) enable the 2–3× byte reduction ShortKit claims, making high-quality short-form delivery feasible at lower cost. (3) The creator economy and publisher pivot to video have increased the volume of short-form content available, but distribution infrastructure outside of major platforms remains fragmented.

## Founders & Team

**Neil Bhammar** — Co-Founder
- Education: Northeastern University, D'Amore-McKim School of Business, Class of 2022 (Northeastern News, July 2023)
- Co-founded BusRight, a student transportation software startup, as a capstone project with Keith Corso at Northeastern. Served as Head of Operations (Northeastern News, July 2023). BusRight raised $7M in venture capital (Northeastern News, July 2023), grew revenue 700% in 2022, and had customers in 23 states (Northeastern News, July 2023)
- Former president of the Northeastern Entrepreneurship Club (LinkedIn pulse article)
- Previously invested in student founders at Dorm Room Fund (search snippet from LinkedIn)
- Twitter/X: @nbhammar — follower count not retrievable
- LinkedIn: linkedin.com/in/neilbhammar — "shortkit (YC W26)" (via search snippet)
- GitHub: No public profile found
- Personal website: neilbhammar.com

**Michael Seleman** — Founder
- Education: Tufts University (LinkedIn, via search snippet)
- Spent 6 years building infrastructure for YouTube Shorts at Google (YC company page). LinkedIn headline reads "Engineering @ Google" (via search snippet)
- Twitter/X: @MichaelSeleman — follower count not retrievable
- LinkedIn: linkedin.com/in/michael-seleman-541509122 — "Engineering @ Google" (via search snippet)
- GitHub: No public profile found

**Co-founder relationship:** No shared employer or university overlap identified between the founders based on available data. Bhammar attended Northeastern; Seleman attended Tufts. No public data on how they met.

**Founder-market fit:** Seleman brings 6 years of direct experience building YouTube Shorts infrastructure at Google, providing deep domain expertise in the exact technical stack ShortKit is productizing (video encoding, delivery optimization, feed mechanics at scale). Bhammar brings startup operating experience from co-founding BusRight (seed through Series B, 23-state customer base) and early-stage investing experience at Dorm Room Fund, contributing go-to-market and business development capability. The combination pairs a domain-expert engineer with an operator who has scaled a B2B SaaS product.

## Key Risks

**BytePlus platform overlap:** BytePlus, a ByteDance subsidiary, already commercializes TikTok-derived video infrastructure including short-form SDKs, effects, and recommendation engines. It has the technical depth and parent-company resources to target the same segment at scale. ShortKit's differentiation rests on developer experience and specialization rather than raw technology, which BytePlus could match (BytePlus product pages).

**Narrow use-case dependency:** ShortKit is purpose-built exclusively for short-form vertical video feeds. If the market for embeddable short-form feeds proves smaller than anticipated — because potential customers choose to build in-house, use general-purpose video APIs, or because consumer demand for short-form feeds in non-social apps does not materialize broadly — the addressable market contracts significantly. The company has no adjacent product lines to fall back on.

**Incumbent expansion risk:** Mux ($173.9M raised, $46.1M revenue) could add short-form-specific SDK features as an extension of its existing video API platform. Mux already has developer trust, documentation, and integrations; adding feed mechanics and swipe-optimized delivery would be a product extension rather than a new product for them.

**Single-engineer technical depth:** With a 2-person team and no open job postings, the company's entire video infrastructure engineering capability appears to rest on one person (Seleman). Any disruption to this individual's availability (health, departure) would be existential to product development. The company is not currently hiring (YC page).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Short video platform market: USD 48.27B in 2025 (Grand View Research, via search snippet); Video processing platform market: USD 7.50B in 2025 growing to $12.40B by 2030 at 10.6% CAGR (MarketsandMarkets, via search snippet) |
| SAM | No public data found for embeddable short-form video SDK segment specifically |
| Traction | Y Combinator W26 batch member (ycombinator.com/companies/shortkit); YC launch tweet (@ycombinator on X). No public user counts, revenue, or named customers found |
| Revenue Signal | Usage-based pricing with Basic and Scale tiers; no published prices; "Talk to us about your anticipated delivery volume" (shortkit.dev/pricing). No revenue figures found |
| Founders | Neil Bhammar (Co-Founder): Co-founded BusRight ($7M raised, 700% revenue growth in 2022), Northeastern '22, Dorm Room Fund. Michael Seleman (Founder): 6 years YouTube Shorts infrastructure at Google, Tufts University |
| Competitors | Mux ($173.9M raised, $46.1M revenue 2024, general video API); Firework (~$260M raised, revenue unknown, shoppable video commerce); BytePlus (ByteDance subsidiary, revenue unknown, TikTok-derived video infra); IMG.LY (bootstrapped, ~$5.2M est. revenue, video editing SDK) |
| Moat Signals | Seleman's 6 years YouTube Shorts infrastructure experience (YC page); ML-driven buffer management and codec optimization specialized for short-form (shortkit.dev); usage-based pricing with dedicated infra at Scale tier creating switching costs |
| Risk Factors | BytePlus platform overlap, narrow use-case dependency, incumbent (Mux) expansion risk |
| Founder Reach | Neil Bhammar: Twitter @nbhammar (count not retrievable), LinkedIn linkedin.com/in/neilbhammar. Michael Seleman: Twitter @MichaelSeleman (count not retrievable), LinkedIn linkedin.com/in/michael-seleman-541509122. No GitHub profiles found |
| Distribution Signals | No public data found (no Product Hunt listing, no app store presence, no community channels identified) |
| Emails | contact@shortkit.dev |
