# Benchspan

> Run agent benchmarks in minutes, not hours

| Field | Value |
|-------|-------|
| Website | https://www.benchspan.com |
| YC Page | https://www.ycombinator.com/companies/benchspan |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Analytics, Infrastructure, AI |
| YC Partner | David Lieb |
| Emails | founders@benchspan.com |

**Pivot note:** The same two-person founding team (Avi Arora and Ritesh Malpani) previously operated as **Oddpool**, described on its YC listing as an "Institutional data layer for prediction markets" (YC company page, via search snippet). The YC URL for Oddpool (`ycombinator.com/companies/oddpool`) now resolves to the Benchspan profile (verified via WebFetch, Mar 2026). Avi Arora's GitHub bio still reads "Co-founder @Oddpool" (GitHub, Mar 2026). Prior-product metrics (PredictionMarketBench repo, Awesome-Prediction-Market-Tools repo) are separated below and should not be conflated with Benchspan traction.

## The Idea

**Problem:** Teams building AI agents need to measure whether their agents are improving. Running benchmarks today requires writing custom glue code for each benchmark, executing runs serially on local machines (a single SWE-bench Verified run can take 14+ hours), and restarting from scratch when runs partially fail — burning hundreds of dollars in LLM tokens with no results (Benchspan website). The customer segment is AI engineering teams shipping agents (e.g., coding agents, tool-use agents). Current alternatives are ad-hoc scripts, local execution, or spreadsheets shared via Slack.

**Approach:** Benchspan provides a cloud benchmarking platform where teams onboard their agent once (via bash script; framework-agnostic) and then run any supported benchmark with a single command. Runs execute in parallel across isolated Docker containers. Results are stored centrally with full trajectories, token usage, latency, and custom metrics. Partial failures can be re-run at the subset level rather than from scratch. The company states it onboarded Claude Code in 37 lines of code (Benchspan website). Supported benchmarks include SWE-bench Verified, SWE-bench Lite, Terminal-Bench, HumanEval, MBPP, MATH, and GPQA, plus custom evaluations (Benchspan website).

**Differentiation:** Compared to LangSmith (LangChain), which focuses on observability and tracing across the full LLM app lifecycle, Benchspan is narrowly focused on agent benchmark execution and comparison. Compared to Braintrust and Galileo, which emphasize eval datasets and LLM output scoring, Benchspan targets the infrastructure layer — parallel cloud execution, environment reproducibility, and partial re-run — rather than eval design or prompt iteration. Vals.ai focuses on domain-specific LLM benchmarks (legal, tax, finance) rather than agent execution benchmarks. [Inferred]: The closest analog is the CI/CD testing layer specifically for agent benchmarks, rather than the broader observability/eval category.

**Business Model:** No pricing page or tiers are publicly visible on the Benchspan website (verified Mar 2026). [Inferred]: Most likely monetization is consumption-based (per benchmark run or per compute-hour), given the cloud execution infrastructure and the company's emphasis on token cost savings.

**TAM/SAM:** The broader agentic AI market was valued at USD 7.29 billion in 2025 and is projected to reach USD 139.19 billion by 2034 at a CAGR of 40.50% (Fortune Business Insights, 2025 via search snippet). A separate estimate sizes it at USD 7.55 billion in 2025 growing to USD 199.05 billion by 2034 at 43.84% CAGR (Precedence Research, 2025 via search snippet). No public TAM/SAM data found for the agent benchmarking/evaluation sub-segment specifically.

**GTM / Distribution:** [Inferred]: Most likely distribution path is developer-led bottom-up adoption — an individual AI engineer on a team runs a benchmark via CLI, shares results with teammates via the centralized dashboard, and the team upgrades. The "single command" and "37 lines of code" messaging targets developer onboarding friction.

## Defensibility

- **Benchmark catalog breadth:** Supporting multiple benchmarks (8+ listed) with a single agent onboarding reduces repeated integration work for users, creating switching costs proportional to the number of benchmarks used (Benchspan website).
- **Result history as lock-in:** Centralized storage of historical run results, trajectories, and comparison data accumulates value over time. [Inferred]: Teams that build months of benchmark history would face data migration friction when switching.
- No patents, open-source repos, or network effects identified in public sources.

**Market structure:** [Inferred]: Large cloud providers (AWS, GCP, Azure) could build benchmark execution infrastructure but would face channel conflict — they profit from compute consumption regardless of benchmark efficiency, while Benchspan's value proposition includes reducing wasted token spend. LLM providers (OpenAI, Anthropic) maintain their own internal benchmarking but have limited incentive to build a vendor-neutral, multi-agent benchmarking platform.

**Commoditization risk:** The Docker-based parallel execution infrastructure is not technically unique. Open-source benchmark harnesses (e.g., SWE-bench's own scaffold, Inspect by UK AISI) exist. [Inferred]: A well-resourced competitor could replicate the execution layer; the defensibility would need to come from breadth of benchmark support, UX polish, and accumulated team data.

## Market & Traction

**Traction signals:**
- No revenue, user counts, or growth metrics found in public sources.
- No Product Hunt launch found (searched Mar 2026).
- No company Twitter/X account found; no LinkedIn company page found in search results (the YC page references a LinkedIn page for "benchspan").
- No press coverage in named publications found.
- No Discord or Slack community found.
- No job postings (0 open positions per YC page, Mar 2026).
- Demo booking available via cal.com/team/benchspan (Benchspan website).

**Prior product (Oddpool) signals:** Oddpool.com remains live with a prediction market dashboard, arbitrage scanner, and whale tracker (Oddpool website via search snippet). The associated GitHub repo Awesome-Prediction-Market-Tools has 122 stars (GitHub, Mar 2026). PredictionMarketBench has 10 stars (GitHub, Mar 2026). A research paper "PredictionMarketBench: A SWE-bench-Style Framework for Backtesting Trading Agents on Prediction Markets" is published on ResearchGate (ResearchGate via search snippet). These metrics relate to the prior product and not to Benchspan.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key differentiator vs. Benchspan |
|---|---|---|---|
| **Braintrust** | $121M total, $80M Series B (Feb 2026) | Revenue unknown | Broad LLM observability and eval platform; focuses on prompt iteration and logging rather than benchmark execution infrastructure (Tracxn via search snippet) |
| **Galileo AI** | $68.1M total, $45M Series B (Oct 2024) | 834% revenue growth since early 2024 (PR Newswire, Oct 2024 via search snippet) | Evaluation intelligence with proprietary fine-tuned eval models (Luna-2); broader LLM quality scoring vs. agent benchmark execution |
| **LangSmith (LangChain)** | $260M total, $125M Series B | $16M revenue, 1K customers (Latka, 2025 via search snippet) | Full-lifecycle agent engineering platform tightly integrated with LangChain framework; observability-first rather than benchmark-first |
| **Patronus AI** | $40.1M total, $17M Series A (May 2024) | Revenue unknown | Focuses on LLM reliability and hallucination detection; enterprise compliance use cases rather than developer benchmarking workflow (PR Newswire, May 2024) |
| **Vals.ai** | $5M seed (Jul 2024) | $1.3M revenue (Latka, 2025 via search snippet) | Domain-specific benchmarks (legal, tax, finance) with expert review; narrow vertical focus vs. Benchspan's horizontal agent approach |

**Why now:** [Inferred]: The catalyst is the rapid proliferation of AI coding agents (Claude Code, Cursor, Devin, Codex) through 2024-2025, which created a new class of "agent builder" teams who need to benchmark complex multi-step agent behavior — not just LLM output quality. SWE-bench emerged as the de facto standard in 2023-2024 (Princeton), and variants proliferated (SWE-bench Verified, Lite, Multilingual, Multimodal, SWE-PolyBench by Amazon). The fragmentation of benchmarks, combined with rising token costs from frontier models, creates demand for execution infrastructure that handles multiple benchmarks efficiently.

## Founders & Team

**Avi Arora** — Co-founder
- BS Computer Science (concentrations: Human-Centered Computing, AI) and MS Computer Science (concentration: Machine Learning), Georgia Institute of Technology (LinkedIn, ZoomInfo via search snippet)
- Previously: ML Engineer II at Microsoft working on GitHub Copilot — built infrastructure for scalable agentic evaluations and agent benchmarks; lead model developer for Microsoft Prompt Shields (20B+ classifications/year); multilabel content moderation models for GPT-3 (LinkedIn via search snippet)
- Co-founded Octtone (Bluezen meditation app — spatial audio algorithms) (LinkedIn via search snippet)
- Built AI Infographic Generator with 50,000+ users via SEO (LinkedIn via search snippet)
- Twitter/X: @AviaroraAvi — follower count not retrievable (X.com)
- LinkedIn: linkedin.com/in/avi-arora — headline references ML Research @ Microsoft, Responsible AI (LinkedIn)
- GitHub: github.com/aarora4 — 35 public repos, 13 followers. Pinned: Awesome-Prediction-Market-Tools (122 stars), PredictionMarketBench (10 stars). Bio still references "Co-founder @Oddpool" (GitHub, Mar 2026)

**Ritesh Malpani** — Co-founder
- BS Computer Science, Georgia Institute of Technology (LinkedIn via search snippet)
- Previously: Software Engineer at Bloomberg (architected systems processing 100K+ TPS across trading infrastructure), Software Engineer at Amazon, Software Engineer at American Express (LinkedIn, YC page via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/ritesh-malpani — headline references Bloomberg (LinkedIn)
- GitHub: No public profile found
- Crunchbase profile exists (crunchbase.com/person/ritesh-malpani-2360) but page not accessible (403 error)

**Co-founder relationship:** Both founders attended Georgia Institute of Technology for their undergraduate Computer Science degrees (LinkedIn via search snippets). No shared employer identified.

**Founder-market fit:** Avi Arora's Microsoft role on GitHub Copilot specifically involved building infrastructure for agentic evaluations and benchmarks — directly relevant to Benchspan's core product. His ML research background provides domain depth in evaluation methodology. Ritesh Malpani's experience architecting high-throughput trading systems at Bloomberg (100K+ TPS) is relevant to building parallel execution infrastructure. The team pivoted from Oddpool (prediction markets) to Benchspan, applying their agent benchmarking experience (PredictionMarketBench) to the broader AI agent evaluation problem.

## Key Risks

**Incumbent platform expansion:** Braintrust ($121M funded, Feb 2026), Galileo ($68M, Oct 2024), and LangChain ($260M) all operate in adjacent evaluation/observability space and could add benchmark execution features. Braintrust and LangSmith already support custom evals with tracing — adding parallel cloud execution is an incremental infrastructure investment for them.

**Open-source substitution:** SWE-bench provides its own open-source harness. UK AISI's Inspect framework offers agent evaluation tooling. Individual benchmarks increasingly ship with execution scaffolds. [Inferred]: If benchmark authors converge on a standardized execution interface, the glue-code problem Benchspan solves diminishes.

**Benchmark fragmentation and obsolescence:** Benchspan's value depends on a growing catalog of relevant benchmarks. If the industry consolidates around 1-2 dominant benchmarks (as SWE-bench has for coding), the multi-benchmark orchestration value proposition weakens. Conversely, if benchmarks evolve faster than Benchspan can integrate them, the catalog becomes stale.

**Recent pivot from Oddpool:** The team pivoted from a prediction market data product (Oddpool) to AI agent benchmarking (Benchspan) during their YC batch. Avi Arora's GitHub bio and repos still reference Oddpool (GitHub, Mar 2026). [Inferred]: The pivot leverages Avi's Microsoft agent benchmarking experience, but the recency of the pivot means the current product is very early.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Agentic AI market: $7.29B in 2025, projected $139.19B by 2034 at 40.50% CAGR (Fortune Business Insights, 2025 via search snippet). No sub-segment data for agent benchmarking specifically. |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Avi Arora (Co-founder): MS CS/ML Georgia Tech, ML Engineer II at Microsoft on GitHub Copilot agent evals. Ritesh Malpani (Co-founder): BS CS Georgia Tech, SWE at Bloomberg (100K+ TPS systems), Amazon, AmEx. |
| Competitors | Braintrust ($121M raised, revenue unknown, broad LLM observability vs. benchmark execution); Galileo ($68.1M raised, 834% revenue growth in 2024 per PR Newswire, eval intelligence with proprietary models); LangSmith/LangChain ($260M raised, $16M revenue per Latka 2025, full-lifecycle agent platform); Patronus AI ($40.1M raised, revenue unknown, LLM reliability/hallucination focus); Vals.ai ($5M raised, $1.3M revenue per Latka 2025, domain-specific vertical benchmarks) |
| Moat Signals | No public data found |
| Risk Factors | Incumbent platform expansion from well-funded eval/observability players, open-source benchmark harness substitution, recent pivot from Oddpool |
| Founder Reach | Avi Arora: Twitter @AviaroraAvi (count not retrievable), LinkedIn linkedin.com/in/avi-arora, GitHub aarora4 (122 stars on top repo). Ritesh Malpani: LinkedIn linkedin.com/in/ritesh-malpani, no Twitter or GitHub found. |
| Distribution Signals | No public data found |
| Emails | founders@benchspan.com (Benchspan website) |
