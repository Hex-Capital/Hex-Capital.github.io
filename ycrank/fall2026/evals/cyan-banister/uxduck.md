# UXDuck -- Cyan Banister Evaluation

In 2032, I can imagine a field operator telling a drone what needs inspecting, rehearsing the mission in simulation, and approving the resulting flight plan without assembling five different tools. UXDuck is pointed toward that world. But getting there requires dependable translation from intent into vehicle commands, simulation that predicts field behavior, and permissions that survive real operational pressure. The dossier documents interfaces connecting those pieces; it does not yet establish the transitions that make that future inevitable. I can supply the daydream. I need the company to supply the bridge.

Ben Butterworth is the strongest reason to keep looking. His work on mission planning, MAVLink integration, camera interfaces, and command-and-control software puts him inside the machinery this product must coordinate. His personal `ardupilot-sitl-docker` project is a more useful signal to me than the Imperial degrees: he has independently built around the same operating problem. Being an early technical leader at a defense startup that reached 1,000-plus drones suggests exposure to hidden complexity, although those drones belonged to his employer. This is substantive founder-market fit. The record is thinner on dated, independently pursued obsession and on recruiting people into his own company.

Why does an operator need UXDuck when Mission Planner and QGroundControl already exist? That question decides whether this becomes essential infrastructure or another interface someone must maintain. The proposed integration burden is plausible, but the dossier does not identify a measured delay, an expensive gatekeeper, or a restriction that the product removes. Both alternatives already support extensibility. UXDuck’s Apache-2.0 Rust runtime, transport support, and plugin interfaces fit my preference for the concealed machinery beneath visible applications; they do not yet demonstrate control over a scarce dependency. Publishing useful plumbing and owning the bottleneck are different economic achievements.

The strongest argument against passing is that Butterworth may already know precisely which seams fail in practice. A browser simulation trial gives developers something to touch, and combining simulation with assistant access could make building and testing custom drone applications substantially easier. My pre-revenue exception applies when technical depth and a functioning artifact make the destination credible before sales arrive. Here, however, there is no documented counterpart to signed industrial commitments or repeated outside use. Five repository stars and zero forks establish neither. The November 14, 2026 hackathon is a sensible experiment; its attendance and resulting plugins remain future events. I am withholding credit for behavior that has not been observed, rather than demanding revenue at pre-seed.

UXDuck also needs trust to become part of the infrastructure. Command approvals and denial after 60 seconds are concrete design choices; persistent permissions make their scope consequential. The dossier establishes no severe privacy violation, deceptive leadership arrangement, or dependence on one closed model supplier, so I would not manufacture a disqualifying red flag. But the absence of those problems does not resolve the central question: will anyone entrust recurring operations to this runtime? I pass with my own money today. My single flip condition is a documented deployment in which an independent drone team uses UXDuck every week for three months and demonstrates a material reduction in engineering hours against its previous workflow. That would turn an experienced builder’s integration thesis into evidence of an enabling layer people organize their work around.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Maps a Six-Year Future to One Present-Day Leak | 7/31 |
| Founder Biography Shows Pre-Company Obsession and First-Believer Proof | 18/24 |
| Dossier Names a Broken Rule, Its Rent, and the Agency Returned | 6/19 |
| Working Artifact Elicits Costly or Weird User Behavior | 4/15 |
| Product Sits Beneath Today?s Hype as an Enabling Layer | 5/11 |
| **Total** | **40/100** |

**Total Score: 40/100** (Pass)
