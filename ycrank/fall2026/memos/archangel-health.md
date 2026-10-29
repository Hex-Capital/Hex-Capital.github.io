# Archangel Health

> Infra to make AI safe enough to practice medicine

| Field | Value |
|-------|-------|
| Website | https://www.archangelhealth.ai/ |
| YC Page | https://www.ycombinator.com/companies/archangel-health |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/archangel-health)) |
| Industry | Healthcare / Healthcare |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Health Tech |
| YC Partner | David Lieb ([YC](https://www.ycombinator.com/companies/archangel-health)) |
| Emails | tejpatel@berkeley.edu ([company products page](https://www.archangelhealth.ai/products), via search snippet) |

## The Idea

- **Problem:** Medical AI developers need to measure clinical workflow execution beyond medical knowledge, because agents can describe appropriate actions without executing them in the EHR, a failure that text-answer evaluations miss ([Stanford HAI, Oct 2026](https://hai.stanford.edu/news/measuring-what-medical-ai-can-actually-do)).
- **Approach:** Archangel supplies sandboxed EHR environments with physician grading, supervised fine-tuning examples, preference data, adversarial cases, and custom evaluations; Website not accessible at time of research, so product details rely on the indexed [company products page](https://www.archangelhealth.ai/products) (via search snippet).
- **Differentiation:** Archangel explicitly packages interactive EHR environments alongside data and labeling, while Centaur emphasizes expert annotation and Gradient Health emphasizes searchable multimodal clinical datasets ([Archangel](https://www.archangelhealth.ai/products), via search snippet; [Centaur](https://centaur.ai/post/announcing-our-16m-series-b-to-accelerate-ai-for-health-and-science); [Gradient, Jun 2026](https://gradienthealth.io/blog/gradient-health-expands-atlas-beyond-imaging-to-deliver-multimodal-data-for-medical-ai-development)).
- **Business Model:** [Inferred]: Dataset licenses and custom labeling/evaluation contracts appear to be monetization paths given its licensed-data provider listing and labeling service; pricing: No public data found ([Opendatabay](https://www.opendatabay.com/data-providers/9c944de2-dc51-4bd1-ba14-4e66f1a78553); [company products page](https://www.archangelhealth.ai/products), via search snippet).
- **TAM/SAM:** The broader healthcare AI training-dataset market is estimated at $645.4 million in 2026, growing at 12.9% CAGR during 2026–2033; company-specific SAM: No public data found ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-training-dataset-healthcare-market-report)).
- **GTM / Distribution:** Public entry points include a “Get data” inquiry, physician/data-contributor registration, and an Opendatabay provider profile targeting medical AI developers ([company products page](https://www.archangelhealth.ai/products), via search snippet; [Opendatabay](https://www.opendatabay.com/data-providers/9c944de2-dc51-4bd1-ba14-4e66f1a78553)).

## Defensibility

- **Moat today:** Its provider profile claims board-certified physician contributors, consented and de-identified datasets, provenance tracking, datasheets, and content hashes, but does not establish exclusive data rights ([Opendatabay](https://www.opendatabay.com/data-providers/9c944de2-dc51-4bd1-ba14-4e66f1a78553)).
- **Future moat:** [Inferred]: Repeated physician grading and longitudinal clinical tasks could accumulate reusable evaluation assets, although public sources do not establish their scale or exclusivity.
- **Market structure:** [Inferred]: No structural barrier identified at this stage, since existing suppliers already offer clinical data, expert feedback, and model evaluation ([Centaur](https://centaur.ai/post/announcing-our-16m-series-b-to-accelerate-ai-for-health-and-science); [EXL/iMerit, Jun 2026](https://ir.exlservice.com/news-releases/news-release-details/exl-acquire-imerit-advancing-its-leadership-enterprise-ai-adding)).
- **Commoditization risk:** Stanford publicly releases EHR-agent benchmarking infrastructure, giving developers an available alternative for part of the evaluation workflow ([MedAgentBench](https://stanfordmlgroup.github.io/projects/medagentbench/)).

## Market & Traction

- **Traction signals:**
  - Frontier labs and medical AI companies reportedly use the infrastructure today; customer names, counts, and contract values: No public data found ([company-authored YC profile, accessed Oct 2026](https://www.ycombinator.com/companies/archangel-health)).
  - Clinical evaluator contractor posting advertised $25–60+ per case, representing contributor compensation rather than company pricing ([Modern MedEd, Sep 24, 2026](https://modernmeded.com/job/clinical-ai-expert-medical-evaluator-remote/), via search snippet).
  - Zero jobs currently posted on YC ([YC jobs, Oct 2026](https://www.ycombinator.com/companies/archangel-health/jobs)).
  - Included in Tross’s healthcare startup roundup ([Tross, Oct 16, 2026](https://ontross.com/blog/yc-s-fall-2026-healthcare-ai-startups)).
  - Provider profile joined August 24, 2026, with zero listed data products and zero dataset views displayed on that marketplace ([Opendatabay, accessed Oct 2026](https://www.opendatabay.com/data-providers/9c944de2-dc51-4bd1-ba14-4e66f1a78553)).
  - **Product history:** An April 2026 newsletter described Tej Patel’s Archangel Health as helping surgery centers under CMS TEAM, whereas current YC materials describe medical AI infrastructure; the change occurred between these descriptions, with no verified pivot date ([Entrepreneurs@Berkeley, Apr 14, 2026](https://www.entrepreneursatberkeley.com/blog/newsletter-02); [YC, Oct 2026](https://www.ycombinator.com/companies/archangel-health)).
- **Competitors:**
  - **Centaur.ai / Centaur Labs ($32.54M reported raised, revenue unknown):** Expert annotation and evaluation rather than an explicitly packaged EHR training environment; latest announced round was $16M+ Series B led by SignalFire in October 2024 ([CB Insights](https://www.cbinsights.com/company/centaur-labs/financials), via search snippet; [company announcement](https://centaur.ai/post/announcing-our-16m-series-b-to-accelerate-ai-for-health-and-science)).
  - **Gradient Health ($10.73M reported raised, revenue unknown):** Atlas supplies multimodal clinical datasets rather than foregrounding physician-graded agent environments; its latest located filing reports $2.13M sold in October 2026, with investor identity undisclosed ([CB Insights](https://www.cbinsights.com/company/gradient-health/financials), via search snippet; [SEC](https://www.sec.gov/Archives/edgar/data/1914365/000191436526000003/xslFormDX01/primary_doc.xml); [product announcement](https://gradienthealth.io/blog/gradient-health-expands-atlas-beyond-imaging-to-deliver-multimodal-data-for-medical-ai-development)).
  - **iMerit ($36.3M reported raised, revenue unknown):** Adjacent, multi-industry provider of expert feedback, reinforcement learning, and evaluation through Ango and Scholars; aVenture records a $12.8M round in November 2021 with lead undisclosed, while EXL announced an acquisition agreement in June 2026 ([aVenture](https://aventure.vc/companies/imerit-los-gatos-ca-us/fundraising), round date via search snippet; [EXL](https://ir.exlservice.com/news-releases/news-release-details/exl-acquire-imerit-advancing-its-leadership-enterprise-ai-adding)).
- **Why now:** [Inferred]: EHR-agent capability has advanced from below 70% completion on the original MedAgentBench in early 2025 to above 90% in subsequent testing, creating demand for harder workflow evaluations ([Stanford HAI, Oct 2026](https://hai.stanford.edu/news/measuring-what-medical-ai-can-actually-do)).

## Founders & Team

- **Aryaa Bhatia (Founder):**
  - Background: Berkeley IEOR/EECS student, Plureto co-founder, and former Lawrence Livermore research intern; his separate prior business Origins Customs reportedly reached $70K/year revenue ([YC founder profile](https://www.ycombinator.com/founders/aryaa-bhatia)).
  - Twitter/X: @AryaaBhatia; cached profile displays 34 followers, with current X count not retrievable ([TwStalker, accessed Oct 2026](https://www6.twstalker.com/AryaaBhatia)).
  - LinkedIn: Profile found; headline: No public data found; approximately 3K followers ([LinkedIn, Oct 2026](https://www.linkedin.com/in/aryaa-bhatia-8aaaa0319), via search snippet).
  - GitHub: No public repos found.
- **Tej Patel (Founder):**
  - Background: SimCare AI Chief of Staff, Define Ventures AI Fellow, Hippocampi founder, and Cedars-Sinai ML researcher; YC lists Berkeley neuroscience/philosophy credentials, while Entrepreneurs@Berkeley lists neuroscience class of 2029 ([YC](https://www.ycombinator.com/founders/tej-patel); [E@B](https://www.entrepreneursatberkeley.com/founders)).
  - Twitter/X: @tej_xp; count not retrievable ([YC founder profile](https://www.ycombinator.com/founders/tej-patel)).
  - LinkedIn: Profile found; headline: No public data found; approximately 2K followers ([LinkedIn, Oct 2026](https://www.linkedin.com/in/tej-patel-873b952a8), via search snippet).
  - GitHub: No public repos found.
- **Co-founder relationship:** Both attended Berkeley and joined Entrepreneurs@Berkeley’s Spring 2026 cohort ([E@B](https://www.entrepreneursatberkeley.com/founders)).
- **Founder-market fit:** [Inferred]: Bhatia’s robotics-data work and Patel’s clinical-agent and medical research experience relate to data collection and clinical evaluation, respectively ([Bhatia](https://www.ycombinator.com/founders/aryaa-bhatia); [Patel](https://www.ycombinator.com/founders/tej-patel)).

## Key Risks

- **Clinical transfer:** [Inferred]: Success in training environments may not establish deployment reliability; Stanford reports 46% single-attempt completion on harder PhysicianBench tasks, while Archangel-specific clinical validation results were not found ([Stanford HAI, Oct 2026](https://hai.stanford.edu/news/measuring-what-medical-ai-can-actually-do)).
- **Patient-data identification:** De-identification retains residual identification risk according to HHS; Archangel’s stated mitigations include consent, de-identification, and provenance tracking ([HHS](https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html); [provider profile](https://www.opendatabay.com/data-providers/9c944de2-dc51-4bd1-ba14-4e66f1a78553)).
- **Supplier substitution:** [Inferred]: Buyers could source overlapping expert annotation and evaluation services from Centaur or iMerit, limiting differentiation based solely on physician feedback ([Centaur](https://centaur.ai/post/announcing-our-16m-series-b-to-accelerate-ai-for-health-and-science); [EXL/iMerit](https://ir.exlservice.com/news-releases/news-release-details/exl-acquire-imerit-advancing-its-leadership-enterprise-ai-adding)).
- **Name confusion:** Unrelated Archangel Health Care coverage concerns Mike Sorrentino’s treatment-services organization, creating attribution risk; this dossier identifies the startup through its domain and YC founders ([ACCESS release, May 2026](https://www.morningstar.com/news/accesswire/1165809msn/mike-the-situation-sorrentino-expands-archangel-centers-nationwide-launches-integrated-healthcare-platform-and-announces-plans-for-capital-raise); [YC](https://www.ycombinator.com/companies/archangel-health)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader healthcare AI training datasets: $645.4M in 2026; 12.9% CAGR, 2026–2033 ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-training-dataset-healthcare-market-report)) |
| SAM | No public data found |
| Traction | Unnamed frontier-lab and medical AI users, company-reported ([YC, Oct 2026](https://www.ycombinator.com/companies/archangel-health)); roundup inclusion ([Tross, Oct 2026](https://ontross.com/blog/yc-s-fall-2026-healthcare-ai-startups)) |
| Revenue Signal | No public data found |
| Founders | Aryaa Bhatia: Berkeley, Plureto, Lawrence Livermore ([YC](https://www.ycombinator.com/founders/aryaa-bhatia)); Tej Patel: SimCare, Hippocampi, Cedars-Sinai ([YC](https://www.ycombinator.com/founders/tej-patel)) |
| Competitors | Centaur ($32.54M, revenue unknown, annotation; [CB Insights](https://www.cbinsights.com/company/centaur-labs/financials), via search snippet); Gradient ($10.73M, revenue unknown, dataset access; [CB Insights](https://www.cbinsights.com/company/gradient-health/financials), via search snippet); iMerit ($36.3M, revenue unknown, multi-industry evaluation; [aVenture](https://aventure.vc/companies/imerit-los-gatos-ca-us/fundraising), [EXL](https://ir.exlservice.com/news-releases/news-release-details/exl-acquire-imerit-advancing-its-leadership-enterprise-ai-adding)) |
| Moat Signals | Claimed physician network and provenance-tracked datasets ([Opendatabay](https://www.opendatabay.com/data-providers/9c944de2-dc51-4bd1-ba14-4e66f1a78553)) |
| Risk Factors | Residual identification risk ([HHS](https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html)), clinical execution failures ([Stanford](https://hai.stanford.edu/news/measuring-what-medical-ai-can-actually-do)) |
| Founder Reach | Bhatia: LinkedIn 3K; Patel: LinkedIn 2K ([Bhatia](https://www.linkedin.com/in/aryaa-bhatia-8aaaa0319), [Patel](https://www.linkedin.com/in/tej-patel-873b952a8), Oct 2026, via search snippets) |
| Distribution Signals | Licensed-data provider listing ([Opendatabay](https://www.opendatabay.com/data-providers/9c944de2-dc51-4bd1-ba14-4e66f1a78553)) |
| Emails | tejpatel@berkeley.edu ([company products page](https://www.archangelhealth.ai/products), via search snippet) |
