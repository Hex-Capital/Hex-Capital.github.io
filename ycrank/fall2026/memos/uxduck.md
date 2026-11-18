# UXDuck

> Build better drones. Run better missions.

| Field | Value |
|-------|-------|
| Website | https://uxduck.com |
| YC Page | https://www.ycombinator.com/companies/uxduck |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/uxduck)) |
| Industry | Industrials / Industrials -> Drones |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Hardware, AI |
| YC Partner | Nicolas Dessaigne ([Y Combinator](https://www.ycombinator.com/companies/uxduck)) |
| Emails | cv@mail.orth.uk (Ben Butterworth’s professional contact, [founder CV](https://tlduck.com/cv.pdf)), hello@uxduck.com (demos, [Launch YC](https://www.ycombinator.com/launches/X9D-uxduck-the-ai-native-software-for-the-next-billion-drones)), support@uxduck.com (support and pricing, [UXDuck pricing](https://uxduck.com/pricing)) |

## The Idea

- **Problem:** Teams building custom drones repeat sensor integration, testing, and flight-data review across vehicles, and the founder reports that hardware incompatibilities can surface during flight when teams use Mission Planner, QGroundControl, or internal tools ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/X9D-uxduck-the-ai-native-software-for-the-next-billion-drones)).
- **Approach:** UXDuck puts browser simulation, desktop vehicle connectivity, parameter management, mission planning, and flight replay in one ground control station, with support for custom firmware and permission-controlled AI assistance ([UXDuck product](https://uxduck.com/product), [UXDuck security](https://uxduck.com/security)).
- **Differentiation:** UXDuck offers installation-free browser simulation and Model Context Protocol access alongside the ArduPilot-focused Mission Planner and the cross-platform QGroundControl, with support for running either ground station in parallel ([UXDuck comparison](https://uxduck.com/compare), [UXDuck compatibility](https://uxduck.com/compatibility)).
- **Business Model:** The app is free for personal and noncommercial academic use, with business and government pricing available by inquiry ([UXDuck pricing, Nov 2026](https://uxduck.com/pricing)).
- **TAM/SAM:** Intel Market Research estimated the global UAV ground station software market at $4.50 billion in 2024 and reported a 20.9% forecast CAGR, with no public SAM estimate found for custom-drone development teams ([Intel Market Research, Dec 2025](https://www.intelmarketresearch.com/uav-ground-station-software-market-23585)).
- **GTM / Distribution:** UXDuck offers an account-free browser simulator, a self-serve desktop download, founder-led demos through Launch YC, and developer outreach through a hackathon hosted at PostHog’s San Francisco office ([UXDuck](https://uxduck.com/), [Launch YC, Nov 2026](https://www.ycombinator.com/launches/X9D-uxduck-the-ai-native-software-for-the-next-billion-drones), [SF-based, Nov 2026](https://sf-based.com/events/drones-for-good-uxduck-hackathon-yc-f26-2026-11-14)).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Custom integrations, saved configurations, and vehicle change histories could create switching costs if teams adopt them as engineering records, with no public evidence of retention or migration costs ([UXDuck product](https://uxduck.com/product)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** [Inferred]: Ground-station maintainers and drone engineering teams can reuse the Apache-licensed core and existing MAVLink tooling to reproduce baseline workflows, with cross-vehicle testing and support still requiring engineering work ([UXDuck Core](https://github.com/uxduckhq/uxduck-core), [ArduPilot project](https://ardupilot.org/dev/docs/ardupilot-project.html)).

## Market & Traction

- **Traction signals:**
  - More than 500 simulated flight hours, excluding testing and development (company-reported, [Launch YC, Nov 11, 2026](https://www.ycombinator.com/launches/X9D-uxduck-the-ai-native-software-for-the-next-billion-drones)).
  - Customer testimonial: Ed Handford, CTO of an unnamed startup, reported flying a custom-imported aircraft within five minutes of download and described UXDuck as his team’s tool for demos and flying ([UXDuck homepage, accessed Nov 17, 2026](https://uxduck.com/)).
  - $500,000 in financing from Y Combinator, classified as a convertible note dated Oct 1, 2026 ([CB Insights, via search snippet](https://www.cbinsights.com/company/uxduck/financials)).
  - Launch coverage in Reveneau ([Reveneau, Nov 2026](https://reveneau.com/ainews/uxduck-yc-fall-2026-open-source-drone-software-helsing)).
  - 51 Launch YC upvotes ([Launch YC, Nov 17, 2026](https://www.ycombinator.com/launches/X9D-uxduck-the-ai-native-software-for-the-next-billion-drones)).
  - 37 GitHub stars for UXDuck Core ([GitHub, Nov 17, 2026](https://github.com/uxduckhq/uxduck-core)).
  - 20 followers for company X account @UXDuckHQ ([Teapawt X mirror, Nov 17, 2026](https://www.nitter.gq/UXDuckHQ)).
  - 24 people listed as attending the Nov 14 hackathon ([Rifio event listing, Nov 2026](https://www.rifio.dev/events/d1b2db5e-1c38-42be-8ee8-28ba58efa62e)).
  - 0 open jobs on YC ([YC Jobs, Nov 17, 2026](https://www.ycombinator.com/companies/uxduck/jobs)).
- **Competitors:**
  - **Mission Planner** (open-source project, funding and revenue unknown) provides ArduPilot configuration and mission planning through a Windows-centered application, with UXDuck adding browser simulation and AI-agent access ([ArduPilot GitHub](https://github.com/ArduPilot/MissionPlanner), [UXDuck comparison](https://uxduck.com/compare)).
  - **QGroundControl** (open-source project, funding and revenue unknown) provides cross-platform MAVLink flight control and mission planning, with UXDuck packaging browser simulation and agent access in its workflow ([QGroundControl](https://qgroundcontrol.com/), [UXDuck comparison](https://uxduck.com/compare)).
  - **UgCS / SPH Engineering** (funding unknown, €8.45 million in 2024 parent-company turnover) focuses on desktop survey planning for LiDAR, mapping, and geophysics ([SPH Engineering](https://www.sphengineering.com/flight-planning/ugcs), [B2BHint, filed accounts](https://b2bhint.com/en/company/lv/sph-engineering--50103629321)).
  - **Auterion** (over $167 million raised as of Feb 2026, $200 million in projected 2026 revenue per reporting) sells an autonomy software stack for defense fleets, with a $130 million Series B led by Bessemer in Sep 2025 and a subsequent Rheinmetall investment with undisclosed terms in Nov 2025 ([Resilience Media, citing PitchBook and other sources](https://resiliencemedia.co/auterion-the-drone-software-startup-plans-to-raise-200m-at-a-1-2b-valuation/), [Auterion](https://auterion.com/auterion-raises-130-million-series-b-as-their-ai-enabled-software-powering-low-cost-commercial-hardware-at-scale-transforms-warfare/), [Reuters](https://www.investing.com/news/stock-market-news/auterion-says-rheinmetall-stake-to-boost-drone-software-groups-growth-4369562)).
- **Why now:** [Inferred]: The FAA and TSA’s August 2025 proposal for routine low-altitude flights beyond visual line of sight could expand demand for ground software used by delivery and aerial-survey operators if adopted ([Federal Register, Aug 2025](https://www.govinfo.gov/content/pkg/FR-2025-08-07/html/2025-14992.htm)).

## Founders & Team

- **Ben Butterworth (Founder/CEO):**
  - **Background:** Holds master’s degrees in engineering and computer science from Imperial College London, studied at MIT on exchange, built edge AI and command-and-control software at Helsing, and led drone software development at an unnamed startup, with earlier work at Skyral, Improbable, and Ocado Technology ([founder CV](https://tlduck.com/cv.pdf), [UXDuck About](https://uxduck.com/about)). His CV lists cv@mail.orth.uk as his direct professional contact ([founder CV](https://tlduck.com/cv.pdf)).
  - **Twitter/X:** @uxduck, 376 followers ([YC founder profile](https://www.ycombinator.com/founders/ben-butterworth), [Teapawt X mirror, Nov 17, 2026](https://www.nitter.gq/uxduck)).
  - **LinkedIn:** YC links to Ben Butterworth’s profile, whose headline was unavailable, and UXDuck’s company page lists a 2–10 employee range alongside YC’s reported headcount of one ([YC founder profile](https://www.ycombinator.com/founders/ben-butterworth), [UXDuck LinkedIn](https://www.linkedin.com/company/uxduck)).
  - **GitHub:** @uxduck, with 93 profile followers and 49 stars for `push`, his most-starred pinned repository ([GitHub, Nov 17, 2026](https://github.com/uxduck)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Butterworth previously built drone mission-planning and monitoring software and integrated flight hardware, and YC lists Nicolas Dessaigne as UXDuck’s primary partner ([founder CV](https://tlduck.com/cv.pdf), [Y Combinator](https://www.ycombinator.com/companies/uxduck)).

## Key Risks

- **Incumbent substitution:** [Inferred]: Existing mission-planning and configuration workflows can limit adoption of a second tool, and UXDuck reduces switching effort by supporting parallel use with Mission Planner and QGroundControl ([UXDuck comparison](https://uxduck.com/compare), [UXDuck compatibility](https://uxduck.com/compatibility)).
- **Flight reliability:** UXDuck documented a PX4 release regression that could send a vehicle to an unintended location and shipped a fix with validation for incomplete takeoff plans ([UXDuck release notes, Nov 8–9, 2026](https://uxduck.com/release-notes)).
- **Hosted AI data review:** [Inferred]: Sending vehicle-state context to external model providers may trigger customer security review, and UXDuck discloses its providers, describes secret removal, and offers local vehicle connections ([UXDuck subprocessors](https://uxduck.com/subprocessors), [UXDuck security](https://uxduck.com/security)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $4.50 billion global UAV ground station software market in 2024, with a reported 20.9% forecast CAGR ([Intel Market Research, Dec 2025](https://www.intelmarketresearch.com/uav-ground-station-software-market-23585)) |
| SAM | No public data found |
| Traction | More than 500 simulated flight hours excluding testing and development ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/X9D-uxduck-the-ai-native-software-for-the-next-billion-drones)); customer testimonial from Ed Handford on team use for demos and flying ([UXDuck homepage, Nov 2026](https://uxduck.com/)); 37 Core stars ([GitHub, Nov 17, 2026](https://github.com/uxduckhq/uxduck-core)); launch coverage ([Reveneau, Nov 2026](https://reveneau.com/ainews/uxduck-yc-fall-2026-open-source-drone-software-helsing)) |
| Revenue Signal | Free for personal and noncommercial academic use, with quote-based business and government pricing ([UXDuck pricing, Nov 2026](https://uxduck.com/pricing)) |
| Founders | Ben Butterworth (Founder/CEO), Imperial College London master’s degrees, former Helsing engineer, former drone software lead ([founder CV](https://tlduck.com/cv.pdf), [Y Combinator](https://www.ycombinator.com/companies/uxduck)) |
| Competitors | Mission Planner (funding and revenue unknown, ArduPilot configuration, [ArduPilot GitHub](https://github.com/ArduPilot/MissionPlanner)); QGroundControl (funding and revenue unknown, cross-platform MAVLink ground control, [QGroundControl](https://qgroundcontrol.com/)); UgCS / SPH Engineering (funding unknown, €8.45 million 2024 parent turnover, survey planning, [B2BHint](https://b2bhint.com/en/company/lv/sph-engineering--50103629321), [SPH Engineering](https://www.sphengineering.com/flight-planning/ugcs)); Auterion (over $167 million raised, reported $200 million projected 2026 revenue, defense fleet autonomy, [Resilience Media, Feb 2026](https://resiliencemedia.co/auterion-the-drone-software-startup-plans-to-raise-200m-at-a-1-2b-valuation/)) |
| Moat Signals | No public data found |
| Risk Factors | Overlapping incumbent workflows ([UXDuck comparison](https://uxduck.com/compare)), flight-control regression ([UXDuck release notes](https://uxduck.com/release-notes)), hosted AI processing of vehicle context ([UXDuck subprocessors](https://uxduck.com/subprocessors)) |
| Founder Reach | Ben Butterworth: 376 X followers ([Teapawt X mirror, Nov 17, 2026](https://www.nitter.gq/uxduck)), 93 GitHub followers and 49 stars for `push` ([GitHub, Nov 17, 2026](https://github.com/uxduck)) |
| Distribution Signals | Account-free browser simulator ([UXDuck](https://uxduck.com/)), 51 Launch YC upvotes ([Launch YC, Nov 17, 2026](https://www.ycombinator.com/launches/X9D-uxduck-the-ai-native-software-for-the-next-billion-drones)), 20 company X followers ([Teapawt X mirror, Nov 17, 2026](https://www.nitter.gq/UXDuckHQ)), 24 listed hackathon attendees ([Rifio, Nov 2026](https://www.rifio.dev/events/d1b2db5e-1c38-42be-8ee8-28ba58efa62e)) |
| Emails | cv@mail.orth.uk (Ben Butterworth’s professional contact, [founder CV](https://tlduck.com/cv.pdf)), hello@uxduck.com (demos, [Launch YC](https://www.ycombinator.com/launches/X9D-uxduck-the-ai-native-software-for-the-next-billion-drones)), support@uxduck.com (support and pricing, [UXDuck pricing](https://uxduck.com/pricing)) |
