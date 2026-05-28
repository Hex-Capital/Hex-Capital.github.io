# Limrun

> Extend your cloud agent with XCode, Android and more

| Field | Value |
|-------|-------|
| Website | https://lim.run |
| YC Page | https://www.ycombinator.com/companies/limrun |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, B2B, Enterprise Software, Cloud Computing |
| YC Partner | Harj Taggar |
| Emails | contact@limrun.com (lim.run website) |

## The Idea

- **Problem:** Cloud-based coding agents cannot build/test iOS or Android apps because their sandboxes lack XCode, iOS Simulator, Android Emulator, and Unity, forcing developers to keep mobile workflows on local laptops (lim.run, May 2026; YC page, May 2026).
- **Approach:** Limrun runs remote XCode builds with S3-backed caching, real-time log streaming, simulator control via AX tree / Appium / Maestro / Detox, live browser previews, and 60fps video recording, exposed as services that any cloud agent sandbox can call (lim.run feature list, May 2026).
- **Differentiation:** Versus Apple's XCode Cloud (CI for human-driven Apple Developer accounts) and MacStadium/AWS EC2 Mac (raw Mac VMs), Limrun is positioned as an agent-callable API layer with simulator control + live previews rather than a CI service or bare Mac host (lim.run, May 2026); [Inferred]: vs. Corellium (acquired by Cellebrite for $170M, Cellebrite IR, 2025), Limrun targets dev/test agent workflows rather than security research virtualization.
- **Business Model:** [Inferred]: Consumption-based pricing on streamed simulator minutes — the homepage dashboard shows "0 minutes streamed in the last week" as the unit of measurement (lim.run, May 2026); no public pricing page found.
- **TAM/SAM:** No public TAM/SAM data found for cloud mobile-dev infrastructure for AI agents specifically.
- **GTM / Distribution:** Bottom-up via integration with coding-agent platforms — disclosed platform customers include Replit, Rork, Momentic AI, Minitap AI, Droidrun Cloud, Vibecode, and x1.new, with end-user customers Coconote (Quizlet) and SorceJobs (YC W25) (lim.run customer list + YC description, May 2026).

## Defensibility

- **Moat today:** Embedded integrations with seven named agent platforms (Replit, Rork, Momentic, Minitap, Droidrun, Vibecode, x1.new) create switching costs once those platforms route mobile-build traffic through Limrun (lim.run customer logos, May 2026).
- **Future moat:** [Inferred]: Operational expertise running Apple Silicon fleets at low latency for agent loops — unproven now given solo-founder stage and no published throughput/latency benchmarks.
- **Market structure:** Apple's licensing terms restrict XCode to genuine Apple hardware, which creates a hardware-procurement barrier rather than a pure-software barrier; [Inferred]: this favors specialized operators over hyperscalers' default x86 fleets, though MacStadium and AWS EC2 Mac already operate at scale.
- **Commoditization risk:** MacStadium ($68.1M raised, Crunchbase via search snippet), AWS EC2 Mac, and Apple's own XCode Cloud could each add an agent-oriented API; the underlying simulator and XCode binaries are Apple-provided and not proprietary to Limrun.

## Market & Traction

- **Traction signals:**
  - Platform customers: Replit, Rork, Momentic AI, Minitap AI, Droidrun Cloud, Vibecode, x1.new (lim.run logo wall, May 2026).
  - End-customer disclosures: Coconote (Quizlet) and SorceJobs (YC W25) use Limrun for cloud-agent PR merges without local checkout (YC description, May 2026).
  - Customer testimonial: Levan Kvirkvelia, CTO Rork — "Limrun team has done a fantastic job to make this possible" (lim.run, May 2026).
  - Customer testimonial: Jeff An, CTO Momentic AI — "The Limrun team are world class infrastructure operators" (lim.run, May 2026).
  - Twitter/X: @limrun, ~22 followers, account created Feb 2026 (x.com/limrun via search snippet, May 2026).
  - Funding: YC Spring 2026 batch (YC page, May 2026); no additional round disclosed publicly.
  - Revenue / paying customers: No public data found.
  - Product Hunt / press: No public data found.
- **Competitors (3–5):**
  - MacStadium (~$68.1M raised, revenue unknown, Crunchbase via search snippet): provides bare Mac infrastructure; Limrun layers agent-specific simulator control and live preview APIs on top of similar hardware.
  - Corellium (acquired by Cellebrite for up to $200M / $170M base, Cellebrite IR via search snippet, 2025): virtualized iOS for security research; Limrun targets developer/agent build-and-test rather than reverse-engineering use cases.
  - Apple XCode Cloud (part of Apple, revenue unknown): CI/CD service tied to Apple Developer Program; Limrun is API-first and accessible from non-Apple cloud agent sandboxes (Apple developer docs via search snippet).
  - Appetize.io (funding undisclosed, revenue unknown): browser-based iOS/Android simulators primarily for end-user app previews; Limrun adds XCode build, log streaming, and agent integrations.
  - AWS EC2 Mac (part of Amazon, revenue unknown): raw Mac instances; Limrun abstracts the OS, simulator control, and build cache layer.
- **Why now:** [Inferred]: The 2024–2026 emergence of autonomous coding agents (Replit Agent, Cursor agents, Devin-class systems) created cloud sandboxes that lacked native iOS/Android toolchains, a gap explicitly cited as the founding premise (YC description, May 2026).

## Founders & Team

- **Muvaffak Onuş (Founder, solo):**
  - Background: Sabancı University (information & economics) per search snippets; prior roles as Staff Software Engineer at Upbound leading Crossplane & Upjet, infrastructure engineer at QA Wolf, and Kubernetes controller work at SAP; emeritus maintainer of Crossplane (CNCF incubating project) and KubeCon EU 2022 speaker (GitHub muvaf bio; Crossplane blog; KubeCon EU 2022 schedule via search snippets).
  - Twitter/X: handle not separately found for founder; company account @limrun (~22 followers, Feb 2026).
  - LinkedIn: "Stealth Startup" headline at linkedin.com/in/mmonus (LinkedIn via search snippet, May 2026).
  - GitHub: @muvaf — top repo crossplane/crossplane 11.7k stars (maintainer, not sole owner); upjet 457 stars; crik 168 stars; crossplane-runtime 191 stars (github.com/muvaf, May 2026).
- **Co-founder relationship:** Solo founder per YC page (Team Size: 1, May 2026); no co-founder.
- **Founder-market fit:** Onuş spent years building Kubernetes controllers and Crossplane providers that virtualize cloud APIs — directly analogous to "cloudifying" XCode/Simulator behind an API surface (GitHub bio + Upbound blog via search snippets); no advisors/investors disclosed beyond YC's standard deal.

## Key Risks

- **Apple platform/licensing dependency:** XCode and iOS Simulator run only on Apple-licensed macOS hardware, and Apple's macOS SLA restricts virtualization terms; any tightening by Apple would directly impact Limrun's unit economics (Apple macOS SLA, public; no specific incident found). No mitigation disclosed.
- **Customer concentration in agent-platform layer:** Seven of the disclosed customers are themselves coding-agent startups (Replit, Rork, Momentic, Minitap, Droidrun, Vibecode, x1.new); if a few platforms churn or build in-house, revenue would compress (lim.run logos, May 2026). No mitigation disclosed.
- **Solo-founder execution / bus factor:** YC page lists Team Size 1 (YC, May 2026); infrastructure SLAs and 24/7 fleet operations are bandwidth-intensive — no hiring is signaled (YC company hiring flag: False).
- **Incumbent substitution:** MacStadium ($68.1M raised) and AWS EC2 Mac already serve cloud Mac compute; either could ship an agent-oriented API. Apple's XCode Cloud could expand beyond Apple Developer accounts (search snippets, 2025–2026). No defensive IP disclosed.
- **Commoditization of build artifacts:** Build caching and simulator streaming are reproducible engineering problems; switching costs depend on continued integration depth rather than proprietary algorithms (lim.run feature list, May 2026). [Inferred]: durable moat requires deepening integrations before competitors replicate the API surface.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 7 disclosed platform customers — Replit, Rork, Momentic AI, Minitap AI, Droidrun Cloud, Vibecode, x1.new (lim.run, May 2026); end customers Coconote (Quizlet) and SorceJobs (YC, May 2026); Twitter @limrun ~22 followers, Feb 2026 (x.com via search snippet) |
| Revenue Signal | No public pricing page; dashboard meters "minutes streamed" (lim.run, May 2026); no revenue or ARR disclosed |
| Founders | Muvaffak Onuş (Founder): ex-Staff SWE Upbound on Crossplane/Upjet, emeritus Crossplane maintainer, ex-QA Wolf, ex-SAP, Sabancı University |
| Competitors | MacStadium ($68.1M raised, revenue unknown, bare Mac infra vs. agent-API layer); Corellium (acquired by Cellebrite up to $200M, revenue unknown, security-research virtualization vs. dev/test); Apple XCode Cloud (part of Apple, revenue unknown, CI tied to Apple Dev Program vs. API-first); Appetize.io (funding undisclosed, browser previews vs. XCode build + agent control); AWS EC2 Mac (part of Amazon, raw Mac VMs vs. managed simulator/build APIs) |
| Moat Signals | Embedded integrations with 7 named agent platforms (lim.run, May 2026); founder Kubernetes/Crossplane controller expertise (GitHub muvaf, May 2026) |
| Risk Factors | Apple platform/licensing dependency, customer concentration in coding-agent startups, solo-founder bandwidth |
| Founder Reach | Muvaffak Onuş: Twitter not separately found (company @limrun ~22 followers), LinkedIn "Stealth Startup" /in/mmonus, GitHub @muvaf — crossplane 11.7k stars (maintainer), upjet 457, crik 168 |
| Distribution Signals | YC Spring 2026 batch (YC page); 7 platform-customer logos on landing page (lim.run); no Product Hunt or press coverage found |
| Emails | contact@limrun.com (lim.run, May 2026) |

Sources:
- [Limrun website](https://lim.run)
- [Limrun YC page](https://www.ycombinator.com/companies/limrun)
- [Muvaffak Onuş GitHub](https://github.com/muvaf)
- [Muvaffak Onuş LinkedIn](https://www.linkedin.com/in/mmonus/)
- [Crossplane Blog – Muvaffak Onuş](https://blog.crossplane.io/author/muvaffak/)
- [lim.run X account](https://x.com/limrun)
- [MacStadium funding (Crunchbase)](https://www.crunchbase.com/organization/macstadium)
- [Cellebrite acquires Corellium](https://cellebrite.com/en/cellebrite-to-acquire-corellium/)
