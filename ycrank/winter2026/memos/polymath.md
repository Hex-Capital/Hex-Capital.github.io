# Polymath

> Automating RL environment generation

| Field | Value |
|-------|-------|
| Website | https://polymathlabs.ai/ |
| YC Page | https://www.ycombinator.com/companies/polymath |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Reinforcement Learning, B2B, Big Data, Infrastructure, AI |
| YC Partner | Ankit Gupta |
| Emails | founders@polymathlabs.ai |

## The Idea

**Problem:** As AI development shifts from static question-answering toward autonomous agents that operate over long horizons, these agents must be trained in environments that reflect real-world complexity. Today, RL environment generation is bottlenecked by human labor — companies hire contractors to hand-build artifacts one-by-one (YC company page). This approach is expensive, slow, and does not scale. The customer segment is frontier AI labs and enterprises training agentic AI models. Current alternatives include manual environment construction by contractors (e.g., via Scale AI's data labeling workforce) or internal tooling built ad hoc by AI labs.

**Approach:** Polymath builds world generation models and systems that automate the creation of RL environments, replacing manual labor with generative models. The company's stated end goal is to create realistic, long-horizon environments from a text description alone (YC company page). Their environments include applications and tools (Slack, email, GitHub, Linear, etc.), initial state data, task descriptions, verifiers for agent performance evaluation, and sandboxed infrastructure for agents to operate in (polymathlabs.ai). The company has shipped **Horizon-SWE**, a long-horizon, multi-tool SWE agent benchmark that includes a sandboxed production-grade environment with a 20,000+ commit monorepo, MCP servers, services (Linear, Notion, Slack, Prometheus, Grafana, Sentry), a running full-stack application with databases/caches/queues, and a synthetic traffic generator (polymathlabs.ai/blog/horizon-swe, published February 2, 2026).

**Differentiation:** Unlike traditional data-labeling companies (Scale AI, Surge AI) that use human contractors to build environments, Polymath uses generative models to automate environment creation. Unlike benchmark-only projects (SWE-Bench, SWE-Bench Pro by Scale AI), Polymath's Horizon-SWE evaluates agents in full production-grade, multi-service settings rather than isolated code patches. Compared to Mechanize, which focuses on "replication training" where agents recreate existing implementations, Polymath emphasizes automated generation of novel environments from text descriptions. Compared to Idler (YC), which builds RL environments specifically for coding tasks, Polymath's scope spans multiple domains including infrastructure, deployment, monitoring, and incident response.

**Business Model:** No pricing page is visible on the website (polymathlabs.ai). [Inferred]: Most likely monetization path is selling RL environments and environment-generation infrastructure to frontier AI labs (OpenAI, Anthropic, Google DeepMind) on a contract or consumption basis, given that this is the dominant go-to-market pattern in the RL environment space (TechCrunch, Sep 2025 via search snippet).

**TAM/SAM:** The broader reinforcement learning market was valued at USD 13.52B in 2025, projected to reach USD 36.75B by 2029 at 28.4% CAGR (Research and Markets via search snippet). Grand View Research also publishes a global RL market report (Grand View Research via search snippet). No public TAM/SAM data found for the specific RL environment generation sub-segment. Wing Venture Capital published analysis projecting the RL environment market will consolidate to 3-5 market leaders by 2026-2030 (Wing VC via search snippet).

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct sales to frontier AI labs (Anthropic, OpenAI, Google DeepMind), which are the primary buyers of RL environments. The Horizon-SWE benchmark serves as a credibility-building and inbound-lead-generation mechanism, demonstrating environment quality to potential lab customers. Surge AI reported building a dedicated internal RL environment organization to meet rising client demand (search snippet), indicating strong pull from labs.

## Defensibility

The Horizon-SWE benchmark, published February 2026, serves as a public proof-of-capability and could create brand association in the RL environment evaluation space (polymathlabs.ai/blog/horizon-swe). The company's generative approach to environment creation — automating what is currently manual labor — could develop a data flywheel if environments generated at scale produce proprietary training signal or task distributions. The team's stated years of experience post-training frontier models in industry (YC company page) represents domain-specific technical knowledge.

No defensibility signals found in public sources regarding network effects, switching costs, patents, or regulatory barriers at this stage. [Inferred]: Potential moat could develop via proprietary world generation models trained on accumulated environment data, but this is unproven at this stage.

**Market structure:** [Inferred]: Large incumbents in the data-labeling space (Scale AI, Surge AI) are already building RL environment capabilities. Scale AI published Agent-RLVR, which improved a 72B model on SWE-Bench from 9.4% to 22.4% using 817 training environments (Scale AI via search snippet). However, these incumbents' existing business models are labor-intensive and margin-structured around human annotation; a fully automated, generative approach to environment creation could cannibalize their contractor workforces and requires different R&D investment. Surge AI had $1.2B in revenue from its labor-based model (search snippet), creating a potential innovator's dilemma. No structural barrier identified at this stage beyond this potential business model conflict.

**Commoditization risk:** Multiple well-funded competitors are building in the RL environment space. Mechanize has backing from Nat Friedman, Daniel Gross, Patrick Collison, and Jeff Dean, and is already working with Anthropic (TechCrunch, Sep 2025 via search snippet). Prime Intellect has raised $70.4M and has an open-source environments program (Prime Intellect blog via search snippet). Scale AI and Surge AI bring large existing customer bases and infrastructure. The technical barrier to building RL environments is moderate; the barrier to automating their generation at high quality is higher but unverified for any player at scale.

## Market & Traction

**Traction signals:**
- Horizon-SWE benchmark published February 2, 2026 (updated February 6, 2026) on polymathlabs.ai/blog/horizon-swe, with results for 8 frontier models including Claude Opus 4.6, GPT-5.2 Codex, and Gemini 3 Pro.
- Twitter/X: @polymath_labs (count not retrievable due to JavaScript rendering)
- LinkedIn: linkedin.com/company/polymath-ai-labs/ (follower count not retrievable)
- No Product Hunt listing found for this specific company.
- No press coverage in named publications found.
- No Discord or Slack community found.
- No app store or Chrome Web Store presence.
- 0 open job postings (YC page).

**Competitive landscape:**

1. **Mechanize** — Builds RL environments simulating real-world work scenarios; focuses on "replication training." Backed by Nat Friedman, Daniel Gross, Patrick Collison, Jeff Dean, Dwarkesh Patel, Sholto Douglas (TechCrunch, Sep 2025 via search snippet). Offers $500K engineer salaries. Already working with Anthropic. Funding amount not publicly disclosed. Revenue unknown. Key differentiator vs. Polymath: focuses on replicating existing implementations rather than generating novel environments from text descriptions.

2. **Prime Intellect** — $70.4M total raised; $49.9M Series B in December 2025 led by Founders Fund (Prime Intellect blog, PitchBook via search snippet). Open-source RL environment program ("Environments Hub"). Revenue unknown. Key differentiator vs. Polymath: decentralized compute infrastructure and open-source approach to environments.

3. **Idler (YC)** — $500K raised from YC. Closed a "multimillion-dollar contract with a leading foundation lab" (YC page via search snippet). 5 employees. Builds RL environments that teach AI models to code using real-world coding scenarios. Key differentiator vs. Polymath: narrower focus on coding-specific environments; has disclosed a signed enterprise contract.

4. **Collinear AI** — Founded 2023, Mountain View. Funded by Khasm Labs, 11.2 Capital, Engineering Capital, Firestreak Ventures (amount undisclosed) (search snippet). Provides RL environments, evaluation data, and post-training data with production-grade tool ecosystems (Jira, Confluence, ServiceNow, EMR, Shopify). Revenue unknown. Key differentiator vs. Polymath: broader enterprise tool integration focus and combined eval + post-training data offering.

5. **Scale AI** — Public reports indicate Scale is expanding into RL environments via its Agent-RLVR product, which improved a 72B model on SWE-Bench from 9.4% to 22.4% (Scale AI via search snippet). Total funding $1.6B+ across multiple rounds (widely reported). Revenue estimated in the billions. Key differentiator vs. Polymath: massive existing customer base, brand recognition among AI labs, and human-in-the-loop infrastructure.

**Why now:** [Inferred]: The specific catalysts enabling this opportunity include: (1) Anthropic's reported internal discussions about spending over $1 billion on RL environments in the coming year (The Information, referenced in TechCrunch Sep 2025 via search snippet), signaling massive demand from frontier labs; (2) the shift in AI development from static benchmarks to agentic, long-horizon task completion requiring complex, multi-tool environments; (3) the emergence of MCP (Model Context Protocol) as a standardization layer for tool integration, reducing the cost of building multi-service environments; and (4) frontier model capabilities crossing the threshold where agents can meaningfully operate in complex environments (e.g., Claude Opus 4.6 achieving 25.5% pass rate on Horizon-SWE), validating the need for more challenging training environments.

## Founders & Team

**Dylan Ma** — Co-Founder & CEO
- Background: Researcher and engineer with experience from UC Berkeley and Hume AI (YC company page, search snippets). The YC company description states the team has "years of experience post-training frontier models in industry."
- Education: UC Berkeley (YC company page via search snippet)
- Prior companies: Hume AI (Senior ML Engineer, per search snippet referencing YC/LinkedIn data)
- Twitter/X: No confirmed personal account found
- LinkedIn: linkedin.com/in/dylan-ma-45725b158/ — headline not retrievable (LinkedIn blocked fetch)
- GitHub: No confirmed public repos found (a "Da-Dylan-Ma" GitHub account belongs to a PhD student at McMaster University in Toronto — different person)

**Naren Yenuganti** — Co-Founder & CTO
- Background: Engineer with experience at Plaid and Amazon (The Org, search snippets). At Plaid since September 2024; previously at Amazon from May 2021 to September 2024 on the Planning and Optimization Technology team (The Org via search snippet). Designed and manufactured assistive devices (tongue-operated mouse for people with disabilities) through Berkeley SkyDeck HotDesk Incubator (search snippet). Received Ignite grant from Jacobs Institute for Design Innovation and CITRIS Invention Lab (search snippet).
- Education: UC Berkeley, EECS + BioE, class of 2022 (LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/narenyenuganti/ — "EECS + BioE @ Berkeley" (search snippet)
- GitHub: github.com/narenyenuganti — 5 repos, 0 stars, 3 followers. Pinned projects include factly (misinformation detection, JavaScript), Hungarian-Algorithm (combinatorial optimization, Java), Cheapest-Network (NP-Hard approximation, Python). Pull Shark and Arctic Code Vault Contributor badges.

**Co-founder relationship:** Both founders attended UC Berkeley, providing a shared educational background. Dylan Ma's tenure at Hume AI and Naren Yenuganti's time at Berkeley overlap with the university, suggesting they may have connected through the Berkeley AI/ML ecosystem.

**Founder-market fit:** The founding team brings direct experience post-training frontier models (Dylan Ma at Hume AI, which works on expressive AI) and building large-scale data systems (Naren Yenuganti at Amazon's Planning and Optimization Technology team and Plaid). This combination of ML post-training expertise and data infrastructure engineering maps to the core technical challenge of automating RL environment generation at scale.

## Key Risks

**Brand disambiguation:** "Polymath" is an extremely common brand name shared by multiple companies including Polymath Robotics (YC S22, autonomous vehicles), Polymath Network (blockchain/crypto with active Twitter presence @PolymathNetwork), Polymath Pods (AI workspace), and numerous other entities across LinkedIn. This creates SEO, brand recognition, and customer discovery challenges.

**Well-funded competitive field:** The RL environment space has attracted significant capital and high-profile backing. Mechanize has backing from Nat Friedman, Daniel Gross, Patrick Collison, and Jeff Dean, and is already working with Anthropic (TechCrunch, Sep 2025 via search snippet). Prime Intellect has raised $70.4M. Scale AI and Surge AI (seeking $1B raise at $15B+ valuation) bring massive existing infrastructure. Wing VC projects the market will consolidate to 3-5 leaders by 2030 (Wing VC via search snippet). As a 2-person pre-seed team, Polymath faces a significant resource gap.

**Customer concentration risk:** The RL environment market's buyers are concentrated among a small number of frontier AI labs (Anthropic, OpenAI, Google DeepMind, Meta). Losing a single customer contract or failing to win initial contracts could be existential. Anthropic's reported $1B+ planned spend on RL environments (The Information via TechCrunch, Sep 2025) illustrates that a few labs drive the majority of demand.

**Technical feasibility of full automation:** Polymath's stated end goal — creating realistic, long-horizon environments from a text description alone — represents a technically ambitious objective. Current shipped product (Horizon-SWE) is a benchmark, not a demonstrated automated environment generator. The gap between building a single high-quality benchmark environment and automating the generation of diverse environments at scale is not publicly validated.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader RL market: $13.52B in 2025, projected $36.75B by 2029 at 28.4% CAGR (Research and Markets via search snippet). No sub-segment TAM for RL environment generation specifically. |
| SAM | No public data found |
| Traction | Horizon-SWE benchmark published Feb 2, 2026 (polymathlabs.ai/blog/horizon-swe). No user counts, revenue, or customer contracts disclosed. |
| Revenue Signal | No public data found |
| Founders | Dylan Ma (CEO): UC Berkeley, Hume AI (Senior ML Engineer). Naren Yenuganti (CTO): UC Berkeley EECS+BioE '22, Amazon (2021-2024), Plaid (2024+). |
| Competitors | Mechanize (undisclosed funding, revenue unknown, replication training + Anthropic relationship). Prime Intellect ($70.4M raised, revenue unknown, open-source environments). Idler/YC ($500K YC + multimillion-dollar lab contract, revenue unknown, coding-focused RL envs). Collinear AI (undisclosed funding, revenue unknown, enterprise tool integration). Scale AI ($1.6B+ raised, revenue in billions, Agent-RLVR product). |
| Moat Signals | Horizon-SWE benchmark as brand/credibility signal. No network effects, patents, or switching costs identified. |
| Risk Factors | Brand disambiguation with multiple "Polymath" companies, well-funded competitive field, customer concentration among few frontier labs, technical feasibility of full environment automation unproven |
| Founder Reach | Dylan Ma: LinkedIn linkedin.com/in/dylan-ma-45725b158/ (details not retrievable), Twitter not found, GitHub not confirmed. Naren Yenuganti: LinkedIn linkedin.com/in/narenyenuganti/, Twitter not found, GitHub 5 repos / 0 stars / 3 followers. |
| Distribution Signals | Horizon-SWE benchmark blog post (Feb 2026). Company Twitter @polymath_labs (count not retrievable). LinkedIn company page exists (count not retrievable). No Product Hunt listing, no press coverage found. |
| Emails | founders@polymathlabs.ai |
