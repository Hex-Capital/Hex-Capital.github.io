# Neuron Industries

> Industrial Controllers built for AI

| Field | Value |
|-------|-------|
| Website | https://neuronindustries.com |
| YC Page | https://www.ycombinator.com/companies/neuron-industries |
| Batch | Summer 2026 |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 2 |
| Location | Los Angeles, CA, USA |
| Tags | Robotic Process Automation, Manufacturing, Automation, Industrial |
| YC Partner | Diana Hu |
| Emails | hello@neuronindustries.com |

## The Idea

- **Problem:** Machine builders and industrial operators use PLCs that Neuron describes as costing approximately $5,000 with 5 MB of memory, proprietary development environments, and programming languages standardized in 1993, while controls projects can take weeks or months ([YC launch, Jul 2026](https://www.ycombinator.com/launches/RtE-neuron-industries-the-world-s-first-purpose-built-industrial-controller-for-ai)).
- **Approach:** Cortex combines PLC control, HMI, historian, communications, and a browser-based IDE in one controller, while Synapse translates plain-English requirements into deterministic real-time Python and generates simulation tests before deployment ([Neuron website, Jul 2026](https://neuronindustries.com/)).
- **Differentiation:** Unlike Siemens and Rockwell PLC stacks and Software Defined Automation’s vendor-neutral PLC-management layer, Cortex replaces the controller and associated IDE, HMI, and historian while including EtherCAT, EtherNet/IP, PROFINET, and Modbus TCP connectivity ([Neuron website, Jul 2026](https://neuronindustries.com/); [Software Defined Automation, Jul 2026](https://www.softwaredefinedautomation.io/)).
- **Business Model:** Cortex Mini costs $2,950 once and Cortex costs $6,450 once, with Synapse software included and no runtime-license fees ([Neuron website, Jul 2026](https://neuronindustries.com/)).
- **TAM/SAM:** The global industrial-automation and control-systems market was $226.8 billion in 2025 and is forecast to grow at a 10.5% CAGR from 2026 through 2033, reaching $504.4 billion ([Grand View Research, Jun 2026](https://www.grandviewresearch.com/industry-analysis/industrial-automation-market)).
- **GTM / Distribution:** Neuron is targeting modular and forward-deployed factories in drone production, chemicals, mineral refining, and fuel production, where controllers can be specified for new equipment rather than replacing installed systems ([Atoms Not Bits, Jul 2026, via search snippet](https://ww.twstalker.com/AtomsNotBits)).

## Defensibility

- **Moat today:** Cortex’s technical integration spans real-time control hardware, AI-assisted deterministic Python, fieldbus discovery, HMI, historian, testing, and a stated 0.5-microsecond P99.9 jitter target in the performance configuration ([Neuron website, Jul 2026](https://neuronindustries.com/)).
- **Future moat:** [Inferred]: Validated control templates and machine-history data could reduce deployment work over time, but Neuron has not disclosed a proprietary dataset, patent portfolio, or usage scale.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Siemens, Rockwell, Schneider Electric, ABB, and other existing automation suppliers already sell industrial controllers, while Software Defined Automation virtualizes and manages PLC workloads across vendors ([Grand View Research, Jun 2026](https://www.grandviewresearch.com/industry-analysis/industrial-automation-market); [Software Defined Automation, Jul 2026](https://www.softwaredefinedautomation.io/)).

## Market & Traction

- **Traction signals:**
  - Pilot hardware is deployed in chemical processing, electronics manufacturing, wastewater treatment, and small modular reactor environments ([YC launch, Jul 2026](https://www.ycombinator.com/launches/RtE-neuron-industries-the-world-s-first-purpose-built-industrial-controller-for-ai)).
  - Two pilots were live with hard-technology companies at launch ([Atoms Not Bits, Jul 2026, via search snippet](https://ww.twstalker.com/AtomsNotBits)).
  - The company LinkedIn page had 47 followers ([LinkedIn, Jul 2026](https://www.linkedin.com/company/neuronindustries)).
  - The YC profile listed zero active jobs ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/neuron-industries)).
- **Competitors (minimum 3, up to 5):**
  - Software Defined Automation ($10M raised, revenue unknown): manages, versions, and virtualizes PLC software across vendors rather than supplying Neuron’s integrated controller, HMI, historian, and IDE ([Raising.fi, Jul 2026](https://raising.fi/company/softwaredefinedautomation)).
  - Vention (over $155M raised, $60M annual revenue): provides cloud-designed, plug-and-play robotic automation systems rather than a general-purpose replacement for process-control PLCs ([Vention, Jul 2026](https://vention.com/press)).
  - Tulip Interfaces (at least $259.5M disclosed funding, revenue unknown): supplies cloud-based no-code frontline-operations and MES applications with edge connectivity rather than replacing the underlying PLC hardware ([Tulip, Aug 2021](https://tulip.co/press/tulip-raises-100m-seriesc-led-by-insight-partners/); [CB Insights, Dec 2025](https://www.cbinsights.com/company/tulip-interfaces/financials)).
- **Why now:** Neuron attributes its timing to simultaneous U.S. reindustrialization, data-center construction, and a shrinking controls-programmer workforce ([YC launch, Jul 2026](https://www.ycombinator.com/launches/RtE-neuron-industries-the-world-s-first-purpose-built-industrial-controller-for-ai)).

## Founders & Team

- **Dennis Ren (CEO, Co-founder):**
  - Background: Ren earned a BSEE from UC San Diego in 2018 and worked on industrial control panels at Tesla, sensor and embedded systems at Amazon Go, Apple Vision Pro eye-tracking hardware, and Freeform’s metal-printing hardware and production systems ([Dennis Ren, Jul 2026](https://dennisren.com/)).
  - Twitter/X: @the_dennis_ren; count not retrievable ([Atoms Not Bits, Jul 2026, via search snippet](https://ww.twstalker.com/AtomsNotBits)).
  - LinkedIn: “Neuron Industries; System Integrator, Hardware Engineer,” with 1K followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/dennisren)).
  - GitHub: @DennisRen; no public repositories found ([GitHub, Jul 2026](https://github.com/dennisren)).
- **Kenneth Rhee (CTO, Co-founder):**
  - Background: Rhee studied computer science at UC Irvine, worked on Amazon EBS and Silk, GOAT Group marketplace systems, and regulated clinical software at Medidata, and bootstrapped and exited WorkIPO ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/neuron-industries)).
  - Twitter/X: @kenneth_rhee; count not retrievable ([Atoms Not Bits, Jul 2026, via search snippet](https://ww.twstalker.com/AtomsNotBits)).
  - LinkedIn: No public headline retrievable.
  - GitHub: @kenrhe; profile lists 15 repositories, but repository names and star counts were not retrievable ([GitHub, Jul 2026](https://github.com/kenrhe)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Ren previously built industrial control and manufacturing hardware at Tesla and Freeform, while Rhee built ERP, MES, CRM, storage, and marketplace systems at WorkIPO, Amazon, and GOAT Group ([YC launch, Jul 2026](https://www.ycombinator.com/launches/RtE-neuron-industries-the-world-s-first-purpose-built-industrial-controller-for-ai)).

## Key Risks

- **Safety-certification scope:** The website lists Cortex Mini with no safety rating and Cortex with a target SIL 1 safety path, while noting that all specifications are current production targets subject to change ([Neuron website, Jul 2026](https://neuronindustries.com/)).
- **AI-generated control correctness:** Synapse generates machine-control code from natural-language requirements, creating dependence on ambiguity detection, simulation, and deployment verification; Neuron states that it asks users to resolve ambiguous requirements and tests each behavior before deployment ([Neuron website, Jul 2026](https://neuronindustries.com/)).
- **Installed-vendor substitution:** Neuron must displace or coexist with Siemens, Rockwell, Schneider Electric, ABB, and other suppliers whose products form the existing PLC, SCADA, and control-system market ([Grand View Research, Jun 2026](https://www.grandviewresearch.com/industry-analysis/industrial-automation-market)).
- **Name disambiguation:** “Neuron” is also used by unrelated industrial-IoT, design, cryptocurrency, and software companies, which creates search and brand-confusion risk; the YC company is identified by neuronindustries.com, founders Dennis Ren and Kenneth Rhee, and Summer 2026 batch membership ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/neuron-industries)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $226.8B global industrial-automation and control-systems market in 2025; 10.5% CAGR for 2026–2033 ([Grand View Research, Jun 2026](https://www.grandviewresearch.com/industry-analysis/industrial-automation-market)) |
| SAM | No public data found |
| Traction | Pilots in chemical processing, electronics manufacturing, wastewater treatment, and small modular reactors ([YC launch, Jul 2026](https://www.ycombinator.com/launches/RtE-neuron-industries-the-world-s-first-purpose-built-industrial-controller-for-ai)); two live hard-tech pilots ([Atoms Not Bits, Jul 2026, via search snippet](https://ww.twstalker.com/AtomsNotBits)) |
| Revenue Signal | Cortex Mini $2,950 one-time and Cortex $6,450 one-time, with software included and no runtime licenses ([Neuron website, Jul 2026](https://neuronindustries.com/)) |
| Founders | Dennis Ren (CEO): UCSD BSEE, Freeform founding EE, Apple Vision Pro hardware; Kenneth Rhee (CTO): UC Irvine CS, Amazon and GOAT engineer, exited WorkIPO ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/neuron-industries)) |
| Competitors | Software Defined Automation ($10M raised, revenue unknown, virtualizes vendor PLCs); Vention (over $155M raised, $60M annual revenue, robotic automation platform); Tulip Interfaces (at least $259.5M disclosed funding, revenue unknown, no-code frontline-operations platform) ([Raising.fi, Jul 2026](https://raising.fi/company/softwaredefinedautomation); [Vention, Jul 2026](https://vention.com/press); [Tulip, Aug 2021](https://tulip.co/press/tulip-raises-100m-seriesc-led-by-insight-partners/)) |
| Moat Signals | Integrated controller, IDE, HMI, historian, testing, and fieldbus stack with a stated 0.5-microsecond P99.9 jitter target ([Neuron website, Jul 2026](https://neuronindustries.com/)) |
| Risk Factors | Safety specifications remain production targets, AI-generated control correctness, installed incumbent substitution ([Neuron website, Jul 2026](https://neuronindustries.com/); [Grand View Research, Jun 2026](https://www.grandviewresearch.com/industry-analysis/industrial-automation-market)) |
| Founder Reach | Dennis Ren: LinkedIn 1K, Twitter count not retrievable, GitHub 0 public repos; Kenneth Rhee: Twitter count not retrievable, GitHub repo stars not retrievable ([LinkedIn, Jul 2026](https://www.linkedin.com/in/dennisren); [GitHub, Jul 2026](https://github.com/dennisren); [GitHub, Jul 2026](https://github.com/kenrhe)) |
| Distribution Signals | LinkedIn 47 followers and YC jobs page lists 0 openings ([LinkedIn, Jul 2026](https://www.linkedin.com/company/neuronindustries); [Y Combinator, Jul 2026](https://www.ycombinator.com/companies/neuron-industries)) |
| Emails | hello@neuronindustries.com ([Neuron website, Jul 2026](https://neuronindustries.com/)) |
