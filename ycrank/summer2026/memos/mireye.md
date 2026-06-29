# Mireye

> Infrastructure for Physical World AI Agents

| Field | Value |
|-------|-------|
| Website | https://www.mireye.com/ |
| YC Page | https://www.ycombinator.com/companies/mireye |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Geographic Information System, Location-based |
| YC Partner | Jon Xu |
| Emails | No public data found |

## The Idea

- **Problem:** AI agents acting in the real world "guess" when asked specific questions about specific places because geospatial data is fragmented and unstructured (YC company page, 2026).
- **Approach:** API and Model Context Protocol (MCP) server that returns cited geospatial answers for any US coordinate, covering terrain, land cover, buildings, water, and risk data sourced from federal datasets (YC search snippet, 2026).
- **Differentiation:** Versus Google Maps Platform and Mapbox (built for human map display) and CARTO (analyst-facing BI), Mireye exposes agent-native, citation-bearing endpoints via MCP (search snippet on xMap positioning, 2026; CARTO MCP blog, 2026); [Inferred]: vs. xMap, Mireye's stated coverage is US federal datasets while xMap markets 200+ country POI/mobility data (xMap site, 2026).
- **Business Model:** No public data found on pricing; [Inferred]: usage-based API/MCP consumption pricing given the "queryable" data-API framing on the company site.
- **TAM/SAM:** Geospatial Intelligence (GeoAI) market projected $37.13B (2025) to $62.88B (2030) at 11.1% CAGR (MarketsandMarkets, 2025); broader geospatial analytics projected $103.75B (2025) to $122.96B (2026) at 18.5% CAGR (Research and Markets, 2026).
- **GTM / Distribution:** [Inferred]: developer/agent-builder self-serve via API and MCP server listings (Claude, Cursor, MCP-compatible agents), the same channel used by xMap (xMap site, 2026); no public GTM announcements from Mireye found.

## Defensibility

- **Moat today:** No defensibility signals found in public sources; product describes "federal-grade geospatial ground truth" sourced from public US datasets (search snippet, 2026).
- **Future moat:** [Inferred]: proprietary indexing/ETL pipeline that normalizes heterogeneous federal, terrain, land-cover, and risk layers into a single MCP-queryable schema could become a switching-cost moat as agent integrations accumulate; unproven because no integration counts or repeat-usage metrics are public.
- **Market structure:** [Inferred]: Google Maps and Mapbox have launched MCP/agent grounding endpoints (Google Maps Platform blog, 2026; Mapbox MCP Server) so no structural barrier prevents incumbents from extending into the same agent surface; barrier would have to come from data breadth/citation quality rather than channel.
- **Commoditization risk:** Underlying US federal datasets (USGS, NOAA, Census) are public, so any team with geospatial ETL skills can build comparable coverage; CARTO, Mapbox, Google, xMap, and Geoapify already ship MCP or agent-grounding products (CARTO blog 2026; Mapbox; Google Maps Platform blog 2026; xMap site 2026).

## Market & Traction

- **Traction signals:**
  - No public revenue, user, or customer data found as of June 2026.
  - No Product Hunt launch found (WebSearch, June 2026).
  - Founder Twitter handles: @ansh_chokski and @shshwt_ (YC page, 2026); follower counts not retrievable.
  - Company is not listed as hiring (YC page, 2026).
- **Competitors:**
  - CARTO ($92M total raised, ~$28.9M ARR 2024, $50M last disclosed valuation): analyst/BI geospatial platform with newly launched CARTO MCP Server (Latka 2024; Crunchbase; CARTO blog 2026).
  - xMap (~$4M+ raised pre-seed, $600K revenue reported): agent-ready POI/mobility data with MCP bindings across 200+ countries (citybiz 2024; xMap site 2026).
  - Mapbox (revenue unknown publicly; >$220M raised per Crunchbase historicals): Mapbox MCP Server and DevKit for embedding location into LLM workflows (Mapbox blog, 2026).
  - Google Maps Platform (incumbent, revenue undisclosed segment): MCP-based grounding for any LLM with fresh Maps data (Google Maps Platform blog, 2026).
  - Geoapify (private, funding not disclosed): location intelligence APIs for place search and proximity analysis (Geoapify site).
- **Why now:** [Inferred]: Model Context Protocol was released by Anthropic in late 2024 and adopted by major mapping vendors in 2025-2026 (CARTO blog 2026; Google Maps Platform blog 2026), creating a standardized agent-tool surface that a focused geospatial-MCP startup can target.

## Founders & Team

- **Ansh Chokshi (CEO and Founder):**
  - Background: University of Toronto, CS/Math/Economics; previously led AI/ML engineering at Seismic; co-founded Poker Pit at 21, reported scaling 0 to $250K ARR in 4 months before acquisition (WebSearch snippet from YC, 2026).
  - Twitter/X: @ansh_chokski (YC page, 2026); follower count not retrievable.
  - LinkedIn: "athlete, founder, engineer" — linkedin.com/in/ansh-chokshi (LinkedIn search result, 2026).
  - GitHub: No public repos found.
- **Shashwat Kapoor (Co-founder):**
  - Background: Former Data Engineer at Tools for Humanity and Lyra Health; six years building data and analytics infrastructure (WebSearch snippet from YC, 2026).
  - Twitter/X: @shshwt_ (YC page, 2026); follower count not retrievable.
  - LinkedIn: No specific profile confirmed among multiple "Shashwat Kapoor" results (LinkedIn search, 2026).
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on co-founder history (prior shared employer or school not surfaced in WebSearch).
- **Founder-market fit:** [Inferred]: Kapoor's six years of data-infrastructure work at Tools for Humanity and Lyra Health plus Chokshi's ML engineering at Seismic align with building a normalized geospatial data API (search snippet via YC, 2026); no advisors or investors beyond YC disclosed.

## Key Risks

- **Incumbent MCP rollout:** Google Maps Platform, Mapbox, and CARTO have already shipped MCP servers/grounding for AI agents in 2025-2026 (Google Maps Platform blog 2026; CARTO blog 2026), directly substituting Mireye's stated wedge; no mitigation found in public sources.
- **Commoditization of underlying data:** The product is described as surfacing US federal datasets (terrain, land cover, water, risk) that are public domain (search snippet via YC, 2026), so differentiation depends on indexing/citation quality that any competitor with comparable ETL can replicate.
- **US-only coverage vs. global competitors:** Mireye's described coverage is "any US coordinate" (search snippet, 2026) while xMap markets 200+ country POI/mobility coverage (xMap site, 2026), limiting addressable global agent use cases until international datasets are added.
- **No published traction:** No revenue, customer, integration count, or developer-signup data is public as of June 2026 (WebSearch), preventing validation of demand for an agent-specific geospatial API beyond incumbent offerings.
- **Name disambiguation:** Multiple unrelated "Shashwat Kapoor" LinkedIn profiles appear in search results (LinkedIn, 2026), and "Mireye" returns generic Product Hunt results; specific co-founder LinkedIn and any direct press coverage could not be confirmed.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | GeoAI market $37.13B (2025) → $62.88B (2030), 11.1% CAGR (MarketsandMarkets, 2025); broader geospatial analytics $122.96B in 2026, 18.5% CAGR (Research and Markets, 2026) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Ansh Chokshi (CEO): ex-AI/ML lead Seismic, co-founder Poker Pit (reported $250K ARR pre-acquisition), U Toronto CS/Math/Econ. Shashwat Kapoor (Co-founder): ex-Data Engineer at Tools for Humanity and Lyra Health, 6 yrs data infra. |
| Competitors | CARTO ($92M raised, $28.9M ARR 2024, analyst-facing BI w/ MCP server); xMap ($4M+ raised, $600K revenue, global POI/mobility MCP); Mapbox (>$220M raised historically, revenue unknown, MCP Server + DevKit); Google Maps Platform (incumbent, segment revenue unknown, MCP grounding); Geoapify (funding undisclosed, location APIs). |
| Moat Signals | No public data found |
| Risk Factors | Incumbent MCP rollout by Google/Mapbox/CARTO, commoditization of public federal datasets, US-only coverage vs. global competitors |
| Founder Reach | Ansh Chokshi: Twitter @ansh_chokski (count not retrievable), LinkedIn linkedin.com/in/ansh-chokshi, GitHub not found. Shashwat Kapoor: Twitter @shshwt_ (count not retrievable), LinkedIn not confirmed, GitHub not found. |
| Distribution Signals | No public data found |
| Emails | No public data found |

Sources:
- [Mireye YC company page](https://www.ycombinator.com/companies/mireye)
- [Mireye website](https://www.mireye.com/)
- [Ansh Chokshi LinkedIn](https://www.linkedin.com/in/ansh-chokshi)
- [CARTO MCP Server blog](https://carto.com/blog/carto-mcp-server-turn-your-ai-agents-into-geospatial-experts/)
- [Google Maps Platform AI / MCP](https://mapsplatform.google.com/ai/)
- [xMap site](https://www.xmap.ai/)
- [xMap pre-seed funding (citybiz)](https://www.citybiz.co/article/600352/real-estate-intelligence-startup-xmap-with-eye-on-u-s-market-closes-pre-seed-round/)
- [CARTO revenue (Latka)](https://getlatka.com/companies/carto)
- [Geospatial Intelligence market (MarketsandMarkets)](https://www.marketsandmarkets.com/PressReleases/geospatial-intelligence.asp)
- [Geospatial analytics market (Research and Markets)](https://www.researchandmarkets.com/reports/5767473/geospatial-analytics-market-report)
