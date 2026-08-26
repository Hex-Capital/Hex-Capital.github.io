# OpenRelay -- Paul Graham Evaluation

The important obstacle is not “GPU scarcity.” It is that inference capacity is split across incompatible accelerators, drivers, quotas, contracts, and failure domains. Patel encountered this while supporting 10,000-plus-GPU clusters and millions of monthly executions; Wang encountered it while building a half-megawatt data center and deploying HPC systems. OpenRelay is their shipped workaround: accept one container or model, benchmark available hardware, and expose the result through one endpoint. That is good evidence of founder motion, though the dossier never gives the ideal dated story of what broke, what they changed, and how many days it took. So the resourcefulness evidence is substantial but incomplete.

The technical proof is much stronger. Two founders have assembled a system processing more than 100 billion tokens weekly across 22 locations, four continents, and 11 accelerator SKUs. This is not a diagram awaiting funding. Routing heterogeneous hardware while preserving metering, isolation, scaling, and hosted-inference failover is difficult infrastructure already operating in production. It also matches the more revealing pattern in my recent investments: a small technical team builds a large, inspectable substrate before the category becomes legible. The OpenAI-compatible endpoint is useful precisely because it turns that substrate into a programmable primitive.

The unresolved question is who is pulling it back. A production-inference customer reports reducing B300 cluster costs by more than 25%, and 100 billion weekly tokens almost certainly represent repeated workloads rather than signups. But the dossier does not disclose customer count, paid token share, retention, revenue, or concentration. One enormous internal workload or subsidized customer could produce the same headline. OpenRelay has proved that the machine runs; it has only partly proved that a narrow group of users needs this particular machine badly. Pricing from $0.18 per GPU-hour and token-based prepaid inference establishes a real economic product, not yet a demonstrated business.

The strongest bear case is unpleasantly plausible. RunPod already reports $120 million ARR, Together AI is estimated near $1 billion annualized revenue, and hyperscalers can copy routing features. OpenRelay’s compatible interface reduces adoption friction but also switching costs. Dedicated VMs still lack automatic migration, SOC 2 Type II is unfinished, and distributed third-party hardware creates a security burden that becomes harder as the network grows. If provider recruitment becomes the decisive distribution verb, the company could spend its life coordinating suppliers while larger competitors bundle equivalent functionality. The impressive throughput figures do not by themselves refute that outcome.

But the usual founder red flags are mostly absent. These founders worked together at Voltage Park, personally understand enterprise infrastructure, and have built both the software and capacity sides instead of planning to delegate them after launch. Wang’s dropout status needs no special exception: constructing a half-megawatt data center is better evidence than the credential either way. Nor is the case dependent on a ceremonial launch or one unnamed strategic partner. None of the known exception patterns is carrying the decision; the investment case rests on functioning infrastructure and direct problem exposure.

I would invest, but not yet make it one of my highest-conviction checks. The missing evidence of an evidence-driven route change deserves exactly the default score: OpenRelay may be flexible, but the dossier shows only one route. My one flip condition is verifiable: I would pass if workload logs and invoices showed that fewer than half of the reported weekly tokens came from unaffiliated paying customers retained for at least eight weeks. If the usage is genuinely external and recurrent, this is a fierce technical team attacking a schlep-heavy problem it lived inside.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 20/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 22/23 |
| A Named User Niche Pulls the Crude Product Back | 12/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 11/12 |
| **Total** | **71/100** |

**Total Score: 71/100** (Invest)
