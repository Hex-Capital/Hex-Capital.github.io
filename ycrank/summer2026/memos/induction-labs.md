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
| YC Partner | Harj Taggar |
| Emails | team@inductionlabs.com, hiring@inductionlabs.com ([company website, Jul–Aug 2026](https://www.inductionlabs.com/)) |

## The Idea

- **Problem:** Current computer-use models fail too often for most work, while conventional video-learning methods infer actions with inverse-dynamics models that require application-specific labeled data ([Induction Labs technical note, Jul 2026](https://www.inductionlabs.com/news/scaling-video-pretraining)).
- **Approach:** Photon-1 encodes video frames into discrete latent tokens, predicts future states autoregressively, and then uses instruction fine-tuning plus online reinforcement learning to translate imagined states into computer actions ([Induction Labs technical note, Jul 2026](https://www.inductionlabs.com/news/scaling-video-pretraining)).
- **Differentiation:** Unlike H Company’s annotated-example training flywheel and standard inverse-dynamics approaches, Induction Labs pretrains on screen-recording video without action labels; its internal tests report 30x less pretraining compute and 3x lower serving cost than Gemini 3.1 Flash-Lite ([Induction Labs](https://www.inductionlabs.com/news/scaling-video-pretraining); [H Company, Mar 2026](https://hcompany.ai/holo3)).
- **Business Model:** [Inferred]: Usage-based API access or model licensing to computer-use-agent developers is a possible monetization path because the company measures serving cost, but no pricing or access terms are public ([Induction Labs technical note, Jul 2026](https://www.inductionlabs.com/news/scaling-video-pretraining)).
- **TAM/SAM:** The broader AI-agents market was estimated at $7.63B in 2025 and projected to reach $182.97B in 2033 at a 49.6% CAGR, while no public SAM estimate was found specifically for computer-use foundation models ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/ai-agents-market-report)).
- **GTM / Distribution:** [Inferred]: The initial path is research-led developer distribution through the Photon-1 technical release and demonstrations, followed by partnerships or access for teams building computer-use agents ([YC launch page, Jul 2026](https://www.ycombinator.com/companies/induction-labs)).

## Defensibility

- **Moat today:** The company reports an internal index of 2B public videos, a filtered corpus of approximately 2M screen recordings, a proprietary keyframe filter, a differential latent encoder with over 100x compression, and custom fused training kernels ([Induction Labs technical note, Jul 2026](https://www.inductionlabs.com/news/scaling-video-pretraining)).
- **Future moat:** [Inferred]: A larger observational-video corpus and reinforcement-learning feedback could improve the model and increase reproduction cost, but no customer usage or proprietary feedback volume has been disclosed.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** H Company already distributes computer-use models through APIs and open weights, including locally deployable Holo3.1 variants, allowing agent developers to use an alternative without reproducing Induction Labs’ architecture ([H Company, Jun–Jul 2026](https://hcompany.ai/holo3.1)).

## Market & Traction

- **Traction signals:**
  - Photon-1 is a 106B-A5B mixture-of-experts model trained on 575M frames, or 18 years of screen video, and the company reports it exceeded Gemini 3.1 Flash-Lite on internal computer-use benchmarks ([Induction Labs, Jul 2026](https://www.inductionlabs.com/news/scaling-video-pretraining)).
  - 515 LinkedIn followers ([LinkedIn, Aug 2026](https://www.linkedin.com/company/induction-labs)).
  - 215 X followers and approximately 80K views on the Photon-1 announcement ([TwStalker, Jun–Aug 2026](https://mobile.twstalker.com/induction_labs)).
  - Covered by Founderland on July 24, 2026, and TMTPost on July 25, 2026 ([Founderland](https://founderland.ai/articles/induction-labs-rethinks-ai-foundation-models-through-curiosi-mrypdaq2); [TMTPost](https://www.tmtpost.com/agent/ai-article/19350)).
  - YC lists zero jobs, while the company website solicits applications by email ([YC company page, Aug 2026](https://www.ycombinator.com/companies/induction-labs); [company website](https://www.inductionlabs.com/)).
- **Competitors (minimum 3, up to 5):**
  - H Company ($220M raised, revenue unknown): trains computer-use policy models with annotated and synthetic navigation data and offers APIs, browser software, and open weights ([Bpifrance, May 2024](https://presse.bpifrance.fr/the-h-company-hcompanyai-realise-une-levee-de-fonds-de-220-millions-de-dollars-pour-sa-vision-de-lintelligence-artificielle-generale-agi/?lang=fra); [H Company](https://hcompany.ai/holo3)).
  - Adept AI ($415M raised, revenue unknown): focuses on multimodal systems that operate business software, versus Induction Labs’ observational-video pretraining architecture ([Adept, Mar 2023](https://www.adept.ai/blog/series-b/); [Startup Intros, Jul 2026](https://startupintros.com/orgs/adept-ai)).
  - Adaption Labs ($50M raised, revenue unknown): develops models that continually change through real-world interaction, versus Induction Labs’ future-state prediction from video followed by reinforcement learning ([Fortune, Feb 2026](https://fortune.com/2026/02/04/adaption-labs-50-million-seed-funding-emergence-captial-sara-hooker-sudip-roy-ai-models-that-learn-on-the-fly/)).
  - World Labs ($1.23B raised, revenue unknown): builds spatial models and APIs for generating explorable 3D worlds, an adjacent world-model approach rather than desktop-action pretraining ([World Labs, Feb 2026](https://www.worldlabs.ai/blog/funding-2026); [CB Insights, Aug 2026](https://www.cbinsights.com/company/world-labs/financials)).
- **Why now:** [Inferred]: The technical threshold is the combination of internet-scale screen video, a representation compressed to 2.2KB per frame, and sparse-model training that made a 575M-frame pretraining run computationally tractable ([Induction Labs technical note, Jul 2026](https://www.inductionlabs.com/news/scaling-video-pretraining)).

## Founders & Team

- **Jonathan Li (CEO & Co-Founder):**
  - Background: Conducted NLP research at Queen’s University while in high school, published first-author work at ACL 2023, and worked on synthetic data, reasoning, and reinforcement-learning infrastructure at Cohere ([personal website](https://www.jonat.li/); [ACL paper](https://arxiv.org/abs/2305.12086)).
  - Twitter/X: @jonat_li, 104 followers ([TwStalker, Jun 2026](https://mobile.twstalker.com/induction_labs)).
  - LinkedIn: Profile lists Induction Labs; headline not retrievable, with 812 followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/jonatli)).
  - GitHub: @MonliH; reBlock has 17 stars ([GitHub, Aug 2026](https://github.com/MonliH)).
- **David Li (Co-Founder):**
  - Background: University of Waterloo software-engineering student from 2023–2028, with a Shopify internship, Sunnybrook machine-learning research, and multiple hackathon placements ([LinkedIn](https://ca.linkedin.com/in/davidy-li); [Michael Liu, Jul 2026](https://www.linkedin.com/posts/michaelshliu_ycs-summer-2026-batch-starts-next-month-activity-7473018892362088448-eXje)).
  - Twitter/X: No public account found.
  - LinkedIn: “Software Engineering Student @ University of Waterloo,” with 612 followers ([LinkedIn, Jun 2026](https://ca.linkedin.com/in/davidy-li)).
  - GitHub: No public repos found.
- **Co-founder relationship:** Jonathan describes David as his brother and says they are building a company together “again” ([Jonathan Li personal website, 2026](https://www.jonat.li/)).
- **Founder-market fit:** [Inferred]: Jonathan’s documented reinforcement-learning and foundation-model work at Cohere and David’s software-engineering and machine-learning background map directly to Photon-1’s model-training and systems requirements ([Jonathan Li](https://www.jonat.li/); [David Li](https://ca.linkedin.com/in/davidy-li)).

## Key Risks

- **Independent validation:** Photon-1’s computer-use results are internal, its Gemini compute comparison includes company estimates, and no peer-reviewed evaluation or public leaderboard result was found ([Induction Labs](https://www.inductionlabs.com/news/scaling-video-pretraining); [Founderland, Jul 2026](https://founderland.ai/articles/induction-labs-rethinks-ai-foundation-models-through-curiosi-mrypdaq2)).
- **Training-data rights:** [Inferred]: Training on approximately 2M publicly available screen-recording videos could create licensing or privacy exposure because the technical note does not describe consent, licenses, or removal procedures ([Induction Labs, Jul 2026](https://www.inductionlabs.com/news/scaling-video-pretraining)).
- **Generalization:** Photon-1 was pretrained only on computer-use video, while evidence beyond desktops consists of fine-tuning experiments on 20,000 checkers games and 10,000 synthetic billiards games ([Induction Labs, Jul 2026](https://www.inductionlabs.com/news/scaling-video-pretraining)).
- **Competitive overlap:** H Company reports a 78.85% OSWorld-Verified score for Holo3 and distributes open weights and an inference API, creating a deployable substitute for computer-use developers ([H Company, Mar 2026](https://hcompany.ai/holo3)).
- **Name and record disambiguation:** Third-party databases conflate the company with drug-discovery businesses or list different founders and a Summer 2025 batch, while the current YC page identifies Jonathan Li, David Li, and Summer 2026 ([YC](https://www.ycombinator.com/companies/induction-labs); [Startup Intros](https://startupintros.com/orgs/induction-labs); [Dealroom](https://app.dealroom.co/companies/induction_labs)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.63B global AI-agents market in 2025, projected to $182.97B by 2033 at 49.6% CAGR (Grand View Research, 2026) |
| SAM | No public data found |
| Traction | Photon-1 trained on 575M frames and reported to exceed Gemini 3.1 Flash-Lite on internal benchmarks (Induction Labs, Jul 2026); 515 LinkedIn followers (LinkedIn, Aug 2026); 215 X followers (TwStalker, Jun 2026) |
| Revenue Signal | No public data found |
| Founders | Jonathan Li (CEO): Cohere reasoning/RL infrastructure and ACL 2023 first author (personal website, 2026); David Li (Co-Founder): Waterloo software engineering, Shopify internship, and Sunnybrook ML research (LinkedIn, Jul 2026) |
| Competitors | H Company ($220M raised, revenue unknown, annotated computer-use training and deployed APIs) (Bpifrance, May 2024); Adept AI ($415M raised, revenue unknown, enterprise-software action models) (Adept/Startup Intros, 2023–2026); Adaption Labs ($50M raised, revenue unknown, continual learning) (Fortune, Feb 2026); World Labs ($1.23B raised, revenue unknown, 3D spatial world models) (World Labs/CB Insights, 2026) |
| Moat Signals | Internal index of 2B public videos, approximately 2M filtered screen recordings, proprietary keyframe filtering, over 100x representation compression, and custom fused kernels (Induction Labs, Jul 2026) |
| Risk Factors | Internal-only benchmark validation, video-data licensing and privacy exposure, and open-weight computer-use competition (Induction Labs and H Company, 2026) |
| Founder Reach | Jonathan Li: X 104, LinkedIn 812, GitHub top repo 17 stars (TwStalker/LinkedIn/GitHub, Jun–Aug 2026); David Li: LinkedIn 612, Twitter and GitHub not found (LinkedIn, Jun 2026) |
| Distribution Signals | 515 LinkedIn followers (LinkedIn, Aug 2026), 215 X followers and approximately 80K announcement views (TwStalker, Jun–Aug 2026), YC launch post (YC, Jul 2026) |
| Emails | team@inductionlabs.com, hiring@inductionlabs.com (company website, Jul–Aug 2026) |
