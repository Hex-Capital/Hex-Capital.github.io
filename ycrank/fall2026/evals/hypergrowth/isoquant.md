# isoquant -- Hypergrowth Evaluation

**Action:** Reach out  
**Evidence confidence:** Medium

### Company case

Assuming strong product-market fit with developers serving latency-sensitive open models, Isoquant can serve the same recurring inference workload across markets through its OpenAI-compatible API. The company reports migrations across North America, Europe, and Asia-Pacific. Some buyers may be constrained by zero-retention requirements, since qualifying requests can be rejected on routes that cannot honor them. The documented self-serve path lets developers create an API key, change a base URL, and pay per token with prepaid credits. Workload-specific tuning has a separate consultation path. The memo establishes a plausible bottom-up motion through developer launch channels, with little evidence yet of a recurring acquisition loop. (The Idea, Key Facts, Key Risks, Market & Traction)

Production inference creates recurring demand, and retained accounts can spend more as their token volume grows. That gives expansion a plausible way to offset churn, though the memo provides no cohort evidence. The two-person team reports serving 1.2 trillion tokens in the first month after its September launch. That shows rapid uptake if the reported figure is accurate. The paid share of volume, the number of paying customers, and the basis of the reported weekly growth are unspecified, so commercial traction receives the rubric default. (The Idea, Key Facts, Market & Traction)

In an illustrative workload with one million uncached input tokens and one million output tokens on GLM‑5.3‑Flash, posted rates yield $0.22 before incremental GPU capacity, infrastructure, and attributable acquisition, onboarding, tuning, and support costs. Isoquant’s reported benchmark of 158.9 median output tokens per second makes lower GPU cost per token plausible if the throughput carries over at production utilization. The memo leaves contribution at that price uncertain. (The Idea, Defensibility, Key Risks)

### Countercase

The same API compatibility that makes adoption easy also makes it easy to leave. Together AI already offers agent-driven tuning for dedicated inference, and Isoquant’s reported performance varies by workload and hardware. If the shared API loses its edge and buyers need dedicated capacity or hands-on tuning to get the advertised gains, switching could erode retention while delivery costs rise. The structural gate stays open because the memo documents a standard self-serve path and does not establish that dedicated capacity or manual tuning is required for ordinary buyers. (The Idea, Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 22/25 |
| Repeatable acquisition and onboarding | 21/25 |
| Retention economics | 16/20 |
| Initial traction | 7/20 |
| Cost economics | 6/10 |

**Total Score: 72/100** (Invest)

### Decisive diligence question

Do representative paying customers on the shared API generate positive incremental contribution at posted rates across normal traffic and utilization levels? Match billed usage to GPU and idle capacity costs, plus attributable acquisition, onboarding, tuning, and support. Positive contribution across those workloads would support advancing diligence. If profitability appears only on selected workloads or under unusually high utilization, move to Watch.
