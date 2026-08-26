# Moving Atoms -- Elad Gil Evaluation

The market map is straightforward: better video and action models now let robotics teams generate synthetic rollouts, and Moving Atoms becomes large only if those rollouts predict costly physical failures well enough to replace a meaningful share of real-world policy testing. That correlation—not the size of the physical-AI market—is the controlling variable. The dossier offers no threshold for it and no deployed-robot validation.

Atom Harness’s 56.6 Physics-IQ Verified score across 198 cases is technical proof adjacent to that variable, not proof of it. The submission ranked second overall, used one run, showed rotation and reflection errors, and prompted a maintainer to ask whether the entry was a model or a composite harness. More importantly, Physics-IQ measures generated-video prediction rather than whether Atom 1 correctly ranks robot checkpoints or anticipates physical failures. Moving Atoms has demonstrated a capable evaluation artifact, but not the causal link on which the market depends.

The workflow is more interesting than a generic world-model demo. Customers provide a policy checkpoint or inference endpoint and example episodes; Moving Atoms generates conditions, runs evaluations, and returns graded failure modes across Atom 1, Cosmos 3, and classical simulators. Stronger models could improve this system rather than erase it if the company owns evaluation state, integrations, failure labels, and responsibility for the result. Today, however, the benchmark implementation depends on BytePlus Seedance 2.5 and Claude Opus 5, while no proprietary dataset, durable integration, or retention loop is documented. The prior shift from hosted MolmoAct2 access to Atom 1 reinforces the red-flag interpretation that the product boundary is still being discovered.

The technology discontinuity is real but its economics remain unproven. Gemini Robotics and Cosmos-Predict2.5 make generated evaluation more feasible, while physical AI is estimated at $81.64 billion and robotics simulation at $6.88 billion. Those figures do not show that robot developers will redirect budget from physical testing or incumbent simulators. Moving Atoms has not quantified cost per checkpoint, evaluation latency, agreement with physical rollouts, or gross margin. Meanwhile, NVIDIA, Google, Skild AI, Physical Intelligence, Genesis AI, and World Labs have the models, capital, or distribution to absorb overlapping functionality.

The strongest bull case is that a two-person team reached a credible public benchmark quickly, assembled multiple model layers into a usable harness, attracted 41,000 launch-post views, and is onboarding a limited design-partner cohort. Ahmad Saroya leaving Oxford in his second year is real commitment, and Shehryar Saroya’s TikTok video-model work is relevant technical experience. This resembles the unstated pattern of entering multiple layers of a discontinuity before the category crystallizes. The frontier-team exception still does not clear the investment gate: the public evidence shows integration of external frontier models, not scarce underlying world-model research, and there is neither customer pull nor a credible capital path for competing directly with billion-dollar laboratories.

I pass today. My 36-month base case is that Moving Atoms either pivots toward general video-model evaluation or remains a services-heavy robotics testing tool, because its strongest evidence is harness construction while its weakest is customer pull tied to robot outcomes. One result would flip me: a blinded study across at least three named, paying robotics developers showing that Atom’s grades predict physical policy failures with at least 80% precision while reducing evaluation time or cost by 10×. That would validate the controlling variable, establish product-market pull, and turn the harness into a distribution channel for training and deployment products.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Identifies the One Variable That Makes This Market Work | 12/32 |
| Technology Shift Expands Market Margins, Scale, or Adoption | 9/24 |
| Users Demonstrate Product-Market Pull Before the Story Is Polished | 4/18 |
| Core Technology Improvement Deepens an Owned Workflow | 9/16 |
| Founder Biography Shows Desperation or Second-Time Learning | 6/10 |
| **Total** | **40/100** |

**Total Score: 40/100** (Pass)
