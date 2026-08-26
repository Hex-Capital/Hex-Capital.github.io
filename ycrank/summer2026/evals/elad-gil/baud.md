# Baud -- Elad Gil Evaluation

The market map is straightforward: frontier-model compute has become a multi-megawatt, tens-of-millions-of-dollars constraint; model developers will adopt a new architecture if it preserves model quality while producing a step-function improvement in training economics; the controlling variable is delivered price-performance per watt after migration costs. Baud has not yet measured that variable. The 1,000+ tokens-per-second FPGA result establishes technical reality, but without an accuracy baseline, workload comparison, power figure, or conversion-failure rate, it does not establish economically superior compute.

The underlying idea is nevertheless substantive. Eliminating multiplications from both forward and backward passes changes model mathematics rather than rearranging a conventional accelerator. Baud has connected that representation to a purpose-built ASIC, PyTorch compiler, distributed-training stack, and GlobalFoundries 12nm process validation. This is not a software-aware commodity chip. If stronger models can be trained inside Baud’s representation, improvements in AI demand should deepen the company’s toolchain and capacity business rather than absorb its feature.

The bear case is that the technical discontinuity never becomes a market discontinuity. Models must either be trained in Baud’s representation or converted, and conversions are bit-exact only “in most cases.” A modest quality penalty or retraining burden could erase the hardware advantage. Meanwhile, Cerebras and Groq each reported $500M-plus of 2025 revenue, Etched has working silicon and more than $1B in signed contracts, and d-Matrix has deployment partners. These competitors have collectively raised billions while Baud’s public proof remains FPGA emulation. In a crystallizing accelerator market, a differentiated arithmetic primitive is insufficient unless it produces a sharply better customer outcome.

Design partners using a live FPGA-emulation cluster provide more information than a waitlist, but the dossier gives no partner count, repeat workload, reservation value, or revenue. Reserved capacity could become an effective proof-to-distribution loop: early users adapt models and workloads, Baud converts the learning into compiler improvements, and successful tests turn into cluster consumption. Today that is a plausible mechanism, not demonstrated product-market pull. The prior SuperCraft figures—20,000 users and 300,000 designs—cannot be credited to Baud without evidence that customers, technology, or distribution transferred.

The team is unusually credible for this technical risk. Sarang Zambare shipped ML across more than 100,000 Peloton devices and was a founding ML engineer at Caper before its acquisition; Eric Taylor brings more than a decade of ASIC work and four tape-outs across NVIDIA, NXP, Arteris IP, and Enfabrica. That combination materially reduces software-hardware integration and tape-out risk. It does not demonstrate founder desperation, and it cannot override missing silicon economics, but prior acquisition experience and repeated physical deployment justify above-default founder credit.

I would monitor rather than invest today. The strongest bull case is a rare cross-layer team entering an enormous compute market with a working compiler, emulation service, process-validated design, and an architectural change that well-funded competitors have not pursued. The problem is capital sequencing: Baud is proposing a capital-intensive market-ending move before proving the variable that makes it financeable. My verifiable flip condition is fabricated silicon running a representative training workload at comparable model quality with at least a 3× improvement in price-performance per watt, followed by paid reserved capacity from two design partners. That would convert Baud from an interesting architecture into an investable market thesis.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Identifies the One Variable That Makes This Market Work | 17/32 |
| Technology Shift Expands Market Margins, Scale, or Adoption | 15/24 |
| Users Demonstrate Product-Market Pull Before the Story Is Polished | 6/18 |
| Core Technology Improvement Deepens an Owned Workflow | 13/16 |
| Founder Biography Shows Desperation or Second-Time Learning | 6/10 |
| **Total** | **57/100** |

**Total Score: 57/100** (Neutral)
