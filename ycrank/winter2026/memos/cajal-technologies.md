# Cajal

> Scaling formal verification to accelerate scientific discovery

| Field | Value |
|-------|-------|
| Website | https://caj.al/ |
| YC Page | https://www.ycombinator.com/companies/cajal-technologies |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | B2B, Big Data, AI |
| YC Partner | Diana Hu |
| Emails | hi@caj.al, luke@caj.al (YC page); pedro@cajal.org (personal site) |

## The Idea

**Problem:** Large language models are fundamentally stochastic and cannot guarantee correctness (YC Launch page). Mission-critical domains — quantum computing, finance, cryptography, aerospace — require mathematical certainty that probabilistic AI systems cannot provide. Formal verification can deliver these guarantees, but has historically been restricted to small groups of expert mathematicians working over long timeframes, limiting its broader application (YC Launch page).

**Approach:** Cajal's core product is **Tau**, a multi-agent system that autonomously discovers and formalizes mathematical proofs in Lean (company website). Given a research direction, Tau formalizes large corpora of applied mathematics, discovering novel results with real-world applications — from algorithms with certified speedups to certificates that a system satisfies its constraints. All results are machine-verified through Lean's type-checking kernel (YC Launch page). The company also offers three ancillary products: (1) verified training datasets for Lean 4, Coq, and Isabelle; (2) rigorous evaluation benchmarks with Pass@k metrics; and (3) RL environments with native proof assistant bindings at sub-millisecond latency (company website).

**Differentiation:** Unlike general-purpose LLM reasoning systems (e.g., Harmonic AI's Aristotle), Cajal targets applied scientific domains rather than pure mathematics competition problems, starting with quantum computing and finance. Unlike Certora, which applies formal verification specifically to smart contracts, Cajal's scope spans multiple applied science verticals. Unlike academic projects such as LeanDojo, Cajal commercializes its system as a B2B product with datasets, evaluations, and RL environments for external customers (company website).

**Business Model:** No public pricing page was found on the company website. The company partners with "frontier AI labs and research institutes" and offers datasets, evaluations, and RL environments as product lines (YC Launch page, company website). [Inferred]: Most likely monetization path is enterprise licensing of datasets and API access to the Tau system, given the B2B positioning and the types of products listed.

**TAM/SAM:** The broader Software Verification Services Market was valued at USD 103.2 billion in 2024, projected to reach USD 303.4 billion by 2032, at a CAGR of approximately 14.43% (WiseGuy Reports, 2024 via search snippet). No public TAM/SAM data found for the specific AI-assisted formal verification subsegment.

**GTM / Distribution:** The company states it partners with frontier AI labs and research institutes (YC Launch page). The company website offers a demo booking page (/demo) and a contact page. [Inferred]: Most likely distribution path is direct sales to AI labs, research institutions, and enterprises in quantum computing and quantitative finance, given the highly technical nature of the product and its B2B positioning.

## Defensibility

**Technical complexity:** Formal verification in Lean requires deep expertise in dependent type theory, proof automation, and multi-agent AI systems. Cajal's Tau system combines autonomous mathematical reasoning with formal verification at scale, which represents a non-trivial engineering challenge (company website, YC Launch page). The company is affiliated with the University of Cambridge (company website), which may provide access to academic research talent.

**Data advantage:** Cajal's verified training corpora for Lean 4, Coq, and Isabelle (company website) could represent a growing proprietary data moat as the system formalizes more applied mathematics. Each proof discovered and verified adds to the corpus, potentially creating a compounding advantage.

**Market structure:** [Inferred]: Large incumbent EDA companies (Synopsys, Cadence) focus formal verification on hardware/chip design rather than applied mathematics for scientific discovery. Expanding into AI-driven mathematical proof discovery would represent a product category outside their core business and sales channel. General-purpose AI labs (OpenAI, Google DeepMind) are investing in mathematical reasoning but have not publicly productized formal verification for applied domains as a standalone B2B offering.

**Commoditization risk:** The underlying proof assistant (Lean) is open source, and multiple research groups are working on LLM-based theorem proving (LeanDojo from Caltech/NVIDIA/MIT, various university groups). Harmonic AI has raised $295M to pursue a related but broader "mathematical superintelligence" vision (BusinessWire, November 2025 via search snippet). The barrier to entry is the engineering effort to build and train multi-agent proof discovery systems, which is substantial but not insurmountable for well-funded competitors.

## Market & Traction

**Traction signals:**
- Company Twitter/X: @CajalResearch — 107 followers (X.com via search snippet, March 2026)
- LinkedIn company page: linkedin.com/company/cajal-technologies (LinkedIn via search snippet)
- YC Launch page posted (YC Launches, ~late February 2026)
- Y Combinator promotional tweet by @ycombinator mentioning @lukerj00 and @pedro_nobre0 (X.com via search snippet)
- 0 open job postings (YC page)
- No Product Hunt launch found
- No public revenue, user count, or customer data found
- No app store presence, Chrome extension, or download count data found
- No Discord or Slack community found

**Competitive landscape:**

1. **Harmonic AI** ($295M total funding, $1.45B valuation; Series C led by Ribbit Capital, November 2025; revenue unknown) (BusinessWire, November 2025 via search snippet; TechFundingNews via search snippet): Builds "Aristotle," an AI system targeting mathematical superintelligence with formal verification in Lean 4. Focuses on pure mathematical reasoning and achieved gold-medal-level performance on 2025 International Math Olympiad problems (VentureBeat via search snippet). Differentiator vs. Cajal: broader mathematical reasoning scope and significantly larger funding; Cajal differentiates by targeting applied science domains (quantum computing, finance) rather than competition mathematics.

2. **Certora** ($43.2M total funding; revenue unknown) (Crunchbase via search snippet): Founded 2018, Tel Aviv. Formal verification engine for blockchain smart contracts (Ethereum, Solana, Stellar). Has secured over $100 billion in total value locked across DeFi protocols (Certora blog, February 2025 via search snippet). Differentiator vs. Cajal: domain-specific to blockchain/smart contracts; Cajal targets broader applied science domains.

3. **Galois Inc** (private; funding and revenue unknown): Portland-based company specializing in formal verification for government and defense applications, with work across multiple proof assistants including Lean (GitHub via search snippet). Differentiator vs. Cajal: services-oriented model focused on government contracts; Cajal offers a product-oriented approach with autonomous proof discovery.

4. **LeanDojo** (academic project; no venture funding) (Caltech, NVIDIA, MIT, UC Santa Barbara, UT Austin): Open-source toolkit for LLM-based theorem proving in Lean, released under MIT license (arXiv, 2023 via search snippet). Differentiator vs. Cajal: research tool, not a commercial product; provides open-source infrastructure that could lower barriers for new entrants.

**Why now:**
- Lean 4, the latest version of the Lean proof assistant, has matured into a production-grade tool for formal verification, attracting both academic and commercial interest (VentureBeat via search snippet).
- LLM capabilities for mathematical reasoning have crossed a performance threshold, enabling autonomous proof discovery that was previously impractical (YC Launch page).
- [Inferred]: The convergence of scaled LLMs with formal verification frameworks has created a window where multi-agent systems can autonomously generate and verify proofs, whereas even two years ago, LLM mathematical reasoning was insufficient for this task.

## Founders & Team

**Luke Johnston** — Co-founder
- MPhil student at the Computational and Biological Learning Lab (CBL), University of Cambridge, focusing on meta-reinforcement learning in orienting behaviour (Cambridge CBL website). Background in machine learning and neuroscience from Oxford, Cambridge, and UCL (YC page).
- Twitter/X: @lukerj00 (from YC promotional tweet); follower count not retrievable
- LinkedIn: linkedin.com/in/lukerjohnston — Co-founder @ Cajal (YC W26), 500+ connections (LinkedIn via search snippet)
- GitHub: github.com/lukerj00 — 4 public repos, 1 follower. Bio: "Computational Neuroscience student at CBL, Cambridge." Repos include meta_rl_ego_sim (egocentric meta-RL simulation) and interneuron_project (GitHub)

**Pedro Nobre** — Co-founder
- Computer Science background from USC (University of Santiago de Compostela) and UPM (Universidad Politécnica de Madrid) (personal website). Research Engineer intern at Inetum R&D department (personal website). Winner of HPE Tech Challenge hackathon (April 2022), a three-stage competition across top Spanish universities awarded by Hewlett Packard Enterprise (personal website). Delivered "The New AI Paradigm" talk to ~500 attendees in December 2022 (personal website). Participated in Entrepreneurs First's The Bridge program (personal website).
- Twitter/X: @pedro_nobre0 (from YC promotional tweet); follower count not retrievable
- LinkedIn: linkedin.com/in/pedronobree (LinkedIn via search snippet)
- GitHub: github.com/pedronobrol — 11 public repos, 8 followers. Projects include neuralume (air quality monitoring system with PCB design and firmware), aviato (AI-driven paper plane optimization), and route-finder-app (A* metro routing) (GitHub)

**Co-founder relationship:** Both founders participated in Entrepreneurs First's The Bridge program, a residency held at a castle in Germany (YC Launch page mentions "first office in a castle in Germany"; Pedro Nobre's profile lists Entrepreneurs First). No shared university overlap was found — Luke studied at Cambridge/Oxford/UCL in the UK, while Pedro studied at USC and UPM in Spain.

**Founder-market fit:** Luke Johnston brings computational neuroscience and machine learning research experience from Cambridge's CBL, with specific expertise in reinforcement learning — directly relevant to building RL-based proof discovery agents. Pedro Nobre brings computer science and engineering experience with demonstrated interest in AI applications. The team's academic and technical backgrounds align with the interdisciplinary challenge of combining AI with formal mathematics, though neither founder has documented prior experience specifically in formal verification or theorem proving from public sources.

## Key Risks

**Resource asymmetry with primary competitor:** Harmonic AI has raised $295M at a $1.45B valuation (BusinessWire, November 2025 via search snippet) and is pursuing a closely related "mathematical superintelligence" vision with formal verification in Lean 4. Cajal's differentiation into applied science domains (vs. Harmonic's pure math focus) may narrow if Harmonic expands into applied verticals. Mitigation: Cajal's domain-specific focus on quantum computing and finance could allow faster product-market fit in those niches.

**Formal verification domain expertise gap:** Neither founder has documented public track record in formal verification, theorem proving, or Lean programming prior to Cajal. The company's core technology requires deep expertise in dependent type theory and proof automation. Mitigation: affiliation with University of Cambridge may provide access to relevant academic expertise.

**Name disambiguation:** "Cajal" shares its name with Cajal Neuroscience (a $96M-funded neurodegeneration therapeutics company — BioSpace via search snippet), the Cajal Institute (Spanish neuroscience research center), and CAJAL Advanced Neuroscience Training Programme. This creates brand confusion in search results and may complicate marketing and SEO.

**Narrow initial market:** Applied formal verification for quantum computing and quantitative finance represents a small number of potential enterprise customers. Expanding beyond these initial verticals to justify a venture-scale outcome will require demonstrating generalizability of the Tau system.

**Open-source foundation risk:** Lean is open source and actively supported by academic groups building competing tooling (LeanDojo, etc.). The barrier to building alternative multi-agent proof systems may decrease as open-source infrastructure matures, potentially enabling new entrants with lower R&D costs.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Software Verification Services Market: USD 103.2B in 2024, projected $303.4B by 2032, CAGR ~14.43% (WiseGuy Reports, 2024 via search snippet). No specific AI formal verification subsegment data found. |
| SAM | No public data found |
| Traction | @CajalResearch: 107 Twitter/X followers (X.com via search snippet, March 2026); YC Launch page posted (~late Feb 2026); 0 job postings (YC page) |
| Revenue Signal | No public data found |
| Founders | Luke Johnston (Co-founder): MPhil Cambridge CBL, ML/neuroscience background from Oxford, Cambridge, UCL. Pedro Nobre (Co-founder): CS from USC/UPM Spain, HPE Tech Challenge winner, EF Bridge alum. |
| Competitors | Harmonic AI ($295M raised, revenue unknown, broader mathematical superintelligence focus); Certora ($43.2M raised, revenue unknown, blockchain-specific formal verification); Galois Inc (private, revenue unknown, government-focused formal verification services); LeanDojo (academic, no funding, open-source toolkit) |
| Moat Signals | Technical complexity of multi-agent proof discovery; potential data moat from verified mathematical corpora; Cambridge affiliation |
| Risk Factors | Resource asymmetry with Harmonic AI ($295M funded), no documented prior formal verification expertise among founders, brand name disambiguation with Cajal Neuroscience |
| Founder Reach | Luke Johnston: Twitter @lukerj00 (count not retrievable), LinkedIn 500+ connections, GitHub 1 follower. Pedro Nobre: Twitter @pedro_nobre0 (count not retrievable), LinkedIn (via search snippet), GitHub 8 followers |
| Distribution Signals | Demo booking page on website; no Product Hunt launch, no app store presence, no community channels found |
| Emails | hi@caj.al, luke@caj.al (YC page); pedro@cajal.org (personal site) |
