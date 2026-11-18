# Agent 37

> Cheapest sandbox for AI agents

| Field | Value |
|-------|-------|
| Website | https://www.agent37.com/cloud |
| YC Page | https://www.ycombinator.com/companies/agent-37 |
| Batch | Fall 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 0 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, SaaS, B2B, AI |
| YC Partner | Andrew Miklas |
| Emails | info@agent37.com ([Agent 37 Privacy Policy](https://www.agent37.com/privacy), privacy requests and security reports) |

## The Idea

- **Problem:** Developers selling AI agents need to provision and maintain a separate environment for each customer, a task ETEC+ handled by manually setting up VPS instances and Boon handled by building its own provisioning pipeline. ([Launch YC](https://www.ycombinator.com/launches/UTg-agent37-host-any-agent-harness), Sep 2026)
- **Approach:** An API provisions a gVisor-isolated sandbox per customer, boots a preconfigured agent harness or custom image, and preserves files and agent state across sessions and sleep cycles. ([Agent 37 Cloud](https://www.agent37.com/cloud), Nov 2026)
- **Differentiation:** Agent 37 packages persistent per-customer agents with harness templates and a white-label app, while Daytona offers reusable environment snapshots, E2B offers deployment in a customer’s own cloud, and Modal supports GPU-backed sandboxes. ([Agent 37 Cloud](https://www.agent37.com/cloud), [Daytona Docs](https://www.daytona.io/docs/snapshots/), [E2B BYOC](https://e2b.dev/byoc), [Modal Docs](https://modal.com/docs/guide/sandbox-resources))
- **Business Model:** Cloud bills prepaid compute by the running minute and persistent disk until deletion, lists $4.76 per month for an always-on 2-vCPU, 4-GB sandbox, and gives new accounts $5 in credit after a card is added. ([Agent 37 Cloud pricing](https://www.agent37.com/cloud#pricing), Nov 2026)
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Agent 37 distributes through self-serve signup, founder demos, Product Hunt, Hacker News, and an open-source starter kit that agencies can rebrand and sell to their own customers. ([Agent 37 Cloud](https://www.agent37.com/cloud), [Product Hunt](https://www.producthunt.com/products/agent-37-38?launch=agent-37-cloud), [Launch HN](https://news.ycombinator.com/item?id=50059096), [GitHub](https://github.com/agent37-platform/starter-kit))

## Defensibility

- **Moat today:** Boon integrated sandbox provisioning and scheduled runs into its own application and moved its agent infrastructure onto Agent 37, creating a documented integration dependency. ([Boon case study](https://www.agent37.com/case-studies/boon-gave-every-client-their-own-hermes-agent-in-3-days-with-agent37), accessed Nov 2026)
- **Future moat:** [Inferred]: Embedded provisioning, customer-specific credentials, and persistent agent state could raise migration costs as reseller deployments grow, though public case studies provide adoption examples and leave retention unquantified. ([Agent 37 Cloud](https://www.agent37.com/cloud), [ETEC+ case study](https://www.agent37.com/case-studies/etec-plus-stopped-building-servers-and-started-selling-seats-with-agent37))
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** AWS already offers isolated agent sessions, and Agent 37 describes its cost advantage as coming from commercially rented Hetzner and OVH servers, shared host resources, and optimization for agent workloads. ([AWS AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-sessions.html), [Launch HN](https://news.ycombinator.com/item?id=50059096), Oct 2026)

## Market & Traction

- **Traction signals:**
  - Current platform: Agent 37 says it powers agents for more than 250 startups. ([Agent 37 homepage](https://www.agent37.com/), accessed Nov 2026)
  - Current platform: #1 Product of the Day on June 21, 2026, with 293 launch points as of November. ([Product Hunt, Agent 37 Cloud](https://www.producthunt.com/products/agent-37-38?launch=agent-37-cloud))
  - Prior product, OpenClaw-only hosting: Approximately 100 paying users within two days of launch, as recounted in a founder interview. ([Rohit Tiru founder interview](https://www.linkedin.com/pulse/can-one-recognize-pmf-48-hours-founder-took-14-shots-find-rohit-tiru-k72sc), Sep 2026)
  - Prior product, OpenClaw-only hosting: #1 Product of the Day on March 14, 2026, after the February start; the broader multi-harness Cloud product launched in June. ([Launch HN](https://news.ycombinator.com/item?id=50059096), [Product Hunt, original launch](https://www.producthunt.com/products/agent-37), [Product Hunt, Cloud launch](https://www.producthunt.com/products/agent-37-38?launch=agent-37-cloud))
  - Customer testimonial: Boon reported deploying per-client Hermes agents in three days and reducing monthly cost per agent from $85 to $4.94. ([Boon case study](https://www.agent37.com/case-studies/boon-gave-every-client-their-own-hermes-agent-in-3-days-with-agent37), accessed Nov 2026)
  - Customer testimonial: ETEC+ moved more than 30 existing clients to its branded agent service and had the service live six days after adopting the starter kit. ([Launch YC](https://www.ycombinator.com/launches/UTg-agent37-host-any-agent-harness), Sep 2026)
  - Customer testimonial: Vision founder Maddie Wang reported saving about $2,000 per month after switching from AWS and Hetzner. ([Vision case study](https://www.agent37.com/case-studies/vision-gave-every-coding-session-its-own-machine-with-agent37), accessed Nov 2026)
  - Personal multi-harness hosting: The founder reported that free-plan users accounted for over 90% of new signups. ([Launch HN](https://news.ycombinator.com/item?id=50059096), Oct 2026)
  - Funding: CB Insights lists $500,000 from YC in September, Dealroom lists $125,000 from YC in September, and Jason Calacanis made a separate $125,000 on-air offer that the founder accepted in February. ([CB Insights](https://www.cbinsights.com/company/agent-37/financials), [Dealroom](https://app.dealroom.co/companies/agent37), [This Week in Startups](https://podcasts.apple.com/ng/podcast/how-these-3-founders-are-building-on-open-claw-e2248/id315114957?i=1000749351846), 2026)
  - Distribution: An estimated 145,000 domain visits in September, 503 company LinkedIn followers, and 444 X followers for @Agent37HQ in a November mirror snapshot. ([Mindspent, traffic.cv estimate](https://mindspent.com/c/agent-37), [LinkedIn](https://www.linkedin.com/company/agent37), [Teapawt X mirror](https://teapawt.net/Agent37HQ))
  - Open source: 646 GitHub stars for Minions, the company’s Hermes agent dashboard. ([GitHub](https://github.com/agent37-platform/minions), Nov 2026)
  - Press and hiring: RuntimeWire covered the sandbox launch on November 3, and YC showed zero active postings in November. ([RuntimeWire](https://runtimewire.com/article/agent37-says-a-249-vercel-sandbox-should-cost-4-76-a-month), [YC Jobs](https://www.ycombinator.com/companies/agent-37/jobs), Nov 2026)
- **Competitors:**
  - Daytona ($91M raised, $100M revenue run rate): Reusable environment snapshots and GPU sandboxes, with a $60M Series B led by FirstMark Growth in October 2026. ([Daytona financing](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [Daytona revenue disclosure](https://www.daytona.io/dotfiles/1m-to-100m-run-rate-in-4-quarters), [Daytona Docs](https://www.daytona.io/docs/en/gpu-sandboxes/))
  - E2B ($38M raised, $120M annualized run rate): Offers deployment in the customer’s cloud, with a $21M Series A led by Insight Partners in July 2025. ([E2B Business Wire release](https://www.businesswire.com/news/home/20261105034133/en/), Nov 2026, [E2B BYOC](https://e2b.dev/byoc))
  - Modal (over $1.2B raised, over $1B company annualized run rate, including $300M from sandboxes): Offers GPU sandboxes alongside inference and training infrastructure, with a $750M Series D led by Accel in October 2026. ([Modal company page](https://modal.com/company), [Modal Series D](https://modal.com/blog/1-billion-annualized-run-rate-series-d), [Accel](https://www.accel.com/news/our-investment-in-modal))
- **Why now:** [Inferred]: OpenClaw’s January 2026 launch made a ready-to-run personal agent available, and Agent 37 began hosting it in February before expanding to other harnesses. ([OpenClaw launch](https://openclaw.ai/blog/introducing-openclaw), [Launch HN](https://news.ycombinator.com/item?id=50059096))

## Founders & Team

- **VISHNU KRISHNAPRASAD (Founder/CEO):**
  - **Background:** Carnegie Mellon information systems master’s graduate, former Amazon senior software engineer and Quantcast engineering manager, and founder of Real Voxel and Dota2Connect, with no public founder business email found. ([YC founder profile](https://www.ycombinator.com/founders/vishnu-krishnaprasad))
  - **Twitter/X:** @an_engineer_log, approximately 11.5K followers. ([YC founder profile](https://www.ycombinator.com/founders/vishnu-krishnaprasad), [Teapawt X mirror](https://teapawt.net/an_engineer_log), Nov 2026)
  - **LinkedIn:** Profile lists Agent 37, headline unavailable, with 5,716 followers shown on a public post. ([LinkedIn profile](https://www.linkedin.com/in/vishnukrishnaprasad), [LinkedIn post](https://www.linkedin.com/posts/vishnukrishnaprasad_agent37com-yc-f26-is-the-most-affordable-activity-7510748489669156864-uBAu), Nov 2026)
  - **GitHub:** @vishnukool released Minions, which has 646 stars under the company account, and has 43 followers on his personal profile. ([GitHub releases](https://github.com/agent37-platform/minions/releases), [repository](https://github.com/agent37-platform/minions), [profile](https://github.com/vishnukool), Nov 2026)
- **Co-founder relationship:** YC lists Krishnaprasad as the sole active founder. ([YC company profile](https://www.ycombinator.com/companies/agent-37), Nov 2026)
- **Founder-market fit:** Krishnaprasad says he built Amazon’s internal chatbot Diya and coding harness Ziya before starting Agent 37, and YC lists Andrew Miklas as primary partner. ([Launch HN](https://news.ycombinator.com/item?id=50059096), [YC company profile](https://www.ycombinator.com/companies/agent-37))

## Key Risks

- **Price competition:** [Inferred]: AWS’s overlapping agent runtime gives customers another option and could compress sandbox pricing, while Agent 37 advertises a refund of the price difference for cheaper alternatives. ([AWS AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-sessions.html), [Launch YC](https://www.ycombinator.com/launches/XNf-agent37-the-cheapest-ai-sandbox))
- **Runtime compatibility:** Docker-in-Docker and Android emulation require the higher-priced full-VM option because the default gVisor runtime lacks those capabilities. ([Launch HN](https://news.ycombinator.com/item?id=50059096), Oct 2026)
- **Availability commitments:** Customers running production agents rely on sandbox uptime, and the standard terms provide specific uptime commitments only by separate written agreement. ([Agent 37 Cloud](https://www.agent37.com/cloud), [Terms of Service](https://www.agent37.com/terms), Nov 2026)
- **Name ambiguity:** [Inferred]: Unqualified searches for Agent 37 can surface DC’s alias for Dick Grayson, while the startup’s YC listing identifies it by agent37.com. ([DC](https://www.dc.com/blog/2016/07/26/reader-recaps-nightwing-rebirth-the-flash-2-featuring-spoilers-and-more), [YC company profile](https://www.ycombinator.com/companies/agent-37))

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Current platform powers agents for over 250 startups ([Agent 37 homepage](https://www.agent37.com/), Nov 2026). Prior OpenClaw-only hosting reached approximately 100 paying users within two days ([Rohit Tiru founder interview](https://www.linkedin.com/pulse/can-one-recognize-pmf-48-hours-founder-took-14-shots-find-rohit-tiru-k72sc), Sep 2026). Customer testimonial: Boon reduced monthly cost per agent from $85 to $4.94 ([Boon case study](https://www.agent37.com/case-studies/boon-gave-every-client-their-own-hermes-agent-in-3-days-with-agent37), accessed Nov 2026). |
| Revenue Signal | Cloud customers averaged $0.37 per sandbox per month, founder-reported ([Launch HN](https://news.ycombinator.com/item?id=50059096), Oct 2026). Cloud lists $4.76 per month for an always-on 2-vCPU, 4-GB sandbox ([Agent 37 Cloud pricing](https://www.agent37.com/cloud), Nov 2026). Personal multi-harness plans start at $3.99 per month ([Agent 37 Personal](https://www.agent37.com/personal), Nov 2026). |
| Founders | Vishnu Krishnaprasad (Founder/CEO), Carnegie Mellon master’s, senior software engineer at Amazon, engineering manager at Quantcast ([YC founder profile](https://www.ycombinator.com/founders/vishnu-krishnaprasad)). |
| Competitors | Daytona ($91M raised, $100M run rate, reusable snapshots) ([Daytona financing](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [revenue](https://www.daytona.io/dotfiles/1m-to-100m-run-rate-in-4-quarters), [docs](https://www.daytona.io/docs/snapshots/)). E2B ($38M raised, $120M annualized run rate, customer-cloud deployment) ([E2B release](https://www.businesswire.com/news/home/20261105034133/en/), [BYOC](https://e2b.dev/byoc)). Modal (over $1.2B raised, over $1B company annualized run rate including $300M from sandboxes, GPU sandboxes) ([Modal company page](https://modal.com/company), [Series D](https://modal.com/blog/1-billion-annualized-run-rate-series-d), [Accel](https://www.accel.com/news/our-investment-in-modal)). |
| Moat Signals | Boon moved its agent infrastructure onto Agent 37 and integrated provisioning into its own workflows ([Boon case study](https://www.agent37.com/case-studies/boon-gave-every-client-their-own-hermes-agent-in-3-days-with-agent37)). |
| Risk Factors | Overlap with AWS isolated agent sessions, full-VM requirement for Docker-in-Docker and Android emulation, uptime commitments by separate written agreement ([AWS AgentCore](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime-sessions.html), [Launch HN](https://news.ycombinator.com/item?id=50059096), [Agent 37 terms](https://www.agent37.com/terms)). |
| Founder Reach | Vishnu Krishnaprasad, approximately 11.5K X followers, 5,716 LinkedIn followers, 43 GitHub followers, 646 stars on the company’s Minions repo ([Teapawt X mirror](https://teapawt.net/an_engineer_log), [LinkedIn](https://www.linkedin.com/posts/vishnukrishnaprasad_agent37com-yc-f26-is-the-most-affordable-activity-7510748489669156864-uBAu), [GitHub profile](https://github.com/vishnukool), [Minions](https://github.com/agent37-platform/minions), Nov 2026). |
| Distribution Signals | Product Hunt #1 for Cloud in June and prior OpenClaw-only hosting in March ([Cloud launch](https://www.producthunt.com/products/agent-37-38?launch=agent-37-cloud), [original launch](https://www.producthunt.com/products/agent-37), 2026). Estimated 145,000 domain visits in September ([Mindspent, traffic.cv estimate](https://mindspent.com/c/agent-37), Sep 2026). |
| Emails | info@agent37.com ([Agent 37 Privacy Policy](https://www.agent37.com/privacy), privacy requests and security reports). |
