# RightNow -- Hypergrowth Evaluation

**Action:** Reach out  
**Evidence confidence:** Medium

### Company case

RightNow’s strongest Hypergrowth path is self-serve shared inference for engineering teams running open-weight models in production. Assuming strong product-market fit with those teams, the OpenAI- and Anthropic-compatible endpoints make the same recurring serving workflow portable across markets with little expected adaptation. The memo documents a Product Hunt launch, self-serve API keys, and prepaid top-ups starting at $5. Together, those give developers a route from discovery to paid use with minimal help. RightNow offers migration and benchmarking help for larger workloads alongside that flow. (The Idea, Market & Traction)

Token billing lets a retained account spend more as its production traffic grows. Expansion could offset churn, though the memo leaves that balance unverified. The two-person team debuted hosted inference in July 2026, but realized revenue, paid production volume, and pre-revenue status remain unknown. RightNow reports kernel-tool use at several large companies. That claim concerns a different product, so initial traction for hosted inference takes the absent-evidence default. (The Idea, Market & Traction, Key Facts)

At the listed Nemotron 3.5 Lightning rates, a hypothetical workload with one million input and one million output tokens bills $0.20 on demand or $0.10 at the batch rate. Contribution depends on rented GPU capacity, utilization, and attributable acquisition, onboarding, and support costs, with startup credits reducing cash revenue where used. RightNow documents kernel and serving optimization and has released batch processing that uses idle capacity. These are concrete ways to lower cost per token. Their effect on contribution at production scale remains uncertain. (The Idea, Defensibility, Key Risks)

### Countercase

The same API compatibility that makes adoption easy could make it easy to shift traffic elsewhere. RightNow’s serving advantage may vary with prompt mix, cache reuse, and concurrency, while Together’s compiler targets similar efficiency gains. If RightNow must rent more GPUs to cover peaks while serving traffic at low token prices, paid volume could grow without healthy contribution. The structural gate remains open because the memo supports reusable onboarding and specific efficiency levers, while the cost of serving representative workloads through a capacity increase remains unverified. (The Idea, Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 23/25 |
| Repeatable acquisition and onboarding | 20/25 |
| Retention economics | 17/20 |
| Initial traction | 7/20 |
| Cost economics | 5/10 |

**Total Score: 72/100** (Invest)

### Decisive diligence question

Can RightNow show a representative set of self-serve customers whose paid production usage grew after credits expired and remained contribution-positive through a GPU capacity increase? Matched billing and operating cost records showing healthy contribution would sustain Reach out. An unresolved cost gap would move the action to Watch. Evidence that each capacity increase makes growth economically infeasible despite the documented efficiency levers would trigger Pass.
