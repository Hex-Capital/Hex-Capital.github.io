# AquaShield

> AI water leak detection for buildings

| Field | Value |
|-------|-------|
| Website | https://aquashieldai.com |
| YC Page | https://www.ycombinator.com/companies/aquashield |
| Batch | Spring 2026 (YC page) |
| Industry | Real Estate and Construction / Real Estate and Construction |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Real Estate, B2B |
| YC Partner | Nicolas Dessaigne (YC page) |
| Emails | founders@aquashieldai.com (aquashieldai.com) |

## The Idea

**Problem:** Water damage in commercial/residential real estate portfolios. The YC page states AquaShield works with "Europe's largest real estate company, which lost > $100M to water damage last year" (YC page). Existing detection requires invasive plumbing changes or per-fixture sensors; the EPFL article frames the problem as "leaks before they lead to structural damage, downtime, or costly repairs" (EPFL News, Jan 19, 2026).

**Approach:** Combines off-the-shelf flow measurements at the building water meter with optional clamp-on ultrasonic sensors on selected pipe segments (EPFL, Jan 2026; company site). Software stack: "Transformer-based time-series models trained on real sensor data and synthetic hydraulic data" plus "Graph Neural Networks (GNNs)" that exploit building topology "to infer faulty pipe segments from limited measurements" (EPFL, Jan 2026). The site states sensors clamp onto existing pipes, installable in minutes, with alerts within 24 hours of setup (aquashieldai.com).

**Differentiation:** Versus consumer-focused Phyn and Flo Technologies (whole-home shutoff valves requiring plumbing installation) and WINT (AI water management primarily for commercial/industrial facilities) — AquaShield's stated differentiator is non-invasive clamp-on sensing combined with GNN-based localization to pinpoint the faulty pipe segment rather than only detecting an anomaly (EPFL, Jan 2026; company site).

**Business Model:** No pricing disclosed on the website (aquashieldai.com). The site offers a "pilot program intake form" requiring portfolio size, indicating enterprise sales motion (aquashieldai.com). [Inferred]: Likely per-building or per-portfolio SaaS plus sensor hardware, given the B2B real estate target and pilot-led GTM described on the site.

**TAM/SAM:** No public TAM/SAM data found for AI building water leak detection specifically. Adjacent reference: Tracxn lists 305 startups in Water Usage Management with 107 funded (Tracxn, 2026 via search snippet). The YC description cites one European real estate company alone losing >$100M annually to water damage (YC page).

**GTM / Distribution:** Direct enterprise pilots are documented: MIT Facilities campus deployment and a "large real-estate company" in Germany (EPFL, Jan 2026). [Inferred]: Land-and-expand within large European and US real estate portfolios via pilots, with the Germany deployment and the YC-referenced "Europe's largest real estate company" likely being the same or related anchor account.

## Defensibility

- **Data advantage:** Real building flow data + synthetic hydraulic simulation feeding Transformer + GNN models (EPFL, Jan 2026). [Inferred]: Each pilot adds proprietary multi-building flow data improving localization, but scale needed for durable advantage is unproven publicly.
- **Switching costs:** [Inferred]: Once sensors are clamped across a portfolio and integrated with facilities ops, removal/replacement entails physical and operational cost; no quantitative evidence.
- **Academic anchoring:** EPFL CEAT Lab support and EPFL AI Launchpad grant (EPFL, Jan 2026); MIT Facilities pilot (EPFL, Jan 2026).

**Market structure:** [Inferred]: Consumer-focused incumbents (Phyn, Flo Technologies) sell whole-home shutoff devices through retail/installer channels; replicating a building-portfolio GNN localization product would conflict with their hardware-led, plumbing-install business model and require enterprise sales motion they don't have. No public evidence of incumbent product cannibalization rules out this argument.

**Commoditization risk:** The underlying components (Transformer time-series, GNNs, ultrasonic clamp-on flow sensors) are off-the-shelf (EPFL, Jan 2026). [Inferred]: Replication is feasible technically; the moat depends on building-specific labeled flow data and channel relationships with real estate operators.

## Market & Traction

**Traction signals**
- Live pilot at MIT Facilities on campus buildings (EPFL, Jan 2026).
- Sensor deployment with "a large real-estate company in Germany... to test the system at scale in operational buildings" (EPFL, Jan 2026).
- YC company description: working with "Europe's largest real estate company" and reducing its prior >$100M annual water damage by 70% (YC page). Note this is a customer-outcome figure as stated on the YC page; not independently verified.
- EPFL AI Project Grant from EPFL AI Launchpad; amount not disclosed (EPFL, Jan 2026).
- Y Combinator backing, Spring 2026 batch (YC page).
- No Product Hunt launch, app store presence, Discord/Slack community, Twitter, LinkedIn follower counts, or press coverage outside EPFL News found in public search results.
- No active YC job postings found in search results.

**Competitive landscape**
- **Phyn** — $37M total raised (Owler/Crunchbase via search snippet). Acquired in 2025 for ~$25M by an investor group led by Jonathan Scott (LA Business Journal/PR Newswire, 2025 via search snippet). Differentiator vs. AquaShield: consumer/residential whole-home shutoff device requiring plumbing installation; not building-portfolio focused.
- **Flo Technologies** — $42.5M raised over 8 rounds (CBInsights via search snippet); acquired by Fortune Brands/Moen (CBInsights via search snippet). Revenue/ARR unknown. Differentiator: residential smart shutoff and monitoring; consumer/installer channel.
- **WINT Water Intelligence** — Raised $35M co-led by Insight Partners (Times of Israel via search snippet). Revenue/ARR unknown. Differentiator: AI water management for commercial/industrial, hospitality, data centers, construction with automated shutoff valves; closer adjacent competitor but more focused on consumption/shutoff than GNN-based leak localization in buildings.
- **3eflow** — Listed by Tracxn as a water leak detection startup (Tracxn, 2026 via search snippet); funding/ARR unknown.
- **FIDO** — Listed by Tracxn among top water usage management startups (Tracxn, 2026 via search snippet); funding/ARR unknown; primarily utility/network leak detection.

**Why now**
- [Inferred]: Transformer time-series and GNN architectures have matured for sparse-sensor industrial monitoring in the last 12-24 months, enabling localization from few measurements (mechanism described in EPFL, Jan 2026, but the timing claim is inferred).
- [Inferred]: European insurance and ESG reporting pressure on real estate portfolios is increasing scrutiny of water damage losses — not confirmed by a named analyst source.
- No analyst or company-stated "why now" catalyst was located in public sources.

## Founders & Team

**Paul Beckers** — Co-founder & CEO
- Background: "Previous robotics researcher at MIT" (YC page). EPFL article lists team education spanning "MIT, EPFL, Harvard, RWTH Aachen, and Tsinghua University" without per-founder attribution (EPFL, Jan 2026).
- Domain expertise: "machine learning, anomaly detection, robotics, and digital twins" (EPFL, Jan 2026).
- Twitter/X: No public account found.
- LinkedIn: A "Paul Beckers" profile appears in search results at linkedin.com/in/paul-beckers-6aa734126, but the role listed (RWE Power) does not match this founder — same-name disambiguation; AquaShield founder's LinkedIn not confirmed (search snippet).
- GitHub: No public repos found.

**Marguerite Benoist** — Co-founder & CTO
- Background: "Previous robotics researcher at Harvard" (YC page). LinkedIn snippet identifies "Marguerite Benoist — Master Thesis Student — Harvard University" at linkedin.com/in/marguerite-benoist-352324290 (search snippet).
- Domain expertise: machine learning, anomaly detection, robotics, digital twins (EPFL, Jan 2026).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/marguerite-benoist-352324290 — connection/follower count not retrievable.
- GitHub: No public repos found.

**Third team member:** Team size is 3 per YC page; name and role not disclosed publicly. No public data found.

**Co-founder relationship:** Both founders have research overlap with EPFL via the CEAT Lab and the AI Launchpad program (EPFL, Jan 2026). Paul's MIT and Marguerite's Harvard backgrounds place them in the Cambridge, MA area concurrently. [Inferred]: Likely met through EPFL/Cambridge robotics research circles; no public confirmation.

**Founder-market fit:** Both founders' documented expertise — anomaly detection, time-series ML, GNNs, robotics, digital twins (EPFL, Jan 2026) — directly maps to the technical stack AquaShield uses (Transformers + GNNs on building hydraulic data). The MIT Facilities pilot indicates institutional access leveraging the MIT affiliation (EPFL, Jan 2026). No advisors, board members, or notable individual investors were found in public sources beyond YC backing.

## Key Risks

**Customer concentration on a single anchor account:** The publicly cited traction depends heavily on "Europe's largest real estate company" (YC page) and one Germany deployment (EPFL, Jan 2026). Loss or non-conversion of this pilot would eliminate the primary commercial proof point. No mitigation disclosed.

**Unverified 70% damage reduction claim:** The YC page's "cut that by 70%" figure (YC page) is self-reported and lacks an independent audit, methodology, or measurement window in any public source found. Buyers and follow-on investors will demand verification before scaling spend.

**Hardware-software-services sales complexity:** The product requires physical sensor installation (clamp-on ultrasonic) plus software integration plus network mapping/sensor placement services (aquashieldai.com). [Inferred]: This multi-component sale lengthens deal cycles and complicates unit economics versus pure-software SaaS — no public CAC/payback data exists.

**Localization performance is unproven at portfolio scale:** GNN-based pipe-segment localization "from limited measurements" (EPFL, Jan 2026) has academic validation via the MIT pilot but no published accuracy metrics, false-positive rates, or generalization data across diverse building topologies. Detection ≠ localization performance; the latter is the stated differentiator.

**Competitor channel reach:** WINT ($35M raised, Insight Partners) targets the same commercial/industrial segment (Times of Israel via search snippet) and has multi-year head start on enterprise sales infrastructure. AquaShield must displace or coexist with funded incumbents to win European C&I deals.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found for AI building water leak detection specifically; 305 Water Usage Management startups tracked, 107 funded (Tracxn, 2026 via search snippet) |
| SAM | No public data found |
| Traction | MIT Facilities live pilot (EPFL, Jan 2026); Germany large real-estate co. sensor deployment (EPFL, Jan 2026); self-reported "70% reduction" of >$100M annual water damage at Europe's largest real estate co. (YC page); EPFL AI Launchpad grant, amount undisclosed (EPFL, Jan 2026) |
| Revenue Signal | No public data found (no pricing page, no disclosed ARR) |
| Founders | Paul Beckers (CEO): prior MIT robotics researcher (YC page); ML/anomaly detection/digital twins (EPFL, Jan 2026). Marguerite Benoist (CTO): prior Harvard robotics researcher (YC page); Harvard Master Thesis Student (LinkedIn search snippet). |
| Competitors | Phyn ($37M raised, acquired ~$25M in 2025, revenue unknown, consumer whole-home shutoff — LA Business Journal/Owler via search snippet); Flo Technologies ($42.5M raised over 8 rounds, acquired by Fortune Brands, revenue unknown, residential smart shutoff — CBInsights via search snippet); WINT ($35M round led by Insight Partners, revenue unknown, commercial/industrial AI water management — Times of Israel via search snippet); 3eflow (funding unknown, water leak detection — Tracxn 2026 via search snippet); FIDO (funding unknown, water usage management — Tracxn 2026 via search snippet) |
| Moat Signals | Transformer + GNN models trained on real + synthetic hydraulic data (EPFL, Jan 2026); EPFL CEAT Lab support and AI Launchpad grant (EPFL, Jan 2026); MIT Facilities pilot data access (EPFL, Jan 2026) |
| Risk Factors | Single anchor-account concentration, unverified 70% reduction claim, hardware+software+services sales complexity |
| Founder Reach | Paul Beckers: Twitter not found, LinkedIn not confirmed (same-name disambiguation), GitHub not found. Marguerite Benoist: Twitter not found, LinkedIn linkedin.com/in/marguerite-benoist-352324290 (count not retrievable), GitHub not found. |
| Distribution Signals | YC Spring 2026 backing (YC page); EPFL AI Launchpad grant (EPFL, Jan 2026); MIT Facilities pilot (EPFL, Jan 2026); no Product Hunt, app store, Chrome extension, Discord, or social follower data found |
| Emails | founders@aquashieldai.com (aquashieldai.com) |

Sources:
- [AquaShield – company site](https://aquashieldai.com/)
- [AquaShield – YC company page](https://www.ycombinator.com/companies/aquashield)
- [AquaShield: AI-Driven Water Leak Detection – EPFL News, Jan 19, 2026](https://actu.epfl.ch/news/aquashield-ai-driven-water-leak-detection/)
- [Marguerite Benoist – LinkedIn](https://www.linkedin.com/in/marguerite-benoist-352324290/)
- [Phyn Acquired by Investment Group Led by Jonathan Scott – PR Newswire](https://www.prnewswire.com/news-releases/phyn-acquired-by-investment-group-led-by-property-brothers-jonathan-scott-to-accelerate-growth-in-smart-water-solutions-302464013.html)
- [Investment Group Buys Phyn For Nearly $25 Million – LA Business Journal](https://labusinessjournal.com/engineering/investment-group-buys-phyn-for-nearly-25-million/)
- [Flo Technologies – CBInsights](https://www.cbinsights.com/company/flo-technologies)
- [WINT $35M funding – Times of Israel](https://www.timesofisrael.com/israeli-smart-water-leak-detection-startup-raises-35-million-from-funding-round/)
- [Top Water Leak Detection Solutions – Tracxn, 2026](https://tracxn.com/d/trending-business-models/startups-in-water-leak-detection-solutions/__XRk8qXITVKRsHi4lZnmZIg1mnue96js-el230VDWRmo/companies)
