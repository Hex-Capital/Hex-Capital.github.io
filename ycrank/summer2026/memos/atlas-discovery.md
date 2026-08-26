# Atlas Discovery

> Predicting human response to drugs in clinical trials

| Field | Value |
|-------|-------|
| Website | https://atlasdiscovery.bio |
| YC Page | https://www.ycombinator.com/companies/atlas-discovery |
| Batch | Summer 2026 |
| Industry | Healthcare / Healthcare -> Drug Discovery and Delivery |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | AI-powered Drug Discovery, Drug discovery, Biotechnology |
| YC Partner | Ankit Gupta |
| Emails | founders@atlasdiscovery.bio |

## The Idea

- **Problem:** Nine of ten drugs fail in clinical trials, while biopharma relies on cell cultures, animal models, and human trials that can cost hundreds of millions of dollars and take nearly 15 years because the earlier methods do not reliably predict individual human response ([YC launch](https://www.ycombinator.com/launches/RqJ-atlas-discovery-foundation-models-that-predict-patient-outcomes), Jul 2026).
- **Approach:** Atlas pretrains foundation models on preclinical and clinical gene-expression data, embeds patient biology into a lower-dimensional representation, and trains a trial-specific classifier to separate responders from non-responders ([YC launch](https://www.ycombinator.com/launches/RqJ-atlas-discovery-foundation-models-that-predict-patient-outcomes), Jul 2026; [Atlas case study](https://atlasdiscovery.bio/clinical-trial-response-prediction), Jun 2026).
- **Differentiation:** Unlearn forecasts control-arm outcomes with digital twins, Owkin combines multimodal patient data with biomarkers and covariate adjustment, and PhaseV applies causal ML to trial design and subgroup selection, whereas Atlas centers transcriptomic foundation models on predicting treatment response ([Unlearn](https://www.unlearn.ai/digital-twins); [Owkin](https://www.owkin.com/drug-development-approach); [PhaseV](https://www.prnewswire.com/news-releases/phasev-lands-50m-series-a-to-supercharge-ai-for-clinical-development-backed-by-top-vcs-and-trusted-by-leading-pharma-clients-302453743.html)).
- **Business Model:** [Inferred]: Enterprise research partnerships, model licensing, or trial-specific analysis fees for biopharma are possible monetization paths because Atlas seeks introductions to clinical-development teams, but no pricing is public ([YC launch](https://www.ycombinator.com/launches/RqJ-atlas-discovery-foundation-models-that-predict-patient-outcomes), Jul 2026).
- **TAM/SAM:** The broader AI-in-clinical-trials market was estimated at $3.8 billion in 2025 and forecast to reach $77.3 billion by 2034 at a 39.14% CAGR, while no public SAM was found for patient-response prediction specifically ([Fortune Business Insights](https://www.fortunebusinessinsights.com/ai-in-clinical-trials-market-114081), 2026).
- **GTM / Distribution:** Atlas explicitly seeks hospital and health-system data partnerships plus introductions to biopharma clinical-trial and drug-development teams, indicating a partnership-led enterprise channel ([YC launch](https://www.ycombinator.com/launches/RqJ-atlas-discovery-foundation-models-that-predict-patient-outcomes), Jul 2026).

## Defensibility

- **Moat today:** No exclusive data or patents were disclosed; the current technical evidence includes two public single-cell-model preprints and an open-source repository with four stars ([bioRxiv](https://www.biorxiv.org/content/10.64898/2026.02.19.705033v2); [GitHub](https://github.com/sanjukta7/aivc-dcm), Aug 2026).
- **Future moat:** [Inferred]: Exclusive hospital and biopharma datasets linking pretreatment biology to outcomes could produce a proprietary cross-trial dataset, but Atlas is still requesting these partnerships ([YC launch](https://www.ycombinator.com/launches/RqJ-atlas-discovery-foundation-models-that-predict-patient-outcomes), Jul 2026).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Owkin reports data relationships spanning more than 800 hospitals, while Unlearn and PhaseV already sell adjacent clinical-development models, and Atlas’s published DCM code and weights are open ([Owkin](https://www.owkin.com/newsfeed/owkin-brings-biology-super-intelligence-closer-to-reality-with-new-ai-infrastructure-for-biological-breakthroughs), Jan 2026; [GitHub](https://github.com/sanjukta7/aivc-dcm)).

## Market & Traction

- **Traction signals:**
  - Retrospective response-prediction results of 0.7–0.9 AUROC across multiple cancer and autoimmune clinical trials ([YC launch](https://www.ycombinator.com/launches/RqJ-atlas-discovery-foundation-models-that-predict-patient-outcomes), Jul 2026).
  - UNIFI case study achieved 0.760 AUROC on 358 treated patients and modeled 458 fewer participants at matched statistical power ([Atlas case study](https://atlasdiscovery.bio/clinical-trial-response-prediction), Jun 2026).
  - Research presented at ICLR, CSHL, and ICML venues ([company website](https://atlasdiscovery.bio/), Aug 2026).
  - Backed by Y Combinator, Pear, and Glasswing, with investment amounts undisclosed ([company website](https://atlasdiscovery.bio/), Aug 2026).
  - 139 company LinkedIn followers ([LinkedIn](https://www.linkedin.com/posts/atlas-discovery_drugdiscovery-foundationmodels-techbio-activity-7475273281244385280-7yHB), Aug 2026).
  - Zero jobs listed on the YC company page ([YC company page](https://www.ycombinator.com/companies/atlas-discovery), Aug 2026).
- **Competitors (minimum 3, up to 5):**
  - Unlearn ($134.85M raised, revenue unknown): predicts individual control outcomes through digital twins rather than Atlas’s drug-response classification ([Unlearn funding](https://www.clay.com/dossier/unlearnai-funding)).
  - Owkin ($304.1M raised, revenue unknown): uses an established multimodal patient-data network for biomarkers, diagnostics, and development rather than focusing only on transcriptomic response models ([Owkin funding](https://www.owkin.com/faqs/how-much-investment-has-owkin-recieved)).
  - PhaseV ($65M raised, revenue unknown): provides causal-ML trial optimization, operations, and subgroup analysis rather than Atlas’s preclinical-to-clinical foundation-model approach ([PhaseV announcement](https://www.prnewswire.com/news-releases/phasev-lands-50m-series-a-to-supercharge-ai-for-clinical-development-backed-by-top-vcs-and-trusted-by-leading-pharma-clients-302453743.html), May 2025).
- **Why now:** [Inferred]: FDA’s January 2025 AI drug-development guidance and January 2026 FDA-EMA principles established risk-based evaluation criteria for AI-generated regulatory evidence as biological foundation models became trainable across millions of samples ([FDA](https://www.fda.gov/about-fda/center-drug-evaluation-and-research-cder/artificial-intelligence-drug-development); [Atlas case study](https://atlasdiscovery.bio/clinical-trial-response-prediction)).

## Founders & Team

- **Shaamil Karim (CEO and Co-founder):**
  - Background: Dartmouth computer-science and economics student who previously worked with Cellarity and Asimov and coauthored Atlas’s two 2026 single-cell-model preprints ([Contrary](https://contrary.com/blog/vp-class-of-2023); [bioRxiv](https://www.biorxiv.org/content/10.64898/2026.06.15.732063v1)).
  - Twitter/X: No public account found.
  - LinkedIn: “CEO @ Atlas Discovery \| YC S26,” with 7K followers ([LinkedIn](https://www.linkedin.com/in/shaamilkarim), Aug 2026).
  - GitHub: No public repos found.
- **Sanjukta Bhattacharya (Co-founder):**
  - Background: University of Bristol AI-and-biology PhD student, former independent researcher at Los Alamos National Laboratory, and University of Edinburgh research-master’s graduate working on gene-expression models ([personal site](https://sanjukta7.github.io/homepage/)).
  - Twitter/X: @splicewiring; count not retrievable ([personal site](https://sanjukta7.github.io/homepage/)).
  - LinkedIn: “Atlas Discovery,” with 4K followers ([LinkedIn](https://www.linkedin.com/in/sanjukta-b-82b541198), Aug 2026).
  - GitHub: @sanjukta7; `aivc-dcm` has four stars ([GitHub](https://github.com/sanjukta7/aivc-dcm), Aug 2026).
- **Christian Gensbigler (Co-founder):**
  - Background: Dartmouth Class of 2028 undergraduate, Nguyen Lab researcher, Dartmouth Cancer Scholar, and coauthor of two 2026 single-cell-model preprints ([Dartmouth](https://sites.dartmouth.edu/nguyen-group/people/); [bioRxiv](https://www.biorxiv.org/content/10.64898/2026.06.15.732063v1)).
  - Twitter/X: No public account found.
  - LinkedIn: Profile linked by Atlas, but headline and follower count are not retrievable ([YC launch](https://www.ycombinator.com/launches/RqJ-atlas-discovery-foundation-models-that-predict-patient-outcomes)).
  - GitHub: No public repos found.
- **Co-founder relationship:** All three founders coauthored the DCM and ExpressionVAE research, while Karim and Gensbigler share a Dartmouth affiliation ([bioRxiv DCM](https://www.biorxiv.org/content/10.64898/2026.02.19.705033v2); [bioRxiv ExpressionVAE](https://www.biorxiv.org/content/10.64898/2026.06.15.732063v1)).
- **Founder-market fit:** [Inferred]: Bhattacharya’s AI-biology and gene-expression research, Karim’s computational-biology internships, and Gensbigler’s bioengineering and cancer-program work align with the company’s patient-response modeling scope ([personal site](https://sanjukta7.github.io/homepage/); [Contrary](https://contrary.com/blog/vp-class-of-2023); [Dartmouth](https://sites.dartmouth.edu/nguyen-group/people/)).

## Key Risks

- **Retrospective-validation risk:** Atlas states that the UNIFI predictor was trained and evaluated on data from the same trial and therefore could not actually have been used to enrich that trial, while direct cross-trial generalization is currently described as infeasible for stratification decisions ([Atlas case study](https://atlasdiscovery.bio/clinical-trial-response-prediction), Jun 2026).
- **Clinical-data dependency:** The product requires linked molecular and treatment-outcome data that Atlas says remain in disconnected silos, and the company is still seeking hospital data and research partnerships ([company website](https://atlasdiscovery.bio/); [YC launch](https://www.ycombinator.com/launches/RqJ-atlas-discovery-foundation-models-that-predict-patient-outcomes)).
- **Regulatory-evidence burden:** FDA’s AI framework requires context-specific credibility, data governance, performance assessment, and lifecycle controls, while the January 2025 guidance remains draft and nonbinding ([FDA guidance](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/considerations-use-artificial-intelligence-support-regulatory-decision-making-drug-and-biological), Jan 2025).
- **Funded competition:** Unlearn, Owkin, and PhaseV have disclosed $134.85M, $304.1M, and $65M respectively and address overlapping trial-design, patient-modeling, or subgroup-analysis workflows ([Unlearn](https://www.clay.com/dossier/unlearnai-funding); [Owkin](https://www.owkin.com/faqs/how-much-investment-has-owkin-recieved); [PhaseV](https://www.prnewswire.com/news-releases/phasev-lands-50m-series-a-to-supercharge-ai-for-clinical-development-backed-by-top-vcs-and-trusted-by-leading-pharma-clients-302453743.html)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3.8B global AI-in-clinical-trials market in 2025, forecast to reach $77.3B by 2034 at 39.14% CAGR (Fortune Business Insights, 2026) |
| SAM | No public data found |
| Traction | 0.7–0.9 retrospective AUROC across cancer and autoimmune trials; 0.760 AUROC on 358 UNIFI patients; research at three conference venues (YC Launch and Atlas case study, Jun–Jul 2026) |
| Revenue Signal | No public data found |
| Founders | Shaamil Karim (CEO): Dartmouth CS/economics and former Cellarity/Asimov intern (Contrary); Sanjukta Bhattacharya (Co-founder): Bristol AI-biology PhD and former LANL researcher (personal site); Christian Gensbigler (Co-founder): Dartmouth ’28 researcher and Cancer Scholar (Dartmouth) |
| Competitors | Unlearn ($134.85M raised, revenue unknown, control-outcome digital twins); Owkin ($304.1M raised, revenue unknown, multimodal patient-data network); PhaseV ($65M raised, revenue unknown, causal-ML trial optimization) (company funding announcements) |
| Moat Signals | Two public single-cell-model preprints and open-source DCM code with four GitHub stars; no exclusive data or patents disclosed (bioRxiv and GitHub, Aug 2026) |
| Risk Factors | Same-trial retrospective validation and limited cross-trial generalization (Atlas case study), dependence on hospital outcome data (YC Launch), context-specific regulatory credibility requirements (FDA, 2025) |
| Founder Reach | Karim: LinkedIn 7K followers (LinkedIn, Aug 2026); Bhattacharya: LinkedIn 4K, X @splicewiring count unavailable, GitHub top repo four stars (LinkedIn, personal site, GitHub, Aug 2026); Gensbigler: no public counts found |
| Distribution Signals | 139 LinkedIn followers and zero YC-listed jobs (LinkedIn and YC company page, Aug 2026) |
| Emails | founders@atlasdiscovery.bio (YC Launch, Jul 2026) |
