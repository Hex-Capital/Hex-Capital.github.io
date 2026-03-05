# Piris Labs

> Cerebras-speed inference but scalable

| Field | Value |
|-------|-------|
| Website | https://pirislabs.io/ |
| YC Page | https://www.ycombinator.com/companies/pirislabs |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Hard Tech, B2B, Cloud Computing, Networks |
| YC Partner | Ankit Gupta |
| Emails | contact@pirislabs.io, founders@pirislabs.io |

## The Idea

**Problem:** AI inference at scale is bottlenecked by data movement between processors, not by raw compute. The "memory wall" — the gap between processor speed and memory/interconnect bandwidth — forces data center operators to deploy expensive GPU clusters that achieve poor effective FLOP utilization, especially for trillion-parameter models. Current copper-based interconnects impose latency, power, and cost constraints that make large-model inference economically unsustainable. Existing solutions include NVIDIA GPU clusters with NVLink/InfiniBand, and specialized inference chips from Groq (LPU) and Cerebras (wafer-scale), each with their own scaling limitations.

**Approach:** Piris Labs offers a full-stack inference service combining proprietary photonic (optical) interconnects with a vertically optimized software stack. By replacing copper-based data links with optical interconnects, the system reduces data movement latency and power consumption. The company claims 5x lower latency, 10x lower power per bit, and 2x lower cost per token compared to traditional GPU clusters (YC company page). The vertical integration of hardware interconnects and inference software is designed to maximize hardware utilization and deliver performance comparable to Cerebras-speed inference but with horizontal scalability.

**Differentiation:** Unlike Cerebras, which achieves speed through monolithic wafer-scale integration (limiting scalability across nodes), and unlike Groq, which uses custom LPU ASICs, Piris Labs targets the interconnect layer with photonics while pairing it with purpose-built software. Compared to other photonic interconnect companies like Lightmatter (focused on co-packaged optics for chip-to-chip communication) and Ayar Labs (silicon photonics for I/O), Piris Labs differentiates by offering a full-stack inference service rather than component-level photonic hardware. The company positions itself as delivering an end-to-end inference platform rather than selling interconnect components to OEMs.

**Business Model:** No public pricing page was found on the company website (website showed only company name and tagline at time of research). The company is seeking AI product companies to scale inference workloads and recruiting chip makers and ODM partners for beta partnerships (Fondo blog, Feb 23, 2026). [Inferred]: Most likely monetization path is a consumption-based inference-as-a-service model (cost per token or per query), given the "2x lower cost per token" positioning and the full-stack service framing.

**TAM/SAM:** The photonic AI accelerator market was valued at $1.83 billion in 2025, with projected growth at 34.2% CAGR through 2033 (Navistrat Analytics via search snippet). The broader photonic AI accelerator chip market is forecast to reach $22.32 billion by 2033 at 35.8% CAGR (Growth Market Reports via search snippet). The overall inference-optimized chip market is projected to exceed $50 billion in 2026 (Deloitte, 2026 Semiconductor Industry Outlook via search snippet). Data center semiconductor TAM reached $209 billion in 2024 with projections to ~$500 billion by 2030 (Yole Group via search snippet).

**GTM / Distribution:** The company is actively seeking two channels: (1) AI product companies needing to scale inference workloads (contact@pirislabs.io), and (2) chip makers and ODM partners for beta partnerships (founders@pirislabs.io) (Fondo blog, Feb 23, 2026). [Inferred]: The initial GTM is likely direct enterprise sales to AI-native companies with large inference budgets, supplemented by hardware partnerships to integrate Piris photonic interconnects into existing data center equipment.

## Defensibility

The company's core technology involves proprietary photonic interconnects developed by an MIT-trained optical physicist (Ali Khalatpour) who previously developed the first room-temperature terahertz semiconductor laser and led NASA's GUSTO optical engine (MIT News, Dec 2018; optics.org, Aug 2017). The vertical integration of custom photonic hardware with inference-optimized software creates a potential compound moat: the hardware requires deep photonics expertise to replicate, and the software is co-designed to exploit the hardware's specific characteristics. Ali Khalatpour's academic publication record includes 16 research works with 572 citations (ResearchGate via search snippet), indicating substantive domain expertise in the underlying physics.

Today, defensibility rests primarily on technical complexity and founder domain expertise. Over time, defensibility could develop through proprietary manufacturing processes, performance benchmarks validated at customer scale, and switching costs once integrated into customer inference pipelines.

**Market structure:** The photonic interconnect space requires deep expertise in semiconductor physics, photonic device fabrication, and systems integration — a combination that is rare. Incumbents like NVIDIA are investing heavily in photonics ($4 billion invested in Lumentum and Coherent for manufacturing capacity, Tom's Hardware via search snippet) but are focused on component supply chains rather than full-stack inference services. NVIDIA's business model is centered on selling GPUs and networking hardware, creating a structural conflict with offering a competing inference-as-a-service platform that could cannibalize GPU sales. The DARPA "Fuse" project pairs Cerebras WSE chips with Ranovus photonic interconnects ($45M contract), indicating that even well-funded players are partnering rather than building photonics in-house.

**Commoditization risk:** Multiple well-funded companies are building photonic interconnect technology: Lightmatter ($850M total funding, $4.4B valuation), Ayar Labs ($500M Series E at $3.8B valuation, March 2026), and Celestial AI (acquired by Marvell for ~$3.25B, Dec 2025). However, these companies are primarily component/platform plays rather than full-stack inference services. The risk of commoditization at the interconnect layer is real, but Piris Labs' differentiation as a vertically integrated inference service (if sustained) provides a distinct competitive position. The primary commoditization risk comes from these well-capitalized competitors potentially expanding into full-stack offerings or from GPU vendors integrating photonic interconnects natively.

## Market & Traction

**Traction signals:**
- Launched on YC Launches on or around February 23, 2026 (Fondo blog, Feb 23, 2026)
- Launch video published: https://youtu.be/PW1PbMYw2c0 (Fondo blog)
- $500K raised (YC standard deal) (LinkedIn search snippet; PitchBook listing)
- Company LinkedIn page: linkedin.com/company/pirislabs — follower count not retrievable
- Ali Khalatpour Twitter/X: @Alipirislabs — joined January 2026, follower count not retrievable
- Keyvan Moghadam Twitter/X: @moghaddamkeyvan — follower count not retrievable
- No Product Hunt listing found
- No app store or Chrome extension presence (hardware/infrastructure product)
- No public revenue, user counts, or customer announcements found
- No Discord or Slack community found

**Competitive landscape:**

1. **Lightmatter** ($850M total raised, $4.4B valuation, revenue unknown). Develops photonic interconnects and co-packaged optics (Passage™ M1000). Differentiator vs. Piris Labs: sells photonic interconnect components/platforms to data center operators rather than offering a full-stack inference service. Partnering with Cadence and GUC for co-packaged optics solutions (Jan 2026).

2. **Ayar Labs** ($500M Series E, $3.8B valuation, revenue unknown). Silicon photonics startup backed by NVIDIA and AMD. Differentiator vs. Piris Labs: focuses on chip-to-chip optical I/O replacement of copper links as a component technology, not a vertically integrated inference service.

3. **Cerebras Systems** (raised over $700M total, revenue unknown publicly). Wafer-scale engine (WSE) for AI training and inference. Differentiator vs. Piris Labs: achieves speed through monolithic chip design rather than interconnects; Piris Labs claims comparable speed with greater scalability.

4. **Groq** ($750M raised in Sept 2025 at $6.9B valuation; ~$90M revenue in 2024 per Sacra estimate; acquired by NVIDIA for ~$20B in Dec 2025). Custom LPU inference chip. Differentiator vs. Piris Labs: purpose-built ASIC for inference rather than photonic interconnect approach; validated at commercial scale with inference API customers.

5. **Celestial AI** ($515M+ total raised, acquired by Marvell for ~$3.25B in Dec 2025). Photonic Fabric technology for disaggregating AI compute from memory. Differentiator vs. Piris Labs: focused on optical compute-memory fabric as a platform technology; now part of Marvell's broader chip portfolio.

**Why now:**
- Nvidia's $4B investment in photonic firms Lumentum and Coherent signals industry validation that copper interconnects are reaching physical limits (Tom's Hardware via search snippet).
- Marvell's $3.25B acquisition of Celestial AI (CNBC, Dec 2025) and NVIDIA's ~$20B acquisition of Groq (Dec 2025) demonstrate that large semiconductor companies see inference and photonic interconnects as strategically critical.
- Data center AI capital expenditure is projected at $400-450B globally in 2026 (Deloitte, 2026 Semiconductor Industry Outlook via search snippet), creating massive demand for inference infrastructure.
- [Inferred]: The scaling of trillion-parameter models (e.g., GPT-4-class and beyond) has made the memory wall problem commercially acute — these models cannot be served economically on standard GPU clusters, creating demand for alternative architectures.

## Founders & Team

**Ali Khalatpour** — Co-founder & CEO
- Ph.D. Electrical Engineering, MIT (2020), focused on THz photonics (MIT News)
- M.S. Physics, University of Toronto (2014) (search snippet via ResearchGate)
- Postdoctoral fellow at LINQS, Stanford University (Stanford LINQS page)
- Alumni of Capasso Group, Harvard (Harvard Capasso Group alumni page)
- Developed the first room-temperature terahertz semiconductor laser (MIT News, Dec 2018)
- Led development of GUSTO optical engine for NASA (optics.org, Aug 2017)
- 16 research works, 572 citations (ResearchGate via search snippet)
- Twitter/X: @Alipirislabs — joined January 2026, follower count not retrievable
- LinkedIn: linkedin.com/in/alikhalatpour
- GitHub: No public repos found

**Keyvan Rezaei Moghadam** — Co-founder & President
- Ph.D. Electrical Engineering, University of Southern California (USC personal page)
- AI scientist and engineering leader with experience building 0-to-1 AI infrastructure at Meta and Twitter/X (YC page, Fondo blog)
- Led tiger teams to launch high-stakes 0-to-1 initiatives at Meta and X (search snippet via LinkedIn)
- Academic publications in networking and mobile systems (DBLP)
- Twitter/X: @moghaddamkeyvan — follower count not retrievable
- LinkedIn: linkedin.com/in/keyvanrm (headline references Pinterest, likely prior role)
- GitHub: github.com/keyvanrm — repos include distirubtedMobileSensing and SetCoverSolverEngin; star counts not retrievable

**Co-founder relationship:** Both founders hold PhDs in Electrical Engineering (MIT and USC respectively). No shared prior employer or university overlap is visible from the research conducted.

**Founder-market fit:** The founding team combines deep photonics/optics expertise (Khalatpour: MIT PhD, NASA, Harvard, Stanford) with large-scale AI infrastructure engineering experience (Moghadam: Meta, Twitter/X). Khalatpour's specific background in terahertz semiconductor lasers and optical engines directly maps to designing photonic interconnects, while Moghadam's experience building AI infrastructure at Meta and X provides the systems engineering and ML deployment expertise needed for the software stack. This combination of photonic hardware science and AI infrastructure engineering is directly aligned with the company's full-stack photonic inference product.

## Key Risks

**Capital intensity vs. stage:** Developing proprietary photonic hardware requires significant capital for R&D, prototyping, and eventually manufacturing. Competitors in the photonic interconnect space have raised $500M–$850M (Ayar Labs, Lightmatter). With $500K in funding, Piris Labs faces a multi-order-of-magnitude funding gap relative to direct competitors. The path from prototype to production-grade photonic hardware typically requires substantial additional capital.

**Well-funded competitor encroachment:** Lightmatter ($850M), Ayar Labs ($500M Series E, NVIDIA-backed), and Marvell (via Celestial AI acquisition for $3.25B) are all building photonic interconnect technology with significantly more resources. NVIDIA's $4B investment in photonic manufacturing firms (Lumentum, Coherent) signals the GPU incumbent is investing in vertical integration of photonics rather than ceding the interconnect layer to startups.

**Hardware-software integration risk:** The company's value proposition depends on tight co-optimization between proprietary photonic hardware and inference software. Delays or technical challenges in either layer could compound, and the full-stack approach means there is no fallback to selling just one component. This is a single-point-of-failure architecture from a product delivery standpoint.

**Customer adoption barrier:** Enterprise data center operators and AI companies making infrastructure decisions face high switching costs and long evaluation cycles for novel hardware. Piris Labs must demonstrate not only performance parity or superiority but also reliability, supply chain stability, and integration compatibility — dimensions where incumbents have established track records.

**Technology validation gap:** The company's performance claims (5x lower latency, 10x lower power per bit, 2x lower cost per token) have not been independently validated or benchmarked by third parties in publicly available sources. Moving from lab-scale demonstrations to production-scale inference workloads involves significant engineering challenges.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Photonic AI accelerator market: $1.83B in 2025, 34.2% CAGR to 2033 (Navistrat Analytics via search snippet). Broader inference chip market: >$50B projected for 2026 (Deloitte via search snippet). |
| SAM | No public data found for Piris Labs' specific serviceable segment. |
| Traction | YC Launch ~Feb 23, 2026 (Fondo blog). No public users, customers, or revenue data found. |
| Revenue Signal | No public data found |
| Founders | Ali Khalatpour (CEO): MIT PhD, NASA GUSTO optical engine, first room-temp THz laser, Stanford/Harvard postdoc. Keyvan Rezaei Moghadam (President): USC PhD, AI infrastructure at Meta & Twitter/X. |
| Competitors | Lightmatter ($850M raised, revenue unknown, photonic interconnect components). Ayar Labs ($500M Series E, $3.8B val, revenue unknown, silicon photonics I/O). Cerebras (>$700M raised, revenue unknown, wafer-scale inference). Groq ($750M raised at $6.9B val, ~$90M 2024 rev per Sacra, LPU inference ASIC — acquired by NVIDIA ~$20B). Celestial AI ($515M+ raised, acquired by Marvell ~$3.25B, photonic fabric). |
| Moat Signals | Proprietary photonic hardware IP; founder with deep photonics domain expertise (MIT PhD, NASA, 572 citations); vertical hardware-software integration. |
| Risk Factors | Capital intensity gap vs. competitors, well-funded competitor encroachment, hardware-to-production validation gap |
| Founder Reach | Ali Khalatpour: Twitter @Alipirislabs (count not retrievable), LinkedIn linkedin.com/in/alikhalatpour. Keyvan Moghadam: Twitter @moghaddamkeyvan (count not retrievable), LinkedIn linkedin.com/in/keyvanrm, GitHub github.com/keyvanrm (star counts not retrievable). |
| Distribution Signals | YC Launch (Feb 2026). No Product Hunt listing, no app store presence, no community channels found. |
| Emails | contact@pirislabs.io, founders@pirislabs.io |
