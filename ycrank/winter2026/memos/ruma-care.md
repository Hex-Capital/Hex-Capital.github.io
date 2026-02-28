# Ruma Care

> We help clinics get patients on biologics faster

| Field | Value |
|-------|-------|
| Website | https://rumacare.com |
| YC Page | https://www.ycombinator.com/companies/ruma-care |
| Batch | Winter 2026 |
| Industry | Healthcare / Healthcare |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Healthcare, AI |

## The Idea

**Problem:** Biologics are specialty medications costing $80–$150K+ per year per patient, often administered in infusion clinics under a "buy-and-bill" model where providers purchase the drug upfront and seek reimbursement from insurers. These medications are denied by insurers at a rate of 37% annually (YC company description). When denied, providers absorb the unreimbursed drug cost. The American College of Rheumatology reports that 89% of rheumatologists experience regular delays in patient access due to insurance barriers, and each denied biologic infusion represents $2,000–$8,000 in lost revenue, with the average rheumatology practice facing 30–50 denials monthly — translating to $720K–$4.8M in annual at-risk revenue (CounterForce Health). The current process spans 70+ online portals, paper forms, and manual phone calls (YC company description). Today, clinic staff handle this manually across payer-specific portals.

**Approach:** Ruma Care automates prior authorizations for specialty medications through three mechanisms: (1) extracting insurer-specific submission criteria for each medication-diagnosis-insurance combination, (2) automating form retrieval and form-filling for prior authorization submissions, and (3) enrolling patients in copay assistance programs — all within one platform. The company also offers the Ruma Formulary Navigator, a free tool allowing providers to check coverage rules and prior authorization requirements by entering insurance plan, medication, and diagnosis (YC page). As the platform processes prior authorizations, its models learn from denial patterns to improve approval rates (YC company description).

**Differentiation:** Ruma Care positions itself as the first "biologics-first" platform that unifies medical and pharmacy benefit workflows and goes beyond form delivery by assembling complete prior authorization packets with auto-attached labs and therapy history (web search snippet from rumacare.com). Existing solutions differ in approach:
- CoverMyMeds (McKesson, acquired for $1.1B in 2017; Modern Healthcare) operates the largest PA network but serves broadly across medication types, primarily charging drug manufacturers rather than providers.
- Cohere Health ($200M total funding, $90M Series C in May 2025; Cohere Health press release) focuses on the payer side, automating clinical decision-making for health plans rather than provider-side submissions.
- Infinitus Systems ($102.9M total funding; Axios, Oct 2024) automates healthcare phone calls including PA follow-up, rather than form-filling and criteria extraction.
- Waystar (public company, ~$1.09B 2025 revenue guidance; Waystar investor relations) offers broad revenue cycle management with an authorization module, not specialty-biologic-specific.

**Business Model:** No pricing page was accessible on the Ruma Care website at time of research. The Ruma Formulary Navigator is described as "free" (YC page). [Inferred]: The most likely monetization path is SaaS subscription or per-authorization transaction fees charged to infusion clinics and specialty practices, given that the buy-and-bill model creates high financial exposure for providers, making PA automation a direct cost-recovery tool.

**TAM/SAM:** The global Electronic Prior Authorization (ePA) market was valued at $3.12B in 2024 and is projected to reach $16.14B by 2033 at an 18.7% CAGR, with North America accounting for ~48% market share (~$1.5B in 2024) (Dataintelo, 2025 via search snippet). The specialty pharmaceuticals market grew from $92B in 2023 to $129B in 2024 (Definitive Healthcare via search snippet). CMS estimates $15B in savings over 10 years from improving prior authorization processes (CMS-0057-F rule documentation). No public SAM data specific to biologics-only PA automation was found.

**GTM / Distribution:** The company reports live operations across California and Nevada clinics (YC page). Meng Fei Shen worked as a Medical Assistant at San Mateo Rheumatology, a rheumatology practice with infusion therapy services (LinkedIn). [Inferred]: Initial distribution is likely direct sales to rheumatology and infusion clinics, leveraging the CEO's firsthand clinical relationships and domain knowledge. The free Formulary Navigator tool may serve as a lead-generation mechanism.

## Defensibility

The company claims its models learn from denial patterns to understand what insurers need to approve prior authorizations (YC company description). This represents a potential data flywheel: as more authorizations are processed, the system accumulates payer-specific denial pattern data that could improve approval rates over time. The company reported a 50% reduction in denial rates among users (YC page), which, if sustained, creates switching costs for clinics that have integrated the platform into their workflows.

**Market structure:** CoverMyMeds, the largest incumbent, monetizes by charging drug manufacturers rather than providers, creating a business model misalignment for building provider-side PA optimization tools. Waystar and other RCM companies serve broad provider needs and lack deep specialization in biologics-specific PA criteria, where each medication-diagnosis-payer combination has unique submission requirements. Payer-side companies like Cohere Health are structurally aligned with insurers, not providers. [Inferred]: The biologics buy-and-bill niche requires deep domain knowledge of infusion clinic workflows, drug-specific documentation, and payer-specific criteria — a specialization that broad-platform incumbents have less incentive to build given the narrow initial market.

**Commoditization risk:** The core technology (LLM-based form extraction, criteria matching, and form-filling) is technically reproducible. Larger healthcare IT companies (Epic, Waystar, CoverMyMeds) could build similar functionality. The defensibility hinges on accumulation of proprietary denial-pattern data and payer-specific criteria mappings across the biologics formulary, plus deep workflow integration into infusion clinics.

## Market & Traction

**Traction signals:**
- Live operations across California and Nevada clinics (YC page)
- 50% reduction in denial rates reported among users (YC page)
- 20x reduction in staff time per prior authorization reported (YC page)
- Ruma Formulary Navigator offered as a free tool (YC page)
- LinkedIn company page: https://www.linkedin.com/company/ruma-care (follower count not retrievable)
- GitHub organization: https://github.com/rumacare (public repos not confirmed; the "ruma" GitHub org is an unrelated Matrix chat project)
- No Product Hunt launch found
- No Twitter/X company account found
- No press coverage in named publications found
- No app store listings found
- No Discord/Slack community found

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Ruma Care |
|---|---|---|
| CoverMyMeds (McKesson) | Acquired for $1.1B (2017; Modern Healthcare) | Largest PA network; serves all medication types; monetizes via drug manufacturers, not providers |
| Cohere Health | $200M total ($90M Series C, May 2025; Cohere Health press release) | Payer-side platform automating clinical decisions for health plans; handles 12M+ PA requests annually |
| Infinitus Systems | $102.9M total ($51.5M Series C, Oct 2024; Axios) | Automates PA-related phone calls via AI voice agents rather than form-filling; backed by a16z |
| Waystar | Public company (~$1.09B 2025 revenue guidance; Waystar IR) | Broad RCM platform with authorization module; not specialty-biologic-specific |
| Infinx | Undisclosed (seed from KKR, Norwest; Tracxn) | AI + human-in-the-loop PA solution; acquired Glidian (Mar 2025); ~$170M annual revenue (Tracxn via search snippet) |

**Why now:** The CMS Interoperability and Prior Authorization Final Rule (CMS-0057-F) took effect January 1, 2026, requiring managed care plans to provide standard PA decisions within seven days (down from 14) and provide specific denial reasons, with API-based data exchange requirements following in January 2027 (CMS rule documentation). Insurers covering 250M+ Americans have committed to streamlining PA burdens by end of 2026 (Newswire via search snippet). [Inferred]: This regulatory shift creates urgency for both payers and providers to digitize PA workflows, expanding the addressable market for automation tools. Simultaneously, advances in LLM capabilities enable extraction and processing of complex, unstructured payer criteria documents at a cost and speed not previously feasible.

## Founders & Team

**Meng Fei Shen** — Co-founder & CEO
- Yale University, East Asian Studies; studied abroad at Yale-NUS Singapore (Yale News, 2019)
- Previously: AI Senior Product Manager at Walmart Data Ventures, working on AI integrations for 100K+ suppliers (LinkedIn); led Uber One global membership to 13M+ members (YC page via search snippet); Medical Assistant at San Mateo Rheumatology, a rheumatology practice with infusion therapy (LinkedIn)
- Entrepreneur in Residence at FedTech; Podcast Host of "Startup and Nation" (LinkedIn)
- Twitter/X: No confirmed public account found
- LinkedIn: linkedin.com/in/mengfei-shen — 500+ connections (LinkedIn)
- GitHub: No public repos found

**Christina Huang** — Co-founder & CTO
- Yale University (LinkedIn)
- Previously: ML & robotics engineer at Apple (built robots, multimodal models, voice-assisted experiences); led integrations with United Healthcare at Medallion (YC page); software engineering at Bloomberg LP; NASA Jet Propulsion Laboratory (developed/tested software tools for Deep Space Network data processing) (LinkedIn via search snippet)
- Developed JavaScript software for CT scanners improving CT-guided spinal biopsy accuracy by 50% for novice users (LinkedIn via search snippet)
- Built iOS textbook-sharing app launched on UCLA campus in January 2017 (LinkedIn via search snippet)
- Twitter/X: No confirmed public account found
- LinkedIn: linkedin.com/in/christina-lee-huang — 500+ connections (LinkedIn)
- GitHub: github.com/christina-huang — 1 public repo (GitHub)

**Co-founder relationship:** Both founders attended Yale University and met in Yale's CS50 class freshman year, where they built a Yale dining app for food ratings (LinkedIn post by Christina Huang / Meng Fei Shen). They subsequently went to work at large tech companies (Apple, Uber, Walmart) and startups (Medallion, Sigma) before reuniting to found Ruma Care (LinkedIn posts).

**Founder-market fit:** Meng Fei Shen brings direct clinical experience as a Medical Assistant at a rheumatology practice that administers infusion therapy — the exact customer profile Ruma Care targets. This provides firsthand understanding of the PA workflow pain points. Her product management experience scaling Uber One to 13M+ members and building AI integrations at Walmart demonstrates ability to ship at scale. Christina Huang's engineering background at Apple (ML/robotics), healthcare integration experience at Medallion (United Healthcare integrations), and medical device software work (CT-guided biopsy tool) combine healthcare domain knowledge with technical execution capability.

## Key Risks

**Payer-side regulatory shifts reducing PA burden:** The CMS-0057-F rule and voluntary insurer commitments to streamline PA could reduce the volume and complexity of prior authorizations, potentially shrinking the addressable problem. If payers automate approvals or eliminate PA requirements for certain biologics, the value proposition diminishes. Mitigation: the 37% denial rate and entrenched payer incentives to control specialty drug costs suggest PA requirements are unlikely to disappear for high-cost biologics in the near term.

**Incumbent platform expansion:** CoverMyMeds (McKesson) already operates the largest PA network and could add biologics-specific functionality. Waystar announced PA automation expansion in 2025 (Waystar press release, Feb 2025). Epic and other EHR vendors could integrate PA automation directly into clinical workflows. The two-person team faces resource asymmetry against these incumbents.

**Buy-and-bill model concentration risk:** Ruma Care's initial focus on infusion clinics using the buy-and-bill model ties the business to a specific reimbursement structure. Shifts toward specialty pharmacy distribution, white-bagging, or brown-bagging for biologics would move volume away from provider-administered settings and reduce the target customer base.

**Brand disambiguation:** Multiple entities use the "Ruma" name — RUMA Alliance (UK veterinary), RUMA Medical (aesthetics practice), Ruma (Matrix chat protocol on GitHub), and Ruma Care Support Services Limited (UK company, Companies House). This creates potential confusion in search results and brand recognition.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3.12B global ePA market in 2024, projected $16.14B by 2033 at 18.7% CAGR; North America ~$1.5B in 2024 (Dataintelo, 2025 via search snippet) |
| SAM | No public data found for biologics-specific PA automation segment |
| Traction | Live in California and Nevada clinics; 50% denial rate reduction reported; 20x staff time reduction per PA reported (YC page) |
| Revenue Signal | No public data found |
| Founders | Meng Fei Shen (CEO): Yale, ex-Uber (Uber One 13M+ members), ex-Walmart Data Ventures, Medical Assistant at rheumatology clinic. Christina Huang (CTO): Yale, ex-Apple ML/robotics, ex-Medallion (UHC integrations), ex-NASA JPL |
| Competitors | CoverMyMeds ($1.1B acquisition by McKesson, broad PA network); Cohere Health ($200M raised, payer-side PA); Infinitus Systems ($102.9M raised, AI phone call automation); Waystar (public, ~$1.09B revenue, broad RCM); Infinx (undisclosed funding, ~$170M revenue, AI+human PA) |
| Moat Signals | Denial-pattern learning data flywheel; biologics-specific criteria mappings; 50% denial rate reduction claim (YC page) |
| Risk Factors | Regulatory reduction of PA burden, incumbent platform expansion, buy-and-bill model concentration risk |
| Founder Reach | Meng Fei Shen: Twitter not found, LinkedIn 500+, GitHub not found. Christina Huang: Twitter not found, LinkedIn 500+, GitHub 1 repo |
| Distribution Signals | No public data found |
