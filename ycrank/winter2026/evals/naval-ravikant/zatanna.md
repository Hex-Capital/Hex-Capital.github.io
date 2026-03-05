# Zatanna -- Naval Ravikant Evaluation

The first thing I see is three pivots. Lawtech for jury trials, then healthcare admin agents, now scraping infrastructure. Three entirely different domains in what appears to be a few months. I have an explicit filter for this: founders who are more passionate about founding than about the specific problem they're solving. When someone jumps from legal to healthcare to developer tools, the constant isn't domain obsession -- it's the search for any problem that sticks. The identity is "founder," not "person who understands scraping at a level no one else does." That's a structural concern, not a timing concern. It doesn't get better with more pivots.

The one founder signal that gives me pause is Alex Blackwell. His time at Pikkit working on anti-bot bypass technology is genuinely relevant -- that's knowledge acquired through building, not through reading. Understanding TLS fingerprinting, cookie management, request signing at the protocol level is a craft that takes years to develop. It's closer to the kind of specific knowledge I look for than a generic CS degree. But one co-founder with relevant experience on a three-person team where the other two bring general tech backgrounds (Coinbase, Amazon, AT&T) doesn't cross my threshold. The question is whether the team collectively possesses knowledge that a well-funded competitor couldn't hire for. Blackwell's skills are valuable but transferable -- Bright Data could hire ten engineers with anti-bot experience tomorrow.

The leverage problem is what kills this for me. Protocol-level reverse-engineering is bespoke work per target site. Each integration requires understanding the target's authentication flows, API structure, TLS configuration. When the target updates anything, the integration breaks and needs re-engineering. This isn't code as leverage -- it's engineering as labor. Contrast this with Firecrawl's browser-based approach: build the rendering engine once, point it at any URL. Firecrawl is actually more leveraged despite being technically less elegant. Zatanna's approach is faster per request (sub-500ms versus 3-10 seconds), but the production cost scales linearly with the number of supported targets. That's the architecture of a services business with a software wrapper. I want companies where one engineer's work compounds across millions of users without proportional effort per new use case.

The bull case deserves honest engagement. If Zatanna can build tooling that partially automates the reverse-engineering process -- pattern recognition across sites, automated TLS fingerprint matching, ML-assisted API discovery -- then the bespoke work becomes systematized, and the integration library starts compounding. In an AI-agent world where milliseconds matter and browser instances are expensive, being 10-20x faster at data extraction could be the infrastructure layer that every agent framework builds on. The incumbents are architecturally locked into browser rendering, and rearchitecting would cannibalize their existing revenue. If you squint, this looks like Alchemy before anyone understood why blockchain developers needed dedicated infrastructure. But that thesis requires the founders to stay committed to this problem long enough to build the automation layer -- and the pivot history suggests they might move on before they get there.

The timing is consensus, not contrarian. "AI needs structured web data" is the most obvious take in developer tools right now. Firecrawl raised $14.5M in August 2025. Bright Data is at $300M ARR. This is a crowded, hot market where price already reflects optimism. I get paid for being right first, and this space already has well-capitalized players who arrived first. The protocol-level approach is a tactical differentiation, not a contrarian thesis -- no smart person disagrees that HTTP-level scraping is faster than browser rendering. They just think the generality trade-off isn't worth it, and they might be right.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Specific Knowledge and Founder-Problem Authenticity | 10/30 |
| Leverage Architecture and Scalability of the Model | 7/25 |
| Contrarian Positioning and Non-Consensus Timing | 6/20 |
| Founder Integrity and Long-Term Orientation | 6/15 |
| Technical Compounding and Defensibility Over Time | 4/10 |
| **Total** | **33/100** |

**Total Score: 33/100** (Pass)
