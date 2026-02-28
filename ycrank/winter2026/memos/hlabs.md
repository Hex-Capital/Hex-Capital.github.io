# Hlabs

> Making an industrial supply chain for building robots in the USA

| Field | Value |
|-------|-------|
| Website | https://www.hlaboratories.com |
| YC Page | https://www.ycombinator.com/companies/hlabs |
| Batch | Winter 2026 |
| Industry | Industrials / Industrials |
| Team Size | 1 |
| Location | Austin, TX, USA |
| Tags | Artificial Intelligence, Hardware, Robotics, Electronics |

## The Idea

**Problem:** Robotics teams building hardware products in the USA face a fragmented and overseas-dependent supply chain for critical components such as actuators, motor controllers, and electronics. Teams must source what they can from overseas suppliers (often in China) and then build remaining components in-house, creating significant delays and engineering overhead just to get prototypes moving (YC company page). U.S. tariffs imposed in 2025—including 145% tariffs on Chinese imports—have further increased costs; for example, a Chinese humanoid robot's U.S. price nearly tripled from $16,000 to approximately $40,000 (The Robot Report, 2025 via search snippet). The customer segment is early-stage robotics companies building household robots, humanoids, robot arms, quadrupeds, and defense systems (YC company page).

**Approach:** HLabs produces a "plug and play" set of robotic primitives—starting with FOC (Field-Oriented Control) actuator control boards—designed to accelerate early development. The first product is the Actuator Control Board (ACB v2.0), priced at $35/unit for an introductory period, which turns any BLDC motor into a servo actuator (Paul Hetherington, X/Twitter post). The firmware and control library are fully open source. The company's roadmap for Q1 2026 includes an Nvidia Jetson-powered main board, a low-cost expandable camera system, and a wireless communication/video module (YC listing via search snippet). For larger-scale production, HLabs works with robotics companies on bespoke designs (YC company page).

**Differentiation:** Unlike ODrive, which offers general-purpose motor controllers at various power levels (100W–5kW), or moteus by mjbots, which is a brushless servo controller with open-source firmware, HLabs positions itself as a full-stack robotics supply chain provider rather than a single-component manufacturer. HEBI Robotics sells modular actuator systems with integrated motors, geartrains, springs, and encoders as networked modules (HEBI Robotics website), but targets research and industrial users at higher price points. HLabs differentiates by offering a broader product roadmap (control boards, main boards, cameras, wireless modules) as an integrated platform for robot builders, with a focus on U.S.-based manufacturing and defense-grade supply chain reliability.

**Business Model:** The ACB v2.0 was offered at $35/unit during an introductory period (Paul Hetherington, X/Twitter post). No full pricing page was accessible at time of research (website rendered via JavaScript, content not extractable). [Inferred]: Most likely monetization path is hardware sales with margin expansion through volume manufacturing, plus potential for bespoke design services and higher-margin integrated systems as the product line expands.

**TAM/SAM:** The global robotics and automation actuators market was valued at $17.9 billion in 2025, projected to reach $41.2 billion by 2034 at 10.3% CAGR (Straits Research, 2025 via search snippet). An alternative estimate places it at $20.2 billion in 2025 (MarketsandMarkets via search snippet). The broader automation components market was $163.87 billion in 2024, growing at 12.8% CAGR (Research and Markets, 2025 via search snippet). SAM: No public data found specifically for plug-and-play robotics primitives for U.S. robotics startups.

**GTM / Distribution:** The company launched its first product (actuator control boards) in October 2025, and over 40 robotics companies have placed orders (YC listing via search snippet). The open-source firmware and control library serve as a developer acquisition funnel. The founder actively shares development progress on X/Twitter (@phethers), building community engagement with the robotics developer audience. [Inferred]: Most likely distribution path is direct-to-developer sales via the website, community-driven adoption through open-source software, and expansion into enterprise/defense procurement channels as production scales.

## Defensibility

The company's open-source software and $35 price point build developer loyalty and switching costs through firmware familiarity and integration into robot designs. U.S.-based manufacturing provides supply chain provenance relevant to defense customers, who face ITAR and procurement restrictions on foreign-sourced components. The expanding product line (control boards → main boards → cameras → wireless modules) creates an integrated ecosystem where components are designed to work together, increasing switching costs as customers adopt multiple products.

**Market structure:** Chinese robotics component manufacturers face 145% U.S. tariffs as of 2025 (ISA blog, 2025 via search snippet), creating a structural cost barrier that protects U.S.-manufactured alternatives in the domestic market. Defense customers are further restricted by ITAR and procurement regulations that limit foreign-sourced electronics. Incumbent industrial actuator companies (e.g., Parker Hannifin, Bosch Rexroth) serve large-scale industrial automation and are structurally misaligned with the needs of early-stage robotics startups requiring low-volume, developer-friendly, plug-and-play components—a business model cannibalization and sales channel conflict issue.

**Commoditization risk:** Control boards for BLDC motors are technically replicable. ODrive, moteus/mjbots, and Chinese manufacturers like RobStride all produce competing motor controllers. The open-source firmware lowers the technical barrier to replication. However, building a full U.S.-manufactured supply chain with multiple integrated product lines at low price points requires manufacturing expertise, supply chain relationships, and capital investment that create execution barriers.

## Market & Traction

**Traction signals:**
- Over 40 robotics companies have placed orders for actuator control products since the first launch in October 2025 (YC listing via search snippet)
- Product categories span household robotics, humanoids, robot arms, quadrupeds, and defense customers (YC company page)
- ACB v2.0 actuator control board is shipping, with first batch delivered (Paul Hetherington, X/Twitter post)
- Q1 2026 product roadmap includes Nvidia Jetson main board, camera system, and wireless module (YC listing via search snippet)
- Documentation site live at docs.hlaboratories.com (HLabs documentation)
- Company Twitter/X: @phethers (Paul Hetherington's personal account) — 1,244 posts; follower count not retrievable due to JavaScript rendering
- Company LinkedIn: linkedin.com/company/hlaboratories — follower count not retrievable
- No Product Hunt launch found
- No app store or Chrome extension presence (hardware company)
- 0 open job postings (YC company page)

**Competitive landscape:**

1. **ODrive Robotics** — High-performance brushless motor controllers (100W–5kW range). Crowdfunding revenue of $36,584 for ODrive Micro campaign (Crowd Supply). Total VC funding not publicly disclosed. Key differentiator vs. HLabs: established brand and product line focused on motor control, but single-product category rather than full supply chain.

2. **HEBI Robotics** (Pittsburgh, PA) — Modular robotic actuator building blocks with integrated motors, geartrains, springs, encoders, and Ethernet connectivity. Raised ~$580K across 6 rounds, including NASA SBIR grants (Tracxn, Crunchbase via search snippet). Revenue unknown. Key differentiator vs. HLabs: higher-end, fully integrated actuator modules for research; higher price point, not targeting early-stage startup developers.

3. **mjbots / moteus** — Open-source brushless servo controllers for dynamic robots. Bootstrapped/self-funded (no VC funding found). Revenue unknown. Key differentiator vs. HLabs: established open-source community around the moteus controller; single product category focused on high-performance servo control.

4. **RobStride** (Beijing, China) — High-performance integrated actuator modules for robots. Seed-funded over 2 rounds, latest in September 2025 (Tracxn via search snippet). Revenue unknown. Key differentiator vs. HLabs: China-based manufacturing with lower base costs, but subject to 145% U.S. tariffs; targets humanoid robot segment specifically.

**Why now:** U.S. tariffs of 145% on Chinese imports imposed in early 2025 have structurally increased the cost of sourcing robotics components from China (ISA blog, 2025 via search snippet). Simultaneously, robotics startups raised over $2.26 billion in Q1 2026 alone, with 70%+ directed at warehouse and industrial automation (via search snippet). The CHIPS and Science Act and reshoring incentives are accelerating domestic manufacturing of electronics and components (Manufacturing Dive, 2025 via search snippet). [Inferred]: The convergence of tariff-driven cost inflation on imports, record venture funding into robotics, and federal reshoring incentives creates a specific window for a U.S.-based robotics component supplier.

## Founders & Team

**Paul Hetherington** — Founder & CEO
- MEng in Integrated Mechanical and Electrical Engineering, University of Bath (2019) (Crunchbase)
- Previously: Co-Founder & CEO at Mystic AI (YC W21), which he ran for 6 years from March 2019. Mystic developed a low-latency serverless API for running ML models. The company raised $1.31M from investors including Builders VC, Deep Ventures, Good News Ventures, Great Oaks Venture Capital, and Lunar Ventures (Crunchbase, Dealroom via search snippet). Mystic pivoted to MysticPOD in late 2024 and appears to have wound down (Skywork AI via search snippet)
- Prior research roles: UAV Control and Embedded Systems Researcher; Ultrasound Tomography Researcher at the University of Bath (June–October 2018) (Crunchbase)
- Previous company: Pushme (mentioned on LinkedIn, details not found)
- Twitter/X: @phethers — 1,244 posts; follower count not retrievable due to JavaScript rendering
- LinkedIn: linkedin.com/in/paul-hetherington — 500+ connections (RocketReach via search snippet)
- GitHub: No personal GitHub account confirmed. The OpenActuator library he mentioned on X/Twitter was not found under a matching GitHub handle; the "OpenActuator" GitHub org appears unrelated (different project focus)

**Co-founder relationship:** Solo founder; not applicable.

**Founder-market fit:** Hetherington has a directly relevant engineering background: MEng in Integrated Mechanical and Electrical Engineering combining the hardware disciplines needed for actuator and electronics design. His research roles in UAV control systems and embedded systems align with robotics hardware development. His six years running Mystic AI through YC and multiple funding rounds provide startup operational experience, including hardware-adjacent ML deployment infrastructure. His X/Twitter presence shows hands-on PCB design, motor calibration, and firmware development for the actuator control boards, demonstrating direct technical capability in the product domain.

## Key Risks

**Solo founder execution risk at hardware scale:** The company has a team size of 1 (YC company page). Hardware companies require concurrent expertise in PCB design, firmware, manufacturing, supply chain management, quality assurance, sales, and customer support. While Hetherington demonstrates breadth across these areas, scaling production and expanding the product line to 4+ products in Q1 2026 with a single person introduces execution bottleneck risk. Mitigation: the company is part of YC W26, which provides access to recruiting networks.

**Prior company outcome uncertainty:** Mystic AI (YC W21) pivoted to MysticPOD in late 2024 and appears to have wound down rather than achieving a successful exit (Skywork AI via search snippet). While pivots are common, the lack of a clear exit or continued operation raises questions about execution pattern. Mitigation: Hetherington's six years of operational experience at Mystic and demonstrated hardware expertise suggest domain pivot rather than capability limitation.

**Open-source commoditization:** The company's firmware and control libraries are fully open source (Paul Hetherington, X/Twitter post). While this drives adoption, it also means the software layer can be replicated freely. Competitors like moteus also offer open-source firmware (Apache 2.0 license). Defensibility must come from hardware manufacturing, supply chain integration, and product ecosystem breadth rather than proprietary software.

**Tariff policy reversal risk:** A significant portion of the value proposition relies on U.S. tariffs making Chinese components expensive. If tariffs are reduced or eliminated through trade negotiations, the cost advantage of domestic manufacturing diminishes. The 145% tariff on Chinese imports is a policy decision subject to change with political cycles.

**Brand disambiguation:** Multiple unrelated companies share the "HLabs" name: a London design agency (1,529 LinkedIn followers), an embedded R&D company in India (129 LinkedIn followers), and HRL Laboratories (12,385 LinkedIn followers). This creates potential brand confusion in search results and market positioning.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $17.9B global robotics & automation actuators market in 2025, projected $41.2B by 2034 at 10.3% CAGR (Straits Research, 2025 via search snippet) |
| SAM | No public data found |
| Traction | 40+ robotics companies placed orders since Oct 2025 launch (YC listing via search snippet); customers across household robotics, humanoids, robot arms, quadrupeds, and defense (YC company page) |
| Revenue Signal | ACB v2.0 priced at $35/unit introductory (Paul Hetherington, X/Twitter post). No public revenue figures found |
| Founders | Paul Hetherington (Founder & CEO): MEng Integrated Mechanical & Electrical Engineering (University of Bath), ex-CEO Mystic AI (YC W21, 6 years), embedded systems researcher |
| Competitors | ODrive Robotics ($36.6K crowdfunding, revenue unknown, general-purpose motor controllers); HEBI Robotics (~$580K raised, revenue unknown, modular actuators for research); mjbots/moteus (bootstrapped, revenue unknown, open-source servo controllers); RobStride (seed-funded, revenue unknown, China-based integrated actuator modules) |
| Moat Signals | U.S.-based manufacturing amid 145% China tariffs; expanding integrated product ecosystem (boards → mainboards → cameras → wireless); open-source developer community building |
| Risk Factors | Solo founder scaling hardware, open-source commoditization, tariff policy reversal risk |
| Founder Reach | Paul Hetherington: Twitter @phethers (1,244 posts, count not retrievable), LinkedIn 500+ connections, GitHub not confirmed |
| Distribution Signals | 40+ company orders in ~4 months (YC listing via search snippet); open-source firmware as developer funnel; active X/Twitter presence with hardware development content |
