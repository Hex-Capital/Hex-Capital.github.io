# RightNow -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

RightNow has a plausible building-blocks path in GPU serving capacity for latency-sensitive, open-weight inference. Open-weight models accounted for a majority of tokens on Vercel AI Gateway in August 2026, an observed usage signal from one gateway. RightNow describes tuning kernels, precision, batching, and caching for specific hardware. If those changes let customers serve more requests per rented GPU at the same model quality and tail latency, they could free capacity as traffic grows. The memo leaves two questions open: whether compatible capacity is scarce on practical procurement terms and whether RightNow’s gains hold on representative customer traffic. This supports partial fit and a Watch action. *(The Idea; Market & Traction; Key Risks)*

The industry-enabled path scores zero. The memo describes cheaper, faster delivery of an existing inference service. It identifies no buyer or use that was previously priced out and became viable through RightNow’s service. *(The Idea; Market & Traction)*

Joint kernel and serving-stack tuning gives RightNow some operating know-how. Its durability is untested. The founders co-authored AutoKernel and shipped a hosted API, including a migration that preserved keys and balances. Those are execution signals. Launch votes show interest, and RightNow reports kernel-tool use at several companies. The memo provides no buyer trial, commitment, or repeat paid use for hosted inference, so customer demand stays at the default. Scale economics also stays at the default. Posted token prices and discounted batch serving provide a starting point, while realized revenue, GPU rental cost per served token, and utilization remain unknown. *(Defensibility; Founders & Team; Market & Traction; The Idea; Key Facts; Key Risks)*

### Countercase

RightNow may be selling an efficiency gain that competing hosts can replicate or match by adding capacity. Together already tunes inference with its own compiler, RightNow publishes part of its optimization workflow under Apache 2.0, and buyers can choose among established hosts. RightNow itself rents GPUs. The memo leaves open whether buyers can readily obtain equivalent capacity at the required cost and latency. The substitution risk limits building-blocks and durability credit. The Pass action gate would apply if equivalent capacity proved readily substitutable, since the industry-enabled path already scores zero. *(The Idea; Defensibility; Market & Traction; Key Risks)*

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 15/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 6/20 |
| Customer demand | 4/15 |
| Team and execution | 7/10 |
| Scale economics | 2/5 |

**Total Score: 34/150** (Pass)

### Decisive diligence question

Can RightNow lift a buyer’s documented GPU capacity limit on a production open-weight workload? Move to **Reach out** if a buyer-verified trial on representative traffic shows that RightNow meets the required throughput, model quality, and tail latency within the buyer’s budget, and the buyer’s best available alternative cannot do so on the required timeline.
