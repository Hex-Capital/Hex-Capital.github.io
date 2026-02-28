# Polymath

> Long-horizon RL

| Field | Value |
|-------|-------|
| Website | https://polymathlabs.ai/ |
| YC Page | https://www.ycombinator.com/companies/polymath |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, B2B, Big Data, AI |

## The Idea

**Problem:** Frontier AI labs (Anthropic, OpenAI, Google DeepMind, etc.) need high-quality reinforcement learning environments to train and evaluate AI agents that can perform reliably over long-horizon, multi-tool tasks. Building these environments in-house is resource-intensive: Anthropic alone has discussed spending over $1 billion on RL environments over the next year (TechCrunch, Sep 2025 via search snippet). Current approaches involve a fragmented vendor ecosystem of seed-stage companies with fewer than 20 employees each, typically serving 1–3 customers under exclusive contracts (SemiAnalysis newsletter, 2025). The bottleneck is not data but rather the construction of rich, realistic, and reusable RL environments at scale.

**Approach:** Polymath builds "automated environment factories" that produce high-fidelity training and evaluation environments at scale. Their environments integrate production-grade infrastructure (frontends, backends, databases, object stores, caches, queues) with multiple tools (Slack, Linear, Notion, Sentry, Prometheus, CI/CD pipelines, deployment systems) and incorporate synthetic traffic generation (Polymath website). Their publicly released benchmark, Horizon-SWE, features a monorepo with 20,000+ human-authored commits and 50 diverse tasks spanning multi-service feature implementation, security incident response, latency optimization, API migration, and flaky test remediation (polymathlabs.ai/blog/horizon-swe).

**Differentiation:** Most RL environment vendors build environments manually, charge approximately $20,000 per website replica, and operate at limited scale (SemiAnalysis newsletter, 2025). Polymath's emphasis is on *automated* environment generation — "environment factories" rather than hand-crafted individual environments. Their Horizon-SWE benchmark is differentiated from existing benchmarks like SWE-Bench Pro (Scale AI) by incorporating multi-tool, multi-service production-grade stacks rather than isolated code-patching tasks. SWE-Bench Pro uses open-source repositories where models generate patches for individual issues; Horizon-SWE requires agents to coordinate across services, tools, and deployment pipelines.

**Business Model:** No pricing page is visible on the website. [Inferred]: The most likely monetization path is B2B contracts with frontier AI labs, selling access to environment factories and custom environment generation. The SemiAnalysis newsletter reports that environment companies charge approximately $20,000 per website replica, with OpenAI purchasing hundreds of sites — suggesting per-environment or subscription-based pricing as the likely model for this market segment.

**TAM/SAM:** The agentic AI market is valued at $7.06 billion in 2025, projected to reach $93.20 billion by 2032 at 44.6% CAGR (MarketsandMarkets, 2025 via search snippet). The more specific RL environments segment: Anthropic is estimated to be spending tens of millions annually, with aggregate frontier lab spend projected to grow 3–5x into 2026 (Data Gravity newsletter, 2025). No public TAM/SAM data found for the RL environments sub-segment specifically.

**GTM / Distribution:** [Inferred]: Most likely distribution is direct B2B sales to frontier AI labs (Anthropic, OpenAI, Google DeepMind, Meta) and AI-native companies building agent products. The Horizon-SWE benchmark serves as a public credibility signal and potential demand-generation tool. YC primary partner is Ankit Gupta (YC page).

## Defensibility

The core defensibility signal is technical complexity: building production-grade, multi-service RL environments with realistic synthetic traffic and verifiable evaluation rubrics requires deep systems engineering and ML evaluation expertise. The automation of environment generation ("factories") could create a compounding data/engineering advantage if the system improves with each environment produced.

Horizon-SWE, as a published benchmark adopted by model developers for evaluation, could generate a standards-setting dynamic if frontier labs begin reporting results against it. The benchmark currently includes evaluation results for Claude Opus 4.6, Claude Opus 4.5, Claude Sonnet 4.5, GPT-5.2 Codex, and Gemini 3 Pro (polymathlabs.ai/blog/horizon-swe).

**Market structure:** Frontier labs are deliberately cultivating diverse vendor ecosystems to commoditize RL environments and reduce costs (SemiAnalysis newsletter, 2025). No structural barrier identified that would prevent well-resourced incumbents (Scale AI, Surge AI, Mercor) from building competing environment factories. [Inferred]: The structural challenge for incumbents is that traditional data-labeling companies (Scale AI, Surge, Turing) built their operations around static data annotation workflows; pivoting to interactive, containerized, production-grade environment simulation requires fundamentally different engineering talent and infrastructure. However, Scale AI is actively expanding into RL environments (TechBriefly, Sep 2025 via search snippet).

**Commoditization risk:** The SemiAnalysis newsletter identifies 35+ companies building RL environments as of 2025, most at seed stage. Applied Compute ($100M raised), Mechanize (undisclosed but well-funded), Bespoke Labs ($7.25M raised), and Prime Intellect ($15M raised) are all building in this space. Labs themselves are building in-house capabilities. The risk of environment generation becoming commoditized is material, particularly as open-source alternatives like Prime Intellect's Environments Hub emerge.

## Market & Traction

**Traction signals:**
- Published Horizon-SWE benchmark with evaluation results for 5 frontier models (polymathlabs.ai/blog/horizon-swe). 50 tasks, 20,000+ human-authored commits in the benchmark monorepo.
- Twitter/X: @polymathlabz (follower count not retrievable due to JavaScript rendering)
- LinkedIn: No confirmed company page for this specific entity found. Note: A "Polymaths" LinkedIn page (linkedin.com/company/polymathlabs) with 2,113 followers exists but appears to be a different company — a software development firm based in Prishtinë, Kosovo (polymathlabs.co).
- Discord/Slack community: No public data found for this specific Polymath entity.
- Product Hunt: No launch found.
- No public revenue, user count, or customer data found.

**Competitive landscape:**

1. **Applied Compute** ($100M raised total — $20M seed led by Benchmark at $100M valuation in Jun 2025, $80M Series B in Oct 2025; revenue unknown) — Founded by ex-OpenAI researchers (Yash, Rhythm, Linden). Trains custom RL models on proprietary enterprise data and deploys in-house agent workforces. Differentiation vs. Polymath: Applied Compute is focused on deploying end-to-end enterprise agents, not selling environment infrastructure to labs. (SiliconANGLE, Oct 2025; Upstarts Media, Sep 2025)

2. **Bespoke Labs** ($7.25M Series A, May 2024; revenue unknown) — Founded by Alex Dimakis. Builds AI data and RL environments for post-training agents, working with both enterprises and frontier labs. Published OpenThoughts reasoning dataset and SOTA models (Bespoke-MiniCheck, Bespoke-MiniChart). Differentiation vs. Polymath: Research-heavy, broader focus on data curation and evolutionary algorithms alongside environments. (Crunchbase via search snippet; Tracxn via search snippet)

3. **Prime Intellect** ($15M raised, backed by Andrej Karpathy, Founders Fund, Menlo Ventures; revenue unknown) — Open-source approach with "Environments Hub" positioned as "Hugging Face for RL environments." Released INTELLECT-3 (100B+ parameter MoE model) trained on their RL stack. Differentiation vs. Polymath: Open-source-first model, marketplace/community approach vs. Polymath's automated factory approach. (primeintellect.ai/blog/fundraise)

4. **Mechanize** (undisclosed funding; backed by Nat Friedman, Daniel Gross, Patrick Collison, Jeff Dean, Dwarkesh Patel; revenue unknown) — Offers $500K salaries to SWEs to build RL environments for coding agents. Partners with Anthropic. Differentiation vs. Polymath: Human-intensive, high-cost labor model for building fewer but more robust environments, vs. Polymath's automated factory approach. (TechCrunch, Sep 2025; Yahoo Finance, 2025 via search snippet)

5. **Scale AI** ($14.3B invested by Meta for 49% stake, Jun 2025, valuing company at $29B+; estimated ~$1.4B annual revenue) — SEAL lab expanding into RL environments and enterprise agent training. Maintains SWE-Bench Pro leaderboard. Differentiation vs. Polymath: Massive incumbent with data-labeling empire now moving into RL environments as adjacent expansion. (TechBriefly, Sep 2025 via search snippet; various sources)

**Why now:** [Inferred]: The convergence of several specific catalysts opened this opportunity: (1) Reinforcement Learning from Verifiable Rewards (RLVR) emerged in 2025 as a new major training stage for LLMs, creating demand for verification-compatible environments (Andrej Karpathy, 2025 LLM Year in Review); (2) Anthropic and OpenAI began spending at the scale of tens of millions to billions on RL environment procurement (TechCrunch, Sep 2025 via search snippet); (3) AI agent capabilities crossed a threshold where long-horizon, multi-tool tasks became feasible but environment quality became the bottleneck — top models still score below 25% on Horizon-SWE (polymathlabs.ai/blog/horizon-swe), indicating a large performance gap that better environments could address.

## Founders & Team

**Dylan Ma** — Co-Founder & CEO
- Education: UC Berkeley (YC page)
- Prior experience: Hume AI, AWS (YC page)
- Twitter/X: No confirmed personal account found. Company account: @polymathlabz (count not retrievable)
- LinkedIn: linkedin.com/in/dylanma5621 — "Co-Founder & CEO at Polymath (YC W26)" (via search snippet)
- GitHub: No public repos found

**Naren Yenuganti** — Co-Founder & CTO
- Education: UC Berkeley — EECS + BioE (LinkedIn via search snippet)
- Prior experience: Plaid (Sep 2024–), Amazon — Planning and Optimization Technology team (May 2021–Sep 2024), RefleXion Medical (internship — developed full-stack application for medical device testing) (LinkedIn via search snippet; The Org via search snippet)
- Co-founded Omni Technologies (assistive technology for individuals with disabilities, supported by Berkeley SkyDeck HotDesk Incubator) (GitHub profile via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/narenyenuganti — "EECS + BioE @ Berkeley" (via search snippet)
- GitHub: github.com/narenyenuganti — 5 public repos, 3 followers, 0 starred repos. Projects include factly (misinformation detection), Hungarian-Algorithm (combinatorial optimization), Cheapest-Network (NP-Hard approximation). Arctic Code Vault Contributor achievement. (GitHub)

**Co-founder relationship:** Both founders attended UC Berkeley, providing a shared institutional background. No additional shared employer or overlap was identified from available sources.

**Founder-market fit:** Both founders have UC Berkeley EECS backgrounds. Dylan Ma's experience at Hume AI (an AI research company focused on expressive AI) and AWS provides exposure to both AI research and cloud infrastructure. Naren Yenuganti's experience at Amazon's Planning and Optimization Technology team and at Plaid provides background in systems engineering and data infrastructure at scale. His co-founding of Omni Technologies through Berkeley SkyDeck demonstrates prior startup experience. The combination of AI research (Dylan) and systems/infrastructure engineering (Naren) is directly relevant to building automated RL environment factories. No advisors, board members, or notable investors (beyond YC) were identified.

## Key Risks

**RL environment commoditization:** The SemiAnalysis newsletter identifies 35+ companies building RL environments, and frontier labs are deliberately cultivating diverse vendor ecosystems to drive prices down (SemiAnalysis, 2025). Prime Intellect is open-sourcing environments, which could undercut paid offerings. The per-environment pricing model (~$20K per site replica) may face rapid compression.

**Incumbent expansion:** Scale AI, with a $29B+ valuation and existing relationships with all major frontier labs, is actively expanding its SEAL lab into RL environments and enterprise agent training (TechBriefly, Sep 2025). Scale's existing customer relationships and distribution could crowd out smaller vendors.

**Customer concentration risk:** The addressable buyer pool for RL environments sold to frontier labs is extremely small — Anthropic, OpenAI, Google DeepMind, Meta, and a handful of others. Loss of a single customer relationship would represent a material revenue impact. Labs also have the capability and incentive to build environments in-house.

**Brand disambiguation:** Multiple companies share the "Polymath" name, including Polymath Robotics (YC S22), Polymath Network (blockchain), Polymath AI (trypolymath.ai, strategy consulting), and a Facebook Research GitHub repo also called "polymath." This creates potential confusion in market positioning and search visibility.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.06B agentic AI market in 2025, projected $93.20B by 2032 at 44.6% CAGR (MarketsandMarkets, 2025 via search snippet). RL environments sub-segment: aggregate frontier lab spend estimated at tens of millions annually, projected 3–5x growth into 2026 (Data Gravity newsletter, 2025). |
| SAM | No public data found |
| Traction | Horizon-SWE benchmark published with 50 tasks and 5 frontier model evaluations (polymathlabs.ai/blog/horizon-swe). No user counts, customer names, or revenue disclosed. |
| Revenue Signal | No public data found |
| Founders | Dylan Ma (CEO): UC Berkeley, ex-Hume AI, ex-AWS. Naren Yenuganti (CTO): UC Berkeley EECS+BioE, ex-Plaid, ex-Amazon, co-founded Omni Technologies. |
| Competitors | Applied Compute ($100M raised, revenue unknown, enterprise agent deployment vs. lab infrastructure); Bespoke Labs ($7.25M raised, revenue unknown, data curation + RL environments); Prime Intellect ($15M raised, revenue unknown, open-source environments hub); Mechanize (undisclosed funding, revenue unknown, human-intensive environment building for coding agents); Scale AI ($29B+ valuation, ~$1.4B revenue, incumbent expanding from data labeling into RL environments) |
| Moat Signals | Horizon-SWE benchmark as potential standard-setting evaluation; automated environment factory approach vs. manual construction |
| Risk Factors | RL environment commoditization (35+ vendors, open-source alternatives), incumbent expansion (Scale AI entering market), customer concentration (small buyer pool of frontier labs) |
| Founder Reach | Dylan Ma: Twitter not confirmed, LinkedIn linkedin.com/in/dylanma5621, GitHub not found. Naren Yenuganti: Twitter not found, LinkedIn linkedin.com/in/narenyenuganti, GitHub 3 followers/0 stars. Company Twitter @polymathlabz (count not retrievable). |
| Distribution Signals | No public data found (no Product Hunt launch, no app store presence, no Chrome extension) |
