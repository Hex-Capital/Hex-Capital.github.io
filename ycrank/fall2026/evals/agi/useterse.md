# Terse -- AGI Evaluation

**Action:** Pass  
**Evidence confidence:** Medium

### Company case

Terse’s strongest commercial case is hosted coordination for applications whose agents write concurrently to shared state. Each Durable Actor combines SQLite, WebSockets, and serialized calls by default. The CEO reports that stale PostgreSQL reads caused agents working on a shared CSV to duplicate work. That incident shows how coordination can fail in a specific workload. Rivet already offers self-hosted actors with SQLite and WebSockets, and Cloudflare bundles persistent state and WebSockets into Workers. Both offer credible substitutes for the core input. The memo gives no evidence that suitable coordination capacity stays scarce as agent workloads grow. The building-block path scores zero. (*The Idea*, *Defensibility*, *Key Risks*)

The industry-enabled path also scores zero. The hypothesis is that AI agents could make some collaborative workflows affordable if shared-state coordination reduces retries and duplicate work. The memo identifies neither a previously excluded buyer or use nor a cost per successful outcome that crosses an affordability threshold. With both paths at zero, the rubric calls for Pass. (*The Idea*, *Market & Traction*)

Self-hosting and joint persistence of actor state and SQLite writes give developers concrete reasons to choose Terse. The MIT license lets them use the runtime without buying Terse Cloud, and the memo’s inferred migration costs have yet to show up in retention or pricing power. Doop’s creator reported a migration in progress, an early demand signal with paid conversion and repeat use still open. The shipped runtime and cloud launch, along with the founders’ prior work on assistant infrastructure and data pipelines, support seed-stage execution credit. The CTO-reported Munito demo adds a bounded technical result. Production reliability under same-actor contention remains uncertain. Published CPU and RAM prices establish a billing model, with too little cost or utilization data to estimate contribution per unit. These gaps support Medium confidence. (*The Idea*, *Defensibility*, *Market & Traction*, *Founders & Team*, *Key Risks*)

### Countercase

The strongest case for outreach is that parallel agents could make reliable shared-state coordination a binding constraint for teams that need deployment control. Terse’s combination of self-hosting and joint persistence could matter for those teams. The reported Doop migration shows a developer willing to try the product, and the Munito demo suggests the runtime can coordinate a large burst of work. Neither establishes that available alternatives block a representative production workload. The countercase leaves the Pass gate in effect. (*The Idea*, *Market & Traction*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 0/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 4/20 |
| Customer demand | 7/15 |
| Team and execution | 7/10 |
| Scale economics | 2/5 |

**Total Score: 20/150** (Pass)

### Decisive diligence question

Can Terse unblock a real multi-agent deployment whose shared-state requirements the closest alternatives cannot meet within the buyer’s rollout window? A buyer-confirmed test on representative traffic, with measured correctness and latency against the best viable alternative and a concrete reason the alternative cannot close the gap on time, would move the action to Reach out to test whether the constraint recurs across buyers.
