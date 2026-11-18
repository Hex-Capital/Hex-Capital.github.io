# Tilo -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path B, New economies, is Tilo’s strongest path.** Tilo has built an early-alpha desktop where people and agents can work on the same live app state. Typed actions, attributed changes, undo, and permission checks could reduce the supervision and rework needed to complete multi-app jobs. The buyer hypothesis is a team whose recurring jobs are too low-volume to justify bespoke integrations or ongoing human review. Tilo reports about 1/29 the execution cost and 90× the speed on one same-model task, but the comparison run failed. The test supports trying the mechanism in a real workflow. It leaves labor per successful job at equivalent quality unknown. (The Idea, Market & Traction, Key Risks)

Tilo’s public code implements workspace history, permissions, and sync across apps that share a common state-and-action model. Teams might pay to keep their integrations and attributed history in a managed workspace even when they can access the same models elsewhere. The memo records no target-buyer commitment, paid repeat use, or preference under model parity. Tilo’s San Francisco pre-seed profile fits the seed-led mandate, and its prototype makes a buyer trial feasible. (Defensibility, Market & Traction, Key Facts)

**Scale scenario.** If Tilo charges per hosted workspace, expansion depends on how many teams can run recurring jobs with the app coverage Tilo can support and how many workspaces each team pays for. Tilo reports 50 agents sharing one laptop workspace at about 60 MB per agent, an early indication of compute density. Contribution per additional workspace would depend on the fee collected after compute, any inference Tilo pays for, and incremental integration, support, and recovery costs. The memo supplies no pricing or operating data to validate that bridge. (The Idea, Market & Traction, Key Risks, Key Facts)

### Countercase

A buyer with cheap frontier intelligence could keep its existing desktop and use native agent features or APIs for legacy workflows. A team that values Tilo’s architecture could also self-host its open-source desktop. If buyers need custom integrations for key apps or spend substantial time recovering from failures, the labor savings may disappear. Tilo’s alpha backup guidance makes recovery a concrete cost to measure. These risks leave both Path B gates open for testing. The memo also offers no independent Path A case for a scarce capability whose economics Tilo controls. (The Idea, Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 12/25 |
| Durable value capture | 8/25 |
| Customer demand | 5/20 |
| Team and execution | 9/15 |
| Scale economics | 6/15 |

**Total Score: 40/100** (Pass)

### Decisive diligence question

Will independent teams repeatedly pay for a hosted Tilo workspace to run a recurring multi-app job they previously found uneconomic, when they can use the same model on their existing stack or self-host Tilo? A paid pilot should compare equivalent-quality completed jobs and count integration, review, retries, exceptions, and recovery. Measured labor savings and repeat payment at a price that covers incremental delivery costs would support Reach out if the updated score clears 65. A representative trial that shows the job still needs too much labor or that buyers readily switch to equivalent alternatives would move the action to Pass.
