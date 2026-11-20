# Lyon -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path B — New Economies.** Lyon’s strongest case is that a bank could reuse one model trained on its transaction history across underwriting workflows, reducing the feature-engineering and maintenance labor now required for each workflow. The market-opening assumption is that this would let a bank serve a borrower segment it previously left unserved because building and maintaining a dedicated model cost too much. Lyon reports a 112% relative lift in default-prediction PR-AUC against one fintech’s existing tree-based model. That benchmark supports the technical premise. The memo gives no example of a newly served segment or a measured delivery-cost reduction. (*The Idea*, *Market & Traction*)

The fintech benchmark and reported work with an insurer are early engagement signals. Payment and repeat use remain unknown. The founders’ finance, machine-learning, and transformer experience, together with Lyon’s reported training run on tens of billions of transactions, support early execution. The expansion unit is one institution, with potential savings from reusing embeddings across its workflows. Each institution still requires its own training run, and the cost per underwriting decision at comparable quality remains unknown once compute, validation, monitoring, and human review are included. (*Market & Traction*, *Founders & Team*, *The Idea*, *Key Risks*, *Key Facts*)

### Countercase

Lyon may improve predictions for workflows banks already run. If frontier-quality models become cheap and widely available, a bank could use its own transaction data and public training tooling to build a substitute. The memo documents an in-house production precedent at Revolut. Lyon’s customer-cloud deployment and potential integration across multiple workflows give buyers a possible reason to keep paying for implementation and maintenance. Customers own the trained models, and the memo provides no retention or buyer comparison under functional parity. The in-house precedent makes substitution credible. Whether a target bank can match Lyon’s full delivery economics remains open, so the path warrants Watch. (*The Idea*, *Defensibility*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 10/25 |
| Durable value capture | 7/25 |
| Customer demand | 6/20 |
| Team and execution | 9/15 |
| Scale economics | 5/15 |

**Total Score: 37/100** (Pass)

### Decisive diligence question

Will an independent bank pay to expand a Lyon deployment for a previously unserved borrower segment after comparing it with a functionally equivalent in-house option? Move to Reach out if a representative trial shows that Lyon makes the segment economical at the bank’s required underwriting quality after compute, validation, monitoring, and review costs, and the bank funds an expansion after the comparison. If full costs still rule out the segment, or the bank matches the outcome in-house and declines to pay Lyon, Pass on this case.
