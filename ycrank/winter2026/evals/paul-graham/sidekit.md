# SideKit -- Paul Graham Evaluation

The thing that catches my eye about SideKit is also the thing that worries me most: this problem has no schlep. Analytics, feature flags, version gating -- every mobile developer knows these are annoying to set up. But "annoying to set up" is not the same as "painful enough that smart people unconsciously avoid it." Nobody looked at mobile analytics and thought "I'd rather not deal with banks and regulators." They looked at it and thought "I'll just use Firebase." The proof is in the competitive landscape: LaunchDarkly raised $330 million, PostHog raised $180 million, Statsig got acquired by OpenAI for $1.1 billion. When a problem attracts that many well-funded players, it means the schlep barrier is low enough that capital can substitute for insight. Stripe worked because even with hundreds of millions, you still had to navigate the banking infrastructure labyrinth. SideKit's problem space has no equivalent structural moat.

What makes this frustrating is that the origin is genuinely organic. Ashish built Not Evil Sudoku, shipped it to 50,000 installs, then built his own private analytics because the existing options collected too much user data or were too heavy. That's exactly how the best startup ideas are supposed to emerge -- not from a brainstorming session, but from a founder scratching his own itch. He was literally his own first user. If you told me just the origin story without the competitive context, I'd be excited. It's the same pattern as Dropbox: Houston kept forgetting his USB drive, Ashish kept needing analytics that respected privacy. But Houston's insight led him into a space where the technical challenge of sync was genuinely hard. Ashish's insight led him into a space where the bundling is convenient but replicable.

The "self-healing AI" feature -- agents that parse user feedback and ship fixes as pull requests -- reads like differentiation bolted onto a commodity product. When the core offering (analytics + version gating) isn't defensible on its own, adding an AI layer doesn't change the structural problem. It changes the pitch. Any team with access to the same LLM APIs can replicate this. And if the AI-generated fixes produce regressions, it actively undermines trust in the platform. The feature is clever but it's a horizontal capability, not a vertical moat.

The strongest bull case is timing. AI coding tools are creating a genuine new class of developers who can build apps but don't know how to ship them. SideKit's tagline -- "It's never been easier to turn ideas into apps, it should be just as easy to take those apps to production" -- directly addresses this wave. If Cursor and Copilot produce 10x more indie developers, the market for dead-simple production tooling could expand dramatically, and SideKit's 244 kB SDK shows the kind of engineering taste that matters to developers. The free version-gating tier is a smart wedge. And the two UWaterloo CS founders clearly build things themselves -- Ashish has Databricks and Microsoft on his resume, 20 GitHub repos, and a shipped consumer app. These are real hackers. If the AI-coding wave creates a large enough new market segment that Firebase and PostHog are too bloated to serve well, SideKit could own the "production toolkit for vibe coders" category the way Heroku once owned "deployment for Rails developers." That's a real scenario.

But I don't think it's the likely one. Firebase Remote Config is free and already integrated into 72% of iOS apps and 99% of Android apps. PostHog is open source and already bundles analytics with feature flags. When your competitor's product is free and already embedded everywhere, your bundling advantage has to be dramatic, not incremental. Seven GitHub stars and 227 LinkedIn followers after launching suggests the market hasn't pulled this product toward it yet. Even accounting for pre-seed stage, some organic adoption signal -- a developer tweeting that SideKit replaced their Firebase setup, a handful of apps in production using the SDK -- would change my calculus. The absence of any visible user pull, combined with the low schlep barrier, makes this a pass for me. The founders are solid. The origin is real. But the problem they discovered is one that everyone can already see and half a dozen well-funded companies are already solving.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Organic Problem Discovery and Schlep Willingness | 14/30 |
| Relentlessly Resourceful Founders | 11/25 |
| Evidence of Wanting: Demonstrated User Pull | 4/20 |
| Technical Hacker Founders Who Build | 11/15 |
| Growth Trajectory and Default Alive Economics | 5/10 |
| **Total** | **45/100** |

**Total Score: 45/100** (Neutral)
