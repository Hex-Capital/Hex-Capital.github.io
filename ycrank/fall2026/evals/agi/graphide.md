# Graphide -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

Path A, Scarce complements, is the strongest fit. If frontier-quality coding agents become cheap and generate changes faster than teams can validate them, predictable time to a passing CI result becomes more valuable. Engineering teams bear the cost through delayed iterations and repeated runs. GitHub reported 3.26 billion Actions runs in September 2026, more than four times the prior-year month, and attributed rising infrastructure demand to coding agents. Graphide reported that 19 of 24 benchmark jobs ran at least 10× faster than their GitHub baselines. That comparison supports a job-level speedup. Whether it relieves a binding production bottleneck remains open. *(The Idea; Market & Traction; Key Risks)*

Graphide reports operating its own runners and maintaining a shared optimization library. The potential advantage is that tuning learned on one repository could reduce the work needed to deliver reliable speedups on the next. The memo leaves that reuse unmeasured. Graphide also reports that unnamed teams switched, giving a weak demand signal while leaving payment and repeat use unknown. The team shipped GitHub App onboarding and full-suite CI, building on prior VM orchestration and Linux experience. *(Defensibility; Market & Traction; The Idea; Key Risks; Founders & Team)*

The expansion unit is a repository on a fixed monthly CI quote. Contribution depends on whether that quote covers active and idle runner capacity, retries, tuning, and support under bursty demand. The memo supplies pricing terms while leaving realized utilization and delivery costs unknown. *(The Idea; Key Facts)*

### Countercase

Faster CI may be available from interchangeable suppliers. Blacksmith already offers drop-in runners for bursty demand, Depot offers custom runner images, and GitHub has cut its native runner prices. Graphide’s benchmark included 10 hand-tuned jobs on 64- or 128-vCPU machines, while customer runners topped out at 32 vCPUs. The benchmark leaves production performance against credible alternatives unresolved. At seed, that gap warrants Watch. A representative comparison showing a substitute can meet the same validation requirements on comparable terms would close Path A. *(Market & Traction; Defensibility; Key Risks)*

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 12/25 |
| Durable value capture | 9/25 |
| Customer demand | 7/20 |
| Team and execution | 9/15 |
| Scale economics | 6/15 |

**Total Score: 43/100** (Pass)

### Decisive diligence question

Will an independent, CI-constrained team renew at a price that gives Graphide positive contribution after comparing it with a credible runner alternative on its own repositories? Run both on customer-available configurations under representative load, with the same full test suite and a buyer-defined time-to-passing target. A paid renewal after Graphide alone meets that target would move the action to Reach out. If the alternative matches the outcome on comparable terms, Pass.
