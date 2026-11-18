# Reific

> RL environments for superhuman reasoning over time

| Field | Value |
|-------|-------|
| Website | https://www.reific.co/ |
| YC Page | https://www.ycombinator.com/companies/reific |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/reific)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 1 ([Y Combinator](https://www.ycombinator.com/companies/reific)) |
| Location | San Francisco, CA, USA |
| Tags | Generative AI, Machine Learning, Reinforcement Learning, Infrastructure, AI |
| YC Partner | Harj Taggar ([Y Combinator](https://www.ycombinator.com/companies/reific)) |
| Emails | antanas.zilinskas.research@gmail.com (Antanas Žilinskas, [ICLR 2026 research correspondence](https://openreview.net/pdf?id=ScpCaOVGw1)), legal@reific.co ([company enquiries](https://reific.co/company)), security@reific.co ([security reports](https://reific.co/security)) |

## The Idea

- **Problem:** Frontier labs training agents to act on changing signals need to measure whether the agent acts at the right time, which static benchmarks obscure by making the full record available before grading ([Reific, Timing Is Part of the Answer](https://reific.co/research/timing-is-part-of-the-answer)).
- **Approach:** Reific releases de-identified records to agents on a clock across personal-assistant, industrial, and science and compute tasks, then scores decisions against what the records show happened ([Reific environments](https://reific.co/), [scoring methodology](https://reific.co/environments/methodology)).
- **Differentiation:** Reific specializes in clocked time-series replay, while HUD offers an SDK and marketplace for building and selling environments, Prime Intellect operates a community hub integrated with its training stack, and Andromede programmatically generates tasks and verifiers from real-world data ([Reific](https://reific.co/), [HUD](https://www.hud.ai/), [Prime Intellect](https://www.primeintellect.ai/blog/environments), [Andromede](https://andromede.ai/)).
- **Business Model:** Reific offers environment licenses for reinforcement-learning training and builds custom environments by domain, data format, or skill, with rates and billing units undisclosed on the product site ([Reific product FAQ](https://reific.co/#questions)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Reific directs AI labs from its public leaderboard and YC launch to a work-email sample request and researcher booking, and recruits record owners through a separate licensing intake ([Reific](https://reific.co/), [Launch YC](https://www.ycombinator.com/launches/Wzf-reific-rl-environments-for-superhuman-reasoning-over-time), [Reific Data Partners](https://reific.co/data-partners)).

## Defensibility

- **Moat today:** Reific uses real operating records, grades answers against those records, and says domain practitioners review task thresholds and grading ([Reific methodology](https://reific.co/environments/methodology), [Reific expert review](https://reific.co/research/how-experts-shape-our-environments)).
- **Future moat:** [Inferred]: Exclusive rights to recurring operating records could give Reific a continuing supply of fresh tasks, with public evidence limited to a supplier intake that asks whether exclusivity is available ([Reific Data Partners](https://reific.co/data-partners)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** [Inferred]: HUD’s SDK and Prime Intellect’s open environment tooling lower the cost of reproducing the task-building and scoring infrastructure, while comparable record access still depends on data rights ([HUD](https://www.hud.ai/), [Prime Intellect](https://www.primeintellect.ai/blog/environments), [Reific Data Partners](https://reific.co/data-partners)).

## Market & Traction

- **Traction signals:**
  - Public launch on November 10, 2026 ([Launch YC](https://www.ycombinator.com/launches/Wzf-reific-rl-environments-for-superhuman-reasoning-over-time), [founder’s X announcement via Teapawt](https://teapawt.net/Antanas_Z)).
  - Company-reported open-model full-solve rate on unseen tasks rose from 25.6% to 39.5%, a 54% relative gain, with no reported decline on general benchmarks ([Launch YC, November 2026](https://www.ycombinator.com/launches/Wzf-reific-rl-environments-for-superhuman-reasoning-over-time)).
  - Company leaderboard family leaders scored 34.2% on personal agents, 60.2% on industry, and 29.7% on science and compute after a model update, versus the launch post’s claim that each family was below 50% ([Reific leaderboard and methodology, November 10, 2026](https://reific.co/environments/methodology), [Reific leaderboard scores](https://reific.co/), [Launch YC](https://www.ycombinator.com/launches/Wzf-reific-rl-environments-for-superhuman-reasoning-over-time)).
  - Dealroom lists $125K in seed funding from Y Combinator in September 2026, and the YC launch gives no company-specific round amount ([Dealroom](https://app.dealroom.co/companies/reific), [Launch YC](https://www.ycombinator.com/launches/Wzf-reific-rl-environments-for-superhuman-reasoning-over-time)).
  - Company LinkedIn had 94 followers and company X @reific had 21 followers ([LinkedIn](https://www.linkedin.com/company/reific/), [Teapawt X mirror](https://www.nitter.cf/reific), November 2026).
  - YC listed zero jobs, while Reific’s careers page accepted research and domain-expert applications ([YC company profile](https://www.ycombinator.com/companies/reific), [Reific Careers](https://reific.co/careers), November 2026).
  - Reveneau published an AI-written recap of the launch on November 11, 2026 ([Reveneau](https://reveneau.com/ainews/reific-yc-fall-2026-rl-environments-live-data-54-percent)).
- **Competitors:**
  - **HUD** ($16M total reported, revenue unknown) sells an environment-building SDK and vendor marketplace, with a $16M Series A led by Standard Capital in June 2026 ([HUD funding announcement](https://www.hud.ai/blog/announcing-16m-series-a), [HUD on LinkedIn](https://www.linkedin.com/company/hud-evals)).
  - **Prime Intellect** (over $150M raised, over $100M in company-reported annualized revenue) combines an open environment hub with compute and post-training, with a $130M Series A led by Radical Ventures in July 2026 ([Prime Intellect Series A](https://www.primeintellect.ai/blog/series-a), [Environments Hub](https://www.primeintellect.ai/blog/environments)).
  - **Mercor** (over $1.2B in announced rounds including an employee tender, $3B in CEO-reported revenue run rate) acquired Deeptune for enterprise software simulations and announced a $750M Series D in November 2026 with no lead named ([round history](https://seedlist.com/startups/mercor), [Mercor Series D](https://www.mercor.com/blog/series-d/), [CEO’s X post via TwiScan](https://twiscan.com/en/x/brendanfoody)).
  - **Andromede** (funding unknown, revenue unknown) offers a private beta for generating parameterized environments, tasks, and verifiers from real-world data ([Andromede](https://andromede.ai/)).
- **Why now:** [Inferred]: OpenAI’s April 2025 release of tool-using o3 and o4-mini reported gains from scaling reinforcement learning, giving labs a reason to test whether the same training approach transfers to decisions on timed data ([OpenAI](https://openai.com/index/introducing-o3-and-o4-mini/), [Reific](https://reific.co/)).

## Founders & Team

- **Antanas Žilinskas (Founder/CEO):**
  - **Background:** Imperial College London MEng, former Entangl co-founder and CTO, and CERN superconductivity simulation researcher, with research correspondence at antanas.zilinskas.research@gmail.com and no public Reific business email or prior exit found ([YC founder profile](https://www.ycombinator.com/founders/antanas-zilinskas), [ICLR paper](https://openreview.net/pdf?id=ScpCaOVGw1)).
  - **Twitter/X:** @Antanas_Z, 117 followers ([YC founder profile](https://www.ycombinator.com/founders/antanas-zilinskas), [Teapawt X mirror, November 2026](https://teapawt.net/Antanas_Z)).
  - **LinkedIn:** “Stealth,” with 3K followers in the indexed profile ([LinkedIn, via search snippet](https://www.linkedin.com/in/antanaszilinskas)).
  - **GitHub:** @AntanasZilinskas, no public repos found ([GitHub](https://github.com/antanaszilinskas)).
- **Co-founder relationship:** No public data on co-founder history ([YC](https://www.ycombinator.com/companies/reific) lists one founder and a team size of 1, while [Reific’s LinkedIn](https://www.linkedin.com/company/reific/) displays an 11–50 employee band).
- **Founder-market fit:** Žilinskas first-authored ICLR research on rare-event time-series forecasting and says he shipped AI systems to hyperscalers at Entangl, and Reific lists YC as its backer ([ICLR](https://openreview.net/pdf?id=ScpCaOVGw1), [Launch YC](https://www.ycombinator.com/launches/Wzf-reific-rl-environments-for-superhuman-reasoning-over-time)).

## Key Risks

- **Technical feasibility:** [Inferred]: Gains may vary across models and deployments because the launch reports results for one open model on unseen tasks, while the public leaderboard measures performance inside Reific’s own environments ([Launch YC](https://www.ycombinator.com/launches/Wzf-reific-rl-environments-for-superhuman-reasoning-over-time), [Reific methodology](https://reific.co/environments/methodology)).
- **Data licensing:** [Inferred]: Expanding to new domains depends on obtaining usable operating records and training rights, which Reific pursues through supplier intake and written license agreements ([Reific Data Partners](https://reific.co/data-partners)).
- **Re-identification:** Reific reports that dates and initials let a test model reconstruct personal details from de-identified records, prompting added transformations and release checks ([Reific privacy research, November 2026](https://reific.co/research/how-we-protect-peoples-data)).
- **Substitution:** [Inferred]: Buyers with their own records can use open environment tooling or build through HUD’s SDK, reducing reliance on a third-party environment library ([Prime Intellect](https://www.primeintellect.ai/blog/environments), [HUD](https://www.hud.ai/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 25.6% to 39.5% open-model full-solve rate ([Launch YC, November 2026](https://www.ycombinator.com/launches/Wzf-reific-rl-environments-for-superhuman-reasoning-over-time)), $125K YC seed entry ([Dealroom, September 2026](https://app.dealroom.co/companies/reific)) |
| Revenue Signal | No public data found |
| Founders | Antanas Žilinskas (Founder/CEO), Imperial MEng, former Entangl CTO, ICLR first author ([YC founder profile](https://www.ycombinator.com/founders/antanas-zilinskas), [ICLR](https://openreview.net/pdf?id=ScpCaOVGw1)) |
| Competitors | HUD ($16M raised, revenue unknown, SDK and marketplace) ([HUD](https://www.hud.ai/blog/announcing-16m-series-a), [HUD LinkedIn](https://www.linkedin.com/company/hud-evals)), Prime Intellect (over $150M raised, over $100M annualized revenue, open hub and training stack) ([Prime Intellect](https://www.primeintellect.ai/blog/series-a)), Mercor (over $1.2B in announced rounds including a tender, $3B revenue run rate, enterprise simulations) ([round history](https://seedlist.com/startups/mercor), [Mercor](https://www.mercor.com/blog/series-d/), [CEO’s X post via TwiScan](https://twiscan.com/en/x/brendanfoody)), Andromede (funding unknown, revenue unknown, programmatic environments from real data) ([Andromede](https://andromede.ai/)) |
| Moat Signals | Clocked replay of real records, record-checked scoring, and practitioner review ([Reific methodology](https://reific.co/environments/methodology), [Reific expert review](https://reific.co/research/how-experts-shape-our-environments)) |
| Risk Factors | Model transfer ([Launch YC](https://www.ycombinator.com/launches/Wzf-reific-rl-environments-for-superhuman-reasoning-over-time)), dataset rights ([Reific Data Partners](https://reific.co/data-partners)), re-identification ([Reific privacy research](https://reific.co/research/how-we-protect-peoples-data)) |
| Founder Reach | Antanas Žilinskas, 117 X followers ([Teapawt X mirror, November 2026](https://teapawt.net/Antanas_Z)), 3K LinkedIn followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/antanaszilinskas)) |
| Distribution Signals | November 10 YC launch ([Launch YC](https://www.ycombinator.com/launches/Wzf-reific-rl-environments-for-superhuman-reasoning-over-time), [founder’s X announcement via Teapawt](https://teapawt.net/Antanas_Z)), 94 LinkedIn followers and 21 X followers ([LinkedIn](https://www.linkedin.com/company/reific/), [Teapawt X mirror](https://www.nitter.cf/reific), November 2026) |
| Emails | antanas.zilinskas.research@gmail.com (Antanas Žilinskas, [ICLR 2026 research correspondence](https://openreview.net/pdf?id=ScpCaOVGw1)), legal@reific.co ([company enquiries](https://reific.co/company)), security@reific.co ([security reports](https://reific.co/security)) |
