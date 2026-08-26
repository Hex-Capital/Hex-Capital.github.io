# OneTriangle

> The cheapest, fastest lightweight inference. 

| Field | Value |
|-------|-------|
| Website | https://onetriangle.ai/ |
| YC Page | https://www.ycombinator.com/companies/onetriangle |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Smart Packaging, Open Source, Infrastructure, AI |
| YC Partner | Ankit Gupta ([YC company page, Aug 2026](https://www.ycombinator.com/companies/onetriangle)) |
| Emails | hannah@onetriangle.ai; hello@trytrust.ai (prior TrustAI product) ([OneTriangle legal page, Aug 2026](https://onetriangle.ai/legal); [Launch YC, Jul 2026](https://www.ycombinator.com/launches/RkQ-trustai-continuous-compliance-and-governance-for-ai-agents-on-sensitive-systems)) |

## The Idea

- **Problem:** Long-context and agent workloads require large-model decoding but repeatedly incur large-model prefill cost and latency, with ordinary full-model prefill serving as the current alternative ([Launch YC, Aug 2026](https://www.ycombinator.com/launches/T0B-trustai-the-fastest-cheapest-inference-powered-by-kv-cache-transfer)).
- **Approach:** OneTriangle prefills on a smaller model, removes source rotary embeddings, projects per-head key/value tensors into the target model’s attention space, reapplies target positions, and falls back to ordinary prefill when quality or latency gates fail ([company website, Aug 2026](https://onetriangle.ai/)).
- **Differentiation:** Fireworks, Together AI, and Baseten provide broader model hosting, customization, and post-training platforms, while OneTriangle’s disclosed product focus is transferring computed KV-cache state between different open-weight models ([OneTriangle About, Aug 2026](https://onetriangle.ai/about); [Fireworks, Jul 2026](https://fireworks.ai/blog/series-d-announcement); [Together AI, Jul 2026](https://www.together.ai/blog/announcing-our-series-c); [Baseten, Jun 2026](https://www.baseten.co/blog/announcing-our-series-f/)).
- **Business Model:** Usage pricing has no subscription and charges per million tokens—DeepSeek V4 Flash at $0.15 input, $0.03 cached input, and $0.35 output, plus a delayed tier priced 40% below base for delivery within 10 hours ([pricing page, Aug 2026](https://onetriangle.ai/models)).
- **TAM/SAM:** Global AI-inference PaaS was estimated at $18.84B in 2025 and forecast to reach $105.22B by 2030 at a 41.1% CAGR, while the U.S. segment was $1.517B in 2025 with a 39.9% forecast CAGR ([MarketsandMarkets via Research and Markets, Oct 2025](https://www.researchandmarkets.com/reports/6176510/ai-inference-platform-as-a-service-market); [MarketsandMarkets, Jun 2026](https://www.marketsandmarkets.com/Market-Reports/geography/ai-inference-platform-as-a-service-paas-market/US)).
- **GTM / Distribution:** The company offers private managed deployments through demo-led sales and states that customers can switch by changing one configuration line ([company website, Aug 2026](https://onetriangle.ai/)).

## Defensibility

- **Moat today:** The technical-complexity signal is a published learned-cache handoff with 1,048,576 parameters that achieved 82.52% top-token agreement and 1.25× end-to-end speed at an 8,192-token context when source prefill was included ([OneTriangle Research, Aug 18 2026](https://onetriangle.ai/blog/minitron-to-llama-kv-transfer)).
- **Future moat:** [Inferred]: Model-pair mappings, workload-specific acceptance data, and operating results could become proprietary infrastructure assets, but no public customer-deployment scale or patent data establishes that moat.
- **Market structure:** No structural barrier is identified because the company says it is upstreaming its work into vLLM and requires no API changes ([Launch YC, Aug 2026](https://www.ycombinator.com/launches/T0B-trustai-the-fastest-cheapest-inference-powered-by-kv-cache-transfer)).
- **Commoditization risk:** Funded inference providers and open-source runtime contributors could implement related routing, caching, or partial-recomputation techniques, particularly if OneTriangle’s vLLM integration exposes reusable implementation patterns ([Launch YC, Aug 2026](https://www.ycombinator.com/launches/T0B-trustai-the-fastest-cheapest-inference-powered-by-kv-cache-transfer)).

## Market & Traction

- **Traction signals:**
  - Current inference product received 5 Launch YC votes ([Launch YC, Aug 2026](https://www.ycombinator.com/launches/T0B-trustai-the-fastest-cheapest-inference-powered-by-kv-cache-transfer)).
  - Company X account @OneTriangleAI had 488 followers ([TwStalker via search snippet, Aug 25 2026](https://mobile.twstalker.com/TradeTexasBig)).
  - DeepSeek V4 Flash hosting launch received coverage from Web Pulse ([Web Pulse, Aug 24 2026](https://wpnews.pro/news/onetriangle-launches-deepseek-v4-flash-hosting-at-0-15-per-million-input-tokens)).
  - YC listed 0 active jobs ([YC company page, Aug 2026](https://www.ycombinator.com/companies/onetriangle)).
  - Prior TrustAI product’s LinkedIn page had 216 followers ([LinkedIn, Jul 2026](https://www.linkedin.com/company/autotrytrustai)).
- **Competitors (minimum 3, up to 5):**
  - Fireworks AI (> $1.8B total funding, $1B annualized revenue run rate): custom-model training and serving versus OneTriangle’s cross-model KV-cache transfer ([Fireworks, Jul 2026](https://fireworks.ai/blog/series-d-announcement); [Sacra, Aug 2026](https://sacra.com/c/fireworks-ai/)).
  - Together AI ($800M Series C, revenue unknown): full-stack open-model inference, fine-tuning, and GPU clusters versus OneTriangle’s portable-context layer ([Together AI, Jul 2026](https://www.together.ai/blog/announcing-our-series-c)).
  - Baseten ($1.5B Series F, revenue unknown): inference and post-training infrastructure versus OneTriangle’s small-model-prefill/large-model-decode mechanism ([Baseten, Jun 2026](https://www.baseten.co/blog/announcing-our-series-f/)).
- **Why now:** Agent workloads generate 10× the tokens of chat sessions according to the company, while S&P Global forecasts inference-related infrastructure revenue rising from $101B in 2025 to $532B in 2030 ([Launch YC, Aug 2026](https://www.ycombinator.com/launches/T0B-trustai-the-fastest-cheapest-inference-powered-by-kv-cache-transfer); [S&P Global, May 2026](https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/05/ai-infrastructure-results-in-2025-top-expectations-forecast-upgraded)).

## Founders & Team

- **Hannah Chung (Founder/CEO):**
  - Background: MIT computer science and economics student with economic research experience at the World Bank and quantitative-finance experience at Virtu Financial ([YC company page, Aug 2026](https://www.ycombinator.com/companies/onetriangle); [Launch YC, Jul 2026](https://www.ycombinator.com/launches/RkQ-trustai-continuous-compliance-and-governance-for-ai-agents-on-sensitive-systems)).
  - Twitter/X: @hannah_chuu, approximately 2K followers ([TwStalker via search snippet, Aug 25 2026](https://mobile.twstalker.com/TradeTexasBig)).
  - LinkedIn: “TrustAI,” with 3K followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/hannahchung1)).
  - GitHub: No public repos found.
- **Medha Venkatapathy (Founder/CTO):**
  - Background: MIT physics and computer-science student who researched LLM post-training with Jacob Andreas, worked at MIT Lincoln Laboratory, and conducted gravitational-wave research in Pisa ([MIT SuperUROP, 2025–2026](https://superurop.mit.edu/scholars/medha-venkatapathy/); [MIT MISTI, 2024](https://misti.mit.edu/italy-interns-universita-pisa)).
  - Twitter/X: @medha_rv; count not retrievable.
  - LinkedIn: “TrustAI,” with 1K followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/medhav)).
  - GitHub: @turtler12; `pendulum-seismic-isolation`, 0 stars ([GitHub, Aug 2026](https://github.com/turtler12/pendulum-seismic-isolation)).
- **Co-founder relationship:** Chung and Venkatapathy met at MIT three years before the YC profile was published and report building together since freshman year ([YC company page, Aug 2026](https://www.ycombinator.com/companies/onetriangle); [Launch YC, Jul 2026](https://www.ycombinator.com/launches/RkQ-trustai-continuous-compliance-and-governance-for-ai-agents-on-sensitive-systems)).
- **Founder-market fit:** Chung contributes computer-science and quantitative-finance experience, Venkatapathy has documented LLM-optimization research, and the company reports advice from a vLLM lead at Red Hat AI, Robert Shaw, and a Google AI-infrastructure engineer ([OneTriangle About, Aug 2026](https://onetriangle.ai/about)).

## Key Risks

- **Transfer fidelity:** The 8K study achieved 82.52% top-token agreement and explicitly did not test open-ended generation, task accuracy, or human preference; OneTriangle mitigates this with model-pair quality gates and ordinary-prefill fallback ([OneTriangle Research, Aug 18 2026](https://onetriangle.ai/blog/minitron-to-llama-kv-transfer)).
- **Benchmark boundary:** The reported 7.91× target-start speed assumes a resident source cache, declining to 1.25× when source prefill is included, and native prefill remains faster at short contexts ([OneTriangle Research, Aug 18 2026](https://onetriangle.ai/blog/minitron-to-llama-kv-transfer)).
- **Open-source diffusion:** Upstreaming the technology into vLLM can facilitate adoption but may expose implementation patterns to competing providers; OneTriangle’s terms assert ownership of its cache-translation technology ([Launch YC, Aug 2026](https://www.ycombinator.com/launches/T0B-trustai-the-fastest-cheapest-inference-powered-by-kv-cache-transfer); [legal page, Aug 2026](https://onetriangle.ai/legal)).
- **Provider dependency:** Service availability and behavior can depend on third-party models, clouds, GPU providers, and model-pair compatibility, with dedicated infrastructure and ordinary-prefill fallback offered as mitigations ([legal page, Aug 2026](https://onetriangle.ai/legal)).
- **Product pivot:** YC records a governance product launch approximately one month before the inference launch, while the prior TrustAI LinkedIn page remains active, creating overlapping product and brand records ([Launch YC governance page, Jul 2026](https://www.ycombinator.com/launches/RkQ-trustai-continuous-compliance-and-governance-for-ai-agents-on-sensitive-systems); [Launch YC inference page, Aug 2026](https://www.ycombinator.com/launches/T0B-trustai-the-fastest-cheapest-inference-powered-by-kv-cache-transfer)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $18.84B global AI-inference PaaS market in 2025, forecast to reach $105.22B by 2030 at 41.1% CAGR (MarketsandMarkets via Research and Markets, Oct 2025) |
| SAM | $1.517B U.S. AI-inference PaaS market in 2025, forecast at 39.9% CAGR through 2030 (MarketsandMarkets, Jun 2026) |
| Traction | No public data found |
| Revenue Signal | DeepSeek V4 Flash: $0.15 input, $0.03 cached input, and $0.35 output per million tokens; Qwen3.6 27B: $0.08 input and $0.722 output; no subscription (OneTriangle pricing, Aug 2026) |
| Founders | Hannah Chung (CEO): MIT CS/Economics, World Bank research, Virtu Financial quant; Medha Venkatapathy (CTO): MIT Physics/CS, CSAIL LLM optimization, MIT Lincoln Laboratory (YC/MIT, Aug 2026) |
| Competitors | Fireworks AI (> $1.8B funding, $1B annualized revenue, custom-model platform); Together AI ($800M Series C, revenue unknown, full-stack open-model cloud); Baseten ($1.5B Series F, revenue unknown, inference and post-training platform) (company announcements, Jun–Jul 2026) |
| Moat Signals | Learned 1,048,576-parameter cache correction, 82.52% top-token agreement, and 1.25× cold-context speed at 8K tokens (OneTriangle Research, Aug 18 2026) |
| Risk Factors | Transfer-fidelity and benchmark boundaries (OneTriangle Research, Aug 2026), vLLM open-source diffusion (Launch YC, Aug 2026), third-party infrastructure dependency (OneTriangle legal page, Aug 2026) |
| Founder Reach | Hannah: X 2K and LinkedIn 3K (TwStalker/LinkedIn, Aug 2026); Medha: LinkedIn 1K and GitHub top repo 0 stars (LinkedIn/GitHub, Aug 2026) |
| Distribution Signals | @OneTriangleAI 488 X followers (TwStalker, Aug 25 2026), 5 Launch YC votes (Launch YC, Aug 2026), prior TrustAI LinkedIn page 216 followers (LinkedIn, Jul 2026) |
| Emails | hannah@onetriangle.ai; hello@trytrust.ai, prior TrustAI product (OneTriangle legal page/Launch YC, Aug 2026) |
