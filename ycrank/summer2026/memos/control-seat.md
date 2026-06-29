# Control Seat

> Control and Monitoring of Industrial Operations

| Field | Value |
|-------|-------|
| Website | https://www.controlseat.com |
| YC Page | https://www.ycombinator.com/companies/control-seat |
| Batch | Summer 2026 |
| Industry | Industrials / Industrials |
| Team Size | 2 |
| Location | San Francisco |
| Tags | Workflow Automation, Monitoring, Industrial |
| YC Partner | Jared Friedman |
| Emails | founders@controlseat.com |

## The Idea

- **Problem:** Industrial operators rely on legacy SCADA/HMI stacks (AVEVA Wonderware, Siemens WinCC, Rockwell FactoryTalk) for PLC programming, dashboards, and historian data, integrated by hand by systems integrators (controlseat.com, 2026).
- **Approach:** AI-native SCADA builder offering drag-and-drop dashboards, PLC programming for Allen-Bradley/Siemens/Beckhoff, built-in historian, anomaly detection, forecasting, and plain-language queries against tag data (controlseat.com, 2026).
- **Differentiation:** Vs. Inductive Automation Ignition (per-server license, no native AI), Control Seat layers AI analytics and plain-language query natively; vs. AVEVA/Siemens WinCC (decades-old desktop-rooted stacks), it claims a modern web platform with 10k+ tags/sec, <100ms latency, 99.9% uptime (controlseat.com, 2026).
- **Business Model:** No published price tier; site offers a "competitive price guarantee" to beat any comparable integrator quote, with custom quotes via contact form (controlseat.com, 2026). [Inferred]: Integrator-services revenue plus SaaS platform license, given the dual "designs, builds, deploys, and runs" positioning.
- **TAM/SAM:** Global SCADA market $12.89B (2025) → $20.05B by 2030 at 9.2% CAGR (MarketsandMarkets, 2026); alternative estimate $13.87B (2026) → $26.59B by 2034 at 8.5% CAGR (Fortune Business Insights, 2026); broader industrial automation/control systems $250.3B in 2026 (Grand View Research, 2026).
- **GTM / Distribution:** [Inferred]: Direct sales to plant operators paired with in-house integrator delivery, undercutting incumbent integrator quotes per the price-guarantee positioning on controlseat.com (2026).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond claimed performance specs (10k+ tags/sec, <100ms latency) (controlseat.com, 2026).
- **Future moat:** [Inferred]: Switching costs accumulate once a plant standardizes on Control Seat's tag schema, historian, and AI models; unproven now because no customer deployments are disclosed publicly.
- **Market structure:** [Inferred]: Incumbents (AVEVA, Siemens, Rockwell) sell perpetual-license desktop SCADA bundled with their PLC/hardware sales, creating channel conflict if they aggressively cannibalize with cloud/AI-native offerings; Inductive Automation Ignition is bootstrapped at ~$41M ARR with unlimited-tag pricing (getlatka.com, 2025), constraining how fast it can rebuild on a new stack.
- **Commoditization risk:** Other SCADA-modernization startups can replicate the drag-and-drop + AI-on-tags pattern; Ubidots, VTScada, ICONICS GENESIS64, and Tatsoft already compete on web-native SCADA (G2, 2026; Tatsoft, 2025).

## Market & Traction

- **Traction signals:**
  - YC Summer 2026 batch, $500K YC standard deal (Dartmouth CS news, Jun 2026).
  - Company incorporated January 2026 (Dartmouth CS news, Jun 2026).
  - Public launch video posted on YouTube titled "Control Seat | Real-time internal dashboards" (YouTube, 2026).
  - LinkedIn company page exists (linkedin.com/company/control-seat); follower count not retrievable.
  - YC page lists 0 open jobs (ycombinator.com/companies/control-seat, 2026).
  - No revenue, customer count, Product Hunt presence, or Twitter/X account found in public sources.
- **Competitors:**
  - Inductive Automation (Ignition): bootstrapped, ~$41M ARR, ~373 employees, deployed at 69% of Fortune 100 (getlatka.com, 2025; inductiveautomation.com, 2022); unlimited-tag licensing from ~$15K/server (plcprogramming.io, 2026).
  - AVEVA (formerly Wonderware): public subsidiary of Schneider Electric, largest installed global SCADA base (Gartner Peer Insights, 2026); revenue unknown at SCADA-segment level.
  - Siemens WinCC: division of Siemens AG, dominant in process industries (Powerfabric, 2026); revenue unknown at product level.
  - Rockwell FactoryTalk View: division of Rockwell Automation (NYSE: ROK) (Tatsoft, 2025); revenue unknown at product level.
  - Tulip Interfaces (adjacent — MES/frontline ops): raised $120M Series, unicorn valuation Jan 2026 (SiliconANGLE, Jan 2026).
- **Why now:** [Inferred]: LLM capability threshold crossed in 2024-2025 enabling plain-language queries over time-series tag data, paired with Ignition's mid-market share gains since 2015 demonstrating willingness to displace AVEVA/Wonderware (Powerfabric, 2026).

## Founders & Team

- **Jack Grodnick (Co-founder):**
  - Background: On leave from Dartmouth College, CS and Economics major, class of '26; prior internships at Tesla, SpaceX, and Amazon (Dartmouth CS news, Jun 2026; threads.com/@dartmouthartsci, 2026).
  - Twitter/X: No public account found.
  - LinkedIn: "Control Seat" — Greater Minneapolis-St. Paul Area, 500+ connections (linkedin.com/in/jack-grodnick, 2026).
  - GitHub: @jackgrodnick — personal site at jackgrodnick.github.io/jack; no notable repo star counts found.
- **Warren Shepard (Co-founder):**
  - Background: Dartmouth College Math and CS, class of '26 salutatorian (≥3.99 GPA) (home.dartmouth.edu, Jun 2026); prior internships at SpaceX and Microsoft; research interest in mechanistic interpretability of LLMs (Dartmouth CS news, Jun 2026).
  - Twitter/X: No public account found.
  - LinkedIn: "CS and Math @ Dartmouth College" (linkedin.com/in/warren-shepard-493a37201, 2026).
  - GitHub: No public repos found.
- **Co-founder relationship:** Both Dartmouth class of 2026; incorporated Control Seat together in January 2026 (Dartmouth CS news, Jun 2026).
- **Founder-market fit:** [Inferred]: Both founders worked at SpaceX, which runs high-volume custom industrial control and telemetry systems; Grodnick adds Tesla manufacturing exposure (Dartmouth CS news, Jun 2026); YC Group Partner Jared Friedman assigned (YC page, 2026).

## Key Risks

- **Incumbent installed-base lock-in:** AVEVA Wonderware and Siemens WinCC hold the largest global installed bases through decades of OT deployment (Gartner/Powerfabric, 2026); rip-and-replace cycles for plant control systems span years, slowing adoption regardless of product quality.
- **Bootstrapped, profitable mid-market leader:** Inductive Automation has reached ~$41M ARR with no outside funding and 373 employees, with Fortune-100 penetration (getlatka.com, 2025), creating an entrenched price/feature competitor that Control Seat must displace without the licensing-model advantage Ignition itself used against Wonderware.
- **Services-heavy revenue mix:** The website positions Control Seat as an integrator that "designs, builds, deploys, and runs" systems with a price guarantee to beat integrator quotes (controlseat.com, 2026), which can compress gross margin relative to pure-software SCADA peers; no public pricing exists to verify the mix.
- **Cybersecurity/regulatory exposure:** SCADA systems are subject to critical-infrastructure regulation; SNS Insider cites infrastructure-modernization mandates and critical-infrastructure scrutiny as market drivers (Globe Newswire, May 2026), implying compliance burdens (e.g., IEC 62443) that a 2-person team must satisfy to land regulated buyers.
- **Founder availability:** Grodnick is on leave from Dartmouth and Shepard graduated June 2026 (Dartmouth CS news, Jun 2026); no public commitment yet to full-time post-graduation, though incorporation and YC acceptance imply intent.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global SCADA $12.89B (2025) → $20.05B by 2030 at 9.2% CAGR (MarketsandMarkets, 2026); $13.87B (2026) → $26.59B by 2034 at 8.5% CAGR (Fortune Business Insights, 2026) |
| SAM | No public data found |
| Traction | YC S26 batch + $500K standard deal (Dartmouth CS news, Jun 2026); incorporated Jan 2026 (Dartmouth CS news, Jun 2026); 0 jobs posted (YC page, 2026); LinkedIn company page exists, follower count not retrievable |
| Revenue Signal | No published pricing; "competitive price guarantee" to beat integrator quotes, quotes via contact form (controlseat.com, 2026) |
| Founders | Jack Grodnick (Co-founder): Dartmouth CS/Econ '26, ex-Tesla, SpaceX, Amazon. Warren Shepard (Co-founder): Dartmouth Math/CS '26 salutatorian, ex-SpaceX, Microsoft |
| Competitors | Inductive Automation Ignition (bootstrapped, ~$41M ARR, ~373 employees, 69% Fortune-100 penetration; unlimited-tag licensing); AVEVA Wonderware (Schneider Electric subsidiary, revenue unknown, largest SCADA installed base); Siemens WinCC (Siemens AG division, revenue unknown, dominant in process industries); Rockwell FactoryTalk View (Rockwell Automation division, revenue unknown); Tulip Interfaces (adjacent MES, $120M raise Jan 2026, unicorn) |
| Moat Signals | No public data found |
| Risk Factors | Incumbent installed-base lock-in; bootstrapped Inductive Automation competitor; services-heavy margin profile |
| Founder Reach | Jack Grodnick: Twitter not found, LinkedIn 500+ connections, GitHub jackgrodnick (no notable star counts). Warren Shepard: Twitter not found, LinkedIn count not retrievable, GitHub no public repos found |
| Distribution Signals | Launch video on YouTube "Control Seat | Real-time internal dashboards" (YouTube, 2026); LinkedIn company page (LinkedIn, 2026); no Product Hunt, no Twitter, no Chrome/App Store presence found |
| Emails | founders@controlseat.com (controlseat.com, 2026) |

Sources:
- [Control Seat YC page](https://www.ycombinator.com/companies/control-seat)
- [Control Seat website](https://www.controlseat.com)
- [Dartmouth CS — Student Startup Secures Y Combinator Funding](https://web.cs.dartmouth.edu/news/2026/06/student-startup-secures-y-combinator-funding)
- [Dartmouth Arts & Sciences Threads post](https://www.threads.com/@dartmouthartsci/post/DZxyqikFcP1)
- [Jack Grodnick LinkedIn](https://www.linkedin.com/in/jack-grodnick/)
- [Warren Shepard LinkedIn](https://www.linkedin.com/in/warren-shepard-493a37201/)
- [Dartmouth 2026 Valedictorians & Salutatorians](https://home.dartmouth.edu/news/2026/06/announcing-2026-valedictorians-and-salutatorians)
- [Inductive Automation revenue — Latka](https://getlatka.com/companies/inductiveautomation.com)
- [SCADA Market — Fortune Business Insights](https://www.fortunebusinessinsights.com/scada-market-102433)
- [SCADA Market — MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/scada-market-19487518.html)
- [SCADA Market — SNS Insider (Globe Newswire)](https://www.globenewswire.com/news-release/2026/05/04/3286821/0/en/scada-market-size-to-surpass-usd-30-66-billion-by-2035)
- [Industrial Automation Market — Grand View Research](https://www.grandviewresearch.com/industry-analysis/industrial-automation-market)
- [Top 10 SCADA Software 2026 — Merobix](https://www.merobix.com/blog/top-10-scada-software-platforms-compared.html)
- [SCADA Software Comparison — Powerfabric](https://powerfabric.org/knowledge/scada-software-comparison)
- [AVEVA vs Inductive Automation — Gartner Peer Insights](https://www.gartner.com/reviews/market/scada-software/compare/aveva-vs-inductive-automation)
- [Best SCADA Software 2026 — plcprogramming.io](https://plcprogramming.io/blog/best-scada-software-2026)
- [Tulip $120M unicorn raise — SiliconANGLE](https://siliconangle.com/2026/01/15/manufacturing-automation-software-startup-tulip-hits-unicorn-status-120m-raise/)
