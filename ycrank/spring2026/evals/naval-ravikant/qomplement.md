# qomplement -- Naval Ravikant Evaluation

The most telling signal here is the pivot. Twelve months ago this was "the only OS agent that controls your computer." Today it fills PDF forms. That's not iteration — that's a search for a problem. When Aravind at Perplexity narrowed from "general AI" to "AI search," he was sharpening a decade of obsession. When a team pivots from a general-purpose computer agent to document filling within a year, they're doing market research in production. The direction of the pivot reveals the absence of specific knowledge: they didn't start with deep expertise in enterprise document workflows and build a product. They built a product and went looking for where it stuck.

Kerim Taray's time at Contalink — a YC S21 accounting fintech — gives him some pattern recognition around enterprise paperwork in Latin America. That's legitimate exposure. But exposure to a problem space while working at someone else's company is not the same as the irreplaceable knowledge that becomes the company's engine. If both founders disappeared tomorrow, the product's core insight — "extraction exists but filling doesn't" — survives intact. Any competent team could rebuild this. That's the specific knowledge test: when the founders are replaceable, you're investing in execution speed, not in a moat.

The leverage audit raises a structural concern. Software should be pure permissionless leverage — zero marginal cost, infinite replication. But qomplement's local-first architecture deliberately breaks this. Running on-device with 8-16 GB RAM requirements means every new customer is a deployment problem, not a login. That's a support surface that scales with headcount, not with code. I understand the compliance rationale for regulated industries — data sovereignty is real — but the architectural choice trades the very thing that makes software magical (permissionless scaling) for a deployment model that starts looking like enterprise services. Sixty thousand dollars a month in AWS training costs on top of local deployment complexity means this is capital-intensive for what should be a software business.

The bull case deserves real engagement. Document *filling* is genuinely underserved — the extraction market is crowded with well-funded players (Nanonets at $100M revenue, Reducto with $108M raised), but nobody owns the reverse flow. There's a version of this where filling becomes the wedge and the workflow builder creates sticky enterprise value that extraction vendors never prioritize because it's orthogonal to their core metric. The Latin American enterprise market is underserved by AI tools, and "15x more economical than cloud alternatives" is a compelling value proposition for price-sensitive mid-market buyers. One transport client automating 10,000+ invoices monthly and saving $15,000 per month is real, demonstrated value — not a hypothetical. If the team can replicate that across verticals while staying at four people, the unit economics could compound. The democratization angle — making AI document tools accessible to companies that can't afford Nanonets or UiPath — genuinely resonates with my portfolio pattern. This is the strongest dimension of the company.

But I keep returning to the competitive dynamics. Adding a filling step downstream of extraction is not a new product — it's a feature. Nanonets already processes these documents. Rossum already parses these invoices. The moment any of them ships a "fill target template" button, qomplement's differentiation collapses to deployment model (local-first) and price (LatAm affordability). That's a real but fragile wedge. The incumbents are agents of their cloud-revenue models, which creates some breathing room — the same principal-agent dynamic I saw at Google versus Perplexity. But the gap is far smaller here. Google would lose billions in ad revenue by cannibalizing search. Nanonets would gain revenue by adding filling. The agent-principal barrier protecting qomplement is thin.

Four technical founders with no open job postings, building and shipping — that part is right. The co-founders share a Tec de Monterrey background, which is better than a startup weekend matchup. But the overall picture is a competent team that found a niche through exploration rather than obsession, building in a space where the moat is execution speed rather than specific knowledge, with a leverage architecture that constrains the very scaling properties that create power-law returns. I don't see the nonlinear outcome structure that justifies an angel bet.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Specific Knowledge Productization | 10/30 |
| Permissionless Leverage Architecture | 11/25 |
| Principal Authenticity Signal | 10/20 |
| Team-to-Value Leverage | 9/15 |
| Access Democratization Pattern | 7/10 |
| **Total** | **47/100** |

**Total Score: 47/100** (Neutral)
