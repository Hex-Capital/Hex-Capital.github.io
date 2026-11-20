# Mirrors -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path B — New Economies.** Mirrors could make frequent travel-guide updates economical for teams that currently skip them because agent retries and human review cost too much. That buyer segment and cost barrier are scenario assumptions. Mirrors reports that a design partner’s agent hit 75 errors while editing a guide despite a stop rule appearing four times in its prompt. This supports a specific failure mode. Whether scoped guidance delivered during the turn reduces labor per successful edit remains unmeasured. *(The Idea, Market & Traction)*

The Python SDK release shows the team shipped the runtime integration. Mirrors reports 63,052 turns over an unspecified period. The memo gives no paid repeat usage or buyer breakdown. At 10,000 monthly turns, Growth would cost $349 assuming the published per-turn rate applies to every turn. The buyer’s cost comparison should include that fee, model usage, retries, review, and manual corrections per accepted edit under both workflows. Mirrors’ own delivery and support costs remain unknown. Under model parity, account-specific rule histories, previews, and outcome comparisons could give buyers a reason to stay. That advantage remains an inference. *(The Idea, Market & Traction, Key Facts, Defensibility)*

### Countercase

Mirrors may improve an existing workflow while leaving previously excluded work uneconomic. Models can ignore delivered rules, and the service lets the agent proceed without guidance after 750 ms. Strands steering hooks and LangChain middleware give buyers a plausible way to replicate runtime guidance in their existing stack. The memo contains no matched cost or substitution test, so both required conditions remain open and Watch applies. *(Key Risks, Defensibility)*

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 9/25 |
| Durable value capture | 7/25 |
| Customer demand | 7/20 |
| Team and execution | 9/15 |
| Scale economics | 5/15 |

**Total Score: 37/100** (Pass)

### Decisive diligence question

Will an independent buyer pay to repeat a guide-editing workflow it previously skipped after a same-model trial against framework-native steering? Reach out if the trial shows that Mirrors lowers labor and full cost per accepted edit enough to sustain the new cadence, and the buyer renews at a price that covers delivery and support. Pass if the trial shows the workflow remains uneconomic or native steering delivers the same outcome and the buyer switches.
