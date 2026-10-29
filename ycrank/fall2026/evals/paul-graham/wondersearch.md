# Wondersearch -- Paul Graham Evaluation

Wondersearch’s founders have shipped something. What I cannot find is the incident that tells me how they behave when things stop working. Dale and Dalton previously built an AI-native operating system, moved to Polygres, secured an enterprise POC, and launched Wondersearch during YC. That is activity. But the dossier does not identify the obstacle, the workaround, or how quickly it changed the situation. I would not infer resourcefulness from the number of products, any more than I would infer obstinacy from the absence of a documented pivot story.

The strongest evidence is the search product itself. An API, CLI, SDK, and MCP interface give developers several ways to try retrieval without preparing embeddings across their corpus. The October 4 benchmark reports 80.06 nDCG@10 on SciFact for production Large. This fits a pattern I like: technical founders building a programmable primitive rather than describing one. But the relevance measurements are company-run, and they do not establish performance under customer workloads. I give meaningful credit for shipping, with a substantial discount on the claimed technical advantage.

The best argument for investing is that these twins have already worked together across several products, have relevant retrieval experience, and may have found a simpler interface to an annoying problem. Polygres’s enterprise POC suggests some ability to reach a buyer. That combination could produce a good company before its public metrics become interesting. It also deserves consideration under my exception for a working product overcoming incomplete founder evidence. But the exception needs unusually convincing proof or unmistakable pull. Wondersearch has neither yet established in this dossier. The POC belongs to Polygres; the 1,074 GitHub stars belong to pgGraph. Neither demonstrates that someone needs Wondersearch repeatedly.

Who wants this now badly enough to keep using it? The 128,943 launch-post views do not answer that. Neither does the pricing calculator’s $0.001 per query and $0.33 per GB per month: those are prices, not purchases. Pinecone already automates embedding generation, so removing that step must yield a difference developers feel in actual work. The promising wedge is less retrieval maintenance. The unresolved question is whether it removes enough work to make users switch and return. Prior PostgreSQL development puts the founders near this problem, but the dossier does not document their own collision with it or a neglected operational burden they have undertaken.

I would pass today. There is no documented dependence on a major partner, premature delegation, or waiting for permission; this is insufficient affirmative evidence, not an active founder red flag. Likewise, the product sequence does not establish an evidence-driven change of route. My flip condition is one documented customer episode: a named developer team encounters a specific retrieval blocker, the founders ship a workaround within two weeks, and that team then uses Wondersearch weekly for eight weeks. That would connect founder behavior, technical ability, and real need. Today those pieces remain separate.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 8/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 14/23 |
| A Named User Niche Pulls the Crude Product Back | 5/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 4/12 |
| **Total** | **37/100** |

**Total Score: 37/100** (Pass)
