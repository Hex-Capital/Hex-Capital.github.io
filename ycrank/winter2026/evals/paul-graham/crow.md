# Crow -- Paul Graham Evaluation

The first thing I notice about Crow is that the idea origin is "100+ conversations with app builders." That's customer development. It's not the same as discovering a problem through your own experience. Neither founder appears to have been building a SaaS product and personally felt the agony of wiring up an AI copilot from scratch. They surveyed the landscape, identified a pattern, and built to it. This is exactly the kind of idea generation I've warned about — smart people sitting down to think of startup ideas rather than stumbling into one they can't ignore. The question "how did you find this problem?" has a revealing answer here: they went looking for it.

The category itself is where my concern deepens. Embeddable AI copilots for SaaS apps is one of the most crowded, most consensus spaces in AI right now. Command AI has $23.8M and a multi-year head start doing nearly the same thing. Kapa.ai has raised $3.7M for adjacent territory. Intercom built Fin. Moveworks got acquired for $2.85B. When I said the most impressive YC companies I've seen recently aren't working on AI, this is what I meant — not that AI is bad, but that the obvious AI applications have already attracted so much capital and attention that the upside for a new entrant is compressed. There's no schlep blindness here. Everyone can see this opportunity. That's precisely why it's already crowded. The problems Crow is solving — wiring up APIs, handling UI navigation, managing auth — are real engineering challenges, but they're not the kind of ugly, regulatory, institutional schlep that structurally deters competition the way banking compliance deters payment startups. The core technology is built on widely available foundation model capabilities. When your moat depends on "execution quality" rather than structural barriers, you're in a race, and races favor the better-funded.

The bull case is worth engaging with seriously. These are genuinely technical founders — Berkeley EECS and CS, experience at OpenAI, Typeface, Amazon Ads, and a YC S23 company. They've already built a real product with multiple integration paths: React SDK, script tag embed, Cursor install, MCP servers. The documentation exists. The npm package has 1,091 weekly downloads. That's not nothing. If you squint, you could argue this is similar to Stripe's early days — payments weren't contrarian either, and Stripe won by making the developer experience dramatically better than everything else. If Crow can make deploying an AI copilot genuinely trivial — under a week as they claim — while Command AI evolves into a broader, more complex platform, there's a wedge. The timing story is real: LLM costs dropping, MCP standards emerging, every product team feeling pressure to add AI. If Crow becomes the default way developers add a copilot to their app the way Stripe became the default way to add payments, the outcome could be enormous. For this to work, though, the developer experience would need to be so superior that it creates its own organic pull — and I don't see evidence of that yet.

What I do see is two capable young engineers who met on their first day at Berkeley, which passes the co-founder relationship test. They've both shipped code at real companies. Aryan's GitHub repos have modest but real traction (PushUpCounter at 68 stars, StereoVision at 50). Jai's background at OpenAI gives him genuine LLM infrastructure knowledge. The technical founder dimension is the strongest thing about this company. They can build. The question is whether they're building the right thing, and whether they found it for the right reasons.

The naming issue bothers me more than it should. usecrow.com belongs to a completely different company. "Crow" as a word is undifferentiated — there are multiple unrelated "Crow" products on Product Hunt alone. This isn't decisive, but it reflects a pattern: when founders choose a generic name and accept a compromised domain, it sometimes signals they're moving fast through a checklist rather than obsessing over every detail. Maybe that's unfair. But details matter.

I'd pass on this one. The founders are smart and technical, but the idea was manufactured from market research rather than organic experience, the category is consensus with well-funded incumbents, and the schlep is insufficient to create structural barriers. A company that might raise money but will struggle to differentiate through the years of grinding execution required to win in a crowded market. I'd want to see these founders again with an idea they discovered because they couldn't not work on it.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Organic Problem Discovery and Schlep Willingness | 7/30 |
| Relentlessly Resourceful Founders | 13/25 |
| Evidence of Wanting: Demonstrated User Pull | 7/20 |
| Technical Hacker Founders Who Build | 11/15 |
| Growth Trajectory and Default Alive Economics | 5/10 |
| **Total** | **43/100** |

**Total Score: 43/100** (Pass)
