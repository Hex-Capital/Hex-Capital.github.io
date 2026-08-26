# Agnost AI

> Product analytics for AI Agents

| Field | Value |
|-------|-------|
| Website | https://agnost.ai |
| YC Page | https://www.ycombinator.com/companies/agnost-ai |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Analytics |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Analytics, Monitoring, AI |
| YC Partner | Tyler Bosmeny |
| Emails | shubham@agnost.ai, founders@agnost.ai ([YC](https://www.ycombinator.com/companies/agnost-ai); [PyPI](https://pypi.org/project/agnost/)) |

## The Idea

- **Problem:** Teams operating chat and voice agents cannot detect failures expressed as frustration, repetition, feature requests, or abandonment through click analytics, latency monitoring, or prewritten evals, because an agent can return HTTP 200 while failing the user’s task ([YC launch](https://www.ycombinator.com/companies/agnost-ai), Jul 2026).
- **Approach:** Agnost ingests conversations through its SDK, skill, or OpenTelemetry, clusters product-specific intents and violations, links findings to underlying events and tool calls, and can open reviewed pull requests tested against past conversations ([Agnost documentation](https://docs.agnost.ai/); [YC launch](https://www.ycombinator.com/companies/agnost-ai)).
- **Differentiation:** Agnost centers on conversation-derived user demand, frustration, and PR fixes, versus LangSmith’s tracing/evaluation/deployment suite, Braintrust’s eval and observability workflow, Arize’s broader ML and agent platform, and Langfuse’s open-source tracing, prompt-management, and evaluation stack ([LangChain](https://www.langchain.com/blog/series-b); [Braintrust](https://www.braintrust.dev/blog/announcing-series-b); [Arize](https://arize.com/blog/arize-ai-raises-70m-series-c-to-build-the-gold-standard-for-ai-evaluation-observability/); [Langfuse](https://langfuse.com/press)).
- **Business Model:** Free includes 1,000 events monthly, Starter costs $49 monthly for 10,000 events, Pro costs $499 monthly for 1 million events, and Enterprise offers custom volume, retention, VPC deployment, audit logs, and SLAs ([Agnost pricing](https://agnost.ai/), Aug 2026).
- **TAM/SAM:** The agent-observability and governance market was estimated at $1.23B in 2025 and forecast to reach $8.62B in 2031 at a 38.69% CAGR, while SAM is No public data found ([Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/agent-observability-and-governance-market), 2026).
- **GTM / Distribution:** Agnost combines free self-service onboarding, a developer-installable skill, founder-booked calls, technical content, and founder-led outreach to teams building agents ([Agnost](https://agnost.ai/); [founder LinkedIn](https://www.linkedin.com/posts/shubhampalriwala_i-would-quit-my-own-company-to-take-this-activity-7463633340013711361-d944), Jul 2026).

## Defensibility

- **Moat today:** Agnost processes more than 1 million events daily, creating operating-data volume for product-specific failure discovery, but no public source establishes that customer data is pooled into a proprietary cross-customer model ([YC launch](https://www.ycombinator.com/companies/agnost-ai), Jul 2026).
- **Future moat:** [Inferred]: Accumulated customer-specific intent taxonomies, failure histories, and validated fixes could create switching costs, although published retention currently ranges from 7 to 90 days outside custom Enterprise terms ([Agnost pricing](https://agnost.ai/)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** LangSmith already categorizes agent-behavior patterns, while Braintrust, Arize, and Langfuse provide overlapping production tracing and evaluation capabilities that can incorporate conversation analytics ([LangChain](https://www.langchain.com/blog/series-b); [Braintrust](https://www.braintrust.dev/blog/announcing-series-b); [Arize](https://arize.com/pricing/); [Langfuse](https://langfuse.com/press)).

## Market & Traction

- **Traction signals:**
  - Current product processes more than 1 million events per day ([YC launch](https://www.ycombinator.com/companies/agnost-ai), Jul 2026).
  - The founder reports work with teams at Google, Exa Labs, and Corgi Insurance, while Agnost’s site carries a Google engineer’s statement about integrating observability into MCP Toolbox for Databases ([founder LinkedIn](https://www.linkedin.com/posts/shubhampalriwala_i-would-quit-my-own-company-to-take-this-activity-7463633340013711361-d944); [Agnost](https://agnost.ai/), 2026).
  - The founders reported raising $250,000 after joining Entrepreneurs First, with Entrepreneurs First and Transpose Platform named as backers ([founder LinkedIn](https://www.linkedin.com/posts/shubhampalriwala_were-building-agnost-ai-iitvit-grads-activity-7452762856535592960-t0_i); [funding announcement](https://www.linkedin.com/posts/shubhampalriwala_excited-to-share-that-we-at-agnost-ai-have-activity-7395058939727458304-FIL8)).
  - Prior-product metric: Agnost’s earlier MCP analytics offering processed approximately 2.5 million MCP server calls monthly ([founder LinkedIn](https://www.linkedin.com/posts/shubhampalriwala_the-hidden-metrics-behind-successful-mcp-activity-7403334764193034240-2Y7p), Jan 2026).
  - Its Launch HN post recorded 77 points and 40 comments ([HN archive](https://noobclaw.com/hot-topics/2026-07-15/), Jul 15, 2026).
  - The company LinkedIn page had 2,885 followers ([LinkedIn](https://www.linkedin.com/company/agnostai), Jul 2026).
  - A Growth Engineer announced joining in August 2026, although YC still displayed team size 2 and zero jobs ([LinkedIn](https://www.linkedin.com/posts/dhruvieiei_career-update-ive-joined-agnost-ai-yc-activity-7475611538163171329-cHwl); [YC](https://www.ycombinator.com/companies/agnost-ai)).
- **Competitors:**
  - LangChain/LangSmith ($260M raised; latest $125M round led by IVP in October 2025; revenue unknown): combines agent frameworks with tracing, evaluation, behavior categorization, and deployment ([Sacra](https://sacra.com/c/langchain/); [LangChain](https://www.langchain.com/blog/series-b)).
  - Braintrust ($121M disclosed; latest $80M Series B led by ICONIQ in February 2026; revenue unknown): focuses on evaluations and production observability rather than conversation-derived product demand ([Braintrust](https://www.braintrust.dev/blog/company); [Series B](https://www.braintrust.dev/blog/announcing-series-b)).
  - Arize AI (over $135M raised; latest $70M Series C led by Adams Street Partners in February 2025; revenue unknown): covers traditional ML, LLMs, agents, tracing, drift, and evaluations ([Arize](https://arize.com/career/?gh_jid=5978967004); [Series C](https://arize.com/blog/arize-ai-raises-70m-series-c-to-build-the-gold-standard-for-ai-evaluation-observability/)).
  - Langfuse ($4M disclosed; latest $4M seed led by Lightspeed, La Famiglia, and YC in November 2023; revenue unknown): offers open-source, self-hosted tracing, analytics, prompt management, and evaluations and was acquired by ClickHouse in January 2026 ([Langfuse](https://langfuse.com/press)).
- **Why now:** [Inferred]: Agent-framework adoption doubled over the preceding year as production agents began calling multiple tools and APIs, increasing demand for conversation- and trace-level diagnosis ([TechRadar](https://www.techradar.com/pro/how-ai-observability-helps-organizations-move-from-experimentation-to-production), Jun 2026).

## Founders & Team

- **Shubham Palriwala (Co-Founder and CEO):**
  - Background: VIT computer-science graduate, Cisco analytics engineer, first Formbricks hire, and contributor to Bitcoin, OWASP, and Linux Foundation projects ([LinkedIn](https://www.linkedin.com/in/shubhampalriwala); [YC](https://www.ycombinator.com/companies/agnost-ai)).
  - Twitter/X: @ShubhamInTech, approximately 3,000 followers ([TwStalker](https://ww.twstalker.com/ShubhamInTech), Jul 2026).
  - LinkedIn: “CEO of Agnost AI; building the infrastructure for self-improving agents,” with approximately 15,000 followers ([LinkedIn](https://www.linkedin.com/in/shubhampalriwala), Jul 2026).
  - GitHub: @ShubhamPalriwala; `networth` is his highest-starred owned repository with 27 stars ([GitHub](https://github.com/ShubhamPalriwala), Aug 2026).
- **Parth Ajmera (Co-Founder and CTO):**
  - Background: IIT Madras computer-science graduate who ranked 159 in JEE Advanced, built terabyte-scale Spark pipelines at Microsoft, and led graphics engineering at Infurnia ([YC](https://www.ycombinator.com/companies/agnost-ai); [LinkedIn](https://www.linkedin.com/in/parthajmera)).
  - Twitter/X: @prrthh132, 797 followers ([TwStalker via search snippet](https://ngntipkolamrenang.twstalker.com/real_shorya), Jul 2026).
  - LinkedIn: “Building the infrastructure for self-improving agents,” with approximately 6,000 followers ([LinkedIn](https://www.linkedin.com/in/parthajmera), Jul 2026).
  - GitHub: @AjmeraParth132; 10 public repositories, with the original profile repository showing 0 stars ([GitHub](https://github.com/AjmeraParth132?tab=repositories), Aug 2026).
- **Co-founder relationship:** The founders describe themselves as childhood friends for eight years ([YC launch](https://www.ycombinator.com/companies/agnost-ai), Jul 2026).
- **Founder-market fit:** Shubham’s analytics and open-source product experience and Parth’s production-data-pipeline and graphics-systems work document experience relevant to agent analytics infrastructure ([YC](https://www.ycombinator.com/companies/agnost-ai)).

## Key Risks

- **Suite encroachment:** LangSmith, Braintrust, Arize, and Langfuse already bundle tracing, evaluations, analytics, and automated categorization, permitting customers to obtain overlapping functionality from existing AI-engineering platforms ([LangChain](https://www.langchain.com/blog/series-b); [Braintrust](https://www.braintrust.dev/blog/announcing-series-b); [Arize](https://arize.com/pricing/); [Langfuse](https://langfuse.com/press)).
- **Production-data sensitivity:** Agnost ingests complete conversations, model generations, handoffs, guardrails, and tool-call details; Enterprise VPC deployment, audit logs, custom retention, and SLAs are the disclosed mitigations ([documentation](https://docs.agnost.ai/); [pricing](https://agnost.ai/)).
- **Automated-fix validation:** [Inferred]: Testing proposed PRs against historical conversations may not cover new behavior or downstream effects, although fixes remain subject to customer review and merge ([YC launch](https://www.ycombinator.com/companies/agnost-ai)).
- **Product-scope transition:** Public positioning moved from MCP and tool-call analytics processing approximately 2.5 million calls monthly to conversation-derived product analytics processing more than 1 million daily events, so the earlier MCP metric should not be treated as current-product traction ([founder LinkedIn](https://www.linkedin.com/posts/shubhampalriwala_the-hidden-metrics-behind-successful-mcp-activity-7403334764193034240-2Y7p); [YC launch](https://www.ycombinator.com/companies/agnost-ai)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.23B in 2025, forecast to $8.62B by 2031 at 38.69% CAGR ([Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/agent-observability-and-governance-market), 2026) |
| SAM | No public data found |
| Traction | More than 1M events/day ([YC](https://www.ycombinator.com/companies/agnost-ai), Jul 2026); teams at Google, Exa, and Corgi Insurance reported by founder ([LinkedIn](https://www.linkedin.com/posts/shubhampalriwala_i-would-quit-my-own-company-to-take-this-activity-7463633340013711361-d944), Jul 2026); 77 HN points and 40 comments ([HN archive](https://noobclaw.com/hot-topics/2026-07-15/), Jul 2026) |
| Revenue Signal | Free: 1,000 events/month; Starter: $49/month for 10,000; Pro: $499/month for 1M; Enterprise: custom ([Agnost pricing](https://agnost.ai/), Aug 2026) |
| Founders | Shubham Palriwala (CEO): VIT, Cisco analytics, first Formbricks hire; Parth Ajmera (CTO): IIT Madras CS, Microsoft data pipelines, Infurnia graphics engineering ([YC](https://www.ycombinator.com/companies/agnost-ai)) |
| Competitors | LangChain/LangSmith ($260M, revenue unknown, agent-engineering suite) ([Sacra](https://sacra.com/c/langchain/)); Braintrust ($121M disclosed, revenue unknown, eval-first workflow) ([Braintrust](https://www.braintrust.dev/blog/company)); Arize AI ($135M+, revenue unknown, ML and agent observability) ([Arize](https://arize.com/career/?gh_jid=5978967004)); Langfuse ($4M disclosed, revenue unknown, open-source/self-hosted) ([Langfuse](https://langfuse.com/press)) |
| Moat Signals | More than 1M events/day plus product-specific intent clustering and conversation-tested PR generation ([YC](https://www.ycombinator.com/companies/agnost-ai), Jul 2026) |
| Risk Factors | Suite encroachment ([LangChain](https://www.langchain.com/blog/series-b)); sensitive production-conversation handling ([Agnost docs](https://docs.agnost.ai/)); transition from MCP analytics to conversation product analytics ([founder LinkedIn](https://www.linkedin.com/posts/shubhampalriwala_the-hidden-metrics-behind-successful-mcp-activity-7403334764193034240-2Y7p); [YC](https://www.ycombinator.com/companies/agnost-ai)) |
| Founder Reach | Shubham: X ~3K ([TwStalker](https://ww.twstalker.com/ShubhamInTech)), LinkedIn ~15K ([LinkedIn](https://www.linkedin.com/in/shubhampalriwala)), GitHub top owned repo 27 stars ([GitHub](https://github.com/ShubhamPalriwala)); Parth: X 797 ([TwStalker via search snippet](https://ngntipkolamrenang.twstalker.com/real_shorya)), LinkedIn ~6K ([LinkedIn](https://www.linkedin.com/in/parthajmera)), GitHub top original repo 0 stars ([GitHub](https://github.com/AjmeraParth132?tab=repositories)) |
| Distribution Signals | Company LinkedIn 2,885 followers ([LinkedIn](https://www.linkedin.com/company/agnostai), Jul 2026); Launch HN 77 points and 40 comments ([HN archive](https://noobclaw.com/hot-topics/2026-07-15/), Jul 2026) |
| Emails | shubham@agnost.ai ([YC](https://www.ycombinator.com/companies/agnost-ai)); founders@agnost.ai ([PyPI](https://pypi.org/project/agnost/)) |
