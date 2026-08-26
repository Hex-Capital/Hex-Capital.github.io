# Agentcard -- Cyan Banister Evaluation

Move the clock to 2032. Software agents routinely negotiate and buy on behalf of people, but every useful agent needs bounded authority: whose money, which merchant, what amount, and who absorbs fraud when the machine gets it wrong? Agentcard has found a real present-day leak from that future. Its amount- and merchant-restricted Visa credentials let an agent complete checkout without receiving a reusable card number. Visa opening spending-control APIs in 2025 and Stripe launching agent cards in 2026 provide two transitions, but they also make this future visible to every payments incumbent. The destination is credible; Agentcard has not shown that it owns the road there.

Karen Serfaty is the strongest part of this company. She already founded Atlas, built global expense-card infrastructure, sold it to Remote in January 2026, and then ran Cards there. That is operating tuition, not résumé decoration. Felipe Abello brings Rappi-scale operations and several founder attempts. I see Tizz and Biz: repeated company-building and direct knowledge of how issuing, fraud, disputes, and compliance actually behave. I see less proof of Rizz inside Agentcard itself—the dossier does not show recruiting beyond the two founders or identify who built the technical system—and I would verify governance because “good friends” is not a contractual tiebreaker.

The broken workflow is specific. Today an agent either ejects the user into manual checkout, receives dangerous reusable credentials, or forces its developer to assemble issuing and compliance infrastructure. Merchant and amount restrictions return limited purchasing authority to the user while giving developers a hosted path through KYC, disputes, and chargebacks. But Agentcard has not quantified the rent: no integration-time comparison, failed-checkout rate, fraud reduction, or cost displaced by the $5,000 monthly company plan. This is a sharp inconvenience with a plausible agency transfer, not yet a demonstrated institutional tollbooth.

The product exists, but I cannot yet see the weird behavior that tells me the future arrived early. Three Product Hunt launches, 560 followers, ten “Trusted by” logos, and an unnamed 1.5-million-user platform evaluating an integration establish attention. They do not establish completed purchases, repeat transaction volume, paid company subscriptions, or developers entrusting meaningful spending to agents. The unnamed integration is particularly slippery: integrating is not transacting, and transacting once is not changing behavior.

The bull case stings because these founders may be exactly the people who can turn an apparently commoditized card API into the operating system for delegated spending. Third National issuing, a credential vault, authorization controls, and hosted fraud operations are real work. The bear case still wins today: Alchemy launched an identically named Visa product, Stripe and Crossmint already expose overlapping infrastructure, and Agentcard depends on Third National, Visa, Sumsub, Stripe, MoonPay, and others for its core flows. SOC 2 and PCI DSS are pending, authenticated MCP tools can decrypt PAN/CVV data, and the company calls the instrument a debit card while its terms say it is a collateralized credit account. In payments, that wording is not cosmetic; it tests whether the operational precision matches the founders’ experience.

I would not write the check yet. This is a capable team positioned beneath a real coming wave, but the controlled bottleneck and costly user behavior are both missing. My flip condition is verifiable: show three named production customers collectively completing at least 10,000 agent-initiated purchases per month for three consecutive months, with published authorization and fraud-loss rates, while Agentcard—not an upstream partner—controls the merchant-level risk policy. That would turn today’s API bundle into evidence of an accumulating authorization asset.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Maps a Six-Year Future to One Present-Day Leak | 18/31 |
| Founder Biography Shows Pre-Company Obsession and First-Believer Proof | 21/24 |
| Dossier Names a Broken Rule, Its Rent, and the Agency Returned | 12/19 |
| Working Artifact Elicits Costly or Weird User Behavior | 7/15 |
| Product Sits Beneath Today?s Hype as an Enabling Layer | 6/11 |
| **Total** | **64/100** |

**Total Score: 64/100** (Neutral)
