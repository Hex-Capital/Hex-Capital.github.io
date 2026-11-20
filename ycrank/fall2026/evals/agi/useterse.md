# Terse -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

The strongest path is **scarce complements**. More agents working concurrently could increase the value of infrastructure that keeps shared state consistent. Terse’s CEO reports that stale PostgreSQL reads led agents working on a shared CSV to duplicate work. Durable Actors serialize calls by default and commit persisted fields and SQLite writes together on success. That design addresses the reported failure mode. Whether production teams face this constraint often enough to make Terse’s implementation scarce remains open. The memo supplies no former labor cost or previously excluded buyer to establish a New Economies path. (The Idea, Market & Traction)

Doop’s creator reported a migration in progress, and Terse’s CTO reported that Munito used the runtime to coordinate 32,752 VM launches in a demo. These are early usage signals. Repeat production use and willingness to pay remain unverified. The founders’ assistant infrastructure and data pipeline experience, together with the release of Durable Actors and Terse Cloud, show relevant execution. A comparative production test remains the next milestone. (Market & Traction, Founders & Team)

Each successful coordination job is a unit for testing cloud economics. Assuming one billed CPU-second and one billed GiB-second per successful job, posted rates imply $0.00002638 in compute and memory revenue per job. Contribution remains unknown without serving costs, including utilization, storage, and retries. Same-actor queueing could raise the cost per successful job on busy workloads. (The Idea, Key Risks)

### Countercase

Rivet already offers self-hosted actors with per-actor SQLite and WebSockets, Cloudflare bundles comparable primitives into Workers, and customers can self-host Terse’s MIT-licensed runtime. The typed client and actor-specific state could create migration work, but that remains an inference. The alternatives weaken Terse’s ability to capture value. The available evidence leaves open whether buyers can meet the same consistency and operating-cost requirements with Rivet’s immediate-save option, so the scarce-complement path stays open at Watch. (The Idea, Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 10/25 |
| Durable value capture | 7/25 |
| Customer demand | 7/20 |
| Team and execution | 10/15 |
| Scale economics | 5/15 |

**Total Score: 39/100** (Pass)

### Decisive diligence question

Will an independent team running concurrent agents in production renew a paid Terse Cloud deployment after comparing it with Rivet on the same workload? A renewal backed by measurements showing that Terse meets a consistency or operating-cost requirement Rivet misses would move the action to Reach out. A switch to Rivet after it meets the same requirements at comparable cost would move the action to Pass.
