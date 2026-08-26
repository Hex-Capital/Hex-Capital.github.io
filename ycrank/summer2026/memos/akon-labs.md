# Akon Labs

> Nervous System for AI Agents

| Field | Value |
|-------|-------|
| Website | https://akonlabs.com |
| YC Page | https://www.ycombinator.com/companies/akon-labs |
| Batch | Summer 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Deep Learning, Generative AI, SaaS |
| YC Partner | Jon Xu |
| Emails | founders@akonlabs.com |

## The Idea

- **Problem:** Coding agents serving software teams repeatedly search files, consume tokens, and can miss cross-file dependencies and call chains when using grep or text retrieval ([YC launch, Aug 2026](https://www.ycombinator.com/companies/akon-labs)).
- **Approach:** GitNexus parses repositories with Tree-sitter, resolves imports and call chains into a precomputed knowledge graph, clusters symbols by function, and exposes context, impact analysis, and change detection through MCP tools ([Akon Labs](https://www.akonlabs.com/)).
- **Differentiation:** Unlike Sourcegraph’s indexed search, Augment’s model-driven Context Engine, and Bito’s graph of code plus organizational history, GitNexus emphasizes deterministic local parsing, execution-flow tracing, and air-gapped or self-hosted deployment ([Sourcegraph](https://sourcegraph.com/code-search), [Augment](https://www.augmentcode.com/blog/announcing-context-lineage), [Bito](https://wefunder.com/bito), [Akon Labs](https://www.akonlabs.com/)).
- **Business Model:** GitNexus OSS is free for non-commercial use, Nexus Agent is a free private beta, managed Enterprise costs $29 per seat, and self-hosted deployment uses custom pricing ([pricing page, Aug 2026](https://www.akonlabs.com/pricing)).
- **TAM/SAM:** The global AI code-tools market was estimated at $7.7 billion in 2025, up from $6.21 billion in 2024 at 24% growth, while no public SAM estimate isolates code-context knowledge graphs ([Research and Markets, Mar 2025](https://www.researchandmarkets.com/reports/5951952/artificial-intelligence-ai-code-tools-market)).
- **GTM / Distribution:** Akon distributes the free engine through GitHub and npm, then solicits engineering leaders with agent-cost, regulated-environment, air-gapped, or complex-monorepo requirements for managed or self-hosted deployments ([YC launch, Aug 2026](https://www.ycombinator.com/companies/akon-labs)).

## Defensibility

- **Moat today:** Distribution signals include 45.8K GitHub stars, 5.1K forks, 47,249 weekly npm downloads, and a company-reported 10+ enterprise deployments ([GitHub, Aug 2026](https://github.com/abhigyanpatwari/GitNexus), [npm, Aug 2026](https://www.npmjs.com/package/gitnexus), [YC](https://www.ycombinator.com/companies/akon-labs)).
- **Future moat:** [Inferred]: Repeated deployment across proprietary multi-repository systems could produce integration knowledge and enterprise workflows, but no proprietary dataset or measured retention is public.
- **Market structure:** No structural barrier is identified because the public implementation uses available components including Tree-sitter, LadybugDB, Leiden clustering, and MCP, although its PolyForm license restricts commercial reuse ([GitHub](https://github.com/abhigyanpatwari/GitNexus)).
- **Commoditization risk:** Sourcegraph, Augment, Greptile, and Bito already offer cross-repository search, context engines, code-review memory, or connected engineering graphs that overlap with GitNexus functionality ([Sourcegraph](https://sourcegraph.com/deep-search), [Augment](https://www.augmentcode.com/tools/7-ai-tools-that-actually-understand-enterprise-codebases), [Greptile](https://www.greptile.com/changelog), [Bito](https://wefunder.com/bito)).

## Market & Traction

- **Traction signals:**
  - 45.8K GitHub stars and 5.1K forks ([GitHub, Aug 2026](https://github.com/abhigyanpatwari/GitNexus)).
  - 47,249 weekly npm downloads ([npm, Aug 2026](https://www.npmjs.com/package/gitnexus)).
  - 50K+ Docker Hub pulls ([Docker Hub, Aug 2026](https://hub.docker.com/r/akonlabs/gitnexus/tags)).
  - 10+ enterprise deployments reported at launch ([YC, Aug 2026](https://www.ycombinator.com/companies/akon-labs)).
  - Customer testimonial: 88% fewer tool calls and 74% token savings in a 17-agent environment ([Pebblous production audit, Jun 2026](https://blog.pebblous.ai/report/gitnexus-production-report-2026/en/)).
  - 268 LinkedIn followers and a one-click Render deployment collaboration ([LinkedIn, Aug 2026](https://www.linkedin.com/company/akon-labs)).
  - Coverage by MarkTechPost on April 24, 2026 ([MarkTechPost](https://www.marktechpost.com/2026/04/24/meet-gitnexus-an-open-source-mcp-native-knowledge-graph-engine-that-gives-claude-code-and-cursor-full-codebase-structural-awareness/)).
  - 0 jobs listed ([YC, Aug 2026](https://www.ycombinator.com/companies/akon-labs)).
- **Competitors:**
  - Augment Code ($252M raised, revenue unknown): combines a codebase-wide Context Engine with cloud agents across the software lifecycle rather than centering a local deterministic graph ([Augment, Apr 2024](https://www.augmentcode.com/blog/augment-inc-raises-227-million)).
  - Sourcegraph ($223M raised, revenue unknown): searches and navigates up to 1M+ repositories using indexed text and semantic analysis rather than GitNexus’s precomputed execution-flow graph ([Sourcegraph](https://sourcegraph.com/code-search), [funding](https://techcrunch.com/2021/07/13/sourcegraph-raises-125m-series-d-on-2-6b-valuation-for-universal-code-search-tool/)).
  - Greptile ($30M raised, revenue unknown): focuses on centralized pull-request validation that learns from review feedback and Jira or Notion context ([Georgia Tech, Jan 2026](https://news.gatech.edu/news/2026/01/05/y-combinator-backing-and-30m-investment-take-startup-greptile-next-level)).
  - Bito ($10M+ raised, $600K ARR): connects code, architecture, discussions, issues, and operational history in one enterprise graph, versus GitNexus’s code-structure-first graph ([Wefunder, Aug 2026](https://wefunder.com/bito)).
- **Why now:** AI-generated code has shifted the reported bottleneck from writing to review and validation for 85% of respondents in a June 2026 Harris Poll survey, while 91% of surveyed organizations used at least two AI coding tools ([GitLab, Jun 2026](https://about.gitlab.com/press/releases/2026-06-23-gitlab-research-reveals-organizations-are-generating-ai-code-faster-than-they-can-control-it/)).

## Founders & Team

- **Subham Kundu (Founder/CEO):**
  - Background: PhD scholar in reinforcement learning at TCG CREST, former Cignara CTO, HTCD Principal AI Engineer, and Caravel Labs engineer who built an LLM chatbot used by 5,000 students ([YC](https://www.ycombinator.com/companies/akon-labs), [personal profile](https://www.subhamkundu.com/)).
  - Twitter/X: [@subhamCenrax](https://x.com/subhamCenrax), count not retrievable.
  - LinkedIn: “Akon Labs (YC S26),” with 18K followers ([LinkedIn, Aug 2026, via search snippet](https://www.linkedin.com/in/subham-kundu-2746b515b)).
  - GitHub: @Cenrax; researchswarm has 24 stars ([GitHub, Aug 2026, via search snippet](https://github.com/Cenrax)).
- **Abhigyan Patwari (Co-founder):**
  - Background: Kalinga Institute of Industrial Technology student from 2022–2026, AI engineer, and original GitNexus author ([LinkedIn, via search snippet](https://in.linkedin.com/in/abhigyan-patwari-81809b261), [GitHub](https://github.com/abhigyanpatwari)).
  - Twitter/X: No public account found.
  - LinkedIn: “Akon Labs (YC S26),” with 2K followers ([LinkedIn, Aug 2026, via search snippet](https://in.linkedin.com/in/abhigyan-patwari-81809b261)).
  - GitHub: @abhigyanpatwari; GitNexus has 45.8K stars ([GitHub, Aug 2026](https://github.com/abhigyanpatwari/GitNexus)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Subham’s prior work in AI observability, graph systems, and LLM cost reduction and Abhigyan’s authorship of GitNexus document experience with the product’s underlying problem and implementation ([YC](https://www.ycombinator.com/companies/akon-labs), [GitHub](https://github.com/abhigyanpatwari/GitNexus)).

## Key Risks

- **Benchmark generalizability:** The published DeepSWE evaluation covers 113 single-issue tasks and cannot test the multi-repository graphs or impact analysis central to the product, although the company reports 3,471 trials and publishes its methodology ([Akon Labs benchmark summary](https://www.akonlabs.com/)).
- **Repository-scale constraints:** A production audit reports heap-overflow risk above 10,000 files and overnight indexing above 50,000 files, while npm documentation requires Node 22 and records native-addon installation failure modes with documented workarounds ([Pebblous, Jun 2026](https://blog.pebblous.ai/report/gitnexus-production-report-2026/en/), [npm](https://www.npmjs.com/package/gitnexus)).
- **License friction:** GitNexus uses the PolyForm Noncommercial license, and Pebblous reports that LangWatch replaced it with an MIT-licensed alternative because of commercial-use ambiguity; Akon offers separate commercial licensing ([GitHub](https://github.com/abhigyanpatwari/GitNexus), [Pebblous](https://blog.pebblous.ai/report/gitnexus-production-report-2026/en/)).
- **Funded substitutes:** Augment, Sourcegraph, Greptile, and Bito have disclosed $252M, $223M, $30M, and $10M+ in funding respectively and sell overlapping context, search, review, or engineering-graph products ([Augment](https://www.augmentcode.com/blog/augment-inc-raises-227-million), [Sourcegraph](https://techcrunch.com/2021/07/13/sourcegraph-raises-125m-series-d-on-2-6b-valuation-for-universal-code-search-tool/), [Greptile](https://news.gatech.edu/news/2026/01/05/y-combinator-backing-and-30m-investment-take-startup-greptile-next-level), [Bito](https://wefunder.com/bito)).
- **Name disambiguation:** Spain’s registry lists a separate “AKON LABS IA SOFTWARE” entity with a Logroño address and different ownership, creating potential search-result contamination; the YC company is identified by akonlabs.com and founders Subham Kundu and Abhigyan Patwari ([BORME, Jun 2026](https://www.boe.es/borme/dias/2026/06/01/pdfs/BORME-A-2026-102-99.pdf), [YC](https://www.ycombinator.com/companies/akon-labs)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.7B global AI code-tools market in 2025; 24% growth from 2024 and 23.9% forecast CAGR through 2029 ([Research and Markets, Mar 2025](https://www.researchandmarkets.com/reports/5951952/artificial-intelligence-ai-code-tools-market)) |
| SAM | No public data found |
| Traction | 45.8K GitHub stars and 5.1K forks ([GitHub, Aug 2026](https://github.com/abhigyanpatwari/GitNexus)); 47,249 weekly downloads ([npm, Aug 2026](https://www.npmjs.com/package/gitnexus)); 10+ enterprise deployments ([YC, Aug 2026](https://www.ycombinator.com/companies/akon-labs)) |
| Revenue Signal | $0 OSS tier, $29/seat managed SaaS, and custom self-hosted pricing ([Akon Labs pricing, Aug 2026](https://www.akonlabs.com/pricing)) |
| Founders | Subham Kundu (Founder/CEO): former Cignara CTO, HTCD Principal AI Engineer, TCG CREST PhD scholar ([YC](https://www.ycombinator.com/companies/akon-labs)); Abhigyan Patwari (Co-founder): KIIT student and GitNexus author ([LinkedIn](https://in.linkedin.com/in/abhigyan-patwari-81809b261), [GitHub](https://github.com/abhigyanpatwari)) |
| Competitors | Augment Code ($252M raised, revenue unknown, cloud context engine) ([Augment](https://www.augmentcode.com/blog/augment-inc-raises-227-million)); Sourcegraph ($223M raised, revenue unknown, cross-repository search) ([TechCrunch](https://techcrunch.com/2021/07/13/sourcegraph-raises-125m-series-d-on-2-6b-valuation-for-universal-code-search-tool/)); Greptile ($30M raised, revenue unknown, review memory) ([Georgia Tech](https://news.gatech.edu/news/2026/01/05/y-combinator-backing-and-30m-investment-take-startup-greptile-next-level)); Bito ($10M+ raised, $600K ARR, organizational knowledge graph) ([Wefunder](https://wefunder.com/bito)) |
| Moat Signals | 45.8K GitHub stars, 47,249 weekly npm downloads, deterministic local graph, and 10+ reported enterprise deployments ([GitHub](https://github.com/abhigyanpatwari/GitNexus), [npm](https://www.npmjs.com/package/gitnexus), [YC](https://www.ycombinator.com/companies/akon-labs)) |
| Risk Factors | Single-issue benchmark scope ([Akon Labs](https://www.akonlabs.com/)); repository-scale and installation constraints ([Pebblous](https://blog.pebblous.ai/report/gitnexus-production-report-2026/en/)); PolyForm commercial-use friction ([GitHub](https://github.com/abhigyanpatwari/GitNexus)) |
| Founder Reach | Subham Kundu: X count not retrievable, LinkedIn 18K, top GitHub repo 24 stars ([LinkedIn](https://www.linkedin.com/in/subham-kundu-2746b515b), [GitHub](https://github.com/Cenrax)); Abhigyan Patwari: LinkedIn 2K, GitHub 45.8K stars ([LinkedIn](https://in.linkedin.com/in/abhigyan-patwari-81809b261), [GitHub](https://github.com/abhigyanpatwari/GitNexus)) |
| Distribution Signals | 47,249 weekly npm downloads ([npm, Aug 2026](https://www.npmjs.com/package/gitnexus)), 50K+ Docker pulls ([Docker Hub, Aug 2026](https://hub.docker.com/r/akonlabs/gitnexus/tags)), 268 LinkedIn followers and Render one-click deployment ([LinkedIn, Aug 2026](https://www.linkedin.com/company/akon-labs)) |
| Emails | founders@akonlabs.com ([YC, Aug 2026](https://www.ycombinator.com/companies/akon-labs)) |
