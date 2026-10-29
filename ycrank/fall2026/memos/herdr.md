# herdr

> building the open agent runtime

| Field | Value |
|-------|-------|
| Website | https://herdr.dev/ |
| YC Page | https://www.ycombinator.com/companies/herdr |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/herdr)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 1 |
| Location | Ankara, Ankara, Turkey |
| Tags | Developer Tools, AI, AI Assistant |
| YC Partner | Pete Koomen ([YC](https://www.ycombinator.com/companies/herdr)) |
| Emails | hey@herdr.dev ([official GitHub repository](https://github.com/herdrdev/herdr)) |

## The Idea

- **Problem:** Developers running coding agents across projects and machines repeatedly inspect terminals for blocked or completed work, while disconnected sessions interrupt their workflow ([YC](https://www.ycombinator.com/companies/herdr), accessed Oct 27, 2026).
- **Approach:** A background server owns terminal processes independently of attached clients, while agent detection, a CLI, and a socket API expose execution state and controls ([GitHub](https://github.com/herdrdev/herdr)).
- **Differentiation:** Relative to tmux and Zellij, herdr adds semantic agent states and agent-aware commands; relative to terminal applications such as Warp, it runs inside the existing terminal with independently attachable clients ([herdr comparison](https://herdr.dev/compare/), company characterization).
- **Business Model:** The Apache-2.0 runtime remains free, while Herdr Cloud is a forthcoming service connecting customer-owned machines without SSH configuration; paid pricing and company revenue: No public data found ([founder announcement](https://herdr.dev/blog/herdr-is-joining-y-combinator/), Aug 6, 2026; [Cloud page](https://herdr.dev/cloud/)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Distribution includes public GitHub releases, installation scripts, automatically indexed community plugins, and third-party clients including Raycast, Stream Deck, and iOS interfaces ([GitHub](https://github.com/herdrdev/herdr); [founder announcement](https://herdr.dev/blog/herdr-is-joining-y-combinator/), Aug 6, 2026).

## Defensibility

- **Moat today:** Community extensions provide an ecosystem signal, with more than 500 plugins reported within the marketplace’s first month, although this does not establish proprietary IP or customer lock-in ([founder announcement](https://herdr.dev/blog/herdr-is-joining-y-combinator/), Aug 6, 2026).
- **Future moat:** [Inferred]: Accumulated plugins, integrations, and customized workflows could increase switching costs, but retention and migration-cost measurements are unavailable.
- **Market structure:** [Inferred]: No structural barrier identified at this stage, because competing terminal and agent-management vendors can implement persistent execution and status aggregation.
- **Commoditization risk:** An unofficial Apache-2.0 distribution, Herdr Extended, already ships upstream-based binaries with additional multi-agent, terminal, and Windows functionality ([Herdr Extended repository](https://github.com/hdosys/herdr-ext), Oct 2026).

## Market & Traction

- **Traction signals:**
  - Historical company-reported adoption: 25,000 GitHub stars and 340,000 downloads four months after launch ([herdr blog](https://herdr.dev/blog/herdr-is-joining-y-combinator/), Aug 6, 2026).
  - Repository adoption: 46,194 stars and 3,691 forks ([official GitHub organization](https://github.com/herdrdev), Oct 27, 2026).
  - Homepage-reported cumulative installs: 1,644,092; community plugins: 1,789; these are not unique-user or paying-customer counts ([herdr homepage](https://herdr.dev/), accessed Oct 27, 2026).
  - Financing: $6 million seed led by Bessemer Venture Partners, with YC, e2vc, Tobi Lütke, Dane Knecht, and Görkem Yurtseven participating ([funding announcement](https://herdr.dev/blog/herdr-raised-a-seed/), Sep 8, 2026).
  - Company LinkedIn: 634 followers ([LinkedIn](https://www.linkedin.com/company/herdrdev), accessed Oct 27, 2026).
  - Company X: @herdrdev, 28,324 followers reported by a third-party mirror, without direct X verification ([AnonTwitterViewer](https://anontwitterviewer.com/herdrdev), Oct 2026, via search snippet).
  - DigitalOcean demonstrated a herdr M.A.R.S. plugin, and Fly.io announced Sprites availability through the plugin marketplace ([company LinkedIn reposts](https://www.linkedin.com/company/herdrdev), Sep 2026).
  - Press coverage: RuntimeWire covered the seed financing ([RuntimeWire](https://runtimewire.com/article/herdr-raises-6m-seed-ai-agent-runtime), Sep 8, 2026).
  - Hiring: zero YC job listings and a company announcement updated to state hiring is closed ([YC](https://www.ycombinator.com/companies/herdr); [herdr blog](https://herdr.dev/blog/herdr-raised-a-seed/), accessed Oct 27, 2026).
- **Competitors:**
  - **Warp ($73M disclosed raised, revenue unknown):** Integrated terminal, editing, and cloud-agent products versus herdr’s runtime inside existing terminals; disclosed financing includes $23 million by April 2022 and a $50 million Sequoia-led Series B in June 2023 ([initial financing](https://www.warp.dev/blog/introducing-warp), [Series B](https://www.warp.dev/blog/warp-drive-series-b), [product](https://www.warp.dev/terminal)).
  - **Conductor ($24M raised, revenue unknown):** Provides hosted microVM workspaces and multiplayer collaboration versus herdr’s customer-owned execution machines; its latest announced round was a $22 million Series A from Spark and Matrix on March 30, 2026 ([total funding](https://www.conductor.build/join-us), [round](https://www.conductor.build/blog/series-a), [product](https://www.conductor.build/)).
  - **Paradev, formerly Superset ($11.5M seed disclosed, revenue unknown):** Combines Git-worktree isolation, code review, automations, and remote workspaces versus herdr’s terminal-runtime focus; announced a Union Square Ventures-led seed on October 26, 2026 ([funding announcement](https://paradev.com/blog/superset-is-now-paradev), [product](https://paradev.com/)).
- **Why now:** The founder describes agents running for hours or days and developers shifting execution to always-on remote machines, creating demand for persistent sessions and unified control ([herdr blog](https://herdr.dev/blog/connecting-the-machines/), Sep 7, 2026).

## Founders & Team

- **Can Celik (Founder/CEO):**
  - Background: Bilkent University alumnus; previously worked at Mirantis, Shine/Ageras, Proxify, SmartAlpha, and ING, with experience building AI-assisted ultrasound and leading fintech AI teams; founder exits: No public data found ([YC founder profile](https://www.ycombinator.com/founders/can-celik)).
  - Twitter/X: @cancelik; count not retrievable from X ([YC-linked account](https://www.ycombinator.com/founders/can-celik)).
  - LinkedIn: Profile found at /in/ogulcancelik; headline: No public data found; indexed biography begins “Engineering leader with a generalist mindset and a bias for building” ([LinkedIn](https://tr.linkedin.com/in/ogulcancelik), Oct 2026, via search snippet).
  - GitHub: @ogulcancelik; pinned project herdr has approximately 46,200 stars, while his pi-extensions repository shows 564 stars ([profile](https://github.com/ogulcancelik), [herdr repository](https://github.com/herdrdev/herdr), accessed Oct 27, 2026).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Documented experience combines AI engineering leadership with building herdr from his own multi-agent workflow, and investors include Shopify, Cloudflare, and fal executives ([YC biography](https://www.ycombinator.com/founders/can-celik); [origin](https://herdr.dev/blog/herdr-is-joining-y-combinator/); [financing](https://herdr.dev/blog/herdr-raised-a-seed/)).

## Key Risks

- **Plugin execution exposure:** Plugins inherit the user’s environment and permissions and are neither reviewed nor sandboxed; installation previews and revision pinning provide controls ([plugin security documentation](https://herdr.dev/docs/plugins/)).
- **Execution continuity limits:** Detaching preserves processes, but server restarts destroy original processes and restore layouts, with conversation resumption dependent on supported integrations ([session documentation](https://herdr.dev/docs/session-state/)).
- **Substitution and forks:** Competing products offer remote execution and agent coordination, while Herdr Extended demonstrates an existing upstream-based alternative distribution ([Paradev](https://paradev.com/); [Herdr Extended](https://github.com/hdosys/herdr-ext)).
- **Sensitive terminal history:** Optional pane-history persistence can store secrets, tokens, prompts, and command output; it is disabled by default ([session documentation](https://herdr.dev/docs/session-state/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 46,194 stars, 3,691 forks ([GitHub](https://github.com/herdrdev), Oct 27, 2026); 1,644,092 cumulative installs, company-reported ([homepage](https://herdr.dev/), Oct 27, 2026) |
| Revenue Signal | Free Apache-2.0 runtime ([herdr blog](https://herdr.dev/blog/herdr-is-joining-y-combinator/), Aug 2026) |
| Founders | Can Celik, Founder/CEO: Bilkent alumnus, AI-assisted ultrasound development, fintech AI leadership ([YC](https://www.ycombinator.com/founders/can-celik)) |
| Competitors | Warp ($73M disclosed raised, revenue unknown, integrated terminal; [Warp financing](https://www.warp.dev/blog/warp-drive-series-b), [earlier financing](https://www.warp.dev/blog/introducing-warp)); Conductor ($24M raised, revenue unknown, hosted collaborative workspaces; [Conductor](https://www.conductor.build/join-us)); Paradev ($11.5M seed, revenue unknown, worktree/review workspace; [Paradev](https://paradev.com/blog/superset-is-now-paradev)) |
| Moat Signals | More than 500 community plugins within the marketplace’s first month ([herdr blog](https://herdr.dev/blog/herdr-is-joining-y-combinator/), Aug 2026) |
| Risk Factors | Unsandboxed plugins, restart continuity limits, sensitive saved terminal output ([plugin docs](https://herdr.dev/docs/plugins/), [session docs](https://herdr.dev/docs/session-state/)) |
| Founder Reach | Can Celik: GitHub 903 followers; herdr approximately 46,200 stars ([GitHub profile](https://github.com/ogulcancelik), [repository](https://github.com/herdrdev/herdr), accessed Oct 27, 2026) |
| Distribution Signals | 634 LinkedIn followers; DigitalOcean and Fly.io plugin demonstrations ([LinkedIn](https://www.linkedin.com/company/herdrdev), accessed Oct 27, 2026) |
| Emails | hey@herdr.dev ([official GitHub repository](https://github.com/herdrdev/herdr)) |
