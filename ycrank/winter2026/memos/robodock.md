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

## The Idea

**Problem:** Autonomous and electric vehicle fleets can drive themselves but cannot operate themselves at the depot. Fleet operators face ~$900K annually in charging labor and overhead per depot and up to $650K in vehicle downtime costs per depot (YC company page). Today, depot operations — plugging in chargers, performing vehicle readiness checks, managing charging schedules — are handled manually by human workers, creating a bottleneck that limits fleet uptime and drives up operational costs.

**Approach:** RoboDock builds robotic systems that physically automate depot tasks. The system uses vision-guided alignment to locate and insert charging plugs, thermal and visual sensing to perform automated vehicle inspections, and closed-loop learning where each charge event improves system accuracy and efficiency (robodock.tech). The process follows four stages: vehicle arrival at stall, plug insertion with vision guidance, automated vehicle inspection, and system learning. The product is designed to be compatible with existing depots, chargers, and vehicle types (YC company page).

**Differentiation:** Unlike software-only fleet management platforms (e.g., charge scheduling tools), RoboDock combines physical robotic actuation with intelligent perception. Compared to Rocsys, which focuses primarily on the robotic charging connector itself, RoboDock frames its product as a broader depot automation platform encompassing both charging and vehicle inspections. Compared to Autev, which builds mobile charging robots that go to vehicles, RoboDock automates operations at fixed depot locations where fleet vehicles return. Compared to EVAR, which offers standalone smart chargers, RoboDock's approach integrates robotics with inspection and learning systems for fleet-scale depot management.

**Business Model:** No public pricing page was found on robodock.tech. The website offers demo booking. [Inferred]: The most likely monetization path is a SaaS + hardware model — a per-depot or per-robot subscription fee layered on top of hardware deployment costs — consistent with the "SaaS" tag on their YC profile and the company's description of turning depots into "self-running systems."

**TAM/SAM:** The global EV charging infrastructure market was estimated at $40.22B in 2025, projected to reach $125.39B by 2030 at 25.5% CAGR (Grand View Research, 2025 via search snippet). The autonomous vehicle fleet operations market was estimated at $535.8M in 2024, expected to reach $12.8B by 2034 at 36.8% CAGR (Global Market Insights, 2024). RoboDock's YC page cites projections of 76M autonomous vehicles by 2035 and AV market growth from $200B to $3T (YC company page). No public SAM estimate specific to robotic depot automation was found.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct sales to commercial AV and EV fleet operators (transit agencies, ride-hail companies, logistics fleets) starting with depot pilot installations. The demo-booking flow on the website suggests an enterprise sales motion. San Francisco location positions the company near major AV fleet operators (Waymo, Cruise, Zoox).

## Defensibility

RoboDock's potential defensibility rests on several factors. The closed-loop learning system described on their website implies a data advantage: each charge event generates data that improves system accuracy, meaning early deployments could create a compounding performance advantage over time. Integration of physical robotics with perception software across diverse depot environments creates technical complexity — building reliable robotic systems that work across different charger types, vehicle form factors, and depot layouts is an engineering challenge that takes time to replicate. Switching costs could develop as the system becomes embedded in depot infrastructure and workflows.

However, these moat signals are nascent. No patents, published IP, or network effects are identifiable from public sources at this stage.

**Market structure:** Large incumbent charger manufacturers (ChargePoint, ABB, Siemens) are focused on selling charging hardware and software, not on robotic depot automation. Building physical robots that manipulate chargers and inspect vehicles requires a different engineering competency (soft robotics, computer vision, mechatronics) than manufacturing chargers. AV operators (Waymo, Cruise) could build in-house depot automation, but this is a non-core infrastructure function that may be more efficiently outsourced. [Inferred]: The structural barrier is that charger OEMs would need to develop an entirely new robotics division and product line to compete, which conflicts with their core hardware sales model.

**Commoditization risk:** Rocsys (Netherlands, ~$44.6M raised) has been developing robotic EV charging since 2019 and has partnerships with major OEMs including IONITY, Audi, Porsche, BMW, Ford, and Mercedes-Benz (Rocsys press releases, 2024). Mob Energy (France, ~$28.85M raised) builds mobile charging robots. VOLTERIO (Austria) develops automatic conductive charging with Continental as a partner. These companies demonstrate that robotic charging is an active area of investment and development, and well-funded competitors could expand into full depot automation.

## Market & Traction

**Traction signals:** RoboDock is a pre-seed company in Y Combinator's Winter 2026 batch, founded in 2025 (YC company page). The company website displays projected performance claims: $1.2M+ recovered per depot annually, 30% reduction in energy costs, 99% fleet uptime, 40% decrease in labor overhead, and 25% increase in asset utilization (robodock.tech) — these appear to be modeled outcomes, not confirmed customer results. No paying customers, revenue, user counts, or signed LOIs were found in public sources. No Product Hunt listing was found. No app store presence was found. An Instagram reel was identified where a founder pitches the startup (Instagram @reel/DT2v5PqDXw5, title: "This startup founder pitches me her startup Robodock months..."), but content could not be extracted. The @robodock handle on X and the LinkedIn /company/robodock page belong to an unrelated Dutch arts/technology festival, not the YC startup. No confirmed company social media accounts were found for the YC startup. No Discord or Slack community was found. The company has 0 open job postings (YC company page).

**Competitive landscape:**

- **Rocsys** (~$44.6M raised, most recent round $36M Series A-II in July 2023; revenue unknown). Netherlands-based. Focuses specifically on robotic charging connectors with OEM partnerships (IONITY, Audi, BMW, Ford, Mercedes-Benz, Porsche). Differentiation vs. RoboDock: Rocsys is narrower in scope (charging connector only, not full depot automation including inspections) but significantly more mature with major automotive partnerships (Rocsys newsroom, Crunchbase via search snippet).

- **EVAR** (~$22M raised, most recent round $16.88M Series B; revenue unknown). South Korea-based. Builds smart EV chargers including robotic elements. Won CES 2022 Innovation Awards in two categories (Business Wire, Dec 2021 via search snippet). Differentiation vs. RoboDock: EVAR focuses on the charger hardware product rather than depot-level automation and fleet operations.

- **Mob Energy** (~$28.85M raised, most recent round €10M Series A in July 2023; revenue unknown). France-based. Develops mobile robotic EV charging robots that navigate to vehicles. Differentiation vs. RoboDock: mobile robot-to-vehicle model versus RoboDock's fixed-depot automation approach (Crunchbase, Tracxn via search snippet).

- **Autev** (pre-funding/bootstrapped as of June 2024). Seattle-based, founded 2023, housed at UW CoMotion Labs. Builds autonomous mobile charging robots. Differentiation vs. RoboDock: similar autonomous charging concept but focused on mobile on-demand delivery of power rather than depot infrastructure automation (GeekWire, June 2024 via search snippet).

- **VOLTERIO** (funded, amount undisclosed; Graz, Austria, founded 2016). Develops automatic conductive charging systems with Continental partnership. Differentiation vs. RoboDock: hardware-focused automatic charging plug with automotive OEM integration rather than depot-level operations platform (Crunchbase via search snippet).

**Why now:** Several converging factors open this opportunity. The autonomous vehicle industry is rapidly scaling commercial deployments — Waymo, Cruise, and others now operate multi-hundred-vehicle fleets that require daily depot cycling. The number of commercial EV fleets (transit, logistics, ride-hail) is growing as electric vehicles reach total-cost-of-ownership parity with ICE vehicles in fleet applications. [Inferred]: As fleet sizes cross a threshold (likely hundreds of vehicles per depot), manual depot operations become a binding constraint on fleet economics and uptime, creating urgency for automation. The maturation of computer vision and soft robotics technologies — demonstrated by companies like Zipline (where founder Zinny Weli worked on autonomous charging) — has reached a reliability level sufficient for repetitive industrial manipulation tasks.

## Founders & Team

**Zinny Weli** — Co-founder & CEO
- BSME from University of Michigan (top 1% of class); MSME (Robotics) from Stanford University (zinnyweli.com/resume via search snippet)
- Previously led autonomous drone charging infrastructure at Zipline (YC company page, The Org)
- Designed the charging system for Amazon's home robot (Astro) and advanced robotic manipulation R&D for next-generation Amazon products (YC company page)
- Field engineering experience across rural Indonesia, UNESCO heritage sites in Peru, and wildlife reserves in China (search snippet from YC page)
- Associated with Pear VC (LinkedIn headline via search snippet — nature of relationship unclear, possibly fellowship or venture role)
- Twitter/X: No confirmed public account found (the @robodock handle belongs to an unrelated Dutch festival)
- LinkedIn: linkedin.com/in/eweli/ — "Building new tech | Ex Zipline, Amazon, Stanford Robotics" (follower count not retrievable)
- GitHub: No public repos found

**Celine Wang** — Co-founder & CTO
- Senior Mechatronics Engineer at Plus, where she integrated actuator and sensor systems to enable autonomous semi-truck fleets (YC company page)
- Background in autonomous systems and mechatronics (robodock.tech)
- Education details: Stanford University connection indicated by search results (Stanford course instructor listing for "celinew" found via search); a LinkedIn profile matching "Celine Wang - University of California, Berkeley" also appeared, but cannot confirm if same individual
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/celine-w-655248198/ — listed as "Senior Mechatronics Engineer - Plus" (may not yet reflect RoboDock role; follower count not retrievable)
- GitHub: github.com/CelineWW appeared in search results but cannot confirm this belongs to the RoboDock co-founder

**Co-founder relationship:** Both founders have Stanford connections — Zinny Weli holds an MS from Stanford and Celine Wang appears in Stanford course records. Both worked in the autonomous vehicle/robotics industry in the San Francisco Bay Area (Zinny at Zipline/Amazon, Celine at Plus). No specific shared employer or confirmed overlap found from public data.

**Founder-market fit:** Zinny Weli's direct experience designing autonomous charging systems at Zipline (drone fleet charging infrastructure) and Amazon (home robot charging) is closely aligned with RoboDock's mission of automating depot charging. Celine Wang's mechatronics engineering at Plus, where she worked on actuator and sensor integration for autonomous semi-trucks, provides the hardware-software integration expertise needed for building robotic depot systems. Together, they bring complementary experience: Zinny from the charging/energy side and Celine from the vehicle platform/mechatronics side. Gustaf Alstromer (YC Group Partner) is listed as their YC partner (YC company page).

## Key Risks

**Well-funded incumbent competitors in robotic charging:** Rocsys has raised ~$44.6M and secured partnerships with IONITY, Audi, BMW, Ford, Mercedes-Benz, and Porsche (Rocsys newsroom, 2024). Mob Energy has raised ~$28.85M. These companies have multi-year head starts in robotic EV charging and established relationships with automotive OEMs. RoboDock would need to differentiate on the broader depot automation value proposition (charging + inspections) to avoid competing directly on the robotic charging connector alone.

**Brand disambiguation with unrelated "Robodock" festival:** The @robodock handle on X/Twitter and the linkedin.com/company/robodock LinkedIn page both belong to an Amsterdam-based arts and technology festival called "Robodock" (confirmed via WebFetch of both pages). This creates SEO confusion and limits the company's ability to claim its name across key social platforms.

**Hardware deployment complexity:** Robotic systems that physically interact with diverse charger types, vehicle form factors, and depot layouts face integration challenges that software-only products do not. Each new depot deployment may require custom calibration and configuration. Scaling hardware deployments is capital-intensive and slower than scaling software, which could limit growth velocity.

**Customer concentration risk in nascent AV market:** The addressable customer base of autonomous vehicle fleet operators with depot-scale needs is currently small (primarily Waymo, Cruise/GM, Zoox/Amazon, Aurora, and a handful of autonomous trucking companies). If any of these large operators decide to build in-house depot automation, or if AV deployment timelines slip further, RoboDock's near-term market could contract.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $40.22B global EV charging infrastructure market in 2025, 25.5% CAGR to $125.39B by 2030 (Grand View Research via search snippet); $535.8M autonomous vehicle fleet operations market in 2024, 36.8% CAGR to $12.8B by 2034 (Global Market Insights) |
| SAM | No public data found for robotic depot automation as a distinct segment |
| Traction | No public data found (pre-seed, W26 YC batch; website shows modeled metrics, not confirmed customer results) |
| Revenue Signal | No public data found (no pricing page; demo booking available on website) |
| Founders | Zinny Weli (CEO): Stanford MS Robotics, ex-Zipline (autonomous charging), ex-Amazon (home robot charging). Celine Wang (CTO): ex-Plus (autonomous trucks), mechatronics engineer. |
| Competitors | Rocsys (~$44.6M raised, revenue unknown, robotic charging connector with major OEM partnerships vs. RoboDock's full depot automation); EVAR (~$22M raised, revenue unknown, smart EV chargers vs. RoboDock's robotics + inspections); Mob Energy (~$28.85M raised, revenue unknown, mobile charging robots vs. RoboDock's fixed-depot model); Autev (pre-funding, mobile on-demand charging robots); VOLTERIO (funded amount undisclosed, automatic conductive charging with Continental) |
| Moat Signals | Closed-loop learning system described on website (data flywheel potential); technical complexity of integrated robotics + perception + fleet software; no patents or IP filings found |
| Risk Factors | Well-funded robotic charging incumbents (Rocsys $44.6M, Mob Energy $28.85M), brand conflict with unrelated Dutch "Robodock" festival on social platforms, hardware deployment scaling challenges, small near-term addressable customer base |
| Founder Reach | Zinny Weli: Twitter not found, LinkedIn linkedin.com/in/eweli/ (count not retrievable), GitHub not found. Celine Wang: Twitter not found, LinkedIn linkedin.com/in/celine-w-655248198/ (count not retrievable), GitHub not confirmed. |
| Distribution Signals | No public data found (no Product Hunt listing, no confirmed company social media accounts, no app store presence, 0 job postings) |
