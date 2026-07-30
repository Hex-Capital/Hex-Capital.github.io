# Induction Labs

> Building intellectually curious AI

| Field | Value |
|-------|-------|
| Website | https://inductionlabs.com |
| YC Page | https://www.ycombinator.com/companies/induction-labs |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Deep Learning, Hard Tech, AI |
| YC Partner | Harj Taggar ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/induction-labs)) |
| Emails | team@inductionlabs.com, contact@inductionlabs.com, hiring@inductionlabs.com ([company website, Jul 2026](https://www.inductionlabs.com/); [Axiom-1 announcement, Aug 2025](https://inductionlabs.com/news/axiom-1)) |

## The Idea

- **Problem:** [Inferred]: Developers of computer-use agents need models that can learn varied tasks from large video corpora, while existing approaches often require inverse-dynamics models, labeled actions, or text-mediated control that constrains which demonstrations can be used ([Induction Labs, Jul 2026](https://www.inductionlabs.com/news/scaling-video-pretraining)).
- **Approach:** Photon-1 predicts future states autoregressively in a compressed latent space, learns implicit policies from unlabeled screen-recording video, and is subsequently fine-tuned to emit actions and trained with online reinforcement learning ([Induction Labs, Jul 2026](https://www.inductionlabs.com/news/scaling-video-pretraining)).
- **Differentiation:** Unlike inverse-dynamics and video-diffusion approaches, Photon-1 pretrains without action labels and reportedly beats Gemini 3.1 Flash-Lite on an internal computer-use benchmark with 30× less pretraining compute and 3× lower serving cost ([Induction Labs, Jul 2026](https://www.inductionlabs.com/news/scaling-video-pretraining)).
- **Business Model:** [Inferred]: Model licensing or consumption-based API access for agent developers is a possible monetization path, but no public pricing, access program, or commercial terms were found.
- **TAM/SAM:** The broader AI-agents market was estimated at $8 billion in 2025 and projected to reach $48.3 billion by 2030 at a 43.3% CAGR, but no public SAM estimate was found for video-pretrained computer-use foundation models ([Research and Markets, 2025](https://www.researchandmarkets.com/reports/6179354/ai-agents-technologies-applications-global)).
- **GTM / Distribution:** No public GTM data found.

## Defensibility

- **Moat today:** The company built an internal index of 2 billion public videos, filtered approximately 2 million screen recordings into 575 million training frames, and developed an encoder offering over 100× state-representation compression ([Induction Labs, Jul 2026](https://www.inductionlabs.com/news/scaling-video-pretraining)).
- **Future moat:** [Inferred]: Repeatedly curating observational corpora and collecting verified reinforcement-learning rollouts could produce proprietary training data and operating knowledge, but no customer or deployment feedback loop is publicly documented.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** World Labs, General Intuition, Runway, Google, and other model developers can train world or computer-use models using video, simulation, proprietary interaction data, or multimodal foundation models ([World Labs, Feb 2026](https://www.worldlabs.ai/blog/funding-2026); [General Intuition](https://www.generalintuition.pro/); [Runway, Feb 2026](https://runwayml.com/news/runway-series-e-funding)).

## Market & Traction

- **Traction signals:**
  - Photon-1 was launched July 23, 2026 as a 106B-A5B mixture-of-experts model trained on 575 million frames, equivalent to 18 years of video at one frame per second ([Induction Labs, Jul 2026](https://www.inductionlabs.com/news/scaling-video-pretraining)).
  - Company LinkedIn page: 413 followers ([LinkedIn, Jul 2026](https://www.linkedin.com/company/induction-labs)).
  - Company X account: approximately 4,000 followers following the Photon-1 launch ([TwStalker profile scrape, Jul 2026](https://mobile.twstalker.com/bojie_li)).
  - Photon-1 received coverage from MarkTechPost on July 26, 2026 and Metaverse Post on July 27, 2026 ([MarkTechPost](https://www.marktechpost.com/2026/07/26/induction-labs-photon-1-simulates-desktops-plays-checkers-and-models-billiard-physics-from-one-pretraining-run/); [Metaverse Post](https://mpost.io/at-30x-less-compute-induction-labs-imagination-model-outperforms-google-by-watching/)).
  - The company website solicits applications from researchers and engineers, while its YC page lists zero formal jobs ([company website, Jul 2026](https://www.inductionlabs.com/); [Y Combinator, Jul 2026](https://www.ycombinator.com/companies/induction-labs)).
- **Competitors (minimum 3, up to 5):**
  - World Labs ($1.23B raised, revenue unknown): builds persistent spatial 3D world models through its Marble product rather than models centered on learning computer actions from screen recordings ([World Labs funding history, Feb 2026](https://siliconvalleyinvestclub.com/world-labs/)).
  - General Intuition ($454M raised, revenue unknown): trains world models and agents from gaming data, compared with Induction Labs’ use of filtered internet screen recordings ([General Intuition](https://www.generalintuition.pro/); [Axios, Jun 2026](https://www.axios.com/2026/06/26/general-intuition-ai-gaming)).
  - Runway ($860M raised, approximately $90M annualized revenue): commercializes video generation and world simulation, while Induction Labs currently presents computer-use and observational-learning research ([Crunchbase News, Feb 2026](https://news.crunchbase.com/venture/gen-ai-video-startup-unicorn-runway-seriese-raise/); [Sacra, Jun 2025 estimate](https://sacra.com/c/runway/)).
- **Why now:** [Inferred]: Induction Labs’ 100×-compression encoder and sparse architecture reduced Photon-1 pretraining to approximately 30,000 H200 GPU-hours, making a 106B-A5B raw-video experiment feasible on the disclosed setup ([Induction Labs, Jul 2026](https://www.inductionlabs.com/news/scaling-video-pretraining)).

## Founders & Team

- **Jonathan Li (CEO & Co-Founder):**
  - Background: Education credentials are not publicly listed; he reports prior work on synthetic data, reasoning, and reinforcement-learning infrastructure at Cohere and academic NLP research at Queen’s University, including a first-authored ACL 2023 paper ([personal website](https://www.jonat.li/); [ACL Anthology, 2023](https://aclanthology.org/2023.acl-short.120/)).
  - Twitter/X: @jonat_li, 104 followers as last retrievable ([TwStalker, May 2026](https://mobile.twstalker.com/induction_labs)).
  - LinkedIn: Public profile lists Induction Labs and 812 followers; headline not retrievable ([LinkedIn, Jul 2026](https://www.linkedin.com/in/jonatli)).
  - GitHub: @MonliH; reBlock has 17 stars ([GitHub, Jul 2026](https://github.com/MonliH)).
- **David Li (Founder):**
  - Background: University of Waterloo software-engineering student from 2023–2028, with reported prior Shopify internship and Sunnybrook machine-learning research ([LinkedIn, Jul 2026](https://ca.linkedin.com/in/davidy-li); [Michael Liu, Jul 2026](https://www.linkedin.com/posts/michaelshliu_ycs-summer-2026-batch-starts-next-month-activity-7473018892362088448-eXje)).
  - Twitter/X: No public account found.
  - LinkedIn: “Software Engineering Student @ University of Waterloo,” with 612 followers ([LinkedIn, Jul 2026](https://ca.linkedin.com/in/davidy-li)).
  - GitHub: No public repos found.
- **Co-founder relationship:** Jonathan Li identifies David Li as his brother and says they are building a company together again ([Jonathan Li personal website](https://www.jonat.li/)).
- **Founder-market fit:** Jonathan’s Cohere reasoning and RL work plus published NLP research, and David’s software-engineering and ML background, directly overlap with foundation-model training and systems implementation ([Jonathan Li personal website](https://www.jonat.li/); [LinkedIn, Jul 2026](https://ca.linkedin.com/in/davidy-li)).

## Key Risks

- **Independent validation:** Photon-1’s Gemini comparison uses internal benchmarks, with no peer review or public leaderboard result reported; the company publishes methodology and demonstrations but not an independent evaluation ([Founderland, Jul 2026](https://founderland.ai/articles/induction-labs-rethinks-ai-foundation-models-through-curiosi-mrypdaq2)).
- **Training-data provenance:** Photon-1’s corpus derives from an internal index of 2 billion publicly available videos, but licensing and consent terms for the approximately 2 million selected screen recordings are not disclosed; the company reports video- and frame-level filtering as mitigation ([Induction Labs, Jul 2026](https://www.inductionlabs.com/news/scaling-video-pretraining)).
- **Model continuity:** The company announced Axiom 1 as a unified computer-use model in August 2025 and Photon-1 as an imagination-model architecture in July 2026, without stating whether Axiom was discontinued, commercialized, or incorporated into Photon-1 ([Axiom-1 announcement](https://inductionlabs.com/news/axiom-1); [Photon-1 announcement](https://www.inductionlabs.com/news/scaling-video-pretraining)).
- **Capitalized competition:** World Labs, General Intuition, and Runway have collectively announced financing rounds ranging from $315 million to $1 billion for world-model development, creating competition for compute, data, and researchers ([World Labs, Feb 2026](https://www.worldlabs.ai/blog/funding-2026); [Axios, Jun 2026](https://www.axios.com/2026/06/26/general-intuition-ai-gaming); [Runway, Feb 2026](https://runwayml.com/news/runway-series-e-funding)).
- **Name collision:** The unrelated inductionlabs.io markets embedding-based data visualization, while the YC company uses inductionlabs.com, creating a search and identity-confusion risk ([inductionlabs.io](https://inductionlabs.io/); [Y Combinator](https://www.ycombinator.com/companies/induction-labs)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $8B AI-agents market in 2025, projected to $48.3B by 2030 at 43.3% CAGR (Research and Markets, 2025) |
| SAM | No public data found |
| Traction | Photon-1 launched July 23, 2026; 413 LinkedIn followers and approximately 4K X followers ([Induction Labs](https://www.inductionlabs.com/news/scaling-video-pretraining); [LinkedIn](https://www.linkedin.com/company/induction-labs); [TwStalker](https://mobile.twstalker.com/bojie_li)) |
| Revenue Signal | No public data found |
| Founders | Jonathan Li (CEO & Co-Founder): Cohere reasoning/RL and ACL 2023 research ([personal site](https://www.jonat.li/)); David Li (Founder): Waterloo software engineering and reported Shopify/Sunnybrook experience ([LinkedIn](https://ca.linkedin.com/in/davidy-li)) |
| Competitors | World Labs ($1.23B raised, revenue unknown, spatial 3D worlds); General Intuition ($454M raised, revenue unknown, gaming-data world models); Runway ($860M raised, approximately $90M annualized revenue, video generation/world simulation) ([World Labs](https://siliconvalleyinvestclub.com/world-labs/); [Axios](https://www.axios.com/2026/06/26/general-intuition-ai-gaming); [Crunchbase News](https://news.crunchbase.com/venture/gen-ai-video-startup-unicorn-runway-seriese-raise/)) |
| Moat Signals | Internal 2B-video index, approximately 2M selected screen recordings, 575M-frame corpus, and 100×-compression encoder ([Induction Labs, Jul 2026](https://www.inductionlabs.com/news/scaling-video-pretraining)) |
| Risk Factors | Internal-only benchmark validation, video-data provenance, model continuity from Axiom 1 to Photon-1 ([Induction Labs, Jul 2026](https://www.inductionlabs.com/news/scaling-video-pretraining)) |
| Founder Reach | Jonathan Li: X 104, LinkedIn 812, GitHub top repo 17 stars ([TwStalker](https://mobile.twstalker.com/induction_labs); [LinkedIn](https://www.linkedin.com/in/jonatli); [GitHub](https://github.com/MonliH)); David Li: LinkedIn 612 ([LinkedIn](https://ca.linkedin.com/in/davidy-li)) |
| Distribution Signals | Company LinkedIn 413 followers and company X approximately 4K followers in July 2026 ([LinkedIn](https://www.linkedin.com/company/induction-labs); [TwStalker](https://mobile.twstalker.com/bojie_li)) |
| Emails | team@inductionlabs.com, contact@inductionlabs.com, hiring@inductionlabs.com ([company website](https://www.inductionlabs.com/); [Axiom-1 announcement](https://inductionlabs.com/news/axiom-1)) |
