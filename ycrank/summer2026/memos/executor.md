# Executor

> The open source integration management layer for AI.

| Field | Value |
|-------|-------|
| Website | https://executor.sh |
| YC Page | https://www.ycombinator.com/companies/executor |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Artificial Intelligence, SaaS |
| YC Partner | Not listed |
| Emails | No public data found |

## The Idea

- **Problem:** AI-development teams must separately configure integrations, credentials, and tool schemas for each agent client, while large tool catalogs can consume substantial context—Executor’s example estimates approximately 278,800 tokens for 1,640 directly exposed tools ([Executor website, Jul 2026](https://executor.sh/)).
- **Approach:** Executor presents MCP, OpenAPI, GraphQL, and custom JavaScript integrations through one MCP endpoint, searches the catalog at runtime, loads schemas on demand, and injects credentials outside its JavaScript sandbox ([Executor website, Jul 2026](https://executor.sh/)).
- **Differentiation:** Executor differs from Composio’s managed integration catalog and Arcade’s agent-authentication platform by offering an MIT-licensed desktop, CLI, Docker, Cloudflare, and hosted runtime that accepts externally supplied MCP, OpenAPI, and GraphQL sources ([Executor GitHub, Jul 2026](https://github.com/UsefulSoftwareCo/executor), [Arcade comparison, Feb 2026](https://www.arcade.dev/compare/arcade-vs-composio/)).
- **Business Model:** Cloud pricing includes a free tier for three members and 10,000 monthly executions, while Team costs $150 per organization per month with unlimited members and 250,000 executions; both charge $0.20 per additional 1,000 executions ([Executor pricing, Jul 2026](https://executor.sh/)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** [Inferred]: The distribution path combines an MIT-licensed GitHub repository, npm/desktop downloads, self-hosting, a hosted free tier, founder-led social distribution, and conversion to the $150-per-month Team plan.

## Defensibility

- **Moat today:** The public repository has approximately 2,800 GitHub stars and 199 forks, while the runtime includes protocol normalization, sandboxing, host-side secret injection, and imported destructive-action semantics ([GitHub, Jul 2026](https://github.com/UsefulSoftwareCo/executor), [Executor website, Jul 2026](https://executor.sh/)).
- **Future moat:** [Inferred]: Reusable organizational integration configurations, credentials, policies, and execution histories could create switching costs, but public sources do not establish retention or migration-cost data.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Composio, Arcade, Pipedream, Klavis AI, Nango, Paragon, Zapier, Workato, and open-source gateway projects can provide overlapping authentication, MCP routing, integration catalogs, or policy enforcement ([MCP platform comparison, Jun 2026](https://rywalker.com/research/mcp-integration-platforms)).

## Market & Traction

- **Traction signals:**
  - Approximately 2,800 GitHub stars and 199 forks ([GitHub, Jul 2026](https://github.com/UsefulSoftwareCo/executor)).
  - “Thousands of users” and 2,000 GitHub stars were reported by the founder when announcing the YC S26 participation ([Rhys Sullivan on X via Lightbrd, Jun 2026](https://lightbrd.com/RhysSullivan)).
  - 22 Homebrew installs in the preceding 30 days and 81 installs in the preceding 90 and 365 days ([Homebrew, Jul 2026](https://formulae.brew.sh/cask/executor)).
  - Founder account @RhysSullivan had 57,245 followers ([Lightbrd, Jun 2026](https://lightbrd.com/RhysSullivan)).
  - A third-party benchmark reported Executor completing 10 of 10 tasks while using 675,842 total tokens, versus 846,048 for direct vanilla MCP ([Caplets benchmark, Jun 2026](https://caplets.dev/)).
- **Competitors (minimum 3, up to 5):**
  - Composio ($29M raised, revenue unknown): supplies more than 1,000 managed toolkits and agent integrations, whereas Executor emphasizes importing arbitrary MCP, OpenAPI, GraphQL, and custom sources into a self-hostable runtime ([Composio, Jul 2025](https://composio.dev/blog/series-a)).
  - Arcade ($12M raised, revenue unknown): centers agent authorization and authenticated actions, whereas Executor combines authentication with protocol normalization, discovery, sandboxed code execution, and self-hosting ([Arcade, Mar 2025](https://www.arcade.dev/blog/arcades-12m-milestone-a-conversation-with-alex/)).
  - Pipedream (funding not publicly verified, revenue unknown): provides more than 3,000 pre-built connectors and was acquired by Workday, whereas Executor offers an MIT-licensed local and self-hosted runtime alongside cloud service ([Workday, Nov 2025](https://investor.workday.com/news-and-events/press-releases/news-details/2025/Workday-Signs-Definitive-Agreement-to-Acquire-Pipedream-11-19-2025/default.aspx)).
- **Why now:** Anthropic introduced MCP in November 2024, creating a shared protocol around which agent clients, tool servers, and gateways could converge ([MCP architecture paper, Jun 2026](https://arxiv.org/abs/2606.30317)).

## Founders & Team

- **Rhys Sullivan (Founder):**
  - Background: Sullivan earned a BS in Computer Science and Innovation from Champlain College in 2023, worked on Vercel Domains and Vercel for Platforms, and created Answer Overflow, which Vercel reported serves 1.5 million monthly active users across more than 300 communities ([Champlain College, May 2023](https://commencement.champlain.edu/2023/05/12/class-of-2023-candidates-for-on-campus-undergraduate-degrees/), [Vercel, Mar 2026](https://vercel.com/blog/vercel-open-source-program-winter-2026-cohort), [Vercel, Dec 2025](https://vercel.com/changelog/introducing-vercel-for-platforms)).
  - Twitter/X: @RhysSullivan, 57,245 followers ([Lightbrd, Jun 2026](https://lightbrd.com/RhysSullivan)).
  - LinkedIn: “Executor,” with approximately 2,000 followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/rhyssullivan)).
  - GitHub: @RhysSullivan; Executor is the top identified repository with approximately 2,800 stars ([GitHub, Jul 2026](https://github.com/UsefulSoftwareCo/executor)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Sullivan’s documented work on Vercel’s multi-tenant platform products, creation of a large Discord-indexing integration, and maintenance of Executor’s 2,800-star repository establish experience in developer infrastructure, integrations, and open-source distribution ([Vercel, Dec 2025](https://vercel.com/changelog/introducing-vercel-for-platforms), [Vercel, Mar 2026](https://vercel.com/blog/vercel-open-source-program-winter-2026-cohort), [GitHub, Jul 2026](https://github.com/UsefulSoftwareCo/executor)).

## Key Risks

- **Credential concentration:** Executor centralizes access to production services, while its mitigation depends on host-side token injection, sandbox isolation, and approval gates operating as designed ([Executor website, Jul 2026](https://executor.sh/)).
- **Incumbent substitution:** Workday’s acquisition of Pipedream adds more than 3,000 connectors to an enterprise platform, while Workato launched an enterprise MCP platform with existing governance and integration capabilities ([Workday, Nov 2025](https://investor.workday.com/news-and-events/press-releases/news-details/2025/Workday-Signs-Definitive-Agreement-to-Acquire-Pipedream-11-19-2025/default.aspx), [Nucleus Research, 2026](https://242774090.fs1.hubspotusercontent-na2.net/hubfs/242774090/Downloadable%20assets%20for%20website/26063%20-%20iPaaS%20Technology%20Value%20Matrix%202026.pdf)).
- **Open-source replication:** Executor’s MIT license permits competitors and customers to reuse or modify the runtime, with hosted credentials, policies, support, and operational reliability remaining the available service-level differentiation ([GitHub, Jul 2026](https://github.com/UsefulSoftwareCo/executor)).
- **Efficiency competition:** A third-party benchmark found Executor used 675,842 tokens for its task set versus 236,803 for Caplets Code Mode, although both completed 10 of 10 tasks ([Caplets benchmark, Jun 2026](https://caplets.dev/)).
- **Name ambiguity:** “Executor” is a common software term that produces unrelated search results, increasing discoverability and attribution risk; the company mitigates this through the executor.sh domain and UsefulSoftwareCo GitHub organization ([Executor website, Jul 2026](https://executor.sh/), [GitHub, Jul 2026](https://github.com/UsefulSoftwareCo/executor)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Thousands of users and 2,000 GitHub stars (founder X post via Lightbrd, Jun 2026); approximately 2,800 GitHub stars and 199 forks (GitHub, Jul 2026); 22 trailing-30-day Homebrew installs (Homebrew, Jul 2026) |
| Revenue Signal | Free tier with 10,000 monthly executions; Team tier at $150 per organization per month; $0.20 per additional 1,000 executions (Executor pricing, Jul 2026) |
| Founders | Rhys Sullivan (Founder): Champlain College computer-science graduate, former Vercel product contributor, and Answer Overflow creator (Champlain College, May 2023; Vercel, Mar 2026) |
| Competitors | Composio ($29M raised, revenue unknown, managed catalog of 1,000+ toolkits) (Composio, Jul 2025); Arcade ($12M raised, revenue unknown, agent authorization focus) (Arcade, Mar 2025); Pipedream (funding not publicly verified, revenue unknown, 3,000+ pre-built connectors and Workday ownership) (Workday, Nov 2025) |
| Moat Signals | Approximately 2,800 GitHub stars, 199 forks, MIT-licensed multi-protocol runtime, sandboxed execution, and host-side credential injection (GitHub and Executor website, Jul 2026) |
| Risk Factors | Credential concentration (Executor website, Jul 2026), incumbent substitution (Workday, Nov 2025), MIT-licensed replication (GitHub, Jul 2026) |
| Founder Reach | Rhys Sullivan: Twitter 57,245, LinkedIn approximately 2,000 followers, GitHub top repository approximately 2,800 stars (Lightbrd, LinkedIn, and GitHub, Jul 2026) |
| Distribution Signals | Approximately 2,800 GitHub stars and 199 forks (GitHub, Jul 2026); 22 trailing-30-day and 81 trailing-90-day Homebrew installs (Homebrew, Jul 2026) |
| Emails | No public data found |
