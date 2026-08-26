# rekursiv.ai -- Paul Graham Evaluation

The useful obstacle is experiment runtime. rekursiv.ai’s autonomous loop needs hundreds of trials, so the founders built monitoring agents that terminate bad experiments early. That is a real blocker followed by a shipped workaround, and the 684 Sudoku experiments completed over four days show that the loop operates at meaningful scale. But the dossier does not say how much faster the workaround made the system or whether an external researcher benefited. This is evidence of resourcefulness, not yet top-quartile evidence of it.

The technical proof is much stronger. Joshua Dillon and Dan Kondratyuk did not wait for customers or a larger laboratory: they ran 235 ARC experiments across 15 directions, reached a reported 71.4–75.5% on ARC-AGI-1, and produced 100% accuracy on a 99,768-puzzle Sudoku stress test. Their prior work on TensorFlow Probability, Veo, VideoPoet, and foundation-model training makes these results more credible than a benchmark assembled by tourists. This matches the recurring pattern I care about: unusually technical founders produce a concrete proof spike before the financing story is complete. The discounts are equally concrete. The ARC evaluation was public rather than semi-private, the founders expect a four-to-six-point decline, and all the reported measurements come from the company.

The most revealing failure may be more valuable than the Sudoku result. Hypothesis-Pinning Search did not transfer directly to ARC, so the team kept only its feedback-and-repair mechanism. That is the right kind of stubbornness: preserve the goal of automating research while discarding a route the evidence rejected. Still, this is one component revision, not yet a history of changing the product around observations from users.

And users are the missing half of the proof. The site is access-gated, but there are no named research teams, repeat campaigns, paid deployments, or even signed design partners. Sixteen GitHub followers and 29 stars for `sagent` do not establish pull. Nor does the $5 million raised from YC; fundraising measures investor demand. The red flag is that rekursiv.ai could remain an excellent research project whose benchmarks impress other researchers without becoming something they repeatedly use. Sakana AI’s open-source system and heavily financed competitors also make code publication a weak moat unless the experiment history compounds into better decisions.

The founders have spent years inside the problem, worked together at both Google Research and Luma AI, and co-authored VideoPoet. That is credible organic proximity to the need, and coordinating expensive, failure-prone experiments is genuine schlep. But the dossier never identifies the moment their own research was blocked badly enough to force this company into existence. This does not require a known-exception override: there is no improvised cofounder relationship, teenage-enterprise mismatch, or absent technical artifact to excuse. It simply lacks the narrow well of users that would turn founder-market fit into a company.

I would not write the check today. The technical case is almost sufficient, but autonomous experimentation is valuable only when someone outside the founding team entrusts real research decisions to it twice. The verifiable flip condition is three external ML teams completing repeat experiment campaigns through rekursiv.ai, with at least one paying or expanding its usage. That would show the crude product being pulled back by users and move this from an impressive machine to an investable startup.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 20/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 20/23 |
| A Named User Niche Pulls the Crude Product Back | 5/18 |
| Goal Persists While the Product Route Changes on Evidence | 11/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 8/12 |
| **Total** | **64/100** |

**Total Score: 64/100** (Neutral)
