# Confluence Labs

> We're an AI research lab focused on learning efficiency

| Field | Value |
|-------|-------|
| Website | https://confluence.sh |
| YC Page | https://www.ycombinator.com/companies/confluence-labs |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, AI |

## The Idea

**Problem:** Modern AI systems require large volumes of data to perform well, but many high-value scientific and engineering domains—drug design, materials engineering, physics research—are inherently data-sparse because physical experiments are costly, slow, or dangerous. Researchers in these fields currently rely on manual experiment design heuristics, classical design-of-experiments methods, or brute-force high-throughput screening, all of which waste resources on low-information experiments. The customers are R&D teams at pharmaceutical companies, materials science labs, and academic research institutions.

**Approach:** Confluence Labs is building AI systems that (1) generate testable hypotheses and design maximally informative experiments in data-sparse domains, and (2) extract maximum learning from limited existing data via "data-efficient modeling" that combines LLMs with discrete program search (confluence.sh). Their public proof of capability is a solver for ARC-AGI-2—a benchmark testing AI's ability to solve novel reasoning tasks from just a few examples—where they achieved 97.9% accuracy on the public evaluation set at $11.77 per task (confluence.sh). The methodology relies on three principles: structuring problems to match LLM training data patterns, enabling extended reasoning so models build on prior work, and precisely defining solution criteria with measurable outcomes (confluence.sh).

**Differentiation:** The ARC-AGI-2 benchmark result differentiates Confluence Labs as a demonstration of sample-efficient reasoning. Most frontier AI labs (OpenAI, Google DeepMind, Anthropic) have focused on scaling with large datasets; Confluence Labs' approach targets the inverse: domains where data cannot be easily scaled. Compared to Poetiq—which also achieved high ARC-AGI-2 scores using a "meta-system" layered on top of frontier LLMs (Poetiq blog, Jan 2026)—Confluence Labs claims a higher public eval score (97.9% vs. Poetiq's 75% on the public eval, though measured at different times and cost points). Compared to Citrine Informatics and Kebotix in the materials domain, Confluence Labs is domain-agnostic rather than materials-specific. Their solver is open-sourced under MIT license at github.com/confluence-labs/arc-agi-2 (GitHub).

**Business Model:** No pricing page or commercial product is publicly listed on confluence.sh. The website solicits collaborators in hardware engineering, biology, materials science, and physics via founders@confluence.sh. [Inferred]: Most likely monetization path is enterprise SaaS or consulting engagements selling AI-driven experiment design to R&D organizations, potentially with per-experiment or platform-fee pricing, based on the B2B classification and the nature of the target customers.

**TAM/SAM:** The AI in drug discovery market alone was estimated at $2.35 billion in 2025, projected to reach $13.77 billion by 2033 at 24.8% CAGR (Grand View Research, 2025 via search snippet). The global materials informatics market was valued at $305 million in 2025 and is projected to reach $3.42 billion by 2035, growing at a CAGR of 27.3% (Future Markets Inc., 2025 via search snippet). The broader "AI for science" market spans multiple verticals; no single consolidated TAM figure was found for Confluence Labs' cross-domain positioning. [Inferred]: The serviceable market is the subset of R&D teams in pharma, materials science, and adjacent fields that have costly experimentation workflows and could benefit from AI-driven experiment design—likely in the low single-digit billions.

**GTM / Distribution:** No public GTM data found. The website states the company is "looking for collaborators" in target verticals (confluence.sh). The YC launch post received 8 upvotes (YC Launches page). [Inferred]: Most likely distribution path is direct outreach to academic labs and enterprise R&D teams, leveraging the ARC-AGI-2 result as a credibility signal and building domain-specific partnerships, typical for deep-tech AI research labs at this stage.

## Defensibility

Confluence Labs' primary public defensibility signal is demonstrated technical capability: achieving 97.9% on ARC-AGI-2 at $11.77/task (confluence.sh), a benchmark where pure LLMs score 0% and the best commercial systems scored 37.6% at $2.20/task in the ARC Prize 2025 competition (ARC Prize 2025 Results). The open-sourced solver (73 stars, 6 forks on GitHub as of Feb 2026) establishes a technical reputation but does not constitute a proprietary moat.

[Inferred]: Potential defensibility could develop via proprietary domain-specific datasets accumulated through client engagements (data flywheel), specialized fine-tuning for experiment design in specific verticals, and deep integration into customers' R&D workflows creating switching costs. However, none of these are proven at this stage.

**Market structure:** No structural barrier identified at this stage. Large AI labs (Google DeepMind, OpenAI) and well-funded startups (Poetiq with $45.8M, Recursion Pharmaceuticals, CuspAI with $100M) could pursue similar approaches to sample-efficient reasoning and apply them to scientific domains. [Inferred]: One potential structural factor is that frontier AI labs are incentivized to pursue broad commercial applications with larger immediate revenue, making data-sparse scientific niches lower priority—but this is a prioritization argument, not a structural barrier.

**Commoditization risk:** The open-sourcing of the ARC-AGI-2 solver means the specific methodology is publicly available. The core techniques—LLM-driven program synthesis, iterative refinement—are reproducible by any team with access to frontier LLMs. Poetiq has already demonstrated competitive ARC-AGI-2 performance with $45.8M in funding (PR Newswire, Jan 2026). Commoditization risk is elevated for the benchmark-solving capability itself; defensibility would need to come from domain-specific applications and accumulated expertise in translating the approach to real-world scientific experiment design.

## Market & Traction

**Traction signals:**
- ARC-AGI-2 public evaluation: 97.9% score at $11.77/task (confluence.sh, Feb 2026)
- GitHub: 73 stars, 6 forks on confluence-labs/arc-agi-2 repo (GitHub, Feb 2026)
- GitHub org: 5 followers, 1 public repository (GitHub, Feb 2026)
- YC Launch post: 8 upvotes (YC Launches)
- Stacker News post: 212 sats, 155 credits, 0 comments (stacker.news)
- Twitter/X: Company account @_confluencelabs (count not retrievable); Brent Burdick's launch tweet at @BingBongBrent (engagement not retrievable due to JavaScript)
- LinkedIn company page: No confirmed company page found for this specific entity (multiple unrelated "Confluence" companies dominate results)
- Product Hunt: No launch found
- Discord/Slack community: No public data found
- Revenue: No public data found
- Paying customers: No public data found

**Competitive landscape:**

1. **Poetiq** ($45.8M seed raised, Jan 2026; revenue unknown): LLM meta-system that pairs with any frontier LLM to improve reasoning, achieving 75% on ARC-AGI-2 public eval using GPT-5.2. Founded by former Google DeepMind researchers. Differentiator vs. Confluence Labs: Poetiq focuses on enhancing general LLM reasoning rather than scientific experiment design specifically; it is better funded and has a broader product scope (PR Newswire, Jan 2026 via search snippet).

2. **Citrine Informatics** (total funding undisclosed publicly; revenue unknown): Generative AI platform for materials science data management and virtual experimentation, founded 2013. Strategic partnership with BASF. Differentiator vs. Confluence Labs: Citrine is materials-domain-specific with an established enterprise customer base and 12+ years of domain data accumulation, while Confluence Labs is domain-agnostic and pre-product (CB Insights via search snippet).

3. **Kebotix** ($23.87M total funding; revenue unknown): Closed-loop AI + robotics platform for molecular materials discovery, combining AI-driven suggestion with physical robotic synthesis. Partnership with LG Chem. Differentiator vs. Confluence Labs: Kebotix integrates physical robotic experimentation, not just computational experiment design (CB Insights via search snippet).

4. **Recursion Pharmaceuticals** (public company, merged with Exscientia in early 2025; >$1B in milestone commitments): Conducts millions of biological experiments weekly with automated labs. Differentiator vs. Confluence Labs: Recursion operates at massive scale with proprietary biological datasets and physical lab infrastructure, far beyond computational experiment design (ScienceDirect, 2025 via search snippet).

5. **CuspAI** ($100M Series A, Sep 2025; revenue unknown): AI-powered "search engine for molecules" backed by NEA, Temasek, NVentures. Differentiator vs. Confluence Labs: CuspAI focuses specifically on molecular discovery with domain-specific generative models, while Confluence Labs positions as domain-agnostic (Fortune, Sep 2025 via search snippet).

**Why now:** [Inferred]: Several converging factors create the opening. First, frontier LLM capabilities crossed a threshold in 2024-2025 where program synthesis became viable for complex reasoning tasks—evidenced by the jump from single-digit ARC-AGI-2 scores to near-saturation within approximately one year. Second, the cost of frontier LLM inference has dropped substantially, making compute-intensive experiment design economically viable at $11.77/task rather than hundreds of dollars. Third, the broader "AI for science" investment wave (Lila Sciences: $200M seed, Periodic Labs: $300M, CuspAI: $100M Series A, all in 2025) signals institutional readiness to fund AI applications in data-sparse R&D domains. Fourth, open-source LLMs and APIs have lowered the barrier for small teams to build on frontier model capabilities.

## Founders & Team

**Brent Burdick** — Co-founder
- Self-described "college dropout and self-taught engineer and researcher" (YC page)
- Left college in 2022 to teach himself to code; has since helped build MVPs and full-stack architectures for 6+ startups (brent.engineering)
- Education: Attended University of North Carolina at Chapel Hill (LinkedIn via search snippet)
- Prior projects: Rift by Morph (open-source AI pair programming VSCode extension), Prompt Smoothie (LLM optimization tool), Atlas (in-browser IDE), various language learning apps (brent.engineering)
- Twitter/X: @BingBongBrent (count not retrievable due to JavaScript)
- LinkedIn: linkedin.com/in/brent-burdick/ — Self-employed, San Francisco Bay Area, 224 connections (LinkedIn via search snippet)
- GitHub: github.com/Brentably — 49 repos, 19 followers; top repo: simple-agent (3 stars) (GitHub)

**Niranjan Baskaran** — Co-founder
- YC profile tagline: "Training models by allowing knowledge to compound" (YC page)
- Education: Vassar College ('27), Dartmouth College ('28), RSI 2021 participant (one of ~80 students selected globally), ISEF 2021/2022 participant, Atlas Fellow (LinkedIn via search snippet; CEE.org via search snippet)
- At ISEF 2021, awarded Mu-Alpha-Theta National Math Honor Society Second Special Award ($1,000) for mathematics research (search snippet)
- At RSI, selected as one of 10 students to give an Encore presentation (CEE.org via search snippet)
- Research: Developed proof-of-concept JsPsych AI agent using RAG to produce working experiments from natural language prompts with Prof. Joshua de Leeuw; worked on metadata standards for behavioral experiments at Vassar (Vassar College via search snippet)
- Twitter/X: No confirmed personal account found
- LinkedIn: linkedin.com/in/niranjan-baskaran-a906a5205/ — Poughkeepsie, NY (LinkedIn)
- GitHub: No confirmed personal account found

**Co-founder relationship:** Both founders are listed as based in San Francisco. No shared prior employer or university overlap is visible from the data gathered—Burdick attended UNC Chapel Hill while Baskaran attended Vassar and Dartmouth. No public data on how they met.

**Founder-market fit:** Baskaran's background in research methodology (RSI, ISEF, experimental psychology research at Vassar) and competitive mathematics aligns with the company's focus on experiment design and sample-efficient learning. Burdick's experience building full-stack software products across 6+ startups and open-source AI tools (Rift, Prompt Smoothie) provides the engineering capability to productize research. The combination of a research-oriented founder and a builder-oriented founder maps to the company's positioning as an AI research lab that ships usable tools. No advisors, board members, or notable individual investors have been publicly disclosed. Diana Hu is listed as the primary YC partner (YC page).

## Key Risks

**Name confusion with Atlassian Confluence:** "Confluence" is the name of Atlassian's widely-used enterprise wiki product. Search results for "Confluence Labs" are heavily polluted by Atlassian Confluence reviews, documentation, and marketplace listings. A separate European pre-accelerator called "Confluence Lab" (confluence-lab.eu) also exists. This creates brand discovery and SEO challenges, particularly for inbound marketing.

**Benchmark-to-product gap:** The company's primary public credential is an ARC-AGI-2 benchmark score. ARC-AGI-2 tests abstract pattern recognition on synthetic grid puzzles, which is structurally different from real-world experiment design in chemistry, materials science, or biology. No evidence of a commercial product, paying customers, or pilot deployments in any scientific domain has been found. Translating benchmark performance into a viable product for R&D teams is an unproven step.

**Well-funded competition in adjacent domains:** Poetiq ($45.8M seed), CuspAI ($100M Series A), Periodic Labs ($300M), Lila Sciences ($200M seed), and Recursion (public company) are all pursuing AI for scientific discovery with substantially more capital. Several of these have domain-specific data assets, proprietary lab infrastructure, or partnerships with major enterprises (BASF, LG Chem) that Confluence Labs does not have.

**Open-source strategy trade-off:** The ARC-AGI-2 solver is MIT-licensed and fully open-sourced, which enables reproducibility and community credibility but makes the specific methodology freely available to competitors. Any future product would need to offer value beyond what the open-source code provides.

**Early-career founding team:** Both founders are in their early 20s without prior startup exits, enterprise sales experience, or deep domain expertise in the target verticals (pharma, materials science, hardware engineering). Selling to enterprise R&D organizations typically requires domain credibility and lengthy sales cycles.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.35B AI in drug discovery (Grand View Research, 2025 via search snippet, 24.8% CAGR); $305M materials informatics (Future Markets Inc., 2025 via search snippet, 27.3% CAGR). No consolidated cross-domain TAM found. |
| SAM | No public data found |
| Traction | 97.9% ARC-AGI-2 public eval score at $11.77/task (confluence.sh, Feb 2026); 73 GitHub stars on arc-agi-2 repo (GitHub, Feb 2026); 8 upvotes on YC Launch post (YC Launches) |
| Revenue Signal | No public data found |
| Founders | Niranjan Baskaran (Co-founder): RSI '21, ISEF '21/'22, Vassar '27, Dartmouth '28, Atlas Fellow. Brent Burdick (Co-founder): Self-taught engineer, ex-freelance builder for 6+ startups, UNC Chapel Hill. |
| Competitors | Poetiq ($45.8M raised, revenue unknown, general LLM reasoning meta-system vs. Confluence Labs' experiment-design focus); Citrine Informatics (funding undisclosed, revenue unknown, materials-specific with BASF partnership); Kebotix ($23.87M raised, revenue unknown, AI + robotics closed-loop for molecular materials); CuspAI ($100M raised, revenue unknown, molecular search engine); Recursion (public company, massive-scale automated bio labs) |
| Moat Signals | 97.9% SOTA on ARC-AGI-2 as technical credibility signal; open-source solver (73 GitHub stars). No proprietary data assets or customer lock-in identified. |
| Risk Factors | Benchmark-to-product translation unproven, well-funded competitors in adjacent domains, brand confusion with Atlassian Confluence |
| Founder Reach | Brent Burdick: Twitter @BingBongBrent (count not retrievable), LinkedIn 224 connections, GitHub 19 followers. Niranjan Baskaran: Twitter not found, LinkedIn (profile found, connection count not retrieved), GitHub not found. |
| Distribution Signals | No Product Hunt launch found. YC Launch post (8 upvotes). GitHub repo (73 stars). No app store, Chrome extension, or web traffic data found. |
