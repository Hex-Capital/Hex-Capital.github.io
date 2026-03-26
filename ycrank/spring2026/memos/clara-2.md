# Clara

> AI primary care doctor

| Field | Value |
|-------|-------|
| Website | http://askclara.com |
| YC Page | https://www.ycombinator.com/companies/clara-2 |
| Batch | Spring 2026 |
| Industry | Healthcare / Consumer Health and Wellness |
| Team Size | 9 |
| Location | San Francisco, CA, USA |
| Tags | Telehealth, Healthcare, Telemedicine, AI |
| YC Partner | Garry Tan |
| Emails | No public data found |

## The Idea

**Problem:** Primary care in the U.S. suffers from physician shortages, long wait times, and fragmented medical records. Patients cycle through rushed 15-minute visits where providers lack longitudinal context. Existing telehealth platforms (e.g., Teladoc, K Health) offer virtual visits but still rely on human clinicians as the bottleneck, limiting scalability and continuity of care.

**Approach:** Clara provides an AI agent that can ingest a patient's full medical history—prescriptions, labs, and records from 150,000+ healthcare facilities via secure ID verification (askclara.com)—and then act on that data: answering symptom questions, drafting prescription refills, ordering labs, and tracking biomarker trends longitudinally. All AI-generated medical recommendations are reviewed and approved by state-licensed, board-certified human clinicians before becoming actionable (askclara.com). The company describes Clara as "an AI doctor, not a licensed clinician," with outputs labeled as informational until provider sign-off (askclara.com legal disclaimer).

**Differentiation:** Unlike general-purpose LLMs (ChatGPT, Claude), Clara has direct access to patient medical records and the ability to trigger clinical actions (prescriptions, lab orders) within its platform (YC page). Unlike existing telehealth services (Teladoc, K Health), the AI handles the initial clinical reasoning and data synthesis, with human providers serving as reviewers rather than primary interactors. [Inferred]: This inverts the standard telehealth model from "human-first, AI-assisted" to "AI-first, human-verified," which could dramatically improve clinician throughput.

**Business Model:** No pricing page or subscription tiers are publicly listed on askclara.com. The website references working with insurance but provides no rate details (askclara.com). [Inferred]: Most likely monetization path is a membership/subscription model for primary care access (common in DTC telehealth), potentially supplemented by insurance billing given the clinical team and the founders' Circle Medical insurance-billing experience.

**TAM/SAM:** The global AI in telehealth and telemedicine market was estimated at $6.17B in 2025, projected to reach $27.14B by 2030 at a 36.4% CAGR, with primary care holding the largest segment share (MarketsandMarkets, 2025 via search snippet). The broader U.S. telemedicine market was valued at $87.41B in 2024 (Fortune Business Insights, 2024 via search snippet). [Inferred]: Clara's SAM is the subset of U.S. consumers willing to use AI-first primary care—likely tens of millions, but no company-specific SAM estimate was found.

**GTM / Distribution:** Two active job postings—Founding Data Engineer and Founding Product Engineer—indicate product-building phase (YC page). [Inferred]: Most likely initial distribution is DTC via the web app at askclara.com, leveraging the founders' Circle Medical playbook of online-first primary care with insurance acceptance to reduce consumer friction.

## Defensibility

- **Data moat (potential):** Clara's ability to aggregate patient records from 150,000+ facilities creates a longitudinal health dataset per user that deepens over time (askclara.com). [Inferred]: As users accumulate history on the platform, switching costs increase—a new provider would lack this integrated context.
- **Clinical operations expertise:** The founding team built and operated Circle Medical's clinical infrastructure to $100M revenue run rate with profitability (PR Newswire, August 2024), providing institutional knowledge in provider licensing, insurance billing, and regulatory compliance that is difficult to replicate quickly.
- **Regulatory barrier:** Practicing medicine requires state-by-state licensing of human clinicians. Clara's clinical team (board-certified, trained at Georgetown, UCLA, Thomas Jefferson University per askclara.com) represents a compliance moat that pure-software competitors cannot shortcut.

**Market structure:** Incumbent health systems and insurers face business model cannibalization: an AI-first model that reduces the number of billable clinician encounters directly undermines fee-for-service revenue. Telehealth incumbents (Teladoc, Amwell) are built around per-visit clinician economics that conflict with an AI-first approach. [Inferred]: This structural misalignment makes it difficult for incumbents to adopt Clara's model without cannibalizing existing revenue streams.

**Commoditization risk:** General-purpose LLMs (OpenAI, Google) could add medical record integration. K Health ($441M raised) already combines AI triage with clinician visits. Hippocratic AI ($404M raised, $3.5B valuation) is building healthcare-specific AI agents. The core AI reasoning layer is not proprietary—differentiation depends on the clinical operations wrapper (licensing, prescribing, insurance billing) and data integration depth.

## Market & Traction

**Traction signals:**
- No public user counts, revenue figures, or download data found for Clara (askclara.com).
- No confirmed iOS or Google Play app listing matching askclara.com was identified; multiple unrelated "Clara" apps exist in app stores.
- No Product Hunt launch page found.
- No press coverage in named publications found specific to Clara (askclara.com).
- Company Twitter/X account: not confirmed. @Clara_Health exists on X but is not verified as this entity.
- George Favvas Twitter/X: @georgefavvas, ~1,927 followers (X.com via search snippet).
- LinkedIn company page: not confirmed with follower count.
- Two open job postings on YC's Work at a Startup: Founding Data Engineer ($145K–$215K, 0.10%–0.40% equity) and Founding Product Engineer ($140K–$210K, 0.10%–0.40% equity) (YC page).
- Prior company signal: Circle Medical (YC S15), co-founded by George Favvas, exceeded $100M USD revenue run rate with profitability as of August 2024 (PR Newswire, August 13, 2024).

**Competitive landscape:**

| Competitor | Funding | Differentiator vs. Clara |
|---|---|---|
| **K Health** | $441M total, $900M valuation (Jul 2024) (BusinessWire, Jul 2024) | AI-powered triage paired with human clinicians; partnerships with major health systems (Northwell); 413 employees. Focuses on AI as triage layer rather than AI-first care delivery. |
| **Hippocratic AI** | $404M total, $3.5B valuation (Nov 2025) (BusinessWire, Nov 2025) | B2B model selling AI agents to health systems and payors, not DTC. 50+ enterprise clients, 115M+ clinical interactions. Targets provider labor shortage rather than consumer primary care. |
| **Forward Health** | $546M total (PitchBook via search snippet) | Hardware-integrated model with biometric scanning CarePods. Differentiated by physical presence and body scanning rather than pure telehealth. |
| **Nabla** | $114.6M total (Jun 2025) (search snippet) | Focused on clinician-facing ambient documentation and coding AI, not consumer-facing care. Agentic AI for provider workflows rather than patient interactions. |

**Why now:**
- [Inferred]: LLM capabilities crossed a clinical reasoning threshold in 2024–2025, enabling AI to perform differential diagnosis and care plan drafting at a quality level that human reviewers can meaningfully audit—previously, AI in telehealth was limited to symptom checkers and triage chatbots.
- Carbon Health's Chapter 11 bankruptcy filing in February 2026 (Fierce Healthcare, Feb 2026) signals that capital-intensive, clinic-heavy primary care models face structural challenges, potentially opening space for asset-light, AI-first alternatives.
- The U.S. physician shortage is projected to reach 86,000 by 2036 (AAMC estimates via prior reporting), creating demand-side pressure for care delivery models that reduce per-patient clinician time.

## Founders & Team

**George Favvas** — Founder & CEO
- Serial entrepreneur with 20+ years in technology and healthcare (Crunchbase, Wellfound).
- Co-founded Circle Medical (YC S15), grew it to $100M USD revenue run rate with profitability (PR Newswire, Aug 2024). WELL Health Technologies acquired a majority stake in Circle Medical for $14M in November 2020 (PR Newswire, Nov 2020); Favvas continued as CEO post-acquisition.
- Prior startups: SmartHippo (acquired by RateZip), RadialPoint and TotalNet (acquired by Bell Canada) (Wellfound).
- 500 Startups accelerator graduate (W11 class); taught product management at General Assembly (General Assembly profile).
- Education: Certificate in Healthcare Leadership, Stanford University School of Medicine (2022); Diploma, Vanier College (1993–1996) (search snippets).
- Born and raised in Montreal; based in San Francisco.
- Twitter/X: @georgefavvas, ~1,927 followers (X.com via search snippet).
- LinkedIn: linkedin.com/in/georgefavvas — CEO and Co-Founder, Circle Medical.
- GitHub: No public repos found.

**Caitlin Swift** — Founder, Nurse Practitioner & Clinical Leader
- Family Nurse Practitioner (FNP-C) at Circle Medical (Zocdoc, Healthgrades).
- Education: Master's in Family Nursing, Philadelphia University / Thomas Jefferson University (search snippet).
- Prior experience: Cardiology Registered Nurse for 6 years; NP at a chronic disease and weight management clinic in Marin County (Zocdoc profile).
- Focus on disease prevention and longitudinal patient relationships.
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/caitlin-swift.
- GitHub: No public repos found.

**Zeeshan Ahmed** — Co-founder, Product Designer
- Designed consumer app experiences at Instagram/Meta (Retail Ads team) and Careem (acquired by Uber for $3.1B), where he led the design team as Careem scaled to 40M users (Go Fractional profile, search snippet).
- Previously at Circle Medical, simplifying EHR interfaces for clinicians (YC page, search snippet).
- Education: No public data found.
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/zeeshan1293.
- GitHub: No public repos found.

**Co-founder relationship:** George Favvas and Caitlin Swift both worked at Circle Medical, where Favvas was CEO and Swift was a nurse practitioner (Zocdoc, YC page). Zeeshan Ahmed also worked at Circle Medical as a product designer (YC page). All three co-founders share Circle Medical as a prior employer.

**Founder-market fit:** The founding team combines operational healthcare delivery experience (Favvas scaled Circle Medical's telehealth practice to $100M revenue), clinical expertise (Swift brings frontline NP experience in primary care, chronic disease, and cardiology), and consumer product design at scale (Ahmed designed for 40M+ users at Careem and for Instagram). Favvas has multiple prior exits (SmartHippo, RadialPoint/TotalNet) and has navigated YC (S15), 500 Startups, and a WELL Health acquisition. The team has direct experience with the specific operational challenges of telehealth: licensing, insurance billing, clinical workflows, and EHR design.

## Key Risks

**Name collision and brand confusion:** Multiple products named "Clara" exist in healthcare—NVIDIA Clara, Clara Labs (scheduling AI), Rescripted's Clara (women's health LLM), Clara AI by ReachMD (App Store), and Clara by Arthritis NSW (askclara.com.au). This creates SEO competition, app store discoverability challenges, and potential trademark conflicts.

**Regulatory and liability exposure:** Clara's website states it is "an AI doctor, not a licensed clinician" with outputs that are "not medical advice" (askclara.com disclaimer), yet the product markets itself as an "AI primary care doctor" that can draft prescriptions and order labs. [Inferred]: This tension between marketing positioning and legal disclaimers could attract regulatory scrutiny from state medical boards or the FTC, particularly as AI healthcare regulation is actively evolving.

**Founder availability and Circle Medical overlap:** George Favvas is listed as CEO of both Circle Medical (Crunchbase, LinkedIn, as of research date) and Clara (YC page). Circle Medical is a WELL Health subsidiary operating at $100M+ revenue. [Inferred]: The extent of Favvas's ongoing operational role at Circle Medical and whether a formal transition has occurred is unclear from public sources; dual commitments could dilute focus during Clara's critical early stage.

**Well-funded direct competitors:** K Health ($441M raised, $900M valuation) and Hippocratic AI ($404M raised, $3.5B valuation) have substantially more capital, established enterprise relationships, and larger teams (K Health: 413 employees). Clara competes for the same AI-primary-care positioning with significantly fewer resources.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $6.17B in 2025, projected $27.14B by 2030 at 36.4% CAGR for AI in telehealth (MarketsandMarkets, 2025 via search snippet) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | George Favvas (CEO): Circle Medical co-founder ($100M rev run rate), 3 prior exits, Stanford Healthcare Leadership cert. Caitlin Swift (Clinical): FNP-C, 6yr cardiology RN, Thomas Jefferson MSN. Zeeshan Ahmed (Design): Instagram/Meta, Careem (40M users), Circle Medical. |
| Competitors | K Health ($441M raised, $900M valuation, revenue unknown, AI triage + human clinician model) (BusinessWire, Jul 2024); Hippocratic AI ($404M raised, $3.5B valuation, revenue unknown, B2B AI agents for health systems) (BusinessWire, Nov 2025); Forward Health ($546M raised, revenue unknown, hardware-integrated CarePods) (PitchBook via search snippet); Nabla ($114.6M raised, revenue unknown, clinician-facing ambient AI) (search snippet) |
| Moat Signals | Medical records integration from 150,000+ facilities (askclara.com); founding team's Circle Medical operational playbook; state licensing requirements for clinical operations |
| Risk Factors | Name collision with multiple "Clara" healthcare products, regulatory ambiguity in AI-as-doctor positioning, well-funded competitors (K Health $441M, Hippocratic AI $404M) |
| Founder Reach | George Favvas: Twitter/X @georgefavvas ~1,927 followers (X.com via search snippet), LinkedIn linkedin.com/in/georgefavvas. Caitlin Swift: LinkedIn linkedin.com/in/caitlin-swift, Twitter not found. Zeeshan Ahmed: LinkedIn linkedin.com/in/zeeshan1293, Twitter not found. |
| Distribution Signals | Two job postings on YC Work at a Startup (YC page); no Product Hunt launch, app store listing, or community channels found |
| Emails | No public data found |
