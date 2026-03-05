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
| YC Partner | Brad Flora |
| Emails | contact@hlaboratories.com (HLabs documentation site) |

## The Idea

**Problem:** Robotics teams building new robots in the USA face a fragmented, overseas-dependent supply chain for core components — actuators, controllers, compute modules, and sensing. Teams must either source commodity parts from overseas (primarily China) or build custom components in-house, a process described by the founder as requiring "months of blood and solder" (The Founders Pack). This affects a broad customer segment: startups and labs building humanoids, household robots, quadrupeds, robot arms, and defense platforms.

**Approach:** Hlabs produces a "plug and play set of robotic primitives" — modular, standardized hardware components that snap together to accelerate early-stage robot development. The first product is an FOC (Field-Oriented Control) actuator control board (ACB v2.0), shipped with open-source software (YC page; HLabs documentation). The product roadmap for Q1 2026 includes an Nvidia Jetson-powered main board, a low-cost expandable camera system, and a wireless communication/video module (The Founders Pack). For larger-scale customers, Hlabs offers bespoke designs for production robots (YC page).

**Differentiation:** Unlike established actuator manufacturers (e.g., Actuonix, Progressive Automations, Festo) that sell standalone linear actuators for general industrial use, Hlabs provides an integrated, developer-friendly stack — open-source software paired with hardware designed specifically for robotic applications across multiple form factors. HEBI Robotics (Pittsburgh, founded 2014) is the closest analog, offering modular smart actuators with cross-platform dev tools, but at higher price points and primarily targeting research labs. RobStride (Beijing, founded 2022) manufactures integrated actuator modules but is China-based, which Hlabs positions against with its US-manufactured supply chain. Vention ($263M raised, Crunchbase via search snippet) offers a modular automation platform but targets factory-floor manufacturing automation rather than robot prototyping.

**Business Model:** Hlabs currently sells physical hardware products (FOC control boards) via its website. No public pricing page was accessible at time of research (Wix-rendered site not extractable). [Inferred]: Revenue model is hardware sales with potential for recurring software/support revenue; the open-source software likely serves as a distribution/adoption driver while hardware margins provide revenue.

**TAM/SAM:** The global robotics actuators market was valued at USD 17.9 billion in 2025 and is projected to reach USD 41.2 billion by 2034, growing at a CAGR of 10.3% (Straits Research, 2025 via search snippet). A separate estimate puts the robotics and automation actuators market at USD 20.2 billion in 2025 with a CAGR of 13.65% (Precedence Research, 2025 via search snippet). SAM for US-based robotics component startups serving the prototyping and early-production segment: no public estimate found.

**GTM / Distribution:** The company's open-source software serves as a developer acquisition channel, with documentation hosted at docs.hlaboratories.com. Early customers span household robotics, humanoids, robot arms, quadrupeds, and defense (YC page). [Inferred]: Primary distribution is direct-to-developer via the website and documentation, with word-of-mouth within the robotics builder community. The defense customer segment may involve direct sales or contracting relationships.

## Defensibility

Hlabs' current defensibility signals are early-stage. The open-source software creates a switching cost once teams build their control stacks around HLabs' APIs and hardware interfaces. US-based manufacturing provides a supply chain advantage for defense customers subject to ITAR/Buy American requirements. The documentation site and developer tooling create a knowledge moat as adoption grows.

**Market structure:** Chinese actuator manufacturers (e.g., RobStride) face trade policy headwinds including tariffs and ITAR restrictions that limit their access to US defense robotics customers. Established US industrial actuator companies (Actuonix, Progressive Automations) sell commodity components without integrated software stacks, and retooling their product lines for developer-friendly robotic platforms would require a fundamentally different product architecture and go-to-market approach. [Inferred]: The structural barrier for incumbents is the combination of hardware-software integration and developer community building, which is outside the core competency of traditional actuator manufacturers.

**Commoditization risk:** Hardware components are inherently susceptible to commoditization. Open-source reference designs for robotic actuators exist (e.g., Open Dynamic Robot Initiative on GitHub, OpenTorque Actuator). A well-funded robotics company (e.g., Tesla, which manufactures its own actuators for Optimus) could vertically integrate. However, these large companies are end-product builders, not component suppliers. The risk is higher from Chinese manufacturers who could offer similar products at lower cost, mitigated partially by trade policy and the value of US-based supply chain guarantees.

## Market & Traction

**Traction signals:**
- 40+ robotics companies placed orders for the actuator control product since the first product launch in October 2025 (The Founders Pack, reporting on YC W26 early announcements)
- Customer segments: household robotics, humanoids, robot arms, quadrupeds, and defense (YC page)
- Twitter/X company account: @hlabs_ (YC page; follower count not retrievable due to JavaScript rendering)
- Twitter/X founder account: @paulcjh_ (YC page; follower count not retrievable)
- LinkedIn company page: linkedin.com/company/hlaboratories (follower count not retrievable)
- LinkedIn founder profile: linkedin.com/in/paul-hetherington — 8,000+ followers, 500+ connections (LinkedIn public view)
- GitHub personal account: github.com/paulcjh — repos include gpt-j-6b and rpi-lte-proxy (GitHub via search snippet)
- Product Hunt: No listing found
- Documentation site: docs.hlaboratories.com (live, Mintlify-hosted)
- Website not fully accessible at time of research (Wix-rendered, JavaScript required)

**Competitive landscape:**

1. **HEBI Robotics** ($580K raised over 6 rounds, revenue unknown; Crunchbase via search snippet) — Founded 2014 in Pittsburgh. Offers smart modular actuators with cross-platform development tools. Spun out of Carnegie Mellon. Differentiator vs. Hlabs: more mature product line and research pedigree, but lower funding and potentially higher price points. Hlabs differentiates with open-source software and US manufacturing focus for defense.

2. **Vention** ($263M raised, $100M+ ARR reported; SiliconANGLE, Jan 2026 via search snippet) — Montreal-based. Modular plug-and-play automation platform with 25,000+ robots deployed in 4,000+ facilities (Vention press page via search snippet). Differentiator vs. Hlabs: targets factory-floor manufacturing automation at scale, not early-stage robot prototyping. Much larger and more mature.

3. **RobStride** (2 rounds raised, amounts undisclosed; Tracxn via search snippet; investors include Sequoia Capital) — Beijing-based, founded 2022. Manufactures integrated high-performance actuator modules. Differentiator vs. Hlabs: China-based manufacturing with cost advantages but trade policy exposure in US market. Hlabs differentiates on US supply chain and developer-friendly open-source tooling.

4. **Actuonix Motion Devices** (private, funding unknown) — Established Canadian manufacturer of micro linear actuators for ~20 years. Differentiator vs. Hlabs: commodity actuator components without integrated software stack; serves broader industrial market rather than robotics-specific developer tools.

**Why now:**
- [Inferred]: Multiple converging factors — the humanoid robotics wave (Tesla Optimus, Unitree G1, 1X NEO, Boston Dynamics Electric Atlas all launched or announced in 2024-2025) has created sudden demand for standardized robotic components from dozens of new robotics startups.
- US industrial policy has shifted toward domestic manufacturing of critical technology components, with increased tariffs on Chinese imports and defense procurement preferences for US-made components.
- The cost of key enabling technologies (Nvidia Jetson compute modules, BLDC motors, FOC controllers) has dropped to levels enabling modular, affordable robotic platforms.

## Founders & Team

**Paul Hetherington** — Founder & CEO
- MEng in Integrated Mechanical and Electrical Engineering, University of Bath (Crunchbase via search snippet)
- Previously: Co-Founder & CEO of Mystic AI (YC W21), a serverless ML deployment platform, which he ran for 6 years. Mystic raised $1.31M from 13 investors including Builders VC, Deep Ventures, Good News Ventures, Great Oaks Venture Capital, and Lunar Ventures (Crunchbase via search snippet)
- Prior academic work: Ultrasound Tomography Researcher and UAV Control & Embedded Systems Researcher at University of Bath (Crunchbase via search snippet)
- Innovation Award recipient (SETSquared & University of Bath) (LinkedIn)
- Commercial drone certification (PfCO, SalusUAV) (LinkedIn)
- Twitter/X: @paulcjh_ (YC page; follower count not retrievable)
- LinkedIn: linkedin.com/in/paul-hetherington — 8,000+ followers, 500+ connections (LinkedIn public view)
- GitHub: github.com/paulcjh — repos include gpt-j-6b (ML-related) and rpi-lte-proxy (embedded systems) (GitHub via search snippet)

**Co-founder relationship:** Solo founder — not applicable.

**Founder-market fit:** Paul Hetherington's background combines embedded systems and hardware research (UAV control, ultrasound tomography at University of Bath), a commercial drone certification, and six years running an ML infrastructure startup (Mystic, YC W21). The combination of hardware engineering expertise, experience building developer-facing infrastructure products, and prior YC participation provides relevant preparation for building a robotics component supply chain company. He is a second-time YC founder, which provides network access and operational experience.

## Key Risks

**Solo founder execution risk:** Hlabs is a hardware company with a team size of 1. Hardware businesses require managing manufacturing, logistics, quality control, customer support, and product development simultaneously. The company is not currently hiring (YC page), which may limit execution speed on the multi-product roadmap announced for Q1 2026.

**Hardware inventory and capital intensity:** Manufacturing physical products requires upfront capital for inventory, tooling, and manufacturing capacity. Hlabs' funding is at the YC standard deal level (~$500K). Scaling from 40 orders to volume production of multiple product lines (actuator boards, Jetson compute modules, camera systems, wireless modules) will require significant additional capital, and hardware startups historically face more challenging fundraising dynamics than software companies.

**China supply chain competition:** Chinese competitors like RobStride have access to lower-cost manufacturing, proximity to component suppliers (motors, PCBs, connectors), and existing relationships with global robotics companies. While US trade policy currently favors domestic sourcing, policy changes or exemptions could erode this advantage. RobStride has backing from Sequoia Capital (Tracxn via search snippet).

**Brand disambiguation:** The name "HLabs" is shared with at least one other entity — HarmonicLabs, a Cardano blockchain development organization using the "HLabs" brand on GitHub (github.com/harmoniclabs, 77 repos). This creates potential confusion in developer discovery channels.

**Platform dependency on robotics market timing:** Hlabs' value proposition depends on a large number of robotics companies reaching the prototyping and early production stages simultaneously. If the humanoid robotics wave consolidates around a few vertically integrated players (e.g., Tesla, Figure AI) rather than producing a broad ecosystem of smaller builders, the addressable customer base for standardized components narrows.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | USD 17.9B in 2025, projected USD 41.2B by 2034 at 10.3% CAGR (Straits Research via search snippet) |
| SAM | No public data found for US robotics prototyping component segment |
| Traction | 40+ robotics companies ordered actuator control product since October 2025 launch (The Founders Pack) |
| Revenue Signal | Hardware sales (FOC control boards) via website; no pricing publicly accessible |
| Founders | Paul Hetherington (Founder & CEO): MEng University of Bath, 6 years CEO of Mystic AI (YC W21, $1.31M raised), embedded systems research background |
| Competitors | HEBI Robotics ($580K raised, revenue unknown, modular research actuators); Vention ($263M raised, $100M+ ARR, factory automation platform); RobStride (2 rounds from Sequoia et al., revenue unknown, China-based integrated actuator modules); Actuonix (private, established commodity micro actuator manufacturer) |
| Moat Signals | US-based manufacturing (defense/ITAR advantage); open-source software creating developer lock-in; integrated hardware-software stack |
| Risk Factors | Solo founder on hardware company, capital intensity of multi-product hardware roadmap, Chinese competitor cost advantage |
| Founder Reach | Paul Hetherington: LinkedIn 8K+ followers, Twitter @paulcjh_ (count not retrievable), GitHub paulcjh (star counts not retrieved) |
| Distribution Signals | Open-source documentation site (docs.hlaboratories.com); 40+ customer orders pre-YC batch; no Product Hunt listing found |
| Emails | contact@hlaboratories.com (HLabs documentation site) |
