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

**Problem:** Life science researchers spend hours daily converting microscope images into quantitative data, often through manual annotation and measurement (YC company page). Current workflows rely on open-source tools like ImageJ/Fiji, CellProfiler, and QuPath that require significant scripting expertise, or expensive enterprise platforms like Visiopharm and Aivia (Leica) that target pathology departments rather than individual research labs. The manual process is slow, non-reproducible, and limits the analyses researchers can perform.

**Approach:** Researchers upload images and describe their analysis needs in plain language; AI agents then assemble a tailored pipeline, select appropriate ML models for the specific image type, and allow verification at every step before exporting reproducible, publication-ready results (YC company page). The platform includes a library of verified processing nodes and an AI-powered code editor for creating custom building blocks (search snippet from alchemyai.dev). The company claims analysis time reduction from 20 hours to 5 minutes (search snippet from alchemyai.dev) and over 90% reduction in analysis time across labs (YC company page).

**Differentiation:** Unlike open-source tools (CellProfiler, QuPath, napari) that require programming and pipeline-building expertise, Alchemy uses natural language input and agentic assembly. Unlike enterprise pathology platforms (Visiopharm, PathAI, Aivia/Leica) that focus on clinical diagnostics and histopathology, Alchemy targets the broader research microscopy workflow. The agent-driven pipeline assembly and plain-language interface distinguish it from both categories.

**Business Model:** No pricing page was accessible at time of research. [Inferred]: Most likely monetization path is a SaaS subscription model given the "SaaS" tag on the YC page and the platform's cloud-based upload workflow; potential tiering by image volume, number of pipelines, or lab seats.

**TAM/SAM:** The global AI in microscopy market was valued at $1.12B in 2025 and is projected to reach $3.38B by 2033 at 14.83% CAGR (Grand View Research, 2025). The microscopy image analysis software market was estimated at $2.41B in 2024, projected to reach $5.89B by 2031 at 13.4% CAGR (OpenPR, 2024 via search snippet). [Inferred]: The SAM — research-focused (non-clinical) bioimage analysis software — is a subset of these figures, likely in the hundreds of millions, as clinical diagnostics and pathology represent the larger share.

**GTM / Distribution:** [Inferred]: Most likely distribution path is bottom-up adoption within individual research labs, given the product's self-serve upload interface and plain-language UX. Academic labs and biotech R&D teams are the likely initial segment, with potential expansion to CROs and pharma. No public GTM data found.

## Defensibility

- **Data advantage (potential):** Each customer pipeline interaction generates labeled bioimage-model pairings that could improve model selection accuracy over time. This does not exist today at meaningful scale given the company's stage.
- **Workflow lock-in (potential):** Labs that build reproducible pipelines on Alchemy's platform would face switching costs when those pipelines are embedded in publications and SOPs.

No defensibility signals found in public sources beyond the above. [Inferred]: Potential moat could develop via accumulated image-model performance data and a library of validated domain-specific nodes, but is unproven at this stage.

**Market structure:** Enterprise incumbents (Leica/Danaher with Aivia, Zeiss, Nikon) bundle image analysis with microscope hardware sales; an independent SaaS tool targeting researchers directly avoids the hardware sales channel conflict. Open-source tools (CellProfiler, QuPath) lack a commercial entity incentivized to build agentic UX. [Inferred]: The structural gap is that hardware-bundled vendors cannot easily unbundle and sell standalone SaaS analysis, and open-source projects lack resources for productized AI agent workflows.

**Commoditization risk:** Foundation model providers (e.g., general-purpose vision-language models) could lower barriers for competitors. Any ML-capable team with life science domain knowledge could build similar pipeline-assembly tooling. Open-source segmentation models like Cellpose and StarDist are freely available. The barrier is less the model and more the curation of domain-specific validated nodes and end-to-end researcher UX.

## Market & Traction

**Traction signals:**
- Company claims labs have reduced analysis time by over 90% (YC company page). No specific customer count, revenue, or user metrics found in public sources.
- Twitter/X handle: @alchemyai_ (follower count not retrievable) (search result).
- LinkedIn company page: linkedin.com/company/alchemyai-dev (follower count not retrievable) (search result).
- No Product Hunt launch found.
- No press coverage found in named publications.
- 0 job openings listed (YC company page).
- Website not fully accessible at time of research; only title "From Images to Insights" rendered.

**Competitive landscape:**

| Competitor | Differentiator vs. Alchemy | Funding | Revenue |
|---|---|---|---|
| **Visiopharm** (Denmark, est. 2002) | Enterprise desktop+cloud pathology platform with hundreds of validated modules; focused on clinical/pharma rather than general research labs | $26.3M total (Tracxn) | $7.1M in 2023 (Getlatka) |
| **PathAI** (Boston, est. 2016) | Clinical diagnostics and drug development pathology AI; FDA/CE-marked; Quest Diagnostics partnership | ~$255M total (Tracxn); $165M Series C (Fierce Biotech) | Revenue not public |
| **Aivia / Leica (Danaher)** | Acquired by Leica Microsystems in 2021; AI-first 2D-5D visualization and analysis bundled with Leica hardware ecosystem | >$15M in NIH SBIR funding pre-acquisition (DRVISION press release); now Danaher subsidiary | Revenue not public |
| **Flywheel.io** (Minneapolis) | Enterprise imaging data management platform for clinical trials and pharma; focus on data curation rather than analysis pipeline | $125.3M+ total; $27.5M raised Dec 2024 (Radiology Business, The SaaS News) | Revenue not public |
| **Open-source (CellProfiler, QuPath, napari, ImageJ)** | Free, widely adopted in academia; require programming/scripting expertise; no commercial support or agentic interface | N/A (grant-funded) | N/A |

**Why now:**
- [Inferred]: The emergence of capable vision-language models and agent frameworks in 2024-2025 enables natural-language-to-pipeline assembly that was not feasible with prior-generation computer vision tools. Foundation model costs have dropped substantially, making it economical to run inference on research microscopy images at scale.
- The AI in microscopy market is projected to grow at 14.83% CAGR through 2033 (Grand View Research, 2025), driven by pharmaceutical and biotech companies incorporating AI-enhanced microscopy into drug discovery workflows.

## Founders & Team

**Phillip Baek** — Co-founder & CEO
- BS Biomedical Engineering, Cockrell School, University of Texas at Austin (LinkedIn).
- M.Ed., Psychological Counseling, Teachers College, Columbia University (LinkedIn via search snippet).
- Exchange research at Peking University on cancer-related fatal weight loss (LinkedIn via search snippet).
- EP Mapping Specialist at Boston Scientific (LinkedIn via search snippet).
- Commercial Intern in Marketing Sales Analytics at Tropicana Brands Group (LinkedIn via search snippet).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/phillip-baek/ — Founder @ Alchemy (LinkedIn).
- GitHub: No public repos found.

**Liam McBride** — Co-founder & CTO
- BS Electrical and Computer Engineering + MS Computer Science, University of Illinois Urbana-Champaign (LinkedIn via search snippet).
- Originally from Mountain View, CA (YC company page).
- Interests in AI safety and hardware-software co-design (LinkedIn via search snippet).
- Received first patent at age 19 as a UIUC freshman (LinkedIn via search snippet).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/ljmcb/ — Founder, CTO - Alchemy AI (LinkedIn).
- GitHub: No confirmed public repos found.

**Co-founder relationship:** Both founders are recent graduates (Baek from UT Austin/Columbia, McBride from UIUC). No shared employer or university overlap is visible from Phase 3 findings.

**Founder-market fit:** Baek brings biomedical engineering training and medical device experience (Boston Scientific EP mapping, cancer research at Peking University), providing domain knowledge of life science imaging workflows. McBride brings strong computer engineering and CS credentials from UIUC with early patent activity and AI/hardware interests, covering the ML and systems engineering requirements. [Inferred]: The pairing of biomedical domain expertise with ML engineering is relevant, though neither founder has documented prior experience specifically in bioimage analysis software or computational biology research tools.

## Key Risks

**Name confusion with Alchemy (blockchain):** The well-known Web3 development platform Alchemy (alchemy.com, $345M+ raised) shares the same name. The blockchain Alchemy's own "AlchemyAI" AI tools for Web3 (announced June 2023 on X) further compounds the branding overlap. This creates SEO competition, brand dilution, and potential investor/customer confusion.

**Open-source substitution:** CellProfiler, QuPath, napari, and ImageJ/Fiji are deeply entrenched in academic research workflows, are free, and have large contributor communities. Researchers may resist paying for tooling when grant-funded alternatives exist, particularly in budget-constrained academic settings.

**Incumbent acquisition response:** Leica/Danaher acquired DRVISION (Aivia) in 2021, and microscope manufacturers (Zeiss, Nikon, Olympus) are actively integrating AI analysis into their platforms. A hardware vendor could bundle comparable AI pipeline features with existing microscope sales, undermining standalone SaaS pricing.

**Narrow founding domain experience:** While Baek has biomedical engineering training and medical device experience, neither founder has documented prior employment in bioimage analysis, computational biology software, or research microscopy — the specific domain the product targets. This may slow product-market iteration with research lab customers.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.12B in 2025, projected $3.38B by 2033 at 14.83% CAGR (Grand View Research, 2025); microscopy image analysis software $2.41B in 2024 projected $5.89B by 2031 at 13.4% CAGR (OpenPR, 2024 via search snippet) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Phillip Baek (CEO): BS Biomedical Engineering UT Austin, M.Ed. Columbia, Boston Scientific. Liam McBride (CTO): BS ECE + MS CS UIUC, patent at 19. |
| Competitors | Visiopharm ($26.3M raised, $7.1M revenue 2023, enterprise pathology); PathAI (~$255M raised, revenue unknown, clinical diagnostics); Aivia/Leica (Danaher subsidiary, bundled with hardware); Flywheel.io ($125M+ raised, revenue unknown, imaging data management); CellProfiler/QuPath/napari (open-source, free) |
| Moat Signals | No public data found |
| Risk Factors | Name confusion with Alchemy (blockchain), open-source substitution pressure, incumbent acquisition response |
| Founder Reach | No public data found |
| Distribution Signals | No public data found |
| Emails | No public data found |
