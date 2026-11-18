# Tilo

> The Microsoft of the AI era: the operating system for AI agents.

| Field | Value |
|-------|-------|
| Website | https://tilo.so |
| YC Page | https://www.ycombinator.com/companies/tilo |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/tilo)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Open Source, Infrastructure, AI |
| YC Partner | Grey Baker ([Y Combinator](https://www.ycombinator.com/companies/tilo)) |
| Emails | xaver@tilo.so, CEO and company contact ([Crunchbase](https://www.crunchbase.com/organization/tilo-os)); security@tilo.so, vulnerability reports ([Tilo security policy](https://code.tilo.so/tilo/tilo/src/branch/main/SECURITY.md)) |

## The Idea

- **Problem:** Teams automating multi-app work with AI agents rely on separate virtual machines and screenshot-and-click controls, which Tilo says increase execution cost and latency and leave agents relaying changes through messages. ([Y Combinator](https://www.ycombinator.com/companies/tilo))
- **Approach:** Tilo’s Linux desktop gives people and agents the same live app state through buttons and typed MCP actions, with attributed changes, undo, and permission checks for irreversible actions. ([Y Combinator](https://www.ycombinator.com/companies/tilo), [Tilo Forge](https://code.tilo.so/tilo/tilo))
- **Differentiation:** Tilo provides shared native app state and history, while E2B provides isolated Linux desktops, Daytona provides snapshottable execution environments, Browserbase hosts web browsers, and Minicor exposes legacy Windows workflows as APIs. ([Tilo Forge](https://code.tilo.so/tilo/tilo), [E2B](https://e2b.dev/about), [Daytona](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [Browserbase](https://www.browserbase.com/about), [Minicor YC profile](https://www.ycombinator.com/companies/minicor))
- **Business Model:** [Inferred]: Hosted workspaces are a possible paid offering given Tilo’s browser-accessible cloud service and open-source local deployment. ([Tilo OS](https://tilo.so/os/), [Tilo web app](https://tilo.sh/))
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Tilo distributes through a browser demo, public source, and a Rust SDK for third-party apps. ([Tilo OS](https://tilo.so/os/), [Tilo developer docs](https://tilo.so/docs/), [Tilo Forge](https://code.tilo.so/tilo/tilo))

## Defensibility

- **Moat today:** Tilo lists about 50 native apps built on a common state-and-action model, with workspace-level history, permissions, mergeable edits, and sync implemented in its public repository. ([Tilo OS](https://tilo.so/os/), [Tilo Forge](https://code.tilo.so/tilo/tilo), Nov 2026)
- **Future moat:** [Inferred]: Teams could face switching costs as they accumulate app integrations and attributed workspace history, with public evidence limited to the SDK and product architecture. ([Tilo developer docs](https://tilo.so/docs/), [Tilo Forge](https://code.tilo.so/tilo/tilo))
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** [Inferred]: Desktop vendors and sandbox providers can adopt open MCP interfaces, while reproducing Tilo’s workspace-wide undo and attribution would require exposing typed state and actions across their apps. ([Linux Foundation](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation), [Tilo Forge](https://code.tilo.so/tilo/tilo))

## Market & Traction

- **Traction signals:**
  - YC backing and a listed pre-seed round, with no public data found for the round amount. ([Tilo](https://tilo.so/), [Crunchbase round profile](https://www.crunchbase.com/funding_round/tilo-os-pre-seed--79672385), Nov 2026)
  - Company benchmark of about 1/29 of the cost and 90× the speed on one same-model, multi-app task, where the computer-use comparison failed. ([Y Combinator](https://www.ycombinator.com/companies/tilo), Nov 2026)
  - Company benchmark of about 1/10,000 of the frontier model’s cost using a smaller model, plus a separate scale test of 50 agents sharing one laptop workspace at about 60 MB per agent. ([Y Combinator](https://www.ycombinator.com/companies/tilo), Nov 2026)
  - 82 company LinkedIn followers, 3 stars on the GitHub mirror, and 1 star on the primary repository. ([Tilo LinkedIn](https://www.linkedin.com/company/tilo-os), [GitHub](https://github.com/tilo-os/tilo), [Tilo Forge](https://code.tilo.so/tilo/tilo), Nov 2026)
  - Coverage in Founderland on October 19 and AgenticFeed on November 12. ([Founderland](https://founderland.ai/articles/tilo-launches-ai-native-linux-os-cutting-agent-costs-15x-mvfvijip), [AgenticFeed](https://agenticfeed.io/tilo-open-source-ai-native-operating-system/), 2026)
- **Competitors:**
  - **E2B** ($32M total at its July 2025 announcement, $120M estimated annualized revenue in October 2026): provides isolated agent sandboxes and graphical Linux desktops; its $21M Series A was led by Insight Partners. ([E2B updates](https://e2b.dev/resources/updates), [E2B round announcement](https://e2b.dev/resources/series-a), [Sacra estimate](https://sacra.com/c/e2b/))
  - **Daytona** ($91M raised, $100M company-reported revenue run rate in November 2026): supplies persistent, forkable environments across operating systems; its $60M October 2026 Series B was led by FirstMark Growth. ([Daytona round announcement](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [Daytona revenue update](https://www.daytona.io/dotfiles/1m-to-100m-run-rate-in-4-quarters))
  - **Browserbase** ($67.5M reported raised, revenue unknown): specializes in hosted web automation; its $40M June 2025 Series B was led by Notable Capital. ([CEO interview transcript](https://realalpha.app/v/Xx_ylwTwStE/), [Browserbase round announcement](https://dev.browserbase.com/blog/series-b-and-beyond))
  - **Minicor** ($3.8M disclosed raised, revenue unknown): turns legacy Windows workflows into API endpoints; IA Ventures led its October 2026 seed. ([Minicor YC profile](https://www.ycombinator.com/companies/minicor), [RuntimeWire](https://runtimewire.com/article/minicor-3-8m-seed-legacy-desktop-apis))
- **Why now:** [Inferred]: MCP’s move to Linux Foundation governance in December 2025 gave Tilo a common agent-to-app interface used across developer tools and cloud platforms. ([Linux Foundation](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation), [Y Combinator](https://www.ycombinator.com/companies/tilo))

## Founders & Team

- **Xaver Emmerling (Founder/CEO):**
  - **Background:** Studied computer science through Technical University of Munich’s early-admission program at age 15 and contributes to Tilo OS. Business email is xaver@tilo.so. ([Tilo About](https://tilo.so/about/), [Tilo Forge](https://code.tilo.so/xemmerling), [Crunchbase](https://www.crunchbase.com/organization/tilo-os))
  - **Twitter/X:** @XaEmmerling, count not retrievable. ([GPAgent founder links](https://www.gpagent.ai/yc/company/tilo))
  - **LinkedIn:** Headline not retrievable, 443 followers via search snippet. ([LinkedIn](https://www.linkedin.com/in/xaver-emmerling-915228278), observed Nov 2026)
  - **GitHub:** No public repos found under a verified personal GitHub account; @xemmerling contributes on Tilo Forge. ([Tilo Forge](https://code.tilo.so/xemmerling))
- **Quinten Wolff (Founder/CTO):**
  - **Background:** Entered Technical University of Munich’s computer science early-admission program in 2022 and led AI workflow development at Munich patent-litigation firm BDPE in 2025–2026. Business email could not be verified from the public contact link. ([Tilo About](https://tilo.so/about/), [Y Combinator](https://www.ycombinator.com/companies/tilo))
  - **Twitter/X:** @NetniuqFlow, count not retrievable. ([GPAgent founder links](https://www.gpagent.ai/yc/company/tilo))
  - **LinkedIn:** Headline not retrievable from the linked profile. ([Tilo LinkedIn](https://www.linkedin.com/company/tilo-os), [Quinten Wolff profile](https://www.linkedin.com/in/quinten-wolff-44810140b/))
  - **GitHub:** No public repos found under a verified personal GitHub account; @qwolff publishes PineTime firmware project `pineOS`, with 1 star on Tilo Forge. ([Tilo Forge](https://code.tilo.so/qwolff), Nov 2026)
- **Co-founder relationship:** Both studied computer science through Technical University of Munich’s early-admission program. ([Tilo About](https://tilo.so/about/))
- **Founder-market fit:** Emmerling contributes to the desktop codebase, Wolff built patent workflow automation at BDPE, and YC lists Grey Baker as primary partner. ([Tilo Forge](https://code.tilo.so/tilo/tilo/commits/branch/main), [Y Combinator](https://www.ycombinator.com/companies/tilo))

## Key Risks

- **Application coverage:** [Inferred]: Workflows that rely on third-party apps may need new integrations to get typed actions and shared history, with Tilo’s Rust SDK providing a route to build them. ([Tilo OS](https://tilo.so/os/), [Tilo developer docs](https://tilo.so/docs/))
- **Benchmark comparability:** [Inferred]: The same-model cost and speed figures come from one task with a failed comparison run, limiting what can be inferred about performance across completed workflows. ([Y Combinator](https://www.ycombinator.com/companies/tilo))
- **Data durability:** Tilo labels the OS early alpha and advises testing with backups, alongside its workspace history and undo features. ([Tilo OS](https://tilo.so/os/), [Tilo Forge](https://code.tilo.so/tilo/tilo))
- **Incumbent substitution:** [Inferred]: Windows teams may retain their existing desktop as Microsoft adds agent capabilities and Minicor provides API access to legacy Windows workflows. ([Microsoft](https://blogs.windows.com/windowsexperience/2026/10/07/building-windows-for-hybrid-intelligence/), [Minicor YC profile](https://www.ycombinator.com/companies/minicor))
- **Name ambiguity:** An unrelated product uses the Tilo name at jointilo.com, while the YC company previously appeared as Podesta AI and hosted the same OS repository at code.podesta.ai. ([Separate Tilo privacy policy](https://jointilo.com/privacy), [MentionFox](https://mentionfox.com/funding/yc-tilo), [Prior Tilo Forge domain](https://code.podesta.ai/tilo/tilo))

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | YC-backed pre-seed ([Crunchbase](https://www.crunchbase.com/funding_round/tilo-os-pre-seed--79672385)); company test of 50 concurrent agents at about 60 MB each ([Y Combinator](https://www.ycombinator.com/companies/tilo), Nov 2026); 82 company followers ([LinkedIn](https://www.linkedin.com/company/tilo-os), Nov 2026) |
| Revenue Signal | No public data found |
| Founders | Xaver Emmerling (CEO), TUM computer science and Tilo OS development; Quinten Wolff (CTO), TUM computer science and BDPE automation ([Tilo About](https://tilo.so/about/), [Tilo Forge](https://code.tilo.so/tilo/tilo/commits/branch/main)) |
| Competitors | E2B ($32M announced, $120M estimated annualized revenue, isolated desktops) ([E2B](https://e2b.dev/resources/updates), [Sacra](https://sacra.com/c/e2b/)); Daytona ($91M raised, $100M run rate, forkable sandboxes) ([Daytona funding](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud), [revenue](https://www.daytona.io/dotfiles/1m-to-100m-run-rate-in-4-quarters)); Browserbase ($67.5M reported raised, revenue unknown, hosted browsers) ([CEO interview](https://realalpha.app/v/Xx_ylwTwStE/), [Browserbase](https://www.browserbase.com/about)); Minicor ($3.8M disclosed raised, revenue unknown, legacy Windows APIs) ([RuntimeWire](https://runtimewire.com/article/minicor-3-8m-seed-legacy-desktop-apis)) |
| Moat Signals | About 50 native apps share a state-and-action model, with attributed undo and workspace permissions ([Tilo OS](https://tilo.so/os/), [Tilo Forge](https://code.tilo.so/tilo/tilo), Nov 2026) |
| Risk Factors | Alpha data durability ([Tilo OS](https://tilo.so/os/)), failed benchmark comparison run ([Y Combinator](https://www.ycombinator.com/companies/tilo)), overlapping Windows agent features ([Microsoft](https://blogs.windows.com/windowsexperience/2026/10/07/building-windows-for-hybrid-intelligence/)) |
| Founder Reach | Xaver Emmerling: 443 LinkedIn followers via search snippet ([LinkedIn](https://www.linkedin.com/in/xaver-emmerling-915228278), observed Nov 2026); Quinten Wolff: `pineOS`, 1 Forgejo star ([Tilo Forge](https://code.tilo.so/qwolff), Nov 2026) |
| Distribution Signals | Browser demo ([Tilo web app](https://tilo.sh/)); 3 GitHub mirror stars ([GitHub](https://github.com/tilo-os/tilo), Nov 2026); 0 YC job postings ([YC Jobs](https://www.ycombinator.com/companies/tilo/jobs), Nov 2026) |
| Emails | xaver@tilo.so, CEO and company contact ([Crunchbase](https://www.crunchbase.com/organization/tilo-os)); security@tilo.so, vulnerability reports ([Tilo security policy](https://code.tilo.so/tilo/tilo/src/branch/main/SECURITY.md)) |
