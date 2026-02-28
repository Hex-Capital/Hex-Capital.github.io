# Booko

> Dynamic pricing for businesses that sell time slots

| Field | Value |
|-------|-------|
| Website | https://bookoapp.com |
| YC Page | https://www.ycombinator.com/companies/booko |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Machine Learning, SaaS, B2B, Analytics |
| YC Partner | Harshita Arora |
| Emails | arjun@bookoapp.com, will@bookoapp.com, founders@bookoapp.com (YC page and company DPA) |

## The Idea

**Problem:** Businesses that sell bookable time slots — fitness studios, medspas, hair salons, tutoring centers, consultants, tax accountants, event venues — lose revenue permanently when a slot goes unsold. Unlike physical inventory that can be stored and sold later, an empty 5pm yoga class on Tuesday is gone forever. Most of these businesses rely on static pricing and have no systematic way to fill low-demand slots. The existing booking platforms (Mindbody, Zenoti, WellnessLiving) offer scheduling but limited or no automated dynamic pricing tailored to slot-level utilization. Mindbody does offer a dynamic pricing feature, but it charges a 20% marketplace fee plus 3.5% payment processing on dynamically priced bookings (Mindbody support documentation), creating a substantial take-rate that may limit merchant adoption.

**Approach:** Booko integrates via API with existing booking systems (Mindbody, Mariana Tek, or custom platforms) and uses ML models trained on per-organization historical booking data to predict which time slots are at risk of going unfilled, claiming 94.2% prediction accuracy (bookoapp.com). When an at-risk slot is detected, the system automatically generates and surfaces targeted pricing incentives (discounts ranging from ~4–9% in displayed examples) through the business's existing booking flows — no new consumer-facing app required. Models are trained per-organization with no cross-client data sharing (bookoapp.com DPA). The platform supports appointments, class packs, and memberships. It is SOC 2 compliant, HIPAA compliant, and claims 99.9% uptime (bookoapp.com).

**Differentiation:** Booko's core differentiator versus booking platforms like Mindbody, Zenoti, and WellnessLiving is that it is a pricing-layer overlay that plugs into existing systems rather than requiring a full platform migration. Mindbody's built-in dynamic pricing takes a 20% marketplace fee on dynamically priced transactions (Mindbody support documentation), whereas Booko's fee structure is not publicly disclosed but operates as a standalone pricing optimization layer. Versus Promi (YC S24), which focuses on personalized e-commerce discounts for Shopify merchants, Booko targets service businesses with perishable time-slot inventory — a fundamentally different demand curve. Versus hotel/vacation-rental revenue management tools (Beyond Pricing, PriceLabs, Wheelhouse), Booko is purpose-built for the appointment/class-booking vertical rather than accommodation.

**Business Model:** No public pricing page or tier details were found on bookoapp.com. [Inferred]: The most likely monetization path is a percentage-of-recovered-revenue model (performance-based) or a SaaS subscription fee tiered by location count, given that the company emphasizes revenue uplift metrics and serves multi-location businesses. The contact email for demos is routed through Calendly (will-bookoapp/15min), suggesting a sales-led motion.

**TAM/SAM:** The global dynamic pricing software market was valued at approximately $1.68B in 2025 and is projected to reach $6.02B by 2029 at 14.6% CAGR (The Business Research Company, 2025 via search snippet). The appointment scheduling software market was estimated at $470.7M in 2024 growing to $1,518.4M by 2032 at 15.7% CAGR (Fortune Business Insights, 2024 via search snippet). No public TAM/SAM data found for the specific intersection of dynamic pricing applied to service-business time slots.

**GTM / Distribution:** [Inferred]: The most likely distribution path is direct outbound sales to fitness studios and medspas, given the Calendly-based demo booking flow and the emphasis on integration with Mindbody and Mariana Tek (dominant booking platforms in wellness/fitness). Multi-location businesses are highlighted on the website ("for multi-location businesses, that translates to millions annually" — bookoapp.com), suggesting a land-and-expand motion starting with single-location operators and scaling to chains.

## Defensibility

**Data moat (developing):** Each client's ML model is trained on that organization's historical booking data, creating increasingly accurate predictions over time. This per-client data flywheel improves pricing accuracy as more booking cycles are observed, but the moat is client-specific rather than network-wide — a competitor integrating with the same booking platform could build a similar model for the same client. No cross-client training occurs (bookoapp.com DPA), which limits a broader data network effect.

**Integration switching costs:** Once embedded in a business's booking flow with calibrated ML models, displacing Booko requires re-integration and re-training a new model, creating moderate switching costs. However, since Booko sits as an overlay rather than the core booking system, the switching cost is lower than for a full platform replacement.

**Market structure:** Mindbody, the dominant booking platform in fitness/wellness, already offers a dynamic pricing feature but charges a 20% + 3.5% fee on dynamically priced transactions (Mindbody support documentation). This high take rate creates a business model conflict: Mindbody profits from the fee on every dynamically priced booking, disincentivizing it from reducing that fee to match a standalone optimizer. A third-party like Booko can offer a lower effective cost to the merchant, exploiting the incumbent's revenue model dependency. Zenoti has dynamic pricing capabilities built into its enterprise platform ($174.3M revenue in 2024, per GetLatka via search snippet), but its focus spans the full salon/spa management suite rather than pricing optimization specifically, creating a feature-depth vs. platform-breadth trade-off.

**Commoditization risk:** The core technology — demand prediction for time slots using historical booking data — is not novel at an algorithmic level. Any ML team with access to booking data could build a similar model. The barrier is more operational than technical: building and maintaining integrations with multiple booking platforms, handling edge cases across different business models (appointments vs. classes vs. memberships), and accumulating per-client training data. This is defensible through execution speed but not through fundamental technical moats.

## Market & Traction

**Traction signals:**
- Early customers report ~20% revenue uplift (bookoapp.com, YC page)
- Website example: one business recovered $4,280 weekly with 23% impact; fill rates improved from 67% to 89% (bookoapp.com)
- Results visible within 2 weeks of implementation (bookoapp.com)
- 94.2% prediction accuracy claimed (bookoapp.com)
- SOC 2 and HIPAA compliance achieved (bookoapp.com)
- Twitter/X: @bookoapp account exists; follower count not retrievable due to JavaScript rendering
- LinkedIn: Company page exists (referenced on YC page); follower count not retrievable
- Product Hunt: No launch found
- No press coverage found in named publications
- 0 job postings listed on YC page
- No app store listings, Chrome extension, or Discord/Slack community found
- No specific customer count, user count, or revenue figures publicly disclosed

**Competitive landscape:**

1. **Mindbody** (~$500M revenue expected 2024 per CEO statement via search snippet; acquired by Vista Equity Partners for $1.9B in 2019): Full booking/scheduling platform for fitness and wellness with a built-in dynamic pricing feature. Key difference vs. Booko: Mindbody requires businesses to use its entire platform and charges 20% + 3.5% on dynamically priced bookings. Booko integrates as a pricing layer atop existing systems with potentially lower cost.

2. **Zenoti** ($331M total funding, $174.3M revenue in 2024 per GetLatka via search snippet; valued at $1B+): Enterprise salon/spa/fitness management platform with built-in dynamic pricing. Key difference vs. Booko: Zenoti serves larger enterprises with a full-stack management suite; Booko targets the pricing optimization layer specifically and can integrate with Zenoti or other platforms.

3. **GlossGenius** ($72.2M–$116M total funding per Crunchbase/PitchBook via search snippet; ~$100M revenue in 2024 per CEO statement via search snippet; $510M valuation): All-in-one booking and payments for salons and beauty businesses. Key difference vs. Booko: GlossGenius does not offer dynamic pricing; focuses on payments, scheduling, and business management for beauty professionals.

4. **WellnessLiving** ($68.4M total funding per Crunchbase via search snippet; $21.1M revenue in 2024 per GetLatka via search snippet): Business management software for fitness and wellness. Key difference vs. Booko: general-purpose scheduling and management platform without dedicated ML-driven dynamic pricing capabilities.

5. **Promi** (YC S24; funding amount not disclosed beyond YC): AI-powered personalized discounts for e-commerce merchants via Shopify. Key difference vs. Booko: Promi targets online retail/e-commerce with product-level discounting; Booko targets service businesses with perishable time-slot inventory.

**Why now:**
- [Inferred]: Mindbody's 2024 launch of its own dynamic pricing feature (Mindbody support documentation) has educated the market about the concept of algorithmic pricing for fitness classes, creating awareness without fully capturing the opportunity due to its high fee structure (20% + 3.5%).
- [Inferred]: The maturation of cloud ML infrastructure (reducing the cost and complexity of deploying per-client prediction models) and widespread API adoption by booking platforms like Mindbody and Mariana Tek now make it feasible for a two-person startup to build a pricing overlay without needing to rebuild scheduling infrastructure.
- [Inferred]: Post-COVID, fitness studios and wellness businesses face higher operating costs and more variable demand patterns, increasing urgency to optimize utilization of fixed-capacity assets.

## Founders & Team

**Will Hall** — Co-founder
- No detailed background information found in public sources
- Twitter/X: No confirmed public account found (multiple unrelated "Will Hall" accounts exist; none verified as the Booko co-founder)
- LinkedIn: No confirmed public profile found matching this individual and Booko
- GitHub: No confirmed public repos found
- Contact: will@bookoapp.com (YC page)

**Arjun Saluja** — Co-founder
- A LinkedIn profile for "Arjun Saluja — Student at Dartmouth College" (linkedin.com/in/arjun-saluja-a073b927a/) lists attendance at Dartmouth College (Aug 2020 – Jun 2024) with activities including Dartmouth Humanitarian Engineering, Dartmouth Investment & Philanthropy Program (DIPP, managing $900K+ AUM portfolio), Men's Club Baseball, and Men's Club Golf, and notes a transfer to Columbia University for Mechanical Engineering (LinkedIn via search snippet). It is not confirmed whether this is the same Arjun Saluja co-founding Booko.
- Twitter/X: No public account found
- LinkedIn: Possible profile at linkedin.com/in/arjun-saluja-a073b927a/ (not confirmed as Booko co-founder)
- GitHub: No public repos found
- Contact: arjun@bookoapp.com (YC page)

**Co-founder relationship:** No public data on co-founder history. No shared employer or university overlap identifiable from available data.

**Founder-market fit:** Insufficient public data exists to assess founder-market fit. Neither founder's prior experience in dynamic pricing, ML, booking platforms, or the fitness/wellness industry could be confirmed through public sources. The product itself demonstrates technical capability (per-client ML models, SOC 2/HIPAA compliance, API integrations with major booking platforms), but specific founder credentials underpinning this capability are not publicly documented.

## Key Risks

**Mindbody platform dependency:** Booko's website highlights integration with Mindbody as a primary channel. Mindbody already offers its own dynamic pricing feature and could restrict third-party API access or improve its native offering. As the dominant booking platform in fitness/wellness (acquired for $1.9B), Mindbody has the resources and incentive to capture this value internally. Mitigation: Booko also integrates with Mariana Tek and claims to work with "any booking system" via API.

**Brand disambiguation:** "Booko" is also the name of an established Australian book/DVD price comparison service (booko.com.au), with its own Twitter presence (@booko) and LinkedIn page. This creates SEO competition and potential customer confusion, particularly as Booko scales beyond direct sales.

**High-fee incumbent validation risk:** Mindbody's dynamic pricing feature charges 20% + 3.5% per transaction, which may train merchants to expect dynamic pricing as a costly add-on rather than a core utility. If merchants view the category as prohibitively expensive, Booko must overcome both the pricing expectation and the inertia of non-adoption. Conversely, if Mindbody reduces its fees, Booko's cost advantage narrows.

**Founder opacity:** Neither founder's professional background, domain expertise, or technical credentials are publicly documented, making it difficult to assess execution risk based on available information.

**Single-vertical concentration:** The product is purpose-built for time-slot-based service businesses. If the fitness/wellness vertical proves slower to adopt than expected, the company has limited adjacent markets without significant product adaptation (though the website lists tax accountants, consultants, and event venues as target segments).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.68B dynamic pricing software market in 2025, growing at 14.6% CAGR to $6.02B by 2029 (The Business Research Company, 2025 via search snippet); $470.7M appointment scheduling software market in 2024 (Fortune Business Insights, 2024 via search snippet) |
| SAM | No public data found for the specific intersection of dynamic pricing for service-business time slots |
| Traction | ~20% revenue uplift for early customers (bookoapp.com, YC page); example: $4,280/week recovered, 67%→89% fill rate (bookoapp.com); SOC 2 + HIPAA compliant (bookoapp.com). No customer count, user count, or revenue figures disclosed. |
| Revenue Signal | No public data found |
| Founders | Will Hall (Co-founder): no public background found. Arjun Saluja (Co-founder): possible Dartmouth/Columbia background (unconfirmed). |
| Competitors | Mindbody ($1.9B acquisition; ~$500M revenue; built-in dynamic pricing at 20%+3.5% fee), Zenoti ($331M raised, $174.3M revenue, full-stack spa/salon management with dynamic pricing), GlossGenius ($72–116M raised, ~$100M revenue, no dynamic pricing), WellnessLiving ($68.4M raised, $21.1M revenue, no dynamic pricing), Promi (YC S24, funding undisclosed, e-commerce discounts not time-slot focused) |
| Moat Signals | Per-client ML models create moderate switching costs; integration layer with booking platforms; no network effects or IP/patents identified |
| Risk Factors | Mindbody platform dependency with native competing feature, brand disambiguation with Australian Booko, founder background opacity |
| Founder Reach | Will Hall: Twitter not found, LinkedIn not found, GitHub not found. Arjun Saluja: Twitter not found, LinkedIn unconfirmed, GitHub not found. |
| Distribution Signals | No public data found (no Product Hunt launch, no app store listings, no community channels identified) |
| Emails | arjun@bookoapp.com, will@bookoapp.com, founders@bookoapp.com (YC page and company DPA) |
