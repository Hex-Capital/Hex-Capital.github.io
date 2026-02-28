# Ashr -- Sam Lessin Evaluation

This is a pure software tool for testing AI agents, built by two undergraduate founders, entering a market where Braintrust just raised $80 million at an $800 million valuation and where OpenAI, Anthropic, Microsoft, and AWS have all shipped their own evaluation frameworks. When I ask my foundational question -- sane person, insane idea? -- I get the inverse: unproven founders pursuing the most consensus idea in developer tools right now. "AI agents need better testing" is not a contrarian insight. It's a slide in every enterprise AI pitch deck in 2026. The entire thesis depends on the AI capability being obvious, and when the AI angle is obvious, the market has already priced it in. Every VC with a pulse sees this TAM chart.

The structural moat problem here is devastating, and it's the exact pattern I've been writing about for two years. Ashr is software testing software -- there is no physical-world operation, no proprietary data asset, no protocol position, no regulatory barrier. The dossier itself states plainly: "No defensibility signals found in public sources at this stage." When I run my AI kill test -- does this business get stronger or weaker as software gets cheaper? -- the answer is unambiguously weaker. As AI improves, two things happen simultaneously: agents get better at self-correction (reducing the need for external testing), and building your own eval suite becomes trivially easy for any engineering team. The company is squeezed from both directions. Meanwhile, the platform providers whose models you're evaluating have every incentive to bundle testing directly into their APIs -- and they're already doing it. Anthropic published detailed agent eval guidance. Microsoft shipped agent evals as a GitHub Action. This is a feature waiting to get absorbed by the infrastructure it depends on.

The bull case I genuinely considered: could AI agent evaluation become a new testing primitive -- the way CI/CD became infrastructure? If Ashr established itself as the standard evaluation layer that every agent-building team integrates by default, there's a path to protocol-layer economics. The multi-step user journey simulation approach, if it's genuinely differentiated from single-metric evaluation, could create a category distinction that matters. The market is unquestionably real and growing fast. And YC acceptance is a signal worth acknowledging -- Harshita Arora saw something worth backing. But the historical pattern doesn't support this bull case. Testing infrastructure standardized through platform owners, not independent tools. GitHub Actions absorbed CI/CD. AWS, Azure, and GCP absorbed monitoring. The same gravitational pull will collapse this market toward the model providers and cloud platforms. The standalone testing tool is structurally a feature, not a company.

On the founders: Shreyas Kaps and Rohan Kulkarni are UC Berkeley students, Class of 2028. I have nothing against young founders -- the "sane" in my framework isn't about age, it's about whether someone's background generates specific, verifiable credibility for the problem they're attacking. Brian Armstrong had been an engineer at Airbnb building payment systems before proposing Coinbase. The Mysten Labs team built Meta's crypto infrastructure. Here, the founding team's domain credential is that they're CS students who've presumably built with AI agents and experienced the testing pain point firsthand. That's a valid origin story but it doesn't give me the asymmetric confidence I need -- particularly when Maxim AI's founders come from Google and Postman with deep platform-building experience, and they've already raised capital in this exact space.

The final issue is the one I always come back to: would this business be good if AI didn't exist? The answer is it literally wouldn't exist. The product is AI testing AI. That's not "cherry on top" -- that's AI all the way down. I'd rather fund a painting company with a tech layer than a tech company whose existence depends on a specific moment in AI's maturity curve. If models get good enough that agents rarely fail, the testing market shrinks. If models stay unreliable, the platform providers ship better native tooling. Neither scenario favors a two-person startup with a Python SDK competing against $800 million-valued incumbents and free open-source alternatives from every major AI lab.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| "Sane Person, Insane Idea" Calibration | 5/30 |
| AI-Resistant Structural Moat | 3/25 |
| New Primitive or Protocol Position | 4/20 |
| Narrative Magnitude and Infinity Optionality | 6/15 |
| Real Revenue or Asset Cushion | 2/10 |
| **Total** | **20/100** |

**Total Score: 20/100** (Strong Pass)
