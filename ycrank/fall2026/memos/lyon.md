# Lyon

> Foundation models on enterprise transaction data.

| Field | Value |
|-------|-------|
| Website | https://lyon.so |
| YC Page | https://www.ycombinator.com/companies/lyon |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/lyon)) |
| Industry | B2B / B2B -> Analytics |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Machine Learning, Finance, Data Science, Big Data |
| YC Partner | Gustaf Alstromer ([YC](https://www.ycombinator.com/companies/lyon)) |
| Emails | founders@lyon.so ([Lyon](https://lyon.so)); markus@lyon.so ([Höhn](https://markushoehn.com/)); founder profile contacts: gkn@cs.stanford.edu ([Noya](https://www.gabrielnoya.com/)), hoehn@stanford.edu ([Höhn’s GitHub](https://github.com/MarkOfUs)) |

## The Idea

- **Problem:** Banks, insurers, and fintechs use rules and task-specific feature engineering for customer predictions, which Lyon describes as requiring months of work per application ([Lyon](https://lyon.so), accessed Oct 2026).
- **Approach:** Lyon trains a customer-specific foundation model on events and profiles, produces customer embeddings, and supports downstream LoRA adapters while training and inference remain inside the customer’s VPC ([Lyon](https://lyon.so)).
- **Differentiation:** Lyon trains from scratch on customer events, whereas Fundamental starts with pretrained tabular intelligence and Taktile provides decision orchestration ([Lyon](https://lyon.so), [Fundamental](https://fundamental.tech/), [Taktile](https://taktile.com/blog/taktile-s-next-chapter-we-raised-110m-to-power-the-agentic-financial-institutions-of-the-future)).
- **Business Model:** [Inferred]: Individually negotiated enterprise contracts are the likely monetization path because platform access requires separate customer agreements; public pricing: No public data found ([Lyon terms, Aug 2026](https://lyon.so/terms.html)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** The website routes prospects to a scheduling page and founder email, supporting a direct enterprise inquiry channel ([Lyon](https://lyon.so)).

## Defensibility

- **Moat today:** Lyon reports training on proprietary customer transactions and deploying customer-owned models inside customer clouds; these establish customer-specific implementation assets, without demonstrating exclusive data rights ([Lyon](https://lyon.so), [YC](https://www.ycombinator.com/companies/lyon)).
- **Future moat:** [Inferred]: Embeddings reused across operational workflows could create switching costs, but public sources do not establish retention or migration difficulty ([Lyon](https://lyon.so)).
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given SAP’s completed acquisition of tabular-model developer Prior Labs ([SAP, Jul 2026](https://news.sap.com/2026/07/sap-completes-prior-labs-acquisition/)).
- **Commoditization risk:** Prior Labs offers pretrained tabular models through self-hosting or APIs, providing an alternative to commissioning a customer-specific model, although equivalent event-model performance is not established ([Balderton, Feb 2025](https://www.balderton.com/news/prior-labs-raises-e9m-to-revolutionise-how-businesses-interact-with-their-tabular-data/)).

## Market & Traction

- **Traction signals:**
  - Company-reported model trained on **28 billion transactions** for an unnamed fintech serving tens of millions of active users ([YC, accessed Oct 27, 2026](https://www.ycombinator.com/companies/lyon)).
  - Company-reported customer outcome: **4× greater precision** identifying premium-card converters versus existing rules, with deployment for credit underway ([YC, accessed Oct 27, 2026](https://www.ycombinator.com/companies/lyon)).
  - Company-reported engagement with an unnamed major insurer ([YC, accessed Oct 27, 2026](https://www.ycombinator.com/companies/lyon)).
  - Company LinkedIn: **56 followers** ([LinkedIn, accessed Oct 27, 2026](https://www.linkedin.com/company/lyon-ai/)).
  - **Zero advertised YC jobs** ([YC Jobs, accessed Oct 27, 2026](https://www.ycombinator.com/companies/lyon/jobs)).
- **Competitors:**
  - **Fundamental ($255M raised, revenue unknown):** NEXUS uses pretrained tabular intelligence rather than Lyon’s customer-specific event pretraining; financing comprised a $30M seed and $225M Series A led by Oak HC/FT, announced February 2026 ([Headline](https://blog.headline.com/p/backing-fundamental-bringing-tabular), [Fundamental](https://fundamental.tech/)).
  - **Prior Labs (€9M disclosed pre-seed, ARR unknown):** TabPFN supports pretrained table prediction and self-hosting; Balderton led its February 2025 financing, SAP completed its acquisition in July 2026, and SAP reported less than €1M of acquired-business revenue contribution in Q3 2026 ([Balderton](https://www.balderton.com/news/prior-labs-raises-e9m-to-revolutionise-how-businesses-interact-with-their-tabular-data/), [SAP acquisition](https://news.sap.com/2026/07/sap-completes-prior-labs-acquisition/), [SAP Q3 statement](https://www.sap.com/docs/download/investors/2026/sap-2026-q3-statement.pdf)).
  - **Taktile (at least $189M across disclosed financings, revenue unknown):** An adjacent decision-platform alternative coordinating financial workflows rather than supplying Lyon’s event foundation model; its $79M disclosed cumulative funding preceded a $110M Series C led by Goldman Sachs Alternatives in June 2026 ([Taktile, Feb 2025](https://taktile.com/articles/taktile-raises-54m-series-b), [Taktile, Jun 2026](https://taktile.com/blog/taktile-s-next-chapter-we-raised-110m-to-power-the-agentic-financial-institutions-of-the-future)).
- **Why now:** Oak HC/FT stated in February 2026 that tabular models had reached a threshold combining research maturity, technical capability, data availability, and enterprise readiness ([Oak HC/FT](https://www.oakhcft.com/blog-post/unlocking-the-power-to-predict-why-were-backing-fundamental-to-lead-the-large-tabular-model-revolution)).

## Founders & Team

- **Gabriel Noya (Founder/CEO):**
  - Background: Stanford electrical engineering and computer science, class of 2026; YC lists previous affiliations with NVIDIA, BTG Pactual, Road2, Bux Bank, and Stone; prior exits: No public data found ([YC founder profile](https://www.ycombinator.com/founders/gabriel-noya)).
  - Twitter/X: @gabrielnoya7; count not retrievable ([YC-linked account](https://www.ycombinator.com/founders/gabriel-noya)).
  - LinkedIn: Profile found; headline not retrievable; indexed profile displays **1K followers** ([LinkedIn, via search snippet, retrieved Oct 2026](https://www.linkedin.com/in/gabriel-noya)).
  - GitHub: @kaloca; pinned `liquid_treehacks_challenge` records a TreeHacks 2025 Edge AI track win and **0 stars** ([GitHub, Oct 2026](https://github.com/kaloca/liquid_treehacks_challenge)).
- **Markus Höhn (Co-founder, self-described):**
  - Background: Studies mathematics, statistics, and machine learning at Stanford; completed mathematics degree coursework at Kansas State before Stanford without receiving that degree; prior employers/exits: No public data found ([personal site](https://markushoehn.com/), [coursework record](https://markushoehn.com/coursework/)).
  - Twitter/X: No public account found.
  - LinkedIn: Profile found; headline not retrievable; indexed profile displays **418 followers** ([LinkedIn, via search snippet, retrieved Oct 2026](https://www.linkedin.com/in/markus-hoehn)).
  - GitHub: @MarkOfUs; `Deaflingo`, a separate sign-language project, has **152 stars**, which are not Lyon product traction ([GitHub, Oct 2026](https://github.com/MarkOfUs/Deaflingo)).
- **Co-founder relationship:** Both identify Stanford affiliations; No public data on co-founder history ([Noya’s YC profile](https://www.ycombinator.com/founders/gabriel-noya), [Höhn’s site](https://markushoehn.com/)).
- **Founder-market fit:** [Inferred]: Noya’s finance and NVIDIA affiliations and Höhn’s mathematics/ML studies align with financial prediction infrastructure; YC participation is confirmed, while other investors or advisors were not independently verified ([YC](https://www.ycombinator.com/founders/gabriel-noya), [Höhn](https://markushoehn.com/)).

## Key Risks

- **Technical generalization:** [Inferred]: Conversion-prediction results do not establish credit or fraud performance; the published claim compares against rules without disclosing test methodology or customer identity ([YC](https://www.ycombinator.com/companies/lyon)).
- **Security procurement:** [Inferred]: Buyers requiring completed SOC 2 Type 2 assurance may delay procurement; Lyon’s trust center labels Type 2 “In progress” and Type 1 “Compliant” ([Trust Center, Oct 2026](https://trust.lyon.so/)).
- **Incumbent substitution:** [Inferred]: SAP’s acquisition of Prior Labs provides an existing enterprise vendor with overlapping prediction technology and distribution access ([SAP, Jul 2026](https://news.sap.com/2026/07/sap-completes-prior-labs-acquisition/)).
- **Identity and record ambiguity:** Founder-name searches return unrelated people, and YC lists only Noya while Höhn identifies himself as co-founder, requiring domain-linked attribution ([LinkedIn directory](https://www.linkedin.com/pub/dir/Gabriel/Noya), [YC](https://www.ycombinator.com/companies/lyon), [Höhn](https://markushoehn.com/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Company-reported 28B training transactions, 4× converter precision versus rules, insurer engagement ([YC, Oct 2026](https://www.ycombinator.com/companies/lyon)) |
| Revenue Signal | No public data found |
| Founders | Gabriel Noya, CEO: Stanford EE/CS, NVIDIA and finance affiliations ([YC](https://www.ycombinator.com/founders/gabriel-noya)); Markus Höhn, self-described co-founder: Stanford mathematics/statistics/ML ([personal site](https://markushoehn.com/)) |
| Competitors | Fundamental ($255M raised, revenue unknown, pretrained tabular model) ([Headline, Feb 2026](https://blog.headline.com/p/backing-fundamental-bringing-tabular)); Prior Labs (€9M disclosed financing, ARR unknown, TabPFN/self-hosting) ([Balderton, Feb 2025](https://www.balderton.com/news/prior-labs-raises-e9m-to-revolutionise-how-businesses-interact-with-their-tabular-data/)); Taktile ($79M disclosed before subsequent $110M Series C, revenue unknown, decision orchestration) ([2025 announcement](https://taktile.com/articles/taktile-raises-54m-series-b), [2026 announcement](https://taktile.com/blog/taktile-s-next-chapter-we-raised-110m-to-power-the-agentic-financial-institutions-of-the-future)) |
| Moat Signals | Customer-specific models and customer-cloud deployment ([Lyon, Oct 2026](https://lyon.so)) |
| Risk Factors | Undisclosed benchmark methodology ([YC](https://www.ycombinator.com/companies/lyon)); Type 2 assurance in progress ([Trust Center](https://trust.lyon.so/)); SAP-owned competitor ([SAP](https://news.sap.com/2026/07/sap-completes-prior-labs-acquisition/)) |
| Founder Reach | Noya: LinkedIn 1K ([via search snippet](https://www.linkedin.com/in/gabriel-noya)); Höhn: LinkedIn 418 ([via search snippet](https://www.linkedin.com/in/markus-hoehn)), Deaflingo 152 stars ([GitHub](https://github.com/MarkOfUs/Deaflingo)); retrieved Oct 2026 |
| Distribution Signals | Company LinkedIn 56 followers ([LinkedIn, Oct 2026](https://www.linkedin.com/company/lyon-ai/)) |
| Emails | founders@lyon.so ([Lyon](https://lyon.so)); markus@lyon.so ([Höhn](https://markushoehn.com/)); gkn@cs.stanford.edu ([Noya](https://www.gabrielnoya.com/)); hoehn@stanford.edu ([Höhn’s GitHub](https://github.com/MarkOfUs)) |
