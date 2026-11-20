# Dreamscale Labs -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

**Path A — Scarce complements.** If cheaper frontier models drive more robots to use policies that exceed onboard memory, the scarce input could be remote inference capacity that reliably meets real-world control deadlines. Robotics teams bear the cost of upgrading onboard hardware or operating their own cloud model servers. Dreamscale reports that its transport cut p99 network time from 420 ms to 160 ms in a synthetic test on one home Wi-Fi link. That isolates a relevant bottleneck, while production end-to-end latency and task reliability remain unmeasured in the memo. (*The Idea*; *Key Risks*)

Dreamscale separately reports running DreamZero 14B in 320 ms versus NVIDIA’s 350 ms with half the GPUs. That suggests an optimization advantage on one model. The shipped SDK and the team’s prior work on robot-model quantization support seed-stage execution. The HUD research integration and Actor Labs excavator evaluation show collaborators committing evaluation effort. The memo leaves paid repeat demand unverified. (*Defensibility*; *The Idea*; *Founders & Team*; *Market & Traction*)

A connected robot-hour is the expansion unit. Assuming customers pay the posted $5 rate, GPU capacity at realized utilization, networking, and deployment support attributable to that hour must cost less than $5 for positive contribution before fixed costs. The memo provides pricing and leaves realized utilization and delivery costs open. (*The Idea*)

### Countercase

Abstract already hosts overlapping checkpoints, and General Instinct offers compressed offline execution for buyers who need it. If either approach meets a target buyer’s task, reliability, and cost requirements, Dreamscale’s optimization may be reproducible or bypassable. The memo identifies no structural barrier and documents no head-to-head production result that establishes equivalent performance. The required scarcity and control remain testable, so the action is Watch. (*Defensibility*; *Market & Traction*; *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 12/25 |
| Durable value capture | 8/25 |
| Customer demand | 8/20 |
| Team and execution | 10/15 |
| Scale economics | 6/15 |

**Total Score: 44/100** (Pass)

### Decisive diligence question

Will an independent robotics team pay for a repeat deployment after a production trial against its best feasible substitute? Move to Reach out if the buyer repeats at a price that covers measured delivery costs and Dreamscale meets the buyer’s end-to-end latency and task-success thresholds through an operating capability it controls that the substitute cannot match at comparable cost. Move to Pass if the substitute meets those thresholds at comparable cost. An inconclusive trial leaves the action at Watch.
