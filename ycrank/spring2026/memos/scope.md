# Scope

> We make your product discoverable and usable by any AI agent

| Field | Value |
|-------|-------|
| Website | https://tryscope.app |
| YC Page | https://www.ycombinator.com/companies/scope |
| Batch | Spring 2026 (YC page) |
| Industry | B2B / B2B |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Generative AI, B2B, AI |
| YC Partner | Nicolas Dessaigne (YC page) |
| Emails | anand@tryscope.app (YC page) |

## The Idea

- **Problem:** Companies whose products are consumed via AI agents (APIs, infra, CLIs, MCP servers) have no visibility into when agents pick a competitor, where calls break, or where docs confuse the agent (YC company description); current alternative is unmonitored production telemetry or none ([Inferred]: based on company description framing).
- **Approach:** Scope "simulates real-world AI agent interactions across actual user workflows" and captures tool calls, errors, latency, and the agent's reasoning, then suggests changes to docs/product surfaces (tryscope.app website).
- **Differentiation:** Profound, AthenaHQ, Bluefish AI, Peec.ai focus on brand mention tracking inside AI search answers (Profound blog, Feb 2026); [Inferred]: Scope differs by simulating end-to-end agent task completion against the product itself (API/CLI/MCP) rather than measuring textual brand citations.
- **Business Model:** No public pricing; site routes to a demo at cal.com/anand-scope/demo (tryscope.app); [Inferred]: SaaS subscription targeting API/infra/MCP vendors, sales-led given demo-gated entry.
- **TAM/SAM:** AEO/GEO category leaders have raised $200M+ collectively (Plate Lunch Collective, 2026); no public TAM/SAM data found specific to "agent experience" monitoring for APIs/MCP servers.
- **GTM / Distribution:** [Inferred]: Founder-led outbound to API/infra/MCP vendors via YC network, given demo-only entry, solo founder, and F4 Fund/YC backing visible on f4.fund/startups/tryscope.

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond YC backing and F4 Fund inclusion (f4.fund/startups/tryscope).
- **Future moat:** [Inferred]: Proprietary dataset of agent failure modes across Claude Code, Codex, Cursor accumulated from customer workflows could become a benchmark/data moat; unproven because no customer count or data volume disclosed.
- **Market structure:** [Inferred]: No structural barrier identified at this stage — agent vendors (Anthropic, OpenAI) and AEO incumbents (Profound, AthenaHQ) could extend into agent-usage analytics; differentiation is execution focus on API/CLI/MCP surfaces.
- **Commoditization risk:** Profound already ships "Agent runs across hundreds of inputs" (Profound product update, 2026) and any of the 9+ funded AEO/GEO platforms could add agent-usage simulation; observability tools (LangSmith, Helicone) sit adjacent.

## Market & Traction

- **Traction signals:**
  - Team size: 1 (YC page)
  - Backed by F4 Fund (f4.fund/startups/tryscope) and Y Combinator Spring 2026 (YC page)
  - Founder Twitter @anandPa94 (YC page); follower count not retrievable
  - LinkedIn company page "Scope (YC P26)" exists (linkedin.com/company/tryscope); follower count not retrievable
  - HuggingFace profile huggingface.co/anand94ap (search result)
  - Demo-gated site; no public customer logos, revenue, or user numbers found
  - No Product Hunt launch found (Product Hunt search returned unrelated "Scope" products)
- **Competitors (5):**
  - Profound ($155M+ total raised, $1B valuation Series C Feb 2026 led by Lightspeed; revenue unknown; Yahoo Finance Feb 2026): tracks brand mentions in AI search across 10+ engines vs. Scope's focus on agent task execution against product surfaces.
  - AthenaHQ ($2.2M seed June 2025 from YC, FCVC, Red Bike, Eli Schwartz; revenue unknown; founder ex-Google Search/DeepMind): GEO platform measuring AI brand perception and recommendations vs. Scope's agent-usage simulation.
  - Bluefish AI (raised amount not found in search; revenue unknown): brand safety, LLM content optimization, AI ad campaigns (Profound comparison post) vs. Scope's product-side agent interaction debugging.
  - Peec.ai ($29M total raised; revenue unknown; Plate Lunch Collective 2026): AEO analytics platform vs. Scope's agent task simulation.
  - Azoma ($4M pre-Series A Dec 2025; revenue unknown; Plate Lunch Collective): AEO platform vs. Scope's API/CLI/MCP focus.
- **Why now:** Anthropic's Claude Code, OpenAI Codex, and Cursor crossed mainstream developer adoption in 2025 and the MCP standard's server directory reached 22,775 listings by May 2026 (Glama directory, via search snippet), creating measurable agent-mediated product usage; [Inferred]: this is the catalyst that makes agent-experience instrumentation a budget line.

## Founders & Team

- **Anand-Arnaud Pajaniradjane (Founder):**
  - Background: MEng in IEOR, UC Berkeley (LinkedIn); CentraleSupélec double-degree exchange to Berkeley (CentraleSupélec X post, Sep 2023); per YC description, "interpretability research for closed-source models at Princeton and later ML engineer in GEO/AEO"; HuggingFace profile huggingface.co/anand94ap (search result); RocketReach lists him as Founder, Scope (YC P26) (search result).
  - Twitter/X: @anandPa94 (YC page); count not retrievable.
  - LinkedIn: "Founder at Scope (YC P26)" headline area at linkedin.com/in/anand-arnaud-pajaniradjane (search result); count not retrievable.
  - GitHub: No public GitHub handle found in search; HuggingFace handle anand94ap exists (search result).
- **Co-founder relationship:** No public data on co-founder history — solo founder per YC page (team size 1).
- **Founder-market fit:** Founder's stated path of interpretability research at Princeton plus ML engineering in GEO/AEO (YC description) maps directly to measuring how LLM-based agents select and use products; no advisors or board members disclosed publicly.

## Key Risks

- **Direct competition from funded AEO incumbents:** Profound ($155M+ raised, $1B valuation Series C Feb 2026, Yahoo Finance) has shipped "Agent runs" features and could extend into agent-usage analytics before Scope acquires customers; no mitigation found beyond Scope's narrower API/CLI/MCP focus per tryscope.app.
- **Solo-founder execution risk on a multi-surface integration product:** YC page lists team size 1; building monitors across Claude Code, Codex, Cursor, plus customer APIs/CLIs/MCPs is integration-heavy and not hiring per company_data (Hiring: False).
- **Platform dependency on agent vendors:** Scope's monitoring relies on continued ability to instrument Claude Code, Codex, Cursor (tryscope.app); changes to those agents' surfaces or first-party analytics by Anthropic/OpenAI could displace third-party measurement.
- **Name collision and brand search noise:** Multiple unrelated products use "Scope," including a project-management tool on Product Hunt, AgentScope (open-source agent framework on GitHub), and tryscope.ai (Product Hunt and search results); risk of organic discovery dilution.
- **Unvalidated buyer budget:** No public customers, revenue, pricing, or LOIs surfaced in searches; [Inferred]: whether API/infra/MCP vendors will fund a dedicated "agent experience" line item versus folding it into existing observability budgets is unproven.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | YC Spring 2026 batch (YC page), F4 Fund portfolio listing (f4.fund/startups/tryscope), founded 2025 (YC page); no customer, revenue, or user metrics found |
| Revenue Signal | No public data found (no pricing page; demo-gated via cal.com/anand-scope/demo) |
| Founders | Anand-Arnaud Pajaniradjane (Founder): UC Berkeley MEng IEOR, CentraleSupélec, prior Princeton interpretability research and GEO/AEO ML engineering per YC description |
| Competitors | Profound ($155M+ raised, $1B valuation, revenue unknown, AI brand-mention tracking); AthenaHQ ($2.2M seed, revenue unknown, GEO analytics); Bluefish AI (raised unknown, revenue unknown, brand safety/LLM content); Peec.ai ($29M raised, revenue unknown, AEO analytics); Azoma ($4M pre-Series A, revenue unknown, AEO platform) |
| Moat Signals | No public data found |
| Risk Factors | Direct competition from funded AEO incumbents (Profound), solo-founder execution risk, platform dependency on agent vendors |
| Founder Reach | Anand-Arnaud Pajaniradjane: Twitter @anandPa94 (count not retrievable), LinkedIn linkedin.com/in/anand-arnaud-pajaniradjane (count not retrievable), GitHub not found (HuggingFace @anand94ap) |
| Distribution Signals | YC Spring 2026 acceptance (YC page), F4 Fund portfolio inclusion (f4.fund/startups/tryscope); no Product Hunt, Chrome Store, app store, or press coverage found |
| Emails | anand@tryscope.app (YC page) |

Sources:
- [Scope YC company page](https://www.ycombinator.com/companies/scope)
- [tryscope.app](https://tryscope.app/)
- [F4 Fund — Scope](https://f4.fund/startups/tryscope)
- [Anand-Arnaud Pajaniradjane LinkedIn](https://www.linkedin.com/in/anand-arnaud-pajaniradjane/)
- [HuggingFace anand94ap](https://huggingface.co/anand94ap/models)
- [CentraleSupélec X post about Berkeley exchange](https://x.com/centralesupelec/status/1704041063005004170)
- [Profound Series C funding — Yahoo Finance](https://finance.yahoo.com/news/profound-raises-series-c-1b-130000242.html)
- [AthenaHQ](https://athenahq.ai/)
- [Plate Lunch Collective — AEO/GEO platforms comparison](https://www.platelunchcollective.com/aeo-tools-analysis-10-platforms-compared-beyond-marketing-materials-because-youve-been-searching-for-them/)
- [Profound vs Bluefish AI comparison](https://nicklafferty.com/blog/profound-vs-bluefish/)
- [Scope LinkedIn company page](https://www.linkedin.com/company/tryscope)
