# Return Signals

> AI luxury concierge for E-commerce brands

| Field | Value |
|-------|-------|
| Website | https://www.returnsignals.com |
| YC Page | https://www.ycombinator.com/companies/return-signals |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Retail |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Generative AI, E-commerce, SMS |

Note: The legal entity is Material Model, Inc., doing business as Return Signals, registered at 2261 Market Street STE 85311, San Francisco, CA 94114 (returnsignals.com/terms via search snippet). The YC partner listed is Gustaf Alstromer (YC company page).

---

## The Idea

**Problem:** E-commerce brands face significant margin erosion from product returns. US retail returns were forecast at $849.9 billion in 2025, with approximately 15.8% of online sales being returned (National Retail Federation, via search snippet). Today, most returns management is reactive — brands process return requests after the customer has already decided to send the item back. Existing post-purchase tools (Loop, Narvar, AfterShip) focus on streamlining the return logistics workflow rather than intervening at the moment of customer dissatisfaction to redirect intent.

**Approach:** Return Signals deploys an AI-powered SMS concierge that proactively contacts customers after delivery to check in on their purchase. When a customer is unsatisfied, the AI engages in a conversational flow — including photo-based troubleshooting for fit, quality, and styling issues — and steers toward exchanges rather than refunds (company website). The product integrates with Shopify, Gorgias, Linq, and Slack (company website). Most conversations resolve fully via AI, with human escalation available in the same thread (returnsignals.com via search snippet). The company reports converting 70% of return intents into exchanges without increasing the combined exchange and return rate (YC company page).

**Differentiation:** Unlike Loop Returns, Narvar, or AfterShip — which provide self-serve return portals and logistics workflows — Return Signals initiates outbound SMS conversations before the customer starts a return. The mechanism is proactive and conversational rather than reactive and portal-based. The company positions itself as a luxury concierge experience rather than a returns processing tool, reporting over 95% positive sentiment and customers developing personal relationships with the bot (YC company page). The SMS channel avoids requiring app installs and works natively with photos for troubleshooting (company website).

**Business Model:** No public pricing page. The website states the company is "onboarding select apparel and DTC brands for early access" (company website). [Inferred]: Given the claimed 5–10% absolute margin uplift and the B2B SaaS context, the most likely monetization path is a per-interaction or revenue-share model tied to exchanges successfully facilitated, or a SaaS subscription tiered by check-in volume.

**TAM/SAM:** The global returns management software market is estimated at $1.93 billion in 2026, projected to reach $4.25 billion by 2035 at a 9.18% CAGR (360 Research Reports, via search snippet). The broader reverse logistics software market was valued at $9.5 billion in 2024, estimated to reach $18.2 billion by 2033 at 8.0% CAGR (Verified Market Reports, via search snippet). [Inferred]: The SAM for proactive SMS-based return intervention specifically targeting DTC/apparel brands is a subset of the returns management software market, likely in the hundreds of millions, but no public SAM estimate specific to this segment was found.

**GTM / Distribution:** The company is currently onboarding "select apparel and DTC brands" for early access, with a 6-week pilot implementation process (company website). The product integrates with Shopify, suggesting a Shopify App Store distribution channel is possible. [Inferred]: Most likely distribution path is direct sales to mid-market DTC apparel brands via the Shopify ecosystem, with case studies from early pilots driving word-of-mouth and potential Shopify App Store listing.

---

## Defensibility

The company claims high engagement metrics — 70% exchange conversion rate, 80%+ reply rates, 95%+ positive sentiment (YC company page) — which, if sustained at scale, would represent a proprietary dataset of post-purchase conversational patterns, customer sentiment signals, and product-issue taxonomies. Over time, this data could train increasingly effective exchange recommendation models.

SOC 2 certification is already in place (company website), which reduces friction for enterprise adoption.

**Market structure:** Incumbent returns platforms (Loop, Narvar, AfterShip) are built around a reactive return-portal model. Their business model is predicated on processing returns efficiently — an SMS concierge that proactively intercepts returns before they enter the pipeline represents a fundamentally different product category. [Inferred]: Incumbents could add proactive outbound SMS, but it would require rearchitecting their product from a self-serve portal into a conversational AI system, and potentially cannibalize their per-return processing revenue model if exchanges reduce the volume of returns flowing through their platform.

**Commoditization risk:** The core capability — outbound SMS with an LLM-powered conversational agent — is technically reproducible. Any team with access to large language models, SMS APIs (e.g., Twilio), and Shopify integration could build a competing product. The barrier is in tuning the conversational AI for the specific domain of post-purchase troubleshooting (fit, quality, styling) and accumulating the training data to improve exchange conversion rates over time.

---

## Market & Traction

**Traction signals:**

- Website dashboard screenshot shows: 1,284 active check-ins (8.2% growth), 4,932 check-ins sent (+12.4%), 74% overall response rate (+4.1%), 1.8-day average resolution time (company website). Note: These may be demo/illustrative figures rather than live production data; the source does not clarify.
- 30-day outcome distribution shown on website: 41% kept (842), 25% exchanged (511), 16% returned (333), 11% disposed (227), 7% pending (129) (company website).
- Two blog posts published in January 2026, both authored by Ilya Valmianski (company blog).
- LinkedIn company page exists at linkedin.com/company/return-signals (LinkedIn, via search snippet). Follower count not retrievable.
- Twitter/X: No company account found.
- Product Hunt: No launch found.
- Discord/Slack community: No public data found.
- App store / Chrome extension: Not applicable (SMS-based product).
- Job postings: The YC page lists hiring status as false (YC company page).

**Competitive landscape:**

1. **Loop Returns** ($176M total raised, ~$53.3M revenue (Getlatka, via search snippet)): Exchange-first self-serve return portal for Shopify brands. Has served 5,000+ brands and claims to have retained $2.4B+ in sales (Loop Returns website, via search snippet). Differentiator vs. Return Signals: Loop provides a customer-initiated branded portal; Return Signals is proactive outbound SMS. Returnly (a competing platform) was shut down in October 2023 and its merchants directed to Loop (Affirm announcement, via search snippet).

2. **Narvar** ($64M raised, ~$57M revenue in 2022 (Getlatka, via search snippet), $315M valuation in 2022 (Getlatka, via search snippet)): Broad post-purchase platform covering tracking, returns, and delivery estimation, primarily serving enterprise retailers. Its IRIS AI layer processes 74B+ consumer interactions annually for fraud detection (Narvar website, via search snippet). Differentiator vs. Return Signals: Narvar is a full-stack post-purchase enterprise platform; Return Signals is a focused SMS concierge for proactive return intervention.

3. **AfterShip** ($67M raised, $85M revenue in 2024 (Getlatka, via search snippet)): Full-suite post-purchase platform covering shipment tracking, returns, marketing, and reviews. Serves 11,000+ customers (Getlatka, via search snippet). Differentiator vs. Return Signals: AfterShip is a horizontal post-purchase platform; Return Signals is vertically focused on proactive SMS-based return intervention.

4. **Happy Returns** (acquired by PayPal in 2021, then sold to UPS in 2023 (TechCrunch, May 2021; Payments Dive, 2023)): Physical drop-off network ("Return Bars") for box-free returns. Differentiator vs. Return Signals: Happy Returns focuses on physical return logistics infrastructure; Return Signals focuses on pre-return conversational intervention.

**Why now:** [Inferred]: Two catalysts make this opportunity timely: (1) LLM capabilities crossed a quality threshold in 2023–2025 that enables conversational AI agents to handle nuanced, empathetic customer interactions at scale — including photo-based troubleshooting — at a cost and quality level previously requiring human agents; (2) US e-commerce return rates have continued to climb, with NRF reporting $849.9B in 2025 returns, intensifying merchant demand for margin-preservation tools beyond logistics optimization.

---

## Founders & Team

**Ilya Valmianski** — Co-Founder & CEO
- PhD in Physics, UC San Diego (2017) (personal website, Google Scholar)
- Senior ML Engineer at Kaiser Permanente: proposed and led development of SmartTriage, an AI-driven patient intake and clinical decision support tool described as "one of the largest patient-facing ML applications" when deployed across KP Southern California. Trained on 25M+ primary care encounters (PMLR 158:75-96, 2021; personal website)
- ML Scientist at Curai Health: built conversational patient intake systems leveraging LLMs (personal website, OpenReview)
- CEO and Co-Founder of MDandMe (also known as AuxHealth): an AI-powered conversational symptom checker. Raised $2M pre-seed from Steele Foundation for Hope in June 2023 (Crunchbase via search snippet, LinkedIn)
- Published researcher with 836 citations (Google Scholar via search snippet)
- Twitter/X: @valmianski — follower count not retrievable (x.com/valmianski)
- LinkedIn: linkedin.com/in/ilya-x-valmianski — 500+ connections (LinkedIn via search snippet)
- GitHub: github.com/ilya — 149 followers, 11 public repos, most with <5 stars (GitHub)

**Alejandro Zaniolo** — Co-Founder
- Columbia University (LinkedIn via search snippet)
- VP of Business Development at Nestpick (online furnished apartment rental platform) (LinkedIn, Crunchbase via search snippet)
- Head of Business Development, Partner Network at Blueground (corporate housing platform; raised $258M+ per Crunchbase) (LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/alejandrozaniolo (LinkedIn)
- GitHub: No public profile found

**Co-founder relationship:** No shared employer or university overlap identified from available data. Ilya's background is in healthcare ML (Kaiser, Curai, MDandMe) based in San Francisco/San Diego, while Alejandro's is in business development at proptech companies (Nestpick, Blueground) based in New York. No public data on how or when they connected.

**Founder-market fit:** Ilya brings deep experience building patient-facing conversational AI systems at scale (SmartTriage served millions of patients at Kaiser Permanente) and founding an AI health startup (MDandMe). This directly translates to building a conversational AI concierge, though his domain expertise is in healthcare rather than e-commerce. Alejandro brings business development and partnership experience from scaling two marketplace/platform companies (Nestpick, Blueground), relevant to building merchant partnerships and distribution. The combination pairs a technical AI builder with a commercial operator, though neither founder has documented prior e-commerce or retail experience.

---

## Key Risks

**Healthcare-to-e-commerce domain pivot for technical founder:** Ilya Valmianski's prior companies (Kaiser Permanente, Curai, MDandMe/AuxHealth) are all in healthcare AI. Return Signals represents a sector shift to e-commerce. While conversational AI skills transfer, e-commerce-specific knowledge (merchandising, return logistics, brand relationships, Shopify ecosystem dynamics) is a learning curve. MDandMe's trajectory — founded February 2023, raised $2M in June 2023, then Ilya appears at Material Model/Return Signals by 2025 — suggests MDandMe may have been wound down or deprioritized, though no public confirmation was found.

**Well-funded incumbent expansion:** Loop Returns ($176M raised), Narvar ($64M), and AfterShip ($67M, $85M revenue) all have existing merchant relationships and are actively adding AI capabilities to their platforms. Narvar's IRIS AI layer already processes 74B+ interactions (Narvar website). These incumbents could add proactive SMS outreach as a feature without requiring merchants to adopt a new vendor.

**SMS channel regulatory and cost exposure:** Return Signals' core channel is outbound SMS, which is subject to TCPA regulations, carrier filtering, and per-message costs. Changes in carrier policies, 10DLC registration requirements, or opt-in regulations could increase cost or reduce deliverability. The company notes following SMS opt-out best practices (company website), but regulatory tightening could disproportionately affect an SMS-first product.

**Single-channel dependency:** The product is built entirely around SMS. If customer preferences shift (e.g., toward WhatsApp, RCS, or in-app messaging), or if SMS response rates decline due to SMS fatigue from marketing overuse, the core engagement mechanism could weaken. The US SMS marketing industry is projected to grow from $2.9B (2023) to $9.96B (2030) (Omnisend, via search snippet), which could increase noise in the SMS channel.

**Narrow initial market segment:** The company is explicitly targeting "select apparel and DTC brands" for early access (company website). This narrows the initial addressable market and creates concentration risk if early cohort merchants churn or if the exchange-conversion approach proves less effective outside apparel (where sizing/fit drives high return rates).

---

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.93B returns management software market in 2026, growing to $4.25B by 2035 at 9.18% CAGR (360 Research Reports, via search snippet); broader reverse logistics software market $9.5B in 2024 (Verified Market Reports, via search snippet) |
| SAM | No public data found |
| Traction | Website shows 4,932 check-ins sent, 1,284 active check-ins, 74% response rate (company website; may be demo data). Two blog posts (Jan 2026). No Product Hunt launch found. |
| Revenue Signal | No public data found. Currently onboarding "select apparel and DTC brands" for early access with no pricing displayed (company website). |
| Founders | Ilya Valmianski (CEO): PhD Physics UCSD, ex-Kaiser ML Engineer (SmartTriage), ex-Curai ML Scientist, founded MDandMe (raised $2M). Alejandro Zaniolo (Co-Founder): Columbia, ex-VP BD Nestpick, ex-Head BD Blueground. |
| Competitors | Loop Returns ($176M raised, ~$53.3M revenue, self-serve exchange portal vs. proactive SMS); Narvar ($64M raised, ~$57M revenue 2022, enterprise post-purchase platform vs. focused SMS concierge); AfterShip ($67M raised, $85M revenue 2024, horizontal post-purchase suite vs. vertical return intervention); Happy Returns (acquired by PayPal 2021, sold to UPS 2023, physical drop-off network vs. conversational AI) |
| Moat Signals | SOC 2 certified (company website). Potential data moat from proprietary post-purchase conversational data and product-issue taxonomy, but unproven at current scale. |
| Risk Factors | Healthcare-to-e-commerce domain pivot, well-funded incumbents adding AI features, SMS channel regulatory/cost exposure |
| Founder Reach | Ilya Valmianski: Twitter @valmianski (count not retrievable), LinkedIn 500+, GitHub 149 followers. Alejandro Zaniolo: Twitter not found, LinkedIn (count not retrievable), GitHub not found. |
| Distribution Signals | No public data found. No Product Hunt launch, no app store listing, no Chrome extension. Shopify integration exists (company website). |
