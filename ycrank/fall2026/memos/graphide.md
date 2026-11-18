# Graphide

> 10-20? faster CI runners + 24/7 agent cutting bloated CI bills 70+%

| Field | Value |
|-------|-------|
| Website | https://graphide.com |
| YC Page | https://www.ycombinator.com/companies/graphide |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/graphide)) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Developer Tools, B2B, DevOps, Infrastructure |
| YC Partner | Christopher Golda ([Y Combinator](https://www.ycombinator.com/companies/graphide)) |
| Emails | dan@graphide.com (CEO, migration inquiries, [Launch YC](https://www.ycombinator.com/launches/X7D-graphide-a-ci-runner-10x-faster-than-github-often-under-a-minute)), ben@graphide.net (CTO, security lead, [Graphide Privacy Policy](https://graphide.com/privacy/)), hello@graphide.com (general and sales, [Graphide Pricing](https://graphide.com/pricing/)), privacy@graphide.com (data requests) and security@graphide.com (incident reports) ([Graphide Privacy Policy](https://graphide.com/privacy/)) |

## The Idea

- **Problem:** Engineering teams using coding agents on GitHub Actions can wait through repeated test runs for a single change, with unnamed customers reporting that a 30-minute pipeline could translate into 3–6 hours of retries before switching runners ([Launch YC, Nov 11, 2026](https://www.ycombinator.com/launches/X7D-graphide-a-ci-runner-10x-faster-than-github-often-under-a-minute)).
- **Approach:** Graphide runs eligible GitHub Actions jobs on prewarmed machines, uses agents to tune caches and split long tests across runners, and sells a separate pull-request reviewer that can test suspected bugs against old and new code ([Graphide CI Docs](https://graphide.com/docs/ci/), [Launch YC](https://www.ycombinator.com/companies/graphide)).
- **Differentiation:** Graphide adds ongoing per-job tuning to the runner capacity that GitHub sells by usage, and pairs its reviewer with a CI runner service while Greptile offers sandboxed test execution within its reviewer ([Graphide Pricing](https://graphide.com/pricing/), [GitHub Changelog](https://github.blog/changelog/2026-01-01-reduced-pricing-for-github-hosted-runners-usage/), [Greptile TREX](https://www.greptile.com/blog/trex)).
- **Business Model:** The current pricing page quotes fixed monthly CI pricing from existing usage, offers a trial capped at 7 days or $10 of CI usage, and charges $1 per pull request after 10 free reviews ([Graphide Pricing, Nov 2026](https://graphide.com/pricing/)).
- **TAM/SAM:** Fortune Business Insights estimates the broader global CI tools market at $2.58B in 2026 with 22.02% projected CAGR through 2034, and no public TAM/SAM data was found for the specific hosted GitHub Actions runner segment ([Fortune Business Insights, 2026](https://www.fortunebusinessinsights.com/continuous-integration-ci-tools-market-111194)).
- **GTM / Distribution:** Graphide offers self-serve GitHub App installation and a repository migration workflow, with sales calls for quotes and CEO-assisted migrations through Launch YC ([Graphide CI Docs](https://graphide.com/docs/ci/), [Graphide Pricing](https://graphide.com/pricing/), [Launch YC](https://www.ycombinator.com/launches/X7D-graphide-a-ci-runner-10x-faster-than-github-often-under-a-minute)).

## Defensibility

- **Moat today:** Graphide reports operating its own runners and maintaining a shared library of optimizations spanning build caches, test execution, compilers, and the Linux kernel ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/X7D-graphide-a-ci-runner-10x-faster-than-github-often-under-a-minute)).
- **Future moat:** [Inferred]: Reusable tuning rules could shorten setup across repositories, although Graphide’s public benchmarks measure job runtimes and leave the effect on onboarding unquantified ([Launch YC](https://www.ycombinator.com/launches/X7D-graphide-a-ci-runner-10x-faster-than-github-often-under-a-minute)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** [Inferred]: Depot’s custom runner images and Blacksmith’s drop-in runner fleet give both vendors infrastructure on which to add per-job tuning ([Depot CI](https://depot.dev/changelog/2026-03-24-depot-ci-now-available), [Blacksmith Series C announcement](https://www.prnewswire.com/news-releases/blacksmith-raises-sequoia-led-series-c-at-1-billion-valuation-to-scale-code-validation-302915140.html)).

## Market & Traction

- **Traction signals:**
  - $500K in financing reported by CB Insights for Nov 1, 2026, classified by the database as a convertible note ([CB Insights, via search snippet](https://www.cbinsights.com/company/graphide/financials)).
  - Customer testimonial: unnamed teams reported completing an entire product in a few days after switching to Graphide CI ([Graphide founders on Launch YC, Nov 11, 2026](https://www.ycombinator.com/launches/X7D-graphide-a-ci-runner-10x-faster-than-github-often-under-a-minute)).
  - Company CI benchmark: 16 of 24 jobs finished in under a minute, and 19 ran at least 10× faster than their GitHub baselines ([Launch YC, Nov 11, 2026](https://www.ycombinator.com/launches/X7D-graphide-a-ci-runner-10x-faster-than-github-often-under-a-minute)).
  - Company review benchmark: Graphide caught 26 of 36 known bugs versus 21 for Greptile, with 0.02 versus 0.11 false alarms per clean pull request ([Graphide benchmark methodology, Oct 2026](https://graphide.com/#how-we-measured)).
  - CI launch coverage in TrustList and Reveneau ([TrustList, Nov 2026](https://trustlist.uk/launches/launch-weekly54-graphide-ci-runners-and-pull-request-review), [Reveneau, Nov 2026](https://reveneau.com/ainews/graphide-yc-fall-2026-ci-runner-github-actions-benchmark)).
  - 47 comments on YC’s LinkedIn post announcing Graphide CI ([YC on LinkedIn, Nov 17 snapshot](https://www.linkedin.com/posts/y-combinator_graphide-yc-f26-is-a-ci-runner-built-for-activity-7526358561879396352-z9ch)).
  - 0 open roles on YC Jobs ([YC Jobs, Nov 17, 2026](https://www.ycombinator.com/companies/graphide/jobs)).
  - Prior product, Graphide IDE: the founders promoted the graph-based desktop editor in October 2026, then launched the CI runner through YC on Nov 11 while retaining the desktop app ([Graphide on LinkedIn](https://www.linkedin.com/company/graphidehq), [Graphide desktop docs](https://graphide.com/docs/desktop-app/), [TrustList](https://trustlist.uk/launches/launch-weekly54-graphide-ci-runners-and-pull-request-review)).
- **Competitors:**
  - Blacksmith ($125M raised, CEO reported revenue in the tens of millions in Aug 2026): drop-in runners designed for bursty CI demand, with a $66M Series C led by Sequoia Capital in Oct 2026 ([Blacksmith announcement](https://www.prnewswire.com/news-releases/blacksmith-raises-sequoia-led-series-c-at-1-billion-valuation-to-scale-code-validation-302915140.html), [TechCrunch CEO interview](https://techcrunch.com/2026/08/12/blacksmiths-valuation-jumps-10x-to-550m-as-ai-coding-fuels-software-validation/)).
  - Depot (at least $14.1M across announced rounds, revenue unknown): offers standalone CI and custom runner images, with a $10M Series A from Felicis, YC, and Pioneer Fund in Mar 2026 ([Depot financing and company history](https://depot.dev/about), [Depot Series A announcement](https://depot.dev/blog/depot-raises-series-a), [Depot CI](https://depot.dev/changelog/2026-03-24-depot-ci-now-available)).
  - WarpBuild ($1.5M reported raised, revenue unknown): offers runners in the customer’s cloud account, with an Aug 2021 pre-seed listing Quiet Capital, Randall Lloyd, and YC as leads ([aVenture](https://aventure.vc/companies/warpbuild-san-francisco-ca-us/fundraising), [Crunchbase](https://www.crunchbase.com/organization/argonaut-862d), [WarpBuild Enterprise](https://www.warpbuild.com/products/enterprise)).
  - Greptile ($80M raised, revenue unknown): tests suspected pull-request bugs in disposable sandboxes, with a $50M Series B led by Menlo Ventures in Oct 2026 ([Menlo Ventures job board](https://jobs.menlovc.com/companies/greptile-2/jobs/99985743-pm-growth), [Greptile Series B](https://www.greptile.com/blog/series-b), [Greptile TREX](https://www.greptile.com/blog/trex)).
- **Why now:** GitHub attributed rising infrastructure demand to coding-agent activity and reported 3.26B Actions runs in Sep 2026, more than 4× the prior-year month ([GitHub Engineering, Oct 2026](https://github.blog/engineering/building-git-infrastructure-for-agent-scale-development/)).

## Founders & Team

- **Dan McGee (CEO):**
  - Background: Studied EECS and business in UC Berkeley’s M.E.T. program, ran a software automation business, and built Illumio’s Matrix policy simulation platform as an intern, which orchestrated 300+ virtual machines ([YC profile](https://www.ycombinator.com/companies/graphide)); business email dan@graphide.com ([Launch YC](https://www.ycombinator.com/launches/X7D-graphide-a-ci-runner-10x-faster-than-github-often-under-a-minute)).
  - Twitter/X: @mcgeedan42, 227 followers ([X profile mirror, Nov 2026](https://nitter.gq/mcgeedan42)).
  - LinkedIn: Listed at Graphide as Dan McGee Marin, with 792 followers and headline unavailable ([LinkedIn profile via search snippet, Nov 2026](https://www.linkedin.com/in/danielmcgeemarin)).
  - GitHub: @Daniel-McGeeMarin, pinned ModularMarkets repository with 2 stars ([GitHub, Nov 2026](https://github.com/ModularMarkets/ModularMarkets), [Devpost profile](https://devpost.com/Daniel-McGeeMarin)).
- **Benjamin McIntyre (CTO):**
  - Background: Studies computer engineering and mathematics at the University of Cincinnati, founded its Linux and FOSS club, and built voter outreach software for a political campaign ([YC profile](https://www.ycombinator.com/companies/graphide)); business email ben@graphide.net ([Graphide Privacy Policy](https://graphide.com/privacy/)).
  - Twitter/X: @benmac06, count not retrievable ([YC founder profile](https://www.ycombinator.com/founders/benjamin-mcintyre)).
  - LinkedIn: Listed at Graphide with 183 followers and headline unavailable ([LinkedIn profile via search snippet, Nov 2026](https://www.linkedin.com/in/mcintyre-benjamin)).
  - GitHub: No public repos found.
- **Co-founder relationship:** McGee and McIntyre met in middle school in Cincinnati and co-built GraphED at the June 2026 UC Berkeley AI Hackathon ([Graphide About](https://graphide.com/about/), [GraphED on Devpost](https://devpost.com/software/graphed-5za34o)).
- **Founder-market fit:** McGee’s VM orchestration work and McIntyre’s Linux and editor-tooling experience map to their respective infrastructure and code-verification roles at Graphide, whose YC partner is Christopher Golda ([Graphide About](https://graphide.com/about/), [YC profile](https://www.ycombinator.com/companies/graphide)).

## Key Risks

- **Benchmark generalizability:** [Inferred]: Production gains may differ from the Nov 5 benchmark, which hand-tuned 10 jobs on 64- or 128-vCPU runners while customer runners topped out at 32 vCPUs, and the pricing page frames 70%+ bill savings as a target ([Graphide pricing and methodology](https://graphide.com/pricing/)).
- **Test-selection correctness:** [Inferred]: A missed dependency could exclude a relevant regression test, and Graphide’s current docs say it runs the full suite and has yet to enable the pruning feature described at launch ([Graphide test-selection docs](https://graphide.com/docs/ci/blast-radius/), [Launch YC](https://www.ycombinator.com/launches/X7D-graphide-a-ci-runner-10x-faster-than-github-often-under-a-minute)).
- **GitHub dependency:** Graphide CI requires a GitHub organization, leaves unsupported jobs on existing runners, and competes against native hosted-runner rates that GitHub cut by up to 39% in Jan 2026 ([Graphide CI Docs](https://graphide.com/docs/ci/), [GitHub Changelog](https://github.blog/changelog/2026-01-01-reduced-pricing-for-github-hosted-runners-usage/)).
- **Enterprise security review:** [Inferred]: Storing connected repositories and sending applicable code to model providers can trigger customer security reviews, with isolated job sandboxes documented and formal security certification and a tested production database restore still absent from the privacy disclosure ([Graphide Privacy Policy](https://graphide.com/privacy/)).
- **Name confusion:** [Inferred]: Searches can mix Graphide with Graphite, a developer-tool vendor, or GraphiDe, a graph-processing research project ([Graphite on LinkedIn](https://www.linkedin.com/company/graphitehq), [NJIT research record](https://researchwith.njit.edu/en/publications/graphide-a-graph-processing-accelerator-leveraging-in-dram-comput/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global CI tools: $2.58B in 2026, 22.02% projected CAGR through 2034 ([Fortune Business Insights, 2026](https://www.fortunebusinessinsights.com/continuous-integration-ci-tools-market-111194)) |
| SAM | No public data found |
| Traction | Customer testimonial: unnamed teams reported completing a product in a few days after switching to Graphide CI ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/X7D-graphide-a-ci-runner-10x-faster-than-github-often-under-a-minute)); $500K financing reported Nov 1, 2026 ([CB Insights, via search snippet](https://www.cbinsights.com/company/graphide/financials)) |
| Revenue Signal | Current fixed monthly CI quote and $1 per pull request after 10 free reviews ([Graphide Pricing, Nov 2026](https://graphide.com/pricing/)); $0.003 per vCPU-minute listed in the launch post ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/X7D-graphide-a-ci-runner-10x-faster-than-github-often-under-a-minute)) |
| Founders | Dan McGee (CEO): Berkeley M.E.T., Illumio Matrix. Benjamin McIntyre (CTO): University of Cincinnati computer engineering and mathematics, founder of its Linux and FOSS club ([YC profile](https://www.ycombinator.com/companies/graphide)) |
| Competitors | Blacksmith ($125M raised, revenue in the tens of millions, burst-capacity CI runners) ([Blacksmith](https://www.prnewswire.com/news-releases/blacksmith-raises-sequoia-led-series-c-at-1-billion-valuation-to-scale-code-validation-302915140.html), [TechCrunch](https://techcrunch.com/2026/08/12/blacksmiths-valuation-jumps-10x-to-550m-as-ai-coding-fuels-software-validation/)); Depot (at least $14.1M across announced rounds, revenue unknown, standalone CI) ([Depot](https://depot.dev/about)); WarpBuild ($1.5M reported raised, revenue unknown, customer-cloud runners) ([aVenture](https://aventure.vc/companies/warpbuild-san-francisco-ca-us/fundraising), [WarpBuild](https://www.warpbuild.com/products/enterprise)); Greptile ($80M raised, revenue unknown, sandboxed PR review) ([Menlo Ventures](https://jobs.menlovc.com/companies/greptile-2/jobs/99985743-pm-growth), [Greptile](https://www.greptile.com/blog/trex)) |
| Moat Signals | Company-operated runners and a shared optimization library ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/X7D-graphide-a-ci-runner-10x-faster-than-github-often-under-a-minute)) |
| Risk Factors | Benchmark hardware differs from customer hardware, test selection is still in development, CI requires a GitHub organization ([Graphide Pricing](https://graphide.com/pricing/), [Graphide CI Docs](https://graphide.com/docs/ci/)) |
| Founder Reach | Dan McGee: X 227 followers, LinkedIn 792 followers, ModularMarkets 2 GitHub stars ([X mirror](https://nitter.gq/mcgeedan42), [LinkedIn via search snippet](https://www.linkedin.com/in/danielmcgeemarin), [GitHub](https://github.com/ModularMarkets/ModularMarkets)); Benjamin McIntyre: LinkedIn 183 followers ([LinkedIn via search snippet](https://www.linkedin.com/in/mcintyre-benjamin)) |
| Distribution Signals | GitHub App onboarding ([Graphide CI Docs](https://graphide.com/docs/ci/)); Nov 11 CI launch and 47 comments on YC’s LinkedIn announcement as of Nov 17, 2026 ([TrustList](https://trustlist.uk/launches/launch-weekly54-graphide-ci-runners-and-pull-request-review), [YC on LinkedIn](https://www.linkedin.com/posts/y-combinator_graphide-yc-f26-is-a-ci-runner-built-for-activity-7526358561879396352-z9ch)) |
| Emails | dan@graphide.com ([Launch YC](https://www.ycombinator.com/launches/X7D-graphide-a-ci-runner-10x-faster-than-github-often-under-a-minute)), ben@graphide.net, hello@graphide.com, privacy@graphide.com, security@graphide.com ([Graphide Privacy Policy](https://graphide.com/privacy/)) |
