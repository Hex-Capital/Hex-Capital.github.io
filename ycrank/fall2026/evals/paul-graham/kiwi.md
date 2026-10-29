# Kiwi -- Paul Graham Evaluation

Melanie Chen spent 20 hours in one week correcting agent work while leading post-sales. That is the most interesting fact about Kiwi. She encountered the problem while doing a job, and her experience at Chalk and Plaid puts her close to its machinery. But the next fact I want is missing: what specifically broke, what did she build to get around it, and how quickly did that change the result? The [launch account](https://www.ycombinator.com/launches/WGR-kiwi-your-gtm-agent-s-data-engineer) establishes an experienced problem. It does not yet establish a successful workaround.

Kiwi’s proposed answer makes sense. Versioned business records, SQL traces, and replayable snapshots could turn an agent’s mistake into something a person can reproduce and fix. Stopping when a required source is stale is particularly sensible. The difficulty is that the dossier supplies descriptions of these capabilities, without an inspectable deployment or measured reliability result. I give the technical design some credit, discounted for being self-reported. Bill Qin’s work building Chalk SQL makes the implementation plausible; it does not demonstrate that Kiwi’s implementation works ([product and team](https://withkiwi.ai/about)).

The strongest case for investing is that these founders have found work other people would rather avoid. Maintaining connectors, reconciling business records, and preserving the history behind decisions are tedious. They may also be precisely what makes useful automation possible. Kiwi fits my preference for programmable infrastructure, and Chen’s operational experience gives the idea more substance than a generic agent pitch. But the corresponding pattern I look for is technical users adopting the primitive before everyone agrees what its category is. Here, more than **100 companies consulted** establishes discovery effort, without establishing repeat use. Order-form provisions for paid pilots establish how Kiwi could charge, without establishing that anyone has paid ([launch](https://www.ycombinator.com/launches/WGR-kiwi-your-gtm-agent-s-data-engineer), [terms](https://withkiwi.ai/terms)).

That distinction matters because the founders could build a technically respectable system that customers never make essential. Clay already describes combining company context with agents that learn from outcomes. Kiwi’s opening would be a small group whose workflows fail without reproducible data, and who keep returning despite the product’s rough edges. The dossier does not identify that group. Nor does it document a rejected hypothesis and a resulting product change. These are unanswered questions, rather than evidence of rejection or stubbornness. Similarly, invitation-only access and a launch announcement do not establish the red flag of mistaking launch day for distribution; the founders are soliciting demos themselves.

I would pass on the present evidence. The founder-originated problem is the strongest dimension; demonstrated user pull is the weakest. Shared employment at Chalk provides some relationship context, without proving a long history of joint execution, and nothing establishes premature delegation or dependence on a large partner. I also checked the exceptions: there is no demonstrated prototype, unmistakable adoption, or independently validated technical result strong enough to override the missing resourcefulness evidence. One verifiable condition would make me reopen the decision: an inspectable customer deployment history showing a founder clearing a blocking integration within seven days, followed by that customer using the repaired workflow weekly for six weeks. That would begin to show what these founders do when reality pushes back.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 8/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 10/23 |
| A Named User Niche Pulls the Crude Product Back | 5/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 8/12 |
| **Total** | **37/100** |

**Total Score: 37/100** (Pass)
