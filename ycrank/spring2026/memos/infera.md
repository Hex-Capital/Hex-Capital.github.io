# Infera

> Control lab instruments with natural language.

| Field | Value |
|-------|-------|
| Website | https://www.infera.bio |
| YC Page | https://www.ycombinator.com/companies/infera |
| Batch | Spring 2026 (YC P26, per YC profile) |
| Industry | Healthcare / Healthcare -> Industrial Bio |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, SaaS, B2B, Biotech, Automation |
| YC Partner | Nicolas Dessaigne (YC profile) |
| Emails | hello@infera.bio (infera.bio website) |

## The Idea

- **Problem:** Wet-lab researchers and automation engineers must hand-translate protocols (PDFs, SOPs, plain-English instructions) into vendor-specific scripts for instruments such as Hamilton and Opentrons, leaving expensive equipment idle (infera.bio).
- **Approach:** A compiler-style pipeline parses natural-language protocols, surfaces missing parameters (time/temperature/volumes) for human review, simulates the execution graph against safety and equipment constraints, then exports vendor-specific scripts and ELN/LIMS entries (infera.bio).
- **Differentiation:** Zeon Systems (YC X25) and Medra both translate plain-English experiments into robotic execution, but Zeon ships physical robotic arms and Medra ships full autonomous labs (Bloomberg, Dec 2025), whereas Infera positions as a software "operating system / compiler" that drives equipment the lab already owns (infera.bio).
- **Business Model:** No pricing page visible; site offers an "early access pilot program" only (infera.bio). [Inferred]: B2B SaaS to academic and industry labs, likely seat- or instrument-based, given the targeting of automation engineers and lab directors.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; broader lab automation market context is in adjacent reports but not cited by the company.
- **GTM / Distribution:** [Inferred]: Direct pilots with research labs sourced via founders' Harvard/Caltech/Fred Hutch/PNNL networks, given the early-access language on the site and founders' institutional history (infera.bio; YC profile).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond claimed multi-vendor integration with Hamilton and Opentrons (infera.bio).
- **Future moat:** [Inferred]: Accumulated library of validated protocol-to-instrument mappings plus institution-specific inventory/SOP knowledge could create switching costs; unproven now because the product is in early access with no disclosed customer count (infera.bio).
- **Market structure:** [Inferred]: Vendor-neutral orchestration is structurally hard for instrument OEMs (Hamilton, Opentrons) to replicate because each OEM's incentive is to lock workflows into its own ecosystem, not to compile to competitors' machines.
- **Commoditization risk:** Multiple well-funded entrants (Medra $63M total per Bloomberg Dec 2025; Zeon Systems backed by YC, A* Capital per Tremendous blog Aug 2025) are pursuing the same natural-language-to-lab-execution category.

## Market & Traction

- **Traction signals:**
  - Y Combinator Spring 2026 (P26) batch participation (YC profile).
  - Early-access pilot program open; no customer count, revenue, or user count disclosed (infera.bio).
  - No Product Hunt launch found for infera.bio in search results.
  - No company Twitter/X, LinkedIn, or Discord follower data retrievable via search.
  - No press coverage of Infera (infera.bio) found; results returned unrelated companies (Infera AI Toronto on Tracxn; Infera Health on PitchBook).
- **Competitors:**
  - Medra ($63M total raised including $52M Series A led by Human Capital, Dec 2025; revenue unknown; Bloomberg, BusinessWire Dec 2025): ships full autonomous physical lab with robotics + AI, deployed at Genentech and Addition Therapeutics, vs. Infera's software-only compiler for existing equipment.
  - Zeon Systems (YC X25, amount undisclosed; revenue unknown; YC launch page, Tremendous Aug 2025): plain-English-to-robotic-arm execution with deployments at Stanford and UCSF, vs. Infera's vendor-agnostic orchestration without proprietary hardware.
  - Emerald Cloud Lab ($152M total raised per PitchBook profile; revenue unknown): operates a remote cloud-based wet lab service that customers send experiments to, vs. Infera enabling execution on customer-owned equipment.
  - Strateos (~$90M total raised, $56M Series B 2021 led by DCVC and Lux Capital; revenue unknown): in-house cloud lab platform for drug discovery, vs. Infera as a software layer over the customer's own instruments.
- **Why now:** [Inferred]: LLMs reached the threshold of reliable structured-output generation in 2024–2025, enabling parsing of unstructured protocol PDFs into validated machine instructions — the same catalyst named by adjacent entrants Medra and Zeon launching in 2024–2025 (Bloomberg Dec 2025; Tremendous Aug 2025).

## Founders & Team

- **Chloe Sow (Co-Founder):**
  - Background: MechE + CS at Harvard; built research software and medical devices at Harvard Medical School, Brigham and Women's, Fred Hutch, and PNNL (YC profile).
  - Twitter/X: No public account found via search.
  - LinkedIn: No public profile surfaced in search results matching this founder; count not retrievable.
  - GitHub: No public repos found via search.
- **Troy Zhang (Founder):**
  - Background: Dual BS in Political Science and Computation and Neural Systems at Caltech; Richard H. Cox Undergraduate Research Fellow, Caltech Division of Chemistry and Chemical Engineering (YC profile; RocketReach; Caltech CCE LinkedIn listing); described on YC as a fellow in a Nobel Prize–winning lab (YC profile).
  - Twitter/X: No public account found via search.
  - LinkedIn: "Caltech Division of Chemistry and Chemical Engineering" (linkedin.com/in/troyzh, via search snippet); count not retrievable.
  - GitHub: @troyzhangchu listed (github.com via search snippet); no notable repo or star count retrievable.
- **Co-founder relationship:** No public data on co-founder history connecting Sow (Harvard) and Zhang (Caltech) prior to Infera.
- **Founder-market fit:** Both founders have worked inside academic wet-lab and instrumentation environments (Harvard Medical School, Brigham, Fred Hutch, PNNL for Sow; Caltech chemistry research lab for Zhang), giving direct exposure to the protocol-to-instrument translation problem Infera targets (YC profile); no advisors or investors disclosed beyond Y Combinator (infera.bio; YC profile).

## Key Risks

- **Well-funded direct competition:** Medra closed a $52M Series A in Dec 2025 with Genentech as a deployed partner (Bloomberg, BusinessWire Dec 2025) and Zeon Systems is also addressing natural-language lab automation with Stanford and UCSF deployments (Tremendous, Aug 2025), creating a category race in which Infera enters with a 2-person team and no disclosed customers (YC profile).
- **Technical feasibility for safety-critical execution:** Translating ambiguous natural-language protocols into validated, instrument-ready runs requires correctly resolving missing parameters and avoiding spatial/timing violations; the company claims protocol-error detection in "under 90 seconds" but no third-party validation, accuracy benchmarks, or pilot results are public (infera.bio).
- **Vendor integration breadth:** The platform must maintain working drivers across heterogeneous instruments (Hamilton, Opentrons, ELNs, LIMS) (infera.bio); each new vendor requires engineering investment, and OEMs may restrict third-party orchestration via API or warranty terms — no mitigation disclosed.
- **Name collision and search dilution:** Multiple unrelated entities operate as "Infera" (Infera AI Toronto on Tracxn; Infera Health medtech compliance on PitchBook; infera.org), which complicates inbound search discovery and press attribution; no mitigation disclosed.
- **Adoption friction in regulated labs:** Industrial and clinical biotech workflows require audit trails and validation that customer IT/QA teams must approve; pricing, security posture, and compliance certifications are not disclosed on the website (infera.bio).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | YC Spring 2026 P26 batch (YC profile); early-access pilot program open (infera.bio); no customer count, revenue, or social-follower data found |
| Revenue Signal | No public data found (no pricing page on infera.bio) |
| Founders | Chloe Sow (Co-Founder): Harvard MechE+CS; built research software/medical devices at Harvard Medical School, Brigham, Fred Hutch, PNNL. Troy Zhang (Founder): Caltech dual BS Poli Sci + Computation and Neural Systems; Richard H. Cox Research Fellow. |
| Competitors | Medra ($63M total, $52M Series A Dec 2025, revenue unknown; full autonomous AI lab with Genentech deployment). Zeon Systems (YC X25, amount undisclosed, revenue unknown; robotic-arm execution at Stanford/UCSF). Emerald Cloud Lab ($152M total per PitchBook, revenue unknown; remote cloud lab). Strateos (~$90M total, $56M Series B 2021, revenue unknown; in-house cloud lab platform). |
| Moat Signals | No public data found |
| Risk Factors | Well-funded direct competitors (Medra, Zeon), unproven technical accuracy at safety-critical scale, vendor integration breadth dependency |
| Founder Reach | Chloe Sow: Twitter no account found, LinkedIn count not retrievable, GitHub none found. Troy Zhang: Twitter no account found, LinkedIn @troyzh count not retrievable, GitHub @troyzhangchu stars not retrievable. |
| Distribution Signals | No public data found |
| Emails | hello@infera.bio (infera.bio) |

Sources:
- [Infera company website](https://www.infera.bio/)
- [Infera YC profile](https://www.ycombinator.com/companies/infera)
- [Medra Series A — BusinessWire](https://www.businesswire.com/news/home/20251211748411/en/Medra-Raises-$52-Million-Series-A-to-Build-Physical-AI-Scientists)
- [Medra Series A — Bloomberg](https://www.bloomberg.com/news/articles/2025-12-11/medra-raises-52-million-to-speed-drug-discovery-with-ai-robots)
- [Zeon Systems YC profile](https://www.ycombinator.com/companies/zeon-systems)
- [Zeon Systems investment writeup — Tremendous](https://tremendous.blog/2025/08/04/meet-my-latest-investment-zeon-systems/)
- [Emerald Cloud Lab PitchBook profile](https://pitchbook.com/profiles/company/61618-24)
- [Troy Zhang Caltech CCE LinkedIn listing](https://www.linkedin.com/in/troyzh/)
- [Troy Zhang Caltech RocketReach record](https://rocketreach.co/troy-zhang-email_795616695)
- [troyzhangchu on GitHub](https://github.com/troyzhangchu)
