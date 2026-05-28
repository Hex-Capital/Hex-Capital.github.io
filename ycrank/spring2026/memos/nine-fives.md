# Nine Fives

> Simple, Networked, Driverless, RF Test Equipment

| Field | Value |
|-------|-------|
| Website | https://ninefives.com/ |
| YC Page | https://www.ycombinator.com/companies/nine-fives |
| Batch | Spring 2026 |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Radar, Telecommunications, Electronics |
| YC Partner | Tom Blomfield |
| Emails | No public data found |

## The Idea

- **Problem:** Manufacturers of radio devices for cellphones, drones, and satellites depend on legacy RF test equipment with outdated drivers and poor documentation, including instruments built around the "January 1997 revision of the USB Human Interface Device specification" (YC Launch page).
- **Approach:** Driverless, networked RF instruments (attenuators, SPDT switches, power meter) usable "within 10s of plugging it in," with a single machine-readable API exposing both REST and SCPI endpoints, USB-C or PoE power, integrated touchscreens, and a NineVue web app for rack configuration (ninefives.com; YC Launch page).
- **Differentiation:** Versus Keysight, Rohde & Schwarz, National Instruments (legacy SCPI/driver stacks), Mini-Circuits, and DS Instruments (USB GUI/SCPI but driver-bound) — Nine Fives ships zero-install operation, an LLM "skill.md" for converting rack diagrams into test automation code, and a rack-mountable data/power backplane (ninefives.com).
- **Business Model:** Hardware unit sales; ninefives.com store filter shows max product price of $1,500 with no per-unit price listed publicly (ninefives.com/collections/all); company offers 30-day money-back and 2-year warranty (about-us page).
- **TAM/SAM:** Global RF test equipment market $3.99B in 2025 growing to $8.48B by 2034 at 8.74% CAGR (Precedence Research, 2025); top 5 incumbents hold ~55% of revenue with no single firm above 18% share (Precedence Research).
- **GTM / Distribution:** [Inferred]: Direct e-commerce via ninefives.com (Shopify-style storefront present) plus YC network introductions to hardware manufacturers; product compatibility with NI TestStand and Keysight Connection Expert signals drop-in replacement positioning (ninefives.com).

## Defensibility

- **Moat today:** Founders' combined ~decade at SpaceX designing RF hardware (Falcon 9 Radar Altimeter, Dragon 2 S-Band Transceiver, Starship GPS/S-Band radios) and test systems is the cited differentiator (about-us page; LinkedIn).
- **Future moat:** [Inferred]: NineVue rack-config web app plus the LLM-readable "skill.md" layer could become a software lock-in surface as customers version-control test racks and AI-generate test code against Nine Fives' API.
- **Market structure:** [Inferred]: Incumbents (Keysight, R&S, NI) sell high-ASP rack instruments with bundled enterprise driver suites; making them driverless and API-first risks cannibalizing their software/services revenue and channel partners, creating a classic disruption-from-below opening.
- **Commoditization risk:** DS Instruments and Mini-Circuits already ship programmable USB/Ethernet attenuators (e.g., DS Instruments 6 GHz 90 dB unit at $649–$749 per everythingrf/dsinstruments listings), so the hardware itself is replicable; the differentiator rests on the software/API stack.

## Market & Traction

- **Traction signals:**
  - Company founded 2025 (RocketReach; YC page).
  - YC Spring 2026 batch ("YC P26" on LinkedIn company page).
  - YC Launch published ~7 days before research date (YC Launch page, May 2026).
  - 4 SKUs publicly listed: PD8X, POE-ATTEN-6G, POE-SWITCH-6G, POE-PMETER-6G (ninefives.com/collections/all).
  - 2-year warranty and 30-day money-back guarantee offered (about-us page).
  - Noah Levy LinkedIn profile active as "Founder and CEO, Nine Fives" (linkedin.com/in/noahmslevy/); company LinkedIn page exists (linkedin.com/company/nine-fives). Follower counts not retrievable via search.
  - No Product Hunt launch found; no press coverage, revenue figures, customer logos, or unit-sales numbers publicly disclosed.
- **Competitors:**
  - Keysight Technologies (public, NYSE:KEYS, multi-$B revenue): incumbent rack RF test leader with proprietary driver stack and Connection Expert software (Keysight; Precedence Research).
  - Rohde & Schwarz (private, German, multi-$B revenue): full-line RF test vendor competing on precision and ATE integration (212instruments.com comparison).
  - National Instruments / Emerson (acquired by Emerson 2023 for $8.2B per public filings; revenue unknown standalone now): TestStand automation framework that Nine Fives explicitly targets for compatibility (ninefives.com).
  - Mini-Circuits (private, revenue unknown): >400 attenuator SKUs with USB/Ethernet control up to 67 GHz / 120 dB (minicircuits.com).
  - DS Instruments (private, funding/revenue unknown — no Crunchbase financials found): closest direct analog with USB/Ethernet programmable attenuators and RF switches priced $649–$749 for 6 GHz 90 dB unit (dsinstruments.com).
- **Why now:** [Inferred]: PoE-powered instruments, ubiquitous REST tooling, and LLM-driven test-code generation (skill.md pattern) have only become viable in the last 12–24 months, enabling a software-defined test-rack workflow that legacy SCPI/HID-era hardware cannot match.

## Founders & Team

- **Noah Levy (Founder, CEO):**
  - Background: BS Electrical and Computer Engineering, Cornell; MS Electrical Engineering, University of Washington; Hardware Systems Engineering Intern at Intel (2015); RF Engineering Intern → RF Engineer → RF Engineer II → Senior RF Engineer (Starship) at SpaceX (2016–2023); 6× SpaceX "kickass award" winner; responsible engineer for Falcon 9 Radar Altimeter, Dragon 2 S-Band Transceiver, and Starship GPS/S-Band radios (LinkedIn; ninefives.com about-us; YC page).
  - Twitter/X: No public account found in search results.
  - LinkedIn: "Nine Fives" / "RF Engineer" (linkedin.com/in/noahmslevy/) — follower count not retrievable.
  - GitHub: No public personal repos confirmed; ninefiveslabs GitHub org is a Warsaw-based unrelated entity per its repo content.
- **Andrew Kurtz (Founder, COO):**
  - Background: BS Aerospace Engineering, MIT (2013–2017); SpaceX engineering intern on Falcon 9 First Stage (test automation), then payloads accommodation/Fairing 2.0 integration; subsequent role as Staff Mechanical Engineer at Aurora Flight Sciences, Cambridge MA (ZoomInfo; RocketReach; ninefives.com about-us).
  - Twitter/X: No public account found in search results.
  - LinkedIn: "Builder" (linkedin.com/in/andrew-e-kurtz) — follower count not retrievable.
  - GitHub: No public repos confirmed.
- **Co-founder relationship:** Both worked at SpaceX (Noah 2016–2023 RF; Andrew on Falcon 9 and Fairing 2.0) — about-us page describes "a decade at SpaceX" jointly (ninefives.com).
- **Founder-market fit:** Noah's documented decade designing production RF radios that had to be tested at scale, plus Andrew's aerospace manufacturing/integration background, maps directly to building production-grade RF test instruments for hardware manufacturers (ninefives.com about-us; LinkedIn).

## Key Risks

- **Hardware commoditization vs. software-first competitors:** DS Instruments and Mini-Circuits already ship Ethernet/USB programmable attenuators and switches across the same 6 GHz range (dsinstruments.com; minicircuits.com); Nine Fives must defend on the NineVue/API/skill.md software layer, which is not yet shown to have customer adoption.
- **Incumbent retaliation in installed base:** Keysight, R&S, and NI (now Emerson) collectively hold ~55% of a moderately concentrated market (Precedence Research) and own the TestStand / Connection Expert software layers Nine Fives is trying to displace, giving them direct paths to ship competing driverless/REST workflows.
- **No public traction signals:** No public revenue, unit sales, customer logos, press coverage, or Product Hunt launch were findable as of May 2026 (research date); only 4 SKUs are listed and YC Launch was ~1 week old at research time.
- **Long enterprise sales cycles in regulated hardware verticals:** Cellphone, drone, and satellite manufacturers typically qualify test equipment over multi-quarter cycles ([Inferred] from industry norms — no Nine Fives–specific evidence found); risk that funded runway runs ahead of design wins.
- **Name/identity disambiguation:** A separate "Nine Fives Labs" GitHub org based in Warsaw exists (github.com/ninefiveslabs) and is unrelated to this YC company per its repo content; potential for brand confusion in search and SEO.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3.99B in 2025 → $8.48B by 2034, 8.74% CAGR (Precedence Research, 2025) |
| SAM | No public data found |
| Traction | YC Spring 2026 batch (YC page); 4 SKUs listed PD8X / POE-ATTEN-6G / POE-SWITCH-6G / POE-PMETER-6G (ninefives.com, May 2026); YC Launch posted ~7 days before research (YC Launch page, May 2026); 2-yr warranty, 30-day MBG (about-us page) |
| Revenue Signal | Store filter shows max price $1,500; individual SKU prices not publicly displayed (ninefives.com/collections/all, May 2026) |
| Founders | Noah Levy (CEO): ex-SpaceX Senior RF Engineer (Starship/Falcon 9/Dragon 2), MS EE U Washington, BS Cornell, 6× SpaceX kickass award. Andrew Kurtz (COO): ex-SpaceX payloads/Fairing 2.0, ex-Aurora Flight Sciences staff ME, BS Aerospace MIT. |
| Competitors | Keysight (public NYSE:KEYS, revenue multi-$B, incumbent RF test); Rohde & Schwarz (private, revenue multi-$B, full-line incumbent); NI/Emerson (acquired $8.2B 2023, TestStand owner); Mini-Circuits (private, revenue unknown, >400 attenuator SKUs to 67 GHz); DS Instruments (private, revenue unknown, $649–$749 6 GHz 90 dB attenuator) |
| Moat Signals | Founders' joint decade at SpaceX designing flight-qualified RF systems (ninefives.com about-us; LinkedIn); NineVue rack-config web app + LLM skill.md software layer (ninefives.com) |
| Risk Factors | Hardware commoditization vs. DS Instruments/Mini-Circuits, incumbent software retaliation, no public traction yet |
| Founder Reach | Noah Levy: Twitter not found, LinkedIn @noahmslevy count not retrievable, GitHub not found. Andrew Kurtz: Twitter not found, LinkedIn @andrew-e-kurtz count not retrievable, GitHub not found. |
| Distribution Signals | YC Launch page live (ycombinator.com/launches/QQk-nine-fives, May 2026); company LinkedIn page live as "Nine Fives | YC P26"; no Product Hunt launch found; no press coverage found |
| Emails | No public data found |

Sources:
- [Nine Fives YC page](https://www.ycombinator.com/companies/nine-fives)
- [Nine Fives YC Launch](https://www.ycombinator.com/launches/QQk-nine-fives-simple-networked-driverless-rf-test-equipment)
- [Nine Fives website](https://ninefives.com/)
- [Nine Fives about-us](https://ninefives.com/pages/about-us)
- [Noah Levy LinkedIn](https://www.linkedin.com/in/noahmslevy/)
- [Andrew Kurtz LinkedIn](https://www.linkedin.com/in/andrew-e-kurtz)
- [Nine Fives LinkedIn (YC P26)](https://www.linkedin.com/company/nine-fives)
- [RocketReach Nine Fives profile](https://rocketreach.co/nine-fives-profile_b6b31598c84fcae9)
- [Precedence Research RF Test Equipment market](https://www.precedenceresearch.com/rf-test-equipment-market)
- [DS Instruments 90dB 6GHz attenuator](https://www.dsinstruments.com/product/digital-attenuators/6ghz-90db-digital-rf-step-attenuator-usb-dat90/)
- [Mini-Circuits RF Programmable Attenuators](https://www.minicircuits.com/WebStore/RF-Programmable-Attenuators.html)
- [Keysight vs Rohde & Schwarz comparison](https://212instruments.com/keysight-vs-rohde-schwarz-which-test-equipment-is-better-for-us-labs/)
