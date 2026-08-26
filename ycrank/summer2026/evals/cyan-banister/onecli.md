# OneCLI -- Cyan Banister Evaluation

Move the clock to 2032: every employee delegates work to several agents, but those agents never possess durable credentials. Each request carries a human identity, encounters policy at the network boundary, and stops for approval when consequences exceed its authority. OneCLI has one credible leak from that future: NanoClaw already uses it as the sole credential path. The dossier does not yet map the intervening transitions—how organizations move from experimental assistants to mandatory identity infrastructure—so this is a plausible future chain, not a completed one.

The broken rule is that human IAM assumes a person operating a session, while autonomous software can call production APIs at machine speed. OneCLI separates the credential from the agent, injects it at the gateway, and restores approval and audit control to the organization. That is real systems thinking. But the dossier never quantifies the administrative rent, security loss, or deployment delay imposed by today’s model, and the agency returned belongs mainly to security teams rather than employees. I understand the mechanism better than its economic urgency.

The founders are the strongest part of the bet. Jonathan Fishner built zero-trust access at Axis Security; Guy Ben-Aharon was Argon Security’s first engineer before its acquisition. Together they previously turned ChartDB into a 22,000-plus-star product with more than $10,000 MRR. That is not a pair of tourists attaching “agentic” to an old security résumé. They have shipped open-source software together, earned distribution, and worked inside both network access and application security—the exact operating layers this product must join.

There is also a functioning artifact, although its numbers need untangling. The repository has roughly 3,300 stars, the launch reached Product Hunt’s daily number seven, and NanoClaw’s integration requires an actual credential path rather than a decorative partnership announcement. But the claimed 350,000 downloads combine the old credential vault with the new employee-agent harness, while the “Trusted by” logos disclose neither paid deployments nor repeated production use. The artifact is proven; costly user behavior is not.

Here is the bear case that stings: OneCLI may be an excellent team surfing a present-day security scramble with an architecture that is both copyable and incomplete. Aembit already brokers credentials, Pomerium offers an open-source per-request gateway, and OneCLI’s own Apache-2.0 license lowers the replication barrier. Worse, proxy-unaware tools can bypass its controls when egress lockdown is disabled by default, and a credential-injection host-enforcement bypass already required a patch. A product promising that credentials never enter the agent cannot treat escape paths as an advanced configuration detail. Because the gateway logs employee identity and activity, custody and surveillance boundaries also need to be explicit.

I still invest a modest pre-seed check. The scarce asset is not the current code; it is a team with unusually exact technical tuition building below the visible assistant wave, plus one external project already depending on the gateway. My 36-month bet is that OneCLI reaches $3 million to $8 million ARR primarily as agent-identity infrastructure, not as a general “pro assistant” suite. The one condition that flips me to a pass is an independent red-team result showing that a sandboxed agent can bypass authorization even when mandatory egress lockdown is enabled. If the boundary holds, this team has earned the right to discover the business around it.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Maps a Six-Year Future to One Present-Day Leak | 18/31 |
| Founder Biography Shows Pre-Company Obsession and First-Believer Proof | 22/24 |
| Dossier Names a Broken Rule, Its Rent, and the Agency Returned | 10/19 |
| Working Artifact Elicits Costly or Weird User Behavior | 8/15 |
| Product Sits Beneath Today?s Hype as an Enabling Layer | 9/11 |
| **Total** | **67/100** |

**Total Score: 67/100** (Invest)
