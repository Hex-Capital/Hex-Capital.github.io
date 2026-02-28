# DroneTector

> Technology to detect and track hostile drones

| Field | Value |
|-------|-------|
| Website | https://www.dronetector.com/ |
| YC Page | https://www.ycombinator.com/companies/dronetector |
| Batch | Winter 2026 |
| Industry | Industrials / Industrials -> Drones |
| Team Size | 3 |
| Location | Glasgow, Scotland, UK (registered office per UK Companies House, SC790858) |
| Tags | Hard Tech, Drones, Radar |

## The Idea

**Problem:** Small drones — including nano drones costing as little as $50 — present an escalating threat to airports, critical infrastructure, and front-line military operations. Conventional radar and detection systems struggle to see these targets because they blend in with birds and other small flying objects. The 2018 Gatwick Airport drone incident cost stakeholders over £50 million (Converge Challenge page), Ukraine experienced more than 1,600 drone attacks monthly in 2024 (Converge Challenge page), and drone usage in the Red Sea doubled global shipping costs since November 2023 (Converge Challenge page). Customer segments include airports, critical infrastructure operators, and defense/military organizations (DroneTector website).

**Approach:** DroneTector builds high-frequency (millimeter-wave) radar systems designed from the ground up to detect low-radar-cross-section targets. The CEO's PhD research at the University of St Andrews focused specifically on 94 GHz Doppler radar for experimental validation of small UAV micro-Doppler signatures (University of St Andrews Research Portal). The company's process is "Detect. Track. Identify. Integrate." — offering deployment-ready hardware with real-time airspace monitoring (DroneTector website). The radar can distinguish between different drone models (RAEng Enterprise Hub, X post).

**Differentiation:** Most incumbent counter-drone systems rely on RF sensing, electro-optical/infrared sensors, or lower-frequency radar that struggles with nano drones. DroneTector uses millimeter-wave radar at higher frequencies (94 GHz band based on the founder's published research), which provides finer resolution on very small targets. Robin Radar pioneered micro-Doppler for drone detection but operates at lower frequencies (Robin Radar website). DroneShield focuses primarily on RF sensing and electronic warfare rather than radar-first detection (DroneShield website). Dedrone (now owned by Axon) uses a multi-sensor fusion approach across RF, radar, and camera (Dedrone website). DroneTector's differentiation centers on purpose-built high-frequency radar optimized for the smallest class of drones.

**Business Model:** No pricing page or revenue information is publicly available. [Inferred]: Most likely monetization path is hardware sales of radar units plus potential recurring software/integration fees, given the defense-tech market norm of hardware + maintenance contracts. The company offers a "Request a Demo" flow on its website, suggesting a direct sales model.

**TAM/SAM:** The global anti-drone market was estimated at USD 2.45 billion in 2024 and projected to reach USD 10.58 billion by 2030 at a 27.2% CAGR (Grand View Research). MarketsandMarkets estimates the market at USD 4.48 billion in 2025, growing to USD 14.51 billion by 2030 at a 26.5% CAGR (MarketsandMarkets). Fortune Business Insights estimates USD 3.11 billion in 2025, growing to USD 16.45 billion by 2034 at 19.79% CAGR (Fortune Business Insights). The radar-specific detection subsegment would be a fraction of the total anti-drone market, which also includes jamming, kinetic defeat, and C2 systems. No public SAM estimate specific to radar-only drone detection was found.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct sales to government defense ministries, airport operators, and critical infrastructure operators, supported by the company's existing relationships with the UK MoD (via DASA) and NATO (via DIANA). The RAEng Enterprise Fellowship also provides a network into UK defense and industrial buyers.

## Defensibility

All three founders hold PhDs in relevant technical fields (millimeter-wave radar physics, atomic/laser physics, and automated reasoning), providing deep domain expertise in the core technology. The CEO has published peer-reviewed research specifically on millimeter-wave drone micro-Doppler simulation and validation (IET Radar, Sonar & Navigation, 2024). This represents accumulated technical IP in a specialized area of radar design.

The company's participation in NATO DIANA and the UK MoD's DASA programs provides early credentialing within defense procurement channels, which have high barriers to entry (security clearances, compliance requirements, long qualification cycles). Switching costs in defense radar procurement are meaningful — once a radar system is qualified and integrated into an operational architecture, replacement is costly and slow.

**Market structure:** Defense procurement is structurally difficult for large commercial incumbents to pivot into at the small-drone detection layer. Companies like Raytheon and Lockheed Martin build large-format radar systems optimized for aircraft and missile threats; designing millimeter-wave radar for nano-drone detection requires different antenna architectures, signal processing approaches, and cost targets. This is a unit economics incompatibility — the price points and form factors for small-drone detection do not align with the margin structures of large defense primes selling multi-million-dollar radar systems. However, the mid-market competitors (Robin Radar, Fortem Technologies) do address this segment directly.

**Commoditization risk:** Several well-funded companies already operate in counter-drone detection. Robin Radar has commercialized micro-Doppler-based drone detection and generated €43 million in revenue in 2023 (Defense News, Sept 2025). Fortem Technologies has raised $79.3 million with backing from Lockheed Martin, Boeing, and Toshiba (multiple sources). DroneShield posted $57.5 million in FY2024 revenue (DroneShield Annual Report). The key question is whether DroneTector's millimeter-wave approach provides a performance advantage on nano drones sufficient to carve out a defensible niche against these scaled competitors.

## Market & Traction

**Traction signals:**
- Accepted into Y Combinator Winter 2026 batch (YC company page)
- Participant in NATO DIANA program (DroneTector website; YC company page)
- Supported by UK MoD's Defence and Security Accelerator (DASA) (DroneTector website; YC company page)
- All three founders are Royal Academy of Engineering Enterprise Fellows (YC company page)
- Won "Best Pitch" and £500 at Converge Challenge (Converge Challenge website)
- DroneTector Limited incorporated 29 November 2023 in Glasgow, Scotland (UK Companies House, SC790858)
- RAEng Enterprise Hub promoted DroneTector on X (RAEng_Hub post, X)
- Matthew Moore listed on LinkedIn with 233 connections (LinkedIn via search snippet)
- No Product Hunt listing found
- No app store presence found
- No public revenue figures found
- No Discord/Slack community found
- 0 open job postings (YC company page)

**Competitive landscape:**

1. **Dedrone (acquired by Axon, Oct 2024):** Raised $127 million total before acquisition (CNBC, May 2024 via search snippet). Tripled revenue in 2023, closing 16 major defense contracts (Dedrone website via search snippet). Multi-sensor fusion approach (RF, radar, camera) vs. DroneTector's radar-first approach. Axon estimated Dedrone adds ~$14 billion to its TAM (Axon blog). Key differentiator vs. DroneTector: broader sensor suite and Axon's distribution network.

2. **DroneShield (ASX:DRO):** Publicly traded; FY2024 revenue of $57.5 million, with ~70% from US Government/military (DroneShield Annual Report, 2024). Raised $235 million in 2024 via share placements (DroneShield investor relations via search snippet). Focuses on RF sensing, AI/ML, and electronic warfare. Key differentiator vs. DroneTector: RF-first detection and integrated defeat capability (DroneGun, DroneSentry).

3. **Robin Radar (Netherlands):** Revenue of €43 million in 2023, up from €5.5 million in 2020 (Defense News, Sept 2025). Parcom (PE) became majority owner in 2024. Secured contract to supply 100 IRIS radars to Dutch MoD; 200+ radars deployed in Ukraine (Robin Radar press release, Dec 2025). Pioneered micro-Doppler for drone detection. Key differentiator vs. DroneTector: established at scale with deployed radar units; DroneTector claims higher-frequency radar for smaller targets.

4. **Fortem Technologies (US):** Raised $79.3 million total, backed by Lockheed Martin, Boeing, Toshiba, DCVC (Tracxn via search snippet; multiple press releases). Revenue not publicly disclosed. Secured multimillion-dollar order to defend 2026 FIFA World Cup venues (Business Wire, Feb 2026). Offers end-to-end system: TrueView radar + SkyDome Manager + DroneHunter interceptor. Key differentiator vs. DroneTector: integrated detect-and-defeat solution including kinetic interceptor drone.

**Why now:** [Inferred]: The Ukraine conflict has dramatically demonstrated the threat of small, inexpensive drones in military operations (1,600+ attacks/month in 2024 per Converge Challenge), driving urgency in NATO and allied defense procurement. NATO established the DIANA accelerator specifically for dual-use defense technology. Simultaneously, commercial drone proliferation has increased incidents at airports and critical infrastructure. The anti-drone market's 20-27% CAGR reflects this demand acceleration. The enabling technical change is that millimeter-wave radar components (originally developed for automotive and 5G applications) have become more available and cost-effective, making it feasible for a small team to build custom high-frequency radar systems at lower cost than was previously possible.

## Founders & Team

**Dr. Matthew Moore** — Co-founder & CEO
- PhD in Physics, University of St Andrews (passed viva May 2024; St Andrews Millimetre Wave & EPR Group blog). PhD research focused on millimeter-wave radar for detection, classification, and tracking of drones, supervised by Duncan Robertson and Samiur Rahman, funded by EPSRC and QinetiQ (St Andrews research pages via search snippet).
- Published peer-reviewed research: "94 GHz Doppler radar for experimental validation of small UAV micro-Doppler" (University of St Andrews Research Portal); "A new simulation methodology for generating accurate drone micro-Doppler with experimental validation" (IET Radar, Sonar & Navigation, 2024).
- Royal Academy of Engineering Enterprise Fellow (YC company page).
- Won Best Pitch at Converge Challenge with DroneTector (Converge Challenge website).
- Director of DroneTector Limited since 29 November 2023 (UK Companies House).
- Twitter/X: No personal account found. Mentioned by @RAEng_Hub (X post).
- LinkedIn: uk.linkedin.com/in/mmoore2 — 233 connections (LinkedIn via search snippet).
- GitHub: No public repos found attributable to this individual (multiple "Matt Moore" GitHub accounts exist but none confirmed as this founder).

**Dr. Thomas Doherty** — Co-founder & CTO
- PhD in Atomic & Laser Physics, University of Oxford (Oxford Department of Physics page). Research in ion trap quantum computing group.
- Royal Academy of Engineering Enterprise Fellow (YC company page; LinkedIn headline via search snippet: "Quantum Technology Specialist | RAEng Enterprise Fellow").
- Also listed as Co-founder/CEO of Quantum Fabrix (LinkedIn via search snippet), suggesting prior or concurrent work in quantum technology commercialization.
- Contributed to achieving single-qubit gate fidelity of 0.99999985(3), described as the highest fidelity ever achieved across all quantum computing platforms (Oxford Physics via search snippet).
- Twitter/X: No personal account found.
- LinkedIn: uk.linkedin.com/in/thomas-doherty-940b87302 (LinkedIn via search snippet).
- GitHub: No public repos found.

**Dr. Jordina Francès de Mas** — Co-founder & COO
- PhD in Computer Science (Automated Reasoning), University of St Andrews (passed viva subject to minor corrections, Feb 2024; St Andrews CS Blog). Thesis on propositional formula simplification using Peirce's existential graphs and implication hypergraphs (St Andrews Research Repository).
- Research published at SPLASH 2023 (ACM conference; conf.researchr.org profile).
- Royal Academy of Engineering Enterprise Fellow (YC company page).
- Twitter/X: No personal account found.
- LinkedIn: No profile found in search results.
- GitHub: No public repos found.

**Co-founder relationship:** Dr. Moore and Dr. Francès de Mas both completed their PhDs at the University of St Andrews (Physics and Computer Science departments respectively), with both passing their vivas in 2024. This shared institutional affiliation suggests they likely overlapped as PhD students. All three founders are Royal Academy of Engineering Enterprise Fellows, which is a structured fellowship program that may have connected them. Dr. Doherty was based at Oxford but also holds the RAEng Enterprise Fellowship.

**Founder-market fit:** The CEO's PhD was specifically on millimeter-wave radar for drone detection — the exact technology the company is commercializing. His research was co-funded by QinetiQ, a major UK defense contractor, providing early defense industry connections. The CTO brings physics and quantum sensing expertise from Oxford's atomic and laser physics group, relevant to advanced radar signal processing. The COO's background in automated reasoning and logic is applicable to the classification and identification layer of the system. All three hold the RAEng Enterprise Fellowship, indicating they were selected for commercialization potential by a UK engineering institution with defense and industrial ties.

## Key Risks

**Well-funded incumbent competition:** The counter-drone market already has multiple scaled competitors with significant revenue. Robin Radar generated €43 million in 2023 (Defense News, Sept 2025), DroneShield posted $57.5 million in FY2024 revenue (DroneShield Annual Report), and Dedrone was acquired by Axon for its distribution reach (Axon, Oct 2024). DroneTector must demonstrate that its millimeter-wave approach provides sufficient performance differentiation on nano drones to win contracts against these established players.

**Defense procurement cycle length:** Defense and critical infrastructure customers have procurement cycles of 12-36+ months involving evaluation, testing, qualification, and budgetary approval. For a 3-person pre-seed team, sustaining operations through long sales cycles without revenue is a capital intensity challenge. Mitigation: NATO DIANA and DASA participation may shorten qualification timelines within UK/NATO procurement.

**Hardware scaling and manufacturing:** As a radar hardware company, DroneTector faces physical production challenges — component sourcing, manufacturing partnerships, quality assurance, and certification. Millimeter-wave components at 94 GHz are specialized and supply-constrained compared to lower-frequency alternatives. Scaling from prototype to production units requires capital and manufacturing expertise beyond the current team of three.

**Export control and regulatory constraints:** High-frequency radar technology for defense applications is subject to ITAR/EAR (US) and UK export control regulations. Selling to NATO allies may be feasible, but expanding to broader international markets could face licensing restrictions. This constrains the addressable customer base relative to the total anti-drone TAM.

**CTO dual venture involvement:** Dr. Doherty is listed on LinkedIn as Co-founder/CEO of Quantum Fabrix (LinkedIn via search snippet) in addition to his CTO role at DroneTector. If Quantum Fabrix remains an active venture, this could represent divided attention for a key technical co-founder on a three-person team.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.45B anti-drone market in 2024, projected $10.58B by 2030 at 27.2% CAGR (Grand View Research); $4.48B in 2025, projected $14.51B by 2030 at 26.5% CAGR (MarketsandMarkets) |
| SAM | No public data found for radar-specific drone detection subsegment |
| Traction | YC W26 batch; NATO DIANA participant; UK MoD DASA supported; RAEng Enterprise Fellows (all 3 founders); Converge Challenge Best Pitch winner (Converge Challenge website) |
| Revenue Signal | No public data found |
| Founders | Dr. Matthew Moore (CEO): PhD Physics, St Andrews, millimeter-wave radar for drone detection. Dr. Thomas Doherty (CTO): PhD Atomic & Laser Physics, Oxford, quantum technology. Dr. Jordina Francès de Mas (COO): PhD Computer Science (Automated Reasoning), St Andrews. |
| Competitors | Dedrone ($127M raised, acquired by Axon Oct 2024, tripled revenue 2023, multi-sensor fusion vs. radar-first); DroneShield (ASX:DRO, $235M raised 2024, $57.5M FY2024 revenue, RF-sensing focus vs. mm-wave radar); Robin Radar (PE-backed by Parcom, €43M revenue 2023, lower-frequency micro-Doppler radar vs. higher-frequency mm-wave); Fortem Technologies ($79.3M raised, revenue unknown, integrated detect-and-defeat system vs. detection-focused) |
| Moat Signals | CEO's PhD-level IP in 94 GHz drone micro-Doppler; peer-reviewed publications; NATO DIANA and DASA credentialing in defense procurement |
| Risk Factors | Well-funded incumbent competition, defense procurement cycle length, hardware manufacturing scale-up, CTO dual-venture involvement |
| Founder Reach | Matthew Moore: Twitter not found, LinkedIn 233 connections, GitHub not found. Thomas Doherty: Twitter not found, LinkedIn profile exists (count not retrievable), GitHub not found. Jordina Francès de Mas: Twitter not found, LinkedIn not found, GitHub not found. |
| Distribution Signals | NATO DIANA program participation; UK MoD DASA support; RAEng Enterprise Hub promotion on X (RAEng_Hub post); no Product Hunt, app store, or community signals found |
