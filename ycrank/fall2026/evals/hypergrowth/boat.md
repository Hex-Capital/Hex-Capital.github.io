# Boat -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Product-led adoption.** Developers building long-running agents have a recurring need for isolated computers that preserve state. Boat documents a self-service trial and a CLI and SDK for starting, resuming, and forking Ubuntu VMs. The founder reports that X and Product Hunt each brought in comparable trial volumes. If developers can get a first workload running on their own, the same onboarding could serve the next thousand buyers, with paid VM-hours growing as customers put more agents into production. Paid conversion by channel and onboarding effort remain unknown. (The Idea, Market & Traction)

One named user said he worked through his Claude allowance four times as fast after adopting Boat. The founder separately reported 350+ paying users in September and ARR rising from $200K to $1M over a month. These are early signals of buyer commitment. The memo gives no account-level evidence of retained or expanding paid workloads and does not define how usage was annualized. (Market & Traction, Key Facts)

**Scenario assumption.** A US team that can use EU-hosted VMs could adopt through the same SDK. A buyer requiring local processing would need Boat to add regional host capacity and control snapshot placement. At the listed $0.036 per billed hour for the default VM, contribution depends on host utilization, burst headroom, snapshot storage and transfer, and support. The cost of acquiring each paid cohort also includes trial compute. Auto-stop can reduce idle runtime, but the memo gives no measured contribution per workload. (The Idea, Key Risks)

### Countercase

Founder-led launches may generate trials and short bursts of paid usage while production buyers choose an existing cloud vendor with overlapping capabilities. Even if workloads recur, burst demand can require spare host capacity. Boat already charges for excess starts and can reject higher bursts. The memo establishes neither a structural ceiling on global demand nor proportional delivery costs without a path to improvement, so the Pass gate does not apply. (The Idea, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 12/25 |
| Repeatable acquisition and onboarding | 13/25 |
| Retention and customer expansion | 7/20 |
| Contribution as volume grows | 7/20 |
| Evidence of fit in the first buyer segment | 7/10 |

**Total Score: 46/100** (Neutral)

### Decisive diligence question

Can a self-serve cohort in a second buyer market sustain paid production VM-hours at positive contribution after the trial? Cohort billing and usage across successive billing periods, matched to acquisition, host capacity, snapshot, and support costs, would answer it. A positive result would move Boat to Reach out.
