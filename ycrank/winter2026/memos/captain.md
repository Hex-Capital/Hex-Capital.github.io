# Captain

> Accurate knowledge search that scales

| Field | Value |
|-------|-------|
| Website | https://runcaptain.com |
| YC Page | https://www.ycombinator.com/companies/captain |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Big Data, Data Engineering |

## The Idea

**Problem:** Enterprises relying on Retrieval-Augmented Generation (RAG) pipelines for knowledge retrieval from unstructured data face low accuracy — averaging ~78% — and deployments that take 3–6 months to build and tune (runcaptain.com). Current RAG approaches require stitching together embedding models, vector databases, rerankers, and custom pipelines, creating significant engineering overhead and brittle accuracy on complex documents with tables, images, and mixed formats.

**Approach:** Captain provides an API-first unified retrieval engine that abstracts the full RAG pipeline — ingestion, indexing, vector storage, and query processing — into a managed service. It uses distributed parallel LLMs combined with embeddings and map-reduction techniques to overcome context window limitations (YC company page). Features include auto-OCR and Vision Language Models for universal indexing, agentic and hybrid search (keyword + semantic), re-ranking, managed vector storage ("Captain Collections"), and 1,000+ native integrations for connectors like S3, SharePoint, Google Drive, Confluence, Slack, and Notion (runcaptain.com). The company claims accuracy improvement from 78% to 95%+ with citations.

**Differentiation:** Unlike standalone vector databases (Pinecone, Weaviate, Milvus) that require users to build their own retrieval pipeline, Captain provides the full retrieval stack end-to-end. Unlike framework-based approaches (LangChain), Captain is a managed service rather than an orchestration toolkit. Unlike horizontal RAG platforms (Vectara, Contextual AI), Captain positions its technical differentiation on distributed parallel LLM processing with map-reduction — a retrieval architecture distinct from standard embedding-and-rerank approaches. The company also provides managed vector storage, eliminating the need for a separate vector database.

**Business Model:** Captain has a published pricing page (runcaptain.com/pricing) with three tiers:
- **Starter:** $295/month — 12,000 credits/year (1,000/month), unlimited queries, in-app and email support
- **Growth:** $1,600/month — 1,000,000 credits/year (83K/month), Captain Datasets feature, SOC 2 compliance, priority support
- **Enterprise:** Custom pricing — unlimited queries, custom SLAs, BYOC/on-premise option, dedicated support

Credits are consumption-based: Basic Pages (simple PDFs, text, code) cost 1 credit ($0.02 overage); Advanced Pages (complex PDFs with tables/images) cost 2.5 credits ($0.05 overage) (runcaptain.com/pricing).

**TAM/SAM:** The global RAG market is projected at $1.94B in 2025, growing to $9.86B by 2030 at a 38.4% CAGR (MarketsandMarkets, 2025 via search snippet). An alternate estimate from Grand View Research puts the market at $1.2B in 2024 growing to $11.0B by 2030 at 49.1% CAGR (Grand View Research, 2025 via search snippet). ResearchAndMarkets projects the market to surpass $40B by 2035 at 35.31% CAGR (BusinessWire, Oct 2025 via search snippet). Captain's SAM — the enterprise segment specifically using managed retrieval APIs rather than building in-house — is a subset. No company-specific SAM data found.

**GTM / Distribution:** [Inferred]: The API-first model and developer-facing documentation suggest a product-led growth motion starting with developers, scaling into enterprise via the Growth and Enterprise tiers. The presence of enterprise customer logos (Sony, IEEE, Boar's Head) on the website suggests a concurrent direct sales motion for larger accounts. SOC 2 Type II certification and BYOC/on-premise options in the Enterprise tier indicate targeting of security-conscious enterprise buyers.

## Defensibility

Captain's SOC 2 Type II certification creates a compliance barrier for enterprise adoption that competing startups must replicate (runcaptain.com). The managed retrieval architecture, including Captain Collections (proprietary vector storage) and the distributed parallel LLM + map-reduction technique, represents a technical implementation that takes meaningful engineering effort to reproduce. Enterprise customer data indexed within Captain creates switching costs — migrating indexed data, integrations, and tuned retrieval configurations to a competitor carries operational risk and re-implementation cost.

**Market structure:** Large incumbents (AWS, Google, Microsoft) offer component pieces (vector databases, embedding models, search APIs) but not a unified managed retrieval engine with the same abstraction level. [Inferred]: Building this as a bundled managed service would require these incumbents to integrate across product teams and potentially cannibalize revenue from their existing component offerings (e.g., AWS selling Bedrock + OpenSearch separately). However, this structural barrier is modest — incumbents have launched comparable managed AI services before.

**Commoditization risk:** The core RAG pipeline architecture is well-understood and widely documented. Multiple open-source frameworks (LangChain, LlamaIndex, Haystack) provide similar capabilities as libraries. Well-funded startups (Vectara at $73.5M, Contextual AI at $100M) are building comparable managed retrieval products. The specific technical differentiation — distributed parallel LLM map-reduction — would need sustained accuracy advantages to maintain differentiation as the broader ecosystem improves.

## Market & Traction

**Traction signals:**
- Customer logos displayed on website: Boar's Head, Sony, IEEE, Reality Interactive, Purdue, Rocketbook (runcaptain.com, accessed Feb 2026)
- Garry Tan (Y Combinator CEO) endorsement quote on website: "Captain is a step function increase vs existing RAG pipelines" (runcaptain.com); this quote was also referenced in a search snippet as tweeted November 10, 2025 (via search snippet)
- SOC 2 Type II certified with independent penetration testing (runcaptain.com)
- Published pricing page with three paid tiers starting at $295/month (runcaptain.com/pricing)
- Company X/Twitter: @RunCaptainRAG, joined November 2024 (X.com); follower count not retrievable
- LinkedIn company page: linkedin.com/company/runcaptain; follower count not retrievable
- No public Product Hunt launch found for this specific Captain product (runcaptain.com)
- No public Discord or Slack community found
- Hiring status: not currently hiring (YC company page)

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Captain |
|---|---|---|
| **Pinecone** | $138M raised, $750M valuation (Crunchbase via search snippet); $26.6M revenue in 2024 (Getlatka via search snippet) | Vector database infrastructure only — requires users to build their own retrieval pipeline on top; Captain provides end-to-end managed retrieval |
| **Vectara** | $73.5M raised, Series A $25M in Jul 2024 (Crunchbase via search snippet) | Full-stack RAG platform with grounded generation and hallucination detection; more established with earlier market entry; revenue not public |
| **Contextual AI** | $100M raised, Series A $80M in Aug 2024, investors include Bezos Expeditions, NVIDIA (Crunchbase via search snippet) | Builds specialized RAG agents rather than a general-purpose retrieval API; focuses on custom model fine-tuning; revenue not public |
| **deepset** | $46M raised, $30M round led by Balderton Capital (VentureBeat via search snippet) | Open-source framework (Haystack) with enterprise platform; strong in VPC/on-premise for privacy-constrained customers; revenue not public |

**Why now:** [Inferred]: Several converging factors opened this opportunity in 2024–2025. First, enterprise adoption of LLMs has reached sufficient scale that RAG infrastructure has moved from experimental to production workloads — 73.34% of RAG implementations are now in large organizations (MarketsandMarkets, 2025 via search snippet). Second, context window expansion in frontier models (GPT-4 Turbo 128K, Claude 200K) paradoxically increased demand for better retrieval, as enterprises discovered that simply expanding context windows does not solve accuracy at scale across large document corpora. Third, the open-sourcing of GraphRAG by Microsoft and integration of RAG capabilities by enterprise vendors like Workday and ServiceNow normalized the category, creating budget line items and buying intent at the enterprise level.

## Founders & Team

**Lewis Polansky** — Co-founder & CEO
- Purdue University, studying Finance at the Daniels School of Business (expected '26) (LinkedIn via search snippet, lewispolansky.com)
- Also studying Advanced FinTech, Financial Engineering, and Accuracy & Verification Algorithms for LLMs at Purdue (web search snippet)
- Co-founded SoyBox, which won second place and a $10,000 prize from the Indiana Soybean Alliance for alternative soy-based packaging (web search snippet)
- Founded a cybersecurity EdTech organization including 3 high school clubs and a web app with online labs (web search snippet)
- Won awards from the U.S. House of Representatives for two creative app prototypes (web search snippet)
- Interned at an AgTech startup focused on crop drying in Africa (web search snippet)
- Prior work on solving hallucinations for code generation through a previous startup (YC company page via search snippet)
- Eagle Scout (2023) (web search snippet)
- Twitter/X: No public personal account found
- LinkedIn: linkedin.com/in/lewispolansky
- GitHub: No public account found

**Edgar Babajanyan** — Co-founder & CTO
- Purdue University, studying Computing Infrastructure, Network Engineering, and Information Systems (LinkedIn via search snippet)
- 3 years of experience building production RAG pipelines; NLP and AI research background (YC company page via search snippet)
- Built internal software solution for Boar's Head (one of Captain's listed customers) (web search snippet)
- Teaching assistant in information architectures at Purdue (web search snippet)
- Leads software development at one of the largest robotics clubs at Purdue (web search snippet)
- Twitter/X: @babajanyanedgar (GitHub profile); follower count not retrievable
- LinkedIn: linkedin.com/in/edgarbabajanyan — "Co-Founder and CTO of Captain | Big Data, Clear Insights | Infrastructure, Data, and Drone Enthusiast"
- GitHub: github.com/EdgarBabajanyan — 12 public repos, 13 followers; notable repos include EVH-EmergencyVehicularHelp (C++, 1 star), autonomous-drone-for-personal-and-campus-security, DattusV1 (Congressional App Challenge submission) (GitHub)

**Co-founder relationship:** Both Lewis Polansky and Edgar Babajanyan attend Purdue University, indicating they likely met through the university. Edgar's prior work building an internal solution for Boar's Head — which appears as a customer logo on Captain's website — suggests his enterprise experience may have been an early catalyst for the company.

**Founder-market fit:** Edgar's 3 years of production RAG pipeline experience and NLP/AI research background provide direct domain expertise in the core technical problem Captain is solving. His prior work building enterprise solutions (Boar's Head) demonstrates experience with enterprise customer needs. Lewis brings product design, operations, and business development experience, along with prior startup founding (SoyBox, cybersecurity EdTech). Both founders are current university students, which is common at the pre-seed stage in YC.

## Key Risks

**Brand disambiguation:** "Captain" is a highly generic name shared by numerous other companies including Captain Data (B2B data extraction), Captain Compliance, Captain Up (gamification), Captain Experiences, and others — all with established web presence and LinkedIn pages. This creates SEO competition, customer confusion, and trademark challenges. The company's X handle (@RunCaptainRAG) and domain (runcaptain.com) already reflect this challenge.

**Well-funded direct competitors:** Vectara ($73.5M), Contextual AI ($100M), and deepset ($46M) are building comparable enterprise RAG/retrieval products with substantially larger teams and established customer bases. Pinecone ($138M, $26.6M revenue) occupies the adjacent vector database layer and could expand into full-stack retrieval. These competitors have multi-year head starts in go-to-market and enterprise relationships.

**Platform dependency on upstream LLMs:** Captain's distributed parallel LLM architecture depends on third-party LLM providers (pricing, availability, API stability). Changes in LLM pricing, rate limits, or capabilities could directly affect Captain's cost structure and accuracy claims. A significant LLM price increase or API deprecation would impact margins and service reliability.

**Accuracy claims require ongoing validation:** The core value proposition — 95%+ accuracy vs. 78% RAG average — is a benchmark claim without publicly cited methodology, dataset, or independent validation. As competitor retrieval accuracy improves (driven by better embedding models, rerankers, and agentic architectures), the accuracy gap may narrow, undermining the primary differentiation.

**Incumbent convergence:** AWS, Google, and Microsoft are increasingly offering managed RAG components within their cloud platforms (e.g., Amazon Bedrock Knowledge Bases, Google Vertex AI Search, Azure AI Search). These incumbents can bundle retrieval with compute, storage, and LLM access at potentially lower marginal cost, and already have enterprise distribution.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.94B in 2025 → $9.86B by 2030 at 38.4% CAGR (MarketsandMarkets, 2025 via search snippet) |
| SAM | No public data found |
| Traction | Customer logos on website: Boar's Head, Sony, IEEE, Reality Interactive, Purdue, Rocketbook (runcaptain.com, Feb 2026); Garry Tan endorsement quote (runcaptain.com); SOC 2 Type II certified (runcaptain.com) |
| Revenue Signal | Published pricing: Starter $295/mo, Growth $1,600/mo, Enterprise custom (runcaptain.com/pricing). No public revenue figures found. |
| Founders | Lewis Polansky (CEO): Purdue Finance, prior startup exits (SoyBox $10K prize), cybersecurity EdTech founder. Edgar Babajanyan (CTO): Purdue Computing Infrastructure, 3 yrs production RAG experience, NLP/AI research. |
| Competitors | Pinecone ($138M raised, $26.6M revenue 2024, vector DB only vs. full-stack retrieval); Vectara ($73.5M raised, revenue unknown, full-stack RAG with hallucination detection); Contextual AI ($100M raised, revenue unknown, specialized RAG agents vs. general-purpose retrieval); deepset ($46M raised, revenue unknown, open-source framework + enterprise platform) |
| Moat Signals | SOC 2 Type II certification; proprietary distributed parallel LLM + map-reduction retrieval architecture; managed vector storage (Captain Collections) creating data switching costs |
| Risk Factors | Well-funded direct competitors ($73.5M–$138M raised), generic brand name disambiguation, incumbent cloud provider convergence into managed RAG |
| Founder Reach | Lewis Polansky: Twitter not found, LinkedIn linkedin.com/in/lewispolansky, GitHub not found. Edgar Babajanyan: Twitter @babajanyanedgar (count not retrievable), LinkedIn linkedin.com/in/edgarbabajanyan, GitHub 13 followers/12 repos |
| Distribution Signals | No Product Hunt launch found; X account @RunCaptainRAG joined Nov 2024 (follower count not retrievable); LinkedIn company page exists (follower count not retrievable) |
