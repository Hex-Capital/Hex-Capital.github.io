# Tilion

> Super fast, unblockable browser infra for agents

| Field | Value |
|-------|-------|
| Website | https://tilion.com |
| YC Page | https://www.ycombinator.com/companies/tilion |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/tilion)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | B2B, Infrastructure |
| YC Partner | Christopher Golda ([Y Combinator](https://www.ycombinator.com/companies/tilion)) |
| Emails | arman@tilion.dev, Arman Luthra ([GitHub discussion](https://github.com/tiliondev/fortress/discussions/31)); team@tilion.dev, company notices ([Fortress subscription terms](https://github.com/tiliondev/fortress/blob/main/SUBSCRIPTION-TERMS.md)); hello@tilion.dev, package contact ([Tilion on PyPI](https://pypi.org/project/tilion/), via search snippet) |

## The Idea

- **Problem:** Teams using browser agents for data collection and monitoring can lose entire runs when sites block standard browser automation or return challenge pages. ([Tilion Cloud launch](https://tilion.com/blog/tilion-cloud), Jul 2026)
- **Approach:** Tilion Cloud hosts sessions on Fortress, its Chromium fork, and can hand a failed session’s task to another session. ([Tilion Cloud launch](https://tilion.com/blog/tilion-cloud), Jul 2026; [Prothom Alo](https://en.prothomalo.com/corporate/6juv5pdngk), 2026)
- **Differentiation:** In ComputeSDK’s November 13 run, pre-release Tilion recorded a 0.11-second median browser session lifecycle, versus 0.15 seconds for Kernel, 0.37 for Browser Use, and 0.88 for Browserbase. ([ComputeSDK lifecycle benchmark](https://www.computesdk.com/benchmarks/browsers/lifecycle), Nov 2026)
- **Business Model:** Tilion announced usage-based Cloud pricing of $0.03 per browser-hour with free trial credits, and Fortress advertised a free Developer tier and a $2,000-per-month self-hosted Enterprise tier. ([Tilion Cloud launch](https://tilion.com/blog/stealth-is-a-speed-problem), Aug 2026; [Fortress pricing](https://fortress.tilion.com/pricing), Oct 2026 via search snippet)
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Tilion distributes Fortress through GitHub and package registries, opened a Cloud closed beta in July, announced public access in August, and currently presents a waitlist and call booking on its homepage. ([Fortress GitHub](https://github.com/tiliondev/fortress), [July beta](https://tilion.com/blog/tilion-cloud), [August launch](https://tilion.com/blog/stealth-is-a-speed-problem), [Tilion homepage](https://tilion.com/), Nov 2026)

## Defensibility

- **Moat today:** Fortress’s custom Chromium fork requires recurring upstream rebases and regression testing, which Tilion says it performs monthly. ([Fortress GitHub](https://github.com/tiliondev/fortress), Nov 2026)
- **Future moat:** [Inferred]: Historical failure data across customer workflows could improve recovery behavior, although Tilion has published no evidence that it aggregates this data or that recovery improves with volume. ([Y Combinator](https://www.ycombinator.com/companies/tilion), Nov 2026)
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** [Inferred]: Support for standard browser automation interfaces can make provider substitution easier, while Steel already offers a self-hosted browser server and a managed browser service. ([Tilion Cloud launch](https://tilion.com/blog/stealth-is-a-speed-problem), [Steel FAQ](https://steel.dev/faq))

## Market & Traction

- **Traction signals**
  - $500,000 in reported Y Combinator funding. ([ET Edge Insights](https://etedge-insights.com/brands-speak/from-jammu-to-silicon-valley-4-college-friends-raise-half-a-million-dollars-for-ai-startup-tilion/), Oct 2026)
  - 100,000 reported Fortress installs, up from more than 15,000 in July. ([ET Edge Insights](https://etedge-insights.com/brands-speak/from-jammu-to-silicon-valley-4-college-friends-raise-half-a-million-dollars-for-ai-startup-tilion/), Oct 2026; [Tilion Cloud launch](https://tilion.com/blog/tilion-cloud), Jul 2026)
  - Fortress used by engineers at more than 170 companies, according to Tilion, including reported use by an unnamed Fortune 500 company and an unnamed AI lab. ([Prothom Alo](https://en.prothomalo.com/corporate/6juv5pdngk), 2026)
  - Millions of unattended agent operations per day, company-reported. ([Y Combinator](https://www.ycombinator.com/companies/tilion), Nov 2026)
  - 804 Fortress GitHub stars and 54 forks. ([Fortress GitHub](https://github.com/tiliondev/fortress), Nov 2026)
  - 367 LinkedIn followers, 55 X followers for @tiliondev, and zero open jobs on YC. ([LinkedIn](https://www.linkedin.com/company/tiliondev/), [X via Teapawt mirror](https://www.teapaw.org/tiliondev), [Y Combinator](https://www.ycombinator.com/companies/tilion), Nov 2026)
  - Hacker News front-page appearance, company-reported, and coverage in ET Edge Insights and The Daily Observer. ([Tilion Cloud launch](https://tilion.com/blog/tilion-cloud), Jul 2026; [ET Edge Insights](https://etedge-insights.com/brands-speak/from-jammu-to-silicon-valley-4-college-friends-raise-half-a-million-dollars-for-ai-startup-tilion/), Oct 2026; [The Daily Observer](https://observerbd.com/news/603297), Nov 2026)
- **Competitors**
  - **Browserbase** ($67.5M raised, about $3M in reported revenue in its first 16 months) offers the Stagehand framework and session replay alongside cloud browsers, with a $40M Series B in June 2025 led by Notable Capital. ([Contrary Research](https://research.contrary.com/company/browserbase), [Browserbase](https://www.browserbase.com/about))
  - **Kernel** ($22M raised, revenue unknown) offers a browser service and a runtime for deploying agent code, with an Accel-led Series A announced alongside its seed in October 2025. ([Kernel](https://www.kernel.sh/blog/series-a-announcement), [Accel](https://www.accel.com/news/our-investment-in-kernel-the-best-browser-infrastructure-for-agents), [Y Combinator](https://www.ycombinator.com/companies/kernel))
  - **Browser Use** ($17M raised, revenue unknown) offers a framework that turns model instructions into browser actions alongside hosted browsers, with a March 2025 seed led by Felicis. ([Browser Use](https://browser-use.com/posts/seed-round), [Felicis](https://www.felicis.com/blog/investing-in-browser-use))
- **Why now:** [Inferred]: As AI agents take more actions on live sites, browser reliability matters to more workflows, with DataDome measuring 4.7× as many agentic browser requests in September 2026 as in August. ([DataDome Q3 AI Traffic Report](https://datadome.co/threat-research/ai-traffic-report-q3-2026/), Oct 2026)

## Founders & Team

- **Arman Luthra (Founder/CEO)**
  - **Background:** Studied computer science at Wabash College, worked at the American Enterprise Institute, and built the Scribia study app. ([Wabash College student newspaper](https://media.wabash.edu/bachelor/Bachelor-2026-02-20.pdf), [YC founder profile](https://www.ycombinator.com/founders/arman-luthra), [ET Edge Insights](https://etedge-insights.com/brands-speak/from-jammu-to-silicon-valley-4-college-friends-raise-half-a-million-dollars-for-ai-startup-tilion/))
  - **Twitter/X:** @armanluthra_, 97 followers. ([Teapawt mirror](https://nitter.gq/armanluthra_), Nov 2026)
  - **LinkedIn:** Headline unavailable in the public preview, which showed 970 followers. ([LinkedIn](https://www.linkedin.com/in/armanluthra), via search snippet)
  - **GitHub:** @Arman-Luthra, `aftr`, 27 stars. ([GitHub](https://github.com/Arman-Luthra/aftr), Nov 2026)
  - **Email:** arman@tilion.dev. ([GitHub discussion](https://github.com/tiliondev/fortress/discussions/31))
- **Md Shahrier Islam Arham (Founder/CTO)**
  - **Background:** Attended Wabash College, built student job-search software, and developed Tilion’s browser infrastructure. ([Wabash catalog](https://bulletin.wabash.edu/chronicle/students/), [Prothom Alo](https://en.prothomalo.com/corporate/6juv5pdngk))
  - **Twitter/X:** @shahrier_arham, 79 followers. ([Teapawt mirror](https://nitter.gq/shahrier_arham), Nov 2026)
  - **LinkedIn:** Headline unavailable in the public preview, which showed 989 followers. ([LinkedIn](https://www.linkedin.com/in/shahrierislamarham), via search snippet)
  - **GitHub:** @arham766, `fortress_dev` fork, 1 star. ([GitHub](https://github.com/arham766/fortress_dev), Nov 2026)
  - **Email:** No public data found.
- **Kazi Fardinul Hoque (Founder)**
  - **Background:** Attended Wabash College and worked on model serving at AWS Bedrock. ([The Daily Observer](https://observerbd.com/news/603297), [GitHub profile](https://github.com/kfhfar))
  - **Twitter/X:** No public account found.
  - **LinkedIn:** Headline unavailable in the public preview, which showed 542 followers. ([LinkedIn](https://www.linkedin.com/in/kazi-fardinul-hoque), via search snippet)
  - **GitHub:** @kfhfar, `vllm` fork, 0 stars. ([GitHub](https://github.com/kfhfar/vllm), Nov 2026)
  - **Email:** No public data found.
- **Abdul Basit Tonmoy (Founder/CPO)**
  - **Background:** Attended Wabash College and led authorship of the team’s *Fusion Embedding* paper on multimodal representation learning. ([The Daily Observer](https://observerbd.com/news/603297), [arXiv](https://arxiv.org/abs/2607.18666))
  - **Twitter/X:** @basittonmoy, count not retrievable. ([YC founder profile](https://www.ycombinator.com/founders/abdul-basit-tonmoy))
  - **LinkedIn:** Headline unavailable in the public preview, which showed 2K followers. ([LinkedIn](https://www.linkedin.com/in/abdul-basit-tonmoy), via search snippet)
  - **GitHub:** @abtonmoy, co-authored `fusion-embedding`, 17 stars. ([GitHub profile](https://github.com/abtonmoy), [project repository](https://github.com/Eximius-Labs/fusion-embedding), Nov 2026)
  - **Email:** No public data found.
- **Co-founder relationship:** The founders met at Wabash College and jointly authored *Fusion Embedding*. ([The Daily Observer](https://observerbd.com/news/603297), [arXiv](https://arxiv.org/abs/2607.18666))
- **Founder-market fit:** Arham traces Fortress to browser failures the team encountered collecting school-board data, Hoque previously worked on model serving at AWS, and YC lists Christopher Golda as Tilion’s primary partner. ([Founder’s Hacker News post, mirrored](https://brianlovin.com/hn/49928454), [YC founder profile](https://www.ycombinator.com/founders/kazi-fardinul-hoque), [YC company profile](https://www.ycombinator.com/companies/tilion))

## Key Risks

- **Site-owner access controls:** Cloudflare now defaults newly onboarded domains to blocking classified agent traffic on pages with ads, and Fortress advises users to respect site terms and local law. ([Cloudflare changelog](https://developers.cloudflare.com/changelog/product/bots/), Sep 2026; [Fortress GitHub](https://github.com/tiliondev/fortress))
- **Session reliability:** Browser Arena observed a failed Tilion session launch in November, and Prothom Alo reports that Tilion mitigates session failures by reassigning the task. ([Browser Arena](https://www.browserarena.ai/proxies?country=US&date=2026-11-07), Nov 2026; [Prothom Alo](https://en.prothomalo.com/corporate/6juv5pdngk), 2026)
- **Cloud availability:** Tilion announced public access in August, while its homepage currently directs visitors to a waitlist and ComputeSDK labels the service pre-release. ([Tilion Cloud launch](https://tilion.com/blog/stealth-is-a-speed-problem), Aug 2026; [Tilion homepage](https://tilion.com/), [ComputeSDK](https://www.computesdk.com/benchmarks/browsers), Nov 2026)
- **Name collision:** A historical USPTO filing lists a separate Tilion.com, Inc. for supply-chain software, which can confound name-based searches. ([USPTO Official Gazette](https://www.uspto.gov/web/trademarks/tmog/20010911_OG.pdf), Sep 2001)

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 100,000 reported Fortress installs ([ET Edge Insights](https://etedge-insights.com/brands-speak/from-jammu-to-silicon-valley-4-college-friends-raise-half-a-million-dollars-for-ai-startup-tilion/), Oct 2026); engineers at 170+ companies, company-reported ([Prothom Alo](https://en.prothomalo.com/corporate/6juv5pdngk), 2026); millions of daily operations, company-reported ([Y Combinator](https://www.ycombinator.com/companies/tilion), Nov 2026) |
| Revenue Signal | Cloud launch rate of $0.03/browser-hour ([Tilion](https://tilion.com/blog/stealth-is-a-speed-problem), Aug 2026); Fortress free Developer tier and $2,000/month Enterprise tier ([Fortress pricing](https://fortress.tilion.com/pricing), Oct 2026 via search snippet) |
| Founders | Luthra (CEO), Wabash and AEI ([Wabash](https://www.wabash.edu/news/story/13449), [YC](https://www.ycombinator.com/founders/arman-luthra)); Arham (CTO), Wabash and browser infrastructure ([YC](https://www.ycombinator.com/founders/md-shahrier-islam-arham), [Prothom Alo](https://en.prothomalo.com/corporate/6juv5pdngk)); Hoque (Founder), AWS Bedrock and model serving ([GitHub](https://github.com/kfhfar)); Tonmoy (CPO), Wabash and multimodal ML ([YC](https://www.ycombinator.com/founders/abdul-basit-tonmoy), [arXiv](https://arxiv.org/abs/2607.18666)) |
| Competitors | Browserbase ($67.5M raised, about $3M reported revenue in its first 16 months, Stagehand and replay) ([Contrary Research](https://research.contrary.com/company/browserbase), [Browserbase](https://www.browserbase.com/about)); Kernel ($22M raised, revenue unknown, agent runtime) ([Kernel](https://www.kernel.sh/blog/series-a-announcement), [YC](https://www.ycombinator.com/companies/kernel)); Browser Use ($17M raised, revenue unknown, agent framework) ([Felicis](https://www.felicis.com/blog/investing-in-browser-use)) |
| Moat Signals | Custom Chromium fork with monthly rebases and published regression benchmarks ([Fortress GitHub](https://github.com/tiliondev/fortress), Nov 2026) |
| Risk Factors | Site-owner blocking defaults ([Cloudflare](https://developers.cloudflare.com/changelog/product/bots/)), session launch failures ([Browser Arena](https://www.browserarena.ai/proxies?country=US&date=2026-11-07)), Cloud waitlist ([Tilion](https://tilion.com/)) |
| Founder Reach | Luthra: X 97, LinkedIn 970, `aftr` 27 stars ([Teapawt](https://nitter.gq/armanluthra_), [LinkedIn](https://www.linkedin.com/in/armanluthra) via search snippet, [GitHub](https://github.com/Arman-Luthra/aftr)); Arham: X 79, LinkedIn 989, `fortress_dev` 1 star ([Teapawt](https://nitter.gq/shahrier_arham), [LinkedIn](https://www.linkedin.com/in/shahrierislamarham) via search snippet, [GitHub](https://github.com/arham766/fortress_dev)); Hoque: LinkedIn 542, `vllm` fork 0 stars ([LinkedIn](https://www.linkedin.com/in/kazi-fardinul-hoque) via search snippet, [GitHub](https://github.com/kfhfar/vllm)); Tonmoy: LinkedIn 2K, `fusion-embedding` 17 stars ([LinkedIn](https://www.linkedin.com/in/abdul-basit-tonmoy) via search snippet, [GitHub](https://github.com/Eximius-Labs/fusion-embedding)) |
| Distribution Signals | Hacker News front page, company-reported ([Tilion](https://tilion.com/blog/tilion-cloud), Jul 2026); 804 GitHub stars ([Fortress GitHub](https://github.com/tiliondev/fortress), Nov 2026); 367 LinkedIn and 55 X followers ([LinkedIn](https://www.linkedin.com/company/tiliondev/), [Teapawt mirror](https://www.teapaw.org/tiliondev), Nov 2026) |
| Emails | arman@tilion.dev, CEO ([GitHub discussion](https://github.com/tiliondev/fortress/discussions/31)); team@tilion.dev, company notices ([Fortress subscription terms](https://github.com/tiliondev/fortress/blob/main/SUBSCRIPTION-TERMS.md)); hello@tilion.dev, package contact ([Tilion on PyPI](https://pypi.org/project/tilion/), via search snippet) |
