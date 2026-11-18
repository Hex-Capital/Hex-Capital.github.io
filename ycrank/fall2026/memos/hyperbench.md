# HyperBench

> AI agents for hardware/software co-development

| Field | Value |
|-------|-------|
| Website | https://hyperbench.ai/ |
| YC Page | https://www.ycombinator.com/companies/hyperbench |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/hyperbench)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 ([Y Combinator](https://www.ycombinator.com/companies/hyperbench)) |
| Location | San Francisco, CA, USA |
| Tags | Hardware, Enterprise Software, AI |
| YC Partner | David Lieb ([Y Combinator](https://www.ycombinator.com/companies/hyperbench)) |
| Emails | No public data found |

## The Idea

- **Problem** — Embedded and systems engineers tracing failures across hardware, firmware, and software manually cross-check datasheets, board layouts, and code, then reproduce failures on a physical bench ([HyperBench research, Oct 2026](https://hyperbench.ai/blog/system-graph-for-engineering-agents/)).
- **Approach** — HyperBench maps repositories, components, interfaces, and test evidence into a system graph that agents use to trace faults, propose fixes across repositories, and retest on existing hardware before submitting draft pull requests ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/XF5-hyperbench-ai-agents-for-hardware-software-co-development), [HyperBench product](https://hyperbench.ai/)).
- **Differentiation** — HyperBench pairs cross-repository repair with physical bench verification, while Embedder focuses on flashing and testing firmware on target boards and Simantic runs firmware checks on simulated microcontrollers ([HyperBench](https://hyperbench.ai/), [Embedder YC profile](https://www.ycombinator.com/companies/embedder), [Simantic YC profile](https://www.ycombinator.com/companies/simantic)).
- **Business Model** — [Inferred]: A team subscription could charge for shared system context and bench verification, the capabilities HyperBench offers through its private beta ([HyperBench product](https://hyperbench.ai/)).
- **TAM/SAM** — No public TAM/SAM data found for this specific segment.
- **GTM / Distribution** — HyperBench recruits engineering teams through its YC launch, a private-beta signup form, and a direct booking link ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/XF5-hyperbench-ai-agents-for-hardware-software-co-development), [HyperBench product](https://hyperbench.ai/)).

## Defensibility

- **Moat today** — HyperBench documents a system graph that links components and interface requirements to source evidence, plus a custom Rust pipeline that indexes hardware identifiers and configuration relationships ([HyperBench research, Oct 2026](https://hyperbench.ai/blog/system-graph-for-engineering-agents/)).
- **Future moat** — [Inferred]: A team’s accumulated interface mappings and bench-test history could raise switching costs, but the published evaluation does not measure retention or migration costs ([HyperBench research, Oct 2026](https://hyperbench.ai/blog/system-graph-for-engineering-agents/)).
- **Market structure** — No structural barrier identified at this stage.
- **Commoditization risk** — [Inferred]: Existing firmware agents can reuse their physical test integrations to add broader system context because Embedder already exposes real-device debugging through SEGGER probes ([Embedder and SEGGER announcement, Sep 2026](https://www.prnewswire.com/news-releases/embedder-and-segger-partner-to-bring-autonomous-firmware-development-closer-to-reality-302875176.html)).

## Market & Traction

- **Traction signals**
  - Private beta announced November 11, 2026 ([Launch YC](https://www.ycombinator.com/launches/XF5-hyperbench-ai-agents-for-hardware-software-co-development), [company X announcement via teapawt](https://www.teapawt.org/hyperbenchAI/status/2120523580471742789)).
  - Launch coverage ([The American Bazaar, Nov 11, 2026](https://americanbazaaronline.com/2026/11/11/ex-openai-and-anduril-engineers-build-ai-agents-492068/)).
  - 23.4K views on the X launch post ([Launch Archive, Nov 17, 2026 snapshot](https://launcharchive.ai/launches/hyperbench-ai-ai-agents-for-hardware-software-co-development--x_2120523580471742789)).
  - 178 LinkedIn followers ([LinkedIn, Nov 17, 2026 snapshot](https://www.linkedin.com/company/hyperbench?trk=public_profile_topcard-current-company)).
  - 71 X followers ([teapawt mirror, Nov 17, 2026 snapshot](https://www.teapawt.org/hyperbenchAI)).
  - Zero open jobs on YC ([YC Jobs, Nov 17, 2026](https://www.ycombinator.com/companies/hyperbench/jobs)).
  - Financing databases list a $500K convertible note and a $125K YC seed entry, respectively ([CB Insights, Sep 2026, via search snippet](https://www.cbinsights.com/company/hyperbench/financials), [Dealroom, Sep 2026](https://app.dealroom.co/companies/hyperbench)).
- **Competitors**
  - **Hilstart** ($1.58M in securities sold across two filings, revenue unknown) — Builds physical test harnesses for agents, with $500K sold in its latest disclosed offering in August 2026 and no lead investor named in the filing ([YC profile](https://www.ycombinator.com/companies/hilstart), [July SEC Form D](https://www.sec.gov/Archives/edgar/data/2147638/000214763826000001/xslFormDX01/primary_doc.xml), [August SEC Form D](https://www.sec.gov/Archives/edgar/data/2147638/000214763826000002/xslFormDX01/primary_doc.xml)).
  - **Embedder** ($500K in disclosed funding, revenue unknown) — Focuses on firmware development and testing on target boards, with a June 2025 seed entry that lists YC as a participant ([YC profile](https://www.ycombinator.com/companies/embedder), [aVenture financing history](https://aventure.vc/companies/embedder-san-francisco-ca-us/fundraising)).
  - **Simantic** ($500K in disclosed funding, revenue unknown) — Provides simulated microcontrollers and peripherals for firmware review, with its latest reported financing in September 2026 led by YC ([YC profile](https://www.ycombinator.com/companies/simantic), [aVenture](https://aventure.vc/companies/simantic-waterloo-ca), [Caplight](https://www.caplight.com/company/simantic)).
  - **Nominal** ($422.5M across announced rounds, revenue unknown) — Focuses on test automation and telemetry analysis, and HyperBench lists it as an integration. Nominal announced a $240M Series C in November 2026 led by Lightspeed Venture Partners and co-led by Insight Partners ([Nominal seed and Series A](https://via.tt.se/pressmeddelande/3440827/nominal-emerges-from-stealth-with-backing-from-general-catalyst-lux-capital-founders-fund-for-navigating-mission-critical-data-analytics%3FpublisherId=259167), [Series B](https://www.prnewswire.com/news-releases/nominal-raises-75-million-led-by-sequoia-capital-to-modernize-hardware-testing-302479991.html), [extension](https://nominal.io/blog/series-b2), [Series C](https://nominal.io/blog/series-c-news), [HyperBench](https://hyperbench.ai/)).
- **Why now** — [Inferred]: The October 2025 general release of Codex and its SDK made it possible to embed coding agents in engineering workflows that supply hardware context and test feedback ([OpenAI, Oct 2025](https://openai.com/index/codex-now-generally-available/), [HyperBench research, Oct 2026](https://hyperbench.ai/blog/system-graph-for-engineering-agents/)).

## Founders & Team

- **Justin Leong (Founder/CEO)**
  - **Background** — Stanford BS and MS in computer science, with prior Anduril software engineering work on Roadrunner guidance, navigation, and control firmware ([YC founder profile](https://www.ycombinator.com/founders/justin-leong)). Stanford lists `jleong22@stanford.edu` as his academic contact ([Stanford Profiles](https://profiles.stanford.edu/justin-leong)).
  - **Twitter/X** — @justinyleong, 126 followers ([YC founder profile](https://www.ycombinator.com/founders/justin-leong), [teapawt mirror, Nov 17, 2026](https://www.teapawt.org/justinyleong)).
  - **LinkedIn** — “HyperBench (YC F26)” profile title, 1K followers ([LinkedIn, Oct 2026, via search snippet](https://www.linkedin.com/in/jleong22)).
  - **GitHub** — @justinyleong, Arduboat-Tutorial with 11 stars ([GitHub, Nov 17, 2026](https://github.com/justinyleong/Arduboat-Tutorial)).
- **Ivan Ge (Founder/CTO)**
  - **Background** — Stanford BS in physics and mathematics, with prior engineering at Chicago Trading Company and software infrastructure work as a Member of Technical Staff at OpenAI ([YC founder profile](https://www.ycombinator.com/founders/ivan-ge), [HyperBench team](https://hyperbench.ai/team/)). Stanford lists `ivange@stanford.edu` as his academic contact ([Stanford Profiles](https://profiles.stanford.edu/ivan-ge)).
  - **Twitter/X** — @ivannntq, count not retrievable ([YC founder profile](https://www.ycombinator.com/founders/ivan-ge)).
  - **LinkedIn** — YC links his profile and LinkedIn’s directory lists HyperBench (YC F26) as his employer, with headline and follower count unavailable ([Launch YC](https://www.ycombinator.com/companies/hyperbench), [LinkedIn directory](https://www.linkedin.com/pub/dir/Ivan/Ge/us-0-United-States)).
  - **GitHub** — No public repos found.
- **Co-founder relationship** — Both attended Stanford University ([Y Combinator](https://www.ycombinator.com/companies/hyperbench)).
- **Founder-market fit** — Leong’s firmware work and Ge’s AI software infrastructure work cover the two sides of the product’s engineering workflow, and YC lists David Lieb as primary partner ([HyperBench team](https://hyperbench.ai/team/), [Y Combinator](https://www.ycombinator.com/companies/hyperbench)).

## Key Risks

- **Verification across hardware setups** — [Inferred]: Results may vary across customer benches because HyperBench’s published evaluation covers diagnostic questions and repository debugging cases, with executable validators or blinded review for repairs. The product provides physical retesting and exposes test evidence alongside draft pull requests for engineer review ([HyperBench research, Oct 2026](https://hyperbench.ai/blog/system-graph-for-engineering-agents/), [HyperBench product](https://hyperbench.ai/)).
- **Bench integration effort** — [Inferred]: Teams with custom instrumentation may need to map interfaces and connect bench equipment before agents can verify changes, with local execution and support for existing benches and custom stacks available ([HyperBench product](https://hyperbench.ai/), [HyperBench research](https://hyperbench.ai/blog/system-graph-for-engineering-agents/)).
- **Firmware tool overlap** — Embedder already tests firmware on physical hardware through SEGGER probes, overlapping with HyperBench’s bench-verification workflow, while HyperBench also uses its system graph for repairs spanning repositories ([Embedder and SEGGER, Sep 2026](https://www.prnewswire.com/news-releases/embedder-and-segger-partner-to-bring-autonomous-firmware-development-closer-to-reality-302875176.html), [Launch YC, Nov 2026](https://www.ycombinator.com/launches/XF5-hyperbench-ai-agents-for-hardware-software-co-development)).
- **Name ambiguity** — HyperBench is also the name of a hyperspectral imaging benchmark and a PyPI inference-evaluation package, creating ambiguity in unqualified searches ([arXiv, May 2026](https://arxiv.org/abs/2605.21671), [PyPI, Mar 2026](https://pypi.org/project/hyperbench/0.1.0/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Private-beta launch and press coverage ([Launch YC](https://www.ycombinator.com/launches/XF5-hyperbench-ai-agents-for-hardware-software-co-development), [The American Bazaar](https://americanbazaaronline.com/2026/11/11/ex-openai-and-anduril-engineers-build-ai-agents-492068/), Nov 2026), 23.4K X launch-post views ([Launch Archive](https://launcharchive.ai/launches/hyperbench-ai-ai-agents-for-hardware-software-co-development--x_2120523580471742789), Nov 2026), 178 LinkedIn and 71 X followers ([LinkedIn](https://www.linkedin.com/company/hyperbench?trk=public_profile_topcard-current-company), [teapawt](https://www.teapawt.org/hyperbenchAI), Nov 2026), zero YC jobs ([YC Jobs](https://www.ycombinator.com/companies/hyperbench/jobs), Nov 2026) |
| Revenue Signal | No public data found |
| Founders | Justin Leong (CEO), Stanford CS and Anduril firmware ([YC](https://www.ycombinator.com/founders/justin-leong)). Ivan Ge (CTO), Stanford physics and mathematics and OpenAI infrastructure ([YC](https://www.ycombinator.com/founders/ivan-ge), [HyperBench team](https://hyperbench.ai/team/)). |
| Competitors | Hilstart ($1.58M sold, revenue unknown, physical harnesses, [SEC July](https://www.sec.gov/Archives/edgar/data/2147638/000214763826000001/xslFormDX01/primary_doc.xml), [SEC August](https://www.sec.gov/Archives/edgar/data/2147638/000214763826000002/xslFormDX01/primary_doc.xml), [YC](https://www.ycombinator.com/companies/hilstart)). Embedder ($500K reported, revenue unknown, target-board firmware testing, [aVenture](https://aventure.vc/companies/embedder-san-francisco-ca-us/fundraising), [YC](https://www.ycombinator.com/companies/embedder)). Simantic ($500K reported, revenue unknown, firmware simulation, [aVenture](https://aventure.vc/companies/simantic-waterloo-ca), [YC](https://www.ycombinator.com/companies/simantic)). Nominal ($422.5M reported, revenue unknown, test telemetry, [CB Insights via search snippet](https://www.cbinsights.com/company/nominal/financials), [Nominal](https://nominal.io/blog/series-c-news)). |
| Moat Signals | System graph with source bindings and a custom Rust hardware retrieval pipeline ([HyperBench research, Oct 2026](https://hyperbench.ai/blog/system-graph-for-engineering-agents/)) |
| Risk Factors | Verification across hardware setups, custom bench integration, overlap with physical firmware testing ([HyperBench research](https://hyperbench.ai/blog/system-graph-for-engineering-agents/), [HyperBench product](https://hyperbench.ai/), [Embedder and SEGGER](https://www.prnewswire.com/news-releases/embedder-and-segger-partner-to-bring-autonomous-firmware-development-closer-to-reality-302875176.html)) |
| Founder Reach | Justin Leong, X 126 followers ([teapawt](https://www.teapawt.org/justinyleong)), LinkedIn 1K followers ([LinkedIn via search snippet](https://www.linkedin.com/in/jleong22)), Arduboat-Tutorial 11 stars ([GitHub](https://github.com/justinyleong/Arduboat-Tutorial)). Ivan Ge, @ivannntq, count not retrievable ([YC](https://www.ycombinator.com/founders/ivan-ge)). |
| Distribution Signals | Launch YC post and private-beta signup ([Launch YC](https://www.ycombinator.com/launches/XF5-hyperbench-ai-agents-for-hardware-software-co-development), Nov 2026), 23.4K X launch-post views ([Launch Archive](https://launcharchive.ai/launches/hyperbench-ai-ai-agents-for-hardware-software-co-development--x_2120523580471742789), Nov 2026) |
| Emails | No public data found |
