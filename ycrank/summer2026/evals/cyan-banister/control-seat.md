# Control Seat -- Cyan Banister Evaluation

Move the clock to 2032. A plant manager should be able to interrogate an entire production system, trace an anomaly across machines, and change an operating parameter without assembling five vendors around a SCADA terminal. Control Seat has one artifact leaking from that future: Battex Chile remotely monitored and controlled a battery through its MQTT infrastructure in July 2026. But the dossier never maps the intervening transitions—how the product advances from one connected asset to trusted plant-wide control, how safety approval changes, or why Control Seat becomes the system of record. “AI can write software faster” describes today’s tool improvement, not the six-year destination.

The present-day wound is more concrete. Industrial operators spend weeks connecting PLCs, historians, databases, and custom integrations, then investigate failures across alarms and staff memory. Control Seat can sit above an installed system instead of forcing replacement, which is clever because years of accumulated configuration make switching expensive. Yet I cannot see who captures the existing rent or how much of it disappears. Customized deployments, integration services, support, and SLAs may return control to operators—or simply make Control Seat the new integration vendor billing for the same complexity.

Warren Shepard and Jack Grodnick have unusually relevant technical tuition. Shepard worked on networks, manufacturing, and flight software at SpaceX’s Starlink program; Grodnick worked directly on controls and SCADA at Tesla and SpaceX. They met during their first Dartmouth year, discussed starting a company, and later recognized the same industrial-control pain through separate operating experiences. That is substantially better than two people discovering “industrial AI” during YC. What is missing is a dated trail of self-directed builds, several pre-company artifacts, or evidence that either founder pursued this problem before their employers assigned it to them.

The strongest bull case is that Control Seat is hiding below the fashionable AI layer. OPC UA, MQTT, PLCs, historians, networking, and air-gapped deployments are the plumbing every industrial copilot eventually needs. If each project produces reusable configuration knowledge, the apparently services-heavy wedge could accumulate into a scarce operational map. The painful counterargument is in the dossier itself: that compounding asset is inferred, no deployment-scale or retention evidence exists, and Seeq, Litmus, and Augury have raised at least $567.6 million while attacking overlapping analytics and industrial-data problems. Open protocols connect the product to factories; they do not establish that Control Seat controls the bottleneck.

Battex is meaningful because remotely controlling a physical battery is costly behavior, not a waitlist click. It also exposes the gate I care about: failure here can damage equipment or people. Self-hosted, air-gapped deployment and instructions to keep safety functions independent are sensible limiting architecture, but the terms do not guarantee uninterrupted or error-free service, and FactoryTalk and Siemens WinCC support remains unfinished. The founders’ CEO and CTO roles are clear, although ownership and a contractual tiebreaker are undisclosed; I would verify that before investing rather than assume two titles solve governance.

I expect Control Seat to become a capable, services-assisted industrial integration business with under $3 million ARR in 36 months, unless deployments begin compounding across facilities rather than restarting as bespoke projects. I am neutral and would not write the check today. My flip condition is verifiable: three unaffiliated customers each expanding Control Seat from an initial production line into a second facility after at least six months of live operation. That would demonstrate weirdly costly repeat behavior, a reusable integration asset, and the beginnings of the future the current dossier only implies.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Maps a Six-Year Future to One Present-Day Leak | 10/31 |
| Founder Biography Shows Pre-Company Obsession and First-Believer Proof | 17/24 |
| Dossier Names a Broken Rule, Its Rent, and the Agency Returned | 10/19 |
| Working Artifact Elicits Costly or Weird User Behavior | 9/15 |
| Product Sits Beneath Today?s Hype as an Enabling Layer | 7/11 |
| **Total** | **53/100** |

**Total Score: 53/100** (Neutral)
