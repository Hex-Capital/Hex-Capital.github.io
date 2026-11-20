# Maritime -- AGI Evaluation

**Action:** Watch
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements.** If cheaper frontier models lead software vendors to deploy more per-customer agents, the bottleneck could be the capacity to keep those agents isolated and stateful, then wake them reliably on demand without tying up compute between tasks. Maritime’s founders report that maintaining and debugging hundreds of environments took time away from agent research. Maritime describes a scheduler that maps saved memory and attaches a thin disk clone on wake, avoiding a full snapshot read before execution resumes. The mechanism is plausible, but the memo supplies no comparative measurements of wake latency, reliability, or operator time. (*The Idea*, *Defensibility*)

Keiki documents running its background agent harness on Maritime. That establishes use by a named customer, while payment and repeat purchasing remain unknown. The team launched the service and brings relevant experience from hosting agent fleets during research. Its ability to handle representative bursts of simultaneous wakeups remains unproven. (*Market & Traction*, *Founders & Team*, *Key Risks*)

A persistent agent box is the unit of expansion. Maritime charges $1 per 2 GB per month and reported 29 agents awake out of 1,107 in one snapshot. **Scenario assumption:** If fleets stay mostly idle and wakeups are spread out, Maritime can reuse compute across more boxes. If agents stay awake longer or wake together, compute costs rise and plan concurrency limits can bind. The snapshot leaves sustained utilization and contribution per box unknown. (*The Idea*, *Market & Traction*, *Key Risks*)

### Countercase

Fly.io already offers idle sleep and persistent checkpoints, and Google Cloud supports isolated agent sandboxes with persistent workspaces. Maritime depends on third-party infrastructure, and the effort required to migrate a stateful fleet remains unmeasured. If a rival can match Maritime’s fleet-level reliability and cost, the buyer can bypass Maritime and the scarce-complement case closes. The memo establishes feature overlap and leaves that fleet-level comparison open, supporting Watch. (*Defensibility*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 11/25 |
| Durable value capture | 7/25 |
| Customer demand | 9/20 |
| Team and execution | 9/15 |
| Scale economics | 7/15 |

**Total Score: 43/100** (Pass)

### Decisive diligence question

Will an independent agent vendor commit to paid capacity after a production trial compares Maritime with Fly.io on the same stateful workload? The trial should include idle periods and simultaneous wakeups, with agreed targets for state recovery and wake reliability and a comparison of compute and operator costs. A paid commitment backed by a material advantage traceable to Maritime’s scheduler would move the action to Reach out. Comparable outcomes and costs would close Path A and move the action to Pass.
