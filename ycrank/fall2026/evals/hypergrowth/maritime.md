# Maritime -- Hypergrowth Evaluation

**Action:** Reach out  
**Evidence confidence:** Medium

### Company case

Maritime’s strongest path is self-serve hosting for software teams that run a persistent AI agent for each customer. Conditional on strong product-market fit, the same isolated VM, state restoration, and message-triggered wakeup workflow could serve developers across markets with modest adaptation. The memo identifies a self-serve route, a seven-day trial, and published monthly pricing. Keiki documents running its background agent harness on Maritime’s microVMs. The evidence leaves open whether typical developers complete paid production setup independently. (The Idea, Market & Traction)

Persistent state gives teams a reason to keep using Maritime. Monthly plans convert to usage credits, so retained accounts can spend more as their fleets grow enough to require a higher plan. That gives expansion a plausible way to offset churn. The memo leaves paid renewals and realized expansion unverified. Maritime reported 1,107 agents in a September snapshot before its October YC launch. That snapshot and Keiki’s integration establish early use, while paid production and the commercial growth rate remain unknown. Initial traction therefore uses the absent-evidence default. (The Idea, Defensibility, Market & Traction, Key Facts)

An additional 2 GB agent box consumes $1 in monthly credits at the listed rate. If a customer has unused credits, the next box adds storage and serving costs while cash revenue stays flat. If sustained fleet growth prompts a plan upgrade, contribution depends on the added subscription revenue covering state storage, wake and runtime compute, capacity, and any attributable credits, migration, or support. Maritime’s documented scheduler reduces compute residency during idle periods, giving intermittently active fleets a credible cost advantage. The margin at representative workloads remains uncertain. (The Idea, Defensibility, Key Risks)

### Countercase

Customers with the fastest-growing fleets could also run agents more continuously. Under flat box pricing, higher awake time raises compute costs, and simultaneous wakeups can require more capacity. The reported 29 awake agents came from a single snapshot, leaving typical utilization unresolved. Overlapping persistent-runtime features from Fly.io and Google Cloud could also limit pricing flexibility. The structural downside gate clears because the memo supports an idle-compute savings mechanism and leaves open a viable path for intermittently active fleets. (Defensibility, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 21/25 |
| Repeatable acquisition and onboarding | 17/25 |
| Retention economics | 16/20 |
| Initial traction | 7/20 |
| Cost economics | 6/10 |

**Total Score: 67/100** (Invest)

### Decisive diligence question

Do expanding self-serve production fleets generate positive incremental contribution at their actual awake times? Match invoices for a representative cohort of paying accounts to the added storage, compute, capacity, and support costs as their fleets grow. Positive contribution as accounts expand would support continued diligence. Recurring losses at representative workloads, with no credible pricing or scheduling fix, would change the action to Pass.
