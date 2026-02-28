# SideKit -- Paul Graham Evaluation

The origin story here is real, and that's worth acknowledging upfront. Ashish Selvaraj built an iOS app that got 50,000 installs, needed private analytics for it, couldn't find a lightweight solution, so he built one himself. Then he wrote a Medium article about the experience. SideKit is the productized version of that solution. This is exactly how startup ideas should emerge -- not from a brainstorming session, but from building something and discovering what's missing. If I stopped the analysis at "how did you find this problem," SideKit would score well. But that's only the first half of my test. The second half is whether the problem involves the kind of painful complexity that makes smart people unconsciously look away. And that's where SideKit breaks down.

What's the schlep here? Bundling three well-understood capabilities -- feature flags, analytics, version gating -- into one SDK. That's not a schlep. That's a packaging exercise. Compare this to Stripe: the reason thousands of programmers knew payment processing was broken but didn't fix it was that the fix required navigating banking regulations, money transmission licenses, PCI compliance, and fraud detection across dozens of countries. The schlep was the moat. With SideKit, any competent engineering team at LaunchDarkly could build equivalent functionality in a sprint. Firebase already gives away most of this for free as part of Google's ecosystem. When your primary differentiator is "we put three things in one package instead of three," you're one product update away from irrelevance.

The economics concern me independently of the competitive dynamics. At $9-$42/month per customer, reaching ramen profitability requires hundreds of paying users converting from a free tier that's competing against a free product from Google. To reach $1M ARR -- still a modest number -- you need roughly 2,000 customers on the Growth plan. That's a lot of indie developers to find and convert when the switching cost from your product is essentially changing a few import statements. The bundling value proposition is real but thin. Developers who care enough about privacy to avoid Firebase probably care enough to evaluate each tool independently.

The strongest bull case goes something like this: AI coding tools are about to create a massive new population of mobile app builders who don't want to assemble infrastructure from multiple services. SideKit becomes the Heroku of mobile production tooling -- not the most powerful option, but the simplest one for a generation that values convenience over configurability. If the number of people shipping mobile apps doubles or triples in the next two years, a "one package" solution has natural distribution advantages. The founders are technical, they're at Waterloo, and Ashish has actually shipped a consumer app to meaningful scale, which is more than most pre-seed developer tool founders can say. For this to work, SideKit would need to expand rapidly to Android and Flutter, build enough data lock-in to create real switching costs, and grow faster than incumbents can respond. It's possible. But it requires the timing thesis to be right and the incumbents to be slow, and I've seen too many bundling plays get absorbed by platforms that already own the developer relationship.

Both founders are genuine builders -- CS students at Waterloo who wrote the code themselves, with Ashish having shipped a real app and Ethan bringing competitive programming chops and React Native skills. That's the right profile for a pre-seed developer tools company. I don't doubt their ability to build. I doubt whether what they're building has enough structural difficulty to keep others from building the same thing. The best developer tools companies -- Stripe, Twilio, even Replit -- succeed because the underlying problem is genuinely hard, not because the packaging is convenient. SideKit is solving a real annoyance, but annoyances and schleps are different categories. One produces features. The other produces companies.

I'd pass on this with my own money. The organic origin is authentic, and I'd tell these founders that matters -- it means their instincts for finding problems are good. But I'd also tell them to look for the version of this problem that's ten times harder, that involves the regulatory or institutional complexity nobody wants to touch. That's where the real opportunity is hiding.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Organic Problem Discovery and Schlep Willingness | 14/30 |
| Relentlessly Resourceful Founders | 12/25 |
| Evidence of Wanting: Demonstrated User Pull | 4/20 |
| Technical Hacker Founders Who Build | 11/15 |
| Growth Trajectory and Default Alive Economics | 4/10 |
| **Total** | **45/100** |

**Total Score: 45/100** (Neutral)
