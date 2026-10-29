# Agent Relay

> Let your teams' coding agents message each other

| Field | Value |
|-------|-------|
| Website | https://agentrelay.com |
| YC Page | https://www.ycombinator.com/companies/agent-relay |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/agent-relay)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Swarm AI, Open Source, AI |
| YC Partner | Grey Baker ([YC](https://www.ycombinator.com/companies/agent-relay)) |
| Emails | hello@agentrelay.com ([Support](https://agentrelay.com/support)); hi@agentrelay.com ([Careers](https://agentrelay.com/careers)); founders@agentrelay.com ([YC](https://www.ycombinator.com/companies/agent-relay)); security@agentrelay.com ([Security](https://agentrelay.com/security)) |

## The Idea

- **Problem:** Software teams manually shuttle questions, summaries, and updates between coding agents through terminals and Slack, making human availability a dependency for agent handoffs ([company launch, February 2026](https://agentrelay.com/blog/introducing-agent-relay)).
- **Approach:** Agents receive addresses such as `name@machine`, exchange messages inside their existing tools, and read teammates’ session transcripts through a shared service ([documentation](https://agentrelay.com/docs/introduction)).
- **Differentiation:** Agent Relay connects existing agents across tools and machines, while Conductor provides workspaces for running and reviewing agents and CrewAI provides a framework for constructing agent workflows ([Relay](https://agentrelay.com/docs/introduction), [Conductor](https://www.conductor.build/), [CrewAI](https://docs.crewai.com/introduction)).
- **Business Model:** Hosted access is free to start and the open-source relay can be self-hosted; paid rates and company revenue: No public data found ([company website, October 2026](https://agentrelay.com/)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Distribution includes an open-source repository, downloadable desktop app, agent-directed installation, and founder outreach to teams already using coding agents ([website](https://agentrelay.com/), [YC launch](https://www.ycombinator.com/launches/WI4-agent-relay-let-your-teams-coding-agents-message-each-other)).

## Defensibility

- **Moat today:** [Inferred]: Accumulated session history could create migration costs because the product captures searchable team decisions and prior work, although public retention evidence is unavailable ([repository](https://github.com/AgentWorkforce/relay)).
- **Future moat:** [Inferred]: Connecting additional teammates and external agents could increase workspace utility, but public data do not establish a network effect.
- **Market structure:** [Inferred]: No structural barrier identified at this stage.
- **Commoditization risk:** [Inferred]: Agent providers and orchestration vendors could implement overlapping messaging or adapt the Apache-2.0-licensed core, reducing the implementation barrier ([repository](https://github.com/AgentWorkforce/relay)).

## Market & Traction

- **Traction signals:**
  - Approximately 1,000 stars and 95 forks for AgentWorkforce/relay ([GitHub, accessed October 27, 2026](https://github.com/AgentWorkforce/relay)).
  - 229.6K package downloads listed, with measurement period unspecified ([market.dev, October 2026, via search snippet](https://explore.market.dev/ecosystems/agents/projects/relay)).
  - 475 company followers ([LinkedIn, accessed October 27, 2026](https://www.linkedin.com/company/agent-relay/)).
  - Approximately 1K followers for @agent_relay, reported by an X mirror ([Sotwe, accessed October 27, 2026](https://www.sotwe.com/agent_relay)).
  - Customer testimonial: Preslav Mihaylov reports using the product for communication between his and teammates’ agents for months ([X post mirrored by teapawt, October 23, 2026](https://teapawt.org/willwashburn)).
  - Backers displayed include YC, Hustle Fund, Active Capital, Cortical Ventures, and Yonder ([company website, October 2026](https://agentrelay.com/)).
  - No active hiring openings ([company careers page, accessed October 27, 2026](https://agentrelay.com/careers)).
- **Competitors (including adjacent alternatives):**
  - **Conductor** ($24M raised, revenue unknown): provides agent workspaces, code review, and merging; its latest announced financing was a $22M Series A from Spark and Matrix in March 2026 ([funding total](https://www.conductor.build/join-us), [round announcement](https://www.conductor.build/blog/series-a)).
  - **CrewAI** ($38.5M raised reported by Forge, revenue unknown): builds agent teams and event-driven workflows rather than primarily connecting existing coding sessions; Forge lists approximately $20.5M across Series B classes in April 2026, with investors undisclosed ([Forge](https://forgeglobal.com/crew-ai_stock/), [product documentation](https://docs.crewai.com/introduction)).
  - **LangChain/LangGraph** ($160M raised and $16M 2025 revenue reported by CB Insights, via search snippet): offers a programmable agent runtime and orchestration framework; its latest announced priced round was a $125M Series B led by IVP in October 2025 ([financials](https://www.cbinsights.com/company/langchain/financials), [round](https://www.langchain.com/blog/series-b), [LangGraph](https://www.langchain.com/langgraph)).
- **Why now:** [Inferred]: Adoption of parallel coding workflows creates coordination demand, illustrated by Conductor’s reported tenfold user growth between January and its March 2026 financing announcement ([Conductor](https://www.conductor.build/blog/series-a)).

## Founders & Team

- **Will Washburn (Founder/CEO):**
  - Background: Stetson alumnus who reports spending 14 years building Tailwind to eight-figure ARR, 50K+ paying customers, and 1M+ users; these are prior-company metrics, not Agent Relay traction ([YC founder profile](https://www.ycombinator.com/founders/will-washburn)).
  - Twitter/X: @willwashburn; approximately 2.6K followers reported by a mirror ([teapawt, accessed October 27, 2026](https://teapawt.org/willwashburn)).
  - LinkedIn: Profile lists Agent Workforce and approximately 1K followers; headline: No public data found ([LinkedIn, October 2026, via search snippet](https://www.linkedin.com/in/willwashburn)).
  - GitHub: @willwashburn; pinned repository `tempo`, a fitness-device SDK, shows 3 stars ([GitHub, accessed October 27, 2026](https://github.com/willwashburn)).
- **Khaliq Gant (Founder/CTO):**
  - Background: Former founding engineer at Nango and lead engineer at Overview, with a Cornell BS and Columbia Graduate Foundations Certificate in Computer Science ([YC](https://www.ycombinator.com/founders/khaliq-gant), [resume](https://peerlist.io/khaliqgant/resume)).
  - Twitter/X: @Khaliqgant; approximately 1.5K followers reported by a mirror ([teapawt, accessed October 27, 2026](https://teapawt.org/Khaliqgant)).
  - LinkedIn: Profile lists Agent Relay and approximately 3K followers; headline: No public data found ([LinkedIn, October 2026, via search snippet](https://no.linkedin.com/in/khaliqgant)).
  - GitHub: @khaliqgant; pinned repository `Configuration-Files` has 13 stars ([GitHub, accessed October 27, 2026](https://github.com/khaliqgant/Configuration-Files)).
- **Co-founder relationship:** They met playing basketball in high school and subsequently built software together ([YC launch](https://www.ycombinator.com/launches/WI4-agent-relay-let-your-teams-coding-agents-message-each-other)).
- **Founder-market fit:** [Inferred]: Washburn’s SaaS engineering experience and Gant’s integration background relate to connecting developer tools, while their reported internal use of 50+ parallel agents supplies firsthand coordination use cases ([Washburn](https://www.ycombinator.com/founders/will-washburn), [Gant](https://www.ycombinator.com/founders/khaliq-gant), [YC launch](https://www.ycombinator.com/launches/WI4-agent-relay-let-your-teams-coding-agents-message-each-other)).

## Key Risks

- **Enterprise security requirements:** [Inferred]: Pending enterprise SSO, customer-visible security audit logs, and SOC 2 work could impede procurement; scoped credentials and token revocation are available ([trust page, October 14, 2026](https://agentrelay.com/trust)).
- **Agent action controls:** Human approval applies to configured flows rather than every write, while general read-only mode and workspace-wide emergency controls remain pending ([trust page](https://agentrelay.com/trust)).
- **Data boundaries and deployment parity:** Cloud retains run data indefinitely by default, deletion requires manual handling, and full Cloud self-host packaging is unavailable; configurable retention and locally operated open-source components provide deployment options ([trust page](https://agentrelay.com/trust)).
- **Name ambiguity:** A separate Bethvour-built product also uses “Agent Relay” for coding-agent handoffs, creating attribution ambiguity across search results and metrics ([separate product website](https://www.agent-relay.dev/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Approximately 1K stars, 95 forks ([GitHub, October 2026](https://github.com/AgentWorkforce/relay)); 475 LinkedIn followers ([LinkedIn, October 2026](https://www.linkedin.com/company/agent-relay/)); approximately 1K X followers ([Sotwe mirror, October 2026](https://www.sotwe.com/agent_relay)) |
| Revenue Signal | Hosted service free to start; open-source self-hosting available ([company website, October 2026](https://agentrelay.com/)) |
| Founders | Will Washburn, CEO: Stetson, Tailwind SaaS engineering ([YC](https://www.ycombinator.com/founders/will-washburn)); Khaliq Gant, CTO: Nango, Overview, Cornell/Columbia ([YC](https://www.ycombinator.com/founders/khaliq-gant)) |
| Competitors | Conductor ($24M raised, revenue unknown, workspace/review interface) ([company](https://www.conductor.build/join-us)); CrewAI ($38.5M reported raised, revenue unknown, agent-building framework) ([Forge](https://forgeglobal.com/crew-ai_stock/), [docs](https://docs.crewai.com/introduction)); LangChain ($160M raised, $16M 2025 revenue reported, programmable orchestration) ([CB Insights, via search snippet](https://www.cbinsights.com/company/langchain/financials), [product](https://www.langchain.com/langgraph)) |
| Moat Signals | Shared searchable sessions; Apache-2.0 repository with approximately 1K stars ([GitHub, October 2026](https://github.com/AgentWorkforce/relay)) |
| Risk Factors | Pending enterprise controls, non-universal approval gates, incomplete Cloud self-host packaging ([company trust page](https://agentrelay.com/trust)) |
| Founder Reach | Washburn: X approximately 2.6K ([mirror](https://teapawt.org/willwashburn)), GitHub tempo 3 stars ([GitHub](https://github.com/willwashburn)); Gant: X approximately 1.5K ([mirror](https://teapawt.org/Khaliqgant)), GitHub Configuration-Files 13 stars ([GitHub](https://github.com/khaliqgant/Configuration-Files)); October 2026 |
| Distribution Signals | Desktop app and agent-directed installation ([website](https://agentrelay.com/)); 229.6K downloads, period unspecified ([market.dev, October 2026, via search snippet](https://explore.market.dev/ecosystems/agents/projects/relay)) |
| Emails | hello@agentrelay.com ([Support](https://agentrelay.com/support)); hi@agentrelay.com ([Careers](https://agentrelay.com/careers)); founders@agentrelay.com ([YC](https://www.ycombinator.com/companies/agent-relay)); security@agentrelay.com ([Security](https://agentrelay.com/security)) |
