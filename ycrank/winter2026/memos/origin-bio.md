# Origin

> AI for safer cell & gene therapies

| Field | Value |
|-------|-------|
| Website | https://origin.bio/ |
| YC Page | https://www.ycombinator.com/companies/origin-bio |
| Batch | Winter 2026 |
| Industry | Healthcare / Healthcare -> Drug Discovery and Delivery |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | AI-powered Drug Discovery, Gene Therapy, Cell Therapy, Biotech |
| YC Partner | Ankit Gupta |
| Emails | yash@origin.bio, hiring@origin.bio |

## The Idea

**Problem:** Cell and gene therapies — including CAR-T, AAV-delivered gene therapies, and other programmable medicines — suffer from poor efficacy, toxicity, and lack of cell-type specificity (Ashwini Bhide LinkedIn post citing Origin's framing, Jan 2026). The regulatory DNA elements (promoters, enhancers) that control when and where therapeutic genes turn on are a core safety bottleneck: current approaches lack precision in targeting expression to only the intended cell types and tissues. Existing methods for designing these elements rely on slow rational design or siloed computational tools that either generate sequences or predict function, but not both.

**Approach:** Origin builds AI models that design novel synthetic regulatory DNA sequences (enhancers and promoters) to program precise therapeutic gene expression patterns. Their flagship model, **Axis**, announced October 8, 2025 (Origin blog), is described as "the first AI model that generates regulatory DNA elements and also predicts their function." Axis unifies three capabilities previously siloed in separate models: DNA-to-DNA (generation), DNA-to-function (prediction of transcription factor binding), and function-to-DNA (conditioned generation given a desired cell type and regulatory profile) (Origin blog, Oct 2025). The model uses a shared Transformer backbone with diverging nucleotide and assay prediction heads, trained on ENCODE V4 Registry data. Performance claims: outperforms Google DeepMind's AlphaGenome by 6.7% on average at predicting regulatory element binding activity; generates sequences with up to 9x enrichment of targeted transcription factor motifs; uses an "inverse-entropy" sampling strategy achieving up to 5x increase in motif enrichment versus random position selection (Origin blog, Oct 2025). Origin is also building what it describes as "the largest proprietary dataset of synthetic regulatory sequences across diverse cell-states" by testing generated sequences in the lab (YC page, origin.bio).

**Differentiation:** Axis's unified generation-and-prediction architecture distinguishes it from prior work. Academic approaches like DNA-Diffusion (Nature Genetics, 2025) generate 200-bp synthetic regulatory elements with cell-type specificity but do not integrate prediction in a single model. Dyno Therapeutics applies AI to AAV capsid design (viral delivery vectors), not regulatory DNA. Asimov uses synthetic biology and ML for genetic circuit design and cell-line engineering for manufacturing, a broader but different focus. Tessera Therapeutics works on gene writing (inserting/editing genomic sequences), not regulatory element design. Origin's specific niche — AI-designed regulatory DNA for expression control — occupies a narrow layer of the gene therapy stack that is adjacent to but distinct from these competitors.

**Business Model:** No pricing page is visible on origin.bio. The website offers a free API to research institutions and interested individuals (Origin blog, Oct 2025). [Inferred]: Most likely monetization path is B2B licensing of regulatory sequence designs and/or proprietary dataset access to pharmaceutical and biotech partners, given the company's stated interest in "partnerships with pharmaceutical/biotech companies for regulatory sequence design and dataset access" (YC page).

**TAM/SAM:** The global cell and gene therapy market was valued at USD 13.17 billion in 2025 and is projected to grow to USD 117.46 billion by 2034 (Fortune Business Insights, 2025, via search snippet). Other estimates range higher: USD 26.35 billion in 2025 growing to USD 146.31 billion by 2035 at 18.7% CAGR (Novaone Advisor, via search snippet); USD 33.5 billion in 2026 growing to USD 232.22 billion by 2035 at 24% CAGR (Towards Healthcare, via search snippet). The wide variance reflects different scope definitions across research firms. No public estimates exist for the specific sub-segment of AI-designed regulatory DNA elements.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct partnerships with pharma/biotech companies developing gene therapies, where Origin designs custom regulatory elements for specific therapeutic programs. The free API for research institutions may serve as a top-of-funnel to generate academic validation and industry awareness before converting to commercial licensing deals.

## Defensibility

**Proprietary dataset:** Origin claims to be building "the largest proprietary dataset of synthetic regulatory sequences across diverse cell-states" by experimentally validating AI-generated sequences in the lab (YC page, origin.bio). If realized, this wet-lab-validated dataset would create a compounding data advantage, as each experimental cycle improves model performance and expands the training corpus. This is a forward-looking claim; the dataset's current scale is not publicly disclosed.

**Model performance:** Axis's claimed 6.7% improvement over AlphaGenome on regulatory element binding prediction (Origin blog, Oct 2025) and the unified generation-prediction architecture represent a technical lead, though this has not yet been independently validated in peer-reviewed literature.

**Advisory network:** Scientific advisors include Dr. Manolis Kellis (MIT, Broad Institute), Dr. Nicole Paulk (Siren Biotechnology founder/CEO, UCSF), and Dr. Rashid Bashir (UIUC Dean, Chan Zuckerberg Biohub Chicago) (origin.bio), providing credibility and potential pharma access.

**Market structure:** Large pharma companies developing gene therapies (e.g., Novartis, Roche, BMS) rely on in-house or CRO-based regulatory element design. Adopting an AI-first approach to regulatory DNA would require these incumbents to build ML infrastructure, generate proprietary training data, and develop specialized biological validation pipelines — a multi-year investment outside their core competency. Additionally, pharma companies may prefer to license specialized tools from startups rather than build internal AI genomics capabilities, particularly for a component (regulatory elements) that is upstream of their primary focus (therapeutic candidates and clinical development).

**Commoditization risk:** Academic groups have published open-source tools for synthetic regulatory element design (e.g., DNA-Diffusion, Nature Genetics 2025). Google DeepMind's AlphaGenome operates in the regulatory prediction space. Well-funded competitors like Asimov ($209M raised) and Dyno ($100M+ raised) have adjacent capabilities and could expand into regulatory element design. The core technology — transformer-based models trained on ENCODE data — uses publicly available training data, meaning the model architecture alone is reproducible. Origin's defensibility rests primarily on the proprietary wet-lab-validated dataset, not the model architecture.

## Market & Traction

**Traction signals:**
- Axis model publicly announced October 8, 2025 (Origin blog)
- Free API offered to research institutions (Origin blog, Oct 2025)
- $15M total funding reported (Extruct AI, undated, via search snippet — not independently confirmed by any other source)
- Company X/Twitter: @origin_bio (follower count not retrievable due to JavaScript rendering)
- Yash Rathod X/Twitter: @YashRathod_75, ~576 followers (via search snippet)
- LinkedIn post by Ashwini Bhide about Malhar Bhide and Origin received 1,070 likes and 175 comments (LinkedIn, Jan 2026 via WebFetch)
- TMV article covering the Axis launch (TMV.in, Oct 2025)
- Team members have backgrounds from NVIDIA, UC Berkeley, University of Pennsylvania, and UIUC (origin.bio)
- No Product Hunt listing found
- No app store presence (not applicable — B2B biotech)
- No public revenue or customer data found
- LinkedIn company page for Origin Bio: not found (note: "Origin Biologics" at originbio.com is a separate, unrelated company)

**Competitive landscape:**

1. **Dyno Therapeutics** (~$100M+ raised, Series A led by a16z; revenue unknown): AI platform for AAV capsid design (viral delivery vectors), not regulatory DNA. Partnerships with Sarepta, Novartis, and Roche/Spark worth $4B+ in aggregate deal value (BioSpace, Dyno press releases). Differentiator vs. Origin: Dyno focuses on the delivery vehicle (capsid), while Origin focuses on the gene expression control layer (regulatory DNA).

2. **Asimov** ($209M raised, Series B led by CPP Investments; revenue unknown): End-to-end platform integrating synthetic biology, biophysical simulation, and ML for designing genetic circuits and engineering mammalian cell lines. Differentiator vs. Origin: Asimov addresses manufacturing cell-line engineering and genetic circuit design broadly, while Origin focuses specifically on regulatory element design for therapeutic gene expression (Asimov.com, press releases).

3. **Tessera Therapeutics** ($300M+ Series C, Flagship Pioneering; $150M Regeneron deal in Dec 2025; revenue unknown): Gene Writing™ platform that inserts/edits genomic sequences. Differentiator vs. Origin: Tessera writes new genetic code into the genome; Origin designs the regulatory switches that control when/where existing or inserted genes turn on (Tessera press releases, BusinessWire).

4. **Octant Bio** ($115M raised, Series B led by Catalio; revenue unknown): Synthetic biology + AI platform for drug discovery across receptor pathways. Differentiator vs. Origin: Octant focuses on small-molecule drug discovery via multiplexed receptor screening, not regulatory DNA design for gene therapy (FierceBiotech, Octant.bio).

5. **Academic/open-source approaches (DNA-Diffusion)**: Published in Nature Genetics (2025) by researchers at Broad Institute and others. Generates 200-bp synthetic regulatory elements with cell-type specificity. Differentiator vs. Origin: Academic tool without commercial support, proprietary dataset, or unified generation-prediction architecture.

**Why now:**
- [Inferred]: Several converging factors have opened this opportunity: (1) The ENCODE V4 Registry released large-scale regulatory element data that enables training of models like Axis; (2) Transformer architectures have reached sufficient scale and capability to handle DNA sequence generation and multi-task learning simultaneously; (3) The cell and gene therapy market has grown rapidly — FDA approved multiple gene therapies in 2023-2025, increasing demand for safer and more specific expression control; (4) Google DeepMind's AlphaGenome (2024-2025) validated the feasibility of AI-driven regulatory element prediction, creating a benchmark for the field and drawing attention to the problem; (5) Nature Genetics published multiple papers on AI-designed synthetic regulatory elements in 2025, signaling the field has crossed a technical feasibility threshold.

## Founders & Team

**Yash Rathod** — Co-founder & CEO
- BS Computer Science, University of Illinois at Urbana-Champaign (UIUC)
- Won First Prize in the 2022 OpenCV AI Competition with the COCOpen project (Illinois Aerospace Engineering news)
- Robotics research at UIUC: Open Vocabulary Mobile Manipulation in Shenlong Wang's group (GitHub bio)
- Prior experience at NVIDIA (origin.bio team affiliations)
- Twitter/X: @YashRathod_75, ~576 followers (via search snippet)
- LinkedIn: linkedin.com/in/yrraadi/
- GitHub: github.com/yrraadi-io — 24 repositories; no individual repos with >100 stars found

**Malhar Bhide** — Co-founder & CTO
- Computer Science, University of Illinois at Urbana-Champaign (UIUC)
- ML Research at Wadhwani AI (ContactOut, via search snippet)
- Research Engineer at Automorphic (YC S23) (ContactOut, via search snippet)
- Published disease modeling research in Nature Scientific Reports while in high school (YC page description via search snippet)
- Recipient of 1517 Medici Grant for mental health technology project (Merge Club)
- Prior project: detecting schizophrenia using actigraphy data (Merge Club)
- Mother: Ashwini Bhide, former Additional Municipal Commissioner of Mumbai (LinkedIn post context)
- Twitter/X: No public account found specific to Malhar Bhide
- LinkedIn: linkedin.com/in/malhar-bhide-1a454b303/
- GitHub: No public GitHub profile confirmed
- Devpost: devpost.com/malharb
- ResearchGate: published research on COVID-19 risk assessment (ResearchGate profile)

**Co-founder relationship:** Both Yash Rathod and Malhar Bhide attended UIUC for Computer Science, indicating they likely met during their undergraduate studies.

**Founder-market fit:** Both founders have CS/ML backgrounds from UIUC with specific research experience relevant to the intersection of AI and biology. Yash's experience at NVIDIA and in computer vision/robotics research provides deep ML engineering expertise. Malhar's publication in Nature Scientific Reports as a high-school student and his work at Wadhwani AI (health-focused AI nonprofit) and Automorphic (a YC S23 AI company) demonstrate early research output and exposure to production ML systems. Their scientific advisory board — Manolis Kellis (MIT/Broad), Nicole Paulk (UCSF/Siren Bio), Rashid Bashir (UIUC/CZ Biohub) — supplements the founders' computational background with deep domain expertise in genomics, gene therapy, and bioengineering.

## Key Risks

**Wet-lab validation gap:** Origin's competitive advantage depends on building a proprietary experimentally-validated dataset of synthetic regulatory sequences. This requires significant wet-lab infrastructure and throughput. With a 4-person team, scaling experimental validation to millions of sequences (as implied on their website) is a major operational challenge. The company has not disclosed current dataset size, validation throughput, or lab partnerships.

**Regulatory and clinical translation risk:** Demonstrating that AI-designed regulatory elements work in computational benchmarks (outperforming AlphaGenome by 6.7%) is distinct from demonstrating they work safely in therapeutic contexts in vivo. The gap between in silico design and clinical-grade regulatory elements involves extensive biological validation, animal studies, and regulatory approval processes that are costly and time-intensive. No in vivo or clinical data has been disclosed.

**Brand disambiguation:** Multiple companies share similar names: Origin Biologics (originbio.com, tissue-based biological products), Origin Biosciences (BridgeBio subsidiary), and OriGen Biomedical (cryopreservation). This creates potential confusion in market positioning, SEO, and investor/partner discovery.

**Incumbent and well-funded competitor encroachment:** Asimov ($209M raised) and Dyno ($100M+ raised) operate in adjacent spaces and could expand into regulatory element design. Google DeepMind, whose AlphaGenome is Origin's primary benchmark, has the resources and data to release a unified generation-prediction model. Academic groups have published open-source alternatives (DNA-Diffusion, Nature Genetics 2025).

**Narrow technical moat on model architecture:** The Axis model is trained on publicly available ENCODE data using standard transformer architectures. The model architecture itself is reproducible. Origin's differentiation relies on the proprietary wet-lab dataset and the unified multi-task approach, not on inaccessible training data or fundamentally novel architectures.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global cell & gene therapy market: USD 13.17B in 2025, projected to USD 117.46B by 2034 (Fortune Business Insights, via search snippet); alternate estimate USD 26.35B in 2025 to USD 146.31B by 2035, 18.7% CAGR (Novaone Advisor, via search snippet). No sub-segment estimate for AI-designed regulatory DNA. |
| SAM | No public data found for the specific regulatory DNA design sub-segment. |
| Traction | Axis model launched Oct 8, 2025 (Origin blog); free API offered to researchers (Origin blog); TMV.in press coverage (Oct 2025); LinkedIn post re: Origin received 1,070 likes/175 comments (Ashwini Bhide LinkedIn, Jan 2026) |
| Revenue Signal | No public data found. Free API offered; no pricing page. |
| Founders | Yash Rathod (CEO): CS @ UIUC, NVIDIA, 1st Prize 2022 OpenCV AI Competition. Malhar Bhide (CTO): CS @ UIUC, Automorphic (YC S23), Wadhwani AI, Nature Scientific Reports publication in high school. |
| Competitors | Dyno Therapeutics ($100M+ raised, revenue unknown, AI capsid design vs. Origin's regulatory DNA focus); Asimov ($209M raised, revenue unknown, genetic circuit design vs. Origin's regulatory element focus); Tessera Therapeutics ($300M+ Series C, revenue unknown, gene writing vs. Origin's expression control); Octant Bio ($115M raised, revenue unknown, receptor-based drug discovery vs. Origin's regulatory DNA) |
| Moat Signals | Proprietary wet-lab-validated synthetic regulatory DNA dataset (claimed, scale undisclosed); Axis model outperforms AlphaGenome by 6.7% (Origin blog, Oct 2025); scientific advisory board (Kellis/MIT, Paulk/UCSF, Bashir/UIUC) |
| Risk Factors | Wet-lab validation scaling with 4-person team, in silico-to-clinical translation gap, brand disambiguation with similarly named companies, well-funded adjacent competitors and Google DeepMind |
| Founder Reach | Yash Rathod: Twitter @YashRathod_75 ~576 followers, LinkedIn linkedin.com/in/yrraadi/. Malhar Bhide: Twitter not found, LinkedIn linkedin.com/in/malhar-bhide-1a454b303/. Company: Twitter @origin_bio (count not retrievable) |
| Distribution Signals | No Product Hunt listing found. No app store presence (B2B biotech). Free API for researchers (origin.bio). |
| Emails | yash@origin.bio, hiring@origin.bio |
