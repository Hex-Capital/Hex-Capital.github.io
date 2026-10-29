# Rystic -- Paul Graham Evaluation

The most revealing detail is the agent that created hundreds of GitHub pull requests in minutes at a founder’s previous employer. Someone encountered this problem while building something real. Rystic’s local, stateful simulators address the resulting difficulty: how do you let software change an external system repeatedly without making a mess? That is a credible origin. But the dossier does not show what either founder did immediately after that incident, or how quickly it worked. I can credit the problem’s origin without inventing evidence of resourcefulness.

The strongest evidence is the product. Rystic ships a CLI and stateful service implementations, and measures fidelity against live APIs per commit. Its October 25 comparison reports 99.1% agreement across 1,813 Stripe checks, with 50 parallel jobs finishing in 19 seconds while the shared sandbox completed four before a 40-minute cutoff. These are company measurements, so I discount their precision. Still, there is something concrete to inspect. Publishing disagreements and recommending a real-sandbox smoke test also makes the engineering claim more credible: the founders have defined where their substitute stops working.

The Slack pilot supplies a different kind of evidence. An actual team discovered that its integration read only the first message in each thread, a defect its mocks had missed. This identifies a useful initial customer: developers whose integrations pass superficial tests and fail on stateful behavior. But one unnamed team finding one bug does not establish that users keep returning. Rystic fits my unstated preference for programmable tools that technical users can build upon; it has not yet shown the repeated use or unexpected workflows that make that pattern compelling.

There is an attractive business hidden in the unpleasant work. Matching API state transitions, errors, and asynchronous behavior requires continual implementation and verification. The founders’ Roblox infrastructure and Google AI integration experience is relevant to that work. But the burden can produce either a valuable shared substrate or a succession of custom projects. Veris already offers stateful enterprise simulations. At $89.99 per seat monthly plus usage, Rystic needs developers to make these environments part of their normal development cycle. A useful debugging episode alone will not do it.

The strongest case for writing a check is that these founders have already built the difficult artifact, encountered the problem themselves, and known each other since professional Magic competition in 2016. The hastily assembled cofounder red flag does not apply. Nor does a YC launch establish dependence on launch publicity or partnerships. But there is no documented rejected hypothesis followed by a changed product, so adaptability receives its missing-evidence default. I also considered the working-product exception to my founder gate. This prototype earns serious attention, but its company-reported benchmarks and single pilot do not yet supply enough evidence to replace the missing account of founder action under resistance.

I would keep talking to Rystic, but would not write a personal check today. My flip condition is one documented episode in which a named paying pilot encounters a missing behavior, the founders ship the correction within two weeks, and that customer subsequently uses the simulator weekly for a month. That would connect the promising artifact to the two things still unresolved: how these founders respond when blocked, and whether users pull the product back.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 8/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 18/23 |
| A Named User Niche Pulls the Crude Product Back | 8/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 8/12 |
| **Total** | **48/100** |

**Total Score: 48/100** (Neutral)
