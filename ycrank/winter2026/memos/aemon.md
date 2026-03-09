# Aemon

> The Forward-Deployed AI Research Engineer 

| Field | Value |
|-------|-------|
| Website | https://aemon.ai/ |
| YC Page | https://www.ycombinator.com/companies/aemon |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | B2B, AI |
| YC Partner | Jon Xu |
| Emails | founder@aemon.ai |

## The Idea

**Problem:** Engineering teams spend significant resources on R&D optimization — testing hypotheses, surveying literature, running experiments — across a global R&D market the company estimates at $3.1 trillion annually (YC LinkedIn post, 2025). Today, research engineers manually iterate on solutions constrained by human bandwidth: reading papers, writing code, running experiments one at a time. For computationally hard optimization problems (e.g., NP-hard combinatorics), humans and even standard AI coding tools cannot efficiently explore the solution space.

**Approach:** Aemon acts as an autonomous AI R&D engineer. Given an engineering problem and an evaluation metric, it: (1) reads codebases and surveys research literature to map the solution space; (2) generates hundreds of solution variants using evolutionary approaches; (3) evaluates variants against user-defined metrics, prunes dead ends, and recombines top performers generationally; (4) delivers production-ready code with evidence-backed justifications (aemon.ai). The system supports human-steerable autonomy, allowing mid-run constraint changes and objective refinements.

**Differentiation:** Unlike general-purpose AI coding agents (e.g., Cognition's Devin), which focus on software engineering tasks like writing features and fixing bugs, Aemon targets research-grade optimization — evolving thousands of approaches to discover solutions that exceed human-expert baselines. Unlike Google DeepMind's AlphaEvolve (internal, not commercially available), Aemon is a product sold to external engineering teams. Unlike Sakana AI's AI Scientist (focused on full scientific paper generation), Aemon focuses on producing deployable code solutions rather than academic outputs. The company claims it beat DeepMind's AlphaEvolve on circle packing (n=26) with under $10 of compute (aemon.ai; YC page).

**Business Model:** No pricing page is publicly available on aemon.ai. The website includes a "Book a Discovery Call" CTA, suggesting an enterprise sales motion. [Inferred]: Most likely monetization path is usage-based or subscription pricing for enterprise R&D teams, given the high-touch sales approach and B2B positioning.

**TAM/SAM:** The company references a "$3.1 trillion annual global R&D market" (YC LinkedIn post, 2025). The global AI for process optimization market was valued at $23.50 billion in 2025 (Precedence Research, 2025 via search snippet). No public SAM estimate specific to AI-driven R&D engineering automation was found.

**GTM / Distribution:** The website features a discovery call booking flow, indicating a direct enterprise sales approach. The YC LinkedIn post served as a distribution channel with 248 likes and 73 comments (LinkedIn, 2025). [Inferred]: Most likely initial distribution path is direct outreach to engineering-heavy organizations (tech companies, research labs, financial firms) needing optimization for specific technical problems, leveraging YC network and case study results.

## Defensibility

Aemon's primary defensibility signal is technical complexity: building an evolutionary code generation system that reliably outperforms human experts on hard optimization problems requires deep expertise in both AI/ML research and evolutionary algorithms. The founders published at ICLR and EMNLP before age 20 (YC page), indicating research depth.

A potential data/flywheel moat could develop over time as the system accumulates domain-specific solution patterns across customer engagements, but this is unproven at this stage.

**Market structure:** Google DeepMind's AlphaEvolve is the most capable comparable system but is used internally and not sold commercially. DeepMind's business model (research lab within Alphabet) creates a structural barrier to productizing this capability for external enterprise customers — selling a standalone R&D optimization tool would be peripheral to DeepMind's core mission. Cognition Labs and other AI coding agents focus on general software engineering, not research-grade optimization, creating a sales channel mismatch: their GTM targets software teams, not R&D teams.

**Commoditization risk:** The open-source OpenEvolve project (GitHub: codelion/openevolve) already replicates parts of AlphaEvolve's functionality. Sakana AI's ShinkaEvolve (accepted at ICLR 2026) combines LLMs with evolutionary algorithms for scientific discovery. Well-funded startups like Periodic Labs ($300M raised) and Lila Sciences ($550M raised) are building adjacent AI-for-science tools. As LLM capabilities improve, the barrier to building evolutionary code generation systems may lower. The core differentiator would need to be in the orchestration layer, evaluation framework, and accumulated domain knowledge rather than the base evolutionary approach.

## Market & Traction

**Traction signals:**
- World record claimed on circle packing (n=26), an NP-hard optimization problem, beating Google DeepMind's AlphaEvolve with <$10 of compute (aemon.ai; YC page). A separate report describes a student named "Alex" also beating AlphaEvolve on the same problem by a margin of 0.00006442 (36kr, 2025 via search snippet), suggesting the record may have been contested by multiple parties.
- Case study on legal retrieval optimization: Recall@10 improved from 0.540 to 0.912 (+68.9%), multi-hop accuracy reached 0.871 across 23 experiments (aemon.ai).
- YC LinkedIn announcement post: 248 likes, 73 comments (LinkedIn, 2025).
- Company X/Twitter: @Aemon_ai (follower count not retrievable due to JavaScript rendering).
- Company LinkedIn: linkedin.com/company/aemon-ai/ (follower count not retrievable).
- Richard Zhou LinkedIn: 1,720 followers (LinkedIn post, 2025).
- No Product Hunt listing found.
- No public revenue or user count data found.
- No app store, Chrome extension, or download count data found.
- No Discord/Slack community found.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Aemon |
|------------|---------|-------------|------------------------------|
| **Cognition Labs (Devin)** | ~$900M+ total; $400M at $10.2B valuation (TechCrunch, Sep 2025) | $155M ARR (Jul 2025, post-Windsurf acquisition) (Sacra via search snippet) | General-purpose AI software engineer for coding tasks; does not target research-grade optimization or evolutionary solution discovery |
| **Sakana AI** | ~$135M Series B; ~$2.6B valuation (Nov 2025 via search snippet) | Revenue unknown | AI Scientist generates full research papers autonomously; focuses on academic output rather than deployable production code |
| **Lila Sciences** | $550M total ($200M seed + $350M Series A); $1.3B+ valuation (Yahoo Finance, 2025 via search snippet) | Revenue unknown | Operates physical autonomous AI labs with robotic instruments; targets wet-lab scientific discovery, not software optimization |
| **Periodic Labs** | $300M seed (Sep 2025 via search snippet) | Revenue unknown | Founded by ex-DeepMind/OpenAI researchers; focuses on physical sciences discovery across disciplines |
| **Google DeepMind (AlphaEvolve)** | Internal (Alphabet-funded) | N/A (internal tool) | Most technically comparable system; not commercially available to external customers |

**Why now:** Google DeepMind released AlphaEvolve in May 2025 (DeepMind blog), demonstrating that LLM-powered evolutionary coding agents can make genuine mathematical and algorithmic discoveries. This validated the category. Simultaneously, frontier LLMs (Gemini, Claude, GPT-4+) crossed a capability threshold enabling reliable code generation and evaluation at scale. [Inferred]: The convergence of capable code-generating LLMs and demonstrated evolutionary search results (AlphaEvolve, FunSearch) created a window where a startup can build a commercially available product in a category that was previously only feasible inside large research labs.

## Founders & Team

**Yifei (Ray) Xu** — Co-founder
- UIUC CS dropout (YC page)
- Published at ICLR and EMNLP before age 20 (YC page)
- Twin brother of co-founder Richard Zhou
- Twitter/X: @yifei_m_xu found in search results, but not confirmed as this individual; count not retrievable
- LinkedIn: linkedin.com/in/yifei-ray-xu/ — headline: "Co-Founder - Stealth AI Startup" (LinkedIn via search snippet)
- GitHub: A profile "yfxu" (github.com/yfxu) exists for a "Yifei Xu" at University of Waterloo with 20 followers and 28 repos, but this may not be the same person given the YC page lists Ray Xu as UIUC-affiliated. No confirmed GitHub found.

**Richard Zhou** — Co-founder
- University of Waterloo CS dropout (YC page)
- International medalist in math and robotics (LinkedIn via search snippet)
- Published at ICLR and EMNLP before age 20 (YC page)
- Founder in Residence (FIR) at Afore Capital (LinkedIn via search snippet; ZoomInfo via search snippet)
- Twin brother of co-founder Ray Xu
- Wrote a LinkedIn post titled "Why I started a business at 20" reflecting on founding a company at age 20 (LinkedIn, Feb 2025)
- Twitter/X: No public account found
- LinkedIn: ca.linkedin.com/in/-richard-zhou- — headline: "Founder (YC W26), FIR @ Afore Capital" — 1,720 followers (LinkedIn post fetch)
- GitHub: No public repos found

**Third team member:** The team size is listed as 3 (YC page), but only two founders are named. No public information found on the third team member.

**Co-founder relationship:** Ray Xu and Richard Zhou are twin brothers (YC page). Both published at top AI conferences before turning 20, indicating a shared research background from an early age.

**Founder-market fit:** Both founders have demonstrated research ability in AI/ML through publications at ICLR and EMNLP before age 20, directly relevant to building a system that automates AI-driven research and optimization. Richard Zhou's international medals in math and robotics indicate quantitative problem-solving depth. Richard Zhou's FIR position at Afore Capital (a pre-seed-focused fund) suggests exposure to the startup ecosystem and investor networks. Their decision to drop out of top CS programs (UIUC, Waterloo) to build Aemon indicates full commitment.

## Key Risks

**Record claim contestability:** Aemon's primary credibility signal — the circle packing world record — exists in a competitive space. A separate individual ("Alex") was also reported to have beaten AlphaEvolve on the same problem (36kr, 2025 via search snippet). If the record is surpassed or contested, the company's core marketing claim weakens. Mitigation: the company also showcases applied case studies (legal retrieval optimization) that demonstrate practical value beyond record-setting.

**AlphaEvolve open-sourcing risk:** Google DeepMind has published the AlphaEvolve paper and results (arxiv.org/abs/2506.13131), and an open-source implementation (OpenEvolve) already exists on GitHub. If Google releases an official commercial or open-source version, or if open-source implementations mature, Aemon's core technology becomes more easily replicable. Mitigation: Aemon's value may lie in productization, domain-specific tuning, and customer support rather than the base algorithm.

**Heavily funded adjacent competitors:** Lila Sciences ($550M raised), Periodic Labs ($300M raised), and Cognition Labs ($900M+) operate in adjacent spaces with orders-of-magnitude more capital. If any of these pivot toward or expand into general-purpose AI R&D optimization for software, Aemon faces well-capitalized competition. Mitigation: these competitors currently target different niches (physical sciences, general coding).

**Narrow initial use-case proof:** Public demonstrations are limited to circle packing (a math benchmark) and one legal retrieval case study. Generalizability of the approach across diverse engineering domains has not been publicly validated. Enterprise buyers may require domain-specific proof points before adopting.

**Brand disambiguation:** "Aemon" is a common name in popular culture (Game of Thrones character) and shares namespace with "Aemon India" (a separate entity on Crunchbase) and various unrelated social media accounts (@_aemon, @Aemon_Oni). This may create SEO and brand recognition challenges.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3.1 trillion global R&D market (company claim, YC LinkedIn post, 2025); AI for process optimization market $23.50B in 2025 (Precedence Research, 2025 via search snippet) |
| SAM | No public data found |
| Traction | Circle packing world record claim with <$10 compute (aemon.ai); legal retrieval case study Recall@10 0.540→0.912 (aemon.ai); YC LinkedIn post 248 likes, 73 comments (LinkedIn, 2025) |
| Revenue Signal | No public data found |
| Founders | Ray Xu (Co-founder): UIUC CS dropout, ICLR/EMNLP publications before age 20. Richard Zhou (Co-founder): UWaterloo CS dropout, international medalist in math & robotics, ICLR/EMNLP publications before age 20, FIR at Afore Capital. |
| Competitors | Cognition Labs/Devin ($900M+ raised, $155M ARR, general AI coding agent); Sakana AI (~$135M Series B, $2.6B valuation, revenue unknown, AI Scientist for research papers); Lila Sciences ($550M raised, $1.3B+ valuation, revenue unknown, physical autonomous AI labs); Periodic Labs ($300M raised, revenue unknown, AI for physical sciences); Google DeepMind AlphaEvolve (internal, not commercial, most technically comparable) |
| Moat Signals | Technical complexity of evolutionary code optimization; founder research credentials (ICLR/EMNLP before age 20); potential data flywheel from customer engagements (unproven) |
| Risk Factors | AlphaEvolve open-sourcing/replication risk, heavily funded adjacent competitors, narrow public proof points |
| Founder Reach | Ray Xu: LinkedIn (linkedin.com/in/yifei-ray-xu/), Twitter not confirmed. Richard Zhou: LinkedIn 1,720 followers (ca.linkedin.com/in/-richard-zhou-), Twitter not found. Company: @Aemon_ai on X (count not retrievable), LinkedIn company page (count not retrievable) |
| Distribution Signals | YC W26 batch membership; YC LinkedIn post (248 likes, 73 comments); discovery call CTA on website; no Product Hunt listing found |
| Emails | founder@aemon.ai |
