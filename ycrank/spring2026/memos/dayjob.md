# Dayjob

> AI Agents for Industrial Logistics

| Field | Value |
|-------|-------|
| Website | https://www.getdayjob.ai |
| YC Page | https://www.ycombinator.com/companies/dayjob |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Supply Chain and Logistics |
| Team Size | 5 |
| Location | London, United Kingdom |
| Tags | |
| YC Partner | Tom Blomfield (YC page) |
| Emails | info@getdayjob.ai (company website) |

## The Idea

- **Problem:** Waste management and skip hire fleets rely on manual schedulers who plan ~100 daily jobs across drivers and skip sizes amid constant in-day changes (Dayjob website, 2026).
- **Approach:** A scheduling agent that plugs into existing waste-operator ERPs and continuously re-optimises routes in real time, handling new jobs, driver swaps, and exceptions (YC page, 2026).
- **Differentiation:** Versus AMCS and Routeware (entrenched waste-ERP/route platforms — Slashdot/SoftwareWorld), Dayjob does not replace the ERP but layers an autonomous agent on top of it (YC page, 2026); [Inferred]: this avoids rip-and-replace switching cost that incumbents impose.
- **Business Model:** No public pricing page; [Inferred]: per-fleet or per-vehicle SaaS subscription, given $496K ARR reported across a small UK customer set including Allstone and Coastal Recycling (Dayjob website; YC launch post, 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; comparable incumbents AMCS ($273.1M revenue — Growjo) and Routeware ($25–100M revenue range — Owler) operate in the broader waste-software market.
- **GTM / Distribution:** Founder-led direct sales to UK waste/skip-hire fleets, with US expansion underway (YC page; LinkedIn launch post, 2026); [Inferred]: depot-level relationships built during 2022–2024 Gaea ERP work seed the pipeline.

## Defensibility

- **Moat today:** ERP integration into operator back-ends and depot-level workflow data captured during prior Gaea ERP work since 2022 (YC page, 2026).
- **Future moat:** [Inferred]: Proprietary scheduling decision dataset across UK/US fleets could train models that improve route optimisation accuracy as customer count grows; unproven at five customers' scale.
- **Market structure:** [Inferred]: Incumbents AMCS and Routeware sell perpetual/multi-year ERP licenses (CBInsights/PitchBook) — overlaying an autonomous agent that cannibalises their planning module would conflict with their core license revenue.
- **Commoditization risk:** Route-optimisation algorithms are well-known (OptimoRoute, Route4Me, Samsara already ship them — SoftwareWorld); [Inferred]: defensibility hinges on workflow integration depth rather than the optimisation model itself.

## Market & Traction

- **Traction signals:**
  - $496K ARR as of YC launch (YC page, 2026).
  - $359K+ ARR reached within seven months of August 2025 product launch (YC page, 2026).
  - Named customers: Allstone, Coastal Recycling, and one additional partner (Dayjob website, 2026).
  - Customer testimonial: 8%+ efficiency gains from day one in waste management (YC page, 2026); company website cites 11% annual revenue boost, 50% improvement in customer time-window hits, 25% admin time reduction, £100,000 additional yearly revenue potential per customer (Dayjob website, 2026).
  - YC LinkedIn launch post published (LinkedIn, activity-7453096249261592577).
  - Founder Twitter: @georgepos6 (Twitter, count not retrievable).
  - Office address: Collective Camden Auction Rooms, 5-7 Buck St, London NW1 8NJ (Dayjob website, 2026).
- **Competitors:**
  - AMCS Group ($225M+ raised, $273.1M revenue — Tracxn/Growjo): incumbent end-to-end waste ERP plus routing; Dayjob is an agent overlaying existing ERPs rather than replacing them.
  - Routeware ($123M raised, $25–100M revenue range — PitchBook/Owler): 20-year incumbent serving 1,000+ haulers via Routeware Elements and acquired RUBICONSmartCity/Pro (Waste Dive, 2024); Dayjob targets real-time autonomous re-optimisation versus Routeware's broader back-office suite.
  - RouteSmart (revenue unknown — SoftwareWorld): GIS-based route optimisation specialist for waste; Dayjob differentiates on agentic real-time exception handling.
  - OptimoRoute (revenue unknown — SoftwareWorld): horizontal route optimisation SaaS; Dayjob is vertical-specific to waste/industrial logistics.
  - Samsara (public, ~$1B+ revenue — public filings via search snippet): fleet telematics with routing features; Dayjob layers scheduling agents above ERPs rather than competing on telematics hardware.
- **Why now:** [Inferred]: LLM-based agent frameworks reaching production reliability in 2024–2025 enable autonomous exception-handling at the scheduler workflow layer, which prior rules-based route optimisers could not perform.

## Founders & Team

- **George Postlethwaite (CEO and Co-Founder):**
  - Background: University of Oxford; 5 years at Deliveroo where he launched the UK grocery business; led sales at Otta (LocalGlobe-backed); previously built Gaea, an ERP for e-waste recyclers (LinkedIn /in/georgepos; YC page, 2026).
  - Twitter/X: @georgepos6 (Twitter, count not retrievable).
  - LinkedIn: "Co-Founder at Dayjob (YC P26)" (LinkedIn /in/georgepos).
  - GitHub: No public account found.
- **Fred Fooks (CTO and Co-Founder):**
  - Background: Oxford Engineering Science; Manager, ESG & Supply Chain Analytics at Deloitte UK; prior AI/data science at Capgemini; co-built Gaea ERP for e-waste recyclers (LinkedIn /in/frederic-fooks; ResearchGate; YC page).
  - Twitter/X: No public account found.
  - LinkedIn: "Dayjob" (LinkedIn /in/frederic-fooks).
  - GitHub: No public account found.
- **Other team:** Joe Walton, Founding Engineer (LinkedIn /in/joetwalton); team size five (YC page, 2026).
- **Co-founder relationship:** Postlethwaite and Fooks met at Oxford ~13 years ago, lived in five houses together, and were ushers at each other's weddings; co-founded Gaea ERP in 2022 before pivoting to Dayjob in January 2025 (LinkedIn launch post; YC page, 2026).
- **Founder-market fit:** [Inferred]: Three years building Gaea ERP for waste/e-waste recyclers since 2022, including depot ride-alongs with planners and schedulers (YC page, 2026), gives direct workflow exposure to the customer they now sell to; no advisors or named investors publicly disclosed.

## Key Risks

- **Pivot history and concentrated revenue:** Company pivoted from Gaea ERP to Dayjob in January 2025 and began selling current product August 2025, reaching $496K ARR (YC page, 2026); [Inferred]: ARR is concentrated across three named UK customers (Allstone, Coastal Recycling, plus one — Dayjob website), creating single-logo churn exposure.
- **Incumbent substitution risk:** AMCS ($225M+ raised, AI-driven routing built into platform — Tracxn) and Routeware (acquired RUBICONSmartCity/Pro in 2024 — Waste Dive) already ship AI routing inside their ERPs; an overlay agent risks being copied as a native ERP feature.
- **Vertical narrowness vs. positioning:** Public messaging is "AI Agents for Industrial Logistics" (YC page) but every cited customer and metric is waste/skip-hire (Dayjob website, 2026); [Inferred]: expansion beyond waste to broader industrial logistics is unproven.
- **Technical feasibility at scale:** Real-time agentic re-optimisation across exceptions and driver changes is unproven beyond the three named UK fleets (Dayjob website); [Inferred]: scaling beyond ~100-jobs-per-day fleets may surface latency or determinism issues not visible today.
- **Geographic expansion execution:** US launch underway (YC page, 2026); [Inferred]: US waste market is dominated by Routeware's 1,000+ hauler base (Waste Dive, 2024), requiring a distinct GTM motion from UK direct sales.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | $496K ARR (YC page, 2026); $359K+ ARR in 7 months post-Aug 2025 launch (YC page, 2026); customers Allstone, Coastal Recycling + 1 (Dayjob website, 2026); customer-reported 8%+ efficiency gains (YC page, 2026) |
| Revenue Signal | $496K ARR (YC page, 2026); pricing not disclosed on Dayjob website |
| Founders | George Postlethwaite (CEO): Oxford, 5y Deliveroo (launched UK grocery), Otta sales lead, co-built Gaea ERP. Fred Fooks (CTO): Oxford Engineering Science, Deloitte ESG/Supply Chain Analytics, Capgemini AI/Data, co-built Gaea ERP. |
| Competitors | AMCS ($225M+ raised, $273.1M revenue — Tracxn/Growjo, incumbent waste ERP); Routeware ($123M raised, $25–100M revenue — PitchBook/Owler, 1,000+ haulers); RouteSmart (revenue unknown — SoftwareWorld, GIS routing); OptimoRoute (revenue unknown — SoftwareWorld, horizontal routing); Samsara (public — search snippet, fleet telematics) |
| Moat Signals | ERP integration into existing waste-operator back-ends (YC page, 2026); ~3 years of depot/scheduler workflow exposure via prior Gaea ERP since 2022 (YC page, 2026) |
| Risk Factors | Incumbent substitution by AMCS/Routeware AI routing modules, vertical narrowness vs. "industrial logistics" positioning, concentrated customer base |
| Founder Reach | George Postlethwaite: Twitter @georgepos6 (count not retrievable), LinkedIn /in/georgepos, GitHub not found. Fred Fooks: Twitter not found, LinkedIn /in/frederic-fooks, GitHub not found. |
| Distribution Signals | YC launch post on LinkedIn (LinkedIn activity-7453096249261592577); named customers Allstone, Coastal Recycling (Dayjob website, 2026); US market expansion in progress (YC page, 2026) |
| Emails | info@getdayjob.ai (Dayjob website, 2026) |

Sources:
- [Dayjob YC company page](https://www.ycombinator.com/companies/dayjob)
- [Dayjob website](https://www.getdayjob.ai)
- [George Postlethwaite LinkedIn](https://www.linkedin.com/in/georgepos/)
- [Fred Fooks LinkedIn](https://www.linkedin.com/in/frederic-fooks/)
- [Joe Walton LinkedIn](https://uk.linkedin.com/in/joetwalton)
- [Dayjob launch LinkedIn post](https://www.linkedin.com/posts/y-combinator_dayjob-is-ai-scheduling-for-waste-trucks-activity-7453096249261592577-iYd2)
- [AMCS Tracxn profile](https://tracxn.com/d/companies/amcs/__5dYbiJH0GtkirPoLaF6KSeFM0PuuA3aTy4rf2gY0LV0)
- [AMCS Growjo](https://growjo.com/company/AMCS)
- [Routeware PitchBook](https://pitchbook.com/profiles/company/55228-06)
- [Routeware Rubicon acquisition - Waste Dive](https://www.wastedive.com/news/routeware-acquires-recently-spun-off-rubicon-fleet-tech-business/725404/)
- [AMCS alternatives - SoftwareWorld](https://www.softwareworld.co/competitors/amcs-alternatives/)
