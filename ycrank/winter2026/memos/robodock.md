# RoboDock

> Robots that run autonomous depots for autonomous fleets.

| Field | Value |
|-------|-------|
| Website | https://www.robodock.tech/ |
| YC Page | https://www.ycombinator.com/companies/robodock |
| Batch | Winter 2026 |
| Industry | Industrials / Industrials -> Energy |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | SaaS, Robotics, Energy, Electric Vehicles, Automation |
| YC Partner | Gustaf Alstromer |
| Emails | zinny@robodock.tech, celine@robodock.tech |

## The Idea

**Problem:** Autonomous and electric vehicle fleets are scaling, but their depots remain manually operated. Fleet operators spend approximately $900K per depot per year on charging labor and overhead, and vehicle downtime costs up to $650K per depot per year (YC Launch page). Building new depots requires 2–3 year timelines and $8M+ CapEx (YC Launch page). Autonomous vehicles can drive themselves but cannot operate themselves at the depot level — charging, inspecting, and turning around vehicles still requires human workers. Current customers include robotaxi operators (Waymo, Tesla, Zoox, and similar) and electric fleet operators (derletztefuehrerscheinneuling.com, Feb 2026).

**Approach:** RoboDock deploys robotic systems that physically plug vehicles into chargers, verify successful charging via closed-loop feedback, and perform automated post-trip inspections using vision and thermal sensing. The system uses vision-guided alignment for connector identification and verified connection, and each charge event generates data that improves system accuracy over time (company website). The system integrates with existing depot infrastructure without requiring layout changes (YC Launch page).

**Differentiation:** Unlike wireless/inductive charging solutions (InductEV), RoboDock uses physical robotic plug-in, which works with existing conductive charging infrastructure and avoids the efficiency losses and high CapEx of inductive systems. Unlike Rocsys, which focuses primarily on the robotic charging arm, RoboDock positions as a full depot automation platform covering both charging and vehicle inspections. Unlike OEM-specific solutions (Hyundai ARC, Tesla Snake Charger, VW mobile robot), RoboDock is fleet-agnostic and designed to work across mixed-brand AV/EV depots.

**Business Model:** No public pricing page found. [Inferred]: Most likely monetization path is a hardware-plus-SaaS model, given the "SaaS" tag on YC and the robotics hardware component — an upfront hardware/installation fee combined with recurring software subscription for depot management, fleet orchestration, and analytics. The company's website references metrics like "$1.2M+ recovered per depot annually" (company website), suggesting ROI-based enterprise selling.

**TAM/SAM:** The global EV charging infrastructure market was valued at $40.22 billion in 2025, projected to reach $238.82 billion by 2033 at a CAGR of 25.0% (Grand View Research, 2026 via search snippet). The U.S. EV charging infrastructure market was valued at $5.09 billion in 2024, projected to grow at 30.3% CAGR to $24.07 billion by 2030 (Grand View Research, 2026 via search snippet). The broader autonomous vehicle market is projected to grow from $200B to $3T with ~76M autonomous vehicles expected by 2035 (YC Launch page). [Inferred]: RoboDock's SAM is the subset of depot-level charging and inspection automation for commercial AV/EV fleets — no public third-party estimate exists for this specific niche.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct enterprise sales to autonomous vehicle fleet operators (robotaxi companies, electric transit agencies, logistics fleets), given the B2B hardware+software nature of the product. The "Book a Demo" CTA on the website and the per-depot economic framing ($1.2M recovered per depot) suggest a consultative enterprise sales motion. Early customers likely include major AV operators (Waymo, Zoox) given the San Francisco location and the specific problem framing.

## Defensibility

RoboDock's potential defensibility signals include: (1) **Closed-loop learning data advantage** — each charging event generates data that improves system accuracy (company website), creating a compounding data moat over time as more depots are deployed; (2) **Technical complexity** — integrating robotic manipulation, computer vision, thermal sensing, and fleet orchestration into a single system that operates reliably in real depot environments is a non-trivial engineering challenge; (3) **Switching costs** — once integrated into depot operations and workflow, replacing the system would require physical hardware removal, retraining, and operational disruption.

**Market structure:** Large AV companies (Waymo, Tesla, Zoox) could theoretically build in-house depot automation, but this represents a non-core infrastructure problem for companies focused on autonomous driving software and vehicle platforms. Building reliable robotic charging and inspection systems is a distinct engineering discipline (mechatronics, field robotics) from autonomous driving. OEM-specific solutions (Hyundai ARC, Tesla Snake Charger) are vertically integrated and do not serve mixed-fleet depots, creating a structural gap for fleet-agnostic operators. Traditional depot operators and charging infrastructure companies (ChargePoint, EVgo) are focused on stationary charging hardware and software, not robotic automation — adding robotics would require a fundamentally different engineering team and product architecture.

**Commoditization risk:** Rocsys ($42.7M raised) is the closest direct competitor with a robotic charging product already in market. Large robotics companies (e.g., Flexiv, which already has an EV charging robot case study) could pivot to serve this niche. OEMs with robotics divisions (Hyundai, VW) could expand from vehicle-specific solutions to fleet-agnostic platforms. The physical robotics component creates a higher barrier than pure software, but the core technology (robotic arm + vision system + charging connector) is buildable by well-funded robotics teams.

## Market & Traction

**Traction signals:**
- YC Launch page upvotes: 11 (YC Launch page)
- Company website claims: $1.2M+ recovered per depot annually, 30% reduction in energy costs, 99% fleet uptime, 40% labor overhead reduction, 25% asset utilization increase (company website) — these appear to be projected/modeled figures rather than customer-verified metrics, as no named customer is cited
- Twitter/X: @Robo_Dock (follower count not retrievable due to JavaScript rendering)
- LinkedIn: linkedin.com/company/robodock-tech/ (follower count not retrievable)
- Instagram: Featured in a pitch reel on Instagram (instagram.com/reel/DT2v5PqDXw5/)
- Press: German-language coverage in derletztefuehrerscheinneuling.com (Feb 23, 2026)
- Product Hunt: No Product Hunt launch found
- No public revenue figures, paying customer names, or user counts found

**Competitive landscape:**

1. **Rocsys** (Netherlands) — $42.7M raised across 3 rounds, latest $36M Series A-II in July 2023 (Rocsys newsroom). Revenue unknown. Launched "the world's first hands-free EV charging platform for autonomous mobility" in April 2025 (Tech.eu, Apr 2025 via search snippet). Key differentiator vs. RoboDock: more mature, European-based, focused primarily on robotic charging without the vehicle inspection component.

2. **InductEV** (USA) — ~$97–115M raised, acquired in January 2026 (Tracxn via search snippet). Revenue unknown. Provides wireless (inductive) charging up to 500 kW for fleet vehicles. Key differentiator vs. RoboDock: wireless approach eliminates physical connection entirely, but requires specialized ground-mounted hardware and has lower charging efficiency than conductive.

3. **EVAR** (South Korea) — Samsung Electronics spinoff (Samsung holds 20% equity), raised $16.88M in Series B (Platum via search snippet). CES 2023 "Triple Crown" award winner with "Parky" autonomous charging robot (KoreaTechDesk, 2023 via search snippet). Key differentiator vs. RoboDock: OEM-adjacent with Samsung/Hyundai investor backing, focused on Korean and Asian markets, consumer parking garage focus vs. RoboDock's fleet depot focus.

4. **IonDynamics** (USA) — Early stage, received $30K Michigan Economic Development Corp. grant, raising first seed round (Crain's Detroit Business via search snippet). FlashBot mobile charging robot that eliminates fixed infrastructure. Key differentiator vs. RoboDock: mobile battery-pack-based approach (brings power to vehicle) vs. RoboDock's fixed depot automation approach.

**Why now:** [Inferred]: Several converging factors opened this opportunity in 2024–2026: (1) Waymo's commercial robotaxi expansion to multiple U.S. cities (SF, LA, Phoenix, Austin) crossed a fleet-scale threshold where manual depot operations become a binding constraint on growth; (2) Tesla's anticipated robotaxi launch and other AV entrants (Zoox, Cruise restructuring) are creating a wave of new autonomous fleets needing depot infrastructure; (3) The autonomous vehicle market's projected growth from $200B to $3T (YC Launch page) implies fleet sizes at which human-staffed depots become economically untenable; (4) Advances in robotic manipulation and computer vision (partly driven by AI/ML progress) have made reliable autonomous plug-in technically feasible at commercial grade.

## Founders & Team

**Zinny Weli** — Co-founder & CEO
- BSME from University of Michigan (top 1% of class); MSME (Robotics) from Stanford University (LinkedIn, The Org via search snippet)
- Senior Mechanical Design Engineer at Zipline — led autonomous drone charging infrastructure (The Org via search snippet)
- Product Design Engineer at Amazon Lab126 — developed the charging system for Amazon's home robot (Astro) (YC page, company website)
- Partnered with Ampersand (EV startup in Rwanda) to develop the first EV battery swap station and charging system in East Africa for motorcycle taxi drivers (web search snippet from LinkedIn)
- Experience with Pear VC (LinkedIn headline via search snippet)
- Twitter/X: @zinndye found, but connection to RoboDock unconfirmed; count not retrievable
- LinkedIn: linkedin.com/in/eweli/ — "Building new tech | Ex Zipline, Amazon, Stanford Robotics" (LinkedIn via search snippet)
- GitHub: No public repos found
- Personal website: zinnyweli.com (not accessible at time of research)

**Celine Wang** — Co-founder & CTO
- BS and MS in Mechanical Engineering from Stanford University (YC Launch page, Stanford Profiles via search snippet)
- Senior Mechatronics Engineer at Plus — integrated actuator and sensor systems to enable autonomous semi-trucks (YC page, company website)
- Field engineering experience across rural Indonesia, UNESCO heritage sites in Peru, and wildlife reserves in China (YC company page via search snippet)
- Twitter/X: @nicenewgal listed on YC page; follower count not retrievable
- LinkedIn: Specific profile URL not confirmed among multiple "Celine Wang" profiles
- GitHub: No public repos found

**Co-founder relationship:** Both founders are Stanford mechanical engineering graduates. The YC Launch page states "the founders met at Stanford seven years ago" (YC Launch page), indicating they have known each other since approximately 2019.

**Founder-market fit:** Both founders have direct, hands-on experience building charging and autonomous systems at scale. Weli designed autonomous charging infrastructure for Zipline's drone delivery fleet and Amazon's home robot — both requiring reliable, automated charge-connect systems. Wang built actuator and sensor integration for autonomous semi-trucks at Plus, directly relevant to the mechatronics challenges of robotic depot operations. Their combined experience spans the full stack of the problem: robotic manipulation, autonomous system integration, field deployment in challenging environments, and production-scale hardware. The Stanford robotics connection and Pear VC relationship (noted on Weli's LinkedIn) may provide fundraising and network advantages.

## Key Risks

**Rocsys market lead:** Rocsys has raised $42.7M, launched a commercial product (April 2025), and has multi-year head start in robotic EV charging (Rocsys newsroom, Tech.eu). RoboDock must differentiate on the broader depot automation platform (charging + inspection) or risk competing head-to-head on robotic charging where Rocsys has more deployed systems and data. Mitigation: RoboDock's combined charging + inspection offering addresses a wider depot automation problem than Rocsys's charging-only focus.

**OEM vertical integration:** Major AV operators (Waymo/Alphabet, Tesla, Zoox/Amazon) have the resources and incentive to build proprietary depot automation in-house. Waymo already operates its own depots at scale; Tesla is developing its own charging robot ("Snake Charger"). If the largest potential customers build internally, RoboDock's addressable market narrows to mid-tier and smaller fleet operators. Mitigation: Multi-fleet, brand-agnostic approach may appeal to operators running mixed fleets or third-party depot managers.

**Hardware deployment scaling:** Physical robotics products require manufacturing, installation, field service, and on-site reliability at each depot — unlike software, this cannot be deployed remotely. Scaling across geographically dispersed depots with a 2-person team will require significant capital for hardware production and field engineering hiring. The company's current non-hiring status limits deployment velocity.

**Brand disambiguation:** "RoboDock" shares its name with the Robodock arts festival in Amsterdam (robodock.org), Fugro's offshore Robodock system (offshore-energy.biz), and robodock.io (an unrelated AI platform). Multiple Twitter/X accounts use variations of the name (@robodock is a separate entity). This creates SEO and brand confusion risk, particularly in early-stage market education.

**Regulatory and safety certification:** Deploying autonomous robots in depot environments with high-voltage charging systems and vehicle proximity will require safety certifications and potentially regulatory approval. No public data on RoboDock's certification status or regulatory pathway was found.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global EV charging infrastructure: $40.22B (2025), projected $238.82B by 2033 at 25.0% CAGR (Grand View Research, 2026 via search snippet). U.S. segment: $5.09B (2024), projected $24.07B by 2030 at 30.3% CAGR (Grand View Research, 2026 via search snippet). |
| SAM | No public data found for depot-specific robotic automation sub-segment. |
| Traction | YC Launch page: 11 upvotes (YC Launch page). German press coverage (derletztefuehrerscheinneuling.com, Feb 2026). Instagram pitch reel feature. No named customers, revenue, or user counts found. |
| Revenue Signal | No public data found. Website claims modeled savings of "$1.2M+ recovered per depot annually" (company website) — this is a customer savings projection, not company revenue. |
| Founders | Zinny Weli (CEO): Stanford MS Robotics, ex-Zipline (Sr. Mech Design Eng), ex-Amazon Lab126. Celine Wang (CTO): Stanford BS+MS Mechanical Eng, ex-Plus (Sr. Mechatronics Eng). |
| Competitors | Rocsys ($42.7M raised, revenue unknown, robotic charging-only, European-based). InductEV (~$97–115M raised, acquired Jan 2026, wireless charging). EVAR ($16.88M Series B, Samsung spinoff, Korean market focus). IonDynamics (pre-seed, mobile charging robot). |
| Moat Signals | Closed-loop learning data from each charging event (company website). Combined charging + inspection platform vs. single-function competitors. Hardware + software integration complexity. |
| Risk Factors | Rocsys market lead with $42.7M raised, OEM vertical integration threat (Waymo/Tesla/Zoox), hardware scaling challenges with 2-person team |
| Founder Reach | Zinny Weli: Twitter @zinndye (count not retrievable), LinkedIn linkedin.com/in/eweli/. Celine Wang: Twitter @nicenewgal (count not retrievable), LinkedIn profile not confirmed. |
| Distribution Signals | YC Launch page (11 upvotes). German-language press (Feb 2026). Instagram pitch reel. No Product Hunt, app store, or Chrome extension presence. |
| Emails | zinny@robodock.tech, celine@robodock.tech |
