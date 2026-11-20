# Lyon -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

Conditional on strong product-market fit, Lyon’s best path is to sell default prediction to large fintechs, reuse the same training and deployment software across institutions, and expand within each account through adapters for fraud and cross-sell. Default prediction is a recurring job that plausibly transfers across markets. Lyon says it supports training and inference inside customer environments on AWS, Google Cloud, and Azure. That gives it a reusable deployment base, with the work needed to adapt transaction schemas and validate models in each market still uncertain. (The Idea, Defensibility, Key Risks)

Lyon reports a 112% relative improvement in default-prediction PR-AUC over one fintech’s existing model. That supports the technical case. Commercial traction remains unknown, including whether the benchmark led to paid production use, so Initial traction takes the default. Reusing embeddings across recurring decisions could support continued use and expansion, but the memo gives no billing terms or evidence that adding tasks increases account spend. Customers own the trained models, which limits how much retention can be inferred from model ownership alone. (Market & Traction, Key Facts, The Idea, Defensibility)

### Countercase

Lyon could scale like a services business if each institution requires substantial engineering and validation to reach production. Its documented buyer path starts with an introductory call and a procurement questionnaire. Those steps can be reused, but each institution needs a model trained from scratch in its own cloud, and bank validation can add work before first value. Under a recurring-contract scenario, incremental contribution would be contract revenue less Lyon’s attributable sales, integration, validation support, ongoing support, and any training or inference costs it bears. The memo establishes neither pricing nor cost allocation or delivery effort, so Cost economics takes the default. The structural gate stays open because the evidence leaves room for a reusable rollout with viable contribution. (The Idea, Defensibility, Key Risks, Key Facts)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 13/25 |
| Repeatable acquisition and onboarding | 6/25 |
| Retention economics | 9/20 |
| Initial traction | 7/20 |
| Cost economics | 4/10 |

**Total Score: 39/100** (Pass)

### Decisive diligence question

Can Lyon bring a second comparable fintech in another market into paid production using the same deployment process? A recurring contract and a rollout record showing the schema and validation changes, Lyon’s delivery hours, and who paid for compute would test that. Bounded adaptation and positive incremental contribution would support rescoring for Reach out if the result reaches 65 with at least Medium confidence. Evidence that market-specific rebuilding is unavoidable or that delivery remains uneconomic at viable prices would move the action to Pass.
