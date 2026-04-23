# Maquoketa Research

> Intelligent one-way attack drones

| Field | Value |
|-------|-------|
| Website | https://www.maquoketa.net |
| YC Page | https://www.ycombinator.com/companies/maquoketa-research |
| Batch | Spring 2026 |
| Industry | Industrials / Industrials -> Defense |
| Team Size | 5 |
| Location | Elk Grove Village, IL, USA |
| Tags | Artificial Intelligence, Hardware, Drones, Computer Vision, Manufacturing |
| YC Partner | Harj Taggar |
| Emails | No public data found |

## The Idea

**Problem:** Modern militaries need low-cost, expendable precision strike capabilities. Data from Ukraine indicates that autonomous capabilities can quadruple mission success rates for one-way attack drones compared to operator-guided systems (maquoketa.net via search snippet). Current solutions are either expensive guided munitions or operator-dependent FPV drones with limited range and high operator cognitive load.

**Approach:** Maquoketa builds autonomous one-way attack drones (loitering munitions) with AI-driven navigation and targeting, designed for government and industry customers. The company emphasizes vertical integration—owning or controlling multiple stages of the supply chain from raw materials to final product (maquoketa.net via search snippet). Their CTO specializes in phased array systems and RF design (YC page). The GitHub organization maintains internal forks of PX4-Autopilot, QGroundControl, MAVLink, HackRF (software radio), AM32 motor firmware, and Aviateur (OpenIPC FPV ground station), indicating a full-stack approach from flight controller firmware through ground control and RF communications (GitHub, Maquoketa-Research org).

**Differentiation:**
- Built entirely in the USA per company messaging (maquoketa.net via search snippet), addressing supply chain security concerns in defense procurement
- Autonomy-first architecture vs. operator-dependent FPV drones
- Vertical integration vs. systems integrators assembling COTS components
- Positioned as lower-cost alternative to incumbent solutions like AeroVironment's Switchblade ($6,000+ per unit for Switchblade 300) and Anduril's Altius

**Business Model:** No public pricing found. [Inferred]: Most likely monetization is per-unit hardware sales to DoD and allied government customers, potentially with recurring software/autonomy stack licensing, given the defense procurement model and emphasis on manufacturing.

**TAM/SAM:** The global loitering munition market was valued at $5.36 billion in 2025 and is projected to reach $13.26 billion by 2030 at 19.9% CAGR (MarketsandMarkets, 2025 via search snippet). Fortune Business Insights projects $24.13 billion by 2034 at 20.65% CAGR. The U.S. Army alone requested ~$70 million for loitering munition procurement in fiscal 2026 (DefenseScoop, Jun 2025). [Inferred]: SAM is the U.S. DoD small-UAS/loitering munition procurement budget, currently in the hundreds of millions annually and growing rapidly.

**GTM / Distribution:** [Inferred]: Most likely distribution is through DoD procurement programs (e.g., LASSO, Replicator), OTA contracts, and direct engagement with military branches. The Elk Grove Village, IL location near defense-industrial manufacturing corridors and the "built in the USA" messaging suggest ITAR-compliant, domestic-supply-chain positioning for NDAA-compliant procurement.

## Defensibility

- **Technical complexity:** Full-stack drone design spanning airframe, propulsion (AM32 firmware fork), flight control (PX4 fork), RF communications (HackRF, custom phased array), computer vision, and ground control requires integration across multiple engineering disciplines (GitHub repos).
- **Vertical integration:** Company explicitly claims control over multiple supply chain stages (maquoketa.net via search snippet), which if achieved creates manufacturing and cost advantages.
- **ITAR/regulatory barriers:** Defense hardware exports and procurement carry significant regulatory barriers that limit competition from non-US and non-cleared entities.
- [Inferred]: No network effects or data moat at this stage. Potential moat could develop via proprietary autonomy performance data from field deployments, but is unproven.

**Market structure:** Large incumbents (Lockheed, Raytheon, Northrop) face business model cannibalization risk—their revenue models depend on expensive precision munitions ($100K+ per unit), creating economic disincentive to aggressively compete in the sub-$10K expendable drone segment. AeroVironment occupies this space but faces scaling constraints (Defense News, Oct 2025). [Inferred]: The structural barrier is unit economics incompatibility for traditional primes.

**Commoditization risk:** FPV attack drones are widely commoditized in Ukraine, with dozens of manufacturers producing similar platforms. Autonomy software stack is the key differentiator, but open-source autopilot projects (PX4, ArduPilot) lower the barrier. Well-funded competitors Anduril and Shield AI are investing heavily in autonomy. The RF/phased array capability (if proprietary) could provide differentiation in contested electromagnetic environments.

## Market & Traction

**Traction signals:**
- No revenue, user, or growth metrics found in public sources
- LinkedIn company page exists (linkedin.com/company/maquoketa-research/); follower count not retrievable
- No company Twitter/X account found
- GitHub organization: 9 public repositories, all forks of existing open-source projects; no original repos with significant star counts (GitHub, Maquoketa-Research)
- 0 job openings listed (YC page)
- Website returned 403 at time of research; tagline from search snippet: "Setting a New Bar in Aerial Warfare"
- No press coverage found in named publications
- No Product Hunt launch found
- Founded 2025 (YC page)

**Competitive landscape:**

| Competitor | Funding | Revenue | Key Differentiator vs. Maquoketa |
|------------|---------|---------|----------------------------------|
| AeroVironment (AVAV) | Public company; acquired BlueHalo for $3.5B (2025) | Public company revenue | Incumbent with $990M Army contract for Switchblade; scaling to 1,200 units/month (DefenseScoop, 2024; Defense News, Oct 2025) |
| Anduril Industries | $6.9B total raised; $30.5B valuation (TechCrunch, Jun 2025) | Revenue unknown | Altius loitering munitions; Arsenal-1 factory ($1B, 5M sqft) for tens of thousands of units annually starting Jul 2026 (National Defense Magazine, Sep 2025) |
| Shield AI | ~$3.1B equity raised; $12.7B valuation (Fortune, Mar 2026) | Projecting $540M+ in 2026 (Fortune, Mar 2026) | Hivemind AI autonomy platform; larger drone platforms vs. expendable munitions |
| Helsing | $1.37B raised (multiple rounds, 2021-2025 via search snippet) | Revenue unknown | HX-2 loitering munition; €268M German government contract; 4,000+ HF-1s and 6,000+ HX-2s for Ukraine (DefenseScoop via search snippet) |

**Why now:**
- The U.S. Army's fiscal 2026 budget proposes equipping infantry brigades with loitering munitions at scale (DefenseScoop, Jun 2025)
- Ukraine conflict has validated expendable autonomous drones as decisive battlefield systems, driving urgent DoD procurement (National Defense Magazine, Sep 2025)
- Germany committed ~$632M to loitering munition contracts in 2025, signaling NATO-wide demand shift (Defense News, Feb 2026)
- [Inferred]: The enabling change is a doctrinal shift—Ukraine demonstrated that cheap autonomous drones can neutralize armored vehicles costing orders of magnitude more, creating urgency in Western defense procurement for domestic manufacturing capacity.

## Founders & Team

**Evan Yeager** — Co-Founder & CEO
- BS in EECS, UC Berkeley (LinkedIn)
- Previously: SpiderRock (LinkedIn via search snippet); software developer at Stylis.AI (F6S)
- Twitter/X: @evan_yeager — follower count not retrievable
- LinkedIn: linkedin.com/in/evanyeager — "CEO @ Maquoketa (YC P26)", 500+ connections
- GitHub: No personal public repos found

**Alejandro Hernandez** — Co-Founder & CTO
- BS in EECS, UC Berkeley; researcher at Berkeley Wireless Research Center (LinkedIn via search snippet)
- Specializes in phased array systems and RF design (YC page)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/alejandrohernandez2535 — "Berkeley Wireless Research Center"
- GitHub: No personal public repos found

**David Muchow** — Co-Founder & Chief Operations Officer
- Background details limited in public sources; associated with Maquoketa Research (YC page)
- Twitter/X: No public account found
- LinkedIn: Not definitively identified among multiple profiles with the same name
- GitHub: No public repos found

**Aidan Williams** — Co-Founder & Chief Mechanical Engineer
- Background details limited in public sources; associated with Maquoketa Research (YC page)
- Twitter/X: No public account found
- LinkedIn: Not definitively identified among multiple profiles with the same name
- GitHub: No public repos found

**Co-founder relationship:** Evan Yeager and Alejandro Hernandez both studied EECS at UC Berkeley (LinkedIn profiles), indicating a shared university background. No overlap data found for Muchow or Williams.

**Founder-market fit:** Yeager (EECS, software/systems) and Hernandez (RF/phased array, Berkeley Wireless Research Center) bring complementary technical backgrounds directly relevant to autonomous drone electronics and communications design. Williams brings mechanical engineering for airframe design. The team covers the core disciplines needed for full-stack drone development. No advisors, board members, or notable investors beyond YC were found.

## Key Risks

**Defense procurement cycle risk:** U.S. DoD procurement programs (LASSO, Replicator) have multi-year timelines with extensive testing and certification requirements. A 5-person pre-seed startup may face 18-36+ month sales cycles before meaningful contract revenue, creating cash-flow pressure between YC funding and first contract awards.

**Incumbent competitive pressure:** AeroVironment holds a $990M Army contract and is scaling to thousands of Switchblades per month (Defense News, Oct 2025). Anduril is building a $1B factory for tens of thousands of autonomous systems annually (National Defense Magazine, Sep 2025). Both have established DoD relationships, security clearances, and production infrastructure.

**Regulatory and compliance burden:** ITAR compliance, security clearances, and DoD contractor qualification requirements impose significant fixed costs on small teams. Export controls limit addressable market to allied nations.

**Hardware manufacturing scale-up:** Transitioning from prototype to volume production of hardware systems with custom electronics (phased array, RF) requires capital-intensive manufacturing infrastructure that is difficult to fund at pre-seed.

**Name disambiguation:** "Maquoketa" is also a city in Iowa; search results frequently return unrelated entities (schools, utilities, banks), which may reduce discoverability and complicate brand building in government procurement.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $5.36B in 2025, projected $13.26B by 2030 at 19.9% CAGR (MarketsandMarkets, 2025 via search snippet) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Evan Yeager (CEO): UC Berkeley EECS, SpiderRock. Alejandro Hernandez (CTO): UC Berkeley EECS, Berkeley Wireless Research Center. David Muchow (COO): limited public data. Aidan Williams (Chief Mechanical Engineer): limited public data. |
| Competitors | AeroVironment (public; $990M Army Switchblade contract, scaling to 1,200 units/month), Anduril ($6.9B raised, $30.5B valuation, Altius munitions), Shield AI ($3.1B+ raised, $12.7B valuation, $540M projected 2026 revenue), Helsing ($1.37B raised, €268M German contracts) |
| Moat Signals | No public data found |
| Risk Factors | Defense procurement cycle length, incumbent competitive pressure from AeroVironment/Anduril, hardware manufacturing scale-up capital requirements |
| Founder Reach | Evan Yeager: Twitter @evan_yeager (count not retrievable), LinkedIn 500+ connections. Others: no public social accounts found. |
| Distribution Signals | No public data found |
| Emails | No public data found |
