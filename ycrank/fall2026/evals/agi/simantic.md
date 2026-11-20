# Simantic -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

Simantic’s supported path is making firmware validation practical on every pull request, including before physical boards arrive. The founders report that waiting for boards delayed testing by weeks or months. Simantic describes a GitHub bot that derives scenarios from each diff and runs compiled firmware against modeled chips. The seed-stage hypothesis is that AI reduces the specialist time needed to write and maintain change-specific tests enough to make that cadence affordable. Even with equally capable models, teams would still need an execution environment with credible chip and peripheral behavior. (*The Idea, Key Risks*)

The memo establishes a hardware-access constraint in embedded development. It supplies no evidence that demand from AI deployment will make a specific simulation input scarce or that available emulators and new supply will struggle to meet that demand. The building-blocks path earns zero. (*The Idea, Market & Traction*)

Proprietary Pyrite and silicon-validation rigs give Simantic some control over the delivered product, with pricing power and switching costs still untested. Embedder independently announced an integration, and a Waterloo student reported that the simulator matched the physical board in coursework. The classroom rollout, run volume, and first satellite customer are company-reported. These signals support early demand and shipped execution, reinforced by the founders’ embedded experience. Payment, repeat commercial use, and dependable coverage across boards remain open. Published prices and aggregate compute hours leave the cost per successful validation unresolved. (*Defensibility, Market & Traction, Founders & Team, Key Facts*)

### Countercase

Teams can already automate tests with Renode, and Veecle has added agent access to it. Some peripheral and analog failures still require physical measurements. If Simantic mainly saves time on checks teams already run, the industry-enabled path falls to zero and the rubric calls for Pass. The integration and coursework evidence leave that distinction unresolved, which puts Simantic on Watch. (*Market & Traction, Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 0/50 |
| Industry enabled by superintelligence | 10/50 |
| Durable value capture | 9/20 |
| Customer demand | 7/15 |
| Team and execution | 7/10 |
| Scale economics | 2/5 |

**Total Score: 35/150** (Pass)

### Decisive diligence question

Can one embedded team use Simantic to afford reliable per-pull-request checks it previously deferred until hardware was available? A pilot comparing its existing workflow with Simantic should measure cost per board-confirmed result, including test authoring, review, and hardware retesting. Sustained use at the new cadence within the team’s QA budget would move the action to Reach out. Savings confined to checks already feasible at that cadence would move it to Pass.
