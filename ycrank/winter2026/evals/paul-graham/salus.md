# Salus -- Paul Graham Evaluation

The first thing I notice about Salus is that everyone already knows this problem exists. AI agents making bad tool calls in production -- that's not a hidden problem. Every engineering team deploying agents has already worried about this. Every VC has already funded someone to solve it. Fiddler AI has $100M. Guardrails AI is open-source with nearly 6,000 GitHub stars. Galileo got acquired by Alphabet. When I look at a problem, I ask whether schlep blindness is keeping people away from it. Here, the opposite is true. The problem is so visible and so obviously important that well-capitalized teams are already racing to own it. That's not where I like to invest.

The origin story concerns me more than the competition does. How did Kevin and Vedant find this problem? The dossier doesn't say. They're Stanford CS roommates -- smart, clearly technical, good research credentials. But I don't see the moment where they were personally running an agent that executed a catastrophic action and they thought "I have to fix this." Their website example -- "Your agent processed a refund without looking up the order ID" -- reads like a hypothetical constructed to sell the product, not a war story from their own experience. When Drew Houston kept forgetting his USB drive, that was organic. When the Collisons spent years watching developers struggle with payment APIs they'd personally wrestled with, that was organic. Two Stanford students building guardrails for AI agents in 2026 feels more like reading TechCrunch than stumbling into a problem. I could be wrong -- maybe they have a deeper backstory that isn't public -- but the absence of any visible founder-problem origin is itself a signal.

The bull case is real though, and I want to be honest about it. The specific technical focus -- intercepting tool calls at runtime, validating against accumulated evidence, and feeding structured feedback back for self-correction -- is genuinely narrower and more opinionated than what Fiddler or Guardrails AI offer. The 58% blocked-action recovery rate is a concrete metric that suggests real engineering depth, not just a wrapper. The cross-platform positioning is smart: if you're framework-agnostic, sitting across OpenAI, Anthropic, LangChain, and CrewAI, then no single LLM provider can easily displace you because none of them will build guardrails for their competitors' models. And `pip install salus-ai` with a single decorator is exactly the right distribution model -- that's how Stripe won, by making integration trivially easy. If these founders have genuinely built something developers love to integrate, and if the self-repair loop creates a compounding data advantage over time, this could become the standard middleware layer for agent safety. That's a big outcome.

But "could become" requires surviving long enough against competitors with 10-20x their resources, and I don't see evidence of the kind of fanatical early user love that would make that survival likely. No revenue signals. No named customers. No community. No organic adoption metrics. At pre-seed I don't demand traction, but I look for any sign that real developers have tried this and pulled it toward them -- a Discord with 50 active users, a GitHub repo with real issues being filed, a tweet from a developer saying "this saved my agent from catastrophe." The published benchmarks are academic validation, not user validation. Making something people want is different from making something that scores well on benchmarks.

The founders are technically strong -- Vedant's research across five Stanford labs on LLM reasoning is directly relevant, and both are CS students who clearly built the product themselves. That matters. But they're undergraduates with internship experience, not founders who've been in the trenches of production AI systems. The co-founder relationship is good (Stanford roommates predating the company), which avoids one of my biggest red flags. Still, I'd want to see evidence that they've personally operated in the environment where agent failures cause real business damage, not just studied the problem academically.

This is a competent team building an incrementally differentiated product in a consensus category. The idea wasn't discovered through lived pain -- it was identified through intelligence, which is a different and weaker foundation. When twenty companies are already funded to solve the same visible problem, you need either a dramatically better product or dramatically more determined founders to win. I see neither signal yet. I'd watch them but I wouldn't write a check today.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Organic Problem Discovery and Schlep Willingness | 9/30 |
| Relentlessly Resourceful Founders | 11/25 |
| Evidence of Wanting: Demonstrated User Pull | 7/20 |
| Technical Hacker Founders Who Build | 11/15 |
| Growth Trajectory and Default Alive Economics | 4/10 |
| **Total** | **42/100** |

**Total Score: 42/100** (Pass)
