# Instance

> A benchmark for synthetic video

| Field | Value |
|-------|-------|
| Website | https://tryinstance.app/ |
| YC Page | https://www.ycombinator.com/companies/instance |
| Batch | Summer 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Generative AI, Robotics, Data Labeling, AI |
| YC Partner | Ankit Gupta |
| Emails | claire@tryinstance.app, lucy@tryinstance.app |

## The Idea

- **Problem:** AI-generated video from world models exhibits physics violations (rigid-body collisions, energy conservation, gravitational dynamics) that visual-only evaluators cannot catch; teams training on synthetic data lack a quality gate (YC company page; arxiv T2VPhysBench, May 2025).
- **Approach:** A "physics-aware quality layer" that scans synthetic video for physics violations and layers human judgment at scale to benchmark real-vs-fake (YC company page, 2026).
- **Differentiation:** [Inferred]: Versus academic benchmarks (WorldModelBench, VideoPhy-2, T2VPhysBench — all 2025 arxiv papers), Instance is positioned as a commercial productized quality gate with human-in-the-loop scaling; versus generalist labelers (Encord, Surge), Instance is narrowly scoped to physics correctness in synthetic video.
- **Business Model:** No public data found — landing page at tryinstance.app shows no pricing tier; [Inferred]: enterprise/usage-based contract to world-model labs and robotics-data teams, given the named customer profile of "teams betting on synthetic data" (YC company page).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; adjacent data-labeling infrastructure is sized by comparable plays — Encord raised $60M Series C at $110M total (TechFundingNews, 2025); Surge AI raise targeting >$15B valuation (Sacra/SiliconANGLE, Jul 2025).
- **GTM / Distribution:** [Inferred]: Direct sales to frontier video-model labs and robotics/autonomy synthetic-data teams; early-demo outreach to "startups and data-driven teams" referenced in founder LinkedIn posts (Lucy Cai LinkedIn, Jan 2026, prior-product era).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond domain expertise of founders (MIT CS/AI, MIT Lincoln Lab robotics — MIT Lincoln Laboratory intern spotlight on Lucy Cai).
- **Future moat:** [Inferred]: A proprietary labeled dataset of physics violations across world-model outputs could compound into a benchmark standard that model labs measure against; unproven because no customer count, dataset size, or labeling volume is disclosed.
- **Market structure:** [Inferred]: No structural barrier identified at this stage — incumbents Scale AI (acquired by Meta, 2025, SiliconANGLE), Encord, and Surge AI all operate physical-AI data infrastructure and could add a physics-violation module without channel conflict.
- **Commoditization risk:** Multiple academic groups have already published physics-violation benchmarks (T2VPhysBench, WorldModelBench, VideoPhy-2, LikePhys — arxiv 2024-2025), and large labelers have the workforce to productize human review on top.

## Market & Traction

- **Traction signals:**
  - LinkedIn company page exists at linkedin.com/company/tryinstance (company website footer); follower count not retrievable.
  - Twitter/X handle @tryinstance exists (company website footer); follower count not retrievable.
  - Product website is a minimal landing page stating "working on world models" with no metrics, customer logos, or pricing (tryinstance.app, fetched Jun 2026).
  - Prior-product (pre-pivot, "Instance: AI data analyst for databases") opened early demos to "startups and data-driven teams" (Lucy Cai LinkedIn, Jan 2026); no current-product user, revenue, or press data found.
  - No Product Hunt launch found.
  - No public press coverage of current synthetic-video product found.
- **Competitors:**
  - Encord ($110M total raised, $60M Series C 2025 led by Wellington, revenue unknown, TechFundingNews/PRNewswire): full-lifecycle physical-AI data platform serving 300+ teams including Woven by Toyota, Skydio — broader than physics-violation scanning.
  - Surge AI (raising up to $1B at >$15B valuation, Sacra/SiliconANGLE Jul 2025, profitable since 2021, revenue undisclosed): expert human-annotator network for text/code/image/video — generalist, not physics-specific.
  - Scale AI (acquired by Meta 2025, SiliconANGLE): data labeling at hyperscale — generalist incumbent now inside Meta.
  - SuperAnnotate ($13M raised 2025, SiliconANGLE Jul 2025, revenue unknown): data labeling platform competing with Scale/Surge — generalist.
  - Academic benchmarks (non-commercial alternatives): WorldModelBench (NeurIPS 2025), VideoPhy-2, T2VPhysBench, LikePhys — free, open-source, lack human-judgment scaling layer.
- **Why now:** [Inferred]: Video world models (NVIDIA Cosmos, Jan 2025 launch — Spheron blog; Genie/Veo class systems) crossed a usability threshold in 2025 making synthetic video data viable for robotics/autonomy training, creating commercial demand for physics quality gates that previously lived only in academic papers.

## Founders & Team

- **Lucy Cai (Cofounder, CTO):**
  - Background: MIT MEng in AI; prior internships at SpaceX and Amazon AWS; MIT Lincoln Laboratory intern researching ML for 2D-to-3D point cloud generation (MIT Lincoln Laboratory news; YC company page).
  - Twitter/X: No public account found.
  - LinkedIn: "Building Instance, AI for databases | MIT CS" (linkedin.com/in/lucy-cai/, headline reflects pre-pivot product as of search).
  - GitHub: No public repos found.
- **Claire Mao (Cofounder):**
  - Background: MIT Math + CS; President of MIT Council for Math Majors (engage.mit.edu/cmm); contributor at The Tech (MIT student newspaper, thetech.com/authors/claire-mao).
  - Twitter/X: No public account found.
  - LinkedIn: "Building Instance | MIT Math + CS" (linkedin.com/in/clairemao-/).
  - GitHub: No public repos found.
- **Co-founder relationship:** Founders met in middle school and both attended MIT (YC company page, 2026).
- **Founder-market fit:** Lucy Cai's MIT Lincoln Laboratory work on ML-driven 2D-to-3D vision (MIT Lincoln Laboratory) is adjacent to the synthetic-video/world-model domain; no disclosed advisors or named investors beyond YC.

## Key Risks

- **Recent pivot risk:** Founders publicly described Instance as "AI data analyst for databases" / text-to-SQL in January 2026 LinkedIn posts (Lucy Cai LinkedIn, Claire Mao LinkedIn, Jan 2026), while the current YC Summer 2026 listing describes a physics-aware synthetic-video quality layer — prior-product traction does not transfer, and the new thesis has no public traction signal yet.
- **Academic commoditization:** Four published benchmarks (T2VPhysBench, WorldModelBench, VideoPhy-2, LikePhys — arxiv 2024-2025) already cover physics-violation evaluation for video models openly, creating substitution risk for any closed commercial benchmark.
- **Incumbent encroachment:** Encord explicitly markets to physical-AI customers (Toyota Woven, Skydio — TechFundingNews 2025) and could add a physics module; Meta-owned Scale AI has the labeling workforce to replicate human-judgment scaling.
- **Customer concentration / TAM compression:** The buyer set is a narrow group of frontier video-world-model labs (NVIDIA Cosmos team, Genie/Veo teams, robotics foundation-model startups), most of whom may build evaluation in-house — no signed customers disclosed.
- **Technical feasibility:** Reliable automated detection of physics violations across open-domain synthetic video is unsolved in published literature (LikePhys, Oct 2025, frames this as open research); productizing it at commercial reliability is a research-grade challenge.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Landing page live at tryinstance.app (Jun 2026); LinkedIn + Twitter handles registered (company website footer); no users, revenue, press, or launch metrics disclosed |
| Revenue Signal | No public data found (no pricing page on tryinstance.app, Jun 2026) |
| Founders | Lucy Cai (Cofounder/CTO): MIT MEng AI, SpaceX intern, Amazon AWS intern, MIT Lincoln Lab. Claire Mao (Cofounder): MIT Math + CS, MIT Council for Math Majors President. |
| Competitors | Encord ($110M total raised, revenue unknown, broader physical-AI data platform serving 300+ teams); Surge AI (raising up to $1B at >$15B valuation, revenue unknown, generalist annotator network); Scale AI (acquired by Meta 2025, revenue unknown, generalist incumbent); SuperAnnotate ($13M raised 2025, revenue unknown, generalist labeling); academic benchmarks WorldModelBench / VideoPhy-2 / T2VPhysBench (open-source, free) |
| Moat Signals | No public data found |
| Risk Factors | Recent pivot from text-to-SQL to synthetic-video QA, academic-benchmark commoditization, incumbent encroachment (Encord/Scale) |
| Founder Reach | Lucy Cai: Twitter not found, LinkedIn count not retrievable, GitHub not found. Claire Mao: Twitter not found, LinkedIn count not retrievable, GitHub not found. |
| Distribution Signals | No public data found |
| Emails | claire@tryinstance.app, lucy@tryinstance.app |

Sources:
- [Instance YC company page](https://www.ycombinator.com/companies/instance)
- [tryinstance.app landing page](https://tryinstance.app/)
- [Lucy Cai LinkedIn](https://www.linkedin.com/in/lucy-cai/)
- [Claire Mao LinkedIn](https://www.linkedin.com/in/clairemao-/)
- [MIT Lincoln Laboratory — Lucy Cai intern spotlight](https://www.ll.mit.edu/news/intern-spotlight-lucy-cai-uses-machine-learning-turn-2d-images-3d)
- [Encord $60M Series C — TechFundingNews](https://techfundingnews.com/encord-scale-ai-rival-60m-physical-ai-data/)
- [Surge AI funding profile — Sacra](https://sacra.com/c/surge-ai/)
- [SuperAnnotate $13M — SiliconANGLE](https://siliconangle.com/2025/07/15/superannotate-snags-13m-funding-take-scale-ai-surge-ai/)
- [T2VPhysBench (arxiv)](https://arxiv.org/html/2505.00337v1)
- [WorldModelBench (arxiv)](https://arxiv.org/pdf/2502.20694)
- [VideoPhy-2 (arxiv)](https://arxiv.org/pdf/2503.06800)
- [LikePhys (arxiv)](https://arxiv.org/pdf/2510.11512)
- [NVIDIA Cosmos / Spheron blog](https://www.spheron.network/blog/deploy-nvidia-cosmos-gpu-cloud-synthetic-data/)
