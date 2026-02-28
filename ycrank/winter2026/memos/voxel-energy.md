# Voxel Energy

> Energy independent data centers with solar and repurposed batteries.

| Field | Value |
|-------|-------|
| Website | https://voxelenergy.com/ |
| YC Page | https://www.ycombinator.com/companies/voxel-energy |
| Batch | Winter 2026 |
| Industry | Industrials / Industrials -> Energy |
| Team Size | 3 |
| Location | San Francisco, United States (Extruct AI) |
| Tags | Renewable Energy, Infrastructure, AI |

## The Idea

**Problem:** AI infrastructure demand has overwhelmed electrical grid capacity. Average data center time-to-power is five years and growing (YC Launch page). The company cites "$3 Trillion in data center projects slated for construction by 2030, yet half may never be built due to power constraints" (YC Launch page). The constraint on AI deployment has shifted from semiconductor supply to power availability. Customers today must wait in utility interconnection queues or negotiate complex power purchase agreements, delaying deployments by years.

**Approach:** Voxel builds data centers with co-located solar arrays, second-life EV battery storage, and backup generation to provide 24/7 off-grid power. The system uses a proprietary DC-native microgrid architecture that eliminates traditional AC-to-DC conversion stages, reducing energy loss from approximately 30% to approximately 4% (Sift partnership page). This bypasses utility interconnection queues entirely, enabling deployment "from a vacant lot to a powered, monitored data center in months, not years" (Sift partnership page). The DC-native design has 5,400% overhead capacity on load rating for handling AI power demand surges (Sift partnership page).

**Differentiation:** Unlike grid-connected renewable data center operators (e.g., Crusoe, Lancium) that still require grid interconnection or gas turbine backup, Voxel operates entirely off-grid. Compared to Exowatt's thermal storage approach (storing energy as heat in rocks), Voxel uses second-life EV batteries in a DC microgrid — leveraging a growing supply of retired EV batteries rather than proprietary thermal media. Versus EdgeCloudLink's hydrogen fuel cell approach, Voxel avoids hydrogen supply chain complexity. The use of second-life batteries specifically provides a cost advantage over new battery storage while addressing a growing waste stream from EV retirements.

**Business Model:** No public pricing page was found. The company states it is "accepting capacity reservations" for existing sites (YC Launch page). [Inferred]: Most likely monetization path is selling compute capacity with bundled power at a per-kW or per-rack rate, or leasing powered data center space, given the integrated power-plus-compute offering.

**TAM/SAM:** The global data center power market was valued at $22.93 billion in 2025 and is projected to reach $70.21 billion by 2034 at 13.24% CAGR (Precedence Research, 2025 via search snippet). The offsite data center power infrastructure market was valued at $15.9 billion in 2025 and projected to reach $79.76 billion by 2035 at 17.50% CAGR (Astute Analytica, January 2026 via search snippet). The second-life EV battery market is projected to grow from $1.70 billion in 2026 to $224.24 billion by 2040 at 41.72% CAGR (Roots Analysis via search snippet).

**GTM / Distribution:** The YC Launch page calls for "GPU-equipped partners experiencing power delays" to reserve capacity, suggesting an initial B2B sales motion targeting AI companies and GPU cloud providers stuck in utility queues. The company reports "thousands of acres already under contract" (YC page) and is "amassing battery inventory" (YC Launch page). [Inferred]: Most likely distribution path is direct enterprise sales to hyperscalers and AI compute companies facing power bottlenecks, with land and battery procurement as the key supply-side constraints.

## Defensibility

The DC-native microgrid architecture represents proprietary technical know-how, though no patents were found in public sources. The company's procurement pipeline of second-life EV batteries and land contracts (thousands of acres under contract per YC page) creates a supply-side moat that takes time to replicate. The integration of battery management, solar generation, and DC power distribution into a single system adds technical complexity.

[Inferred]: Over time, defensibility could develop through accumulated operational data on second-life battery degradation curves, long-term land leases in favorable solar regions, and proprietary battery management systems optimized for data center load profiles.

**Market structure:** Traditional utilities face regulatory constraints and business model conflicts that make off-grid data center power unattractive — their revenue model depends on grid-connected ratepayers, and providing off-grid solutions would cannibalize their core business. Large data center developers (Equinix, Digital Realty) are primarily real estate operators, not vertically integrated power providers, and adopting a fully off-grid model would require fundamentally different expertise and capital deployment. [Inferred]: The structural barrier is that incumbents' existing revenue models (utility rate-based returns, data center lease income) are incompatible with a vertically integrated off-grid power-plus-compute model.

**Commoditization risk:** The individual components (solar panels, batteries, data center hardware) are commodity. The integration challenge and DC microgrid architecture represent the defensible layer, but well-funded competitors like Crusoe ($3.9B raised) are already building off-grid data centers with second-life batteries through a Redwood Materials partnership (Latitude Media, 2025). Exowatt ($140M raised) is pursuing an adjacent approach with thermal storage. The technical barrier to entry is moderate — the key differentiator is speed of execution and supply chain positioning rather than technology alone.

## Market & Traction

**Traction signals:**
- Systems prototype operational and running off-grid compute (YC page, YC Launch page)
- "Thousands of acres already under contract" (YC page, updated from initial "hundreds of acres")
- Currently accumulating battery inventory (YC Launch page)
- Accepting capacity reservations for existing sites (YC Launch page)
- YC Launch page received 41 upvotes (YC Launch page, ~23 days prior to Feb 19, 2026)
- Partnership with Sift (observability platform) for monitoring integration (Sift website)
- YC Partner: Jon Xu (Extruct AI)
- LinkedIn company page exists at linkedin.com/company/voxel-energy; follower count not retrievable
- No Twitter/X account found for Voxel Energy specifically
- No Product Hunt launch found
- No app store presence
- No public revenue data found

**Competitive landscape:**

1. **Crusoe** ($3.9B raised in debt and equity; projected $850M revenue in 2025, cloud ARR $1.52B; Sacra/SiliconANGLE via search snippet): Originally built mobile data centers co-located with flared natural gas, now pivoting to large-scale AI data centers. Partnered with Redwood Materials for second-life EV battery-powered off-grid data center. Operates 86 mobile data centers across 30 sites. Differentiation vs. Voxel: Crusoe is far more capitalized and operates at much larger scale with a 45 GW power pipeline, but historically relied on gas-based power before pivoting toward renewables.

2. **Exowatt** ($140M raised across seed, Series A, and extension; revenue unknown; ESG Today/TechCrunch via search snippet): Uses P3 solar technology to store energy as heat in rocks and convert to electricity on demand. Backed by Sam Altman and Andreessen Horowitz. Based in Miami. Differentiation vs. Voxel: Exowatt uses proprietary thermal storage (hot rocks) rather than electrochemical batteries, targeting a lower cost per kWh but with less-proven technology at scale.

3. **Lancium** ($1.25B+ raised, including $500M from Blackstone; revenue unknown; DCD/Tracxn via search snippet): Builds gigawatt-scale data center campuses in West Texas integrated with renewable energy and grid infrastructure. Over 5 GW planned. Differentiation vs. Voxel: Lancium is grid-connected and focused on multi-GW campus-scale developments with utility-grade infrastructure, versus Voxel's off-grid modular approach.

4. **EdgeCloudLink (ECL)** ($10M raised from Hyperwise Ventures; revenue unknown; DCD via search snippet): Deploys hydrogen-powered modular data centers. First site in Mountain View, CA; TerraSite-TX1 in Texas. Differentiation vs. Voxel: ECL uses green hydrogen fuel cells for off-grid power, requiring hydrogen supply chain vs. Voxel's solar+battery approach.

**Why now:**
- [Inferred]: Several converging factors opened this opportunity: (1) AI compute demand surge has created an acute data center power bottleneck, with utility interconnection queues stretching to 5+ years; (2) a rapidly growing supply of second-life EV batteries from early EV adoption waves (the second-life battery market is projected to grow at 41.72% CAGR through 2040 per Roots Analysis via search snippet); (3) solar panel costs have continued declining, improving the economics of large-scale off-grid solar; (4) the emergence of DC-native computing architectures (GPUs and AI accelerators operate on DC power natively), making DC microgrids more efficient by eliminating AC conversion losses.

## Founders & Team

**Casey Spencer** — Co-founder & CEO
- Spent 7.5 years at Tesla; served as Project Manager for Tesla Autopilot (YC page, Fondo)
- Founded three hardware companies prior to Voxel Energy (YC page)
- Background from Make School (search snippet)
- Founded ItsWare, a hardware asset management company (LinkedIn search snippet)
- Won awards at CalHacks for "Teslapathic" brain-controlled vehicle technology project, including Most Technically Challenging and First Overall Hack (search snippet)
- Twitter/X: @_caseyspencer (search result, count not retrievable)
- LinkedIn: linkedin.com/in/casey-spencer — headline references ItsWare (search snippet)
- GitHub: No public repos found

**Max Pfeiffer** — Co-founder & CTO
- Former Tesla engineer, designed electric big-rig prototypes (YC page)
- Forbes 30 Under 30 honoree in 2025 in Automotive and Clean Energy Technologies (YC page, search snippets)
- Founded Maxwell Vehicles, described as a "multi-million-dollar EV manufacturing business" built out of UW ECE (University of Washington, Electrical & Computer Engineering) (YC page, Fondo)
- Maxwell Vehicles built the "first economically sustainable and materially circular model for manufacturing EVs using second-life EV batteries and motors" (YC Launch page)
- Twitter/X: Maxwell Vehicles account @MaxwellVehicles exists; personal account not found
- LinkedIn: linkedin.com/in/maxpfeiffer — headline references Maxwell Vehicles (search snippet)
- GitHub: github.com/max-pfeiffer exists but appears to belong to a different person (DevOps engineer at Swisscom)

**Evan Schmidt** — Co-founder & COO
- Over a decade of experience in architecture and commercial construction (YC page)
- Managed millions of dollars in commercial, HVAC, and data center construction projects (YC Launch page, Fondo)
- Described as having "hands-on engineering and fabrication expertise" (F6S search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/zephyrschmidt (Extruct AI)
- GitHub: No public repos found

**Co-founder relationship:** Casey Spencer and Max Pfeiffer both worked at Tesla, providing a shared employer connection. Max Pfeiffer's Maxwell Vehicles work with second-life EV batteries directly connects to Voxel's core technology of repurposing EV batteries for data center energy storage. No public data on how Evan Schmidt connected with the other founders.

**Founder-market fit:** The team combines Tesla engineering experience (Spencer and Pfeiffer), demonstrated ability to build hardware companies from scratch (Spencer with three prior ventures, Pfeiffer with Maxwell Vehicles), and direct domain expertise in second-life EV battery systems (Pfeiffer's Maxwell Vehicles built EVs using second-life batteries). Schmidt contributes practical data center construction management experience. The combination of EV battery expertise, hardware startup experience, and construction management aligns with Voxel's challenge of physically building off-grid data centers powered by repurposed batteries.

## Key Risks

**Crusoe competitive overlap:** Crusoe, with $3.9B in funding, has partnered with Redwood Materials to build off-grid data centers using second-life EV batteries — a directly overlapping approach. Crusoe's 45 GW power pipeline and existing 86-site operational footprint represent a significant head start (SiliconANGLE, October 2025 via search snippet).

**Second-life battery supply chain uncertainty:** The second-life EV battery market is nascent, accounting for less than 0.1% of grid-scale projects in North America (Utility Dive via search snippet). Battery supply depends on EV retirement rates, which are still ramping. Degradation characteristics vary by chemistry, manufacturer, and usage history, creating quality control challenges at scale. Mitigation: Pfeiffer's prior Maxwell Vehicles experience with second-life batteries provides some domain expertise.

**Off-grid reliability and uptime risk:** Data center customers typically require 99.99%+ uptime. Operating entirely off-grid with solar and batteries (weather-dependent generation, battery degradation over time) introduces reliability challenges compared to grid-connected facilities with redundant utility feeds. The company mentions backup generation for 365-day redundancy (YC Launch page), but operational track record at commercial scale is unproven.

**Regulatory and permitting complexity:** Large-scale solar installations and data centers both face local permitting, environmental review, and land use regulation. Operating thousands of acres of solar+data center infrastructure across multiple jurisdictions could create delays, especially given increasing local opposition to data center development in some regions.

**Capital intensity vs. stage:** Building physical data centers with integrated power infrastructure is extremely capital-intensive. Competing against players with billions in funding (Crusoe, Lancium) while at pre-seed stage creates a significant financing gap. Each site requires substantial upfront investment in solar arrays, batteries, and data center hardware before generating revenue.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $22.93B data center power market in 2025, projected $70.21B by 2034 at 13.24% CAGR (Precedence Research, 2025 via search snippet); $15.9B offsite data center power infrastructure in 2025, projected $79.76B by 2035 at 17.50% CAGR (Astute Analytica, Jan 2026 via search snippet) |
| SAM | No public data found |
| Traction | Prototype operational and running off-grid compute (YC page); thousands of acres under contract (YC page); battery inventory accumulation in progress (YC Launch page); 41 upvotes on YC Launch (~late Jan 2026); Sift monitoring partnership (Sift website) |
| Revenue Signal | No public data found |
| Founders | Casey Spencer (CEO): 7.5 yrs at Tesla Autopilot, 3 prior hardware cos. Max Pfeiffer (CTO): ex-Tesla, Forbes 30U30 2025, founded Maxwell Vehicles. Evan Schmidt (COO): 10+ yrs architecture & data center construction. |
| Competitors | Crusoe ($3.9B raised, $850M projected 2025 revenue, off-grid data centers with second-life batteries via Redwood Materials); Exowatt ($140M raised, revenue unknown, thermal storage for data center power); Lancium ($1.25B+ raised, revenue unknown, GW-scale renewable data center campuses); EdgeCloudLink ($10M raised, revenue unknown, hydrogen-powered modular data centers) |
| Moat Signals | Proprietary DC microgrid architecture reducing energy loss to ~4% (Sift); thousands of acres under contract (YC page); second-life battery domain expertise from Maxwell Vehicles |
| Risk Factors | Direct competitive overlap with well-funded Crusoe ($3.9B), nascent second-life battery supply chain, off-grid reliability at commercial-scale SLAs, capital intensity at pre-seed stage |
| Founder Reach | Casey Spencer: Twitter @_caseyspencer (count not retrievable), LinkedIn linkedin.com/in/casey-spencer. Max Pfeiffer: Twitter not found (Maxwell Vehicles: @MaxwellVehicles), LinkedIn linkedin.com/in/maxpfeiffer. Evan Schmidt: Twitter not found, LinkedIn linkedin.com/in/zephyrschmidt |
| Distribution Signals | YC Launch page 41 upvotes (~late Jan 2026); accepting capacity reservations (YC Launch page); no Product Hunt, app store, or Chrome extension presence found |
