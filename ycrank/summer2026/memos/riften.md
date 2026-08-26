# Riften

> Earned Intelligence for every company. 

| Field | Value |
|-------|-------|
| Website | https://riften.ai |
| YC Page | https://www.ycombinator.com/companies/riften |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 0 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Developer Tools, Reinforcement Learning, Open Source, Infrastructure |
| YC Partner | Not listed |
| Emails | No public data found |

## The Idea

- **Problem:** Companies using OpenAI or Anthropic directly may pay frontier-model prices for requests that cheaper models can handle and do not acquire models trained around their own recurring work ([YC company profile](https://www.ycombinator.com/companies/riften), Aug 2026).
- **Approach:** Riften replaces an application's model endpoint through one environment variable, routes each request to the least-expensive model expected to satisfy it, and uses production outcomes to train private open-weight models ([YC company profile](https://www.ycombinator.com/companies/riften), Aug 2026).
- **Differentiation:** Unlike direct OpenAI or Anthropic integrations and routing products such as Martian and Not Diamond, Riften says it combines routing with customer-controlled training evidence and private models that can earn production traffic ([YC company profile](https://www.ycombinator.com/companies/riften), Aug 2026; [Martian](https://techcrunch.com/2023/11/15/martians-tool-automatically-switches-between-llms-to-reduce-costs/), Nov 2023; [Not Diamond](https://www.notdiamond.ai/blog/launching-not-diamond), Jul 2024).
- **Business Model:** [Inferred]: Riften could charge for routed inference, hosted open-weight models, and private-model training or deployment because it processes each request and operates model infrastructure, but no public pricing was found.
- **TAM/SAM:** The broader AI-inference market was estimated at $106.15 billion in 2025 and projected to reach $254.98 billion by 2030 at a 19.2% CAGR ([MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/ai-inference-market-189921964.html), 2025), while no public SAM estimate was found for model-routing and company-specific-model infrastructure.
- **GTM / Distribution:** [Inferred]: OpenAI-compatible environment-variable migration supports developer-led trials, followed by direct enterprise sales where private deployment, evaluation, and data-control requirements require implementation work.

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Application-specific request, outcome, and escalation data could improve routing and private-model training over time, but no customer volume, benchmark, or retention data currently demonstrates this effect.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Not Diamond offers custom routers trained from customer evaluation data and regularly open-sources its base router, while the open-source LLMRouter framework includes more than 16 routing methods ([Not Diamond pricing](https://www.notdiamond.ai/pricing), 2026; [LLMRouter](https://arxiv.org/abs/2608.06867), Aug 2026).

## Market & Traction

- **Traction signals:**
  - No public data found; website not accessible at time of research ([Riften](https://riften.ai), Aug 2026).
- **Competitors (minimum 3, up to 5):**
  - Not Diamond ($2.3M raised, revenue unknown): learns custom input-to-model rankings from customer evaluation data but does not publicly describe training customer-owned replacement models ([Not Diamond](https://www.notdiamond.ai/blog/launching-not-diamond), Jul 2024).
  - Martian ($9M raised, revenue unknown): routes prompts using predicted model performance, uptime, and cost-to-performance rather than Riften's stated routing-to-private-model progression ([TechCrunch](https://techcrunch.com/2023/11/15/martians-tool-automatically-switches-between-llms-to-reduce-costs/), Nov 2023).
  - Unify ($8M raised, revenue unknown): jointly optimizes model selection for quality, cost, and speed and offered customer-specific benchmarking, while Riften additionally describes private-model training from production evidence ([TechCrunch](https://techcrunch.com/2024/05/22/unify-helps-developers-find-the-best-llm-for-the-job/), May 2024).
  - OpenRouter ($153M raised, revenue unknown): supplies a multi-provider model gateway and automatic router across a larger model marketplace, while Riften describes customer-controlled evidence and privately trained open-weight models ([OpenRouter Series A](https://www.globenewswire.com/news-release/2025/6/25/3105125/0/en/OpenRouter-raises-40-million-to-scale-up-multi-model-inference-for-enterprise.html), Jun 2025; [OpenRouter Series B](https://openrouter.ai/blog/announcements/series-b/), May 2026).
- **Why now:** [Inferred]: DeepSeek-R1's January 2025 MIT-licensed release demonstrated that commercially reusable open-weight models could approach OpenAI-o1 performance on several reasoning benchmarks, expanding the model pool available for lower-cost routing and private adaptation ([DeepSeek](https://api-docs.deepseek.com/news/news250120/), Jan 2025).

## Founders & Team

- **Founder name and role: No public data found**
  - Background: No public data found.
  - Twitter/X: No public account found.
  - LinkedIn: No public profile found.
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** No public data found.

## Key Risks

- **Routing accuracy:** Several recent routing methods, including commercial systems, failed to reliably outperform a simple baseline under unified evaluation, while Riften has not published routing benchmarks or quality thresholds ([LLMRouterBench](https://arxiv.org/abs/2601.07206), Jan 2026).
- **Adversarial cost escalation:** Researchers demonstrated that adversarial suffixes can manipulate LLM routers toward expensive models, which could undermine Riften's inference-cost objective without router-specific abuse controls ([Route to Rome](https://arxiv.org/abs/2604.15022), Apr 2026).
- **Sensitive-data processing:** Riften's stated architecture places it in the application request path and uses task outcomes as training evidence, while gateway data-processing agreements do not necessarily extend to every upstream provider ([YC company profile](https://www.ycombinator.com/companies/riften), Aug 2026; [Gate.AI](https://gate.ai/blog/enterprise-ai-data-privacy-gate-ai-zdr-access-control), Jun 2026).
- **Replicable routing layer:** Custom routing, fallback, and cost optimization are available from funded competitors and open-source frameworks, leaving Riften's private-model progression as an unbenchmarked differentiator ([Not Diamond](https://www.notdiamond.ai/pricing), 2026; [LLMRouter](https://arxiv.org/abs/2608.06867), Aug 2026).
- **Name disambiguation:** Search results for “Riften” also identify an unrelated Norwegian blockchain developer named Riften Labs and an unrelated AI-content service at riftenai.com, creating discoverability and identity-confusion risk ([Riften Labs](https://www.riftenlabs.com/about), 2026; [Riften AI](https://riftenai.com/), 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $106.15B AI-inference market in 2025, projected to reach $254.98B by 2030 at a 19.2% CAGR (MarketsandMarkets, 2025) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | No public data found |
| Competitors | Not Diamond ($2.3M raised, revenue unknown, custom evaluation-trained routing) ([Not Diamond](https://www.notdiamond.ai/blog/launching-not-diamond), Jul 2024); Martian ($9M raised, revenue unknown, performance-and-cost routing) ([TechCrunch](https://techcrunch.com/2023/11/15/martians-tool-automatically-switches-between-llms-to-reduce-costs/), Nov 2023); Unify ($8M raised, revenue unknown, quality-cost-speed routing) ([TechCrunch](https://techcrunch.com/2024/05/22/unify-helps-developers-find-the-best-llm-for-the-job/), May 2024); OpenRouter ($153M raised, revenue unknown, multi-provider model marketplace and router) ([OpenRouter](https://openrouter.ai/blog/announcements/series-b/), May 2026) |
| Moat Signals | No public data found |
| Risk Factors | Router accuracy ([LLMRouterBench](https://arxiv.org/abs/2601.07206), Jan 2026), adversarial cost steering ([Route to Rome](https://arxiv.org/abs/2604.15022), Apr 2026), sensitive-data processing across routing providers ([Gate.AI](https://gate.ai/blog/enterprise-ai-data-privacy-gate-ai-zdr-access-control), Jun 2026) |
| Founder Reach | No public data found |
| Distribution Signals | No public data found |
| Emails | No public data found |
