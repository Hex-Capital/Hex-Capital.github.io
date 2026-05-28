# ReasonBlocks

> The runtime layer that makes AI agents cheaper and more reliable

| Field | Value |
|-------|-------|
| Website | https://reasonblocks.com/ |
| YC Page | https://www.ycombinator.com/companies/reasonblocks |
| Batch | Spring 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | SaaS, B2B, AI |
| YC Partner | Aaron Epstein |
| Emails | No public data found |

## The Idea

- **Problem:** Production AI agents repeatedly waste tokens on the same loops, dead ends, and previously encountered obstacles, raising cost and reducing reliability (YC company description; YC launch post via search snippet).
- **Approach:** A runtime layer that catches failures mid-run, compresses non-essential tokens, and builds a "private reasoning library" that compounds across runs (YC company page).
- **Differentiation:** Versus Mem0 (memory layer for AI agents — $24M Series A, Oct 2025, TechCrunch) ReasonBlocks targets mid-run reasoning correction and token compression rather than persistent memory; versus LangSmith/Langfuse/AgentOps (observability/tracing — langchain.com, langfuse.com, aimultiple.com) ReasonBlocks intervenes in the run rather than only observing it. [Inferred]: Direct positioning against memory and observability vendors based on overlapping "make agents cheaper/more reliable" pitch.
- **Business Model:** No public pricing page visible; website returned only a page title to WebFetch on 2026-05-27 (reasonblocks.com fetch). [Inferred]: Usage/consumption-based pricing on tokens routed through the runtime, based on the "plugs into existing agent stacks" pitch (YC search snippet).
- **TAM/SAM:** Agentic AI market grew from $5.25B in 2024 to $7.84B in 2025, projected to $52.62B by 2030 (newmarketpitch.com / aifundingtracker.com via search snippet); agent infrastructure layer attracted ~9% of total capital across 18 deals 2022–2025 (newmarketpitch.com via search snippet). No public TAM data found for the agent-runtime-correction sub-segment specifically.
- **GTM / Distribution:** [Inferred]: Developer/self-serve install ("plugs into existing agent stacks in minutes and starts improving results from the first call" — YC directory snippet) targeting teams already running production agents.

## Defensibility

- **Moat today:** Claimed benchmark advantage on SWE-Bench Pro — 42% accuracy lift, 52% token reduction, 70% fewer budget cap-hits (YC company page); no third-party verification of the benchmark found.
- **Future moat:** [Inferred]: The "private reasoning library that grows with every run" (YC launch snippet) could create per-customer data accumulation effects if reasoning traces transfer across customer agent runs; unproven because no public deployment data exists.
- **Market structure:** [Inferred]: No structural barrier identified at this stage — runtime/middleware approach is technically replicable, and large foundation-model providers (OpenAI, Anthropic) ship native caching and reasoning features that could subsume the use case.
- **Commoditization risk:** Observability vendors (LangSmith, Langfuse, AgentOps — latitude.so, langfuse.com), memory vendors (Mem0 — mem0.ai), and model providers themselves could add mid-run correction features; Mem0 already reports 72% token reduction via its memory SDK (mem0.ai blog via search snippet).

## Market & Traction

- **Traction signals:**
  - SWE-Bench Pro internal benchmark: 42% accuracy lift, 52% token reduction, 70% fewer budget cap-hits (YC company page, 2026).
  - LinkedIn company page exists at linkedin.com/company/reason-blocks (YC page); follower count not retrievable.
  - Co-founder LinkedIn post promoting YC backing: activity 7442688429164998656 (Sajeev Magesh LinkedIn post, search snippet).
  - Founder GitHub (Rohan-Vij): 20 followers, 46 repos, 41 total stars received (github.com/Rohan-Vij, 2026-05-27).
  - No Product Hunt launch found; no press coverage found; no Discord/Slack community found; no revenue or customer counts disclosed.
- **Competitors:**
  - Mem0 ($24M total raised — $3.9M seed + $20M Series A Oct 2025, led by Basis Set Ventures; 41K GitHub stars, 14M downloads; revenue unknown — TechCrunch / mem0.ai): persistent memory layer rather than mid-run reasoning correction.
  - LangChain / LangSmith ($125M Series B at $1.25B valuation; revenue unknown — newmarketpitch.com via search snippet): orchestration + observability/tracing, not runtime intervention.
  - Langfuse (open-source MIT, funding not retrieved; revenue unknown — langfuse.com): self-hosted observability vs. ReasonBlocks' runtime correction.
  - AgentOps (funding not retrieved in search; revenue unknown — aimultiple.com): Python SDK observability for 400+ LLMs with time-travel debugging, replay-focused rather than mid-run correction.
  - BentoLabs (funding not retrieved; revenue unknown — search snippet from newmarketpitch.com): monitoring layer detecting agent drift, adjacent but detection-only vs. ReasonBlocks' correction claim.
- **Why now:** [Inferred]: Average agentic AI funding round rose to $51M in 2025 from $37M in 2024 (newmarketpitch.com via search snippet) as agents move to production-scale deployments where token cost and reliability become operationally material.

## Founders & Team

- **Sajeev Magesh (CEO & Co-Founder):**
  - Background: YC page lists him as a Stanford CS graduate with published research in Nature Sustainable Agriculture and USAMO qualifier (YC page WebFetch, 2026-05-27); independent search results identify a "Sajeev Magesh" associated with Dublin High School, Dublin CA and a science competition finalist award (independentnews.com; LinkedIn search snippet) — name-disambiguation uncertainty flagged.
  - Twitter/X: No public account found in search results.
  - LinkedIn: linkedin.com/in/sajeev-magesh-765514209 returned 404 on direct WebFetch 2026-05-27; headline per search snippet "ReasonBlocks (YC P26)".
  - GitHub: No public handle found.
- **Rohan Vij (Co-Founder & CTO):**
  - Background: YC page lists CMU Information Systems + AI; prior experience in molecular dynamics research, AI work at ENGIE (energy sector), and IoT research at UC Davis (YC page WebFetch).
  - Twitter/X: No public account found in search results.
  - LinkedIn: No verified profile URL retrieved (a separate "Rohan Vij" at Monster API / Capital One appeared in search but is a different person).
  - GitHub: @Rohan-Vij, 20 followers, 46 repos, 41 total stars; top pinned repos LoconomicFulcrum, Memes4Discord, remote_keylogger (1 star) (github.com/Rohan-Vij, 2026-05-27).
- **Co-founder relationship:** Co-founders report an 11-year collaboration "since 2nd grade" (YC search snippet; YC page).
- **Founder-market fit:** [Inferred]: Both founders have ML research backgrounds (Magesh — Nature Sustainable Agriculture ML; Vij — molecular dynamics + ENGIE AI per YC page) relevant to agent reasoning, though neither has a public prior exit or production agent-infrastructure operating role; no advisors or investors beyond YC disclosed publicly.

## Key Risks

- **Founder-credential verifiability:** YC page descriptions (Stanford CS graduate, CMU alumnus) could not be independently verified via LinkedIn (Magesh LinkedIn URL 404'd on WebFetch 2026-05-27) and an independent "Sajeev Magesh" search result points to Dublin High School (independentnews.com), creating a name-disambiguation question that the investment committee should verify directly with founders.
- **Benchmark-vs-production gap:** The 42% accuracy lift and 52% token reduction are self-reported on SWE-Bench Pro (YC page); no third-party reproduction or paying-customer validation found in public sources, and SWE-Bench Pro is a coding-task benchmark that may not generalize to legal/finance/healthcare verticals the team cites (search snippet from "Rohan Vij" search).
- **Foundation-model substitution:** Model providers (OpenAI, Anthropic) and orchestration incumbents (LangChain, Mem0) ship native caching, memory, and reasoning features (mem0.ai claims 72% token reduction via memory; langchain.com observability stack); ReasonBlocks' "runtime layer" can be absorbed into the model API or framework SDK.
- **No public traction signals:** Beyond the YC listing and a LinkedIn company page, no Product Hunt launch, GitHub repo, press coverage, revenue, customer logos, or community footprint was located as of 2026-05-27.
- **Competitor capital asymmetry:** Mem0 raised $24M Series A in Oct 2025 (TechCrunch) and LangChain raised $125M Series B (newmarketpitch.com via search snippet) — both occupy adjacent agent-infrastructure positioning with materially larger war chests.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Agentic AI market $7.84B in 2025, projected $52.62B by 2030 (newmarketpitch.com via search snippet) |
| SAM | No public data found |
| Traction | SWE-Bench Pro internal: 42% accuracy lift, 52% token reduction, 70% fewer budget cap-hits (YC company page, 2026); LinkedIn company page linkedin.com/company/reason-blocks (YC page); Rohan-Vij GitHub: 20 followers, 46 repos, 41 stars (github.com/Rohan-Vij, 2026-05-27) |
| Revenue Signal | No public data found (website returned only page title on WebFetch 2026-05-27) |
| Founders | Sajeev Magesh (CEO & Co-Founder): Stanford CS, USAMO qualifier, Nature Sustainable Agriculture ML research per YC page. Rohan Vij (Co-Founder & CTO): CMU Information Systems + AI, prior ENGIE AI / UC Davis IoT per YC page. |
| Competitors | Mem0 ($24M raised, revenue unknown — persistent memory layer vs. runtime correction); LangChain/LangSmith ($125M Series B, revenue unknown — orchestration/observability vs. runtime intervention); Langfuse (funding not retrieved, revenue unknown — open-source observability); AgentOps (funding not retrieved, revenue unknown — SDK observability with replay); BentoLabs (funding not retrieved, revenue unknown — agent-drift monitoring) |
| Moat Signals | Self-reported SWE-Bench Pro benchmark results (YC page); "private reasoning library that grows with every run" claim (YC launch snippet); no third-party validation found |
| Risk Factors | Founder-credential verifiability gap, benchmark-vs-production gap, foundation-model substitution risk |
| Founder Reach | Sajeev Magesh: Twitter not found, LinkedIn URL 404 at fetch time, GitHub not found. Rohan Vij: Twitter not found, LinkedIn not verified, GitHub @Rohan-Vij 20 followers / 41 total stars (github.com/Rohan-Vij) |
| Distribution Signals | LinkedIn company page exists (YC page); no Product Hunt launch found; no press coverage found; no Chrome extension or mobile app identified |
| Emails | No public data found |

Sources:
- [ReasonBlocks YC Company Page](https://www.ycombinator.com/companies/reasonblocks)
- [Sajeev Magesh LinkedIn (search result)](https://www.linkedin.com/in/sajeev-magesh-765514209/)
- [Rohan-Vij GitHub](https://github.com/Rohan-Vij)
- [Mem0 Series A — TechCrunch](https://techcrunch.com/2025/10/28/mem0-raises-24m-from-yc-peak-xv-and-basis-set-to-build-the-memory-layer-for-ai-apps/)
- [Mem0 Series A announcement](https://mem0.ai/series-a)
- [Agentic AI Market Funding Trends — New Market Pitch](https://newmarketpitch.com/blogs/news/agentic-ai-funding-trends)
- [LangSmith — LangChain](https://www.langchain.com/langsmith/observability)
- [15 AI Agent Observability Tools 2026 — AIMultiple](https://aimultiple.com/agentic-monitoring)
- [Amador Valley Senior Targets Cancer — Independent News](https://www.independentnews.com/news/education_news/amador-valley-senior-targets-cancer-in-winning-science-project/article_a3f836b2-ff6b-11ef-ba4a-d77ba75baa67.html)
