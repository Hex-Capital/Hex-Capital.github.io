# GrayPass -- AGI Evaluation

**Action:** Pass  
**Evidence confidence:** Medium

### Company case

GrayPass’s strongest commercial case is verifying who controls a session when an application receives a sensitive request, such as a payout, data export, or permission change. Its documented design evaluates session and behavioral signals against customer policy and can issue a short-lived signed proof bound to the exact action. Customers must integrate the decision into their server-side authorization flow. That integration and customer-specific enrollment could create switching costs, though the memo shows no retention or migration evidence and documents overlapping incumbent controls. (The Idea, Defensibility, Key Risks)

**Building blocks of superintelligence.** The memo identifies delegated browser actions as a possible source of demand. It gives no examples of AI deployments held up by action-level authorization or evidence that existing controls cannot meet that need as deployment grows. GrayPass therefore earns zero on this path. (Market & Traction, Key Risks)

**Industry enabled by superintelligence.** The memo describes a security improvement for existing workflows. It identifies no previously excluded buyer or use and gives no evidence that AI reduces the fully loaded cost per successful verification enough to make one viable. GrayPass earns zero on this path. (The Idea, Key Risks)

GrayPass reports processing more than 900,000 customer-app sessions and generating $50,000 in October 2026 revenue as of launch. Those figures support early demand, with paid production enforcement and repeat buying still unverified. The beta decision API and the founders’ relevant engineering and research experience support seed-stage execution credit. Behavioral continuity remains experimental and limited to sandbox and shadow evaluation. Listed pricing starts at $500 per month, and the memo gives no delivery-cost data to assess contribution on the next deployment. (The Idea, Market & Traction, Founders & Team, Key Risks, Key Facts)

### Countercase

An application might withhold a sensitive workflow from browser agents because its existing controls cannot reliably distinguish authorized delegation from unauthorized session use. GrayPass’s action-bound proof gives it a concrete design to test in that scenario. The memo documents browser agents taking actions within sessions and GrayPass’s proof design, while also identifying overlapping transaction-time controls and unvalidated behavioral recognition. The scenario remains hypothetical, so both path scores are zero and the Pass gate applies. (The Idea, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 0/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 7/20 |
| Customer demand | 8/15 |
| Team and execution | 6/10 |
| Scale economics | 2/5 |

**Total Score: 23/150** (Pass)

### Decisive diligence question

Can GrayPass enable a sensitive browser-agent workflow that a buyer has withheld because available controls fail its authorization requirements? A buyer-confirmed production pilot in which GrayPass meets the buyer’s thresholds for unauthorized approvals and unnecessary challenges, and the buyer enables the workflow as a result, would establish a specific AI deployment constraint and move the action to Reach out.
