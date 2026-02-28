# Luel

> Turning everyday words and actions into usable training data.

| Field | Value |
|-------|-------|
| Website | https://luel.ai |
| YC Page | https://www.ycombinator.com/companies/luel |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Marketplace, B2B, Big Data |

## The Idea

**Problem:** Frontier AI labs require large volumes of high-quality, rights-cleared multimodal training data (video, audio, images) to train and fine-tune models. Sourcing this data is slow, legally fraught, and operationally burdensome. Current approaches rely on web scraping (legally risky), in-house collection (expensive and slow), or legacy annotation vendors (not optimized for multimodal collection with provenance). The customer segment is AI labs and enterprises building foundation models and fine-tuned AI products.

**Approach:** Luel operates a two-sided marketplace connecting a global contributor network (people who upload video, audio, and photo content) with AI enterprises that request datasets to specification. Contributors earn payouts (via Venmo and Stripe, within 2–7 days), while enterprises receive licensed, audit-ready datasets with full rights documentation including consent evidence and chain-of-title (YC company page). The platform handles collection, verification, quality control, and rights clearance. Luel offers both off-the-shelf datasets and custom data collection campaigns built to client specifications.

**Differentiation:** Luel differentiates from Scale AI and Surge AI (which focus primarily on data labeling/annotation and RLHF) by focusing on multimodal data *collection* and *licensing* rather than labeling of pre-existing data. Compared to Protege (which connects organizations holding existing proprietary data with AI developers), Luel mobilizes individual contributors to *create* new data on demand. Compared to Appen and legacy BPO-style annotation firms, Luel positions on speed ("licensed, audit-ready data within days") and rights provenance (YC company page).

**Business Model:** Luel operates as a marketplace, intermediating between data contributors and AI enterprise buyers. The website shows contributor payout examples ($0.80, $4.50, $24.50+) and a contributor balance of $128.40 (luel.ai). No public pricing page for enterprise buyers was found. [Inferred]: Most likely monetization is a take-rate on transactions between contributors and enterprises, plus premium pricing for custom bespoke data collection campaigns.

**TAM/SAM:** The global AI training dataset market was valued at approximately $3.2 billion in 2025 and is projected to reach $16.3 billion by 2033, growing at a 22.6% CAGR (Grand View Research, 2026 via search snippet). Fortune Business Insights estimated $3.59 billion in 2025 with a 22.9% CAGR (Fortune Business Insights via search snippet). No SAM estimate specific to rights-cleared multimodal data collection was found.

**GTM / Distribution:** The luel.ai website claims backing from investors including xAI, Meta, and Mercor (luel.ai). [Inferred]: The GTM likely combines direct enterprise sales to frontier AI labs (leveraging investor relationships with xAI and Meta) with a contributor acquisition strategy to build supply. The contributor side uses a self-serve upload flow with fast payouts as an incentive.

## Defensibility

Luel's primary moat signal at this stage is the potential for a two-sided marketplace network effect: as more contributors join, data collection capacity and diversity increase, attracting more enterprises; enterprise demand in turn attracts more contributors. However, this network effect is unproven at the current stage.

A secondary potential moat is the accumulation of rights-clearance documentation and provenance metadata, which creates an audit trail that is difficult to replicate retroactively.

**Market structure:** The structural barrier against incumbents like Scale AI is that Scale's core business model is now compromised by its 49% ownership by Meta (TechCrunch, June 2025 via search snippet), which caused AI labs including Google and OpenAI to reportedly cut ties over neutrality concerns (TechCrunch, October 2025 via search snippet). Scale's conflict of interest creates an opening for neutral, independent data vendors. Legacy annotation firms (Appen, etc.) are structured around labeling workflows, not contributor-driven multimodal data collection with rights provenance — a different operational model requiring different infrastructure. No structural barrier identified against new entrants building similar marketplaces.

**Commoditization risk:** The marketplace model for data collection is replicable. Protege ($65M raised, a16z-backed) operates in an adjacent space connecting data-holding organizations with AI developers (SiliconANGLE, January 2026 via search snippet). Mercor ($10B valuation, $350M Series C) provides expert-driven training data and is heavily resourced (TechCrunch, October 2025 via search snippet). Surge AI ($1.2B revenue in 2024, bootstrapped) dominates RLHF annotation (Inc. via search snippet). Any of these could expand into rights-cleared multimodal data collection. The switching cost for enterprises between data vendors is relatively low for commodity datasets, though custom bespoke collections may create stickier relationships.

## Market & Traction

**Traction signals:**
- Backed by Y Combinator (W26 batch) with $500K in funding (Extruct AI via search snippet).
- Website claims backing from investors including xAI, Meta, and Mercor (luel.ai). No independent confirmation of these investors was found in press or funding databases beyond the website claim.
- No public revenue, user count, contributor count, or growth metrics found.
- No Product Hunt launch found.
- No app store or Chrome Web Store presence found.
- Company Twitter/X: No verified account found for the Luel company.
- LinkedIn: https://www.linkedin.com/company/luel (follower count not retrievable).
- Discord/Slack community: No public data found.
- Job postings: The company is not currently hiring (YC company page).
- No press coverage in named publications found.

**Competitive landscape:**

1. **Scale AI** — $1.6B total funding, $2B revenue in 2025, $29B valuation (various sources via search snippets). The dominant data labeling platform. Key differentiator vs. Luel: Scale focuses on annotation/labeling of existing data at massive scale; Luel focuses on multimodal data *collection* with rights provenance. Scale's neutrality is now in question following Meta's $14.3B investment.

2. **Surge AI** — Bootstrapped, $1.2B revenue in 2024 rising to $1.4B run rate by August 2025 (Inc., Lenny's Newsletter via search snippets). Founded by Edwin Chen (ex-Google). Key differentiator vs. Luel: Surge specializes in expert human annotation and RLHF with ~110 employees and ~12 frontier AI lab clients; Luel focuses on raw multimodal data collection from a contributor network rather than annotation.

3. **Mercor** — $350M Series C at $10B valuation, ~$450M annualized run-rate revenue, 30,000+ experts (TechCrunch, October 2025 via search snippet). Key differentiator vs. Luel: Mercor connects domain experts (lawyers, doctors, scientists) for model training at $85+/hr; Luel targets everyday contributors for video/audio/image collection at lower per-unit price points.

4. **Protege** — $65M total funding (a16z-led $30M Series A extension, January 2026) (SiliconANGLE, January 2026 via search snippet). Founded 2024. Key differentiator vs. Luel: Protege connects organizations holding existing proprietary data with AI developers; Luel mobilizes individual contributors to create new data on demand.

5. **Appen** — Publicly traded legacy data labeling firm with a million+ contributor crowd. Key differentiator vs. Luel: Appen is a mature, large-scale annotation operation that struggled to adapt to RLHF and generative AI-era demands; Luel is purpose-built for multimodal data collection with modern rights clearance.

**Why now:** [Inferred]: Several catalysts align: (1) The legal landscape around AI training data has tightened, with lawsuits from content creators (New York Times v. OpenAI, Getty v. Stability AI) making rights-cleared data more urgent for AI labs. (2) Scale AI's acquisition by Meta in June 2025 created neutrality concerns, causing major AI labs to seek alternative data vendors (TechCrunch, October 2025 via search snippet). (3) Frontier model training increasingly requires domain-specific multimodal data (video, audio) that cannot be easily scraped from the web, creating demand for purpose-built collection infrastructure.

## Founders & Team

**William Namgyal** — Co-Founder & CEO
- UC Berkeley M.E.T. (Management, Entrepreneurship & Technology) program dropout (YC company page).
- Described as "2x Founding Engineer" — specific companies not publicly identified (YC company page).
- Prior academic research in network security: authored "Neural Network-based Approach Towards Port Scan Attack Detection in Linux-based IoT Systems" (Polygence, June 2023). Also built CapyNet, a network analysis application (Polygence).
- ResearchGate profile: https://www.researchgate.net/profile/William-Namgyal
- Twitter/X: No personal account found. Mentioned in @StealthCoSpy post announcing Luel's launch (x.com/StealthCoSpy).
- LinkedIn: https://www.linkedin.com/in/william-namgyal-11b496222/ (headline: "Co-Founder & CEO, Luel (YC W26)"; connection count not retrievable).
- GitHub: github.com/williamnamgyal — CapyNet repo found (Polygence listing); star count not retrievable.

**Inigo Lenderking** — Co-Founder & COO
- UC Berkeley CS dropout (YC company page).
- Previously a machine learning researcher (YC company page). Specific institution or lab not publicly identified beyond Berkeley.
- Twitter/X: No public account found.
- LinkedIn: https://www.linkedin.com/in/inigolenderking/ (headline: "Co-Founder, Luel (YC W26)"; connection count not retrievable).
- GitHub: No public repos found.

**Co-founder relationship:** Both founders attended UC Berkeley, which is the identifiable shared institution. No additional data on prior shared employers or projects was found in public sources.

**Founder-market fit:** Namgyal's background as a 2x founding engineer provides startup-building experience, while Lenderking's ML research background provides technical domain expertise relevant to understanding AI training data needs. Both dropped out of Berkeley programs to pursue Luel. The YC partner assigned to Luel is Harshita Arora (YC company page).

## Key Risks

**Well-funded competitor encroachment:** Mercor ($10B valuation, $450M ARR), Surge AI ($1.4B run rate), and Protege ($65M raised) all operate in adjacent AI training data spaces and could expand into rights-cleared multimodal data collection. Protege's a16z-backed governed data marketplace model is particularly close to Luel's positioning. Luel's $500K in funding provides limited runway to compete on contributor acquisition and enterprise sales against these players.

**Contributor supply liquidity risk:** The marketplace model depends on building and maintaining a large, diverse contributor base willing to create multimodal content (video, audio, photos) at price points that are attractive to both sides. If contributor payouts are too low to sustain engagement or too high to maintain competitive enterprise pricing, the marketplace economics may not work. No public data on current contributor count or retention was found.

**Legal and regulatory exposure:** Luel's core value proposition is "rights-cleared" data, meaning any failure in the rights clearance process could expose both Luel and its enterprise clients to legal liability. As AI training data litigation intensifies, the standards for what constitutes adequate clearance and consent may shift, requiring ongoing compliance investment.

**Brand disambiguation:** "Luel" returns results for unrelated entities including the Labor United Educational League (@LUEL_us on X), Luel Studio, and various individuals. This may create search/discovery friction for potential contributors and enterprise customers.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3.2B AI training dataset market in 2025, projected $16.3B by 2033 at 22.6% CAGR (Grand View Research via search snippet) |
| SAM | No public data found |
| Traction | Y Combinator W26 batch; $500K funding (Extruct AI via search snippet); website claims investors include xAI, Meta, and Mercor (luel.ai, unconfirmed independently) |
| Revenue Signal | No public data found |
| Founders | William Namgyal (CEO): 2x founding engineer, UC Berkeley M.E.T. dropout, network security researcher. Inigo Lenderking (COO): ML researcher, UC Berkeley CS dropout. |
| Competitors | Scale AI ($1.6B raised, $2B revenue 2025, annotation/labeling focus); Surge AI (bootstrapped, $1.4B ARR run rate, RLHF annotation specialist); Mercor ($350M Series C at $10B valuation, ~$450M ARR, expert-driven training); Protege ($65M raised, governed data exchange); Appen (public, legacy annotation, 1M+ crowd) |
| Moat Signals | Two-sided marketplace network effect potential (unproven); rights-clearance documentation as switching cost (unproven) |
| Risk Factors | Well-funded competitor encroachment (Mercor, Surge, Protege), contributor supply liquidity risk, legal/regulatory exposure on rights-clearance standards |
| Founder Reach | William Namgyal: Twitter not found, LinkedIn linkedin.com/in/william-namgyal-11b496222/ (count not retrievable), GitHub github.com/williamnamgyal (count not retrievable). Inigo Lenderking: Twitter not found, LinkedIn linkedin.com/in/inigolenderking/ (count not retrievable), GitHub not found. |
| Distribution Signals | No public data found |
