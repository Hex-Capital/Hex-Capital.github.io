# Nodus Compute -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

Nodus has a plausible building-blocks path for checkpointable training jobs that need a compatible GPU within a defined time window. A sample of Kubernetes clusters averaged 5% GPU utilization, showing idle capacity in those fleets. Nodus says its scheduler prioritizes owners’ jobs, lends eligible idle GPU time to other teams, and supports checkpoint recovery. If training demand grows faster than the supply of compatible GPUs available on short notice, Nodus could make some of that idle time usable. This assumes borrowers can tolerate interruptions, replacement hosts are available when owners reclaim their machines, and borrowers can share job data with those hosts. The memo leaves buyer wait times and performance under real reclaims unmeasured. (The Idea, Key Risks)

The industry-enabled path scores zero. The memo describes a way to improve access to GPU time for existing AI workloads. It identifies no previously excluded buyer or use made viable by AI lowering the cost of delivering a distinct outcome. (The Idea, Market & Traction)

Owners can reclaim lent capacity, limiting Nodus’s control over the supply it sells. The founders report that more than 200 teams joined after launch and list named users, with paid use and repeat purchasing unverified. The launch and a reported verifier run reproducing a 7.65× cold-start speedup on one A100 support seed-stage execution. The pooling benchmark used synthetic tenants and replayed traffic on one node. Published rates establish asking prices, while host payouts, retry costs, and contribution per completed job remain unknown. Those gaps keep evidence confidence low. (The Idea, Defensibility, Market & Traction, Key Risks)

### Countercase

The jobs best suited to Nodus are also the ones most able to use spot GPUs. The memo reports improving lower-end spot availability, and competitors already offer GPU scheduling or cross-cloud pooling. Low utilization establishes that GPUs sit idle in the sampled fleets. Whether borrowers face a shortage of compatible capacity they can use on acceptable terms remains open. The evidence supports a narrow path and warrants Watch while that substitution question is unresolved. (The Idea, Defensibility, Market & Traction)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 16/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 4/20 |
| Customer demand | 4/15 |
| Team and execution | 7/10 |
| Scale economics | 2/5 |

**Total Score: 33/150** (Pass)

### Decisive diligence question

Can a paying team with documented delays securing compatible GPUs repeatedly finish checkpointable training runs by its deadline at a lower all-in cost per successful run than its best available spot option? A paid trial that logs actual owner reclaims and includes recovery time and recompute costs would answer it. Meeting both the deadline and cost targets would move the action to Reach out.
