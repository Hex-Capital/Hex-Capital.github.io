# Agent Relay

> Let your teams' coding agents message each other

| Field | Value |
|-------|-------|
| Website | https://agentrelay.com |
| YC Page | https://www.ycombinator.com/companies/agent-relay |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/agent-relay)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Swarm AI, Open Source, AI |
| YC Partner | Grey Baker ([Y Combinator](https://www.ycombinator.com/companies/agent-relay)) |
| Emails | founders@agentrelay.com for founder and enterprise inquiries ([Launch YC](https://www.ycombinator.com/launches/WI4-agent-relay-let-your-teams-coding-agents-message-each-other), [Self-hosting docs](https://agentrelay.com/docs/self-hosting/agents/overview)), hello@agentrelay.com for support and privacy ([Agent Relay Support](https://agentrelay.com/support), [Privacy Policy](https://agentrelay.com/privacy)), hi@agentrelay.com for partnership inquiries ([Agent Relay Careers](https://agentrelay.com/careers)), security@agentrelay.com for vulnerability reports ([Agent Relay Security](https://agentrelay.com/security)) |

## The Idea

- **Problem** — Engineers using different coding agents relay questions, decisions, and handoff summaries manually by copying them between agent sessions and Slack ([Launch YC](https://www.ycombinator.com/launches/WI4-agent-relay-let-your-teams-coding-agents-message-each-other), Oct 2026).
- **Approach** — A background relay routes direct and channel messages among existing coding agents across teammates’ machines and makes shared session history searchable, with per-session controls for sharing and messaging ([Agent Relay](https://agentrelay.com/), [GitHub](https://github.com/AgentWorkforce/relay)).
- **Differentiation** — Agent Relay connects agents in their existing tools, while Paradev runs agents in separate Git worktrees, Conductor manages agent workspaces, and OpenHands Canvas provides a workspace for running coding agents locally or remotely ([Agent Relay](https://agentrelay.com/), [Paradev](https://paradev.com/blog/a-new-name), [Conductor](https://www.conductor.build/), [OpenHands](https://www.openhands.dev/product/canvas)).
- **Business Model** — Hosted use is free to start and self-hosting is available, with a paid desktop upgrade for shared sessions and more connected agents and an enterprise agreement for SSO, SCIM, and audit logs ([Agent Relay](https://agentrelay.com/), [Desktop docs](https://agentrelay.com/docs/quickstart), [Self-hosting docs](https://agentrelay.com/docs/self-hosting/agents/overview)).
- **TAM/SAM** — No public TAM/SAM data found for this specific segment.
- **GTM / Distribution** — Agent Relay introduced a cross-provider SDK in February 2026 and launched team messaging in October 2026, with self-serve installation through npm and desktop downloads ([Company launch blog](https://agentrelay.com/blog/introducing-agent-relay), [Launch YC](https://www.ycombinator.com/launches/WI4-agent-relay-let-your-teams-coding-agents-message-each-other), [npm](https://www.npmjs.com/package/agent-relay), [Desktop downloads](https://agentrelay.com/download)).

## Defensibility

- **Moat today** — A deployed workspace can accumulate searchable decisions and handoff context across different coding tools ([Launch YC](https://www.ycombinator.com/launches/WI4-agent-relay-let-your-teams-coding-agents-message-each-other)).
- **Future moat** — [Inferred]: Teams could face switching costs if agents come to rely on accumulated session history, although public retention and migration data are unavailable ([GitHub](https://github.com/AgentWorkforce/relay)).
- **Market structure** — No structural barrier identified at this stage.
- **Commoditization risk** — [Inferred]: Coding platforms could use the open A2A standard for messaging between providers, reducing the work required to offer cross-tool communication ([Linux Foundation](https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year), Apr 2026).

## Market & Traction

- **Traction signals**
  - Customer testimonial: Pomerado reported running 80+ coordinating agents, exchanging more than 38,000 messages on Agent Relay, and improving its product at 2–4× its previous speed ([Agent Relay case studies](https://agentrelay.com/case-studies), Nov 17, 2026).
  - An unnamed prospect ran 89 agents that exchanged 7,000+ messages in one week and expressed willingness to pay ([Khaliq Gant on LinkedIn](https://www.linkedin.com/posts/khaliqgant_yes-please-let-us-pay-you-thats-a-activity-7511096050074595329-y7uZ), Sep 2026).
  - 1.1K stars and 106 forks for `AgentWorkforce/relay` ([GitHub](https://github.com/AgentWorkforce/relay), Nov 2026).
  - 3,907 weekly downloads for `agent-relay` ([npm](https://www.npmjs.com/package/agent-relay), Nov 2026, via search snippet).
  - 548 LinkedIn followers and 1.1K X followers for `@agent_relay` ([LinkedIn](https://www.linkedin.com/company/agent-relay/), [Teapawt X mirror](https://teapawt.org/agent_relay), Nov 2026).
  - Joint demonstration of agent authorization across organizations with Ratify Protocol ([Agent Relay engineering blog](https://agentrelay.com/blog/trusting-an-agent-you-didnt-spawn), Aug 2026).
  - Launch coverage by ExplainX and a Haunted Hacks event co-hosted with Terse at YC ([ExplainX](https://www.explainx.ai/blog/agent-relay-open-source-shared-sessions-flows-coding-agents-handoff-apache-2026), [CompeteHub](https://www.competehub.dev/en/competitions/luma5817b434236ee51fb67bb836e92f8ac6), Oct 2026).
  - Zero open roles ([YC Jobs](https://www.ycombinator.com/companies/agent-relay/jobs), [Agent Relay Careers](https://agentrelay.com/careers), Nov 2026).
- **Competitors**
  - Paradev ($11.5M disclosed, revenue unknown) — Desktop workspaces isolate parallel coding agents in Git worktrees ([Paradev product](https://paradev.com/blog/a-new-name), [Paradev funding](https://paradev.com/blog/superset-is-now-paradev), Oct 2026 seed led by Union Square Ventures).
  - Conductor (at least $22M disclosed, revenue unknown) — Manages parallel coding-agent workspaces and announced it was joining Meta ([Conductor product](https://www.conductor.build/), [Conductor funding](https://www.conductor.build/blog/series-a), Mar 2026 Series A from Spark and Matrix, [Meta announcement](https://www.conductor.build/announcement)).
  - OpenHands ($23.8M across disclosed rounds, revenue unknown) — Offers its own coding-agent SDK, execution environment, and Canvas workspace ([OpenHands Canvas](https://www.openhands.dev/product/canvas), [OpenHands seed announcement](https://www.openhands.dev/blog/press-release-all-hands-announces-5m-to-scale-ai-agent-for-software-development), [OpenHands Series A announcement](https://hub.openhands.dev/blog/weve-just-raised-18-8m-to-build-the-open-standard-for-autonomous-software-development), $18.8M led by Madrona, Nov 2025).
- **Why now** — [Inferred]: The February 2026 Codex desktop launch made parallel agent sessions a built-in workflow, increasing the number of sessions that teams using multiple coding tools need to coordinate ([OpenAI launch](https://openai.com/index/introducing-the-codex-app/), [Launch YC](https://www.ycombinator.com/launches/WI4-agent-relay-let-your-teams-coding-agents-message-each-other)).

## Founders & Team

- **Will Washburn (Founder/CEO)** — Direct business email: No public data found.
  - **Background** — Stetson University alumnus who led engineering at Tailwind, which he says reached eight-figure ARR and 50K+ paying customers during his tenure ([YC founder profile](https://www.ycombinator.com/founders/will-washburn), [Launch YC](https://www.ycombinator.com/launches/WI4-agent-relay-let-your-teams-coding-agents-message-each-other)).
  - **Twitter/X** — `@willwashburn`, 2.7K followers ([Teapawt X mirror](https://teapaw.org/willwashburn), Nov 2026).
  - **LinkedIn** — Listed affiliation “Agent Workforce,” about 1K followers ([LinkedIn](https://www.linkedin.com/in/willwashburn), via search snippet).
  - **GitHub** — `@willwashburn`, with `AgentWorkforce/relay` pinned at 1.1K stars ([GitHub profile mirror](https://github.masuit.org/willwashburn), [GitHub repository](https://github.com/AgentWorkforce/relay), Nov 2026).
- **Khaliq Gant (Founder/CTO)** — Direct business email: No public data found.
  - **Background** — Cornell communications graduate with a Columbia computer science certificate, previously founding engineer at Nango and lead engineer at Overview ([Peerlist résumé](https://peerlist.io/khaliqgant/resume), [YC founder profile](https://www.ycombinator.com/founders/khaliq-gant)).
  - **Twitter/X** — `@khaliqgant`, 1.5K followers ([Teapawt X mirror](https://teapawt.org/Khaliqgant), Nov 2026).
  - **LinkedIn** — Listed affiliation “Agent Relay,” about 4K followers ([LinkedIn](https://no.linkedin.com/in/khaliqgant), via search snippet).
  - **GitHub** — `@khaliqgant`, with 13 stars on `Configuration-Files` ([GitHub profile](https://github.com/khaliqgant), [GitHub repository](https://github.com/khaliqgant/Configuration-Files), Nov 2026).
- **Co-founder relationship** — Washburn and Gant were high-school roommates and basketball teammates and applied to YC together with Social Blendr in 2012 ([Gant’s LinkedIn article](https://www.linkedin.com/pulse/joining-y-combinator-khaliq-gant-hedde), [Launch YC](https://www.ycombinator.com/launches/WI4-agent-relay-let-your-teams-coding-agents-message-each-other)).
- **Founder-market fit** — Washburn’s engineering leadership, Gant’s integrations work at Nango, and the founders’ reported use of 50+ parallel agents inform product development, with YC, Hustle Fund, Active Capital, Cortical Ventures, and Yonder listed as backers ([Launch YC](https://www.ycombinator.com/launches/WI4-agent-relay-let-your-teams-coding-agents-message-each-other), [Agent Relay](https://agentrelay.com/)).

## Key Risks

- **Native substitution** — Claude Code already supports direct messaging within its own agent teams, while Agent Relay serves workflows spanning different tools and machines ([Claude Code docs](https://code.claude.com/docs/en/agent-teams), [Agent Relay](https://agentrelay.com/)).
- **Cloud data handling** — Hosted session search sends credential-redacted text to OpenAI, with per-session sharing controls and self-hosted deployment available ([Privacy Policy](https://agentrelay.com/privacy), [Desktop docs](https://agentrelay.com/docs/quickstart), [Self-hosting docs](https://agentrelay.com/docs/self-hosting/agents/overview)).
- **Enterprise procurement** — Buyers requiring audit evidence may face a procurement delay because the company’s trust page lists SOC 2 and penetration-test attestation as pending ([Agent Relay Trust](https://agentrelay.com/trust), Oct 2026).
- **Name collision** — A separate product at `agentrelay.co` also uses the Agent Relay name and markets agent-mediated sales, creating potential confusion in search and diligence ([agentrelay.co](https://agentrelay.co/), [YC company profile](https://www.ycombinator.com/companies/agent-relay)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 1.1K GitHub stars ([GitHub](https://github.com/AgentWorkforce/relay), Nov 2026), 3,907 weekly CLI downloads ([npm](https://www.npmjs.com/package/agent-relay), Nov 2026, via search snippet), customer testimonial: Pomerado exchanged 38,000+ messages ([Agent Relay case studies](https://agentrelay.com/case-studies), Nov 2026). |
| Revenue Signal | Free hosted entry, paid desktop upgrade, and an enterprise self-hosting agreement ([Agent Relay](https://agentrelay.com/), [Desktop docs](https://agentrelay.com/docs/quickstart), [Self-hosting docs](https://agentrelay.com/docs/self-hosting/agents/overview)). |
| Founders | Will Washburn (CEO), Tailwind engineering lead and Stetson alumnus ([YC](https://www.ycombinator.com/founders/will-washburn)). Khaliq Gant (CTO), Nango founding engineer and Overview lead engineer ([YC](https://www.ycombinator.com/founders/khaliq-gant)). |
| Competitors | Paradev ($11.5M, revenue unknown, worktree-based agent workspaces) ([Paradev](https://paradev.com/blog/superset-is-now-paradev)). Conductor (at least $22M, revenue unknown, managed agent workspaces) ([Conductor](https://www.conductor.build/blog/series-a)). OpenHands ($23.8M disclosed, revenue unknown, coding-agent SDK and execution workspace) ([OpenHands seed](https://www.openhands.dev/blog/press-release-all-hands-announces-5m-to-scale-ai-agent-for-software-development), [Series A](https://hub.openhands.dev/blog/weve-just-raised-18-8m-to-build-the-open-standard-for-autonomous-software-development)). |
| Moat Signals | Searchable workspace history across coding tools and an Apache-2.0 core repository with 1.1K stars ([GitHub](https://github.com/AgentWorkforce/relay), Nov 2026). |
| Risk Factors | Native agent messaging ([Claude Code docs](https://code.claude.com/docs/en/agent-teams)), third-party processing of uploaded session content ([Privacy Policy](https://agentrelay.com/privacy)), pending SOC 2 attestation ([Agent Relay Trust](https://agentrelay.com/trust)). |
| Founder Reach | Washburn: X 2.7K, LinkedIn 1K, pinned relay repository 1.1K stars ([X mirror](https://teapaw.org/willwashburn), [LinkedIn](https://www.linkedin.com/in/willwashburn), via search snippet, [GitHub](https://github.com/AgentWorkforce/relay)). Gant: X 1.5K, LinkedIn 4K, Configuration-Files 13 stars ([X mirror](https://teapawt.org/Khaliqgant), [LinkedIn](https://no.linkedin.com/in/khaliqgant), via search snippet, [GitHub](https://github.com/khaliqgant/Configuration-Files)). |
| Distribution Signals | October 2026 YC launch ([Launch YC](https://www.ycombinator.com/launches/WI4-agent-relay-let-your-teams-coding-agents-message-each-other)), 548 LinkedIn followers and 1.1K X followers ([LinkedIn](https://www.linkedin.com/company/agent-relay/), [X mirror](https://teapawt.org/agent_relay), Nov 2026), public Discord ([GitHub](https://github.com/AgentWorkforce/relay)). |
| Emails | founders@agentrelay.com ([Launch YC](https://www.ycombinator.com/launches/WI4-agent-relay-let-your-teams-coding-agents-message-each-other)), hello@agentrelay.com ([Agent Relay Support](https://agentrelay.com/support)), hi@agentrelay.com ([Agent Relay Careers](https://agentrelay.com/careers)), security@agentrelay.com ([Agent Relay Security](https://agentrelay.com/security)). |
