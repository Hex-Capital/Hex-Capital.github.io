# Understudy Labs

> Effortlessly move to open weight models

| Field | Value |
|-------|-------|
| Website | https://understudylabs.com/ |
| YC Page | https://www.ycombinator.com/companies/understudy-labs |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Open Source, AI, ML |
| YC Partner | Tyler Bosmeny |
| Emails | support@understudylabs.com |

## The Idea

- **Problem:** Teams repeatedly using frontier-model APIs face cost or latency pressure but lack a measured process for determining when cheaper open-weight models can replace them without reducing task-specific quality ([Understudy website, Jul 2026](https://understudylabs.com/)).
- **Approach:** Understudy captures production traces, converts them into evals, optimizes prompts or model weights, tests alternatives against held-out benchmarks, and gradually routes traffic only after the quality bar is met ([Understudy agent tools, Jul 2026](https://github.com/understudylabs/understudy-agent-tools)).
- **Differentiation:** [Inferred]: Unlike Braintrust’s trace-and-evaluation focus and the hosted training/inference platforms of Fireworks, Baseten, and Together AI, Understudy combines local-first evidence capture, eval construction, optimization, routing, and portable customer-owned weights ([Understudy agent tools, Jul 2026](https://github.com/understudylabs/understudy-agent-tools), [Braintrust, Feb 2026](https://www.braintrust.dev/blog/announcing-series-b), [Baseten, Jun 2026](https://www.baseten.co/blog/announcing-our-series-f/)).
- **Business Model:** No list pricing is public; paid-service prices, usage limits, and billing terms are set through an order form, invoice, checkout page, or written agreement, while customers pay their upstream model providers separately ([Understudy service terms, May 2026](https://understudylabs.com/terms)).
- **TAM/SAM:** The global MLOps market was estimated at $2.98 billion in 2025 and projected to reach $89.91 billion by 2034 at a 45.8% CAGR, while no public SAM estimate was found for task-specific open-model replacement ([Fortune Business Insights, Jul 2026](https://www.fortunebusinessinsights.com/mlops-market-108986)).
- **GTM / Distribution:** Understudy is recruiting production-LLM teams through a private preview, design-partner engagements, demos, and an MIT-licensed toolkit distributed through coding-agent plugins ([Understudy website, Jul 2026](https://understudylabs.com/), [GitHub, Jul 2026](https://github.com/understudylabs/understudy-agent-tools)).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Customer-specific traces, evals, failure maps, routing rules, and tuned weights could create workflow-level switching costs, although customers own these artifacts and Understudy prohibits cross-customer payload training, limiting a shared-data moat ([Understudy service terms, May 2026](https://understudylabs.com/terms)).
- **Market structure:** No structural barrier is identified because Baseten, Fireworks, and Together AI already combine post-training with production inference and can extend into trace-driven optimization ([Baseten, Jun 2026](https://www.baseten.co/blog/announcing-our-series-f/), [Fireworks, Jul 2026](https://fireworks.ai/blog/series-d-announcement), [Together AI, Jul 2026](https://www.together.ai/blog/announcing-our-series-c)).
- **Commoditization risk:** Cloud inference vendors, evaluation platforms, and internal ML teams can assemble overlapping capture, evaluation, fine-tuning, and routing workflows from public models and optimization libraries ([Together AI, Jul 2026](https://www.together.ai/blog/announcing-our-series-c), [Understudy benchmark, Jul 2026](https://understudylabs.com/bench)).

## Market & Traction

- **Traction signals:**
  - Private preview with a small group of design partners ([Understudy website, Jul 2026](https://understudylabs.com/)).
  - 9 GitHub stars and 5 forks for the public agent-tools repository ([GitHub, Jul 2026](https://github.com/understudylabs/understudy-agent-tools)).
  - Accepted into Y Combinator Summer 2026 ([YC, Jul 2026](https://www.ycombinator.com/companies/understudy-labs)).
  - 0 active YC job postings ([YC, Jul 2026](https://www.ycombinator.com/companies/understudy-labs)).
- **Competitors (minimum 3, up to 5):**
  - Fireworks AI (more than $1.8 billion raised, more than $1 billion annualized revenue): specializes and serves customer models on its inference platform, while Understudy emphasizes local capture and portable routes ([Fireworks, Jul 2026](https://fireworks.ai/blog/series-d-announcement), [Sacra, Jul 2026](https://sacra.com/c/fireworks-ai/)).
  - Baseten ($2.085 billion raised, revenue unknown): provides post-training, embedded engineers, and managed inference across cloud, self-hosted, and hybrid deployments ([CB Insights, Jul 2026](https://www.cbinsights.com/company/baseten/financials), [Baseten, Jun 2026](https://www.baseten.co/blog/announcing-our-series-f/)).
  - Together AI ($1.33 billion raised, revenue unknown): supplies open-model training, evaluation, GPU compute, and production inference rather than an agent-embedded local optimization workflow ([Together AI, Jul 2026](https://www.together.ai/blog/announcing-our-series-c), [funding history, Jul 2026](https://toflow.ai/spotlight/together-ai)).
  - Braintrust ($124.3 million raised, revenue unknown): concentrates on tracing, evaluation, and production observability rather than training and deploying customer-owned model weights ([CB Insights, Jul 2026](https://www.cbinsights.com/company/braintrust-data/financials), [Braintrust, Feb 2026](https://www.braintrust.dev/blog/announcing-series-b)).
- **Why now:** [Inferred]: The 2025–2026 arrival of DeepSeek, Qwen, and GPT-OSS models alongside reinforcement-learning and post-training workflows reduced the capability and customization barriers to replacing closed APIs for bounded workloads ([Baseten, Feb 2026](https://www.baseten.co/blog/announcing-baseten-s-300m-series-e/)).

## Founders & Team

- **Luis Manrique (Co-founder & CEO):**
  - Background: Studied finance at Santa Clara University and worked at Google, VideoAmp, Instacart, and Gumloop, where he reports closing $1.9 million in ARR and leading GTM, FDE, and data-platform work ([Understudy team, Jul 2026](https://understudylabs.com/team), [LinkedIn, Jul 2026](https://www.linkedin.com/in/luismanrique)).
  - Twitter/X: @lluismanrique with 497 followers ([TwStalker, Jul 2026](https://w.twstalker.com/lluismanrique)).
  - LinkedIn: “Understudy Labs (YC S26),” with 5K followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/luismanrique)).
  - GitHub: @lluisinthedesert; `moraine` has 0 stars ([GitHub, Jul 2026](https://github.com/lluisinthedesert/moraine)).
- **Aamir Poonawalla (Co-founder & CTO):**
  - Background: Holds an MS in computer science from Georgia Tech and spent ten years at Instacart building ads-serving, auction, experimentation, and logistics infrastructure after roles at Microsoft and URX ([Understudy team, Jul 2026](https://understudylabs.com/team)).
  - Twitter/X: No public account found.
  - LinkedIn: “Understudy Labs,” with 1K followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/aamir-p-a3575318)).
  - GitHub: @aamir; `eathquake` has 0 stars and 2 forks ([GitHub, Jul 2026](https://github.com/aamir/eathquake)).
- **Co-founder relationship:** Manrique described Poonawalla as his longtime partner, and both previously worked at Instacart and co-invented an advertising-campaign pacing patent ([LinkedIn, May 2026](https://www.linkedin.com/pulse/goodbye-gumloop-luis-manrique-4bl4c), [Understudy team, Jul 2026](https://understudylabs.com/team)).
- **Founder-market fit:** [Inferred]: Manrique’s ML-product and enterprise-GTM work and Poonawalla’s ML-infrastructure and experimentation work map to Understudy’s sales, evaluation, and routing functions, while disclosed backers include Instacart co-founder Max Mullen and Gumloop co-founder Max Brodeur-Urbas ([Understudy team, Jul 2026](https://understudylabs.com/team)).

## Key Risks

- **Platform competition:** Fireworks, Baseten, and Together AI offer overlapping post-training and inference products and have collectively disclosed billions of dollars in funding, giving them resources to add trace-driven replacement workflows ([Fireworks, Jul 2026](https://fireworks.ai/blog/series-d-announcement), [Baseten, Jun 2026](https://www.baseten.co/blog/announcing-our-series-f/), [Together AI, Jul 2026](https://www.together.ai/blog/announcing-our-series-c)).
- **Workload boundary:** Understudy targets repeated, bounded work with measurable outcomes and advises retaining frontier models where premium capability changes the result, constraining applicability to workloads with usable eval criteria ([Understudy website, Jul 2026](https://understudylabs.com/)).
- **Benchmark generalization:** Published comparisons use task-specific slices with ten-run samples and report that generic adapters did not transfer cleanly; Understudy mitigates this through held-out tests, variance reporting, and task-local optimization ([Understudy benchmark, Jul 2026](https://understudylabs.com/bench)).
- **Early-access reliability:** The service has no SLA and does not guarantee uninterrupted operation, provider compatibility, output accuracy, or model quality; local tools and customer-selected serving providers reduce dependence on the hosted service ([Understudy service terms, May 2026](https://understudylabs.com/terms)).
- **Name collision:** An unrelated open-source desktop-agent project also uses the name “Understudy,” creating potential search and developer-discovery confusion ([unrelated Understudy repository, Mar 2026](https://github.com/understudy-ai/understudy)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.98B global MLOps market in 2025, projected to $89.91B by 2034 at 45.8% CAGR (Fortune Business Insights, Jul 2026) |
| SAM | No public data found |
| Traction | Private preview with a small group of design partners (Understudy website, Jul 2026); YC Summer 2026 company (YC, Jul 2026); 9 GitHub stars and 5 forks (GitHub, Jul 2026) |
| Revenue Signal | No public data found |
| Founders | Luis Manrique (CEO): Google, VideoAmp, Instacart, Gumloop and ten AI/ML patents; Aamir Poonawalla (CTO): Georgia Tech MS, ten years at Instacart, prior YC founder (Understudy team, Jul 2026) |
| Competitors | Fireworks AI (more than $1.8B raised, more than $1B annualized revenue, managed specialization/inference); Baseten ($2.085B raised, revenue unknown, post-training and inference); Together AI ($1.33B raised, revenue unknown, open-model cloud); Braintrust ($124.3M raised, revenue unknown, observability/evals) (company announcements and CB Insights, Jul 2026) |
| Moat Signals | No public data found |
| Risk Factors | Platform competition, workload-bound applicability, benchmark transferability, early-access reliability, name collision (Understudy and competitor sources, Jul 2026) |
| Founder Reach | Luis Manrique: Twitter 497, LinkedIn 5K, GitHub 0 stars; Aamir Poonawalla: no public Twitter account found, LinkedIn 1K, GitHub 0 stars (TwStalker, LinkedIn, GitHub, Jul 2026) |
| Distribution Signals | 9 GitHub stars and 5 forks; 0 YC job postings; private-preview demo and design-partner intake (GitHub, YC, Understudy website, Jul 2026) |
| Emails | support@understudylabs.com (Understudy service terms, May 2026) |
