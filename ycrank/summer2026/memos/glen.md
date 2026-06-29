# Glen

> Unified organizational context for agents and humans

| Field | Value |
|-------|-------|
| Website | https://www.tryglen.com/ |
| YC Page | https://www.ycombinator.com/companies/glen |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Productivity |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Generative AI, B2B |
| YC Partner | Jared Friedman (YC company page) |
| Emails | No public data found |

## The Idea

- **Problem:** AI coding/PR/sales agents receive fragmented context — "one Slack thread, a single diff" — and must stitch the rest themselves, leading to repeated mistakes and flagged "deliberate choices as defects" (YC company page, 2026).
- **Approach:** Glen reads from where work already lives (code, PRs, issues, docs, meetings), reconciles it via a shared learning store, and serves it to any MCP-connected agent so "anything learned by one agent is learned by all" (tryglen.com, 2026).
- **Differentiation:** Versus Mem0 (vector-first per-agent memory bolt-on), Zep/Graphiti (temporal knowledge graph), and Letta (OS-style self-paging agent runtime), Glen positions as an org-wide, multi-agent shared context source, with access control "applied per observation, automatically, at recall" (tryglen.com; AgentMarketCap, Apr 2026).
- **Business Model:** No pricing page is published; the product runs production waitlist-based onboarding "in waves" with work-email signup (tryglen.com, 2026). [Inferred]: per-seat or per-org SaaS subscription targeting engineering teams, consistent with MCP-agent peers.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; broader agent-memory category context: Mem0 reports 186M API calls in Q3 2025 as the AWS Agent SDK memory provider (mem0.ai blog, 2026).
- **GTM / Distribution:** [Inferred]: Bottom-up developer adoption via MCP integration with Claude, Cursor, and Codex (tryglen.com, 2026), gated waitlist invites, and founder-led outbound from San Francisco given solo-founder status.

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond OAuth 2.1 access architecture and Postgres-backed encrypted store (tryglen.com, 2026).
- **Future moat:** [Inferred]: Data network effects — each connected workspace's reconciled observations and "skills … offered back to the next agent" (YC company page, 2026) could compound per-customer, raising switching costs as organizational history accrues inside Glen.
- **Market structure:** [Inferred]: Incumbent agent-memory vendors (Mem0, Letta, Zep) are oriented around per-agent or per-session memory APIs (AgentMarketCap, Apr 2026); pivoting to an org-wide, multi-source reconciliation product would require re-architecting around source connectors and access-control-per-observation rather than vector stores.
- **Commoditization risk:** Connector-plus-vector-store architectures are widely available; Mem0 has 48,000+ GitHub stars as an open-source baseline (mem0.ai blog, 2026), and LangChain's LangMem ships natively in a popular agent framework (AgentMarketCap, Apr 2026).

## Market & Traction

- **Traction signals:**
  - Product is "in production today" with waitlist-based wave onboarding (tryglen.com, 2026).
  - MCP integration confirmed with Claude, Claude Code, Cursor, Codex, and custom MCP clients (tryglen.com, 2026).
  - Company X account @try_glen exists; follower count not retrievable (YC company page, 2026).
  - LinkedIn company page "tryglen" exists; follower count not retrievable (YC company page, 2026).
  - GitHub org "Glen-Web-App" listed on YC page; star/repo counts not retrievable (YC company page, 2026).
  - No funding announcement, press coverage, Product Hunt launch, Discord/Slack community size, or revenue figures found in public sources.
- **Competitors (minimum 3, up to 5):**
  - Mem0 (revenue unknown; $24M total — $3.9M seed + $20M Series A led by Basis Set Ventures, Oct 2025; 48K+ GitHub stars; AWS Agent SDK memory provider): vector-first per-agent memory SDK, not org-wide reconciled context across PRs/docs/meetings (mem0.ai blog, 2026; AgentMarketCap, Apr 2026).
  - Letta (revenue unknown; $10M seed led by Felicis at ~$70M post, per AgentMarketCap, Apr 2026): OS-style agent runtime with self-managed paging, focused on long-running autonomous agents rather than multi-agent org context.
  - Zep (revenue unknown; funding not retrieved): temporal knowledge graph (Graphiti) tracking fact validity over time; 63.8% on LongMemEval vs. Mem0's 49.0% (mem0.ai blog, 2026); single-agent memory orientation vs. Glen's multi-agent org store.
  - LangMem (LangChain's native memory SDK; LangChain funding not retrieved): framework-bundled memory primitives, not a standalone org-context product (AgentMarketCap, Apr 2026).
  - Glean (enterprise work-graph search; not a memory vendor but adjacent on "emerging agent stack"): enterprise search and agent platform, broader/heavier than Glen's MCP-first developer wedge (glean.com blog, 2026).
- **Why now:** [Inferred]: Anthropic's Model Context Protocol (MCP) reached broad client adoption across Claude, Cursor, and Codex in 2025, creating a standardized integration surface that lets a small team plug a shared context store into multiple agent runtimes simultaneously (tryglen.com lists MCP clients, 2026).

## Founders & Team

- **Nikos Dritsakos (Founder, solo):**
  - Background: Computer science at Brock University; ran a growth agency from year one to year three of university and helped scale Bright; co-founded SalesBop (AI sales coaching) with Sarah Simionescu and Jason Huang, acquired by SellWell and rebranded as FliteHouse, where he served as VP of Tech & Product (The Forge / McMaster University article; LinkedIn).
  - Twitter/X: company handle @try_glen; personal handle — No public account found.
  - LinkedIn: "Glen | Simply for the love of the game." — 500+ connections, San Francisco (linkedin.com/in/nikos-dritsakos).
  - GitHub: Company org @Glen-Web-App listed on YC page; personal handle — No public repos found.
- **Co-founder relationship:** Solo founder per YC company page (team size 1); no co-founder.
- **Founder-market fit:** [Inferred]: Prior acquired AI-SaaS company (SalesBop → SellWell/FliteHouse) and VP-level product/tech operating experience indicate exposure to multi-agent B2B SaaS workflows; no advisors, board members, or named investors found in public sources beyond YC Group Partner Jared Friedman (YC company page, 2026).

## Key Risks

- **Solo-founder execution at platform scope:** Glen's product surface spans connectors to code, PRs, issues, docs, and meetings plus MCP server, access control, and storage (tryglen.com, 2026); a single founder (YC page) carries delivery and GTM concurrently with no co-founder coverage found.
- **Commoditization by funded memory peers:** Mem0 ($24M raised, 48K+ GitHub stars, AWS Agent SDK distribution; mem0.ai blog, 2026) and Letta ($10M seed at ~$70M post; AgentMarketCap, Apr 2026) hold capital and developer-mindshare leads in adjacent agent-memory positioning.
- **Distribution dependence on MCP and host agents:** Product value relies on MCP clients (Claude, Cursor, Codex) remaining open and on customers running MCP-based agents (tryglen.com, 2026); host-vendor changes to memory/context APIs could disintermediate the layer.
- **Enterprise data-access barriers:** Reading from "code and PRs, issues, docs, and meetings" (YC company page, 2026) requires per-source enterprise authorization and security review; no SOC 2 or enterprise certifications were found in public sources.
- **Unverified traction:** No public users, revenue, customer logos, press, Product Hunt launch, or community-size data found at time of research, leaving traction unverifiable beyond "in production with waitlist waves" (tryglen.com, 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | "In production today" with waitlist wave onboarding (tryglen.com, 2026); MCP integrations live for Claude, Cursor, Codex (tryglen.com, 2026); company X @try_glen and LinkedIn "tryglen" (YC page, 2026), follower counts not retrievable |
| Revenue Signal | No public data found (no pricing page; waitlist gated — tryglen.com, 2026) |
| Founders | Nikos Dritsakos (Founder): Brock University CS; co-founded SalesBop, acquired by SellWell/FliteHouse; former VP Tech & Product at FliteHouse |
| Competitors | Mem0 ($24M raised, revenue unknown, vector-first per-agent memory SDK with 48K+ GH stars); Letta ($10M seed at ~$70M post, revenue unknown, OS-style agent runtime); Zep (funding not retrieved, revenue unknown, temporal knowledge graph for single-agent memory); LangMem (LangChain-bundled, revenue unknown, framework-native memory primitives); Glean (adjacent enterprise work-graph search, funding not retrieved) |
| Moat Signals | No public data found beyond per-observation access control and OAuth 2.1 + argon2id key hashing (tryglen.com, 2026) |
| Risk Factors | Solo-founder platform scope, commoditization by funded memory peers (Mem0/Letta), MCP/host-agent distribution dependence |
| Founder Reach | Nikos Dritsakos: Twitter not found, LinkedIn 500+ connections (linkedin.com/in/nikos-dritsakos), GitHub personal handle not found |
| Distribution Signals | Waitlist signup with work email (tryglen.com, 2026); MCP client integrations Claude/Cursor/Codex (tryglen.com, 2026); no Product Hunt, Chrome Web Store, or app-store presence found |
| Emails | No public data found (booking link glen.cal.com/general/glen-chat — tryglen.com, 2026) |

Sources:
- [Glen — tryglen.com](https://www.tryglen.com/)
- [Glen — Y Combinator company page](https://www.ycombinator.com/companies/glen)
- [Nikos Dritsakos — LinkedIn](https://www.linkedin.com/in/nikos-dritsakos/)
- [SalesBop acquisition story — The Forge, McMaster University](https://theforge.mcmaster.ca/salesbop-acquired/)
- [State of AI Agent Memory 2026 — mem0.ai blog](https://mem0.ai/blog/state-of-ai-agent-memory-2026)
- [Agent Memory at Scale 2026 — AgentMarketCap](https://agentmarketcap.ai/blog/2026/04/10/agent-memory-vendor-landscape-2026-letta-zep-mem0-langmem)
- [The emerging agent architecture — Glean blog](https://www.glean.com/blog/emerging-agent-stack-2026)
