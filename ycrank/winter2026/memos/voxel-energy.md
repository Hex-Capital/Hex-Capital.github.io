# Voxel Energy

> Energy independent data centers with solar and repurposed batteries.

| Field | Value |
|-------|-------|
| Website | https://voxelenergy.com/ |
| YC Page | https://www.ycombinator.com/companies/voxel-energy |
| Batch | Winter 2026 |
| Industry | Industrials / Industrials -> Energy |
| Team Size | 3 |
| Location | San Francisco, United States (Extruct AI profile) |
| Tags | Artificial Intelligence, Hard Tech, Energy, Renewable Energy, Infrastructure |
| YC Partner | Jon Xu |
| Emails | No public data found |

## The Idea

**Problem:** AI data center demand has outstripped grid capacity. The average time-to-power for a new data center grid connection is five years and growing (YC Launch page). Voxel claims $3 trillion in data center projects are slated for construction by 2030, yet half may never be built due to power constraints (YC Launch page, Fondo blog). The bottleneck has shifted from chip supply to power supply. Hyperscalers and AI companies currently wait in utility interconnection queues or pay for expensive bridge-to-grid solutions.

**Approach:** Voxel builds data centers with integrated onsite solar generation, second-life EV battery storage, and backup generation that operate entirely off-grid. The core technical mechanism is a proprietary DC-native microgrid architecture. Traditional AC-based data center power systems lose up to 30% of energy through AC-DC conversion stages; Voxel's DC-native approach reduces conversion losses to approximately 4% (Sift partnership page). By eliminating grid dependence, Voxel bypasses utility interconnection queues entirely and claims to deliver powered data centers in months rather than years.

**Differentiation:** Compared to Exowatt (solar thermal storage using heated rocks), Voxel uses second-life EV batteries as its storage medium, which are already mass-produced and available immediately. Compared to Crusoe Energy (which uses stranded natural gas), Voxel uses solar + batteries for a fully renewable approach. Compared to Enchanted Rock (natural gas microgrids as bridge-to-grid), Voxel offers a permanent off-grid solution rather than a temporary bridge. The use of second-life EV batteries specifically is a differentiator — these batteries retain ~70-80% capacity after automotive use and are available at a fraction of new battery cost, giving Voxel a potential unit-economics advantage.

**Business Model:** No public pricing page or revenue data found. [Inferred]: Most likely monetization path is selling or leasing powered data center capacity ($/MW or $/rack) as a combined power-and-infrastructure offering, potentially structured as a power purchase agreement (PPA) bundled with colocation or build-to-suit.

**TAM/SAM:** The global data center power market is projected to reach $50.51 billion by 2030, up from $35.14 billion in 2025, at a CAGR of 7.5% (MarketsandMarkets, 2025 via search snippet). The second-life EV battery market is projected to reach 330–350 GWh by 2030 at a CAGR of ~65% (MarketsandMarkets, 2025 via search snippet). McKinsey estimates $6.7 trillion in total data center capital expenditure needed worldwide by 2030 (McKinsey via search snippet). No SAM estimate specific to off-grid solar-powered data centers was found.

**GTM / Distribution:** The company states it is "accepting reservations for existing sites" (YC page). [Inferred]: Most likely distribution path is direct enterprise sales to AI companies, hyperscalers, and data center developers who are blocked by utility interconnection queues, starting with sites where land and solar resources are already under contract.

## Defensibility

**Technical complexity:** The DC-native microgrid architecture integrating second-life EV batteries with solar and backup generation requires specialized power electronics and battery management system engineering. The company claims 5,400% overhead capacity on load rating to handle AI training power surges (Sift partnership page), suggesting proprietary power distribution design.

**Supply chain positioning:** Voxel claims to be "already amassing batteries" (YC Launch page), and the company reports "thousands of acres already under contract" (YC Launch page). Early control of second-life EV battery supply and land positions could create procurement advantages.

**Operational know-how:** Managing heterogeneous second-life battery packs (varying chemistries, degradation levels, and form factors) for reliable 24/7 data center operation is an engineering challenge that creates a learning-curve barrier. The Sift partnership for real-time monitoring of battery degradation and anomaly detection suggests investment in operational reliability systems.

No patents or formal IP were identified in public sources.

**Market structure:** Grid-connected utilities face structural conflicts in enabling off-grid solutions, as each off-grid data center represents lost revenue. Traditional data center developers (Equinix, Digital Realty) are tied to grid-connected models with long-term utility contracts and sunk infrastructure — pivoting to off-grid would cannibalize their existing capacity investments and utility relationships. However, these incumbents have the capital to acquire off-grid capability if the model proves out.

**Commoditization risk:** Solar + battery microgrid systems are not inherently proprietary. Large EPC firms, battery integrators, and energy companies (e.g., Fluence, Tesla Energy) could theoretically assemble similar systems. The differentiation lies in the specific DC-native architecture, second-life battery integration expertise, and speed of deployment — all of which are replicable with sufficient engineering investment but represent meaningful execution barriers at the current market window.

## Market & Traction

**Traction signals:**
- Prototype systems operational and running off-grid compute (YC Launch page, Feb 2026)
- "Thousands of acres already under contract" (YC Launch page, Feb 2026); Fondo blog reports "hundreds of acres"
- Actively amassing battery inventory (YC Launch page, Feb 2026)
- Accepting reservations for existing sites (YC page)
- Partnership with Sift for integrated energy observability platform (Sift blog, undated)
- YC Launch page: 41 upvotes (YC Launches, ~Feb 2026)
- Launch video published on YouTube: https://youtu.be/ONSk5D4-evQ (YC page)
- Y Combinator LinkedIn post about Voxel Energy (LinkedIn, 2026)
- Instagram reel coverage (Instagram, 2026)
- Company Twitter/X: not identified; Casey Spencer Twitter/X: @_caseyspencer (count not retrievable)
- LinkedIn company page: linkedin.com/company/voxel-energy (follower count not retrievable)
- F6S profile exists (f6s.com/company/voxel-energy)
- No Discord, Slack community, or newsletter found
- No Product Hunt launch found
- No public revenue data found

**Competitive landscape:**

1. **Exowatt** ($140M raised total — $20M seed Apr 2024, $70M Series A Apr 2025, $50M extension Nov 2025; revenue unknown) (BusinessWire, Nov 2025 via search snippet): Uses solar thermal storage (heated rocks) converted to electricity on demand. Has 90 GWh pipeline from data center and hyperscaler customers (DatacenterDynamics via search snippet). Backed by Sam Altman and a16z. Differentiator vs. Voxel: thermal storage medium rather than electrochemical batteries; targets 1¢/kWh. Voxel's battery-based approach offers faster modularity and leverages existing EV supply chain.

2. **Crusoe Energy Systems** ($1.3B Series E at ~$10B valuation, Oct 2025; total funding well over $2B) (SiliconANGLE, Oct 2025 via search snippet): Uses stranded natural gas (flared gas) and other underutilized energy sources to power AI data centers. Building 1.2 GW campus for OpenAI in Abilene, TX ($12B project). Differentiator vs. Voxel: fossil-fuel-based rather than renewable; much larger scale; vertically integrated cloud + energy. Voxel differentiates on fully renewable, off-grid solar approach.

3. **Enchanted Rock** (funding amount not publicly confirmed; operates 329 microgrids with 1+ GW capacity) (Enchanted Rock website via search snippet): Natural gas microgrids providing bridge-to-grid and backup power for data centers. Has contract with Microsoft for 100 MW RNG microgrid in San Jose. Differentiator vs. Voxel: uses natural gas (including renewable natural gas), positioned as bridge-to-grid rather than permanent off-grid; established operations at scale. Voxel differentiates as fully solar/battery, no fossil fuel, permanent off-grid.

4. **Redwood Materials** (not a direct competitor but relevant): Operates the largest microgrid using second-life EV batteries with 63 MWh capacity in Nevada, powering a data center (MarketsandMarkets, 2025 via search snippet). Primarily a battery recycling company. Validates the second-life battery + data center use case.

**Why now:** [Inferred]: Several converging factors opened this window: (1) The explosion in AI compute demand since 2023 has overwhelmed grid capacity, making the 5-year interconnection queue a binding constraint for the first time. (2) The volume of retiring first-generation EV batteries has reached meaningful scale — the second-life EV battery market is projected to grow from ~25-30 GWh in 2025 to 330-350 GWh by 2030 (MarketsandMarkets, 2025 via search snippet) — creating a large, cheap supply of storage. (3) Solar panel costs have continued to decline, making off-grid solar economics competitive with grid power for the first time at data-center scale. (4) The Washington Post reported in Feb 2026 that data centers are increasingly pursuing off-grid power plants (Washington Post, Feb 2026 via search snippet), indicating a broader market shift.

## Founders & Team

**Casey Spencer** — Co-founder & CEO
- Education: Make School, 2016–2018 (LinkedIn via search snippet)
- Former Project Manager for Tesla Autopilot (YC Launch page, Fondo blog)
- Founded three hardware companies, including ItsWare (LinkedIn via search snippet, RocketReach via search snippet)
- Twitter/X: @_caseyspencer — count not retrievable
- LinkedIn: linkedin.com/in/casey-spencer — listed as "Voxel Energy" (search result title)
- GitHub: No public repos found

**Max Pfeiffer** — Co-founder & CTO
- Education: University of Washington (UW) — ECE (Medium / Washington Hyperloop profile)
- Ex-Tesla: designed electric big-rig prototypes (search snippet from Maxwell Vehicles context)
- Founded Maxwell Vehicles, an EV manufacturer delivering since 2019; launched the Maxwell eC30, described as the first electric ProMaster drivetrain (LinkedIn posts)
- Forbes 30 Under 30 honoree for Maxwell Vehicles (YC Launch page, Fondo blog, multiple sources)
- Director and Power Electronics Focal at Washington Hyperloop, managing $25K project with 30+ members, leading power distribution and thermal systems for electrodynamic magnetic levitation (search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/maxpfeiffer — "Maxwell Vehicles" (search result)
- GitHub: github.com/max-pfeiffer exists but appears to belong to a different Max Pfeiffer (DevOps engineer at Swisscom)

**Evan Schmidt** — Co-founder & COO
- Over a decade of experience in architecture and commercial construction management, including data centers (Fondo blog)
- Managed millions of dollars of commercial, HVAC, and data center projects (YC Launch page)
- Hands-on engineering and fabrication expertise (Fondo blog)
- Twitter/X: No public account found
- LinkedIn: No public profile confirmed
- GitHub: No public repos found

**Co-founder relationship:** Casey Spencer and Max Pfeiffer share prior Tesla employment as a common background (Spencer as Autopilot Project Manager, Pfeiffer on electric truck prototypes). No other overlapping employer or university identified from public sources.

**Founder-market fit:** The team combines Tesla-era experience in power electronics and automotive systems (Spencer, Pfeiffer), EV battery and drivetrain expertise from Maxwell Vehicles (Pfeiffer), and physical infrastructure construction management for data centers (Schmidt). Pfeiffer's background in EV battery systems and power electronics at both Tesla and Maxwell Vehicles is directly relevant to designing DC microgrids with second-life EV batteries. Schmidt's construction management experience addresses the physical deployment complexity. Spencer's hardware startup experience (three prior companies) provides operational startup execution background.

## Key Risks

**Second-life battery reliability and liability:** Second-life EV batteries have variable degradation profiles, unknown remaining cycle life, and heterogeneous chemistries. Managing these packs for 24/7 data center uptime (typically 99.999% SLA) is an unproven engineering challenge at scale. Battery fires or premature capacity loss could cause data center outages or safety incidents. The Sift partnership for predictive maintenance monitoring suggests awareness of this risk.

**Regulatory and permitting uncertainty:** Off-grid data centers may face zoning, fire code, environmental, and insurance challenges that differ from grid-connected facilities. Local jurisdictions may not have regulatory frameworks for large-scale off-grid battery installations, creating permitting delays that could offset the speed advantage over grid connections.

**Competitive pressure from well-funded incumbents:** Exowatt has raised $140M with a16z and Sam Altman backing and already has a 90 GWh pipeline (BusinessWire, Nov 2025 via search snippet). Crusoe has raised over $2B at a $10B+ valuation (SiliconANGLE, Oct 2025 via search snippet). Voxel is competing for the same customer base (AI data center developers) against substantially better-capitalized competitors.

**Land and battery supply execution risk:** The company claims "thousands of acres under contract" and to be "amassing batteries" (YC Launch page), but no specific quantities, locations, or binding agreements have been disclosed. Securing consistent supply of quality second-life EV batteries at scale requires relationships with OEMs and recyclers that may take time to establish. Competitors like Redwood Materials already operate in this supply chain.

**Brand disambiguation:** Multiple companies use the "Voxel" name, including Voxel Labs (AI workplace safety, funded $27M+), Voxel Innovations, and others on Crunchbase. This could create market confusion and SEO competition.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Data center power market: $50.51B by 2030 at 7.5% CAGR (MarketsandMarkets, 2025 via search snippet). Second-life EV battery market: 330–350 GWh by 2030 at ~65% CAGR (MarketsandMarkets, 2025 via search snippet) |
| SAM | No public data found for off-grid solar data center segment specifically |
| Traction | Prototype operational and running off-grid compute (YC Launch, Feb 2026); thousands of acres under contract (YC Launch, Feb 2026); accepting reservations (YC page); Sift partnership for monitoring (Sift blog); 41 upvotes on YC Launch page |
| Revenue Signal | No public data found |
| Founders | Casey Spencer (CEO): Ex-Tesla Autopilot PM, 3 prior hardware companies. Max Pfeiffer (CTO): Ex-Tesla, Forbes 30U30, founded Maxwell Vehicles (EV mfr). Evan Schmidt (COO): 10+ yrs commercial construction & data center project mgmt. |
| Competitors | Exowatt ($140M raised, revenue unknown, solar thermal storage for data centers); Crusoe Energy ($2B+ raised, ~$10B valuation, stranded gas to data centers); Enchanted Rock (funding undisclosed, 1+ GW nat gas microgrids, Microsoft contract) |
| Moat Signals | DC-native microgrid architecture; second-life EV battery integration expertise; land under contract; ~4% vs ~30% energy conversion loss claim (Sift blog) |
| Risk Factors | Second-life battery reliability at data center SLAs, well-funded competitors ($140M–$2B+), regulatory/permitting uncertainty for off-grid installations |
| Founder Reach | Casey Spencer: Twitter @_caseyspencer (count not retrievable), LinkedIn confirmed. Max Pfeiffer: LinkedIn confirmed (linkedin.com/in/maxpfeiffer). Evan Schmidt: no public social profiles confirmed. |
| Distribution Signals | YC Launch page (41 upvotes, Feb 2026); YC LinkedIn post; Instagram reel; accepting site reservations; no Product Hunt, app store, or community presence found |
| Emails | No public data found |
