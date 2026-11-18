# herdr

> building the open agent runtime

| Field | Value |
|-------|-------|
| Website | https://herdr.dev/ |
| YC Page | https://www.ycombinator.com/companies/herdr |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/herdr)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 1 |
| Location | Ankara, Ankara, Turkey |
| Tags | Developer Tools, AI, AI Assistant |
| YC Partner | Pete Koomen ([Y Combinator](https://www.ycombinator.com/companies/herdr)) |
| Emails | ogulcancelik@gmail.com, Can Celik’s published integration contact ([Herdr GitHub discussion](https://github.com/herdrdev/herdr/discussions/616)); hey@herdr.dev, enterprise and partnerships ([Herdr GitHub](https://github.com/herdrdev/herdr)); support@herdr.dev, app support, and developer@herdr.dev, publisher contact ([Google Play](https://play.google.com/store/apps/details?id=dev.herdr.app)) |

## The Idea

- **Problem:** Developers running coding agents for hours across laptops, servers, and sandboxes have to switch among terminal tabs or multiplexer sessions to find blocked jobs and reconnect after interruptions ([Herdr engineering blog](https://herdr.dev/blog/connecting-the-machines/)).
- **Approach:** A background server on each host keeps terminal processes alive across client disconnects, while desktop and mobile clients connect over SSH and surface agents that report they are working, done, or waiting for input ([Herdr desktop](https://herdr.dev/), [Herdr mobile](https://herdr.dev/mobile/)).
- **Differentiation:** Herdr centers on persistent terminals across user-controlled hosts, while cmux offers a programmable in-terminal browser and paid cloud VMs, and Emdash offers shared team environments and task intake from Slack, Linear, and GitHub ([Herdr](https://herdr.dev/), [cmux](https://cmux.com/), [cmux pricing](https://cmux.com/pricing), [Emdash](https://emdash.com/)).
- **Business Model:** The desktop app, mobile apps, core, and original TUI are free, and Herdr announced a waitlist for a service that would connect users’ own machines, with no price disclosed in the announcement ([Herdr](https://herdr.dev/), [Herdr mobile](https://herdr.dev/mobile/), [Herdr Cloud announcement, Sep 2026](https://herdr.dev/blog/connecting-the-machines/)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Herdr distributes through GitHub, command-line installers, and mobile app stores, while its public gallery lets users share desktop layouts and mods ([Herdr](https://herdr.dev/), [Herdr mobile](https://herdr.dev/mobile/), [Herdr GitHub](https://github.com/herdrdev)).

## Defensibility

- **Moat today:** Herdr lists 2,081 community plugins for the original TUI and 576 mods for the desktop app ([Herdr TUI](https://herdr.dev/tui/), [Herdr desktop](https://herdr.dev/), Nov 2026).
- **Future moat:** [Inferred]: Teams that build custom layouts and mods could face migration costs, although public gallery counts do not establish retention or team-level adoption ([Herdr desktop](https://herdr.dev/)).
- **Market structure:** No structural barrier identified at this stage ([Herdr’s Apache-2.0 repository](https://github.com/herdrdev/herdr), [cmux pricing](https://cmux.com/pricing), [Emdash](https://emdash.com/)).
- **Commoditization risk:** The Apache-2.0 license permits other developers to build on herdr-core, and cmux already ships agent-status notifications and a programmable socket ([Herdr](https://herdr.dev/), [cmux](https://cmux.com/)).

## Market & Traction

- **Traction signals:**
  - $6M seed led by Bessemer Venture Partners, with YC, e2vc, Tobi Lütke, Dane Knecht, and Görkem Yurtseven ([Herdr, Sep 8, 2026](https://herdr.dev/blog/herdr-raised-a-seed/?trk=article-ssr-frontend-pulse_little-text-block), [e2vc](https://e2.vc/content/herdr-raises-6m-seed-round)).
  - Original TUI reached 25K GitHub stars and 340K downloads by August, and YC reports more than 500 plugins in the marketplace’s first month ([Herdr, Aug 2026](https://herdr.dev/blog/herdr-is-joining-y-combinator/), [YC company profile](https://www.ycombinator.com/companies/herdr)).
  - Original TUI had 51.6K GitHub stars and 2,163,682 reported cumulative installs ([GitHub](https://github.com/herdrdev/herdr), [Herdr TUI](https://herdr.dev/tui/), Nov 2026).
  - Separate desktop app and herdr-core announced October 29, with 3.1K desktop repository stars by November ([Herdr announcement via Teapawt](https://teapawt.net/herdrdev/status/2115841099575222765), [desktop GitHub repository](https://github.com/herdrdev/herdr-app), 2026).
  - Official mobile app had a 4.6/5 rating from 21 U.S. App Store ratings and 1K+ Google Play downloads ([Apple App Store](https://apps.apple.com/us/app/herdr/id6828898364), [Google Play](https://play.google.com/store/apps/details?id=dev.herdr.app), Nov 2026).
  - DigitalOcean listed a Herdr one-click image and published a plugin for its managed agent runtime ([DigitalOcean Marketplace, Oct 2026](https://docs.digitalocean.com/products/marketplace/catalog/herdr/), [DigitalOcean GitHub](https://github.com/DO-Solutions/herdr-mars-plugin)).
  - Seed coverage in RuntimeWire and inclusion in Thoughtworks Technology Radar ([RuntimeWire, Sep 2026](https://runtimewire.com/article/herdr-raises-6m-seed-ai-agent-runtime), [Thoughtworks, Nov 2026](https://www.thoughtworks.com/radar/tools/herdr)).
  - Company account had 37.2K X followers and 726 LinkedIn followers ([X via Teapawt](https://www.teapawt.net/herdrdev), [LinkedIn](https://www.linkedin.com/company/herdrdev), Nov 2026).
  - Approximately 978K estimated website visits ([AlphaMoat, Oct 2026](https://www.alphamoat.ai/en/ai/herdr-dev)).
  - Hiring announced in September, with zero roles posted on YC in November ([Herdr hiring announcement](https://herdr.dev/blog/herdr-raised-a-seed/?trk=article-ssr-frontend-pulse_little-text-block), [YC Jobs](https://www.ycombinator.com/companies/herdr/jobs)).
- **Competitors:**
  - Warp (~$73M raised, revenue unknown): bundles its own coding agent and Oz cloud orchestration, with a $50M Series B led by Sequoia in June 2023 ([The Product Market Fit Show](https://www.pmf.show/blog/warp-zach-lloyd-agentic-development-environment-1m-arr-every-10-days), [Warp funding](https://www.warp.dev/blog/warp-drive-series-b), [Warp Oz](https://www.warp.dev/oz)).
  - Conductor (total unverified, revenue unknown): organizes parallel coding work in a Mac workspace and announced it was joining Meta in November 2026, following a $22M Series A from Spark and Matrix in March 2026 ([YC](https://www.ycombinator.com/companies/conductor), [Conductor Series A](https://www.conductor.build/blog/series-a), [Conductor announcement](https://www.conductor.build/announcement)).
  - cmux / Manaflow (amount undisclosed, revenue unknown): pairs a programmable browser with paid cloud VMs, with a YC-backed September 2024 pre-seed round ([cmux](https://cmux.com/), [cmux pricing](https://cmux.com/pricing), [CB Insights](https://www.cbinsights.com/company/manaflow/financials)).
  - Emdash ($125K reported seed, revenue unknown): adds shared team environments and task intake from Slack, Linear, and GitHub, with Dealroom listing a January 2026 seed ([Dealroom](https://app.dealroom.co/companies/emdash_3), [YC](https://www.ycombinator.com/companies/emdash)).
- **Why now:** [Inferred]: OpenAI’s February 2026 Codex app launch made it easier to run multiple long-lived coding tasks in parallel, increasing the need to see which jobs require attention ([OpenAI, Feb 2026](https://openai.com/index/introducing-the-codex-app/)).

## Founders & Team

- **Can Celik (Founder/CEO):**
  - Background: Studied computer technology and information systems at Bilkent University, built AI-assisted ultrasound technology, led fintech AI teams, and publishes ogulcancelik@gmail.com for Herdr integration discussions ([YC founder profile](https://www.ycombinator.com/founders/can-celik), [Crunchbase](https://www.crunchbase.com/organization/herdr/profiles_and_contacts), [Herdr GitHub discussion](https://github.com/herdrdev/herdr/discussions/616)). Prior founder exits — No public data found.
  - Twitter/X: @cancelik, 8K followers ([YC founder profile](https://www.ycombinator.com/founders/can-celik), [X via Teapawt, Nov 2026](https://www.teapawt.net/cancelik)).
  - LinkedIn: Headline not retrievable, with about 2K followers ([LinkedIn profile](https://tr.linkedin.com/in/ogulcancelik), via search snippet).
  - GitHub: @ogulcancelik, about 1K followers, with 51.6K stars on the Herdr TUI he created and 576 stars on his `pi-extensions` repo ([GitHub profile](https://github.com/ogulcancelik), [Herdr TUI repository](https://github.com/herdrdev/herdr), [pi-extensions](https://github.com/ogulcancelik/pi-extensions), Nov 2026).
- **Co-founder relationship:** YC lists Can Celik as the sole founder ([Y Combinator](https://www.ycombinator.com/companies/herdr)).
- **Founder-market fit:** Celik built the original Herdr to manage his own coding agents and maintains extensions for the Pi terminal agent, with seed backing from Bessemer, YC, and e2vc ([Herdr founder post](https://herdr.dev/blog/herdr-is-joining-y-combinator/), [Celik’s project site](https://oddbit.ai/), [e2vc](https://e2.vc/content/herdr-raises-6m-seed-round)).

## Key Risks

- **Runtime migration:** Original TUI sessions run on a separate server and are unavailable in the desktop and mobile apps, though Herdr documents that both runtimes can run on the same machine ([Herdr desktop](https://herdr.dev/), [Herdr mobile](https://herdr.dev/mobile/)).
- **Host failure:** A host reboot or core shutdown stops desktop-runtime agent processes, and the app restores pane locations and shells while a community mod offers process relaunch ([Herdr desktop FAQ](https://herdr.dev/), [Herdr Revive](https://herdr.dev/mods/cantona/herdr-revive/)).
- **Native substitution:** [Inferred]: Developers using a single agent provider can get overlapping parallel-task supervision from its own app, as OpenAI’s Codex app demonstrates, while Herdr supports multiple terminal agents ([OpenAI](https://openai.com/index/introducing-the-codex-app/), [Herdr](https://herdr.dev/)).
- **Name ambiguity:** Herdr.org uses the same name for workflow routing, and app stores list independently published Herdr clients, so the dossier uses YC’s linked domain and Herdr, Inc. publisher listings to identify the company’s products ([Herdr.org](https://herdr.org/), [third-party App Store listing](https://apps.apple.com/dz/app/herdr-agents-on-the-go/id6830550859), [YC](https://www.ycombinator.com/companies/herdr), [official App Store listing](https://apps.apple.com/us/app/herdr/id6828898364)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | $6M seed ([e2vc, Sep 2026](https://e2.vc/content/herdr-raises-6m-seed-round)); original TUI 340K downloads in August and 2.16M reported installs in November ([Herdr August update](https://herdr.dev/blog/herdr-is-joining-y-combinator/), [Herdr TUI](https://herdr.dev/tui/)); TUI 51.6K and desktop 3.1K GitHub stars ([TUI repository](https://github.com/herdrdev/herdr), [desktop repository](https://github.com/herdrdev/herdr-app), Nov 2026) |
| Revenue Signal | Free desktop, mobile, core, and TUI ([Herdr desktop](https://herdr.dev/), [Herdr mobile](https://herdr.dev/mobile/)); Herdr Cloud waitlist with price undisclosed ([Herdr Cloud announcement, Sep 2026](https://herdr.dev/blog/connecting-the-machines/)) |
| Founders | Can Celik (Founder/CEO), Bilkent University alumnus with AI-assisted ultrasound and fintech AI experience ([YC founder profile](https://www.ycombinator.com/founders/can-celik)) |
| Competitors | Warp (~$73M raised, revenue unknown, built-in agent and cloud orchestration) ([Warp](https://www.warp.dev/oz), [The Product Market Fit Show](https://www.pmf.show/blog/warp-zach-lloyd-agentic-development-environment-1m-arr-every-10-days)); Conductor (total unverified, $22M Series A, revenue unknown, Mac workspace) ([Conductor](https://www.conductor.build/blog/series-a), [YC](https://www.ycombinator.com/companies/conductor)); cmux (funding amount undisclosed, revenue unknown, programmable browser and cloud VMs) ([CB Insights](https://www.cbinsights.com/company/manaflow/financials), [cmux](https://cmux.com/pricing)); Emdash ($125K reported seed, revenue unknown, shared team environments) ([Dealroom](https://app.dealroom.co/companies/emdash_3), [YC](https://www.ycombinator.com/companies/emdash)) |
| Moat Signals | 2,081 TUI plugins and 576 desktop mods ([Herdr TUI](https://herdr.dev/tui/), [Herdr desktop](https://herdr.dev/), Nov 2026) |
| Risk Factors | Separate TUI and desktop runtimes, process loss on host reboot ([Herdr desktop FAQ](https://herdr.dev/)), overlapping native agent supervision ([OpenAI Codex app](https://openai.com/index/introducing-the-codex-app/)) |
| Founder Reach | Can Celik, X 8K followers ([Teapawt](https://www.teapawt.net/cancelik)), LinkedIn about 2K followers ([LinkedIn](https://tr.linkedin.com/in/ogulcancelik), via search snippet), GitHub `pi-extensions` 576 stars ([GitHub, Nov 2026](https://github.com/ogulcancelik/pi-extensions)) |
| Distribution Signals | DigitalOcean Marketplace image ([DigitalOcean, Oct 2026](https://docs.digitalocean.com/products/marketplace/catalog/herdr/)); iOS 4.6/5 from 21 U.S. ratings, Android 1K+ downloads ([App Store](https://apps.apple.com/us/app/herdr/id6828898364), [Google Play](https://play.google.com/store/apps/details?id=dev.herdr.app), Nov 2026); 37.2K company X and 726 LinkedIn followers ([Teapawt](https://www.teapawt.net/herdrdev), [LinkedIn](https://www.linkedin.com/company/herdrdev), Nov 2026); 978K estimated October visits ([AlphaMoat](https://www.alphamoat.ai/en/ai/herdr-dev)) |
| Emails | ogulcancelik@gmail.com, Can Celik ([Herdr GitHub discussion](https://github.com/herdrdev/herdr/discussions/616)); hey@herdr.dev, enterprise and partnerships ([Herdr GitHub](https://github.com/herdrdev/herdr)); support@herdr.dev, app support, and developer@herdr.dev, publisher contact ([Google Play](https://play.google.com/store/apps/details?id=dev.herdr.app)) |
