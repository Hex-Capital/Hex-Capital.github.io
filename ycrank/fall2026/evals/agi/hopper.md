# Hopper -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements** is Hopper’s strongest fit. The potential bottleneck is serving voice agents fast enough to sustain a conversation while keeping call quality steady during traffic bursts. The memo describes developers using cached audio and filler greetings to mask delays across transcription, generation, and synthesis. Hopper’s documented custom kernels and cache-aware routing give it a concrete way to address those delays. If cheaper models lead to more live calls, developers could still pay Hopper for predictable performance under load. That advantage remains unverified against a comparable deployment. (The Idea, Defensibility)

Hopper reports one signed customer that moved traffic into production and more than 10 billion tokens per day across the platform. The voice share, contract value, and repeat paid usage remain unknown. The founders’ prior work in production voice inference and inference kernels, together with the October voice launch, supports execution at a seed-stage standard. Hopper’s Fall 2026 batch and San Francisco base make it a plausible U.S. seed candidate. (Market & Traction, Key Facts, Founders & Team, The Idea)

Prepaid API pricing gives Hopper a way to monetize the next deployment. The scale test is revenue per successful call against compute, spare capacity, and customer-specific tuning and support at realistic traffic levels. Hopper reports that p95 latency on one deployment rose from roughly 11 to 42 seconds under higher load, with spare GPUs and customer-side overflow used to absorb bursts. The cost of sustaining acceptable performance is unknown. (The Idea, Key Risks)

### Countercase

With the same open weights and ample capital, a capable rival could reproduce Hopper’s serving performance. Self-hosting and managed open-speech deployment already exist. Customer-specific tuning could make switching costly, though migration costs and retention remain unverified, and tuning on production calls requires written consent. Existing alternatives make the threat credible. The memo leaves open whether they can match Hopper’s performance and economics on the same workload, so the Path A override does not apply. Path B remains unproven because the memo identifies neither a newly viable voice transaction nor buyer preference at model parity. (Defensibility, Key Risks, The Idea, Market & Traction)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 10/25 |
| Durable value capture | 7/25 |
| Customer demand | 8/20 |
| Team and execution | 10/15 |
| Scale economics | 5/15 |

**Total Score: 40/100** (Pass)

### Decisive diligence question

Will an independent voice-agent buyer commit to paying for Hopper after a production comparison against its best available alternative using the same open models? Test both under representative bursts at equivalent call quality. Measure end-to-end p95 latency and fully loaded cost per successful call, including spare capacity and overflow. A repeatable advantage that earns a paid commitment at positive contribution would support Reach out if the reassessment clears 65 with at least medium confidence. Equivalent performance and cost with easy switching would move the case to Pass.
