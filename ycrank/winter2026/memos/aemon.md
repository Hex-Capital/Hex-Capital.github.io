# Aemon

> The AI R&D Engineer 

| Field | Value |
|-------|-------|
| Website | https://aemon.ai/ |
| YC Page | https://www.ycombinator.com/companies/aemon |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, B2B |

## The Idea

**Problem:** Engineering and scientific R&D teams face NP-hard optimization problems — in areas like algorithm design, retrieval systems, and mathematical optimization — where the solution space is too vast for human researchers to explore exhaustively. Current approaches rely on manual experimentation, domain expert intuition, and limited computational searches. Existing tools like Google DeepMind's AlphaEvolve (released May 2025) have demonstrated AI-driven algorithmic discovery but remain internal to Google and unavailable as a commercial product.

**Approach:** Aemon operates as an autonomous R&D agent that reads codebases and published research, maps solution spaces, then generates and evaluates hundreds of solution variants against user-defined evaluation metrics. It uses an evolutionary approach — scoring variants, pruning dead ends, and advancing the frontier generation-by-generation — to iteratively self-improve. The system is described as "human-steerable," allowing domain experts to add constraints or adjust priorities mid-run, and it outputs production-ready, evidence-backed solutions (aemon.ai).

A demonstrated use case is legal retrieval optimization, where Aemon improved recall@10 from 0.540 to 0.912 (+68.9%), solving all 50 failing test cases in multi-hop queries (aemon.ai). The company also claims to have set a world record on the circle packing problem (n=26, an NP-hard optimization problem), beating Google DeepMind's AlphaEvolve result using less than $10 of compute (aemon.ai, YC company page). Independent third-party attribution of this specific record to Aemon was not found in public sources; a separate 36kr article attributes a circle packing record (score of 2.63592717 for n=26, surpassing AlphaEvolve's 2.63586275) to a student named "Alex" using a framework called "Tactical Maniac v0.5" (36kr, 2025 via search snippet).

**Differentiation:** Unlike Google DeepMind's AlphaEvolve, which is not commercially available and operates internally to optimize Google infrastructure, Aemon is being built as a product for external engineering teams. Unlike Sakana AI's "AI Scientist" ($479M raised, $2.65B valuation), which attempts to automate the full research lifecycle end-to-end (hypothesis generation through paper writing), Aemon focuses on delivering optimized engineering solutions against specific evaluation metrics rather than generating papers. Unlike Periodic Labs ($300M seed), which pairs AI with physical robotic laboratories for materials science, Aemon operates purely in the computational/algorithmic domain.

**Business Model:** No pricing page is visible on aemon.ai. The website features a "Book a Discovery Call" CTA and an early-access form at aemon.ai/early-access, suggesting a sales-led or waitlist-gated go-to-market. [Inferred]: Most likely monetization path is consumption-based or per-project pricing for R&D engagements, or a SaaS subscription for ongoing access to the platform, given the B2B positioning and discovery call approach.

**TAM/SAM:** The Global AI for Scientific Discovery Market was valued at $4.72B in 2025 and is projected to reach $34.20B by 2035, growing at a 21.9% CAGR (Market.us, 2025 via search snippet). North America held a 38.84% share ($1.83B) in 2025 (Market.us, 2025 via search snippet). No public SAM data found specific to the computational/algorithmic R&D segment Aemon targets.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct enterprise sales, starting with engineering teams at companies facing optimization-heavy R&D challenges (logistics, retrieval systems, infrastructure optimization). The "Book a Discovery Call" CTA and early-access waitlist suggest a high-touch sales motion targeting early design partners. The circle packing demonstration serves as a credibility signal for inbound interest from technical buyers.

## Defensibility

Aemon's claimed circle packing result (beating AlphaEvolve with <$10 compute) suggests algorithmic efficiency advantages in its evolutionary search approach, though the specific techniques are not publicly documented. The company's founders have published at ICLR and EMNLP, which may translate into proprietary research methods embedded in the product. As the system runs more optimization tasks across diverse domains, accumulated knowledge of solution patterns and search heuristics could build a data advantage over time.

**Market structure:** Google DeepMind's AlphaEvolve is the closest technical analog but is used internally to optimize Google's own infrastructure (e.g., Borg cluster scheduling, Gemini training kernels). Productizing it externally would require Google to build a commercial offering and support external engineering workflows — a different business model from their research lab structure. This creates a window for a dedicated product company. However, no structural barrier prevents Google from commercializing AlphaEvolve or a similar system if the market proves large enough.

**Commoditization risk:** Multiple open-source implementations of AlphaEvolve-like systems already exist: OpenEvolve (github.com/algorithmicsuperintelligence/openevolve), ThetaEvolve, and ShinkaEvolve have all demonstrated competitive results on benchmark problems. The circle packing problem specifically has seen multiple independent teams surpass AlphaEvolve's results. The underlying evolutionary search paradigm using LLMs is well-documented in published research. Differentiation would need to come from domain-specific engineering, reliability at scale, and product quality rather than from the core algorithmic approach alone.

## Market & Traction

**Traction signals:**
- YC Winter 2026 batch member (YC company page)
- Circle packing world record claim: beating DeepMind's AlphaEvolve on n=26 with <$10 compute (aemon.ai, self-reported)
- Legal retrieval optimization case study: recall@10 improved from 0.540 to 0.912 (+68.9%) (aemon.ai)
- Company Twitter/X account: No public account found
- Company LinkedIn: No dedicated company page found; Richard Zhou's LinkedIn headline lists "Founder (YC W26)" (LinkedIn search snippet)
- Product Hunt: No listing found
- Discord/Slack community: No public data found
- App store / Chrome extension: Not applicable (web-based product)
- Revenue: No public data found
- User/waitlist counts: No public data found

**Competitive landscape:**

1. **Google DeepMind AlphaEvolve** (internal tool, not separately funded): Evolutionary coding agent using Gemini ensemble models. Achieved results on circle packing, matrix multiplication (broke 56-year record), and optimized Google's Borg scheduling system. Key differentiator vs. Aemon: operates at Google scale with access to frontier Gemini models, but is not commercially available externally. (DeepMind blog, May 2025)

2. **Sakana AI** ($479M total raised, $2.65B valuation as of Series B in Nov 2025; revenue not publicly disclosed; TechCrunch, Nov 2025): Tokyo-based "AI Scientist" that automates the full research lifecycle from hypothesis generation to paper writing. Key differentiator vs. Aemon: broader scope (end-to-end research automation) but independent evaluations found "critical shortcomings" in its literature review and novelty assessment capabilities (arXiv, Feb 2025).

3. **Periodic Labs** ($300M seed, ~$1.5B+ valuation; revenue not publicly disclosed; TechCrunch, Oct 2025): Co-founded by former OpenAI VP of Research Liam Fedus and former DeepMind researcher Ekin Dogus Cubuk. Builds AI models paired with robotic laboratory systems for physical science discovery, starting with superconductors. Key differentiator vs. Aemon: focuses on physical-world experimentation with hardware labs, vs. Aemon's purely computational approach.

4. **Confluence Labs** (YC W26, team of 2; funding limited to YC standard deal): AI research lab focused on learning efficiency in data-sparse domains (molecular design, materials science). Achieved SOTA on ARC-AGI-2 benchmark (97.9% at $11.77/task). Key differentiator vs. Aemon: focused on data-sparse scientific domains, vs. Aemon's focus on engineering optimization problems.

5. **OpenEvolve** (open-source, no commercial entity): Open-source implementation of AlphaEvolve available on GitHub. Multiple contributors have reproduced and surpassed AlphaEvolve results on benchmark problems. Key differentiator vs. Aemon: free and open-source, but lacks productization, support, and integrated workflows.

**Why now:** [Inferred]: The release of Google DeepMind's AlphaEvolve in May 2025 demonstrated that LLM-powered evolutionary search can produce state-of-the-art results on hard optimization problems, validating the approach. Simultaneously, frontier LLM capabilities (code generation, reasoning) crossed a performance threshold in 2024-2025 that makes autonomous iterative code generation and evaluation viable. The rapid cost reduction in LLM inference (driven by competition among providers) makes running thousands of evolutionary iterations economically feasible — as evidenced by Aemon's claim of <$10 compute for a world-record result.

## Founders & Team

**Ray Xu** — Co-founder
- Full name: Yifei (Ray) Xu (LinkedIn search snippet)
- Education: University of Illinois at Urbana-Champaign (UIUC), dropped out (YC company page)
- Published at ICLR 2025 and EMNLP 2024 before age 20 (YC company page; LinkedIn search snippet noting "publications at EMNLP 2024 Main and ICLR 2025")
- Research focus: LLM, RAG, and Code + Information Retrieval (LinkedIn search snippet)
- Previously: Founder in Residence at Afore Capital (LinkedIn search snippet)
- Twitter/X: No public account found linked to Aemon
- LinkedIn: linkedin.com/in/yifei-ray-xu/ — headline "Co-Founder - Stealth AI Startup" (LinkedIn search snippet)
- GitHub: No public repos found linked to Aemon

**Richard Zhou** — Co-founder
- Education: University of Waterloo, Computer Science, dropped out (YC company page)
- International medalist in mathematics and robotics (YC company page)
- Published at top AI conferences (ICLR, EMNLP) before age 20 (YC company page)
- Previously: Founder in Residence at Afore Capital (LinkedIn search snippet)
- Age 20 at time of founding (LinkedIn post, Feb 2025)
- Twitter/X: No public account found linked to Aemon; @richczhou on Instagram (search result) but no posts confirmed related to Aemon
- LinkedIn: ca.linkedin.com/in/-richard-zhou-/ — headline "Founder (YC W26), FIR @ Afore Capital" — 1,537 followers (LinkedIn post page, Feb 2025)
- GitHub: No public repos found linked to Aemon

**Co-founder relationship:** Ray Xu and Richard Zhou are described as twin brothers on the YC company page. Both served as Founders in Residence at Afore Capital prior to building Aemon.

**Founder-market fit:** Both founders published at top-tier AI conferences (ICLR, EMNLP) before age 20, demonstrating precocious research ability directly relevant to building an AI R&D product. Richard's international medals in mathematics and robotics provide domain grounding in optimization problems. Their research backgrounds in LLM applications, information retrieval, and code generation map directly to Aemon's core technical approach of using LLMs for evolutionary algorithm discovery. The Afore Capital Founder in Residence program suggests they had incubation support and mentorship prior to YC.

## Key Risks

**Brand disambiguation:** "Aemon" is a widely recognized name from the Game of Thrones franchise (Maester Aemon / Aemon Targaryen), which dominates search results for the term. Multiple X/Twitter accounts, fan wikis, and media references use the name. This creates SEO challenges and potential confusion when prospects search for the company. The company also operates under both aemon.ai and tryaemon.com domains.

**Open-source replication of core technique:** Multiple open-source projects (OpenEvolve, ThetaEvolve, ShinkaEvolve) have replicated and in some cases surpassed AlphaEvolve's benchmark results. ShinkaEvolve reportedly achieved the circle packing benchmark in 150 samples vs. 1,000–5,000 for baselines (search snippet). The evolutionary LLM search paradigm is well-documented in published research, lowering the barrier for competitors or potential customers to build in-house.

**Benchmark-to-product gap:** Aemon's primary public proof point is a benchmark result (circle packing) and one case study (legal retrieval). Converting benchmark demonstrations into repeatable, production-grade workflows across diverse engineering domains requires significant product engineering. The circle packing problem specifically has become a competitive "leaderboard" where multiple teams regularly surpass prior records, potentially diminishing its signal value over time.

**Incumbent entry risk:** Google DeepMind could commercialize AlphaEvolve or a derivative product, bringing vastly superior compute resources, frontier model access, and existing enterprise relationships. AlphaEvolve already powers production systems within Google (Borg scheduling, Gemini training optimization), demonstrating real-world applicability (DeepMind blog, May 2025).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $4.72B AI for Scientific Discovery market in 2025, projected $34.20B by 2035 at 21.9% CAGR (Market.us, 2025 via search snippet) |
| SAM | No public data found for computational/algorithmic R&D subsegment |
| Traction | YC W26 member; circle packing world record claim (self-reported, aemon.ai); legal retrieval case study showing +68.9% recall improvement (aemon.ai) |
| Revenue Signal | No public data found |
| Founders | Ray Xu (Co-founder): UIUC dropout, ICLR 2025 / EMNLP 2024 publications, ex-FIR Afore Capital. Richard Zhou (Co-founder): UWaterloo dropout, international math & robotics medalist, ICLR/EMNLP publications, ex-FIR Afore Capital |
| Competitors | Google DeepMind AlphaEvolve (internal tool, not separately funded, frontier Gemini models); Sakana AI ($479M raised, $2.65B valuation, revenue unknown, broader end-to-end research automation); Periodic Labs ($300M seed, ~$1.5B valuation, revenue unknown, physical-world labs + AI); Confluence Labs (YC W26, ~$500K YC deal, revenue unknown, data-sparse scientific domains) |
| Moat Signals | No public data found; potential algorithmic efficiency advantage suggested by <$10 compute claim but not independently verified |
| Risk Factors | Open-source replication of core evolutionary search technique, brand disambiguation with Game of Thrones "Aemon," incumbent entry risk from Google DeepMind |
| Founder Reach | Ray Xu: Twitter not found, LinkedIn linkedin.com/in/yifei-ray-xu/ (count not retrievable), GitHub not found. Richard Zhou: Twitter not found, LinkedIn ca.linkedin.com/in/-richard-zhou-/ 1,537 followers, GitHub not found |
| Distribution Signals | No public data found (no Product Hunt listing, no app store presence, no social media accounts for company) |
