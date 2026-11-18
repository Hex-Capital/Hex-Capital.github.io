# Papaya

> Continuously improve the quality of your AI agents.

| Field | Value |
|-------|-------|
| Website | https://papaya.fyi/ |
| YC Page | https://www.ycombinator.com/companies/papaya |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/papaya)) |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Developer Tools, B2B, Enterprise Software, AI |
| YC Partner | Andrew Miklas ([Y Combinator](https://www.ycombinator.com/companies/papaya)) |
| Emails | macy@papaya.fyi (CEO, [Launch YC](https://www.ycombinator.com/launches/U2g-papaya-continuous-optimization-for-your-ai-agents)), info@papaya.fyi (general inquiries, [Papaya LinkedIn](https://www.linkedin.com/company/papayaai)), support@papaya.fyi (support and privacy, [Papaya Privacy Policy](https://papaya.fyi/privacy-policy)) |

## The Idea

- **Problem:** Engineering teams running production AI agents manually inspect traces to diagnose regressions, context bloat, and failed tool calls, taking time away from building features ([Launch YC](https://www.ycombinator.com/launches/U2g-papaya-continuous-optimization-for-your-ai-agents)).
- **Approach:** Papaya ingests traces through its SDK or imports, groups runs by use case, applies 200+ analyses, ranks fixes by estimated impact on quality, latency, and cost, and opens pull requests for approved changes when code is connected ([Papaya](https://papaya.fyi/)).
- **Differentiation:** Papaya delivers impact-ranked fixes with trace evidence as code pull requests, while LangSmith pairs trace insights with agent deployment and governance, Braintrust offers recurring trace analysis and debugger workflows, and Langfuse emphasizes self-hostable tracing and prompt versioning ([Papaya](https://papaya.fyi/), [LangChain](https://www.langchain.com/blog/series-c), [Braintrust](https://www.braintrust.dev/blog/patterns-topics-loop-faq), [Langfuse](https://langfuse.com/press)).
- **Business Model:** Trace-volume tiers include free Developer for 1 agent and 1,000 monthly traces, Business at $500/month for up to 3 agents and 50,000 monthly traces with automated pull requests, and custom Enterprise pricing ([Papaya Pricing, Nov 2026](https://papaya.fyi/pricing)).
- **TAM/SAM:** The broader global agentic AI monitoring, analytics, and observability tools market was estimated at $539.4M in 2025 with 31.4% forecast CAGR through 2032, while Papaya’s serviceable segment has no public estimate ([Global Industry Analysts, May 2026](https://www.marketresearch.com/Market-Glass-Inc-v1039/Agentic-AI-Monitoring-Analytics-Observability-44877166/)).
- **GTM / Distribution:** Papaya offers demo-led onboarding and a free analysis of one workflow from a raw trace export, and the founders solicit introductions through Launch YC ([Papaya](https://papaya.fyi/), [Launch YC](https://www.ycombinator.com/launches/U2g-papaya-continuous-optimization-for-your-ai-agents)).

## Defensibility

- **Moat today:** Papaya reports 200+ analyses and links each recommendation to specific production runs, providing evidence of an implemented analysis library ([Papaya](https://papaya.fyi/)).
- **Future moat:** [Inferred]: Anonymized patterns from shipped fixes could improve recommendation ranking as usage grows, but cross-customer performance gains have no public validation ([Papaya Terms of Service](https://papaya.fyi/terms-of-service), [Papaya](https://papaya.fyi/)).
- **Market structure:** No structural barrier identified at this stage ([Braintrust](https://www.braintrust.dev/blog/patterns-topics-loop-faq), [Langfuse](https://langfuse.com/press)).
- **Commoditization risk:** Braintrust already groups production failures and automates recurring trace analyses, giving it an existing workflow into which it could add code remediation ([Braintrust](https://www.braintrust.dev/blog/patterns-topics-loop-faq)).

## Market & Traction

- **Traction signals:**
  - **Pivot:** The founders moved from Nile’s analytics agent and data stack to its internal agent-optimization harness, with Papaya trace SDK updates public by June 2026 ([Nile Articles](https://getnile.ai/articles), [Papaya June product update](https://papaya.fyi/blog/product-updates-june-16), [Launch YC](https://www.ycombinator.com/launches/U2g-papaya-continuous-optimization-for-your-ai-agents)).
  - First paying customers discussed by the founders, with customer count and revenue undisclosed in the episode notes ([Fondo START, Oct 15, 2026, 03:34](https://podcasts.apple.com/us/podcast/start-faiz-vadakkumpadath-niyaz-puzhikkunnath-co-founders/id1790754910?i=1000796564187)).
  - 1.1M+ conversations analyzed ([Papaya, accessed Nov 2026](https://papaya.fyi/)).
  - Company-reported 20% typical first-workflow success-rate gain, 30% latency reduction, and $25K+ annualized savings per large-scale workflow ([Papaya, accessed Nov 2026](https://papaya.fyi/)).
  - Customer testimonial: Sunny Health’s Ayush Tomar reported fewer inference errors ([Papaya, accessed Nov 2026](https://papaya.fyi/)).
  - Customer testimonial: Hamlet’s Jeff Hui reported that the trace viewer helped him understand agent behavior faster ([Papaya, accessed Nov 2026](https://papaya.fyi/)).
  - 924 LinkedIn followers and 40+ AI and engineering leaders contacted at YC’s Early Access Network event ([Papaya LinkedIn, Nov 2026](https://www.linkedin.com/company/papayaai)).
  - 6,900 estimated September website visits, based on a small traffic panel ([Mindspent, Sep 2026](https://mindspent.com/c/papaya)).
  - 4 GitHub stars for Papaya’s TypeScript tracing SDK ([GitHub, Nov 2026](https://github.com/Papaya-AI-Inc/papaya-ai)).
  - 0 open jobs on YC’s job board ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/papaya/jobs)).
  - Press coverage of YC acceptance and product mechanics ([The American Bazaar, Sep 16, 2026](https://americanbazaaronline.com/2026/09/16/papaya-ai-y-combinator-fall-2026-488282/), [MoneyMakers, Nov 2026](https://www.moneymakers.com/articles/news/papaya-ai-agent-traces-proposed-fixes)).
- **Competitors:**
  - **LangChain / LangSmith** ($460M raised, revenue unknown): combines trace insights with deployment and governance, with a $300M Series C led by CapitalG in November 2026 ([LangChain](https://www.langchain.com/blog/series-c), [company release via Morningstar search snippet](https://www.morningstar.com/news/business-wire/20261113716429/langchain-raises-300m-to-enable-every-company-to-own-their-intelligence)).
  - **Braintrust** ($121.1M raised across tracked rounds, revenue unknown): runs recurring trace analyses and diagnoses failure patterns, with an $80M Series B led by ICONIQ in February 2026 ([MTS Atlas](https://api.intelligence.mts.now/atlas/braintrust), [ICONIQ](https://www.iconiq.com/growth/insights/partnering-with-braintrust-the-observability-layer-for-ai), [Braintrust](https://www.braintrust.dev/blog/patterns-topics-loop-faq)).
  - **Langfuse** ($4M raised, revenue unknown): offers self-hosted tracing and versioned prompts, with a November 2023 seed led by Lightspeed, General Catalyst’s La Famiglia, and YC, followed by acquisition by ClickHouse in January 2026 ([Langfuse](https://langfuse.com/press)).
- **Why now:** [Inferred]: Agent-framework adoption among Datadog’s observed organizations rose from just over 9% in early 2025 to nearly 18% in early 2026, expanding the workflows that generate traces for tools like Papaya ([Datadog, 2026](https://www.datadoghq.com/state-of-ai-engineering/)).

## Founders & Team

- **Macy Mody (Founder/CEO):**
  - Background: University of Michigan undergraduate and Harvard MBA, led SafeBase GTM and operations through its acquisition by Drata, led analytics products at HqO, and managed investments at AmEx Digital Labs ([YC](https://www.ycombinator.com/founders/macy-mody), [Drata](https://drata.com/blog/acquiring-safebase)); business email macy@papaya.fyi ([Papaya](https://papaya.fyi/authors/macy-mody)).
  - Twitter/X: @macyymay, 71 followers ([X mirror, Nov 2026](https://xitter.cf/macyymay)).
  - LinkedIn: [Public profile](https://www.linkedin.com/in/macy-berg), headline not retrievable.
  - GitHub: No public repos found.
- **Niyaz Puzhikkunnath (Founder/CPO):**
  - Background: Attended Rajiv Gandhi Institute of Technology, Kottayam, built ML systems and agent evaluations at Amazon, and was an early engineer at Zovi.com ([LinkedIn](https://ca.linkedin.com/in/niyazpk), [YC](https://www.ycombinator.com/founders/niyaz-puzhikkunnath)). Business email: No public data found.
  - Twitter/X: @niyazpk, 949 followers ([X mirror, Nov 2026](https://nitter.gq/niyazpk)).
  - LinkedIn: [Public profile](https://ca.linkedin.com/in/niyazpk), headline not retrievable.
  - GitHub: @niyazpk, Chess.js, 25 stars ([GitHub, Nov 2026](https://github.com/niyazpk/Chess.js)).
- **Faiz Vadakkumpadath (Founder):**
  - Background: Attended Rajiv Gandhi Institute of Technology, Kottayam, led enterprise data lake work at Amazon, scaled M-PESA at IBM, and co-founded OpenReporting ([LinkedIn](https://www.linkedin.com/in/vpfaiz), [YC](https://www.ycombinator.com/founders/faiz-vadakkumpadath)). Business email: No public data found.
  - Twitter/X: @vpfaiz, 246 followers ([X mirror, Nov 2026](https://www.xitter.gq/vpfaiz)).
  - LinkedIn: [Public profile](https://www.linkedin.com/in/vpfaiz), headline not retrievable.
  - GitHub: @vpfaiz, cron-builder-ui, 4 stars ([GitHub, Nov 2026](https://github.com/vpfaiz/cron-builder-ui)).
- **Co-founder relationship:** Puzhikkunnath and Vadakkumpadath both attended Rajiv Gandhi Institute of Technology, Kottayam, and previously worked at Amazon ([Puzhikkunnath LinkedIn](https://ca.linkedin.com/in/niyazpk), [Vadakkumpadath LinkedIn](https://www.linkedin.com/in/vpfaiz), [YC](https://www.ycombinator.com/companies/papaya)).
- **Founder-market fit:** The team brings agent evaluation, data infrastructure, and enterprise GTM experience, and Papaya lists YC, Engineering Capital, and Everywhere Ventures as backers ([YC](https://www.ycombinator.com/companies/papaya), [Papaya](https://papaya.fyi/)).

## Key Risks

- **Sensitive trace data:** Production traces can contain personal data, and Papaya’s privacy policy says automated scrubbing may miss it and provides for customer-side filtering before transmission ([Papaya Privacy Policy](https://papaya.fyi/privacy-policy)).
- **Remediation accuracy:** Papaya estimates fix impact from traces, with less specific findings on partial exports, and supports trace-level review and post-deployment regression monitoring ([Papaya](https://papaya.fyi/), [Launch YC](https://www.ycombinator.com/launches/U2g-papaya-continuous-optimization-for-your-ai-agents)).
- **Bundled substitution:** Braintrust already automates recurring trace diagnosis, while Papaya can mitigate replacement friction by importing traces from existing observability tools ([Braintrust](https://www.braintrust.dev/blog/patterns-topics-loop-faq), [Papaya](https://papaya.fyi/)).
- **Name ambiguity:** Papaya shares its name with payroll provider Papaya Global, making the `papaya.fyi` domain and YC profile useful for attribution ([Papaya Global](https://www.papayaglobal.com/about/), [YC](https://www.ycombinator.com/companies/papaya)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader category $539.4M in 2025, 31.4% forecast CAGR through 2032 ([Global Industry Analysts, May 2026](https://www.marketresearch.com/Market-Glass-Inc-v1039/Agentic-AI-Monitoring-Analytics-Observability-44877166/)) |
| SAM | No public data found |
| Traction | 1.1M+ conversations analyzed and testimonials from Sunny Health and Hamlet ([Papaya, Nov 2026](https://papaya.fyi/)), 40+ event contacts ([Papaya LinkedIn, Nov 2026](https://www.linkedin.com/company/papayaai)), first paying customers discussed ([Fondo START, Oct 2026](https://podcasts.apple.com/us/podcast/start-faiz-vadakkumpadath-niyaz-puzhikkunnath-co-founders/id1790754910?i=1000796564187)) |
| Revenue Signal | Free Developer, $500/month Business, custom Enterprise ([Papaya Pricing, Nov 2026](https://papaya.fyi/pricing)) |
| Founders | Macy Mody (CEO), SafeBase GTM and Harvard MBA. Niyaz Puzhikkunnath (CPO), Amazon agent evaluation and Zovi.com. Faiz Vadakkumpadath (Founder), Amazon data lake and OpenReporting ([YC](https://www.ycombinator.com/companies/papaya)) |
| Competitors | LangChain ($460M raised, revenue unknown, agent deployment and governance), Braintrust ($121.1M raised, revenue unknown, recurring trace diagnosis), Langfuse ($4M raised, revenue unknown, self-hosted tracing and prompt versioning) ([LangChain release via Morningstar search snippet](https://www.morningstar.com/news/business-wire/20261113716429/langchain-raises-300m-to-enable-every-company-to-own-their-intelligence), [MTS Atlas](https://api.intelligence.mts.now/atlas/braintrust), [Langfuse](https://langfuse.com/press)) |
| Moat Signals | 200+ production-trace analyses with run-level evidence ([Papaya, Nov 2026](https://papaya.fyi/)) |
| Risk Factors | Sensitive trace data, reduced specificity on partial traces, overlapping automated diagnosis ([Papaya Privacy Policy](https://papaya.fyi/privacy-policy), [Papaya](https://papaya.fyi/), [Braintrust](https://www.braintrust.dev/blog/patterns-topics-loop-faq)) |
| Founder Reach | Macy: X 71, LinkedIn 5K via search snippet ([X mirror](https://xitter.cf/macyymay), [LinkedIn](https://www.linkedin.com/in/macy-berg)). Niyaz: X 949, LinkedIn 2K, Chess.js 25 stars ([X mirror](https://nitter.gq/niyazpk), [LinkedIn](https://ca.linkedin.com/in/niyazpk), [GitHub](https://github.com/niyazpk/Chess.js)). Faiz: X 246, LinkedIn 927, cron-builder-ui 4 stars ([X mirror](https://www.xitter.gq/vpfaiz), [LinkedIn](https://www.linkedin.com/in/vpfaiz), [GitHub](https://github.com/vpfaiz/cron-builder-ui)) |
| Distribution Signals | Launch YC ([YC, Fall 2026](https://www.ycombinator.com/launches/U2g-papaya-continuous-optimization-for-your-ai-agents)), 924 LinkedIn followers ([Papaya LinkedIn, Nov 2026](https://www.linkedin.com/company/papayaai)), 6,900 estimated website visits ([Mindspent, Sep 2026](https://mindspent.com/c/papaya)), 4 SDK stars ([GitHub, Nov 2026](https://github.com/Papaya-AI-Inc/papaya-ai)) |
| Emails | macy@papaya.fyi (CEO, [Launch YC](https://www.ycombinator.com/launches/U2g-papaya-continuous-optimization-for-your-ai-agents)), info@papaya.fyi (general inquiries, [Papaya LinkedIn](https://www.linkedin.com/company/papayaai)), support@papaya.fyi (support and privacy, [Papaya Privacy Policy](https://papaya.fyi/privacy-policy)) |
