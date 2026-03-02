# Eos AI

> The autonomous operating system for healthcare

| Field | Value |
|-------|-------|
| Website | https://www.helloeos.ai/ |
| YC Page | https://www.ycombinator.com/companies/eos-ai |
| Batch | Winter 2026 |
| Industry | Healthcare / Healthcare |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, B2B, Healthcare, Data Engineering, Infrastructure |
| YC Partner | Diana Hu |
| Emails | [email protected] |

## The Idea

**Problem:** Healthcare systems operate across fragmented data sources — EHRs, imaging archives (PACS), labs, scheduling systems, and billing platforms — that do not natively interoperate. Patient records are split across sites and encounters, with inconsistent formats (ICD codes, SNOMED, free text, varying imaging protocols across scanners and modalities). This fragmentation prevents unified longitudinal views of patients, hampers clinical decision-making, and slows research workflows. Existing solutions typically require centralizing data into a single warehouse, which is expensive and raises compliance/governance challenges. The primary customer segment is hospital systems and health networks.

**Approach:** Eos creates a federated data layer that keeps data in its original systems while building a centralized index — a compressed representation that allows search and reasoning across petabytes of distributed data as if it were one system (company website). The platform includes two named harmonization engines: VERA for medical imaging (standardizing across modalities, sites, and scanners, aligning imaging distributions, and automating preprocessing for downstream ML models) and LUCIA for clinical text (structuring EHR data into unified representations, normalizing free text, ICD codes, SNOMED codes, and clinical signals) (company website). On top of this unified layer, Eos provides predictive modeling (analyzing patient histories against similar cases) and workflow automation (integrating predictions into hospital workflows with automated prompts) (company website). The company's LinkedIn page describes the platform as "a software-defined, AI-native vendor-neutral archive (VNA) for medical imaging and clinical data" where data is stored in a lossless, structured format and indexed with rich metadata (LinkedIn company page).

**Differentiation:** Unlike traditional health data integration platforms such as Redox (which focuses on API-based data exchange between applications) or Datavant (which focuses on de-identified data linking for life sciences), Eos positions itself as an AI-native data harmonization layer that resolves patient identity across sites and standardizes data at the source rather than merely routing or linking it. Compared to general-purpose vendor-neutral archives, Eos emphasizes ML-ready data preprocessing (imaging harmonization, distribution alignment) as a core differentiator. The claim that its proprietary pipeline "accelerates deployment, enhances model performance, and preserves clinical features" (LinkedIn) positions it specifically for AI/ML workloads on clinical data, rather than purely for clinical operations.

**Business Model:** No pricing page is visible on the website. [Inferred]: Most likely monetization path is enterprise SaaS licensing to health systems, potentially with consumption-based pricing tied to data volume or number of connected systems, given the B2B infrastructure positioning and the petabyte-scale data indexing capability described.

**TAM/SAM:** The global healthcare data integration market was estimated at $1.05 billion in 2022 and projected to reach $3.11 billion by 2030, growing at a CAGR of 14.5% (Grand View Research, via search snippet). The broader healthcare analytics market was valued at $64.49 billion in 2025 with a projected CAGR of 21.41% through 2034 (Arcadia/analytics industry report, via search snippet). [Inferred]: The serviceable market for AI-native healthcare data harmonization platforms sits at the intersection of these two segments; no specific SAM estimate was found.

**GTM / Distribution:** Eos participated in TechCrunch Disrupt 2025's Startup Battlefield, with a pitch video available on YouTube (TechCrunch Startup Battlefield company page). The ONCOVATE project (a precursor AI tool for cancer patient triage) was in a pilot program with Stanford Medicine (Caltech Bill Gross Competition, 2024). [Inferred]: Most likely distribution path is direct enterprise sales to US health systems, leveraging Stanford Medicine pilot relationships and TechCrunch Disrupt visibility, with a land-and-expand model starting with imaging data harmonization and expanding to full clinical data integration.

## Defensibility

**Data network effects:** Once Eos harmonizes data across a health system's fragmented sources and builds its centralized index, the switching cost increases as more systems are connected and more longitudinal patient data is resolved. The imaging harmonization models (VERA) and text normalization models (LUCIA) may improve in accuracy as they are exposed to more institutional data variations. However, these network effects are nascent and unproven at this stage.

**Technical complexity:** Building a federated data index that can search and reason across petabytes of distributed healthcare data while maintaining HIPAA compliance and clinical-grade fidelity is a technically demanding undertaking. The imaging harmonization pipeline (aligning distributions across different scanner manufacturers and modalities) requires domain-specific ML expertise.

**Market structure:** Large incumbents (Epic, Cerner/Oracle Health) control EHR systems and have a vested interest in maintaining their proprietary ecosystems. [Inferred]: These incumbents face business model cannibalization risk — offering a truly vendor-neutral data harmonization layer would reduce lock-in and undermine their core competitive advantage of ecosystem control. Additionally, incumbent VNA providers (e.g., Hyland Healthcare) focus on storage/archival rather than AI-native preprocessing, creating a gap that requires a fundamentally different technical architecture.

**Commoditization risk:** Large cloud providers (Google Health, Microsoft Azure Health Data Services, AWS HealthLake) offer healthcare data harmonization capabilities. Health-specific startups like Commure ($820M+ raised, $6B valuation; Commure press releases and MobiHealthNews) and Redox ($98M raised; Crunchbase) are well-capitalized competitors. Open-source FHIR-based tools lower the barrier to basic interoperability. The specific combination of federated indexing + imaging harmonization + predictive modeling is less commoditized, but individual components can be replicated.

## Market & Traction

**Traction signals:**
- TechCrunch Disrupt 2025 Startup Battlefield participant, with a pitch video on YouTube (TechCrunch Startup Battlefield company page)
- Website claims: 3x administrative productivity increase, 37% revenue recovery in early deployments, 18% model performance improvement through imaging harmonization, deployment acceleration from months to days (helloeos.ai) — these are presented as customer deployment metrics, not independently verified
- ONCOVATE (precursor project) was in a pilot program with Stanford Medicine (Caltech Bill Gross Business Plan Competition, 2024)
- Caltech Bill Gross Business Plan Competition 2024 participant with ONCOVATE project (Caltech Innovation page)
- LinkedIn company page: linkedin.com/company/helloeos (LinkedIn)
- Twitter/X: @ai_eos account found but follower count not retrievable
- Product Hunt: No listing found
- Discord/Slack community: No public community found
- App store / web traffic: No public data found
- Job postings: 0 open positions (YC page)

**Competitive landscape:**

1. **Redox** ($98M raised, $181M revenue in 2024 per Getlatka; Crunchbase): Focuses on API-based healthcare data exchange, acting as middleware between health apps and EHR systems. Differentiator vs. Eos: Redox is a data routing/integration layer, not an AI-native harmonization and prediction platform. Founded 2014.

2. **Datavant** ($83M raised, revenue unknown; Crunchbase): Specializes in de-identified health data linking across 60M+ records for life sciences research. Differentiator vs. Eos: Datavant focuses on de-identified data connectivity for research and real-world evidence, not on unified clinical patient records for operational use.

3. **Commure** ($820M+ raised, ~$6B valuation; MobiHealthNews, General Catalyst): AI-powered healthcare platform covering revenue cycle management, clinical workflow automation, used by 130+ health systems. Differentiator vs. Eos: Commure is a broader platform play spanning RCM and clinical workflows; Eos is more narrowly focused on data harmonization and AI-ready data infrastructure.

4. **Health Gorilla** ($80M raised, revenue unknown; Health Gorilla press release, Crunchbase): National health data network providing clinical data access APIs. Differentiator vs. Eos: Health Gorilla focuses on data access/retrieval across a network rather than on-premise data harmonization and ML preprocessing.

**Why now:**
- CMS interoperability mandates (including the ONC's HTI-1 rule and TEFCA framework) are requiring health systems to adopt standardized data exchange, creating urgency for solutions that can harmonize fragmented data (CMS press releases, 2024-2025).
- [Inferred]: The rapid proliferation of clinical AI models (for radiology, pathology, and clinical decision support) has created demand for ML-ready, harmonized datasets — a prerequisite that existing interoperability tools were not designed to provide. The convergence of LLM capabilities with clinical NLP (enabling LUCIA-style text harmonization at scale) and advances in domain adaptation for medical imaging (enabling VERA-style cross-scanner harmonization) represent technology thresholds that were not available 2-3 years ago.

## Founders & Team

**Arya Khokhar** — Founder
- BS in Computer Science and Mathematics, California Institute of Technology (YC page, LinkedIn)
- Research experience at Stanford (YC page)
- Published research: "Accelerating 3D Photoacoustic Computed Tomography with End-to-End Physics-Aware Neural Operators" (September 2025), affiliated with Caltech Department of Computing and Mathematical Sciences (ResearchGate, via search snippet)
- Led ONCOVATE project at Caltech: an AI tool for cancer patient triage using patient and symptom data to recommend genetic tests and assist with outcome forecasting, piloted with Stanford Medicine (Caltech Bill Gross Business Plan Competition, 2024). Team members: Albert Huang, Adarsh Kumarappan, Shan Gupta
- Twitter/X: No confirmed personal account found
- LinkedIn: linkedin.com/in/arya-khokhar (LinkedIn)
- GitHub: No public repos found matching this individual

The YC page lists only Arya Khokhar as founder. The team size is listed as 2, suggesting one additional team member whose identity is not publicly disclosed on the YC page or company website.

**Co-founder relationship:** Only one founder is listed; no co-founder relationship data applicable.

**Founder-market fit:** Arya Khokhar's background combines computer science and mathematics from Caltech with research experience at Stanford in healthcare-adjacent domains. The ONCOVATE project (cancer patient triage AI, piloted at Stanford Medicine) demonstrates prior engagement with healthcare AI and clinical data challenges. The published research on photoacoustic computed tomography using physics-aware neural operators indicates technical depth in medical imaging and ML. This background aligns with Eos AI's core technical challenges: imaging harmonization, clinical data normalization, and predictive modeling on healthcare data.

## Key Risks

**Brand disambiguation:** "Eos" is shared by multiple well-known entities — EOS (blockchain/cryptocurrency with an active community of 13,000+ Discord members), Canon EOS (camera line), and multiple other companies. Web searches for "Eos AI" return significant noise. This creates challenges for organic search visibility, SEO, and brand recognition.

**Regulatory and compliance complexity:** Healthcare data products must comply with HIPAA, HITECH, and state-level privacy regulations. The federated data architecture must maintain compliance across every connected system. Any security incident could result in loss of trust and regulatory penalties that a 2-person team may lack the resources to manage.

**Enterprise sales cycle vs. team capacity:** Health systems are known for lengthy procurement cycles (12-18 months is common), requiring security reviews, compliance audits, and integration testing. A 2-person team must simultaneously build product, sell, and support early customers. No open job postings suggest the team is not yet scaling.

**Incumbent platform risk:** Epic (which holds ~38% of the US hospital EHR market) has been expanding its own interoperability and analytics capabilities. If Epic or Oracle Health (Cerner) offer native data harmonization features, it could preempt the need for a third-party solution among their installed base.

**Technical validation gap:** The website-stated metrics (3x productivity increase, 37% revenue recovery, 18% model performance improvement) are not attributed to named customers or independently verified. At this stage, the clinical and operational efficacy of the harmonization layer is unproven in public evidence.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Healthcare data integration market: $1.05B (2022), projected $3.11B by 2030, 14.5% CAGR (Grand View Research, via search snippet) |
| SAM | No public data found |
| Traction | TechCrunch Disrupt 2025 Startup Battlefield participant (TechCrunch); ONCOVATE pilot with Stanford Medicine (Caltech, 2024); website claims 3x admin productivity, 37% revenue recovery, 18% imaging model improvement in early deployments (helloeos.ai) |
| Revenue Signal | No public data found |
| Founders | Arya Khokhar (Founder): BS CS+Math Caltech, Stanford research, published ML research in medical imaging, ONCOVATE cancer triage AI pilot with Stanford Medicine |
| Competitors | Redox ($98M raised, $181M revenue 2024, API-based data exchange); Datavant ($83M raised, revenue unknown, de-identified data linking); Commure ($820M+ raised, ~$6B valuation, broad AI healthcare platform); Health Gorilla ($80M raised, revenue unknown, clinical data network) |
| Moat Signals | Federated data indexing architecture; domain-specific imaging (VERA) and text (LUCIA) harmonization engines; switching costs once deployed across health system data sources |
| Risk Factors | Brand disambiguation with EOS blockchain/Canon EOS, enterprise sales cycle strain on 2-person team, incumbent EHR platform expansion risk |
| Founder Reach | Arya Khokhar: LinkedIn linkedin.com/in/arya-khokhar, Twitter/X not confirmed, GitHub not found |
| Distribution Signals | TechCrunch Disrupt 2025 Startup Battlefield (TechCrunch); no Product Hunt, app store, or Chrome extension presence found |
| Emails | [email protected] |
