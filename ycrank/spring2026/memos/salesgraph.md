# Salesgraph

> the context layer for fast moving sales teams

| Field | Value |
|-------|-------|
| Website | https://www.salesgraph.com/ |
| YC Page | https://www.ycombinator.com/companies/salesgraph |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Sales |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | SaaS, B2B, Sales |
| YC Partner | Andrew Miklas |
| Emails | No public data found |

## The Idea

- **Problem:** Enterprise sales reps lack consolidated context (buyer identity, trigger events, pain points, ROI, technical blockers) across the deal lifecycle and rely on manual prep against fragmented CRM, call recording, and research surfaces (YC company description, Spring 2026).
- **Approach:** Deploys "proactive revenue agents" via a Slack-native interface that ingest CRM, calls, and external signals to produce pre-call briefs, post-call follow-ups, branded business cases, mutual action plans, and pipeline health reviews (salesgraph.com product page; YC page).
- **Differentiation:** Versus Gong (layer 3 conversation intelligence) and Outreach/Salesloft (layer 2 engagement) — Salesgraph integrates with Gong, Outreach, Salesloft, Salesforce, HubSpot, Attio, Grain, Granola, Circleback, Artisan, Parallel.ai as an orchestration layer rather than replacing them (salesgraph.com integrations list); [Inferred]: positions as a horizontal "context" overlay rather than a recorder or sequencer.
- **Business Model:** No public data found on pricing tiers; [Inferred]: per-seat SaaS targeting mid-market/enterprise revenue teams given enterprise-oriented feature set (business cases, mutual action plans, pipeline reviews) on salesgraph.com.
- **TAM/SAM:** Sales Enablement Platform market USD 6.13B in 2025, projected USD 25.65B by 2034 at 17.20% CAGR (Fortune Business Insights, 2025).
- **GTM / Distribution:** [Inferred]: Founder-led enterprise sales leveraging Mintlify alumni network and YC Spring 2026 batch demo day pipeline — no public GTM channels or partnerships disclosed.

## Defensibility

- **Moat today:** No defensibility signals found in public sources; integrations breadth across 12+ tools (salesgraph.com) is a feature, not a barrier.
- **Future moat:** [Inferred]: Proprietary deal-graph dataset derived from call recordings + CRM + outcomes could compound switching costs if win/loss patterns improve forecasting and coaching accuracy — unproven without disclosed customer data.
- **Market structure:** [Inferred]: No structural barrier identified at this stage; the orchestration layer pattern is also being pursued by Momentum.io and other Slack-native sales tools (Momentum.io 2025 buyer's guide).
- **Commoditization risk:** Incumbents Gong and the merged Clari+Salesloft entity (combined $450M ARR, Dec 2025 merger close, Forrester) own the underlying call and engagement data and have announced AI agent expansions; LLM orchestration over existing APIs is replicable by funded competitors.

## Market & Traction

- **Traction signals:**
  - Company website live with full product page and integrations listed (salesgraph.com, accessed May 2026).
  - YC profile listing 2 founders, SF, Spring 2026 batch (ycombinator.com/companies/salesgraph).
  - LinkedIn announcement post by Ruhan Ponnada about joining YC with Ricardo to build Salesgraph (linkedin.com/posts/ruhanponnada, activity ID 7442246355319836673).
  - Company X/Twitter account exists at x.com/salesgraph (follower count not retrievable via search).
  - No revenue, customer count, Product Hunt, press, Chrome extension, or app store data found in public sources.
- **Competitors:**
  - Gong (~$500M raised, $300M+ ARR Jan 2025, 28% YoY): conversation intelligence incumbent with native data ownership of call recordings (Contrary Research; Tellius 2026 report).
  - Clari + Salesloft (merged Dec 2025, ~$450M combined ARR, 5,000+ customers): revenue orchestration platform now spanning forecast + engagement layers (Forrester; Salesloft press).
  - Outreach (revenue unknown publicly, raised ~$489M per prior reporting; not re-verified this session): layer-2 sales engagement with deal-AI extension (Knowlee comparison, 2026).
  - Momentum.io (revenue unknown, funding not verified this session): Slack-native sales automation, direct overlap with Salesgraph's Slack-native delivery (Momentum.io 2025 buyer's guide).
  - Day.ai (revenue/funding unknown publicly): AI-native CRM with auto-generated context from calls and email, adjacent overlap on "context" positioning [Inferred]: from category framing; no specific Day.ai data returned in search.
- **Why now:** [Inferred]: LLM cost and latency reduction across 2024-2025 plus broad API availability from Gong, Salesforce, and HubSpot make multi-source agent orchestration over the sales stack feasible at per-rep economics; corroborated by sales-enablement reports citing AI-orchestrated revenue workflows as primary growth driver (Fortune Business Insights, 2025).

## Founders & Team

- **Ricardo Nunez (Co-founder):**
  - Background: Full Stack Engineer at Mintlify (LinkedIn linkedin.com/in/ricardonunez-01/; RocketReach); one of first 10 employees at Mintlify (Ruhan Ponnada LinkedIn post); built internal business-case generator at Mintlify combining call recordings, news triggers, ROI calculator, and case studies (YC company description).
  - Twitter/X: @ricardonunez_io, joined May 2023, self-described "Typescript fella" and Million JS community advocate (x.com/ricardonunez_io) — follower count not retrievable.
  - LinkedIn: "Engineering @ Mintlify" (linkedin.com/in/ricardonunez-01/).
  - GitHub: @ricardonunez-io with repos including queue-benchmarks (Bun vs Go) and servercomponents (github.com/ricardonunez-io) — no repo with >100 stars found.
- **Ruhan Ponnada (Co-founder):**
  - Background: BS Computer Science, Georgia Institute of Technology, 2020-2023 (LinkedIn linkedin.com/in/ruhanponnada/); Founding Solutions Engineer at Mintlify (TheOrg.com); prior roles at Microsoft, Pioneer, and Mabbu (search snippet).
  - Twitter/X: @RuhanPonnada (x.com/ruhanponnada) — follower count not retrievable.
  - LinkedIn: "Co-Founder at Salesgraph" / previously Founding Solutions Engineer at Mintlify (linkedin.com/in/ruhanponnada/).
  - GitHub: No public account confirmed in search results.
- **Co-founder relationship:** Both were among the first 10 employees at Mintlify and worked together on an internal business-case generator that became the conceptual foundation for Salesgraph (YC company description; Ruhan Ponnada LinkedIn post).
- **Founder-market fit:** [Inferred]: Direct domain experience building the predecessor product inside Mintlify (a YC-backed company that sells into enterprise dev-tools buyers) gives the founders firsthand experience with the enterprise sales motion they are now tooling (YC company description); no advisors or investors beyond YC disclosed publicly.

## Key Risks

- **Incumbent platform expansion:** Clari closed its acquisition of Salesloft in December 2025 to form a ~$450M ARR revenue orchestration platform (Forrester), and Gong has expanded into engagement (Gong Engage) and forecasting layers (Knowlee 2026 comparison) — directly compressing the "orchestration layer" whitespace Salesgraph targets; no public mitigation disclosed.
- **Data dependency on third-party APIs:** Product relies on integrations with Gong, Salesforce, HubSpot, Outreach, Salesloft, and others (salesgraph.com) — any pricing, rate-limit, or terms changes by these platforms (e.g., Salesforce Agentforce pricing increases per CIO Dive 2025) could degrade unit economics or feature parity.
- **No disclosed traction:** No revenue figures, customer logos, pilot counts, waitlist, or press coverage found in any source as of May 2026; reduces ability to assess product-market fit beyond founder narrative.
- **Crowded "context/agent" category:** Multiple Slack-native and AI-CRM entrants (Momentum.io, Day.ai, Nooks adjacencies) plus well-funded incumbents creates risk of feature commoditization; LLM orchestration over existing data sources has low technical barriers ([Inferred]: based on competitor landscape evidence above).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Sales Enablement Platform market USD 7.20B in 2026 → USD 25.65B by 2034 at 17.20% CAGR (Fortune Business Insights, 2025) |
| SAM | No public data found |
| Traction | YC Spring 2026 batch admission (ycombinator.com/companies/salesgraph); live website with 12+ integrations (salesgraph.com, May 2026); founder LinkedIn announcement (linkedin.com/posts/ruhanponnada, activity 7442246355319836673) |
| Revenue Signal | No public data found |
| Founders | Ricardo Nunez (Co-founder): ex-Full Stack Engineer Mintlify, first-10 employee, built internal business-case generator. Ruhan Ponnada (Co-founder): ex-Founding Solutions Engineer Mintlify, BS CS Georgia Tech 2023, prior Microsoft/Pioneer/Mabbu. |
| Competitors | Gong (~$500M raised, $300M+ ARR Jan 2025, owns conversation data layer); Clari+Salesloft (merged Dec 2025, ~$450M combined ARR, dominant revenue orchestration); Outreach (~$489M raised historically, layer-2 engagement); Momentum.io (funding unknown, direct Slack-native overlap); Day.ai (funding unknown, AI-native CRM adjacency) |
| Moat Signals | No public data found |
| Risk Factors | Incumbent platform expansion (Clari+Salesloft, Gong Engage); third-party API dependency; no disclosed traction |
| Founder Reach | Ricardo Nunez: X @ricardonunez_io (count not retrievable), LinkedIn ricardonunez-01 (count not retrievable), GitHub ricardonunez-io (no repo >100 stars found). Ruhan Ponnada: X @RuhanPonnada (count not retrievable), LinkedIn ruhanponnada (count not retrievable), GitHub not found. |
| Distribution Signals | No public data found (no Product Hunt, Chrome Web Store, app store, or press hits returned) |
| Emails | No public data found |

Sources:
- [Salesgraph website](https://www.salesgraph.com/)
- [Salesgraph YC page](https://www.ycombinator.com/companies/salesgraph)
- [Ricardo Nunez LinkedIn](https://www.linkedin.com/in/ricardonunez-01/)
- [Ruhan Ponnada LinkedIn](https://www.linkedin.com/in/ruhanponnada/)
- [Ruhan Ponnada YC announcement post](https://www.linkedin.com/posts/ruhanponnada_last-week-i-announced-that-ricardo-nunez-activity-7442246355319836673-J14c)
- [Ricardo Nunez X](https://x.com/ricardonunez_io)
- [Ricardo Nunez GitHub](https://github.com/ricardonunez-io)
- [Ruhan Ponnada at Mintlify (TheOrg)](https://theorg.com/org/mintlify/org-chart/ruhan-ponnada)
- [Sales Enablement Platform Market — Fortune Business Insights](https://www.fortunebusinessinsights.com/sales-enablement-platform-market-114208)
- [Gong Business Breakdown — Contrary Research](https://research.contrary.com/company/gong)
- [Clari–Salesloft Merger — Forrester](https://www.forrester.com/blogs/clari-salesloft-merger-a-bold-high-stakes-bid-for-market-dominance/)
- [Clari–Salesloft Merger context — CacubeConsulting](https://www.cacubeconsulting.com/p/clari-and-salesloft-merger-what-is-next-for-the-revenue-orchestration-market)
- [Outreach vs Gong layer comparison — Knowlee](https://www.knowlee.ai/compare/outreach-vs-gong)
- [Slack sales automation buyer's guide — Momentum.io](https://www.momentum.io/blog/the-best-tools-that-automate-sales-processes-within-slack-2025-buyers-guide)
