# Plover Labs -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

**Path B — New Economies.** Enterprise engineers currently review agent-written changes before merge. Plover turns recurring repository failures into deterministic checks. The market-opening hypothesis is that those checks could make low-priority changes economical to ship routinely when engineer review previously kept them in the backlog. Fieldguide reported 40% higher merged PR throughput in Forge’s first production quarter, with flat rollback rates and defect severity. That supports the mechanism in a live workflow, while leaving open how much engineer time was saved and whether any previously deferred work became economical. (The Idea; Market & Traction)

Under the scenario assumption that rivals have equally capable models, Plover’s best reason for buyers to stay is its ability to build and maintain repository-specific regression checks. Fieldguide uses Plover’s evaluation system to test proposed fixes against previously shipped work. Recreating that coverage could impose switching costs, depending on who owns the checks and how readily they transfer. Plover reports five-figure monthly contracts with Envoy and Fieldguide. Those reported commitments support demand for verification, while paid repeat use for newly viable work remains unproven. (Defensibility; The Idea)

Forge produced merge-ready patches on 37 of 40 retrospective tasks, evidence that the joint implementation worked on real repository tasks. Fieldguide also reported 1.3–1.6× faster merges for Forge-authored PRs. Merge speed measures elapsed time. To establish repeatable economics per repository, Plover needs to show lower labor and full delivery cost per successfully shipped change after counting check setup and maintenance, engineer review, retries, exceptions, and inference. (Market & Traction; Key Risks)

### Countercase

Plover may speed up an existing review workflow while leaving the labor bottleneck in place. A Forge patch passed component tests but missed a required integration. Fieldguide added a regression case and retained engineer approval at merge. GitHub’s required checks and automated review also give buyers a credible way to reproduce parts of the workflow. The approval requirement leaves the market-opening gate unresolved, and the feature overlap leaves model-parity value unresolved. A production comparison can test both. (Key Risks; Defensibility)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 14/25 |
| Durable value capture | 9/25 |
| Customer demand | 12/20 |
| Team and execution | 10/15 |
| Scale economics | 6/15 |

**Total Score: 51/100** (Neutral)

### Decisive diligence question

Can a paying enterprise repeatedly ship a defined class of previously deferred changes at lower fully loaded cost and comparable defect and rollback rates, then choose to renew Plover after trialing an equivalent model with native merge controls? A production trial that demonstrates both would move the action to **Reach out**. If the trial shows that review and exceptions erase the savings or that the buyer switches while preserving the outcome, move to **Pass**.
