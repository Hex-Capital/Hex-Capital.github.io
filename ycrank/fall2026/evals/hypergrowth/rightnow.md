# RightNow -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

Assuming strong product-market fit with engineering teams serving open-weight models, RightNow’s shared API could serve the same recurring inference workload across markets. Its OpenAI- and Anthropic-compatible endpoints make the product portable, while the hosted launch gives developers a way to discover it and self-serve keys and $5 prepaid top-ups give them a path to a first paid request. The offer to benchmark and migrate larger workloads appears optional for shared API buyers. The memo documents that path but gives no example of a buyer completing it independently. (The Idea, Market & Traction)

Metered billing gives retained production accounts a concrete way to spend more as token volumes grow. That supports a plausible expansion mechanism, while the memo leaves its ability to offset churn unresolved. The two-person team debuted hosted inference in July 2026, giving the product a short commercial observation window. Launch votes show attention, and the company’s reported kernel-tool adoption concerns a separate product. The memo supplies no usable evidence of realized revenue, paying-customer growth, or billable production volume for the hosted API, and it does not establish pre-revenue status. (The Idea, Market & Traction, Founders & Team, Key Facts)

In an illustrative Nemotron workload with one million input and one million output tokens, list-price revenue is $0.20 for standard serving or $0.10 for batch. Contribution is that revenue after credits, less attributable GPU rental, onboarding, and support costs. Kernel tuning and batching on idle capacity could lower GPU cost per token. The memo leaves paid demand and contribution under representative workloads unresolved, which drives the Watch action. (The Idea, Defensibility, Key Risks, Key Facts)

### Countercase

The compatible APIs that ease adoption could also make it easy for buyers to switch providers. Together’s competing compiler could narrow RightNow’s performance advantage, while low cache reuse or peak concurrency could raise GPU cost per token and require more rented capacity. The structural gate remains open because the shared API has a credible transfer path across markets and the memo identifies concrete efficiency levers without establishing unavoidable losses or bespoke deployment work. (The Idea, Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 22/25 |
| Repeatable acquisition and onboarding | 20/25 |
| Retention economics | 16/20 |
| Initial traction | 7/20 |
| Cost economics | 6/10 |

**Total Score: 71/100** (Invest)

### Decisive diligence question

Can a cohort of independently onboarded shared-API customers grow paid production usage across billing periods while generating positive incremental contribution? Cohort billing and attributable cost data showing rising paid usage after credits expire and positive contribution after GPU rental, onboarding, and support across representative cache and concurrency conditions would move the action to Reach out.
