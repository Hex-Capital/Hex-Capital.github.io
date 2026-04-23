# Amboras

> Let AI sell your stuff on autopilot

| Field | Value |
|-------|-------|
| Website | https://amboras.com |
| YC Page | https://www.ycombinator.com/companies/amboras |
| Batch | Spring 2026 |
| Industry | B2B / B2B |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Generative AI, B2B, E-commerce |
| YC Partner | Aaron Epstein |
| Emails | No public data found |

## The Idea

**Problem:** E-commerce merchants must stitch together multiple tools — store builders, A/B testing platforms, SEO plugins, upsell apps, analytics dashboards, email marketing — and either hire developers/agencies or learn to operate each tool themselves. The about page states the founders "spent considerable time and money working with developers" to manage their own Shopify store (amboras.com/about). The target customer is a merchant who wants a fully managed storefront without technical overhead.

**Approach:** Amboras is an AI-native e-commerce platform that autonomously builds storefronts, creates product pages, manages checkout, runs A/B tests on offers/bundles/pricing, handles SEO, email flows, reviews, upsells, loyalty programs, and reads analytics to learn what converts (amboras.com). The company claims stores can go live in under 10 minutes (amboras.com). The platform is positioned as an all-in-one replacement rather than a plugin layer — "no developers, no agencies, no guessing" (amboras.com).

**Differentiation:** Unlike Shopify, which provides a platform and ecosystem of third-party apps requiring manual configuration, Amboras bundles all optimization tools natively and automates their operation via AI. Unlike Durable (AI website builder, $26.5M raised; TechCrunch, Dec 2023), which focuses on service-business websites, Amboras targets e-commerce with built-in checkout, inventory, and conversion optimization. Unlike Wix and Hostinger, which use AI for initial site generation but leave ongoing optimization to the merchant, Amboras claims continuous autonomous optimization. The company's about page positions itself as "the Shopify of the AI era" (amboras.com/about).

**Business Model:** No pricing tiers are publicly listed. The website offers "Try for free" (amboras.com). [Inferred]: Most likely monetization is a SaaS subscription model with tiered pricing based on store GMV or feature access, consistent with e-commerce platform norms.

**TAM/SAM:** The AI-enabled e-commerce solutions market was valued at $6.67B in 2025, projected to reach $7.69B in 2026 at 15.2% CAGR (Research and Markets, 2026 via search snippet). An alternative estimate sizes the AI in e-commerce market at $9.01B in 2025, growing to $74.93B by 2035 at 23.59% CAGR (Precedence Research, 2025 via search snippet). [Inferred]: The serviceable market is the subset of SMB merchants who would adopt an AI-native platform over incumbent builders — no public SAM estimate found for this specific segment.

**GTM / Distribution:** [Inferred]: Most likely distribution path is product-led growth via the free trial, targeting individual merchants and small e-commerce operators. The founders' prior e-commerce network and YC brand provide initial distribution leverage. The "sells to AI agents" framing on the YC page suggests a future B2B2B channel where Amboras stores become endpoints for agentic commerce.

## Defensibility

- **Data flywheel:** Each store on the platform generates conversion, pricing, and behavioral data that feeds the AI optimization engine. More stores improve model accuracy for all merchants. This is a potential network effect but requires significant scale to become a meaningful barrier.
- **Switching costs:** Merchants who build their store on Amboras and accumulate optimization history face migration friction — store configuration, SEO equity, and learned conversion patterns are platform-specific. [Inferred]: These switching costs strengthen over time as the AI accumulates more merchant-specific data.
- **Bundling advantage:** By integrating all e-commerce tools natively rather than via plugins, Amboras eliminates the integration tax that plagues Shopify merchants. This bundling creates convenience-based retention.

No patents, regulatory barriers, or proprietary datasets were found in public sources.

**Market structure:** Shopify's ecosystem model generates significant revenue from its app marketplace and partner network. [Inferred]: Adopting an all-in-one AI approach that eliminates third-party apps would cannibalize Shopify's app store revenue and alienate its developer ecosystem, creating a structural conflict for the incumbent. No structural barrier identified beyond this channel conflict at this stage.

**Commoditization risk:** The core technology (LLM-powered store generation and A/B testing) uses generally available AI models. The Extruct profile notes the platform is "powered by Anthropic's Claude AI" (extruct.ai via search snippet). Any well-funded e-commerce platform or AI builder could replicate individual features. [Inferred]: The defensibility depends on execution speed and the compounding data advantage from early merchant adoption rather than proprietary technology.

## Market & Traction

**Traction signals:**
- 1,000+ stores on the platform (amboras.com, accessed Apr 2026)
- 3.9% average storefront conversion rate claimed (amboras.com)
- 2 days average time from signup to first sale claimed (amboras.com)
- Prior product EcomCoder launched on Product Hunt: #14 day rank, 97 upvotes, 118 followers (Product Hunt, ~late 2025)
- Twitter/X: @Amboras_inc — account exists; minimal posting activity as of Mar 2026 (x.com)
- LinkedIn: company page at linkedin.com/company/ecomcoder (LinkedIn)
- Imad Mokadem: 2,483 LinkedIn followers (LinkedIn, Apr 2026)
- No Amboras-specific Product Hunt launch found
- No press coverage in named publications found
- No app store listings or Chrome extension found
- No Discord/Slack community found

**Product pivot note:** The company previously operated as EcomCoder, a Shopify plugin that let store owners edit designs via AI prompts (Product Hunt, ~late 2025). Amboras represents a pivot from a Shopify plugin to a standalone AI-native e-commerce platform. The 1,000+ stores figure on amboras.com refers to the current Amboras product; the EcomCoder Product Hunt metrics (97 upvotes, #14 day rank) are from the prior product.

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Amboras |
|---|---|---|
| **Shopify** | Public (NYSE: SHOP) | Massive app ecosystem and developer network; AI features (Shopify Magic) augment rather than replace merchant effort; $39–$2,300/mo pricing (emergent.sh, 2026) |
| **Durable** | $26.5M total, Series A Dec 2023 (TechCrunch); $990K revenue (Latka, 2025 via search snippet); 6M+ websites built (BusinessWire, Dec 2023) | AI website builder focused on service businesses, not e-commerce optimization; lighter commerce features |
| **Dukaan** | $23.9M total, latest round Aug 2022 (Tracxn via search snippet) | No-code e-commerce store builder targeting Indian SMBs; mobile-first; less AI-driven optimization |
| **Swap** | $149M total, $100M Series C Jan 2026 (TechCrunch, Jan 2026); 600+ businesses | E-commerce operations OS for cross-border logistics, returns, compliance; not a storefront builder but building AI commerce infrastructure |
| **Wix** | Public (NASDAQ: WIX) | Broad website builder with e-commerce add-on; AI used for initial generation, not continuous autonomous optimization; $17–$159/mo (emergent.sh, 2026) |

**Why now:**
- [Inferred]: LLM capability thresholds crossed in 2024–2025 (GPT-4, Claude 3/3.5) made it feasible to generate, optimize, and autonomously manage full storefronts rather than just assist with individual tasks.
- Shopify's "Renaissance" update in 2025 added AI features, signaling market validation for AI-driven e-commerce but within Shopify's existing plugin-dependent architecture (Shopify blog via search snippet).
- The agentic AI in retail and e-commerce market grew from $46.74B in 2025 to an estimated $60.43B in 2026, at 29.29% CAGR (Mordor Intelligence, 2026 via search snippet), reflecting rapid enterprise adoption of autonomous AI in commerce.

## Founders & Team

**Amin Mokadem** — Co-founder
- BS Computer Science, ETH Zurich (YC page)
- Former 6-figure MRR e-commerce founder (YC page)
- Co-built e-commerce brand to $400K+/month revenue with brother Imad (amboras.com/about)
- Twitter/X: @AminMokadem — personal account, appears inactive (x.com via search snippet)
- LinkedIn: linkedin.com/in/amin-mokadem-003bb3393 (YC page)
- GitHub: No public repos found

**Imad Eddine Mokadem** — Co-founder
- Mechanical Engineering, ETH Zurich (YC page)
- Former 6-figure MRR e-commerce founder (YC page)
- Ex-professional athlete (LinkedIn post, Apr 2026)
- Built first Shopify store to sell board games he designed while at ETH (Product Hunt EcomCoder page, 2025)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/imad-eddine-mokadem-36aa64224 — 2,483 followers (LinkedIn, Apr 2026)
- GitHub: No public repos found

**Abde Aboulas** — CRO (first hire)
- Ex-professional cyclist, 4 years at UCI level (LinkedIn post by Imad Mokadem, Apr 2026)
- Previously scaled growth at Rapha and Carhartt (LinkedIn post by Imad Mokadem, Apr 2026)
- LinkedIn: linkedin.com/in/abde-aboulas (LinkedIn)
- Active in Zurich startup community (LinkedIn post, #jfloor #founders #startupcommunity #zurich)

**Co-founder relationship:** Amin and Imad Mokadem are brothers (amboras.com/about). Both attended ETH Zurich and co-built their prior e-commerce brand together before founding Amboras.

**Founder-market fit:** Both founders operated their own e-commerce brand to $400K+/month revenue (amboras.com/about), giving them direct experience with the pain points Amboras addresses — hiring developers, managing plugins, and manually optimizing conversion. Imad's frustration managing his Shopify store for board game sales was the direct catalyst for building EcomCoder, then Amboras (Product Hunt EcomCoder page). Amin's CS background at ETH Zurich provides technical capability. Abde Aboulas brings commercial experience from scaling D2C brands (Rapha, Carhartt).

## Key Risks

**Platform dependency on third-party AI models:** The platform reportedly uses Anthropic's Claude AI (extruct.ai via search snippet). API pricing changes, rate limits, or model deprecation from Anthropic could directly impact unit economics and product reliability. Mitigation: multi-model architectures are feasible but add complexity.

**Unverified traction claims:** The "1,000+ stores" figure appears on the company's own website with no third-party verification. The testimonials on the homepage feature international merchants (Milan, London, Amsterdam, Mumbai, Barcelona, Rome) — an unusual geographic spread for a San Francisco pre-seed startup. No independent source confirms these metrics.

**Incumbent response from Shopify:** Shopify's 2025 "Renaissance" update added AI-native features including Shopify Magic and agent-led commerce (Shopify blog via search snippet). Shopify has 4.8M+ merchants and deep resources to iterate AI features. A dedicated "Shopify Autopilot" product could replicate Amboras's value proposition within the existing ecosystem.

**Pivot recency:** The company pivoted from EcomCoder (a Shopify plugin) to Amboras (a standalone platform). The EcomCoder Product Hunt launch (~late 2025) and the Amboras YC batch (Spring 2026) suggest a recent pivot. The current product's maturity and market fit remain to be validated independently.

**Name ambiguity:** "Amboras" returns limited unique results in web searches. The LinkedIn company page still uses the handle "ecomcoder" (linkedin.com/company/ecomcoder), suggesting incomplete brand migration.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $6.67B in 2025, 15.2% CAGR (Research and Markets, 2026 via search snippet); alternate estimate $9.01B in 2025, 23.59% CAGR to $74.93B by 2035 (Precedence Research, 2025 via search snippet) |
| SAM | No public data found |
| Traction | 1,000+ stores (amboras.com, Apr 2026); 3.9% avg CVR claimed (amboras.com); prior product EcomCoder: 97 upvotes, #14 day rank (Product Hunt, ~late 2025) |
| Revenue Signal | No public data found |
| Founders | Amin Mokadem (Co-founder): CS at ETH Zurich, former 6-figure MRR e-commerce founder. Imad Eddine Mokadem (Co-founder): Mech. Eng. at ETH Zurich, former 6-figure MRR e-commerce founder, ex-pro athlete. Abde Aboulas (CRO): ex-pro cyclist (UCI), previously at Rapha and Carhartt. |
| Competitors | Shopify (public, NYSE: SHOP; dominant ecosystem incumbent); Durable ($26.5M raised, $990K revenue per Latka 2025 via search snippet; AI website builder, less e-commerce depth); Dukaan ($23.9M raised, revenue unknown per Tracxn via search snippet; no-code e-commerce, India-focused); Swap ($149M raised, revenue unknown per TechCrunch Jan 2026; e-commerce ops OS, not storefront builder); Wix (public, NASDAQ: WIX; broad website builder with lighter AI) |
| Moat Signals | No public data found |
| Risk Factors | Unverified traction claims, incumbent Shopify AI response, third-party AI model dependency |
| Founder Reach | Amin Mokadem: Twitter @AminMokadem (count not retrievable), LinkedIn (profile found). Imad Mokadem: LinkedIn 2,483 followers (LinkedIn, Apr 2026). Abde Aboulas: LinkedIn (profile found). |
| Distribution Signals | EcomCoder #14 day rank on Product Hunt (~late 2025, Product Hunt); no Amboras-specific Product Hunt launch found; Twitter @Amboras_inc exists with minimal activity (x.com, Mar 2026) |
| Emails | No public data found |
