# Baud -- Cyan Banister Evaluation

Move the clock to 2032. If Baud is right, model builders train and serve capable systems without assembling multi-megawatt GPU cathedrals; smaller teams can run experiments now reserved for frontier labs. The dossier gives me one leak from that world—1,000-plus tokens per second on a single FPGA emulating its ASIC—but not the path connecting leak to future. It does not show which models remain accurate without multiplication, how conversion failures shrink, or why customers reorganize their infrastructure around this representation. The daydream is specific enough to investigate, not yet complete enough to underwrite.

The genuinely exciting part sits below the fashionable AI application layer. Baud controls a multiplier-free representation, ASIC architecture, PyTorch compiler, and distributed-training stack, with its first chip validated for GlobalFoundries’ 12nm process. That is not a thin interface to somebody else’s closed model. Training and inference both depend on the bottleneck Baud is attacking, and the technical system spans math, software, and silicon. Physical silicon remains scheduled rather than demonstrated, so I cannot grant full control of the constraint yet.

The current system’s rent is unusually legible: Baud estimates that one Nemotron training recipe consumes 6,144 H100s for roughly three months, draws 4.3 MW, and costs $44 million in rentals or $245 million in capex. Why must improving a model require the budget and electrical footprint of an industrial facility? Baud’s answer could return experimental freedom to model developers, but that agency remains prospective. There is no disclosed price, paid workload, or evidence that savings survive model migration and the full cluster stack.

Sarang Zambare and Eric Taylor make this much more credible than the ordinary semiconductor story. Zambare shipped ML through more than 100,000 Peloton Guide devices and helped build Caper before its Instacart acquisition; Taylor brings more than a decade of ASIC work, four tape-outs, and experience across NVIDIA, NXP, Arteris, and Enfabrica. The pairing covers both sides of the compiler-to-silicon boundary. What I cannot yet see is the first-believer act: when this multiplier-free obsession began, what they built before forming Baud, and whether Cerelyze’s SuperCraft—with 20,000-plus users and 300,000-plus designs—was technical tuition or simply the previous category.

The strongest bull case is the pre-revenue hard-tech exception: a functioning prototype, credible industrial validation, and founders capable of crossing into physical production can matter more than early revenue. Baud has the prototype and team, but its “design partners” are unnamed, its public result is FPGA emulation, and its compiler is bit-exact only “in most cases.” Meanwhile, Etched claims working silicon and more than $1 billion in contracts, while Cerebras, Groq, and d-Matrix have raised hundreds of millions or billions. This could be a magically weird mathematical escape hatch—or a technically elegant representation customers will not retrain around.

My 36-month base case is that Baud produces working silicon but remains below $3 million ARR and shifts toward licensing its representation, compiler, or accelerator IP rather than operating a scaled training-and-inference service. I am Neutral and would not write the own-money check today: the controlled enabling layer is real, but user behavior has not yet leaked out of it. One event flips me—a named design partner signing paid, multi-year capacity after independently benchmarking Baud’s fabricated ASIC on a frontier-relevant training workload.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Maps a Six-Year Future to One Present-Day Leak | 12/31 |
| Founder Biography Shows Pre-Company Obsession and First-Believer Proof | 19/24 |
| Dossier Names a Broken Rule, Its Rent, and the Agency Returned | 15/19 |
| Working Artifact Elicits Costly or Weird User Behavior | 8/15 |
| Product Sits Beneath Today’s Hype as an Enabling Layer | 10/11 |
| **Total** | **64/100** |

**Total Score: 64/100** (Neutral)
