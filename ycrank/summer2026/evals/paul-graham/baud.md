# Baud -- Paul Graham Evaluation

The useful fact is that Baud did not wait for finished silicon. Physical validation and tape-out are the obvious blockers in a chip company, so the founders built an FPGA-emulation cluster, a PyTorch compiler, and a distributed-training stack that customers can test beforehand. One FPGA reportedly exceeds 1,000 tokens per second on small-model inference. That is a real workaround with an observable result, though the dossier does not say what broke first, how quickly they responded, or whether the cluster changed a customer’s behavior. It shows resourcefulness, but not yet relentlessly resourceful founders under a dated constraint.

The technical proof is stronger. Sarang Zambare has deployed ML across more than 100,000 Peloton devices, while Eric Taylor has completed four tape-outs after working at NVIDIA, NXP, Arteris, and Enfabrica. Together they have built more than an architecture diagram: multiplier-free forward and backward passes, model-conversion tooling, FPGA execution, and GlobalFoundries 12nm process validation. This matches my unstated preference for unusually concrete proof before a financing round. But all public performance is still self-reported FPGA evidence on an unspecified small model. The mechanism has not yet survived fabricated silicon, an independently reproduced benchmark, or a frontier-scale training run.

The strongest bull case is that this is exactly when one should invest: before the ASIC works, while the price reflects technical risk. Baud is attacking multiplication itself rather than merely rearranging conventional accelerators, and the team spans both model software and chip implementation. Bindwell is the relevant exception mechanism: numerical technical proof plus direct expertise can outweigh an otherwise alarming execution gap. The material difference is validation. Bindwell had laboratory results; Baud has no independent benchmark, completed tape-out, or disclosed design-partner outcome. Its proof is promising enough to inspect, not strong enough to substitute for missing customer pull.

The narrow well is still invisible. Baud says design partners are active and offers reserved capacity on its first cluster, but it discloses neither their number nor what they repeatedly run, pay for, or cannot accomplish elsewhere. This matters because model migration is not incidental: customers may need compatible base models, and bit-exact conversion works only “in most cases.” Meanwhile Cerebras and Groq each reported roughly $500 million of 2025 revenue, Etched reports working silicon and more than $1 billion in contracts, and several competitors have raised hundreds of millions or billions. Baud does not need to beat their fundraising. It does need one user whose behavior proves that multiplier-free computation is worth changing the model representation.

The founder-originated wedge is plausible but incomplete. Zambare has lived inside ML deployment and Taylor inside ASIC design, and semiconductor tooling, process validation, compilation, distributed execution, and capacity delivery contain plenty of work that others avoid. Yet the dossier never identifies the founders’ original collision with this problem. Nor does it establish whether the apparent move from Cerelyze’s SuperCraft to Baud was an evidence-driven change, a company transition, or merely shared corporate infrastructure. I therefore cannot award pivot credit for it.

My 36-month forecast is that Baud has working 12nm silicon by August 2029 but remains below $5 million ARR and narrows from frontier training to small-model inference, where its current FPGA proof is closest to customer value. The red flag is not youth, delegation, or startup theater; it is a technically impressive system searching for a sufficiently urgent user while substantially better-funded companies already deploy hardware. I would not write the check today. One condition flips the decision: a named design partner publicly demonstrates an end-to-end model on Baud hardware with measured cost or speed superiority over H100-class infrastructure and converts that result into paid reserved capacity.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 17/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 18/23 |
| A Named User Niche Pulls the Crude Product Back | 7/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 8/12 |
| **Total** | **56/100** |

**Total Score: 56/100** (Neutral)
