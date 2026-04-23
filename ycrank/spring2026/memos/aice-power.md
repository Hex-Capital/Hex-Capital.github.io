# AICE Power

> Smart energy monitoring for buildings.

| Field | Value |
|-------|-------|
| Website | https://aicepower.com |
| YC Page | https://www.ycombinator.com/companies/aice-power |
| Batch | Spring 2026 |
| Industry | Industrials / Industrials -> Energy |
| Team Size | 2 |
| Location | No public data found |
| Tags | Batteryless IoT Sensors, Hardware, Climate |
| YC Partner | Nicolas Dessaigne |
| Emails | contact@aicepower.com |

## The Idea

**Problem:** Smaller commercial buildings—supermarkets, retail stores, fast food chains—lack visibility into energy consumption (YC page). Traditional Building Management Systems (BMS) are expensive, require specialized integrators, and only cover major loads (LinkedIn post, AICE Power). These sites have no monitoring at all, and inefficiencies go undetected until they appear on the bill (aicepower.com).

**Approach:** AICE Power manufactures clip-on current sensors that install on electrical panels without cutting power (LinkedIn post, AICE Power). A 4G gateway comes online the same day and collects signals (LinkedIn post). The platform uses AI to disaggregate consumption by usage type and zone, applies weather-adjusted baselines to normalize across sites, and automatically detects anomalies with real-time alerts (aicepower.com). The company claims installation takes approximately 30 minutes per site and full deployment within one day (YC page).

**Differentiation:**
- vs. traditional BMS (Honeywell, Siemens Desigo CC): AICE claims 5% the cost and same-day deployment vs. weeks of installation and rewiring (YC page).
- vs. Verdigris Technologies ($41.8M raised; Crunchbase): Both use clip-on CT sensors and AI disaggregation, but Verdigris targets large commercial/industrial buildings; AICE targets multi-site chains of smaller commercial venues with a multi-site comparison dashboard (aicepower.com).
- vs. Infogrid ($148M raised; TechCrunch, Apr 2023): Infogrid covers broader building intelligence (occupancy, air quality, cleaning) while AICE focuses specifically on energy waste detection at lower cost (TechCrunch).

**Business Model:** No public pricing page found. The company claims deployment at "5% the cost of traditional Building Management Systems" (YC page) and advertises "6-month ROI from electricity savings" (YC page). [Inferred]: Most likely monetization is hardware sales (sensors + gateway) plus a recurring SaaS subscription for the monitoring platform, given the multi-site dashboard and real-time alerting features.

**TAM/SAM:** The Building Energy Management System (BEMS) market was valued at approximately $7.6B in 2025 and is projected to reach $26.1B by 2035 at a 13.2% CAGR (Market Research Future via search snippet). Another estimate places it at $10.3B in 2024 growing to $20.8B by 2030 (Strategic Market Research via search snippet). The commercial & institutional segment represents approximately 41% of the BEMS market (MarkNtel Advisors via search snippet). No public SAM estimate specific to AICE Power's sub-segment (small-format multi-site commercial) was found.

**GTM / Distribution:** The company displays client logos including E.Leclerc (French supermarket chain), Accor (hospitality group), NASA, Station F, and EPFL (aicepower.com). The French phone number (+33) and AICE Sàrl registration in Lausanne in 2025 (Moneyhouse) suggest initial go-to-market in France and Switzerland. [Inferred]: Distribution likely follows a direct B2B sales motion targeting multi-site operators (retail chains, hospitality groups) where a single procurement decision scales across dozens or hundreds of locations.

## Defensibility

- **Data moat (potential):** Each deployed site generates continuous electrical load signatures. Over time, disaggregation models trained on diverse building types and equipment could improve accuracy in ways new entrants cannot replicate without comparable installed base. This is unrealized at current scale (10+ sites; LinkedIn post).
- **Hardware + software integration:** Manufacturing proprietary sensors and firmware creates a higher barrier than pure-software competitors, though clip-on CT sensors are a known technology (aicepower.com).
- **Switching costs:** Once sensors are installed and baselines established, switching requires physical hardware removal and re-baselining. [Inferred]: Moderate switching costs for multi-site operators who integrate alerts into operational workflows.

**Market structure:** Traditional BMS vendors (Honeywell, Siemens, Johnson Controls) sell high-cost systems through specialized integrator channels. [Inferred]: Serving small-format commercial sites at 5% of BMS cost would cannibalize their integrator relationships and compress margins on their existing product lines, creating business model conflict that slows incumbent response.

**Commoditization risk:** Clip-on CT sensors are commodity hardware. Software disaggregation via NILM (non-intrusive load monitoring) is an active research area with open-source implementations. Verdigris Technologies has operated in this space since 2011 with $41.8M+ in funding (Crunchbase). [Inferred]: The technical approach is replicable; defensibility depends on execution speed in multi-site deployment and data accumulation rather than proprietary technology.

## Market & Traction

**Traction signals:**
- Live on 10+ sites tracking 5+ MW (LinkedIn post, AICE Power)
- Client logos displayed: E.Leclerc, Accor, NASA, Station F, EPFL, Pioneers (aicepower.com)
- Claims "15-20% typical savings without investment" (aicepower.com)
- AICE Sàrl registered in Lausanne, Switzerland in 2025 (Moneyhouse)
- LinkedIn company page: AICE Power (YC P26) — follower count not retrievable (LinkedIn)
- GitHub organization: 1 public repo, 1 star, 1 follower (GitHub)
- Twitter/X: No dedicated company account found
- Product Hunt: No listing found
- Discord/Slack community: No public data found
- App store/download counts: Not applicable (hardware + web platform)
- Job postings: 0 active postings (YC page)

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. AICE |
|---|---|---|---|
| Verdigris Technologies | $41.8M+ (Crunchbase) | Revenue unknown | Similar CT sensor + AI approach but targets large C&I buildings, not multi-site small commercial |
| Facilio | $45.9M (inc42, Feb 2022) | ~$6.4M (FY2024; Getlatka) | Software-only platform aggregating existing BMS data; no proprietary hardware; 25K+ buildings |
| Infogrid | $148M total (TechCrunch, Apr 2023) | Revenue undisclosed | Broader scope (occupancy, air quality, cleaning, energy); higher price point; UK-focused |
| Sensgreen | $520K (Crunchbase) | Revenue unknown | AI building analytics; similar stage; based in Abu Dhabi |
| Enertiv | $18.4M (Dealroom) | Revenue unknown | Load disaggregation for commercial real estate; NYC-focused |

**Why now:**
- EU Energy Performance of Buildings Directive (EPBD) recast adopted in 2024 requires energy performance monitoring in commercial buildings (European Commission, 2024 via search snippet).
- [Inferred]: Declining costs of IoT connectivity (4G/LTE-M modules) and edge computing make sub-$1K per-site monitoring economically viable for small commercial venues that were previously uneconomical to instrument.
- [Inferred]: Rising electricity prices in Europe (post-2022 energy crisis) increase the financial incentive for commercial operators to identify and eliminate waste, shortening payback periods.

## Founders & Team

**Grégoire Chomette** — Co-founder & CEO
- MS Aeronautics & Astronautics, Massachusetts Institute of Technology (ResearchGate)
- Research at EPFL on biogas supply chain optimization (2018 publication in Computer Aided Chemical Engineering; Google Scholar)
- Asteroid Risk Assessment Engineer at NASA Ames Research Center (Google Scholar; NASA Technical Reports Server)
- 7 peer-reviewed publications, 78 total citations, h-index 4 (Google Scholar)
- Lead author: "Machine learning for the prediction of local asteroid damages," *Acta Astronautica* (2024), 9 citations (Google Scholar)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/gregoirechomette — "Co-founder @ AICE Power (YC P26)" (LinkedIn)
- GitHub: No public repos found

**Rémi Bouteiller** — Co-founder & CTO
- ENS Paris-Saclay, EECS (2019-2021); Institut Polytechnique de Paris, MS Embedded Systems (2021-2022); ESSEC Business School, MS Management (2022-2023) (personal portfolio site)
- Founding Engineer at Amira Health: led electronics and firmware for a wearable device, designed multi-chip PCBs, built BLE firmware with 2-week battery life, managed manufacturing in Shenzhen (personal portfolio site)
- Prior: electronics engineer at Pulse Audition/EssilorLuxottica (AI hearing aid), Balyo (autonomous robots) (personal portfolio site)
- French Eurobot Champion 2020 (personal portfolio site)
- Winner, HEC-IP Paris Big Data Hackathon 2023; 1st place Data Science for Climate Hackathon 2023 (personal portfolio site)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/remi-bouteiller (LinkedIn)
- GitHub: github.com/rbouteiller — 10 repos; airplay-esp32 (223 stars), spotifydl (49 stars) (GitHub)

**Co-founder relationship:** No shared employer or university found in Phase 3 research. Chomette's background is MIT/EPFL/NASA; Bouteiller's is ENS Paris-Saclay/IP Paris/ESSEC/Amira Health. Both are French. [Inferred]: Connection likely through French engineering school networks or the Paris/Station F startup ecosystem.

**Founder-market fit:** Chomette brings energy domain research (biogas supply chain optimization at EPFL, published 2018) and computational modeling expertise from MIT/NASA. Bouteiller brings end-to-end hardware product experience: PCB design, embedded firmware, BLE, manufacturing operations in Shenzhen, and full-stack software—directly applicable to building a sensor-to-cloud energy monitoring system. The combination covers the hardware engineering, signal processing, and energy domain knowledge required.

## Key Risks

**Verdigris overlap:** Verdigris Technologies has operated since 2011 with $41.8M+ in funding using a nearly identical technical approach (clip-on CT sensors + AI disaggregation) targeting commercial buildings (Crunchbase; TechCrunch, Mar 2016). AICE must demonstrate differentiation beyond targeting smaller venues. Mitigation: AICE's multi-site comparison features and lower price point target a segment Verdigris has not prioritized.

**Hardware scaling complexity:** Manufacturing and deploying physical sensors across hundreds of sites requires supply chain management, quality control, and field support capabilities that are challenging for a 2-person team (aicepower.com; YC page). Bouteiller's Shenzhen manufacturing experience partially mitigates this (personal portfolio site).

**Customer concentration risk:** With 10+ sites live and client logos including E.Leclerc and Accor (aicepower.com), a significant portion of current deployment may depend on one or two enterprise relationships. Loss of a key early customer could materially impact traction metrics.

**Regulatory fragmentation:** Energy monitoring requirements and building codes vary across EU member states and between EU and US markets (European Commission). Multi-market expansion requires navigating different compliance regimes, potentially slowing geographic scaling.

**Name confusion risk:** "AICE" returns results for multiple unrelated organizations (AICE union, AICE interpreters, AICE Indonesia ice cream brand) across web and social media searches, which could complicate brand building and SEO.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.6B in 2025, projected $26.1B by 2035 at 13.2% CAGR (Market Research Future via search snippet) |
| SAM | No public data found |
| Traction | 10+ sites live tracking 5+ MW (LinkedIn post, AICE Power); client logos include E.Leclerc, Accor, NASA, Station F, EPFL (aicepower.com) |
| Revenue Signal | No public data found |
| Founders | Grégoire Chomette (CEO): MIT MS Aero/Astro, NASA researcher, EPFL energy research. Rémi Bouteiller (CTO): ENS Paris-Saclay + IP Paris embedded systems, ESSEC, founding engineer Amira Health. |
| Competitors | Verdigris ($41.8M+ raised, revenue unknown, similar CT sensor + AI approach for larger buildings); Facilio ($45.9M raised, ~$6.4M revenue FY2024, software-only BMS aggregation); Infogrid ($148M raised, revenue unknown, broader smart building scope); Sensgreen ($520K raised, revenue unknown, AI building analytics); Enertiv ($18.4M raised, revenue unknown, load disaggregation) |
| Moat Signals | No public data found |
| Risk Factors | Verdigris technical overlap, hardware scaling with 2-person team, customer concentration |
| Founder Reach | Chomette: Twitter not found, LinkedIn 500+ connections (LinkedIn), GitHub not found. Bouteiller: Twitter not found, LinkedIn (LinkedIn), GitHub 272+ stars across repos (GitHub). |
| Distribution Signals | No public data found |
| Emails | contact@aicepower.com (aicepower.com) |
