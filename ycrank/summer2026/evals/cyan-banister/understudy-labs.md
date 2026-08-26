# Understudy Labs -- Cyan Banister Evaluation

Move the clock to 2032. Production AI systems no longer send every task to the smartest general model; they continuously distill repetitive work into cheaper, customer-controlled models and escalate only the strange cases. Understudy Labs has a plausible leak from that future: traces become evals, evals gate task-specific training, and fallback routing protects production quality. The leak is real enough to benchmark across four reasoning tasks and seven CRM-action tasks, but not yet vivid enough to prove the transition. The dossier does not show a customer repeatedly promoting models or moving meaningful production traffic.

The founders understand the machinery unusually well. Aamir Poonawalla spent roughly ten years building Instacart’s ads-serving, auction, ML, and experimentation infrastructure and previously founded a YC company. Luis Manrique worked across Google advertising ML, Instacart, and Gumloop, where he closed approximately $2 million in the company’s first year. They met inside the optimization systems that now inform the product. That is strong Rizz–Tizz–Biz evidence, although the biography shows professional accumulation more clearly than a dated, independent obsession with open-model replacement.

The broken rule is dependency: customers generate the traces and pay the inference bills, yet closed providers control the model and its economics. Understudy returns deployment ownership and offers a local-first MIT toolkit. That is meaningful agency. But the rent remains impressionistic. There is no disclosed baseline bill, savings percentage, migration time, or production workload showing that the system removes a painful tax rather than adding another ModelOps vendor to the stack.

The bear case stings because the three best-capitalized competitors already occupy adjacent layers: Fireworks reports $1 billion in annualized revenue, while Together AI and Baseten have raised $1.3 billion and $2.085 billion. Understudy’s generic adapters did not transfer cleanly across benchmark slices, and its prospective moat cannot include cross-customer payload training. Twelve GitHub stars, five forks, and an unnamed small group of design partners do not yet reveal costly or weird behavior. The company could become an excellent engineer-assisted migration service while its hosts absorb routing, evals, and small-model substitution into their platforms.

The opposing case is that those constraints are exactly why a neutral control plane might matter. The team has built the complete loop—local capture, held-out promotion gates, customer-owned deployment, and fallback routing—rather than another dashboard. Payload-free gateway defaults and the prohibition on cross-customer training also answer my privacy gate thoughtfully. If Understudy can accumulate useful operational metadata without taking custody of customer payloads, it may become infrastructure beneath the open-weight wave rather than a thin wrapper around it.

I am neutral today. The future chain and founder competence are credible, but the controlled bottleneck and behavioral proof are not. My verifiable flip condition is three named customers each moving at least half of a recurring production workload to Understudy-trained models, renewing after six months, and documenting at least 40% inference-cost reduction without a material quality decline. That would turn this from a clever optimization loop into an artifact of the future arriving early.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Maps a Six-Year Future to One Present-Day Leak | 16/31 |
| Founder Biography Shows Pre-Company Obsession and First-Believer Proof | 18/24 |
| Dossier Names a Broken Rule, Its Rent, and the Agency Returned | 12/19 |
| Working Artifact Elicits Costly or Weird User Behavior | 8/15 |
| Product Sits Beneath Today?s Hype as an Enabling Layer | 5/11 |
| **Total** | **59/100** |

**Total Score: 59/100** (Neutral)
