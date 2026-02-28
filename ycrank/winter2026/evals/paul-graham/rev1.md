# REV1 -- Paul Graham Evaluation

The thing that jumps out about REV1 is the timing problem. DraftAid, a YC W24 company, is building the same product -- AI-generated 2D manufacturing drawings from 3D CAD -- and has a two-year head start with $150K in paid pilot contracts and integrations across five major CAD platforms. Meanwhile, SolidWorks shipped a native Auto-Generate Drawings beta in 2025, and Siemens NX is adding automated 2D drawing creation to its platform. When I see a company entering a space where both a funded startup and two multi-billion-euro incumbents are already moving, I have to ask: what do these founders know that those other teams don't?

The answer might be in how they found the problem. Alex Rivero was a mechanical design engineer at Tesla's Motor Design team working on Cybertruck and Robotaxi, then moved to Apple to work on the iPhone 17 lineup. He spent years placing standard views, section views, and GD&T callouts on manufacturing drawings -- this wasn't a problem he read about, it was his actual daily work. That's the kind of organic origin I care about most. It's the same pattern as Drew Houston forgetting his USB drive, except Alex was forgetting his sanity hunched over SolidWorks annotating drawings he'd already fully specified in 3D. When someone on his LinkedIn announcement called it "universally terrible drawing software," that rings true because every mechanical engineer knows it. The problem has been hiding in plain sight for decades.

Where it gets interesting is the schlep underneath. Getting GD&T right isn't a generic AI problem -- it requires deep knowledge of ASME Y14.5 standards, and errors can cause parts to be machined incorrectly in aerospace or medical devices. That's the kind of painful, domain-specific accuracy requirement that causes software engineers to unconsciously look away. Louis Liu brings the ML and production engineering chops (he solo-built Tesla's Supercharger and Robotaxi planning platform), while Alex brings the manufacturing domain knowledge that determines whether generated tolerances will actually work on a shop floor. The pairing of a domain expert who lived the problem with a builder who ships production systems is precisely what this kind of product demands.

But here's what troubles me: schlep blindness only protects you when others haven't seen the problem yet. DraftAid saw it two years ago. The underlying schlep still exists -- GD&T accuracy is genuinely hard, and SolidWorks' own documentation says their beta feature is "not intended to complete your entire drawing for you" -- but the competitive moat from being the first to attempt it is gone. REV1 needs to be meaningfully better, not just present. And I have no evidence yet of what "better" looks like. No working prototype shown publicly, no users, no demo, no technical differentiation articulated. The dossier gives me credentials and pain, but not a product.

The bull case is real though. DraftAid being first doesn't mean they got it right. In manufacturing, "almost accurate" GD&T is worse than no automation at all -- an engineer who trusts AI-generated tolerances and doesn't check them could cause a catastrophic quality failure. If Alex's years of hands-on drawing creation at Tesla and Apple mean REV1's output is the first that a senior mechanical engineer would actually trust without heavy manual correction, that's the whole ballgame. The market isn't going to the first mover; it's going to whoever crosses the manufacturing-grade accuracy threshold first. And someone who designed motor components for Cybertruck has intuitions about tolerancing that a software team in Toronto simply won't have. The CNC router startup Alex founded in 2019 -- building seven different prototypes -- tells me this is someone who iterates on physical things until they work. That's the right instinct for a product where accuracy is existential.

Still, I'm left in the territory of "promising founders, real problem, but prove it." The organic origin is strong, the team composition is well-matched to the challenge, and the schlep still offers some protection because accuracy in manufacturing is unforgiving. But the competitive landscape means this is no longer a case of seeing what others missed -- it's a case of executing better than people who are already running. At pre-seed with no traction evidence and a direct competitor with paying customers, I'd want to see a working demo and at least one engineer who's used it before writing a check.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Organic Problem Discovery and Schlep Willingness | 21/30 |
| Relentlessly Resourceful Founders | 14/25 |
| Evidence of Wanting: Demonstrated User Pull | 8/20 |
| Technical Hacker Founders Who Build | 11/15 |
| Growth Trajectory and Default Alive Economics | 5/10 |
| **Total** | **59/100** |

**Total Score: 59/100** (Neutral)
