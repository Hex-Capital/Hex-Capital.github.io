# ByteAsk -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

**Path B — New Economies.** ByteAsk could make C++ performance work economical for teams that defer it because engineers must trace build variants, validate patches on target hardware, and review changes by hand. ByteAsk reports that its build-aware workflow matched Codex CLI at 129 successful runs out of 144 while costing 68% less in a same-model test. That comparison supports a cost advantage on the tested tasks. The market-opening scenario assumes those savings survive setup, verification, retries, and review, and bring previously deferred work within a buyer’s budget. The memo leaves that comparison open. (*The Idea*, *Defensibility*, *Key Risks*)

Nodus reported 2.3× co-located decode throughput and 52% higher co-located training throughput during a 30-day pilot. Zith’s creator reported using ByteAsk to rebuild a C++ compiler core, and the memo records a plan migration for existing paid CLI subscribers. Those are early signals of use and payment, with repeat paid demand for previously deferred work still unproven. Customer-specific build settings and hardware gates could give teams a reason to keep paying under model parity if replacing them requires substantial requalification. The memo documents their use at Nodus and leaves replacement cost unmeasured. (*Market & Traction*, *Key Facts*, *Defensibility*, *Key Risks*)

The founders bring trading-system C++ and agent engineering experience and have shipped a CLI and an integration for existing agents. For scale, the unit to test is an accepted change on a new customer build and hardware target. Nodus logged 150 hours of engineer review. A repeatable cost advantage requires savings against the former workflow after counting that review, build setup, hardware and sandbox time, and failed runs per accepted change. The memo gives neither the accepted-change count nor the prior labor baseline needed to calculate that advantage. (*Founders & Team*, *The Idea*, *Key Risks*)

### Countercase

ByteAsk may help existing engineering teams do work they already fund while leaving the economics of deferred work unchanged. Nodus’s throughput gains measure what the patches achieved, while its review hours show that engineer time remained a material input. Cursor and Harness already offer adjacent workflows and could bundle comparable verification. Giving rivals equivalent models leaves ByteAsk’s build integration as a plausible reason to stay, with no observed buyer preference under comparable verification. Both Path B conditions remain testable, so Watch is warranted. (*Market & Traction*, *Key Risks*, *Defensibility*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 12/25 |
| Durable value capture | 9/25 |
| Customer demand | 10/20 |
| Team and execution | 10/15 |
| Scale economics | 7/15 |

**Total Score: 48/100** (Neutral)

### Decisive diligence question

Will an independent C++ team pay for a second round of previously deferred performance work after comparing ByteAsk with its former workflow and a same-model alternative with equivalent verification? Move to **Reach out** if the trial shows that ByteAsk brings the all-in cost per accepted change within budget and the buyer pays to repeat because ByteAsk’s build and hardware integration delivers value the alternative cannot retain on comparable terms. Move to **Pass** if full costs still put the work out of reach or the buyer can switch and preserve the outcome on comparable terms.
