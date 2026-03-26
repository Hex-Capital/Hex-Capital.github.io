# Harbor

> AI system-of-record for clinical trial data

| Field | Value |
|-------|-------|
| Website | https://runharbor.com/ |
| YC Page | https://www.ycombinator.com/companies/runharbor |
| Batch | Spring 2026 |
| Industry | Healthcare / Healthcare |
| Team Size | 2 |
| Location | San Diego, CA, USA |
| Tags | SaaS, Health Tech, B2B, Healthcare |
| YC Partner | Nicolas Dessaigne |
| Emails | hello@runharbor.com |

## The Idea

**Problem:** Medical device and pharma companies rely on electronic data capture (EDC) systems to collect clinical trial data. Legacy EDCs — largely unchanged since the 1990s — require months of custom setup, and research site coordinators spend hours per subject per day on manual data entry (runharbor.com). Data management consumes ~30% of total clinical trial budgets (YC company description). Nearly half of ~40,000 annual clinical trials hit delays that better tools could prevent (runharbor.com/company). Current incumbents include Medidata Rave, Veeva Vault EDC, and Oracle Clinical One.

**Approach:** Harbor automates two core bottlenecks:
- **Magic Build:** Reads a clinical trial protocol PDF and generates draft CRFs and source documents in under 10 minutes, replacing 8-week manual build timelines (runharbor.com).
- **Magic Capture:** AI-powered extraction from uploaded source documents into the EDC, reducing manual data entry by 90% (runharbor.com).
- **Magic Monitor:** Risk-based remote monitoring with confidence scoring, displaying source documents side-by-side with EDC data (runharbor.com).
- Full 21 CFR Part 11, HIPAA, and GDPR compliance with immutable audit trails, eSignatures, and role-based access controls (runharbor.com).

**Differentiation:** Legacy EDCs (Medidata Rave, Veeva Vault, Oracle Clinical One) are passive data repositories requiring manual entry. Harbor's AI reads the protocol to auto-generate the database and extracts data directly from source documents, eliminating manual transcription. Harbor uses a flat monthly license with no per-subject, per-site, or per-CRF charges, contrasting with legacy vendors' complex usage-based pricing (runharbor.com).

**Business Model:** Three-tier SaaS pricing (runharbor.com):
- **Academic/Non-profit:** Free — full AI suite, unlimited users and patients, standard email support.
- **Commercial Study:** Starting at $2,000/month — includes 21 CFR Part 11 validation, priority Slack support, staff training, SLA guarantees.
- **Enterprise/CRO:** Volume pricing for 3+ active trials — includes MSA, SSO/SAML, CTMS/eTMF integrations, dedicated success manager.

**TAM/SAM:** The global EDC systems market was valued at USD 1.93 billion in 2025 and is projected to reach USD 5.88 billion by 2034 at a 13.57% CAGR (Precedence Research, 2025 via search snippet). Grand View Research estimates the market at USD 1.25 billion in 2022, projected to USD 3.63 billion by 2030 at 14.6% CAGR (Grand View Research, 2023 via search snippet). [Inferred]: Harbor's SAM is the subset of commercial sponsors and CROs running small-to-mid-size trials who are underserved by enterprise incumbents and priced out of Medidata/Veeva platform deals.

**GTM / Distribution:** Named customers include Attuned HealthTech, BioDynamik, Biolinq, Kalevala Therapeutics, Nova Genomics, and University Hospitals (runharbor.com). The company has open job postings for a Sales Development Representative and a Forward-Deployed Engineer (runharbor.com/company). [Inferred]: Initial distribution appears to be direct sales to medtech/biopharma sponsors and academic sites, with the free academic tier serving as a funnel for commercial conversion.

## Defensibility

- **Regulatory compliance as barrier:** 21 CFR Part 11 validation, HIPAA, and GDPR compliance require significant engineering and documentation investment; Harbor ships a comprehensive Verification & Validation package with all licenses (runharbor.com). New entrants must replicate this compliance infrastructure.
- **Switching costs:** Once a clinical trial's EDC is configured and data collection begins, mid-study migration is operationally impractical due to regulatory audit trail requirements and data integrity obligations.
- **Data extraction model quality:** [Inferred]: AI extraction accuracy improves with volume of processed source documents across therapeutic areas, potentially creating a data flywheel advantage over time.

**Market structure:** Medidata (acquired by Dassault Systèmes for $5.8 billion in 2019; Wikipedia) and Veeva Systems (public company) dominate the large-pharma segment. [Inferred]: These incumbents face business model cannibalization risk — their revenue depends on complex per-subject/per-site pricing and professional services for database builds; adopting Harbor's automated approach would compress their own revenue per trial. Additionally, legacy vendors' multi-year enterprise contracts with existing customers create inertia against rapid product overhaul.

**Commoditization risk:** General-purpose LLM capabilities for document extraction are increasingly accessible. [Inferred]: Any well-funded health-tech startup or incumbent could build AI-assisted data capture; Harbor's defensibility depends on accumulating regulatory validation artifacts, customer trust, and domain-specific extraction accuracy faster than competitors.

## Market & Traction

**Traction signals:**
- Platform is live with 5 clinical studies (YC page, 2025).
- Largest customer's 1,600-subject randomized trial was configured in 1 week, 10x faster than legacy vendor quotes (YC page).
- Customer testimonial: "Creating source documents and CRFs was a two-month project; Harbor cut it to two days." — Johnny Chen, CEO, BioDynamik (runharbor.com).
- Customer testimonial: "We faced 10-12 week timelines elsewhere; Harbor delivered validated EDC in nine days at a fraction of the cost." — Cynthia Hudson, CEO, NOVA Genomics (runharbor.com).
- 6 named customers displayed on website: Attuned HealthTech, BioDynamik, Biolinq, Kalevala Therapeutics, Nova Genomics, University Hospitals (runharbor.com).
- Google Cloud Partner, NVIDIA Inception Program member, Octane Launchpad participant (runharbor.com).
- Job postings: SDR, Forward-Deployed Engineer, Open Application (runharbor.com/company).
- Twitter/X: @runharbor (follower count not retrievable).
- LinkedIn: linkedin.com/company/runharbor (follower count not retrievable).
- GitHub: github.com/runharbor (public repos/stars not retrievable).
- No Product Hunt launch found. No press coverage in named publications found.

**Competitive landscape:**

| Competitor | Key Differentiator vs. Harbor | Funding / Revenue |
|---|---|---|
| **Medidata Rave** (Dassault Systèmes) | Full clinical cloud platform (CTMS, eCOA, safety); 36,000+ trials, 1M+ users, 2,300 customers (Medidata). Passive EDC, no AI-native extraction. | Acquired for $5.8B in 2019 (Wikipedia). |
| **Veeva Vault EDC** (Veeva Systems) | Multi-tenant cloud, zero-downtime amendments; 1,000+ study starts, 8 of top 20 biopharma (Veeva, 2024). AI Agents announced for 2025-2026 rollout (Veeva). | Veeva Systems public; FY2025 revenue ~$2.36B total (not EDC-specific). |
| **Castor EDC** | Cloud-based, strong in decentralized trials; 50,000+ users globally (Castor). Lower-cost alternative to Medidata/Veeva. | $65M total raised; Series B $45M led by Eight Roads (TechCrunch, Jul 2021). |
| **Viedoc** | Modern UX, 5,000+ studies since 2003 (Viedoc). Sweden-based with global offices. | Funding details not publicly available. |
| **Clinion** | AI/ML/GenAI throughout trial lifecycle; India-based, cost-competitive (Clinion). | Funding details not publicly available. |

**Why now:**
- LLM and document extraction capabilities have reached accuracy and traceability thresholds required for high-risk regulated domains (YC company description).
- [Inferred]: The convergence of transformer-based document understanding models (2023-2025), declining inference costs, and increasing regulatory acceptance of AI-assisted processes in clinical trials has created a window for an AI-native EDC to challenge 25-year-old architectures.

## Founders & Team

**Albert Cai** — Co-founder & CEO
- BS Biomedical Engineering, University of Michigan (graduated 2019) (LinkedIn via search snippet).
- Head of Diabetes Technology at Close Concerns, a boutique consulting firm covering diabetes technology (DiaTribe, LinkedIn via search snippet).
- Spent 4 years in clinical trials and regulatory strategy at Biolinq (wearable biosensor startup), helping take its first product from prototype through first-in-human studies to FDA De Novo authorization (YC page, runharbor.com/company).
- Declined medical school to pursue clinical/startup work (runharbor.com/company).
- Twitter/X: @AlbertCai_X — follower count not retrievable.
- LinkedIn: linkedin.com/in/ac-ai/ — "Founder @ Harbor" (LinkedIn via search snippet).
- GitHub: No public repos found.

**Nathan Leung** — Co-founder & CTO
- Pure Mathematics, UCLA; Computer Science, University of Michigan (runharbor.com/company, Natecation blog).
- Employee #1 at Jupiter (YC S19), a grocery automation startup backed by Khosla Ventures and NFX; built end-to-end systems with TypeScript, React, Kotlin, gRPC, Kubernetes (Natecation blog, Wefunder).
- Software engineering roles at Google (intern) and Ramp (intern) (Natecation blog).
- Wrote smart contracts securing millions in assets at Caldera, a blockchain infrastructure company (runharbor.com/company).
- Twitter/X: @nathanhleung — follower count not retrievable.
- LinkedIn: linkedin.com/in/nathanhleung/ (LinkedIn via search snippet).
- GitHub: github.com/nathanhleung — 74 public repositories (GitHub via search snippet). Star counts not retrieved.

**Co-founder relationship:** Both attended the University of Michigan (Albert in Biomedical Engineering, Nathan in Computer Science), indicating a likely university connection.

**Founder-market fit:** Albert Cai spent four years embedded in clinical trial operations at Biolinq, directly witnessing the EDC pain point at research sites during FDA-track studies. His regulatory and clinical operations background provides domain credibility with sponsors and sites. Nathan Leung brings production engineering experience from Google, Ramp, and an early-stage YC startup (Jupiter), with demonstrated ability to build zero-to-one products. No advisors, board members, or notable investors beyond YC were identified in public sources.

## Key Risks

**Name confusion with Harbor Clinical:** Harbor Clinical (harborclinical.com) is a separate, established clinical services/FSP company. Search results frequently conflate the two, which could create brand confusion with prospective customers and complicate SEO/marketing efforts.

**Incumbent AI response:** Medidata announced AI-driven insights embedding within study planning and execution for 2025 (Medidata CTO, late 2024). Veeva announced AI Agents across all applications starting December 2025, expanding across R&D in 2026 (Veeva). Both incumbents have existing customer bases of thousands of sponsors and can bundle AI features into existing contracts at marginal cost.

**Regulatory validation risk:** AI-extracted clinical data must meet FDA audit standards. Any extraction error in a pivotal trial that causes a regulatory finding could damage trust with the entire sponsor/CRO customer base. The company claims GCP and 21 CFR Part 11 compliance (runharbor.com), but no public third-party audit or FDA feedback on AI-extracted EDC data was found.

**Two-person team with regulated product:** The company lists only 2 employees (YC page) while simultaneously maintaining 21 CFR Part 11 validation, HIPAA compliance, customer support, and sales. Job postings for SDR and Forward-Deployed Engineer suggest awareness of this constraint (runharbor.com/company).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | USD 1.93B in 2025, projected to USD 5.88B by 2034 at 13.57% CAGR (Precedence Research, 2025 via search snippet) |
| SAM | No public data found |
| Traction | 5 live clinical studies (YC page, 2025); 6 named customers on website (runharbor.com); 1,600-subject trial configured in 1 week (YC page) |
| Revenue Signal | Commercial tier starts at $2,000/month; free academic tier; enterprise volume pricing (runharbor.com pricing page) |
| Founders | Albert Cai (CEO): BME Michigan, 4 yrs clinical ops at Biolinq through FDA De Novo. Nathan Leung (CTO): Math UCLA / CS Michigan, employee #1 Jupiter (YC S19), Google, Ramp. |
| Competitors | Medidata Rave ($5.8B acquisition, 2,300 customers, legacy passive EDC); Veeva Vault EDC (public co, 1,000+ study starts, AI Agents launching 2026); Castor EDC ($65M raised, 50K users, DCT focus) |
| Moat Signals | 21 CFR Part 11 / HIPAA / GDPR compliance infrastructure (runharbor.com); flat pricing vs. incumbent per-subject models (runharbor.com) |
| Risk Factors | Incumbent AI catch-up (Medidata, Veeva both launching AI features), brand confusion with Harbor Clinical, regulatory validation of AI-extracted data unproven at scale |
| Founder Reach | Albert Cai: Twitter @AlbertCai_X (count not retrievable), LinkedIn linkedin.com/in/ac-ai/. Nathan Leung: Twitter @nathanhleung (count not retrievable), LinkedIn linkedin.com/in/nathanhleung/, GitHub 74 repos (star count not retrievable). |
| Distribution Signals | 3 job postings including SDR role (runharbor.com/company); Google Cloud Partner, NVIDIA Inception, Octane Launchpad (runharbor.com) |
| Emails | hello@runharbor.com (runharbor.com) |
