# Maritime -- AGI Evaluation

**Action:** Pass  
**Evidence confidence:** Medium

### Company case

Maritime hosts an isolated, persistent VM for each customer’s agent and wakes it when work arrives. The founders report that maintaining and debugging hundreds of VMs took time away from their research. More per-customer agents could increase demand for this runtime, but the memo documents overlapping capabilities from Fly.io and Google Cloud and provides no evidence of constrained supply or deployments delayed by a lack of equivalent capacity. Building blocks scores zero. (The Idea, Defensibility)

The industry-enabled path also scores zero. Maritime’s design could reduce idle compute and the engineering work of operating an existing agent fleet. The memo identifies no previously excluded buyer or use that becomes viable because AI reduces the cost per successful outcome. Keiki’s documented integration establishes that a buyer uses the runtime for background agents. Payment, repeat demand, and a newly viable downstream use remain unverified. (The Idea, Market & Traction, Key Risks)

The documented scheduler shows operating know-how, while overlap in idle sleep and persistent checkpoints limits evidence of durable pricing power. Migration friction from accumulated state and integrations is an inference. The shipped runtime and Maritime’s reported snapshot of 1,107 agents with 29 awake support seed-stage execution. The snapshot leaves reliability under sustained concurrent load open. Published pricing and the risk of rising compute costs as agents spend more time awake leave contribution on the next fleet unquantified. (Defensibility, Market & Traction, The Idea, Key Risks)

### Countercase

A low-duty-cycle fleet could make a dedicated agent per user affordable for a service that previously required too much human supervision. Maritime’s state-preserving wakeups and Keiki’s background-agent integration make that scenario plausible. It assumes that automation cuts supervision enough to cross the buyer’s cost threshold and that the workload remains economical through bursts and failures. The memo supplies neither a cost comparison nor evidence that Keiki opened a previously excluded use, so the Pass gate applies. (The Idea, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 0/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 4/20 |
| Customer demand | 6/15 |
| Team and execution | 7/10 |
| Scale economics | 2/5 |

**Total Score: 19/150** (Strong Pass)

### Decisive diligence question

Can one paying customer show that a persistent background-agent workflow previously ruled out on cost now meets its budget and reliability requirements on Maritime? A representative deployment comparing fully loaded cost per successful outcome with the prior delivery model, including compute, human supervision, and failed or retried work, would answer it. If that comparison showed that AI-driven labor savings crossed the threshold and that the customer still needed a managed runtime under model parity, the action would move to Reach out.
