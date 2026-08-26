# Induction Labs -- Elad Gil Evaluation

The market map is straightforward: abundant screen-recording video and cheaper sparse-model training may let computer-use developers replace application-specific action labeling, but Induction Labs becomes large only if this produces materially more reliable task completion at a defensible serving cost. The controlling belief is therefore falsifiable: observational-video pretraining must outperform annotated policy training on real, heterogeneous workflows—not merely on internal benchmarks.

Photon-1 provides unusually substantive pre-seed evidence for that belief. Two founders trained a 106B-A5B mixture-of-experts model on 575M frames, using a differential latent encoder with more than 100x compression and custom fused kernels. Induction Labs reports 30x less pretraining compute and 3x lower serving cost than Gemini 3.1 Flash-Lite. Those numbers describe a genuine economic step change if they survive independent testing. The weakness is that neither the benchmark advantage nor the cost comparison has been externally validated, and the dossier gives no task-success threshold at which developers would switch.

This is a crystallizing, heavily financed market. H Company already offers APIs and open-weight models, including a reported 78.85% OSWorld-Verified score; Adept, Adaption Labs, and World Labs have collectively raised substantial capital around adjacent approaches. Induction Labs therefore cannot win merely by possessing a clever architecture. Its indexed 2B videos, filtered corpus of roughly 2M screen recordings, and training infrastructure raise reproduction cost, but a well-funded competitor could plausibly recreate the corpus. The stronger moat would be a feedback loop from deployed agents producing proprietary action and failure data. No such loop exists yet.

The sharpest bull case is the frontier-research exception: a two-person team with directly relevant reinforcement-learning experience has already produced a model and systems stack that would normally require far more capital. That resembles the mechanism behind **Anthropic**—scarce technical capability justified investment before commercial pull—but the material difference is validation. Induction Labs has no independently verified frontier result, field-defining research team, customer adoption, or credible capital path for competing against organizations with hundreds of millions of dollars. The exception is possible, not yet earned.

There is also no owned workflow. Photon-1 translates predicted states into actions through instruction tuning and online reinforcement learning, but the proposed API or licensing business is inferred. Induction Labs currently owns no customer permissions, integrations, operational state, or responsibility for completed work. Better foundation models could improve its action layer, yet H Company’s deployable substitutes show how easily value may accrue to an application or distribution layer instead. The 80K announcement views and several hundred social followers establish research attention, not product-market pull.

Jonathan Li’s Cohere work on reasoning and RL infrastructure and his first-author ACL 2023 paper establish strong technical fit; David Li adds software and ML experience. They do not establish the specific founder signal I weight here: prior startup learning, costly commitment, or demonstrated desperation. I would monitor rather than invest today. The single flip condition is verifiable: within six months, publish an independently reproducible OSWorld-Verified result that beats Holo3 while demonstrating at least a 2x serving-cost advantage and secure three external agent developers using Photon repeatedly in production.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Identifies the One Variable That Makes This Market Work | 23/32 |
| Technology Shift Expands Market Margins, Scale, or Adoption | 20/24 |
| Users Demonstrate Product-Market Pull Before the Story Is Polished | 4/18 |
| Core Technology Improvement Deepens an Owned Workflow | 5/16 |
| Founder Biography Shows Desperation or Second-Time Learning | 3/10 |
| **Total** | **55/100** |

**Total Score: 55/100** (Neutral)
