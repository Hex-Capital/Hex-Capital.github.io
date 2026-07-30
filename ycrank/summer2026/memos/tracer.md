# Tracer

> Combining open-source AI models for better answers at lower cost

| Field | Value |
|-------|-------|
| Website | https://tracerml.ai |
| YC Page | https://www.ycombinator.com/companies/tracer |
| Batch | Summer 2026 |
| Industry | B2B / B2B |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Machine Learning, Open Source, AI |
| YC Partner | Diana Hu |
| Emails | adamrida.ra@gmail.com |

## The Idea

- **Problem:** AI teams running high-volume inference send heterogeneous requests through fixed models, incurring unnecessary token costs when simpler models or less computation could handle some requests ([Tracer website, Jul 2026](https://tracerml.ai/)).
- **Approach:** Echo adaptively coordinates open-weight models and assigns computation per request behind one OpenAI-compatible endpoint, while Tracer’s earlier open-source system trains a surrogate on production traces and defers uncertain inputs to the original LLM ([Tracer website, Jul 2026](https://tracerml.ai/); [GitHub, Jul 2026](https://github.com/adrida/tracer)).
- **Differentiation:** Not Diamond selects one model per query, Martian routes prompts among models, and OpenRouter provides unified model access, whereas Echo says it dynamically coordinates multiple open-weight models to produce one answer ([Not Diamond documentation, 2026](https://docs.notdiamond.ai/docs/what-is-model-routing); [TechCrunch, Nov 2023](https://techcrunch.com/2023/11/15/martians-tool-automatically-switches-between-llms-to-reduce-costs/); [Tracer website, Jul 2026](https://tracerml.ai/)).
- **Business Model:** Echo uses prepaid usage credits with Quick pricing of $3/$15, Focused pricing of $6/$30, and Deep pricing of $10/$50 per million input/output tokens, effective July 15, 2026 ([Echo API documentation, Jul 2026](https://echo.tracerml.ai/docs/api)).
- **TAM/SAM:** The broader AI-inference market was valued at $103.73 billion in 2025 and projected to reach $312.64 billion by 2034 at a 12.98% CAGR, while no public SAM estimate was found for adaptive multi-model coordination ([Fortune Business Insights, Jul 2026](https://www.fortunebusinessinsights.com/ai-inference-market-113705)).
- **GTM / Distribution:** Tracer distributes through an open-source Python repository, an OpenAI-compatible API, an unauthenticated five-message Echo trial, and direct inference-review calls for production AI teams ([GitHub, Jul 2026](https://github.com/adrida/tracer); [Echo, Jul 2026](https://echo.tracerml.ai/); [Tracer website, Jul 2026](https://tracerml.ai/)).

## Defensibility

- **Moat today:** Tracer has published an MIT-licensed implementation with 1,000 GitHub stars and a trace-based routing paper authored by Adam Rida ([GitHub, Jul 2026](https://github.com/adrida/tracer); [arXiv, Apr 2026](https://arxiv.org/abs/2604.14531)).
- **Future moat:** [Inferred]: Workload-specific routing and coordination policies could improve through accumulated traces and evaluation results, but no public customer-scale dataset or proprietary-data volume was found.
- **Market structure:** No structural barrier identified at this stage, because competing gateways and routers already expose similar model-selection or unified-endpoint functions ([Not Diamond documentation, 2026](https://docs.notdiamond.ai/docs/what-is-model-routing); [OpenRouter, May 2026](https://openrouter.ai/blog/series-b/)).
- **Commoditization risk:** Not Diamond, Martian, OpenRouter, Portkey, cloud providers, and AI application teams can implement routing or gateway layers, while Tracer publishes its earlier routing implementation under the MIT license ([GitHub, Jul 2026](https://github.com/adrida/tracer); [Portkey, Feb 2026](https://portkey.ai/blog/series-a-funding/)).

## Market & Traction

- **Traction signals:**
  - 1,000 GitHub stars and 68 forks for the open-source Tracer repository ([GitHub, Jul 2026](https://github.com/adrida/tracer)).
  - 125 LinkedIn company followers ([LinkedIn, Jul 2026](https://www.linkedin.com/company/tracerml)).
  - Echo offers five free messages without an account and was labeled a private alpha ([Echo, Jul 2026](https://echo.tracerml.ai/)).
  - No jobs were posted on YC’s platform ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/tracer/jobs)).
- **Competitors (minimum 3, up to 5):**
  - Not Diamond ($2.3 million raised, revenue unknown): provides pretrained and customer-trained routers that select a model for each query rather than coordinating multiple models into one answer ([Not Diamond, Jul 2024](https://www.notdiamond.ai/blog/launching-not-diamond)).
  - Martian ($9 million raised, revenue unknown): automatically routes each prompt to a selected LLM using its model-mapping technology ([TechCrunch, Nov 2023](https://techcrunch.com/2023/11/15/martians-tool-automatically-switches-between-llms-to-reduce-costs/)).
  - OpenRouter ($153 million in announced Seed–Series B financing, revenue unknown): supplies a model marketplace and unified inference interface with intelligent routing across providers ([OpenRouter, May 2026](https://openrouter.ai/blog/series-b/); [GlobeNewswire, Jun 2025](https://www.globenewswire.com/news-release/2025/06/25/3105125/0/en/openrouter-raises-40-million-to-scale-up-multi-model-inference-for-enterprise.html)).
  - Portkey ($15 million Series A disclosed, revenue unknown): combines gateway routing with observability, governance, fallbacks, and production controls ([Portkey, Feb 2026](https://portkey.ai/blog/series-a-funding/)).
- **Why now:** [Inferred]: The proliferation of differentiated open-weight models and rising agentic inference volume creates more opportunities to allocate each request across models instead of using one frontier model uniformly ([S&P Global, May 2026](https://www.spglobal.com/market-intelligence/en/news-insights/research/2026/05/ai-infrastructure-results-in-2025-top-expectations-forecast-upgraded); [Tracer website, Jul 2026](https://tracerml.ai/)).

## Founders & Team

- **Adam Rida (Founder):**
  - Background: Rida holds a master’s in applied mathematics from CY Tech, completed École 42, was an ML PhD candidate in the Sorbonne–AXA TRAIL lab, led AI at Autoplay AI, and worked at Société Générale, AXA, Qantev, and Rebellion Research ([founder profile, Jul 2026](https://adrida.github.io/)).
  - Twitter/X: @_adamr_1; count not retrievable ([TwStalker search result, Jul 2026](https://w.twstalker.com/MikaelSourati)).
  - LinkedIn: “Tracer (YC S26)” with 3,000 followers and 500+ connections ([LinkedIn, Jul 2026](https://www.linkedin.com/in/adam-rida-581296142)).
  - GitHub: @adrida; Tracer has 1,000 stars ([GitHub, Jul 2026](https://github.com/adrida/tracer)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Rida’s prior work covers explainable AI, model dynamics, production inference pipelines, and the published TRACER routing method underlying the company’s initial system ([founder profile, Jul 2026](https://adrida.github.io/); [arXiv, Apr 2026](https://arxiv.org/abs/2604.14531)).

## Key Risks

- **Product-transition risk:** Public materials span an earlier classification-call replacement system and the current Echo multi-model coordination product, creating a risk that prior benchmark results do not measure the current product ([GitHub, Jul 2026](https://github.com/adrida/tracer); [Tracer website, Jul 2026](https://tracerml.ai/)).
- **Coordination-quality risk:** Tracer states that capabilities emerging beyond the strongest component remain a hypothesis to test, so the central multi-model capability claim is not presented as established across workloads ([Tracer website, Jul 2026](https://tracerml.ai/)).
- **Competitive substitution:** Funded competitors offer routing, gateways, unified APIs, and prompt optimization, allowing customers to procure overlapping functions from Not Diamond, Martian, OpenRouter, or Portkey ([Not Diamond, Jul 2024](https://www.notdiamond.ai/blog/launching-not-diamond); [Portkey, Feb 2026](https://portkey.ai/blog/series-a-funding/)).
- **Sensitive-data handling:** Echo processes prompts through Tracer’s hosted endpoint, and its documentation instructs customers not to place secrets or personal data in prompts unless required ([Echo API documentation, Jul 2026](https://echo.tracerml.ai/docs/api)).
- **Search disambiguation:** Tracer shares a common name with unrelated companies, including YC-backed Traces and Trace, which can complicate company and product discovery ([Y Combinator—Traces](https://www.ycombinator.com/companies/traces); [Y Combinator—Trace](https://www.ycombinator.com/companies/trace-so)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $103.73B global AI-inference market in 2025, projected at 12.98% CAGR through 2034 (Fortune Business Insights, Jul 2026) |
| SAM | No public data found |
| Traction | 1,000 GitHub stars and 68 forks (GitHub, Jul 2026); 125 LinkedIn followers (LinkedIn, Jul 2026); five free Echo messages without an account (Echo, Jul 2026) |
| Revenue Signal | Quick $3/$15, Focused $6/$30, and Deep $10/$50 per million input/output tokens, funded through prepaid credits (Echo API documentation, Jul 2026) |
| Founders | Adam Rida (Founder): CY Tech applied-mathematics master’s, former Sorbonne–AXA ML PhD candidate, former Head of AI at Autoplay AI (founder profile, Jul 2026) |
| Competitors | Not Diamond ($2.3M raised, revenue unknown, per-query model router) (Not Diamond, Jul 2024); Martian ($9M raised, revenue unknown, automatic model router) (TechCrunch, Nov 2023); OpenRouter ($153M announced financing, revenue unknown, model marketplace and unified API) (OpenRouter, May 2026; GlobeNewswire, Jun 2025); Portkey ($15M Series A disclosed, revenue unknown, governed AI gateway) (Portkey, Feb 2026) |
| Moat Signals | MIT-licensed repository with 1,000 stars and 68 forks; trace-routing paper published on arXiv (GitHub, Jul 2026; arXiv, Apr 2026) |
| Risk Factors | Product transition from classification surrogates to Echo coordination (GitHub and Tracer website, Jul 2026), coordination hypothesis not established across workloads (Tracer website, Jul 2026), funded routing and gateway competitors (Not Diamond, OpenRouter, Portkey) |
| Founder Reach | Adam Rida: Twitter count not retrievable, LinkedIn 3K followers, GitHub Tracer repository 1,000 stars (LinkedIn and GitHub, Jul 2026) |
| Distribution Signals | 1,000 GitHub stars, 68 forks, 125 LinkedIn followers, five-message unauthenticated Echo trial, zero YC job postings (GitHub, LinkedIn, Echo, and Y Combinator, Jul 2026) |
| Emails | adamrida.ra@gmail.com (founder profile, Jul 2026) |
