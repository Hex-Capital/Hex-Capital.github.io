# Captain -- Paul Graham Evaluation

The first thing I notice about Captain is the category. RAG infrastructure in early 2026 is exactly what I warned about when I said the most impressive YC companies I'd seen recently were not working on AI. The RAG market has MarketsandMarkets publishing TAM projections, Vectara has raised $73.5 million, Unstructured has $68 million, Glean has $765 million. When a space has that much capital and that many analysts writing reports about it, the idea has been priced. This is not schlep blindness -- nobody is unconsciously avoiding RAG. Hundreds of teams are consciously running toward it. That's a structural problem for a two-person pre-seed company.

But I want to be fair about the origin of the idea, because that's where my evaluation starts. Edgar Babajanyan has been building production RAG pipelines for three years, including an enterprise project at Boar's Head. That's not a brainstorming-session idea. He was living inside the problem before the category had a name and a market size estimate. Lewis's prior startup addressed code generation hallucinations, so both founders were working on LLM accuracy problems before the gold rush. The organic discovery signal is real -- Edgar presumably experienced firsthand the frustration of 78% retrieval accuracy and thought "I know how to fix this." That's closer to Drew Houston forgetting his USB drive than it is to someone reading a trend report and spinning up a company. But the critical difference is that Houston's solution faced essentially no funded competition when he started Dropbox. Captain enters a battlefield.

The technical approach -- distributing retrieval across many LLMs in parallel and Map-Reducing down to a single output -- is genuinely interesting. It's the kind of architectural decision a builder with deep retrieval experience would make, not something you'd get from assembling LangChain tutorials. And achieving SOC 2 Type II certification as a two-person pre-seed company shows real discipline and enterprise seriousness. That's months of work on security controls and audit processes. It's not cereal boxes, but it signals founders who understand what enterprise buyers actually require and are willing to do the unglamorous compliance work to get there.

The bull case is this: if Edgar's three years of RAG experience have produced an architecture that genuinely delivers 95% accuracy where everyone else delivers 78%, that's a product difference enterprises will pay for. The managed API approach with 1,000+ integrations, auto-OCR, and governance controls is a real developer infrastructure play -- picks and shovels for builders, which is my sweet spot. The Odyssey proprietary dataset (companies, deals, patents, credit analysis) hints at a specific financial services wedge that could provide a defensible starting position. And falling LLM inference costs make the multi-LLM approach increasingly viable margin-wise. If they can nail one vertical and show that accuracy gap is real and reproducible, they could grow from there the way Stripe grew from developers outward.

But I keep coming back to the competitive dynamics. The accuracy claim of 78% to 95% is unverified -- no published benchmarks, no third-party validation. Enterprise buyers will demand proof, and well-funded competitors will challenge it. More importantly, the underlying components (LLMs, embeddings, vector storage) are commodities. The architecture is clever but conceptually replicable. Snowflake and Databricks are building native RAG features. When your two-person startup is racing against companies with hundreds of engineers and hundreds of millions in funding, you need either a structural advantage they can't replicate or a narrow focus they won't bother competing on. I don't see clear evidence of either yet. The absence of any public traction data -- no customers, no usage metrics, no community, no Launch HN post -- after a v2 API launch in January 2026 makes me wonder whether the product has found pull or is still searching. At this stage, even one enterprise customer name or a handful of developers building on the API would change the picture meaningfully.

These are capable founders in a real problem space, and Edgar's hands-on retrieval experience is the right background for this product. But capable founders in a crowded consensus category, without visible user pull and against massively better-funded competitors, is not a bet I'd make with my own money. The schlep here is known, not hidden. The competition is funded, not deterred. If they come back in six months with three enterprise customers and reproducible accuracy benchmarks that embarrass Vectara, I'd look again.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Organic Problem Discovery and Schlep Willingness | 14/30 |
| Relentlessly Resourceful Founders | 11/25 |
| Evidence of Wanting: Demonstrated User Pull | 4/20 |
| Technical Hacker Founders Who Build | 9/15 |
| Growth Trajectory and Default Alive Economics | 5/10 |
| **Total** | **43/100** |

**Total Score: 43/100** (Pass)
