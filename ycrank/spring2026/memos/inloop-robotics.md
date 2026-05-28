# InLoop Robotics

> Staff your warehouse with robotic employees today

| Field | Value |
|-------|-------|
| Website | https://inloop-robotics.com/ |
| YC Page | https://www.ycombinator.com/companies/inloop-robotics |
| Batch | Spring 2026 (P26) |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Hard Tech, Robotics, Logistics, AI |
| YC Partner | Tom Blomfield |
| Emails | founders@inloop-robotics.com |

## The Idea

- **Problem:** Repetitive manual warehouse labor (packing, kitting, fulfillment) with ~49% annual turnover and >100% at peak-volume sites (YC company page).
- **Approach:** Bimanual robotic arms deployed as "robot employees" hired by the month; ships imperfect policies into production, detects failures live, and falls back to a remote human teleoperator via a Safety Module (inloop-robotics.com).
- **Differentiation:** Vs. Symbotic/Dexterity (fixed full-system DC integrations) — InLoop says "no facility redesigns needed, just plug it in" and replaces "$100k+ integration projects per station" (inloop-robotics.com; YC page); vs. Covariant (acqui-hired by Amazon, software-only) — InLoop ships full hardware+RaaS bundle (inloop-robotics.com).
- **Business Model:** Robotics-as-a-Service: flat monthly subscription covering hardware, AI updates, and 24/7 teleassistance; no upfront capex (inloop-robotics.com).
- **TAM/SAM:** Global warehouse robotics market USD 6.51B in 2025 growing to USD 25.41B by 2034 at 16.8% CAGR (Fortune Business Insights, 2025); broader warehouse automation USD 23.92B in 2025 (Research and Markets, 2025).
- **GTM / Distribution:** [Inferred]: Direct sales of paid pilots into warehouses/fulfillment centers/factories, evidenced by "paid pilots live in customer warehouses" language (YC page); no channel partners disclosed.

## Defensibility

- **Moat today:** Data flywheel from real-deployment failures — "every failure becomes training data, every intervention makes the system better" (YC company description); also Nvidia Inception backing (inloop-robotics.com).
- **Future moat:** [Inferred]: Proprietary failure-recovery dataset across diverse SKUs could improve generalization beyond competitors who train in simulation; unproven because pilot count and data volume are undisclosed.
- **Market structure:** [Inferred]: Incumbents like Symbotic (84% revenue from Walmart in FY2025 per SEC 8-K) sell multi-million-dollar fixed DC systems whose unit economics and sales motion are incompatible with a per-month, plug-in RaaS station.
- **Commoditization risk:** Well-funded peers (Dexterity $291M raised at $1.65B valuation per TechCrunch Mar 2025; Pickle Robot $87M raised per Globe Newswire Nov 2024) and Amazon's in-house Covariant team (Amazon press release, 2024) are pursuing similar AI-warehouse manipulation.

## Market & Traction

- **Traction signals:**
  - 300+ picks/hour per station in paid pilots, generalizing across hundreds of SKUs (YC company page).
  - "Multiple deployed robots across customer facilities" with zero hardware breakage to date (inloop-robotics.com).
  - Customer testimonial: pilots replace "$100k+ integration projects per station" (inloop-robotics.com).
  - Nvidia Inception participant (inloop-robotics.com).
  - $500K YC funding (search snippet; standard YC deal).
  - LinkedIn company page: linkedin.com/company/inlooprobotics (count not retrievable).
  - YC LinkedIn launch post: activity 7462879880960061440 (via search snippet, 2026).
  - No Product Hunt launch found for this YC entity (search returned unrelated "InLoop" product).
- **Competitors:**
  - Symbotic ($22.5B backlog FY2025, ~84% revenue from Walmart per SEC 8-K): full-DC fixed automation for large retailers vs. InLoop's per-station RaaS.
  - Dexterity ($291M raised, $1.65B valuation, TechCrunch Mar 2025; revenue undisclosed): trailer-loading and bimanual mobile robots already at FedEx, UPS, GXO vs. InLoop's earlier-stage pilots.
  - Covariant ($222M raised, $380M Amazon acqui-hire, Bloomberg/Wikipedia 2024; revenue undisclosed): software-only pick-AI brain vs. InLoop's full hardware+software bundle.
  - Pickle Robot ($87M total raised including $50M Series B Nov 2024, Globe Newswire; revenue undisclosed): focuses on truck-unloading vs. InLoop's pack/kit/fulfill stations.
  - Amazon Robotics (in-house, no external funding): captive deployment vs. InLoop selling to third-party warehouses.
- **Why now:** [Inferred]: Foundation models for manipulation (e.g., Nvidia Isaac/IsaacLab, referenced in founder Sharfeddine's LinkedIn posts, 2025) crossed a generalization threshold that makes one-policy-many-SKUs commercially viable in the past 12–18 months.

## Founders & Team

- **Zakariea Sharfeddine (Co-founder):**
  - Background: B.Sc. Informatics, Karlsruhe Institute of Technology 2020–2024; ML roles at Bosch and BMW Group; KITec; RoboTUM (LinkedIn via RocketReach).
  - Twitter/X: No public account found.
  - LinkedIn: "Stealth Startup" / Co-founder InLoop Robotics (linkedin.com/in/zakariea-sharfeddine); count not retrievable.
  - GitHub: No public repos found in search results.
- **Stepan Feduniak (Co-founder):**
  - Background: Began robot-learning research at age 18 per YC company page; focus on "building robots that detect and learn from failure" (YC page).
  - Twitter/X: No public account found.
  - LinkedIn: "Co-Founder @ InLoop Robotics (YC P26)" (linkedin.com/in/stepan-feduniak-b33045276); count not retrievable.
  - GitHub: No public repos found in search results.
- **Pasha Rizali (Co-founder):**
  - Background: Electrical & Computer Engineering at Technical University of Munich; involvement in RoboTUM ("largest robotics student initiative in Europe"); prior comms/content role at MIRMI; EuroTech Federation (LinkedIn).
  - Twitter/X: No public account found.
  - LinkedIn: "Aspiring Robotics Engineer | Computer Science Student" (linkedin.com/in/pasha-rizali); count not retrievable.
  - GitHub: No public repos found in search results.
- **Co-founder relationship:** Sharfeddine and Rizali both connected to RoboTUM/TUM robotics ecosystem (LinkedIn profiles); Nordic9 describes company as founded "in Germany" before SF relocation (Nordic9).
- **Founder-market fit:** Team combines industrial-ML experience at Bosch/BMW (Sharfeddine) with academic robotics research and student-robotics leadership at TUM (Rizali, Feduniak), aligning with the manipulation+RL stack the product requires; backed by Nvidia Inception (inloop-robotics.com).

## Key Risks

- **Technical feasibility risk:** Generalized bimanual manipulation across "hundreds of SKUs" at 300+ picks/hour (YC page) is unproven at scale; well-funded peers Dexterity and Covariant have pursued this for ~8 years and Covariant ultimately exited via $380M acqui-hire below its prior $625M valuation (Bloomberg/Wikipedia 2024), signaling difficult unit economics. Mitigation: human-teleoperator fallback via Safety Module (inloop-robotics.com).
- **Capital intensity vs. funded incumbents:** Dexterity has raised $291M (TechCrunch Mar 2025) and Symbotic carries a $22.5B backlog (SEC 8-K FY2025); InLoop's disclosed $500K YC funding (search snippet) is orders of magnitude smaller for a hardware-heavy RaaS model. No mitigation disclosed.
- **Customer concentration / pilot conversion:** "Paid pilots" (YC page) — number of customers and conversion to multi-station deployments not disclosed; warehouse robotics pilots historically convert slowly.
- **Hyperscaler substitution:** Amazon acquired Covariant's founders and AI license in 2024 (Amazon press release) and operates Amazon Robotics in-house, removing the largest fulfillment-automation buyer from the addressable market.
- **Founder commercial experience:** Public profiles indicate two of three founders are recent graduates/students (Rizali listed as "Computer Science Student," Feduniak's LinkedIn URL suggests recent profile) without prior enterprise-sales or hardware-shipping exits documented (LinkedIn profiles).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Warehouse robotics USD 6.51B in 2025 → USD 25.41B by 2034, 16.8% CAGR (Fortune Business Insights, 2025); warehouse automation USD 23.92B (Research and Markets, 2025) |
| SAM | No public data found |
| Traction | 300+ picks/hour in paid pilots, hundreds of SKUs (YC company page, 2026); multiple deployed robots, zero hardware breakage (inloop-robotics.com); Nvidia Inception member (inloop-robotics.com); YC LinkedIn launch post Spring 2026 |
| Revenue Signal | RaaS flat monthly subscription, no upfront capex; specific price not disclosed (inloop-robotics.com); $500K YC investment (Nordic9/search snippet, 2026) |
| Founders | Zakariea Sharfeddine (Co-founder): B.Sc. Informatics KIT, ex-Bosch/BMW ML. Stepan Feduniak (Co-founder): robot-learning research from age 18. Pasha Rizali (Co-founder): TUM ECE, RoboTUM, MIRMI. |
| Competitors | Symbotic ($22.5B backlog FY2025, fixed-DC automation); Dexterity ($291M raised, $1.65B val, revenue unknown, trailer-loading + mobile bimanual); Covariant ($222M raised, $380M Amazon acqui-hire 2024, software-only pick AI); Pickle Robot ($87M raised, revenue unknown, truck-unloading); Amazon Robotics (in-house) |
| Moat Signals | Production-failure data flywheel (YC page); Nvidia Inception (inloop-robotics.com); human-in-loop teleoperator Safety Module (inloop-robotics.com) |
| Risk Factors | Technical feasibility of general manipulation; capital intensity vs. $291M Dexterity / $22.5B Symbotic backlog; hyperscaler substitution (Amazon/Covariant) |
| Founder Reach | Sharfeddine: Twitter not found, LinkedIn count not retrievable, GitHub not found. Feduniak: Twitter not found, LinkedIn count not retrievable, GitHub not found. Rizali: Twitter not found, LinkedIn count not retrievable, GitHub not found. |
| Distribution Signals | YC LinkedIn post (activity 7462879880960061440, 2026); Nvidia Inception (inloop-robotics.com); no Product Hunt launch found for this entity |
| Emails | founders@inloop-robotics.com |
