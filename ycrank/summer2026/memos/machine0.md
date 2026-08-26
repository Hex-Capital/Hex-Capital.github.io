# machine0

> Cloud computers for AI agents

| Field | Value |
|-------|-------|
| Website | https://machine0.io |
| YC Page | https://www.ycombinator.com/companies/machine0 |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 1 |
| Location | Paris, ?le-de-France, France |
| Tags | Developer Tools, Cloud Computing |
| YC Partner | Brad Flora |
| Emails | hello@machine0.io ([YC, Aug 2026](https://www.ycombinator.com/companies/machine0)) |

## The Idea

- **Problem:** Long-running coding and research agents can exhaust local CPU/RAM, stop when a laptop closes, and expose personal credentials, while current alternatives include local machines, raw VPSs, and temporary sandboxes ([YC, Aug 2026](https://www.ycombinator.com/companies/machine0)).
- **Approach:** `machine0 new mybox` provisions an SSH-ready VM that agents manage through CLI or MCP, with static IP, HTTPS, snapshots, credential profiles, NixOS or Ubuntu, and up to 60 vCPUs, 240 GB RAM, or eight H200 GPUs ([machine0, Aug 2026](https://machine0.io/)).
- **Differentiation:** machine0 supplies always-on, root-accessible VMs with static endpoints and first-class NixOS provisioning, whereas E2B and Daytona center on agent sandboxes and Modal’s standard sandboxes have a maximum 24-hour lifetime before state must be restored from snapshots ([machine0](https://machine0.io/), [E2B](https://changelog.e2b.dev/blog/series-a), [Daytona](https://www.daytona.io/docs/snapshots/), [Modal](https://modal.com/docs/guide/sandboxes)).
- **Business Model:** Pay-as-you-go compute is billed per minute, with CPU instances from $0.013/hour, GPUs from $0.836/hour, suspended-image storage at $0.078/GB/month, and a $5 minimum top-up ([machine0 pricing, Aug 2026](https://machine0.io/)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Self-service installation through a curl command is supplemented by founder-led onboarding, Hacker News launches, YC distribution, and direct outreach to agent-fleet operators ([machine0](https://machine0.io/), [Barnaby Malet’s launch post, Jul 2026](https://www.linkedin.com/posts/geoffrey-negiar_machine0-is-by-far-the-easiest-way-to-get-activity-7470033332479639552--NBU)).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Reusable agent profiles, snapshots, integrations, and fleet-management history could create workflow switching costs, but public sources disclose neither usage scale nor retention.
- **Market structure:** No structural barrier identified at this stage because the service runs on DigitalOcean and funded competitors already provide programmable agent sandboxes, snapshots, GPUs, and VM runtimes ([machine0 terms](https://machine0.io/terms), [Modal VM Sandboxes](https://modal.com/docs/guide/vm-sandboxes)).
- **Commoditization risk:** E2B, Daytona, and Modal can reproduce overlapping lifecycle, isolation, snapshot, and agent-control capabilities, while raw cloud providers supply the underlying compute ([E2B](https://changelog.e2b.dev/blog/series-a), [Daytona](https://www.daytona.io/docs/snapshots/), [Modal](https://modal.com/products/sandboxes)).

## Market & Traction

- **Traction signals:**
  - PACIFIC is listed under “Trusted by” ([machine0, Aug 2026](https://machine0.io/)).
  - Founder Barnaby Malet publicly identified Geoffrey Négiar as a customer ([LinkedIn, Jul 2026](https://www.linkedin.com/posts/geoffrey-negiar_machine0-is-by-far-the-easiest-way-to-get-activity-7470033332479639552--NBU)).
  - The June 15, 2026 Show HN launch recorded 95 points and 36 comments ([Hacker News Story Stats](https://news.social-protocols.org/stats?id=48543245)).
  - One independent product review was published June 15, 2026 ([The Agent Post](https://theagentpost.co/posts/review-machine0)).
  - The YC company page lists zero jobs ([YC, Aug 2026](https://www.ycombinator.com/companies/machine0)).
  - Company X is [@machine__0](https://x.com/machine__0), but its follower count was not retrievable; the LinkedIn page lists one employee but does not expose a follower count ([LinkedIn, Aug 2026](https://www.linkedin.com/company/machine0)).
- **Competitors (minimum 3, up to 5):**
  - E2B ($32M raised, revenue unknown): Firecracker-based agent sandboxes focused on isolated code execution rather than persistent, directly administered NixOS/Ubuntu VMs ([E2B, Jul 2025](https://changelog.e2b.dev/blog/series-a)).
  - Daytona ($31M raised, $5M annualized revenue as of October 2025): sub-90-millisecond, persistent and snapshot-capable agent sandboxes versus machine0’s always-on VM and static-endpoint model ([Daytona funding](https://startupintros.com/orgs/daytona), [The Information](https://www.theinformation.com/newsletters/ai-agenda/datadog-figma-back-startup-developing-tools-ai-agents)).
  - Modal ($465M raised, over $300M annualized revenue): elastic multi-cloud AI functions and sandboxes, including beta VM sandboxes, versus machine0’s CLI-managed persistent servers ([Modal, May 2026](https://modal.com/blog/modal-series-c), [CB Insights](https://www.cbinsights.com/company/modal-3/financials)).
- **Why now:** Malet says the product pivot followed model maturation and the shift from ephemeral agent tasks to coding runs lasting 6–8 hours and agents operating continuously ([LinkedIn, Jul 2026](https://www.linkedin.com/posts/geoffrey-negiar_machine0-is-by-far-the-easiest-way-to-get-activity-7470033332479639552--NBU)).

## Founders & Team

- **Barnaby Malet (Founder/CEO):**
  - Background: Studied computer science at Imperial College London, published research on resource allocation across cloud data centers, co-founded Upflow as CTO/CPO, built payments products at Hike, and created the prior Director MCP gateway before pivoting to machine0; Director metrics are excluded from machine0 traction ([YC](https://www.ycombinator.com/companies/machine0), [founder site](https://barna.by/)).
  - Twitter/X: [@barnabymalet](https://x.com/barnabymalet), 470 followers ([TwStalker via search snippet, Aug 2026](https://ww.twstalker.com/WMJcaptal)).
  - LinkedIn: “machine0 (YC S26),” with 2K followers and 500+ connections ([LinkedIn, Jul 2026](https://www.linkedin.com/in/barnabymalet)).
  - GitHub: [@barnaby](https://github.com/barnaby), with pinned repository `mechio/takana` at 1.1K stars ([GitHub, Aug 2026](https://github.com/barnaby)).
- **Co-founder relationship:** No co-founder is listed; YC identifies Malet as the sole active founder ([YC, Aug 2026](https://www.ycombinator.com/companies/machine0)).
- **Founder-market fit:** Malet’s cloud-computing research, responsibility for Upflow’s DevOps, infrastructure, and security, and payments work at Hike document experience in the infrastructure and sensitive-data problems addressed by machine0 ([YC](https://www.ycombinator.com/companies/machine0), [founder site](https://barna.by/)).

## Key Risks

- **Supplier and control-plane dependency:** All VMs run on DigitalOcean, GPU uptime is covered at 99% rather than the homepage’s general 99.99% statement, and the machine0 control plane has no guaranteed uptime percentage ([machine0 terms](https://machine0.io/terms)).
- **Competitive convergence:** Modal added beta full-VM sandboxes in June 2026, while Daytona and E2B already offer persistent or snapshot-based agent execution, narrowing machine0’s feature separation ([Modal](https://modal.com/blog/product-updates-vm-sandboxes-domain), [Daytona](https://www.daytona.io/docs/snapshots/), [E2B](https://changelog.e2b.dev/blog/series-a)).
- **Credential surface:** Profiles inject credentials and secrets into VMs, while managed SSH private keys are encrypted at rest but retrievable through the API; machine0 states that proxied traffic is not stored or inspected ([machine0](https://machine0.io/), [terms](https://machine0.io/terms)).
- **Portability and operating-system adoption:** An independent review reported that multi-cloud portability was unavailable and identified NixOS adoption as a constraint, while Ubuntu and Ansible support provide an alternative ([The Agent Post, Jun 2026](https://theagentpost.co/posts/review-machine0), [machine0](https://machine0.io/)).
- **Name ambiguity:** Searches also surface the unrelated MACHINEZERO interactive-art studio and other “machine” businesses, requiring domain, founder, and YC-batch cross-checking ([MACHINEZERO LinkedIn](https://www.linkedin.com/company/machinezero/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | PACIFIC listed as “Trusted by” (machine0, Aug 2026); Geoffrey Négiar identified as a customer (LinkedIn, Jul 2026); 95 Hacker News points and 36 comments (Hacker News Story Stats, Jun 2026) |
| Revenue Signal | Per-minute billing; CPU from $0.013/hour, GPU from $0.836/hour, suspended storage $0.078/GB/month (machine0 pricing, Aug 2026) |
| Founders | Barnaby Malet (Founder/CEO): Imperial College London computer science, former Upflow CTO/CPO, Hike payments and cloud-infrastructure research (YC and founder site, Aug 2026) |
| Competitors | E2B ($32M raised, revenue unknown, sandboxed agent code execution) (E2B, Jul 2025); Daytona ($31M raised, $5M annualized revenue, sub-90ms sandboxes) (StartupIntros and The Information, Feb 2026); Modal ($465M raised, $300M+ annualized revenue, elastic AI cloud and VM sandboxes) (Modal and CB Insights, May 2026) |
| Moat Signals | No public data found |
| Risk Factors | DigitalOcean and control-plane dependency (machine0 terms, Apr 2026), competitor VM/snapshot convergence (Modal and Daytona, Jun 2026), API-retrievable managed SSH keys and injected credentials (machine0 terms and website, Aug 2026) |
| Founder Reach | Barnaby Malet: Twitter 470 (TwStalker via search snippet, Aug 2026), LinkedIn 2K+ (LinkedIn, Jul 2026), top pinned GitHub repo 1.1K stars (GitHub, Aug 2026) |
| Distribution Signals | Show HN: 95 points and 36 comments (Hacker News Story Stats, Jun 2026); independent review (The Agent Post, Jun 2026); YC Summer 2026 company page (YC, Aug 2026) |
| Emails | hello@machine0.io (YC, Aug 2026) |
