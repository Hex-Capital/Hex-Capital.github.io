# Latent -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements.** Latent’s best case is that reliable, low-latency runtime monitoring becomes a scarce operating capability as customers put more agents into production. Latent says the cost and latency of running a second model as judge can limit teams to checking a sample. On self-hosted vLLM, Latent scores activations during generation and can hold or reroute flagged outputs. In its gpt-oss-120b sandbox, Latent reports stopping 99% of rule-breaking agents versus 69% for a frontier judge. That company-reported result supports the detection mechanism in one setting. Production latency, false holds, and the share of traffic customers can afford to check remain unknown. (The Idea, Key Risks)

The memo records a shipped Python SDK and self-serve launch. Gaur’s prior work on activation probes and model evaluation is directly relevant to adapting the detector to customer traffic. The memo identifies no buyer commitment. Scored answers are a concrete expansion unit, with list prices of $299 for 100,000 and $1,499 for one million per month. Repeatable contribution depends on scoring overhead, deployment-specific calibration, and human review. The memo provides no realized cost data for those inputs. (Founders & Team, Market & Traction, Key Facts, Defensibility)

### Countercase

Goodfire already distributes activation-based monitoring for open models through Baseten, with review, refusal, and rerouting. Latent’s traffic-specific calibration could make replacement costly, but customers can export labeled examples, and the memo records no evidence of how much work a switch would require. If cheap frontier judges or rival monitors meet the same production requirements, buyers can bypass Latent. The competing offering makes that risk concrete. Functional equivalence on representative customer traffic remains untested, so the path stays open on Watch. (Defensibility, Market & Traction)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 12/25 |
| Durable value capture | 7/25 |
| Customer demand | 5/20 |
| Team and execution | 9/15 |
| Scale economics | 6/15 |

**Total Score: 39/100** (Pass)

### Decisive diligence question

Will an independent self-hosted vLLM customer commit to a paid rollout after a side-by-side production trial shows that Latent alone meets the customer’s thresholds for detection, false holds, added latency, and all-in operating cost? A paid commitment backed by that result would move the action to Reach out. A substitute that qualifies at comparable cost would close Path A and move the action to Pass.
