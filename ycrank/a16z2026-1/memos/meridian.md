# Meridian

> Ex. OpenAI, Palantir, Sandia Labs building Meridian. The AI operating system for consulting firms

| Field | Value |
|-------|-------|
| Website | https://trymeridian.dev/ |
| YC Page | https://speedrun.a16z.com/companies/meridian |
| Batch | Fall 2025 (accepted to YC F25; departed batch per Unicorner, Nov 2025; not listed in Extruct AI F25 batch directory) |
| Industry | B2B, AI, AI Models/Infrastructure |
| Team Size | 2 (per a16z Speedrun portal; however, 3 co-founders identified — see Founders section) |
| Location | San Francisco, California, United States of America |
| Tags | B2B, AI, AI Models/Infrastructure |
| YC Partner | Not listed (a16z Speedrun portal page returned 404 at time of research; company absent from YC company directory) |
| Emails | kn@trymeridian.dev, cf@trymeridian.dev (a16z Speedrun portal) |

## The Idea

**Problem:** Consulting firms run on institutional knowledge that is unstructured, unsearchable, and lost when people leave (a16z Speedrun portal description). Knowledge workers spend up to 40% of their time searching for existing information, and 42% of job-specific expertise disappears when someone departs (Unicorner, Nov 2025). 30% of departing employees hold irreplaceable knowledge, equating to over $10M in lost productivity for a typical 500-person firm (Meridian data cited in Unicorner, Nov 2025). Current alternatives are generic AI tools that are "stateless by design, starting from zero every conversation" (a16z Speedrun portal), or legacy knowledge management platforms not built for consulting-specific workflows.

**Approach:** Meridian is a vertical AI workspace for consulting teams that connects to existing document stores (SharePoint, OneDrive, Google Drive, Dropbox, Box) and provides: (1) plain-language search across the firm's knowledge base with synthesized answers and source citations; (2) "Smart Folders" that auto-organize documents by project, client, or topic; (3) presentation deck and proposal generation using the firm's exact templates; (4) document-scale data extraction from PDFs and contracts with natural-language column definitions; (5) unified client relationship tracking with engagement stages and account health (trymeridian.dev). Integrations include Slack, Salesforce, Microsoft Teams, Outlook, Gmail, and Google Calendar (trymeridian.dev). Autonomous AI agents continuously capture knowledge and conduct intelligent interviews to extract expertise (Unicorner, Nov 2025).

**Differentiation:** Unlike horizontal enterprise search tools (e.g., Glean), Meridian is purpose-built for consulting workflows — deliverable generation in firm templates, client engagement tracking, and proposal automation. Unlike Kenley (YC S24), which focuses on AI agents for advisory workflows and due diligence (YC company page), Meridian emphasizes the accumulating data asset: "The bet is the data — behavioral signal on how consulting work actually gets done. You can't download it" (a16z Speedrun portal). The company claims competitive wins against Databricks and Palantir in bake-offs (a16z Speedrun portal, self-reported).

**Business Model:** Website lists pricing as $0 USD / free (trymeridian.dev). Unicorner (Nov 2025) reports a hybrid SaaS model: per-seat, per-month pricing for platform access, plus API and MCP programmatic access with usage-based, pay-per-call pricing. [Inferred]: The free tier likely serves as a land-and-expand entry point, with monetization via paid seats and API consumption once firms integrate Meridian into workflows.

**TAM/SAM:** The global knowledge management software market was valued at approximately $23.2B in 2025, growing at a 13.8% CAGR (Fortune Business Insights via search snippet). No consulting-specific SAM estimate was found in public sources.

**GTM / Distribution:** The website's primary CTA is "Book a Demo" via Google Calendar (trymeridian.dev). The a16z Speedrun portal description states "Managing partners referring us unprompted," indicating word-of-mouth referral among consulting firm leadership (self-reported). [Inferred]: GTM is founder-led sales targeting managing partners at consulting firms, with a land-and-expand motion driven by the product becoming "irreplaceable" after two months of use (a16z Speedrun portal).

## Defensibility

- **Data moat (aspirational):** The founders explicitly frame the defensibility thesis around accumulated behavioral data: "behavioral signal on how consulting work actually gets done. You can't download it. You have to earn it one engagement at a time" (a16z Speedrun portal). After two months of usage, a firm's Meridian instance is described as "irreplaceable" (a16z Speedrun portal, self-reported).
- **Switching costs:** Once a firm's documents are organized, templates configured, and client relationships tracked, migration cost increases with each engagement (trymeridian.dev features). [Inferred]: This creates stickiness similar to CRM lock-in, where historical data makes departure costly.
- **Network effects:** No public data found for network effects across firms.

**Market structure:** [Inferred]: Large horizontal incumbents (Glean, Microsoft Copilot) face channel conflict in going deep on consulting-specific workflows — their sales motion targets broad enterprise IT buyers, not consulting managing partners. Consulting-specific template generation, engagement tracking, and knowledge extraction require domain depth that conflicts with horizontal product roadmaps.

**Commoditization risk:** The core technology stack (RAG over documents, LLM-based generation, template-based output) is reproducible with off-the-shelf components. Kenley (YC S24) is building a directly competing product. Glean ($200M ARR, $7.2B valuation per Glean press release, Dec 2025) could add consulting-vertical features. The differentiation claim rests on the proprietary behavioral data layer, which requires sustained adoption to build.

## Market & Traction

**Traction signals:**
- ~$700K contracted revenue, 4 months in (a16z Speedrun portal, self-reported)
- 3x month-over-month growth since January (a16z Speedrun portal, self-reported)
- Won competitive bake-offs against Databricks and Palantir (a16z Speedrun portal, self-reported)
- $1M raised from a16z Speedrun (Unicorner, Nov 2025)
- Accepted to YC F25 then departed the batch (Unicorner, Nov 2025; confirmed absent from Extruct AI F25 directory)
- Company Twitter/X: @tryMerid1an — handle found but follower count not retrievable (X returned 402 error)
- CEO Twitter/X: @KashyapNathan_ — 390 followers (X search result)
- Company LinkedIn: linkedin.com/company/try-meridian — follower count not retrievable
- No Product Hunt launch found
- No app store presence found
- No Discord or Slack community found
- Job listing found on Paraform (Paraform search result) — indicates active hiring

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Meridian |
|-----------|---------|-------------|-------------------------------|
| **Kenley** (YC S24) | $500K (YC company page) | Revenue unknown | Direct competitor for consulting firms; AI agents for advisory workflows and due diligence; custom agent builder (YC launch page) |
| **Glean** | $610M+ total; $150M Series F at $7.2B valuation (Glean press, Jun 2025) | $200M ARR (Fortune, Dec 2025) | Horizontal enterprise AI search; not consulting-specific; targets broad enterprise IT buyers |
| **Guru** | ~$70M total (Crunchbase) | ~$33M estimated (Owler) | Card-based knowledge management with browser extensions; targets mid-size teams broadly, not consulting-specific |
| **Bloomfire** | $32.8M total (CBInsights) | $7M revenue (Latka, Oct 2024) | AI knowledge hub with "Synapse" conversational AI; enterprise-focused, not consulting-vertical |
| **Interloom** | $16.5M seed (Fortune, Mar 2026) | Revenue unknown | Tacit knowledge capture for AI agents via "context graphs"; targets large European enterprises, not consulting specifically |

**Why now:** [Inferred]: The catalyst is the maturation of RAG architectures and LLM capabilities (GPT-4-class models) in 2023–2025, which crossed a quality threshold for generating client-ready consulting deliverables (decks, proposals) rather than just search results. Simultaneously, consulting firms face accelerating talent turnover — the knowledge loss problem is acute and worsening. The emergence of MCP (Model Context Protocol) as a standard for tool-use in AI systems enables deeper integration with firm workflows than was previously feasible.

## Founders & Team

**Kashyap Nathan** — Co-founder & CEO
- BS Computer Science, Georgia Institute of Technology (dropped out) (a16z Speedrun portal, ZoomInfo)
- Forward Deployed Engineer (FDE) at Palantir (a16z Speedrun portal; LinkedIn post confirms spring internship)
- "ChatGPT for Gov" at OpenAI (a16z Speedrun portal; LinkedIn post: "wrapped up at OpenAI")
- ML Researcher at DARPA (ZoomInfo)
- Research assistant at Georgia Tech and MIT (ZoomInfo)
- JumpStart Scholar in Finance at Morgan Stanley (ZoomInfo)
- Software Engineer intern at Amazon; intern at Comcast (ZoomInfo)
- Twitter/X: @KashyapNathan_ — 390 followers (X search result)
- LinkedIn: linkedin.com/in/kash-nathan — "Meridian" (LinkedIn)
- GitHub: kashyapnathan.github.io found but minimal content; no public repos with notable star counts found

**Christopher Farrington** — Co-founder & CTO
- Computer Science student at Georgia Institute of Technology (3rd year, focusing on ML and algorithmic software) (LinkedIn search result)
- ML Engineer at Sandia National Laboratories — reinforcement learning for drones in multi-agent swarms (a16z Speedrun portal)
- SWE Intern at Deloitte (LinkedIn headline: "Incoming SWE Intern - Deloitte")
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/christopher-farrington-2332a01ba — "Incoming SWE Intern - Deloitte" (LinkedIn)
- GitHub: No public repos found

**Shanay Champaneri** — Co-founder (role not specified in a16z portal; identified as 3rd co-founder via LinkedIn and Unicorner)
- BS Computer Science & Statistics, Cornell University (2023–2026) (LinkedIn search result)
- Ex-Palantir, Ex-Robinhood (LinkedIn headline)
- Previously at Vapi (LinkedIn profile variant: "Vapi | Cornell CS | Ex. Palantir")
- Campus: Cornell Geodata, Cornell Data Journal (Project Lead), South Asian Council (Exec Board) (search result)
- Devpost: funshanay — Python, Backend, HTML5, Swift (Devpost)
- Twitter/X: No confirmed personal account found
- LinkedIn: linkedin.com/in/shanay-champaneri — "Meridian (YC F25) | Ex. Palantir, Robinhood, Cornell"
- GitHub: No public repos found

Note: The a16z Speedrun portal lists only two founders (Kashyap Nathan and Chris Farrington) and team size of 2. Shanay Champaneri is identified as a co-founder on LinkedIn and in the Unicorner article. The discrepancy is unresolved.

**Co-founder relationship:** Kashyap Nathan and Chris Farrington both attended Georgia Institute of Technology (a16z Speedrun portal; LinkedIn). Kashyap Nathan and Shanay Champaneri both held roles at Palantir (a16z Speedrun portal; LinkedIn). No additional co-founder relationship data found.

**Founder-market fit:** Kashyap Nathan's deployment experience at Palantir (enterprise data platform for government/consulting clients) and work on "ChatGPT for Gov" at OpenAI map directly to building AI systems for knowledge-heavy professional services firms. Chris Farrington's consulting background at Deloitte provides first-hand understanding of the consulting workflow pain points. Shanay Champaneri's Palantir and Robinhood experience adds enterprise and fintech product development perspective. No advisors, board members, or notable investors beyond a16z were found in public sources.

## Key Risks

**Name collision and discoverability:** At least three other venture-backed companies operate under the "Meridian" brand in adjacent AI markets: Meridian AI (meridian-ai.com, $17M funding, private equity AI — SiliconANGLE, Feb 2026), Meridian (trymeridian.com, AI visibility platform), and Meridian Industries (YC, business intelligence). This creates SEO confusion, investor misidentification, and brand dilution. The company's X handle (@tryMerid1an with a numeral "1") suggests the preferred handle was unavailable.

**YC batch departure:** The company was accepted to YC F25 but departed the batch (Unicorner, Nov 2025; absent from Extruct AI F25 listing). The reason for departure is not publicly documented. This removes YC's standard network, signaling, and follow-on funding advantages.

**Self-reported traction without independent verification:** The ~$700K contracted revenue, 3x monthly growth, and competitive bake-off wins are sourced exclusively from the founders' a16z Speedrun portal submission. No independent press coverage, customer testimonials, or third-party validation of these metrics was found.

**Direct YC-backed competitor:** Kenley (YC S24) is building an overlapping product — AI agents for consulting firms — with YC backing and network support. Both companies target the same buyer (consulting managing partners) with similar capabilities (knowledge retrieval, deliverable generation, workflow automation).

**Founding team experience level:** All three identified co-founders appear to be current or recently departed university students (Georgia Tech, Cornell) whose listed prior roles are internships or research positions rather than full-time senior roles. The a16z Speedrun portal descriptions ("FDE @ Palantir," "ML eng at Sandia," "SWE at Deloitte") could correspond to intern or early-career positions based on LinkedIn data.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | ~$23.2B global knowledge management software market in 2025, 13.8% CAGR (Fortune Business Insights via search snippet) |
| SAM | No public data found |
| Traction | ~$700K contracted, 4 months in; 3x MoM growth since Jan (a16z Speedrun portal, self-reported). $1M raised from a16z Speedrun (Unicorner, Nov 2025). Job posting on Paraform (Paraform search result). |
| Revenue Signal | ~$700K contracted revenue (a16z Speedrun portal, self-reported). Website lists $0/free tier (trymeridian.dev). Hybrid SaaS model: per-seat/month + usage-based API pricing (Unicorner, Nov 2025). |
| Founders | Kashyap Nathan (CEO): FDE @ Palantir, OpenAI, Georgia Tech dropout, DARPA ML researcher. Chris Farrington (CTO): ML eng @ Sandia, SWE intern @ Deloitte, Georgia Tech CS. Shanay Champaneri: Ex-Palantir, Ex-Robinhood, Cornell CS. |
| Competitors | Kenley ($500K raised, revenue unknown, direct consulting-AI competitor — YC company page). Glean ($610M+ raised, $200M ARR, horizontal enterprise AI search — Fortune, Dec 2025). Guru (~$70M raised, ~$33M est. revenue, card-based KM — Owler/Crunchbase). Bloomfire ($32.8M raised, $7M revenue, enterprise KM — Latka/CBInsights). Interloom ($16.5M raised, revenue unknown, tacit knowledge for AI agents — Fortune, Mar 2026). |
| Moat Signals | Proprietary behavioral data accumulation per-client claimed (a16z Speedrun portal, self-reported). Switching costs from template/knowledge integration (trymeridian.dev). |
| Risk Factors | Name collision with 3+ other "Meridian" AI companies, YC batch departure with undisclosed reason, self-reported traction without independent verification |
| Founder Reach | Kashyap Nathan: Twitter @KashyapNathan_ 390 followers (X search), LinkedIn kash-nathan. Chris Farrington: Twitter not found, LinkedIn christopher-farrington-2332a01ba. Shanay Champaneri: Twitter not confirmed, LinkedIn shanay-champaneri. |
| Distribution Signals | No Product Hunt launch found. No app store presence found. No community (Discord/Slack) found. Job posting on Paraform (Paraform search result). |
| Emails | kn@trymeridian.dev, cf@trymeridian.dev (a16z Speedrun portal) |
