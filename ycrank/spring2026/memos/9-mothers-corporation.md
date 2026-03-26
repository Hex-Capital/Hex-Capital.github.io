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

**Problem:** Cheap, autonomous Group 1 suicide drones (sUAS) have shifted tactical advantage on the modern battlefield, creating an urgent need for low-cost, portable counter-drone systems (YC company page). Current counter-UAS solutions from defense primes (Raytheon, Northrop Grumman) are expensive, bulky, and power-hungry, making them impractical for vehicle-mounted, base-level, or man-portable deployment at the tactical edge (YC company description).

**Approach:** EDDA is a small, low-power, low-cost, fully autonomous-capable counter-drone system designed to detect, track, and neutralize Group 1 sUAS threats in real-time using AI-based detection and tracking (YC company page). Job postings indicate significant investment in acoustic sensing — roles include Senior Applied Audio ML Engineer, Senior Systems Engineer (Audio), and Digital Signal Processing Engineer (Acoustic) (YC job listings). [Inferred]: The acoustic sensing focus suggests EDDA may use audio-based drone detection as a primary or complementary modality, which would differentiate it from radar- or RF-only approaches. The system is designed for three deployment modes: vehicle-mounted, base-installed, or carried (YC company page).

**Differentiation:** Compared to Anduril's Sentry Tower and Pulsar systems, which are larger integrated C-UAS platforms backed by Lattice software, EDDA targets a lower price point and smaller form factor for tactical-edge use (YC description). Versus Epirus's Leonidas directed-energy system, EDDA is positioned as lower-power and more portable (YC description vs. Epirus product page). Versus DroneShield's detection-focused products, 9 Mothers emphasizes both detection and kinetic/active neutralization as an integrated "weapon system" (YC description). [Inferred]: The acoustic ML approach may offer a passive-detection advantage over radar-based systems, which can be jammed or emit detectable signatures.

**Business Model:** No public pricing page found (website returned 403 at time of research). [Inferred]: Most likely monetization path is government/military procurement contracts (unit sales + maintenance/support), consistent with defense hardware companies and the GovTech tag.

**TAM/SAM:**
- Global anti-drone market valued at $3.11B in 2025, projected to reach $16.45B by 2034 at 19.79% CAGR (Fortune Business Insights, 2025).
- Global counter-UAS market valued at $8.40B in 2025, projected to reach $69.67B by 2034 at 26.50% CAGR (Fortune Business Insights, 2025).
- Autonomous & AI-enhanced counter-drone weapon systems market report cites $49.9B in defense tech investments strengthening procurement urgency (GlobeNewsWire, Feb 2026).
- [Inferred]: SAM for portable/tactical-edge autonomous C-UAS systems targeting Group 1 drones is a subset; no specific SAM estimate found for this niche.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct U.S. DoD procurement, given Austin, TX location (proximity to military installations), GovTech tag, and the nature of the product. The Rust-language UDP proxy tool on GitHub (udptoxy) suggests field-networking use cases consistent with military edge computing. Job postings requiring 6+ years of experience and $150K–$250K salaries indicate building an experienced defense-grade engineering team (YC job listings).

## Defensibility

- **Technical complexity:** Building a fully autonomous counter-drone weapon system requires integration of AI/ML (detection, tracking, classification), hardware (sensors, actuators), and real-time systems engineering — a multi-disciplinary challenge with high barriers to entry (YC job listings showing acoustic ML, DSP, robotics, electrical, and systems engineering roles).
- **Regulatory barriers:** Autonomous weapon systems face ITAR export controls and require government certifications and approvals for deployment, creating regulatory moats for approved vendors.
- **Data advantage:** [Inferred]: Deployed EDDA systems could generate proprietary acoustic and sensor datasets for drone signatures, improving detection accuracy over time — a potential data flywheel, but unproven at this stage.

**Market structure:** Defense primes (Raytheon, Lockheed Martin, Northrop Grumman) have existing C-UAS products but are optimized for large, expensive platform sales with long procurement cycles. [Inferred]: A low-cost, portable, autonomous system may be too small a unit sale for primes to prioritize, creating business model cannibalization risk if they tried to compete at this price point. Anduril is the most credible startup competitor but focuses on larger integrated platforms ($642M Marine Corps contract for CUAS, Anduril press release, Mar 2025; $20B Army framework contract, DefenseScoop, Mar 2026).

**Commoditization risk:** Commercial drone detection companies (Dedrone, DroneShield) could add kinetic/active countermeasures. Anduril and Epirus are well-funded and operate in the same C-UAS space. Defense primes could acquire or build competing products. [Inferred]: The acoustic-AI approach may offer some differentiation but the technique is replicable with sufficient R&D investment.

## Market & Traction

**Traction signals:**
- 14 active job postings on YC's Work at a Startup, spanning robotics, AI, audio ML, electrical engineering, DSP, and systems engineering; salary ranges $150K–$250K with 0.02%–0.50% equity (YC job listings, Mar 2026).
- Investors: Y Combinator, Rsquared, Sterling Road, and Theory Forge Ventures (web search snippet via multiple sources).
- Company Twitter/X: https://x.com/9mothers (YC page). Follower count not retrievable.
- Company LinkedIn: https://www.linkedin.com/company/9-mothers/ (YC page). Follower count not retrievable.
- GitHub: 2 public repos; "udptoxy" (Rust, 4 stars, MIT license, updated Mar 2026) (GitHub, Mar 2026).
- No press coverage in named publications found.
- No Product Hunt launch found.
- No revenue or customer data publicly disclosed.
- No Discord/Slack community found.
- Website not accessible at time of research (HTTP 403).

**Competitive landscape:**

| Competitor | Funding | Revenue | Key Differentiator vs. 9 Mothers |
|------------|---------|---------|-----------------------------------|
| **Anduril Industries** | ~$4B new round at $60B valuation (reported Mar 2026); ~$2B revenue in 2025 (search snippet) | ~$2B (2025, search snippet) | Full-stack defense platform (Lattice OS); large integrated C-UAS systems; $20B Army contract ceiling (DefenseScoop, Mar 2026). Much larger scale and platform breadth. |
| **Epirus** | $550M+ total; $250M Series D (TechCrunch, Mar 2025) | Revenue unknown | Directed-energy (high-power microwave) approach via Leonidas system; effective against swarms; different kill mechanism than kinetic. |
| **DroneShield (ASX: DRO)** | Public company; A$201.1M cash (Jan 2026) | A$216.5M FY2025 revenue, up 276% YoY (Investing.com, 2026) | Detection-focused product suite deployed in 70+ countries; SaaS revenue component (A$11.6M, up 312%); established international distribution. |
| **Dedrone** | $133M total raised; acquired by Axon (Oct 2024) (search snippets) | Revenue unknown | Software-focused airspace security platform; now integrated into Axon's law enforcement ecosystem post-acquisition. |

**Why now:**
- The Russia-Ukraine conflict demonstrated the battlefield lethality of cheap FPV suicide drones, creating urgent demand for tactical C-UAS systems (widely reported, 2022–present).
- U.S. DoD FY2026 budget allocations include $49.9B in defense tech investments with counter-drone procurement urgency (GlobeNewsWire, Feb 2026).
- Army awarded Anduril a $20B C-UAS framework contract in Mar 2026, signaling institutional commitment to scaling counter-drone procurement (DefenseScoop, Mar 2026).
- [Inferred]: Advances in edge AI inference and low-power ML accelerators have made fully autonomous, portable AI weapon systems technically feasible at lower cost and size points than previously possible.

## Founders & Team

**Russell Smith** — Co-Founder & CEO
- BS Computer Science, Staffordshire University (1999–2003) (search snippet via RocketReach).
- Co-founded Rainforest QA (YC S12), a no-code end-to-end testing platform; served as CTO for ~10 years; company raised $42.3M total from Bessemer Venture Partners, Rincon Venture Partners, YC, and others (TechCrunch, Jan 2018; Tracxn). No public exit event found.
- Managing Director at Beyond Equity Partners (Crunchbase).
- Recurse Center alumnus (A1'22) (search snippet).
- Skills: Ruby, infrastructure, AWS, DevOps, CI/CD (search snippet).
- Second-time YC founder (S12 → S26).
- Twitter/X: @rhs (x.com/rhs). Follower count not retrievable.
- LinkedIn: linkedin.com/in/russellhowardsmith (LinkedIn).
- GitHub: github.com/ukd1 (GitHub). Notable repos/star counts not detailed.

**Roman Khomenko** — Co-Founder & CTO
- MS Computer Science, Kharkiv National University of Radioelectronics (search snippet via GetProg).
- Eight years at Rainforest QA, rising from Senior Data Scientist to Lead AI Data Scientist; delivered QA automation, computer vision screenshot segmentation, and production ML pipelines (search snippet via GetProg).
- Prior roles: Data Scientist at DataRobot; security research at DisOpt.com (search snippet via GetProg).
- Background includes service in the Police of Ukraine (search snippet via GetProg).
- Active Kaggle competitor (search snippet via GetProg).
- CTO at 9 Mothers since October 2024 (search snippet via GetProg).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/dowakin (LinkedIn).
- GitHub: No public repos found under personal account.

**Bogdan Pyzh** — Co-Founder & COO
- Previously Security Consultant and EMEA Practice Lead at Leviathan Security Group (Wiza, Adapt.io).
- No public education details found.
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/bogdan-pyzh-b5b77388 (LinkedIn).
- GitHub: No public repos found.

**Co-founder relationship:** Russell Smith and Roman Khomenko both worked at Rainforest QA — Smith as co-founder/CTO and Khomenko for eight years as data scientist/lead AI data scientist (search snippets). No public overlap found between Bogdan Pyzh and the other founders' prior employers or universities.

**Founder-market fit:** Smith brings a decade of infrastructure and DevOps experience plus YC alumni network access from Rainforest QA (YC S12). Khomenko provides deep AI/ML expertise with production ML pipeline experience and a computer science graduate degree from a Ukrainian university, bringing potential firsthand understanding of the drone-warfare threat environment. Pyzh contributes cybersecurity and security consulting expertise from Leviathan Security Group, relevant to defense systems security. No public advisors, board members, or notable angel investors found beyond the listed institutional investors.

## Key Risks

**Regulatory and compliance risk (ITAR/EAR):** Autonomous weapon systems are subject to strict U.S. export controls (ITAR) and DoD autonomous weapons policy (DoD Directive 3000.09). Obtaining required certifications and approvals could delay deployment and limit addressable markets. No public data on current certification status.

**Well-funded incumbent competition:** Anduril ($60B valuation, $20B Army contract ceiling), Epirus ($550M+ raised), and DroneShield (A$216.5M FY2025 revenue) all operate in the C-UAS space with substantially more capital, established government relationships, and deployed systems (TechCrunch, DefenseScoop, Investing.com). 9 Mothers must differentiate on cost, form factor, and autonomy to carve out a defensible niche.

**Government procurement cycle risk:** Defense hardware sales depend on government budget cycles, contract vehicles, and procurement timelines that can stretch 12–36 months. A pre-seed startup's cash runway may not align with these timelines. [Inferred]: The YC backing and named investors (Rsquared, Sterling Road, Theory Forge Ventures) provide some runway buffer, but procurement delays remain a structural risk.

**Autonomous weapons policy and public perception:** Increasing scrutiny of autonomous weapon systems from policymakers and advocacy groups could lead to regulatory restrictions or procurement delays. The DoD's "human in the loop" requirements for lethal autonomous systems may constrain the product's autonomous capabilities.

**Technical performance risk:** No public data on EDDA's detection accuracy, false-positive rates, effective range, or field test results. The system's performance against real-world Group 1 sUAS threats in contested electromagnetic environments is unproven in public sources.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3.11B in 2025, projected $16.45B by 2034 at 19.79% CAGR (Fortune Business Insights, 2025); broader counter-UAS market $8.40B in 2025, projected $69.67B by 2034 at 26.50% CAGR (Fortune Business Insights, 2025) |
| SAM | No public data found |
| Traction | 14 active job postings (YC job board, Mar 2026); 4 named investors (YC, Rsquared, Sterling Road, Theory Forge Ventures) (search snippets, Mar 2026) |
| Revenue Signal | No public data found |
| Founders | Russell Smith (CEO): YC S12 alum, co-founded Rainforest QA ($42.3M raised), BS CS Staffordshire. Roman Khomenko (CTO): MS CS Kharkiv Nat'l Univ., 8 yrs Rainforest QA AI/ML, ex-DataRobot. Bogdan Pyzh (COO): ex-Leviathan Security Group EMEA Practice Lead. |
| Competitors | Anduril (~$4B new round at $60B valuation, ~$2B 2025 revenue, full-stack defense platform) (search snippets, Mar 2026); Epirus ($550M+ raised, revenue unknown, directed-energy C-UAS) (TechCrunch, Mar 2025); DroneShield (public, A$216.5M FY2025 revenue, detection-focused C-UAS in 70+ countries) (Investing.com, 2026); Dedrone ($133M raised, acquired by Axon Oct 2024, software airspace security) (search snippets) |
| Moat Signals | No public data found |
| Risk Factors | Well-funded incumbent competition (Anduril, Epirus, DroneShield), government procurement cycle length, autonomous weapons regulatory/policy constraints |
| Founder Reach | Russell Smith: Twitter @rhs (count not retrievable), LinkedIn russellhowardsmith. Roman Khomenko: LinkedIn dowakin. Bogdan Pyzh: LinkedIn bogdan-pyzh-b5b77388. |
| Distribution Signals | No public data found |
| Emails | No public data found |
