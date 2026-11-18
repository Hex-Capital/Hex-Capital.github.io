# Nodus Compute -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A, product-led adoption.** The strongest starting buyer is an AI infrastructure lead with idle GPUs between recurring jobs and a need for extra capacity when demand spikes. Nodus documents a console, CLI, Python SDK, and coding-tool integrations that give developers a route to run a first job. If teams can activate through that route and reliably complete recurring jobs, additional paid GPU hours could grow each account. The same workflow could serve a second geography if teams can access compatible hardware and keep sensitive jobs in private pools. Path C could amplify growth if more fleet owners make compatible capacity available when borrowers need it. The memo provides no evidence of repeat transactions or better matching as the pool grows. (The Idea, Key Risks)

The founders report that more than 200 teams joined after launch, and the company lists UC Berkeley and VoiceStudio as users. These are early interest signals. The memo provides no activation records, realized revenue, repeat workloads, or evidence of paid demand across geographies. Published hourly rates establish an asking price. Under a scenario where compatible idle hosts absorb additional jobs, contribution could improve if realized usage revenue covers host payments or purchased GPU time, checkpoint storage, data transfer, retries, and incremental support. The memo provides no production cost breakdown to test that scenario. (Market & Traction, Key Facts, Key Risks)

### Countercase

Owners can reclaim lent GPUs, and eligible jobs must support checkpoint recovery or safe retries. Community hosts can inspect job data, which can force sensitive workloads onto private capacity. If those constraints routinely require Nodus to reserve replacement capacity or help customers configure private pools, costs could rise with each workload or account. The elastic-pooling test used synthetic tenants on a single node, so production data are needed to establish how often those costs arise. The documented constraints make the downside credible. The Pass gate requires evidence that the costs scale proportionally or worse without a supported path to improvement. (Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 9/25 |
| Repeatable acquisition and onboarding | 9/25 |
| Retention and customer expansion | 7/20 |
| Contribution as volume grows | 7/20 |
| Evidence of fit in the first buyer segment | 4/10 |

**Total Score: 36/100** (Pass)

### Decisive diligence question

Can a paid cohort in a second geography activate through the same self-serve workflow and complete recurring production jobs with positive incremental contribution? Billing and job records showing repeat paid use, alongside measured compute, retry, and support costs, would move the action to Reach out.
