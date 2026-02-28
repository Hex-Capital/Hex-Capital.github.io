# Cascade

> Making Autonomous Intelligence Safe & Reliable

| Field | Value |
|-------|-------|
| Website | https://runcascade.com/ |
| YC Page | https://www.ycombinator.com/companies/cascade |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | B2B, Security, Infrastructure, Trust & Safety, AI |

## The Idea

**Problem:** As enterprises deploy autonomous AI agents across mission-critical workflows, these agents can fail unpredictably, act on stale or adversarial inputs, and create cascading failures at scale. Existing safety mechanisms are largely static guardrails or rule-based filters that do not adapt to novel threat patterns or degrade gracefully. Enterprises deploying agentic AI lack continuous, self-improving infrastructure to monitor, prevent, and recover from agent failures and security threats. Current solutions include manual monitoring, one-off prompt-engineering safeguards, and traditional application-security tooling not designed for autonomous agent behavior.

**Approach:** Cascade builds software infrastructure for autonomous intelligence with "self-improving safety and reliability models that continuously maintain, update, and prevent threats and failures at scale" (YC company page). The mechanism appears to center on models that learn from agent behavior in production, updating their threat detection and failure prevention continuously rather than relying on static rule sets.

**Differentiation:** Cascade positions itself in the "guardian agent" layer — infrastructure that secures and monitors other AI agents — rather than offering general-purpose guardrails or AI observability dashboards. Compared to Guardrails AI (open-source validation framework for LLM outputs), Cascade emphasizes self-improving models rather than predefined response schemas. Compared to WitnessAI (enterprise AI governance and observability), Cascade focuses on autonomous intelligence specifically, rather than broad AI usage monitoring. Compared to Fiddler AI (AI observability platform), Cascade targets autonomous agent reliability rather than model explainability and monitoring across all ML models. The "self-improving" framing implies a closed-loop system that adjusts its own safety models based on observed failures, which differs from the static-policy or human-in-the-loop approach of most competitors.

**Business Model:** No pricing page is publicly visible on runcascade.com (website returned only CSS/framework code at time of research). [Inferred]: Most likely monetization path is a SaaS platform with usage-based or tier-based pricing for enterprises deploying autonomous agents, given the B2B infrastructure positioning and the pattern set by comparable AI safety/observability companies (e.g., Fiddler AI, WitnessAI).

**TAM/SAM:** Gartner predicts the "AI-amplified security" market will reach $160 billion by 2029, up from $49 billion in 2025 (Gartner 4Q25 forecast via search snippet). Within agentic AI specifically, Gartner predicts guardian agents will capture 10–15% of the agentic AI market by 2030 (Gartner press release, June 2025). The broader autonomous agents market is estimated at $11.5 billion in 2025 growing at 45% CAGR (IDC via search snippet), which would place the guardian agent sub-segment at roughly $1.2–1.7 billion in 2025, scaling with the overall market. The agentic AI market overall is projected at $7.84 billion in 2025 growing to $52.62 billion by 2030 at 46.3% CAGR (ClarityTechLabs via search snippet).

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct enterprise sales and developer adoption, given the infrastructure positioning and B2B focus. The company's YC partner is Diana Hu. The company Twitter handle @cascade_intel suggests an intelligence/security branding. No public information on specific GTM motions, partnerships, or sales channels was found.

## Defensibility

No defensibility signals found in public sources at this stage. [Inferred]: Potential moat could develop via proprietary data from deployed agent monitoring (learning from production failures across customer environments), which would create a compounding data advantage as the self-improving models encounter more threat patterns. Switching costs could develop if Cascade becomes embedded in the agent deployment pipeline. However, none of this is proven at this stage.

**Market structure:** No structural barrier identified at this stage. Large incumbents in cloud security (e.g., Palo Alto Networks, CrowdStrike) and AI platform providers (e.g., Microsoft, Google) could theoretically build guardian agent capabilities into their existing platforms. [Inferred]: A possible structural barrier is that incumbent security vendors are designed around network/endpoint/cloud workload protection paradigms and may face architectural retooling costs to address autonomous agent-specific behavior patterns. AI platform providers (OpenAI, Anthropic, Google) may face conflicts in simultaneously selling agent capabilities and independently auditing their safety.

**Commoditization risk:** The AI safety/guardrails space is attracting significant capital and attention. Guardrails AI ($7.5M seed, February 2024 — GeekWire), WitnessAI ($27.5M Series A — PR Newswire), and Fiddler AI (~$100M total funding — Fiddler AI blog) are all building overlapping capabilities. F5 acquired CalypsoAI for $180 million (F5 press release), indicating incumbent appetite for M&A in this space. Meta released LlamaFirewall as an open-source guardrail system (arXiv, May 2025). Invariant Labs offers an open-source framework for intercepting agent prompts and MCP calls (invariantlabs.ai). The barrier to building basic guardrails is relatively low given the open-source tooling available; the differentiation would need to come from the "self-improving" model quality and production deployment breadth.

## Market & Traction

1. **Traction signals:**
   - No public revenue, user counts, or growth metrics found.
   - No Product Hunt launch found for this specific Cascade (runcascade.com).
   - No app store listings, Chrome extension installs, or web traffic estimates found.
   - Company Twitter/X: @cascade_intel (noted on YC page); follower count not retrievable (X.com requires JavaScript rendering).
   - LinkedIn: No company page confirmed for this specific Cascade (multiple unrelated "Cascade" companies appear in LinkedIn search).
   - Discord/Slack community: No public data found.
   - Job postings: 0 open positions (YC company page).
   - No press coverage in named publications found for this specific company.
   - Website not fully accessible at time of research (returned only CSS/framework code).

2. **Competitive landscape:**
   - **Guardrails AI** ($7.5M seed, February 2024 — GeekWire; revenue unknown): Open-source validation framework for LLM outputs focused on preventing hallucinations and data leaks. Differentiator vs. Cascade: open-source community approach with predefined response schemas, whereas Cascade emphasizes self-improving models.
   - **WitnessAI** ($27.5M Series A, June 2024 — PR Newswire; later raised to $58M total — search snippet; revenue unknown): Enterprise AI security and governance platform providing visibility into AI agent and LLM interactions with sensitive data. Differentiator vs. Cascade: broader AI governance and privacy focus across all AI usage, not specifically autonomous agent safety.
   - **Fiddler AI** (~$100M total funding including $30M Series C — Fiddler AI blog; revenue unknown): AI observability platform for evaluating, explaining, and monitoring LLMs/agents with real-time guardrails. Differentiator vs. Cascade: broader ML model observability heritage rather than autonomous-agent-specific reliability.
   - **Invariant Labs** (funding unknown): Open-source framework intercepting prompts and MCP calls for agent safety. Differentiator vs. Cascade: open-source tool approach vs. Cascade's self-improving infrastructure platform.
   - **CalypsoAI** (acquired by F5 for $180M — F5 press release): Enterprise AI security with real-time threat defense and red teaming. Differentiator vs. Cascade: acquired by a large network security incumbent; focused on broader GenAI security rather than autonomous agent reliability specifically.

3. **Why now:** Gartner predicts 40% of enterprise applications will feature task-specific AI agents by end of 2026, up from less than 5% in 2025 (Gartner press release, August 2025). This rapid adoption of agentic AI creates an urgent need for safety and reliability infrastructure. [Inferred]: The specific catalysts include: (a) the maturation of agentic frameworks (LangChain, CrewAI, AutoGen) making autonomous agent deployment accessible to enterprises in 2024–2025; (b) Gartner identifying "AI Security Platforms" as a top strategic technology trend for 2026, signaling enterprise budget allocation; and (c) high-profile agent failures and security incidents raising awareness of the need for guardian agent infrastructure.

## Founders & Team

**Adam AlSayyad** — Co-Founder & CEO
- BS Computer Science, UC Berkeley (heyadam.org, LinkedIn)
- Researcher at Berkeley AI Research Lab (BAIR), focused on graph reasoning and agentic safety (YC company page)
- Research with Professor Dawn Song on AI voice security (heyadam.org)
- Founder of Fidelius (heyadam.org)
- Consulted for NASA (heyadam.org)
- Built embedded systems for functional electrical stimulation (FES) devices (heyadam.org)
- Worked on graph traversal for LLM reasoning (heyadam.org; GitHub repo xmgad/Agentic-Graph-Simulation — repo returned 404 at time of research)
- Pen-testing of AI-integrated applications (heyadam.org)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/adam-alsayyad-88991b359/ (profile exists; headline not retrievable)
- GitHub: No confirmed public profile found (repo xmgad/Agentic-Graph-Simulation returned 404)

**Haluk Cem Demirhan** — Co-Founder & CTO
- BS Computer Science and Mathematics, UC Berkeley (YC company page)
- Built production monitoring infrastructure at Netflix and Amazon (YC company page)
- BAIR research on memory optimization for AI agents (YC company page)
- CS61A Academic Intern at UC Berkeley (LinkedIn via search snippet)
- Twitter/X: No confirmed personal account found (company account @cascade_intel)
- LinkedIn: linkedin.com/in/halukcemdemirhan — Co-Founder and CTO @ Cascade (YC W26)
- GitHub: No public profile found
- Kaggle: kaggle.com/halukcemdemirhan (Novice level)

**Co-founder relationship:** Both founders attended UC Berkeley and both were involved with Berkeley AI Research Lab (BAIR), indicating an overlapping academic network at the same institution and research lab.

**Founder-market fit:** Both founders come from UC Berkeley's AI research ecosystem, with direct experience in AI safety and agent behavior. AlSayyad's research with Dawn Song (a leading figure in AI security) on AI voice security and his pen-testing of AI-integrated applications provide domain-specific security expertise. Demirhan's experience building production monitoring infrastructure at Netflix and Amazon provides operational infrastructure experience relevant to building a reliability platform. His BAIR research on memory optimization for AI agents adds technical depth in the autonomous agent domain specifically. No advisors, board members, or notable investors beyond YC partner Diana Hu were found in public sources.

## Key Risks

**Brand disambiguation in a crowded namespace:** "Cascade" is an extremely common name shared by numerous companies across industries — including Cascade Strategy (strategy execution SaaS with Gartner reviews), Cascade AI (HR/operations platform at gocascade.ai), Cascade (24/7 neo-brokerage that raised $15M — VentureBurn), and Cascade (containerized deployment tool on GitHub). This creates SEO challenges, brand confusion in enterprise procurement, and makes organic discovery more difficult. The domain runcascade.com rather than cascade.com reflects this constraint.

**Well-funded direct competitors with head starts:** WitnessAI ($58M), Fiddler AI (~$100M), and CalypsoAI (acquired for $180M by F5) have raised substantially more capital and have established enterprise customer bases. Guardrails AI and Invariant Labs offer open-source alternatives that reduce the barrier to entry-level adoption. Cascade must differentiate on the "self-improving" model quality to compete with better-resourced alternatives.

**Platform provider commoditization:** Major AI platform providers (OpenAI, Google, Anthropic, Microsoft) are increasingly building safety and guardrail features directly into their agent frameworks. Meta released LlamaFirewall as open source (arXiv, May 2025). If safety becomes a baseline feature of agent platforms rather than a separate infrastructure layer, the addressable market for standalone safety infrastructure narrows.

**Dependency on agentic AI adoption pace:** Cascade's market depends on enterprises deploying autonomous agents at scale in production. Gartner projects 40% of enterprise apps will feature AI agents by end of 2026 (Gartner, August 2025), but enterprise adoption may lag projections due to regulatory caution, integration complexity, or economic conditions. If agent deployment is slower than forecast, demand for guardian agent infrastructure delays accordingly.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $49B AI-amplified security market in 2025, projected $160B by 2029 (Gartner 4Q25 forecast via search snippet); Guardian agents 10–15% of agentic AI market by 2030 (Gartner, June 2025) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Adam AlSayyad (CEO): UC Berkeley CS, BAIR researcher (graph reasoning, agentic safety), research with Prof. Dawn Song, NASA consultant. Haluk Cem Demirhan (CTO): UC Berkeley CS & Math, production monitoring at Netflix & Amazon, BAIR researcher (memory optimization for AI agents). |
| Competitors | WitnessAI ($58M raised, revenue unknown, broader AI governance vs. agent-specific safety); Fiddler AI (~$100M raised, revenue unknown, ML observability heritage vs. autonomous agent focus); Guardrails AI ($7.5M raised, revenue unknown, open-source validation vs. self-improving models); CalypsoAI (acquired by F5 for $180M, GenAI security vs. autonomous agent reliability); Invariant Labs (funding unknown, open-source agent guardrails framework) |
| Moat Signals | No public data found |
| Risk Factors | Brand disambiguation in crowded namespace, well-funded direct competitors with head starts, platform provider commoditization of safety features |
| Founder Reach | Adam AlSayyad: Twitter not found, LinkedIn exists (linkedin.com/in/adam-alsayyad-88991b359/), GitHub not confirmed. Haluk Cem Demirhan: Twitter not found, LinkedIn exists (linkedin.com/in/halukcemdemirhan), GitHub not found. Company Twitter: @cascade_intel (follower count not retrievable). |
| Distribution Signals | No public data found |
