# Confluence Labs

> foundation models optimized for learning efficiency

| Field | Value |
|-------|-------|
| Website | https://confluence.sh |
| YC Page | https://www.ycombinator.com/companies/confluence-labs |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, AI |
| YC Partner | Diana Hu |
| Emails | founders@confluence.sh |

## The Idea

**Problem:** Modern AI performs well in data-rich domains but struggles where data is sparse or costly to collect — areas such as drug design, materials science, physics research, and hardware engineering. In these fields, running a single experiment can cost thousands to millions of dollars, and datasets may consist of only dozens to hundreds of examples. Current foundation models require large training datasets to generalize effectively, creating a bottleneck for scientific and engineering R&D. Existing approaches include traditional experimental design methods, Bayesian optimization, and brute-force simulation, all of which are slow and resource-intensive.

**Approach:** Confluence Labs combines large language models with program synthesis to solve novel reasoning tasks from minimal examples. Their system directs LLMs to write code that describes transformations represented by a problem, using a multi-agent architecture with consensus voting. The approach rests on three principles: (1) structuring problems to match LLM training data distributions, (2) enabling extended reasoning chains, and (3) establishing precise solution criteria with measurable feedback. They pursue two strategic angles — hypothesis generation (optimizing testable predictions to maximize experimental informativity) and data-efficient modeling (reducing data requirements for predictions) (confluence.sh; YC launch page).

**Differentiation:** Confluence Labs' initial demonstration is their SOTA result on ARC-AGI-2, a benchmark testing the ability to solve novel reasoning tasks from just a few examples. Their solver achieved 97.9% on the public evaluation set at $11.77 per task (confluence.sh). By comparison, Imbue's code evolution method achieved 95.1% using Gemini 3.1 Pro at $8.71 per task (Imbue blog, Feb 27, 2026), and GPT-5.2 achieved approximately 53–54% as a standalone model (ARC Prize results analysis via search snippet). Confluence Labs' approach differs from large-model scaling strategies by focusing on learning efficiency — extracting maximum signal from minimal data — rather than training on ever-larger datasets.

**Business Model:** No pricing page or revenue model is publicly available. [Inferred]: The most likely monetization path is either (a) an API/platform offering where scientific and engineering teams pay for experiment design and data-efficient modeling capabilities, or (b) licensing their foundation models to enterprises in pharma, materials science, and hardware engineering verticals.

**TAM/SAM:** The global AI for scientific discovery market was valued at USD 4.80 billion in 2025 and is projected to reach USD 34.78 billion by 2035 at a CAGR of 21.9% (Precedence Research, 2025 via search snippet). Within this, the AI in drug discovery segment alone was valued at USD 2.35–4.6 billion in 2025 depending on the source, with projections ranging up to USD 160 billion by 2035 (GM Insights; Market.us; Towards Healthcare via search snippets). The materials science and chemistry discovery segment is projected to grow at the fastest CAGR within the broader scientific AI market (Market.us via search snippet). No company-specific SAM estimate is publicly available.

**GTM / Distribution:** The company states it is developing partnerships with researchers and engineers in hardware engineering, biology, materials science, and related fields (YC launch page). They have open-sourced their ARC-AGI-2 solver (github.com/confluence-labs/arc-agi-2), which serves as a credibility signal. [Inferred]: Most likely distribution path is direct outreach to research-intensive enterprises and academic labs, leveraging the ARC-AGI-2 benchmark result and Paul Graham's backing for credibility.

## Defensibility

The company's primary defensibility signal at this stage is technical capability, demonstrated by their SOTA ARC-AGI-2 result at 97.9% (confluence.sh). The solver is open-sourced under an MIT license (GitHub), which means the specific implementation is replicable. Potential defensibility could develop via: (1) proprietary datasets and domain-specific fine-tuning accumulated through customer partnerships in data-sparse fields, (2) compounding improvements from the feedback loop between experiment design and model training, and (3) deep domain expertise and integration into specific scientific workflows. These moats are unproven at this stage.

**Market structure:** Large AI labs (OpenAI, Google DeepMind, Anthropic) are primarily focused on scaling general-purpose models with massive datasets — an approach that is structurally misaligned with the data-sparse domain problem. Their business models and R&D incentives are oriented toward breadth and scale rather than sample efficiency for niche scientific domains. Pharma and materials incumbents (e.g., legacy CROs, simulation software vendors) lack the ML research depth to build competitive sample-efficient foundation models in-house. However, Google's Isomorphic Labs and similar well-funded AI-for-science efforts could pivot toward sample-efficient approaches.

**Commoditization risk:** The ARC-AGI-2 benchmark is a fast-moving leaderboard — Imbue achieved 95.1% shortly after Confluence Labs' 97.9% result (Imbue blog, Feb 27, 2026). The underlying technique of using LLMs for program synthesis is accessible to well-funded AI labs. The open-sourcing of the solver further lowers the barrier to replication. Sustained differentiation will likely depend on domain-specific applications rather than benchmark performance alone.

## Market & Traction

**Traction signals:**
- SOTA on ARC-AGI-2 public evaluation: 97.9% at $11.77 per task (confluence.sh, Feb 2026)
- Open-source ARC-AGI-2 solver: 94 stars, 11 forks on GitHub, created Feb 23, 2026 (GitHub)
- Company Twitter/X: @_confluencelabs, 291 followers (X.com via search snippet, as of ~Mar 2026)
- Backed by Y Combinator (W26) and Paul Graham (confluence.sh)
- LinkedIn company page: A "Confluence AI" page exists on LinkedIn but appears to be for a different company (IoT UVC sensors); no confirmed LinkedIn page for Confluence Labs found
- No Product Hunt launch found
- No public revenue, customer, or user data found
- No Discord/Slack community found
- No job postings found beyond the two founders

**Competitive landscape:**

| Competitor | Funding | Differentiator vs. Confluence Labs |
|---|---|---|
| **Imbue** | $232M total ($200M Series A, $12M Series B) (TechCrunch, Sep 2023 via search snippet) | Focuses on AI reasoning and coding agents broadly; achieved 95.1% on ARC-AGI-2 using code evolution at $8.71/task (Imbue blog, Feb 2026). Operates at much larger scale (~10K H100 cluster). Revenue unknown. |
| **Isomorphic Labs** (Google/DeepMind spinoff) | $600M first external round (Pharmaceutical Technology via search snippet, 2025) | Applies AI specifically to drug discovery with AlphaFold lineage; backed by Google. Revenue not yet material — meaningful drug discovery revenue expected ~2027+. |
| **Recursion Pharmaceuticals** (merged with Exscientia) | Public company; $1.5B Bayer partnership (Pharmaceutical Technology via search snippet) | End-to-end AI drug discovery platform combining phenomic screening with automated chemistry. Revenue from partnerships; drug candidates in mid-stage trials. |
| **Insilico Medicine** | $110M Series E (PharmaVoice via search snippet, 2025) | AI drug discovery with lead candidate (rentosertib) clearing Phase 2a (PharmaVoice via search snippet). More clinically advanced than Confluence Labs. |

Note: Imbue is the closest competitor in terms of core technical approach (program synthesis / code evolution for reasoning). The pharma/science companies above are competitors in the application domain rather than the foundational technology layer.

**Why now:** ARC-AGI-2 was released in early 2025 as a successor to ARC-AGI-1, establishing a new benchmark for few-shot reasoning capability (ARC Prize). Between January and March 2026, scores on ARC-AGI-2 rose dramatically — from GPT-5.2's ~54% to multiple approaches exceeding 95% (ARC Prize results; Adaline Labs via search snippet). [Inferred]: The rapid improvement in LLM-driven program synthesis and code generation capability has created a window where sample-efficient reasoning approaches become practically viable for scientific domains. The rising cost of physical experiments in biology, materials science, and hardware engineering further increases demand for AI systems that can learn from minimal data.

## Founders & Team

**Niranjan Baskaran** — Co-founder
- Education: Attended Vassar College (class of 2027) (Vassar College website); selected as one of 30 students worldwide for the Research Science Institute at MIT (search snippet). Prior search results reference dropping out of an Ivy League school (Columbia) to co-found a startup doing $5M ARR (LinkedIn profile snippet via search), though the specific prior startup is not named in available sources.
- Research experience: Developed a proof-of-concept JsPsych AI agent using Retrieval Augmented Generation with Prof. Joshua de Leeuw at Vassar; contributed to jsPsych open-source project (GitHub contributors list); worked on humanoid robot design at Vassar (Vassar College website).
- Twitter/X: @bankminer78 — follower count not retrievable
- LinkedIn: linkedin.com/in/niranjan-baskaran-a906a5205 — headline: "Training models by allowing knowledge to compound" (YC page)
- GitHub: github.com/Bankminer78 — 20 public repos, 3 followers. Pinned repos include "cortex" (Swift), "thirai" (Python), "Adinkra-Codes" (Jupyter Notebook). No individually high-starred personal repos (GitHub).

**Brent Burdick** — Co-founder
- Education: Self-taught; left college in 2022 to teach himself how to code (brent.engineering). Self-described "college dropout and self-taught engineer and researcher" (YC page).
- Prior work: Built Rift by Morph, an open-source AI pair programming LSP + VSCode extension at Morph Labs (brent.engineering); created multiple AI projects including Steering Vector Playground, Prompt Smoothie, and language learning apps (brent.engineering). Search results reference involvement with Adni (YC-backed healthcare startup, S25 batch), though his specific role is unclear from available sources.
- Twitter/X: @BingBongBrent — follower count not retrievable
- LinkedIn: linkedin.com/in/brent-burdick — headline: "Self-employed" (LinkedIn via search snippet)
- GitHub: github.com/Brentably — 49 public repos, 20 followers. Top repo: "simple-agent" (3 stars) (GitHub).

**Co-founder relationship:** No shared employer or educational institution is visible from the available data. Niranjan's background is in research (Vassar, RSI/MIT), while Brent's is in self-taught software engineering and AI tooling. No public data on how they connected.

**Founder-market fit:** Both founders have demonstrated ability in AI/ML systems despite non-traditional educational paths. Niranjan's research background (RSI at MIT, AI research at Vassar, and a prior startup reportedly reaching $5M ARR) provides exposure to scientific research workflows. Brent's extensive AI tooling and LLM manipulation experience (Rift, Steering Vectors, Prompt Smoothie) provides relevant engineering capability for the program synthesis approach. The company lists Paul Graham as a backer (confluence.sh), which is an additional signal given Graham's selective personal investments.

## Key Risks

**Benchmark-to-product translation risk:** The company's primary public credential is their ARC-AGI-2 benchmark score. ARC-AGI tasks involve abstract grid transformations, which are structurally different from the real-world scientific domains they target (drug design, materials science, physics). There is no public evidence yet that their approach transfers to these applied domains.

**Competitive leaderboard erosion:** The ARC-AGI-2 leaderboard is rapidly advancing. Imbue achieved 95.1% within days of Confluence Labs' 97.9% (Imbue blog, Feb 27, 2026), and frontier model performance rose from ~54% to 95%+ within three months (ARC Prize; Adaline Labs via search snippet). Benchmark SOTA is ephemeral, and well-funded competitors (Imbue: $232M) can invest orders of magnitude more in improving scores.

**Brand confusion with Atlassian Confluence:** The name "Confluence" is strongly associated with Atlassian's widely used enterprise wiki product. The Twitter handle @Confluence belongs to Atlassian (X.com). This creates SEO challenges, brand confusion risk, and potential trademark issues. The company uses "confluence.sh" as its domain and @_confluencelabs on X to differentiate.

**Two-person team in a capital-intensive space:** While a two-person team is normal at pre-seed, the AI-for-science space features competitors with hundreds of employees and hundreds of millions in funding (Imbue: $232M, 10K H100s; Isomorphic Labs: $600M). Executing on partnerships in pharma, materials science, and hardware engineering requires domain sales expertise and deep technical integration that may strain a two-person team.

**Open-source IP exposure:** The ARC-AGI-2 solver is open-sourced under MIT license (GitHub), meaning the core demonstrated technology is freely available for anyone to build upon. Future defensibility must come from work not yet published.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI for scientific discovery: $4.80B (2025) → $34.78B (2035), CAGR 21.9% (Precedence Research via search snippet) |
| SAM | No public data found |
| Traction | SOTA on ARC-AGI-2: 97.9% at $11.77/task (confluence.sh, Feb 2026); 94 GitHub stars (GitHub, Mar 2026); 291 Twitter followers (X.com via search snippet) |
| Revenue Signal | No public data found |
| Founders | Niranjan Baskaran (Co-founder): RSI/MIT alumnus, Vassar researcher, prior startup reportedly at $5M ARR (LinkedIn snippet). Brent Burdick (Co-founder): Self-taught engineer, built Rift by Morph (open-source AI pair programming), multiple AI projects. |
| Competitors | Imbue ($232M raised, revenue unknown, closest ARC-AGI-2 competitor at 95.1%); Isomorphic Labs ($600M raised, revenue pre-commercial, AI drug discovery); Recursion Pharmaceuticals (public, $1.5B Bayer partnership, AI drug discovery); Insilico Medicine ($110M Series E, revenue pre-commercial, Phase 2a drug candidate) |
| Moat Signals | SOTA benchmark result (97.9% ARC-AGI-2); Paul Graham personal backing (confluence.sh). No proprietary data moat or network effects yet. |
| Risk Factors | Benchmark-to-product translation gap, competitive leaderboard erosion, brand confusion with Atlassian Confluence |
| Founder Reach | Niranjan Baskaran: Twitter @bankminer78 (count not retrievable), LinkedIn 500+, GitHub 3 followers. Brent Burdick: Twitter @BingBongBrent (count not retrievable), LinkedIn (listed), GitHub 20 followers. Company: @_confluencelabs 291 followers. |
| Distribution Signals | Open-sourced ARC-AGI-2 solver (94 stars, GitHub); YC Launch page published (YC). No Product Hunt launch, no app store presence, no Chrome extension found. |
| Emails | founders@confluence.sh |
