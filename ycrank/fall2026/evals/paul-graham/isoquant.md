# isoquant -- Paul Graham Evaluation

The important fact about isoquant is that the founders built inference optimizations for something they were already running, then turned those optimizations into a product. Agent FM was a real application with 60+ paying users. That gives the infrastructure an origin more convincing than noticing that inference is a large market. But the dossier leaves out the part I most want to hear: what broke, what Aniket and Mugdhaa did about it, and how long the repair took. Commercializing internal machinery suggests resourcefulness. It does not establish it ([product transition](https://www.linkedin.com/company/isoquant-ai), [prior application](https://www.ycombinator.com/launches/SQ0-agent-fm-one-group-chat-to-hear-and-steer-your-coding-agents)).

The machinery itself deserves substantial credit. Isoquant has a documented API and consumption billing, rather than merely an architecture diagram. Its published comparison puts median time to first token at 452 ms against Together’s 890 ms. The banking experiment reports 91.8% accuracy against 74.7%, with estimated inference costs down 91.7%. Those are testable claims. They remain company-run comparisons, and 3,079 banking requests establish a much narrower result than general superiority across production workloads ([API documentation](https://isoquant.ai/docs), [benchmark](https://isoquant.ai/), [banking experiment](https://isoquant.ai/case-studies/banking-intent-classification)).

Who wants this now? Developers running agents are a plausible narrow well: latency accumulates across successive model calls. Sho Kaneko’s report of approximately twice-as-fast agent inference is therefore more informative than a generic compliment. The reported 18 billion tokens in the first 24 hours, followed by 1.2 trillion in a month and 1,000+ customers, suggests the launch reached actual workloads. But the latter figures arrive through a search snippet, without a paying-customer breakdown or retention cohorts. Agent FM’s paying users belong to the earlier application. I cannot transfer their willingness to pay to isoquant ([launch report](https://www.linkedin.com/posts/anideshp_from-0-to-18-billion-tokens-served-within-activity-7509745806061727744-fByJ), [customer testimonial](https://www.linkedin.com/company/isoquant-ai)).

The strongest argument for writing a check is that these founders fit a pattern I like: technical people expose useful internal infrastructure as a programmable interface, then receive an unusually large initial response. Their Meta, Snowflake, and Twitch experience makes the engineering credible; knowing each other for almost ten years reduces one team uncertainty. Yet my exceptions require evidence strong enough to replace a missing founder prior. Here, the working product is affirmative evidence, but the benchmarks lack independent validation and aggregate token volume does not establish unmistakable customer dependence. The record also shows a product transition without identifying the observation that caused it. Changing products alone does not demonstrate learning.

The competitive danger is specific. Isoquant charges $0.07 per million input tokens and $0.15 per million output tokens for GLM-5.3-Flash. If developers mainly select the cheapest compatible endpoint, Together or Fireworks can force the founders to keep improving performance while surrendering the economic benefit. Isoquant needs optimization that becomes more valuable as it learns a particular customer’s workload. Its banking specialist suggests that route, but does not prove customers will remain or that serving them produces attractive margins. There is no disclosed dependence on a grand partnership, ceremonial launch, or premature sales organization. The unresolved issue is whether the initial proof spike becomes repeated, paid use.

I would hold off on investing my own money. My single flip condition is a documented production-customer episode in which a named inference bottleneck leads to a founder-shipped fix within weeks, followed by that customer retaining and expanding paid usage for eight weeks. That would connect the impressive machinery to the missing founder behavior and customer dependence. Isoquant has earned attention. It has not yet supplied that connection.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 8/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 17/23 |
| A Named User Niche Pulls the Crude Product Back | 12/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 9/12 |
| **Total** | **52/100** |

**Total Score: 52/100** (Neutral)
