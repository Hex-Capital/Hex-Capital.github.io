# Boat

> The best cloud VMs for billions of agents

| Field | Value |
|-------|-------|
| Website | https://boat.dev |
| YC Page | https://www.ycombinator.com/companies/boat |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/boat)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 3 |
| Location | Paris, Île-de-France, France; Remote |
| Tags | Developer Tools, Cloud Computing |
| YC Partner | Andrew Miklas ([Y Combinator](https://www.ycombinator.com/companies/boat)) |
| Emails | an.nougaret@gmail.com (Anicet Nougaret, recruiting contact in the [2025 Ariana posting](https://github.com/ariana-dot-dev/founding-engineer-offer-0)), support@ascii.dev (Boat support and privacy requests, [Boat Privacy Policy](https://boat.dev/privacy)) |

## The Idea

- **Problem** — Teams building long-running AI agents need isolated computers with persistent state, which they can provision and maintain themselves or rent from sandbox providers ([YC company profile](https://www.ycombinator.com/companies/boat), [Nougaret’s Box launch](https://www.producthunt.com/products/box-4)).
- **Approach** — Boat provisions full Ubuntu VMs with Docker, a browser and desktop, and lets developers start, stop, resume and fork them through a CLI, API or SDK ([Boat homepage](https://boat.dev/), [Boat Quickstart](https://docs.boat.dev/quickstart)).
- **Differentiation** — Boat includes a desktop and Docker in each VM, while E2B uses Firecracker microVMs with memory-preserving pause, Daytona defaults to containers and offers Windows and GPU classes, and Modal offers serverless GPU sandboxes and a separate VM runtime ([Boat vs E2B](https://boat.dev/compare/boat-vs-e2b), [Daytona docs](https://www.daytona.io/docs/en/), [Modal docs](https://modal.com/docs/guide/sandboxes)).
- **Business Model** — Boat bills running VMs by the second against a monthly plan starting at $20, charges $0.036/hour for a 4-vCPU, 8-GB VM and offers a seven-day trial with 25 compute hours ([Boat pricing](https://docs.boat.dev/pricing), [Boat homepage](https://boat.dev/)).
- **TAM/SAM** — No public TAM/SAM data found for this specific segment.
- **GTM / Distribution** — Boat combines self-service signup with founder-led launches on X and Product Hunt, which Nougaret said each brought in comparable numbers of trial users at the initial Box launches ([Boat Quickstart](https://docs.boat.dev/quickstart), [Nougaret via Boat LinkedIn](https://www.linkedin.com/company/boatdotdev)).

## Defensibility

- **Moat today** — Boat operates the stack from CPU hosts through orchestration, and Makarov says its snapshot system for stopping, resuming and forking VMs was built in-house ([YC company profile](https://www.ycombinator.com/companies/boat), [Makarov on Product Hunt](https://www.producthunt.com/products/box-4)).
- **Future moat** — [Inferred]: Customer environments, snapshots and fleet integrations could raise migration costs as usage grows, and customer-level switching costs remain unmeasured publicly ([Boat Quickstart](https://docs.boat.dev/quickstart)).
- **Market structure** — No structural barrier identified at this stage.
- **Commoditization risk** — E2B publishes an open-source runtime and AWS offers managed browser and code-execution sandboxes, giving customers ways to self-host or procure overlapping capabilities through an existing cloud vendor ([E2B docs](https://docs.e2b.dev/), [AWS AgentCore](https://aws.amazon.com/bedrock/agentcore/faqs/)).

## Market & Traction

- **Traction signals**
  - **Current product timeline** — Box launched on X in May 2026 and was renamed Boat on September 15, 2026 ([Nougaret’s launch post](https://www.linkedin.com/posts/anicet-nougaret-b7846b174_were-launching-box-a-new-sandbox-product-activity-7464575089288810497-VY4X), [Boat migration guide](https://docs.boat.dev/migrating-from-box)).
  - **350+ paying users** for Box/Boat, founder-reported ([Nougaret on X, September 16, 2026](https://teapaw.org/AniC_dev/status/2100294739413078038)).
  - **Over 1 million cloud computers sold** for agent workloads, founder-reported ([Nougaret via Boat LinkedIn, November 2026](https://www.linkedin.com/company/boatdotdev)).
  - **Over 100,000 VM starts per day**, founder-reported ([Humans of AI Wiki, citing Nougaret’s November 6, 2026 post](https://humansofai.media/wiki/anicet-nougaret)).
  - **Product Hunt #4 of the day** as Box ([Product Hunt, July 22, 2026](https://www.producthunt.com/products/box-4/awards)).
  - **10,800 estimated website visits**, based on a small traffic panel ([Mindspent, September 2026](https://mindspent.com/c/boat)).
  - **7,345 weekly TypeScript SDK downloads** ([npm, October 2026 snapshot, via search snippet](https://www.npmjs.com/package/%40boatdev/sdk)).
  - **About 4,800 X followers** for @boatdotdev ([Teapaw X mirror, November 2026](https://www.teapaw.org/boatdotdev)).
  - **Customer testimonial** — Theo Browne said he used his Claude account allowances four times as fast after adopting Boat ([Boat homepage, accessed November 2026](https://boat.dev/)).
  - **Launch coverage and event distribution** — Founderland covered Boat in October, and the Boat Hackathon lists Boat as a sponsor for November 14–21 ([Founderland, October 2, 2026](https://www.founderland.ai/articles/boat-launches-cloud-vms-to-host-billions-of-ai-agents-murclnrg), [Boat Hackathon, November 2026](https://boathackathon.com/)).
  - **Prior product funding** — Ascii’s Pocket CTO raised a $500,000 pre-seed from Entrepreneurs First, Founders, Inc. and angels, according to Nougaret ([funding announcement, April 8, 2026](https://www.linkedin.com/posts/anicet-nougaret-b7846b174_weve-just-raised-12m-for-ascii-and-im-activity-7447546590522757120-sxhN)).
  - **0 open YC job postings** ([YC Jobs, November 2026](https://www.ycombinator.com/companies/boat/jobs)).
- **Competitors**
  - **E2B** ($32M total funding reported by E2B, $120M estimated annualized revenue in October 2026) offers fast-resume microVMs and self-hosting, and its latest announced round was a $21M Series A led by Insight Partners in July 2025 ([E2B updates](https://e2b.dev/resources/updates), [E2B Series A](https://e2b.dev/resources/series-a), [Sacra](https://sacra.com/c/e2b/), [product comparison](https://boat.dev/compare/boat-vs-e2b)).
  - **Daytona** ($91M raised, $100M estimated annualized revenue in October 2026) offers Windows and GPU sandboxes, and raised a $60M Series B led by FirstMark Growth in October 2026 ([Daytona Series B](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [Daytona docs](https://www.daytona.io/docs/en/), [Sacra](https://sacra.com/c/daytona/)).
  - **Modal** (about $1.2B raised, over $1B company-wide annualized run rate in October 2026) offers serverless GPU compute alongside sandboxes, and raised a $750M Series D led by Accel in October 2026 ([Dealroom](https://invest-eic-companies.dealroom.co/companies/modal_labs), [Modal Series D](https://modal.com/blog/1-billion-annualized-run-rate-series-d)).
- **Why now** — [Inferred]: Longer software-task horizons observed by METR in 2026 increase the range of agent workloads that can use persistent cloud computers ([METR frontier risk report, May 2026](https://metr.org/frontier-risk-report), [Boat Quickstart](https://docs.boat.dev/quickstart)).

## Founders & Team

- **Anicet Nougaret (Founder/CEO)**
  - **Background** — INSA Lyon and UPC alumnus, European Space Agency research software intern and Ariana/Ascii founder ([YC founder profile](https://www.ycombinator.com/founders/anicet-nougaret), [Nougaret’s ESA post](https://www.linkedin.com/posts/anicet-nougaret-b7846b174_in-just-5-months-i-enabled-astronomers-to-activity-7224436594294849539--flw)).
  - **Twitter/X** — @AniC_dev, approximately 12,700 followers ([Teapaw X mirror, November 2026](https://www.teapaw.org/AniC_dev)).
  - **LinkedIn** — Public profile lists Ascii, with the headline unavailable ([LinkedIn, via search snippet](https://fr.linkedin.com/in/anicet-nougaret-b7846b174)).
  - **GitHub** — @AnicetNgrt, with 141 stars for the prior-product `ariana-debugger` repository ([GitHub profile](https://github.com/AnicetNgrt), [repository](https://github.com/ariana-dot-dev/ariana-debugger)).
  - **Email** — an.nougaret@gmail.com, published for Ariana recruiting ([Ariana job posting, 2025](https://github.com/ariana-dot-dev/founding-engineer-offer-0)).
- **Kirill Makarov (Founder/CTO, listed as Kirill by YC)**
  - **Background** — INSA Lyon and University of Jyväskylä alumnus with prior experience at Volvo, Yandex and farswap, and co-founder of Ascii and Boat ([YC founder profile](https://www.ycombinator.com/founders/kirill), [Boat LinkedIn](https://www.linkedin.com/company/boatdotdev)).
  - **Twitter/X** — @luaroncrew, approximately 2,200 followers ([Teapaw X mirror, November 2026](https://www.teapaw.org/luaroncrew)).
  - **LinkedIn** — Public profile lists Boat, with the headline unavailable ([LinkedIn, via search snippet](https://fr.linkedin.com/in/luaroncrew)).
  - **GitHub** — @luaroncrew, with 53 stars for `vibetrader` ([GitHub](https://github.com/luaroncrew/vibetrader)).
  - **Email** — No public data found.
- **Co-founder relationship** — Both studied in INSA Lyon’s computer science department, where Nougaret says they met, and both list farswap as prior experience ([Nougaret via Boat LinkedIn](https://www.linkedin.com/company/boatdotdev), [Nougaret YC profile](https://www.ycombinator.com/founders/anicet-nougaret), [Kirill YC profile](https://www.ycombinator.com/founders/kirill)).
- **Founder-market fit** — The founders built Box as the VM layer for Ascii’s cloud coding-agent product, and Boat lists Andrew Miklas as its YC partner while Orange Collective lists Boat in its portfolio ([Nougaret via Boat LinkedIn](https://www.linkedin.com/company/boatdotdev), [YC](https://www.ycombinator.com/companies/boat), [Orange Collective](https://www.orangecollective.vc/portfolio/boat)).

## Key Risks

- **Data residency and procurement** — Boat hosts VMs in Germany, Finland and France, its compliance docs say snapshot copies can be stored outside the EU, and it lists SOC 2 as in progress ([Boat compliance](https://docs.boat.dev/compliance)).
- **Burst economics** — Starts above the plan allowance incur fees and higher bursts can be rejected, while auto-stop and snapshot-based resume can reduce idle compute charges ([Boat pricing](https://docs.boat.dev/pricing), [Boat Quickstart](https://docs.boat.dev/quickstart)).
- **Cloud substitution** — AWS bundles browser and code execution into AgentCore, giving existing AWS customers an alternative for workloads that need those capabilities ([AWS AgentCore](https://aws.amazon.com/bedrock/agentcore/faqs/)).
- **Brand confusion** — Boat shares its name with India’s boAt electronics brand, and Nougaret cited trademark outreach in announcing the Box rename ([boAt](https://www.boat-lifestyle.com/pages/who-are-we), [Nougaret on X](https://teapaw.org/AniC_dev/status/2100294739413078038)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 350+ paying users ([Nougaret, September 2026](https://teapaw.org/AniC_dev/status/2100294739413078038)), over 1M cloud computers sold ([Nougaret via Boat LinkedIn, November 2026](https://www.linkedin.com/company/boatdotdev)) |
| Revenue Signal | **Boat** — $1M founder-reported ARR on November 7, 2026, up from $200K one month earlier ([Nougaret on X, mirrored by Teapaw](https://teapaw.org/AniC_dev?cursor=DAAHCgABHW_oi-S__-sLAAIAAAATMjEyMDc5MzQzNDg0Mzk3MTk3NggAAwAAAAIAAA&sort=popular)), plans from $20/month and default VMs at $0.036/hour ([Boat pricing](https://docs.boat.dev/pricing)). **Prior Ascii products** — $10K ARR before the cloud-VM pivot ([Nougaret via Boat LinkedIn](https://www.linkedin.com/company/boatdotdev)). |
| Founders | Anicet Nougaret (CEO), INSA Lyon and ESA research software ([YC](https://www.ycombinator.com/founders/anicet-nougaret), [ESA internship post](https://www.linkedin.com/posts/anicet-nougaret-b7846b174_in-just-5-months-i-enabled-astronomers-to-activity-7224436594294849539--flw)); Kirill Makarov (CTO), INSA Lyon, Volvo and Yandex ([YC](https://www.ycombinator.com/founders/kirill), [Boat LinkedIn](https://www.linkedin.com/company/boatdotdev)) |
| Competitors | E2B ($32M raised, $120M estimated annualized revenue, self-hostable microVMs) ([E2B](https://e2b.dev/resources/updates), [Sacra](https://sacra.com/c/e2b/), [comparison](https://boat.dev/compare/boat-vs-e2b)); Daytona ($91M raised, $100M estimated annualized revenue, Windows and GPU sandboxes) ([Daytona](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [Daytona docs](https://www.daytona.io/docs/en/), [Sacra](https://sacra.com/c/daytona/)); Modal (about $1.2B raised, over $1B company-wide annualized run rate, serverless GPU compute) ([Dealroom](https://invest-eic-companies.dealroom.co/companies/modal_labs), [Modal](https://modal.com/blog/1-billion-annualized-run-rate-series-d)) |
| Moat Signals | In-house snapshot system and control of CPU hosts through orchestration ([Product Hunt](https://www.producthunt.com/products/box-4), [YC](https://www.ycombinator.com/companies/boat)) |
| Risk Factors | EU-only VM regions and SOC 2 in progress ([Boat compliance](https://docs.boat.dev/compliance)), burst fees and limits ([Boat pricing](https://docs.boat.dev/pricing)), substitution by cloud-native tools ([AWS](https://aws.amazon.com/bedrock/agentcore/faqs/)) |
| Founder Reach | Nougaret — X 12.7K, LinkedIn 3,014, GitHub 141 stars on `ariana-debugger` ([X mirror](https://www.teapaw.org/AniC_dev), [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7411709683906007040), [GitHub](https://github.com/ariana-dot-dev/ariana-debugger)); Makarov — X 2.2K, LinkedIn 2,123, GitHub 53 stars on `vibetrader` ([X mirror](https://www.teapaw.org/luaroncrew), [LinkedIn](https://www.linkedin.com/posts/luaroncrew_reintroducing-myself-kirill-23-years-activity-7481347944978386944-QLeD), [GitHub](https://github.com/luaroncrew/vibetrader)) |
| Distribution Signals | Box #4 of the day ([Product Hunt, July 2026](https://www.producthunt.com/products/box-4/awards)), 10,800 estimated visits ([Mindspent, September 2026](https://mindspent.com/c/boat)), 7,345 weekly SDK downloads ([npm, October 2026, via search snippet](https://www.npmjs.com/package/%40boatdev/sdk)) |
| Emails | an.nougaret@gmail.com (Nougaret, [Ariana recruiting](https://github.com/ariana-dot-dev/founding-engineer-offer-0)), support@ascii.dev (support and privacy requests, [Boat Privacy Policy](https://boat.dev/privacy)) |
