# ReasonBlocks

> Infra layer for smarter and cheaper AI agents

| Field | Value |
|-------|-------|
| Website | https://reasonblocks.com/ |
| YC Page | https://www.ycombinator.com/companies/reasonblocks |
| Batch | Spring 2026 (YC page) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, SaaS, B2B |
| YC Partner | Aaron Epstein (YC page) |
| Emails | No public data found |

## The Idea

**Problem:** Production AI agents fail mid-run, burn tokens on irrelevant context, and hit budget caps before completing tasks (YC page). The customer segment is engineering teams shipping LLM agents — a population of buyers experiencing high inference cost and unreliable output. Today they instrument with LLM observability/eval tools (LangSmith, Braintrust, Langfuse) that surface failures post-hoc rather than intervene at runtime (Braintrust article, 2026 via search snippet).

**Approach:** Per the YC page, ReasonBlocks is a runtime that "catches failures mid-run, compresses what doesn't matter, and builds a private reasoning library that grows with every run" — i.e., it sits in the agent call path, monitors inefficiencies, compresses context, and accumulates reasoning patterns across deployments. Reported benchmark results: 42% accuracy improvement, 52% token reduction, 70% fewer budget cap-hits on SWE-bench Pro (YC page).

**Differentiation:** Versus LangSmith/Braintrust/Langfuse (post-hoc tracing and evaluation), ReasonBlocks claims runtime intervention plus cross-agent learning (YC page). [Inferred]: The "private reasoning library" creates a per-customer data asset that observability tools, which are typically read-only on traces, do not build.

**Business Model:** No pricing page accessible at reasonblocks.com (website not extractable at time of research; only product name was retrievable via WebFetch). No public pricing, tiers, or revenue figures found. [Inferred]: Most likely usage-based pricing tied to agent call volume or tokens processed, given the runtime-in-path positioning.

**TAM/SAM:** No public TAM/SAM data found for the AI agent infrastructure / runtime-reliability segment specifically. Adjacent LLM observability market is fragmented with multiple venture-backed entrants (Braintrust article, 2026 via search snippet).

**GTM / Distribution:** YC page describes "plugs into your existing agent stack in minutes." A search snippet states the company is "live with top Series B companies with a 90% repeat usage rate" (search snippet, source not directly verifiable). [Inferred]: Founder-led direct sales to AI-native Series B companies; SF location and YC network are the primary top-of-funnel.

## Defensibility

- **Data accumulation:** Per-customer "private reasoning library that grows with every run" (YC page) — switching costs increase as the library matures.
- **Performance benchmarks:** 42% accuracy / 52% token reduction on SWE-bench Pro (YC page) is a public technical claim, replicable in principle by a competing team but represents executed work.
- No patents, no open-source repo with star traction, and no exclusive partnerships found.

**Market structure:** No structural barrier identified at this stage. [Inferred]: Observability incumbents (LangSmith, Braintrust, Langfuse) could ship a runtime-intervention product without channel conflict; their existing trace data is a natural input to a similar reasoning-library feature.

**Commoditization risk:** [Inferred]: Two-engineer teams at AI-observability incumbents or model labs can plausibly build runtime-intervention layers. The defensibility depends on speed to compound the cross-customer reasoning library before larger players ship parity.

## Market & Traction

**Traction signals:**
- 42% accuracy improvement, 52% token reduction, 70% fewer budget cap-hits on SWE-bench Pro (YC page).
- "Live with top Series B companies with a 90% repeat usage rate" (search snippet, unverifiable source).
- LinkedIn company page exists at linkedin.com/company/reason-blocks/ (YC page); follower count not retrievable.
- No Product Hunt launch found (Product Hunt search, May 2026).
- No public Twitter/X account found (search, May 2026).
- No GitHub organization or public repo found in search.
- No press coverage in named publications found.
- YC P26 batch announcement post by Sajeev Magesh on LinkedIn dated late 2025/early 2026 (LinkedIn activity URL via search snippet).

**Competitive landscape:**
- **LangSmith** (LangChain): native LangChain instrumentation, post-hoc tracing/eval (Braintrust article, 2026 via search snippet). Funding: LangChain raised $25M Series A from Sequoia Feb 2024 (TechCrunch via search snippet, not directly verified in this research). Differentiator vs. ReasonBlocks: tracing-first, not runtime intervention.
- **Braintrust:** managed eval platform, CI/CD scorers, fast trace search (Braintrust own article, 2026 via search snippet). Funding/ARR: not retrieved. Differentiator: evaluation-first, pre-deploy quality gating rather than mid-run intervention.
- **Langfuse:** open-source observability, acquired by Clickhouse Jan 2026 (Braintrust article via search snippet). Differentiator: self-hosted/OSS, observability not intervention.
- **Helicone:** LLM observability with proxy-based tracing (Helicone blog via search snippet). Differentiator: proxy/log layer.
- **Latitude:** "purpose-built for the production agent quality problem" (Latitude blog, 2026 via search snippet). Differentiator: agent-quality eval workflow.

Direct competitors with the runtime-mid-run-correction positioning are not surfaced in public search; the closest competitive set sits in observability/eval.

**Why now:** [Inferred]: Production deployment of multi-step agents (post-2024 with frontier models supporting tool use, longer contexts) has created a measurable cost-and-failure problem at scale; agent budget cap-hits and token bloat are operational pain only once teams run agents in production at non-trivial volume. No named analyst statement found dating the inflection.

## Founders & Team

**Sajeev Magesh** — CEO & Co-Founder
- Background: Stanford CS background (YC page); USAMO qualifier (YC page); published in *Nature Sustainable Agriculture* (YC page); co-author on machine-learning/poverty/air-pollution paper in *Scientific Reports* 2025 (nature.com).
- Prior: Recognized by Points of Light "Changemaker" award; high-school cancer science project at Amador Valley HS (independentnews.com).
- LinkedIn: linkedin.com/in/sajeev-magesh-765514209/ (URL returned 404 on direct fetch); headline per search snippet: "ReasonBlocks (YC P26)."
- ORCID: 0009-0003-5855-169X (orcid.org).
- Twitter/X: No public account found.
- GitHub: No public repos surfaced in search.

**Rohan Vij** — Co-Founder
- Background: CMU, Information Systems & Artificial Intelligence (YC page).
- Prior roles: ENGIE (AI for distributed energy), UC Davis (molecular dynamics + AI research) (YC page; search snippet).
- LinkedIn: Multiple "Rohan Vij" profiles exist; the specific ReasonBlocks profile was not unambiguously identified in search results (several Rohan Vij profiles at Microsoft, Clark Construction, CSU-Fullerton are unrelated).
- Twitter/X: No public account confirmed.
- GitHub: No public repo confirmed (rohanvij.com domain belongs to a different "Python Peer Group" author per search snippet).

**Co-founder relationship:** Per a search snippet, Sajeev and Rohan have been "building together for 11 years since 2nd grade" — childhood friends, pre-dating any shared employer or university.

**Founder-market fit:** [Inferred]: Both founders have applied-AI research output (Sajeev: ML/poverty paper in *Scientific Reports*; Rohan: molecular dynamics + AI; ENGIE distributed-energy AI), giving credibility on agent reasoning techniques. Neither has a public prior exit. No named advisors, board members, or notable investors beyond YC found in public sources.

## Key Risks

**Incumbent feature substitution:** LangSmith, Braintrust, and Langfuse already own the trace data that would feed a "reasoning library." [Inferred]: Each can ship a runtime-intervention SKU on top of their existing distribution; ReasonBlocks must compound customer-specific data faster than they can.

**Benchmark generalization:** Reported gains (42% accuracy, 52% token reduction) are on SWE-bench Pro (YC page) — a coding-agent benchmark. No public evidence the gains transport to other agent workloads (sales, support, research). Risk that the runtime is specialized to coding-agent patterns.

**Unverified traction claim:** "Live with top Series B companies, 90% repeat usage rate" appears only in a search snippet with no named publication or customer (search, May 2026). Cannot be independently verified.

**Discovery surface:** No Product Hunt presence, no public Twitter/X, no GitHub repo, no press coverage found (multiple searches, May 2026). Pipeline depends on YC network and direct outbound; below-typical inbound surface for a developer-tools product.

**Co-founder concentration:** Two-person team with no engineering hires listed and "Hiring: False" in YC data. Customer-facing runtime infrastructure with claimed Series B customers requires reliability/SRE coverage that two engineers will struggle to staff.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 42% accuracy / 52% token reduction / 70% fewer budget cap-hits on SWE-bench Pro (YC page); "live with top Series B companies, 90% repeat usage" (unverifiable search snippet) |
| Revenue Signal | No public data found (no pricing page accessible at reasonblocks.com at time of research) |
| Founders | Sajeev Magesh (CEO): Stanford CS, USAMO qualifier, *Nature Sustainable Agriculture* author. Rohan Vij (Co-founder): CMU Information Systems & AI, prior ENGIE and UC Davis research. |
| Competitors | LangSmith (funding/ARR not retrieved, post-hoc LangChain tracing); Braintrust (funding/ARR not retrieved, eval-first); Langfuse (acquired by Clickhouse Jan 2026 per Braintrust article via search snippet, OSS observability); Helicone (funding/ARR not retrieved, proxy logging); Latitude (funding/ARR not retrieved, agent-quality eval) |
| Moat Signals | Per-customer "private reasoning library" growing with use (YC page); benchmark performance claims (YC page) |
| Risk Factors | Incumbent feature substitution, benchmark generalization beyond coding agents, unverified traction claim |
| Founder Reach | Sajeev Magesh: Twitter not found, LinkedIn linkedin.com/in/sajeev-magesh-765514209 (count not retrievable), GitHub not found. Rohan Vij: Twitter not found, LinkedIn (specific profile not disambiguated), GitHub not found. |
| Distribution Signals | LinkedIn company page linkedin.com/company/reason-blocks/ (YC page, count not retrievable); no Product Hunt launch found; no Chrome/app-store presence found |
| Emails | No public data found |

Sources:
- [ReasonBlocks YC page](https://www.ycombinator.com/companies/reasonblocks)
- [Sajeev Magesh LinkedIn](https://www.linkedin.com/in/sajeev-magesh-765514209/)
- [Sajeev Magesh — Points of Light](https://www.pointsoflight.org/awards/meet-the-changemaker-harnessing-technology-for-social-good/)
- [ML/poverty/air pollution paper, Scientific Reports 2025](https://www.nature.com/articles/s41598-025-87150-0)
- [ORCID — Sajeev Magesh](https://orcid.org/0009-0003-5855-169X)
- [Amador Valley cancer project — independentnews.com](https://www.independentnews.com/news/education_news/amador-valley-senior-targets-cancer-in-winning-science-project/article_a3f836b2-ff6b-11ef-ba4a-d77ba75baa67.html)
- [Langfuse alternatives 2026 — Braintrust](https://www.braintrust.dev/articles/langfuse-alternatives-2026)
- [Best LLM observability tools for AI agents — Latitude](https://latitude.so/blog/best-llm-observability-tools-agents-latitude-vs-langfuse-langsmith)
