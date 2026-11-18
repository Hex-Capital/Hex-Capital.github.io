# Terse -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements.** If cheaper intelligence leads developers to run more agents in parallel, coordinating writes to shared state becomes more important. Karatzas reports that stale PostgreSQL reads caused agents working on a shared CSV to duplicate work. Terse’s shipped runtime serializes calls to each actor by default and commits actor state and SQLite writes together on successful calls. Its self-hosting option could matter to buyers who need deployment control. The memo leaves open how much duplicate work Terse prevents in production and whether its advantage holds when many agents contend for the same actor. (The Idea, Key Risks)

Doop’s creator reported a migration in progress. Terse’s CTO reported that Munito used the runtime to coordinate 32,752 VM launches in a demo. These are early signs of adoption, with paid production use and repeat buying still unknown. The founders’ assistant infrastructure and data pipeline experience, together with the runtime and hosted launch, support a seed-stage execution case. Terse Cloud can bill for more CPU and RAM as customer workloads grow. Contribution on the next workload depends on the cost of compute, storage, networking, and support, which the memo leaves unmeasured. (Market & Traction, Founders & Team, The Idea, Key Facts)

### Countercase

Rivet already offers self-hosted actors with per-actor SQLite and WebSockets. Cloudflare bundles persistent state and WebSockets into Workers, and Terse’s own MIT-licensed runtime gives users a route to run it without buying Terse Cloud. With ample capital and equal model access, rivals could compete on hosting and persistence behavior. The memo identifies possible migration work from embedded actor state, while buyer retention and willingness to pay for Terse’s specific persistence guarantees remain untested. The overlap weighs against durable value capture. A production comparison could still establish that Terse controls a capability buyers need, so the Path A override remains open. Path B lacks evidence of a newly viable paid transaction after accounting for delivery labor and exceptions. (Defensibility, The Idea, Key Risks, Market & Traction)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 12/25 |
| Durable value capture | 5/25 |
| Customer demand | 8/20 |
| Team and execution | 10/15 |
| Scale economics | 5/15 |

**Total Score: 40/100** (Pass)

### Decisive diligence question

Will an independent buyer keep paying for Terse Cloud after running the same concurrent-agent workflow on Terse and its best deployable alternative, including Rivet where self-hosting matters? A sustained paid production deployment tied to a reproducible advantage in correctly completed jobs under contention and retries would justify rescoring for Reach out, subject to the score and confidence gates. Equivalent results at comparable cost followed by the buyer choosing the substitute would move the action to Pass.
