# Surtr Defense Systems

> The open operating system for counter-UAS

| Field | Value |
|-------|-------|
| Website | https://surtrdefense.com |
| YC Page | https://www.ycombinator.com/companies/surtr-defense-systems |
| Batch | Spring 2026 (YC page) |
| Industry | Industrials / Industrials -> Defense |
| Team Size | 2 |
| Location | Los Angeles, CA, USA |
| Tags | Computer Vision |
| YC Partner | Andrew Miklas (YC page) |
| Emails | No public data found |

## The Idea

**Problem:** Counter-UAS (C-UAS) operators run a fragmented stack: separate radars, RF detectors, EO/IR cameras, and acoustic arrays, each with its own console. Per WebSearch results, current production C-UAS deployments are dominated by closed, vendor-specific systems (Anduril, BlueHalo, Dedrone, DroneShield, D-Fend, Fortem, Rafael, L3Harris) (GlobeNewswire "Counter-UAS Solutions Company Radar Report 2025"). [Inferred]: Operators today switch between OEM consoles or buy single-vendor stacks because no neutral fusion layer exists.

**Approach:** ParallaxOS, a software-only operating system that ingests data from any radar, RF sensor, EO/IR camera, or acoustic array and fuses tracks into a single common operating picture, with AI threat classification and engagement recommendations subject to a human-in-the-loop authorization (YC page; WebSearch snippet citing surtrdefense.com). Out-of-the-box integrations cited: SAPIENT (NATO AEDP-4869), Link 16, Cursor on Target, and NATS (WebSearch snippet citing surtrdefense.com). Stated latency: "millisecond" multi-sensor track correlation (WebSearch snippet citing surtrdefense.com).

**Differentiation:** Marketed as the "open" OS, hardware-agnostic across sensors and effectors, vs. vertically integrated platforms from Anduril (Lattice), Dedrone, Fortem, and D-Fend (WebSearch results above). [Inferred]: Differentiation hinges on neutrality across sensor/effector OEMs and adherence to NATO/DoD interop standards (SAPIENT, Link 16, CoT) rather than proprietary protocols.

**Business Model:** No pricing page accessible (surtrdefense.com returned HTTP 403 on WebFetch). [Inferred]: Most likely monetization is enterprise/government software licensing (per-site or per-operator) plus integration services, given the C-UAS buyer set (DoD, federal LE, critical infrastructure) and the OS framing.

**TAM/SAM:** Global C-UAS market estimates: $5.12B (2025) growing to $27.98B by 2032 (Yahoo Finance summarizing market report, via search snippet); alternative estimate $3.8B (2025) → $27.4B (2034) at 25.2% CAGR (Marketintelo, via search snippet). DroneShield-cited "global addressable C-UAS market" pegged at USD 63M historically per unmannedairspace.info (via search snippet) — figure refers to a narrower addressable segment. No SAM-specific estimate for C-UAS command-and-control software found.

**GTM / Distribution:** No public GTM data found. [Inferred]: Most likely path is direct sales to DoD program offices and prime integrators, leveraging founders' Shield AI/Anduril relationships, plus pursuit of SBIR/STRATFI and PEO Missiles & Space C-UAS programs (the same office that awarded Anduril its C-UAS Fire Control Solution win in Oct 2025 per WebSearch).

## Defensibility

No defensibility signals (patents, customer contracts, proprietary datasets) found in public sources. [Inferred]: Potential moats include (a) accumulated multi-sensor fusion training data from deployments, (b) certified integrations against classified/ITAR-controlled radios and effectors, and (c) DoD authority-to-operate (ATO) accreditations, none of which are visible today.

**Market structure:** [Inferred]: The structural barrier facing incumbents is sales-channel and business-model cannibalization — Anduril (Lattice), Dedrone, Fortem, and D-Fend sell integrated hardware+software bundles; a credible "open" OS endorsement would commoditize their proprietary sensor margins. Adopting an open OS therefore conflicts with their hardware revenue model. This is unproven for Surtr at this stage.

**Commoditization risk:** [Inferred]: The fusion-layer concept can be replicated by well-funded primes (Anduril Lattice already markets cross-sensor fusion; Palantir MetaConstellation and similar C2 layers compete adjacent). Build cost is software-heavy and addressable by 5–20-engineer teams; the durable barrier will be integrations, certifications, and program-of-record placement, not raw code.

## Market & Traction

**1. Traction signals:**
- Funding/launch: Listed in YC Spring 2026 batch (YC page). No funding announcement beyond standard YC deal found.
- Press coverage: No dedicated press coverage found beyond YC directory listings (WebSearch).
- Product Hunt: No public data found.
- Social media: Company Twitter/X — No public account found. LinkedIn company page — No public data found.
- Community (Discord/Slack): No public data found.
- Customers / LOIs / partnerships: No public data found.
- Hiring: Hiring flag = False (company_data).
- Web traffic / app installs: Not applicable (enterprise software); no public data found.

**2. Competitive landscape:**
- **Anduril Industries** — Lattice OS provides integrated C2 across Anduril-owned and partner sensors/effectors; won U.S. Army PEO Missiles & Space C-UAS Fire Control Solution Oct 2025 (WebSearch via Yahoo Finance/MarketsandMarkets snippet). Funding: multi-billion; differentiator vs. Surtr: vertically integrated hardware+software, deep DoD program-of-record footprint.
- **Dedrone (Axon)** — Acquired by Axon Enterprise Oct 2024; raised $60.5M Series C/C-1 in 2021–2022 led by Axon (Wikipedia/Tracxn via search snippet). Revenue/ARR: unknown. Differentiator: RF-detection-focused; now part of public-safety platform; less hardware-agnostic.
- **Fortem Technologies** — Received $25M from Lockheed Martin (initial Series B tranche) Apr 2026; $18M 3-yr U.S. Army contract (Lockheed Martin newsroom, Apr 22, 2026, via search snippet). Revenue/ARR: unknown. Differentiator: radar + interceptor drone hardware; not an open OS.
- **D-Fend Solutions** — Israeli, EnforceAir RF takeover system; named in Gartner top-funded cyber electronic defense report (cuashub.com via search snippet); funding figure not retrieved. Differentiator: cyber/RF takeover, proprietary effector.
- **Epirus** — Raised $250M to scale directed-energy drone neutralization; Leonidas HPM integrated on Stryker via General Dynamics (WebSearch via Yahoo Finance/MarketsandMarkets snippet). Differentiator: effector (high-power microwave), not C2 fusion software.

**3. Why now:**
- [Inferred]: Three catalysts in the past 12–24 months: (a) sustained battlefield use of small UAS in Ukraine and the Red Sea has shifted U.S. DoD procurement toward fielded C-UAS systems (Oct 2025 PEO Missiles & Space award to Anduril; Apr 2026 Lockheed/Fortem deal — both per search snippets); (b) NATO adoption of SAPIENT (AEDP-4869) as the cross-vendor C-UAS data standard creates a defined integration target (WebSearch snippet citing surtrdefense.com); (c) OpenAI/Anduril Dec 2024 partnership signals AI-fusion as the de facto C-UAS interface layer (WebSearch via Yahoo Finance snippet).

## Founders & Team

**Anshul Ahluwalia** — Co-founder
- Education: MS and BS, Georgia Institute of Technology (WebSearch / LinkedIn snippet)
- Prior roles: Senior Robotics Engineer / Autonomy Engineer at Shield AI (planning & controls; forward-deployed engineer) (LinkedIn snippet, ZoomInfo snippet, Contrary Research). Prior ML internship at Skylark Labs (LinkedIn snippet).
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/anshul-ahluwalia-17658264 (count not retrievable)
- GitHub: No public repos found

**Cameron Fiore** — Co-founder
- Education: Brown University (LinkedIn snippet)
- Prior roles: Shield AI (LinkedIn snippet). Description also cites prior Anduril autonomy engineering experience (company_data Description); Anduril tenure not separately corroborated in search snippets retrieved.
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/camfiore — 500+ connections (LinkedIn snippet)
- GitHub: No public repos found

**Co-founder relationship:** Both founders show Shield AI tenure as autonomy engineers (LinkedIn/ZoomInfo/Contrary Research snippets), indicating prior shared employer. No public data on whether tenures overlapped chronologically.

**Founder-market fit:** [Inferred]: Both founders' Shield AI autonomy backgrounds (and Fiore's stated Anduril history per company description) put them inside the two largest U.S. defense-AI companies covering the C-UAS adjacency. Their network and security-clearance posture are typically required for selling into DoD program offices. No advisors, board members, or notable investors beyond YC found in public sources.

## Key Risks

**Incumbent platform substitution:** Anduril Lattice already markets multi-sensor fusion and won the Army's Oct 2025 C-UAS Fire Control Solution competition (WebSearch via Yahoo Finance/MarketsandMarkets snippet). A 2-person team must outpace Lattice on integration breadth before Anduril locks in programs of record.

**OEM cooperation risk:** ParallaxOS depends on access to proprietary sensor and effector interfaces from Dedrone, Fortem, D-Fend, DroneShield, etc. (WebSearch). [Inferred]: These vendors have business-model incentive to withhold API access from a neutral OS that would commoditize their software margins; SAPIENT compliance mitigates partially but not for non-compliant legacy gear.

**Procurement-cycle risk:** [Inferred]: DoD C-UAS procurement runs on multi-year cycles (SBIR → STRATFI → POR). A pre-seed team with no disclosed contracts (no public data found on LOIs, SBIRs, or pilots) faces a long path to first revenue typical of defense software.

**Founder-channel concentration:** Both founders come from Shield AI; Fiore additionally from Anduril per company description. [Inferred]: Selling against former employers (Anduril Lattice in particular) creates non-compete, IP-overlap, and relationship-conflict exposure.

**Technical feasibility — millisecond multi-sensor fusion at scale:** Stated "millisecond-latency" track correlation across heterogeneous sensors (WebSearch snippet citing surtrdefense.com) is an aggressive claim; not independently benchmarked in public materials.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global C-UAS $5.12B (2025) → $27.98B by 2032 (Yahoo Finance summarizing market report, 2025, via search snippet); alt: $3.8B (2025) → $27.4B (2034) at 25.2% CAGR (Marketintelo, via search snippet) |
| SAM | No public data found |
| Traction | YC Spring 2026 batch listing (YC page); no funding announcement, customers, press, social, or community data publicly found |
| Revenue Signal | No public data found (surtrdefense.com returned HTTP 403; no pricing page accessible) |
| Founders | Anshul Ahluwalia (Co-founder): ex-Shield AI autonomy engineer, MS/BS Georgia Tech (LinkedIn/ZoomInfo via search snippet). Cameron Fiore (Co-founder): ex-Shield AI; Anduril per company description; Brown University (LinkedIn via search snippet) |
| Competitors | Anduril (multi-billion raised, revenue unknown, vertically integrated Lattice OS + Oct 2025 Army C-UAS win — Yahoo Finance/MarketsandMarkets snippet); Dedrone/Axon ($60.5M raised pre-acquisition, revenue unknown, acquired by Axon Oct 2024 — Wikipedia/Tracxn snippet); Fortem ($25M from Lockheed Apr 2026 + $18M Army contract, revenue unknown, radar+interceptor hardware — Lockheed Martin newsroom snippet); D-Fend (funding unknown, revenue unknown, RF cyber takeover — cuashub.com snippet); Epirus ($250M raised, revenue unknown, HPM effector not C2 — Yahoo Finance/MarketsandMarkets snippet) |
| Moat Signals | No public data found |
| Risk Factors | Incumbent platform substitution (Anduril Lattice), OEM cooperation risk, DoD procurement cycle length |
| Founder Reach | Anshul Ahluwalia: Twitter not found, LinkedIn count not retrievable (linkedin.com/in/anshul-ahluwalia-17658264), GitHub not found. Cameron Fiore: Twitter not found, LinkedIn 500+ connections (linkedin.com/in/camfiore), GitHub not found (LinkedIn snippets) |
| Distribution Signals | No public data found (no Product Hunt launch, no app/extension, no press) |
| Emails | No public data found |

Sources:
- [Surtr Defense Systems – Y Combinator](https://www.ycombinator.com/companies/surtr-defense-systems)
- [Anshul Ahluwalia – LinkedIn](https://www.linkedin.com/in/anshul-ahluwalia-17658264/)
- [Anshul Ahluwalia – ZoomInfo](https://www.zoominfo.com/p/Anshul-Ahluwalia/5328629935)
- [Cameron Fiore – LinkedIn](https://www.linkedin.com/in/camfiore/)
- [Shield AI – Wikipedia](https://en.wikipedia.org/wiki/Shield_AI)
- [Counter-UAS Solutions Company Radar Report 2025 – GlobeNewswire](https://www.globenewswire.com/news-release/2025/08/13/3132391/28124/en/Counter-UAS-Solutions-Company-Radar-Report-2025-Anduril-BlueHalo-D-Fend-Dedrone-by-Axon-DroneShield-ELTA-Fortem-Honeywell-L3Harris-Rafael-Advanced-Defense-Systems-SAIC-Sentrycs.html)
- [Counter-UAS Systems Market 2025-2033 – Yahoo Finance](https://finance.yahoo.com/news/counter-uas-c-uas-systems-095400618.html)
- [Counter-UAS Market Report 2025-2030 – MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/counter-cuas-systems-market-4197284.html)
- [Counter-Drone and C-UAS Technology Market – Marketintelo](https://marketintelo.com/report/counter-drone-and-c-uas-technology-market)
- [Lockheed Martin Invests $25M in Fortem Technologies](https://news.lockheedmartin.com/2026-04-22-Lockheed-Martin-Invests-25M-in-Fortem-Technologies-to-Meet-Urgent-Demand-for-Countering-UAS-Threats)
- [Dedrone – Tracxn](https://tracxn.com/d/companies/dedrone/__E95q_KlJ1KC2UCOfpKyeixrQL9DBR9wshWvVUkCmjsk)
- [Dedrone Holdings – Wikipedia](https://en.wikipedia.org/wiki/Dedrone_Holdings)
- [D-Fend – cuashub.com](https://cuashub.com/en/content/d-fend-named-in-gartner-report-on-top-funded-cyber-electronic-defense-startups/)
- [Global addressable C-UAS market – unmannedairspace.info](https://www.unmannedairspace.info/counter-uas-systems-and-policies/global-addressable-c-uas-market-worth-usd63-million-droneshield/)
