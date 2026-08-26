# OneCLI -- Paul Graham Evaluation

The useful obstacle is the July 2026 credential-injection host-enforcement bypass. OneCLI did not merely describe a future security architecture; the founders shipped the gateway, encountered a defect in its central enforcement mechanism, patched it, and maintained a private disclosure channel ([changelog](https://github.com/onecli/onecli/blob/main/CHANGELOG.md); [security policy](https://github.com/onecli/onecli/security)). That is real resourcefulness, though not top-quartile evidence: the dossier does not say who found the bypass, how quickly the founders responded, or whether the repair changed customer behavior. The separate raw-socket escape path also remains unless egress lockdown is enabled, and it is off by default ([NanoClaw security documentation](https://github.com/nanocoai/nanoclaw/blob/main/docs/SECURITY.md)).

The technical proof is stronger. OneCLI has a working sandbox, authorization gateway, wire-level credential injection, approval pauses, and audit logging. NanoClaw uses it as its sole credential path, which is considerably more informative than a diagram or a planned integration ([NanoClaw changelog](https://github.com/nanocoai/nanoclaw/blob/main/CHANGELOG.md)). The repository’s roughly 3,300 stars and the project’s reported 350,000 downloads show that these founders can make technical infrastructure spread, even though those figures mix the old credential vault with the current harness. Fishner and Ben-Aharon have also already built ChartDB to more than $10,000 MRR and roughly 22,500 GitHub stars. They are fierce nerds who ship before asking permission.

The weak part of the proof is demand for this particular product. NanoClaw is a real niche with a real job, but one integration is not yet a well of users pulling the product back. Product Hunt’s 143 points, Hacker News’s 110 points, and the “Trusted by” logos are expressions of attention unless the companies behind them repeatedly route production calls through OneCLI. The $149 and $499 monthly plans establish plausible economics, but the dossier reports no paying customer, retention cohort, or revenue. Launches and stars are especially dangerous here because the founders already know how to generate open-source attention.

The move from a Rust credential vault to a per-employee assistant harness could be a running-back move, but the causal link is missing. OneCLI does not identify the user observation that falsified the first route, the stable goal preserved through the change, or adoption attributable to the new route. I therefore give the pivot no more than the missing-evidence default. It may be rapid learning. It may also be a fashionable noun wrapped around accumulated download statistics.

The strongest case against investing is that the central promise is both copyable and incompletely enforced. OneCLI is Apache-2.0 licensed; Aembit already brokers credentials through policy, Pomerium offers an open-source per-request gateway, and Cisco now owns Astrix ([Pomerium comparison](https://www.pomerium.com/blog/iam-for-agentic-ai-6-platforms-compared-pomerium); [Cisco](https://blogs.cisco.com/news/cisco-announces-intent-to-acquire-astrix-security)). Worse, a proxy-unaware tool can bypass the layer meant to make the agent safe. If users do not enable lockdown, the product risks becoming security theater. The impressive pre-round proof spike is consequently offset by the absence of isolated v2 usage and retention—the unstated pattern I care about most.

I would still invest a small personal check. Both founders encountered the surrounding problem professionally—Fishner in zero-trust access at Axis Security and Ben-Aharon as Argon Security’s first engineer—and they have worked together since at least 2024 ([YC](https://www.ycombinator.com/companies/onecli); [Indie Hackers](https://www.indiehackers.com/product/chartdb/our-first-commit-the-start-of-chartdb-and-going-open-source--O9j3u9dxR5WOeGc1HuQ)). Credential mapping, policy enforcement, approval flows, and awkward integrations are exactly the sort of schlep that can expose the correct product. The verifiable flip condition is current-product retention: if fewer than five organizations are paying for v2 and using it weekly for six consecutive weeks by November 30, 2026, I would reverse the decision.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 21/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 20/23 |
| A Named User Niche Pulls the Crude Product Back | 10/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 9/12 |
| **Total** | **66/100** |

**Total Score: 66/100** (Invest)
