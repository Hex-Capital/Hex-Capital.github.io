# 0.security -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path B — New Economies.** The strongest case is that 0.security could make continuous security remediation economical for restricted-infrastructure teams that can afford periodic audits but lack the engineering time to investigate, patch, and verify findings on each code change. The memo documents a self-serve 0cloud launch and published examples of upstream fixes. The company says it offers air-gapped deployment with customer-selected models and proposes tested patches for human approval. The launch shows execution progress, and the patch examples support technical feasibility. The memo leaves the labor savings and the adoption of a new remediation cadence unmeasured. (The Idea, Defensibility, Market & Traction, Key Risks)

A Spotify engineer reports scanning almost 30,000 files in under a minute, a concrete signal of product use. The founders report an EY partnership and work with the Swiss Federal Department of Defence, with budget, deployment scope, and repeat use unspecified. Under the thesis scenario of cheap, equivalent models, a restricted buyer might still pay 0.security to deploy and manage remediation inside its own environment. The memo contains no buyer comparison that establishes that preference. (Market & Traction, The Idea, Key Facts)

The full-cost comparison is periodic audits plus internal investigation, patching, and verification versus continuous testing plus human review, retries, exceptions, regression checks, and deployment overhead. The reported $5 hosted price is per pull-request test. Expansion economics depend on how many tests produce a verified, merged fix and how much compute and support 0.security incurs to deliver it. The memo provides neither measured inputs for that calculation nor realized enterprise pricing. (The Idea, Key Risks, Key Facts)

### Countercase

0.security could improve an existing application-security workflow while leaving its buyers and cadence largely unchanged. GitHub already offers native pull-request fixes, Semgrep offers AI-assisted remediation, and customers can run 0.security’s open-source software themselves. If human review and failed patches consume most of the labor savings, continuous remediation may still be uneconomical for the target buyer. If an equivalent substitute meets the same isolation and operating requirements, the buyer may have little reason to pay 0.security. The memo shows competitive overlap, while buyer switching and full remediation costs remain untested. Both Path B gates remain open, which supports Watch with Low confidence. (The Idea, Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 11/25 |
| Durable value capture | 8/25 |
| Customer demand | 8/20 |
| Team and execution | 10/15 |
| Scale economics | 5/15 |

**Total Score: 42/100** (Pass)

### Decisive diligence question

Will an independent restricted-infrastructure buyer that previously relied on periodic audits pay to renew continuous remediation after comparing 0.security with its prior workflow and an equivalent-model alternative that meets the same isolation requirements? A paid renewal backed by lower full cost per verified, merged fix, sustained per-change coverage, and a documented preference for 0.security’s managed deployment would move the action to Reach out. A representative trial showing that review and exceptions erase the savings or that the buyer switches to an equivalent substitute would close this path and move the action to Pass.
