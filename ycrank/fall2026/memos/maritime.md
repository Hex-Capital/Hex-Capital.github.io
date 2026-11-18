# Maritime

> The managed cloud for AI agents.

| Field | Value |
|-------|-------|
| Website | https://maritime.sh/ |
| YC Page | https://www.ycombinator.com/companies/maritime |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/maritime)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Cloud Computing, Infrastructure |
| YC Partner | Pete Koomen ([Y Combinator](https://www.ycombinator.com/companies/maritime)) |
| Emails | contact@maritime.sh, general and privacy inquiries ([Maritime Contact](https://maritime.sh/contact)); security@maritime.sh, vulnerability reports ([Maritime Security](https://maritime.sh/security)) |

## The Idea

- **Problem:** Startups selling a separate AI agent to each customer can provision their own cloud VMs, but Maritime’s founders say maintaining and debugging hundreds of such environments took time away from their MIT agent research ([YC launch](https://www.ycombinator.com/companies/maritime)).
- **Approach:** Maritime gives each agent an isolated VM, saves its state when idle, restores it when work arrives, and provides deployment, monitoring, and per-agent debugging ([Maritime technical note](https://maritime.sh/), [YC launch](https://www.ycombinator.com/companies/maritime)).
- **Differentiation:** Maritime bundles persistent agent hosting and message-triggered wakeups, while E2B exposes Firecracker sandbox lifecycle controls, Daytona supports reusable sandbox snapshots, Modal offers GPU sandboxes, and Fly.io’s Sprites are persistent Linux machines with usage-based billing ([Maritime](https://maritime.sh/), [E2B](https://e2b.dev/security), [Daytona](https://www.daytona.io/docs/snapshots/), [Modal](https://modal.com/docs/guide/sandbox-resources), [Fly.io](https://fly.io/sprites/)).
- **Business Model:** Current pricing offers a seven-day trial and monthly plans at $20, $100, $500, and $5,000 that convert to equal usage credits, with persistent agent boxes priced at $1 per 2 GB per month and on-demand sandboxes and desktops metered separately ([Maritime Pricing, Nov 2026](https://maritime.sh/pricing)).
- **TAM/SAM:** LP Information estimates global AI agent sandbox sales of $280M in 2025 and $2.45B in 2032, with 34.8% forecast CAGR for 2026–2032, covering a broader execution market than Maritime’s per-customer hosting segment ([LP Information, Oct 2026](https://marketpublishers.com/report/software/security-software/global-ai-agent-sandboxes-market-lp.html)).
- **GTM / Distribution:** Maritime acquires developers through self-serve onboarding and a startup program that offers credits, migration help, and portfolio grants arranged with accelerators and funds ([Maritime Pricing](https://maritime.sh/pricing), [Maritime for Startups](https://maritime.sh/startups)).

## Defensibility

- **Moat today:** Maritime documents a scheduler that maps saved VM memory on wake and attaches a thin clone of the stored disk, avoiding a full snapshot read before execution resumes ([Maritime technical note, Sep 2026](https://maritime.sh/)).
- **Future moat:** [Inferred]: Fleets that accumulate per-user disk state, credentials, and messaging integrations could take more work to migrate, although switching costs have yet to be measured publicly ([Maritime](https://maritime.sh/)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Fly.io already offers idle sleep and persistent checkpoints, and Google Cloud offers isolated agent sandboxes with a persistent workspace integration, demonstrating overlap in core runtime features ([Fly.io Sprites](https://fly.io/sprites/), [Google Cloud](https://cloud.google.com/blog/products/storage-data-transfer/filestore-agent-volumes)).

## Market & Traction

- **Traction signals:**
  - 1,107 agents on Maritime, with 29 awake concurrently in the reported snapshot ([Maritime, Sep 4, 2026](https://maritime.sh/)).
  - Keiki documents running its background agent harness on Maritime microVMs and announced a joint personal-assistant competition with Maritime ([Keiki Docs, Nov 2026](https://onkeiki.com/docs/harnesses), [Maritime on X, Oct 2026, mirrored](https://xitter.gq/maritime_sh/status/2114501032755732569)).
  - Two Lanterns Venture Capital announced a pre-seed investment with the amount undisclosed ([Two Lanterns, Jul 2026](https://www.linkedin.com/posts/activity-7480385884970823680-gjy5)).
  - YC launch announced October 9, 2026 ([Maritime changelog](https://maritime.sh/changelog/2026-10-09-launch)).
  - Product Hunt #5 of the day ([Product Hunt, Nov 5, 2026](https://www.producthunt.com/products/maritime/awards)).
  - Approximately 1.3K X followers at @maritime_sh and 2,012 LinkedIn followers ([X profile mirror, Nov 2026](https://www.nitter.cf/maritime_sh), [LinkedIn, Nov 2026](https://www.linkedin.com/company/maritimeai)).
  - Estimated 19.4K website visits from a small traffic panel ([Mindspent / traffic.cv, Sep 2026](https://mindspent.com/c/maritime)).
  - 468 stars for the CEO’s open-source Open Instinct demo, which runs on Maritime ([GitHub, Nov 2026](https://github.com/mariagorskikh/open-instinct)).
  - Zero open roles on YC Jobs ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/maritime/jobs)).
- **Competitors:**
  - E2B ($38M raised, over $120M annualized revenue run rate): Firecracker execution sandboxes with pause and resume, with a $21M Series A led by Insight Partners in July 2025 ([E2B release, Nov 2026, via search snippet](https://www.morningstar.com/news/business-wire/20261105034133/e2b-which-gives-ai-agents-their-own-cloud-computers-passes-120-million-in-annualized-run-rate-with-100-inbound), [E2B Security](https://e2b.dev/security)).
  - Daytona ($91M raised, over $100M annualized revenue run rate): developer sandboxes with reusable snapshots and forks, with a $60M Series B led by FirstMark Growth in October 2026 ([Daytona](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [FirstMark](https://firstmark.com/story/where-agents-work-leading-daytonas-60m-series-b/), [Daytona Docs](https://www.daytona.io/docs/en/persistence/)).
  - Modal (over $1.2B raised, over $1B annualized revenue run rate): usage-based CPU and GPU infrastructure spanning sandboxes, inference, and training, with a $750M Series D led by Accel in October 2026 ([Modal Company](https://modal.com/company), [Modal Series D](https://frontend.modal.com/blog/1-billion-annualized-run-rate-series-d)).
  - Fly.io ($135.5M disclosed funding, revenue unknown): usage-priced persistent Linux Sprites with filesystem checkpoints, with a $25M Series D co-led by Dell Technologies Capital and Intel Capital in July 2026 ([aVenture Research](https://aventure.vc/companies/fly-io-san-francisco-ca-us/fundraising), [Fly.io announcement](https://www.fly.io/news/fly-io-launches-computers-for-agents/), [Fly.io Sprites](https://fly.io/sprites/)).
- **Why now:** The founders trace Maritime’s start to OpenClaw’s January 2026 introduction, when they were looking for a way to host personal agents that kept their state between tasks ([OpenClaw](https://openclaw.ai/blog/introducing-openclaw), [YC launch](https://www.ycombinator.com/companies/maritime)).

## Founders & Team

- **Maria Gorskikh (Co-founder and CEO):**
  - **Background:** Boston University Questrom alumna, co-founder of DREAM Venture Labs, former Citable CTO, MIT visiting lecturer, and Project NANDA researcher, with no public direct business email found ([Boston University](https://www.bu.edu/innovate/files/2025/09/2024-25-Annual-Report-Web.pdf), [AI Engineer speaker bio](https://ai.engineer/speakers/maria-gorskikh), [YC founder profile](https://www.ycombinator.com/founders/maria-gorskikh)).
  - **Twitter/X:** @mariagorskikh, approximately 2.9K followers ([X profile mirror, Nov 2026](https://nitter.gq/mariagorskikh)).
  - **LinkedIn:** Maritime affiliation and 13K followers, with no public headline retrievable ([LinkedIn, Nov 2026](https://www.linkedin.com/in/mariagorskikh)).
  - **GitHub:** @mariagorskikh, `open-instinct`, 468 stars ([GitHub, Nov 2026](https://github.com/mariagorskikh/open-instinct)).
- **Aryaman Shrivastava (Co-founder and CTO):**
  - **Background:** Attended Arizona State University and Boston University, co-founded developer-onboarding startup Stava, and worked on agent coordination at MIT NANDA and on Endercom, with no public direct business email found ([Boston University](https://www.bu.edu/innovate/stava-tackles-a-1-5-billion-developer-onboarding-problem/), [YC founder profile](https://www.ycombinator.com/founders/aryaman-shrivastava)).
  - **Twitter/X:** @AryShriv, count not retrievable ([YC founder profile](https://www.ycombinator.com/founders/aryaman-shrivastava)).
  - **LinkedIn:** Maritime affiliation and approximately 2K followers, with no public headline retrievable ([LinkedIn, via search snippet](https://www.linkedin.com/in/aryshriv)).
  - **GitHub:** @aryshriv, `clawmafia`, 3 stars ([GitHub, Nov 2026](https://github.com/aryshriv/clawmafia)).
- **Co-founder relationship:** Gorskikh and Shrivastava met through Sundai, where they also met founding engineer Brandon Li, who co-authored Maritime’s scheduler note ([Gorskikh on LinkedIn](https://www.linkedin.com/posts/mariagorskikh_two-years-ago-i-joined-a-hacker-club-at-activity-7505666979962245120-6wLy), [Maritime technical note](https://maritime.sh/)).
- **Founder-market fit:** The founders previously hosted hundreds of agents during MIT research, won E14 Fund’s Zero-to-One hackathon track with Maritime, and received pre-seed backing from Two Lanterns ([YC launch](https://www.ycombinator.com/companies/maritime), [E14 Fund](https://www.linkedin.com/posts/e14fund_36-hours-make-as-much-progress-as-you-can-activity-7435415428635529217-tb7p), [Two Lanterns](https://www.linkedin.com/posts/activity-7480385884970823680-gjy5)).

## Key Risks

- **Concurrent capacity:** [Inferred]: Simultaneous wakeups can exhaust plan capacity, with Starter allowing 5 awake machines and Scale allowing 60, while Dedicated raises the limit to 500 ([Maritime Pricing](https://maritime.sh/pricing)).
- **Compute economics:** [Inferred]: Fleets that spend more time awake increase compute costs under flat agent-box pricing, while Maritime’s scheduler reduces compute residency during idle periods ([Maritime Pricing](https://maritime.sh/pricing), [Maritime technical note](https://maritime.sh/)).
- **Infrastructure dependency:** [Inferred]: Disruptions at Railway can affect the control plane, while Windows desktops depend on AWS and several other machine types run on Hetzner ([Maritime Security](https://maritime.sh/security)).
- **Name ambiguity:** [Inferred]: Searches for Maritime can surface shipping-sector businesses, including marine software company MaritAIme, while the `maritime.sh` domain and YC profile identify the agent-hosting company ([MaritAIme LinkedIn](https://www.linkedin.com/company/maritaime), [Y Combinator](https://www.ycombinator.com/companies/maritime)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global AI agent sandboxes, $280M in 2025 and $2.45B forecast in 2032, with 34.8% CAGR for 2026–2032 ([LP Information, Oct 2026](https://marketpublishers.com/report/software/security-software/global-ai-agent-sandboxes-market-lp.html)) |
| SAM | No public data found |
| Traction | 1,107 agents and 29 awake concurrently ([Maritime, Sep 2026](https://maritime.sh/)); Keiki background agent integration ([Keiki Docs, Nov 2026](https://onkeiki.com/docs/harnesses)); 19.4K estimated site visits ([Mindspent, Sep 2026](https://mindspent.com/c/maritime)) |
| Revenue Signal | Agent boxes at $1 per 2 GB/month and plans from $20/month, with no public revenue amount found ([Maritime Pricing, Nov 2026](https://maritime.sh/pricing)) |
| Founders | Maria Gorskikh (CEO), MIT visiting lecturer and NANDA researcher ([YC](https://www.ycombinator.com/founders/maria-gorskikh)); Aryaman Shrivastava (CTO), MIT NANDA researcher and Stava co-founder ([YC](https://www.ycombinator.com/founders/aryaman-shrivastava), [Boston University](https://www.bu.edu/innovate/stava-tackles-a-1-5-billion-developer-onboarding-problem/)) |
| Competitors | E2B ($38M raised, over $120M annualized revenue run rate, Firecracker sandboxes) ([E2B release via search snippet](https://www.morningstar.com/news/business-wire/20261105034133/e2b-which-gives-ai-agents-their-own-cloud-computers-passes-120-million-in-annualized-run-rate-with-100-inbound)); Daytona ($91M raised, over $100M annualized revenue run rate, sandbox snapshots) ([Daytona](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [FirstMark](https://firstmark.com/story/where-agents-work-leading-daytonas-60m-series-b/)); Modal (over $1.2B raised, over $1B annualized revenue run rate, CPU/GPU cloud) ([Modal Company](https://modal.com/company), [Modal Series D](https://frontend.modal.com/blog/1-billion-annualized-run-rate-series-d)); Fly.io ($135.5M disclosed funding, revenue unknown, persistent Linux Sprites) ([aVenture Research](https://aventure.vc/companies/fly-io-san-francisco-ca-us/fundraising), [Fly.io](https://fly.io/sprites/)) |
| Moat Signals | Idle-VM snapshots with memory mapping and thin-cloned disk restoration ([Maritime technical note, Sep 2026](https://maritime.sh/)) |
| Risk Factors | Plan concurrency limits and flat-rate agent-box compute ([Maritime Pricing](https://maritime.sh/pricing)); Railway control-plane dependency ([Maritime Security](https://maritime.sh/security)) |
| Founder Reach | Gorskikh: X 2.9K, LinkedIn 13K, Open Instinct 468 GitHub stars ([X mirror](https://nitter.gq/mariagorskikh), [LinkedIn](https://www.linkedin.com/in/mariagorskikh), [GitHub](https://github.com/mariagorskikh/open-instinct)); Shrivastava: X count not retrievable, LinkedIn 2K, `clawmafia` 3 GitHub stars ([YC](https://www.ycombinator.com/founders/aryaman-shrivastava), [LinkedIn via search snippet](https://www.linkedin.com/in/aryshriv), [GitHub](https://github.com/aryshriv/clawmafia)) |
| Distribution Signals | Product Hunt #5 of the day ([Product Hunt, Nov 5, 2026](https://www.producthunt.com/products/maritime/awards)); 1.3K company X followers and 2,012 company LinkedIn followers ([X mirror, Nov 2026](https://www.nitter.cf/maritime_sh), [LinkedIn, Nov 2026](https://www.linkedin.com/company/maritimeai)); startup credits and migration support ([Maritime for Startups](https://maritime.sh/startups)) |
| Emails | contact@maritime.sh, general and privacy inquiries ([Maritime Contact](https://maritime.sh/contact)); security@maritime.sh, vulnerability reports ([Maritime Security](https://maritime.sh/security)) |
