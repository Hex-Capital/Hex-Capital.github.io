# Composal -- Paul Graham Evaluation

Half of Composal’s ten recent setup calls stalled on authentication or network restrictions. That is where I would start. The founders have found a problem beneath the advertised problem: a browser agent cannot find your bugs if it cannot get into your application. Their [October 23 research](https://composal.com/reflog/verification-core-dev-stack) reports dedicated agent accounts and allowlisting as workarounds. That earns some resourcefulness credit. But it does not establish which founder implemented what, how quickly, or whether the blocked teams subsequently completed useful runs. I have the obstacle and a partial response. I do not yet have the result.

The technical evidence is stronger. Composal has browser-agent tooling, CLI and MCP integrations, and a company-run benchmark reporting **157 successful attempts out of 166**. These founders have built something inspectable. The one false success matters more than its numerical size suggests: verification is useful only if developers can trust what “passed” means. Composal explicitly acknowledges that its local fixtures do not establish performance on unseen customer websites. That candor helps me interpret the evidence, while the working artifact earns substantially more credit than the unreproduced benchmark alone ([engineering evaluation, October 18](https://composal.com/reflog/openai-decisions-browser-agents)).

The strongest argument for investing is that these people may already understand the next bottleneck in software development. Zembashis worked on coding-agent infrastructure at Cosine; Davies has substantial product-engineering experience; their prior working relationships reduce the concern that this team was assembled for an application. Nine interviewed teams had built internal QA agents. Engineers spending their own time on crude substitutes can reveal an urgent need. Composal also fits my recurring interest in programmable tools that technical users can incorporate into larger systems. But those nine internal tools are evidence of the problem, not adoption of Composal. Ten setup calls establish engagement; they do not establish that users return.

I would want the founders to concentrate on the teams willing to endure the installation. The published **$500 monthly subscription** is a price, not demonstrated willingness to pay. The decisive question is whether a team repeatedly runs Composal before shipping because it catches failures they otherwise miss. If authentication requires personal help from a founder, providing that help could be valuable learning. Meanwhile, mabl’s October verification launch and customer-built alternatives make reliability on a narrow set of real applications more consequential than having a broad collection of integrations. Composal has not yet shown that advantage.

The September source-control materials and October 16 separation of Vex from Composal suggest movement, but the dossier does not connect that movement to a falsified hypothesis. I cannot award evidence-driven adaptation merely because the product changed. Likewise, the founders’ experience makes an organic origin plausible without documenting their own collision with this particular problem. I see no established launch-dependent distribution plan, passive reliance on a large partner, or other affirmative founder red flag. I also checked the working-product exception to my usual founder gate: the existing software strengthens the case, but the limited benchmark and unestablished repeat use do not supply enough evidence to override it.

I would pass today. Composal’s strongest evidence concerns what the team has built; my central uncertainty concerns what they make happen when real installations resist them. **One verifiable condition would change my decision: a dated cohort of five initially blocked teams that the founders personally get running within two weeks, all subsequently using Composal weekly for six weeks and renewing paid subscriptions.** That would connect the workaround to its consequence and show that users want the product back.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 13/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 15/23 |
| A Named User Niche Pulls the Crude Product Back | 5/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 4/12 |
| **Total** | **43/100** |

**Total Score: 43/100** (Pass)
