# Prototyping.io

> Autonomous manufacturing for mechanical parts

| Field | Value |
|-------|-------|
| Website | https://www.prototyping.io |
| YC Page | https://www.ycombinator.com/companies/prototypingio |
| Batch | Spring 2026 |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 2 |
| Location | Sunnyvale, CA, USA |
| Tags | Hardware, Manufacturing, Automation, AI |
| YC Partner | Nicolas Dessaigne (YC company page) |
| Emails | No public data found |

## The Idea

- **Problem:** Hardware engineers needing CNC-machined, sheet metal, 3D-printed, injection-molded, extrusion, and die-cast prototypes face slow, expensive sourcing via traditional shops or marketplaces (prototyping.io website).
- **Approach:** AI system that ingests CAD, performs manufacturability analysis, then automates production planning, machine program generation, and quality control across multiple processes with quoted ±0.0002" minimum tolerances and no MOQ (prototyping.io website).
- **Differentiation:** vs. Xometry/Fictiv (managed marketplace of 250-300+ vendor partners per Fictiv/Protolabs Network pages, RapidDirect 2025) and Protolabs (in-house factories, founded 1999, Maple Plain MN, Pernas Research) — [Inferred]: Prototyping.io is positioning as AI-native end-to-end automation of design intent → machine program rather than a quoting/marketplace layer (prototyping.io website).
- **Business Model:** No pricing disclosed; site is gated as "early access" waitlist (prototyping.io website); [Inferred]: per-part consumption pricing comparable to Xometry/Protolabs given parts-on-demand model.
- **TAM/SAM:** Global Online CNC Machining Service Market est. $1.77B in 2026, $3.56B by 2035, 7.4% CAGR (Business Research Insights, 2025); broader CNC Machine market $81B–$109B in 2025 (Fortune Business Insights, SkyQuest, 2025).
- **GTM / Distribution:** Waitlist signup on prototyping.io (website); [Inferred]: direct-to-engineer self-serve uploader (CAD → instant quote) consistent with Xometry/Fictiv playbook, supported by YC SUS network introductions given Spring 2026 batch membership (YC page).

## Defensibility

- **Moat today:** No defensibility signals found in public sources; product is in early-access waitlist (prototyping.io website).
- **Future moat:** [Inferred]: Proprietary dataset of CAD → manufacturability outcomes and machine program traces, building a feedback loop that improves auto-DFM and toolpath generation as throughput grows; unproven now because no order volume is disclosed.
- **Market structure:** [Inferred]: Incumbent marketplaces (Xometry, Fictiv) rely on third-party vendor networks (250–300+ partners per Protolabs Network, Fictiv pages, RapidDirect 2025) — fully automating machine-program generation cannibalizes the human estimator/CAM-programmer labor that anchors their unit economics, creating channel conflict; Protolabs owns in-house fleet but is built around its proprietary quoting stack (Pernas Research).
- **Commoditization risk:** Factorem already markets itself as "AI-native full-stack" combining manufacturing, fulfillment, and logistics (Factorem.co), and Xometry's AI quoting engine is in production (RapidDirect 2025) — the AI-quoting layer is replicable; defensibility hinges on closing the loop to machine programs.

## Market & Traction

- **Traction signals:**
  - Y Combinator backing, Spring 2026 batch (YC company page).
  - Twitter/X: @prototyping_io exists (YC company page); follower count not retrievable.
  - LinkedIn: linkedin.com/company/prototyping-io exists (YC company page); follower count not retrievable.
  - Website in "early access" waitlist state; no customer logos, no public revenue, no press coverage found (prototyping.io website; web search May 2026).
  - No Product Hunt launch found; search returned only unrelated "Proto.io" (Product Hunt search, May 2026).
- **Competitors:**
  - Xometry ($687M total revenue FY2025, $630M marketplace +30% YoY, NASDAQ:XMTR; VoxelMatters, 2025): public AI-powered marketplace with 250+ vendor network — broader scale, but human-mediated quoting and fulfillment.
  - Protolabs ($533M revenue 2026, 12.1% YoY growth, 44.5% gross margin; PitchGrade 2026): in-house automated factories in US/EU — owns fleet but legacy quoting stack predates LLM-era DFM.
  - Fictiv ($200M raised, >$300M post-money valuation, agreement to join MISUMI; web search 2025): global multi-region managed marketplace, 300+ manufacturers — service-led with project management overlay.
  - Factorem (revenue unknown; Factorem.co 2025): self-described "AI-native full-stack" on-demand manufacturer — closest direct positioning to Prototyping.io's stated thesis.
  - Geomiq, RapidDirect, MakerVerse, Hubs/Protolabs Network (revenue unknown; RapidDirect 2025, MakerVerse 2026): regional/vertical marketplaces.
- **Why now:** [Inferred]: LLM/vision model capability now sufficient to parse CAD geometry and generate manufacturability feedback at quoting speed — Xometry shipped AI-driven instant quoting (RapidDirect 2025) and Factorem launched as AI-native (Factorem.co 2025), indicating the technical threshold was crossed in the prior 12–24 months.

## Founders & Team

- **Revanth Bodepudi (Founder & CEO):**
  - Background: B.Tech from IIT Bhubaneswar (IITBBS Alumni Network); MS in Aerospace Engineering, UT Austin, May 2019, advised by Prof. Kenneth M. Liechti, NSF MRSEC graduate research assistant, thesis on Germanium Nanowire Membrane and Aerogel (UT Austin AE news 2019; UT Austin thesis repository); joined Schlumberger in Houston post-graduation (UT Austin news 2019).
  - Twitter/X: No public account found.
  - LinkedIn: linkedin.com/in/revanth279 (search result); headline not retrievable.
  - GitHub: No public repos confirmed under this name (search result).
- **Prerit Oberai (Cofounder & CTO):**
  - Background: BS Electrical & Computer Engineering and MS Electrical Engineering, University of Colorado Boulder, Presidents Leadership Class (CU Boulder PLC page); prior roles include containerized datacenter networking research at CU Boulder, embedded systems and Flutter mobile development at POSSIBLE Mobile, and NASA satellite mission-operations tooling (getprog.ai profile).
  - Twitter/X: No public account found.
  - LinkedIn: linkedin.com/in/preritoberai — "Prototyping.io" (LinkedIn search result).
  - GitHub: @PreritO (github.com/PreritO); top repo/star count not retrievable from search.
- **Co-founder relationship:** No public data on co-founder history; their educational tracks (IIT Bhubaneswar/UT Austin vs. CU Boulder) and prior employers (Schlumberger vs. POSSIBLE Mobile/NASA tooling) do not overlap in retrieved sources.
- **Founder-market fit:** CEO has aerospace-mechanical research and oilfield-services engineering background (UT Austin 2019; Schlumberger), and CTO has shipped embedded, mobile, and satellite mission-ops software (getprog.ai) — pairing aligns with the mechanical-domain + AI/automation thesis; no advisors, board members, or non-YC investors found in public sources.

## Key Risks

- **Incumbent AI-quoting parity:** Xometry has already deployed AI-powered real-time pricing/DFM (RapidDirect 2025) and Factorem markets an AI-native full-stack (Factorem.co 2025), so the "AI-driven manufacturing" positioning is not unique; mitigation requires Prototyping.io to extend automation past quoting into machine program generation (claimed on prototyping.io website but unverified).
- **Capacity / fulfillment risk:** Site lists CNC, sheet metal, 3D printing, injection molding, extrusion, die casting with 40+ materials (prototyping.io website) but team is 2 people (YC page) with no disclosed factory partners or owned equipment — execution depends on yet-unannounced supplier network or contract shops; no public data on signed capacity.
- **Capital intensity vs. funded competitors:** Fictiv has raised $200M and is joining MISUMI (web search 2025), Protolabs operates owned in-house factories (Pernas Research), and Xometry holds $219M cash + $250M convertible notes (VoxelMatters 2025) — competitive working capital and vendor onboarding requirements may outpace a YC pre-seed round.
- **Technical feasibility (auto-CAM):** Automated generation of production-grade CNC machine programs across diverse geometries and processes (CNC + sheet metal + injection molding + die casting) is not a solved problem in public literature; no benchmark, demo, or customer-validated tolerance/yield data is published (prototyping.io website shows ±0.0002" claim without third-party validation).
- **Name disambiguation:** "Proto.io" is an unrelated UI prototyping product with active Product Hunt presence (Product Hunt) — risks SEO/brand collision and confounds traction tracking.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Online CNC Machining Service Market $1.77B (2026), $3.56B by 2035, 7.4% CAGR (Business Research Insights, 2025); broader CNC Machine market $81B–$109B in 2025 (Fortune Business Insights / SkyQuest, 2025) |
| SAM | No public data found |
| Traction | YC Spring 2026 batch (YC page); early-access waitlist live (prototyping.io website, May 2026); no users, revenue, or press disclosed |
| Revenue Signal | No public data found (no pricing page; waitlist gate) |
| Founders | Revanth Bodepudi (CEO): IIT Bhubaneswar; MS Aerospace UT Austin 2019; ex-Schlumberger Houston. Prerit Oberai (CTO): BS ECE + MS EE CU Boulder; ex-POSSIBLE Mobile, NASA satellite mission-ops tooling. |
| Competitors | Xometry ($687M FY2025 revenue, NASDAQ:XMTR, marketplace + AI quoting); Protolabs ($533M revenue 2026, in-house factories); Fictiv ($200M raised, $300M+ post-money, joining MISUMI, managed marketplace); Factorem (revenue unknown, AI-native full-stack); Geomiq/RapidDirect/MakerVerse (revenue unknown, regional marketplaces) |
| Moat Signals | No public data found |
| Risk Factors | Incumbent AI-quoting parity, fulfillment capacity unproven, auto-CAM technical feasibility |
| Founder Reach | Bodepudi: Twitter not found, LinkedIn /in/revanth279, GitHub not confirmed. Oberai: Twitter not found, LinkedIn /in/preritoberai, GitHub @PreritO (stars not retrievable) |
| Distribution Signals | Waitlist on prototyping.io (May 2026); @prototyping_io on X and linkedin.com/company/prototyping-io exist (YC page, follower counts not retrievable); no Product Hunt launch found |
| Emails | No public data found |

Sources:
- [Prototyping.io – Y Combinator](https://www.ycombinator.com/companies/prototypingio)
- [Prototyping.io website](https://www.prototyping.io)
- [Prerit Oberai – LinkedIn](https://www.linkedin.com/in/preritoberai/)
- [Prerit Oberai – CU Boulder PLC](https://www.colorado.edu/plc/prerit-oberai)
- [PreritO – GitHub](https://github.com/PreritO)
- [Revanth Bodepudi – UT Austin MRSEC](https://mrsec.utexas.edu/profiles/revanth-bodepudi)
- [Class of 2019 – UT Austin Aerospace Engineering](https://www.ae.utexas.edu/news/congratulations-class-of-2019)
- [Bodepudi Revanth – IIT Bhubaneswar Alumni](https://alumni.iitbbs.ac.in/p/bodepudi-revanth.dz)
- [Xometry FY2025 results – VoxelMatters](https://www.voxelmatters.com/xometry-reports-record-q4-and-strong-fy-2025-results/)
- [Xometry – Pernas Research](https://pernasresearch.com/research-vault/xmtr-xometry-the-future-digital-manufacturing-leviathan/)
- [Protolabs – PitchGrade 2026](https://pitchgrade.com/companies/proto-labs-inc)
- [Top 13 Xometry Alternatives – RapidDirect 2025](https://www.rapiddirect.com/blog/top-13-xometry-competitors/)
- [Fictiv – Protolabs Competitor](https://www.fictiv.com/protolabs-competitor-alternative)
- [Online CNC Machining Service Market – Business Research Insights](https://www.businessresearchinsights.com/market-reports/online-cnc-machining-service-market-113348)
- [CNC Machine Market – Fortune Business Insights](https://www.fortunebusinessinsights.com/industry-reports/computer-numerical-controls-cnc-machine-tools-market-101707)
