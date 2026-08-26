# OneTriangle -- Elad Gil Evaluation

The market map is straightforward: agent workloads make long-context inference materially more expensive, infrastructure buyers will switch if OneTriangle can reuse cheap-model prefill without degrading large-model output, and the controlling variable is quality-adjusted end-to-end savings on real workloads. The company has identified the right falsifiable belief. Its August 2026 experiment directly tests it, but the result is not yet decisive: 82.52% top-token agreement is an incomplete quality measure, while the apparent 7.91× target-start acceleration falls to 1.25× when source prefill is included and disappears at short contexts.

The technical shift is real rather than narrative. A learned 1,048,576-parameter mapping removes source rotary embeddings, translates per-head KV tensors, restores target positions, and falls back to native prefill when a gate fails. This could matter as agent sessions generate a company-reported 10× more tokens than chat and inference infrastructure grows from $101 billion in 2025 toward a forecast $532 billion in 2030. But OneTriangle has not yet connected that mechanism to customer economics: there is no measured GPU-cost reduction, gross-margin advantage, task-accuracy result, or workload distribution showing how often the fallback preserves versus eliminates the savings.

The strongest bull case is that this is unusually concrete frontier research for a four-person pre-seed company. Medha Venkatapathy has relevant LLM-optimization research, the team has advice from a vLLM lead and a Google infrastructure engineer, and switching reportedly requires one configuration change. This resembles the narrow exception for research-stage infrastructure where technical scarcity can precede demand. The material difference from Anthropic is that OneTriangle has not established a rare model-building team, a capital-driven oligopoly position, or research whose importance survives open-source diffusion.

Value capture is therefore the central problem. Upstreaming into vLLM may accelerate adoption, but it also makes the implementation legible to Fireworks, Together AI, Baseten, and runtime contributors with greater distribution and capital. OneTriangle owns neither a recurring customer workflow nor documented proprietary operating data today. Better models may increase the value of portable context, but providers can also internalize the technique. The company’s prior governance-product launch only one month earlier reinforces the possibility that this is a technically promising feature still searching for its durable market boundary.

There is no demonstrated product-market pull: five Launch YC votes, 488 company followers, and third-party launch coverage do not establish usage, retention, or revenue. Published token prices show a monetization mechanism, not customers. The founders’ three-year working relationship and rapid pivot demonstrate activity, but their biographies contain neither prior startup learning nor documented costly commitment sufficient to exceed the founder-evidence default.

I would not invest today. My base case is that within 36 months OneTriangle either pivots into a broader inference-optimization platform or its cache-transfer technique is absorbed into open runtimes and incumbent serving stacks before the company reaches $2 million ARR. The single flip condition is three named production customers each processing at least 100 billion long-context tokens monthly while independently confirming more than 20% end-to-end cost reduction with less than one percentage point of task-accuracy loss. That would validate the controlling variable and begin converting an exposed technique into distribution and workload-specific operating data.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Identifies the One Variable That Makes This Market Work | 21/32 |
| Technology Shift Expands Market Margins, Scale, or Adoption | 16/24 |
| Users Demonstrate Product-Market Pull Before the Story Is Polished | 4/18 |
| Core Technology Improvement Deepens an Owned Workflow | 6/16 |
| Founder Biography Shows Desperation or Second-Time Learning | 3/10 |
| **Total** | **50/100** |

**Total Score: 50/100** (Neutral)
