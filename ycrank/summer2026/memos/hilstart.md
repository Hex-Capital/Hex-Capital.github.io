# Hilstart

> Autonomous Hardware Testing

| Field | Value |
|-------|-------|
| Website | https://hilstart.io/ |
| YC Page | https://www.ycombinator.com/companies/hilstart |
| Batch | Summer 2026 |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 0 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Hardware |
| YC Partner | Jared Friedman |
| Emails | No public data found |

## The Idea

- **Problem:** Hardware engineers building low-volume electronics must manually supervise fragmented firmware, instrumentation, and validation workflows under short timelines and constrained budgets ([Josh Schoeman via LinkedIn](https://nz.linkedin.com/in/sophiaschulz), Aug 2026).
- **Approach:** Hilstart converts schematics, layouts, netlists, BoMs, requirements, and datasheets into an engineer-approved specification, generates tests, and uses its Tracer interface to execute them on physical hardware with approval gates before actuation ([Hilstart website](https://hilstart.io/), accessed Aug 25, 2026).
- **Differentiation:** [Inferred]: Hilstart combines an autonomous agent with its own Tracer I/O hardware, whereas AssembleAI drives existing benchtop instruments, BootLoop centers on firmware generation and HIL software, and Liquid Instruments generates custom instruments on Moku hardware ([Hilstart](https://hilstart.io/); [Assemble Labs](https://assemblelabs.ai/); [BootLoop](https://bootloop.ai/blog/bootloop-test-launch); [Liquid Instruments](https://liquidinstruments.com/news-updates/liquid-instruments-puts-first-ai-powered-instrument-creation-in-the-hands-of-every-engineer/), 2026).
- **Business Model:** [Inferred]: Potential monetization comprises Tracer hardware plus recurring cloud-sandbox or API access, but no public pricing or commercial terms were found ([Hilstart website](https://hilstart.io/), accessed Aug 25, 2026).
- **TAM/SAM:** The global hardware-in-the-loop market is estimated at $904.3 million in 2026 and projected to reach $1.38 billion by 2030 at an 11.1% CAGR, while no public SAM estimate exists for Hilstart’s electronics R&D segment ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/hardware-loop-market-report), 2026).
- **GTM / Distribution:** Hilstart is using contact-led early access and says it is onboarding a small group of teams into board bring-up and validation workflows ([Hilstart website](https://hilstart.io/), accessed Aug 25, 2026).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Versioned board specifications, tests, firmware builds, and physical-run results could create proprietary failure data and workflow switching costs, but Hilstart has not disclosed the scale or exclusivity of this data ([Hilstart website](https://hilstart.io/), accessed Aug 25, 2026).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Assemble Labs, BootLoop, Liquid Instruments, and Nominal already offer overlapping autonomous test, firmware, instrumentation, or HIL capabilities ([Assemble Labs](https://assemblelabs.ai/); [BootLoop](https://bootloop.ai/blog/bootloop-test-launch); [Liquid Instruments](https://liquidinstruments.com/news-updates/series-c/); [TechCrunch on Nominal](https://techcrunch.com/2026/03/05/hardware-testing-startup-nominal-hits-1b-valuation-raises-155m-in-10-months/), 2026).

## Market & Traction

- **Traction signals:**
  - Financing: $1.08 million of a $1.5 million SAFE offering sold to three investors, with first sale on July 13, 2026 ([SEC Form D](https://www.sec.gov/Archives/edgar/data/2147638/000214763826000001/xslFormDX01/primary_doc.xml), Jul 2026).
  - Product status: Tracer is online in early access and Hilstart reports onboarding a small group of teams ([Hilstart website](https://hilstart.io/), accessed Aug 25, 2026).
  - Jobs: 0 active YC job listings ([YC profile](https://www.ycombinator.com/companies/hilstart), accessed Aug 25, 2026).
- **Competitors (minimum 3, up to 5):**
  - Assemble Labs ($1.25M raised, revenue unknown): uses customers’ existing instruments rather than requiring Hilstart’s Tracer interface ([founder announcement](https://www.linkedin.com/posts/nimabanai_hi-friends-im-excited-to-officially-launch-activity-7336074106598998017-81PU); [Assemble Labs](https://assemblelabs.ai/)).
  - BootLoop ($0.5M raised, revenue unknown): combines firmware generation with HIL testing across embedded frameworks, while Hilstart presents a dedicated agent-controlled hardware interface ([Indexed.vc](https://indexed.vc/companies/bootloop); [BootLoop launch](https://bootloop.ai/blog/bootloop-test-launch), 2025–2026).
  - Liquid Instruments ($116.83M raised, revenue unknown): provides reconfigurable measurement hardware and prompt-generated instruments rather than Hilstart’s full firmware-debug-validation loop ([CB Insights](https://www.cbinsights.com/company/liquid-instruments/financials); [Liquid Instruments](https://liquidinstruments.com/news-updates/liquid-instruments-puts-first-ai-powered-instrument-creation-in-the-hands-of-every-engineer/), 2026).
  - Nominal ($155M raised, revenue unknown): supplies enterprise test-data infrastructure and HIL software across defense and industrial customers rather than a compact board-level interface ([TechCrunch](https://techcrunch.com/2026/03/05/hardware-testing-startup-nominal-hits-1b-valuation-raises-155m-in-10-months/), Mar 2026).
- **Why now:** [Inferred]: The catalyst is the 2026 emergence of agents capable of operating physical test equipment, reflected in BootLoop Test’s June launch and Liquid Instruments’ July launch of agent-generated instrumentation ([BootLoop](https://bootloop.ai/blog/bootloop-test-launch); [Liquid Instruments](https://liquidinstruments.com/news-updates/liquid-instruments-puts-first-ai-powered-instrument-creation-in-the-hands-of-every-engineer/), 2026).

## Founders & Team

- **William A'court (Founder/CEO):**
  - Background: University of Auckland graduate with First Class Honours who previously served as Aquila’s Lead Mechatronics Engineer and worked on Formula SAE cars and electric jetboats ([LinkedIn](https://au.linkedin.com/in/william-acourt); [YC profile](https://www.ycombinator.com/companies/hilstart)).
  - Twitter/X: No public account found.
  - LinkedIn: “Embedded hardware and software engineer” ([LinkedIn](https://au.linkedin.com/in/william-acourt)).
  - GitHub: No public repos found.
- **Simon Alexander (Founder/CTO):**
  - Background: Attended the University of Auckland from 2021–2024, built electric racecars, and previously worked as a firmware engineer at Aquila ([LinkedIn](https://www.linkedin.com/in/simon-alexander-8045a685); [YC profile](https://www.ycombinator.com/companies/hilstart)).
  - Twitter/X: No public account found.
  - LinkedIn: “HILstart” ([LinkedIn](https://www.linkedin.com/in/simon-alexander-8045a685)).
  - GitHub: No public repos found.
- **Rahul Bhati (Founder):**
  - Background: University of Auckland engineering graduate with prior roles at Vessev, Halter, and Aquila, where YC says he worked on kilometre-scale laser power transmission and a 500W mid-flight drone transfer ([SignalHire](https://www.signalhire.com/profiles/rahul-bhati%27s-email/185054223); [YC profile](https://www.ycombinator.com/companies/hilstart)).
  - Twitter/X: No public account found.
  - LinkedIn: Profile found; headline not retrievable.
  - GitHub: No public repos found.
- **Josh Schoeman (Founder):**
  - Background: University of Auckland mechanical-engineering graduate with ZeroJet and Vessev propulsion experience plus hardware-test, electrical, thermal, DFM, and harness work ([Schoeman Engineering](https://www.schoeman.co.nz/about); [YC profile](https://www.ycombinator.com/companies/hilstart)).
  - Twitter/X: No public account found.
  - LinkedIn: “HILstart (YC S26)” ([LinkedIn directory](https://www.linkedin.com/pub/dir/%2B/Schoeman)).
  - GitHub: No public repos found.
- **Co-founder relationship:** All four founders worked together at Aquila, while A'court and Schoeman had previously met in graduate roles at ZeroJet in early 2023 ([Simon Alexander via LinkedIn](https://au.linkedin.com/in/rianashah2026); [Josh Schoeman via LinkedIn](https://nz.linkedin.com/in/jake-olliff-5a7218171), Aug 2026).
- **Founder-market fit:** [Inferred]: The team’s documented firmware, mechatronics, propulsion, test-rig, electronics-debugging, and hardware-validation experience maps directly to Hilstart’s workflow ([YC profile](https://www.ycombinator.com/companies/hilstart); [Schoeman Engineering](https://www.schoeman.co.nz/about)).

## Key Risks

- **Technical validation risk:** Hilstart claims autonomous firmware writing and physical validation but publishes no accuracy, failure-rate, or customer benchmark; read-only defaults, voltage constraints, and human approval gates mitigate unintended actuation ([Hilstart website](https://hilstart.io/), accessed Aug 25, 2026).
- **Design-IP and security risk:** The workflow consumes schematics, PCB layouts, BoMs, requirements, and repositories, which may restrict cloud adoption; Hilstart offers access from a customer-controlled environment over an API ([Hilstart website](https://hilstart.io/), accessed Aug 25, 2026).
- **Competitive substitution:** Assemble Labs, BootLoop, Liquid Instruments, and Nominal overlap across autonomous debugging, firmware testing, instrumentation, and HIL infrastructure ([Assemble Labs](https://assemblelabs.ai/); [BootLoop](https://bootloop.ai/blog/bootloop-test-launch); [Liquid Instruments](https://liquidinstruments.com/news-updates/series-c/); [TechCrunch](https://techcrunch.com/2026/03/05/hardware-testing-startup-nominal-hits-1b-valuation-raises-155m-in-10-months/), 2026).
- **Production-workflow boundary:** Hilstart states Tracer is built for R&D bring-up, debugging, validation, and regression, while production-line testing remains an area in which it is investing ([Hilstart website](https://hilstart.io/), accessed Aug 25, 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $904.3M global HIL market in 2026, reaching $1.38B by 2030 at 11.1% CAGR ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/hardware-loop-market-report), 2026) |
| SAM | No public data found |
| Traction | Tracer in early access and onboarding a small group of teams ([Hilstart website](https://hilstart.io/), Aug 2026) |
| Revenue Signal | No public data found |
| Founders | William A'court (CEO): Aquila lead mechatronics engineer; Simon Alexander (CTO): Aquila firmware engineer; Rahul Bhati: Aquila, Halter, and Vessev engineer; Josh Schoeman: ZeroJet and Vessev engineer ([YC profile](https://www.ycombinator.com/companies/hilstart); [Schoeman Engineering](https://www.schoeman.co.nz/about)) |
| Competitors | Assemble Labs ($1.25M raised, revenue unknown, existing-instrument HIL agent) ([founder announcement](https://www.linkedin.com/posts/nimabanai_hi-friends-im-excited-to-officially-launch-activity-7336074106598998017-81PU)); BootLoop ($0.5M, revenue unknown, firmware-centered agent) ([Indexed.vc](https://indexed.vc/companies/bootloop)); Liquid Instruments ($116.83M, revenue unknown, reconfigurable instruments) ([CB Insights](https://www.cbinsights.com/company/liquid-instruments/financials)); Nominal ($155M, revenue unknown, enterprise test infrastructure) ([TechCrunch](https://techcrunch.com/2026/03/05/hardware-testing-startup-nominal-hits-1b-valuation-raises-155m-in-10-months/)) |
| Moat Signals | No public data found |
| Risk Factors | Physical-actuation reliability and design-IP exposure ([Hilstart website](https://hilstart.io/)); competing autonomous HIL platforms ([Assemble Labs](https://assemblelabs.ai/); [BootLoop](https://bootloop.ai/blog/bootloop-test-launch)) |
| Founder Reach | William A'court: 210 LinkedIn followers ([LinkedIn](https://au.linkedin.com/in/william-acourt)); Simon Alexander: 219 LinkedIn followers ([LinkedIn](https://www.linkedin.com/in/simon-alexander-8045a685)); Rahul Bhati and Josh Schoeman: no public counts found |
| Distribution Signals | Contact-led early access, onboarding a small group of teams, and 0 YC job listings ([Hilstart website](https://hilstart.io/); [YC profile](https://www.ycombinator.com/companies/hilstart), Aug 2026) |
| Emails | No public data found |
