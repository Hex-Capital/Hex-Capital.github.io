# OneCLI -- Elad Gil Evaluation

The market map is straightforward: autonomous agents now call production systems at machine speed, security teams need access tied to employees rather than models or channels, and OneCLI becomes large only if its gateway is the reliably enforced control point for those calls. That is the governing belief. The company has identified the causal mechanism—wire-level credential injection, least-privilege policy, approvals, and identity-aware logging—but not yet the measurable threshold at which enterprises standardize on it.

The technical discontinuity is real. A human-focused IAM model does not adequately govern agents taking actions across APIs, and OneCLI converts that gap into a recurring infrastructure product priced from $149 to $499 per month plus enterprise contracts. This could expand adoption by letting companies deploy agents without placing credentials inside their environments. The dossier does not quantify reduced incident cost, deployment time, or security labor, however, so the $1.8 billion market estimate and 38.9% CAGR do less work than an observed economic step change would.

The best evidence is architectural. OneCLI retains employee identity, credential mappings, policies, approvals, and audit history while executing the network request; stronger agents should produce more governed actions rather than absorb this layer. NanoClaw making OneCLI its sole credential path and the Bitwarden Agent Access SDK integration show that the gateway can sit inside a broader workflow. This is more durable than a model-output wrapper, although Apache-2.0 licensing means the defensibility must come from integrations, operational state, and distribution—not the gateway pattern alone.

The strongest objection is that the control point is not yet reliably controlling the system. Proxy-unaware tools and raw sockets can bypass enforcement when egress lockdown is disabled, and lockdown is off by default. A July 2026 credential-injection host-enforcement bypass reinforces the concern. Aembit and Pomerium already offer adjacent credential-brokering or per-request gateway capabilities, while Cisco can bundle Astrix into a broader security platform. If customers must correctly configure a separate perimeter before OneCLI’s guarantees become true, this may crystallize as an incumbent feature rather than an independent category.

There is nevertheless more pre-seed pull than a polished launch alone. The current harness reached Product Hunt daily #7 with 143 points, NanoClaw has adopted the credential path, and the repository has roughly 3,300 stars. I substantially discount the claimed 350,000 downloads because they combine the earlier credential-vault product with the v2 team harness, and the displayed “Trusted by” logos do not establish production use, retention, or payment. The one verifiable flip condition is operational: I would move to pass if, by February 2027, OneCLI cannot show at least ten paying organizations repeatedly running the current harness with enforced egress lockdown.

The founders raise the probability that the open-source distribution loop works. Jonathan Fishner built zero-trust access at Axis Security; Guy Ben-Aharon was Argon Security’s first engineer; both experienced acquisitions in adjacent security markets and previously built ChartDB to roughly 22,500 GitHub stars and more than $10,000 MRR. That is documented second-time learning, not prestige inference. The portfolio-pattern test is favorable because this is infrastructure coverage across a new agentic discontinuity, while the principal red flags—copyability, bundled competition, and premature claims of a moat—remain unresolved. I do not need a known-exception override: there is working technology, relevant founder history, and some external adoption. I would invest, but the check is underwriting a control point that still has to prove it cannot be bypassed or bundled away.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Identifies the One Variable That Makes This Market Work | 21/32 |
| Technology Shift Expands Market Margins, Scale, or Adoption | 16/24 |
| Users Demonstrate Product-Market Pull Before the Story Is Polished | 8/18 |
| Core Technology Improvement Deepens an Owned Workflow | 14/16 |
| Founder Biography Shows Desperation or Second-Time Learning | 8/10 |
| **Total** | **67/100** |

**Total Score: 67/100** (Invest)
