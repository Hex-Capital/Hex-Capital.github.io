# ZeroSettle

> Bypass the App Store tax and enable web-based purchases

| Field | Value |
|-------|-------|
| Website | https://zerosettle.io |
| YC Page | https://www.ycombinator.com/companies/zerosettle |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Sales |
| Team Size | 2 |
| Location | No public data found |
| Tags | Fintech, Payments, Cryptocurrency |

## The Idea

**Problem:** iOS app developers pay Apple a 30% commission (15% for qualifying small businesses) on all in-app purchases processed through StoreKit. For subscription apps, this commission applies to every renewal. Developers historically had no compliant way to offer alternative checkout flows within or adjacent to their apps. The problem is acute for subscription-based apps and games where cumulative commission erosion is substantial. The existing alternative — building a custom web checkout with tax compliance, fraud protection, and chargeback management across 190+ jurisdictions — is operationally complex for most development teams.

**Approach:** ZeroSettle operates as a Merchant of Record (MoR), acting as the legal seller on behalf of app developers. It provides drop-in SDKs for Swift (iOS 17.0+), React Native, and Flutter that automatically sync products from App Store Connect. The SDK surfaces "Sign Up & Save" paywalls offering users a choice between App Store billing or direct web-based billing at a discount. It also provides "Switch & Save" campaigns to migrate existing subscribers and "Save the Sale" flows (pauses, discounts, plan changes) to reduce churn. ZeroSettle handles sales tax remittance across 190+ countries, chargebacks, refunds, fraud protection, and 24/7 customer support. The checkout adapts by jurisdiction: native Apple Pay payment sheets in the US (per the Epic v. Apple injunction), in-app browser in the EU (per the Digital Markets Act), with automatic fallback to StoreKit (zerosettle.io).

**Differentiation:** Unlike Stripe's raw iOS payment processing tools, ZeroSettle bundles the full MoR function (tax, compliance, chargebacks, fraud) and provides pre-built paywall UI and subscriber migration campaigns. Unlike Paddle (which partnered with RevenueCat for a similar offering announced June 2025), ZeroSettle offers a single integrated SDK rather than requiring two vendor integrations. Unlike Appcharge and Neon, which focus primarily on mobile gaming DTC storefronts, ZeroSettle targets the broader iOS subscription app market. Unlike RevenueCat (which is a subscription analytics/management layer), ZeroSettle handles the actual payment processing and MoR responsibilities.

**Business Model:** ZeroSettle offers two pricing tiers. "ZeroSettle Managed" charges 5% + $0.50 per transaction, where ZeroSettle handles all payment processing and MoR functions. "Bring Your Own Stripe" charges 0.5% of ZeroSettle-attributed revenue, for developers who want to use their existing Stripe account. A "Founding Partner Program" offers free access for two years (limited spots, application-only) (zerosettle.io).

**TAM/SAM:** The global mobile application market was valued at approximately $330.61 billion in 2025 (Precedence Research, 2025 via search snippet), with a projected CAGR of 14.04% through 2035. Apple's App Store generated an estimated $270 billion in revenue in 2025 (Electroiq via search snippet). The serviceable market is the subset of iOS app revenue flowing through in-app purchases where developers would opt into alternative billing — no public third-party estimate exists for this specific segment. Appcharge reported processing over $500 million in annual DTC transactions for mobile games alone (BusinessWire, August 2025 via search snippet), providing a reference point for early adoption volumes in the gaming vertical.

**GTM / Distribution:** [Inferred]: The most likely distribution path is developer-to-developer word-of-mouth and YC network distribution, given the 2-person team and SDK-first product. The "Founding Partner Program" (free for two years) functions as a land-and-expand strategy to seed initial adoption. The "under 15 minutes" integration claim and automatic App Store Connect product sync lower onboarding friction. The product's compliance with both the Epic v. Apple injunction and the EU Digital Markets Act positions it for both US and EU markets.

## Defensibility

The primary defensibility signal is the operational complexity of the MoR function: handling tax compliance across 190+ countries, managing chargebacks, fraud detection, and navigating jurisdiction-specific checkout requirements (US vs. EU regulatory regimes). This operational layer creates switching costs once developers integrate the SDK and migrate subscribers. The "Cryptocurrency" tag and the existence of a "ZeroSettleEscrowKit" repo containing "all escrow and crypto sources" (github.com/zerosettle) suggest a potential crypto/escrow component that could introduce additional technical differentiation, though no public details are available on this feature.

No network effects or data moats are identifiable at this stage. [Inferred]: Potential defensibility could develop via accumulated subscriber payment data across customers enabling better churn prediction and conversion optimization, but this is unproven.

**Market structure:** Apple itself cannot offer this product because it would cannibalize its own 30% commission revenue stream. Stripe could build a comparable MoR layer but has historically positioned as infrastructure rather than a managed service with pre-built UI components. Paddle + RevenueCat announced a partnership in June 2025 to address this market (TechCrunch, June 2025), but their solution requires integrating two separate vendor products. The structural barrier for incumbents like Apple is direct business model cannibalization; for Stripe, it is the shift from infrastructure-only positioning to managed service.

**Commoditization risk:** The core SDK integration is technically reproducible. Paddle (valued at $1.4B) and RevenueCat (valued at $500M) have already partnered to offer a combined solution. Appcharge ($89M+ raised) and Neon ($14M raised) are funded competitors in adjacent verticals. Stripe provides raw iOS payment processing documentation. The MoR compliance layer is the harder-to-replicate component, but Paddle, FastSpring, and Lemon Squeezy already operate MoR businesses for digital products.

## Market & Traction

**Traction signals:**
- GitHub: ZeroSettleKit iOS SDK — 8 stars, 65 commits, 16 releases, 4 contributors, MIT license (github.com/zerosettle/ZeroSettleKit, accessed February 2026)
- GitHub: 4 public repositories (ZeroSettleKit for Swift, ZeroSettle-Android for Kotlin, ZeroSettle-Flutter for Dart, ZeroSettleEscrowKit for Swift), all with recent updates as of February 19, 2026 (github.com/zerosettle)
- Company Twitter/X: @zerosettle (YC page); follower count not retrievable
- Gabe Roeloffs Twitter/X: @gaberoeloffs (x.com); follower count not retrievable
- LinkedIn company page: not found in search results
- No Product Hunt launch found
- No press coverage in named publications found
- No Discord/Slack community found
- No public user counts, revenue figures, or customer testimonials found
- No app store ratings or Chrome extension applicable (B2B SDK product)

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. ZeroSettle |
|---|---|---|---|
| Paddle + RevenueCat (partnership) | Paddle: $293M raised, $1.4B valuation; RevenueCat: $119M raised, $500M valuation | Paddle: $90.9M revenue (Getlatka, October 2024 via search snippet); RevenueCat: ~$20M ARR (Getlatka, 2024 via search snippet) | Established MoR (Paddle) + subscription analytics (RevenueCat), but requires two vendor integrations; announced iOS external payment partnership June 2025 (TechCrunch, June 2025) |
| Appcharge | $89-92M raised, Series B $58M (IVP, August 2025) | $500M+ in annual DTC transactions processed (BusinessWire, August 2025 via search snippet) | Focused on mobile gaming DTC storefronts; does not target general iOS subscription apps |
| Neon (NeonPay) | $14M (Thrive Capital, a16z Speedrun, Renegade Partners) (neonpay.com) | Revenue unknown | Focused on DTC for game studios; San Francisco-based team with Affirm, Apple, Supercell backgrounds |
| Adapty | $2.5M raised (500 Global, others) (Tracxn via search snippet) | Revenue unknown | Subscription management and analytics layer; integrates with Stripe and Paddle for payments rather than acting as MoR |
| Stripe (direct) | Public company | Public company | Provides raw payment processing infrastructure for iOS external payments (announced May 2025 per TechCrunch); does not provide MoR, pre-built paywalls, or subscriber migration tools |

**Why now:** On April 30, 2025, U.S. District Judge Yvonne Gonzalez Rogers ruled that Apple "willfully" violated her 2021 Epic v. Apple injunction by maintaining anticompetitive barriers to external payment links (CommLaw Group, 2025 via search snippet). This ruling permitted iOS apps in the US to link to external web checkout flows without Apple blocking or restricting placement and without paying Apple's commission. Separately, the EU Digital Markets Act required Apple to allow alternative payment methods in the EU, with Apple imposing up to a 20% commission on external EU transactions (Adapty, 2025 via search snippet). In December 2025, a court ordered that developers must have access to these alternative billing options by March 17, 2026. [Inferred]: These regulatory changes created a new market for turnkey solutions that handle the operational complexity of multi-jurisdiction iOS alternative billing, which did not exist as a viable product category prior to April 2025.

## Founders & Team

**Ryan Elliott** — Co-founder
- Education: California Polytechnic State University, San Luis Obispo (LinkedIn via search snippet)
- Previously: Systems Software Engineer at Apple, San Diego; received patent at Apple; team focused on battery life, thermals, and user experience for Apple products (LinkedIn via search snippet)
- Twitter/X: No public account found under his name; handle not listed on YC page
- LinkedIn: linkedin.com/in/ryanelliott-10 (search snippet) and linkedin.com/in/ryan-elliott-aa107113b (GitHub profile link)
- GitHub: github.com/RyanElliott10 — 27 repos, 27 followers; company listed as "ZeroSettle"; notable repo: `wsbtickerbot` (Reddit scraper for r/wallstreetbets ticker mentions, 134 stars, archived) (github.com/RyanElliott10)

**Gabe Roeloffs** — Co-founder
- Previously: Worked on operating systems at Apple (YC page); iOS developer with Swift experience (Medium, January 2015)
- Contact: gabe@zerosettle.io (zerosettle.io)
- Twitter/X: @gaberoeloffs (x.com/gaberoeloffs); follower count not retrievable
- LinkedIn: linkedin.com/in/gabe-roeloffs — headline listed as Apple / Founder of ZeroSettle (search snippet)
- GitHub: No personal public GitHub profile found; contributor to ZeroSettle organization repos
- Medium: medium.com/@gaberoeloffs — published articles on iOS/Swift development

**Co-founder relationship:** Both founders attended California Polytechnic State University, San Luis Obispo (confirmed for Ryan Elliott via LinkedIn search snippet; Gabe Roeloffs had a San Luis Obispo-based startup per search snippet, suggesting shared university or locale). Both worked at Apple, indicating overlapping employer history.

**Founder-market fit:** Both founders worked at Apple on systems-level software (operating systems, battery life, thermals), giving them direct insight into Apple platform internals, App Store economics, and the developer experience of building for iOS. Their first-party Apple engineering experience is directly relevant to building a compliant SDK that interoperates with StoreKit and navigates Apple's evolving guidelines. No advisors, board members, or notable investors beyond Y Combinator have been identified. Brad Flora is listed as the primary YC partner (YC page).

## Key Risks

**Regulatory reversal risk:** ZeroSettle's core value proposition depends on the April 2025 Epic v. Apple injunction and the EU Digital Markets Act. In December 2025, a U.S. appeals court ruled that Apple should be able to charge a "reasonable commission" on purchases made via external links (MacRumors, December 2025 via search snippet). If courts ultimately allow Apple to impose fees approaching the original 30% commission on externally linked transactions, ZeroSettle's savings proposition narrows or disappears. The regulatory landscape is actively in flux with a March 2026 compliance deadline.

**Well-funded competitor convergence:** Paddle ($293M raised, $1.4B valuation) and RevenueCat ($119M raised, $500M valuation) announced a joint iOS external payment solution in June 2025 (TechCrunch). Appcharge ($89M+ raised) and Neon ($14M raised) are attacking the same opportunity in gaming. Stripe provides competing infrastructure. ZeroSettle faces the risk of being outspent on product development, sales, and developer relations by incumbents who are already targeting this market.

**Apple platform dependency:** ZeroSettle's product is entirely dependent on Apple's iOS ecosystem. Apple controls the App Store Review Guidelines and could introduce new restrictions, modify StoreKit behavior, or change compliance requirements in ways that disrupt ZeroSettle's SDK functionality. Apple has historically responded to regulatory pressure with technical and policy changes designed to maintain control (e.g., the "anti-steering" provisions that prompted the April 2025 contempt finding).

**Cryptocurrency/escrow positioning ambiguity:** The "Cryptocurrency" tag on the YC page and the "ZeroSettleEscrowKit" repo containing "all escrow and crypto sources" suggest a crypto component that is not explained on the company website. This creates positioning ambiguity — the core product appears to be a straightforward payment MoR, but the crypto element may introduce regulatory complexity (money transmitter licensing, securities considerations) and could confuse potential customers.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $330.61B global mobile application market (Precedence Research, 2025 via search snippet, 14.04% CAGR through 2035) |
| SAM | No public data found for the specific iOS alternative billing segment |
| Traction | 8 GitHub stars on ZeroSettleKit (github.com/zerosettle/ZeroSettleKit, Feb 2026); 4 public repos with recent commits (github.com/zerosettle, Feb 2026); no public user counts or customer announcements found |
| Revenue Signal | Pricing published: 5% + $0.50/txn (Managed) or 0.5% of attributed revenue (BYO Stripe); Founding Partner Program offers free access for 2 years (zerosettle.io). No public revenue figures found |
| Founders | Ryan Elliott: Cal Poly SLO, ex-Apple systems software engineer, patent holder. Gabe Roeloffs: ex-Apple operating systems, iOS/Swift developer |
| Competitors | Paddle + RevenueCat ($293M + $119M raised, $90.9M + $20M revenue respectively, joint iOS payment solution launched June 2025); Appcharge ($89M+ raised, $500M+ annual DTC transactions, gaming-focused); Neon ($14M raised, revenue unknown, gaming DTC); Adapty ($2.5M raised, revenue unknown, subscription management layer); Stripe (public company, raw payment infrastructure) |
| Moat Signals | MoR operational complexity (tax compliance in 190+ countries, chargebacks, fraud); jurisdiction-specific checkout logic (US vs. EU); SDK integration switching costs |
| Risk Factors | Regulatory reversal on Apple external payment fees, well-funded competitor convergence (Paddle/RevenueCat/Appcharge/Neon), Apple platform dependency and guideline changes |
| Founder Reach | Ryan Elliott: Twitter not found, LinkedIn linkedin.com/in/ryanelliott-10, GitHub 134 stars (wsbtickerbot). Gabe Roeloffs: Twitter @gaberoeloffs (count not retrievable), LinkedIn linkedin.com/in/gabe-roeloffs, GitHub not found (personal) |
| Distribution Signals | No public data found (no Product Hunt launch, no press coverage, no app store listings identified) |
