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
| YC Partner | Diana Hu |
| Emails | alsayyad@berkeley.edu (founder personal, from heyadam.org) |

## The Idea

**Problem:** As enterprises deploy AI agents into production workflows — legal reasoning, customer support, internal operations — these agents fail in ways that are difficult to detect, diagnose, and prevent. Traditional software monitoring tools are not designed for the non-deterministic, multi-step behavior of autonomous agents. Failures include hallucinations, tool call errors, memory drift, and planning breakdowns. The customer segment is engineering teams building and deploying AI agents at scale. According to Gartner, by 2026 40% of enterprise applications will feature embedded task-specific agents, up from less than 5% in early 2025 (Masterofcode.com, citing Gartner, via search snippet), creating a rapidly growing need for production reliability tooling.

**Approach:** Cascade treats agent execution as data. The platform observes real production runs and trains custom evaluator models that learn what correct behavior looks like within a company's specific workflows. This generates training signal from operational data, enabling continuous improvement in agent safety and reliability after deployment (YC company page; LinkedIn company page). Rather than applying generic guardrails, Cascade builds self-improving safety and reliability models that continuously maintain, update, and prevent threats and failures at scale (YC company page).

**Differentiation:** Compared to generic AI observability platforms (e.g., Braintrust, Arize, Langfuse) that focus on tracing, logging, and dashboarding, Cascade's stated approach centers on learning custom evaluator models from production behavior rather than relying on pre-defined metrics or LLM-as-a-judge approaches. Compared to Raindrop (which also trains custom models for monitoring), Cascade emphasizes the self-improving, closed-loop nature of its models — turning production observations into training signal. Compared to Deepchecks, which offers pre-built evaluation frameworks, Cascade's models are described as adaptive to each company's workflows.

**Business Model:** No public pricing page found. The website (runcascade.com) rendered as a Framer-built page with no visible pricing or feature details at the time of research. [Inferred]: Most likely monetization path is usage-based or subscription SaaS pricing for production monitoring infrastructure, consistent with comparable platforms in the AI observability space (e.g., Braintrust, Arize).

**TAM/SAM:** The global agentic AI market was valued at USD 5.2 billion in 2024 and is projected to reach USD 196.6 billion by 2034, at a CAGR of 43.8% (Market.us, 2025 via search snippet). A separate estimate sizes the market at USD 7.55 billion in 2025 growing to USD 93.20 billion by 2032 at a CAGR of 44.6% (MarketsandMarkets, 2025 via search snippet). No public TAM/SAM data found for the AI agent safety/evaluation sub-segment specifically. Cybersecurity Ventures estimates AI expands the total addressable market for cybersecurity providers to $2 trillion (Cybersecurity Ventures, via search snippet), though Cascade's slice of this is undefined.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct sales and developer adoption among engineering teams building AI agents, starting with YC-network companies. The LinkedIn page mentions legal reasoning and customer support as application areas, suggesting early vertical focus on those workflows.

## Defensibility

Cascade's stated approach — training custom evaluator models from each customer's production data — could create a data flywheel: the more agent runs observed, the better the evaluator models become, creating switching costs as the models encode company-specific behavioral norms. This defensibility is prospective and unproven at this stage.

**Market structure:** AI agent observability is a nascent market where incumbents (Datadog, New Relic, Splunk) have announced AI monitoring extensions of their existing platforms. However, these extensions layer on top of traditional APM architectures not designed for multi-step, non-deterministic agent workflows. [Inferred]: The structural barrier for incumbents is that their existing architectures and pricing models are optimized for deterministic infrastructure monitoring, not for training custom ML models on agent behavior traces. This may slow their ability to deliver the closed-loop learning approach Cascade describes.

**Commoditization risk:** The AI agent observability space is crowding rapidly. ClickHouse acquired Langfuse, Coralogix acquired Aporia, Anthropic acqui-hired HumanLoop, and Snyk acquired Invariant Labs (CB Insights, 2026 via search snippet). Well-funded startups — Braintrust ($80M Series B, $800M valuation; Axios, Feb 2026), Raindrop ($15M seed; Yahoo Finance, Dec 2025), Arize ($131M total, including $70M Series C; search results, Feb 2025 via search snippet) — are building overlapping capabilities. The technical barrier to building production observability for agents is moderate; the differentiator would be the quality and specificity of custom evaluator models trained on production data.

## Market & Traction

1. **Traction signals:**
   - LinkedIn followers: 391 (LinkedIn company page, accessed Mar 2026)
   - Company Twitter/X: @cascade_intel (YC company page); follower count not retrievable
   - Team size: 2 (YC company page)
   - No public revenue, user counts, customer names, or growth metrics found
   - No Product Hunt launch found for the runcascade.com product (Product Hunt results reference unrelated products named "Cascade")
   - No press coverage found in named publications referencing Cascade (runcascade)
   - No app store, Chrome Web Store, or download count data found
   - Website not fully accessible at time of research (rendered as CSS/framework only)

2. **Competitive landscape:**

   | Competitor | Funding | Revenue/ARR | Key Differentiator vs. Cascade |
   |-----------|---------|-------------|-------------------------------|
   | **Braintrust** | $80M Series B at $800M valuation (Axios, Feb 2026) | Revenue unknown | Full-stack observability platform with tracing, evaluation, and prompt playground; customers include Notion, Replit, Cloudflare, Ramp, Dropbox (SiliconANGLE, Feb 2026 via search snippet) |
   | **Raindrop** | $15M seed led by Lightspeed (Yahoo Finance, Dec 2025) | Revenue unknown | Positions as "Sentry for AI agents"; trains small custom models per AI product; processes millions of events daily (PR Newswire, Dec 2025 via search snippet) |
   | **Arize AI** | $131M total incl. $70M Series C (search results, Feb 2025 via search snippet) | Revenue unknown | End-to-end AI observability with OpenTelemetry instrumentation; clients include Uber, DoorDash, U.S. Navy (search results via search snippet) |
   | **Deepchecks** | $14M seed (Crunchbase, Jun 2023 via search snippet) | Revenue unknown | Open-source LLM evaluation and monitoring with pre-built scorers; multi-step agent workflow analysis (Deepchecks website via search snippet) |
   | **Langfuse** (acquired by ClickHouse) | $4M seed from Lightspeed, La Famiglia, YC (Langfuse blog via search snippet) | Revenue unknown | Open-source (MIT license) LLM observability; now backed by ClickHouse's $15B infrastructure (search results via search snippet) |

3. **Why now:** [Inferred]: Several converging factors opened this market window: (a) AI agents moved from demos to production in 2025, with Gartner projecting 40% of enterprise applications will embed task-specific agents by 2026 (Masterofcode.com, citing Gartner, via search snippet); (b) the failure modes of production agents — hallucinations, tool call errors, planning breakdowns — became visible at scale, creating demand for specialized monitoring; (c) M&A consolidation in 2025 (ClickHouse/Langfuse, Coralogix/Aporia, Anthropic/HumanLoop, Snyk/Invariant Labs) validated the category; (d) seed investment in AI agent companies reached ~$700M in 2025 (Crunchbase News, 2025 via search snippet), indicating substantial infrastructure buildout requiring reliability tooling.

## Founders & Team

**Adam AlSayyad** — Co-Founder & CEO
- BS Computer Science, UC Berkeley (YC company page)
- Researcher at Berkeley Artificial Intelligence Research (BAIR) Lab, focusing on graph reasoning models and agentic safety (YC company page)
- Consulted for NASA (heyadam.org)
- Built embedded systems for functional electrical stimulation (FES) devices at Evolution Devices (heyadam.org)
- Research with Professor Dawn Song on AI voice security (heyadam.org via search snippet)
- Project: "graph traversal for LLM reasoning" (heyadam.org)
- Twitter/X: No public personal account found
- LinkedIn: linkedin.com/in/adam-alsayyad-4a9bb1228 (search results); additional profile at linkedin.com/in/adam-alsayyad-88991b359 (search results)
- GitHub: Repo referenced on personal site (xmgad/Agentic-Graph-Simulation) returns 404; no public profile confirmed

**Haluk Cem Demirhan** — Co-Founder & CTO
- BS Computer Science and Mathematics, UC Berkeley (YC company page)
- Built production monitoring infrastructure and scaled agent systems at Netflix and Amazon (YC company page)
- Research at BAIR Lab on long-horizon memory optimization and failure mode taxonomies for AI agents (YC company page)
- Twitter/X: No confirmed personal account found
- LinkedIn: linkedin.com/in/halukcemdemirhan — "Co-Founder and CTO @ Cascade (YC W26)" (LinkedIn via search snippet)
- GitHub: No public profile found
- Kaggle: kaggle.com/halukcemdemirhan (Kaggle via search snippet)

**Co-founder relationship:** Both founders studied Computer Science at UC Berkeley and both conducted research at the Berkeley Artificial Intelligence Research (BAIR) Lab. This shared institutional background indicates prior acquaintance.

**Founder-market fit:** Both founders have direct technical experience in the problem domain. Adam's research on agentic safety and graph reasoning at BAIR Lab and his pen-testing of AI-integrated applications map to Cascade's focus on agent safety evaluation. Haluk's production monitoring experience at Netflix and Amazon, combined with his BAIR Lab research on failure mode taxonomies for AI agents, directly aligns with building reliability infrastructure for autonomous systems. The combination of production engineering experience (Haluk) and AI safety research (Adam) covers both the infrastructure and ML components of the product.

## Key Risks

**Brand disambiguation:** "Cascade" is an extremely common product name. Search results return Cascade Strategy (strategy execution SaaS), Cascade Corporation (materials handling), Windsurf's Cascade (AI coding agent), Cascade.io (data automation), and others. This creates SEO, brand recognition, and marketing challenges. The domain runcascade.com partially mitigates this but adds a layer of indirection.

**Well-funded incumbents and competitors:** Braintrust ($80M, $800M valuation; Axios, Feb 2026), Raindrop ($15M seed; Yahoo Finance, Dec 2025), and Arize ($131M total; search results, 2025 via search snippet) are building in the same AI agent observability/evaluation space with substantially more capital and existing customer bases. M&A consolidation (ClickHouse/Langfuse, Snyk/Invariant Labs) further concentrates resources among established players.

**Raindrop overlap:** Raindrop's approach — training "small, custom models that adapt to the unique shape of each AI product" for monitoring (PR Newswire, Dec 2025 via search snippet) — closely mirrors Cascade's described methodology of training custom evaluator models from production data. Raindrop has $15M in seed funding and backing from Lightspeed, YC, and notable AI founders.

**Pre-product visibility:** At the time of research, the company website (runcascade.com) did not render substantive product content, no public documentation or demos were found, no customers or users are publicly referenced, and no press coverage exists. This makes it difficult to evaluate the actual product state independently.

**Acquisition risk to category:** Multiple acquisitions in the AI evaluation/observability space in 2025 (ClickHouse/Langfuse, Coralogix/Aporia, Anthropic/HumanLoop, Snyk/Invariant Labs) suggest that standalone players in this category may be absorbed before reaching scale, potentially compressing the time window for independent growth.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Agentic AI market: USD 5.2B (2024) → USD 196.6B (2034) at 43.8% CAGR (Market.us, 2025 via search snippet). No specific TAM for AI agent safety/evaluation sub-segment found. |
| SAM | No public data found |
| Traction | LinkedIn: 391 followers (LinkedIn, Mar 2026). No other public traction data found. |
| Revenue Signal | No public data found |
| Founders | Adam AlSayyad (CEO): BAIR Lab researcher (graph reasoning, agentic safety), UC Berkeley CS, NASA consultant. Haluk Cem Demirhan (CTO): Production monitoring at Netflix & Amazon, BAIR Lab (memory optimization, failure mode taxonomies), UC Berkeley CS & Math. |
| Competitors | Braintrust ($80M raised, $800M valuation, revenue unknown, full-stack AI observability); Raindrop ($15M raised, revenue unknown, custom models for agent monitoring); Arize ($131M raised, revenue unknown, end-to-end AI observability with enterprise clients); Deepchecks ($14M raised, revenue unknown, open-source LLM evaluation); Langfuse ($4M raised, acquired by ClickHouse, open-source LLM observability) |
| Moat Signals | Potential data flywheel from custom evaluator models trained on customer-specific production data; unproven at this stage |
| Risk Factors | Brand disambiguation challenge, well-funded competitors with similar approaches, pre-product public visibility |
| Founder Reach | Adam AlSayyad: Twitter not found, LinkedIn linkedin.com/in/adam-alsayyad-4a9bb1228, GitHub not confirmed. Haluk Cem Demirhan: Twitter not found, LinkedIn linkedin.com/in/halukcemdemirhan, GitHub not found. |
| Distribution Signals | No public data found |
| Emails | alsayyad@berkeley.edu (founder personal, heyadam.org) |
