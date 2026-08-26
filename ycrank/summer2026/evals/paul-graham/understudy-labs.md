# Understudy Labs -- Paul Graham Evaluation

The missing fact is what the founders did when something broke. Luis Manrique and Aamir Poonawalla have unusually relevant histories: Instacart optimization and ML infrastructure, Gumloop commercialization, and a prior YC company. But credentials are priors, not resourcefulness. The dossier does not name a customer obstruction, a failed deployment, or a workaround they shipped within days. Understudy Labs therefore fails my first gate despite having founders who look capable of passing it.

The technical evidence is much better. Understudy has a working local-first toolkit, trace-derived evaluations, task-specific model training, held-out promotion gates, and fallback routing. Its published tests span four reasoning tasks and seven CRM-action tasks with ten runs per promoted configuration. More importantly, the tests exposed an inconvenient result: generic adapters did not transfer cleanly across slices. Building around task-specific evaluation rather than concealing that failure is the behavior of serious technical founders. The proof is still company-published and apparently pre-production, so it is not independent validation.

Who wants this now? The answer remains “a small group of design partners,” unnamed, with no disclosed production volume, retention, savings, or revenue. Twelve GitHub stars and five forks show that the toolkit exists, not that users pull it back. Engineer-assisted implementation is the right pre-seed motion because the founders can learn each workload manually. But a private preview is not yet a narrow well. I want to see one team repeatedly route production traffic through an open-weight replacement because returning to the frontier API would be economically painful.

There is a real schlep here. Understudy must handle sensitive prompts and traces, construct reliable evaluations, train models, test serving, preserve rollback, and survive enterprise procurement. Local storage, a payload-free hosted gateway, customer-owned deployment, and the prohibition on cross-customer training are sensible responses. The founders’ prior ML and experimentation work makes the problem plausibly organic, but the dossier never documents the actual collision that caused them to start the company. Meanwhile customers still pay upstream model-provider charges separately, so the economic claim depends on savings large enough to cover both those charges and Understudy’s fee.

The strongest bull case is that Luis has already closed approximately $2 million in Gumloop’s first year, Aamir spent a decade building the relevant infrastructure, and they met doing optimization work together. This team could personally install the product, discover the valuable workload, and outrun much larger competitors by owning the complete replacement loop. That fits my unstated preference for programmable infrastructure backed by a concrete pre-round proof. The bear case stings more today: Fireworks, Together AI, Baseten, and Braintrust can absorb pieces of the workflow, while Understudy has disclosed neither a proof spike nor unmistakable user pull. No red flag is fatal—the founders are not delegating product or betting distribution on a ceremonial launch or single partner—but none of the known-exception overrides applies because the benchmark is neither independently validated nor tied to compelling real-world usage.

My 36-month forecast is that Baseten acquires Understudy Labs for its evaluation-and-routing technology before the company reaches $3 million ARR. The product is currently more convincing than its distribution. One result would flip me: five identifiable customers using Understudy in production for 90 days, each showing at least a 50% inference-cost reduction without a measured quality decline, plus one documented deployment blocker the founders personally routed around. Until then, I would not write the check.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 8/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 20/23 |
| A Named User Niche Pulls the Crude Product Back | 5/18 |
| Goal Persists While the Product Route Changes on Evidence | 9/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 6/12 |
| **Total** | **48/100** |

**Total Score: 48/100** (Neutral)
