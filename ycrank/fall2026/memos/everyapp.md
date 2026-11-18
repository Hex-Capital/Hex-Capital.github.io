# EveryApp

> Making every SaaS open source

| Field | Value |
|-------|-------|
| Website | https://everyapp.com |
| YC Page | https://www.ycombinator.com/companies/everyapp |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/everyapp)) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location |  |
| Tags | Developer Tools, Open Source, Marketing |
| YC Partner | Charlie Warren ([Y Combinator](https://www.ycombinator.com/companies/everyapp)) |
| Emails | ben@openseo.so (Ben Senescu, [archived OpenSEO README](https://github.com/smarks26/everyapp-open-seo)), support@everyapp.dev (EveryApp support, [EveryApp Privacy](https://everyapp.com/privacy)), support@openseo.so (OpenSEO support and cancellation), legal@openseo.so (legal notices), privacy@openseo.so (privacy requests), DMCA@openseo.so (copyright notices) ([OpenSEO Terms](https://openseo.so/terms-and-conditions)) |

## The Idea

- **Problem:** Small teams using subscription SaaS face per-seat costs and limited customization, while self-hosting open-source or agent-built alternatives requires setting up deployment, authentication and shared access ([EveryApp Docs](https://everyapp.com/docs), [Northeastern Khoury College, May 2026](https://www.khoury.northeastern.edu/khoury-alum-ben-senescu-wants-to-make-open-source-software-you-can-actually-use/)).
- **Approach:** EveryApp runs its Gateway and apps as separate Workers in the customer’s Cloudflare account, with shared sign-in, centrally brokered API keys and app actions exposed to agents through MCP ([EveryApp architecture](https://everyapp.com/docs/how-it-works), [Launch YC, Oct 2026](https://www.ycombinator.com/launches/WKA-everyapp-make-every-app-open-source)).
- **Differentiation:** EveryApp pairs ready-to-install business apps with an agent-oriented Cloudflare deployment stack, compared with Cloudron’s Ubuntu-based app catalog and the visual internal-tool builders from Appsmith and Retool ([EveryApp Docs](https://everyapp.com/docs), [Cloudron](https://docs.cloudron.io/installation/), [Appsmith](https://www.appsmith.com/), [Retool](https://retool.com/)).
- **Business Model:** Self-hosted EveryApp is free, customers pay Cloudflare and connected providers directly, and the company announced a managed service planned to start at $10/month and scale with usage ([EveryApp Pricing](https://everyapp.com/pricing), [Launch YC, Oct 2026](https://www.ycombinator.com/launches/WKA-everyapp-make-every-app-open-source)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** EveryApp distributes through GitHub, an agent-assisted self-install flow and Discord, and features OpenSEO as an entry point from its homepage ([EveryApp](https://everyapp.com/), [GitHub](https://github.com/every-app/every-app)).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: A catalog of third-party apps could attract more users and contributors, but the public signal is the ability to publish installable apps through GitHub releases ([EveryApp app publishing docs](https://everyapp.com/docs/create-an-app)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** The MIT license allows competing hosts to reuse the Gateway code, and Cloudflare already offers deployment infrastructure for coding agents ([EveryApp GitHub](https://github.com/every-app/every-app), [Cloudflare, Apr 2026](https://blog.cloudflare.com/agents-stripe-projects/)).

## Market & Traction

- **Traction signals:**
  - EveryApp launched a Gateway-only version in January 2026, then built OpenSEO as a standalone product and relaunched the platform with installable apps on October 26, 2026 ([Launch YC](https://www.ycombinator.com/launches/WKA-everyapp-make-every-app-open-source), [Reveneau, Oct 2026](https://reveneau.com/ainews/everyapp-yc-fall-2026-open-source-saas-cloudflare-managed-platform)).
  - EveryApp platform repository reached 906 GitHub stars, and the organization had 308 GitHub followers ([GitHub, Nov 17, 2026](https://github.com/every-app)).
  - EveryApp’s launch post received 203,309 X views as of November 9 ([Doomers AI, Nov 2026](https://doomers.ai/launches/everyapp)).
  - EveryApp had 0 open roles listed on YC ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/everyapp/jobs)).
  - EveryApp’s relaunch was covered by [Reveneau, Oct 26, 2026](https://reveneau.com/ainews/everyapp-yc-fall-2026-open-source-saas-cloudflare-managed-platform) and [Fondo, Oct 30, 2026](https://fondo.com/blog/everyapp-puts-agent-built-business-tools-inside-your-own-cloudflare-account).
  - Standalone OpenSEO brought in hundreds of paying customers following its July launch, according to Senescu ([LinkedIn, Aug 2026](https://www.linkedin.com/posts/bensenescu_how-to-win-on-product-hunt-in-2026-from-activity-7495876088267427841-QMEy)).
  - Standalone OpenSEO reached 28,098 GitHub stars ([GitHub, Nov 17, 2026](https://github.com/every-app)).
  - Standalone OpenSEO ranked #1 of the day on July 19, #3 for July and #2 of the day on October 8 ([Product Hunt, 2026](https://www.producthunt.com/products/openseo)).
  - Standalone OpenSEO had 627 LinkedIn followers and approximately 3,200 X followers ([LinkedIn](https://www.linkedin.com/company/openseo-so/), [public X mirror](https://www.xitter.cf/openseo), Nov 2026).
  - Customer testimonial, OpenSEO: Importivity reported approximately 7× organic clicks in six months after building a content workflow on an OpenSEO fork ([OpenSEO case study, Oct 2026](https://openseo.so/blogs/replace-seo-agency-with-ai)).
  - Dealroom lists $125,000 in early funding under OpenSEO ([Dealroom, accessed Nov 2026](https://dealroom.co/just-founded/openseo/)).
- **Competitors:**
  - Cloudron (funding unknown, revenue unknown): Ubuntu-based app catalog with managed updates, backups and shared sign-in ([Cloudron](https://www.cloudron.io/), [installation docs](https://docs.cloudron.io/installation/)).
  - Appsmith ($51.5M raised, revenue unknown): Open-source low-code builder for internal apps, with a $41M Series B led by Insight Partners in June 2022 ([Appsmith announcement](https://www.businesswire.com/news/home/20220622005219/en/Appsmith-Raises-$41-Million-to-Scale-Open-Source-Platform-that-Speeds-Critical-Internal-App-Development)).
  - Budibase ($9.25M raised, revenue unknown): Self-hosted builder for operations apps, agents and automations, with a $7M Seed II led by SignalFire in November 2022 ([Budibase funding](https://budibase.com/blog/updates/budibase-raises-7m-to-help-every-company-on-the-planet-build-their-own-tools/), [Budibase 4.0](https://budibase.com/blog/budibase-4-0/)).
  - Retool ($141M raised, $120M estimated ARR in October 2025): Enterprise internal-app builder with AI generation and self-hosting, with a $45M Series C2 in July 2022 led by Sequoia according to Sacra ([Retool](https://retool.com/), [Retool funding announcement](https://retool.com/newsroom/series-c2), [Sacra](https://sacra.com/c/retool/)).
- **Why now:** [Inferred]: Cloudflare’s April 2026 rollout of agent-driven account creation and deployment reduces the manual steps between generating an app and running it for a team ([Cloudflare, Apr 2026](https://blog.cloudflare.com/agents-stripe-projects/)).

## Founders & Team

- **Ben Senescu (Founder/CEO):**
  - Background: Northeastern computer science graduate, class of 2021, artst co-founder, former Klaviyo senior software engineer and Patrol AI founding engineer building compliance agents, with `ben@openseo.so` published as his direct business email ([Northeastern Khoury College](https://www.khoury.northeastern.edu/khoury-alum-ben-senescu-wants-to-make-open-source-software-you-can-actually-use/), [YC founder profile](https://www.ycombinator.com/founders/ben-senescu), [archived OpenSEO README](https://github.com/smarks26/everyapp-open-seo)).
  - Twitter/X: @bensenescu, approximately 5,300 followers ([YC founder profile](https://www.ycombinator.com/founders/ben-senescu), [public X mirror, Nov 2026](https://www.xitter.cf/bensenescu)).
  - LinkedIn: “OpenSEO” ([LinkedIn profile, via search snippet](https://www.linkedin.com/in/bensenescu)), with 3,557 followers on his [public LinkedIn post, Nov 2026 snapshot](https://www.linkedin.com/posts/bensenescu_how-to-win-on-product-hunt-in-2026-from-activity-7495876088267427841-QMEy).
  - GitHub: @bensenescu, with 199 stars for his personal repo Downy and 28,098 stars for the organization-owned OpenSEO project ([Downy](https://github.com/bensenescu/downy), [EveryApp GitHub, Nov 2026](https://github.com/every-app)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Senescu built compliance agents at Patrol and used EveryApp to prototype and deploy OpenSEO, and YC lists Charlie Warren as primary partner ([Launch YC](https://www.ycombinator.com/launches/WKA-everyapp-make-every-app-open-source), [Northeastern Khoury College](https://www.khoury.northeastern.edu/khoury-alum-ben-senescu-wants-to-make-open-source-software-you-can-actually-use/), [YC directory](https://www.ycombinator.com/companies/everyapp)).

## Key Risks

- **Cloudflare dependency:** [Inferred]: Changes to Workers pricing or Cloudflare’s storage primitives could affect deployment costs or require migration work, while EveryApp offers spending caps for connected services ([EveryApp architecture](https://everyapp.com/docs/how-it-works), [EveryApp Pricing](https://everyapp.com/pricing)).
- **Self-hosting friction:** [Inferred]: Requiring a paid Cloudflare account, a configured domain and service credentials can interrupt setup, which EveryApp addresses with guided installation and a proposed managed tier ([EveryApp Quick Start](https://everyapp.com/docs/quickstart), [Launch YC](https://www.ycombinator.com/launches/WKA-everyapp-make-every-app-open-source)).
- **Standalone adoption transfer:** [Inferred]: OpenSEO users can stay on its hosted service or deploy it independently via Docker or Cloudflare, while EveryApp offers shared sign-in and team access as reasons to install it through the Gateway ([OpenSEO self-hosting docs](https://openseo.so/docs/self-hosting)).
- **Name collision:** [Inferred]: The separate EveryApp at everyapp.pro can cause misattribution of app listings and downloads, while YC links directly to everyapp.com ([everyapp.pro](https://everyapp.pro/download), [YC directory](https://www.ycombinator.com/companies/everyapp)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | EveryApp: 906 GitHub stars ([GitHub, Nov 2026](https://github.com/every-app)), 203,309 launch-post views ([Doomers AI, Nov 2026](https://doomers.ai/launches/everyapp)). Standalone OpenSEO: hundreds of paying customers, founder-reported ([LinkedIn, Aug 2026](https://www.linkedin.com/posts/bensenescu_how-to-win-on-product-hunt-in-2026-from-activity-7495876088267427841-QMEy)), 28,098 GitHub stars ([GitHub, Nov 2026](https://github.com/every-app)). |
| Revenue Signal | EveryApp self-hosting is free ([EveryApp Pricing](https://everyapp.com/pricing)), managed service announced from $10/month ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/WKA-everyapp-make-every-app-open-source)). Standalone OpenSEO hosted tiers are $10, $30 and $100/month plus extra usage ([OpenSEO Pricing, Nov 2026](https://openseo.so/pricing)). |
| Founders | Ben Senescu (Founder/CEO), Northeastern computer science, former Klaviyo senior engineer and Patrol AI founding engineer ([Northeastern Khoury College](https://www.khoury.northeastern.edu/khoury-alum-ben-senescu-wants-to-make-open-source-software-you-can-actually-use/), [Launch YC](https://www.ycombinator.com/launches/WKA-everyapp-make-every-app-open-source)). |
| Competitors | Cloudron (funding unknown, revenue unknown, Ubuntu app catalog) ([Cloudron](https://www.cloudron.io/)), Appsmith ($51.5M raised, revenue unknown, low-code app builder) ([Appsmith](https://www.businesswire.com/news/home/20220622005219/en/Appsmith-Raises-$41-Million-to-Scale-Open-Source-Platform-that-Speeds-Critical-Internal-App-Development)), Budibase ($9.25M raised, revenue unknown, operations automations) ([Budibase](https://budibase.com/blog/updates/budibase-raises-7m-to-help-every-company-on-the-planet-build-their-own-tools/)), Retool ($141M raised, $120M estimated ARR in Oct 2025, enterprise internal-app builder) ([Retool](https://retool.com/), [Sacra](https://sacra.com/c/retool/)). |
| Moat Signals | No public data found |
| Risk Factors | Cloudflare dependency and setup requirements ([EveryApp Quick Start](https://everyapp.com/docs/quickstart)), standalone OpenSEO deployment options ([OpenSEO Docs](https://openseo.so/docs/self-hosting)). |
| Founder Reach | Ben Senescu, approximately 5,300 X followers, 3,557 LinkedIn followers, 199 stars on Downy ([public X mirror](https://www.xitter.cf/bensenescu), [LinkedIn](https://www.linkedin.com/posts/bensenescu_how-to-win-on-product-hunt-in-2026-from-activity-7495876088267427841-QMEy), [GitHub](https://github.com/bensenescu/downy), Nov 2026). |
| Distribution Signals | EveryApp: GitHub and Discord ([EveryApp GitHub](https://github.com/every-app/every-app)). Standalone OpenSEO: Product Hunt #1 of day and #3 of month in July, #2 of day in October ([Product Hunt, 2026](https://www.producthunt.com/products/openseo)). |
| Emails | ben@openseo.so (Ben Senescu, [archived OpenSEO README](https://github.com/smarks26/everyapp-open-seo)), support@everyapp.dev (EveryApp support, [EveryApp Privacy](https://everyapp.com/privacy)), support@openseo.so (OpenSEO support and cancellation), legal@openseo.so (legal notices), privacy@openseo.so (privacy requests), DMCA@openseo.so (copyright notices) ([OpenSEO Terms](https://openseo.so/terms-and-conditions)). |
