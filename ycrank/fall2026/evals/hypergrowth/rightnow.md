# RightNow -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A: Product-led adoption.** The first buyer is an engineering team running recurring open-weight inference and looking to reduce GPU cost, latency, and tuning work. RightNow offers self-serve API keys, familiar API interfaces, and pay-as-you-go pricing. If a team sees a cost or latency gain on its own traffic, it can route more requests or move another workload to the same endpoint, growing paid token volume. The October hosted-model launch drew 119 votes, and existing keys and balances carried over from RunInfra. RightNow reports kernel-tool use at NVIDIA and Modal. The memo gives no evidence of paid production activation or repeat usage for the hosted API. *(The Idea, Market & Traction, Key Facts)*

**Cross-market scenario.** Assuming the same engineering buyer can use the shared endpoint from a second geography, the API integration could carry over. Payment acceptance, production latency, and any data-handling requirements remain untested. At the next workload, paid token revenue must cover incremental GPU rental, any tuning and support, and the cost of serving credit-funded traffic. Batch processing on idle GPUs could improve utilization, while traffic spikes could require another block of rented capacity. The memo gives list prices and describes the batch feature, with no measured contribution per workload. *(The Idea, Key Risks, Key Facts)*

### Countercase

Published performance gains may fade on a buyer’s traffic because prompts, cache reuse, and concurrency vary. If each new workload needs hands-on benchmarking and tuning, and peak demand adds GPU rental roughly in step with usage, self-serve signup could still lead to a labor- and capacity-intensive business. RightNow’s workload-specific benchmark offer and rented GPU capacity make that risk concrete. The memo contains no operating data establishing proportional costs or a structural ceiling on global demand, so the Pass gate stays open pending a paid production test. *(The Idea, Key Risks)*

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 9/25 |
| Repeatable acquisition and onboarding | 9/25 |
| Retention and customer expansion | 7/20 |
| Contribution as volume grows | 7/20 |
| Evidence of fit in the first buyer segment | 4/10 |

**Total Score: 36/100** (Pass)

### Decisive diligence question

Can one independent engineering team in a second geography activate a recurring production workload through the shared API, keep paying after any credits expire, and generate positive incremental contribution without bespoke tuning? Usage and billing records over the buyer’s normal workload cycle, paired with GPU costs and onboarding and support time, would answer it. One success would move the action to Reach out.
