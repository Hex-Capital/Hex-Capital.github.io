# Speko

> OpenRouter for voice AI

| Field | Value |
|-------|-------|
| Website | https://speko.ai |
| YC Page | https://www.ycombinator.com/companies/speko |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Developer Tools, Conversational AI |
| YC Partner | Tyler Bosmeny (YC company page) |
| Emails | founders@speko.ai (speko.ai website) |

## The Idea

- **Problem:** Voice-AI developers must integrate and maintain separate providers for STT, LLM, and TTS (OpenAI Realtime, ElevenLabs, Deepgram, AssemblyAI, Whisper, Google, Azure, Polly), each with unique APIs, auth, and pricing (speko.ai website; Medium overview of voice router landscape via search snippet).
- **Approach:** Single unified API that continuously benchmarks 15+ STT/TTS/voice-to-voice providers on accuracy, latency and cost, then routes each call to the best stack per language with automatic failover (speko.ai; YC S26 search snippet).
- **Differentiation:** vs OpenRouter — OpenRouter is text-focused and only recently added TTS/STT endpoints (openrouter.ai docs via search snippet); vs Inworld Router — Inworld emphasizes its own first-party inference and 220+ LLMs (inworld.ai/router via search snippet), while Speko positions as provider-agnostic routing across the full voice stack (speko.ai); vs Vapi/Retell/Bland — those are voice agent platforms rather than provider-routing gateways (bland.ai comparison via search snippet).
- **Business Model:** [Inferred]: Usage-based credits with API-key auth and optional bring-your-own-provider-keys (speko.ai website); no public pricing tiers disclosed.
- **TAM/SAM:** No public TAM/SAM data found for the voice-AI-gateway sub-segment; AgentMarketCap projects "$80B in labor savings by 2026" for voice AI agents replacing call-center work (AgentMarketCap, Apr 2026, via search snippet).
- **GTM / Distribution:** [Inferred]: Developer-led adoption via TypeScript SDK (@spekoai/sdk), Python SDK (spekoai), MCP server with OAuth, and a LiveKit adapter (speko.ai website).

## Defensibility

- **Moat today:** Continuous cross-provider benchmarking dataset (accuracy/latency/cost per language) plus a claimed voice-native retrieval at 0.76ms across 100K documents (speko.ai website); SOC 2 and HIPAA compliance in progress (speko.ai).
- **Future moat:** [Inferred]: Routing dataset compounds with usage — more calls yield more per-language/per-workload performance signal, raising switching costs for teams that tune to Speko's routing SLA.
- **Market structure:** [Inferred]: Individual providers (Deepgram, ElevenLabs, OpenAI) face channel conflict routing customers to competitors, and voice-agent platforms (Vapi, Retell, Bland) have committed to opinionated stacks (bland.ai comparison, techsy.io via search snippets), leaving room for a neutral gateway.
- **Commoditization risk:** OpenRouter has already extended into TTS/STT (openrouter.ai docs) and Inworld Router offers a $0-markup multi-model gateway with $117M raised (inworld.ai; BusinessWire, Jun 2026); LiteLLM, Portkey, Vercel AI Gateway are adjacent (inworld.ai comparison via search snippet).

## Market & Traction

- **Traction signals:**
  - Claimed ~340ms median conversational-turn latency and 0.76ms voice-native retrieval across 100K docs (speko.ai website).
  - Two developer SDKs published (@spekoai/sdk TypeScript, spekoai Python) and an MCP server with OAuth (speko.ai).
  - SOC 2 and HIPAA compliance "in progress" (speko.ai).
  - Featured in "Stealth Startup Spy #353" newsletter (stealthstartupspy.substack.com via search snippet).
  - No public revenue, customer counts, ARR, Product Hunt launch, press coverage, LinkedIn follower count, or Twitter follower count found.
- **Competitors (up to 5):**
  - Inworld Router ($117M+ raised at $500M valuation, revenue unknown; BusinessWire Jun 2026): $0-markup routing across 220+ LLMs with voice pipeline and first-party inference (inworld.ai/router).
  - Vapi ($72M total, Series B led by Peak XV at ~$500M valuation, revenue unknown; TechCrunch May 2026): voice-agent orchestration platform, won Amazon Ring over 40 rivals (TechCrunch).
  - Retell AI ($5.1M+ raised, revenue unknown; landbase.com via search snippet): managed low-latency voice agents with opinionated stack.
  - Bland AI ($100M+ Series C, revenue unknown; bland.ai via search snippet): vertically integrated in-house STT/LLM/TTS for phone calls.
  - OpenRouter (funding not confirmed in this pass, revenue unknown; openrouter.ai): text-first LLM gateway that added TTS/STT endpoints.
- **Why now:** [Inferred]: Proliferation of specialized voice providers (OpenAI Realtime, ElevenLabs, Deepgram, AssemblyAI, Whisper, Google, Azure, Polly) crossed a threshold in 2025-2026 where per-language/per-workload performance varies enough that routing outperforms single-provider choice (Medium voice-router overview and inworld.ai comparison via search snippets).

## Founders & Team

- **Beknazar Abdikamalov (Founder):**
  - Background: MS and BS in Computer Science from UNIST, Korea; prior Software Engineer at Amazon; Co-founder/CTO at Hupo (leadership coaching, Singapore) which raised ~$4M from DST Global, Meta, Goodwater Capital, Collaborative Fund (Pivot.uz; Wisdom Ventures portfolio; balancethegrind.co interview); from Nukus, Uzbekistan; publicly documented "4 attempts to YC" before acceptance (Luma event page).
  - Twitter/X: No public account found in search results.
  - LinkedIn: Profile referenced via third-party post ("Beknazar Abdikamalov is the co-founder and CTO at Hupo" — linkedin.com/posts/vladimirnorov activity 7090895718218956800); headline not directly retrievable.
  - GitHub: @beknazar with 47 repositories listed (github.com/beknazar); no notable star counts surfaced.
- **Additional team (3 others):** No public data found on the other 3 team members listed in the YC team-size count; YC page lists only Beknazar Abdikamalov as founder.
- **Co-founder relationship:** No public data on co-founder history — YC page lists a single founder.
- **Founder-market fit:** Founder previously built and shipped a consumer/coaching product (Hupo) that raised institutional capital from DST Global and Meta, and holds a CS graduate degree plus Amazon engineering tenure (Pivot.uz; balancethegrind.co); no advisors or investors publicly disclosed for Speko.

## Key Risks

- **Well-funded incumbent gateways:** Inworld Router ($117M raised, $0-markup pricing, voice pipeline; BusinessWire Jun 2026) and OpenRouter's newly added TTS/STT endpoints (openrouter.ai docs) directly overlap Speko's positioning; no public differentiator on pricing or exclusive provider access found.
- **Provider-platform substitution:** Voice-agent platforms Vapi ($72M, Amazon Ring win per TechCrunch May 2026), Retell, and Bland ($100M+) already bundle STT/LLM/TTS with orchestration, potentially removing the need for a routing layer for many buyers (bland.ai and techsy.io comparisons via search snippets).
- **Solo-founder execution risk:** YC page lists a single founder for a 4-person team (ycombinator.com/companies/speko); no co-founder or CTO/CRO named in public sources, concentrating technical and GTM leadership on one person.
- **Unverified performance claims:** The 0.76ms retrieval and ~340ms turn-latency figures are self-reported on the marketing site (speko.ai) with no third-party benchmark or customer reference published.
- **Compliance gating:** SOC 2 and HIPAA are marked in progress rather than obtained (speko.ai), which can block healthcare and regulated enterprise pipelines that voice competitors (Bland, Vapi) already service.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found; adjacent claim of "$80B in labor savings by 2026" for voice AI agents (AgentMarketCap, Apr 2026). |
| SAM | No public data found. |
| Traction | ~340ms median turn latency, 0.76ms retrieval across 100K docs (speko.ai, self-reported); TypeScript + Python SDKs published (speko.ai); featured in Stealth Startup Spy #353 (substack, 2026). |
| Revenue Signal | No public pricing page or revenue figure found; site references usage-based credits and bring-your-own-keys (speko.ai). |
| Founders | Beknazar Abdikamalov (Founder): ex-Amazon SWE; Co-founder/CTO Hupo ($4M raised, DST Global/Meta/Goodwater/Collaborative Fund); MS/BS CS UNIST Korea. |
| Competitors | Inworld Router ($117M raised at $500M val, revenue unknown, $0-markup 220+ LLM gateway with voice pipeline); Vapi ($72M raised, ~$500M val, revenue unknown, voice-agent orchestration); Retell AI ($5.1M+ raised, revenue unknown, managed low-latency voice agents); Bland AI ($100M+ Series C, revenue unknown, vertically integrated in-house voice stack); OpenRouter (funding unknown, revenue unknown, text LLM gateway extending into TTS/STT). |
| Moat Signals | Cross-provider benchmarking dataset across 15+ providers and 10+ languages (speko.ai); 0.76ms voice-native retrieval claim (speko.ai); SOC 2 + HIPAA in progress (speko.ai). |
| Risk Factors | Well-funded incumbent gateways (Inworld, OpenRouter), voice-agent platform substitution (Vapi/Retell/Bland), single named founder. |
| Founder Reach | Beknazar Abdikamalov: Twitter no public account found, LinkedIn profile exists (headline not retrievable), GitHub @beknazar 47 repos (github.com). |
| Distribution Signals | TypeScript SDK @spekoai/sdk and Python SDK spekoai published (speko.ai); MCP server with OAuth and LiveKit adapter shipped (speko.ai); no Product Hunt, Chrome Web Store, or app-store presence found. |
| Emails | founders@speko.ai (speko.ai website). |
