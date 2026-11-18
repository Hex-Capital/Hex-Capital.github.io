# Hue

> Realistic worlds for agent evaluation

| Field | Value |
|-------|-------|
| Website | https://hue.run/ |
| YC Page | https://www.ycombinator.com/companies/hue |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/hue)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Infrastructure, AI |
| YC Partner | Aaron Epstein ([Y Combinator](https://www.ycombinator.com/companies/hue)) |
| Emails | aneesh@hue.run, CEO ([LinkedIn, via search snippet](https://www.linkedin.com/in/aneeshkethini)); founders@hue.run, intros and service ([Launch YC](https://www.ycombinator.com/launches/WWw-hue-simulations-for-ai-agents), [Hue Terms](https://hue.run/terms)); team@hue.run, team contact ([Hue GitHub](https://github.com/hue-run)); security@hue.run, security and privacy ([Hue Terms](https://hue.run/terms)) |

## The Idea

- **Problem:** Teams shipping agents that send email or update CRMs struggle to reproduce production failures because mocked APIs and empty sandbox accounts omit the data and state the agent encountered ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/WWw-hue-simulations-for-ai-agents)).
- **Approach:** Hue seeds stateful replicas of apps such as Gmail, Slack, and Salesforce from a scenario description or recorded tool requests, then gives each test run an isolated copy of the starting state ([Hue docs](https://docs.hue.run/), [Launch YC, Oct 2026](https://www.ycombinator.com/launches/WWw-hue-simulations-for-ai-agents)).
- **Differentiation:** Hue replays a recorded user’s app state at a selected checkpoint, while Arga Labs emphasizes parallel API twins and shared multi-app scenarios, Ancha adds simulated participants and a controllable clock to trace-based tests, and Veris AI uses simulations for policy-specific benchmarks and agent training ([Hue docs](https://docs.hue.run/worlds/from-traces), [Arga Labs](https://www.argalabs.com/blog/making-ai-agents-ready-for-the-real-world), [Ancha](https://ancha.io/), [Veris AI](https://www.veris.ai/blog/introducing-veris-ai-a-new-way-to-train-enterprise-ai-agents-through-simulated-experience)).
- **Business Model:** Hue documents free plans, trials, and self-serve paid subscriptions that renew monthly by default, with subscription fees and any usage rates set at checkout or in an order ([Hue Terms, Oct 2026](https://hue.run/terms)).
- **TAM/SAM:** Mordor Intelligence estimates the broader AI agent testing and validation market at $1.01B in 2026, growing at 20.58% CAGR through 2031, with no public TAM/SAM data found for the specific app-simulation segment ([Mordor Intelligence, 2026](https://www.mordorintelligence.com/industry-reports/ai-agent-testing-and-validation-market)).
- **GTM / Distribution:** Hue solicits demos and referrals through Launch YC and distributes TypeScript and Python SDKs through npm and PyPI ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/WWw-hue-simulations-for-ai-agents), [Hue Quickstart](https://docs.hue.run/quickstart)).

## Defensibility

- **Moat today:** Hue documents reconstructing time-specific app state from retained observations across traces and freezing that state for repeated tests ([Hue Worlds from Traces](https://docs.hue.run/worlds/from-traces)).
- **Future moat:** [Inferred]: A team’s library of trace-derived cases and app-state checkpoints could raise switching costs as it grows, with no public data found on retention or migration behavior ([Hue docs](https://docs.hue.run/)).
- **Market structure:** No structural barrier identified at this stage, with Ancha already offering trace-to-world conversion and Arga Labs offering stateful SaaS replicas ([Ancha](https://ancha.io/), [Arga Labs](https://www.argalabs.com/blog/making-ai-agents-ready-for-the-real-world)).
- **Commoditization risk:** Open-source ClawsBench implements stateful Gmail and Slack simulations with snapshot restoration, and Ancha offers commercial trace-based replay ([ClawsBench, Apr 2026](https://arxiv.org/abs/2604.05172), [Ancha](https://ancha.io/)).

## Market & Traction

- **Traction signals:**
  - 69K weekly downloads of the `@hue-run/sdk` npm package ([Socket, Nov 2026 snapshot](https://socket.dev/npm/package/@hue-run%2Fsdk)).
  - Launch YC debut on Oct 29, 2026, with 34 votes reported in its first hours ([Launch YC](https://www.ycombinator.com/launches/WWw-hue-simulations-for-ai-agents), [Reveneau, Oct 2026](https://reveneau.com/ainews/hue-yc-fall-2026-stateful-app-simulations-agent-testing)).
  - Launch coverage in RuntimeWire and Reveneau ([RuntimeWire, Oct 2026](https://runtimewire.com/article/hue-simulated-workspaces-ai-agent-testing), [Reveneau, Oct 2026](https://reveneau.com/ainews/hue-yc-fall-2026-stateful-app-simulations-agent-testing)).
  - 0 open YC job listings ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/hue/jobs)).
- **Competitors:**
  - **Arga Labs** ($10M disclosed, revenue unknown), with an August 2026 seed led by General Catalyst and an emphasis on parallel SaaS replicas and shared scenarios ([Arga Labs, Aug 2026](https://www.argalabs.com/blog/making-ai-agents-ready-for-the-real-world)).
  - **Ancha** (funding undisclosed, revenue unknown), with simulated participants, a controllable clock, and checks on app state and action order ([Ancha, Nov 2026](https://ancha.io/)).
  - **Veris AI** ($8.5M disclosed, revenue unknown), with a June 2025 seed co-led by Decibel Ventures and Acrew Capital and an emphasis on enterprise benchmarks and simulation-based training ([Veris AI, Jun 2025](https://www.veris.ai/blog/introducing-veris-ai-a-new-way-to-train-enterprise-ai-agents-through-simulated-experience)).
- **Why now:** [Inferred]: As agents make more calls into business systems, teams face more app states to test before release, with Datadog reporting that observed MCP tool calls grew more than 22-fold from Q4 2025 to Q2 2026 ([Datadog earnings call, Aug 2026](https://investors.datadoghq.com/static-files/2360a5cc-f17a-4731-b74a-fb6f4617baf5)).

## Founders & Team

- **Aneesh Kethini (Founder/CEO):**
  - **Background:** NYU Stern alumnus, former Susquehanna quantitative trader, and AI product manager who helped build and launch Datadog’s AI SRE agent, with `aneesh@hue.run` published as his business email ([YC founder profile](https://www.ycombinator.com/founders/aneesh-kethini), [LinkedIn, via search snippet](https://www.linkedin.com/in/aneeshkethini)).
  - **Twitter/X:** @aneeshkethini, 309 followers ([YC founder profile](https://www.ycombinator.com/founders/aneesh-kethini), [Teapawt X mirror, Nov 2026](https://www.xitter.gq/aneeshkethini)).
  - **LinkedIn:** Headline not retrievable, with 1K followers visible ([LinkedIn, via search snippet](https://www.linkedin.com/in/aneeshkethini)).
  - **GitHub:** No public repos found.
- **Josh Le (Founder/CTO):**
  - **Background:** NYU alumnus and Kleiner Perkins Fellow who built legal agents at August and held engineering roles at Apple, Gusto, Wayfair, SendBlue, and Sixtyfour, with no public data found for a direct business email ([YC founder profile](https://www.ycombinator.com/founders/josh-le), [Launch YC, Oct 2026](https://www.ycombinator.com/launches/WWw-hue-simulations-for-ai-agents)).
  - **Twitter/X:** @joshuadle, 75 followers ([YC founder profile](https://www.ycombinator.com/founders/josh-le), [Teapawt X mirror, Nov 2026](https://xitter.cf/joshuadle)).
  - **LinkedIn:** Headline not retrievable, with 3K followers visible ([LinkedIn, via search snippet](https://www.linkedin.com/in/joshua-d-le)).
  - **GitHub:** @joshle298 contributed to TechAtNYU’s website repository, which had 4 stars ([GitHub Explorer](https://ghe.derekchia.com/related/hue-run/docs), [GitHub, Nov 2026](https://github.com/TechAtNYU/techatnyu.org2022-2025)).
- **Co-founder relationship:** Both attended NYU, and Le says they met during their first week there ([YC founder profiles](https://www.ycombinator.com/companies/hue), [Le’s LinkedIn post, via search snippet](https://in.linkedin.com/in/anshul-gupta-460049253)).
- **Founder-market fit:** The founders report building testing environments and replay infrastructure in their prior roles at Datadog and August, and YC lists Aaron Epstein as Hue’s primary partner ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/WWw-hue-simulations-for-ai-agents), [Y Combinator](https://www.ycombinator.com/companies/hue)).

## Key Risks

- **Replay fidelity:** Unobserved fields can remain absent and insufficient evidence can prevent reconstruction, while checkpoint previews expose the retained values used to start each run ([Hue Worlds from Traces](https://docs.hue.run/worlds/from-traces)).
- **Production data restrictions:** Hue requires a data processing addendum before customer personal-data processing and separate written authorization for restricted categories such as identifiable health data, while its SDK supports local redaction before export ([Hue Terms, Oct 2026](https://hue.run/terms), [Hue Data Privacy](https://docs.hue.run/guides/redaction)).
- **Competitive overlap:** Ancha already recreates stateful environments from production traces, while Hue documents selecting a checkpoint from retained user history and reusing that state across versions ([Ancha](https://ancha.io/), [Hue Worlds from Traces](https://docs.hue.run/worlds/from-traces)).
- **Search discoverability:** Website not accessible at time of research. Philips Hue and the Hue SQL editor share the name, while the YC listing and developer docs identify the startup’s domain ([TrustList, Nov 2026](https://trustlist.uk/launches/launch-weekly46-hue-run-agent-simulations), [Y Combinator](https://www.ycombinator.com/companies/hue), [Hue docs](https://docs.hue.run/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader AI agent testing and validation market: $1.01B in 2026 and 20.58% CAGR through 2031 ([Mordor Intelligence, 2026](https://www.mordorintelligence.com/industry-reports/ai-agent-testing-and-validation-market)). |
| SAM | No public data found |
| Traction | 69K weekly npm SDK downloads ([Socket, Nov 2026](https://socket.dev/npm/package/@hue-run%2Fsdk)); 34 Launch YC votes in the first hours ([Reveneau, Oct 2026](https://reveneau.com/ainews/hue-yc-fall-2026-stateful-app-simulations-agent-testing)); launch coverage ([RuntimeWire, Oct 2026](https://runtimewire.com/article/hue-simulated-workspaces-ai-agent-testing)); 0 open YC jobs ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/hue/jobs)). |
| Revenue Signal | Terms document free plans, trials, and monthly-by-default paid subscriptions with fees set at checkout or in an order ([Hue Terms, Oct 2026](https://hue.run/terms)). |
| Founders | Aneesh Kethini (CEO), Datadog AI SRE and Susquehanna; Josh Le (CTO), August legal agents and Apple engineering ([Y Combinator](https://www.ycombinator.com/companies/hue)). |
| Competitors | Arga Labs ($10M disclosed, revenue unknown, parallel SaaS twins) ([Arga Labs](https://www.argalabs.com/blog/making-ai-agents-ready-for-the-real-world)); Ancha (funding undisclosed, revenue unknown, simulated participants and clock) ([Ancha](https://ancha.io/)); Veris AI ($8.5M disclosed, revenue unknown, simulation-based training) ([Veris AI](https://www.veris.ai/blog/introducing-veris-ai-a-new-way-to-train-enterprise-ai-agents-through-simulated-experience)). |
| Moat Signals | Retained trace evidence and fixed app-state checkpoints for repeatable runs ([Hue Worlds from Traces](https://docs.hue.run/worlds/from-traces)). |
| Risk Factors | Replay fidelity ([Hue Worlds from Traces](https://docs.hue.run/worlds/from-traces)), production data restrictions ([Hue Terms](https://hue.run/terms)), overlapping trace replay ([Ancha](https://ancha.io/)). |
| Founder Reach | Kethini: X 309 ([Teapawt, Nov 2026](https://www.xitter.gq/aneeshkethini)), LinkedIn 1K ([LinkedIn, via search snippet](https://www.linkedin.com/in/aneeshkethini)); Le: X 75 ([Teapawt, Nov 2026](https://xitter.cf/joshuadle)), LinkedIn 3K ([LinkedIn, via search snippet](https://www.linkedin.com/in/joshua-d-le)), contributed to a repo with 4 stars ([GitHub Explorer](https://ghe.derekchia.com/related/hue-run/docs), [GitHub](https://github.com/TechAtNYU/techatnyu.org2022-2025)). |
| Distribution Signals | Launch YC demo and referral channel ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/WWw-hue-simulations-for-ai-agents)); SDK distribution via npm and PyPI ([Hue Quickstart](https://docs.hue.run/quickstart)). |
| Emails | aneesh@hue.run, CEO ([LinkedIn, via search snippet](https://www.linkedin.com/in/aneeshkethini)); founders@hue.run, introductions and service ([Launch YC](https://www.ycombinator.com/launches/WWw-hue-simulations-for-ai-agents), [Hue Terms](https://hue.run/terms)); team@hue.run, team ([Hue GitHub](https://github.com/hue-run)); security@hue.run, security and privacy ([Hue Terms](https://hue.run/terms)). |
