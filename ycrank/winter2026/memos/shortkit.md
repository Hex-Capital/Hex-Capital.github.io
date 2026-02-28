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

## The Idea

**Problem:** Consumer app teams and publishers seeking to embed short-form video feeds (TikTok/Reels/Shorts-style experiences) in their own apps face a significant infrastructure challenge. Building performant, retentive short-form video from scratch requires expertise in adaptive bitrate transcoding, global CDN delivery, engagement analytics, feed ranking algorithms, and mobile SDK development. Teams currently either build this in-house with significant engineering investment or cobble together general-purpose video APIs (e.g., Mux, Cloudflare Stream) that were not purpose-built for the short-form vertical-video feed pattern.

**Approach:** ShortKit provides a managed iOS SDK and backend video infrastructure specifically optimized for short-form video feeds. The SDK is built natively on Foundation, UIKit, and AVFoundation with zero third-party dependencies, targeting iOS 16+ (shortkit.dev). The platform bundles: feed ranking and curation (reverse-chronological, signal-weighted, or custom); engagement analytics (plays, swipes, completions, replays, watch time, drop-off points); A/B experimentation with server-side variant assignment; native ad integration; content management with automatic transcoding; remote configuration and feature flags; global CDN delivery; adaptive bitrate HLS transcoding; automatic thumbnail generation; and AI captioning in 50+ languages (shortkit.dev).

**Differentiation:** Unlike general-purpose video infrastructure providers such as Mux or Cloudflare Stream, which provide low-level video encoding/delivery primitives, ShortKit is vertically integrated for the short-form feed use case — providing a ready-made SDK with feed logic, analytics, and monetization built in. Unlike Firework or Tolstoy, which target e-commerce shoppable video, ShortKit targets product engineering teams building consumer app experiences. The co-founder's 6 years building YouTube Shorts infrastructure (YC company page) provides domain-specific architectural knowledge.

**Business Model:** No pricing page is publicly available on shortkit.dev. The website offers a "Schedule a technical walkthrough" call-to-action via Calendly, suggesting an enterprise/sales-led motion. [Inferred]: Most likely monetization path is usage-based pricing (per minutes of video stored/delivered) or a tiered SaaS subscription based on video volume and feature access, consistent with the video infrastructure category (cf. Mux, Cloudflare Stream pricing models).

**TAM/SAM:** The global video processing platform market was estimated at $7.73B in 2024 and projected to reach $19.35B by 2033 (Grand View Research, 2024 via search snippet). The broader short-form video platform market was valued at $34.79B in 2024 (Cognitive Market Research, 2024 via search snippet). No public SAM estimate exists for the narrower "embeddable short-form video SDK" segment specifically.

**GTM / Distribution:** [Inferred]: Most likely distribution path is developer-led sales, starting with direct outreach to consumer app product teams and publishers. The Calendly-based sales motion and enterprise positioning suggest a high-touch, solution-selling approach rather than self-serve PLG at launch. The YC network provides an initial pipeline of consumer app companies.

## Defensibility

ShortKit's primary defensibility signal is the domain expertise of co-founder Michael Seleman, who spent 6 years building the infrastructure that powers YouTube Shorts (YC company page). This deep systems knowledge in short-form video encoding, delivery, and feed optimization represents technical complexity that would take competitors time to replicate.

Potential moat development over time: as customers integrate the SDK and build their video experiences on ShortKit's infrastructure, switching costs increase due to data migration complexity, analytics history, and SDK integration depth. If ShortKit accumulates engagement data across multiple customer deployments, aggregate insights into what drives retention in short-form feeds could create a data advantage.

**Market structure:** General-purpose video infrastructure providers (Mux, Cloudflare Stream) could theoretically build a short-form video feed SDK, but doing so would mean verticalizing their horizontal platform for a single use case, which conflicts with their general-purpose positioning and sales motion. Large platforms like YouTube and TikTok possess the relevant technology but have no incentive to license it to potential competitors. [Inferred]: The structural barrier is that incumbents in video infrastructure are optimized for breadth (live streaming, VOD, conferencing), and building a purpose-built short-form feed SDK would represent a narrow vertical bet that dilutes their horizontal strategy.

**Commoditization risk:** The individual technical components (HLS transcoding, CDN delivery, video player SDKs) are commoditized. The differentiation lies in the vertical integration and optimization specifically for the short-form feed pattern. Other developer tools companies or new entrants with short-form video expertise could build a competing product. The iOS-only limitation at launch narrows the initial addressable market and creates an opening for competitors to lead on Android or web.

## Market & Traction

**Traction signals:**
- Backed by Y Combinator (W26 batch) (YC company page)
- No public user counts, revenue figures, customer logos, or download metrics found
- No Product Hunt listing found
- No app store presence found (SDK product, not a consumer app)
- Company Twitter/X: No verified company account found
- Neil Bhammar Twitter/X: @nbhammar (follower count not retrievable)
- Michael Seleman Twitter/X: @MichaelSeleman found but could not be verified as the same individual (follower count not retrievable)
- LinkedIn company page: No public data found
- Discord/Slack community: No public data found
- Job postings: 0 active positions (YC company page)

**Competitive landscape:**

1. **Mux** ($177M raised, $46.1M revenue in 2024) (Getlatka, 2024 via search snippet; Crunchbase via search snippet): General-purpose video infrastructure platform for on-demand and live streaming with developer-focused APIs, analytics, and encoding. Differentiator vs. ShortKit: Mux is horizontal infrastructure covering all video use cases, whereas ShortKit is vertically specialized for short-form feeds with a pre-built SDK and feed logic.

2. **Firework** ($235M+ raised, revenue unknown) (TechCrunch, May 2022 via search snippet): Short-form and shoppable video platform for e-commerce brands, backed by SoftBank. Differentiator vs. ShortKit: Firework targets e-commerce/retail brands with shoppable video commerce, whereas ShortKit targets product engineering teams building consumer app experiences.

3. **Cloudflare Stream** (part of Cloudflare, $NET market cap; Stream-specific revenue not broken out): Usage-based video storage and delivery built on Cloudflare's edge network, priced at $5/1,000 min stored + $1/1,000 min delivered (Cloudflare Stream docs). Differentiator vs. ShortKit: Cloudflare Stream is low-level video infrastructure (encode, store, deliver) without feed-level SDK, ranking, or engagement analytics.

4. **Tolstoy** (total funding undisclosed, investors include SeedIL Ventures and others) (Crunchbase via search snippet): AI-powered interactive and shoppable video for e-commerce with 2,000+ brand partners (gotolstoy.com via search snippet). Differentiator vs. ShortKit: Tolstoy is focused on e-commerce conversion via shoppable video widgets, not general-purpose short-form feed infrastructure.

**Why now:**
[Inferred]: Several converging factors: (1) Short-form vertical video has become the dominant content format across consumer apps, driven by TikTok, Instagram Reels, and YouTube Shorts achieving mainstream adoption over the past 2-3 years, creating demand from non-social-media apps (news publishers, fitness apps, e-commerce) to embed similar experiences. (2) Mobile hardware and network bandwidth improvements (5G adoption) have made high-quality short-form video delivery feasible at scale. (3) Apple's continued investment in AVFoundation and iOS video capabilities provides a strong native foundation. (4) The cost of video transcoding and CDN delivery has continued to decline, making it economically viable for mid-market apps to offer video-rich experiences that previously only large platforms could afford.

## Founders & Team

**Michael Seleman** — Founder
- Spent 6 years building infrastructure that powers YouTube Shorts (YC company page)
- Education: Tufts University (LinkedIn via search snippet)
- Twitter/X: @MichaelSeleman found but could not be verified as the same individual; follower count not retrievable
- LinkedIn: linkedin.com/in/michael-seleman-541509122/ — headline references YouTube (LinkedIn via search snippet)
- GitHub: No public repos found under verified handle

**Neil Bhammar** — Co-Founder
- Early employee at BusRight through Series B (YC company page); described as co-founder of BusRight in some sources (Northeastern University News, July 2023); served as Head of Operations & CS at BusRight
- BusRight raised $7M in venture capital and grew revenue 700% in 2022, serving customers in 23 states (Northeastern University News, July 2023)
- Investor at Dorm Room Fund (Threads profile)
- Former president of Northeastern Entrepreneurship Club (Northeastern University)
- Education: Northeastern University D'Amore-McKim School of Business, Class of 2022 (Northeastern University)
- Twitter/X: @nbhammar — follower count not retrievable
- LinkedIn: linkedin.com/in/neilbhammar/ — headline references shortkit (YC W26) (LinkedIn via search snippet)
- GitHub: github.com/neilbhammar — mailmop repo (privacy-focused Gmail cleaning tool), 3 stars (GitHub)

**Co-founder relationship:** No shared employer or university overlap identified between the two founders. Michael Seleman attended Tufts University while Neil Bhammar attended Northeastern University. Michael's career was at YouTube/Google while Neil's was at BusRight. No public data on how they connected.

**Founder-market fit:** Michael Seleman's 6 years building YouTube Shorts infrastructure provides direct, first-hand experience with the core technical challenges of short-form video encoding, delivery, and feed optimization at the largest scale. Neil Bhammar brings operational and go-to-market experience from scaling BusRight from early stage through Series B, including experience in enterprise sales to institutional customers (school districts). The combination pairs deep video infrastructure domain expertise with startup operations and growth experience.

## Key Risks

**iOS-only platform limitation:** ShortKit currently supports only iOS (Swift SDK, iOS 16+, built on UIKit and AVFoundation) (shortkit.dev). Prospective customers with Android or web audiences would need a separate solution or would defer adoption until cross-platform support is available, limiting the addressable market and creating an opening for competitors.

**Incumbent expansion risk:** Mux ($177M raised, $46.1M revenue) already serves 4,900 customers and could build a purpose-built short-form video feed SDK as an add-on to its existing video infrastructure (Getlatka, 2024 via search snippet). Mux's existing customer base, brand recognition among developers, and infrastructure would give it a distribution advantage if it chose to verticalize into short-form feeds.

**Narrow vertical bet:** ShortKit is highly specialized for short-form video feeds specifically, rather than general video infrastructure. If the demand for embeddable short-form video feeds in non-social-media apps does not materialize at sufficient scale, the addressable market may be too small to support a standalone infrastructure company. The number of consumer apps that need TikTok-like feed infrastructure as a core feature, rather than simpler video hosting, is unproven.

**Single-founder technical dependency:** With Michael Seleman as the sole technical founder with YouTube Shorts infrastructure experience and a total team of 2, the company has concentrated key-person risk on its core technical differentiator.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.73B video processing platform market in 2024, projected $19.35B by 2033 (Grand View Research, 2024 via search snippet) |
| SAM | No public data found for embeddable short-form video SDK segment specifically |
| Traction | YC W26 batch; no public user counts, revenue, or customer metrics found |
| Revenue Signal | No public data found |
| Founders | Michael Seleman (Founder): 6 years YouTube Shorts infrastructure, Tufts University. Neil Bhammar (Co-Founder): early employee → Head of Ops at BusRight ($7M raised, 700% revenue growth), Northeastern '22, Dorm Room Fund |
| Competitors | Mux ($177M raised, $46.1M revenue 2024, horizontal video infrastructure); Firework ($235M+ raised, revenue unknown, e-commerce shoppable video); Cloudflare Stream (part of Cloudflare, usage-based video delivery); Tolstoy (funding undisclosed, 2,000+ brands, e-commerce shoppable video) |
| Moat Signals | Co-founder's 6 years of YouTube Shorts infrastructure experience; vertical specialization for short-form feeds vs. horizontal video APIs |
| Risk Factors | iOS-only platform, incumbent expansion from Mux, narrow vertical market size unproven, key-person technical dependency |
| Founder Reach | Neil Bhammar: Twitter @nbhammar (count not retrievable), LinkedIn 500+, GitHub 3 stars. Michael Seleman: Twitter @MichaelSeleman (unverified, count not retrievable), LinkedIn present, GitHub not found |
| Distribution Signals | No public data found (no Product Hunt listing, no app store presence, no community channels identified) |
