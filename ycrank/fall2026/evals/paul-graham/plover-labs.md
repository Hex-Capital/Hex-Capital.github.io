# Plover Labs -- Paul Graham Evaluation

Plover Labs has persuaded two enterprises to pay while its most ambitious promise remains unproved. That is a useful tension. Fieldguide still requires human review, but it has put the system into production. The question is whether removing that last reviewer is the natural next step in a working product or a substantially harder problem than everything the founders have solved so far.

The technical evidence deserves substantial credit. Fieldguide’s August 10 evaluation reports merge-ready results on 37 of 40 historical tasks, with a 28-minute median completion time. That is an inspectable result, though the evaluation omitted production review and some browser and document checks. Blueprints, environment definitions, and regression cases give Plover a mechanism for improving reliability. They do not establish that passing its checks means a change is safe to merge. I would score the functioning system highly without crediting the unachieved promise of review-free shipping.

The strongest argument for writing a check is that customers already tolerate this limitation. Plover reports five-figure monthly contracts with Envoy and Fieldguide. Fieldguide independently describes a production quarter with 40% higher merged PR throughput. The contracts establish willingness to pay; the customer account establishes actual use. Neither requires attributing every additional PR to Plover. I would not combine that observation with the separate company-reported threefold increase in PRs per engineer. These are different claims. Together, payment and production use identify a narrow well: engineering teams whose agents generate work faster than their existing process can verify it.

What I cannot reconstruct is what Ahn did when something became difficult. His CMU safe-reinforcement-learning research, Apple agent research, and previous company make technical competence plausible. They do not supply a dated episode connecting a specific obstacle to his workaround and its result. I therefore use the missing-evidence default for resourcefulness. The dossier also supplies neither an evidence-driven change of product route nor a documented personal collision with this particular problem. Those receive their defaults too. Accumulating regression tests shows product maintenance; it does not by itself prove the founders abandoned a mistaken hypothesis. Customer-specific integration work is promising schlep, but it cannot establish the idea’s origin.

Plover matches my unstated preference for concrete proof before fundraising claims: there is deployed software and a customer-authored account. It has less evidence of the programmable substrate that users extend into unexpected workflows. The obvious red flags—waiting for a major partner, substituting a ceremonial launch for recruitment, or delegating early selling—are not documented. Unknown cofounder history is simply unknown. I also considered the working-product exception to uncertain founder evidence. The paid deployment makes that exception worth considering, but the published results leave the hardest verification step with the customer. That limits how much the product can substitute for evidence about the people.

I would hold off on a personal check. Sonar already exposes deterministic analysis to agents, while Harness is combining delivery infrastructure with acquired Augment technology. Plover could still win by doing the customer-specific work these broader tools leave unfinished. But today I can see the useful product more clearly than the founders’ ability to keep finding a route through resistance. My flip condition is one documented customer episode showing Ahn encounter a concrete verification failure, ship a workaround within weeks, and have that customer adopt it successfully. That would answer the question this dossier leaves open.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 8/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 20/23 |
| A Named User Niche Pulls the Crude Product Back | 16/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 4/12 |
| **Total** | **54/100** |

**Total Score: 54/100** (Neutral)
