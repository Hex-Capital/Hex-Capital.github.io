# Riften -- Paul Graham Evaluation

The decisive fact is not that Riften lacks public revenue. It is that the dossier cannot name a founder, an obstacle they encountered, or what they shipped to overcome it. At pre-seed, silence about metrics is normal. Silence about founder behavior is more serious for me. The YC profile describes an elegant mechanism—replace an application’s model endpoint with one environment variable—but provides no dated instance of a team making that mechanism work under resistance. I cannot infer resourcefulness from product architecture.

There is some technical substance in the design. Riften proposes to route each request to the cheapest adequate model, collect production outcomes, and train private open-weight models that gradually earn traffic. This is more interesting than a generic gateway because routing becomes the data-collection mechanism for replacing expensive frontier inference. But it remains self-reported architecture. The website was inaccessible in August 2026, and there is no benchmark, deployed model, customer workload, or measured cost-quality threshold. LLMRouterBench found that sophisticated routers can fail to beat simple baselines, while adversarial suffixes can steer routers toward expensive models. A fierce nerd would turn those objections into numbers.

The strongest case for investing is the shape of the wedge. One-variable migration could make adoption unusually easy, the $106.15 billion inference market gives cost reduction economic weight, and production evidence could compound into customer-specific models. This also resembles my unstated preference for programmable infrastructure serving newly autonomous software. But the important part of that pattern is that developers are already using the primitive. Riften has disclosed no users, repeat usage, revenue, or even a named niche whose requests are costly and repetitive enough to train a replacement model.

Competition makes the missing proof more consequential. Not Diamond already trains custom routers from customer evaluation data; Martian and Unify optimize model choice; OpenRouter has raised $153 million and operates a much larger model marketplace. Open-source LLMRouter includes more than 16 routing methods. Riften’s proposed private-model progression could still be the valuable layer, but there is no evidence yet that it works or that customer data produces a defensible advantage. Putting sensitive application requests in the routing path adds a real enterprise schlep, yet the dossier does not show that these founders encountered this problem themselves or have done the privacy and provider-contract work required to survive it.

None of the known exceptions applies. There is no inspectable prototype strong enough to replace missing founder evidence, no unmistakable user pull, and no independently validated result. Nor is there evidence of an explicit red flag such as waiting for a partner or delegating early sales; the problem is absence, not demonstrated passivity. I would pass now. The verifiable flip condition is a published production result from one named customer showing that Riften’s private model handles at least 30% of that customer’s recurring requests at equivalent task success and at least 50% lower inference cost, together with the founder-built workaround that made deployment possible.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 8/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 11/23 |
| A Named User Niche Pulls the Crude Product Back | 5/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 4/12 |
| **Total** | **34/100** |

**Total Score: 34/100** (Pass)
