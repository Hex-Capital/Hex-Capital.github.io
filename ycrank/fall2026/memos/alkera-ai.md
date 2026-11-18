# Alkera AI

> Reliable and safe data engineering and data science agents

| Field | Value |
|-------|-------|
| Website | https://alkera.ai |
| YC Page | https://www.ycombinator.com/companies/alkera-ai |
| Batch | Fall 2026 ([YC company profile](https://www.ycombinator.com/companies/alkera-ai), Nov 2026) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Data Science, Data Engineering, Enterprise Software, AI |
| YC Partner | Ankit Gupta ([YC company profile](https://www.ycombinator.com/companies/alkera-ai)) |
| Emails | rickgao.contact@gmail.com, Rick Gao ([founder site](https://rickgao.dev/), via search snippet), tony.li.tl699@yale.edu and tony.li.4722@gmail.com, Tony Li ([founder site](https://www.tonyli.info/), [GitHub profile](https://github.com/orange472)), contact@alkera.ai, general inquiries and support, and security@alkera.ai, security reports ([Alkera Support](https://www.alkera.ai/support)) |

## The Idea

- **Problem:** Data engineers using general-purpose coding agents can get SQL that runs successfully while silently changing the figures in downstream dashboards ([YC Launch](https://www.ycombinator.com/launches/Rcy-alkera-the-data-agent-that-you-can-trust)).
- **Approach:** Alkera maps column dependencies before edits, gives its agent source-linked business definitions that teammates can verify, and tests proposed pipeline fixes in isolated environments ([Alkera platform](https://www.alkera.ai/), [Alkera docs](https://docs.alkera.ai/)).
- **Differentiation:** Hex centers its agents on analytics and notebooks, Recce reviews changes in dbt pull requests, and Alkera combines shared notebooks with agents that check downstream impact across warehouses, transformations, and dashboards ([Hex 4.0](https://hex.tech/blog/hex-new-era/), [Recce docs](https://docs.reccehq.com/), [YC Launch](https://www.ycombinator.com/launches/Rcy-alkera-the-data-agent-that-you-can-trust)).
- **Business Model:** Alkera lists Free at $0 with 10 GB of storage, Plus at $50/month with 1 TB, Pro at $200/month with 5 TB, and custom Enterprise pricing with VPC and on-premises options ([Alkera pricing](https://www.alkera.ai/pricing), Nov 2026).
- **TAM/SAM:** Meticulous Research estimates the global autonomous data engineering agent segment at $0.70–$1.20 billion in 2026 with 30% projected CAGR through 2032, covering agents that build, monitor, or repair pipelines ([Meticulous Research](https://www.meticulousresearch.com/meticulous-next/autonomous-data-engineering-agents-outlook-2026-2032), Nov 2026).
- **GTM / Distribution:** Alkera offers browser self-signup and enterprise demos, announced IDE and CLI access at its July launch, and distributes Databench as a self-hostable subset of its commercial workspace ([Alkera pricing](https://www.alkera.ai/pricing), [YC Launch](https://www.ycombinator.com/launches/Rcy-alkera-the-data-agent-that-you-can-trust), [Databench on Product Hunt](https://www.producthunt.com/products/alkera)).

## Defensibility

- **Moat today:** Alkera documents column-level lineage linking Snowflake, dbt, and Hex, which its agent uses to identify affected tables and dashboards before making changes ([YC Launch](https://www.ycombinator.com/launches/Rcy-alkera-the-data-agent-that-you-can-trust)).
- **Future moat:** [Inferred]: A customer’s accumulated, human-verified definitions and trusted queries could raise switching costs as more workflows depend on them, with retention and migration costs undisclosed ([Alkera knowledge base](https://www.alkera.ai/features/knowledge-base)).
- **Market structure:** No structural barrier identified at this stage, with Snowflake already extending Cortex Code to dbt and Airflow ([Snowflake announcement](https://www.snowflake.com/en/news/press-releases/snowflake-cortex-code-expands-towards-supporting-any-data-anywhere/), Feb 2026).
- **Commoditization risk:** Altimate already offers a data engineering agent with warehouse connectors, dbt tests, and column lineage, making those capabilities available through another IDE and CLI tool ([Altimate Code](https://altimate.ai/products/altimate-code), [Altimate dbt tools](https://help.altimate.ai/code/data-engineering/tools/dbt-tools/)).

## Market & Traction

- **Traction signals:**
  - $500,000 YC financing dated July 1, 2026, reported as a convertible note ([CB Insights](https://www.cbinsights.com/company/alkera-ai/financials), via search snippet).
  - Alkera launched on X on July 17, 2026, with 108,000 launch-post views and 67 followers reported for @alkera_ai ([The Launch Video Company](https://www.launchvideo.com/directory/alkera-ai), Nov 2026 snapshot).
  - Databench ranked #4 on Product Hunt on October 7, 2026, and had 13 GitHub stars in November ([Product Hunt](https://www.producthunt.com/leaderboard/daily/2026/10/7), [GitHub](https://github.com/AlkeraAI/Databench)).
  - 814 company LinkedIn followers and an estimated 702 monthly website visits ([LinkedIn](https://www.linkedin.com/company/alkera-ai), [Semrush via Crunchbase](https://www.crunchbase.com/organization/alkera-ai), Nov 2026 snapshots).
  - Databench reviewed by Indie Machine ([Indie Machine](https://indie-machine.com/posts/databench-collaborative-data-workspace-review), Oct 2026).
  - 0 open roles on YC Jobs ([YC Jobs](https://www.ycombinator.com/companies/alkera-ai/jobs), Nov 2026).
- **Competitors:**
  - **Hex** ($271.5M reported total, current revenue unknown): Agent-driven analytics and collaborative notebooks, with a $100M Series D co-led by Peak XV and 137 Ventures in October 2026 ([Stock Analysis](https://stockanalysis.com/private/hex/), [Cooley](https://www.cooley.com/news/coverage/2026/2026-10-30-hex-raises-100-million-series-d-at-1-2b-valuation), [Hex 4.0](https://hex.tech/blog/hex-new-era/)).
  - **Recce** (at least $4M raised, revenue unknown): Reviews dbt pull requests and checks changes in warehouse outputs, with a $4M pre-seed led by Heavybit in April 2025 ([Recce announcement](https://blog.reccehq.com/announcing-recce-1-0-with-cloud-beta), [Recce docs](https://docs.reccehq.com/)).
  - **Tobiko Data** ($21.8M raised before acquisition, revenue unknown): SQLMesh plans and validates transformations, with a $17.3M Series A led by Theory Ventures in June 2024 and acquisition by Fivetran in September 2025 ([Tobiko announcement](https://www.tobikodata.com/blog/the-future-of-tobiko---from-sinks-to-sql), [Fivetran](https://www.fivetran.com/press/fivetran-acquires-tobiko-data-to-power-the-next-generation-of-advanced-ai-ready-data-transformation)).
- **Why now:** [Inferred]: Claude Code’s May 2025 general release made terminal and IDE agents available for data work, creating demand for checks on queries and pipeline edits that can run successfully while producing incorrect results ([Anthropic](https://www.anthropic.com/news/claude-4), [YC Launch](https://www.ycombinator.com/launches/Rcy-alkera-the-data-agent-that-you-can-trust)).

## Founders & Team

- **Rick Gao (Founder/CEO):**
  - Background: Studied computer science at Yale, built ingestion pipelines and treasury models at Verition Fund Management, and researched computational biology in Yale’s Gerstein Lab ([YC founder profile](https://www.ycombinator.com/founders/rick-gao), [YC Launch](https://www.ycombinator.com/launches/Rcy-alkera-the-data-agent-that-you-can-trust)); email rickgao.contact@gmail.com ([founder site](https://rickgao.dev/), via search snippet).
  - Twitter/X: No public account found.
  - LinkedIn: Lists Alkera AI (YC S26), headline not retrievable ([LinkedIn](https://www.linkedin.com/in/rgao09), via search snippet).
  - GitHub: @rickgao0917, `quantrooms` (0 stars, [GitHub](https://github.com/rickgao0917/quantrooms), Nov 2026).
- **Tony Li (Founder/COO):**
  - Background: Earned a Yale B.S. in computer science and mathematics, built a Python multi-agent framework and internal bots at ByteDance, and worked as a quantitative developer at Carthage Capital ([YC founder profile](https://www.ycombinator.com/founders/tony-li)); emails tony.li.tl699@yale.edu and tony.li.4722@gmail.com ([founder site](https://www.tonyli.info/), [GitHub profile](https://github.com/orange472)).
  - Twitter/X: No public account found.
  - LinkedIn: Lists Alkera AI (YC S26), headline not retrievable ([LinkedIn](https://www.linkedin.com/in/tonyli4722), via search snippet).
  - GitHub: @orange472, `stockbot` (1 star, [GitHub](https://github.com/orange472/stockbot), Nov 2026).
- **Andrew Tran (Founder/CTO):**
  - Background: Earned a Yale B.S./M.S. in computer science, worked on data tooling at Ramp and Hudson River Trading, and conducted ML research at Yale’s Gerstein Lab ([YC founder profile](https://www.ycombinator.com/founders/andrew-tran), [founder site](https://andrewtrandev.com/)); email: No public data found.
  - Twitter/X: No public account found.
  - LinkedIn: Lists Alkera AI (YC S26), headline not retrievable ([LinkedIn](https://www.linkedin.com/in/andrewtran-cs), via search snippet).
  - GitHub: @28andrew, contributor to `gersteinlab/MolLM` (27 stars, [GitHub profile](https://github.com/28andrew), Nov 2026).
- **Co-founder relationship:** Gao says the founders met at Yale and organized its inaugural undergraduate trading competition together ([Rick Gao’s LinkedIn announcement](https://www.linkedin.com/posts/rgao09_some-personal-news-the-company-i-started-activity-7476049282530193409-bhtv)).
- **Founder-market fit:** Gao’s ingestion work, Li’s production agent tooling, and Tran’s data infrastructure work cover workflows Alkera sells into, with backing from YC and Pareto Holdings ([YC Launch](https://www.ycombinator.com/launches/Rcy-alkera-the-data-agent-that-you-can-trust), [Alkera funding announcement](https://www.linkedin.com/company/alkera-ai), [Crunchbase](https://www.crunchbase.com/organization/alkera-ai)).

## Key Risks

- **Platform substitution:** [Inferred]: Snowflake users can adopt Cortex Code within Snowsight for dbt development and catalog-aware SQL, overlapping with Alkera’s offerings for Snowflake teams ([Snowflake release notes](https://docs.snowflake.com/en/release-notes/2026/other/2026-03-09-cortex-code-snowsight-ga)).
- **Production reliability:** [Inferred]: Incorrect changes remain a risk in live pipelines, with Alkera reporting an 83.28% DataAgentBench pass rate versus 68.49% for Claude Code over five runs using the same model and offering sandbox tests and approval gates ([Alkera platform](https://www.alkera.ai/), July 2026 benchmark).
- **Integration coverage:** [Inferred]: An unconnected downstream system can leave part of a change’s impact outside the lineage graph, which Alkera builds from connected services ([Alkera lineage](https://www.alkera.ai/features/column-level-lineage)).
- **Name and cohort ambiguity:** The startup shares its name with France’s Groupe Alkera, and its own announcement said Summer 2026 while YC’s current profile lists Fall 2026 ([French Competition Authority](https://www.autoritedelaconcurrence.fr/sites/default/files/autorisation/2026-10/26-DCC-193.pdf), [Alkera announcement](https://www.linkedin.com/company/alkera-ai), [YC company profile](https://www.ycombinator.com/companies/alkera-ai)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Autonomous data engineering agents: $0.70–$1.20B globally in 2026, 30% projected CAGR through 2032 ([Meticulous Research](https://www.meticulousresearch.com/meticulous-next/autonomous-data-engineering-agents-outlook-2026-2032), Nov 2026) |
| SAM | No public data found |
| Traction | July 17 launch with 108,000 X post views ([The Launch Video Company](https://www.launchvideo.com/directory/alkera-ai), Nov 2026), Databench #4 of the day ([Product Hunt](https://www.producthunt.com/leaderboard/daily/2026/10/7), Oct 7, 2026) and 13 stars ([GitHub](https://github.com/AlkeraAI/Databench), Nov 2026) |
| Revenue Signal | Free $0, Plus $50/month, Pro $200/month, Enterprise custom ([Alkera pricing](https://www.alkera.ai/pricing), Nov 2026) |
| Founders | Rick Gao (CEO), Yale and Verition Fund Management. Tony Li (COO), Yale, ByteDance, and Carthage Capital. Andrew Tran (CTO), Yale, Ramp, and Hudson River Trading ([YC company profile](https://www.ycombinator.com/companies/alkera-ai)) |
| Competitors | Hex ($271.5M reported raised, current revenue unknown, agent-driven analytics and notebooks, [Stock Analysis](https://stockanalysis.com/private/hex/), [Hex](https://hex.tech/blog/hex-new-era/)), Recce (at least $4M raised, revenue unknown, dbt pull-request validation, [Recce](https://blog.reccehq.com/announcing-recce-1-0-with-cloud-beta)), Tobiko Data ($21.8M raised before acquisition, revenue unknown, SQLMesh transformation planning, [Tobiko](https://www.tobikodata.com/blog/the-future-of-tobiko---from-sinks-to-sql), [Fivetran](https://www.fivetran.com/press/fivetran-acquires-tobiko-data-to-power-the-next-generation-of-advanced-ai-ready-data-transformation)) |
| Moat Signals | Cross-tool column lineage and source-linked, human-verifiable knowledge entries ([Alkera platform](https://www.alkera.ai/)) |
| Risk Factors | Snowflake-native substitution ([Snowflake](https://docs.snowflake.com/en/release-notes/2026/other/2026-03-09-cortex-code-snowsight-ga)), benchmark errors and reliance on connected lineage ([Alkera platform](https://www.alkera.ai/)) |
| Founder Reach | Rick Gao: LinkedIn 3K, GitHub 0 stars on `quantrooms` ([LinkedIn](https://www.linkedin.com/in/rgao09), via search snippet, [GitHub](https://github.com/rickgao0917/quantrooms)). Tony Li: LinkedIn 1K, GitHub 1 star on `stockbot` ([LinkedIn](https://www.linkedin.com/in/tonyli4722), via search snippet, [GitHub](https://github.com/orange472/stockbot)). Andrew Tran: LinkedIn 3K, GitHub 27 stars on co-authored `MolLM` ([LinkedIn](https://www.linkedin.com/in/andrewtran-cs), via search snippet, [GitHub](https://github.com/28andrew)). |
| Distribution Signals | 814 LinkedIn followers ([LinkedIn](https://www.linkedin.com/company/alkera-ai), Nov 2026), 67 X followers reported ([The Launch Video Company](https://www.launchvideo.com/directory/alkera-ai), Nov 2026), estimated 702 monthly web visits ([Semrush via Crunchbase](https://www.crunchbase.com/organization/alkera-ai), Nov 2026), VS Code extension listing ([Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=alkera-ai.alkera)) |
| Emails | rickgao.contact@gmail.com, Rick Gao ([founder site](https://rickgao.dev/), via search snippet), tony.li.tl699@yale.edu and tony.li.4722@gmail.com, Tony Li ([founder site](https://www.tonyli.info/), [GitHub profile](https://github.com/orange472)), contact@alkera.ai, general inquiries and support, and security@alkera.ai, security reports ([Alkera Support](https://www.alkera.ai/support)) |
