# ZeroSettle

> Avoid the 30% App Store Tax by Supporting Direct Billing in your App

| Field | Value |
|-------|-------|
| Website | https://zerosettle.io |
| YC Page | https://www.ycombinator.com/companies/zerosettle |
| Batch | Winter 2026 |
| Industry | Fintech / Fintech -> Payments |
| Team Size | 2 |
| Location | No public data found |
| Tags | Developer Tools, Fintech, Payments, B2B, Cryptocurrency |
| YC Partner | Brad Flora |
| Emails | gabe@zerosettle.io, support@zerosettle.io |

## The Idea

**Problem:** Apple charges iOS developers a 30% commission (15% for small businesses under $1M revenue) on all in-app purchases processed through its payment system. For subscription-based mobile apps, this commission significantly erodes margins. Apple collected over $10 billion in U.S. App Store commissions and over $27 billion globally in 2024 (TechCrunch, May 2025 via search snippet; Apple Newsroom, May 2025 via search snippet). Developers have historically had no practical alternative — Apple mandated use of its in-app purchase system as the sole payment mechanism.

**Approach:** ZeroSettle provides a drop-in SDK (Swift, React Native, Flutter, Kotlin) that enables developers to offer direct web-based billing alongside Apple's in-app purchase system. The platform functions as a Merchant of Record, handling payment processing via Stripe, tax compliance (sales tax, VAT, GST), fraud protection, refunds, and receipts. Key product mechanisms include: (1) "Sign Up & Save" paywalls presenting new users with direct billing at a discount vs. App Store pricing, (2) "Switch & Save" campaigns migrating existing subscribers from Apple billing to direct billing, (3) "Upgrade & Save" flows converting monthly to annual subscriptions with prorated savings, and (4) "Save the Sale" retention flows with cancellation questionnaires, intelligent discounts, and subscription pause options. The company claims integration requires approximately 15 minutes of engineering work (ZeroSettle website). ZeroSettle also handles entitlement provisioning and real-time syncing across platforms, and offers dashboard-configured A/B testing and automatic product import from App Store Connect (ZeroSettle docs).

**Differentiation:** ZeroSettle differentiates from RevenueCat (the dominant mobile subscription infrastructure provider) by focusing specifically on migrating users away from platform billing to direct web checkout, rather than optimizing within the App Store payment system. RevenueCat powers subscription management for 70,000+ apps but primarily works within Apple's and Google's native billing systems (TechCrunch, May 2025 via search snippet). Paddle operates as a Merchant of Record but targets SaaS and desktop software, not mobile app billing migration. Neon Pay ($14M raised) focuses specifically on mobile games rather than general mobile apps (VentureBeat via search snippet). Adapty.io ($2.5M raised) provides subscription analytics and paywall optimization but does not act as a Merchant of Record for alternative billing (TechCrunch, Nov 2022 via search snippet). ZeroSettle combines the MoR function with purpose-built migration campaigns and retention tools specifically designed for the App Store billing bypass use case.

**Business Model:** Two pricing tiers are publicly listed (ZeroSettle website):
- **ZeroSettle Managed:** 5% + $0.50 per transaction — ZeroSettle handles all compliance, tax, fraud, and support as MoR. On a $9.99 sale, the developer retains ~$8.50.
- **Bring Your Own Stripe (BYOS):** 0.5% of ZeroSettle-attributed revenue — the developer owns the Stripe relationship and retains ~$9.50 on a $9.99 sale.
- **Founding Partner Program:** Free for two years with white-glove setup and direct Slack support.

**TAM/SAM:** Apple's U.S. App Store facilitated $406 billion in developer billings and sales in 2024, with Apple collecting over $10 billion in U.S. commissions (Apple Newsroom, May 2025 via search snippet; TechCrunch, May 2025 via search snippet). Globally, Apple collected $27.39 billion in commissions in 2024 (TechCrunch, May 2025 via search snippet). The addressable market for ZeroSettle is the portion of these commissions that could be redirected through alternative payment links — specifically subscription-based apps where users can be migrated to web billing. No public SAM estimate specific to this segment was found.

**GTM / Distribution:** [Inferred]: The Founding Partner Program (free for two years) serves as an early-adopter acquisition mechanism, reducing friction for developers to trial the platform. The SDK-based integration with a claimed 15-minute setup targets indie and mid-market iOS developers. The BYOS tier targets larger developers already on Stripe. Distribution likely relies on developer community channels, content marketing around the Epic v. Apple ruling, and YC network effects.

## Defensibility

ZeroSettle's primary switching cost derives from its role as Merchant of Record — once a developer migrates subscribers to ZeroSettle-managed billing, reversing the migration (moving users back to Apple IAP or to another MoR) involves subscriber disruption and re-platforming complexity. The entitlement syncing layer across platforms creates additional integration depth. Dashboard-configured A/B testing and retention flows accumulate optimization data over time that could inform better conversion and retention models.

**Market structure:** Apple itself cannot easily offer this solution because it would cannibalize its own $27B+ annual commission revenue. RevenueCat's core business is built on optimizing within Apple's and Google's billing systems — offering an alternative billing bypass product would jeopardize its relationship with Apple, which could restrict RevenueCat's access to StoreKit APIs. This creates a structural conflict for the two largest incumbents.

**Commoditization risk:** The core SDK technology (web checkout integration, entitlement syncing) is replicable. Stripe itself launched guidance for iOS developers to accept payments outside the App Store in May 2025 (TechCrunch, May 2025 via search snippet), though Stripe positioned this as payment infrastructure rather than a turnkey migration-and-retention solution. Neon Pay and other MoR providers could expand from gaming to general apps. The migration campaign logic ("Switch & Save," retention flows) is not deeply proprietary.

## Market & Traction

**Traction signals:**
- No public user counts, revenue figures, or customer names found.
- Company Twitter/X: @zerosettle (count not retrievable).
- Gabe Roeloffs Twitter/X: @gaberoeloffs, joined July 2014 (count not retrievable) (X.com).
- Gabe Roeloffs Product Hunt profile exists (producthunt.com/@gaberoeloffs) — no launched products found under ZeroSettle name.
- Ryan Elliott GitHub: github.com/RyanElliott10 — 27 followers; pinned repo "wsbtickerbot" has 134 stars and 64 forks (GitHub).
- Gabe Roeloffs GitHub: github.com/gdroel — 8 followers; top repo "slackarma" has 7 stars (GitHub).
- LinkedIn company page exists at linkedin.com/company/zerosettle (follower count not retrievable).
- Documentation site live at docs.zerosettle.io; dashboard at dashboard.zerosettle.io.
- No press coverage found in named publications.
- No Product Hunt launch found.
- No app store listings found.
- No Discord or Slack community data found publicly.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. ZeroSettle |
|---|---|---|---|
| **RevenueCat** | $119M total, Series C-II at $500M+ valuation (TechCrunch, May 2025 via search snippet) | $20M revenue in 2024 (CB Insights via search snippet) | Powers 70,000+ apps with in-platform subscription management; does not offer alternative billing bypass |
| **Paddle** | $293M total, $1.4B valuation (Tracxn via search snippet) | $90.9M revenue in 2024 (Latka via search snippet) | Full MoR for SaaS/desktop; cited Apple ecosystem opening as growth driver; not mobile-app-migration focused |
| **Neon Pay** | $14M from Thrive Capital, a16z Speedrun, Ribbit Capital (VentureBeat via search snippet) | Revenue unknown | MoR focused on mobile games; Direct Checkout increased purchase completion 26%; gaming-only focus |
| **Adapty.io** | $2.5M seed (TechCrunch, Nov 2022 via search snippet) | Revenue unknown | Mobile subscription analytics and paywall optimization; not an MoR; works within Apple's system |
| **Stripe (direct)** | Public company | N/A | Provides payment infrastructure iOS developers can use directly, but no migration campaigns, retention flows, or MoR wrapper |

**Why now:** Two specific regulatory catalysts opened this market:
1. In April 2025, U.S. District Judge Yvonne Gonzalez Rogers ruled Apple was in "willful violation" of the 2021 Epic Games v. Apple anti-steering injunction, ordering Apple to allow external payment links in iOS apps without commissions or deterrent warning screens (MacRumors, April 2025 via search snippet). Apple updated App Review Guidelines on May 3, 2025 to comply (RevenueCat blog via search snippet). In December 2025, the Ninth Circuit unanimously affirmed the contempt finding, though it remanded the question of whether Apple can charge any fee on linked-out purchases (Justia, December 2025 via search snippet).
2. The EU Digital Markets Act, effective March 2024, required Apple to allow alternative payment systems in the EU, though Apple imposed a 5% Core Technology Commission on alternative-payment transactions starting June 2025 (Neon Pay blog via search snippet).
3. Japan's Mobile Software Competition Act took effect December 18, 2025, with compliance required by March 2026 (search snippet).

[Inferred]: These regulatory changes created a window where developers can legally offer alternative billing in the U.S. without Apple commissions, but the compliance complexity (varying rules by jurisdiction, entitlement syncing, tax handling) creates demand for a turnkey solution like ZeroSettle.

## Founders & Team

**Ryan Elliott** — Co-founder
- Former systems software engineer at Apple (YC page). LinkedIn headline: "Software Engineer at Apple" (linkedin.com/in/ryanelliott-10 via search snippet). Education: California Polytechnic State University, San Luis Obispo (LinkedIn via search snippet). Received a patent from Apple; worked on operating systems, camera technologies, and performance (LinkedIn via search snippet).
- Twitter/X: No confirmed public account found linked to ZeroSettle.
- LinkedIn: linkedin.com/in/ryanelliott-10
- GitHub: github.com/RyanElliott10 — 27 repos, 27 followers. Bio references ZeroSettle and Apple. Pinned repo "wsbtickerbot" (Reddit bot scraping r/wallstreetbets for most mentioned tickers) has 134 stars and 64 forks. Other pinned repos: "TPCoref" (coreference resolution using Transformers, 1 star), "Swellion" (Rust, 2 stars).

**Gabe Roeloffs** — Co-founder
- Previously worked on operating systems at Apple (YC page). Has written about building iPhone apps in Swift (Medium). Founded a smart appliance startup for growing food indoors prior to ZeroSettle (search snippet). Based in San Luis Obispo / San Francisco.
- Twitter/X: @gaberoeloffs, joined July 2014 (X.com) — follower count not retrievable.
- LinkedIn: linkedin.com/in/gabe-roeloffs — headline: "Apple" (via search snippet).
- GitHub: github.com/gdroel — 29 repos, 8 followers. Top repo "slackarma" (7 stars). Arctic Code Vault Contributor. Primarily PHP and JavaScript projects.
- Medium: medium.com/@gaberoeloffs — authored "5 Things I Learned Building my First iPhone App."
- Product Hunt profile: producthunt.com/@gaberoeloffs.

**Co-founder relationship:** Both founders attended California Polytechnic State University, San Luis Obispo and both worked at Apple on operating systems. Shared university and employer history indicates a pre-existing professional relationship.

**Founder-market fit:** Both founders worked as systems software engineers at Apple, giving them direct insider knowledge of Apple's billing infrastructure, App Store policies, StoreKit APIs, and the internal dynamics of how Apple enforces its commission structure. Their iOS/systems engineering backgrounds are directly relevant to building SDK-level integrations with Apple's platform. Ryan Elliott's patent from Apple and Gabe Roeloffs' experience building iOS apps provide complementary technical depth.

## Key Risks

**Regulatory uncertainty on commission fees:** The December 2025 Ninth Circuit ruling affirmed Apple's contempt finding but remanded the question of whether Apple can charge a "reasonable fee" on linked-out purchases (Ninth Circuit, December 2025 via search snippet). If Apple is permitted to impose even a modest commission (e.g., 5-12%) on alternative payment transactions, ZeroSettle's value proposition narrows significantly — the savings gap between 30% and 5%+0.50 shrinks if Apple adds its own surcharge on top.

**Apple platform retaliation risk:** Apple has historically used App Review as a gatekeeping mechanism. While current court orders prohibit Apple from blocking external payment links, Apple retains broad discretion over app approval for other reasons. Developers using ZeroSettle may face heightened review scrutiny or rejection on unrelated grounds, creating chilling effects on adoption. Apple's compliance with the ruling has been characterized as grudging (MacRumors, April 2025 via search snippet).

**Stripe dependency and competitive exposure:** ZeroSettle's payment processing runs on Stripe. Stripe published its own guide for iOS developers to accept payments outside the App Store in May 2025 (TechCrunch, May 2025). If Stripe builds a more complete turnkey solution (adding migration campaigns, retention flows, entitlement syncing), ZeroSettle's value-add layer on top of Stripe infrastructure becomes vulnerable. Additionally, Paddle explicitly cited Apple's ecosystem opening as a growth driver in its July 2025 funding announcement (Paddle blog via search snippet).

**Jurisdiction fragmentation:** The legal landscape differs materially across the U.S. (court-ordered, commission status TBD), EU (5% CTC applies), and Japan (commission still charged). ZeroSettle must maintain region-specific compliance logic and checkout flows. The website claims "region-specific compliance" with auto-adapting checkout flows, but each new jurisdiction adds engineering and legal complexity.

**Developer adoption inertia:** Migrating subscribers from Apple IAP to web billing requires developers to accept the risk of Apple relationship friction. Many developers, especially those dependent on Apple featuring or editorial placements, may avoid alternative billing even when legally permitted. The Founding Partner Program (free for two years) mitigates price objections but not relationship risk.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Apple collected $27.39B in global App Store commissions in 2024 (TechCrunch, May 2025 via search snippet); $10B+ in U.S. alone (TechCrunch, May 2025 via search snippet) |
| SAM | No public data found for the specific subscription-app alternative billing segment |
| Traction | No public data found (no user counts, customer names, or revenue disclosed) |
| Revenue Signal | Pricing listed: 5% + $0.50/txn (Managed) or 0.5% of attributed revenue (BYOS); Founding Partner Program free for 2 years (ZeroSettle website) |
| Founders | Ryan Elliott: Former Apple systems software engineer, Cal Poly SLO, Apple patent holder. Gabe Roeloffs: Former Apple OS engineer, Cal Poly SLO, prior startup founder. |
| Competitors | RevenueCat ($119M raised, $20M revenue 2024, in-platform subscription mgmt). Paddle ($293M raised, $90.9M revenue 2024, SaaS MoR). Neon Pay ($14M raised, revenue unknown, gaming-focused MoR). Adapty ($2.5M raised, revenue unknown, paywall analytics). Stripe (public, payment infra, no turnkey migration). |
| Moat Signals | MoR switching costs once subscribers migrated; entitlement sync integration depth; Apple insiders with platform knowledge |
| Risk Factors | Regulatory uncertainty on Apple's right to charge fees on linked-out purchases, Apple platform retaliation via App Review, Stripe competitive exposure |
| Founder Reach | Ryan Elliott: GitHub 27 followers/134 stars (wsbtickerbot), LinkedIn (ryanelliott-10). Gabe Roeloffs: Twitter @gaberoeloffs (count not retrievable), GitHub 8 followers/7 stars, LinkedIn (gabe-roeloffs). |
| Distribution Signals | No public data found (no Product Hunt launch, no press coverage, no app store listings) |
| Emails | gabe@zerosettle.io, support@zerosettle.io |
