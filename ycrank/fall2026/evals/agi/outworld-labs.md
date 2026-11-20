# Outworld Labs -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

Horizon has a plausible building-blocks path in training and evaluating dexterous robot policies. The candidate scarce input is simulation that predicts real hardware behavior well enough to replace some physical trials. Outworld says those trials require operators and repeated resets, and that it calibrates Horizon’s contact physics against measured robot behavior. If teams test more policies as deployment grows, operator time and access to physical robots could constrain iteration. The memo leaves the severity of that constraint and Horizon’s ability to relieve it on customer workloads unverified. That supports Watch pending a comparative hardware test. *(The Idea; Key Risks)*

The industry-enabled path earns zero. Horizon targets an existing training and evaluation workflow, and the memo identifies no previously excluded buyer or use made viable by AI. *(The Idea)*

The public launch demo and the founders’ robotics research support early execution. Combining scene reconstruction, calibration, and evaluation in one workflow could save integration work, but repeatable setup savings and buyer preference remain unverified. The memo documents no buyer trials, commitments, or paid deployments. Pricing and delivery costs are also unknown, so the economics of serving the next customer remain unproven. *(Market & Traction; Founders & Team; Defensibility; Key Facts)*

### Countercase

A robotics team could get adequate results from existing tools. MuJoCo Playground already offers hardware-trajectory fitting, SuperDex supplies open-source tactile contact simulation, and Isaac Sim supports robot training and evaluation. If Horizon requires fresh measurements for each robot or task, calibration and transfer failures could consume the operator time it saves. The overlap establishes credible substitutes, while their equivalence on Horizon’s target workload remains untested. That gap keeps the action at Watch. *(Defensibility; Market & Traction; Key Risks)*

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 14/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 6/20 |
| Customer demand | 4/15 |
| Team and execution | 6/10 |
| Scale economics | 2/5 |

**Total Score: 32/150** (Pass)

### Decisive diligence question

Can a robot foundation-model team use Horizon to reach the same success rate on a held-out dexterous manipulation task with materially fewer physical robot and operator hours than its strongest existing workflow? A customer-run comparison should count calibration, resets, failed transfers, and retests. A material reduction would move the action to Reach out. Comparable effort and hardware success across both workflows would move it to Pass.
