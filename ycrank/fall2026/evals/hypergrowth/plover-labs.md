# Plover Labs -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

The strongest path is **channel-led or repeatable sales**, through inferred direct sales to enterprise engineering teams. The recurring job is verifying agent-written changes before merge. Fieldguide’s production deployment shows how Plover can turn repository history and past failures into checks that run on subsequent changes. That workflow could serve engineering teams in other markets if Plover can reuse the implementation while adapting the checks to each repository. The memo gives no buyer geography or cross-market rollout evidence. (The Idea, Defensibility, Market & Traction)

Plover reports five-figure monthly contracts with Fieldguide and Envoy. Fieldguide describes recurring production use in Forge’s first quarter, with 40% higher total merged PR throughput, 1.3–1.6× faster merges for Forge-authored PRs, and flat rollback rates and defect severity. Those outcomes describe the joint Forge deployment, so Plover’s individual contribution is uncertain. The quarter establishes repeat use at the cadence of pull requests. Paid expansion and Envoy’s path from sale to production remain unverified. The first link likely to break at scale is onboarding. Fieldguide reached production through a joint implementation, and the effort required to repeat that rollout is unmeasured. (The Idea, Market & Traction, Key Risks)

### Countercase

Plover may sell a valuable but labor-intensive implementation for each repository. Fieldguide co-built its deployment and added a regression case after a patch passed component tests while missing a required integration. Engineers still approve merges. If each rollout requires comparable custom engineering and ongoing support, new contracts could add delivery work in proportion to revenue. One joint deployment with unmeasured rollout costs leaves the structural downside gate untriggered. (Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 15/25 |
| Repeatable acquisition and onboarding | 10/25 |
| Retention and customer expansion | 9/20 |
| Contribution as volume grows | 7/20 |
| Evidence of fit in the first buyer segment | 7/10 |

**Total Score: 48/100** (Neutral)

### Decisive diligence question

Can a second enterprise buyer, such as Envoy, reach recurring paid production use through a documented rollout that reuses the Fieldguide implementation? A rollout record showing what carried over, who handled the handoff, and how much custom engineering and support the contract added would answer it. A successful handoff with bounded delivery effort relative to contract revenue would move the action to **Reach out**. Evidence that comparable rollouts require custom work in proportion to revenue, with no supported route to reuse, would move it to **Pass**.
