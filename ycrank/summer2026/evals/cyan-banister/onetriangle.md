# OneTriangle -- Cyan Banister Evaluation

Move the clock to 2032: agents preserve enormous working memories while moving among specialized models, and nobody routinely pays a frontier model to reread the same 50,000 tokens. OneTriangle has found a small leak from that world. Its 1,048,576-parameter cache correction transfers computed state between open-weight models and produced 82.52% top-token agreement with a 1.25× end-to-end speedup at 8,192 tokens. That is real technical work beneath the visible agent wave. But the dossier does not yet map the intervening transitions—how fidelity improves, which workloads tolerate approximation, and why this team owns the resulting layer rather than contributing a useful vLLM feature.

I keep asking: who pays the rent today, and who gets control back? The answer is only half-formed. Large-model prefill imposes repeated latency and compute expense, while OneTriangle offers usage pricing as low as $0.15 per million input tokens and a delayed tier 40% below base. Yet there is no measured customer bill showing what percentage disappears, no production latency trace, and no operator whose behavior changes because the savings are material. “Change one configuration line” makes adoption easy; it also makes replacement easy.

The founder evidence is better than a fashionable infrastructure label. Medha Venkatapathy conducted documented LLM-optimization research, Hannah Chung brings computer science, economics, and quantitative-finance experience, and the pair built together for three years before producing this mechanism. Still, the July 2026 governance launch followed by an August inference launch is an uncomfortable artifact. It could represent fast discovery, or it could mean the team found a more fundable AI story during YC. The dossier shows technical ability, but not yet the pre-company obsession, independently shipped trail, or commercial command that resolves that distinction.

The strongest bull case is the known pre-revenue exception: a functioning prototype can justify a check before revenue when deep founder obsession and signed proofs of concept show where capital converts into progress, as with CosmicBrain AI. OneTriangle has the prototype and relevant technical fluency. The material difference is that it has no named proof of concept, repeat workload, or customer behavior at all—only five Launch YC votes—and its published test did not measure open-ended generation, task accuracy, or human preference. An 82.52% top-token agreement result can be promising research while still being unusable infrastructure.

The hidden-layer pattern is what keeps me curious. Agent workloads may create ten times the tokens of chat sessions, and cross-model cache portability could become a useful primitive across hosting, routing, and long-context systems. But OneTriangle plans to upstream into vLLM while competing around companies with billions in funding, and its service depends on third-party models, clouds, GPUs, and pair compatibility. My 36-month base case is that by August 2029 it has pivoted from standalone inference hosting into a cache-optimization component sold through larger inference providers, with less than $3 million in ARR.

I am neutral today, not because pre-seed revenue is absent, but because the company’s strongest evidence is a lower-stack artifact and its weakest is behavior outside the laboratory. The verifiable flip condition is one named production customer repeatedly paying for a long-context workload, accompanied by task-level quality results and at least a 25% all-in cost or latency improvement after fallbacks. That would show both that the future arrived early and that OneTriangle owns something more valuable than an upstream patch.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Maps a Six-Year Future to One Present-Day Leak | 17/31 |
| Founder Biography Shows Pre-Company Obsession and First-Believer Proof | 14/24 |
| Dossier Names a Broken Rule, Its Rent, and the Agency Returned | 9/19 |
| Working Artifact Elicits Costly or Weird User Behavior | 4/15 |
| Product Sits Beneath Today?s Hype as an Enabling Layer | 8/11 |
| **Total** | **52/100** |

**Total Score: 52/100** (Neutral)
