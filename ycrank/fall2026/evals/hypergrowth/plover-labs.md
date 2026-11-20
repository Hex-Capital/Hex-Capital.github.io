# Plover Labs -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

Plover’s strongest path is recurring enterprise revenue from verifying agent-written code before merge. Assuming strong fit with engineering teams that already use pull requests and automated checks, Plover could carry the same verification workflow across markets. The core job is to turn recurring repository failures into deterministic merge checks. The remaining portability uncertainty is how much configuration each repository needs. (The Idea, Key Risks)

Fieldguide reports 40% higher merged PR throughput in Forge’s first production quarter, with flat rollback rates and defect severity. That outcome covers the joint deployment. Plover separately reports five-figure monthly contracts with Fieldguide and Envoy by November. Two reported paying customers roughly five months after the listed June launch show meaningful early commercialization for a two-person team, with Fieldguide contributing to implementation. The memo gives no billing history to establish the subsequent growth rate. (Market & Traction, The Idea, Founders & Team, Key Risks)

Monthly fees and a growing library of repository-specific regression checks give customers a reason to renew. The memo identifies no pricing mechanism that would raise the bill as usage or coverage expands. For a scenario using the reported monthly fee, incremental contribution would subtract compute, support, and check maintenance, plus attributable sales and setup costs spread over an assumed customer lifetime. The memo gives too little cost or labor data to estimate that contribution. (The Idea, Defensibility, Key Risks)

### Countercase

Plover may need to co-build verification with each customer. Fieldguide helped implement Forge, added a regression case after a patch passed component tests while missing a required integration, and kept engineer approval at merge. That supports a high-touch acquisition score and raises the risk that each rollout consumes substantial engineering time. The structural downside gate stays open because one joint deployment does not establish that comparable customers require the same effort or that the effort makes incremental sales uneconomic. (The Idea, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 18/25 |
| Repeatable acquisition and onboarding | 6/25 |
| Retention economics | 13/20 |
| Initial traction | 14/20 |
| Cost economics | 4/10 |

**Total Score: 55/100** (Neutral)

### Decisive diligence question

Can the next comparable paying enterprise put its first useful merge checks into production through a standard setup that leaves healthy contribution at the reported pricing? A live rollout with customer-run setup and measured sales, onboarding, compute, and support costs could move the action to Reach out. Evidence that comparable rollouts require bespoke engineering that consumes the contract contribution would trigger Pass.
