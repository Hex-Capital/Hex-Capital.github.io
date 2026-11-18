# Armorer Labs -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements.** The strongest candidate bottleneck is the engineering capacity to verify and fix security issues in production agents at regulated companies. The memo cites an industry finding that roughly two-thirds of high-risk AI findings remain unresolved. That establishes a backlog, while its cause remains uncertain. Armorer says it tests proposed fixes against existing workflows before engineers approve them. If cheaper intelligence puts more agents into production, and those checks reduce engineer time per verified fix, Armorer could expand the remediation capacity available to regulated security teams. The memo gives no production measurement of that gain. (*The Idea*, *Key Risks*)

Armorer reports 98% accuracy at 1.9 ms median latency in a 50-document comparison. That is a narrow runtime performance signal. The memo also records a completed SOC 2 Type 1, an early qualification signal. Durable control remains hypothetical. Customer-specific regression tests and approval histories could make Armorer costly to replace if buyers rely on that accumulated evidence for production approvals. (*Defensibility*, *Key Facts*)

A Just Eat Takeaway engineering director credited Armorer with resolving a security problem. SnapLogic discussions show exploratory interest, and payment and repeat use remain unknown. The founders’ prior AWS security work and Armorer’s published tooling and enterprise launch support a plausible U.S. seed case, with regulated production rollout still to prove. Under an assumed annual enterprise contract, contribution per deployment would depend on contract value after runtime compute, onboarding, and ongoing support. The reported CPU-based guard offers a plausible route to low runtime cost, while customer-hosted deployments could add integration work. Pricing and marginal delivery costs are unmeasured. (*Market & Traction*, *Founders & Team*, *The Idea*, *Key Risks*, *Key Facts*)

### Countercase

With abundant capital and equivalent models, a funded security vendor could bundle workflow-tested fixes with the controls a buyer already purchases. The memo identifies existing open-source runtime enforcement and overlapping commercial suites. The company-run benchmark does not establish an advantage on real remediation workloads, and buyer switching behavior is unknown. Path A’s control gate remains open because the alternatives establish substitution risk without demonstrating equivalence across the full workflow. Path B also lacks affirmative evidence that labor savings unlock a previously uneconomic buyer or verification cadence, or that buyers would pay Armorer under functional parity. (*The Idea*, *Defensibility*, *Market & Traction*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 11/25 |
| Durable value capture | 7/25 |
| Customer demand | 8/20 |
| Team and execution | 10/15 |
| Scale economics | 5/15 |

**Total Score: 41/100** (Pass)

### Decisive diligence question

Will a regulated buyer commit to a paid production rollout after a side-by-side pilot against its best available alternative using comparably capable models? The pilot should show more verified fixes per engineer-hour at equivalent safety and regression quality, counting reviews, retries, and exceptions. The buyer’s rollout decision should identify what it would lose by switching, such as qualification evidence it would have to rebuild. A pass on both tests with a paid commitment would support **Reach out** if the resulting evidence lifts the score to at least 65 with medium or high confidence. Equivalent performance and a buyer decision to use the alternative would support **Pass**.
