# Terminal Use

> Vercel for background agents

| Field | Value |
|-------|-------|
| Website | https://www.terminaluse.com/ |
| YC Page | https://www.ycombinator.com/companies/terminal-use |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Developer Tools, Workflow Automation, Infrastructure, AI |
| YC Partner | Gustaf Alstromer |
| Emails | founders@terminaluse.com |

## The Idea

**Problem:** As AI coding agents (Claude Agent SDK, OpenAI Codex, custom frameworks) move from prototypes to production, teams face a "production gap" — there is no purpose-built infrastructure for deploying, versioning, and managing long-running background agents that interact with filesystems. Today, teams cobble together generic cloud compute (VMs, containers) with manual DevOps to run agents in production, resulting in fragile deployments, no version control on agent behavior, and no isolation between concurrent agent tasks. The customer segment is engineering teams building and deploying AI agents at scale.

**Approach:** Terminal Use provides a managed orchestration platform specifically designed for background agents that use filesystems. Key mechanisms include: (1) a decorator-based SDK (Python and TypeScript) for defining agent lifecycle handlers (create, event, cancel); (2) automatic Docker containerization and deployment via CLI; (3) persistent filesystem storage with manifest-based sync using checksums, enabling cross-task file sharing and compressed transfer; (4) task-level isolation with pinned versioning so tasks complete on the agent version active at creation; (5) auto-scaling based on concurrent task load; (6) git-native branching, versioning, and rollback for agent deployments (Terminal Use website; docs.terminaluse.com). The platform also offers "Woz," a product that allows teams to create and manage custom Claude Agent SDK or Codex SDK agents directly from Slack, with MCP (Model Context Protocol) integration for connecting to GitHub, Linear, databases, and other tools (woz.terminaluse.com).

**Differentiation:** Unlike generic cloud infrastructure (AWS, GCP) that requires manual DevOps for agent deployment, Terminal Use is purpose-built for the agent deployment lifecycle with filesystem forking, task-pinned versioning, and agent-aware auto-scaling. Unlike sandbox providers like E2B and Daytona that focus on ephemeral, isolated code execution environments, Terminal Use emphasizes persistent filesystem storage and long-running background agents with version management. Unlike Modal Labs which focuses on serverless compute for AI inference, Terminal Use targets the orchestration layer specifically for agents that manipulate filesystems (YC page; docs.terminaluse.com). The platform is framework-agnostic, supporting Claude Agent SDK, Codex SDK, and custom frameworks (YC page).

**Business Model:** Woz, their Slack-based agent product, has visible pricing: Starter plan at $49/user/month (up to 8 agents, cloud-hosted execution), Unlimited plan at $99/user/month (unlimited agents, dedicated support), and Enterprise tier with custom pricing including audit logging and network controls. A 3-day free trial is available on all plans (woz.terminaluse.com). The underlying Terminal Use platform (infrastructure layer) does not show public pricing on its docs or main site. [Inferred]: The infrastructure platform likely follows a consumption-based or tier-based pricing model similar to Vercel, given the "Vercel for background agents" positioning.

**TAM/SAM:** The global AI agents market was estimated at USD 7.63 billion in 2025 and is projected to reach USD 182.97 billion by 2033, growing at a CAGR of 49.6% (Grand View Research, 2026 via search snippet). The broader AI infrastructure market is forecasted at USD 90 billion in 2026, growing to USD 465 billion by 2033 at a 24% CAGR (Coherent Market Insights, 2026 via search snippet). The agentic AI market is valued at USD 7.55 billion in 2025, projected to reach USD 199.05 billion by 2034 at a 43.84% CAGR (Precedence Research, 2026 via search snippet). No public SAM data specific to "agent hosting infrastructure for filesystem-based agents" was found.

**GTM / Distribution:** Terminal Use is CLI-first with NPX-based deployment, targeting developers directly. The Woz product uses Slack as a distribution channel, allowing non-technical team members to interact with deployed agents. The company's GitHub organization (github.com/terminal-use) hosts public templates (woz-claude-code-template, woz-codex-template) for onboarding (GitHub). [Inferred]: Primary distribution is likely developer-led, bottom-up adoption through documentation, SDK templates, and the Slack integration serving as a viral loop within organizations.

## Defensibility

The platform's agent-specific primitives — filesystem forking, task-pinned versioning, manifest-based sync, and agent lifecycle management — represent technical specialization that generic cloud platforms do not offer out of the box. The Woz product's Slack integration creates a workflow-level switching cost once teams embed agent interactions into their daily tooling. However, these are early-stage moat signals; the core technology could be replicated by well-resourced competitors.

**Market structure:** Large cloud providers (AWS, GCP, Azure) face business model misalignment: their revenue model incentivizes selling raw compute, not opinionated agent orchestration layers that abstract away infrastructure complexity. Microsoft's Azure AI Foundry and similar offerings are building agent platforms but are optimized for their own model ecosystems and enterprise procurement cycles, creating an opening for a framework-agnostic, developer-first tool. [Inferred]: The structural barrier is the cloud providers' incentive to sell compute primitives rather than high-level agent orchestration, similar to how Vercel carved a niche despite AWS existing.

**Commoditization risk:** E2B ($32M raised), Daytona ($24M Series A), and Runloop ($7M seed) are all building adjacent agent infrastructure with significant funding. Modal Labs ($111M raised, ~$50M ARR) operates in the broader serverless AI compute space. OpenAI Frontier now offers hosted runtimes for agents. The agent infrastructure space is attracting substantial capital and attention, and the core technical capabilities (containerized sandboxes, filesystem management, auto-scaling) are well-understood patterns. The risk of commoditization is real, particularly if a major model provider bundles hosting as part of its SDK offering.

## Market & Traction

**Traction signals:**
- Pricing visible on Woz product: $49–$99/user/month with Enterprise tier (woz.terminaluse.com)
- LinkedIn company page exists at linkedin.com/company/terminaluse (LinkedIn search results, March 2026); follower count not retrievable
- Twitter/X: Stavros Filosidis (@stavros_fil) has 124 followers (X.com via search snippet, March 2026); Vivek Raja's Terminal Use-specific X handle not confirmed
- GitHub organization (github.com/terminal-use) has 4 public repositories, all with 0 stars (GitHub, March 2026)
- Documentation site live at docs.terminaluse.com
- No Product Hunt launch found
- No Hacker News Launch HN post found
- No press coverage in named publications found
- No public user counts, revenue figures, or customer logos found
- No Discord or Slack community found

**Competitive landscape:**

| Competitor | Key Differentiator vs. Terminal Use | Funding | Revenue/ARR |
|---|---|---|---|
| **E2B** | Ephemeral sandboxes for AI agents; focused on isolated code execution rather than persistent filesystems and long-running agents. Used by 88% of Fortune 100 (VentureBeat, Jul 2025). | $32M total ($21M Series A led by Insight Partners, Jul 2025) (PR Newswire) | "Seven figures" in new business in one month (VentureBeat, Jul 2025 via search snippet) |
| **Daytona** | Stateful sandboxes with millisecond launch times; focused on programmatic compute environments for agents and RL workloads. | $24M Series A led by FirstMark Capital, Feb 2026 (PR Newswire) | $1M forward ARR reached in under 3 months, doubled 6 weeks later (AlleyWatch, Feb 2026 via search snippet) |
| **Runloop** | Enterprise-grade devboxes for AI coding agents; 10K+ parallel sandbox execution. Founded by ex-Stripe team including Google Wallet co-founder. | $7M Seed led by The General Partnership, Jul 2025 (PR Newswire) | Revenue unknown; customer growth >200% since March 2025 (Runloop press release via search snippet) |
| **Modal Labs** | Serverless cloud infrastructure for AI inference; broader scope beyond agents. | $111M total ($87M Series B at $1.1B valuation, Oct 2025; in talks at $2.5B, Feb 2026) (TechCrunch, Feb 2026; SiliconANGLE, Sep 2025) | ~$50M ARR (TechCrunch, Feb 2026 via search snippet) |
| **OpenAI Frontier** | Native hosting runtimes bundled with OpenAI models; enterprise platform for deploying AI agents. Vertical integration with model provider. | N/A (OpenAI division) | Revenue unknown |

**Why now:** [Inferred]: Several converging catalysts opened this opportunity in 2024–2026: (1) The release of Claude Agent SDK (Anthropic) and Codex SDK (OpenAI) created standardized frameworks for building production agents, generating demand for deployment infrastructure. (2) Gartner predicts 40% of enterprise applications will embed task-specific AI agents by 2026, up from <5% in 2025 (Gartner via search snippet), signaling a massive shift from prototype to production workloads. (3) The "background agent" paradigm — long-running agents that operate on codebases and filesystems autonomously — emerged as a distinct category requiring specialized infrastructure beyond ephemeral sandboxes.

## Founders & Team

**Vivek Raja** — Co-founder
- BSc Mathematics and Computer Science, University of Edinburgh (LinkedIn, ZoomInfo via search snippet)
- Previously Technical Lead at Palantir, having progressed from Forward Deployed Engineer. Led technical delivery of one of the largest agent use cases across US hospitals (YC page)
- Prior: Software Engineer at Invert (bioprocess data solutions) (LinkedIn via search snippet)
- Head of Perception for Edinburgh University Formula Student; led team to victory in Formula Student AI UK competition in 2019 and 2020 (LinkedIn via search snippet)
- Twitter/X: Handle not confirmed for Terminal Use-specific account; multiple "Vivek Raja" accounts exist on X
- LinkedIn: linkedin.com/in/v-raja
- GitHub: github.com/v-raja — 33 followers (GitHub via search snippet)

**Stavros Filosidis** — Co-founder
- Electrical & Computer Engineering, Aristotle University of Thessaloniki (AUTh), majoring in Computer Science (LinkedIn via search snippet)
- Previously Software Engineer at Palantir, worked on coding infrastructure / dev tooling (YC page, LinkedIn)
- Twitter/X: @stavros_fil — 124 followers (X.com via search snippet)
- LinkedIn: linkedin.com/in/stavrosfilosidis
- GitHub: github.com/Stavrosfil — 36 followers, 11 public repos; pinned projects in distributed computing (distributed-knn), parallel algorithms, embedded systems (GitHub)

**Filip Balucha** — Co-founder
- AI & Computer Science, University of Edinburgh (University of Edinburgh blog, Feb 2021; LinkedIn)
- Previously Software Engineer at Palantir (Ontology team); started as intern at London office in summer 2022 (LinkedIn post via search snippet)
- Teaching Support at University of Edinburgh for Inf1A course (University of Edinburgh blog, Feb 2021)
- Twitter/X: @tbalucha (handle found; follower count not retrievable)
- LinkedIn: linkedin.com/in/filip-balucha
- GitHub: github.com/filipbalucha — 10 followers, 2 public repos (forked from palantir/blueprint and terminaluse/agent-skills); Arctic Code Vault Contributor (GitHub)

**Co-founder relationship:** Vivek Raja and Filip Balucha both attended the University of Edinburgh (BSc Mathematics & Computer Science and AI & Computer Science, respectively). All three founders worked at Palantir Technologies, where they overlapped. The YC page notes that "Vivek and Filip went to university together" and "became close friends when they worked together at Palantir" (YC page via search snippet).

**Founder-market fit:** All three founders come from Palantir, where they worked on enterprise-grade data infrastructure, dev tooling, and agent deployments at scale. Vivek's experience leading a large agent use case deployment across US hospitals at Palantir provides direct domain expertise in production agent orchestration. Stavros's work on coding infrastructure and dev tooling at Palantir maps directly to the developer tooling focus of Terminal Use. The team combines experience in infrastructure engineering, agent deployment, and developer-facing products.

## Key Risks

**Agent framework lock-in risk:** While Terminal Use claims framework agnosticism, the product prominently features Claude Agent SDK and Codex SDK integrations, and the Woz product is explicitly built for these SDKs. If Anthropic or OpenAI bundle native hosting infrastructure with their SDKs (OpenAI has already launched Frontier with hosted runtimes), Terminal Use's value proposition as a third-party orchestration layer diminishes. Mitigation: The company's framework-agnostic architecture and support for custom frameworks may insulate against single-provider dependency.

**Well-funded competitor convergence:** E2B ($32M), Daytona ($24M), Runloop ($7M), and Modal Labs ($111M) are all building overlapping agent infrastructure capabilities with significantly more capital. The "agent hosting" category is crowding quickly, and Terminal Use's differentiation (persistent filesystems, long-running agents) may not be durable if competitors expand their feature sets. No public data on Terminal Use's funding beyond the standard YC deal was found.

**Early traction uncertainty:** No public user counts, revenue figures, customer logos, press coverage, or community metrics were found. The GitHub organization has 4 repositories with 0 stars. The Woz product has visible pricing but no evidence of paying customers. At this stage, product-market fit is unvalidated in public data.

**Platform dependency on Slack:** The Woz product relies on Slack as its primary interaction surface. Changes to Slack's API, pricing, or app marketplace policies could impact distribution and user experience. Additionally, enterprise customers with security-sensitive workloads may resist running agent operations through a third-party messaging platform.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI agents market: $7.63B in 2025, projected $182.97B by 2033 at 49.6% CAGR (Grand View Research, 2026 via search snippet). Agentic AI market: $7.55B in 2025, projected $199.05B by 2034 at 43.84% CAGR (Precedence Research, 2026 via search snippet). |
| SAM | No public data found for agent hosting infrastructure sub-segment. |
| Traction | No public user counts, revenue, or customer data found. 4 GitHub repos with 0 stars (GitHub, Mar 2026). Docs site live at docs.terminaluse.com. |
| Revenue Signal | Woz pricing: $49/user/mo Starter, $99/user/mo Unlimited, Enterprise custom (woz.terminaluse.com). No public revenue figures found. |
| Founders | Vivek Raja (Co-founder): BSc Maths & CS, Edinburgh; Technical Lead at Palantir (agent use case at US hospitals). Stavros Filosidis (Co-founder): ECE, AUTh; Software Engineer at Palantir (coding infrastructure). Filip Balucha (Co-founder): AI & CS, Edinburgh; Software Engineer at Palantir (Ontology). |
| Competitors | E2B ($32M raised, seven-figure monthly revenue, ephemeral sandboxes for agents). Daytona ($24M raised, $1M+ ARR, stateful sandboxes with ms launch). Runloop ($7M raised, revenue unknown, enterprise devboxes for coding agents). Modal Labs ($111M raised, ~$50M ARR, serverless AI inference). OpenAI Frontier (bundled with OpenAI, hosted agent runtimes). |
| Moat Signals | Agent-specific filesystem primitives (forking, manifest-based sync, task-pinned versioning). Slack-based workflow integration creating switching costs. All early-stage. |
| Risk Factors | Agent framework provider bundling native hosting, well-funded competitor convergence, unvalidated public traction |
| Founder Reach | Stavros Filosidis: X @stavros_fil 124 followers, GitHub 36 followers. Vivek Raja: LinkedIn linkedin.com/in/v-raja, GitHub 33 followers. Filip Balucha: X @tbalucha (count not retrievable), GitHub 10 followers. |
| Distribution Signals | No Product Hunt launch found. No Hacker News launch found. No press coverage found. LinkedIn company page exists (follower count not retrievable). |
| Emails | founders@terminaluse.com |
