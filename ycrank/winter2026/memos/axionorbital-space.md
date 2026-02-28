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

## The Idea

**Problem:** Legacy optical Earth observation satellites are rendered useless approximately 70% of the time due to cloud cover and nighttime conditions. Synthetic Aperture Radar (SAR) can penetrate clouds and operate in darkness, but raw SAR imagery produces backscatter data that is unintelligible to humans and incompatible with standard computer vision pipelines (YC company page). This creates a gap: defense agencies, commodity traders, disaster responders, and agricultural analysts need persistent 24/7 situational awareness but cannot get it from either optical or SAR alone. Existing workflows require specialized SAR analysts or accept large temporal gaps in coverage.

**Approach:** AxionOrbital builds ORION, a foundation model that translates raw SAR radar backscatter into analysis-ready, photorealistic optical-style imagery in real time. The architecture uses deterministic one-step diffusion to perform this translation, fusing data from multiple sensors—radar, optical, elevation, and vegetation—into high-quality optical imagery (YC company page). Reported performance metrics include an FID score of 30.24 (a 19.23% improvement over the current state-of-the-art), an SSIM score of 0.60, and real-time inference latency of 0.06 seconds (YC company page). Deployment is offered via API or on-premises/edge for enterprise clients (YC company page).

**Differentiation:** Unlike SAR satellite operators (ICEYE, Capella Space, Umbra) that collect and sell raw SAR data, AxionOrbital is a software/AI layer that transforms that SAR data into optical-equivalent imagery usable by existing vision pipelines. Unlike optical satellite companies (Planet Labs, Maxar) that are constrained by weather and lighting, AxionOrbital's approach works in any condition. The one-step deterministic diffusion architecture differentiates from multi-step generative approaches that may introduce artifacts or non-deterministic outputs. The company claims its outputs are "fully anchored in the radar signal," implying physics-grounded rather than purely hallucinated imagery (company website via search snippet).

**Business Model:** No public pricing page was found. [Inferred]: The most likely monetization path is a SaaS API with consumption-based pricing (per-image or per-area processed), supplemented by on-premises/edge deployment licenses for defense and enterprise customers, given the stated deployment options and target verticals (defense, commodities trading, disaster response).

**TAM/SAM:** The global SAR imagery market was valued at $0.52 billion in 2025 and is projected to grow to $1.72 billion by 2026 (Fortune Business Insights via search snippet). The broader satellite data services market was valued at $14.15 billion in 2025, projected to reach $55.24 billion by 2034 (Precedence Research via search snippet). The commercial satellite imaging market was valued at $7.49 billion in 2026, projected to reach $13.62 billion by 2031 (Fortune Business Insights via search snippet). AxionOrbital's SAM is a subset of the SAR imagery analytics and satellite data fusion segments.

**GTM / Distribution:** Target markets listed on the YC page include defense/intelligence, commodity traders, satellite data providers, agriculture, and climate monitoring (YC company page). [Inferred]: Most likely initial distribution path is direct sales to defense and intelligence customers (given the natural urgency of persistent surveillance requirements and willingness to pay), followed by partnerships with existing SAR data providers (ICEYE, Capella, Umbra) who could bundle AxionOrbital's processing layer with their data products.

## Defensibility

The core defensibility signal is technical complexity: building a deterministic one-step diffusion model that reliably converts SAR backscatter to photorealistic optical imagery requires deep expertise in both SAR physics and generative AI. The company reports specific benchmark improvements over state-of-the-art (FID 30.24, 19.23% improvement) (YC company page), suggesting a proprietary architecture advantage. Data defensibility could develop over time as the model is trained and fine-tuned on increasing volumes of paired SAR-optical datasets.

**Market structure:** SAR satellite operators (ICEYE, Capella, Umbra) are focused on hardware and data collection, not on AI-driven data translation. Optical satellite operators (Planet Labs, Maxar) have a business model conflict: their revenue depends on selling optical imagery, so building a tool that makes SAR data a substitute for optical imagery would cannibalize their core product. General-purpose AI companies lack the domain-specific SAR physics expertise and paired training data. This creates a structural gap where AxionOrbital sits as a software intermediary between SAR data providers and end users.

**Commoditization risk:** Academic research on SAR-to-optical translation exists and is advancing. Large remote sensing AI efforts (e.g., from ESA, NASA, or well-funded startups) could develop competing models. SAR data providers could vertically integrate by building their own translation layers. The barrier is in the combination of domain expertise, model architecture, and access to high-quality paired training data rather than in any single component.

## Market & Traction

**Traction signals:**
- GitHub repo (axion-planetary-mcp): 184 stars, 19 forks (GitHub, as of research date). Note: this repo relates to the company's earlier geospatial MCP tool, not directly to the ORION SAR-to-optical model.
- Twitter/X: @axionorbital — handle confirmed, follower count not retrievable (X.com)
- LinkedIn: linkedin.com/company/axion-orbital — company page exists, follower count not retrievable (LinkedIn)
- Accelerator: Completed Character Capital Labs G4 accelerator (LinkedIn post by Eli Blee-Goldman, Sep 2025)
- Award: Won "best technical demo" at an OpenAI GPT-5 API hackathon (LinkedIn post by Eli Blee-Goldman, Sep 2025)
- Investors: Character (VC) and Pioneer Fund have invested (search snippet via Tracxn/PitchBook listing)
- YC Partner: Tyler Bosmeny listed as primary YC partner (YC company page)
- Product Hunt: No listing found
- India entity: AxionOrbital Space Private Limited registered in Rajasthan, India (Falcon eBiz company listing)

**Product pivot note:** As of September 2025, the company was described as "a no-code IDE that allows anyone to understand planetary scale geospatial data" with features including agent-based assistance, satellite data access (Sentinel-2, Landsat, NAIP), and tools for vegetation indices, water mapping, and land classification (LinkedIn post by Eli Blee-Goldman, Sep 2025). The current positioning as a SAR-to-optical foundation model (ORION) represents an evolution or pivot from this earlier product. The GitHub repo (axion-planetary-mcp) with 184 stars relates to the earlier product.

**Competitive landscape:**

1. **ICEYE** — Finnish SAR satellite operator with 25+ satellites. Total funding: $686M; Series E of $175M at $2.8B valuation (Bloomberg, Dec 2025). Revenue: €103M in 2024, expected to double to €200M+ in 2025 (Bloomberg via search snippet). Key differentiator vs. AxionOrbital: ICEYE is a vertically integrated SAR satellite operator selling raw SAR data and analytics; AxionOrbital is a software layer that translates SAR data into optical-equivalent imagery. ICEYE could be a data supplier to or competitor of AxionOrbital.

2. **Capella Space** — U.S.-based SAR satellite company. Total funding: $234M (Crunchbase). Revenue: $12M in 2023 (CB Insights via search snippet). Acquired by IonQ in May 2025 (PitchBook). Key differentiator vs. AxionOrbital: Capella focused on high-resolution SAR data collection; AxionOrbital focuses on AI-driven translation of SAR data to optical imagery.

3. **Planet Labs** — Public company (NYSE: PL) operating the largest commercial Earth observation satellite constellation. TTM revenue: ~$282M as of Oct 2025 (Seeking Alpha via search snippet). Cash: $677.3M (BusinessWire, Dec 2025). Key differentiator vs. AxionOrbital: Planet operates optical satellites and has begun integrating AI analytics (NVIDIA Jetson on Pelican satellites). Planet's data is weather-dependent; AxionOrbital's approach aims to provide weather-independent imagery from SAR inputs.

4. **BlackSky** — Public company (NYSE: BKSY) providing real-time geospatial intelligence. TTM revenue: ~$102M as of Sep 2025 (BlackSky Q1 2025 earnings). Won $185M convertible note offering in Jun 2025 (search snippet). Key differentiator vs. AxionOrbital: BlackSky combines its own satellite constellation with AI analytics platform (Spectra); AxionOrbital is sensor-agnostic and focuses specifically on SAR-to-optical translation.

5. **Umbra** — U.S.-based SAR satellite startup. Total funding: ~$168M (PitchBook). Revenue: $15.6M in 2023 (Latka via search snippet). Key differentiator vs. AxionOrbital: Umbra builds and operates high-resolution SAR satellites with a patented folding antenna design; AxionOrbital is software-only.

**Why now:** [Inferred]: Several converging factors have opened this opportunity: (1) The rapid expansion of commercial SAR satellite constellations (ICEYE, Capella, Umbra) has created abundant SAR data that needs to be made accessible to non-specialist users. (2) Advances in diffusion model architectures (2022–2025) have made high-fidelity image-to-image translation feasible at real-time latency. (3) Growing defense and intelligence demand for persistent surveillance, accelerated by geopolitical conflicts in Ukraine and elsewhere, has increased willingness to pay for 24/7 Earth observation capability. (4) ESA's free Sentinel-1 SAR data program provides training data availability.

## Founders & Team

**Dhenenjay Yadav** — Co-founder & CEO
- MBA, Indian Institute of Management Ahmedabad (IIMA) (LinkedIn via search snippet)
- Previously: ML Engineer at ISRO (Indian Space Research Organisation) (RocketReach via search snippet)
- Previously: RL Researcher at IIMA (RocketReach via search snippet)
- Previously: Roles at Character Capital, IIMA Ventures, igniteXL Ventures (RocketReach via search snippet)
- Founded InertiaLogic AI, an AI-based SaaS and Agritech startup registered in Rajasthan (Tofler via search snippet)
- Completed Character Capital Labs G4 accelerator (LinkedIn post by Eli Blee-Goldman, Sep 2025)
- Ex-esports athlete (Crunchbase via search snippet)
- Twitter/X: @dhenenjay — 129 followers (X.com via search snippet)
- LinkedIn: linkedin.com/in/dhenenjay-yadav-378854244
- GitHub: github.com/Dhenenjay — axion-planetary-mcp repo with 184 stars (GitHub)

**Atharva Peshkar** — Co-founder & CTO
- PhD in Computer Science, University of Colorado Boulder (LinkedIn via search snippet)
- Previously: Researcher at Harvard Visual Computing Group (LinkedIn via search snippet)
- Previously: Researcher at MCCHE, McGill University (LinkedIn via search snippet)
- 2x Microsoft Imagine Cup National Champion (Top 1 in India) and World Finalist (2021, 2022) (Microsoft News, 2021 and 2022)
- Hindustan Times City 30-under-30 in Technology (LinkedIn via search snippet)
- Awarded "Best in Physics" at AAPM conference (CU Anschutz Radiation Oncology newsroom)
- 2021 Imagine Cup project: Detectd — deepfake detection with 96% accuracy (Microsoft News, 2021)
- 2022 Imagine Cup project: Synthesize.AI — synthetic data generation for medical research (Microsoft News, 2022)
- Google Scholar profile: scholar.google.com/citations?user=-mwSqD0AAAAJ
- Twitter/X: No confirmed personal account found
- LinkedIn: linkedin.com/in/atharva-peshkar-43a104b7 — 500+ connections (LinkedIn via search snippet)
- GitHub: github.com/Atharva-Peshkar — 28 public repos, 25 followers; top repo: Covid-19-Patient-Health-Analytics (18 stars) (GitHub)

**Co-founder relationship:** Both founders have backgrounds in India-based technical institutions (Yadav at ISRO/IIM Ahmedabad; Peshkar at G.H. Raisoni College of Engineering, Nagpur for undergrad, per Imagine Cup listing). The LinkedIn post from Sep 2025 describes Dhenenjay as a solo founder at that time, suggesting Atharva joined as co-founder/CTO between approximately Sep 2025 and the YC W26 batch start.

**Founder-market fit:** Dhenenjay Yadav brings direct space industry experience from ISRO (India's space agency), where he worked as an ML engineer, combined with an MBA from IIM Ahmedabad and venture capital exposure. Atharva Peshkar brings deep computer vision and generative AI expertise from a PhD at CU Boulder and research stints at Harvard's Visual Computing Group and McGill, with demonstrated ability to ship competitive ML systems (2x Microsoft Imagine Cup World Finalist). The combination of space domain expertise (Yadav) and state-of-the-art computer vision research (Peshkar) is directly relevant to building SAR-to-optical translation models.

## Key Risks

**SAR data dependency:** AxionOrbital does not operate its own satellites and depends on third-party SAR data providers (ICEYE, Capella/IonQ, Umbra, ESA Sentinel-1) for input data. Any changes in pricing, availability, or access terms from these providers directly impacts AxionOrbital's ability to deliver its product. Capella's acquisition by IonQ (May 2025) illustrates the instability of the supply landscape.

**Vertical integration by SAR operators:** ICEYE, Umbra, and other SAR operators could build or acquire similar AI translation capabilities as a value-added feature on top of their own data. ICEYE has already reached profitability and has resources to invest in analytics layers (Bloomberg, Dec 2025). This would disintermediate AxionOrbital from the data-to-insight chain.

**Model fidelity and trust in defense applications:** The target defense/intelligence market requires extremely high confidence in image fidelity. Any artifacts, hallucinations, or inaccuracies introduced by the generative model could have consequences in operational settings. Establishing trust for AI-generated imagery in defense procurement cycles is a long process. The SSIM score of 0.60 reported on the YC page, while an improvement, still indicates meaningful structural differences between generated and real optical imagery.

**Recent product pivot:** The company transitioned from a no-code geospatial IDE (as of Sep 2025) to a SAR-to-optical foundation model (ORION) for the YC W26 batch. Prior traction signals (184 GitHub stars on the MCP tool, hackathon win) relate to the earlier product, not the current one. The current ORION product's market validation is unproven.

**Brand confusion with Axiom Space:** Axiom Space (axiomspace.com) is a well-known, well-funded space company ($505M+ raised) building commercial space stations. The similar name "Axion Orbital" could create market confusion, particularly in defense and government procurement channels.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $0.52B SAR imagery market in 2025 (Fortune Business Insights via search snippet); $14.15B satellite data services market in 2025 (Precedence Research via search snippet) |
| SAM | No public data found |
| Traction | 184 GitHub stars on axion-planetary-mcp repo (GitHub, relates to prior product); "best technical demo" at OpenAI GPT-5 API hackathon (LinkedIn post, Sep 2025, relates to prior product); Character Capital Labs G4 accelerator completed (LinkedIn post, Sep 2025) |
| Revenue Signal | No public data found |
| Founders | Dhenenjay Yadav (CEO): ex-ISRO ML Engineer, MBA IIM Ahmedabad, founded InertiaLogic AI. Atharva Peshkar (CTO): PhD CS CU Boulder, ex-Harvard VCG, 2x Microsoft Imagine Cup Champion & World Finalist |
| Competitors | ICEYE ($686M raised, €103M revenue 2024, SAR satellite operator vs. AxionOrbital's software-only AI layer); Capella Space ($234M raised, $12M revenue 2023, acquired by IonQ May 2025, SAR data collection vs. SAR-to-optical translation); Planet Labs (public, ~$282M TTM revenue, optical satellites vs. SAR-derived imagery); BlackSky (public, ~$102M TTM revenue, integrated constellation+analytics vs. sensor-agnostic AI translation); Umbra (~$168M raised, $15.6M revenue 2023, SAR hardware vs. software) |
| Moat Signals | Proprietary one-step deterministic diffusion architecture; reported 19.23% FID improvement over SOTA (YC page); 0.06s real-time latency (YC page); paired SAR-optical training data advantage could compound over time |
| Risk Factors | SAR data provider dependency, vertical integration risk from SAR operators, product pivot (prior traction tied to earlier product), brand confusion with Axiom Space |
| Founder Reach | Dhenenjay Yadav: Twitter @dhenenjay 129 followers, LinkedIn 500+, GitHub 184 stars (axion-planetary-mcp). Atharva Peshkar: Twitter not confirmed, LinkedIn 500+, GitHub 25 followers / 18 stars (top repo) |
| Distribution Signals | No Product Hunt listing found; no app store presence; investors include Character (VC) and Pioneer Fund (search snippet) |
