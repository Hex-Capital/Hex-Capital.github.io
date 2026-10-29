# Acyclic Labs -- Paul Graham Evaluation

Acyclic’s founders have shipped something. What I cannot yet see is what happened when they got stuck. Sequential agent execution and coordination are real problems, but describing a problem and publishing its solution does not establish how the founders behave under resistance. The dossier has no specific failed deployment followed by a founder-built workaround and an observable result. I would leave resourcefulness at the missing-evidence default. That is uncertainty about the people, not evidence that they are passive.

The software supplies the strongest affirmative evidence. Acyclic has published a recursive fork/join harness with conformance suites, and its October demonstration reportedly used 236 agents to change 482 files in a Django migration in 49 minutes for approximately $8. This is considerably better than an architecture diagram. But static checks passing does not establish behavioral correctness, and there is no comparable sequential run establishing the acceleration. I give substantial credit for working software and discounted credit for the company’s own benchmark. “Exponentially faster” remains a claim to test.

There is also a credible reason these founders encountered this problem. Ram worked on clinical-trial agents at Palantir; Varun worked on agent architecture at Tracelight and researched auto-parallelising compilers. Their account connects the product to enterprise deployment experience. The recovery contract exposes some of the ugly work: live-process state needs supported checkpoints or an explicit restart. Making that reliable could be a worthwhile schlep. Their backgrounds support the problem’s origin; they do not independently prove that the founders have already solved the operational burden.

The strongest argument for investing is that Acyclic fits my unstated preference for programmable tools whose eventual uses exceed their initial description. Developers can inspect and run the harness now. The founders met on their first day at Cambridge, so this is not an application assembled around strangers. But the other part of that pattern—users appropriating the tool—is missing. Thirty-six stars, four forks, and nearly 40 discovery conversations establish exposure and exploration. They do not establish a small group that keeps returning. Nor does the transition from Graphcoder establish evidence-driven flexibility: the change is documented, but the observation that caused it is not.

That distinction matters economically. The demonstrated $8 is an execution cost, not revenue or gross profit. Customers can self-host the Apache-2.0 harness, while E2B, Daytona, and Modal already supply adjacent execution infrastructure. Open source could recruit the first users, but Acyclic must discover what those users will repeatedly pay it to operate. There is no documented dependence on a ceremonial launch or a large partner, so I would not invent those red flags. The unresolved question is whether a useful technical primitive becomes a business before adjacent providers absorb its workflow.

I would pass today. The strongest opposing case is tangible: two relevant technical founders have already built inspectable software. My known exceptions do not bridge the remaining gap. A prototype can override uncertainty about newly assembled cofounders, and validated science or unmistakable user pull can override other weak priors; neither establishes the missing founder behavior here. One verifiable deployment could change my decision: a named customer encounters a blocking production failure, the founders ship a workaround within two weeks, and that customer subsequently pays and returns weekly. That would connect the artifact to both resourcefulness and need.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 8/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 16/23 |
| A Named User Niche Pulls the Crude Product Back | 5/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 8/12 |
| **Total** | **43/100** |

**Total Score: 43/100** (Pass)
