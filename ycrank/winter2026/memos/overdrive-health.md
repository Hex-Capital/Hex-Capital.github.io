# Overdrive Health

> AI Powered Medical Billing

| Field | Value |
|-------|-------|
| Website | https://overdrive.health |
| YC Page | https://www.ycombinator.com/companies/overdrive-health |
| Batch | Winter 2026 |
| Industry | Healthcare / Healthcare Services |
| Team Size | 1 |
| Location | New York, NY, USA |
| Tags | Health Tech, Healthcare, Health Insurance |

**Note on team composition:** The YC company page lists only Michael Schroeder and reports a team size of 1 (YC company page). However, LinkedIn and RocketReach listings identify Daniel Inge as Co-founder & CEO and Michael Schroeder as Co-founder & CTO, suggesting a two-person founding team (LinkedIn search results, RocketReach). The YC page lists Jared Friedman as the primary YC partner (YC company page).

## The Idea

**Problem:** Medical billing in the U.S. is administratively burdensome, error-prone, and expensive. Healthcare providers — particularly smaller practices — struggle with insurance discovery, eligibility verification, medical coding, patient invoicing, and denial management. These processes are typically handled by in-house billing staff or traditional outsourced billing companies, both of which are labor-intensive and costly. Staffing shortages and rising labor costs within in-house billing departments are compounding the problem (Grand View Research, 2025 via search snippet). Providers lose revenue through coding errors, slow claims processing, and unresolved denials.

**Approach:** Overdrive Health offers AI-powered medical billing services covering the full billing lifecycle: automated insurance discovery, eligibility verification, coding, patient invoicing, and denial management (company website). The company positions itself as providing "the best quality insurance and patient billing services for a fraction of the usual cost" (YC company page), suggesting an AI-augmented service model where technology reduces the labor component of billing operations while maintaining or improving billing quality and speed.

**Differentiation:** Traditional medical billing outsourcing companies (e.g., Athenahealth's RCM services, R1 RCM) rely heavily on human billers and coders. Pure-technology competitors like CodaMetrix focus specifically on AI medical coding rather than full-cycle billing. Cedar focuses on the patient payment and financial engagement layer rather than the insurance billing side. Overdrive Health appears to combine AI automation across the entire billing workflow — from insurance discovery through denial management — as a managed service, aiming to deliver both the breadth of an outsourced billing company and the cost efficiency of AI automation.

**Business Model:** No public pricing page was accessible at time of research. [Inferred]: Medical billing services are typically priced as a percentage of collections (commonly 4-10% of collected revenue) or as a flat per-claim fee. Given the company's emphasis on "a fraction of the usual cost," Overdrive likely undercuts traditional billing service pricing by leveraging AI to reduce labor costs per claim.

**TAM/SAM:** The global AI in Medical Billing market is projected to reach $4.49 billion in 2025 and grow at a CAGR of 23.01% to $12.65 billion by 2030 (Mordor Intelligence via search snippet). The U.S. Medical Billing Outsourcing market is estimated at $6.28 billion in 2024, growing at a CAGR of 12.0% from 2025 to 2030 (Grand View Research via search snippet). A separate estimate sizes the global medical billing outsourcing market to reach $40.43 billion by 2033 at a 12.65% CAGR (SNS Insider, January 2026 via search snippet).

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct sales to small and mid-sized healthcare providers (physician practices, specialty clinics) who lack in-house billing infrastructure or are dissatisfied with current outsourced billing vendors. The founders' experience at EliseAI (which sells AI solutions to property management companies) suggests familiarity with B2B service sales into fragmented, operationally complex verticals. The company's Facebook Pixel and Google Ads tracking on its website (observed in site metadata) suggest active digital marketing and lead generation.

## Defensibility

No public defensibility signals (patents, published proprietary datasets, open-source repos) were found at this stage.

[Inferred]: Potential moat could develop via proprietary data accumulation. As Overdrive processes more claims across more specialties and payer types, the AI models could become increasingly accurate at coding, predicting denials, and optimizing claim submissions. Switching costs may build as providers integrate Overdrive into their workflows and depend on its institutional knowledge of their payer mix. However, these advantages are unproven at this stage.

**Market structure:** EHR incumbents (Epic, Oracle Health) are increasingly integrating AI billing features into their platforms (Healthcare Dive, 2026 via search snippet), which could commoditize standalone AI billing. However, [Inferred]: EHR vendors primarily sell software licenses and may resist offering fully managed billing services, as this would require building service operations infrastructure that conflicts with their software-centric business models. Traditional billing outsourcers (R1 RCM, Athenahealth RCM) face business model cannibalization risk — adopting AI would reduce headcount-dependent revenue. This creates a window for AI-native billing services that combine technology and managed service delivery.

**Commoditization risk:** The core components (coding AI, eligibility verification APIs, claim submission) are becoming increasingly available through off-the-shelf tools and APIs. Multiple well-funded competitors (CodaMetrix, Sift Healthcare, Hank AI) are building overlapping AI capabilities. Large language models are reducing the barrier to building medical coding and billing automation. The integration and service layer — combining these components into a reliable managed billing service — provides some differentiation, but the technical moat is narrow.

## Market & Traction

1. **Traction signals:** No public data found. No revenue figures, user counts, customer announcements, app store listings, Product Hunt launches, or community channels were identified. The company website includes Facebook Pixel and Google Ads tracking (observed in site metadata), indicating active marketing efforts. A LinkedIn company page exists (LinkedIn). No Twitter/X account was found for the company. No Discord, Slack, or other community channels were found. No job postings were identified.

2. **Competitive landscape:**

   - **CodaMetrix** ($95M+ raised; $55M Series A in Feb 2023, $40M Series B in Mar 2024, $95M raise in Jun 2025 — MobiHealthNews, FierceHealthcare, LeadsOnTrees via search snippets; revenue not disclosed): Focuses specifically on autonomous AI medical coding integrated with major EHRs (Epic, Cerner). Serves 200+ hospitals and 50,000+ providers (CodaMetrix via search snippet). Differentiator vs. Overdrive: deeper EHR integration and enterprise-scale coding automation, but narrower scope (coding only, not full-cycle billing).

   - **Cedar** ($350M+ raised; $200M Series D led by Tiger Global, $3.2B valuation — FierceHealthcare via search snippet; revenue not disclosed): Focuses on patient financial engagement and payment experience rather than insurance billing. Engages 300,000+ patients per day (Cedar via search snippet). Differentiator vs. Overdrive: patient-facing payment optimization rather than provider-facing insurance billing.

   - **Sift Healthcare** ($41.5M raised; $20M Series B in May 2024 led by B Capital — PR Newswire via search snippet; revenue not disclosed): AI-powered payment analytics for healthcare revenue cycle. Differentiator vs. Overdrive: analytics-first approach to payment optimization rather than managed billing services.

   - **Hank AI** ($6.13M raised; $2.5M seed in Mar 2023 — Tracxn via search snippet; revenue not disclosed): AI medical coding and revenue cycle software focused on anesthesia practices. Differentiator vs. Overdrive: specialty-specific (anesthesia) rather than general medical billing.

3. **Why now:** [Inferred]: Several converging factors have opened this opportunity. First, large language models (GPT-4 and successors, released 2023-2025) have reached sufficient capability to process and interpret complex medical documentation for coding and billing tasks, crossing a technical threshold that was not viable with prior ML approaches. Second, healthcare staffing shortages — particularly in billing and coding roles — have accelerated since the COVID-19 pandemic, increasing demand for automation (Grand View Research, 2025 via search snippet). Third, the UnitedHealthcare CEO shooting in December 2024 brought intense public scrutiny to health insurance claims processing and denials, potentially increasing provider appetite for tools that aggressively fight denials and optimize reimbursement.

## Founders & Team

**Daniel Inge** — Co-founder & CEO
- B.S. and M.S. in Computer Science, Harvard University (Harvard Edge Computing Lab alumni page; LinkedIn search results)
- Previously: Software Engineer at Jane Street, building trading systems (Harvard Edge Computing Lab page; LinkedIn search results)
- Previously: Built AI agents at EliseAI, a healthcare AI unicorn ($250M Series E) (YC company page; LinkedIn search results)
- Research affiliation: Harvard Edge Computing Lab alumnus (edge.seas.harvard.edu)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/daniel-inge/ (LinkedIn search results)
- GitHub: No public repos found

**Michael Schroeder** — Co-founder & CTO
- Duke University (YC company page; LinkedIn search results)
- Previously: Built AI agents at EliseAI (YC company page)
- Previously: Automating operations at Up&Up (real estate) and Citadel (recruiting) (YC company page)
- Twitter/X: No confirmed account found (search returned unrelated Michael Schroeder accounts)
- LinkedIn: linkedin.com/in/michael-schroeder-217513bb/ (LinkedIn search results)
- GitHub: No confirmed public repos found

**Co-founder relationship:** Both Daniel Inge and Michael Schroeder previously worked at EliseAI, a healthcare AI company. This shared employer represents a direct professional connection prior to founding Overdrive Health.

**Founder-market fit:** Both founders built AI agents at EliseAI, a healthcare-focused AI unicorn, giving them direct experience applying AI automation to complex, regulated service industries. Inge's background combines quantitative rigor (Jane Street trading systems) with Harvard CS degrees and healthcare AI experience. Schroeder brings operations automation experience across multiple industries (real estate at Up&Up, recruiting at Citadel) plus the shared EliseAI healthcare AI background. Their combined experience spans AI engineering, healthcare operations, and systems-level automation — directly relevant to building an AI-powered medical billing service.

## Key Risks

**EHR platform integration risk:** Major EHR vendors (Epic, Oracle Health) are increasingly building AI billing features directly into their platforms (Healthcare Dive, 2026 via search snippet). If EHR-native AI billing becomes sufficiently capable, providers may prefer an integrated solution over a standalone service, reducing Overdrive's addressable market. No mitigation evidence found.

**Crowded and well-funded competitive field:** CodaMetrix ($95M+), Cedar ($350M+), and Sift Healthcare ($41.5M) have raised substantially more capital and have established customer bases in adjacent segments of the medical billing value chain. Any of these could expand into full-cycle managed billing services. No mitigation evidence found.

**Regulatory and compliance exposure:** Medical billing involves HIPAA-protected health information, complex payer-specific coding rules, and fraud/abuse regulations (False Claims Act). AI-generated billing codes that produce errors could expose providers to compliance risk, creating potential liability for Overdrive and resistance from risk-averse provider organizations. No mitigation evidence found.

**Provider sales cycle and trust barrier:** Healthcare providers are typically slow to switch billing vendors due to revenue continuity concerns and the operational risk of billing disruptions. As a pre-seed startup with no public customer references, Overdrive faces the challenge of convincing providers to entrust their revenue cycle to a new, unproven service. No mitigation evidence found.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $4.49B AI in Medical Billing market in 2025, 23.01% CAGR to $12.65B by 2030 (Mordor Intelligence via search snippet); $6.28B U.S. Medical Billing Outsourcing market in 2024, 12.0% CAGR (Grand View Research via search snippet) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Daniel Inge (CEO): Harvard BS/MS CS, ex-Jane Street, ex-EliseAI. Michael Schroeder (CTO): Duke, ex-EliseAI, ex-Up&Up, ex-Citadel |
| Competitors | CodaMetrix ($95M+ raised, revenue unknown, autonomous coding focus vs. full-cycle billing); Cedar ($350M+ raised, revenue unknown, patient payment focus vs. insurance billing); Sift Healthcare ($41.5M raised, revenue unknown, payment analytics vs. managed billing); Hank AI ($6.13M raised, revenue unknown, anesthesia-specific vs. general billing) |
| Moat Signals | No public data found |
| Risk Factors | EHR vendors building native AI billing, well-funded competitors in adjacent segments, regulatory/compliance exposure in AI-generated billing |
| Founder Reach | Daniel Inge: Twitter not found, LinkedIn linkedin.com/in/daniel-inge/, GitHub not found. Michael Schroeder: Twitter not found, LinkedIn linkedin.com/in/michael-schroeder-217513bb/, GitHub not found |
| Distribution Signals | No public data found (Facebook Pixel and Google Ads tracking observed on company website) |
