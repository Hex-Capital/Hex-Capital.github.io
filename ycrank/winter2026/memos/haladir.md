# Haladir

> Building Operational Superintelligence.

| Field | Value |
|-------|-------|
| Website | https://www.haladir.com/ |
| YC Page | https://www.ycombinator.com/companies/haladir |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Reinforcement Learning, Operations |
| YC Partner | Diana Hu |
| Emails | founders@haladir.com (GitHub organization page) |

## The Idea

**Problem:** Large language models struggle with constrained optimization and operations research tasks. According to Haladir's ConstraintBench paper, the best frontier model achieves only 65.0% constraint satisfaction on optimization problems, and just 30.5% joint feasibility-and-optimality — with feasibility rates as low as 0.8% in complex domains like crew assignment (ConstraintBench, arXiv:2602.22465, Feb 2026). Domains such as logistics, supply chain management, and ERP systems require provably correct solutions that LLMs cannot currently deliver. Existing approaches either rely on traditional solvers (which lack natural-language interfaces and adaptability) or LLMs (which hallucinate constraints and produce infeasible solutions).

**Approach:** Haladir applies solver-based methods, SMT/SAT solvers, operations research, and formal verification to create verifiable reward signals for reinforcement learning. Their core mechanism bridges the gap between mathematical solvers and LLM training: solvers generate ground-truth optimal solutions, which are used as formally verified reward signals for RL training loops. Two published research projects illustrate this: (1) RLFR (Reinforcement Learning from Formally-Defined Rewards) for code generation, using formally verified reward signals to train coding models; and (2) ConstraintBench, a benchmark and RL environment for constrained optimization with solver-verified rewards spanning 10 operations research domains (company website; arXiv:2602.22465).

**Differentiation:** Haladir's approach differs from existing solutions in that it formalizes reward signals for domains where correctness has historically not been formally defined. Harmonic ($295M raised, $1.45B valuation; TechFundingNews, Jan 2026) focuses on mathematical superintelligence and formal proofs in pure mathematics, not operations research. Code Metal ($161.5M total raised, $1.25B valuation; SiliconANGLE, Feb 2026) uses formal verification for code translation across programming languages, not for RL training infrastructure. Haladir specifically targets the intersection of RLVR and operations research — making "the informal formal" to unlock RL in economically complex domains (YC company description).

**Business Model:** No pricing page or revenue model is publicly visible on the company website. [Inferred]: Given the research-infrastructure positioning and B2B focus, the most likely monetization paths are (a) API/platform access for RL training with verified rewards, (b) enterprise licensing for deploying verified optimization agents, or (c) managed services for specific verticals (logistics, supply chain).

**TAM/SAM:** No public TAM/SAM data found for the specific segment of "RLVR training infrastructure for operations research." Adjacent market: the global AI infrastructure market was valued at $58.78B in 2025 and is projected to reach $75.40B in 2026, growing at 26.60% CAGR to $497.98B by 2034 (Fortune Business Insights, 2025 via search snippet). The broader operations research / optimization software market is a subset that has not been independently sized for the AI-native segment Haladir targets.

**GTM / Distribution:** [Inferred]: Most likely distribution path is research-led GTM — publishing benchmarks (ConstraintBench) and open-source tools to establish credibility in the RLVR community, then converting enterprise interest in verified AI optimization into paid engagements. The ConstraintBench paper and OR-bench-sample GitHub repo serve as top-of-funnel for technical buyers in logistics, supply chain, and enterprise operations.

## Defensibility

Haladir's defensibility signals are currently research-stage. Their ConstraintBench benchmark (arXiv:2602.22465, Feb 2026) establishes a first-mover position in formally benchmarking LLM performance on constrained optimization with solver-verified rewards. The formalization of reward signals for operations research domains — translating informal business constraints into solver-checkable specifications — requires deep expertise at the intersection of operations research, formal methods, and RL. This combination is technically complex and relatively uncommon.

[Inferred]: Potential moat could develop via (a) accumulated formalization of domain-specific constraints across verticals (a data/IP advantage), (b) benchmark ownership creating a standard that others build against, and (c) switching costs if customers integrate Haladir's verified reward infrastructure into their training pipelines. These are unproven at this stage.

**Market structure:** Large AI labs (OpenAI, DeepSeek, Databricks) apply RLVR to math and code but have not publicly prioritized operations research formalization. [Inferred]: Incumbents in operations research software (e.g., Gurobi, IBM CPLEX) optimize solvers rather than LLM training, creating a business model divergence — building RL training infrastructure would be a different product line requiring different expertise. LLM labs focus on general reasoning rather than domain-specific OR formalization. This creates a structural gap, though no single barrier prevents either side from entering.

**Commoditization risk:** The RLVR methodology is well-documented in public research. The specific contribution — formalizing operational constraints as reward signals — could be replicated by teams with combined OR and ML expertise. Major AI labs with existing RLVR infrastructure could build similar capabilities if operations research becomes a priority training domain. The primary barrier is the specialized interdisciplinary knowledge required.

## Market & Traction

1. **Traction signals:**
   - ConstraintBench paper published on arXiv (Feb 25, 2026; arXiv:2602.22465), authored by all four founders
   - GitHub organization (github.com/haladir-com): OR-bench-sample repo (2 stars, last updated Feb 25, 2026); Specula fork (archived, 14 forks on original) (GitHub)
   - Twitter/X: @Haladirofficial — 8 followers, joined January 2026, no posts at time of research (X.com via search snippet)
   - LinkedIn company page: linkedin.com/company/haladir (LinkedIn)
   - Jibran Hutchins LinkedIn: 4,050 followers (LinkedIn funding announcement post)
   - LinkedIn funding announcement: 322 likes, 48 comments (LinkedIn post by Jibran Hutchins)
   - Funding: Pre-seed round with YC, Susa Ventures, SV Angel, and Joshua Browder (founder of DoNotPay) as investors (LinkedIn post by Jibran Hutchins). Funding amount not publicly disclosed.
   - No Product Hunt launch found
   - 0 job openings listed on YC page
   - No press coverage in named publications found

2. **Competitive landscape:**

   - **Harmonic** ($295M raised total; $1.45B valuation; Series C led by Ribbit Capital, Jan 2026; revenue unknown): Focuses on "mathematical superintelligence" and formal theorem proving. Launched Aristotle model achieving gold-medal-level performance on 2025 International Math Olympiad. Differentiator vs. Haladir: Harmonic targets pure mathematics and formal proofs; Haladir targets operations research and economically complex optimization. (TechFundingNews, Jan 2026; Yahoo Finance via search snippet)
   - **Code Metal** ($161.5M total raised; $1.25B valuation at Series B, Feb 2026; revenue unknown): AI-powered code translation using formal verification to fix hallucination bugs. Differentiator vs. Haladir: Code Metal focuses on cross-language code translation verification; Haladir focuses on RL training with formally defined rewards for operational domains. (SiliconANGLE, Feb 2026; CNBC, Nov 2025)
   - **Databricks** (public company; revenue $3.1B+ ARR as of 2025 via search snippet): Applied RLVR to achieve SOTA on BIRD SQL benchmark (73.5% test accuracy). Differentiator vs. Haladir: Databricks has broad ML platform scope and applies RLVR to specific tasks within its existing platform; Haladir is purpose-built for OR domain formalization. (Databricks Blog via search snippet)
   - **Labelbox / Toloka** (data labeling platforms): Provide RLVR pipeline infrastructure for data labeling and verifier development but do not build domain-specific formal reward functions. Differentiator vs. Haladir: general-purpose RLVR tooling vs. Haladir's domain-specific formalization of operational constraints.

3. **Why now:** [Inferred]: Two catalysts appear to have opened this opportunity: (a) The emergence of RLVR as a proven training paradigm in 2024–2025, demonstrated by DeepSeek R1 and OpenAI o3/o4-mini applying rule-based and verifiable rewards to improve reasoning (Promptfoo, arXiv via search snippets), extending beyond code and math to new domains; (b) frontier LLMs' documented failure at constrained optimization (Haladir's own ConstraintBench shows 65% feasibility, 30.5% joint optimality), creating demand for better training approaches in these domains. The specific enabling change is that RLVR has proven tractable for verifiable domains, and operations research offers natural verifiability through solvers — but nobody has yet built the bridge.

## Founders & Team

**Jibran Hutchins** — Co-founder & CEO
- Carnegie Mellon University, studying Business Administration and Statistics/Machine Learning (CMU Athletics page). Search results also reference Stanford (LinkedIn via search snippet — "dropped out of Stanford"), suggesting attendance at Stanford prior to or concurrent with CMU; details unclear.
- Built null_pointer (phone-to-Wii controller) at HackCMU (LinkedIn post)
- Publishes The Civic Liberalist on Substack
- Twitter/X: @JibranH12510791 (X.com via search snippet); follower count not retrievable
- LinkedIn: linkedin.com/in/jibran-hutchins-42500b26b — 4,050 followers (LinkedIn funding post)
- GitHub: No public personal repos found

**Quan Huynh** — Co-founder
- University of Virginia (LinkedIn via search snippet)
- Co-author of ConstraintBench (arXiv:2602.22465)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/quanmhuynh — 500+ connections (LinkedIn via search snippet)
- GitHub: No public repos found

**Joseph Tso** — Co-founder
- Princeton University, Computer Science (YC page, LinkedIn)
- Co-author of ConstraintBench (arXiv:2602.22465)
- Has a Google Scholar profile (ORCID: 0000-0001-5279-3557) and personal website tso.dev (GitHub profile)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/josephtso (LinkedIn)
- GitHub: github.com/jt914 — Pro account, 0 public repos, member of Haladir org (GitHub)

**Preston Schmittou** — Co-founder
- UVA Wise (YC page describes as "freshman")
- Co-author of ConstraintBench (arXiv:2602.22465)
- Twitter/X: No public account found
- LinkedIn: No public profile found
- GitHub: No public repos found

**Co-founder relationship:** Quan Huynh (University of Virginia) and Preston Schmittou (UVA Wise, an affiliate of UVA) share a University of Virginia system connection. No other overlapping employers or universities found among the founders based on Phase 3 research.

**Founder-market fit:** The team co-authored a peer-relevant research paper (ConstraintBench) demonstrating hands-on expertise at the intersection of operations research, formal verification, and LLM evaluation. Joseph Tso brings computer science credentials from Princeton with a research-oriented profile (ORCID, Google Scholar). The team's academic backgrounds span ML/statistics (Hutchins, CMU), computer science (Tso, Princeton), and engineering (Huynh, UVA). Investors include Joshua Browder, founder of DoNotPay, as an angel investor, alongside institutional backing from Susa Ventures and SV Angel (LinkedIn funding post).

## Key Risks

**Product-direction evolution:** The LinkedIn company page description (via search snippet) previously described Haladir as "an AI-powered mainframe modernization suite" for COBOL-to-modern-language migration, while the LinkedIn funding post emphasizes "AI-led software development" correctness, and the current website and YC page focus on "operational superintelligence" and RL for operations research. This sequence suggests the company's positioning has shifted at least once. Rapid reframing at pre-seed is common but makes it harder to assess product-market fit stability.

**Research-to-product gap:** Haladir's public outputs are research artifacts (an arXiv paper, a benchmark, a sample repo with 2 GitHub stars) rather than a deployable product with paying customers. Translating ConstraintBench into a commercial offering with a clear buyer and pricing model is an unvalidated step. No revenue signals, customer names, or product demos were found.

**Well-funded adjacent competitors:** Harmonic ($295M) and Code Metal ($161.5M) operate in adjacent formal-verification-for-AI spaces with substantially more capital. If either expands into operations research formalization, Haladir would face well-resourced competition. Major AI labs (OpenAI, DeepSeek) already apply RLVR to verifiable domains and could extend to operations research.

**Founding team experience:** All four founders appear to be current or recent university students (CMU, Princeton, UVA/UVA Wise). No prior startup exits, industry operating experience, or senior technical roles were found in public sources. The team's domain credibility rests primarily on the ConstraintBench publication.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI infrastructure market: $58.78B in 2025, projected $497.98B by 2034 at 26.60% CAGR (Fortune Business Insights, 2025 via search snippet). No specific TAM for RLVR/OR training infrastructure. |
| SAM | No public data found |
| Traction | ConstraintBench paper on arXiv (Feb 2026); GitHub OR-bench-sample repo (2 stars); @Haladirofficial 8 Twitter followers (via search snippet); LinkedIn funding post 322 likes, 48 comments |
| Revenue Signal | No public data found |
| Founders | Jibran Hutchins (CEO): CMU, Business Admin & Stats/ML. Quan Huynh: UVA. Joseph Tso: Princeton, CS, Google Scholar profile. Preston Schmittou: UVA Wise. |
| Competitors | Harmonic ($295M raised, revenue unknown, pure-math formal proofs vs. Haladir's OR focus); Code Metal ($161.5M raised, revenue unknown, code translation verification vs. Haladir's RL training); Databricks (public, $3.1B+ ARR, broad ML platform applying RLVR to specific benchmarks) |
| Moat Signals | First benchmark (ConstraintBench) for LLM constrained optimization with solver-verified rewards; interdisciplinary OR + formal methods + RL expertise |
| Risk Factors | Product-direction evolution (multiple positioning shifts), research-to-product gap (no commercial product found), well-funded adjacent competitors |
| Founder Reach | Jibran Hutchins: LinkedIn 4,050 followers, Twitter @JibranH12510791 (count not retrievable). Other founders: no significant public social presence found. |
| Distribution Signals | No Product Hunt launch; no app store presence; no Chrome extension; GitHub org has 3 followers |
| Emails | founders@haladir.com (GitHub organization page) |
