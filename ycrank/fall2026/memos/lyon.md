# Lyon

> Foundation models on enterprise event data.

| Field | Value |
|-------|-------|
| Website | https://lyon.so |
| YC Page | https://www.ycombinator.com/companies/lyon |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/lyon)) |
| Industry | B2B / B2B -> Analytics |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Machine Learning, Finance, Data Science, Big Data |
| YC Partner | Gustaf Alstromer ([Y Combinator](https://www.ycombinator.com/companies/lyon)) |
| Emails | markus@lyon.so (Markus Höhn, [founder site](https://markushoehn.com/)), founders@lyon.so (shared inbox and policy contact, [Lyon Privacy Policy](https://lyon.so/privacy.html)) |

## The Idea

- **Problem:** Banks and fintechs use rules and tree-based models built on hand-engineered features, which take time to maintain and can miss relationships across sequences of customer transactions ([YC company profile](https://www.ycombinator.com/companies/lyon), [NVIDIA Technical Blog, Jun 2026](https://developer.nvidia.com/blog/build-your-own-transaction-foundation-model-for-financial-intelligence/)).
- **Approach:** Lyon trains a transformer from scratch on each institution’s event history inside its cloud, then uses the resulting customer embeddings and task-specific adapters for predictions such as default, fraud, and cross-sell ([Lyon](https://lyon.so/), [YC company profile](https://www.ycombinator.com/companies/lyon)).
- **Differentiation:** Lyon trains a customer-owned model inside each institution’s cloud, while Plaid incorporates its own sequence model into network products, Fundamental offers the general-purpose NEXUS model, Prior Labs offers pretrained TabPFN, and Taktile orchestrates decisions using models, rules, and human review ([Lyon](https://lyon.so/), [Plaid](https://plaid.com/blog/sequential-foundation-model/), [AWS](https://press.aboutamazon.com/aws/2026/2/fundamental-announces-255m-in-funding-and-publicly-launches-its-most-powerful-large-tabular-model-ltm), [Prior Labs](https://priorlabs.ai/tabpfn), [Taktile](https://taktile.com/newsroom/taktile-secures-110m-in-goldman-sachs-led-series-c-to-power-ai-transformation-in-financial-institutions)).
- **Business Model:** [Inferred]: Lyon could charge institutions for model deployment and ongoing maintenance, given its customer-specific deployments and separate written platform agreements ([YC company profile](https://www.ycombinator.com/companies/lyon), [Lyon Terms of Service](https://lyon.so/terms.html)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Lyon offers a website booking link for introductory calls and a trust center with a security questionnaire for procurement teams ([Lyon](https://lyon.so/), [Lyon Trust Center](https://trust.lyon.so/)).

## Defensibility

- **Moat today:** Lyon reports training on tens of billions of transactions for a fintech and supports training and inference inside customer virtual private clouds on AWS, Google Cloud, or Azure ([YC company profile](https://www.ycombinator.com/companies/lyon), [Lyon](https://lyon.so/)).
- **Future moat:** [Inferred]: Integrations could raise switching costs as customers reuse Lyon embeddings across workflows, but customers own the models and no public retention data was found ([Lyon](https://lyon.so/)).
- **Market structure:** No structural barrier identified at this stage ([Plaid sequence model](https://plaid.com/blog/sequential-foundation-model/), [NVIDIA developer reference](https://developer.nvidia.com/blog/build-your-own-transaction-foundation-model-for-financial-intelligence/)).
- **Commoditization risk:** Banks with machine-learning teams can adapt NVIDIA’s public training reference to their own transaction schemas and downstream tasks ([NVIDIA Technical Blog, Jun 2026](https://developer.nvidia.com/blog/build-your-own-transaction-foundation-model-for-financial-intelligence/)).

## Market & Traction

- **Traction signals:**
  - Company-reported fintech benchmark of **112% relative improvement in default-prediction PR-AUC** over the fintech’s existing tree-based model, using tens of billions of transactions from a fintech serving tens of millions of users ([YC company profile, Nov 2026](https://www.ycombinator.com/companies/lyon)).
  - Earlier company description reported **4× precision** for identifying premium-card converters versus existing rules after training on **28 billion transactions**, and reported work with an unnamed insurer ([earlier YC copy reproduced by MentionFox, Aug 2026](https://mentionfox.com/funding/yc-lyon)).
  - September 2026 launch date listed by [Dealroom](https://app.dealroom.co/companies/lyon_3).
  - Company spotlight in [The AI Read, Oct 2026](https://theairead.com/ventures).
  - 65 company LinkedIn followers ([LinkedIn, Nov 2026](https://www.linkedin.com/company/lyon-ai/)).
  - 0 open jobs on YC’s platform ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/lyon/jobs)).
- **Competitors:**
  - **Plaid** (~$1.31B disclosed primary funding, >$500M ARR at Q4 2025) uses its sequence model in network-based underwriting and fraud products. Its last disclosed primary round was ~$575M led by Franklin Templeton in Apr 2025, followed by a Feb 2026 employee tender of undisclosed size ([Sacra](https://sacra.com/c/plaid/), [Plaid funding announcement](https://plaid.com/blog/our-latest-fundraise/), [Plaid shareholder letter](https://assets.ctfassets.net/ss5kfr270og3/6mzrhYUB1oZkOeIcZUOx39/576915e13be33f29a4ef751c322a1007/2025_Plaid_Shareholder_Letter_final.pdf), [Plaid product](https://plaid.com/blog/sequential-foundation-model/)).
  - **Fundamental** ($255M raised, revenue unknown) offers a general-purpose tabular model through AWS. Its $225M Series A was announced in Feb 2026 and led by Oak HC/FT ([AWS](https://press.aboutamazon.com/aws/2026/2/fundamental-announces-255m-in-funding-and-publicly-launches-its-most-powerful-large-tabular-model-ltm)).
  - **Taktile** (~$189M in announced rounds, revenue unknown) combines models, rules, and human review in decision workflows. Its $110M Series C in Jun 2026 was led by Goldman Sachs Alternatives ([Taktile Series B](https://taktile.com/newsroom/taktile-raises-54m-series-b), [Taktile Series C](https://taktile.com/newsroom/taktile-secures-110m-in-goldman-sachs-led-series-c-to-power-ai-transformation-in-financial-institutions)).
  - **Prior Labs** (€9M raised, revenue unknown) offers pretrained TabPFN via API or private deployment. Balderton led its Feb 2025 pre-seed, and Prior Labs joined SAP in Jul 2026 ([Balderton](https://www.balderton.com/news/prior-labs-raises-e9m-to-revolutionise-how-businesses-interact-with-their-tabular-data/), [Prior Labs](https://jobs.ashbyhq.com/prior-labs/2c466435-84fd-4a58-99ce-946f76dc3658)).
- **Why now:** [Inferred]: Revolut’s 2026 production rollout and NVIDIA’s public training reference give institutions a deployment example and reusable tooling for transaction sequence models ([Revolut, Oct 2026](https://www.revolut.com/blog/post/fromresearchtorealtime/), [NVIDIA, Jun 2026](https://developer.nvidia.com/blog/build-your-own-transaction-foundation-model-for-financial-intelligence/)).

## Founders & Team

- **Gabriel Noya (Founder/CEO):**
  - **Background:** Studied electrical engineering and computer science at Stanford, previously worked at NVIDIA, BTG Pactual, Road2, Bux Bank, and Stone, and publishes `gkn@cs.stanford.edu` as an academic contact ([YC founder profile](https://www.ycombinator.com/founders/gabriel-noya), [founder site](https://www.gabrielnoya.com/)).
  - **Twitter/X:** @gabrielnoya7, 186 followers ([YC founder profile](https://www.ycombinator.com/founders/gabriel-noya), [Teapawt profile mirror, Nov 2026](https://teapawt.net/gabrielnoya7)).
  - **LinkedIn:** Lyon affiliation and 1K followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/gabriel-noya)).
  - **GitHub:** @kaloca, `liquid_treehacks_challenge`, 0 stars ([GitHub, Nov 2026](https://github.com/kaloca/liquid_treehacks_challenge)).
- **Markus Höhn (Founder):**
  - **Background:** Studies mathematics, statistics, and machine learning at Stanford, co-authored transformer research as a Kansas State University summer researcher, and publishes `markus@lyon.so` for direct contact ([founder site](https://markushoehn.com/), [ASCE, Jun 2026](https://ictd-pav-apm-ats2026.eventscribe.net/fsPopup.asp?PresentationID=1766392&mode=presInfo)).
  - **Twitter/X:** @MarkOfUs_, count not retrievable ([YC founder profile](https://www.ycombinator.com/founders/markus-hohn)).
  - **LinkedIn:** Stanford University affiliation ([LinkedIn, via search snippet](https://www.linkedin.com/in/markus-hoehn)).
  - **GitHub:** @MarkOfUs, `Deaflingo`, 152 stars ([GitHub, Nov 2026](https://github.com/MarkOfUs/Deaflingo)).
- **Co-founder relationship:** Both founders attended Stanford ([Noya YC profile](https://www.ycombinator.com/founders/gabriel-noya), [Höhn YC profile](https://www.ycombinator.com/founders/markus-hohn)).
- **Founder-market fit:** Noya’s NVIDIA and financial-services experience and Höhn’s applied transformer research cover Lyon’s technical and customer domains, and YC lists Gustaf Alstromer as primary partner ([Noya YC profile](https://www.ycombinator.com/founders/gabriel-noya), [ASCE](https://ictd-pav-apm-ats2026.eventscribe.net/fsPopup.asp?PresentationID=1766392&mode=presInfo), [YC company profile](https://www.ycombinator.com/companies/lyon)).

## Key Risks

- **Performance across institutions:** [Inferred]: The disclosed default benchmark describes one unnamed fintech, and independent preprint results show that gains over boosting can shrink as labeled data and tabular features improve ([YC company profile](https://www.ycombinator.com/companies/lyon), [Relvas and Bernardo, Nov 2026](https://arxiv.org/abs/2611.18914)).
- **Bank validation:** [Inferred]: Model validation and monitoring can add deployment steps at covered banks, while Lyon addresses data custody by running training and inference within the customer’s cloud ([Federal Reserve, Apr 2026](https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm), [Lyon](https://lyon.so/)).
- **In-house substitution:** Financial institutions can build comparable systems internally, as Revolut did with PRAGMA in collaboration with NVIDIA ([Revolut, Oct 2026](https://www.revolut.com/blog/post/fromresearchtorealtime/)).
- **Name ambiguity:** [Inferred]: Searches can mix Lyon with Lyon Software, a community-benefit reporting vendor operating at a different domain ([Lyon](https://lyon.so/), [Lyon Software](https://lyonsoftware.com/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 112% relative default-prediction PR-AUC lift at an unnamed fintech ([YC, Nov 2026](https://www.ycombinator.com/companies/lyon)); 4× premium-card conversion precision on a model trained on 28B transactions and reported work with an unnamed insurer ([MentionFox, Aug 2026](https://mentionfox.com/funding/yc-lyon)); 65 LinkedIn followers ([LinkedIn, Nov 2026](https://www.linkedin.com/company/lyon-ai/)); 0 YC job listings ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/lyon/jobs)). |
| Revenue Signal | No public data found |
| Founders | Gabriel Noya (Founder/CEO), Stanford EE and CS, NVIDIA, BTG Pactual ([YC](https://www.ycombinator.com/founders/gabriel-noya)); Markus Höhn (Founder), Stanford mathematics, applied transformer research ([founder site](https://markushoehn.com/), [ASCE](https://ictd-pav-apm-ats2026.eventscribe.net/fsPopup.asp?PresentationID=1766392&mode=presInfo)). |
| Competitors | Plaid (~$1.31B primary funding, >$500M ARR at Q4 2025, network-based underwriting and fraud models) ([Sacra](https://sacra.com/c/plaid/), [Plaid shareholder letter](https://assets.ctfassets.net/ss5kfr270og3/6mzrhYUB1oZkOeIcZUOx39/576915e13be33f29a4ef751c322a1007/2025_Plaid_Shareholder_Letter_final.pdf)); Fundamental ($255M raised, revenue unknown, general-purpose tabular model) ([AWS](https://press.aboutamazon.com/aws/2026/2/fundamental-announces-255m-in-funding-and-publicly-launches-its-most-powerful-large-tabular-model-ltm)); Taktile (~$189M announced, revenue unknown, decision workflows) ([Series B](https://taktile.com/newsroom/taktile-raises-54m-series-b), [Series C](https://taktile.com/newsroom/taktile-secures-110m-in-goldman-sachs-led-series-c-to-power-ai-transformation-in-financial-institutions)); Prior Labs (€9M raised, revenue unknown, pretrained TabPFN) ([Balderton](https://www.balderton.com/news/prior-labs-raises-e9m-to-revolutionise-how-businesses-interact-with-their-tabular-data/)). |
| Moat Signals | Customer-cloud training and inference with customer ownership of trained models ([Lyon](https://lyon.so/)); company-reported training on tens of billions of transactions ([YC](https://www.ycombinator.com/companies/lyon)). |
| Risk Factors | Benchmark evidence from one unnamed fintech ([YC](https://www.ycombinator.com/companies/lyon)), bank model validation ([Federal Reserve](https://www.federalreserve.gov/supervisionreg/srletters/SR2602.htm)), in-house development ([Revolut](https://www.revolut.com/blog/post/fromresearchtorealtime/)). |
| Founder Reach | Gabriel Noya, X 186, LinkedIn 1K, GitHub project 0 stars ([Teapawt](https://teapawt.net/gabrielnoya7), [LinkedIn, via search snippet](https://www.linkedin.com/in/gabriel-noya), [GitHub](https://github.com/kaloca/liquid_treehacks_challenge)); Markus Höhn, Deaflingo 152 GitHub stars ([GitHub](https://github.com/MarkOfUs/Deaflingo)). |
| Distribution Signals | Website intro booking ([Lyon](https://lyon.so/)); 65 company LinkedIn followers ([LinkedIn, Nov 2026](https://www.linkedin.com/company/lyon-ai/)); September 2026 launch listing ([Dealroom](https://app.dealroom.co/companies/lyon_3)); October 2026 spotlight ([The AI Read](https://theairead.com/ventures)). |
| Emails | markus@lyon.so (Markus Höhn, [founder site](https://markushoehn.com/)), founders@lyon.so (shared inbox and policy contact, [Lyon Privacy Policy](https://lyon.so/privacy.html)). |
