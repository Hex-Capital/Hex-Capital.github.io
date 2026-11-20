# Terse -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

Conditional on strong product-market fit, Terse can serve the same recurring job across markets. Developers building collaborative AI apps need to coordinate concurrent work and preserve shared state. Terse packages that job in a self-hostable runtime with per-actor SQLite, WebSockets, and serialized calls by default. Those interfaces and deployment options support broad portability with little geographic adaptation for the core developer workflow. (The Idea)

GitHub and the CLI quickstart give developers a bottom-up route to first use. Published usage rates establish how Terse Cloud charges. The memo leaves open whether a typical developer can move from the quickstart to paid production independently. Once an app depends on persisted actor state, continued use is plausible. If the same app requests more CPU or RAM as its workload grows, its bill can expand. Whether that expansion can offset churn and contraction remains uncertain. (The Idea, Defensibility)

The two-person team announced Durable Actors in October and Terse Cloud on November 3. The memo records 366 GitHub stars. The founders reported 1.4 million requests on November 1 and 32,752 VM launches coordinated in a demo. The billing status of that usage is unknown, so initial traction takes the 7-point default. (Key Facts, Market & Traction)

At published rates, a hypothetical workload requesting one CPU and 1 GiB of RAM for one billable hour would generate about $0.095 in revenue. Incremental contribution depends on compute, memory, state storage, and any direct onboarding and support effort. Dormancy offers a plausible way to reduce idle resource costs while preserving state. Its effect on contribution depends on how much infrastructure cost it saves relative to any reduction in billable usage. (The Idea)

### Countercase

Open-source adoption could grow while paid hosting remains small. Teams can self-host Terse, Cloudflare bundles persistent state and WebSockets into Workers, and Rivet offers similar self-hosted actors. The recorded developer interest and reported workloads leave paid production adoption unresolved. The structural downside gate stays open because the documented runtime can transfer across markets and the memo identifies no unavoidable delivery or capacity burden that makes scaling infeasible. The unresolved path to independent paid production keeps the action at Watch. (The Idea, Defensibility, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 23/25 |
| Repeatable acquisition and onboarding | 17/25 |
| Retention economics | 16/20 |
| Initial traction | 7/20 |
| Cost economics | 5/10 |

**Total Score: 68/100** (Invest)

### Decisive diligence question

Can unrelated developer teams go from the public quickstart to recurring paid production on Terse Cloud without founder-led setup? Onboarding records and two consecutive production invoices for several such teams would move the action to Reach out.
