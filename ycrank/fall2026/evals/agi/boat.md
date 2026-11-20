# Boat -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements.** If cheaper frontier intelligence leads teams to run more long-lived agents in parallel, fast access to isolated VMs that preserve state could become a bottleneck. Boat offers full Ubuntu VMs with Docker and a desktop, plus snapshot-based resume and fork. A customer reported using his Claude allowance four times as fast after adopting Boat. That supports increased agent activity, while the effect on completed work and fleet capacity remains unmeasured. (The Idea, Market & Traction)

Boat says it operates the stack from CPU hosts through orchestration and built its snapshot system in-house. That gives it a plausible way to improve fleet performance. The team built the VM layer for its own coding-agent product and shipped it as a self-service service. Founders report 350+ paying users and $1M ARR. Those figures support early paid demand, with renewal behavior and customer dependence on Boat’s specific capabilities still unknown. (Defensibility, Founders & Team, Market & Traction, Key Facts)

The expansion unit is a paid VM-hour. At the listed rate, 1,000 billable hours at that rate would yield $36 in compute revenue. Auto-stop can reduce idle runtime, while snapshot storage, spare capacity for bursts, and host utilization determine how much of that revenue Boat keeps. Boat can reject higher bursts, and the memo provides no realized cost or utilization figures to show whether it can serve larger fleets profitably. (The Idea, Key Risks)

### Countercase

E2B already offers fast-resume microVMs and a self-hostable runtime, while AWS bundles browser and code execution into AgentCore. If those options meet buyers’ actual persistence, compatibility, and burst requirements, Boat’s growth could reflect demand for agent sandboxes generally. Snapshot and fleet integrations may make migration harder, but the memo records no measured switching costs or structural barrier. Comparable production performance remains untested in the memo, leaving the scarcity gate unresolved and supporting Watch. (Defensibility, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 12/25 |
| Durable value capture | 8/25 |
| Customer demand | 13/20 |
| Team and execution | 10/15 |
| Scale economics | 6/15 |

**Total Score: 49/100** (Neutral)

### Decisive diligence question

Will an independent buyer renew a paid production deployment after running the same bursty, stateful agent workload on Boat and its best viable substitute? Move to Reach out if the substitute misses a requirement that materially affects completed work, Boat meets it at positive contribution after host and snapshot costs, and the buyer renews. Move to Pass if the substitute consistently delivers the same outcome at comparable or lower total cost and the buyer can switch readily.
