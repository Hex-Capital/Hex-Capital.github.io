# Oximy -- Sam Lessin Evaluation

Here's the thing that jumped out at me immediately: Oximy is building an AI governance tool in a category where Noma Security has already raised $132 million, Harmonic Security has $26 million, Prompt Security got acquired by SentinelOne, and Grip Security has $66 million. This is not a non-consensus bet. This is one of the most consensus enterprise plays in the 2025-2026 cycle. When I talk about "sane person, insane idea," the critical word is *insane* -- the idea has to provoke genuine skepticism from smart people. "Enterprises need to monitor their AI usage for governance and compliance" provokes exactly zero skepticism. Every CISO in America already has this on their roadmap. The EU AI Act made it a line item. When the market has already poured hundreds of millions into your category before you've shipped revenue, the "insane idea" premium has been completely arbitraged away. You're buying narrative at market price.

Naman Ambavi is clearly a builder -- multiple ventures, shipped products, got into YC, previously worked at an Altman-backed AI company. I respect the hustle. But when I look at founder-idea calibration, the "sane" side requires specific domain credibility that makes you trust *this person* with *this problem*. Naman's prior venture was a healthtech SaaS for Indian pharmacies valued at under $700K. His AI experience at Induced was as COO, not building security or governance infrastructure. He doesn't have a CISO background, hasn't built endpoint security products, hasn't worked inside enterprise security teams. Compare this to the Mysten Labs team coming out of Meta's crypto division to build Sui -- that's the kind of domain-specific credibility that makes me lean forward. Here, the execution signals are real but generic. The domain fit requires a leap of faith that I'm not inclined to make when the competitive landscape is this stacked.

Now let me run my "AI kill test" and this is where Oximy really falls apart for my framework. The entire product is software -- a desktop agent that monitors browser activity and classifies AI tool usage. The dossier says it plainly: "The core technology -- monitoring desktop/browser activity and classifying AI tool interactions -- is not technically unique." The 3,500+ AI tool detection library sounds impressive until you realize that classification databases are exactly the kind of knowledge work that AI itself is making trivially cheap to produce and maintain. More importantly, every company that already has an agent on enterprise endpoints -- Microsoft Defender, CrowdStrike, LayerX, Island -- can add "which AI tools are your employees using?" as a feature toggle. The moat here isn't operational complexity, it isn't physical infrastructure, it isn't a protocol that others build on. It's a classification list and a monitoring agent. This is the purest expression of what I mean when I say software is a business tool, not a business model.

The strongest bull case I can construct: Oximy becomes the neutral, vendor-agnostic "system of record" for enterprise AI activity -- the Switzerland of AI governance that enterprises trust precisely because it's independent of Microsoft, Google, and the AI platforms themselves. If they nail the system-of-record position, aggregated usage data across thousands of enterprises creates a benchmarking asset that compounds. The regulatory tailwind from the EU AI Act is real and creates genuine procurement urgency. And the Prompt Security acquisition at ~$23M raised validates that even modest-scale companies in this space get acquired. If I squint, there's an M&A outcome here. But that's a $50-100M exit ceiling, not an infinity story. And the path to that outcome requires outrunning companies with 20-50x more capital, which requires either a technical breakthrough I don't see evidence of or a distribution advantage that a 5-person team at pre-seed simply doesn't have.

The final structural problem: if AI succeeds in the way most people expect -- enterprises consolidating around Microsoft Copilot, ChatGPT Enterprise, and maybe Google Gemini -- then the multi-tool monitoring layer becomes less valuable, not more. The very success of AI reduces the sprawl that makes Oximy necessary. And if AI doesn't consolidate, you're competing against well-funded incumbents in a feature war. Either way, the company's narrative contracts rather than expands under pressure. That's the opposite of an infinity story. I want businesses where each new development makes the narrative bigger and more compelling. Here, the most likely market developments make the narrative smaller.

I'd rather fund a painting company with a software layer than a software company monitoring AI paint. Pass.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| "Sane Person, Insane Idea" Calibration | 8/30 |
| AI-Resistant Structural Moat | 4/25 |
| New Primitive or Protocol Position | 5/20 |
| Narrative Magnitude and Infinity Optionality | 6/15 |
| Real Revenue or Asset Cushion | 3/10 |
| **Total** | **26/100** |

**Total Score: 26/100** (Pass)
