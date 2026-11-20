# Superserve -- AGI Evaluation

**Action:** Pass  
**Evidence confidence:** Medium

### Company case

Superserve gives long-running coding agents isolated environments that preserve files and processes between turns. The company says its microVMs can pause and resume with memory and disk state intact while compute billing stops. The memo documents rising sandbox adoption, suspendable Firecracker VMs from AWS, and several interchangeable providers for external sandbox execution. This establishes demand for stateful execution, but supplies no evidence that a shortage of suitable sandboxes is blocking deployments or that equivalent capacity would be slow to add. (*The Idea*, *Defensibility*, *Market & Traction*)

The enabled-industry path also scores zero. Under the prior delivery model, teams had to build and operate their own sandboxes. Phaser says it launched its Game Agent in under a month without building or maintaining new infrastructure. That supports a reduction in setup work from managed hosting. The memo identifies no previously excluded buyer or use made viable by AI lowering the cost per successful outcome. Isolated execution remains a distinct service under model parity, but that alone does not establish the economic threshold. (*The Idea*, *Market & Traction*)

Full-state snapshots and copy-on-write storage could make Superserve attractive for customers with long pauses between turns. Switching friction from saved state and policies is an inference, with no retention or migration evidence to establish durable value capture against documented substitutes. Lindy and Phaser’s launch accounts show concrete use, and Superserve reports more than 100,000 machines per week, but paid conversion and repeat paid demand remain unverified. The shipped platform, measured performance, and team’s relevant platform and storage experience support seed-stage execution. Usage pricing and suspended compute billing explain the charging model, but the memo gives no provider-side cost per successful session to assess the economics of the next unit. (*The Idea*, *Defensibility*, *Market & Traction*, *Founders & Team*, *Key Risks*, *Key Facts*)

### Countercase

The strongest case for outreach is that multi-day agents with long idle periods could exhaust the practical options for affordable state retention. Superserve advertises unlimited paid-plan runtime, E2B caps Pro sessions at 24 hours, and measured median snapshot starts were 0.56 seconds for Superserve versus 0.75 for E2B. Modal was faster from create request to first command. The evidence shows a workload-specific advantage worth testing, but no buyer has been shown to be blocked by equivalent providers. Both AGI paths therefore score zero, triggering Pass. (*The Idea*, *Market & Traction*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 0/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 4/20 |
| Customer demand | 9/15 |
| Team and execution | 7/10 |
| Scale economics | 2/5 |

**Total Score: 22/150** (Pass)

### Decisive diligence question

Is affordable state retention a binding constraint on a real multi-day coding-agent rollout? A buyer-verified production comparison at planned volume would change the action to Reach out if it showed that the best available alternative could not meet the buyer’s state-retention and cost requirements on the rollout timeline and Superserve could. A faster resume or simpler integration alone would leave the action at Pass.
