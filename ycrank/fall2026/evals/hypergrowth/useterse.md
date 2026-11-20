# Terse -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Product-led adoption** is the strongest path. Engineering teams building collaborative AI apps face a recurring job in coordinating concurrent writes and keeping shared state current. Terse packages that job in a runtime with per-actor SQLite, serialized calls, and WebSocket updates. The same runtime can be self-hosted or run on Terse Cloud, making the workflow plausibly portable across markets. Buyer geography and deployment requirements in a second market are unreported. (The Idea)

GitHub and the CLI quickstart give developers a route to try the runtime. Doop’s creator reported a migration in progress, and Terse’s CTO reported that Munito used it to coordinate 32,752 VM launches in a demo. Those are early signs that developers will put integration effort into the runtime. The growth scenario assumes that teams can reach first value through the quickstart, choose managed hosting for a recurring production workload, and spend more as billed CPU and RAM usage grows. The first unproven link is conversion from developer trial to paid cloud use. With Terse Cloud newly launched, a single documented customer journey through that link would be meaningful. (The Idea, Market & Traction)

### Countercase

The free self-hosted runtime could attract developers who have little reason to buy hosting. Rivet also offers self-hosted actors, and Cloudflare bundles comparable state and WebSocket capabilities into Workers. The founder-reported 1.4 million requests on one day and the Munito demo leave repeat paid use open. Terse publishes resource prices and reports a cold-start latency improvement, while marginal infrastructure and support costs remain unknown. The structural downside gate is untriggered because paid conversion and delivery costs remain testable. (The Idea, Defensibility, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 16/25 |
| Repeatable acquisition and onboarding | 9/25 |
| Retention and customer expansion | 7/20 |
| Contribution as volume grows | 7/20 |
| Evidence of fit in the first buyer segment | 5/10 |

**Total Score: 44/100** (Pass)

### Decisive diligence question

Can an independent team go from the GitHub quickstart to a paid Terse Cloud deployment for a recurring production workload without bespoke founder help? An account record showing that journey and paid use sustained through a normal billing cycle would move the action to Reach out. Demo-only use or continued self-hosting would leave it at Watch.
