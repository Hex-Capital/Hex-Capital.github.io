# Bloom

> The brand layer for agents

| Field | Value |
|-------|-------|
| Website | https://trybloom.ai |
| YC Page | https://www.ycombinator.com/companies/trybloom |
| Batch | Spring 2026 (YC page) |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags |  |
| YC Partner | Pete Koomen (YC page) |
| Emails | support@trybloom.ai (trybloom.ai, 2026) |

## The Idea

- **Problem:** AI agents and creative tools generate off-brand outputs because brand assets (decks, websites, Figma, social) are scattered and not machine-readable, forcing teams to either manually correct outputs or maintain bespoke prompt libraries (trybloom.ai, 2026).
- **Approach:** Bloom ingests brand assets from multiple sources, systematizes them into a "Brand OS," and exposes the brand via web app, REST API, and MCP server so any agent (Claude, ChatGPT, Cursor, Codex, Manus) can call it for on-brand images, video, and copy (trybloom.ai, 2026).
- **Differentiation:** vs. Marq/Canva — Bloom is API/MCP-first for agent consumption rather than human design templating (trybloom.ai features page; Marq.com, 2026); vs. Jasper Brand Voice — Bloom covers multimodal output (image, video, copy) rather than copy-only (Marq blog, 2026); vs. Ad Legends/uBrand kit generators — Bloom is a callable runtime, not a one-time brand-kit extraction (adlegends.ai, 2026).
- **Business Model:** Scale plan at $90/month (or $1,080 annual, 28% discount) including 500 credits, with consumption tiers at 300/500/1,000/2,000 credits, unlimited seats, API+MCP in all plans (trybloom.ai pricing, 2026).
- **TAM/SAM:** Generative AI in creative industries projected to grow from $4.06B (2025) to $5.38B (2026) at 32.3% CAGR (DesignRush/market report via search snippet, 2026); no public SAM data found for agent-callable brand infrastructure specifically.
- **GTM / Distribution:** Founder-led organic social distribution (launch tweet "World's first on-brand AI" on X, Dec 2, 2025, via @rincidium) plus MCP server distribution across major AI coding/agent platforms (x.com/rincidium/status/1995946528343818656; trybloom.ai integrations, 2026).

## Defensibility

- **Moat today:** Multi-surface integration footprint across Claude Desktop, ChatGPT, Claude Code, OpenCode, Cursor, VS Code, OpenAI Codex, and Manus via MCP (trybloom.ai, 2026); reported 50k+ images generated in launch week implies early generation-data accumulation (search snippet, Dec 2025).
- **Future moat:** [Inferred]: Switching costs as brands ingest assets into Bloom and downstream agents/workflows are wired to its API/MCP endpoints; unproven now because customer-base size and integration depth are not publicly disclosed.
- **Market structure:** [Inferred]: Incumbent design tools (Canva, Adobe, Figma) monetize human-seat licensing, so an API/MCP, no-seat, consumption model would cannibalize per-seat revenue if launched natively; this creates channel-conflict friction rather than a hard technical barrier.
- **Commoditization risk:** Brand-kit extraction is already offered free by Ad Legends and as part of Canva AI 2.0 Brand Intelligence launched April 2026 (flatlineagency.com; adlegends.ai, 2026); core ingestion step is replicable, making the agent-callable runtime + integration distribution the principal differentiator.

## Market & Traction

- **Traction signals:**
  - 1.4M views, 14K users, 50k+ images generated in first week of launch with zero paid marketing (search snippet, Dec 2025).
  - $1M raised from Guillermo Rauch (founder of Vercel) and Nebular VC (search snippet, 2026).
  - Launch tweet from founder Dec 2, 2025 (x.com/rincidium/status/1995946528343818656).
  - Roman Kolesov LinkedIn post promoting "Bloom AI Brandbook Generator," 2025 (linkedin.com search result).
  - Medium write-up: "The New AI Branding Superpower! Bloom.ai Generates a Full Brand System From Your Website" (medium.com/@breezen100, 2025).
  - YouTube channel @trybloomai active (youtube.com, 2026).
  - 2 active job postings: Founding Growth/Marketing ($120K-$180K) and Founding Engineer ($120K-$200K) (ycombinator.com/companies/trybloom/jobs, 2026).
  - Twitter/LinkedIn follower counts not retrievable via WebFetch (count not retrievable).
- **Competitors (3-5):**
  - Marq ("trusted by over 7 million people," revenue unknown, raised unknown): human-seat design templating for distributed teams vs. Bloom's API/MCP agent runtime (marq.com, 2026).
  - Jasper AI (raised $131M Series A 2022 per public reporting via search snippet, revenue unknown): copy-focused Brand Voice at $69/mo per seat vs. Bloom's multimodal, unlimited-seat consumption model (designrush.com, 2026).
  - Canva (private, $40B valuation per public reporting via search snippet): Canva AI 2.0 Brand Intelligence launched April 2026 applies brand fonts/colors to designs vs. Bloom's headless API/MCP for any agent (flatlineagency.com, April 2026).
  - uBrand (funding unknown, revenue unknown): entrepreneur-focused brand creation UI vs. Bloom's agent-callable infrastructure (ubrand.com, 2026).
  - Ad Legends AI Brand Kit Generator (funding unknown, revenue unknown): free one-shot brand-kit extraction vs. Bloom's persistent, callable brand system (adlegends.ai, 2026).
- **Why now:** MCP protocol adoption by Anthropic, OpenAI, Cursor, and Codex through 2025 created a standard hook for agents to call external brand context, enabling the "callable brand" pattern (trybloom.ai integrations list, 2026; [Inferred] from MCP rollout timing).

## Founders & Team

- **Ray Fitzgerald (Founder/CEO):**
  - Background: Cork, Ireland native; previously founded Lucid, an AI-native word processor (thinkbusiness.ie; crunchbase.com/organization/lucid-237d); prior to Lucid, founding engineer at Inscribe (YC S18) on AI Agents platform, reportedly reducing manual review time by 80% (search snippet).
  - Twitter/X: @rincidium (twitter.com/rincidium) — follower count not retrievable.
  - LinkedIn: "Bloom" (ie.linkedin.com/in/ray-fitzgerald-86b451148).
  - GitHub: No public repos found in search results.
- **Co-founder relationship:** No public data on co-founder identities; YC page lists only Ray Fitzgerald though team size is 3, and the company is hiring a Founding Engineer and Founding Growth role (ycombinator.com/companies/trybloom; jobs page, 2026).
- **Founder-market fit:** Documented track record building AI-native creative software (Lucid word processor) and shipping AI agents in production (Inscribe S18) maps directly to Bloom's agent-runtime + creative-output thesis (thinkbusiness.ie; YC page); backing from Guillermo Rauch (Vercel) signals developer-tools network access (search snippet).

## Key Risks

- **Platform substitution risk:** Canva AI 2.0 Brand Intelligence (launched April 2026) and Adobe's brand-aware AI overlap directly with Bloom's "auto-apply brand" value prop on the design surface (flatlineagency.com, 2026); mitigation is Bloom's headless API/MCP positioning targeting agents rather than designers.
- **Commoditization of ingestion:** Free brand-kit extractors (Ad Legends, Magnt) demonstrate the ingestion step is low-defensibility (adlegends.ai; magnt.com, 2026); Bloom's moat thesis depends on runtime usage, not extraction, but no public retention/ARR data confirms runtime stickiness.
- **Name collision risk:** Multiple unrelated entities use "Bloom" (Bloom Finder app, Trybloom skincare at trybloom.store, Bloom health app at trybloom.app, Bloom Ventures VC) creating search-discovery and trademark friction (search results, 2026).
- **Team concentration:** Only one founder is publicly identified (Ray Fitzgerald) despite team-size 3 and two open founding-role hires, creating single-founder execution and key-person concentration (YC page; jobs page, 2026).
- **Unverified traction figures:** The 1.4M views / 14K users / 50K images / $1M raised figures appear only in search snippets and are not corroborated by named press outlets (TechCrunch, Forbes, etc.) in retrieved results; verification with founder is warranted before underwriting.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Generative AI in creative industries: $4.06B in 2025 → $5.38B in 2026, 32.3% CAGR (market report via search snippet, 2026) |
| SAM | No public data found |
| Traction | 1.4M views, 14K users, 50K+ images in launch week (search snippet, Dec 2025); $1M raised from Guillermo Rauch + Nebular VC (search snippet, 2026); 2 open founding-role jobs (YC jobs page, 2026); Medium feature (medium.com/@breezen100, 2025) |
| Revenue Signal | Scale plan $90/mo, $1,080 annual (28% discount), 500 credits; tiered 300/500/1,000/2,000 credits; unlimited seats; API+MCP in all plans (trybloom.ai pricing, 2026) |
| Founders | Ray Fitzgerald (Founder/CEO): founded Lucid (AI word processor); founding engineer at Inscribe YC S18 AI Agents platform; Cork, Ireland native |
| Competitors | Marq (raised unknown, revenue unknown, human-seat brand templating); Jasper AI ($131M raised per public reporting via search snippet, revenue unknown, copy-focused Brand Voice); Canva (private $40B valuation per public reporting via search snippet, Brand Intelligence launched April 2026); uBrand (funding unknown, entrepreneur UI); Ad Legends (funding unknown, free brand-kit extraction) |
| Moat Signals | MCP/API integrations with Claude Desktop, ChatGPT, Claude Code, OpenCode, Cursor, VS Code, OpenAI Codex, Manus (trybloom.ai, 2026); 50K+ images generated in launch week (search snippet) |
| Risk Factors | Canva/Adobe platform substitution, commoditized brand-kit extraction, name collision, single publicly-identified founder |
| Founder Reach | Ray Fitzgerald: Twitter @rincidium (count not retrievable), LinkedIn ray-fitzgerald-86b451148 (count not retrievable), GitHub not found |
| Distribution Signals | Founder launch tweet Dec 2, 2025 (x.com/rincidium/status/1995946528343818656); MCP server distribution across 8 AI platforms (trybloom.ai, 2026); YouTube @trybloomai active; Medium write-up (2025); no Product Hunt launch found in search results |
| Emails | support@trybloom.ai (trybloom.ai, 2026) |

Sources:
- [Bloom — trybloom.ai](https://trybloom.ai/)
- [Bloom YC profile](https://www.ycombinator.com/companies/trybloom)
- [Bloom jobs](https://www.ycombinator.com/companies/trybloom/jobs/)
- [Ray Fitzgerald X launch](https://x.com/rincidium/status/1995946528343818656)
- [Ray Fitzgerald LinkedIn](https://ie.linkedin.com/in/ray-fitzgerald-86b451148)
- [Lucid Crunchbase](https://www.crunchbase.com/organization/lucid-237d)
- [Lucid feature — ThinkBusiness](https://www.thinkbusiness.ie/articles/lucid-ai-text-editor-reimagines-word-processing/)
- [Medium write-up on Bloom](https://medium.com/@breezen100/the-new-ai-branding-superpower-7c0662c05646)
- [DesignRush AI branding tools 2026](https://www.designrush.com/agency/logo-branding/trends/ai-branding-tools)
- [Marq AI brand management](https://www.marq.com/blog/ai-tools-for-brand-management/)
- [Flatline Agency — Canva AI 2.0](https://www.flatlineagency.com/blog/ai-design-tools-for-brands-2026/)
- [Ad Legends Brand Kit Generator](https://www.adlegends.ai/ai-brand-kit-generator)
- [uBrand](https://ubrand.com/)
