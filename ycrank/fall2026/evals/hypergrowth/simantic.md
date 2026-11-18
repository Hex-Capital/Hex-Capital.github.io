# Simantic -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A, product-led adoption,** is the strongest fit. The initial buyer is an embedded firmware team that needs to test code on each change while access to physical boards is limited. Simantic documents self-serve signup, a simulation API, and a GitHub app that builds and tests firmware from pull requests. If a team can get a trustworthy result using an existing chip model, testing can become part of routine code review. More repositories and workloads could then drive paid usage. The same workflow could reach teams abroad that use supported hardware and accept the source-code handling. That is a portability assumption, with buyer demand outside Canada still unverified. (The Idea, Key Risks)

The company reports a first customer in low-Earth-orbit satellites and more than 1.5 million runs over two months, with most runs concentrated among the top 15 users. A Waterloo student reported that the simulation matched the physical board in coursework, and the CTO reported that the course used Simantic for automated grading. Those are early signals of utility. The memo provides no account-level record of how commercial users activated, what they paid, or whether they kept using the product. (Market & Traction, Key Risks)

At the listed $100 monthly Developer price, the contribution test is whether subscription and any additional usage revenue cover compute, third-party processing, and support for the next team. An existing silicon-validated model could spread bench-testing costs across teams. A new chip or peripheral could require fresh engineering and bench work, and private hosting could add deployment and support costs. The memo reports compute hours without the account-level revenue or cost data needed to test that scenario. (The Idea, Defensibility, Market & Traction, Key Risks)

### Countercase

The strongest countercase is that Simantic can automate runs after setup while each new commercial account still needs substantial hardware modeling or deployment work. The memo documents incomplete model coverage, behaviors that still need physical measurements, and pull-request data handling that can constrain adoption. If those constraints recur with each buyer, the self-serve workflow could generate substantial run volume while commercial rollout remains labor-intensive. The memo does not establish that this happens across accounts or that model reuse cannot improve the economics, so the structural Pass gate is unproven. (Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 9/25 |
| Repeatable acquisition and onboarding | 9/25 |
| Retention and customer expansion | 7/20 |
| Contribution as volume grows | 7/20 |
| Evidence of fit in the first buyer segment | 5/10 |

**Total Score: 37/100** (Pass)

### Decisive diligence question

Can an independent commercial firmware team outside Canada adopt Simantic through the self-serve GitHub workflow, pay, and keep running pull-request tests through a normal development cycle using an existing chip model? An account record showing payment, recurring runs, onboarding hours, and incremental compute and support costs would answer it. Move to **Reach out** if that rollout shows recurring paid use with manageable delivery effort.
