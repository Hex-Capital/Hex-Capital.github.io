# Arlo Industries

> Passive aerial sensing mesh to track drones and missiles

| Field | Value |
|-------|-------|
| Website | https://arlo1.com/ |
| YC Page | https://www.ycombinator.com/companies/arlo-industries |
| Batch | Spring 2026 |
| Industry | Industrials / Industrials -> Defense |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Hard Tech, Drones, Security, Radar, Aerospace |
| YC Partner | Andrew Miklas (YC company page) |
| Emails | No public data found |

## The Idea

- **Problem:** Traditional radars are built on past-war doctrine designed to protect single, centralized assets, while modern conflict requires wide-area persistent coverage against stealthy drones and Shahed-class munitions (YC company description; founder lived through Shahed attacks near his apartment in Israel, per YC bio).
- **Approach:** Distributed passive sensing mesh ("Mentat") that does not emit signals, with sensor cost scaling linearly while tracking accuracy scales exponentially as nodes are added (YC company page; arlo1.com per company description).
- **Differentiation:** Versus Anduril Sentry/Pulsar (active integrated C-UAS) and Echodyne/Fortem (active phased-array/AESA radar) — Arlo is passive (non-emitting) and mesh-distributed rather than single-node active radar (Anduril Counter-UAS page; GeekWire 2019 on Echodyne/Fortem AESA radar).
- **Business Model:** [Inferred]: Hardware + software sales / contracts to defense ministries and frontline militaries, given YC description states the team has "showcased this technology directly to Ukrainian militaries on the frontlines, as well as to operators across Europe and the USA."
- **TAM/SAM:** Counter-UAS market estimated at $6.64B in 2025 growing to $20.31B by 2030 at 25.1% CAGR (MarketsandMarkets, Aug 2025); DroneShield cites a broader addressable C-UAS TAM of $63B in 2025 (Unmanned Airspace / DroneShield).
- **GTM / Distribution:** Direct demos to end users — Ukrainian frontline militaries plus European and U.S. operators (YC company description); active hiring in Kyiv and Helsinki signals frontline/EU presence (YC company page job listings).

## Defensibility

- **Moat today:** No defensibility signals (patents, contracts, proprietary datasets) found in public sources at time of research.
- **Future moat:** [Inferred]: Mesh-network data advantage — tracking accuracy grows with node density (per company description), suggesting a deployment-data flywheel; unproven because no field deployment counts or contract awards are public.
- **Market structure:** [Inferred]: Legacy primes (Raytheon, Lockheed, ELTA, Rafael) sell single-node active radars under existing program-of-record contracts; pivoting to a passive distributed mesh would cannibalize those program revenues, a classic incumbent constraint (competitor set per MarketsandMarkets C-UAS Radar Report 2025).
- **Commoditization risk:** [Inferred]: Passive coherent location and TDoA-based sensing are established academic techniques; competitors including Echodyne, Fortem, Dedrone, BlueHalo, and Sentrycs operate in adjacent C-UAS sensing (MarketsandMarkets C-UAS Radar Report 2025).

## Market & Traction

- **Traction signals:**
  - Field demos to Ukrainian militaries on the frontlines, plus operators in Europe and USA (YC company description).
  - Active hiring for Communications & Networking Engineers and Perception Engineers across San Francisco, Troy NY, Kyiv, and Helsinki (YC company page).
  - Founder LinkedIn: linkedin.com/in/deoarlo (YC company page).
  - Founder Twitter/X: @deoarlo (YC company page); follower count not retrievable.
  - No revenue, customer contracts, Product Hunt, press, or social-follower figures found in public sources.
- **Competitors:**
  - Anduril Industries (>$2.5B+ raised across rounds per public reporting; revenue unknown for C-UAS segment): integrated active multi-modal C-UAS with kinetic effectors (Sentry, Roadrunner, Pulsar) vs. Arlo's passive sensing-only mesh (Anduril Counter-UAS page).
  - Echodyne ($29M Series B in 2017, total not disclosed in search; selected for USAF $490M counter-drone program in 2026): metamaterials AESA active radar vs. Arlo's passive mesh (GeekWire 2019; The Defense Post, Apr 2026).
  - Fortem Technologies ($25M Series B per TAMradar; revenue unknown): AESA active radar (R20) plus DroneHunter interceptor vs. Arlo's sensing-only passive approach (TAMradar funding signal).
  - Dedrone (now Axon) ($130M raised over 8 rounds, revenue unknown; CB Insights/Tracxn): RF + multi-sensor detection platform vs. Arlo's passive RF/aerial mesh (Tracxn 2026 profile).
  - DroneShield ($26.2M raised over 11 rounds per Tracxn; ASX-listed): RF detection and jammer products vs. Arlo's passive tracking mesh (Tracxn 2026 profile).
- **Why now:** Shahed-136 and FPV drone proliferation in Russia–Ukraine war (2022–present) and Israel–Hamas/Iran conflicts has driven $1.8B in U.S. federal counter-drone funding (Airsight, "Anti-Drone Market 2026"); MarketsandMarkets cites 25.1% CAGR through 2030 (Aug 2025).

## Founders & Team

- **Deo Arlo (Founder & CEO):**
  - Background: 6+ years in the Israeli defense ecosystem with direct exposure to Iron Dome operations against ICBMs and Shahed drones (YC company description); robotics researcher at Technion with a patented robotic end-effector; previously CTO & Co-Founder of Makrverse (search snippet via deo.lol / LinkedIn).
  - Twitter/X: @deoarlo (YC company page); follower count not retrievable.
  - LinkedIn: "Arlo Industries (YC P26)" — linkedin.com/in/deoarlo (LinkedIn search result).
  - GitHub: No public account found in search results.
- **Other team members (2 additional, names not public):** YC company description states the team "includes a PhD in drones and autonomy and military experts"; specific names, roles, and credentials not public at time of research.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** [Inferred]: Deo's 6+ years in the Israeli defense ecosystem with direct frontline exposure to Iron Dome and Shahed engagements (YC company description) aligns with building counter-drone sensing; no named advisors, board members, or institutional investors beyond YC found in public sources.

## Key Risks

- **Technical feasibility at military performance level:** Passive coherent-location mesh networks are academically established but have not been publicly demonstrated at the SWaP, latency, and detection-range thresholds required for ICBM- or Shahed-class tracking in cluttered EW environments; no published field-performance data exists for Arlo's "Mentat" (no public benchmarks found at time of research).
- **Concentrated incumbent and well-funded startup competition:** MarketsandMarkets' 2025 C-UAS Radar Report lists 12 named incumbents (Anduril, BlueHalo, D-Fend, Dedrone/Axon, DroneShield, ELTA, Fortem, Honeywell, L3Harris, Rafael, SAIC, Sentrycs); Dedrone alone has raised $130M (Tracxn), and Echodyne was selected into a USAF $490M counter-drone program in April 2026 (The Defense Post).
- **Procurement-cycle risk:** Defense procurement typically requires program-of-record awards, ITAR/EAR compliance, and FMS pathways; no public contracts, LOIs, or pilot dollars are disclosed for Arlo at time of research (no public data found).
- **Name collision / brand risk:** "Arlo" is also a consumer security-camera brand (Arlo Community results) and several unrelated firms ("Arlo Solutions," "Arlo.Boston") appeared in LinkedIn search, which may complicate SEO, recruiting, and trademark posture (search results from LinkedIn / community.arlo.com).
- **Export-control and dual-use exposure:** Demos to Ukrainian frontline units (YC company description) implicate U.S. ITAR/EAR and end-use-monitoring rules; no public licensing or compliance posture disclosed.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | C-UAS systems $6.64B (2025) → $20.31B by 2030, 25.1% CAGR (MarketsandMarkets, Aug 2025); DroneShield-cited TAM $63B (2025) (Unmanned Airspace) |
| SAM | No public data found |
| Traction | Field demos to Ukrainian frontline militaries plus European and U.S. operators (YC company page); hiring in SF/Troy NY/Kyiv/Helsinki (YC company page) |
| Revenue Signal | No public data found |
| Founders | Deo Arlo (Founder/CEO): 6+ years Israeli defense ecosystem, Technion robotics researcher with patented end-effector, ex-Makrverse CTO/Co-Founder. Two additional team members described as "PhD in drones and autonomy and military experts" — names not public. |
| Competitors | Anduril (>$2.5B raised, revenue unknown, integrated active C-UAS); Echodyne ($29M Series B 2017, USAF $490M program participant, active AESA radar); Fortem ($25M Series B, AESA radar + interceptor); Dedrone/Axon ($130M raised, RF multi-sensor detection); DroneShield ($26.2M raised, RF detect + jam) |
| Moat Signals | No public data found |
| Risk Factors | Unproven technical performance at military-grade range/EW resilience, well-funded incumbent competition (Anduril, Dedrone $130M, Echodyne USAF $490M program), defense procurement cycle and ITAR exposure |
| Founder Reach | Deo Arlo: Twitter @deoarlo (count not retrievable), LinkedIn linkedin.com/in/deoarlo (count not retrievable), GitHub not found |
| Distribution Signals | Frontline demos to Ukrainian militaries, European, and U.S. operators (YC company page); hiring in Kyiv and Helsinki (YC company page) |
| Emails | No public data found |

Sources:
- [Arlo Industries — Y Combinator](https://www.ycombinator.com/companies/arlo-industries)
- [Deo Arlo — LinkedIn](https://www.linkedin.com/in/deoarlo/)
- [Counter-UAS Systems Market — MarketsandMarkets](https://www.marketsandmarkets.com/PressReleases/counter-cuas-systems.asp)
- [DroneShield TAM — Unmanned Airspace](https://www.unmannedairspace.info/counter-uas-systems-and-policies/global-addressable-c-uas-market-worth-usd63-million-droneshield/)
- [Anduril Counter-UAS](https://www.anduril.com/counter-uas)
- [Fortem vs. Echodyne — GeekWire](https://www.geekwire.com/2019/fortem-technologies-echodyne-radar-super-bowl/)
- [Echodyne USAF $490M program — The Defense Post](https://thedefensepost.com/2026/04/21/echodyne-radar-counter-drone/)
- [Dedrone — Tracxn](https://tracxn.com/d/companies/dedrone/__E95q_KlJ1KC2UCOfpKyeixrQL9DBR9wshWvVUkCmjsk)
- [DroneShield — Tracxn](https://tracxn.com/d/companies/droneshield/__xARrG0d7xImJVmConVC-RxouotUcLIvRh-JiOXlMxzw)
- [Fortem Series B — TAMradar](https://www.tamradar.com/funding-rounds/fortem-series-b-25m)
- [Anti-Drone Market 2026 — Airsight](https://www.airsight.com/blog/anti-drone-market-2026-federal-funding)
