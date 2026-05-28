# OpenProse

> A natural language agent framework: write the future into existence.

| Field | Value |
|-------|-------|
| Website | https://prose.md |
| YC Page | https://www.ycombinator.com/companies/openprose |
| Batch | Spring 2026 (YC page) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 3 |
| Location | San Francisco, CA, USA; Remote |
| Tags | AIOps, Artificial Intelligence, Developer Tools, Swarm AI, AI Assistant |
| YC Partner | Pete Koomen (YC page) |
| Emails | No public data found |

## The Idea

- **Problem:** Agent builders writing prompt chains for LLM-based workflows face brittleness and lock-in across harnesses (Claude Code, OpenCode, Codex, Amp), and currently rely on imperative prompt engineering or framework-specific SDKs (openprose.ai homepage, May 2026).
- **Approach:** OpenProse defines `*.prose.md` Markdown "contracts" with declarative `### Requires`/`### Ensures`/`### Services` sections plus a "Forme" semantic dependency-injection container that auto-wires services, executed by a local "Reactor" runtime that memoizes responsibility checks (GitHub README, openprose/prose v0.14.0, May 19 2026).
- **Differentiation:** Vs. LangChain/LangGraph and CrewAI (Python SDK orchestrators), OpenProse encodes intent in Markdown rather than code and runs inside the existing agent session as the runtime; vs. coding harnesses like Claude Code and OpenCode, OpenProse is framework-agnostic and portable across "Prose Complete" harnesses (openprose.ai, May 2026).
- **Business Model:** [Inferred]: No pricing visible — MIT-licensed open-source core with a "Request Access" CTA and founder intro calls (cal.com/irl-danb/openprose-intro) suggests a future commercial layer (hosted runtime, enterprise tier, or paid Reactor features) atop the OSS framework (openprose.ai homepage, May 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; comparable category leader LangChain hit a $1.25B valuation in Oct 2025 on a $125M Series B (TechCrunch, Oct 21 2025).
- **GTM / Distribution:** [Inferred]: Developer-led open-source distribution via GitHub (1.3k stars, 104 forks) and a `npx skills add openprose/prose` install path, with the founder building audience on X (@irl_danB) and YC brand amplification (GitHub openprose/prose; openprose.ai, May 2026).

## Defensibility

- **Moat today:** 1.3k GitHub stars, 104 forks, 14 releases since launch, and a claimed 7,000+ installs indicate early developer mindshare; the "Prose Complete" harness-compatibility spec is positioned as an emerging standard (GitHub openprose/prose; openprose.ai, May 2026).
- **Future moat:** [Inferred]: If `*.prose.md` becomes a de facto contract format and the Forme dependency container accumulates a registry of reusable responsibilities, switching costs for teams with large `.prose.md` libraries could compound — unproven at 7K installs scale.
- **Market structure:** [Inferred]: Direct incumbents (LangChain, CrewAI) are SDK-centric Python frameworks; rebuilding around Markdown-contract-as-runtime would cannibalize their existing API surface and customer integrations, creating a partial structural barrier rather than a hard one (LangChain Series B announcement, Oct 2025; CrewAI Series A coverage, Oct 2024).
- **Commoditization risk:** The core idea — Markdown/structured-English contracts compiled to agent prompts — is replicable by any well-resourced framework team (LangChain, CrewAI, Anthropic, OpenAI Agents SDK) given MIT licensing of the reference implementation (GitHub openprose/prose, MIT license).

## Market & Traction

- **Traction signals:**
  - 1.3k GitHub stars on openprose/prose (GitHub, May 2026)
  - 104 GitHub forks (GitHub, May 2026)
  - 14 releases, latest v0.14.0 on May 19 2026 (GitHub releases, May 2026)
  - 7,000+ installs self-reported (openprose.ai homepage, May 2026)
  - MIT licensed (GitHub openprose/prose, May 2026)
  - Founder X account @irl_danB actively posting product updates; follower count not retrievable (x.com/irl_danB)
  - 13 internal "responsibilities" running OpenProse's own marketing/GTM/ops, self-disclosed as dogfooding (openprose.ai homepage, May 2026)
  - No public revenue, paying-customer, Product Hunt rank, Discord, or press-coverage data found
- **Competitors:**
  - LangChain ($260M raised across 4 rounds, $16M ARR per Latka, $1.25B valuation Oct 2025): Python-first SDK with LangGraph orchestration and LangSmith observability; OpenProse differs by using Markdown-contracts as the runtime spec (TechCrunch Oct 21 2025; Latka).
  - CrewAI ($18M disclosed via Boldstart/Insight Oct 2024; PitchBook lists $44.5M; ARR ~$3.2M per Latka): multi-agent crew orchestration in Python; OpenProse differs by being harness-agnostic and English/Markdown-native (Enterprise AI World, Oct 2024; Latka).
  - Claude Code (Anthropic, part of public Anthropic revenue, exact ARR not disclosed): opinionated CLI coding agent; OpenProse runs *inside* Claude Code rather than competing as a harness (computingforgeeks.com 2026 comparison).
  - OpenCode (open-source, revenue unknown, 160K+ GitHub stars): multi-provider open coding harness; OpenProse is framework-agnostic and runs inside OpenCode (computingforgeeks.com 2026; morphllm.com).
  - Cline (open-source, revenue unknown): BYOK/BYOM coding agent; OpenProse layers contracts atop such harnesses rather than replacing them (morphllm.com 2026).
- **Why now:** [Inferred]: 2025–2026 saw model providers expose long context and "skills"/sub-agent primitives in CLIs (Claude Code skills, OpenCode harness), enabling a runtime where Markdown contracts can replace prompt chains — a threshold not feasible with pre-2024 context windows and tool-use stability.

## Founders & Team

- **Dan Barrett (Founder):**
  - Background: Self-described software engineer of 12 years, agent developer of 5 years, two-time founder; specific prior companies not disclosed on YC page or website (YC page; openprose.ai homepage, May 2026).
  - Twitter/X: @irl_danB, active product-update posting; follower count not retrievable (x.com/irl_danB).
  - LinkedIn: Linked from YC page but profile headline not retrievable; multiple "Dan Barrett" profiles on LinkedIn make disambiguation unreliable from search results alone (YC page; LinkedIn search results).
  - GitHub: Maintains openprose/prose — 1.3k stars, 104 forks, MIT, v0.14.0 May 19 2026 (GitHub openprose/prose).
- **Other team members (2):** YC page lists 3-person team but names only Dan Barrett; the other two members are not publicly disclosed on the YC page, website, or GitHub org page (YC page; openprose.ai, May 2026).
- **Co-founder relationship:** No public data on co-founder history; only one founder named publicly.
- **Founder-market fit:** [Inferred]: Founder's stated 5 years of agent-development experience and active engagement with agent-harness discourse on X aligns with building an agent-framework abstraction layer; no notable advisors, board members, or named investors beyond YC found in public sources (YC page; x.com/irl_danB).

## Key Risks

- **Platform dependency on agent harnesses:** OpenProse runs inside Claude Code, OpenCode, Codex, and Amp; if Anthropic, OpenAI, or harness maintainers ship native first-class Markdown-contract or skills primitives that overlap (Claude Code already exposes a "skills" mechanism per openprose.ai install command `npx skills add openprose/prose`), OpenProse's runtime layer can be subsumed (openprose.ai homepage, May 2026).
- **Commoditization by well-funded incumbents:** LangChain ($260M raised, $1.25B valuation) and CrewAI ($18M+) can adopt declarative Markdown-contract surfaces under MIT precedent; OpenProse has no patent or proprietary data moat disclosed (TechCrunch Oct 2025; Enterprise AI World Oct 2024).
- **Monetization path unproven:** No pricing, paid tier, or revenue disclosed publicly; OSS framework with 7K installs has no documented commercial conversion mechanism (openprose.ai homepage, May 2026).
- **Founder concentration risk:** Only one founder (Dan Barrett) is publicly named for a 3-person team, and prior-startup specifics ("two-time founder") are not verifiable in public sources — disambiguation across multiple "Dan Barrett" LinkedIn profiles was not possible (YC page; LinkedIn search).
- **Technical feasibility at scale:** Reactor memoization and Forme semantic dependency injection are claimed to reduce token costs and auto-wire services, but no published benchmarks, third-party reviews, or production case studies were found (openprose.ai homepage; GitHub README, May 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found (comparable: LangChain $1.25B valuation, TechCrunch Oct 21 2025) |
| SAM | No public data found |
| Traction | 1.3k GitHub stars (GitHub, May 2026); 104 forks (GitHub, May 2026); v0.14.0 latest release May 19 2026 (GitHub releases); 7,000+ installs (openprose.ai homepage, May 2026); MIT licensed (GitHub) |
| Revenue Signal | No public data found (no pricing page visible on openprose.ai, May 2026) |
| Founders | Dan Barrett (Founder): self-described 12 yrs software engineering, 5 yrs agent dev, two-time founder; specific prior companies undisclosed |
| Competitors | LangChain ($260M raised, ~$16M ARR per Latka, Python SDK + LangGraph/LangSmith); CrewAI ($18M–$44.5M raised, ~$3.2M ARR per Latka, multi-agent Python orchestration); Claude Code (Anthropic, ARR undisclosed, opinionated CLI harness); OpenCode (revenue unknown, multi-provider OSS harness, 160K+ stars); Cline (revenue unknown, BYOK OSS coding agent) |
| Moat Signals | 1.3k GitHub stars, 104 forks, 14 releases, 7K+ installs, "Prose Complete" harness-spec positioning (GitHub; openprose.ai, May 2026) |
| Risk Factors | Platform/harness dependency, commoditization by LangChain/CrewAI, unproven monetization |
| Founder Reach | Dan Barrett: Twitter @irl_danB (count not retrievable), LinkedIn (count not retrievable, disambiguation unreliable), GitHub openprose/prose 1.3k stars |
| Distribution Signals | GitHub openprose/prose 1.3k stars + 104 forks (May 2026); `npx skills add openprose/prose` install path (openprose.ai); 7,000+ installs (openprose.ai homepage, May 2026); no Product Hunt launch found |
| Emails | No public data found |

Sources:
- [OpenProse YC page](https://www.ycombinator.com/companies/openprose)
- [OpenProse homepage](https://openprose.ai/)
- [GitHub openprose/prose](https://github.com/openprose/prose)
- [Dan Barrett X profile](https://x.com/irl_danB)
- [LangChain Series B – TechCrunch](https://techcrunch.com/2025/10/21/open-source-agentic-startup-langchain-hits-1-25b-valuation/)
- [LangChain Series B blog](https://www.langchain.com/blog/series-b)
- [CrewAI $18M funding – Enterprise AI World](https://www.enterpriseaiworld.com/Articles/News/News/$18M-in-Funding-Catapults-CrewAIs-Multi-Agentic-Platform-to-the-Enterprise-Level-166495.aspx)
- [LangChain Latka revenue](https://getlatka.com/companies/langchain)
- [CrewAI Latka revenue](https://getlatka.com/companies/crewai.com)
- [OpenCode vs Claude Code vs Cursor – ComputingForGeeks](https://computingforgeeks.com/opencode-vs-claude-code-vs-cursor/)
- [Claude Code alternatives – Morph](https://www.morphllm.com/comparisons/claude-code-alternatives)
