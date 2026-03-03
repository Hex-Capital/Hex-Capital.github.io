# ClaimGlide

> AI automated prior-auths for private medical practices

| Field | Value |
|-------|-------|
| Website | https://claimglide.com/ |
| YC Page | https://www.ycombinator.com/companies/claimglide |
| Batch | Winter 2026 |
| Industry | Healthcare / Healthcare Services |
| Team Size | 1 |
| Location | No public data found |
| Tags | Digital Health, Healthcare, AI, AI Assistant |
| YC Partner | Jared Friedman |
| Emails | contact@claimglide.com |

## The Idea

**Problem:** Private medical practices lose revenue and incur significant administrative costs from the prior authorization process — the requirement that providers obtain insurer approval before delivering certain services or prescriptions. The company states it "increases revenue for private medical practices by increasing their prior-auth acceptance rate and speed to auth" (YC company page). The current process is largely manual: staff must pull patient data, fill payer-specific forms, track submission status, follow up on delays, and handle denials and appeals. The AMA has repeatedly documented that prior authorization burdens contribute to care delays and physician burnout. Private practices, lacking the administrative scale of hospital systems, are disproportionately affected.

**Approach:** ClaimGlide automates the full prior authorization lifecycle end-to-end: (1) creating and submitting requests using payer-approved language and auto-pulling provider, patient, and diagnosis codes from EMR systems; (2) following up with payers by tracking timelines, flagging delays, and managing communications; (3) appealing denials via auto-generated appeal letters and phone calls to payers; (4) storing evidence including confirmation numbers and updating practice management systems to prevent lost approvals (company website). The platform integrates with major EMR systems including eClinicalWorks, athenahealth, NextGen Healthcare, and ModMed (company website). The system is described as HIPAA-compliant (company website).

**Differentiation:** Most well-funded prior authorization competitors (Cohere Health, Basys.ai) serve the payer/health plan side, automating the insurer's review process rather than the provider's submission process. CoverMyMeds (owned by McKesson) and Develop Health focus primarily on pharmacy prior authorizations. ClaimGlide targets private medical practices specifically on the provider submission side, covering medical (not just pharmacy) prior authorizations. Foundation Health's PAIGE AI covers some overlapping functionality but focuses on pharmacy operations. [Inferred]: The specific focus on private practices (vs. hospitals or health systems) and the provider-side submission workflow (vs. payer-side adjudication) positions ClaimGlide in a narrower but less contested niche.

**Business Model:** No pricing information is publicly available on the company website. [Inferred]: Most likely monetization path is per-practice SaaS subscription or per-authorization transaction fee, given the B2B healthcare software norm and the company's positioning as "cheaper" than current manual processes.

**TAM/SAM:** The Prior Authorization Software market was valued at $2.2 billion in 2023 and is projected to reach $7.4 billion by 2030 at a CAGR of 19.2% (Verified Market Reports via search snippet). The Electronic Prior Authorization market reached $3.12 billion in 2024 and is projected to grow at 18.7% CAGR to $16.14 billion by 2033 (Dataintelo via search snippet). No public SAM estimate found specifically for the provider-side private practice segment.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct outbound sales to private practice office managers and billing departments, supplemented by EMR marketplace listings (given existing integrations with eClinicalWorks, athenahealth, NextGen, ModMed). The demo-booking flow via Calendly on the company website suggests a sales-led motion.

## Defensibility

No defensibility signals found in public sources at this stage. [Inferred]: Potential moat could develop via (1) EMR integration depth — once connected to a practice's EMR and PM system, switching costs increase; (2) accumulated data on payer-specific approval language and denial patterns, which could improve AI accuracy over time; (3) workflow lock-in as the system becomes embedded in daily practice operations. These are unproven at this stage.

**Market structure:** The CMS Interoperability and Prior Authorization Final Rule (CMS-0057-F), effective January 1, 2026, mandates that payers implement Prior Authorization APIs using HL7 FHIR standards and respond within 72 hours for urgent and 7 days for standard requests (CMS.gov). This creates a structural opening: as payers build standardized APIs, software that can programmatically submit and track authorizations via those APIs gains a technical advantage over manual workflows. Large EMR incumbents (Epic, Cerner/Oracle Health) could build native prior authorization automation, but [Inferred]: their focus on enterprise hospital systems and complex sales cycles may slow their penetration into the fragmented private practice market.

**Commoditization risk:** The core workflow — auto-filling forms from EMR data, submitting to payer portals, tracking status, generating appeals — is technically replicable by any team with EMR integration expertise and LLM capabilities. Multiple funded competitors already operate in adjacent segments of the prior authorization market (see Competitive Landscape below). The barrier is less about technical novelty and more about EMR integration depth and payer-specific knowledge accumulation.

## Market & Traction

**Traction signals:** No public data found for revenue, user counts, customer counts, or growth metrics. No Product Hunt launch found. No app store listings found. No press coverage in named publications found.
- Company Twitter/X: No company account found.
- Founder Twitter/X: @NamiLindquist — approximately 28 followers (X.com via search snippet).
- Company LinkedIn: No company page found.
- Founder LinkedIn: linkedin.com/in/namilindquist (headline: SpaceX) (LinkedIn via search snippet).
- Discord/Slack community: No public data found.
- Job postings: 0 listed positions (YC company page).
- Web traffic: No public data found.

**Competitive landscape:**

1. **Cohere Health** ($200M total raised; $90M Series C, May 2025; led by Temasek; processes 12M+ PA requests annually — Cohere Health press release). Serves the payer side, automating clinical decision-making for health plans. Key differentiator vs. ClaimGlide: Cohere works for insurers reviewing authorizations, not providers submitting them.

2. **Develop Health** ($17.6M total raised; $14.3M Series A, Aug 2025; led by Wing Venture Capital — BusinessWire). Automates pharmacy prior authorizations and benefits verification for digital health companies (clients include Ro, LifeMD). Key differentiator vs. ClaimGlide: pharmacy-focused rather than medical-benefit-focused, and serves digital health companies rather than private practices.

3. **Foundation Health** ($26M total raised; $20M Series A, Oct 2025 — GlobeNewsWire). AI pharmacist assistant "PAIGE AI" automating patient communication and prior authorization across pharmacy and medical benefits, integrated with Epic. Key differentiator vs. ClaimGlide: pharmacy-operations-first approach with broader scope; serves larger health systems rather than private practices.

4. **Basys.ai** ($2.4M pre-seed, 2023; backed by Nina Capital, Eli Lilly, Mayo Clinic — TechCrunch). Automates up to 90% of PA requests using generative AI trained on Mayo Clinic's longitudinal data. Key differentiator vs. ClaimGlide: serves health plans (payer side) rather than providers; trained on large-scale clinical datasets.

5. **CoverMyMeds** (subsidiary of McKesson, a $250B+ revenue company). Large-scale platform simplifying pharmacy and medical prior authorizations. Key differentiator vs. ClaimGlide: incumbent scale and payer network; broad hospital and health system focus vs. ClaimGlide's private practice focus.

**Why now:** The CMS Interoperability and Prior Authorization Final Rule (CMS-0057-F), finalized February 2024 and taking effect January 1, 2026, requires impacted payers to implement standardized Prior Authorization APIs using HL7 FHIR, respond within mandated timeframes (72 hours expedited, 7 days standard), and publicly report PA metrics (CMS.gov). This regulatory mandate creates a specific technical surface — standardized APIs — that automated submission tools can target. Additionally, [Inferred]: advances in LLM capabilities in 2024–2025 enable more accurate generation of payer-approved clinical language for PA submissions, a capability that was not feasible with prior-generation NLP.

## Founders & Team

**Nami Lindquist** — Founder & CEO (solo founder)
- Education: Dual degree in Computer Science and Economics/Finance, Jerome Fisher Program in Management & Technology (Wharton + Penn Engineering), University of Pennsylvania (Penn Today).
- Prior experience: Software Engineer Intern at SpaceX (LinkedIn via search snippet). Co-founder of Sync Labs, an AI-driven senior care startup that won the 2025 President's Innovation Prize ($100,000 award + $50,000 living stipend per team member), raised over $400,000 in non-equity funding, and conducted seven pilot studies with senior care facilities including Insight Living, Ativo, and Home Instead (Penn Today, Feb 2025). Published author of "Becoming Your Own Best Friend" (Amazon). Personal finance course instructor on Udemy.
- From Bellevue, Washington.
- Twitter/X: @NamiLindquist — approximately 28 followers (X.com via search snippet). Count not independently verified due to JavaScript rendering.
- LinkedIn: linkedin.com/in/namilindquist — headline listed as "SpaceX" (LinkedIn via search snippet).
- GitHub: No public repos found.
- Medium: medium.com/@namilindquist
- Substack: namilindquist.substack.com

**Co-founder relationship:** Solo founder — not applicable.

**Founder-market fit:** Lindquist's background is in computer science (Penn M&T, SpaceX engineering internship) and AI-driven startup building (Sync Labs senior care platform with pilot deployments). No documented prior experience in healthcare revenue cycle management, prior authorization, or medical billing is visible in public sources. [Inferred]: The Sync Labs experience demonstrates ability to build healthcare-adjacent AI products, navigate pilot deployments with care facilities, and win competitive funding, but the pivot from senior care AI to prior authorization automation represents a domain shift.

## Key Risks

**Solo founder execution risk for an integration-heavy product:** ClaimGlide requires live integrations with multiple EMR systems (eClinicalWorks, athenahealth, NextGen, ModMed) and payer portals. Building and maintaining these integrations — each with distinct APIs, authentication schemes, and data formats — is engineering-intensive. With a team size of 1, the pace of integration development and customer support is structurally constrained.

**Incumbent EMR vendor competition:** Major EMR vendors (athenahealth, eClinicalWorks, NextGen) already offer some prior authorization workflow features within their platforms. As the CMS-0057-F rule takes effect in 2026, EMR vendors have both the incentive and the distribution advantage (existing install base) to build or acquire native prior authorization automation, which could compress the opportunity for standalone tools.

**Payer-side competitor expansion into provider tools:** Well-funded payer-side prior authorization companies (Cohere Health at $200M raised, Foundation Health at $26M) could expand their platforms to offer provider-facing submission tools, leveraging their existing payer relationships and data to create bundled solutions that standalone provider-side tools cannot match.

**Domain expertise gap:** No documented prior experience in healthcare revenue cycle management, medical billing, or prior authorization is visible in public sources for the founder. Navigating payer-specific policies, HIPAA compliance at scale, and the complexities of medical coding requires deep domain knowledge that typically takes significant time to acquire.

**Regulatory dependency:** The "why now" thesis depends partly on the CMS-0057-F rule creating standardized APIs. If payer implementation is delayed, incomplete, or varies significantly across payers (as has occurred with prior CMS interoperability mandates), the technical foundation for automated submission may be less reliable than anticipated.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Prior Authorization Software market: $2.2B (2023), projected $7.4B by 2030 at 19.2% CAGR (Verified Market Reports via search snippet) |
| SAM | No public data found for provider-side private practice segment specifically |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Nami Lindquist (Founder & CEO): Penn M&T (CS + Finance), SpaceX SWE intern, Sync Labs co-founder (2025 President's Innovation Prize, $400K+ non-equity funding) |
| Competitors | Cohere Health ($200M raised, revenue unknown, payer-side focus), Develop Health ($17.6M raised, revenue unknown, pharmacy PA for digital health cos), Foundation Health ($26M raised, revenue unknown, pharmacy operations + PA), Basys.ai ($2.4M raised, revenue unknown, payer-side AI PA), CoverMyMeds (McKesson subsidiary, incumbent scale) |
| Moat Signals | No public data found |
| Risk Factors | Solo founder for integration-heavy product, EMR vendor native competition, domain expertise gap |
| Founder Reach | Nami Lindquist: Twitter/X ~28 followers, LinkedIn (headline: SpaceX), GitHub not found |
| Distribution Signals | No public data found |
| Emails | contact@claimglide.com |
