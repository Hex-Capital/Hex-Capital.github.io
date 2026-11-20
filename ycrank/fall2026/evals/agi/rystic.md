# Rystic -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

Rystic has a seed-stage building-blocks case in regression testing for write-enabled agents. The candidate bottleneck is access to isolated, resettable test environments that reproduce state changes across real services. If teams run more of these tests as they deploy more agents, shared staging and hosted sandboxes can become a constraint on release cadence. Rystic’s local simulators let teams seed state, inject failures, and check the resulting state across services. Tilo’s CTO reported running migration-assistant tests in CI without provisioning real service accounts. Rystic’s own Stripe benchmark reported 50 jobs in 19 seconds versus more than 40 minutes on shared sandboxes. That result shows a potential throughput advantage under the reported conditions. The scarcity of comparable test capacity remains unverified. (The Idea, Market & Traction)

The industry-enabled path earns zero. The memo attributes the savings to local simulation and reusable state. AI creates the workload, and the memo supplies no evidence that AI itself lowers delivery costs enough to open a previously uneconomic buyer, use, or testing cadence. (The Idea, Market & Traction)

Rystic’s live-API verification pipeline gives it an operating advantage, while switching costs from saved scenarios remain hypothetical. HJBL’s reported use of custom exchange simulators and Tilo’s reported CI use support buyer demand, with paid conversion and retention unverified. The launch of 17 simulators and the founders’ experience shipping infrastructure and AI integrations support execution at seed. Published prices establish the billing model. The memo gives no delivery or maintenance costs for estimating contribution on the next deployment, so scale economics stays at the default. (Defensibility, Market & Traction, Founders & Team, The Idea)

### Countercase

Rystic may be a faster test harness in a market with adequate substitutes. LocalStack already offers overlapping local emulators, and WireMock offers stateful local simulation. Rystic’s published agreement rates of 95.0% on Slack checks and 92.4% on GitHub Pulls checks leave room for gaps that could matter in release-gating CI. The evidence supports Watch because equivalent coverage from substitutes is plausible and remains untested for Rystic’s target workload. Demonstrated equivalence would eliminate the supported AGI path and trigger Pass. (Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 20/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 8/20 |
| Customer demand | 8/15 |
| Team and execution | 7/10 |
| Scale economics | 2/5 |

**Total Score: 45/150** (Neutral)

### Decisive diligence question

Can a team shipping a write-enabled agent use Rystic to run release-gating tests across multiple services at a cadence its best available alternative cannot sustain? A paid CI deployment that compares both options on the same workflows and checks release-critical behavior against live APIs would answer it. A sustained advantage in test cadence at the required fidelity would move the action to Reach out. Equivalent coverage and cadence from the alternative would move it to Pass.
