# Vela -- Sam Lessin Evaluation

Vela is the company I would invent if someone asked me to illustrate everything I think is structurally wrong with AI startups in 2026. Take two genuinely impressive young founders -- a Wharton summa cum laude from BCG AI and a CMU CS grad from AWS ML Supercompute and Perplexity -- and point them at the single most obvious application of large language models: making scheduling less annoying. This is a sane person with a sane idea, and in my framework that's the worst possible combination. You're paying full price for founder quality and getting zero non-consensus premium on the idea. Every VC in the Valley understands why conversational AI scheduling could be better than Calendly links. When every investor understands the opportunity, the returns have already been arbitraged away.

The AI kill test here doesn't just flash yellow -- it's a five-alarm fire. Google owns Gmail, Google Calendar, and Gemini. Microsoft owns Outlook and Copilot. Both of them literally own the calendar and email infrastructure that Vela has to integrate with to exist. Calendly has $352 million raised and $3 billion in valuation with an existing user base measured in millions. The dossier itself acknowledges the quiet part out loud: "The core capability -- an LLM-based agent that negotiates scheduling via natural language -- is technically replicable by any team with access to frontier language models and calendar/communication APIs." When even the research memo can't avoid saying your product is commoditizable, the structural position is indefensible. Multi-channel integration complexity -- email, SMS, WhatsApp, phone -- is not a moat. It's just execution difficulty that slows everyone down equally, except Google and Microsoft can throw ten times the engineering at it. The scheduling preference data Vela might accumulate is the same mirage I fell for with Birchbox -- "customer preference data" that sounds like compounding lock-in but never actually becomes it because the preferences aren't deep or sticky enough to prevent switching.

The protocol-versus-application hierarchy is what kills the infinity story. Vela sits on top of everyone else's infrastructure -- Google's calendar API, Meta's WhatsApp Business API, carrier SMS networks, email deliverability stacks. It doesn't create a new primitive that other companies build on. Stripe works as infrastructure because it owns the payment rails and every commerce company improves when Stripe gets better. There is no equivalent dynamic here. No one is building their product on top of Vela's scheduling layer. The narrative can stretch from "scheduling agent" to "AI chief of staff," sure, but that expansion puts Vela in a larger arena with even more well-capitalized competitors -- not exactly the infinity story I look for.

Now, the bull case: these brothers are legitimately formidable. They co-founded a microfinance organization at 14 that operated across 77 countries and disbursed $400K in microloans to 3,200 women. That is not a science fair project -- that is operational execution at a scale most adults never achieve. Saatvik dropped out of UChicago Booth to build this, filed a patent at 16, and has built ML systems at the frontier. If I were betting on these two to build something important in their careers, I would take that bet enthusiastically. The question is whether THIS is the thing, and the structural analysis says no. The acquisitions of Reclaim.ai by Dropbox and Kronologic by East 11 Ventures don't signal market opportunity -- they signal that incumbents are consolidating the scheduling AI space, which is the exact opposite of what a startup needs. The window for standalone scheduling infrastructure companies is closing, not opening.

Would this business be good if AI didn't exist? No. Without the LLM layer, Vela is a human scheduling assistant service, which is just a staffing company with lower margins. The AI IS the product. That's the diagnostic I use to separate real businesses from features waiting to be absorbed, and Vela lands squarely on the wrong side. I'd rather fund a painting company that uses AI to optimize crew dispatch than an AI company that schedules painters' meetings. The painting company has crews, trucks, and customer relationships that software cannot replicate. Vela has prompt engineering and API integrations that any competent team can rebuild in a quarter.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| "Sane Person, Insane Idea" Calibration | 8/30 |
| AI-Resistant Structural Moat | 4/25 |
| New Primitive or Protocol Position | 4/20 |
| Narrative Magnitude and Infinity Optionality | 6/15 |
| Real Revenue or Asset Cushion | 3/10 |
| **Total** | **25/100** |

**Total Score: 25/100** (Strong Pass)
