# Drip

> Infrastructure to replace most monetization tooling

| Field | Value |
|-------|-------|
| Website | https://drippay.dev/ |
| YC Page | https://www.ycombinator.com/companies/drippay |
| Batch | Spring 2026 (YC profile, via WebFetch) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 0 |
| Location | San Francisco, CA, USA |
| Tags | B2B, Sales Enablement, Billing, Infrastructure |
| YC Partner | Harj Taggar (YC profile, via WebFetch) |
| Emails | No public data found |

## The Idea

**Problem:**
- Target customer: API- and AI-product companies billing high volumes of micro-transactions (per token, per request, per GB, per second) (search snippet of drippay.dev, 2026).
- Acute at AI-era volumes: "Stripe Billing maxes out at 1,000 events/sec while modern AI companies need 100,000+" (Lago blog, 2026 via search snippet).
- Customers today stitch together Stripe Billing, Metronome, Orb, or Lago for metering, rating, invoicing, and dunning (Flexprice, 2026 via search snippet; Lago blog, 2026 via search snippet).

**Approach:**
- Single API captures billable events ranging $0.0001–$100 with instant deduction from a prepaid customer balance (drippay.dev via search snippet).
- Supports flat, tiered, volume, package, and per-seat pricing; pre-request quota checks and per-customer spending caps block over-limit calls (drippay.dev via search snippet).
- Handles charge collection, dunning, invoice generation, and accounting export in one product (drippay.dev via search snippet).
- Prepaid-balance model batches thousands of small charges into single settlements for "near-zero" payment fees (drippay.dev via search snippet).

**Differentiation:**
- Metronome/Orb: metering + rating + invoicing, but rely on downstream card processors per charge; do not use a prepaid-balance settlement model (Metronome site, 2026 via search snippet; Orb blog, 2026 via search snippet).
- Stripe Billing: throughput ceiling ~1,000 events/sec cited by a competitor (Lago blog, 2026 via search snippet).
- Lago: open-source, self-hosted metering; does not itself collect funds or run dunning (Lago GitHub, via search snippet).
- [Inferred]: Drip's differentiation is bundling metering + entitlement gating + settlement into one prepaid-balance primitive, removing per-charge processor fees and chargeback risk.

**Business Model:**
- No public pricing page accessible (drippay.dev returned 403 on WebFetch).
- [Inferred]: Most likely monetization is a take-rate on processed volume and/or a platform fee, based on the prepaid-balance settlement model described on drippay.dev.

**TAM/SAM:**
- No public TAM/SAM data found for this specific segment.
- Stripe paid ~$1B for Metronome in January 2026 (Lago blog, 2026 via search snippet) — a datapoint on strategic value in adjacent market, not a TAM figure.

**GTM / Distribution:**
- [Inferred]: Bottom-up developer GTM via docs (docs.drippay.dev) and API-first onboarding, targeting AI/API startups; based on developer-doc surface and YC network access.

## Defensibility

- No defensibility signals found in public sources.
- [Inferred]: Potential moat could develop via (a) prepaid float held on-platform creating switching costs, (b) integration with accounting/tax exports, and (c) high-throughput metering engine performance — but all are unproven at this stage.

**Market structure:**
- [Inferred]: Stripe Billing faces business-model cannibalization when moving customers off per-transaction card fees to a batched prepaid-settlement model; Stripe's $1B Metronome acquisition (Lago blog, 2026 via search snippet) suggests the incumbent prefers acquiring rather than building, but does not structurally prevent them from launching a competitor.
- Otherwise no structural barrier identified at this stage.

**Commoditization risk:**
- Open-source alternative Lago offers the core metering/rating primitive (Lago GitHub, via search snippet).
- [Inferred]: The metering-engine layer is commoditizing; differentiation rests on the settlement/prepaid-balance layer, which any well-funded billing vendor could replicate.

## Market & Traction

**Traction signals:**
- Team Size listed as 0 on YC profile; 0 open job postings (YC profile, via WebFetch).
- No funding announcement, press coverage, or Product Hunt launch found (WebSearch, Apr 2026).
- Company Twitter/X: @Drippaygmi (YC profile, via WebFetch); follower count not retrievable.
- Company LinkedIn: "joindrip" (YC profile, via WebFetch); follower count not retrievable.
- Company GitHub: DripYCx26 (YC profile, via WebFetch); public repos/stars not retrievable from search.
- Docs site live at docs.drippay.dev (WebSearch, 2026).
- Launch date listed as 2026 on YC (YC profile, via WebFetch).
- No revenue, customer count, or paying user data found (WebSearch, Apr 2026).

**Competitive landscape:**
- **Metronome** — usage-based billing and rating engine for product-led/sales-led companies; acquired by Stripe for ~$1B in January 2026 (Lago blog, 2026 via search snippet). Differentiator vs. Drip: enterprise distribution via Stripe, no prepaid-balance settlement model. Revenue/ARR: not publicly disclosed.
- **Orb (withorb.com)** — usage-focused metered billing for complex pricing and high event volume (Orb blog, 2026 via search snippet). Funding/ARR: not found in this research pass. Differentiator vs. Drip: rating/invoicing depth; does not run the payment settlement layer.
- **Lago (getlago, YC)** — open-source self-hosted metering and usage-based billing; YC-backed (Lago GitHub, via search snippet). Funding/ARR: not found in this research pass. Differentiator vs. Drip: open-source self-hosted control; no payment collection or prepaid settlement.
- **Stripe Billing** — subscription + metered billing inside Stripe; event throughput limitation cited (~1,000 events/sec) (Lago blog, 2026 via search snippet). Revenue: public Stripe financials not broken out for Billing. Differentiator vs. Drip: bundled with Stripe payments and ubiquitous distribution.
- **Flexprice, Zenskar, Schematic** — newer usage-based billing entrants (Flexprice, 2026 via search snippet; Zenskar, 2026 via search snippet; Schematic, 2026 via search snippet). Funding/ARR: not found.

**Why now:**
- Stripe's acquisition of Metronome for ~$1B in January 2026 validates standalone usage-based billing as a venture outcome (Lago blog, 2026 via search snippet).
- [Inferred]: AI-agent and per-token pricing drove event volumes past the Stripe Billing ~1,000 events/sec ceiling cited by competitors (Lago blog, 2026 via search snippet), creating demand for purpose-built high-throughput metering + settlement.

## Founders & Team

**Mike Levin** — Founder
- Computer Science, UCLA, Class of 2026 (search snippet, 2026).
- Previously: metered billing platform team at GitHub, building backend systems tracking usage at scale (search snippet, 2026).
- Domain expertise: distributed systems, backend platforms, reliability, developer infrastructure (search snippet, 2026).
- Twitter/X: @mike_drip (search snippet, 2026); follower count not retrievable.
- LinkedIn: linkedin.com/in/mikelevin- (search snippet, 2026); connection count not retrievable.
- GitHub: No public data found.

**Lucas He** — Co-Founder & CTO
- Listed as Co-Founder & CTO on YC profile (YC profile, via WebFetch).
- A "Lucas He – Senior Machine Learning Engineer at TikTok, UC Berkeley" LinkedIn profile (linkedin.com/in/lucas-he-686276342) surfaced in search (WebSearch, 2026), but name disambiguation could not confirm this is the Drip co-founder.
- Twitter/X: No public data found.
- GitHub: No public data found (company-level GitHub is DripYCx26).

**Co-founder relationship:**
- No public data on co-founder history. No overlapping employer or university is visible from Phase 3 findings (Mike: UCLA + GitHub; Lucas: unverified).

**Founder-market fit:**
- [Inferred]: Mike Levin's work on GitHub's metered billing platform (search snippet, 2026) is direct domain experience in the exact product Drip is building. Founder-market fit for Lucas He cannot be assessed without verified background data.
- Advisors/investors: No public data found beyond standard YC Spring 2026 participation and YC Group Partner Harj Taggar (YC profile, via WebFetch).

## Key Risks

**Stripe/Metronome direct substitution:** Stripe acquired Metronome for ~$1B in January 2026 (Lago blog, 2026 via search snippet), pairing high-throughput metering with Stripe's payment rails. Drip's prepaid-balance settlement pitch is directly in the path of a combined Stripe + Metronome offering.

**Open-source commoditization of the metering layer:** Lago (YC, open source) offers the metering/rating engine self-hostable (Lago GitHub, via search snippet). [Inferred]: If the metering primitive becomes free, Drip must defend on the settlement/prepaid-balance layer, which is the newer and less-proven part of the stack.

**Prepaid-balance float and regulatory exposure:** [Inferred]: Holding prepaid customer balances and batching settlements may trigger money-transmitter or stored-value regulatory obligations state-by-state in the U.S., raising legal and licensing overhead. Not confirmed in public sources.

**Founder concentration / unverified CTO profile:** YC profile lists two founders (YC profile, via WebFetch) but the CTO Lucas He's background could not be verified via public search; if he is early-career, technical execution risk on a high-throughput billing engine is elevated. [Inferred].

**Name collision:** At least four companies named "Drip" or "Drippay" exist — Drip (installments, Brazil, YC), Drip Capital (trade finance, YC 2016), Drippay (Rocket League esports player), and Drip (marketing automation, Rob Walling) (multiple WebSearch, 2026). Creates brand/SEO headwind at launch.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Team size 0, 0 job postings (YC profile, via WebFetch, Apr 2026); launch year 2026 (YC profile, via WebFetch); docs live at docs.drippay.dev (WebSearch, 2026); no funding/press/PH found |
| Revenue Signal | No public data found (drippay.dev returned 403 on WebFetch; no pricing page accessible) |
| Founders | Mike Levin (Founder): CS UCLA '26, ex-GitHub metered billing (search snippet, 2026). Lucas He (Co-Founder & CTO): background not verified in public sources (YC profile, via WebFetch) |
| Competitors | Metronome (acquired by Stripe ~$1B Jan 2026 per Lago blog via search snippet; ARR undisclosed; lacks prepaid settlement); Orb (funding/ARR not found; rating/invoicing depth, no settlement layer); Lago (YC, funding/ARR not found; open-source self-hosted, no settlement); Stripe Billing (bundled with Stripe payments; ~1k events/sec ceiling per Lago blog via search snippet) |
| Moat Signals | No public data found |
| Risk Factors | Stripe+Metronome substitution, metering-layer commoditization via Lago, prepaid-balance regulatory exposure [Inferred] |
| Founder Reach | Mike Levin: Twitter @mike_drip count not retrievable, LinkedIn /in/mikelevin- count not retrievable, GitHub not found (search snippets, 2026). Lucas He: No public data found |
| Distribution Signals | Company Twitter @Drippaygmi (count not retrievable), LinkedIn "joindrip" (count not retrievable), GitHub DripYCx26 (stars not retrievable) (YC profile, via WebFetch) |
| Emails | No public data found |

Sources:
- [Drip — Y Combinator profile](https://www.ycombinator.com/companies/drippay)
- [Drippay docs](https://docs.drippay.dev/introduction)
- [Lago blog — Why Stripe paid $1B for Metronome](https://getlago.com/blog/why-stripe-paid-1b-for-metronome-instead-of-fixing-billing)
- [Metronome](https://metronome.com)
- [Orb — Metronome alternatives](https://www.withorb.com/blog/metronome-alternatives)
- [Lago GitHub](https://github.com/getlago/lago)
- [Flexprice — best platforms for usage-based API pricing](https://flexprice.io/blog/best-platform-for-usage-based-pricing-for-api-products)
- [Schematic — best metered billing software 2026](https://schematichq.com/blog/metered-billing-software)
