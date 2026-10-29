# UXDuck

> Build better drones. Run better missions.

| Field | Value |
|-------|-------|
| Website | https://uxduck.com |
| YC Page | https://www.ycombinator.com/companies/uxduck |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/uxduck)) |
| Industry | Industrials / Industrials -> Drones |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Hardware, AI |
| YC Partner | Nicolas Dessaigne ([YC](https://www.ycombinator.com/companies/uxduck)) |
| Emails | stadium-had-possum@duck.com, founder contact ([personal website](https://tlduck.com/about/)); cv@mail.orth.uk, professional CV contact ([CV](https://tlduck.com/cv.pdf)) |

## The Idea

- **Problem:** [Inferred]: Drone developers and professional pilots must integrate vehicle configuration, mission control, telemetry and testing workflows, with Mission Planner and QGroundControl providing existing alternatives; public measurements of this integration burden were unavailable ([ArduPilot documentation](https://review.ardupilot.org/copter/docs/common-choosing-a-ground-station.html)).
- **Approach:** UXDuck’s Rust runtime connects MAVLink vehicles over serial, UDP or TCP, combines telemetry and ArduPilot/PX4 simulation, and exposes MCP, RPC and plugin interfaces for custom applications ([UXDuck GitHub](https://github.com/uxduckhq/uxduck-core)).
- **Differentiation:** UXDuck explicitly packages AI-assistant access and a plugin SDK, versus Mission Planner’s documented configuration/log-analysis workflow and QGroundControl’s flight-control/mission-planning interface, although both alternatives also support extensibility ([UXDuck](https://github.com/uxduckhq/uxduck-core), [Mission Planner](https://ardupilot.org/planner/), [QGroundControl](https://qgroundcontrol.com/)).
- **Business Model:** [Inferred]: Commercial support or managed features could monetize the open-source runtime, but current pricing was unverifiable—Website not accessible at time of research, October 27, 2026 ([runtime license](https://github.com/uxduckhq/uxduck-core)).
- **TAM/SAM:** Fortune Business Insights estimates the broader drone-software market at $11.33 billion in 2026, reaching $44.06 billion in 2034 at 18.5% CAGR, encompassing analytics and image processing beyond UXDuck’s ground-control offering; segment-specific SAM: No public data found ([Fortune Business Insights, October 2026](https://www.fortunebusinessinsights.com/drone-software-market-103527)).
- **GTM / Distribution:** Distribution includes a browser-based simulation trial and a forthcoming developer hackathon offering a prize for UXDuck plugins ([YC](https://www.ycombinator.com/companies/uxduck), [Hackathons USA listing, November 14, 2026](https://ushackathons.com/events/robots-for-good-uxduck-hackathon-yc-f26)).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: A third-party plugin ecosystem and accumulated customer integrations could create switching costs, but public evidence of ecosystem adoption is insufficient to establish that mechanism today.
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given QGroundControl’s open-source code and existing support for professional users and developers ([QGroundControl](https://qgroundcontrol.com/)).
- **Commoditization risk:** [Inferred]: Other MAVLink developers could reproduce overlapping interfaces or adapt UXDuck’s Apache-2.0 runtime, lowering the code-access barrier while leaving implementation and integration work ([UXDuck GitHub](https://github.com/uxduckhq/uxduck-core)).

## Market & Traction

- **Traction signals:**
  - Company repository `uxduck-core`: 5 stars and 0 forks, reflecting repository engagement rather than users or customers ([GitHub, October 27, 2026](https://github.com/uxduckhq/uxduck-core)).
  - Company GitHub organization: 2 followers ([GitHub, October 27, 2026](https://github.com/uxduckhq)).
  - Developer event scheduled for November 14, 2026, with $500 total prizes and PostHog listed as venue host; attendance and completed-event outcomes are not yet available ([Hackathons USA, accessed October 27, 2026](https://ushackathons.com/events/robots-for-good-uxduck-hackathon-yc-f26)).
  - Active job postings on YC: 0 ([YC Jobs, October 27, 2026](https://www.ycombinator.com/companies/uxduck/jobs)).
- **Competitors:**
  - **Mission Planner** (funding: No public data found; revenue unknown): ArduPilot configuration, waypoint planning, log analysis and simulator integration overlap with UXDuck’s vehicle-development workflow ([ArduPilot documentation](https://ardupilot.org/planner/)).
  - **QGroundControl** (funding: No public data found; revenue unknown): Open-source, cross-platform control and mission planning for MAVLink vehicles provide an alternative to UXDuck’s MCP/plugin-oriented runtime ([QGroundControl](https://qgroundcontrol.com/), [UXDuck](https://github.com/uxduckhq/uxduck-core)).
  - **Auterion / Mission Control** ($140 million disclosed financing per CB Insights; approximately $115 million annual revenue reported in November 2025): Targets Auterion-powered vehicles with integrated mission execution, flight-control and camera workflows; its September 23, 2025, $130 million Series B was led by Bessemer and included $25 million non-dilutive capital, followed by an undisclosed-size Rheinmetall investment reported that November ([CB Insights](https://www.cbinsights.com/company/auterion/financials), [Auterion financing announcement](https://auterion.com/auterion-raises-130-million-series-b-as-their-ai-enabled-software-powering-low-cost-commercial-hardware-at-scale-transforms-warfare/), [Reuters, November 20, 2025](https://wdez.com/2025/11/20/auterion-says-rheinmetall-stake-to-boost-drone-software-groups-growth/), [Mission Control](https://auterion.com/product/mission-control/)).
- **Why now:** [Inferred]: MCP’s introduction on November 25, 2024, supplied a shared interface for connecting AI assistants to external systems, enabling the assistant-to-vehicle tooling UXDuck now documents ([Anthropic](https://www.anthropic.com/news/model-context-protocol), [UXDuck MCP documentation](https://github.com/uxduckhq/uxduck-core/blob/main/docs/site/mcp.md)).

## Founders & Team

- **Ben Butterworth (Founder/CEO):**
  - Background: His CV lists Imperial master’s degrees in Computer Science and Engineering, an MIT exchange, and roles at Helsing, Skyral, Ably and Popsa; his YC biography identifies him as Helsing’s 12th employee and subsequently first software engineer/technical lead at an unnamed defense startup that reached 70 people and 1,000+ drones, which are prior-employer figures ([CV](https://tlduck.com/cv.pdf), [YC founder profile](https://www.ycombinator.com/founders/ben-butterworth)).
  - Twitter/X: @uxduck; count not retrievable ([YC-linked account](https://www.ycombinator.com/founders/ben-butterworth)).
  - LinkedIn: `/in/bbutterworth/` is linked from YC; headline and follower count not retrievable ([YC founder profile](https://www.ycombinator.com/founders/ben-butterworth)).
  - GitHub: @uxduck, 91 followers; highest-starred pinned repository `push`, 48 stars, and drone-related `ardupilot-sitl-docker`, 35 stars, are personal projects rather than UXDuck traction ([GitHub, October 27, 2026](https://github.com/uxduck)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Butterworth’s documented work includes drone mission-planning software, MAVLink integration, controller/camera interfaces and command-and-control applications, covering components of UXDuck’s product; YC lists the company in its accelerator portfolio ([CV](https://tlduck.com/cv.pdf), [YC](https://www.ycombinator.com/companies/uxduck)).

## Key Risks

- **Existing substitutes:** [Inferred]: QGroundControl already supplies open-source flight control and mission planning, so UXDuck must win adoption against an available alternative; UXDuck’s documented MCP and plugin interfaces provide its stated additional workflows ([QGroundControl](https://qgroundcontrol.com/), [UXDuck](https://github.com/uxduckhq/uxduck-core)).
- **Agent-command safety:** [Inferred]: Incorrect assistant-issued vehicle changes could affect physical operations; UXDuck documents approval requirements for commands and changes, with unanswered requests denied after 60 seconds, although users can grant persistent permission ([UXDuck MCP documentation](https://github.com/uxduckhq/uxduck-core/blob/main/docs/site/mcp.md)).
- **Integration compatibility:** [Inferred]: Supporting different autopilots, transports and third-party tools creates compatibility-maintenance requirements; UXDuck documents ArduPilot/PX4 connections and MAVLink forwarding, but independently measured field reliability: No public data found ([UXDuck GitHub](https://github.com/uxduckhq/uxduck-core)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader drone software: $11.33B in 2026; $44.06B forecast for 2034; 18.5% CAGR, 2026–2034 ([Fortune Business Insights, 2026](https://www.fortunebusinessinsights.com/drone-software-market-103527)). |
| SAM | No public data found |
| Traction | Company runtime: 5 GitHub stars, 0 forks ([GitHub, October 27, 2026](https://github.com/uxduckhq/uxduck-core)). |
| Revenue Signal | No public data found |
| Founders | Ben Butterworth, Founder/CEO: Imperial master’s degrees, MIT exchange, Helsing command-and-control engineer ([CV](https://tlduck.com/cv.pdf), [YC](https://www.ycombinator.com/founders/ben-butterworth)). |
| Competitors | Mission Planner (funding undisclosed, revenue unknown; ArduPilot configuration/log analysis) ([ArduPilot](https://ardupilot.org/planner/)); QGroundControl (funding undisclosed, revenue unknown; cross-platform MAVLink control) ([QGroundControl](https://qgroundcontrol.com/)); Auterion ($140M disclosed financing, approximately $115M annual revenue reported November 2025; integrated vehicle platform) ([CB Insights](https://www.cbinsights.com/company/auterion/financials), [Reuters](https://wdez.com/2025/11/20/auterion-says-rheinmetall-stake-to-boost-drone-software-groups-growth/)). |
| Moat Signals | No public data found |
| Risk Factors | Open-source substitutes ([QGroundControl](https://qgroundcontrol.com/)); agent-command permissions and persistent approvals ([UXDuck documentation](https://github.com/uxduckhq/uxduck-core/blob/main/docs/site/mcp.md)). |
| Founder Reach | Butterworth: GitHub 91 followers; `push` 48 stars; X @uxduck, count not retrievable ([GitHub, October 27, 2026](https://github.com/uxduck)). |
| Distribution Signals | Browser simulation trial ([YC](https://www.ycombinator.com/companies/uxduck)); developer hackathon scheduled November 14, 2026, $500 prizes ([Hackathons USA](https://ushackathons.com/events/robots-for-good-uxduck-hackathon-yc-f26)). |
| Emails | stadium-had-possum@duck.com ([founder website](https://tlduck.com/about/)); cv@mail.orth.uk ([founder CV](https://tlduck.com/cv.pdf)). |
