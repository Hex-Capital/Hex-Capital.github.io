# Boat -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

Boat’s strongest AGI path is a scarce complement for long-running agents. Boat documents full Ubuntu VMs with Docker and a browser desktop that developers can stop, resume, and fork. These features could make persistent execution more valuable as agents take on longer tasks. One customer reported using his Claude allowance four times as fast after adopting Boat, which signals more activity while leaving successful task throughput and recovery unmeasured. Boat says it operates the stack from CPU hosts through orchestration and built its snapshot system in-house. That gives it a plausible way to improve recovery and manage costs, while scarcity and switching costs remain unproven. (The Idea, Market & Traction, Defensibility)

The founder reported 350+ paying users in September and $1 million ARR in November, up from $200,000 a month earlier. These are meaningful early demand signals. The memo leaves buyer concentration, repeat use, and willingness to pay specifically for persistent execution unresolved. The founders built the VM layer for their own cloud coding agent before shipping it as a standalone product, demonstrating relevant execution. (Market & Traction, Key Facts, Founders & Team)

Billable VM hours are the expansion unit. In a scenario with 1,000 billable hours at the listed default rate, compute charges would be $36. Contribution at that rate depends on host utilization, snapshot storage, network costs, and spare capacity for bursts. Auto-stop can reduce idle compute, and Boat’s documented burst limits leave peak-load capacity and cost open. (The Idea, Key Risks)

### Countercase

Agent demand could grow while execution becomes interchangeable. E2B offers fast resume and self-hosting, and AWS bundles browser and code execution into AgentCore. Those are credible substitutes for overlapping workloads. The memo gives no comparative recovery results or evidence that buyers switch readily for workloads that need a persistent desktop and Docker together. That leaves the scarce-complement path open at Watch. The memo also leaves the New Economies path unsupported because it identifies neither a previously excluded buyer or use nor a measured reduction in labor cost per successful outcome. (The Idea, Defensibility, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 14/25 |
| Durable value capture | 9/25 |
| Customer demand | 14/20 |
| Team and execution | 10/15 |
| Scale economics | 6/15 |

**Total Score: 53/100** (Neutral)

### Decisive diligence question

Will independent customers keep paying Boat’s standard price after running the same persistent desktop-and-Docker workload on Boat and their best available substitute? Repeat paid use tied to a measurable advantage in task completion, recovery, or cost per successful run would move the action to Reach out. Comparable results followed by ready switching would close the scarce-complement path and move the action to Pass.
