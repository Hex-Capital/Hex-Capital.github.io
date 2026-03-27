# Sazabi -- Paul Graham Primary Source Research: Structured Quote Record Evaluation

The thing that jumps out about Sazabi is the founder's career arc. Sherwood Callaway built observability infrastructure at Brex, then founded an AI company that got acquired, then managed one of the largest agentic systems in production at 11x. Now he's building observability for AI agents. This isn't someone who "thought up" a startup idea. This is someone who noticed a problem — which is exactly the verb you want. "The way to get startup ideas is not to try to think of startup ideas. It's to look for problems, preferably problems you have yourself." Callaway has lived inside this problem from both sides: he knows what observability teams need because he built one, and he knows what AI agent systems break because he ran one at scale. That combination is genuinely rare. Most people have one half of this. He has both.

The "logs are all you need" thesis is the kind of idea that looks bad to most practitioners. Any seasoned DevOps engineer will tell you that you can't reconstruct metrics and traces from logs alone — that's heresy against the three pillars. Which is actually what makes it interesting as a startup thesis. "The best ideas look initially like bad ideas." If Callaway is right that AI can infer the structured telemetry from raw logs, it collapses an enormous amount of complexity into a simpler primitive. If he's wrong, the whole thing falls apart. But this is exactly the kind of technically ambitious contrarian bet that has asymmetric upside. The question is whether it works at production scale, and nobody outside the company can answer that yet.

This is also a textbook "schlep blindness" opportunity. "Your unconscious won't even let you see ideas that involve painful schleps." Building production-grade observability — with SOC 2, ISO 27001, the whole compliance stack — is genuinely painful, unglamorous work. It's "a lot more intimidating to start a startup like this than a recipe site." The fact that Sazabi already has SOC 2 Type I & II and ISO certifications at ten people tells me something about the seriousness of execution. That's not the behavior of someone playing house. Those certifications are expensive, tedious, and necessary for enterprise sales. Getting them early is a signal about intent.

Now, the thing I can't get past: single listed founder. This is one of my explicit red flags, and for good reason. "Starting a startup is too hard for one person. Even if you could do all the work yourself, you need colleagues to brainstorm with, to talk you out of stupid decisions, and to cheer you up when things go wrong." The fact that Callaway has ten people on the team partially mitigates this — he can clearly recruit. And his angel roster reads like a roll call of the AI developer tools ecosystem: people from Anthropic, Vercel, Brex, LangChain, Replit. These are the exact people whose products create the problem Sazabi solves, and they're putting their own money in. That's a strong endorsement. But none of them are co-founders sitting in the room at 2am when production is down.

The competitive landscape here is genuinely daunting. Datadog is a $50B+ company that can ship AI observability features. LangSmith hit $1.25B valuation. Langfuse got acquired by ClickHouse. Arize raised $70M. Laminar is open-source and in the same YC orbit. But "it's exceptionally rare for startups to be killed by competitors." The real question is whether this is a new category or just a feature of existing platforms. If AI-generated code becomes the majority of production code — plausible within a few years — then the entire observability stack needs to change. Datadog's per-host, per-trace pricing model would need restructuring to compete with a logs-first approach, and incumbents historically struggle to cannibalize their own revenue model. That's the bull case: Sazabi is positioned at a genuine paradigm shift, not just an incremental improvement.

For this to be a great investment, three things need to be true: the "logs are all you need" thesis has to work at production scale, AI coding agent adoption has to continue accelerating (so the problem grows faster than incumbents can adapt), and Callaway has to find a strong technical co-founder or equivalent leader to share the load. If all three hold, this could be the company that defines AI-native observability the way Datadog defined cloud-native observability. That's a big if, but the founder-market fit is as precise as I've seen at pre-seed. I'd want to meet Callaway in person. The angel investors are essentially telling me he passes the animal test — but I'd want to see it for myself before writing a check.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Thesis fit | 17/25 |
| Founder quality | 14/20 |
| Market opportunity | 15/20 |
| Defensibility | 10/20 |
| Conviction | 8/15 |
| **Total** | **64/100** |

**Total Score: 64/100** (Neutral)
