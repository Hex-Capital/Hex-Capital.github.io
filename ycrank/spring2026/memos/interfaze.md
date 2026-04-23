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
| Emails | interfaze@jigsawstack.com (company website) |

## The Idea

**Problem:** Developers building pipelines for OCR, web scraping, document classification, and speech-to-text face a choice between general-purpose LLMs (expensive, non-deterministic, inconsistent structured output) and standalone specialized models (fragmented, require separate infrastructure per task). The current approach requires stitching together multiple services, each with its own API, pricing, and failure modes.

**Approach:** Interfaze is a hybrid model architecture that routes queries through specialized DNN/CNN perception modules (for OCR, speech recognition, object detection) and a context-construction layer, forwarding distilled context to LLMs only for final response generation (arXiv:2602.04101, Feb 2026). This shifts computational load from large transformer models to smaller specialized components. The system exposes an OpenAI-compatible API, claims 98–99% structured output accuracy, supports a 1M token context window, and delivers sub-5-second response times for specialized tasks (interfaze.ai). The paper was accepted at IEEE CAI 2026 (YC page).

**Differentiation:** Unlike general-purpose LLMs (GPT, Claude, Gemini) that treat OCR/scraping as secondary capabilities, Interfaze architecturally separates perception from reasoning. Unlike point solutions (Firecrawl for scraping, Tesseract/Surya for OCR, Whisper for STT), Interfaze bundles these behind a single API with a unified model. The system includes a custom web engine for bot-protected sites and built-in code sandbox (interfaze.ai).

**Business Model:** Consumption-based pricing: $1.50/M input tokens, $3.50/M output tokens, with caching included (interfaze.ai pricing page). Rate limit of 50 requests/second. No freemium tier or per-seat pricing visible.

**TAM/SAM:** The global Document AI market is estimated at $14.66B in 2025, projected to reach $27.62B by 2030 at 13.5% CAGR (MarketsandMarkets, 2025 via search snippet). The AI-driven web scraping market was valued at $10.2B in 2026, projected to reach $23.7B by 2030 at 23.5% CAGR (Research and Markets, 2026 via search snippet). [Inferred]: The SAM is the subset of developers who programmatically consume OCR, scraping, classification, and STT via API — likely a fraction of these broader markets, but no public SAM estimate exists for this specific multi-task API segment.

**GTM / Distribution:** OpenAI API compatibility enables drop-in adoption for developers already using standard AI SDKs (interfaze.ai). JigsawStack (prior brand) was part of the Vercel AI Accelerator (Vercel, 2025 via search snippet). [Inferred]: Primary distribution is developer self-serve via API, leveraging existing SDK integrations and developer community.

## Defensibility

- **IP/Technical complexity:** Peer-reviewed architecture paper accepted at IEEE CAI 2026 (YC page). The hybrid DNN/CNN + LLM routing system is a non-trivial engineering artifact.
- **Custom web engine:** Proprietary scraping engine for bot-protected sites (interfaze.ai) — a continuously evolving technical moat.
- **Data advantage:** [Inferred]: Accumulated fine-tuning data across multiple specialized tasks (OCR, STT, classification) could compound over time, but no public evidence of data flywheel effects yet.

**Market structure:** [Inferred]: Cloud incumbents (Google Document AI, Amazon Textract, Azure Document Intelligence) sell these capabilities as standalone services within their cloud ecosystems. Bundling OCR + scraping + STT + classification into a single model with unified pricing conflicts with their per-service revenue model. However, incumbents could replicate this if the market proves large enough.

**Commoditization risk:** Individual capabilities (OCR, STT, scraping) are available from multiple open-source and commercial providers. The differentiation lies in the unified architecture and deterministic output guarantees. Firecrawl (scraping), Whisper (STT), and Surya (OCR) are open-source alternatives for individual tasks. A well-resourced team could assemble a comparable pipeline, though the routing and optimization layer adds complexity.

## Market & Traction

**Traction signals:**
- Company Twitter/X (@interfaze_ai): 654 followers (X, as of research date)
- Founder Twitter/X (@yoeven): 822 followers (X, as of research date)
- Discord: 239 members (Discord invite page, as of research date)
- GitHub org (jigsawstack): 39 repositories; top repos: deep-research (173 stars), omiai (122 stars) (GitHub)
- Groq partnership announced (Groq on X, 2026)
- Accepted into Vercel AI Accelerator (Vercel, 2025)
- Featured on Software Engineering Daily podcast (Jul 2025)
- Hugging Face presence: interfaze-ai org (Hugging Face)
- Research paper: arXiv:2602.04101, accepted IEEE CAI 2026
- No public revenue, user count, or customer count data found
- No Product Hunt launch found

**Note on prior product:** Interfaze was previously branded as JigsawStack, an AI API platform. The rebrand occurred in late 2025/early 2026 (Hashnode blog post; GitHub org description). Prior-product traction (JigsawStack SDKs, GitHub stars) is reported above and should not be conflated with Interfaze-specific model adoption.

**Competitive landscape:**

| Competitor | Key Differentiator vs. Interfaze | Funding | Revenue/ARR |
|---|---|---|---|
| **Firecrawl** | Open-source web scraping focused; single-task (no OCR/STT); 25 people | $16.2M (Aug 2025, Nexus Venture Partners) (search snippet) | Revenue unknown |
| **Apify** | Established web scraping platform (founded 2015); broader automation; YC-backed | ~$3.3M total (Tracxn via search snippet) | $13.3M revenue in 2024 (Latka via search snippet) |
| **Google Document AI** | Part of GCP ecosystem; enterprise-grade SLA; single-task per API | N/A (Google product) | Revenue unknown (part of GCP) |
| **Amazon Textract** | AWS ecosystem integration; enterprise adoption; document-focused | N/A (AWS product) | Revenue unknown (part of AWS) |
| **Datalab Marker/Surya** | Open-source OCR pipeline; free; no API hosting | N/A (open-source) | N/A |

**Why now:**
- [Inferred]: The emergence of small, specialized models that match or exceed large LLMs on specific tasks (demonstrated in the paper's benchmarks) enables the architectural approach of routing to specialized components rather than a single monolithic model.
- [Inferred]: The proliferation of LLM-powered developer tools has created a large developer audience accustomed to consuming AI via API, establishing the distribution channel.

## Founders & Team

**Yoeven D Khemlani** — Founder
- Imperial College London (Innovation Design Engineering & Computer Science) (Peerlist via search snippet)
- Previously: Senior Technical Lead at UOB; Technical Lead at Noah (Peerlist via search snippet)
- Co-founded Stayr (May 2020–Jun 2022), a Singapore prop-tech startup; claimed $1M ARR in year one, $3M in year two (Peerlist via search snippet). Became Head of Technology & Product at Staytion Singapore (Aug 2022–Dec 2023) (LinkedIn via search snippet). Acquisition mentioned on Peerlist but not independently confirmed.
- Founded JigsawStack (Jul 2024), moved to US in 2025 (Software Engineering Daily, Jul 2025)
- Twitter/X: @yoeven — 822 followers (X)
- LinkedIn: linkedin.com/in/yoeven/ — "Founder at JigsawStack" (LinkedIn via search snippet)
- GitHub: github.com/yoeven (GitHub)

**Harsha Vardhan Khurdula** — Co-Founder
- M.Sc. Computer Science, Purdue University (LinkedIn via search snippet)
- AI Scientist; research interests in Computer Vision, NLP, Reinforcement Learning (Google Scholar)
- Led Competitive Programming division of Google Developer Student Club at university (LinkedIn via search snippet)
- Co-author on Interfaze architecture paper (arXiv:2602.04101)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/harsha-vardhan-khurdula/ — "Founding Member @JigsawStack | AI Scientist" (LinkedIn via search snippet)
- GitHub: github.com/Khurdhula-Harshavardhan — bio: "I have a dream, NLP for everyone!" (GitHub via search snippet)

**Additional team member:** Vineet Agarwal is listed as a co-author on the arXiv paper (arXiv:2602.04101). Role and background not publicly detailed.

**Co-founder relationship:** No shared prior employer or university identified between Yoeven (Imperial College London, Singapore-based career) and Harsha (Purdue University). No public data on how they connected.

**Founder-market fit:** Yoeven brings production engineering experience (UOB, Noah) and prior startup experience with a claimed exit (Stayr). Harsha brings academic ML research credentials (Purdue, Google Scholar publications, CV/NLP specialization). The combination of infrastructure engineering and ML research aligns with building a hybrid model system that requires both systems engineering and model development.

## Key Risks

**1. Brand fragmentation from rebrand:** The transition from JigsawStack to Interfaze (late 2025/early 2026, Hashnode blog; GitHub org) means existing developer adoption under the JigsawStack brand must be migrated. The email domain remains jigsawstack.com (interfaze.ai), suggesting the transition is incomplete.

**2. Architectural replicability:** The hybrid DNN/CNN + LLM routing approach is documented in a public paper (arXiv:2602.04101). While execution matters, the architecture is not secret. Well-funded competitors (Firecrawl at $16.2M) or cloud providers could implement similar routing systems.

**3. Multi-task breadth vs. depth trade-off:** Competing simultaneously against specialized tools in OCR (Google Document AI), scraping (Firecrawl, Apify), STT (Whisper/AssemblyAI), and classification requires maintaining parity across multiple rapidly evolving domains. Each domain has dedicated teams and communities optimizing for that single task.

**4. Benchmark context:** Published benchmarks (MMLU-Pro 83.6%, GPQA-Diamond 81.3%) measure general reasoning, not the deterministic task accuracy that is the core value proposition (arXiv:2602.04101). The claimed 98–99% structured output accuracy (interfaze.ai) lacks independent verification or methodology disclosure.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Document AI: $14.66B in 2025 → $27.62B by 2030, 13.5% CAGR (MarketsandMarkets, 2025 via search snippet); AI-driven web scraping: $10.2B in 2026, 23.5% CAGR (Research and Markets, 2026 via search snippet) |
| SAM | No public data found |
| Traction | 654 Twitter followers (X); 239 Discord members (Discord); 173 GitHub stars on top repo (GitHub); Groq partnership (X, 2026); Vercel AI Accelerator participant (Vercel, 2025) |
| Revenue Signal | $1.50/M input tokens, $3.50/M output tokens (interfaze.ai pricing page). No public revenue figures found |
| Founders | Yoeven D Khemlani (Founder): Imperial College London, prior prop-tech startup (Stayr), Sr. Tech Lead at UOB. Harsha Vardhan Khurdula (Co-Founder): M.Sc. CS Purdue, AI Scientist, CV/NLP researcher |
| Competitors | Firecrawl ($16.2M raised, revenue unknown, scraping-focused); Apify (~$3.3M raised, $13.3M 2024 revenue via Latka, broad scraping platform); Google Document AI (GCP product, enterprise OCR) |
| Moat Signals | Peer-reviewed architecture paper at IEEE CAI 2026 (YC page); proprietary bot-protected scraping engine (interfaze.ai) |
| Risk Factors | Incomplete rebrand from JigsawStack, public architecture paper enables replication, multi-task breadth vs. specialized depth |
| Founder Reach | Yoeven: Twitter 822 followers (X), LinkedIn (LinkedIn); Harsha: LinkedIn (LinkedIn), no Twitter found |
| Distribution Signals | OpenAI API compatibility (interfaze.ai); Vercel AI Accelerator (Vercel, 2025); Groq partnership (X, 2026) |
| Emails | interfaze@jigsawstack.com (interfaze.ai) |

**Funding history (pre-YC):** $500K seed from Antler (Oct 2024, Fundz via search snippet); $1M pre-seed from Ada Ventures (Mar 2025, e27 via search snippet). Total raised: $1.5M (Yoeven on X, 2025). YC Spring 2026 participation adds standard YC deal terms.
