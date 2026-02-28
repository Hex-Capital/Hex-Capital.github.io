# SideKit

> One package to take your mobile app to production.

| Field | Value |
|-------|-------|
| Website | https://appsidekit.com |
| YC Page | https://www.ycombinator.com/companies/sidekit |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Analytics |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | API, Enterprise Software, Infrastructure |
| YC Partner | Diana Hu |
| Emails | ashish@appsidekit.com, ethan@appsidekit.com (company website) |

## The Idea

**Problem:** Mobile app developers who ship to production face fragmented backend tooling for analytics, version management, and feature control. Individually, a developer must integrate separate SDKs for analytics (e.g., Firebase, Mixpanel), feature flags (e.g., LaunchDarkly), and version gating — adding complexity, bloating app size, and increasing maintenance overhead. The pain is acute for solo developers and small teams building with SwiftUI or React Native who lack dedicated infrastructure engineers. Current solutions either bundle enterprise-scale complexity (LaunchDarkly, Statsig) or require stitching together free tiers from multiple providers (Firebase Remote Config + Mixpanel + custom version-check logic).

**Approach:** SideKit provides a single, lightweight SDK (244 kB per the company's LinkedIn post, January 2026) that bundles three capabilities: privacy-first analytics (event tracking without collecting personal data), version gating (block broken versions, set minimum versions with one click), and self-healing via AI agents that group user feedback and automatically ship fixes as pull requests. The SDK currently supports SwiftUI, UIKit, and React Native (docs.appsidekit.com). Version gating is offered free regardless of user volume.

**Differentiation:** Unlike LaunchDarkly or Statsig, which focus primarily on feature flags and experimentation for larger engineering teams, SideKit targets mobile-first developers and bundles analytics and version management together. Unlike Firebase, which requires integration with the broader Google ecosystem and collects user data, SideKit positions as privacy-first with no personal data collection. The "self-healing" feature — AI agents that process user feedback and ship fixes as PRs — is a differentiator not offered by traditional analytics or feature flag platforms.

**Business Model:** SideKit uses a freemium, usage-based pricing model measured in "signals" (events sent from the app). Three tiers are listed on the website (appsidekit.com):
- **Free:** $0/month, 100,000 signals/month, analytics + versions
- **Hobby:** $29/month, 500,000 signals/month, adds Feedback Center
- **Growth:** $99/month, 5M signals/month, adds Self-Healing AI

No credit card required; no auto-upgrades or expiring trials. A promotional offer of 250K free signals for new apps was posted on LinkedIn (January 24, 2026). No public revenue figures have been disclosed.

**TAM/SAM:** The mobile apps and web analytics market was valued at approximately $12.77B in 2024 and is projected to reach $14.86B in 2025, growing at approximately 16.4% CAGR (Precedence Research, 2024 via search snippet). The feature management software market was valued at approximately $319M–$1.45B in 2024 depending on scope definitions (24MarketReports, 2024 via search snippet; Growth Market Reports, 2024 via search snippet). No public SAM data specific to SideKit's segment (mobile-first developers needing bundled analytics + version management) was found.

**GTM / Distribution:** [Inferred]: Most likely distribution path is developer-led, bottom-up adoption via indie developer communities (Indie Hackers, where founder Ashish Selvaraj is active), the open-source iOS SDK on GitHub, documentation at docs.appsidekit.com, and Y Combinator's network. The free version-gating tier serves as a wedge to acquire users who may convert to paid analytics and self-healing plans. The React Native SDK expands reach beyond the Apple ecosystem.

## Defensibility

No strong defensibility signals found in public sources at this stage. The MIT-licensed open-source iOS SDK (github.com/appsidekit/ios-sdk) has 7 stars and 12 commits as of February 2026.

[Inferred]: Potential moat could develop via: (1) switching costs — once developers embed the SDK and build workflows around version gating and analytics, migration cost increases with app scale; (2) data accumulation — analytics data locked in SideKit's dashboard creates retention; (3) the self-healing AI agent feature could become a defensibility vector if it improves with more feedback data across customers, creating a data flywheel. None of these are proven at this stage.

**Market structure:** Firebase Remote Config is free and deeply integrated into Google's mobile ecosystem, with a 72%+ iOS integration rate and ~99% Android integration rate (MetaCTO, 2024 via search snippet). However, Firebase bundles user data collection and requires Google ecosystem buy-in, creating a structural opening for a privacy-first alternative. LaunchDarkly's pricing ($330M raised, targeting enterprise at higher price points) creates a gap at the indie/small-team segment. [Inferred]: The structural barrier to incumbents is not technical complexity but business model conflict — Firebase monetizes via data collection (which conflicts with privacy-first positioning), and LaunchDarkly's enterprise sales motion makes it uneconomical to serve $29/month indie developers.

**Commoditization risk:** The individual components (analytics, feature flags, version management) are well-understood and available from multiple providers. An engineer could replicate the basic bundling in weeks. The self-healing AI feature is more differentiated but could be replicated by any team with LLM API access. PostHog (open-source, $180M+ raised) already bundles analytics, feature flags, and session recording. The primary barrier to commoditization is execution speed and focus on the mobile-developer niche.

## Market & Traction

**Traction signals:**
- LinkedIn company page: 227 followers (LinkedIn, accessed February 2026)
- GitHub iOS SDK: 7 stars, 0 forks, 12 commits, MIT license, latest release v1.0.6 on February 23, 2026 (github.com/appsidekit/ios-sdk)
- Company Twitter/X: @appsidekit (YC page); follower count not retrievable due to JavaScript rendering
- Website displays sample signal counts of 373 and 981 (appsidekit.com) — these appear to be demo/illustrative figures
- No Product Hunt launch found
- No Discord or Slack community found
- No app store listing found (SideKit is an SDK, not a consumer app)
- No press coverage found in named publications
- No job postings (YC page shows 0 jobs)
- Founder Ashish Selvaraj has prior traction with a different product: Not Evil Sudoku crossed 50,000 installs by January 2023 (Indie Hackers post). This is a prior product, not SideKit traction.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. SideKit |
|-----------|---------|-------------|-------------------------------|
| **LaunchDarkly** | $330M total (Crunchbase via search snippet) | ~$60M revenue in 2024 (Latka, 2024 via search snippet) | Enterprise-grade feature management with broad platform support; targets large engineering teams vs. SideKit's indie/mobile focus |
| **Statsig** | $153M+ total; acquired by OpenAI for $1.1B (Bloomberg, September 2025 via search snippet) | $40M ARR (BusinessWire, May 2025 via search snippet) | Full experimentation platform (A/B testing, feature flags, analytics); broader scope and larger team vs. SideKit's lightweight mobile SDK |
| **PostHog** | $180M+ total; $1.4B valuation (Sacra, 2025 via search snippet) | $9.5M ARR in 2024, 138% YoY growth (Sacra, 2025 via search snippet) | Open-source product analytics suite bundling analytics, feature flags, session recording, and A/B testing; web-first vs. SideKit's mobile-first |
| **Flagsmith** | $130K (bootstrapped) (Crunchbase via search snippet) | $1.5M revenue in 2024 (Latka, 2024 via search snippet) | Open-source feature flag platform with self-hosted option; feature-flag focused vs. SideKit's bundled analytics + version gating |
| **Firebase Remote Config** | Google-backed (no separate funding) | Revenue unknown (part of Google Cloud) | Free feature flagging within Google ecosystem; massive distribution but requires Google account and data collection vs. SideKit's privacy-first approach |

**Why now:** [Inferred]: Several converging factors: (1) The explosion of AI-assisted code generation tools (Cursor, GitHub Copilot, Claude) has lowered the barrier to building mobile apps, creating a wave of new indie developers who need production infrastructure but lack DevOps expertise — SideKit's tagline directly addresses this ("It's never been easier to turn ideas into apps, it should be just as easy to take those apps to production"). (2) Growing privacy regulation (GDPR, state-level US privacy laws) increases demand for analytics that don't collect personal data. (3) LLM capabilities have reached a threshold enabling the "self-healing" feature — AI agents that can parse user feedback and generate code fixes — which was not feasible before 2023.

## Founders & Team

**Ashish Selvaraj** — Co-founder
- CS & Business, University of Waterloo (2020–2025) and Wilfrid Laurier University (Lazaridis School of Business & Economics, 2020–2025) (LinkedIn via search snippet)
- Previously: Software Engineer intern at Databricks; intern at Microsoft (LinkedIn headline: "CS & Business @ UWaterloo | Prev. Databricks, Microsoft")
- Prior product: Not Evil Sudoku, a minimalist iOS sudoku app that crossed 50,000 installs by January 2023 (Indie Hackers post). Built a private analytics service for the sudoku app (Medium post), which appears to be a precursor to SideKit's analytics product.
- Active on Indie Hackers with posts about product building and launches
- Twitter/X: @selvarajashish (x.com/selvarajashish) — follower count not retrievable
- LinkedIn: linkedin.com/in/ashish-selvaraj/ — 500+ connections
- GitHub: github.com/SaurontheMighty — 20 repos, 7 stars, 20 followers; also github.com/appsidekit (organization)

**Ethan Pronev** — Co-founder
- Computer Science, University of Waterloo (ethanpronev.com via search snippet)
- Background in competitive programming with participation in online and in-person contests (ethanpronev.com via search snippet)
- The SideKit website states the team includes "engineers from Databricks, Jane Street, Citadel, Microsoft" (appsidekit.com). Given Ashish's confirmed Databricks and Microsoft experience, [Inferred]: Ethan likely has experience at Jane Street and/or Citadel, though no public LinkedIn or other source could be found confirming this.
- Twitter/X: No public account found
- LinkedIn: No public profile found in search results
- GitHub: No public personal account found
- Personal website: ethanpronev.com (returned 404 at time of research)

**Co-founder relationship:** Both founders attended the University of Waterloo for Computer Science, indicating they likely met through their shared academic program.

**Founder-market fit:** Ashish Selvaraj has direct experience building and shipping a consumer iOS app (Not Evil Sudoku, 50K+ installs) and specifically built a private analytics service for that app — the exact problem SideKit solves. His experience at Databricks provides backend data infrastructure knowledge relevant to building an analytics platform. The team's claimed experience at Jane Street and Citadel suggests quantitative and systems engineering rigor, though only Ashish's Databricks and Microsoft credentials are independently confirmable. No advisors, board members, or notable investors beyond Y Combinator were found.

## Key Risks

**Name collision / brand disambiguation:** Multiple unrelated companies use the name "SideKit," including a New Zealand business consulting firm (LinkedIn: SideKit NZ), an open-source Swift package by SideStore (github.com/SideStore/SideKit), and other products. This creates SEO competition and potential customer confusion. The company uses "appsidekit" as its domain and social handles, which partially mitigates this.

**Platform concentration (Apple ecosystem):** The first-party SDK launched for SwiftUI/UIKit, with React Native support added subsequently. The company's origins and founder expertise are iOS-centric. Android SDK support is not yet listed. This limits addressable market to iOS developers until Android support ships, while Firebase dominates Android analytics at ~99% penetration.

**Well-funded competitive encirclement:** PostHog ($180M+ raised, open-source, bundles analytics + feature flags + session recording) and Statsig (acquired by OpenAI for $1.1B) occupy adjacent positions with significantly more resources. Firebase Remote Config is free and ubiquitous. SideKit's bundled value proposition could be replicated by any of these players adding version management and AI-driven feedback processing.

**Self-healing AI feature viability:** The AI agent that "ships fixes as pull requests" based on user feedback is a novel claim that is technically ambitious. No public evidence of customer usage or effectiveness of this feature was found. If the AI-generated fixes are low-quality or create regressions, it could undermine trust in the broader platform.

**Unverified team credentials:** The website claims engineers from "Jane Street, Citadel" but no public profile confirming Ethan Pronev's employment at either firm was found. Inability to verify this claim introduces credibility risk for due diligence.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $12.77B mobile apps and web analytics market (Precedence Research, 2024 via search snippet, 16.4% CAGR); $319M–$1.45B feature management software market (various sources, 2024 via search snippet) |
| SAM | No public data found |
| Traction | 7 GitHub stars (github.com/appsidekit/ios-sdk, Feb 2026); 227 LinkedIn followers (LinkedIn, Feb 2026); 0 job postings (YC page) |
| Revenue Signal | Freemium pricing: Free/$29/$99 per month tiers based on signal volume (appsidekit.com). No public revenue figures found. |
| Founders | Ashish Selvaraj (Co-founder): UWaterloo CS & Business, ex-Databricks/Microsoft intern, shipped Not Evil Sudoku (50K+ installs). Ethan Pronev (Co-founder): UWaterloo CS, competitive programming background. |
| Competitors | LaunchDarkly ($330M raised, ~$60M revenue 2024, enterprise feature flags vs. SideKit's mobile/indie focus); PostHog ($180M+ raised, $9.5M ARR 2024, open-source analytics suite vs. SideKit's lightweight SDK); Statsig ($153M+ raised, $40M ARR, acquired by OpenAI $1.1B, experimentation platform vs. SideKit's bundled mobile tooling); Flagsmith ($130K raised/bootstrapped, $1.5M revenue 2024, open-source feature flags); Firebase Remote Config (Google-backed, free, dominant market share) |
| Moat Signals | No public data found |
| Risk Factors | Brand name collision with unrelated companies, Apple ecosystem concentration pending Android SDK, well-funded competitors (PostHog, LaunchDarkly, Firebase) |
| Founder Reach | Ashish Selvaraj: Twitter @selvarajashish (count not retrievable), LinkedIn 500+, GitHub 20 repos/7 stars. Ethan Pronev: Twitter not found, LinkedIn not found, GitHub not found |
| Distribution Signals | No public data found (no Product Hunt launch, no app store listing, no community channels identified) |
| Emails | ashish@appsidekit.com, ethan@appsidekit.com (company website) |
