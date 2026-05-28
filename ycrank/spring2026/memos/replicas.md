# Replicas

> Background coding agents for engineering teams

| Field | Value |
|-------|-------|
| Website | https://replicas.dev |
| YC Page | https://www.ycombinator.com/companies/replicas |
| Batch | Spring 2026 (P26) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 1 (YC page; 2 founders publicly named — see Founders section) |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Developer Tools, API |
| YC Partner | Harj Taggar |
| Emails | founders@replicas.dev (tryreplicas.com), loiconnor8@gmail.com (Connor Loi GitHub profile via search snippet) |

## The Idea

- **Problem:** Engineering teams want to parallelize routine ticket work to AI coding agents but existing CLI/IDE agents require an attended terminal session, limiting throughput per engineer (tryreplicas.com product page).
- **Approach:** Each task spawns an isolated sandboxed VM that clones the codebase, installs deps, runs services locally, executes Claude Code or Codex against the work, auto-fixes CI failures and code-review feedback, and opens a PR (tryreplicas.com; YC Launch page).
- **Differentiation:** Devin (Cognition) bundles its own model and IDE; Cursor Background Agents run inside the Cursor editor and bill on tokens (Cursor blog, Feb 24 2026); Replicas is bring-your-own-credentials for Claude Code/Codex and trigger-agnostic across Slack, Linear, GitHub PR reviews, dashboard, and API (YC Launch page).
- **Business Model:** "Subscription or direct credit purchase model; users pay only for active compute time" with auto sleep/wake (tryreplicas.com via WebFetch); no public tier prices found.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; comparable Cognition is at $492M ARR (TechCrunch, May 27 2026) and Anysphere/Cursor at $2B ARR (TechCrunch / Next Web, Feb–Apr 2026) as proxies.
- **GTM / Distribution:** [Inferred]: Founder-led sales into the YC network — public customer list is dominated by YC companies (Mintlify, Composio, Helicone, Dart, Knowunity, Trellis, Chronicle Labs) per tryreplicas.com.

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond integration breadth (Slack, Linear, GitHub, dashboard, API per YC Launch page) and BYO-credential support for Claude Code and Codex (tryreplicas.com).
- **Future moat:** [Inferred]: Switching costs from per-repo Environments configuration (custom files, env vars, start hooks, warm hooks, skills/MCPs per YC Launch page) plus learned feedback loops per codebase; unproven because the product launched in V1 form ~2 months before article publication (YC Launch page).
- **Market structure:** No structural barrier identified at this stage — incumbents Cursor and Cognition have already shipped background-agent products (Cursor Background Agents Feb 24 2026; Claude Code Remote Tasks Mar 20 2026 per Blink Blog / search snippet).
- **Commoditization risk:** Any team with sandbox-VM orchestration plus integrations to Slack/Linear/GitHub can replicate the wrapper; sandbox primitives are available from E2B, Daytona, Modal, and Anthropic's own Claude Code Remote Tasks (Blink Blog, 2026 via search snippet).

## Market & Traction

- **Traction signals:**
  - Customer logos: Mintlify, Composio, Helicone, Moda, Dart, Chronicle Labs, Sorce, Bluma, Knowunity, Trellis, Hyperspell, Totalis (tryreplicas.com).
  - "20+ YC startups" using Replicas (YC Launch page; Connor Loi LinkedIn via search snippet).
  - Product claim: "Engineering teams ship over 30% of pull requests" via Replicas (tryreplicas.com).
  - Active hiring: Founding Engineer, $150K–$250K + 2.00–4.00% equity (YC jobs page).
  - Replicas V1 launch announced via Connor Loi on X (status 2032151022345601109; tweet date not retrievable).
  - No Product Hunt listing surfaced for Replicas in 2026 search results.
- **Competitors:**
  - Cognition / Devin ($2.05B+ raised cumulatively, $492M ARR May 2026, $26B post-money — TechCrunch, May 27 2026): proprietary agent model + IDE, not BYO-credential.
  - Anysphere / Cursor ($2B ARR Feb 2026, ~$29.3B post-money Nov 2025, talks for $50B pre-money — TechCrunch / Next Web): Background Agents tied to Cursor editor, token-priced.
  - Factory.ai / Droids ($215M+ total raised, $150M Series C April 16 2026 at $1.5B post-money, led by Khosla — Factory.ai/news, BusinessWire): enterprise/compliance-focused droids.
  - Codegen ($16.2M raised, revenue unknown; acquired by ClickUp Dec 24 2025 — Crunchbase / WebProNews): LLM ticket-resolution agent, now part of ClickUp.
  - Claude Code Remote Tasks (Anthropic, shipped Mar 20 2026 per Blink Blog via search snippet): native background execution from the model vendor Replicas resells.
- **Why now:** Frontier coding-agent capability crossed an autonomous-PR threshold in 2026 — Cursor Background Agents Feb 24 2026, Claude Code Remote Tasks Mar 20 2026, Cognition $492M ARR (13× YoY) reported May 27 2026 (TechCrunch).

## Founders & Team

- **Saai Arora (Founder/CTO):**
  - Background: BCS, University of Waterloo; prior internships at Ramp (Applied AI Engineer Intern, NYC), Databricks (SWE Intern, Mountain View), Shopify (SWE Intern), IBM (8-month intern), General Context, Autotrader (LinkedIn via search snippet).
  - Twitter/X: No public account found in search results.
  - LinkedIn: "Building something new and Incoming @ ramp" (ca.linkedin.com/in/saaiarora via search snippet).
  - GitHub: No public handle confirmed in search results.
- **Connor Loi (Founder):**
  - Background: BCS, University of Waterloo (2022–2027); 8 months at Helicone (YC W23) building AI Gateway and Prompts; prior roles at Cohere and TD Bank (LinkedIn, GitHub bio via search snippet); CalHacks 11.0 "Best Use of Vapi" win with LiveStory project.
  - Twitter/X: @connortbot (status 2032151022345601109); follower count not retrievable.
  - LinkedIn: "founder @ replicas.dev (YC P26)" (ca.linkedin.com/in/connor-loi via search snippet).
  - GitHub: @connortbot, 30 followers (search snippet); projects include Squeak, Caitlyn Renderer, Starbit; individual repo star counts not retrievable.
- **Co-founder relationship:** Both attended University of Waterloo Computer Science (LinkedIn data via search snippets).
- **Founder-market fit:** Loi shipped Helicone's AI Gateway and Prompts (LLM observability infra, YC W23 — Helicone.ai / search snippet); Arora was Applied AI Engineer at Ramp and SWE intern at Databricks/Shopify (LinkedIn via search snippet), giving both founders direct production experience with LLM tooling that maps to Replicas' core stack.

## Key Risks

- **Platform dependency on Anthropic and OpenAI:** Replicas wraps Claude Code and Codex (tryreplicas.com); Anthropic shipped Claude Code Remote Tasks on Mar 20 2026 (Blink Blog via search snippet), creating direct substitution risk from the underlying model vendor.
- **Well-capitalized incumbents in the same workflow:** Cognition raised $1B at $26B post-money on May 27 2026 (TechCrunch); Anysphere/Cursor at $2B ARR pursuing $50B valuation (Next Web, Apr 2026); Factory.ai $150M Series C April 2026 (Factory.ai/news) — all shipping background-agent products. No public Replicas funding disclosed.
- **Single-named-founder operating status:** YC page lists Team Size = 1 despite two publicly named founders (YC page; tryreplicas.com); a Founding Engineer search is open at $150K–$250K + 2–4% equity (YC jobs page).
- **Customer concentration in YC network:** Named customers (Mintlify, Composio, Helicone, Dart, Knowunity, Trellis, Chronicle Labs) are YC alumni (tryreplicas.com), leaving non-YC enterprise validation undemonstrated in public sources.
- **No disclosed revenue or pricing tiers:** Pricing page mentions subscription/credits and active-compute billing but no public dollar figures found (tryreplicas.com via WebFetch), limiting visibility into monetization traction.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | "20+ YC startups" using product (YC Launch page, 2026); 12 named customer logos including Mintlify, Composio, Helicone (tryreplicas.com, 2026); ">30% of pull requests" shipped via Replicas per company claim (tryreplicas.com, 2026) |
| Revenue Signal | Subscription or credit-purchase model; pay-per-active-compute-time with auto sleep/wake; no dollar figures disclosed (tryreplicas.com, 2026) |
| Founders | Saai Arora (Founder/CTO): UWaterloo CS, ex-Ramp/Databricks/Shopify/IBM intern. Connor Loi (Founder): UWaterloo CS, ex-Helicone (shipped AI Gateway), ex-Cohere, ex-TD Bank. |
| Competitors | Cognition/Devin ($2B+ raised, $492M ARR, $26B post-money May 2026 — proprietary model + IDE, not BYO); Anysphere/Cursor ($2B ARR Feb 2026, in-editor background agents); Factory.ai ($215M+ raised, $1.5B post-money Apr 2026, enterprise droids); Codegen ($16.2M, acquired by ClickUp Dec 2025); Claude Code Remote Tasks (Anthropic, Mar 20 2026 native feature) |
| Moat Signals | No public data found |
| Risk Factors | Platform dependency on Anthropic/OpenAI; well-capitalized incumbents (Cognition $26B, Cursor $50B-target, Factory $1.5B); YC-network customer concentration |
| Founder Reach | Connor Loi: Twitter @connortbot (count not retrievable), LinkedIn headline "founder @ replicas.dev (YC P26)", GitHub @connortbot 30 followers. Saai Arora: Twitter not found, LinkedIn "Building something new and Incoming @ ramp", GitHub not found. |
| Distribution Signals | Replicas V1 launch tweet via @connortbot (X status 2032151022345601109); YC Launch page live (ycombinator.com/launches/PpP-replicas); active Founding Engineer posting at $150K–$250K + 2–4% equity (YC jobs page); no Product Hunt listing surfaced |
| Emails | founders@replicas.dev (tryreplicas.com); loiconnor8@gmail.com (Connor Loi GitHub profile via search snippet) |

Sources:
- [Replicas YC Company Page](https://www.ycombinator.com/companies/replicas)
- [Replicas YC Launch Page](https://www.ycombinator.com/launches/PpP-replicas-end-to-end-background-coding-agents)
- [Replicas Website](https://tryreplicas.com/)
- [Founding Engineer at Replicas](https://www.ycombinator.com/companies/replicas/jobs/1r7KcWj-founding-engineer)
- [Connor Loi LinkedIn](https://ca.linkedin.com/in/connor-loi)
- [Saai Arora LinkedIn](https://ca.linkedin.com/in/saaiarora)
- [Connor Loi GitHub (@connortbot)](https://github.com/connortbot)
- [Connor Loi V1 Launch Tweet](https://x.com/connortbot/status/2032151022345601109)
- [Hiretop coverage of Replicas](https://hiretop.com/news-list/replicas-background-coding-agents/)
- [TechCrunch — Cognition $1B at $25B](https://techcrunch.com/2026/05/27/ai-coding-startup-cognition-raises-1b-at-25b-pre-money-valuation/)
- [Next Web — Cursor $2B ARR / $50B](https://thenextweb.com/news/cursor-anysphere-2-billion-funding-50-billion-valuation-ai-coding)
- [Factory.ai Series C](https://factory.ai/news/series-c)
- [Factory.ai Series B (BusinessWire)](https://www.businesswire.com/news/home/20250925993478/en/Factory-Unleashes-the-Droids-Raises-$50-Million-Series-B-from-NEA-Sequoia-Capital-NVIDIA-and-J.P.-Morgan)
- [Codegen Crunchbase](https://www.crunchbase.com/organization/codegen-57c7)
- [Blink Blog — AI Coding Agents 2026](https://blink.new/blog/best-ai-coding-agents-2026)
