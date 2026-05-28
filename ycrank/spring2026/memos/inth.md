# Inth

> Privacy compliance, enforced in code

| Field | Value |
|-------|-------|
| Website | https://inth.com |
| YC Page | https://www.ycombinator.com/companies/inth |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 3 |
| Location | London, England, United Kingdom |
| Tags | Developer Tools, Compliance, Open Source, Web Development |
| YC Partner | Andrew Miklas |
| Emails | No public data found |

## The Idea

- **Problem:** Engineering teams must comply with GDPR/CCPA/ePrivacy/Quebec Law 25, but consent, deletion, vendors, logs, AI systems and agent-written code changes all move user data inside the codebase, while companies still rely on dashboards, questionnaires and policy docs (inth.com, YC page).
- **Approach:** Inth sits inside the repo, detects user-data privacy risk, maps it to files and owners, and generates regulator/buyer evidence; consent layer is c15t, a headless SDK with native React/Next.js bindings, region-split hosting and "declarative policy packs" (inth.com).
- **Differentiation:** vs. OneTrust/Usercentrics — Inth advertises 89ms consent runtime overhead with c15t and a "tree-shakable" headless model "significantly faster" than those incumbents (inth.com; openalternative.co); vs. Transcend/DataGrail/Ketch (DSAR/workflow vendors) — Inth wedges via an OSS developer-installed SDK rather than a privacy-ops dashboard (inth.com); vs. Privado/Relyance AI (code-level scanning) — Inth pairs scanning with an installed runtime consent layer rather than scan-only (privado.ai; ketch.com).
- **Business Model:** Pricing page exists at /pricing but no tier details surfaced via fetch (inth.com); [Inferred]: freemium OSS c15t funneling to paid managed Inth DSAR + hosted consent, given LinkedIn lists "Inth DSAR — managed platform … (in development)" and the cookie-banner SaaS comp set (OneTrust/Osano) charges per domain/seat.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Bottom-up developer adoption via the c15t OSS package — 2.6M npm downloads, 1,691 GitHub stars, used by Vercel, Expo, Zed, Infisical, Unkey, Chelsea Piers and Mario Testino (inth.com; github.com/c15t/c15t); founder podcasts on Heavybit Scaling DevTools and Open Source Ready (scalingdevtools.com; heavybit.com).

## Defensibility

- **Moat today:** Installed OSS distribution — c15t is embedded in production apps at named devtool companies (Vercel, Expo, Zed, Infisical, Unkey) with 2.6M npm downloads and ~6.5K/day (npmjs.com; openalternative.co), creating per-app integration switching cost.
- **Future moat:** [Inferred]: A repo-resident agent that maps user-data flows to files/owners over time accumulates a customer-specific data-lineage graph that competitors arriving later cannot reconstruct; unproven because the repo-scanning and evidence-generation product is described on the YC page as the company's next layer beyond c15t, not yet a shipped paid SKU.
- **Market structure:** [Inferred]: Incumbent CMPs (OneTrust, Usercentrics) sell to legal/privacy buyers with no-code dashboards and tag-manager scripts; rebuilding as a headless OSS SDK installed in the codebase would cannibalize their script-loader telemetry/agency channel and pricing model (openalternative.co; ketch.com).
- **Commoditization risk:** Consent SDKs are buildable — Apache 2.0 license on c15t means any vendor (Ketch, Transcend, Privado, a shadcn-style fork) can copy the OSS layer (github.com/c15t/c15t; github.com/shadcn/c15t shows an existing fork).

## Market & Traction

- **Traction signals:**
  - c15t: 2.6M npm downloads cumulative; "2.4M downloads over the past 365 days, average 6.5K/day" (npmjs.com; openalternative.co).
  - c15t: 1,691 GitHub stars, 141 forks (github.com/c15t/c15t).
  - Named adopters: Vercel, Expo, Zed, Infisical, Unkey, Chelsea Piers, Mario Testino (inth.com, Apr 24 2026).
  - Performance claim: 89ms c15t consent runtime overhead vs legacy CMPs (inth.com).
  - LinkedIn (Consent / Inth company page): 223 followers (linkedin.com/company/consentdotio).
  - Founder X @BurnedChris: 1,252 followers (x.com/burnedchris via search snippet).
  - Rebrand: Consent.io → Inth announced Launch Week Day 1 (linkedin.com post by burnedchris, ID 7449578563323928576).
  - DSAR SDK in Alpha; "Inth DSAR" managed platform "in development" (inth.com; linkedin.com/company/consentdotio).
  - No public revenue, ARR, paying-customer count, or funding round beyond YC standard deal found.
- **Competitors (5):**
  - OneTrust ($1.144B raised, last round $150M Jul 2023, $5.1B valuation at 2020 Series C, revenue undisclosed publicly; cbinsights.com): no-code enterprise CMP/GRC suite — Inth differentiates as OSS, code-resident, headless.
  - Transcend (~$90M raised, $40M Series B May 2024 led by StepStone; transcend.io/blog; axios.com): DSAR automation and AI governance for engineering teams — overlapping wedge, larger and better funded.
  - DataGrail ($84.2M raised, $45M Series C; datagrail.io/press): automated DSARs/privacy ops, dashboard-first vs. Inth's repo-first install.
  - Ketch ($43M raised; tracxn.com): no-code privacy orchestration — opposite philosophy to Inth's developer-installed SDK.
  - Privado ($17.5M raised, founded 2020, Series A Jan 2022 with Insight/Peak XV; dealroom.co): code-scanning data maps — closest direct overlap on "compliance in the codebase," but scan-only vs. Inth's scan+runtime consent.
  - Osano ($19.4M raised, $5.9M revenue 2024 vs $3.2M 2023; getlatka.com): lightweight SMB CMP — overlaps c15t price tier.
- **Why now:** [Inferred]: Two compounding catalysts in the last 12–24 months — (1) AI agents writing code that moves user data (cited verbatim on the YC page and inth.com rebrand post as the motivation for the new product), and (2) the May 2024 EU AI Act and ongoing GDPR enforcement raising the bar on auditable evidence (axios.com referenced Transcend's $40M raise on the same thesis).

## Founders & Team

- **Christopher Burns (Founder / sole founder listed on YC page):**
  - Background: Previously co-founder & CTO of Everfund, a UK nonprofit donation platform that "raised $2M, scaled a 7-person team, architected a multi-tenant donation platform processing payments across 33+ countries"; Everfund is now wound down ("Thank You For Being Part of Our Journey," everfund.com); creator of c15t OSS (crunchbase.com; burnedchris.com; heavybit.com Jamstack Radio Ep. 107).
  - Twitter/X: @BurnedChris — ~1,252 followers (x.com/burnedchris via search snippet; count not retrievable via direct fetch).
  - LinkedIn: "Technical Founder & Early Engineering Leader" / "Founder of Consent.io & Author of c15t" (burnedchris.com/about; uk.linkedin.com).
  - GitHub: @burnedchris; top repo via the c15t org is c15t/c15t — 1,691 stars (github.com/burnedchris; github.com/c15t/c15t).
- **Other team (YC lists 1 founder; LinkedIn company page lists 3 employees, 2 named):** Will De Ath — "Head of Growth @ Consent.io" (uk.linkedin.com/in/willdeath); De Ath is also listed as Everfund co-founder per Everfund team page (search snippet, everfund.com). Third employee not publicly named.
- **Co-founder relationship:** Burns and De Ath previously worked together at Everfund (crunchbase.com; everfund.com search snippet).
- **Founder-market fit:** Burns built and operated GDPR-regulated UK donation infrastructure for 7 years at Everfund and then authored the OSS consent SDK now adopted by Vercel/Expo/Zed before launching Inth (burnedchris.com; heavybit.com; inth.com); no advisors, board members or non-YC investors disclosed publicly.

## Key Risks

- **OSS-to-paid conversion unproven:** Inth's wedge is OSS c15t (2.6M npm downloads, Apache 2.0; github.com/c15t/c15t), but no paid Inth product is publicly priced and the Inth DSAR managed platform is still "in development" (linkedin.com/company/consentdotio); revenue conversion from free OSS users to enterprise contracts is not yet demonstrated.
- **Fork/copy risk on the wedge:** A shadcn/c15t fork already exists on GitHub (github.com/shadcn/c15t) and the Apache 2.0 license permits competitors (Ketch, Transcend, Privado) to embed or fork the SDK without payment.
- **Better-capitalized direct competitor on code-level mapping:** Privado ($17.5M, Series A; dealroom.co) ships "dynamic data maps, auto-risk discovery, risk prevention in dev process, auto-populated RoPAs/PIAs/DPIAs" — the same product Inth is moving toward — and Transcend's $40M Series B (axios.com, May 2024) targets engineering-led DSAR automation.
- **Single-founder execution risk:** YC page lists Christopher Burns as the only founder (ycombinator.com/companies/inth); team of 3 includes a Head of Growth (Will De Ath, uk.linkedin.com/in/willdeath) rather than a co-founder CTO, concentrating technical risk on one person while expanding from a consent SDK to a repo-scanning evidence platform.
- **Name ambiguity:** "Inth" is a short, recently-rebranded mark (Consent.io → Inth, Oct 2025 LinkedIn post, id 7449578563323928576); search results frequently confuse with unrelated entities and prior-product Consent.io metrics — care needed not to conflate prior-brand traction with current-brand traction (all c15t metrics above predate and survive the rebrand).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | c15t 2.6M cumulative npm downloads, 6.5K/day (npmjs.com; openalternative.co); 1,691 GitHub stars, 141 forks (github.com/c15t/c15t); adopters Vercel, Expo, Zed, Infisical, Unkey, Chelsea Piers, Mario Testino (inth.com, Apr 2026); LinkedIn 223 followers (linkedin.com/company/consentdotio) |
| Revenue Signal | Pricing page exists at inth.com/pricing but tiers not retrievable; no public ARR or paying-customer count found |
| Founders | Christopher Burns (Founder): ex co-founder/CTO Everfund (raised $2M, 33+ countries; crunchbase.com), creator of c15t OSS; team also includes Will De Ath (Head of Growth, ex-Everfund co-founder; uk.linkedin.com) and one unnamed employee |
| Competitors | OneTrust ($1.144B raised, revenue undisclosed publicly; no-code enterprise CMP/GRC); Transcend ($90M raised, $40M Series B May 2024; engineering-led DSAR); DataGrail ($84.2M raised; automated DSAR/privacy ops); Ketch ($43M raised; no-code orchestration); Privado ($17.5M raised; code-scan data maps — closest direct); Osano ($19.4M raised, $5.9M 2024 revenue; SMB CMP) |
| Moat Signals | OSS install base in named devtool prod apps (Vercel/Expo/Zed/Infisical/Unkey, inth.com); 2.6M npm downloads (openalternative.co); 1,691 GitHub stars (github.com/c15t/c15t) |
| Risk Factors | OSS-to-paid conversion unproven; fork/copy risk (Apache 2.0, shadcn/c15t fork exists); larger-funded direct competitors (Privado, Transcend); single-founder execution risk |
| Founder Reach | Christopher Burns: X @BurnedChris ~1,252 followers (x.com search snippet, count not retrievable via fetch), LinkedIn /in/burnedchris (count not retrievable), GitHub @burnedchris (org repo c15t/c15t 1,691 stars) |
| Distribution Signals | c15t live on Product Hunt page producthunt.com/products/c15t (launch rank not retrievable); founder podcast appearances on Heavybit Scaling DevTools and Open Source Ready Ep. 18 (scalingdevtools.com; heavybit.com); rebrand "Launch Week" on LinkedIn Oct 2025 (post 7449578563323928576) |
| Emails | No public data found (contact via cal.com/team/inth/chat-with-inth; inth.com) |

Sources:
- [Inth website](https://inth.com)
- [Inth YC page](https://www.ycombinator.com/companies/inth)
- [c15t on GitHub](https://github.com/c15t/c15t)
- [c15t on npm](https://www.npmjs.com/package/c15t)
- [c15t on OpenAlternative](https://openalternative.co/c15t)
- [Christopher Burns personal site](https://burnedchris.com/about)
- [Christopher Burns on Crunchbase](https://www.crunchbase.com/person/christopher-burns)
- [Consent / Inth LinkedIn](https://www.linkedin.com/company/consentdotio)
- [Will De Ath LinkedIn](https://uk.linkedin.com/in/willdeath)
- [Inth rebrand LinkedIn post](https://www.linkedin.com/posts/burnedchris_launch-week-day-1-consentio-is-now-inth-activity-7449578563323928576-F0JD)
- [Transcend Series B (Axios)](https://www.axios.com/2024/05/28/transcend-data-privacy-series-b-funding)
- [Transcend Crunchbase](https://www.crunchbase.com/organization/transcend)
- [DataGrail Series C](https://www.datagrail.io/press/datagrail-raises-45-million/)
- [Ketch Crunchbase](https://www.crunchbase.com/organization/ketch)
- [Privado on Dealroom](https://app.dealroom.co/companies/privado_1)
- [OneTrust on CB Insights](https://www.cbinsights.com/company/onetrust)
- [Osano on Latka](https://getlatka.com/companies/osano)
- [Heavybit Open Source Ready Ep. 18](https://www.heavybit.com/library/podcasts/open-source-ready/ep-18-consent-management-with-christopher-burns)
- [Scaling DevTools podcast — Burns/c15t](https://scalingdevtools.com/podcast/episodes/christopher-burns-creator-of-c15t-the-developer-first-cookie-banner)
- [shadcn/c15t fork](https://github.com/shadcn/c15t)
