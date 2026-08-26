# OneCLI -- Naval Ravikant Evaluation

Fishner and Ben-Aharon have earned the right to work on this problem. Axis Security taught Fishner zero-trust network access; Ben-Aharon was Argon Security’s first engineer before its acquisition; together they built ChartDB to roughly 22.5K GitHub stars and more than $10K MRR. This is specific knowledge revealed through shipped systems, open-source distribution, and commercial output—not credentials pretending to be experience.

The product also solves a real failure mode. OneCLI keeps credentials outside the agent environment, injects them at the network layer, binds access to employee identity, and inserts approval gates. But the decisive question is what remains after a capable competitor copies that architecture. Today, the repository is Apache-2.0, Aembit and Pomerium offer overlapping gateways, and Cisco owns Astrix. Credential mappings and policy histories may eventually create switching costs, but “may” is not an asset. NanoClaw making OneCLI its sole credential path is the strongest evidence of emerging infrastructure leverage, yet one integration is a wedge, not a moat.

The open-source distribution is attractive but not yet a network. Approximately 3.3K repository stars, 350K cumulative downloads, 110 Hacker News points, and a Product Hunt daily rank of seventh show that the founders can attract technical attention. They do not show that each new customer makes OneCLI more useful for the next customer. The download count also spans the old credential vault and the new employee-agent harness. Attention transferred across a pivot; verified adoption has not yet transferred with it.

The bull case is that this is exactly when missing metrics should matter least: two proven security builders have shipped a technically coherent product into a market estimated at $1.8B and growing nearly 39% annually. The free tier and $149 and $499 monthly plans provide a direct monetization path, while the logos under “Trusted by” suggest enterprise access. A working product plus unusually effective builders can justify an exception to absent network evidence. But no payer, contract, retention cohort, or realized revenue is identified, so pricing currently proves intent rather than value capture.

The security defects matter because enforcement is the product. Proxy-unaware tools can bypass controls unless egress lockdown is enabled, it is disabled by default, and OneCLI already patched a host-enforcement bypass. The disclosure process is evidence of responsible operation, and the dossier shows no integrity, morale, or artificial-scarcity red flag from the founders. Still, a security gateway cannot treat bypass resistance as future polish. Trust compounds slowly and disappears in one packet.

My base case is that within 36 months OneCLI pivots fully from the employee-assistant harness into a general agent-identity gateway and reaches $2M–$6M ARR, but remains a useful security vendor rather than a self-reinforcing platform. I am neutral today. The single flip condition is three independent agent runtimes adopting OneCLI as their default credential path for paying production organizations; that would turn one integration into evidence of proprietary distribution and ecosystem leverage.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Has Shipped or Sold Into the Exact Problem | 28/31 |
| Advantage Survives a Competitor Copying the Code | 11/24 |
| Initial Wedge Names a Large Adjacent Market | 14/19 |
| Users Create Value or Distribution for Other Users | 3/15 |
| Pricing or Transactions Prove Direct Value Capture | 4/11 |
| **Total** | **60/100** |

**Total Score: 60/100** (Neutral)
