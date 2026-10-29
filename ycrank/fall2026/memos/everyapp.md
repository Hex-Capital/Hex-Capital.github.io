# EveryApp

> Make every app open source

| Field | Value |
|-------|-------|
| Website | https://everyapp.com |
| YC Page | https://www.ycombinator.com/companies/everyapp |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/everyapp)) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location |  |
| Tags | Developer Tools, Open Source, Marketing |
| YC Partner | Charlie Warren ([YC](https://www.ycombinator.com/companies/everyapp)) |
| Emails | support@everyapp.dev ([EveryApp](https://everyapp.com/privacy)); support@openseo.so, privacy@openseo.so ([OpenSEO](https://openseo.so/support)) |

## The Idea

- **Problem:** Developers building internal tools face hosting, authentication, database and deployment work, while businesses seeking alternatives to proprietary subscriptions must operate open-source software themselves ([Northeastern, May 2026](https://www.khoury.northeastern.edu/khoury-alum-ben-senescu-wants-to-make-open-source-software-you-can-actually-use/)).
- **Approach:** EveryApp deploys applications into the customer’s Cloudflare account behind a shared Gateway that handles sign-in, permissions and API credentials, using Workers, D1, R2 and KV ([EveryApp](https://everyapp.com/)).
- **Differentiation:** EveryApp standardizes Cloudflare-native applications and shared identity, whereas Cloudron packages applications on customer servers and Coolify deploys Docker-compatible services across SSH-connected servers ([EveryApp](https://everyapp.com/), [Cloudron](https://www.cloudron.io/), [Coolify](https://coolify.io/)).
- **Business Model:** Self-hosted EveryApp is free, with infrastructure paid separately to Cloudflare; the announced managed service would start at $10/month and scale with usage ([documentation](https://everyapp.com/docs), [YC launch](https://www.ycombinator.com/launches/WKA-everyapp-make-every-app-open-source)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Distribution uses public GitHub repositories, setup prompts for coding agents, Discord support and promotion from the existing OpenSEO website ([EveryApp](https://everyapp.com/), [OpenSEO](https://openseo.so/)).

## Defensibility

- **Moat today:** [Inferred]: Gateway permissions, application databases and configured integrations could create migration work, but public evidence does not establish measured switching costs ([documentation](https://everyapp.com/docs)).
- **Future moat:** [Inferred]: A growing catalog of compatible apps and shared integrations could attract developers and users, but public sources do not establish ecosystem network effects ([app catalog](https://everyapp.com/)).
- **Market structure:** [Inferred]: No structural barrier identified at this stage, because the MIT license permits commercial reuse and competing hosting platforms already exist ([license](https://github.com/every-app/every-app/blob/main/LICENSE), [Coolify](https://coolify.io/)).
- **Commoditization risk:** Other hosting providers can legally copy, modify and sell the platform under its MIT license, while Coolify already offers deployment management through MCP for AI agents ([license](https://github.com/every-app/every-app/blob/main/LICENSE), [Coolify](https://coolify.io/)).

## Market & Traction

- **Traction signals:**
  - Current EveryApp platform: 351 GitHub stars and 16 forks ([GitHub, accessed Oct 27, 2026](https://github.com/every-app/every-app)).
  - Current platform launch: October 26, 2026, with 128,561 launch-post views recorded the following day ([Doomers tracker, Oct 27, 2026](https://doomers.ai/launches/everyapp)).
  - Product history: the founder describes an initial January Gateway launch, subsequently building standalone OpenSEO, and returning to the broader platform launch; OpenSEO remains a separately identified application ([YC launch](https://www.ycombinator.com/launches/WKA-everyapp-make-every-app-open-source)).
  - Earlier standalone product, OpenSEO: 25.3K GitHub stars ([GitHub, accessed Oct 27, 2026](https://github.com/every-app/open-seo)).
  - OpenSEO: company claims “3,000+ entrepreneurs,” without identifying how many pay ([OpenSEO, accessed Oct 27, 2026](https://openseo.so/)).
  - OpenSEO: Product Hunt #1 daily on July 19, #3 monthly for July, and #2 daily on October 8, 2026; rating 5.0 from two reviews ([Product Hunt, accessed Oct 27, 2026](https://www.producthunt.com/products/openseo?launch=openseo-2)).
  - OpenSEO: 558 LinkedIn followers ([LinkedIn, accessed Oct 27, 2026](https://www.linkedin.com/company/openseo-so/)).
  - Company and founder coverage: Northeastern’s Khoury College published a profile on May 7, 2026 ([Northeastern](https://www.khoury.northeastern.edu/khoury-alum-ben-senescu-wants-to-make-open-source-software-you-can-actually-use/)).
  - Hiring: zero jobs posted on YC ([YC Jobs, accessed Oct 27, 2026](https://www.ycombinator.com/companies/everyapp/jobs)).
- **Competitors:**
  - **Cloudron** (bootstrapped; amount raised: No public data found; revenue unknown): runs packaged apps with updates, backups and centralized users on customer servers ([company funding description](https://www.cloudron.io/opensource.html), [product](https://www.cloudron.io/)).
  - **Coolify** (company states no investors; amount raised: No public data found; revenue unknown): supports Docker-compatible apps across customer servers rather than requiring EveryApp’s Cloudflare stack ([Coolify](https://coolify.io/)).
  - **Appsmith** ($51.5M raised, [CB Insights via search snippet](https://www.cbinsights.com/company/appsmith/financials); Indian entity FY25 revenue ₹33.9 crore, [Inc42](https://inc42.com/company/appsmith/)): adjacent internal-app builder rather than an app-hosting catalog, with a latest disclosed $41M Series B led by Insight Partners in June 2022 ([funding announcement](https://www.appsmith.com/blog/series-b-funding), [product](https://www.appsmith.com/)).
- **Why now:** [Inferred]: Improved coding agents during 2026 reduce application-building work, shifting attention toward deployment and access management; Senescu describes building OpenSEO after coding agents improved ([founder interview, Aug 2026](https://the-unscripted-seo-interview-podcast.castos.com/episodes/ben-senescu-on-open-source-seo-and-the-99-ceiling)).

## Founders & Team

- **Ben Senescu (Founder/CEO):**
  - Background: Northeastern computer science graduate, class of 2021; previously senior software engineer at Klaviyo, worked at Patrol, and co-founded musician-subscription platform artst ([Northeastern](https://www.khoury.northeastern.edu/khoury-alum-ben-senescu-wants-to-make-open-source-software-you-can-actually-use/), [YC profile](https://www.ycombinator.com/founders/ben-senescu)).
  - Twitter/X: @bensenescu, approximately 5K followers according to the launch tracker; direct X count not retrievable ([YC profile](https://www.ycombinator.com/founders/ben-senescu), [Doomers, Oct 27, 2026](https://doomers.ai/launches/everyapp)).
  - LinkedIn: visible affiliation “OpenSEO”; headline not retrievable, with 3K followers shown in the indexed profile ([LinkedIn via search snippet, accessed Oct 27, 2026](https://www.linkedin.com/in/bensenescu)).
  - GitHub: @bensenescu, 228 followers; associated project OpenSEO has 25.3K stars ([profile](https://github.com/bensenescu), [repository, accessed Oct 27, 2026](https://github.com/every-app/open-seo)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Senescu’s prior software-engineering work and construction of OpenSEO on EveryApp document experience building the applications and infrastructure the platform targets; YC publicly identifies him as its founder ([Northeastern](https://www.khoury.northeastern.edu/khoury-alum-ben-senescu-wants-to-make-open-source-software-you-can-actually-use/), [YC](https://www.ycombinator.com/companies/everyapp)).

## Key Risks

- **Cloudflare dependency:** [Inferred]: Requiring Cloudflare primitives limits compatibility with existing software and makes migration to another runtime an engineering project ([architecture](https://everyapp.com/)).
- **Upgrade compatibility:** EveryApp explicitly declines to promise backward compatibility, although deployments preserve data and create database restore points ([early-adopter documentation](https://everyapp.com/docs/early-adopters)).
- **Commercial replication:** [Inferred]: MIT licensing permits competing managed offerings using the same code, limiting exclusivity over software functionality ([license](https://github.com/every-app/every-app/blob/main/LICENSE)).
- **Name ambiguity:** An unrelated EveryApp digital agency uses everyapp.shop and identifies Nicolò Cauli as founder; its products and metrics should be excluded ([agency website](https://everyapp.shop/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | EveryApp: 351 stars ([GitHub, Oct 27, 2026](https://github.com/every-app/every-app)); earlier standalone OpenSEO: 25.3K stars ([GitHub, Oct 27, 2026](https://github.com/every-app/open-seo)), company claims 3,000+ entrepreneurs ([OpenSEO](https://openseo.so/)). |
| Revenue Signal | EveryApp self-hosted: free ([docs](https://everyapp.com/docs)); managed service announced from $10/month ([YC launch](https://www.ycombinator.com/launches/WKA-everyapp-make-every-app-open-source)); OpenSEO Base/Pro/Agency: $10/$30/$200 monthly, including $10/$36/$240 usage respectively, with additional usage charged separately ([pricing, Oct 27, 2026](https://openseo.so/pricing)). |
| Founders | Ben Senescu, Founder/CEO: Northeastern CS graduate; former Klaviyo senior engineer; OpenSEO creator ([YC profile](https://www.ycombinator.com/founders/ben-senescu), [Northeastern](https://www.khoury.northeastern.edu/khoury-alum-ben-senescu-wants-to-make-open-source-software-you-can-actually-use/)). |
| Competitors | Cloudron: bootstrapped, revenue unknown, server-hosted app catalog ([Cloudron](https://www.cloudron.io/opensource.html)); Coolify: no investors, revenue unknown, deployment across customer servers ([Coolify](https://coolify.io/)); Appsmith: $51.5M raised ([CB Insights via search snippet](https://www.cbinsights.com/company/appsmith/financials)), Indian entity FY25 revenue ₹33.9 crore ([Inc42](https://inc42.com/company/appsmith/)), internal-app builder ([Appsmith](https://www.appsmith.com/)). |
| Moat Signals | No public data found |
| Risk Factors | Cloudflare-specific runtime ([EveryApp](https://everyapp.com/)), backward compatibility not promised ([documentation](https://everyapp.com/docs/early-adopters)), commercially reusable MIT code ([license](https://github.com/every-app/every-app/blob/main/LICENSE)). |
| Founder Reach | Ben Senescu: X approximately 5K ([Doomers, Oct 27, 2026](https://doomers.ai/launches/everyapp)); LinkedIn 3K ([LinkedIn via search snippet](https://www.linkedin.com/in/bensenescu)); GitHub 228 followers ([GitHub, Oct 27, 2026](https://github.com/bensenescu)). |
| Distribution Signals | EveryApp launch: 128,561 X views ([Doomers, Oct 27, 2026](https://doomers.ai/launches/everyapp)); OpenSEO: Product Hunt #1 daily, July 19, and #2 daily, October 8, 2026 ([Product Hunt](https://www.producthunt.com/products/openseo?launch=openseo-2)); Discord linked from [EveryApp](https://everyapp.com/). |
| Emails | support@everyapp.dev ([EveryApp privacy](https://everyapp.com/privacy)); support@openseo.so, privacy@openseo.so ([OpenSEO support](https://openseo.so/support)). |
