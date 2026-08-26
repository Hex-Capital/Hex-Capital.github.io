# Graphify Labs

> On-device knowledge graph engine for enterprises

| Field | Value |
|-------|-------|
| Website | https://www.graphify.com/ |
| YC Page | https://www.ycombinator.com/companies/graphify-labs |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | London, England, United Kingdom |
| Tags | Developer Tools, Reinforcement Learning, Open Source |
| YC Partner | Jared Friedman ([YC](https://www.ycombinator.com/companies/graphify-labs), Aug 2026) |
| Emails | founders@graphifylabs.ai ([Graphify security](https://graphify.com/security), Aug 2026), founders@graphify.com ([GitHub](https://github.com/Graphify-Labs), Aug 2026) |

## The Idea

- **Problem:** AI coding assistants repeatedly grep and reread files, losing architectural context between sessions, while enterprise engineering teams need to assess cross-file impact and AI-generated pull requests ([Graphify](https://graphify.com/), Aug 2026).
- **Approach:** Graphify parses code locally with 36 tree-sitter grammars, stores typed relationships in `graph.json`, exposes the graph through CLI/MCP, and adds self-hosted graph-aware review and formal verification for enterprise pull requests ([Graphify](https://graphify.com/), Aug 2026).
- **Differentiation:** Unlike Sourcegraph’s cross-repository search and Greptile’s graph-indexed agent reviews, Graphify’s open core produces an auditable local graph without telemetry, while its enterprise layer claims prove-or-counterexample verification ([Graphify](https://graphify.com/enterprise), [Sourcegraph](https://sourcegraph.com/code-search), [Greptile](https://www.greptile.com/)).
- **Business Model:** Free costs $0 for one developer, Pro is billed monthly per seat with its price shown at checkout, and Enterprise is a custom self-hosted per-developer license ([Graphify pricing](https://graphify.com/pricing), Aug 2026).
- **TAM/SAM:** The broader AI code-tools market was estimated at $7.37B in 2025 and projected to reach $29.96B in 2031 at a 26.23% CAGR, while no public SAM estimate was found for self-hosted code-graph verification ([Research and Markets](https://www.researchandmarkets.com/reports/6248151/ai-code-tools-market-share-analysis-industry), 2026).
- **GTM / Distribution:** Graphify distributes the Apache-2.0 open core through GitHub and PyPI, then offers paid hosted seats and self-hosted Enterprise capabilities to teams that need higher limits, shared context, and verification ([Graphify pricing](https://graphify.com/pricing), Aug 2026).

## Defensibility

- **Moat today:** The open-source project has 105,036 GitHub stars, 4.7M+ PyPI downloads, and a reported 71-person contributor community ([Graphify](https://graphify.com/), [University of Birmingham](https://www.birmingham.ac.uk/study/student-experience/meet-our-students/safi-shamsi), Aug 2026).
- **Future moat:** [Inferred]: Continuously updated team graphs, review feedback, Jira history, and merge-gate integration could create workflow switching costs, but the enterprise layer remains in early access ([Graphify Enterprise](https://graphify.com/enterprise), Aug 2026).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** The core is Apache-2.0 licensed, while Greptile and CodeRabbit already build code graphs for repository-aware pull-request review ([Graphify security](https://graphify.com/security), [Greptile](https://www.greptile.com/), [CodeRabbit](https://www.coderabbit.ai/)).

## Market & Traction

- **Traction signals:**
  - Open-source Graphify: 105,036 GitHub stars and 4.7M+ PyPI downloads ([Graphify](https://graphify.com/), Aug 10, 2026).
  - Open-source Graphify: used in production by engineers at Rootly, Geotab, Tweddle Group, and Superagent ([YC](https://www.ycombinator.com/companies/graphify-labs), Aug 2026).
  - GitHub organization: 373 followers and 104,984 repository stars ([GitHub](https://github.com/Graphify-Labs), Aug 10, 2026).
  - Discord: 316 members and 46 online ([Gridinsoft](https://gridinsoft.com/online-virus-scanner/url/graphify-com), Jul 26, 2026).
  - Coverage: articles or videos from Analytics Vidhya, Rootly, Augment Code, Better Stack, DEV Community, and other community publishers ([Graphify](https://graphify.com/), Aug 2026).
  - Enterprise product: early access with its first design-partner cohort forming; no paid-customer count disclosed ([Graphify Enterprise](https://graphify.com/enterprise), Aug 2026).
  - YC jobs page: 0 active positions ([YC](https://www.ycombinator.com/companies/graphify-labs), Aug 2026).
- **Competitors (minimum 3, up to 5):**
  - **Greptile ($30M raised, revenue unknown):** Builds a repository graph and deploys agent swarms for PR review, while Graphify combines a local open core with self-hosted verification ([Georgia Tech](https://news.gatech.edu/news/2026/01/05/y-combinator-backing-and-30m-investment-take-startup-greptile-next-level), [Greptile](https://www.greptile.com/)).
  - **CodeRabbit ($88M raised, $15M+ ARR):** Combines code graphs with 40+ linters and scanners across PR, IDE, and CLI workflows, versus Graphify’s on-device graph and claimed formal verification ([TechCrunch](https://techcrunch.com/2025/09/16/coderabbit-raises-60m-valuing-the-2-year-old-ai-code-review-startup-at-550m/), Sep 2025).
  - **Sourcegraph ($223M raised, revenue unknown):** Searches and navigates code across up to 1M+ repositories, while Graphify generates a local graph designed for agent traversal and provenance ([Sourcegraph](https://sourcegraph.com/code-search), [funding summary](https://en.wikipedia.org/wiki/Sourcegraph)).
  - **Augment Code ($252M raised, revenue unknown):** Supplies full-codebase context to coding agents and review workflows, while Graphify exposes an open local graph plus a self-hosted verification layer ([Business Wire](https://www.businesswire.com/news/home/20240424911981/en/Augment-Inc.-Raises-%24227-Million-at-%24977-Million-Valuation-to-Empower-Software-Teams-With-AI), Apr 2024).
- **Why now:** [Inferred]: Increased AI-generated code has shifted engineering bottlenecks toward review and validation, while Graphify now integrates with 17 coding assistants ([TechCrunch](https://techcrunch.com/2025/09/16/coderabbit-raises-60m-valuing-the-2-year-old-ai-code-review-startup-at-550m/), [Graphify](https://graphify.com/), 2025–2026).

## Founders & Team

- **Safi Shamsi (CEO/Founder):**
  - Background: MSc Data Science with Distinction from the University of Birmingham in 2025, former AI engineer at Valent and SWAWE, and researcher in knowledge graphs, RAG, and explainable AI ([University of Birmingham](https://www.birmingham.ac.uk/study/student-experience/meet-our-students/safi-shamsi), [GitHub](https://github.com/safishamsi)).
  - Twitter/X: [@safishamsii](https://x.com/safishamsii); count not retrievable.
  - LinkedIn: “AI Engineer at Valent Projects,” with 4K followers on the retrieved profile ([LinkedIn](https://uk.linkedin.com/in/safi-shamsi), Jun 2026).
  - GitHub: [@safishamsi](https://github.com/safishamsi), 1.9K followers; top repository Graphify has approximately 105K stars ([GitHub](https://github.com/safishamsi), Aug 2026).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** [Inferred]: Shamsi’s knowledge-graph/RAG MSc thesis, knowledge-graph engineering work at Valent, and related published medical-retrieval research document experience with the product’s core architecture ([University of Birmingham](https://www.birmingham.ac.uk/study/student-experience/meet-our-students/safi-shamsi), [GitHub](https://github.com/safishamsi)).

## Key Risks

- **Verification feasibility:** Enterprise verification remains early access, and the published SWR-Bench result used 40 pull requests with a different judge model from the paper, which the company labels directional rather than definitive ([Graphify Enterprise](https://graphify.com/enterprise), Aug 2026).
- **Feature overlap:** Greptile and CodeRabbit already offer repository graphs, learned team rules, and PR-review agents, while Sourcegraph provides enterprise-scale cross-repository code intelligence ([Greptile](https://www.greptile.com/), [CodeRabbit](https://www.coderabbit.ai/), [Sourcegraph](https://sourcegraph.com/code-search)).
- **Adoption-to-revenue separation:** The 105K-star and 4.7M-download metrics belong to the free open-source core, while Enterprise is still forming its first design-partner cohort and discloses no revenue ([Graphify](https://graphify.com/), [Graphify Enterprise](https://graphify.com/enterprise), Aug 2026).
- **Product and name ambiguity:** Earlier materials described the enterprise product as Penpax, spanning meetings, browser history, files, emails, and code, whereas the current Graphify Enterprise focuses on code review and verification; an unrelated Notion product also launched under the Graphify name ([PyPI archive](https://pypi.org/project/codegraph-tools/), Apr 2026; [Graphify Enterprise](https://graphify.com/enterprise), Aug 2026; [Product Hunt record](https://hunted.space/product/graphify), Feb 2025).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.37B AI code-tools market in 2025, projected to $29.96B by 2031 at 26.23% CAGR ([Research and Markets](https://www.researchandmarkets.com/reports/6248151/ai-code-tools-market-share-analysis-industry), 2026) |
| SAM | No public data found |
| Traction | Open-source Graphify: 105,036 GitHub stars, 4.7M+ PyPI downloads, and production use by engineers at Rootly, Geotab, Tweddle Group, and Superagent ([Graphify](https://graphify.com/), [YC](https://www.ycombinator.com/companies/graphify-labs), Aug 2026) |
| Revenue Signal | $0 Free tier; Pro billed monthly per seat with price shown at checkout; Enterprise custom per-developer license ([Graphify pricing](https://graphify.com/pricing), Aug 2026) |
| Founders | Safi Shamsi (CEO/Founder): University of Birmingham MSc Data Science with Distinction, former Valent AI engineer, knowledge-graph/RAG researcher ([YC](https://www.ycombinator.com/companies/graphify-labs), [University of Birmingham](https://www.birmingham.ac.uk/study/student-experience/meet-our-students/safi-shamsi)) |
| Competitors | Greptile ($30M raised, revenue unknown, graph-indexed agent review) ([Georgia Tech](https://news.gatech.edu/news/2026/01/05/y-combinator-backing-and-30m-investment-take-startup-greptile-next-level)); CodeRabbit ($88M raised, $15M+ ARR, code graphs plus linters/scanners) ([TechCrunch](https://techcrunch.com/2025/09/16/coderabbit-raises-60m-valuing-the-2-year-old-ai-code-review-startup-at-550m/)); Sourcegraph ($223M raised, revenue unknown, cross-repository search) ([Sourcegraph](https://sourcegraph.com/code-search)); Augment Code ($252M raised, revenue unknown, full-codebase agent context) ([Business Wire](https://www.businesswire.com/news/home/20240424911981/en/Augment-Inc.-Raises-%24227-Million-at-%24977-Million-Valuation-to-Empower-Software-Teams-With-AI)) |
| Moat Signals | 105,036 GitHub stars, 4.7M+ downloads, 71-person contributor community, local provenance-tagged graph, and on-prem deployment ([Graphify](https://graphify.com/), [University of Birmingham](https://www.birmingham.ac.uk/study/student-experience/meet-our-students/safi-shamsi), Aug 2026) |
| Risk Factors | Enterprise early access and limited benchmark; overlapping graph-review competitors; Apache-2.0 forkability ([Graphify Enterprise](https://graphify.com/enterprise), [Greptile](https://www.greptile.com/), [Graphify security](https://graphify.com/security)) |
| Founder Reach | Safi Shamsi: X @safishamsii count not retrievable, LinkedIn 4K followers, GitHub 1.9K followers and approximately 105K stars on top repository ([LinkedIn](https://uk.linkedin.com/in/safi-shamsi), [GitHub](https://github.com/safishamsi), Aug 2026) |
| Distribution Signals | 105,036 GitHub stars, 4.7M+ PyPI downloads, 373 GitHub-organization followers, and 316 Discord members ([Graphify](https://graphify.com/), [GitHub](https://github.com/Graphify-Labs), [Gridinsoft](https://gridinsoft.com/online-virus-scanner/url/graphify-com), Jul–Aug 2026) |
| Emails | founders@graphifylabs.ai ([Graphify security](https://graphify.com/security), Aug 2026), founders@graphify.com ([GitHub](https://github.com/Graphify-Labs), Aug 2026) |
