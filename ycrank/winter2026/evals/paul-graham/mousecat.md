# MouseCat -- Paul Graham Evaluation

The first thing I notice about MouseCat is the competitive landscape: Sardine has $145M, Feedzai has $347M, DataVisor has $94.5M, Unit21 has $92M. That's nearly $700M in aggregate funding aimed at roughly the same buyer — fraud and risk teams at financial institutions. When I see a category with that much capital already deployed, my default reaction is skepticism. Hot categories get priced in. The question is whether MouseCat sees something these incumbents don't.

And I think they might, because of how the founders found this problem. Joseph McAllister spent four years at Coinbase building ATO and ACH risk models on their ML platform team. He didn't study fraud from the outside — he was the person building the production models, processing the streaming data, and dealing with the gap between investigation and deployment. That gap — the slow handoff from analysts investigating cases to ML engineers encoding what they learned into production rules — is the kind of operational bottleneck that's invisible unless you've lived inside it. It's not that nobody knows it exists; it's that it's tedious, cross-functional, and deeply embedded in how risk teams actually work. That's the kind of problem that survives in plain sight because fixing it requires understanding both the analyst's workflow and the ML pipeline simultaneously. McAllister understands both because he built one side and worked alongside the other.

Nicholas Aldridge's position is the other piece that makes this interesting. He's a core maintainer of the Model Context Protocol — one of the people literally designing how AI agents connect to tools and data sources. If you're building AI agents that need to pull from Middesk, LexisNexis, Snowflake, and Socure to investigate a fraud case, understanding agent orchestration at the protocol level is not a nice-to-have. It's like building a web application in 1995 and also being a contributor to the HTTP spec. That kind of infrastructure insight doesn't guarantee success, but it means the technical architecture won't be the thing that kills them. Together, these two founders represent an intersection — fraud domain ML and AI agent infrastructure — that's genuinely hard to assemble by accident.

The competitive threat is real, but the positioning might defuse it. Every one of those well-funded competitors sells a platform — they want to replace your existing workflow end-to-end. MouseCat positions as a toolkit that augments what risk teams already have. That's a different sales conversation. You're not asking a bank to rip out Feedzai; you're asking them to plug in a tool that makes their existing analysts more productive. Lower friction, lower risk for the buyer, potentially faster sales cycle. It's the same insight Stripe had — don't replace the bank, give developers a better API to interact with existing banking infrastructure. Whether MouseCat can execute on that positioning with two people selling into enterprise financial institutions is a separate question, and a serious one.

What concerns me most is the absence of any evidence that someone actually wants this. No customers, no revenue, no waitlist, no organic pull signals. The 2nd-highest rating at the YC W26 product showcase is a real signal — it means the product impressed a sophisticated audience — but that's peer validation, not user pull. "Make something people want" is the test, and I can't evaluate whether they've passed it because the data simply isn't there yet. Pre-Demo Day, that's not unusual. But the category has enough incumbents that I'd want to see at least one financial institution pulling the product toward them before I'd feel conviction.

The bull case is clear: McAllister's Coinbase experience is genuinely organic, Aldridge's MCP position gives them an architectural moat that money can't easily buy, the toolkit-versus-platform positioning could work, McAllister has a prior exit (Roo Storage, acquired 2020), and they're long-time friends — not strangers who met to start a company. If AI agents become the dominant paradigm for automating knowledge work in the next two years, being built by someone who designed the agent communication protocol is an enormous advantage. The bear case is equally clear: this is a consensus AI category with $700M in incumbent funding, enterprise sales cycles are brutal for tiny teams, and LLM reliability in regulated fraud decisions is a genuine technical risk that goes beyond "just make it better." I'd want to see at least a pilot customer before committing my own money.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Organic Problem Discovery and Schlep Willingness | 21/30 |
| Relentlessly Resourceful Founders | 15/25 |
| Evidence of Wanting: Demonstrated User Pull | 8/20 |
| Technical Hacker Founders Who Build | 13/15 |
| Growth Trajectory and Default Alive Economics | 5/10 |
| **Total** | **62/100** |

**Total Score: 62/100** (Neutral)
