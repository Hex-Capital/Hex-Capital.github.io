# Maritime -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements** is the stronger case. As cheaper intelligence makes more per-customer agents viable, developers could face a practical bottleneck in keeping fleets of isolated, stateful environments ready for intermittent work. Maritime’s founders report that maintaining and debugging hundreds of environments took time away from their research. Maritime describes a scheduler that maps saved memory and attaches a thin disk clone on wake, allowing execution to resume before a full snapshot is read. That is a plausible way to relieve the bottleneck. The memo leaves wake latency, reliability under simultaneous wakeups, and operator time savings unmeasured against alternatives. (The Idea; Defensibility; Founders & Team)

Keiki documents using Maritime microVMs for background agents. That establishes real usage, while payment and renewal remain unknown. The founders’ agent-infrastructure experience and the team’s launch support seed-stage execution credit. Reliable operation under bursty customer workloads remains to be demonstrated. Maritime’s San Francisco location and disclosed pre-seed backing make it a plausible fit for the seed-led U.S. mandate. (Market & Traction; Founders & Team; Key Risks)

**Scale scenario.** Assuming a fleet of 1,000 boxes billed at the posted $1 per 2 GB per month, box usage would amount to $1,000 per month in plan credits before separate metered usage. Contribution on the next fleet depends on storage, awake compute, and support costs. Maritime’s reported snapshot of 29 awake agents out of 1,107 gives a point-in-time count. Typical awake time and peak concurrency across customer fleets remain unknown, and both determine whether the posted pricing can support expansion. (The Idea; Market & Traction; Key Risks)

### Countercase

Well-funded competitors can already supply core pieces of the runtime. Fly.io offers idle sleep and persistent checkpoints, and Google Cloud offers isolated agent sandboxes with persistent workspaces. Even with cheap frontier models and abundant capital, buyers would still need stateful execution, but the memo gives little reason they would have to buy it from Maritime. Migration friction from accumulated state and integrations remains an inference. The overlap weighs against durable value capture and leaves the Reach out gate unmet. It does not establish equivalent performance on Maritime’s target workload, so the Path A override is unresolved. Path B also remains unproven. The memo identifies neither a previously uneconomic buyer or transaction unlocked by measured delivery labor savings nor a demonstrated reason to keep paying Maritime under model parity. (The Idea; Defensibility; Market & Traction)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 12/25 |
| Durable value capture | 5/25 |
| Customer demand | 8/20 |
| Team and execution | 9/15 |
| Scale economics | 6/15 |

**Total Score: 40/100** (Pass)

### Decisive diligence question

Will an independent buyer renew a paid Maritime fleet after a matched production trial against Fly.io? Match state persistence, wake reliability, and burst load, then compare all-in delivery costs, including operator time and recovery work. A renewal at viable pricing tied to a measurable advantage Maritime controls and a funded rival would struggle to reproduce would support Reach out if the updated score reaches 65. Equivalent delivery and an easy switch would move the action to Pass. (Defensibility; Market & Traction; Key Risks)
