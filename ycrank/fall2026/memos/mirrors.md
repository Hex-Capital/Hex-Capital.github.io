# Mirrors

> Give AI agents the right context at the right moment

| Field | Value |
|-------|-------|
| Website | https://www.mirrors.dev |
| YC Page | https://www.ycombinator.com/companies/mirrors |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/mirrors)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Developer Tools, SaaS, B2B, AI |
| YC Partner | Andrew Miklas ([YC](https://www.ycombinator.com/companies/mirrors)) |
| Emails | devs@runmirrors.com ([Mirrors](https://mirrors.dev/)); aryan.singhal2016@gmail.com ([founder website](https://www.aisinghal.com/)); aryan@profine.ai, prior-project address ([GitHub](https://github.com/ai-singhal)) |

## The Idea

- **Problem:** Engineering teams maintaining customer-facing agents repeatedly inspect failed traces and add exceptions to growing global prompts, making behavior improvement recurring engineering work ([YC](https://www.ycombinator.com/companies/mirrors)).
- **Approach:** Engineers scope guidance to recurring situations, preview matches, and deliver reviewed context at runtime through an SDK integrated at the agent’s user-turn boundary ([Mirrors documentation](https://mirrors.dev/docs/llms.txt)).
- **Differentiation:** Papaya turns trace-derived fixes into pull requests and Mem0 retrieves persistent conversational memories, whereas Mirrors routes reviewed, conditional guidance into existing agents ([Papaya](https://www.ycombinator.com/companies/papaya), [Mem0 research](https://arxiv.org/abs/2504.19413), [Mirrors documentation](https://mirrors.dev/docs/llms.txt)).
- **Business Model:** Pricing is scoped around the customer’s workflow and use case through a demo conversation; no public price list or billing unit is published ([Mirrors FAQ](https://mirrors.dev/), accessed Oct 27, 2026).
- **TAM/SAM:** AIMG estimates the broader context-layer software market at $8.3B in 2026, reaching $24.5B in 2030 at 31% CAGR, but this includes categories beyond Mirrors’ product and provides no Mirrors-specific SAM ([AIMG, Sep 2026](https://aimarkets.group/insights/from-8-3-billion-to-24-5-billion-why-context-is-becoming-enterprise-ais-most-valuable-layer/)).
- **GTM / Distribution:** The website directs engineering teams to book a demo and bring traces from a workflow, supported by public integration documentation ([Mirrors](https://mirrors.dev/), [quickstart](https://mirrors.dev/docs/quickstart)).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Customer-specific guidance, routing conditions, and outcome histories could increase replacement costs, but public evidence of retention or accumulated proprietary datasets is unavailable.
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given adjacent vendors already provide trace-based optimization and memory infrastructure ([Papaya](https://www.ycombinator.com/companies/papaya), [Mem0](https://arxiv.org/abs/2504.19413)).
- **Commoditization risk:** [Inferred]: Agent-framework vendors and internal platform teams could implement conditional context delivery, although reproducing review, rollout, and measurement workflows would require additional engineering ([Mirrors documentation](https://mirrors.dev/docs/llms.txt)).

## Market & Traction

- **Traction signals:**
  - Website displays **711,933 agent sessions**, without a measurement period, customer breakdown, or allocation between product versions ([Mirrors](https://mirrors.dev/), accessed Oct 27, 2026).
  - $500,000 financing from YC dated September 1, 2026, reported by a funding database rather than a company announcement ([CB Insights](https://www.cbinsights.com/company/mirrors/financials), accessed Oct 27, 2026).
  - Company LinkedIn page displays 170 followers ([LinkedIn](https://www.linkedin.com/company/runmirrors/), accessed Oct 27, 2026).
  - Company X account @mirrorsdotdev displays 54 followers through a third-party mirror ([Teapawt](https://teapawt.org/mirrorsdotdev), accessed Oct 27, 2026).
  - YC lists zero open jobs ([YC](https://www.ycombinator.com/companies/mirrors), accessed Oct 27, 2026).
- **Product history:** Older YC listings describe production-session replay against reconstructed tools, while current documentation describes runtime context delivery; no dated transition announcement or separately attributable prior-product traction was found ([older YC listing](https://www.ycombinator.com/companies/industry/Infrastructure), [current documentation](https://mirrors.dev/docs/llms.txt)).
- **Competitors:**
  - **Papaya** (funding: No public data found; revenue unknown): analyzes production traces and ships approved optimization recommendations as pull requests, rather than routing guidance during conversations ([YC](https://www.ycombinator.com/companies/papaya)).
  - **Mem0** ($24M announced funding; revenue unknown): provides persistent memory extraction and retrieval rather than engineer-authored situational corrections, with a $20M Series A led by Basis Set Ventures announced October 2025 ([funding breakdown](https://sacra.com/c/mem0/), [company announcement](https://www.prnewswire.com/news-releases/mem0-raises-24m-series-a-to-build-memory-layer-for-ai-agents-302597157.html), [research](https://arxiv.org/abs/2504.19413)).
  - **Letta** ($10M disclosed seed funding; revenue unknown): develops agents that retain memories and improve themselves, rather than adding reviewed guidance to another team’s agent, with its disclosed seed led by Felicis in September 2024 ([company](https://www.letta.com/), [funding announcement](https://www.prnewswire.com/news-releases/berkeley-ai-research-lab-spinout-letta-raises-10m-seed-financing-led-by-felicis-to-build-ai-with-memory-302257004.html)).
- **Why now:** [Inferred]: Production deployment creates demand for behavior correction, with 57.3% of respondents running production agents versus 51% in the preceding survey ([LangChain, Jun 2026; survey conducted Nov–Dec 2025](https://www.langchain.com/state-of-agent-engineering?trk=article-ssr-frontend-pulse_little-text-block)).

## Founders & Team

- **Aryan Singhal (Founder/CEO):**
  - Background: Studies artificial intelligence at Purdue, previously researched machine learning at UT Austin and UCSB, and previously built GPU-optimization project Profine, which his website says he no longer works on ([founder website](https://www.aisinghal.com/)).
  - Twitter/X: @ai_singhal, 484 followers through a third-party mirror ([Teapawt](https://teapawt.org/ai_singhal), accessed Oct 27, 2026).
  - LinkedIn: Public headline not retrievable; the indexed About section says “Building regression testing for AI agents at www.runmirrors.com” ([LinkedIn](https://www.linkedin.com/in/aisinghal), via search snippet, Oct 2026).
  - GitHub: @ai-singhal; pinned prior-project repository ProfineAI/profine-cli has 18 stars, separate from Mirrors traction ([GitHub](https://github.com/ai-singhal), accessed Oct 27, 2026).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Singhal’s documented ML research includes language-model evaluation, and YC identifies four high-school AI/ML papers associated with NeurIPS and EMNLP, while YC is the publicly identified institutional backer ([founder website](https://www.aisinghal.com/), [YC](https://www.ycombinator.com/companies/mirrors)).

## Key Risks

- **Context misapplication:** [Inferred]: Incorrect matching could deliver inappropriate guidance into unrelated workflows; documented mitigations include reviewing matches before activation and using shadow or off modes ([Mirrors documentation](https://mirrors.dev/docs/llms.txt)).
- **Runtime latency and delivery:** The SDK documents a total context-wait budget of 1,000 milliseconds and states that an accepted server decision does not establish application of context or agent success; shorter timeouts and local disabling are available ([SDK reference](https://mirrors.dev/docs/sdk/reference)).
- **Effectiveness measurement:** [Inferred]: Session volume does not establish causal improvement, and Mirrors explicitly says illustrative workflows are not customer results or guarantees of avoiding mistakes ([website terms](https://mirrors.dev/terms)).
- **Substitution:** [Inferred]: Teams could address overlapping needs through Papaya’s optimization pull requests or Mem0’s memory layer, reducing demand for a separate context-routing product ([Papaya](https://www.ycombinator.com/companies/papaya), [Mem0 research](https://arxiv.org/abs/2504.19413)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader context-layer proxy: $8.3B in 2026, $24.5B by 2030, 31% CAGR ([AIMG, Sep 2026](https://aimarkets.group/insights/from-8-3-billion-to-24-5-billion-why-context-is-becoming-enterprise-ais-most-valuable-layer/)). |
| SAM | No public data found |
| Traction | Website displays 711,933 agent sessions, scope unspecified ([Mirrors, Oct 27, 2026](https://mirrors.dev/)); 170 LinkedIn followers ([LinkedIn, Oct 27, 2026](https://www.linkedin.com/company/runmirrors/)). |
| Revenue Signal | Custom use-case pricing; no public price list ([Mirrors FAQ, Oct 2026](https://mirrors.dev/)). |
| Founders | Aryan Singhal, CEO: Purdue AI studies; UT Austin/UCSB ML research ([founder website](https://www.aisinghal.com/)). |
| Competitors | Papaya: funding unavailable, revenue unknown, optimization PRs ([YC](https://www.ycombinator.com/companies/papaya)); Mem0: $24M announced, revenue unknown, persistent memory ([Sacra](https://sacra.com/c/mem0/)); Letta: $10M disclosed seed, revenue unknown, learning agents ([announcement](https://www.prnewswire.com/news-releases/berkeley-ai-research-lab-spinout-letta-raises-10m-seed-financing-led-by-felicis-to-build-ai-with-memory-302257004.html), [company](https://www.letta.com/)). |
| Moat Signals | No public data found |
| Risk Factors | Context matching and rollout control ([documentation](https://mirrors.dev/docs/llms.txt)); runtime delivery limitations ([SDK](https://mirrors.dev/docs/sdk/reference)); illustrative results ([terms](https://mirrors.dev/terms)). |
| Founder Reach | Aryan: X 484 followers ([Teapawt, Oct 2026](https://teapawt.org/ai_singhal)); LinkedIn approximately 3K followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/aisinghal)); prior-project Profine CLI 18 stars ([GitHub, Oct 2026](https://github.com/ai-singhal)). |
| Distribution Signals | Demo booking and developer documentation ([Mirrors](https://mirrors.dev/), [docs](https://mirrors.dev/docs)); company X 54 followers ([Teapawt, Oct 2026](https://teapawt.org/mirrorsdotdev)). |
| Emails | devs@runmirrors.com ([Mirrors](https://mirrors.dev/)); aryan.singhal2016@gmail.com ([founder website](https://www.aisinghal.com/)); prior-project aryan@profine.ai ([GitHub](https://github.com/ai-singhal)). |
