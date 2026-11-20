# Hopper -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements.** If cheap frontier-quality models drive more live voice traffic, predictable end-to-end latency under burst load could become more valuable. The memo describes developers using interim transcripts, cached audio, and filler greetings to mask delays across transcription, generation, and synthesis. Those workarounds identify a constraint that developers already spend effort managing. Hopper’s opportunity is to sell reliable serving capacity across the full pipeline. Whether it can deliver that capacity on terms competitors take meaningful effort to match remains unproven. (The Idea)

Hopper has documented custom inference kernels and a cache-aware router. Customer-specific evaluations and tuning could make migrations costly, but the memo contains no measured migration costs or retention evidence, and tuning on production calls requires written consent. The founders’ prior voice-inference and kernel work is directly relevant, and shipping the voice offering shows early execution. Hopper reports that one signed customer moved traffic into production. That is a meaningful early commitment, with repeat purchases and viable contract pricing still unknown. The reported 10 billion daily tokens cover the whole platform, so they do not establish demand for low-latency voice serving. (Defensibility, Key Risks, Founders & Team, The Idea, Market & Traction)

### Countercase

Daily documents a self-hosting route, Baseten offers co-located managed voice serving, and one Hopper customer used its own overflow routing during bursts. Hopper reports that p95 latency on that deployment rose from about 11 to 42 seconds under higher load despite using spare GPUs and overflow to absorb bursts. The relevant scale metric is contribution per completed call within the buyer’s latency and quality targets, including the cost of reserve capacity and fallback. The memo gives neither that cost nor utilization at a load that meets those targets. The alternatives and load result weigh against outreach, while the memo leaves open whether a substitute can match Hopper on the same workload. Watch is warranted because a production comparison can resolve that question. Confidence is Low because the decisive operating evidence is limited to one company-reported deployment without a matched comparison. (Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 12/25 |
| Durable value capture | 8/25 |
| Customer demand | 11/20 |
| Team and execution | 10/15 |
| Scale economics | 3/15 |

**Total Score: 44/100** (Pass)

### Decisive diligence question

Will an independent voice-agent buyer renew a paid deployment after a matched production trial shows that Hopper meets the buyer’s end-to-end p95 latency and call-quality targets through representative bursts at positive contribution, while a credible managed or self-hosted substitute cannot match those results at comparable cost? A renewal on those terms would move the action to Reach out. If the substitute matches Hopper and the buyer can switch without material cost, the action moves to Pass.
