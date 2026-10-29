# Acyclic Labs

> Agent swarms that make long-running tasks exponentially faster

| Field | Value |
|-------|-------|
| Website | https://acyclic.dev |
| YC Page | https://www.ycombinator.com/companies/acyclic |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/acyclic/jobs)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | London, England, United Kingdom |
| Tags | Swarm AI, Open Source |
| YC Partner | Not listed; company page could not be retrieved |
| Emails | No public data found |

## The Idea

- **Problem:** Teams operating coding and document-processing agents face sequential execution delays and coordination work when running multiple agents, according to the founders’ account of enterprise deployments ([Acyclic blog, Oct 2026](https://acyclic.dev/blog/why-were-building-acyclic)).
- **Approach:** Acyclic divides tasks among agents in isolated sandboxes, runs branches concurrently, and merges their outputs into a patch or pull request ([company website, retrieved Oct 2026](https://acyclic.dev)).
- **Differentiation:** Acyclic packages task decomposition and result merging, while adjacent alternatives E2B emphasize agent computers, Daytona emphasizes execution environments, and Modal combines sandboxes with inference and training infrastructure ([Acyclic](https://acyclic.dev), [E2B](https://e2b.dev/about), [Daytona](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [Modal](https://modal.com/blog/modal-series-c)).
- **Business Model:** [Inferred]: Managed hosting provides a monetization path alongside the self-hostable harness, but current subscription tiers and consumption rates have no public data found ([Managed Agents](https://acyclic.dev/agents)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Distribution includes an open-source SDK, CLI, dashboard, MCP integration, and founder-led onboarding targeting teams already operating agents in volume ([company website](https://acyclic.dev), [SDK](https://github.com/acyclic-labs/sdk)).

## Defensibility

- **Moat today:** The published SDK includes a recursive fork/join harness, service interfaces, and conformance suites, while privately operated infrastructure includes distributed replication, consensus, and regional control planes; these document implementation scope rather than exclusive IP ([GitHub SDK](https://github.com/acyclic-labs/sdk)).
- **Future moat:** [Inferred]: Operating production swarms could develop reliability expertise and customer integration costs, but public retention or switching-cost measurements have no public data found.
- **Market structure:** [Inferred]: No structural barrier to incumbent entry is identified because existing execution providers already offer sandboxes, snapshots, or parallel environments ([Daytona](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [Modal](https://modal.com/resources/best-platforms-deploy-ai-microservices)).
- **Commoditization risk:** The Apache-2.0 harness works without managed hosting, including forking, recursion, and durable execution, allowing customers or competitors to operate the published software themselves ([GitHub SDK](https://github.com/acyclic-labs/sdk)).

## Market & Traction

- **Traction signals:**
  - SDK: 36 GitHub stars and 4 forks ([GitHub, retrieved Oct 27, 2026](https://github.com/acyclic-labs/sdk)).
  - Company LinkedIn: 235 followers ([LinkedIn, retrieved Oct 27, 2026](https://www.linkedin.com/company/acyclic-labs)).
  - Product Hunt snapshot: 41 followers, 69 points, and displayed day rank #27 ([Product Hunt, retrieved Oct 27, 2026](https://www.producthunt.com/products/acyclic?launch=acyclic)).
  - Company demonstration: 236 agents migrated a Django codebase in 49 minutes for approximately $8, changing 482 files with static checks passing; this is a demonstration cost, not company revenue ([company LinkedIn, Oct 2026](https://www.linkedin.com/company/acyclic-labs)).
  - Company-reported discovery activity: nearly 40 conversations with teams exploring the product, without a disclosed conversion count ([company LinkedIn, retrieved Oct 2026](https://www.linkedin.com/company/acyclic-labs)).
  - Prior product Graphcoder: company reported first place in the Cambridge China Business Forum AI startup competition ([company LinkedIn, retrieved Oct 2026](https://www.linkedin.com/company/acyclic-labs)).
  - Product transition: Varun acknowledged a pivot toward general agent swarm infrastructure in a post displayed as approximately one month old; the website now archives Graphcoder articles separately ([Varun LinkedIn](https://uk.linkedin.com/in/varun-l), [blog archive](https://acyclic.dev/blog)).
  - YC job board: zero active postings ([YC, retrieved Oct 27, 2026](https://www.ycombinator.com/companies/acyclic/jobs)).
- **Competitors:**
  - **E2B** (>$37M raised, eight-figure ARR reported): execution-cloud alternative rather than Acyclic’s packaged swarm workflow; latest located round was a $21M Series A led by Insight Partners in July 2025 ([investor job board, May 2026](https://jobs.insightpartners.com/companies/e2b/jobs/77107322-business-operations), [funding announcement](https://e2b.dev/resources/series-a)).
  - **Daytona** ($91M raised, revenue unknown): supplies Linux, Windows, macOS, and GPU environments; announced a $60M Series B led by FirstMark Growth on October 20, 2026 ([Daytona announcement](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud)).
  - **Modal** (approximately $1,220M raised, >$1,000M annualized revenue): combines sandbox execution with inference and training; announced a $750M Series D led by Accel on October 14, 2026 ([funding total](https://www.thecompanycheck.com/company/b/modal/cv1yoge22qrfex2ey), [Modal announcement](https://modal.com/blog/1-billion-annualized-run-rate-series-d)).
  - [Inferred]: These are adjacent infrastructure alternatives because Acyclic combines orchestration and execution, making direct product boundaries less clear ([Acyclic](https://acyclic.dev), [Modal](https://modal.com/blog/modal-series-c)).
- **Why now:** [Inferred]: Production adoption of agents creates demand for execution infrastructure, illustrated by Modal’s report that sandbox usage accelerated during the preceding six months ([Modal, May 2026](https://modal.com/blog/modal-series-c)).

## Founders & Team

- **Ram Vinjamuri (CEO):**
  - Background: Cambridge Computer Science graduate with First Class honours, ACL WiNLP research on Sanskrit dependency parsing, and prior Palantir clinical-trial agent systems and Amazon experience ([YC profile](https://www.ycombinator.com/founders/ram-vinjamuri), [portfolio](https://ramstar3000.github.io/Portfolio/)).
  - Twitter/X: @ramv2003; count not retrievable from X ([YC-linked account](https://www.ycombinator.com/founders/ram-vinjamuri)).
  - LinkedIn: profile found under “Ram Vinjamuri — Acyclic Labs”; full headline not retrievable ([LinkedIn](https://uk.linkedin.com/in/ram-vinjamuri)).
  - GitHub: @ramstar3000; displayed leading repository SkinDetection has 1 star ([GitHub, retrieved Oct 2026](https://github.com/ramstar3000)).
- **Varun Latthe (CTO):**
  - Background: Cambridge Computer Science graduate with First Class honours, auto-parallelising compiler research, and agent architecture and Excel-engine work at Tracelight, with additional experience at Softwire and Capri Healthcare ([company biography](https://acyclic.dev/about), [YC profile](https://www.ycombinator.com/founders/varun-latthe)).
  - Twitter/X: @var1377; count not retrievable ([YC-linked account](https://www.ycombinator.com/founders/varun-latthe)).
  - LinkedIn: public About text says “Co-founder of Acyclic Labs (YC F26)”; full headline not retrievable ([LinkedIn](https://uk.linkedin.com/in/varun-l)).
  - GitHub: @Var1377; pinned CLI time-management repository day has 1 star ([GitHub, retrieved Oct 2026](https://github.com/Var1377)).
- **Co-founder relationship:** They met on their first day studying Computer Science at Cambridge ([company biography](https://acyclic.dev/about)).
- **Founder-market fit:** Their documented experience combines parallel-programming research with enterprise agent deployments in pharmaceuticals and accounting, and the company identifies YC as its backer ([company blog](https://acyclic.dev/blog/why-were-building-acyclic), [website](https://acyclic.dev)).

## Key Risks

- **Technical scaling:** [Inferred]: Dependency-heavy tasks may constrain the claimed acceleration; published runtime limits and guarantees remain pending measurements with initial teams ([runtime contract](https://acyclic.dev/agents/contract)).
- **Recovery boundaries:** Work held only in a live process requires supported checkpoints or explicit restart, creating a failure-recovery constraint despite resumable components ([runtime contract](https://acyclic.dev/agents/contract)).
- **Hosting substitution:** [Inferred]: Customers can self-host the same harness, including core execution capabilities, reducing the exclusivity of managed hosting ([SDK](https://github.com/acyclic-labs/sdk)).
- **Name ambiguity:** A separate Bangalore organization uses “Acyclic Labs” and acycliclabs.com; its blockchain repositories and contact details are excluded from this dossier ([unrelated GitHub organization](https://github.com/acycliclabs)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | SDK: 36 stars, 4 forks ([GitHub, Oct 2026](https://github.com/acyclic-labs/sdk)); nearly 40 discovery conversations ([company LinkedIn, Oct 2026](https://www.linkedin.com/company/acyclic-labs)) |
| Revenue Signal | Prior product Graphcoder offered free and monthly paid subscriptions with weekly compute limits; current-product revenue: No public data found ([Graphcoder terms, Feb 2026](https://graphcoder.ai/terms)) |
| Founders | Ram Vinjamuri, CEO: Cambridge, Palantir, ACL research ([YC](https://www.ycombinator.com/founders/ram-vinjamuri)); Varun Latthe, CTO: Cambridge, parallel-language research, Tracelight ([YC](https://www.ycombinator.com/founders/varun-latthe)) |
| Competitors | E2B (>$37M raised, eight-figure ARR, agent cloud; [Insight Partners](https://jobs.insightpartners.com/companies/e2b/jobs/77107322-business-operations)); Daytona ($91M raised, revenue unknown, multiple operating systems; [Daytona](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud)); Modal (~$1,220M raised, >$1,000M annualized revenue, broader AI compute; [funding total](https://www.thecompanycheck.com/company/b/modal/cv1yoge22qrfex2ey), [Modal](https://modal.com/blog/1-billion-annualized-run-rate-series-d)) |
| Moat Signals | Published recursive harness and conformance suites; private replication and control-plane infrastructure ([SDK](https://github.com/acyclic-labs/sdk)) |
| Risk Factors | Unpublished measured limits, checkpoint-dependent recovery, self-hosting availability ([runtime contract](https://acyclic.dev/agents/contract)) |
| Founder Reach | Ram: LinkedIn 2K followers, SkinDetection 1 star ([LinkedIn](https://uk.linkedin.com/in/ram-vinjamuri), [GitHub](https://github.com/ramstar3000)); Varun: LinkedIn 2K followers, day 1 star ([LinkedIn](https://uk.linkedin.com/in/varun-l), [GitHub](https://github.com/Var1377)); retrieved Oct 2026 |
| Distribution Signals | Product Hunt: 41 followers, 69 points, displayed #27 day rank ([Product Hunt, Oct 2026](https://www.producthunt.com/products/acyclic?launch=acyclic)); LinkedIn: 235 followers ([LinkedIn, Oct 2026](https://www.linkedin.com/company/acyclic-labs)) |
| Emails | No public data found |
