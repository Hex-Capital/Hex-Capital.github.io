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

## The Idea

**Problem:** Formal verification — using mathematical proofs to guarantee that a system behaves as intended — provides stronger correctness guarantees than sampled testing but historically has not scaled. Researchers in quantum computing, finance, cryptography, aerospace, and other domains that require mathematical rigor currently rely on informal reasoning, simulation, or sampled testing, which cannot provide complete correctness guarantees. The Lean proof assistant allows any mathematical statement to be formally verified, but manually writing and checking proofs is labor-intensive, limiting adoption to narrow use cases (YC company page; caj.al website).

**Approach:** Cajal's core product is **Tau**, a multi-agent system that collaborates to discover and verify new mathematical proofs in Lean. Given a research direction, Tau autonomously formalizes large corpora of applied mathematics and discovers novel results with real-world applications — from algorithms with certified speedups to certificates that a system satisfies its constraints. Every result is machine-verified by Lean's type-checking kernel, guaranteeing correctness (caj.al website). The company also offers: (1) **Datasets** — verified training corpora for Lean 4, Coq, and Isabelle; (2) **Evaluations** — benchmarks with Pass@k metrics; and (3) **RL Environments** — native proof assistant bindings with sub-millisecond latency (caj.al website).

**Differentiation:** Cajal focuses on deploying AI-driven formal verification to applied scientific domains (quantum computing, finance) rather than pure mathematics competition problems or code verification. Harmonic AI ($1.45B valuation) uses Lean4 for its Aristotle model but has focused on competition mathematics (gold-medal level on 2025 IMO problems) (BusinessWire, Nov 2025). Axiom Math ($300M valuation) targets quantitative finance and general mathematical reasoning but with $164M+ in funding operates at a different scale (SiliconANGLE, Oct 2025). Theorem (YC S25, $6M seed) applies formal verification to AI-generated code correctness, a different application domain (VentureBeat, Jan 2026). LeanDojo is an open-source academic project (Caltech, NVIDIA, MIT, UCSB, UT Austin) providing toolkits and benchmarks for LLM-based theorem proving, not a commercial product (leandojo.org).

**Business Model:** No pricing page is visible on caj.al. The site lists Datasets, Evaluations, and RL Environments as product categories, suggesting a data/infrastructure offering for AI research teams. [Inferred]: Most likely monetization paths include enterprise licensing of Tau for domain-specific proof generation (quantum computing, finance), sale of verified training datasets, and API access to RL environments. The B2B tag and applied-domain focus suggest an enterprise SaaS or consulting model.

**TAM/SAM:** The global Formal Verification Copilot market reached $1.12B in 2024 and is projected to grow at 18.6% CAGR through 2033 (Dataintelo, 2024 via search snippet). The broader Software Verification Services market was estimated at $103.2B in 2024, growing to $303.4B by 2032 at 14.43% CAGR (WiseGuy Reports, 2024 via search snippet). The relevant SAM for Cajal — AI-driven formal verification applied to scientific domains — is a subset of these broader markets. No public SAM data specific to AI-for-formal-mathematical-verification was found.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct enterprise sales to quantum computing research labs, quantitative finance firms, and aerospace/defense organizations that require provable correctness guarantees. The datasets and RL environments suggest a secondary distribution channel targeting AI research teams training formal reasoning models. The YC network and Cambridge academic connections may provide initial customer introductions.

## Defensibility

Cajal's potential moat signals include: (1) **Technical complexity** — building multi-agent systems that can autonomously discover and formally verify novel mathematical results in Lean requires deep expertise at the intersection of AI, formal methods, and applied mathematics; (2) **Data advantage** — the verified training corpora (for Lean 4, Coq, and Isabelle) and benchmark evaluations could accumulate proprietary datasets over time; (3) **Domain specialization** — by targeting specific applied domains (quantum computing, finance), Cajal could build domain-specific formalization libraries that serve as switching costs for customers.

These are potential moat mechanisms; none are proven at this stage.

**Market structure:** Well-resourced incumbents like Google DeepMind (AlphaProof) focus on research publication and internal capabilities rather than commercial formal verification products. Harmonic AI and Axiom Math, the most direct competitors, target competition mathematics and general quantitative reasoning respectively, rather than applied scientific verification as a service. [Inferred]: The structural barrier for large AI labs is that productizing formal verification for specific applied domains (e.g., quantum computing correctness proofs) requires deep domain partnerships and specialized formalization libraries that don't align with their core business of training general-purpose models.

**Commoditization risk:** The formal verification + AI space is attracting significant capital: Harmonic AI ($295M+ total raised), Axiom Math ($164M+ total raised), and open-source projects like LeanDojo provide tooling that could lower barriers. DeepSeek has released open-source Lean4 prover models (VentureBeat, Nov 2025 via search snippet). The core Lean ecosystem is open-source. The risk of commoditization at the infrastructure layer is real; defensibility likely depends on proprietary domain-specific formalization libraries and customer relationships rather than the underlying proving technology.

## Market & Traction

**Traction signals:**
- No public revenue, user counts, or growth metrics found.
- No Product Hunt launch found.
- No company Twitter/X account found.
- LinkedIn company page exists at linkedin.com/company/cajal-technologies (follower count not retrievable).
- No public GitHub organization found for the company.
- No press coverage found beyond the YC listing.
- No job postings listed on YC page (YC company page).
- No app store presence, Chrome extension, or web traffic estimates found.
- The company was founded in 2025 and participated in YC W26; the founders previously worked together at Entrepreneurs First's program in Germany (SignalHire; RocketReach via search snippet).

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Cajal |
|-----------|---------|------------------------------|
| **Harmonic AI** | ~$295M total ($120M Series C at $1.45B valuation, Nov 2025) (BusinessWire, Nov 2025) | Focuses on competition mathematics and building toward "mathematical superintelligence"; gold-medal on 2025 IMO. Cajal targets applied scientific domains rather than pure math. Revenue unknown. |
| **Axiom Math** | $164M+ total ($64M at $300M valuation, Oct 2025) (SiliconANGLE, Oct 2025) | Targets quantitative finance and general mathematical reasoning; founded by Stanford math PhD. Cajal differentiates by offering formal verification products (datasets, benchmarks, RL environments) alongside discovery. Revenue: no revenue reported (Sacra via search snippet). |
| **Theorem** (YC S25) | $6M seed led by Khosla Ventures (VentureBeat, Jan 2026) | Applies formal verification to AI-generated code correctness (program equivalence). Cajal focuses on mathematical discovery and scientific applications rather than code verification. Revenue unknown. |
| **LeanDojo** (academic) | Not a funded startup; academic project (Caltech, NVIDIA, MIT, UCSB, UT Austin) | Open-source toolkits and benchmarks for LLM-based theorem proving. Cajal differentiates by offering a commercial product with multi-agent discovery capabilities and applied domain focus. |
| **Google DeepMind (AlphaProof)** | Internal research project (not separately funded) | Achieved IMO silver-medal level performance with Lean4 proofs. Not a commercial product. Cajal differentiates by offering productized B2B solutions. |

**Why now:** Two specific catalysts have converged: (1) Lean 4 matured as a practical formal verification framework, attracting significant investment ($10M in new funding for the Lean ecosystem from Alex Gerko in July 2025, split between Mathlib Initiative and Lean FRO) (VentureBeat, Nov 2025 via search snippet), and (2) LLM capabilities crossed a threshold for formal reasoning — Google DeepMind's AlphaProof achieved IMO silver-medal performance, and Harmonic's Aristotle achieved gold-medal performance on 2025 IMO problems, demonstrating that AI can now generate formally verified proofs at human-expert level. [Inferred]: These breakthroughs signal that the technology is ready for commercial application in applied domains, creating a window for startups to build domain-specific products before incumbents consolidate.

## Founders & Team

**Luke Johnston** — Co-founder
- Background in machine learning and neuroscience from Oxford, Cambridge, and UCL research labs (YC company page).
- Education details beyond the Oxford/Cambridge/UCL research affiliations: No public data found.
- Previous companies/exits: No public data found.
- Contact: luke@caj.al (caj.al website).
- Twitter/X: The handle @lukerjohnston on X belongs to a different individual (Luke Johnston, MD, MBA, FACS — a Navy General Surgeon). No confirmed Twitter/X account found for the Cajal founder.
- LinkedIn: linkedin.com/in/lukerjohnston/ — listed as founder at Cajal, San Francisco (LinkedIn via search snippet).
- GitHub: No confirmed public GitHub account found.

**Pedro Nobre** — Co-founder
- Education: University of Santiago de Compostela (ETSE, Computer Science), Universidad Politécnica de Madrid (UPM) (pedronobre.me).
- Previous roles: Co-founder at Vertebra (Sep 2022 – Sep 2024); Technology Consultant at Management Solutions (Jun 2022 – Feb 2023); Research Engineer at Inetum R&D (computer vision) (SignalHire; RocketReach; pedronobre.me via search snippet).
- Participated in Entrepreneurs First's program; previously presented Aptia, an AI platform for designing aptamers for early disease detection/cancer biomarkers (LinkedIn via search snippet).
- 1st place winner, HPE Tech Challenge (April 2022) — a three-stage competitive hackathon (pedronobre.me).
- Delivered computer vision workshop at Try It Congress UPM (April 2022) and presented on AI developments to ~500 attendees at a Vertebra/Barrié Foundation event (December 2022) (pedronobre.me).
- Contact: pedro@cajal.org (pedronobre.me).
- Twitter/X: No confirmed account found for this individual.
- LinkedIn: linkedin.com/in/pedronobree — Co-Founder at Cajal, San Francisco (LinkedIn via search snippet).
- GitHub: github.com/pedronobrol — 11 public repos, 8 followers. Bio: "Computer Science student at USC." Pinned repos include neuralume (full-stack air quality monitoring), aviato (AI-driven paper plane optimization, 2 stars), route-finder-app, safee (food toxicity detection), parkAI (vehicle detection) (GitHub).

**Co-founder relationship:** Both founders participated in Entrepreneurs First's program in Germany (a castle in Bückeburg) before co-founding Cajal, as noted on the YC page and in Pedro Nobre's work history (YC company page; SignalHire via search snippet). No shared prior employer or university was identified beyond the EF program.

**Founder-market fit:** Luke Johnston's research background in machine learning and neuroscience across Oxford, Cambridge, and UCL suggests exposure to formal mathematical reasoning and scientific computing, though specific publications or projects in formal verification were not found publicly. Pedro Nobre's background spans computer vision, AI/ML engineering, and a prior startup (Vertebra), with education in computer science from Spanish universities. Neither founder has a publicly documented track record specifically in formal methods or theorem proving; the connection to the Lean ecosystem and formal verification domain is not evidenced by prior publications or open-source contributions in public sources. No advisors, board members, or notable investors beyond YC and Diana Hu (YC partner) were found.

## Key Risks

**Well-funded direct competitors:** Harmonic AI ($295M+ raised, $1.45B valuation) and Axiom Math ($164M+ raised, $300M valuation) are pursuing closely adjacent problems with orders-of-magnitude more capital (BusinessWire, Nov 2025; SiliconANGLE, Oct 2025). Both use Lean4 and target mathematical reasoning with AI. If either pivots toward applied scientific domains, Cajal faces a direct resource disadvantage with no documented proprietary technology barrier.

**Brand disambiguation:** The name "Cajal" is shared by multiple entities: Cajal Therapeutics (biotech, PitchBook-listed), Cajal Neuroscience (Lux Capital-backed), CAJAL Training (neuroscience training programme affiliated with FENS), and the historical figure Santiago Ramón y Cajal. The GitHub organization "cajal" is already taken by the Cajal MICrONS Team (neuroscience research). This creates SEO, trademark, and customer discovery challenges.

**Open-source commoditization of core infrastructure:** The Lean ecosystem is open-source, LeanDojo provides free toolkits for LLM-based theorem proving, and DeepSeek has released open-source Lean4 prover models (VentureBeat, Nov 2025 via search snippet). The $10M in new Lean ecosystem funding (July 2025) accelerates open-source development. Cajal's differentiation depends on proprietary multi-agent orchestration and domain-specific formalization — neither of which has been publicly demonstrated or benchmarked.

**No publicly documented formal methods expertise:** Neither founder has publicly visible prior work, publications, or open-source contributions in formal verification, theorem proving, or the Lean ecosystem. The YC page describes backgrounds in "machine learning and neuroscience" (Luke Johnston) and AI/computer vision (Pedro Nobre). The connection from these backgrounds to building a formal verification company is not documented in public sources.

**Narrow initial market adoption path:** Quantum computing and quantitative finance — the stated initial domains — have small numbers of potential enterprise customers and long sales cycles. Quantum computing remains pre-commercial for most applications. The path from early research tool to recurring enterprise revenue in these domains is not straightforward.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.12B Formal Verification Copilot market (Dataintelo, 2024, 18.6% CAGR via search snippet); $103.2B broader Software Verification Services market (WiseGuy Reports, 2024, 14.43% CAGR via search snippet) |
| SAM | No public data found for AI-driven formal mathematical verification specifically |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Luke Johnston (Co-founder): ML/neuroscience research at Oxford, Cambridge, UCL. Pedro Nobre (Co-founder): CS from USC/UPM, ex-Vertebra co-founder, ex-Inetum R&D, Entrepreneurs First alum |
| Competitors | Harmonic AI (~$295M raised, revenue unknown, competition math focus vs. Cajal's applied science focus); Axiom Math ($164M+ raised, no revenue reported, quantitative finance/general math vs. Cajal's verification products); Theorem ($6M raised, revenue unknown, code verification vs. mathematical discovery); LeanDojo (academic/open-source, toolkits vs. commercial product) |
| Moat Signals | No public data found. Potential moat via domain-specific formalization libraries and proprietary multi-agent orchestration, unproven at this stage |
| Risk Factors | Well-funded direct competitors (Harmonic $1.45B, Axiom $300M valuations), open-source commoditization of Lean tooling, no publicly documented formal methods expertise on founding team |
| Founder Reach | Luke Johnston: Twitter not confirmed, LinkedIn linkedin.com/in/lukerjohnston/, GitHub not found. Pedro Nobre: Twitter not found, LinkedIn linkedin.com/in/pedronobree, GitHub github.com/pedronobrol (8 followers, 2 stars) |
| Distribution Signals | No public data found |
