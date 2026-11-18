# Dreamscale Labs -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements.** Dreamscale’s strongest candidate bottleneck is cloud inference that meets a robot’s control deadlines when its policy exceeds onboard GPU capacity. As more capable policies become available, robotics teams could use them without upgrading onboard hardware or running their own model servers. That benefit depends on the cloud service returning actions reliably over the robot’s actual network. In a company-run test on one home Wi-Fi link, Dreamscale’s packet recovery cut p99 network time from 420 ms to 160 ms using synthetic frames and simulated compute. The result supports the transport mechanism and leaves end-to-end control reliability open. (The Idea, Key Risks)

Dreamscale separately reports running DreamZero 14B in 320 ms versus 350 ms for NVIDIA’s implementation with half the GPU count. This suggests optimization capability. The memo leaves open whether Dreamscale can sustain an advantage as competitors tune the same models. The documented HUD research integration and reported Actor Labs excavator evaluation show external engagement at seed. Buyer budgets, production commitments, and repeat payment remain unknown. The shipped SDK and the founders’ relevant quantization and model-training work support early execution. Production qualification remains ahead. (Defensibility, Market & Traction, The Idea, Founders & Team)

The expansion unit is a paid connected robot-hour. **Scenario assumption:** At the listed $5 rate, a full-price hour contributes only if its share of GPU capacity, including idle capacity, plus networking, support, and deployment costs stays below $5. The memo supplies neither those costs nor paid utilization. The buyer’s cost comparison also needs to include the independent safety systems and validation that Dreamscale assigns to the operator. (The Idea, Key Risks)

### Countercase

With abundant capital and access to the same checkpoints, rivals could reproduce the serving stack or offer an equivalent result through existing infrastructure. Abstract already hosts overlapping checkpoints, Modal supplies programmable GPU capacity, and compressed local runtimes can bypass the network for buyers whose workloads they can handle. The memo identifies no structural barrier and provides no production switching evidence. These are credible substitutes, but there is no like-for-like field evidence that they meet the same control requirements. The Path A override therefore stays open. Path B lacks evidence that delivery labor falls enough to unlock a new transaction or that buyers would keep paying Dreamscale under model parity. Neither path clears the outreach gate. (Defensibility, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 12/25 |
| Durable value capture | 8/25 |
| Customer demand | 8/20 |
| Team and execution | 9/15 |
| Scale economics | 5/15 |

**Total Score: 42/100** (Pass)

### Decisive diligence question

Will an independent robotics team commit to repeat paid production use after comparing Dreamscale with a tuned cloud alternative and, where feasible, compressed onboard inference? Use the same task-quality and safety requirements on the buyer’s actual network. Measure missed control deadlines, cost per successful operating hour, and the integration work the buyer would have to redo to switch. Repeat payment at viable margins for a measurable advantage Dreamscale can credibly retain would support Reach out if the updated case reaches 65 with at least medium confidence. Equivalent results from a readily switchable substitute would move the case to Pass.
