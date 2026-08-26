# Understudy Labs -- Elad Gil Evaluation

The market map is straightforward: open-weight models became credible for repetitive production tasks, AI teams now buy infrastructure to escape frontier-model pricing, and the controlling variable is whether Understudy can migrate a meaningful share of production tokens at equivalent quality with savings large enough to overcome implementation and procurement costs.

Understudy identifies that mechanism better than most pre-seed infrastructure companies. It captures traces, constructs task-specific evals, trains smaller models, promotes them only after held-out tests, and retains fallback routing. The published tests—four reasoning tasks, seven CRM-action tasks, and ten runs per promoted configuration—show a real system rather than a routing mockup. They also expose the difficulty: generic adapters did not transfer cleanly across slices. The company has not yet stated the threshold that matters commercially: migration percentage, sustained quality, all-in cost reduction, or time to deployment.

The product’s strongest attribute is workflow ownership. Trace collection, evaluation, post-training, deployment testing, promotion, and rollback form a recurring operational loop; stronger open models should improve the candidates available to that loop rather than automatically erase it. Local storage, payload-free gateway defaults, and customer-owned deployment are useful design choices for sensitive production traces. This is meaningfully deeper than a dashboard or output formatter.

The bull case is substantial. Aamir Poonawalla spent roughly a decade building Instacart’s ads-serving, experimentation, and ML infrastructure and previously founded a YC company. Luis Manrique has Google and Instacart ML-product experience and reportedly closed about $2 million during Gumloop’s first year. Fireworks reaching $1 billion in annualized revenue, alongside multibillion-dollar financings for Together AI and Baseten, validates the scale of demand for specialized-model infrastructure. Understudy could become the vendor-neutral optimization layer spanning those providers.

But this market is already crystallizing around extremely well-capitalized platforms that can bundle training, inference, routing, caching, and evaluations. Braintrust occupies the adjacent trace-and-evaluation layer. Understudy’s terms prohibit cross-customer payload reuse, while its proposed advantage from aggregated operational metadata remains unproven. That is good customer policy but weakens the presumed data flywheel. Twelve GitHub stars, five forks, and an unnamed small group of design partners do not yet demonstrate that customers will entrust this independent layer with production routing rather than accept a bundled platform feature.

My 36-month base case is that Understudy pivots toward a narrower vendor-neutral evaluation and routing control plane and remains below $3 million ARR. The founder experience and integrated prototype make this worth monitoring, but they do not trigger the rare-team exception: this is not frontier research with scarce model-building talent, and the category already has financed leaders. I would flip to invest if three named design partners each migrated more than half of a recurring production workload, maintained incumbent quality for 90 days, and demonstrated at least 50% all-in cost reduction.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Identifies the One Variable That Makes This Market Work | 18/32 |
| Technology Shift Expands Market Margins, Scale, or Adoption | 8/24 |
| Users Demonstrate Product-Market Pull Before the Story Is Polished | 4/18 |
| Core Technology Improvement Deepens an Owned Workflow | 13/16 |
| Founder Biography Shows Desperation or Second-Time Learning | 6/10 |
| **Total** | **49/100** |

**Total Score: 49/100** (Neutral)
