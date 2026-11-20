# Maritime -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

New Economies is Maritime’s strongest path. The founders report that maintaining and debugging hundreds of self-managed VMs took time away from agent research. Maritime claims its managed service cuts that work by handling deployment, monitoring, and debugging, and by restoring each agent’s state when a message arrives. Keiki documents running its background agent harness on Maritime microVMs, showing the service supports a live use case. The market-opening hypothesis is that small teams could afford to give each customer a persistent agent once hosting and operator labor per successful task fall far enough. The memo leaves the size of that reduction and the identity of buyers previously priced out unverified. (The Idea, Market & Traction)

The expansion unit is one persistent agent box, listed at $1 per 2 GB per month. If fleets spend most of their time asleep and wakeups are spread out, Maritime can spread active compute capacity across more boxes. Its reported snapshot of 29 awake agents out of 1,107 establishes concurrency at one moment. Average awake time, peak concurrency, storage and support costs, and the cost of failed or retried tasks remain unknown. The relevant comparison is total hosting and operator cost per successful task on self-managed VMs versus Maritime fees and remaining operator work. (The Idea, Market & Traction, Key Risks)

### Countercase

Maritime may be making an existing hosting job easier in a market where buyers already have credible alternatives. Fly.io offers idle sleep and persistent checkpoints, and Google Cloud offers isolated agent sandboxes with persistent workspaces. Accumulated state, credentials, and integrations could make migration costly, but the memo provides no measured switching costs or evidence that buyers prefer Maritime when runtime functionality and model capability are comparable. That keeps the New Economies path at Watch. Feature overlap leaves substitution plausible, while actual switching remains unobserved. The memo identifies no independently supported scarce complement. (The Idea, Defensibility)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 13/25 |
| Durable value capture | 8/25 |
| Customer demand | 9/20 |
| Team and execution | 10/15 |
| Scale economics | 7/15 |

**Total Score: 47/100** (Neutral)

### Decisive diligence question

Will independent teams that previously found per-customer agents too expensive renew at standard prices after comparing Maritime with a comparable persistent runtime using the same model? A paid cohort that documents why buyers previously ruled out the use case, measures operator time and total cost per successful task, and renews on Maritime at a positive contribution margin would move the action to Reach out. If the alternative also opens the use case and buyers switch readily, the action would move to Pass.
