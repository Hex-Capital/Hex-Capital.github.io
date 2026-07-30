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

- **Problem:** Data-intensive AI teams need short-lived agents and training jobs to access and modify large shared datasets without repeatedly copying data or losing work across disposable compute ([Amulet website](https://amulet.so/)).
- **Approach:** Amulet mounts ordinary Linux workspaces in under 100 ms, creates copy-on-write forks in milliseconds, and records immutable content-addressed commits with conflict-checked publishing and per-run provenance ([Amulet website](https://amulet.so/)).
- **Differentiation:** Amulet adds zero-copy writable forks, workspace-level version history, and conflict-safe publishing that its company-authored comparisons say are absent from Archil’s bucket-acceleration service, JuiceFS’s general-purpose distributed filesystem, and AWS EFS’s shared NFS model ([Archil comparison](https://amulet.so/compare/amulet-vs-archil), [JuiceFS comparison](https://amulet.so/compare/amulet-vs-juicefs), [AWS EFS comparison](https://amulet.so/compare/amulet-vs-aws-efs)).
- **Business Model:** Usage-based pricing is $0.20 per GiB-month of actively used data after a free 10 GB, while API calls, transfers, metadata operations, snapshots, and forks are free; committed-use and private-deployment terms are negotiated ([Amulet pricing](https://amulet.so/pricing)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** [Inferred]: Private-beta access through a work-email waitlist, demo booking, developer documentation, and a free tier indicates founder-led design partnerships followed by self-service adoption among AI infrastructure teams ([Amulet website](https://amulet.so/), [pricing](https://amulet.so/pricing)).

## Defensibility

- **Moat today:** The disclosed technical layer includes content-addressed commits, byte deduplication, copy-on-write forks, workspace-scoped credentials, conflict-checked publishing, p99 reads of 1.9 ms, and sustained throughput of 8.4 GB/s per mount ([Amulet–Archil comparison](https://amulet.so/compare/amulet-vs-archil)).
- **Future moat:** [Inferred]: Integration into persistent agent workflows could create switching costs through stored histories, provenance records, workspace APIs, and operational dependencies, but the private beta provides no public retention or adoption evidence.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Cloud platforms, agent-sandbox vendors, distributed-filesystem projects, and funded specialists such as Archil can add overlapping caching, snapshots, branching, or provenance primitives ([Amulet comparison index](https://amulet.so/), [Archil Series A](https://archil.com/post/series-a)).

## Market & Traction

- **Traction signals:**
  - Private beta with partners approved in small batches ([Amulet website](https://amulet.so/), Jul 2026).
  - 115 LinkedIn followers ([LinkedIn](https://www.linkedin.com/company/amulet-labs), Jul 2026).
  - Zero YC job postings ([YC company page](https://www.ycombinator.com/companies/amulet), Jul 2026).
- **Competitors (minimum 3, up to 5):**
  - Archil ($18M raised, revenue unknown): mounts and accelerates existing object-storage buckets, while Amulet supplies isolated writable forks, commit history, and conflict-safe publishing ([Archil funding announcement](https://archil.com/post/series-a), [Amulet comparison](https://amulet.so/compare/amulet-vs-archil)).
  - Modal ($465.7M raised, more than $300M annualized revenue): provides a broader AI compute cloud with storage volumes, whereas Amulet is a standalone filesystem for versioned parallel workspaces ([Modal Series C](https://modal.com/blog/modal-series-c), [Forge funding history](https://forgeglobal.com/modal-labs_stock/)).
  - E2B ($32M raised, revenue unknown): provides complete cloud sandboxes for agents, while Amulet focuses on persistent, forkable data workspaces mountable from different compute environments ([E2B Series A](https://changelog.e2b.dev/blog/series-a), [Amulet website](https://amulet.so/)).
- **Why now:** [Inferred]: The catalyst is the 2025–2026 adoption of parallel, stateful agent workloads that create many disposable compute environments but require persistent shared data, a workload shift also cited in Archil’s April 2026 financing announcement ([Archil](https://archil.com/post/series-a)).

## Founders & Team

- **Nithik Bala (Founder):**
  - Background: Georgia Tech computer-science graduate; former Meta software engineer in Core Ads Growth and Web Infrastructure and former Rockset and PagerDuty engineering intern ([YC](https://www.ycombinator.com/companies/amulet), [WayUp](https://www.wayup.com/profile/Nithik-Balachandran-74b5d0ee37/)).
  - Twitter/X: No public account found.
  - LinkedIn: “Founder at Amulet (YC S26)” ([YC](https://www.ycombinator.com/companies/amulet)).
  - GitHub: No public repos found.
- **Varun Puru (Founder):**
  - Background: University of Michigan computer-science graduate; former Meta software engineer with backend-systems and cloud-infrastructure internships at Amazon and J.P. Morgan ([YC](https://www.ycombinator.com/companies/amulet)).
  - Twitter/X: No public account found.
  - LinkedIn: “Founder at Amulet (S26)” ([YC](https://www.ycombinator.com/companies/amulet)).
  - GitHub: No public repos found.
- **Co-founder relationship:** Both founders previously worked as software engineers at Meta ([YC](https://www.ycombinator.com/companies/amulet)).
- **Founder-market fit:** Nithik Bala’s Rockset and Meta web-infrastructure work and Varun Puru’s Amazon and J.P. Morgan infrastructure internships document experience with databases, backend systems, and cloud infrastructure relevant to the product ([YC](https://www.ycombinator.com/companies/amulet)).

## Key Risks

- **Recent product pivot:** Amulet’s LinkedIn history and an earlier YC search snapshot described customer-success agents shortly before its website and live YC page changed to an AI filesystem, leaving prior-product activity inapplicable to current-product traction ([LinkedIn](https://www.linkedin.com/company/amulet-labs), [live YC page](https://www.ycombinator.com/companies/amulet)).
- **Technical scope:** Amulet excludes live same-file multi-writer access and offers partial rather than complete POSIX coverage, so workloads requiring shared writes or locks may remain better suited to JuiceFS or EFS ([JuiceFS comparison](https://amulet.so/compare/amulet-vs-juicefs)).
- **Performance verification:** The 1.9-ms p99 read latency, 8.4-GB/s throughput, 3-ms forks, and sub-100-ms mounts are company-published figures with no independent benchmark located ([Amulet–JuiceFS comparison](https://amulet.so/compare/amulet-vs-juicefs)).
- **Competitive financing:** Direct competitor Archil has raised $18M, while adjacent platforms E2B and Modal have raised $32M and $465.7M, respectively ([Archil](https://archil.com/post/series-a), [E2B](https://changelog.e2b.dev/blog/series-a), [Forge](https://forgeglobal.com/modal-labs_stock/)).
- **Name ambiguity:** Search results include unrelated companies and projects named Amulet in cybersecurity, food-allergy hardware, decentralized finance, and machine-learning research, increasing the risk of misattributed funding or traction data ([Amulet Security LinkedIn](https://www.linkedin.com/company/amulet-sec), [CB Insights allergy-device profile](https://www.cbinsights.com/company/allergy-amulet/financials)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Private beta with partners approved in small batches (Amulet website, Jul 2026); 115 LinkedIn followers (LinkedIn, Jul 2026); zero YC job postings (YC, Jul 2026) |
| Revenue Signal | $0.20 per GiB-month of active data after 10 GB free; API calls, transfers, metadata, and forks free (Amulet pricing, Jul 2026) |
| Founders | Nithik Bala (Founder): Georgia Tech, Meta Core Ads Growth/Web Infrastructure, Rockset and PagerDuty internships; Varun Puru (Founder): University of Michigan, Meta, Amazon and J.P. Morgan internships (YC, Jul 2026) |
| Competitors | Archil ($18M raised, revenue unknown, existing-bucket acceleration); Modal ($465.7M raised, more than $300M annualized revenue, integrated AI compute cloud); E2B ($32M raised, revenue unknown, complete agent sandboxes) (Archil, Modal, Forge, and E2B, 2025–2026) |
| Moat Signals | Content-addressed history, copy-on-write forks, deduplication, conflict-safe publishing, and per-run provenance (Amulet website, Jul 2026) |
| Risk Factors | Recent product pivot (LinkedIn and YC, Jul 2026), company-published performance claims without independent benchmarks (Amulet comparison pages, Jul 2026), funded direct and adjacent competitors (Archil, E2B, and Forge, 2025–2026) |
| Founder Reach | No public data found |
| Distribution Signals | 115 LinkedIn followers (LinkedIn, Jul 2026); private-beta waitlist and free 10 GB tier (Amulet website and pricing, Jul 2026) |
| Emails | No public data found |
