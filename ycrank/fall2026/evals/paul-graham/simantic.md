# Simantic -- Paul Graham Evaluation

The important question is what Hong and Shahriar did when hardware kept them waiting. Simantic’s founders describe delays of weeks or months before firmware could be tested. They have since shipped simulation tooling. But the dossier doesn’t connect those facts through a specific incident: which project was blocked, what they built, and how quickly it got engineering moving again. That distinction matters when I’m investing in people. Their Tesla and Neuralink experience establishes relevant knowledge. It doesn’t establish how they behave when stuck.

There is nevertheless something here worth taking seriously. Simantic has a public SDK, documented interfaces, and an announced Cloud Sim beta. Compiled firmware, inspectable peripherals, and programmable testing fit my preference for tools technical users can compose into their own workflows. This is substantially better than a proposal to build a simulator after raising money. But the strongest technical claim remains unproved: how reliably does passing in simulation predict passing on silicon? The SDK defaults to Renode, while the alternative Rust engine and proprietary models lack demonstrated fidelity results in this dossier. Existing infrastructure is a sensible starting point; the credit belongs to what the founders have demonstrably added ([SDK](https://github.com/simantic-dev/pippy), [validation standard](https://simantic.com/validation)).

The strongest argument for investing is that these founders encountered the problem through actual embedded work. Hong worked in firmware and robotics; Shahriar worked on implant software and AI hardware. Their account of waiting for prototypes has a credible occupational foundation. And accurate peripheral models involve precisely the tedious engineering that people overlook when imagining the opportunity. Simantic could win by making a small set of boards exceptionally useful before attempting broad coverage. The reservation is that relevant experience and an ugly problem establish a promising origin, not yet exceptional execution ([Waterloo News, July 31, 2026](https://uwaterloo.ca/news/simantic-scales-waterloo-startup-global-ai-hardware)).

Who wants the crude version enough to keep using it? BoardRepo’s planned testing before manufacture identifies a plausible job, but planned use earns little demand credit. Embedder and WATFlight announcements don’t establish returning users either. The $100 monthly Developer plan provides a way to charge; it supplies no evidence that anyone pays. Simantic’s SDK also asks users to defer production pipelines, which makes repeat experimental use especially informative. I would not infer that partnerships are its entire distribution strategy. But neither partnerships, a beta announcement, nor approximately $600,000 raised can substitute for that usage ([pricing](https://simantic.com/pricing), [SDK](https://github.com/simantic-dev/pippy)).

I would pass with my own money today. Simantic fits the programmable-interface pattern, but lacks the concrete technical proof spike or user pull that makes that pattern compelling. There is no documented evidence-driven route change, so I assign the missing-evidence default rather than infer rigidity. I also considered whether the working-product exception should override the missing resourcefulness evidence: the public tooling makes that a serious possibility, but demonstrated fidelity and unmistakable demand are still absent. One verifiable episode could change my decision: a named paying firmware team using Simantic weekly for a month after the founders fix a silicon-versus-simulation discrepancy within seven days. That would reveal the founders’ response to resistance, the usefulness of their engineering, and whether anyone needs the result.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 8/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 15/23 |
| A Named User Niche Pulls the Crude Product Back | 6/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 9/12 |
| **Total** | **44/100** |

**Total Score: 44/100** (Pass)
