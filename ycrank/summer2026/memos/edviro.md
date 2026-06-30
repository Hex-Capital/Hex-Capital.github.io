# Edviro

> Energy world models that fix energy waste before it becomes expensive.

| Field | Value |
|-------|-------|
| Website | https://edviroenergy.com |
| YC Page | https://www.ycombinator.com/companies/edviro |
| Batch | Summer 2026 (YC company page) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Deep Learning, B2B, Energy |
| YC Partner | Jared Friedman (YC company page) |
| Emails | partnerships@edviroenergy.com (edviroenergy.com) |

## The Idea

- **Problem:** Facilities managers at large buildings are overwhelmed by dashboards/alarms/analytics across hundreds of boilers, HVAC units, and heat pumps, and energy waste appears on the utility bill before being detected (YC company page; edviroenergy.com).
- **Approach:** An agentic platform that ingests live meter data, runs an "energy world model" to detect anomalies and simulate interventions, dispatches agents (or personnel) to implement fixes, and produces M&V reports verifying realized kWh/$ savings (edviroenergy.com).
- **Differentiation:** vs. GridPoint (hardware-coupled submetering/controls, $584M raised, acquired Oct 2025 by Twenty First Century Utilities per Crunchbase/CB Insights) — Edviro is software-only with simulation; vs. BuildingOS/Atrius (real-time monitoring + dashboards per CB Insights) — Edviro adds agentic intervention dispatch; vs. 75F (IoT BMS hardware per Energy Digital) — Edviro layers on existing meters.
- **Business Model:** No pricing page disclosed (edviroenergy.com). [Inferred]: SaaS subscription per-site or per-meter sold to school districts, given pilot framing of "1 district partner, 7 school sites, 16 meters" (edviroenergy.com).
- **TAM/SAM:** Global HVAC software market USD $737.7M in 2025 → $1,527.5M by 2035, 7.6% CAGR (Future Market Insights, 2025); broader facility-management-software market USD $26.3B in 2025 (Future Market Insights, 2025).
- **GTM / Distribution:** [Inferred]: Direct sales to K-12 school districts starting with founders' "hometown high schools," expanding via district-level reference accounts (edviroenergy.com homepage copy).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond pilot data ownership across 16 meters at 7 sites (edviroenergy.com).
- **Future moat:** [Inferred]: Proprietary "energy world model" trained on multi-site BMS telemetry could accumulate a data moat as installed base grows; unproven now given two-site-class deployment (edviroenergy.com).
- **Market structure:** [Inferred]: Hardware-led incumbents like GridPoint and 75F (CB Insights) face channel/unit-economics conflict in pivoting to software-only agentic offerings that disintermediate their controls hardware revenue.
- **Commoditization risk:** Generic LLM/agent stacks plus open BMS protocols (BACnet/Modbus) make the anomaly-detect-and-simulate workflow reproducible by other YC-stage entrants or BMS vendors layering AI; no patents disclosed (YC page; edviroenergy.com).

## Market & Traction

- **Traction signals:**
  - $400K+ cumulative customer energy savings claimed (edviroenergy.com).
  - 1 district partner, 7 school sites, 16 meters under management (edviroenergy.com).
  - Active YC Summer 2026 batch company (YC company page).
  - Customer testimonial: No public data found.
  - Press coverage: No public data found.
  - Product Hunt: No public data found.
  - Social followers: count not retrievable.
- **Competitors:**
  - GridPoint ($584M raised total, revenue unknown, acquired Oct 13 2025 by Twenty First Century Utilities per Crunchbase/CB Insights): hardware-integrated submetering and controls vs. Edviro's software-only agentic layer.
  - 75F (IoT-based commercial BMS per Energy Digital; funding figures not retrieved): wireless sensor/controller hardware vs. Edviro's BYO-meter SaaS approach.
  - BuildingOS / Atrius (acquired by Acuity/Atrius per CB Insights; standalone funding n/a): dashboards and reporting vs. Edviro's intervention simulation and dispatch.
  - ENTOUCH Controls and Parity (listed as GridPoint competitors per CB Insights; funding not retrieved): controls/optimization services vs. Edviro's agentic M&V workflow.
- **Why now:** [Inferred]: LLM-driven agentic workflows crossed the threshold for autonomous tool use in 2024–2025, enabling simulation + dispatch over BMS telemetry that previously required human analysts (general industry context; no company statement found).

## Founders & Team

- **Hursh Shah (CEO):**
  - Background: Age 18; prior smart-glasses startup Skyglass; NeurIPS 2024 research; described as having "energy systems and data analytics expertise" (YC company page; edviroenergy.com).
  - Twitter/X: No public account found.
  - LinkedIn: "Hursh Shah – Edviro" (linkedin.com/in/hursh-shah).
  - GitHub: No public repos found.
- **Tanuj Siripurapu (CTO):**
  - Background: Age 19; Computer Science student at UC Santa Barbara; 9+ years programming; full-stack Python/Vue/React/ML; previously at RTX; scaled a digital agency to $20K revenue in high school; co-founder MediHacks (tanuj.xyz; LinkedIn; YC company page).
  - Twitter/X: No public account found.
  - LinkedIn: "Tanuj Siripurapu – Stealth Startup" (linkedin.com/in/tanuj-siripurapu-747b58217).
  - GitHub: @TanujKS (github.com/TanujKS); top repo star count not retrievable.
- **Co-founder relationship:** No public data on co-founder history beyond both being college-age founders from the same hometown ("hometown high schools" framing on edviroenergy.com).
- **Founder-market fit:** [Inferred]: Founders cite firsthand exposure to taxpayer-funded inefficiencies in their hometown high schools as motivation (edviroenergy.com); CTO has full-stack/ML build credentials (tanuj.xyz); no advisors, board members, or investors beyond YC disclosed.

## Key Risks

- **Founder seniority / domain depth:** Both founders are 18–19 with no prior energy-industry employment disclosed (YC company page); selling into K-12 district procurement and BMS integration typically requires multi-year sales cycles. No mitigation found beyond YC backing.
- **Pilot concentration:** Traction is entirely "1 district partner, 7 sites, 16 meters" (edviroenergy.com), so loss of the single district reference eliminates the public traction story.
- **Hardware-incumbent substitution:** GridPoint, 75F, and Atrius/BuildingOS (CB Insights) already sit on customer meter data; if any ships an agentic anomaly/M&V module, Edviro loses its insertion point. No mitigation disclosed.
- **Technical feasibility of "energy world model":** No published benchmarks, papers, or accuracy figures for the world-model claim are public (YC page; edviroenergy.com); simulation accuracy across heterogeneous HVAC/boiler/heat-pump assets is unproven at scale.
- **Name disambiguation:** "Edviro" also returns a Beacon-fellowship/school-energy program in search snippets; future press tracking may conflate entities.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global HVAC software $737.7M (2025) → $1,527.5B by 2035 at 7.6% CAGR (Future Market Insights, 2025); facility management software $26.3B (2025) (Future Market Insights, 2025) |
| SAM | No public data found |
| Traction | $400K+ customer savings (edviroenergy.com, 2026); 1 district, 7 sites, 16 meters (edviroenergy.com, 2026); YC S26 batch (YC page, 2026) |
| Revenue Signal | No public data found |
| Founders | Hursh Shah (CEO): Skyglass founder, NeurIPS 2024 research. Tanuj Siripurapu (CTO): UCSB CS, ex-RTX, MediHacks co-founder. |
| Competitors | GridPoint ($584M raised, revenue unknown, hardware-coupled submetering — acquired Oct 2025); 75F (funding n/a, revenue unknown, IoT BMS hardware); BuildingOS/Atrius (funding n/a, revenue unknown, monitoring dashboards); ENTOUCH Controls (funding n/a, revenue unknown, controls/optimization); Parity (funding n/a, revenue unknown, HVAC optimization service) |
| Moat Signals | No public data found |
| Risk Factors | Founder seniority in enterprise energy sales, single-district traction concentration, hardware-incumbent substitution risk |
| Founder Reach | Hursh Shah: Twitter not found, LinkedIn present (count not retrievable), GitHub not found. Tanuj Siripurapu: Twitter not found, LinkedIn present (count not retrievable), GitHub @TanujKS (stars not retrievable) |
| Distribution Signals | No public data found |
| Emails | partnerships@edviroenergy.com (edviroenergy.com) |

Sources:
- [Edviro YC company page](https://www.ycombinator.com/companies/edviro)
- [Edviro homepage](https://edviroenergy.com/home)
- [Hursh Shah LinkedIn](https://www.linkedin.com/in/hursh-shah/)
- [Tanuj Siripurapu portfolio](https://tanuj.xyz/)
- [Tanuj Siripurapu GitHub](https://github.com/TanujKS)
- [Tanuj Siripurapu LinkedIn](https://www.linkedin.com/in/tanuj-siripurapu-747b58217/)
- [GridPoint CB Insights profile](https://www.cbinsights.com/company/gridpoint)
- [GridPoint Crunchbase](https://www.crunchbase.com/organization/gridpoint)
- [Top 10 BEMS – Energy Digital](https://energydigital.com/top10/top-10-building-energy-management-systems-bems)
- [HVAC software market – Future Market Insights](https://www.futuremarketinsights.com/reports/hvac-software-market)
- [Facility management software market – Future Market Insights](https://www.futuremarketinsights.com/reports/facility-management-software-market)
