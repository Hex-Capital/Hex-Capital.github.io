# Mirrors -- Exit Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

Strategic acquisition by an AI gateway or agent tooling platform is the strongest route. Mirrors could add live, account-scoped guidance and outcome measurement to a platform that already serves teams running production agents. Palo Alto Networks’ acquisition of gateway provider Portkey shows adjacent buyer activity. A buyer’s reason to acquire Mirrors would depend on whether its guidance measurably reduces recurring failures beyond what the buyer can build with existing framework hooks. (*The Idea*, *Market & Traction*, *Defensibility*)

The memo records a Python SDK release. Mirrors reports 63,052 agent turns over an unspecified period and a design-partner example in which an agent made 75 errors despite a stop rule in its prompt. The example shows the problem, while the turn count leaves production adoption and the effect of Mirrors’ guidance unresolved. The SDK and design-partner example make a controlled production comparison plausible at seed. Paid deployments, the testing budget, and the time needed to replicate results remain unverified. The memo leaves acquisition and holder participation terms open and provides no evidence of an independent liquidity route. (*Market & Traction*, *Key Facts*)

Under the shared benchmark, a $500,000 check at a $10 million post-money valuation starts at 5% ownership and dilutes to 3%, with no follow-ons. The 5× objective requires $2.5 million in cash within eight years, or about $83.3 million in distributable equity value at 3%. The sale cases below are illustrative. Both assume a cash close within eight years, $5 million in combined debt and deal deductions, and an eligible holder selling its full stake pro rata with no preference diversion or deferred payout.

| Scenario | Proceeds bridge | Cash to holder |
|----------|-----------------|----------------|
| Modest sale | $40 million enterprise value less $5 million in deductions leaves $35 million for equity | $1.05 million, or 2.1× |
| Strong sale | $100 million enterprise value less $5 million in deductions leaves $95 million for equity | $2.85 million, or 5.7× |
| Prolonged private | Continued operation with reinvestment and no eligible share purchase or payout within eight years | $0 |

The strong case clears the hurdle under those assumptions. At 2% ownership, it yields $1.9 million. The memo gives no Portkey deal price, realized Mirrors revenue, or measured buyer savings to support the illustrative sale prices. (*Market & Traction*, *Key Facts*)

### Countercase

A platform can implement runtime steering through Strands hooks or LangChain middleware and may decide the work of adding rule preview and outcome measurement costs less than buying Mirrors. Mirrors also reports a 200 ms average response time and a 750 ms fail-open threshold, and a model can disregard delivered guidance. Those limits could erode the incremental value a buyer would pay for. The evidence leaves a testable gap and does not establish a structural block or a ceiling on proceeds that triggers Pass. (*Defensibility*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Counterparty rationale or source of cash | 14/30 |
| Plausible investor proceeds | 8/30 |
| Milestones and capital needed | 10/20 |
| Transaction feasibility | 5/10 |
| Independent alternatives | 2/10 |

**Total Score: 39/100** (Pass)

### Decisive diligence question

Can Mirrors show a repeatable, economically meaningful reduction in recurring failures versus framework-native steering in paid production deployments? Controlled comparisons across customers that account for latency and fail-open runs and quantify the cost of failures avoided would move the action to Reach out to test whether those economics could support an acquisition above the proceeds hurdle.
