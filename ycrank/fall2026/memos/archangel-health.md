# Archangel Health

> Infra to make AI safe enough to practice medicine

| Field | Value |
|-------|-------|
| Website | https://www.archangelhealth.ai/ |
| YC Page | https://www.ycombinator.com/companies/archangel-health |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/archangel-health)) |
| Industry | Healthcare / Healthcare |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Health Tech |
| YC Partner | David Lieb ([Y Combinator](https://www.ycombinator.com/companies/archangel-health)) |
| Emails | tejpatel@berkeley.edu — Tej Patel, co-CEO and published product contact ([Archangel Health Products, via search snippet](https://www.archangelhealth.ai/products)) |

## The Idea

- **Problem:** Frontier labs and medical AI developers need to test whether models can complete clinical workflows, where static question-answer tests miss failures such as documenting an intended order without placing it in the EHR ([Stanford HAI, Oct 2026](https://hai.stanford.edu/news/measuring-what-medical-ai-can-actually-do)).
- **Approach:** Archangel puts agents inside sandboxed, de-identified electronic health records to retrieve information, act and document decisions, using physician grading and, for multi-visit tasks, subsequent outcomes ([Y Combinator, Fall 2026](https://www.ycombinator.com/companies/archangel-health), [Archangel Health Products, via search snippet](https://www.archangelhealth.ai/products)).
- **Differentiation:** Archangel combines physician-written training data with chart-based simulations and plans health-system-specific post-training, while BioStack emphasizes linking longitudinal records across hospitals, Osseus also targets biology and pharma, and Centaur.ai offers on-demand medical and scientific annotation ([Y Combinator](https://www.ycombinator.com/companies/archangel-health), [BioStack](https://www.getbiostack.com/announcements), [Osseus at YC](https://www.ycombinator.com/companies/osseus), [Centaur.ai](https://centaur.ai/post/announcing-our-16m-series-b-to-accelerate-ai-for-health-and-science)).
- **Business Model:** Public materials describe clinical-data licensing under negotiated agreements and offerings for custom evaluations and physician labeling, with pricing undisclosed ([Data Deal Guide, Nov 2026](https://datadealguide.com/providers/archangel-health), [Archangel Health Products, via search snippet](https://www.archangelhealth.ai/products)). Website not accessible at time of research (homepage).
- **TAM/SAM:** Grand View Research projects the global healthcare AI training dataset market at $645.4M in 2026 with 12.9% CAGR through 2033, a proxy for the dataset offering ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-training-dataset-healthcare-market-report)).
- **GTM / Distribution:** Archangel reports use by frontier labs and medical AI companies, lists a data-provider profile focused initially on nephrology, and plans to post-train open-source models for health systems on their own records and physician feedback ([Y Combinator, Fall 2026](https://www.ycombinator.com/companies/archangel-health), [Opendatabay, Aug 2026](https://www.opendatabay.com/data-providers/9c944de2-dc51-4bd1-ba14-4e66f1a78553)).

## Defensibility

- **Moat today:** Archangel reports that board-certified specialists grade its datasets and that it tracks provenance with datasheets and content hashes ([Archangel Health provider profile on Opendatabay](https://www.opendatabay.com/data-providers/9c944de2-dc51-4bd1-ba14-4e66f1a78553)).
- **Future moat:** [Inferred]: Partnerships that yield reusable rights to longitudinal records and specialist feedback could compound coverage across clinical workflows, with exclusivity and reuse rights still undisclosed ([Data Deal Guide, Nov 2026](https://datadealguide.com/providers/archangel-health)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Stanford’s public PhysicianBench already evaluates multi-step EHR workflows, giving AI labs an alternative for benchmark testing ([Stanford PhysicianBench, May 2026](https://arxiv.org/abs/2605.02240)).

## Market & Traction

- **Traction signals:**
  - Frontier labs and medical AI companies using the current product, according to Archangel, with customer names and counts undisclosed ([Y Combinator, Fall 2026](https://www.ycombinator.com/companies/archangel-health)).
  - Current medical AI data offering publicly listed by August 24, 2026, following an April 2026 description of the prior product as support for surgery centers under Medicare’s TEAM payment model ([Opendatabay, Aug 2026](https://www.opendatabay.com/data-providers/9c944de2-dc51-4bd1-ba14-4e66f1a78553), [Entrepreneurs at Berkeley, Apr 2026](https://www.entrepreneursatberkeley.com/blog/newsletter-02)).
  - YC backing confirmed by Patel, with Dealroom reporting $125K in September and CB Insights reporting $500K in October ([Patel on LinkedIn](https://www.linkedin.com/in/tej-patel-873b952a8), [Dealroom](https://app.dealroom.co/companies/archangel_health), [CB Insights](https://www.cbinsights.com/company/archangel-health/financials)).
  - Coverage of the current offering in Company Launch Tracker on October 21 and Founderland on November 2 ([Company Launch Tracker, Oct 2026](https://companylaunchtracker.substack.com/p/company-launch-tracker-118), [Founderland, Nov 2026](https://founderland.ai/articles/archangel-health-launches-rl-environments-to-make-medical-ai-mvztp3dq)).
  - 0 open roles on YC Jobs at the November 17, 2026 check ([YC Jobs](https://www.ycombinator.com/companies/archangel-health/jobs)).
- **Competitors:**
  - **BioStack Platforms** ($10M reported total, revenue unknown) connects hospital records into multimodal training sets and announced a $9.5M seed in October 2026 with Peak XV among the named leads ([aVenture Research](https://aventure.vc/companies/biostack-platforms-san-francisco-ca-us/fundraising), [BioStack, Oct 2026](https://www.getbiostack.com/announcements)).
  - **Osseus** ($500K reported total, revenue unknown) builds RL environments, datasets and evaluations for medical and biological tasks, with CB Insights listing a YC convertible note in July 2026 ([Y Combinator](https://www.ycombinator.com/companies/osseus), [CB Insights](https://www.cbinsights.com/company/osseus/financials)).
  - **Centaur.ai** (at least $31M across announced rounds, revenue unknown) offers on-demand annotation for health and science and announced a $16M-plus Series B led by SignalFire in October 2024 ([Series A announcement, Sep 2021](https://www.dotmed.com/news/story/55812), [Centaur.ai, Oct 2024](https://centaur.ai/post/announcing-our-16m-series-b-to-accelerate-ai-for-health-and-science)).
- **Why now:** [Inferred]: ARPA-H’s September 2026 ADVOCATE awards created a concrete program for testing and monitoring autonomous clinical agents in care workflows as teams pursue FDA authorization ([ARPA-H, Sep 2026](https://arpa-h.gov/news-and-events/arpa-h-launches-worlds-first-bid-build-fda-authorized-clinical-ai-cardiovascular)).

## Founders & Team

- **Aryaa Bhatia (Co-founder and co-CEO)** ([Entrepreneurs at Berkeley](https://www.entrepreneursatberkeley.com/founders))
  - Background: Studies industrial engineering and operations research and electrical engineering and computer sciences at UC Berkeley, interned at Lawrence Livermore National Laboratory, co-founded Plureto, and founded Origins Customs, which his YC bio says reached $70K in annual revenue ([YC founder profile](https://www.ycombinator.com/founders/aryaa-bhatia)).
  - Twitter/X: @AryaaBhatia, 34 followers ([TwStalker snapshot, Sep 2026](https://www6.twstalker.com/AryaaBhatia)).
  - LinkedIn: “Archangel Health (YC F26)” ([LinkedIn public profile title](https://www.linkedin.com/in/aryaa-bhatia-8aaaa0319)); business email: No public data found.
  - GitHub: No public repos found.
- **Tej Patel (Co-founder and co-CEO)** ([Entrepreneurs at Berkeley](https://www.entrepreneursatberkeley.com/founders))
  - Background: YC lists UC Berkeley neuroscience and philosophy, chief of staff at SimCare AI, an AI fellowship at Define Ventures, founding the clinical-agent startup Hippocampi, and machine-learning research at Cedars-Sinai ([YC founder profile](https://www.ycombinator.com/founders/tej-patel)).
  - Twitter/X: @tej_xp, 45 followers ([Teapawt snapshot, Nov 2026](https://www.teapawt.net/tej_xp)).
  - LinkedIn: “Archangel Health (YC F26)” ([LinkedIn public profile title](https://www.linkedin.com/in/tej-patel-873b952a8)); business email: tejpatel@berkeley.edu ([Archangel Health Products, via search snippet](https://www.archangelhealth.ai/products)).
  - GitHub: No public repos found.
- **Co-founder relationship:** Both attended UC Berkeley and joined Entrepreneurs at Berkeley’s Spring 2026 cohort, and Patel described them as longtime friends ([Entrepreneurs at Berkeley on LinkedIn](https://at.linkedin.com/company/entrepreneurs-berkeley), [Y Combinator](https://www.ycombinator.com/companies/archangel-health)).
- **Founder-market fit:** Patel’s clinical-agent deployments and Bhatia’s experience supplying robotics training data cover clinical workflows and dataset production, with backing from Y Combinator ([Patel on LinkedIn](https://www.linkedin.com/in/tej-patel-873b952a8), [Y Combinator](https://www.ycombinator.com/companies/archangel-health)).

## Key Risks

- **Clinical validation:** Sandbox grades can miss failures in live care, where a model must execute the intended action reliably, and Archangel’s published product design addresses part of this gap through stepwise grading and multi-visit tasks ([Stanford HAI, Oct 2026](https://hai.stanford.edu/news/measuring-what-medical-ai-can-actually-do), [Archangel Health Products, via search snippet](https://www.archangelhealth.ai/products)).
- **Data rights and privacy:** Longitudinal records can retain re-identification risk, and Archangel describes Expert Determination, license traceability and limits on onward sharing ([HHS](https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html), [Data Deal Guide, Nov 2026](https://datadealguide.com/providers/archangel-health)).
- **Entity identification:** The startup’s marketplace profile lists Amma Healthtech Inc. DBA Archangel Health, its product footer gives Berkeley while YC gives San Francisco, and Florida separately registers an Archangel Health, LLC ([Opendatabay](https://www.opendatabay.com/data-providers/9c944de2-dc51-4bd1-ba14-4e66f1a78553), [Archangel Health Products, via search snippet](https://www.archangelhealth.ai/products), [Y Combinator](https://www.ycombinator.com/companies/archangel-health), [Florida Division of Corporations](https://search.sunbiz.org/Inquiry/CorporationSearch/SearchResultDetail?aggregateId=flal-l13000158140-96ff34d5-e116-487d-b300-63c1a7ca1ea4)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $645.4M projected global healthcare AI training dataset market in 2026, 12.9% CAGR for 2026–2033 ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-training-dataset-healthcare-market-report)) |
| SAM | No public data found |
| Traction | Company-reported use by frontier labs and medical AI developers ([Y Combinator, Fall 2026](https://www.ycombinator.com/companies/archangel-health)), current-product coverage ([Founderland, Nov 2026](https://founderland.ai/articles/archangel-health-launches-rl-environments-to-make-medical-ai-mvztp3dq)) |
| Revenue Signal | No public data found |
| Founders | Aryaa Bhatia (co-CEO): UC Berkeley, Plureto, LLNL ([YC profile](https://www.ycombinator.com/founders/aryaa-bhatia)). Tej Patel (co-CEO): UC Berkeley, SimCare AI, Cedars-Sinai ([YC profile](https://www.ycombinator.com/founders/tej-patel)). Roles ([Entrepreneurs at Berkeley](https://www.entrepreneursatberkeley.com/founders)) |
| Competitors | BioStack ($10M reported, revenue unknown, multimodal hospital records) ([aVenture](https://aventure.vc/companies/biostack-platforms-san-francisco-ca-us/fundraising), [BioStack](https://www.getbiostack.com/announcements)). Osseus ($500K reported, revenue unknown, medical and biological post-training) ([CB Insights](https://www.cbinsights.com/company/osseus/financials), [YC](https://www.ycombinator.com/companies/osseus)). Centaur.ai ($31M-plus announced, revenue unknown, on-demand annotation) ([Series A announcement](https://www.dotmed.com/news/story/55812), [Centaur.ai](https://centaur.ai/post/announcing-our-16m-series-b-to-accelerate-ai-for-health-and-science)) |
| Moat Signals | Company-reported specialist grading and dataset provenance records ([Opendatabay](https://www.opendatabay.com/data-providers/9c944de2-dc51-4bd1-ba14-4e66f1a78553)) |
| Risk Factors | Transfer from sandbox to live care ([Stanford HAI](https://hai.stanford.edu/news/measuring-what-medical-ai-can-actually-do)), de-identification and license scope ([HHS](https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html), [Data Deal Guide](https://datadealguide.com/providers/archangel-health)) |
| Founder Reach | Bhatia: X 34 ([TwStalker, Sep 2026](https://www6.twstalker.com/AryaaBhatia)), LinkedIn 3K ([LinkedIn, Oct 2026 snapshot](https://www.linkedin.com/in/aryaa-bhatia-8aaaa0319)). Patel: X 45 ([Teapawt, Nov 2026](https://www.teapawt.net/tej_xp)), LinkedIn 2K ([LinkedIn, Oct 2026 snapshot](https://www.linkedin.com/in/tej-patel-873b952a8)) |
| Distribution Signals | Opendatabay provider profile dated August 24, 2026 ([Opendatabay](https://www.opendatabay.com/data-providers/9c944de2-dc51-4bd1-ba14-4e66f1a78553)) |
| Emails | tejpatel@berkeley.edu — Tej Patel, co-CEO and published product contact ([Archangel Health Products, via search snippet](https://www.archangelhealth.ai/products)) |
