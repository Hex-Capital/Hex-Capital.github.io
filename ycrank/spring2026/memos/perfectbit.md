# PerfectBit

> Training data for frontier AI labs

| Field | Value |
|-------|-------|
| Website | https://perfectbit.ai |
| YC Page | https://www.ycombinator.com/companies/perfectbit |
| Batch | Spring 2026 (YC company page) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Infrastructure, AI |
| YC Partner | Garry Tan (YC company page) |
| Emails | founders@perfectbit.ai (YC company page) |

## The Idea

**Problem:** Frontier AI labs train LLMs on web-scraped text that produces hallucinations and failures on tasks humans find trivial (YC company description). Lab customers currently rely on human-labeled data vendors (Scale AI, Surge AI, Mercor) and synthetic data pipelines; frontier labs continue to treat human preference data as a competitive moat (llm-stats.com, 2026 via search snippet).

**Approach:** PerfectBit delivers "verifier-grounded training data" that is "correct by construction" using formal proof systems, physics simulators, executable tests, and oracle/scientific databases (perfectbit.ai). Workflow described on site: verifier stack selection, trace target definition, agent-verifier loop construction and execution, delivery with traces, verdicts, and manifests (perfectbit.ai). Target domains include LLMs, robotics, and AI for Science (YC company description).

**Differentiation:** Aligned with the RLVR (Reinforcement Learning with Verifiable Rewards) paradigm, where correctness is checked programmatically rather than via human preference labels (llm-stats.com, 2026 via search snippet). Differs from Scale/Surge/Mercor whose model is sourcing human contractors to label or generate data (TechCrunch, Sep 2025 via search snippet; Gun.io, Dec 2025 via search snippet). Closest adjacent player Snorkel AI focuses on programmatic/weak-supervision labeling; AfterQuery (YC 2024) uses domain-expert human curation (Gun.io, Dec 2025 via search snippet).

**Business Model:** No pricing disclosed on website (perfectbit.ai). Site notes the team is "selective about engagements" (perfectbit.ai). [Inferred]: Likely high-touch, custom enterprise contracts with a small number of frontier labs, priced per dataset/engagement rather than per-seat or consumption, given bespoke verifier-stack assembly and the typical procurement model used by Scale/Surge for frontier-lab engagements.

**TAM/SAM:** AI Training Data Market estimated USD 1.865B in 2023 with 23.5% CAGR through 2030 (Cognitive Market Research via search snippet); AI Training Dataset Market projected to USD 9.58B by 2029 (MarketsandMarkets via search snippet). Synthetic data generation market estimated USD 791.34M in 2026 growing to USD 6.905B by 2034 at 31.1% CAGR (Coherent Market Insights via search snippet). Model training represents ~46.3% of synthetic data application share in 2026 (Coherent Market Insights via search snippet). [Inferred]: SAM is narrower — verifiable-reward / RLVR-style data spend by the ~10-20 frontier labs and large enterprise model trainers; no public estimate found.

**GTM / Distribution:** Founders' Meta tenure spans Llama and Emu/Movie Gen, plus YC Spring 2026 with Garry Tan as Group Partner (YC company page). [Inferred]: Direct-sales/founder-led BD into frontier labs (OpenAI, Anthropic, Google DeepMind, Meta, xAI), leveraging former Meta research-leader relationships; no public partnership announcements found.

## Defensibility

No defensibility signals (patents, exclusive partnerships, or proprietary data pools) found in public sources. [Inferred]: Potential moat could develop via (a) accumulated library of verifier stacks across domains (physics simulators, proof systems, scientific oracle DBs) that are costly to replicate, (b) trust/security clearance with frontier labs whose procurement is concentrated, and (c) founder-network access to lab buyers — but unproven at this stage.

**Market structure:** No structural barrier identified at this stage. Unlike human-labeling vendors (Scale/Surge) whose moat is contractor recruiting and operations, verifier-grounded data is largely software-generated and could be replicated by labs in-house or by well-funded peers. [Inferred]: The non-obvious barrier may be domain-by-domain verifier engineering depth, but a frontier lab could insource this if they viewed it as core.

**Commoditization risk:** RLVR and verifiable-reward generation are active open research areas; an arXiv paper from Jan 2026 (EigenData) describes self-evolving synthetic data with executable per-instance checkers (arxiv.org 2601.22607 via search snippet). Frontier labs themselves are running similar pipelines internally (llm-stats.com, 2026 via search snippet). Competing vendors (Snorkel AI, Mercor, Micro1, AfterQuery) could extend into verifier-grounded offerings.

## Market & Traction

**Traction signals:**
- No revenue, customer logos, or paying-customer counts disclosed (perfectbit.ai).
- No public press coverage found in WebSearch for "PerfectBit" + launch/press/Product Hunt.
- No company Twitter/X, LinkedIn, Discord, or Slack accounts surfaced in search.
- Hiring: actively recruiting research scientists and engineers in San Francisco, in-person (YC company page; perfectbit.ai/about).
- Website at v0.4, Build 0xa9f4, copyright 2026 (perfectbit.ai).
- No Product Hunt presence found (search returned no matches).

**Competitive landscape:**
- **Scale AI** — >$1.6B raised, $14B valuation; largest provider of human-labeled data, customers include OpenAI, Meta, US DoD (Wellows / Gun.io via search snippet). Differentiator vs. PerfectBit: human-labeling at scale, not verifier-generated data.
- **Surge AI** — ~$1.2B revenue in 2024; 2025 fundraise discussions valued at $15-25B with a16z, Warburg Pincus, TPG (TechCrunch, Sep 2025 via search snippet). Differentiator: high-end human RLHF/preference data.
- **Mercor** — $450M+ ARR (TechCrunch, Sep 2025 via search snippet). Differentiator: domain-expert contractor marketplace.
- **Micro1** — Raised at $500M valuation, Sept 2025 (TechCrunch, Sep 2025). Differentiator: Scale AI alternative focused on human labeling/expert workforce.
- **Snorkel AI** — Funding not retrieved this session. Differentiator: programmatic/weak-supervision labeling platform; closest adjacent to verifier-grounded approach but software-as-platform vs. PerfectBit's bespoke dataset-delivery model.
- **AfterQuery** (YC 2024) — Funding not retrieved. Differentiator: human-curated datasets with academic experts (Berkeley AI Research, AI2, Stanford AI Lab) (Gun.io via search snippet).

**Why now:** [Inferred]: Three concurrent shifts in the last 12-24 months: (a) the rise of RLVR / verifiable-reward post-training (GRPO/DAPO) as a core frontier-lab technique (llm-stats.com, 2026 via search snippet), (b) Epoch-style projections that high-quality human text exhausts between 2026-2032 (invisibletech.ai, 2026 via search snippet), pushing labs to programmatic data sources, and (c) frontier-lab capex on training continues to climb (Foundation Capital, 2026 via search snippet), expanding budget for differentiated data inputs.

## Founders & Team

**Peter Vajda** — Co-founder
- Former Director of Media Generation at Meta, 11-year tenure (YC company page; perfectbit.ai/about). Led foundation model R&D for generative media including Emu and Movie Gen (YC company page; Capacity Media via search snippet).
- PhD Computer Science; previously Visiting Assistant Professor at Stanford working on personalized multimedia systems and mobile visual search (Crunchbase via search snippet; perfectbit.ai/about).
- LinkedIn: linkedin.com/in/péter-vajda-9a03aaa (LinkedIn via search snippet) — follower count not retrievable.
- Twitter/X: No public account found.
- GitHub: No public account found in search; multiple academic publications instead (IEEE Xplore, ResearchGate via search snippet).

**Seiji Yamamoto** — Co-founder
- Senior Staff Research Scientist / Manager at Meta, 9-year tenure; led teams in Core Llama group / AGI Foundations enhancing Llama via architectural and post-training techniques (YC company page; The Org via search snippet; perfectbit.ai/about).
- PhD Physics; published in Proceedings of the National Academy of Sciences and Physical Review Letters; prior academic roles at Stanford, Rice, Columbia, plus National Lab postdoc (perfectbit.ai/about; The Org via search snippet).
- LinkedIn: linkedin.com/in/seiji-yamamoto-a630897 (LinkedIn via search snippet) — follower count not retrievable.
- Twitter/X: No public account found.
- GitHub: No public account found.

**Co-founder relationship:** Both founders worked at Meta in overlapping years (Vajda 11 years, Yamamoto 9 years per perfectbit.ai/about) on adjacent foundation-model efforts (media generation and Llama). Both also have Stanford academic ties (Vajda Visiting Asst Prof; Yamamoto prior academic role) (perfectbit.ai/about; Crunchbase via search snippet).

**Founder-market fit:** Both founders led frontier-model training groups at Meta — Yamamoto on Llama post-training/RL, Vajda on Emu/Movie Gen — giving direct, recent operating knowledge of what training-data gaps exist at a leading frontier lab and the buyer relationships to sell into peers. PhD-level credentials in CS and physics align with the verifier-stack thesis (proof systems, physics simulators, scientific databases). No advisors, board members, or named investors disclosed publicly.

## Key Risks

**Insourcing by frontier-lab buyers:** Frontier labs are themselves running verifier-based RL pipelines (llm-stats.com, 2026 via search snippet) and the founders' former employer Meta is a candidate customer that already has the in-house expertise to replicate this approach. Buyer concentration in ~10-20 labs amplifies the impact of any one customer choosing to insource.

**Open research commoditization:** RLVR techniques and verifier-grounded data generation are described in open arXiv literature (e.g., arxiv.org 2601.22607, Jan 2026 via search snippet) and an open list of RLVR resources is maintained on GitHub (opendilab/awesome-RLVR via search snippet), reducing technical scarcity.

**Well-capitalized incumbent expansion:** Scale AI ($14B val), Surge AI (~$15-25B 2025 discussions), Mercor ($450M+ ARR), and Micro1 ($500M val) all have direct relationships with frontier-lab buyers (TechCrunch, Sep 2025 via search snippet; Gun.io, Dec 2025 via search snippet) and could extend into verifier-generated data offerings.

**Domain breadth execution:** Approach requires building and maintaining verifier stacks across heterogeneous domains (physics simulators, proof systems, scientific databases, robotics) (perfectbit.ai; YC company description). With a 2-person team and in-person SF hiring requirement (perfectbit.ai/about), throughput is gated by recruiting in a tight AI labor market.

**Sales-cycle / disclosure asymmetry:** No public customer logos or revenue (perfectbit.ai). [Inferred]: Frontier-lab data contracts are typically NDA-bound, so absence of public traction is consistent with this market — but it also means external diligence cannot independently verify book of business at this stage.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI Training Data Market USD 1.865B in 2023, 23.5% CAGR to 2030 (Cognitive Market Research via search snippet); USD 9.58B by 2029 (MarketsandMarkets via search snippet); Synthetic Data Generation USD 791M in 2026 → USD 6.9B by 2034, 31.1% CAGR (Coherent Market Insights via search snippet) |
| SAM | No public data found |
| Traction | Hiring research scientists & engineers in SF (YC company page, perfectbit.ai/about, May 2026); website at v0.4 (perfectbit.ai, 2026); no revenue/users/press disclosed |
| Revenue Signal | No public data found (no pricing on perfectbit.ai; no funding announcement found) |
| Founders | Peter Vajda (Co-founder): ex-Director Media Generation at Meta 11 yrs, led Emu/Movie Gen, PhD CS, ex-Stanford Visiting Asst Prof. Seiji Yamamoto (Co-founder): ex-Senior Staff RSM at Meta 9 yrs, Core Llama / AGI Foundations, PhD Physics, PNAS / Phys Rev Letters publications |
| Competitors | Scale AI ($1.6B+ raised, $14B val, revenue not disclosed in snippet, human-labeling at scale); Surge AI (private, ~$1.2B 2024 revenue, $15-25B 2025 fundraise discussions, RLHF/preference data); Mercor (funding not retrieved, $450M+ ARR, domain-expert workforce); Micro1 ($500M val Sept 2025, revenue unknown, Scale alternative); Snorkel AI (funding not retrieved this session, programmatic labeling platform); AfterQuery (YC 2024, funding not retrieved, expert-curated datasets) |
| Moat Signals | No public data found |
| Risk Factors | Frontier-lab insourcing of verifier pipelines, RLVR commoditization via open research, incumbent vendor expansion (Scale/Surge/Mercor) |
| Founder Reach | Peter Vajda: Twitter not found, LinkedIn linkedin.com/in/péter-vajda-9a03aaa (count not retrievable), GitHub not found. Seiji Yamamoto: Twitter not found, LinkedIn linkedin.com/in/seiji-yamamoto-a630897 (count not retrievable), GitHub not found |
| Distribution Signals | No public data found (no Product Hunt, no public Twitter/LinkedIn company account surfaced, no press coverage found in search) |
| Emails | founders@perfectbit.ai (YC company page) |

Sources:
- [PerfectBit website](https://perfectbit.ai)
- [PerfectBit on Y Combinator](https://www.ycombinator.com/companies/perfectbit)
- [Péter Vajda LinkedIn](https://www.linkedin.com/in/p%C3%A9ter-vajda-9a03aaa/)
- [Péter Vajda Crunchbase](https://www.crunchbase.com/person/peter-vajda)
- [Meta Movie Gen — Capacity Media](https://www.capacitymedia.com/article/meta-movie-gen-ai)
- [Seiji Yamamoto — The Org](https://theorg.com/org/meta/org-chart/seiji-yamamoto)
- [Micro1 raises at $500M — TechCrunch](https://techcrunch.com/2025/09/12/micro1-a-competitor-to-scale-ai-raises-funds-at-500m-valuation/)
- [Scale AI Alternatives — Gun.io](https://gun.io/news/2025/12/scale-ai-alternatives-for-enterprise-ai-teams/)
- [AI Training Dataset Market — MarketsandMarkets](https://www.marketsandmarkets.com/PressReleases/ai-training-dataset.asp)
- [AI Training Data Market — Cognitive Market Research](https://www.cognitivemarketresearch.com/ai-training-data-market-report)
- [Synthetic Data Market — Coherent Market Insights](https://www.coherentmarketinsights.com/industry-reports/synthetic-data-market)
- [AI training in 2026 — invisibletech.ai](https://invisibletech.ai/blog/ai-training-in-2026-anchoring-synthetic-data-in-human-truth)
- [Post-Training in 2026 — llm-stats.com](https://llm-stats.com/blog/research/post-training-techniques-2026)
- [Awesome-RLVR — GitHub](https://github.com/opendilab/awesome-RLVR)
- [EigenData paper — arXiv 2601.22607](https://arxiv.org/abs/2601.22607)
- [Where AI is headed in 2026 — Foundation Capital](https://foundationcapital.com/ideas/where-ai-is-headed-in-2026)
