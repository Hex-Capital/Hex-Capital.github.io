# Definite -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path B — New economies** is the strongest path. Definite says it uses AI to propose mappings between operational and finance records, then applies deterministic rules to calculate and check results. A plausible seed-stage use is weekly site-level margin reconciliation for a multi-site operator that currently reviews margins monthly because each reconciliation takes too much controller time. That cadence is a scenario assumption. The memo reports Definite’s claim that tracing operational changes can take controllers days and documents public positioning for the current product. Paid use and repeat behavior remain unverified. The reported bank deployments concern the prior regulatory-reporting product. (*The Idea*, *Market & Traction*, *Key Facts*)

Definite describes reproducible runs that preserve source records and approval history. That history could make switching costly if controllers rely on it for recurring reviews. The founders’ prior work on financial approval controls and analyst tools supports their ability to build the workflow, while repeat deployment across customer systems remains unverified. The scale test is the next site at an existing customer. Under the scenario, incremental software revenue would need to cover connector maintenance, site-specific setup amortized across runs, inference, and human review and exception handling. The memo identifies implementation and mapping risks but supplies no measured inputs for that calculation. (*Defensibility*, *Founders & Team*, *The Idea*, *Key Risks*)

### Countercase

Definite could make existing monthly work faster while leaving weekly reconciliation uneconomic. Customer-specific mapping and mandatory review can preserve much of the labor, and deterministic checks can still propagate a misclassified record. With cheap, equally capable models, finance teams could use native ERP agents for overlapping work. The memo identifies Microsoft’s Dynamics option, while comparative performance and willingness to pay at parity remain untested. The evidence leaves both Path B gates open and supports Watch. It identifies no separate bottleneck Definite controls under Path A. (*Key Risks*, *Defensibility*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 10/25 |
| Durable value capture | 7/25 |
| Customer demand | 6/20 |
| Team and execution | 8/15 |
| Scale economics | 5/15 |

**Total Score: 36/100** (Pass)

### Decisive diligence question

Will independent multi-site operators pay to keep running weekly site-margin reconciliations they previously skipped on cost grounds when offered an equally capable alternative? A paid pilot across several cycles should compare equivalent accuracy and auditability, count setup, review, retries, and exceptions, and test whether buyers renew at a price that covers delivery. Repeat paid use with material labor savings and a demonstrated preference at parity would support Reach out once the score and confidence gates clear. If the trial shows that the extra reconciliations remain uneconomic or that buyers readily switch at parity, move to Pass.
