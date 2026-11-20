# HyperBench -- AGI Evaluation

**Action:** Pass  
**Evidence confidence:** Medium

### Company case

HyperBench applies AI to an existing embedded-engineering workflow. Engineers cross-check datasheets, board layouts, and code, then reproduce faults on a physical bench. HyperBench describes a system graph that agents use to trace faults, draft fixes across repositories, and retest them on existing hardware. The memo identifies no AI buildout workload constrained by an input HyperBench supplies, so the building-blocks path scores zero. The industry-enabled path also scores zero because the memo identifies no buyer or verification use that becomes economically viable through this workflow. The reported evaluation covers diagnostic questions and repository repairs, with no measured change in the fully loaded cost of a bench-verified repair. (The Idea, Key Risks)

The source-linked system graph and custom hardware indexing pipeline support modest value-capture credit. Accumulated mappings and test history could make switching costly, but that remains an inference, and Embedder’s physical debugging integration gives it a route to overlap. The founders’ firmware and AI infrastructure experience, together with the reported repair tests, support execution credit at seed. The private-beta launch and publicity establish visibility. The memo gives no evidence of buyer trials or commitments, paid deployments, or revenue and delivery costs for the next customer, so demand and scale economics stay at their defaults. The evidence supports a medium-confidence assessment given the documented design and team experience and the limited customer operating data. (Defensibility, Founders & Team, Key Risks, Market & Traction, Key Facts)

### Countercase

If scarce specialist time currently forces teams to leave some cross-repository changes unverified, agents that trace faults and run physical tests could make routine verification affordable. Even with comparable models, teams would still need system context, bench access, and a way to review test evidence. HyperBench’s design makes that scenario plausible, but custom bench setup and engineer review could absorb the labor savings. The memo does not establish that any team previously skipped verification for cost reasons or that HyperBench crossed that threshold. Both paths score zero, triggering the Pass gate. (The Idea, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 0/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 7/20 |
| Customer demand | 4/15 |
| Team and execution | 6/10 |
| Scale economics | 2/5 |

**Total Score: 19/150** (Strong Pass)

### Decisive diligence question

Can a beta customer use HyperBench to routinely bench-verify a class of cross-repository changes it previously left unverified because specialist time made the work too expensive? A paid pilot on the customer’s own bench showing repeated accepted repairs below its affordability threshold, including setup, failed runs, and engineer review, would change Pass to Reach out.
