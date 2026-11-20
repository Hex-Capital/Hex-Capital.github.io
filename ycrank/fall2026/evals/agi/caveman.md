# Caveman -- AGI Evaluation

**Action:** Pass  
**Evidence confidence:** Medium

### Company case

Caveman reduces the context that coding agents reprocess during multi-step tasks. The share of GitHub pull requests starting with an agent draft rose from 17% to over 40% between March and September, so the cost of repeated context could affect more work. The memo documents a recurring expense and leaves open whether inference capacity limits these deployments, whether substitutes are scarce, or whether new supply would be slow to arrive. The building-blocks path scores zero. The enabled-industry path also scores zero because the memo identifies teams already running coding agents and supplies no concrete buyer, workflow, or cadence previously priced out. (*The Idea*, *Market & Traction*)

The strongest commercial case is selling cost and quality controls to teams already using agents. The proprietary harness and an open-source distribution channel with about 121,000 repository stars support some value capture. Workload-specific tests and rollout histories could raise switching costs, while Edgee’s existing compression offering shows buyers have alternatives. The free extension’s 10,000 displayed users show adoption of a cost-saving workaround. Conversion to paid Code or Cloud use remains unverified. Brussee shipped the local proxy, Cloud, and Code between August and November. The memo gives list prices but leaves the cost of serving the next customer, including inference and support, unquantified. Evidence confidence is medium because the launches and free usage are observable, while savings on the current harness come from company tests and paid deployment economics remain unverified. (*The Idea*, *Defensibility*, *Market & Traction*, *Key Facts*)

### Countercase

Caveman reports 21% lower list-price cost per solved task against Codex, with each solving 90 of 192 runs. If comparable savings hold on a team’s own workload after fees, failed runs, and human review, a team with a fixed budget could run routine agent-assisted maintenance at a cadence it previously could afford only sporadically. Workload-specific replay tests and rollback could give that team a reason to buy Caveman even with access to the same models. A separate test of the original skill found that fewer output tokens coincided with a higher total bill after one run crossed a long-context pricing tier. The benchmark makes the scenario plausible, but the memo documents neither a team crossing that affordability threshold nor a continuing need for Caveman under comparable model access. The Pass gate applies. (*The Idea*, *Market & Traction*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 0/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 8/20 |
| Customer demand | 5/15 |
| Team and execution | 7/10 |
| Scale economics | 2/5 |

**Total Score: 22/150** (Pass)

### Decisive diligence question

Can one paying team sustain a coding-agent workflow at a cadence its existing tools priced out? A workload-matched pilot using the same underlying models would change the action to **Reach out** if the team sustains that cadence within budget after fees, failed runs, and human review, and keeps paying for Caveman’s workload-specific quality controls. Savings confined to the team’s existing cadence would leave the action at **Pass**.
