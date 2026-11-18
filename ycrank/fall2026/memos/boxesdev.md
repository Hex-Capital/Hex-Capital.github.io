# Boxes.dev

> A better place to run your coding agents.

| Field | Value |
|-------|-------|
| Website | https://boxes.dev |
| YC Page | https://www.ycombinator.com/companies/boxesdev |
| Batch | Fall 2026 ([YC directory](https://www.ycombinator.com/companies/boxesdev)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 ([YC directory](https://www.ycombinator.com/companies/boxesdev)) |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, B2B, AI |
| YC Partner | Andrew Miklas ([YC directory](https://www.ycombinator.com/companies/boxesdev)) |
| Emails | nick@boxes.dev (Nick Bushak, CEO), drew@boxes.dev (Drew Regitsky, CTO) ([Launch YC](https://www.ycombinator.com/launches/Wp5-boxes-dev-move-your-ai-coding-to-the-cloud)); hi@boxes.dev (general inquiries and support), privacy@boxes.dev (privacy inquiries) ([Boxes.dev privacy policy](https://boxes.dev/privacy)); play@nickdrewco.com (Android publisher contact) ([Google Play](https://play.google.com/store/apps/details?id=dev.boxes)) |

## The Idea

- **Problem:** Engineers running parallel coding agents with local Git worktrees still share CPU, memory, and ports, and local sessions can stop when a laptop sleeps ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wp5-boxes-dev-move-your-ai-coding-to-the-cloud)).
- **Approach:** Boxes.dev copies a working development environment into a Linux template, forks isolated machines from its snapshot, and runs native Claude Code or Codex with customer-provided subscriptions or API keys ([Boxes.dev product page](https://boxes.dev/), [Show HN, Jun 2026](https://news.ycombinator.com/item?id=48399358)).
- **Differentiation:** Boxes.dev clones a working machine, while Replicas configures cloud VMs with setup hooks and Niteshift defines task environments in the repository and attaches browser-test evidence to pull requests ([Boxes.dev comparisons](https://boxes.dev/compare), [Replicas](https://replicas.dev/about), [Niteshift](https://niteshift.dev/blog/introducing-niteshift)).
- **Business Model:** The pricing page lists a free 20-box-hour trial, Starter at $19, Pro at $99 and Max at $249 per user per month, custom Teams pricing, and paid-plan overages of $0.40 per awake box-hour ([Boxes.dev pricing, Nov 2026](https://boxes.dev/#pricing)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Boxes.dev offers self-serve signup, a promotion for YC launch visitors, a separate YC founder deal, and a migration guide and offer for Conductor Cloud users ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wp5-boxes-dev-move-your-ai-coding-to-the-cloud), [Boxes.dev migration guide, Nov 2026](https://boxes.dev/blog/conductor-cloud-shutdown)).

## Defensibility

- **Moat today:** Versioned team templates preserve configured environments and project startup scripts, creating setup work when switching providers ([Boxes.dev data and credentials docs](https://boxes.dev/help/data-and-credentials)).
- **Future moat:** [Inferred]: Shared templates, task automations, and agent histories could increase switching costs as teams standardize on them, though public retention data is unavailable ([Boxes.dev product and team features](https://boxes.dev/)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Replicas already runs multiple native coding agents in isolated VMs, and Coder provisions customer-hosted environments for both developers and agents ([Replicas product](https://replicas.dev/about), [Coder Series C announcement](https://coder.com/blog/90m-series-c-led-by-kkr-to-advance-secure-enterprise-ai-development)).

## Market & Traction

- **Traction signals:**
  - Customer testimonial: An unnamed customer ran over 200 agents on more than 100 machines for a software build, as reported by the founders ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wp5-boxes-dev-move-your-ai-coding-to-the-cloud)).
  - 10,611 standalone CLI downloads and 3,449 downloads of the older CLI package in the week ending Nov 15 ([PluginStats weekly report](https://www.pluginstats.com/reports/weekly-2026-w46), [PluginStats package history, Nov 2026](https://www.pluginstats.com/plugins/npm/boxes-dev--dvb)).
  - 100+ Android downloads and a 5.0 US iOS rating from 1 rating ([Google Play](https://play.google.com/store/apps/details?id=dev.boxes), [US App Store](https://apps.apple.com/us/app/boxes-dev/id6758927946), Nov 2026 snapshots).
  - Product Hunt #13 for June 4, with 113 points and 165 product followers in the captured listing ([Product Hunt daily leaderboard, Jun 2026](https://www.producthunt.com/leaderboard/daily/2026/6/4), [Product Hunt listing, Nov 2026](https://www.producthunt.com/products/boxes-dev)).
  - June 4 public debut with 105 Hacker News points and 79 comments; the founders described a pivot to this product without naming the earlier project ([Show HN](https://news.ycombinator.com/item?id=48399358), [Show HN June 2026 archive](https://bestofshowhn.com/2026/6)).
  - 103K views on Bushak’s Nov 9 launch post as measured Nov 13, and 313 followers on the separate company X account ([Doomers AI launch tracker](https://doomers.ai/launches/boxes-dev), [X profile mirror, Nov 2026](https://www.nitter.gq/boxesdotdev)).
  - Launch coverage in Sulat AI & Tech News, Raised, and Reveneau ([Sulat](https://news.sulat.com/2026/11/10/boxes-dev-cloud-computer-claude-code-codex-agents/), [Raised](https://raisednews.com/article/boxes-dev-cloud-computers-ai-coding-agents/), [Reveneau](https://reveneau.com/ainews/boxes-dev-yc-launch-cloud-runners-claude-code-codex-parallel-agents), Nov 2026).
  - 0 open roles on YC’s jobs board ([YC jobs, Nov 2026](https://www.ycombinator.com/companies/boxesdev/jobs)).
- **Competitors:**
  - **Replicas ($4M disclosed, six figures in company-reported ARR):** Uses setup hooks for cloud workspaces and offers Slack channel triage; its October 2026 seed announcement named YC and Flex Capital among participants ([Replicas seed announcement](https://replicas.dev/blog/seed), [YC job listing](https://www.ycombinator.com/companies/replicas/jobs/fmrVgOj-founding-growth), [Boxes.dev comparisons](https://boxes.dev/compare)).
  - **Niteshift ($7M disclosed, revenue unknown):** Uses repo-defined environments and browser verification attached to pull requests, with a June 2026 seed led by Greylock ([Niteshift launch and funding](https://niteshift.dev/blog/introducing-niteshift)).
  - **Coder ($172.8M raised, revenue unknown):** Provides customer-hosted workspaces for engineers and agents, with a $90M Series C led by KKR in April 2026 ([Contrary Research, Oct 2026](https://research.contrary.com/company/coder/quick-facts), [Coder Series C announcement](https://coder.com/blog/90m-series-c-led-by-kkr-to-advance-secure-enterprise-ai-development)).
  - **Cognition ($3.6B reported raised, $1B annualized revenue reported in September 2026):** Sells its own Devin agent and automations, with a September 2026 Series E of over $2B led by Andreessen Horowitz and Accel alongside existing investors ([Fireround](https://fireround.dev/companies/cognition), [Bloomberg](https://bloomberg.com/news/articles/2026-09-25/ai-coding-startup-cognition-hits-1-billion-in-annualized-revenue), [Cognition Series E announcement](https://cognition.com/blog/series-e)).
- **Why now:** [Inferred]: The shift toward longer delegated coding tasks increases the value of environments that keep running independently of a developer’s laptop, as Codex usage data showed more users assigning tasks estimated to take an experienced engineer over eight hours in the first half of 2026 ([The Shift to Agentic AI, Jun 2026](https://arxiv.org/abs/2606.26959)).

## Founders & Team

- **Nick Bushak (Co-founder and CEO):**
  - Background: Attended MIT, co-founded recruiting software company Gem as CTO, and previously managed engineering teams at Facebook; business email nick@boxes.dev ([Boxes.dev About](https://boxes.dev/about), [Launch YC](https://www.ycombinator.com/launches/Wp5-boxes-dev-move-your-ai-coding-to-the-cloud)).
  - Twitter/X: @nbushak, 757 followers ([X profile mirror, Nov 2026](https://www.xitter.gq/nbushak)).
  - LinkedIn: Boxes.dev affiliation and 4K followers, headline not retrievable ([LinkedIn, via search snippet](https://www.linkedin.com/in/nbushak)).
  - GitHub: @nbushak, `react-datagrid` fork, 1 star ([GitHub, Nov 2026](https://github.com/nbushak/react-datagrid)).
- **Drew Regitsky (Co-founder and CTO):**
  - Background: MIT class of 2010 and Gem’s first engineer and later principal engineer; business email drew@boxes.dev ([YC founder profile](https://www.ycombinator.com/founders/drew-regitsky), [Launch YC](https://www.ycombinator.com/launches/Wp5-boxes-dev-move-your-ai-coding-to-the-cloud)).
  - Twitter/X: @drewregitsky, 138 followers ([X profile mirror, Nov 2026](https://www.nitter.gq/drewregitsky)).
  - LinkedIn: Boxes.dev affiliation and 1K followers, headline not retrievable ([LinkedIn, via search snippet](https://www.linkedin.com/in/drewregitsky)).
  - GitHub: @dregitsky, `n1-gmail-theme`, 2 stars ([GitHub, Nov 2026](https://github.com/dregitsky/n1-gmail-theme)).
- **Co-founder relationship:** Bushak and Regitsky met at MIT and built Gem together; Gem announced a $1.2B Series C valuation ([Boxes.dev About](https://boxes.dev/about), [Gem Series C announcement, Sep 2021](https://www.gem.com/blog/series-c)).
- **Founder-market fit:** Both founders built engineering systems at Gem and report using Claude Code and Codex almost exclusively for a year before launching Boxes.dev, which is backed by YC ([Boxes.dev About](https://boxes.dev/about), [YC directory](https://www.ycombinator.com/companies/boxesdev)).

## Key Risks

- **Provider access:** Anthropic sets conditions for hosting Claude Code and limits third-party subscription authentication, while Boxes.dev offers customer API keys and a second supported agent, Codex ([Anthropic Claude Code policy](https://code.claude.com/docs/en/legal-and-compliance), [Boxes.dev product page](https://boxes.dev/)).
- **Credential exposure:** Processes running on a devbox can read credentials delivered to that machine, and separate boxes can reach the same external service when they share credentials; Boxes.dev documents transfer encryption and temporary credentials for supported integrations ([Boxes.dev data and credentials docs](https://boxes.dev/help/data-and-credentials)).
- **Native substitution:** OpenAI acquired cloud workspace provider Ona in August 2026 and brought its team into Codex, creating a direct path to bundle hosted workspaces with a model subscription ([Ona acquisition announcement](https://ona.com/stories/ona-joins-openai)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Customer testimonial: over 200 agents on more than 100 machines ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wp5-boxes-dev-move-your-ai-coding-to-the-cloud)); 10,611 standalone CLI downloads and 3,449 older-package downloads in the week ending Nov 15 ([PluginStats weekly report](https://www.pluginstats.com/reports/weekly-2026-w46), [package history](https://www.pluginstats.com/plugins/npm/boxes-dev--dvb)); 100+ Android downloads and 5.0 US iOS from 1 rating ([Google Play](https://play.google.com/store/apps/details?id=dev.boxes), [US App Store](https://apps.apple.com/us/app/boxes-dev/id6758927946), Nov 2026). |
| Revenue Signal | $19/$99/$249 per user per month, custom Teams pricing, $0.40 per extra box-hour on published paid tiers ([Boxes.dev pricing, Nov 2026](https://boxes.dev/#pricing)); realized revenue: No public data found. |
| Founders | Nick Bushak (CEO), MIT, Gem co-founder and CTO, Facebook engineering manager; Drew Regitsky (CTO), MIT, Gem first engineer and principal engineer ([Boxes.dev About](https://boxes.dev/about), [YC directory](https://www.ycombinator.com/companies/boxesdev)). |
| Competitors | Replicas ($4M disclosed, six figures in ARR, hook-configured VMs) ([Replicas](https://replicas.dev/blog/seed), [YC](https://www.ycombinator.com/companies/replicas/jobs/fmrVgOj-founding-growth)); Niteshift ($7M disclosed, revenue unknown, repo-defined environments) ([Niteshift](https://niteshift.dev/blog/introducing-niteshift)); Coder ($172.8M raised, revenue unknown, customer-hosted workspaces) ([Contrary Research](https://research.contrary.com/company/coder/quick-facts)); Cognition ($3.6B reported raised, $1B reported annualized revenue, first-party Devin agent) ([Fireround](https://fireround.dev/companies/cognition), [Bloomberg](https://bloomberg.com/news/articles/2026-09-25/ai-coding-startup-cognition-hits-1-billion-in-annualized-revenue), [Cognition](https://cognition.com/blog/series-e)). |
| Moat Signals | Versioned team templates and project startup scripts ([Boxes.dev data and credentials docs](https://boxes.dev/help/data-and-credentials)). |
| Risk Factors | Model-provider authentication terms ([Anthropic](https://code.claude.com/docs/en/legal-and-compliance)), credential exposure within devboxes ([Boxes.dev docs](https://boxes.dev/help/data-and-credentials)), native workspace substitution ([Ona](https://ona.com/stories/ona-joins-openai)). |
| Founder Reach | Nick: X 757, LinkedIn 4K, listed GitHub repo 1 star ([X mirror](https://www.xitter.gq/nbushak), [LinkedIn, via search snippet](https://www.linkedin.com/in/nbushak), [GitHub](https://github.com/nbushak/react-datagrid)); Drew: X 138, LinkedIn 1K, listed GitHub repo 2 stars ([X mirror](https://www.nitter.gq/drewregitsky), [LinkedIn, via search snippet](https://www.linkedin.com/in/drewregitsky), [GitHub](https://github.com/dregitsky/n1-gmail-theme)). |
| Distribution Signals | Product Hunt #13, 113 points, 165 followers ([Product Hunt](https://www.producthunt.com/products/boxes-dev)); 105 Show HN points, 79 comments ([Hacker News](https://news.ycombinator.com/item?id=48399358)); 103K founder launch-post views, 313 company X followers ([Doomers AI](https://doomers.ai/launches/boxes-dev), [X profile mirror](https://www.nitter.gq/boxesdotdev)); YC offer and Conductor Cloud migration campaign ([Launch YC](https://www.ycombinator.com/launches/Wp5-boxes-dev-move-your-ai-coding-to-the-cloud), [Boxes.dev migration guide](https://boxes.dev/blog/conductor-cloud-shutdown)). |
| Emails | nick@boxes.dev (CEO), drew@boxes.dev (CTO) ([Launch YC](https://www.ycombinator.com/launches/Wp5-boxes-dev-move-your-ai-coding-to-the-cloud)); hi@boxes.dev (general and support), privacy@boxes.dev (privacy) ([Boxes.dev privacy policy](https://boxes.dev/privacy)); play@nickdrewco.com (Android publisher) ([Google Play](https://play.google.com/store/apps/details?id=dev.boxes)). |
