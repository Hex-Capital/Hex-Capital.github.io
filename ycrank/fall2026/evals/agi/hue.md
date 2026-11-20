# Hue -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements.** Hue’s strongest case is that production-faithful app state becomes a bottleneck for teams releasing agents that send email or update CRMs. Hue says it can reconstruct the state an agent encountered from recorded requests and give each test run an isolated starting copy. If cheaper models lead teams to ship more agents that act across business apps, teams could face more release-blocking failures that empty sandboxes and mocked APIs cannot reproduce. The memo contains no representative buyer test showing how often Hue reproduces those failures or how much engineering time it saves. (*The Idea*, *Market & Traction*, *Key Risks*)

The reported 69,000 weekly SDK downloads show distribution. The memo gives no count of active teams, paid deployments, or repeat buyers. The shipped SDKs and the founders’ prior agent work support early execution credit. The expansion unit is a reusable test world. If teams can reuse it across releases, setup effort could be spread over more runs. That cost advantage remains conditional on reconstruction, redaction, replica maintenance, and per-run costs, for which the memo supplies no measurements. (*Market & Traction*, *The Idea*, *Founders & Team*, *Key Risks*)

### Countercase

Ancha already offers trace-based replay, Arga Labs offers stateful app replicas, and open-source ClawsBench supports Gmail and Slack snapshot restoration. Hue’s ability to select a checkpoint from retained user history could matter if it reproduces failures those alternatives miss. That advantage is untested, and Hue’s own documentation says missing observations can prevent reconstruction. The overlap leaves durable control unproven and supports Watch. The memo contains no head-to-head result that closes the path. (*Defensibility*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 11/25 |
| Durable value capture | 7/25 |
| Customer demand | 6/20 |
| Team and execution | 9/15 |
| Scale economics | 5/15 |

**Total Score: 38/100** (Pass)

### Decisive diligence question

Will an independent agent team pay to use Hue again after a side-by-side trial against Ancha on representative release-blocking failures using production traces the buyer is allowed to share? Move to Reach out if Hue reliably reproduces consequential failures Ancha misses at comparable setup and run cost, and the buyer commits budget for another release. If Ancha meets the same release requirements at comparable cost, Pass on the current case.
