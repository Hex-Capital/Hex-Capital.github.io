# Papaya

> Continuously improve the quality of your AI agents.

| Field | Value |
|-------|-------|
| Website | https://papaya.fyi/ |
| YC Page | https://www.ycombinator.com/companies/papaya |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/papaya)) |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Developer Tools, B2B, Enterprise Software, AI |
| YC Partner | Andrew Miklas ([YC](https://www.ycombinator.com/companies/papaya)) |
| Emails | macy@papaya.fyi ([YC](https://www.ycombinator.com/companies/papaya)), info@papaya.fyi ([LinkedIn](https://www.linkedin.com/company/papayaai)), hello@papaya.fyi ([GitHub](https://github.com/Papaya-AI-Inc)), support@papaya.fyi ([Terms](https://papaya.fyi/terms-of-service)) |

## The Idea

- **Problem:** Engineering teams maintaining production agents manually inspect traces to diagnose regressions after model or prompt changes, diverting time from product development ([YC launch](https://www.ycombinator.com/launches/U2g-papaya-continuous-optimization-for-your-ai-agents)).
- **Approach:** Papaya ingests traces through an SDK or exports, groups recurring workflows, runs 200+ analyses, ranks changes by expected impact, and opens pull requests after approval ([Papaya Research](https://papaya.fyi/research)).
- **Differentiation:** Papaya emphasizes approved PR delivery, whereas Langfuse emphasizes self-hostable tracing/evaluation and Braintrust Loop generates datasets and scorers; LangSmith Engine already offers overlapping code-fix automation ([Papaya](https://papaya.fyi/research), [Langfuse](https://langfuse.com/blog/joining-clickhouse), [Braintrust](https://www.braintrust.dev/blog/loop), [LangSmith](https://www.langchain.com/langsmith/engine)).
- **Business Model:** Developer is free for one agent and 1,000 monthly traces; Business costs $500/month for three agents and 50,000 traces, including automated PRs, Slack and SSO; Enterprise has custom pricing ([pricing, Oct 2026](https://papaya.fyi/pricing)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Papaya offers a free initial workflow analysis, demo-led onboarding, and a YC launch asking production-agent teams for introductions ([Papaya Research](https://papaya.fyi/research), [YC launch](https://www.ycombinator.com/launches/U2g-papaya-continuous-optimization-for-your-ai-agents)).

## Defensibility

- **Moat today:** [Inferred]: Workflow history and integrations could create switching costs, but published functionality does not establish exclusive IP or network effects ([Papaya Research](https://papaya.fyi/research)).
- **Future moat:** [Inferred]: Recorded fixes and subsequent outcomes could improve workflow-specific recommendations, although comparative evidence of this advantage is unavailable ([Papaya](https://papaya.fyi/)).
- **Market structure:** [Inferred]: No structural barrier identified at this stage, because an existing agent-engineering vendor already offers issue detection, fixes and regression monitoring ([LangSmith Engine](https://www.langchain.com/langsmith/engine)).
- **Commoditization risk:** LangChain markets automated prompt/code fixes, while Braintrust offers recurring-pattern discovery and suggested fixes from production traces ([LangSmith Engine](https://www.langchain.com/langsmith/engine), [Braintrust, Sept 2026](https://www.braintrust.dev/blog/patterns-topics-loop-faq)).

## Market & Traction

- **Traction signals:**
  - Company-reported 1.1M+ conversations analyzed, without a disclosed measurement period ([Papaya, accessed Oct 27, 2026](https://papaya.fyi/)).
  - Company-reported typical first-analysis quality improvement of 20%+, latency reduction of 30%, and annualized customer cost savings of $25K+ per large-scale workflow ([Papaya, Oct 2026](https://papaya.fyi/)).
  - Customer testimonial: Sunny Health’s Ayush Tomar reports reduced inference error states, without quantified results ([Papaya, Oct 2026](https://papaya.fyi/)).
  - Customer testimonial: Hamlet’s Jeff Hui reports actionable agent recommendations and easier trace inspection ([Papaya, Oct 2026](https://papaya.fyi/)).
  - Company LinkedIn: 857 followers ([LinkedIn, accessed Oct 27, 2026](https://www.linkedin.com/company/papayaai)).
  - Public tracing SDK: four GitHub stars; the separate prior-product Nile Local repository has five ([GitHub, retrieved Oct 2026](https://github.com/Papaya-AI-Inc)).
  - Estimated September website traffic: approximately 7K, versus 76 in August; this is an external estimate ([SiteData, via search snippet](https://www2.sitedata.dev/fastest-growing-new-websites/tags/use-case/lead-generation)).
  - Coverage in *The American Bazaar* on September 16, 2026 ([publication, via search snippet](https://americanbazaaronline.com/2026/09/16/papaya-ai-y-combinator-fall-2026-488282/)).
  - Product history: Nile Local’s data IDE was documented in April 2026; founders subsequently disclosed pivoting from an analytics agent to its optimization harness, without specifying the pivot date ([Nile](https://getnile.ai/articles/nile-local), [YC launch](https://www.ycombinator.com/launches/U2g-papaya-continuous-optimization-for-your-ai-agents)).
- **Competitors:**
  - **LangSmith / LangChain ($160M raised; reported $12–16M ARR):** latest announced round was $125M led by IVP in October 2025, while Engine directly overlaps with Papaya’s fix automation ([TrueUp](https://www.trueup.io/co/langchain), [LangChain](https://www.langchain.com/blog/series-b), [Engine](https://www.langchain.com/langsmith/engine)); ARR was reported in July 2025 and was not company-confirmed ([TechCrunch](https://techcrunch.com/2025/07/08/langchain-is-about-to-become-a-unicorn-sources-say/)).
  - **Braintrust ($124.3M raised; revenue unknown):** $80M Series B led by ICONIQ in February 2026; Patterns and Loop connect failure discovery with evaluations and suggested fixes ([CB Insights, via search snippet](https://www.cbinsights.com/company/braintrust-data/financials), [funding announcement](https://www.braintrust.dev/blog/announcing-series-b), [product documentation](https://www.braintrust.dev/blog/patterns-topics-loop-faq)).
  - **Langfuse ($4M disclosed seed funding; revenue unknown):** November 2023 seed led by Lightspeed, General Catalyst/La Famiglia and YC, followed by acquisition by ClickHouse in January 2026; offers open-source, self-hostable observability/evaluation ([Langfuse press](https://langfuse.com/press), [acquisition](https://langfuse.com/blog/joining-clickhouse)).
- **Why now:** [Inferred]: Production deployment of multi-step agents creates trace volumes beyond manual inspection, increasing demand for automated diagnosis ([Braintrust CEO, Feb 2026](https://www.braintrust.dev/blog/announcing-series-b)).

## Founders & Team

- **Macy Mody (Founder/CEO):**
  - Background: University of Michigan undergraduate and Harvard MBA; led SafeBase GTM/operations from $0–10M ARR through acquisition, following HqO and AmEx Digital Labs roles ([YC founder profile](https://www.ycombinator.com/founders/macy-mody)).
  - Twitter/X: @macyymay, 68 followers ([teapawt mirror, Oct 27, 2026](https://teapawt.net/macyymay)).
  - LinkedIn: Profile found; headline not retrievable ([profile](https://www.linkedin.com/in/macy-berg)).
  - GitHub: No public repos found.
- **Niyaz Puzhikkunnath (Founder/CPO):**
  - Background: Rajiv Gandhi Institute of Technology alumnus; Amazon senior engineer for 10+ years across ML and agent evaluation, previously an early Zovi engineer ([YC founder profile](https://www.ycombinator.com/founders/niyaz-puzhikkunnath)).
  - Twitter/X: @niyazpk, 907 followers ([teapawt mirror, Oct 27, 2026](https://teapawt.net/niyazpk)).
  - LinkedIn: Profile lists Papaya; headline not retrievable ([LinkedIn, via search snippet](https://ca.linkedin.com/in/niyazpk)).
  - GitHub: @niyazpk; Chess.js has 25 stars ([GitHub, Oct 2026](https://github.com/niyazpk/Chess.js)).
- **Faiz Vadakkumpadath (Founder):**
  - Background: Rajiv Gandhi Institute of Technology alumnus; Amazon senior data engineer for ten years, previously IBM on M-Pesa; co-founded OpenReporting ([YC founder profile](https://www.ycombinator.com/founders/faiz-vadakkumpadath)).
  - Twitter/X: @vpfaiz, 226 followers ([teapawt mirror, Oct 27, 2026](https://teapawt.net/vpfaiz)).
  - LinkedIn: About section describes Amazon data engineering; headline not retrievable ([LinkedIn, via search snippet](https://www.linkedin.com/in/vpfaiz)).
  - GitHub: @vpfaiz; cron-builder-ui has four stars ([GitHub, Oct 2026](https://github.com/vpfaiz/cron-builder-ui)).
- **Co-founder relationship:** Niyaz and Faiz share Amazon employment and Rajiv Gandhi Institute of Technology affiliation ([Niyaz](https://www.ycombinator.com/founders/niyaz-puzhikkunnath), [Faiz](https://www.ycombinator.com/founders/faiz-vadakkumpadath)).
- **Founder-market fit:** Documented experience combines agent evaluation, data infrastructure and SaaS GTM; named backers are YC, Engineering Capital and Everywhere Ventures ([founder profiles](https://www.ycombinator.com/companies/papaya), [Papaya Research](https://papaya.fyi/research)).

## Key Risks

- **Feature convergence:** [Inferred]: LangSmith Engine’s overlapping diagnosis and code-fix functionality reduces differentiation based solely on PR automation ([LangSmith](https://www.langchain.com/langsmith/engine)).
- **Evaluation correctness:** [Inferred]: Automatically generated judges could misclassify success; Papaya permits edited rubrics, existing evaluations and user feedback as controls ([Papaya](https://papaya.fyi/)).
- **Data-access requirements:** [Inferred]: Full traces and optional code access can create enterprise adoption friction; Papaya describes redaction, encryption and an SOC 2 Type 2 audit completed with its final report pending ([Papaya](https://papaya.fyi/)).
- **Name confusion:** [Inferred]: An unrelated consumer relationship app also uses Papaya, requiring domain verification before attributing funding or downloads ([consumer Papaya, via search snippet](https://papaya.tepoyan.com/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Company-reported 1.1M+ conversations analyzed; Sunny Health and Hamlet testimonials ([Papaya, Oct 2026](https://papaya.fyi/)) |
| Revenue Signal | Free Developer; Business $500/month; custom Enterprise pricing ([pricing, Oct 2026](https://papaya.fyi/pricing)) |
| Founders | Macy Mody, CEO: SafeBase, Harvard MBA; Niyaz Puzhikkunnath, CPO: Amazon ML; Faiz Vadakkumpadath, Founder: Amazon data infrastructure, OpenReporting ([YC](https://www.ycombinator.com/companies/papaya)) |
| Competitors | LangSmith/LangChain ($160M raised, reported $12–16M ARR, overlapping fix automation); Braintrust ($124.3M raised, revenue unknown, evaluation workflows); Langfuse ($4M disclosed seed, revenue unknown, self-hosting) ([TrueUp](https://www.trueup.io/co/langchain), [TechCrunch](https://techcrunch.com/2025/07/08/langchain-is-about-to-become-a-unicorn-sources-say/), [CB Insights, via search snippet](https://www.cbinsights.com/company/braintrust-data/financials), [Langfuse](https://langfuse.com/press)) |
| Moat Signals | No public data found |
| Risk Factors | Overlapping incumbent functionality, trace/code access requirements, automatically generated judges ([LangSmith](https://www.langchain.com/langsmith/engine), [Papaya](https://papaya.fyi/)) |
| Founder Reach | Macy: X 68; Niyaz: X 907; Faiz: X 226 ([teapawt mirrors, Oct 27, 2026](https://teapawt.net/macyymay), [Niyaz](https://teapawt.net/niyazpk), [Faiz](https://teapawt.net/vpfaiz)) |
| Distribution Signals | LinkedIn 857 followers; tracing SDK four stars ([LinkedIn](https://www.linkedin.com/company/papayaai), [GitHub, Oct 2026](https://github.com/Papaya-AI-Inc)) |
| Emails | macy@papaya.fyi, info@papaya.fyi, hello@papaya.fyi, support@papaya.fyi ([YC](https://www.ycombinator.com/companies/papaya), [LinkedIn](https://www.linkedin.com/company/papayaai), [GitHub](https://github.com/Papaya-AI-Inc), [Terms](https://papaya.fyi/terms-of-service)) |
