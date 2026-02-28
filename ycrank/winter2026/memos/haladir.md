# Haladir

> Bridging the Gap between Solvers and Training.

| Field | Value |
|-------|-------|
| Website | https://www.haladir.com/ |
| YC Page | https://www.ycombinator.com/companies/haladir |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Reinforcement Learning, Data Engineering, Operations |

## The Idea

**Problem:** AI labs and enterprises training large language models with reinforcement learning (RL) need programmatically verifiable training environments — domains where model outputs can be automatically graded against ground-truth solutions. Today, building these environments is bespoke and labor-intensive, with most RL environment startups focused on narrow domains like coding. Classical verifiable domains such as operations research (vehicle routing, scheduling, portfolio optimization) and formal verification (TLA+ specifications, COBOL-to-modern-language translation) remain underserved as RL training data sources. Existing workflows rely on handcrafted environments that do not scale toward continuous self-improvement.

**Approach:** Haladir builds data and training infrastructure for verifiable domains, using classical solvers (e.g., OR-Tools) and formal verification tools to generate ground-truth solutions that serve as programmatically verifiable rewards for RL training. Their GitHub organization (github.com/haladir-com) contains three public repositories that illustrate the approach: (1) OR-bench-sample, a benchmark of expert-level operations research tasks across 10 domains (facility location, vehicle routing, production mix, project planning, order fulfillment, portfolio optimization, crew assignment, job shop scheduling, shift scheduling, bin packing) where models are evaluated on feasibility and optimality gap vs. solver-computed ground truth (GitHub, Feb 2026); (2) Specula, a fork of a tool for synthesizing TLA+ specifications from source code (GitHub, archived); (3) MOBOL, a Python SDK for automating interactions with UniKix COBOL mainframe environments on AWS EC2 (5 stars, GitHub, Jan 2026). The company also operates Haladir Rosetta (rosetta.haladir.com), an AI-powered legacy code documentation and modernization tool for transforming COBOL to modern languages, currently in request-access/waitlist mode (rosetta.haladir.com). The LinkedIn company tagline reads "Formally Verified Coding Data for Flawless Model ..." (LinkedIn company page via search snippet).

**Differentiation:** Most RL environment startups (Mechanize, Applied Compute, Veris AI) focus primarily on coding and agentic tasks. Haladir targets classical verifiable domains — operations research and formal verification — where ground-truth solutions can be computed by established solvers, providing a distinct data source for RL training that is orthogonal to code-centric environments. The COBOL/mainframe modernization product (Rosetta) also creates a pipeline of formally verifiable code translation tasks that can serve as RL training data, linking an enterprise product to the infrastructure offering.

**Business Model:** No public pricing page found. The Rosetta product uses a "Request Access" model (rosetta.haladir.com). [Inferred]: Most likely monetization paths include (1) selling RL training data and environments to AI labs on contract or consumption basis, similar to the model used by Mechanize and Applied Compute, and (2) enterprise SaaS for COBOL modernization via Rosetta.

**TAM/SAM:** The global reinforcement learning market is valued at USD 11.6 billion in 2025 and projected to reach USD 91.6 billion by 2034, growing at 25.8% CAGR (Research and Markets, 2025 via search snippet). Anthropic alone has discussed spending more than $1 billion on RL environments over the next year (The Information, reported Sep 2025 via TechCrunch). No public SAM estimate specific to verifiable-domain RL training data found.

**GTM / Distribution:** [Inferred]: Most likely initial distribution is direct sales to frontier AI labs (OpenAI, Anthropic, Google DeepMind) who are the primary buyers of RL environments. The Rosetta product may serve as a secondary GTM into enterprise COBOL modernization. The OR-bench-sample repository serves as a public demonstration of domain expertise and data quality.

## Defensibility

**Domain-specific data pipeline:** Haladir's combination of classical OR solvers and formal verification tools creates verified ground-truth datasets in domains where most RL competitors lack expertise. The OR-bench repository demonstrates coverage across 10 operations research problem types with solver-computed optimal solutions (GitHub, Feb 2026). The Specula/TLA+ and COBOL/Rosetta tools provide additional formal verification data pipelines. These domain-specific data generation capabilities could compound into a data moat if the resulting datasets prove difficult to replicate at equivalent quality.

**Market structure:** AI labs are seeking diverse RL environment providers to avoid single-vendor dependency (TechCrunch, Sep 2025). Most current RL environment startups cluster around coding tasks, leaving verifiable domains like operations research and formal verification underserved. Large incumbents in OR (e.g., Gurobi, CPLEX/IBM) sell optimization solvers but are not positioned to package their outputs as RL training infrastructure — this would require a fundamentally different product and go-to-market.

**Commoditization risk:** The underlying solver technology (OR-Tools, TLA+ provers) is open-source and accessible. Other teams could build similar data pipelines if they combined OR expertise with RL training infrastructure knowledge. The barrier is interdisciplinary: deep expertise in operations research, formal verification, and RL training pipelines is required simultaneously. Well-funded competitors like Applied Compute ($100M+ raised) or Scale AI ($29B valuation) could enter this domain if they choose to expand beyond coding-centric environments.

## Market & Traction

**Traction signals:**
- Twitter/X: @Haladirofficial, joined January 2026 (X profile via search snippet); follower count not retrievable
- LinkedIn: linkedin.com/company/haladir (LinkedIn via search snippet); follower count not retrievable
- GitHub: github.com/haladir-com — 3 followers, 3 public repositories: mobol (5 stars), OR-bench-sample (0 stars), Specula fork (1 star, 13 forks — inherited from upstream) (GitHub, Feb 2026)
- Funding: LinkedIn post by Jibran Hutchins titled "Haladir Raises Funding with YC, Susa Ventures and ..." indicates a pre-seed round including YC and Susa Ventures, with additional investors unnamed in the visible snippet (LinkedIn, activity ID 7406904333453131777 via search snippet). Specific amount not publicly disclosed.
- Rosetta product: In "Request Access" mode; no public waitlist count found (rosetta.haladir.com)
- Product Hunt: No launch found
- Discord/Slack community: No public data found
- Job postings: Company is not currently hiring (YC page)
- Press coverage: No coverage in named publications found

**Competitive landscape:**

1. **Applied Compute** — Founded by ex-OpenAI researchers. Raised $100M+ total ($20M pre-launch led by Benchmark, Jun 2025; $80M Series B from Sequoia, Lux, Benchmark, Oct 2025); in talks at $1.3B valuation as of Jan 2026 (SiliconANGLE, Oct 2025; TechStartups, Jan 2026 via search snippet). Focuses on RL training for coding and agentic tasks; working with DoorDash, Cognition AI, and Mercor. Differentiator vs. Haladir: code-centric focus and significantly larger funding base.

2. **Mechanize** — RL environment startup working with Anthropic on RL environments (TechCrunch, Sep 2025 via search snippet). Offers software engineers $500K salaries to build environments. Goal of "automating all jobs." Funding amount not publicly disclosed. Differentiator vs. Haladir: broader task coverage, direct Anthropic partnership.

3. **Veris AI** — Raised $8.5M seed led by Decibel Ventures and Acrew Capital (BusinessWire, Jun 2025 via search snippet). Builds simulation environments for enterprise AI agents using synthetic scenarios, verifiable rewards, and production logs. Differentiator vs. Haladir: enterprise-agent focus vs. solver-domain RL training data.

4. **Scale AI** — $29B valuation following Meta's $14.3B investment for 49% stake (Jun 2025) (Sacra via search snippet). Has a dedicated RL environments team. Differentiator vs. Haladir: massive scale, broad data labeling platform, but the Meta deal reportedly triggered customer flight from OpenAI and Google.

5. **IBM watsonx Code Assistant for Z** — Incumbent in COBOL modernization space specifically. Differentiator vs. Haladir: deep enterprise mainframe relationships and end-to-end Z platform, but no RL training data angle.

**Why now:** [Inferred]: Several catalysts converged in 2024-2025: (1) DeepSeek-R1 and OpenAI's o1/o3 models demonstrated that RL with verifiable rewards (RLVR) dramatically improves reasoning capabilities, creating demand for diverse verifiable training domains beyond math and code; (2) Anthropic's reported plan to spend $1B+ on RL environments (The Information, Sep 2025 via TechCrunch) signals a step-function increase in buyer budgets; (3) the RL training paradigm shift means AI labs are actively seeking novel verifiable domains (operations research, formal verification) to expand the diversity of their training data — exactly the gap Haladir targets.

## Founders & Team

**Jibran Hutchins** — Co-founder & CEO
- Freshman at Carnegie Mellon University, Tepper School of Business, majoring in Business Administration and Statistics/Machine Learning (CMU Athletics bio)
- From Fairfax, Virginia; attended W.T. Woodson High School (CMU Athletics bio)
- DIII cross country and track & field student-athlete at CMU (CMU Athletics, 2025-26 roster)
- Twitter/X: No personal public account found
- LinkedIn: linkedin.com/in/jibran-hutchins-42500b26b — 500+ connections (LinkedIn via search snippet)
- Bluesky: @jibranhutchins.bsky.social (Bluesky via search snippet)
- GitHub: No public repos found

**Quan Huynh** — Co-founder
- Studying Computer Science and Applied Mathematics at the University of Virginia (LinkedIn via search snippet)
- Twitter/X: @quanxhuynh; follower count not retrievable (search snippet)
- LinkedIn: linkedin.com/in/quanmhuynh — "cs + applied math @uva" (LinkedIn via search snippet)
- GitHub: No public repos confirmed as belonging to this individual

**Joseph Tso** — Co-founder
- Computer Science at Princeton University (YC page; LinkedIn via search snippet)
- Maintains ORCID research identifier (0000-0001-5279-3557), suggesting academic research activity (GitHub profile)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/josephtso (LinkedIn via search snippet)
- GitHub: github.com/jt914 — 0 public repos, Pro account, 7 followers (GitHub, Feb 2026)

**Preston Schmittou** — Co-founder
- Student at UVA Wise (YC page)
- Attended Hoya Hacks 2025 hackathon (LinkedIn post via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/preston-schmittou-82442b28a (LinkedIn via search snippet)
- GitHub: No public repos found

**Co-founder relationship:** Quan Huynh (UVA) and Preston Schmittou (UVA Wise) both attend University of Virginia system schools, suggesting a prior connection through the UVA network. No other shared employer or university overlap found among the four founders.

**Founder-market fit:** The founding team consists of four undergraduate students. Joseph Tso's Princeton CS background and ORCID presence suggest research orientation relevant to formal methods and verification. Jibran Hutchins's CMU Statistics/ML major aligns with the RL infrastructure product. Quan Huynh's CS and Applied Math background at UVA is relevant to operations research. No prior startup exits, industry experience, or advisors/board members found in public sources. YC primary partner is Diana Hu (YC page).

## Key Risks

**Nascent team with no prior industry experience:** All four founders are current undergraduate students with no documented prior professional experience, startup exits, or published research. While this is not uncommon at pre-seed, the RL infrastructure market requires selling to sophisticated AI lab buyers (Anthropic, OpenAI) who may prefer vendors with established research credibility, as noted by Wing VC: "research credibility compounds — trust, talent, and frontier exposure reinforce each other" (Wing VC, 2025 via WebFetch).

**Well-funded competitor intensity:** Applied Compute has raised $100M+ at a $1.3B valuation with ex-OpenAI founders (TechStartups, Jan 2026 via search snippet). Mechanize is working directly with Anthropic (TechCrunch, Sep 2025). Scale AI ($29B valuation) has a dedicated RL environments team. These competitors have significantly more capital, talent, and lab relationships. The Wing VC analysis predicts the market consolidates to 3-5 winners by 2030 (Wing VC, 2025 via WebFetch).

**Product focus ambiguity:** Public evidence shows two distinct product tracks — COBOL mainframe modernization (Rosetta, MOBOL) and RL training data for verifiable domains (OR-bench). The GitHub org description references "AI-Enabled Mainframe Modernization and Code Translation" (GitHub via search snippet), while the YC description focuses on RL infrastructure. It is unclear whether these are integrated parts of one strategy or reflect a pivot in progress. Splitting focus across enterprise COBOL and AI lab RL data could dilute execution.

**Market timing uncertainty:** OpenAI's Head of Engineering for its API business has expressed skepticism about RL environment startups, noting "it's a competitive space and AI research is evolving so quickly it's hard to serve AI labs well" (search snippet via WebSearch). If AI labs build RL environments in-house or if the verifiable-domain paradigm shifts, external providers could be disintermediated.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $11.6B reinforcement learning market in 2025, projected $91.6B by 2034 at 25.8% CAGR (Research and Markets, 2025 via search snippet) |
| SAM | No public data found |
| Traction | GitHub org: 3 repos, 5 stars on mobol (GitHub, Feb 2026); Rosetta product in request-access mode (rosetta.haladir.com); no public user/revenue metrics found |
| Revenue Signal | No public data found |
| Founders | Jibran Hutchins (CEO): CMU Business Admin + Stats/ML. Quan Huynh: UVA CS + Applied Math. Joseph Tso: Princeton CS, ORCID researcher. Preston Schmittou: UVA Wise |
| Competitors | Applied Compute ($100M+ raised, $1.3B valuation, revenue unknown, code-centric RL vs. Haladir's OR/formal-verification focus); Mechanize (funding undisclosed, Anthropic partnership, broader task coverage); Veris AI ($8.5M seed, enterprise agent simulation vs. solver-domain training data); Scale AI ($29B valuation, broad platform vs. domain-specific); IBM watsonx Code Assistant for Z (incumbent COBOL, no RL angle) |
| Moat Signals | Domain-specific data pipeline across 10 OR problem types with solver-computed ground truth (GitHub OR-bench, Feb 2026); interdisciplinary positioning across formal verification + RL training |
| Risk Factors | All-undergraduate founding team with no documented industry experience, well-funded competitors ($100M+ Applied Compute, Scale AI), product focus ambiguity between COBOL modernization and RL training infrastructure |
| Founder Reach | Jibran Hutchins: Twitter not found, LinkedIn 500+, GitHub not found. Quan Huynh: Twitter @quanxhuynh (count not retrievable), LinkedIn (count not retrievable), GitHub not confirmed. Joseph Tso: Twitter not found, LinkedIn (count not retrievable), GitHub 0 public repos. Preston Schmittou: Twitter not found, LinkedIn (count not retrievable), GitHub not found |
| Distribution Signals | No Product Hunt launch found; no app store/extension presence; company Twitter @Haladirofficial joined Jan 2026 (count not retrievable) |
