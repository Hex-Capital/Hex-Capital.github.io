# Latent -- Paul Graham Evaluation

Vedant Gaur has built something I would want to try. What I cannot yet see is what he did when building it became difficult. Latent addresses a specific obstacle: checking an LLM with another LLM adds enough cost and latency that teams sample answers. Reading activations is an interesting response. But the dossier supplies no episode connecting a blocker, Gaur’s action, elapsed time, and an observable result. His research background makes the technical direction credible. My most important founder test remains unanswered.

The strongest evidence is the product itself. Latent has a public Python SDK, documented vLLM integration, and customer-specific calibration. That earns meaningful technical credit. The reported **2.7–4.2 times** improvement over random review and **96% flag precision** receive less credit because they are company-reported measurements. Precision also leaves unanswered how many consequential errors escape detection. The deployment tradeoff matters: direct activation access requires open-weight models, API models need a separate reader, and sharing a GPU reportedly slows serving by approximately one fifth ([deployment documentation](https://runlatent.ai/docs/deployment/options)). The interesting experiment is whether Latent catches enough expensive mistakes to justify that burden.

Who needs it badly enough to accept those inconveniences? “Healthcare, finance, insurance and legal” describes several industries. I want one small group whose work breaks without this. The October 2026 launch and package distribution establish availability; neither establishes repeated use. Likewise, **$299 Pro and $1,499 Team plans** establish an offer, with no disclosed purchases ([pricing](https://runlatent.ai/pricing)). Founder-led deployment calls are encouraging behavior to offer. The dossier does not show what happened on those calls. Demand therefore receives the missing-evidence default, as does adaptation: two deployment options do not establish that customer evidence caused a change of route.

The strongest case against passing is that Gaur’s reasoning and interpretability research has already become usable software in a technically awkward deployment environment. Latent fits my unstated preference for programmable tools built by technical founders. A few production teams could supply the labels that turn its calibration into something substantially better. But the other recurring pattern—an unusually concrete proof spike before the round—is only partly present. The working-product and validated-science exceptions deserve consideration; the available benchmarks and usage evidence do not yet support overriding the founder gate. Nor do I see affirmative evidence of the partnership, premature delegation, or ceremonial-launch red flags. Missing history establishes uncertainty. It does not establish bad behavior.

I would pass on the present evidence. Gaur’s prior research supports competence, but the dossier does not connect Latent to a problem he personally encountered, and it documents no rejected hypothesis followed by a shipped revision. Enterprise authentication and customer-specific calibration contain plenty of potential schlep; enduring it remains to be demonstrated. My flip condition is one documented customer deployment: a named production team hits a specific blocker, Gaur ships the workaround within two weeks, and that team subsequently uses Latent daily and renews a paid subscription. That single record would connect founder behavior to a user who actually wants the result.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 8/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 14/23 |
| A Named User Niche Pulls the Crude Product Back | 5/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 4/12 |
| **Total** | **37/100** |

**Total Score: 37/100** (Pass)
