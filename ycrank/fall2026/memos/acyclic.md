# Acyclic Labs

> Benchmarks, RL envs and infra for scaling agent swarms

| Field | Value |
|-------|-------|
| Website | https://acyclic.dev |
| YC Page | https://www.ycombinator.com/companies/acyclic |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/acyclic)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 ([Y Combinator](https://www.ycombinator.com/companies/acyclic)) |
| Location | London, England, United Kingdom |
| Tags | Swarm AI, Open Source, Data Engineering, Infrastructure, AI |
| YC Partner | Aaron Epstein ([Y Combinator](https://www.ycombinator.com/companies/acyclic)) |
| Emails | ram@acyclic.dev (CEO), var@acyclic.dev (CTO) ([Launch YC](https://www.ycombinator.com/launches/XSq-acyclic-labs-building-the-foundations-for-ai-swarms), [Acyclic Labs GitHub](https://github.com/acyclic-labs)) |

## The Idea

- **Problem:** Engineering teams running long tasks with serial agents or manually juggling separate coding-agent sessions can spend hours waiting and switching contexts ([Acyclic Labs LinkedIn, Nov 2026](https://www.linkedin.com/company/acyclic-labs), [Graphcoder launch, Feb 2026](https://graphcoder.ai/blog/towards-hyperscale-coding-agents)).
- **Approach:** Managed Agents splits a task across isolated workspace forks and merges the results into one patch, while SwarmBench measures delegation and anticipatory work to identify failures for reinforcement-learning environments ([Managed Agents](https://acyclic.dev/agents), [Launch YC, Nov 2026](https://www.ycombinator.com/launches/XSq-acyclic-labs-building-the-foundations-for-ai-swarms)).
- **Differentiation:** E2B and Daytona provide execution sandboxes, LangSmith provides framework-agnostic deployment and evaluation, and Bespoke Labs builds post-training environments, while Acyclic combines workspace forking and result merging with evaluations and training focused on swarm coordination ([E2B](https://e2b.dev/about), [Daytona](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [LangChain](https://www.langchain.com/blog/series-c), [Bespoke Labs](https://bespokelabs.ai/blog/bespoke-labs-raises-40m-to-build-environments-that-enable-reliable-agents), [Launch YC](https://www.ycombinator.com/launches/XSq-acyclic-labs-building-the-foundations-for-ai-swarms)).
- **Business Model:** During onboarding, Acyclic charges no managed-service fee, model providers bill customers directly through their own keys, and Acyclic says it will set the rate card with its first teams ([Managed Agents contract, Nov 2026](https://acyclic.dev/agents/contract)).
- **TAM/SAM:** Mordor Intelligence estimates the broader agentic AI workflow orchestration platform market at $3.53B in 2026 with 33.11% projected CAGR through 2031, and no public SAM estimate was found for swarm infrastructure and coordination training ([Mordor Intelligence, 2026](https://www.mordorintelligence.com/industry-reports/agentic-ai-workflow-orchestration-platform-market)).
- **GTM / Distribution:** Acyclic offers a self-hostable harness and CLI, with founders handling access requests from teams already running agents at volume ([Managed Agents](https://acyclic.dev/agents), [Ram Vinjamuri LinkedIn, via search snippet](https://uk.linkedin.com/in/ram-vinjamuri)).

## Defensibility

- **Moat today:** Acyclic has published an Apache-2.0 fork-and-join harness and reports that its infrastructure can run 10,000 agents in one session ([Acyclic SDK](https://github.com/acyclic-labs/sdk), [Launch YC, Nov 2026](https://www.ycombinator.com/launches/XSq-acyclic-labs-building-the-foundations-for-ai-swarms)).
- **Future moat:** [Inferred]: Coordination traces could improve Acyclic’s training environments over time, but its launch describes initial training and benchmark results without showing a sustained advantage from accumulating traces ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/XSq-acyclic-labs-building-the-foundations-for-ai-swarms)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** [Inferred]: Teams can self-host Acyclic’s open-source harness, while Claude Managed Agents already offers parallel delegation, giving buyers alternatives to paying Acyclic for orchestration ([Acyclic SDK](https://github.com/acyclic-labs/sdk), [Anthropic, Apr 2026](https://claude.com/blog/claude-managed-agents)).

## Market & Traction

- **Traction signals:**
  - $500K YC accelerator financing recorded on Oct 1, 2026 ([PitchBook](https://pitchbook.com/profiles/company/864284-50)).
  - Managed Agents was onboarding teams by November, and Acyclic reports use in document-processing pipelines ([Managed Agents](https://acyclic.dev/agents), [company LinkedIn, Nov 2026](https://www.linkedin.com/company/acyclic-labs)).
  - TinyFish documented an Acyclic research demo with 19 agents, a 12.5-minute runtime and $2.52 in execution cost ([TinyFish case study, Nov 3, 2026](https://www.tinyfish.ai/blog/acyclic-agent-swarms-tinyfish-search-fetch)).
  - SwarmBench and the open-source runtime were publicly announced in November following the October announcement of broader managed swarm infrastructure ([Acyclic Labs, Oct 12, 2026](https://acyclic.dev/blog/why-were-building-acyclic), [Launch YC, Nov 2026](https://www.ycombinator.com/launches/XSq-acyclic-labs-building-the-foundations-for-ai-swarms)).
  - Product Hunt daily rank #27 with 69 points ([Product Hunt, Oct 14, 2026](https://www.producthunt.com/leaderboard/daily/2026/10/14)).
  - 46 SDK stars and 283 company LinkedIn followers ([GitHub](https://github.com/acyclic-labs/sdk), [LinkedIn](https://www.linkedin.com/company/acyclic-labs), Nov 2026).
  - 91 estimated monthly website visits ([Agent Market Map citing Clay, Nov 4, 2026](https://agentmarketmaps.com/company/acyclic-labs)).
  - Zero YC job postings, with generalist applications invited on the company site ([YC Jobs](https://www.ycombinator.com/companies/acyclic/jobs), [Acyclic Careers](https://acyclic.dev/careers), Nov 2026).
  - Prior product Graphcoder launched in February 2026 as a coding agent and took first place at the Cambridge China Business Forum AI Startup competition in May, before the shift to general-purpose swarm infrastructure ([Graphcoder launch](https://graphcoder.ai/blog/towards-hyperscale-coding-agents), [Acyclic Labs award announcement](https://www.linkedin.com/posts/acyclic-labs_proud-to-announce-that-acyclic-labs-took-activity-7464406089305018368-RISA), [October product announcement](https://acyclic.dev/blog/why-were-building-acyclic)).
- **Competitors:**
  - **E2B** (over $37M raised and eight-figure annual revenue, CEO-reported Feb 2026) supplies isolated cloud computers for agents, with a $21M Series A led by Insight Partners in July 2025 ([E2B](https://e2b.dev/resources/series-a), [CEO on Hacker News](https://news.ycombinator.com/item?id=46858726)).
  - **Daytona** ($91M raised, $100M company-reported revenue run rate in October 2026) sells stateful execution environments with snapshots and per-second billing, with a $60M Series B led by FirstMark Growth that month ([Daytona Series B](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [Daytona run rate](https://www.daytona.io/dotfiles/1m-to-100m-run-rate-in-4-quarters)).
  - **LangChain** ($460M tracked funding, $12M–$16M reported ARR in July 2025) offers framework-agnostic deployment, tracing and evaluation through LangSmith, with a $300M Series C led by CapitalG in November 2026 ([Fireround](https://fireround.dev/companies/langchain.com), [TechCrunch](https://techcrunch.com/2025/07/08/langchain-is-about-to-become-a-unicorn-sources-say/), [LangChain](https://www.langchain.com/blog/series-c)).
  - **Bespoke Labs** ($40M raised, revenue unknown) builds post-training environments and contributes to Terminal-Bench, with a $31.3M Series A led by Wing VC in July 2026 ([Bespoke Labs](https://bespokelabs.ai/blog/bespoke-labs-raises-40m-to-build-environments-that-enable-reliable-agents), [Wing VC](https://www.wing.vc/content/investing-in-bespoke-ai)).
- **Why now:** [Inferred]: Anthropic’s June 2025 production research system demonstrated that a lead model could delegate independent searches to parallel agents and outperform its single-agent baseline on an internal research evaluation ([Anthropic, Jun 2025](https://www.anthropic.com/research/multi-agent-research-system)).

## Founders & Team

- **Ram Vinjamuri (CEO, Abhiram Vinjamuri)** — ram@acyclic.dev ([Acyclic About](https://acyclic.dev/about), [Launch YC](https://www.ycombinator.com/launches/XSq-acyclic-labs-building-the-foundations-for-ai-swarms)).
  - **Background:** Cambridge computer science, first author on Vedic Sanskrit dependency parsing at ACL WiNLP, and Palantir forward-deployed engineer shipping multi-agent clinical-trial design systems ([ACL Anthology, 2025](https://aclanthology.org/2025.winlp-main.12/), [YC](https://www.ycombinator.com/companies/acyclic)).
  - **Twitter/X:** @RamV2003, 678 followers ([X mirror, Nov 2026](https://nitter.gq/RamV2003)).
  - **LinkedIn:** Headline unavailable in the public preview, which lists Acyclic Labs and 2K followers ([LinkedIn, Nov 2026, via search snippet](https://uk.linkedin.com/in/ram-vinjamuri)).
  - **GitHub:** @ramstar3000, SkinDetection with 1 star ([GitHub, Nov 2026](https://github.com/ramstar3000)).
- **Varun Latthe (CTO)** — var@acyclic.dev ([Acyclic About](https://acyclic.dev/about), [Acyclic Labs GitHub](https://github.com/acyclic-labs)).
  - **Background:** Cambridge computer science dissertation on an auto-parallelizing compiler, followed by agent architecture and Excel engine work at Tracelight ([Acyclic About](https://acyclic.dev/about), [YC](https://www.ycombinator.com/companies/acyclic)).
  - **Twitter/X:** @var1377, 122 followers ([Zamantika, Nov 2026](https://zamantika.com/zh/profile/var1377)).
  - **LinkedIn:** Public About line reads “Co-founder of Acyclic Labs (YC F26),” with 2K followers ([LinkedIn, Nov 2026, via search snippet](https://uk.linkedin.com/in/varun-l)).
  - **GitHub:** @Var1377, pinned `day` repository with 1 star ([GitHub, Nov 2026](https://github.com/Var1377)).
- **Co-founder relationship:** They met on their first day studying computer science at Cambridge, both earned First Class degrees, and both report graduating in the top 10% ([Acyclic About](https://acyclic.dev/about), [YC](https://www.ycombinator.com/companies/acyclic)).
- **Founder-market fit:** Vinjamuri built enterprise agent systems at Palantir and Latthe combined compiler research with agent architecture at Tracelight, with YC backing and Aaron Epstein as primary partner ([Acyclic Labs](https://acyclic.dev/blog/why-were-building-acyclic), [YC](https://www.ycombinator.com/companies/acyclic)).

## Key Risks

- **Coordination at scale:** Acyclic reports that coordination failures can make swarms underperform a single agent and is using SwarmBench failures to design training environments ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/XSq-acyclic-labs-building-the-foundations-for-ai-swarms)).
- **Provider substitution:** [Inferred]: Teams using Claude can obtain parallel delegation from Anthropic’s managed stack, while Acyclic supports customer-selected model keys and cloud placement ([Anthropic](https://claude.com/blog/claude-managed-agents), [Acyclic Managed Agents](https://acyclic.dev/agents)).
- **Operating costs:** Parallel agents multiply web calls, and TinyFish reports that Acyclic switched search and fetch providers to reduce per-run cost ([TinyFish, Nov 2026](https://www.tinyfish.ai/blog/acyclic-agent-swarms-tinyfish-search-fetch)).
- **UK entity status:** Companies House records a September 2026 voluntary strike-off notice for Acyclic Labs Limited, whose listed director is Varun Latthe, while YC lists the startup as active ([Companies House filings](https://find-and-update.company-information.service.gov.uk/company/16816653/filing-history), [officers](https://find-and-update.company-information.service.gov.uk/company/16816653/officers), [YC](https://www.ycombinator.com/companies/acyclic)).
- **Name confusion:** An unverified X account uses the Acyclic name and links to `acyclic.dev` while promoting a token ([X account mirror, Nov 2026](https://www.xitter.gq/acyclic_labs), [YC company profile](https://www.ycombinator.com/companies/acyclic)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader workflow orchestration platform estimate of $3.53B in 2026, 33.11% projected CAGR through 2031 ([Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/agentic-ai-workflow-orchestration-platform-market)) |
| SAM | No public data found |
| Traction | $500K YC financing ([PitchBook, Oct 2026](https://pitchbook.com/profiles/company/864284-50)), managed team onboarding ([Acyclic, Nov 2026](https://acyclic.dev/agents)), 46 SDK stars ([GitHub, Nov 2026](https://github.com/acyclic-labs/sdk)) |
| Revenue Signal | No managed-service charge during onboarding, model usage billed directly by providers ([Acyclic contract, Nov 2026](https://acyclic.dev/agents/contract)); PitchBook classifies the company as revenue-generating without an amount or product attribution ([PitchBook, Oct 2026](https://pitchbook.com/profiles/company/864284-50)) |
| Founders | Ram Vinjamuri (CEO), Cambridge, ACL WiNLP, Palantir. Varun Latthe (CTO), Cambridge, parallelizing compilers, Tracelight ([YC](https://www.ycombinator.com/companies/acyclic), [ACL Anthology](https://aclanthology.org/2025.winlp-main.12/)) |
| Competitors | E2B (>$37M raised, eight-figure annual revenue, agent sandboxes; [CEO on Hacker News](https://news.ycombinator.com/item?id=46858726)); Daytona ($91M raised, $100M revenue run rate, execution cloud; [Daytona](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [run rate](https://www.daytona.io/dotfiles/1m-to-100m-run-rate-in-4-quarters)); LangChain ($460M tracked funding, $12M–$16M reported July 2025 ARR, agent deployment and evaluation; [Fireround](https://fireround.dev/companies/langchain.com), [TechCrunch](https://techcrunch.com/2025/07/08/langchain-is-about-to-become-a-unicorn-sources-say/), [LangChain](https://www.langchain.com/blog/series-c)); Bespoke Labs ($40M raised, revenue unknown, post-training environments; [Bespoke Labs](https://bespokelabs.ai/blog/bespoke-labs-raises-40m-to-build-environments-that-enable-reliable-agents)) |
| Moat Signals | Open-source fork-and-join harness, company-reported capacity of 10,000 agents per session, coordination benchmark ([GitHub](https://github.com/acyclic-labs/sdk), [Launch YC, Nov 2026](https://www.ycombinator.com/launches/XSq-acyclic-labs-building-the-foundations-for-ai-swarms)) |
| Risk Factors | Coordination failures ([Launch YC](https://www.ycombinator.com/launches/XSq-acyclic-labs-building-the-foundations-for-ai-swarms)), provider substitution ([Anthropic](https://claude.com/blog/claude-managed-agents)), UK strike-off notice ([Companies House](https://find-and-update.company-information.service.gov.uk/company/16816653/filing-history)) |
| Founder Reach | Ram Vinjamuri, 678 X followers, 2K LinkedIn followers, 1 SkinDetection star ([X mirror](https://nitter.gq/RamV2003), [LinkedIn, via search snippet](https://uk.linkedin.com/in/ram-vinjamuri), [GitHub](https://github.com/ramstar3000)); Varun Latthe, 122 X followers, 2K LinkedIn followers, 1 `day` star ([Zamantika](https://zamantika.com/zh/profile/var1377), [LinkedIn, via search snippet](https://uk.linkedin.com/in/varun-l), [GitHub](https://github.com/var1377)), Nov 2026 |
| Distribution Signals | Product Hunt #27 with 69 points ([Product Hunt, Oct 14, 2026](https://www.producthunt.com/leaderboard/daily/2026/10/14)), 283 company followers ([LinkedIn, Nov 2026](https://www.linkedin.com/company/acyclic-labs)), 91 estimated monthly visits ([Agent Market Map citing Clay, Nov 2026](https://agentmarketmaps.com/company/acyclic-labs)) |
| Emails | ram@acyclic.dev (CEO), var@acyclic.dev (CTO) ([Launch YC](https://www.ycombinator.com/launches/XSq-acyclic-labs-building-the-foundations-for-ai-swarms), [Acyclic Labs GitHub](https://github.com/acyclic-labs)) |
