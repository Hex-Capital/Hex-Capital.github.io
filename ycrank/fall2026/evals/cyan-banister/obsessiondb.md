# ObsessionDB -- Cyan Banister Evaluation

By 2032, I can imagine software agents querying operational data continuously while people specify outcomes and spending limits. Getting there requires reliable machine access, predictable query economics, and tolerable latency under workloads humans would never generate manually. MotherDuck’s September 2026 observation of 29 times more MCP queries than human-interface queries is a little leak from that world. It supports the direction; it does not establish that ObsessionDB wins. The dossier connects this company to a plausible transition, but leaves the distance from cheaper analytics to indispensable agent infrastructure largely unproven.

What makes me lean forward is the work customers have already entrusted to the product. ObsessionDB’s October launch describes a customer moving from Elasticsearch, serving APIs over 50 TB, and ingesting hundreds of thousands of events per minute. Moving a production database means spending engineering time and accepting consequences when something breaks. Millions of customer API requests are much more interesting to me than a signup counter. These are company-published claims, but they describe specific, consequential behavior.

Why did anyone undertake that migration? The clearest economic answer comes from Numia: its June case study reports moving 200 TB and reducing monthly workload costs from approximately $8,000 to $2,000. Charging provisioned capacity instead of scanned bytes changes the relationship between query activity and the bill. The agency returned is concrete: a data team can permit more useful work within a capacity budget. I give that meaningful credit, although the dossier does not establish an institutional restriction or captive gatekeeper. Numia is also the founders’ former company, which makes this reference informative without making it independent proof of broad demand.

The founders have paid relevant operating tuition. All three worked at Numia, and the launch describes commercializing infrastructure developed there for production workloads. Höffl’s prior CTO and engineering-management roles, Leuthardt’s prior CTO work, and Aviles’s API-business experience give that origin substance. This fits my quieter pattern of backing repairs discovered inside an operating wound. Their shared work history also gives me more confidence than three impressive biographies assembled around a fashionable category. What remains missing is a dated record of independently pursued experiments or unusually strong recruitment; I cannot manufacture lifelong obsession from relevant résumés.

Underneath the agent language sits an actual enabling layer: proprietary SharedMergeTree storage and cache/locality components beneath an upstream ClickHouse query engine. That can support analytics, customer APIs, and agent workloads. The strongest objection is that ClickHouse already owns the upstream engine, competes in managed infrastructure, and has substantial resources. ObsessionDB could do difficult engineering and still end up selling a temporary price advantage. Unsupported native backup and restore operations make that competition operational, too. I resolve this in favor of a small investment because the team has implemented a distinct layer and attracted production workloads; durable superiority remains an open question.

The security disclosures are the sharp edge. A homepage encryption claim conflicts with a June security page describing encryption and staff-access logging as forthcoming. That establishes uncertainty, not a demonstrated severe privacy violation. Rafael is identified as CEO, and the dossier supplies no evidence of a leadership shell game or equal-control deadlock. My known exceptions for early technical conviction or compelling product behavior do not waive custody or governance gates. **I lean Invest with my own money**, with one verifiable reversal condition: a production access review showing staff can read customer data without explicit customer authorization and an auditable access record. Useful infrastructure earns curiosity; entrusted data earns obligations.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Maps a Six-Year Future to One Present-Day Leak | 20/31 |
| Founder Biography Shows Pre-Company Obsession and First-Believer Proof | 18/24 |
| Dossier Names a Broken Rule, Its Rent, and the Agency Returned | 14/19 |
| Working Artifact Elicits Costly or Weird User Behavior | 13/15 |
| Product Sits Beneath Today?s Hype as an Enabling Layer | 9/11 |
| **Total** | **74/100** |

**Total Score: 74/100** (Invest)
