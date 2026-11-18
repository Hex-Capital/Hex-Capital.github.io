# ORO AI

> Teaching AI the judgment to run businesses

| Field | Value |
|-------|-------|
| Website | https://www.oroagents.com |
| YC Page | https://www.ycombinator.com/companies/oro-ai |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/oro-ai)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | Vancouver, BC, Canada |
| Tags | Deep Learning, Reinforcement Learning, AI |
| YC Partner | Christopher Golda ([Y Combinator](https://www.ycombinator.com/companies/oro-ai)) |
| Emails | team@oroagents.com for research access and data partnerships ([ORO AI LinkedIn](https://www.linkedin.com/company/oro-agents)), support@oroagents.com for support and privacy ([ORO Privacy & Terms](https://oroagents.com/privacy-policy)) |

## The Idea

- **Problem** — AI teams evaluating agents for wholesale buying need to measure whether an agent catches problems that surface weeks after a decision, such as customers cutting orders after repeated shortages, using human buyers and fixed reorder rules as reference points. ([SMB Bench technical report, Nov 2026](https://oroagents.com/benchmarks/smb-bench))
- **Approach** — SMB Bench gives agents a produce buying desk for a simulated 90-day quarter, lets them query records, place orders and write notes, then compares profit across matched scenarios with and without delayed customer and supplier effects. ([SMB Bench technical report, Nov 2026](https://oroagents.com/benchmarks/smb-bench))
- **Differentiation** — SMB Bench isolates delayed effects on wholesale buying decisions, while Andon Labs’ Vending-Bench scores a vending business on its ending balance, Veris AI recreates customer-specific enterprise systems, and Prime Intellect provides a general-purpose environment hub and training stack. ([ORO SMB Bench](https://oroagents.com/benchmarks/smb-bench), [Andon Labs Vending-Bench](https://andonlabs.com/evals/vending-bench-2), [Veris platform](https://veris.ai/platform), [Prime Intellect](https://www.primeintellect.ai/blog/series-a))
- **Business Model** — [Inferred]: ORO could license hosted simulation access or custom environments to AI labs, given its email-based access grants and invitation to discuss research and data partnerships. ([SMB Bench access](https://huggingface.co/datasets/oro-agents/smb-bench), [ORO AI LinkedIn](https://www.linkedin.com/company/oro-agents))
- **TAM/SAM** — No public TAM/SAM data found for this specific segment.
- **GTM / Distribution** — ORO distributes the report, leaderboard and run traces publicly and grants hosted access by email. Website not accessible at time of research at the listed `www` address, with the apex domain accessible. ([ORO Research](https://oroagents.com/benchmarks), [Hugging Face](https://huggingface.co/datasets/oro-agents/smb-bench))

## Defensibility

- **Moat today** — GetASAP and other wholesalers helped calibrate the buying simulation and scripted expert policy, and ORO gates access to the grader. ([SMB Bench technical report](https://oroagents.com/benchmarks/smb-bench), [SMB Bench grader](https://huggingface.co/datasets/oro-agents/smb-bench-grader))
- **Future moat** — [Inferred]: Recurring access to operator data could improve calibration across industries, but current public evidence covers one buying workflow and establishes no exclusive data rights. ([SMB Bench technical report](https://oroagents.com/benchmarks/smb-bench))
- **Market structure** — No structural barrier identified at this stage.
- **Commoditization risk** — [Inferred]: Simulation vendors such as Veris can build comparable tests using public benchmark methods and datasets, with operator-specific calibration still requiring access to domain experts. ([Veris platform](https://veris.ai/platform), [SMB Bench dataset](https://huggingface.co/datasets/oro-agents/smb-bench), [SMB Bench technical report](https://oroagents.com/benchmarks/smb-bench))

## Market & Traction

- **Traction signals**
  - Fall 2026 YC participation and zero jobs on the YC listing ([Y Combinator, Nov 17, 2026](https://www.ycombinator.com/companies/oro-ai)).
  - September 2026 funding records show a $500K convertible note in CB Insights and a $125K YC entry in Dealroom, which matches the fixed SAFE component of YC’s published $500K standard deal. ([CB Insights, via search snippet](https://www.cbinsights.com/company/oro-ai/financials), [Dealroom](https://app.dealroom.co/companies/oro_ai_1), [YC standard deal](https://www.ycombinator.com/deal))
  - SMB Bench launched November 6, with 859 runs across 16 models and 18 tasks by November 13 ([ORO announcement and research index, Nov 2026](https://oroagents.com/benchmarks)).
  - 670 SMB Bench dataset downloads in the preceding month ([Hugging Face, Nov 17, 2026](https://huggingface.co/datasets/oro-agents/smb-bench)).
  - GetASAP and other wholesalers contributed to simulation calibration ([SMB Bench technical report, Nov 2026](https://oroagents.com/benchmarks/smb-bench)).
  - 150 LinkedIn followers and approximately 2.6K X followers for @oroagents ([LinkedIn and Teapawt X mirror, Nov 17, 2026](https://www.linkedin.com/company/oro-agents), [X mirror snapshot](https://www.nitter.cf/oroagents)).
  - ORO AI covered in The AI Read’s startup directory ([The AI Read, accessed Nov 17, 2026](https://theairead.com/ventures)).
  - Earlier product, ORO Bench shopping competition — 976 agent entries across six races in the October report, with the competition continuing after the November 4 shift to business simulations ([ORO Research, Oct 2026](https://oroagents.com/benchmarks), [ORO pivot announcement, Nov 2026](https://oroagents.com/blog/oros-next-chapter)).
  - Earlier product, shopping competition repository — 23 GitHub stars ([GitHub, Nov 17, 2026](https://github.com/ORO-AI/oro)).
  - Company location listings show Vancouver on YC and San Francisco as headquarters on LinkedIn ([YC](https://www.ycombinator.com/companies/oro-ai), [ORO AI LinkedIn](https://www.linkedin.com/company/oro-agents)).
- **Competitors**
  - **Andon Labs** (funding amount and lead unverified, revenue unknown) scores a simulated vending business on year-end cash and runs real-world business experiments ([Andon Labs](https://andonlabs.com/evals/vending-bench-2), [YC](https://www.ycombinator.com/companies/andon-labs)).
  - **Veris AI** ($8.5M raised, revenue unknown) trains and tests agents in replicas of enterprise users, tools and data, with a June 2025 seed co-led by Decibel Ventures and Acrew Capital ([Veris AI](https://www.veris.ai/blog/introducing-veris-ai-a-new-way-to-train-enterprise-ai-agents-through-simulated-experience), [Gunderson Dettmer](https://www.gunder.com/en/news-insights/client-news/veris-ai-emerges-from-stealth-with-a-dollar85m-series-seed-financing)).
  - **Prime Intellect** (over $150M raised, over $100M annualized revenue) provides an open environment hub and training infrastructure, with a $130M July 2026 Series A led by Radical Ventures ([Prime Intellect, Jul 2026](https://www.primeintellect.ai/blog/series-a)).
  - **Applied Compute** ($510M across disclosed financings, $100M annualized revenue run rate) trains and serves customer-specific models, with $350M in November 2026 financing led by Elad Gil ([Applied Compute, Apr 2026](https://www.appliedcompute.com/company/fundraise), [Applied Compute, Nov 2026](https://www.appliedcompute.com/company/100m-run-rate-fundraise)).
- **Why now** — ORO attributes its November 2026 shift to models sustaining longer activities and consumer shopping becoming a built-in assistant capability. ([ORO pivot announcement](https://oroagents.com/blog/oros-next-chapter), [METR time-horizon measurements, Sep 2026](https://metr.org/time-horizons/))

## Founders & Team

- **Shardul Bansal (Founder/CEO)**
  - **Background** — Studied computer science and researched distributed-training evaluations at the University of Toronto, worked on AWS Cloud Map and was a founding engineer at Crucible Labs building on Bittensor. Direct business email and prior exits — No public data found. ([YC founder profile](https://www.ycombinator.com/founders/shardul-bansal))
  - **Twitter/X** — @shardiban, approximately 1.1K followers ([YC founder profile](https://www.ycombinator.com/founders/shardul-bansal), [Teapawt X mirror, Nov 17, 2026](https://xitter.gq/shardiban)).
  - **LinkedIn** — ORO AI listed as employer, headline unavailable, 2K followers ([LinkedIn, via search snippet](https://ca.linkedin.com/in/shardul-bansal)).
  - **GitHub** — No public repos found under a verified personal handle.
- **Seth Schilbe (Founder/CTO)**
  - **Background** — Earned a software engineering degree from the University of New Brunswick, attended Waterloo, led distributed-systems work on AWS ECS and Cloud Map, and co-founded HomeWurk. Direct business email and prior exits — No public data found. ([YC founder profile](https://www.ycombinator.com/founders/seth-schilbe))
  - **Twitter/X** — @ironseth_s, 685 followers ([YC founder profile](https://www.ycombinator.com/founders/seth-schilbe), [Sotwe X mirror, Nov 2026](https://www.sotwe.com/ironseth_s)).
  - **LinkedIn** — ORO AI listed as employer, headline unavailable, 346 followers ([LinkedIn, Sep 2026 snapshot via search snippet](https://ca.linkedin.com/in/sethschilbe)).
  - **GitHub** — Co-author on ORO-AI/oro, which has 23 stars, using the shared support@oroagents.com address, with personal handle unverified ([GitHub commit](https://github.com/ORO-AI/oro/commit/83b0dbf60e32261367b217a6e3e02157668acdcb), [GitHub repo, Nov 17, 2026](https://github.com/ORO-AI/oro)).
- **Co-founder relationship** — Both worked on AWS Cloud Map ([Y Combinator](https://www.ycombinator.com/companies/oro-ai)).
- **Founder-market fit** — Bansal brings distributed-training evaluation experience and Schilbe brings distributed-systems and marketplace experience, and both co-authored SMB Bench with Jarrod Barnes while Christopher Golda is their assigned YC partner. ([YC](https://www.ycombinator.com/companies/oro-ai), [SMB Bench technical report](https://oroagents.com/benchmarks/smb-bench))

## Key Risks

- **Technical feasibility** — No model beat the fixed buying rule in every run, and the best mean simulated profit was $7,749 versus $10,795 for the scripted expert, giving ORO a reference for measuring the remaining performance gap. ([SMB Bench technical report, Nov 2026](https://oroagents.com/benchmarks/smb-bench))
- **Transfer to business operations** — SMB Bench gives agents control of purchasing while other functions run on fixed rules, limiting what its results establish about end-to-end operation. ([ORO pivot announcement, Nov 2026](https://oroagents.com/blog/oros-next-chapter))
- **Market substitution** — [Inferred]: AI teams that need tests for their own workflows can use Veris to recreate their tools, data and users. ([Veris platform](https://veris.ai/platform))
- **Shopping competition dependency** — Bittensor controls reward distribution for the earlier shopping competition, exposing that program’s participant incentives to network rule changes. ([ORO Privacy & Terms](https://oroagents.com/privacy-policy))
- **Name confusion** — Funding records can conflate this company with GetORO, the private-data startup that announced a $6M seed in April 2025. ([GetORO financing announcement](https://starthere.co/investments/oro/), [YC company profile](https://www.ycombinator.com/companies/oro-ai))

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | SMB Bench launched Nov 6 and reached 859 runs across 16 models by Nov 13, 2026 ([ORO Research](https://oroagents.com/benchmarks)). GetASAP helped calibrate the simulation ([SMB Bench, Nov 2026](https://oroagents.com/benchmarks/smb-bench)). Earlier shopping competition recorded 976 entries across six races ([ORO Research, Oct 2026](https://oroagents.com/benchmarks)). |
| Revenue Signal | No public data found |
| Founders | Shardul Bansal (CEO), Crucible Labs, AWS Cloud Map and University of Toronto. Seth Schilbe (CTO), AWS ECS and Cloud Map, HomeWurk and University of New Brunswick ([Y Combinator](https://www.ycombinator.com/companies/oro-ai)). |
| Competitors | Andon Labs (funding unverified, revenue unknown, vending simulation) ([Andon Labs](https://andonlabs.com/evals/vending-bench-2)). Veris AI ($8.5M raised, revenue unknown, enterprise replicas) ([Veris AI](https://www.veris.ai/blog/introducing-veris-ai-a-new-way-to-train-enterprise-ai-agents-through-simulated-experience)). Prime Intellect (over $150M raised, over $100M annualized revenue, environment hub and training infrastructure) ([Prime Intellect](https://www.primeintellect.ai/blog/series-a)). Applied Compute ($510M disclosed, $100M annualized revenue run rate, customer-specific models) ([Applied Compute April financing](https://www.appliedcompute.com/company/fundraise), [November financing](https://www.appliedcompute.com/company/100m-run-rate-fundraise)). |
| Moat Signals | Wholesaler-calibrated simulation and scripted expert policy, gated grader access ([SMB Bench](https://oroagents.com/benchmarks/smb-bench), [Hugging Face grader](https://huggingface.co/datasets/oro-agents/smb-bench-grader)). |
| Risk Factors | Model reliability and single-workflow scope ([SMB Bench](https://oroagents.com/benchmarks/smb-bench)), Bittensor reward dependency for the shopping competition ([ORO Privacy & Terms](https://oroagents.com/privacy-policy)). |
| Founder Reach | Bansal, X 1.1K and LinkedIn 2K ([Teapawt](https://xitter.gq/shardiban), [LinkedIn via search snippet](https://ca.linkedin.com/in/shardul-bansal)). Schilbe, X 685 and LinkedIn 346 ([Sotwe](https://www.sotwe.com/ironseth_s), [LinkedIn via search snippet](https://ca.linkedin.com/in/sethschilbe)). |
| Distribution Signals | 670 monthly SMB Bench dataset downloads ([Hugging Face, Nov 2026](https://huggingface.co/datasets/oro-agents/smb-bench)), 150 company LinkedIn followers ([LinkedIn, Nov 2026](https://www.linkedin.com/company/oro-agents)), 2.6K company X followers ([Teapawt, Nov 2026](https://www.nitter.cf/oroagents)), 23 stars for the shopping competition repo ([GitHub, Nov 2026](https://github.com/ORO-AI/oro)). |
| Emails | team@oroagents.com for research access and data partnerships ([ORO AI LinkedIn](https://www.linkedin.com/company/oro-agents)), support@oroagents.com for support and privacy ([ORO Privacy & Terms](https://oroagents.com/privacy-policy)). |
