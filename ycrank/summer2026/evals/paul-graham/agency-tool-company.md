# Agency Tool Company -- Paul Graham Evaluation

The important fact is not that robot deployment is a growing market. It is that Jack Morrison and Davis Foster spent eight years building Scythe, deployed hundreds of autonomous mowers, and repeatedly encountered software delivery tools designed for identical, continuously connected computers. They did not respond with a market map. They built byte-level delta transfers, resumable downloads, device-specific releases, rollback, and deployment history. This is a real founder-originated problem hidden inside an unpleasant operational job.

The resourcefulness evidence is good but incomplete. The dossier names what broke—Docker pulls, SSH, and scripts became slow and manual in unreliable field conditions—and shows the shipped workaround. Agency Tool Company also reports transfers up to 20 times faster than Docker pull or SCP. But it does not say which deployment failed, how quickly the founders responded, or what changed for a customer afterward. I can infer that these founders know the problem intimately. I cannot infer the strongest version of the running-back test from a retrospective account.

The technical proof is more convincing. ATC Deploy appears to be functioning software rather than a diagram: it handles heterogeneous artifacts, interrupted transfers, fleet targeting, rollback, and auditing, and Burro, Tempo Works, and Gather AI are using it in private beta across three different kinds of field robotics. The 20x result is company-reported, so I discount its magnitude. The combination of a working system and three named deployments still clears the “built before permission” threshold.

The weakest link is pull. Three launch partners are much better than a waitlist or 388 LinkedIn followers, but “private beta” does not tell me whether engineers deploy through ATC every week, whether it has prevented a failed field update, or whether anyone will pay. The narrow user is identifiable—robotics teams maintaining heterogeneous Linux fleets with poor connectivity—but the dossier does not yet show that this user pulls the crude product back through repeated use. Nor does it show an evidence-driven change of route. That receives the missing-evidence default, not a penalty for rigidity.

The bear case is sharp. Balena, Mender, Formant, Foxglove, and Memfault already occupy adjacent layers and could reproduce the visible delivery features. ATC supports standard OCI containers and file bundles, so customers can leave as easily as they can arrive. The current launch plan also leans on a waitlist, LinkedIn, and the ROS community; those are channels, not proof that the founders personally converted ten desperate users. If the beta partners merely test the product while continuing to rely on internal scripts, Agency Tool Company is a useful feature caught between larger platforms.

I would still invest, because the strongest evidence is upstream of those risks: two technical founders with years of shared work, a prior robotics acquisition, hundreds of deployed machines, and a product built around an ugly failure mode they experienced themselves. This resembles the mechanism that makes infrastructure companies surprising: the apparent feature is really the first compressed representation of accumulated operational pain. My verifiable flip condition is customer behavior. If, by February 2027, fewer than two of the three named beta partners are running recurring production deployments through ATC or paying for it, I would reverse the decision; that would mean the founders found a genuine annoyance but not a deep well.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 21/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 19/23 |
| A Named User Niche Pulls the Crude Product Back | 10/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 11/12 |
| **Total** | **67/100** |

**Total Score: 67/100** (Invest)
