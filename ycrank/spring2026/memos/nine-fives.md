# Nine Fives

> Simple, Networked, Driverless, RF Test Equipment

| Field | Value |
|-------|-------|
| Website | https://ninefives.com/ |
| YC Page | https://www.ycombinator.com/companies/nine-fives |
| Batch | Spring 2026 |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 2 |
| Location | No public data found |
| Tags | Radar, Telecommunications, Electronics |
| YC Partner | Tom Blomfield |
| Emails | No public data found |

## The Idea

**Problem:** RF test engineers in aerospace, defense, telecom, and manufacturing rely on programmable attenuators and switches that require proprietary driver installation, vendor-specific control software, and dedicated power supplies. Existing equipment from incumbents such as Keysight and National Instruments typically depends on GPIB interfaces and platform-specific drivers, creating setup friction and limiting integration with modern software-defined and headless Linux test environments (ninefives.com). The company's tagline — "Simple, Networked, Driverless" — targets this pain point directly.

**Approach:** Nine Fives manufactures ethernet-enabled RF test instruments — currently a programmable attenuator (POE-ATTEN-6G) and an SPDT switch (POE-SWITCH-6G) — that require no driver installation and become operational within 10 seconds of connection (ninefives.com). Each device accepts dual power via USB-C or IEEE 802.3af Power over Ethernet, and exposes control through three interfaces: a browser-based Web UI, a REST API, and SCPI (the legacy instrument command standard) (ninefives.com). This allows integration with NI TestStand, Keysight Connection Expert, headless Linux systems, and legacy Windows workflows without additional software (ninefives.com).

**Differentiation:** Versus Keysight and National Instruments, Nine Fives eliminates GPIB/driver dependencies and proprietary control software. Versus Mini-Circuits' RCDAT series, which offers USB & Ethernet but uses vendor software for configuration (minicircuits.com), Nine Fives emphasizes zero-install browser and API-first control. Versus Vaunix Lab Brick devices, which are USB-only and require Lab Brick software (vaunix.com), Nine Fives adds native PoE networking and a REST API. Versus Adaura Technologies' AD-USB series, which added Ethernet to USB attenuators (adauratech.com), Nine Fives positions as a purpose-built networked-first architecture rather than an Ethernet add-on.

**Business Model:** No pricing page or public pricing data was found on ninefives.com. [Inferred]: Most likely monetization is direct hardware sales of instruments, possibly with tiered pricing by frequency range or channel count, given that competitors like Vaunix and Mini-Circuits sell individual instruments in the $500–$5,000 range.

**TAM/SAM:** The global RF test equipment market was estimated at USD 3.99B in 2025, projected to reach USD 8.48B by 2034 at 8.74% CAGR (Precedence Research, 2025). The 5G testing equipment sub-segment was valued at USD 2.00B in 2024, projected to reach USD 4.13B by 2032 at 9.5% CAGR (Fortune Business Insights, 2024). [Inferred]: The serviceable market for networked programmable attenuators and switches is a subset of these figures — likely in the low hundreds of millions — as these are individual instrument categories within the broader test equipment TAM.

**GTM / Distribution:** No public GTM data found. [Inferred]: Most likely distribution path is direct online sales to RF engineers (similar to Vaunix and Mini-Circuits web stores), supplemented by integration partnerships with test system integrators. The REST API / SCPI dual-interface approach lowers adoption barriers for engineers already embedded in NI or Keysight ecosystems.

## Defensibility

- **Technical complexity:** Building RF hardware that operates reliably to 6 GHz with sub-dB accuracy and network-first firmware is non-trivial, though not unprecedented (ninefives.com product specs).
- **Switching costs:** Once instruments are integrated into automated test benches via REST API calls or SCPI scripts, replacing them requires rewriting test automation code. [Inferred]: This creates moderate switching costs that grow with deployment scale.
- **No patents found** in public searches.

**Market structure:** Keysight (USD 5.4B revenue, FY2024) and National Instruments (acquired by Emerson for USD 8.2B in 2023) could build similar networked instruments, but their business models depend on selling full test system stacks with proprietary software licenses. [Inferred]: Unbundling individual instruments with open APIs and zero-install software directly cannibalize the high-margin software/driver ecosystem that funds incumbent R&D, creating a business model conflict. Mini-Circuits could add similar REST API features, but as a components company shipping 60,000+ catalog products (minicircuits.com), individual product-line investment in software UX is structurally deprioritized.

**Commoditization risk:** Vaunix, Mini-Circuits, and Adaura all sell programmable RF attenuators with some form of remote control. Adding a REST API to an existing product line is an engineering project, not a fundamental barrier. [Inferred]: The moat is narrow at this stage and depends on execution speed, developer experience quality, and building a broader networked instrument portfolio before incumbents modernize their interfaces.

## Market & Traction

**Traction signals:**
- Company Twitter/X: @9_fives (handle confirmed via search; follower count not retrievable due to platform restrictions)
- LinkedIn: Company page exists at linkedin.com/company/nine-fives (LinkedIn search result); follower count not retrievable
- Two shipping products listed on website with reference manuals and datasheets available (ninefives.com)
- No press coverage, Product Hunt launch, revenue disclosures, user counts, app store listings, community channels, or job postings found in public sources

**Competitive landscape:**

| Competitor | Key Differentiator vs. Nine Fives | Funding / Revenue |
|---|---|---|
| **Mini-Circuits** | Broad catalog (attenuators, switches, filters, amplifiers), global distribution, 55+ year track record. Uses vendor software for setup. | Private, no external funding; estimated ~$111M–$400M annual revenue (ZoomInfo/Growjo, 2026) |
| **Vaunix** | 60+ Lab Brick products up to 40 GHz; USB-only portable form factor. Requires Lab Brick software. | Private, self-funded spinoff from Nera Networks (2005); revenue not public (ZoomInfo) |
| **Adaura Technologies** | Customizable multi-channel attenuators (up to 8-channel, 8 GHz); customers include GE and NASA JPL. USB primary, Ethernet add-on. | Private (founded 2013, Silicon Valley); funding and revenue not public (Crunchbase) |
| **Keysight Technologies** | Full-stack T&M platform (oscilloscopes, spectrum analyzers, attenuators); operates to 50+ GHz. Driver/software-dependent. | Public (NYSE: KEYS); ~$5.4B annual revenue (FY2024 earnings) |

**Why now:**
- The rise of Open RAN (O-RAN) and virtualized network functions is driving demand for flexible, software-defined test setups that can simulate multi-vendor deployments (Fortune Business Insights, 2024 via search snippet).
- Governments in Europe and Japan are funding 5G testbeds and interoperability certification labs, increasing demand for integrated, remotely controllable test systems (Research Nester, 2025 via search snippet).
- [Inferred]: The broader shift toward DevOps-style automation in hardware test — headless Linux CI/CD pipelines, containerized test orchestration — creates demand for instruments with native API access, which legacy GPIB/driver-dependent instruments do not serve well.

## Founders & Team

**Andrew Kurtz** — Co-founder
- Mechanical engineer with 9 years of aerospace experience (YC page)
- Staff Mechanical Engineer at Aurora Flight Sciences, Cambridge, MA (LinkedIn, ZoomInfo)
- Previously at SpaceX: payloads accommodation team (mission-specific design/analysis, Fairing 2.0 bolt-on component integration); engineering intern on Falcon 9 First Stage team (test automation and ground support equipment) (RocketReach, ZoomInfo)
- Education: Massachusetts Institute of Technology (MIT) (RocketReach)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/andrew-e-kurtz
- GitHub: No public repos found

**Noah Levy** — Co-founder
- RF Engineer with approximately one decade of aerospace experience (YC page)
- Senior RF Engineer (Hardware Development / Satellites) at SpaceX (Apollo.io, RocketReach)
- Education: Cornell University — RF Engineering Intern and ECE4530 Teaching Assistant (2016–2017) (Apollo.io via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/noahmslevy — headline: "RF Engineer"
- GitHub: No public repos found

**Co-founder relationship:** Both Andrew Kurtz and Noah Levy worked at SpaceX, with overlapping tenures in aerospace roles. Kurtz worked on payloads/mechanical engineering while Levy worked on RF/satellite hardware development (Phase 3 findings).

**Founder-market fit:** Levy brings direct RF hardware engineering expertise from designing satellite RF systems at SpaceX, which maps directly to the core product domain. Kurtz brings mechanical engineering and test automation experience from SpaceX's Falcon 9 program, relevant to instrument hardware design and the "automated test bench" use case Nine Fives targets. Both founders experienced the pain of aerospace RF test workflows firsthand.

## Key Risks

**Narrow initial product line:** Nine Fives currently offers two instruments (attenuator, switch) in a market where competitors like Mini-Circuits offer hundreds of catalog products. Test engineers typically purchase from vendors who can supply a full bench, creating a bundling disadvantage. Mitigation: the REST API and SCPI compatibility allow coexistence with incumbent instruments on the same bench.

**Incumbent response via software updates:** Mini-Circuits and Vaunix could add REST API endpoints and browser-based UIs to their existing hardware through firmware updates, neutralizing Nine Fives' primary differentiation without new hardware development. No evidence of such updates found currently.

**Hardware business capital intensity:** RF instrument manufacturing requires component procurement, calibration equipment, RF testing infrastructure, and inventory. Scaling hardware production at pre-seed funding levels is constrained. [Inferred]: The PoE/USB-C dual-power design and compact form factor suggest a deliberate effort to minimize BOM cost and assembly complexity.

**Name collision:** "Nine Fives Labs" is an unrelated Warsaw-based technology organization with a GitHub presence (github.com/ninefiveslabs) and website (ninefiveslabs.io). This creates potential brand confusion in technical search results.

**Single-frequency-band limitation:** Both current products operate to 6 GHz (per model numbers POE-ATTEN-6G, POE-SWITCH-6G). Many 5G and satellite applications require testing above 6 GHz (mmWave bands at 24–40 GHz). Competitors Keysight and Vaunix offer instruments operating to 26.5 GHz and 40 GHz respectively.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | USD 3.99B in 2025, projected USD 8.48B by 2034 at 8.74% CAGR (Precedence Research, 2025) |
| SAM | No public data found |
| Traction | Two shipping products with published datasheets and reference manuals (ninefives.com); no user counts, revenue, or press coverage found |
| Revenue Signal | No public data found |
| Founders | Andrew Kurtz: MIT, SpaceX (payloads/Falcon 9), Aurora Flight Sciences staff mech. engineer. Noah Levy: Cornell, SpaceX Senior RF Engineer (Satellites/HW Dev) |
| Competitors | Mini-Circuits (no external funding, ~$111M–$400M rev est., broad RF catalog); Vaunix (self-funded, revenue unknown, 60+ USB instruments to 40 GHz); Adaura Technologies (private, funding/revenue unknown, multi-channel attenuators to 8 GHz); Keysight (public NYSE:KEYS, ~$5.4B rev, full T&M platform to 50+ GHz) |
| Moat Signals | No public data found |
| Risk Factors | Narrow 2-product line vs. broad-catalog incumbents, incumbent firmware-update response risk, 6 GHz frequency ceiling vs. mmWave demand |
| Founder Reach | Andrew Kurtz: Twitter not found, LinkedIn linkedin.com/in/andrew-e-kurtz. Noah Levy: Twitter not found, LinkedIn linkedin.com/in/noahmslevy. GitHub: none found for either founder |
| Distribution Signals | No public data found |
| Emails | No public data found |
