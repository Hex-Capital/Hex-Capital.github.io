# Speko

> OpenRouter for voice AI

| Field | Value |
|-------|-------|
| Website | https://speko.ai/?utm_source=ycombinator&utm_medium=profile |
| YC Page | https://www.ycombinator.com/companies/speko |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, AI, Conversational AI |
| YC Partner | Tyler Bosmeny |
| Emails | founders@speko.ai, team@speko.ai ([Speko website](https://speko.ai/), [pricing page](https://speko.ai/pricing), Jul 2026) |

## The Idea

- **Problem:** Voice-agent developers compare speech-to-text, language, and text-to-speech vendors through repeated bake-offs, after which subsequent model releases can leave deployed stacks tied to an outdated selection ([Launch YC](https://www.ycombinator.com/launches/SAF-speko-openrouter-for-voice), Jul 2026).
- **Approach:** Speko benchmarks models by language, accuracy, latency, and cost, then uses those scores to choose each stage’s provider and fail over to ranked runners-up through one API key ([Speko website](https://speko.ai/), Jul 2026).
- **Differentiation:** Unlike Vapi and Retell’s agent-building and operational platforms or LiveKit’s real-time application stack, Speko emphasizes published benchmark-scored routing across 56 providers and 159 models ([Speko website](https://speko.ai/), [Vapi announcement](https://www.globenewswire.com/news-release/2026/05/12/3292882/0/en/vapi-raises-50m-series-b-as-it-reaches-1-billion-calls-powering-the-next-generation-of-enterprise-voice-ai.html), [Retell announcement](https://www.retellai.com/blog/seed-announcement), [LiveKit](https://livekit.com/blog/livekit-series-c), Jul 2026).
- **Business Model:** The public-preview pricing offers $100 signup credit, routing at provider cost plus 5%, Speko-hosted infrastructure at $0.09 per minute, and enterprise contracts with committed monthly minimums ([Speko pricing](https://speko.ai/pricing), Jul 2026).
- **TAM/SAM:** The global AI voice-agent market was estimated at $2.54 billion in 2025 and forecast to reach $35.24 billion by 2033 at a 39.0% CAGR, while no public SAM estimate specific to Speko’s routing layer was found ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/ai-voice-agents-market-report), 2026).
- **GTM / Distribution:** Speko distributes through self-service API keys, TypeScript and Python SDKs, LiveKit and Pipecat adapters, a hosted MCP server, public benchmarks, and founder-led product demos ([Speko website](https://speko.ai/), [Speko documentation](https://docs.speko.dev/quickstart), Jul 2026).

## Defensibility

- **Moat today:** Speko operates seven dated public benchmark boards and integrations spanning 56 providers and 159 models, creating a measurement and integration-maintenance asset tied directly to routing ([Speko website](https://speko.ai/), Jul 2026).
- **Future moat:** [Inferred]: Broader measurement coverage and accumulated provider-failure observations could improve selection and fallback quality, but neither a proprietary dataset nor a sustained routing advantage has been publicly demonstrated.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** LiveKit already routes inference among model providers, while Vapi lets customers swap models and providers, demonstrating that funded adjacent platforms can implement overlapping abstraction and routing features ([LiveKit](https://livekit.com/blog/livekit-series-c), [Vapi](https://www.globenewswire.com/news-release/2026/05/12/3292882/0/en/vapi-raises-50m-series-b-as-it-reaches-1-billion-calls-powering-the-next-generation-of-enterprise-voice-ai.html), 2026).

## Market & Traction

- **Traction signals:**
  - 219 LinkedIn followers and four listed employees ([LinkedIn](https://www.linkedin.com/company/speko-ai), Jul 2026).
  - 90 weekly downloads for `@spekoai/mcp` ([npm](https://www.npmjs.com/package/%40spekoai/mcp), Jul 2026).
  - 85 weekly downloads for `@spekoai/sdk` ([npm](https://www.npmjs.com/package/%40spekoai/sdk), Jul 2026).
  - Two GitHub stars each for the TypeScript and Python SDK repositories ([SpekoAI GitHub](https://github.com/SpekoAI), Jul 2026).
  - Zero jobs listed on the YC company page ([Y Combinator](https://www.ycombinator.com/companies/speko), Jul 2026).
- **Competitors:**
  - Vapi ($72M raised, revenue unknown): builds, deploys, and manages configurable enterprise voice agents, whereas Speko centers routing decisions on published model benchmarks ([Vapi](https://www.globenewswire.com/news-release/2026/05/12/3292882/0/en/vapi-raises-50m-series-b-as-it-reaches-1-billion-calls-powering-the-next-generation-of-enterprise-voice-ai.html), May 2026).
  - LiveKit ($181.3M raised, revenue unknown): provides an open-source agent framework, global real-time network, and hosted inference layer, versus Speko’s model-gateway focus ([Forge](https://forgeglobal.com/livekit_stock/), [LiveKit](https://livekit.com/blog/livekit-series-c), Jan 2026).
  - Bland AI (more than $100M raised, revenue unknown): develops its own voice models for complex enterprise calls, versus Speko’s aggregation of external providers ([Bland AI](https://www.bland.ai/blog/series-c), Jun 2026).
  - Retell AI ($4.6M raised, $3M annualized revenue at announcement): focuses on guarded, monitored contact-center agents, versus Speko’s benchmark-based provider selection ([Retell AI](https://www.retellai.com/blog/seed-announcement)).
- **Why now:** [Inferred]: Frequent model releases and 2025–2026 advances in real-time speech-to-speech systems increase the cost of static vendor selection and the utility of continuously updated routing ([Launch YC](https://www.ycombinator.com/launches/SAF-speko-openrouter-for-voice), [Speko LinkedIn](https://www.linkedin.com/company/speko-ai), Jul 2026).

## Founders & Team

- **Beknazar Abdikamalov (Founder and CEO):**
  - Background: MS and BS in Computer Science from UNIST, former Amazon software engineer, and former co-founder/CTO of Hupo, where he worked on voice-enabled AI products ([Y Combinator](https://www.ycombinator.com/companies/speko), [WEproject](https://weproject.media/articles/detail/it-predprinimatel-iz-uzbekistana-o-tom-kak-zapustil-startap-v-singapure-i-poluchil-investitsii-ot-me/), Jul 2026).
  - Twitter/X: @beknabdik; count not retrievable ([X profile](https://x.com/beknabdik), Jul 2026).
  - LinkedIn: “Founder at Speko (YC S26)” ([YC founder profile](https://www.ycombinator.com/companies/speko), Jul 2026).
  - GitHub: No public personal repos found.
- **Co-founder relationship:** YC lists one active founder, so no public co-founder history was found ([Y Combinator](https://www.ycombinator.com/companies/speko), Jul 2026).
- **Founder-market fit:** Abdikamalov reports four years of selecting voice stacks by trial and error and previously served as Hupo’s CTO and an Amazon software engineer ([Launch YC](https://www.ycombinator.com/launches/SAF-speko-openrouter-for-voice), [Y Combinator](https://www.ycombinator.com/companies/speko), Jul 2026).

## Key Risks

- **Overlapping infrastructure:** LiveKit already offers cross-provider inference routing and Vapi supports provider swapping, creating direct feature overlap; Speko’s mitigation is public, dated benchmark scoring across 56 providers ([LiveKit](https://livekit.com/blog/livekit-series-c), [Vapi](https://www.globenewswire.com/news-release/2026/05/12/3292882/0/en/vapi-raises-50m-series-b-as-it-reaches-1-billion-calls-powering-the-next-generation-of-enterprise-voice-ai.html), [Speko](https://speko.ai/), 2026).
- **Benchmark portability:** Speko acknowledges that public leaderboards may use other users’ audio and conditions, so rankings may not transfer to a customer workload; language- and intent-specific selection plus route preview provide mitigation ([Launch YC](https://www.ycombinator.com/launches/SAF-speko-openrouter-for-voice), [Speko](https://speko.ai/), Jul 2026).
- **Provider dependency:** Speko’s service aggregates externally hosted models and prices routing against provider rates, exposing it to provider pricing, availability, and API changes; ranked automatic failover reduces outage exposure ([Speko pricing](https://speko.ai/pricing), [Speko website](https://speko.ai/), Jul 2026).
- **Voice-agent reliability:** A 2026 benchmark found voice agents completed 31–51% of clean-condition tasks and 26–38% under realistic noise and accent conditions, while provider failover does not itself correct behavioral or reasoning failures ([$\tau$-Voice paper](https://arxiv.org/abs/2603.13686), Mar 2026).
- **Enterprise readiness:** Public-preview plans have no SLA and Speko states that its SOC 2 Type 1 report is in progress, although it reports HIPAA compliance since July 2026 ([Speko pricing](https://speko.ai/pricing), [Speko website](https://speko.ai/), Jul 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.54B global AI voice-agent market in 2025, forecast to $35.24B by 2033 at 39.0% CAGR (Grand View Research, 2026) |
| SAM | No public data found |
| Traction | 219 LinkedIn followers; four listed employees (LinkedIn, Jul 2026); 90 weekly MCP-package downloads and 85 weekly SDK downloads (npm, Jul 2026); two stars per principal SDK repository (GitHub, Jul 2026) |
| Revenue Signal | $100 signup credit; provider rate plus 5% router fee; $0.09/minute hosted infrastructure; custom enterprise contracts (Speko pricing, Jul 2026) |
| Founders | Beknazar Abdikamalov (Founder/CEO): UNIST MS and BS in Computer Science, former Amazon software engineer, former Hupo co-founder/CTO (Y Combinator, Jul 2026) |
| Competitors | Vapi ($72M raised, revenue unknown, enterprise agent management); LiveKit ($181.3M raised, revenue unknown, real-time open-source/cloud stack); Bland AI (over $100M raised, revenue unknown, in-house voice models); Retell AI ($4.6M raised, $3M annualized revenue at announcement, contact-center operations) (company announcements and Forge, 2026) |
| Moat Signals | Seven public benchmark boards covering 56 providers and 159 models, with benchmark-linked routing and failover (Speko website, Jul 2026) |
| Risk Factors | Cross-provider routing overlap (LiveKit, Jan 2026), provider dependency (Speko pricing, Jul 2026), voice-agent task reliability (τ-Voice, Mar 2026) |
| Founder Reach | No public data found |
| Distribution Signals | 219 LinkedIn followers (LinkedIn, Jul 2026); 90 weekly MCP downloads and 85 weekly SDK downloads (npm, Jul 2026); two GitHub stars per principal SDK repository (GitHub, Jul 2026) |
| Emails | founders@speko.ai, team@speko.ai (Speko website and pricing page, Jul 2026) |
