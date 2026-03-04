# Luel -- Paul Graham Evaluation

The thing that caught my attention first is that William Namgyal wasn't sitting in a dorm room thinking "what's a good AI startup idea?" He had already collected 200,000 hours of speech, audio, and video data for major AI labs before starting this company. That's the organic test in its purest form -- he was doing this work, saw what was broken, and decided to build the fix. When someone has spent years inside the data supply chain for frontier AI and then starts a company to restructure it, that's a founder who stumbled into the problem through lived experience. It wasn't manufactured from a TechCrunch headline about AI data needs.

The schlep here is genuine and ugly. Managing a global contributor network across dozens of countries, handling rights clearance and consent documentation for medical conversations and personal footage, navigating GDPR and CCPA and India's privacy law simultaneously, running multi-stage QA on multimodal data that's inherently harder to verify than text -- this is exactly the kind of operational nightmare that causes smart engineers to unconsciously look the other way. It reminds me of what made Stripe work: everyone knew payment processing was painful, but the regulatory and banking schlep kept people away. The rights-clearance layer in AI training data is a similar deterrent. Most technical founders would rather build another labeling tool than deal with consent logs across jurisdictions.

What gives me pause is that this sits squarely in the hottest category in tech right now. AI infrastructure is consensus. Every investor is excited about it. My instinct when I see a crowded, well-funded space -- Scale AI at $29 billion, Surge doing over a billion in revenue -- is to ask whether the founders have identified something genuinely overlooked or are just riding a wave. The answer here is nuanced. The specific niche of sourcing new rights-cleared multimodal data, rather than labeling existing data, is meaningfully different from what Scale and Surge do. And Meta's acquisition of Scale AI actually creates a structural opening -- competing labs now need independent data providers. So while the macro category is hot, the specific positioning has some schlep-driven defensibility.

The bull case is strong: if the 3M+ contributor network is real and growing at the rate they claim ("thousands of signups every single day"), they're building a supply-side asset that's genuinely hard to replicate. Cold-start problems in marketplaces are brutal, and if they've solved it, the network effect compounds. The regulatory environment is their friend -- EU AI Act implementation and copyright litigation are forcing AI labs to demand exactly what Luel provides. And the timing with Meta locking up Scale AI is fortuitous. If even two or three of those enterprise logos on their website represent real paying relationships, this company could grow very fast on a lean team of two.

Where I'm less certain is on the technical depth. William has a GitHub presence and an NDSS publication, which is promising. But the core product is more marketplace operations than deep technology -- contributor recruitment, QA pipelines, rights documentation. Inigo has no visible public repos. The automated QA runs on Google Vertex AI, which is someone else's infrastructure. This isn't a complaint exactly -- sometimes the schlep is operational rather than technical, and that's fine. DoorDash's moat was logistics execution, not algorithms. But I'd want to understand whether the founders are building proprietary technology or assembling existing tools into a workflow. The marketplace model means their moat is the network, not the code, and networks can be poached by well-funded competitors offering better contributor payouts.

The absent evidence that bothers me most: no public revenue figures, and the enterprise logos are listed under "Backing & Investors" rather than "Customers." That ambiguity is a yellow flag. At pre-seed I don't demand revenue, but I do want clarity about whether the big names are buying data or just lending their logo. The difference between "we sell to xAI and Meta" and "xAI and Meta are aware we exist" is enormous. Still, 200K+ hours of data collected for top AI labs -- attributed to William's pre-Luel work -- suggests real commercial relationships existed before the company was formalized. That's a meaningful signal of founder-market fit even if the current entity's revenue is unclear.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Organic Problem Discovery and Schlep Willingness | 22/30 |
| Relentlessly Resourceful Founders | 14/25 |
| Evidence of Wanting: Demonstrated User Pull | 14/20 |
| Technical Hacker Founders Who Build | 8/15 |
| Growth Trajectory and Default Alive Economics | 6/10 |
| **Total** | **64/100** |

**Total Score: 64/100** (Neutral)
