# Lyon

> Foundation models on enterprise transaction data.

| Field | Value |
|-------|-------|
| Website | https://lyon.so |
| YC Page | https://www.ycombinator.com/companies/lyon |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Analytics |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Machine Learning, Finance, Data Science, Big Data |
| YC Partner | Gustaf Alstromer ([YC, Aug 2026](https://www.ycombinator.com/companies/lyon)) |
| Emails | founders@lyon.so ([Lyon website, Aug 2026](https://lyon.so)) |

## The Idea

- **Problem:** Banks, insurers, and fintechs use separate rules or months-long feature-engineering projects to predict credit risk, fraud, collections, income, churn, cross-sell, and lifetime value ([Lyon website, Aug 2026](https://lyon.so); [YC, Aug 2026](https://www.ycombinator.com/companies/lyon)).
- **Approach:** Lyon trains a foundation model from scratch on each customer’s transactions and interaction events, produces customer embeddings, and fine-tunes task adapters using LoRA inside the customer’s cloud ([Lyon website, Aug 2026](https://lyon.so)).
- **Differentiation:** Lyon trains a customer-specific, multi-task event-data model inside the customer’s VPC, while Taktile orchestrates regulated decision workflows, Pecan offers low-code predictive modeling, and Feedzai concentrates on financial-crime detection ([Lyon](https://lyon.so); [Taktile](https://taktile.com/articles/taktile-raises-54m-series-b); [Pecan AI](https://www.pecan.ai/resource/press-release-series-c/); [Feedzai](https://www.feedzai.com/pressrelease/feedzai-raises-200-million-growth-investment-led-by-kkr/)).
- **Business Model:** [Inferred]: Lyon likely sells negotiated enterprise contracts covering model training, deployment, and task adapters because the product requires customer-cloud deployment and its website routes buyers to a sales call without publishing prices ([Lyon website, Aug 2026](https://lyon.so)).
- **TAM/SAM:** The global predictive-analytics market was $18.9B in 2024 and is forecast to reach $82.3B by 2030 at a 28.3% CAGR, while financial predictive analytics was estimated at $4.68B in 2025 and $14.88B by 2030 at a 26% CAGR ([Grand View Research, Dec 2024](https://www.grandviewresearch.com/industry-analysis/predictive-analytics-market); [The Business Research Company, 2026](https://www.thebusinessresearchcompany.com/report/financial-predictive-analytics-global-market-report)).
- **GTM / Distribution:** [Inferred]: Lyon is using founder-led direct sales to banks, insurers, and fintechs, supported by a booking link, founders@lyon.so, and disclosed work with an insurer and a fintech ([Lyon website, Aug 2026](https://lyon.so); [YC, Aug 2026](https://www.ycombinator.com/companies/lyon)).

## Defensibility

- **Moat today:** [Inferred]: Lyon’s current defensibility signal is implementation experience training on 28B transactions and operating models inside customer VPCs, although customer ownership of both data and trained intelligence prevents a publicly evidenced pooled-data flywheel ([YC, Aug 2026](https://www.ycombinator.com/companies/lyon); [Lyon website, Aug 2026](https://lyon.so)).
- **Future moat:** [Inferred]: Reusable event schemas, task-adapter tooling, deployment automation, performance benchmarks, and completed financial-institution security reviews could accumulate across deployments, but customer counts and repeat-deployment data are not public.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** [Inferred]: Published tabular and transaction-foundation-model research, plus funded AutoML and decision platforms, gives research teams and existing vendors technical paths toward overlapping prediction capabilities ([Nature, Jan 2025](https://www.nature.com/articles/s41586-024-08328-6); [ACL Anthology, Nov 2025](https://aclanthology.org/2025.emnlp-industry.61/); [H2O.ai, Nov 2021](https://h2o.ai/company/press-media/2021/h2o-ai-closes-100-million-in-funding-led-by-customer-commonwealth-bank-of-australia/)).

## Market & Traction

- **Traction signals:**
  - A model was trained on 28B transactions for a fintech serving tens of millions of active users and identified premium-card converters with 4x the precision of its existing rules ([YC, Aug 2026](https://www.ycombinator.com/companies/lyon)).
  - The fintech model is being deployed for credit, and Lyon reports separate work with an unnamed insurer ([YC, Aug 2026](https://www.ycombinator.com/companies/lyon)).
  - Lyon’s Trust Center lists SOC 2 Type 1 and GDPR as compliant, SOC 2 Type 2 as in progress, 25 policies, and 35 monitored controls ([Lyon Trust Center, Aug 2026](https://trust.lyon.so/)).
  - YC lists 0 active job postings ([YC, Aug 2026](https://www.ycombinator.com/companies/lyon)).
- **Competitors (minimum 3, up to 5):**
  - Taktile ($189M in disclosed funding, revenue unknown): regulated decision workflows and agents rather than training a customer-specific transaction foundation model ([Taktile, Feb 2025](https://taktile.com/articles/taktile-raises-54m-series-b); [Taktile, Jun 2026](https://taktile.com/articles/taktile-s-next-chapter-we-raised-110m-to-power-the-agentic-financial-institutions-of-the-future)).
  - Pecan AI ($100M+ raised, revenue unknown): low-code predictive modeling for business teams across industries rather than private, from-scratch event-model training ([Pecan AI, Feb 2022](https://www.pecan.ai/resource/press-release-series-c/)).
  - Feedzai ($282M raised, revenue unknown): financial-crime detection, AML, and account-opening risk rather than Lyon’s broader credit, income, churn, collections, and cross-sell model ([Feedzai, Mar 2021](https://www.feedzai.com/pressrelease/feedzai-raises-200-million-growth-investment-led-by-kkr/); [Feedzai company release, Mar 2022](https://www.globenewswire.com/news-release/2022/03/14/2402259/0/en/feedzai-grew-40-in-the-last-year-and-strengthened-the-global-team.html)).
  - H2O.ai ($250M+ raised, revenue unknown): a general-purpose AI cloud and AutoML platform rather than a transaction-specific foundation-model deployment ([H2O.ai, Nov 2021](https://h2o.ai/company/press-media/2021/h2o-ai-closes-100-million-in-funding-led-by-customer-commonwealth-bank-of-australia/)).
- **Why now:** [Inferred]: The January 2025 publication of a tabular foundation model outperforming tuned traditional baselines, followed by 2025 transaction-foundation-model research, provides a recent technical basis for replacing separate feature-engineered models with reusable learned representations ([Nature, Jan 2025](https://www.nature.com/articles/s41586-024-08328-6); [ACL Anthology, Nov 2025](https://aclanthology.org/2025.emnlp-industry.61/)).

## Founders & Team

- **Gabriel Noya (Founder/CEO):**
  - Background: Stanford EE and CS class of 2026, prior NVIDIA experience, and winner of the TreeHacks 2025 Edge AI track for optimizing `torch.conv2d` on a Samsung S24 ([YC, Aug 2026](https://www.ycombinator.com/companies/lyon); [LinkedIn, Aug 2026](https://www.linkedin.com/in/gabriel-noya)).
  - Twitter/X: No public account found.
  - LinkedIn: “NVIDIA” with 918 followers ([LinkedIn, Aug 2026](https://www.linkedin.com/in/gabriel-noya)).
  - GitHub: @kaloca; `liquid_treehacks_challenge` has 0 stars ([GitHub, Aug 2026](https://github.com/kaloca/liquid_treehacks_challenge)).
- **Co-founder relationship:** No public data on co-founder history; YC lists one active founder and a team size of 2, while LinkedIn displays three employee profiles ([YC, Aug 2026](https://www.ycombinator.com/companies/lyon); [LinkedIn, Aug 2026](https://www.linkedin.com/company/lyon-ai/)).
- **Founder-market fit:** [Inferred]: Noya’s EE/CS training, NVIDIA experience, and edge-AI optimization work support model-systems expertise, while no public banking or insurance operating background was found ([YC, Aug 2026](https://www.ycombinator.com/companies/lyon); [LinkedIn, Aug 2026](https://www.linkedin.com/in/gabriel-noya)).

## Key Risks

- **Cross-task validation:** Public performance evidence covers one premium-card-conversion task, while credit is still being deployed and no results are disclosed for fraud, collections, income, churn, or lifetime value ([YC, Aug 2026](https://www.ycombinator.com/companies/lyon)).
- **Deployment and procurement:** Training and inference occur separately inside each customer’s VPC, and SOC 2 Type 2 remains in progress; SOC 2 Type 1, GDPR compliance, and a published Trust Center provide procurement mitigations ([Lyon website, Aug 2026](https://lyon.so); [Lyon Trust Center, Aug 2026](https://trust.lyon.so/)).
- **Customer concentration and referenceability:** Public traction consists of an unnamed insurer and one unnamed fintech, limiting public evidence of repeatability across institutions; the fintech credit deployment provides one expansion signal ([YC, Aug 2026](https://www.ycombinator.com/companies/lyon)).
- **Competitive substitution:** Taktile, Pecan AI, Feedzai, and H2O.ai have funded products covering decisioning, predictive analytics, fraud, and enterprise AI, creating several paths for customers to assemble overlapping capabilities ([Taktile](https://taktile.com/articles/taktile-s-next-chapter-we-raised-110m-to-power-the-agentic-financial-institutions-of-the-future); [Pecan AI](https://www.pecan.ai/resource/press-release-series-c/); [Feedzai](https://www.feedzai.com/pressrelease/feedzai-raises-200-million-growth-investment-led-by-kkr/); [H2O.ai](https://h2o.ai/company/press-media/2021/h2o-ai-closes-100-million-in-funding-led-by-customer-commonwealth-bank-of-australia/)).
- **Name disambiguation:** [Inferred]: The name overlaps with Lyon, France and unrelated businesses using “Lyon,” which can introduce search and brand-discovery ambiguity; no public mitigation was found ([Lyon Software LinkedIn page](https://www.linkedin.com/company/lyonsoftware); [Lyon & Lyon LinkedIn page](https://uk.linkedin.com/company/lyon-lyon)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $18.9B global predictive-analytics market in 2024, forecast to reach $82.3B by 2030 at a 28.3% CAGR (Grand View Research, Dec 2024) ([source](https://www.grandviewresearch.com/industry-analysis/predictive-analytics-market)) |
| SAM | $4.68B financial predictive-analytics market in 2025, forecast to reach $14.88B by 2030 at a 26% CAGR (The Business Research Company, 2026) ([source](https://www.thebusinessresearchcompany.com/report/financial-predictive-analytics-global-market-report)) |
| Traction | Model trained on 28B transactions for a fintech serving tens of millions of active users; 4x precision versus existing premium-card-conversion rules; credit deployment underway; work with an insurer (YC, Aug 2026) ([source](https://www.ycombinator.com/companies/lyon)) |
| Revenue Signal | No public data found |
| Founders | Gabriel Noya (Founder/CEO): Stanford EE/CS 2026, NVIDIA experience, TreeHacks 2025 Edge AI track winner (YC and LinkedIn, Aug 2026) ([YC](https://www.ycombinator.com/companies/lyon); [LinkedIn](https://www.linkedin.com/in/gabriel-noya)) |
| Competitors | Taktile ($189M disclosed funding, revenue unknown, decision workflows and agents) ([source](https://taktile.com/articles/taktile-s-next-chapter-we-raised-110m-to-power-the-agentic-financial-institutions-of-the-future)); Pecan AI ($100M+ raised, revenue unknown, low-code predictive modeling) ([source](https://www.pecan.ai/resource/press-release-series-c/)); Feedzai ($282M raised, revenue unknown, financial-crime platform) ([source](https://www.globenewswire.com/news-release/2022/03/14/2402259/0/en/feedzai-grew-40-in-the-last-year-and-strengthened-the-global-team.html)); H2O.ai ($250M+ raised, revenue unknown, general-purpose AI cloud) ([source](https://h2o.ai/company/press-media/2021/h2o-ai-closes-100-million-in-funding-led-by-customer-commonwealth-bank-of-australia/)) |
| Moat Signals | Training experience across 28B transactions, customer-VPC training and inference, multi-task adapters, SOC 2 Type 1 compliance, and 35 monitored controls (YC, Lyon website, and Lyon Trust Center, Aug 2026) ([YC](https://www.ycombinator.com/companies/lyon); [website](https://lyon.so); [Trust Center](https://trust.lyon.so/)) |
| Risk Factors | Single-task public performance evidence (YC, Aug 2026); customer-specific VPC deployments and SOC 2 Type 2 in progress (Lyon website and Trust Center, Aug 2026); funded adjacent platforms (Taktile, Pecan AI, Feedzai, and H2O.ai) ([YC](https://www.ycombinator.com/companies/lyon); [Trust Center](https://trust.lyon.so/); [Taktile](https://taktile.com/articles/taktile-s-next-chapter-we-raised-110m-to-power-the-agentic-financial-institutions-of-the-future)) |
| Founder Reach | Gabriel Noya: Twitter/X not found, LinkedIn 918 followers, GitHub top repository 0 stars (LinkedIn and GitHub, Aug 2026) ([LinkedIn](https://www.linkedin.com/in/gabriel-noya); [GitHub](https://github.com/kaloca/liquid_treehacks_challenge)) |
| Distribution Signals | No public data found |
| Emails | founders@lyon.so (Lyon website, Aug 2026) ([source](https://lyon.so)) |
