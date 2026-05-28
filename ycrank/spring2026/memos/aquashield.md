# AquaShield

> AI water leak detection for buildings

| Field | Value |
|-------|-------|
| Website | https://aquashieldai.com |
| YC Page | https://www.ycombinator.com/companies/aquashield |
| Batch | Spring 2026 (YC P26) |
| Industry | Real Estate and Construction / Real Estate and Construction |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Real Estate, B2B |
| YC Partner | Nicolas Dessaigne (YC company page) |
| Emails | founders@aquashieldai.com (company website) |

## The Idea

- **Problem:** Water damage causes losses "up to hundreds of millions per year" in large real estate portfolios (YC company page), with insurer estimates of $2.5B+ in annual U.S. commercial property water damage claims and $16B+ in non-weather commercial losses (Risk & Insurance; envigilance.com, 2026).
- **Approach:** Clamp-on, non-invasive flow sensors on existing pipes feed transformer-based ML, Graph Neural Networks, and a digital twin built from plumbing schematics to detect and localize leaks to specific pipe segments (EPFL news, 2026; company website).
- **Differentiation:** Flo by Moen and Phyn use centralized flow-based detection optimized for single-family residential, while WINT targets commercial but relies on flow anomalies without segment-level pinpointing — AquaShield claims sparse non-invasive sensing plus GNN-based localization to a pipe segment (EPFL news, 2026; nestalpha.com competitor review, 2026).
- **Business Model:** No pricing disclosed on website; CTA is "Book a demo" 30-minute consultation (company website). [Inferred]: B2B SaaS + hardware subscription sold to real estate portfolio owners and facilities groups, given pilot customers are MIT Facilities and a German real-estate company (EPFL news).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; adjacent reference points: U.S. commercial non-weather water losses >$16B annually (envigilance.com, 2026) and AIA-cited $10B+ in annual property losses from water leaks (McGuire Manufacturing).
- **GTM / Distribution:** Direct enterprise pilots with anchor institutions (MIT Facilities live pilot, German real-estate operator sensor deployment) used to validate before portfolio rollout (EPFL news, 2026).

## Defensibility

- **Moat today:** Proprietary ML stack combining transformers, GNNs, and plumbing-schematic digital twins, validated on live MIT flow data (EPFL news, 2026); no patents, datasets, or contracts publicly disclosed.
- **Future moat:** [Inferred]: Building-specific digital twins and labeled leak event datasets accumulated across portfolios could create switching costs and detection accuracy advantages as deployment scales; unproven now because only two named pilots exist (MIT, one German operator).
- **Market structure:** [Inferred]: Incumbent flow-meter vendors (Moen, Uponor/Phyn) face channel conflict — their distribution runs through plumbers selling shut-off valves on the main line, not AI-software contracts with portfolio asset managers, making a software-led, segment-localizing product awkward to upsell through the existing installer channel.
- **Commoditization risk:** WINT ($50M+ raised, Crunchbase/Tracxn, 2023) and Phyn (acquired for ~$25M, LA Business Journal) already operate AI flow-anomaly products; barrier to a competitor adding GNN-based localization on top of clamp-on sensors is primarily data and engineering time, not IP.

## Market & Traction

- **Traction signals:**
  - Live pilot deployment at MIT Facilities using real building flow data (EPFL news, 2026)
  - Sensor deployment with a large real-estate company in Germany (EPFL news, 2026)
  - Backed by EPFL AI Launchpad AI Project Grant and CEAT Lab support (EPFL news, 2026; startupticker.ch)
  - Listed on Venture Kick program (venturekick.ch)
  - Company LinkedIn page exists (linkedin.com/company/aquashield-inc-); follower count not retrievable
  - Founder LinkedIn confirms "YC P26" batch (Marguerite Benoist LinkedIn headline, via search snippet)
  - No public revenue, paying customer count, Twitter, Product Hunt, or press coverage found
- **Competitors:**
  - WINT – Water Intelligence ($50M+ total raised including $35M Series C Aug 2023 co-led by Inven Capital and Insight Partners; ~$19M revenue per Growjo; commercial AI flow analytics without pipe-segment localization) (Crunchbase; Tracxn)
  - Phyn ($37M raised pre-acquisition; acquired ~$25M by investor group led by Jonathan Scott; residential/light-commercial flow detection on main line) (LA Business Journal; PRNewswire, 2019)
  - Flo by Moen (revenue unknown; subsidiary of Fortune Brands' Moen; residential flow-based shutoff with daily MicroLeak tests) (justneedspaint.com; citywaterconservation.com)
  - Kairos (funding unknown per Tracxn 2026 profile; leak detection adjacent) (Tracxn)
  - FIDO (revenue unknown; named alongside WINT/Phyn as competitor) (Tracxn search snippet)
- **Why now:** [Inferred]: Transformer and GNN architectures have only recently become tractable for sparse time-series signal localization, enabling pipe-segment-level inference from a few flow meters rather than dense sensor grids — the EPFL AI Launchpad funding the project in 2025 reflects this threshold (EPFL news, 2026).

## Founders & Team

- **Paul Beckers (CEO / Co-founder):**
  - Background: EPFL Bachelor's in Micro-Engineering and Master's in Robotics with focus on bio-inspired learning and locomotion; Master thesis built a vision-based obstacle detection pipeline for a robotic wheelchair (biped.ai team page, via search snippet); EPFL/MIT affiliations cited (EPFL news, 2026).
  - Twitter/X: No public account found
  - LinkedIn: No verified profile for the AquaShield founder identified among 30+ "Paul Beckers" results (LinkedIn search)
  - GitHub: No public repos found
- **Marguerite Benoist (CTO / Co-founder):**
  - Background: Master Thesis Student at Harvard University (LinkedIn, via search snippet); EPFL affiliation confirmed via EPFL people directory (people.epfl.ch/marguerite.benoist); academic stints cited at MIT, EPFL, Harvard, RWTH Aachen, and Tsinghua (EPFL news, 2026); expertise in ML, anomaly detection, robotics, digital twins.
  - Twitter/X: No public account found
  - LinkedIn: "Co-founder @ AquaShield (YC P26)" (linkedin.com/in/marguerite-benoist, via search snippet); follower count not retrievable
  - GitHub: No public repos found
- **Third team member:** Not publicly named; YC lists team size 3 (YC company page).
- **Co-founder relationship:** Both founders share EPFL academic affiliation and lead the EPFL-incubated AquaShield project together (EPFL news, 2026).
- **Founder-market fit:** Founders' combined ML/robotics/digital-twin research at EPFL CEAT Lab directly produced the AquaShield detection method, with MIT Facilities granting a live pilot — a domain-specific research-to-deployment path (EPFL news, 2026); YC Group Partner is Nicolas Dessaigne, Algolia co-founder (YC page).

## Key Risks

- **Pilot-to-revenue conversion:** Two named pilots (MIT Facilities, one German real-estate operator) are non-commercial validation; no paying contracts or ARR disclosed in any public source, so commercial procurement cycles with portfolio owners remain untested (EPFL news, 2026; company website).
- **Well-capitalized incumbent in same B2B niche:** WINT raised $35M Series C in Aug 2023 from Inven Capital and Insight Partners and reports ~$19M revenue selling AI water-leak detection to commercial buildings — the same buyer AquaShield targets (Crunchbase; Growjo).
- **Hardware deployment friction:** Product requires installing clamp-on ultrasonic sensors on building pipes (company website); even "non-invasive" install requires facilities-team coordination per building, slowing portfolio rollout vs. software-only sales.
- **Name disambiguation:** Multiple unrelated entities use "AquaShield" including AquaShield Inc. (environmental contaminant remediation, aquashieldinc.com) and PitchBook profile #432642-79; investor diligence and SEO surface contamination is a near-term risk.
- **Solo-market technical claim:** Pipe-segment-level localization via GNN on sparse flow data is research-stage with validation limited to MIT campus buildings (EPFL news, 2026); accuracy on heterogeneous portfolio building topologies is unproven publicly.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found; adjacent: >$16B/yr U.S. commercial non-weather water losses (envigilance.com, 2026); >$10B/yr property losses from water leaks (AIA via McGuire Manufacturing) |
| SAM | No public data found |
| Traction | MIT Facilities live pilot (EPFL news, 2026); German real-estate sensor deployment (EPFL news, 2026); EPFL AI Launchpad grant (startupticker.ch); Venture Kick listing (venturekick.ch) |
| Revenue Signal | No public data found (no pricing disclosed on company website; demo-request CTA only) |
| Founders | Paul Beckers (CEO): EPFL BSc Micro-Engineering, MSc Robotics. Marguerite Benoist (CTO): Harvard Master Thesis Student, EPFL affiliation, ML/digital twins expertise. Third co-founder not publicly named. |
| Competitors | WINT ($50M+ raised, ~$19M rev, commercial flow anomaly without segment localization); Phyn ($37M raised, acquired ~$25M, residential main-line flow); Flo by Moen (revenue unknown, Moen subsidiary, residential MicroLeak); Kairos (funding unknown, adjacent leak detection); FIDO (revenue unknown) |
| Moat Signals | EPFL research lineage with transformer + GNN + digital-twin stack (EPFL news, 2026); MIT pilot data access (EPFL news, 2026) |
| Risk Factors | Pilot-to-paid conversion unproven, well-funded incumbent WINT in same niche, hardware install friction |
| Founder Reach | Paul Beckers: Twitter not found, LinkedIn not verified, GitHub not found. Marguerite Benoist: Twitter not found, LinkedIn @marguerite-benoist (count not retrievable), GitHub not found. |
| Distribution Signals | EPFL AI Launchpad grant (startupticker.ch); Venture Kick (venturekick.ch); MIT Facilities pilot (EPFL news, 2026); LinkedIn company page (linkedin.com/company/aquashield-inc-) |
| Emails | founders@aquashieldai.com (company website) |

Sources:
- [AquaShield company website](https://aquashieldai.com/)
- [AquaShield YC company page](https://www.ycombinator.com/companies/aquashield)
- [AquaShield: AI-Driven Water Leak Detection – EPFL](https://actu.epfl.ch/news/aquashield-ai-driven-water-leak-detection/)
- [AquaShield – Venture Kick](https://www.venturekick.ch/aquashield)
- [EPFL AI Launchpad – Startupticker](https://www.startupticker.ch/en/news/epfl-s-grant-program-dedicated-to-ai-takes-off)
- [Marguerite Benoist – LinkedIn](https://www.linkedin.com/in/marguerite-benoist)
- [WINT – Crunchbase](https://www.crunchbase.com/organization/wint-wi)
- [WINT – Growjo](https://growjo.com/company/WINT_-_Water_Intelligence)
- [Phyn – Tracxn](https://tracxn.com/d/companies/phyn/__YgY5IBCpFuIDX47-gXFv-NV5Aq0vtL2pCh0xBbhzV5w)
- [Phyn acquisition – LA Business Journal](https://labusinessjournal.com/engineering/investment-group-buys-phyn-for-nearly-25-million/)
- [Phyn $12M – PRNewswire](https://www.prnewswire.com/news-releases/phyn-announces-12m-additional-investment-from-joint-venture-partners-belkin-international-and-uponor-300847074.html)
- [Water damage commercial real estate – Risk & Insurance](https://riskandinsurance.com/water-damage-is-a-leading-cause-of-commercial-real-estate-claims-how-sensor-technologies-help-mitigate-these-claims/)
- [Water damage insurance costs – envigilance](https://envigilance.com/water-leak-detection/water-damage-insurance/)
- [Best smart water leak detectors – nestalpha](https://www.nestalpha.com/post/best-smart-water-leak-detectors)
- [Flo by Moen vs Phyn Plus – justneedspaint](https://www.justneedspaint.com/flo-by-moen-vs-phyn-plus-which-detects-leaks-best/)
