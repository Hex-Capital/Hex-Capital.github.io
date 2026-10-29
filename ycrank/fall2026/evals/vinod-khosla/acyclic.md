# Acyclic Labs -- Vinod Khosla Evaluation

236 agents, 482 files, 49 minutes, approximately $8. That is the most interesting evidence in Acyclic Labs’ dossier. If inexpensive parallel agents could reliably compress weeks of expert work into hours, the consequence would justify substantial failure risk. But this demonstration establishes an execution result, not that consequence. We have no sequential baseline, measured human effort displaced, or evidence that the resulting migration works beyond static checks. I would pass on the evidence supplied.

The technical question is how much useful work remains parallel after accounting for dependencies, conflicting changes, verification, and recovery. A recursive fork/join harness and conformance suites are real engineering. Varun’s auto-parallelising compiler research is directly relevant. Yet adding agents does not establish exponential acceleration: the serial portion and integration burden eventually dominate. Acyclic’s runtime contract leaves measured limits pending and acknowledges checkpoint-dependent recovery. Those are testable engineering constraints. The Django demonstration earns technical credit, but it does not establish a 5–10x advantage against a named alternative on equivalent work ([SDK](https://github.com/acyclic-labs/sdk), [runtime contract](https://acyclic.dev/agents/contract)).

The strongest argument against passing is that these two founders have already encountered the problem from unusually relevant directions. Ram worked on clinical-trial agent systems at Palantir; Varun combines parallel-programming research with agent architecture at Tracelight. They shipped a working harness and moved from Graphcoder toward general swarm infrastructure. That could be the beginning of an important infrastructure company whose first application understates its eventual reach. It fits my less advertised willingness to fund execution-heavy platforms and tiny open-source teams. However, the pivot documents a changed direction without showing which evidence changed their beliefs, and 36 stars plus nearly 40 discovery conversations do not yet demonstrate a committed technical community. No exceptional recruiting evidence is disclosed.

Acyclic also faces an economic capture problem separate from whether its software works. Customers can self-host the Apache-2.0 harness, including core execution capabilities. E2B, Daytona, and Modal already supply adjacent infrastructure and can expand toward orchestration. Their commercial scale supports demand for agent execution; their revenue is not evidence of demand for Acyclic’s particular layer. The $8 demonstration says little about managed-service economics without verification effort, retries, infrastructure overhead, and pricing. I assign the prescribed missing-evidence default here, rather than treating absent revenue as a pre-seed failure.

The next dollars should resolve whether coordination produces a durable improvement on difficult workloads. The dossier supplies no costed experiment, numerical kill threshold, or if/then response, so risk-removal planning also remains at its default. My exceptions for companies without a scientific discontinuity require a compelling existing value pool and unusually strong evidence of the people or mechanism capable of capturing it. Acyclic has relevant builders, but has not established that override. Nor does the dossier justify dismissing its engineering as merely an interface wrapper. The decisive gap is the missing comparison between impressive parallel activity and useful completed work. **One verifiable flip condition:** an independently reproducible production benchmark showing at least 10x more accepted work per hour than a named, well-tuned sequential agent, at equivalent quality and no higher total cost including retries and human verification. That would make me reopen the investment decision.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Quantifies a 100x Societal Consequence from a 10%-Likely Breakthrough | 7/31 |
| Product Benchmarks a 5?10x Technical Discontinuity Against a Named Incumbent | 10/24 |
| Milestones Spend Dollars Against the Largest Named Kill Risk First | 4/18 |
| Founder Record Shows Fast Belief Revision and Risk-Tuned Magnet Recruiting | 7/15 |
| Scale Model Reaches Unsubsidized Chindia-Price Parity | 3/12 |
| **Total** | **31/100** |

**Total Score: 31/100** (Pass)
