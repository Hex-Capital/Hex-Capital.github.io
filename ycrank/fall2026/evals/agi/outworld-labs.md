# Outworld Labs -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements.** The potential bottleneck is trustworthy training and evaluation for dexterous robots. Physical trials require operators and repeated resets, while inaccurate contact physics can make simulated results unreliable on hardware. If cheaper intelligence lets robot foundation-model teams train and test more policies, teams could run into that physical testing constraint more often. Outworld says Horizon fits its manipulation simulator to measured robot behavior and reports agreement. The Fall 2026 launch and demo establish early execution, alongside the founders’ robotics research experience. The memo gives no head-to-head results on held-out hardware tasks or evidence of buyer commitment. (The Idea, Market & Traction, Founders & Team, Key Facts)

**Scale scenario.** If Outworld can reuse calibration across robot setups, each deployment could save operator and reset time at a given hardware success rate. The savings need to cover physical measurement, calibration, compute, and hardware validation, including retries after failed transfers. The memo supplies neither measured inputs for that comparison nor pricing. (Defensibility, Key Risks, The Idea)

### Countercase

MuJoCo Playground already offers hardware-trajectory fitting, SuperDex offers open tactile contact simulation, and Isaac Sim / Newton offers integrated training and evaluation. With abundant capital and equal access to models, customers and competitors could combine these capabilities. Horizon’s integrated workflow is a plausible advantage, but repeated physical calibration could erase the savings and leave buyers little reason to pay for it. The memo establishes overlapping capabilities and leaves end-to-end substitutability unresolved, so the Path A override is untriggered. Path B lacks evidence of a newly viable buyer or transaction and a reason to pay under model parity. A buyer-run comparison remains a credible seed-stage milestone, which supports Watch. (The Idea, Defensibility, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 10/25 |
| Durable value capture | 7/25 |
| Customer demand | 5/20 |
| Team and execution | 8/15 |
| Scale economics | 4/15 |

**Total Score: 34/100** (Pass)

### Decisive diligence question

Will an independent robot foundation-model team pay to qualify Horizon on a second robot setup after a head-to-head trial against its best available alternative? The trial should use the same policy and task, check success on held-out hardware trials, and count all calibration, compute, operator, reset, and validation costs. A material cost advantage at equivalent hardware performance that carries over to the second setup and earns a paid commitment would support Reach out if the updated score reaches 65 with at least medium confidence. A credible substitute matching Horizon on performance and all-in cost, with the buyer unwilling to pay for Horizon, would move the action to Pass.
