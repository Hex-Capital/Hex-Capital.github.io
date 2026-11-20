# Graphide -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

Graphide’s strongest path is selling faster CI to engineering teams that already run GitHub Actions. Assuming strong product-market fit with those teams, the same GitHub App and repository migration workflow can serve eligible jobs across markets. Unsupported jobs can stay on existing runners, which lets teams adopt Graphide incrementally. Developers can install the app and start a trial themselves. The documented path to paid CI goes through a sales quote, and the memo also describes founder-assisted migrations. (The Idea, Key Risks)

Every code change can generate another CI run, giving teams a recurring reason to keep the product. Fixed monthly quotes support recurring billing, but the memo leaves open whether a growing workload raises the same customer’s bill. The separate $1-per-pull-request reviewer offers a potential expansion path if CI customers adopt it. Actual renewals and cross-sell are unknown. The two-person team launched CI publicly on November 11. The company relays unnamed teams’ reports of faster delivery after switching, while realized revenue, paying-customer counts, and billed volume remain unknown. Initial traction therefore uses the absent-evidence default. (The Idea, Market & Traction, Key Facts, Graphide)

### Countercase

Graphide could make jobs finish faster while spending more to run them. Its benchmark included hand-tuned jobs on 64- or 128-vCPU runners, while customer runners topped out at 32 vCPUs. Production still runs the full test suite, and the company’s 70% bill-savings figure is a target. Under a fixed quote, if workload grows before repricing, additional jobs bring in zero incremental revenue while consuming runner capacity and potentially adding tuning and support costs. Cache reuse could reduce compute, but the memo leaves contribution on representative workloads unresolved. The structural gate remains open because the memo establishes neither unavoidable bespoke work nor structurally uneconomic capacity needs. (The Idea, Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 22/25 |
| Repeatable acquisition and onboarding | 8/25 |
| Retention economics | 13/20 |
| Initial traction | 7/20 |
| Cost economics | 5/10 |

**Total Score: 55/100** (Neutral)

### Decisive diligence question

Can a cohort of unrelated GitHub organizations move from app install to paid production without founder-led sales or migration and remain contribution-positive as CI volume grows? Paid invoices, onboarding records, and account-level costs covering runner capacity, tuning, and support would answer it. A cohort that demonstrates this on ordinary workloads would move the action to Reach out.
