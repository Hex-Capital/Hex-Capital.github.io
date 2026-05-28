# Interfaze

> AI model built for deterministic developer tasks

| Field | Value |
|-------|-------|
| Website | https://interfaze.ai |
| YC Page | https://www.ycombinator.com/companies/interfaze |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 5 |
| Location | San Francisco, CA, USA |
| Tags | Deep Learning, Developer Tools, Generative AI |
| YC Partner | Aaron Epstein |
| Emails | support@interfaze.ai |

## The Idea

- **Problem:** Production developer workflows using LLMs for OCR, web scraping, and structured extraction face hallucinated keys, broken JSON, hidden inaccuracies, and latency spikes (interfaze.ai blog, 2026).
- **Approach:** Hybrid architecture merging specialized DNN/CNN models with LLMs to produce "98%-99% structured output accuracy" for deterministic developer tasks (interfaze.ai, 2026).
- **Differentiation:** [Inferred]: Differs from general LLM APIs (OpenAI, Anthropic) by routing vision/audio tasks to specialized small models; differs from pure OCR APIs (Mistral OCR, Reducto, LlamaParse) by exposing an OpenAI-compatible Chat Completions interface with built-in tools, web search, and code sandbox (interfaze.ai, 2026).
- **Business Model:** Usage-based pricing at $1.50 per million input tokens and $3.50 per million output tokens, caching included (interfaze.ai pricing, 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** [Inferred]: Self-serve developer adoption via OpenAI-compatible API ("any AI SDK that supports OpenAI works out of the box," interfaze.ai, 2026) and founder community presence (SF Developer Meetup co-host, luma.com/agents-ai-api-may, May 2026).

## Defensibility

- **Moat today:** Research paper accepted to IEEE CAI 2026 describing the task-specific small-model architecture (arxiv.org/abs/2602.04101); founder claims benchmark leadership on OCRBench, olmOCR, RefCOCO, GPQA Diamond (interfaze.ai, 2026).
- **Future moat:** [Inferred]: Proprietary task-routing data from production developer traffic could improve model selection and accuracy, but unproven given no disclosed usage volume on the current product.
- **Market structure:** [Inferred]: Frontier LLM providers (OpenAI, Anthropic, Google) are optimized for general-purpose generative tasks; routing-to-specialized-small-models cannibalizes their token-revenue economics, creating a structural disincentive to fully replicate.
- **Commoditization risk:** Open-source specialist OCR/vision models (Marker, Docling, Unstructured, olmOCR) and parser platforms (Reducto, LlamaParse) can be assembled by competent ML teams (reducto.ai/document-parser-comparison, 2025).

## Market & Traction

- **Traction signals:**
  - Backed by Y Combinator Spring 2026 batch (ycombinator.com/companies/interfaze).
  - Research paper accepted to IEEE CAI 2026 (arxiv.org/abs/2602.04101).
  - Self-reported benchmark scores: Interfaze-Beta 83.6% MMLU-Pro, 91.4% MMLU, 81.3% GPQA-Diamond, 57.8% LiveCodeBench v5, 90.0% AIME-2025, 77.3% MMMU val, 91.5% AI2D, 90.9% ChartQA, 90.8% Common Voice v16 (interfaze.ai, 2026).
  - Stated API throughput "up to 50 requests per second" (interfaze.ai, 2026).
  - Founder co-hosting "Agents & APIs SF Developer Meetup," May 28, 2026 (luma.com/agents-ai-api-may).
  - Twitter/X handle @yoeven confirmed (x.com/yoeven); follower count not retrievable.
  - LinkedIn company presence under "Interfaze (YC P26)" (linkedin.com/in/harsha-vardhan-khurdula/); follower count not retrievable.
  - Zero open job postings on YC page (ycombinator.com/companies/interfaze).
  - No Product Hunt launch found in search results.
- **Competitors:**
  - Reducto (revenue unknown, total raised unknown via search): agentic document platform with 12+ orchestrated models for enterprise document workflows (llms.reducto.ai, 2025).
  - LlamaParse / LlamaIndex (LlamaIndex raised $19M Series A reported in 2024, revenue unknown): AI-driven context-aware document parsing inside the LlamaIndex framework (llamaindex.ai/insights, 2026).
  - Mistral OCR (Mistral AI raised €1B+ across multiple rounds, revenue unknown): general OCR API from frontier model lab; scored ~45% on Reducto's RD-FormsBench vs. ~80% for Gemini 2.0 Flash (reducto.ai, March 2025).
  - Unstructured.io (raised $65M Series B, 2024 reports; revenue unknown): open-source-rooted document parsing API for unstructured data (reducto.ai/document-parser-comparison, 2025).
  - JigsawStack (raised $1.5M pre-seed from Antler and Ada Ventures, revenue unknown; e27.co, March 2025): unified AI API suite — founder Yoeven Khemlani's prior company; overlap in mission of task-specific developer AI APIs.
- **Why now:** [Inferred]: Reducto's March 2025 benchmarks documented frontier OCR models hallucinating on dense tables/handwriting (reducto.ai, 2025), establishing measured failure modes that justify the case for specialist-model architectures over monolithic LLMs.

## Founders & Team

- **Yoeven D Khemlani (Co-Founder):**
  - Background: Singapore-based developer/ML engineer for 8 years; prior CEO/Co-Founder of JigsawStack (AI API suite, $1.5M pre-seed from Antler and Ada Ventures, e27.co March 2025); earlier launched a Singapore property/travel startup that reached US$1M ARR in year one and US$3M in year two before acquisition (adaventures.com).
  - Twitter/X: @yoeven (x.com/yoeven); count not retrievable.
  - LinkedIn: "Co-Founder at Interfaze.ai" (linkedin.com/in/yoeven/).
  - GitHub: No public repo verified in search results.
- **Harsha Vardhan Khurdula (Co-Founder):**
  - Background: M.Sc. Computer Science, Purdue University; 5+ years in computer vision, reinforcement learning for SLMs, and AI research with multiple peer-reviewed papers (scholar.google.com/citations?user=lFBRPGgAAAAJ); previously Founding Member at JigsawStack (linkedin.com/in/harsha-vardhan-khurdula-99b400183/).
  - Twitter/X: No public account found in search results.
  - LinkedIn: "Interfaze (YC P26)" (linkedin.com/in/harsha-vardhan-khurdula/).
  - GitHub: @Khurdhula-Harshavardhan (github.com/Khurdhula-Harshavardhan); no top repo star count retrieved.
- **Co-founder relationship:** Both worked together at JigsawStack — Yoeven as Co-Founder/CEO, Harsha as Founding Member (linkedin.com profiles).
- **Founder-market fit:** Yoeven has 8 years building edge-ML and OCR/scraping pipelines and a prior $1M+ ARR exit plus a funded AI API company (adaventures.com; e27.co); Harsha brings academic computer vision research credentials with IEEE CAI 2026 acceptance (arxiv.org/abs/2602.04101).

## Key Risks

- **Technical feasibility of universal hybrid architecture:** Claim of "98%-99% structured output accuracy" across OCR, scraping, classification, and STT (interfaze.ai, 2026) is self-reported; independent third-party benchmarks like Reducto's RD-FormsBench show frontier OCR models below 80% accuracy on dense tables (reducto.ai, March 2025), so Interfaze's numbers require external validation.
- **Crowded specialist OCR/parsing market:** Reducto, LlamaParse, Unstructured, Docling, Marker, Mistral OCR, and Nanonets all target document parsing (reducto.ai/document-parser-comparison, 2025); differentiation against funded incumbents is unproven.
- **Frontier model substitution:** Gemini 2.0 Flash scored ~80% on RD-FormsBench (reducto.ai, March 2025); if general-purpose frontier models continue closing the deterministic-output gap, the specialist-routing thesis weakens.
- **Founder concentration on prior company:** Yoeven remains publicly identified as JigsawStack founder (linkedin.com/in/yoeven/, adaventures.com), and Interfaze's deterministic-AI thesis overlaps JigsawStack's positioning; risk of split focus or unclear corporate boundary.
- **Name/asset disambiguation:** Multiple unrelated companies share similar names ("Interfere" YC company, "Interface" energy SaaS), and the cited arxiv paper ID 2602.04101 is a future-dated identifier requiring verification (tracxn.com; thesaasnews.com; arxiv.org/abs/2602.04101).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | YC Spring 2026 batch (ycombinator.com); IEEE CAI 2026 paper accepted (arxiv.org/abs/2602.04101); self-reported benchmarks incl. 91.4% MMLU, 90.0% AIME-2025, 90.8% Common Voice v16 (interfaze.ai, 2026); stated 50 req/sec capacity (interfaze.ai, 2026); 0 job postings (ycombinator.com) |
| Revenue Signal | $1.50/M input tokens, $3.50/M output tokens, caching included (interfaze.ai pricing, 2026) |
| Founders | Yoeven D Khemlani (Co-Founder): 2nd-time founder, prior CEO of JigsawStack ($1.5M pre-seed), prior travel startup acquired after $3M ARR. Harsha Vardhan Khurdula (Co-Founder): M.Sc. CS Purdue, computer vision researcher, prior Founding Member at JigsawStack. |
| Competitors | Reducto (raised unknown, revenue unknown, agentic enterprise document platform); LlamaParse/LlamaIndex (LlamaIndex $19M Series A 2024, revenue unknown, framework-embedded parser); Mistral OCR (Mistral €1B+, revenue unknown, frontier-lab OCR); Unstructured.io ($65M Series B 2024, revenue unknown, open-source-rooted parsing API); JigsawStack ($1.5M pre-seed, revenue unknown, unified AI API suite — founder's prior company) |
| Moat Signals | IEEE CAI 2026 paper acceptance (arxiv.org/abs/2602.04101); self-reported benchmark leadership on OCRBench, olmOCR, RefCOCO, GPQA Diamond (interfaze.ai, 2026) |
| Risk Factors | Self-reported benchmarks unvalidated externally, crowded OCR/parser competitive set, frontier-model substitution risk |
| Founder Reach | Yoeven: Twitter @yoeven (count not retrievable), LinkedIn linkedin.com/in/yoeven (count not retrievable), GitHub not found. Harsha: Twitter not found, LinkedIn linkedin.com/in/harsha-vardhan-khurdula (count not retrievable), GitHub @Khurdhula-Harshavardhan (star count not retrievable) |
| Distribution Signals | OpenAI Chat Completions API compatibility (interfaze.ai, 2026); founder co-hosting Agents & APIs SF Developer Meetup May 28, 2026 (luma.com/agents-ai-api-may); no Product Hunt launch found |
| Emails | support@interfaze.ai (interfaze.ai, 2026) |

Sources:
- [Interfaze YC Page](https://www.ycombinator.com/companies/interfaze)
- [Interfaze website](https://interfaze.ai/)
- [Interfaze paper](https://arxiv.org/abs/2602.04101)
- [Yoeven LinkedIn](https://www.linkedin.com/in/yoeven/)
- [Harsha LinkedIn](https://www.linkedin.com/in/harsha-vardhan-khurdula/)
- [Harsha GitHub](https://github.com/Khurdhula-Harshavardhan)
- [JigsawStack pre-seed (e27)](https://e27.co/jigsawstack-closes-us1m-pre-seed-round-to-transform-ai-deployment-20250312/)
- [Ada Ventures on JigsawStack](https://www.adaventures.com/post/why-we-invested-jigsawstack)
- [Reducto OCR comparison](https://llms.reducto.ai/document-parser-comparison)
- [LlamaIndex on parsers](https://www.llamaindex.ai/insights/best-document-parsing-software)
- [Agents & APIs SF Meetup](https://luma.com/agents-ai-api-may)
