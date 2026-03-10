# 9 Mothers

> AI weapon systems

| Field | Value |
|-------|-------|
| Website | https://9mothers.com |
| YC Page | https://www.ycombinator.com/companies/9-mothers-corporation |
| Batch | Spring 2026 (X26) |
| Industry | Industrials / Industrials -> Defense |
| Team Size | ~8 (RocketReach via search snippet) |
| Location | Austin, TX, USA |
| Tags | Hard Tech, Hardware, Drones, GovTech, Aerospace |
| YC Partner | Garry Tan |
| Emails | No public data found |

## The Idea

**Problem:** Small, cheap Group 1 suicide drones (under 20 lbs) are proliferating on modern battlefields and pose an acute threat to vehicles, forward operating bases, and dismounted personnel. Current counter-drone solutions fall into two categories: expensive interceptor systems (e.g., Anduril Roadrunner, missile-based systems) that create an unfavorable cost exchange ratio against cheap drones, and electronic warfare/jamming systems (e.g., DroneShield, D-Fend) that can be circumvented by autonomous or fiber-optic-guided drones that do not rely on RF links. The U.S. Army alone requested over $500M for counter-UAS programs in its FY2025 budget (DefenseScoop, March 2024).

**Approach:** EDDA is a small, low-power, low-cost, fully autonomous-capable kinetic counter-drone turret. It uses AI for detection, tracking, and engagement of Group 1 drones. It is designed to be mounted on vehicles, installed at bases, or carried by personnel. The system addresses the cost exchange ratio problem by using kinetic projectiles rather than expensive interceptors.

**Differentiation:** EDDA competes most directly with Allen Control Systems' Bullfrog, which also uses an autonomous kinetic turret approach but integrates with heavier existing weapon systems (M240, M2, M134) and targets Groups 1–3. EDDA emphasizes smaller size, lower power consumption, lower cost, and portability — positioning it for broader distribution down to the individual soldier level. Compared to directed-energy systems like Epirus Leonidas (high-power microwave) and electronic warfare systems like DroneShield's DroneSentry (RF jamming), EDDA offers a kinetic kill capability that works against autonomous and fiber-optic-guided drones that are immune to RF countermeasures.

**Business Model:** No pricing page or revenue data is publicly available. [Inferred]: Most likely monetization path is hardware unit sales plus potential recurring software/maintenance contracts, sold through DoD procurement channels (SBIR/STTR, OTA contracts, direct acquisition programs). Government defense contracts are the standard revenue model for C-UAS companies at this stage.

**TAM/SAM:** The counter-UAS market is estimated at $6.64B in 2025 growing to $20.31B by 2030 at 25.1% CAGR (MarketsandMarkets, 2025 via search snippet). Other estimates range from $2.08B–$6.64B for 2025 depending on scope definition, with projections of $14B–$26B by 2030–2035 across multiple research firms (Precedence Research, Market.us, Fortune Business Insights, Grand View Research — all via search snippets). [Inferred]: The serviceable segment for small, portable kinetic C-UAS turrets is a subset of the overall market — likely the "point defense" and "mobile/dismounted" segments of the kinetic effector category, which would represent a fraction of the total C-UAS TAM.

**GTM / Distribution:** [Inferred]: Most likely distribution path is U.S. Department of Defense procurement, starting with SBIR/STTR awards, OTA contracts, or programs like xTechOverwatch (which competitor ACS won in February 2026). The company's YC batch and investor base (Rsquared, Sterling Road, Theory Forge Ventures — per PitchBook via search snippet) suggest a venture-backed defense-tech go-to-market. The Ashby hiring page (jobs.ashbyhq.com/9-mothers) signals intention to scale the team.

## Defensibility

The core technical challenge is building an AI system that can autonomously detect, track, and kinetically engage small, fast-moving drones with sufficient accuracy and speed in contested environments. This requires integration of computer vision, real-time tracking algorithms, and precision mechanical systems — a hardware-software integration challenge with a meaningful development cycle. If deployed at scale with U.S. military units, operational data from real engagements would create a data advantage for improving detection and tracking algorithms.

**Market structure:** Large defense primes (Raytheon, Lockheed Martin, Northrop Grumman) have existing C-UAS programs but their solutions tend to be large, expensive, and optimized for fixed-site or vehicle-mounted use on major platforms. Building a small, low-cost, soldier-portable system requires a fundamentally different design philosophy and unit economics model that conflicts with primes' incentive to sell higher-margin, larger systems. Additionally, defense primes' sales cycles and program structures are poorly suited to rapid iteration on AI/ML-driven autonomous systems. However, primes could acquire a startup like 9 Mothers to fill this capability gap, as Axon did with Dedrone in October 2024.

**Commoditization risk:** Allen Control Systems (Bullfrog, $30M raised) and Sentradel are building similar autonomous kinetic turret systems. ACS is further along with U.S. Army and SOCOM contracts. The fundamental concept of an AI-guided turret is replicable; the defensibility lies in execution speed, algorithm performance, manufacturing cost optimization, and government contract relationships.

## Market & Traction

**Traction signals:**
- YC Spring 2026 batch member (YC page)
- Investors: Rsquared, Sterling Road, Theory Forge Ventures (PitchBook via search snippet)
- Company X/Twitter: @9Mothers, ~60 followers, joined October 2024 (search index snippet)
- Russell Smith X/Twitter: @rhs, ~4,049 followers (search index snippet)
- LinkedIn company page: linkedin.com/company/9-mothers (follower count not retrieved)
- GitHub org: github.com/9mothers — 4 followers, 2 public repos; `udptoxy` (Rust, 2 stars, last updated March 2026) (GitHub)
- Russell Smith GitHub (ukd1): 277 followers, top repo `node-twilio` with 176 stars (GitHub)
- Social presence also on Bluesky (@9mothers.com) and Truth Social (9mothers) (GitHub org profile)
- Hiring via Ashby: jobs.ashbyhq.com/9-mothers (GitHub org profile)
- 0 open positions listed on YC Work at a Startup page (YC)
- No press coverage, Product Hunt listing, or community channels found
- No revenue or customer data publicly available
- Website not fully accessible at time of research (Framer JS-rendered site)

**Competitive landscape:**

| Company | Approach | Funding | Revenue | Differentiator vs. 9 Mothers |
|---------|----------|---------|---------|-------------------------------|
| Allen Control Systems (Bullfrog) | Autonomous kinetic turret (Groups 1–3) | $30M Series A (March 2025, Craft Ventures) (BusinessWire) | Not disclosed; U.S. Army + SOCOM contracts | Broader weapon integration (M240, M2, M134); Groups 1–3 vs. EDDA's Group 1 focus; further along in government procurement |
| Anduril Industries | Autonomous interceptor drones (Roadrunner, Anvil) | Raising $4B at ~$60B valuation (OC Register, March 2026) | ~$2.1B est. 2025 (Sacra via search snippet) | Platform-scale company; interceptor approach vs. turret; $642M USMC contract |
| Epirus | Directed energy (high-power microwave, Leonidas) | $250M Series D (TechCrunch, March 2025); >$550M total | Not disclosed; $66M Army contract | Non-kinetic swarm defeat; different kill mechanism; larger/more expensive |
| DroneShield (ASX: DRO) | Electronic warfare (RF jamming/disruption) | Publicly traded; AU$210M cash | AU$216.5M FY2025 revenue (Proactive Investors) | Public company; EW/jamming approach; ineffective against autonomous/fiber-optic drones |
| Sentradel | Autonomous kinetic turret (Group 1, including fiber-optic FPV) | Early stage, not disclosed | Pre-revenue | Most similar concept to EDDA; emphasizes fiber-optic FPV drone capability; earlier stage |

**Why now:** [Inferred]: Several converging catalysts opened this opportunity in 2024–2025: (1) The Ukraine-Russia conflict demonstrated the lethality of cheap Group 1 FPV suicide drones against conventional military assets, making C-UAS an urgent priority across NATO militaries. (2) AI/computer vision capabilities crossed a performance threshold enabling real-time autonomous tracking and engagement of small, fast-moving targets — a task previously requiring expensive radar-guided systems. (3) The emergence of autonomous and fiber-optic-guided drones has undermined the effectiveness of electronic warfare/jamming approaches, creating demand specifically for kinetic effectors. (4) Defense-tech venture funding nearly doubled to $49.1B in 2025 (search snippet), reflecting increased capital availability for startups in this space. (5) The U.S. DoD has explicitly prioritized low-cost, scalable C-UAS solutions to address the unfavorable cost exchange ratio.

## Founders & Team

**Russell Smith** — Co-Founder & CEO
- BSc Computer Science, Staffordshire University, UK (1999–2003) (RocketReach via search snippet)
- Previously Co-Founder & CTO of Rainforest QA (YC S12), a no-code testing platform that raised $41.2M total including a $25M Series B led by SVB (January 2018) and reached ~$25.7M revenue with ~141 employees (Crunchbase, GetLatka via search snippets). No public acquisition or exit found; Rainforest QA appears to still be operating with Fred Stevens-Smith as CEO.
- Managing Director at Beyond Equity Partners (Crunchbase via search snippet)
- Founder of UKD1 Limited (UK-based consulting: development, ops, architecture, capacity planning)
- Recurse Center alumnus (A1'22) (GitHub bio)
- Twitter/X: @rhs — ~4,049 followers (search index snippet)
- LinkedIn: linkedin.com/in/russellhowardsmith
- GitHub: github.com/ukd1 — 277 followers; top repo `node-twilio` (176 stars) (GitHub)

**Roman Khomenko** — Co-Founder (CTO per YC tagline "Builder of Thinking Machines")
- MSc Computer Science, Kharkiv National University of Radioelectronics, Ukraine (2002–2007) (GetProg via search snippet)
- Police of Ukraine (2001–2009) (GetProg via search snippet)
- Data Scientist at DataRobot (2015–2016) (GetProg via search snippet)
- Senior Data Scientist → Staff Engineer / Lead AI Data Scientist at Rainforest QA (~2016–2024, ~8 years); worked on computer-vision-driven screenshot segmentation and production ML pipelines (The Org, GetProg via search snippets)
- Domain expertise: ML/AI (PyTorch, TensorFlow, JAX, Keras), computer vision, deep learning, production MLOps
- Twitter/X: @khomenko_roman — ~10 followers (low confidence this is the correct account; search snippet)
- LinkedIn: linkedin.com/in/dowakin
- GitHub: github.com/roman-dowakin — 7 followers, no public repos; contributions to Keras, Hammerspoon, Dateparser (GitHub, aggregator via search snippet)

**Bogdan Pyzh** — Co-Founder & COO
- Education: No public data found
- Previously Security Consultant → EMEA Practice Lead at Leviathan Security Group (Seattle, WA) — information security consulting (penetration testing, secure code review, IoT security, vCISO) (Wiza, Adapt.io via search snippets)
- Domain expertise: cybersecurity, penetration testing, security operations
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/bogdan-pyzh-b5b77388
- GitHub: No public account found
- Keybase: keybase.io/bpyzh (11 devices, 17 followers) (Keybase)

**Co-founder relationship:** Russell Smith and Roman Khomenko worked together at Rainforest QA for approximately 8 years (~2016–2024), where Smith was CTO and Khomenko was a senior/staff-level AI engineer. No documented prior overlap with Bogdan Pyzh was found.

**Founder-market fit:** Smith brings a decade of experience building and scaling a venture-backed startup (Rainforest QA, $41.2M raised) with deep infrastructure and systems engineering expertise. Khomenko brings production AI/ML and computer vision experience — directly relevant to the autonomous detection and tracking system at EDDA's core. Pyzh's cybersecurity and penetration testing background at Leviathan Security Group is relevant to building hardened defense systems resistant to adversarial attacks. The team combines startup scaling experience, AI/computer vision technical depth, and security domain knowledge. No advisors, board members, or notable angel investors were identified in public sources beyond the institutional investors (Rsquared, Sterling Road, Theory Forge Ventures).

## Key Risks

**Allen Control Systems competitive positioning:** ACS is building a directly comparable autonomous kinetic C-UAS turret (Bullfrog), has raised $30M (BusinessWire, March 2025), has won a U.S. Army xTechOverwatch competition (BusinessWire, February 2026), secured a SOCOM maritime contract (Defense One, September 2025), and tripled its Austin operations in February 2026 (BusinessWire). ACS is meaningfully ahead in government procurement relationships and has a broader weapon integration capability (Groups 1–3 vs. EDDA's Group 1 focus).

**Defense procurement cycle risk:** U.S. DoD procurement is lengthy and unpredictable. Even with a working product, securing contracts requires navigating SBIR/STTR programs, OTA authorities, testing and evaluation cycles, and program-of-record transitions. No public evidence of government contracts, SBIR awards, or testing partnerships for 9 Mothers was found.

**Hardware manufacturing scale-up:** EDDA is a physical hardware product requiring manufacturing, supply chain management, and quality control at defense-grade standards. The founding team's background is primarily in software/AI, not hardware manufacturing or defense production. Scaling from prototype to production-ready defense hardware is a distinct challenge from software development.

**ITAR/export control complexity:** AI weapon systems are subject to International Traffic in Arms Regulations (ITAR) and potentially additional autonomous weapons restrictions. Compliance adds cost, limits international market access, and introduces regulatory risk. Autonomous weapon systems also face evolving policy scrutiny regarding human-in-the-loop requirements.

**Team domain transition:** While the founders have strong software, AI, and cybersecurity credentials, none have publicly documented prior experience in defense contracting, military systems integration, or weapons engineering. The transition from QA/cybersecurity software to autonomous weapon systems represents a significant domain shift.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $6.64B (2025) → $20.31B by 2030, 25.1% CAGR (MarketsandMarkets via search snippet); other estimates range $2B–$7B for 2025 |
| SAM | No public data found for the specific portable kinetic C-UAS turret segment |
| Traction | YC X26 batch; investors: Rsquared, Sterling Road, Theory Forge Ventures (PitchBook via search snippet); no revenue, users, or government contracts publicly disclosed |
| Revenue Signal | No public data found |
| Founders | Russell Smith (CEO): Co-Founder/CTO Rainforest QA (YC S12, $41.2M raised), BSc CS Staffordshire. Roman Khomenko (CTO): MSc CS Kharkiv NURE, Staff AI Engineer at Rainforest QA ~8 yrs, DataRobot. Bogdan Pyzh (COO): EMEA Practice Lead at Leviathan Security Group. |
| Competitors | Allen Control Systems ($30M raised, revenue unknown, broader weapon integration Groups 1–3), Anduril (~$60B valuation, ~$2.1B revenue, interceptor-based not turret), Epirus (>$550M raised, revenue unknown, directed energy), DroneShield (public, AU$216.5M FY2025 revenue, electronic warfare), Sentradel (early stage, funding unknown, most similar turret concept) |
| Moat Signals | No public data found; potential data moat from operational engagement data if deployed |
| Risk Factors | ACS competitive lead in government procurement, defense procurement cycle length, hardware manufacturing scale-up with software-background team |
| Founder Reach | Russell Smith: X ~4,049 followers, GitHub 277 followers/176 stars top repo. Roman Khomenko: X ~10 (low confidence), GitHub 7 followers. Bogdan Pyzh: no public social accounts found. |
| Distribution Signals | No public data found (no Product Hunt, no press coverage, no app store presence) |
| Emails | No public data found |
