# Hopper -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

Usage-based expansion is Hopper’s strongest path. Voice-agent developers need transcription, language-model inference, and speech synthesis on every live call. The memo documents prepaid API pricing by token or generated audio hour and a Pipecat integration. That gives standard serving a plausible route across markets using the same API. Language coverage and regional latency remain unverified, and tuning on production calls requires written consent and agreed retention terms. (The Idea, Key Facts, Key Risks)

Hopper reports that one signed customer moved traffic into production. That is a meaningful workflow commitment at this stage, with contract value and customer outcomes still unknown. Hopper also reports more than 10 billion tokens per day across its inference platform within four weeks. The memo leaves the production customer’s acquisition route, onboarding effort, and subsequent billed usage unresolved. Hopper Code’s reported use in 44 countries concerns a separate product. (Market & Traction, Key Facts)

If a voice customer routes more calls through Hopper or adds another pipeline stage, billed consumption could grow within the account. The first link likely to break is serving those extra calls at acceptable latency while improving contribution per call. (The Idea, Key Risks)

### Countercase

Hopper reports that p95 latency on one deployment rose from about 11 to 42 seconds under higher load, with spare GPUs and customer-side overflow routing used to absorb bursts. If each increase in traffic requires comparable additions to reserved capacity and engineering effort, usage growth could yield little incremental contribution. Hopper documents cache-aware routing as a potential efficiency improvement, but the memo gives no marginal cost or rollout-effort measurements. One deployment establishes a load risk and leaves the structural downside gate untriggered. (Key Risks, Defensibility)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 15/25 |
| Repeatable acquisition and onboarding | 9/25 |
| Retention and customer expansion | 7/20 |
| Contribution as volume grows | 7/20 |
| Evidence of fit in the first buyer segment | 6/10 |

**Total Score: 44/100** (Pass)

### Decisive diligence question

Can a second independent voice-agent customer go live through the existing integration and increase billed call volume over its normal operating cadence while meeting its p95 latency target and improving contribution per call? A rollout record and before-and-after billing and cost data that include GPU headroom, overflow, and engineering support would move the action to **Reach out** if they show that pattern.
