# OpenHack -- Exit Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

A strategic acquisition by a developer-security platform is OpenHack’s strongest private exit path. The memo documents an open-source scanner and an enterprise offering. OpenHack says its product combines application mapping, live testing, and prioritized fixes, and reports that Papermark fixed a cloud-storage exposure it flagged. That example supports the value of a finding to a customer. The acquisition case is an inference: owning the workflow could give a platform control over how those capabilities are integrated and sold across its installed base. The memo gives no buyer economics or indication of acquisition interest. (*The Idea*, *Market & Traction*)

A paid production pilot could measure the improvement in confirmed, actionable findings per triage hour against the platform’s best alternative. OpenHack names launch users, and the memo reports $500,000 in accelerator financing. Those signals make a bounded pilot plausible at seed. Paid adoption, pilot cost, burn, and runway are unknown. The memo also leaves ownership and transfer rights for the commercial software and customer-specific maps unverified. Managed scans require temporary access to private repositories, so the acquisition case cannot assume that access would carry over to a buyer. No independent fallback has evidence that it could pay this holder. (*Market & Traction*, *Key Facts*, *Defensibility*, *Key Risks*)

**Proceeds bridge.** The memo gives no usable investment terms or exit pricing. The illustrative $500,000 check buys 5% initially, diluted to 3%, with no follow-on checks. A 5× gross cash return within eight years requires $2.5 million to the holder and about $83.3 million in distributable equity proceeds. The hurdle is $125 million at 2% ownership and $62.5 million at 4%. The sale cases below are sensitivities. Both assume zero net debt, deal fees, and preference adjustments, so enterprise value equals distributable equity value and the waterfall is pro rata. All consideration is cash at closing. Stock, escrow, earnouts, rollover, and compensation are each zero. (*Market & Traction*, *Key Facts*)

| Scenario | Assumed timing and outcome | Holder cash at 3% | Gross multiple |
|-----------|----------------------------|-------------------|----------------|
| Modest sale | $40 million enterprise value in year 5 | $1.2 million | 2.4× |
| Strong sale | $100 million enterprise value in year 7 | $3.0 million | 6.0× |
| Prolonged private | Through year 8, growth plateaus, buyers stay away, public scale remains out of reach, and cash is reinvested | $0, with shares still held | 0× realized |

Even the modeled strong sale returns only $2 million, or 4.0×, at 2% ownership. No memo evidence establishes a sale price near the hurdle or makes the prolonged-private scenario probable. Low confidence reflects the reliance on company-reported operating results and the absence of buyer economics.

### Countercase

A platform may be able to build or license enough of the workflow to meet customer needs. GitHub already offers native remediation, and Strix overlaps in scheduled testing, fix pull requests, and retesting. OpenHack’s own white-box benchmark found 277 of 761 planted vulnerabilities, leaving its incremental production benefit uncertain. A readily available substitute that caps buyer willingness to pay below the proceeds hurdle would trigger Pass. The memo establishes overlap and coverage gaps, with insufficient evidence to establish that price ceiling. (*Defensibility*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Counterparty rationale or source of cash | 14/30 |
| Plausible investor proceeds | 8/30 |
| Milestones and capital needed | 10/20 |
| Transaction feasibility | 5/10 |
| Independent alternatives | 2/10 |

**Total Score: 39/100** (Pass)

### Decisive diligence question

Can a paid production pilot with a potential platform acquirer show that owning OpenHack creates enough incremental value over the buyer’s best build or license option to support a sale clearing the $83.3 million equity hurdle at 3% ownership? Buyer-validated production results and economics that support that price would move the action to Reach out. A pilot that leaves the ownership advantage unmeasured keeps it at Watch.
