# Plover Labs -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

**Path B applies through direct enterprise sales with potential account expansion.** The initial buyer is an enterprise engineering team that repeatedly verifies agent-written changes against repository rules and past failures. Fieldguide co-built Forge with Plover and used its checks on agent-written patches in production over a quarter. Fieldguide reported 40% higher total merged PR throughput in that quarter, with flat rollback rates and defect severity. Plover reports five-figure monthly contracts with Fieldguide and Envoy. Fieldguide shows recurring use and a concrete workflow benefit. Envoy adds a reported budget commitment, with its deployment and usage still unknown. Paid expansion and renewal remain unverified. (The Idea, Defensibility, Market & Traction, Key Facts)

The growth scenario assumes Plover can sell the same verification workflow to other engineering teams, reuse the implementation, and expand into more repositories within each account. In a second geography, the same buyer and job are plausible. Portability would depend on whether the core integration can be reused and what changes local security, data-handling, or support requirements impose. Contribution on the next account depends on contract revenue after sales effort, integration, and support. Each added repository may also add check authoring, maintenance, and compute costs. The memo gives a contract price signal and leaves those incremental costs unmeasured. A measured rollout would be more informative than a conversation today. (The Idea, Key Risks, Key Facts)

### Countercase

Fieldguide’s co-build is the only rollout described in detail. One patch passed component tests while missing a required integration, so Fieldguide added a regression case and kept engineer approval at merge. If each repository requires a similar cycle of manual discovery, check creation, and maintenance, expanding an account could add delivery labor in proportion to revenue while customers keep paying the cost of human review. This is a concrete risk to repeatable onboarding. The memo leaves open whether that effort persists across rollouts and therefore falls short of the Pass gate. (Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 9/25 |
| Repeatable acquisition and onboarding | 8/25 |
| Retention and customer expansion | 8/20 |
| Contribution as volume grows | 7/20 |
| Evidence of fit in the first buyer segment | 7/10 |

**Total Score: 39/100** (Pass)

### Decisive diligence question

Can an independent enterprise buyer in a second geography reach paid, recurring production use through the same rollout process? A deployment record showing reuse of the core integration and measuring sales, setup, and ongoing check-maintenance effort through an added repository would answer it. Reuse with incremental costs that leave room for contribution to improve would move the action to **Reach out**. Evidence that bespoke work grows in proportion to revenue, with no supported way to reduce it, would move it to **Pass**.
