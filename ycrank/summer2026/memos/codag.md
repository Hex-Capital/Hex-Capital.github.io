# Codag

> Log compression for agents.

| Field | Value |
|-------|-------|
| Website | https://codag.ai/ |
| YC Page | https://www.ycombinator.com/companies/codag |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools |
| YC Partner | Harshita Arora |
| Emails | michael@codag.ai ([GitHub](https://github.com/codag-megalith/codag-visualizer), Aug 2026) |

## The Idea

- **Problem:** AI coding agents debugging production systems can exhaust their token budgets or context windows while reading repetitive infrastructure logs, leaving developers to use raw-log searches and grep ([Codag launch post](https://codag.ai/blog/hello-from-codag), May 2026).
- **Approach:** Codag groups similar lines, ranks patterns by severity, rarity, and query relevance, preserves nearby context and source line numbers, and returns compact text through a CLI, API, or MCP server ([Codag Pro](https://codag.ai/pro), Aug 2026).
- **Differentiation:** Against raw logs plus grep and Drain3, Codag adds ranked patterns, retained context, and line-level evidence; its hosted benchmark reported 98–99% of incidents answered with 5.9–7.5× fewer agent tokens than raw logs plus grep ([Codag benchmarks](https://codag.ai/benchmarks), Aug 2026).
- **Business Model:** Compute-priced plans comprise Free at $0 with 20 MB of inference monthly, Pro at $19 monthly with 5 GB, Team/Startup at $499 monthly plus $0.50 per additional GB, and custom Enterprise pricing ([Codag pricing](https://codag.ai/pricing), Aug 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Distribution combines a no-account install command, MIT-licensed CLI and compression repositories, self-serve Free/Pro plans, and demo-led Team/Enterprise sales ([Codag launch post](https://codag.ai/blog/hello-from-codag), May 2026; [pricing](https://codag.ai/pricing), Aug 2026).

## Defensibility

- **Moat today:** The technical signal is a custom Drain-based deterministic engine plus hosted inference compaction, supported by a paired evaluation covering 51 synthetic incidents, two agent backends, and three log-window sizes ([Codag benchmarks](https://codag.ai/benchmarks), Aug 2026).
- **Future moat:** [Inferred]: PII-scrubbed submitted logs could improve Codag’s templater and classifier over time, but Codag reports no retained-data volume or model-performance trend ([Codag support](https://codag.ai/support), Aug 2026).
- **Market structure:** No structural barrier identified at this stage because the deterministic engine and CLI are MIT-licensed, while adjacent observability vendors already operate AI debugging and agent-observability products ([Codag open source](https://codag.ai/open-source), Aug 2026; [Dash0](https://www.dash0.com/blog/dash0-raises-usd110m-series-b), Mar 2026).
- **Commoditization risk:** Observability vendors and open-source log-tool developers can reproduce deterministic grouping because Codag’s base implementation adapts the published Drain3 method and is publicly available under MIT terms ([codag-drain GitHub](https://github.com/codag-megalith/codag-drain), Aug 2026).

## Market & Traction

- **Traction signals:**
  - Current-product `codag-drain` repository: 45 GitHub stars and 8 forks ([GitHub](https://github.com/codag-megalith/codag-drain), Aug 2026).
  - Current-product `codag-cli` repository: 20 GitHub stars and 7 forks ([GitHub](https://github.com/codag-megalith/codag-cli), Aug 2026).
  - Hosted evaluation: 98–99% of incidents answered and 5.9–7.5× fewer agent tokens than raw logs plus grep across 102 paired runs per window ([Codag benchmarks](https://codag.ai/benchmarks), Aug 2026).
  - Current log-compression product launched May 23, 2026 with a live free tier ([Codag launch post](https://codag.ai/blog/hello-from-codag), May 2026).
  - Prior product—an LLM-workflow visualizer—recorded 19 Product Hunt votes in February 2026 and its repository later reached 655 GitHub stars; these are not current-product metrics ([Launch Index](https://thelaunchindex.com/launches/2026/02/), Feb 2026; [GitHub profile](https://github.com/michaelzixizhou), Aug 2026).
  - Active YC job postings: 0 ([YC](https://www.ycombinator.com/companies/codag), Aug 2026).
- **Competitors (minimum 3, up to 5):**
  - Dash0 ($155M raised, revenue unknown): provides OpenTelemetry-based full-stack observability and autonomous operational agents, versus Codag’s log-compaction layer for external agents; its latest round was a $110M Series B led by Balderton Capital in March 2026 ([Dash0](https://www.dash0.com/blog/dash0-raises-usd110m-series-b), Mar 2026).
  - Honeycomb (nearly $150M raised, revenue unknown): correlates logs, metrics, and traces and offers an Agent Timeline, versus Codag’s compact log text; its latest disclosed round was a $50M Series D led by Headline in April 2023 ([Honeycomb funding](https://www.honeycomb.io/blog/honeycomb-series-d-funding-press-release), Apr 2023; [Agent Timeline](https://www.honeycomb.io/blog/agent-timeline-flight-recorder-for-your-ai-agents), May 2026).
  - Sentry ($217M raised, revenue unknown): supplies code-level error and performance observability plus the Seer debugging agent, versus Codag’s agent-readable preprocessing of infrastructure logs; its latest disclosed round was a $90M Series E co-led by BOND and Accel in May 2022 ([Business Wire](https://www.businesswire.com/news/home/20220504005222/en/Sentry-Raises-%2490-Million-in-Series-E-Funding-to-Expand-and-Drive-Adoption-of-Developer-first-Application-Monitoring), May 2022).
  - Cribl (over $600M secured, over $100M ARR): collects, processes, routes, and stores IT and security data, whereas Codag compresses selected logs before an LLM reads them; Cribl’s latest disclosed round was a $319M Series E led by GV in August 2024 ([Cribl announcement](https://www.globenewswire.com/news-release/2024/08/27/2936170/0/en/Cribl-Closes-319-Million-Series-E-at-3-5-Billion-Valuation-to-Revolutionize-the-Enterprise-Data-Market.html), Aug 2024).
- **Why now:** Codag’s stated catalyst is the shift of production debugging toward coding agents, which turns high-volume logs into model-context and token-cost inputs rather than solely human-readable observability data ([Codag launch post](https://codag.ai/blog/hello-from-codag), May 2026).

## Founders & Team

- **Michael Zhou (Founder):**
  - Background: BSc in Computer Science and Neuroscience from the University of Toronto, with prior infrastructure work at Okta and Shopify ([YC](https://www.ycombinator.com/companies/codag), Aug 2026).
  - Twitter/X: @michaelzixizhou; count not retrievable ([Codag support](https://codag.ai/support), Aug 2026).
  - LinkedIn: “Codag,” with 3,259 followers and 500+ connections ([LinkedIn](https://www.linkedin.com/in/mzxzhou), Jul 2026).
  - GitHub: @michaelzixizhou; top repository `codag-visualizer` with 655 stars ([GitHub profile](https://github.com/michaelzixizhou), Aug 2026).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** [Inferred]: Zhou’s Okta and Shopify infrastructure work, computer-science education, and authorship of a 655-star developer-tool repository align with building log-processing software for developers ([YC](https://www.ycombinator.com/companies/codag), Aug 2026; [GitHub](https://github.com/michaelzixizhou), Aug 2026).

## Key Risks

- **Benchmark generalization:** The hosted evaluation used 51 synthetic incidents injected into LogHub2 windows and was run internally, so its results may not transfer to heterogeneous customer incidents; Codag publishes evaluation artifacts and a reproducible deterministic benchmark as mitigation ([Codag benchmarks](https://codag.ai/benchmarks), Aug 2026).
- **Sensitive-log handling:** Hosted compaction processes raw operational logs and may retain de-identified, PII-scrubbed copies for model training; Codag states it processes payloads transiently, excludes third-party LLM providers, and offers VPC peering on Enterprise plans ([Codag support](https://codag.ai/support), Aug 2026; [pricing](https://codag.ai/pricing), Aug 2026).
- **Competitive bundling:** Dash0, Honeycomb, Sentry, and Cribl already combine telemetry ingestion with diagnosis or agent workflows, allowing customers to obtain overlapping functions from existing observability platforms ([Dash0](https://www.dash0.com/blog/dash0-raises-usd110m-series-b), Mar 2026; [Honeycomb](https://www.honeycomb.io/blog/agent-timeline-flight-recorder-for-your-ai-agents), May 2026).
- **Pivoted traction:** Codag’s February 2026 workflow-visualizer metrics predate its May 2026 log-compression launch, while the founder reported five pivots, so the prior product’s 655 GitHub stars and 19 Product Hunt votes do not establish current-product adoption ([LinkedIn](https://www.linkedin.com/posts/mzxzhou_i-got-into-y-combinator-s26-the-past-6-activity-7464365183025717248-QEeY), Jul 2026; [Codag launch post](https://codag.ai/blog/hello-from-codag), May 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Current product: 45 `codag-drain` stars and 20 `codag-cli` stars (GitHub, Aug 2026); prior visualizer: 655 stars and 19 Product Hunt votes (GitHub/Launch Index, Aug/Feb 2026); 98–99% benchmark incident-answer rate (Codag, Aug 2026) |
| Revenue Signal | $0 Free, $19/month Pro, $499/month plus usage Team/Startup, and custom Enterprise plans (Codag pricing, Aug 2026) |
| Founders | Michael Zhou (Founder): former Okta and Shopify infrastructure engineer; University of Toronto BSc in Computer Science and Neuroscience (YC, Aug 2026) |
| Competitors | Dash0 ($155M raised, revenue unknown, full-stack agentic observability); Honeycomb (nearly $150M raised, revenue unknown, correlated telemetry); Sentry ($217M raised, revenue unknown, code-level monitoring); Cribl (over $600M secured, over $100M ARR, telemetry routing) (company funding announcements, 2022–2026) |
| Moat Signals | Custom Drain adaptation, hosted inference compaction, and paired 102-run-per-window evaluation; deterministic engine and CLI are MIT-licensed (Codag/GitHub, Aug 2026) |
| Risk Factors | Synthetic-incident benchmark scope (Codag, Aug 2026), hosted sensitive-log processing (Codag support, Aug 2026), funded observability-platform competition (Dash0/Honeycomb/Sentry/Cribl, 2022–2026) |
| Founder Reach | Michael Zhou: X @michaelzixizhou count not retrievable (Codag support, Aug 2026), LinkedIn 3,259 followers (LinkedIn, Jul 2026), GitHub top repo 655 stars (GitHub, Aug 2026) |
| Distribution Signals | No-account CLI install and free tier (Codag, May 2026); current repositories with 45 and 20 stars (GitHub, Aug 2026); prior-product Product Hunt launch with 19 votes (Launch Index, Feb 2026) |
| Emails | michael@codag.ai (GitHub, Aug 2026) |
