# Orchestra -- Paul Graham Evaluation

The clearest evidence is the system the founders built: Orchestra processed 39,962 comments for $2.82, and its current benchmark reports $0.000074 per task versus $0.000444 for the frontier baseline ([Orchestra Results](https://orchestra.ai/results), [Orchestra homepage](https://orchestra.ai/)). That is a real artifact, not a diagram. But it answers “what did they build?” rather than my first question: what broke, what did they do next, and how quickly did that change the result? The dossier names no customer failure, deployment obstacle, or founder-built workaround. I cannot infer relentless resourcefulness merely from competence.

The technical proof is good but narrower than the headline. The current result is about 6x cheaper, not 100x. The disclosed 8B model also scored 0.9630 against Sonnet’s 1.0000, without confidence intervals or an untouched holdout, and the small validation workload cost roughly $1.56 after cold-start GPU time despite only $0.006617 in modeled token cost ([Orchestra operations study](https://orchestra.ai/results/operations)). I like that the founders published these limitations. It suggests technical seriousness. It does not yet show that the optimization loop generalizes across production workloads.

Who wants the crude version now? Orchestra describes a plausible niche—companies repeatedly paying frontier-model prices for high-volume workflows—and makes adoption unusually easy through a one-URL gateway substitution ([YC profile](https://www.ycombinator.com/companies/orchestra)). But there is no named customer, revenue, repeat production usage, or retention. Eighteen GitHub stars and eight forks are faint evidence of developer curiosity, not pull from the product’s intended buyers. Founder-led contact is the right motion, but it is still a motion described rather than a result observed.

The founders are much more credible than a generic “AI infrastructure” team. Aamir Poonawalla spent ten years building Instacart’s ads-serving, auction, and experimentation infrastructure. Luis Manrique worked on Instacart Ads, Carrot AI, and Gumloop. They also worked together before founding Orchestra ([Orchestra company page](https://orchestra.ai/company)). This makes the idea less likely to be a sitcom startup, and the combination of trace handling, evaluations, model deployment, and enterprise data controls contains genuine schlep. What remains inferred is that either founder personally encountered this exact problem and began Orchestra because an existing workflow failed them.

The strongest bull case is that the working system itself should override the missing behavioral history. The market is expanding, the integration wedge is sensible, and customer-owned specialist weights could make the product increasingly embedded. But the recent proof-spike pattern I care about requires something external to spike: developers arriving, users returning, or a measurement someone besides the company depends on. Here the benchmark is internal, while Fireworks already offers continuous specialization and reports more than $1 billion in annualized revenue. Customer ownership of the evaluations and weights also means Orchestra must keep earning its position instead of accumulating an obvious proprietary substrate.

I would pass today. This is a capable team with a measured technical artifact, but the operational gate fails: there is no documented founder response to resistance and no named user niche pulling the crude product back. The red flag is not that the market is crowded; crowded markets can be excellent. It is that Orchestra currently looks like three established infrastructure products combined by architecture rather than a system being bent into shape by urgent users. One condition would flip me: a named customer running more than one million tasks monthly for 90 days, where a failed initial deployment caused the founders to ship a documented workaround within two weeks while preserving at least 95% of frontier-model quality.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 8/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 17/23 |
| A Named User Niche Pulls the Crude Product Back | 5/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 7/12 |
| **Total** | **43/100** |

**Total Score: 43/100** (Pass)
