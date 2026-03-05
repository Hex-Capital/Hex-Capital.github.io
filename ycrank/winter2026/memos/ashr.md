# Ashr

> Mimic Users in Your Production Environment to Catch Agent Fails

| Field | Value |
|-------|-------|
| Website | https://ashr.io |
| YC Page | https://www.ycombinator.com/companies/ashr |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Human Resources |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Developer Tools, SaaS, Data Engineering, DevOps |
| YC Partner | Harshita Arora |
| Emails | founders@ashr.io |

## The Idea

**Problem:** Teams building AI agents face a testing gap: agents interact with tools, APIs, and users in complex, branching ways that are difficult to verify manually. Manual QA of agent behavior across varied user journeys takes hours and still misses edge cases. Only 52.4% of organizations run offline evaluations on test sets (LangChain State of Agent Engineering report, 2025 via search snippet), leaving many failures discovered by end users in production.

**Approach:** Ashr generates large volumes of synthetic user journeys — including tool calls, results, and user questions — that exercise an AI agent's behavior across realistic scenarios. Rather than single isolated test cases, Ashr creates end-to-end user stories through the product, detecting errors, inconsistencies, and regressions. The platform supports voice, text, automated website generation, image, file generation, and multimodal inputs. It integrates via SDK and provides a dashboard with dataset management, test timeline visualization, side-by-side regression comparison (expected vs. actual), and prompt versioning with inline diffs and pass-rate tracking (ashr.io). Custom evaluation metrics aligned with business goals can be configured.

**Differentiation:** Ashr differentiates from broader LLM evaluation platforms (e.g., Maxim AI, Braintrust, Langfuse) by focusing specifically on generating realistic, multi-step user journeys rather than single prompt-response evaluations. Compared to Janus (YC X25), which also simulates conversations for agent testing, Ashr emphasizes multimodal support (voice, image, file generation) and custom input types. Compared to Coval, which brings Waymo-style simulation to voice/chat agents, Ashr positions around broader agent modalities and SDK-first integration. Compared to LangWatch, which offers open-source tracing and simulation, Ashr is a closed-source, fully contained platform emphasizing ease of SDK integration and custom eval metrics.

**Business Model:** The product is listed at $0 USD on the website (ashr.io), indicating a free tier. No premium pricing tiers are publicly detailed. [Inferred]: Most likely monetization path is a usage-based or tiered SaaS model, with the free tier used for developer adoption and paid tiers for enterprise-scale test generation, custom eval metrics, and support.

**TAM/SAM:** The global AI-enabled testing market was valued at USD 1.01 billion in 2025 and is projected to grow to USD 4.64 billion by 2034 at a CAGR of 18.30% (Fortune Business Insights, 2025 via search snippet). The broader agentic AI market is projected to grow from USD 7.06 billion in 2025 to USD 93.20 billion by 2032 at a CAGR of 44.6% (MarketsandMarkets, 2025 via search snippet). No public SAM estimate specific to the AI agent evaluation tooling sub-segment was found.

**GTM / Distribution:** The product launched on YC on February 28, 2026 (ashr.io). Current listed customers include UC Berkeley, Stanford University, HumanBehavior, Pax Historia, and SkillSync (ashr.io). [Inferred]: Most likely distribution path is developer-led adoption via SDK integration and documentation, leveraging the YC network and academic relationships for early traction, then expanding to enterprise teams building production AI agents.

## Defensibility

No defensibility signals found in public sources at this stage. [Inferred]: Potential moat could develop via accumulated test data and scenario libraries that improve generation quality over time, and via custom eval metric configurations that create switching costs as teams build institutional testing workflows around the platform. Neither is proven at this stage.

**Market structure:** No structural barrier identified at this stage. Incumbents in observability (Datadog, Weights & Biases) and LLM tooling (LangChain/LangSmith) could add simulation-based testing features. [Inferred]: The structural challenge for incumbents is that simulation-based testing for agents requires a fundamentally different product approach than trace-and-observe monitoring — it requires generative scenario creation rather than passive data collection — which may not align with existing product architectures.

**Commoditization risk:** Multiple well-funded startups operate in adjacent or overlapping space: Janus (YC X25), Coval ($3.3M seed), LangWatch (€1M pre-seed), and Maxim AI ($3M seed) all offer forms of agent evaluation and/or simulation. Open-source tools like Langfuse provide free tracing and evaluation. The barrier to building basic test generation for agents is moderate, though deep multimodal support and high-fidelity scenario generation add complexity.

## Market & Traction

**Traction signals:**
- YC Launch: February 28, 2026 (ashr.io)
- Listed customers/users: UC Berkeley, Stanford University, HumanBehavior, Pax Historia, SkillSync (ashr.io)
- LinkedIn: linkedin.com/company/ashr-io — follower count not retrievable
- Twitter/X: @ashr handle exists (twitter.com/ashr) — count not retrievable; unclear if this is the company's official account or a squatted handle
- Product Hunt: No listing found
- Discord/Slack community: No public data found
- App store / Chrome extension: Not applicable (SDK product)
- Job postings: Company is not hiring per YC page
- Press coverage: No named publication coverage found
- No public revenue figures or user counts beyond the listed customer logos

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Ashr |
|---|---|---|---|
| Janus (YC X25) | YC-backed; specific amount not disclosed | Revenue unknown | Focuses on high-fidelity conversation simulation environments; founded by Carnegie Mellon ML dropouts with Microsoft eval framework experience (hiretop.com, 2025 via search snippet) |
| Coval (YC) | $3.3M seed led by MaC Venture Capital, with General Catalyst (TechCrunch, Jan 2025) | Revenue unknown | Brings Waymo-style simulation methodology to voice/chat agents; founder was tech lead at Waymo (TechCrunch, Jan 2025) |
| Maxim AI | $3M seed led by Elevation Capital (Business Standard, Jun 2024 via search snippet) | Revenue unknown | Full-stack platform covering experimentation, simulation, evaluation, and observability; broader scope beyond testing (getmaxim.ai) |
| LangWatch | €1M pre-seed led by Passion Capital (EU-Startups, Feb 2025 via search snippet) | Revenue unknown | Open-source, OpenTelemetry-native with tracing + simulation; open-source option gives adoption advantage (eu-startups.com, 2025 via search snippet) |
| Braintrust | Not found in search results | Revenue unknown | Focuses on pre-production evals plus continuous post-production monitoring; broader LLM eval scope (braintrust.dev) |

**Why now:** [Inferred]: The rapid proliferation of AI agents in production environments (customer support, automated workflows, coding assistants) during 2024–2025 created demand for testing tools purpose-built for agentic behavior. Agents use tools, make multi-step decisions, and interact in complex user journeys that traditional unit testing and prompt evaluation cannot adequately cover. The shift from single-turn LLM calls to multi-turn, tool-using agents is the specific enabling change that opened this testing gap.

## Founders & Team

**Shreyas Kaps** — Co-founder
- UC Berkeley, studying Data Science and Statistics (LinkedIn via search snippet)
- Built AI agents in finance and DevOps for two years prior to Ashr (YC page)
- Section Leader for Stanford University's Code in Place 2023 program, teaching CS106A (LinkedIn via search snippet)
- Twitter/X: No confirmed public account found
- LinkedIn: linkedin.com/in/shreyas-kaps-5b1a4420b — 500+ connections (LinkedIn via search snippet)
- GitHub: No public repos found under confirmed handle

**Rohan Kulkarni** — Co-founder
- UC Berkeley, EECS (LinkedIn via search snippet)
- Co-founder & CTO of Ask Geri (acquired) — an AI companionship app for seniors using LLM-powered avatar UI (LinkedIn, Rishabh Ambavanekar LinkedIn post via search snippet)
- Interests in software engineering, fintech, and machine learning (LinkedIn via search snippet)
- Twitter/X: @rohankulk (twitter.com/rohankulk) — count not retrievable
- LinkedIn: linkedin.com/in/rohankulkz — 500+ connections (LinkedIn via search snippet)
- GitHub: github.com/rohan-kulkarni-25 — repo details not retrievable

**Co-founder relationship:** Both founders attended UC Berkeley (Shreyas in Data Science/Statistics, Rohan in EECS), indicating they likely met through the university.

**Founder-market fit:** Rohan Kulkarni has a prior exit as co-founder and CTO of Ask Geri (acquired), demonstrating startup execution experience. His background building an AI-powered product gives direct experience with the challenges of testing AI-driven user interactions. Shreyas Kaps's two years building AI agents in finance and DevOps provides firsthand experience with the pain point Ashr addresses — testing complex agent behaviors across diverse scenarios. Both founders' Berkeley EECS/Data Science backgrounds provide technical foundations relevant to building evaluation infrastructure.

## Key Risks

**Crowded competitive space:** At least four funded startups (Janus, Coval, LangWatch, Maxim AI) and multiple open-source projects (Langfuse) target overlapping territory in AI agent evaluation and simulation. Differentiation relies on multimodal breadth and SDK simplicity, which competitors could replicate.

**Platform dependency on agent framework adoption:** Ashr's value scales with the number of production AI agents. If agent deployment slows, consolidates around a few platforms with built-in testing, or if major LLM providers (OpenAI, Anthropic) bundle evaluation tools natively, demand for standalone testing platforms diminishes.

**Name disambiguation challenge:** "ASHR" is also the ticker for a major China A-Shares ETF (Xtrackers Harvest CSI 300), the American Society for the History of Rhetoric (ashr.org), and multiple unrelated X/Twitter handles. This creates SEO and brand confusion that could hamper organic discovery.

**Free-tier-only pricing visible:** No paid pricing tiers are publicly listed. Absence of a visible monetization path at the current stage could delay revenue generation or signal the product is still in validation phase.

**Early customer base concentration in academia:** Listed customers (UC Berkeley, Stanford, HumanBehavior, Pax Historia, SkillSync) appear weighted toward academic and early-stage users rather than enterprise buyers. Conversion to paying enterprise customers is unproven.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI-enabled testing market: $1.01B in 2025, projected $4.64B by 2034 at 18.30% CAGR (Fortune Business Insights via search snippet). Agentic AI market: $7.06B in 2025, projected $93.20B by 2032 at 44.6% CAGR (MarketsandMarkets via search snippet) |
| SAM | No public data found for the AI agent evaluation tooling sub-segment specifically |
| Traction | YC W26 launch Feb 28, 2026 (ashr.io). Listed customers: UC Berkeley, Stanford, HumanBehavior, Pax Historia, SkillSync (ashr.io). No user counts or growth metrics publicly available |
| Revenue Signal | Product listed at $0 USD (ashr.io). No paid tiers or revenue figures publicly disclosed |
| Founders | Shreyas Kaps (Co-founder): UC Berkeley Data Science/Statistics, 2 years building AI agents in finance/DevOps. Rohan Kulkarni (Co-founder): UC Berkeley EECS, co-founder/CTO of Ask Geri (acquired) |
| Competitors | Janus (YC X25, funding undisclosed, revenue unknown — conversation simulation focus), Coval ($3.3M seed, revenue unknown — Waymo-style simulation for voice/chat), Maxim AI ($3M seed, revenue unknown — full-stack eval + observability), LangWatch (€1M pre-seed, revenue unknown — open-source tracing + simulation) |
| Moat Signals | No public data found |
| Risk Factors | Crowded competitive space, name disambiguation challenge, free-tier-only pricing with no visible paid tiers |
| Founder Reach | Shreyas Kaps: Twitter not confirmed, LinkedIn 500+, GitHub not found. Rohan Kulkarni: Twitter @rohankulk (count not retrievable), LinkedIn 500+, GitHub rohan-kulkarni-25 (details not retrievable) |
| Distribution Signals | YC W26 launch (Feb 28, 2026). No Product Hunt listing found. No app store or Chrome extension presence (SDK product) |
| Emails | founders@ashr.io |
