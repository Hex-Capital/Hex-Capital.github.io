# RouterPlus -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

RouterPlus has a plausible building-block path in securing peak inference throughput for production AI assistants. A customer testimonial describes RouterPlus sourcing capacity for peaks of 15× average traffic and arranging a backup provider. RouterPlus says it tests models on customer traffic, solicits provider bids, and validates peak throughput. The memo reports rising agent traffic on OpenRouter, which supports the direction of demand. The investment assumption is that as agent usage grows, providers will struggle to add capacity quickly enough for bursts that must meet specific model quality and latency requirements. The testimonial supports the product fit for one workload. The frequency of shortages and the time needed to secure equivalent capacity remain open. (*The Idea*, *Market & Traction*, *Key Risks*)

The industry-enabled path scores zero. A consumer app reported 25% lower P95 latency after switching to an open model, and the memo reports a 30% inference cost reduction for a consumer chat app. These gains improved existing workloads. The memo identifies no buyer or use that became economically viable because of them. (*Market & Traction*)

RouterPlus’s terms grant reuse rights for de-identified requirements and derived benchmarks, and the company reports one pooled provider deal. Those are early sources of bargaining leverage. Their effect on pricing power remains untested. Customer testimonials support real use, and RouterPlus reports 3 million daily agent conversations at its largest customer. Paid conversion and repeat procurement remain unverified. The team shipped EVO Router and the managed marketplace and has relevant GPU infrastructure experience. Reliable delivery across repeated peaks remains unverified. Standard token usage carries no RouterPlus markup, and reserved capacity is quoted individually. The memo provides no contract economics to assess contribution after provider, backup, and support costs. (*Defensibility*, *Market & Traction*, *Founders & Team*, *The Idea*, *Key Facts*)

### Countercase

Peak-capacity friction may reflect a procurement and scheduling mismatch. Some teams hit serverless rate limits while others leave reserved capacity idle. OpenRouter already offers provider selection and failover, and NVIDIA’s open-source tooling covers routing and benchmarking. RouterPlus’s own provider quotes and availability are indicative until a definitive agreement. If buyers can readily secure equivalent peak throughput through these alternatives, the building-block path falls to zero and the Pass gate applies. The 15× case leaves that comparison open. (*The Idea*, *Defensibility*, *Market & Traction*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 10/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 7/20 |
| Customer demand | 9/15 |
| Team and execution | 7/10 |
| Scale economics | 2/5 |

**Total Score: 35/150** (Pass)

### Decisive diligence question

Can RouterPlus contract for and deliver burst inference that a buyer cannot readily procure elsewhere? A buyer-verified production test would move the action to Reach out if RouterPlus meets agreed throughput, quality, and P95 latency targets with committed primary and backup capacity, while direct procurement and competing routers cannot secure equivalent service at comparable cost within the buyer’s window. If those alternatives readily meet the same requirements, move to Pass.
