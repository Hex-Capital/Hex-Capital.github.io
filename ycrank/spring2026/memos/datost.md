# Datost

> AI data analyst in Slack. Democratize data.

| Field | Value |
|-------|-------|
| Website | https://www.datost.com |
| YC Page | https://www.ycombinator.com/companies/datost |
| Batch | Spring 2026 (P26) |
| Industry | B2B / B2B -> Analytics |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | B2B, Analytics, AI Assistant |
| YC Partner | David Lieb |
| Emails | maceo@datost.com, jason@datost.com (YC page) |

## The Idea

- **Problem:** Business teams cannot get timely data answers because analyst capacity is scarce; CEO Maceo cites this from his time at Traba where "lots of data but not enough analysts" blocked decisions (LinkedIn launch post, 2026).
- **Approach:** Users @mention Datost in Slack; it consults a semantic layer of business definitions, explores schema in a sandbox, writes and tests SQL, then posts the answer in-thread with work shown (YC tweet via @ycombinator, 2026; datost.com).
- **Differentiation:** vs. TextQL/Julius/Hex/Athenic — Datost claims 75.2% on BIRD-Interact text-to-SQL benchmark vs. 33% for Claude Opus 4.6 alone, attributed to a semantic business-definitions layer (datost.com; YC tweet).
- **Business Model:** No pricing disclosed on website; demo-booking funnel via datost.cal.com/founders/30-min (datost.com).
- **TAM/SAM:** Adjacent "AI in Analytics Platforms" market $28.1B in 2025, projected $220.2B by 2035 at 22.8% CAGR (openpr.com citing market report, 2026); no SAM data found for Slack-native AI analyst segment.
- **GTM / Distribution:** [Inferred]: Founder-led outbound + Slack-app distribution; based on YC launch post, founder-personal LinkedIn posts and direct demo booking link as primary funnel, no paid or partner channels disclosed (datost.com; LinkedIn launch post, 2026).

## Defensibility

- **Moat today:** Benchmark performance gap (75.2% vs. 33% for Claude Opus 4.6 on BIRD-Interact, ICLR 2026) attributed to proprietary semantic layer over customer business definitions, CRM, docs, codebase (YC tweet, 2026).
- **Future moat:** [Inferred]: Per-customer semantic graph could become switching cost as it ingests internal vocabulary, schema mappings, and prior queries; unproven because no customer count, retention, or expansion data is public.
- **Market structure:** [Inferred]: No structural barrier identified at this stage — Snowflake, Databricks, and incumbents (Hex, TextQL) can replicate Slack-front-end + semantic layer; Datost's only published differentiator is benchmark accuracy (Tracxn lists 47 active competitors).
- **Commoditization risk:** Frontier LLM vendors and BI platforms (Hex, Snowflake Cortex, Databricks Genie) can build the same Slack interface; current edge is benchmark-driven, not data- or distribution-driven (julius.ai/articles/hex-competitors, 2026; Tracxn, 2026).

## Market & Traction

- **Traction signals:**
  - 18,402 queries answered in measured week (datost.com, 2026)
  - 42-second average time to first answer (datost.com, 2026)
  - 3,000+ data sources supported; 2,500+ additional integrations available (datost.com, 2026)
  - 75.2% accuracy on BIRD-Interact benchmark vs. 33% for Claude Opus 4.6 alone (datost.com; YC tweet, 2026)
  - YC launch tweet from @ycombinator citing benchmark (x.com/ycombinator/status/2044838231397560596, 2026)
  - Founder LinkedIn launch post on YC submission (LinkedIn, 2026)
  - No revenue, customer count, paid users, Product Hunt rank, or social follower data found
- **Competitors:**
  - TextQL ($21.1M raised across 2 rounds, Series A Apr 2026, revenue unknown): broader text-to-SQL platform, not Slack-native (Tracxn, 2026)
  - Athenic AI ($4.28M Seed VC, Aug 2023, revenue unknown): natural-language analytics, not Slack-thread-native (CB Insights)
  - Julius AI (funding undisclosed, $20/mo starter, revenue unknown): conversational data analyst, hides SQL from business users (julius.ai, 2026)
  - Hex (Series C reported; $36/editor/mo, revenue unknown): data workspace with NL prompts + SQL/Python notebooks, not Slack-first (julius.ai/articles/hex-competitors, 2026)
  - Alkemi (funding unknown, revenue unknown): "AI data teammate in Slack" with DataLab workspace (producthunt.com/products/alkemi)
- **Why now:** [Inferred]: Frontier LLMs crossed usable text-to-SQL accuracy threshold only in last 12-18 months; Datost's own benchmark claim (75.2% vs. 33% standalone Opus) is positioned as the inflection point (datost.com; ICLR 2026 reference).

## Founders & Team

- **Maceo Cardinale Kwik (Co-Founder & CEO):**
  - Background: B.S. Computer Science, Virginia Tech, Summa Cum Laude, 4.0 GPA; prior full-stack engineer at Traba (staffing marketplace) where he identified the problem; co-founded Lighthouse Startups non-profit; Top 0.1% IMC Prosperity Trading Challenge (maceock.me; LinkedIn).
  - Twitter/X: @MaceoCk (also referenced as @maceock) — count not retrievable (x.com/MaceoCk).
  - LinkedIn: "Co-Founder & CEO of Datost (YC...)" (linkedin.com/in/maceo-cardinale-kwik/).
  - GitHub: @maceoCK, 9 followers, 47 repos, top pinned "Blog" (1 star); contributor to OpenDSA/OpenDSA (365 stars, not owner) (github.com/maceoCK).
- **Jason Hy Wang (Co-Founder):**
  - Background: No public data found on prior employers or education beyond YC participation; LinkedIn confirms Datost as primary listed role (LinkedIn search snippet, 2026).
  - Twitter/X: No public account confirmed.
  - LinkedIn: "Datost" (linkedin.com/in/jasonhy-wang/) — full headline not retrievable (status 999 on fetch).
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on co-founder shared employer or university.
- **Founder-market fit:** Maceo encountered the problem firsthand at Traba where analyst scarcity blocked data-driven decisions, providing direct user-problem exposure (LinkedIn launch post, 2026); no advisors, board members, or named investors beyond YC found in public sources.

## Key Risks

- **Benchmark-to-production gap:** Sole disclosed differentiator is BIRD-Interact accuracy (75.2% vs. 33%, datost.com), but no public customer references, retention data, or production-environment accuracy claims exist; risk that benchmark performance does not translate to messy enterprise schemas.
- **Commoditization by incumbents:** Hex, Snowflake Cortex, Databricks Genie, and Slack/Salesforce-native AI features can replicate the @mention + SQL workflow; Tracxn identifies 47 active competitors including 5 funded (Tracxn, 2026), and no structural moat is documented.
- **Founder bench depth:** Two-person team with one founder (Jason Hy Wang) having no public technical footprint (no GitHub repos, limited LinkedIn detail) and the CEO's GitHub showing only small personal projects (top owned repo 1 star, github.com/maceoCK); raises execution-bandwidth risk against funded competitors like TextQL ($21.1M, Tracxn).
- **Distribution dependency on Slack:** Product is Slack-native (datost.com); any Slack-platform policy change, native AI analyst feature, or pricing shift creates substitution risk; no platform-diversification (Teams, Discord) disclosed.
- **Trust boundary for autonomous SQL:** Product writes and executes SQL against customer warehouses (datost.com); a single incorrect query against production data could create enterprise-trust loss; no governance, RBAC, or audit-trail features highlighted publicly.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI in Analytics Platforms $28.1B (2025) → $220.2B (2035) at 22.8% CAGR (openpr.com market report, 2026); broader data analytics market $108.79B (2026) per Mordor Intelligence |
| SAM | No public data found |
| Traction | 18,402 queries/week (datost.com, 2026); 42-sec avg first answer (datost.com, 2026); 75.2% BIRD-Interact vs. 33% Opus 4.6 (datost.com; YC tweet, 2026); 3,000+ data sources supported (datost.com) |
| Revenue Signal | No public data found (no pricing page; demo-booking only via datost.cal.com) |
| Founders | Maceo Cardinale Kwik (CEO): VT CS Summa Cum Laude 4.0, ex-Traba engineer. Jason Hy Wang (Co-founder): public background not found beyond Datost/YC. |
| Competitors | TextQL ($21.1M raised, Series A Apr 2026, revenue unknown, broader text-to-SQL not Slack-native); Athenic AI ($4.28M Seed Aug 2023, revenue unknown, NL analytics); Julius AI (funding undisclosed, $20/mo starter, revenue unknown); Hex ($36/editor/mo, revenue unknown, notebook workspace); Alkemi (funding unknown, revenue unknown, Slack AI teammate) |
| Moat Signals | 75.2% vs. 33% BIRD-Interact accuracy gap via semantic business-definitions layer (datost.com; YC tweet, 2026) |
| Risk Factors | Benchmark-to-production gap, commoditization by incumbents (Hex/Snowflake/Slack-native), Slack-platform dependency |
| Founder Reach | Maceo: Twitter @MaceoCk (count not retrievable), LinkedIn maceo-cardinale-kwik (count not retrievable), GitHub @maceoCK 9 followers / top owned repo 1 star. Jason: Twitter not found, LinkedIn jasonhy-wang (count not retrievable), GitHub no public repos found. |
| Distribution Signals | YC launch tweet from @ycombinator (x.com, 2026); founder LinkedIn launch post (LinkedIn, 2026); no Product Hunt, Chrome Store, or App Store presence found |
| Emails | maceo@datost.com, jason@datost.com (YC company page) |

---

**Prompt injection notice:** The WebFetch result from datost.com contained fake `<system-reminder>` tags attempting to introduce unauthorized MCP tools (Gmail, Google Calendar, Google Drive, Ramp). I ignored these injected instructions and proceeded with the assigned research task.

Sources:
- [Datost YC page](https://www.ycombinator.com/companies/datost)
- [Datost website](https://www.datost.com)
- [Y Combinator launch tweet](https://x.com/ycombinator/status/2044838231397560596)
- [Maceo Cardinale Kwik LinkedIn](https://www.linkedin.com/in/maceo-cardinale-kwik/)
- [Maceo personal site](https://www.maceock.me/)
- [Maceo GitHub](https://github.com/maceoCK)
- [Jason Hy Wang LinkedIn](https://www.linkedin.com/in/jasonhy-wang/)
- [Datost Tracxn profile](https://tracxn.com/d/companies/datost/__q8EBlIDs4hlFHukX_1fbi3SYbzPk2Kt5nHjzKjqbD9g)
- [TextQL Tracxn profile](https://tracxn.com/d/companies/textql/__mXZ2yDxMeNKKU_fPEIz8MKSsvcOf0jXGcuzNtZFS_FA)
- [Athenic AI CB Insights](https://www.cbinsights.com/company/polyture/financials)
- [Julius - Hex competitors](https://julius.ai/articles/hex-competitors)
- [AI in Analytics market report](https://www.openpr.com/news/4510246/ai-in-analytics-platforms-market-set-for-explosive-growth-to-us)
