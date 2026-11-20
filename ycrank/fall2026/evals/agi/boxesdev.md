# Boxes.dev -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

Path A — Scarce complements is the strongest path. If frontier-quality coding agents become cheap and widely available, engineering teams may run enough concurrent jobs to exhaust local CPU, memory, and ports. Boxes.dev says it relieves that constraint by cloning a working development environment into isolated cloud machines that keep running when a laptop sleeps. The potential bottleneck is the ability to bring up many usable, project-specific environments quickly. The memo gives no comparative measurements of setup time, reliability, or sustained throughput. (The Idea)

The founders report that one unnamed customer ran more than 200 agents across more than 100 machines for a software build. That suggests a real workload at high concurrency, with payment and repeat use still unknown. Recorded CLI downloads show distribution. The founders’ prior engineering work together at Gem and the shipped CLI support seed-stage execution. (Market & Traction, Founders & Team)

The expansion unit is an awake box-hour. Customers supply model access, and Boxes.dev lists seat fees and a $0.40 per-hour overage. The scale case assumes that realized revenue covers compute, snapshot storage, and support at the utilization of repeat workloads. The memo reports list prices, with realized revenue and operating costs unknown. (The Idea, Key Facts)

### Countercase

Replicas already runs native coding agents in isolated VMs, and Coder supports customer-hosted environments. OpenAI’s acquisition of Ona also creates a plausible route to bundle hosted workspaces into Codex. Versioned templates and startup scripts could impose some migration work, but the memo shows no retention or buyer comparison that establishes an advantage rivals would take meaningful effort to reproduce. These alternatives leave the scarcity and control gate open. Equivalent delivery on a representative workload would close it. (Defensibility, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 11/25 |
| Durable value capture | 8/25 |
| Customer demand | 9/20 |
| Team and execution | 9/15 |
| Scale economics | 5/15 |

**Total Score: 42/100** (Pass)

### Decisive diligence question

Will an independent engineering team pay for a repeat high-concurrency deployment after testing Boxes.dev against Replicas with the same agent and project? Move to Reach out if the buyer commits budget because Boxes.dev repeatedly meets a time-to-ready or reliability threshold the rival cannot meet without substantial setup or operating work. Move to Pass if the rival meets the same requirements at comparable cost and effort.
