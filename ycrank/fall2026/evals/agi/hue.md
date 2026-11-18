# Hue -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

Path B, **New economies**, is Hue’s strongest route. Hue documents a workflow that reconstructs app state at a checkpoint from recorded agent requests and gives each test run an isolated copy. For teams that ship agents into email or CRM systems, the seed-stage hypothesis is that this makes it economical to turn routine production failures into regression tests. Those teams might currently reserve manual reconstruction for severe failures. Hue describes the workflow, and the labor savings and newly viable testing frequency remain unmeasured. (The Idea, Defensibility)

At equivalent replay fidelity, the cost comparison is manual fixture setup and reset versus trace capture, redaction, reconstruction checks, and any manual repair when fields are missing. For scale, the relevant unit is the next customer’s recurring replay runs. Subscription or usage revenue would need to cover compute, exception support, and the cost of keeping app replicas current. The memo provides no measured inputs for that calculation. Its 69,000 weekly SDK downloads show distribution activity, while paid adoption and repeat use by the target teams remain unknown. The founders’ prior work shipping agents supports a seed-stage execution case. (Key Risks, The Idea, Market & Traction, Key Facts, Founders & Team)

### Countercase

Even if replay automation opens up more frequent testing, customers could get the same outcome elsewhere. Ancha already offers commercial trace-to-world replay, and ClawsBench implements stateful Gmail and Slack simulations with snapshot restoration. A library of Hue checkpoints could make switching costly, but that advantage is inferred. The memo contains no buyer preference or retention evidence under functional parity. Competitive overlap weakens value capture without establishing easy substitution. It also leaves Path A without a separate case for a bottleneck Hue controls. Both Path B conditions remain open, so a feasible trial supports Watch. (Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 11/25 |
| Durable value capture | 5/25 |
| Customer demand | 5/20 |
| Team and execution | 9/15 |
| Scale economics | 4/15 |

**Total Score: 34/100** (Pass)

### Decisive diligence question

Will teams that previously skipped routine regression replay pay to keep running it on Hue after a side-by-side trial with a credible alternative using the same models? Measure human time per usable regression at matched fidelity, including redaction and repair, then observe whether teams repeatedly pay for the newly viable tests and why they choose Hue. Material labor savings and sustained paid preference would support Reach out if the rescored case clears the outreach gates. Savings erased by exception work, or buyers readily switching at parity, would move the action to Pass.
