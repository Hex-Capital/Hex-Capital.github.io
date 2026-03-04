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
| YC Partner | Harshita Arora |
| Emails | No public data found |

## The Idea

**Problem:** Frontier AI labs require large volumes of rights-cleared, multimodal training data (audio, video, images) with verified provenance and licensing documentation. Public web data is largely exhausted for training purposes, synthetic-only pipelines introduce quality drift, and most available datasets lack production-grade rights clearance, provenance, and metadata (YC LinkedIn post). Existing solutions from legacy providers like Appen and Scale AI are described by Luel as slow and opaque on licensing. Regulatory pressures — including the EU AI Act and active copyright litigation against AI companies — are increasing demand for compliant data infrastructure (YC LinkedIn post).

**Approach:** Luel operates a two-sided marketplace connecting AI enterprises with a global contributor network. Enterprise customers submit dataset specifications (modality, scenario, instructions, devices, QA rules), and Luel manages the pipeline: recruiting contributors, executing multi-stage quality assurance (using Google Vertex AI for automated QA), and delivering licensed, audit-ready datasets within days (Luel blog, YC page). Contributors upload videos, voice recordings, and images from any device and receive payouts within 2–7 days via Venmo or Stripe (luel.ai). Data categories include video content (tutorials, screen recordings, POV tasks), audio and voice (speech recognition, TTS training data), and images (computer vision, object detection) (luel.ai).

**Differentiation:** Compared to Scale AI (which focuses primarily on data labeling and annotation at massive scale) and Appen (a managed annotation vendor with its own workforce), Luel positions itself as a purpose-built marketplace for sourcing and licensing new multimodal data — not labeling existing data. Luel claims "10x faster collection" speeds versus legacy providers (Luel blog). Unlike crowdsourcing platforms such as Toloka or Amazon Mechanical Turk, Luel provides full rights-clearance documentation, consent logs, and PII audits with each dataset (Luel blog). Compared to Surge AI (which focuses on RLHF and text annotation), Luel focuses on multimodal data collection (audio, video, images) rather than text labeling.

**Business Model:** Luel offers flexible licensing: flat fee, per-minute pricing, or revenue-share models (Luel blog). Ready-to-ship datasets are available for immediate catalog access; custom data collection campaigns come with dedicated account management (luel.ai). [Inferred]: The marketplace model likely takes a margin between what enterprises pay for datasets and what contributors receive, functioning as a take-rate business similar to other two-sided marketplaces.

**TAM/SAM:** The global AI training dataset market was valued at approximately $2.82 billion in 2024 and is projected to reach $9.58 billion by 2029 at a CAGR of 27.7% (MarketsandMarkets via search snippet). Fortune Business Insights estimates the market at $3.59 billion in 2025, growing to $23.18 billion by 2034 (Fortune Business Insights via search snippet). Grand View Research estimates the market at $3.2 billion in 2025 (Grand View Research via search snippet). [Inferred]: Luel's SAM — the rights-cleared multimodal data collection segment specifically — is a subset of the broader AI training data market; no public SAM estimate specific to this sub-segment was found.

**GTM / Distribution:** Luel's website lists logos for xAI, Meta, Mercor, DoorDash, Copilot, and Apple under a section labeled "Backing & Investors" (luel.ai). The YC page describes the company as working "with frontier AI teams" (YC page). Sample dataset collections mentioned include patient-doctor conversations from South Asia, gemstone footage for robotics, Japanese medical interactions, and hand-traced egocentric videos (YC LinkedIn post). [Inferred]: Primary distribution appears to be direct sales to frontier AI labs and enterprise AI teams, leveraging the YC network and existing relationships with major AI companies.

## Defensibility

The Luel blog claims a contributor network of "3M+ global contributors" (Luel blog). If accurate, this represents a supply-side network effect: a larger contributor base enables faster fulfillment of diverse dataset specifications, which attracts more enterprise buyers, which in turn attracts more contributors. Each completed dataset collection builds institutional knowledge about quality standards, contributor reliability, and domain-specific sourcing methods.

The rights-clearance documentation and provenance tracking create switching costs for enterprise customers who have built compliance workflows around Luel's audit trails.

**Market structure:** Scale AI's June 2025 deal saw Meta acquire a 49% stake for $14.3 billion (Tracxn via search snippet), effectively aligning Scale with Meta's ecosystem. This may create an opening for independent, modality-specific data providers serving other frontier labs that compete with Meta. Legacy annotation vendors (Appen, TELUS International) are structured around managed services with large internal workforces, making a shift to a lean marketplace model a business-model conflict. Surge AI, while bootstrapped and profitable at over $1 billion in revenue (Bloomberg, Jul 2025 via search snippet), focuses primarily on text-based RLHF rather than multimodal collection.

**Commoditization risk:** The core technology of building a contributor marketplace and QA pipeline is replicable. Competitors with existing contributor networks (Scale AI, Appen, Defined.ai) could add rights-clearance features. New entrants could emerge. The key barrier is the difficulty of simultaneously building supply (contributor network) and demand (enterprise contracts) — a classic cold-start problem for marketplaces.

## Market & Traction

**Traction signals:**
- 3M+ global contributors (Luel blog, undated)
- "Thousands of signups every single day from users looking to monetize their everyday actions" (YC LinkedIn post, 2026)
- 200K+ hours of speech, audio, and video data collected for top 100 AI labs in the US (LinkedIn profile of William Namgyal via search snippet)
- Website lists logos for xAI, Meta, Mercor, DoorDash, Copilot, Apple (luel.ai)
- YC LinkedIn launch post: 297 likes, 28 comments (YC LinkedIn post)
- LinkedIn company page: linkedin.com/company/luel (follower count not retrievable)
- Twitter/X company account: not found
- Product Hunt launch: not found
- No public revenue figures found
- No app store or Chrome extension presence found

**Competitive landscape:**

1. **Scale AI** ($15.9B raised, $29B valuation after Meta's 49% stake acquisition in Jun 2025; Tracxn via search snippet) — Primarily a data labeling and annotation platform with government and enterprise contracts. Differentiator vs. Luel: Scale is focused on labeling/annotation of existing data at massive scale, not sourcing new multimodal content from contributors. Meta's majority-stake acquisition may limit Scale's ability to serve Meta competitors.

2. **Surge AI** (bootstrapped, >$1B annual revenue, seeking $1B raise at $15-25B valuation; Bloomberg, Jul 2025 via search snippet) — Focuses on premium RLHF data labeling with expert annotators for major AI labs including OpenAI, Google, Microsoft, Meta, and Anthropic. Differentiator vs. Luel: Surge specializes in text-based annotation and RLHF, not multimodal data collection.

3. **Defined.ai** ($85M raised; 65% revenue growth in 2025; 1,200% increase in marketplace partner datasets; Defined.ai press release via search snippet) — Operates an AI data marketplace with third-party partner datasets. Differentiator vs. Luel: Defined.ai has a broader marketplace of existing third-party datasets, while Luel focuses on custom-sourced, rights-cleared multimodal collections.

4. **Labelbox** ($189M raised, ~$50M revenue in 2024; Tracxn, GetLatka via search snippets) — Developer-focused data labeling and annotation platform for AI teams. Differentiator vs. Luel: Labelbox is a labeling tool/platform, not a data sourcing marketplace.

5. **Appen** (publicly traded, ASX:APX) — Managed annotation vendor with its own global workforce providing data labeling and collection services. Differentiator vs. Luel: Appen operates a managed-services model with internal workforces and project managers, vs. Luel's lean marketplace model.

**Why now:** [Inferred]: Several converging factors have opened this opportunity: (1) the EU AI Act's implementation timeline creates regulatory urgency for rights-cleared training data; (2) active copyright litigation (e.g., New York Times v. OpenAI, Getty Images v. Stability AI) has increased legal risk for AI labs using web-scraped data; (3) Meta's acquisition of a controlling stake in Scale AI (Jun 2025) may push competing AI labs to seek independent data providers; (4) frontier model development is shifting toward multimodal capabilities (video, audio, image understanding), creating demand for multimodal training data beyond text.

## Founders & Team

**William Namgyal** — Co-Founder & CEO
- Berkeley M.E.T. dropout (YC page)
- Described as "2x Founding Engineer" prior to Luel (YC page); specific prior companies not publicly identified
- Has collected 200K+ hours of speech, audio, and video datasets for top 100 AI labs in the US (LinkedIn via search snippet)
- Founded HackBlue, a cybersecurity hackathon (Devpost via search snippet)
- Research profile on ResearchGate; co-author of "Rethink: A Personalized Regret Analyzer for Social Media Posts" presented at NDSS (NDSS via search snippet)
- Twitter/X: No personal account found
- LinkedIn: linkedin.com/in/william-namgyal
- GitHub: github.com/williamnamgyal — capynet project (network interface tool); no star count retrieved

**Inigo Lenderking** — Co-Founder & COO
- Berkeley CS dropout (YC page)
- Previously a Machine Learning Researcher (YC page); specific institution/employer beyond Berkeley not publicly identified
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/inigolenderking
- GitHub: No public repos found

**Co-founder relationship:** Both founders attended UC Berkeley (William in M.E.T., Inigo in CS), suggesting they likely met through the university's startup and engineering community.

**Founder-market fit:** Both founders dropped out of UC Berkeley to pursue Luel, indicating conviction in the opportunity. William Namgyal's experience as a 2x founding engineer and his track record of collecting 200K+ hours of multimodal data for AI labs provides direct domain experience in the AI training data supply chain. His cybersecurity background (HackBlue, NDSS publication) suggests technical depth. Inigo Lenderking's ML research background provides technical understanding of what AI teams need from training data.

## Key Risks

**Contributor quality and fraud at scale:** With a claimed 3M+ contributor network and "thousands of signups every single day" (YC LinkedIn post), maintaining data quality and preventing fraudulent or low-quality submissions becomes increasingly difficult. Automated QA (via Google Vertex AI) may not catch all quality issues across diverse modalities and languages.

**Enterprise customer concentration:** The website lists logos of major AI companies (xAI, Meta, Mercor, DoorDash, Copilot, Apple), but it is unclear whether these represent paying customers, investors, or aspirational partnerships. If revenue is concentrated among a small number of large AI labs, loss of any single customer could be material.

**Competitive pressure from well-funded incumbents:** Scale AI ($15.9B raised), Surge AI (>$1B revenue), and Defined.ai ($85M raised with 1,200% marketplace growth) all operate in adjacent or overlapping segments. Any of these could add rights-cleared multimodal sourcing capabilities. Defined.ai specifically reported growing its marketplace of third-party datasets rapidly in 2025 (Defined.ai press release).

**Regulatory and liability risk on contributor side:** Operating a global contributor network collecting audio, video, and images (including medical conversations and personal footage) creates exposure to varying international privacy regulations (GDPR, CCPA, India's DPDP Act). Consent management across millions of contributors in multiple jurisdictions is operationally complex.

**Brand disambiguation:** "Luel" shares its name with various individuals and entities across social media platforms, making brand discovery and SEO more challenging.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | ~$2.8–3.6B in 2025, projected $9.6B by 2029 at 27.7% CAGR (MarketsandMarkets via search snippet) or $23.2B by 2034 (Fortune Business Insights via search snippet) |
| SAM | No public data found |
| Traction | 3M+ global contributors (Luel blog); "thousands of signups every single day" (YC LinkedIn post, 2026); 200K+ hours of data collected for top 100 AI labs (LinkedIn via search snippet); 297 likes on YC LinkedIn launch post |
| Revenue Signal | Flexible licensing: flat fee, per-minute, or revenue-share (Luel blog). Sample contributor payouts shown on website ($4.50/video clip, $0.80/audio recording) (luel.ai). No company revenue figures found. |
| Founders | William Namgyal (CEO): 2x Founding Engineer, Berkeley M.E.T. dropout, 200K+ hrs data collection experience. Inigo Lenderking (COO): ML Researcher, Berkeley CS dropout. |
| Competitors | Scale AI ($15.9B raised, $29B valuation, data labeling/annotation); Surge AI (bootstrapped, >$1B revenue, RLHF text annotation); Defined.ai ($85M raised, 65% revenue growth 2025, data marketplace); Labelbox ($189M raised, ~$50M revenue 2024, labeling platform); Appen (public, managed annotation services) |
| Moat Signals | 3M+ contributor network (Luel blog); rights-clearance documentation and provenance tracking creating enterprise switching costs |
| Risk Factors | Contributor quality/fraud at scale, enterprise customer concentration, competitive pressure from well-funded incumbents |
| Founder Reach | William Namgyal: Twitter not found, LinkedIn linkedin.com/in/william-namgyal, GitHub github.com/williamnamgyal. Inigo Lenderking: Twitter not found, LinkedIn linkedin.com/in/inigolenderking, GitHub not found. |
| Distribution Signals | YC W26 batch; website lists xAI, Meta, Mercor, DoorDash, Copilot, Apple logos (luel.ai); no Product Hunt launch found |
| Emails | No public data found |
