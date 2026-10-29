# Maritime -- Paul Graham Evaluation

Maritime’s founders encountered the problem while hosting hundreds of research agents at MIT. That is a good place to find an idea. Maria Gorskikh and Aryaman Shrivastava had worked on agent coordination before deciding that agents needed their own persistent computers. But the account stops where my most important question begins: what specifically broke, what did they do about it, and how long did the fix take? Their shared NANDA work establishes relevant experience. It does not establish how they behave when blocked. I would leave resourcefulness at its missing-evidence default rather than manufacture an anecdote from their credentials.

The product supplies stronger evidence. Maritime has documented persistent storage, encrypted secrets, snapshot-based sleep and wake, and access through an SDK, API, CLI, and dashboard. Gorskikh’s Open Instinct project uses Maritime, giving the infrastructure a concrete application beyond its own documentation. These are meaningful artifacts for a three-person company. They support substantial technical credit, though they do not establish reliability under customer load or a measured advantage over alternatives. The seven-day limit on restoring process memory also makes the promise precise: an agent’s disk can persist after its running state expires.

The strongest case for investing is that these founders have found an ugly recurring task underneath something developers already want to build. Provisioning environments, preserving state, and managing secrets are exactly the chores that can conceal a good infrastructure company. Maritime also fits my recurring preference for programmable tools whose users can discover applications the founders did not anticipate. Its $20 monthly plan for 20 agents makes experimentation accessible. Docker’s September 24 sandbox announcement does not invalidate that opportunity; a small company can win by solving one developer’s entire problem more carefully. But the dossier establishes the tools and the founders’ exposure to the work. It has not yet established that outside developers depend on the resulting service.

That distinction matters more than the audience figures. Open Instinct’s 416 stars belong to an agent project; they are not 416 Maritime customers. Product Hunt followers and estimated website visits do not show agents returning to work every morning. Realized revenue and repeat customer usage are unreported, so demand receives the default rather than an adverse score. Likewise, the March and August launches do not demonstrate an evidence-driven product revision. They also do not prove the founders suffer from the launch-day red flag. Their shared research history weighs against assuming an application-assembled team, and their prior work makes a manufactured “AI-for-X” origin unlikely.

I would pass on the evidence available. The exception case deserves consideration: a working product can sometimes replace an uncertain founder prior. Here, however, the SDK and founder-built application do not supply unmistakable outside pull or independently validated technical proof strong enough to override the resourcefulness gate. My single flip condition is a verifiable customer episode: an outside developer hits a deployment blocker, the founders ship a workaround within two weeks, and that customer subsequently runs paying production agents on it for eight weeks. That would connect founder behavior, technical execution, and genuine need without asking a follower count to stand in for all three.

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
