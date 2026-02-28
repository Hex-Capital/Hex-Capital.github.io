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

## The Idea

**Problem:** Teams building AI agents face a testing gap: manually verifying agent behavior across diverse user journeys is slow, error-prone, and scales poorly. Agents make tool calls, handle multi-step workflows, and produce outputs across modalities (voice, text, image, file generation), and bugs surface only after customers encounter them. Existing approaches rely on one-off test cases or manual QA, which cannot cover the breadth of realistic usage patterns.

**Approach:** Ashr generates large volumes of synthetic user journeys that exercise an agent's tool calls, schemas, and prompts. Rather than single-shot test cases, the platform produces authentic multi-step user stories through the product, then scores results, surfaces failures alongside ideal answers, and traces every tool call path. Users register their agent's tool definitions (function names, parameters, return types), configure schemas and test prompts, and the platform runs the full evaluation suite. Results include accuracy and tool-selection scoring, regression tracking across runs, and side-by-side comparison of actual vs. ideal outputs (ashr.io). The product integrates as a Python SDK (`pip install ashr-labs`, Python 3.10+) with a web dashboard at lab.ashr.io (ashr.io/docs.html). It supports voice, text, automated website generation, image, file generation, and multimodal inputs (YC company page).

**Differentiation:** Ashr emphasizes generating large-scale, realistic user journeys rather than individual evaluation metrics or traces. Competitors like Braintrust and Langfuse focus on observability and logging of production LLM calls with evaluation layered on top. Confident AI/DeepEval provides a unit-testing framework for LLM outputs. Maxim AI offers end-to-end simulation and observability. Ashr's stated differentiator is its focus on simulating authentic multi-step user stories across the full product surface, including multimodal inputs, with custom evaluation metrics aligned to business goals (ashr.io). Ashr also offers to generate custom input types or make modifications for individual customers (YC company page).

**Business Model:** No pricing page or public pricing information was found on ashr.io or in any public source. [Inferred]: Most likely monetization path is a SaaS subscription model (potentially usage-based per evaluation run or per-seat), given the SDK-plus-dashboard architecture and the B2B developer tools positioning.

**TAM/SAM:** The global AI-enabled testing market was valued at $1.01B in 2025, projected to reach $4.64B by 2034 at 18.3% CAGR (Fortune Business Insights, 2025 via search snippet). The broader AI test automation market was estimated at $8.81B in 2025, projected to reach $35.96B by 2032 at 22.3% CAGR (ReportsnReports via search snippet). The narrower segment of AI agent-specific evaluation platforms does not have a dedicated market-size estimate from any identified research firm. The overall AI agents market was valued at $7.63B in 2025, projected to reach $182.97B by 2033 at 49.6% CAGR (Grand View Research, 2025 via search snippet).

**GTM / Distribution:** The product integrates as an SDK with documentation at ashr.io/docs.html. A scheduling link for sales calls (cal.com/rohan-kulkarni/30min) is available on the docs page. [Inferred]: Most likely distribution path is developer-led adoption via the Python SDK, supplemented by direct sales to AI-agent-building teams, given the SDK-first integration model and the "Book a call" CTA.

## Defensibility

No defensibility signals found in public sources at this stage. The product does not appear to have open-source repositories with public star counts, and no patent filings or proprietary dataset advantages were identified.

[Inferred]: Potential moat could develop via accumulated evaluation data and benchmark datasets across customer deployments, as the platform processes more agent failure patterns and user journeys. Custom evaluation metrics tied to specific business goals could create switching costs over time, but this is unproven at this stage.

**Market structure:** No structural barrier identified at this stage. Large incumbents in observability (Datadog, New Relic) could extend into AI agent evaluation, and LLM providers (OpenAI, Anthropic) have released their own evaluation frameworks (e.g., OpenAI Evals, Anthropic's published guidance on agent evals). [Inferred]: The structural opening may be that incumbents' evaluation tools are general-purpose, whereas Ashr focuses on multi-step user journey simulation as a distinct product category rather than a feature.

**Commoditization risk:** Multiple well-funded competitors already operate in the AI agent evaluation space. Open-source frameworks (DeepEval, OpenAI Evals, LangChain AgentEvals, Microsoft AI Agent Evals, AWS Agent Evaluation) provide free alternatives for basic evaluation needs. The barrier to building a basic eval suite is low given open-source tooling. Differentiation depends on the quality and realism of generated user journeys and the depth of multimodal support.

## Market & Traction

**Traction signals:**
- Notable customer: "HumanBehavior" listed on the ashr.io homepage (ashr.io, accessed Feb 2026).
- Y Combinator Winter 2026 batch member (ycombinator.com/companies/ashr).
- YC Partner: Harshita Arora (YC company page).
- SDK published as `ashr-labs` on pip (ashr.io/docs.html).
- No Product Hunt launch found.
- No Launch HN post found.
- No company Twitter/X account found.
- No company LinkedIn page confirmed (search returned unrelated "ASHR Group Ltd." and "Ashr Technology" pages).
- No Discord or Slack community found.
- No public GitHub repositories found for the company.
- No app store listings, Chrome extension, or web traffic estimates found.
- No press coverage in named publications found.

**Competitive landscape:**

1. **Braintrust** — $121M total raised; $80M Series B at $800M valuation (Axios, Feb 2026 via search snippet). AI observability and evaluation platform with multi-turn testing and production monitoring. Customers include Notion, Replit, Cloudflare, Ramp, Dropbox. Differentiator vs. Ashr: broader observability and logging focus with evaluation as one component; significantly more mature and well-resourced.

2. **Maxim AI** — $3M Seed led by Elevation Capital (Business Standard, Jun 2024 via search snippet). End-to-end simulation, evaluation, and observability platform. Founded by ex-Google/Postman team. Differentiator vs. Ashr: full-stack observability including prompt management; broader platform scope.

3. **Confident AI / DeepEval** — $2.7M total raised (Crunchbase via search snippet). Open-source LLM evaluation framework used by BCG, AstraZeneca, Mercedes Benz. Differentiator vs. Ashr: open-source-first approach with enterprise cloud layer; unit-testing paradigm vs. Ashr's user-journey-simulation paradigm.

4. **LangWatch** — ~$1.32M total raised (Tracxn via search snippet). Agent simulations for complex agentic AI with thousands of synthetic conversations. Amsterdam-based. Differentiator vs. Ashr: European base; similar synthetic conversation approach but with broader LLMops positioning.

5. **Langfuse** — $4.5M total raised; acquired by ClickHouse in Jan 2026 (Orrick via search snippet). Open-source LLM observability and evaluation; $1.1M revenue as of Jun 2024 (Latka via search snippet); 2,000+ paying customers, 2,000+ GitHub stars, 26M+ SDK installs/month at time of acquisition. Differentiator vs. Ashr: open-source observability-first platform; now part of ClickHouse data infrastructure stack.

**Why now:** [Inferred]: The rapid proliferation of AI agents in production applications through 2024-2025, driven by improvements in LLM capabilities (GPT-4, Claude 3, etc.) and the emergence of agent frameworks (LangChain, CrewAI, OpenAI Agents SDK), has created a new category of software that is difficult to test with traditional methods. AI agents make multi-step tool calls with non-deterministic outputs, creating a testing surface that existing QA tools were not designed for. Anthropic published dedicated guidance on "Demystifying evals for AI agents" (anthropic.com/engineering), and Microsoft, AWS, and OpenAI all released agent evaluation frameworks in 2024-2025, signaling that agent evaluation is a recognized unmet need. The agentic AI market's projected growth from $7.06B in 2025 to $93.2B by 2032 (MarketsandMarkets via search snippet) implies a proportional need for testing infrastructure.

## Founders & Team

**Shreyas Kaps** — Co-founder
- UC Berkeley, studying Data Science and Statistics (Class of 2028) (LinkedIn via search snippet).
- Section Leader, Stanford University Code in Place 2023 — taught the first half of Stanford's CS106A course (LinkedIn via search snippet).
- Founder of Cyberknights, a club focused on cybersecurity awareness (LinkedIn via search snippet).
- Based in San Jose / San Francisco.
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/shreyas-kaps-5b1a4420b — 500+ connections (LinkedIn via search snippet).
- GitHub: No public repos found under identifiable handle.

**Rohan Kulkarni** — Co-founder
- UC Berkeley (LinkedIn via search snippet).
- Interests in software engineering, fintech, and machine learning (LinkedIn via search snippet).
- Based in Berkeley / San Francisco.
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/rohankulkz — 500+ connections (LinkedIn via search snippet).
- GitHub: No public repos found under identifiable handle.

**Co-founder relationship:** Both founders attended UC Berkeley, indicating a shared university connection. No additional overlapping employers or organizations were identified from available data.

**Founder-market fit:** Both founders are current UC Berkeley students with backgrounds in data science, statistics, and software engineering. Shreyas Kaps has teaching experience in computer science (Stanford Code in Place). The team's direct experience as developers building with AI agents likely provides firsthand exposure to the testing pain point they are addressing. No advisors, board members, or notable angel investors were identified in public sources beyond the YC partnership with Harshita Arora.

## Key Risks

**Crowded and well-capitalized competitive field:** Braintrust recently raised $80M at an $800M valuation (Axios, Feb 2026 via search snippet), and multiple funded competitors (Maxim AI, Confident AI, LangWatch) target the same AI agent evaluation space. Open-source alternatives (DeepEval, OpenAI Evals, LangChain AgentEvals) are freely available. Ashr must differentiate on user-journey depth and multimodal coverage to avoid being outspent or substituted.

**Platform provider encroachment:** OpenAI, Anthropic, Microsoft, and AWS have all released agent evaluation frameworks or published detailed evaluation guidance. If LLM providers bundle evaluation tooling into their platforms (as Microsoft has with Azure AI Foundry agent evals as a GitHub Action), standalone evaluation platforms face substitution risk from the same vendors whose models the agents run on.

**Brand disambiguation:** "ASHR" is also the ticker symbol for the Xtrackers Harvest CSI 300 China A ETF, a well-known financial product. Multiple unrelated entities share the name (ASHR Group Ltd., ASHR Datatech). This creates SEO and brand recognition challenges, as confirmed by search results returning financial and unrelated results for "ASHR" queries.

**Early-stage founder experience:** Both founders are current undergraduate students at UC Berkeley. No prior startup exits, industry operating experience, or deep domain backgrounds in software testing or DevOps were identified in public sources. The team's ability to sell to enterprise engineering organizations and compete against teams with extensive industry backgrounds (e.g., Maxim AI's ex-Google/Postman founders, Braintrust's team) is untested.

**Single-modality SDK dependency:** The product currently integrates exclusively as a Python SDK. Teams using other languages (TypeScript/Node.js, Go, Java) cannot adopt Ashr without a Python component in their stack, limiting the addressable customer base.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.01B AI-enabled testing market in 2025, growing to $4.64B by 2034 at 18.3% CAGR (Fortune Business Insights via search snippet); broader AI test automation market $8.81B in 2025 (ReportsnReports via search snippet) |
| SAM | No public data found for AI agent-specific evaluation sub-segment |
| Traction | 1 named customer "HumanBehavior" (ashr.io, Feb 2026); YC W26 batch member (ycombinator.com) |
| Revenue Signal | No public data found |
| Founders | Shreyas Kaps (Co-founder): UC Berkeley Data Science & Statistics, Stanford Code in Place section leader. Rohan Kulkarni (Co-founder): UC Berkeley, software engineering and ML interests |
| Competitors | Braintrust ($121M raised, $800M valuation, revenue unknown, broader observability+eval platform); Maxim AI ($3M raised, revenue unknown, end-to-end simulation+observability); Confident AI/DeepEval ($2.7M raised, revenue unknown, open-source eval framework); LangWatch (~$1.32M raised, revenue unknown, synthetic conversation testing); Langfuse ($4.5M raised, $1.1M revenue Jun 2024, acquired by ClickHouse Jan 2026, open-source LLM observability) |
| Moat Signals | No public data found |
| Risk Factors | Well-funded competitors (Braintrust $80M Series B), platform provider encroachment (OpenAI/Microsoft/AWS eval frameworks), brand disambiguation with ASHR ETF ticker |
| Founder Reach | Shreyas Kaps: Twitter not found, LinkedIn 500+, GitHub not found. Rohan Kulkarni: Twitter not found, LinkedIn 500+, GitHub not found |
| Distribution Signals | No public data found |
