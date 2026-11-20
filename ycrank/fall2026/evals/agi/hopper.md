# Hopper -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

**Scarce complements** is Hopper’s strongest path. The candidate bottleneck is reliable, low-latency inference across transcription, language generation, and speech synthesis when concurrent calls spike. The memo documents workarounds such as interim transcripts and cached audio. These suggest that developers already spend engineering effort on latency and that predictable response times could become more valuable as voice traffic grows. Hopper’s documented custom kernels and cache-aware routing show a specific operating approach. Customer-specific evaluations and tuning could make deployments harder to replace, though migration costs and Hopper’s ability to protect that advantage remain unverified. (The Idea, Defensibility)

Hopper reports that one signed customer moved into production and that an unnamed gaming customer requested tuning for accents and emotion. The production move is the strongest demand signal. The reported 10 billion tokens per day span the platform, and initial users reportedly spent under $1. Repeat paid voice usage and willingness to pay for the latency advantage remain unverified. The founders’ prior work in production voice inference and inference kernels, together with the shipped voice service, supports execution at this stage. A repeatable response to burst load remains the next execution gap. (Market & Traction, Key Facts, Founders & Team, The Idea, Key Risks)

The unit of expansion is another production voice workload meeting a defined latency and quality target. In a scale scenario, contribution per successful call would equal usage revenue less inference and operating costs, including a share of reserved GPU capacity and customer-specific tuning. Customer-side overflow also affects the buyer’s all-in cost. Hopper’s CTO reports that p95 latency rose from about 11 to 42 seconds under higher load on one deployment, with spare GPUs and customer-side overflow used to absorb bursts. That is adverse evidence for marginal capacity. Published API prices establish what Hopper charges, while utilization and the cost per successful call at peak load remain unknown. (Key Risks, The Idea)

### Countercase

The strongest countercase is that voice inference becomes interchangeable hosting. The memo documents a self-hostable open-weight model and a managed, co-located voice stack. Customer-specific tuning may add switching friction, but training requires written consent, and the memo supplies no measured migration costs. These alternatives make substitution credible. Equivalent performance at the same all-in cost remains untested on Hopper’s customer workloads, so the scarce-complement path stays open under **Watch**. The New Economies path lacks a supported case of a previously excluded buyer or use becoming viable through a measured reduction in labor cost per successful call. (Defensibility, Key Risks, The Idea, Market & Traction)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 10/25 |
| Durable value capture | 8/25 |
| Customer demand | 9/20 |
| Team and execution | 10/15 |
| Scale economics | 3/15 |

**Total Score: 40/100** (Pass)

### Decisive diligence question

Will a production voice customer renew at a price that leaves Hopper positive contribution after a head-to-head trial against a credible alternative using the same open-weight models? Run representative peak traffic against the same latency and call-quality targets, and include tuning, reserved GPUs, and overflow in the cost comparison. A paid renewal backed by a material performance advantage at viable margins would move the action to **Reach out**. If the alternative matches performance and all-in cost and the customer switches readily, move to **Pass**.
