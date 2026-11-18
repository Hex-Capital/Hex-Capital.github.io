# isoquant -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A, scarce complements.** Isoquant could expand the usable capacity of existing GPUs for teams serving latency-sensitive open models. If cheaper inference drives more traffic, workload-specific tuning could let those teams serve more requests within the same latency target and hardware budget. Isoquant’s own GLM‑5.3‑Flash benchmark reports a median time to first token of 452 ms versus 890 ms for the fastest listed peer, and 158.9 median output tokens per second versus 54 for the fastest listed peer. That supports a seed-stage performance hypothesis on one model. Comparable serving conditions and gains across representative production workloads remain unverified. (The Idea, Defensibility, Key Risks)

The memo documents a self-serve API and prepaid per-token pricing. Isoquant reports more than 1.5 trillion tokens served, more than 1,000 customers, and migrations from competing providers and self-hosted stacks. Those claims suggest initial demand. Paid conversion, repeat usage, and buyer commitments tied to the performance advantage remain unknown. The San Francisco team fits the seed mandate. Deshpande’s inference work and Patankar’s production-serving experience are relevant, and the team shipped a customer-facing cloud. Its ability to repeat workload-specific deployments is still unproven. (Key Facts, The Idea, Market & Traction, Founders & Team)

**Scale scenario.** Assume a GLM‑5.3‑Flash workload consumes two million uncached input tokens per million output tokens, all billed at list price. That yields $0.29 in revenue per million output tokens and associated input. Positive contribution requires GPU time, idle capacity, and allocated tuning and support costs to fit below that amount. The memo gives no production utilization or tuning labor per deployment, so the benchmark cannot establish margins on the next workload. (The Idea, Key Facts, Key Risks)

### Countercase

With comparable models and ample GPU capital, competitors could reproduce the serving gains. Together AI already offers agent-driven tuning for dedicated inference, NVIDIA Dynamo makes scheduling and caching components available in open source, and compatible APIs reduce switching effort. Isoquant could build a reusable tuning advantage, but the memo provides no evidence of reuse across customers. These facts make durable capture doubtful. Equivalent production performance is still untested, so the Path A override remains untriggered and the outreach gate remains unmet. Path B also lacks affirmative evidence. The company-run banking evaluation reports lower inference cost and higher accuracy against its baseline, while leaving delivered labor, newly viable buyers, and willingness to pay under model parity untested. (Defensibility, Key Risks, Market & Traction)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 13/25 |
| Durable value capture | 5/25 |
| Customer demand | 9/20 |
| Team and execution | 10/15 |
| Scale economics | 5/15 |

**Total Score: 42/100** (Pass)

### Decisive diligence question

Will an independent production customer renew at a price that leaves Isoquant a positive contribution margin after a head-to-head trial against a credible agent-tuned alternative? The trial should use the same open model, comparable hardware and traffic, and matched output quality. Measure tail latency, GPU time, and tuning and support labor across the customer’s workloads. A paid renewal tied to repeatable performance gains would justify rescoring for Reach out if the score and confidence gates clear. Equivalent performance with a low-cost switch would move the action to Pass.
