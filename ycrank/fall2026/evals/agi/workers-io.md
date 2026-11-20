# Workers IO -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

Workers IO has a narrow building-blocks case in release verification for mission-critical software written with coding agents. The company claims agents are generating changes faster than engineers can verify them under production-like conditions. Its deterministic simulator is designed to run unmodified systems and their dependencies, inject faults, and replay failures that isolated tests can miss. If coding agents increase the volume of changes to critical workflows faster than verification capacity grows, that workflow could become a release bottleneck. The memo documents a narrow set of full-system replay tools, but gives no buyer-confirmed release delays attributable to coding agents or evidence that available tools cannot absorb the extra demand. That gap supports Watch. (The Idea, Market & Traction, Key Risks)

The industry-enabled path earns zero. The simulator could improve coverage for existing engineering teams, but the memo shows neither an AI-driven reduction in cost per successful verification nor a buyer, use, or testing cadence that becomes economically viable because of it. (The Idea, Market & Traction)

For the existing verification business, customer-authored checks and replay histories could create switching costs, though their effect on retention is unmeasured. An investor reports paying customers, and the CEO claims expansion among nearly all customers engaged for over 30 days without giving a denominator. The launch and the founder’s account of finding PostgreSQL issues in a customer stack support early execution. Contribution from the next deployment remains unmeasured because subscription pricing, simulation compute, and onboarding and support costs are undisclosed. (Defensibility, Market & Traction, The Idea)

### Countercase

Workers IO may be serving a longstanding reliability need that grows alongside coding-agent adoption without becoming scarce. Antithesis already offers overlapping deterministic simulation and a self-serve plan with a coding-agent plugin. Workers IO also depends on customers defining the workloads and conditions to test, so engineering effort could remain the limiting input. The overlap makes substitution credible. The memo lacks a buyer comparison that would establish equivalent verification capacity on viable terms and trigger Pass. (Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 5/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 7/20 |
| Customer demand | 8/15 |
| Team and execution | 6/10 |
| Scale economics | 2/5 |

**Total Score: 28/150** (Pass)

### Decisive diligence question

Can Workers IO clear a buyer’s release backlog caused by coding-agent output while maintaining required fault coverage? A side-by-side pilot on one mission-critical workflow should measure engineer hours and time to release at the same coverage, using the buyer’s best available alternative as the baseline. A buyer-confirmed bottleneck that Workers IO materially relieves while the alternative cannot would change the action to Reach out. Equivalent results from the alternative on viable terms would change it to Pass.
