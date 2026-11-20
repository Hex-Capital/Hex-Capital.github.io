# Workers IO -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements.** If cheap coding agents increase the volume of software changes faster than teams can verify them, reproducible testing of failures across services could become a release bottleneck for payments, trading, and infrastructure teams. Workers IO describes a deterministic hypervisor that runs systems with their dependencies and replays failures from a seed. The founder reports finding PostgreSQL issues while simulating a customer stack. That result supports the technical mechanism at seed, while the buyer’s release delay and the simulator’s improvement in verification throughput remain unmeasured. (*The Idea; Market & Traction*)

An investor reports paying customers, and the CEO reports expansion across teams or projects among almost all customers engaged beyond 30 days, with the cohort size undisclosed. Chaitanya Choudhary’s prior developer-tooling work at Grit and the launch of the simulator support early execution. The plausible unit of expansion is another customer workload. Running unmodified systems could reduce integration effort, while each workload still needs checks and fault coverage. Setup time, simulation compute, support costs, and realized subscription prices remain unknown. (*Market & Traction; Founders & Team; The Idea; Key Risks*)

### Countercase

Antithesis already offers deterministic full-system simulation and a $2,999-per-month self-serve plan with a coding-agent plugin. Workers IO’s customer-state-guided branching could improve fault discovery, and accumulated checks and replay histories could make switching costly. Both advantages remain untested against the direct substitute. The competitor’s offering leaves the scarcity gate unresolved. Comparable results at viable cost on a representative workload would close Path A. (*The Idea; Defensibility; Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 12/25 |
| Durable value capture | 7/25 |
| Customer demand | 10/20 |
| Team and execution | 8/15 |
| Scale economics | 5/15 |

**Total Score: 42/100** (Pass)

### Decisive diligence question

Will an independent buyer whose releases are constrained by verification commit to a paid second workload after testing Workers IO and Antithesis on the same production-representative workload? Move to **Reach out** if Workers IO alone meets the buyer’s predefined threshold for reproducible release-blocking failures within the same engineering and compute budget, and the buyer pays to expand. Move to **Pass** if both meet the threshold at comparable delivered cost.
