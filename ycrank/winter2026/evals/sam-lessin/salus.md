# Salus -- Sam Lessin Evaluation

Here's my problem with Salus in one sentence: this is the most consensus idea in the most consensus category I can imagine right now, and it's a pure software layer sitting on top of platforms that have every incentive to absorb it. "AI agents need guardrails" is not an insight -- it's a headline in the Washington Post. Every enterprise CTO, every AI safety researcher, every framework builder already agrees. When Gartner is projecting 40% of enterprise apps will embed AI agents by end of 2026, and the company's pitch is "agents make mistakes, we catch them," that's not a sane person with an insane idea. That's a sane idea looking for a category winner, and the category already has Fiddler AI ($100M raised), Guardrails AI (open-source with 5.9K GitHub stars), and -- most importantly -- OpenAI and Anthropic themselves, who are building exactly this kind of runtime validation into their own SDKs because they have to.

The founders are Stanford CS students with genuine research depth -- Vedant Singh's work across five Stanford labs on LLM reasoning is substantive, and the Symbolic Systems background for Kevin Pan shows the right kind of interdisciplinary thinking about agent decision-making. They're clearly smart. But "smart Stanford CS students" is not the "sane" I'm looking for in my framework. The "sane" in "sane person, insane idea" means operator credibility that makes a crazy bet legible -- Anatoly Yakovenko's Qualcomm systems engineering made Solana's throughput claims credible, Brian Armstrong's Airbnb engineering background made a regulated crypto exchange seem buildable. These founders haven't shipped production infrastructure at scale, haven't navigated enterprise sales cycles, haven't built and maintained the kind of developer platform they're proposing. They're pre-sane, working on a pre-insane idea.

The structural moat question is where this really falls apart for me. Salus wraps agent tool calls across OpenAI, Anthropic, LangChain, LangGraph, and CrewAI. Every one of those platforms controls the API surface Salus depends on. If Anthropic decides tool-use validation is a first-party feature -- and they will, because trust and safety is existential for them -- Salus's insertion point disappears overnight. The company's cross-platform positioning is the best version of the argument: no single LLM provider will build guardrails that cover competitors' models, so there's a wedge for a neutral validation layer. But that's the Birchbox lesson all over again. The positioning sounds logical until you realize the moat is the software itself, and nothing about this software is structurally unreproducible. The evidence cache mechanism and 58% self-repair rate are nice engineering, but they're features, not moats. Guardrails AI already provides the free alternative. Fiddler already has the enterprise relationships.

The strongest bull case would require Salus to become an actual protocol -- a standard that agent frameworks route through the way Stripe became payment infrastructure. If the evidence cache evolves into a proprietary dataset of agent failure modes that compounds with usage, and if constraint definitions written in YAML/markdown become a de facto standard that enterprises build compliance workflows around, there's a path to lock-in. The 58% blocked-action recovery rate is a genuine technical signal -- if that number holds and improves with data, it creates a flywheel where more usage equals better validation equals more usage. In a world where every company deploys agents and regulatory frameworks mandate runtime validation (the way SOC 2 mandates security controls), being the embedded validation layer could be enormous. But that path requires surviving long enough for the flywheel to spin, and with $100M-funded competitors and open-source alternatives already in market, the window is narrow.

I keep coming back to my core test: would this business be good if AI didn't exist? The answer isn't just no -- the business literally cannot exist without AI agents. This is the opposite of "cherry on top." This is AI all the way down. The entire value proposition, the entire market, the entire product depends on a specific technological trajectory continuing and on the major platforms choosing not to build this themselves. That's not where I put my own money.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| "Sane Person, Insane Idea" Calibration | 7/30 |
| AI-Resistant Structural Moat | 4/25 |
| New Primitive or Protocol Position | 7/20 |
| Narrative Magnitude and Infinity Optionality | 7/15 |
| Real Revenue or Asset Cushion | 3/10 |
| **Total** | **28/100** |

**Total Score: 28/100** (Pass)
