# Surtr Defense Systems

> The open operating system for counter-UAS

| Field | Value |
|-------|-------|
| Website | https://surtrdefense.com |
| YC Page | https://www.ycombinator.com/companies/surtr-defense-systems |
| Batch | Spring 2026 |
| Industry | Industrials / Industrials -> Defense |
| Team Size | 2 |
| Location | Los Angeles, CA, USA |
| Tags | Computer Vision |
| YC Partner | Andrew Miklas |
| Emails | No public data found |

## The Idea

- **Problem:** Counter-UAS operators run fragmented sensor stacks (radar, RF, EO/IR, acoustic) from multiple vendors with bespoke integrations that take months; this fragmentation is acute as drone incursions surge — global government C-UAS spending exceeded $29B in publicly announced contracts in Q1 2026 (MarketsandMarkets / PRNewswire, 2026).
- **Approach:** ParallaxOS ingests data from any radar, RF detector, camera, or acoustic array and fuses it into a single unified picture with AI-driven threat classification and engagement recommendations on a human-in-the-loop interface (YC company page, 2026).
- **Differentiation:** vs. Anduril Lattice — built on open standards so partners own integrations and customers own data, and Surtr does not compete with hardware partners on contracts (YC launch tweet, May 13 2026); vs. Dedrone/Axon — vendor-neutral C2 layer rather than a paired hardware+software stack (company website, 2026).
- **Business Model:** No pricing data on website (website returned 403 at time of research). [Inferred]: Software licensing / per-deployment contracts to DoD primes and allied-nation MoDs, given the "partners own integrations, customers own data" positioning.
- **TAM/SAM:** Counter-UAS systems market projected at $20.31B by 2030 (MarketsandMarkets, Oct 2025); $2.6B in 2026 growing to $19.06B by 2035 (Precedence Research, 2025); DroneShield cites a $63B total addressable counter-UxS TAM (Unmanned Airspace / DroneShield 2025 TAM Report).
- **GTM / Distribution:** [Inferred]: Direct sales to DoD and allied-nation buyers via hardware-partner channel, leveraging founders' Shield AI / Anduril relationships; YC launch tagline "unite the West" suggests NATO/Five Eyes positioning (surtrdefense.com tagline, 2026).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond founders' domain expertise from Shield AI and Anduril autonomy programs (LinkedIn, 2026).
- **Future moat:** [Inferred]: Sensor-integration network effects — each new radar/RF/EO partner integration increases value of the platform for every customer, plus accumulated multi-sensor fusion training data; unproven now because no integrations or customers are publicly disclosed.
- **Market structure:** [Inferred]: Channel conflict barrier — incumbents like Anduril (Lattice) and Dedrone/Axon sell paired hardware, so a vendor-neutral C2 layer would cannibalize their hardware attach; Anduril was selected by U.S. Army PEO Missiles and Space for the C-UAS Fire Control Solution in Oct 2025 (MarketsandMarkets, 2025), reinforcing their closed-stack incentive.
- **Commoditization risk:** Open-architecture C-UAS C2 is a stated DoD modernization priority (MarketsandMarkets, 2025), so primes (RTX, Lockheed, Thales) and well-funded startups (Anduril, Shield AI) can build competing fusion layers.

## Market & Traction

- **Traction signals:**
  - Public launch via YC on X: May 13, 2026 (Y Combinator @ycombinator tweet, status 2054637808258818253)
  - Company X handle: @surtrdefense (YC launch tweet, 2026) — follower count not retrievable
  - LinkedIn / Discord / Product Hunt / Press: No public data found
  - YC jobs page: 0 open positions (YC company page, 2026)
- **Competitors:**
  - Anduril Industries (Lattice; selected by U.S. Army for C-UAS Fire Control, Oct 2025; revenue not separately disclosed): closed, vertically integrated hardware+software stack vs. Surtr's vendor-neutral OS (MarketsandMarkets, 2025).
  - Epirus ($595M raised, Series D, $1.35B valuation; revenue unknown): high-power microwave effector hardware focus, not a sensor-fusion OS (Tracxn, 2026).
  - Dedrone (acquired by Axon Oct 2024, terms undisclosed; >$127M raised pre-acquisition): drone-detection software paired with Axon hardware ecosystem vs. Surtr's hardware-agnostic stance (Wikipedia / CNBC, May 2024).
  - DroneShield (ASX-listed, AU$92.9M Q3 2025 revenue, up 1,091% YoY; AU$2.55B sales pipeline): handheld + DroneSentry-C2 platform tied to own hardware (Investing.com / Streetwise Reports, Oct 2025).
  - Shield AI (founders' former employer; private, multi-billion valuation): autonomy stack for own aircraft, not third-party sensor C2 (LinkedIn, 2026).
- **Why now:** [Inferred]: U.S. Army's Oct 2025 C-UAS Fire Control Solution award and explicit DoD push for "open-system and common-architecture compliance" (MarketsandMarkets, 2025) creates a procurement window for open C2 layers; Ukraine and Red Sea drone warfare have driven >$29B in publicly announced C-UAS contracts in Q1 2026 (PRNewswire, 2026).

## Founders & Team

- **Anshul Ahluwalia (Co-founder & CEO):**
  - Background: BS & MS Computer Science, Georgia Tech; previously forward-deployed / robotics engineer at Shield AI on planning and controls for Group 3 & 5 aircraft; prior interns at Meta, Dropbox, Skylark Labs (LinkedIn / ZoomInfo, 2026).
  - Twitter/X: @anshulwalia95 (search results, 2026) — count not retrievable
  - LinkedIn: "Surtr Defense Systems" (linkedin.com/in/anshul-ahluwalia-17658264, 2026)
  - GitHub: No public repos found
- **Cameron Fiore (Co-founder & CTO):**
  - Background: BS & MS Computer Engineering, Brown University; previously autonomy engineer at Anduril on aircraft autonomy and at Shield AI on planning and controls / missile defense and robot teaming in contested environments (LinkedIn, 2026).
  - Twitter/X: @cam_fiore (Y Combinator launch tweet, May 13 2026) — count not retrievable
  - LinkedIn: "Shield AI" headline (linkedin.com/in/cameron-fiore-ab726b191, 2026)
  - GitHub: No public repos found
- **Co-founder relationship:** Both founders previously worked together at Shield AI in planning and controls for autonomous aircraft (LinkedIn / search results, 2026).
- **Founder-market fit:** Both founders shipped autonomy software at the two leading U.S. defense-tech autonomy companies (Anduril, Shield AI) directly relevant to multi-sensor fusion and engagement decisioning for C-UAS (LinkedIn, 2026); no advisors or investors beyond YC publicly listed.

## Key Risks

- **Procurement cycle risk:** DoD and allied C-UAS sales typically require years-long programs of record; Anduril already won the Army's C-UAS Fire Control Solution in Oct 2025 (MarketsandMarkets, 2025), so Surtr must displace or layer beneath an incumbent with deep program relationships. No mitigation found publicly.
- **Channel conflict risk:** The "open OS" thesis depends on hardware partners (radar/RF/EO vendors) integrating with Surtr rather than with incumbent C2 stacks like Lattice; if Anduril/Dedrone bundle integrations with hardware contracts, partner pull diminishes. No mitigation disclosed.
- **Technical feasibility risk:** Real-time sensor fusion + AI threat classification across heterogeneous radar/RF/EO/acoustic feeds with low false-positive rates at engagement-decision quality is unproven publicly; the founders have relevant autonomy backgrounds (LinkedIn, 2026) but no third-party performance benchmarks exist.
- **Concentration / customer access risk:** Two-person team selling to defense buyers requires cleared personnel, ITAR compliance, and FOCI considerations; no public evidence of clearances, prime partnerships, or signed LOIs (YC page, 2026).
- **Name disambiguation risk:** "Surtr" is a common Norse mythology reference and appears in unrelated contexts; researchers must cross-check against founders Ahluwalia/Fiore and Spring 2026 batch (YC page, 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $20.31B by 2030 (MarketsandMarkets, Oct 2025); $19.06B by 2035 (Precedence Research, 2025); $63B total addressable counter-UxS (DroneShield 2025 TAM Report) |
| SAM | No public data found |
| Traction | YC public launch May 13, 2026 (Y Combinator tweet); 0 job postings (YC page, 2026); company X handle @surtrdefense, count not retrievable |
| Revenue Signal | No public data found (website returned 403 at fetch time; no pricing page accessible) |
| Founders | Anshul Ahluwalia (CEO): GT BS/MS CS, ex-Shield AI autonomy. Cameron Fiore (CTO): Brown BS/MS CompE, ex-Anduril aircraft autonomy, ex-Shield AI. |
| Competitors | Anduril (private, multi-B valuation, revenue unknown, closed Lattice stack); Epirus ($595M raised, $1.35B val, revenue unknown, HPM effectors); Dedrone (acquired by Axon Oct 2024, $127M+ raised, paired w/ Axon hardware); DroneShield (ASX-listed, AU$92.9M Q3 2025 rev, own-hardware C2); Shield AI (private, autonomy for own aircraft) |
| Moat Signals | No public data found beyond founder domain expertise at Shield AI / Anduril (LinkedIn, 2026) |
| Risk Factors | Procurement cycle vs. Anduril incumbency, channel conflict with hardware partners, multi-sensor fusion technical feasibility unproven |
| Founder Reach | Anshul Ahluwalia: Twitter @anshulwalia95 count not retrievable, LinkedIn anshul-ahluwalia-17658264, GitHub not found. Cameron Fiore: Twitter @cam_fiore count not retrievable, LinkedIn cameron-fiore-ab726b191, GitHub not found. |
| Distribution Signals | YC launch tweet May 13, 2026 (Y Combinator @ycombinator); no Product Hunt, app store, or Chrome listing applicable |
| Emails | No public data found |

Sources:
- [Surtr Defense Systems YC page](https://www.ycombinator.com/companies/surtr-defense-systems)
- [Surtr Defense website](https://surtrdefense.com/)
- [Y Combinator launch tweet](https://x.com/ycombinator/status/2054637808258818253)
- [Anshul Ahluwalia LinkedIn](https://www.linkedin.com/in/anshul-ahluwalia-17658264/)
- [Cameron Fiore LinkedIn](https://www.linkedin.com/in/cameron-fiore-ab726b191/)
- [MarketsandMarkets C-UAS forecast](https://www.marketsandmarkets.com/PressReleases/counter-cuas-systems.asp)
- [Precedence Research C-UAS market](https://www.precedenceresearch.com/counter-unmanned-aerial-system-market)
- [DroneShield TAM via Unmanned Airspace](https://www.unmannedairspace.info/counter-uas-systems-and-policies/global-addressable-c-uas-market-worth-usd63-million-droneshield/)
- [Epirus profile (Tracxn)](https://tracxn.com/d/companies/epirus/__0cPK3oBGPHlUN-KnCTIQqC8VPNYb-1liyNJLU_-eiQA)
- [Dedrone Wikipedia](https://en.wikipedia.org/wiki/Dedrone_Holdings)
- [Axon completes Dedrone acquisition](https://www.axon.com/blog/axon-completes-acquisition-of-dedrone)
- [DroneShield Q3 2025 results](https://www.streetwisereports.com/article/2025/10/22/record-breaking-quarter-signals-major-shift-in-counter-drone-industry.html)
