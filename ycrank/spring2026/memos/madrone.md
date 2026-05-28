# Madrone

> Maximizing compute via hyper-efficient cooling

| Field | Value |
|-------|-------|
| Website | https://madrone.cool/ |
| YC Page | https://www.ycombinator.com/companies/madrone |
| Batch | Spring 2026 (YC P26) |
| Industry | Industrials / Industrials -> Energy |
| Team Size | 2 |
| Location | Mountain View, CA, USA |
| Tags | Artificial Intelligence, Hardware, Climate, Advanced Materials, Industrial |
| YC Partner | Tom Blomfield |
| Emails | hello@madrone.cool |

## The Idea

- **Problem:** Up to 30-40% of data center facility power is diverted to cooling rather than compute, and hyperscale operators in Texas face high-ambient conditions (45°C+) where chiller + cooling tower systems consume excessive power and water (madrone.cool, 2026).
- **Approach:** Modular dew-point cooling units that sit outside the data center and deliver 20°C supply water without mechanical chillers, using an indirect evaporative thermodynamic cycle (madrone.cool, 2026).
- **Differentiation:** Vs. Munters indirect evaporative systems (air-side, not chilled-water output) and Vertiv/Schneider chiller-based plants (mechanical refrigeration), Madrone claims 30% less power and water consumption with no chiller installed (madrone.cool, 2026); vs. UK spin-out Dew Point Systems, Madrone targets the U.S. hyperscale retrofit and greenfield market (Data Center Dynamics, 2025).
- **Business Model:** [Inferred]: Capital equipment sale or cooling-as-a-service to hyperscale and colocation operators; no pricing page is published on madrone.cool.
- **TAM/SAM:** Data center liquid cooling market projected USD 4.07B (2026) → USD 27.65B (2033) at 31.5% CAGR (MarketsandMarkets, 2026).
- **GTM / Distribution:** [Inferred]: Direct sales to Texas hyperscale operators, leveraging the NVIDIA Inception Program affiliation visible on the company site (madrone.cool, 2026).

## Defensibility

- **Moat today:** Proprietary dew-point cooling design claiming 20°C water output in 45°C+ ambient and "novel" thermodynamic process; no patents are publicly cited (madrone.cool, 2026).
- **Future moat:** [Inferred]: Process IP and field-validated performance data from initial deployments could create switching-cost moat once a hyperscaler standardizes on the system; unproven absent reference customers.
- **Market structure:** [Inferred]: Incumbents (Munters, Vertiv, Schneider) sell chiller-and-tower stacks; a chiller-less product cannibalizes their largest SKUs, creating channel conflict that slows internal replication.
- **Commoditization risk:** Munters, Nortek (Facebook StatePoint partner), and university spin-outs like Dew Point Systems are building adjacent indirect-evaporative technologies; the underlying dew-point principle is decades-old in HVAC literature (Facebook Engineering blog, 2018; Data Center Dynamics, 2025).

## Market & Traction

- **Traction signals:**
  - NVIDIA Inception Program member (madrone.cool, 2026).
  - YC Spring 2026 (P26) batch (YC company page, 2026).
  - YC LinkedIn launch post for Madrone published Jan 2026 (LinkedIn post id 7460004716757045249, Jan 2026).
  - No public revenue, paying customers, pilot deployments, or LOIs disclosed.
  - No public company Twitter/X, LinkedIn company page follower counts retrievable.
- **Competitors:**
  - Munters (publicly listed, revenue unknown for data center segment): incumbent indirect evaporative air-cooling supplier with DigiPlex Fetsund deployment; differs in delivering air, not chilled water (Digitalisation World).
  - Vertiv ($9B+ public market revenue 2025, VRT): NVIDIA GB200 reference architecture partner using chiller-based liquid cooling; Madrone targets chiller elimination (24/7 Wall St, Jan 2026).
  - Nortek Air Solutions (private, revenue unknown): StatePoint Liquid Cooling co-developed with Facebook for indirect evaporative liquid output; closest functional analog (Facebook Engineering, 2018).
  - Corintis ($24M Series A Sept 2025, revenue unknown): microfluidic chip-level cooling, complementary rather than overlapping with facility-level dew-point cooling (Netzeroinsights, 2025).
  - Dew Point Systems (pre-seed, revenue unknown, University of Hull spin-out): same underlying thermodynamic principle, UK market focus (Data Center Dynamics, 2025).
- **Why now:** Hyperscale data center buildout has shifted to Texas and the Midwest as AI-induced grid pressures hit primary markets in 2024-2025, exposing chiller/cooling-tower stacks to high-ambient inefficiency (Data Center Dynamics, 2025).

## Founders & Team

- **Akshay Trikha (CEO / Co-founder):**
  - Background: UC Berkeley Materials Science (research on scaling laws for ML interatomic potential models); prior role at QuantumScape building LLM tooling (akshaytrikha.github.io, 2026).
  - Twitter/X: @akshaytree (count not retrievable).
  - LinkedIn: Profile referenced at linkedin.com/in/akshay-trikha; headline not retrievable.
  - GitHub: @akshaytrikha, 24 public repositories; no notable star counts found (github.com/akshaytrikha).
- **Erik Meike (Co-founder):**
  - Background: Harvey Mudd College B.S. Engineering with Environmental Analysis emphasis (2017-2021), Hardware Development Engineer at Apple, Founding Engineer at Watney Robotics (autonomous datacenter infrastructure robotics), prior internships at JITX (2018) and PreNav (2016-2017); designed compressor-eliminating residential A/C system with patent pending (LinkedIn, RocketReach, Harvey Mudd magazine).
  - Twitter/X: No public account found.
  - LinkedIn: "Hardware Development Engineer - Apple" (linkedin.com/in/erikmeike).
  - GitHub: No public repos identified at this handle.
- **Co-founder relationship:** No public data on co-founder history; both Bay Area-based with overlapping data-center hardware exposure (Watney Robotics targets datacenter robotics; QuantumScape is Bay Area battery hardware).
- **Founder-market fit:** Meike's prior work designing a compressor-less A/C system and Founding Engineer role at Watney Robotics (datacenter infrastructure) plus Trikha's materials-science + ML background align with thermal-hardware product development (Harvey Mudd magazine; Watney Robotics website; akshaytrikha.github.io); NVIDIA Inception affiliation is the only disclosed external endorsement (madrone.cool, 2026).

## Key Risks

- **Technical feasibility at hyperscale ambient conditions:** Claim of 20°C supply water at 45°C+ ambient with 30% energy savings is unverified by third-party measurement; dew-point cooling output is fundamentally bounded by ambient wet-bulb temperature, which can exceed performance assumptions in humid Texas summers (madrone.cool, 2026; thermodynamic principle).
- **Long enterprise sales cycle vs. cash runway:** Hyperscale cooling procurement involves multi-year qualification with Vertiv-/Munters-grade incumbents already qualified into NVIDIA reference designs; Madrone is a 2-person team with no disclosed pilot (madrone.cool; 24/7 Wall St, Jan 2026).
- **Incumbent and adjacent competition:** Munters (existing indirect evaporative deployments in Europe), Nortek (Facebook StatePoint), and university spin-out Dew Point Systems all target overlapping principles, reducing first-mover advantage (Digitalisation World; Facebook Engineering 2018; Data Center Dynamics 2025).
- **Name disambiguation risk:** "Madrone" overlaps with Madrone Capital Partners (Walton family PE), Madrone Software & Analytics, and Madrona Venture Group; press-search noise may impair brand discovery (Crunchbase, Tracxn, Wikipedia).
- **Capital intensity:** Industrial cooling hardware typically requires field-trial capex and manufacturing scale-up beyond a YC standard deal; no follow-on funding disclosed publicly (no public data found on Madrone funding rounds).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Data center liquid cooling USD 4.07B (2026), projected USD 27.65B by 2033, 31.5% CAGR (MarketsandMarkets, 2026) |
| SAM | No public data found |
| Traction | NVIDIA Inception Program member (madrone.cool, 2026); YC P26 batch (YC, 2026); YC LinkedIn launch post Jan 2026 |
| Revenue Signal | No public data found |
| Founders | Akshay Trikha (CEO): UC Berkeley Materials Science, ex-QuantumScape ML/LLM tools. Erik Meike: Harvey Mudd Engineering 2021, ex-Apple Hardware, Founding Engineer Watney Robotics, JITX/PreNav internships. |
| Competitors | Munters (public, revenue unknown for DC segment, indirect evaporative air not water); Vertiv ($9B+ rev 2025, chiller-based liquid); Nortek (private, revenue unknown, StatePoint liquid cooling); Corintis ($24M Series A Sept 2025, revenue unknown, chip-level microfluidic); Dew Point Systems (pre-seed, UK spin-out) |
| Moat Signals | Proprietary dew-point cooling design claiming 20°C water at 45°C+ ambient (madrone.cool, 2026); NVIDIA Inception affiliation (madrone.cool, 2026) |
| Risk Factors | Technical feasibility at high-humidity Texas ambient, incumbent competition (Munters/Vertiv/Nortek), capital intensity for hardware scale-up |
| Founder Reach | Akshay Trikha: Twitter @akshaytree (count not retrievable), LinkedIn linkedin.com/in/akshay-trikha (count not retrievable), GitHub @akshaytrikha 24 repos (no notable star counts). Erik Meike: Twitter not found, LinkedIn linkedin.com/in/erikmeike (count not retrievable), GitHub not found. |
| Distribution Signals | NVIDIA Inception Program (madrone.cool, 2026); YC Spring 2026 batch (YC, 2026); YC LinkedIn launch post (LinkedIn, Jan 2026) |
| Emails | hello@madrone.cool |

Sources:
- [Madrone company site](https://madrone.cool/)
- [YC Madrone page](https://www.ycombinator.com/companies/madrone)
- [Y Combinator LinkedIn post on Madrone P26](https://www.linkedin.com/posts/y-combinator_madrone-yc-p26-builds-cooling-systems-for-activity-7460004716757045249-bWuj)
- [Akshay Trikha personal site](https://akshaytrikha.github.io/)
- [Akshay Trikha GitHub](https://github.com/akshaytrikha)
- [Erik Meike LinkedIn](https://www.linkedin.com/in/erikmeike/)
- [Erik Meike RocketReach (Watney Robotics)](https://rocketreach.co/erik-meike-email_98416422)
- [Data Center Liquid Cooling Market - MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/data-center-liquid-cooling-market-84374345.html)
- [Dew Point Systems UK spin-out - Data Center Dynamics](https://www.datacenterdynamics.com/en/news/uk-university-spin-out-offers-new-take-on-air-cooling/)
- [Vertiv NVIDIA partnership - 24/7 Wall St](https://247wallst.com/investing/2026/01/16/3-stocks-are-betting-on-data-center-cooling-heres-whos-best-positioned/)
- [DigiPlex Munters indirect evaporative - Digitalisation World](https://digitalisationworld.com/news/29970/digiplex-and-munters-set-the-bar-with-largest-indirect-evaporative-cooled-data-centre-in-europe)
- [Facebook StatePoint Liquid Cooling](https://engineering.fb.com/2018/06/05/data-center-engineering/statepoint-liquid-cooling/)
- [Hyperscale shift to Texas - Data Center Dynamics](https://www.datacenterdynamics.com/en/news/us-hyperscale-investment-shifts-to-texas-and-midwest-as-ai-induced-energy-pressures-hit-primary-markets-report/)
- [Five startups reducing DC water consumption - Netzeroinsights](https://netzeroinsights.com/resources/startups-reducing-data-center-water-consumption/)
