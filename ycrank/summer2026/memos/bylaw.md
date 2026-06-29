# Bylaw

> Guarantee your agents use the right evidence before they act.

| Field | Value |
|-------|-------|
| Website | https://www.usebylaw.com |
| YC Page | https://www.ycombinator.com/companies/bylaw |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | SaaS, Compliance, Security, AI |
| YC Partner | Ankit Gupta |
| Emails | No public data found |

## The Idea

- **Problem:** AI agent teams deploying write-enabled agents face recurring refund/CRM/system errors because the agent is permitted to call a tool but no layer verifies the underlying facts agree across chat, docs, CRM and tool results at the moment of the write (YC company page, 2026).
- **Approach:** SDK-based "Runtime Evidence Gate" reconstructs an Evidence Manifest before each sensitive action, runs a deterministic policy engine (LLM assists compilation only, not runtime decisions), and emits an allow/restrict/review/block decision with signed audit logs (usebylaw.com, 2026).
- **Differentiation:** Vs. tool-permission guardrails (e.g., NeMo Guardrails) it checks facts not tool-eligibility; vs. eval platforms (Galileo, Braintrust) it intervenes at runtime rather than post-hoc; integrates with LangSmith, Langfuse, OpenAI, Braintrust as a layer rather than a substitute (usebylaw.com, 2026).
- **Business Model:** [Inferred]: SaaS, likely usage- or seat-based developer SDK pricing — no pricing page is published on usebylaw.com (WebFetch, Jun 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** [Inferred]: Developer/SDK-led adoption into existing agent stacks via integrations with LangSmith, Langfuse, OpenAI and Braintrust (usebylaw.com, 2026).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond YC backing (YC company page, 2026).
- **Future moat:** [Inferred]: Accumulated policy library and labeled evidence-conflict telemetry from customer agent logs could create data/switching-cost moat once deployed; unproven now because no customer count or deployed-policy volume is disclosed.
- **Market structure:** [Inferred]: Limited structural barrier — observability incumbents (Galileo, Langfuse, Braintrust) and model vendors could ship overlapping runtime evidence checks; Galileo already released Agent Control as an open-source control plane in March 2026 (VentureBeat / The New Stack, Mar 2026).
- **Commoditization risk:** Any guardrail/eval vendor (Guardrails AI, Lakera/Check Point, Prompt Security, Galileo) or foundation-model platform could add an "evidence verification" gate; the deterministic-policy compilation approach is described publicly on the product site (usebylaw.com, 2026).

## Market & Traction

- **Traction signals:**
  - Backed by Y Combinator, Summer 2026 batch (YC company page, 2026).
  - No revenue, customer count, paying-customer or waitlist figures disclosed (WebFetch usebylaw.com, Jun 2026).
  - No Product Hunt launch found (WebSearch, Jun 2026).
  - No company Twitter/X or LinkedIn follower data retrievable (WebSearch, Jun 2026).
  - No press coverage in named publications found (WebSearch, Jun 2026).
  - YC company page lists Hiring: False; no active job postings located (YC company page, 2026).
- **Competitors:**
  - Guardrails AI ($7.5M seed Feb 2024 from Zetta/Bloomberg Beta/Pear VC; revenue unknown; 6.8K GitHub stars, 10K+ monthly downloads — Galileo blog, 2026): open-source validators for LLM I/O; lacks runtime cross-source evidence reconciliation.
  - Lakera (acquired by Check Point Nov 2025 for ~$300M — Check Point press, Nov 2025): prompt-injection/content guard at 98%+ detection, <50ms latency; focuses on input/output safety rather than evidence agreement across systems.
  - Prompt Security ($23M total: $5M seed Jan 2024 led by Hetz, $18M Series A Nov 2024 led by Jump Capital — Prompt Security press; revenue unknown): enterprise GenAI security gateway, not agent-action evidence verification.
  - Galileo ($68M total incl. $45M Series B Oct 2024 led by Scale Venture Partners — VentureBeat; 834% revenue growth since 2024, six Fortune 50 customers incl. Comcast, Twilio — PRNewswire, 2025): evaluation + Agent Control open-source guardrails released Mar 2026; overlaps directly on runtime policy enforcement.
  - NVIDIA NeMo Guardrails (part of NVIDIA, revenue unknown): tool-permission and topical guardrails framework; does not validate underlying evidence facts (Galileo blog, 2026).
- **Why now:** [Inferred]: Production deployment of write-enabled AI agents accelerated through 2025–2026 (Galileo's Agent Control launch Mar 2026; EU AI Act high-risk obligations applying Aug 2, 2026 — StateTech Magazine, Jan 2026), creating demand for runtime verification layers.

## Founders & Team

- **Mazin Al-Ani (Co-founder):**
  - Background: BS Computer Science, University of Waterloo; SWE intern at Optiver; per company description also Meta and BitGo intern experience across team (LinkedIn headline "cs @ uw, swe @ optiver"; YC company page, 2026).
  - Twitter/X: No public account found tied to this founder (WebSearch, Jun 2026).
  - LinkedIn: "cs @ uw, swe @ optiver" (linkedin.com/in/mazinalani).
  - GitHub: No public repos definitively attributed found (WebSearch, Jun 2026).
- **Farhan Ur Rehman (Co-founder):**
  - Background: University of Waterloo CS first-year cohort with co-founders; prior internships across team include Meta, Optiver, BitGo (YC company page description, 2026).
  - Twitter/X: No public account found (WebSearch, Jun 2026).
  - LinkedIn: No public profile unambiguously matched (WebSearch, Jun 2026).
  - GitHub: No public repos found (WebSearch, Jun 2026).
- **Gurshabd Singh Varaich (Co-founder):**
  - Background: BS Computer Science, University of Waterloo; SWE intern at theScore, Ford Motor Company; UW Blueprint contributor (RocketReach profile; LinkedIn linkedin.com/in/gvaraich).
  - Twitter/X: No public account found (WebSearch, Jun 2026).
  - LinkedIn: linkedin.com/in/gvaraich, Waterloo, Ontario (WebSearch, Jun 2026).
  - GitHub: @gurshabdv; no notable starred repo identified (WebSearch, Jun 2026).
- **Co-founder relationship:** All three met in their first year studying Computer Science at the University of Waterloo (YC company page description, 2026).
- **Founder-market fit:** [Inferred]: Co-founders cite internships at Meta, Optiver and BitGo — environments where unverified-data writes carry financial/operational consequences — as the origin of the evidence-gate insight (YC company page description, 2026); no named advisors, board members or named angel investors beyond YC found in public sources.

## Key Risks

- **Direct incumbent overlap:** Galileo released Agent Control as an open-source Apache 2.0 control plane for agent policy enforcement in March 2026 with AWS, CrewAI and Glean as launch partners (VentureBeat; The New Stack, Mar 2026), creating immediate substitution pressure on a paid runtime gate from a vendor with $68M raised and Fortune 50 distribution; no mitigation publicly stated.
- **Platform-vendor absorption:** Foundation-model providers (OpenAI, Anthropic) and observability platforms (LangSmith, Langfuse, Braintrust) — the same systems Bylaw integrates with (usebylaw.com, 2026) — could ship native evidence-verification primitives, collapsing the layer.
- **Technical feasibility at latency:** Reconstructing an evidence manifest across "five places at once" before each write (YC company page description, 2026) introduces per-action latency on the critical path of agent execution; no benchmark, latency budget, or false-block rate is published (WebFetch usebylaw.com, Jun 2026).
- **No disclosed traction or design partners:** Website and YC page show no customers, logos, pricing, or pilots (WebFetch usebylaw.com & YC page, Jun 2026), so product-market fit and deterministic-policy authoring UX remain unvalidated publicly.
- **Generic name search collision:** "Bylaw" overlaps municipal-bylaw and legal-document tooling (e.g., template.net "AI Bylaws Generator", City of Waterloo bylaw directory — WebSearch, Jun 2026), creating SEO/brand discoverability friction for developer GTM.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Backed by Y Combinator Summer 2026 (YC company page, 2026); no other public metrics |
| Revenue Signal | No public data found (no pricing page on usebylaw.com, WebFetch Jun 2026) |
| Founders | Mazin Al-Ani (Co-founder): UWaterloo CS, Optiver SWE intern. Farhan Ur Rehman (Co-founder): UWaterloo CS, team interned at Meta/Optiver/BitGo. Gurshabd Singh Varaich (Co-founder): UWaterloo CS, theScore + Ford SWE intern. |
| Competitors | Guardrails AI ($7.5M seed, revenue unknown, OSS LLM I/O validators); Lakera (acquired ~$300M by Check Point Nov 2025, prompt-injection guard); Prompt Security ($23M raised, revenue unknown, enterprise GenAI gateway); Galileo ($68M raised, revenue unknown but 834% YoY growth, Agent Control open-source guardrails); NVIDIA NeMo Guardrails (part of NVIDIA, tool-permission guardrails) |
| Moat Signals | No public data found |
| Risk Factors | Direct overlap with Galileo Agent Control (Mar 2026 OSS launch), platform-vendor absorption by integration partners, no disclosed customers or latency benchmarks |
| Founder Reach | Mazin Al-Ani: Twitter not found, LinkedIn linkedin.com/in/mazinalani (count not retrievable), GitHub not found. Farhan Ur Rehman: Twitter not found, LinkedIn not unambiguously matched, GitHub not found. Gurshabd Singh Varaich: Twitter not found, LinkedIn linkedin.com/in/gvaraich (count not retrievable), GitHub @gurshabdv (no notable repo found). |
| Distribution Signals | No public data found (no Product Hunt launch; no app store / Chrome extension; YC page indicates Hiring: False — YC company page, 2026) |
| Emails | No public data found |

Sources:
- [Bylaw company website](https://www.usebylaw.com)
- [Bylaw on Y Combinator](https://www.ycombinator.com/companies/bylaw)
- [Mazin Al-Ani LinkedIn](https://www.linkedin.com/in/mazinalani/)
- [Gurshabd Singh Varaich LinkedIn](https://www.linkedin.com/in/gvaraich/)
- [Galileo Agent Control launch — VentureBeat](https://venturebeat.com/ai/galileo-launches-agentic-evaluations-to-fix-ai-agent-errors-before-they-cost-you)
- [Galileo Agent Control — The New Stack](https://thenewstack.io/galileo-agent-control-open-source/)
- [Prompt Security Series A](https://prompt.security/press/prompt-security-raises-18m-series-a-to-accelerate-its-mission-to-secure-genai-in-enterprises)
- [Best AI Agent Guardrails — Galileo blog](https://galileo.ai/blog/best-ai-agent-guardrails-solutions)
- [AI Guardrails 2026 — StateTech Magazine](https://statetechmagazine.com/article/2026/01/ai-guardrails-will-stop-being-optional-2026)
- [Galileo Free Agent Reliability Platform — PRNewswire](https://www.prnewswire.com/news-releases/galileo-announces-free-agent-reliability-platform-302508172.html)
