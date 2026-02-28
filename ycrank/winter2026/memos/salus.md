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

## The Idea

**Problem:** AI agents in production autonomously execute tool calls—processing refunds, sending emails, querying databases—without a runtime check on whether the action is correct before it fires. As described by the company: "Your agent processed a refund without looking up the order ID, costing you thousands. You only found out three hours later from a support ticket" (YC company page). Existing solutions (evals, output scoring, observability) operate either before deployment or after execution, leaving a gap at the moment of action. The customer segment is engineering teams deploying AI agents built on frameworks like LangChain, LangGraph, CrewAI, OpenAI, and Anthropic SDKs (usesalus.ai).

**Approach:** Salus provides an API that wraps around an agent's tool calls and validates them at runtime, blocking incorrect ones before execution. Developers add a single `@session.protect()` decorator per tool call. The system checks actions against policies written in YAML, markdown, or plain English—compiled into runtime checks that are version-controlled, diffable, and shadow-testable. When an action is blocked, Salus returns structured feedback explaining what failed and why, enabling the agent to self-correct and retry. The company reports that 58% of blocked actions recover and complete the task correctly (YC company page). Additional capabilities include evidence-grounded action validation, PII detection, budget protection, idempotency checks, and human-in-the-loop escalation (usesalus.ai, YC company page).

**Differentiation:** The specific positioning is runtime interception of individual tool calls before execution, as opposed to:
- **Observability platforms** (Langfuse, Arize, LangSmith) that trace and log agent actions after execution for debugging and evaluation, but do not block actions in real time.
- **Evaluation platforms** (Galileo, Patronus AI) that assess agent output quality pre-deployment or post-hoc, but do not intercept live tool calls.
- **Governance/compliance platforms** (Credo, Superwise) that focus on regulatory compliance and policy auditing rather than real-time action blocking.
- **NVIDIA NeMo Guardrails** (open-source, 5.6k GitHub stars; GitHub) that focuses on conversational guardrails for LLM-based chat systems, not tool-call-level interception for agentic workflows.

Salus positions as a "pre-execution firewall" for agent actions specifically, rather than a post-hoc observability or evaluation layer.

**Business Model:** No pricing page is publicly visible on usesalus.ai. The company offers 30-minute live demos via Calendly (usesalus.ai). [Inferred]: Most likely monetization path is usage-based API pricing (per tool-call validation or per-agent-session), consistent with the developer-tools infrastructure pattern and their API-centric integration model.

**TAM/SAM:** The agentic AI market is projected at $7.06 billion in 2025 growing to $93.20 billion by 2032 at a 44.6% CAGR (MarketsandMarkets via search snippet). Gartner predicts the "guardian agent" category—solutions that supervise AI agents—will capture up to 15% of the AI market within four years (Wayfound blog citing Gartner, 2025 via search snippet). Only 41% of enterprises deploying AI agents have runtime guardrails in place (Master of Code, 2026 via search snippet). No public SAM data specific to runtime agent action validation was found.

**GTM / Distribution:** The product integrates via lightweight SDK with single-decorator-per-tool-call patterns, supporting OpenAI, Anthropic, LangChain, LangGraph, and CrewAI (usesalus.ai). [Inferred]: Most likely distribution path is developer-led, bottom-up adoption through framework ecosystem integrations and developer community channels, consistent with the SDK-first approach and the founders' Stanford CS network.

## Defensibility

Salus is pre-seed with a 2-person team. No patents, published IP, or proprietary data moats are identifiable from public sources.

Potential defensibility vectors that could develop over time: (1) accumulation of policy templates and validation rules across customer deployments could create a data advantage in understanding common agent failure modes; (2) switching costs increase as teams embed `@session.protect()` decorators throughout their agent codebases; (3) the reported benchmarks (τ²-bench, ODCV-Bench) suggest proprietary validation logic that could become more refined with production data.

**Market structure:** The structural barrier for incumbents is category focus. Observability vendors (Datadog, Arize, Langfuse) generate revenue from post-execution monitoring and would need to build an entirely new pre-execution interception layer that functions differently from their core product. Evaluation platforms (Galileo, Patronus) would need to shift from batch/async evaluation to synchronous, latency-sensitive runtime interception. However, no structural barrier identified at this stage prevents these vendors from adding runtime blocking as a feature extension.

**Commoditization risk:** The core concept—intercepting tool calls and checking them against policies—is architecturally straightforward. Any observability or agent framework vendor with SDK-level access to tool calls could build similar functionality. NVIDIA NeMo Guardrails (open-source, 5.6k GitHub stars; GitHub) already provides guardrails for LLM systems, though focused on conversational rather than tool-call interception. Superagent (open-source; GitHub) offers a Safety Agent that evaluates agent actions before execution. OpenAI's own Agents SDK documentation includes a guardrails section (openai.github.io). The barrier is less about building the interception layer and more about building reliable, low-latency validation logic that works across diverse agent architectures.

## Market & Traction

**Traction signals:**
- Backed by Y Combinator (Winter 2026 batch) (YC company page)
- Featured in a YC launch tweet by @ycombinator tagging @thevedants1 and @pankev18 (x.com/ycombinator)
- Published benchmark results: τ²-bench (up to 60% lower cost while following policies) and ODCV-Bench (52% misalignment reduction across 12 frontier models) (YC company page)
- 58% blocked-action recovery rate cited (YC company page)
- YC Partner: Ankit Gupta (YC company page)
- No Product Hunt launch found
- No public user counts, revenue, waitlist numbers, or app store presence found
- No company Twitter/X account found (founder accounts: @thevedants1 for Vedant Singh, @pankev18 for Kevin Pan—follower counts not retrievable via WebFetch)
- No company LinkedIn page found matching this specific Salus entity
- No Discord or Slack community found
- No GitHub organization or public repositories found for usesalus
- 0 active job postings (YC company page)

**Competitive landscape:**

1. **Galileo** — $68M total raised ($45M Series B, Oct 2024; PRNewswire). 834% revenue growth since early 2024; six Fortune 50 customers including Comcast and Twilio (PRNewswire via search snippet). Offers real-time guardrails alongside evaluation and observability. Key differentiator vs. Salus: broader platform spanning evaluation, observability, and guardrails with proprietary Luna models, whereas Salus is focused specifically on pre-execution tool-call interception with self-repair feedback loops.

2. **Fiddler AI** — ~$100M total raised ($30M Series C; $18.6M Series B Prime in late 2024; American Bazaar Online, SiliconANGLE via search snippets). Enterprise AI observability platform with Trust Models for real-time guardrails. Claims <100ms latency. Key differentiator vs. Salus: enterprise-focused observability-first platform with broader AI lifecycle coverage (fairness, explainability, drift detection), whereas Salus is purpose-built for agent tool-call validation.

3. **Patronus AI** — ~$40M total raised ($17M Series A, May 2024; PRNewswire). Founded by ex-Meta ML engineers. Focuses on detecting LLM mistakes at scale, including hallucination detection and copyright violation checks. Key differentiator vs. Salus: evaluation-and-detection-focused (identifying mistakes in outputs) vs. Salus's pre-execution blocking of incorrect actions with retry feedback.

4. **Wayfound** — Seed stage, funding amount not publicly disclosed. Backed by Bee Partners (Bee Partners portfolio page). Founded 2024, 4 employees. First mover in "guardian agent" category per Gartner taxonomy. Key differentiator vs. Salus: business-user-facing supervision platform with closed-loop improvement workflows and Salesforce Agentforce integration, priced at $179-$749/month (Wayfound blog), whereas Salus is developer-facing with SDK-level integration.

5. **NVIDIA NeMo Guardrails** — Open-source (Apache 2.0), 5.6k GitHub stars (GitHub). Programmable guardrails for LLM-based conversational systems. Key differentiator vs. Salus: focuses on conversational guardrails (input/output moderation, topic control, jailbreak detection) rather than tool-call-level runtime validation for agentic workflows. Free and open-source vs. Salus's commercial API.

**Why now:** [Inferred]: The catalyst is the rapid shift from LLM-as-chatbot to LLM-as-agent with real-world tool access. By 2026, 40% of enterprise applications are projected to feature embedded task-specific agents, up from less than 5% in early 2025 (Gartner via search snippet). As agents gain the ability to execute consequential actions (financial transactions, data mutations, API calls), the failure mode shifts from "bad text output" to "bad real-world action"—creating demand for pre-execution validation that did not exist when LLMs were chat-only. The availability of standardized agent frameworks (LangChain, CrewAI, OpenAI Agents SDK) also creates a stable integration surface for guardrail middleware.

## Founders & Team

**Kevin Pan** — Co-founder
- Undergraduate, Computer Science, Stanford University (Stanford Profiles)
- Email: pankevin@stanford.edu (Stanford Profiles)
- Roommate with Vedant Singh at Stanford (YC company page)
- Twitter/X: @pankev18 (YC launch tweet); follower count not retrievable
- LinkedIn: No public profile definitively identified (multiple Kevin Pans in search results; none confirmed as this founder)
- GitHub: No public repos found under confirmed handle

**Vedant Singh** — Co-founder & CTO
- Junior studying Computer Science and Mathematics, Stanford University (vedants.me)
- Research experience: Open Virtual Assistant Lab (long-context reasoning in LLMs), Stanford Legal Design Lab (AI-powered legal tools), Stanford CS (brain-computer interfaces, reasoning LLMs), King Center (NLP/CV for bias detection), Stanford AFTLab (LLM-based credit rating models), MIT RSI (natural language translation models) (vedants.me)
- Honors: International Linguistics Olympiad 2021 Bronze Medal, Asia Pacific Linguistics Olympiad (2 Silver Medals), Research Science Institute Scholar (MIT), Rise Global Winner (Schmidt Futures) for a Sanskrit language preservation app (vedants.me)
- Projects: CryptoAgents (multi-agent LLM trading system), GalHero (vision-language search), OnCode (competitive programming AI assistant) (vedants.me)
- Twitter/X: @thevedants1 (vedants.me); follower count not retrievable
- LinkedIn: linkedin.com/in/thevedantsingh/ — "Salus Inc. | Math & CS at Stanford" (LinkedIn search result)
- GitHub: github.com/thevedants — 11 public repos, no repos with significant star counts observed (GitHub)

**Co-founder relationship:** Both Kevin Pan and Vedant Singh studied computer science at Stanford University and were roommates (YC company page). Both are current undergraduates.

**Founder-market fit:** Both founders have Stanford CS backgrounds. Vedant Singh has extensive hands-on research experience with LLMs, multi-agent systems, and AI reasoning across multiple Stanford labs and MIT RSI. His CryptoAgents project (multi-agent LLM system) demonstrates direct experience building the type of agentic workflows that Salus aims to safeguard. Kevin Pan's specific prior experience beyond Stanford CS enrollment is not publicly documented.

## Key Risks

**Brand disambiguation:** "Salus" is an extremely common company name across industries—Salus Ventures (VC fund), Salus Cloud, Salus GRC, Salus Medical, Salus University, and multiple others appear in search results. The domain usesalus.ai mitigates this somewhat, but SEO discovery and brand recognition will face ongoing noise. A separate company at usesalus.com (equity compensation management) creates additional domain-level confusion.

**Platform dependency on agent frameworks:** Salus's integration model relies on decorators within specific agent frameworks (LangChain, LangGraph, CrewAI, OpenAI, Anthropic). If these frameworks change their tool-call interfaces, introduce native guardrail features, or lose market share to new frameworks, Salus would need to continuously adapt. OpenAI's Agents SDK already includes a guardrails section in its documentation (openai.github.io), signaling potential first-party competition.

**Latency sensitivity:** Runtime pre-execution interception must complete within tight latency budgets to avoid degrading agent performance. Competitor Fiddler claims <100ms latency for its Trust Models (Wayfound blog). If Salus cannot maintain comparable latency at scale, adoption in latency-sensitive production environments may be limited. No public latency benchmarks from Salus were found.

**Undergraduate founding team in enterprise market:** Both founders are current Stanford undergraduates. The competitive landscape includes well-funded companies with experienced enterprise sales teams (Galileo with $68M, Fiddler with ~$100M). Selling runtime infrastructure to enterprise engineering teams typically requires production reliability guarantees, SLAs, and support infrastructure that are resource-intensive to build.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.06B agentic AI market in 2025, growing to $93.20B by 2032 at 44.6% CAGR (MarketsandMarkets via search snippet). Guardian agent category predicted at 15% of AI market within 4 years (Gartner via Wayfound blog, 2025 via search snippet) |
| SAM | No public data found |
| Traction | YC W26 batch; YC launch tweet by @ycombinator; benchmarks: 52% misalignment reduction on ODCV-Bench, up to 60% lower cost on τ²-bench, 58% blocked-action recovery rate (YC company page). No user counts, revenue, or waitlist data found |
| Revenue Signal | No public data found |
| Founders | Kevin Pan (Co-founder): Stanford CS undergraduate. Vedant Singh (Co-founder, CTO): Stanford CS & Math junior, extensive LLM/multi-agent research across Stanford labs and MIT RSI, International Linguistics Olympiad Bronze, Rise Global Winner |
| Competitors | Galileo ($68M raised, 834% revenue growth since early 2024, broader eval+observability+guardrails platform); Fiddler (~$100M raised, enterprise observability-first with Trust Models); Patronus AI (~$40M raised, LLM mistake detection focus); Wayfound (seed stage, business-user guardian agent supervision); NVIDIA NeMo Guardrails (open-source, 5.6k GitHub stars, conversational guardrails) |
| Moat Signals | No public data found. Potential switching cost from embedded decorators; potential data advantage from accumulated policy/failure-mode data over time |
| Risk Factors | Brand disambiguation with many "Salus" entities, agent framework dependency with first-party guardrail competition (OpenAI Agents SDK), latency requirements for runtime interception unproven at scale |
| Founder Reach | Vedant Singh: Twitter @thevedants1 (count not retrievable), LinkedIn linkedin.com/in/thevedantsingh/, GitHub github.com/thevedants (11 repos, minimal stars). Kevin Pan: Twitter @pankev18 (count not retrievable), LinkedIn not confirmed, GitHub not found |
| Distribution Signals | No Product Hunt launch found. No company social media accounts found. YC launch tweet from @ycombinator (x.com/ycombinator). 0 job postings (YC company page) |
