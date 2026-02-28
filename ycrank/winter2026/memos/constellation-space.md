# Constellation Space

> AI for space mission assurance.

| Field | Value |
|-------|-------|
| Website | https://constellationspace.ai/ |
| YC Page | https://www.ycombinator.com/companies/constellation-space |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Analytics |
| Team Size | 4 |
| Location | Seattle, WA (YC page) |
| Tags | Space Exploration, Satellites, Enterprise Software, Infrastructure, AI |
| YC Partner | Jared Friedman (YC page) |
| Emails | hello@constellation-io.com (company website and YC page) |

## The Idea

**Problem:** As satellite constellations scale from hundreds of nodes to tens of thousands (10,000 in orbit today, 70,000+ projected by 2030 per the company's Launch HN post), traditional ground-based orchestration breaks down. By the time a degrading satellite RF link is detected through reactive monitoring, data has already been lost. The company states that network failures cost the satellite industry $2.5 billion per year (Constellation Space LinkedIn page via search snippet). Current approaches rely on reactive monitoring — operators detect issues only after degradation has occurred — and cannot keep pace with the volume of telemetry from mega-constellations.

**Approach:** ConstellationOS is a cloud-based operating system that uses physics-informed neural networks to predict satellite link failures 3–5 minutes before they occur with >90% accuracy (company website). The system ingests approximately 100,000 telemetry messages per second from satellites, ground stations, weather radar, IoT humidity sensors, and space weather monitors (Launch HN post, Hacker News, Jan 2026). When degradation is predicted, the system autonomously reroutes traffic in under 2 seconds, maintaining zero-downtime handoffs (company website). The physics layer uses ITU atmospheric standards (P.676 for tropospheric attenuation, P.618 for rain fade), orbital propagation, and KP index tracking for ionospheric scintillation. The ML layer employs federated learning where each constellation trains local models on its own data without sharing raw telemetry, enabling transfer learning across LEO/MEO/GEO operations (Launch HN post, Hacker News, Jan 2026).

**Differentiation:** Unlike general-purpose satellite operations platforms (e.g., Cognitive Space for task scheduling, Quindar for ground systems management), Constellation Space focuses specifically on predictive link-failure prevention and autonomous traffic rerouting. Compared to Lockheed Martin's Horizon C2 and Kratos' OpenSpace — which are primarily command-and-control and ground-station management tools — ConstellationOS operates at the network routing layer with sub-second autonomous response. The company offers universal API compatibility across any constellation (Starlink, Kuiper, custom systems) and any cloud environment (AWS, Azure, on-premise) (company website). The federated learning approach differentiates from centralized ML platforms by enabling multi-operator intelligence sharing without exposing proprietary telemetry data.

**Business Model:** No public pricing page or pricing tiers were found on the company website. The Launch HN post (Hacker News, Jan 2026) mentioned a seed round expected to "open up" within 4 weeks of the post. [Inferred]: Most likely monetization path is enterprise SaaS licensing to constellation operators (per-node or per-constellation tiered pricing), given the B2B enterprise software positioning and design-partner go-to-market approach.

**TAM/SAM:** The satellite ground station market was valued at $40.99 billion in 2025 and is projected to reach $82.72 billion by 2030, growing at a 15.1% CAGR (MarketsandMarkets, 2025 via search snippet). The satellite operation service market was estimated at $38.11 billion in 2025 with a 10.9% CAGR (Research and Markets, 2025 via search snippet). No public SAM data specific to the predictive satellite network management software sub-segment was found.

**GTM / Distribution:** The company is currently in a "design partner phase with commercial and government operators" (YC page). The Launch HN post noted testing with "defense and commercial partners" but did not disclose specific customer names. The company has a listed NVIDIA partnership (company website). [Inferred]: Most likely distribution path is direct enterprise sales to satellite constellation operators and defense/government agencies, leveraging the founders' SpaceX, Blue Origin, and NASA networks. Government contracts (e.g., via SBIR/STTR) represent a plausible early revenue path given comparable companies in the space (Cognitive Space won a $900K NOAA contract and ~$5M in SDA awards).

## Defensibility

The technical complexity of building physics-informed neural networks that combine atmospheric propagation models (ITU standards), orbital mechanics, and space weather data into a real-time prediction system operating at 100,000 messages/second represents a meaningful engineering barrier. The federated learning architecture — enabling multi-constellation model training without sharing raw telemetry — could create a data network effect over time: as more operators join, the cross-orbit transfer learning models improve for all participants, while no single operator's telemetry is exposed.

Switching costs could develop as operators integrate ConstellationOS into their real-time routing infrastructure, given that mission-critical space systems require extensive testing and validation before deployment.

**Market structure:** Large defense primes (Lockheed Martin, Kratos) that dominate satellite ground systems are structured around hardware-integrated, monolithic ground station contracts. Their revenue models are tied to long-cycle government procurement and proprietary hardware bundles. A pure-software, cloud-native, constellation-agnostic product would cannibalize their existing integration services revenue and conflict with their hardware-bundling sales channel. Additionally, constellation operators (SpaceX, Amazon Kuiper) build proprietary internal tools optimized for their own systems, creating no incentive to develop a vendor-neutral, cross-constellation solution.

**Commoditization risk:** General-purpose ML platforms or cloud providers (AWS, Azure) could build satellite telemetry anomaly detection tools. However, the domain-specific physics layer (atmospheric propagation, orbital mechanics, space weather integration) and the operational requirement for sub-second autonomous routing in a mission-critical environment create specialization barriers. Cognitive Space and Quindar are the closest funded startups but focus on different layers (task scheduling and ground systems respectively, rather than predictive link management).

## Market & Traction

**Traction signals:**
- Design partner phase with defense and commercial operators (YC page; no specific names disclosed)
- NVIDIA partnership (company website)
- Launch HN post: "Launch HN: Constellation Space (YC W26) – AI for satellite mission assurance" (Hacker News, item 46721933, Jan 2026)
- Company Twitter/X: @constspace (x.com/constspace) — follower count not retrievable
- Company LinkedIn: linkedin.com/company/constellation-io — follower count not retrievable
- UT Austin Computer Science department alumni spotlight on co-founder Omeed Tehrani mentioning Constellation (cs.utexas.edu, 2025)
- Active job posting for Software Engineer on YC job board (ycombinator.com/companies/constellation-space/jobs)
- No Product Hunt launch found
- No app store or Chrome extension listings found
- No public revenue figures found
- No public Discord or Slack community confirmed for Constellation Space specifically

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Constellation Space |
|---|---|---|---|
| Cognitive Space | $11.2M total (Tracxn, 2025 via search snippet) | Revenue unknown; $900K NOAA contract + ~$5M SDA awards (Cognitive Space press releases, 2024) | Focuses on automated satellite tasking and scheduling optimization rather than link-failure prediction and traffic rerouting |
| Quindar | $27M total ($18M Series A, Nov 2025) (SpaceNews, Nov 2025 via search snippet) | Revenue unknown | Cloud-based ground systems and mission control SaaS; broader ground-ops focus vs. Constellation's predictive link management |
| Apolink (YC) | $4.3M seed at $45M post-money valuation (TechCrunch, Jul 2025) | Pre-revenue; $140M in LOIs (TechCrunch, Jul 2025) | Building a physical relay satellite constellation (32 sats) for LEO connectivity uptime; hardware-based approach vs. Constellation's software-only platform |
| Kratos Defense (public) | Public company | $1.347B FY2025 revenue (Kratos earnings release, Feb 2026 via search snippet) | OpenSpace virtualized ground station software; incumbent with hardware-integrated, monolithic approach vs. Constellation's cloud-native, constellation-agnostic software |
| Lockheed Martin (public) | Public company | Revenue unknown for satellite software division specifically | Horizon C2 and Compass mission planning; traditional defense contractor with long procurement cycles vs. Constellation's startup agility |

**Why now:** [Inferred]: Several converging factors open this opportunity: (1) The rapid scaling of mega-constellations — Starlink alone operates thousands of satellites with plans for tens of thousands more, and Amazon's Project Kuiper began deploying in 2025 — creates network management complexity that legacy ground-based tools cannot handle. (2) The maturation of physics-informed neural networks and federated learning techniques now enables real-time prediction at the required scale and accuracy. (3) The proliferation of commercial LEO constellations beyond SpaceX (OneWeb, Kuiper, Telesat Lightspeed) creates a multi-operator market for vendor-neutral management tools, whereas previously the market was dominated by vertically integrated operators building proprietary solutions.

## Founders & Team

**Kamran Majid** — Co-founder & CEO
- Education: University of Illinois Urbana-Champaign (LinkedIn)
- Previously: Software Engineer at SpaceX — created toolset to optimize the Starlink ground network and wrote simulation algorithms to prioritize low-latency ground assets (LinkedIn via search snippet); NASA — worked on the GDC (Geospace Dynamics Constellation) mission concept, built data engineering tools for predictive analyses (LinkedIn via search snippet); Capital One (LinkedIn)
- Twitter/X: No confirmed personal account found (company account: @constspace)
- LinkedIn: linkedin.com/in/kamran-majid — 500+ connections (LinkedIn via search snippet)
- GitHub: No public repos found

**Raaid Kabir** — Co-founder & CTO
- Education: Computer Engineering degree (LinkedIn via search snippet)
- Previously: Embedded Flight Software Engineer at Blue Origin (New Glenn test infrastructure) (LinkedIn via search snippet); prior roles at Google, Prudential, Capital One (C1), and STR (LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/raaid-kabir — "Embedded Flight SWE @ Blue Origin | Prev. @ Prudential, C1, Google, STR" (LinkedIn via search snippet)
- GitHub: No public repos found

**Omeed Tehrani** — Co-founder & Head of Product
- Education: MS and BS in Computer Science, University of Texas at Austin; W.D. Blunk Endowed Presidential Scholarship (2021) (personal website, omeedtehrani.com); research in RobIN Laboratory (transfer learning, multi-task RL, Decision Transformers) and AMRL (autonomous vehicle control) (personal website)
- Previously: AI infrastructure role at Capital One (personal website); co-founded Nera, an AI trip advisor for students (started as dating app, pivoted, then dissolved) (UT Austin CS department profile, 2025); published research on autonomous vehicle drifting (presented at Amazon AI Symposium, 2024) and GigaAPI multi-GPU programming (arXiv:2504.01266) (personal website)
- Twitter/X: @omeedtehrani (x.com) — follower count not retrievable
- LinkedIn: No public headline retrieved beyond research background
- GitHub: github.com/omeedcs — repositories include MemPharos, RemoteSyncFS, fma-genre-detection (GitHub via search snippet); star counts not retrieved

**Laith Altarabishi** — Co-founder & Head of AI
- Education: MS in Electrical and Computer Engineering, University of Texas at Austin (LinkedIn via search snippet)
- Previously: Software Engineer at Capital One (LinkedIn via search snippet)
- Interest areas: intersection of ML and computer systems (LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/laithaustin — "SWE @ Capital One | MS ECE @ UT Austin" (LinkedIn via search snippet)
- GitHub: No public repos found

**Co-founder relationship:** Omeed Tehrani and Laith Altarabishi both attended the University of Texas at Austin (CS and ECE programs respectively) and both worked at Capital One, indicating prior acquaintance through shared employer and university. Kamran Majid and Raaid Kabir both worked at Capital One (C1 appears in both LinkedIn headlines), providing another shared employer connection. The Launch HN post describes collective experience at SpaceX, Blue Origin, and NASA across the founding team.

**Founder-market fit:** The team combines direct satellite operations experience (Kamran at SpaceX/Starlink and NASA, Raaid at Blue Origin/New Glenn) with ML research depth (Omeed's RL and systems research at UT Austin, Laith's ML/ECE background). Kamran specifically worked on Starlink ground network optimization and simulation algorithms for low-latency ground assets — directly relevant to the satellite link prediction problem Constellation is solving. Raaid's embedded flight software experience at Blue Origin provides hardware-level understanding of satellite systems. Omeed's research on multi-GPU programming (GigaAPI) and distributed systems is relevant to the high-throughput telemetry processing requirements.

## Key Risks

**Prediction accuracy limitations at extended time horizons:** The founders acknowledged in their Launch HN post (Hacker News, Jan 2026) that prediction accuracy degrades beyond 5-minute horizons and that fast fading events (<5 seconds) remain challenging. If operators require longer prediction windows or coverage of rapid-onset failure modes, the current technical approach may fall short of customer requirements.

**Limited labeled training data for rare failure cases:** The founders explicitly noted limited labeled data for rare failure scenarios (Launch HN post, Hacker News, Jan 2026). Satellite link failures in novel orbital regimes or under unusual atmospheric conditions may not be well-represented in training data, creating accuracy gaps in precisely the high-consequence scenarios operators most need to predict.

**Government and defense procurement cycle dependency:** The company is in design-partner phase with defense and commercial operators. Space/defense procurement cycles are typically 12–24+ months, requiring significant runway and patience. Comparable company Quindar took from founding through YC to a $27M Series A before scaling government traction; Cognitive Space required multiple rounds totaling $11.2M plus direct government contracts to reach meaningful revenue.

**Name disambiguation and competitive confusion:** Multiple companies use "Constellation" in the space industry, including Constellation Software (public, $50B+ market cap), Constellation Research (analyst firm), and Constellation Network (blockchain). The YC directory itself lists two entries — "Constellation Space" and "Constellation" — both appearing to refer to this company. This creates potential brand confusion in a niche market where credibility and recognition are essential for enterprise sales.

**Federated learning orchestration complexity across security boundaries:** The founders acknowledged the complexity of federated learning orchestration across security boundaries as a major challenge (Launch HN post, Hacker News, Jan 2026). Defense and commercial operators have strict data compartmentalization requirements; failure to solve cross-boundary ML coordination could limit the multi-operator data network effect that underpins the product's long-term value proposition.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $40.99B satellite ground station market in 2025 → $82.72B by 2030, 15.1% CAGR (MarketsandMarkets, 2025 via search snippet); $38.11B satellite operation service market in 2025, 10.9% CAGR (Research and Markets, 2025 via search snippet) |
| SAM | No public data found for the predictive satellite network management software sub-segment |
| Traction | Design partner phase with defense and commercial operators (YC page); NVIDIA partnership (company website); Launch HN post (Hacker News, Jan 2026); active YC job posting for Software Engineer |
| Revenue Signal | No public data found |
| Founders | Kamran Majid (CEO): UIUC, ex-SpaceX (Starlink ground optimization), ex-NASA (GDC mission). Raaid Kabir (CTO): ex-Blue Origin (embedded flight SWE, New Glenn), ex-Google. Omeed Tehrani (Head of Product): UT Austin MS/BS CS, ex-Capital One, RL researcher. Laith Altarabishi (Head of AI): UT Austin MS ECE, ex-Capital One. |
| Competitors | Cognitive Space ($11.2M raised, revenue unknown, automated satellite tasking vs. link-failure prediction); Quindar ($27M raised, revenue unknown, ground systems SaaS vs. predictive routing); Apolink ($4.3M raised, pre-revenue, hardware relay constellation vs. software-only); Kratos (public, $1.347B FY2025 revenue, incumbent ground station systems) |
| Moat Signals | Federated learning architecture enabling cross-constellation intelligence without sharing raw telemetry; domain-specific physics layer (ITU atmospheric models, orbital mechanics); 100K msg/sec real-time processing requirement creates engineering barrier |
| Risk Factors | Prediction accuracy degrades beyond 5-min horizons (founder-acknowledged), limited labeled data for rare failure cases (founder-acknowledged), defense procurement cycle dependency |
| Founder Reach | Kamran Majid: Twitter not confirmed, LinkedIn 500+, GitHub not found. Raaid Kabir: Twitter not found, LinkedIn profile found, GitHub not found. Omeed Tehrani: Twitter @omeedtehrani (count not retrievable), LinkedIn profile found, GitHub github.com/omeedcs (star counts not retrieved). Laith Altarabishi: Twitter not found, LinkedIn profile found, GitHub not found. Company: @constspace on X (count not retrievable) |
| Distribution Signals | Launch HN (Hacker News, Jan 2026); no Product Hunt launch found; no app store or extension listings |
| Emails | hello@constellation-io.com (company website and YC page) |
