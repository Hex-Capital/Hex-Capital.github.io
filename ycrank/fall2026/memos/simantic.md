# Simantic

> Firmware simulation for AI agents

| Field | Value |
|-------|-------|
| Website | https://simantic.com |
| YC Page | https://www.ycombinator.com/companies/simantic |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/simantic)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 4 |
| Location | Waterloo, ON, Canada |
| Tags | Developer Tools, Hardware, Semiconductors, Electronics, AI |
| YC Partner | Aaron Epstein ([Y Combinator](https://www.ycombinator.com/companies/simantic)) |
| Emails | seungmin@simantic.dev (CEO, [Hong on LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7406133746917343232/)), founders@simantic.dev (sales and investor inquiries, [Launch YC](https://www.ycombinator.com/launches/WhY-simantic-firmware-simulation-for-ai-agents), [Simantic Investors](https://simantic.com/investors)), privacy@simantic.dev (privacy, [Privacy Policy](https://simantic.com/privacy)), legal@simantic.dev (legal notices, [Terms](https://simantic.com/terms)) |

## The Idea

- **Problem** — Embedded firmware teams use development boards and hardware-in-the-loop rigs for validation, and the founders report that waiting for physical hardware delayed testing by weeks or months ([Launch YC](https://www.ycombinator.com/launches/WhY-simantic-firmware-simulation-for-ai-agents), [Waterloo News, Jul 2026](https://uwaterloo.ca/news/simantic-scales-waterloo-startup-global-ai-hardware)).
- **Approach** — Pyrite executes compiled firmware against modeled microcontrollers and peripherals, Cloud Sim exposes runs through an API, and Simantic Bot builds firmware from GitHub pull requests and runs test scenarios derived from the diff ([Simantic product documentation](https://simantic.com/how-simantic-works), [Simantic homepage](https://simantic.com/)).
- **Differentiation** — QEMU offers general-purpose machine emulation and Renode offers scriptable, multi-node embedded simulation, while Simantic bundles silicon-tested MCU models, hosted runs, and pull-request reviews that execute firmware ([QEMU](https://www.qemu.org/docs/master/system/target-arm.html), [Antmicro](https://antmicro.com/platforms/renode/), [Simantic validation](https://simantic.com/validation), [Simantic homepage](https://simantic.com/)).
- **Business Model** — Community includes $10 in monthly credits and three concurrent runs, Developer costs $100 monthly or $1,000 annually before tax and includes $200 in monthly credits and ten concurrent runs, and Enterprise is contact-sales ([Simantic Pricing, Nov 2026](https://simantic.com/pricing)).
- **TAM/SAM** — No public TAM/SAM data found for this specific segment.
- **GTM / Distribution** — Simantic offers self-serve signup, an API, TypeScript and MCP packages, and a GitHub app, and its YC launch solicits automotive, robotics, and aerospace teams ([Simantic homepage](https://simantic.com/), [Launch YC, Nov 2026](https://www.ycombinator.com/launches/WhY-simantic-firmware-simulation-for-ai-agents)).

## Defensibility

- **Moat today** — Simantic licenses Pyrite as proprietary software and uses bench rigs to compare simulator behavior and timing against real silicon ([Simantic Terms, Nov 2026](https://simantic.com/terms), [Simantic validation](https://simantic.com/validation)).
- **Future moat** — [Inferred]: A growing library of measured chip behavior and customer CI tests could raise replication and switching costs, with the public validation material documenting individual examples ([Simantic validation](https://simantic.com/validation), [Hong on X via teapawt, Nov 2026](https://teapawt.org/shong0504/status/2121700064951492696)).
- **Market structure** — No structural barrier identified at this stage.
- **Commoditization risk** — [Inferred]: Teams can build agent interfaces on existing emulators, as Veecle did with Renode, while reproducing undocumented chip behavior requires bench testing, according to Simantic’s founders ([Veecle engineering blog, Aug 2026](https://veecle.ai/blog/renode-vs-qemu-same-firmware), [Launch HN, Oct 2026](https://news.ycombinator.com/item?id=50291116)).

## Market & Traction

- **Traction signals**
  - More than 1.5 million simulation runs and 3,000 compute hours over two months, with 70% average weekly run growth, company-reported ([Hong on X via teapawt, Nov 14, 2026](https://teapawt.org/shong0504/status/2121700064951492696)).
  - First customer in low-Earth-orbit satellites, unnamed, reported by the CTO ([Simantic LinkedIn, Nov 2026](https://www.linkedin.com/company/simantic)).
  - University of Waterloo ECE 350 used Simantic for automated lab grading in a course with 200+ students, according to the CTO ([Shahriar on LinkedIn, Oct 2026](https://www.linkedin.com/posts/ahnaf-s_the-first-people-we-helped-with-simantic-activity-7511500262897811457-loM6)).
  - Customer testimonial: An ECE 350 student reported that the simulation matched the physical board in their coursework ([Adithya T. on LinkedIn, Oct 2026](https://www.linkedin.com/posts/ahnaf-s_the-first-people-we-helped-with-simantic-activity-7511500262897811457-loM6)).
  - Embedder announced an integration partnership for agent-led firmware development ([Embedder on LinkedIn, Sep 2026](https://www.linkedin.com/posts/embedder-dev_were-very-pleased-to-announce-our-partnership-activity-7505777004605128704-FtyA)).
  - BoardRepo announced planned firmware testing on its circuit boards, and WATFlight announced an aviation firmware simulation partnership ([Partner announcements on Simantic LinkedIn, Oct 2026](https://www.linkedin.com/company/simantic)).
  - Approximately US$600,000 raised by July, with YC, LeapYear, Barn VC, and BDC Venture Fund listed as backers ([Waterloo News, Jul 2026](https://uwaterloo.ca/news/simantic-scales-waterloo-startup-global-ai-hardware), [Simantic Investors](https://simantic.com/investors)).
  - Press coverage in Waterloo News and Glostarep ([Waterloo News, Jul 2026](https://uwaterloo.ca/news/simantic-scales-waterloo-startup-global-ai-hardware), [Glostarep, Oct 2026](https://glostarep.com/simantic-bot-launches-to-catch-firmware-bugs-in-github-prs/)).
  - One YC-listed opening for Lead Simulation Researcher in Waterloo or San Francisco ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/simantic/jobs)).
  - 1,137 LinkedIn followers and 140 X followers ([Simantic LinkedIn, Nov 2026](https://www.linkedin.com/company/simantic), [@simantic via teapawt, Nov 2026](https://teapaw.org/simantic)).
  - Earlier PCB simulation concept announced with a waitlist in Dec 2025, with the company promoting firmware QA by May 2026 and reporting by October that it had paused the original mixed-signal co-simulation work ([Hong on LinkedIn, Dec 2025](https://www.linkedin.com/feed/update/urn:li:activity:7406133746917343232/), [Velocity announcement, May 2026](https://www.linkedin.com/posts/shong0504_announcement-simantic-joined-the-may-2026-activity-7462294185031827458-zWN7), [Launch HN, Oct 2026](https://news.ycombinator.com/item?id=50291116)).
- **Competitors**
  - **Veecle / Chiplab** (€5.8M raised, revenue unknown) — Renode-backed agent testing via MCP, with an April 2025 €1.5M convertible involving Trucks Venture Capital ([Berlin Startup Map via search snippet](https://startup-map.berlin/companies/veecle), [Veecle](https://veecle.ai/blog/renode-vs-qemu-same-firmware)).
  - **LabWired** (funding unknown, revenue unknown) — MIT-licensed simulator core with browser-based circuit simulation and agent access ([LabWired FAQ](https://labwired.com/faq.html), [LabWired Docs](https://docs.labwired.com/)).
  - **Wokwi** (funding unknown, revenue unknown) — Browser-based microcontroller and circuit simulation with editable projects and VS Code integration ([Wokwi Docs](https://docs.wokwi.com/)).
  - **Antmicro / Renode** (funding unknown, revenue unknown) — Open-source framework for scripting multi-node systems and automating tests ([Antmicro](https://antmicro.com/platforms/renode/)).
  - **QEMU** (sponsored open-source project, revenue unknown) — General-purpose machine emulation with board-specific peripheral coverage ([QEMU documentation](https://www.qemu.org/docs/master/system/target-arm.html), [QEMU sponsors](https://www.qemu.org/sponsors/)).
- **Why now** — [Inferred]: Agent runtimes such as the Claude Agent SDK, announced in September 2025, give coding agents a way to invoke external test tools, while physical-board testing still requires access to the hardware ([Anthropic, Sep 2025](https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously), [Launch YC](https://www.ycombinator.com/launches/WhY-simantic-firmware-simulation-for-ai-agents)).

## Founders & Team

- **Seungmin Hong (Founder/CEO)**
  - **Background** — Waterloo Computer Engineering BASc, firmware at Tesla, Simbe Robotics, and Rapyuta Robotics, machine learning at Ericsson, and direct business email seungmin@simantic.dev ([YC founder profile](https://www.ycombinator.com/founders/seungmin-hong), [Hong on LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7406133746917343232/)).
  - **Twitter/X** — @shong0504, 2.1K followers ([X via teapawt, Nov 2026](https://teapawt.org/shong0504)).
  - **LinkedIn** — Public About text reads “Building firmware simulation for agentic hardware development” ([LinkedIn via search snippet](https://www.linkedin.com/in/shong0504)).
  - **GitHub** — @SHONG0504, `c_interpreter`, 2 stars ([GitHub, Nov 2026](https://github.com/SHONG0504)).
- **Ahnaf Shahriar (Founder/CTO)**
  - **Background** — Waterloo Computer Engineering, embedded software at Neuralink, AI hardware at Tesla, chip design at NXP, and wireless firmware at onsemi, with founders@simantic.dev as his published shared contact and direct business email marked “No public data found” ([Launch YC](https://www.ycombinator.com/launches/WhY-simantic-firmware-simulation-for-ai-agents), [Shahriar portfolio](https://shahriarahnaf.github.io/)).
  - **Twitter/X** — @enough_ahnaf, 374 followers ([X via teapawt, Nov 2026](https://teapawt.org/enough_ahnaf)).
  - **LinkedIn** — Public Simantic profile, headline not retrievable ([LinkedIn via search snippet](https://www.linkedin.com/in/ahnaf-s)).
  - **GitHub** — @ShahriarAhnaf, `CubeSolver`, 2 stars ([GitHub, Nov 2026](https://github.com/ShahriarAhnaf/CubeSolver)).
- **Co-founder relationship** — Both studied Computer Engineering at Waterloo and worked at Tesla, with Hong starting Simantic in September 2025 and Shahriar joining in early 2026 ([Waterloo News, Jul 2026](https://uwaterloo.ca/news/simantic-scales-waterloo-startup-global-ai-hardware), [YC](https://www.ycombinator.com/companies/simantic)).
- **Founder-market fit** — Hong developed vehicle prototype firmware and Shahriar worked on implant chargers and automotive chips, the types of projects where the founders encountered hardware-dependent validation delays ([Launch YC](https://www.ycombinator.com/launches/WhY-simantic-firmware-simulation-for-ai-agents)).
- **Headcount** — YC lists four team members, and the company’s LinkedIn page shows six associated employee profiles ([YC](https://www.ycombinator.com/companies/simantic), [LinkedIn, Nov 2026](https://www.linkedin.com/company/simantic)).

## Key Risks

- **Simulation fidelity** — Incomplete peripheral or analog models can miss physical-board failures, and Simantic uses silicon comparisons while documenting which behaviors still require hardware measurements ([Simantic validation](https://simantic.com/validation), [Simantic product documentation](https://simantic.com/how-simantic-works)).
- **Usage concentration** — [Inferred]: Changes in a few teams’ workflows could materially affect volume because Hong reported that the top 15 users accounted for most runs ([Hong on X via teapawt, Nov 2026](https://teapawt.org/shong0504/status/2121700064951492696)).
- **Source-code handling** — Simantic Bot sends pull-request diffs and build and simulator outputs to Anthropic, which can constrain adoption under customer data-handling rules, and Simantic offers private hosting and firmware-storage controls ([Privacy Policy](https://simantic.com/privacy), [Simantic Pricing](https://simantic.com/pricing)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 1.5M+ runs, 3,000+ compute hours, 70% average weekly run growth over two months ([Hong on X via teapawt, Nov 14, 2026](https://teapawt.org/shong0504/status/2121700064951492696)), first satellite customer reported ([Simantic LinkedIn, Nov 2026](https://www.linkedin.com/company/simantic)), approximately US$600K raised ([Waterloo News, Jul 2026](https://uwaterloo.ca/news/simantic-scales-waterloo-startup-global-ai-hardware)) |
| Revenue Signal | Developer $100/month or $1,000/year before tax, Community $10/month in included credits, contact-sales Enterprise ([Simantic Pricing, Nov 2026](https://simantic.com/pricing)) |
| Founders | Seungmin Hong (CEO), Waterloo Computer Engineering and Tesla firmware ([YC](https://www.ycombinator.com/founders/seungmin-hong)). Ahnaf Shahriar (CTO), Waterloo Computer Engineering, Neuralink embedded software, and Tesla AI hardware ([YC](https://www.ycombinator.com/founders/ahnaf-shahriar)). |
| Competitors | Veecle/Chiplab (€5.8M raised, revenue unknown, Renode-backed agent testing, [Berlin Startup Map via search snippet](https://startup-map.berlin/companies/veecle), [Veecle](https://veecle.ai/blog/renode-vs-qemu-same-firmware)), LabWired (funding and revenue unknown, MIT-licensed simulator core, [LabWired](https://labwired.com/faq.html)), Wokwi (funding and revenue unknown, browser circuit simulation, [Wokwi](https://docs.wokwi.com/)), Renode (funding and revenue unknown, scripted multi-node simulation, [Antmicro](https://antmicro.com/platforms/renode/)), QEMU (sponsored project, revenue unknown, machine emulation, [QEMU](https://www.qemu.org/sponsors/)) |
| Moat Signals | Proprietary Pyrite engine and real-silicon validation rigs ([Simantic Terms](https://simantic.com/terms), [Simantic validation](https://simantic.com/validation)) |
| Risk Factors | Partial model coverage ([Simantic Docs](https://simantic.com/how-simantic-works)), run concentration ([Hong on X via teapawt](https://teapawt.org/shong0504/status/2121700064951492696)), third-party processing of pull-request data ([Privacy Policy](https://simantic.com/privacy)) |
| Founder Reach | Hong, X 2.1K, LinkedIn 2K, `c_interpreter` 2 stars ([X via teapawt](https://teapawt.org/shong0504), [LinkedIn via search snippet](https://www.linkedin.com/in/shong0504), [GitHub](https://github.com/SHONG0504)). Shahriar, X 374, LinkedIn 2K, `CubeSolver` 2 stars ([X via teapawt](https://teapawt.org/enough_ahnaf), [LinkedIn via search snippet](https://www.linkedin.com/in/ahnaf-s), [GitHub](https://github.com/ShahriarAhnaf/CubeSolver)). |
| Distribution Signals | Launch HN ([Hacker News, Oct 2026](https://news.ycombinator.com/item?id=50291116)), Launch YC ([Y Combinator, Nov 2026](https://www.ycombinator.com/launches/WhY-simantic-firmware-simulation-for-ai-agents)), 1,137 LinkedIn and 140 X followers ([Simantic LinkedIn, Nov 2026](https://www.linkedin.com/company/simantic), [X via teapawt, Nov 2026](https://teapaw.org/simantic)) |
| Emails | seungmin@simantic.dev (CEO, [Hong on LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7406133746917343232/)), founders@simantic.dev (sales and investor inquiries, [Launch YC](https://www.ycombinator.com/launches/WhY-simantic-firmware-simulation-for-ai-agents), [Simantic Investors](https://simantic.com/investors)), privacy@simantic.dev (privacy, [Privacy Policy](https://simantic.com/privacy)), legal@simantic.dev (legal notices, [Terms](https://simantic.com/terms)) |
