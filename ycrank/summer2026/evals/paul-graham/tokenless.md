# Tokenless -- Paul Graham Evaluation

Tokenless has found something more interesting than a way to improve benchmark scores: a way to show that the scores were wrong. Its September 30 EnvCheck release describes agents inspecting graders, testing exploits in separate sandboxes, and checking whether the failures are real. The public findings and grader implementation are substantial technical evidence. The company reports 110 defects across DeepSWE, Terminal-Bench, and BFCL, documented in 66 write-ups. I give more weight to the inspectable artifacts than to the aggregate count. These founders have built something that can expose a specific kind of mistake ([EnvCheck](https://usetokenless.com/blog/envcheck/), [findings](https://github.com/tokenless-ai/envcheck-findings)).

What I cannot reconstruct is what happened when the founders themselves got stuck. Which obstacle stopped them, what did they try, and how quickly did the workaround change the situation? Finding defects is evidence that the system works. It does not separately establish that founder behavior. Agarwal’s alignment research and Wang’s infrastructure experience make their technical competence plausible, but credentials cannot answer the question. Likewise, the move from Touchy’s consumer assistant to environment auditing establishes a changed product, with the directory change recorded October 5. It supplies neither the observation that caused the change nor evidence that the underlying goal persisted. I would leave resourcefulness and evidence-driven adaptation at their missing-evidence defaults.

There is a plausible narrow well here. An RL team whose model learns to fool its grader can spend more compute making the wrong behavior stronger. Finding that defect before another training run could be immediately valuable. Tokenless reports unnamed early partners exploring domain-specific reward hacking, but exploration does not yet show that anyone brings the product back into their workflow ([October 20 post](https://usetokenless.com/blog/who-evaluates-the-evaluators/)). Touchy’s $14.99 in-app purchase offers no evidence about demand for this product. I would happily count founders manually auditing environments as progress; the question is whether the same team asks them to audit the next one.

The strongest case against passing is that Tokenless has already done the difficult part: produced reproducible failures in systems that sophisticated people trusted. That fits my pattern of backing technical teams after concrete proof, including in unfamiliar markets. It could also put these founders in direct contact with users whose problems generate the next product. But my working-prototype exception requires evidence strong enough to replace the missing founder prior. Here the technical proof stands largely alone. There is no unmistakable user pull to complete it. The founders met as Berkeley undergraduates, so an application-assembled team is not an established red flag; nor does publishing research establish dependence on a ceremonial launch or large partner. The concern is narrower: maintainers can reproduce the published methods, and Tokenless acknowledges that its own judge may be exploitable. Repeated customer use would show whether the team can keep finding valuable failures after the public examples are exhausted.

I would pass today. Tokenless earns a high technical score, but it does not meet my founder-action gate, and the dossier does not establish that these founders personally encountered the problem before choosing it. That is missing evidence, not evidence of passivity or a manufactured idea. My flip condition is one reference-checked customer case: a blocked RL team, a founder-shipped grader repair within a week, and that customer paying Tokenless to audit its next training environment. That would connect the impressive machinery to the behavior I am actually investing in.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 8/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 20/23 |
| A Named User Niche Pulls the Crude Product Back | 5/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 4/12 |
| **Total** | **43/100** |

**Total Score: 43/100** (Pass)
