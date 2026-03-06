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
| YC Partner | Jon Xu |
| Emails | No public data found |

## The Idea

**Problem:** Biologics are specialty medications costing $80–$150K+ per year per patient, typically administered in infusion clinics under a "buy-and-bill" model where providers purchase drugs upfront and seek insurance reimbursement afterward (YC company page). These specialty medications are denied by insurers at a rate of 37% annually—double the typical medication denial rate (Christina Huang LinkedIn post, Jun 2025). When denied, providers absorb the cost of unreimbursed drugs. Medical assistants in rheumatology clinics spend 20+ hours per week on paperwork, faxes, phone calls, and dozens of web portals to manage prior authorizations (Christina Huang LinkedIn post). The current process spans 70+ online portals, disparate paper forms, and manual phone calls (YC company page). The result is $60B in care going unaccessed each year, with patients experiencing months of additional suffering or abandoning treatment entirely (Christina Huang LinkedIn post).

**Approach:** Ruma Care automates prior authorizations through three mechanisms (YC company page): (1) For each medication, diagnosis, and insurance combination, the platform extracts the submission criteria required to get the drug approved by insurers. (2) It pulls out the correct forms and automates form-filling for prior authorizations using EHR-integrated data. (3) It enrolls patients in copay assistance programs—all in one workflow. Additionally, the company launched the Ruma Formulary Navigator (January 21, 2026, LinkedIn via search snippet), a free tool where providers enter an insurance plan, medication, and diagnosis and instantly see coverage rules and prior authorization requirements. As the platform processes prior authorizations, its models learn from denial patterns to understand what insurers need to approve requests (YC company page).

**Differentiation:** Ruma Care focuses specifically on the buy-and-bill specialty medication segment (infusion clinics prescribing biologics) rather than general prior authorization across all care types. Cohere Health ($200M raised) processes 12M+ prior authorization requests annually but focuses primarily on the health plan/payer side, serving as a clinical intelligence platform for insurers (Cohere Health press releases, 2025). Develop Health ($17.6M raised) positions as an "agentic clearinghouse" for medication access broadly, with EHR and PBM integrations (MobiHealthNews, Aug 2025). Waystar ($1B+ annual revenue, public company) offers prior authorization as one module within a comprehensive revenue cycle management platform (Waystar press releases, 2025). Basys.ai ($2.4M raised) targets payers with automation trained on Mayo Clinic data (TechCrunch, Aug 2023). Ruma differentiates by combining formulary navigation, PA automation, and copay enrollment in a single workflow specifically optimized for the high-value biologics niche, and targets the provider side rather than payers.

**Business Model:** No public pricing page was accessible at time of research (website rendered dynamically and content was not extractable). [Inferred]: The most likely monetization path is a SaaS subscription to clinics, potentially on a per-provider or per-authorization basis, given that the product targets infusion clinic workflows and the high dollar value of biologics ($80–$150K+/year per patient) creates significant willingness to pay for authorization success.

**TAM/SAM:** The prior authorization software market was valued at USD $2.76 billion in 2024 and is projected to reach USD $5.99 billion by 2032, growing at a CAGR of 10.2% (Verified Market Research, 2024 via search snippet). An alternative estimate places the electronic prior authorization (ePA) market at USD $3.12 billion in 2024, growing at 18.7% CAGR to reach $16.14 billion by 2033 (Dataintelo, 2024 via search snippet). [Inferred]: The serviceable market for Ruma Care is narrower—specifically infusion clinics and specialty practices prescribing biologics under buy-and-bill arrangements—which represents a subset of the total PA automation market. No public SAM estimate specific to biologics PA was found.

**GTM / Distribution:** Ruma Care targets specialty clinics across rheumatology, dermatology, gastroenterology, and neurology (Meng Fei Shen LinkedIn post, Jun 2025). The company is live across clinics in California and Nevada (Christina Huang LinkedIn post via search snippet). The founders hosted a Biologics Access Symposium with Stanford University School of Medicine on January 24, 2026 (LinkedIn via search snippet), convening clinicians and practice managers. The free Ruma Formulary Navigator (launched January 21, 2026, LinkedIn via search snippet) serves as a lead generation tool by providing immediate value to providers before converting them to the full PA automation platform. [Inferred]: The GTM strategy appears to be direct sales to specialty infusion clinics, supplemented by community-building events and free tools as top-of-funnel.

## Defensibility

Ruma Care's primary defensibility signal is data-driven: as the platform processes prior authorizations, its models learn from denial patterns to understand what insurers need to approve requests (YC company page). Over time, this creates a proprietary dataset mapping medication-diagnosis-insurance combinations to approval criteria—a data asset that compounds with each processed PA. The Ruma Formulary Navigator, offered free, could serve as both a distribution moat and a data collection mechanism by aggregating provider queries about coverage rules.

Switching costs develop as clinics integrate Ruma into daily workflows and rely on its EHR-connected automation. However, at this early stage these effects are nascent.

**Market structure:** Large revenue cycle management incumbents like Waystar (~$1B revenue, processing $1.8T in annual gross claims; Waystar 2025 press release) offer prior authorization as one feature among many. Structurally, Waystar and similar RCM platforms optimize for breadth across the entire revenue cycle rather than depth in a specific medication category. Building deep formulary intelligence for biologics requires domain-specific payer rule extraction and denial pattern modeling that is not core to broad RCM platforms. Additionally, Cohere Health operates primarily on the payer side, creating a business model conflict in also serving providers. [Inferred]: The structural barrier is that incumbents' broad horizontal positioning makes it costly to build the depth of biologics-specific formulary intelligence and copay enrollment workflow integration that Ruma offers.

**Commoditization risk:** The core workflow—extracting payer rules, auto-filling PA forms, submitting to insurers—could be replicated by well-funded competitors such as Develop Health or new entrants. EHR vendors (Epic, Cerner/Oracle Health) could build PA automation natively. The CMS rule mandating FHIR-based PA APIs by 2027 (CMS-0057-F, finalized Jan 2024) could reduce technical barriers to entry over time. The depth of biologics-specific denial pattern data and formulary mapping provides a time-based advantage but is not permanently defensible against a well-resourced competitor willing to specialize.

## Market & Traction

**Traction signals:**
- Live across pilot clinics in California and Nevada (YC company page; Christina Huang LinkedIn post via search snippet)
- Clinics using Ruma Care have reduced denial rates by 50% and cut staff time per prior authorization by 20x (YC company page)
- Biologics Access Symposium co-hosted with Stanford University School of Medicine, January 24, 2026 (LinkedIn via search snippet)
- Ruma Formulary Navigator launched January 21, 2026 (LinkedIn via search snippet), offered free to providers
- Founders spoke with "hundreds of practice managers, doctors, and medical staff" during customer discovery (Meng Fei Shen LinkedIn post, Jun 2025)
- FounderJournal mentioned Ruma Care launch on X (FounderJournal X post via search snippet)
- Company LinkedIn page: https://www.linkedin.com/company/ruma-care (follower count not retrievable)
- Christina Huang Twitter/X: @stina_huang (follower count not retrievable)
- Meng Fei Shen LinkedIn: 2,767 followers (LinkedIn post page, Jun 2025)
- No Product Hunt listing found
- No app store listings found
- No Discord/Slack community found

**Competitive landscape:**

| Competitor | Key Differentiator vs. Ruma Care | Funding | Revenue/ARR |
|-----------|----------------------------------|---------|-------------|
| **Cohere Health** | Payer-side clinical intelligence platform; serves health plans, not providers directly; processes 12M+ PA requests/year for 600K+ providers (Cohere Health press releases) | $200M total (Series C: $90M, May 2025; coherehealth.com) | Revenue unknown |
| **Develop Health** | Broader "agentic clearinghouse" for medication access; integrating with EHRs and PBMs; targets full pharmacy benefit chain (MobiHealthNews, Aug 2025) | $17.6M total (Series A: $14.3M led by Wing VC; MobiHealthNews, Aug 2025) | Revenue unknown |
| **Waystar** | Public company; comprehensive RCM platform with PA as one module; Auth Accelerate reduces submission times by 70% (Waystar press release, 2025) | Public company (NYSE: WAY) | ~$1.01B revenue guidance for 2025 (Waystar SEC filings via search snippet) |
| **Basys.ai** | Payer-focused; trained on 10M+ Mayo Clinic patient records; targets automated utilization management (TechCrunch, Aug 2023) | $2.4M pre-seed (TechCrunch, Aug 2023) | Revenue unknown |

**Why now:** The CMS Interoperability and Prior Authorization Final Rule (CMS-0057-F), finalized January 17, 2024, requires impacted payers to implement FHIR-based Prior Authorization APIs, with initial provisions effective January 1, 2026, and full API requirements by January 1, 2027 (CMS.gov). This regulation mandates faster PA decision turnaround (72 hours for urgent, 7 calendar days for standard) and requires specific denial reasoning. This regulatory shift creates both a compliance catalyst for payers to digitize PA workflows and a technical enabler (standardized APIs) for startups to build against. Separately, 47% of physicians rank automated administrative systems as a top investment priority (Innovaccer 2025 AI Trends in Healthcare report via search snippet). [Inferred]: The convergence of regulatory mandates forcing payer-side digitization and provider-side willingness to invest in automation creates a specific window for PA automation startups to gain adoption.

## Founders & Team

**Meng Fei Shen** — Co-founder & CEO
- Education: Yale University (LinkedIn via search snippet)
- Previously: AI Senior Product Manager at Walmart Data Ventures, leading AI integrations for 100K+ suppliers; led Uber One global to 13M+ members (LinkedIn via search snippet); Entrepreneur in Residence at FedTech; Podcast host of "Startup and Nation" (Apple Podcasts, Spotify)
- Domain experience: Worked as a Medical Assistant at a rheumatology clinic (San Mateo Rheumatology) to understand PA workflows firsthand (LinkedIn post, Jun 2025)
- Also leads a music collective in San Francisco called the Juicy Trees with 100+ musicians from tech and arts (LinkedIn via search snippet)
- Twitter/X: Possible handle @feimeng_ (not confirmed as belonging to this individual; count not retrievable)
- LinkedIn: linkedin.com/in/mengfei-shen — 2,767 followers (LinkedIn post page)
- GitHub: No public repos found confirmed as belonging to this founder

**Christina Huang** — Co-founder & CTO
- Education: Yale University (LinkedIn via search snippet)
- Previously: ML & robotics at Apple (built robots, multimodal models, and voice-assisted experiences); launched 0→1 products at Medallion (led integrations with United Healthcare); prior role at Sigma (Christina Huang LinkedIn post, Jun 2025)
- Personal connection: Has taken biologics for seven years and experienced medication denials firsthand (Christina Huang LinkedIn post)
- Twitter/X: @stina_huang (confirmed via search results; follower count not retrievable)
- LinkedIn: linkedin.com/in/christina-lee-huang (follower count not retrievable)
- GitHub: No public repos found

**Co-founder relationship:** Both founders attended Yale University. Meng Fei Shen's LinkedIn post references Christina Huang by first name, and Christina Huang's LinkedIn post announcing Ruma Care names Meng Fei Shen directly, indicating a pre-existing relationship, likely from their time at Yale.

**Founder-market fit:** The founding team combines direct healthcare domain experience with technical product expertise. Meng Fei Shen embedded himself as a medical assistant in a rheumatology clinic to experience PA workflows directly, and brings product management experience from Uber and Walmart at scale (13M+ Uber One members, 100K+ supplier integrations). Christina Huang brings ML/robotics engineering from Apple, healthcare technology experience from Medallion (UnitedHealthcare integrations), and a deeply personal connection as a biologics patient who has navigated the insurance denial process herself for seven years. The combination of Shen's operational healthcare immersion and product scaling experience with Huang's health-tech engineering background and patient perspective provides both technical capability and domain credibility.

## Key Risks

**Payer resistance to automated approvals:** Insurers may not respond favorably to systematically optimized PA submissions. If payers perceive that AI-generated submissions are gaming approval criteria, they could adjust requirements more frequently or add manual review steps, creating an ongoing cat-and-mouse dynamic that degrades the platform's value proposition.

**EHR integration dependency:** The platform requires EHR-integrated data to auto-fill forms and extract patient information. EHR vendors (Epic, Oracle Health) control integration access and could restrict third-party PA tools, build competing native features, or impose unfavorable API pricing. Epic's App Orchard marketplace, for example, has historically imposed conditions on third-party applications.

**Narrow initial niche limits scale velocity:** Focusing exclusively on biologics at infusion clinics targets a specific subset of the broader PA market. While this enables product depth, it may constrain growth rate if the total number of addressable infusion clinics in the U.S. is limited relative to investor expectations. Expanding beyond biologics would require new payer rule mappings and potentially different workflow integrations.

**CMS FHIR API mandate may commoditize integration layer:** The CMS-0057-F rule requiring FHIR-based PA APIs by January 2027 (CMS.gov, Jan 2024) could reduce the technical complexity of PA automation, lowering barriers to entry for new competitors and enabling EHR vendors to build native PA workflows more easily.

**Regulatory and reimbursement shifts:** Changes to drug pricing policy (e.g., IRA Medicare drug negotiation provisions), biosimilar adoption patterns, or modifications to the buy-and-bill reimbursement model could alter the financial dynamics that make biologics PA so critical for infusion clinics.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.76B in 2024, projected $5.99B by 2032 at 10.2% CAGR (Verified Market Research via search snippet); alternative estimate: $3.12B in 2024, projected $16.14B by 2033 at 18.7% CAGR (Dataintelo via search snippet) |
| SAM | No public data found for biologics-specific PA segment |
| Traction | Pilot clinics live in CA and NV (YC page); 50% denial rate reduction and 20x staff time reduction per PA reported (YC page); Biologics Access Symposium with Stanford Medicine (Jan 24, 2026, LinkedIn via search snippet); Ruma Formulary Navigator launched free (Jan 21, 2026, LinkedIn via search snippet) |
| Revenue Signal | No public data found |
| Founders | Meng Fei Shen (CEO): Yale, led Uber One to 13M+ members, AI PM at Walmart Data Ventures, worked as rheumatology medical assistant. Christina Huang (CTO): Yale, ML/robotics at Apple, healthcare integrations at Medallion, 7-year biologics patient. |
| Competitors | Cohere Health ($200M raised, revenue unknown, payer-side PA intelligence); Develop Health ($17.6M raised, revenue unknown, medication access clearinghouse); Waystar (public, ~$1B revenue, broad RCM with PA module); Basys.ai ($2.4M raised, revenue unknown, payer-focused Mayo Clinic data) |
| Moat Signals | Denial pattern learning from processed PAs creates compounding data asset; free Formulary Navigator as distribution and data moat; biologics-specific formulary intelligence depth |
| Risk Factors | Payer resistance to optimized submissions, EHR integration dependency, CMS FHIR mandate may lower barriers to entry |
| Founder Reach | Meng Fei Shen: LinkedIn 2,767 followers; Christina Huang: Twitter @stina_huang (count not retrievable), LinkedIn linkedin.com/in/christina-lee-huang (count not retrievable) |
| Distribution Signals | Biologics Access Symposium with Stanford Medicine (Jan 2026); free Ruma Formulary Navigator (Jan 2026); FounderJournal X post |
| Emails | No public data found |
