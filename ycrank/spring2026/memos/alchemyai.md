# Alchemy

> AI-powered image analysis for life sciences

| Field | Value |
|-------|-------|
| Website | https://www.alchemyai.dev/ |
| YC Page | https://www.ycombinator.com/companies/alchemyai |
| Batch | Spring 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | AI-powered Drug Discovery, Machine Learning, SaaS, Biotech, Automation |
| YC Partner | Aaron Epstein |
| Emails | No public data found |

## The Idea

**Problem:** Biotech and pharma researchers spend significant weekly time on manual microscopy image analysis—converting raw images into numerical data by hand or with legacy tools. A UC Santa Cruz PhD student described spending "3 hours" on H. pylori microscopy analysis that Alchemy reduced to "under 10 minutes" (LinkedIn company page endorsement, 2026). Existing workflows rely on open-source tools (CellProfiler, ImageJ, napari, Ilastik) that require scripting, parameter tuning, and pipeline assembly expertise, or on enterprise platforms (Aivia by Leica, PathAI, Proscia) priced for large pharma and clinical diagnostics labs.

**Approach:** Researchers upload images and describe their analysis needs in plain language. AI agents then assemble a tailored analysis pipeline, select appropriate computer vision models for the specific image type, and allow the researcher to verify each step before exporting reproducible, publication-ready results (YC company page). The company claims a 98% reduction in analysis time (YC company page).

**Differentiation:** Compared to open-source tools (CellProfiler, ImageJ, QuPath), Alchemy eliminates the need for scripting, manual parameter tuning, and pipeline assembly by using natural-language input and AI-driven model selection (YC company page). Compared to enterprise platforms like Aivia (Leica Microsystems), which offers 22 built-in applications and 20 pre-trained deep learning models but requires per-lab subscription licensing (Leica product page), Alchemy targets researchers with a self-service workflow that requires no coding. PathAI and Proscia are focused on clinical diagnostic pathology for large pharma, not general research lab microscopy.

**Business Model:** No public pricing page was found; the website returned only a title line at time of research. [Inferred]: Most likely monetization path is a SaaS subscription model (per-seat or per-lab), consistent with the "SaaS" tag on their YC profile and the company's LinkedIn description of automating "lab's laborious image analysis."

**TAM/SAM:** The global live cell imaging market was valued at $3.13B in 2025 and is projected to reach $4.75B by 2030 at 8.68% CAGR (MarketsandMarkets via search snippet). The broader life sciences analytics market was $40.08B in 2025, projected to reach $76.55B by 2031 at 11.5% CAGR (The Business Research Company via search snippet). [Inferred]: The serviceable segment—image analysis software for academic and industry research labs—is a subset of the live cell imaging market; no public SAM estimate specific to AI-powered research microscopy software was found.

**GTM / Distribution:** [Inferred]: Most likely distribution path is bottom-up product-led growth targeting individual researchers and lab PIs in academic and biotech settings, expanding to team and institutional licenses. The natural-language interface and self-service workflow lower adoption friction. The LinkedIn endorsement from a UC Santa Cruz PhD student suggests early traction in academic labs.

## Defensibility

- **Data advantage (potential):** Each researcher who trains and shares a computer vision model on the platform contributes to a growing model library. [Inferred]: Over time, this could create a network effect where new users benefit from previously trained models, making the platform more valuable as adoption grows. This is unproven at this stage.
- **Switching costs:** Researchers who build reproducible pipelines on Alchemy and cite them in publications face costs in migrating to another tool while maintaining reproducibility. [Inferred]: This creates moderate lock-in once adopted in a lab's workflow.

**Market structure:** Enterprise incumbents (Leica/Aivia, Proscia, PathAI) are oriented toward clinical diagnostics, large pharma, and regulatory-grade workflows. [Inferred]: Serving individual researchers with a self-service, AI-first tool at lower price points would cannibalize neither the incumbents' sales channels (enterprise field sales to hospital pathology labs) nor their regulatory-focused product strategy.

**Commoditization risk:** Open-source tools (CellProfiler, napari, Cellpose) are free and well-maintained by academic consortia. Foundation model providers (e.g., general-purpose vision models) could enable competitors to build similar natural-language-to-pipeline products. The core technical challenge—assembling domain-specific CV pipelines from natural-language prompts—relies on prompt engineering and model orchestration rather than proprietary model architectures. [Inferred]: Barrier to replication is moderate; defensibility depends on execution speed, model library breadth, and researcher adoption.

## Market & Traction

**Traction signals:**
- 719 LinkedIn followers (LinkedIn company page, April 2026)
- UC Santa Cruz PhD student endorsement: reduced H. pylori microscopy analysis from hours to minutes with "outstanding accuracy" and no parameter tuning (LinkedIn company page, 2026)
- Y Combinator Spring 2026 batch acceptance (YC company page)
- Founded in 2024 (LinkedIn company page)
- Additional team members beyond the 2 founders listed on LinkedIn: Luis Reyes Espinoza, Mary Moore (LinkedIn company page)
- 0 job postings on YC (YC company page)
- No Product Hunt listing found
- No public Twitter/X account found for the company
- No app store listings or Chrome extension found
- Website not fully accessible at time of research (returned title only)

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Alchemy |
|---|---|---|
| **Aivia (Leica Microsystems)** | Acquired by Leica (undisclosed sum) (Wiley Analytical Science, 2021) | Enterprise-grade platform with 22 built-in applications and 20 pre-trained DL models; part of Danaher Life Sciences distribution network. Targets institutional buyers, not individual researchers. |
| **PathAI** | ~$490M total raised; $165M Series C (May 2021) (Crunchbase via search snippet). FDA-approved AISight Dx (June 2025) (Precedence Research via search snippet). Acquired by Quest Diagnostics. | Clinical diagnostic pathology focus with FDA clearance; serves pharmaceutical trials and hospital pathology labs rather than general research microscopy. |
| **Proscia** | $130M total raised; $50M round (March 2025) (Proscia press release). 400% YoY growth in daily diagnostic cases (Proscia press release, July 2025). | Concentriq platform focused on diagnostic network monetization; 16 of top 20 pharma companies as customers (Proscia press release). Clinical/diagnostic focus vs. Alchemy's research lab focus. |
| **Aiforia** | Publicly traded (Helsinki); ~$3.12M TTM revenue (Inderes via search snippet, mid-2025). Planning €10M+€10M share issues in 2026-2027. | SaaS platform for pathologists with cloud-based AI model training; serves both research and clinical but at enterprise price points. |
| **Open-source tools (CellProfiler, napari, Cellpose, ImageJ, QuPath, Ilastik)** | N/A (academic/grant-funded) | Free, well-documented, widely cited in publications. Require scripting and manual pipeline configuration. No natural-language interface or AI-driven model selection. |

**Why now:** [Inferred]: Two catalysts opened this window: (1) Foundation models and LLM-based agents reached sufficient capability in 2024–2025 to enable natural-language orchestration of domain-specific CV pipelines—a capability not feasible with pre-2023 models. (2) PathAI's FDA approval of AISight Dx in June 2025 (Precedence Research via search snippet) validated AI-based image analysis in regulated settings, increasing researcher willingness to adopt AI tools for non-clinical research workflows.

## Founders & Team

**Phillip Baek** — Co-founder & CEO
- BS Biomedical Engineering, Cockrell School of Engineering, University of Texas at Austin (LinkedIn via search snippet)
- M.Ed. in Psychological Counseling, Teachers College, Columbia University (LinkedIn via search snippet)
- Previously accepted a role at Boston Scientific as EP Mapping Specialist in San Antonio (LinkedIn via search snippet)
- Led art instruction for K-12 students using Adobe Creative Suite; developed graphic design curriculum (LinkedIn via search snippet)
- Tutored high school students in AP Statistics, Calculus, and Biology (LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/phillip-baek/ — ~2K followers (LinkedIn company page)
- GitHub: No public repos found

**Liam McBride** — Co-founder & CTO
- BS Electrical & Computer Engineering, University of Illinois Urbana-Champaign (LinkedIn via search snippet)
- MS Computer Science, University of Illinois Urbana-Champaign (LinkedIn via search snippet)
- Previously engineered BoBo app (shared living mobile app) using Dart, Flutter, and Firebase; raised $20,000 in non-dilutive funding (LinkedIn via search snippet)
- Recruited and coached a team of UIUC and UT Austin student developers (LinkedIn via search snippet)
- Interest in AI safety and software/hardware co-design (LinkedIn via search snippet)
- Originally from Mountain View, CA (search snippet)
- Twitter/X: No confirmed public account found
- LinkedIn: linkedin.com/in/ljmcb/ — ~490 followers (LinkedIn company page)
- GitHub: No confirmed public repos found (multiple "Liam McBride" GitHub accounts exist; none confirmed as this individual)

**Co-founder relationship:** Baek (UT Austin) and McBride (UIUC) collaborated on the BoBo app, where McBride recruited and coached "a team of UIUC and UT Austin student developers" (LinkedIn via search snippet). A Daily Texan article from April 2024 titled "Students create app to make shared living simpler" appears to reference this project (The Daily Texan, April 2024).

**Founder-market fit:** Baek holds a BS in Biomedical Engineering and has experience in biology education (tutoring AP Biology) and medical device work (Boston Scientific EP Mapping). McBride brings CS/ECE depth from UIUC with full-stack app development and AI interests. [Inferred]: Baek's biomedical engineering background provides domain familiarity with life science imaging workflows, while McBride's engineering depth covers the CV/ML pipeline. No advisors, board members, or notable investors beyond YC were found.

## Key Risks

**Name confusion with Alchemy (blockchain):** The blockchain infrastructure company "Alchemy" (Alchemy Insights, Inc., founded 2013, $564M raised, $10B valuation) shares the same name and dominates search results (Tracxn, PitchBook). This creates SEO disadvantage, brand confusion in fundraising and hiring, and difficulty building organic inbound. The company uses "AlchemyAI" as a differentiator on some platforms.

**Open-source substitution:** CellProfiler, napari, Cellpose, and ImageJ are free, widely cited in publications, and actively maintained by academic communities (Broad Institute, Chan Zuckerberg Initiative). Researchers in academic labs—a primary target segment—are cost-sensitive and accustomed to open-source tools. Alchemy must demonstrate sufficient workflow improvement over free alternatives to justify a paid subscription.

**Thin domain moat:** The core capability—LLM-driven orchestration of CV models for microscopy—relies on generally available foundation models and open-source segmentation tools (e.g., Cellpose). A well-resourced competitor (e.g., Leica integrating LLM-based natural-language workflows into Aivia) could replicate the approach. Defensibility depends on building a proprietary model library and researcher network before incumbents act.

**Founder domain depth:** Baek's biomedical engineering background is relevant but general; neither founder has published research in microscopy, computational biology, or bioimage analysis (no Google Scholar or PubMed results found). The company's credibility with research lab PIs may depend on early validation results and advisor network.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Live cell imaging market: $3.13B in 2025, 8.68% CAGR to $4.75B by 2030 (MarketsandMarkets via search snippet) |
| SAM | No public data found |
| Traction | 719 LinkedIn followers (LinkedIn company page, April 2026); YC S26 batch (YC page); 1 UC Santa Cruz PhD endorsement (LinkedIn, 2026) |
| Revenue Signal | No public data found |
| Founders | Phillip Baek (CEO): BS Biomedical Engineering UT Austin, M.Ed. Columbia, Boston Scientific. Liam McBride (CTO): BS ECE + MS CS UIUC, BoBo app ($20K non-dilutive raised). |
| Competitors | Aivia/Leica (acquired, revenue unknown, enterprise 22-app platform); PathAI (~$490M raised, revenue unknown, FDA-approved clinical diagnostics); Proscia ($130M raised, revenue unknown, 400% case growth YoY); Aiforia (public, ~$3.12M TTM revenue, enterprise SaaS); Open-source (CellProfiler, napari, Cellpose — free, widely adopted) |
| Moat Signals | No public data found |
| Risk Factors | Name confusion with Alchemy blockchain unicorn, open-source substitution risk, thin domain moat |
| Founder Reach | Phillip Baek: LinkedIn ~2K followers. Liam McBride: LinkedIn ~490 followers. No confirmed Twitter/GitHub for either. (LinkedIn company page) |
| Distribution Signals | No public data found |
| Emails | No public data found |
