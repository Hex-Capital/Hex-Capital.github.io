# FlashDrive -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements.** The potential bottleneck is keeping shared files consistent when agents write concurrently from laptops, cloud sandboxes, and CI. The memo records the launch of managed parallel agents. The investment inference is that cheaper intelligence could lead teams to run more agents in parallel, making file reconciliation more costly. FlashDrive says its macOS and Linux mounts and MCP access let agents work on the same files, with concurrent Markdown and CSV edits merged or both versions preserved. If that works reliably across environments, teams could spend less time reconciling writes and rerunning jobs. The memo provides no representative benchmark for that result. (The Idea, Market & Traction, Key Risks)

FlashDrive launched with free early access and recorded 28,040 launch-post views. Buyer commitments, paid use, and repeat deployments remain unknown. The founders previously built products together, and Dalton led B2B product and pre-sales. That supports early execution, while production reliability under interrupted or concurrent writes remains unverified. (Market & Traction, Founders & Team, Key Facts, Key Risks)

**Scale scenario.** If FlashDrive charges per workspace, each added workspace would need to cover storage, sync and merge compute, egress, and support. Streaming only the bytes agents access could reduce transfer costs. The founder’s announced unlimited free egress leaves FlashDrive exposed to heavy usage, and the memo gives no pricing or measured cost per workspace. (The Idea, Key Facts)

### Countercase

With abundant capital and equally capable models, sandbox providers could add enough file coordination to make a separate drive unnecessary. AWS already offers shared S3-backed files across agent sessions, Daytona offers shared volumes, and Layven offers attributed file versions and rollback. These are credible substitutes for parts of the workflow. The memo contains no head-to-head evidence that they handle FlashDrive’s claimed cross-environment merge workload equally well, so they weaken the control case without closing Path A. Path B lacks evidence that FlashDrive makes a previously uneconomic workflow viable or that buyers would pay under functional parity. At this early stage, a comparative pilot can test the remaining Path A premise. (Defensibility, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 9/25 |
| Durable value capture | 7/25 |
| Customer demand | 5/20 |
| Team and execution | 8/15 |
| Scale economics | 4/15 |

**Total Score: 33/100** (Pass)

### Decisive diligence question

Will an independent team commit to a paid deployment after testing FlashDrive against its best available storage alternative on a live workflow spanning local machines, cloud sandboxes, and CI? The pilot should measure lost edits, manual reconciliation time, and delivery cost per successful run, including interrupted writes. A repeatable reliability advantage that the buyer will pay for at a price that covers delivery could move the action to Reach out if the updated score clears 65. Equivalent results from the alternative and no willingness to pay would move it to Pass.
