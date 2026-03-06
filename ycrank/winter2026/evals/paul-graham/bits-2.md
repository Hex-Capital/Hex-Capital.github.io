# Bits -- Paul Graham Evaluation

The most revealing data point in this dossier isn't about Bits at all. It's that SimpleClaw hit $30K MRR in two weeks and was listed for sale shortly after. Multiple wrapper founders are simultaneously exiting. The industry itself has coined the phrase "90-day wrapper window." When the people building in a category are racing to sell their companies within weeks of launching them, they're telling you something important: there's no schlep here. This is the anti-Stripe. Stripe worked because thousands of programmers could see that payment processing was broken but unconsciously avoided the banking regulations, fraud liability, and financial compliance. The schlep was the moat. With managed OpenClaw hosting, the "schlep" is spinning up a cloud instance and adding some security defaults. That's why 143 startups appeared simultaneously. When 143 teams independently arrive at the same idea at the same time, you're not looking at schlep blindness -- you're looking at a category where the problem is so visible and the solution so straightforward that everyone reaches for it at once.

The founders have relevant experience -- both worked at Console building AI agents, which is how they found this problem. That's real. But "we were building AI agents and noticed OpenClaw was hard to deploy securely" is closer to reading TechCrunch than to Drew Houston forgetting his USB drive. It's an observation anyone in the AI tooling space would make, especially after the ClawHavoc attack made headlines in every security publication. The problem is genuine -- OpenClaw's own maintainer called it "too dangerous for casual users." But genuine and defensible are different things. DigitalOcean, Hostinger, Amazon Lightsail, and Cloudflare already offer one-click OpenClaw deployment. Emergent has $100M and 104 employees. NanoClaw is open source, MIT-licensed, and addresses the same security concerns for free. The moat here is a product-design choice, not a structural barrier.

The strongest bull case is the Red Hat analogy: become the trusted, opinionated distribution for a powerful but dangerous open-source tool. Security-first positioning after a supply-chain attack that compromised 9,000+ installations is smart timing. If Bits can build genuine enterprise trust -- SOC 2 compliance, incident response SLAs, the kind of boring, painful certification work that wrapper startups won't bother with -- they could own the "safe OpenClaw" category. That's where the real schlep would be, and I don't see evidence they're pursuing it. The pitch is "3-5 minutes, no CLI, no Docker" -- that's convenience, not security infrastructure. If they were building an enterprise security layer with audit logging, compliance certifications, and sandboxed skill execution, I'd be more interested. That would be a schlep worth tackling.

Bailey Wickham's GitHub is the one genuinely strong signal. A hundred repos, pinned systems projects in Rust, Go, and C -- a Markov-chain fuzzer, a DNS client, a container implementation from scratch. That's a real hacker. People who implement containers in C understand what it takes to build secure infrastructure. Robbie brings the quant background from Jane Street and Stanford Math/CS. As a technical team, they're capable. The problem isn't their ability to build -- it's what they've chosen to build. A wrapper around an open-source project whose governance is in flux (creator joining OpenAI, project transferring to a foundation, two forced rebrandings in weeks) is building on sand, regardless of how good the engineers are.

The platform dependency alone would give me pause, but combined with the commoditization dynamics and zero visible traction, I can't find a path to conviction. At pre-seed I don't demand revenue -- but when your competitors are hitting $30K MRR in two weeks, having nothing public to show suggests limited organic pull. The unauthorized Solana memecoin trading under their brand name is a minor but telling detail about the chaos of this ecosystem. I'd want to see these founders tackle something with more structural depth -- a problem where their systems engineering skills create compounding advantages rather than a product that any VPS provider can replicate as a checkbox feature.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Organic Problem Discovery and Schlep Willingness | 7/30 |
| Relentlessly Resourceful Founders | 10/25 |
| Evidence of Wanting: Demonstrated User Pull | 5/20 |
| Technical Hacker Founders Who Build | 10/15 |
| Growth Trajectory and Default Alive Economics | 4/10 |
| **Total** | **36/100** |

**Total Score: 36/100** (Pass)
