# OneTriangle -- Paul Graham Evaluation

The fact I want is missing: what broke, what the founders did next, and how quickly that changed the situation. OneTriangle launched an AI-governance product in July 2026 and a substantially different inference product in August. That is fast movement, but the dossier does not identify the observation that killed the first route. A pivot without its cause could be good running-back behavior or merely a new fashionable noun. I cannot infer resourcefulness from MIT credentials or motion alone.

The technical artifact is much better evidence. The team built a 1,048,576-parameter cache correction that removes source rotary embeddings, maps per-head key/value tensors into another model’s attention space, and reapplies target positions. At 8,192 tokens it achieved 82.52% top-token agreement and a 1.25× end-to-end speedup including source prefill. This is a real measured result built before institutional permission. But it is not yet the unusually concrete proof spike it first appears to be: the benchmark is self-reported, open-ended generation and task accuracy were not tested, and the more dramatic 7.91× figure assumes a resident source cache. The fallback to native prefill is sensible engineering, but it also reveals how narrow the proven advantage remains.

Who wants this now? The dossier cannot name one user. Five Launch YC votes, 488 company followers, press coverage, and public token pricing are launch signals, not product pull. The $0.15-per-million input price for DeepSeek V4 Flash may be attractive, but price without production volume is an offer, not traction. Demo-led private deployments and a one-line configuration change could make adoption unusually easy; there is simply no evidence that a particular agent developer or inference buyer repeatedly uses the transferred cache rather than ordinary prefill.

The founders do have several properties I like. Chung and Venkatapathy have known one another for three years and report building together since freshman year. Venkatapathy has directly relevant LLM-optimization research, and the product is a programmable infrastructure primitive—the kind of thing developers may appropriate in ways its creators did not anticipate. Yet the dossier does not connect the idea to a problem either founder personally suffered, and model-pair maintenance, GPU operations, quality gates, and private deployments supply schlep without proving a founder-originated need. Meanwhile, upstreaming into vLLM lowers adoption friction while making imitation by Fireworks, Together AI, Baseten, and runtime contributors easier.

The case against passing is serious: a young technical team moved from one product to a working, measured inference mechanism within roughly a month, offers a live priced service, and has three years of cofounder history. That combination could be the beginning of an exceptional proof spike. It does not yet qualify for a known-exception override, however, because the result lacks independent validation and unmistakable real-world pull. The usual launch, partnership, and premature-sales-hire red flags are not fully present, but the evidence we do have is still launch-shaped rather than usage-shaped. The company matches my unstated preference for technical primitives while missing the equally important pattern of developers already using them.

I would pass today. My 36-month forecast is that cross-model cache transfer is absorbed into vLLM or a larger inference host, while OneTriangle pivots toward managed inference optimization and remains below $1 million ARR. One condition would flip me: a named production customer routing more than one billion long-context tokens per month through OneTriangle’s transferred-cache path for eight consecutive weeks, with the fallback rate and task-quality results published.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 8/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 17/23 |
| A Named User Niche Pulls the Crude Product Back | 5/18 |
| Goal Persists While the Product Route Changes on Evidence | 7/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 4/12 |
| **Total** | **41/100** |

**Total Score: 41/100** (Pass)
