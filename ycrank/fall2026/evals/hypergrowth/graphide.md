# Graphide -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

Assuming strong fit with engineering teams running frequent GitHub Actions jobs, Graphide can plausibly serve the same recurring CI workload across markets through its GitHub App and repository migration workflow. The GitHub organization requirement and unsupported jobs narrow the eligible segment. Teams can install the app and begin migration themselves, but CI pricing requires a sales quote, and the memo does not establish how often ordinary teams need the CEO-assisted migration Graphide offers. (The Idea, Key Risks)

Fixed monthly CI quotes fit a recurring workload, but the memo does not show whether growing CI usage raises existing customers’ bills. The separate $1-per-pull-request reviewer gives accounts a way to spend more if they adopt it, with uptake and renewals unverified. Graphide’s two-person team launched the current CI product on November 11. The founders report that unnamed teams switched, but offer no realized revenue, paying-customer count, or billed production volume from which to judge the commercial slope. (The Idea, Graphide, Market & Traction, Key Facts)

For a representative account, incremental contribution is the monthly CI fee less runner compute, including idle prewarmed capacity, plus the attributable costs of sales, migration, tuning, and support. The improvement scenario assumes reusable cache tuning cuts compute or labor per account. Faster wall-clock runs can help customers while leaving Graphide’s compute costs unchanged or higher if parallelism uses more total capacity. The memo identifies the improvement lever but gives no production cost measurements to establish its effect. (The Idea, Defensibility, Key Risks)

### Countercase

Graphide may need hands-on migration and ongoing tuning to deliver enough savings to win customers, while absorbing bursty compute costs under fixed monthly quotes. Its reported speedups include hand-tuned jobs on 64- or 128-vCPU runners, while customer runners topped out at 32 vCPUs. The structural downside gate stays open because the memo leaves unresolved whether that labor is unavoidable and whether representative workloads can be served at positive contribution. (The Idea, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 21/25 |
| Repeatable acquisition and onboarding | 15/25 |
| Retention economics | 13/20 |
| Initial traction | 7/20 |
| Cost economics | 5/10 |

**Total Score: 61/100** (Neutral)

### Decisive diligence question

Can a representative cohort of GitHub Actions teams migrate with minimal founder help, convert to paid CI, and renew at positive contribution? Cohort records showing paid renewals, actual runner costs through peak usage, and attributable sales and support time would justify Reach out if they lift the score to the investment threshold. Evidence that routine accounts require unavoidable hands-on work that makes faster growth economically infeasible would change the action to Pass.
