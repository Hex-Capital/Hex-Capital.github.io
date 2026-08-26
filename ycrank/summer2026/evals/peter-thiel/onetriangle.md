# OneTriangle -- Peter Thiel Evaluation

The contested truth is precise: a small model can perform long-context prefill, translate its KV state into a larger model’s attention space, and preserve enough quality to make conventional full-model prefill economically obsolete. The falsifier is equally clear: on open-ended generation, either quality degrades materially or the end-to-end advantage disappears once source prefill is counted. OneTriangle has tested part of this proposition—a 1,048,576-parameter correction produced 82.52% top-token agreement—but its advertised 7.91× target-start speed falls to 1.25× under the relevant cold-context comparison. This is a real experiment, not an AI slogan, but it has not yet proved the consequential version of the secret.

The deeper problem is value capture. OneTriangle intends to upstream its work into vLLM, requires no API changes, and sells switching as a one-line configuration change. These choices accelerate adoption while making imitation unusually easy. Fireworks, Together AI, and Baseten already possess capital, customers, compute, and broader inference platforms; they need not defeat the technical claim if they can absorb it. Model-pair mappings and workload-specific acceptance data could eventually compound into proprietary infrastructure, but the dossier identifies no deployment scale, exclusive data, patent position, or network effect. The product may create value while its platform competitors capture it: technology without monopoly.

The founding structure is stronger than the market structure. Hannah Chung and Medha Venkatapathy met at MIT three years ago and have built together since freshman year, rather than assembling for YC. Venkatapathy’s LLM-optimization research and the team’s access to a vLLM lead and a Google infrastructure engineer fit the technical problem. Yet the dossier does not establish full-time status, founder ownership, compensation, or whether all essential implementation remains in-house. The one-month transition from TrustAI’s governance product to inference is not itself disqualifying, but it raises the definite-versus-indefinite question: did the cache-transfer result reveal the company’s founding secret, or did the team find a more fashionable market after the first product failed to pull?

The revenue engine is coherent but unproved. Usage pricing—$0.15 per million DeepSeek V4 Flash input tokens, $0.03 for cached input, and $0.35 for output—creates a single measurable business rather than five unrelated possibilities. Agent workloads could make prefill optimization important, and inference infrastructure is expanding quickly. But OneTriangle reports no customers, revenue, gross margins, utilization, or evidence that its savings survive GPU costs and fallback frequency. Five Launch YC votes and 488 company-account followers do not validate the engine. A $105.22 billion forecast describes the crowd’s market; it does not show why this company can retain a power-law share of it.

The strongest bull case is that the incomplete benchmark is merely the first visible result of a genuine zero-to-one event. OpenAI also had uncertain monopoly durability, but its exception rested on a technical breakthrough demonstrated through widespread behavior; OneTriangle currently has an 82.52% proxy metric without open-ended task accuracy and only a 1.25× inclusive speedup. Nor is distribution yet attached to the economics: private deployments, demo-led sales, and one-line switching name a motion, but not the buyer, sales cycle, conversion rate, implementation burden, or contract value. The same frictionless switching that helps acquisition also permits immediate departure.

I would not invest today. This is not a strong pass: the secret is falsifiable, the founders are technically credible and long-aligned, and the shift toward the AI production stack matches where durable infrastructure companies can emerge. But no known exception overrides the missing monopoly mechanism, and the pivot plus open-source diffusion makes commoditization more likely than last-mover advantage. The verifiable flip condition is three named paid customers renewing after six months while reporting at least a 2× end-to-end cold-context improvement with no material degradation on their production tasks. Until then: an interesting technical result, not yet a great company.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier States a Falsifiable Secret Named Peers Reject | 22/30 |
| Narrow Beachhead Already Exhibits One Monopoly Mechanism | 8/24 |
| All Core Founders Are Full-Time, Long-Aligned, and Economically Exposed | 12/18 |
| One Revenue Engine Can Plausibly Return the Fund | 7/16 |
| Named Distribution Route Fits Customer Economics | 5/12 |
| **Total** | **54/100** |

**Total Score: 54/100** (Neutral)
