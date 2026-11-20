# Nodus Compute -- Exit Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

The strongest route is a strategic acquisition by a GPU cloud operator such as Runpod. Nodus documents owner-first routing and the ability to lend idle hosts. A buyer could use that combination to sell more compute from existing fleets while preserving priority for fleet owners. Nodus reports a 7.65× cold-start speedup in a verifier run on one A100. That result supports the value of snapshot recovery on the tested workload. The buyer economics of fleet-wide sharing remain an inference. (*The Idea*, *Defensibility*, *Market & Traction*)

The milestone is a paid deployment across multiple fleets that shows repeatable utilization gains and positive net savings after host reclaims, retries, and recovery costs. The founders report that more than 200 teams joined after launch, which suggests a pool of potential pilot users. Paid usage, a funded pilot, and runway are unverified, and the memo gives conflicting funding figures. (*Market & Traction*, *Key Risks*)

The benchmark assumes a $500,000 check at a $10 million post-money valuation, diluted from 5% to 3% with no follow-ons. A 5× gross return requires $2.5 million in cash within eight years, or about $83.3 million in distributable equity at 3% pro rata ownership. The prices below are scenario assumptions. The memo records published usage rates and provides no realized revenue, buyer valuation, or transaction terms to support an exit price. (*Key Facts*, *Market & Traction*)

| Scenario | Assumed bridge to holder cash |
|---|---|
| Modest sale | $50 million enterprise value with zero net debt and deal adjustments leaves $50 million in distributable equity. At 3%, the holder receives $1.5 million, or 3.0×. |
| Strong sale | $100 million enterprise value less $10 million in assumed net debt and deal adjustments leaves $90 million in distributable equity. At 3%, the holder receives $2.7 million, or 5.4×. If 20% of the holder’s consideration rolls into buyer equity, cash at close falls to $2.16 million, or 4.32×. |
| Prolonged private | Continued operation with cash reinvested and no eligible share purchase yields $0 in realized proceeds within eight years. The memo supplies no evidence of an independent payout route. |

The full-cash sale cases assume the holder can sell the entire stake, receives a pro rata share after the waterfall without preference leakage, and is paid at closing within eight years. Holder rights, transfer permissions, and the ability to assign fleet agreements are unverified. The strong case shows what would clear the hurdle. Watch reflects the need for evidence that a buyer would pay that price.

### Countercase

A GPU operator could build enough of the functionality itself. SkyPilot already pools customer infrastructure across clouds, and Cast AI offers GPU scheduling. The pooling benchmark used synthetic tenants and replayed traffic on one node. Host reclaims can strand jobs, and host visibility into job data can force sensitive workloads into private pools. Together, those limits could shrink the workloads available for sharing and weaken the economic case for acquiring Nodus. The evidence supports a credible build alternative while leaving open whether it can deliver comparable fleet economics. No Pass gate is established. (*Defensibility*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Counterparty rationale or source of cash | 17/30 |
| Plausible investor proceeds | 8/30 |
| Milestones and capital needed | 11/20 |
| Transaction feasibility | 5/10 |
| Independent alternatives | 2/10 |

**Total Score: 43/100** (Pass)

### Decisive diligence question

Can Nodus demonstrate enough net savings across paid fleet deployments to make acquisition economically preferable to an internal build for a GPU cloud operator? Production results against the operator’s existing scheduler, including reclaim and recovery costs, would answer the operating question. If those results support a defensible acquisition range that clears $83.3 million in distributable equity under plausible deal terms, the action moves to Reach out.
