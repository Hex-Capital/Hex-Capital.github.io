# Conifer

> Local-first least cost routing system to reduce token spend

| Field | Value |
|-------|-------|
| Website | https://www.conifer.build |
| YC Page | https://www.ycombinator.com/companies/conifer |
| Batch | Summer 2026 (YC page) |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | Not listed on YC page |
| Tags | B2B, Security, AI |
| YC Partner | Gustaf Alstromer (YC page) |
| Emails | contact@conifer.build (GitHub org page, ConiferKit) |

## The Idea

- **Problem:** Teams pay per-token cloud LLM fees across "a dozen provider contracts" and cannot send sensitive material (financials, user data) to external APIs (YC description; conifer.build).
- **Approach:** A single Rust-based desktop app runs open models on the user's own hardware using hand-written Metal/CUDA kernels (fused quantized matmul, RMSNorm, RoPE, attention), then routes to cloud only when a local model cannot meet the quality bar per a "live intelligence index" (conifer.build).
- **Differentiation:** vs. OpenRouter/Portkey/Martian (cloud API gateways) — Conifer executes inference on-device first rather than only routing between cloud APIs (conifer.build; OpenRouter description via Sacra); vs. Ollama/LM Studio (local runtimes) — Conifer bundles cloud fallback and cross-provider billing consolidation (conifer.build).
- **Business Model:** [Inferred]: Consumption or seat-based pricing on cloud fallback usage since local calls are free to the customer; conifer.build marketplace is marked "Coming soon" and no pricing page is public (WebFetch, conifer.build).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; adjacent signal — Ollama reached 52M monthly downloads in Q1 2026 and HuggingFace hosts 135K GGUF local-inference models (sitepoint/programming-helper, 2026).
- **GTM / Distribution:** [Inferred]: Developer bottom-up via GitHub distribution of the `sage` client (303 stars, ConiferKit GitHub, Jul 2026) and X/LinkedIn @coniferbuild, with an "/agencies" business-inquiry page implied enterprise sales motion (conifer.build).

## Defensibility

- **Moat today:** Hand-written Metal + CUDA kernels with fused quantized matmul, RMSNorm, RoPE, and flash-style attention sized per model — described as proprietary compiled binaries in the open-source Sage repo (GitHub ConiferKit/sage, Jul 2026).
- **Future moat:** [Inferred]: A live routing dataset mapping prompts → cheapest-model-that-works could compound with usage, but no such data corpus is disclosed today (conifer.build "live intelligence index" reference).
- **Market structure:** [Inferred]: Cloud-provider gateways (OpenRouter, Anthropic, OpenAI) cannibalize per-token revenue if they push customers to local inference, giving a local-first entrant a business-model conflict incumbents avoid (OpenRouter $113M round from Google/NVIDIA, TechTimes May 2026).
- **Commoditization risk:** Ollama (174K GitHub stars, Jun 2026) and LM Studio already provide free local inference; adding a routing layer over them is a small engineering lift for any well-funded gateway (programming-helper, 2026).

## Market & Traction

- **Traction signals:**
  - GitHub: `ConiferKit/sage` 303 stars, 12 forks, latest release v1.2.14 Jun 2026 (GitHub, Jul 2026).
  - GitHub org followers: 57 (GitHub ConiferKit, Jul 2026).
  - Social handles: X @coniferbuild, LinkedIn /company/coniferbuild — follower counts not retrievable via search (WebFetch, Jul 2026).
  - Product Hunt / press: No public data found.
  - Revenue / paying customers: No public data found.
  - Marketplace: Listed "Coming soon" on conifer.build (WebFetch, Jul 2026).
- **Competitors:**
  - OpenRouter ($40M+ raised through $28M Series A led by Menlo Ventures Apr 2025 at $500M valuation; TechTimes reports $113M Series B from Google and NVIDIA May 2026; revenue unknown): Cloud-only API gateway, no on-device inference (Sacra; TechTimes 2026).
  - Portkey (acquisition intent announced by Palo Alto Networks; funding not disclosed in results): Focused on observability/DevOps for LLM calls, not local execution (portkey.ai; newmarketpitch 2026).
  - Martian (funding not detailed in results; revenue unknown): Proprietary routing models optimizing quality + cost across cloud providers only (developersdigest 2026).
  - LiteLLM (open-source, self-hosted; funding not detailed): OpenAI-compatible gateway routing to cloud LLMs, no bundled local runtime (pkgpulse 2026).
  - Ollama (funding not disclosed; 52M monthly downloads Q1 2026, 174K GitHub stars Jun 2026): Local runtime only, no cross-provider cloud routing or billing consolidation (programming-helper 2026).
- **Why now:** [Inferred]: Ollama monthly downloads went from ~100K three years earlier to 52M in Q1 2026 and open-weight models reached parity with cloud offerings, making local-first cost arbitrage newly viable (programming-helper via search snippet, 2026).

## Founders & Team

- **Michael Jeffords (Founder):**
  - Background: Listed as sole founder on YC page (Summer 2026, Gustaf Alstromer as Group Partner); no verified education, prior company, or exit data returned across LinkedIn, Twitter, and GitHub searches — multiple unrelated "Michael Jeffords" profiles surfaced but none confirmed to this Conifer.
  - Twitter/X: No individual account confirmed; company account is @coniferbuild (count not retrievable).
  - LinkedIn: No public profile confirmed as this founder (multiple namesakes returned).
  - GitHub: No individual handle confirmed; company org is @ConiferKit with 57 followers and 303-star `sage` repo (GitHub, Jul 2026).
- **Additional team:** YC page lists Team Size 3 but does not name the other two members; no public bios found (YC page, Jul 2026).
- **Co-founder relationship:** No public data on co-founder history — only one founder is named on the YC page.
- **Founder-market fit:** [Inferred]: The product's Rust + Metal/CUDA kernel work implies systems/GPU expertise on the team, but no cited credential for Jeffords was retrievable to substantiate fit (GitHub ConiferKit/sage README, Jul 2026).

## Key Risks

- **Cloud-gateway incumbents pivot local:** OpenRouter closed $113M from Google and NVIDIA (TechTimes, May 2026) and could add on-device routing before Conifer establishes distribution; no observed mitigation beyond kernel-level performance work (GitHub sage, Jul 2026).
- **Open-source local runtime substitution:** Ollama (52M monthly downloads Q1 2026) and LM Studio provide free local inference; Conifer must justify a paid layer on top of a commoditizing base (programming-helper 2026).
- **Founder verification gap:** Only one founder is named publicly (Michael Jeffords, YC page) and no LinkedIn/GitHub/Twitter profile could be confirmed as his, limiting diligence on domain expertise and past execution.
- **Product maturity:** Marketplace is "Coming soon," no pricing is public, and the `sage` client releases are only through v1.2.14 (Jun 2026) with distribution scripts making up the public repo while inference binaries remain closed (WebFetch conifer.build; GitHub ConiferKit/sage).
- **Name confusion:** Multiple active AI companies use "Conifer" — Conifers.ai (agentic SOC, $25M from SYN Ventures per PRNewswire) and Conifer Labs (AI consulting) — which can dilute brand searches and inbound (PRNewswire 2025; coniferlabs.com).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found (adjacent: Ollama 52M monthly downloads Q1 2026, programming-helper) |
| Traction | 303 GitHub stars on `ConiferKit/sage` (GitHub, Jul 2026); 57 GitHub org followers (GitHub, Jul 2026); latest release v1.2.14 (GitHub, Jun 2026); "~80% AI bill reduction" claim (conifer.build, undated) |
| Revenue Signal | No public data found (marketplace "Coming soon", conifer.build) |
| Founders | Michael Jeffords (Founder): sole founder listed on YC page, background not publicly verified |
| Competitors | OpenRouter ($40M+ raised, revenue unknown, cloud-only gateway); Portkey (Palo Alto Networks acquisition intent, observability focus); Martian (funding unknown, proprietary routing models); LiteLLM (OSS self-hosted gateway); Ollama (52M monthly downloads, local runtime only) |
| Moat Signals | Hand-written Metal + CUDA fused kernels; proprietary Rust inference binaries in otherwise-shell `sage` repo (GitHub ConiferKit/sage, Jul 2026) |
| Risk Factors | Cloud-gateway incumbent encroachment, OSS local-runtime commoditization, single named founder with unverified public profile |
| Founder Reach | Michael Jeffords: Twitter No public account found, LinkedIn No public profile confirmed, GitHub No public account confirmed |
| Distribution Signals | GitHub org ConiferKit 57 followers (Jul 2026); `sage` repo 303 stars (Jul 2026); Company X @coniferbuild, LinkedIn /company/coniferbuild (counts not retrievable) |
| Emails | contact@conifer.build (GitHub ConiferKit org page, Jul 2026) |

Sources:
- [Conifer website](https://www.conifer.build/)
- [Conifer YC page](https://www.ycombinator.com/companies/conifer)
- [ConiferKit GitHub organization](https://github.com/ConiferKit)
- [ConiferKit/sage repo](https://github.com/ConiferKit/sage)
- [OpenRouter revenue, funding — Sacra](https://sacra.com/c/openrouter/)
- [OpenRouter $113M Series B — TechTimes](https://www.techtimes.com/articles/317353/20260529/ai-gateway-openrouter-raises-113m-google-nvidia-route-between-their-models.htm)
- [What OpenRouter's $113M Signals — NewMarketPitch](https://newmarketpitch.com/blogs/news/openrouter-series-b-analysis)
- [LLM router comparison 2026 — Developers Digest](https://www.developersdigest.tech/blog/llm-router-comparison-2026)
- [Portkey vs LiteLLM vs OpenRouter — PkgPulse](https://www.pkgpulse.com/guides/portkey-vs-litellm-vs-openrouter-llm-gateway-2026)
- [Local LLM inference 2026 — Programming Helper](https://www.programming-helper.com/tech/local-llm-inference-2026-ollama-python-privacy)
- [Guide to local LLMs 2026 — SitePoint](https://www.sitepoint.com/definitive-guide-local-llms-2026-privacy-tools-hardware/)
- [Conifers.ai $25M funding — PRNewswire](https://www.prnewswire.com/news-releases/conifersai-raises-25-million-in-funding-from-syn-ventures-to-transform-security-operations-and-achieve-soc-excellence-using-agentic-ai-302362491.html)
