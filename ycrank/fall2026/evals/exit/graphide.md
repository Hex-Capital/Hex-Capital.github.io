# Graphide -- Exit Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

Strategic acquisition is Graphide’s strongest path. GitHub is a plausible buyer because it could integrate Graphide’s per-job cache tuning and test splitting into Actions. Graphide reports that 19 of 24 benchmark jobs ran at least 10× faster than their GitHub baselines. That suggests a potential customer benefit. The acquisition case depends on whether GitHub could turn those speed gains into lower compute costs at scale and capture more value by owning the tuning library than by building or licensing equivalent tooling. The memo leaves buyer interest and that economic advantage unverified. (The Idea, Defensibility, Market & Traction)

Graphide’s documented GitHub App installation and migration workflow make a paid production test on standard runners plausible. The memo reports $500,000 in convertible-note financing, with runway, test budget, and note terms unknown. Graphide’s reported operation of its own runner fleet supports a plausible asset transfer. IP ownership, customer permissions for connected repositories, and integration terms still need verification. (The Idea, Defensibility, Market & Traction, Key Risks)

The illustrative investor puts in $500,000 at a $10 million post-money valuation, starts at 5%, and holds 3% after 40% relative dilution, with no follow-ons. The eight-year 5× target requires $2.5 million in gross cash, or about $83.3 million in distributable equity at 3%. The hurdle is $125 million at 2% and $62.5 million at 4%. At 3%, $5 million of illustrative net debt raises the hurdle to about $88.3 million in enterprise value. The note’s cash or dilution impact is unquantifiable from the memo. The memo also supplies no acquisition-price evidence. (Market & Traction, Key Facts)

- A **$25 million sale in year eight** yields **$600,000 gross, or 1.2×**, after the illustrative net debt.
- A **$100 million sale in year eight** yields **$2.85 million gross, or 5.7×**, on the same assumptions. Both sale cases use a simple pro rata allocation before investor taxes and before any unquantified fees or senior claims.
- If growth plateaus, buyers stay away, public-market scale stays out of reach, and Graphide reinvests all available cash through year eight, the holder realizes **$0** and retains the shares. A wind-down would pay only the residual after obligations and preferences, which the memo leaves unquantifiable.

A sponsor buyout lacks evidence of predictable cash generation. A secondary lacks evidence of demand for eligible shares, an IPO lacks evidence of operating scale and readiness, and a dividend or buyback lacks evidence of distributable cash. (Market & Traction, Key Facts)

### Countercase

GitHub already sells native runner capacity and cut hosted-runner prices by up to 39%. Depot and Blacksmith already have runner infrastructure on which they could build similar tuning. Graphide hand-tuned 10 benchmark jobs on 64- or 128-vCPU machines, while customer runners topped out at 32 vCPUs. Its 70%+ bill savings figure is a target. If the production gains shrink on standard hardware, GitHub could have little reason to pay an acquisition premium. The evidence supports Watch because it leaves both the cost of replicating the tuning and the achievable acquisition price unresolved. A structural block or materially inadequate proceeds would trigger Pass. (The Idea, Defensibility, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Counterparty rationale or source of cash | 14/30 |
| Plausible investor proceeds | 8/30 |
| Milestones and capital needed | 9/20 |
| Transaction feasibility | 6/10 |
| Independent alternatives | 2/10 |

**Total Score: 39/100** (Pass)

### Decisive diligence question

Can Graphide’s tuning deliver repeatable production savings large enough to support a strategic sale at roughly $88.3 million in enterprise value under the illustrative terms? A paid production test across multiple repositories on standard runners would measure fully loaded cost per job and runtime against native runners. Move to Reach out if those results support a buyer-specific price range that clears the holder’s hurdle after comparing acquisition with building or licensing.
