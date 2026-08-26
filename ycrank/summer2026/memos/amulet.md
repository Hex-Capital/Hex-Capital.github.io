# Amulet

> High performance file system for agents

| Field | Value |
|-------|-------|
| Website | https://amulet.so/ |
| YC Page | https://www.ycombinator.com/companies/amulet |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Machine Learning, Big Data, Infrastructure, AI |
| YC Partner | Diana Hu |
| Emails | No public data found |

## The Idea

- **Problem:** Data-intensive AI teams need disposable agents and training jobs to access cloud datasets without copying data, losing work between compute sessions, or allowing parallel writers to overwrite one another ([YC company page, Aug 2026](https://www.ycombinator.com/companies/amulet); [Amulet website, Aug 2026](https://amulet.so/)).
- **Approach:** Amulet supplies isolated Linux filesystem workspaces that mount in under 100 ms, use copy-on-write forks, persist independently of compute, and record changes as content-addressed commits with conflict-checked publishing and per-run provenance ([Amulet website, Aug 2026](https://amulet.so/)).
- **Differentiation:** Amulet adds workspace-level forks, history, provenance, and conflict-safe publishing beyond Archil’s cached object-store mounts and JuiceFS’s shared distributed filesystem, while decoupling durable data from the sandbox lifecycle used by E2B and Daytona ([Archil comparison](https://amulet.so/compare/amulet-vs-archil); [JuiceFS comparison](https://amulet.so/compare/amulet-vs-juicefs); [E2B comparison](https://amulet.so/compare/amulet-vs-e2b); [Daytona comparison](https://amulet.so/compare/amulet-vs-daytona)).
- **Business Model:** Published plans are Free at $0 per month, Growth at $500 per month, and custom Enterprise, with comparison pages listing a 10-GB free allowance and $0.20 per GiB-month for actively used data ([Amulet pricing, Aug 2026](https://amulet.so/pricing); [Amulet–Archil comparison](https://amulet.so/compare/amulet-vs-archil)).
- **TAM/SAM:** The adjacent global AI-infrastructure market was estimated at $35.4 billion in 2023 and projected to reach $223.45 billion by 2030 at a 30.4% CAGR, but no public SAM was found for agent-native filesystems specifically ([Grand View Research](https://www.grandviewresearch.com/press-release/global-ai-infrastructure-market)).
- **GTM / Distribution:** Amulet uses request-access and demo forms for a private beta aimed at automated-research labs, cloud-agent providers, and other data-intensive AI teams ([Amulet website, Aug 2026](https://amulet.so/); [YC company page, Aug 2026](https://www.ycombinator.com/companies/amulet)).

## Defensibility

- **Moat today:** Amulet reports technical-complexity differentiation through content-addressed commits, copy-on-write deduplication, per-run provenance, short-lived workspace-scoped credentials, and compare-and-swap publishing ([Amulet website](https://amulet.so/); [Archil comparison](https://amulet.so/compare/amulet-vs-archil)).
- **Future moat:** [Inferred]: Accumulated workspace history, provenance records, and integrations with agent-compute providers could create switching costs, but this is unproven while access remains private beta and no retention data are public.
- **Market structure:** No structural barrier is identified at this stage because Archil already markets a persistent filesystem for agent context and has raised $18 million ([Archil Series A announcement, Apr 2026](https://archil.com/post/series-a)).
- **Commoditization risk:** Cloud providers, sandbox vendors, and open-source systems such as JuiceFS can supply mounts, snapshots, caching, or shared volumes, although Amulet’s comparison identifies first-class workspace history and conflict-safe forks as presently separate capabilities ([JuiceFS comparison](https://amulet.so/compare/amulet-vs-juicefs); [E2B comparison](https://amulet.so/compare/amulet-vs-e2b)).

## Market & Traction

- **Traction signals:**
  - Private beta with access approved in small batches ([Amulet website, Aug 2026](https://amulet.so/)).
  - 84 LinkedIn followers, although the crawled profile still describes the prior post-sales product ([LinkedIn, Jul 2026](https://www.linkedin.com/company/amulet-labs)).
  - 0 jobs listed on the YC company page ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/amulet)).
- **Competitors:**
  - Archil ($18M raised, revenue unknown): synchronizes existing object stores into an AI filesystem and includes serverless execution, while Amulet emphasizes versioned writable forks and provenance ([Archil, Apr 2026](https://archil.com/post/series-a); [comparison](https://amulet.so/compare/amulet-vs-archil)).
  - E2B ($32M raised, revenue unknown): supplies Firecracker-isolated agent compute and sandbox filesystems, while Amulet supplies storage that persists independently across sandboxes ([E2B, Jul 2025](https://changelog.e2b.dev/blog/series-a); [comparison](https://amulet.so/compare/amulet-vs-e2b)).
  - Daytona (at least $29M disclosed, $2M forward revenue run rate after doubling): supplies stateful agent computers and snapshots, while Amulet supplies provider-independent workspaces for datasets exceeding sandbox disks ([Daytona, Feb 2026](https://www.prnewswire.com/news-releases/daytona-raises-24m-series-a-to-give-every-agent-a-computer-302680740.html); [Axios seed report, Jun 2024](https://www.axios.com/newsletters/axios-pro-rata-9867e778-2609-4cc4-833d-b1ba9bcfc32b); [comparison](https://amulet.so/compare/amulet-vs-daytona)).
- **Why now:** [Inferred]: E2B reported hundreds of millions of sandbox sessions and adoption by more than half of the Fortune 500 by July 2025, indicating that agent execution volumes are creating demand for durable state outside ephemeral compute ([E2B, Jul 2025](https://changelog.e2b.dev/blog/series-a)).

## Founders & Team

- **Nithik Bala (Founder):**
  - Background: Georgia Tech computer-science graduate; former Meta engineer in Core Ads Growth and Web Infrastructure; former Rockset and PagerDuty intern ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/amulet)).
  - Twitter/X: No public account found.
  - LinkedIn: “Founder at Amulet (YC S26)” ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/amulet)).
  - GitHub: No public repos found.
- **Varun Puru (Founder):**
  - Background: Studied computer science at the University of Michigan; former Meta software engineer with backend and cloud-infrastructure internships at Amazon and J.P. Morgan ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/amulet)).
  - Twitter/X: No public account found.
  - LinkedIn: “Founder at Amulet (S26)” ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/amulet)).
  - GitHub: No public repos found.
- **Co-founder relationship:** Both founders previously worked at Meta ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/amulet)).
- **Founder-market fit:** Nithik’s work in web infrastructure and at database company Rockset, together with Varun’s backend and cloud-infrastructure experience, aligns with building a distributed storage product for AI workloads ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/amulet)).

## Key Risks

- **Product-pivot execution:** [Inferred]: Replacing the post-sales-agent product described in a July 2026 LinkedIn crawl with the filesystem now presented by YC and the website may require rebuilding customer pipeline and positioning ([LinkedIn](https://www.linkedin.com/company/amulet-labs); [current website](https://amulet.so/)).
- **Performance verification:** Amulet publishes p99 reads of 1.9 ms and sustained throughput of 8.4 GB/s per mount, but no third-party benchmark was found; private-beta onboarding allows evaluation against customer workloads ([Archil comparison](https://amulet.so/compare/amulet-vs-archil); [Amulet website](https://amulet.so/)).
- **Financed alternatives:** Archil has raised $18 million and E2B has raised $32 million for overlapping filesystem or agent-infrastructure layers, giving prospective customers funded substitutes and complements ([Archil](https://archil.com/post/series-a); [E2B](https://changelog.e2b.dev/blog/series-a)).
- **Workload compatibility:** Amulet’s POSIX coverage intentionally excludes live same-file multi-writer access, which can exclude workloads needing shared locks, while isolated sessions and conflict-checked publishing address parallel agent writes ([JuiceFS comparison](https://amulet.so/compare/amulet-vs-juicefs)).
- **Name ambiguity:** An unrelated allergen-sensor company also operates as Amulet and has raised $13.16 million, creating search and brand disambiguation risk ([CB Insights](https://www.cbinsights.com/company/allergy-amulet/financials)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $35.4B global AI-infrastructure market in 2023, projected to $223.45B by 2030 at 30.4% CAGR ([Grand View Research](https://www.grandviewresearch.com/press-release/global-ai-infrastructure-market)) |
| SAM | No public data found |
| Traction | Private beta with access approved in small batches ([Amulet website, Aug 2026](https://amulet.so/)); 84 LinkedIn followers on a profile still describing the prior product ([LinkedIn, Jul 2026](https://www.linkedin.com/company/amulet-labs)) |
| Revenue Signal | $0/month Free, $500/month Growth, custom Enterprise ([pricing page, Aug 2026](https://amulet.so/pricing)); 10 GB free and $0.20/GiB-month for actively used data ([comparison page, Aug 2026](https://amulet.so/compare/amulet-vs-archil)) |
| Founders | Nithik Bala (Founder): Georgia Tech, Meta web infrastructure, Rockset and PagerDuty; Varun Puru (Founder): University of Michigan CS, Meta, Amazon and J.P. Morgan ([Y Combinator](https://www.ycombinator.com/companies/amulet)) |
| Competitors | Archil ($18M raised, revenue unknown, object-store synchronization and execution); E2B ($32M raised, revenue unknown, agent sandboxes); Daytona (at least $29M disclosed, $2M forward revenue run rate, stateful agent computers) ([Archil](https://archil.com/post/series-a); [E2B](https://changelog.e2b.dev/blog/series-a); [Daytona](https://www.prnewswire.com/news-releases/daytona-raises-24m-series-a-to-give-every-agent-a-computer-302680740.html)) |
| Moat Signals | Content-addressed commits, copy-on-write deduplication, per-run provenance, workspace-scoped credentials, and conflict-checked publishing ([Amulet website](https://amulet.so/); [comparison](https://amulet.so/compare/amulet-vs-archil)) |
| Risk Factors | Recent product pivot ([LinkedIn](https://www.linkedin.com/company/amulet-labs); [website](https://amulet.so/)), self-published performance benchmarks ([comparison](https://amulet.so/compare/amulet-vs-archil)), partial POSIX coverage ([JuiceFS comparison](https://amulet.so/compare/amulet-vs-juicefs)) |
| Founder Reach | No public data found |
| Distribution Signals | 84 LinkedIn followers ([LinkedIn, Jul 2026](https://www.linkedin.com/company/amulet-labs)); 0 YC-listed jobs ([Y Combinator, Aug 2026](https://www.ycombinator.com/companies/amulet)) |
| Emails | No public data found |
