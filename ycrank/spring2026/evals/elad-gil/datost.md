# Datost -- Elad Gil Evaluation

The first thing I notice is the competitive landscape, and it tells the whole story. Scoop Analytics raised $3.5M in June 2024 to build an AI analyst in Slack. Julius AI has $11M in funding and over two million users doing conversational data analysis. Zenlytic raised $15.4M for an AI analytics agent. Chata.ai has been at this since 2016 and is generating $6.3M in revenue. When I see a pre-seed company entering a space where multiple well-funded startups are already executing on the same thesis -- and where every BI incumbent from Tableau to Looker to Power BI is shipping AI query features into their existing products -- this isn't a non-obvious market at an inflection point. This is a consensus market that every investor already understands.

My entry point for any investment is: what has changed structurally in the last 12-24 months that makes this possible now? The answer here is generic -- LLMs got better at text-to-SQL. That's true, but it's the "why now" for literally every AI analytics company, and it equally benefits incumbents who can embed the same capability into products with millions of existing users. Compare this to Harvey, where the structural moment was specific: GPT-4 fidelity was about to cross the threshold for legal work, and no incumbent law firm software vendor was positioned to capture it. Here, every incumbent BI vendor is positioned to capture the AI analytics opportunity. There's no structural vacancy. The market looks exactly as large and as obvious as it actually is.

The Slack-native form factor is the differentiation claim, and I want to engage with the bull case seriously. The insight that meeting users where they work -- inside Slack rather than in a separate BI tool -- could reduce friction and enable organic spread within organizations is real. If Datost could accumulate deep organizational context by indexing databases, codebases, documents, and conversation history simultaneously, that knowledge graph could create genuine switching costs over time. And there's a version of this where Slack-native analytics becomes the default interface for the 80% of knowledge workers who will never open Tableau, creating a much larger market than traditional BI serves. That's the scenario where this works. But for that scenario to play out, you need to believe three things simultaneously: that Salesforce (Slack's owner, which already has Einstein AI) won't build this natively, that Scoop Analytics (which has an 18+ month head start and funding) won't capture the category first, and that the text-to-SQL reliability problem gets solved before enterprise trust erodes. That's not one miracle -- it's three.

On the distribution question, I have a structural concern. My framework weights distribution channel ownership heavily, and Datost is renting Slack's distribution channel rather than building its own. When I invested in Stripe, the developer API wasn't just a product interface -- it was a distribution channel the company owned and could extend with Atlas, Billing, and Treasury. Datost's Slack integration is the opposite pattern: they're dependent on a platform controlled by Salesforce, which could change API terms, restrict access, or build competing functionality at any time. The dossier correctly flags this as platform risk. Within-org virality through shared bot outputs in Slack channels is a distribution signal, but it's a thin one -- the company doesn't control the channel, and a single Salesforce product decision could invalidate their entire go-to-market.

The founders have relevant backgrounds -- Jason Wang's time on Confluent's Data Governance team provides direct exposure to data infrastructure, and both co-founders worked together at Traba, which addresses co-founder relationship risk. But there's no evidence of a shipped product, no users, no revenue, and the GitHub organization has a single demo repository with zero stars. At 21, the CEO has entrepreneurial initiative (founding a nonprofit, multiple SWE roles), but neither founder has a prior exit or deep analytics-specific product experience. For a market with funded competitors already in production, the execution velocity evidence is concerning -- not because pre-seed companies lack traction by definition, but because this specific market doesn't have the luxury of extended build time.

I'm passing. The core issue isn't the team or the technology -- it's that "AI data analyst" is one of the most obvious applications of LLMs, with well-funded competitors and incumbents converging on the same value proposition. This is the kind of market where the TAM slide looks enormous but there's no structural inflection creating asymmetric opportunity for a new entrant. A smart toaster with a Slack integration is still a toaster.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Non-Obvious Market at Structural Inflection | 10/35 |
| Product-to-Distribution Trajectory | 9/25 |
| Single-Miracle Operational Clarity | 5/15 |
| Founder Execution Velocity | 5/15 |
| Technology Cycle Positioning | 4/10 |
| **Total** | **33/100** |

**Total Score: 33/100** (Pass)
