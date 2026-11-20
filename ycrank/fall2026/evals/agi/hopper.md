# Hopper -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

Hopper has a plausible building-blocks path in low-latency inference for live voice agents. Transcription, language-model generation, and synthesis share a single turn-latency budget. Developers use interim transcripts, cached audio, and filler greetings to manage delays. If adoption increases peak call concurrency, serving that preserves response quality and tail latency could become harder to procure. Hopper’s optimized open-weight stack addresses that workload. Its CTO reports that p95 latency rose from about 11 to 42 seconds under load on one deployment, although the memo gives no end-to-end voice measurement for that deployment. The evidence supports a plausible performance constraint. Its persistence as buyers add capacity or switch providers remains unverified. (The Idea, Key Risks)

The industry-enabled path earns zero. Hopper improves the serving and tuning workflow for existing voice-agent developers. The memo identifies no buyer or use previously priced out by the old delivery model and gives no cost per successful outcome showing that Hopper crosses an affordability threshold. (The Idea, Market & Traction)

Customer-specific evaluations and tuned models could make switching costly if customers have to reproduce that work. Hopper documents custom kernels and cache-aware routing, while retention, migration costs, and pricing power remain unverified. Hopper reports one signed customer moving traffic into production, an early demand signal with limited evidence of repeat paid use. The founders’ prior voice-inference and kernel work and the public voice launch support seed-stage execution credit. Published usage prices give a revenue starting point, while GPU utilization and delivery cost per call at the required latency remain unknown. Confidence is low because the central workload comparison is missing and the production traction is company-reported. (Defensibility, Market & Traction, Founders & Team, The Idea, Key Facts)

### Countercase

Low-latency voice serving may be obtainable through self-hosting, a co-located managed stack, or additional GPU capacity. The memo documents the first two alternatives, and Hopper reports using spare GPUs and customer-side overflow to absorb bursts. If buyers can meet the same latency and quality targets at comparable cost through those routes, the building-blocks path falls to zero and the decision becomes Pass. The memo leaves that comparison open, which supports Watch. (Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 7/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 7/20 |
| Customer demand | 8/15 |
| Team and execution | 7/10 |
| Scale economics | 2/5 |

**Total Score: 31/150** (Pass)

### Decisive diligence question

Can Hopper meet a voice customer’s end-to-end p95 turn-latency target through representative traffic bursts, at matched response quality and within the customer’s budget, where the customer’s best available alternative falls short? A customer-run comparison on the same traffic, including overflow and the cost of spare capacity, would answer it. A clear Hopper advantage would move the action to Reach out. Comparable performance and cost from the alternative would move it to Pass.
