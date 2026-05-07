# Hyper

> The Self-Driving Company Brain

| Field | Value |
|-------|-------|
| Website | https://heyhyper.ai |
| YC Page | https://www.ycombinator.com/companies/hyper-4 |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Productivity |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Productivity, Team Collaboration |
| YC Partner | David Lieb |
| Emails | kt@heyhyper.ai (YC company page) |

## The Idea

**Problem:**
- AI-first teams generate context across many tools (Notion, Claude Code, Cursor, email, LinkedIn DMs); none of these tools share state, so each AI assistant starts cold (YC company page).
- [Inferred]: Knowledge fragmentation across SaaS surfaces forces repeat prompting, lost decisions, and stale documentation; today these teams rely on manual docs, channel pinning, or per-tool memory features.

**Approach:**
- Hyper "silently learns from every update in every tool your team uses... agent-driven algorithms update and clean all that information into real-time knowledge that is shared across your entire team. That knowledge is quietly infused into all your existing AI tools on every chat turn" (YC company page).
- Website tagline: "Shared memory for humans and AI" (heyhyper.ai homepage).
- **Product evolution:** A March 2026 Product Hunt launch listed "Hyper" as an iOS voice AI for in-person conversations with real-time transcription, mid-conversation querying, and one-tap follow-ups, reaching 96 upvotes and Day rank #18 (Product Hunt, "Hyper: Perfect memory for every real-world conversation," 2026). The current YC description (Spring 2026 batch) frames Hyper as a cross-tool team knowledge layer rather than an iOS voice note taker (YC company page). [Inferred]: Either a pivot from the voice-capture product, or a broadening of scope from in-person conversations to all team tool surfaces.

**Differentiation:**
- [Inferred]: Vs. Glean (enterprise search index over connectors): Hyper is positioned as an ambient write-layer that pushes context back into existing AI tools per chat turn, rather than a search destination users navigate to.
- [Inferred]: Vs. Notion AI / Mem.ai / Guru: not a notes app or verified-card system; the unit of value is auto-curated context injected into other AI tools.
- [Inferred]: Vs. per-tool memory features (e.g., ChatGPT memory, Cursor rules): cross-tool, team-shared rather than per-user, per-app.

**Business Model:**
- No pricing page accessible in the public homepage fetch (heyhyper.ai homepage; "Pricing Tiers: Not found"). No public revenue figures found.
- [Inferred]: Per-seat SaaS targeting AI-first SMB/mid-market teams is the most likely monetization path given the team-collaboration framing and integration set in the YC description.

**TAM/SAM:**
- AI-driven knowledge management systems estimated at $7.66B in 2025 growing to $11.24B in 2026 at 46.7% CAGR, projected to reach $51.36B by 2030 (Dimension Market Research / market.us via search snippet).
- Broader knowledge management software market: $23.2B (2025) (Fortune Business Insights via search snippet); alternate estimate $38.98B (2025) → $92.45B (2033) (Straits Research via search snippet).
- No public SAM data found specific to "shared memory for AI tools."

**GTM / Distribution:**
- One job/distribution signal: founder Twitter handles @_shalinshah_ and @KanyesThaker linked from YC page (YC company page). Hiring status: not hiring (YC company page).
- [Inferred]: Bottom-up developer-led distribution via Twitter/X founder presence and YC network is the most likely initial channel given the two-person team, "AI-first teams" target, and integrations with developer tools (Cursor, Claude Code).

## Defensibility

- No defensibility signals found in public sources beyond integration breadth listed in the YC description (Notion, Claude Code, emails, LinkedIn DMs, Cursor) (YC company page).
- [Inferred]: Potential moat could develop via (a) proprietary cross-tool team knowledge graph that compounds with usage, (b) high switching costs once a team's working memory lives in Hyper, and (c) integration surface area; all are unproven at this stage.

**Market structure:**
- [Inferred]: No structural barrier identified at this stage. Incumbents Glean ($200M ARR, $7.2B valuation as of late 2025; Fortune, Dec 2025) and Notion (Notion AI shipping external connectors per Capacity, 2026 via search snippet) can extend toward the same use case without business-model conflict. The structural defense Hyper would need — exclusive integration partnerships or proprietary data rights — is not evidenced publicly.

**Commoditization risk:**
- [Inferred]: High. The technical primitives (LLM extraction over tool webhooks, vector store, retrieval injection) are widely available; Dust ($21.5M raised, $7.3M ARR mid-2025; getlatka.com / TechCrunch) and a long tail of "AI agents over your data" startups already ship overlapping capability. Per-tool native memory (OpenAI, Anthropic, Notion) is also expanding.

## Market & Traction

**1. Traction signals (current product — "company brain"):**
- Public homepage returned only header content on fetch; no traction numbers shown (heyhyper.ai homepage fetch).
- No press coverage found in named publications via web search.
- No Discord/Slack community size found.
- No web traffic estimates found.
- Company is not currently hiring (YC company page).
- No public TechCrunch/Forbes/Information coverage of heyhyper.ai found in search.

**Traction signals (prior/related "Hyper" iOS voice product, Mar 2026):**
- 96 upvotes, Day rank #18, 89 followers on Product Hunt launch (Product Hunt "hyper-10" page, 2026).
- Built with Claude Code, Supabase, exa.ai per launch description (Product Hunt, 2026).
- Self-funded, two-person team based in San Francisco at time of PH launch (Product Hunt, 2026).

**Founder reach:**
- Shalin Shah Twitter @_shalinshah_ — count not retrievable (X.com fetch returned 402 error). LinkedIn /in/shalins (LinkedIn). No public GitHub repos found under his name in linked search results.
- Kanyes Thaker Twitter @KanyesThaker — count not retrievable. LinkedIn /in/kanyesthaker (LinkedIn). GitHub /kanyesthaker: 7 followers; top repo qgqa-flashcards 66 stars (GitHub profile fetch).

**2. Competitive landscape:**
- **Glean** — $610M raised total since early 2024; $7.2B valuation on $150M Series F led by Wellington (Glean press release, June 2025; TechCrunch, June 10 2025); $200M ARR (Fortune, Dec 8 2025). Differentiator: enterprise-grade indexed search and agent platform with broad enterprise connectors; Hyper differs by positioning as an ambient memory layer injected into other AI tools rather than a destination search/agent platform (YC company page).
- **Dust** — $21.5M raised total ($16M Series A led by Sequoia, June 2024); $7.3M ARR mid-2025 with 66-person team (TechCrunch, June 2024; getlatka.com via search snippet). Differentiator: enterprise platform for building custom agents over company data; Hyper differs by emphasizing automatic context capture without explicit agent building (YC company page).
- **Notion AI** — Part of Notion (private, last reported $10B valuation in 2021 funding rounds; not re-verified in this research). Differentiator: AI native to a notes/wiki workspace with external connectors to Slack/GitHub/Drive (Capacity 2026 alternatives roundup via search snippet); Hyper does not require migrating content into a new workspace.
- **Mem.ai** — Funding/ARR not retrieved. Differentiator: AI-powered personal/team note app with vector search over notes (Capacity 2026 via search snippet); Hyper targets cross-tool capture rather than a notes UI.
- **Guru** — Funding/ARR not retrieved. Differentiator: verified knowledge cards with periodic SME re-verification (Capacity 2026 via search snippet); Hyper takes the opposite stance — passive ambient capture rather than human-verified curation.

**3. Why now:**
- [Inferred]: Catalyst is the proliferation of AI tool surfaces in 2024–2026 (Cursor, Claude Code, ChatGPT, Notion AI, etc.) creating a context-fragmentation problem that did not previously exist at this scale. Per Glean's growth from $100M → $200M ARR in nine months (Fortune, Dec 2025), enterprise willingness to pay for AI knowledge layers has accelerated.
- [Inferred]: Cost curve on long-context retrieval and embeddings has dropped enough to make per-chat-turn context injection economical; not separately cited.

## Founders & Team

**Shalin Shah** — Founder
- BS, EECS with Math Minor, UC Berkeley (2017–2021) (LinkedIn /in/shalins via search snippet).
- Most recently Autonomy Lead at Matic Robots; led the autonomy team and built core systems (LinkedIn via search snippet; maticrobots.com).
- Twitter/X: @_shalinshah_ — follower count not retrievable (X.com fetch returned 402).
- LinkedIn: linkedin.com/in/shalins (YC company page).
- GitHub: No public repos surfaced in search.

**Kanyes Thaker** — Founder
- Cal '21 (UC Berkeley) (GitHub bio).
- Previously Research Engineer, Perception at Matic Robots; ex–Motion Planning at Matic; ex–MLEng at Snorkel AI (GitHub bio; Snorkel AI author page; LinkedIn via search snippet).
- Twitter/X: @KanyesThaker — count not retrievable.
- LinkedIn: linkedin.com/in/kanyesthaker (YC company page).
- GitHub: github.com/kanyesthaker — 7 followers; top repo qgqa-flashcards 66 stars; pgsql-csv-uploader 4 stars; syncavify 2 stars (GitHub profile fetch).

**Co-founder relationship:**
- Both worked at Matic Robots (vision-first home robotics company) (LinkedIn snippets for both).
- Both attended UC Berkeley graduating ~2021 (Cal '21 per Kanyes GitHub; UC Berkeley 2017–2021 per Shalin LinkedIn).

**Founder-market fit:**
- [Inferred]: Both founders have ML/perception/autonomy systems backgrounds from Matic Robots, where multi-source sensor fusion is a core problem. The Hyper product (fusing signal across many tool surfaces into a coherent shared memory) is conceptually adjacent to that perception/autonomy work. Neither founder has a documented prior exit or prior B2B SaaS founding role; this is their first founder-CEO/CTO role per the YC page.
- No advisors, board members, or notable angel investors identified in public sources beyond the YC standard deal (YC company page; no press coverage found).

## Key Risks

**Incumbent encroachment by Glean and Notion:** Glean grew ARR from $100M to $200M in 9 months (Fortune, Dec 2025) and Notion AI is shipping external connectors to Slack/GitHub/Drive (Capacity 2026 via search snippet). Both are extending toward the "context across tools for AI" wedge Hyper occupies. No public differentiation evidence (proprietary data, exclusive integrations) found to blunt this.

**Per-tool native memory commoditization:** Cursor, Claude Code, ChatGPT, and Notion are each shipping memory/context features natively. [Inferred]: If users get "good enough" memory inside each tool, the cross-tool layer's value compresses.

**Product positioning ambiguity / pivot signal:** A March 2026 Product Hunt launch presented Hyper as an iOS voice note-taking app (Product Hunt "hyper-10," 2026); the May 2026 YC page describes a cross-tool company-brain. [Inferred]: Possible mid-batch pivot or scope expansion; no public statement explaining the change was found, raising execution-focus risk for a two-person team.

**Trust and privacy boundary:** Product passively ingests Notion docs, emails, LinkedIn DMs, Cursor sessions per YC description (YC company page). [Inferred]: Enterprise procurement gates (SOC 2, data residency, DLP) are an open execution risk; no public security posture evidence found.

**Name collision:** A separate "Hyper" raised $6.3M in July 2025 to automate 911 calls (TechCrunch, July 21 2025) — unrelated company; risk of brand/SEO confusion.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI-driven KM systems: $7.66B (2025) → $11.24B (2026), 46.7% CAGR (Dimension Market Research / market.us via search snippet); broader KM software $23.2B 2025 (Fortune Business Insights via search snippet) |
| SAM | No public data found |
| Traction | Current "company brain" product: No public data found. Prior/related Hyper iOS voice product: 96 upvotes, Day rank #18, 89 followers (Product Hunt, 2026) |
| Revenue Signal | No public data found (no pricing page accessible at heyhyper.ai homepage fetch; no press funding figures found) |
| Founders | Shalin Shah (Founder): UC Berkeley EECS '21, Autonomy Lead at Matic Robots. Kanyes Thaker (Founder): UC Berkeley '21, Perception/Motion Planning at Matic Robots, ex-MLEng Snorkel AI |
| Competitors | Glean ($610M raised, $200M ARR, enterprise indexed search — Fortune Dec 2025 / Glean press June 2025); Dust ($21.5M raised, $7.3M ARR, custom enterprise agents — TechCrunch June 2024 / getlatka.com via search snippet); Notion AI (in-workspace AI with external connectors — Capacity 2026 via search snippet, funding not re-verified); Mem.ai (AI notes app, funding/ARR not retrieved); Guru (verified-card KM, funding/ARR not retrieved) |
| Moat Signals | No public data found |
| Risk Factors | Incumbent encroachment (Glean, Notion AI), per-tool native memory commoditization, possible pivot/positioning ambiguity vs. March 2026 iOS launch |
| Founder Reach | Shalin Shah: Twitter @_shalinshah_ count not retrievable, LinkedIn /in/shalins, GitHub no public repos found. Kanyes Thaker: Twitter @KanyesThaker count not retrievable, LinkedIn /in/kanyesthaker, GitHub /kanyesthaker 7 followers, top repo 66 stars (GitHub fetch) |
| Distribution Signals | Product Hunt launch of related/prior Hyper iOS product: 96 upvotes, Day rank #18 (Product Hunt, 2026); not currently hiring (YC company page); no Chrome Web Store / app store install counts found |
| Emails | kt@heyhyper.ai (YC company page) |

Sources:
- [YC Hyper company page](https://www.ycombinator.com/companies/hyper-4)
- [heyhyper.ai homepage](https://heyhyper.ai)
- [Hyper on Product Hunt](https://www.producthunt.com/products/hyper-10)
- [Kanyes Thaker GitHub](https://github.com/kanyesthaker)
- [Glean $150M Series F at $7.2B (TechCrunch, June 2025)](https://techcrunch.com/2025/06/10/enterprise-ai-startup-glean-lands-a-7-2b-valuation/)
- [Glean $200M ARR (Fortune, Dec 2025)](https://fortune.com/2025/12/08/exclusive-glean-hits-200-million-arr-up-from-100-million-nine-months-back/)
- [Dust $16M Series A (TechCrunch, June 2024)](https://techcrunch.com/2024/06/27/dust-grabs-another-16-million-for-its-enterprise-ai-assistants-connected-to-internal-data/)
- [Dust ARR (getlatka)](https://getlatka.com/companies/dust.tt)
- [AI in Knowledge Management Market (market.us)](https://market.us/report/ai-in-knowledge-management-market/)
- [AI-driven KM market forecast (Dimension Market Research)](https://dimensionmarketresearch.com/report/ai-driven-knowledge-management-system-market/)
- [Glean alternatives 2026 (Capacity)](https://capacity.com/blog/glean-alternatives/)
- [Unrelated AI 911 "Hyper" (TechCrunch, July 2025)](https://techcrunch.com/2025/07/21/ai-voice-company-hyper-raises-6-3m-to-help-automate-911-calls/)
- [Matic Robots](https://maticrobots.com/)
- [Snorkel AI — Kanyes Thaker author page](https://snorkel.ai/author/kanyes-thaker/)
