# Wondersearch

> Instant semantic search over your data without embeddings.

| Field | Value |
|-------|-------|
| Website | https://wondersearch.com |
| YC Page | https://www.ycombinator.com/companies/wondersearch |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/wondersearch)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Infrastructure, AI |
| YC Partner | Pete Koomen ([YC](https://www.ycombinator.com/companies/wondersearch)) |
| Emails | team@evokoa.com ([WonderSearch](https://wondersearch.ai/pricing/)) |

## The Idea

- **Problem:** Developers building document search and AI agents must prepare documents, generate embeddings, and maintain retrieval pipelines before serving queries ([WonderSearch comparison](https://wondersearch.ai/compare/dense-embeddings/)).
- **Approach:** WonderSearch uses its own search model and hosted sparse retrieval to return relevant passages with source references without corpus-wide pre-embedding, accessible through MCP, API, CLI, and SDK ([YC](https://www.ycombinator.com/companies/wondersearch), [WonderSearch](https://wondersearch.ai/)).
- **Differentiation:** WonderSearch avoids corpus pre-embedding, whereas Pinecone provides managed embedding generation and Weaviate combines vector retrieval with keyword search ([WonderSearch](https://wondersearch.ai/compare/dense-embeddings/), [Pinecone documentation](https://docs.pinecone.io/guides/search/integrated-embedding), [Weaviate documentation](https://docs.weaviate.io/weaviate/search/hybrid)).
- **Business Model:** Consumption pricing separates search compute from storage, with the visible calculator displaying $0.001/query and $0.33/GB/month, effort options, and custom enterprise deployments ([WonderSearch pricing, accessed Oct 27, 2026](https://wondersearch.ai/pricing/)).
- **TAM/SAM:** Broader market context is search and knowledge discovery, exceeding $6B in 2024 with forecast 31.2% CAGR through 2029; no public SAM estimate for WonderSearch’s specific segment was found ([IDC, Nov 2025](https://www.elastic.co/pdf/idc-marketscape-worldwide-general-purpose-knowledge-discovery-software-2025.pdf)).
- **GTM / Distribution:** The website offers self-service signup and enterprise calls, while founders promote launches through social media ([WonderSearch](https://wondersearch.ai/), [EO interview, Oct 19, 2026](https://www.eomag.io/article/wondersearch-dalton-dale)).

## Defensibility

- **Moat today:** Technical evidence includes company-run retrieval benchmarks, with production Large scoring 80.06 nDCG@10 on SciFact; independent replication was not found ([WonderSearch benchmarks, Oct 4, 2026](https://wondersearch.ai/benchmarks/)).
- **Future moat:** [Inferred]: Customer integrations and relevance feedback could create switching costs, but public retention and feedback-training evidence is unavailable.
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given existing managed semantic retrieval and automated embedding services ([Pinecone documentation](https://docs.pinecone.io/guides/search/integrated-embedding)).
- **Commoditization risk:** [Inferred]: Qdrant’s existing dense, sparse, filtering, and custom-scoring primitives provide components for competing retrieval services, although reproducing WonderSearch’s exact model is not demonstrated ([Qdrant, Mar 12, 2026](https://qdrant.tech/blog/series-b-announcement/)).

## Market & Traction

- **Traction signals:**
  - WonderSearch launch dated September 28, 2026, with 128,943 X views measured October 12, 2026 ([Doomers launch tracker](https://doomers.ai/launches/wondersearch)).
  - Company LinkedIn: 211 followers ([LinkedIn, accessed Oct 27, 2026](https://sg.linkedin.com/company/wondersearch)).
  - Company X account @wondersearchai: approximately 1.3K followers ([Teapawt mirror, accessed Oct 27, 2026](https://teapawt.org/wondersearchai)).
  - Founder interview published in EO Magazine ([EO, Oct 19, 2026](https://www.eomag.io/article/wondersearch-dalton-dale)).
  - Parent-company/prior-product signal: Evokoa’s PostgreSQL extension pgGraph has 1,074 GitHub stars, separate from WonderSearch adoption ([GitHub, accessed Oct 27, 2026](https://github.com/Evokoa)).
  - Prior-product signal: Polygres secured an enterprise POC following a pivot from an AI-native operating system; WonderSearch subsequently launched as a second product during YC ([EO, Oct 19, 2026](https://www.eomag.io/article/wondersearch-dalton-dale)).
  - Zero active YC job postings ([YC Jobs, accessed Oct 27, 2026](https://www.ycombinator.com/companies/wondersearch/jobs)).
- **Competitors:**
  - **Pinecone ($138M raised; revenue unknown):** Managed vector search with integrated embeddings rather than WonderSearch’s no-pre-embedding approach; latest disclosed round was $100M Series B, April 2023, led by Andreessen Horowitz ([funding summary](https://api.bixel.com/pinecone.io/funding/), [Pinecone announcement](https://www.pinecone.io/blog/series-b/), [documentation](https://docs.pinecone.io/guides/search/integrated-embedding)).
  - **Weaviate ($67.6M reported raised, plus undisclosed strategic investment; revenue unknown):** Open-source vector and keyword retrieval; $50M Series B in April 2023 led by Index Ventures, followed by Ricoh’s undisclosed investment in March 2026 ([CB Insights](https://www.cbinsights.com/company/semi-technologies/financials), [Weaviate release](https://www.prnewswire.com/news-releases/weaviate-raises-50-million-series-b-funding-to-meet-soaring-demand-for-ai-native-vector-database-technology-301803296.html), [Ricoh](https://www.ricoh.com/release/2026/0616_1), [documentation](https://docs.weaviate.io/weaviate/search/hybrid)).
  - **Qdrant ($87.8M raised; revenue unknown):** Offers configurable dense/sparse vector retrieval and deployment control; latest round was $50M Series B, March 2026, led by AVP ([TechTarget, Mar 12, 2026](https://www.techtarget.com/data-technologies/news/366640132/Qdrant-raises-50M-in-funding-to-fuel-vector-database-growth), [Qdrant](https://qdrant.tech/blog/series-b-announcement/)).
- **Why now:** [Inferred]: Agents’ repeated, adaptive retrieval creates demand for search integrated into execution workflows, a shift described by Qdrant in March 2026 ([Qdrant](https://qdrant.tech/blog/series-b-announcement/)).

## Founders & Team

- **Dale Ng (Founder/CEO; Dale Everett Ng on company profiles):**
  - Background: Singapore Polytechnic alumnus and Toh Chin Chye/IMDA Gold Medallist; previously led Bholdus community and grew **prior business Swig Energy** to 5,000 customers ([YC founder profile](https://www.ycombinator.com/founders/dale-ng), [WonderSearch team](https://wondersearch.ai/team/)).
  - Twitter/X: @daleverett, approximately 4.4K followers ([Teapawt mirror, Oct 27, 2026](https://teapawt.org/daleverett)).
  - LinkedIn: Profile found; headline not retrievable, with 2K followers displayed ([LinkedIn via search snippet, Oct 2026](https://sg.linkedin.com/in/dale-everett)).
  - GitHub: No public repos found.
- **Dalton Prescott (Founder/CTO; Dalton Prescott Ng on company profiles):**
  - Background: Singapore Polytechnic alumnus, former DSO researcher, Apple scholarship recipient in 2018 and 2019, and former BitCyber Head of Product & Pre-Sales managing 250+ APAC B2B partners ([YC founder profile](https://www.ycombinator.com/founders/dalton-prescott), [WonderSearch team](https://wondersearch.ai/team/)).
  - Twitter/X: @daltonmeon, 859 followers ([Teapawt mirror, Oct 27, 2026](https://teapawt.org/daltonmeon)).
  - LinkedIn: Profile found; headline not retrievable, with 1K followers displayed ([LinkedIn via search snippet, Oct 2026](https://sg.linkedin.com/in/dalton-prescott-ng)).
  - GitHub: No public repos found.
- **Co-founder relationship:** The founders are twins who previously built Master and Polygres together ([EO, Oct 19, 2026](https://www.eomag.io/article/wondersearch-dalton-dale)).
- **Founder-market fit:** Documented experience combines growth/community work, research, technical presales, and PostgreSQL retrieval development; Evokoa identifies YC and Founders, Inc. as backers ([team](https://wondersearch.ai/team/), [Evokoa](https://evokoa.com/)).

## Key Risks

- **Technical performance verification:** [Inferred]: Internal relevance benchmarks do not establish production latency or concurrent-load performance across customer corpora; the published methodology discloses H100 testing and distinguishes unavailable Ultra research results ([WonderSearch benchmarks](https://wondersearch.ai/benchmarks/)).
- **Enterprise procurement:** [Inferred]: Buyers requiring completed assurance reports may defer adoption because SOC 2 Type 1 and Type 2 are listed as in progress, although the company publishes a trust center and security policies ([Evokoa Trust Center, Oct 27, 2026](https://trust.evokoa.com/)).
- **Substitution:** [Inferred]: Pinecone’s automated embedding generation reduces developers’ pipeline work, narrowing the setup advantage WonderSearch markets ([Pinecone documentation](https://docs.pinecone.io/guides/search/integrated-embedding), [WonderSearch comparison](https://wondersearch.ai/compare/dense-embeddings/)).
- **Name attribution:** Search results include a same-name web-search site whose affiliation with Evokoa is unverified; its metrics are excluded ([Wonder Search](https://wondersearch.io/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader search/knowledge-discovery market: >$6B in 2024; 31.2% forecast CAGR through 2029 ([IDC, 2025](https://www.elastic.co/pdf/idc-marketscape-worldwide-general-purpose-knowledge-discovery-software-2025.pdf)) |
| SAM | No public data found |
| Traction | 128,943 launch-post views, measured Oct 12, 2026 ([Doomers](https://doomers.ai/launches/wondersearch)); 211 LinkedIn followers, Oct 27, 2026 ([LinkedIn](https://sg.linkedin.com/company/wondersearch)) |
| Revenue Signal | Displayed calculator: $0.001/query plus $0.33/GB/month storage ([WonderSearch pricing, Oct 2026](https://wondersearch.ai/pricing/)) |
| Founders | Dale Ng, CEO: Swig Energy growth, Bholdus; Dalton Prescott, CTO: DSO research, Apple scholarships, technical presales ([WonderSearch team](https://wondersearch.ai/team/)) |
| Competitors | Pinecone ($138M raised, revenue unknown, integrated embeddings; [Bixel](https://api.bixel.com/pinecone.io/funding/), [Pinecone docs](https://docs.pinecone.io/guides/search/integrated-embedding)); Weaviate ($67.6M reported, revenue unknown, hybrid retrieval; [CB Insights](https://www.cbinsights.com/company/semi-technologies/financials), [docs](https://docs.weaviate.io/weaviate/search/hybrid)); Qdrant ($87.8M, revenue unknown, configurable vectors; [TechTarget](https://www.techtarget.com/data-technologies/news/366640132/Qdrant-raises-50M-in-funding-to-fuel-vector-database-growth), [Qdrant](https://qdrant.tech/blog/series-b-announcement/)) |
| Moat Signals | Own search model; internal retrieval benchmarks ([YC](https://www.ycombinator.com/companies/wondersearch), [WonderSearch benchmarks](https://wondersearch.ai/benchmarks/)) |
| Risk Factors | Internal-only performance evidence ([benchmarks](https://wondersearch.ai/benchmarks/)); SOC 2 audits in progress ([Trust Center](https://trust.evokoa.com/)) |
| Founder Reach | Dale: X 4.4K; Dalton: X 859 ([Teapawt, Oct 2026](https://teapawt.org/daleverett), [Teapawt, Oct 2026](https://teapawt.org/daltonmeon)) |
| Distribution Signals | Company X 1.3K followers ([Teapawt, Oct 2026](https://teapawt.org/wondersearchai)); parent/prior-product pgGraph 1,074 stars ([GitHub, Oct 2026](https://github.com/Evokoa)) |
| Emails | team@evokoa.com ([WonderSearch pricing](https://wondersearch.ai/pricing/)) |
