# Framewise Health

> AI-personalized patient recovery videos

| Field | Value |
|-------|-------|
| Website | https://framewisehealth.com |
| YC Page | https://www.ycombinator.com/companies/framewise-health |
| Batch | Spring 2026 |
| Industry | Healthcare / Healthcare |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | SaaS, Health Tech, B2B |
| YC Partner | Aaron Epstein |
| Emails | contact@framewisehealth.com |

## The Idea

**Problem:** Hospitals face Medicare readmission penalties under the CMS Hospital Readmissions Reduction Program (HRRP); in FY 2023, 2,273 hospitals (74.7% of those subject to HRRP) were penalized, totaling $320M in payment reductions (CMS, FY2023). David Cui stated: "The average hospital pays $1M/year in Medicare readmission penalties" (LinkedIn post, April 2026). Current discharge education relies on printed packets that patients frequently do not read or understand, particularly when there is a language barrier. Nurses spend significant time on discharge education, reducing availability for clinical care. The company website frames the value proposition as: "give your nurses their shift back" (framewisehealth.com).

**Approach:** Framewise generates personalized AI video content for each patient by pulling de-identified patient details from the EHR via FHIR standards — including diagnosis, medications, language preference, and discharge plan (framewisehealth.com). Videos are customized by avatar, language, medical history, and discharge plan, reviewed by clinicians, and delivered via SMS before hospital discharge and throughout recovery (framewisehealth.com). No app download or login is required. The website example shows a cardiac patient (CHF + Type 2 diabetes, Spanish-preferred) receiving a personalized discharge video (framewisehealth.com).

**Differentiation:** Compared to Synthesia (general-purpose AI video, $4B valuation; Synthesia Series E, Jan 2026) and KreadoAI/VidifyAI (generic healthcare video generators), Framewise is purpose-built for the hospital discharge workflow with direct EHR integration via FHIR. Compared to Mytonomy (acquired by Elsevier, March 2026; MobiHealthNews, 2021) which offers a library of pre-made educational videos, Framewise generates patient-specific content from EHR data. Compared to Health Recovery Solutions ($84.7M raised; Crunchbase) which focuses on remote patient monitoring post-discharge, Framewise targets the education gap at the point of discharge. Framewise is HIPAA-compliant with a signed AWS BAA and end-to-end encryption (framewisehealth.com).

**Business Model:** Pricing is "anchored to the hospital's readmission volume and CMS HRRP penalty, so every quote is tied directly to the savings Framewise unlocks" (framewisehealth.com via search snippet). No fixed pricing tiers are published. [Inferred]: This is a value-based pricing model where contract size scales with the hospital's penalty exposure, likely making it an enterprise SaaS sale with variable deal sizes.

**TAM/SAM:**
- Patient Experience Technology Market: $0.59B in 2024, projected $1.16B by 2030, 11.8% CAGR (MarketsandMarkets, 2025).
- U.S. Patient Engagement Solutions Market: $7.59B in 2024, 19.77% CAGR to 2030 (Grand View Research, 2024).
- CMS HRRP penalty pool: $320M in FY2023 across 2,273 penalized hospitals (CMS, FY2023). [Inferred]: The direct SAM could be estimated from the ~3,000 hospitals subject to HRRP, but no company-published SAM figure was found.

**GTM / Distribution:** The website includes a demo booking link via cal.com (framewisehealth.com). [Inferred]: Most likely distribution path is direct sales to hospital quality/patient safety officers and CMOs, anchored by ROI conversations around HRRP penalty reduction. The value-based pricing model creates a natural pilot-to-enterprise expansion path within health systems.

## Defensibility

- **EHR integration via FHIR:** Technical integration with hospital EHR systems creates switching costs once deployed (framewisehealth.com). Each deployment requires mapping to the hospital's specific data schema and clinical workflows.
- **Clinical validation workflow:** Videos are clinician-reviewed before delivery (framewisehealth.com), requiring domain-specific quality processes that general-purpose AI video tools lack.
- [Inferred]: Data flywheel potential exists — as more patient encounters are processed, the system could improve personalization quality and build a corpus of clinically validated video templates across conditions and languages. This is unproven at this stage.

**Market structure:** General-purpose AI video platforms (Synthesia, HeyGen) lack EHR integration, HIPAA infrastructure, and clinical review workflows. Building these would require significant healthcare-specific investment that does not serve their core enterprise/marketing customer base. Incumbent patient engagement platforms (Epic MyChart, Cerner) deliver text-based education; generating personalized AI video content would require building or acquiring an AI video generation stack. [Inferred]: The structural barrier is that incumbents' existing revenue comes from text/document-based workflows, and pivoting to AI-generated video requires a different technical stack and clinical validation process.

**Commoditization risk:** The core technology (LLM + video generation + FHIR integration) uses components that are increasingly commoditized. VidifyAI already advertises HIPAA-compliant healthcare video generation with BAA and SOC 2 Type II (vidifyaistudio.com via search snippet). [Inferred]: The defensibility rests more on clinical workflow integration and hospital sales relationships than on the underlying AI technology.

## Market & Traction

**Traction signals:**
- Y Combinator Spring 2026 batch member (YC company page).
- David Cui's LinkedIn post announcing YC acceptance received 257 reactions and 60 comments (LinkedIn, April 2026).
- David Cui: 1,273 LinkedIn followers (LinkedIn, April 2026).
- Tane Kim: 454 LinkedIn connections (LinkedIn via search snippet).
- No public revenue, user counts, customer names, or partnership announcements found.
- No Product Hunt launch found.
- No mobile app or browser extension found.
- Company Twitter/X account: not confirmed. Handles @framehealth and @framewise exist on X but could not be verified as belonging to this company.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Framewise |
|---|---|---|---|
| **Synthesia** | $536.6M raised, $4B valuation (Yahoo Finance, Jan 2026) | $146M ARR (Sacra/Latka, Sep 2025) | General-purpose AI video platform; healthcare is one of many verticals; no EHR integration |
| **Mytonomy** | $46.48M raised (Crunchbase); acquired by Elsevier, March 2026 | Revenue not disclosed | Pre-made video library + patient engagement platform; not AI-generated per-patient content |
| **GetWellNetwork (Get Well)** | $19M raised (Crunchbase); acquired by SAIGroup, Jul 2024 | Revenue not disclosed; 10M+ annual patient interactions (company website) | Broad patient engagement platform (education, entertainment, communication); not video-generation-focused |
| **Health Recovery Solutions** | ~$84.7M raised (Crunchbase/Tracxn) | $23.5M revenue (Growjo) | Remote patient monitoring platform; video is one component of broader RPM solution |
| **Tine Health** | No public funding data found | No public data found | Video-based patient education + messaging platform; focused on staff training and patient engagement |

**Why now:**
- Generative AI video quality crossed a usability threshold in 2024-2025, enabling realistic avatar-based patient education videos at low marginal cost (Synthesia reached $146M ARR by Sep 2025, indicating broad market validation of AI video; Sacra/Latka).
- CMS HRRP penalties continue to affect ~75% of eligible hospitals (CMS, FY2023), maintaining financial pressure on hospitals to invest in readmission reduction.
- FHIR (Fast Healthcare Interoperability Resources) adoption has increased via the CMS Interoperability and Patient Access final rule, making EHR data extraction more standardized.
- [Inferred]: The convergence of production-quality AI video generation, standardized EHR interoperability via FHIR, and persistent HRRP penalty pressure creates a window where personalized video discharge education becomes technically feasible and economically justified.

## Founders & Team

**David Cui** — Co-founder
- Brown University, Computer Science & Economics (LinkedIn).
- Software Engineering Intern at SOTATEK., JSC (LinkedIn).
- LinkedIn: linkedin.com/in/david-cui-589a20228/ — 1,273 followers, 7 posts (LinkedIn, April 2026).
- Twitter/X: No confirmed public account found.
- GitHub: No confirmed public repos found. A github.com/davidcui1225 account exists (AWS OpenSearch affiliation) but is unverified as the same person.

**Tane Kim** — Co-founder
- Described as "medical school dropout" on YC page (YC company page).
- Brown University (LinkedIn via search snippet).
- Previously at The Lundquist Institute for Biomedical Innovation at Harbor-UCLA Medical Center (LinkedIn via search snippet).
- Previously at Sarepta Therapeutics, Translational Biology department (LinkedIn via search snippet).
- Healthcare field work in Guatemala: medical consultations, dental work, vision screenings, health education workshops (LinkedIn via search snippet).
- LinkedIn: linkedin.com/in/tanekim/ — 454 connections (LinkedIn via search snippet).
- Twitter/X: No confirmed public account found.
- GitHub: No confirmed public repos found.

**Co-founder relationship:** Both David Cui and Tane Kim attended Brown University (LinkedIn via search snippets), indicating a shared educational background.

**Founder-market fit:** Tane Kim brings direct clinical and biomedical research experience from Harbor-UCLA/Lundquist Institute and Sarepta Therapeutics, plus medical school training, providing domain credibility for a healthcare product requiring clinical validation workflows. David Cui brings software engineering skills for building the technical platform. Their combination covers the clinical-technical divide needed for a health tech product targeting hospital systems. No advisors, board members, or notable investors beyond Y Combinator were found in public sources.

## Key Risks

**Clinical validation and liability exposure:** AI-generated medical content carries risk if a video contains inaccurate medication instructions or contraindicated advice. While videos are described as "clinician-reviewed" (framewisehealth.com), scaling review across thousands of personalized videos per hospital could bottleneck growth or introduce errors. Mitigation: the clinician review step is built into the workflow.

**Hospital sales cycle length:** Enterprise sales to hospitals typically involve procurement, compliance, IT security review, and clinical committee approval. A 2-person pre-seed team selling into this cycle faces resource constraints. The value-based pricing model (tied to HRRP penalties) may help justify ROI but does not shorten the procurement process.

**Regulatory and reimbursement dependency:** The core value proposition is tied to CMS HRRP penalties. Changes to the HRRP program structure, penalty calculations, or covered conditions could alter the economic justification. In 2024, research identified significant issues with penalty calculations related to Medicare Advantage penetration, potentially redistributing $284M–$297M annually (PMC, 2024), indicating the penalty framework is subject to ongoing policy revision.

**EHR integration complexity:** While FHIR provides a standard, real-world EHR deployments vary significantly across Epic, Cerner/Oracle Health, Meditech, and others. Each hospital integration may require custom work, creating a services-heavy deployment model that is difficult to scale at pre-seed stage.

**Name confusion:** "Framewise" and "Frame Health" overlap with other entities: FrameWise AI (India-based, Tracxn), Frame Health (@framehealth on Twitter, since 2013), and NITRC's Framewise Integrated Real-time MRI Monitoring tool. This may cause search and brand confusion.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Patient Experience Technology: $0.59B in 2024, $1.16B by 2030, 11.8% CAGR (MarketsandMarkets, 2025); U.S. Patient Engagement Solutions: $7.59B in 2024, 19.77% CAGR (Grand View Research, 2024) |
| SAM | No public data found |
| Traction | YC Spring 2026 batch (YC company page); LinkedIn announcement: 257 reactions, 60 comments (LinkedIn, April 2026) |
| Revenue Signal | No public data found |
| Founders | David Cui (Co-founder): Brown University CS & Economics, software engineering background. Tane Kim (Co-founder): Brown University, Lundquist Institute/Harbor-UCLA, Sarepta Therapeutics, medical school background. |
| Competitors | Synthesia ($536.6M raised, $146M ARR, general-purpose AI video); Mytonomy ($46.48M raised, revenue unknown, acquired by Elsevier Mar 2026, pre-made video library); GetWellNetwork ($19M raised, revenue unknown, acquired by SAIGroup Jul 2024, broad patient engagement); Health Recovery Solutions (~$84.7M raised, $23.5M revenue, RPM platform) |
| Moat Signals | EHR/FHIR integration + clinician review workflow create switching costs (framewisehealth.com) |
| Risk Factors | Clinical liability from AI-generated medical content, long hospital sales cycles, CMS HRRP policy dependency |
| Founder Reach | David Cui: LinkedIn 1,273 followers (LinkedIn, April 2026); Tane Kim: LinkedIn 454 connections (LinkedIn via search snippet); Twitter/GitHub: no confirmed accounts for either founder |
| Distribution Signals | No public data found |
| Emails | contact@framewisehealth.com (framewisehealth.com) |
