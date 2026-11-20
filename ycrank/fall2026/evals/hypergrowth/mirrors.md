# Mirrors -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

Conditional on strong product-market fit, Mirrors can serve the same engineering buyer across markets. Teams running customer-facing agents can use the TypeScript or Python SDK to scope a rule, preview which past conversations it would have reached, and measure its effect on live runs. The core workflow appears portable with modest adaptation. Public SDK distribution and self-serve signup give developers a way to discover and try the product. How often they can reach first value and pay for a production deployment without founder help remains unclear. (The Idea, Market & Traction)

Growth pricing ties recurring revenue to an ongoing workflow and gives existing accounts room to expand. In an illustrative scenario assuming all turns are billable at the listed rate, an account growing from 10,000 to 50,000 monthly turns would go from $349 to $549 per month. That creates a plausible route for expansion to offset churn, with actual account retention and expansion still unknown. Each additional 1,000 billable turns brings in $5. For that volume to add contribution, its incremental processing, storage, support, and any capacity step-up would need to cost less than $5. The memo supplies no measured costs for that calculation. (The Idea, Key Facts)

The two-founder team launched runtime guidance on October 30. Mirrors reports 63,052 turns over an unspecified period and describes one design partner’s repeated agent failure. These signals establish early activity and a concrete problem, while paid volume, realized revenue, and commercial growth remain unknown. The earlier staging pilots concern a separate product. (Market & Traction, Founders & Team, Key Facts)

### Countercase

Framework-native steering may handle enough recurring failures that teams keep guidance inside their existing stack. Mirrors also adds a live dependency. It reports a 200 ms average response time, skips guidance at the 750 ms fail-open threshold, and acknowledges that models can disregard delivered rules. These constraints could limit how much production traffic customers route through Mirrors and weaken usage expansion. The structural gate stays open because the SDK provides a reusable deployment path and the evidence leaves incremental contribution unresolved. (Defensibility, The Idea, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 21/25 |
| Repeatable acquisition and onboarding | 16/25 |
| Retention economics | 16/20 |
| Initial traction | 7/20 |
| Cost economics | 4/10 |

**Total Score: 64/100** (Neutral)

### Decisive diligence question

Can developers who discover Mirrors through public channels independently reach a paid production deployment? A small cohort with signup-to-first-live-rule records and invoices for production turns, all completed without founder-led setup, would strengthen acquisition and establish realized traction enough to move to Reach out.
