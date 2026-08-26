# Amulet -- Cyan Banister Evaluation

In 2032, thousands of disposable agents may fork the same enormous dataset, perform work in parallel, preserve every mutation, and disappear without taking the data or provenance with them. Amulet has one credible leak from that future: E2B already reported hundreds of millions of sandbox sessions, while Amulet’s filesystem mounts isolated workspaces in under 100 ms and separates their state from ephemeral compute. The missing links are adoption and standardization. The dossier does not yet show that agent builders treat filesystem state as an independent control plane rather than a feature their sandbox or cloud provider should own.

The technical object is unusually specific for a pre-seed company. Content-addressed commits, copy-on-write forks, workspace-scoped credentials, and compare-and-swap publishing address a real consequence of parallel agents: two machines can produce useful work without silently overwriting each other. Published p99 reads of 1.9 ms and throughput of 8.4 GB/s suggest there is a working artifact, not merely a diagram. But those are Amulet’s own benchmarks, and the private beta supplies no dated cohort, completed workload, retention figure, or strange user behavior. A machine can be beautifully engineered before anyone rearranges their life around it.

I can see the broken workflow more clearly than the broken rule. Today, durable datasets are coupled to object stores while agent state is coupled to short-lived sandboxes; teams pay in copies, lost work, reconciliation, and operational attention. Amulet returns control over workspace history and publishing to the team running the agents. Yet the dossier does not quantify that rent, identify who captures it, or demonstrate that customers will pay $500 per month to escape it. The pricing page is an economic hypothesis, not a revenue signal.

The strongest case for Amulet is that it sits beneath the fashionable part. Automated-research labs, training jobs, and cloud-agent providers could all need the same versioned data substrate, and the product is provider-independent rather than captive to one closed model or sandbox. This matches my concealed-infrastructure pattern. The objection stings because Archil has raised $18 million, E2B $32 million, and Daytona at least $29 million while reporting a $2 million forward revenue run rate. Those vendors can absorb persistence, snapshots, and mounts into broader platforms. Amulet must prove that conflict-safe workspace history is a scarce layer, not a clever filesystem feature awaiting bundling.

I am less convinced by the origin story. Nithik Bala’s Meta web-infrastructure and Rockset experience and Varun Puru’s Meta, Amazon, and backend work establish technical competence. They do not establish dated pre-company obsession, independently shipped storage artifacts, customer tuition, or recruiting power beyond the two former Meta colleagues. More troublingly, the July 2026 LinkedIn crawl still describes a post-sales product. A rapid pivot can reveal learning, but without the wound that caused it, this one also resembles a capable team moving into the current AI-infrastructure wave.

I pass today. Pre-revenue itself is harmless when a prototype is paired with signed proofs of concept and a founder biography showing that the problem existed before the market became fashionable; Amulet presently supplies only the prototype side of that exception. My 36-month base case is that it pivots into provenance and data-versioning software embedded within agent-compute platforms and remains below $1 million ARR as a standalone filesystem. One verifiable fact flips me: an independent customer still paying for Amulet after 90 days while repeatedly running production parallel-agent workloads that would otherwise lose or corrupt state.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Maps a Six-Year Future to One Present-Day Leak | 16/31 |
| Founder Biography Shows Pre-Company Obsession and First-Believer Proof | 5/24 |
| Dossier Names a Broken Rule, Its Rent, and the Agency Returned | 8/19 |
| Working Artifact Elicits Costly or Weird User Behavior | 4/15 |
| Product Sits Beneath Today?s Hype as an Enabling Layer | 9/11 |
| **Total** | **42/100** |

**Total Score: 42/100** (Pass)
