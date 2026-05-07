# Armature

> You used to test user flows. Now test agent flows.

| Field | Value |
|-------|-------|
| Website | https://armature.tech |
| YC Page | https://www.ycombinator.com/companies/armature |
| Batch | Spring 2026 (YC page) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Enterprise Software, AI |
| YC Partner | Andrew Miklas (YC page) |
| Emails | founders@armature.tech (armature.tech) |

## The Idea

**Problem:** Product teams shipping MCP servers, CLIs, and ChatGPT apps lack a way to test how AI agents actually traverse their products end-to-end (armature.tech). Standard logs do not surface agent behavioral failures across different harnesses (Claude Code, Codex, OpenClaw, ChatGPT, Gemini) and frontier models (armature.tech). LangChain's State of Agent Engineering reports 89% of teams have implemented observability but only 52% have implemented evals, despite 57% running agents in production (LangChain, 2026).

**Approach:** Connect a customer's MCP/CLI/ChatGPT app to Armature; the platform auto-discovers tools, generates test plans/missions, and runs real AI agents through workflows continuously across every harness/model combination, with "heartbeat" lightweight checks plus analytics and remediation suggestions (armature.tech).

**Differentiation:** Positions itself as agent-experience testing distinct from LLM evaluation platforms (Braintrust, Langfuse, LangSmith) that focus on prompt/eval loops (Braintrust, 2026 via search snippet). Latitude blog notes agent evaluation is architecturally distinct from LLM evaluation, with critical failure surfaces at the step level — tool call arguments, state propagation, goal alignment drift (Latitude, 2026 via search snippet). [Inferred]: Armature's wedge is multi-harness/multi-model test execution against the customer's actual MCP/CLI surface, rather than trace logging or prompt-level evals.

**Business Model:** Self-serve SaaS tiers — Starter $49/mo annual ($59 monthly), Pro $119/mo annual ($149 monthly, marked most popular), Enterprise custom; 30-day money-back guarantee, no free tier (armature.tech).

**TAM/SAM:** LLM observability platform market $2.69B in 2026, projected $9.26B by 2030 at 36.2% CAGR (Research and Markets, 2026 via search snippet). No public SAM data found for the agent-testing-of-MCPs sub-segment.

**GTM / Distribution:** [Inferred]: Bottom-up self-serve via the published pricing tiers, supplemented by founder-led enterprise sales given Palantir/Joko investor network and the SF location. [Inferred]: YC batch demo day exposure (Spring 2026) as an early enterprise pipeline channel.

## Defensibility

No defensibility signals (patents, network effects, proprietary datasets) found in public sources. [Inferred]: Potential moat could develop via (a) accumulated workflow/test-plan corpus across customer MCPs feeding better auto-discovery and (b) integrations breadth across harnesses (Claude Code, Codex, OpenClaw, ChatGPT, Gemini) creating switching costs once a customer's regression suite is on Armature (armature.tech). Both are unproven at this stage.

**Market structure:** No structural barrier identified at this stage. [Inferred]: Existing eval/observability incumbents (Braintrust, Langfuse, LangSmith) could extend into MCP-specific test execution; the LLM-eval blog ecosystem already lists "MCP metrics for conversational evaluations including args correctness, task completion, and tool correctness" being added (DeepEval, 2025 via search snippet).

**Commoditization risk:** [Inferred]: Moderate-to-high. Building a harness-agnostic agent runner against an MCP is technically tractable for any well-resourced eval platform; differentiation depends on speed of integration breadth and quality of auto-generated test plans.

## Market & Traction

1. **Traction signals:**
   - Investors named on website: Y Combinator, Palantir, Tsuga, Joko (armature.tech). No funding amount disclosed.
   - Team statement: "deployed MCPs used by millions of customers" (armature.tech) — unverified; no third-party source.
   - Pricing live with three tiers (armature.tech).
   - LinkedIn: company/armature-tech (count not retrievable; LinkedIn returned 999).
   - No Product Hunt launch found (search, May 2026).
   - No press coverage found in named publications (search, May 2026).
   - No customer logos or testimonials displayed (armature.tech).
   - No public Twitter/X handle for the company found (search, May 2026).
   - No public revenue, user counts, or paying-customer figures found.

2. **Competitive landscape:**
   - **Braintrust** — closed-source LLM eval platform with GitHub Actions/GitLab CI integration and merge-blocking on quality regressions (Braintrust/Langfuse comparison, 2026 via search snippet); raised $36M Series A led by a16z (publicly reported, 2024; figure not re-verified in this research).
   - **Langfuse** — MIT open-source LLM observability/eval, self-hosting option (Langfuse FAQ, 2026 via search snippet); funding/ARR not verified in this research.
   - **LangSmith (LangChain)** — eval/observability tool tied to the LangChain stack (LangChain, 2026 via search snippet); funding/ARR not verified.
   - **Latitude** — production multi-turn agent evaluation, positions itself as agent-first vs. LLM-only platforms (Latitude, 2026 via search snippet); funding/ARR not verified.
   - **Arize / Confident AI (DeepEval)** — adjacent eval platforms; DeepEval added MCP metrics (args correctness, task completion, tool correctness) in 2025 (DeepEval changelog, 2025 via search snippet).
   - [Inferred]: Direct competitors specifically targeting MCP/CLI agent flow testing across multiple harnesses are not yet publicly identifiable; the closest set is the LLM-eval platforms above expanding into agent territory.

3. **Why now:** [Inferred]: Three convergent shifts in the past 12-24 months — (a) MCP standardization creating a uniform tool surface for AI agents to call into customer products (multiple MCP-related YC launches in 2025-2026 batches per search snippets); (b) coding/agent harnesses (Claude Code, Codex, etc.) reaching production usage; (c) the gap LangChain documents between observability adoption (89%) and eval adoption (52%) at organizations running agents in production (57%) (LangChain State of Agent Engineering, 2026 via search snippet).

## Founders & Team

**Théodore Otzenberger** — Founder
- Background: 5 years at Palantir Technologies prior to joining Joko, then Armature (search snippet from LinkedIn aggregators); specific role title at Palantir not retrieved.
- LinkedIn: fr.linkedin.com/in/théodore-otzenberger-895345131 — headline "Armature (YC P26)"; LinkedIn fetch returned 999 (count not retrievable)
- Twitter/X: No public account found
- GitHub: No public account confirmed; Kaggle profile thodoreotzenberger exists (Kaggle); Medium @theodoreotzenberger exists
- Education: Not retrievable from public sources accessed

**Louis Scremin** — Co-Founder
- Background: Junior CentraleSupélec — HR & Communication / Project Manager (2020-2021); Roland Berger Strategy Consultant, Paris (Aug-Dec 2021); Cityscoot Business Strategy Analyst (Jan-Apr 2022); Roland Berger Singapore Strategy Consultant (Apr-Jul 2022); Joko Business Operations Analyst/Engineer from May 2023 (TheOrg; LinkedIn search snippets)
- Education: CentraleSupélec; preparatory classes at Lycée Sainte-Geneviève (2016-2019); Lycée Saint-Elme baccalauréat in Mathematics, 2016 (search snippets)
- LinkedIn: linkedin.com/in/louis-scremin — headline "Stealth Startup" (search snippet)
- Twitter/X: No public account found
- GitHub: No public repos found

**Third team member:** Team size listed as 3 (YC page) but YC page lists only the two founders above; the third individual is not publicly named in sources accessed. No public data found.

**Co-founder relationship:** Both founders have Joko on their CV — Otzenberger as a prior employee, Scremin as Business Operations Analyst/Engineer from May 2023. Joko is also listed among Armature's investors (armature.tech). Shared Joko tenure indicates prior working relationship.

**Founder-market fit:** [Inferred]: Otzenberger's Palantir tenure (5 years) supplies enterprise software / forward-deployed engineering exposure relevant to selling testing infrastructure to enterprises; Scremin's strategy consulting background (Roland Berger Paris/Singapore) plus Joko business-ops role supplies GTM/ops capability. The Palantir/Joko investor list reflects the founders' prior employer network. [Inferred]: Neither founder has a publicly documented prior exit or deep agent/eval-tooling specialization based on sources accessed.

## Key Risks

**Eval-platform encroachment:** Existing LLM eval platforms (Braintrust, Langfuse, LangSmith, Latitude, DeepEval) are already adding agent- and MCP-specific metrics — DeepEval added MCP metrics for args correctness, task completion, and tool correctness in 2025 (DeepEval changelog via search snippet). Direct substitution risk if these vendors extend execution-style multi-harness agent runs.

**No disclosed traction:** No public revenue, user counts, paying customers, press coverage, Product Hunt launch, or customer logos found as of May 2026 (multiple searches). The company was visible through YC Spring 2026 batch but has no third-party traction validation in public sources.

**Harness/model-integration treadmill:** Value proposition depends on continuously integrating "every harness, every model" (armature.tech) — Claude Code, Codex, OpenClaw, ChatGPT, Gemini, frontier models. [Inferred]: Engineering cost of maintaining this matrix scales with model/harness proliferation and could erode margin or coverage claims if a 3-person team cannot keep pace.

**Technical-feasibility risk on auto-discovery:** Product claims to "discover the workflows agents actually run" and auto-generate test plans (armature.tech). [Inferred]: Quality of auto-discovered tests on heterogeneous customer MCPs is unverified externally; weak discovery would force customers to author tests manually, undercutting differentiation vs. existing eval frameworks.

**Investor-network concentration:** Listed angel/strategic investors (Palantir, Joko, Tsuga) overlap with the founders' prior employers (armature.tech). [Inferred]: Initial customer pipeline may be concentrated within this network; broader market validation outside the founders' direct network is not yet visible.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | LLM observability platform market $2.69B in 2026, projected $9.26B by 2030 at 36.2% CAGR (Research and Markets, 2026 via search snippet) |
| SAM | No public data found |
| Traction | Investors listed: YC, Palantir, Tsuga, Joko (armature.tech); pricing live with 3 tiers (armature.tech, May 2026); no public revenue, users, press, or Product Hunt presence found |
| Revenue Signal | Starter $49/mo annual or $59 monthly; Pro $119/mo annual or $149 monthly; Enterprise custom; 30-day money-back guarantee; no free tier (armature.tech, May 2026) |
| Founders | Théodore Otzenberger (Founder): ex-Palantir ~5 yrs, ex-Joko (search snippet). Louis Scremin (Co-Founder): CentraleSupélec, ex-Roland Berger strategy consultant Paris/Singapore, ex-Joko Business Ops (TheOrg; search snippet) |
| Competitors | Braintrust (funding/ARR not verified in this research, closed-source LLM eval w/ CI merge-blocking); Langfuse (MIT open-source, self-host, funding/ARR not verified); LangSmith (LangChain stack, funding/ARR not verified); Latitude (agent-first multi-turn eval, funding/ARR not verified); DeepEval/Confident AI (added MCP-specific metrics 2025) (all via search snippets) |
| Moat Signals | No public data found |
| Risk Factors | Eval-platform encroachment (DeepEval MCP metrics 2025), no disclosed traction, harness/model integration treadmill |
| Founder Reach | Otzenberger: Twitter not found, LinkedIn fr/théodore-otzenberger-895345131 (count not retrievable), GitHub not found. Scremin: Twitter not found, LinkedIn /louis-scremin (count not retrievable), GitHub not found |
| Distribution Signals | No public data found (no Product Hunt launch, no press coverage located via search, May 2026) |
| Emails | founders@armature.tech (armature.tech) |
