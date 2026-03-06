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
| YC Partner | Garry Tan (YC page) |
| Emails | founders@runcaptain.com, support@runcaptain.com (runcaptain.com and YC page) |

## The Idea

**Problem:** Approximately 90% of enterprise knowledge resides in unstructured data (documents, PDFs, images, Slack messages, emails) that cannot be stored in traditional databases (YC company page). Current RAG (Retrieval-Augmented Generation) solutions average ~78% retrieval accuracy and are "only performant on pre-optimized question types" (YC company page). Enterprises needing to search and retrieve knowledge from these sources face poor accuracy, long deployment timelines (3–6 months for manual pipelines), and limited governance controls. Current alternatives include building custom RAG pipelines using open-source frameworks (LangChain, LlamaIndex) or using enterprise search platforms like Glean.

**Approach:** Captain distributes the retrieval workload across many LLMs in parallel with embeddings, then Map-Reduces responses down to a single output, effectively creating an "infinite context window" (YC company page). The platform handles the entire retrieval pipeline as a managed API: universal indexing with auto-OCR and vision-language models, managed vector storage ("Captain Collections" — no external vector database required), agentic hybrid search combining keyword and semantic relevance, and role-based governance with granular metadata-based access control (runcaptain.com). Supported data sources include S3, GCS, Azure Blob, SharePoint, Google Drive, Dropbox, Confluence, Slack, Gmail, Notion, Oracle NetSuite, and 1,000+ custom integrations (runcaptain.com). The company claims retrieval accuracy improves from an average of 78% to 95%+ with citations (runcaptain.com, YC page).

**Differentiation:** Unlike open-source RAG frameworks (LangChain, LlamaIndex, Haystack) that require developers to build and maintain pipelines, Captain provides a fully managed API with claimed deployment in minutes (runcaptain.com). Unlike Glean, which focuses on enterprise search as a user-facing product, Captain is developer-infrastructure-first — an API/engine that other applications build on. Unlike Vectara, which also offers managed RAG-as-a-service, Captain's stated differentiation is its parallel LLM Map-Reduce architecture rather than a traditional embedding + reranking approach. Captain also offers a proprietary "Odyssey" dataset covering companies, people, deals, investors, funds, limited partners, service providers, patents, and credit analysis (docs.runcaptain.com), which is not a feature typical of RAG infrastructure providers. Captain holds SOC 2 Type II certification (runcaptain.com).

**Business Model:** Consumption-based pricing with three tiers (runcaptain.com/pricing):
- **Starter:** $295/month — 12,000 credits/year (~1,000/month), unlimited queries, in-app and email support. 1-month free trial, no credit card required.
- **Growth (Most Popular):** $1,600/month — 1,000,000 credits/year (~83,000/month), unlimited queries, SOC II compliance, priority support.
- **Enterprise:** Custom pricing — unlimited queries, custom SLAs, BYOC (on-premise) available, dedicated support, access to Captain Datasets.
- Credit pricing: Basic Page (simple PDFs, text, code) = 1 credit (~$0.02); Advanced Page (complex PDFs with tables/images, VLM-powered) = 2.5 credits (~$0.05). Bulk discounts available.

**TAM/SAM:** The global RAG market was valued at $1.85 billion in 2025 and is projected to reach $9.86 billion by 2030 at a CAGR of 38.4% (MarketsandMarkets, 2025 via search snippet). Precedence Research estimates the market at $1.85 billion in 2025 growing to $67 billion by 2034 at a CAGR of 49% (Precedence Research, 2025 via search snippet). Grand View Research projects $11.0 billion by 2030 at a CAGR of 49.1% (Grand View Research via search snippet). [Inferred]: Captain's serviceable market is the subset of enterprise customers needing managed, high-accuracy retrieval APIs for unstructured data — likely a fraction of the overall RAG market, but no public SAM estimate exists for this specific segment.

**GTM / Distribution:** The company website directs enterprise prospects to runcaptain.com/sales and founders@runcaptain.com (runcaptain.com). The YC page notes the founders are "currently seeking introductions to CTOs and Heads of AI at mid-market/enterprise companies" and have "met with engineers at Snowflake and Databricks during development" (YC page). The self-serve pricing tiers with a free trial suggest a product-led growth motion for smaller customers alongside direct sales for enterprise. [Inferred]: The distribution path likely combines developer-first PLG (free trial, API docs, self-serve pricing) with YC-network-driven enterprise introductions.

## Defensibility

Captain's Map-Reduce parallel LLM architecture is a technical differentiator, though the underlying components (LLMs, embeddings, vector storage) are widely available. SOC 2 Type II certification represents a compliance moat that creates switching costs for enterprise customers. The proprietary "Odyssey" dataset (companies, people, deals, investors, funds, patents, credit analysis — per docs.runcaptain.com) could become a data asset differentiator if it compounds with usage. The managed-infrastructure approach creates switching costs once customers integrate the API and index their data.

**Market structure:** Open-source RAG frameworks (LangChain, LlamaIndex) compete on flexibility but not on managed accuracy guarantees. Large incumbents like Snowflake and Databricks are building native RAG features, but their retrieval is a feature within a broader data platform — not a standalone accuracy-optimized engine. [Inferred]: Incumbents may face business model tension between selling compute/storage (where more tokens = more revenue) and optimizing for retrieval accuracy (where efficiency reduces compute consumption). However, no structural barrier prevents a well-resourced incumbent from replicating this approach.

**Commoditization risk:** The RAG infrastructure space is crowded and rapidly evolving. Vectara ($73.5M raised), Ragie ($5.5M raised), and Unstructured ($68M raised) all occupy adjacent territory. Open-source frameworks continue to improve. The core technical approach (parallel LLM processing with Map-Reduce) is conceptually replicable. The primary barriers to commoditization are execution speed, accuracy benchmarking, enterprise certifications, and customer lock-in via indexed data.

## Market & Traction

**Traction signals:**
- Garry Tan (YC President) public endorsement: "Captain is a step function increase vs existing RAG pipelines" (November 2025, runcaptain.com)
- Captain v2 API launched January 2026 (runcaptain.com)
- SOC 2 Type II certified (runcaptain.com)
- LinkedIn company page: linkedin.com/company/runcaptain (follower count not retrievable)
- Mentioned in Menlo Times "Y Combinator Launches of the Week" (menlotimes.com, content not accessible)
- Product Hunt product page exists (producthunt.com/products/captain) but details not accessible (403 error)
- No public user count, revenue, or customer logos found
- No Launch HN post found
- No Twitter/X company account found
- No Discord or Slack community found
- 0 open job postings (YC page)

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Captain |
|-----------|---------|-------------|-------------------------------|
| **Glean** | $765M total, $7.2B valuation (CNBC, June 2025) | ~$208M ARR (Sacra, 2025 via search snippet) | End-user enterprise search product (not developer API); broader scope including AI assistants and agents. Captain is infrastructure-first. |
| **Vectara** | ~$73.5M total (VentureBeat, July 2024 via search snippet) | Revenue unknown | Also managed RAG-as-a-service with hallucination detection (Mockingbird LLM); more established with larger team. Captain claims higher accuracy via Map-Reduce architecture. |
| **Unstructured.io** | ~$68M total, ~$230M valuation (BusinessWire, 2024 via search snippet) | Revenue unknown | Focuses on data preprocessing/ETL for LLMs rather than end-to-end retrieval; complementary rather than directly competitive. Captain offers full retrieval pipeline. |
| **Ragie** | $5.5M Seed (Silicon Valley Journals, Aug 2024 via search snippet) | Revenue unknown | Also RAG-as-a-Service for developers; similar positioning but less mature. Captain differentiates on accuracy claims and enterprise features (SOC 2, BYOC). |

**Why now:** [Inferred]: Several converging factors opened this opportunity: (1) Enterprise LLM adoption reached critical mass in 2024–2025, creating demand for reliable knowledge retrieval at scale; (2) Vision-language models (VLMs) matured enough to enable accurate extraction from complex documents (tables, images), making universal indexing feasible; (3) The limitations of first-generation RAG pipelines became well-documented, with widely cited accuracy problems creating demand for higher-quality alternatives; (4) LLM inference costs dropped substantially through 2024–2025, making the parallel multi-LLM Map-Reduce approach economically viable at a price point enterprises would accept.

## Founders & Team

**Lewis Polansky** — Co-founder & CEO
- Previously founded a startup that "solved hallucinations for code generation" (YC company page — startup name not disclosed)
- Prior work at organizations including Sony, IEEE, Reality Interactive, and Rocketbook (runcaptain.com team credits)
- Founded SoyBox, an alternative packaging startup that won a $10,000 competition prize (web search result via search snippet)
- Eagle Scout, Board of Review completed October 24, 2023 (web search result via search snippet)
- Described as focused on "organizational leadership, product development, and UI/UX design" (web search result via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/lewispolansky — "CEO/co-founder @ Captain (YC W26)"
- GitHub: github.com/LewisPolansky — notable repos: LCD-Custom-Character-Editor (Arduino tool), ChatGPT-Ctrl-Enter-to-Submit (browser extension); star counts low (< 5 each)

**Edgar Babajanyan** — Co-founder & CTO
- Education: Purdue University — Computing Infrastructure, Network Engineering, and Information Systems (LinkedIn). Also posted about "joining Yale University" (LinkedIn post, date unclear — possibly a research or visiting role)
- Built production RAG pipelines for 3 years (YC company page)
- Built an internal enterprise solution for Boar's Head (LinkedIn via search snippet)
- Head of Software Engineering and RISE Executive Board Member at Autonomous Robotics Club of Purdue (RocketReach via search snippet)
- Prior projects: Zenmigo (unified productivity platform), CodeSweep.ai (AI documentation tool), GPT4You (ChatGPT wrapper application) (LinkedIn, GitHub via search snippets)
- Published NLP/AI research (YC company page)
- Twitter/X: Possibly @babajanyanedgar (referenced on GitHub bio) — count not retrievable
- LinkedIn: linkedin.com/in/edgarbabajanyan — "Co-Founder and CTO of Captain"
- GitHub: github.com/EdgarBabajanyan — 12 public repos, 13 followers. Notable repos: EVH-EmergencyVehicularHelp (C++, speech recognition + LTE, 1 star), autonomous-drone-for-personal-and-campus-security (AI drone)

**Co-founder relationship:** Both founders are described as "lifelong builders obsessed with data" on the YC page. Edgar attended Purdue University; Lewis's educational institution is not confirmed publicly, though Purdue is listed among team background affiliations on the website. No confirmed shared employer or university overlap found from available data.

**Founder-market fit:** Edgar brings direct, hands-on experience building production RAG pipelines (3 years per YC page) and an enterprise data project for Boar's Head, giving him firsthand knowledge of the retrieval accuracy problem Captain targets. Lewis's prior startup reportedly addressed hallucinations in code generation (YC page), indicating prior experience with LLM accuracy challenges. The combination of Lewis's product/business orientation and Edgar's deep technical infrastructure background is aligned with building a developer-infrastructure product that requires both enterprise sales capability and retrieval-system engineering expertise.

## Key Risks

**Brand disambiguation challenge:** "Captain" is an extremely common English word. Multiple unrelated companies use this name (Captain Labs/Web3, Captain IT, Captain Up, gCaptain maritime, etc.), which complicates SEO, social media discoverability, and brand building. The domain runcaptain.com partially mitigates this, but search results consistently surface unrelated entities.

**Well-funded competitive convergence:** The RAG infrastructure space has attracted substantial capital — Vectara ($73.5M), Unstructured ($68M), Glean ($765M) — and is the focus of active feature development at platform incumbents (Snowflake, Databricks, AWS). Open-source frameworks (LangChain at $1.1B valuation per VentureBeat) are also improving retrieval quality. Captain's accuracy claims (78% → 95%) need independent verification and could be matched as the field advances.

**Accuracy claim verification:** The headline metric (78% → 95% accuracy improvement) lacks published methodology, benchmark details, or third-party validation in public sources. Enterprise buyers evaluating retrieval infrastructure will likely require reproducible benchmarks, and competitors may challenge unverified claims.

**Enterprise sales with a 2-person team:** Captain targets mid-market and enterprise buyers with SOC 2 compliance, custom SLAs, and on-premise deployment. Enterprise procurement cycles require sustained sales engineering, security reviews, and customer success resources that are difficult to deliver with two people. The $1,600/month Growth tier and custom Enterprise pricing suggest a sales-assisted motion that is resource-intensive.

**LLM cost and provider dependency:** The parallel multi-LLM Map-Reduce architecture inherently consumes more LLM inference per query than traditional single-pass retrieval. Margin sustainability depends on LLM inference cost trajectories and the ability to negotiate favorable API pricing. A sudden change in LLM provider pricing or terms could compress margins.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.85B (2025) → $9.86B by 2030, CAGR 38.4% (MarketsandMarkets via search snippet); $67B by 2034, CAGR 49% (Precedence Research via search snippet) |
| SAM | No public data found |
| Traction | Garry Tan endorsement (Nov 2025, runcaptain.com); Captain v2 API launch (Jan 2026, runcaptain.com); SOC 2 Type II certified (runcaptain.com); Menlo Times "YC Launches of the Week" mention (menlotimes.com). No public user/customer counts. |
| Revenue Signal | Pricing published: Starter $295/mo, Growth $1,600/mo, Enterprise custom (runcaptain.com/pricing). No public revenue figures. |
| Founders | Lewis Polansky (CEO): Prior startup solving code-gen hallucinations; experience at Sony, IEEE, Reality Interactive, Rocketbook. Edgar Babajanyan (CTO): Purdue CS/Infrastructure; 3 years production RAG experience; Boar's Head enterprise project; Autonomous Robotics Club lead. |
| Competitors | Glean ($765M raised, ~$208M ARR, enterprise search product — not developer API). Vectara ($73.5M raised, revenue unknown, managed RAG with Mockingbird LLM). Unstructured.io ($68M raised, revenue unknown, data preprocessing focus). Ragie ($5.5M raised, revenue unknown, RAG-as-a-Service). |
| Moat Signals | SOC 2 Type II certification; proprietary Odyssey dataset; managed infrastructure creates data lock-in; Map-Reduce parallel LLM architecture (technical, not patented as far as public data shows) |
| Risk Factors | Brand disambiguation ("Captain" is common), well-funded competitive convergence, unverified accuracy claims, enterprise sales capacity with 2-person team |
| Founder Reach | Lewis Polansky: Twitter not found, LinkedIn linkedin.com/in/lewispolansky, GitHub ~minimal stars. Edgar Babajanyan: Twitter possibly @babajanyanedgar (count not retrievable), LinkedIn linkedin.com/in/edgarbabajanyan, GitHub 13 followers/12 repos. |
| Distribution Signals | Product Hunt page exists (details inaccessible); Menlo Times YC launch mention; LinkedIn company page (follower count not retrievable); no Launch HN, no Twitter/X company account, no community found |
| Emails | founders@runcaptain.com (YC page), support@runcaptain.com (runcaptain.com) |
