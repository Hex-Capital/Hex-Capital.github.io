# REV1 -- Paul Graham Evaluation

The first thing I notice about REV1 is that Alex Rivero was personally sitting at a workstation at Tesla, annotating 2D drawings for Cybertruck rotor assemblies, placing GD&T tolerances one by one according to a 300-page rulebook. Then he went to Apple and did the same thing for iPhone 17 components. Six years of this. He didn't read a blog post about how CAD workflows are ripe for disruption. He lived inside the problem until he couldn't stand it anymore. That's organic discovery in its purest form — the founder who builds the tool he wishes existed.

The schlep here is genuine and underappreciated. GD&T annotation isn't the kind of problem that attracts most AI founders, because it requires deep mechanical engineering knowledge combined with an understanding of manufacturing tolerances that are literally safety-critical. Get a tolerance wrong on an aerospace part and people die. Most AI hackers unconsciously filter this problem out — they gravitate toward the sexy upstream work like text-to-3D generation (which is what Adam/AdamCAD does) rather than the tedious downstream documentation. REV1 is going after the boring part, which is usually where the value is. Engineers spending 25% of their time on documentation is the kind of waste that's so familiar it becomes invisible — exactly the pattern I described in "Schlep Blindness." And the regulatory density of GD&T standards creates a natural barrier that keeps casual entrants out.

The team composition maps precisely to what this product needs: a mechanical engineer who has created hundreds of these drawings by hand, paired with an ML engineer who solo-built Tesla's global Supercharger planning platform. Louis Liu can build the AI system; Alex Rivero knows what correct output looks like. That combination is harder to assemble than it appears — most ML engineers don't understand manufacturing tolerancing, and most mechanical engineers can't build AI systems. The fact that they worked together at Tesla on Robotaxi-adjacent projects means the co-founder relationship has real roots, not the "met at a startup event" pattern that falls apart.

But here's where it gets complicated. DraftAid — funded by YC in W24 — is building essentially the same product and has a two-year head start. They claim 210,000 drawings generated and $150K in paid pilot revenue. That's not a trivial lead. SolidWorks is adding native AI drawing features in its 2025/2026 release. Leo AI has $9.7M in funding. The competitive landscape is dense and converging. REV1's differentiation — a standalone native interface with PLM synchronization versus DraftAid's plugin-based approach — is real but narrow. Multi-CAD environments in large enterprises genuinely need a CAD-agnostic tool, and PLM integration creates switching costs. But I don't yet know whether that architectural choice translates into a wedge that compounds over time or just a product feature that DraftAid could add in a quarter.

The bull case is strong enough that I want to articulate it clearly. If Alex's Tesla and Apple network gets REV1 into enterprise pilots at companies using multiple CAD platforms simultaneously — which is common in aerospace and automotive — and if the PLM integration creates genuine lock-in, then the head start doesn't matter much. Enterprise hardware companies don't switch tools based on who launched first; they switch based on who integrates into their workflow most deeply. The standalone approach could actually be the better long-term architecture because it doesn't depend on the goodwill of CAD incumbents who have every incentive to build their own AI features. A CAD-agnostic documentation layer that syncs with Teamcenter or Windchill is something no incumbent would ever build, because it would validate competitors' CAD products. That's the structural opening.

What's missing is any evidence that this is working. No users, no waitlist, no beta testers, no prototype demo, no company LinkedIn page. The website didn't even render content. At pre-seed, thin evidence is expected — but complete absence makes it impossible to distinguish between a company that's building in stealth and one that hasn't built anything yet. I can evaluate the founders and the problem, and both are strong. But without a single data point suggesting someone outside the founding team wants this, I'm relying entirely on thesis fit rather than market signal. The organic discovery is real, the schlep is real, the team is well-configured — but the competitive timing and zero traction evidence keep this in the territory of interesting rather than compelling.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Organic Problem Discovery and Schlep Willingness | 23/30 |
| Relentlessly Resourceful Founders | 13/25 |
| Evidence of Wanting: Demonstrated User Pull | 5/20 |
| Technical Hacker Founders Who Build | 11/15 |
| Growth Trajectory and Default Alive Economics | 5/10 |
| **Total** | **57/100** |

**Total Score: 57/100** (Neutral)
