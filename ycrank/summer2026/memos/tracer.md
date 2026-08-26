# Tracer

> Combining open-source AI models for better answers at lower cost

| Field | Value |
|-------|-------|
| Website | https://tracerml.ai |
| YC Page | https://www.ycombinator.com/companies/tracer |
| Batch | Summer 2026 |
| Industry | B2B / B2B |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Machine Learning, Open Source, AI |
| YC Partner | Diana Hu |
| Emails | adamrida.ra@gmail.com |

## The Idea

- **Problem:** AI teams with production inference workloads must balance answer quality against token cost across models with different capabilities and prices, currently requiring manual model selection or routing infrastructure ([YC launch](https://www.ycombinator.com/companies/tracer), Aug 2026).
- **Approach:** Echo adaptively determines how much computation a request needs, coordinates multiple open-weight models, and combines their outputs behind one OpenAI-compatible endpoint ([YC launch](https://www.ycombinator.com/companies/tracer), Aug 2026).
- **Differentiation:** Not Diamond predicts one model for each query and Martian dynamically selects among models, whereas Echo may allocate multiple models and combine their answers ([Not Diamond documentation](https://docs.notdiamond.ai/docs/key-concepts), Jul 2026; [Martian RouterBench](https://withmartian.com/post/introducing-routerbench), Mar 2024; [YC launch](https://www.ycombinator.com/companies/tracer), Aug 2026).
- **Business Model:** Echo charges actual serving cost plus a fixed 25% margin, capped at $10 input and $50 output per million tokens, with observed rates spanning approximately $0.15–$1.25 input and $0.75–$12 output per million tokens ([Echo API pricing](https://echo.tracerml.ai/docs/api), Jul 2026).
- **TAM/SAM:** The broader global AI-inference market was valued at $103.73 billion in 2025 and is projected to reach $312.64 billion by 2034 at a 12.98% CAGR, but no public SAM estimate was found for model coordination specifically ([Fortune Business Insights](https://www.fortunebusinessinsights.com/ai-inference-market-113705), Jul 2026).
- **GTM / Distribution:** Tracer solicits teams with production inference workloads for a 30-minute inference review, workload benchmarking, and private workload-specific configuration, while offering public chat and API access ([Tracer website](https://tracerml.ai/), Aug 2026; [YC launch](https://www.ycombinator.com/companies/tracer), Aug 2026).

## Defensibility

- **Moat today:** The prior open-source TRACER project has 1,000 GitHub stars and 70 forks, and its parity-gated routing method is documented in an arXiv paper ([GitHub](https://github.com/adrida/tracer), Aug 2026; [arXiv](https://arxiv.org/abs/2604.14531), Apr 2026).
- **Future moat:** [Inferred]: Opt-in learning from customers’ workload distributions could produce workload-specific routing data and switching costs, but no current-product customer count or retained proprietary dataset is public.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Martian, Not Diamond, and OpenRouter already provide model routing, while OpenRouter also offers model fusion and quality-aware routing across more than 400 models ([Martian](https://withmartian.com/post/introducing-routerbench), Mar 2024; [Not Diamond](https://docs.notdiamond.ai/docs/key-concepts), Jul 2026; [OpenRouter](https://openrouter.ai/blog/announcements/series-b/), May 2026).

## Market & Traction

- **Traction signals:**
  - Prior TRACER open-source project: 1,000 GitHub stars and 70 forks ([GitHub](https://github.com/adrida/tracer), Aug 2026).
  - Current Echo product: five free guest messages without an account and private-alpha account access ([Echo](https://echo.tracerml.ai/), Aug 2026).
  - Current Echo product: zero jobs posted on YC ([Y Combinator](https://www.ycombinator.com/companies/tracer), Aug 2026).
- **Competitors:**
  - OpenRouter ($153 million raised, approximately $50 million estimated annualized revenue): gateway, routing, failover, and fusion across more than 400 models versus Echo’s single public model ID backed by coordinated open-weight models ([OpenRouter](https://openrouter.ai/blog/announcements/series-b/), May 2026; [Sacra](https://sacra.com/c/openrouter/), Mar 2026).
  - Martian ($9 million raised, revenue unknown): predictive routing and unified access to more than 200 provider models versus Echo’s adaptive compute allocation and answer combination ([Martian funding announcement](https://www.linkedin.com/posts/withmartian_were-excited-to-announce-our-9m-seed-round-activity-7142611483007365122-QFFG); [Martian documentation](https://docs.withmartian.com/)).
  - Not Diamond ($2.3 million raised, revenue unknown): query-level model selection using quality, cost, or latency objectives versus Echo’s coordinated multi-model execution ([Not Diamond launch](https://www.notdiamond.ai/blog/launching-not-diamond); [Not Diamond documentation](https://docs.notdiamond.ai/docs/key-concepts)).
- **Why now:** [Inferred]: The catalyst is the proliferation of differently priced open-weight models and rising agent inference consumption, which increases the number of model-selection and compute-allocation decisions per workload ([YC launch](https://www.ycombinator.com/companies/tracer), Aug 2026; [Tracer website](https://tracerml.ai/), Aug 2026).

## Founders & Team

- **Adam Rida (Founder):**
  - Background: Rida holds a master’s in applied mathematics from CY Tech, completed École 42, researched explainable AI as a Sorbonne/AXA PhD candidate, worked at Société Générale, AXA, Qantev, Rebellion Research, and Autoplay AI, and previously grew DeepRecall to approximately €100,000 ARR in under three months ([founder profile](https://adrida.github.io/); [YC launch](https://www.ycombinator.com/companies/tracer), Aug 2026).
  - Twitter/X: No public account found.
  - LinkedIn: “Tracer (YC S26),” with 3,094 followers ([LinkedIn](https://www.linkedin.com/in/adam-rida-581296142), Jul 2026).
  - GitHub: @adrida; `tracer` has 1,000 stars ([GitHub](https://github.com/adrida/tracer), Aug 2026).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** [Inferred]: Rida’s explainable-AI research, applied inference work, TRACER paper, and experience operating DeepRecall provide documented preparation for model routing and inference optimization ([founder profile](https://adrida.github.io/); [arXiv](https://arxiv.org/abs/2604.14531), Apr 2026).

## Key Risks

- **Benchmark coverage:** Echo reports 98.6% on MATH-500 at $4.58 and 92.8% on LiveCodeBench at $5.35, while multilingual, broader-knowledge, repository-level coding, and agentic evaluations remain areas of ongoing work ([YC launch](https://www.ycombinator.com/companies/tracer), Aug 2026).
- **Customer-data dependency:** Workload-specific learning requires explicit configuration with participating teams’ traces, while public Echo does not train on private traces; [Inferred]: the opt-in design mitigates unauthorized data use but adds an adoption step ([YC launch](https://www.ycombinator.com/companies/tracer), Aug 2026).
- **Competitive overlap:** OpenRouter offers routing and fusion, while Martian and Not Diamond offer predictive model selection, creating overlapping substitutes for teams managing multiple models ([OpenRouter](https://openrouter.ai/blog/announcements/series-b/), May 2026; [Martian](https://withmartian.com/post/introducing-routerbench), Mar 2024; [Not Diamond](https://docs.notdiamond.ai/docs/key-concepts)).
- **Product-evidence separation:** The 1,000-star repository and 83–100% surrogate-coverage paper concern the prior TRACER classification router, while Echo is the current coordinated-model product ([Tracer research lineage](https://tracerml.ai/), Aug 2026; [arXiv](https://arxiv.org/abs/2604.14531), Apr 2026).
- **Name ambiguity:** Unrelated companies use “Tracer” for brand protection, analytics, and AI-SRE software, requiring domain and YC-batch verification when assessing search results ([Tracer AI LinkedIn](https://www.linkedin.com/company/tracerai); [Tracer Tech LinkedIn](https://www.linkedin.com/company/tracertech); [Tracer Cloud LinkedIn](https://www.linkedin.com/company/tracercloud)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $103.73B global AI-inference market in 2025, projected to $312.64B by 2034 at 12.98% CAGR (Fortune Business Insights, Jul 2026) |
| SAM | No public data found |
| Traction | Prior TRACER project: 1,000 GitHub stars and 70 forks (GitHub, Aug 2026); current Echo: five free guest messages and private-alpha access (Echo, Aug 2026) |
| Revenue Signal | Actual serving cost plus 25%, capped at $10 input/$50 output per million tokens; observed rates approximately $0.15–$1.25 input and $0.75–$12 output per million tokens (Echo API pricing, Jul 2026) |
| Founders | Adam Rida (Founder): CY Tech applied-mathematics master’s, former Sorbonne/AXA explainable-AI PhD candidate, prior DeepRecall founder (founder profile; YC, Aug 2026) |
| Competitors | OpenRouter ($153M raised, approximately $50M estimated annualized revenue, 400+ model gateway/routing/fusion) (OpenRouter, May 2026; Sacra, Mar 2026); Martian ($9M raised, revenue unknown, predictive router and 200+ model gateway) (Martian); Not Diamond ($2.3M raised, revenue unknown, query-level model selection) (Not Diamond) |
| Moat Signals | Prior TRACER project has 1,000 GitHub stars and 70 forks; parity-gated routing method documented in arXiv:2604.14531 (GitHub, Aug 2026; arXiv, Apr 2026) |
| Risk Factors | Incomplete evaluation coverage (YC, Aug 2026), direct routing/fusion competitors (OpenRouter, Martian, Not Diamond), prior-project metrics differ from current Echo product (Tracer website, Aug 2026) |
| Founder Reach | Adam Rida: Twitter no public account found, LinkedIn 3,094 followers, GitHub top repository 1,000 stars (LinkedIn, Jul 2026; GitHub, Aug 2026) |
| Distribution Signals | Prior TRACER repository: 1,000 GitHub stars and 70 forks (GitHub, Aug 2026); Echo: five free guest messages without registration (Echo, Aug 2026) |
| Emails | adamrida.ra@gmail.com (founder profile) |
