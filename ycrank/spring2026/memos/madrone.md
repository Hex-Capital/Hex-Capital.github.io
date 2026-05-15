# Madrone

> Maximizing compute via hyper-efficient cooling

| Field | Value |
|-------|-------|
| Website | https://madrone.cool/ |
| YC Page | https://www.ycombinator.com/companies/madrone |
| Batch | Spring 2026 (P26) |
| Industry | Industrials / Industrials -> Energy |
| Team Size | 2 |
| Location | Mountain View, CA, USA |
| Tags | Hardware, Climate, Advanced Materials, AI, Industrial |
| YC Partner | Tom Blomfield (YC company page) |
| Emails | hello@madrone.cool (company website) |

## The Idea

**Problem:** Data centers built in hot, arid regions (notably Texas, where most new US data center capacity is being built per Madrone's website) face acute cooling constraints. Up to 40% of data center power is diverted to cooling rather than GPUs (madrone.cool). Conventional chillers consume large amounts of power and cooling towers consume large amounts of water. High-ambient environments (45°C+) cause GPU thermal throttling (madrone.cool).

**Approach:** Modular cooling systems that chill water to the dew point using a "different thermodynamic process" without mechanical chillers, delivering 20°C supply water (madrone.cool, YC company page). Sold in two configurations: greenfield hyperscale builds and retrofits to existing facilities (madrone.cool).

**Differentiation:** Company claims 30% less power and water consumption versus conventional chiller + cooling tower combinations (madrone.cool). [Inferred]: This is a facility/upstream-water cooling approach, distinct from in-chip/liquid-to-chip players like Corintis, Accelsius, and JetCool (Trellis, 2025; DCD, Sept 2025) — Madrone supplies cold water to the data hall rather than replacing the cold plate at the chip.

**Business Model:** No pricing disclosed on company website. [Inferred]: Most likely capex-style hardware sales of modular units to hyperscalers/colocation operators, possibly with service contracts, given the modular-equipment positioning on madrone.cool and absence of any SaaS/usage page.

**TAM/SAM:** Global data center liquid cooling market projected at $4.07B in 2026 → $27.65B by 2033 at 31.5% CAGR (Globe Newswire, May 2026). Broader data center cooling market projected at $13.6B in 2026 → $46.3B by 2033 (openpr / Persistence Market Research, 2026 via search snippet). No published SAM for dew-point/desert-deployment subsegment found.

**GTM / Distribution:** [Inferred]: Direct sales to hyperscalers and colocation operators building in Texas and other arid US regions; NVIDIA Inception membership (madrone.cool) plausibly aids GPU-customer introductions. No public partnerships, LOIs, or pilot customers disclosed.

## Defensibility

**Moat signals:** NVIDIA Inception Program backing (madrone.cool) — a non-equity partner program, not a commercial commitment. No patents, published papers, or pilots disclosed in public sources. No defensibility signals found in public sources.

[Inferred]: Potential moat could develop via thermodynamic-process IP (the "different thermodynamic process" described on madrone.cool), modular-unit manufacturing learning curves, and embedded retrofit installations creating switching costs, but none are evidenced today.

**Market structure:** [Inferred]: HVAC incumbents (Johnson Controls, Carrier, Trane) sell chillers — the unit Madrone is designed to eliminate — creating direct cannibalization risk to their installed-base service revenue, which structurally slows incumbent adoption of chiller-less approaches. Johnson Controls' May 2026 acquisition of cooling startup Alloy Enterprises (Johnson Controls press release, May 13, 2026) shows incumbents are willing to acquire rather than build, suggesting an M&A-friendly structure.

**Commoditization risk:** [Inferred]: Dew-point/evaporative cooling is a known thermodynamic principle; multiple research groups and incumbents could develop competing units. Defensibility likely rests on execution quality (efficiency, deployment speed, unit cost) rather than pure novelty.

## Market & Traction

**Traction signals:**
- Backed by Y Combinator (Spring 2026 / P26 batch) (YC company page)
- Accepted into NVIDIA Inception Program (madrone.cool)
- Launched 2025 (YC company page)
- LinkedIn company page: linkedin.com/company/madrone-labs (YC page) — follower count not retrievable via WebFetch
- Twitter/X: @madronelabs (YC page) — follower count not retrievable
- Y Combinator LinkedIn launch post for Madrone (YC LinkedIn, post activity 7460004716757045249)
- No revenue, customer logos, pilots, press coverage, Product Hunt launch, or job postings found in public sources
- No public data found on funding amount beyond standard YC deal

**Competitive landscape:**
- **Corintis** — Bio-inspired in-chip microfluidic cooling. ~$58M total funding incl. $25M led by Applied Digital and prior $24M Series A led by BlueYard at ~$400M post (DCD, Sept 2025; Sacra). Reported 8-digit revenue and 10,000+ deployed cooling systems; partner of Microsoft (Tracxn / Sacra via search snippet). Differs from Madrone: chip-level, not facility-level water cooling.
- **Accelsius** — Two-phase direct-to-chip liquid cooling; ~$50M raised including $40M from investors such as Lockheed Martin and Footprint Coalition (Innventure / Trellis, 2025). Equinix relationship (Trellis, 2025). Differs from Madrone: chip-level liquid cooling.
- **JetCool** — Micro-jet impingement cooling modules; acquired by Flex in November 2024 (Trellis, 2025). Differs from Madrone: chip-level, now part of large ODM.
- **LiquidStack** — Two-phase immersion (DataTank); revenue/funding not specified in retrieved sources. Differs from Madrone: immersion of servers, not water-supply cooling.
- **Alloy Enterprises** — Cooling startup acquired by Johnson Controls May 13, 2026 (Johnson Controls press release). Acquisition price not disclosed in retrieved snippet.

[Inferred]: The direct competitive set for facility-side dew-point/evaporative cooling startups (vs. chip-level cooling) appears smaller in retrieved sources; most well-funded peers are chip-level players, and Madrone's competition at the facility layer is dominated by HVAC incumbents (Johnson Controls, Trane, Carrier) selling traditional chillers and cooling towers.

**Why now:** [Inferred]: AI-driven data center buildout has surged, with the broader infrastructure market projected toward $1T by 2030 (Trellis, 2025). New Texas/Southwest hyperscale sites concentrate cooling demand in arid, hot climates where conventional water-intensive cooling is constrained. Liquid cooling segment growing 31.5% CAGR (Globe Newswire, May 2026) signals operator willingness to adopt non-traditional thermal solutions.

## Founders & Team

**Akshay Trikha** — Founder/CEO
- Previously: ML engineer at QuantumScape working on solid-state battery computer vision and LLM tooling (YC bio; ContactOut; Apollo.io); graduate research at UC Berkeley on scaling laws for ML interatomic potentials (Apollo.io / personal site, akshaytrikha.github.io)
- Education: Harvey Mudd College (Apollo.io)
- Twitter/X: @akshaytree (X profile) — follower count not retrievable
- LinkedIn: profile referenced via YC bio — no public connection count retrieved
- GitHub: github.com/akshaytrikha — 18 followers, 25 repos; pinned repos include style-transfer, BTO-TEM-Processing (1 star), AES, GPT-2-Trump (GitHub profile)
- Google Scholar profile exists (scholar.google.com user e-2dHfUAAAAJ)

**Erik Meike** — Co-Founder
- Previously: Hardware Development Engineer at Apple working on iPhone wireless power (LinkedIn / YC bio); early-stage roles at JITx and PRENAV (YC bio)
- Education: Harvey Mudd College, Engineering (yoerik.com resume); HMC Journey to Space Rocketry Club President 2018-2021, HMC Makerspace Co-President 2019-2020, HMC Combat Robotics Co-President 2018-2019 (LinkedIn / yoerik.com)
- Personal site: yoerik.com
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/erikmeike
- GitHub: No public repos found

**Co-founder relationship:** Both attended Harvey Mudd College (Apollo.io for Trikha; yoerik.com for Meike) — likely overlapping undergraduate cohort given timing of HMC student leadership roles for Meike (2018-2021). [Inferred]: This is a college-cofounder pairing.

**Founder-market fit:** Meike brings hardware development experience from Apple's iPhone wireless power program (LinkedIn) — directly relevant to thermal/electrical hardware design at scale. Trikha brings ML/materials-science background from QuantumScape and Berkeley (YC bio; personal site), relevant if the cooling system uses ML for control optimization. Neither founder has disclosed prior HVAC, refrigeration, or data center facility engineering experience in retrieved sources. No advisors, board members, or named outside investors beyond YC and NVIDIA Inception found.

## Key Risks

**Technical feasibility risk — unproven dew-point performance at hyperscale loads:** The "different thermodynamic process" delivering 20°C supply water without chillers (madrone.cool) is described in marketing terms; no third-party validation, pilot deployment, or published efficiency data is publicly available. Dew-point cooling effectiveness is fundamentally bounded by ambient wet-bulb temperature, which can rise in humid Texas summers — performance in real Texas climate envelopes is unverified in public sources.

**Domain experience gap:** Neither founder has disclosed prior experience in HVAC, refrigeration cycle design, or data center facility operations (Phase 3 background research). Selling capex equipment into hyperscaler facility teams typically requires deep domain credibility that is not evidenced.

**Incumbent cannibalization-and-acquisition path:** Johnson Controls' May 2026 acquisition of Alloy Enterprises (Johnson Controls press release, May 13, 2026) and JetCool's November 2024 acquisition by Flex (Trellis, 2025) demonstrate incumbents are actively acquiring cooling startups — the likely exit path may compress upside relative to standalone scaling.

**Sales-cycle length:** [Inferred]: Hyperscale data center procurement cycles for facility infrastructure are typically multi-year; a two-person team (YC page) faces real bandwidth limits managing parallel hyperscaler evaluations.

**Name disambiguation:** "Madrone" is also a financial services firm acquired in 2017 (PitchBook), a bicycle component brand (madronecycles.com), and a furniture line (Sunpan) — search noise but not a direct conflict for this YC entity.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Data center cooling $13.6B in 2026 → $46.3B by 2033 (openpr / Persistence Market Research, 2026 via search snippet); broader infrastructure $1T by 2030 (Trellis, 2025) |
| SAM | Data center liquid cooling $4.07B in 2026 → $27.65B by 2033, 31.5% CAGR (Globe Newswire, May 2026) |
| Traction | YC Spring 2026 / P26 batch (YC company page); NVIDIA Inception Program member (madrone.cool); launched 2025 (YC page); no revenue, pilots, customers, or press disclosed |
| Revenue Signal | No public data found (no pricing page on madrone.cool) |
| Founders | Akshay Trikha (CEO): ex-QuantumScape ML, UC Berkeley research, Harvey Mudd. Erik Meike (Co-founder): ex-Apple iPhone wireless power hardware, JITx, PRENAV, Harvey Mudd |
| Competitors | Corintis (~$58M raised, 8-digit revenue per Sacra/Tracxn, in-chip microfluidic vs. Madrone's facility water supply); Accelsius (~$50M raised per Innventure/Trellis 2025, revenue unknown, two-phase chip cooling); JetCool (acquired by Flex Nov 2024 per Trellis, micro-jet chip cooling); LiquidStack (funding unknown, two-phase immersion); Alloy Enterprises (acquired by Johnson Controls May 13, 2026 per JCI press release) |
| Moat Signals | No public data found (NVIDIA Inception is non-equity partner program per madrone.cool; no patents/papers retrieved) |
| Risk Factors | Unproven dew-point performance at hyperscale loads, founder domain-experience gap in HVAC/facilities, incumbent cannibalization-and-acquisition path |
| Founder Reach | Akshay Trikha: Twitter @akshaytree (count not retrievable), LinkedIn (not retrieved), GitHub akshaytrikha 18 followers / 25 repos / 1 star top repo. Erik Meike: Twitter not found, LinkedIn linkedin.com/in/erikmeike (count not retrievable), GitHub no public repos found |
| Distribution Signals | YC LinkedIn launch post (LinkedIn activity 7460004716757045249); company Twitter @madronelabs and LinkedIn /company/madrone-labs (YC page, counts not retrievable); no Product Hunt, press, or job postings found |
| Emails | hello@madrone.cool (company website) |
