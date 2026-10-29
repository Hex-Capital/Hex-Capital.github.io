# Superserve

> Virtual machines for autonomous agents

| Field | Value |
|-------|-------|
| Website | https://superserve.ai |
| YC Page | https://www.ycombinator.com/companies/superserve |
| Batch | Fall 2026 ([YC, via search snippet](https://www.ycombinator.com/companies/superserve)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Cloud Computing, Infrastructure, AI |
| YC Partner | Max Kolysh ([YC, via search snippet](https://www.ycombinator.com/companies/superserve)) |
| Emails | engineering@superserve.ai ([official GitHub](https://github.com/superserve-ai/superserve)); jobs@superserve.ai ([careers](https://www.superserve.ai/careers/)) |

## The Idea

- **Problem:** Coding-agent and training-environment builders need isolated computers with persistent state for tasks lasting hours or weeks, otherwise managing servers and warm pools themselves ([YC, Oct 2026, via search snippet](https://www.ycombinator.com/companies/superserve)).
- **Approach:** Superserve provisions template-based VMs with claimed startup below 50ms, checkpoints memory and files for pause/resume/fork operations, and brokers credentials outside the guest ([YC, Oct 2026, via search snippet](https://www.ycombinator.com/companies/superserve)).
- **Differentiation:** Superserve advertises unrestricted session duration versus E2B’s 24-hour continuous-runtime limit on Pro, while Modal combines sandboxes with inference and training products ([Superserve](https://www.superserve.ai/), [E2B documentation](https://docs.e2b.dev/sandbox/persistence), [Modal, Oct 2026](https://modal.com/blog/1-billion-annualized-run-rate-series-d)).
- **Business Model:** Consumption pricing lists $0.0504/vCPU-hour and $0.0162/GiB-hour, introductory credits of $5 plus $95 after adding billing, and Pro starting at $1,000/month billed annually ([Superserve pricing, accessed Oct 27, 2026](https://www.superserve.ai/)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Distribution includes self-service onboarding, public SDKs, and integrations for Claude Managed Agents and LangChain’s agent ecosystem ([GitHub](https://github.com/superserve-ai/superserve), [OCV](https://www.linkedin.com/posts/open-core-ventures_exciting-news-from-two-of-our-portfolio-companies-activity-7472310194937683968-ZR0D), [LangChain integration](https://github.com/superserve-ai/langchain-superserve)).

## Defensibility

- **Moat today:** Technical implementation includes full-memory snapshots, persistent forks, and host-scoped credential substitution, although these documented features do not establish exclusivity ([snapshot documentation](https://docs.superserve.ai/sandbox/snapshots), [secrets documentation](https://docs.superserve.ai/secrets/overview)).
- **Future moat:** [Inferred]: Accumulated VM templates, stored execution state, and credential configurations could increase migration work, but public retention or migration-cost measurements were not found.
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given E2B’s existing memory-preserving persistence and Modal’s generally available VM sandboxes ([E2B](https://docs.e2b.dev/sandbox/persistence), [Modal, Oct 2026](https://modal.com/blog/1-billion-annualized-run-rate-series-d)).
- **Commoditization risk:** Other infrastructure teams can use the published Apache-2.0 SDK/console code, while E2B already implements indefinite paused-state retention, leaving overlapping functionality publicly available ([Superserve GitHub](https://github.com/superserve-ai/superserve), [E2B](https://docs.e2b.dev/sandbox/persistence)).

## Market & Traction

- **Traction signals:**
  - Over 100,000 machines run weekly, with Lindy and Y Combinator named as users; these are company-reported usage figures, not paying-customer counts ([YC, Oct 2026, via search snippet](https://www.ycombinator.com/companies/superserve)).
  - Public SDK/console repository: 471 stars and 53 forks ([GitHub, accessed Oct 27, 2026](https://github.com/superserve-ai/superserve)).
  - Company LinkedIn: 368 followers ([LinkedIn, accessed Oct 27, 2026](https://www.linkedin.com/company/super-serve-ai)).
  - Company X account @superserve_ai: 257 followers in an indexed mirror; the direct X page was inaccessible ([Teapawt, accessed Oct 27, 2026, via search snippet](https://teapawt.org/superserve_ai)).
  - Official careers page lists a Senior/Staff Platform Software Engineer opening, whereas YC lists zero jobs ([careers](https://www.superserve.ai/careers/), [YC, accessed Oct 27, 2026, via search snippet](https://www.ycombinator.com/companies/superserve)).
  - Founder announced pre-seed backing from Open Core Ventures without disclosing an amount ([founder announcement](https://www.linkedin.com/posts/pavitrabhalla_careers-superserve-building-sandbox-infra-activity-7384310361862131712-yqC2)).
  - **Product history:** OCV launched the earlier RayAI agent-orchestration platform on November 5, 2025 and subsequently identified it as Superserve; the current site markets Firecracker VMs, but the transition date is undisclosed ([OCV](https://opencoreventures.com/insights/rayai-extends-ray-oss-to-orchestrate-multi-agent-systems/), [Superserve](https://www.superserve.ai/)).
- **Competitors:**
  - **E2B ($35M raised, revenue unknown):** Supports memory-preserving pause/resume but caps continuous Pro sessions at 24 hours; latest disclosed round was $21M Series A led by Insight Partners on July 28, 2025 ([CB Insights, via search snippet](https://www.cbinsights.com/company/e2b/financials), [E2B funding](https://e2b.dev/resources/series-a), [documentation](https://docs.e2b.dev/sandbox/persistence)).
  - **Daytona ($91M raised, revenue unknown):** Markets Linux, Windows, macOS, and GPU environments versus Superserve’s advertised Firecracker VM offering; raised $60M Series B led by FirstMark Growth on October 20, 2026 ([Daytona announcement](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [Superserve](https://www.superserve.ai/)).
  - **Modal ($1,215M raised, over $1B annualized revenue run rate):** Combines sandboxes with inference and training, reporting a $300M sandbox run rate; raised $750M Series D led by Accel on October 14, 2026 ([CB Insights, via search snippet](https://www.cbinsights.com/company/modal-3/financials), [Modal announcement](https://modal.com/blog/1-billion-annualized-run-rate-series-d)).
- **Why now:** Daytona identifies long-running agents becoming mainstream during 2026 as the catalyst for infrastructure supporting persistent state, rapid provisioning, and parallel execution ([Daytona, Oct 20, 2026](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud)).

## Founders & Team

- **Pavitra Bhalla (Founder/CEO):**
  - Background: Studied at Santa Clara University, worked as Staff Software Engineer at Dosu, and previously served as founding engineer and Director of Engineering at LTSE ([LinkedIn](https://www.linkedin.com/in/pavitrabhalla), [YC, via search snippet](https://www.ycombinator.com/companies/superserve)).
  - Twitter/X: @pavitrabhalla, 254 followers in the retrieved mirror snapshot; direct X access failed ([TwStalker, accessed Oct 27, 2026](https://w.twstalker.com/pavitrabhalla)).
  - LinkedIn: Public profile lists Superserve and Santa Clara University with “2K followers”; a separate headline was not displayed ([LinkedIn, accessed Oct 27, 2026](https://www.linkedin.com/in/pavitrabhalla)).
  - GitHub: @pavitrabhalla identifies himself as Superserve’s founder and pins the company repository, which has 471 stars; this is an organization repository, not a personal project ([profile](https://github.com/pavitrabhalla), [repository, accessed Oct 27, 2026](https://github.com/superserve-ai/superserve)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Bhalla’s documented Dosu agent-engineering and LTSE platform-development experience overlaps with Superserve’s execution-infrastructure work, and OCV confirms portfolio backing ([OCV founder profile](https://opencoreventures.com/insights/rayai-extends-ray-oss-to-orchestrate-multi-agent-systems/), [OCV portfolio](https://opencoreventures.com/companies/)).

## Key Risks

- **Feature convergence:** [Inferred]: E2B’s memory-preserving persistence and Modal’s VM sandboxes reduce differentiation based solely on durable execution ([E2B](https://docs.e2b.dev/sandbox/persistence), [Modal](https://modal.com/blog/1-billion-annualized-run-rate-series-d)).
- **Lifecycle reliability:** Superserve documents failed boot/resume states and pause-transition conflicts requiring retries, while configurable auto-pause and retained failed entries provide recovery controls ([lifecycle documentation](https://docs.superserve.ai/sandbox/lifecycle)).
- **Authorized credential misuse:** [Inferred]: Keeping credentials outside a VM prevents direct key disclosure but does not by itself prevent an agent from making unwanted authenticated requests to permitted hosts; host scoping and usage auditing constrain this exposure ([secrets documentation](https://docs.superserve.ai/secrets/overview)).
- **Name ambiguity:** An unrelated Toronto consultancy also uses SuperServe, requiring domain checks when attributing company or social data ([consultancy LinkedIn](https://www.linkedin.com/company/superserve)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Over 100K machines/week; Lindy and YC named users ([YC, Oct 2026, via search snippet](https://www.ycombinator.com/companies/superserve)) |
| Revenue Signal | $0.0504/vCPU-hour; $0.0162/GiB-hour; Pro from $1,000/month billed annually ([pricing, Oct 2026](https://www.superserve.ai/)) |
| Founders | Pavitra Bhalla, Founder/CEO: former Dosu staff engineer and LTSE engineering director ([YC, via search snippet](https://www.ycombinator.com/companies/superserve)) |
| Competitors | E2B ($35M raised, revenue unknown, capped continuous runtime); Daytona ($91M raised, revenue unknown, multiple operating systems); Modal ($1,215M raised, >$1B annualized run rate, inference/training alongside sandboxes) ([E2B funding database, via search snippet](https://www.cbinsights.com/company/e2b/financials), [E2B docs](https://docs.e2b.dev/sandbox/persistence), [Daytona](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [Modal funding database, via search snippet](https://www.cbinsights.com/company/modal-3/financials), [Modal](https://modal.com/blog/1-billion-annualized-run-rate-series-d)) |
| Moat Signals | Memory/disk snapshots and host-scoped credential brokering ([snapshots](https://docs.superserve.ai/sandbox/snapshots), [secrets](https://docs.superserve.ai/secrets/overview)) |
| Risk Factors | Overlapping persistence features; documented boot/resume failures; shared company name ([E2B](https://docs.e2b.dev/sandbox/persistence), [lifecycle docs](https://docs.superserve.ai/sandbox/lifecycle), [unrelated consultancy](https://www.linkedin.com/company/superserve)) |
| Founder Reach | Pavitra Bhalla: X 254 followers in mirror; LinkedIn 2K; company repo 471 stars ([TwStalker](https://w.twstalker.com/pavitrabhalla), [LinkedIn](https://www.linkedin.com/in/pavitrabhalla), [GitHub](https://github.com/superserve-ai/superserve), accessed Oct 27, 2026) |
| Distribution Signals | GitHub 471 stars/53 forks; LinkedIn 368 followers; Claude Managed Agents integration ([GitHub](https://github.com/superserve-ai/superserve), [LinkedIn](https://www.linkedin.com/company/super-serve-ai), [OCV](https://www.linkedin.com/posts/open-core-ventures_exciting-news-from-two-of-our-portfolio-companies-activity-7472310194937683968-ZR0D), accessed Oct 27, 2026) |
| Emails | engineering@superserve.ai; jobs@superserve.ai ([official GitHub](https://github.com/superserve-ai/superserve), [careers](https://www.superserve.ai/careers/)) |
