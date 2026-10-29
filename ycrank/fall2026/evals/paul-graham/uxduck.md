# UXDuck -- Paul Graham Evaluation

Ben Butterworth has built software for commanding drones before. That is the most interesting fact about UXDuck. His prior work includes mission planning, MAVLink integration, and controller and camera interfaces—the awkward connections this product now packages. But I cannot find the episode I most want to see: something broke, Ben found a way around it, and a user could do something a week later that they could not do before. His experience makes that story plausible. It does not supply it.

The runtime supplies better evidence than the biography. There is inspectable Rust code connecting MAVLink vehicles over serial, UDP, and TCP, with simulation and MCP, RPC, and plugin interfaces. This is a concrete artifact, rather than a proposal to hire engineers after funding. It fits my unstated preference for programmable tools whose users can discover applications the founder never anticipated. The qualification matters: UXDuck has built the interfaces, but the dossier contains no reproducible performance result or independently measured field reliability. I give credit for the implementation without assuming that its hardest operational problems are solved.

The strongest case for investing is that Butterworth already knows which problems matter. He worked on command-and-control systems and was the first software engineer at a defense startup that reportedly reached 1,000-plus drones. Those drones belong to his former employer, but the experience belongs to him. Compatibility work across autopilots, transports, and applications is precisely the sort of tedious burden that can conceal an opportunity. UXDuck could become useful by removing that burden for one small group of drone engineers. His work history supports that possibility, although it does not establish which personal frustration caused him to start this company.

What is missing is the small group. Five repository stars and zero forks on October 27, 2026 tell me almost nothing about whether an engineer would be upset if UXDuck disappeared. The browser simulation gives people a way to try it. The November 14 hackathon might reveal an unexpected use. Neither establishes repeated use today. This matters because QGroundControl and Mission Planner already perform substantial parts of the job. The decisive question is which particular engineer repeatedly chooses UXDuck despite the inconvenience of adopting something new. Revenue is not required to answer that question.

I would also distinguish the hackathon from the launch-centered distribution plans I distrust. There is no evidence that Butterworth intends the event to substitute for recruiting users himself, or that he is waiting for a major partner. Those red flags are unproven. Likewise, no documented product revision means I cannot assess his ability to change routes; it does not mean he is obstinate. I considered the working-prototype exception to incomplete founder evidence. The public runtime is meaningful, but without exceptional technical validation or unmistakable user pull, it does not overcome the missing evidence on my central founder test. Pricing and commercial packaging remain unresolved, but they are not what makes me pass.

I would pass today. UXDuck has credible technical substance and relevant founder experience, but neither yet demonstrates how Butterworth responds when reality resists him. One verifiable condition would change my decision: a dated deployment with a named drone team showing that he personally overcame a blocking integration problem within weeks, followed by that team using the resulting workflow weekly for a month. That single sequence would reveal both the founder and the need far more clearly than a larger audience for the repository.

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
