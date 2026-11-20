# Mirrors -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Usage-based expansion** is the strongest path. The initial buyer is an engineering team running a customer-facing AI agent and repeatedly correcting its behavior. The memo records an October launch and a Python SDK release. Mirrors describes a workflow in which developers scope a rule, preview its reach against past conversations, and compare outcomes after delivering it to live runs. The company reports one design-partner example in which an agent made 75 errors editing a travel guide despite repeated stop instructions. That example establishes a concrete failure mode and leaves buyer urgency, commitment, and the effect of Mirrors’ guidance open. (The Idea; Market & Traction)

Assuming a team sees a meaningful reduction in errors on its first production workflow, it could apply the same SDK and rule workflow to another agent or use case. The SDK and account-specific configuration make the job plausibly portable across markets, with production integration and latency tolerance still to verify. Growth pricing is listed at $299 per month plus $0.005 per turn. The first unproven link is whether an independent team can move from signup or a founder demo to a recurring paid workload through a repeatable setup. The company’s reported 63,052 turns have no stated counting period, account breakdown, or paid share. For a product launched in October, repeat use over the workflow’s natural cadence would be an appropriate early test. The memo gives no usable measure of runtime delivery, onboarding, or support costs per additional workload. (The Idea; Market & Traction; Key Facts)

### Countercase

Teams could use framework-native steering for the same corrections and avoid adding an external runtime dependency. Mirrors reports a 200 ms average response time and a 750 ms fail-open threshold. Even when a rule arrives on time, the model can disregard it. If scoped delivery and outcome measurement produce too little improvement, buyers may keep corrections in their existing stack and never expand paid use. The memo establishes a testable risk. The structural downside gate requires affirmative evidence that every credible path is blocked. (Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 16/25 |
| Repeatable acquisition and onboarding | 9/25 |
| Retention and customer expansion | 7/20 |
| Contribution as volume grows | 7/20 |
| Evidence of fit in the first buyer segment | 4/10 |

**Total Score: 43/100** (Pass)

### Decisive diligence question

Can two independent engineering teams use the same SDK workflow to put a first agent into paid production, sustain use over its natural cadence, and add a second workload that generates billed turns? Account-level onboarding and billing records showing that pattern with bounded implementation effort would move the action to **Reach out**. Repeated trials that end with teams reverting to framework-native steering because Mirrors delivers too little incremental benefit would move it to **Pass**.
