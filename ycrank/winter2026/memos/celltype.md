# CellType

> The agentic drug company. We simulate human biology.

| Field | Value |
|-------|-------|
| Website | https://www.celltype.com |
| YC Page | https://www.ycombinator.com/companies/celltype |
| Batch | Winter 2026 |
| Industry | Healthcare / Healthcare -> Drug Discovery and Delivery |
| Team Size | 2 |
| Location | New York, NY, USA |
| Tags | AI-powered Drug Discovery, Artificial Intelligence, Machine Learning, Biotech, Therapeutics |

## The Idea

**Problem:** Drug discovery is slow, expensive, and has high failure rates. The average cost to bring a single drug to market exceeds $1 billion, and ~90% of drugs fail in clinical trials. Pharmaceutical companies rely on sequential, labor-intensive experimental pipelines—target identification, hit discovery, lead optimization, toxicity screening, and clinical trial design—each requiring months or years of wet-lab work. The fundamental challenge is that in vitro and animal model results often do not translate to humans, leading to late-stage clinical failures.

**Approach:** CellType builds biological foundation models that simulate human biology, combined with AI agents that autonomously execute the full drug discovery pipeline. The core technology, Cell2Sentence (C2S), converts single-cell gene expression data into natural language sequences—gene names ordered by descending expression—enabling large language models to natively reason about cellular biology (YC page). The scaled version, C2S-Scale, is a 27-billion-parameter model co-developed with Google DeepMind and Yale, built on Google's Gemma architecture (Google Blog, Oct 2025). This creates a "virtual human"—a computational model that can simulate drug responses, predict toxicity, stratify patients, and run virtual trials before any physical experiment (YC page). The AI agents layer automates the reasoning and decision-making across discovery stages, with the philosophy "AI agents do the work, humans steer the science" (YC page).

**Differentiation:** Most AI drug discovery platforms focus on specific pipeline stages—molecular generation (Isomorphic Labs), phenomic screening (Recursion), or clinical prediction (Valo Health). CellType's approach differs in two ways: (1) it operates at the single-cell biology level, translating cellular states into language that LLMs can reason about, rather than working solely with molecular structures or imaging data; and (2) it aims to automate the entire discovery pipeline end-to-end via agentic AI, rather than offering point tools. The Cell2Sentence framework is unique in converting scRNA-seq data into a text-based format amenable to LLM training, a method validated via publication at ICML 2024 (ICML 2024) and subsequent coverage in Google's official blog (Google Blog, Oct 2025).

**Business Model:** No public pricing page is visible on celltype.com. The YC page states they are "working with Top 10 pharma" with "100% inbound" deal generation (YC page). [Inferred]: The most likely monetization path is pharma partnerships—either fee-for-service drug discovery collaborations, licensing of the platform, or co-development deals with milestone payments and royalties, consistent with the dominant business model among AI drug discovery companies at this stage.

**TAM/SAM:** The global AI in drug discovery market was valued at approximately $2.35 billion in 2025, projected to reach $13.77 billion by 2033 at a 24.8% CAGR (Grand View Research via search snippet). An alternative estimate places the market at $4.6 billion in 2025, growing to $49.5 billion by 2034 at 30.1% CAGR (Global Market Insights via search snippet). Estimates vary significantly by scope definition, with most clustering around 23–27% CAGR. No public SAM data found specific to CellType's segment (foundation-model-based cellular simulation for drug discovery).

**GTM / Distribution:** The YC page states that CellType is working with "Top 10 pharma" and that deal generation is "100% inbound" (YC page). [Inferred]: The most likely distribution path is top-down enterprise sales to large pharmaceutical companies, driven by the founders' academic reputation and the visibility of the Google DeepMind collaboration. The Google CEO's amplification of the C2S-Scale research serves as a credibility signal that likely generates inbound interest from pharma R&D teams.

## Defensibility

CellType's core defensibility rests on several factors:

- **Proprietary research and IP:** Cell2Sentence was developed in David van Dijk's lab at Yale and published at ICML 2024. The scaled 27B-parameter version (C2S-Scale) was co-developed with Google DeepMind (Google Blog, Oct 2025). This represents years of academic research translated into a commercial product.
- **Data and model moat:** Training biological foundation models at the 27B-parameter scale on single-cell data requires significant compute, curated biological datasets, and domain expertise. The model is publicly available on Hugging Face (GitHub repo), but the agentic pipeline, proprietary validation data, and pharma-specific fine-tuning are not.
- **Academic credibility:** David van Dijk holds an Associate Professorship at Yale with 8,895 citations (Yale School of Medicine profile) and has published foundational methods (MAGIC in Cell 2018, PHATE in Nature Biotechnology 2019). This reputation facilitates pharma partnerships.
- **Google DeepMind relationship:** The collaboration with Google DeepMind on C2S-Scale provides both technical resources and credibility that is difficult for other startups to replicate.

**Market structure:** Large pharmaceutical companies have internal AI teams but face organizational challenges in building and deploying end-to-end agentic discovery pipelines. Their AI efforts tend to be siloed within specific therapeutic areas or pipeline stages. Building a "virtual human" simulation layer requires cross-disciplinary integration of computational biology, LLM engineering, and drug discovery domain expertise that is structurally difficult within large matrix organizations. Additionally, pharma companies' existing wet-lab infrastructure and headcount create institutional inertia against fully automated approaches that might reduce the role of traditional discovery teams.

**Commoditization risk:** The Cell2Sentence methodology is published and the models are open-source on GitHub and Hugging Face. Other research groups or startups could build on this work. Google DeepMind itself could pursue this commercially through Isomorphic Labs. However, the agentic orchestration layer, pharma-specific validation datasets, and enterprise deployment are not open-source. The primary barrier to replication is the combination of deep biological domain expertise with LLM engineering at scale, plus the established pharma relationships.

## Market & Traction

**Traction signals:**
- Working with "Top 10 pharma" with 100% inbound deal generation (YC page)
- Screened 4,000+ drugs and discovered a novel cancer treatment signal, validated in cell lines and human tumor microenvironments (YC page)
- C2S-Scale research featured by Google CEO Sundar Pichai, reportedly reaching 7M+ views (YC page)
- Cell2Sentence published at ICML 2024 (ICML 2024)
- Cell2Sentence GitHub repository: 809 stars, 116 forks (github.com/vandijklab/cell2sentence, fetched Feb 2026)
- C2S-Scale 27B model published as preprint on bioRxiv and models released on Hugging Face (GitHub repo)
- Press coverage: Google official blog (Oct 2025), Yale School of Medicine news, Yale Daily News, Decrypt, AI CERTs News, Medium, BioTecNika, eWeek, MLQ AI (all Oct 2025)
- David van Dijk Twitter/X: @david_van_dijk (follower count not retrievable)
- Ivan Vrkic GitHub: github.com/ivanvrkic — 44 repos, 33 stars, 7 followers (GitHub, fetched Feb 2026)
- No Product Hunt listing found
- No public LinkedIn company page found for CellType

**Competitive landscape:**

1. **Isomorphic Labs** ($600M raised, Mar 2025; revenue unknown; TechCrunch, Mar 2025): An Alphabet/Google DeepMind spinout led by Demis Hassabis. Uses AlphaFold-based protein structure prediction for AI drug design. Has partnerships with Eli Lilly ($1.75B deal) and Novartis ($1.2B deal). Differentiator vs. CellType: focuses on molecular structure prediction (protein folding) rather than cellular-level biological simulation. Backed by Google's compute and data infrastructure.

2. **Recursion Pharmaceuticals** ($461M total raised; $43.69M trailing twelve-month revenue; Tracxn/StockAnalysis via search snippet): Publicly traded (RXRX). Acquired Exscientia for ~$700M. Uses phenomic screening (cell imaging) combined with automated chemistry. Has $1.5B partnership with Bayer. Differentiator vs. CellType: image-based phenotypic screening approach vs. CellType's language-model-based single-cell transcriptomics approach.

3. **Insilico Medicine** (~$525M total raised; $53.6M trailing twelve-month revenue as of Jun 2025; PitchBook via search snippet): IPO'd Dec 2025 for $293M. End-to-end AI platform (Chemistry42, Biology42, Clinical42) with its own clinical pipeline. First AI-discovered drug (ISM001-055 for IPF) entered Phase II. Differentiator vs. CellType: has its own clinical-stage drug pipeline, while CellType operates as a platform/service for pharma partners.

4. **Valo Health** (raised ~$400M; revenue unknown via search snippet): AI-enabled drug discovery platform with $2.7B partnership with Novo Nordisk (expanded to $4.6B) and $3B+ deal with Merck KGaA. Uses patient-centric computational methods integrating EHR, genomic, and clinical data. Differentiator vs. CellType: focuses on patient data integration and clinical prediction rather than cellular-level foundation models.

5. **BenevolentAI** (delisted from Euronext Amsterdam, merged into Osaka Holdings S.à r.l. in March 2025; previously raised ~$400M): AI-powered knowledge graph approach to drug discovery. Had partnerships with AstraZeneca and Merck KGaA. Differentiator vs. CellType: knowledge graph + NLP-based literature mining approach vs. CellType's biological foundation model approach.

**Why now:**
- The release of Google's open-source Gemma family of models in 2024–2025 provided a high-quality base architecture for fine-tuning biological foundation models at scale (Google Blog, Oct 2025).
- Single-cell RNA sequencing data has reached sufficient scale and quality; the Human Cell Atlas and related datasets provide the training data needed for foundation models operating at the cellular level.
- [Inferred]: The convergence of three trends enabled CellType's approach: (1) LLMs reached sufficient capability to reason about biological sequences in 2023–2024, (2) single-cell sequencing costs dropped to the point where millions of cell profiles are available for training, and (3) pharma's willingness to engage with AI-first drug discovery companies accelerated following high-profile deals (Isomorphic-Lilly, Recursion-Bayer, Valo-Novo Nordisk) in 2023–2025.

## Founders & Team

**David van Dijk** — Co-founder & CEO
- Associate Professor of Cardiology (Medicine) at Yale School of Medicine; joint appointments in Computer Science and Internal Medicine (Yale School of Medicine profile)
- PhD in Computer Science, University of Amsterdam and Weizmann Institute of Science (2013); MSc and BSc in Computer Science, Free University of Amsterdam (Yale School of Medicine profile)
- Postdoctoral training at Columbia University (2015) and Yale (Yale School of Medicine profile)
- 67 publications, 8,895 citations (Yale School of Medicine profile). YC page claims 11,000+ citations (possibly Google Scholar count vs. Yale's internal count)
- Creator of MAGIC (published in Cell, 2018) and PHATE (published in Nature Biotechnology, 2019)—foundational methods in computational single-cell biology (PubMed)
- Recent awards: NSF CAREER Award (2025), Google Cloud Award (2025), Roberts Innovation Award (2025) (Yale School of Medicine profile)
- YC page states he "turned down Google to build CellType" (YC page)
- Twitter/X: @david_van_dijk (follower count not retrievable via WebFetch)
- LinkedIn: No public profile URL confirmed
- GitHub: github.com/vandijklab (org) — Cell2Sentence repo has 809 stars (GitHub, fetched Feb 2026)

**Ivan Vrkic** — Co-founder
- Postgraduate Associate at Yale School of Medicine, Internal Medicine Department (Yale School of Medicine profile, updated Mar 2025)
- Education includes ML training at Yale and EPFL (YC page; confirmed by EPFL course repos on GitHub)
- Built software to control CERN's Large Hadron Collider (YC page)
- Led large-scale foundation model training as a founding engineer at a biotech company (YC page)
- Co-developed Cell2Sentence at Yale, published at ICML 2024 (YC page)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/ivan-vrkic-53678a34 (LinkedIn search result; headline not retrievable)
- GitHub: github.com/ivanvrkic — 44 repos, 33 stars, 7 followers; pinned repos include ETH Zürich Deep Learning, EPFL optimization ML course materials, and pytorch-GAT (GitHub, fetched Feb 2026)

**Co-founder relationship:** Both David van Dijk and Ivan Vrkic are affiliated with Yale School of Medicine's Internal Medicine department. Ivan Vrkic is listed as a Postgraduate Associate in van Dijk's department, and the YC page states they "co-built the core tech at Yale (published at ICML)," indicating a direct advisor-student/researcher working relationship at Yale.

**Founder-market fit:** David van Dijk is a tenure-track professor at Yale whose entire research career has focused on computational methods for biological data—particularly single-cell analysis. He created two of the most widely used tools in the field (MAGIC and PHATE), giving him deep domain credibility with both the computational biology and pharma communities. His decision to leave a Google offer and an academic position signals strong commitment. Ivan Vrkic brings engineering depth with experience at CERN (systems engineering) and as a founding engineer at a biotech company (foundation model training), complementing van Dijk's research orientation with production ML engineering skills. The NSF CAREER Award (2025) and Google Cloud Award (2025) further validate van Dijk's standing in the field.

## Key Risks

**Google DeepMind dependency and competition:** The core technology (C2S-Scale) was co-developed with Google DeepMind, and the 27B model is built on Google's Gemma architecture (Google Blog, Oct 2025). Isomorphic Labs, Google DeepMind's own drug discovery subsidiary, has raised $600M (TechCrunch, Mar 2025) and could pursue overlapping approaches. CellType's relationship with Google could shift from collaborative to competitive. Any IP sharing arrangements or exclusivity terms between Yale/CellType and Google are not publicly disclosed.

**Open-source leakage:** The Cell2Sentence paper is published, the codebase has 809 stars on GitHub, and the trained models are available on Hugging Face (GitHub repo). While this drives visibility and credibility, it also means competitors, including well-funded incumbents and other startups, can build on the same foundation. The defensible value must come from the proprietary agentic layer, pharma-specific fine-tuning, and validation data—none of which have public evidence of maturity.

**Academic-to-commercial transition risk:** Both founders are currently Yale-affiliated (van Dijk as Associate Professor, Vrkic as Postgraduate Associate). Managing the transition from academic research to a commercial drug discovery company requires fundamentally different skills: enterprise sales, regulatory strategy, operational scaling, and product management. No evidence of commercial leadership hires, and the company is not currently hiring (YC page).

**Validation gap:** The YC page claims the technology "discovered and validated a new cancer treatment signal" in cell lines and human tumor microenvironments. However, the Google Blog (Oct 2025) notes these results are pre-clinical, have not undergone peer review of the full discovery pipeline, and any therapeutic application would require years of additional research and trials. The gap between computational prediction and clinical validation remains the central challenge for all AI drug discovery platforms.

**Brand disambiguation:** "CellType" is a common term in biology (cell type annotation, cell type classification). Web searches for the company return significant noise from unrelated biological research. This could complicate marketing, SEO, and brand recognition. A separate CERN-affiliated neuroscience startup also appeared in search results under similar naming conventions.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.35B AI in drug discovery market in 2025, projected $13.77B by 2033 at 24.8% CAGR (Grand View Research via search snippet). Alternative: $4.6B in 2025, $49.5B by 2034 at 30.1% CAGR (Global Market Insights via search snippet) |
| SAM | No public data found |
| Traction | 4,000+ drugs screened with novel cancer treatment signal validated (YC page); working with Top 10 pharma, 100% inbound (YC page); research featured by Google CEO Sundar Pichai, 7M+ views (YC page); Cell2Sentence published at ICML 2024; 809 GitHub stars (github.com/vandijklab/cell2sentence, Feb 2026); press coverage in Google Blog, Yale Daily News, Decrypt, eWeek, and others (Oct 2025) |
| Revenue Signal | No public data found |
| Founders | David van Dijk (CEO): Yale Associate Professor, PhD CS Amsterdam/Weizmann, 8,895 citations, creator of MAGIC/PHATE, NSF CAREER Award 2025. Ivan Vrkic (Co-founder): Yale Postgrad Associate, EPFL/Yale ML, ex-CERN, founding engineer at biotech co. |
| Competitors | Isomorphic Labs ($600M raised, revenue unknown, AlphaFold-based molecular design vs. cellular simulation); Recursion ($461M raised, $43.69M TTM revenue, phenomic screening vs. transcriptomic LLM); Insilico Medicine (~$525M raised, $53.6M TTM revenue, own clinical pipeline vs. pharma platform); Valo Health (~$400M raised, revenue unknown, patient data integration vs. cellular foundation models) |
| Moat Signals | Google DeepMind co-development relationship; 809-star open-source Cell2Sentence repo; founder's 8,895 citations and foundational methods (MAGIC, PHATE); ICML 2024 publication; Top 10 pharma inbound relationships (YC page) |
| Risk Factors | Google DeepMind dependency/competition (Isomorphic Labs overlap), open-source leakage of core methodology, academic-to-commercial transition, pre-clinical validation gap, brand disambiguation with common biology term |
| Founder Reach | David van Dijk: Twitter @david_van_dijk (count not retrievable), GitHub 809 stars (vandijklab/cell2sentence). Ivan Vrkic: Twitter not found, LinkedIn linkedin.com/in/ivan-vrkic-53678a34, GitHub 33 stars (ivanvrkic) |
| Distribution Signals | No Product Hunt listing; no app store presence; no Chrome extension; press coverage in Google Blog, Yale School of Medicine News, Yale Daily News, Decrypt, eWeek, MLQ AI, BioTecNika, AI CERTs News (all Oct 2025); Google CEO amplification (7M+ views per YC page) |
