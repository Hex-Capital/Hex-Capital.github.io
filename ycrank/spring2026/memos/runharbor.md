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

**Problem:** Medical device and pharma companies use legacy electronic data capture (EDC) systems that have not fundamentally changed since the 1990s (YC company page). EDC setup takes months of custom configuration; research site coordinators then spend hours per subject per day manually transcribing source documents into these systems (runharbor.com). Data management consumes approximately 30% of total clinical trial budgets (YC company page). Legacy EDCs produce 7–10 day data visibility delays and weeks of back-and-forth to resolve data errors (runharbor.com).

**Approach:** Harbor replaces the legacy EDC with an AI-enabled platform offering three core capabilities (runharbor.com):
- **Magic Build:** Auto-generates electronic case report forms (eCRFs) from protocol PDFs in under 5 minutes, converting weeks-long build processes into days.
- **Magic Capture:** AI-powered document extraction from uploaded source documents, reducing manual transcription by 90%, with human-in-the-loop review.
- **Magic Monitor:** Risk-based remote monitoring with side-by-side source-document and EDC data comparison, confidence scoring, and real-time data visibility.

The platform is 21 CFR Part 11, HIPAA, and GDPR compliant with immutable audit trails, eSignatures, AES-256 encryption at rest, and TLS 1.2+ in transit (runharbor.com).

**Differentiation:** Legacy incumbents (Medidata Rave, Oracle Clinical One, Veeva Vault EDC) require manual study builds taking 2–3 months and manual data entry at sites (runharbor.com). Castor EDC targets simpler academic studies with low-code tools but still requires manual data entry (IntuitionLabs comparison). Harbor's differentiator is automated source-document-to-EDC data extraction — sites upload raw source documents and skip manual entry entirely (YC company page). Harbor configured a 1,600-subject randomized trial database in one week, versus multi-week timelines from legacy vendors (YC company page).

**Business Model:** Flat-rate pricing with no per-subject, per-site, or per-CRF charges (runharbor.com):
- Academic & Non-Profit: Free (unlimited users/patients, standard support)
- Commercial Study: Starting at $2,000/month (includes validation package, priority support, training)
- Enterprise/CRO: Volume pricing (MSA, SSO/SAML, dedicated success manager)

**TAM/SAM:** The global EDC market was valued at $1.84 billion in 2025 and is projected to reach $5.73 billion by 2034, at a CAGR of 13.57% (Fortune Business Insights, 2025). The cloud/SaaS segment holds 72.3% share; pharma and biotech companies hold 43.9% share (Fortune Business Insights, 2025). [Inferred]: Harbor's SAM is the cloud-based EDC segment for small-to-mid-size pharma, biotech, and medical device companies, likely a subset of the ~$1.3B cloud EDC segment.

**GTM / Distribution:** Harbor lists named customers including BioDynamik, NOVA Genomics, Attuned HealthTech, Biolinq, Kalevala Therapeutics, and University Hospitals (runharbor.com). The company website lists open roles for a Sales Development Representative and Forward-Deployed Engineer (runharbor.com/company). [Inferred]: GTM is direct sales to sponsors (pharma, biotech, device companies) and CROs, with a freemium academic tier serving as a pipeline for commercial conversion.

## Defensibility

- **Regulatory compliance as barrier to entry:** 21 CFR Part 11, HIPAA, and GDPR compliance with validation packages included (runharbor.com). Clinical trial software requires extensive validation documentation; Harbor ships a validation package with every license (runharbor.com).
- **Switching costs:** Once a clinical study is configured and live on an EDC, migrating mid-trial is operationally infeasible due to regulatory audit trail requirements (21 CFR Part 11).
- **Data advantage:** [Inferred]: Each study processed trains the document extraction models on domain-specific clinical forms, creating a compounding accuracy advantage over time.

**Market structure:** Incumbents (Medidata, Oracle, Veeva) monetize per-subject or per-site fees on manual-entry workflows (IntuitionLabs comparison, runharbor.com). Adopting Harbor's source-document-upload model would cannibalize their per-unit pricing and require rebuilding their platforms around document extraction rather than form-based entry. [Inferred]: This pricing model conflict creates a structural barrier similar to the innovator's dilemma — incumbents cannot match Harbor's flat-rate model without eroding existing revenue streams.

**Commoditization risk:** LLM-based document extraction is becoming broadly accessible. Incumbents Medidata and Veeva have AI initiatives — Medidata launched Rave Lite in October 2024 to simplify study builds (Dassault Systèmes press release, Oct 2024). [Inferred]: A well-funded incumbent could integrate document extraction into existing EDC platforms, though regulatory validation requirements and legacy architecture create friction.

## Market & Traction

**Traction signals:**
- Platform live with first clinical studies; YC page states "live in five clinical studies" (YC company page, via search snippet)
- Largest customer: 1,600-subject randomized trial database configured in one week, 10x faster than legacy vendor quotes (YC company page)
- Named customers: BioDynamik, NOVA Genomics, Attuned HealthTech, Biolinq, Kalevala Therapeutics, University Hospitals (runharbor.com)
- Customer testimonial: "Creating source documents used to be a two-month project. Harbor cut that to two days." — Johnny Chen, CEO, BioDynamik (runharbor.com)
- Customer testimonial: "Harbor delivered a fully validated EDC in nine days at a fraction of the cost." — Cynthia Hudson, CEO, NOVA Genomics (runharbor.com)
- Twitter/X: @runharbor; YC posted launch announcement tagging @nathanhleung (x.com/ycombinator)
- LinkedIn: linkedin.com/company/runharbor (follower count not retrievable)
- GitHub: github.com/runharbor (public profile exists; repo details not retrieved)
- Partnerships: Google Cloud Partner, NVIDIA Inception Program member, Octane Launchpad (runharbor.com)
- Job postings: Sales Development Representative, Forward-Deployed Engineer, Open Application (runharbor.com/company)
- No Product Hunt launch found.
- No press coverage in named publications found.

**Competitive landscape:**

| Competitor | Funding / Scale | Key Differentiator vs. Harbor |
|---|---|---|
| **Medidata Rave** (Dassault Systèmes) | Acquired for $5.8B (2019); est. revenue ~$701.5M (Growjo); 1,600+ customers (Dassault Systèmes) | Industry standard for large global pharma trials; deep integrations across eCOA, RTSM, eTMF; manual-entry model |
| **Veeva Vault EDC** (Veeva Systems) | Publicly traded (VEEV); revenue not broken out for EDC specifically | Cloud-native, zero-downtime amendments; part of broader Vault clinical suite; manual-entry model |
| **Oracle Clinical One** | Division of Oracle | Unified randomization, trial supplies, and EDC; enterprise integration layer; manual-entry model |
| **Castor EDC** | $65M total raised, Series B $45M (TechCrunch, Jul 2021); 7,500+ studies, 50,000+ users (castoredc.com) | Low-code, cost-effective; strong in academic/decentralized trials; manual-entry model |
| **Viedoc** | Backed by Monterro; specific amount not public (Crunchbase) | Founded 2003, Uppsala Sweden; thousands of studies, 1M+ patients; strong in EU market |

**Why now:** LLM and document extraction capabilities have reached the accuracy, reliability, and traceability thresholds required for high-risk regulated domains (YC company page). [Inferred]: The specific catalyst is the maturation of multimodal LLMs capable of extracting structured data from heterogeneous clinical source documents (lab reports, physician notes, imaging) at accuracy levels that pass regulatory scrutiny — a capability that was not viable at clinical-grade reliability prior to 2024.

## Founders & Team

**Albert Cai** — Co-founder & CEO
- Biomedical Engineering, University of Michigan (runharbor.com/company)
- Previously: Clinical, regulatory, and product roles at Biolinq (wearable biosensors; took flagship product from prototype through first-in-human studies to FDA De Novo authorization) (YC company page, runharbor.com/company)
- Previously: Head of Diabetes Technology at Close Concerns, a boutique consulting firm (runharbor.com/company)
- Spent a month on-site at a clinical site during Biolinq's pivotal trial (YC company page, via search snippet)
- DiaTribe contributor (diatribe.org)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/ac-ai/ — "Founder @ Harbor" (LinkedIn)
- GitHub: No public repos found

**Nathan Leung** — Co-founder & CTO
- Mathematics, UCLA; Computer Science, University of Michigan (runharbor.com/company)
- Previously: First employee at Jupiter (YC S19 startup) (runharbor.com/company)
- Previously: Product roles at Google and Ramp (runharbor.com/company)
- Previously: Caldera — wrote smart contracts securing millions in assets at a blockchain infrastructure company (YC company page, via search snippet)
- Twitter/X: @nathanhleung (x.com/nathanhleung); follower count not retrievable
- LinkedIn: linkedin.com/in/nathanhleung/ (LinkedIn)
- GitHub: github.com/nathanhleung — 71 public repos, 207 followers; pinned repos: install-peerdeps (301 stars), protobuf-ts-types (238 stars), fallback (162 stars), jittered-fractional-indexing (35 stars) (GitHub)

**Co-founder relationship:** Both founders attended the University of Michigan — Albert for biomedical engineering, Nathan for computer science (runharbor.com/company).

**Founder-market fit:** Albert Cai spent four years in clinical trials and regulatory strategy at Biolinq, directly observing coordinators spending hours on manual data entry at clinical sites (YC company page). He led the regulatory pathway from prototype to FDA authorization, giving him first-hand understanding of 21 CFR Part 11 and GCP compliance requirements. Nathan Leung brings zero-to-one startup experience as first employee at a YC company (Jupiter, S19), combined with engineering experience at Google and Ramp (runharbor.com/company). No advisors, board members, or notable investors beyond YC were found on public sources.

## Key Risks

**Regulatory validation burden:** Every software update to an EDC used in a clinical trial requires re-validation under 21 CFR Part 11 and ICH E6(R2) GCP guidelines. Harbor's AI-driven features (document extraction, auto-generated eCRFs) introduce novel validation challenges that regulators have not yet standardized guidance for. Harbor states it ships a validation package with every license (runharbor.com), but the regulatory acceptance of AI-extracted clinical data at scale remains uncharted.

**Incumbent response — Medidata Rave Lite:** Medidata launched Rave Lite in October 2024 specifically to simplify study builds and target the small-to-mid trial segment (Dassault Systèmes press release, Oct 2024). This directly overlaps with Harbor's initial wedge of faster, cheaper EDC setup for smaller sponsors.

**Clinical data liability:** Errors in AI-extracted clinical trial data could have patient safety and regulatory consequences. A single high-profile data extraction error in a pivotal trial could damage trust in the AI-EDC category broadly. Harbor employs human-in-the-loop review (runharbor.com), but the liability exposure is structurally higher than in manual-entry systems where the site bears responsibility for data accuracy.

**Name collision:** "Harbor" is a common English word shared with Harbor Freight, Harbor Clinical (a separate LinkedIn entity), and multiple other companies. This creates SEO, brand recognition, and due-diligence disambiguation challenges.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.84B in 2025, projected $5.73B by 2034 at 13.57% CAGR (Fortune Business Insights, 2025) |
| SAM | No public data found |
| Traction | Live in 5 clinical studies (YC company page); 1,600-subject trial configured in 1 week (YC company page); 6 named customers (runharbor.com) |
| Revenue Signal | Commercial tier starting $2,000/mo, flat-rate; free academic tier; enterprise volume pricing (runharbor.com pricing page) |
| Founders | Albert Cai (CEO): BME U of Michigan, 4 yrs clinical/regulatory at Biolinq (FDA authorization). Nathan Leung (CTO): Math UCLA + CS Michigan, employee #1 at Jupiter (YC S19), Google, Ramp. |
| Competitors | Medidata Rave (acquired $5.8B, est. ~$701.5M rev, industry standard for large pharma); Castor EDC ($65M raised, 7,500+ studies, targets academic/DCT); Veeva Vault EDC (public VEEV, cloud-native suite); Oracle Clinical One (Oracle division, unified platform); Viedoc (Monterro-backed, EU-focused) |
| Moat Signals | 21 CFR Part 11 / HIPAA / GDPR compliance with validation packages (runharbor.com); mid-trial switching costs |
| Risk Factors | Regulatory validation of AI-extracted clinical data, Medidata Rave Lite incumbent response, clinical data liability exposure |
| Founder Reach | Albert Cai: Twitter not found, LinkedIn linkedin.com/in/ac-ai/. Nathan Leung: Twitter @nathanhleung (count not retrievable), LinkedIn linkedin.com/in/nathanhleung/, GitHub 207 followers + 301 stars top repo (GitHub) |
| Distribution Signals | YC launch tweet by @ycombinator (x.com); Google Cloud Partner, NVIDIA Inception Program, Octane Launchpad (runharbor.com); 3 open job postings including SDR (runharbor.com/company) |
| Emails | hello@runharbor.com (runharbor.com) |
