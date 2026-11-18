# Graphide -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

Path A, scarce complements, is Graphide’s strongest fit. The potential bottleneck is fast, reliable CI validation for engineering teams running repeated checks on agent-generated changes. GitHub reported 3.26 billion Actions runs in September 2026, more than four times the prior-year month, and attributed rising infrastructure demand to coding agents. Graphide’s own benchmark reports at least a tenfold speedup on 19 of 24 jobs against GitHub baselines. That supports a plausible seed-stage mechanism. The benchmark leaves production gains uncertain because ten jobs were hand-tuned on 64- or 128-vCPU machines and customer runners topped out at 32 vCPUs. (The Idea; Market & Traction; Key Risks)

Graphide says it operates its own runners and maintains a shared optimization library. The investment hypothesis is that tuning learned on one repository can improve validation on the next, leaving customers with a performance advantage even when competing providers have equally capable models. The memo leaves that transfer unmeasured. Founder-reported accounts of unnamed teams switching show limited demand, with payment and renewal still unknown. The founders’ relevant VM orchestration and Linux experience, together with the shipped CI service, support seed-stage execution credit. A San Francisco infrastructure startup at first launch is a plausible fit for the seed-led mandate. (Defensibility; Market & Traction; Founders & Team; Key Facts)

The expansion unit is another repository on a fixed monthly CI quote. In a scale scenario, that fee must cover incremental runner compute, idle prewarmed capacity, and hands-on tuning and support. Parallel execution can reduce elapsed time while increasing compute consumed. The memo supplies a pricing structure and migration workflow, while utilization and contribution per customer remain unmeasured. (The Idea; Key Risks)

### Countercase

With abundant capital and access to equivalent models, Blacksmith and Depot could add similar tuning to their existing runner offerings. GitHub has already cut native runner rates, and Graphide depends on GitHub for eligible workloads. If a specialist can match time to a reliable result at sustainable pricing, Graphide’s control of its own fleet offers little protection. The memo establishes credible substitutes and leaves performance parity unresolved, so the Path A override remains untriggered. Path B has no separately supported case because the memo identifies improvements to existing CI and review workflows but leaves newly viable buyers or transactions and willingness to pay under model parity unproven. (The Idea; Defensibility; Market & Traction; Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 14/25 |
| Durable value capture | 8/25 |
| Customer demand | 7/20 |
| Team and execution | 9/15 |
| Scale economics | 5/15 |

**Total Score: 43/100** (Pass)

### Decisive diligence question

Can Graphide win paid renewals from independent engineering teams after a side-by-side production trial against their best specialist runner alternative? Use the same repositories and full test suites, customer-available hardware, and comparable access to models for tuning. Measure time to a reliable result and Graphide’s contribution after compute, idle capacity, tuning, and support. A repeatable advantage that persists on newly onboarded repositories and earns paid renewals at positive contribution would support Reach out if the updated score reaches 65 with at least medium confidence. Comparable results from the alternative at sustainable pricing would shift the action to Pass.
