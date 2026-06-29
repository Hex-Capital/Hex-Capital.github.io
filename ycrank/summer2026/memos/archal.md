# Archal

> The eval platform for autonomous software

| Field | Value |
|-------|-------|
| Website | https://www.archal.ai/ |
| YC Page | https://www.ycombinator.com/companies/archal |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, API, Infrastructure, AI |
| YC Partner | Ankit Gupta |
| Emails | No public data found |

## The Idea

- **Problem:** Teams building autonomous agents that write to databases, trigger payments, and push code have no safe pre-production test environment, so failures are only discovered in production after irreversible damage (archal.ai landing copy, Jun 2026).
- **Approach:** Archal spins up stateful clones of third-party SaaS APIs (GitHub, Slack, Stripe, Google Workspace, Linear, Supabase) that hold object relationships, rate limits, and errors checked against the live API, and runs markdown-defined scenarios in CI with reset-in-microseconds clones (archal.ai landing copy, Jun 2026).
- **Differentiation:** Versus LangSmith/Braintrust/Arize (trace-and-score LLM observability platforms), Archal supplies the simulated downstream-SaaS environment the agent acts against rather than only scoring outputs (Latitude comparison, 2026); versus E2B/Modal/Blaxel code-execution sandboxes, Archal targets app-state cloning of SaaS APIs rather than generic code-runtime isolation (Modal blog, Blaxel blog, 2026).
- **Business Model:** [Inferred]: Usage-based or seat-based developer-tools pricing tied to scenario runs / CI minutes — no pricing page is published on archal.ai (WebFetch archal.ai, Jun 2026).
- **TAM/SAM:** No public TAM/SAM data found for the agent-sandbox-with-stateful-SaaS-clones segment; adjacent LLM-observability/eval space is contested by platforms collectively valued in the hundreds of millions (Braintrust $800M post, Axios, Feb 2026).
- **GTM / Distribution:** [Inferred]: Bottom-up developer adoption via framework-agnostic SDKs (LangChain, custom loops, MCP, REST integrations listed on archal.ai, Jun 2026) and YC-network design-partner motion, given the 2-person team and no published sales collateral.

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond the stated engineering claim that clones are "checked against the live API" (archal.ai landing copy, Jun 2026).
- **Future moat:** [Inferred]: A library of high-fidelity, continuously drift-tested clones for the top SaaS APIs could become a switching-cost asset as customers wire scenarios into CI; unproven now because only six integrations are listed (archal.ai, Jun 2026) and no customer count is disclosed.
- **Market structure:** [Inferred]: Incumbent observability/eval vendors (LangSmith, Braintrust, Arize) sell trace ingestion and scoring as their core SKU; building and maintaining stateful SaaS clones is a distinct engineering investment that conflicts with their current product surface, though none of those vendors has publicly ruled it out.
- **Commoditization risk:** Open-source mocking frameworks and existing sandbox platforms (E2B, Modal, Blaxel) could extend toward stateful SaaS fixtures; cloud incumbents already advertise "100x faster" agent sandboxing (Cloudflare blog, 2026).

## Market & Traction

- **Traction signals:**
  - Y Combinator Summer 2026 batch (ycombinator.com/companies/archal, Jun 2026).
  - LinkedIn page exists at linkedin.com/company/archal-labs; follower count not retrievable (YC page, Jun 2026).
  - X/Twitter handle @archal_labs; follower count not retrievable (YC page, Jun 2026).
  - No Product Hunt launch found (WebSearch, Jun 2026).
  - No press coverage, revenue, customer logos, or user-count disclosures found (archal.ai, WebSearch, Jun 2026).
  - YC hiring status: not hiring (company_data, Jun 2026).
- **Competitors:**
  - Braintrust ($124.3M total raised; $80M Series B led by Iconiq at $800M post, Feb 2026; revenue not publicly disclosed): eval-first observability for LLM apps, no stateful SaaS-API clones (SiliconANGLE, Axios, Feb 2026).
  - LangSmith / LangChain (Series B backed by Sequoia, Benchmark, IVP; Sandboxes feature launched Mar 2026; revenue not publicly disclosed): trace/eval tied to LangChain ecosystem, sandboxes target code execution rather than SaaS-API state (Latitude blog, 2026).
  - Arize AI (raised >$60M across rounds per Confident AI comparison, 2026; revenue not publicly disclosed): ML+LLM monitoring with OTel architecture, no SaaS-clone product (Confident AI, 2026).
  - Langfuse (acquired by ClickHouse, Jan 2026; terms undisclosed): open-source self-hosted observability, no SaaS-clone product (Latitude blog, 2026).
  - E2B / Modal / Blaxel (Modal raised >$80M per public reporting; E2B and Blaxel funding undisclosed in retrieved sources): generic code-execution sandboxes for agents, not API-state clones (Modal blog, Blaxel blog, 2026).
- **Why now:** [Inferred]: 2025–2026 production deployment of agents that perform irreversible writes (payments, code pushes, DB writes) — a behavior shift Archal explicitly cites on its landing page (archal.ai, Jun 2026) — combined with Mar 2026 LangSmith Sandboxes launch (Latitude blog, 2026) indicating mainstream pull toward pre-prod agent test environments.

## Founders & Team

- **Noah Song (Co-founder):**
  - Background: B.S. from Illinois Institute of Technology; prior role teaching grade-school programming and robotics at Illinois Tech 2017–2020; listed as Co-Founder, Archal Labs (LinkedIn /in/noah-j-song, ZoomInfo, Jun 2026).
  - Twitter/X: No public account found (WebSearch, Jun 2026).
  - LinkedIn: "Archal Labs" — headline per LinkedIn snippet (linkedin.com/in/noah-j-song, Jun 2026).
  - GitHub: No public repos found (WebSearch, Jun 2026).
- **Aidan Tiruvan (Co-founder):**
  - Background: CS + Math student, University of Colorado Boulder; prior Undergraduate Research Assistant, CU Boulder College of Engineering; listed as ML Research Engineer & Intern at Scale AI per ZoomInfo; Google Scholar profile exists; interests in randomized algorithms, numerical computing, convex optimization (aidantiruvan.com, scholar.google.com user weutgQUAAAAJ, ZoomInfo, Jun 2026).
  - Twitter/X: No public account found in retrieved sources (WebSearch, Jun 2026).
  - LinkedIn: "Archal (YC S26)" (linkedin.com/in/aidantiruvan, Jun 2026).
  - GitHub: No public repos found in retrieved sources (WebSearch, Jun 2026).
- **Co-founder relationship:** No public data on co-founder history (WebSearch, Jun 2026).
- **Founder-market fit:** [Inferred]: Tiruvan's Scale AI ML-research-engineer exposure and CS/math academic profile (ZoomInfo, aidantiruvan.com, Jun 2026) align with the eval/agent-infrastructure problem; no exited-founder or domain-veteran credentials surfaced, and no advisors/investors beyond YC are disclosed (ycombinator.com/companies/archal, Jun 2026).

## Key Risks

- **Incumbent product expansion:** LangSmith shipped a Sandboxes feature in Mar 2026 (Latitude blog, 2026) and Braintrust raised $80M at $800M post in Feb 2026 (Axios, 2026); either can fund a stateful-API-clone module that subsumes Archal's wedge. No mitigation disclosed.
- **Clone-fidelity technical risk:** The core claim — clones "checked against the live API" with full state, rate limits, and errors across six named SaaS platforms (archal.ai, Jun 2026) — requires ongoing reverse-engineering and drift-tracking per vendor; degraded fidelity would undermine pre-prod confidence. No mitigation disclosed beyond the marketing claim.
- **Third-party-API ToS exposure:** Replicating Stripe, Google Workspace, Slack, GitHub, Supabase, and Linear behavior (archal.ai, Jun 2026) may conflict with platform terms; no public legal stance from Archal or named platform-partner program.
- **No disclosed traction:** No revenue, user count, paying customer, Product Hunt rank, or press citation surfaced (WebSearch, archal.ai, Jun 2026); GTM signal at memo time is YC backing alone.
- **Founder-experience risk:** Neither founder has a publicly disclosed prior exit, prior startup, or senior industry tenure in agent infrastructure (LinkedIn, aidantiruvan.com, ZoomInfo, Jun 2026); one founder appears to be a current undergraduate (CU Boulder).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | YC S26 batch (YC page, Jun 2026); LinkedIn page archal-labs (YC page, Jun 2026); X handle @archal_labs (YC page, Jun 2026); no Product Hunt, press, or user-count disclosures (WebSearch, Jun 2026) |
| Revenue Signal | No public data found |
| Founders | Noah Song (Co-founder): B.S. Illinois Institute of Technology; prior Illinois Tech robotics/programming instructor. Aidan Tiruvan (Co-founder): CS+Math student at CU Boulder; ML Research Engineer & Intern at Scale AI (ZoomInfo); Google Scholar author. |
| Competitors | Braintrust ($124.3M raised, $800M post Feb 2026, revenue unknown — eval-first LLM observability, no SaaS clones); LangSmith (Series B, revenue unknown — trace/eval + Mar 2026 Sandboxes, LangChain-tied); Arize AI (>$60M raised per Confident AI, revenue unknown — ML+LLM monitoring); Langfuse (acquired by ClickHouse Jan 2026, terms undisclosed — OSS observability); E2B/Modal/Blaxel (Modal >$80M raised, others undisclosed — generic code-execution sandboxes) |
| Moat Signals | No public data found |
| Risk Factors | Incumbent expansion (LangSmith Sandboxes, Braintrust capitalization), clone-fidelity engineering burden, third-party-API ToS exposure |
| Founder Reach | Noah Song: Twitter not found, LinkedIn /in/noah-j-song count not retrievable, GitHub not found. Aidan Tiruvan: Twitter not found, LinkedIn /in/aidantiruvan count not retrievable, GitHub not found. |
| Distribution Signals | No public data found |
| Emails | No public data found |

Sources:
- [Archal | The eval platform for autonomous software](https://www.archal.ai/)
- [Archal: The eval platform for autonomous software | Y Combinator](https://www.ycombinator.com/companies/archal)
- [YC S26 Companies — Extruct AI](https://www.extruct.ai/data-room/ycombinator-companies-s26/)
- [Noah Song — LinkedIn](https://www.linkedin.com/in/noah-j-song/)
- [Aidan Tiruvan — LinkedIn](https://www.linkedin.com/in/aidantiruvan/)
- [Aidan Tiruvan — personal site](https://aidantiruvan.com/)
- [Aidan Tiruvan — Google Scholar](https://scholar.google.com/citations?user=weutgQUAAAAJ&hl=en)
- [Aidan Tiruvan — ZoomInfo](https://www.zoominfo.com/p/Aidan-Tiruvan/12568853314)
- [Braintrust $80M Series B at $800M — Axios](https://www.axios.com/pro/enterprise-software-deals/2026/02/17/ai-observability-braintrust-80-million-800-million)
- [Braintrust $80M Series B — SiliconANGLE](https://siliconangle.com/2026/02/17/braintrust-lands-80m-series-b-funding-round-become-observability-layer-ai/)
- [LangSmith vs Arize vs Braintrust 2026 — Latitude](https://latitude.so/blog/best-llm-observability-tools-agents-latitude-vs-langfuse-langsmith)
- [Top Arize AI Alternatives — Confident AI](https://www.confident-ai.com/knowledge-base/compare/top-arize-ai-alternatives-and-competitors-compared)
- [Best Code Execution Sandboxes — Modal Blog](https://modal.com/resources/best-code-execution-sandboxes-ai-agents)
- [Best Code Execution Sandboxes — Blaxel Blog](https://blaxel.ai/blog/code-execution-sandboxes-for-ai-agents)
