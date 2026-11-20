# Latent -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

Latent’s supported AGI path is making a new frequency of safety screening viable for teams running self-hosted agents. Latent says the cost and latency of a second LLM judge force teams to sample outputs. The seed-stage case is that probing the serving model’s activations during generation could make it affordable to screen every proposed action in a high-stakes workflow and route flagged cases for review. Under model parity, deployment-specific calibration and policy enforcement would still have to be delivered. This case assumes the probe adds little enough latency and sends few enough cases to human review to stay within the buyer’s operating budget. (The Idea, Defensibility, Key Risks)

The memo records a public SDK launch and relevant founder experience in activation probes and LLM evaluation. Latent reports stopping 99% of rule-breaking agents versus 69% for a frontier judge in a gpt-oss-120b sandbox. That result supports testing the detector on live traffic. The memo provides no production cost or latency comparison, confirmed buyer trial, or paid deployment. Published plans establish asking prices, while the cost of serving and reviewing the next unit of traffic remains unknown. These gaps support Watch. (Market & Traction, Founders & Team, Key Risks, Key Facts)

The building-blocks path scores zero. The memo identifies cost and latency friction in runtime screening, but it does not establish that AI deployment depends on a scarce verification input whose supply or substitutes will be slow to scale. (The Idea, Market & Traction)

### Countercase

Latent may make an existing guardrail workflow more efficient while leaving the same uses economically viable. Goodfire already offers activation-based monitoring with review and rerouting, so a buyer could obtain similar controls elsewhere. Latent’s per-deployment calibration could create switching costs, though customers can export labeled examples. The sandbox result leaves production false holds and review costs unresolved, and configured limits can leave traffic unscored. If a comparable guardrail can already provide full-traffic screening within the buyer’s budget and latency limits, the newly viable use disappears and the zero-path Pass gate applies. The memo leaves that question open. (Defensibility, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 0/50 |
| Industry enabled by superintelligence | 16/50 |
| Durable value capture | 7/20 |
| Customer demand | 4/15 |
| Team and execution | 6/10 |
| Scale economics | 2/5 |

**Total Score: 35/150** (Pass)

### Decisive diligence question

Can Latent win a paid production pilot with a self-hosted agent team that currently samples checks because full coverage exceeds its budget or latency limit? Move to Reach out if the pilot sustains full coverage on representative traffic and meets the buyer’s thresholds for missed violations, false holds, latency, and fully loaded cost per successfully screened action, including calibration and human review. Move to Pass if a comparable guardrail already meets those thresholds within the same budget. (The Idea, Defensibility, Key Risks)
