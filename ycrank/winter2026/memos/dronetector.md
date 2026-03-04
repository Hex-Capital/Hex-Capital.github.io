# DroneTector

> Technology to detect and track hostile drones

| Field | Value |
|-------|-------|
| Website | https://www.dronetector.com/ |
| YC Page | https://www.ycombinator.com/companies/dronetector |
| Batch | Winter 2026 |
| Industry | Industrials / Industrials -> Drones |
| Team Size | 3 |
| Location | No public data found |
| Tags | Hard Tech, Drones, Radar |
| YC Partner | Tyler Bosmeny |
| Emails | web-enquiries@dronetector.com, founders@dronetector.com |

## The Idea

**Problem:** Small drones — including nano drones costing as little as $50 — present a growing security threat to airports, critical infrastructure, and front-line defense. Existing detection systems were not designed for these low-signature targets, leading to high false-positive rates and missed real threats. The 2018 Gatwick Airport incident cost stakeholders over £50 million (Converge Challenge page, May 2024), and Ukraine experienced more than 1,600 drone attacks per month in 2024 (Converge Challenge page, May 2024). Red Sea drone incidents doubled shipping costs globally since November 2023 (Converge Challenge page, May 2024). Current radar systems struggle to distinguish small drones from birds and other clutter.

**Approach:** DroneTector builds high-frequency millimetre-wave radar systems (operating at frequencies such as 94 GHz, based on Matthew Moore's PhD research) designed from the ground up to detect low-radar-cross-section targets. The system exploits micro-Doppler signatures — the distinctive patterns produced by rotating propeller blades — to differentiate drones from birds and to classify individual drone models (IET Radar, Sonar & Navigation, 2024). The solution is integrated with camera and acoustic arrays to deliver a multi-sensor detection, tracking, and identification capability (DroneTector website).

**Differentiation:** Traditional radar systems operate at lower frequencies and were designed for larger aircraft, making them ineffective against small drones (Robin Radar website). DroneTector's millimetre-wave approach provides higher resolution at shorter ranges, purpose-built for the nano-drone detection problem. Competitors like Dedrone (acquired by Axon) rely primarily on RF signal detection and software, which cannot detect drones operating autonomously without RF emissions. Echodyne uses metamaterials electronically scanned array (MESA) radar but at lower frequencies. Robin Radar pivoted from bird detection to drones but uses X-band radar. DroneTector's ground-up design for the specific micro-Doppler signature problem at millimetre-wave frequencies represents a different technical approach.

**Business Model:** No pricing page is publicly available on the DroneTector website. [Inferred]: Most likely monetization path is hardware unit sales of radar systems combined with software licensing for the detection/tracking/classification platform, following the model common in defense and critical infrastructure security (e.g., DroneShield sells hardware units with software subscriptions). Government and defense procurement cycles would drive deal sizes.

**TAM/SAM:** The global anti-drone market was valued at $4.48 billion in 2025 and is projected to reach $14.51 billion by 2030 at a CAGR of 26.5% (MarketsandMarkets via search snippet). The broader counter-UAV market was valued at $4.93 billion in 2023 and is projected to reach $36.42 billion by 2035 at a CAGR of 22.14% (Research and Markets via Yahoo Finance). The drone detection sub-segment specifically was estimated at $729.8 million in 2024 and is projected to reach $3.36 billion by 2030 at a CAGR of 29.0% (Grand View Research via search snippet).

**GTM / Distribution:** The DroneTector website lists three target sectors: airports, critical infrastructure, and defense. The company has received support from NATO DIANA, DASA (UK Defence and Security Accelerator), and the Royal Academy of Engineering (DroneTector website). [Inferred]: Most likely distribution path is direct government and defense sales, leveraging NATO DIANA and DASA relationships for initial European and NATO-aligned customer access, with airport security as a parallel commercial channel.

## Defensibility

DroneTector's core defensibility lies in deep technical IP: the founders have published peer-reviewed research on 94 GHz Doppler radar for UAV micro-Doppler validation (IET Radar, Sonar & Navigation, 2024; University of St Andrews Research Repository), and the team includes two PhDs in physics and one PhD in computer science. The millimetre-wave radar hardware is custom-built, representing a barrier to replication by software-only entrants. NATO DIANA and DASA backing provide institutional validation and potential access to restricted defense procurement channels.

Potential moat could develop via: (1) proprietary micro-Doppler signature databases built from real-world deployment data, creating a data advantage over time; (2) defense/government certifications and security clearances that create switching costs; (3) integration into customers' security operations centers, which creates operational lock-in.

**Market structure:** Large defense primes (Raytheon, L3Harris, Northrop Grumman) focus on high-value, large-platform solutions — building low-cost, specialized small-drone detection radar would cannibalize their existing high-margin radar product lines and conflict with their existing sales relationships. Their unit economics are oriented toward multi-million-dollar programs, not potentially lower-cost tactical sensors. Software-based counter-drone companies (e.g., Dedrone) lack the hardware engineering capability to build custom millimetre-wave radar from scratch.

**Commoditization risk:** Echodyne ($195 million raised) and MatrixSpace ($58 million raised) both build radar for counter-drone applications and could extend into millimetre-wave frequencies. Robin Radar ($26 million raised) has domain expertise in small-target detection radar. Academic groups working on W-band radar could also produce competing approaches. The underlying physics of millimetre-wave radar is well-understood, though engineering a production-grade, cost-effective system requires specialized expertise that constrains the speed of replication.

## Market & Traction

**Traction signals:**
- Y Combinator Winter 2026 batch member (YC page)
- NATO DIANA support (DroneTector website; specific cohort year not confirmed independently)
- UK Defence and Security Accelerator (DASA) support (DroneTector website)
- Royal Academy of Engineering support (DroneTector website) — Matthew Moore is a Royal Academy of Engineering Enterprise Fellow (ResearchGate, LinkedIn)
- Converge Challenge (Scotland) participant — won "Best Pitch" and £500 at Inside Innovation event, June 2024 (Converge Challenge website)
- YC launch post by @ycombinator on X, tagging @DroneTector and @matthewmoore222 (X.com, February 2026)
- YC LinkedIn post announcing launch: "DroneTector is building high-resolution radars to detect the most challenging drones" (LinkedIn, February 2026)
- Company Twitter/X account: @dronector (X.com) — follower count not retrievable
- Company LinkedIn page: linkedin.com/company/dronetector — follower count not retrievable
- No Product Hunt listing found
- No public revenue data found
- No public customer count or user metrics found

**Competitive landscape:**

| Competitor | Key Differentiator vs. DroneTector | Funding | Revenue |
|---|---|---|---|
| **DroneShield** (ASX: DRO) | Integrated counter-drone platform with jamming/defeat capabilities; DroneTector focuses on detection only | Public company; $221M cash balance as of Dec 2024 (ASX filing) | AU$57.5M revenue CY2024; AU$72.6M H1 2025 (ASX filings via search snippet) |
| **Dedrone** (Axon) | Software-first, RF-based detection approach; acquired by Axon Oct 2024; DroneTector uses purpose-built radar hardware | $130M total raised pre-acquisition; acquired by Axon (undisclosed terms) (Wikipedia, Axon press release May 2024) | Revenue unknown |
| **Echodyne** | MESA metamaterials radar at lower frequencies; broader use cases (autonomous vehicles, border security); DroneTector specializes in millimetre-wave for nano-drone micro-Doppler | $195M total raised, $135M Series C led by Bill Gates and Baillie Gifford (GeekWire, June 2022) | Revenue unknown |
| **Robin Radar** (Netherlands) | Pivoted from bird detection to drones; X-band radar with 200+ units deployed in Ukraine; DroneTector uses higher-frequency W-band for smaller targets | $26M raised; majority acquired by Parcom (PE) in 2024 (Tracxn, Defense News) | ~$52M revenue 2024 (Tracxn via search snippet) |
| **MatrixSpace** | AI-enabled portable 360° radar with edge computing; multi-sensor fusion; DroneTector focuses on millimetre-wave radar specifically | $58M total raised; $20M Series B with L3Harris as investor (Tech Startups, Oct 2025) | Revenue unknown |

**Why now:** [Inferred]: Several converging factors opened this market window in 2023–2025: (1) The Russia-Ukraine war demonstrated the military threat of small commercial drones at scale — Ukraine faced 1,600+ drone attacks per month in 2024, proving that low-cost drones are a primary battlefield weapon. (2) Civilian drone incidents at airports (Gatwick 2018, plus ongoing incidents globally) forced regulatory and procurement urgency. (3) Red Sea Houthi drone and missile attacks disrupted global shipping from November 2023, doubling shipping costs and bringing counter-drone technology into commercial and geopolitical focus. (4) The proliferation of sub-$50 nano drones created a detection gap that existing radar systems were not designed to address, generating acute demand for new purpose-built detection technology.

## Founders & Team

**Matthew Moore** — Co-founder & CEO
- PhD in Physics from University of St Andrews, specializing in millimetre-wave radar for drone detection, classification, and tracking (ResearchGate, St Andrews Research Repository)
- MPhys in Physics from Durham University, with master's project involving drone position tracking to sub-millimetre precision (LinkedIn via search snippet)
- Royal Academy of Engineering Enterprise Fellow (LinkedIn, multiple sources)
- Published peer-reviewed research: "A new simulation methodology for generating accurate drone micro-Doppler with experimental validation" in IET Radar, Sonar & Navigation, 2024; "94 GHz Doppler radar for experimental validation of small UAV micro-Doppler" (St Andrews Research Repository)
- Member of the Millimetre Wave & EPR Group at University of St Andrews (St Andrews website)
- Twitter/X: @matthewmoore222 (referenced in YC launch tweet) — follower count not retrievable
- LinkedIn: linkedin.com/in/mmoore2
- GitHub: No public repos found

**Thomas Doherty** — Co-founder & CTO
- DPhil in Atomic & Laser Physics from University of Oxford, Clarendon Laboratory (Oxford Physics website, YC page)
- MPhys in Theoretical Physics from University of St Andrews (YC page)
- Royal Academy of Engineering Enterprise Fellow (LinkedIn via search snippet)
- Previously Co-founder & CEO of Quantum Fabrix (QFX), a University of Oxford quantum hardware spin-out; QFX raised £2M seed led by YC co-founder Paul Graham (Silicon Canals, Oct 2025); QFX subsequently appointed a new CEO (Dr Timothy Ballance) in October 2025 (Silicon Canals)
- Described as having "a decade of experience in optical and laser technologies" (LinkedIn via search snippet)
- Published researcher in ion trap quantum computing (Google Scholar, Oxford Physics)
- Twitter/X: No public account found
- LinkedIn: uk.linkedin.com/in/thomas-doherty-940b87302
- GitHub: No public repos found

**Jordina Frances de Mas** — Co-founder & COO
- PhD in Computer Science (Automated Reasoning) from University of St Andrews, completed February 2024 (St Andrews CS Blog)
- Research on propositional formula simplification using Peirce's existential graphs and implication hypergraphs (St Andrews Research Repository)
- Background in formal methods, mathematics, and physics (YC page)
- Presented at SPLASH 2023 conference (SPLASH 2023 website)
- Twitter/X: No public account found
- LinkedIn: No public profile URL found in search results
- GitHub: github.com/neophytecoder — GLAProject (auction management web app); star count unknown

**Co-founder relationship:** Matthew Moore and Jordina Frances de Mas both completed PhDs at the University of St Andrews, indicating overlapping time at the same institution. Thomas Doherty completed his MPhys at St Andrews before his Oxford DPhil, providing a shared St Andrews connection across all three founders.

**Founder-market fit:** The team combines deep domain expertise: Moore built and tested the specific 94 GHz radar hardware for drone micro-Doppler detection during his PhD, making him one of a small number of people globally with hands-on experience in this exact technical problem. Doherty brings a decade of optical/laser physics and experience founding a deep-tech venture (Quantum Fabrix). Frances de Mas brings automated reasoning and algorithmic optimization expertise relevant to signal processing and classification challenges. All three have Royal Academy of Engineering or adjacent institutional backing.

## Key Risks

**Defense procurement cycle risk:** Government and defense customers have procurement timelines of 12–36+ months. As a 3-person pre-seed team, DroneTector must survive extended sales cycles while burning cash. NATO DIANA and DASA relationships may help accelerate access but do not guarantee contracts.

**Founder attention split (Thomas Doherty):** Thomas Doherty was listed as Co-founder & CEO of Quantum Fabrix (QFX) as recently as 2025, with QFX appointing a new CEO in October 2025 (Silicon Canals, Oct 2025). The timeline of his transition from QFX to DroneTector is unclear, and any residual obligations to QFX could divide attention.

**Well-funded competitor convergence:** Echodyne ($195M raised), MatrixSpace ($58M raised), and Robin Radar ($52M revenue) are all scaling counter-drone radar products. DroneShield (AU$221M cash) is a public company with established defense distribution. Any of these could extend into millimetre-wave frequencies, potentially outpacing DroneTector on production capacity and go-to-market.

**Hardware scaling complexity:** Manufacturing custom millimetre-wave radar hardware requires specialized components, supply chains, and quality assurance processes that are expensive and slow to build. Moving from research prototype to production-grade, field-deployable units is a significant engineering challenge for a 3-person team.

**Regulatory and export control:** Radar technology, particularly for defense applications, is subject to ITAR and EAR (US) or equivalent export controls in the UK. Navigating these regulations adds overhead and could limit addressable markets or complicate international sales.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Anti-drone market: $4.48B (2025) → $14.51B (2030), 26.5% CAGR (MarketsandMarkets via search snippet); Counter-UAV: $4.93B (2023) → $36.42B (2035), 22.14% CAGR (Research and Markets via Yahoo Finance) |
| SAM | Drone detection sub-segment: $729.8M (2024) → $3.36B (2030), 29.0% CAGR (Grand View Research via search snippet) |
| Traction | YC W26 batch; NATO DIANA support; DASA support; Royal Academy of Engineering Enterprise Fellowship; Converge Challenge "Best Pitch" winner June 2024 (Converge Challenge). No public revenue, customer count, or user metrics found. |
| Revenue Signal | No public data found |
| Founders | Matthew Moore (CEO): PhD Physics St Andrews, millimetre-wave radar specialist, RAEng Enterprise Fellow. Thomas Doherty (CTO): DPhil Atomic & Laser Physics Oxford, prev. co-founded Quantum Fabrix (£2M seed from Paul Graham). Jordina Frances de Mas (COO): PhD CS (Automated Reasoning) St Andrews. |
| Competitors | DroneShield (public, AU$221M cash, AU$57.5M rev CY2024, integrated counter-drone platform); Dedrone ($130M raised, acquired by Axon Oct 2024, revenue unknown, software/RF-based); Echodyne ($195M raised, revenue unknown, MESA radar); Robin Radar ($26M raised, ~$52M rev 2024, X-band bird/drone radar); MatrixSpace ($58M raised, revenue unknown, AI-enabled portable radar) |
| Moat Signals | Peer-reviewed millimetre-wave drone micro-Doppler research; custom hardware IP; NATO DIANA + DASA institutional backing; RAEng Enterprise Fellowship |
| Risk Factors | Defense procurement cycle length, founder attention split (Doherty/QFX overlap), well-funded competitors converging on market |
| Founder Reach | Matthew Moore: Twitter @matthewmoore222 (count not retrievable), LinkedIn linkedin.com/in/mmoore2. Thomas Doherty: Twitter not found, LinkedIn uk.linkedin.com/in/thomas-doherty-940b87302. Jordina Frances de Mas: Twitter not found, LinkedIn not found, GitHub github.com/neophytecoder (star count unknown). |
| Distribution Signals | YC W26 launch post by @ycombinator on X (Feb 2026); YC LinkedIn announcement (Feb 2026); no Product Hunt listing; no app store presence (hardware product) |
| Emails | web-enquiries@dronetector.com, founders@dronetector.com |
