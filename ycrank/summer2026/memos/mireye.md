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
| YC Partner | Jon Xu ([Y Combinator](https://www.ycombinator.com/companies/mireye), Jul 2026) |
| Emails | No public data found |

## The Idea

- **Problem:** AI agents answering location-specific questions must navigate fragmented geospatial datasets and may guess when the required physical-world data is unavailable in structured form ([Y Combinator](https://www.ycombinator.com/companies/mireye), Jul 2026).
- **Approach:** Mireye converts a US coordinate or street address into structured geospatial fields through four HTTP endpoints and an MCP server, attaching source, dataset-vintage, retrieval-time, and confidence metadata to returned values ([Mireye](https://www.mireye.com/), Jul 2026).
- **Differentiation:** [Inferred]: Unlike Mapbox’s mapping and navigation platform, CARTO’s spatial-analysis environment, and Foursquare’s place-data products, Mireye packages federal terrain, infrastructure, environmental, and hazard datasets as provenance-bearing responses intended for AI-agent tool calls.
- **Business Model:** The service is free during early access while Mireye tunes coverage and rate limits with design partners, with paid pricing deferred until early access ends ([Mireye](https://www.mireye.com/), Jul 2026).
- **TAM/SAM:** The global geospatial-analytics market was $102.7 billion in 2025 and is forecast to reach $234.0 billion by 2033 at a 10.4% CAGR, while no public estimate isolates Mireye’s agent-facing US data API segment ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/geospatial-analytics-market), Jun 2026).
- **GTM / Distribution:** Mireye exposes a public unauthenticated field catalog, bearer-token REST endpoints, and a hosted MCP endpoint for adoption through agent clients and developer integrations ([Mireye](https://www.mireye.com/), Jul 2026).

## Defensibility

- **Moat today:** Mireye has assembled 175 named fields across seven layers and 14 presets from agencies including USGS, NOAA, FEMA, USDA, EPA, EIA, and NREL, with field-level provenance metadata ([Mireye](https://www.mireye.com/), Jul 2026).
- **Future moat:** [Inferred]: Repeated normalization of heterogeneous datasets and feedback from design-partner queries could produce coverage, reliability, and schema advantages, but no proprietary dataset scale or performance evidence is public.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Mapbox already operates location APIs with 28 billion daily map detections, while developers can access federal datasets directly or combine them through GIS tooling, making overlapping aggregation and agent interfaces technically buildable ([Mapbox](https://www.mapbox.com/blog/mapbox-announces-series-e-funding), Sep 2023; [Mireye](https://www.mireye.com/), Jul 2026).

## Market & Traction

- **Traction signals:**
  - Free early-access product with design partners used to tune coverage and rate limits ([Mireye](https://www.mireye.com/), Jul 2026).
  - Public catalog covering 175 fields, seven data layers, and 14 presets ([Mireye](https://www.mireye.com/), Jul 2026).
  - Four REST endpoints plus a hosted MCP server are publicly documented ([Mireye API documentation](https://api.mireye.com/v1/docs), Jul 2026).
  - Zero active jobs listed ([Y Combinator](https://www.ycombinator.com/companies/mireye), Jul 2026).
- **Competitors (minimum 3, up to 5):**
  - Mapbox ($640M raised, revenue unknown): provides global maps, navigation, SDKs, and AI location services rather than Mireye’s cited responses from US federal datasets ([Counterpoint Research](https://www.counterpointresearch.com/insight/softbanks-investment-to-drive-mapboxs-ai-based-map-location-services), Oct 2023).
  - CARTO (at least $61M raised, revenue unknown): provides cloud-native spatial analysis and visualization rather than an MCP-oriented physical-world answer layer ([CARTO funding announcement](https://www.prnewswire.com/news-releases/carto-raises-61m-to-accelerate-cloud-native-spatial-analytics-in-the-enterprise-301444065.html), Dec 2021).
  - Foursquare ($386.15M raised, revenue unknown): supplies place and movement data, whereas Mireye covers terrain, hazards, utilities, parcels, and other physical attributes with citations ([CB Insights](https://www.cbinsights.com/company/foursquare/financials), Jul 2026; [Mireye](https://www.mireye.com/), Jul 2026).
- **Why now:** [Inferred]: MCP adoption gives AI applications a standardized way to call external tools, allowing geospatial datasets to be packaged as agent-accessible services instead of application-specific integrations.

## Founders & Team

- **Ansh Chokshi (CEO and Founder):**
  - Background: University of Toronto computer science graduate with economics and mathematics study; previously led AI/ML engineering at Seismic and co-founded Poker Pit, which reached $250,000 ARR in four months before acquisition ([Y Combinator](https://www.ycombinator.com/companies/mireye), Jul 2026).
  - Twitter/X: No public account found.
  - LinkedIn: “Founder and CEO at Mireye (YC S26),” with approximately 2,000 followers and 500+ connections ([LinkedIn](https://www.linkedin.com/in/ansh-chokshi), Jul 2026).
  - GitHub: @anshchokshi, with nine public repositories and no repository stars displayed ([GitHub](https://github.com/anshchokshi), Jul 2026).
- **Shashwat Kapoor (Co-founder):**
  - Background: University of Maryland computer-science alumnus whose profile describes experience in scalable data platforms and distributed systems ([LinkedIn](https://www.linkedin.com/in/shashkap), Jul 2026).
  - Twitter/X: No public account found.
  - LinkedIn: “Data Engineer specializing in scalable data platforms, distributed systems, and…” with approximately 1,000 followers and 500+ connections ([LinkedIn](https://www.linkedin.com/in/shashkap), Jul 2026).
  - GitHub: @RaXephon, with 32 repositories; pinned PlannrBot has one star ([GitHub](https://github.com/RaXephon), Jul 2026).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Ansh Chokshi has documented AI/ML engineering and startup-operating experience, while Shashwat Kapoor’s documented data-platform and distributed-systems background relates to Mireye’s data aggregation and API infrastructure ([Y Combinator](https://www.ycombinator.com/companies/mireye), Jul 2026; [LinkedIn](https://www.linkedin.com/in/shashkap), Jul 2026).

## Key Risks

- **Source-data dependency:** Mireye’s launch coverage relies primarily on US federal agencies whose datasets refresh on agency-specific schedules, so freshness and availability vary by layer; responses include dataset vintage and retrieval timestamps as mitigation ([Mireye](https://www.mireye.com/), Jul 2026).
- **Geographic limitation:** Coverage is currently limited to the United States and territories within published coordinate bounds, restricting applications requiring global location data ([Mireye](https://www.mireye.com/), Jul 2026).
- **Platform substitution:** Mapbox supplies global location APIs and AI-enhanced mapping backed by 28 billion daily detections, while CARTO offers cloud-native spatial analysis, creating adjacent platforms capable of adding agent-facing interfaces ([Mapbox](https://www.mapbox.com/blog/mapbox-announces-series-e-funding), Sep 2023; [CARTO funding announcement](https://www.prnewswire.com/news-releases/carto-raises-61m-to-accelerate-cloud-native-spatial-analytics-in-the-enterprise-301444065.html), Dec 2021).
- **Reliability burden:** Mireye serves fields drawn from datasets with differing vintages and update cadences, creating a risk that a cited response is accurate to its source but outdated for a time-sensitive decision ([Mireye](https://www.mireye.com/), Jul 2026).
- **Name ambiguity:** Search results for “Mireye” include an unrelated Canadian medical-imaging manufacturer, increasing entity-confusion risk in company discovery and monitoring ([MiREYE Imaging LinkedIn](https://www.linkedin.com/company/mireye-imaging), Jul 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $102.7B global geospatial-analytics market in 2025, forecast to $234.0B by 2033 at 10.4% CAGR (Grand View Research, Jun 2026) |
| SAM | No public data found |
| Traction | Free early access with design partners; 175 fields across seven layers and 14 presets (Mireye, Jul 2026) |
| Revenue Signal | Free during early access; paid pricing not yet announced (Mireye, Jul 2026) |
| Founders | Ansh Chokshi (CEO): University of Toronto CS, former Seismic AI/ML lead, Poker Pit co-founder and prior exit (Y Combinator, Jul 2026); Shashwat Kapoor (Co-founder): University of Maryland CS, data-platform and distributed-systems background (LinkedIn, Jul 2026) |
| Competitors | Mapbox ($640M raised, revenue unknown, global mapping/navigation platform) (Counterpoint Research, Oct 2023); CARTO (at least $61M raised, revenue unknown, cloud spatial analytics) (CARTO funding announcement, Dec 2021); Foursquare ($386.15M raised, revenue unknown, place and movement data) (CB Insights, Jul 2026) |
| Moat Signals | 175 normalized fields across seven layers and 14 presets with source URL, dataset vintage, retrieval timestamp, and confidence metadata (Mireye, Jul 2026) |
| Risk Factors | US-only coverage (Mireye, Jul 2026), federal-source freshness dependency (Mireye, Jul 2026), adjacent-platform substitution (Mapbox, Sep 2023; CARTO, Dec 2021) |
| Founder Reach | Ansh Chokshi: LinkedIn ~2K, GitHub 0 stars (LinkedIn; GitHub, Jul 2026); Shashwat Kapoor: LinkedIn ~1K, GitHub top repo 1 star (LinkedIn; GitHub, Jul 2026) |
| Distribution Signals | Public unauthenticated field catalog, bearer-token REST API, and hosted MCP server (Mireye, Jul 2026) |
| Emails | No public data found |
