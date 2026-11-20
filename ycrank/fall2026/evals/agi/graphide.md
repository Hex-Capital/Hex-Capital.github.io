# Graphide -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

Graphide’s building-block path is low-latency CI for coding agents that repeatedly run GitHub Actions tests before a change can merge. GitHub reported 3.26 billion Actions runs in September 2026, more than four times the prior-year month, and attributed rising infrastructure demand to coding-agent activity. Graphide relayed reports from unnamed teams that repeated runs of a 30-minute pipeline could consume three to six hours. Prewarmed runners, cache tuning, and test splitting could shorten that feedback loop for eligible jobs. The seed-stage assumption is that fast, affordable runner capacity stays hard to obtain as agent-driven runs increase. The memo establishes usage growth, while evidence of scarcity comes mainly from company-reported customer experiences. (The Idea, Market & Traction)

The industry-enabled path scores zero. Graphide automates tuning and bug verification for existing CI and pull-request review workflows. The memo identifies no previously excluded buyer or use that becomes affordable because of that automation. (The Idea, Market & Traction)

Graphide reports operating its own runners and maintaining a shared optimization library. Reusing that tuning could make delivery more efficient across repositories, though the advantage remains untested against competing fleets. Reported customer switches offer an early demand signal, with paid conversion and repeat use unverified. The CI launch and McGee’s prior work orchestrating more than 300 virtual machines support execution at seed. Fixed monthly quotes establish how Graphide charges, but the memo supplies no cost per successful production run after compute, idle capacity, and tuning labor. Scale economics stays at its default. (Defensibility, Market & Traction, Founders & Team, The Idea)

### Countercase

The delays may reflect poorly tuned pipelines that competing runners can already improve at comparable cost. Blacksmith offers burst capacity, Depot offers custom runner images, and GitHub cut native runner rates by up to 39%. Graphide’s benchmarks included ten hand-tuned jobs on 64- or 128-vCPU runners, while customer runners topped out at 32 vCPUs. Those limitations leave production performance and substitutability unresolved. Comparable performance and cost from a readily available runner would trigger the building-block zero and a Pass. The memo leaves that comparison open, which supports Watch. (Market & Traction, Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 18/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 7/20 |
| Customer demand | 6/15 |
| Team and execution | 6/10 |
| Scale economics | 2/5 |

**Total Score: 39/150** (Pass)

### Decisive diligence question

On an agent-heavy customer repository with recurring CI delays, can Graphide sustain materially faster full-suite feedback at comparable or lower cost per successful run than the best readily available runner? A side-by-side production trial on customer-tier hardware, using the same jobs and test coverage during normal bursts, would answer it. A sustained gap would move the action to Reach out. An available substitute that meets the same latency and cost would move it to Pass.
