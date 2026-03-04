# Salus -- Naval Ravikant Evaluation

The competitive landscape tells me everything I need to know about timing. Fiddler AI has $100M and already ships a Realtime Guardrails API. Guardrails AI is open-source with nearly 6,000 GitHub stars. Galileo got acquired by Alphabet. "AI agents need guardrails" is not a secret -- it's a Gartner forecast, a Washington Post op-ed, and the thesis behind hundreds of millions in deployed capital. When every smart person in the room agrees on the problem, the asymmetric upside has already been priced away. You don't get paid for being right when everyone is already right.

The specific knowledge question is where this falls apart for me. Vedant Singh has genuine intellectual range -- five Stanford labs, linguistics olympiad medals, work spanning BCIs to credit rating models. Kevin Pan studied Symbolic Systems, which is a beautiful interdisciplinary program. But breadth of academic exposure is not specific knowledge. Specific knowledge about agent failure modes comes from running agents in production at scale, watching them break in ways that surprise you, developing intuitions about failure patterns that can't be taught in a seminar. These founders identified the problem from the research side, not from the operations side. Any two sharp Stanford CS students doing LLM research could have arrived at the same insight. That's the definition of teachable knowledge -- and if it's teachable, eventually it's commoditized.

The leverage architecture is the one genuinely interesting dimension. An API that wraps every tool call across multiple agent frameworks -- OpenAI, Anthropic, LangChain, CrewAI -- is structurally a picks-and-shovels play. Framework-agnostic middleware sitting at the orchestration layer is a position individual LLM providers are unlikely to occupy because of competitive dynamics. One line of code per tool call, validation at the infrastructure layer -- that's code leverage in the classic sense. The 58% self-repair recovery rate is a meaningful technical claim if it holds. This is the right shape of product.

But the right shape doesn't create defensibility without compounding. What gets harder to replicate over time? The evidence cache mechanism -- grounding validation against accumulated run context -- could theoretically develop into a data moat as it processes millions of agent interactions and learns validation patterns. But "could theoretically" is doing a lot of work in that sentence. Today, the core interception-and-validation concept is implementable by any well-funded team in months. Guardrails AI's open-source framework is already training developers to think about LLM validation in a particular way. When the open-source alternative is free and has distribution, your paid product needs to be not incrementally but categorically better. I don't see the categorical gap.

The strongest bull case: if agent deployment truly explodes per the Gartner forecast (40% of enterprise apps embedding agents by end of 2026), the market could be large enough that multiple winners coexist, and Salus's narrow focus on runtime action blocking -- rather than Fiddler's sprawling enterprise platform -- could be an advantage with developer teams who want a surgical tool, not a control plane. The self-repair feedback loop is a genuine product insight that competitors haven't prioritized. And if the evidence cache develops into a learning system that improves validation accuracy with scale, there's a compounding path. But this requires the founders to win a distribution race against better-funded competitors in a consensus market while simultaneously building technology that compounds -- and they're starting from zero customers with no evidence of production deployments. The bull case requires too many things to go right simultaneously.

Two smart founders, real market, correct product shape -- but consensus timing, no specific knowledge advantage, and a competitive landscape that's already capitalized. This is the kind of deal where the founders might build a good business, but the investment doesn't have the asymmetric structure I look for. The losses are bounded at 1x, but so is the likely upside when four competitors with 10-100x more capital are building the same category.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Specific Knowledge and Founder-Problem Authenticity | 9/30 |
| Leverage Architecture and Scalability of the Model | 15/25 |
| Contrarian Positioning and Non-Consensus Timing | 6/20 |
| Founder Integrity and Long-Term Orientation | 8/15 |
| Technical Compounding and Defensibility Over Time | 4/10 |
| **Total** | **42/100** |

**Total Score: 42/100** (Pass)
