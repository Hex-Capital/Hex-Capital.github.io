# Traverse

> Data research company building RL envs for non-deterministic work

| Field | Value |
|-------|-------|
| Website | https://www.traverse.so |
| YC Page | https://www.ycombinator.com/companies/traverse |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Reinforcement Learning |
| YC Partner | Jared Friedman |
| Emails | founders@traverse.so, zach@traverse.so (Zachary Yu personal website) |

## The Idea

**Problem:** Reinforcement learning has driven breakthroughs in deterministic domains like math and coding, but most economically valuable work — medicine, law, business strategy — involves ambiguity and subjective judgment. Building verification systems (reward models / verifiers) for these non-deterministic domains remains largely unsolved because determining whether a doctor made the right call or a lawyer constructed a convincing argument is "a matter of taste, and taste is hard to formalize" (traverse.so). Frontier AI labs and enterprises currently lack high-quality RL environments for these subjective domains; existing RL environment providers focus predominantly on coding tasks.

**Approach:** Traverse builds and sells reinforcement learning environments specifically designed for non-deterministic, taste-dependent work. The company positions itself as a "data research company" that combines deep domain expertise with understanding of how models learn to construct training environments where verification itself is ambiguous. The focus is on "long-horizon agent journeys" — multi-step tasks that require sustained reasoning and judgment over extended sequences (YC page, traverse.so).

**Differentiation:** Most RL environment competitors (Idler, Poolside, portions of Mercor and Scale AI's offerings) focus on coding and software engineering tasks, where verification is relatively straightforward (code either compiles/passes tests or doesn't). Traverse targets the harder problem of non-deterministic domains where the verifier itself must encode subjective judgment. This requires both domain expertise and ML understanding — a combination the company claims is rare and difficult to assemble (traverse.so).

**Business Model:** No pricing page is publicly available. [Inferred]: Based on how competitors in this space operate (Mercor, Surge AI, Scale AI, Idler), the most likely monetization path is B2B contracts selling RL environment datasets and infrastructure to frontier AI labs (Anthropic, OpenAI, etc.) and enterprises on a project or subscription basis. Idler, a comparable YC company, has closed "multimillion-dollar contracts" with frontier labs (YC page for Idler), suggesting this price range is typical for the category.

**TAM/SAM:** The global reinforcement learning market was valued at $12.43B in 2025 and is projected to reach $111.11B by 2033 at a 31.6% CAGR (Grand View Research, 2025 via search snippet). An alternative estimate puts the market at $13.52B in 2025, growing to $36.75B by 2029 at 28.4% CAGR (Research and Markets, 2025 via search snippet). The specific sub-segment of RL environments sold to AI labs is smaller but growing rapidly: Anthropic alone is estimated to spend "tens of millions annually" on RL environments across vendors, with aggregate lab spend expected to grow 3–5× into 2026 (Wing Venture Capital, 2025). OpenAI has signed "multiple seven-figure RL-environment and human-data contracts" (TechCrunch, Sep 2025).

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct sales to frontier AI labs (Anthropic, OpenAI, Google DeepMind) and enterprises building AI agent products. The company website states it sells "to frontier AI labs and enterprises." Lance Yan's announcement tweet invited "researchers who've been thinking about long-horizon agents" to reach out (X.com/@lanceyyan), suggesting a relationship-driven sales motion targeting ML research teams. The GitHub organization's "take-home" repo (github.com/traverse-so) suggests an active hiring/prospect evaluation pipeline.

## Defensibility

The primary defensibility signal is the claimed difficulty of combining deep domain expertise in non-deterministic fields (medicine, law, etc.) with understanding of how RL models learn. Traverse argues this combination is rare and constitutes a quality moat — the environments are only as good as the domain understanding and ML expertise used to construct them.

No patents, proprietary datasets, or network effects are publicly evident at this stage.

**Market structure:** [Inferred]: Well-resourced incumbents in the RL environment space (Surge AI, Scale AI, Mercor) have built their businesses around scalable, workforce-intensive data labeling and coding-focused RL environments. Expanding into non-deterministic domains requires fundamentally different verification approaches that may not scale with their existing crowd-sourced workforce models. The subjective nature of verification in domains like medicine and law requires specialized domain experts rather than general-purpose annotators, creating a potential unit economics incompatibility for incumbent crowd-sourcing platforms. However, this structural barrier is unproven — incumbents like Mercor are already listing "healthcare" and "law" among their target domains (TechCrunch, Sep 2025).

**Commoditization risk:** The RL environments space is attracting significant capital and talent. Applied Compute ($100M raised, ex-OpenAI team), Idler (YC S25, 14 employees), HUD (YC W25), and open-source frameworks like Nous Research's Atropos all compete for the same buyer set. However, most focus on coding/deterministic tasks. If Traverse can establish quality leadership in non-deterministic domains, the domain expertise required to replicate environments for medicine, law, and similar fields may serve as a partial barrier. The risk remains that well-funded competitors expand into non-deterministic domains with larger teams.

## Market & Traction

**Traction signals:**
- No public revenue, user count, or customer metrics disclosed (traverse.so, YC page).
- GitHub organization (github.com/traverse-so): 2 public repos, 0 stars, 7 followers (GitHub, Feb 2026).
- Company Twitter/X: @traverseso — follower count not retrievable (JavaScript-rendered page).
- Lance Yan Twitter/X: @lanceyyan — approximately 1,584 followers (via search snippet).
- Zachary Yu Twitter/X: @thezacharyyu — count not retrievable.
- Lance Yan GitHub: github.com/lance116 — 17 repos, 83 followers (GitHub).
- Zachary Yu GitHub: github.com/zach3141592 — 29 repos, 125 followers (GitHub).
- LinkedIn company page: linkedin.com/company/traverse-so (LinkedIn via search snippet).
- Ashby jobs page linked from website (jobs.ashbyhq.com/Traverse), though company_data indicates is_hiring: false.
- No Product Hunt launch found.
- No press coverage found in named publications.

**Pivot note:** The same founders (Lance Yan and Zachary Yu) previously operated Clice AI, also listed as YC W26, described as "the communication OS for loan officers" — an AI agent platform for the lending industry (YC page for Clice AI). Both founders' LinkedIn profiles now list Traverse (YC W26) as their current company. Clice AI's YC page remains active, suggesting the pivot occurred during the YC W26 batch. All traction metrics above pertain to Traverse; no Clice AI traction is included.

**Competitive landscape:**

1. **Mercor** — $350M Series C at $10B valuation (TechCrunch, Oct 2025), ~$450–500M annualized run rate (TechCrunch, Sep 2025). Builds RL environments for domain-specific tasks including coding, healthcare, and law. Key differentiator vs. Traverse: massive scale, workforce of domain experts, and multi-domain coverage. Direct overlap on non-deterministic domains.

2. **Surge AI** — Bootstrapped to $1.2B in revenue (TechCrunch, Sep 2025 via search snippet), seeking up to $1B at $15–25B valuation (Reuters/Yahoo Finance, Jul 2025 via search snippet). Recently created a dedicated RL environments organization. Key differentiator vs. Traverse: established relationships with all major AI labs (OpenAI, Google, Anthropic, Meta), massive scale.

3. **Applied Compute** — $100M raised ($80M Series A at ~$700M valuation, Oct 2025) (SiliconANGLE, Oct 2025 via search snippet). Founded by ex-OpenAI researchers. Forward-deployed RL environments for enterprise AI training. Key differentiator vs. Traverse: pedigreed founding team from OpenAI's reasoning and RL teams, significantly more capital.

4. **Idler (YC S25)** — RL environments for coding tasks, 14 employees, closed a "multimillion-dollar contract" with a leading foundation lab (YC page for Idler). Key differentiator vs. Traverse: focused on coding (deterministic), larger team, existing lab contract.

5. **HUD (YC W25)** — Agentic evals and RL environments for Computer Use Agents, raised $21M (Calcalist, 2025 via search snippet). Key differentiator vs. Traverse: focused on browser/computer use agents rather than non-deterministic domains.

**Why now:** [Inferred]: Two specific catalysts opened this opportunity: (1) The demonstrated success of RL-trained reasoning models (OpenAI's o1, Anthropic's Claude Opus 4) proved that RL is the primary remaining scaling axis for LLM capability, shifting lab investment toward RL environments (TechCrunch, Sep 2025). (2) As coding-domain RL environments matured, labs began seeking expansion into non-deterministic domains to unlock the next wave of agent capabilities — Anthropic's RL environment spend is projected to grow 3–5× into 2026 (Wing Venture Capital, 2025). The combination of proven RL efficacy and imminent demand for non-coding RL environments creates a window for specialized providers.

## Founders & Team

**Lance Yan** — Co-Founder & CEO
- Education: Computer Science at University of Waterloo (first-semester dropout) (lance.build)
- Previously: Software Engineer/Builder at Kalshi (prediction market platform); Founding Engineer at a stealth startup; Lead Machine Learning Engineer at wat.ai, UWaterloo's AI organization (lance.build, LinkedIn)
- Twitter/X: @lanceyyan — approximately 1,584 followers (via search snippet); count not directly verified due to JavaScript rendering
- LinkedIn: linkedin.com/in/lance-yan — Co-Founder @ Traverse (YC W26)
- GitHub: github.com/lance116 — 17 repos, 83 followers, pinned repo "lances-portfolio" (6 stars) (GitHub)

**Zachary Yu** — Co-Founder & CTO (listed as "Founder" on YC page)
- Education: Computer Science at University of Waterloo (zacharyyu.com)
- Previously: Backend Software Engineer at Mercor; Software Engineer at CacheAI; Founding Software Engineer at Hands (zacharyyu.com, LinkedIn)
- Side projects: tunesform.com (cursor for jazz lead sheets, 10K+ unique users, 11 paying customers); vibeornot.com (25K+ unique users in 24 hours); founded Go On Hacks (800+ applicants, 150+ hackers, 49 projects, sponsored by Shopify) (zacharyyu.com)
- Twitter/X: @thezacharyyu — count not retrievable
- LinkedIn: linkedin.com/in/zacharyyu — Traverse (YC W26)
- GitHub: github.com/zach3141592 — 29 repos, 125 followers, "Starstruck" badge (GitHub)

**Co-founder relationship:** Both founders attended the University of Waterloo studying Computer Science. They previously co-founded Clice AI together (also YC W26), indicating a pre-existing working relationship before Traverse. Zachary Yu previously worked at Mercor, which is now one of the largest players in the RL environments space.

**Founder-market fit:** Lance Yan's ML engineering background at wat.ai (UWaterloo's AI organization) and Zachary Yu's backend engineering experience at Mercor (a company now heavily invested in RL environments) provide relevant technical exposure to both the ML training pipeline and the RL environments market. Zachary Yu's time at Mercor specifically would have given direct exposure to how frontier labs consume RL environment products. Both founders are young (Lance Yan listed as 18 in his X bio) with prior YC experience through Clice AI.

## Key Risks

**Pivot recency risk:** The team pivoted from Clice AI (AI agents for mortgage brokers) to Traverse (RL environments for non-deterministic work) during the YC W26 batch. Both YC pages remain active with the same founders. The current product concept may still be evolving, and the pivot represents a complete domain change — from fintech communication tools to AI infrastructure.

**Competitive funding asymmetry:** Direct competitors have raised orders of magnitude more capital — Applied Compute ($100M, SiliconANGLE Oct 2025), Mercor ($350M Series C, TechCrunch Oct 2025), and Surge AI (seeking $1B, Reuters Jul 2025). Mercor explicitly lists healthcare and law among its RL environment target domains, directly overlapping with Traverse's stated focus on non-deterministic work.

**Non-deterministic verification feasibility:** The core technical challenge — building verifiers for subjective domains where "taste is hard to formalize" (traverse.so) — is acknowledged by the company as "largely unsolved." If the verification problem proves intractable at the quality level frontier labs require, the core value proposition weakens. This is a technical feasibility risk distinct from market risk.

**Buyer concentration:** The addressable buyer set for RL environments is extremely narrow — primarily Anthropic, OpenAI, Google DeepMind, and a small number of enterprises. Anthropic appears to be "the single largest buyer across both coding and computer-use environments" (Wing Venture Capital, 2025). Dependence on a handful of lab procurement decisions creates revenue concentration risk.

**Brand disambiguation:** Multiple companies use the name "Traverse" across different industries (Traverse Systems, Traverse Technologies, Traverse CFO services, etc.), as evidenced by LinkedIn search results. This creates potential confusion in market positioning and SEO.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $12.43B reinforcement learning market in 2025, projected $111.11B by 2033 at 31.6% CAGR (Grand View Research, 2025 via search snippet) |
| SAM | No public data found. Addressable sub-segment is RL environments sold to AI labs; Anthropic alone spends "tens of millions annually" with 3–5× growth expected into 2026 (Wing Venture Capital, 2025) |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Lance Yan (CEO): UWaterloo CS, ex-Kalshi SWE, ex-wat.ai ML Lead. Zachary Yu (CTO): UWaterloo CS, ex-Mercor Backend SWE, ex-CacheAI, ex-Hands Founding SWE |
| Competitors | Mercor ($350M raised, ~$450-500M ARR, multi-domain RL environments including non-deterministic); Applied Compute ($100M raised, revenue unknown, ex-OpenAI team, enterprise RL environments); Idler ($unknown raised, multimillion-dollar lab contract, coding-focused RL environments); Surge AI (bootstrapped, $1.2B revenue, seeking $1B raise, full-spectrum RL environments); HUD ($21M raised, revenue unknown, CUA-focused RL environments) |
| Moat Signals | No public data found. Claimed expertise combining domain knowledge with ML understanding for non-deterministic verification |
| Risk Factors | Recent pivot from Clice AI, massive competitive funding asymmetry, buyer concentration on handful of frontier labs, unproven non-deterministic verification approach |
| Founder Reach | Lance Yan: Twitter ~1.6k (via search snippet), LinkedIn 500+, GitHub 83 followers. Zachary Yu: Twitter count not retrievable, LinkedIn 500+, GitHub 125 followers |
| Distribution Signals | No public data found |
| Emails | founders@traverse.so, zach@traverse.so |
