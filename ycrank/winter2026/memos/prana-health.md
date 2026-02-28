# Prana

> An AI primary care doctor in your pocket

| Field | Value |
|-------|-------|
| Website | https://pranadoc.com |
| YC Page | https://www.ycombinator.com/companies/prana-health |
| Batch | Winter 2026 |
| Industry | Healthcare / Consumer Health and Wellness |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Health Tech |
| YC Partner | Tyler Bosmeny |
| Emails | support@pranadoc.com (company website) |

## The Idea

**Problem:** Primary care in the U.S. is reactive and episodic. Patients see a doctor for a 15-minute annual physical, and between visits, gradual health deterioration — rising blood pressure, creeping glucose levels — goes undetected until it becomes acute. The company calls this problem "clinical drift." Traditional primary care is also constrained by physician supply: administrative work (history taking, logistics, triage) consumes the majority of a visit, limiting throughput and driving up costs. Patients today rely on infrequent in-person physicals or use symptom-checker chatbots that lack the ability to prescribe, order labs, or integrate with medical records.

**Approach:** Prana positions itself as a "full-stack medical provider" rather than a chatbot. The platform connects to patients' medical records and wearable devices to continuously monitor health signals. When the AI detects concerning trends, it flags them proactively. The platform also offers free AI-powered consultations for symptom analysis and connects patients to licensed physicians via video for $39 per visit. Prescriptions can be sent directly to pharmacies. The company claims to automate 90% of administrative tasks (history intake, triage, logistics) so that human physicians focus on clinical decision-making (YC company page). The service is available across all 50 U.S. states (pranadoc.com).

**Differentiation:** Prana differentiates from pure AI symptom-checker chatbots (e.g., Ada Health, Buoy Health) by functioning as a licensed medical provider that can prescribe medications and manage care longitudinally. Compared to traditional telehealth platforms (e.g., Teladoc, Amwell), Prana emphasizes continuous monitoring via wearable and EHR integration rather than episodic on-demand visits. Compared to Lotus Health AI ($41M raised, free model funded by premium sponsorships; TechCrunch, Feb 2026), Prana charges $39 per physician visit with no subscription. Compared to K Health ($441M raised, $900M valuation; Businesswire, Jul 2024), which partners with large health systems, Prana targets direct-to-consumer and self-insured employers. Forward Health, which pursued a hardware-centric "CarePod" model with $657M raised, shut down in November 2024 (Maginative, Nov 2024), leaving a gap in AI-first primary care.

**Business Model:** Prana offers a freemium model: free AI health consultation and $39 per physician video visit, with no subscription or insurance required (pranadoc.com). The YC page also mentions seeking "pilots with self-insured employers who care about reducing metabolic risk in their workforce" (YC company page via search snippet), suggesting a B2B2C channel where employers pay for employee access. [Inferred]: The $39 per-visit model may serve as the consumer acquisition funnel, with employer contracts providing higher-value recurring revenue.

**TAM/SAM:** The global telehealth market was valued at $153.84B in 2025, projected to reach $1,272.81B by 2034 (Fortune Business Insights, 2025 via search snippet). The U.S. telehealth and telemedicine market is projected to grow from $51.40B in 2025 to $83.63B by 2030 (MarketsandMarkets, 2025 via search snippet). The U.S. virtual care market specifically was valued at $3.94B in 2025, expected to reach $48.54B by 2034 at a 32.45% CAGR (Precedence Research, 2025 via search snippet). The direct primary care market was estimated at $59.68B–$70.42B globally in 2025, depending on source (InsightAce Analytic; The Business Research Company, 2025 via search snippets).

**GTM / Distribution:** The company website offers direct-to-consumer sign-up at pranadoc.com. The YC page mentions pursuing self-insured employer pilots as a B2B channel. [Inferred]: The free AI consultation likely serves as a top-of-funnel acquisition mechanism, converting users to paid physician visits and potentially to employer-sponsored plans. The all-50-states availability suggests the company has established a multi-state physician licensing or collaboration framework.

## Defensibility

The company's continuous monitoring model, which integrates wearable data and EHR records over time, creates a data flywheel: the longer a patient uses Prana, the more health history the system accumulates, increasing switching costs. The physician-in-the-loop model — where AI handles triage and the physician focuses on high-leverage decisions — creates a unit economics advantage if the company can demonstrate higher physician throughput than competitors.

At this stage, no patents, proprietary datasets, or network effects have been identified from public sources. The CTO's quantitative finance background (building "high-frequency data infrastructure for health signals") suggests a technical approach to real-time signal processing, but the specifics of any proprietary algorithms are not publicly disclosed.

**Market structure:** Large incumbents (e.g., UnitedHealth/Optum, CVS/Aetna) own primary care practices but are constrained by fee-for-service billing models that make a $39-per-visit or free-AI-triage model economically cannibalistic to their existing revenue streams. Amazon One Medical launched an agentic Health AI assistant in January 2026 (CNBC, Jan 2026), representing a direct competitive threat from a well-resourced incumbent — though Amazon's model requires a $199/year membership (or $99 with Prime), creating a higher cost floor. [Inferred]: The structural barrier for insurance-based incumbents is that continuous AI monitoring doesn't fit neatly into CPT-coded fee-for-service reimbursement, making it difficult for legacy providers to replicate without business model transformation.

**Commoditization risk:** The core technology stack — LLM-based symptom analysis, wearable data integration, and telehealth video visits — uses widely available components. Multiple well-funded competitors (K Health, Lotus Health, Amazon One Medical) are building similar AI-physician hybrid models. The barrier to commoditization lies in clinical workflow integration, multi-state physician licensing, and sustained quality of the AI triage layer, none of which constitute a durable technical moat on their own.

## Market & Traction

**Traction signals:**
- "Live in beta with early users" (YC company page, Winter 2026 batch)
- 4.9/5 stars from 3,412 reviews (pranadoc.com — self-reported on company website; independent verification not found)
- Treats "over 100 common conditions" (pranadoc.com)
- Integration with 50,000+ healthcare organizations for health records (Extruct AI page via search snippet — unverified)
- Instagram reel featuring Prana posted by a third party (Instagram, observed in search results)
- No Product Hunt launch found for this company
- No Twitter/X account confirmed for the company or founders
- LinkedIn company page exists at linkedin.com/company/pranahealth (search result; follower count not retrievable)
- No Discord or Slack community found
- No mobile app store listing confirmed
- Company is not currently hiring (YC page)

Note on brand disambiguation: "Prana" is a common Sanskrit term meaning "life force/breath," and numerous unrelated businesses use the name, including prAna (outdoor clothing brand, 277K Instagram followers), Prana Wearable (breathing device on Product Hunt), Prana Labs (breathwork platform), Prana Ayurvedic Centre, and multiple healthcare entities. This creates search ambiguity and brand confusion.

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Prana |
|---|---|---|
| **K Health** | $441M raised, ~$900M valuation (Businesswire/Calcalist, Jul 2024) | Partners with major health systems (e.g., Northwell); AI trained on billions of clinical data points; revenue unknown |
| **Lotus Health AI** | $41M total ($35M Series A, CRV + Kleiner Perkins; TechCrunch, Feb 2026) | Completely free model funded by premium sponsorships; 50-language support; revenue unknown |
| **Amazon One Medical** | Acquired by Amazon for $3.9B (2023); launched Health AI assistant Jan 2026 (CNBC) | Hybrid in-person + virtual with 200+ offices; Prime integration; $199/yr ($99 with Prime); massive distribution via Amazon ecosystem |
| **Galileo** | ~$237M raised, valued north of $550M (search snippet) | 50-state virtual primary care with health system partnerships (e.g., Emory Healthcare); established care teams; revenue unknown |

**Why now:** [Inferred]: Several converging factors opened this opportunity: (1) LLM capabilities crossed a threshold in 2023-2025 enabling conversational medical triage that is meaningfully better than prior symptom-checker rule engines; (2) wearable device adoption reached critical mass — Apple Watch, Oura Ring, continuous glucose monitors — creating a stream of real-time health data that didn't exist at scale five years ago; (3) post-COVID telehealth regulatory relaxations made multi-state virtual care delivery significantly easier; (4) Forward Health's shutdown in November 2024, after raising $657M, demonstrated both the appetite for AI-first primary care and the risks of a hardware-heavy approach, creating space for software-only alternatives; (5) AI-enabled digital health startups captured 54% of all digital health funding in 2025 (Fierce Healthcare, 2025 via search snippet), indicating strong investor appetite.

## Founders & Team

**Meer Patel** — Co-founder & CEO
- B.S. and M.S.E. in Biomedical Engineering, Johns Hopkins University (LinkedIn via search snippet)
- Deferred admission to Brown Medical School to build Prana (YC company page)
- Previously: AI Engineer at Onix Networking, scaling GenAI solutions for Fortune 500 clients (LinkedIn via search snippet)
- Co-developed ICPredict, a deep learning model for non-invasive brain pressure monitoring (LinkedIn via search snippet)
- Engineered rapid saliva diagnostics that secured R&D backing from Danaher (LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/meerpatel
- GitHub: No public repos found

**Vishvam Rawal** — Co-founder & CTO
- Applied Math & Computer Science, UC Berkeley (LinkedIn via search snippet)
- Ex-quantitative researcher: Incoming Summer Analyst at Weiss Asset Management; previously Equities Algo Dev at a multi-strategy hedge fund (LinkedIn via search snippet)
- Building "high-frequency data infrastructure for health signals" (YC company page)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/vishvam-rawal-985b04238 — 301 connections (search snippet)
- GitHub: No public repos found

**Sanjit Menon** — Co-founder & CHO (Chief Health Officer)
- M.D. Candidate, Albany Medical College (LinkedIn via search snippet)
- Previously co-founded EminenceAI (2019), an AI-powered USMLE exam prep platform scaled to 400+ customers across 30+ medical institutions (Tracxn; LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/sanjit-menon-6674281a6 — "Medical Student at Albany Medical College"
- GitHub: No public repos found

**Co-founder relationship:** Meer Patel (Johns Hopkins BME) and Vishvam Rawal (UC Berkeley) attended different universities, and no shared prior employer is visible from public data. Sanjit Menon (Albany Medical College) also attended a different institution. No public data on how the co-founders met.

**Founder-market fit:** The team combines biomedical engineering and medical device research (Patel), quantitative infrastructure and algorithmic systems experience (Rawal), and clinical training plus health-tech entrepreneurship (Menon, who previously built and scaled an AI medical education product). Patel's specific experience co-developing a deep learning model for clinical monitoring (ICPredict) and his deferral from medical school indicate domain commitment. Rawal's quantitative finance background is applied to processing continuous health signal data. Menon brings both clinical credibility as a graduating MD and startup operating experience from EminenceAI.

## Key Risks

**Regulatory complexity for AI medical advice:** The FDA is actively evaluating regulatory frameworks for generative AI-enabled health chatbots (STAT News, Nov 2025). Forty-seven states introduced over 250 AI-related healthcare bills in 2025, with 33 enacted (Manatt Health, 2025 via search snippet). Illinois, Utah, Nevada, and California have passed laws restricting AI chatbot interactions in healthcare contexts. Prana's model — where AI acts as an "always-on physician" — sits in an evolving regulatory gray zone between wellness software and medical device. Any shift toward requiring FDA clearance for AI-driven triage or diagnosis could impose significant compliance costs.

**Well-funded direct competitors in AI-first primary care:** Lotus Health AI raised $41M with a free care model backed by CRV and Kleiner Perkins (TechCrunch, Feb 2026). K Health has $441M in funding and health system distribution (Businesswire, Jul 2024). Amazon One Medical launched a competing agentic Health AI in January 2026 with built-in distribution to millions of Prime members (CNBC, Jan 2026). Prana must differentiate against competitors with substantially greater capital and distribution.

**Brand name ambiguity:** "Prana" returns results for dozens of unrelated businesses across health, wellness, fitness, and clothing domains. This complicates SEO, paid acquisition, and brand recognition. The company uses "pranadoc.com" as its domain, which partially mitigates this, but consumer search behavior will be fragmented.

**Medical malpractice liability at scale:** As a "full-stack medical provider" prescribing medications and managing care, Prana bears malpractice liability. Scaling a physician-in-the-loop model across all 50 states requires maintaining state-specific medical licenses, compliance with varying telehealth regulations, and adequate malpractice coverage. Forward Health's shutdown — despite $657M raised — demonstrates the operational difficulty of scaling AI-augmented primary care (Maginative, Nov 2024).

**Unverified traction claims:** The website reports 4.9/5 stars from 3,412 reviews, but no independent review platform (App Store, Google Play, Trustpilot, G2) was found to corroborate this figure. The company describes itself as "live in beta with early users" on its YC page, which appears inconsistent with 3,412 reviews. The source and methodology of these reviews is not disclosed.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $51.4B U.S. telehealth market in 2025, projected $83.6B by 2030 (MarketsandMarkets, 2025 via search snippet); $3.94B U.S. virtual care market in 2025, projected $48.5B by 2034 at 32.45% CAGR (Precedence Research, 2025 via search snippet) |
| SAM | No public data found |
| Traction | "Live in beta with early users" (YC company page, W26 batch); 4.9/5 stars from 3,412 reviews (pranadoc.com — self-reported, unverified); seeking self-insured employer pilots (YC page via search snippet) |
| Revenue Signal | Free AI consultation + $39 per physician video visit, no subscription (pranadoc.com). No revenue figures disclosed. |
| Founders | Meer Patel (CEO): JHU BME, deferred Brown Med, ex-Onix AI Engineer. Vishvam Rawal (CTO): UC Berkeley Applied Math/CS, ex-quant (Weiss/hedge fund). Sanjit Menon (CHO): MD Candidate Albany Medical, co-founded EminenceAI (400+ customers). |
| Competitors | K Health ($441M raised, ~$900M valuation, health system partnerships); Lotus Health AI ($41M raised, free model, premium sponsorship revenue); Amazon One Medical ($3.9B acquisition, agentic Health AI, Prime distribution); Galileo (~$237M raised, ~$550M valuation, 50-state hybrid virtual care) |
| Moat Signals | Continuous health monitoring data flywheel (potential, unproven); physician-in-the-loop efficiency model; 50-state availability |
| Risk Factors | Evolving FDA/state AI health chatbot regulation, well-funded direct competitors (K Health, Lotus, Amazon), brand name ambiguity, unverified traction claims |
| Founder Reach | Meer Patel: Twitter not found, LinkedIn linkedin.com/in/meerpatel. Vishvam Rawal: Twitter not found, LinkedIn 301 connections. Sanjit Menon: Twitter not found, LinkedIn linkedin.com/in/sanjit-menon-6674281a6. |
| Distribution Signals | No Product Hunt launch found; no confirmed app store listing; no confirmed company Twitter/X account; LinkedIn company page exists (follower count not retrievable) |
| Emails | support@pranadoc.com (company website) |
