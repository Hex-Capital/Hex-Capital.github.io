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

## The Idea

**Problem:** Developers building LLM-powered agents and retrieval-augmented generation (RAG) pipelines face escalating token costs and degraded accuracy as context windows fill with large amounts of retrieved or historical information. Current approaches require manually tuning retrieval parameters or accepting bloated prompts that increase latency and cost. The customer segment is engineering teams operating production LLM workloads—agent builders, RAG pipeline operators, and enterprises with high-volume inference spend.

**Approach:** Compresr provides an API and SDK (`pip install compresr`) that compresses LLM context before it reaches the model (compresr.ai). The product operates via two mechanisms: (1) a request-tailored context compressor that uses proprietary algorithms for question-specific compression, claimed to outperform traditional retrieval baselines (compresr.ai); and (2) an agent proxy ("Context Gateway") that routes agent traffic through a proxy layer, compressing conversation state, tool traces, and retrieved information before model calls (GitHub, Compresr-ai/Context-Gateway). The Context Gateway is written in Go and sits between AI agents (e.g., Claude Code, Cursor) and the LLM API (GitHub). The product supports uploading documents into named collections and compressing both inline context and pre-uploaded collections (compresr.ai).

**Differentiation:** Compared to Microsoft's LLMLingua (open-source, 5.8k GitHub stars), which uses a small language model (GPT-2-small or LLaMA-7B) to identify and remove non-essential tokens at up to 20x compression (GitHub, microsoft/LLMLingua), Compresr positions itself as a managed API and proxy service rather than an open-source library requiring self-integration. LLMLingua is integrated into LangChain and LlamaIndex but is not offered as a hosted service (Microsoft Research). Supermemory ($3M raised; TechCrunch, Oct 2025) focuses on persistent memory and knowledge graphs for AI apps rather than real-time per-request compression (supermemory.ai). Factory.ai ($70M total raised, $300M valuation; Factory.ai Series B announcement) has built context compression into its coding agent product but does not offer compression as a standalone API (Factory.ai blog).

**Business Model:** No pricing page is publicly visible on compresr.ai. The website mentions a free tier with a "vanilla compressor" and a premium tier with the "compresr" compressor for enhanced results (compresr.ai). [Inferred]: Most likely monetization path is usage-based API pricing (per token compressed or per API call), consistent with the infrastructure API model and the tiered structure described on the website.

**TAM/SAM:** The global LLM market was valued at $7.77B in 2025 and is projected to reach $10.57B in 2026, growing at a 34.44% CAGR to $149.89B by 2035 (Precedence Research via search snippet). The enterprise LLM market was valued at $4.84B in 2025 (Fortune Business Insights via search snippet). Model API spending reached $8.4B, having more than doubled in a brief period (Menlo Ventures, 2025 via search snippet). No public TAM/SAM data found specific to the context compression segment.

**GTM / Distribution:** The product is distributed as a Python SDK on PyPI and an open-source Go-based proxy on GitHub (compresr.ai; GitHub). [Inferred]: Most likely distribution path is bottom-up developer adoption via the free tier and open-source Context Gateway, converting to paid API usage as production workloads scale. The YC network provides initial distribution to AI-native startups.

## Defensibility

The Context Gateway repo on GitHub has 102 stars, 15 forks, and 7 contributors as of February 2026 (GitHub, Compresr-ai/Context-Gateway). The company claims proprietary compression algorithms that "outperform traditional retrieval baselines" (compresr.ai), though no published benchmarks or peer-reviewed evaluations were found in public sources. The founding team's research background at EPFL's Data Science Lab (DLab) in areas including prompt compression and efficient ML systems (YC company page) provides domain-specific technical knowledge.

[Inferred]: Potential defensibility could develop via: (1) data flywheel effects if the compression models improve with usage data across customers; (2) switching costs from integration into production agent pipelines; (3) proprietary compression model quality that outperforms open-source alternatives. However, none of these are proven at this stage.

**Market structure:** LLMLingua, the most direct open-source alternative, is maintained by Microsoft Research as a research project rather than a commercial product (Microsoft Research). Microsoft has not commercialized it as a standalone API service. [Inferred]: Large LLM providers (OpenAI, Anthropic, Google) face a structural disincentive to offer context compression, as reducing token usage directly reduces their per-token revenue. This business model cannibalization creates a window for a third-party compression layer. However, LLM providers could achieve similar outcomes by lowering prices or expanding context windows, which has been a consistent trend.

**Commoditization risk:** Microsoft's LLMLingua is open-source and freely available (5.8k GitHub stars), and academic research on prompt compression is active with multiple published methods (EMNLP'23, ACL'24, NAACL'25). Any team with ML expertise could build a compression layer using published techniques. The barrier to a basic implementation is low; the barrier to a production-quality managed service with superior compression ratios is higher but not prohibitive.

## Market & Traction

**Traction signals:**
- GitHub: Context-Gateway repo has 102 stars, 15 forks, 7 contributors, 36 commits, Apache-2.0 license, latest release v0.3.0 (Feb 13, 2026) (GitHub, Compresr-ai/Context-Gateway)
- PyPI: `compresr` package available via `pip install compresr` (compresr.ai); download count not retrieved
- LinkedIn: Company page exists at linkedin.com/company/compresr listed as "Compresr (YC W26)" (LinkedIn search result); follower count not retrieved
- YC partner: Jared Friedman (YC company page)
- Product Hunt: No launch found
- Twitter/X: No company account found
- Discord: Referenced in GitHub documentation but member count not retrieved
- Press coverage: No public coverage found in named publications
- Job postings: 0 open positions (YC company page)

**Competitive landscape:**

1. **Microsoft LLMLingua** (open-source research project; no commercial funding as standalone product): Up to 20x prompt compression using small LMs for token filtering (GitHub, 5.8k stars, 350 forks). Integrated into LangChain and LlamaIndex. Key difference vs. Compresr: open-source library requiring self-hosting vs. managed API/proxy service.

2. **Supermemory** ($3M raised from Susa Ventures, Browder Capital, SF1.vc; TechCrunch, Oct 2025): Universal memory API for AI apps, builds knowledge graphs, achieves state-of-the-art on LongMemEval benchmarks (supermemory.ai). Key difference vs. Compresr: focuses on persistent memory and long-term coherence rather than per-request context compression.

3. **Factory.ai** ($70M total raised—$15M Series A led by Sequoia, $50M Series B led by NEA at $300M valuation; Factory.ai): AI coding agent platform with built-in incremental context compression for coding sessions (Factory.ai blog). Key difference vs. Compresr: compression is embedded within a vertical coding product, not offered as a standalone API.

4. **Inferact (vLLM)** ($150M seed at ~$800M valuation from a16z and Lightspeed; SiliconANGLE, Jan 2026): Commercializes the open-source vLLM inference engine for faster, cheaper model serving. Key difference vs. Compresr: optimizes at the inference engine level (KV-cache, batching) rather than at the prompt/context level.

**Why now:** [Inferred]: Several converging factors opened this opportunity: (1) LLM inference costs, while declining ~10x annually (Menlo Ventures, 2025 via search snippet), remain a primary concern as Model API spending doubled to $8.4B (Menlo Ventures, 2025 via search snippet), meaning the absolute dollar spend on tokens is growing even as unit costs fall; (2) the proliferation of agentic AI workflows (multi-step tool-using agents) dramatically increases per-session token consumption through conversation history, tool traces, and retrieved context; (3) context windows have expanded (to 128K–1M+ tokens), but filling them incurs proportional cost and can degrade model accuracy, creating demand for intelligent compression rather than simple truncation.

## Founders & Team

**Ivan Zakazov** — Co-founder & CEO
- PhD student at EPFL in the EDIC program (Computer and Communication Sciences), started 2023 (EPFL people page via search snippet; Google Scholar via search snippet)
- Research focus: NLP and medical imaging, with publications at MICCAI 2020, 2021 (oral), and 2022 (ACL Anthology; Google Scholar)
- YC page states prior experience at Microsoft and Philips Research (YC company page); also reported to have worked at Meta, with his last day noted as Dec 29 (LinkedIn search snippet)
- Researched LLM context compression at EPFL (YC company page)
- Twitter/X: @1v4n0t7o (x.com search result); follower count not retrievable
- LinkedIn: linkedin.com/in/ivan-zakazov — 500+ connections (LinkedIn search snippet)
- GitHub: github.com/kechua — repositories include code for MICCAI papers on medical imaging domain adaptation (GitHub search result)

**Oussama Gabouj** — Co-founder & CTO
- Master's student in Data Science at EPFL, minor in Cybersecurity (LinkedIn via search snippet)
- Research at EPFL's Data Science Lab (DLab) and AXA Group Operations, focusing on efficient ML systems and prompt compression (YC company page; LinkedIn via search snippet)
- Technical expertise in Transformers, LLMs (LLaMA, GPT, Mistral), and multimodal models (CLIP, DINOv2) (LinkedIn via search snippet)
- Co-author on research paper on generative approaches to kinetic parameter inference (bioRxiv/SSRN via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/oussama-gabouj-775235194 — "Master's student in Data Science at EPFL" (LinkedIn)
- GitHub: No confirmed personal public repos found

**Berke Argin** — Co-founder & CAIO
- MS in Computer Science at EPFL, semester 3 (EPFL people page via search snippet)
- AI Research Intern at UBS (LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: ch.linkedin.com/in/arginberke — "MS in CS @ EPFL | AI Research Intern @ UBS" (LinkedIn)
- GitHub: github.com/BerkeArgin — 4 repositories (GitHub search result)

**Kamel Charaf** — Co-founder & COO
- Data Science Masters from EPFL (YC company page)
- Previously at Bell Labs (YC company page)
- Twitter/X: No public account found
- LinkedIn: No confirmed personal profile found (search returned no matching profile)
- GitHub: No public repos found

**Co-founder relationship:** All four founders studied at EPFL — Ivan Zakazov as a PhD student, Oussama Gabouj and Kamel Charaf in Data Science master's programs, and Berke Argin in Computer Science master's. Ivan Zakazov and Oussama Gabouj both have ties to EPFL's DLab (EPFL DLab people page; YC company page). This shared institutional background indicates prior academic acquaintance.

**Founder-market fit:** The team has direct research experience in the problem domain: Ivan Zakazov specifically researched LLM context compression at EPFL (YC company page), and Oussama Gabouj worked on prompt compression and efficient ML systems at EPFL's DLab and AXA (YC company page). The combination of NLP research depth (Zakazov's publications, Gabouj's multimodal ML work), enterprise exposure (Zakazov at Microsoft/Philips/Meta, Argin at UBS, Charaf at Bell Labs), and systems engineering (Gabouj's efficient ML focus) aligns with building a production-grade compression API. No advisors, board members, or notable investors beyond YC and partner Jared Friedman were found in public sources.

## Key Risks

**Open-source substitution (LLMLingua):** Microsoft's LLMLingua achieves up to 20x compression, is freely available (5.8k GitHub stars), and is already integrated into LangChain and LlamaIndex (GitHub, microsoft/LLMLingua). Teams comfortable with self-hosting have a zero-cost alternative. Compresr must demonstrate materially superior compression quality or operational convenience to justify API fees over the open-source option.

**LLM pricing deflation:** LLM inference costs have declined ~10x annually (Menlo Ventures, 2025 via search snippet), and providers are expanding context windows while reducing per-token prices. If token costs become negligible, the economic motivation to compress context diminishes. The company's value proposition is directly tied to token costs remaining a meaningful line item for customers.

**Platform dependency on LLM provider APIs:** Compresr operates as a middleware layer between applications and LLM APIs. LLM providers (OpenAI, Anthropic, Google) could introduce native context compression, caching, or summarization features within their APIs, eliminating the need for a third-party layer. Anthropic has already shipped prompt caching; OpenAI offers cached context pricing discounts.

**Academic team transitioning to commercial execution:** All four founders come from EPFL academic or research backgrounds (YC company page). The team's enterprise work experience spans internship-level or research roles (UBS intern, Bell Labs, AXA research, Philips Research). Commercial sales execution, especially to enterprises, has not been demonstrated. No prior startup exits were found.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.77B global LLM market in 2025, 34.44% CAGR to $149.89B by 2035 (Precedence Research via search snippet); $8.4B model API spending (Menlo Ventures, 2025 via search snippet). No context-compression-specific TAM found. |
| SAM | No public data found |
| Traction | 102 GitHub stars, 15 forks on Context-Gateway (GitHub, Feb 2026); Python SDK on PyPI; 0 job postings (YC page) |
| Revenue Signal | No public data found. Free tier and premium tier referenced on website (compresr.ai); no pricing details published. |
| Founders | Ivan Zakazov (CEO): EPFL PhD, ex-Microsoft/Philips/Meta, MICCAI publications. Oussama Gabouj (CTO): EPFL DS Masters, DLab + AXA research, prompt compression focus. Berke Argin (CAIO): EPFL CS Masters, UBS AI intern. Kamel Charaf (COO): EPFL DS Masters, ex-Bell Labs. |
| Competitors | Microsoft LLMLingua (open-source, no commercial funding, 5.8k GitHub stars, library not managed service); Supermemory ($3M raised, revenue unknown, memory/knowledge graph focus vs. per-request compression); Factory.ai ($70M raised, $300M valuation, revenue unknown, embedded in coding agent vs. standalone API); Inferact/vLLM ($150M raised, ~$800M valuation, revenue unknown, inference engine optimization vs. prompt-level compression) |
| Moat Signals | Proprietary compression algorithms claimed to outperform retrieval baselines (compresr.ai; no published benchmarks found); founding team's EPFL DLab research in prompt compression |
| Risk Factors | Open-source substitution via LLMLingua, LLM pricing deflation reducing compression ROI, native provider features (prompt caching) reducing need for third-party layer |
| Founder Reach | Ivan Zakazov: Twitter @1v4n0t7o (count not retrievable), LinkedIn 500+, GitHub github.com/kechua. Oussama Gabouj: Twitter not found, LinkedIn profile found, GitHub not confirmed. Berke Argin: Twitter not found, LinkedIn profile found, GitHub github.com/BerkeArgin (4 repos). Kamel Charaf: Twitter not found, LinkedIn not confirmed, GitHub not found. |
| Distribution Signals | PyPI package `compresr` (compresr.ai); GitHub Context-Gateway 102 stars (Feb 2026); No Product Hunt launch found; No press coverage found |
