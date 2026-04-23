# 9 Mothers

> AI weapon systems

| Field | Value |
|-------|-------|
| Website | https://9mothers.com |
| YC Page | https://www.ycombinator.com/companies/9-mothers-corporation |
| Batch | Spring 2026 |
| Industry | Industrials / Industrials -> Defense |
| Team Size | No public data found |
| Location | Austin, TX, USA |
| Tags | Hard Tech, Hardware, Drones, GovTech, Aerospace |
| YC Partner | Garry Tan |
| Emails | No public data found |

## The Idea

**Problem:** Group 1 suicide drones (small, cheap FPV drones) pose an acute threat on modern battlefields, as demonstrated in the Ukraine conflict (Russell Smith LinkedIn post, March 2025). Existing counter-UAS systems are large, expensive, and slow to deploy. Military units, forward bases, and vehicles lack portable, affordable point-defense options against drone swarms.

**Approach:** EDDA is a small, low-power, low-cost, fully autonomous-capable counter-drone system described as an "AI-powered C-sUAS point defense turret" and "turret mounted anti-drone shotgun" (YC page; X @9Mothers). It uses AI for detection, tracking, and engagement of multiple fast-moving drones. Designed for mounting on vehicles, bases, or man-portable carry (YC page).

**Differentiation:**
- vs. Anduril: Anduril operates at enterprise/prime-contractor scale ($20B Army contract, March 2026; DefenseScoop). EDDA targets the small, portable, low-cost segment. [Inferred]: 9 Mothers competes on unit cost and form factor rather than platform breadth.
- vs. Fortem Technologies: DroneHunter F700 uses net-based drone capture via interceptor drone (Fortem website). EDDA uses a turret-mounted kinetic approach, avoiding the need for a chase drone.
- vs. Epirus: Leonidas uses directed energy/high-power microwave (TechCrunch, March 2025). EDDA uses kinetic defeat via shotgun-style turret — different technology stack and cost profile.
- vs. D-Fend Solutions: D-Fend uses cyber/RF takeover to commandeer drones (D-Fend press release, Dec 2024). EDDA uses kinetic interception, which works regardless of drone communications protocol.

**Business Model:** No pricing page found (website returned 403 at time of research). [Inferred]: Most likely monetization path is hardware unit sales plus maintenance/support contracts to DoD and allied military customers, consistent with defense hardware procurement models.

**TAM/SAM:** Counter-UAS systems market estimated at $6.64B in 2025, projected to reach $20.31B by 2030 at 25.1% CAGR (MarketsandMarkets, 2025). DroneShield estimates total addressable CUxS market at $63B, with military/government at $34.7B (DroneShield, 2025). [Inferred]: SAM for small, portable C-sUAS point-defense systems is a subset of the broader C-UAS market; no public estimate specific to this segment found.

**GTM / Distribution:** Job postings solicit "government relations professionals" (Russell Smith LinkedIn post, March 2025). The company is hiring across AI, mechatronics, electrical, and systems engineering roles (YC jobs page, 14 open positions). [Inferred]: Most likely distribution path is direct DoD procurement, potentially via DIU or rapid acquisition programs, supplemented by allied military sales.

## Defensibility

- **Technical complexity:** Building an autonomous AI-driven kinetic C-sUAS turret requires integration of real-time computer vision, target tracking, weapons control, and edge computing in a small form factor (YC job postings reference acoustic ML, DSP, robotics, and AI engineering).
- **Regulatory barriers:** Defense hardware requires ITAR compliance, security clearances, and DoD certification processes, which create barriers to entry.
- [Inferred]: Data advantage could develop over time through field deployment data on drone detection and engagement patterns, but is unproven at this stage.

**Market structure:** [Inferred]: Large defense primes (Raytheon, Lockheed Martin) focus on large-scale integrated air defense systems; building a low-cost, small-form-factor autonomous turret represents a different unit economics and product architecture than their core business. Incumbents face business model cannibalization risk if they pursue the low-cost segment aggressively.

**Commoditization risk:** The acoustic/vision-based detection and kinetic defeat approach could be replicated by other defense startups or mid-tier defense firms with robotics expertise. Fortem Technologies ($69M funded, $28.5M revenue; Growjo) and numerous international competitors are active in the space.

## Market & Traction

**Traction signals:**
- 14 open job positions with $150K-$250K salary ranges and 0.02%-0.50% equity (YC jobs page, April 2026)
- Investors: Y Combinator, Pioneer Fund, Rsquared, Sterling Road, Theory Forge Ventures (Crunchbase via search snippet)
- Company X/Twitter: @9Mothers, joined October 2024 (X via search snippet); follower count not retrievable
- Company LinkedIn: linkedin.com/company/9-mothers (LinkedIn); follower count not retrievable
- GitHub organization: github.com/9mothers — 6 followers, 2 repos, udptoxy (3 stars) (GitHub)
- Russell Smith LinkedIn announcement post: 153 reactions, 39 comments (LinkedIn, March 2025)
- Company also present on Bluesky and Truth Social (GitHub org page)
- HN job postings: at least two posts (HN items 46467697 and 44162021)
- No Product Hunt launch found
- No press coverage in named publications found
- No public revenue data found
- Website not accessible at time of research (HTTP 403)

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. 9 Mothers |
|-----------|---------|-------------|----------------------------------|
| Anduril Industries | ~$4B round at $60B valuation (March 2026; DefenseScoop) | ~$2B (2025; Bloomberg via search snippet) | Full-stack defense prime with Lattice software platform; enterprise scale vs. 9 Mothers' point-defense focus |
| Fortem Technologies | $69M total incl. $25M from Lockheed Martin (April 2026; Lockheed Martin press release) | $28.5M (Growjo via search snippet) | Net-based drone capture via interceptor drone vs. turret-mounted kinetic |
| Epirus | $550M+ total, $250M Series D (March 2025; TechCrunch) | Revenue unknown | Directed energy/HPM system vs. kinetic defeat; different physics and cost model |
| D-Fend Solutions | $73M total, $31M round (Dec 2024; D-Fend press release) | 60% YoY growth (D-Fend press release); absolute figure unknown | Cyber/RF takeover approach vs. kinetic; non-kinetic defeat mechanism |

**Why now:** [Inferred]: The Ukraine conflict (2022-present) demonstrated the lethal effectiveness of cheap FPV suicide drones against armored vehicles and infantry, creating urgent DoD demand. The U.S. DoD has committed over $1.86B in counter-drone spending, including $115M in DHS funding for securing America250 and FIFA 2026 events (Dronelife, Feb 2026). The Army's $20B Anduril framework contract (March 2026; DefenseScoop) signals C-UAS as a top procurement priority. Simultaneously, advances in edge AI compute, computer vision models, and low-cost sensors have made autonomous small-form-factor systems technically feasible.

## Founders & Team

**Russell Smith** — Founder & CEO
- BS Computer Science, Staffordshire University (1999-2003) (RocketReach via search snippet)
- Co-founder & CTO of Rainforest QA (YC S12, ~2012-2024), which raised $41.2M and reached $25.7M revenue in 2024 (PitchBook via search snippet; Latka via search snippet)
- Previously: Beyond Equity Partners, UKD1 Limited, Recurse Center (GitHub bio)
- Technical focus: Ruby, Crystal, Go, Rust, ESP32 (GitHub bio)
- Twitter/X: @rhs — follower count not retrievable
- LinkedIn: linkedin.com/in/russellhowardsmith
- GitHub: github.com/ukd1 — 212 repos, 276 followers; node-twilio (176 stars) (GitHub)

**Roman Khomenko** — Founder & CTO
- MSc Statistics, Kharkiv National University of Radioelectronics (2002-2007) (CV, cv.disopt.com)
- Staff Data Scientist at Rainforest QA (2016-2024): CV/ML pipelines, computer vision (OpenCV, PyTorch, YOLO), browser-interacting LLM agents, managed 50K+ crowdsourced QA testers (CV)
- Data Scientist at DataRobot (2015-2016): core platform algorithms, feature engineering (CV)
- Kaggle: 1st place iMaterialist Challenge (Furniture); 3rd place Crowdflower Search Results Relevance (CV)
- Former lecturer at Kharkiv University (cybersecurity, discrete optimization); service in Police of Ukraine (getprog.ai)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/dowakin
- GitHub: github.com/skrypka (CV)

**Bogdan Pyzh** — Co-Founder & COO
- Baylor University; member of Baylor cybersecurity team that won regional title and advanced to nationals in 2018 (Baylor University news)
- LinkedIn: linkedin.com/in/bogdan-pyzh-b5b77388 — 500+ connections
- Twitter/X: No public account found
- GitHub: No public repos found

**Co-founder relationship:** Russell Smith and Roman Khomenko overlapped at Rainforest QA (Roman joined 2016; Russell co-founded ~2012) for approximately eight years (CV; GitHub bio).

**Founder-market fit:** Smith brings a decade of startup leadership at a YC company that scaled to $25.7M revenue, plus hands-on embedded systems experience (Rust, ESP32). Khomenko brings deep ML/CV expertise (PyTorch, YOLO, production ML pipelines, Kaggle wins) directly applicable to autonomous drone detection and tracking. Pyzh brings cybersecurity competition experience from Baylor. The Smith-Khomenko working relationship spans ~8 years.

## Key Risks

**ITAR and security clearance requirements:** Defense hardware companies must navigate ITAR export controls and facility security clearances. Two of three founders have international backgrounds (Ukraine), which may complicate clearance timelines. No mitigation data found.

**Dominant well-funded incumbents:** Anduril ($60B valuation, $20B Army contract; DefenseScoop, March 2026) and Epirus ($550M+ raised; TechCrunch, March 2025) operate in the same C-UAS space with substantially more capital, government relationships, and production infrastructure.

**Long government procurement cycles:** DoD hardware procurement typically involves multi-year testing, certification, and contracting cycles. The company must sustain operations through extended sales cycles with limited initial revenue.

**Kinetic approach regulatory constraints:** Autonomous kinetic weapon systems face evolving DoD policies on autonomous engagement authority (DoD Directive 3000.09). Fully autonomous kinetic defeat may require additional policy approvals compared to non-kinetic alternatives (RF jamming, directed energy).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $6.64B in 2025, projected $20.31B by 2030 at 25.1% CAGR (MarketsandMarkets, 2025); broader CUxS TAM $63B (DroneShield, 2025) |
| SAM | No public data found |
| Traction | 14 open job postings (YC jobs page, April 2026); 153 reactions on founder LinkedIn launch post (LinkedIn, March 2025); 2 HN job posts (HN, 2025-2026) |
| Revenue Signal | No public data found |
| Founders | Russell Smith (CEO): Co-founder/CTO Rainforest QA (YC S12, $41.2M raised, $25.7M revenue). Roman Khomenko (CTO): 8yr Rainforest QA ML, DataRobot, Kaggle 1st place. Bogdan Pyzh (COO): Baylor University, cybersecurity nationals 2018. |
| Competitors | Anduril ($4B round at $60B val, ~$2B revenue, full-stack defense platform; DefenseScoop 2026); Fortem Technologies ($69M raised, $28.5M revenue, net-capture drone; Growjo/Lockheed Martin 2026); Epirus ($550M+ raised, revenue unknown, directed energy; TechCrunch 2025); D-Fend Solutions ($73M raised, 60% YoY growth, cyber/RF takeover; D-Fend 2024) |
| Moat Signals | No public data found |
| Risk Factors | Dominant well-funded incumbents, long government procurement cycles, ITAR/clearance complexity |
| Founder Reach | Russell Smith: Twitter @rhs (count not retrievable), LinkedIn russellhowardsmith, GitHub ukd1 276 followers/176 stars top repo (GitHub). Roman Khomenko: LinkedIn dowakin, GitHub skrypka (CV). Bogdan Pyzh: LinkedIn 500+ connections (LinkedIn). |
| Distribution Signals | No public data found |
| Emails | No public data found |
