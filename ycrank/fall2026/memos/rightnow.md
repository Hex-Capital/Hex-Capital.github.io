# RightNow

> Co-designing the fastest intelligence

| Field | Value |
|-------|-------|
| Website | https://runinfra.ai/ |
| YC Page | https://www.ycombinator.com/companies/rightnow |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/rightnow)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Generative AI, Machine Learning, Infrastructure, AI |
| YC Partner | Nicolas Dessaigne ([YC](https://www.ycombinator.com/companies/rightnow)) |
| Emails | jaber@rightnowai.co, osama@rightnowai.co ([company GitHub](https://github.com/RightNow-AI/StreamIndex/blob/main/pyproject.toml)); jaber@runinfra.ai ([Privacy Policy](https://runinfra.ai/privacy-policy)); jaberib647@gmail.com ([founder GitHub](https://github.com/jaberjaber23)) |

## The Idea

- **Problem:** Coding agents repeatedly submit conversation context, increasing inference costs; RunInfra targets developers using existing coding agents and model APIs ([RunInfra, accessed Oct 2026](https://runinfra.ai/)).
- **Approach:** RunInfra serves open models through compatible APIs, optimizes GPU kernels, and routes recurring sessions toward replicas holding cached context ([RunInfra](https://runinfra.ai/)).
- **Differentiation:** RunInfra emphasizes session-aware caching and coding subscriptions, while Together AI combines inference with training and compute, and Fireworks emphasizes customized models ([RunInfra](https://runinfra.ai/), [Together AI](https://www.together.ai/blog/announcing-our-series-c), [Fireworks](https://fireworks.ai/news/fireworks-raises-1-5-billion-series-d)).
- **Business Model:** Prepaid consumption starts at $5, while workspace subscriptions cost $10/$29/$99 monthly with usage allowances and five-hour/weekly limits ([pricing, Oct 2026](https://runinfra.ai/pricing)).
- **TAM/SAM:** The broader AI inference market is estimated at $132.7B in 2026, growing 18% annually through 2033, but this includes hardware and applications beyond RunInfra’s segment; No public TAM/SAM data found for this specific segment ([Grand View Research, Oct 2026](https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-inference-market-report)).
- **GTM / Distribution:** Distribution includes self-service API access, coding-agent integrations, Product Hunt launches, and an application-based startup credits program ([RunInfra](https://runinfra.ai/), [startup program](https://runinfra.ai/startups), [Product Hunt](https://www.producthunt.com/products/runinfra)).

## Defensibility

- **Moat today:** Public technical evidence includes Autokernel’s GPU-kernel optimization implementation and correctness harness, although its MIT license permits reuse ([GitHub](https://github.com/RightNow-AI/autokernel)).
- **Future moat:** [Inferred]: Accumulated workload-specific optimizations could improve serving economics, but a durable proprietary advantage is not publicly established.
- **Market structure:** No structural barrier identified at this stage; Together AI already develops kernel optimizations alongside inference infrastructure ([Together AI, July 2026](https://www.together.ai/blog/announcing-our-series-c)).
- **Commoditization risk:** [Inferred]: Existing inference providers could reproduce parts of the offering using open optimization code and their own serving infrastructure ([Autokernel](https://github.com/RightNow-AI/autokernel), [Together AI](https://www.together.ai/blog/announcing-our-series-c)).

## Market & Traction

- **Traction signals:**
  - RunInfra initial launch July 1, 2026, ranked #14 with 155 points ([Product Hunt leaderboard](https://www.producthunt.com/leaderboard/daily/2026/7/1)).
  - RunInfra coding-plan launch ranked #8 with 115 points on October 20, 2026 ([Product Hunt leaderboard](https://www.producthunt.com/leaderboard/daily/2026/10/20)).
  - Autokernel: approximately 1,600 GitHub stars; separate OpenFang agent project: approximately 18,200 stars, rather than RunInfra users ([Autokernel](https://github.com/RightNow-AI/autokernel), [OpenFang](https://github.com/RightNow-AI/openfang), accessed Oct 27, 2026).
  - Company LinkedIn: 2,263 followers ([LinkedIn, accessed Oct 27, 2026](https://www.linkedin.com/company/rightnowai/)).
  - Company X @rightnowai_co: approximately 1,000 followers; RunInfra @runinfrai: approximately 10,000 ([TwStalker, Oct 2026, via search snippet](https://ww1.twstalker.com/rightnowai_co)).
  - Earlier product RightNow AI V2.0 ranked #1 daily and #2 weekly on April 27, 2025; these editor metrics predate RunInfra’s launch, and no formal pivot date was found ([Product Hunt](https://www.producthunt.com/products/rightnow-ai/awards)).
  - Zero YC job listings ([YC, accessed Oct 27, 2026](https://www.ycombinator.com/companies/rightnow)).
- **Competitors:**
  - **Together AI** ($1,334M raised; estimated $1,000M annualized revenue, February 2026): broader training, GPU rental, and inference platform; latest announced $800M Series C, July 2026, led by Aramco Ventures ([CB Insights, via search snippet](https://www.cbinsights.com/company/together-4/financials), [Sacra estimate](https://sacra.com/c/together-ai/), [Reuters](https://www.investing.com/news/stock-market-news/together-ai-raises-800-million-at-83-billion-valuation-4771027)).
  - **Fireworks AI** ($1,830M raised; over $1,000M annualized revenue): specializes enterprise models; latest company-confirmed financing was $1,505M Series D, July 2026, led by Atreides Management, Index Ventures, and TCV ([Stock Analysis](https://stockanalysis.com/private/fireworks-ai/valuation/), [Fireworks](https://fireworks.ai/news/fireworks-raises-1-5-billion-series-d)).
  - **Baseten** ($2,090M raised; revenue unknown): combines embedded engineering, post-training, and production inference; $1,500M Series F, June 2026, led by Altimeter, Conviction, and Spark, co-led by Sands and Wellington ([Caplight](https://www.caplight.com/company/baseten), [Baseten](https://www.baseten.co/blog/announcing-our-series-f/)).
- **Why now:** Open-weight models becoming alternatives to closed APIs, alongside reinforcement-learning customization, are identified adoption catalysts ([Baseten, January 2026](https://www.baseten.co/blog/announcing-baseten-s-300m-series-e/)).

## Founders & Team

- **Jaber Jaber (Technical Co-founder):**
  - Background: YC lists previous affiliations with Microsoft, Nujoom AI, and Al Hussein Technical University, plus HTU and Stanford alumni affiliations without specifying qualifications ([YC](https://www.ycombinator.com/founders/jaber-jaber)).
  - Twitter/X: @Akashi203; 4,983 followers reported October 22, 2026 ([TwitterScore, via search snippet](https://twitterscore.io/twitter/Akashi203/)).
  - LinkedIn: Profile linked by YC; headline not retrievable ([YC profile link](https://www.ycombinator.com/founders/jaber-jaber)).
  - GitHub: @jaberjaber23; pinned OpenFang repository approximately 18,200 stars ([GitHub, Oct 2026](https://github.com/jaberjaber23)).
- **Osama Jaber (Commercial Co-founder/CMO):**
  - Background: University of Petra alumnus; previously founded Antilab and worked as an undergraduate researcher at Petra ([YC](https://www.ycombinator.com/founders/osama-jaber), [Fundraising Fox](https://fundraisingfox.com/people/osama-jaber)).
  - Twitter/X: @OsamaKakashi; approximately 160 followers ([TwStalker, Oct 2026, via search snippet](https://ww1.twstalker.com/rightnowai_co)).
  - LinkedIn: RightNow affiliation shown; headline unavailable; approximately 6,000 followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/osama-jaber-osama2001)).
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Both founders coauthored inference and model research, including RightNow-Arabic; YC backs the company and lists Nicolas Dessaigne as partner ([research paper](https://arxiv.org/abs/2605.28827), [YC](https://www.ycombinator.com/companies/rightnow)).

## Key Risks

- **Benchmark reproducibility:** RunInfra says historical benchmarks lack runtime details and its engine-comparison harness/raw data are unavailable, limiting independent verification; its methodology discloses these omissions ([methodology, September 2026](https://runinfra.ai/methodology)).
- **Cache-dependent economics:** Published cache rates represent the highest qualifying account rather than typical performance, and hits remain best effort; realized customer costs can therefore differ from displayed effective prices ([methodology](https://runinfra.ai/methodology)).
- **Competitive overlap:** Together AI already develops kernels, compilers, and inference systems, overlapping RunInfra’s optimization mechanism ([Together AI](https://www.together.ai/blog/announcing-our-series-c)).
- **Name ambiguity:** Oracle’s unrelated RightNow customer-service business shares the name; its acquisition and operating metrics must be excluded from this dossier ([Oracle](https://www.oracle.com/applications/rightnow/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader AI inference: $132.7B in 2026; 18% CAGR through 2033, exceeding RunInfra’s scope ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-inference-market-report)) |
| SAM | No public data found |
| Traction | RunInfra #14 July launch; #8 October launch; Autokernel approximately 1,600 stars ([Product Hunt, July 2026](https://www.producthunt.com/leaderboard/daily/2026/7/1), [October 2026](https://www.producthunt.com/leaderboard/daily/2026/10/20), [GitHub, Oct 2026](https://github.com/RightNow-AI/autokernel)) |
| Revenue Signal | $5 minimum prepaid credits; $10/$29/$99 monthly workspace plans ([pricing, Oct 2026](https://runinfra.ai/pricing)) |
| Founders | Jaber: technical co-founder, Microsoft/Nujoom affiliations; Osama: CMO, Petra alumnus ([Jaber YC](https://www.ycombinator.com/founders/jaber-jaber), [Osama YC](https://www.ycombinator.com/founders/osama-jaber)) |
| Competitors | Together AI: training/compute/inference; Fireworks: specialized models; Baseten: embedded optimization/post-training ([Together](https://www.together.ai/blog/announcing-our-series-c), [Fireworks](https://fireworks.ai/news/fireworks-raises-1-5-billion-series-d), [Baseten](https://www.baseten.co/blog/announcing-our-series-f/)) |
| Moat Signals | Public kernel optimization implementation and correctness harness ([Autokernel, GitHub](https://github.com/RightNow-AI/autokernel)) |
| Risk Factors | Benchmark reproducibility, non-typical cache rates, overlapping competitor technology ([methodology](https://runinfra.ai/methodology), [Together AI](https://www.together.ai/blog/announcing-our-series-c)) |
| Founder Reach | Jaber: X 4,983; Osama: LinkedIn approximately 6,000 ([TwitterScore, Oct 2026, via search snippet](https://twitterscore.io/twitter/Akashi203/), [LinkedIn, via search snippet](https://www.linkedin.com/in/osama-jaber-osama2001)) |
| Distribution Signals | Product Hunt launches; startup credits program ([Product Hunt](https://www.producthunt.com/products/runinfra), [RunInfra Startups](https://runinfra.ai/startups)) |
| Emails | jaber@rightnowai.co, osama@rightnowai.co ([company GitHub](https://github.com/RightNow-AI/StreamIndex/blob/main/pyproject.toml)); jaber@runinfra.ai ([Privacy Policy](https://runinfra.ai/privacy-policy)); jaberib647@gmail.com ([founder GitHub](https://github.com/jaberjaber23)) |
