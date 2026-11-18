# Munito AI

> Open-model inference provider for Europe, private by default.

| Field | Value |
|-------|-------|
| Website | https://munito.ai |
| YC Page | https://www.ycombinator.com/companies/munito-ai |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/munito-ai)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 1 |
| Location | Paris, Île-de-France, France; Remote |
| Tags | Enterprise, Infrastructure, AI |
| YC Partner | Aaron Epstein ([Y Combinator](https://www.ycombinator.com/companies/munito-ai)) |
| Emails | founders@munito.ai for founder and model requests ([Launch YC](https://www.ycombinator.com/launches/WJe-munito-ai-open-model-inference-provider-for-europe-private-by-default)), hello@munito.ai for contracts ([Munito Docs](https://docs.munito.ai/company)), support@munito.ai for support ([Munito](https://munito.ai/)), legal@munito.ai for privacy and legal notices ([Munito Privacy Policy](https://legal.munito.ai/privacy)), security@munito.ai for security reports ([Munito Trust Center](https://trust.munito.ai/)) |

## The Idea

- **Problem:** European developers serving finance, healthcare and legal customers need open-model inference with control over where sensitive data is processed and stored, while existing options include running GPUs in-house, buying inference bundled with cloud infrastructure, or using a model lab’s API ([Launch YC](https://www.ycombinator.com/launches/WJe-munito-ai-open-model-inference-provider-for-europe-private-by-default)).
- **Approach:** Munito operates rented GPUs, serves models such as DeepSeek, GLM and Qwen through OpenAI- and Anthropic-compatible APIs, and offers an EU endpoint that keeps inference and explicitly stored content in the EU, with zero retention by default for transient requests ([Munito launch post](https://munito.ai/blog/launching-inference), [Munito Privacy Policy](https://legal.munito.ai/privacy)).
- **Differentiation:** Munito offers self-serve EU routing for open models from several labs, while Mistral’s regional API serves its own model family and Together AI documents EU residency for dedicated deployments ([Munito Docs](https://docs.munito.ai/company), [Mistral Docs](https://docs.mistral.ai/inference/regional-inference), [Together AI Support](https://support.together.ai/articles/8079447813-eu-data-centers-and-dedicated-model-deployment)).
- **Business Model:** Munito offers a free inference tier, prepaid usage by token or page, contracted volume rates and dedicated endpoints, plus sandbox plans starting at $15/month ([Munito Pricing, Nov 2026](https://munito.ai/pricing), [Munito Docs](https://docs.munito.ai/company)).
- **TAM/SAM:** Meticulous Research estimates independent token-priced inference services at $2.5–4.0B in 2026 and projects 35% CAGR through 2033, while the broader European inference PaaS market was estimated at $4.53B in 2025 with 40.3% projected CAGR through 2030 ([Meticulous Research](https://www.meticulousresearch.com/meticulous-next/token-priced-ai-inference-services-outlook-2026-2033), [MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/geography/ai-inference-platform-as-a-service-paas-market/Europe)).
- **GTM / Distribution:** Munito combines self-serve signup and direct enterprise contracts with distribution through the Opper AI and RouterPlus gateways and the OpenCode provider catalog ([Launch YC](https://www.ycombinator.com/launches/WJe-munito-ai-open-model-inference-provider-for-europe-private-by-default), [Opper AI](https://opper.ai/blog/munito-partnership), [RouterPlus](https://routerplus.com/providers/munito/), [Munito Changelog](https://docs.munito.ai/changelog)).

## Defensibility

- **Moat today:** Munito operates its own serving layer on rented GPUs and reports running experiments that benchmark new serving configurations against its existing stack ([Munito launch post](https://munito.ai/blog/launching-inference), [Eryshev on X via Nitter, Nov 2026](https://www.nitter.cf/munitoai)).
- **Future moat:** [Inferred]: Repeated tuning across models and GPU types could lower serving costs if the gains carry over to customer workloads, with public evidence limited to Munito’s account of its internal experiments ([Eryshev on X via Nitter, Nov 2026](https://www.nitter.cf/munitoai)).
- **Market structure:** No structural barrier identified at this stage, with Mistral already offering an EU inference endpoint and Together AI offering EU dedicated deployments ([Mistral Docs](https://docs.mistral.ai/inference/regional-inference), [Together AI Support](https://support.together.ai/articles/8079447813-eu-data-centers-and-dedicated-model-deployment)).
- **Commoditization risk:** Nebius already serves overlapping DeepSeek, GLM and Qwen models, and Munito’s use of standard SDK interfaces reduces the integration work needed to switch among compatible endpoints ([Nebius release notes, Oct 2026](https://nebius.com/release-notes/posts/q3-2026), [Munito launch post](https://munito.ai/blog/launching-inference)).

## Market & Traction

- **Traction signals:**
  - Live Opper AI gateway partnership for EU-hosted inference ([Opper AI, Nov 16, 2026](https://opper.ai/blog/munito-partnership)).
  - Aleph Alpha’s Kolibri 1 went live on RouterPlus through Munito ([RouterPlus, Nov 4, 2026](https://routerplus.com/news/kolibri-1-aleph-alpha-on-routerplus)).
  - $500K convertible note reported for Oct 1, 2026 ([CB Insights, via search snippet](https://www.cbinsights.com/company/munito-ai/financials)).
  - Public inference launch announced Oct 11, followed by a product launch post Oct 23 ([Munito on X via Nitter](https://www.nitter.cf/munitoai/status/2109409403611054184), [Munito Blog, Oct 2026](https://munito.ai/blog/launching-inference)).
  - Coverage in Eight Capital’s YC Fall 2026 Seed Spotlight ([Eight Capital, Oct 23, 2026](https://www.eightcapital.com/spotlight/seed-spotlight-y-combinator-f26-week-6)).
  - 492 LinkedIn followers and 50 X followers ([LinkedIn, Nov 2026](https://www.linkedin.com/company/munito-ai), [X via Nitter, Nov 2026](https://www.nitter.cf/munitoai)).
  - 0 active postings on YC Jobs ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/munito-ai/jobs)).
- **Competitors:**
  - **Nebius** ($16.62B net financing inflow in the first nine months of 2026, $6.4B group annualized run-rate revenue at September end): Token Factory adds fine-tuning and isolated capacity within a full-stack cloud, and Nebius announced a $3.5B senior secured facility from Citi on Oct 22, 2026 ([Nebius Q3 results](https://assets.nebius.com/assets/e2ac679c-fc62-4799-ba0e-6611e59c6863/Nebius-2026-Q3.pdf), [shareholder letter](https://assets.nebius.com/assets/5bc733ff-bed7-415c-af10-74ce7881a764/Nebius-SHL-2026-Q3.pdf), [Token Factory](https://nebius.com/services/token-factory), [Citi facility](https://nebius.com/newsroom/nebius-secures-3-5-billion-financing-facility-with-citi)).
  - **Mistral AI** (€6B raised per CEO, approximately $400M annualized revenue in Jan 2026): develops and serves its own models and raised a €3B Series D in Sep 2026 led by Samsung Electronics alongside Scaleup Europe Fund and PSG Equity ([Le Monde CEO interview](https://www.lemonde.fr/en/economy/article/2026/09/24/arthur-mensch-ceo-of-mistral-ai-ai-is-software-it-can-be-controlled_6757890_19.html), [Stanford AI Index](https://hai.stanford.edu/assets/files/ai_index_report_2026_chapter_4_economy.pdf), [Mistral](https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier/)).
  - **Fireworks AI** (over $1.8B raised, over $1B annualized revenue in Jul 2026): combines custom-model training with serving and raised a $1.505B Series D on Jul 16, 2026 led by Atreides Management, Index Ventures and TCV ([Sacra](https://sacra.com/c/fireworks-ai/), [Fireworks](https://fireworks.ai/news/fireworks-raises-1-5-billion-series-d)).
  - **Together AI** (approximately $1.33B raised, estimated $1B annualized revenue in Feb 2026): pairs model training with dedicated EU inference and raised an $800M Series C on Jul 1, 2026 led by Aramco Ventures, per Sacra ([Sacra](https://sacra.com/c/together-ai/), [Together AI](https://www.together.ai/blog/announcing-our-series-c), [Together AI Support](https://support.together.ai/articles/8079447813-eu-data-centers-and-dedicated-model-deployment)).
- **Why now:** [Inferred]: The Oct 2026 Dublin Declaration’s commitment to sovereign AI and investment in digital infrastructure gives European buyers a policy basis for prioritizing regional deployment ([Irish Department of Enterprise, Tourism and Employment, Oct 2026](https://enterprise.gov.ie/en/news-and-events/department-news/2026/october/10152026.html)).

## Founders & Team

- **Alexey Eryshev (Founder/CEO):** Founder contact is founders@munito.ai for model and use-case requests, with a direct business email listed as “No public data found” ([Launch YC](https://www.ycombinator.com/launches/WJe-munito-ai-open-model-inference-provider-for-europe-private-by-default)).
  - **Background:** Attended Telecom ParisTech, led inference and built Le Chat’s Deep Research at Mistral AI, built Hosting Services at Airbnb, and previously worked at Meta (prior exits — No public data found) ([LinkedIn](https://fr.linkedin.com/in/alexeyeryshev), [YC founder profile](https://www.ycombinator.com/founders/alexey-eryshev), [founder website](https://alexeyeryshev.com/)).
  - **Twitter/X:** @alexeyeryshev, 219 followers ([YC founder profile](https://www.ycombinator.com/founders/alexey-eryshev), [X via Nitter, Nov 2026](https://www.nitter.cf/alexeyeryshev)).
  - **LinkedIn:** “Munito AI” is the affiliation shown on his public profile, which displays approximately 3,000 followers ([LinkedIn](https://fr.linkedin.com/in/alexeyeryshev)).
  - **GitHub:** @alexeyeryshev, with 1 star on `yc-idea-validator` ([GitHub profile](https://github.com/alexeyeryshev), [repository, Nov 2026](https://github.com/alexeyeryshev/yc-idea-validator)).
- **Co-founder relationship:** YC lists Eryshev as the sole founder ([Y Combinator](https://www.ycombinator.com/companies/munito-ai)).
- **Founder-market fit:** Eryshev’s team built Mistral’s inference API and products before he founded Munito, which is backed by Y Combinator ([YC founder profile](https://www.ycombinator.com/founders/alexey-eryshev), [Munito Company Facts](https://docs.munito.ai/company)).

## Key Risks

- **Enterprise procurement:** Buyers requiring completed SOC 2 or ISO 27001 reviews could delay approval while both are in progress, and Munito publishes its controls and supplies a data processing agreement for vendor review ([Munito Trust Center](https://trust.munito.ai/), [Munito DPA](https://legal.munito.ai/dpa)).
- **GPU supply:** Reliance on rented GPUs exposes Munito to capacity constraints at upstream providers, with sourcing across vetted data centers and clouds and a customer-hosted option ([Y Combinator](https://www.ycombinator.com/companies/munito-ai), [Munito](https://munito.ai/)).
- **Model continuity:** Munito’s terms allow preview models to change or disappear without notice, which could interrupt applications pinned to them, while generally available models carry at least three months’ removal notice ([Munito Terms, Nov 2026](https://legal.munito.ai/terms)).
- **Name ambiguity:** Short-name searches can surface SCI MUNITO, a separate French registrant, so legal records can be matched using Munito AI France’s SIREN 131 309 247 ([French business register](https://annuaire-entreprises.data.gouv.fr/entreprise/munito-ai-france-131309247), [SCI MUNITO registration](https://www.pappers.fr/entreprise/sci-munito-953277522/documents/SCI%20MUNITO%20-%20Statuts%20constitutifs%2009-06-2023.pdf)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.5–4.0B in 2026 for independent token-priced inference, with 35% projected CAGR through 2033 ([Meticulous Research](https://www.meticulousresearch.com/meticulous-next/token-priced-ai-inference-services-outlook-2026-2033)) |
| SAM | No public data found |
| Traction | Opper AI and RouterPlus integrations ([Opper AI, Nov 16, 2026](https://opper.ai/blog/munito-partnership), [RouterPlus, Nov 4, 2026](https://routerplus.com/news/kolibri-1-aleph-alpha-on-routerplus)); $500K convertible note reported Oct 1, 2026 ([CB Insights, via search snippet](https://www.cbinsights.com/company/munito-ai/financials)); 492 LinkedIn followers and 50 X followers ([LinkedIn, Nov 2026](https://www.linkedin.com/company/munito-ai), [X via Nitter, Nov 2026](https://www.nitter.cf/munitoai)); 0 YC job postings ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/munito-ai/jobs)) |
| Revenue Signal | Free tier, prepaid usage and contracted rates; GLM-5.3-Flash EU Standard at $0.15 input and $0.50 output per million tokens; sandbox plans from $15/month ([Munito Pricing](https://munito.ai/pricing), [Munito model prices, Nov 2026](https://docs.munito.ai/models)) |
| Founders | Alexey Eryshev (Founder/CEO), former Mistral AI inference lead and builder of Airbnb Hosting Services ([YC founder profile](https://www.ycombinator.com/founders/alexey-eryshev)) |
| Competitors | Nebius ($16.62B net financing inflow through Sep 2026, $6.4B group run rate, full-stack cloud and inference) ([Nebius results](https://nebius.com/newsroom/nebius-reports-third-quarter-2026-financial-results), [Token Factory](https://nebius.com/services/token-factory)); Mistral AI (€6B raised, approximately $400M annualized revenue in Jan 2026, first-party models) ([Le Monde](https://www.lemonde.fr/en/economy/article/2026/09/24/arthur-mensch-ceo-of-mistral-ai-ai-is-software-it-can-be-controlled_6757890_19.html), [Stanford AI Index](https://hai.stanford.edu/assets/files/ai_index_report_2026_chapter_4_economy.pdf), [Mistral](https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier/)); Fireworks AI (over $1.8B raised, over $1B annualized revenue, custom training and serving) ([Sacra](https://sacra.com/c/fireworks-ai/), [Fireworks](https://fireworks.ai/news/fireworks-raises-1-5-billion-series-d)); Together AI (approximately $1.33B raised, estimated $1B annualized revenue, training and dedicated EU inference) ([Sacra](https://sacra.com/c/together-ai/), [Together AI Support](https://support.together.ai/articles/8079447813-eu-data-centers-and-dedicated-model-deployment)) |
| Moat Signals | Company-operated serving layer on rented GPUs and internal benchmarking of serving configurations ([Munito launch post](https://munito.ai/blog/launching-inference), [Eryshev on X via Nitter](https://www.nitter.cf/munitoai)) |
| Risk Factors | Pending certifications, rented-GPU dependence, preview-model removal ([Munito Trust Center](https://trust.munito.ai/), [YC profile](https://www.ycombinator.com/companies/munito-ai), [Munito Terms](https://legal.munito.ai/terms)) |
| Founder Reach | Alexey Eryshev, 219 X followers, approximately 3,000 LinkedIn followers, and 1 GitHub star on `yc-idea-validator` ([X via Nitter](https://www.nitter.cf/alexeyeryshev), [LinkedIn](https://fr.linkedin.com/in/alexeyeryshev), [GitHub](https://github.com/alexeyeryshev/yc-idea-validator)) |
| Distribution Signals | Launch YC, OpenCode listing on Oct 24, RouterPlus on Nov 4 and Opper AI on Nov 16, 2026 ([Launch YC](https://www.ycombinator.com/launches/WJe-munito-ai-open-model-inference-provider-for-europe-private-by-default), [Munito Changelog](https://docs.munito.ai/changelog), [RouterPlus](https://routerplus.com/news/kolibri-1-aleph-alpha-on-routerplus), [Opper AI](https://opper.ai/blog/munito-partnership)) |
| Emails | founders@munito.ai for founder and model requests ([Launch YC](https://www.ycombinator.com/launches/WJe-munito-ai-open-model-inference-provider-for-europe-private-by-default)), hello@munito.ai for contracts ([Munito Docs](https://docs.munito.ai/company)), support@munito.ai for support ([Munito](https://munito.ai/)), legal@munito.ai for privacy and legal notices ([Munito Privacy Policy](https://legal.munito.ai/privacy)), security@munito.ai for security reports ([Munito Trust Center](https://trust.munito.ai/)) |
