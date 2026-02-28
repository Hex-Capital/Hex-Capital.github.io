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

## The Idea

**Problem:** Cell and gene therapies hold promise for treating cancer, CNS disorders, and genetic diseases, but a core safety challenge persists: controlling precisely where, when, and how much a therapeutic gene is expressed in different cell types. Current regulatory DNA elements (promoters and enhancers) used in gene therapy vectors are limited in specificity and strength, often leading to off-target gene expression, toxicity, or insufficient therapeutic effect. The customer segment is pharmaceutical and biotech companies developing gene therapy candidates. Today these teams rely on a small library of well-characterized natural promoters and enhancers, or brute-force screening of random sequences—both approaches are slow and yield limited diversity (origin.bio; YC launch page).

**Approach:** Origin's core product is **Axis**, described as "the first AI model that generates regulatory DNA elements and also predicts their function" (origin.bio). Axis screens millions of synthetic regulatory DNA candidates (enhancers and promoters) tailored to specific cell states. The company claims Axis "outperforms Google DeepMind's AlphaGenome at predicting regulatory element activity and chromatin accessibility" (YC company page). Generated sequences reportedly demonstrate 72%+ diversity with no sequence overlap among themselves and contain known biological features such as transcription factor motifs (YC launch page). Origin is simultaneously building what it describes as "the largest proprietary dataset of synthetic regulatory sequences across diverse cell-states" (YC company page).

**Differentiation:** Several companies operate in adjacent or overlapping spaces, but their approaches differ:
- **Asimov** ($205M+ raised; Crunchbase via search snippet) provides a broader synthetic biology design platform with experimentally validated genetic parts—including tissue-specific promoters—and cloud-based design software, plus the AAV Edge system for end-to-end gene therapy development. Asimov's scope extends well beyond regulatory DNA into full genetic circuit design and manufacturing.
- **Dyno Therapeutics** ($109M raised; Fierce Biotech via search snippet) uses AI primarily to design novel AAV capsid vectors rather than regulatory elements. Its CapsidMap platform optimizes viral delivery vehicles, not the gene expression control layer.
- **Annogen** (founded 2017, Netherlands; minimal external funding per Tracxn via search snippet) uses its proprietary SuRE platform to screen existing human DNA elements for optimal promoter designs, emphasizing human-origin validated sequences rather than fully de novo AI-generated ones.
- Origin's differentiation centers on de novo generative AI design of synthetic regulatory DNA with a proprietary dataset of validated sequences. This is a narrower, deeper focus on the regulatory layer compared to Asimov's full-stack approach and a different molecular target than Dyno's capsid work.

**Business Model:** No pricing page is published on origin.bio. The YC launch page indicates Origin is "seeking partnerships with pharma/biotech companies to design regulatory sequences for target disease cells" and to "license proprietary dataset and sequence-protein interaction data" (YC launch page). [Inferred]: The most likely monetization path is a combination of service-based partnerships (designing custom regulatory elements for pharma partners) and dataset/platform licensing, consistent with the biotech enabling-technology model used by peers like Asimov and Dyno.

**TAM/SAM:** The global gene therapy market was valued at $11.07 billion in 2025, projected to reach $55.43 billion by 2034 at 19.60% CAGR (Precedence Research, 2025 via search snippet). The DNA synthesis market was valued at $5.19 billion in 2025, projected to reach $16.08 billion by 2032 at 17.5% CAGR (Fortune Business Insights, 2025 via search snippet). No public SAM estimate was found specific to the regulatory DNA/synthetic promoter-enhancer sub-segment.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct B2B partnerships with pharmaceutical and biotech companies developing gene therapy pipelines, given the technical nature of the product and the explicit "seeking partnerships" language on the YC launch page. The India AI Impact Summit roundtable with PM Modi (February 2026; Free Press Journal, Devdiscourse) may also signal interest in engaging India-based pharma firms.

## Defensibility

**Proprietary dataset:** Origin claims to be building "the largest proprietary dataset of synthetic regulatory sequences across diverse cell-states" (YC company page). If this dataset achieves meaningful scale and experimental validation, it could create a data moat—each new partnership generating additional validated sequences that improve Axis and widen the gap vs. competitors relying on smaller or public datasets.

**Model performance claims:** The claim that Axis outperforms AlphaGenome (YC company page) at predicting regulatory element activity, if independently validated, represents a technical capability advantage. However, this has not been confirmed by third-party benchmarks in publicly available sources.

**Scientific advisory board:** The advisors—Dr. Manolis Kellis (MIT, Broad Institute, regulatory genomics), Dr. Nicole Paulk (UCSF, AAV gene therapy expert, Siren Bio CEO), and Dr. Rashid Bashir (UIUC Dean of Engineering, bio-nanotechnology)—provide domain credibility and potential access to academic validation infrastructure (origin.bio).

**Market structure:** Gene therapy incumbents (large pharma) are primarily focused on developing therapeutic candidates, not on the enabling-technology layer of regulatory DNA design. Building an internal generative AI platform for synthetic regulatory elements requires specialized ML expertise combined with wet-lab validation capabilities—a combination that sits outside the core competency of most pharma R&D organizations. No structural barrier identified at this stage beyond this specialization gap.

**Commoditization risk:** Academic groups (e.g., the authors of the Nature Genetics 2025 paper on generative AI for synthetic regulatory DNA sequences, and DeepMind's AlphaGenome team) could publish open-source models. Asimov ($205M+ raised) already offers tissue-specific promoter design as part of a broader platform. The barrier to commoditization depends on whether Origin's proprietary experimental validation dataset proves substantially superior to what can be assembled from public data and academic collaborations.

## Market & Traction

**Traction signals:**
- YC Launch page upvotes: 17 (YC launch page, accessed Feb 2026)
- Twitter/X: @origin_bio (x.com/origin_bio); follower count not retrievable via WebFetch
- LinkedIn company page: https://www.linkedin.com/company/origin-bio-inc; follower count not retrievable
- PM Modi AI Startup Roundtable: Malhar Bhide (CTO) was among 16 AI/deeptech startup founders invited to a CEO roundtable with Indian Prime Minister Narendra Modi at the India AI Impact Summit 2026 (Free Press Journal; PIB India, Feb 2026)
- No public revenue, customer counts, or paid partnership announcements found
- No Product Hunt launch found
- No Discord/Slack community found
- Contact email: yash@origin.bio (origin.bio)

**Competitive landscape:**

| Company | Funding | Focus vs. Origin |
|---------|---------|-----------------|
| **Asimov** | ~$205M total (Crunchbase via search snippet) | Full-stack synthetic biology design platform including tissue-specific promoters, genetic circuits, and manufacturing (AAV Edge). Broader scope vs. Origin's narrow regulatory DNA focus. Revenue unknown. |
| **Dyno Therapeutics** | $109M total (Fierce Biotech via search snippet) | AI-designed AAV capsid vectors for gene therapy delivery, not regulatory DNA elements. Partnered with Roche (up to $1B+ deal) and Novartis. Revenue unknown. |
| **Tessera Therapeutics** | ~$582–610M total (Clay/Tracxn via search snippet) | Gene Writing technology—writes therapeutic sequences into the genome. Different mechanism (genome integration) vs. Origin's regulatory element design. Backed by Gates Foundation ($50M in Dec 2024; GlobeNewswire). Revenue unknown. |
| **Annogen** | Minimal external funding (Tracxn via search snippet) | SuRE platform screens existing human DNA elements for optimal promoters. Uses screening of natural sequences vs. Origin's de novo generative AI approach. Founded 2017, Netherlands-based. Revenue unknown. |

**Why now:** [Inferred]: Several converging factors: (1) Deep learning models for genomics reached a performance threshold in 2023-2025 (e.g., DeepMind's AlphaGenome, the Nature Genetics 2025 publication on generative AI for synthetic regulatory DNA), making de novo regulatory element design computationally feasible; (2) the gene therapy market is accelerating with 7 FDA-approved gene therapies as of 2024 and a growing pipeline demanding better expression control; (3) large pharma is actively seeking enabling-technology partnerships (e.g., Roche-Dyno, JURA Bio-Annogen collaborations announced in 2024-2025), validating demand for specialized regulatory DNA design tools.

## Founders & Team

**Yash Rathod** — Co-founder & CEO
- BS Computer Science (in progress or recently completed), University of Illinois at Urbana-Champaign (UIUC)
- Previously founded Diginoor Inc., described as India's first NFT marketplace, which raised $1M in seed funding from Contrary, Polygon Technology, Sandeep Nailwal, Kunal Shah, and others (LinkedIn post via search snippet). Founded the startup during a gap year, later sold the company (UIUC Talkshow podcast via search snippet).
- Won First Prize in the 2022 OpenCV AI Competition with project COCOpen (Illinois Aerospace Engineering news via search snippet)
- Research in Open Vocabulary Mobile Manipulation in Prof. Shenlong Wang's group at UIUC (GitHub bio via search snippet)
- Background in Computer Vision and Reinforcement Learning research (YC company page via search snippet)
- Twitter/X: @YashRathod_75 (x.com/YashRathod_75); follower count not retrievable
- LinkedIn: linkedin.com/in/yrraadi/
- GitHub: github.com/yrraadi-io — 24 public repos; star counts not retrieved

**Malhar Bhide** — Co-founder & CTO
- BS Computer Science (in progress or recently completed), University of Illinois at Urbana-Champaign (UIUC)
- Published disease modeling research in high school in Nature Scientific Reports (Merge Club profile via search snippet; ResearchGate via search snippet)
- ML Research at Wadhwani AI (search snippet)
- Research Engineer at Automorphic (YC S23) (ContactOut via search snippet)
- Received Medici Grant from 1517 Fund for schizophrenia detection using actigraphy data (Merge Club profile)
- Invited to CEO roundtable with Indian PM Modi at India AI Impact Summit 2026 (Free Press Journal, Feb 2026)
- Mother is Ashwini Bhide, Maharashtra Additional Chief Secretary (Free Press Journal)
- Twitter/X: @__Malhar__ (x.com/__malhar__); follower count not retrievable
- LinkedIn: linkedin.com/in/malhar-bhide-9002791a7/ (Merge Club profile) — note: a different LinkedIn profile (linkedin.com/in/malhar-bhide-1a454b303/) also appears in search results listing "Kognitive Networks"
- GitHub: No public profile identified
- Medium: malharbhide.medium.com
- Hugging Face: huggingface.co/malharb

**Co-founder relationship:** Both founders studied Computer Science at UIUC, which is the most likely context for their acquaintance. No additional shared employer was identified.

**Founder-market fit:** Both founders have ML/AI research backgrounds from UIUC, with Yash bringing computer vision and reinforcement learning expertise and a prior startup exit (Diginoor), and Malhar bringing published biomedical research (Nature Scientific Reports), healthcare ML experience (Wadhwani AI, schizophrenia detection), and prior YC experience via Automorphic (YC S23). The team's credentials are complemented by scientific advisors with deep domain authority: Dr. Manolis Kellis (MIT/Broad, regulatory genomics), Dr. Nicole Paulk (UCSF, AAV gene therapy), and Dr. Rashid Bashir (UIUC bioengineering) (origin.bio). The origin.bio website also notes team backgrounds from NVIDIA, UC Berkeley, and University of Pennsylvania, suggesting additional team members beyond the two founders.

## Key Risks

**Technical validation gap:** The claim that Axis "outperforms Google DeepMind's AlphaGenome" has not been independently verified via peer-reviewed publication or third-party benchmark. Validation to date relies on computational cross-checks (e.g., Broad Institute's Malinois model) rather than published wet-lab experimental data (YC launch page). The leap from in silico predictions to functionally validated therapeutic regulatory elements in vivo is substantial and unproven for this company.

**Well-funded competitor encroachment:** Asimov (~$205M raised) already offers AI-designed tissue-specific promoters as part of a broader platform and has established pharma relationships. Asimov could deepen its regulatory DNA capabilities without needing Origin's specific approach, potentially squeezing Origin's addressable niche.

**Academic open-source risk:** The Nature Genetics 2025 publication on generative AI for synthetic regulatory DNA (Nature Genetics, 2025 via search snippet) demonstrates that academic groups are actively producing similar capabilities. DeepMind's AlphaGenome and other foundation models for genomics could be adapted by pharma internal teams, reducing willingness to pay for external platforms.

**Name disambiguation:** "Origin" is a common company name. Multiple unrelated companies share the name, including Origin Biologics (Las Vegas, medical devices), Origin Financial, and others. This creates brand confusion risk in a B2B context where clear identity matters for partnership credibility.

**Regulatory pathway dependency:** Gene therapy products face lengthy FDA/EMA approval timelines. Origin's revenue depends on pharma partners advancing therapies that incorporate Origin-designed regulatory elements through clinical development—a process spanning years and subject to regulatory risk outside Origin's control.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $11.07B gene therapy market in 2025, projected $55.43B by 2034 at 19.60% CAGR (Precedence Research, 2025 via search snippet); $5.19B DNA synthesis market in 2025, projected $16.08B by 2032 at 17.5% CAGR (Fortune Business Insights, 2025 via search snippet) |
| SAM | No public data found for the regulatory DNA/synthetic promoter-enhancer sub-segment |
| Traction | 17 upvotes on YC launch page (YC, Feb 2026); invited to PM Modi AI Startup Roundtable among 16 founders (Free Press Journal / PIB India, Feb 2026) |
| Revenue Signal | No public data found |
| Founders | Yash Rathod (CEO): UIUC CS, OpenCV AI Competition 1st Prize 2022, prior exit (Diginoor, $1M seed). Malhar Bhide (CTO): UIUC CS, Nature Scientific Reports publication, Wadhwani AI, Automorphic (YC S23), 1517 Fund grantee |
| Competitors | Asimov (~$205M raised, revenue unknown, broader synthetic biology platform including promoter design); Dyno Therapeutics ($109M raised, revenue unknown, AI AAV capsid design not regulatory DNA); Tessera Therapeutics (~$582-610M raised, revenue unknown, Gene Writing genome integration); Annogen (minimal funding, revenue unknown, SuRE screening of natural promoters vs. de novo AI generation) |
| Moat Signals | Proprietary dataset of synthetic regulatory sequences (claimed "largest," unverified); Axis model performance claim vs. AlphaGenome (unverified externally); scientific advisory board (Kellis/MIT, Paulk/UCSF, Bashir/UIUC) |
| Risk Factors | Unvalidated wet-lab performance, well-funded competitor encroachment (Asimov), academic open-source alternatives |
| Founder Reach | Yash Rathod: Twitter @YashRathod_75 (count not retrievable), LinkedIn linkedin.com/in/yrraadi/, GitHub 24 repos (stars not retrieved). Malhar Bhide: Twitter @__Malhar__ (count not retrievable), LinkedIn linkedin.com/in/malhar-bhide-9002791a7/, GitHub not found, Medium malharbhide.medium.com |
| Distribution Signals | YC Launch page 17 upvotes (Feb 2026); PM Modi AI Startup Roundtable (Feb 2026); no Product Hunt, app store, or community signals found |
