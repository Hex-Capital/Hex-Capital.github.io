# Graphide -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

The strongest path is **scarce complements**. Coding agents can generate changes faster than engineering teams can validate them, increasing the value of low-latency CI. GitHub reported more than fourfold year-over-year growth in Actions runs and attributed rising infrastructure demand to coding agents. Graphide reports that 19 of 24 benchmark jobs ran at least 10× faster than their GitHub baselines. The result supports the mechanism, with limited applicability to production. Ten jobs were hand-tuned on 64- or 128-vCPU runners, while customer runners topped out at 32 vCPUs. (Market & Traction, Key Risks)

Graphide reports operating its own runners and maintaining a shared optimization library. That gives it control over service delivery and a plausible way to reuse tuning across repositories. Unnamed teams reportedly switched to Graphide CI, an early adoption signal. Paid renewals and buyer preference against comparable runners remain unverified. McGee’s prior VM orchestration work and the team’s shipped CI service support seed-stage execution. (Defensibility, Market & Traction, Founders & Team)

The expansion unit is a paid organization-month. Under fixed monthly pricing, contribution depends on the quote covering compute, idle prewarmed capacity, tuning, and migration and support labor as job volume grows. Production cost per successfully validated change remains unmeasured in the memo. The New Economies path would also require evidence that lower labor cost per validated change enables a previously uneconomic use and that buyers still pay Graphide under model parity. (The Idea, Key Risks)

### Countercase

Graphide may offer faster execution in an existing CI market where buyers can readily switch among providers. Blacksmith and Depot already operate runner infrastructure that could support similar tuning, GitHub has cut hosted-runner prices, and Graphide still depends on GitHub Actions. The reported speed advantage could shrink on customer hardware against those alternatives. Comparable production performance and easy buyer substitution would close the scarce-complement path. The memo establishes credible alternatives while leaving parity and switching behavior untested, so the action is Watch. (Defensibility, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 14/25 |
| Durable value capture | 8/25 |
| Customer demand | 7/20 |
| Team and execution | 10/15 |
| Scale economics | 6/15 |

**Total Score: 45/100** (Neutral)

### Decisive diligence question

Will independent teams with heavy coding-agent CI usage renew at a price that gives Graphide positive contribution after comparing it with their best viable runner alternative? A paid production cohort would answer this by running equivalent full test suites on customer-tier hardware and measuring time and fully loaded cost per successfully validated change. Move to Reach out if teams renew for a material, repeatable advantage traceable to Graphide’s tuning and runner operations. Move to Pass if alternatives match the outcome and buyers switch readily.
