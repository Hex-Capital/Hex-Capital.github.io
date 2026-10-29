# Hopper -- Paul Graham Evaluation

Hopper’s most useful evidence is a small piece of engineering. Connection overhead was getting in the way of fast voice agents, so the team published a client that reuses HTTP/2 connections ([June engineering article](https://withhopper.com/blog/llm-client-voice-agents)). This is the right kind of response: find something slow and fix it. But the account does not establish how quickly the founders went from discovering the blocker to shipping the workaround, or measure the resulting customer improvement. It earns meaningful resourcefulness credit without yet proving exceptional resourcefulness.

The product evidence is stronger. Hopper has documented serving interfaces, and its provider integration was merged into Dograh on October 1 ([integration](https://github.com/dograh-hq/dograh/pull/831)). That gives an outside developer a concrete way to use what the founders built. The claimed 80ms time to first token and 150ms time to first audio are promising, but remain company-reported measurements with uncertain behavior under production concurrency ([launch](https://www.ycombinator.com/launches/WUF-hopper-fast-open-source-inference-for-real-time-agents)). Katta’s post-training work at Salient and Pedapudi’s inference-kernel work at Meta make the technical direction credible. Their reported thirteen-year relationship also removes the concern that the cofounders assembled themselves for an application. Neither fact substitutes for a demonstrated response to resistance.

Who needs this badly enough to keep using it? Voice-agent developers are a specific niche, and latency interrupts the thing their product is supposed to accomplish: conversation. But a merged integration establishes availability, not repeated use. Hopper’s $0.30-per-million input-token price and prepaid credits establish an offer, not revenue ([website](https://withhopper.com); [terms](https://withhopper.com/terms)). The distinction matters because Fireworks already combines specialization with serving. A developer can try Hopper cheaply; the consequential question is what makes that developer stay. The dossier supplies no answer yet, so demand receives the missing-evidence default.

The strongest case for investing now is that these founders could discover that answer through customer work. Building evaluations and tuning models on authorized calls puts them close to the failures generic infrastructure misses. This fits my recurring preference for programmable tools built by technical founders. But the stronger version of that pattern includes developers already appropriating the tool for real work. Hopper has not shown that behavior. Nor does the working-product exception settle the decision: an integration and self-reported latency do not supply overwhelming proof that replaces the incomplete founder evidence. There is no documented dependence on a large partner, premature delegation, or refusal to change direction. Equally, there is no documented evidence-driven route change, or clear account of the founders personally encountering the problem that became Hopper. Those remain unknowns, not red flags.

I would hold off on a check. Hopper looks like a technically credible product whose customer learning has not yet become visible. My one flip condition is a verifiable customer episode: a voice-agent developer encounters a specific production blocker, the founders ship a workaround within two weeks, and that developer subsequently uses Hopper for paid production traffic for four consecutive weeks. That would connect the engineering to both founder behavior and actual need—the connection this dossier leaves open.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 17/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 15/23 |
| A Named User Niche Pulls the Crude Product Back | 5/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 4/12 |
| **Total** | **47/100** |

**Total Score: 47/100** (Neutral)
