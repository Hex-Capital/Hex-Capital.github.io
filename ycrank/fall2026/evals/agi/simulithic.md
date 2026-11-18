# Simulithic -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path B — New economies.** Simulithic could make cross-device regression testing viable on every pull request for small engineering teams that currently test only selected releases or environments. Its documented workflow maps user journeys, uses captured visitor behavior to select test environments, and compares previews with baselines. The company says coding agents are producing changes faster than teams can verify them. The new transaction would be a reliable regression check on a change the team would otherwise leave untested. The memo gives no like-for-like comparison of coverage, missed regressions, or human time spent on review, retries, and exceptions. (*The Idea*, *Market & Traction*, *Key Risks*)

One named user said he canceled Claude Max to try Simulithic, which shows trial intent. The founders report several unnamed live deployments and more than 2× weekly growth on an unspecified metric. Realized revenue and repeat paid use remain unknown. The documented QA launch and the founders’ relevant engineering and agent research experience support a seed-stage evaluation. Reliable delivery across a representative device matrix remains unproven. (*Market & Traction*, *Key Facts*, *Founders & Team*)

**Illustrative scale scenario.** Five journeys across four environments on 20 pull requests produce 400 journey-environment combinations. Assuming one credit-priced run per combination, the published rate implies $400 before retries, or $800 if preview and baseline runs are billed separately. These are scenario assumptions. Subscription prices are quoted, and the memo leaves device, inference, and support costs unknown. The credit cap can pause checks, so the buyer’s budget matters most as coverage expands. (*The Idea*, *Key Facts*, *Key Risks*)

### Countercase

The strongest countercase is that Simulithic makes existing QA easier while competitors offer equivalent coverage with the same models. BrowserStack already combines a device cloud with testing agents, and TestSprite already discovers application flows. Simulithic’s workspace journey histories could make it worth staying if they improve coverage over time, but the memo documents no such improvement and no buyer preference under functional parity. Simulator and Android coverage limits also leave some checks outside the automated workflow, reducing potential labor savings. With abundant capital, the memo identifies no scarce testing input Simulithic controls, leaving Path A unsupported. The competitive overlap leaves both Path B conditions unproven and keeps the case at Watch. The memo contains no like-for-like buyer test that defeats either condition. (*Defensibility*, *Market & Traction*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 11/25 |
| Durable value capture | 7/25 |
| Customer demand | 7/20 |
| Team and execution | 9/15 |
| Scale economics | 6/15 |

**Total Score: 40/100** (Pass)

### Decisive diligence question

Will independent engineering teams that previously skipped cross-device checks on most pull requests repeatedly pay for Simulithic after trying an equally capable alternative? A paid trial should compare both products on representative pull requests with the same device access and comparable model capability. It should show newly routine checks at equivalent regression-detection quality, lower total human time after review and exceptions, and renewals with a documented reason buyers prefer Simulithic at comparable pricing. Move to Reach out if those results establish both Path B conditions and raise the score to at least 65 with medium or high confidence. Pass if the trial shows that full delivery costs erase the savings or buyers readily switch to the equivalent alternative.
