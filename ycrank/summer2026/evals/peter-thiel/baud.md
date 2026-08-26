# Baud -- Peter Thiel Evaluation

Baud’s contested truth is precise: neural networks do not need multiplication in either the forward or backward pass, and eliminating it can make training and inference radically faster. The falsifier is equally precise: fabricated silicon fails to deliver a large performance-per-watt advantage on production-quality models without degrading accuracy. The 1,000-plus-token-per-second FPGA result makes this more than an AI-chip slogan, but it covers small-model inference, not the harder claim spanning training, model quality, and economics.

The bull case is formidable. Baud has implemented the idea across the representation, PyTorch compiler, distributed-training stack, and purpose-built ASIC, then validated the design for GlobalFoundries’ 12nm process. Sarang Zambare brings deployed ML experience from more than 100,000 Peloton devices and Caper; Eric Taylor brings four tape-outs and more than a decade of ASIC work. If their arithmetic survives silicon, using a mature process to outperform enormous H100 clusters would be a genuine zero-to-one result rather than another accelerator architecture.

But a technical secret is not yet a monopoly. Cerebras, Groq, Etched, and d-Matrix have raised from $450 million to several billion dollars; Etched reports working silicon and more than $1 billion in contracts. Baud names no bounded initial market beyond “frontier-model developers,” discloses no exclusive data or dominant workload, and admits that models may require retraining in its representation while conversions are bit-exact only “in most cases.” Its compiler and model format might create switching costs, but prospective complexity is not present ownership.

The founding structure is plausible but unproved. Both founders appear to be doing the essential software and hardware work in-house, and their skills fit unusually well. Yet the dossier supplies no prior working history, ownership, compensation, or explicit full-time status, while the unexplained continuity from Cerelyze and SuperCraft prevents me from knowing whether Baud is a long-organized life project or a recent pivot into the fashionable center of AI. Missing evidence is not refutation, but it cannot establish Thiel’s Law in the company’s favor.

Baud fits the recent movement toward the complete AI production stack, but it also activates the hard-technology coordination red flag. The arithmetic, compiler, model migration, tape-out, cluster financing, and customer channel must all work. FPGA service and 12nm validation reduce this stack meaningfully; they do not collapse it. The strongest counterargument is that design partners can validate models before silicon and reserve capacity afterward, converting technical proof directly into demand. Yet no partner is named, no contract or price is disclosed, and the supposed revenue engine—selling training and inference capacity—remains inferred rather than demonstrated.

The OpenAI exception does not yet apply. The shared mechanism would be a technical event important enough to override uncertain monopoly durability; the material difference is that Baud has a company-reported small-model FPGA result, not independently validated production performance. I would investigate, not invest today. One event flips the decision: a named customer pays to train a production model on Baud’s fabricated chip and publishes an independently reproduced advantage of at least 10× in performance per watt over an H100-class system without material accuracy loss. Until then, this is a real secret awaiting its decisive experiment, attached to an unproved business.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier States a Falsifiable Secret Named Peers Reject | 23/30 |
| Narrow Beachhead Already Exhibits One Monopoly Mechanism | 11/24 |
| All Core Founders Are Full-Time, Long-Aligned, and Economically Exposed | 10/18 |
| One Revenue Engine Can Plausibly Return the Fund | 5/16 |
| Named Distribution Route Fits Customer Economics | 6/12 |
| **Total** | **55/100** |

**Total Score: 55/100** (Neutral)
