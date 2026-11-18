# Limnion -- Exit Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

Strategic acquisition is Limnion’s strongest private exit path. An observability or incident-response platform could buy Limnion to bring self-hosted, agent-queryable telemetry storage to customers faster. Snowflake’s acquisition of Observe and ServiceNow’s acquisition of founder Todd Persen’s prior company, Era Software, show that buyers have acquired adjacent capabilities. The ownership case for Limnion is conditional. A production-qualified deployment capability and transferable customer relationships could save a buyer meaningful engineering time and accelerate sales. The memo leaves those benefits unmeasured. (*The Idea*, *Market & Traction*, *Founders & Team*)

The memo records a shipped release and bounded single-node smoke tests, alongside a failed 72-hour endurance test and pending failover and tenant-isolation qualification. Limnion says high telemetry volumes drive up costs and reports its own AWS tests at 1 TB and 2.02 billion rows. The next operating milestone is a paid production deployment that clears those reliability gaps and measures savings against the customer’s existing stack. The reported $500,000 note leaves its conversion terms, available runway, and funding for that deployment unverified. Paid production adoption and buyer willingness to pay remain open, which drives Low confidence. (*The Idea*, *Defensibility*, *Market & Traction*, *Key Risks*)

**Proceeds bridge.** Using the illustrative $500,000 check, 3% diluted ownership, and no follow-on, the 5× objective requires $2.5 million in cash within eight years. That requires $83.3 million in distributable equity at 3% ownership, or $125 million at 2%. For both sale scenarios, assume zero net debt and transaction costs, so enterprise value equals equity consideration. Assume simple pro rata allocation with no preference adjustment and all cash at close, with zero stock, escrow, earnout, rollover, or separate compensation. The memo leaves actual deal terms and the shareholder waterfall unknown. The prices below are scenario assumptions. (*Market & Traction*)

- **Modest sale in year four.** $30 million yields $900,000 to the investor, or 1.8× gross.
- **Strong sale in year six.** $100 million yields $3 million, or 6.0× gross. At 2% ownership it yields $2 million, or 4.0×.
- **Prolonged private through year eight.** Growth plateaus, buyers stay away, public scale remains out of reach, and the company reinvests cash. The investor realizes $0, or 0.0×, and retains the shares. The memo supplies no independently supported route to holder cash in this scenario. (*The Idea*, *Market & Traction*, *Key Facts*)

### Countercase

A platform could reuse Siglake’s Apache-2.0 code or offer a comparable integration. Observe already combines OpenTelemetry ingestion with Iceberg storage in a customer-owned bucket. That overlap weakens the reason to buy Limnion, especially while its production capabilities remain unqualified and customer data sits in customers’ own stores. The memo leaves ownership and transfer rights for any assets beyond the open-source code unverified. The evidence supports Watch. It leaves open whether a production-proven capability could justify a price above the investor’s hurdle, so the structural Pass override does not apply. (*The Idea*, *Defensibility*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Counterparty rationale or source of cash | 11/30 |
| Plausible investor proceeds | 8/30 |
| Milestones and capital needed | 8/20 |
| Transaction feasibility | 5/10 |
| Independent alternatives | 2/10 |

**Total Score: 34/100** (Pass)

### Decisive diligence question

Will an observability platform document, after a paid production deployment, that owning Limnion’s transferable deployment capability would save enough time or generate enough incremental profit over code reuse or partnership to justify a price that clears the holder’s cash hurdle? A buyer-backed build-versus-buy analysis grounded in measured production results, with a price range that clears the hurdle under the applicable ownership and waterfall, would move the action to Reach out.
