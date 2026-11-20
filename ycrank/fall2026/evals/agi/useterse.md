# Terse -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

**Path A — Scarce complements.** If cheaper frontier intelligence leads developers to run more agents concurrently, reliable coordination of shared state becomes more valuable. Application teams bear the cost of duplicate work and have to engineer around it. Terse’s CEO reports that stale PostgreSQL reads caused agents editing a shared CSV to repeat work. The shipped Durable Actors runtime gives each actor its own SQLite database and serializes calls by default, directly addressing that failure mode. The runtime supports the mechanism at seed stage. Scarcity still depends on how it performs against alternatives in production. (The Idea, Key Risks)

Doop’s creator reported a migration in progress, a concrete sign that an outside developer is committing engineering time. The hosted launch and the founders’ experience with assistant infrastructure and data pipelines support their ability to deliver. Repeat paid cloud use remains unverified. (Market & Traction, Founders & Team)

The expansion unit is billed compute and memory. As an illustrative scenario, one requested CPU and one GiB of RAM billed continuously would cost a customer about $0.095 per hour at published rates. Dormancy could reduce billed time if dormant actors release those resources. Terse’s contribution depends on realized utilization, hosting costs and support, while slow calls to a busy actor could limit throughput. (The Idea, Key Risks)

### Countercase

Rivet already offers self-hosted actors with per-actor SQLite and WebSockets, and Cloudflare bundles persistent state and WebSockets into Workers. Terse describes a concrete difference in default behavior: it commits persisted fields and SQLite writes together on successful calls, while Rivet offers an explicit immediate save. A buyer could find Rivet’s approach sufficient or deploy Terse’s MIT-licensed runtime itself. State migration could create switching costs over time, but buyer behavior has yet to establish them. The overlap keeps Terse below the Reach out gate. The memo leaves open whether a substitute meets the same production requirements at comparable cost, so the Path A case remains testable. (The Idea, Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 12/25 |
| Durable value capture | 7/25 |
| Customer demand | 10/20 |
| Team and execution | 10/15 |
| Scale economics | 5/15 |

**Total Score: 44/100** (Pass)

### Decisive diligence question

Will an independent team pay for Terse Cloud after running the same production coordination workload on Terse and its best feasible alternative, including Rivet or self-hosting? Move to **Reach out** if the buyer commits paid production budget because Terse meets a predefined correctness or latency target that the alternative cannot economically match. Move to **Pass** if the alternative meets the buyer’s requirements at comparable or lower total cost and the buyer sees no reason to pay Terse.
