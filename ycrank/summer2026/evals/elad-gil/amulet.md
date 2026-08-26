# Amulet -- Elad Gil Evaluation

Agent execution has become cheap and ephemeral, data-intensive AI teams now need durable state across parallel runs, and the controlling variable is whether enough production workloads require conflict-safe filesystem forks rather than ordinary persistent volumes. Amulet has identified a real technical boundary: isolated workspaces mount in under 100 ms, preserve changes as content-addressed commits, and use compare-and-swap publishing to prevent parallel agents from silently overwriting shared data. The missing piece is a falsifiable market threshold—how many agents, concurrent writers, or dataset terabytes make this architecture mandatory rather than convenient.

The technology shift is credible but the economic step change is not yet quantified. E2B reported hundreds of millions of sandbox sessions and adoption by more than half the Fortune 500 by July 2025, which supports the move from long-lived machines toward disposable compute. Amulet’s claimed 1.9 ms p99 reads and 8.4 GB/s sustained throughput could make large datasets usable without repeated copying, but these are self-published benchmarks. The dossier does not show how much customer cost or job latency falls, nor whether $0.20 per GiB-month supports attractive margins after storage, cache, and network expenses.

The strongest part of the company is architectural durability. Better agents should create more concurrent workspaces, larger histories, and greater demand for provenance. Amulet owns state, credentials, forks, commits, and publishing—not merely a model’s formatted output. This is an infrastructure loop that could deepen as models improve. Yet the future moat remains inferred: there are no documented compute-provider integrations or accumulated customer histories, and Archil, E2B, Daytona, cloud vendors, and JuiceFS can attack adjacent pieces. The category is already crystallizing around financed competitors, so technical completeness must translate into distribution quickly.

There is no demonstrated product-market pull yet. Private-beta access approved in small batches establishes availability, not usage; published Free, $500-per-month Growth, and Enterprise plans establish pricing, not payment. The 84 LinkedIn followers are especially weak because the profile still describes Amulet’s previous post-sales product. The recent pivot may represent fast learning, but it also means the company has rebuilt its market thesis without showing that customers followed.

Nithik Bala’s Meta web-infrastructure and Rockset experience and Varun Puru’s Meta, Amazon, and backend work make this a credible team for distributed storage. They do not, by themselves, establish the costly commitment, prior startup learning, or unusual technical scarcity needed for a founder override. The rare-team frontier-research exception does not apply: Amulet is entering a funded commercial layer with substitutes, not opening a research frontier where customer evidence is temporarily unavailable.

The bull case is sharp: agent workloads may make versioned, provider-independent data workspaces a standard primitive, and Amulet has built the correct control plane before incumbents combine all of its capabilities. The bear case still wins today because there is no evidence that customers treat conflict-safe forks as the controlling requirement rather than a feature sandbox vendors can absorb. I would monitor rather than invest. The verifiable flip condition is three paying customers each running at least 1,000 agent workspaces weekly for three consecutive months and citing conflict-safe publishing as the reason they chose Amulet over an existing sandbox or filesystem provider.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Identifies the One Variable That Makes This Market Work | 18/32 |
| Technology Shift Expands Market Margins, Scale, or Adoption | 14/24 |
| Users Demonstrate Product-Market Pull Before the Story Is Polished | 4/18 |
| Core Technology Improvement Deepens an Owned Workflow | 13/16 |
| Founder Biography Shows Desperation or Second-Time Learning | 3/10 |
| **Total** | **52/100** |

**Total Score: 52/100** (Neutral)
