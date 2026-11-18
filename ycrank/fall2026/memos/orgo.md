# Orgo

> Computers for Agents

| Field | Value |
|-------|-------|
| Website | https://www.orgo.ai |
| YC Page | https://www.ycombinator.com/companies/orgo |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/orgo)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 0 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Cloud Computing, AI |
| YC Partner | Andrew Miklas ([YC](https://www.ycombinator.com/companies/orgo)) |
| Emails | spencer@orgo.ai (CEO, billing and urgent inquiries), email@spencerkinney.dev (CEO portfolio), nick@orgo.ai (COO), yunwangt@gmail.com (CTO portfolio), contact@orgo.ai (general), privacy@orgo.ai (privacy and security) ([Orgo About](https://www.orgo.ai/about), [Kinney](https://www.spencerkinney.dev/), [Vasilescu](https://www.nickvasilescu.com/), [Wang](https://tigerywang.github.io/), [Orgo Privacy Policy](https://www.orgo.ai/privacy)) |

## The Idea

- **Problem:** Teams building always-on AI workers need desktops that retain files and run graphical software, and Orgo says building this in-house can take months of work on VM provisioning, streaming, storage, isolation, and autoscaling ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/WBl-orgo-computers-for-agents)).
- **Approach:** Orgo provisions isolated cloud VMs with persistent disks and live desktop takeover, exposes Linux, Windows, and macOS through one API, and advertises 500 ms boot times ([Orgo, Nov 2026](https://www.orgo.ai/)).
- **Differentiation:** Orgo offers dedicated desktops designed to stay on, E2B offers time-bounded Linux sandbox sessions, Daytona packages desktop control in its code-execution sandboxes, and Simular Box emphasizes sharing one desktop and its context across agents ([Orgo](https://www.orgo.ai/), [E2B pricing](https://e2b.dev/pricing), [Daytona docs](https://www.daytona.io/docs/en/computer-use/), [Simular](https://www.simular.ai/articles/box-by-simular-the-computer-your-agents-needs)).
- **Business Model:** Orgo sells prepaid compute from $0.023 per running hour for Small Linux, always-on plans at $29, $99, and $399 per month, and custom enterprise plans ([Orgo pricing, Nov 2026](https://www.orgo.ai/pricing.md)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Orgo offers self-serve provisioning and developer onboarding through its SDKs and agent setup flow, with listings on Vercel Connect and Convex ([Orgo](https://www.orgo.ai/), [Vercel Connect](https://vercel.com/connect/orgo), [Convex Components](https://www.convex.dev/components/orgo-convex)).

## Defensibility

- **Moat today:** Orgo says it operates its own U.S. infrastructure and documents per-VM disks, memory-preserving suspend and resume, and live resizing ([Orgo Subprocessors](https://www.orgo.ai/subprocessors), [Orgo](https://www.orgo.ai/)).
- **Future moat:** [Inferred]: Saved machine state, custom templates, and embedded desktop controls could raise migration costs, with no public retention or migration data to quantify the effect ([Orgo](https://www.orgo.ai/)).
- **Market structure:** No structural barrier identified at this stage ([AWS WorkSpaces, Nov 2026](https://aws.amazon.com/blogs/desktop-and-application-streaming/amazon-workspaces-for-ai-agents-adds-linux-windows-11-and-oauth-support/)).
- **Commoditization risk:** AWS already offers Linux and Windows desktops for agents through WorkSpaces, and Daytona already exposes a graphical desktop API on its sandbox platform ([AWS WorkSpaces](https://aws.amazon.com/blogs/desktop-and-application-streaming/amazon-workspaces-for-ai-agents-adds-linux-windows-11-and-oauth-support/), [Daytona docs](https://www.daytona.io/docs/en/computer-use/)).

## Market & Traction

- **Traction signals:**
  - More than 1,000 teams using Orgo, company-reported at its October 21, 2026 YC launch ([YC](https://www.ycombinator.com/companies/orgo), [Orgo launch post, X mirror](https://teapawt.org/orgo/status/2112968463128072440)).
  - Thousands of production desktops, company-reported ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/WBl-orgo-computers-for-agents)).
  - Customer testimonial: An agency operator reported that a client saved about 12 hours preparing a Squarespace shop with an agent running on Orgo ([Phil, X mirror, Nov 2026](https://nitter.cf/fhlcreative/status/2120628141462798726)).
  - 594 stars for Bops, Orgo’s source-available agent application ([GitHub, Nov 2026](https://github.com/OrgoAI/bops)).
  - 8.6K followers for @orgo ([X mirror, Nov 2026](https://teapawt.org/orgo?filter=posts)).
  - Estimated 36.6K website visits from a small-sample panel ([Mindspent / traffic.cv, Sep 2026](https://mindspent.com/c/orgo)).
  - 1.9K members in Vasilescu’s Agent Empire community, whose tutorials feature Orgo ([Skool, Nov 2026](https://www.skool.com/agentempire/about), [Vasilescu](https://www.nickvasilescu.com/)).
  - Listed integrations on Vercel Connect and Convex Components ([Vercel](https://vercel.com/connect/orgo), [Convex, Nov 2026](https://www.convex.dev/components/orgo-convex)).
  - Orgo profile published by MentionFox ([MentionFox, Oct 2026](https://mentionfox.com/funding/yc-orgo)).
  - Zero open roles on YC’s jobs board ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/orgo/jobs)).
  - Dealroom lists a $125K YC seed entry in September 2026, and PitchBook lists a $500K accelerator entry in January 2026 ([Dealroom](https://app.dealroom.co/companies/orgo_4), [PitchBook](https://pitchbook.com/profiles/company/1566258-22)).
- **Competitors:**
  - **E2B** ($38M raised, $120M reported annualized run rate): Time-bounded desktop sandboxes, with a $21M Series A led by Insight Partners in July 2025 ([E2B release, Nov 2026](https://www.businesswire.com/news/home/20261105034133/en/), [E2B pricing](https://e2b.dev/pricing)).
  - **Daytona** ($91M raised, $100M reported annualized run rate): Desktop control inside code-execution sandboxes, with a $60M Series B led by FirstMark Growth in October 2026 ([Daytona funding](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [run rate](https://www.daytona.io/dotfiles/1m-to-100m-run-rate-in-4-quarters), [docs](https://www.daytona.io/docs/en/computer-use/)).
  - **Simular** ($26.5M raised, revenue unknown): Box shares desktop state across agents, and its latest disclosed round was a $21.5M Series A led by Felicis in December 2025 ([CB Insights](https://www.cbinsights.com/company/simular/financials), [Simular funding](https://www.simular.ai/articles/simular-raises-21-5m-to-build-autonomous-computer-agents), [Box launch](https://www.simular.ai/articles/box-by-simular-the-computer-your-agents-needs)).
- **Why now:** [Inferred]: Anthropic’s February 2026 release of Sonnet 4.6 brought improved multi-step spreadsheet and browser interaction to the default model in Claude Cowork, expanding the workflows developers can run on hosted desktops ([Anthropic, Feb 2026](https://www.anthropic.com/news/claude-sonnet-4-6)).

## Founders & Team

- **Spencer Kinney (Founder/CEO):**
  - **Background:** Z Fellow and former JPMorgan software engineer, with a BS from Illinois State University reported by SignalHire and direct business contact at spencer@orgo.ai ([YC](https://www.ycombinator.com/founders/spencer-kinney), [SignalHire](https://www.signalhire.com/profiles/spencer-kinney%27s-email/173830912), [Orgo About](https://www.orgo.ai/about)).
  - **Twitter/X:** @spncrk, 3.9K followers ([X mirror, Nov 2026](https://www.teapawt.org/spncrk)).
  - **LinkedIn:** Headline unavailable on the public profile ([LinkedIn](https://www.linkedin.com/in/spencerkinney/)).
  - **GitHub:** @spencerkinney, `agent-s2-example`, 8 stars ([GitHub, Nov 2026](https://github.com/spencerkinney)).
- **Nick Vasilescu (Founder/COO):**
  - **Background:** Studied biology at Newman University and innovation design at Wichita State, founded Testkey, and previously built computer-use agents for businesses through computeruse.agency, with direct business contact at nick@orgo.ai ([Wichita State](https://www.wichita.edu/academics/college-of-innovation-and-design/stories/2023/2023-cohort.php), [YC](https://www.ycombinator.com/founders/nick-vasilescu), [Vasilescu](https://www.nickvasilescu.com/)).
  - **Twitter/X:** @nickvasilescu, 17.8K followers ([X mirror, Nov 2026](https://nitter.cf/nickvasilescu)).
  - **LinkedIn:** Headline unavailable on the public profile ([LinkedIn, via search snippet](https://www.linkedin.com/in/nickvasilescu)).
  - **GitHub:** @nickvasilescu, `hermes-desktop-os1`, 534 stars ([GitHub, Nov 2026](https://github.com/nickvasilescu)).
- **Tiger Wang (Founder/CTO):**
  - **Background:** Studied mathematics and computer science at UIUC, developed ScribeAR, and co-founded Geni, with professional portfolio contact at yunwangt@gmail.com ([YC](https://www.ycombinator.com/founders/yunwangtiger), [Wang](https://tigerywang.github.io/)).
  - **Twitter/X:** @TigerYWang, count not retrievable ([YC](https://www.ycombinator.com/founders/yunwangtiger)).
  - **LinkedIn:** Headline unavailable on the public profile ([LinkedIn, via search snippet](https://www.linkedin.com/in/tigeryw)).
  - **GitHub:** @TigerYWang, ScribeAR’s project repository has 18 stars and his own `NucGPT` has 2 stars ([GitHub, Nov 2026](https://github.com/TigerYWang)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** YC lists three active founders whose experience spans software engineering, commercial computer-use agent deployments, and applied AI research, and Orgo names YC, Forum Ventures, Z Fellows, and Pareto Holdings as backers ([YC](https://www.ycombinator.com/companies/orgo), [Wang](https://tigerywang.github.io/), [Orgo About](https://www.orgo.ai/about)).

## Key Risks

- **Cloud substitution:** AWS added Linux and Windows 11 agent desktops with AWS identity integration, giving existing WorkSpaces customers an overlapping option, while Orgo supports multiple model providers and operating systems ([AWS](https://aws.amazon.com/blogs/desktop-and-application-streaming/amazon-workspaces-for-ai-agents-adds-linux-windows-11-and-oauth-support/), [Orgo](https://www.orgo.ai/)).
- **Connected-app permissions:** View-only users can ask an agent to use connected apps, and a clone can retain app access, while workspace editors can disconnect integrations ([Orgo Privacy Policy](https://www.orgo.ai/privacy)).
- **Fleet availability:** Orgo’s status page reported 99.760% compute-fleet uptime over 30 days, and Orgo offers daily Linux and Windows backups and an enterprise SLA ([Orgo Status, Nov 17, 2026](https://status.orgo.ai/), [Orgo](https://www.orgo.ai/)).
- **Name overlap:** Organogenesis trades under ORGO, which can mix unrelated public-market results into company searches ([Organogenesis investor relations](https://investors.organogenesis.com/news-events/press-releases/), [Orgo About](https://www.orgo.ai/about)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | More than 1,000 teams and thousands of production desktops ([YC, Oct 2026](https://www.ycombinator.com/companies/orgo)); customer testimonial of about 12 hours saved ([Phil, X mirror, Nov 2026](https://nitter.cf/fhlcreative/status/2120628141462798726)) |
| Revenue Signal | $29, $99, and $399 monthly plans and Small Linux from $0.023 per running hour ([Orgo pricing, Nov 2026](https://www.orgo.ai/pricing.md)); PitchBook lists the company as generating revenue with no amount shown ([PitchBook](https://pitchbook.com/profiles/company/1566258-22)) |
| Founders | Spencer Kinney (CEO), JPMorgan software engineering and Z Fellows; Nick Vasilescu (COO), computeruse.agency and Testkey; Tiger Wang (CTO), UIUC mathematics and computer science, ScribeAR, and Geni ([YC](https://www.ycombinator.com/companies/orgo), [Wichita State](https://www.wichita.edu/academics/college-of-innovation-and-design/stories/2023/2023-cohort.php), [Wang](https://tigerywang.github.io/)) |
| Competitors | E2B ($38M raised, $120M annualized run rate, time-bounded sandboxes) ([E2B release](https://www.businesswire.com/news/home/20261105034133/en/), [E2B pricing](https://e2b.dev/pricing)); Daytona ($91M raised, $100M annualized run rate, desktop-enabled code sandboxes) ([Daytona funding](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [run rate](https://www.daytona.io/dotfiles/1m-to-100m-run-rate-in-4-quarters)); Simular ($26.5M raised, revenue unknown, shared desktop state) ([CB Insights](https://www.cbinsights.com/company/simular/financials), [Simular Box](https://www.simular.ai/articles/box-by-simular-the-computer-your-agents-needs)) |
| Moat Signals | Company-operated U.S. infrastructure, persistent VM disks, suspend and resume, and live resizing ([Orgo](https://www.orgo.ai/), [Orgo Subprocessors](https://www.orgo.ai/subprocessors)) |
| Risk Factors | AWS desktop overlap, connected-app access by view-only members, fleet downtime ([AWS](https://aws.amazon.com/blogs/desktop-and-application-streaming/amazon-workspaces-for-ai-agents-adds-linux-windows-11-and-oauth-support/), [Orgo Privacy Policy](https://www.orgo.ai/privacy), [Orgo Status](https://status.orgo.ai/)) |
| Founder Reach | Kinney: X 3.9K, LinkedIn 2K, GitHub repo 8 stars ([X mirror](https://www.teapawt.org/spncrk), [LinkedIn](https://www.linkedin.com/in/spencerkinney/), [GitHub](https://github.com/spencerkinney)); Vasilescu: X 17.8K, LinkedIn 392, GitHub repo 534 stars ([X mirror](https://nitter.cf/nickvasilescu), [LinkedIn, via search snippet](https://www.linkedin.com/in/nickvasilescu), [GitHub](https://github.com/nickvasilescu)); Wang: ScribeAR repo 18 stars ([GitHub](https://github.com/TigerYWang)) |
| Distribution Signals | @orgo 8.6K followers, Bops 594 stars, Agent Empire 1.9K members, Vercel Connect and Convex listings ([X mirror](https://teapawt.org/orgo?filter=posts), [GitHub](https://github.com/OrgoAI/bops), [Skool](https://www.skool.com/agentempire/about), [Vercel](https://vercel.com/connect/orgo), [Convex](https://www.convex.dev/components/orgo-convex)); estimated 36.6K September visits ([Mindspent / traffic.cv, Sep 2026](https://mindspent.com/c/orgo)) |
| Emails | spencer@orgo.ai (CEO, billing and urgent inquiries), email@spencerkinney.dev (CEO portfolio), nick@orgo.ai (COO), yunwangt@gmail.com (CTO portfolio), contact@orgo.ai (general), privacy@orgo.ai (privacy and security) ([Orgo About](https://www.orgo.ai/about), [Kinney](https://www.spencerkinney.dev/), [Vasilescu](https://www.nickvasilescu.com/), [Wang](https://tigerywang.github.io/), [Orgo Privacy Policy](https://www.orgo.ai/privacy)) |
