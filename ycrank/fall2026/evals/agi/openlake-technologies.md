# OpenLake Technologies -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path B — New Economies** is the strongest path. OpenLake launched a workflow that post-trains models on incoming data, serves updates on the existing deployment, and A/B tests versions. OpenLake describes the former workflow as an in-house cycle of data preparation, training, evaluation, and redeployment. The investment hypothesis is that automating this cycle could let a team with limited engineering capacity update a production model more often than it could previously afford. OpenLake reports that its models halve serving costs on average. The memo gives no before-and-after labor or full delivery cost per update that meets production quality and governance requirements. That comparison would need to include staff time, compute, review, retries, and failed updates. (The Idea; Market & Traction; Key Risks)

An unnamed customer reportedly used OpenLake to train and evaluate Security-One for production. That supports early demand for the workflow, while paid repeat use at a previously unaffordable cadence remains unverified. Under the assumption that equivalent models are cheap and widely available, customer-specific data connections and evaluation histories could make OpenLake worth paying for if they measurably reduce the effort of releasing reliable updates. The memo gives no buyer comparison or retention evidence for that mechanism. (Market & Traction; Defensibility)

The shipped platform and Balyan’s distributed systems experience support seed-stage execution credit. The expansion unit is another production deployment running recurring update cycles. Shared cache and checkpoint infrastructure could help serve those deployments, conditional on per-customer integration and exception handling staying manageable. OpenLake’s reported 100B-plus tokens per day spans the company, and the memo provides no continuous post-training pricing or realized contribution. (Founders & Team; Defensibility; Market & Traction; Key Facts)

### Countercase

OpenLake may make an existing workflow more convenient for teams already able to post-train models. Together AI and Fireworks offer managed post-training and inference, and OpenLake’s exportable checkpoints make it possible to move trained models. A rival using the same models could plausibly match the workflow closely enough that buyers retain the core outcome after switching. The memo contains no observed switching or equivalent-workflow comparison that closes Path B. It also gives no evidence of a binding capacity constraint that OpenLake controls, leaving Path A unsupported. Both Path B conditions remain open to a specific test, so the action is Watch. (The Idea; Defensibility; Market & Traction; Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 10/25 |
| Durable value capture | 7/25 |
| Customer demand | 7/20 |
| Team and execution | 10/15 |
| Scale economics | 5/15 |

**Total Score: 39/100** (Pass)

### Decisive diligence question

Will an independent buyer that previously could not afford frequent production updates pay to renew at a price that covers OpenLake’s delivery costs after comparing it with the buyer’s prior workflow and a credible alternative using equivalent models? A field trial showing lower labor and full cost per accepted update, a newly affordable cadence, and a paid renewal tied to a measurable workflow advantage would move the action to Reach out. A representative trial showing that the cadence remains uneconomic or that the buyer switches and retains the core outcome would close Path B and move the action to Pass.
