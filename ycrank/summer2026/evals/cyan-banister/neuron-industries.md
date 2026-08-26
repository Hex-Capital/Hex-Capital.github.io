# Neuron Industries -- Cyan Banister Evaluation

Move the clock to 2032. New chemical plants, modular reactors, and drone factories will not hire an army of aging controls engineers to stitch together PLCs, HMIs, historians, and vendor IDEs by hand. Their control logic will be specified as requirements, challenged for ambiguity, tested against timing constraints, and deployed onto a unified controller. Neuron Industries has a credible leak from that world: two live hard-tech pilots and reported deployments spanning chemical processing, electronics manufacturing, wastewater treatment, and small modular reactors. What remains unproven is whether this is the beginning of a platform transition or merely a better tool for greenfield projects.

The present system has a wonderfully irritating economic shape. A controller with 5 MB of memory can cost $5,000, projects consume weeks or months, and customers remain attached to proprietary software and runtime licenses. Cortex attacks the whole bundle for $2,950 or $6,450 with Synapse included and no runtime charge. The important transfer is not “AI makes programming faster.” Machine builders regain control of their code, operating data, and deployment schedule. Targeting modular and forward-deployed factories before Siemens or Rockwell becomes embedded is the right wedge because it avoids asking an operating plant to perform heart surgery for a nicer IDE.

Dennis Ren has paid meaningful operating tuition: industrial test systems at Tesla, embedded hardware at Amazon Go, Vision Pro eye-tracking hardware, and production systems as Freeform’s founding electrical engineer. Kenneth Rhee adds large-scale software experience and a prior bootstrapped exit. That is strong founder-market fit, but it is not yet the full first-believer story. I do not see dated pre-company controller experiments, public technical artifacts, or evidence explaining how these two recruited one another around this problem. CEO and CTO roles are clear, although the absence of co-founder-history and governance information leaves my accountable-leader gate open rather than satisfied.

The pilots matter because deploying a controller in wastewater treatment or chemical processing risks equipment, schedules, and reputation; this is costlier behavior than joining a waitlist. But the evidence stops just before the interesting part. Neuron does not disclose whether the same customer has run Cortex repeatedly, paid for it, expanded to another line, or allowed Synapse-generated code to operate production equipment without continuous founder supervision. I therefore treat the working artifact as real but cap the behavioral proof at the persona rubric’s founder-reported limit.

The sharp bear case is common-mode failure disguised as verification. Synapse generates both the control program and its test specifications, so one misunderstood requirement can pass a test that shares the same misunderstanding. Cortex is still pursuing UL and CE targets, only the larger controller targets SIL 1, and published specifications remain subject to change. Meanwhile OTee, PLCs.ai, and Interkey cover adjacent pieces of software-defined control, AI-assisted programming, and integrated hardware, while Siemens and Rockwell own installed code and switching costs. With no disclosed proprietary dataset, compatibility asset, or certification advantage, Neuron could become a technically impressive controller vendor trapped between startups that iterate faster and incumbents customers already trust.

I would still invest, but not because “AI for factories” is fashionable. The company sits underneath the visible automation wave, removes a specific vendor rent, has unusually relevant builders, and has placed working hardware inside several demanding environments. My conviction is bounded: the verifiable flip condition is one pilot completing a paid production deployment with an independently authored safety test suite, followed by expansion to a second machine or line. Failure to produce that evidence would tell me the pilots are engineering demonstrations rather than the first strange artifacts of a new industrial stack.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Maps a Six-Year Future to One Present-Day Leak | 19/31 |
| Founder Biography Shows Pre-Company Obsession and First-Believer Proof | 18/24 |
| Dossier Names a Broken Rule, Its Rent, and the Agency Returned | 16/19 |
| Working Artifact Elicits Costly or Weird User Behavior | 8/15 |
| Product Sits Beneath Today?s Hype as an Enabling Layer | 9/11 |
| **Total** | **70/100** |

**Total Score: 70/100** (Invest)
