# Graphide -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

Graphide’s strongest path is repeatable direct sales to engineering teams that run frequent tests in GitHub Actions. The documented workflow starts with a self-serve GitHub App install and repository migration, followed by a limited trial and a fixed monthly quote based on existing usage. Eligible jobs move to Graphide while unsupported jobs can stay on existing runners. That makes the same workflow plausible across markets for teams that can clear security review. Paid adoption in a second market remains unverified. (The Idea, Key Risks)

Graphide reports that unnamed teams switched runners after experiencing long retry cycles. In its benchmark, 19 of 24 jobs ran at least 10× faster than their GitHub baselines. Those signals support early buyer urgency and a benefit worth testing. If that benefit holds on customer hardware, the App could give buyers a standard way to prove value before buying. At this launch stage, the first unresolved link is whether independent teams can reach paid production use through that workflow without founder-led migration or repository-specific tuning. The memo gives no account-level trial-to-paid, repeat-use, or marginal cost records. (The Idea, Market & Traction, Key Risks)

### Countercase

Graphide could need hands-on tuning to deliver the speed that wins each account. Ten benchmark jobs were hand-tuned on 64- or 128-vCPU runners, while customer runners topped out at 32 vCPUs. If comparable gains require custom work or expensive burst capacity, fixed monthly fees could leave little contribution as customers run more jobs. Graphide’s reported shared optimization library offers a plausible way to reuse tuning work, and the memo leaves its effect on rollout effort unmeasured. The structural downside gate remains open because proportional delivery costs are a plausible risk and have yet to be demonstrated. (The Idea, Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 16/25 |
| Repeatable acquisition and onboarding | 9/25 |
| Retention and customer expansion | 7/20 |
| Contribution as volume grows | 7/20 |
| Evidence of fit in the first buyer segment | 5/10 |

**Total Score: 44/100** (Pass)

### Decisive diligence question

Can two independent GitHub Actions teams use the same onboarding process to move from App install to paid production CI without founder-led migration or custom tuning? Account records showing the steps, staff time, production job runs, and first payment for both teams would move the action to Reach out if they show a repeatable rollout with bounded effort.
