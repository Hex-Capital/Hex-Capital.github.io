# Baud -- Paul Graham Evaluation

Sarang Zambare shipped ML across 100,000+ Peloton Guide devices, yet Baud’s dossier never says he built Baud to cure a problem he personally suffered. Baud is therefore a high-schlep, low-organicity bet: unusually capable hackers have constructed an integrated compiler, representation, and chip architecture, but Baud may be a formidable solution still searching for its own wound.

**Coinbase** (2012) is the high rung for schlep blindness: Brian Armstrong accepted the compliance grind that every sensible founder avoided. Baud shares that mechanism at a more technical level. Baud must invent new arithmetic, retrain existing weights, tape out a 12 nm ASIC, and persuade model builders to adopt an incompatible representation. That is a magnificent schlep. But Coinbase already had Armstrong’s working wallet and an immediate user problem; Baud has a 50M-parameter experiment trained on 5M tokens, no production silicon, and no named design partner. Baud sits just below the high rung because the unpleasant work is real while demand remains hypothetical.

The polished AI-wrapper company from my pass example fails because its founders discovered a market instead of encountering a problem. The same failure mechanism is the largest risk in Baud. No evidence connects Zambare’s experience at Peloton or Caper to a personal need for multiplier-free frontier training—applying the absent-evidence default. Baud is not a superficial wrapper: Zambare’s four patents and Eric Taylor’s decade of ASIC work supply genuine domain proximity. But proximity is not organicity. Baud reads like something its founders know how to build, not yet something Baud’s founders had to build.

Baud’s FPGA emulator already trains and serves a 50M-parameter model at more than 1,000 tokens per second on one U200 FPGA clocked at 125 MHz. Over the next 18 months, that artifact can compound into animal evidence if Baud turns the emulator into design-partner experiments, debugs models manually, and gets the first 12 nm tape-out working. Today Baud has shipped much more than a deck, and the compiler-plus-distributed-training stack leaves real tracks. But there is no cereal-box stunt, reserved-capacity counterparty, or pre-funding revenue improvisation. Baud passes the artifact test without yet passing the full animal test.

Eric Taylor has completed four tape-outs, while Zambare was Caper’s founding ML engineer before its acquisition by Instacart. Those are hacker credentials earned by shipping, even though Baud’s founders have no public GitHub repositories or competitive-programming trail. Baud would move into the highest hacker tier if the production ASIC reproduced model quality and efficiency on a billion-parameter workload; it would fall sharply if “bit-exact in most cases” concealed broad compiler incompatibility. The existing representation, PyTorch compiler, FPGA implementation, and fabrication validation place Baud well above technical-by-credential-only founders.

**Stripe** (2010) worked partly because the Collisons were a pair whose history predated the company and whose abilities reinforced each other. Baud has the functional complement: Zambare covers model representation and compilation, while Taylor covers silicon through four prior tape-outs. Baud does not disclose how long the founders have worked together, and a hard-tech startup can be destroyed by disagreement between the model and hardware halves. Baud earns more than the neutral default for complementarity, but not the full pair signal Stripe had.

Baud’s public proof remains a 50M-parameter model rather than frontier-scale silicon. By July 2029, I expect Baud to have pivoted from general frontier-model training into licensing multiplier-free compiler and accelerator IP for edge inference, producing $1M–$5M in annual revenue rather than operating a major training cloud. Baud’s hacker strength should preserve valuable technology; Baud’s missing organic user story and forced retraining requirement should push that technology toward the narrower market Zambare already understands from Peloton.

Etched has raised $1.1B and announced more than $1B in customer contracts, while Baud requires customers to retrain existing weights and has not named a single design partner. The strongest bear case is that Baud has mistaken arithmetic novelty for a product: NVIDIA, Cerebras, Groq, or Etched can win distribution before Baud’s first chip exists, and Baud cannot finance repeated tape-outs with cleverness alone. What keeps me investing is that Baud produced an FPGA cluster, compiler, distributed stack, and 12 nm design while better-funded competitors consumed hundreds of millions or billions. Animals often look like this before the stunt becomes legible. If Baud’s tape-out slips beyond 2027 or cannot preserve model quality on a public billion-parameter workload, I would flip to Pass.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Demonstrates Animal Resourcefulness Pre-Funding | 25/35 |
| Idea Is Organic to Founders' Own Pain | 10/25 |
| Problem Sits in a Schlep Zone Mainstream Founders Avoid | 14/15 |
| Hacker Genealogy in the Founder Team | 13/15 |
| Co-founder Configuration Is a Strong Pair or Trio, Not Solo | 6/10 |
| **Total** | **68/100** |

**Total Score: 68/100** (Invest)
