# Plover Labs -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

Path B, New economies, is the strongest path. Plover turns recurring coding-agent failures into repository-specific merge checks. The seed-stage investment case is that these checks could make routine patches viable when engineering teams currently defer them because review costs too much. Fieldguide reported 40% higher total merged PR throughput in Forge’s first production quarter and 1.3–1.6× faster merges for Forge-authored PRs, with flat rollback rates and defect severity. Plover separately claims Fieldguide tripled PRs per engineer. The figures use different measures, and neither isolates Plover’s contribution or measures end-to-end human labor. (The Idea, Market & Traction)

Plover reports five-figure monthly contracts with Envoy and Fieldguide. Fieldguide’s production use corroborates adoption at one enterprise. Payment by buyers for previously uneconomic work remains unproven. The founders’ applied agent research and developer-tool experience, together with the Fieldguide integration, support seed-stage execution. The San Francisco-based Fall 2026 YC company plausibly fits the seed mandate. (Key Facts, Market & Traction, Founders & Team)

**Scenario assumption:** Teams have a recurring backlog of low-risk patches they defer because of review cost. The economics depend on human time per successfully merged patch, including review, retries, exception handling, and regression maintenance. Expansion then depends on how much paid patch volume each new repository adds relative to the cost of onboarding and maintaining it. Fieldguide co-built its deployment, and the memo leaves those incremental costs and repeatability unmeasured. (Key Risks)

### Countercase

Forge may make an existing workflow faster while engineer approval remains necessary. A patch passed component tests yet missed a required integration. Fieldguide added a regression case and retained engineer approval at merge. Under model parity, Plover’s strongest potential advantage is its accumulated repository-specific regression coverage. That advantage depends on what buyers would lose by switching. Ownership and portability are undisclosed, and GitHub already offers required checks and automated review that cover parts of the workflow. The evidence leaves both Path B gates unresolved. The integration failure limits the claim for unattended merging, while a bounded class of deferred patches remains testable. Path A has no independently supported case for Plover’s control of a scarce bottleneck. (Key Risks, Defensibility)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 12/25 |
| Durable value capture | 8/25 |
| Customer demand | 12/20 |
| Team and execution | 10/15 |
| Scale economics | 6/15 |

**Total Score: 48/100** (Neutral)

### Decisive diligence question

Will an enterprise repeatedly pay a viable price to use Plover for a class of patches it previously deferred when a competing workflow has access to the same frontier model and can match its merge controls? A paid side-by-side trial should track total human minutes and delivery cost per successful merge, including retries, exceptions, and check maintenance, at equivalent quality. Repeat purchase of Plover with materially lower delivery labor would support **Reach out** if the updated score clears 65 with at least medium confidence. If review costs still make the patches uneconomic or the buyer switches under parity, move to **Pass**.
