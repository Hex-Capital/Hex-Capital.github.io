# Alkera AI

> Data engineering and data science agents that are reliable and safe

| Field | Value |
|-------|-------|
| Website | https://alkera.ai |
| YC Page | https://www.ycombinator.com/companies/alkera-ai |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Developer Tools, Data Science, Data Engineering, Enterprise Software |
| YC Partner | Ankit Gupta (YC company page) |
| Emails | contact@alkera.ai (alkera.ai website), andrew@alkera.ai (andrewtrandev.com) |

## The Idea

- **Problem:** Generalist coding agents (e.g., Claude Code, Codex) produce "false, or even dangerous, reports" on data warehouses because they lack schema, lineage, and team knowledge (alkera.ai landing page; YC company description).
- **Approach:** IDE/CLI agent that reasons over "exact column-level lineage," a persistent team knowledge base, and a safety layer that gates destructive SQL (DROP, TRUNCATE, schema drops) behind explicit approval (alkera.ai product page).
- **Differentiation:** Vs. Snowflake CoCo — Alkera runs in the customer's IDE across a multi-warehouse stack (Snowflake, Databricks, dbt, BigQuery, Redshift, Postgres, DuckDB) rather than inside one vendor (alkera.ai integrations list; Snowflake CoCo blog, 2026); vs. Claude Code/Codex — adds lineage grounding and destructive-action guardrails (alkera.ai landing page); vs. Matia — Matia is a managed pipeline/observability platform, Alkera is a developer-surface agent (matia.io; alkera.ai).
- **Business Model:** Usage-tiered SaaS: Free, Plus $50/mo, Pro $250/mo, Enterprise custom with SSO/SAML, audit logs, VPC/on-prem, ZDR (alkera.ai pricing page).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** [Inferred]: Bottom-up developer install via VS Code extension and CLI with a free tier, upsold to Enterprise via VPC/on-prem for regulated data teams — inferred from the tiered pricing and deployment options published on alkera.ai.

## Defensibility

- **Moat today:** Compliance and deployment surface — SOC 2 Type II, GDPR, ISO 27001, HIPAA in progress, plus VPC/on-prem and ZDR (alkera.ai security page); [Inferred]: raises the bar for enterprise data buyers vs. hosted-only agents.
- **Future moat:** [Inferred]: Per-customer "living knowledge base" of team conventions and query patterns (alkera.ai) could compound switching costs as it captures undocumented context, but unproven — no retention/churn or knowledge-base scale data disclosed.
- **Market structure:** [Inferred]: Warehouse incumbents (Snowflake CoCo, Databricks) face a channel-conflict incentive to keep their agent single-stack, leaving cross-warehouse IDE agents as an available niche — inferred from Snowflake CoCo positioning inside Snowflake (Snowflake blog, 2026).
- **Commoditization risk:** Claude Code and Codex are already used for data tasks and scored 65.1% on dbt Labs' ADE-Bench vs. Snowflake CoCo at 72.1% (Snowflake CoCo blog, 2026); the lineage/safety wrapper is replicable by any well-funded agent vendor.

## Market & Traction

- **Traction signals:**
  - Backers: Y Combinator and Pareto Holdings listed on site (alkera.ai footer).
  - Compliance: SOC 2 Type II, GDPR, ISO 27001 achieved; HIPAA in progress (alkera.ai security page).
  - Integrations shipped: Snowflake, Databricks, dbt, BigQuery, Redshift, PostgreSQL, DuckDB + 10 more (alkera.ai).
  - Product Hunt / press: No public data found.
  - Social followers: No public data found (company LinkedIn page exists at linkedin.com/company/alkera-ai per YC page; follower count not retrievable).
  - Revenue / user counts: No public data found.
- **Competitors:**
  - Snowflake CoCo (Snowflake-funded internal product, revenue unknown): built into Snowflake, 72.1% on ADE-Bench (Snowflake blog, 2026); single-warehouse vs. Alkera's multi-stack.
  - Matia (~$31M total raised, $21M Series A Feb 2026, Red Dot Capital lead; ARR undisclosed) (Forbes, Feb 10 2026; matia.io): autonomous pipeline/observability platform vs. Alkera's IDE/CLI agent surface.
  - Maia (funding not found in search): "Maia Team" agents for pipeline dev + Context Engine (maia.ai via search snippet); positioned as autonomous team vs. Alkera's IDE copilot.
  - Claude Code / OpenAI Codex (Anthropic/OpenAI): 65.1% on ADE-Bench (Snowflake blog, 2026); general-purpose, no native lineage/warehouse safety layer.
  - dbt-adjacent tools Coalesce, Dataform, SQLMesh (Coalesce blog, 2026): transformation tooling, not agent products.
- **Why now:** [Inferred]: Agentic coding tools crossed a benchmarked usability threshold on data tasks in 2026 (ADE-Bench released by dbt Labs; multiple agents scoring >65%, per Snowflake CoCo blog, 2026), creating buyer demand for a governed, lineage-aware variant.

## Founders & Team

- **Tony Li (Co-founder, COO):**
  - Background: B.S. Computer Science + Mathematics, Yale University (2022–2026); Software Engineer Intern at TikTok May–Aug 2025 (built a Python framework for multi-agent, MCP-compatible AI workflows); Quantitative Developer Intern at Carthage Capital 2024 (tonyli.info).
  - Twitter/X: No public account found (not listed on tonyli.info).
  - LinkedIn: linkedin.com/in/tonyli4722 (tonyli.info); headline not retrievable.
  - GitHub: @orange472 (tonyli.info); top repo/star count not retrievable.
- **Andrew Tran (Co-founder, CTO):**
  - Background: B.S./M.S. Computer Science + Data Science Certificate, Yale University (2022–2026); SWE Intern at Hudson River Trading May–Aug 2025; SWE Intern at Ramp May 2024–Apr 2025; Research Assistant at Gerstein Lab, Yale; co-author on MolLM paper, Bioinformatics June 2024 (andrewtrandev.com).
  - Twitter/X: No public account found (not listed on andrewtrandev.com).
  - LinkedIn: linkedin.com/in/andrewtran-cs, "CTO @ Alkera (YC S26)" (LinkedIn search snippet).
  - GitHub: @28andrew (andrewtrandev.com); top repo/star count not retrievable.
- **Additional team:** Rick Gao mentioned as team member in RocketReach snippet; role not confirmed; team size 4 per YC page.
- **Co-founder relationship:** Both co-founders attended Yale University CS 2022–2026 (tonyli.info; andrewtrandev.com).
- **Founder-market fit:** [Inferred]: Tony Li built an internal multi-agent MCP framework at TikTok (tonyli.info) and Andrew Tran shipped data infra at Ramp and Hudson River Trading (andrewtrandev.com), giving direct exposure to enterprise data-stack pain points Alkera targets; backed by Y Combinator and Pareto Holdings (alkera.ai).

## Key Risks

- **Incumbent bundling risk:** Snowflake's native CoCo agent already outperforms general-purpose agents on ADE-Bench (72.1% vs. 65.1%) inside the Snowflake stack (Snowflake blog, 2026), so Snowflake-heavy accounts have a built-in substitute; Alkera's cited mitigation is multi-warehouse coverage (7+ integrations on alkera.ai).
- **Frontier-agent commoditization:** Claude Code and Codex already reach 65.1% on data-engineering tasks (Snowflake CoCo blog, 2026) and can be extended with MCP connectors to Snowflake/dbt, compressing the differentiator of "IDE agent for data" over time.
- **Well-funded direct competitor:** Matia closed a $21M Series A in Feb 2026 with named enterprise logos including Ramp, Drata, HoneyBook, and Lemonade (Forbes, Feb 10 2026; matia.io), giving it a capital and distribution lead in the AI-native data-infra segment.
- **Undisclosed traction:** No public revenue, user, download, waitlist, or press datapoints were retrievable (WebSearch across YC, Product Hunt, press outlets, July 2026); investors have limited external validation of adoption.
- **Technical feasibility of safety guarantees:** Alkera markets a hard "safety floor" blocking destructive SQL without approval (alkera.ai), but no third-party benchmark or audit of false-negative rate is published; failure modes on lineage misreads are a category-defining risk given the "false, or even dangerous, reports" framing on their own site.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | SOC 2 Type II, GDPR, ISO 27001 achieved; HIPAA in progress (alkera.ai security page); 17+ warehouse/tool integrations shipped (alkera.ai); backed by Y Combinator + Pareto Holdings (alkera.ai) |
| Revenue Signal | Free / $50 per month Plus / $250 per month Pro / Enterprise custom (alkera.ai pricing page, 2026) |
| Founders | Tony Li (Co-founder, COO): Yale CS+Math 2026, TikTok SWE intern (multi-agent MCP framework), Carthage Capital quant intern. Andrew Tran (Co-founder, CTO): Yale CS BS/MS 2026, Hudson River Trading SWE intern, Ramp SWE intern, Bioinformatics publication. |
| Competitors | Snowflake CoCo (Snowflake-funded, revenue unknown, native to Snowflake single-stack); Matia ($31M+ total, $21M Series A Feb 2026 Red Dot Capital, ARR unknown, managed pipeline platform); Maia (funding not found, autonomous pipeline agent team); Claude Code / OpenAI Codex (Anthropic/OpenAI-scale, general-purpose coding agents); Coalesce/Dataform/SQLMesh (transformation tools, not agents) |
| Moat Signals | Column-level lineage + team knowledge base + destructive-SQL safety gate (alkera.ai); enterprise compliance stack SOC 2 Type II / GDPR / ISO 27001 + VPC / on-prem / ZDR (alkera.ai security page) |
| Risk Factors | Incumbent bundling (Snowflake CoCo), frontier-agent commoditization (Claude Code/Codex on ADE-Bench), well-funded competitor Matia ($21M Series A) |
| Founder Reach | Tony Li: Twitter not found, LinkedIn tonyli4722, GitHub @orange472 (stars not retrievable). Andrew Tran: Twitter not found, LinkedIn andrewtran-cs, GitHub @28andrew (stars not retrievable). |
| Distribution Signals | VS Code extension + CLI listed on alkera.ai; No Product Hunt, Chrome Web Store, or app-store data found |
| Emails | contact@alkera.ai (alkera.ai), andrew@alkera.ai (andrewtrandev.com) |

Sources:
- [Alkera — the data engineering agent](https://www.alkera.ai/)
- [Alkera AI on Y Combinator](https://www.ycombinator.com/companies/alkera-ai)
- [Andrew Tran personal site](https://andrewtrandev.com/)
- [Tony Li personal site](https://www.tonyli.info/)
- [Snowflake CoCo: AI Coding Agent for the Modern Data Stack](https://www.snowflake.com/en/blog/snowflake-coco-ai-coding-agent-modern-data-stack/)
- [Matia Raises $21M Series A (Forbes, Feb 10 2026)](https://www.forbes.com/sites/gilpress/2026/02/10/matia-raises-21-million-to-upgrade-data-management-for-ai/)
- [Matia Series A announcement](https://www.matia.io/blog/ai-unified-data-series-a)
- [dbt Alternatives 2026 (Maia)](https://www.maia.ai/resources/blog/dbt-alternatives-and-competitors)
- [Andrew Tran LinkedIn (search snippet)](https://www.linkedin.com/in/andrewtran-cs/)
- [Alkera AI RocketReach profile](https://rocketreach.co/alkera-ai-profile_b6473df9c811edc1)
