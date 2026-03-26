# Keyframe Labs -- Paul Graham Evaluation

Parth Radia spent seven years building digital humans before starting Keyframe. Two years at AT&T Labs creating the first 3D call over production networks. Five years at Ericsson founding and leading a 30-person team that built foundation models for voice and video synthesis on petascale human datasets. He didn't discover this problem from reading about AI avatars on TechCrunch. He discovered it by spending the better part of a decade inside a large corporation watching them fail to ship it correctly. That's the pattern I look for -- the person who worked inside the problem long enough to see exactly where the incumbent's incentives prevent them from building the right product, then left to build it themselves. The organic backstory here is genuinely strong.

The schlep is real too. Rendering photoreal human faces with emotional expressiveness at 500ms latency for six cents a minute is not a weekend project. The prior model uses a two-stage flow-based image transformer running at 2x realtime on consumer GPUs -- that's a specific architectural claim that suggests actual inference optimization work, not just wrapping someone else's model in an API. The pricing gap tells the story: competitors charge $0.10 to $0.56 per minute. Keyframe charges $0.06. If that cost advantage comes from genuinely better architecture rather than subsidized pricing, it's the kind of structural moat that improves over time as volume scales. Inference efficiency compounds.

What concerns me is the competitive landscape. Tavus just raised $40M from Sequoia and CRV to build exactly this product. HeyGen is at $95M ARR. Synthesia has a $4B valuation and the entire Fortune 100 as its distribution channel. There are at least five well-funded companies attacking real-time interactive avatars. This triggers one of my strongest red flags: when the category is hot enough that every VC is already excited, the upside has usually been priced in. I've been saying the most impressive YC companies right now are not working on AI, and part of why is that AI categories attract so much competition that founder quality alone isn't enough to win -- you need a structural advantage that survives the funding arms race.

Keyframe might have that structural advantage. If their architecture genuinely produces comparable quality at one-third the cost of Tavus, that's not incremental -- it's the difference between use cases being economically viable or not. At $0.06/min, you can deploy an avatar for every customer support call. At $0.32/min, you can't. The bull case is that Keyframe is the low-cost producer in a market where cost determines which applications can exist at all, the way AWS pricing unlocked workloads that traditional hosting couldn't support. But I can't verify this from the outside. The eight testimonials on the website are anonymous -- no named companies, no public revenue, no user counts. For a company with a live product and a pricing page, the absence of any concrete traction signal is notable. Not damning at pre-seed, but notable.

The co-founder dynamic is a quiet positive. Both Radias are likely siblings, and family co-founders are the strongest form of pre-existing relationship. I've seen nine companies fall apart in a single batch because the founders didn't know each other well enough. That won't happen here. Kaahan brings complementary skills -- perception engineering at Zipline, published ML research in JAMA Cardiology -- that map directly to the computer vision core of this product. Both founders are clearly technical, both have built things that shipped, and they've already produced two model generations (Persona-1 and Persona-1.5-live). The founding team is strong enough that if the idea were slightly less crowded, I'd be significantly more excited.

The honest assessment is that I'm torn. The organic discovery is among the strongest I've seen in a batch -- seven years of domain immersion is not something you can fake or replicate. The technical depth is real. But the market looks like a land war with companies that have 100x more capital. Keyframe's bet is that architectural efficiency beats capital accumulation. Sometimes that's true. But I'd want to see even one named customer or a revenue number before committing my own money to a category where Sequoia is already betting tens of millions on the other side of the table.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Organic Problem Discovery and Schlep Willingness | 23/30 |
| Relentlessly Resourceful Founders | 13/25 |
| Evidence of Wanting: Demonstrated User Pull | 6/20 |
| Technical Hacker Founders Who Build | 12/15 |
| Growth Trajectory and Default Alive Economics | 5/10 |
| **Total** | **59/100** |

**Total Score: 59/100** (Neutral)
