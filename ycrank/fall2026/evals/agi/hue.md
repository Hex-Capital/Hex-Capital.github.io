# Hue -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

Hue’s strongest path is **scarce complements**. The candidate bottleneck is access to realistic, repeatable app state for reproducing production agent failures. Hue documents reconstructing a selected checkpoint from retained tool observations and giving each run an isolated copy. If the checkpoint preserves the state that caused a failure, teams could rerun that failure across agent versions without rebuilding the fixture by hand. The memo reports growth in observed MCP tool calls, a directional signal for testing demand. It contains no comparative results showing how often Hue reproduces failures that mocks, empty sandboxes, or competing simulators miss. The memo also leaves the New Economies gates open, with no measured labor savings per successful replay, previously excluded use, or buyer preference under model parity. (The Idea, Market & Traction, Key Risks)

Hue’s checkpoint workflow could make accumulated regression cases costly to migrate. That is an inference, with retention and migration behavior untested. The memo reports 69K weekly npm downloads and documents paid-plan terms, while paid deployments and repeat buyer use remain unverified. The two founders have relevant agent-building experience, report building test and replay infrastructure in prior roles, and have shipped SDKs. Independent field results on replay fidelity are the next execution gap. (Defensibility, Market & Traction, The Idea, Founders & Team)

The relevant scale unit is a usable regression replay. **Scenario assumption:** Reusing a checkpoint across releases spreads setup and reconstruction costs over more successful runs. Contribution would depend on subscription and usage revenue covering isolated-run compute, replica maintenance, and human work for failed reconstructions or privacy exceptions. The memo gives no pricing, replay success rates, or operating costs to validate that bridge. (The Idea, Key Risks)

### Countercase

Realistic app state may be broadly available from competing tools. Ancha already offers trace-to-world conversion, and open-source ClawsBench offers stateful Gmail and Slack simulations with snapshot restoration. Hue also discloses that unobserved fields can remain absent and that sparse traces can prevent reconstruction. Together, those facts weaken the scarcity case. The memo leaves open whether the closest alternative can reproduce the same consequential failures under the same data restrictions, so the path stays on Watch. (Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 12/25 |
| Durable value capture | 7/25 |
| Customer demand | 5/20 |
| Team and execution | 10/15 |
| Scale economics | 4/15 |

**Total Score: 38/100** (Pass)

### Decisive diligence question

Will independent agent teams renew paid use of Hue after testing it against the closest alternative on their own production failures? Move to **Reach out** if teams renew because Hue consistently reproduces consequential failures the alternative misses under the same data restrictions. Move to **Pass** if the alternative matches Hue on those failures and teams switch readily.
