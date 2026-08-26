# OneTriangle -- Naval Ravikant Evaluation

The strongest evidence is not the founders’ résumés. It is the artifact they shipped. OneTriangle published a 1,048,576-parameter cache correction model, measured 82.52% top-token agreement, and demonstrated 1.25× end-to-end speed at an 8,192-token context. Medha Venkatapathy’s prior LLM-optimization research makes this more than fashionable infrastructure tourism, while three years of building together gives the team some operating history. The evidence is still uneven: Hannah Chung’s World Bank and Virtu credentials do not themselves establish inference-specific knowledge, and the governance-to-inference pivot occurred within roughly one month.

The technical result proves intelligence and execution. It does not yet prove a durable company. If a competitor copies the implementation, OneTriangle currently retains no demonstrated exclusive data, hardware, distribution, or deployment network. Upstreaming the work into vLLM and requiring no API changes may accelerate adoption, but it also makes diffusion easy. The proposed proprietary asset—model-pair mappings and workload-specific acceptance data—exists today as an inference, not a measured flywheel.

The benchmark boundary matters. The 7.91× target-start result assumes a resident source cache; including source prefill reduces the improvement to 1.25×, while the reported 82.52% agreement was not validated on open-ended generation, task accuracy, or human preference. Quality gates and ordinary-prefill fallback protect customers, but every fallback also removes the economic advantage. Reliability and differentiation are therefore coupled: the system is safest precisely when it behaves most like the commodity alternative.

The market is large enough to maneuver in—global inference PaaS was estimated at $18.84 billion in 2025—but the dossier supplies a top-down category, not a demonstrated path from cross-model cache transfer into control of that category. Fireworks, Together, and Baseten can distribute competing optimizations through existing customer relationships. OneTriangle has explicit token pricing, including $0.15 per million DeepSeek V4 Flash input tokens, but no identified payer or completed transaction. A one-line configuration change lowers adoption friction and switching cost simultaneously.

The permissionless pattern is promising but incomplete. Contributing to vLLM lets outsiders adopt the work without institutional approval, yet no user currently makes the product more useful for another user. Five Launch YC votes and 488 company-account followers do not establish distribution. The strongest exception is the capital-efficient technical prototype: an early product can deserve investment before a user loop exists. Unlike a product whose accumulated interface taste becomes difficult to reproduce, however, OneTriangle is deliberately exposing reusable infrastructure patterns before showing what proprietary asset compounds behind them.

I find no evidence of an integrity problem, artificial financing pressure, or founders demanding reassurance. The rapid product pivot is a warning about direction, not proof of instability; it may represent fast learning. But bounded downside is not enough when the upside belongs to the infrastructure incumbents that can copy and distribute the feature. I would wait. The single flip condition is three paying managed-deployment customers renewing after six months because proprietary workload-trained mappings deliver at least 2× end-to-end speed while preserving at least 95% task-level quality. That would convert impressive code into a compounding asset.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Has Shipped or Sold Into the Exact Problem | 24/31 |
| Advantage Survives a Competitor Copying the Code | 8/24 |
| Initial Wedge Names a Large Adjacent Market | 8/19 |
| Users Create Value or Distribution for Other Users | 3/15 |
| Pricing or Transactions Prove Direct Value Capture | 4/11 |
| **Total** | **47/100** |

**Total Score: 47/100** (Neutral)
