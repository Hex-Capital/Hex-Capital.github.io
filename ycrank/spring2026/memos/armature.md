# Armature

> Armature helps companies monitor and optimize the agent experience.

| Field | Value |
|-------|-------|
| Website | https://armature.tech |
| YC Page | https://www.ycombinator.com/companies/armature |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Enterprise Software |
| YC Partner | Andrew Miklas |
| Emails | founders@armature.tech (armature.tech, May 2026) |

## The Idea

- **Problem:** Companies shipping MCP/CLI surfaces have no visibility into how AI agents (Claude Code, Codex, Cursor, ChatGPT, Gemini CLI) actually execute workflows on their products and can't catch regressions like wrong tool selection, off-script retries, or model-specific failures (armature.tech, May 2026).
- **Approach:** Spawns real LLM agents that reason through a customer's MCP/CLI end-to-end across multiple harnesses and frontier models, traces sessions to expose what the model "thought" and missed, and exposes an MCP endpoint so the customer's internal coding agents can auto-remediate based on Armature's run data (armature.tech, May 2026).
- **Differentiation:** Positions against LangSmith, Braintrust, and Datadog Synthetics as MCP/agent-specific testing rather than LLM trace logging or scripted synthetic monitoring (armature.tech, May 2026).
- **Business Model:** Tiered SaaS — Starter $79/mo annual ($99 monthly), Pro $159/mo annual ($199 monthly), Enterprise custom with SSO/audit logs/CSM; 7-day free trial; metered on sources, monitors, workflows, and model pairs (armature.tech pricing page, May 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; adjacent AI observability category context: Arize Series C "largest-ever investment in AI observability" Feb 2025 (TechCrunch, Feb 2025).
- **GTM / Distribution:** [Inferred]: Direct sales to AI-product teams shipping MCP servers, leveraging founder networks at Palantir and Joko (both named as Armature investors on armature.tech, May 2026); no public marketing channel data found.

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond proprietary multi-harness/multi-model test corpus accumulated per customer ([Inferred]: from product description, armature.tech, May 2026).
- **Future moat:** [Inferred]: Cross-customer benchmark dataset of agent behavior could become a data moat as more MCPs onboard — unproven now because no customer count or run-volume metric is public.
- **Market structure:** [Inferred]: Incumbent LLM-observability platforms (LangSmith, Braintrust, Datadog) trace passive agent calls rather than driving live agents through customer MCPs across harnesses, creating a product-scope gap rather than a structural barrier; Braintrust already ships an MCP server integration (Braintrust articles, 2026).
- **Commoditization risk:** Well-funded observability vendors — Braintrust ($80M Series B, Axios Feb 2026), LangChain/LangSmith ($125M Series B at $1.25B, Fortune Oct 2025), Arize ($70M Series C, TechCrunch Feb 2025) — could extend their evals products into multi-harness agent execution.

## Market & Traction

- **Traction signals:**
  - Investors disclosed on website: Y Combinator, Palantir, Tsuga, Joko (armature.tech, May 2026).
  - Founders' self-description: "We've deployed MCPs used by millions of customers and built observability products from the ground up" (armature.tech, May 2026).
  - YC batch: Spring 2026 / P26 (YC company page; Louis Scremin LinkedIn headline "Armature (YC P26)", May 2026).
  - No public revenue, customer logo, user-count, Product Hunt, Discord, app store, or press-coverage data found.
- **Competitors:**
  - Braintrust ($80M Series B at $800M valuation, Feb 2026, Iconiq-led; customers include Notion, Replit, Cloudflare, Ramp, Dropbox per SiliconAngle Feb 2026; revenue unknown): LLM eval/observability with MCP server for IDE clients, but not multi-harness live agent execution against customer MCPs.
  - LangChain/LangSmith ($160M total, $125M Series B at $1.25B valuation Oct 2025, IVP-led; ~$16M ARR per getlatka.com 2025): framework-native tracing/evals tied to LangGraph/LangChain ecosystem.
  - Arize AI ($131M total, $70M Series C Feb 2025, Adams Street-led; revenue unknown): AI/ML observability with Phoenix open-source tracing, not agent-driven test execution.
  - Langfuse (revenue/funding not retrieved in this research): open-source LLM observability/tracing, self-hostable (Braintrust articles, 2026).
  - Datadog LLM Observability (parent Datadog public; revenue not segment-broken-out): MCP client tracing inside Datadog APM (Augment Code, 2026).
- **Why now:** [Inferred]: Mainstream agent harnesses (Claude Code, Codex, Cursor, Gemini CLI, ChatGPT apps) and the Model Context Protocol standard reached production usage in 2024-2025, creating MCP surfaces that need agent-vs-agent testing rather than human UI testing (armature.tech product copy, May 2026).

## Founders & Team

- **Theodore Otzenberger (Co-founder):**
  - Background: Studied at École Polytechnique; ex-Palantir ~5 years before co-founding Armature (LinkedIn theodore-otzenberger-895345131; YC company page, May 2026).
  - Twitter/X: @Totzenberger (count not retrievable — x.com requires auth).
  - LinkedIn: "Joko" (search snippet title from linkedin.com/in/théodore-otzenberger-895345131, May 2026).
  - GitHub: No public account found in search results.
- **Louis Scremin (Co-founder):**
  - Background: Early employee at Joko (joined May 2023 as Business Operations Analyst, later led AI Automation — AI Agents & MCP servers) before co-founding Armature (LinkedIn louis-scremin; theorg.com/org/joko, 2024).
  - Twitter/X: No public account found in search results.
  - LinkedIn: "Armature (YC P26)" (linkedin.com/in/louis-scremin, May 2026).
  - GitHub: No public account found in search results.
- **Co-founder relationship:** Both founders' LinkedIn histories include Joko — Scremin led AI/MCP work at Joko and Otzenberger's LinkedIn snippet also surfaces "Joko"; Joko is also listed as an Armature investor (armature.tech; LinkedIn search snippets, May 2026).
- **Founder-market fit:** [Inferred]: Scremin shipped AI agents and MCP servers at Joko, and the team self-describes as having "deployed MCPs used by millions of customers and built observability products from the ground up" (armature.tech, May 2026); Palantir and Joko (the founders' prior employers) are named investors (armature.tech, May 2026).

## Key Risks

- **Well-funded incumbents extending into multi-harness MCP testing:** Braintrust ($80M Series B at $800M, Axios Feb 2026), LangChain/LangSmith ($125M at $1.25B, Fortune Oct 2025), and Arize ($70M Series C, TechCrunch Feb 2025) already provide LLM eval/observability and ship MCP integrations; Braintrust's documented MCP server (Braintrust articles 2026) directly overlaps positioning. No mitigation found beyond product-scope differentiation.
- **Category dependency on MCP standard adoption:** Product is anchored to MCP/CLI surfaces (armature.tech, May 2026); if MCP loses standard-protocol status to a vendor-specific alternative, the test corpus and integrations narrow in value. No mitigation found in public sources.
- **Technical feasibility — non-deterministic agent test signal:** Running stochastic LLM agents through real workflows produces variance-prone pass/fail signals; the company markets "the wrong tool picked, the off-script retry, the path that only fails on Opus 4.7" (armature.tech, May 2026), and no public benchmark of false-positive/false-negative rates exists.
- **Name disambiguation:** "Armature" is also a common noun (electrical/sculpture) and used by unrelated companies; searches must be qualified with "YC" or "armature.tech" — research above confirmed all cited data points map to armature.tech/YC P26 via founder cross-check (YC company page, May 2026).
- **No public traction:** No revenue, customer count, user count, press coverage, or community metric was retrievable as of May 2026 (multiple searches); baseline expected at YC Spring 2026 stage, but creates evaluation gap for diligence.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Investors: Y Combinator, Palantir, Tsuga, Joko (armature.tech, May 2026); YC Spring 2026 / P26 (YC page, May 2026); no public users, revenue, or press coverage found |
| Revenue Signal | Pricing: Starter $79/mo annual / $99 monthly; Pro $159/mo annual / $199 monthly; Enterprise custom; 7-day free trial (armature.tech pricing, May 2026) |
| Founders | Theodore Otzenberger (Co-founder): École Polytechnique, ex-Palantir ~5 yrs. Louis Scremin (Co-founder): early Joko employee, led AI Agents & MCP servers at Joko. |
| Competitors | Braintrust ($80M Series B at $800M valuation Feb 2026, revenue unknown, LLM eval/observability with MCP server); LangChain/LangSmith ($160M total, $1.25B valuation 2025, ~$16M ARR per getlatka 2025, framework-native tracing); Arize AI ($131M total, $70M Series C Feb 2025, revenue unknown, ML/LLM observability); Langfuse (funding not retrieved, open-source LLM observability); Datadog LLM Observability (parent public, segment revenue unknown, MCP client tracing in APM) |
| Moat Signals | No public data found |
| Risk Factors | Well-funded incumbents (Braintrust, LangSmith, Arize, Datadog) overlap; MCP-standard dependency; non-deterministic agent test signal |
| Founder Reach | Theodore Otzenberger: Twitter @Totzenberger count not retrievable, LinkedIn present, GitHub not found. Louis Scremin: Twitter not found, LinkedIn present, GitHub not found. |
| Distribution Signals | No public data found |
| Emails | founders@armature.tech (armature.tech, May 2026) |

Sources:
- [Armature website](https://armature.tech/)
- [Armature YC company page](https://www.ycombinator.com/companies/armature)
- [Théodore Otzenberger LinkedIn](https://www.linkedin.com/in/th%C3%A9odore-otzenberger-895345131/)
- [Louis Scremin LinkedIn](https://www.linkedin.com/in/louis-scremin/)
- [Louis Scremin – Joko (The Org)](https://theorg.com/org/joko/org-chart/louis-scremin)
- [Braintrust $80M Series B (Axios, Feb 2026)](https://www.axios.com/pro/enterprise-software-deals/2026/02/17/ai-observability-braintrust-80-million-800-million)
- [Braintrust $80M Series B (SiliconAngle, Feb 2026)](https://siliconangle.com/2026/02/17/braintrust-lands-80m-series-b-funding-round-become-observability-layer-ai/)
- [LangChain $125M Series B (Fortune, Oct 2025)](https://fortune.com/2025/10/20/exclusive-early-ai-darling-langchain-is-now-a-unicorn-with-a-fresh-125-million-in-funding/)
- [LangChain Revenue/ARR (getlatka)](https://getlatka.com/companies/langchain)
- [Arize AI $70M Series C (TechCrunch, Feb 2025)](https://techcrunch.com/2025/02/20/arize-ai-hopes-it-has-first-mover-advantage-in-ai-observability/)
- [Arize AI Series C announcement](https://arize.com/blog/arize-ai-raises-70m-series-c-to-build-the-gold-standard-for-ai-evaluation-observability/)
- [7 Best AI Agent Observability Tools 2026 (Augment Code)](https://www.augmentcode.com/tools/best-ai-agent-observability-tools)
