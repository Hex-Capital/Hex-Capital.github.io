# Limnion -- AGI Evaluation

**Action:** Pass  
**Evidence confidence:** Low

### Company case

Both AGI paths score zero. For building blocks, the relevant workload is incident-investigation agents querying logs and traces. Siglake gives agents read-only SQL access to telemetry stored in the customer’s own Iceberg tables. Limnion reports rising telemetry costs at high volumes. More frequent agent queries could strain investigation budgets, but the memo documents neither a deployment held back by that constraint nor a reason comparable capacity would be slow to add. For industry enablement, the software supplies data access to existing reliability teams. The memo gives no evidence that agents cut human effort per resolved incident enough to make a previously unaffordable use viable. Comparable models would still need access to the telemetry, which other backends can also supply. With both paths unsupported, the rubric calls for Pass. (The Idea, Key Risks)

The strongest commercial case is a managed deployment in the customer’s cloud account, which Limnion lists as in development. Customer ownership of the data and a permissive software license limit Limnion’s control. The 854 GitHub stars and 11 forks show developer interest. The memo records no buyer trial, qualification, or payment. Persen’s prior observability work and the shipped v0.4.1 release support execution credit. The release notes record a failed 72-hour endurance test and pending failover and tenant-isolation qualification. The memo provides no managed price or delivery costs to estimate contribution from the next deployment. (The Idea, Defensibility, Market & Traction, Founders & Team, Key Risks)

### Countercase

If incident agents query deeper telemetry more often than human operators, affordable query capacity could become a deployment bottleneck. Siglake’s independently scalable services and company-run AWS tests at 1 TB make that scenario plausible. The tests leave open whether Siglake can sustain a representative agent workload within a buyer’s budget, and Observe’s Iceberg preview already offers an alternative route to queryable, customer-owned telemetry. The scenario falls short of the outreach gate. (Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 0/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 3/20 |
| Customer demand | 4/15 |
| Team and execution | 6/10 |
| Scale economics | 2/5 |

**Total Score: 15/150** (Strong Pass)

### Decisive diligence question

Can Siglake sustain the production investigation cadence a buyer has been unable to deploy with available backends? A buyer-run comparison on representative telemetry would change the action to Reach out if it showed that Siglake meets the buyer’s required query latency, reliability, and fully loaded cost while realistic alternatives cannot. (The Idea, Key Risks)
