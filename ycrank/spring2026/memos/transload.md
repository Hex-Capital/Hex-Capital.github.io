# transload

> Measure freight items with security cameras

| Field | Value |
|-------|-------|
| Website | https://www.transload.io |
| YC Page | https://www.ycombinator.com/companies/transload |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Supply Chain and Logistics |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Computer Vision, Logistics, Supply Chain |
| YC Partner | David Lieb |
| Emails | No public data found |

## The Idea

- **Problem:** Logistics operators (LTL carriers, 3PLs, freight forwarders) lose revenue because ~15% of shipments are larger than what the sender declared, leaving rebillings and trailer utilization on the table (company description, YC page).
- **Approach:** Computer-vision pipeline that ingests video from a warehouse's existing CCTV/security cameras to capture true dimensions of pallets, couches, tires, etc., as they move through the dock — no dedicated dimensioner hardware required (company website tagline "Computer vision for the loading dock"; YC description).
- **Differentiation:** Dedicated hardware vendors (vMeasure, FreightSnap FS 5000, Cubiscan, VITRONIC, Vimaan PalletSCAN 3D) require purpose-built drive-through scanners or fixed-mount sensors (vMeasure pallet dimensioner page; FreightSnap product page; Vimaan press release), whereas transload reuses installed CCTV [Inferred]: removing capex and integration time.
- **Business Model:** No pricing page is reachable — site renders only a "0% BOOTING" animation (WebFetch, May 2026); [Inferred]: per-site SaaS subscription, anchored to the "$50k per site per month" value claim in the YC description.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** [Inferred]: Direct sales to LTL carriers and 3PLs with multi-site warehouse footprints, given the "per site per month" rebilling framing in the YC description and SF/US regional listing.

## Defensibility

- **Moat today:** No defensibility signals found in public sources (website not yet rendering content; no patents, customer logos, or published benchmarks located).
- **Future moat:** [Inferred]: Proprietary training data of palletized freight under varied warehouse lighting/occlusion conditions could compound with each customer deployment, but unproven without disclosed model performance or customer count.
- **Market structure:** [Inferred]: Incumbent hardware dimensioner vendors (FreightSnap, vMeasure, Cubiscan) sell capex devices and would cannibalize hardware revenue by shifting to camera-only software; a Loadsmart-style platform could integrate equivalent vision via its 2023 NavTrac acquisition (FreightWaves, Sep 2023), limiting the structural barrier.
- **Commoditization risk:** Computer-vision dimensioning from RGB/depth video is an active vendor category (vMeasure, VITRONIC AI stackability, NavTrac, Vimaan), so other CV teams could build equivalent CCTV-fed pipelines (vendor pages cited above).

## Market & Traction

- **Traction signals:**
  - Customer testimonial: "15% of shipments turn out to be bigger than what the sender claimed … worth ~$50k per site per month in rebillings and improved trailer utilization" (YC company description, 2026).
  - Website at https://www.transload.io returns a "0% BOOTING" placeholder with no public content (WebFetch, May 2026).
  - No Product Hunt, press, Twitter/X, LinkedIn follower, Discord, or job-posting data located in search.
- **Competitors:**
  - FreightSnap (revenue unknown, funding not disclosed on Crunchbase result; founded 2013): sells FS 5000 fixed-position infrared pallet dimensioner hardware (Crunchbase listing; FreightSnap.com).
  - vMeasure / Vimaan (revenue unknown, funding unknown from this search): AI pallet dimensioner and drive-through PalletSCAN 3D hardware solutions (vmeasure.ai; Vimaan press release).
  - Cubiscan (revenue unknown): legacy LTL-carrier pallet dimensioner hardware (cubiscan.com).
  - Loadsmart / NavTrac (Loadsmart raised >$200M historical; NavTrac acquired Sep 2023, terms undisclosed): camera-based yard/terminal vision platform now bundled with Opendock dock scheduling (FreightWaves, Sep 2023; DC Velocity, Sep 2023).
  - VITRONIC (revenue unknown, private German industrial vendor): AI-powered pallet dimensioning with stackability analysis (vitronic.com).
- **Why now:** [Inferred]: Improvements in monocular/multi-view 3D reconstruction and edge GPU inference have made dimensional measurement from standard CCTV feeds tractable, and Loadsmart's 2023 NavTrac acquisition signals carrier appetite for camera-based ops vision (FreightWaves, Sep 2023).

## Founders & Team

- **Julius Scheel (Founder & CEO):**
  - Background: Led a 9-person fundraising team at age 17 raising €300k in donations; scaled avi medical's virtual clinic to seven-figure ARR; McKinsey Fellow (Zurich office) with early promotion; distinction degrees from TU Munich and London Business School; researched causal ML for sequences at Cambridge (YC bio; LinkedIn via search snippet).
  - Twitter/X: No public account found.
  - LinkedIn: "McKinsey & Company" headline (linkedin.com/in/juliusscheel, via search snippet).
  - GitHub: No public repos found.
- **Nils Börner (Founder, CTO AI):**
  - Background: Five years building computer-vision systems across deep-tech startups and academia; co-authored IEEE Transactions on Medical Imaging paper; top-5% MSc Computer Science, TU Munich; double-degree MSc in Data Science, University of Queensland, with Dean's Commendation (YC bio).
  - Twitter/X: No public account found.
  - LinkedIn: No public profile surfaced in search.
  - GitHub: No public repos found.
- **Jago Wahl-Schwentker (Founder, CTO Engineering):**
  - Background: First software engineer at Veli, building AI emergency alerting from sensor data for care homes and a Bluetooth localization product that doubled ARR; Computer Science at TU Munich (YC bio; LinkedIn via search snippet).
  - Twitter/X: No public account found.
  - LinkedIn: "Software Engineer – veli" (linkedin.com/in/jagowahl, via search snippet).
  - GitHub: No public repos found.
- **Co-founder relationship:** All three founders studied at Technical University of Munich (YC bios).
- **Founder-market fit:** Börner brings published computer-vision/deep-learning credentials, Wahl-Schwentker brings shipped sensor-data ML product experience at Veli, and Scheel brings commercial scaling experience from avi medical and McKinsey (YC bios; LinkedIn snippets); no investors or advisors publicly disclosed beyond Y Combinator Spring 2026.

## Key Risks

- **Technical feasibility from CCTV feeds:** Measuring pallet dimensions accurately from existing warehouse security cameras (variable mounting, lighting, occlusion) is materially harder than from dedicated drive-through rigs used by vMeasure and Vimaan (vendor product pages); no public accuracy benchmarks have been disclosed by transload, and no mitigation is published.
- **Substitution by incumbent / adjacent vision platforms:** Loadsmart already owns NavTrac's camera-vision stack and distributes Opendock to ~110,000 carriers and ~3,000 warehouses (FreightWaves / Loadsmart blog, Sep 2023), giving a direct distribution path to add dimensioning; no mitigation disclosed.
- **Hardware-vendor downmarket move:** FreightSnap, vMeasure/Vimaan, and VITRONIC sell software-plus-hardware bundles and could ship a CCTV-only SKU (vendor pages cited); no proprietary IP from transload is publicly disclosed.
- **Name disambiguation / web presence:** Public website renders only a placeholder animation (WebFetch, May 2026) and the term "transload" is a common logistics noun (e.g., transloads.co, financialmodelslab), which limits inbound and complicates buyer discovery.
- **Regulatory measurement standards:** LTL rebilling against shippers based on dimensions typically must satisfy NTEP / legal-for-trade certification for hardware dimensioners ([Inferred]: based on industry standards referenced on Cubiscan and FreightSnap pages); a camera-only system's path to certification is not publicly addressed by transload.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Customer-claimed value $50k/site/month in rebillings + trailer utilization; 15% of shipments larger than declared (YC company description, 2026); no users/revenue/press located |
| Revenue Signal | No public data found (website not rendering content as of WebFetch, May 2026) |
| Founders | Julius Scheel (CEO): ex-McKinsey Fellow, scaled avi medical to 7-figure ARR, TUM + LBS. Nils Börner (CTO AI): IEEE T-MI co-author, TUM MSc top 5%, UQ MSc Data Science. Jago Wahl-Schwentker (CTO Eng): first engineer at Veli, TUM CS. |
| Competitors | FreightSnap (funding undisclosed in Crunchbase snippet, revenue unknown, infrared pallet dimensioner hardware); vMeasure/Vimaan (funding unknown, revenue unknown, drive-through 3D pallet dimensioner); Cubiscan (revenue unknown, legacy LTL dimensioner hardware); Loadsmart/NavTrac (Loadsmart historically raised >$200M, NavTrac acquired Sep 2023 terms undisclosed, camera-based yard vision tied to Opendock distribution); VITRONIC (revenue unknown, AI pallet dimensioner with stackability) |
| Moat Signals | No public data found |
| Risk Factors | Technical feasibility from non-purpose-built CCTV, substitution by Loadsmart/NavTrac, hardware-vendor downmarket move |
| Founder Reach | Julius Scheel: Twitter not found, LinkedIn present (count not retrievable), GitHub not found. Nils Börner: Twitter not found, LinkedIn not surfaced, GitHub not found. Jago Wahl-Schwentker: Twitter not found, LinkedIn present (count not retrievable), GitHub not found. |
| Distribution Signals | No public data found |
| Emails | No public data found |

Sources:
- [transload — Y Combinator](https://www.ycombinator.com/companies/transload)
- [transload.io](https://www.transload.io)
- [Julius Scheel — LinkedIn](https://www.linkedin.com/in/juliusscheel/)
- [Jago Wahl-Schwentker — LinkedIn](https://de.linkedin.com/in/jagowahl)
- [Loadsmart acquires NavTrac — FreightWaves](https://www.freightwaves.com/news/loadsmart-acquires-navtrac-to-bring-computer-vision-to-yard-management)
- [Loadsmart acquires NavTrac — Loadsmart blog](https://blog.loadsmart.com/loadsmart-acquires-computer-vision-startup-navtrac)
- [vMeasure Pallet Dimensioner](https://vmeasure.ai/pallet-dimensioner/)
- [FreightSnap FS 5000](https://freightsnap.com/fs-5000-product/)
- [Cubiscan LTL Carrier Pallet Dimensioners](https://cubiscan.com/ltl-carrier/)
- [Vimaan PalletSCAN 3D](https://vimaan.ai/resources/press-release/drive-through-pallet-dimensioning-solution-for-warehouses-and-distribution-centers/)
- [VITRONIC pallet dimensioning](https://www.vitronic.com/en-us/pallet-dimensioning-with-ai-powered-stackability-analysis)
- [FreightSnap — Crunchbase](https://www.crunchbase.com/organization/freightsnap)
