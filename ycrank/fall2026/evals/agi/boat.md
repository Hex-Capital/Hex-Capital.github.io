# Boat -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Scarce complements.** Cheaper intelligence could increase the number of long-running agents that need isolated computers with persistent state. Boat’s documented product gives developers full Ubuntu VMs with Docker and a desktop, plus controls to stop, resume, and fork environments. That makes dependable access to persistent VMs during bursts a plausible bottleneck. The memo gives no comparative measurements of resume reliability or usable capacity under load. Boat reports operating the stack from CPU hosts through orchestration and building its own snapshot system. That gives it a lever to improve service, while the durability of any advantage remains unproven. (The Idea, Defensibility, Key Risks)

The founders built Box for their own cloud coding-agent product and shipped it as a standalone service, relevant execution evidence at seed. The founder reports 350+ paying users in September and $1 million ARR in November, up from $200,000 a month earlier. A customer testimonial describes using an agent more intensively after adopting Boat. These are early demand signals, with repeat paid usage and the basis for annualizing revenue still unclear. Boat’s listed Paris and remote footprint leaves fit with the primarily U.S. mandate open. (Founders & Team, Market & Traction, Key Facts, Boat)

At the posted $0.036 hourly rate, **assuming** 1,000 incremental billable VM-hours at that rate before plan or burst adjustments, Boat would generate $36 in usage revenue. Contribution depends on host cost at achieved utilization, spare capacity for bursts, snapshot storage, and operating costs. Auto-stop can reduce idle compute, while fees and rejected starts limit what customers can run during bursts. The memo leaves the economics of serving the next customer unverified. (The Idea, Key Risks)

### Countercase

E2B already offers fast-resume microVMs and self-hosting, and AWS bundles browser and code-execution sandboxes. With more capital, competing providers could expand overlapping capacity. Cheap models would give buyers more reason to run agents, while still letting them choose where those agents run. The memo shows credible substitutes for parts of Boat’s offering and leaves switching costs unmeasured. It does not establish easy substitution for a stateful, bursty workload that needs Boat’s full environment, so the Path A override is unresolved. Path B has no separate supported case because the memo identifies no newly viable paid transaction with measured delivery-labor savings. (The Idea, Defensibility, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 11/25 |
| Durable value capture | 7/25 |
| Customer demand | 12/20 |
| Team and execution | 9/15 |
| Scale economics | 6/15 |

**Total Score: 45/100** (Neutral)

### Decisive diligence question

Will independent paying customers keep production workloads on Boat at a price that covers incremental delivery costs after testing the same stateful workloads on their best available alternative? A production trial should measure successful resumes and accepted starts under realistic bursts, then track repeat purchases at that price. Move to **Reach out** if buyers repeatedly pay for an advantage tied to a capability Boat controls and the updated score, confidence, and mandate fit clear the outreach gates. Move to **Pass** if substitutes meet the same requirements at comparable cost and customers switch readily.
