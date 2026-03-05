# CellType

> The agentic drug company. We simulate human biology.

| Field | Value |
|-------|-------|
| Website | https://www.celltype.com |
| YC Page | https://www.ycombinator.com/companies/celltype |
| Batch | Winter 2026 |
| Industry | Healthcare / Drug Discovery and Delivery |
| Team Size | 2 |
| Location | New York, NY, USA |
| Tags | AI-powered Drug Discovery, Artificial Intelligence, Machine Learning, Biotech, Therapeutics |
| YC Partner | Ankit Gupta |
| Emails | No public data found |

## The Idea

**Problem:** Drug discovery is slow, expensive, and failure-prone. The average new drug takes over a decade and costs over $1 billion to develop, with high attrition rates in clinical trials. Pharmaceutical companies currently rely on animal models, cell lines, and iterative wet-lab screening—methods that are poor proxies for actual human biology. The result is that most drug candidates fail in human trials despite passing preclinical testing.

**Approach:** CellType uses biological foundation models trained on single-cell transcriptomics data to simulate human biology computationally. The core technology, Cell2Sentence (C2S), converts gene expression data from individual cells into "cell sentences"—ranked lists of gene names ordered by expression level—which allows large language models to natively process and learn from biological data (ICML 2024 proceedings). AI agents then execute the full drug discovery pipeline on top of these models, computationally screening drugs and predicting outcomes before wet-lab validation. The company has demonstrated this by screening 4,000+ compounds and identifying a novel cancer treatment signal—a drug that could turn immunologically "cold" tumors "hot" (more visible to the immune system)—which was subsequently validated in laboratory experiments in cell lines and intact human tumor microenvironments (YC company page; Yale School of Medicine news).

**Differentiation:** Unlike structure-based approaches (Atomwise's AtomNet predicts protein-ligand binding; Isomorphic Labs builds on AlphaFold protein structure prediction), CellType operates at the single-cell transcriptomics level, modeling entire cellular programs rather than individual molecular interactions. Unlike phenomic screening approaches (Recursion-Exscientia's platform combines high-throughput imaging with automated chemistry), CellType uses LLM-based foundation models that can generate and reason about cellular states in natural language. The C2S-Scale 27B model, built on Google's Gemma architecture in collaboration with Google DeepMind, represents a distinct paradigm: treating biology as a language modeling problem rather than a structure prediction or image classification task (Google Research blog, April 2025).

**Business Model:** No public pricing page was found on celltype.com. [Inferred]: Most likely monetization paths include (1) pharma partnerships for computational drug screening and target identification (consistent with the Senhwa Biosciences MOU and stated Top 10 pharma engagement), (2) co-development or licensing arrangements for AI-validated drug candidates, and (3) potentially building an internal pipeline of AI-discovered therapeutics. The Senhwa MOU explicitly mentions future options including "joint ventures, co-development, or licensing arrangements" (PR Newswire, March 3, 2026).

**TAM/SAM:** The AI in Drug Discovery market was valued at $2.35 billion in 2025, projected to grow at a CAGR of 25.94% to $8.18 billion by 2030 (Grand View Research via search snippet). Other estimates project higher figures: $16.52 billion by 2034 (Precedence Research / BioSpace via search snippet). The broader cancer immunotherapy market is projected to reach $305.8 billion by 2033 (cited in Senhwa Biosciences press release, PR Newswire, March 3, 2026). SAM would be the subset of pharma R&D spend addressable by computational single-cell biology approaches—no specific SAM estimate found.

**GTM / Distribution:** CellType reports "100% inbound deal flow" and states it is "working with Top 10 pharma" (YC company page). The Senhwa Biosciences MOU (PR Newswire, March 3, 2026) represents a publicly disclosed pharmaceutical partnership with a six-month pilot program. [Inferred]: The primary distribution path is enterprise pharma partnerships, leveraging the founders' academic network and published research credibility (Google DeepMind collaboration, ICML publication, Sundar Pichai endorsement) as inbound lead generation.

## Defensibility

**Technical IP:** Cell2Sentence was developed at Yale and published at ICML 2024 in collaboration with Google DeepMind. The C2S-Scale 27B model, trained on single-cell transcriptomic data, represents a research asset built over multiple years of academic work. The underlying research has 11,589+ citations across van Dijk's body of work (Google Scholar). The open-source cell2sentence repository has 815 stars and 119 forks on GitHub (github.com/vandijklab/cell2sentence), indicating community adoption.

**Data moat potential:** Each pharmaceutical partnership generates proprietary screening data and validated predictions that can improve the models. The Senhwa collaboration will produce AI validation results across indication expansion, biomarker discovery, and combination therapy evaluation (PR Newswire, March 3, 2026).

**Academic credibility as barrier:** The Google DeepMind collaboration and endorsement by Google CEO Sundar Pichai create trust signals that are difficult for new entrants to replicate. Van Dijk's lab has been a leading center for single-cell computational biology at Yale since 2019.

**Market structure:** Large pharmaceutical companies have historically struggled to build internal AI drug discovery capabilities at the frontier, as evidenced by the proliferation of AI drug discovery partnerships (Recursion-Sanofi, Recursion-Roche, Insilico-Exelixis). [Inferred]: Pharma incumbents face organizational challenges in recruiting top ML talent and integrating novel AI paradigms into established R&D workflows, creating sustained demand for specialized external platforms.

**Commoditization risk:** The Cell2Sentence methodology is published and the code is open-source (Apache 2.0 license). Google DeepMind, which collaborated on the research, could build competing products using the same approach. Other well-funded AI drug discovery companies (Recursion, Insilico, Isomorphic Labs) have significant resources to develop similar single-cell foundation models. However, the specific trained models, proprietary validation data from pharma partnerships, and the agentic pipeline orchestration layer are not publicly available.

## Market & Traction

**Traction signals:**
- Senhwa Biosciences signed a strategic MOU with CellType for a six-month pilot program focusing on evolving CX-4945 into "CX-4945 2.0" for cancer immunotherapy (PR Newswire, March 3, 2026)
- Stated engagement with "Top 10 pharma" with "100% inbound deal flow" (YC company page)
- Core technology Cell2Sentence published at ICML 2024 (icml.cc/virtual/2024/poster/34580)
- Cell2Sentence featured by Google CEO Sundar Pichai, who called it "an exciting milestone for AI in science" (Yahoo News / Decrypt, 2025)
- YC company page claims Sundar Pichai feature received 7M+ views
- Cell2Sentence GitHub repo: 815 stars, 119 forks (github.com/vandijklab/cell2sentence)
- Google Research published a blog post on the collaboration (research.google, April 2025)
- C2S-Scale 27B model released on Hugging Face (built on Google Gemma architecture)
- David van Dijk Twitter/X: @david_van_dijk (follower count not retrievable due to JavaScript rendering)
- No Product Hunt listing found
- No LinkedIn company page found in search results
- No Discord/Slack community found
- Website displayed minimal content at time of research ("CellType | Biological Reasoning Engine")

**Competitive landscape:**

1. **Recursion Pharmaceuticals** ($461M raised, $74.7M 2025 revenue; Insider Monkey): Merged with Exscientia in July 2025 at combined $1.8B valuation. Uses phenomic screening (high-throughput cell imaging) combined with automated precision chemistry. Differentiator vs. CellType: wet-lab-heavy platform with massive proprietary imaging datasets; CellType is computationally native using LLM-based single-cell models.

2. **Insilico Medicine** (~$408M+ total raised including $123M Series E; EurekAlert/PR Newswire, 2025): End-to-end AI platform spanning target discovery, molecule generation, and clinical prediction. Has drugs in clinical trials (Phase IIa for ISM001-055 in IPF). Differentiator vs. CellType: more mature pipeline with clinical-stage assets; CellType's approach is LLM-native rather than generative chemistry-focused.

3. **Isomorphic Labs** ($600M first external round; PharmaVoice via search snippet): Google DeepMind spinout building on AlphaFold for drug design. Differentiator vs. CellType: focuses on protein structure prediction and molecular design; CellType operates at the cellular transcriptomics level.

4. **Atomwise** ($220.7M raised, $35M annual revenue in 2025; Tracxn/CBInsights via search snippet): Structure-based drug discovery using deep learning on 3D molecular structures. Differentiator vs. CellType: predicts protein-ligand binding affinity; CellType models entire cellular programs and gene expression patterns.

5. **Schrödinger** (publicly traded; SDGR): Physics-based computational platform for drug discovery and materials science. Differentiator vs. CellType: molecular dynamics and quantum mechanics simulations; CellType uses language model-based cellular simulation.

**Why now:**
- Foundation model capabilities reached sufficient scale to process biological data as language (GPT-2 through 27B parameter models demonstrated on single-cell data; ICML 2024)
- Google DeepMind's investment in biological AI (AlphaFold, C2S-Scale collaboration) validated the approach at the frontier
- [Inferred]: The convergence of single-cell sequencing data availability (Human Cell Atlas and related projects generating massive transcriptomic datasets) with transformer architecture advances created the technical prerequisites for Cell2Sentence's approach, which was not feasible before ~2023

## Founders & Team

**David van Dijk** — Co-founder & CEO
- PhD in Computer Science, University of Amsterdam & Weizmann Institute of Science (2013); MSc Computer Science, Free University of Amsterdam (2008); BSc Computer Science, Free University of Amsterdam (2005) (Yale School of Medicine profile)
- Postdoctoral fellow at Columbia University (2015) (Yale School of Medicine profile)
- Associate Professor at Yale School of Medicine (Cardiology/Medicine) and Department of Computer Science; established biomedical ML lab at Yale in 2019 (Yale School of Medicine profile)
- 11,589 citations on Google Scholar (Google Scholar)
- Published in Cell, Nature, ICML, NeurIPS (YC company page)
- NSF CAREER Award 2025, Google Cloud Award 2025, Roberts Innovation Award 2025 (Yale School of Medicine profile)
- Co-developed Cell2Sentence with Google DeepMind; received NIH MIRA award (vandijklab.org)
- Turned down Google to build CellType (YC company page)
- Twitter/X: @david_van_dijk — follower count not retrievable (JavaScript rendering)
- LinkedIn: linkedin.com/in/david-van-dijk-b440286/
- GitHub: github.com/vandijklab — Cell2Sentence repo (815 stars)

**Ivan Vrkic** — Co-founder
- Studied ML at Yale and EPFL (YC company page; EPFL lab page)
- Built software to control CERN's Large Hadron Collider (YC company page)
- Led large-scale foundation model training as a founding engineer at a biotech company (YC company page)
- Co-developed Cell2Sentence at Yale; published at ICML 2024 (YC company page)
- Postgraduate Associate at Yale School of Medicine (medicine.yale.edu)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/ivan-vrkic-53678a34/
- GitHub: github.com/ivanvrkic — 44 repos, 34 stars total; projects in deep learning, scientific computing, and multi-camera systems

**Co-founder relationship:** Both David van Dijk and Ivan Vrkic were affiliated with Yale, where they co-developed Cell2Sentence. Van Dijk leads the van Dijk Lab at Yale where Vrkic was a Postgraduate Associate, indicating a professor-student/researcher working relationship.

**Founder-market fit:** Van Dijk has spent his career at the intersection of machine learning and biology, with a decade of computational biology research at Yale, Columbia, the University of Amsterdam, and the Weizmann Institute. His lab specifically developed the methods that underpin CellType's product. Vrkic brings engineering experience from CERN and biotech foundation model training, complementing van Dijk's research expertise with infrastructure and scaling capability. The founding team combines the scientific originator of the core technology with an engineer experienced in deploying large-scale ML systems.

## Key Risks

**Open-source core technology:** Cell2Sentence is published at ICML 2024 and available under Apache 2.0 license on GitHub with 815 stars. The foundational methodology is accessible to competitors, including Google DeepMind (which co-developed the technology and has vastly greater resources). CellType's defensibility depends on proprietary extensions, training data from pharma partnerships, and the agentic orchestration layer—none of which have been publicly demonstrated as differentiated.

**Google DeepMind co-development overlap:** The C2S-Scale 27B model was built in collaboration with Google DeepMind on Google's Gemma architecture. Google could deploy this technology internally through Isomorphic Labs ($600M funded) or directly through DeepMind's health division. There is no public information about IP ownership terms or exclusivity arrangements between Yale/CellType and Google.

**Academic-to-commercial transition:** Van Dijk is listed as Associate Professor at Yale School of Medicine as of research date. The transition from academic lab to commercial drug discovery company involves different operational demands (regulatory affairs, pharma business development, clinical trial management). The team of 2 has no publicly listed members with pharma industry commercial experience.

**Regulatory and validation timeline:** Drug discovery validated computationally still requires wet-lab confirmation and clinical trials. The Senhwa MOU covers a six-month pilot (PR Newswire, March 3, 2026), and the company's one validated result (turning cold tumors hot) is preclinical. Converting computational predictions into clinical-stage drug candidates requires significant time, capital, and regulatory expertise beyond the current team's demonstrated capabilities.

**Name disambiguation:** "CellType" is a generic term widely used in cell biology (cell type classification, cell type annotation). This creates SEO and brand differentiation challenges, as search results for "CellType" return substantial unrelated biological literature and tools.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI in Drug Discovery: $2.35B (2025), projected $8.18B by 2030 at 25.94% CAGR (Grand View Research via search snippet) |
| SAM | No public data found |
| Traction | Senhwa Biosciences MOU signed (PR Newswire, March 3, 2026); "working with Top 10 pharma" (YC page); Cell2Sentence at ICML 2024; Sundar Pichai endorsement with claimed 7M+ views (YC page); 815 GitHub stars (github.com/vandijklab/cell2sentence) |
| Revenue Signal | No public data found |
| Founders | David van Dijk (CEO): Yale Associate Professor, PhD U of Amsterdam/Weizmann, 11,589 citations, NSF CAREER Award 2025. Ivan Vrkic (Co-founder): ML at Yale/EPFL, CERN software engineer, Cell2Sentence co-developer. |
| Competitors | Recursion-Exscientia ($461M raised, $74.7M 2025 revenue, phenomic screening); Insilico Medicine (~$408M+ raised, clinical-stage pipeline, generative chemistry); Isomorphic Labs ($600M raised, revenue unknown, AlphaFold-based); Atomwise ($220.7M raised, $35M 2025 revenue, structure-based); Schrödinger (public/SDGR, revenue unknown here, physics-based) |
| Moat Signals | ICML 2024 publication; Google DeepMind collaboration; 815-star open-source repo; Sundar Pichai public endorsement; Yale IP provenance; pharma partnership data accumulation potential |
| Risk Factors | Open-source core IP under Apache 2.0; Google DeepMind co-development creates potential competitor overlap; academic-to-commercial transition with 2-person team |
| Founder Reach | David van Dijk: Twitter @david_van_dijk (count not retrievable), LinkedIn (profile found), GitHub 815 stars (vandijklab/cell2sentence). Ivan Vrkic: Twitter not found, LinkedIn (profile found), GitHub 34 stars (ivanvrkic). |
| Distribution Signals | Senhwa Biosciences MOU (PR Newswire, March 2026); Top 10 pharma engagement claimed (YC page); Google Research blog feature (April 2025); Sundar Pichai tweet endorsement (2025) |
| Emails | No public data found |
