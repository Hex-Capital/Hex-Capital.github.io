# Hopper -- Elad Gil Evaluation

Open speech models give voice-agent developers another supplier choice; Hopper becomes a large company if it can turn that choice into a sustained reduction in **cost per successfully completed call**, at acceptable conversational latency. That is the controlling variable. Cheap tokens alone will not move a production workload if task completion deteriorates. The dossier identifies the relevant bottlenecks and a plausible mechanism—post-training plus optimized serving—but does not establish the quality, latency, and cost threshold at which customers switch.

The technical claims make this worth examining. Hopper reports 80ms time to first token for Gemma 4 and 150ms time to first audio for Qwen 3 TTS, alongside $0.30 per million input tokens for Gemma 4 31B. These are concrete product specifications, although company-reported component measurements do not establish end-to-end performance under concurrency. Input-token pricing also leaves output costs, GPU utilization, and Hopper’s gross margin unresolved. The 2026 open-model wave could expand adoption substantially; the evidence supports a technical opening more strongly than an economic step change.

The strongest bull case is that Hopper becomes the optimization layer customers need as models proliferate. Its proposed loop—build customer evaluations, tune on authorized calls, serve against live traffic—could make each model improvement increase the product’s value. The reusable HTTP/2 client and [Dograh integration merged October 1, 2026](https://github.com/dograh-hq/dograh/pull/831) show implementation beyond a benchmark page. But the integration demonstrates availability, not repeat production usage. Neither follower counts nor prepaid billing establish demand. Customer-specific evaluations could create persistent workflow state; the dossier does not yet demonstrate that customers have entrusted that loop to Hopper.

Market structure makes this distinction decisive. Fireworks already combines specialization with inference and reports more than $1 billion in annualized revenue; Deepgram and Cartesia also control substantial parts of the speech stack. Hopper’s OpenAI-compatible interface helps acquisition while limiting interface-level switching costs. Its privacy policy requires separate training consent, so production traffic does not automatically accumulate into a shared data advantage. My pattern of investing across a technology discontinuity supports looking closely at this infrastructure layer, but a category with established suppliers requires a sharper explanation of where a new entrant retains value.

Katta’s Salient post-training experience and Pedapudi’s Meta inference-kernel work make the proposed optimization credible. Their backgrounds do not establish prior startup learning or costly personal commitment, so I leave that dimension at its missing-evidence default. The rare-team exception does not bridge the investment gap: the dossier documents relevant engineering experience, rather than frontier research that independently justifies financing before customer pull. I would pass on writing a personal check today. One verifiable flip condition would be a customer-validated, 90-day production comparison showing **at least 30% lower fully loaded cost per successful call**, with task completion and p95 conversational latency maintained, followed by that customer expanding paid traffic. That would connect Hopper’s technical opening to an economic reason to buy.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Identifies the One Variable That Makes This Market Work | 14/32 |
| Technology Shift Expands Market Margins, Scale, or Adoption | 13/24 |
| Users Demonstrate Product-Market Pull Before the Story Is Polished | 4/18 |
| Core Technology Improvement Deepens an Owned Workflow | 8/16 |
| Founder Biography Shows Desperation or Second-Time Learning | 3/10 |
| **Total** | **42/100** |

**Total Score: 42/100** (Pass)
