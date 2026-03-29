# InLoop Robotics

> Deploying robots that ask for help!

| Field | Value |
|-------|-------|
| Website | https://inloop-robotics.com/ |
| YC Page | https://www.ycombinator.com/companies/inloop-robotics |
| Batch | Spring 2026 |
| Industry | Industrials / Manufacturing and Robotics |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Robotics, Logistics, Automation |
| YC Partner | Tom Blomfield |
| Emails | founders@inloop-robotics.com |

## The Idea

**Problem:** Warehouse fulfillment operations face labor shortages, high turnover, and rising costs. Traditional automation requires $100K+ upfront capital and months of integration (inloop-robotics.com). Most robotics companies delay deployment until systems reach near-perfect autonomy, slowing real-world learning and extending time-to-value.

**Approach:** InLoop deploys a bimanual robotic system ("Loop V1") that uses "confidence-aware AI" with a Safety Module (inloop-robotics.com). When the AI is uncertain, it pauses operations and routes decisions to a remote human teleoperator for resolution, then syncs the learning back to the AI model. Capabilities include box assembly, kitting/multi-item order picking, visual inspection with AI defect detection, content preparation (labeling, wrapping, staging), and unpackaging (inloop-robotics.com). Every human intervention becomes training data, creating a continuous learning loop in production environments.

**Differentiation:** Unlike Nimble Robotics (fully autonomous general-purpose fulfillment robot, $221M raised; Nimble press release, Oct 2024) or Dexterity AI (mobile dual-arm robot for container loading, $291M raised; TechCrunch, Mar 2025), InLoop explicitly ships imperfect policies and uses a human-in-the-loop recovery system as a data flywheel. Pickle Robot (~$87–97M raised; Pickle Robot press release, Nov 2024) focuses narrowly on truck unloading. Formic ($52M+ raised; Modern Materials Handling, Jun 2024) offers RaaS for manufacturing but uses third-party robot hardware rather than building its own AI-native stack.

**Business Model:** Robotics-as-a-Service (RaaS) with a flat monthly subscription fee and zero upfront CapEx (inloop-robotics.com). Specific pricing tiers are not disclosed. The company positions the cost as "cheaper than human labor, with zero turnover" (inloop-robotics.com). [Inferred]: The per-robot monthly fee likely targets sub-FTE cost levels to justify replacement economics for warehouse operators.

**TAM/SAM:** The global warehouse robotics market was valued at $6.51 billion in 2025, projected to reach $13.5 billion by 2030 at 11.8% CAGR (Fortune Business Insights, 2026 via search snippet). The broader warehouse automation market was estimated at $19.23 billion in 2023, projected to reach $59.52 billion by 2030 at 18.7% CAGR (Grand View Research via search snippet). The RaaS segment specifically is forecast to grow at 18% CAGR through 2032 (MCF Corporate Finance, 2025 via search snippet). [Inferred]: The SAM for RaaS fulfillment robotics targeting small-to-mid-sized warehouses is a subset of the broader warehouse robotics TAM, but no public segment-specific estimate was found.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct sales to e-commerce fulfillment operators and 3PLs, starting with small-to-mid-sized warehouses where the zero-CapEx RaaS model removes the capital barrier that blocks traditional automation adoption.

## Defensibility

- **Data flywheel:** Every deployed robot generates failure-and-recovery training data that improves the shared AI model. More deployments produce more edge cases and interventions, which accelerate policy improvement (inloop-robotics.com). This advantage compounds with scale but is nascent at pre-seed stage.
- **Proprietary teleop-to-training pipeline:** The confidence-aware Safety Module and real-time human-in-the-loop recovery architecture constitute a custom system for converting operational failures into labeled training data (inloop-robotics.com). [Inferred]: This pipeline's value depends on the volume and diversity of deployment environments.
- **Switching costs:** [Inferred]: Once a warehouse integrates InLoop's system into its fulfillment workflow and the AI adapts to that facility's SKU mix and layout, switching to a competitor would require re-integration and loss of facility-specific model training.

**Market structure:** Large incumbents (e.g., Amazon Robotics, Symbotic) have invested heavily in fixed infrastructure automation designed for mega-scale facilities. [Inferred]: Their existing business models are optimized for large enterprise contracts with high upfront CapEx, creating a structural misalignment with the low-CapEx RaaS model targeting small-to-mid-sized operators. Additionally, Amazon's acquisition of Covariant's technology and team (Amazon, Aug 2024) suggests incumbents may prefer acqui-hiring AI talent over building competing RaaS offerings organically.

**Commoditization risk:** The human-in-the-loop approach is conceptually replicable. Well-funded competitors like Nimble ($1B valuation; Nimble press release, Oct 2024) and Dexterity ($1.65B valuation; Bloomberg, Mar 2025) have substantially more capital to invest in AI model training. Open-source robotic manipulation frameworks (e.g., Physical Intelligence's openpi, which Zakariea Sharfeddine has forked on GitHub) lower the barrier to building similar systems. [Inferred]: The defensibility hinges less on the concept and more on the accumulated deployment data and speed of iteration.

## Market & Traction

**Traction signals:**
- The company claims "multiple robots" deployed with customers and states "none of our deployed robots have broken" (inloop-robotics.com). No specific customer names, revenue, user counts, or growth metrics are disclosed.
- 0 open job postings (YC page, Mar 2026).
- Company Twitter/X account: not identified under "InLoop Robotics" branding. Founder accounts exist (see Founders section).
- LinkedIn: linkedin.com/company/inlooprobotics (YC page). Follower count not retrievable.
- No Product Hunt launch found for InLoop Robotics. A Product Hunt listing for "InLoop" (NFT membership tool) is a different company (Product Hunt).
- No press coverage in named publications found.
- No Discord/Slack community found.
- No app store or web traffic data applicable.

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. InLoop |
|---|---|---|
| **Nimble Robotics** | $221M total, $1B valuation (Series C, Oct 2024; Nimble press release) | Fully autonomous general-purpose fulfillment robot; FedEx as strategic investor/customer. Does not use a human-in-the-loop recovery model. |
| **Dexterity AI** | $291M total, $1.65B valuation (Series B, Mar 2025; TechCrunch) | Mobile dual-arm "Mech" robot for container loading/sorting; FedEx and UPS customers. Focused on heavier payloads (up to 132 lbs). |
| **Pickle Robot** | ~$87–97M total (Series B $50M, Nov 2024; Pickle Robot press release) | Specialized in truck unloading only; 30+ robot orders in Q3 2024. Narrower use case than InLoop's multi-function approach. |
| **Formic** | $52M+ total (Series A, Jun 2024; The Robot Report) | RaaS model using third-party robot hardware for manufacturing; partners with Mitsubishi HC Capital. Does not build proprietary AI-native manipulation stack. |
| **Berkshire Grey** | Acquired by SoftBank for ~$375M (Jul 2023; The Robot Report) | Enterprise-grade pick-and-pack systems for large retailers. Now SoftBank subsidiary, focused on strategic partnerships rather than SMB market. |

**Why now:**
- [Inferred]: Advances in vision-language-action (VLA) models and foundation models for robotic manipulation (e.g., Physical Intelligence, Google DeepMind RT-2) have crossed a capability threshold that makes "ship imperfect, improve continuously" viable—prior AI architectures degraded too rapidly outside training distributions.
- Annual AMR shipments are projected to grow from ~547,000 units (2023) to 2.79 million by 2030 (MCF Corporate Finance, 2025 via search snippet), indicating rapidly expanding adoption.
- Amazon's acqui-hire of Covariant's team (Aug 2024; Wikipedia) signaled validation of AI-first warehouse robotics while simultaneously removing an independent competitor from the market.
- [Inferred]: Persistent warehouse labor shortages and rising wages in logistics post-pandemic continue to push operators toward automation, lowering the sales resistance for RaaS offerings.

## Founders & Team

**Stepan Feduniak** — Co-founder
- No public education or work history found via web search.
- Twitter/X: @FeduniakS — follower count not retrievable.
- LinkedIn: linkedin.com/in/stepan-feduniak-b33045276/ — profile not accessible for details.
- GitHub: No public repos found.
- A FIDE chess profile exists for a Stepan Feduniak born 2007 from Ukraine (FIDE, profile #34150684); unclear if this is the same individual.

**Pasha Rizali** — Co-founder
- Education: BS in Electrical & Computer Engineering; pursuing MS in Computer Science at Technical University of Munich (TUM) (LinkedIn headline via search snippet).
- Co-founded RoboTUM, described as Germany's largest student robotics initiative, focused on building the fastest bipedal robot (Munich Startup).
- Previously worked at MIRMI (Munich Institute of Robotics and Machine Intelligence), contributing to communications, researcher interviews, and project support (search snippet via LinkedIn post).
- Participated in a TUM WARR competition involving reusable rocket design and construction (search snippet via LinkedIn).
- Silicon Valley Fellowship, Winter 2025 cohort (LinkedIn post, Silicon Valley Fellowship).
- Featured in a Silicon Valley Fellowship podcast episode discussing "what happens when robotics st[arts up]..." (Facebook, Silicon Valley Fellowship page).
- Twitter/X: @PashaRizali — follower count not retrievable.
- LinkedIn: linkedin.com/in/pasha-rizali — headline: "Aspiring Robotics Engineer | Computer Science Student with a Passion for Innovation."
- GitHub: No public repos found.

**Zakariea Sharfeddine** — Co-founder
- Education: BS Informatics, Karlsruhe Institute of Technology (KIT), 2020–2024 (RocketReach via search snippet). Also studied at TUM.
- Reinforcement Learning and Humanoid Robotics Engineer at RoboTUM (RocketReach via search snippet).
- Prior experience at BMW Group, Bosch, KIT, and KITec (RocketReach via search snippet).
- Member of team "RollsRoICE" that won 3rd place in the Digital Future Challenge 2026 with a Deutsche Bahn use case—developing a mini-robot for autonomously connecting/disconnecting water/wastewater systems on ICE trains (TUM news).
- Winner of 2025 BEHAVIOR Challenge (GitHub repo description).
- Twitter/X: @Zakariea_sh — follower count not retrievable.
- LinkedIn: linkedin.com/in/zakariea-sharfeddine — headline references "Stealth Startup" (search snippet).
- GitHub: github.com/Zasha01 — 9 followers; notable repos: VLA-Chess-Isaac-Sim (5 stars, teleoperation in IsaacLab), behavior-1k-solution (1 star, 2025 BEHAVIOR Challenge winner), fork of Physical Intelligence's openpi (GitHub).

**Co-founder relationship:** Pasha Rizali and Zakariea Sharfeddine are both connected through RoboTUM at TUM Munich—Rizali as co-founder of RoboTUM (Munich Startup) and Sharfeddine as a Reinforcement Learning and Humanoid Robotics Engineer at RoboTUM (RocketReach). No public data links Stepan Feduniak to TUM or RoboTUM.

**Founder-market fit:** Rizali and Sharfeddine bring direct robotics engineering experience from RoboTUM, where they worked on bipedal locomotion and manipulation. Sharfeddine's industrial experience at BMW and Bosch provides exposure to manufacturing automation requirements, and his winning the 2025 BEHAVIOR Challenge demonstrates competitive AI/robotics skills. Rizali's co-founding of Europe's largest student robotics initiative signals organizational and community-building ability. Feduniak's specific qualifications are not publicly documented. No advisors, board members, or notable angel investors have been publicly disclosed.

## Key Risks

**Well-funded direct competition:** Nimble ($221M raised, $1B valuation; Oct 2024), Dexterity ($291M raised, $1.65B valuation; Mar 2025), and Pickle Robot (~$87–97M raised; Nov 2024) are all building AI-driven warehouse robots with significantly more capital, deployed units, and named enterprise customers (FedEx, UPS). InLoop must differentiate on speed-to-deploy and the human-in-the-loop data flywheel before competitors close any capability gap.

**Teleoperator unit economics:** The core value proposition relies on human teleoperators to handle failures during early deployments. As deployment scales, the ratio of teleoperators to robots must decrease rapidly for the flat-fee RaaS model to remain economically viable. If the AI improvement rate is slower than expected, teleoperator costs could erode margins. No public data on current intervention frequency or teleoperator staffing ratios was found.

**Hardware reliability and liability in production:** The company claims "none of our deployed robots have broken" (inloop-robotics.com), but bimanual robots operating in real warehouse environments face mechanical wear, collision risks, and environmental variability. Hardware failures at customer sites could create liability exposure and damage reputation during the critical early-deployment phase.

**Name confusion:** Multiple unrelated companies use "InLoop" branding—InLoop (NFT membership tool on Product Hunt), InLoop (AI content curation for associations, @InLoop_ on Twitter), INLOOPX (software agency), and inLOOP VR. This could dilute brand discoverability and SEO in early marketing efforts.

**Founder public visibility gap:** One of three listed founders (Stepan Feduniak) has no retrievable public professional background, education, or work history. For an investment committee, this creates a diligence gap regarding team completeness and the distribution of technical vs. business responsibilities.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $6.51B warehouse robotics market in 2025, projected $13.5B by 2030 at 11.8% CAGR (Fortune Business Insights, 2026 via search snippet) |
| SAM | No public data found |
| Traction | "Multiple robots" deployed, zero breakage claimed (inloop-robotics.com); no customer names, revenue, or growth metrics disclosed |
| Revenue Signal | No public data found |
| Founders | Stepan Feduniak (Co-founder): no public credentials found. Pasha Rizali (Co-founder): BS ECE, MS CS at TUM, co-founded RoboTUM. Zakariea Sharfeddine (Co-founder): BS Informatics KIT, RL engineer at RoboTUM, BMW/Bosch experience, 2025 BEHAVIOR Challenge winner. |
| Competitors | Nimble ($221M raised, revenue unknown, fully autonomous general-purpose fulfillment; Nimble press release Oct 2024). Dexterity ($291M raised, revenue unknown, heavy-payload mobile dual-arm; TechCrunch Mar 2025). Pickle Robot (~$87–97M raised, revenue unknown, truck unloading specialist; Pickle Robot press release Nov 2024). Formic ($52M+ raised, revenue unknown, RaaS with third-party hardware; The Robot Report Jun 2024). |
| Moat Signals | Teleop-to-training data flywheel from production deployments (inloop-robotics.com); confidence-aware Safety Module architecture (inloop-robotics.com) |
| Risk Factors | Well-funded direct competitors, teleoperator unit economics uncertainty, founder visibility gap |
| Founder Reach | Stepan Feduniak: Twitter @FeduniakS (count not retrievable), LinkedIn (profile not accessible). Pasha Rizali: Twitter @PashaRizali (count not retrievable), LinkedIn (accessible). Zakariea Sharfeddine: Twitter @Zakariea_sh (count not retrievable), LinkedIn (accessible), GitHub 9 followers/5 stars top repo. |
| Distribution Signals | No public data found |
| Emails | founders@inloop-robotics.com (inloop-robotics.com) |
