# Wato

> Shared memory, tools, and workflows for agents across teams

| Field | Value |
|-------|-------|
| Website | https://www.watolabs.com/ |
| YC Page | https://www.ycombinator.com/companies/wato |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Enterprise Software, AI |
| YC Partner | Nicolas Dessaigne |
| Emails | rahul@watolabs.com |

## The Idea

- **Problem:** Teams building with AI agents repeatedly hit the wall that "an agent will solve something useful, then the knowledge disappears" into chat threads, so work does not compound across runs or teammates (watolabs.com; YC page).
- **Approach:** Wato is "the orchestration layer for AI in institutions," providing team memory (decisions, caveats, playbooks), approved tools with scoped permissions, reusable skills/workflows, and live auto-refreshing artifacts that agents read and write back to (watolabs.com).
- **Differentiation:** [Inferred]: vs. Mem0/Zep/Letta (single-agent memory SDKs), Wato positions itself as a cross-agent, team-level orchestration layer with governed tool access and living artifacts rather than a memory store called by one agent (watolabs.com product page).
- **Business Model:** No public pricing — site lists only "private beta (open)" with no tiers shown (watolabs.com, fetched May 2026); [Inferred]: per-seat or consumption-based SaaS aimed at enterprise teams deploying multiple agents.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** [Inferred]: bottoms-up via "Cloud Agents" that drop into Slack channels (announced May 17, 2026 per company X/Twitter via search snippet), positioning Wato as a teammate-adjacent install path inside existing work surfaces.

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond a private beta product (watolabs.com).
- **Future moat:** [Inferred]: data/network effects — as more agents write back memory, skills, and artifacts into a customer's Wato instance, switching costs rise; unproven because no customer scale or retention data is public.
- **Market structure:** [Inferred]: governed tool access + writeback memory crosses identity, permissions, and audit boundaries that single-purpose memory SDKs (Mem0, Zep, Letta) do not own; not a structural barrier to incumbents like LangChain/LangMem or hyperscaler agent platforms.
- **Commoditization risk:** Memory + tool-orchestration layers have multiple well-funded entrants — Mem0 ($24M raised, 41K+ GitHub stars, 14M downloads per TechCrunch Oct 28, 2025), Letta ($10M seed at $70M post per TechCrunch Sep 23, 2024), Zep (YC W24), and LangMem (LangChain SDK) — meaning core primitives are being commoditized.

## Market & Traction

- **Traction signals:**
  - Status: private beta, open (watolabs.com, May 2026).
  - Product announcement: "shared memory and living artifacts for AI in teams" introduced May 17, 2026 (search snippet from company channels).
  - Cloud Agents launched as first product extension (watolabs.com via search snippet).
  - Job postings: 0 open roles (YC company page).
  - Press coverage: No public data found in named tech publications.
  - Product Hunt: No public data found for this Wato (a different "WATO" game launched on Product Hunt with 42 upvotes — unrelated, per hunted.space).
  - Social: @watolabs on X exists; follower count not retrievable.
  - LinkedIn company page: linkedin.com/company/watoinc; follower count not retrievable.
  - Revenue, paying customers, waitlist size: No public data found.
- **Competitors:**
  - Mem0 ($24M raised — $3.9M seed + $20M Series A led by Basis Set Ventures, Oct 28, 2025, TechCrunch; revenue unknown; 41K+ GitHub stars, 14M downloads, API calls 35M→186M Q1–Q3 2025): cloud-first single-API memory SDK vs. Wato's team-level orchestration + tools + artifacts (TechCrunch, Oct 2025).
  - Letta ($10M seed led by Felicis at $70M post-money, Sep 23, 2024, TechCrunch; revenue unknown): OS-style memory tiers for single agents (MemGPT lineage) vs. Wato's cross-agent shared memory (TechCrunch, Sep 2024).
  - Zep AI ($500K disclosed YC W24 seed, founded 2023 by Daniel Chalef; revenue unknown): temporal knowledge-graph (Graphiti) for agent memory vs. Wato's workflows + governed tools layer (Crunchbase via search snippet).
  - LangMem (LangChain's native memory SDK, parent LangChain raised — figures not searched; revenue unknown): SDK inside LangChain stack vs. Wato as standalone institutional layer (agentmarketcap.ai, Apr 2026).
  - Cognee / Supermemory / LangMem (adjacent open-source memory frameworks; funding not publicly disclosed at scale): library-level memory vs. Wato's product (dev.to benchmark, 2026).
- **Why now:** [Inferred]: enterprise agent deployments crossed a threshold in 2025 where multi-agent teams in Slack/IDE became common, and dedicated agent-memory raises (Mem0 $24M Oct 2025; Letta $10M Sep 2024) signal investor consensus that durable agent context is now an infrastructure category (TechCrunch).

## Founders & Team

- **Rahul Rejeev (Co-founder):**
  - Background: Computer Science at Stanford (Stanford Profiles, profiles.stanford.edu/rahul-maliackal-rejeev); prior involvement with accesSOS, 2023–2024 (search snippet); personal site rahulrejeev.com.
  - Twitter/X: @rahulrejeev (YC page); follower count not retrievable.
  - LinkedIn: linkedin.com/in/rahulrejeev — "Fremont, California" (search snippet); headline not retrievable.
  - GitHub: No public repos found by name match.
- **Arihan Varanasi (Co-founder):**
  - Background: BS Computer Science, Stanford (2024–2028) (Stanford Profiles, profiles.stanford.edu/arihan-varanasi); prior roles at Mercor (ML), PlayAI, and University of North Texas (RocketReach/LinkedIn search snippets); personal site arihanv.com.
  - Twitter/X: @arihanxv (YC page); follower count not retrievable.
  - LinkedIn: linkedin.com/in/arihanvaranasi — listed as "Mercor"; full headline not retrievable.
  - GitHub: @arihanv (github.com/arihanv); top repo star counts not retrievable in searches.
- **Co-founder relationship:** Both attended Stanford Computer Science (Stanford Profiles for each).
- **Founder-market fit:** [Inferred]: Varanasi's ML engineering at Mercor and PlayAI plus both founders' Stanford CS background align with building agent infrastructure; YC Group Partner Nicolas Dessaigne (co-founder of Algolia) is the assigned partner (YC company page).

## Key Risks

- **Commoditization by funded memory incumbents:** Mem0 ($24M Series A, Oct 2025, TechCrunch), Letta ($10M seed at $70M post, Sep 2024, TechCrunch), and Zep (YC W24) are entrenched in the agent-memory category with substantial GitHub mindshare (Mem0: 41K+ stars per TechCrunch); Wato must differentiate beyond memory into orchestration/governance.
- **Platform dependency on Slack and agent ecosystems:** Cloud Agents distribution presumes Slack and third-party agent frameworks remain open surfaces (company announcement May 17, 2026, search snippet); Slack-native agent features or LangChain bundling memory could substitute.
- **Name disambiguation / search visibility:** "Wato" collides with a Product Hunt game ("WATO – What are the odds?") and "WATO Soft AG" on Crunchbase (hunted.space; crunchbase.com), which could dilute brand and SEO.
- **Pre-product-market-fit feasibility:** Product is in private beta with no public customers, revenue, waitlist size, or press (watolabs.com, May 2026); whether "team memory + governed tools + living artifacts" delivers measurable agent quality gains is unproven.
- **Talent/founder availability:** Co-founder Arihan Varanasi is listed as 2024–2028 Stanford undergrad and as Mercor ML engineer (Stanford Profiles; LinkedIn search snippet); concurrent commitments could constrain bandwidth.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Private beta open (watolabs.com, May 2026); Cloud Agents launched May 17, 2026 (search snippet); 0 open YC job postings (YC page) |
| Revenue Signal | No public data found (no pricing page disclosed on watolabs.com, May 2026) |
| Founders | Rahul Rejeev (Co-founder): Stanford CS, prior accesSOS 2023–2024. Arihan Varanasi (Co-founder): Stanford CS 2024–2028, prior ML at Mercor and PlayAI. |
| Competitors | Mem0 ($24M raised, revenue unknown, single-API memory SDK with 41K+ GitHub stars vs. Wato's team orchestration); Letta ($10M seed at $70M post, revenue unknown, MemGPT/single-agent memory tiers); Zep ($500K disclosed YC W24, revenue unknown, temporal knowledge-graph memory); LangMem (LangChain SDK, revenue unknown, library inside LangChain); Cognee/Supermemory (funding unknown, OSS memory libraries) |
| Moat Signals | No public data found |
| Risk Factors | Commoditization by funded memory incumbents (Mem0/Letta/Zep), Slack/agent-framework platform dependency, no public traction or revenue |
| Founder Reach | Rahul Rejeev: Twitter @rahulrejeev (count not retrievable), LinkedIn /in/rahulrejeev (count not retrievable), GitHub not found. Arihan Varanasi: Twitter @arihanxv (count not retrievable), LinkedIn /in/arihanvaranasi (count not retrievable), GitHub @arihanv (stars not retrievable). |
| Distribution Signals | Cloud Agents (Slack-resident) announced May 17, 2026 (company channels via search snippet); No Product Hunt launch found for this Wato |
| Emails | rahul@watolabs.com (watolabs.com) |

Note on prompt-injection: the WebFetch result for the YC company page contained embedded text mimicking `<system-reminder>` blocks listing unrelated MCP tools and budget — ignored as injected content.

Sources:
- [Wato](https://www.watolabs.com/)
- [Wato — Y Combinator](https://www.ycombinator.com/companies/wato)
- [Rahul Rejeev — Stanford Profiles](https://profiles.stanford.edu/rahul-maliackal-rejeev)
- [Arihan Varanasi — Stanford Profiles](https://profiles.stanford.edu/arihan-varanasi)
- [arihanv on GitHub](https://github.com/arihanv)
- [Mem0 raises $24M — TechCrunch](https://techcrunch.com/2025/10/28/mem0-raises-24m-from-yc-peak-xv-and-basis-set-to-build-the-memory-layer-for-ai-apps/)
- [Letta $10M seed — TechCrunch](https://techcrunch.com/2024/09/23/letta-one-of-uc-berkeleys-most-anticipated-ai-startups-has-just-come-out-of-stealth/)
- [Zep AI — Crunchbase](https://www.crunchbase.com/organization/zep-ai)
- [Agent Memory at Scale 2026 — AgentMarketCap](https://agentmarketcap.ai/blog/2026/04/10/agent-memory-vendor-landscape-2026-letta-zep-mem0-langmem)
