# Synthetic Sciences

> AI co-scientists that run research end-to-end

| Field | Value |
|-------|-------|
| Website | https://syntheticsciences.ai/ |
| YC Page | https://www.ycombinator.com/companies/synthetic-sciences |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco (dnyuz.com, Feb 2026) |
| Tags | Developer Tools, Reinforcement Learning, Workflow Automation |
| YC Partner | Gustaf Alstromer |
| Emails | team@syntheticsciences.ai (company website) |

## The Idea

**Problem:** Researchers in computational domains (ML, computational biology, genomics) spend large portions of their time on repetitive, labor-intensive tasks across the research lifecycle: literature reviews, hypothesis generation, experimental design, code execution, model training, results analysis, and manuscript preparation. Current workflows are fragmented across tools (Overleaf, Jupyter, cloud GPU providers, reference managers), requiring manual orchestration and preventing asynchronous delegation. The company's description specifically targets scientists who want to delegate tasks "even while they sleep" (company website).

**Approach:** Synthetic Sciences provides a web-based platform where researchers delegate end-to-end research tasks to "swarms of AI co-scientists." The platform operates in four modes (company website): (1) **Research** — hypothesis framing through manuscript drafting; (2) **Biology** — protein design, genomics, pathway analysis; (3) **Flywheel** — iterative model improvement from production usage; (4) **Write** — publication formatting and citation verification. The infrastructure layer includes universal credential synchronization (GitHub, Hugging Face, Weights & Biases), GPU orchestration across providers, persistent browser-based agent runtime, isolated stateful sandboxed environments, and asynchronous workflow queuing. A CLI tool (`npm i -g @synsci/cli`) is also available (company website). In parallel, the company develops RL environments and process-based training data for LLMs, targeting agentic coding environments for ML research workflows (YC page).

**Differentiation:** Unlike Elicit, which focuses on literature search and evidence synthesis for reasoning, Synthetic Sciences targets the full research loop including code execution, GPU-orchestrated model training, and experiment monitoring. Unlike FutureHouse/Edison Scientific, which is a nonprofit/spinout focused on AI-driven biological discovery with a 10-year horizon, Synthetic Sciences is building a commercial product with a self-serve SaaS model. Unlike Consensus, which focuses on research question answering via academic literature search, Synthetic Sciences provides agent execution of the entire experimental pipeline.

**Business Model:** Tiered SaaS pricing is publicly listed (company website):
- **Plus:** $50/month, 50 credits, 4 modes, 3 frontier models, community support
- **Pro:** $200/month, 200 credits, priority GPU access, advanced analytics
- **Enterprise:** Custom pricing, unlimited credits, dedicated support, on-premise deployment

New users receive $5 in free credits (YC page). Personalized onboarding is available via cal.com (company website).

**TAM/SAM:** The AI for Scientific Discovery market was valued at $4.72B in 2025 and is projected to reach $34.2B by 2035, at a 21.9% CAGR (Market.us via search snippet). North America held 38.84% share (~$1.83B) in 2025 (Market.us via search snippet). The Generative AI segment accounted for 37.6% of this market in 2025 (Market.us via search snippet). No company-specific SAM estimate was found.

**GTM / Distribution:** The company offers a self-serve web platform with tiered pricing and a CLI tool distributed via npm. Personalized onboarding calls are available via the co-founder's calendar link. [Inferred]: The most likely initial distribution path is bottom-up adoption by individual researchers and small lab teams in ML and computational biology, expanding to institutional/enterprise sales as usage grows. The onboarding calendar link suggests a high-touch sales motion for early customers.

## Defensibility

The company's stated thesis is that capable AI scientists require two things built in tandem: (1) a human-centric product suite that generates high-quality process data, and (2) research infrastructure to turn that data into increasingly autonomous systems (YC page). This implies a data flywheel where product usage generates process-level training data that improves agent capabilities, which in turn drives more usage.

The "Flywheel" mode explicitly targets iterative model improvement from production usage (company website). If realized, this creates a proprietary dataset of research process traces that could compound over time. However, this flywheel is unproven at this stage.

**Market structure:** Large incumbent AI labs (Google, OpenAI, Anthropic) have released AI co-scientist tools (Google announced its AI Co-Scientist in 2025). However, these incumbents primarily optimize for broad model capabilities rather than building specialized research workflow infrastructure with GPU orchestration, credential syncing, and domain-specific agent modes. [Inferred]: The structural barrier may lie in the integration complexity of connecting frontier models to research-specific execution environments (GPU clusters, biology toolchains, LaTeX pipelines) — a product surface area that horizontal AI providers are unlikely to prioritize as a standalone product.

**Commoditization risk:** The core capability — wrapping LLM agents with research workflow tooling — is reproducible by well-funded competitors. FutureHouse's spinout Edison Scientific raised $70M in December 2025 (TechFundingNews) for a related autonomous AI scientist platform. Elicit has 400,000+ monthly researchers and $31M in funding (Elicit blog, Feb 2025). The underlying LLM capabilities are improving rapidly across providers, reducing the differentiation of any single agent wrapper. The RL training infrastructure for research agents could provide differentiation if the process data advantage materializes, but this is forward-looking.

## Market & Traction

**Traction signals:**
- The company claims 92% state-of-the-art performance on "BixBench Verified" for biology applications (YC page). BixBench is a benchmark by FutureHouse for LLM-based agents in computational biology (FutureHouse research announcement, Mar 2025). The general BixBench benchmark showed frontier models achieving only 17% accuracy on open-answer tasks (arxiv.org, 2503.00096), suggesting the "Verified" variant may be a subset or different evaluation protocol. The claim could not be independently verified.
- Total funding: $1.5M raised, including $500K from Y Combinator (dnyuz.com, Feb 2026). Pre-YC investors include Cory Levy (Z-Fellows) and FireStreak Ventures (Kolkata Calling).
- No public user counts, revenue figures, app store ratings, Product Hunt launches, or community (Discord/Slack) data were found.
- No company Twitter/X account was identified.
- No LinkedIn company page with follower count was identified (search returned results for similarly named companies only).
- The company previously operated as InkVell, described as helping "users turn research into publication-ready documents" with automated formatting, citations, and professional templates (Kolkata Calling). The pivot to the broader Synthetic Sciences platform occurred during or around the YC W26 batch. Prior-product (InkVell) traction data was not found publicly.

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Synthetic Sciences |
|---|---|---|
| **FutureHouse / Edison Scientific** | Edison: $70M seed at ~$250M valuation (TechFundingNews, Dec 2025); FutureHouse: philanthropic funding from Eric Schmidt, amount undisclosed | Nonprofit research lab with commercial spinout; focused on autonomous biological discovery with a 10-year mission. Larger team and deeper biology focus vs. Synthetic Sciences' broader computational research scope |
| **Elicit** | $31M total, $22M Series A at $100M valuation (Elicit blog, Feb 2025) | Focused on evidence synthesis and literature-based reasoning for decision-making; 400,000+ monthly researchers (Elicit blog). Does not include code execution or GPU training infrastructure |
| **Consensus** | $19.2M total across 5 rounds (Tracxn via search snippet) | AI search engine for academic papers; narrower scope focused on finding and summarizing research answers. No agent execution capabilities |
| **Sakana AI** | $379M total, $135M Series B at $2.65B valuation (TechCrunch, Nov 2025) | Built "The AI Scientist" for automated paper generation. Broader AI model company focused on Japan market; AI Scientist is a research project, not a primary commercial product |

**Why now:** [Inferred]: Several specific catalysts converged in 2024-2025 to open this opportunity: (1) frontier LLMs crossed a capability threshold for multi-step scientific reasoning, enabling agent workflows that previously failed; (2) the cost of inference dropped substantially, making sustained agentic sessions economically viable at SaaS price points; (3) cloud GPU availability improved with competition among providers (Lambda, Together, Modal), enabling third-party orchestration layers; (4) the Generative AI segment reached 37.6% of the AI for Scientific Discovery market in 2025 (Market.us via search snippet), indicating rapid institutional adoption of AI in research workflows.

## Founders & Team

**Aayam Bansal** — Co-founder
- Age 18; grew up in Kolkata, India; graduated from Delhi Public School Ruby Park in 2025 (Kolkata Calling)
- Enrolled in CS at University of Illinois Urbana-Champaign (UIUC); dropped out during first semester to pursue the startup full-time (dnyuz.com, Feb 2026)
- Research experience at CMU, NUS, Harvard, and MIT CSAIL (YC page, LinkedIn)
- Publications across ICML, NeurIPS, IEEE, ACL; 15+ papers (LinkedIn); 3x ICML SRW (LinkedIn headline)
- HVTWF'24 (Harvard Venture Technology Fellowship, per LinkedIn headline)
- LinkedIn lists "1x Exit" — the YC page notes he "previously founded and sold an AI healthcare company" (YC page). No further details on the acquirer or terms were found publicly.
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/aayambansal — "Co-Founder @ InkVell | CS @UIUC | HVTWF'24 | Research @CMU @NUS @Harvard | 2x god of war platinum | 3x ICML SRW"
- GitHub: github.com/aayambansal — `time-series-prediction` repo found; star count not retrievable

**Ishaan Gangwani** — Co-founder
- Age 18; from Pune, India; studied at Indus International School, Pune (Kolkata Calling)
- USACO Platinum qualifier; IOAI '25 (International Olympiad in Artificial Intelligence) ranked participant (YC page, LinkedIn)
- Computational Imaging Researcher at UC Berkeley School of Information, June–October 2024 (search results via affluense.ai)
- Quantitative Policy Researcher at Bengawalk, June–August 2024 (search results via affluense.ai)
- Paper accepted at MIT URTC 2024 examining structural transformation and resilience of the Indian economy (Cambridge Research)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/ishaan-gangwani-3a7792241 — "Co-Founder, InkVell (YC W26) | IOAI '25"
- GitHub: No public profile found

**Co-founder relationship:** Both founders are from India (Kolkata and Pune respectively) and are the same age (18). They started working on their product in June 2025 and registered the company in San Francisco a few months later (Kolkata Calling). No shared employer or university overlap was identified from public data. The specific mechanism of their introduction was not found publicly.

**Founder-market fit:** Both founders have direct research experience — Bansal with ML research at multiple top institutions (CMU, NUS, Harvard, MIT CSAIL) with 15+ publications, and Gangwani with computational research at UC Berkeley and competitive programming credentials. Bansal's prior exit of an AI healthcare company, while details are undisclosed, indicates prior startup execution experience. Their research backgrounds place them as users of the product they are building.

## Key Risks

**Product pivot recency:** The company pivoted from InkVell (AI-powered LaTeX and publication formatting tool) to Synthetic Sciences (full-stack AI co-scientist platform) during the YC W26 batch. This represents a substantial scope expansion from document preparation to end-to-end research execution including GPU orchestration, biology workflows, and RL training infrastructure. The broader vision may require significantly more engineering resources than the current 2-person team can deliver.

**Well-funded direct competitors:** Edison Scientific (FutureHouse spinout) raised $70M in December 2025 (TechFundingNews) with backing from Jeff Dean and Dmitri Alperovitch, targeting autonomous AI scientists specifically for biology and chemistry. Elicit serves 400,000+ monthly researchers with $31M in funding (Elicit blog). Synthetic Sciences' $1.5M in total funding creates a significant resource asymmetry against these competitors. Google's AI Co-Scientist announcement in 2025 adds further competitive pressure from a well-resourced incumbent.

**Unverifiable benchmark claim:** The company claims 92% SOTA on "BixBench Verified" (YC page), but published BixBench results show frontier models achieving only 17% on open-answer tasks (arxiv.org, 2503.00096). The "Verified" variant appears to be a different evaluation subset, and the claim could not be independently corroborated. If the benchmark methodology is questioned, a key credibility signal weakens.

**Brand disambiguation:** The name "Synthetic Sciences" overlaps with established terms in synthetic biology, synthetic chemistry, and synthetic data. Search results return numerous unrelated entities, potentially complicating SEO, brand recognition, and investor research. The prior name (InkVell) persists on the legal entity (Inkvell Inc., per website footer) and across multiple press mentions.

**Founder experience depth:** Both founders are 18 years old with no prior full-time industry experience. Bansal's prior exit provides some startup execution signal, but the scope of building RL training infrastructure, GPU orchestration, and multi-domain research agents represents a substantial technical and organizational challenge for a 2-person team at this experience level.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $4.72B AI for Scientific Discovery market in 2025, projected $34.2B by 2035, 21.9% CAGR (Market.us via search snippet) |
| SAM | No public data found |
| Traction | 92% SOTA on BixBench Verified claimed (YC page, unverified independently); $1.5M raised total (dnyuz.com, Feb 2026) |
| Revenue Signal | Pricing: Plus $50/mo, Pro $200/mo, Enterprise custom (company website). No public revenue figures found |
| Founders | Aayam Bansal (Co-founder): UIUC CS (dropped out), 1x prior exit (AI healthcare), research at CMU/NUS/Harvard/MIT CSAIL, 15+ papers. Ishaan Gangwani (Co-founder): USACO Platinum, IOAI '25, UC Berkeley researcher |
| Competitors | Edison Scientific ($70M raised, ~$250M valuation, biology/chemistry-focused autonomous AI scientist); Elicit ($31M raised, $100M valuation, 400K+ monthly researchers, evidence synthesis focus); Consensus ($19.2M raised, academic search engine); Sakana AI ($379M raised, $2.65B valuation, broader AI model company with AI Scientist project) |
| Moat Signals | Claimed data flywheel via "Flywheel" mode generating process-level training data from product usage (YC page); RL training infrastructure for research agents (YC page). Unproven at this stage |
| Risk Factors | Recent product pivot from InkVell, well-funded direct competitors (Edison $70M, Elicit $31M), unverifiable benchmark claim |
| Founder Reach | Aayam Bansal: Twitter not found, LinkedIn linkedin.com/in/aayambansal, GitHub github.com/aayambansal (star count not retrievable). Ishaan Gangwani: Twitter not found, LinkedIn linkedin.com/in/ishaan-gangwani-3a7792241, GitHub not found |
| Distribution Signals | No Product Hunt launch found; no app store presence found; no community (Discord/Slack) found; no company social media accounts identified |
| Emails | team@syntheticsciences.ai (company website) |
