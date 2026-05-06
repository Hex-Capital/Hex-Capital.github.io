# Scope

> We make your product discoverable and usable by any AI agent

| Field | Value |
|-------|-------|
| Website | https://tryscope.app |
| YC Page | https://www.ycombinator.com/companies/scope |
| Batch | Spring 2026 (YC company page) |
| Industry | B2B / B2B |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Generative AI, B2B, AI |
| YC Partner | Nicolas Dessaigne (YC company page) |
| Emails | No public data found (demo booking: cal.com/anand-scope/demo per tryscope.app) |

## The Idea

**Problem:** Products are increasingly used through AI coding/dev agents — Claude Code, Codex, Cursor — and "agents are starting to influence which tools get chosen, how they get set up, and whether they keep getting used" (YC company page). Companies have limited visibility into whether agents pick their product over a competitor, where the agent breaks, or where docs/product surfaces confuse the agent (tryscope.app). Initial customer segment: "products with direct agent interaction: APIs, infrastructure products, CLIs, and MCP servers" (YC company page).

**Approach:** Per tryscope.app, Scope (a) "simulates how AI agents discover, understand, and complete tasks across real workflows," (b) "captures tool calls, errors, friction, latency, and agent reasoning," and (c) "provides specific recommendations to improve agent experience." The YC page frames the output as showing teams "when the agent picks them versus a competitor, where it breaks, where docs or product surfaces confuse the agent, and what to change."

**Differentiation:** Adjacent categories: (1) AEO/GEO platforms (Profound, AthenaHQ, Daydream) optimize brand visibility in *consumer* AI answers (ChatGPT, Perplexity) (tryprofound.com; athenahq.ai; withdaydream.com). (2) Agent observability tools (LangSmith, Braintrust, Helicone, Arize, Maxim) instrument agents from the *agent-builder* side (augmentcode.com listing, 2026). [Inferred]: Scope's stated angle is the *product-vendor* side of agent usage (APIs/CLIs/MCP servers) measured via simulated agent runs, which neither AEO nor agent-observability tools target directly.

**Business Model:** No pricing page on tryscope.app at time of fetch. Site is in "early access" with demo booking via cal.com/anand-scope/demo (tryscope.app, May 6, 2026). [Inferred]: Most likely SaaS subscription for API/infra/CLI/MCP-server vendors, given B2B targeting and simulation-run/usage shape of the product.

**TAM/SAM:** No TAM/SAM source specifically for "agent-side product analytics." Adjacent reference points: agentic AI market reached $7.6B in 2026 with >40% CAGR projected through 2034 (cloud.google.com / Google Cloud "AI agent trends 2026"; nationalinterest.org via search snippet); enterprise spending on agentic AI rose 340% YoY 2025–2026 (search snippet, source not directly fetched). No public data found for Scope's specific addressable segment.

**GTM / Distribution:** No public GTM data. [Inferred]: Founder-led direct sales to API/infra/CLI/MCP-server vendors via demo booking page, given solo-founder stage, San Francisco location, and the explicit ICP listed on the YC page.

## Defensibility

No defensibility signals found in public sources at this stage. [Inferred]: Potential moat could develop via (a) proprietary corpus of agent-trace data across agents × products (data network effect), (b) benchmark/leaderboard effects if Scope becomes the reference for "agent-readiness" of APIs and MCP servers, or (c) deep integrations with multiple agent runtimes (Claude Code, Codex, Cursor) — all unproven at this stage.

**Market structure:** No structural barrier identified at this stage. [Inferred]: Hyperscalers (Anthropic, OpenAI) and agent-observability incumbents (LangSmith, Braintrust) could plausibly add agent-side product analytics, though doing so from the agent-builder side would not directly serve the API/MCP-vendor buyer Scope targets.

**Commoditization risk:** [Inferred]: The simulation-and-trace pattern is technically replicable by any team able to wire up agent SDKs (Claude Code, Codex, Cursor) and parse their tool-call telemetry; barriers are primarily data, taxonomy, and integration breadth rather than novel science.

## Market & Traction

**Traction signals (Scope-specific):**
- Status: "Offering early access" (tryscope.app, May 6, 2026).
- Funding: Listed on F4.fund startup roster (f4.fund/startups/tryscope).
- Investor signal: Henri Deshays (GP, Newfund) listed as a backer per search-snippet coverage; "Newfund is listed among the supporters" (search snippet, not directly fetched).
- YC batch: Spring 2026 / "P26" (linkedin.com/in/anand-arnaud-pajaniradjane; rocketreach.co listing).
- Revenue: No public data found.
- Users / paying customers: No public data found.
- Press coverage: No public data found.
- Product Hunt: No launch found.
- Social: No company Twitter/X or LinkedIn page found in search results.
- Discord/Slack community: No public data found.
- Job postings: No active YC jobs page returned for Scope (search did not surface any). Hiring flag = False (YC page).
- App store / Chrome Web Store: Not applicable — product is a web/SaaS platform, not an app or extension.

**Competitive landscape:**
- **Profound** (tryprofound.com) — $155M raised total; latest Series C $96M at ~$1B valuation (Fortune, Feb 24, 2026; tamradar.com); "700+ enterprise clients" including Target, Walmart, Figma, MongoDB (Yahoo Finance, 2026). Differentiator vs. Scope: optimizes brand citations in *consumer* AI answer engines (ChatGPT/Perplexity), not agent-side product/tool selection.
- **AthenaHQ** (athenahq.ai, YC) — $2.7M total raised across 2 rounds, $2.2M Seed June 17, 2025 (Crunchbase via tracxn.com; founderlodge.com). Founded 2025 by Andrew Yan and Alan Yao; ~12 employees (Tracxn). Differentiator vs. Scope: AEO/GEO for AI search visibility on consumer LLMs.
- **Daydream Labs** (withdaydream.com) — $21M total funding across 2 rounds; $15M Series A April 3, 2026, led by WndrCo with First Round Capital and Basis Set Ventures (prnewswire.com; founderlodge.com). Differentiator vs. Scope: AI-native SEO/GEO agency model rather than self-serve agent simulation.
- **LangSmith / Braintrust / Helicone / Arize / Maxim** (augmentcode.com listing of "7 Best AI Agent Observability Tools for Coding Teams in 2026"). Funding/ARR not gathered for each individually. Differentiator vs. Scope: observe agents from the *agent-builder* perspective (LLM calls, traces, evals); Scope sits on the *product-vendor* side measuring whether agents successfully discover and use the vendor's API/CLI/MCP server. [Inferred]: closest functional analog category but distinct buyer.

Direct-competitor count is small because the "agent-side product analytics for API/MCP vendors" framing is new; nearest cited adjacencies are AEO platforms (consumer AI search) and agent-observability platforms (agent-builder side).

**Why now:** [Inferred]: Three concurrent enabling shifts in the last 12–18 months — (1) coding agents (Claude Code, Codex, Cursor) reaching daily-driver adoption among developers; (2) Anthropic's Model Context Protocol (MCP) standardizing third-party tool integration into agents (claude.com/blog "Building agents that reach production systems with MCP"); (3) growing share of API/CLI usage routed through agents rather than humans, mirroring the AEO shift on the consumer side that produced Profound's $1B valuation (Fortune, Feb 2026).

## Founders & Team

**Anand-Arnaud Pajaniradjane** — Founder & sole team member (YC company page; team size 1).
- Education: CentraleSupélec (Paris-Saclay) double bachelor in Mathematics and Physics with honors (search snippet, LinkedIn); double-degree program at UC Berkeley, Industrial Engineering and Operations Research Department (CentraleSupélec X post, x.com/centralesupelec/status/1704041063005004170, 2023). Coursework included ML, AI, advanced statistics, OOP (search snippet, LinkedIn).
- Prior roles per search snippets (LinkedIn, RocketReach): "Founders, Inc.," "Crossfill," "REGAL," self-employed. Joined Founders Inc. per LinkedIn post dated activity-7422319070320025601 (Oct 2024 timeframe based on activity ID).
- Per YC company page: "interpretability research for closed-source models at Princeton and later as an ML engineer in GEO/AEO." Princeton affiliation not independently verified in search results.
- Twitter/X: No public account confirmed in searches; CentraleSupélec X post mentions him but is not his account.
- LinkedIn: linkedin.com/in/anand-arnaud-pajaniradjane — headline "Founder @ Scope (YC P26)" (search snippet); profile fetch blocked (HTTP 999); follower/connection count not retrievable.
- GitHub: No GitHub profile surfaced. Hugging Face: anand94ap — 1 follower, 2 following, no public models or repos (huggingface.co/anand94ap, fetched).

**Co-founder relationship:** Solo founder per YC page; not applicable.

**Founder-market fit:** Per the YC company page, founder claims background in (a) interpretability research on closed-source models at Princeton and (b) ML engineering in GEO/AEO — both directly relevant to Scope's thesis of measuring how opaque agents reason about and select third-party products. Quantitative/operations-research training at CentraleSupélec and UC Berkeley IEOR (CentraleSupélec X post, 2023) is consistent with the simulation/measurement product framing. [Inferred]: GEO/AEO industry exposure is the most concrete signal; the Princeton interpretability claim is asserted but not independently verified.

**Investors / advisors:** Listed on F4.fund's startup roster (f4.fund/startups/tryscope). Henri Deshays (GP, Newfund Capital) referenced as a backer in search snippet (signal.nfx.com/investors/henri-deshays linked in earlier results). Specific funding amount not disclosed publicly.

## Key Risks

**Category-definition risk:** "Agent-side product analytics for API/MCP vendors" is not yet an established budget line. Buyers may classify spend under existing AEO budgets (where Profound has captured incumbency at $1B valuation, Fortune Feb 2026) or under agent-observability budgets (LangSmith et al.), pulling demand toward incumbents on either side.

**Solo-founder execution + integration breadth:** Product must run "real workflows across agents" (YC page) — implying multi-agent integrations across Claude Code, Codex, Cursor, and MCP runtimes. Maintaining parity as each agent's APIs and tool-call schemas evolve is integration-heavy work for a team of one (YC page, team size 1).

**Platform dependency on closed agent vendors:** Anthropic, OpenAI, and Cursor control the agents being measured and could ship native "agent compatibility" diagnostics for tool/MCP-server developers (e.g., MCP server registries, native eval tooling — claude.com/blog on MCP), foreclosing the third-party measurement layer.

**Substrate volatility:** MCP itself is a 2024–2025 emerging standard (claude.com/blog); if agent vendors converge on a different integration model or if MCP semantics change materially, Scope's simulation harness may require continual rework.

**Unverified founder claim:** YC page asserts Princeton interpretability research; not independently confirmed via search. [Inferred]: Diligence should request specifics (PI, lab, publications).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found for "agent-side product analytics" specifically; adjacent agentic AI market $7.6B in 2026, >40% CAGR through 2034 (Google Cloud "AI agent trends 2026"; nationalinterest.org via search snippet) |
| SAM | No public data found |
| Traction | Early access status (tryscope.app, May 6, 2026); listed on F4.fund roster (f4.fund/startups/tryscope); no users/revenue/press disclosed |
| Revenue Signal | No public data found (no pricing page on tryscope.app, May 6, 2026; demo-booking only) |
| Founders | Anand-Arnaud Pajaniradjane (Founder): CentraleSupélec + UC Berkeley IEOR (CentraleSupélec X post, 2023); claimed Princeton interpretability research and prior GEO/AEO ML engineering (YC company page) |
| Competitors | Profound ($155M raised, $1B Series C valuation Feb 2026, 700+ enterprises — Fortune; consumer-AI AEO not agent-side); AthenaHQ ($2.7M raised, $2.2M Seed Jun 2025 — Tracxn/Crunchbase; consumer AEO/GEO); Daydream Labs ($21M raised, $15M Series A Apr 2026 — PRNewswire; AI-native SEO/GEO agency); LangSmith/Braintrust/Helicone/Arize/Maxim (funding not gathered — augmentcode.com 2026 listing; agent-builder-side observability) |
| Moat Signals | No public data found |
| Risk Factors | Category-definition risk vs. AEO/agent-observability incumbents; solo-founder integration breadth; platform dependency on Anthropic/OpenAI/Cursor |
| Founder Reach | Anand-Arnaud Pajaniradjane: Twitter not found, LinkedIn linkedin.com/in/anand-arnaud-pajaniradjane (count not retrievable, profile blocked HTTP 999), Hugging Face anand94ap 1 follower (huggingface.co/anand94ap), GitHub not found |
| Distribution Signals | No Product Hunt launch found; no Chrome Web Store / app store presence (web SaaS); no company Twitter/LinkedIn surfaced in search; demo via cal.com/anand-scope/demo (tryscope.app) |
| Emails | No public data found (demo booking: cal.com/anand-scope/demo per tryscope.app) |
