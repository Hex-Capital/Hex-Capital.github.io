# Replicas

> Use background coding agents from anywhere

| Field | Value |
|-------|-------|
| Website | https://replicas.dev |
| YC Page | https://www.ycombinator.com/companies/replicas |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, B2B, AI |
| YC Partner | Harj Taggar |
| Emails | founders@replicas.dev |

## The Idea

**Problem:** Engineering teams want to use AI coding agents (Claude Code, OpenAI Codex) for background task execution — implementing features, fixing bugs, resolving CI failures — but running these agents requires local compute, manual environment setup, and active developer attention. Developers cannot easily dispatch agent tasks from workflow tools (Slack, Linear, GitHub) and return to review completed pull requests. Current alternatives require either running agents in a local terminal (blocking the developer's machine) or setting up custom cloud infrastructure.

**Approach:** Replicas provides sandboxed cloud VMs pre-configured with a project's code, dependencies, and tooling. Users dispatch tasks to coding agents (Claude Code, Codex, with OpenCode coming soon) from Slack, Linear, GitHub, a web dashboard, or via API (replicas.dev website). Each agent runs in an isolated VM with SSH-only access; workspaces auto-sleep when idle and are archived but never accessed by Replicas (replicas.dev website). Agents produce pull requests ready for human review. The platform reports a 30%+ PR completion rate among engineering teams using it (replicas.dev website).

**Differentiation:** Versus running Claude Code or Codex locally: Replicas removes the need for local compute and manual environment provisioning. Versus Devin (Cognition): Replicas is agent-agnostic, supporting multiple SOTA agents rather than a proprietary model. Versus Intent (Augment Code): Intent is a macOS desktop app focused on spec-driven multi-agent orchestration (augmentcode.com); Replicas focuses on asynchronous task dispatch from existing workflow tools. Versus Sculptor (Imbue): Sculptor provides free containers where teams pay only LLM API costs (augmentcode.com); Replicas adds native integrations into Slack, Linear, and GitHub as dispatch surfaces.

**Business Model:** Subscription or direct credit purchase; users pay per active compute time; workspaces auto-sleep when idle (replicas.dev website). No visible pricing tiers or dollar amounts on the website. [Inferred]: Most likely monetization is usage-based compute pricing (per-minute or per-task VM time) plus a platform fee, consistent with cloud dev-environment pricing models.

**TAM/SAM:** The AI code assistant market was estimated at $3.0–$3.5B in 2025 (Gartner via search snippet). MarketsandMarkets projects the AI code assistants segment at $8.14B in 2025, growing to $127B by 2032 at 48.1% CAGR (MarketsandMarkets via search snippet). The AI coding agents sub-market reached ~$4B with three players (GitHub Copilot, Claude Code, Cursor) controlling >70% share (CB Insights, December 2025 via search snippet). [Inferred]: Replicas' SAM is the narrower "agent orchestration/execution platform" layer serving engineering teams that already use AI coding agents, likely a single-digit-billion-dollar segment within the broader market.

**GTM / Distribution:** Named customers include Helicone, Bluma, and Sorce (replicas.dev website). Demo booking available via cal.com/connor-replicas (replicas.dev website). [Inferred]: Initial distribution is founder-led sales through Connor Loi's network (Helicone is a former employer), YC peer companies, and developer word-of-mouth. The Slack/Linear/GitHub integrations serve as viral distribution vectors within engineering teams.

## Defensibility

- **Integration depth:** Native integrations with Slack, Linear, and GitHub create workflow stickiness; teams that embed Replicas into their ticketing and communication tools face switching costs (replicas.dev website).
- **Agent-agnostic positioning:** Supporting multiple agents (Claude Code, Codex, OpenCode) avoids lock-in to a single model provider, but this is replicable (replicas.dev website).
- **Workspace configuration data:** Over time, accumulated environment configs and workflow templates per customer could create switching friction. [Inferred]: This moat is nascent and unproven at this stage.

**Market structure:** The major AI coding agent providers (Anthropic/Claude Code, OpenAI/Codex) have limited incentive to build a multi-agent orchestration layer that features competitors' agents. [Inferred]: This creates a structural opening for a neutral platform, though each provider could build single-agent cloud execution (and OpenAI's Codex already runs in a cloud sandbox).

**Commoditization risk:** The core functionality — spinning up a VM, cloning a repo, running a CLI agent — is technically reproducible. Open-source projects like Ruflo already combine Claude Code and Codex orchestration (GitHub). Factory, Devin, and IDE-native solutions (Cursor background agents) all address overlapping use cases with substantially more resources.

## Market & Traction

**Traction signals:**
- Named customers: Helicone, Bluma, Sorce (replicas.dev website, March 2026)
- 30%+ PR completion rate claimed among engineering teams (replicas.dev website, March 2026)
- V1 launch announced (replicas.dev website, March 2026)
- Company Twitter/X: @tryreplicas (YC page); follower count not retrievable
- Founder Twitter/X: @connortbot; follower count not retrievable
- GitHub (founder): connortbot — 34 followers (GitHub, March 2026)
- LinkedIn company page: not found under replicas.dev domain
- Product Hunt launch: not found
- Discord/Slack community: no public data found
- No public revenue figures found

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Replicas |
|---|---|---|---|
| **Devin (Cognition)** | ~$900M total, $10.2B valuation (CNBC, Sep 2025) | $73M ARR growing to ~$150M with Windsurf (Cognition blog, 2025) | Proprietary AI agent; fully autonomous SWE; enterprise clients (Goldman Sachs, Cisco) |
| **Factory AI** | $50M Series B at $300M valuation (Factory.ai, Sep 2025) | Revenue unknown; 200% QoQ growth claimed (SiliconANGLE, Sep 2025) | Enterprise-focused "Droids" agents; customers include MongoDB, EY, Zapier |
| **Augment Code (Intent)** | $252M total, $977M valuation (TechCrunch, Apr 2024) | $20M revenue (Latka, Oct 2025) | Intent product: spec-driven multi-agent orchestration; $20-$200/mo tiers |
| **Sculptor (Imbue)** | Imbue raised $200M+ (via search snippet) | Revenue unknown; free platform (users pay LLM costs only) | Zero platform fee; containerized; similar BYOA model |

**Why now:**
- Claude Code launched May 2025 and reached 22K+ GitHub stars and 111K+ npm downloads (via search snippet). OpenAI Codex re-emerged as a standalone agent in 2025 (via search snippet). [Inferred]: The availability of multiple capable CLI-based coding agents that can run headlessly is the specific enabling catalyst — it created demand for a neutral orchestration/execution layer.
- Industry shift from synchronous "ask-and-wait" coding assistance to asynchronous, persistent agent workflows (VentureBeat, March 2026 via search snippet).

## Founders & Team

**Connor Loi** — Sole Founder & CEO
- CS, University of Waterloo (current or recent student) (LinkedIn, GitHub)
- Core team member at Helicone (YC W23), an open-source LLM observability platform (5.3K GitHub stars); shipped the AI Gateway, Prompts feature, and maintained the observability platform at scale over an 8-month period (LinkedIn post, ca.linkedin.com/in/connor-loi)
- CalHacks 11.0: won Best Use of Vapi with "LiveStory" project (search results via LinkedIn)
- Built "Squeak" (language learning app, 6 GitHub stars), "stack" (PR stacking tool, 8 stars), "caitlyn" (Monte Carlo ray tracer, 13 stars), "starbit" (space RTS with gRPC/QUIC, 5 stars) (GitHub)
- Twitter/X: @connortbot — follower count not retrievable (X.com returned 402)
- LinkedIn: ca.linkedin.com/in/connor-loi — 500+ connections, headline "Replicas" (LinkedIn)
- GitHub: github.com/connortbot — 34 followers, 21 repositories (GitHub, March 2026)
- Contributor to helicone/helicone (5.3K stars) and helicone/ai-gateway (558 stars) (GitHub)

**Co-founder relationship:** Solo founder — not applicable.

**Founder-market fit:** Connor Loi's 8-month tenure on the core team at Helicone (YC W23) gave him direct experience building developer infrastructure and working with LLM API traffic at scale (Helicone processes 2.1B+ requests per GitHub). His work on the AI Gateway specifically involved managing LLM request routing and observability — directly adjacent to orchestrating coding agents. As a University of Waterloo CS student, he represents the technical builder profile. [Inferred]: The solo-founder structure and student background mean the company currently lacks a senior go-to-market or enterprise sales co-founder, which could matter as the product moves beyond early adopters.

## Key Risks

**Name collision / discoverability:** "Replicas" is a common English word. Search results return Replicate, Replica Studios, Replika (AI chatbot), and Replica (urban planning) ahead of replicas.dev. This complicates SEO, brand searches, and investor/customer discovery (observed across all web searches conducted for this report).

**Solo founder with no prior founding experience:** Connor Loi is a solo founder, University of Waterloo student, with professional experience limited to an internship/core-team role at Helicone (LinkedIn). The company is not currently hiring (YC page). Operational capacity is constrained to one person for product, engineering, sales, and support simultaneously.

**Rapid commoditization from agent providers:** OpenAI's Codex already runs in a cloud sandbox natively. Anthropic could add cloud execution to Claude Code. If the major agent providers build native cloud-dispatch + workflow integrations, Replicas' value proposition narrows to multi-agent neutrality alone (observed from Codex product design; Anthropic Claude Code Channels noted by VentureBeat, March 2026).

**Heavily funded incumbents in adjacent space:** Devin ($900M+ raised, $10.2B valuation), Factory ($50M+), and Augment Code ($252M) all operate in overlapping territory with orders-of-magnitude more capital and established enterprise customer bases (multiple sources, 2024–2025). Replicas must find and defend a wedge before these players expand into multi-agent orchestration.

**Customer concentration risk:** Three named customers (Helicone, Bluma, Sorce), with Helicone being the founder's former employer (replicas.dev, LinkedIn). [Inferred]: Early traction may be heavily network-dependent, and losing one customer could represent a significant share of usage.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $8.14B in 2025, growing to $127B by 2032 at 48.1% CAGR (MarketsandMarkets via search snippet) |
| SAM | No public data found |
| Traction | 3 named customers: Helicone, Bluma, Sorce (replicas.dev, Mar 2026); 30%+ PR completion rate claimed (replicas.dev, Mar 2026); V1 launched (replicas.dev, Mar 2026) |
| Revenue Signal | No public data found |
| Founders | Connor Loi (Sole Founder & CEO): UWaterloo CS, Helicone (YC W23) core team 8 months, CalHacks 11.0 winner |
| Competitors | Devin/Cognition (~$900M raised, ~$150M ARR, proprietary autonomous SWE agent), Factory AI ($50M+ raised, revenue unknown, enterprise Droids agents), Augment Code/Intent ($252M raised, $20M revenue, spec-driven multi-agent orchestration), Sculptor/Imbue ($200M+ parent funding, revenue unknown, free containerized BYOA platform) |
| Moat Signals | No public data found |
| Risk Factors | Name collision/discoverability, solo student founder, commoditization from agent providers, heavily funded incumbents |
| Founder Reach | Connor Loi: Twitter @connortbot (count not retrievable), LinkedIn 500+ connections, GitHub 34 followers (GitHub, Mar 2026) |
| Distribution Signals | No public data found |
| Emails | founders@replicas.dev (replicas.dev website) |
