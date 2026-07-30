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
| Emails | barnaby@machine0.io |

## The Idea

- **Problem:** AI coding and research agents can run for 6–8 hours or days and require isolated, persistent compute, while existing sandbox products emphasize ephemeral execution ([YC company page, Jul 2026](https://www.ycombinator.com/companies/machine0)).
- **Approach:** A CLI or remote MCP server provisions persistent NixOS or Ubuntu KVM/QEMU VMs with dedicated resources, static IPs, snapshots, and agent tooling pre-installed ([machine0 website, Jul 2026](https://machine0.io/)).
- **Differentiation:** machine0 provides persistent, suspendable NixOS or Ubuntu VMs, compared with E2B’s secure cloud sandboxes, Modal’s container platform, and Daytona’s composable agent computers ([machine0](https://machine0.io/), [E2B](https://www.e2b.dev/), [Modal](https://modal.com/blog/announcing-our-series-b), [Daytona](https://www.prnewswire.com/news-releases/daytona-raises-24m-series-a-to-give-every-agent-a-computer-302680740.html)).
- **Business Model:** Pay-as-you-go compute billed per minute, with CPU instances from $0.013/hour, GPU instances from $0.836/hour, suspended-image storage at $0.078/GB/month, and a $5 minimum top-up ([machine0 pricing, Jul 2026](https://machine0.io/)).
- **TAM/SAM:** The global cloud-infrastructure-services market was estimated at $172.54B in 2025 and projected to reach $562.99B by 2032 at an 18.4% CAGR, while no public SAM estimate was found for persistent agent VMs ([360iResearch, 2026](https://www.360iresearch.com/library/intelligence/cloud-infrastructure-services)).
- **GTM / Distribution:** [Inferred]: Self-service CLI installation, public documentation, open-source VM images, Hacker News launches, and founder-led onboarding form the initial developer distribution path.

## Defensibility

- **Moat today:** Public NixOS and Ubuntu image repositories encode reproducible agent environments, but the principal machine0 repositories have 13 and 1 GitHub stars respectively ([GitHub, Jul 2026](https://github.com/fdmtl/machine0-nixos), [GitHub, Jul 2026](https://github.com/fdmtl/machine0-ubuntu)).
- **Future moat:** [Inferred]: Reusable images, snapshots, agent integrations, and workload telemetry could create switching costs, but public adoption data does not yet establish them.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** E2B, Daytona, Modal, RunPod, hyperscale clouds, VPS providers, and self-hosted KVM or container stacks can provide overlapping isolated compute, while machine0 itself runs VMs on DigitalOcean infrastructure ([machine0 terms, Apr 2026](https://machine0.io/terms)).

## Market & Traction

- **Traction signals:**
  - Show HN launch received 96 points and 37 comments, ranking #64 among June 2026 Show HN projects ([Best of Show HN, Jun 2026](https://bestofshowhn.com/2026/6)).
  - Founder’s machine0/YC announcement received 299 reactions and 112 comments ([LinkedIn, Jun 2026](https://www.linkedin.com/posts/barnabymalet_excited-to-share-that-ive-been-accepted-activity-7470031192965246977-D9a1)).
  - `fdmtl/machine0-nixos` had 13 GitHub stars and one fork ([GitHub, Jul 2026](https://github.com/fdmtl/machine0-nixos)).
  - YC listed zero active jobs ([YC company page, Jul 2026](https://www.ycombinator.com/companies/machine0)).
- **Competitors (minimum 3, up to 5):**
  - E2B (~$32M raised, revenue unknown): open-source, rapidly starting cloud sandboxes for AI-agent code execution rather than persistent named VMs ([E2B funding announcement, Jul 2025](https://www.prnewswire.com/news-releases/e2b-raises-a-21m-series-a-to-offer-cloud-for-ai-agents-to-fortune-100-302514540.html)).
  - Daytona (~$31M raised, revenue unknown): programmatic composable computers for agents, while machine0 emphasizes persistent NixOS/Ubuntu environments managed through a CLI ([Daytona Series A, Feb 2026](https://www.prnewswire.com/news-releases/daytona-raises-24m-series-a-to-give-every-agent-a-computer-302680740.html)).
  - Modal ($111M raised, approximately $50M annualized revenue): container and storage infrastructure focused on serverless AI workloads rather than user-managed persistent VMs ([Modal](https://modal.com/blog/announcing-our-series-b), [TechCrunch, Feb 2026](https://techcrunch.com/2026/02/11/ai-inference-startup-modal-labs-in-talks-to-raise-at-2-5b-valuation-sources-say/)).
  - RunPod at least $20M raised before its later announced $100M Series A, $120M ARR reported in January 2026: GPU-oriented AI hosting, while machine0 also offers low-cost CPU VMs, NixOS provisioning, and static endpoints ([TechCrunch, Jan 2026](https://techcrunch.com/2026/01/16/ai-cloud-startup-runpod-hits-120m-in-arr-and-it-started-with-a-reddit-post/)).
- **Why now:** Founder Barnaby Malet stated that improvements in coding agents during late 2025 shifted workloads from ephemeral execution toward 6–8-hour and always-on sessions, prompting the pivot from an MCP-governance gateway to machine0 ([LinkedIn, Jun 2026](https://www.linkedin.com/posts/barnabymalet_excited-to-share-that-ive-been-accepted-activity-7470031192965246977-D9a1)).

## Founders & Team

- **Barnaby Malet (Founder/CEO):**
  - Background: Studied computer science at Imperial College London, left a PhD after publishing cloud-data-center research, built payment products at Hike, and co-founded Upflow as CTO/CPO before it raised a $15M Series A ([YC](https://www.ycombinator.com/companies/machine0), [personal site](https://barna.by/), [TechCrunch, Jun 2021](https://techcrunch.com/2021/06/14/upflow-raises-15-million-to-manage-your-outstanding-invoices/)).
  - Twitter/X: @barnabymalet; count not retrievable ([X profile](https://x.com/barnabymalet)).
  - LinkedIn: “Building machine0 — powerful & persistent virtual machines from your CLI,” with approximately 2K followers and 500+ connections ([LinkedIn, Jul 2026](https://www.linkedin.com/in/barnabymalet)).
  - GitHub: @barnaby, 33 followers; pinned `mechio/takana` repository had 1.1K stars ([GitHub, Jul 2026](https://github.com/barnaby/)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Barnaby Malet has published cloud-resource-allocation research, built cloud VM tooling, co-created the Director MCP gateway, and previously served as CTO/CPO of YC-backed Upflow ([personal site, Jul 2026](https://barna.by/)).

## Key Risks

- **Infrastructure dependency:** Customer VMs run on DigitalOcean, so availability, regional capacity, hardware pricing, and upstream policy changes affect machine0’s service; the website states 99.99% uptime across five regions but does not publish an independent SLA record ([machine0 terms](https://machine0.io/terms), [machine0 website](https://machine0.io/)).
- **Substitution:** E2B raised approximately $32M for agent sandboxes, Daytona raised approximately $31M for agent computers, and Modal raised $111M for container infrastructure, giving customers multiple overlapping execution options ([E2B](https://www.prnewswire.com/news-releases/e2b-raises-a-21m-series-a-to-offer-cloud-for-ai-agents-to-fortune-100-302514540.html), [Daytona](https://www.prnewswire.com/news-releases/daytona-raises-24m-series-a-to-give-every-agent-a-computer-302680740.html), [Modal](https://modal.com/blog/announcing-our-series-b)).
- **Security boundary:** Users receive root-level SSH access and public static IPs, increasing the importance of tenant isolation, credential handling, abuse controls, and network security; published terms prohibit unauthorized access and infrastructure disruption ([machine0 terms, Apr 2026](https://machine0.io/terms)).
- **Demand validation:** Public current-product evidence consists primarily of a 96-point Hacker News launch and small machine0 repository audiences, with no disclosed customer, usage, or revenue count ([Best of Show HN, Jun 2026](https://bestofshowhn.com/2026/6), [GitHub, Jul 2026](https://github.com/fdmtl/machine0-nixos)).
- **Product-positioning change:** The founder pivoted from the Director enterprise MCP-governance product to commercializing its underlying VM CLI, so prior Director adoption cannot be treated as machine0 traction ([LinkedIn, Jun 2026](https://www.linkedin.com/posts/barnabymalet_excited-to-share-that-ive-been-accepted-activity-7470031192965246977-D9a1)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $172.54B global cloud-infrastructure-services market in 2025, projected to $562.99B by 2032 at 18.4% CAGR (360iResearch, 2026) |
| SAM | No public data found |
| Traction | Show HN: 96 points and 37 comments (Best of Show HN, Jun 2026); `machine0-nixos`: 13 GitHub stars (GitHub, Jul 2026) |
| Revenue Signal | Per-minute pricing from $0.013/hour for CPU and $0.836/hour for GPU; suspended storage $0.078/GB/month (machine0 pricing, Jul 2026) |
| Founders | Barnaby Malet (Founder/CEO): Imperial College computer science, former Upflow CTO/CPO, cloud-resource-allocation researcher (YC and Barnaby Malet personal site, Jul 2026) |
| Competitors | E2B (~$32M raised, revenue unknown, ephemeral agent sandboxes) (E2B, Jul 2025); Daytona (~$31M raised, revenue unknown, composable agent computers) (Daytona, Feb 2026); Modal ($111M raised, ~$50M annualized revenue, serverless containers) (Modal and TechCrunch, 2025–2026); RunPod ($20M raised before later $100M Series A, $120M ARR, GPU cloud) (TechCrunch, Jan 2026) |
| Moat Signals | Public reproducible NixOS and Ubuntu image repositories with 13 and 1 stars respectively (GitHub, Jul 2026) |
| Risk Factors | DigitalOcean dependency (machine0 terms, Apr 2026), funded substitutes (E2B/Daytona/Modal funding announcements, 2025–2026), no disclosed current-product revenue or customer count (public-source review, Jul 2026) |
| Founder Reach | Barnaby Malet: Twitter count not retrievable, LinkedIn 2K followers, GitHub 33 followers and pinned repo with 1.1K stars (LinkedIn and GitHub, Jul 2026) |
| Distribution Signals | Show HN #64 for June with 96 points and 37 comments (Best of Show HN, Jun 2026); founder announcement 299 reactions and 112 comments (LinkedIn, Jun 2026) |
| Emails | barnaby@machine0.io (founder’s Show HN comment, Jun 2026) |
