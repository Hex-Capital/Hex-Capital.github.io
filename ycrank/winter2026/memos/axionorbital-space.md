# AxionOrbital Space

> Foundation models for 24/7 Earth Observation

| Field | Value |
|-------|-------|
| Website | https://axionorbital.space/ |
| YC Page | https://www.ycombinator.com/companies/axionorbital-space |
| Batch | Winter 2026 |
| Industry | Industrials / Industrials -> Aviation and Space |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Deep Learning, Satellites, Weather |
| YC Partner | Tyler Bosmeny |
| Emails | No public data found |

## The Idea

**Problem:** Legacy optical Earth observation satellites are rendered useless approximately 70% of the time due to cloud cover and nighttime conditions (YC company page). Synthetic Aperture Radar (SAR) operates in all weather and lighting conditions but produces data that is unintelligible to humans and incompatible with standard computer vision pipelines. Defense, commodities trading, disaster response, agriculture, and urban planning customers require continuous, 24/7 situational awareness but currently face significant gaps in temporal coverage. Existing alternatives require either costly SAR-specialist interpretation or acceptance of intermittent visibility windows.

**Approach:** AxionOrbital Space builds foundation models — branded as ORION — that translate raw SAR radar backscatter into analysis-ready, photorealistic optical imagery in real-time. The proprietary architecture uses deterministic one-step diffusion to perform this cross-modal translation. ORION achieves an FID score of 30.24 (a 19.23% improvement over current state-of-the-art on the MSAW benchmark), an SSIM score of 0.60, and real-time latency of 0.06 seconds per image (YC company page). The company fuses data from multiple sensors — radar, optical, elevation, and vegetation — into high-quality optical imagery (LinkedIn company page via search snippet).

**Differentiation:** Unlike SAR satellite constellation operators (ICEYE, Capella Space) that provide raw SAR data requiring specialized interpretation, AxionOrbital produces optical-equivalent imagery directly from SAR inputs, making the output consumable by existing optical vision pipelines. Unlike traditional geospatial analytics platforms (Descartes Labs/EarthDaily Analytics, Google Earth Engine), AxionOrbital's core product is the cross-modal translation itself, not downstream analytics. The one-step diffusion approach claims sub-100ms latency versus multi-second generation times for standard diffusion models (YC company page).

**Business Model:** No public pricing page was found on the company website. [Inferred]: Most likely monetization path is a SaaS/API consumption model charging per image or per area processed, given the real-time inference nature of the product and B2B/B2G target customers (defense, hedge funds, agriculture). An earlier Invstt listing described a "marketplace" business model (Invstt profile via search snippet), though this may reflect a prior product concept.

**TAM/SAM:** The global SAR imagery market was valued at $1.59 billion in 2025 and is projected to reach $3.20 billion by 2034 (Fortune Business Insights, 2025 via search snippet). The broader earth observation market was $7.04 billion in 2025, projected to reach $14.55 billion by 2034 at 8.31% CAGR (Fortune Business Insights, 2025 via search snippet). The geospatial imagery analytics market is projected to grow from $12.12 billion (2025) to $18.55 billion by 2030 at 8.9% CAGR (MarketsandMarkets, 2025 via search snippet). [Inferred]: AxionOrbital's SAM is the subset of SAR and EO analytics customers who need persistent optical-quality imagery — likely a fraction of the $1.59B SAR imagery market plus adjacent demand from optical-only customers seeking all-weather coverage.

**GTM / Distribution:** Target markets listed include defense, commodities trading/hedge funds/HFTs, disaster response, agriculture/crop monitoring, climate monitoring, and urban planning (YC company page, LinkedIn via search snippet). The company also released an open-source MCP tool ("axion-planetary-mcp") enabling geospatial AI agents via natural language, which has 185 stars on GitHub (GitHub, fetched March 2026). [Inferred]: Most likely distribution path is direct enterprise sales to defense and intelligence agencies, followed by financial services (hedge funds seeking alternative data), leveraging the open-source MCP tool as a developer awareness and inbound channel.

## Defensibility

**Proprietary model architecture:** ORION's deterministic one-step diffusion approach achieves claimed state-of-the-art FID scores on the MSAW benchmark (YC company page). The specifics of the architecture are not publicly documented, representing potential IP.

**Data pipeline and training data:** SAR-to-optical paired training datasets are scarce and difficult to assemble, requiring temporal alignment between SAR and optical captures. Any proprietary datasets or data partnerships would constitute a data moat. No public information on proprietary data assets was found.

**Market structure:** SAR constellation operators (ICEYE, Capella Space) are focused on collecting and selling raw SAR data rather than cross-modal translation. Building a competitive translation model would represent a new product line orthogonal to their core business, though not structurally incompatible. Large defense primes (Maxar/Vantor) operate optical satellite constellations and may view SAR-to-optical translation as potentially cannibalizing demand for their optical collection services — creating a business model conflict that could delay their entry. However, no structural barrier was identified that prevents well-resourced AI labs or geospatial startups from replicating the approach given sufficient paired training data and diffusion model expertise.

**Commoditization risk:** SAR-to-optical image translation is an active academic research area with a growing body of published methods (a systematic literature review covering 2021–2025 was published in November 2025 on TechRxiv). Multiple research groups have published GAN and diffusion-based approaches for this task. The core technique is reproducible by teams with deep learning and remote sensing expertise. Defensibility would need to come from proprietary data, production-grade latency, integration partnerships, or regulatory/security clearances rather than the algorithmic approach alone.

## Market & Traction

**Traction signals:**
- Funding: $500K seed round, January 2026, from Character (VC) and Pioneer Fund (Crunchbase/PitchBook via search snippet)
- ORION model benchmarks: FID score 30.24, SSIM 0.60, 0.06s latency (YC company page)
- GitHub: axion-planetary-mcp repo — 185 stars, 19 forks (GitHub, fetched March 2026)
- Twitter/X: @axionorbital — follower count not retrievable
- Twitter/X (CEO): @dhenenjay — 129 followers (X search snippet, March 2026)
- Twitter/X (CTO): @atharva_peshkar — 416 followers (X search snippet, March 2026)
- LinkedIn: linkedin.com/company/axion-orbital — follower count not retrievable
- Product Hunt: No listing found
- No public revenue, customer, or user count data found
- No press coverage in named publications found
- No Discord/Slack community found

**Note on prior product:** An Invstt listing (updated July 2025, approved November 2025) describes a "no-code IDE enabling geospatial developers to quickly download imagery, detect changes, and generate new insights" with competitors listed as ArcGIS, Google Earth Engine, and QGIS (Invstt via search snippet). This appears to describe an earlier product concept. The current YC-backed product focuses specifically on SAR-to-optical foundation models. Metrics from the Invstt listing should not be conflated with the current product.

**Competitive landscape:**

| Competitor | Key Differentiator vs. AxionOrbital | Funding | Revenue |
|---|---|---|---|
| **ICEYE** (Finland) | Operates own SAR satellite constellation; provides raw SAR data and analytics, not cross-modal translation to optical imagery | €600M total, $2.8B valuation (Bloomberg, Dec 2025 via search snippet) | ~$250M projected 2025, profitable (Bloomberg via search snippet) |
| **Capella Space** (USA) | On-demand SAR data collection; acquired by IonQ (May 2025); provides SAR data, not optical translation | $239M total (Tracxn via search snippet) | $12M (2023, CBInsights via search snippet) |
| **Maxar/Vantor** (USA) | World's largest commercial optical satellite imagery provider; operates WorldView Legion constellation; rebranded to Vantor Oct 2025 | Private (acquired by Advent International, May 2023) | ~$1.6B TTM as of mid-2025 (CompaniesMarketCap via search snippet) |
| **Albedo** (USA) | Very Low Earth Orbit (VLEO) optical satellites for ultra-high-resolution imagery; first launch March 2025 | $228M total (PitchBook via search snippet) | Revenue unknown |
| **Descartes Labs / EarthDaily Analytics** | AI-powered geospatial imagery analytics platform; acquired by EarthDaily Analytics Oct 2024 | $58.4M total pre-acquisition (Crunchbase via search snippet) | Revenue unknown |

**Why now:** [Inferred]: Several converging factors: (1) Rapid maturation of diffusion models in 2023–2025 enabling high-fidelity cross-modal image generation at production-viable speeds — one-step diffusion in particular became feasible only recently. (2) Proliferation of SAR satellite constellations (ICEYE reached 40+ satellites, Capella expanded its constellation) dramatically increasing SAR data availability. (3) Increased defense and intelligence spending globally, particularly in Europe following geopolitical shifts, driving demand for persistent surveillance capabilities. (4) Growing adoption of satellite-derived alternative data by financial services firms for commodities and supply chain intelligence.

## Founders & Team

**Dhenenjay Yadav** — Co-founder & CEO
- MBA, Indian Institute of Management Ahmedabad (IIM-A) (LinkedIn via search snippet)
- Ex-ML Engineer at ISRO (Indian Space Research Organisation) (multiple search results)
- Prior experience at QuantumBlack, AI by McKinsey; Character Capital; IIMA Ventures; igniteXL Ventures (LinkedIn via search snippet)
- Founded Inertialogic AI, an AI-based SaaS and Agritech startup (DreamwellTimes via search snippet)
- Twitter/X: [@dhenenjay](https://x.com/dhenenjay) — 129 followers (X search snippet)
- LinkedIn: [linkedin.com/in/dhenenjay-yadav-378854244](https://www.linkedin.com/in/dhenenjay-yadav-378854244/) — 500+ connections
- GitHub: [github.com/Dhenenjay](https://github.com/Dhenenjay) — 26 public repos; pinned repo axion-planetary-mcp has 185 stars (GitHub, fetched March 2026)

**Atharva Peshkar** — Co-founder & CTO
- PhD in Computer Science, University of Colorado Boulder (ResearchGate, LinkedIn via search snippet)
- Ex-Visual Computing Group at Harvard University (LinkedIn via search snippet)
- Ex-MCCHE at McGill University (LinkedIn via search snippet)
- 2x Microsoft Imagine Cup National Champion & World Finalist (LinkedIn via search snippet)
- Hindustan Times City 30-under-30 (Technology) (LinkedIn via search snippet)
- Awarded "Best in Physics" at AAPM 2023 for computer vision work in radiation oncology (CU Anschutz Medical School news, April 2023)
- Previously founded Ridefy Invention (IoT vehicle health monitoring) (search results via snippet)
- Twitter/X: [@atharva_peshkar](https://x.com/atharva_peshkar) — 416 followers (X search snippet)
- LinkedIn: [linkedin.com/in/atharva-peshkar-43a104b7](https://www.linkedin.com/in/atharva-peshkar-43a104b7/) — 500+ connections
- GitHub: [github.com/atharva-peshkar](https://github.com/atharva-peshkar) — 28 public repos; top repo Covid-19-Patient-Health-Analytics has 18 stars (GitHub, fetched March 2026)

**Co-founder relationship:** No shared prior employer or university overlap is visible from the data gathered. Dhenenjay's background is IIM Ahmedabad/ISRO/McKinsey-affiliated while Atharva's is CU Boulder/Harvard/McGill. No public data on how the co-founders met.

**Founder-market fit:** Dhenenjay brings direct satellite and radar domain experience from ISRO (India's space agency) combined with ML engineering skills and venture/investment exposure from roles at Character Capital and igniteXL Ventures. Atharva brings deep computer vision and generative model research expertise from a PhD at CU Boulder and stints at Harvard's Visual Computing Group, directly relevant to the SAR-to-optical translation problem. The combination of space/radar domain knowledge (CEO) and state-of-the-art vision model research (CTO) aligns with the company's technical challenge. No advisors, board members, or notable angel investors were identified beyond the institutional investors (Character VC, Pioneer Fund).

## Key Risks

**Academic replication risk:** SAR-to-optical image translation is a well-studied research area with a growing body of published methods, including diffusion-based approaches. A November 2025 systematic literature review catalogs numerous competing techniques (TechRxiv, 2025 via search snippet). Well-funded SAR companies (ICEYE, Capella) or large cloud/AI platforms could develop or acquire equivalent capabilities using published methods. Mitigation: the company's claimed SOTA benchmark results and production-grade latency (0.06s) may provide a quality/speed lead, but this needs to be sustained against rapid academic progress.

**Customer concentration and sales cycle risk:** Primary target markets (defense, intelligence, hedge funds) involve long sales cycles, security clearance requirements, and procurement complexity. As a 2-person pre-seed startup without disclosed defense contracts or LOIs, the path to first material revenue in these segments is uncertain. No mitigations found.

**Product pivot history:** The company appeared on the Invstt platform (approved November 2025) with a materially different product description — a "no-code IDE" for geospatial developers — and was listed as "Concept/Idea Stage" with incorporation in India (Invstt via search snippet). The current YC-backed product (SAR-to-optical foundation models) represents a significant repositioning. Rapid iteration is expected at pre-seed, but the pivot may indicate the current product-market fit hypothesis is still early and evolving.

**Ground truth data dependency:** Training SAR-to-optical models requires temporally aligned SAR-optical image pairs, which are scarce and require careful curation. The company has not disclosed proprietary data sources or partnerships with SAR constellation operators. Model quality is directly constrained by training data quality and coverage. No mitigations found.

**Name confusion with Axiom Space:** Axiom Space is a well-known space infrastructure company (orbital habitats, data centers). Search results frequently return Axiom Space content for "Axion Orbital" queries, creating potential brand confusion in the market and in investor/customer discovery.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | SAR imagery market: $1.59B (2025), projected $3.20B by 2034 (Fortune Business Insights via search snippet); Earth observation market: $7.04B (2025), projected $14.55B by 2034, 8.31% CAGR (Fortune Business Insights via search snippet) |
| SAM | No public data found. [Inferred]: Subset of SAR and EO analytics customers needing persistent optical-quality imagery |
| Traction | ORION FID score 30.24 (19.23% over SOTA), 0.06s latency (YC page); GitHub axion-planetary-mcp: 185 stars (GitHub, March 2026); $500K seed Jan 2026 (Crunchbase via search snippet) |
| Revenue Signal | No public data found |
| Founders | Dhenenjay Yadav (CEO): IIM-A MBA, ex-ISRO ML Engineer, ex-QuantumBlack/McKinsey. Atharva Peshkar (CTO): CS PhD CU Boulder, ex-Harvard VCG, 2x Microsoft Imagine Cup Champion, AAPM Best in Physics |
| Competitors | ICEYE (€600M raised, ~$250M rev 2025, SAR constellation operator); Capella Space ($239M raised, $12M rev 2023, acquired by IonQ); Maxar/Vantor (private, ~$1.6B rev, optical satellite imagery); Albedo ($228M raised, revenue unknown, VLEO optical satellites); Descartes Labs ($58.4M raised, acquired by EarthDaily Analytics, AI geospatial analytics) |
| Moat Signals | Claimed SOTA benchmark performance (FID 30.24); proprietary one-step diffusion architecture; sub-100ms inference latency; domain-specific training data pipeline |
| Risk Factors | Academic replication of SAR-to-optical methods, defense/HF sales cycle length, product pivot history, ground truth data scarcity, brand confusion with Axiom Space |
| Founder Reach | Dhenenjay Yadav: Twitter 129 followers, LinkedIn 500+, GitHub 185 stars (top repo). Atharva Peshkar: Twitter 416 followers, LinkedIn 500+, GitHub 18 stars (top repo) |
| Distribution Signals | GitHub axion-planetary-mcp: 185 stars (March 2026). No Product Hunt listing. No app store presence. No press coverage in named publications found |
| Emails | No public data found |
