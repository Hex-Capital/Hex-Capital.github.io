# ORO AI

> Continuously improving evals for agentic commerce

| Field | Value |
|-------|-------|
| Website | https://www.oroagents.com |
| YC Page | https://www.ycombinator.com/companies/oro-ai |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/oro-ai)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | Vancouver, BC, Canada |
| Tags | Crypto / Web3, Consumer Products, AI |
| YC Partner | Christopher Golda ([YC](https://www.ycombinator.com/companies/oro-ai)) |
| Emails | team@oroagents.com ([ORO website](https://oroagents.com/)); support@oroagents.com ([ORO privacy policy](https://app.oroagents.com/privacy-policy)) |

## The Idea

- **Problem:** Shopping-agent developers need training traces and evaluations that resist memorization, while existing synthetic traces inherit teacher-model biases and production logs lack reliable supervision ([ORO research, June 2026](https://arxiv.org/abs/2606.10064)).
- **Approach:** ORO runs a Bittensor competition where builders submit agents, validators evaluate them, winners receive rewards, and executions generate training trajectories ([YC](https://www.ycombinator.com/companies/oro-ai)).
- **Differentiation:** Compared with Alibaba’s ShoppingBench, ORO Bench compiles replaceable shopping environments with hidden needs and changing inventory; compared with Arize’s application tracing and evaluation workflows, ORO operates a rewarded agent competition ([ORO Bench](https://app.oroagents.com/benchmarks/oro-bench), [Dynatrace](https://www.dynatrace.com/news/blog/dynatrace-completes-acquisition-of-arize/)).
- **Business Model:** [Inferred]: Selling research data or custom evaluation environments is a possible monetization path because the website solicits requests for data, environments, and samples; published customer pricing was not found ([ORO website](https://oroagents.com/)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** ORO recruits developers through an open-source starter agent and subnet registration, while its website invites research inquiries by email ([ORO blog, April 2026](https://oroagents.com/blog/we-gave-away-85000-in-the-past-21-days), [ORO website](https://oroagents.com/)).

## Defensibility

- **Moat today:** ORO has accumulated 4,891,831 scored trajectories, defined as distinct agent-version/task pairs, although its website describes an open-source competition rather than exclusive ownership of the underlying approach ([ORO website, accessed October 27, 2026](https://oroagents.com/)).
- **Future moat:** [Inferred]: Repeated participation could create a feedback loop between agent submissions, harder tasks, and useful training data, but the published study establishes a training experiment rather than durable commercial switching costs ([ORO research, June 2026](https://arxiv.org/abs/2606.10064)).
- **Market structure:** [Inferred]: No structural barrier identified at this stage; ORO publishes its validator, reference agent, and practice tasks, and Prime Intellect already offers environments, evaluations, and reinforcement-learning infrastructure ([ORO Bench](https://oroagents.com/benchmarks/oro-bench), [Prime Intellect](https://www.primeintellect.ai/blog/series-a)).
- **Commoditization risk:** [Inferred]: Other labs can reuse ORO’s MIT-licensed code and published training pipeline, reducing the implementation barrier while leaving participant recruitment and ongoing environment development to reproduce ([GitHub](https://github.com/ORO-AI/oro), [research repository](https://github.com/ORO-AI/shoppingbench-trajectory-primitive)).

## Market & Traction

- **Traction signals:**
  - Company-reported 4,891,831 scored trajectories, including 23,663 new pairs on October 27 ([ORO website, October 27, 2026](https://oroagents.com/)).
  - Company-reported $85,000 distributed to builders, over 345 competing agents, and four completed competitions ([ORO blog, April 16, 2026](https://oroagents.com/blog/we-gave-away-85000-in-the-past-21-days)).
  - Company-authored research reports Qwen3-4B success increasing from an 18.0% published baseline to 42.7% on a guarded held-out partition ([arXiv, June 8, 2026](https://arxiv.org/abs/2606.10064)).
  - Company GitHub repository: 21 stars and 23 forks ([GitHub, accessed October 27, 2026](https://github.com/ORO-AI/oro)).
  - Company LinkedIn: 127 followers ([LinkedIn, accessed October 27, 2026](https://www.linkedin.com/company/oro-agents/)).
  - Company X account @oroagents: approximately 2.5K followers ([Teapaw profile mirror, accessed October 27, 2026](https://teapaw.org/oroagents)).
  - Reported funding: $500,000 from Y Combinator, dated September 1, 2026 ([CB Insights](https://www.cbinsights.com/company/oro-ai/financials)).
- **Competitors (adjacent alternatives):**
  - **Prime Intellect** (over $150M raised; over $100M annualized revenue): offers compute, RL training, environments, and evaluations across domains; its latest announced round was a $130M Series A led by Radical Ventures ([company announcement, July 8, 2026](https://www.primeintellect.ai/blog/series-a)).
  - **Braintrust** (approximately $124.3M raised; revenue unknown): provides production observability and evaluation workflows; its $80M Series B was led by ICONIQ in February 2026 ([Premier Alternatives](https://www.premieralts.com/companies/braintrust-software-development-applications/funding-rounds), [company announcement](https://braintrust-1wysmujm2.preview.braintrust.dev/blog/announcing-series-b)).
  - **Arize** ($131M raised; revenue unknown): provides application monitoring, tracing, and evaluations; its $70M Series C was led by Adams Street Partners in February 2025, and Dynatrace completed its acquisition in October 2026 ([CB Insights](https://www.cbinsights.com/company/arize-ai/financials), [Arize](https://arize.com/blog/arize-ai-raises-70m-series-c-to-build-the-gold-standard-for-ai-evaluation-observability/), [Dynatrace](https://www.dynatrace.com/news/press-release/dynatrace-completes-acquisition-of-arize/)).
- **Why now:** [Inferred]: ShoppingBench’s 2025 release supplied an intent-grounded shopping evaluation substrate that ORO subsequently adapted into a rewarded trajectory-generation system ([ShoppingBench](https://arxiv.org/abs/2508.04266), [ORO research, June 2026](https://arxiv.org/abs/2606.10064)).

## Founders & Team

- **Shardul Bansal (Founder/CEO):**
  - Background: Studied computer science at the University of Toronto, researched distributed-training evaluation, worked on AWS Cloud Map, and was a founding engineer at Crucible Labs building on Bittensor ([YC founder profile](https://www.ycombinator.com/founders/shardul-bansal)).
  - Twitter/X: @shardiban, approximately 1K followers ([Teapaw profile mirror, accessed October 27, 2026](https://teapaw.org/shardiban)).
  - LinkedIn: [Profile linked by YC](https://linkedin.com/in/shardul-bansal); headline not retrievable ([YC](https://www.ycombinator.com/founders/shardul-bansal)).
  - GitHub: No public repos found.
- **Seth Schilbe (Founder/CTO):**
  - Background: University of New Brunswick software-engineering graduate, previously an AWS senior software engineer working across ECS and Cloud Map, and co-founder of local-services marketplace HomeWurk ([YC founder profile](https://www.ycombinator.com/founders/seth-schilbe)).
  - Twitter/X: @ironseth_s; count not retrievable from X directly ([YC](https://www.ycombinator.com/founders/seth-schilbe)).
  - LinkedIn: Profile displayed as “Seth S.” with 346 followers; headline not retrievable ([LinkedIn, indexed September 2026, via search snippet](https://ca.linkedin.com/in/sethschilbe)).
  - GitHub: No public repos found.
- **Co-founder relationship:** Both founders previously worked on AWS Cloud Map; their profiles do not establish when they met ([YC](https://www.ycombinator.com/companies/oro-ai)).
- **Founder-market fit:** [Inferred]: Bansal’s Bittensor and evaluation work and Schilbe’s distributed-systems experience relate to operating the validator network and benchmark infrastructure ([YC](https://www.ycombinator.com/companies/oro-ai)).

## Key Risks

- **Benchmark gaming:** ORO reported agents exploiting public tasks without shopping and introduced public qualification followed by hidden-task races as a mitigation ([ORO engineering post, April 17, 2026](https://oroagents.com/blog/how-we-stop-miners-from-abusing-our-incentive-mechanism)).
- **Technical generalization:** ORO reported mean hidden-task scores of 0.18 for agents averaging 0.71 on practice tasks, documenting a gap between practice performance and unseen environments ([ORO Bench, October 2026](https://app.oroagents.com/benchmarks/oro-bench)).
- **Reward dependency:** [Inferred]: Developer participation may depend on Bittensor incentives because rewards follow network rules outside ORO’s control and are explicitly not guaranteed ([ORO terms](https://oroagents.com/privacy-policy)).
- **Name confusion:** Other businesses use ORO AI, including an AI productivity platform at oroai.co, so their audience, funding, and product figures require separate attribution ([other company’s LinkedIn](https://www.linkedin.com/company/oro-ai)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 4,891,831 scored trajectories (distinct agent-version/task pairs; [ORO website](https://oroagents.com/), October 27, 2026); over 345 agents and $85,000 distributed to builders ([ORO blog](https://oroagents.com/blog/we-gave-away-85000-in-the-past-21-days), April 16, 2026) |
| Revenue Signal | No public data found |
| Founders | Shardul Bansal, CEO: Toronto computer science, AWS, Crucible Labs; Seth Schilbe, CTO: UNB software engineering, AWS, HomeWurk ([YC](https://www.ycombinator.com/companies/oro-ai)) |
| Competitors | Prime Intellect: over $150M raised, over $100M annualized revenue, general RL infrastructure ([company](https://www.primeintellect.ai/blog/series-a)); Braintrust: approximately $124.3M raised, revenue unknown, production evals ([Premier Alternatives](https://www.premieralts.com/companies/braintrust-software-development-applications/funding-rounds)); Arize: $131M raised, revenue unknown, observability ([CB Insights](https://www.cbinsights.com/company/arize-ai/financials), [Dynatrace](https://www.dynatrace.com/news/blog/dynatrace-completes-acquisition-of-arize/)) |
| Moat Signals | Published trajectory corpus, filter, and post-training pipeline ([ORO research](https://arxiv.org/abs/2606.10064), June 2026) |
| Risk Factors | Benchmark gaming ([ORO engineering](https://oroagents.com/blog/how-we-stop-miners-from-abusing-our-incentive-mechanism)); practice-to-hidden performance gap ([ORO Bench](https://app.oroagents.com/benchmarks/oro-bench)); externally governed rewards ([ORO terms](https://oroagents.com/privacy-policy)) |
| Founder Reach | Bansal: approximately 1K X followers ([Teapaw](https://teapaw.org/shardiban), October 2026); Schilbe: 346 LinkedIn followers ([LinkedIn](https://ca.linkedin.com/in/sethschilbe), indexed September 2026, via search snippet) |
| Distribution Signals | 21 GitHub stars ([GitHub](https://github.com/ORO-AI/oro)); 127 LinkedIn followers ([LinkedIn](https://www.linkedin.com/company/oro-agents/)); approximately 2.5K company X followers ([Teapaw](https://teapaw.org/oroagents)); accessed October 27, 2026 |
| Emails | team@oroagents.com ([ORO website](https://oroagents.com/)); support@oroagents.com ([ORO privacy policy](https://app.oroagents.com/privacy-policy)) |
