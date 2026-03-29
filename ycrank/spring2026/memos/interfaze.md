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

**Problem:** Developers building AI-powered applications requiring deterministic output — OCR, web scraping, classification, speech-to-text — face a choice between monolithic LLMs (expensive, non-deterministic) and fragmented point solutions requiring separate vendor integrations for each task (interfaze.ai). Current LLMs are general-purpose and produce variable outputs for tasks that demand high consistency (arxiv.org/abs/2602.04101).

**Approach:** Interfaze is an AI model architecture that merges specialized DNN/CNN perception modules with LLMs via a controller layer. The system consists of: (1) perception modules — heterogeneous DNNs paired with small language models for document analysis and speech recognition; (2) a context-construction layer that crawls, indexes, and parses web pages, code, and PDFs into structured state; (3) an action layer enabling browsing, retrieval, and code execution; and (4) a controller that routes tasks and forwards distilled context to a user-selected LLM (arxiv.org/abs/2602.04101). The paper's core claim is that this shifts "the bulk of computation away from the most expensive and monolithic models," with small models handling most queries (arxiv.org/abs/2602.04101).

**Differentiation:** Unlike Firecrawl or Apify, which are web-scraping-specific tools, Interfaze consolidates OCR, scraping, classification, STT, and more into a single API-accessible model with OpenAI-compatible endpoints (interfaze.ai). Unlike general-purpose LLMs from OpenAI or Anthropic, Interfaze's architecture routes deterministic subtasks to specialized small models rather than relying on a single large model. The system is also multimodal (text, images, audio, files, video) with a 1M-token context window and 32K-token max output (interfaze.ai).

**Business Model:** Consumption-based API pricing: $1.50 per million input tokens, $3.50 per million output tokens, with caching included (interfaze.ai pricing page). Rate limit of 50 requests per second (interfaze.ai). [Inferred]: Revenue scales linearly with developer adoption and API call volume; the pricing model is positioned below frontier LLM pricing to compete on cost for deterministic tasks.

**TAM/SAM:** The global AI infrastructure market was valued at $72.02 billion in 2025 and is projected to reach $465.86 billion by 2034 at a 23.05% CAGR (Precedence Research, 2025 via search snippet). The AI API market is expected to expand from $41.05 billion to $373.38 billion over the next seven years (Arcade.dev, 2025 via search snippet). No public SAM estimate specific to deterministic developer AI tasks found.

**GTM / Distribution:** OpenAI API-compatible endpoints reduce integration friction for developers already using OpenAI SDKs (interfaze.ai). SDKs available in TypeScript/JavaScript and Python via GitHub (github.com/jigsawstack). n8n integration node published (github.com/JigsawStack/n8n-node-jigsawstack). MCP server available for AI agent interoperability (github.com/JigsawStack/jigsawstack-mcp-server). [Inferred]: Primary distribution is developer self-serve via API, with ecosystem integrations (n8n, MCP, Vercel AI SDK) as amplifiers.

## Defensibility

- **Published research / IP:** Peer-reviewed paper "Interfaze: The Future of AI is built on Task-Specific Small Models" accepted at IEEE Conference on Artificial Intelligence (CAI) 2026 (arxiv.org/abs/2602.04101). The architecture combining specialized DNNs with LLM controllers represents documented technical IP.
- **Proprietary small models:** Custom-trained DNN/CNN models for OCR, STT, classification, and scraping that are not open-sourced (interfaze.ai).
- **Data flywheel:** 10 million API requests processed as of March 2025 (Ada Ventures, March 2025). [Inferred]: Each API request generates training signal for model improvement, though scale is early.
- **Switching costs:** OpenAI API compatibility is a double-edged sword — easy adoption but also easy migration away.

**Market structure:** General-purpose LLM providers (OpenAI, Anthropic, Google) are optimized for broad capability, not deterministic task performance. Replicating Interfaze's architecture would require building and maintaining multiple specialized small models alongside orchestration infrastructure — a different engineering investment than scaling a single foundation model. [Inferred]: The structural barrier is that frontier LLM providers' business models incentivize scaling single models rather than fragmenting into task-specific pipelines.

**Commoditization risk:** The individual components (OCR models, STT models, scraping engines) are available as open-source or commercial point solutions. The integration and orchestration layer could be replicated by well-resourced competitors. Firecrawl (50K GitHub stars, $14.5M raised) already covers the scraping vertical with significant developer adoption (TechCrunch, Aug 2025).

## Market & Traction

**Traction signals:**
- 10 million API requests processed in 9 months of beta (Ada Ventures, March 2025)
- Currently in beta (interfaze.ai, March 2026)
- GitHub organization: 36 repositories, 92 followers; top repos: translation-widget (25 stars), jigsawstack-js SDK (24 stars), jigsawstack-python SDK (18 stars) (github.com/jigsawstack)
- Podcast appearance: Software Engineering Daily, July 24, 2025 (softwareengineeringdaily.com)
- Company Twitter/X: @interfaze_ai (follower count not retrievable)
- LinkedIn: interfaze-ai (follower count not retrievable)
- No Product Hunt launch found
- No app store or Chrome Web Store presence found
- 0 open job postings (YC page, March 2026)

**Competitive landscape:**

| Competitor | Differentiator vs. Interfaze | Funding | Revenue |
|---|---|---|---|
| **Firecrawl** | Open-source web crawler specialized for scraping; 350K developers, ~50K GitHub stars; focused on scraping only, not multi-task | $14.5M Series A (TechCrunch, Aug 2025) | $1.5M (2024) (getlatka.com) |
| **Apify** | Full-stack web scraping platform with 6.8B API calls/year; broader scraping tooling but not AI-model-native | $3.29M raised (PitchBook via search snippet) | $13.3M (2024) (getlatka.com) |
| **Kadoa** | AI-powered scraping focused on financial services; "zero-maintenance" design; narrower vertical focus | Seed round, undisclosed (startupticker.ch, Mar 2025) | Revenue unknown |
| **Google Cloud Vision / Document AI** | Enterprise-grade OCR and document processing backed by Google infrastructure; higher pricing, less developer-friendly API | N/A (Google product) | Revenue unknown (bundled in Google Cloud) |

**Why now:** [Inferred]: Three catalysts converged: (1) small language models reached sufficient quality for production use in 2024-2025, enabling task-specific routing architectures that were previously impractical; (2) AI agent frameworks (MCP, tool-use protocols) created standardized interfaces for model orchestration; (3) developer API costs for frontier LLMs remain high ($15-60/M output tokens for GPT-4-class models), creating demand for cheaper deterministic alternatives.

## Founders & Team

**Yoeven D Khemlani** — Founder & CEO
- Education: Imperial College London (innovation design engineering and CS, did not complete); Temasek Polytechnic (LinkedIn, Peerlist)
- Career: ~9.8 years experience. Senior Technical Lead at UOB; Technical Lead at Noah; Head of Technology & Product at Staytion Singapore (search snippet via Peerlist)
- Prior exit: Co-founded Stayr (proptech, Singapore, May 2020–June 2022) — grew from $1M ARR in year one to $3M ARR in year two before exit (Ada Ventures, March 2025). Exit terms undisclosed.
- Founded JigsawStack in July 2024 (search snippet via various sources)
- Twitter/X: @yoeven — 1,228 followers (X.com via search snippet)
- LinkedIn: linkedin.com/in/yoeven — headline: "Founder at JigsawStack"
- GitHub: github.com/yoeven — public repos available; no high-star individual repos found

**Harsha Vardhan Khurdula** — Co-Founder & CTO
- Education: M.Sc. Computer Science, Purdue University (LinkedIn, Google Scholar)
- Research: AI, computer vision, NLP, reinforcement learning (Google Scholar)
- Peer reviewer for Springer Nature's Journal of Progress in Artificial Intelligence (search snippet)
- Lead author on Interfaze paper accepted at IEEE CAI 2026 (arxiv.org/abs/2602.04101)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/harsha-vardhan-khurdula — "Founding Member @JigsawStack | AI Scientist | M.Sc. Computer Science"
- GitHub: github.com/Khurdhula-Harshavardhan — repos include Hindi OCR and X-ray classification projects

**Other team members:** Vineet Agarwal, Founding AI Engineer, based in Durgapur, India. Co-author on the Interfaze paper. Backend and AI engineering (Node.js, Go, Python, Kubernetes, AWS). Twitter/X: @vineetwts. GitHub: github.com/VineeTagarwaL-code. LinkedIn: "AI Engineer | Founding AI Engineer @JigsawStack" (LinkedIn via search snippet).

**Co-founder relationship:** No shared prior employer or university overlap found between Khemlani (Imperial College London, Singapore-based career) and Khurdula (Purdue University, India-based research). Both appear at JigsawStack as their first shared affiliation.

**Founder-market fit:** Khemlani brings prior entrepreneurial experience with a documented ARR-growth trajectory and exit at Stayr, plus hands-on technical leadership across multiple companies (Ada Ventures, March 2025). Khurdula brings formal ML research credentials from Purdue and peer-reviewed publication in the specific domain (task-specific model architectures) that Interfaze targets (arxiv.org/abs/2602.04101). The combination covers both go-to-market execution and core ML research.

## Key Risks

**Name/entity confusion — JigsawStack vs. Interfaze:** The company operates under two brands. The email domain is jigsawstack.com, the GitHub org was renamed from JigsawStack to Interfaze, and SDKs still carry JigsawStack naming. The YC entity is "Interfaze" but most prior traction data (10M API requests, Ada Ventures investment, podcast) references "JigsawStack." This creates brand confusion and makes it difficult to attribute metrics to the current product vs. prior iterations (interfaze.ai, Ada Ventures, github.com/jigsawstack).

**Benchmark reproducibility and comparability:** The published benchmarks (MMLU 91.4, MMMU 77.3, etc.) are self-reported in a company-authored paper (arxiv.org/abs/2602.04101). The system routes tasks to specialized models plus a "user-selected LLM," making it unclear how much performance derives from Interfaze's proprietary components vs. the underlying LLM. Independent third-party benchmarking has not been found.

**Competitive encroachment from well-funded scraping/AI infrastructure players:** Firecrawl ($14.5M raised, 350K developers, 50K GitHub stars) and Apify ($13.3M revenue) have established developer communities in overlapping use cases (TechCrunch Aug 2025, getlatka.com). Frontier LLM providers are also adding multimodal capabilities (vision, audio) that overlap with Interfaze's task set.

**Distributed team execution risk:** The team spans San Francisco, Singapore (founder's background), and India (Vineet Agarwal based in Durgapur) (LinkedIn via search snippet). At 5 people, coordination across time zones during a beta-to-launch transition adds operational complexity.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $72.02B AI infrastructure market in 2025, projected $465.86B by 2034 at 23.05% CAGR (Precedence Research, 2025 via search snippet) |
| SAM | No public data found |
| Traction | 10M API requests in 9 months of beta (Ada Ventures, March 2025); 36 GitHub repos, 92 org followers, top repo 25 stars (github.com/jigsawstack, March 2026); Software Engineering Daily podcast (July 2025) |
| Revenue Signal | $1.50/M input tokens, $3.50/M output tokens (interfaze.ai pricing page, March 2026). No ARR or revenue figures disclosed. |
| Founders | Yoeven D Khemlani (CEO): prior exit (Stayr, $1M→$3M ARR), ~10yr tech experience. Harsha Vardhan Khurdula (CTO): M.Sc. Purdue, IEEE CAI 2026 paper author. |
| Competitors | Firecrawl ($14.5M raised, $1.5M revenue 2024, scraping-focused) (TechCrunch Aug 2025, getlatka.com); Apify ($3.29M raised, $13.3M revenue 2024, web scraping platform) (PitchBook, getlatka.com via search snippet); Kadoa (Seed, undisclosed amount, financial-services scraping) (startupticker.ch, Mar 2025) |
| Moat Signals | IEEE CAI 2026 accepted paper on task-specific model architecture (arxiv.org/abs/2602.04101); proprietary DNN/CNN models not open-sourced (interfaze.ai) |
| Risk Factors | Brand confusion (JigsawStack vs. Interfaze), self-reported benchmarks without independent validation, competitive pressure from well-funded scraping incumbents |
| Founder Reach | Yoeven Khemlani: Twitter @yoeven 1,228 followers (X.com via search snippet), LinkedIn linkedin.com/in/yoeven. Harsha Vardhan Khurdula: LinkedIn linkedin.com/in/harsha-vardhan-khurdula, Twitter not found. |
| Distribution Signals | OpenAI-compatible API (interfaze.ai); SDKs on npm/PyPI (github.com/jigsawstack); n8n integration, MCP server (github.com/jigsawstack); No Product Hunt launch found. |
| Emails | interfaze@jigsawstack.com (interfaze.ai) |
