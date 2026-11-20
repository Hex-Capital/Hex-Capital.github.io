# Plover Labs -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

Plover has a plausible AI-enabled industry path in routine enterprise code changes that would otherwise wait for an engineer to review them. The proposed workflow turns recurring agent mistakes into repository-specific merge checks, potentially allowing a narrow class of changes to ship with engineers handling exceptions. Fieldguide reported 40% higher merged PR throughput and 1.3–1.6× faster merges for Forge-authored PRs in its first production quarter, with flat rollback rates and defect severity. Those are results for the jointly built Forge workflow. Plover separately claims that PRs per engineer tripled. The seed-stage assumption is that a defined class of recurring changes can clear the checks reliably enough to free review capacity and make a previously impractical release cadence affordable. The memo leaves that threshold untested. The building-blocks path scores zero because the evidence establishes review friction within an engineering workflow, with no evidence of a scarce AI input that substitutes or added supply would be slow to relieve. (*The Idea*, *Market & Traction*, *Key Risks*)

Fieldguide uses Plover’s system to test proposed fixes against previously shipped work. Those repository-specific checks could create switching costs if a replacement had to recreate them. Ownership and portability are unknown. Fieldguide’s production rollout provides direct evidence of buyer adoption, while the five-figure monthly contracts with Fieldguide and Envoy are company-reported and renewal evidence is absent. The joint rollout and Forge’s 37 merge-ready patches on 40 retrospective tasks support execution credit, with dependable unattended delivery still open. The memo gives a price signal but leaves onboarding, check maintenance, and exception-handling costs unquantified, so scale economics stays at the default. (*Defensibility*, *Market & Traction*, *Key Risks*)

### Countercase

Forge may simply make an already viable review workflow faster. One patch passed component tests while missing a required integration, and Fieldguide retained engineer approval at merge. GitHub already offers required checks and automatic Copilot review, giving buyers a plausible way to assemble overlapping controls. The results support Watch because they show production improvement while leaving a specific release-cadence threshold testable. Evidence that the workflow only accelerates changes customers could already ship at the required cadence would zero the second path and trigger Pass. (*Market & Traction*, *Defensibility*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 0/50 |
| Industry enabled by superintelligence | 9/50 |
| Durable value capture | 8/20 |
| Customer demand | 10/15 |
| Team and execution | 7/10 |
| Scale economics | 2/5 |

**Total Score: 36/150** (Pass)

### Decisive diligence question

Can a paying customer use Plover to ship a predefined class of recurring changes without routine engineer approval at a cadence it previously could not afford? A production comparison using the same coding model and the customer’s existing merge controls would answer it. Move to Reach out if Plover enables that cadence at a lower fully loaded cost per successful merge, including fees, check maintenance, exceptions, and rework, with comparable defect and rollback outcomes.
