# Agnost AI

> Product analytics for teams building conversational agents

| Field | Value |
|-------|-------|
| Website | https://agnost.ai |
| YC Page | https://www.ycombinator.com/companies/agnost-ai |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Analytics |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Analytics, Monitoring |
| YC Partner | Tyler Bosmeny |
| Emails | No public data found |

## The Idea

- **Problem:** Teams building chat/voice AI agents and MCP servers lack visibility into where users get stuck, drop off, or churn in production conversations (agnost.ai landing page).
- **Approach:** Ingests production AI conversations via OpenTelemetry-native SDK, clusters recurring intents/frustration/failure patterns, and opens PRs against prompts, tools, and harnesses to improve the agent (agnost.ai landing page).
- **Differentiation:** vs. LangSmith/Braintrust/Helicone (trace + eval dashboards) — Agnost auto-generates code PRs to fix identified failures rather than surfacing traces for engineers to interpret ([Inferred]: based on agnost.ai feature list vs. competitor product pages).
- **Business Model:** Freemium SaaS — Free tier (1K messages/mo, 7-day retention), Pro at $499/mo (100K messages/mo, 90-day retention), Enterprise custom (agnost.ai pricing page).
- **TAM/SAM:** AI agent observability market estimated USD 0.4B in 2025, projected USD 7.1B by 2035 at 33.3% CAGR (Astute Analytica, 2025); MCP protocol had 97M+ downloads and 10K+ active public servers by 2026 (Requesty blog, 2026).
- **GTM / Distribution:** OpenTelemetry-native, "2-minute setup" self-serve integration, plus content/thought-leadership (podcast appearances on "The Context" MCP Developers Summit, Nov 2025) (agnost.ai; MCP Developers Summit on X, Nov 2025).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond named customer logos (Google, Exa, Corgi Insurance, Orchid, Lopus AI, Odysser, Comp AI listed on agnost.ai).
- **Future moat:** [Inferred]: Proprietary dataset of clustered failure patterns across production agent conversations could improve auto-PR quality over time; unproven now because customer base and message volume are undisclosed.
- **Market structure:** [Inferred]: No structural barrier identified at this stage; incumbents LangSmith/Braintrust could ship auto-PR generation on top of existing trace data.
- **Commoditization risk:** LangSmith ($70M Series B, Sequoia/Benchmark/IVP; Medium 2026 comparison), Braintrust ($80M Series B at $800M valuation, Iconiq/a16z, Feb 2026; Medium 2026 comparison), Langfuse (acquired by Clickhouse Jan 2026; Medium 2026 comparison), and Arize ($70M Series C Feb 2025; getmaxim.ai) all have engineering capacity and data to replicate an auto-PR feature.

## Market & Traction

- **Traction signals:**
  - Customer logos on site: Google, Exa, Corgi Insurance, Orchid, Lopus AI, Odysser, Comp AI (agnost.ai landing page).
  - Customer testimonial: "Odysser surfaced 1,247 feature requests" (agnost.ai landing page).
  - Customer testimonial: "Lopus AI merged 16/18 autonomous PRs" (agnost.ai landing page).
  - Podcast appearances: The Context podcast (MCP Developers Summit), Nov 2025, two episodes featuring Shubham Palriwala (YouTube, MCP Developers Summit on X).
  - Press: WorkOS blog feature article dated Nov 10, 2025 (workos.com/blog).
  - Dashboard demo metrics cited by WorkOS: 6,026 total tool invocations, 97.34% success rate (workos.com, Nov 2025) — sample/demo, not aggregate.
  - Prior EF acceptance for Parth Ajmera with $250K IC (LinkedIn post by Akash, activity 7455298773657767936).
  - LinkedIn post on "Global Statistics for MCP Servers and AI Agents" published on company page (linkedin.com/company/agnostai).
  - Company Twitter/X: @agnostai; company LinkedIn: linkedin.com/company/agnostai (follower counts not retrievable).
- **Competitors:**
  - LangSmith ($70M Series B, revenue unknown; via Medium 2026 comparison): trace + eval platform for LangChain/LangGraph stack, no auto-PR generation.
  - Braintrust ($80M Series B at $800M valuation Feb 2026, revenue unknown): eval-first quality management platform with CI/CD gates, not conversation intent clustering.
  - Arize ($70M Series C Feb 2025, revenue unknown; getmaxim.ai): enterprise LLM monitoring platform, broader/heavier than Agnost's dev-tool positioning.
  - Helicone (acquired by Mintlify Mar 2026; via search snippet): open-source AI gateway focused on request logging, not intent clustering or auto-PRs.
  - Langfuse (acquired by Clickhouse Jan 2026; via search snippet): self-hosted trace/eval platform, no auto-PR mechanism.
- **Why now:** [Inferred]: MCP protocol crossed 97M downloads with 10K+ active public servers in early 2026 (Requesty blog, 2026), creating a new agent-tooling surface without incumbent observability coverage — Agnost's MCP analytics product ships into that gap.

## Founders & Team

- **Shubham Palriwala (Co-Founder / CEO):**
  - Background: B.Tech Computer Science (Information Security specialization), Vellore Institute of Technology 2019–2023; prior early-engineer/founding roles at Onboarding.club and Formbricks; Cisco intern (FreeRADIUS, Kafka); OSS: GSoC at OWASP Juice Shop, GSoD at OpenMined, LFX at Kyverno; Certified Ethical Hacker v11 (LinkedIn, getprog.ai).
  - Twitter/X: @ShubhamInTech (follower count not retrievable).
  - LinkedIn: "Founder @ Agnost AI (YC S26)" — ~30K followers per search snippet (linkedin.com/in/shubhampalriwala).
  - GitHub: @ShubhamPalriwala, 213 followers per search snippet; top repo star count not retrievable (github.com/ShubhamPalriwala).
- **Parth Ajmera (Co-Founder / CTO):**
  - Background: B.Tech Computer Science, IIT Madras 2019–2023; prior roles at Microsoft, Cisco, Infurnia, CoinHarbour; accepted to Entrepreneurs First with earliest-in-batch $250K IC; won 10 hackathons prior to founding (LinkedIn linkedin.com/in/parthajmera; Akash LinkedIn post activity 7455298773657767936).
  - Twitter/X: @prrthh132 (follower count not retrievable).
  - LinkedIn: "Founder, Agnost AI (YC S26)" (linkedin.com/in/parthajmera).
  - GitHub: @AjmeraParth132; top repo/star count not retrievable (github.com/AjmeraParth132).
- **Co-founder relationship:** Both were in the Entrepreneurs First cohort together prior to YC S26 per LinkedIn post referencing "Shubham Palriwala and Parth Ajmera are forces" at EF (LinkedIn activity 7455298773657767936).
- **Founder-market fit:** Palriwala's five years of OpenTelemetry-adjacent observability/OSS work (Kyverno, OpenMined) and Ajmera's Microsoft/Cisco engineering background align with the OpenTelemetry-native, MCP-tooling scope of the product ([Inferred] from LinkedIn histories); YC S26 accepted, EF-backed prior to YC (getprog.ai; Akash LinkedIn post).

## Key Risks

- **Product-scope ambiguity:** Public materials position the product as both "conversational agent analytics" (YC page) and "MCP server analytics" (WorkOS blog Nov 2025; agnost.ai/blog/mcp-analytics-guide). [Inferred]: A pivot or dual-track scope creates messaging and roadmap risk; the site's homepage still emphasizes conversational agents while press coverage emphasizes MCP.
- **Incumbent substitution:** LangSmith ($70M Series B), Braintrust ($80M Series B, $800M valuation Feb 2026), Arize ($70M Series C), and Langfuse (acquired by Clickhouse) can add auto-PR generation on top of existing trace data (Medium 2026 comparison; getmaxim.ai). Mitigation: none disclosed.
- **Consolidation of the observability layer:** Helicone acquired by Mintlify Mar 2026 and Langfuse by Clickhouse Jan 2026 (search snippets) indicate rapid roll-up of independent observability vendors, compressing standalone-vendor exit options.
- **Language/framework coverage gap:** Product currently supports Python MCP servers with TypeScript and Go on the roadmap (WorkOS, Nov 2025); TypeScript is the dominant agent-runtime language, limiting near-term adoption until shipped.
- **Undisclosed revenue and paying-customer count:** Named logos (Google, Exa) appear on the landing page but there is no public data on paid vs. free usage or ARR (agnost.ai).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI agent observability USD 0.4B (2025) → USD 7.1B (2035), 33.3% CAGR (Astute Analytica, 2025) |
| SAM | No public data found |
| Traction | Customer logos: Google, Exa, Corgi Insurance, Orchid, Lopus AI, Odysser, Comp AI (agnost.ai); customer testimonial "Odysser surfaced 1,247 feature requests" (agnost.ai); customer testimonial "Lopus AI merged 16/18 autonomous PRs" (agnost.ai); 2 podcast appearances on The Context (MCP Developers Summit, Nov 2025); WorkOS blog feature (Nov 10, 2025) |
| Revenue Signal | Free tier 1K msgs/mo; Pro $499/mo for 100K msgs/mo, 90-day retention; Enterprise custom (agnost.ai pricing page) |
| Founders | Shubham Palriwala (CEO): VIT B.Tech InfoSec, ex-Formbricks/Onboarding.club, GSoC/GSoD/LFX OSS. Parth Ajmera (CTO): IIT Madras B.Tech CS, ex-Microsoft/Cisco, EF alum with $250K IC. |
| Competitors | LangSmith ($70M Series B, revenue unknown, LangChain-native trace/eval, no auto-PR); Braintrust ($80M Series B at $800M valuation Feb 2026, revenue unknown, eval-first CI/CD); Arize ($70M Series C Feb 2025, revenue unknown, enterprise LLM monitoring); Helicone (acquired by Mintlify Mar 2026, revenue unknown, OSS AI gateway); Langfuse (acquired by Clickhouse Jan 2026, revenue unknown, self-hosted trace/eval) |
| Moat Signals | No public data found |
| Risk Factors | Product-scope ambiguity (conversational agents vs. MCP servers), incumbent substitution by well-funded LLM observability vendors, TypeScript/Go language gap |
| Founder Reach | Shubham Palriwala: Twitter @ShubhamInTech (count not retrievable), LinkedIn ~30K followers (search snippet), GitHub @ShubhamPalriwala 213 followers (search snippet). Parth Ajmera: Twitter @prrthh132 (count not retrievable), LinkedIn (count not retrievable), GitHub @AjmeraParth132 (count not retrievable). |
| Distribution Signals | The Context podcast × 2 episodes (MCP Developers Summit, Nov 2025); WorkOS blog feature (Nov 10, 2025); YC S26 batch page (ycombinator.com); OpenTelemetry-native SDK "2-minute setup" (agnost.ai) |
| Emails | No public data found |

Sources:
- [Agnost AI website](https://agnost.ai)
- [Agnost AI YC page](https://www.ycombinator.com/companies/agnost-ai)
- [WorkOS blog: What is Agnost AI](https://workos.com/blog/what-is-agnost-ai-mcp-server-analytics)
- [The Context — Hidden Metrics of MCP Servers (YouTube)](https://www.youtube.com/watch?v=9BXrlbFlAQs)
- [The Context — MCP Analytics Q&A (YouTube)](https://www.youtube.com/watch?v=JVpbUbS73U4)
- [MCP Developers Summit on X](https://x.com/mcpsummit/status/1990439589882827263)
- [Shubham Palriwala LinkedIn](https://www.linkedin.com/in/shubhampalriwala/)
- [Parth Ajmera LinkedIn](https://www.linkedin.com/in/parthajmera)
- [Shubham Palriwala GitHub](https://github.com/ShubhamPalriwala)
- [Parth Ajmera GitHub](https://github.com/AjmeraParth132)
- [Akash LinkedIn post on Agnost founders at EF](https://www.linkedin.com/posts/akashizzle_shubham-palriwala-and-parth-ajmera-are-forces-activity-7455298773657767936-Wdg8)
- [Astute Analytica — AI Agent Observability Market](https://www.astuteanalytica.com/industry-report/ai-agent-observability-market)
- [Requesty — MCP Ecosystem 2026](https://www.requesty.ai/blog/mcp-ecosystem-2026-building-agent-tool-infrastructure-that-scales)
- [Medium — LangSmith vs Arize vs Braintrust 2026](https://anudeepsri.medium.com/langsmith-vs-arize-vs-braintrust-e397e4728a76)
- [getmaxim — 5 AI Observability Platforms Compared](https://www.getmaxim.ai/articles/5-ai-observability-platforms-compared-maxim-ai-arize-helicone-braintrust-langfuse/)
