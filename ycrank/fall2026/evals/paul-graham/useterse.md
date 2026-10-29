# Terse -- Paul Graham Evaluation

Terse has shipped something. What I cannot find is the episode that tells me how these founders behave when shipping becomes difficult. Thomas Karatzas spent seven years on Siri and Apple Intelligence and previously founded an acquired company. Olivier Simard-Morissette has substantial backend engineering experience. These are reasons to take the meeting. But the dossier contains no named obstacle, founder-built workaround, and elapsed time. Resourcefulness is the first thing I would investigate before investing my own money.

The strongest evidence is the runtime itself: serial execution for named actors, SQLite storage, generated Python and TypeScript clients, and a public demo. This is considerably more informative than an architecture slide. The limitations are concrete too. The October 26 release notes disclose out-of-order socket messages and possible drops when sending immediately before closing; nested mutations also require explicit persistence discipline. These limitations matter because developers buy durability to stop thinking about certain failures. The question is which guarantees Terse actually removes from the application developer’s workload.

The best argument for investing is that these founders can build a useful primitive before its eventual applications become obvious. Terse fits my unstated preference for programmable interfaces, and self-hosting gives developers a concrete reason to consider it alongside Cloudflare. An MIT license can help such a primitive spread. But the stronger version of this pattern includes developers building things the founders did not anticipate. As of October 27, 256 stars, 19 forks, and a Show HN discussion with 53 points and 25 comments establish attention. They do not establish that a particular developer needs Terse every day. Against Rivet’s overlapping self-hosted offering, that distinction becomes decisive: which users encounter a problem that makes Terse worth adopting?

There is also a possible learning story here, but its middle is missing. LinkedIn describes an earlier workflow platform; the October articles describe Durable Actors. That could represent a valuable discovery made while building the first product. It could also be a change in positioning. Without the observation that caused the change, I cannot award credit for learning. Similarly, experience building assistants makes the founders plausible people to encounter this problem, but it does not establish that they encountered it themselves. The difficult persistence and integration work is real; its connection to their own unmet need remains undocumented.

I would pass today. Terse has genuine technical substance, but it falls below my founder-action gate, and the exceptions do not rescue the decision: the dossier supplies neither unmistakable user pull nor independently validated technical results strong enough to replace that missing evidence. It also establishes no dependence on a major partner, ceremonial launch, or prematurely delegated sales effort; those red flags should not be invented. Undisclosed revenue is ordinary at this stage, though a hosting or support business remains a hypothesis. My verifiable condition for reconsidering is one documented production adoption in which a named team’s blocking problem causes the founders to ship a workaround within a week, followed by that team using Terse weekly for a month. That would connect the code to both founder behavior and real need.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 8/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 18/23 |
| A Named User Niche Pulls the Crude Product Back | 6/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 4/12 |
| **Total** | **42/100** |

**Total Score: 42/100** (Pass)
