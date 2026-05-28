# Memory Store

> Shared context for all of your team's agents.

| Field | Value |
|-------|-------|
| Website | https://memory.store |
| YC Page | https://www.ycombinator.com/companies/memory-store |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Productivity |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Generative AI, SaaS, B2B |
| YC Partner | Tom Blomfield |
| Emails | No public data found (addresses obfuscated via Cloudflare email protection on memory.store) |

## The Idea

- **Problem:** Team knowledge fragments across Gmail, Slack, Granola, Claude, ChatGPT, and other tools, so AI agents and teammates lack the shared context needed to act on prior decisions and customer history (memory.store homepage).
- **Approach:** Auto-syncs conversations from Gmail, Slack, Granola, Fathom, and AI clients into a single store organized by project/person/decision, exposed to MCP clients (Claude, ChatGPT, Cursor, Raycast, Linear) as a native memory plugin (memory.store homepage; YC Launch post).
- **Differentiation:** vs. Mem0 (developer SDK/memory layer for app builders) — Memory Store targets end-user teams not API developers; vs. Zep (server memory for production conversational agents) and Letta (stateful agent runtime) — Memory Store sells a turnkey team-collaboration product including "Briefs" living docs rather than infrastructure (YC Launch; n1n.ai 2026-04-23 comparison).
- **Business Model:** Single "Teams" plan at $150/user/month billed monthly with 30-day money-back guarantee; usage-priced "/fast Mode" and "Reflect" multi-agent research listed as coming soon (memory.store/pricing).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** [Inferred]: MCP-client integration distribution (Claude, ChatGPT, Cursor, Raycast, Linear, 100+ MCP-compatible agents) plus YC Launch press, given the product is described as a "native plugin within AI agents users already employ" (YC Launch post; memory.store).

## Defensibility

- **Moat today:** [Inferred]: Breadth of integrations (Gmail, Slack, Granola, Fathom, Claude, ChatGPT, Cursor, Raycast, Linear, OpenCode) as switching cost — no third-party validation of stickiness or retention found (memory.store homepage).
- **Future moat:** [Inferred]: Accumulated team-specific memory graph creates lock-in once a team has months of meetings/threads ingested, but unproven without retention data.
- **Market structure:** No structural barrier identified at this stage; Mem0 ($24M raised), Zep, and Letta ($10M seed) operate adjacent products and could add team/MCP UX layers (TechCrunch, 2025-10-28; PRNewswire, 2024-09-26).
- **Commoditization risk:** Notion, Glean, and well-funded memory-layer startups (Mem0, Zep, Letta, Supermemory) could ship comparable shared-context features; founders' own prior open-source project Julep already has 6.6K stars implementing persistent memory primitives (GitHub julep-ai/julep; dev.to 2026 comparison).

## Market & Traction

- **Traction signals:**
  - YC Launch post live ~9 days before research (YC Launch page, May 2026).
  - Julep open-source repo (prior product, same founders) at 6.6K stars / 973 forks; Julep backend scheduled shutdown 2025-12-31 (GitHub julep-ai/julep).
  - No public Memory Store revenue, user counts, Product Hunt, Chrome install, or social-follower data found at time of research.
- **Competitors:**
  - Mem0 ($24M raised — $3.9M seed + $20M Series A led by Basis Set Ventures, July 2025; revenue unknown): developer-facing memory SDK/managed service rather than team workspace (TechCrunch, 2025-10-28).
  - Letta ($10M seed led by Felicis, $70M post-money, Sept 2024; revenue unknown): stateful agent runtime with built-in memory vs. Memory Store's MCP-plugged shared store (PRNewswire, 2024-09-26).
  - Zep AI (YC W24, ~$500K pre-seed + reported $1M 2024 revenue per CB Insights/Grokipedia): temporal Graphiti knowledge graph for production conversational agents vs. Memory Store's team-collaboration UX (CB Insights; Grokipedia).
  - Supermemory and Cognee (funding undisclosed in results, revenue unknown): adjacent memory frameworks for developers, not team-shared workspaces (dev.to 2026 comparison).
  - Glean (incumbent enterprise search; revenue unknown in this research): adjacent team-knowledge product without MCP-native agent memory positioning [Inferred].
- **Why now:** [Inferred]: MCP (Model Context Protocol) adoption across Claude, ChatGPT, Cursor, and Raycast in 2024–2026 makes a single memory backend pluggable into many client agents simultaneously, an integration surface that did not exist 12 months prior (memory.store homepage lists MCP clients).

## Founders & Team

- **Diwank Singh Tomer (Co-founder):**
  - Background: 2013 Thiel Fellow, building AI products since 2012; co-founded Julep (open-source agent orchestrator, 6.6K GitHub stars); prior company powers phone ordering for Domino's, Wingstop, Buffalo Wild Wings (YC Launch post; India TV News; GitHub julep-ai).
  - Twitter/X: @diwanksingh (count not retrievable).
  - LinkedIn: linkedin.com/in/diwank-tomer — headline not retrieved beyond "San Francisco, California" (LinkedIn profile).
  - GitHub: associated with julep-ai org; julep repo 6.6K stars (GitHub).
- **Ishita Jindal (Co-founder):**
  - Background: Previously led products serving millions of users at Jar and Lenskart; co-founded Julep with Diwank (YC Launch post; LinkedIn).
  - Twitter/X: @IshitaJindal17 (count not retrievable).
  - LinkedIn: linkedin.com/in/ishitajindal — listed as "Julep AI" (LinkedIn).
  - GitHub: No public repos found tied to her individual handle in this research.
- **Other team:** Company lists Team Size 4 (YC page); only two founders publicly named — remaining two team members not publicly identified in sources reviewed (e.g., Hamada Salhab listed as "Memory store" on LinkedIn per search snippet, role unconfirmed).
- **Co-founder relationship:** Diwank and Ishita previously co-founded Julep AI together (founded 2022, per Tracxn), giving them ~4 years of shared operating history before Memory Store (Tracxn Julep profile; YC Launch post).
- **Founder-market fit:** [Inferred]: Both built and operated an open-source agent orchestrator with persistent memory primitives (Julep, 6.6K stars) and are now productizing memory for end-user teams — direct continuity with prior technical work (GitHub julep-ai/julep; YC Launch post).

## Key Risks

- **Prior product wind-down overhang:** Julep backend and dashboard shut down 2025-12-31 (GitHub julep-ai/julep README), so prior 6.6K-star traction does not translate to a live commercial user base; team is restarting commercial GTM from zero with Memory Store.
- **Well-funded direct competitors with head start:** Mem0 has $24M and YC backing for the memory layer thesis, Letta has $10M from Felicis with Berkeley research lineage, Zep has demonstrated $1M 2024 revenue (TechCrunch 2025-10-28; PRNewswire 2024-09-26; CB Insights). Memory Store enters with no public funding data beyond YC standard deal [Inferred].
- **Pricing-vs-adoption risk:** Single visible tier at $150/user/month (memory.store/pricing) is materially above per-seat productivity tools like Notion or Slack, requiring proven ROI per seat with no public case studies or customer logos at time of research.
- **Platform/MCP dependency:** Distribution and value proposition depend on MCP adoption by Claude, ChatGPT, Cursor, and others; if any host adds native team-memory features, substitution risk is direct (memory.store integration list).
- **Name disambiguation/SEO risk:** "Memory Store" is a generic technical term (e.g., Redis "memory store," GCP "Memorystore"), creating discoverability friction; no third-party press coverage of the YC company surfaced beyond the YC Launch page.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | YC Launch post live ~May 2026 (ycombinator.com/launches/QPs-memory-store); prior project Julep 6.6K GitHub stars (GitHub julep-ai/julep) |
| Revenue Signal | Teams plan $150/user/month, 30-day refund (memory.store/pricing, May 2026); usage tiers "/fast Mode" and "Reflect" listed as coming soon |
| Founders | Diwank Singh Tomer (Co-founder): 2013 Thiel Fellow, building AI since 2012, prior company powers Domino's/Wingstop/BWW phone ordering, co-built Julep (6.6K stars). Ishita Jindal (Co-founder): ex-product lead at Jar and Lenskart serving millions of users, co-built Julep. |
| Competitors | Mem0 ($24M raised, revenue unknown, developer SDK for memory layer); Letta ($10M seed, revenue unknown, stateful agent runtime); Zep AI (~$500K pre-seed + $1M 2024 revenue per CB Insights, temporal knowledge graph); Supermemory/Cognee (funding undisclosed, revenue unknown, developer-facing memory frameworks); Glean (incumbent enterprise search, adjacent) |
| Moat Signals | No public data found |
| Risk Factors | Well-funded direct competitors (Mem0/Letta/Zep), MCP/platform dependency, premium $150/seat pricing without public case studies |
| Founder Reach | Diwank Singh: Twitter @diwanksingh (count not retrievable), LinkedIn /in/diwank-tomer (count not retrievable), GitHub julep-ai org julep repo 6.6K stars. Ishita Jindal: Twitter @IshitaJindal17 (count not retrievable), LinkedIn /in/ishitajindal (count not retrievable), GitHub no public repos found. |
| Distribution Signals | YC Launch page live (ycombinator.com/launches/QPs-memory-store, May 2026); integrations published with Claude, ChatGPT, Cursor, Slack, Raycast, Linear, Granola, Fathom, OpenCode (memory.store homepage) |
| Emails | No public data found (memory.store uses Cloudflare email obfuscation) |

Sources:
- [Memory Store YC profile](https://www.ycombinator.com/companies/memory-store)
- [Launch YC: Memory Store](https://www.ycombinator.com/launches/QPs-memory-store-your-company-s-brain)
- [memory.store homepage](https://memory.store)
- [memory.store pricing](https://memory.store/pricing)
- [Julep GitHub repo](https://github.com/julep-ai/julep)
- [Mem0 Series A — TechCrunch](https://techcrunch.com/2025/10/28/mem0-raises-24m-from-yc-peak-xv-and-basis-set-to-build-the-memory-layer-for-ai-apps/)
- [Letta $10M seed — PRNewswire](https://www.prnewswire.com/news-releases/berkeley-ai-research-lab-spinout-letta-raises-10m-seed-financing-led-by-felicis-to-build-ai-with-memory-302257004.html)
- [Zep AI Crunchbase profile](https://www.crunchbase.com/organization/zep-ai)
- [AI agent memory comparison 2026 — n1n.ai](https://explore.n1n.ai/blog/ai-agent-memory-comparison-2026-mem0-zep-letta-cognee-2026-04-23)
- [Diwank Singh Tomer LinkedIn](https://www.linkedin.com/in/diwank-tomer/)
- [Ishita Jindal LinkedIn](https://www.linkedin.com/in/ishitajindal/)
- [Julep Tracxn profile](https://tracxn.com/d/companies/julep/__e57ext7lyyz3-hcD6jrd4djQoIBAu7Qls-27Ic2esgM)
