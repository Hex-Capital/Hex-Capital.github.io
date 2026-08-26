# Baud -- Naval Ravikant Evaluation

The founders have acquired the relevant knowledge through costly action. Sarang Zambare shipped machine learning across more than 100,000 Peloton Guide devices and built at Caper before its acquisition. Eric Taylor has spent over a decade designing ASICs, completed four tape-outs, and worked at NVIDIA, NXP, Arteris IP, and Enfabrica. The team combines the model layer with the silicon layer. That is unusually exact founder-market fit for a three-person pre-seed company.

Baud is not another interface over a commodity model. It changes the arithmetic representation, removes multiplications from forward and backward passes, compiles PyTorch-exportable models, and maps the result to a purpose-built ASIC. The compiler, distributed-training stack, FPGA cluster, and GlobalFoundries 12nm validation are dated technical artifacts rather than a diagram. If a competitor copies the software, it still has to reproduce the representation, hardware architecture, toolchain, and deployment knowledge. The moat is physical and cumulative, although not yet structural.

The strongest objection is that Baud still requires three victories at once. Its model representation must preserve quality, the compiler must convert more than “most cases,” and fabricated silicon must reproduce an FPGA result that currently covers small-model inference rather than frontier training. Meanwhile, Etched has working silicon and more than $1 billion in signed contracts, Groq serves over five million developers, and competing accelerator companies have raised hundreds of millions or billions. A clever arithmetic result can become an expensive science project before it becomes infrastructure.

The counterweight is that Baud can test the central premise before manufacturing at scale. Its live FPGA-emulation cluster reportedly delivers more than 1,000 tokens per second, supports both training and inference, and is already being offered to design partners in exchange for reserved capacity. That does not validate the ASIC, but it shortens the feedback loop between model mathematics, compiler behavior, and customer workloads. The team is attacking the riskiest assumptions in the right order.

The wedge also has room to maneuver. Frontier-model developers are the initial buyer, but the same multiplier-free stack could address training and inference across an accelerator market reported at $25.6 billion in 2024 and forecast to reach $256.8 billion by 2033. The weakness is distribution: customers do not yet create utility or acquisition for one another. Every deployment presently appears to require Baud’s capital, engineering, and capacity. This is leveraged by hardware, not yet by a network.

There is no disclosed revenue, price, partner count, or completed capacity transaction, so I assign no imagined monetization credit. I also see no evidence of unfair dealing, artificial deadlines, reassurance-seeking, or other founder red flags, but public silence does not prove integrity. The company fits the recent infrastructure pattern directly; it does not require a known-exception override. I would make an option-sized investment. I flip to Pass if first silicon cannot independently demonstrate end-to-end training at matched model quality and superior cost-performance to an H100 within twelve months of tape-out.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Has Shipped or Sold Into the Exact Problem | 28/31 |
| Advantage Survives a Competitor Copying the Code | 20/24 |
| Initial Wedge Names a Large Adjacent Market | 16/19 |
| Users Create Value or Distribution for Other Users | 2/15 |
| Pricing or Transactions Prove Direct Value Capture | 3/11 |
| **Total** | **69/100** |

**Total Score: 69/100** (Invest)
