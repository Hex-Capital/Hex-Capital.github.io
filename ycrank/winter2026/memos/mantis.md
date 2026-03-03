# Mantis

> Physics-Enhanced Datasets for Low-Resource Machine Learning

| Field | Value |
|-------|-------|
| Website | https://mantisbiotech.com/ |
| YC Page | https://www.ycombinator.com/companies/mantis |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 3 |
| Location | New York, NY, USA |
| Tags | Artificial Intelligence, Sports Tech, Biotech, Biotechnology |
| YC Partner | Gustaf Alstromer |
| Emails | No public data found |

## The Idea

**Problem:** Clinical trials face pervasive data quality issues. According to the company's YC launch post, 80% of clinical trials are delayed by data inaccuracies arising from manual entry, inconsistent practices, and lack of validation systems, with each trial losing approximately $15M due to these data quality issues (YC company page). The current landscape forces scientists to conduct weeks-long data projects to answer complex queries, relying on fragmented data sources across EDC, CTMS, labs, and omics systems. The customer segment is pharmaceutical and biotech companies running clinical trials and developing medical devices.

**Approach:** Mantis combines large language models with high-fidelity physics simulations to create a domain-aware data platform for life sciences. The platform integrates across clinical systems (EDC, CTMS, labs, omics) to create canonical, versioned datasets with complete traceability (YC company page). The company describes this as "Databricks for Biomedical and Clinical Data" (YC launch post). The platform encodes biological and clinical meaning directly into reusable datasets, enabling scientists to answer complex queries instantly rather than through multi-week data projects.

**Differentiation:** Unlike general-purpose data platforms (e.g., Databricks, Snowflake), Mantis embeds domain-specific biological and clinical semantics directly into the data layer. Compared to Unlearn.AI, which focuses specifically on generating digital twin control arms to reduce placebo group sizes, Mantis targets the broader clinical data infrastructure layer — integrating, validating, and structuring data across the full trial lifecycle. Compared to synthetic data generators like Syntegra or Simulants (Medidata), Mantis combines physics simulation with LLMs rather than purely statistical synthesis, and positions as an infrastructure platform rather than a point solution for synthetic patient records.

**Business Model:** No pricing page is visible on the company website. [Inferred]: Most likely monetization path is SaaS subscription or consumption-based pricing for data platform access, consistent with the "Databricks for Biomedical and Clinical Data" positioning. Enterprise contracts with pharma and biotech companies are the likely revenue model.

**TAM/SAM:** The global clinical data management system market was valued at approximately $3.46 billion in 2025, projected to reach $8.90 billion by 2034 at a CAGR of 11.09% (Precedence Research, 2025 via search snippet). The broader clinical trial management system market was valued at $2.27 billion in 2025, projected to reach $7.28 billion by 2035 at a CAGR of 12.36% (Precedence Research, 2025 via search snippet). The SAM — the subset of clinical data management specifically addressable by a physics-enhanced, domain-aware data platform — is a fraction of the broader CDMS market. No public SAM estimate specific to this segment was found.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct enterprise sales to pharmaceutical and biotech companies conducting clinical trials, given the B2B infrastructure positioning and the high-value, low-volume nature of clinical trial data contracts. The YC network and the founder's biomedical industry connections (via Louiza Labs, UW bioengineering ecosystem) likely serve as initial pipeline sources.

## Defensibility

The combination of physics simulation with LLMs for clinical data represents technical complexity that requires deep domain expertise in both biomedical engineering and machine learning. If the platform accumulates structured clinical trial datasets with embedded biological semantics, this could create a data moat over time as the models improve with more domain-specific training data. Switching costs could develop as customers build workflows and integrations around the canonical dataset format.

No public evidence of patents, regulatory certifications, or network effects was found at this stage.

**Market structure:** [Inferred]: Large incumbents in clinical data management (Medidata/Dassault, Oracle Health Sciences, Veeva) have existing data infrastructure but may face difficulty integrating physics-simulation-based approaches due to architectural differences from their current statistical and rule-based systems. Business model cannibalization is a factor — incumbents profit from existing data management workflows and may be reluctant to disrupt those with a fundamentally different simulation-based approach. No structural barrier identified at this stage beyond technical integration complexity.

**Commoditization risk:** The approach requires expertise at the intersection of physics simulation, LLMs, and clinical/biomedical domain knowledge — a relatively narrow talent pool. However, well-funded competitors like Unlearn.AI ($130M+ raised) are building adjacent digital twin capabilities, and large platform companies (Medidata, Veeva) have the resources and clinical data access to develop competing offerings if the market segment proves valuable.

## Market & Traction

**Traction signals:**
- Company LinkedIn page exists (LinkedIn, as of research date) — follower count not retrievable
- Georgia Witchel's Twitter/X: @GWitchel — 7 followers (X.com via search snippet)
- YC launch post published ("Mantis - Databricks for Biomedical and Clinical Data") with video demonstration (YC company page)
- Website (mantisbiotech.com) redirects to mantislabs.com with a landing page offering a whitepaper and case studies (company website)
- No job postings listed (YC company page)
- No Product Hunt launch found for this specific Mantis product
- No app store listings, Chrome extension, or download counts found
- No Discord/Slack community found
- No public revenue, user count, or customer metrics found

**Competitive landscape:**

1. **Unlearn.AI** ($130M+ total raised; $50M Series C, Feb 2024; revenue unknown) — Focuses specifically on AI-powered digital twins for generating synthetic control arms in clinical trials, enabling smaller placebo groups. EMA-qualified and FDA-aligned methods. Differentiator vs. Mantis: point solution for trial design optimization vs. Mantis's broader data infrastructure positioning (BusinessWire, Feb 2024).

2. **Syntegra** ($5.625M seed; $770K revenue with 7-person team per Getlatka via search snippet) — Generates synthetic patient data for healthcare analytics and research. Partners include NIH and Gates Foundation for COVID-19 synthetic data. Differentiator vs. Mantis: purely statistical synthetic data generation without physics simulation, focused on patient record synthesis rather than clinical trial data infrastructure (PR Newswire, 2022; Getlatka via search snippet).

3. **Simulants (Medidata/Dassault Systèmes)** (backed by Dassault Systèmes; revenue unknown as internal product) — AI-powered synthetic data from Medidata's repository of 30,000+ cross-sponsor trials and 9M patients. Differentiator vs. Mantis: access to massive proprietary historical trial data; positioned as a feature within a larger platform rather than a standalone infrastructure layer (Applied Clinical Trials Online via search snippet).

4. **MDClone** (funding not confirmed in search; revenue unknown) — Synthetic data platform for healthcare systems enabling research and analytics without patient privacy risk. Differentiator vs. Mantis: focused on health system data rather than clinical trial data specifically.

**Why now:** [Inferred]: Several converging factors create the opening: (1) LLM capabilities reached sufficient maturity in 2023-2025 to enable natural-language querying of complex biological datasets; (2) FDA and EMA guidance on digital twins and synthetic data in clinical trials has become more permissive (EMA qualified Unlearn's digital twin methods); (3) clinical trial costs continue to escalate, creating urgency for data infrastructure that reduces delays — the Tufts Center for the Study of Drug Development has documented trial cost increases. The specific catalyst is the convergence of LLM capabilities with regulatory acceptance of simulation-based approaches in clinical settings.

## Founders & Team

**Georgia Witchel** — Founder & CEO
- Education: BS Computer Science, Harvey Mudd College; computational math studies at Johns Hopkins (YC page); MS Biomedical Engineering/Bioengineering, University of Washington (YC page, UW Bioengineering)
- Prior experience: CTO and co-founder of Louiza Labs (YC S25), which simulates human biology for medical device testing and raised $5M+ (UW Bioengineering, YC). Founding engineer at an unnamed sports tech company. Algorithm engineer at Theo Health. Intern at Tesla (search snippet from LinkedIn/Getprog.ai)
- Athletic career: Elite ice climber; competed at Lillehammer 2016 (brought ice climbing to an Olympic stage); broke 8 world records across 4 World Cup circuits; 8-year partnership with Adidas (YC page, Spotify podcast listing)
- Podcast appearance: "From Ice Climbing to Startups: Georgia Witchel's Unconventional Founder Path" — Startup Strides podcast, Ep 58 (Spotify)
- Substack: techstacksf.substack.com — writes about metrics and technology
- Twitter/X: @GWitchel — 7 followers (X.com via search snippet)
- LinkedIn: linkedin.com/in/georgia-witchel-852b78149/ — "CEO at Mantis Biotech" (LinkedIn)
- GitHub: github.com/gwitchel — "Middleland" Unity game repo; no star counts retrieved (GitHub via search snippet)

**Additional team members** (not listed as founders on YC page):
- Sarah Jiang — appears on LinkedIn as associated with Mantis Biotech; background includes biostats PhD studies and work guiding AI startups (LinkedIn via search snippet). Role not confirmed from public sources.
- Johren Carpenter — Master of Applied Bioengineering graduate; appeared in LinkedIn results associated with Mantis Biotech (LinkedIn via search snippet). Role not confirmed from public sources.

**Co-founder relationship:** Georgia Witchel is listed as the sole founder on the YC page. No co-founder relationship to assess.

**Founder-market fit:** Georgia Witchel has a technical background spanning computer science (Harvey Mudd), computational math (Johns Hopkins), and biomedical engineering (UW), directly relevant to building a platform combining physics simulation with ML for clinical data. Her prior company, Louiza Labs (YC S25), operated in a closely related domain — simulating human biology for medical device testing — providing direct experience with the technical and market challenges of physics-based biomedical simulation. Her CTO role at Louiza Labs and engineering experience at Theo Health and a sports tech company provide hands-on engineering depth. No advisors, board members, or notable investors were identified in public sources.

## Key Risks

**Founder split from prior YC company:** Georgia Witchel was CTO and co-founder of Louiza Labs (YC S25), which operates in a closely related domain (physics-based simulation of human biology for medical devices). She is now CEO of Mantis (YC W26), a separate company with overlapping technology themes. The relationship between the two companies — whether amicable spin-out, IP separation, or competitive overlap — is not publicly documented. This creates potential IP entanglement and competitive friction risks with Louiza Labs, which has raised $5M+ (UW Bioengineering).

**Brand and name disambiguation:** "Mantis" is an extremely common brand name shared by Mantis VC (venture capital firm), Mantis Robotics, Mantis Health (surgical visualization), MantisBT (bug tracker), Mantis Innovation (energy), and others. The company website mantisbiotech.com redirects to mantislabs.com. This name collision may cause SEO challenges, investor confusion, and brand-building friction.

**Narrow founder team in a regulated domain:** With a team of 3 and a sole technical founder, the company must simultaneously build a complex product combining physics simulation, LLMs, and clinical data integration while navigating pharma/biotech enterprise sales cycles and potential regulatory requirements (FDA, EMA). The platform spans multiple deep technical domains (physics simulation, NLP, clinical informatics) that typically require specialized expertise in each.

**Well-funded incumbent competition:** Unlearn.AI has raised $130M+ and has EMA-qualified methods, while Simulants leverages Medidata's proprietary dataset of 30,000+ clinical trials and 9M patients. Both incumbents have significant data access advantages and regulatory credibility that are difficult to replicate. Enterprise clinical data infrastructure sales cycles are long, and pharma companies tend toward established vendors for regulatory-sensitive workflows.

**Product positioning ambiguity:** Public descriptions span multiple framings — "digital twin company," "Databricks for Biomedical and Clinical Data," "domain-aware data platform," and "unified biomedical device testing and regulatory platform" (Extruct AI). This range of descriptions may reflect early-stage iteration, but it also suggests the product positioning and target use case may still be converging.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Clinical data management system market: ~$3.46B in 2025, projected $8.90B by 2034, 11.09% CAGR (Precedence Research, 2025 via search snippet) |
| SAM | No public data found for this specific segment |
| Traction | YC W26 launch post published (YC company page); whitepaper and case studies listed on website (mantislabs.com). No public user counts, revenue, or customer metrics found |
| Revenue Signal | No public data found |
| Founders | Georgia Witchel (Founder & CEO): Harvey Mudd CS, Johns Hopkins computational math, UW Bioengineering MS; CTO/co-founder of Louiza Labs (YC S25, raised $5M+); elite ice climber (8 world records); founding engineer at sports tech company |
| Competitors | Unlearn.AI ($130M+ raised, revenue unknown, AI digital twins for clinical trial control arms); Syntegra ($5.6M raised, ~$770K revenue per Getlatka via search snippet, synthetic patient data); Simulants/Medidata (Dassault Systèmes-backed, revenue unknown, synthetic data from 30K+ trial repository); MDClone (funding unconfirmed, revenue unknown, health system synthetic data) |
| Moat Signals | Technical complexity at intersection of physics simulation, LLMs, and clinical domain knowledge. No patents, regulatory certifications, or data moat confirmed publicly |
| Risk Factors | Founder split from prior related YC company (Louiza Labs), brand name collision with multiple "Mantis" entities, well-funded incumbents with data/regulatory advantages |
| Founder Reach | Georgia Witchel: Twitter @GWitchel 7 followers, LinkedIn linkedin.com/in/georgia-witchel-852b78149/, GitHub github.com/gwitchel (star count not retrieved) |
| Distribution Signals | No public data found |
| Emails | No public data found |
