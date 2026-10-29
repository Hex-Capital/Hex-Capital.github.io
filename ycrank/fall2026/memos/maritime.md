# Maritime

> The managed cloud for AI agents.

| Field | Value |
|-------|-------|
| Website | https://maritime.sh/ |
| YC Page | https://www.ycombinator.com/companies/maritime |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/maritime)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Cloud Computing, Infrastructure |
| YC Partner | Pete Koomen ([YC](https://www.ycombinator.com/companies/maritime)) |
| Emails | contact@maritime.sh, security@maritime.sh ([Maritime Security](https://maritime.sh/security)) |

## The Idea

- **Problem:** Startups giving each customer an AI agent must provision, maintain, and debug separate computing environments, a problem Maritime’s founders report encountering while hosting hundreds of research agents at MIT ([YC launch](https://www.ycombinator.com/companies/maritime), retrieved Oct 27, 2026).
- **Approach:** Each agent receives an isolated computer with persistent storage, encrypted secrets, and automatic snapshot-based sleep/wake, accessible through dashboard, CLI, API, or SDK ([Maritime documentation](https://maritime.sh/docs/how-it-works)).
- **Differentiation:** Maritime packages persistent agents into flat monthly subscriptions, while E2B charges for sandbox runtime and Modal offers usage-priced CPU/GPU infrastructure ([Maritime pricing](https://maritime.sh/pricing), [E2B pricing](https://e2b.dev/pricing), [Modal](https://modal.com/company)).
- **Business Model:** Monthly subscriptions include Free with three agents, Starter at $20 for 20, Growth at $100 for 100, Scale at $500 for 500, and Dedicated at $5,000 for 5,000, with concurrency limits and paid resource add-ons ([Maritime pricing](https://maritime.sh/pricing), retrieved Oct 27, 2026).
- **TAM/SAM:** The adjacent enterprise-agent-infrastructure market is estimated at $550M in 2026, reaching $4.45B by 2031 at 52.06% CAGR; Maritime-specific TAM/SAM estimates: No public data found ([Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/enterprise-agent-infrastructure-market), Jan 2026 estimates).
- **GTM / Distribution:** Public acquisition channels include self-service deployment, Product Hunt launches, developer events, and credits for startups deploying agents ([Product Hunt](https://www.producthunt.com/products/maritime), [Maritime](https://maritime.sh/), retrieved Oct 27, 2026).

## Defensibility

- **Moat today:** [Inferred]: Persisted customer files, secrets, and integrations could create migration work, although documentation establishes functionality rather than measured switching costs ([Maritime documentation](https://maritime.sh/docs/how-it-works)).
- **Future moat:** [Inferred]: Fleet operating history could improve scheduling and troubleshooting, but a proprietary operational dataset or demonstrated learning advantage has not been publicly established.
- **Market structure:** [Inferred]: No structural barrier identified at this stage.
- **Commoditization risk:** Docker launched managed cloud sandboxes using microVM isolation, establishing overlapping execution infrastructure from an existing developer-platform vendor ([Docker announcement](https://www.docker.com/press-release/cloud-sandboxes-extending-secure-ai-agent-isolation-beyond-the-laptop/), Sep 24, 2026).

## Market & Traction

- **Traction signals:**
  - Pre-seed investment announced by Two Lanterns Venture Capital; investment amount: No public data found ([investor announcement](https://www.linkedin.com/posts/activity-7480385884970823680-gjy5), retrieved Oct 27, 2026).
  - Product Hunt launches dated March 25 and August 30, 2026, with 253 product followers ([Product Hunt](https://www.producthunt.com/products/maritime), retrieved Oct 27, 2026).
  - Company LinkedIn page displays 1,932 followers ([LinkedIn](https://www.linkedin.com/company/maritimeai/), retrieved Oct 27, 2026).
  - Company X account @maritime_sh displays 542 followers in a cached third-party mirror ([TwStalker](https://www13.twstalker.com/maritime_sh), retrieved Oct 27, 2026).
  - Founder-owned Open Instinct agent project has 416 stars; Maritime’s SDK has seven stars ([Open Instinct](https://github.com/mariagorskikh/open-instinct), [Maritime SDK](https://github.com/maritime-sh/maritime-sdk), retrieved Oct 27, 2026).
  - Estimated monthly website visits: 21,117, attributed to Semrush; measurement month unspecified ([Crunchbase](https://www.crunchbase.com/organization/maritime), retrieved Oct 27, 2026).
  - Zero YC job postings ([YC](https://www.ycombinator.com/companies/maritime), retrieved Oct 27, 2026).
- **Competitors:**
  - **E2B ($32M raised; revenue unknown):** Latest located round was a $21M Series A led by Insight Partners on July 28, 2025; its sandbox compute is billed per second, compared with Maritime’s monthly agent slots ([E2B funding](https://e2b.dev/resources/updates), [round announcement](https://e2b.dev/resources/series-a), [pricing](https://e2b.dev/pricing)).
  - **Daytona ($91M raised; $2M forward revenue run rate reported February 2026):** Raised a $60M Series B led by FirstMark Growth on October 20, 2026, and offers Linux, Windows, macOS, and GPU sandboxes alongside snapshot/fork workflows ([Series A disclosure](https://www.daytona.io/dotfiles/daytona-raises-24m-series-a-to-give-every-agent-a-computer), [Series B disclosure](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud)).
  - **Modal (over $1.2B raised; over $1B annualized revenue run rate):** Raised a $750M Series D led by Accel on October 14, 2026, and combines sandboxes with inference and training infrastructure ([Modal company](https://modal.com/company), [Series D disclosure](https://modal.com/blog/1-billion-annualized-run-rate-series-d)).
- **Why now:** Maritime’s founders identify OpenClaw’s release and emerging personal-agent products as the catalyst for building persistent, per-user computing infrastructure ([YC launch](https://www.ycombinator.com/companies/maritime), 2026).

## Founders & Team

- **Maria Gorskikh (Co-founder/CEO):**
  - Background: Boston University alumna, previously an MIT visiting lecturer and NANDA researcher, with prior affiliations including Tresata and Radius Intelligence; prior exits: No public data found ([YC founder profile](https://www.ycombinator.com/founders/maria-gorskikh)).
  - Twitter/X: @mariagorskikh; direct count not retrievable; a mirror reports 2.3K followers ([Teapawt](https://teapawt.net/mariagorskikh), Oct 27, 2026, via search snippet).
  - LinkedIn: Headline not retrievable; About states “Building the hosting layer for billions of AI agents,” with 10K followers ([LinkedIn](https://www.linkedin.com/in/mariagorskikh), retrieved Oct 27, 2026, via search snippet).
  - GitHub: @mariagorskikh; Open Instinct, a personal agent built using Maritime, has 416 stars ([GitHub](https://github.com/mariagorskikh/open-instinct), retrieved Oct 27, 2026).
- **Aryaman Shrivastava (Co-founder/CTO):**
  - Background: Boston University College of Arts and Sciences, class of 2026; previously researched agent coordination at MIT NANDA and worked on Stava developer tooling; prior exits: No public data found ([Boston University](https://www.bu.edu/innovate/profile/aryaman-shrivastava/), [YC](https://www.ycombinator.com/founders/aryaman-shrivastava)).
  - Twitter/X: @AryShriv; count not retrievable ([YC founder profile](https://www.ycombinator.com/founders/aryaman-shrivastava)).
  - LinkedIn: Headline not retrievable; profile lists Maritime and 2K followers ([LinkedIn](https://www.linkedin.com/in/aryshriv), retrieved Oct 27, 2026, via search snippet).
  - GitHub: @aryshriv; pinned clawmafia agent-game repository has three stars ([GitHub](https://github.com/AryShriv), retrieved Oct 27, 2026).
- **Co-founder relationship:** Both founders attended Boston University and worked on NANDA agent infrastructure ([Maria YC profile](https://www.ycombinator.com/founders/maria-gorskikh), [Aryaman YC profile](https://www.ycombinator.com/founders/aryaman-shrivastava)).
- **Founder-market fit:** Their documented agent-coordination research and firsthand hosting work align with Maritime’s infrastructure product; Two Lanterns publicly confirms investing ([YC launch](https://www.ycombinator.com/companies/maritime), [Two Lanterns](https://www.linkedin.com/posts/activity-7480385884970823680-gjy5)).

## Key Risks

- **Burst concurrency:** [Inferred]: Simultaneous customer activity can exceed plan capacity, causing wake requests to receive retry responses; upgrading increases available concurrency ([Maritime pricing](https://maritime.sh/pricing)).
- **Memory persistence boundary:** Sleeping computers retain memory snapshots for seven days, after which wake rebuilds from disk rather than restoring process memory ([Maritime Security](https://maritime.sh/security), Oct 20, 2026).
- **Model-call retention:** The privacy policy specifies indefinite retention of proxy request/response contents, including after account deletion; customer-supplied API keys bypass this storage ([Privacy Policy](https://maritime.sh/privacy), Sep 28, 2026).
- **Substitution:** [Inferred]: Docker’s managed cloud microVM offering could compete for developers already using its tools ([Docker](https://www.docker.com/press-release/cloud-sandboxes-extending-secure-ai-agent-isolation-beyond-the-laptop/), Sep 24, 2026).
- **Name ambiguity:** [Inferred]: Marine-industry profiles and shipping-related content on the linked company page create attribution risk when interpreting its employee associations ([LinkedIn](https://www.linkedin.com/company/maritimeai/), retrieved Oct 27, 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Adjacent enterprise agent infrastructure: $550M in 2026; 52.06% CAGR through 2031 ([Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/enterprise-agent-infrastructure-market), Jan 2026). |
| SAM | No public data found |
| Traction | Pre-seed investment confirmed ([Two Lanterns](https://www.linkedin.com/posts/activity-7480385884970823680-gjy5)); 1,932 LinkedIn followers ([LinkedIn](https://www.linkedin.com/company/maritimeai/), retrieved Oct 27, 2026). |
| Revenue Signal | $20/month for 20 agents; $100/100; $500/500; concurrency limits apply; realized revenue: No public data found ([Maritime pricing](https://maritime.sh/pricing), retrieved Oct 27, 2026). |
| Founders | Maria Gorskikh, CEO: Boston University, MIT lecturer, NANDA researcher ([YC](https://www.ycombinator.com/founders/maria-gorskikh)); Aryaman Shrivastava, CTO: Boston University, MIT NANDA, Stava ([YC](https://www.ycombinator.com/founders/aryaman-shrivastava)). |
| Competitors | E2B ($32M raised, revenue unknown, sandbox cloud; [E2B](https://e2b.dev/resources/updates)); Daytona ($91M raised, $2M forward run rate reported Feb 2026, multi-OS sandboxes; [funding](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [revenue](https://www.daytona.io/dotfiles/daytona-raises-24m-series-a-to-give-every-agent-a-computer)); Modal (over $1.2B raised, over $1B annualized run rate, inference/training plus sandboxes; [company](https://modal.com/company), [Oct 2026 disclosure](https://modal.com/blog/1-billion-annualized-run-rate-series-d)). |
| Moat Signals | Documented persistent volumes and snapshot-resume implementation ([Maritime documentation](https://maritime.sh/docs/how-it-works)). |
| Risk Factors | Concurrency caps ([pricing](https://maritime.sh/pricing)), snapshot expiration ([security](https://maritime.sh/security)), indefinite proxy-call retention ([privacy](https://maritime.sh/privacy)). |
| Founder Reach | Maria: LinkedIn 10K ([LinkedIn](https://www.linkedin.com/in/mariagorskikh), via search snippet), Open Instinct 416 stars ([GitHub](https://github.com/mariagorskikh/open-instinct)); Aryaman: LinkedIn 2K ([LinkedIn](https://www.linkedin.com/in/aryshriv), via search snippet), clawmafia three stars ([GitHub](https://github.com/AryShriv)); retrieved Oct 27, 2026. |
| Distribution Signals | Product Hunt launches March 25 and August 30, 2026; 253 followers ([Product Hunt](https://www.producthunt.com/products/maritime), retrieved Oct 27, 2026). |
| Emails | contact@maritime.sh, security@maritime.sh ([Maritime Security](https://maritime.sh/security)). |
