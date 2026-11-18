# RightNow -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements.** RightNow’s strongest case is that kernel and serving optimizations could increase the usable inference capacity of rented GPUs. The buyer is an engineering team serving open-weight models under cost and latency constraints. If cheaper intelligence drives more production traffic, RightNow could serve more of that traffic on the same hardware while meeting the buyer’s quality and latency targets. (*The Idea*, *Market & Traction*)

**Observed evidence.** The two co-founders co-authored AutoKernel, which documents an iterative workflow for profiling and benchmarking replacement GPU kernels. The team shipped a hosted API and carried existing keys and balances through the RunInfra migration. Launch engagement provides a limited demand signal. **Company claims.** RightNow reports kernel-tool adoption at several large technology companies. The memo establishes neither paid hosted use by those companies nor a comparable production benchmark showing how much usable capacity RightNow adds. (*Defensibility*, *Founders & Team*, *Market & Traction*, *Key Facts*)

**Scale scenario.** At the listed Nemotron price, a workload with one million input tokens and one million output tokens would bill $0.20 on shared inference or $0.10 on batch. Batch could improve utilization by filling idle GPU hours. Contribution on the next workload depends on the GPU time it consumes, available capacity at peak, and incremental serving and support costs. The memo supplies prices but leaves those inputs open. (*The Idea*, *Key Risks*, *Key Facts*)

### Countercase

Well-funded competitors can rent GPUs, use the published AutoKernel implementation, and pursue the same serving gains. Together already has a competing inference compiler, and compatible API endpoints could make it easier for buyers to trial alternatives. RightNow might build a hard-to-reproduce library of validated kernels and serving configurations, but the memo offers no production comparison showing an advantage that persists across customer workloads. This leaves Path A’s control gate open at seed. Path B lacks evidence of a newly viable transaction and a reason to pay RightNow under model parity. (*The Idea*, *Defensibility*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 12/25 |
| Durable value capture | 5/25 |
| Customer demand | 6/20 |
| Team and execution | 10/15 |
| Scale economics | 7/15 |

**Total Score: 40/100** (Pass)

### Decisive diligence question

Can RightNow win a repeat paid production commitment because it delivers more usable inference per rented GPU than a credible optimized alternative? A buyer-run comparison on the same model, GPU class, and traffic profile should measure throughput at matched output quality, tail latency, and reliability. A repeat commitment tied to a material advantage that persists after the alternative is tuned would support **Reach out** if the updated score clears the outreach threshold. If the tuned alternative matches the result and the buyer is indifferent, **Pass**. (*The Idea*, *Defensibility*, *Key Risks*)
