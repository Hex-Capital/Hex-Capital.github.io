# The Token Company

> Compression middleware that improves LLM outputs

| Field | Value |
|-------|-------|
| Website | https://thetokencompany.com |
| YC Page | https://www.ycombinator.com/companies/the-token-company |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Developer Tools, Machine Learning, B2B, Infrastructure |
| YC Partner | Jared Friedman |
| Emails | otso@thetokencompany.com (YC page) |

## The Idea

**Problem:** Companies running LLM-powered applications at scale face high inference costs and latency from verbose, bloated input prompts. Natural language prompts contain significant redundancy — filler words, repetitive context, and semantically redundant tokens — that inflate token counts without adding information. Customers currently have limited tooling to address this: they either accept high token costs or manually refine prompts, which is labor-intensive and inconsistent. The problem is particularly acute for high-volume consumers — e.g., Pax Historia, a named customer, processes 193B tokens/month through OpenRouter (company website).

**Approach:** The Token Company provides a drop-in API middleware that compresses LLM input tokens using proprietary models (bear-1 and bear-1.1). Users send text to the compression API and receive semantically equivalent but shorter text back, which they then pass to their LLM of choice (GPT, Claude, Gemini, etc.). The compression is semantic — it removes redundant tokens while preserving meaning — rather than simple truncation. The company claims compression of up to 66% of input tokens, processed at a speed of 100K tokens in under 100ms (company website). The bear-1.1 model is positioned as an accuracy improvement over bear-1.

**Differentiation:** The primary alternative is Microsoft's LLMLingua, an open-source library (EMNLP '23, ACL '24) integrated into LangChain and LlamaIndex, which claims up to 20x compression (GitHub, 4.4K+ stars). LLMLingua is a self-hosted library requiring users to run inference on a small language model locally, while The Token Company offers a hosted API service with a simpler integration path. A direct YC W26 batchmate, Compresr (compresr.ai), offers a similar API-based context compression service claiming 100x compression, backed by a 4-person team with EPFL ML research backgrounds (YC page). TokenCrush operates as middleware in LangChain pipelines. The Token Company differentiates by claiming that compression actually *improves* LLM output quality (accuracy gains of +2.7pp on financial QA, +4.0pp on reading comprehension benchmarks) rather than merely preserving it, and by citing a 268K-vote blind arena study showing user preference for compressed prompts (company website).

**Business Model:** Consumption-based pricing at $0.05 per 1M compressed tokens (company website). Free sign-up available. No tiered pricing or enterprise pricing is publicly listed.

**TAM/SAM:** The global Large Language Model market was estimated at $5.6B in 2024, projected to grow at 36.9% CAGR from 2025 to 2030 (Grand View Research via search snippet). The enterprise LLM segment was estimated at $4.6B in 2024, projected to reach $41.6B by 2033 at 28.3% CAGR (Grand View Research via search snippet). No public TAM/SAM data specific to the LLM prompt compression middleware segment was found. [Inferred]: The serviceable market is a fraction of total LLM inference spend; with 53% of AI teams reporting costs exceeding forecasts by 40%+ during scaling (Menlo Ventures, 2025 via search snippet), cost optimization tooling addresses a real budget line item.

**GTM / Distribution:** The company offers SDKs for Python (`pip install tokenc`) and Node.js (npm), documentation, a Jupyter notebook demo, and a chat playground (GitHub organization). [Inferred]: The primary distribution path is developer-led, bottom-up adoption — developers integrate the API into existing LLM workflows with minimal code changes. The consumption-based pricing at $0.05/1M tokens creates low friction for initial adoption.

## Defensibility

The company has trained proprietary compression models (bear-1, bear-1.1) that represent a form of ML IP. The company's claim that compression improves output quality (not just reduces cost) is a differentiated technical claim that, if consistently replicable across workloads, would represent a meaningful data and model quality advantage. As more customers use the API, the company could accumulate data on compression patterns across diverse prompt types, building a data flywheel for model improvement.

No patents or regulatory barriers were found in public sources.

**Market structure:** LLM providers (OpenAI, Anthropic, Google) are economically misaligned with prompt compression — they monetize on token volume, so offering built-in compression would cannibalize their revenue. This creates a structural opening for a third-party middleware layer. However, LLM providers are also rapidly reducing per-token pricing (inference costs decreasing ~10x annually per a16z, 2025 via search snippet), which could reduce the cost-savings value proposition over time.

**Commoditization risk:** The core concept of prompt compression is well-studied in academic literature. Microsoft's LLMLingua is open-source and freely available. Compresr (YC W26) offers a directly competing API-based service. Apple has published research on hierarchical dynamic prompt compression. Academic implementations exist in multiple frameworks. The technical barrier to building a compression API is moderate — the defensibility depends more on compression quality and accuracy preservation than on the concept itself. A NAACL 2025 survey paper on prompt compression for LLMs documents the breadth of existing approaches (GitHub: ZongqianLi/Prompt-Compression-Survey).

## Market & Traction

**Traction signals:**
- Named customer: Pax Historia (YC-backed, AI-powered strategy game), consuming 193B tokens/month on OpenRouter. In a 268K-vote blind arena, compressed prompts outperformed uncompressed, with +4.9% Sonnet 4.5 score, +15% Gemini 3 Flash score, and +5% purchase amount lift (company website).
- Performance benchmarks published: +2.7pp accuracy on SEC filing financial QA (150 questions), +4.0pp on reading comprehension, 37% faster response times on Claude Opus 4.6, 30% faster on GPT-5.2 (company website).
- Angel investment from founders/operators at Silo, Wolt, Supercell, Hugging Face, and SVA (company website).
- Backed by Y Combinator (W26) and Wave Ventures (PitchBook via search snippet).
- $500K raised (PitchBook via search snippet).
- GitHub organization: 9 public repos, the `chrome2moz` personal repo by the founder has 69 stars; organization repos have minimal star counts (GitHub).
- Twitter/X: Company handle @token_company; follower count not retrievable. Founder handle @OtsoVeistera; follower count not retrievable.
- LinkedIn: Company page exists; follower count not retrievable.
- No Product Hunt launch found.
- No Discord or Slack community found.

**Competitive landscape:**

| Competitor | Key differentiator vs. The Token Company | Funding | Revenue/ARR |
|---|---|---|---|
| **LLMLingua (Microsoft Research)** | Open-source library (4.4K+ GitHub stars); self-hosted, not API-based; claims up to 20x compression; integrated into LangChain and LlamaIndex. Not a startup — funded by Microsoft Research. | Microsoft internal | N/A (open-source) |
| **Compresr (YC W26)** | Direct competitor — API-based context compression; claims 100x compression; 4-person team with EPFL PhD-level ML research backgrounds; open-source proxy (Context Gateway). | YC standard deal (~$500K assumed) | No public data found |
| **TokenCompress (tokencompress.com)** | Claims 87% cost savings; limited public information available on team or approach. | No public data found | No public data found |

**Why now:** [Inferred]: Several converging factors opened this opportunity. LLM context windows have expanded dramatically (from 4K to 200K+ tokens), making prompt bloat a larger cost item. Agentic workflows (multi-step, multi-tool) generate increasingly verbose prompts through chain-of-thought, tool outputs, and retrieved documents. Enterprise LLM adoption reached a critical mass in 2024-2025 — 72% of businesses plan to increase AI budgets, and 49% of enterprise compute is now inference-driven, up from 29% the prior year (Menlo Ventures, 2025 via search snippet). The cost pain at scale became acute enough to create demand for inference middleware.

## Founders & Team

**Otso Veisterä** — Founder
- 18 years old at time of YC W26 batch (born December 18; was 17 at Slush 2025) (BabyVC Substack, 2025). Programming since age 7 (portfolio site).
- Awards: "Coder of the Year," "Young Innovator," "Best Physics Report in Finland," "National Problem-Solving Champion" (portfolio site).
- Prior experience: AI for 3D medical imaging (PyTorch segmentation) at Planmeca (Jun–Jul 2024); FR8 Maverick Cohort 1.0 (Jun–Aug 2025); Entrepreneur in Residence at Lifeline Ventures (Sep–Dec 2025) (portfolio site, LinkedIn).
- Education: Not listed; based in Finland prior to SF. Studying at Aalto University is not confirmed.
- Skills: Python, Rust, TypeScript, PyTorch, CUDA (GitHub profile).
- Won the Mashup hackathon in Sweden, where he conceived the core product insight (BabyVC Substack, 2025).
- Previously operated under the name "Otsofy" before rebranding to The Token Company (Crunchbase, otsofy.com).
- Twitter/X: @OtsoVeistera — account exists, joined June 2025; follower count not retrievable.
- LinkedIn: linkedin.com/in/otso-veistera — "The Token Company (YC W26)"
- GitHub: github.com/OtsoBear — 35 public repos, 13 followers. Featured repo: `chrome2moz` (Chrome-to-Firefox extension converter, Rust) with 69 stars.

**Rasmus Uusipaikka** — Team member (role not specified publicly)
- Studies Industrial Engineering and Management at Aalto University (VALOR team page).
- 2+ years expertise in business analytics, market/competitor analysis at startups (VALOR team page).
- Interned at VALOR (Finnish VC firm) starting September 2024 (VALOR team page).
- Authored a 2025 thesis at Aalto on emotional intelligence in AI agent conflict resolution (Aalto University repository via search snippet).
- Judged NexHacks at Carnegie Mellon (LinkedIn post).
- Twitter/X: @uusipaikka — follower count not retrievable.
- LinkedIn: linkedin.com/in/rasmus-uusipaikka — "The Token Company (YC W26)"
- GitHub: No public account found.

**Co-founder relationship:** Both Otso Veisterä and Rasmus Uusipaikka have connections to the Finnish tech ecosystem — Otso is from Espoo, Finland, and Rasmus studies at Aalto University (also in Espoo). Both have ties to Finnish VC (Lifeline Ventures and VALOR, respectively). The specific nature and origin of their professional relationship is not publicly documented.

**Founder-market fit:** Otso Veisterä has direct ML engineering experience (PyTorch, CUDA), built the compression models (bear-1, bear-1.1), and conceived the product idea at a hackathon. His technical depth in ML and systems programming (Rust, Python) is directly applicable to building low-latency compression infrastructure. Rasmus Uusipaikka brings business analytics and market analysis experience from his VC internship, complementing the technical founder. The company is backed by angel investors from Silo, Wolt, Supercell, Hugging Face, and SVA (company website), suggesting access to experienced operators in the Finnish and global tech ecosystems.

## Key Risks

**Rapidly declining LLM inference costs:** LLM inference costs are dropping approximately 10x per year for equivalent model performance (a16z, 2025 via search snippet). As the per-token cost of LLM calls decreases, the absolute dollar savings from compression diminish, potentially weakening the cost-reduction value proposition. Mitigation: The company positions compression as also *improving* output quality, not just reducing cost.

**Direct YC batchmate competition (Compresr):** Compresr, a fellow YC W26 company, offers a directly competing API-based LLM context compression service with a 4-person team of EPFL ML researchers and claims of 100x compression (YC page). Both companies are targeting the same buyer persona (developers building LLM applications) with similar integration approaches (API/SDK). Being in the same YC batch could create direct competition for early customers and mindshare.

**LLM provider internalization:** If LLM providers determine that input optimization improves their own margins or user experience, they could build native compression into their APIs, eliminating the need for middleware. Google has published prompt compression research (Apple ML Research), and Microsoft created LLMLingua. A provider offering "send us your raw prompt and we'll optimize it" would bypass the middleware layer entirely.

**Solo technical founder with limited commercial experience:** The company's only named founder (Otso Veisterä) is 18 years old with deep technical skills but no prior company-building, sales, or go-to-market experience. Rasmus Uusipaikka's role is not publicly defined as co-founder, and his background is in analytics/VC internship rather than enterprise sales. Selling infrastructure middleware to developers and enterprises at scale requires go-to-market execution that the current team composition does not have documented experience in.

**Brand disambiguation:** "The Token Company" overlaps with numerous token-related entities in crypto, fintech, and security (Token Security, token.com, Token Transit, Token Ventures). Web searches for the company name return significant noise, which could hamper organic discovery and SEO.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global LLM market: $5.6B in 2024, 36.9% CAGR to 2030 (Grand View Research via search snippet). Enterprise LLM segment: $4.6B in 2024, 28.3% CAGR to 2033 (Grand View Research via search snippet). |
| SAM | No public data found for LLM compression middleware specifically. |
| Traction | Named customer Pax Historia (193B tokens/month); 268K-vote blind arena showing compressed > uncompressed; +5% purchase lift (company website). |
| Revenue Signal | $0.05 per 1M compressed tokens (company website pricing). No revenue figures disclosed. |
| Founders | Otso Veisterä (Founder): 18yo ML engineer, Planmeca AI intern, national physics champion, Lifeline Ventures EIR. Rasmus Uusipaikka: Aalto University IE&M student, VALOR VC intern, business analytics. |
| Competitors | LLMLingua (Microsoft Research, open-source, 4.4K GitHub stars, up to 20x compression); Compresr (YC W26, ~$500K, revenue unknown, claims 100x compression, EPFL PhD team); TokenCompress (funding unknown, revenue unknown, claims 87% savings) |
| Moat Signals | Proprietary bear-1/bear-1.1 models; claim that compression improves (not just preserves) output quality; LLM provider economic misalignment with self-compression. |
| Risk Factors | Declining LLM inference costs reducing savings value, direct YC batchmate competition (Compresr), LLM provider internalization risk |
| Founder Reach | Otso Veisterä: Twitter @OtsoVeistera (count not retrievable), LinkedIn (present), GitHub 13 followers / 69 stars on top repo. Rasmus Uusipaikka: Twitter @uusipaikka (count not retrievable), LinkedIn (present), GitHub not found. |
| Distribution Signals | Python and Node.js SDKs published (GitHub); Jupyter notebook demo; chat playground at chat.thetokencompany.com; no Product Hunt launch found. |
| Emails | otso@thetokencompany.com (YC page) |
