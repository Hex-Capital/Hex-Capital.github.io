# InLoop Robotics

> Deploying robots that ask for help!

| Field | Value |
|-------|-------|
| Website | https://inloop-robotics.com/ |
| YC Page | https://www.ycombinator.com/companies/inloop-robotics |
| Batch | Spring 2026 |
| Industry | Industrials / Manufacturing and Robotics |
| Team Size | 4 |
| Location | San Francisco, US (company website); originally founded in Germany (Nordic 9) |
| Tags | Artificial Intelligence, Hard Tech, Robotics, Logistics |
| YC Partner | Tom Blomfield |
| Emails | founders@inloop-robotics.com (company website) |

## The Idea

**Problem:** Warehouse fulfillment remains labor-intensive, with an estimated 2.1 million unfilled warehouse jobs projected by 2030 (Standard Bots, 2026 via search snippet). Traditional industrial automation requires $100K+ upfront investment, months-long deployment timelines, and specialized integration engineering (InLoop website). These systems are rigid — they cannot adapt to changing product types or order variability without expensive reprogramming.

**Approach:** InLoop deploys "Loop V1," a bimanual robotic system with a confidence-aware AI architecture (InLoop website). A Safety Module evaluates each command before execution; when the system's confidence falls below threshold, it pauses and routes the task to a remote human teleoperator (InLoop website). Every human intervention generates labeled training data, creating a feedback loop: failures become training signal, and the autonomous success rate rises over time (YC page). Capabilities include box assembly, kitting, visual inspection, content preparation, and unpackaging (InLoop website).

**Differentiation:** Most warehouse robotics startups (Nimble, Dexterity) pursue full autonomy before deployment. InLoop inverts this by deploying imperfect policies immediately and using human-in-the-loop teleoperation as a runtime fallback and data collection mechanism (YC page). Nimble Robotics also uses human-in-the-loop supervision but at a $1B valuation and $221M raised (The Robot Report, Sep 2024); InLoop targets a similar architecture at pre-seed scale. Dexterity ($300M raised, $1.65B valuation; Bloomberg, Mar 2025) focuses on truck loading and heavy-payload tasks rather than general fulfillment. Covariant, formerly a leading AI-for-picking company ($222M raised), was effectively acqui-hired by Amazon in August 2024 (Wikipedia), leaving a gap in the independent warehouse AI market.

**Business Model:** Robotics-as-a-Service (RaaS) — zero upfront capital cost, flat monthly subscription including hardware, continuous AI updates, and 24/7 teleassistance (InLoop website). No specific pricing tiers are published. [Inferred]: The flat monthly subscription likely targets a price point competitive with fully-loaded warehouse labor costs per station to enable rapid ROI justification.

**TAM/SAM:** The warehouse robotics market was valued at $6.51B in 2025, projected to reach $25.41B by 2034 at 16.80% CAGR (Fortune Business Insights, 2026 via search snippet). The broader warehouse automation market is estimated at $23.92B in 2025, growing to $47B by 2030 at 14.4% CAGR (Research and Markets, 2026 via search snippet). [Inferred]: InLoop's SAM is the subset of warehouses performing piece-picking, kitting, and packing — a fraction of the total warehouse robotics market — likely in the low single-digit billions.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct sales to mid-market 3PL and e-commerce fulfillment operators, leveraging the zero-capex RaaS model to reduce procurement friction. The "deployment in hours" claim (InLoop website) and managed-service model suggest a land-and-expand approach where initial small deployments prove ROI before scaling within a facility.

## Defensibility

- **Data flywheel:** Every teleoperator intervention generates labeled failure data that trains the next policy iteration (YC page). This creates a compounding data advantage: more deployments produce more edge-case training data, which increases autonomy rates, which reduces teleoperator cost, which improves unit economics.
- **NVIDIA Inception membership** and **RoboTUM partnership** (InLoop website) signal access to compute resources and academic research pipelines, but are not exclusive.
- **Switching costs:** Once InLoop's robots are integrated into a warehouse workflow with custom-trained policies, switching to a competitor would require retraining and re-integration. [Inferred]: At pre-seed stage, no customer has deep enough integration for this to constitute a meaningful moat today.

**Market structure:** [Inferred]: Large incumbents (Amazon Robotics, Symbotic at $31.3B market cap per Tracxn, Jul 2025) are vertically integrated — Amazon Robotics serves Amazon's own warehouses, and Symbotic is locked into a $23B exclusive deal with Walmart. These captive relationships limit their ability to sell to competing retailers and 3PLs, creating an opening for independent providers. The structural barrier for incumbents is channel conflict: selling to competitors of their anchor customers would undermine their primary business relationships.

**Commoditization risk:** The human-in-the-loop teleoperation pattern is architecturally straightforward and is already used by Nimble Robotics (Nimble website). The defensibility depends on the quality and volume of accumulated training data and the speed of policy improvement, not on the architectural pattern itself. Well-funded competitors (Nimble at $221M, Dexterity at ~$300M) have significantly more capital to invest in data collection and R&D.

## Market & Traction

**Traction signals:**
- NVIDIA Inception program member (InLoop website)
- RoboTUM partnership (InLoop website)
- $500K investment from Y Combinator (GrowthList, 2026 via search snippet — consistent with YC standard deal)
- Company claims "zero robot breakdowns reported among deployed units" (InLoop website) — implies at least one deployment, though no customer names, deployment count, or dates are cited
- LinkedIn company page: InLoop Robotics (YC P26) (LinkedIn) — follower count not retrievable
- Twitter/X: no confirmed company account found (the @InLoop_ handle belongs to an unrelated AI content curation company based in Alexandria, VA)
- Product Hunt: no launch found for InLoop Robotics (a "InLoop" listing on Product Hunt refers to the unrelated content curation product)
- No public revenue figures, customer names, or deployment metrics found

**Competitive landscape:**

| Competitor | Funding | Differentiator vs. InLoop |
|---|---|---|
| **Nimble Robotics** | $221M raised, $1B valuation (The Robot Report, Sep 2024) | End-to-end autonomous fulfillment with FedEx as strategic investor; also uses human-in-the-loop but at far greater scale and maturity |
| **Dexterity** | ~$300M raised, $1.65B valuation (Bloomberg, Mar 2025) | Focus on heavy-payload truck loading (132 lbs); deployed at FedEx, UPS, GXO; broader manipulation capability |
| **Contoro Robotics** | $12M Series A (Mar 2025, Sourcing Journal) | Specialized in parcel unloading from trucks/containers; narrower scope than InLoop |
| **Dexory** | $165M Series C (Jan 2026, search snippet) | London-based; focused on warehouse digitization and inventory tracking rather than manipulation |
| **Standard Bots** | Funding details not found | Sells robotic arms with software platform; positioned as accessible alternative to legacy industrial arms |

**Why now:**
- Labor shortage: 2.1 million unfilled warehouse jobs projected by 2030 (Standard Bots, 2026 via search snippet), creating urgent demand for automation.
- [Inferred]: Foundation model advances in 2023–2025 (vision-language models, sim-to-real transfer) have reduced the cost of training manipulation policies, making it feasible for a 4-person team to build a viable robotic system that would have required a much larger team two years ago.
- [Inferred]: The Covariant acqui-hire by Amazon (Aug 2024) removed a major independent player from the market, creating space for new entrants.
- In Q1 2026 alone, robotics startups secured over $2.26B in funding, with 70%+ going to warehouse and industrial automation (search snippet from industry report), signaling strong investor appetite for the category.

## Founders & Team

The YC page lists three founders. A fourth team member, Martin Mohammed, appears on LinkedIn as working at InLoop Robotics (YC P26).

**Zakariea Sharfeddine** — Co-founder
- BS Informatics, Karlsruhe Institute of Technology (KIT), 2024 (RocketReach via search snippet); studied at Technische Universität München (TUM)
- ML roles at Bosch and BMW; also worked at KITec (YC page, Nordic 9)
- Published research on power grid frequency deviation analysis (ACM SIGEnergy, 2024 via search snippet)
- Twitter/X: @Zakariea_sh — count not retrievable
- LinkedIn: linkedin.com/in/zakariea-sharfeddine — headline: "Stealth Startup" (LinkedIn)
- GitHub: github.com/Zasha01 — repos include QuantumComputingSoftwarePatterns; star counts not retrieved

**Stepan Feduniak** — Co-founder
- "Did robot learning research at 18" (YC page)
- Specializes in failure detection and learning (YC page)
- Twitter/X: @FeduniakS — count not retrievable
- LinkedIn: linkedin.com/in/stepan-feduniak-b33045276 (LinkedIn)
- GitHub: No public profile found

**Pasha Rizali** — Co-founder
- Bachelor in Electrical & Computer Engineering (LinkedIn); pursuing Master's degree
- Co-founded RoboTUM in 2024 with Alexander Palatnik (LinkedIn); founded European Student Robotics Association (ESRA) (YC page)
- Participated in TUM WARR rocketry competition (LinkedIn)
- Worked at MIRMI (Munich Institute of Robotics and Machine Intelligence) — communications, social media, researcher engagement (LinkedIn)
- Silicon Valley Fellowship, Winter 2025 batch (LinkedIn); appeared on Silicon Valley Fellowship podcast (Facebook post)
- Twitter/X: @PashaRizali — count not retrievable
- LinkedIn: linkedin.com/in/pasha-rizali — headline: "Aspiring Robotics Engineer | Computer Science Student with a Passion for Innovation" (LinkedIn)
- GitHub: No public profile found

**Martin Mohammed** — Team member (not listed as founder on YC page)
- Self-taught programmer from age 12; interned at IBM San Francisco at age 16 focusing on reinforcement learning (GitHub bio)
- Data engineer at Data Reply (AWS, Spark, Airflow); worked at Tytan Technologies on edge AI and drone systems (GitHub bio)
- Co-founded Eggi, a YC-backed venture that raised $250K pre-seed (GitHub bio)
- Hackathon winner: Mistral AI Game Jam (€2,000 prize), Tech Berlin (GitHub bio)
- LinkedIn: linkedin.com/in/martin-mohammed-30019a207 (LinkedIn)
- GitHub: github.com/MartinMohammed — 15 public repos, 17 followers; notable repo: object-tracking-yolo-v8-mil (15 stars) (GitHub)

**Co-founder relationship:** Three of the founders (Zakariea, Stepan, Pasha) have TUM (Technische Universität München) connections — Zakariea studied at TUM, Pasha co-founded RoboTUM at TUM and worked at MIRMI, and Stepan was conducting robot learning research. [Inferred]: The founding team likely formed through the TUM robotics community. Martin Mohammed is also based in Munich (GitHub).

**Founder-market fit:** The team combines ML engineering experience at automotive OEMs (Bosch, BMW), robotics community leadership (RoboTUM, ESRA), early robot learning research, and cloud/infrastructure engineering. Martin Mohammed brings prior startup experience (Eggi, YC-backed) and relevant computer vision work (YOLOv8 object tracking). The team's backgrounds span the core technical requirements of the product (ML policy training, robotic manipulation, cloud infrastructure for teleoperator routing). No advisors, board members, or notable angel investors were found in public sources.

## Key Risks

**Teleoperation cost scaling:** The business model's economics depend on the ratio of autonomous vs. human-intervened actions. If the autonomous success rate plateaus below a threshold where teleoperator costs exceed per-station revenue, the RaaS model becomes uneconomical. The company has not disclosed autonomy rates or teleoperator staffing ratios.

**Competitive capital disadvantage:** Direct competitors Nimble ($221M raised; The Robot Report) and Dexterity (~$300M raised; Bloomberg) have 400–600x InLoop's funding. These competitors are deploying at enterprise scale with FedEx, UPS, and GXO, accumulating operational data that strengthens their own models. InLoop must demonstrate a faster learning rate per dollar invested to remain competitive.

**Hardware risk in a software-first team:** The team's visible backgrounds are in ML, software, and community building. Manufacturing and deploying bimanual robotic hardware requires mechanical engineering, supply chain management, and field service capabilities. No team member with visible hardware/mechanical engineering credentials was identified in public sources.

**Name collision:** "InLoop" is shared with at least two other entities — an AI content curation company (@InLoop_ on Twitter) and a separate Product Hunt listing. This may cause confusion in brand searches and SEO.

**Regulatory and safety liability:** Deploying robots in warehouses involves occupational safety compliance (OSHA in the US, EU Machinery Directive in Europe). The confidence-based pause-and-escalate architecture is a mitigation, but the company's approach of shipping "imperfect policies" into production environments carries liability exposure if a failure mode is not caught by the Safety Module.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $6.51B in 2025, projected $25.41B by 2034 at 16.80% CAGR (Fortune Business Insights, 2026 via search snippet) |
| SAM | No public data found |
| Traction | NVIDIA Inception member (InLoop website); zero breakdowns claimed (InLoop website); no customer names, user counts, or deployment metrics found publicly |
| Revenue Signal | No public data found |
| Founders | Zakariea Sharfeddine (Co-founder): ML at Bosch & BMW, BS KIT. Stepan Feduniak (Co-founder): robot learning research at 18. Pasha Rizali (Co-founder): RoboTUM & ESRA founder, EE/CS student. Martin Mohammed (Team): IBM RL intern, Eggi co-founder (YC-backed, $250K pre-seed) |
| Competitors | Nimble ($221M raised, $1B valuation, revenue unknown, autonomous fulfillment with FedEx; The Robot Report, Sep 2024); Dexterity (~$300M raised, $1.65B valuation, revenue unknown, heavy-payload truck loading; Bloomberg, Mar 2025); Contoro ($12M Series A, revenue unknown, parcel unloading; Sourcing Journal, Mar 2025) |
| Moat Signals | Data flywheel from teleoperator interventions generating training data (YC page); NVIDIA Inception membership (InLoop website) |
| Risk Factors | Teleoperation cost scaling, 400-600x competitor capital advantage, hardware execution with software-focused team |
| Founder Reach | Zakariea: Twitter @Zakariea_sh (count not retrievable), LinkedIn (count not retrievable), GitHub github.com/Zasha01. Stepan: Twitter @FeduniakS (count not retrievable), LinkedIn (profile found). Pasha: Twitter @PashaRizali (count not retrievable), LinkedIn (profile found). Martin: GitHub 17 followers/15 stars (GitHub) |
| Distribution Signals | No public data found |
| Emails | founders@inloop-robotics.com (company website) |
