# Terse -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

Terse’s strongest path is to attract developers through its open-source Durable Actors runtime and convert production workloads to metered Terse Cloud usage. Assuming strong fit with teams building collaborative AI apps, coordinating concurrent writes and live updates is a recurring job that travels across markets. The runtime uses per-actor SQLite and WebSockets and supports self-hosting, giving developers a portable way to adopt the same product. GitHub and the CLI quickstart give developers a way to discover and try it independently. The memo documents Cloud pricing, while the path from the quickstart to paid production without founder assistance remains unverified. (The Idea)

Persistent actor state could keep Terse embedded in production workflows. If retained Cloud customers request more CPU and RAM as workloads grow, their bills can grow too. That is an inferred expansion mechanism. The memo records 366 GitHub stars and a migration in progress reported by Doop’s creator. Terse separately reported 1.4 million requests on November 1 and 32,752 VM launches coordinated in Munito’s demo. Those signals show early technical adoption around the November 3 Cloud announcement. Paid production use and commercial growth remain unknown, so initial traction takes the absent-evidence default. (The Idea, Defensibility, Market & Traction)

At published rates, a workload assumed to request one CPU and one GiB of RAM continuously for an hour generates about $0.095 in compute and memory revenue. Contribution depends on the infrastructure, storage, connection capacity, and support attributable to that workload. Actor dormancy could reduce serving costs while preserving state, but the memo gives too little cost or utilization data to establish contribution at representative workloads. (The Idea)

### Countercase

Developers may adopt Durable Actors and keep self-hosting, leaving Terse with widespread usage and few Cloud customers. Rivet offers similar self-hosted primitives, and Cloudflare bundles persistent state and WebSockets into Workers. Both give developers alternatives when moving to production. The structural gate stays open because the memo shows a portable runtime and gives no evidence of unavoidable bespoke rollout work or structurally uneconomic delivery. Reliable conversion to recurring paid Cloud usage remains unproven. (The Idea, Defensibility, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 22/25 |
| Repeatable acquisition and onboarding | 17/25 |
| Retention economics | 16/20 |
| Initial traction | 7/20 |
| Cost economics | 5/10 |

**Total Score: 67/100** (Invest)

### Decisive diligence question

Can developers who start with the public quickstart reach paid production on Terse Cloud and keep running those workloads without founder assistance? A small cohort of independent teams that activate on their own and incur usage charges in successive billing periods would move the action to Reach out.
