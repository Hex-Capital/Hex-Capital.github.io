# Piris Labs

> Inference at Light Speed

| Field | Value |
|-------|-------|
| Website | https://pirislabs.io/ |
| YC Page | https://www.ycombinator.com/companies/pirislabs |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Hard Tech, B2B, Cloud Computing, AI, Networks |

## The Idea

**Problem:** Running inference on trillion-parameter AI models requires massive GPU clusters that suffer from data movement bottlenecks — the "memory wall." Moving data between memory and compute consumes the majority of time and energy in inference workloads, resulting in low effective FLOP utilization and unsustainable unit economics. Customers today use traditional GPU clusters from providers like NVIDIA, which are expensive to procure and power-intensive to operate at scale.

**Approach:** Piris Labs offers a full-stack inference service that pairs proprietary photonic hardware with a vertically optimized software stack. By using optical (light-based) interconnects in place of traditional electronic data pathways, the system reduces the data movement bottleneck. The YC profile claims 5x lower latency, 10x lower power consumption per bit, and 2x lower cost per token compared to traditional approaches (YC company page). The company positions itself as "The Unified Fabric for AI" (pirislabs.io).

**Differentiation:** Unlike pure-play photonic interconnect companies (Lightmatter, Ayar Labs) that sell components to data center operators, Piris Labs offers a full-stack inference *service* — combining custom photonic hardware with an integrated software layer. Unlike photonic computing companies (Neurophos, Olix) that aim to replace electronic processors entirely with optical compute units, Piris Labs focuses on eliminating the data movement bottleneck around existing compute architectures. The vertical integration of hardware and software in a service model differs from the component-sale model of most photonic startups.

**Business Model:** No pricing page or pricing details are publicly available. The website at time of research showed only a tagline and company name. The company lists two contact channels: contact@pirislabs.io for "AI Products inquiries" and founders@pirislabs.io for "Chip/ODM partners" (YC company page), suggesting both a direct inference service offering and a hardware partnership channel. [Inferred]: Most likely monetization path is consumption-based inference-as-a-service pricing (cost per token or per request), given the "2x lower cost per token" positioning and the service-oriented framing.

**TAM/SAM:** The global AI inference market was valued at USD 97.24 billion in 2024 and is projected to reach USD 254.98 billion by 2030 (Grand View Research, 2024 via search snippet; MarketsandMarkets, 2025 via search snippet). The silicon photonics market was valued at USD 2.86 billion in 2025 and is projected to reach USD 28.75 billion by 2034 at 29.25% CAGR (Precedence Research, 2025 via search snippet). The optical interconnect segment for AI clusters specifically is projected to grow from $5 billion in 2024 to over $10 billion in 2026 (EE Times, 2025 via search snippet). No company-specific SAM estimate is publicly available.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct enterprise sales to AI companies and cloud providers running large-scale inference workloads. The dual-contact structure (AI Products vs. Chip/ODM partners) suggests a two-pronged approach: (1) selling inference-as-a-service directly to AI application companies, and (2) partnering with hardware OEMs/ODMs to integrate photonic technology into existing data center infrastructure. The YC network and the "Chip/ODM partners" contact channel suggest B2B enterprise sales as the primary motion.

## Defensibility

The company is building proprietary photonic hardware, which represents a technical complexity barrier — designing, fabricating, and integrating optical components for data center inference is a multi-year engineering challenge requiring specialized physics expertise. Ali Khalatpour's background in terahertz semiconductor lasers (MIT PhD, NASA GUSTO mission) represents domain-specific IP in photonic device design. The vertical integration of custom hardware with a purpose-built software stack creates switching costs once customers adopt the platform.

No patents have been identified in public sources. No network effects or data advantages are evident at this stage.

**Market structure:** Large GPU incumbents (NVIDIA primarily) face business model cannibalization risk — their revenue model depends on selling expensive GPU hardware. An inference service built on lower-cost photonic hardware represents a different unit economics structure that undermines the incumbent's core margin model. Additionally, NVIDIA's architecture is optimized around electronic interconnects; adopting photonic alternatives would require fundamental re-architecture of their product stack and supply chain. Cloud inference providers (AWS, Google, Azure) could potentially build or acquire photonic capabilities, but they currently rely on GPU vendor relationships that create supply chain inertia.

**Commoditization risk:** The broader photonic AI hardware space is attracting significant capital: Lightmatter ($850M raised), Ayar Labs ($370M+), Olix ($250M), and Neurophos ($118M) are all pursuing variations of photonic solutions for AI workloads. While each targets a different layer of the stack (interconnects, compute, full-stack service), the underlying photonic engineering talent pool is small, and larger competitors with more capital could potentially replicate a full-stack inference approach. The full-stack service model provides some differentiation, but the hardware component faces commoditization risk as photonic manufacturing scales.

## Market & Traction

**Traction signals:**
- No revenue data found publicly.
- No user counts, download figures, or waitlist numbers found.
- No press coverage in named publications found.
- No Product Hunt launch found.
- No app store presence found.
- Twitter/X: Ali Khalatpour operates @Alipirislabs (account created January 2026, per search results); follower count not retrievable.
- Twitter/X: Keyvan Moghadam has account @moghaddamkeyvan; follower count not retrievable.
- LinkedIn company page exists at linkedin.com/company/pirislabs (listed as "Piris Labs (YC W26)"); follower count not retrievable.
- No Discord or Slack community found.
- 0 open job positions listed (YC company page).
- Website showed only company name and tagline at time of research; no product demo, documentation, or detailed feature pages visible.

**Competitive landscape:**

1. **Lightmatter** — $850M total raised, $4.4B valuation (Series D $400M, October 2024; BusinessWire). Revenue estimated at ~$50M in 2023 (Sacra via search snippet). Builds photonic interconnects and co-packaged optics for AI data centers (component sale model). Key differentiator vs. Piris Labs: Lightmatter sells interconnect hardware components to data center operators rather than offering an integrated inference service.

2. **Ayar Labs** — $370M+ total raised (Series D $155M, December 2024; Ayar Labs press release). Investors include AMD Ventures, Intel Capital, and NVIDIA. Ships TeraPHY optical chiplets (8 Tbps bandwidth, 10ns latency), with 15,000+ units shipped to tier-one customers (Ayar Labs, 2024). Key differentiator vs. Piris Labs: Ayar Labs focuses on chip-to-chip optical I/O chiplets integrated into existing semiconductor packaging, not a full-stack inference service.

3. **Olix** — $250M total raised, $1B valuation (Series led by Hummingbird Ventures; Data Center Dynamics, February 2026). Building Optical Tensor Processing Unit (OTPU) for AI inference. First products expected 2027. Key differentiator vs. Piris Labs: Olix is building a complete optical processor to replace GPUs, while Piris Labs focuses on eliminating data movement bottlenecks around existing compute.

4. **Neurophos** — $118M total raised ($110M Series A, January 2026; TechCrunch). Led by Gates Frontier. Metamaterial-based photonic computing; first chips expected mid-2028. Key differentiator vs. Piris Labs: Neurophos pursues photonic compute via metamaterial modulators (a different physics approach), while Piris Labs focuses on interconnect/data-movement optimization.

**Why now:** [Inferred]: Several converging factors have opened this window: (1) AI model parameters have scaled to the trillions, making the memory wall / data movement bottleneck the dominant cost and latency factor in inference — a threshold crossed with GPT-4-class models in 2023-2024; (2) silicon photonics manufacturing has matured sufficiently to produce reliable optical components at data-center scale, as evidenced by Ayar Labs shipping 15,000+ units in 2024; (3) demand for inference (vs. training) is growing as AI applications move from development to production deployment, shifting cost sensitivity toward per-query economics; (4) venture capital has poured over $1.5B into photonic AI startups in 2024-2026, signaling market validation of the photonic approach to AI infrastructure constraints.

## Founders & Team

**Ali Khalatpour** — Co-founder & CEO
- PhD in Electrical Engineering, MIT (2020), with thesis on terahertz quantum cascade lasers (MIT DSpace)
- MS in Physics, University of Toronto (2014) (Google Scholar via search snippet)
- Research Associate at Stanford University, Amir Safavi-Naeini group (2023) (Stanford LINQS lab page via search snippet)
- Affiliated with Harvard Capasso Group (Capasso Group alumni page via search snippet)
- Developed room-temperature terahertz semiconductor lasers; this work was selected for NASA's GUSTO (Galactic/Extragalactic ULDB Spectroscopic Terahertz Observatory) mission as the terahertz emission source (MIT News, 2017; optics.org, 2017)
- Published research featured in MIT News, Nature-related journals, and ScienceDaily
- Twitter/X: @Alipirislabs — follower count not retrievable
- LinkedIn: linkedin.com/in/alikhalatpour/ — headline listed as "Stealth AI Startup" (via search snippet); connection count not retrievable
- GitHub: No public repos found

**Keyvan Moghadam** — Co-founder & President
- PhD in Electrical Engineering, University of Southern California (Google Scholar via search snippet)
- Research areas: compressed sensing, distributed sensing, vehicular networks, machine learning, large-scale Markov decision processes (ResearchGate via search snippet)
- 45 academic citations (Google Scholar via search snippet)
- YC profile describes him as "AI/ML leader with experience scaling products at Meta and X" (YC company page)
- LinkedIn headline references Pinterest (LinkedIn search snippet), suggesting additional industry experience
- Twitter/X: @moghaddamkeyvan — follower count not retrievable
- LinkedIn: linkedin.com/in/keyvanrm/ — connection count not retrievable
- GitHub: github.com/keyvanrm — 4 public repositories; star counts not retrievable

**Co-founder relationship:** Both founders hold PhDs in Electrical Engineering (Khalatpour from MIT, Moghadam from USC). No shared employer or university identified from available data. Khalatpour's background is in photonic device physics; Moghadam's is in ML/AI infrastructure at scale. The combination maps to the company's two core competencies (photonic hardware + AI software stack), but no public data on how they met or their prior working relationship was found.

**Founder-market fit:** Khalatpour's PhD work on terahertz semiconductor lasers at MIT and his role building the optical engine for NASA's GUSTO mission provide direct experience designing and fabricating photonic devices for high-performance applications. Moghadam's experience scaling AI/ML products at Meta and X (per YC profile) provides the software and infrastructure perspective needed to build the inference service layer. The pairing of a photonic hardware physicist with an AI infrastructure engineer aligns with the company's stated approach of vertically integrating proprietary photonic hardware with an optimized software stack. YC primary partner is Ankit Gupta (YC company page).

## Key Risks

**Photonic hardware development timeline:** Building custom photonic hardware from concept to production-ready data center deployment is a multi-year, capital-intensive process. Comparable companies (Olix, Neurophos) project first commercial products in 2027-2028 despite having raised $118M-$250M. With a team of 2 and pre-seed capital, the gap between Piris Labs' resources and the cost of hardware development and fabrication is significant. No mitigation signals (fab partnerships, prototype status) are publicly visible.

**Well-capitalized direct competitors:** The photonic AI infrastructure space has attracted over $1.5B in venture funding across Lightmatter ($850M), Ayar Labs ($370M+), Olix ($250M), and Neurophos ($118M). These companies have larger teams, established manufacturing partnerships, and multi-year head starts on hardware development. Piris Labs' differentiation as a full-stack inference service is conceptual at this stage, and competitors could extend into service models.

**Technical feasibility at production scale:** The YC profile claims (5x lower latency, 10x lower power per bit, 2x lower cost per token) are unverified by third-party benchmarks or customer testimonials. Photonic computing and interconnect performance at lab scale has historically faced challenges in translating to production-grade reliability, thermal management, and manufacturing yield at data center scale. No prototype, demo, or benchmark data is publicly available.

**Capital intensity mismatch:** Hardware startups in the photonic AI space require tens to hundreds of millions in funding to reach commercial product (Neurophos: $118M pre-product; Olix: $250M pre-product). The standard YC deal (~$500K) and a 2-person team represent a significant undercapitalization relative to the hardware development required, necessitating rapid follow-on fundraising.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $97.24B AI inference market in 2024, projected $254.98B by 2030 (Grand View Research, 2024; MarketsandMarkets, 2025 via search snippets). Silicon photonics: $2.86B in 2025, projected $28.75B by 2034 at 29.25% CAGR (Precedence Research, 2025 via search snippet) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Ali Khalatpour (CEO): MIT PhD (EE), terahertz laser pioneer, NASA GUSTO optical engine lead, Stanford research associate. Keyvan Moghadam (President): USC PhD (EE), AI/ML at Meta and X (per YC), Pinterest (per LinkedIn) |
| Competitors | Lightmatter ($850M raised, ~$50M rev est. 2023 via Sacra, photonic interconnect components vs. full-stack service); Ayar Labs ($370M+ raised, revenue unknown, optical chiplets vs. full-stack service); Olix ($250M raised, revenue unknown, optical processor vs. data-movement focus); Neurophos ($118M raised, revenue unknown, metamaterial photonic compute vs. interconnect optimization) |
| Moat Signals | Proprietary photonic hardware design; CEO's terahertz/photonic device IP from MIT/NASA/Stanford; vertical hardware+software integration |
| Risk Factors | Capital intensity vs. pre-seed resources, well-funded competitors ($1.5B+ combined), unverified performance claims with no public prototype data |
| Founder Reach | Ali Khalatpour: Twitter @Alipirislabs (count not retrievable), LinkedIn linkedin.com/in/alikhalatpour/ (count not retrievable), GitHub not found. Keyvan Moghadam: Twitter @moghaddamkeyvan (count not retrievable), LinkedIn linkedin.com/in/keyvanrm/ (count not retrievable), GitHub github.com/keyvanrm (4 repos, star counts not retrievable) |
| Distribution Signals | No public data found |
