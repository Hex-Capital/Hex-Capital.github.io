# Salus

> Guardrails to validate your agent's actions before they execute

| Field | Value |
|-------|-------|
| Website | https://www.usesalus.ai/ |
| YC Page | https://www.ycombinator.com/companies/salus |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, B2B, API, Infrastructure, AI |
| YC Partner | Ankit Gupta |
| Emails | founders@usesalus.ai, security@usesalus.ai, support@usesalus.ai |

## The Idea

**Problem:** AI agents in production make costly mistakes — executing actions without proper validation. The company's own framing: "Your agent processed a refund without looking up the order ID, costing you thousands. You only found out three hours later from a support ticket" (company website). Existing solutions (evals, output scoring, observability) are reactive — they detect problems after the fact but do not prevent incorrect actions at the moment of execution. The customer segment is engineering teams deploying AI agents with tool-calling capabilities in production environments.

**Approach:** Salus provides an API that wraps around an AI agent and inspects every tool call at execution time. Incorrect actions are blocked before they execute, and structured feedback is returned to the agent enabling self-correction and retry. The system maintains an evidence cache for each run — all outputs from prior tool calls and the full conversation history — and validates proposed actions against that evidence (YC page). Constraints can be written in YAML, markdown, or plain English. Built-in features include PII detection, budget/loop protection, idempotency enforcement, human-in-the-loop escalation, and content moderation (company website). Integration is via a Python SDK (`pip install salus-ai`) with a single decorator per tool call (company website). Supported frameworks include OpenAI, Anthropic, LangChain, LangGraph, and CrewAI (company website).

**Differentiation:** Existing tools in the space operate either pre-deployment (evals) or post-deployment (observability/logging). Guardrails AI ($7.5M seed, Crunchbase) provides an open-source validation framework for LLM outputs but focuses on output formatting and schema validation rather than runtime action blocking with self-repair feedback. Fiddler AI ($100M total funding, BusinessWire Jan 2026) provides agent observability with guardrails but positions as a broad enterprise control plane. Pillar Security ($9M seed, SecurityWeek Apr 2025) focuses on AI security across the full lifecycle with an enterprise security orientation. Salus differentiates by narrowing focus specifically to runtime tool-call interception with an evidence-grounded validation mechanism and self-repair loop — the company reports 58% of blocked actions recover and complete correctly (YC page).

**Business Model:** No public pricing page found. The product is distributed as a Python SDK and API. [Inferred]: Most likely monetization path is usage-based API pricing (per-action-validated or per-agent-run) or tiered SaaS, given the API-first developer-tools positioning and precedent from comparable infrastructure products.

**TAM/SAM:** The AI guardrails platform market was valued at $2.5B in 2025 with a projected CAGR of 23.7%, reaching $3.09B in 2026 (via search snippet, source unnamed). A separate estimate values the broader Global AI Guardrails Market at $0.7B in 2024, projected to reach $109.9B by 2034 at 65.8% CAGR (market.us via search snippet). The agentic AI market overall is estimated at $7.8B, projected to reach $52B by 2030 (via search snippet, source unnamed). No SAM estimate specific to runtime agent action validation was found.

**GTM / Distribution:** The product is distributed as an open-install Python package (`pip install salus-ai`) targeting developers. YC posted about Salus on X (x.com/ycombinator, status 2021645412487110868), and the company has a LinkedIn presence at linkedin.com/company/salus-dev/. [Inferred]: Most likely distribution path is bottom-up developer adoption via the Python SDK, with YC network as an initial channel for early enterprise customers deploying AI agents.

## Defensibility

No defensibility signals found in public sources at this stage. The evidence cache mechanism — grounding action validation against accumulated run context — is a technical approach that could develop into a data advantage as the system processes more agent interactions and learns validation patterns.

**Market structure:** The major LLM providers (OpenAI, Anthropic, Google) could build native guardrails into their APIs. However, Salus is framework-agnostic and sits at the orchestration layer across multiple providers, a position that individual LLM vendors are less likely to occupy due to competitive dynamics — each provider building guardrails would only cover their own models, not cross-platform agent deployments. No structural barrier identified beyond this cross-platform positioning at this stage.

**Commoditization risk:** The core concept of intercepting and validating agent tool calls is technically reproducible. Guardrails AI already provides open-source output validation (5.9K GitHub stars, 10K+ monthly downloads per Guardrails AI website via search snippet). Fiddler AI has launched a Realtime Guardrails API (Fiddler docs). The differentiation lies in the specific evidence-grounding mechanism and self-repair feedback loop, which are implementable by well-resourced competitors. The open-source Guardrails AI framework in particular represents a direct commoditization vector.

## Market & Traction

**Traction signals:**
- YC Winter 2026 batch member (YC page)
- YC posted about Salus on X with founder handles @thevedants1 and @pankev18 (x.com/ycombinator)
- Benchmark results published: 58% blocked-action recovery rate; 60% lower cost on τ²-bench; 52% reduced misalignment on ODCV-Bench across 12 frontier models (YC page)
- Python SDK available via `pip install salus-ai` (company website)
- GitHub organization github.com/salus-ai has 1 public repo ("llm-as-a-service," 5 stars, last updated June 2023; this repo predates the current product)
- Company LinkedIn: linkedin.com/company/salus-dev/ (follower count not retrievable)
- No Product Hunt listing found
- No public user count, revenue, or customer data found
- No app store or Chrome extension presence
- No Discord or Slack community found
- 0 open job postings (YC page)

**Competitive landscape:**

1. **Guardrails AI** ($7.5M seed, Feb 2024; revenue unknown; Crunchbase via search snippet) — Open-source Python framework for LLM output validation with 5.9K GitHub stars and 10K+ monthly downloads. Founded by Shreya Rajpal (ex-Apple, Drive.ai) and Diego Oppenheimer (Algorithmia founder). Focuses on output schema validation and formatting rather than runtime action interception with self-repair. Key difference vs. Salus: validates outputs, not tool-call actions mid-execution.

2. **Fiddler AI** ($100M total, $30M Series C Jan 2026; 4x revenue growth in 18 months; BusinessWire) — Enterprise AI observability and control plane with a Realtime Guardrails API. Broader scope covering model monitoring, drift detection, and compliance. Key difference vs. Salus: enterprise-grade full-stack observability platform vs. focused runtime action validation.

3. **Pillar Security** ($9M seed, Apr 2025; revenue unknown; SecurityWeek) — AI security platform providing security controls across the AI lifecycle with runtime guardrails tailored to application risk profiles. Israeli-founded, enterprise-security-oriented. Key difference vs. Salus: security-first approach covering the full AI lifecycle vs. developer-tools-first action validation.

4. **Galileo AI** ($68.1M total, $45M Series B Oct 2024; acquired by Alphabet May 2025; PRNewswire via search snippet) — Evaluation and observability platform with eval-to-guardrail lifecycle. Key difference vs. Salus: evaluation-first platform that extends into guardrails vs. guardrails-first approach. Now part of Alphabet.

**Why now:** [Inferred]: The proliferation of AI agents with tool-calling capabilities (function calling, MCP protocol) in 2024-2025 created a new failure mode — agents autonomously executing real-world actions (API calls, database writes, financial transactions) without human review. Gartner projects 40% of enterprise applications will embed AI agents by end of 2026 (via search snippet). The Washington Post published an opinion piece on the need for agentic AI guardrails (Jan 2026). The specific catalyst is the transition of AI agents from text-generation systems to action-execution systems, which changes the risk profile from "bad output" to "bad action with real-world consequences."

## Founders & Team

**Kevin Pan** — Co-founder
- B.S. Symbolic Systems, Stanford University (LinkedIn via search snippet)
- Previously: Intern at WindBorne Systems (LinkedIn via search snippet)
- Twitter/X: @pankev18 (joined Feb 2026; follower count not retrievable)
- LinkedIn: linkedin.com/in/kevin-y-pan/ — "Co-founder at Salus (YC W26) | CS at Stanford"
- GitHub: No confirmed personal GitHub account found (github.com/KevinRPan exists but not confirmed as same person)

**Vedant Singh** — Co-founder, CTO
- Studying Computer Science & Mathematics, Stanford University (vedants.me)
- Research: Stanford Open Virtual Assistant Lab (long-context LLM reasoning), Legal Design Lab (AI-powered legal tools), Stanford CS (brain-computer interfaces), King Center (bias detection with NLP/CV), Stanford AFTLab (LLM-based credit rating models) (vedants.me)
- MIT Research Science Institute scholar — natural language translation models (vedants.me)
- Internships at Amazon Web Services (AWS) and JPMorgan Chase (via search snippet)
- Honors: International Linguistics Olympiad Bronze Medal (2021), 2 Asia Pacific Linguistics Olympiad Silver Medals, Rise Global Winner (Schmidt Futures) — Sanskrit language preservation app (vedants.me)
- Twitter/X: @thevedants1 (follower count not retrievable)
- LinkedIn: linkedin.com/in/thevedantsingh/ — "Salus Inc. | Math & CS at Stanford"
- GitHub: No confirmed personal GitHub account found

**Co-founder relationship:** Kevin Pan and Vedant Singh were roommates at Stanford, where they both studied computer science (YC page company description).

**Founder-market fit:** Both founders are Stanford CS students with direct experience building and researching LLM-based systems. Vedant Singh's research spans multiple Stanford labs focused on LLM reasoning, NLP, and applied AI — directly relevant to understanding how AI agents reason and fail. Kevin Pan's background in Symbolic Systems (an interdisciplinary program combining CS, linguistics, philosophy, and psychology) aligns with the product's focus on understanding and constraining agent decision-making. No advisors, board members, or notable investors beyond YC were identified.

## Key Risks

**Brand disambiguation:** Multiple companies use the "Salus" name across different sectors — Salus Ventures (VC firm), Salus Security (Web3 security, @salus_sec on X), Salus fintech, SALUS safety management, and others. The domain usesalus.ai mitigates this partially, but "Salus" as a standalone brand will face search and discovery friction. The GitHub organization github.com/salus-ai has a pre-existing repo from June 2023 unrelated to the current product, suggesting the org name may have been repurposed.

**Well-funded direct competitors:** Fiddler AI ($100M total funding) has launched a Realtime Guardrails API directly competing with Salus's core value proposition. Guardrails AI has an open-source framework with 5.9K GitHub stars providing a free alternative for basic validation needs. Both have multi-year head starts in market positioning and enterprise relationships.

**Platform dependency on agent frameworks:** Salus wraps agent tool calls, making it dependent on the stability and API design of frameworks like LangChain, CrewAI, and the OpenAI/Anthropic SDKs. Changes to how these frameworks handle tool calling (e.g., OpenAI's evolving function-calling spec, Anthropic's tool-use protocol) could require continuous adaptation. If major providers build native runtime validation into their SDKs, Salus's insertion point could be bypassed.

**Latency sensitivity:** Runtime interception of every tool call introduces latency into agent execution. For time-sensitive agent workflows (customer-facing chatbots, real-time trading agents), the added validation step could be a adoption barrier. The company has not published latency benchmarks.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI guardrails platform market: $2.5B in 2025, CAGR 23.7% (via search snippet, source unnamed). Broader AI guardrails market: $0.7B in 2024 → $109.9B by 2034, CAGR 65.8% (market.us via search snippet) |
| SAM | No public data found |
| Traction | YC W26 batch member (YC page); published benchmarks: 58% recovery rate, 60% lower cost on τ²-bench, 52% reduced misalignment on ODCV-Bench (YC page); Python SDK available via pip (company website) |
| Revenue Signal | No public data found |
| Founders | Kevin Pan (Co-founder): B.S. Symbolic Systems, Stanford; intern at WindBorne Systems. Vedant Singh (Co-founder, CTO): CS & Math, Stanford; MIT RSI scholar; research across 5+ Stanford labs; AWS and JPMorgan Chase internships |
| Competitors | Guardrails AI ($7.5M raised, revenue unknown, open-source output validation framework). Fiddler AI ($100M raised, 4x revenue growth in 18mo, enterprise AI control plane with guardrails). Pillar Security ($9M raised, revenue unknown, full-lifecycle AI security). Galileo AI ($68.1M raised, acquired by Alphabet May 2025, eval-to-guardrail platform) |
| Moat Signals | No public data found |
| Risk Factors | Well-funded direct competitors (Fiddler $100M, Guardrails AI open-source), platform dependency on evolving agent framework APIs, brand disambiguation challenge |
| Founder Reach | Kevin Pan: Twitter @pankev18 (count not retrievable), LinkedIn linkedin.com/in/kevin-y-pan/. Vedant Singh: Twitter @thevedants1 (count not retrievable), LinkedIn linkedin.com/in/thevedantsingh/ |
| Distribution Signals | YC X/Twitter post (x.com/ycombinator); pip install salus-ai; LinkedIn company page linkedin.com/company/salus-dev/. No Product Hunt, no app store, no Chrome extension found |
| Emails | founders@usesalus.ai, security@usesalus.ai, support@usesalus.ai |
