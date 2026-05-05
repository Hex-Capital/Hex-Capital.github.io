# Memory Store

> Shared context for all of your team's agents.

| Field | Value |
|-------|-------|
| Website | https://memory.store |
| YC Page | https://www.ycombinator.com/companies/memory-store |
| Batch | Spring 2026 (YC P26) (YC company page) |
| Industry | B2B / B2B -> Productivity |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Generative AI, SaaS, Consumer Products |
| YC Partner | Tom Blomfield (YC company page) |
| Emails | No public data found |

## The Idea

**Problem:** Per the company's framing, after "four months of talking to founders about how they use AI," the team observed users copy-pasting old context into every new chat, keeping Google Docs folders open as side context, and re-explaining preferences to agents in every new thread because "their AI doesn't remember them" (search snippet, YC P26 launch material). Target customer: teams using multiple AI agents and AI-augmented work tools (Claude, Cursor, ChatGPT) plus collaboration tools (Slack, Linear) (memory.store landing page).

**Approach:** A "personal memory layer" that auto-syncs from Fathom (meeting notes), Slack, Granola, and other tools, organizes the captured content in the background by project/person/decision, and exposes that memory to AI agents via MCP integration inside Claude and other clients (memory.store landing page). Listed integrations: Claude, ChatGPT, Cursor, Slack, Raycast, Linear, Granola, Fathom, OpenCode (memory.store landing page).

**Differentiation:** Versus Mem0 (developer SDK for chatbot memory, 50,000+ developers, $24M raised — Mem0.ai/series-a), Letta (agent framework where agents self-manage memory, 13,000+ GitHub stars — vectorize.io 2026), and Zep (production memory server with temporal knowledge graph — n1n.ai 2026): [Inferred]: Memory Store positions to end-users/teams (not developers) via MCP and SaaS integrations rather than as an SDK/API for developers building agents.

**Business Model:** No public pricing tiers were displayed on the landing page at fetch time (memory.store, May 2026). Landing page references availability "for both individual and team use" (memory.store landing page). [Inferred]: Most likely monetization is per-seat team SaaS with a free individual tier, based on the "individual and team" framing and the integration-heavy collaboration product surface.

**TAM/SAM:** No public TAM/SAM data found for the AI agent memory segment specifically. Adjacent comparator: Mem0 raised $24M Series A citing "memory layer for AI" (Mem0.ai/series-a, 2025).

**GTM / Distribution:** [Inferred]: Bottom-up via MCP + Claude/Cursor user adoption, given the product's MCP-first integration model and SF AI-builder concentration. Founder Ishita Jindal lists a public Cal.com onboarding link (cal.com/ishitaj/20min) suggesting hands-on founder-led sales for early team accounts (memory.store landing page).

## Defensibility

**Today:** Memory accumulates with use — each meeting, Slack thread, and Claude session ingested into a customer's account becomes a switching cost. Breadth of integrations (9 listed: Claude, ChatGPT, Cursor, Slack, Raycast, Linear, Granola, Fathom, OpenCode — memory.store) is the main observable moat signal.

[Inferred]: Switching costs grow with corpus size and tool-graph breadth, but the underlying technical pattern (RAG over synced sources + MCP server) is replicable.

**Market structure:** No structural barrier identified at this stage. [Inferred]: The MCP protocol is open and the data sources (Slack, Fathom, Granola) expose APIs to any vendor, so structural lock-in (channel conflict, regulatory, unit economics) is not present. Defensibility, if it materializes, would come from corpus accumulation and team-graph effects.

**Commoditization risk:** High at the technical layer. Mem0, Letta, Zep, Cognee, Supermemory, LangMem, and Hindsight all ship overlapping memory primitives (vectorize.io 2026; dev.to 2026 benchmark comparison). Anthropic, OpenAI, and Notion could also extend native memory features into the same surface area. [Inferred]: The defensible wedge is the team-shared/MCP packaging plus integration breadth, not the underlying memory algorithms.

## Market & Traction

**Traction signals (current product, Memory Store):**
- Backed by YC Spring 2026 batch (YC company page).
- "Voted the #1 most promising startup when their YC W26 batch kicked off" (search snippet, source unspecified — note: snippet mixes "W26"/"P26" labels; YC page lists Spring 2026).
- Notable advisors/supporters: Tom Blomfield (YC Group Partner) and Kulveer Taggar (search snippet).
- Company social handles exist: X/@memorydotstore, LinkedIn /company/memorystore, GitHub org github.com/julep-ai (memory.store landing page). Follower counts not retrievable.
- Status page live at status.memory.store (memory.store landing page).
- No Product Hunt launch results found in search (WebSearch May 2026).
- No press coverage in named publications found.
- No paying-customer or ARR figures found for Memory Store specifically.

**Traction signals (prior product, Julep AI — same founding team, separate company):**
- 6.6k stars and 974 forks on github.com/julep-ai/julep (search snippet, "Julep is an open-source platform"). Search snippet from YC batch material cites "7000+ GitHub stars and $400k in ARR" (multiple search snippets referencing P26 launch text).
- Julep founded 2022 by Diwank Tomer and Ishita Jindal (Tracxn via search snippet).
- Pivot/timeline: Per the public framing, Memory Store is presented as the founders' current focus following Julep ("Before building Memory Store, they built julep…" — search snippet, P26 launch material). Public sources do not state whether Julep is wound down, spun off, or running in parallel. Do not conflate Julep ARR/stars with Memory Store traction.

**Competitive landscape:**
- **Mem0** — $24M total raised (Seed + Series A; Series A led by Basis Set Ventures, Seed by Kindred Ventures; investors include Peak XV, GitHub Fund, YC) (Mem0.ai/series-a). Revenue/ARR not public. Differentiator: developer SDK with 50,000+ developers; positioned for chatbot memory primitives, not team-shared MCP.
- **Letta** (formerly MemGPT) — Funding not retrieved. 13,000+ GitHub stars, Apache-2.0 (vectorize.io 2026 via search snippet). Differentiator: agent framework where agents self-manage memory; developer-facing OSS, not integrations-led SaaS.
- **Zep** — Funding not retrieved. Differentiator: temporal knowledge graph for production conversation memory; ops/scale focus rather than team-collab integrations (n1n.ai 2026 via search snippet).
- **Supermemory** — Funding not retrieved. 85.4% temporal LongMemEval cited (dev.to benchmark, 2026 via search snippet). Closest in SaaS/team positioning.
- **Cognee** — Funding not retrieved. Listed among top 4 contenders alongside Mem0/Zep/Letta (n1n.ai 2026 via search snippet).

**Why now:** [Inferred]: Two specific catalysts in the last 12-18 months: (1) Anthropic's MCP standard, released Nov 2024 and now adopted across Claude, Cursor, and other clients, makes a single "memory server" reachable from many agents without per-app integration work; (2) the explosion of horizontal AI tools per knowledge worker (Claude + Cursor + ChatGPT + Granola + Fathom) creates the cross-tool context fragmentation the product is designed to solve. Both are inferred from product positioning and integration list, not stated by named analysts.

## Founders & Team

**Diwank Singh Tomer** — Co-founder
- Education: BS Physics, Columbia University (search snippet, AI User Conference speaker page).
- Prior roles: Head of Engineering at Jar (Indian fintech); CEO of Whitehead AI; co-founder of Julep AI (2022) (Tracxn, AI User Conference via search snippets).
- Twitter/X: @diwanksingh (YC company page); follower count not retrievable.
- LinkedIn: linkedin.com/in/diwank-tomer (YC company page).
- GitHub: @creatorrr (search snippet); aggregate star count not retrievable in this research; julep-ai org repo julep has 6.6k stars (GitHub search snippet).
- Public resume: diwank.name/resume.pdf (search snippet).

**Ishita Jindal** — Co-founder
- Education: MBA, Babson College — Franklin W. Olin Graduate School of Business (search snippet, LinkedIn).
- Prior roles: Co-founder of Julep AI (2022) with Diwank (Tracxn via search snippet). Personal site: ishita.space (search snippet).
- Twitter/X: @IshitaJindal17 (YC company page); follower count not retrievable.
- LinkedIn: linkedin.com/in/ishitajindal (YC company page).
- GitHub: No public repos found.
- Disambiguation note: A different "Ishita Jindal" (Webnyay co-founder, UPenn) appears in search results and is unrelated.

**Hamada Salhab** — Software Engineer (early team member, not co-founder)
- Based in Dubai, UAE (LinkedIn ae.linkedin.com/in/hamada-salhab via search snippet).
- Prior: Software Engineer at Julep AI; earlier roles at TEAM FORCE LLC, Frend App, Syrian Computer Society (RocketReach, ZoomInfo via search snippets).
- Twitter/X: @HamadaSalhab (search snippet); count not retrievable.
- Product Hunt: producthunt.com/@hamada_salhab (search snippet).

**Fourth team member:** Not publicly identified in this research. Team size is 4 per YC company page.

**Co-founder relationship:** Diwank and Ishita previously co-founded Julep AI together in 2022 (Tracxn via search snippet); search snippet describes them as spouses. Hamada Salhab joined the founding team from Julep, indicating prior working relationship. No additional searches conducted per Phase 3 budget.

**Founder-market fit:** Diwank and Ishita have spent ~3+ years (2022–present) building agent infrastructure (Julep) — including a component literally named "src/memory-store" inside the Julep monorepo (GitHub search snippet describing julep repo structure). The Memory Store product is a direct extraction/refocus of memory-layer work from that prior agent-platform build. Diwank's prior engineering leadership (Jar Head of Engineering; Whitehead AI CEO) provides scaling experience.

## Key Risks

**Crowded competitive set with funded incumbent:** Mem0 has raised $24M and reports 50,000+ developers (Mem0.ai/series-a). Letta has 13k+ GitHub stars (vectorize.io 2026). Zep, Supermemory, Cognee, LangMem, Hindsight are all active in the same "AI memory" category (n1n.ai 2026, vectorize.io 2026). Memory Store enters as a later mover in a category that already has a funded category leader.

**Platform/MCP dependency:** The product surface is built on Anthropic's MCP and on third-party APIs (Slack, Granola, Fathom, Linear). Anthropic could ship native long-term memory in Claude (it has shipped memory features in 2025), and Notion/Slack/Linear could ship native cross-tool memory, substituting the wedge.

**Pivot execution risk:** Founders are building Memory Store after Julep; Julep had a public OSS following (6.6k stars) and search snippets cite $400k ARR. Public sources do not clarify whether Julep continues, was wound down, or shares the team's attention. [Inferred]: Splitting focus or migrating Julep customers to Memory Store could create execution drag.

**Name confusion / SEO risk:** "Memorystore" is also the name of Google Cloud's managed Redis/Memcached service (cloud.google.com/memorystore). Search results frequently surface Google's product instead of the YC company; this also caused name disambiguation issues during research.

**Brand-domain technical complexity:** [Inferred]: Memory layers must manage stale/contradictory facts (e.g., user changes preferences) — Zep specifically markets temporal knowledge graphs to address this (n1n.ai 2026). Memory Store has not publicly disclosed technical benchmarks (e.g., LongMemEval scores) versus Supermemory's reported 85.4% (dev.to 2026 via search snippet).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | YC Spring 2026 batch (YC company page); "voted #1 most promising startup at batch kickoff" (search snippet, P26 launch material); status.memory.store live (memory.store, May 2026); 9 named integrations live (memory.store, May 2026); prior-product Julep: 6.6k GitHub stars (GitHub search snippet) and "$400k ARR + 7000+ stars" (search snippet, P26 launch material) — prior product, not Memory Store |
| Revenue Signal | No public data found (no pricing page content or revenue figure for Memory Store itself) |
| Founders | Diwank Singh Tomer (Co-founder): Columbia BS Physics, prior Head of Eng at Jar, CEO of Whitehead AI, co-founder Julep AI 2022. Ishita Jindal (Co-founder): Babson MBA, co-founder Julep AI 2022. |
| Competitors | Mem0 ($24M raised, ARR unknown — Mem0.ai/series-a; developer SDK, 50k+ devs); Letta (funding unknown, 13k+ GitHub stars — vectorize.io 2026; OSS agent framework with self-managing memory); Zep (funding unknown, ARR unknown — n1n.ai 2026; temporal knowledge graph, production focus); Supermemory (funding unknown — dev.to 2026; closest SaaS positioning); Cognee (funding unknown — n1n.ai 2026) |
| Moat Signals | Integration breadth (9 sources — memory.store landing page); prior-product OSS distribution at github.com/julep-ai (6.6k stars — GitHub search snippet); no patents/IP/regulatory barriers found |
| Risk Factors | Crowded category with funded leader (Mem0 $24M), MCP/platform dependency on Anthropic, name collision with Google Cloud Memorystore |
| Founder Reach | Diwank Singh Tomer: Twitter @diwanksingh (count not retrievable), LinkedIn /in/diwank-tomer (YC page), GitHub @creatorrr (count not retrievable). Ishita Jindal: Twitter @IshitaJindal17 (count not retrievable), LinkedIn /in/ishitajindal (YC page), GitHub no public repos found. |
| Distribution Signals | YC Spring 2026 batch placement (YC company page); MCP integrations across Claude, ChatGPT, Cursor, Slack, Raycast, Linear, Granola, Fathom, OpenCode (memory.store landing page); founder-led onboarding via cal.com/ishitaj/20min (memory.store landing page); no Product Hunt launch found; no press coverage in named publications found |
| Emails | No public data found |
