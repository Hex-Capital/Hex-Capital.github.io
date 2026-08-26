# Amulet -- Vinod Khosla Evaluation

The consequence-of-success case is not yet large enough. Amulet could become important plumbing for millions of disposable agents, but the dossier quantifies only an adjacent $35.4 billion AI-infrastructure market—not the storage cost, failed-job burden, engineering labor, or population of workflows it can reduce by an order of magnitude. Persistent state is useful. It is not automatically a 100x societal consequence.

The technical architecture is the strongest part of the option. Sub-100-ms mounts, content-addressed commits, copy-on-write forks, compare-and-swap publishing, and per-run provenance address a real failure mode: parallel agents need writable isolation without copying entire datasets or silently overwriting one another. Published p99 reads of 1.9 ms and 8.4 GB/s per mount suggest serious systems work rather than an API wrapper. But these are self-published measurements, not a 5–10x apples-to-apples benchmark against Archil, JuiceFS, E2B, or Daytona on the same workload. Features are not a discontinuity until the constraint and delta are measured.

The bull case stings. E2B reported hundreds of millions of sandbox sessions and adoption by more than half the Fortune 500, while Archil, E2B, and Daytona have raised $18 million, $32 million, and at least $29 million respectively. That financed competition validates an emerging demand pool. Amulet may own the durable, provider-independent data layer while sandbox vendors own ephemeral compute. The private beta also gives the founders a cheap venue for testing actual agent workloads.

But the company has not stated which uncertainty can kill it first. Is it performance under metadata-heavy workloads, customer willingness to separate storage from sandbox compute, incomplete same-file multi-writer support, or distribution against bundled alternatives? Small-batch access is not a milestone plan without a workload, numerical threshold, cost, timing, and stop-or-pivot decision. Capital spent before answering that question would buy product surface area rather than risk removal.

Nithik Bala’s Meta web-infrastructure and Rockset experience and Varun Puru’s Meta, Amazon, and backend work fit the technical problem. The apparent pivot from a post-sales product is compatible with tactical flexibility, but the dossier does not show what evidence caused it. Nor does it show complementary recruiting around storage internals, security, or enterprise distribution. Two founders from overlapping environments can build this product; there is not yet evidence they are engineering the team around its distinct failure modes.

Economics remain the terminal weakness. A $500 monthly Growth plan and $0.20 per GiB-month establish a price, not a scale model. There is no disclosed storage, replication, egress, cache-utilization, or gross-margin curve showing that Amulet can beat object storage plus existing compute-layer tooling without subsidy. My 36-month base case is that Amulet pivots toward an agent-data provenance and orchestration layer and remains below $3 million ARR because standalone filesystem economics and distribution prove insufficient. I pass today. One condition flips the decision: three paying production customers independently demonstrate at least a 5x reduction in total data-preparation and failed-run cost versus their named prior stack on comparable workloads.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Quantifies a 100x Societal Consequence from a 10%-Likely Breakthrough | 7/31 |
| Product Benchmarks a 5?10x Technical Discontinuity Against a Named Incumbent | 9/24 |
| Milestones Spend Dollars Against the Largest Named Kill Risk First | 4/18 |
| Founder Record Shows Fast Belief Revision and Risk-Tuned Magnet Recruiting | 5/15 |
| Scale Model Reaches Unsubsidized Chindia-Price Parity | 3/12 |
| **Total** | **28/100** |

**Total Score: 28/100** (Pass)
