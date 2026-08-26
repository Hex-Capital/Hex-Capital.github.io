# OneTriangle -- Vinod Khosla Evaluation

The consequence could be large, but OneTriangle has not quantified it. AI-inference infrastructure may grow from $101 billion in 2025 to $532 billion in 2030, and agent workloads may generate 10 times the tokens of chat. Yet reducing prefill expense is not the same as collapsing the cost of intelligence. The dossier does not show what fraction of inference spending prefill represents, what workloads qualify for transfer, or whether the resulting savings change who can deploy long-context systems. This is an attractive cost pool, not yet a 100x consequence.

The technical work is real. A 1,048,576-parameter correction transfers KV-cache state between different open-weight models, reaching 82.52% top-token agreement at an 8,192-token context. But the economically honest comparison is 1.25 times end-to-end speed when source prefill is included, not the advertised 7.91 times target-start result with a resident source cache. Native prefill still wins at short contexts, and the study omits open-ended generation, task accuracy, and human preference. This is a clever discontinuity in mechanism, but the measured system improvement is incremental and fidelity remains unproven.

Capital should now attack one kill risk: does transferred state preserve task-level quality across commercially important workloads? OneTriangle has identified that risk and built ordinary-prefill fallback, but fallback converts technical failure into ordinary inference economics. The next experiment should publish blinded task results across several model pairs, with predefined quality and latency gates, workload frequency, and fully loaded GPU cost. There is no disclosed threshold, budget, owner, or stop condition today. Upstreaming into vLLM before proving a proprietary operational advantage may remove more competitive risk for Fireworks, Together AI, and Baseten than it removes technical risk for OneTriangle.

The founders are the strongest part of the option. Medha Venkatapathy brings documented LLM-optimization research, while Hannah Chung combines computer science with quantitative work; advice from a vLLM lead and a Google infrastructure engineer is sensibly matched to the technical risks. Their one-month move from TrustAI governance to inference suggests tactical flexibility, but the dossier does not establish what evidence caused the revision. Rapid switching can be learning or merely searching. The absence of revenue, repeat usage, and customer deployment data leaves that distinction unresolved.

The bull case stings: a four-person team has produced an unusual cross-model cache-transfer system while competing providers have raised billions, Fireworks has reached a reported $1 billion annualized revenue run rate, and customers can supposedly switch with one configuration line. Model-pair mappings and acceptance data could become a proprietary learning loop. The bear case is stronger today. OneTriangle intends to expose implementation patterns through vLLM, has no demonstrated structural barrier, and publishes prices without a bottom-up cost or margin model. An infrastructure feature that delivers 1.25 times speed while sacrificing nearly one-fifth top-token agreement can be copied, bundled, or bypassed.

I pass now. My verifiable flip condition is a public or customer-auditable benchmark showing at least 5 times fully loaded prefill cost reduction on three commercially used model pairs while retaining at least 98% task-level quality, accompanied by repeat paid usage above $100,000 annualized revenue. Without that evidence, I expect the cache-transfer feature to be absorbed into open inference runtimes and OneTriangle to pivot within 36 months to a broader managed inference-optimization service with less than $3 million ARR.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Quantifies a 100x Societal Consequence from a 10%-Likely Breakthrough | 14/31 |
| Product Benchmarks a 5?10x Technical Discontinuity Against a Named Incumbent | 11/24 |
| Milestones Spend Dollars Against the Largest Named Kill Risk First | 6/18 |
| Founder Record Shows Fast Belief Revision and Risk-Tuned Magnet Recruiting | 8/15 |
| Scale Model Reaches Unsubsidized Chindia-Price Parity | 3/12 |
| **Total** | **42/100** |

**Total Score: 42/100** (Pass)
