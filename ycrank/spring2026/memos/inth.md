# Inth

> Privacy Infrastructure for Developers

| Field | Value |
|-------|-------|
| Website | https://inth.com |
| YC Page | https://www.ycombinator.com/companies/inth |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 3 |
| Location | London, England, United Kingdom |
| Tags | Compliance, Web Development |
| YC Partner | Andrew Miklas |
| Emails | No public data found |

## The Idea

**Problem:** Websites must collect user consent for cookies and tracking under GDPR, CCPA, ePrivacy, IAB TCF 2.3, UK GDPR, Quebec Law 25, and other regulations (inth.com). Existing consent management platforms (CMPs) such as OneTrust, Usercentrics, and Cookiebot rely on external third-party scripts that degrade site performance — benchmarked at 445ms (Usercentrics), 514ms (OneTrust), and 709ms (Ketch) of overhead (c15t.com). These tools are dashboard-driven, offer limited developer control, and create layout shifts and bundle bloat of 50–100KB (Roboto Studio blog, July 2025). Developers currently choose between compliance and site performance.

**Approach:** Inth's core product is **c15t**, a headless, composable consent engine that runs natively inside the application rather than loading external scripts (inth.com). It is TypeScript-native with SDKs for React, Next.js, Svelte, and Node.js (GitHub, c15t/c15t). The system provides server-side rendering with geolocation-based jurisdiction detection, eliminating manual code branching per region (inth.com). It operates in three modes: c15t mode (hosted), offline mode, and custom mode (Heavybit podcast, July 2025). A DSAR (Data Subject Access Request) SDK is in alpha (inth.com). CookieBench, a companion open-source benchmarking tool at cookiebench.com, measures real-world CMP performance impact (cookiebench.com). c15t achieves 30ms FCP, 30ms LCP, and 0.6KB total size on CookieBench (cookiebench.com).

**Differentiation:**
- vs. OneTrust/Usercentrics: No external scripts, no vendor lock-in, fully open-source (Apache 2.0 license) (GitHub). OneTrust is enterprise-priced at $10K+ minimum ACV (Enzuzo, 2026). c15t is embeddable code, not a SaaS dashboard.
- vs. CookieYes/Cookiebot: These are plug-and-play widgets; c15t provides headless, composable components with full UI ownership — described by Vercel CEO Guillermo Rauch as "@shadcn for Consent Management" (X.com, June 10, 2025).
- vs. all incumbents: Zero network overhead architecture; 89ms total consent runtime vs. 445–709ms for legacy CMPs (inth.com).

**Business Model:** No public pricing page found on inth.com or c15t.com as of April 2026. The product offers a hosted mode (consent.io dashboard sign-up exists) alongside the open-source self-hosted option (inth.com). [Inferred]: Most likely monetization path is a hosted/managed SaaS tier (similar to the Better Auth / Clerk model referenced in the Heavybit podcast) layered on top of the open-source core, potentially with usage-based or per-domain pricing.

**TAM/SAM:** The consent management platform market was valued at $732.2M in 2025 (OMR Global via search snippet) to $1.82B in 2025 (Market Reports World via search snippet), with CAGR estimates of 11.2%–21.9% depending on scope (OMR Global, Roboto Studio blog via search snippet). One estimate projects the market reaching $11.59B by 2034 (Roboto Studio blog, July 2025). [Inferred]: The SAM for developer-focused CMP tooling targeting modern web frameworks is a subset of the broader CMP market — likely the segment of sites built on React, Next.js, and similar frameworks where performance is a buying criterion.

**GTM / Distribution:** The open-source GitHub repository (1,678 stars, 132 forks as of April 2026; c15t.com/stats) and npm ecosystem (1.8M total downloads, 4.9K daily average, 388.3K in April 2026; c15t.com/stats) serve as the primary distribution channels. Prebuilt script integrations for Google Tag Manager, Meta Pixel, PostHog, TikTok, and LinkedIn lower adoption friction (GitHub). A BigCommerce Catalyst integration exists (developer.bigcommerce.com). [Inferred]: Bottom-up developer adoption via open-source, converting to paid hosted tier for teams needing managed infrastructure.

## Defensibility

- **Open-source community:** 1,678 GitHub stars, 132 forks, 411 releases, and contributors from Expo, Adobe, Vercel, and Google (c15t.com/stats). 1.8M npm downloads over 365 days (c15t.com/stats).
- **Performance benchmark ownership:** CookieBench (cookiebench.com) was created by the same team, establishing c15t as the reference standard for CMP performance measurement. Note: this is a self-created benchmark.
- **Framework ecosystem integrations:** Native SDKs for React, Next.js, Svelte, Node.js, and BigCommerce Catalyst create switching costs once embedded in application code (GitHub, developer.bigcommerce.com).
- **Endorsement network:** Guillermo Rauch (Vercel CEO) publicly endorsed c15t (X.com, June 10, 2025, ~79K views). Listed customers include Vercel, Expo, Zed, Infisical, and Unkey (inth.com).

**Market structure:** Incumbent CMPs (OneTrust, Usercentrics) are built around dashboard-driven, script-injection architectures sold to legal/compliance buyers, not developers. [Inferred]: Rebuilding as a headless, embeddable SDK would cannibalize their existing external-script delivery model and require re-architecting their core product. Their sales channels target compliance officers, not engineering teams, creating a channel conflict for developer-first distribution.

**Commoditization risk:** The core consent UI layer is technically reproducible. However, the combination of jurisdiction-aware server-side logic, framework-native SDKs, compliance regulation coverage (GDPR, CCPA, IAB TCF 2.3, etc.), and the growing open-source contributor base increases replication effort over time. [Inferred]: A well-resourced developer tools company (e.g., Vercel, Netlify) could build a competing solution, though the regulatory domain expertise and ongoing maintenance burden across jurisdictions serves as a deterrent.

## Market & Traction

**Traction signals:**
- GitHub: 1,678 stars, 132 forks, 411 releases (c15t.com/stats, April 2026)
- npm ecosystem: 1.8M total downloads, 388.3K monthly (April 2026), 4.9K daily average, +26.9% growth rate (c15t.com/stats)
- Listed customers: Vercel, Expo, Zed, Infisical, Unkey, Chelsea Piers, Get Vocal, L+R Group, Mario Testino, Roboto Studio (inth.com)
- Stargazers from employees at Expo, Adobe, Vercel, Google (c15t.com/stats)
- Guillermo Rauch (Vercel CEO) endorsement tweet, ~79K views (X.com, June 10, 2025)
- Heavybit "Open Source Ready" podcast appearance (July 17, 2025)
- Scaling DevTools podcast appearance (scalingdevtools.com)
- Vercel Community Session hosted (community.vercel.com)
- BigCommerce Catalyst integration (developer.bigcommerce.com)
- c15t v1.0 launched early May 2025 (Heavybit podcast); v2.0 launched April 14, 2026 (c15t.com)
- Early adopters included a Hilton hotel location and Finnish e-commerce companies (Heavybit podcast, July 2025)
- Twitter/X: @BurnedChris (founder), @c15tdev (product), @consentdotio (company) — follower counts not retrievable
- Revenue signal: No public data found

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Inth/c15t |
|---|---|---|---|
| OneTrust | $1.13B raised (Crunchbase) | $500M (Getlatka, 2024) | Full enterprise privacy platform (DSARs, assessments, vendor monitoring); dashboard-driven, $10K+ ACV minimum |
| Usercentrics / Cookiebot | $41.7M raised; Cookiebot acquired 2021 (PRNewswire) | $117M (Getlatka, 2025) | Dual-brand strategy (enterprise + SMB plug-and-play); 1.4M websites using Cookiebot |
| Osano | $44.4M raised (TechCrunch, Aug 2023) | $5.9M (Getlatka, 2024) | Mid-market SaaS with "No Fines" pledge; 750K customers; compliance-officer-focused |
| CookieYes | Bootstrapped (Crunchbase) | $523K (Getlatka, 2024) | 1M customers; lowest-cost self-serve; freemium from €9/mo |
| Ketch | — | — | Programmatic privacy platform; 709ms benchmark (c15t.com) |

**Why now:**
- The EU Digital Markets Act enforcement began March 2024, expanding consent requirements beyond cookies to gatekeeper platforms (publicly reported regulation timeline).
- India's DPDP Act and Canada's CPPA are creating new jurisdiction-specific compliance demands referenced by the company (inth.com).
- [Inferred]: The proliferation of React/Next.js as dominant web frameworks (Next.js surpassing 6M weekly npm downloads) creates a large addressable developer population that prefers native SDK integrations over external script injections. Simultaneously, Core Web Vitals as a Google ranking factor makes CMP performance directly impact SEO, creating urgency for performance-optimized consent solutions.

## Founders & Team

**Christopher Burns** — Founder
- Second-time founder; previously Co-founder & CTO of Everfund, a nonprofit donation platform that raised $2.15M from investors including Netlify and Diaspora Ventures, scaled to 7 people, and processed payments across 33+ countries (Crunchbase; burnedchris.com; Heavybit podcast)
- 10 years of TypeScript web platform experience (burnedchris.com)
- Host of the FSJam podcast; contributed Magic Link authentication to RedwoodJS (burnedchris.com)
- Spent time in San Francisco's tech scene before returning to the UK (burnedchris.com)
- Education: No public data found
- Twitter/X: @BurnedChris — count not retrievable
- LinkedIn: linkedin.com/in/burnedchris — listed as "Christopher Burns - Consent"
- GitHub: BurnedChris — 48 followers, 54 public repos; pinned repo c15t/c15t (1.7K stars) (GitHub)

The YC page lists only Christopher Burns as founder despite a team size of 3 (YC page). No other team members are named in public sources.

**Co-founder relationship:** Only one founder listed; not applicable.

**Founder-market fit:** Burns built a payments/compliance platform at Everfund processing donations across 33+ countries, requiring multi-jurisdiction regulatory handling (burnedchris.com). His decade of TypeScript experience and framework-level open-source contributions (RedwoodJS) align directly with building developer-first SDKs for web compliance. The Guillermo Rauch endorsement and Vercel community session suggest established relationships in the Next.js/Vercel ecosystem, which is the primary target developer community.

## Key Risks

**Open-source monetization uncertainty:** No public pricing exists as of April 2026. The hosted mode (consent.io dashboard) exists but pricing is not disclosed. Competitors like CookieYes offer paid tiers starting at €9/mo. Without a visible revenue model, conversion from open-source users to paying customers is unproven.

**Benchmark credibility:** CookieBench (cookiebench.com), the primary performance benchmark cited by c15t, was created by the same team. While open-source and reproducible, this self-benchmarking arrangement may face skepticism from enterprise buyers evaluating CMP performance claims.

**Incumbent response at scale:** OneTrust ($500M revenue, 14K customers per Getlatka 2024) and Usercentrics ($117M revenue per Getlatka 2025) have resources to build developer-focused offerings. Usercentrics already acquired Cookiebot to cover the SMB segment (PRNewswire, September 2021). An incumbent acquiring or replicating a lightweight SDK layer is feasible.

**Single named founder with a 3-person team:** Only Christopher Burns is listed as founder on the YC page despite a stated team size of 3. The identities, roles, and backgrounds of the other two team members are not publicly available, limiting assessment of team composition.

**Regulatory complexity as ongoing cost:** Supporting GDPR, CCPA, UK GDPR, ePrivacy, IAB TCF 2.3, GPC, Quebec Law 25, DPDP Act, PIPL, and CPPA (inth.com; Roboto Studio blog) requires continuous legal/regulatory monitoring. Each new jurisdiction adds maintenance burden that scales linearly with coverage — a resource challenge at a 3-person team size.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $732.2M–$1.82B in 2025 depending on source (OMR Global; Market Reports World via search snippets); CAGR 11.2%–21.9% |
| SAM | No public data found |
| Traction | 1,678 GitHub stars, 132 forks (c15t.com/stats, April 2026); 1.8M npm downloads / 388.3K monthly (c15t.com/stats, April 2026); 11 listed customers including Vercel, Expo, Zed (inth.com) |
| Revenue Signal | No public data found |
| Founders | Christopher Burns (Founder): 2nd-time founder, ex-CTO Everfund ($2.15M raised), 10yr TypeScript, FSJam podcast host |
| Competitors | OneTrust ($1.13B raised, $500M revenue, enterprise privacy suite); Usercentrics/Cookiebot ($41.7M raised, $117M revenue, dual enterprise+SMB); Osano ($44.4M raised, $5.9M revenue, mid-market compliance); CookieYes (bootstrapped, $523K revenue, 1M customers, low-cost self-serve) |
| Moat Signals | 1,678 GitHub stars + 1.8M npm downloads (c15t.com/stats, April 2026); Guillermo Rauch endorsement ~79K views (X.com, June 2025); framework-native SDKs for React/Next.js/Svelte (GitHub) |
| Risk Factors | No public pricing/monetization, self-created performance benchmark, incumbent replication capacity |
| Founder Reach | Christopher Burns: Twitter @BurnedChris (count not retrievable), LinkedIn linkedin.com/in/burnedchris, GitHub BurnedChris 48 followers (GitHub) |
| Distribution Signals | 1.8M npm downloads (c15t.com/stats, April 2026); BigCommerce Catalyst integration (developer.bigcommerce.com); Vercel Community Session (community.vercel.com); Heavybit podcast (July 2025); Scaling DevTools podcast (scalingdevtools.com) |
| Emails | No public data found |
