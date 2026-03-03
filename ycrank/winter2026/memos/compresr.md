# Compresr

> LLM-native context compression

| Field | Value |
|-------|-------|
| Website | https://compresr.ai |
| YC Page | https://www.ycombinator.com/companies/compresr |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Developer Tools, B2B, Enterprise Software |
| YC Partner | Jared Friedman |
| Emails | No public data found |

## The Idea

**Problem:** Developers building LLM-powered agents and RAG systems face escalating token costs and degraded accuracy as context windows fill with conversation history, tool outputs, and retrieved documents. Today's workarounds include manual prompt trimming, naive truncation, or paying full token costs—all of which either lose information or incur unnecessary expense.

**Approach:** Compresr provides an API that compresses LLM context at two levels: coarse-grained (filtering relevant chunks from lists) and fine-grained (token-level compression of context) (compresr.ai). The company's core model, cmprsr-v1, uses abstractive compression—generating compressed representations rather than simply extracting tokens—trained via supervised fine-tuning and Group Relative Policy Optimization on Qwen3-4B (arxiv 2511.12281, Nov 2025). The product is available as a Python SDK (`pip install compresr`), a commercial API, and an open-source Context Gateway proxy that sits between AI agents (Claude Code, Cursor, etc.) and LLM APIs (GitHub, Compresr-ai/Context-Gateway). The company reports up to 200x compression on its website, with a published FinanceBench benchmark showing 10x compression on 79 SEC filings (106K tokens → 10.5K tokens) while improving accuracy from 72.3% to 74.5% at 76% cost savings (compresr.ai).

**Differentiation:** Compresr differs from Microsoft Research's LLMLingua (open-source, extractive compression, up to 20x) by using abstractive token-level compression that generates new condensed text rather than selecting existing tokens (arxiv 2511.12281). It differs from AgentReady (deterministic rule-based stripping, 40–60% reduction) by using ML-based compression at deeper semantic levels. Unlike these alternatives, Compresr offers both a managed API and an open-source gateway proxy for agentic workflows, and its published benchmarks claim higher compression ratios (up to 200x) than LLMLingua's 20x ceiling (compresr.ai; Microsoft Research blog).

**Business Model:** No public pricing page was found on compresr.ai. The product is distributed via a Python SDK, a commercial API, and an open-source gateway (Apache 2.0 license). [Inferred]: Most likely monetization path is usage-based API pricing (per compressed token or per API call), consistent with developer infrastructure norms and the presence of a sign-up flow on the website.

**TAM/SAM:** The large language model market was valued at $8.31 billion in 2025 and is estimated to reach $24.92 billion by 2031 at a 20.08% CAGR (Mordor Intelligence, 2025 via search snippet). The AI infrastructure market is projected to grow by $39.49 billion at a 24.7% CAGR from 2025 to 2030 (Technavio via search snippet). No public TAM/SAM data found for the specific LLM context compression segment.

**GTM / Distribution:** The open-source Context Gateway (117 GitHub stars as of March 2026; GitHub) serves as a developer adoption funnel, with integrations for Claude Code, Cursor, and OpenClaw. The Python SDK (`pip install compresr`) targets individual developers. The website offers 30-minute demo booking for enterprise prospects (compresr.ai). [Inferred]: Most likely distribution path is bottom-up developer adoption via the open-source gateway and SDK, converting to paid API usage as teams scale agent workloads.

## Defensibility

The founding team authored a peer-reviewed research paper (arxiv 2511.12281, EMNLP-adjacent venue) benchmarking 25 open- and closed-source models on compression, demonstrating deep domain expertise. The cmprsr-v1 model is the result of post-training specialized compression capabilities into a base LLM, representing proprietary model IP. The company holds early-mover positioning in productizing LLM context compression as a managed API service.

**Market structure:** Large LLM providers (OpenAI, Anthropic, Google) have a structural disincentive to offer context compression—their revenue models are based on per-token pricing, so reducing token usage directly cannibalizes their core revenue stream. This business model conflict creates space for a third-party compression layer. However, no structural barrier prevents other infrastructure startups from building competing compression APIs.

**Commoditization risk:** Microsoft Research's LLMLingua is open-source and freely available, establishing a baseline that any developer can use. AgentReady offers a competing API (currently in free beta). The underlying compression techniques (abstractive summarization, token classification) are well-documented in academic literature. New entrants with ML expertise could build competing solutions, though matching Compresr's published benchmark results on specific tasks would require significant research investment.

## Market & Traction

**Traction signals:**
- GitHub: Context-Gateway repository has 117 stars, 16 forks, 43 commits, latest release v0.4.4 (Feb 28, 2026) (GitHub, Compresr-ai/Context-Gateway)
- LinkedIn: 596 followers (LinkedIn company page, March 2026)
- Academic: Peer-reviewed paper "Cmprsr: Abstractive Token-Level Question-Agnostic Prompt Compressor" (arxiv 2511.12281, submitted Nov 15, 2025, revised Jan 8, 2026) with all 4 founders as co-authors
- Product Hunt: No launch found
- Twitter/X: Company handle not confirmed; follower count not retrievable
- Discord: Mentioned as active on the Context-Gateway GitHub page; member count not found
- Revenue/users: No public data found
- App store / Chrome extension: Not applicable

**Competitive landscape:**

1. **LLMLingua (Microsoft Research)** — Open-source extractive prompt compression achieving up to 20x compression. Free to use, integrated into LlamaIndex and Azure Prompt Flow (Microsoft Research blog). Funding: Internal Microsoft Research project (no external funding). Revenue: N/A (free open-source tool). Key differentiator vs. Compresr: Backed by Microsoft's research resources; extractive rather than abstractive approach; no managed API service.

2. **AgentReady** — Compression API for LLM prompts achieving 40–60% token reduction with ~5ms overhead using deterministic rule-based stripping (Hacker News, Product Hunt). Funding: No public data found. Revenue: Currently in free beta (agentready.cloud). Key differentiator vs. Compresr: Deterministic/rule-based rather than ML-based; lower compression ratios but near-zero latency.

3. **Context-Engine AI** — Open-source "Agentic Context Compression Suite" available on GitHub (GitHub, Context-Engine-AI/Context-Engine). Funding: No public data found. Revenue: No public data found. Key differentiator vs. Compresr: Open-source MCP-based approach; unknown traction.

4. **Agno** — Agent framework with built-in context compression module (docs.agno.com). Funding: No public data found. Revenue: No public data found. Key differentiator vs. Compresr: Compression is a feature within a broader agent framework, not a standalone product.

**Why now:** [Inferred]: The rapid growth in agentic AI workloads (74% of startups now run majority inference workloads, up from 48% a year earlier — a16z, 2025 via search snippet) has created a cost pressure that did not exist when LLMs were primarily used for single-turn queries. As agents execute multi-step workflows with accumulating conversation histories and tool outputs, context windows fill rapidly, making compression a production necessity rather than an academic curiosity. Simultaneously, LLM inference costs have declined 10x annually (a16z, 2025 via search snippet), shifting the competitive battleground from raw capability to cost efficiency.

## Founders & Team

**Ivan Zakazov** — Founder & CEO
- PhD student at EPFL Data Science Lab (DLab), researching LLM context compression and domain adaptation in medical imaging
- Previously at Meta (departed late 2024/early 2025) and Philips Research (Philips Innovation Labs RUS) (LinkedIn, ResearchGate)
- Published at MICCAI 2020, 2021, 2022 on domain adaptation in MRI segmentation; lead author on the Cmprsr paper (arxiv 2511.12281)
- Previously founded and shut down a startup called Iterate (search snippet)
- Twitter/X: No confirmed public account found
- LinkedIn: linkedin.com/in/ivan-zakazov
- GitHub: github.com/kechua — 2 public repos, ~24 stars total (domain_shift_anatomy: 13 stars; Feather-Light-Fourier-Domain-Adaptation: 8 stars; DART20: 3 stars) (GitHub)

**Berke Argin** — Founder & CAIO
- MS in Computer Science at EPFL; AI Research Intern at UBS (LinkedIn)
- Published research on WebRTC QoE assessment with machine learning (ResearchGate, 2024)
- Co-author on the Cmprsr paper (arxiv 2511.12281)
- Twitter/X: @ArgBerke — follower count not retrievable
- LinkedIn: linkedin.com/in/arginberke
- GitHub: github.com/BerkeArgin — 5 public repos, minimal star counts (GitHub)

**Kamel Charaf** — Co-founder & COO
- EPFL Data Science Master's; previously at Bell Labs (YC page)
- Co-author on the Cmprsr paper (arxiv 2511.12281)
- Twitter/X: No confirmed public account found
- LinkedIn: No public profile URL confirmed
- GitHub: No public repos found

**Oussama Gabouj** — Founder & CTO
- Master's in Data Science at EPFL with minor in Cybersecurity (LinkedIn)
- Previously at EPFL DLab and AXA Group Operations (text-to-image retrieval using graph matching) (LinkedIn)
- Expertise in Transformers, LLMs (LLaMA, GPT, Mistral), multimodal models (CLIP, DINOv2) (LinkedIn)
- Co-author on the Cmprsr paper (arxiv 2511.12281); co-author on a bioRxiv paper on metabolic network inference (bioRxiv, 2025)
- Twitter/X: No confirmed public account found
- LinkedIn: linkedin.com/in/oussama-gabouj-775235194
- GitHub: No confirmed public repos found

**Co-founder relationship:** All four founders studied at EPFL (three in the Data Science program, one in Computer Science), and Ivan Zakazov and Oussama Gabouj both worked at EPFL's DLab, indicating shared institutional and lab connections.

**Founder-market fit:** The team's research background is directly aligned with the product: Ivan Zakazov's PhD research at EPFL focused specifically on LLM context compression, producing the Cmprsr paper that benchmarked 25 models and developed the core compression model. The entire founding team co-authored this paper. Oussama Gabouj's work at EPFL DLab on efficient ML systems and Berke Argin's AI research at UBS provide complementary ML engineering depth. Kamel Charaf's Bell Labs background adds systems and operations experience.

## Key Risks

**LLM price deflation eroding value proposition:** LLM inference costs are declining approximately 10x annually (a16z, 2025 via search snippet), and DeepSeek entered the market at ~90% below incumbent pricing (search snippet). As token costs approach zero, the ROI of a compression layer diminishes. Mitigation: Compresr also claims accuracy improvements (72.3% → 74.5% on FinanceBench), which retains value independent of cost savings.

**Open-source substitution from Microsoft Research:** LLMLingua is free, open-source, published by Microsoft Research, and already integrated into LlamaIndex and Azure Prompt Flow (Microsoft Research blog). Enterprises evaluating compression may default to the Microsoft-backed option. Mitigation: Compresr's abstractive approach claims higher compression ratios and its managed API reduces integration burden.

**Falling-token-price competitive dynamic:** As LLM providers compete on price, some may offer native compression or context optimization features (e.g., Google's ADK already documents context compaction — Google ADK docs). Platform-level compression would bypass third-party APIs entirely. No mitigation observed.

**Single-paper technical foundation:** The company's core differentiation rests on one arxiv paper (2511.12281). Peer replication and independent benchmarking of the claimed compression rates (up to 200x) have not been publicly documented. The FinanceBench results on the website show 10x (not 200x) compression, creating ambiguity about achievable real-world compression rates.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | LLM market: $8.31B in 2025, projected $24.92B by 2031 at 20.08% CAGR (Mordor Intelligence, 2025 via search snippet). AI infrastructure market growing by $39.49B at 24.7% CAGR 2025–2030 (Technavio via search snippet). No specific TAM for LLM context compression segment. |
| SAM | No public data found |
| Traction | 117 GitHub stars on Context-Gateway (GitHub, March 2026); 596 LinkedIn followers (LinkedIn, March 2026); peer-reviewed paper with 25-model benchmark (arxiv, Nov 2025) |
| Revenue Signal | No public data found |
| Founders | Ivan Zakazov (CEO): EPFL PhD, ex-Meta, ex-Philips Research, lead author on Cmprsr paper. Berke Argin (CAIO): EPFL CS MS, ex-UBS AI Research. Kamel Charaf (COO): EPFL Data Science MS, ex-Bell Labs. Oussama Gabouj (CTO): EPFL Data Science MS, ex-AXA, ex-EPFL DLab. |
| Competitors | LLMLingua (Microsoft Research, internal funding, free OSS, extractive up to 20x compression); AgentReady (funding unknown, free beta, deterministic 40–60% reduction); Context-Engine AI (funding unknown, revenue unknown, OSS MCP-based compression); Agno (funding unknown, compression as framework feature) |
| Moat Signals | Peer-reviewed research paper (arxiv 2511.12281) with proprietary post-trained compression model; LLM providers' structural disincentive to offer compression (token revenue cannibalization) |
| Risk Factors | LLM price deflation eroding compression ROI, open-source substitution from Microsoft LLMLingua, platform-native compression from LLM providers |
| Founder Reach | Ivan Zakazov: Twitter not found, LinkedIn yes, GitHub 24 stars. Berke Argin: Twitter @ArgBerke (count not retrievable), LinkedIn yes, GitHub minimal. Kamel Charaf: Twitter not confirmed, LinkedIn not confirmed, GitHub not found. Oussama Gabouj: Twitter not confirmed, LinkedIn yes, GitHub not confirmed. |
| Distribution Signals | Context-Gateway 117 GitHub stars (GitHub, March 2026); `pip install compresr` SDK; 30-min demo booking on website; no Product Hunt launch found |
| Emails | No public data found |
