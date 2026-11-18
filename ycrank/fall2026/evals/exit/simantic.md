# Simantic -- Exit Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

The strongest path is a **strategic acquisition by an embedded-toolchain vendor**. Owning Pyrite and its silicon-validation assets could let a vendor control which chips it supports and bundle firmware testing into its own development workflow. The memo documents proprietary licensing, bench comparisons against real silicon, and a hosted workflow that runs compiled firmware on pull requests. A student reported that the simulator matched a physical board in coursework. Simantic separately reported 1.5 million simulation runs and an unnamed satellite customer. Those signals support testing the acquisition thesis in production. The economic advantage of ownership remains an inference. (The Idea, Defensibility, Market & Traction)

The operating milestone is a production deployment that measures how much hardware-dependent validation Pyrite removes across the chips a buyer cares about. The roughly $600,000 raised and the working product make a focused test plausible. Burn, remaining runway, and the cost of expanding chip coverage are unknown. The proprietary license establishes how Pyrite is offered today. Rights to transfer the engine and validation assets remain unverified. The memo supplies no usable evidence of an acquisition price or an independent fallback that could pay this holder. (Defensibility, Market & Traction, Key Risks, Key Facts)

**Proceeds bridge.** The illustrative $500,000 check buys 5% at a $10 million post-money valuation and dilutes to 3%, with no follow-on checks. The eight-year objective is $2.5 million in gross cash, or 5×. That requires $83.3 million of distributable equity at 3% ownership, $125 million at 2%, or $62.5 million at 4%. For the modeled sales, assume enterprise value equals distributable equity after $0 in net debt, transaction costs, and senior claims. Apply a simple pro rata waterfall with all consideration paid in cash at closing. Stock, escrow, earnouts, rollover, and compensation each contribute $0. The prices and timing are scenario assumptions. (Market & Traction, Key Facts)

| Scenario | Timing and investor cash | Gross multiple |
|---|---|---:|
| Modest sale at $40 million enterprise value | Year 5, $1.2 million | 2.4× |
| Strong sale at $100 million enterprise value | Year 7, $3 million at 3% ownership or $2 million at 2% | 6.0× or 4.0× |
| Prolonged private ownership | Growth plateaus, buyers stay away, public scale remains out of reach, and cash is reinvested. The investor holds the shares and receives $0 through year 8. | 0× |

### Countercase

A toolchain vendor could license Pyrite or build on Renode. Veecle already demonstrates agent-led testing on Renode, and Simantic’s partial model coverage leaves some behaviors dependent on physical testing. Either substitute could cap what a buyer would pay below the investor’s hurdle. The memo leaves open whether those substitutes match Pyrite on the specific chips and workloads a buyer needs. That gap warrants Watch. The modeled $0 prolonged-private case alone does not trigger the Pass override. (The Idea, Defensibility, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Counterparty rationale or source of cash | 14/30 |
| Plausible investor proceeds | 8/30 |
| Milestones and capital needed | 11/20 |
| Transaction feasibility | 5/10 |
| Independent alternatives | 2/10 |

**Total Score: 40/100** (Pass)

### Decisive diligence question

Would a toolchain vendor’s production pilot show that owning Pyrite creates enough incremental value over licensing it or building on Renode to support a price that clears the holder’s cash hurdle? A buyer-validated comparison of validation coverage, engineering time, and the cost of each option would move the action to Reach out if the ownership economics credibly support that price.
