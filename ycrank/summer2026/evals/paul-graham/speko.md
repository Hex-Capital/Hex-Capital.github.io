# Speko -- Paul Graham Evaluation

The first question is what broke. Beknazar Abdikamalov spent four years manually comparing voice providers, then built one API that benchmarks and routes among them. That is a real founder-originated problem, not an “AI-for-X” idea invented for an accelerator. But the dossier compresses those four years into an origin story. It does not identify a particular provider failure, what Abdikamalov shipped in response, how long it took, or how a user’s situation changed. I see resourcefulness, but not yet the unusually sharp episode that proves someone is relentlessly resourceful under pressure.

The technical artifact is more convincing. Speko benchmarks 23 speech-to-text models across nine languages, where four different models win, and combines STT, LLM, and TTS routing with pre-response failover. The team has shipped TypeScript and Python SDKs, LiveKit and Pipecat adapters, an MCP server, public benchmarks, and usage-based infrastructure. This is a working programmable primitive, not a diagram. It matches the pattern of technical founders assembling useful infrastructure before its category settles.

But a router becomes valuable through workloads, not benchmark tables. The evidence consists of early voice-agent partners and one commercial pilot, without named customers, production minutes, payment, repeat usage, or retention. Two GitHub stars on each principal SDK, 12 Launch YC votes, and 250 LinkedIn followers are nearly orthogonal to demand. Speko has demonstrated that models differ. It has not demonstrated that developers urgently want Speko to choose among them.

This distinction matters because LiveKit and OpenRouter already route across providers, while Vapi and Retell bundle model choice into broader systems. Speko charges the provider rate plus 5%, or $0.09 per managed minute, but publishes its benchmark data and declines to learn from customer audio or transcripts. The product may therefore improve the ecosystem without accumulating much advantage for the company. There is also no evidence yet of a rejected routing hypothesis or a product change caused by customer behavior. The team has shipped one coherent route; the dossier does not show whether it can change routes when the surrounding platforms absorb the feature.

The closest known exception is Dropbox: a solo founder and crowded market can be overridden by a striking working prototype. The shared mechanism is that both products remove annoying technical choices behind a simpler interface. The material difference is that Speko’s public evidence does not yet show unusually rapid correction or users pulling the crude product back. Still, the familiar red flags are mostly absent. Distribution is self-service through APIs and adapters rather than dependent on a ceremonial launch or one large partner, and Abdikamalov has worked directly in voice technology since 2019.

I would not write the check today. The technical proof clears my threshold, but the founder-action evidence narrowly misses it, and the commercial pilot does not establish a narrow well of urgent users. One result would flip me: three identifiable voice-agent companies each routing at least 100,000 production minutes per month through Speko, with one documented provider regression that Speko automatically routed around and retained the workload afterward. That would connect the artifact, the user need, and the founder’s response to resistance.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 17/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 19/23 |
| A Named User Niche Pulls the Crude Product Back | 7/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 10/12 |
| **Total** | **59/100** |

**Total Score: 59/100** (Neutral)
